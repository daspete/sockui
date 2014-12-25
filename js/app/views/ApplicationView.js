define([
    'backbone',
    'router/ApplicationRouter',
    'views/abstract/AbstractView',
    'modules/TopNavigationModule',
    'modules/FileHandlingModule'
], function(
    Backbone,
    ApplicationRouter,
    AbstractView,
    TopNavigationModule,
    FileHandlingModule
){
    var ApplicationView=AbstractView.extend({

        router: null,

        topNavigation: null,
        fileHandling: null,

        initialize: function(){
            this.cid='application_view';

            AbstractView.prototype.initialize.call(this);

            this.render();
        },

        render: function(){
            this.router=new ApplicationRouter({ view: this });

            Backbone.history.start({ pushState: false });

            this.fileHandling=new FileHandlingModule({
                view: this
            });
            this.topNavigation=new TopNavigationModule({
                controller: this.fileHandling
            });

            log('render');
        },

        makeWorkspace: function(){

        }

    });

    return ApplicationView;
});
