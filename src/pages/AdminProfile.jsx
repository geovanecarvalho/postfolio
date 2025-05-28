import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";
import AdminMenu from "../components/AdminMenu";

export default function AdminProfile() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [foto, setFoto] = useState("");
  const [bio, setBio] = useState("");
  const [descricao, setDescricao] = useState("");
  const [mensagem, setMensagem] = useState("");

  // Função para calcular idade a partir da data de nascimento
  function calcularIdade(data) {
    if (!data) return "";
    const hoje = new Date();
    const nascimento = new Date(data);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  }

  const idade = calcularIdade(dataNascimento);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "perfil"), {
        nome,
        sobrenome,
        dataNascimento,
        idade,
        foto,
        bio,
        descricao,
        atualizadoEm: serverTimestamp(),
      });
      setMensagem("Perfil atualizado com sucesso!");
    } catch (error) {
      setMensagem("Erro ao atualizar perfil.");
    }
  };

  return (
    <div className="p-4">
      <AdminMenu />
      <h1 className="text-2xl mb-4">Editar Perfil</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
          className="border px-2 py-1 rounded"
        />
        <input
          type="text"
          placeholder="Sobrenome"
          value={sobrenome}
          onChange={e => setSobrenome(e.target.value)}
          required
          className="border px-2 py-1 rounded"
        />
        <input
          type="date"
          placeholder="Data de Nascimento"
          value={dataNascimento}
          onChange={e => setDataNascimento(e.target.value)}
          required
          className="border px-2 py-1 rounded"
        />
        <div className="text-gray-700">Idade: {idade ? idade + " anos" : ""}</div>
        <input
          type="url"
          placeholder="URL da foto de perfil"
          value={foto}
          onChange={e => setFoto(e.target.value)}
          required
          className="border px-2 py-1 rounded"
        />
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={e => setBio(e.target.value)}
          required
          className="border px-2 py-1 rounded"
        />
        <textarea
          placeholder="Descrição sobre seu trabalho"
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
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