import React from "react";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <>
      <div>Admin Layout</div>
      <Outlet />
    </>
  );
}

export default React.memo(AdminLayout);
