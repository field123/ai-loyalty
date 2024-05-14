import psycopg2
import uuid
import random
from faker import Faker

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

# Function to generate insert statements for products using Faker
def generate_product_insert(num_products):
    insert_statements = []
    for _ in range(num_products):
        product_guid = uuid.uuid4()
        product_name = fake.word() + " " + fake.word() + " " + fake.word()  # Generate a random product name
        product_description = fake.sentence(nb_words=10, variable_nb_words=False)
        product_price = round(random.uniform(10, 100), 2)  # Random price between 10 and 500
        is_new_product = random.choice([True, False])  # Random boolean for newProduct

        insert_statement = f"""
            INSERT INTO public.product (guid, name, price, "newProduct", description)
            VALUES ('{product_guid}', '{product_name}', {product_price}, {is_new_product}, '{product_description}');
        """
        insert_statements.append(insert_statement)

    return insert_statements

# Generate insert statements for 100 sample products
num_products_to_generate = 100
product_insert_statements = generate_product_insert(num_products_to_generate)

# Execute insert statements
for statement in product_insert_statements:
    cur.execute(statement)

# Commit the transaction
conn.commit()

# Close cursor and connection
cur.close()
conn.close()

print(f"{num_products_to_generate} insert statements generated and executed successfully.")