import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login, Register, Wallet} from "./pages";
import AuthContext from './contexts/AuthContext'

export default function App() {
  return (
    <AuthContext.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
