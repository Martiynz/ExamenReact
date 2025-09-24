import { useEffect, useState, useCallback } from "react";
import { apiCreateEmployee, apiGetEmployees } from "../services/api";

export function useEmployees() {
  const [employees, setEmployees] = useState([]);
  const [loadingList, setLoadingList] = useState(false);
  const [creating, setCreating] = useState(false);

  const fetchEmployees = useCallback(async () => {
    setLoadingList(true);
    try {
      const data = await apiGetEmployees();
      setEmployees(data);
    } finally {
      setLoadingList(false);
    }
  }, []);

  const addEmployee = useCallback(async (payload) => {
    setCreating(true);
    try {
      await apiCreateEmployee(payload);
      await fetchEmployees();
    } finally {
      setCreating(false);
    }
  }, [fetchEmployees]);

  useEffect(() => { fetchEmployees(); }, [fetchEmployees]);

  return { employees, loadingList, creating, addEmployee };
}
