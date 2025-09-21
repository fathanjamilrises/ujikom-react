import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Wrapper = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth", duration: 300 });
  }, [pathname]);

  return children;
};

export default Wrapper;
