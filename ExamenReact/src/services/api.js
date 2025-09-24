export const API_URL = "https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado";

export async function apiGetEmployees() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error obteniendo empleados");
  return res.json();
}

export async function apiCreateEmployee(payload) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Error creando empleado");
  return res.json();
}
