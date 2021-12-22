import { Outlet } from "remix";
import Header from "~/components/home/header";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Header />
      <main><Outlet /></main>
    </div>
  );
}
