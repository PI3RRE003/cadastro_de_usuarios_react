import Lixo from '../assets/lixo_button.png'
function UserCard({user, deleteUsers}){
    return(
        <div key={user.id} className='card'>
                  <div>
                    <p>Nome:   <span>{user.name}</span></p>
                    <p>Idade:  <span>{user.age}</span></p>
                    <p>Email:  <span>{user.email}</span></p>
                  </div>
                  <button onClick= { () => {deleteUsers(user.id)}}>
                    <img src={Lixo} alt="Excluir"/>
                  </button>
                </div>
    );
}

export default UserCard;