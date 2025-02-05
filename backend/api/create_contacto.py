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
        sexo        = data.get('sexo')
        edad        = data.get('edad')
        habla_ingles = data.get('habla_ingles')

        if not nombre or not profesion:
            return jsonify({"error": "Todos los campos son requeridos"}), 400

        with connection.cursor(dictionary=True) as cursor:
            cursor.execute("""
                INSERT INTO tbl_contactos (nombre, profesion, sexo, edad, habla_ingles) 
                VALUES (%s, %s, %s, %s, %s)
            """, (nombre, profesion, sexo, edad, habla_ingles))
            connection.commit()
            
            # Obtener el ID del último contacto insertado
            contacto_id = cursor.lastrowid  

            # Consultar el contacto recién creado
            cursor.execute("SELECT * FROM tbl_contactos WHERE id = %s", (contacto_id,))
            nuevo_contacto = cursor.fetchone()

        # Cerrar la conexión después de completar el bloque try
        connection.close()

        return jsonify(nuevo_contacto), 201
    except Error as err:
        connection.close()  # Aseguramos el cierre de la conexión si ocurre un error
        return jsonify({"error": str(err)}), 500
