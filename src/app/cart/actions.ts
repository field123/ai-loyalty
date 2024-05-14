"use server"
import {sql} from '@vercel/postgres';

export async function retrieveUser(userEmail: string) {
    const user = await sql`SELECT u.guid, u.email, u.name, SUM(o.subtotal) AS loyalty_value
    FROM "user" u
    INNER JOIN "order" o ON u.guid = o."userGuid"
    WHERE u.email = ${userEmail}
    GROUP BY u.guid;
    `;

    return user.rows;
}

export async function createOrder() {
    // WIP
    await sql`INSERT INTO "order" (guid, createdDate, "userGuid", subtotal, shipping, total)
    VALUES ('ORD123', 'user123', 50.00, CURRENT_DATE());
    `;
}