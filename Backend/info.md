1º instalar express 
#npm install express 
2. #npm install -D typescript
inicializar typescripts 
#npx tsc --init

 3. instalacao das tipagem do express no typescript
npm i --save-dev @types/express


Nota para rodar ficheiro file.ts com esta extensao deve-se alterar o ficheiro 
package.json 

ref:. https://www.codingbeautydev.com/blog/ts-node-unknown-file-extension-ts

"scripts": {
    "start": "ts-node ./src/server.ts",
    "dev": "ts-node --esm  ./src/server.ts"
  },


  === databas pstgray ===
  user: admin
  password: admin

  BEEKEEPER STUDIO
  user : postgres
  password: admin


  -=====INSOMNIA====
   geral@hesasoft.com
   12345&%




  softawares usado DATABASE 

  1. POSTGRAY  https://www.postgresql.org/
  2. PRISMA https://www.prisma.io/  
  3. BEEKEEPER STUDIO | VISUALIZADOR DE DATABASE  https://www.beekeeperstudio.io/

  prisma instalacao 
  https://www.prisma.io/docs/getting-started/quickstart

  1º #npm install prisma --save-dev
  2º #npm install @prisma/client  
  3º #npm prisma init 

  PRISMA CRIANDO MIGRATION 
  #npx prisma migrate dev 


  TODOS SOFTWARE USADOS PARA ESTE PROJECTO

  https://insomnia.rest/download
  https://www.prisma.io/docs/
  https://www.beekeeperstudio.io/



  lista de erros resolvidos 
  Cannot destructure property 'name' of 'req.body' as it is undefined.
  https://stackoverflow.com/questions/62455716/typeerror-cannot-destructure-property-userid-of-req-body-as-it-is-undefined

  aplicar json primeiro antes de chamar router 
  app.use(express.json())
  app.use(router)


Encriptacao da senha p

#npm install bcryptjs

JWT | JSON WEB TOKEN 
#npm install jsonwebtoken

instalacao dos types 
#npm install @types/jsonwebtoken



