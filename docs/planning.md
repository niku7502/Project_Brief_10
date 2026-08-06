# Project Planning & Requirement Analysis

## Sprint 2: Project Planning & Requirement Analysis

## 1. Selected Project
Vehicle Rental System (Template ID: T10) — Domain: Transportation & Rental Services — Technology Stack: MERN (MongoDB, Express.js, React.js, Node.js)

## 2. Problem Statement
Many small vehicle rental businesses still manage reservations, vehicle records, and payments manually or through disconnected spreadsheets and paper logs. Rental staff and administrators experience this problem daily, as it leads to booking conflicts, poor vehicle tracking, delayed payments, and inefficient customer management. This needs to be solved because manual processes do not scale, cause revenue loss through double-bookings and missed payments, and give business owners no reliable way to track vehicle availability or rental history.

## 3. Project Objective
Develop a web-based Vehicle Rental System using the MERN Stack that simplifies rental operations by centralizing the management of vehicles, customers, bookings, returns, and payments — replacing manual, disconnected processes with a single, secure, role-based digital platform.

## 4. Stakeholders
- **Administrator** – manages users, vehicles, rental operations, payments, reports, and system settings.
- **Rental Staff** – manages customers, creates bookings, processes returns, updates vehicle availability, and records payments.
- **Customer** – browses available vehicles, makes rental requests, views rental history, and manages their profile.

## 5. Project Scope

### Included Features
- User authentication and role-based authorization
- Vehicle management (add, update, delete, categories, availability)
- Customer management (register, update, search, profiles)
- Rental booking management (create, modify, cancel, history, status)
- Vehicle return management (return processing, inspection, status update)
- Payment management (billing, payment recording, payment history)
- Dashboard and revenue/rental reports

### Excluded Features
- GPS vehicle tracking
- Online payment gateway integration
- Driving license verification API
- Vehicle maintenance scheduling
- Mobile application
- Insurance management integration

## 6. Functional Requirements
- User registration and login with JWT authentication
- Role-based access control (Administrator, Rental Staff, Customer)
- Add, update, delete, and search vehicles
- Track and update vehicle availability status
- Register, update, and search customer records
- Create, modify, and cancel rental bookings
- View rental history and rental status
- Process vehicle returns and update vehicle status after inspection
- Generate rental bills and record payments
- View payment history and revenue reports
- Dashboard displaying rental statistics

## 7. Non-Functional Requirements
- **Security** – password hashing, JWT authentication, protected routes, input validation
- **Performance** – fast vehicle search and responsive API communication
- **Reliability** – accurate vehicle availability tracking with no double-bookings
- **Usability** – responsive design, simple booking process, easy navigation
- **Scalability** – architecture that supports future features like GPS tracking and online payments
- **Maintainability** – modular application architecture with reusable components and organized backend code

## 8. Initial Project Summary

| Field | Details |
|---|---|
| **Project Title** | Vehicle Rental System |
| **Problem Statement** | Manual, disconnected rental tracking causes booking conflicts, poor vehicle tracking, delayed payments, and inefficient customer management. |
| **Objective** | A centralized MERN web application to manage vehicles, customers, bookings, returns, and payments. |
| **Target Users** | Administrator, Rental Staff, Customer |
| **Core Modules** | User Management, Vehicle Management, Customer Management, Rental Management, Return Management, Payment Management |
| **Scope** | Included: booking, returns, payments, reports, role-based access. Excluded: GPS tracking, online payment gateway, mobile app, insurance integration. |
| **Expected Outcome** | A fully functional, deployed web application that lets rental staff manage the complete booking-to-payment lifecycle and gives administrators visibility through dashboards and reports. |