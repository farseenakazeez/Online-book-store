import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#faf9f7] flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;