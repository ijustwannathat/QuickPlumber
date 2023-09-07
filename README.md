## Quick Plumber
QuickPlumber is a versatile Django project that serves as the backbone for your plumbing services management system. It provides the core functionality and infrastructure to help you manage your plumbing business efficiently.

## Project Features
* Appointment Scheduling: Seamlessly schedule plumbing appointments with customers.
* Inventory Management: Keep track of plumbing equipment and supplies.
* Customer Database: Maintain detailed records of your customers and their plumbing needs.
* Billing and Invoicing: Generate invoices and keep financial records.
* Real-time Updates: Get instant notifications and updates on job progress.
* User Authentication: Secure login and registration system for plumbers and administrators.
* Admin Dashboard: A user-friendly dashboard for managing the system.
* Responsive Design: A responsive web interface accessible from any device.

## Installation
### Clone git repository:
```
$ git clone https://github.com/ijustwannathat/QuickPlumber.git
```

### Navigate to the project directory
```
$ cd QuickPlumber:
```

### Create and activate a virtual environment:
```
$ python3 -m venv venv
$ source venv/bin/activate
```

### Install dependencies:
```
$ pip install -r requirements.txt
```

### Configure DB settings in:
```
settings.py
```
### Apply migrations using:
```
$ python manage.py migrate
```
### Create superuser and run server:
```
$ python manage.py creasuperuser
$ python manage.py runserver
```


