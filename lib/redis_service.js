( function() {
        var redis = require( "redis" );

        var Redis = function() {
            // if you'd like to select database 3, instead of 0 (default), call
            // client.select(3, function() { /* ... */ });
            var self = this;

            this.client = redis.createClient();
            this.isReady = false;

            this.client.on( 'ready', function() {
                console.log( 'ready' );
                this.isReady = true;
            } );


        }

        Redis.prototype.quit = function() {
            this.client.quit();
        }

        Redis.prototype.info = function() {
            return this.client.server_info;
        }

        module.exports = Redis;
    }

)( exports.module );
