
Um padrão para commits no git:
https://www.conventionalcommits.org/en/v1.0.0/#summary

Extensão para evitar commits fora do padrão (conventional commits):
https://www.npmjs.com/package/git-commit-msg-linter
Para instalar: npm i -D git-commit-msg-linter

Adicionar o typescipt e bblioteca do node p/ TS (ajuda intellisense):
npm i -D typescript @types/node

 configure tsconfig.json

 instalando eslint --Manter alguns padrões/regras na codificação do JS/TS
 npm install --save-dev eslint@7 eslint-plugin-promise@4 eslint-plugin-import@2 eslint-plugin-node@11 @typescript-eslint/eslint-plugin@4 eslint-config-standard-with-typescript 

cria e configura .eslint.json e .eslintignore

instalando o Husky - adicionar 'hooks' que permite rodar comandos antes do commit
npm i -D husky

Instalando o lint-staged - para que os commit com o husk / eslint não fiquem lentos, então roda scripts apenas nos arquivos que estão na stage-area

npm i -D lint-staged

Configura o arquivo .lintstagedrc.json e huskrc.json

Instala o jest para TDD
npm i -D jest @types/jest ts-jest

inicia o jest