export default [
	{
		_id: "1",
		name: "cheese grater",
		price: "5999.99",
		desc: "that is base price btw.",
		photo: "cheesegrater.jpg",
		branch: "Ultimo"
	},
	{
		_id: "2",
		name: "expensive monitor",
		price: "4999.99",
		desc:
			"Introducing Apple Pro Display XDR, the world’s best pro display. *Monitor stand not included.",
		photo: "xD.jpg",
		branch: "Ultimo"
	},
	{
		_id: "3",
		name: "expensive stand",
		price: "999.99",
		desc: "monitor stand included",
		photo: "stand_XD.jpg",
		branch: "Ultimo"
	},
	{
		_id: "4",
		name: "greatest mouse",
		price: "1199.99",
		desc: "it's balling",
		photo: "ball_mouse.jpg",
		branch: "Haymarket"
	},
	{
		_id: "5",
		name: "wow rays",
		price: "11.99",
		desc: "wowow",
		photo: "rtx.jpg",
		branch: "Ultimo"
	},
	{
		_id: "6",
		name: "gaming mouse",
		price: "7.99",
		desc: "wow",
		photo: "mouse.jpg",
		branch: "Glebe"
	}
];

export interface Item {
	_id: string;
	name: string;
	price: string;
	desc: string;
	photo: string;
	branch: string;
}
