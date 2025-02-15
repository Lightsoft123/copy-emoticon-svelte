import type { Handle } from '@sveltejs/kit';
import { runMigration } from './db/run-migrations.ts';

export const handle: Handle = async ({ event, resolve }) => {
	await runMigration();

	// if (event.url.pathname.startsWith('/emoticons')) {
	// 	return new Response('custom response');
	// }

	const response = await resolve(event);
	return response;
};
