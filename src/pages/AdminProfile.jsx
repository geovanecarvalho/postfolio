import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";
import AdminMenu from "../components/AdminMenu";

export default function AdminProfile() {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [foto, setFoto] = useState("");
  const [bio, setBio] = useState("");
  const [softSkills, setSoftSkills] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [outrosPerfis, setOutrosPerfis] = useState("");
  const [telegram, setTelegram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [curso, setCurso] = useState("");
  const [instituicao, setInstituicao] = useState("");
  const [anoConclusao, setAnoConclusao] = useState("");
  const [nivel, setNivel] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "perfil"), {
        nomeCompleto,
        foto,
        bio,
        softSkills,
        email,
        telefone,
        endereco: {
          bairro,
          cidade,
          estado,
          cep,
        },
        linkedin,
        github,
        outrosPerfis,
        telegram,
        whatsapp,
        formacao: {
          curso,
          instituicao,
          anoConclusao,
          nivel,
        },
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
      <h1 className="text-2xl font-bold mb-4">Editar Perfil Pessoal</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-2xl bg-white rounded shadow p-6 mx-auto">
        {/* Informações Básicas */}
        <div>
          <label className="font-semibold">Nome completo</label>
          <input
            type="text"
            value={nomeCompleto}
            onChange={e => setNomeCompleto(e.target.value)}
            required
            className="border px-2 py-1 rounded w-full"
          />
        </div>
        <div>
          <label className="font-semibold">Foto de perfil (URL)</label>
          <input
            type="url"
            value={foto}
            onChange={e => setFoto(e.target.value)}
            required
            className="border px-2 py-1 rounded w-full"
          />
        </div>
        <div>
          <label className="font-semibold">Bio / resumo profissional</label>
          <textarea
            value={bio}
            onChange={e => setBio(e.target.value)}
            required
            className="border px-2 py-1 rounded w-full"
          />
        </div>
        <div>
          <label className="font-semibold">Soft skills</label>
          <input
            type="text"
            value={softSkills}
            onChange={e => setSoftSkills(e.target.value)}
            placeholder="Ex: Comunicação, Trabalho em equipe, Liderança"
            className="border px-2 py-1 rounded w-full"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="font-semibold">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="border px-2 py-1 rounded w-full"
            />
          </div>
          <div className="flex-1">
            <label className="font-semibold">Telefone</label>
            <input
              type="text"
              value={telefone}
              onChange={e => setTelefone(e.target.value)}
              required
              className="border px-2 py-1 rounded w-full"
            />
          </div>
        </div>
        {/* Endereço */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="font-semibold">Bairro</label>
            <input
              type="text"
              value={bairro}
              onChange={e => setBairro(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
          <div>
            <label className="font-semibold">Cidade</label>
            <input
              type="text"
              value={cidade}
              onChange={e => setCidade(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
          <div>
            <label className="font-semibold">Estado</label>
            <input
              type="text"
              value={estado}
              onChange={e => setEstado(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
          <div>
            <label className="font-semibold">CEP</label>
            <input
              type="text"
              value={cep}
              onChange={e => setCep(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
        </div>
        {/* Redes Sociais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="font-semibold">LinkedIn</label>
            <input
              type="url"
              value={linkedin}
              onChange={e => setLinkedin(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
          <div>
            <label className="font-semibold">GitHub</label>
            <input
              type="url"
              value={github}
              onChange={e => setGithub(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
          <div>
            <label className="font-semibold">Outros perfis (Twitter, Instagram, Portfólio...)</label>
            <input
              type="url"
              value={outrosPerfis}
              onChange={e => setOutrosPerfis(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Link Telegram</label>
            <input
              type="url"
              value={telegram}
              onChange={e => setTelegram(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
          <div>
            <label className="font-semibold">Link WhatsApp</label>
            <input
              type="url"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
        </div>
        {/* Formação Acadêmica */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="font-semibold">Curso</label>
            <input
              type="text"
              value={curso}
              onChange={e => setCurso(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
          <div>
            <label className="font-semibold">Instituição</label>
            <input
              type="text"
              value={instituicao}
              onChange={e => setInstituicao(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
          <div>
            <label className="font-semibold">Ano de conclusão</label>
            <input
              type="number"
              value={anoConclusao}
              onChange={e => setAnoConclusao(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
          <div>
            <label className="font-semibold">Nível</label>
            <input
              type="text"
              value={nivel}
              onChange={e => setNivel(e.target.value)}
              className="border px-2 py-1 rounded w-full"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition"
        >
          Salvar
        </button>
        {mensagem && <p className="mt-2">{mensagem}</p>}
      </form>
    </div>
  );
}