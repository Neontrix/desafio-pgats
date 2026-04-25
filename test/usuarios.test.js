import {fazerLogin} from '../src/usuarios.js';
import assert from 'node:assert';

describe('Testes de Login', function() {
    it('Deve realizar login com sucesso', function() {
        const resultado = fazerLogin('joao.silva@teste.com', '123456');
        assert.equal(resultado, 'Login realizado com sucesso!');
    }); 

    it('Deve exibir mensagem de credenciais expiradas', function() {

        assert.throws(
            function(){ fazerLogin('maria.oliveira@teste.com', '654321') },
            {
                message: 'As credenciais estão expiradas!'
            }
        );
    });

    it('Deve exibir mensagem de usuário não encontrado', function() {
        assert.throws(
            function(){ fazerLogin('usuario.inexistente@teste.com', '123456') },
            {
                message: 'Usuário não encontrado!'
            }
        );
    });

    it('Deve exibir mensagem de senha incorreta', function() {
        assert.throws(
            function(){ fazerLogin('joao.silva@teste.com', 'senhaIncorreta') },
            {
                message: 'Senha incorreta para o usuário encontrado!'
            }
        );
    });
});