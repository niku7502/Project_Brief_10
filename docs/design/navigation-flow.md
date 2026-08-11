# Vehicle Rental System — Navigation Flow

**Project Brief 10 — Vehicle Rental System**

## Exercise 4: Design Application Navigation

```mermaid
flowchart TD
    L["Login"] --> D["Dashboard"]

    D --> A1["Administrator"]
    A1 --> A1a["Vehicles"]
    A1 --> A1b["Vehicle Categories"]
    A1 --> A1c["Customers"]
    A1 --> A1d["Rentals"]
    A1 --> A1e["Returns"]
    A1 --> A1f["Payments"]
    A1 --> A1g["Reports"]
    A1 --> A1h["Users"]
    A1 --> A1i["Settings"]

    D --> S1["Rental Staff"]
    S1 --> S1a["Customers"]
    S1 --> S1b["Rentals"]
    S1 --> S1c["Returns"]
    S1 --> S1d["Payments"]
    S1 --> S1e["Reports"]
    S1 --> S1f["Profile"]

    D --> C1["Customer"]
    C1 --> C1a["Browse Vehicles"]
    C1 --> C1b["My Rentals"]
    C1 --> C1c["Rental History"]
    C1 --> C1d["Payment History"]
    C1 --> C1e["Profile"]
```

## Navigation Summary by Role

| Role | Pages |
|---|---|
| Administrator | Dashboard, Vehicles, Vehicle Categories, Customers, Rentals, Returns, Payments, Reports, Users, Settings |
| Rental Staff | Dashboard, Customers, Rentals, Returns, Payments, Reports, Profile |
| Customer | Dashboard, Browse Vehicles, My Rentals, Rental History, Payment History, Profile |

## Public Pages (Pre-Login)

- Home
- Available Vehicles
- Vehicle Details
- Login
- Register
- About
- Contact