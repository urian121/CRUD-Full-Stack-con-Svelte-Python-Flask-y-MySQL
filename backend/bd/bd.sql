CREATE DATABASE IF NOT EXISTS crud_full_stack_svelte_mysql_python;
USE tbl_contactos;

CREATE TABLE tbl_contactos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  profesion VARCHAR(255) NOT NULL,
  edad INT NOT NULL,
  habla_ingles BOOLEAN NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);