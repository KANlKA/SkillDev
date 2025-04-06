export const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };
  
  export const getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
  };
  
  export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };
  // src/utils/api.js
  const API_BASE = 'http://localhost:5000/api';
  

  