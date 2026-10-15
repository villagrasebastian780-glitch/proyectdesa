# Cambios y correcciones realizadas

## Problemas detectados

- La app Django estaba incompleta: faltaban `manage.py`, `config/settings.py`, `config/wsgi.py`, `config/asgi.py`, `core/apps.py` y archivos necesarios.
- El endpoint de la API era inconsistente con la vista Django.
- El template de Django esperaba el campo `nombre`, pero la tabla `catalog` usa `name`.
- `web/requirements.txt` incluía `mysqlclient`, lo que complica la instalación en Docker.
- No había `.dockerignore` ni `.gitignore` útiles para evitar archivos innecesarios.
- El proyecto no tenía una documentación clara para levantar los servicios.

## Correcciones aplicadas

- Ajusté `api/src/routes.ts` para exponer `/catalogo`.
- Añadí `web/manage.py`, `web/config/__init__.py`, `web/config/settings.py`, `web/config/wsgi.py`, `web/config/asgi.py`, `web/core/__init__.py`, `web/core/apps.py`.
- Actualicé `web/requirements.txt` a:
  - `Django>=4.2`
  - `requests`
- Añadí `.dockerignore` en `api` y `web`, y `.gitignore` en la raíz.
- Mejoré la vista Django para manejar errores de conexión a la API.
- Actualicé el template `index.html` para mostrar un mensaje cuando no haya datos.
- Añadí `docs/install.md` con pasos claros para ejecutar el proyecto.
- Verifiqué el archivo `api/docker-compose.yml` y el stack de Docker Compose raíz.

## Recomendación de uso

1. Inicia Docker Desktop en Windows.
2. Ejecuta:

```powershell
cd C:\Users\VILLA\Documents\GitHub\proyectdesa
docker compose up --build -d
```

3. Verifica el estado:

```powershell
docker compose ps
```

4. Usa los siguientes endpoints:

- `http://localhost:3000/api/catalogo`
- `http://localhost:8000`

5. Para detener los servicios:

```powershell
docker compose down
```
