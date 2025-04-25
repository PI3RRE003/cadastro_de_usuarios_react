import './style.css'
import Lixo from '../../assets/lixo_button.png'

function Home() {

  const users = [
    {
      id: '1234',
      name: 'Vitor',
      age: 22,
      email: 'vito@email.com'
    },
    {
      id: '567',
      name: 'pedro',
      age: 23,
      email: 'pedro@email.com'
    }
  ]

  return (
    <div className='container'>
      <form action="">
        <h1>Cadastro de Usuarios</h1>
        <input placeholder='Nome' name='nome' type='text' />
        <input placeholder='Senha' name='senha' type='number' />
        <input placeholder='E-mail' name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (

        <div key={user.id} className='card'>
          <div>
            <p>Nome:   <span>{user.name}</span></p>
            <p>Idade:  <span>{user.age}</span></p>
            <p>Email:  <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Lixo} />
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home
