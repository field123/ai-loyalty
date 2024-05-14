import { sql } from '@vercel/postgres';

export default async function Temp() {
    const temp = await sql`SELECT * FROM temp`;

    return (
        <div>
            <pre >{JSON.stringify(temp.rows)}</pre>
        </div>
    );
}