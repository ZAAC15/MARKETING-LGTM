# MARKETING-LGTM — Roadmap

## Fase 0 — Preparación (actual)

- Establecer estructura de monorepo y documentación base.
- Registrar las tablas existentes sin volver a ejecutar su SQL.
- Definir prácticas seguras para variables de entorno.

## Fase 1 — Fundaciones

- Acordar versiones y herramientas de frontend/backend.
- Inicializar Next.js y FastAPI.
- Definir autenticación, roles, permisos, contratos de API, observabilidad y despliegue.
- Verificar RLS y permisos de Storage para los casos de uso.

## Fase 2 — Catálogo y datos

- Implementar acceso de lectura al catálogo existente según permisos acordados.
- Documentar el esquema real (columnas, tipos, relaciones, índices y políticas) desde una fuente verificada.

## Fase 3 — Procesamiento documental

- Diseñar la ingesta de Excel/PDF, validación, extracción, revisión humana, trazabilidad y gestión de fallos.
- Implementar solo tras acordar controles de archivos y requisitos de negocio.

## Fase 4 — Inteligencia asistida

- Priorizar casos de uso y criterios de calidad.
- Añadir abstracción de proveedor, protección de datos, evaluación y gestión de costos.

## Fase 5 — Herramientas de marketing

- Definir necesidades con usuarios antes de diseñar capacidades CRM o campañas.
- Acordar permisos, integraciones y medición antes de implementar.

Las fases futuras son una propuesta, no autorización para modificar producción. Cualquier cambio de esquema requiere planificación, revisión y aprobación en una tarea posterior.
