// import { useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const GoogleSuccess = () => {
//   const [params] = useSearchParams();
//   const navigate = useNavigate();

//   const { login } = useAuth();

//   useEffect(() => {
//     const token = params.get("token");
//     const user = params.get("user");

//     if (token && user) {
//       login(
//         JSON.parse(decodeURIComponent(user)),
//         token
//       );

//       navigate("/");
//     } else {
//       navigate("/login");
//     }
//   }, []);

//   return <div>Logging in...</div>;
// };

// export default GoogleSuccess;











import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const GoogleSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    const user = searchParams.get("user");

    if (token && user) {
      const parsedUser = JSON.parse(
        decodeURIComponent(user)
      );

      localStorage.setItem("token", token);
      localStorage.setItem(
        "user",
        JSON.stringify(parsedUser)
      );

      navigate("/", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h2 className="text-xl font-semibold">
        Logging in...
      </h2>
    </div>
  );
};

export default GoogleSuccess;


