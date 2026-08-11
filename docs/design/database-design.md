# RentEase – Database Design (MongoDB Collections)

## 1. Users
| Field | Type | Notes |
|---|---|---|
| name | String | Full name |
| email | String | Unique, used for login |
| password | String | Hashed |
| role | String | admin / staff |

## 2. VehicleCategories
| Field | Type | Notes |
|---|---|---|
| name | String | e.g. Car, Bike, SUV |
| description | String | Optional details |

## 3. Vehicles
| Field | Type | Notes |
|---|---|---|
| vehicleNumber | String | Unique registration number |
| brand | String | e.g. Honda |
| model | String | e.g. City |
| categoryId | ObjectId | References VehicleCategories |
| pricePerDay | Number | Rental price |
| status | String | available / booked / maintenance |
| imageUrl | String | Optional vehicle photo |

## 4. Customers
| Field | Type | Notes |
|---|---|---|
| name | String | Full name |
| phone | String | Contact number |
| email | String | Contact email |
| licenseNumber | String | Driving license number |
| address | String | Optional |

## 5. Rentals
| Field | Type | Notes |
|---|---|---|
| customerId | ObjectId | References Customers |
| vehicleId | ObjectId | References Vehicles |
| staffId | ObjectId | References Users (staff who created it) |
| startDate | Date | Rental start |
| endDate | Date | Rental end |
| status | String | active / completed / cancelled |
| totalAmount | Number | Calculated rental cost |

## 6. Returns
| Field | Type | Notes |
|---|---|---|
| rentalId | ObjectId | References Rentals |
| returnDate | Date | Actual return date |
| inspectionNotes | String | Condition notes |
| lateFee | Number | Optional penalty |
| vehicleCondition | String | good / damaged / needs service |

## 7. Payments
| Field | Type | Notes |
|---|---|---|
| rentalId | ObjectId | References Rentals |
| amount | Number | Payment amount |
| paymentDate | Date | When paid |
| paymentMethod | String | cash / card / UPI |
| status | String | paid / pending |

## Relationships Summary
- VehicleCategory → Vehicle (one-to-many)
- Vehicle → Rental (one-to-many)
- Customer → Rental (one-to-many)
- Rental → Return (one-to-one)
- Rental → Payment (one-to-many)
- User (staff) → Rental (one-to-many)