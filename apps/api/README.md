# apps/api

API modular con Python, FastAPI, Uvicorn y configuración Pydantic Settings.

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -e .
uvicorn app.main:app --reload
```

Rutas iniciales: `GET /`, `GET /health`. Documentación OpenAPI: `/docs`.

Configuración no secreta: `APP_NAME`, `APP_ENV`, `API_V1_PREFIX`. Las variables de Supabase quedan reservadas para integraciones posteriores; esta versión no conecta con Supabase.
