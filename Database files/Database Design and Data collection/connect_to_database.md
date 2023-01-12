 connected by the following steps in your local computer: 

1. Database code in your local django project file **settings.py**

```mysql

DATABASES = {
	'default': {
		'ENGINE': 'django.db.backends.mysql',
		'NAME': 'user49DB1',
		'USER': 'user49',
		'PASSWORD': 'thyme@234',
		'HOST':'orson.ischool.wisc.edu',
		'PORT':'3306',
	}
}

```

2. run the following in your terminal:

   ```
   pip install mysqlclient
   python manage.py migrate
   ```

   

