import psycopg2
from faker import Faker
import uuid
import random

# Database connection parameters
# Connect to your PostgreSQL database
conn = psycopg2.connect(
    dbname="verceldb",
    user="default",
    password="ocw5dAsUmFV0",
    host="ep-damp-glade-a2pdc8gz-pooler.eu-central-1.aws.neon.tech",
    port="5432"
)
cur = conn.cursor()

# Faker object for generating fake data
fake = Faker()

# Function to generate insert statements for orders
def generate_order_insert(user_guids, num_orders):
    insert_statements = []
    for _ in range(num_orders):
        order_guid = uuid.uuid4()
        created_date = fake.date_between(start_date='-30d', end_date='today')  # Random past 30 days
        user_guid = random.choice(user_guids)
        subtotal = round(random.uniform(10, 1000), 2)  # Random subtotal between 10 and 1000
        shipping = round(random.uniform(5, 50), 2)     # Random shipping cost between 5 and 50
        total = subtotal + shipping

        insert_statement = f"""
            INSERT INTO public."order" (guid, "createdDate", "userGuid", subtotal, shipping, total)
            VALUES ('{order_guid}', '{created_date}', '{user_guid}', {subtotal}, {shipping}, {total});
        """
        insert_statements.append(insert_statement)

    return insert_statements

# Retrieve existing user GUIDs from the "user" table
cur.execute("SELECT guid FROM public.\"user\";")
user_guids = [row[0] for row in cur.fetchall()]

# Generate insert statements for 500 sample orders
num_orders_to_generate = 500
order_insert_statements = generate_order_insert(user_guids, num_orders_to_generate)

# Execute insert statements
for statement in order_insert_statements:
    cur.execute(statement)

# Commit the transaction
conn.commit()

# Close cursor and connection
cur.close()
conn.close()

print(f"{num_orders_to_generate} insert statements generated and executed successfully.")