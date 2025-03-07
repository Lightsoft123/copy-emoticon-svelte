import db from '../config.ts';

const getUserLogin = async (user: string, password: string) => {
	return await db.unsafe(`
        Select * from users 
        where (upper(username) = upper('${user}') or upper(email) like upper('${user}'))
        and password = '${password}'`);
};

const registerNewUser = async (name: string, username: string, email: string, password: string) => {
	try {
		await db.unsafe(
			`insert into users(username, name, email, password) values ('${username}', '${name}', '${email}', '${password}')`
		);
	} catch (e) {
		console.error(`failed to insert\n${e}`);
	}
};

export { getUserLogin, registerNewUser };
