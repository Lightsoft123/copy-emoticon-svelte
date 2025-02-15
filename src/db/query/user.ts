import db from '../config.ts';

const getUserLogin = async (user: string, password: string) => {
	return await db.unsafe(`
        Select * from users 
        where (username = '%${user}%' or email = '%${user}%')
        and password = ${password}`);
};

export { getUserLogin };
