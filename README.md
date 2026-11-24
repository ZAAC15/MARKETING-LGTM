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

Node.js y npm para la web; Python 3.11 o superior para la API; acceso a un proyecto Supabase configurado por el equipo. Esta preparación no instala dependencias y las aplicaciones aún no están inicializadas.

## Variables de entorno y secretos

Copia `.env.example` a `.env` en tu entorno local y completa únicamente valores obtenidos de un gestor seguro. `.env` y archivos similares están excluidos de Git. No commits claves, contraseñas, tokens, URLs firmadas ni secretos. Las variables `NEXT_PUBLIC_*` se publican en el bundle web; solo deben contener valores que puedan ser visibles para el navegador. Las credenciales privilegiadas de Supabase son solo para servidor y deben tener acceso mínimo necesario.

## Ejecutar

La web y la API son actualmente esqueletos documentales, por lo que aún no hay comandos de desarrollo ejecutables. Cuando se inicialicen, se documentarán aquí y en `apps/web/README.md` y `apps/api/README.md`.

## Documentación

- [Arquitectura](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Base de datos](docs/DATABASE.md)

## Alcance de esta preparación

No se implementan importadores de Excel/PDF, proveedores de IA, CRM ni campañas. No se crean tablas ni se modifica la base de datos productiva. Las nueve tablas listadas en `docs/DATABASE.md` ya existen en Supabase.
