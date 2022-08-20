import { Outlet } from "react-router";

export default function Home() {
  return (
    <div>
      <label>Hello</label>
      <Outlet />
    </div>
  );
}
