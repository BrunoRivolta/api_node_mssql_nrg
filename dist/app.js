"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
// Routes
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const post_routes_1 = __importDefault(require("./routes/post.routes"));
const material_routes_1 = __importDefault(require("./routes/material.routes"));
const texto_routes_1 = __importDefault(require("./routes/texto.routes"));
const retorno_routes_1 = __importDefault(require("./routes/retorno.routes"));
const sd_estoq_routes_1 = __importDefault(require("./routes/sd-estoq.routes"));
const itens_routes_1 = __importDefault(require("./routes/itens.routes"));
const body_parser_1 = __importDefault(require("body-parser"));
class App {
    constructor(port) {
        this.port = port;
        this.app = (0, express_1.default)();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
        this.app.use(body_parser_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(function (req, res, next) {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }
    routes() {
        this.app.use(index_routes_1.default);
        this.app.use('/posts', post_routes_1.default);
        this.app.use('/materials', material_routes_1.default);
        this.app.use('/textos', texto_routes_1.default);
        this.app.use('/retorno', retorno_routes_1.default);
        this.app.use('/sd-estoq', sd_estoq_routes_1.default);
        this.app.use('/itens', itens_routes_1.default);
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'));
            console.log('Server on port', this.app.get('port'));
        });
    }
}
exports.App = App;
