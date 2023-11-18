import { Routes, Route } from "react-router-dom";
import Login from "./components/login";

const AuthPage = () => {
  fetch("http://localhost:3002/material/add", {
    method: "POST",
    body: {
      user: {} as any,
      name: "test",
      category: "category",
      description: "description",
      marque: "marque",
      color: "color",
      status: "test_status",
      image: "img",
    } as any,
  }).then((Response) => console.log(Response));
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route index element={<Login />} />
    </Routes>
  );
};

export default AuthPage;
