const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config')
/**
 * Require
 */
const userRoutes = require('./api/routes/user');
const itemRoutes = require('./api/routes/items');
const tradeRoutes = require('./api/routes/trade');
const imageProfile = require('./api/routes/imageProfile');
const imageBook = require('./api/routes/imageBook');
//const messages = require('./api/routes/messages');

//const conversations = require('./api/routes/conversations');
/**
 * Connect to mongoDb
 */
mongoose.connect(process.env.DB_CONNECT,
    {}
);
mongoose.connection.on('connected', () => {
    console.log('connected to mongoDB');
});
mongoose.Promise = global.Promise;


app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
//app.use(cors());
app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/**
 * for method Post Put .....
 */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});


/**
 * ROUTERS
 */
app.use("/user", userRoutes);
app.use("/item", itemRoutes);
app.use("/trade",tradeRoutes);

app.use("/image",imageProfile)
app.use("/imageBook",imageBook);

//app.use("/messages",messages)
//app.use("/conversations",conversations);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


module.exports = app;