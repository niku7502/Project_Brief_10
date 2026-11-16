const express = require('express');
const router = express.Router();
const {
  getVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} = require('../controllers/vehicleController');

router.get('/', getVehicles);           // GET    /api/vehicles
router.get('/:id', getVehicleById);     // GET    /api/vehicles/:id
router.post('/', createVehicle);        // POST   /api/vehicles
router.put('/:id', updateVehicle);      // PUT    /api/vehicles/:id
router.delete('/:id', deleteVehicle);   // DELETE /api/vehicles/:id

module.exports = router;