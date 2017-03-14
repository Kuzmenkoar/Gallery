var	webpack	=	require('webpack');
var	webpackDevMiddleware	=	require('webpack-dev-middleware');
var	webpackHotMiddleware	=	require('webpack-hot-middleware');
var	config	=	require('./webpack.config');
var	app	=	new	(require('express'))();
var	port	=	3000;
var	compiler	=	webpack(config);

var MongoClient = require('mongodb').MongoClient;
var CollectionDriver = require('./collectionDriver').CollectionDriver;

MongoClient.connect("mongodb://localhost:27017/gallery", function(err, database) {
    if(err) throw err;

    db = database;
    collectionDriver = new CollectionDriver(db);

    // Start the application after the database connection is ready

    app.listen(port,	function(error)	{
        if	(error)	{
            console.error(error)
        }	else	{
            console.info("==>			Listening	on	port	%s.	Open	up	http://localhost:%s/	in	your	browser.",	port,	port)
        }
    });
});

app.use(webpackDevMiddleware(compiler,	{	noInfo:	true,	publicPath:	config.output.publicPath	}));
app.use(webpackHotMiddleware(compiler));

app.get('/:collection', function(req, res) {
    var query = req.query;
    collectionDriver.findSample(req.params.collection, +query.start, +query.range, function(error, objs) {
        if (error) { res.status(400).send(error); }
        else {
            res.send(objs);
        }
    });
});

app.get('/:collection/length', function(req, res) {
    collectionDriver.findLength(req.params.collection, function(error, leng) {
        if (error) { res.status(400).send(error); }
        else {
            res.send(leng);
        }
    });
});


// app.get('/:collection/:entity', function(req, res) { //I
//     var params = req.params;
//     var entity = params.entity;
//     var collection = params.collection;
//     if (entity) {
//         collectionDriver.get(collection, entity, function(error, objs) { //J
//             if (error) { res.status(400).send(error); }
//             else { res.status(200).send(objs); }
//         });
//     } else {
//         res.send(400, {error: 'bad url', url: req.url});
//     }
// });

app.get("/",	function(req,	res)	{
    res.sendFile(__dirname	+	'/index.html')
});


