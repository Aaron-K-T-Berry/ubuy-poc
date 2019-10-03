export default [
	{
		id: 1,
		name: "cheese grater",
		price: "5999.99",
		desc: "that is base price btw.",
		img: "cheesegrater.jpg",
		branch: "Ultimo"
	},
	{
		id: 2,
		name: "expensive monitor",
		price: "4999.99",
		desc:
			"Introducing Apple Pro Display XDR, the world’s best pro display. *Monitor stand not included.",
		img: "xD.jpg",
		branch: "Ultimo"
	},
	{
		id: 3,
		name: "expensive stand",
		price: "999.99",
		desc: "monitor stand included",
		img: "stand_XD.jpg",
		branch: "Ultimo"
	},
	{
		id: 4,
		name: "greatest mouse",
		price: "1199.99",
		desc: "it's balling",
		img: "ball_mouse.jpg",
		branch: "Haymarket"
	},
	{
		id: 5,
		name: "wow rays",
		price: "11.99",
		desc: "wowow",
		img: "rtx.jpg",
		branch: "Ultimo"
	},
	{
		id: 6,
		name: "gaming mouse",
		price: "7.99",
		desc: "wow",
		img: "mouse.jpg",
		branch: "Glebe"
	}
];

export interface Item {
	id: number;
	name: string;
	price: string;
	desc: string;
	img: string;
}

export interface ItemRow{
	id: number;
	name: string;
	price: string;
	branch: string;
	desc: string;
}
