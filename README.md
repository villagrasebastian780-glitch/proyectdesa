# Proyecto Proyectdesa

## Descripción

Este proyecto incluye una API Node.js con MySQL y una aplicación Django que consume los datos desde la API.

## Servicios

- `db`: MySQL 8 con carga inicial desde `init.sql`
- `api`: Backend Express/TypeScript que expone `/api/catalogo`
- `web`: Frontend Django que consume la API y muestra el catálogo

## Documentación adicional

- Guía de instalación y despliegue: `docs/install.md`
- Resumen de cambios y correcciones: `docs/what-was-fixed.md`

## Cambios realizados

- Corregí el endpoint de la API a `/api/catalogo`.
- Añadí el proyecto Django faltante (`manage.py`, `config/settings.py`, `config/wsgi.py`, `config/asgi.py`, `core/apps.py`).
- Actualicé `web/requirements.txt` para eliminar `mysqlclient` y simplificar la instalación.
- Añadí `.dockerignore` para `api` y `web` y `.gitignore` en la raíz.
- Mejoré la vista Django para manejar errores si la API no está disponible.
- Validé la configuración de Docker Compose.

## Cómo ejecutar

### Paso 1: Abre Docker Desktop

- Abre Docker Desktop en Windows.
- Espera a que el icono diga "Docker is running" o similar.
- Esto es necesario porque Docker es la tecnología que crea los contenedores donde corre la aplicación.

### Paso 2: Abre PowerShell en la carpeta del proyecto

Ejecuta este comando en PowerShell:

```powershell
cd C:\Users\VILLA\Documents\GitHub\proyectdesa
```

- Esto te coloca en la carpeta correcta donde están los archivos `docker-compose.yml`, `api/` y `web/`.

### Paso 3: Levanta todos los servicios

Ejecuta:

```powershell
docker compose up --build -d
```

- `docker compose up` levanta los servicios definidos en `docker-compose.yml`.
- `--build` fuerza a construir las imágenes antes de ejecutarlas.
- `-d` ejecuta todo en segundo plano, dejando la terminal libre.

### Paso 4: Verifica que todo está funcionando

Ejecuta:

```powershell
docker compose ps
```

Debes ver estos servicios en estado `Up`:

- `mysql_db`
- `api_service`
- `django_web`

### Paso 5: Prueba el API y la web

- API: `http://localhost:3000/api/catalogo`
- Web: `http://localhost:8000`

### Qué hace cada cosa

#### `db`

- Corre MySQL 8.
- Se inicializa con datos de `init.sql`.
- Guarda la tabla `catalog` con productos como laptop, mouse y teclado.

#### `api`

- Es la API backend en Node.js y TypeScript.
- Lee los datos desde MySQL.
- Devuelve JSON cuando se consulta `/api/catalogo`.
- Este servicio permite que la aplicación web obtenga el catálogo.

#### `web`

- Es la aplicación Django.
- Hace una petición al API para obtener los datos.
- Muestra los datos dentro de una página HTML.
- Si el API no responde, muestra un mensaje amigable de error.

### Por qué este proyecto usa Docker

- Para no tener que instalar Node.js, Python o MySQL directamente en tu PC.
- Docker crea un ambiente controlado y reproducible.
- Así puedes presentar el proyecto sin problemas de versiones.

### Cómo detener todo

Ejecuta:

```powershell
docker compose down
```

- Esto apaga y elimina los contenedores que se crearon.
- Los datos de MySQL se conservan en el volumen `db_data`.

### Notas importantes

- Si Docker no está arrancado, abre Docker Desktop primero.
- Si un servicio no está `Up`, revisa los logs con:

```powershell
docker compose logs --tail 50
```

- Dentro de Docker, Django accede al API como `http://api:3000/api/catalogo` porque `api` es el nombre del servicio.
- En tu navegador, usa `localhost` porque accedes desde fuera del contenedor.

### Documentos adicionales

- Guía de instalación: `docs/install.md`
- Resumen de cambios: `docs/what-was-fixed.md`
- Resumen del chat: `docs/chat-summary.md`
