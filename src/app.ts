import express, { Application } from 'express'
import morgan from 'morgan'

// Routes
import IndexRoutes from './routes/index.routes'
import PostRoutes from './routes/post.routes'
import MaterialRoutes from './routes/material.routes'
import TextoRoutes from './routes/texto.routes'
import RetornoRoutes from './routes/retorno.routes'
import bodyParser from 'body-parser'

export class App {
    app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(bodyParser.json());
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(function(req, res, next) {
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.header(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept"
            )
            next()
        })
    }

    private routes() {
        this.app.use(IndexRoutes);
        this.app.use('/posts', PostRoutes);
        this.app.use('/materials', MaterialRoutes);
        this.app.use('/textos', TextoRoutes);
        this.app.use('/retorno', RetornoRoutes);
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}