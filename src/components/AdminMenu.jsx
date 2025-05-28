import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase"; // ajuste o caminho conforme seu projeto

export default function AdminMenu() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      alert("Erro ao sair: " + error.message);
    }
  };

  return (
    <nav>
      <ul className="flex gap-4 mb-6 bg-gray-100 p-4 rounded shadow items-center">
        <li>
          <Link to="/admin" className="text-blue-600 hover:underline">Admin</Link>
        </li>
        <li>
          <Link to="/admin/perfil" className="text-blue-600 hover:underline">Perfil</Link>
        </li>
        <li>
          <Link to="/admin/projetos" className="text-blue-600 hover:underline">Projetos</Link>
        </li>
        <li>
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Sair
          </button>
        </li>
      </ul>
    </nav>
  );
}