(ns forma-api.views.welcome
  (:use [noir.core :only (defpage)]
        [noir.options :only (dev-mode?)]
        [hiccup.page-helpers :only (include-js javascript-tag)])
  (:require [forma-api.views.common :as common]))

(defpage "/" []
  (common/layout 
   (include-js "cljs/bootstrap.js")
   (when (dev-mode?)
     (javascript-tag "goog.require('forma-api.repl');"))
   (javascript-tag "goog.require('forma-api.mainview')")
   [:div#map_canvas]
   [:h1 "Hello world!"]))
