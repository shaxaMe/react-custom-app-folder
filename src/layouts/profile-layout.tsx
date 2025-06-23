import { Link, Outlet } from "react-router-dom";

function ProfileLayout() {
  return (
    <div>
      <div className="flex gap-4" style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <Outlet />
      <div>
        <footer>ddsdsds</footer>
      </div>
    </div>
  );
}

export default ProfileLayout;
