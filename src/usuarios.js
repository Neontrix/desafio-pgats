const usuarios = [
    {
        id: 1,
        nome: 'João Silva', 
        email: 'joao.silva@teste.com',
        senha: '123456',
        contaExpirada: false
    },
    {
        id: 2,
        nome: 'Maria Oliveira', 
        email: 'maria.oliveira@teste.com',
        senha: '654321',
        contaExpirada: true
    }
]

export function fazerLogin(email, senha) {
    for(let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == email) {
            if(usuarios[i].senha == senha){
                if (usuarios[i].contaExpirada) {
                    throw new Error ('As credenciais estão expiradas!');
                } else {
                    return 'Login realizado com sucesso!';
                }
            } else {
                throw new Error('Senha incorreta para o usuário encontrado!');
            }
        }
    }
    throw new Error('Usuário não encontrado!');

}