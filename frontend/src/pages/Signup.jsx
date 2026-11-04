import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Signup UI completed successfully!");
  };

  return (
    <div className="signup-container">

      <div className="signup-left">
        <h2>Placement Portal</h2>

        <h1>Student Placement & Job Portal</h1>

        <p>
          Create your account and start building
          your professional career with us.
        </p>
      </div>

      <div className="signup-right">
        <div className="signup-box">

          <h2>Create Account</h2>
          <p>Enter your details to get started</p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Create Account
            </button>

          </form>

          <p className="login-text">
            Already have an account?
            {" "}
            <Link to="/login">Login</Link>
          </p>

        </div>
      </div>

    </div>
  );
}

export default Signup;
