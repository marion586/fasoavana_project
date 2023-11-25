import { ConfigProvider } from "antd";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FF0000",
        },
        components: {
          Tabs: {
            colorPrimary: "#FF0000",
            colorPrimaryActive: "#fff",
            colorPrimaryText: "#FFF",
            colorPrimaryHover: "#FF0000",
            borderRadius: 12,
            borderRadiusLG: 12,
          },
        },
      }}
    >
      <Outlet />
    </ConfigProvider>
  );
}

export default App;
