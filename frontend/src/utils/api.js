import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/auth';
    }
    return Promise.reject(error.response?.data || { message: 'Network error' });
  }
);

// Available exports
export const verifyToken = async () => {
  try {
    await api.get('/auth/verify');
    return true;
  } catch (error) {
    return false;
  }
};

export const fetchCourses = async () => {
  const { data } = await api.get('/courses');
  return data;
};
export const getCourse = async (courseId) => {
  const { data } = await api.get(`/courses/${courseId}`);
  return data;
}

export const enrolledCourse = async (courseId) => {
  const { data } = await api.post('/courses/enroll', { courseId });
  return data;
};
export const enrollCourse = async (courseId) => {
  const { data } = await api.post('/courses/enroll', { courseId });
  return data;
};

export const updateProgress = async (courseId, progress) => {
  const { data } = await api.put('/courses/progress', { courseId, progress });
  return data;
};

export const markVideoAsWatched = async (courseId, videoId) => {
  const { data } = await api.post('/courses/watched', { courseId, videoId });
  return data;
};

export const updateUserInterests = async (interests) => {
  const { data } = await api.put('/user/interests', { interests });
  return data;
};

// Add this if you need it
export const updatedCourses = async (courseId, updates) => {
  const { data } = await api.put(`/courses/${courseId}`, updates);
  return data;
};

export default api;