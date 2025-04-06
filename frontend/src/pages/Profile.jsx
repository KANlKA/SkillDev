import React, { useState } from 'react';

function Profile() {
  // Initial user data
  const initialUser = {
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Frontend developer passionate about React and UX design',
    level: 15,
    xp: 15000,
    nextLevelXp: 20000,
    badges: [
      { id: 1, name: 'Quick Learner', icon: '🚀' },
      { id: 2, name: 'Problem Solver', icon: '🧩' },
      { id: 3, name: 'Team Player', icon: '👥' }
    ],
    completedCourses: [
      { id: 1, title: 'React Fundamentals', completion: '2024-01-15' },
      { id: 2, title: 'Node.js Basics', completion: '2024-02-01' }
    ],
    currentStreak: 7
  };

  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(initialUser);
  const [editForm, setEditForm] = useState({
    name: initialUser.name,
    email: initialUser.email,
    bio: initialUser.bio
  });

  // Handle input changes in edit form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Save edited profile
  const saveProfile = () => {
    setUser(prev => ({
      ...prev,
      name: editForm.name,
      email: editForm.email,
      bio: editForm.bio
    }));
    setIsEditing(false);
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditForm({
      name: user.name,
      email: user.email,
      bio: user.bio
    });
    setIsEditing(false);
  };

  // Calculate progress percentage
  const progressPercentage = Math.min((user.xp / user.nextLevelXp) * 100, 100);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Profile Header Section */}
      <section className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center text-2xl font-bold text-indigo-800">
              {user.name[0]}
            </div>
            <div>
              {isEditing ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    value={editForm.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                  />
                  <input
                    type="email"
                    name="email"
                    value={editForm.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold">{user.name}</h2>
                  <p className="text-gray-600">{user.email}</p>
                  {user.bio && <p className="text-gray-600 mt-1">{user.bio}</p>}
                </>
              )}
            </div>
          </div>
          
          <div className="flex gap-3">
            {isEditing ? (
              <>
                <button
                  onClick={cancelEdit}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={saveProfile}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
        
        {/* Bio Field (only editable in edit mode) */}
        {isEditing && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <textarea
              name="bio"
              value={editForm.bio}
              onChange={handleInputChange}
              rows="3"
              className="w-full p-2 border rounded-md"
            />
          </div>
        )}

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Level Progress */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-1">Level Progress</h3>
            <div className="flex justify-between text-sm mb-1">
              <span>Level {user.level}</span>
              <span>{user.xp.toLocaleString()}/{user.nextLevelXp.toLocaleString()} XP</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-indigo-600 h-2.5 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Current Streak */}
          <div className="flex items-center justify-center p-4 bg-indigo-50 rounded-lg">
            <div className="text-center">
              <span className="text-2xl">🔥</span>
              <p className="font-semibold">{user.currentStreak} Day Streak</p>
            </div>
          </div>
        </div>
      </section>

      {/* Badges Section */}
      <section className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Badges Earned</h3>
          <span className="text-sm text-gray-500">{user.badges.length} badges</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {user.badges.map(badge => (
            <div key={badge.id} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
              <span className="text-3xl mb-2 block">{badge.icon}</span>
              <p className="font-medium">{badge.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Completed Courses Section */}
      <section className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Completed Courses</h3>
          <span className="text-sm text-gray-500">{user.completedCourses.length} courses</span>
        </div>
        <div className="space-y-3">
          {user.completedCourses.map(course => (
            <div key={course.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
              <div>
                <h4 className="font-medium">{course.title}</h4>
                <p className="text-sm text-gray-600">Completed on {new Date(course.completion).toLocaleDateString()}</p>
              </div>
              <span className="text-green-600 text-xl">✓</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Profile;