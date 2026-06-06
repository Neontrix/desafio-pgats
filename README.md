# Desafio PGATS - Testes de Login

Este projeto foi desenvolvido como parte do trabalho de conclusão da disciplina de **Integração Contínua para Automação de Testes**. O objetivo é demonstrar o pipeline CI de um projeto de testes automatizados com:

- execução de testes unitários de login,
- geração de relatório de testes via Mochawesome,
- mesmo projeto/pipeline com três formas de disparo.

## 🎯 Objetivo do Trabalho

Configurar uma pipeline para um projeto com testes automatizados, preferencialmente criado em outra disciplina da pós.

As formas de disparo são:

- manual
- agendado
- a partir de push

O pipeline deve também configurar um relatório compatível com o framework de testes e fazer upload para a pipeline.

Por fim, criar um README explicando o funcionamento da pipeline e os conceitos aplicados.

## 📂 Estrutura do Projeto

```text
DESAFIO-PGATS/
├── .github/
│   └── workflows/
│       └── ci.yml       # Pipeline CI com três gatilhos
├── mochawesome-report/   # Relatórios gerados pelo Mocha
├── src/
│   └── usuarios.js      # Função de login e dados de usuários
├── test/
│   └── usuarios.test.js # Testes automatizados de login
├── package.json         # Configuração do projeto e scripts
├── package-lock.json
└── README.md
```

## 🚀 Tecnologias Utilizadas
- **Node.js** (v18+)
- **Mocha** para execução de testes
- **Mochawesome** para geração de relatório de teste
- **GitHub Actions** para pipeline CI

## ⚙️ Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seuusuario/desafio-pgats.git
cd desafio-pgats
npm install
```

## 🧪 Como executar localmente

```bash
npm test
```

O comando gera o relatório em `mochawesome-report/mochawesome.html`.

## 🧩 Pipeline CI

O pipeline CI está definido em `.github/workflows/ci.yml` e inclui:

- `push` na branch `main`
- `workflow_dispatch` para execução manual
- `schedule` diário para execução automatizada

### O que o pipeline faz

1. faz checkout do código
2. configura Node.js
3. instala dependências
4. executa `npm test`
5. anexa o relatório Mochawesome como artefato

## ⚠️ Teste temporário do Cron

Para testar o disparo agendado, o `ci.yml` foi temporariamente ajustado para rodar a cada minuto (`- cron: '*/1 * * * *'`). Isso fará com que a pipeline execute em até 1 minuto.

IMPORTANTE: este agendamento é temporário e deve ser revertido para não executar indefinidamente. Opções para congelar (parar) o cron:

- Editar `.github/workflows/ci.yml` e substituir a linha do `cron` por `- cron: '0 8 * * *'` (volta ao agendamento diário às 08:00 UTC), commitar e dar push.
- Desativar o workflow pela interface do GitHub Actions (Settings → Actions → Workflows → desativar).

## 📂 Relatório de Teste

Após a execução dos testes, o relatório fica em:

- `mochawesome-report/mochawesome.html`
- `mochawesome-report/mochawesome.json`

## ✅ Regras atendidas

- Trabalho individual
- Utilizar GitHub Actions
- Testes e pipeline executando com sucesso
- Relatório armazenado na pipeline
- Utilizar adequadamente os conceitos aprendidos
- Utilizar as ferramentas adequadamente
- Documentação adequada no README

