define([
    'backbone',
    'TweenMax'
], function(
    Backbone,
    TweenMax
){
    function LayerModule(settings){

        var defaults={

        };

        var layer_module={

            settings: {},

            DOM: {},

            init: function(settings, defaults){
                _.bindAll.apply(_, [this].concat(_.functions(this)));

                $.extend(this.settings, defaults, settings);

                this.setup();
            },

            setup: function(){

            }

        };

        if(typeof settings === 'undefined'){
            settings=defaults;
        }

        layer_module.init(settings, defaults);

        return layer_module;
    }

    return LayerModule;
});
