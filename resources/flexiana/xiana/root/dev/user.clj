(ns user
  (:gen-class)
  (:require
    [{{main/ns}}.core :refer [->system app-cfg]]
    [clojure.tools.logging :refer [*tx-agent-levels*]]
    [clojure.tools.namespace.repl :refer [refresh-all]]
    [piotr-yuxuan.closeable-map :refer [closeable-map]]
    [shadow.cljs.devtools.api :as shadow.api]
    [shadow.cljs.devtools.server :as shadow.server]
    [state :refer [dev-sys]]))

(alter-var-root #'*tx-agent-levels* conj :debug :trace)

(def dev-app-config
  app-cfg)

(defn- stop-dev-system
  []
  (when-let [webserver (:webserver @dev-sys)]
    (shadow.server/stop!)
    (.stop (:server webserver))
    (refresh-all)
    (reset! dev-sys (closeable-map {}))))

(defn start-dev-system
  []
  (stop-dev-system)
  (shadow.server/start!)
  (shadow.api/watch :app)
  (reset! dev-sys (->system dev-app-config)))

(defn -main
  [& args]
  (when args
    (println (:name args)))
  (start-dev-system))

(comment
  (start-dev-system))
