import MaynLayout from "./components/layouts/MaynLayout";
import ProtectedRoute from "./components/layouts/ProtectedRoute";

function App() {
  return (
    <>
      <ProtectedRoute>
        <MaynLayout />
      </ProtectedRoute>
    </>
  );
}

export default App;
