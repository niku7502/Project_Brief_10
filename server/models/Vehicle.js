const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Vehicle name is required'],
      trim: true,
      minlength: [3, 'Name must be at least 3 characters'],
      maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    brand: {
      type: String,
      required: [true, 'Brand is required'],
      trim: true,
    },
    type: {
      type: String,
      required: [true, 'Vehicle type is required'],
      enum: {
        values: ['Car', 'SUV', 'Bike', 'Van', 'Bus'],
        message: 'Type must be Car, SUV, Bike, Van or Bus',
      },
    },
    registrationNumber: {
      type: String,
      required: [true, 'Registration number is required'],
      unique: true,
      uppercase: true,
      trim: true,
    },
    pricePerDay: {
      type: Number,
      required: [true, 'Price per day is required'],
      min: [100, 'Price must be at least 100'],
      max: [100000, 'Price cannot be more than 100000'],
    },
    seats: {
      type: Number,
      default: 4,
      min: [1, 'Seats must be at least 1'],
      max: [60, 'Seats cannot be more than 60'],
    },
    fuelType: {
      type: String,
      enum: {
        values: ['Petrol', 'Diesel', 'Electric', 'CNG'],
        message: 'Fuel type must be Petrol, Diesel, Electric or CNG',
      },
      default: 'Petrol',
    },
    available: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      trim: true,
      maxlength: [200, 'Description cannot be more than 200 characters'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Vehicle', vehicleSchema);