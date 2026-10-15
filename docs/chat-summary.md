# Resumen final del proyecto Proyectdesa

Este archivo guarda las correcciones y los pasos finales para levantar el proyecto. De esta forma no dependes de mantener el chat abierto.

## Qué se arregló

- Se corrigió el endpoint de la API a `/api/catalogo`.
- Se completó el proyecto Django con los archivos faltantes:
  - `web/manage.py`
  - `web/config/settings.py`
  - `web/config/wsgi.py`
  - `web/config/asgi.py`
  - `web/core/apps.py`
- Se actualizó `web/requirements.txt` para usar solo `Django` y `requests`.
- Se mejoró la vista Django para manejar errores si la API no está disponible.
- Se corrigió la plantilla `web/core/templates/index.html` para mostrar datos o un mensaje de no disponibilidad.
- Se añadieron archivos de ignore:
  - `api/.dockerignore`
  - `web/.dockerignore`
  - `.gitignore`
- Se agregaron documentos de soporte:
  - `docs/install.md`
  - `docs/what-was-fixed.md`
  - `docs/chat-summary.md`

## Cómo ejecutar

1. Abre Docker Desktop y espera a que inicie.
2. Abre PowerShell en la raíz del proyecto:

```powershell
cd C:\Users\VILLA\Documents\GitHub\proyectdesa
docker compose up --build -d
```

3. Verifica que los servicios estén levantados:

```powershell
docker compose ps
```

4. Abre en el navegador:
- `http://localhost:3000/api/catalogo`
- `http://localhost:8000`

5. Para detener todo:

```powershell
docker compose down
```

## Nota

Este archivo es tu respaldo permanente en el repositorio, así no importa si el chat se cierra o se borra.
