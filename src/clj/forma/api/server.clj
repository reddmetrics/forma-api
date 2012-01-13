(ns forma.api.server
  (:require [noir.server :as server]))

(server/load-views "src/clj/forma/api/views/")

(defn mk-opts [mode]
  {:mode (keyword (or mode :dev))
   :ns 'forma.api})

(def handler
  "Handler for the forma-api server."
  (server/gen-handler (mk-opts :dev)))

(defn -main
  "Main entry point."
  [& [mode :as args]]
  (let [port (Integer. (get (System/getenv) "PORT" "8080"))]
    (server/start port (mk-opts mode))))

