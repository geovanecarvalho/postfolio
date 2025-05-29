import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import ProfileCard from "../components/ProfileCard";

export default function Home() {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    async function fetchPerfil() {
      const snap = await getDocs(collection(db, "perfil"));
      if (!snap.empty) setPerfil(snap.docs[0].data());
    }
    fetchPerfil();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-6">
      <div className="max-w-4xl mx-auto">
        {perfil && <ProfileCard perfil={perfil} />}
        {/* ...aqui você pode renderizar os projetos também... */}
      </div>
    </div>
  );
}