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

export async function retrieveUsers() {
    const users = await sql`SELECT u.guid, u.email, u.name, SUM(o.subtotal) AS loyalty_value
    FROM "user" u
    INNER JOIN "order" o ON u.guid = o."userGuid"
    GROUP BY u.guid;
    `;

    return users.rows;
}

export async function createOrder(formData: FormData) {
    const userGuid = formData.get('userGuid') as string
    const subTotal = parseFloat(formData.get('subtotal') as string)
    const shipping = parseFloat(formData.get('shipping') as string)
    const total = parseFloat(formData.get('total') as string)

    await sql`INSERT INTO "order" (guid, createdDate, "userGuid", subtotal, shipping, total)
    VALUES (gen_random_uuid(), CURRENT_DATE(), ${userGuid}, ${subTotal}, ${shipping}, ${total});
    `;

    const orderLines = JSON.parse(formData.get('orderLine') as string)

    let orderLinesQuery = `INSERT INTO "orderline" (guid, orderguid, productguid, quantity)`

    for (let i = 0; i < orderLines.length; i++) {
        const line = orderLines[i]
        if (i === 0) {
            orderLinesQuery += `(gen_random_uuid(), ${line.orderGuid}, ${line.productGuid}, ${line.quantity})`
        } else {
            orderLinesQuery += `,(gen_random_uuid(), ${line.orderGuid}, ${line.productGuid}, ${line.quantity})`
        }
    }
    orderLinesQuery += ';'

    await sql`${orderLinesQuery}`;
}

export async function retrieveProducts() {
    const products = await sql`SELECT guid, name, price, "newProduct", description
    FROM product;`;

    return products.rows;
}