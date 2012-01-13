;; This namespace provides a frontend API to FORMA data.
;; TODO: Move API logic into model
;;
(ns forma-api.views.api
  (:use [noir.core :only (defpage)]
        [noir.options :only (dev-mode?)]
        [clojure.data.json :only (json-str write-json read-json)]
        [hiccup.page-helpers :only (include-js javascript-tag)])
  (:require clojure.data.json)
  (:require [redis.core :as redis])
  (:require [noir.response :as response])
  (:require [forma-api.views.common :as common]))

(defpage "/api" []
  "The API landing page that provides some links and information about the API."
  (common/layout 
   (include-js "cljs/bootstrap.js")
   (when (dev-mode?)
     (javascript-tag "goog.require('forma-api.repl');"))
   (javascript-tag "goog.require('forma-api.mainview')")
   [:div.written
    [:p "TODO: API landing page content."]]))

(defn cache-get
  "Gets the value for a key from the cache or nil if the key doesn't exits."
  [key]
  (redis/with-server {:host "127.0.0.1" :port 6379 :db 0}
    (redis/get key)))

(defn cache-put
  "Puts a key/value into the cache."
  [key value]
  (redis/with-server {:host "127.0.0.1" :port 6379 :db 0}
    (redis/set key value)))

(defn countries-from-elephantdb
  "Stub for a function that pulls country deforestation aggregates from
  ElephantDB."
  []
  {:countries {:brazil 1 :indonesia 1 :malaysia 1}
   :period {:year 2012 :month 1}})

(defpage "/api/countries" []
  "Returns a JSON representation of deforestation aggregates for all countries
   in the most recent period."
    (let [key "/api/countries"
          content (cache-get key)]
      (if content
        content
        (let [data (countries-from-elephantdb)
              content (json-str data)]
          (cache-put key content)
          content))))








