import AdminMenu from "../components/AdminMenu";

export default function AdminPage() {
  return (  
      <div className="container mx-auto p-2">
            <AdminMenu />
            <h1 className="text-2xl font-bold mb-4 ">Pagina de Administração Geovane Carvalho</h1>
            <p>Bem-vindo à página de administração do seu portfólio!</p>
            <p>Aqui você pode gerenciar seu perfil e projetos.</p>
            <p>Use o menu acima para navegar entre as seções.</p>
        </div>
  );
}