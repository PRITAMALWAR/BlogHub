

import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const GoogleSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    try {
      const token = searchParams.get("token");
      const user = searchParams.get("user");

      if (!token || !user) {
        navigate("/login", { replace: true });
        return;
      }

      const decodedUser = decodeURIComponent(user);

      if (
        decodedUser === "undefined" ||
        decodedUser === "null"
      ) {
        navigate("/login", { replace: true });
        return;
      }

      const parsedUser = JSON.parse(decodedUser);

      localStorage.setItem("token", token);
      localStorage.setItem(
        "user",
        JSON.stringify(parsedUser)
      );

      navigate("/", { replace: true });
    } catch (error) {
      console.error("Google Login Error:", error);

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      navigate("/login", { replace: true });
    }
  }, [navigate, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h2 className="text-xl font-semibold">
        Logging in...
      </h2>
    </div>
  );
};

export default GoogleSuccess;



