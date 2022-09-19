CREATE DATABASE IF NOT EXISTS registro_contadores;

USE registro_contadores;

CREATE TABLE IF NOT EXISTS tbl_usuario (
	cveUsuario SMALLINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(350) NOT NULL,
    apellidos VARCHAR(450) NOT NULL,
    username VARCHAR(150) NOT NULL,
    password VARCHAR(350) NOT NULL
);

CREATE TABLE IF NOT EXISTS tbl_contador (
	cveContador SMALLINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(250) NOT NULL,
    descripcion VARCHAR(500) NOT NULL,
    tipoContrtacion INT NOT NULL,
    fechaContratacion DATETIME NOT NULL,
    cveRegistro SMALLINT NOT NULL,
    FOREIGN KEY (cveRegistro) REFERENCES tbl_usuario(cveUsuario)
);