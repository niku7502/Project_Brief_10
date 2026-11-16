import { useState } from 'react';
import PageTitle from '../../components/ui/PageTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import FormField from '../../components/ui/FormField';
import { validateBooking } from '../../utils/validators';
import './Booking.css';

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  vehicleType: '',
  pickupDate: '',
  days: '',
  notes: '',
};

function Booking() {
  // Exercise 2: every field lives in state (controlled components)
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  const today = new Date().toISOString().split('T')[0];

  // One handler updates whichever field was typed in
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // Exercises 3, 4 and 6
  const handleSubmit = (e) => {
    e.preventDefault(); // stops the browser from refreshing the page

    const validationErrors = validateBooking(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitted(null);
      return; // invalid data is stopped before submission
    }

    console.log('Booking submitted:', values);
    setSubmitted(values); // show the data on the page
    setValues(initialValues); // clear the form
  };

  const handleReset = () => {
    setValues(initialValues);
    setErrors({});
    setSubmitted(null);
  };

  return (
    <div>
      <PageTitle title="Book a Vehicle" subtitle="Fill in the details below to request a booking" />

      <Card title="Booking Details" description="Fields marked with * are required.">
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <FormField
              label="Full name"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              error={errors.fullName}
              placeholder="e.g. Rahul Sharma"
              required
            />

            <FormField
              label="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="name@example.com"
              required
            />

            <FormField
              label="Phone number"
              name="phone"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              error={errors.phone}
              placeholder="10-digit mobile number"
              required
            />

            <FormField
              label="Vehicle type"
              name="vehicleType"
              type="select"
              value={values.vehicleType}
              onChange={handleChange}
              error={errors.vehicleType}
              required
            >
              <option value="">Select a vehicle type</option>
              <option value="Car">Car</option>
              <option value="Bike">Bike</option>
              <option value="SUV">SUV</option>
            </FormField>

            <FormField
              label="Pickup date"
              name="pickupDate"
              type="date"
              min={today}
              value={values.pickupDate}
              onChange={handleChange}
              error={errors.pickupDate}
              required
            />

            <FormField
              label="Number of days"
              name="days"
              type="number"
              min="1"
              value={values.days}
              onChange={handleChange}
              error={errors.days}
              placeholder="1 to 30"
              required
            />
          </div>

          <FormField
            label="Notes (optional)"
            name="notes"
            type="textarea"
            value={values.notes}
            onChange={handleChange}
            error={errors.notes}
            placeholder="Any special requests?"
          />
          <p className="helper-text">{values.notes.length}/200 characters</p>

          <div className="button-row">
            <Button text="Submit booking" type="submit" />
            <Button text="Reset" type="button" variant="secondary" onClick={handleReset} />
          </div>
        </form>
      </Card>

      {/* Conditional rendering: shown only after a successful submission */}
      {submitted && (
        <Card title="Booking received" highlight>
          <ul className="summary-list">
            <li><strong>Name:</strong> {submitted.fullName}</li>
            <li><strong>Email:</strong> {submitted.email}</li>
            <li><strong>Phone:</strong> {submitted.phone}</li>
            <li><strong>Vehicle:</strong> {submitted.vehicleType}</li>
            <li><strong>Pickup date:</strong> {submitted.pickupDate}</li>
            <li><strong>Days:</strong> {submitted.days}</li>
            {submitted.notes && <li><strong>Notes:</strong> {submitted.notes}</li>}
          </ul>
        </Card>
      )}
    </div>
  );
}

export default Booking;