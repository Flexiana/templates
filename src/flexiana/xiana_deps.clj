(ns flexiana.xiana-deps
  (:require
   [clojure.string :as str]))

(defn data-fn
  "Example data-fn handler.

  Result is merged onto existing options data."
  [data]
  (let [artifact (:artifact/id data)]
    (assoc data :db-name (last (str/split artifact #"\.")))))

(defn template-fn
  "Example template-fn handler.

  Result is used as the EDN for the template."
  [edn data]
  (if (:electric data)
    (update edn :transform into
            [["dummy" "src/{{top/file}}"
              {"electric.tmpl" "electric.clj"} :only]])
    edn))

