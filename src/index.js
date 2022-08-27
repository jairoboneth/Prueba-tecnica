import express from "express";
import { dirname, join } from "path";
import {fileURLToPath} from 'url'
import morgan from "morgan";
import indexRoutes from './Routes/index.routes.js';
import './database.js';



const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();


app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.set('port', process.env.PORT || 3000);


app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(indexRoutes); 
app.use(express.static(join(__dirname, 'public')))

app.listen(app.get('port'), () => {
    console.log('server on', app.get('port'));
});