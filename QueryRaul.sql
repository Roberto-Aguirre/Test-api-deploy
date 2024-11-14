CREATE DATABASE formulario;
USE formulario;
CREATE TABLE forms(id integer AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    telefono VARCHAR(12) NOT NULL,
    mensaje VARCHAR(500) NOT NULL,
    medio_contacto VARCHAR(30) NOT NULL,
    momento_contacto VARCHAR(30) NOT NULL,
    novedades BOOLEAN,
    fecha DATETIME
);