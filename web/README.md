# App Django

Esta aplicación Django se ejecuta dentro de Docker. No necesitas crear un entorno virtual manualmente.

## Dependencias

`requirements.txt` contiene:

- Django>=4.2
- requests

## Ejecución dentro de Docker

Desde la raíz del proyecto, ejecuta:

```bash
docker compose up --build
```

La aplicación Django se servirá en `http://localhost:8000`.

## Estructura relevante

- `config/`: configuración del proyecto Django
- `core/`: aplicación Django que renderiza la página principal
- `core/templates/index.html`: plantilla que muestra el catálogo desde la API
