(ns lettercomb.ternary-tree)

(defprotocol TSTree
  ;; returns true or false if tree contains word
  (search [this word])
  ;; returns a new tree with the word added
  (insert [this word]))

;; a ternary search tree node has a:
;; letter (its value)
;; terminal? (boolean, indicates whether this node marks the end of a valid search word)
;; left / center / right (tst-node, can be nil)
(defrecord TSTNode [letter terminal? left center right]
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
          (assoc this :terminal? true)
          (let [letter   (if (= direction :center) (first r-word) letter)
                new-leaf (TSTNode. letter false nil nil nil)]
            (assoc this direction
                        (insert new-leaf r-word)))))))

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
          false)))))

;; next add a method to insert a dictionary by first sorting it
;; then recursively adding the median, left median, right median, etc...