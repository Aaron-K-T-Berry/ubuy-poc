export default [
	{
<<<<<<< HEAD
		firstName: "Alby",
		lastName: "olly",
		email: "lol@lol.com",
		password: "123",
	
		address: "main st 123"
	},
	{
		firstName: "Alby",
		lastName: "olly",
		email: "lol@lol.com",
		password: "123",
	
		address: "main st 123"
	},{
		firstName: "Alby",
		lastName: "olly",
		email: "lol@lol.com",
		password: "123",
	
		address: "main st 123"
	},{
		firstName: "Alby",
		lastName: "olly",
		email: "lol@lol.com",
		password: "123",
	
		address: "main st 123"
	},{
		firstName: "Alby",
		lastName: "olly",
		email: "lol@lol.com",
		password: "123",
	
		address: "main st 123"
	},{
		firstName: "Alby",
		lastName: "olly",
		email: "lol@lol.com",
		password: "123",
	
		address: "main st 123"
	},
];

export interface User {
	firstName: string;
	lastName: string;
	email: string;
	password?: string;
	address: string | undefined;
}

export interface UserRow{
	firstName: string;
	lastName: string;
	email: string;
	password?: string;
	address: string | undefined;
=======
        firstName: "John",
        lastName: "Krasinsky",
        email: "shh@gmail.com",
        address: "123 Street"
	},
	{
		firstName: "My Name",
        lastName: "Jeff",
        email: "jason@gmail.com",
        address: "21 Street"
	}
];

export interface UserRow {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
}

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
>>>>>>> d932ecc59ca3f2cf7a2cef605e9a73d822d31be0
}
