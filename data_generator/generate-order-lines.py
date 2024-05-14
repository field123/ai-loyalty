import psycopg2
import uuid
import random

# Connect to your PostgreSQL database
conn = psycopg2.connect(
    dbname="verceldb",
    user="default",
    password="ocw5dAsUmFV0",
    host="ep-damp-glade-a2pdc8gz-pooler.eu-central-1.aws.neon.tech",
    port="5432"
)

cur = conn.cursor()

# Function to generate insert statements for orderlines
def generate_orderline_insert(num_orderlines_per_order):
    insert_statements = []
    cur.execute("SELECT guid FROM public.\"order\";")
    order_guids = [row[0] for row in cur.fetchall()]

    cur.execute("SELECT guid FROM public.product;")
    product_guids = [row[0] for row in cur.fetchall()]

    for order_guid in order_guids:
        num_lines = random.randint(1, 3)  # Random number of orderlines (between 1 and 3)
        selected_products = random.sample(product_guids, num_lines)  # Randomly select products for orderlines

        for product_guid in selected_products:
            line_guid = uuid.uuid4()
            quantity = random.randint(1, 10)  # Random quantity (between 1 and 10)

            insert_statement = f"""
                INSERT INTO public.orderline (guid, orderguid, productguid, quantity)
                VALUES ('{line_guid}', '{order_guid}', '{product_guid}', {quantity});
            """
            insert_statements.append(insert_statement)

    return insert_statements

# Generate insert statements for orderlines
orderline_insert_statements = generate_orderline_insert(num_orderlines_per_order=3)

# Execute insert statements
for statement in orderline_insert_statements:
    cur.execute(statement)

# Commit the transaction
conn.commit()

# Close cursor and connection
cur.close()
conn.close()

print("Insert statements generated and executed successfully.")