# Vehicle Rental System – Project Planning & Requirement Analysis

## 1. Project Title

Vehicle Rental System

---

## 2. Problem Statement

Many vehicle rental businesses still manage bookings, customer records, and payments manually using paper records or spreadsheets. This often leads to booking conflicts, inaccurate records, delayed payments, and poor customer service.

The people affected are vehicle rental companies, administrators, and customers. A centralized web-based Vehicle Rental System is required to manage vehicles, customers, rentals, returns, and payments efficiently while reducing manual work and improving accuracy.

---

## 3. Project Objective

To develop a web-based Vehicle Rental System that enables administrators to manage vehicles, customers, rentals, returns, and payments, while allowing customers to browse available vehicles and book them online through a secure and user-friendly interface.

---

## 4. Target Users / Stakeholders

### Administrator
- Manage vehicles.
- Manage customer records.
- Approve rental bookings.
- Track rentals and returns.
- Manage payments.
- Generate reports.

### Customer
- Register and log in.
- View available vehicles.
- Book vehicles.
- View rental history.
- Make payments.
- Update profile.

---

## 5. Core Modules

1. User Authentication
2. Vehicle Management
3. Customer Management
4. Rental Management
5. Return Management
6. Payment Management
7. Dashboard & Reports

---

## 6. Project Scope

### Included Features

- User registration and login.
- JWT-based authentication.
- Role-based authorization.
- Vehicle management.
- Customer management.
- Vehicle booking.
- Rental history.
- Vehicle return.
- Payment management.
- Dashboard with reports.
- Responsive web interface.

### Excluded Features

- Mobile application.
- Online GPS vehicle tracking.
- AI-based vehicle recommendations.
- SMS or Email notifications.
- Online insurance integration.
- Third-party payment gateway.
- Live chat support.

---

## 7. Functional Requirements

### Authentication

- The system shall allow users to register.
- The system shall allow users to log in and log out.
- The system shall authenticate users using JWT.
- The system shall provide role-based access.
- The system shall allow users to update their profiles.

### Vehicle Management

- The administrator shall add vehicles.
- The administrator shall update vehicle details.
- The administrator shall delete vehicles.
- The system shall display available vehicles.
- Users shall search vehicles by category or name.

### Customer Management

- The administrator shall manage customer records.
- Customers shall update their profiles.

### Rental Management

- Customers shall book vehicles.
- The system shall store booking information.
- The administrator shall approve or reject bookings.
- Customers shall view rental history.

### Return Management

- The administrator shall record vehicle returns.
- The system shall update vehicle availability.
- The system shall calculate rental duration.

### Payment Management

- The system shall generate rental bills.
- Customers shall make payments.
- The administrator shall view payment records.
- The system shall maintain payment history.

### Dashboard & Reports

- The system shall display vehicle availability.
- The system shall display rental statistics.
- The system shall display payment summaries.
- The system shall generate rental reports.

---

## 8. Non-Functional Requirements

### Security

- Passwords must be encrypted before storage.
- Protected APIs must require JWT authentication.
- Unauthorized users must not access protected resources.
- User inputs must be validated.

### Performance

- Pages should load quickly.
- Database queries should be optimized.

### Usability

- The interface should be responsive.
- Navigation should be simple and user-friendly.

### Reliability

- The system should handle invalid requests gracefully.
- Error messages should be meaningful.

### Maintainability

- Backend should use modular architecture.
- Frontend should use reusable React components.
- Code should be documented properly.

### Scalability

- The system should support future features such as online payment gateways, GPS tracking, notifications, and mobile applications.

---

## 9. Expected Outcome

The Vehicle Rental System will provide a centralized platform for managing vehicles, customers, rentals, returns, and payments. It will reduce manual work, improve booking accuracy, simplify rental management, and provide students with practical experience in MERN Stack development, MongoDB, REST APIs, JWT authentication, role-based access control, and GitHub collaboration.