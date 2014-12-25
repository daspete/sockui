define([
    'backbone'
], function(
    Backbone
){

    var ApplicationRouter=Backbone.Router.extend({

        routes: {
            '': 'index',
            'first': 'first',
            'second': 'second',
            'third': 'third'
        },

        application_view: null,

        initialize: function(options){
            this.application_view=options.view;
        },

        index: function(){
            log('index');
        },

        first: function(){
            log('first');
        },

        second: function(){
            log('second');
        },

        third: function(){
            log('third');
        }

    });

    return ApplicationRouter;

});