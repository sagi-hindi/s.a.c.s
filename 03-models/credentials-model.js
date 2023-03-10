"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var CredentialsModel = /** @class */ (function () {
    function CredentialsModel(credentials) {
        this.username = credentials.username;
        this.password = credentials.password;
    }
    CredentialsModel.prototype.validateLogin = function () {
        var _a;
        var result = CredentialsModel.loginSchema.validate(this);
        return (_a = result.error) === null || _a === void 0 ? void 0 : _a.message;
    };
    ;
    CredentialsModel.loginSchema = joi_1.default.object({
        username: joi_1.default.string().required().min(2).max(30),
        password: joi_1.default.string().required().min(2).max(30),
    });
    return CredentialsModel;
}());
exports.default = CredentialsModel;
