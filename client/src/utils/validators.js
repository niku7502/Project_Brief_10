export function validateBooking(values) {
  const errors = {};

  const name = values.fullName.trim();
  if (!name) {
    errors.fullName = 'Full name is required.';
  } else if (name.length < 3) {
    errors.fullName = 'Full name must be at least 3 characters.';
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Enter a valid email, for example name@example.com.';
  }

  const phone = values.phone.trim();
  if (!phone) {
    errors.phone = 'Phone number is required.';
  } else if (!/^\d{10}$/.test(phone)) {
    errors.phone = 'Phone number must be exactly 10 digits.';
  }

  if (!values.vehicleType) {
    errors.vehicleType = 'Please choose a vehicle type.';
  }

  const today = new Date().toISOString().split('T')[0];
  if (!values.pickupDate) {
    errors.pickupDate = 'Pickup date is required.';
  } else if (values.pickupDate < today) {
    errors.pickupDate = 'Pickup date cannot be in the past.';
  }

  const days = Number(values.days);
  if (!values.days) {
    errors.days = 'Number of days is required.';
  } else if (!Number.isInteger(days) || days <= 0) {
    errors.days = 'Days must be a positive whole number.';
  } else if (days > 30) {
    errors.days = 'You can book a vehicle for at most 30 days.';
  }

  if (values.notes.length > 200) {
    errors.notes = 'Notes must be 200 characters or fewer.';
  }

  return errors;
}