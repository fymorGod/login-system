import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./components/Login/SignIn";
import { SignUp } from "./components/Register/SignUp";
import { AuthContextProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectRoute/ProtectedRoute";

function App() {
  return ( 
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
