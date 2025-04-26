import { useEffect, useState, useRef } from "react";
import api from '../../services/api.js'
import './style.css'
import Lixo from '../../assets/lixo_button.png'

//reacthooks: useEffect,useState,useRef

function Home() {

  const [users, setUsers] = useState([])//atualiza em tempo real as variaveis

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  //FUNÇÃO QUE CHAMA A LISTA DE USUARIOS COM O GET DA API COM NODE
  async function getUsers() {

    const usersFromApi = await api.get('/usuarios')

    setUsers(usersFromApi.data) //RECEBER APENAS ID USER

  }
  //FUNÇÃO QUE CRIA USUARIOS
  async function createtUsers() {

    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value

    })
    getUsers()
  }

  async function deleteUsers(id) {

    await api.delete(`/usuarios/${id}`)

    getUsers()
  }

  useEffect(() => {

    getUsers()

  }, [])


  return (
    <div className='container'>
      <form action="">
        <h1>Cadastro de Usuarios</h1>
        <input placeholder='Nome' name='nome' type='text' ref={inputName} />
        <input placeholder='Idade' name='idade' type='number' ref={inputAge} />
        <input placeholder='E-mail' name='email' type='email' ref={inputEmail} />
        <button type='button' onClick={createtUsers}>Cadastrar</button>
      </form>

      {users.map(user => (

        <div key={user.id} className='card'>
          <div>
            <p>Nome:   <span>{user.name}</span></p>
            <p>Idade:  <span>{user.age}</span></p>
            <p>Email:  <span>{user.email}</span></p>
          </div>
          <button onClick= { () => {deleteUsers(user.id)}}>
            <img src={Lixo} />
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home
