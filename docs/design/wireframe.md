# Vehicle Rental System — Wireframes

**Project Brief 10 — Vehicle Rental System**

## Exercise 6: Prepare Basic Wireframes

Basic layout sketches for the main application pages. These are structural (layout/functionality) wireframes — no colors or styling, per Sprint 3 guidance.

---

### 1. Login Page

```
 ┌───────────────────────────────────────┐
 │              VEHICLE RENTAL            │
 │                                         │
 │   ┌─────────────────────────────────┐   │
 │   │ Email                           │   │
 │   └─────────────────────────────────┘   │
 │   ┌─────────────────────────────────┐   │
 │   │ Password                        │   │
 │   └─────────────────────────────────┘   │
 │                                         │
 │           [   Login Button   ]         │
 │                                         │
 │   Don't have an account? Register      │
 └───────────────────────────────────────┘
```

---

### 2. Dashboard Page (Administrator / Staff)

```
 ┌───────────────────────────────────────────────────┐
 │ LOGO   Dashboard  Vehicles  Rentals  Reports  ⋮User│
 ├───────────────────────────────────────────────────┤
 │  ┌───────────┐ ┌───────────┐ ┌───────────┐         │
 │  │ Total     │ │ Active    │ │ Revenue   │         │
 │  │ Vehicles  │ │ Rentals   │ │ This Month│         │
 │  └───────────┘ └───────────┘ └───────────┘         │
 │                                                     │
 │  Recent Rentals                                    │
 │  ┌─────────────────────────────────────────────┐   │
 │  │ Customer | Vehicle | Start | End | Status    │   │
 │  ├─────────────────────────────────────────────┤   │
 │  │  ...      ...       ...     ...    ...       │   │
 │  └─────────────────────────────────────────────┘   │
 └───────────────────────────────────────────────────┘
```

---

### 3. List Page (e.g., Vehicles List)

```
 ┌───────────────────────────────────────────────────┐
 │ LOGO   Dashboard  Vehicles  Rentals  Reports  ⋮User│
 ├───────────────────────────────────────────────────┤
 │  Vehicles                          [ + Add Vehicle]│
 │  ┌─────────────────────────────────────────────┐   │
 │  │ [ Search vehicles...          ]  [Filter ▾]  │   │
 │  └─────────────────────────────────────────────┘   │
 │  ┌─────────────────────────────────────────────┐   │
 │  │ Name | Category | Status | Rate | Actions    │   │
 │  ├─────────────────────────────────────────────┤   │
 │  │ ...    ...        ...      ...    [Edit][Del]│   │
 │  │ ...    ...        ...      ...    [Edit][Del]│   │
 │  └─────────────────────────────────────────────┘   │
 │                    [ ‹ Prev  1 2 3  Next › ]        │
 └───────────────────────────────────────────────────┘
```

---

### 4. Add / Edit Form Page (e.g., Add Vehicle)

```
 ┌───────────────────────────────────────────────────┐
 │ LOGO   Dashboard  Vehicles  Rentals  Reports  ⋮User│
 ├───────────────────────────────────────────────────┤
 │  Add Vehicle                                       │
 │  ┌─────────────────────────────────────────────┐   │
 │  │ Vehicle Name                                 │   │
 │  └─────────────────────────────────────────────┘   │
 │  ┌─────────────────────────────────────────────┐   │
 │  │ Registration Number                          │   │
 │  └─────────────────────────────────────────────┘   │
 │  ┌───────────────────┐ ┌───────────────────────┐   │
 │  │ Category ▾         │ │ Daily Rate            │   │
 │  └───────────────────┘ └───────────────────────┘   │
 │  ┌─────────────────────────────────────────────┐   │
 │  │ Status ▾ (Available / Rented / Maintenance)  │   │
 │  └─────────────────────────────────────────────┘   │
 │                                                     │
 │           [ Cancel ]        [ Save Vehicle ]        │
 └───────────────────────────────────────────────────┘
```

---

### 5. Profile Page

```
 ┌───────────────────────────────────────────────────┐
 │ LOGO   Dashboard  Vehicles  Rentals  Reports  ⋮User│
 ├───────────────────────────────────────────────────┤
 │  My Profile                                        │
 │  ┌───────────┐                                     │
 │  │  Avatar   │   Name:  ______________________     │
 │  │  [Change] │   Email: ______________________     │
 │  └───────────┘   Phone: ______________________     │
 │                   Role:  ______________________     │
 │                                                     │
 │           [ Change Password ]  [ Save Changes ]     │
 └───────────────────────────────────────────────────┘
```

---

## Page Summary

| Page | Purpose |
|---|---|
| Login | User authentication entry point |
| Dashboard | Overview stats and recent activity, role-specific |
| List Page | Browse/search/filter records (Vehicles, Customers, Rentals, etc.) |
| Add/Edit Form | Create or update a record |
| Profile | View and edit user account details |

Wireframes here are layout-only (structure and functionality), no color or styling, per Sprint 3 guidance. For higher-fidelity versions, recreate these in Draw.io, Figma, or Lucidchart and export as images into `docs/design/wireframes/`.