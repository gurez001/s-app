import axios from 'axios';
import { getToken } from './AsyncStorage/asyncStorage';
// Create an Axios instance
const axiosInstance = axios.create();

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getToken('token');
    try {
      // Retrieve the token asynchronously
    
      if (token) {
        // Add the token to the Authorization header
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      // Return the modified config
      return config;
    } catch (error) {
      console.log("Error retrieving token:", error);
      // Optionally handle error (e.g., log it, set default headers, etc.)
      return Promise.reject(error); // Reject the request if there's an error
    }
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
