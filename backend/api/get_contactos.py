from flask import jsonify
from config_bd.bd import get_db_connection
from mysql.connector import Error


# 📌 Obtener todos los contactos (GET)
def get_all_contactos():
    connection = get_db_connection()
    if not connection:
        return jsonify({"error": "No se pudo conectar a la base de datos"}), 500

    try:
        with connection.cursor(dictionary=True) as cursor:
            cursor.execute("SELECT *, CASE WHEN habla_ingles = 1 THEN 'Si' ELSE 'No' END  AS habla_ingles FROM tbl_contactos")
            contactos = cursor.fetchall()
            return jsonify(contactos), 200
    except Error as err:
        return jsonify({"error": str(err)}), 500
    connection.close()