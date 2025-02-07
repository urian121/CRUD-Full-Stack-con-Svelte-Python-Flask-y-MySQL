from flask import jsonify
from config_bd.bd import get_db_connection
from mysql.connector import Error


# Ruta para eliminar un contacto especifico
def delete_contacto(contacto_id):
    connection = get_db_connection()  # Obtener la conexión una sola vez
    if not connection:  # Verificar si la conexión falló
        return jsonify({"error": "No se pudo conectar a la base de datos"}), 500

    try:
        with connection.cursor(dictionary=True) as cursor:
            cursor.execute("SELECT * FROM tbl_contactos WHERE id = %s", (contacto_id,))
            contacto = cursor.fetchone()
            if not contacto:
                return jsonify({"error": "Contacto no encontrado"}), 404

            cursor.execute("DELETE FROM tbl_contactos WHERE id = %s", (contacto_id,))
            connection.commit()
            return jsonify({"message": "Contacto eliminado correctamente"}), 200  # 200 en DELETE
    except Error as err:
        return jsonify({"error": str(err)}), 500
    connection.close()  # Cerrar conexión solo si no hubo error
