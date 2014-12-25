define([
    'backbone',
    'TweenMax'
], function(
    Backbone,
    TweenMax
){
    function OverlayModule(settings){

        var defaults={
            container: 'body',
            width: 500,
            height: 280,
            overlayClass: 'overlay-wrapper',
            contentClass: 'overlay',
            closeButton: '.close-overlay',
            content: '---INSERT TEMPLATE FILE HERE---',
            onLoaded: function($overlay){}
        };

        var overlay_module={

            settings: {},

            DOM: {},

            init: function(settings, defaults){
                _.bindAll.apply(_, [this].concat(_.functions(this)));

                $.extend(this.settings, defaults, settings);

                this.setup();
            },

            setup: function(){
                var that=this;

                var $overlay=$('<div>');
                $overlay.addClass(this.settings.overlayClass);
                $(this.settings.container).append($overlay);

                require(['text!../../templates/overlays/'+this.settings.content+'.html'],
                    function(text){
                        var $overlayContent=$('<div>');
                        $overlayContent.addClass(that.settings.contentClass);
                        $overlayContent.html(text);
                        $overlayContent.width(that.settings.width);
                        $overlayContent.height(that.settings.height);
                        $overlayContent.css({
                            marginLeft: -that.settings.width/2,
                            marginTop: -that.settings.height/2
                        });
                        $overlay.append($overlayContent);
                        that.DOM.$overlay=$overlay;

                        that.initOverlay();
                    },
                    function(err){
                        console.log(err);
                    }
                );
            },

            initOverlay: function(){
                var that=this;

                this.DOM.$overlay.find(this.settings.closeButton).on('click', function(e){
                    that.DOM.$overlay.remove();
                });

                this.DOM.$overlay.on('click', function(e){
                    if(e.target === this){
                        that.DOM.$overlay.remove();
                    }
                });

                this.settings.onLoaded(this.DOM.$overlay);
            }

        };

        if(typeof settings === 'undefined'){
            settings=defaults;
        }

        overlay_module.init(settings, defaults);

        return overlay_module;
    }

    return OverlayModule;
});
