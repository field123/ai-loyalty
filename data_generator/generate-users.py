import psycopg2
from faker import Faker
import uuid

# Connect to your PostgreSQL database
conn = psycopg2.connect(
    dbname="verceldb",
    user="default",
    password="ocw5dAsUmFV0",
    host="ep-damp-glade-a2pdc8gz-pooler.eu-central-1.aws.neon.tech",
    port="5432"
)

# Create a cursor object using the connection
cur = conn.cursor()

# Create Faker object for generating fake data
fake = Faker()

# Generate insert statements for 100 sample users
for _ in range(100):
    # Generate a random UUID
    user_guid = uuid.uuid4()

    # Generate fake user data
    user_email = fake.email()
    user_name = fake.name()

    # Construct the INSERT statement
    insert_statement = """
        INSERT INTO public."user" (guid, email, name)
        VALUES ('{}', '{}', '{}');
    """.format(user_guid, user_email, user_name)

    # Execute the INSERT statement
    cur.execute(insert_statement)

# Commit the transaction
conn.commit()

# Close the cursor and connection
cur.close()
conn.close()

print("Insert statements generated and executed successfully.")