var express = require( "express" );
var app = express();
var Redis = require( "./redis_service" );
var redis = new Redis();

app.use( express.static( __dirname + '/public' ) );

app.get( '/', function( req, res ) {

    res.sendFile( __dirname + '/public/app/index.html' );
} );

// custom 404 page
app.use( function( req, res ) {
    res.type( 'text/plain' );
    res.status( 404 );
    res.send( '404 - Not Found' );
} );

// custom 500 page
app.use( function( err, req, res, next ) {
    console.error( err.stack );
    res.type( 'text/plain' );
    res.status( 500 );
    res.send( '500 - Server Error' );
} );

app.set( 'port', process.env.PORT || 3000 );

app.listen( app.get( 'port' ), function() {
    console.log( 'Express started on http://localhost:' +
        app.get( 'port' ) + '; press Ctrl-C to terminate.' );
} );
