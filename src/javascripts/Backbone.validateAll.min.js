/*! Backbone.js plugin that provides an option to only validate Model properties that are currently being set or saved - v0.1.0 - 2012-08-29
* https://github.com/gfranko/Backbone.validateAll
* Copyright (c) 2012 Greg Franko; Licensed MIT */
(function(a,b,c){a.Backbone&&a.Backbone.Model&&a.Backbone.Model.prototype._validate&&(a.Backbone.Model.prototype._validate=function(a,b){if(b.silent||!this.validate)return!0;b.validateAll!==!1&&(a=_.extend({},this.attributes,a));var c=this.validate(a,b);return c?(b&&b.error?b.error(this,c,b):this.trigger("error",this,c,b),!1):!0})})(window,document);