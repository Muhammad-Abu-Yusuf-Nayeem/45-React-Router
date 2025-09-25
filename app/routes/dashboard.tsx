import { Outlet } from "react-router";
const dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default dashboard;
