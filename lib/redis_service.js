( function() {
        var redis = require( "redis" );

        var Redis = function() {
            this.client = redis.createClient();

            this.client.on( 'ready', function() {
                console.log( 'redis connection is ready' );
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
