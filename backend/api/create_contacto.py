from flask import request, jsonify
from config_bd.bd import get_db_connection
from mysql.connector import Error


# 📌 Crear un contacto (POST)
def create_contacto():
    connection = get_db_connection()
    if not connection:
        return jsonify({"error": "No se pudo conectar a la base de datos"}), 500

    try:
        data = request.get_json()
        nombre      = data.get('nombre')
        profesion   = data.get('profesion')
        edad        = data.get('edad')
        habla_ingles = data.get('habla_ingles')

        if not nombre or not profesion or not edad or not habla_ingles:
            return jsonify({"error": "Todos los campos son requeridos"}), 400

        with connection.cursor(dictionary=True) as cursor:
            cursor.execute("INSERT INTO tbl_contactos (nombre, profesion, edad, habla_ingles) VALUES (%s, %s, %s, %s)", (nombre, profesion, edad, habla_ingles))
            connection.commit()
            return jsonify({"message": "Contacto creado correctamente"}), 201
    except Error as err:
        return jsonify({"error": str(err)}), 500
    connection.close()