import { useEffect, useState, } from "react";
import UserCard from "../../components/UseCard.jsx";
import { createUser, getUsers, deleteUser } from "../../services/userService.js";
import Input from "../../components/Input.jsx";
import './Home.css'

//reacthooks: useEffect,useState,useRef

function Home() {


  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: ''
  });

  const [users, setUsers] = useState([])//atualiza em tempo real as variaveis
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);



  //FUNÇÃO QUE CHAMA A LISTA DE USUARIOS COM O GET DA API COM NODE
  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await getUsers();
      console.log("Resposta da API:", response);
      if (Array.isArray(response)) {
        setUsers(response)
      } else {
        console.error("Resposta inválida: Esperado um array de usuários");
        setUsers([]); // Garantir que users seja sempre um array
      }
    } catch (error) {
      console.error('Erro ao buscar usuarios:', error);
      alert('Erro ao buscar usuarios!');
    } finally {
      setLoading(false);
    }

  }
  //FUNÇÃO QUE CRIA USUARIOS
  async function handleCreateUser() {
    event.preventDefault();
    try {
      await createUser(formData);
      setFormData({ name: '', age: '', email: '' });
      fetchUsers();
    } catch (error) {
      console.error('Erro ao criar usuario', error);
      alert('Erro ao criar Usuario!')
    }
  }
  //FUNÇÃO QUE DELETA USUARIOS
  async function handleDeleteUsers(id) {
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      alert('Erro ao deletar usuário!');
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  useEffect(() => {

    fetchUsers();

  }, [])


  return (
    <div className='container'>
      <form onSubmit={handleCreateUser}>
        <h1>Cadastro de Usuarios</h1>
        <Input placeholder='Nome' name='name' type='text' value={formData.name} onChange={handleChange} />
        <Input placeholder='Idade' name='age' type='number' value={formData.age} onChange={handleChange} />
        <Input placeholder='E-mail' name='email' type='email' value={formData.email} onChange={handleChange} />
        <button type='submit' onSubmit={handleCreateUser}>Cadastrar</button>
      </form>

      {loading ? (
        <p>Carregando Usuários...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        (users && Array.isArray(users) && users.length > 0) ? (
          users.map(user => (
            <UserCard key={user.id} user={user} deleteUsers={handleDeleteUsers} />
          ))
        ) : (
          <p id="indisponivel">Não há usuários disponíveis.</p>
        )
      )}

    </div>
  );
}
export default Home;
