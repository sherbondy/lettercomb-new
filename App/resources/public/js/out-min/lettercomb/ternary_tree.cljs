(ns lettercomb.ternary-tree)

(defprotocol TSTree
  ;; returns true or false if tree contains word
  (search [this word])
  ;; returns a new tree with the word added
  (insert [this word])
  (size [this]))

;; a ternary search tree node has a:
;; letter (its value)
;; terminal? (boolean, indicates whether this node marks the end of a valid search word)
;; left / center / right (tst-node, can be nil)
;; size = number of subnodes...
(defrecord TSTNode [letter terminal? left center right size]
  TSTree
  (insert [this word]
    (let [letter   (first word)
          r-word   (rest word)]
      (let [direction
            (cond
              (< letter (:letter this)) :left
              (> letter (:letter this)) :right
              :else :center)]
        (if (empty? r-word)
          (assoc this :terminal? true :size 1)
          (let [letter   (if (= direction :center) (first r-word) letter)
                old-leaf (get this direction)
                new-node (assoc this
                           direction
                           (insert
                             (or old-leaf
                                 (TSTNode. letter false nil nil nil 1))
                             r-word))]
            (assoc
              new-node
              :size (+ (get-in new-node [:left :size] 0)
                       (get-in new-node [:center :size] 0)
                       (get-in new-node [:right :size] 0)
                       1)))))))

  (search [this word]
    (let [letter (first word)
          r-word (rest word)]
      (if (empty? r-word)
        (:terminal? this)
        (if-let
          [node
           (cond
             (< letter (:letter this)) (:left this)
             (= letter (:letter this)) (:center this)
             :else (:right this))]
          (search node r-word)
          false))))

  (size [this]
    (:size this)))

;; next add a method to insert a dictionary by first sorting it
;; then recursively adding the median, left median, right median, etc...

#_(defn serialize-tst [tst]
  "awesome typed array stuff")

;; takes a word as input, returns a root tst node with that word
;; (and is-terminal? set to true)
(defn build-root-word-tst [word]
  (TSTNode. word true nil nil nil 1))

(defn add-slice-tst [sorted-array tst]
  (let [len       (.-length sorted-array)
        med-i     (bit-shift-right len 1)
        med-word  (aget sorted-array med-i)]
    (if med-word
      (let [left-array  (.slice sorted-array 0 med-i)
            right-array (.slice sorted-array med-i len)]
        ;; had issues expressing with threading macro,
        ;; maybe cljs bug with anonymous functions? retry off plane...
        (->
          tst
          (#(if (exists? %)
              (insert % med-word)
              (build-root-word-tst med-word)))

          (#(if (empty? left-array)
              % (add-slice-tst left-array %)))

          (#(if (empty? right-array)
              % (add-slice-tst right-array %)))))
        tst)))

(defn build-tst [dict-array]
  "takes a js"
  (let [cloned-array (.. dict-array (slice 0 (.-length dict-array)))
        sorted-array (.sort cloned-array)]
    (add-slice-tst sorted-array nil)))