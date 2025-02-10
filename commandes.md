# Realtime Elo Ranker

## Documentation

Accéder à la documentation Swagger :
```sh
pnpm run docs:swagger:start
```

## Lancer le serveur

```sh
cd apps/realtime-elo-ranker-server/
pnpm run start:dev
```

## Lancer le client

```sh
pnpm run apps:client:dev
```

## Générer un module

### Module Player
```sh
npx @nestjs/cli generate service player
npx @nestjs/cli generate module player
npx @nestjs/cli generate controller player
```

### Module Match
```sh
npx @nestjs/cli generate service match 
npx @nestjs/cli generate module match
npx @nestjs/cli generate controller match
```

### Module Ranking
```sh
npx @nestjs/cli generate service ranking 
npx @nestjs/cli generate module ranking
npx @nestjs/cli generate controller ranking
```

## Ajouter des joueurs

```sh
curl -X POST http://localhost:3000/api/player -H "Content-Type: application/json" -d '{"id": "joueur 1"}'
curl -X POST http://localhost:3000/api/player -H "Content-Type: application/json" -d '{"id": "joueur 2"}'
```

## Ajouter la base de données

```sh
pnpm add -w sql.js
pnpm add -w @nestjs/typeorm typeorm sql.js
```

## Ajouter Event Emitter

```sh
pnpm add eventemitter2 -w
pnpm add @nestjs/event-emitter -w
```

## Simuler un match

```sh
curl -X POST http://localhost:3000/api/match -H "Content-Type: application/json" -d '{"player1Id": "joueur 1", "player2Id": "joueur 2", "result": "WINNER_PLAYER2"}'
```

### Exemple d'un match dans le terminal

```sh
kevvv@MacBook-Air-de-Kevin realtime-elo-ranker % curl -X POST http://localhost:3000/api/match -H "Content-Type: application/json" -d '{"player1Id": "joueur 1", "player2Id": "joueur 2", "result": "WINNER_PLAYER2"}'
{"message":"Match enregistré. joueur 2 gagne +100 points, joueur 1 perd -100 points."}%

kevvv@MacBook-Air-de-Kevin realtime-elo-ranker % curl -X POST http://localhost:3000/api/match -H "Content-Type: application/json" -d '{"player1Id": "joueur 1", "player2Id": "joueur 2", "result": "WINNER_PLAYER2"}'
{"message":"Match enregistré. joueur 2 gagne +100 points, joueur 1 perd -100 points."}%
```
