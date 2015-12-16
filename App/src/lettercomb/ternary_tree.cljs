(ns lettercomb.ternary-tree
  (:require [clojure.string :as str]
            [cljs.test :refer-macros [deftest is testing run-tests]]))

(defprotocol TSTree
  ;; returns true or false if tree contains word
  (search [this word])
  ;; returns a new tree with the word added
  (insert [this word])
  (size [this]))

;; @TODO: BUG: Individual letters return true for search

(defn pick-child [letter node-letter]
  (cond
    (< letter node-letter) :lo
    (> letter node-letter) :hi
    :else :eq))

(defn get-node-size [node]
  (inc
    (apply + (map #(get-in node [% :size] 0)
                  [:lo :eq :hi]))))

(declare TSTNode)

(defn letter-node [letter]
  (TSTNode. letter false nil nil nil 1))

;; a ternary search tree node has a:
;; letter (its value)
;; terminal? (boolean, indicates whether this node marks the end of a valid search word)
;; left / center / right (tst-node, can be nil)
;; size = number of subnodes...
(defrecord TSTNode [letter terminal? lo eq hi size]
  TSTree
  ;; inserting blank word should not change state
  ;;
  (insert [this word]
    (let [letter (first word)
          r-word (subs word 1)]
      (if-not (str/blank? letter)
        (let [child-key (pick-child letter (:letter this))
              node      (get this child-key)]
            (->
              this

              ((fn [root]
                  (if (= child-key :eq)
                    ;; need to behave differently for eq kid
                    (let [n-letter (first r-word)
                          node     (or node (letter-node n-letter))
                          n-node   (insert node r-word)]
                      (assoc root child-key n-node))
                    (let [node   (or node (letter-node letter))
                          n-node (insert node word)]
                      (assoc root child-key n-node)))))

              ((fn [root]
                 (update
                   root
                   :terminal?
                    (fn [v]
                      #_(println "n-node: " n-node)
                      #_(println "n-letter: " n-letter)
                      #_(println "n-r-word: " n-r-word)
                      (or v
                        (and
                          (str/blank? r-word)
                          (= (:letter root) letter)))))))

              ((fn [root] (assoc root :size (get-node-size root))))))
        ;; return the node since there are no more letters
        this)))

  (search [this word]
    (let [letter (first word)
          r-word (subs word 1)]
      (println "this: " this)
      (println "letter: " letter, "rest: " r-word)
      ;; should always be checking equality with eq node
      ;; ORDER IS WRONG: should check if r-word is blank first...
      (let [child-key (pick-child letter (:letter this))]
        (println "child: " child-key)
        (if-let [node (get this child-key)]
          ;; @TODO: search for whole word still if letter not matched
          (if (= letter (:letter node))
            (if (str/blank? r-word)
              ;; node does not exist, terminate the search
              (and
                (:terminal? node)
                (= letter (:letter node)))
              (search node r-word))
            (search node word))
          false))))

  (size [this]
    (:size this)))



;; @TODO: BUG, (def result (build-tst #js["a" "abba" "cabba" "car" "cat" "dog"]))
;; (search result "digg")
;; => true

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
      #_(println "left array: " left-array ", median: " med-word
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


(deftest test-letter-node
  (let [a-node (letter-node "a")]
    (is (= (size a-node) 1))
    (is (false? (search a-node "a")))
    (let [an-node (insert a-node "an")]
      (is (= (size an-node) 2))
      (is (true? (search an-node "an")))
      (is (false? (search an-node "a")))
      (is (false? (search an-node "hi"))))))


(deftest test-noop
  (let [a-node (letter-node "a")
        an-node (insert a-node "an")
        and-node (insert an-node "and")]
    (is (= (size and-node) 3))
    (is (true? (search and-node "and")))
    (is (true? (search and-node "an")))
    (is (false? (search and-node "hey")))
    (let [still-and-node (insert and-node "")]
      (is (false? (search still-and-node "a")))
      (is (true? (search still-and-node "an")))
      (is (true? (search still-and-node "and")))
      (is (= 3 (size still-and-node)))
      (is (false? (search still-and-node "hey"))))))

(deftest test-build-tst
  (let [word-list #js["a" "abba" "cabba" "car" "cat" "dog"]
        result    (build-tst word-list)]
    (is (false? (search result "digg")))
    (doseq [word word-list]
      (is (true? (search result word))))))


#_(run-tests)