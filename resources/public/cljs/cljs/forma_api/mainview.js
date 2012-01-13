goog.provide('forma_api.mainview');
goog.require('cljs.core');
goog.require('goog.events');
forma_api.mainview.page_load = (function page_load(){
return "Do some initial stuff.";
});
goog.events.listen.call(null,window,"load",forma_api.mainview.page_load);
