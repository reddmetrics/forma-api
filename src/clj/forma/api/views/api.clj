;; This namespace provides a frontend API to FORMA data.
;; TODO: Move API logic into model
;;
(ns forma.api.views.api
  (:use [noir.core :only (defpage)]
        [noir.options :only (dev-mode?)]
        [clojure.data.json :only (json-str write-json read-json)]
        [hiccup.page-helpers :only (include-js javascript-tag)]
        [clojure.string :only [split]]
        )
  (:require clojure.data.json
            [clj-redis.client :as redis]
            [noir.response :as response]
            [forma.api.views.common :as common]
            [forma.api.views.mock :as mock]))

(defpage "/api" []
  "The API landing page that provides some links and information about the API."
  (common/layout 
   (include-js "cljs/bootstrap.js")
   (when (dev-mode?)
     (javascript-tag "goog.require('forma-api.repl');"))
   (javascript-tag "goog.require('forma-api.mainview')")
   [:div.written
    [:p "TODO: API landing page content."]]))

(def db
  "If REDISTOGO_URL isn't defined, redis will default to local mode."
  (redis/init {:url (System/getenv "REDISTOGO_URL")}))

(defn cache-get
  "Gets the value for a key from the cache or nil if the key doesn't exist."
  [key]
  (redis/get db key))

(defn cache-put
  "Puts a key/value into the cache."
  [key value]
  (redis/set db key value))


(defpage "/api/countries" []
  (let [key "/api/countries"
          content (cache-get key)]
    (if content
        content
        (let [data (mock/countries-from-elephantdb)
              content (json-str data)]
          (cache-put key content)
          content))))

(defpage "/api/:iso" {:keys [iso]}
  (json-str
   ((keyword iso) country-level-data)))

(defpage "/api/:iso/provinces" {:keys [iso]}
  (json-str
   ((keyword iso) mock/province-level-data)))

(defpage "/api/:iso/:prov-id" {:keys [iso prov-id]}
  (json-str
   ((keyword prov-id)
    (:provinces
     ((keyword iso) mock/province-level-data)))))

