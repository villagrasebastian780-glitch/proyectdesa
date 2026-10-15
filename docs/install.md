# Instalación y despliegue del proyecto Proyectdesa

## Qué es esta "máquina virtual"

En este proyecto no se usa una máquina virtual tradicional. Se usa Docker, que crea contenedores aislados para ejecutar:

- una base de datos MySQL
- la API backend
- la aplicación web Django

Cada contenedor actúa como un pequeño servidor independiente dentro de tu computadora.

## Requisitos

- Docker Desktop instalado en Windows.
- Docker Desktop abierto y con el servicio iniciado.
- Puerto `3000` libre (API).
- Puerto `8000` libre (Web Django).
- Puerto `3306` libre (MySQL).

## Estructura principal del proyecto

- `docker-compose.yml`: define los 3 servicios que se levantan juntos.
- `init.sql`: datos iniciales para la base de datos.
- `api/`: código de la API Node.js + TypeScript.
- `web/`: código de la aplicación Django.

## Servicios que se ejecutan

### db

- Es MySQL 8.
- Carga el archivo `init.sql` cuando se inicia por primera vez.
- Contiene la tabla `catalog` con productos como laptop, mouse y teclado.

### api

- Es el backend de Node.js.
- Lee la base de datos MySQL.
- Expone un endpoint HTTP en `/api/catalogo`.
- Cuando el navegador o Django piden datos, el API responde con JSON.

### web

- Es la aplicación Django.
- Hace una petición al API en `http://api:3000/api/catalogo` dentro de Docker.
- Renderiza una página HTML con los datos del catálogo.

## Pasos para levantar todo

### 1. Abre Docker Desktop

Abre Docker Desktop en Windows y espera a que diga algo como "Docker is running".

### 2. Abre PowerShell en la carpeta del proyecto

En PowerShell, ejecuta:

```powershell
cd C:\Users\VILLA\Documents\GitHub\proyectdesa
```

### 3. Levanta los servicios

Ejecuta este comando:

```powershell
docker compose up --build -d
```

Qué hace:

- `up`: levanta todos los servicios definidos en `docker-compose.yml`.
- `--build`: construye las imágenes antes de ejecutar.
- `-d`: ejecuta en segundo plano (detached), para que la terminal quede libre.

### 4. Verifica que los servicios estén arriba

Ejecuta:

```powershell
docker compose ps
```

Debes ver:

- `mysql_db` → `Up`
- `api_service` → `Up`
- `django_web` → `Up`

### 5. Accede a las interfaces

- API: `http://localhost:3000/api/catalogo`
- Web Django: `http://localhost:8000`

### 6. Detener los servicios

Cuando termines, usa:

```powershell
docker compose down
```

Esto apaga y elimina los contenedores, pero no borra los datos guardados en el volumen de MySQL.

## Qué hacer si ves un error

### Docker no abre

- Asegúrate de que Docker Desktop esté instalado.
- Abre Docker Desktop y espera que termine de iniciar.

### Error de puertos ocupados

Si un puerto ya está en uso, cierra la app que lo usa o cambia los puertos en `docker-compose.yml`.

### Si el navegador no carga la web

1. Verifica con:

```powershell
docker compose ps
```

2. Si algún servicio no está `Up`, revisa sus logs:

```powershell
docker compose logs --tail 50
```

## Nota importante sobre `web` y `api`

Dentro de Docker, Django no usa `localhost` para consumir el API. Usa `http://api:3000/api/catalogo` porque `api` es el nombre del servicio en `docker-compose.yml`.

## Resumen rápido

1. Abre Docker Desktop.
2. `cd C:\Users\VILLA\Documents\GitHub\proyectdesa`
3. `docker compose up --build -d`
4. `docker compose ps`
5. Visita `http://localhost:8000`
6. Para apagar: `docker compose down`
