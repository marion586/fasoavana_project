import { Routes, Route } from "react-router-dom";
import Login from "./components/login";

const AuthPage = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route index element={<Login />} />
    </Routes>
  );
};

export default AuthPage;
