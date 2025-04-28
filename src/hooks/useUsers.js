import { useState, useEffect } from 'react';
import { getUsers } from '../services/userService';

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchUsers() {
      try {
        const response = await getUsers();
        setUsers(response.data); 
      } catch (error) {
        setError('Erro ao carregar usuários');
        console.error(error);
      }finally{
      setLoading(false);
    }
    }
    fetchUsers();
  }, []);

  return { users, loading, error };
}
