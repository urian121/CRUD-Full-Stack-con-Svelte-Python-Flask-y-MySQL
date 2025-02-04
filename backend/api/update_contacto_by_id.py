from flask import request, jsonify
from config_bd.bd import get_db_connection
from mysql.connector import Error

# 📌 Actualizar un contacto por ID (PUT)
def update_contacto_by_id(contacto_id):
    connection = get_db_connection()
    if not connection:
        return jsonify({"error": "No se pudo conectar a la base de datos"}), 500

    try:
        data = request.get_json()
        id          = data.get('id')
        nombre      = data.get('nombre')
        profesion   = data.get('profesion')
        sexo        = data.get('sexo')
        edad        = data.get('edad')
        habla_ingles = data.get('habla_ingles')
        
        if not nombre or not profesion or not edad or not habla_ingles or not id:
            return jsonify({"error": "Todos los campos son requeridos"}), 400

        with connection.cursor(dictionary=True) as cursor:
            cursor.execute("UPDATE tbl_contactos SET nombre = %s, profesion = %s, sexo = %s, edad = %s, habla_ingles = %s WHERE id = %s", (nombre, profesion, sexo, edad, habla_ingles, contacto_id))
            connection.commit()
            return jsonify({"message": "Contacto actualizado correctamente"}), 200
    except Error as err:
        return jsonify({"error": str(err)}), 500
    connection.close()
