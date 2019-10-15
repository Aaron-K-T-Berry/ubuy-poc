import { Request, Response } from "express";
import responseBuilder, { ApiCode } from "../../common/response-builder";
import { putItem, getCart, deleteCart } from "../../model/cart/cart.client";
import JwtHelper from "../../common/jwt-helper";
import _ from "lodash";

const getUserId = (req: Request) => {
	return JwtHelper.getUserId(req.cookies.token);
};

export default class CartController {
	public async putItem(req: Request, res: Response) {
		const userId = getUserId(req);
		const itemId = req.params.itemId;

		try {
			const currentCart = await getCart(userId);

			let data;
			if (currentCart == null) {
				data = { userId: userId, items: [itemId] };
			} else {
				data = { userId: userId, items: [...currentCart.items, itemId] };
			}

			await putItem(userId, data);
			responseBuilder.buildSuccess(res, {
				msg: `Successfully put item in cart for user with id: ${userId}`
			});
		} catch (err) {
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound, err);
		}
	}

	public async getCart(req: Request, res: Response) {
		try {
			const currentCart = await getCart(getUserId(req));

			res.send(currentCart);
		} catch (err) {
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound, err);
		}
	}

	public async deleteItem(req: Request, res: Response) {
		const userId = getUserId(req);
		const itemId = req.params.itemId;

		try {
			const cart = await getCart(userId);
			const matchIndex = cart.items.indexOf(itemId);
			(cart.items as string[]).splice(matchIndex, 1);
			const response = await putItem(userId, cart);

			responseBuilder.buildSuccess(res, {
				msg: `Successfully removed item in cart for user with id: ${userId}`,
				updateStats: response
			});
		} catch (err) {
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound, err);
		}
	}

	public async emptyCart(req: Request, res: Response) {
		const userId = getUserId(req);

		try {
			const response = await deleteCart(userId);

			responseBuilder.buildSuccess(res, {
				msg: `Successfully emptied cart user: ${userId}`,
				emptyResponse: response
			});
		} catch (err) {
			responseBuilder.buildAPIError(res, ApiCode.MongoNotFound, err);
		}
	}
}
