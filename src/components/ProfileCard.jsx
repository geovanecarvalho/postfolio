import {
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  LinkIcon,
  AcademicCapIcon,
  DevicePhoneMobileIcon,
  ChatBubbleLeftRightIcon,
  BriefcaseIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaEnvelope,
} from "react-icons/fa";




import Conferencias from "./Conferencias";

export default function ProfileCard({ perfil }) {
  if (!perfil) return null;

  return (
    <div className="bg-blue-50 rounded-2xl shadow-xl p-8 max-w-7xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* LADO ESQUERDO - Foto + Conferências */}
      <div className="flex flex-col items-center md:items-start gap-6">
        <img
          src={perfil.foto}
          alt="Foto de perfil"
          className="w-36 h-36  rounded-full object-cover border-4 border-blue-400 shadow-md bg-white"
        />
        <div className="hidden md:block">
          <Conferencias />
        </div>
      </div>

      {/* LADO DIREITO - Conteúdo Principal (2 colunas) */}
      <div className="md:col-span-2 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-blue-700 flex items-center gap-2">
          <UserCircleIcon className="w-7 h-7 text-blue-400" />
          {perfil.nomeCompleto}
        </h1>

        {/* Bio */}
        <div>
          <h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2 mb-1">
            <BriefcaseIcon className="w-5 h-5 text-blue-300" />
            Bio / Resumo Profissional
          </h2>
          <p className="indent-4 text-gray-600 text-justify">{perfil.bio}</p>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2 mb-1">
            <ComputerDesktopIcon className="w-5 h-5 text-blue-400" />
            Soft Skills
          </h2>
          <p className="text-gray-700">{perfil.softSkills}</p>
        </div>

        {/* Endereço */}
        {(perfil.endereco?.bairro || perfil.endereco?.cidade || perfil.endereco?.estado || perfil.endereco?.cep) && (
          <div>
            <h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2 mb-1">
              <MapPinIcon className="w-5 h-5 text-blue-300" />
              Endereço
            </h2>
            <p className="text-gray-500">
              {[perfil.endereco?.bairro, perfil.endereco?.cidade, perfil.endereco?.estado, perfil.endereco?.cep]
                .filter(Boolean)
                .join(", ")}
            </p>
          </div>
        )}

        {/* Formação Acadêmica */}
        <div>
          <h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2 mb-1">
            <AcademicCapIcon className="w-6 h-6 text-blue-400" />
            Formação Acadêmica
          </h2>
          <div className="bg-blue-100 rounded-lg p-4">
            <p className="font-semibold">{perfil.formacao?.curso}</p>
            <p>{perfil.formacao?.instituicao}</p>
            <p>
              {perfil.formacao?.nivel}{" "}
              {perfil.formacao?.anoConclusao && (
                <span className="text-gray-500">({perfil.formacao.anoConclusao})</span>
              )}
            </p>
          </div>
        </div>

        {/* Contatos e Redes Sociais */}
        <div className="pt-4 border-t flex flex-wrap gap-6">
          {perfil.email && (
            <span className="flex items-center gap-1 text-gray-600">
              <FaEnvelope className="w-5 h-5 text-blue-300" />
              {perfil.email}
            </span>
          )}
          {perfil.telefone && (
            <span className="flex items-center gap-1 text-gray-600">
              <PhoneIcon className="w-5 h-5 text-blue-300 " />
              {perfil.telefone}
            </span>
          )}
          {perfil.linkedin && (
            <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-600 hover:underline">
              <FaLinkedin className="w-5 h-5 " /> LinkedIn
            </a>
          )}
          {perfil.github && (
            <a href={perfil.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-800 hover:underline">
              <FaGithub className="w-5 h-5 " /> GitHub
            </a>
          )}
          {perfil.outrosPerfis && (
            <a href={perfil.outrosPerfis} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-pink-600 hover:underline">
              <LinkIcon className="w-5 h-5 " /> Outros Perfis
            </a>
          )}
          {perfil.telegram && (
            <a href={perfil.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-400 hover:underline">
              <FaTelegram className="w-5 h-5 " /> Telegram
            </a>
          )}
          {perfil.whatsapp && (
            <a href={perfil.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-green-600 hover:underline">
              <FaWhatsapp className="w-5 h-5 " /> WhatsApp
            </a>
          )}

          <div className="md:hidden mt-8">
          <Conferencias/>

          </div>
        </div>
      </div>
    </div>
  );
}
