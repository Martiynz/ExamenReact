
export default function EmployeeList({ data = [], loading }) {
    return (
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Listado de empleados</h2>
          {loading && <span className="text-sm text-gray-500">Cargando...</span>}
        </div>
  
        {data.length === 0 ? (
          <p className="text-sm text-gray-600">No hay empleados registrados.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="text-gray-600">
                  <th className="py-2 pr-4">#</th>
                  <th className="py-2 pr-4">Nombre</th>
                  <th className="py-2 pr-4">DNI</th>
                  <th className="py-2 pr-4">Dirección</th>
                  <th className="py-2 pr-4">Email</th>
                </tr>
              </thead>
              <tbody>
                {data.map((emp, idx) => (
                  <tr key={emp.id ?? idx} className="border-t">
                    <td className="py-2 pr-4">{idx + 1}</td>
                    <td className="py-2 pr-4">{emp.nombre}</td>
                    <td className="py-2 pr-4">{emp.dni}</td>
                    <td className="py-2 pr-4">{emp.direccion}</td>
                    <td className="py-2 pr-4">{emp.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
  