import { Outlet } from "react-router-dom";
import { Navbar } from "./components/layout/NavBar";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
