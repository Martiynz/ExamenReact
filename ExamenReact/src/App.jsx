import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import { useEmployees } from "./hooks/useEmployees";

export default function App() {
  const { employees, loadingList, creating, addEmployee } = useEmployees();

  return (
    <div className="container-app">
      <header className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold">Gestión de Empleados</h1>
        <p className="text-gray-600">Formulario con validaciones y alertas.</p>
      </header>

      <main className="max-w-5xl mx-auto px-4 pb-12 space-y-6">
        <EmployeeForm onCreate={addEmployee} creating={creating} />
        <EmployeeList data={employees} loading={loadingList} />
      </main>
    </div>
  );
}




