define([
    'backbone',
    'TweenMax'
], function(
    Backbone,
    TweenMax
){
    function LayerSettingsModule(settings){

        var defaults={

        };

        var layersettings_module={

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

        layersettings_module.init(settings, defaults);

        return layersettings_module;
    }

    return LayerSettingsModule;
});
