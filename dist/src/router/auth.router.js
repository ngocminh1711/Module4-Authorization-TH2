"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("../middleware/passport"));
const express_1 = __importDefault(require("express"));
const authRouter = express_1.default.Router();
authRouter.get('/login/google', passport_1.default.authenticate('google', { scope: ['profile', 'email'] }));
authRouter.get("/google/callback", passport_1.default.authenticate('google'), (req, res) => {
    res.send("You are authenticated");
});
exports.default = authRouter;
//# sourceMappingURL=auth.router.js.map