import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Dummy courses data
const allCourses = [
  {
    id: '1',
    title: 'React Fundamentals',
    description: 'Learn the core concepts of React including components, state, and props.',
    tags: ['React', 'JavaScript', 'Frontend'],
    level: 'Beginner',
    duration: '4 weeks',
    instructor: 'Jane Smith',
    thumbnail: 'https://via.placeholder.com/300x200?text=React'
  },
  {
    id: '2',
    title: 'Node.js Backend Development',
    description: 'Build scalable server-side applications with Node.js and Express.',
    tags: ['Node.js', 'JavaScript', 'Backend'],
    level: 'Intermediate',
    duration: '6 weeks',
    instructor: 'John Doe',
    thumbnail: 'https://via.placeholder.com/300x200?text=Node.js'
  },
  {
    id: '3',
    title: 'Python for Data Science',
    description: 'Master Python for data analysis, visualization, and machine learning.',
    tags: ['Python', 'Data Science', 'Machine Learning'],
    level: 'Beginner',
    duration: '5 weeks',
    instructor: 'Alex Johnson',
    thumbnail: 'https://via.placeholder.com/300x200?text=Python'
  },
  {
    id: '4',
    title: 'Advanced React Patterns',
    description: 'Dive deep into advanced React patterns and performance optimization.',
    tags: ['React', 'JavaScript', 'Frontend'],
    level: 'Advanced',
    duration: '4 weeks',
    instructor: 'Sarah Williams',
    thumbnail: 'https://via.placeholder.com/300x200?text=React+Advanced'
  },
  {
    id: '5',
    title: 'Blockchain Fundamentals',
    description: 'Learn the basics of blockchain technology and smart contracts.',
    tags: ['Blockchain', 'Smart Contracts', 'Web3'],
    level: 'Beginner',
    duration: '3 weeks',
    instructor: 'Mike Chen',
    thumbnail: 'https://via.placeholder.com/300x200?text=Blockchain'
  },
  {
    id: '6',
    title: 'DevOps with Docker & Kubernetes',
    description: 'Containerize and deploy applications using Docker and Kubernetes.',
    tags: ['DevOps', 'Cloud Computing', 'Docker'],
    level: 'Intermediate',
    duration: '5 weeks',
    instructor: 'Emily Rodriguez',
    thumbnail: 'https://via.placeholder.com/300x200?text=DevOps'
  }
];

function Learn() {
  const navigate = useNavigate();
  
  const [userInterests, setUserInterests] = useState([]);
  const [showInterestForm, setShowInterestForm] = useState(false);
  const [firstVisit, setFirstVisit] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [courseProgress, setCourseProgress] = useState({});

  // Available interests
  const availableInterests = [
    'Web Development', 'JavaScript', 'React', 'Node.js', 
    'Python', 'Data Science', 'Machine Learning', 'AI',
    'Blockchain', 'Smart Contracts', 'DevOps', 'Cloud Computing'
  ];

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    const savedProgress = JSON.parse(localStorage.getItem('courseProgress')) || {};
    const savedInterests = JSON.parse(localStorage.getItem('userInterests')) || [];
    
    setEnrolledCourses(savedCourses);
    setCourseProgress(savedProgress);
    setUserInterests(savedInterests);
    
    const hasInterests = savedInterests.length > 0;
    setFirstVisit(!hasInterests);
    setShowInterestForm(!hasInterests);
  }, []);

  const toggleInterest = (interest) => {
    setUserInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest) 
        : [...prev, interest]
    );
  };

  const saveInterests = () => {
    localStorage.setItem('userInterests', JSON.stringify(userInterests));
    setShowInterestForm(false);
    setFirstVisit(false);
  };

  const enrollInCourse = (courseId) => {
    const updatedEnrolledCourses = [...new Set([...enrolledCourses, courseId])];
    setEnrolledCourses(updatedEnrolledCourses);
    localStorage.setItem('enrolledCourses', JSON.stringify(updatedEnrolledCourses));
    
    // Initialize progress if not already set
    if (!courseProgress[courseId]) {
      const updatedProgress = { ...courseProgress, [courseId]: 0 };
      setCourseProgress(updatedProgress);
      localStorage.setItem('courseProgress', JSON.stringify(updatedProgress));
    }
  };

  const getRecommendedCourses = () => {
    if (userInterests.length === 0) return allCourses;
    
    return allCourses.filter(course => 
      userInterests.some(interest => 
        course.tags.some(tag => 
          tag.toLowerCase().includes(interest.toLowerCase())
        )
      )
    );
  };

  const viewCourseDetails = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Interest Selection Modal */}
      {showInterestForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl">
            <h2 className="text-2xl font-bold mb-2">What do you want to learn?</h2>
            <p className="text-gray-600 mb-6">
              Select your interests to get personalized course recommendations
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {availableInterests.map(interest => (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    userInterests.includes(interest)
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                Selected: {userInterests.length} {userInterests.length === 1 ? 'interest' : 'interests'}
              </span>
              <div className="space-x-3">
                <button
                  onClick={() => setShowInterestForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Skip for now
                </button>
                <button
                  onClick={saveInterests}
                  disabled={userInterests.length < 1}
                  className={`px-4 py-2 rounded-md ${
                    userInterests.length < 1
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  Save Interests
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Personalized Header */}
      <div className="mb-8">
        {userInterests.length > 0 ? (
          <div className="bg-indigo-50 rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-2">
              Recommended for {userInterests.join(', ')}
            </h2>
            <p className="text-gray-600">
              Based on your interests, we've selected these courses for you
            </p>
            <button
              onClick={() => setShowInterestForm(true)}
              className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Edit interests
            </button>
          </div>
        ) : (
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-2">Browse All Courses</h2>
            <p className="text-gray-600 mb-4">
              Select interests to get personalized recommendations
            </p>
            <button
              onClick={() => setShowInterestForm(true)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Select Interests
            </button>
          </div>
        )}
      </div>

      {/* My Courses Section */}
      {enrolledCourses.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">My Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCourses
              .filter(course => enrolledCourses.includes(course.id))
              .map(course => (
                <div 
                  key={course.id} 
                  className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
                >
                  <div className="h-40 bg-gray-200 rounded-t-lg mb-4 overflow-hidden">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{course.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      {course.level}
                    </span>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm line-clamp-2">{course.description}</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                    <div 
                      className="bg-indigo-600 h-2.5 rounded-full" 
                      style={{ width: `${courseProgress[course.id] || 0}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600">
                      {courseProgress[course.id] || 0}% complete
                    </p>
                    <button
                      onClick={() => viewCourseDetails(course.id)}
                      className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Available Courses Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">
          {userInterests.length > 0 ? 'Recommended Courses' : 'All Courses'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getRecommendedCourses()
            .filter(course => !enrolledCourses.includes(course.id))
            .map(course => (
              <div 
                key={course.id} 
                className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
              >
                <div className="h-40 bg-gray-200 rounded-t-lg mb-4 overflow-hidden">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">{course.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    {course.level}
                  </span>
                </div>
                <div className="mb-4">
                  <p className="text-gray-600 text-sm line-clamp-2">{course.description}</p>
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  <span>{course.duration}</span> • <span>{course.instructor}</span>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => viewCourseDetails(course.id)}
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => enrollInCourse(course.id)}
                    className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Learn;