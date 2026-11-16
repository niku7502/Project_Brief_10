// Temporary test data. A real database replaces this in a later sprint.
const vehicles = [
  { id: 1, name: 'Honda City', type: 'Car', pricePerDay: 1500 },
  { id: 2, name: 'Royal Enfield Classic', type: 'Bike', pricePerDay: 800 },
  { id: 3, name: 'Toyota Fortuner', type: 'SUV', pricePerDay: 3500 },
];

// GET /api/vehicles
const getVehicles = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'All vehicles fetched',
    count: vehicles.length,
    data: vehicles,
  });
};

// GET /api/vehicles/:id  (route parameter)
const getVehicleById = (req, res) => {
  const { id } = req.params;
  const vehicle = vehicles.find((v) => v.id === Number(id));

  if (!vehicle) {
    return res.status(404).json({
      success: false,
      message: `Vehicle with id ${id} not found`,
    });
  }

  res.status(200).json({
    success: true,
    message: `Vehicle ${id} fetched`,
    data: vehicle,
  });
};

// POST /api/vehicles
const createVehicle = (req, res) => {
  res.status(201).json({
    success: true,
    message: 'Vehicle created (test response, not saved yet)',
    data: req.body,
  });
};

// PUT /api/vehicles/:id
const updateVehicle = (req, res) => {
  res.status(200).json({
    success: true,
    message: `Vehicle ${req.params.id} updated (test response, not saved yet)`,
    data: req.body,
  });
};

// DELETE /api/vehicles/:id
const deleteVehicle = (req, res) => {
  res.status(200).json({
    success: true,
    message: `Vehicle ${req.params.id} deleted (test response, not saved yet)`,
  });
};

module.exports = {
  getVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle,
};