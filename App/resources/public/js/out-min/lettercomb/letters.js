// Compiled by ClojureScript 1.7.170 {:static-fns true}
goog.provide('lettercomb.letters');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Finds earliest occurrence of x in xs (a vector) using binary search.
 *   If x is between two values, return the larger index.
 */
lettercomb.letters.binary_search_STAR_ = (function lettercomb$letters$binary_search_STAR_(xs,x){
var low = (0);
var high = (cljs.core.count(xs) - (1));
while(true){
if((high <= (low + (1)))){
if((x === (xs.cljs$core$IFn$_invoke$arity$1 ? xs.cljs$core$IFn$_invoke$arity$1(low) : xs.call(null,low)))){
return low;
} else {
if((x === (xs.cljs$core$IFn$_invoke$arity$1 ? xs.cljs$core$IFn$_invoke$arity$1(high) : xs.call(null,high)))){
return high;
} else {
if(((x < (xs.cljs$core$IFn$_invoke$arity$1 ? xs.cljs$core$IFn$_invoke$arity$1(high) : xs.call(null,high)))) && ((x > (xs.cljs$core$IFn$_invoke$arity$1 ? xs.cljs$core$IFn$_invoke$arity$1(low) : xs.call(null,low))))){
return high;
} else {
if((x < (xs.cljs$core$IFn$_invoke$arity$1 ? xs.cljs$core$IFn$_invoke$arity$1(low) : xs.call(null,low)))){
return low;
} else {
if((x > (xs.cljs$core$IFn$_invoke$arity$1 ? xs.cljs$core$IFn$_invoke$arity$1(high) : xs.call(null,high)))){
return high;
} else {
return null;

}
}
}
}
}
} else {
var mid = (low + ((high - low) >> (1)));
if(((xs.cljs$core$IFn$_invoke$arity$1 ? xs.cljs$core$IFn$_invoke$arity$1(mid) : xs.call(null,mid)) < x)){
var G__10305 = (mid + (1));
var G__10306 = high;
low = G__10305;
high = G__10306;
continue;
} else {
var G__10307 = low;
var G__10308 = mid;
low = G__10307;
high = G__10308;
continue;
}
}
break;
}
});
lettercomb.letters.letter_freqs = cljs.core.sorted_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword(null,"A","A",-1688942394),8.167,new cljs.core.Keyword(null,"B","B",-1422503380),1.492,new cljs.core.Keyword(null,"C","C",-173629587),2.782,new cljs.core.Keyword(null,"D","D",-8015893),4.253,new cljs.core.Keyword(null,"E","E",230849842),12.702,new cljs.core.Keyword(null,"F","F",-1115543258),2.228,new cljs.core.Keyword(null,"G","G",-738544397),2.015,new cljs.core.Keyword(null,"H","H",-938148327),6.094,new cljs.core.Keyword(null,"I","I",1827140963),6.966,new cljs.core.Keyword(null,"J","J",1394734828),0.153,new cljs.core.Keyword(null,"K","K",711741),0.772,new cljs.core.Keyword(null,"L","L",-1038307519),4.025,new cljs.core.Keyword(null,"M","M",-1755742206),2.406,new cljs.core.Keyword(null,"N","N",-640629860),6.749,new cljs.core.Keyword(null,"O","O",795252742),7.507,new cljs.core.Keyword(null,"P","P",1668913291),1.929,new cljs.core.Keyword(null,"Q","Q",663320520),0.095,new cljs.core.Keyword(null,"R","R",-936662523),5.987,new cljs.core.Keyword(null,"S","S",1267293308),6.327,new cljs.core.Keyword(null,"T","T",175240877),9.056,new cljs.core.Keyword(null,"U","U",1362002044),2.758,new cljs.core.Keyword(null,"V","V",-1169284006),0.978,new cljs.core.Keyword(null,"W","W",-2035370425),2.36,new cljs.core.Keyword(null,"X","X",1705996313),0.15,new cljs.core.Keyword(null,"Y","Y",-560717356),1.974,new cljs.core.Keyword(null,"Z","Z",459124588),0.075], 0));
lettercomb.letters.item_freqs = cljs.core.sorted_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword(null,"bomb","bomb",-1302543521),(100)], 0));
lettercomb.letters.tile_freqs = cljs.core.sorted_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword(null,"letter","letter",-125811450),(50),new cljs.core.Keyword(null,"item","item",249373802),(50)], 0));
lettercomb.letters.letter_at_index = (function lettercomb$letters$letter_at_index(i){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__10310 = ((65) + i);
return String.fromCharCode(G__10310);
})());
});
lettercomb.letters.make_cumulative_freqs = (function lettercomb$letters$make_cumulative_freqs(freq_map,i,result_vec){

if((i < cljs.core.count(freq_map))){
var next_freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.vals(freq_map),i);
var total = (cljs.core.last(result_vec) + next_freq);
return lettercomb$letters$make_cumulative_freqs(freq_map,(i + (1)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result_vec,total));
} else {
return result_vec;
}
});
lettercomb.letters.cumulative_tile_freqs = lettercomb.letters.make_cumulative_freqs(lettercomb.letters.tile_freqs,(0),cljs.core.PersistentVector.EMPTY);
lettercomb.letters.cumulative_letter_freqs = lettercomb.letters.make_cumulative_freqs(lettercomb.letters.letter_freqs,(0),cljs.core.PersistentVector.EMPTY);
lettercomb.letters.point_letters = new cljs.core.PersistentArrayMap(null, 7, [(1),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"L","L",-1038307519),null,new cljs.core.Keyword(null,"I","I",1827140963),null,new cljs.core.Keyword(null,"R","R",-936662523),null,new cljs.core.Keyword(null,"O","O",795252742),null,new cljs.core.Keyword(null,"A","A",-1688942394),null,new cljs.core.Keyword(null,"T","T",175240877),null,new cljs.core.Keyword(null,"E","E",230849842),null,new cljs.core.Keyword(null,"U","U",1362002044),null,new cljs.core.Keyword(null,"S","S",1267293308),null,new cljs.core.Keyword(null,"N","N",-640629860),null], null), null),(2),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"D","D",-8015893),null,new cljs.core.Keyword(null,"G","G",-738544397),null], null), null),(3),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"M","M",-1755742206),null,new cljs.core.Keyword(null,"P","P",1668913291),null,new cljs.core.Keyword(null,"B","B",-1422503380),null,new cljs.core.Keyword(null,"C","C",-173629587),null], null), null),(4),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"F","F",-1115543258),null,new cljs.core.Keyword(null,"W","W",-2035370425),null,new cljs.core.Keyword(null,"Y","Y",-560717356),null,new cljs.core.Keyword(null,"H","H",-938148327),null,new cljs.core.Keyword(null,"V","V",-1169284006),null], null), null),(5),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"K","K",711741),null], null), null),(8),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"J","J",1394734828),null,new cljs.core.Keyword(null,"X","X",1705996313),null], null), null),(10),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Q","Q",663320520),null,new cljs.core.Keyword(null,"Z","Z",459124588),null], null), null)], null);
lettercomb.letters.letter_points = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5440__auto__ = (function lettercomb$letters$iter__10314(s__10315){
return (new cljs.core.LazySeq(null,(function (){
var s__10315__$1 = s__10315;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__10315__$1);
if(temp__4425__auto__){
var s__10315__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10315__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__10315__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__10317 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__10316 = (0);
while(true){
if((i__10316 < size__5439__auto__)){
var vec__10334 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__10316);
var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10334,(0),null);
var letters = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10334,(1),null);
cljs.core.chunk_append(b__10317,(function (){var iter__5440__auto__ = ((function (i__10316,vec__10334,point,letters,c__5438__auto__,size__5439__auto__,b__10317,s__10315__$2,temp__4425__auto__){
return (function lettercomb$letters$iter__10314_$_iter__10335(s__10336){
return (new cljs.core.LazySeq(null,((function (i__10316,vec__10334,point,letters,c__5438__auto__,size__5439__auto__,b__10317,s__10315__$2,temp__4425__auto__){
return (function (){
var s__10336__$1 = s__10336;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__10336__$1);
if(temp__4425__auto____$1){
var s__10336__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10336__$2)){
var c__5438__auto____$1 = cljs.core.chunk_first(s__10336__$2);
var size__5439__auto____$1 = cljs.core.count(c__5438__auto____$1);
var b__10338 = cljs.core.chunk_buffer(size__5439__auto____$1);
if((function (){var i__10337 = (0);
while(true){
if((i__10337 < size__5439__auto____$1)){
var letter = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto____$1,i__10337);
cljs.core.chunk_append(b__10338,cljs.core.PersistentArrayMap.fromArray([letter,point], true, false));

var G__10348 = (i__10337 + (1));
i__10337 = G__10348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10338),lettercomb$letters$iter__10314_$_iter__10335(cljs.core.chunk_rest(s__10336__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10338),null);
}
} else {
var letter = cljs.core.first(s__10336__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.fromArray([letter,point], true, false),lettercomb$letters$iter__10314_$_iter__10335(cljs.core.rest(s__10336__$2)));
}
} else {
return null;
}
break;
}
});})(i__10316,vec__10334,point,letters,c__5438__auto__,size__5439__auto__,b__10317,s__10315__$2,temp__4425__auto__))
,null,null));
});})(i__10316,vec__10334,point,letters,c__5438__auto__,size__5439__auto__,b__10317,s__10315__$2,temp__4425__auto__))
;
return iter__5440__auto__(letters);
})());

var G__10349 = (i__10316 + (1));
i__10316 = G__10349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10317),lettercomb$letters$iter__10314(cljs.core.chunk_rest(s__10315__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10317),null);
}
} else {
var vec__10341 = cljs.core.first(s__10315__$2);
var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10341,(0),null);
var letters = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10341,(1),null);
return cljs.core.cons((function (){var iter__5440__auto__ = ((function (vec__10341,point,letters,s__10315__$2,temp__4425__auto__){
return (function lettercomb$letters$iter__10314_$_iter__10342(s__10343){
return (new cljs.core.LazySeq(null,((function (vec__10341,point,letters,s__10315__$2,temp__4425__auto__){
return (function (){
var s__10343__$1 = s__10343;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__10343__$1);
if(temp__4425__auto____$1){
var s__10343__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10343__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__10343__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__10345 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__10344 = (0);
while(true){
if((i__10344 < size__5439__auto__)){
var letter = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__10344);
cljs.core.chunk_append(b__10345,cljs.core.PersistentArrayMap.fromArray([letter,point], true, false));

var G__10350 = (i__10344 + (1));
i__10344 = G__10350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10345),lettercomb$letters$iter__10314_$_iter__10342(cljs.core.chunk_rest(s__10343__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10345),null);
}
} else {
var letter = cljs.core.first(s__10343__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.fromArray([letter,point], true, false),lettercomb$letters$iter__10314_$_iter__10342(cljs.core.rest(s__10343__$2)));
}
} else {
return null;
}
break;
}
});})(vec__10341,point,letters,s__10315__$2,temp__4425__auto__))
,null,null));
});})(vec__10341,point,letters,s__10315__$2,temp__4425__auto__))
;
return iter__5440__auto__(letters);
})(),lettercomb$letters$iter__10314(cljs.core.rest(s__10315__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(lettercomb.letters.point_letters);
})()));
lettercomb.letters.word_score = (function lettercomb$letters$word_score(word_str){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__5440__auto__ = (function lettercomb$letters$word_score_$_iter__10357(s__10358){
return (new cljs.core.LazySeq(null,(function (){
var s__10358__$1 = s__10358;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__10358__$1);
if(temp__4425__auto__){
var s__10358__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10358__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__10358__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__10360 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__10359 = (0);
while(true){
if((i__10359 < size__5439__auto__)){
var letter = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__10359);
cljs.core.chunk_append(b__10360,(function (){var kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(letter));
return (lettercomb.letters.letter_points.cljs$core$IFn$_invoke$arity$1 ? lettercomb.letters.letter_points.cljs$core$IFn$_invoke$arity$1(kw) : lettercomb.letters.letter_points.call(null,kw));
})());

var G__10363 = (i__10359 + (1));
i__10359 = G__10363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10360),lettercomb$letters$word_score_$_iter__10357(cljs.core.chunk_rest(s__10358__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10360),null);
}
} else {
var letter = cljs.core.first(s__10358__$2);
return cljs.core.cons((function (){var kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(letter));
return (lettercomb.letters.letter_points.cljs$core$IFn$_invoke$arity$1 ? lettercomb.letters.letter_points.cljs$core$IFn$_invoke$arity$1(kw) : lettercomb.letters.letter_points.call(null,kw));
})(),lettercomb$letters$word_score_$_iter__10357(cljs.core.rest(s__10358__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(word_str);
})());
});
lettercomb.letters.point_colors = new cljs.core.PersistentArrayMap(null, 7, [(1),"#a00",(2),"#a60",(3),"#aa0",(4),"#0a0",(5),"#00a",(8),"#60a",(10),"#a0a"], null);
lettercomb.letters.darken = (function lettercomb$letters$darken(color){

return clojure.string.replace(clojure.string.replace(color,"6","3"),"a","7");
});
lettercomb.letters.rand_100 = (function lettercomb$letters$rand_100(){

var G__10365 = (Math.random() * (100));
return Math.floor(G__10365);
});
lettercomb.letters.rand_letter = (function lettercomb$letters$rand_letter(){

return lettercomb.letters.letter_at_index(lettercomb.letters.binary_search_STAR_(lettercomb.letters.cumulative_letter_freqs,lettercomb.letters.rand_100()));
});
lettercomb.letters.rand_tile = (function lettercomb$letters$rand_tile(){
var n = lettercomb.letters.rand_100();
var tile_i = lettercomb.letters.binary_search_STAR_(lettercomb.letters.cumulative_tile_freqs,n);
var tile_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(lettercomb.letters.tile_freqs),tile_i);
return tile_type;
});
