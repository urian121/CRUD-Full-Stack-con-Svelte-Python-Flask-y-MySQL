# 📌 API de Contactos con Flask

Esta API permite gestionar contactos a través de distintos endpoints utilizando Flask y MySQL.

## 📍 Base URL
```
http://localhost:5000
```


## 📌 Endpoints Disponibles

### **1️⃣ Crear un Contacto**
**📌 POST `/contactos`**

- **Descripción:** Crea un nuevo contacto en la base de datos.
- **Cuerpo de la solicitud (JSON):**

```json
{
    "nombre": "Urian",
    "habla_ingles": 0,
    "profesion": "Ingeniero de Sistemas",
    "edad": 35
}
```

- **Respuesta Exitosa (201):**
```json
{
  "message": "Contacto creado correctamente"
}
```

### **2️⃣ Obtener Todos los Contactos**
**📌 GET `/contactos`**

- **Descripción:** Obtiene una lista de todos los contactos registrados.
- **Respuesta Exitosa (200):**

```json
[
    {
        "created_at": "Mon, 03 Feb 2025 14:12:07 GMT",
        "edad": 35,
        "habla_ingles": 0,
        "id": 1,
        "nombre": "Urian",
        "profesion": "Ingeniero de Sistemas"
    },
    {
        "created_at": "Mon, 03 Feb 2025 14:55:24 GMT",
        "edad": 25,
        "habla_ingles": 1,
        "id": 2,
        "nombre": "Brenda",
        "profesion": "Developer"
    }
]
```

### **3️⃣ Obtener un Contacto por ID**
**📌 GET `/contactos/{contacto_id}`**

- **Descripción:** Obtiene la información de un contacto específico.
- **Parámetro en la URL:** `contacto_id` (ID del contacto a buscar)
- **Respuesta Exitosa (200):**

```json
{
    "created_at": "Mon, 03 Feb 2025 14:55:24 GMT",
    "edad": 25,
    "habla_ingles": 1,
    "id": 2,
    "nombre": "Brenda",
    "profesion": "Developer"
}
```

- **Respuesta Error (404):**

```json
{
  "error": "Contacto no encontrado"
}
```


### **4️⃣ Actualizar un Contacto por ID**
**📌 PUT `/contactos/{contacto_id}`**

- **Descripción:** Actualiza la información de un contacto.
- **Parámetro en la URL:** `contacto_id` (ID del contacto a actualizar)
- **Cuerpo de la solicitud (JSON):**

```json
  {
    "id": 2,
    "nombre": "Brenda Viera",
    "habla_ingles": 0,
    "profesion": "Developer",
    "edad": 25
  }
```

- **Respuesta Exitosa (200):**
```json
{
  "message": "Contacto actualizado correctamente"
}
```

- **Respuesta Error (404):**
```json
{
  "error": "Contacto no encontrado"
}
```

### **5️⃣ Eliminar un Contacto por ID**
**📌 DELETE `/contactos/{contacto_id}`**

- **Descripción:** Elimina un contacto de la base de datos.
- **Parámetro en la URL:** `contacto_id` (ID del contacto a eliminar)
- **Respuesta Exitosa (200):**

**Pasando el `contacto_id` que se desea eliminar**
```json
{
  "id": 2,
}
```
**Respuesta**
```json
{
  "message": "Contacto eliminado correctamente"
}
```

- **Respuesta Error (404):**
```json
{
  "error": "Contacto no encontrado"
}
```


## 🚀 **Instrucciones para Ejecutar la API**

1️⃣ Crear y activar un entorno virtual
Si aún no tienes un entorno virtual, puedes seguir esta ![Guia](https://www.urianviera.com/python/crear-entornos-virtuales-en-python)
```
pip install -r requirements.txt
```

2️⃣ Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:
```
pip install -r requirements.txt

```

3️⃣  Iniciar la API
Para ejecutar la API, usa:
```
python api.py

```

4️⃣ Probar los endpoints

Puedes probar los endpoints con Postman, cURL o cualquier cliente API de tu preferencia. 🚀



## 🚀 Cómo puedes apoyar 📢
***
Si este proyecto te ha sido útil, aquí tienes algunas formas de ayudarme a seguir creando contenido de calidad:  

✨ **Comparte este proyecto** con otros desarrolladores para que más personas puedan beneficiarse.  

☕ **Invítame un café o una cerveza 🍺** para seguir motivado:  
   - [Paypal](https://www.paypal.me/iamdeveloper86) (`iamdeveloper86@gmail.com`).  

### ⚡ ¡Únete a la [Comunidad WebDeveloper](https://www.youtube.com/WebDeveloperUrianViera?sub_confirmation=1)!  
Suscríbete y no te pierdas nuevos tutoriales, trucos y recursos para desarrolladores.  

#### ⭐ **Déjanos una estrella en GitHub**  
Dicen que trae buena suerte 🍀 y nos ayuda a crecer.  

**¡Gracias por tu apoyo! 🤓🙌**