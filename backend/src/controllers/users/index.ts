export default class AuthController {
	private secret = 'mysecretsshhh';

	constructor() {}

	public getSecret(): string {
		return this.secret
	}
}
