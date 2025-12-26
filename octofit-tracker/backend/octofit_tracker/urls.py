from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse
import os

def api_root(request):
    codespace = os.getenv("CODESPACE_NAME")
    if codespace:
        base_url = f"https://{codespace}-8000.app.github.dev"
    else:
        base_url = "http://localhost:8000"

    return JsonResponse({
        "users": f"{base_url}/api/users/",
        "teams": f"{base_url}/api/teams/",
        "activities": f"{base_url}/api/activities/",
        "leaderboard": f"{base_url}/api/leaderboard/",
        "workouts": f"{base_url}/api/workouts/",
    })

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", api_root),
    path("api/", include("octofit_tracker.api")),
]
