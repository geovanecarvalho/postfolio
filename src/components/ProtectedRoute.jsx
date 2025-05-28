import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";
import { Navigate } from "react-router-dom";

const SUPERUSER_EMAIL = "geovanehacker.io@gmail.com"; 

export default function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div>Carregando...</div>;
  if (!user || user.email !== SUPERUSER_EMAIL) {
    return <Navigate to="/" replace />;
  }
  return children;
}