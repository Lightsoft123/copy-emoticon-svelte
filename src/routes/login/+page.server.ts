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

		const encoder = new TextEncoder();
		const hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(userForm.password));
		const hashArray = Array.from(new Uint8Array(hashBuffer));
		userForm.password = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

		log(await getUserLogin(userForm.username, userForm.password));
	}
};
