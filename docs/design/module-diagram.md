# Vehicle Rental System — Module Diagram

**Project Brief 10 — Vehicle Rental System**

## Exercise 1: Identify System Modules

```mermaid
flowchart TD
    VRS["Vehicle Rental System"]
    M1["Module 1
User Management"]
    M2["Module 2
Vehicle Management"]
    M3["Module 3
Customer Management"]
    M4["Module 4
Rental Management"]
    M5["Module 5
Return Management"]
    M6["Module 6
Payment Management"]
    M7["Module 7
Dashboard & Reports"]

    VRS --> M1
    VRS --> M2
    VRS --> M3
    VRS --> M4
    VRS --> M5
    VRS --> M6
    VRS --> M7

    M1 --- M1a["Registration / Login / Roles / Profile"]
    M2 --- M2a["Add / Update / Delete Vehicle, Categories, Availability"]
    M3 --- M3a["Register / Update / Search Customer"]
    M4 --- M4a["Create / Modify / Cancel Booking, Rental History"]
    M5 --- M5a["Vehicle Return, Inspection, Status Update"]
    M6 --- M6a["Billing, Record Payment, Revenue Reports"]
    M7 --- M7a["Business Reports, Analytics"]
```

## Module Summary

| Module | Responsibilities |
|---|---|
| User Management | User Registration, User Login, Role Management, Password Management, Profile Management |
| Vehicle Management | Add/Update/Delete Vehicle, Vehicle Categories, Vehicle Availability |
| Customer Management | Register Customer, Update Customer Information, Search Customers, Customer Profiles |
| Rental Management | Create/Modify/Cancel Rental Booking, Rental History, Rental Status |
| Return Management | Vehicle Return, Return Inspection, Update Vehicle Status, Rental Completion |
| Payment Management | Rental Billing, Record Payments, Payment History, Revenue Reports |
| Dashboard & Reports | Business reports and analytics across all modules |