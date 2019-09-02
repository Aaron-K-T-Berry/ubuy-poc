export default [
	{
		id: 1,
		name: "cheese grater",
		price: "5999.99",
		desc: "that is base price btw.",
		img: "cheesegrater.jpg"
	},
	{
		id: 2,
		name: "xDr PrO dIsPlAy",
		price: "4999.99",
		desc:
			"Introducing Apple Pro Display XDR, the world’s best pro display. *Monitor stand not included.",
		img: "xD.jpg"
	},
	{
		id: 3,
		name: "monitor stand",
		price: "999.99",
		desc: "monitor stand included",
		img: "stand_XD.jpg"
	},
	{
		id: 4,
		name: "greatest mouse of all time",
		price: "1199.99",
		desc: "GOAT",
		img: "ball_mouse.jpg"
	},
	{
		id: 5,
		name: "wow rays",
		price: "11.99",
		desc: "let there be light",
		img: "rtx.jpg"
	},
	{
		id: 6,
		name: "nice mouse bro",
		price: "7.99",
		desc: "wow",
		img: "mouse.jpg"
	}
];

export interface Item {
	id: number;
	name: string;
	price: string;
	desc: string;
	img: string;
}
