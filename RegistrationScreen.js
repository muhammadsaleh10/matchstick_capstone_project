import React, { useState } from 'react';

const RegistrationScreen = ({ nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    height: '',
    workplace: '',
    jobTitle: '',
    school: '',
    educationLevel: '',
    nationality: '',
    location: '',
    religion: '',
    caste: '',
    maritalStatus: '',
    languages: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-md p-4">
        <div className="flex justify-between items-center mb-4">
          <button className="text-purple-500" onClick={prevStep}>Back</button>
          <button className="text-purple-500" onClick={nextStep}>Next</button>
        </div>
        <h1 className="text-2xl font-semibold mb-4">Your Profile</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Personal Information</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Name</span>
                <input
                  name="name"
                  placeholder="Haris Adnan"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-b-2 border-black"
                />
              </div>
              <div className="flex justify-between">
                <span>Gender</span>
                <input
                  name="gender"
                  placeholder="Male"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border-b-2 border-black"
                />
              </div>
              <div className="flex justify-between">
                <span>Date of Birth</span>
                <input
                  name="dob"
                  placeholder="20 July 2024"
                  value={formData.dob}
                  onChange={handleChange}
                  className="border-b-2 border-black"
                />
              </div>
              <div className="flex justify-between">
                <span>Height</span>
                <input
                  name="height"
                  placeholder="5'11"
                  value={formData.height}
                  onChange={handleChange}
                  className="border-b-2 border-black"
                />
              </div>
              <div className="flex justify-between">
                <span>Workplace</span>
                <input
                  name="workplace"
                  placeholder="Amazon"
                  value={formData.workplace}
                  onChange={handleChange}
                  className="border-b-2 border-black"
                />
              </div>
              <div className="flex justify-between">
                <span>Job Title</span>
                <input
                  name="jobTitle"
                  placeholder="Software Engineer"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="border-b-2 border-black"
                />
              </div>
              <div className="flex justify-between">
                <span>School</span>
                <input
                  name="school"
                  placeholder="Harvard"
                  value={formData.school}
                  onChange={handleChange}
                  className="border-b-2 border-black"
                />
              </div>
              <div className="flex justify-between">
                <span>Education Level</span>
                <input
                  name="educationLevel"
                  placeholder="MBA"
                  value={formData.educationLevel}
                  onChange={handleChange}
                  className="border-b-2 border-black"
                />
              </div>
              <div className="flex justify-between">
                <span>Nationality</span>
                <input
                  name="nationality"
                  placeholder="Pakistani Citizen"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="border-b-2 border-black"
                />
              </div>
              <div className="flex justify-between">
                <span>Location</span>
                <input
                  name="location"
                  placeholder="San Francisco"
                  value={formData.location}
                  onChange={handleChange}
                  className="border-b-2 border-black"
                />
              </div>
              <div className="flex justify-between">
                <span>Religion</span>
                <input
                  name="religion"
                  placeholder="Islam"
                  value={formData.religion}
                  onChange={handleChange}
                  className="border-b-2 border-black"
                />
              </div>
              <div className="flex justify-between">
                <span>Caste</span>
                <input
                  name="caste"
                  placeholder="Syed"
                  value={formData.caste}
                  onChange={handleChange}
                  className="border-b-2 border-black"
                />
              </div>
              <div className="flex justify-between">
                <span>Marital Status</span>
                <input
                  name="maritalStatus"
                  placeholder="Single"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  className="border-b-2 border-black"
                />
              </div>
              <div className="flex justify-between">
                <span>Languages</span>
                <input
                  name="languages"
                  placeholder="Urdu, English"
                  value={formData.languages}
                  onChange={handleChange}
                  className="border-b-2 border-black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationScreen;