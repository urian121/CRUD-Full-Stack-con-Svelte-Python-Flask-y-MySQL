from flask import Flask # Importar la clase Flask
from flask_cors import CORS # Importar CORS
from api.get_contactos import get_all_contactos # Importar la función get_all_contactos
from api.create_contacto import create_contacto # Importar la función create_contacto
from api.get_contacto_by_id import get_contacto_by_id # Importar la función get_contacto_by_id
from api.update_contacto_by_id import update_contacto_by_id # Importar la función update_contacto_by_id
from api.delete_contacto import delete_contacto # Importar la función delete_contacto

# Configuración de la app
app = Flask(__name__)
CORS(app)  # Habilitar CORS

# Rutas para contactos
@app.route('/contactos', methods=['POST'])
def contacto():
    return create_contacto()

# Ruta para obtener todos los contactos
@app.route('/contactos', methods=['GET'])
def get_contactos():
    return get_all_contactos()

# Ruta para obtener un contacto por ID
@app.route('/contactos/<int:contacto_id>', methods=['GET'])
def todo(contacto_id):
    return get_contacto_by_id(contacto_id)


# Ruta para actualizar un contacto
@app.route('/contactos/<int:contacto_id>', methods=['PUT'])
def update(contacto_id):
    return update_contacto_by_id(contacto_id)


# Ruta para eliminar un contacto
@app.route('/contactos/<int:contacto_id>', methods=['DELETE'])
def delete(contacto_id):
    return delete_contacto(contacto_id)


# Iniciar el servidor
if __name__ == '__main__':
    app.run(debug=True)
