# Proyecto de Migración de Datos de Team Support a Flexygo

Este proyecto tiene como objetivo recoger datos de Team Support a través de su API en formato JSON, crear una base de datos a partir de esos datos, y migrar los datos a la nueva base de datos utilizando Node.js. Finalmente, la base de datos se conectará a una aplicación Flexygo.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Primer Paso: Estudio de la API y Creación de la Base de Datos](#primer-paso-estudio-de-la-api-y-creación-de-la-base-de-datos)
- [Segundo Paso: Configuración del Entorno y Automatización de Migraciones](#segundo-paso-configuración-del-entorno-y-automatización-de-migraciones)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribución](#contribución)
- [Licencia](#licencia)
- [Autores](#autores)
- [Agradecimientos](#agradecimientos)

## Descripción

Proyecto en el que recogemos datos de Team Support a través de su API en formato JSON. A partir de la API, creamos la base de datos con su respectivo modelo entidad-relación y realizamos el paso a tablas con el objetivo de migrar esos datos a la nueva base de datos creada usando Node.js. El objetivo final es conectar la base de datos a una aplicación Flexygo.

## Primer Paso: Estudio de la API y Creación de la Base de Datos

1. Estudiar la API de Team Support para entender la estructura de los datos y las relaciones entre ellos.
2. Crear el diseño de la base de datos utilizando un modelo entidad-relación.
3. Implementar la base de datos en un gestor de bases de datos (ej. MySQL, PostgreSQL).

## Segundo Paso: Configuración del Entorno y Automatización de Migraciones

1. Configurar el entorno de programación:
   - Instalar Node.js y npm.
   - Instalar Sequelize como ORM para manejar las migraciones de la base de datos.

2. Programar el script de migración:
   - Conectar a la API de Team Support y obtener los datos en formato JSON.
   - Crear las migraciones necesarias para transferir los datos a la base de datos.
   - Automatizar las migraciones utilizando Sequelize para asegurar que los datos se puedan migrar a cualquier base de datos compatible.

## Requisitos

- Node.js
- npm (Node Package Manager)
- Sequelize
- Un gestor de bases de datos compatible (MySQL, PostgreSQL, etc.)

## Instalación

Sigue estos pasos para configurar el entorno de desarrollo:

```bash
# Clonar el repositorio
git clone https://github.com/usuario/nombre-del-proyecto.git

# Navegar al directorio del proyecto
cd nombre-del-proyecto

# Instalar las dependencias
npm install
