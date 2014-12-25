define([
    'backbone'
], function(
    Backbone
){
    var AbstractView=Backbone.View.extend({

        views: {},

        DOM: {},

        initialize: function(){
            _.bindAll.apply(_, [this].concat(_.functions(this)));

            this.views[this.cid]=this;
        }

    });

    return AbstractView;
});