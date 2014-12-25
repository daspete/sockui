define([
    'backbone',
    'TweenMax',
    'modules/OverlayModule'
], function(
    Backbone,
    TweenMax,
    OverlayModule
){
    function FileHandlingModule(settings){

        var defaults={
            view: null,
            api: {
                newfile: 'api/animation/new',
                openfile: 'api/animation/get',
                savefile: 'api/animation/save'
            }
        };

        var file_handling_module={

            settings: {},

            DOM: {},

            overlay: null,

            currentAnimationID: null,

            init: function(settings, defaults){
                _.bindAll.apply(_, [this].concat(_.functions(this)));

                $.extend(this.settings, defaults, settings);

                this.setup();
            },

            setup: function(){

            },

            createNew: function(){
                var that=this;

                new OverlayModule({
                    container: 'body',
                    content: 'NewFile',
                    height: 142,
                    width: 250,
                    onLoaded: function($overlay){
                        $overlay.find('.btn-close').on('click', function(e){
                            e.preventDefault();

                            $overlay.remove();
                        });

                        $overlay.find('form').submit(function(e){
                            e.preventDefault();

                            that.post({
                                url: that.settings.api.newfile,
                                data: $(this).serialize(),
                                success: function(r){
                                    that.currentAnimation=r;
                                    $overlay.remove();
                                    if(that.settings.view !== null){
                                        that.settings.view.makeWorkspace();
                                    }
                                },
                                error: function(r){
                                    console.log(r.responseJSON.error);
                                }
                            });
                        });
                    }
                });
            },

            openExisting: function(){

            },

            saveCurrent: function(){

            },

            saveCurrentAs: function(){

            },

            post: function(settings){
                $.ajax({
                    url: settings.url,
                    cache: false,
                    type: 'post',
                    data: settings.data,
                    success: settings.success,
                    error: settings.error
                });
            }

        };

        if(typeof settings === 'undefined'){
            settings=defaults;
        }

        file_handling_module.init(settings, defaults);

        return file_handling_module;
    }

    return FileHandlingModule;
});
