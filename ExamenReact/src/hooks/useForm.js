import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Si tu DNI es siempre 13 dígitos, cambia a: const dniRegex = /^\d{13}$/;
const dniRegex = /^\d{8,20}$/;

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validate = (vals = values) => {
    const e = {};
    if (!vals.nombre?.trim()) e.nombre = "El nombre es obligatorio.";
    else if (vals.nombre.trim().length < 3) e.nombre = "Mínimo 3 caracteres.";

    if (!vals.dni?.trim()) e.dni = "El DNI es obligatorio.";
    else if (!dniRegex.test(vals.dni)) e.dni = "Formato de DNI inválido.";

    if (!vals.direccion?.trim()) e.direccion = "La dirección es obligatoria.";
    else if (vals.direccion.trim().length < 5) e.direccion = "Mínimo 5 caracteres.";

    if (!vals.email?.trim()) e.email = "El email es obligatorio.";
    else if (!emailRegex.test(vals.email)) e.email = "Formato de email inválido.";

    setErrors(e);
    return e;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const isValid = () => Object.keys(validate()).length === 0;

  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  return { values, errors, onChange, validate, isValid, reset };
}
