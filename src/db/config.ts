import { env } from '$env/dynamic/private';
import postgres from 'postgres';

const config = postgres(
	`postgres://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}:${parseInt(env.DB_PORT) || 5432}/${env.DB_DATABASE}`,
	{}
);

export default config;
