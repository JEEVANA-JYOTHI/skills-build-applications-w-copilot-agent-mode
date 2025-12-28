from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout
from django.utils import timezone

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'


    def handle(self, *args, **options):
        # Delete dependent objects first (Activity, Leaderboard), then Workout, User, Team
        for obj in Activity.objects.all():
            if getattr(obj, 'id', None) is not None:
                obj.delete()
        for obj in Leaderboard.objects.all():
            if getattr(obj, 'id', None) is not None:
                obj.delete()
        for obj in Workout.objects.all():
            if getattr(obj, 'id', None) is not None:
                obj.delete()
        for obj in User.objects.all():
            if getattr(obj, 'id', None) is not None:
                obj.delete()
        for obj in Team.objects.all():
            if getattr(obj, 'id', None) is not None:
                obj.delete()

        # Create teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Create users
        users = [
            User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team=marvel),
            User.objects.create(name='Iron Man', email='ironman@marvel.com', team=marvel),
            User.objects.create(name='Wonder Woman', email='wonderwoman@dc.com', team=dc),
            User.objects.create(name='Batman', email='batman@dc.com', team=dc),
        ]

        # Create workouts
        workout1 = Workout.objects.create(name='Push Ups', description='Upper body strength')
        workout2 = Workout.objects.create(name='Running', description='Cardio endurance')

        # Create activities
        Activity.objects.create(user=users[0], workout=workout1, date=timezone.now(), duration=30)
        Activity.objects.create(user=users[1], workout=workout2, date=timezone.now(), duration=45)
        Activity.objects.create(user=users[2], workout=workout1, date=timezone.now(), duration=25)
        Activity.objects.create(user=users[3], workout=workout2, date=timezone.now(), duration=50)

        # Create leaderboard
        Leaderboard.objects.create(team=marvel, points=75)
        Leaderboard.objects.create(team=dc, points=75)

        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data'))
