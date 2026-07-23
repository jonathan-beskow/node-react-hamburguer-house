import { useEffect, type ReactNode } from "react";
import { replace, useNavigate } from "react-router";

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const cookie = document.cookie;
    if (cookie) {
      const cookies = cookie.split("; ");
      const userCookie = cookies.find((c) => c.startsWith("user="));

      if (userCookie) {
        navigate("/", {replace: true});
      }
    }
  }, []);
  return <div>{children}</div>;
};
export default PublicRoute;
