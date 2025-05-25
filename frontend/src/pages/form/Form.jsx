import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    classGrade: '',
    guardianName: '',
    guardianMobile: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null); // For API errors

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
    if (submitError) setSubmitError(null);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile number is required';
    else if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = 'Must be 10 digits';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.classGrade.trim()) newErrors.classGrade = 'Class/Grade is required';
    if (!formData.guardianName.trim()) newErrors.guardianName = "Guardian's name is required";
    if (!formData.guardianMobile.trim()) newErrors.guardianMobile = "Guardian's mobile is required";
    else if (!/^\d{10}$/.test(formData.guardianMobile)) newErrors.guardianMobile = "Must be 10 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setSubmitted(false);
      return;
    }

    try {
      // POST data to your backend API
      const response = await fetch('https://ngo-website-2.onrender.com/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Success:', data);

      setSubmitted(true);
      setSubmitError(null);

      // Clear form after submission
      setFormData({
        fullName: '',
        email: '',
        mobileNumber: '',
        dateOfBirth: '',
        gender: '',
        address: '',
        classGrade: '',
        guardianName: '',
        guardianMobile: '',
      });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('Failed to submit registration. Please try again.');
      setSubmitted(false);
    }
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-green-100 z-50">
        <div className="bg-green-200 border border-green-400 text-green-900 px-8 py-6 rounded shadow-lg text-xl font-semibold">
          🎉 Registration successful!
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 shadow-lg bg-white rounded">
      <h2 className="text-2xl font-bold text-center mb-4">🎓 Student Registration Form</h2>
      <p className="text-center text-gray-600 mb-8">Please fill in all required information.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block font-semibold mb-1">Full Name *</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={formData.fullName}
            onChange={e => handleInputChange('fullName', e.target.value)}
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email *</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded"
            value={formData.email}
            onChange={e => handleInputChange('email', e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block font-semibold mb-1">Mobile Number *</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={formData.mobileNumber}
            onChange={e => handleInputChange('mobileNumber', e.target.value)}
          />
          {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block font-semibold mb-1">Date of Birth *</label>
          <input
            type="date"
            className="w-full border px-3 py-2 rounded"
            value={formData.dateOfBirth}
            onChange={e => handleInputChange('dateOfBirth', e.target.value)}
          />
          {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>}
        </div>

        {/* Gender */}
        <div>
          <label className="block font-semibold mb-1">Gender *</label>
          <div className="flex gap-6">
            {['male', 'female', 'other'].map(option => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value={option}
                  checked={formData.gender === option}
                  onChange={() => handleInputChange('gender', option)}
                />
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </label>
            ))}
          </div>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
        </div>

        {/* Address */}
        <div>
          <label className="block font-semibold mb-1">Address *</label>
          <textarea
            className="w-full border px-3 py-2 rounded"
            rows="3"
            value={formData.address}
            onChange={e => handleInputChange('address', e.target.value)}
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

        {/* Class/Grade */}
        <div>
          <label className="block font-semibold mb-1">Class/Grade *</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={formData.classGrade}
            onChange={e => handleInputChange('classGrade', e.target.value)}
          />
          {errors.classGrade && <p className="text-red-500 text-sm">{errors.classGrade}</p>}
        </div>

        {/* Guardian Name */}
        <div>
          <label className="block font-semibold mb-1">Guardian's Name *</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={formData.guardianName}
            onChange={e => handleInputChange('guardianName', e.target.value)}
          />
          {errors.guardianName && <p className="text-red-500 text-sm">{errors.guardianName}</p>}
        </div>

        {/* Guardian Mobile */}
        <div>
          <label className="block font-semibold mb-1">Guardian's Mobile Number *</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={formData.guardianMobile}
            onChange={e => handleInputChange('guardianMobile', e.target.value)}
          />
          {errors.guardianMobile && <p className="text-red-500 text-sm">{errors.guardianMobile}</p>}
        </div>

        {submitError && (
          <p className="text-red-600 text-center font-semibold">{submitError}</p>
        )}

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
          >
            Submit Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
