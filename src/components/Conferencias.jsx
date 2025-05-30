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

export default function Conferencias() {
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2 mb-2">
        <BriefcaseIcon className="w-5 h-5 text-blue-300" />
        Conferências e Comunidades
      </h2>
      <ul className="space-y-4">
        <li className="bg-white p-3 rounded-lg shadow text-sm">
          <a
            href="https://2016.pythonbrasil.org.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            <img
              src="https://i.ibb.co/7d2yHV2s/pythonbrasil.png"
              alt="Logo Python Brasil"
              className="w-32 mb-2"
            />
            Python Brasil 2016
          </a>
          <p className="text-gray-600">Outubro 2016 – FLORIANÓPOLIS, SC</p>
        </li>
        <li className="bg-white p-3 rounded-lg shadow text-sm">
          <a
            href="https://www.instagram.com/pythoncerrado/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 font-semibold hover:underline"
          >
            <img
              src="https://i.ibb.co/XZF4YjVz/pythoncerrado.png"
              alt="Logo Python Cerrado"
              className="w-32 mb-2"
            />
            Python Cerrado
          </a>
          <p className="text-gray-600"> Novembro 2016 – BRASÍLIA, DF</p>
        </li>
        <li className="bg-white p-3 rounded-lg shadow text-sm">
          <a
            href="https://www.instagram.com/calangoh4cker/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 font-semibold hover:underline"
          >
            <img
              src="https://i.ibb.co/7xZ6mHtT/calango.png"
              alt="Logo Calango"
              className="w-28 mb-2"
            />
            Calango hacker clube
          </a>
          <p className="text-gray-600"> BRASÍLIA, DF</p>
        </li>
      </ul>
    </div>
  );
}
