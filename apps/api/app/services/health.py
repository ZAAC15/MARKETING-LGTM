from app.core.config import settings
from app.schemas.health import HealthResponse, RootResponse


def get_root_message() -> RootResponse:
    return RootResponse(name=settings.app_name, message="API disponible")


def get_health() -> HealthResponse:
    return HealthResponse(status="ok", environment=settings.app_env)
