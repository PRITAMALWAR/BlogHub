import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.CLIENT_URL,
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;


















// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:8909",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Automatically attach JWT token
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default api;