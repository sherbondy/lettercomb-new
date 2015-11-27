(defproject lettercomb "0.0.1"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.match "0.3.0-alpha4"]]
  :plugins [[lein-cljsbuild "1.1.1"]]
  :cljsbuild {
    :builds [{
              :source-paths ["src"]
              :compiler {
                         :output-to "index.js"
                         :optimizations :whitespace
                         :source-map "index.map.js"}}]})
