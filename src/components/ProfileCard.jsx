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

export default function ProfileCard({ perfil }) {
  if (!perfil) return null;

  return (
    <div className="bg-blue-50 rounded-2xl shadow-xl p-8 max-full mx-auto mb-10 flex flex-col md:flex-row gap-12 items-start">
      {/* Foto à esquerda, topo */}
      <img
        src={perfil.foto}
        alt="Foto de perfil"
        className="w-36 h-36 rounded-full object-cover border-4 border-blue-400 shadow-md bg-white"
      />

      <div className="flex-1 flex flex-col h-full">
        <h1 className="text-3xl font-bold text-blue-700 flex items-center gap-2 mb-4">
          <UserCircleIcon className="w-7 h-7 text-blue-400" />
          {perfil.nomeCompleto}
        </h1>

        {/* Bio */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2 mb-1">
            <BriefcaseIcon className="w-5 h-5 text-blue-300" />
            Bio / Resumo Profissional
          </h2>
          <p className="text-gray-600">{perfil.bio}</p>
        </div>

        {/* Soft Skills */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2 mb-1">
            <ComputerDesktopIcon className="w-5 h-5 text-blue-400" />
            Soft Skills
          </h2>
          <p className="text-gray-700">{perfil.softSkills}</p>
        </div>

        {/* Endereço */}
        {(perfil.endereco?.bairro || perfil.endereco?.cidade || perfil.endereco?.estado || perfil.endereco?.cep) && (
          <div className="mb-4">
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
        <div className="mb-4">
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
        <div className="mt-8 pt-4 border-t flex flex-wrap gap-6 w-full">
          {perfil.email && (
            <span className="flex items-center gap-1 text-gray-600">
              <EnvelopeIcon className="w-5 h-5 text-blue-300" />
              {perfil.email}
            </span>
          )}
          {perfil.telefone && (
            <span className="flex items-center gap-1 text-gray-600">
              <PhoneIcon className="w-5 h-5 text-blue-300" />
              {perfil.telefone}
            </span>
          )}
          {perfil.linkedin && (
            <a href={perfil.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-600 hover:underline">
              <LinkIcon className="w-5 h-5" /> LinkedIn
            </a>
          )}
          {perfil.github && (
            <a href={perfil.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-800 hover:underline">
              <LinkIcon className="w-5 h-5" /> GitHub
            </a>
          )}
          {perfil.outrosPerfis && (
            <a href={perfil.outrosPerfis} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-pink-600 hover:underline">
              <LinkIcon className="w-5 h-5" /> Outros Perfis
            </a>
          )}
          {perfil.telegram && (
            <a href={perfil.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-400 hover:underline">
              <ChatBubbleLeftRightIcon className="w-5 h-5" /> Telegram
            </a>
          )}
          {perfil.whatsapp && (
            <a href={perfil.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-green-600 hover:underline">
              <DevicePhoneMobileIcon className="w-5 h-5" /> WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}