from fastapi import APIRouter

from app.schemas.health import HealthResponse, RootResponse
from app.services.health import get_health, get_root_message

router = APIRouter()


@router.get("/", response_model=RootResponse, tags=["general"])
def read_root() -> RootResponse:
    return get_root_message()


@router.get("/health", response_model=HealthResponse, tags=["general"])
def health_check() -> HealthResponse:
    return get_health()
