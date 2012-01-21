;; This namespace provides a frontend API to FORMA data.
;; TODO: Move API logic into model
;;
(ns forma.api.views.api
  (:use [noir.core :only (defpage)]
        [noir.options :only (dev-mode?)]
        [clojure.core.memoize :only (memo-lru)]
        [clojure.data.json :only (json-str write-json read-json)]
        [hiccup.page-helpers :only (include-js javascript-tag)]
        [clojure.string :only (split)])
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

(defn get-countries
  "Get fake data for all countries"
  []
  (mock/countries-from-elephantdb))

(defn get-iso
  "Get fake data for an iso code"
  [iso]
  (get mock/country-level-data (keyword iso)))

(defn get-prov-id
  "Get fake data for a province id"
  [iso prov-id]
  ((keyword prov-id)
   (:provinces
    ((keyword iso) mock/province-level-timeseries))))

(defn get-provinces
  "Get fake data for all provinces for a given iso code"
  [iso]
  ((keyword iso) mock/province-level-data))

(defn retrieve-iso* [iso-or-countries]
  (json-str (if (= iso-or-countries "countries")
              (get-countries)
              (get-iso iso-or-countries))))

(defn retrieve-prov* [iso prov-id-or-provinces]
  (json-str (if (= prov-id-or-provinces "provinces")
              (get-provinces iso)
              (get-prov-id iso prov-id-or-provinces))))

(def retrieve-iso
  (memo-lru retrieve-iso* 1000 {}))

(def retrieve-prov
  (memo-lru retrieve-prov* 1000 {}))

(defpage "/api/:iso-or-countries"
  {:keys [iso-or-countries]}
  (retrieve-iso iso-or-countries))

(defpage "/api/:iso/:prov-id-or-provinces"
  {:keys [iso prov-id-or-provinces]}
  (retrieve-prov iso prov-id-or-provinces))
