import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../services/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AdminMenu from "../components/AdminMenu";

export default function AdminPage() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");
  const [github, setGithub] = useState("");
  const [producao, setProducao] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "projetos"), {
        titulo,
        descricao,
        imagem, // URL do GIF
        github,
        producao,
        criadoEm: serverTimestamp(),
        atualizadoEm: serverTimestamp(),
      });
      setMensagem("Projeto cadastrado com sucesso!");
      setTitulo("");
      setDescricao("");
      setImagem("");
      setGithub("");
      setProducao("");
    } catch (error) {
      setMensagem("Erro ao cadastrar projeto.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      alert("Erro ao sair: " + error.message);
    }
  };

  return (

    <div className="p-4">
        <AdminMenu />
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Cadastrar Projeto</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={e => setTitulo(e.target.value)}
          required
          className="border px-2 py-1 rounded"
        />
        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
          required
          className="border px-2 py-1 rounded"
        />
        <input
          type="url"
          placeholder="URL da imagem .gif"
          value={imagem}
          onChange={e => setImagem(e.target.value)}
          required
          className="border px-2 py-1 rounded"
        />
        <input
          type="url"
          placeholder="Link do GitHub"
          value={github}
          onChange={e => setGithub(e.target.value)}
          required
          className="border px-2 py-1 rounded"
        />
        <input
          type="url"
          placeholder="Link do projeto em produção"
          value={producao}
          onChange={e => setProducao(e.target.value)}
          required
          className="border px-2 py-1 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Salvar
        </button>
      </form>
      {mensagem && <p className="mt-2">{mensagem}</p>}
    </div>
  );
}