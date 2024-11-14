SHOW DATABASES;
CREATE DATABASE formulario;
USE formulario;
SHOW TABLES FROM formulario;
DROP TABLE forms;
CREATE TABLE forms(
	id integer AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    telefono VARCHAR(12) NOT NULL,
    mensaje VARCHAR(500) NOT NULL,
    medio_contacto VARCHAR(30) NOT NULL,
    momento_contacto VARCHAR(30) NOT NULL,
    novedades BOOLEAN,
	fecha DATETIME
);
SELECT * FROM forms;
ALTER TABLE forms ADD test Varchar(100);
DESCRIBE forms;
INSERT INTO forms(nombre,correo,telefono,mensaje,medio_contacto,momento_contacto,novedades,fecha) VALUES ("Nombre","Correo","telefono","Mensaje","mediocontacto","momento_contacto",True);