from functools import lru_cache
from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "MARKETING-LGTM API"
    app_env: str = "development"
    api_v1_prefix: str = "/api/v1"

    model_config = SettingsConfigDict(
        env_file=Path(__file__).resolve().parents[4] / ".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
