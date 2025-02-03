import mysql.connector
from mysql.connector import Error

def get_db_connection():
    """Obtiene una conexión a la base de datos y la devuelve."""
    try:
        connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password='',
            database='crud_full_stack_svelte_mysql_python',
            charset='utf8mb4',
            collation='utf8mb4_unicode_ci',
        )
        return connection
    except Error as err:
        print(f"Error de conexión a la base de datos: {err}")
        return None