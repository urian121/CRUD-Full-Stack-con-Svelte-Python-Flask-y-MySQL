from flask import jsonify
from config_bd.bd import get_db_connection
from mysql.connector import Error


# 📌 Obtener un solo contacto por ID (GET)
def get_contacto_by_id(contacto_id):
    connection = get_db_connection()
    if not connection:
        return jsonify({"error": "No se pudo conectar a la base de datos"}), 500

    try:
        with connection.cursor(dictionary=True) as cursor:
            cursor.execute("SELECT * FROM tbl_contactos WHERE id = %s", (contacto_id,))
            contacto = cursor.fetchone()
            if not contacto:
                return jsonify({"error": "Contacto no encontrado"}), 404
            return jsonify(contacto), 200
    except Error as err:
        return jsonify({"error": str(err)}), 500
    connection.close()