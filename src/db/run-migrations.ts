import { readFileSync } from 'fs';
import db from './config.ts';

async function runSQLFile(filePath: string) {
	try {
		// Read the SQL file
		const sql = readFileSync(filePath, 'utf-8');

		// Execute SQL commands
		await db.unsafe(sql);
		console.log('SQL script executed successfully');
	} catch (error) {
		console.error('Error executing SQL script:', error);
	}
}

// Run the script with your SQL file path
// V1.0_create_table_user.sql
export const runMigration = async () => {
	await runSQLFile('./src/db/migrations/V1.0__create_table_user.sql');
};
