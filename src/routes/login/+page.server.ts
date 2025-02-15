import { log } from 'console';
import { getUserLogin } from '../../db/query/user.ts';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {};

export const actions = {
	login: async (event) => {
		const obj: Record<string, string> = {};
		type User = {
			username: string;
			password: string;
		};
		const formData = await event.request.formData();
		for (const [key, value] of formData.entries()) {
			obj[key] = value as string;
		}
		const userForm: User = obj as User;

		log(await getUserLogin(userForm.username, userForm.password));
	}
};
