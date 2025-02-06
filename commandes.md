Acceder à la doc :

pnpm run docs:swagger:start

Lancer le serveur :

cd apps/realtime-elo-ranker-server/
pnpm run start:dev

lancer le client :

pnpm run apps:client:dev


Générer un module :

npx @nestjs/cli generate service player
npx @nestjs/cli generate module player
npx @nestjs/cli generate controller player

npx @nestjs/cli generate service match 
npx @nestjs/cli generate module match
npx @nestjs/cli generate controller match

npx @nestjs/cli generate service ranking 
npx @nestjs/cli generate module ranking
npx @nestjs/cli generate controller ranking


ajouter un player :

curl -X POST http://localhost:3000/api/player -H "Content-Type: application/json" -d '{"id": "John Doe"}'


Ajouter la BD :

pnpm add sqlite3 -w  
pnpm install --save @nestjs/typeorm typeorm sqlite3 -w

pnpm add -w sql.js
pnpm add -w @nestjs/typeorm typeorm sql.js

