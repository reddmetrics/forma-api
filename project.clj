(defproject forma-api "0.1.0-SNAPSHOT"
  :description "TODO: Make this pretty!"
  :source-path "src/clj"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [noir "1.2.1"]
                 [org.clojure/data.json "0.1.1"]
                 [org.clojars.tavisrudd/redis-clojure "1.3.1-SNAPSHOT"]]
  :dev-dependencies [[lein-ring "0.4.6"]]
  :ring {:handler forma-api.server/handler}
  :main forma-api.server)
