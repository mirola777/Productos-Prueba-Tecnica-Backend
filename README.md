
# Productos Prueba Técnica

Una breve guía para ejecutar el programa

## Requisitos

Contar con NodeJS y con PostgreSQL instalado en el equipo
## Stack

**Lenguajes:** Typescript.

**Servidor:** NodeJS, Express.

**Datos:** PostgreSQL (Base de datos), Prisma (ORM), JOI (Validaciones).



## Instalación

Instalar el proyecto y sus dependencias

```bash
  git clone https://github.com/mirola777/Productos-Prueba-Tecnica-Backend.git
  cd Productos-Prueba-Tecnica-Backend
  npm install
```
    
## Variables de entorno

Para ejecutar el proyecto, se requieren las siguiente variables de entorno. Existen dos tipos de arvhivos de variables de entorno: `.env.dev` y `.env.prod`, utilizadas para el entorno de desarrollo y producción respectivamente. Se puede tomar el ejemplo de `.env.dev.example` y `.env.prod.example` y crear los archivos.

El de ambos es el siguiente:

`DATABASE_URL: postgres://user:password@localhost:5432/database_name`

`PORT: 3000`

`NODE_ENV: development`

Donde dependediendo del entorno, se deberá asignar a `NODE_ENV` el valor de `development` o `production`.

Para la ejecución de este programa, se recomienda usar la configuración de producción.


## Ejecutar programa

Realiza la respectiva migración en la base de datos

```bash
    npm run prisma-generate
    npm run push-prod
```

Compila el proyecto y ejecútalo

```bash
    npm run build
    npm start
```
