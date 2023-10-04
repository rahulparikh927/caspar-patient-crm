import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PatientProfile from "./pages/PatientProfile";
import PatientContextProvider from "./context/PatientContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "patient-profile",
    element: <PatientProfile />,
  },
]);

function App() {
  return (
    <>
      <header className="w-full text-center border-b-2 sticky border-b-slate-200 bg-slate-200 p-2">
        <h1 className="text-3xl">Patient Dashboard</h1>
      </header>
      <main className="max-w-[80%] m-auto my-12">
        <PatientContextProvider>
          <RouterProvider router={router} />
        </PatientContextProvider>
      </main>
    </>
  );
}

export default App;
