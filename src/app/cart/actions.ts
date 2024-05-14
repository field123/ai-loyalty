"use server"
import {sql} from '@vercel/postgres';

export async function exampleAction() {
    const temp = await sql`SELECT * FROM temp`;

    return temp.rows;
}