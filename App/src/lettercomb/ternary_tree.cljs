(ns lettercomb.ternary-tree)

(defprotocol TSTree
  ;; returns true or false if tree contains word
  (search [this word])
  ;; returns a new tree with the word added
  (insert [this word])
  (size [this]))

;; @TODO: BUG: Individual letters return true for search

(defn pick-direction [letter node-letter]
  (cond
    (< letter node-letter) :left
    (> letter node-letter) :right
    :else :center))

(defn get-node-size [node]
  (inc
    (apply + (map #(get-in node [% :size] 0)
                  [:left :center :right]))))

(declare TSTNode)

(defn letter-node [letter]
  (TSTNode. letter false nil nil nil 1))

;; a ternary search tree node has a:
;; letter (its value)
;; terminal? (boolean, indicates whether this node marks the end of a valid search word)
;; left / center / right (tst-node, can be nil)
;; size = number of subnodes...
(defrecord TSTNode [letter terminal? left center right size]
  TSTree
  ;; inserting blank word should not change state
  ;;
  (insert [this word]
    (let [letter (first word)
          r-word (rest word)]
        (let [dir      (pick-direction letter (:letter this))
              old-leaf (get this dir)]
          (if-let [n-letter (if (= dir :center) (first r-word) letter)]
            (->
              this

              (#(assoc %
                 dir
                 (insert (or old-leaf (letter-node n-letter)) r-word)))

              (#(assoc % :size (get-node-size %))))

            (assoc this :terminal?
                        (or (:terminal? this)
                            (= letter (:letter this))
                            (= letter (:letter old-leaf))))))))

  (search [this word]
    (let [letter (first word)
          r-word (rest word)]
      (println this)
      (println letter)
      (let [direction (pick-direction letter (:letter this))]
        (if-let [node (get this direction)]
          (if (empty? r-word)
            (and (:terminal? node) (= letter (:letter node)))
            (search node r-word))
          (and (:terminal? this)
               (= letter (:letter this))
               (empty? r-word))))))

  (size [this]
    (:size this)))

;; next add a method to insert a dictionary by first sorting it
;; then recursively adding the median, left median, right median, etc...

#_(defn serialize-tst [tst]
  "awesome typed array stuff")

(enable-console-print!)

;; takes a word as input, returns a root tst node with that word
;; (and is-terminal? set to true)
(defn build-root-word-tst [word]
  (let [root-node (letter-node (first word))]
    (insert root-node word)))

(defn add-slice-tst [sorted-array tst]
  (let [len       (count sorted-array)
        med-i     (bit-shift-right len 1)
        med-word  (aget sorted-array med-i)]
    (let [left-array  (.slice sorted-array 0 med-i)
          right-array (.slice sorted-array (inc med-i) len)]
      (println "left array: " left-array ", median: " med-word
               ", right array: " right-array)
      (->
        tst
        (#(if %
            (insert % med-word)
            (build-root-word-tst med-word)))

        (#(cond (empty? left-array) %
                (= 1 (count left-array)) (insert % (first left-array))
                :else (add-slice-tst left-array %)))

        (#(cond (empty? right-array) %
                (= 1 (count right-array)) (insert % (first right-array))
                :else (add-slice-tst right-array %)))))))

(defn build-tst [dict-array]
  "takes a js array as input, clones and sorts it, then
   converts into a ternary search tree, returning the TSTree (TSTNode root)"
  (let [cloned-array (.. dict-array (slice 0 (.-length dict-array)))
        sorted-array (.sort cloned-array)]
    (add-slice-tst sorted-array nil)))