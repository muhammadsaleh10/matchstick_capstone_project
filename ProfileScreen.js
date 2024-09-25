import React from 'react';

const ProfileScreen = ({ prevStep, formData }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-md p-4">
        <div className="flex justify-between items-center mb-4">
          <button className="text-purple-500" onClick={prevStep}>Back</button>
        </div>
        <h1 className="text-2xl font-semibold mb-4">Profile Information</h1>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <p><strong>Name:</strong> {formData.name || 'Haris Adnan'}</p>
          <p><strong>Gender:</strong> {formData.gender || 'Male'}</p>
          <p><strong>Date of Birth:</strong> {formData.dob || '20 July 2024'}</p>
          <p><strong>Height:</strong> {formData.height || "5'11"}</p>
          <p><strong>Workplace:</strong> {formData.workplace || 'Amazon'}</p>
          <p><strong>Job Title:</strong> {formData.jobTitle || 'Software Engineer'}</p>
          <p><strong>School:</strong> {formData.school || 'Harvard'}</p>
          <p><strong>Education Level:</strong> {formData.educationLevel || 'MBA'}</p>
          <p><strong>Nationality:</strong> {formData.nationality || 'Pakistani Citizen'}</p>
          <p><strong>Location:</strong> {formData.location || 'San Francisco'}</p>
          <p><strong>Religion:</strong> {formData.religion || 'Islam'}</p>
          <p><strong>Caste:</strong> {formData.caste || 'Syed'}</p>
          <p><strong>Marital Status:</strong> {formData.maritalStatus || 'Single'}</p>
          <p><strong>Languages:</strong> {formData.languages || 'Urdu, English'}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;