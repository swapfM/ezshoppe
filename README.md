# EzzShoppe eCommerce Platform

> This is an e-commerce website project developed using ReactJS, Django Rest Framework, AWS RDS PostgreSQL, and AWS S3 for storage.

## ✨ [Live Link - EzzShoppe](https://ezzshoppe-9e2a87ca9ef0.herokuapp.com/)

### Project Overview

The goal of this project was to create a robust e-commerce platform that provides users with an intuitive interface to browse products, add them to their cart, and complete purchases securely. The application is built using ReactJS for the frontend, Django Rest Framework for the backend, and utilizes AWS RDS PostgreSQL for the database and AWS S3 for storing media files.

### Features

- __User Authentication:__ Allows users to sign up, log in, and manage their profiles securely.
- __Product Listings:__  Displays a wide range of products with details such as price, description, and images.
- __Shopping Cart:__  Enables users to add products to their cart and manage their selections before checkout.
- __Checkout Process:__ Using Paypal Api for secure and streamlined checkout process.
- __Admin Dashboard:__ Allows admin users to manage products, orders, and user accounts.
- __AWS Integration:__ Utilizes AWS RDS PostgreSQL for database management and AWS S3 for storing media files like product images.
- PayPal / credit card integration
- Database seeder (products & users)

### Technologies Used

- __Frontend:__ ReactJS
- __Backend:__ Django Rest Framework
- __Database:__ AWS RDS PostgreSQL
- __Storage:__ AWS S3

### Getting Started

-  Clone the repository
```
git clone https://github.com/swapfM/ezshoppe.git
```
- Set up and run the `frontend` server
```
npm install
cd frontend
npm install
```
- Navigate to the `backend` directory.

- Set up a virtual environment (recommended)
```
python -m venv env
.\env\Scripts\activate
```
- Run `pip install -r requirements.txt` to install Python dependencies.
- Configure the database settings to connect to AWS RDS PostgreSQL.
- Run `python manage.py migrate` to apply migrations.
- Run `python manage.py runserver` to start the backend server.


### Env Variables

Create a .env file in the root and add the following variables

```
DB_NAME = aws rds database user_name
DB_PASS = aws rds database password
DB_HOST = aws rds database host_url_endpoint
PAYPAL_CLIENT_ID = your paypal client id

AWS_ACCESS_KEY_ID= aws_access_key
AWS_SECRET_ACCESS_KEY = aws_secret_key
AWS_STORAGE_BUCKET_NAME =  aws_bucket_name
AWS_S3_CUSTOM_DOMAIN = aws_s3_domain
```

