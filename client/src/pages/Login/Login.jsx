import { useState } from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import Button from '../../components/common/Button';
import './Login.css';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sprint 6 placeholder — will connect to the auth API in a later sprint.
  };

  return (
    <AuthLayout>
      <h1 className="login__heading">Log in</h1>
      <p className="login__subheading">Access your bookings and account.</p>

      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </label>

        <label className="login__field">
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
            required
          />
        </label>

        <Button type="submit" variant="accent" full>Log in</Button>
      </form>

      <p className="login__footnote">Forgot your password?</p>
    </AuthLayout>
  );
}

export default Login;