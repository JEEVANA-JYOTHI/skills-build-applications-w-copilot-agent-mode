from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from .api import (
    UserViewSet,
    TeamViewSet,
    WorkoutViewSet,
    ActivityViewSet,
    LeaderboardViewSet,
)

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'teams', TeamViewSet)
router.register(r'workouts', WorkoutViewSet)
router.register(r'activities', ActivityViewSet)
router.register(r'leaderboard', LeaderboardViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
