import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/userSlice";  
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    companyName: "",
    agency: "yes",
  });

  const [errors, setErrors] = useState({}); // store validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    }
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "Email is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    dispatch(setUser(formData)); // save to redux
    alert("Account created successfully!");
    navigate("/profile"); // redirect to profile page
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="signup-content">
          <h2>
            Create your
            <br /> PopX account
          </h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">
                Full Name<span className="required-asterisk">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Marry Doe"
              />
              {errors.fullName && <span className="error">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">
                Phone Number<span className="required-asterisk">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="9876543210"
              />
              {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="emailAddress">
                Email Address<span className="required-asterisk">*</span>
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                placeholder="marry@gmail.com"
              />
              {errors.emailAddress && <span className="error">{errors.emailAddress}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">
                Password<span className="required-asterisk">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="PopX Pvt Ltd"
              />
            </div>

            <div className="radio-group">
              <label className="radio-label">
                Are you an Agency?<span className="required-asterisk">*</span>
              </label>
              <div className="radio-options">
                <input
                  type="radio"
                  id="yes"
                  name="agency"
                  value="yes"
                  checked={formData.agency === "yes"}
                  onChange={handleChange}
                />
                <label htmlFor="yes" className="radio-option-label">
                  Yes
                </label>
                <input
                  type="radio"
                  id="no"
                  name="agency"
                  value="no"
                  checked={formData.agency === "no"}
                  onChange={handleChange}
                />
                <label htmlFor="no" className="radio-option-label">
                  No
                </label>
              </div>
            </div>

            <button type="submit" className="create-account-btn">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;


