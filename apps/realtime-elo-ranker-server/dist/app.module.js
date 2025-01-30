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
const ranking_service_1 = require("./ranking/ranking.service");
const ranking_controller_1 = require("./ranking/ranking.controller");
const player_service_1 = require("./player/player.service");
const player_controller_1 = require("./player/player.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        providers: [ranking_service_1.RankingService, player_service_1.PlayerService],
        controllers: [ranking_controller_1.RankingController, player_controller_1.PlayerController],
        exports: [ranking_service_1.RankingService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map