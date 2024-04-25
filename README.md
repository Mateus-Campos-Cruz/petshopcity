**Instruções para Executar o Sistema:**

1. **Pré-requisitos:**
   - Node.js instalado na sua máquina.
   - Um editor de código como Visual Studio Code, Sublime Text, ou outro de sua preferência.

2. **Passos:**
   - Clone o repositório do projeto para o seu ambiente local.
   - Abra o terminal na pasta do projeto.

3. **Instalação das Dependências:**
   - Execute o comando `npm install` no terminal para instalar todas as dependências necessárias.

4. **Execução em Ambiente de Desenvolvimento:**
   - Para iniciar o servidor de desenvolvimento, utilize o comando `npm start`. Isso abrirá o projeto no seu navegador padrão.

5. **Build do Projeto:**
   - Para gerar uma versão otimizada para produção, utilize o comando `npm run build`. Isso criará a pasta `build` com os arquivos necessários para deploy.

6. **Deploy:**
   - Se desejar implantar o projeto em um servidor ou em plataformas como GitHub Pages, utilize o comando `npm run deploy`. Certifique-se de configurar corretamente a homepage no arquivo `package.json`.
Link para acessar o site: https://mateus-campos-cruz.github.io/petshopcity/

7. **Acesso ao Sistema:**
   - Após seguir os passos acima, você poderá acessar o sistema pelo navegador utilizando o endereço gerado durante o processo de execução em ambiente de desenvolvimento ou o endereço de deploy, caso tenha feito o deploy em um servidor.

---

**Lista de Premissas Assumidas:**

1. O sistema é desenvolvido utilizando a linguagem de programação JavaScript e a biblioteca React.
2. Os dados são manipulados localmente no front-end e não há integração com um banco de dados ou servidor back-end.
3. O sistema é destinado ao cálculo de preços para serviços específicos, como banho de cães, baseando-se em dados inseridos nos campos reservados.
4. O sistema não possui funcionalidades de autenticação ou gerenciamento de usuários.
5. Os requisitos de sistema incluem um navegador web moderno e uma conexão com a internet para carregar recursos externos.

---

**Decisões de Projeto:**

1. **Tecnologia:**
   - Utilização do React como biblioteca principal para o desenvolvimento front-end devido à sua eficiência, modularidade e popularidade na comunidade de desenvolvimento web.

2. **Componentização:**
   - Estruturação do sistema em componentes reutilizáveis para facilitar a manutenção e escalabilidade do código.

3. **Estilização:**
   - Utilização de arquivos de estilo CSS separados para manter a separação de preocupações entre estrutura, apresentação e responsividade.

4. **Gestão de Estado:**
   - Utilização de hooks do React, como useState e useEffect, para gerenciar o estado da aplicação e controlar o ciclo de vida dos componentes.

5. **Validação de Dados:**
   - Implementação de validações front-end para garantir que os dados inseridos pelo usuário estejam corretos antes do processamento.

---

**Considerações Importantes:**

1. **Testes:**
   - Recomenda-se a implementação de testes unitários e de integração para garantir a qualidade e robustez do sistema em diferentes cenários.

2. **Acessibilidade:**
   - É importante garantir que o sistema seja acessível para usuários com necessidades especiais, seguindo as diretrizes de acessibilidade web.

3. **Documentação:**
   - Gerar a documentação do código atualizada e clara para facilitar o entendimento e colaboração entre membros da equipe ou futuros desenvolvedores.
4. **Monitoramento:**
   - Considerar a implementação de ferramentas de monitoramento e análise de desempenho para identificar e resolver possíveis problemas de performance ou erros no sistema.
