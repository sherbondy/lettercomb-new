(ns lettercomb.ternary-tree
  (:require [clojure.string :as str]
            [cljs.test :refer-macros [deftest is testing run-tests]]))

;; http://algs4.cs.princeton.edu/52trie/TST.java.html

(defprotocol TSTree
  ;; returns true or false if tree contains word
  (has? [this word])
  ;; returns the actual leaf node | nil corresponding to word
  (search [this word])
  ;; returns a new tree with the word added
  (insert [this word]))

(defprotocol ITSTNode
  (-insert [this word index])
  (-search [this word index])
  (-resize [this])
  (size [this])
  (depth [this]))

;; @TODO: BUG: Individual letters return true for search

(defn pick-child [letter node-letter]
  (cond
    (< letter node-letter) :lo
    (> letter node-letter) :hi
    :else :eq))

;; we increment to include the root node as well as its children
(defn get-node-size [node]
  (inc
    (apply + (map #(get-in node [% :size] 0)
                  [:lo :eq :hi]))))

(defn get-node-depth [node]
  (inc
    (apply max (map #(get-in node [% :depth] 0)
                    [:lo :eq :hi]))))

(declare TSTNode)

(defn letter-node [letter]
  (TSTNode. letter false nil nil nil 1 1))

;; a ternary search tree node has a:
;; letter (its value)
;; terminal? (boolean, indicates whether this node marks the end of a valid search word)
;; left / center / right (tst-node, can be nil)
;; size = number of subnodes...
(defrecord TSTNode [letter terminal? lo eq hi size depth]
  ITSTNode
  (-resize [this]
    (assoc this :size  (get-node-size this)
                :depth (get-node-depth this)))

  (-insert [this word index]
    (let [letter      (get word index)
          child-key   (pick-child letter (:letter this))
          next-index  (if (= child-key :eq) (inc index) index)
          next-letter (get word next-index)]
      (->
        (if (and (= child-key :eq) (>= next-index (count word)))
          (update this :terminal?
                  ;; inserting blank word should not change state
                  (fn [v] (or v (= letter (:letter this)))))
          (let [child-node (or (get this child-key)
                               (letter-node next-letter))]
            (assoc this child-key (-insert child-node word next-index))))

        (-resize))))

  (-search [this word index]
    (cond
      (str/blank? word) nil
      (= (count word) 0) nil
      :else
      (let [letter (get word index)
            child-key  (pick-child letter (:letter this))
            next-index (if (= child-key :eq) (inc index) index)]
        (if (and (= child-key :eq) (= next-index (count word)))
          this
          (when-let [child-node (get this child-key)]
            (-search child-node word next-index))))))

  (size [this]
    (:size this))

  (depth [this]
    (:depth this))


  TSTree
  (insert [this word]
    (-insert this word 0))

  (search [this word]
    (cond
      (str/blank? word)  nil
      (= (count word) 0) nil
      :else
      (-search this word 0)))

  (has? [this word]
    (let [node (search this word)]
      (and (some? node) (:terminal? node)))))



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
        (if tst
          (insert tst med-word)
          (build-root-word-tst med-word))

        (#(cond (empty? left-array) %
                (= 1 (count left-array)) (insert % (first left-array))
                :else (add-slice-tst left-array %)))

        (#(cond (empty? right-array) %
                (= 1 (count right-array)) (insert % (first right-array))
                :else (add-slice-tst right-array %)))))))

;; hooray for trampolines:
;; ;; http://jakemccrary.com/blog/2010/12/06/trampolining-through-mutual-recursion/
(defn build-tst [dict-array]
  "takes a js array as input, clones and sorts it, then
   converts into a ternary search tree, returning the TSTree (TSTNode root)"
  (let [cloned-array (.. dict-array (slice 0 (.-length dict-array)))
        sorted-array (.sort cloned-array)]
    (trampoline add-slice-tst sorted-array nil)))


(deftest test-letter-node
  (let [a-node (letter-node "a")]
    (is (= (size a-node) 1))
    (is (false? (has? a-node "a")))
    (let [an-node (insert a-node "an")]
      (is (= (size an-node) 2))
      (is (true? (has? an-node "an")))
      (is (false? (has? an-node "a")))
      (is (false? (has? an-node "hi"))))))


(deftest test-noop
  (let [a-node (letter-node "a")
        an-node (insert a-node "an")
        and-node (insert an-node "and")]
    (is (= (size an-node) 2))
    (is (= (depth an-node) 2))
    (is (= (size and-node) 3))
    (is (= 3 (depth and-node)))
    (is (true? (has? and-node "and")))
    (is (true? (has? and-node "an")))
    (is (false? (has? and-node "hey")))
    (let [still-and-node (insert and-node "")]
      (is (false? (has? still-and-node "a")))
      (is (true? (has? still-and-node "an")))
      (is (true? (has? still-and-node "and")))
      (is (= 3 (size still-and-node)))
      (is (= 3 (depth still-and-node)))
      (is (false? (has? still-and-node "hey"))))))

(deftest test-build-tst
  (let [word-list #js["a" "abba" "cabba" "car" "cat" "dog"]
        result    (build-tst word-list)]
    (is (false? (has? result "digg")))
    (doseq [word word-list]
      (is (true? (has? result word))))))


(def english (atom nil))

(defn build-english-tst! []
  (when-let [english-words js/WORDS]
    (let [result (build-tst english-words)]
      (reset! english result))))

;; FUN STATS
;; (size @english)
;; = 387888
;; (js/Math.log2 387888)
;; = 18.56
;; If we get rid of 1 and 2 letter words:
;; (def reasonable-words (filterv #(> (count %) 2) js/WORDS))
;; (set! js/WORDS (clj->js reasonable-words))
;; (size @english)
;; = 387885
;; Damn, huge space waste to make pointers 32-bits because they don't fit in 16-bits.
;; ideas:
;; - flatten single-node paths (chain of nodes with one child)
;;   Store pointers to most frequent in extra bits from letter encoding?
;; - split into 3 separate trees (introduces redundancy...)
;;   ~ 15.8 (assuming redundancy factor is not too high)
;; Alternatively, just rely on gzip to notice the blank space.
;; - We could sacrifice lookup time for space by making pointers not aligned,
;; e.g. use two 32-bit addresses to encode all three pointers
;; (< (* 19 3) 64)
;; Need to do some testing, but maybe the slowdown is insignificant.

;; @TODO: add property-based tests to validate invariants
;; like the size of the parent is always larger than children,
;; no nil nodes, etc.


#_(run-tests)


;; We are going to encode the dictionary as a binary like so:
;; header is a 32 bit UInt which encodes the size of the dictionary.
;; Each node is encoded by:
;; [ 1 Int8 ] [ Uint32 | Uint32 | Uint32 ]
;; Sign bit = terminal? : 1 => terminal, 0 => not terminal
;; Remaining 7 bits: encode the letter. Only actually need 5 bits.

;; Uint32 triplet encodes the lokid, eq, and hikid pointers.
;; 0 is reserved to represent a nil pointer,
;; so the root node starts at 1 and counting proceeds from there.

;; Expected size of this representation: 104 bits per node,
;; 13 bytes per node
;; 13 * 387888 = 5.042544 MB
;; damn, that's... bigger than the uncompressed representation.
;; If we do chunking, we only actually need 2 32-bit Uints for the pointers,
;; with an expected size of:
;; 9 bytes per node:
;; 9 * 387888 = 3.490992 MB
;; Still bigger than the 2.3 MB json encoding.

;; hmm, but what is the json encoding's actual size in MEMORY?


;; TERNARY DAG: http://www.strchr.com/ternary_dags
;; "Proper name" => DAWG: Directed acyclic word graph:
;; https://en.wikipedia.org/wiki/Directed_acyclic_word_graph
;; aaka "Minimal Acyclic Finite State Automaton" (MA-FSA)
;; http://stevehanov.ca/blog/index.php?id=115
;; Yields a third the nodes!
;; => 1.2 MB expected, half the size of the naive representation.

;; This is a really nice, clear writeup of an algorithm that takes advantage
;; of data I have already tagged (size and depth):
;; http://www.wutka.com/dawg.html


;; test suite: look up and profile time for lookup of every word in the english dictionary
;; to verify complete correctness.
;; then do generative testing to make FAKE WORDS and verify that none of them (if not in the actual english dictionary)
;; return false positives. Also profile timing for this.
;; do comparison with standard javascript object and ES6 Hash Map object.
;; as well as cljs hash map data structure.