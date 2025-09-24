import { Toaster, toast } from "react-hot-toast";
import { useForm } from "../hooks/useForm";

const initial = { nombre: "", dni: "", direccion: "", email: "" };

export default function EmployeeForm({ onCreate, creating }) {
  const { values, errors, onChange, isValid, validate, reset } = useForm(initial);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid()) {
      toast.error("Revisa los campos del formulario.");
      return;
    }
    try {
      await onCreate(values);
      toast.success("Empleado creado correctamente.");
      reset();
    } catch (err) {
      toast.error(err?.message ?? "Error al crear empleado.");
    }
  };

  const onBlur = () => validate();

  return (
    <div className="card">
      <h2 className="text-lg font-semibold mb-4">Nuevo empleado</h2>
      <Toaster position="top-right" />

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="label" htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            className="input"
            type="text"
            placeholder="Ej. María Gómez"
            value={values.nombre}
            onChange={onChange}
            onBlur={onBlur}
          />
          {errors.nombre && <p className="error">{errors.nombre}</p>}
        </div>

        <div>
          <label className="label" htmlFor="dni">DNI</label>
          <input
            id="dni"
            name="dni"
            className="input"
            type="text"
            placeholder="Solo dígitos"
            value={values.dni}
            onChange={onChange}
            onBlur={onBlur}
          />
          {errors.dni && <p className="error">{errors.dni}</p>}
        </div>

        <div>
          <label className="label" htmlFor="direccion">Dirección</label>
          <input
            id="direccion"
            name="direccion"
            className="input"
            type="text"
            placeholder="Col. Centro, Calle 3..."
            value={values.direccion}
            onChange={onChange}
            onBlur={onBlur}
          />
          {errors.direccion && <p className="error">{errors.direccion}</p>}
        </div>

        <div>
          <label className="label" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            className="input"
            type="email"
            placeholder="correo@ejemplo.com"
            value={values.email}
            onChange={onChange}
            onBlur={onBlur}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="md:col-span-2 flex gap-3">
          <button type="submit" className="btn btn-primary" disabled={creating}>
            {creating ? "Guardando..." : "Guardar"}
          </button>
          <button
            type="button"
            className="btn bg-gray-200 hover:bg-gray-300"
            onClick={() => { reset(); toast("Formulario reiniciado"); }}
            disabled={creating}
          >
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
}
