from djongo import models


class Team(models.Model):
	id = models.ObjectIdField(primary_key=True, editable=False)
	name = models.CharField(max_length=100, unique=True)
	class Meta:
		db_table = 'teams'


class User(models.Model):
	id = models.ObjectIdField(primary_key=True, editable=False)
	name = models.CharField(max_length=100)
	email = models.EmailField(unique=True)
	team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='members')
	class Meta:
		db_table = 'users'


class Workout(models.Model):
	id = models.ObjectIdField(primary_key=True, editable=False)
	name = models.CharField(max_length=100)
	description = models.TextField()
	class Meta:
		db_table = 'workouts'


class Activity(models.Model):
	id = models.ObjectIdField(primary_key=True, editable=False)
	user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='activities')
	workout = models.ForeignKey(Workout, on_delete=models.CASCADE)
	date = models.DateTimeField()
	duration = models.IntegerField()  # minutes
	class Meta:
		db_table = 'activities'


class Leaderboard(models.Model):
	id = models.ObjectIdField(primary_key=True, editable=False)
	team = models.ForeignKey(Team, on_delete=models.CASCADE)
	points = models.IntegerField(default=0)
	class Meta:
		db_table = 'leaderboard'