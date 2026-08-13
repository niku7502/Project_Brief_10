# RentEase – Entity Relationship Diagram

```
 VehicleCategory                         Customer
        │                                    │
        │ 1                                  │ 1
        │                                    │
        ├──────────< Vehicle >──────────────┤
                        │
                        │ 1
                        │
                    ┌───┴────┐
                    │ Rental │
                    └───┬────┘
                        │
              ┌─────────┴─────────┐
              │ 1                 │ 1
              │                   │
         ┌────┴────┐        ┌─────┴─────┐
         │ Return  │        │  Payment  │
         │ (1 : 1) │        │ (1 : M)   │
         └─────────┘        └───────────┘
```

## Entities

- **VehicleCategory** — category/type a vehicle belongs to (e.g. Car, Bike, SUV)
- **Vehicle** — individual vehicle available for rent
- **Customer** — person who rents a vehicle
- **Rental** — a booking that links a Vehicle to a Customer for a date range
- **Return** — the record created when a rented vehicle is returned
- **Payment** — payment(s) made against a rental

## Relationships

| Relationship | Type | Description |
|---|---|---|
| VehicleCategory → Vehicle | One-to-Many | One category has many vehicles |
| Customer → Vehicle (via Rental) | One-to-Many | One customer can rent many vehicles over time |
| Vehicle → Rental | One-to-Many | One vehicle can be booked in many rentals over time |
| Customer → Rental | One-to-Many | One customer can make many rentals |
| Rental → Return | One-to-One | Each rental has exactly one return record |
| Rental → Payment | One-to-Many | One rental can have one or more payments |