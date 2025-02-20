"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const event_emitter_1 = require("@nestjs/event-emitter");
const ranking_module_1 = require("./ranking/ranking.module");
const player_module_1 = require("./player/player.module");
const match_module_1 = require("./match/match.module");
const player_entity_1 = require("./player/player.entity");
const event_service_1 = require("./events/event.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqljs',
                autoSave: true,
                location: 'database.sqlite',
                entities: [player_entity_1.Player],
                synchronize: true,
            }),
            event_emitter_1.EventEmitterModule.forRoot(),
            ranking_module_1.RankingModule,
            player_module_1.PlayerModule,
            match_module_1.MatchModule,
        ],
        providers: [event_service_1.EventService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map