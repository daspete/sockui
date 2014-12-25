if (typeof console === 'undefined' || typeof console.log === 'undefined') {
    console = {
        log: function(o){},
        dir: function(o){}
    };
}

log = function(o){ console.log(o); };
dir = function(o){ console.dir(o); };

require.config({

    urlArgs: 'cache='+(new Date()).getTime(),

    baseUrl: '../js/app',

    paths: {
        jquery: '../../vendor/jquery/dist/jquery',
        jqueryUI: '../../vendor/jquery-ui/jquery-ui',
        TweenMax: '../../vendor/gsap/src/uncompressed/TweenMax',
        TweenLite: '../../vendor/gsap/src/uncompressed/TweenLite',
        TimelineMax: '../../vendor/gsap/src/uncompressed/TimelineMax',
        underscore: '../../vendor/underscore/underscore',
        backbone: '../../vendor/backbone/backbone',
        text: '../../vendor/requirejs-text/text'
    },

    shim: {
        jquery: {
            exports: '$'
        },
        jqueryUI: {
            deps: ['jquery']
        },

        TweenMax: {
            exports: 'TweenMax'
        },
        TweenLite: {
            exports: 'TweenLite'
        },
        TimelineMax: {
            exports: 'TimelineMax'
        },

        underscore: {
            exports: '_'
        },

        backbone: {
            exports: 'Backbone',
            deps: [
                'underscore',
                'jquery'
            ]
        }
    },

    deps: [
        'bootApplication'
    ]

});
