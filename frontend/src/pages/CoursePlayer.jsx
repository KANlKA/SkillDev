import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allCourses } from './coursesData';

function CoursePlayer() {
  const { courseId, weekNumber = '1' } = useParams();
  const navigate = useNavigate();
  const [activeVideo, setActiveVideo] = useState(0);
  const [watchedVideos, setWatchedVideos] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const course = allCourses.find(c => c.id === parseInt(courseId));
  
  // Group roadmap items into weeks (3 videos per week)
  const weeks = [];
  if (course) {
    for (let i = 0; i < course.roadmap.length; i += 3) {
      weeks.push(course.roadmap.slice(i, i + 3));
    }
  }
  
  const currentWeek = parseInt(weekNumber) - 1;
  const currentVideos = weeks[currentWeek] || [];
  const currentVideoData = currentVideos[activeVideo] || {};

  useEffect(() => {
    if (!course) {
      navigate('/learn');
      return;
    }

    // Load watched videos and progress from localStorage
    const watched = JSON.parse(localStorage.getItem(`watchedVideos_${courseId}`)) || [];
    setWatchedVideos(watched);
    
    const courseProgress = JSON.parse(localStorage.getItem('courseProgress')) || {};
    setProgress(courseProgress[courseId] || 0);
  }, [courseId, course, navigate]);

  const markVideoAsWatched = (videoIndex) => {
    const globalIndex = (currentWeek * 3) + videoIndex;
    if (!watchedVideos.includes(globalIndex)) {
      const newWatched = [...watchedVideos, globalIndex];
      setWatchedVideos(newWatched);
      localStorage.setItem(`watchedVideos_${courseId}`, JSON.stringify(newWatched));
      
      // Update progress
      const newProgress = Math.round((newWatched.length / course.roadmap.length) * 100);
      setProgress(newProgress);
      
      const courseProgress = JSON.parse(localStorage.getItem('courseProgress')) || {};
      courseProgress[courseId] = newProgress;
      localStorage.setItem('courseProgress', JSON.stringify(courseProgress));
    }
  };

  const navigateToWeek = (weekNum) => {
    const completedWeeks = Math.floor(watchedVideos.length / 3);
    if (weekNum - 1 <= completedWeeks) {
      navigate(`/learn/${courseId}/week/${weekNum}`);
      setActiveVideo(0);
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  if (!course) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-4 sticky top-8">
            <h2 className="text-xl font-bold mb-4">{course.title}</h2>
            
            <div className="mb-6">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-indigo-600 h-2.5 rounded-full" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{progress}% complete</p>
            </div>
            
            <div className="space-y-2">
              {weeks.map((week, weekIndex) => {
                const weekNum = weekIndex + 1;
                const isCompleted = watchedVideos.length >= weekNum * 3;
                const isCurrent = weekNum === parseInt(weekNumber);
                const isUnlocked = weekIndex <= Math.floor(watchedVideos.length / 3);
                
                return (
                  <div key={weekIndex} className="border rounded-md overflow-hidden">
                    <button
                      onClick={() => navigateToWeek(weekNum)}
                      className={`w-full text-left p-3 font-medium flex justify-between items-center ${
                        isCurrent ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'
                      } ${!isUnlocked ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={!isUnlocked}
                    >
                      <span>Week {weekNum}</span>
                      {isCompleted ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                    
                    {isCurrent && (
                      <div className="bg-gray-50 p-2">
                        {week.map((video, videoIndex) => {
                          const globalIndex = (weekIndex * 3) + videoIndex;
                          const isWatched = watchedVideos.includes(globalIndex);
                          
                          return (
                            <button
                              key={videoIndex}
                              onClick={() => setActiveVideo(videoIndex)}
                              className={`w-full text-left p-2 text-sm flex items-center ${
                                activeVideo === videoIndex ? 'text-indigo-600 font-medium' : 'text-gray-700'
                              }`}
                            >
                              <span className="mr-2">
                                {isWatched ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                ) : (
                                  <div className="h-3 w-3 border border-gray-400 rounded-full ml-0.5"></div>
                                )}
                              </span>
                              {video.title}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Video Player and Content */}
        <div className="lg:w-3/4">
          <div className="bg-black rounded-lg overflow-hidden mb-6 aspect-video">
            {currentVideoData.type === 'youtube' ? (
              <iframe
                src={`${currentVideoData.videoUrl}?autoplay=1&rel=0`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
              ></iframe>
            ) : (
              <video
                controls
                autoPlay
                className="w-full h-full"
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
              >
                <source src={currentVideoData.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">{currentVideoData.title}</h3>
            <p className="text-gray-600 mb-4">
              Duration: {currentVideoData.duration} | Week {weekNumber} • Video {activeVideo + 1}
            </p>
            
            <div className="mb-6">
              <h4 className="font-medium mb-2">About this video:</h4>
              <p className="text-gray-700">{currentVideoData.description || 'No description available.'}</p>
            </div>
            
            <div className="flex justify-between items-center">
              {activeVideo > 0 && (
                <button
                  onClick={() => setActiveVideo(activeVideo - 1)}
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Previous Video
                </button>
              )}
              
              <button
                onClick={() => markVideoAsWatched(activeVideo)}
                className={`px-4 py-2 rounded-md ${
                  watchedVideos.includes((currentWeek * 3) + activeVideo)
                    ? 'bg-green-500 text-white'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {watchedVideos.includes((currentWeek * 3) + activeVideo)
                  ? '✓ Completed'
                  : 'Mark as Complete'}
              </button>
              
              {activeVideo < currentVideos.length - 1 ? (
                <button
                  onClick={() => setActiveVideo(activeVideo + 1)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Next Video
                </button>
              ) : (
                weeks.length > currentWeek + 1 && (
                  <button
                    onClick={() => navigateToWeek(currentWeek + 2)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Next Week
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursePlayer;