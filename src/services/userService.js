import api from "./api";

export const getUsers = async () => {
    try {
        const response = await api.get('/usuarios');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        throw new Error("Erro ao buscar usuários");
    }
};
    
export const createUser = async (data) => {
    try {
        const response = await api.post('/usuarios', data);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        throw new Error("Erro ao criar usuário");
    }
};

export const deleteUser = async (id) => {
    try {
        await api.delete(`/usuarios/${id}`);
        return { message: "Usuário deletado com sucesso" };
    } catch (error) {
        console.error("Erro ao deletar usuário:", error);
        throw new Error("Erro ao deletar usuário");
    }
};