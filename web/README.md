# 📘 Testes Automatizados – Webdojo (Cypress)

Este documento descreve a estrutura, configuração e forma de execução dos testes automatizados desenvolvidos com **Cypress** para a aplicação **Webdojo**.  
A aplicação Webdojo e o projeto de testes compartilham o mesmo repositório.

---

## 📂 Estrutura do Projeto Cypress

Abaixo está uma visão geral da estrutura do diretório `cypress` conforme a organização atual:

```
cypress/
 ├── e2e/
 │    └── ... (arquivos de testes .cy.js)
 ├── fixtures/
 │    ├── cep.json
 │    ├── consultancy.json
 │    └── document.pdf
 ├── support/
 │    ├── commands.js
 │    ├── e2e.js
 │    ├── utils.js
 │    └── actions/
 │         └── consultancy.actions.js
```

### 📁 **/e2e**
Contém os arquivos de testes end-to-end (*.cy.js), como testes de login, consultoria, validações etc.

### 📁 **/fixtures**
Armazena massas de dados e arquivos usados nos testes:

- `cep.json` – dados de endereço  
- `consultancy.json` – dados utilizados para o fluxo de consultoria  
- `document.pdf` – arquivo PDF simulado para upload  

### 📁 **/support**
Contém configurações e extensões globais utilizadas pelo Cypress:

- `commands.js` – comandos customizados  
- `e2e.js` – arquivo carregado antes de cada teste  
- `utils.js` – funções auxiliares  
- `actions/consultancy.actions.js` – ações encapsuladas usadas nos testes de consultoria  

---

## ▶️ Executando a Aplicação Webdojo

Como a aplicação está no mesmo repositório, é necessário inicializá-la antes dos testes:

```bash
npm run dev
```

Este comando executa:

```
"dev": "serve -s dist -p 3000"
```

A aplicação será disponibilizada normalmente em:

```
http://localhost:3000
```

---

## ▶️ Executando os Testes Cypress

Os testes são executados através dos scripts definidos no `package.json`.  
**Antes de rodar os testes, certifique-se que a aplicação Webdojo esteja rodando.**

---

### 🧪 Executar todos os testes

```bash
npm test
```

Equivalente a:

```
npx cypress run --config viewportWidth=1440,viewportHeight=900
```

---

### 🔐 Executar apenas o teste de Login (Desktop)

```bash
npm run test:login
```

Que executa:

```
npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=1440,viewportHeight=900
```

---

### 📱 Executar apenas o teste de Login (Mobile)

```bash
npm run test:login:mobile
```

Equivalente a:

```
npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=414,viewportHeight=896
```

---

## 🧱 Boas Práticas Utilizadas

- Adoção de scripts organizados por resolução/funcionalidade  
- Viewports diferentes para validar responsividade  
- Separação clara entre **actions**, **utils**, **commands** e **fixtures**  
- Massa de dados externa e reutilizável em JSON  
- Arquitetura que facilita manutenção e escalabilidade dos testes  

---

## 🛠️ Dependências Relevantes

- **Cypress** – framework principal de testes E2E  
- **serve** – utilizado para rodar a aplicação em `dist`  

---

## 📄 Considerações Finais

Este projeto foi estruturado para facilitar manutenção, expansão e organização dos testes automatizados da aplicação **Webdojo**.  
Caso queira incluir:  
- exemplos de código,  
- fluxos de testes,  
- badges de status,  
- ou gerar esta documentação em PDF,  

é só pedir!
