(defproject lettercomb "0.0.1"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.omcljs/ambly "0.6.0"]
                 [org.clojure/core.match "0.3.0-alpha4"]]
  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-figwheel "0.5.0-2"]]
  :cljsbuild {
    :builds {:min {
              :source-paths ["src"]
              :compiler {:main "lettercomb.core"
                         :output-to "resources/public/js/index.js"
                         :source-map "resources/public/js/index.map.js"
                         :output-dir "resources/public/js/out-min"
                         :optimizations :whitespace}}
             :dev {
              :source-paths ["src"]
              :figwheel true
              :compiler {:main "lettercomb.core"
                         :output-to "resources/public/js/index-dev.js"
                         :source-map "resources/public/js/index-dev.map.js"
                         :output-dir "resources/public/js/out"
                         :asset-path "js/out"}}}})
