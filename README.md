# Rocketseat
Cursos feitos na rocketseat
Stack utilizada:
Node com express no backend
    Inicia o projeto back com o comando: npm init -y
    Em seguinda instala o express: npm install express
    Em seguida começamos a codar o servidor no index.js
React no front
    Em seguida executa o comando: npx create-react-app nomedoApp 
    Para executar o app usa-se o comando: npm start
    Observe que o npx é semelhante ao npm. Entretanto, enquanto o npm instala os pacotes, o npx apenas executa.
Reative com Expo no Mobile

#####################################################
Curso de ES6
Começar o projeto com o comando: npm init -y
Instalar o babel com o comando: npm install @babel/cli
Instalar outro recurso do babel com o comando: npm install @babel/preset-env
 Criar o arquivo .gitignore para que o git ignore as dependencias do node
 Criar o aquivo .babelrc para configurar o babel
 Acionar o módulo core do babel: npm install @babel/core
 Configurar o pachage.json para adicionar um script que invoca o babel e converte o código criado para um bundle.
 Adicionar o plugin com o comando: npm install @babel/plugin-proposal-object-rest-spread
 Adicionar esse plugin ao .babelrc: "plugins": ["@babel/plugin-proposal-object-rest-spread"]

 Instalar o webpack webpack-cli
 Setar, no package.json a informação que as dependências do babel e do webpack são devDependencies
 Criar o arquivo de configuração para o webpack
#############################################################
Aula 2 do omnistack: falou sobre rotas e recursos
Explicou os métodos HTTP: GET (buscar info); POST (Criar info);PUT(alterar info);DELETE (deletar info)
Explicou sobre tipos de parầmetros: Query (nomeados e enviados na rota após o ?
Route: utilizadps para identificar recursos (vai na rota))
Request 
explicou a instalação e configuração do knex (orm)
Criar a migration: npx knex migrate:make create_incidents
Depois abrir o arquivo criado, editar e invocar o comando: npx knex migrate:latest


