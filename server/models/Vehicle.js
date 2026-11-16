const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Vehicle name is required'], trim: true },
    type: { type: String, required: [true, 'Vehicle type is required'] },
    pricePerDay: { type: Number, required: [true, 'Price is required'], min: 0 },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Vehicle', vehicleSchema);