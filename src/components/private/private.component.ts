import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export interface IPrivateProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: IPrivateProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  });

  return children;
};
