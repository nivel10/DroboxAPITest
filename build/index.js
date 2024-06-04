"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const appPort = 3000;
app.get('/ping', (_req, res) => {
    console === null || console === void 0 ? void 0 : console.log('Someone pined here...!!!');
    res.send('pong');
});
app.listen(appPort, () => {
    console === null || console === void 0 ? void 0 : console.log(`Server running on port: ${appPort}`);
});
