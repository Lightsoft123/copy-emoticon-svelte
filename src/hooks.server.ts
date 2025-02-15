import { redirect, type Handle } from '@sveltejs/kit';
import { runMigration } from './db/run-migrations.ts';

let isMigrated = false;

export const handle: Handle = async ({ event, resolve }) => {
	if (!isMigrated) {
		await runMigration();
		isMigrated = true;
	}

	// if (event.url.pathname.startsWith('/emoticons')) {
	// 	return new Response('custom response');
	// }

	if (event.url.pathname === '/') redirect(302, '/emoticons');

	const response = await resolve(event);
	return response;
};
