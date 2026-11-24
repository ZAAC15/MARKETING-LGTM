# MARKETING-LGTM

Plataforma privada de inteligencia comercial y marketing con IA para La Gran Tienda del Mecánico S.A.S.

## Arquitectura

- `apps/web`: frontend Next.js + TypeScript + Tailwind CSS.
- `apps/api`: backend Python + FastAPI.
- `supabase/migrations`: destino de migraciones futuras revisadas. No se incluyen SQL en esta preparación.
- `docs`: arquitectura, roadmap y documentación del esquema actual.
- Supabase PostgreSQL para datos y Supabase Storage para archivos.
- La capa de IA se diseñará modular para permitir cambiar de proveedor.

## Requisitos

- Node.js 20.9 o superior y npm para la web.
- Python 3.11 o superior para la API.
- Acceso a un proyecto Supabase configurado por el equipo cuando se integre con datos.

## Variables de entorno y secretos

Copia `.env.example` a `.env` en tu entorno local y completa únicamente valores obtenidos de un gestor seguro. `.env` y archivos similares están excluidos de Git. No commits claves, contraseñas, tokens, URLs firmadas ni secretos. Las variables `NEXT_PUBLIC_*` se publican en el bundle web; solo deben contener valores que puedan ser visibles para el navegador. Las credenciales privilegiadas de Supabase son solo para servidor y deben tener acceso mínimo necesario.

## Ejecutar en desarrollo

Instala las dependencias web una vez:

```powershell
cd apps/web
npm install
npm run dev
```

Abre `http://localhost:3000`. Para compilar, usa `npm run build`; para lint y tipos, `npm run lint` y `npm run typecheck`.

La API usa un entorno virtual aislado:

```powershell
cd apps/api
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -e .
uvicorn app.main:app --reload
```

La API queda disponible en `http://127.0.0.1:8000`; la documentación interactiva está en `/docs` y la comprobación de estado en `/health`.

La pantalla inicial es una maqueta con datos ficticios identificados como demostración. Las demás secciones de navegación están preparadas, pero deshabilitadas.

## Documentación

- [Arquitectura](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Base de datos](docs/DATABASE.md)

## Alcance de esta preparación

No se implementan importadores de Excel/PDF, proveedores de IA, CRM ni campañas. No se crean tablas ni se modifica la base de datos productiva. Las nueve tablas listadas en `docs/DATABASE.md` ya existen en Supabase.
