# Quick Plumber

Quick Plumber is a comprehensive project that combines the power of Django for the backend and React for the frontend to create an efficient system for managing plumbing services. Whether you're a plumbing service provider or just someone looking to streamline plumbing-related tasks, Quick Plumber has got you covered.

## Features

Quick Plumber offers a wide range of features to simplify your plumbing business operations:

### 1. Appointment Scheduling

Effortlessly schedule plumbing appointments with your customers. Keep track of upcoming jobs and ensure efficient time management.

### 2. Inventory Management

Manage your plumbing equipment and supplies with ease. Keep stock levels in check and reorder items when necessary.

### 3. Customer Database

Maintain detailed records of your customers and their specific plumbing needs. Access important information quickly when dealing with customer inquiries or service requests.

### 4. Billing and Invoicing

Generate professional invoices and maintain financial records for your plumbing services. Keep track of payments and outstanding bills.

### 5. Real-time Updates

Stay informed with instant notifications and updates on job progress. This feature helps you provide better customer service and keeps your team in sync.

### 6. User Authentication

Ensure the security of your system with a robust user authentication system. Plumbers and administrators can securely log in and manage the platform.

### 7. Admin Dashboard

Access a user-friendly admin dashboard to oversee and manage the entire system. This central hub simplifies task delegation and monitoring.

### 8. Responsive Design

Enjoy the flexibility of a responsive web interface that can be accessed from any device. Whether you're in the office or on the go, Quick Plumber adapts to your screen size.

## Backend Installation (Django)

Set up the backend of Quick Plumber by following these steps:

### 1. Clone the Repository

```bash
$ git clone https://github.com/ijustwannathat/QuickPlumber.git
$ cd QuickPlumber
```

### 2. Create and Activate a Virtual Environment

```bash
$ python3 -m venv venv
$ source venv/bin/activate
```

### 3. Install Backend Dependencies

```bash
$ pip install -r requirements.txt
```

### 4. Configure Database Settings

Adjust the database settings as needed in the `settings.py` file.

### 5. Apply Migrations

```bash
$ python manage.py migrate
```

### 6. Create a Superuser

```bash
$ python manage.py createsuperuser
```

## Frontend Installation (React)

Set up the frontend of Quick Plumber with React by following these steps:

### 1. Navigate to the Frontend Directory

```bash
$ cd frontend/quickplumber
```

### 2. Install Frontend Dependencies

```bash
$ npm install
```

### 3. Start the React Development Server

```bash
$ npm start
```

With these steps completed, you'll have Quick Plumber's backend (Django) and frontend (React) up and running on your system, ready to streamline your plumbing business or plumbing-related tasks. Enjoy the convenience of a well-designed system that simplifies your plumbing operations.
