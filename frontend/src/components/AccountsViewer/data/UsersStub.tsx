export default [
	{
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
}
