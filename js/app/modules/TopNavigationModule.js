define([
    'backbone',
    'TweenMax'
], function(
    Backbone,
    TweenMax
){
    function TopNavigation(settings){

        var defaults={
            controller: null,
            containerClass: '.top-navigation',
        };

        var top_navigation={

            settings: {},

            DOM: {},

            init: function(settings, defaults){
                _.bindAll.apply(_, [this].concat(_.functions(this)));
                
                $.extend(this.settings, defaults, settings);

                this.setup();
            },

            setup: function(){
                this.DOM.$container=$(this.settings.containerClass);

                this.initEvents();
            },

            initEvents: function(){
                var that=this;

                this.DOM.$container.find('a').each(function(){
                    $(this).on('click', function(e){
                        if(that.settings.controller !== 'null'){
                            switch($(this).data('action')){
                                case 'new':
                                    that.settings.controller.createNew();
                                break;
                                case 'open':
                                    that.settings.controller.openExisting();
                                break;
                                case 'save':
                                    that.settings.controller.saveCurrent();
                                break;
                                case 'saveas':
                                    that.settings.controller.saveCurrentAs();
                                break;
                            }    
                        }

                        e.preventDefault();
                    });
                });
            }

        };

        if(typeof settings === 'undefined'){
            settings=defaults;
        }

        top_navigation.init(settings, defaults);

        return top_navigation;
    }

    return TopNavigation;
});