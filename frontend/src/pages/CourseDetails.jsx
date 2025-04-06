import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allCourses } from './coursesData';

function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [enrolled, setEnrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  // Convert courseId to number since your data uses numeric IDs
  const numericCourseId = parseInt(courseId);
  const course = allCourses.find(c => c.id === numericCourseId);

  useEffect(() => {
    if (!course) {
      navigate('/learn');
      return;
    }

    const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    setEnrolled(enrolledCourses.includes(numericCourseId));
    
    const courseProgress = JSON.parse(localStorage.getItem('courseProgress')) || {};
    setProgress(courseProgress[courseId] || 0); // Keep as string for localStorage key
  }, [courseId, course, navigate, numericCourseId]);

  const handleEnroll = () => {
    const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    if (!enrolledCourses.includes(numericCourseId)) {
      enrolledCourses.push(numericCourseId); // Store as number
      localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
    }
    
    const courseProgress = JSON.parse(localStorage.getItem('courseProgress')) || {};
    courseProgress[courseId] = 0; // Use string key
    localStorage.setItem('courseProgress', JSON.stringify(courseProgress));
    
    setEnrolled(true);
    setProgress(0);
  };

  const startLearning = () => {
    navigate(`/learn/${courseId}/week/1`);
  };

  if (!course) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Course Details */}
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
              {course.level}
            </span>
            <span className="text-gray-600">{course.duration}</span>
            <span className="text-gray-600">Instructor: {course.instructor}</span>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">About This Course</h2>
            <p className="text-gray-700 mb-4">{course.description}</p>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">What You'll Learn</h3>
              <ul className="list-disc pl-5 space-y-1">
                {course.roadmap.slice(0, 5).map((item, index) => (
                  <li key={index}>{item.title || item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Course Roadmap</h2>
            <div className="space-y-4">
              {course.roadmap.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-3 mt-1">
                    {progress > (index / course.roadmap.length) * 100 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <div className="h-4 w-4 border-2 border-indigo-500 rounded-full"></div>
                    )}
                  </div>
                  <p className="text-gray-700">{item.title || item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Enrollment Card */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
            {enrolled ? (
              <div>
                <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
                <div className="mb-6">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-600 h-2.5 rounded-full" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{progress}% complete</p>
                </div>
                <button
                  onClick={startLearning}
                  className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 font-medium"
                >
                  {progress > 0 ? 'Continue Learning' : 'Start Course'}
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-semibold mb-4">Enroll in this Course</h3>
                <button
                  onClick={handleEnroll}
                  className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 font-medium mb-4"
                >
                  Enroll Now
                </button>
                <div className="text-sm text-gray-600">
                  <p className="mb-1">✓ {course.duration} of learning content</p>
                  <p className="mb-1">✓ Taught by industry experts</p>
                  <p>✓ Certificate of completion</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;