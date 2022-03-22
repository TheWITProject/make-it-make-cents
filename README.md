## Introduction

This is a application built off Django (including the Django REST Framework for API CRUD operations) and React. For a complete walkthrough, see [Build a To-Do application Using Django and React](https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react)

## Requirements

- Python 3.9
- Pipenv

## Getting started

### /backend
1. Navigate into the `[backend]` directory
2. Source the virtual environment `pipenv shell`
3. Install the dependencies `pipenv install`
4. Run migrations `python manage.py migrate`.

Note: To close out of the virtual environment, you can press `[ctrl] + d`

### /frontend
1. Navigate into the `[frontend]` directory
2. Install the dependencies `npm install`

## Run the application

You will need two terminals pointed to the frontend and backend directories to start the servers for this application.

### /backend
1. Enter the virtual environment `pipenv shell`
2. Start the backend server in the `[backend]` directory: `python manage.py runserver 8000`

This will start the frontend on the adddress [localhost:8000](http://localhost:8000)

### /frontend
1. Start the frontend server in the `[frontend]` directory: `npm start`

This will start the frontend on the adddress [localhost:3000](http://localhost:3000)

## Built With

- [React](https://reactjs.org) - A progressive JavaScript framework.
- [Python](https://www.python.org/) - A programming language that lets you work quickly and integrate systems more effectively.
- [Django](http://djangoproject.org/) - A high-level Python Web framework that encourages rapid development and clean, pragmatic design.

## Creator Credit

This demo app was originally built for a scotch.io (acquired in 2020 by DigitalOcean) article by [Jordan Irabor](https://github.com/Jordanirabor/django-todo-react)
