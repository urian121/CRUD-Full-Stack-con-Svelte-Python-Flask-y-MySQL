from flask import Flask
from flask_cors import CORS
from api.get_all_contactos import get_all_contactos
from api.create_contacto import create_contacto
from api.get_contacto_by_id import get_contacto_by_id
from api.update_contacto_by_id import update_contacto_by_id
from api.delete import delete_contacto

app = Flask(__name__)
CORS(app)  # Habilitar CORS

# Rutas para contactos
@app.route('/contactos', methods=['POST'])
def contacto():
    return create_contacto()

@app.route('/contactos', methods=['GET'])
def get_contactos():
    return get_all_contactos()

@app.route('/contactos/<int:contacto_id>', methods=['GET'])
def todo(contacto_id):
    return get_contacto_by_id(contacto_id)

@app.route('/contactos/<int:contacto_id>', methods=['PUT'])
def update(contacto_id):
    return update_contacto_by_id(contacto_id)

@app.route('/contactos/<int:contacto_id>', methods=['DELETE'])
def delete(contacto_id):
    return delete_contacto(contacto_id)


if __name__ == '__main__':
    app.run(debug=True)
