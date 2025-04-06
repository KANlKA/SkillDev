import React from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCourses, enrolledCourse, updatedCourses, markVideoAsWatched } from '../utils/api';


function EnrollPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agreeTerms: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [showTerms, setShowTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (!formData.name || !formData.email) {
        throw new Error('Please fill in all required fields');
      }
      if (!formData.agreeTerms) {
        throw new Error('You must agree to the terms and conditions');
      }

      // Initialize localStorage data if empty
      const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
      const courseProgress = JSON.parse(localStorage.getItem('courseProgress') || '{}');

      // Add new course if not already enrolled
      if (!enrolledCourses.includes(courseId)) {
        const updatedCourses = [...enrolledCourses, courseId];
        localStorage.setItem('enrolledCourses', JSON.stringify(updatedCourses));
        
        // Initialize progress for new course
        const updatedProgress = {...courseProgress, [courseId]: 0};
        localStorage.setItem('courseProgress', JSON.stringify(updatedProgress));
      }

      // Redirect to course details
      navigate(`/course/${courseId}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md relative">
      {/* Terms and Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            
            <div className="prose prose-sm max-w-none">
              <h3>1. Enrollment Terms</h3>
              <p>
                By enrolling in this course, you agree to abide by all platform rules and guidelines. 
                You must provide accurate information during enrollment and maintain the confidentiality 
                of your account credentials.
              </p>

              <h3>2. Course Access</h3>
              <p>
                Course access is granted for personal, non-commercial use only. You may not share, 
                redistribute, or resell course materials. Access duration varies by course and will 
                be specified at enrollment.
              </p>

              <h3>3. Refund Policy</h3>
              <p>
                Refunds are available within 14 days of enrollment if no more than 20% of course 
                content has been accessed. To request a refund, contact our support team with your 
                enrollment details.
              </p>

              <h3>4. Code of Conduct</h3>
              <p>
                You agree to maintain professional conduct in all course interactions. Harassment, 
                plagiarism, or any form of dishonest behavior will result in immediate removal from 
                the course without refund.
              </p>

              <h3>5. Intellectual Property</h3>
              <p>
                All course materials, including videos, text, code samples, and exercises are 
                protected by copyright. You may use these materials for personal learning but may 
                not reproduce or distribute them.
              </p>

              <h3>6. Privacy Policy</h3>
              <p>
                We collect and process your personal data in accordance with our Privacy Policy. 
                By enrolling, you consent to our collection and use of your information as described 
                in that policy.
              </p>

              <h3>7. Certification</h3>
              <p>
                Certificates of completion are awarded at the discretion of the platform based on 
                satisfactory completion of all course requirements. Certificates may be revoked if 
                later found to be obtained fraudulently.
              </p>
            </div>

            <div className="mt-6 text-center">
              <button 
                onClick={() => setShowTerms(false)} 
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold mb-6 text-center">Enroll in Course</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="agreeTerms"
              name="agreeTerms"
              type="checkbox"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="agreeTerms" className="font-medium text-gray-700">
              I agree to the{" "}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setShowTerms(true);
                }}
                className="text-indigo-600 hover:text-indigo-500 underline"
              >
                Terms and Conditions
              </button>
            </label>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Processing...' : 'Complete Enrollment'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EnrollPage;