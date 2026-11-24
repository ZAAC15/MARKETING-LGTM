# MARKETING-LGTM — Arquitectura

## Propósito

Plataforma privada de inteligencia comercial y marketing asistida por IA para La Gran Tienda del Mecánico S.A.S., dedicada a equipos de diagnóstico automotriz, maquinaria, herramientas y equipos especializados para talleres y laboratorios diésel.

## Componentes y límites

- **Web:** Next.js, TypeScript y Tailwind CSS (`apps/web`). La interfaz consume la API para operaciones de negocio.
- **API:** Python y FastAPI (`apps/api`). Centraliza lógica de negocio, validación de permisos e integraciones del lado servidor.
- **Base de datos:** Supabase PostgreSQL. El esquema existente se documenta en `DATABASE.md`; no se modifica en esta tarea.
- **Archivos:** Supabase Storage. Diseñar acceso privado y enlaces firmados de alcance y duración limitados según el caso de uso.
- **Procesamiento documental:** módulos Python separados de las rutas HTTP, con validación, trazabilidad y manejo de errores. Aún no implementado.
- **IA:** interfaz interna de proveedor y adaptadores intercambiables para evitar acoplar la lógica a un proveedor específico. Aún no implementado.

## Seguridad

La API debe autenticar y autorizar cada operación; no depender exclusivamente de controles del frontend. Mantener credenciales privilegiadas solo en el servidor, usar mínimo privilegio y revisar políticas RLS y permisos de Storage antes de conectar datos reales. Los secretos se configuran localmente o mediante el gestor de secretos del entorno y nunca se guardan en el repositorio. Las variables `NEXT_PUBLIC_*` son públicas.

## Implementación inicial

- La web tiene un dashboard de demostración en App Router, una shell responsive con navegación preparada y tokens CSS para la paleta corporativa.
- El logo entregado por el equipo se sirve desde `apps/web/public/branding/logo-lgtm.png`; el componente `BrandLogo` permite una presentación compacta en el futuro.
- La API expone `GET /` y `GET /health`, con configuración desde variables de entorno y separación en rutas, servicios y esquemas.
- La pantalla todavía no se conecta con la API ni con Supabase. Todas las métricas visibles son datos ficticios.

## Estructura

```text
apps/
  web/                 # Next.js + TypeScript + Tailwind + ESLint
  api/                 # FastAPI + Uvicorn + Pydantic Settings
supabase/
  migrations/          # destino para migraciones futuras revisadas; sin SQL actual
docs/
  ARCHITECTURE.md
  DATABASE.md
  ROADMAP.md
.env.example
```

## Decisiones pendientes

Definir estrategia de autenticación y roles, contratos entre API y web, políticas RLS/Storage por caso de uso, observabilidad y despliegue. Elegir proveedor o proveedores de IA después de priorizar y evaluar casos de uso.
