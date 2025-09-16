import React, { useState } from "react";
import "./Signup.css";

export default function SignupWizard({ onBack }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal
    firstName: "",
    lastName: "",
    age: "",
    phone: "",
    address: "",
    // Health
    hasCondition: false,
    conditionDetails: "",
    // General
    emergencyName: "",
    emergencyRelation: "",
    emergencyAddress: " ",
    emergencyPhone: "",
    // Terms
    agree: false,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must accept the terms!");
      return;
    }
    console.log("Form Submitted:", formData);
    alert("Signup complete!");
  };

  return (
    <div className="signup-container">
      {step === 1 && (
        <div className="form-step">
          <h2>
            Step 1 / 4 <span className="step-title">Personal Information</span>
          </h2>

          <div className="form-grid">
            <div className="form-group">
              <label>First Name</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group"></div>
            <div className="form-group">
              <label>Phone</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender || ""}
                onChange={handleChange}
              >
                <option value="">-- Select --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label>Nationality</label>
              <input
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Birthdate</label>
              <input
                type="date"
                name="birthdate"
                value={formData.birthdate || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Fitness Type</label>
              <select
                name="fitnessType"
                value={formData.fitnessType || ""}
                onChange={handleChange}
              >
                <option value="">-- Select --</option>
                <option value="cardio">Cardio</option>
                <option value="strength">Strength</option>
                <option value="flexibility">Flexibility</option>
              </select>
            </div>
            <div className="form-group">
              <label>Fitness Goal</label>
              <select
                name="fitnessGoal"
                value={formData.fitnessGoal || ""}
                onChange={handleChange}
              >
                <option value="">-- Select --</option>
                <option value="weightloss">Weight Loss</option>
                <option value="muscle">Build Muscle</option>
                <option value="endurance">Endurance</option>
              </select>
            </div>
          </div>

          <div className="form-nav">
            <button onClick={nextStep} className="next-btn">
              Next
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="form-step">
          <h2>Step 2/4 | Health Information</h2>

          <div className="form-group">
            <label>Height (cm)</label>
            <input
              type="number"
              name="height"
              value={formData.height || ""}
              onChange={handleChange}
              min="50"
              max="300"
              placeholder="Enter height in cm"
            />
          </div>

          <div className="form-group">
            <label>Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={formData.weight || ""}
              onChange={handleChange}
              min="10"
              max="500"
              placeholder="Enter weight in kg"
            />
          </div>

          {/* BMI Calculation */}
          {formData.height && formData.weight && (
            <div className="form-group">
              <label>Your BMI</label>
              <p>
                {(formData.weight / Math.pow(formData.height / 100, 2)).toFixed(
                  2
                )}
              </p>
            </div>
          )}

          <label>
            <input
              type="checkbox"
              name="hasCondition"
              checked={formData.hasCondition}
              onChange={handleChange}
            />
            Do you have any medical conditions?
          </label>

          {formData.hasCondition && (
            <div className="form-group">
              <label>Condition Details</label>
              <textarea
                name="conditionDetails"
                placeholder="Condition details..."
                value={formData.conditionDetails}
                onChange={(e) => {
                  handleChange(e);
                  e.target.style.height = "auto";
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
                rows={3}
              />
            </div>
          )}

          <div className="form-nav">
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
          </div>
        </div>
      )}
      {/*STEP 3 ON SIGN UP*/}
      {step === 3 && (
        <div className="form-step">
          <h2>
            Step 3/4 <span className="step-title">General Information</span>
          </h2>

          <div className="form-vertical">
            <div className="form-group">
              <label>Emergency Contact Name</label>
              <input
                name="emergencyName"
                value={formData.emergencyName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Relationship</label>
              <input
                name="emergencyRelation"
                value={formData.emergencyRelation}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Emergency Address</label>
              <input
                name="emergencyAddress"
                value={formData.emergencyAddress || ""}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Emergency Phone</label>
              <input
                type="text"
                name="emergencyPhone"
                value={formData.emergencyPhone}
                maxLength="11"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-nav">
            <button onClick={prevStep}>Previous</button>
            <button onClick={nextStep}>Next</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="form-step">
          <h2>Step 4/4 | Terms & Agreement</h2>
          <p>
            By signing up, you agree to follow the gym’s rules and
            regulations...
          </p>
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            I accept the terms and conditions
          </label>
          <div className="form-nav">
            <button onClick={prevStep}>Previous</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}
