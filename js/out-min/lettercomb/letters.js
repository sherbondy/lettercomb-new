// Compiled by ClojureScript 1.7.170 {}
goog.provide('lettercomb.letters');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Finds earliest occurrence of x in xs (a vector) using binary search.
 *   If x is between two values, return the larger index.
 */
lettercomb.letters.binary_search_STAR_ = (function lettercomb$letters$binary_search_STAR_(xs,x){
var low = (0);
var high = (cljs.core.count.call(null,xs) - (1));
while(true){
if((high <= (low + (1)))){
if((x === xs.call(null,low))){
return low;
} else {
if((x === xs.call(null,high))){
return high;
} else {
if(((x < xs.call(null,high))) && ((x > xs.call(null,low)))){
return high;
} else {
if((x < xs.call(null,low))){
return low;
} else {
if((x > xs.call(null,high))){
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
if((xs.call(null,mid) < x)){
var G__9736 = (mid + (1));
var G__9737 = high;
low = G__9736;
high = G__9737;
continue;
} else {
var G__9738 = low;
var G__9739 = mid;
low = G__9738;
high = G__9739;
continue;
}
}
break;
}
});
lettercomb.letters.letter_freqs = cljs.core.sorted_map.call(null,new cljs.core.Keyword(null,"A","A",-1688942394),8.167,new cljs.core.Keyword(null,"B","B",-1422503380),1.492,new cljs.core.Keyword(null,"C","C",-173629587),2.782,new cljs.core.Keyword(null,"D","D",-8015893),4.253,new cljs.core.Keyword(null,"E","E",230849842),12.702,new cljs.core.Keyword(null,"F","F",-1115543258),2.228,new cljs.core.Keyword(null,"G","G",-738544397),2.015,new cljs.core.Keyword(null,"H","H",-938148327),6.094,new cljs.core.Keyword(null,"I","I",1827140963),6.966,new cljs.core.Keyword(null,"J","J",1394734828),0.153,new cljs.core.Keyword(null,"K","K",711741),0.772,new cljs.core.Keyword(null,"L","L",-1038307519),4.025,new cljs.core.Keyword(null,"M","M",-1755742206),2.406,new cljs.core.Keyword(null,"N","N",-640629860),6.749,new cljs.core.Keyword(null,"O","O",795252742),7.507,new cljs.core.Keyword(null,"P","P",1668913291),1.929,new cljs.core.Keyword(null,"Q","Q",663320520),0.095,new cljs.core.Keyword(null,"R","R",-936662523),5.987,new cljs.core.Keyword(null,"S","S",1267293308),6.327,new cljs.core.Keyword(null,"T","T",175240877),9.056,new cljs.core.Keyword(null,"U","U",1362002044),2.758,new cljs.core.Keyword(null,"V","V",-1169284006),0.978,new cljs.core.Keyword(null,"W","W",-2035370425),2.36,new cljs.core.Keyword(null,"X","X",1705996313),0.15,new cljs.core.Keyword(null,"Y","Y",-560717356),1.974,new cljs.core.Keyword(null,"Z","Z",459124588),0.075);
lettercomb.letters.item_freqs = cljs.core.sorted_map.call(null,new cljs.core.Keyword(null,"bomb","bomb",-1302543521),(100));
lettercomb.letters.tile_freqs = cljs.core.sorted_map.call(null,new cljs.core.Keyword(null,"letter","letter",-125811450),(50),new cljs.core.Keyword(null,"item","item",249373802),(50));
lettercomb.letters.letter_at_index = (function lettercomb$letters$letter_at_index(i){
return cljs.core.keyword.call(null,String.fromCharCode(((65) + i)));
});
lettercomb.letters.make_cumulative_freqs = (function lettercomb$letters$make_cumulative_freqs(freq_map,i,result_vec){

if((i < cljs.core.count.call(null,freq_map))){
var next_freq = cljs.core.nth.call(null,cljs.core.vals.call(null,freq_map),i);
var total = (cljs.core.last.call(null,result_vec) + next_freq);
return lettercomb$letters$make_cumulative_freqs.call(null,freq_map,(i + (1)),cljs.core.conj.call(null,result_vec,total));
} else {
return result_vec;
}
});
lettercomb.letters.cumulative_tile_freqs = lettercomb.letters.make_cumulative_freqs.call(null,lettercomb.letters.tile_freqs,(0),cljs.core.PersistentVector.EMPTY);
lettercomb.letters.cumulative_letter_freqs = lettercomb.letters.make_cumulative_freqs.call(null,lettercomb.letters.letter_freqs,(0),cljs.core.PersistentVector.EMPTY);
lettercomb.letters.point_letters = new cljs.core.PersistentArrayMap(null, 7, [(1),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"L","L",-1038307519),null,new cljs.core.Keyword(null,"I","I",1827140963),null,new cljs.core.Keyword(null,"R","R",-936662523),null,new cljs.core.Keyword(null,"O","O",795252742),null,new cljs.core.Keyword(null,"A","A",-1688942394),null,new cljs.core.Keyword(null,"T","T",175240877),null,new cljs.core.Keyword(null,"E","E",230849842),null,new cljs.core.Keyword(null,"U","U",1362002044),null,new cljs.core.Keyword(null,"S","S",1267293308),null,new cljs.core.Keyword(null,"N","N",-640629860),null], null), null),(2),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"D","D",-8015893),null,new cljs.core.Keyword(null,"G","G",-738544397),null], null), null),(3),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"M","M",-1755742206),null,new cljs.core.Keyword(null,"P","P",1668913291),null,new cljs.core.Keyword(null,"B","B",-1422503380),null,new cljs.core.Keyword(null,"C","C",-173629587),null], null), null),(4),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"F","F",-1115543258),null,new cljs.core.Keyword(null,"W","W",-2035370425),null,new cljs.core.Keyword(null,"Y","Y",-560717356),null,new cljs.core.Keyword(null,"H","H",-938148327),null,new cljs.core.Keyword(null,"V","V",-1169284006),null], null), null),(5),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"K","K",711741),null], null), null),(8),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"J","J",1394734828),null,new cljs.core.Keyword(null,"X","X",1705996313),null], null), null),(10),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Q","Q",663320520),null,new cljs.core.Keyword(null,"Z","Z",459124588),null], null), null)], null);
lettercomb.letters.letter_points = cljs.core.apply.call(null,cljs.core.merge,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__5440__auto__ = (function lettercomb$letters$iter__9740(s__9741){
return (new cljs.core.LazySeq(null,(function (){
var s__9741__$1 = s__9741;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9741__$1);
if(temp__4425__auto__){
var s__9741__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9741__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__9741__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__9743 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__9742 = (0);
while(true){
if((i__9742 < size__5439__auto__)){
var vec__9754 = cljs.core._nth.call(null,c__5438__auto__,i__9742);
var point = cljs.core.nth.call(null,vec__9754,(0),null);
var letters = cljs.core.nth.call(null,vec__9754,(1),null);
cljs.core.chunk_append.call(null,b__9743,(function (){var iter__5440__auto__ = ((function (i__9742,vec__9754,point,letters,c__5438__auto__,size__5439__auto__,b__9743,s__9741__$2,temp__4425__auto__){
return (function lettercomb$letters$iter__9740_$_iter__9755(s__9756){
return (new cljs.core.LazySeq(null,((function (i__9742,vec__9754,point,letters,c__5438__auto__,size__5439__auto__,b__9743,s__9741__$2,temp__4425__auto__){
return (function (){
var s__9756__$1 = s__9756;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__9756__$1);
if(temp__4425__auto____$1){
var s__9756__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9756__$2)){
var c__5438__auto____$1 = cljs.core.chunk_first.call(null,s__9756__$2);
var size__5439__auto____$1 = cljs.core.count.call(null,c__5438__auto____$1);
var b__9758 = cljs.core.chunk_buffer.call(null,size__5439__auto____$1);
if((function (){var i__9757 = (0);
while(true){
if((i__9757 < size__5439__auto____$1)){
var letter = cljs.core._nth.call(null,c__5438__auto____$1,i__9757);
cljs.core.chunk_append.call(null,b__9758,cljs.core.PersistentArrayMap.fromArray([letter,point], true, false));

var G__9764 = (i__9757 + (1));
i__9757 = G__9764;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9758),lettercomb$letters$iter__9740_$_iter__9755.call(null,cljs.core.chunk_rest.call(null,s__9756__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9758),null);
}
} else {
var letter = cljs.core.first.call(null,s__9756__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.fromArray([letter,point], true, false),lettercomb$letters$iter__9740_$_iter__9755.call(null,cljs.core.rest.call(null,s__9756__$2)));
}
} else {
return null;
}
break;
}
});})(i__9742,vec__9754,point,letters,c__5438__auto__,size__5439__auto__,b__9743,s__9741__$2,temp__4425__auto__))
,null,null));
});})(i__9742,vec__9754,point,letters,c__5438__auto__,size__5439__auto__,b__9743,s__9741__$2,temp__4425__auto__))
;
return iter__5440__auto__.call(null,letters);
})());

var G__9765 = (i__9742 + (1));
i__9742 = G__9765;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9743),lettercomb$letters$iter__9740.call(null,cljs.core.chunk_rest.call(null,s__9741__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9743),null);
}
} else {
var vec__9759 = cljs.core.first.call(null,s__9741__$2);
var point = cljs.core.nth.call(null,vec__9759,(0),null);
var letters = cljs.core.nth.call(null,vec__9759,(1),null);
return cljs.core.cons.call(null,(function (){var iter__5440__auto__ = ((function (vec__9759,point,letters,s__9741__$2,temp__4425__auto__){
return (function lettercomb$letters$iter__9740_$_iter__9760(s__9761){
return (new cljs.core.LazySeq(null,((function (vec__9759,point,letters,s__9741__$2,temp__4425__auto__){
return (function (){
var s__9761__$1 = s__9761;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__9761__$1);
if(temp__4425__auto____$1){
var s__9761__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9761__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__9761__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__9763 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__9762 = (0);
while(true){
if((i__9762 < size__5439__auto__)){
var letter = cljs.core._nth.call(null,c__5438__auto__,i__9762);
cljs.core.chunk_append.call(null,b__9763,cljs.core.PersistentArrayMap.fromArray([letter,point], true, false));

var G__9766 = (i__9762 + (1));
i__9762 = G__9766;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9763),lettercomb$letters$iter__9740_$_iter__9760.call(null,cljs.core.chunk_rest.call(null,s__9761__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9763),null);
}
} else {
var letter = cljs.core.first.call(null,s__9761__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.fromArray([letter,point], true, false),lettercomb$letters$iter__9740_$_iter__9760.call(null,cljs.core.rest.call(null,s__9761__$2)));
}
} else {
return null;
}
break;
}
});})(vec__9759,point,letters,s__9741__$2,temp__4425__auto__))
,null,null));
});})(vec__9759,point,letters,s__9741__$2,temp__4425__auto__))
;
return iter__5440__auto__.call(null,letters);
})(),lettercomb$letters$iter__9740.call(null,cljs.core.rest.call(null,s__9741__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,lettercomb.letters.point_letters);
})()));
lettercomb.letters.word_score = (function lettercomb$letters$word_score(word_str){
return cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__5440__auto__ = (function lettercomb$letters$word_score_$_iter__9771(s__9772){
return (new cljs.core.LazySeq(null,(function (){
var s__9772__$1 = s__9772;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9772__$1);
if(temp__4425__auto__){
var s__9772__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9772__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__9772__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__9774 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__9773 = (0);
while(true){
if((i__9773 < size__5439__auto__)){
var letter = cljs.core._nth.call(null,c__5438__auto__,i__9773);
cljs.core.chunk_append.call(null,b__9774,(function (){var kw = cljs.core.keyword.call(null,clojure.string.upper_case.call(null,letter));
return lettercomb.letters.letter_points.call(null,kw);
})());

var G__9775 = (i__9773 + (1));
i__9773 = G__9775;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9774),lettercomb$letters$word_score_$_iter__9771.call(null,cljs.core.chunk_rest.call(null,s__9772__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9774),null);
}
} else {
var letter = cljs.core.first.call(null,s__9772__$2);
return cljs.core.cons.call(null,(function (){var kw = cljs.core.keyword.call(null,clojure.string.upper_case.call(null,letter));
return lettercomb.letters.letter_points.call(null,kw);
})(),lettercomb$letters$word_score_$_iter__9771.call(null,cljs.core.rest.call(null,s__9772__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,word_str);
})());
});
lettercomb.letters.point_colors = new cljs.core.PersistentArrayMap(null, 7, [(1),"#a00",(2),"#a60",(3),"#aa0",(4),"#0a0",(5),"#00a",(8),"#60a",(10),"#a0a"], null);
lettercomb.letters.darken = (function lettercomb$letters$darken(color){

return clojure.string.replace.call(null,clojure.string.replace.call(null,color,"6","3"),"a","7");
});
lettercomb.letters.rand_100 = (function lettercomb$letters$rand_100(){

return Math.floor((Math.random() * (100)));
});
lettercomb.letters.rand_letter = (function lettercomb$letters$rand_letter(){

return lettercomb.letters.letter_at_index.call(null,lettercomb.letters.binary_search_STAR_.call(null,lettercomb.letters.cumulative_letter_freqs,lettercomb.letters.rand_100.call(null)));
});
lettercomb.letters.rand_tile = (function lettercomb$letters$rand_tile(){
var n = lettercomb.letters.rand_100.call(null);
var tile_i = lettercomb.letters.binary_search_STAR_.call(null,lettercomb.letters.cumulative_tile_freqs,n);
var tile_type = cljs.core.nth.call(null,cljs.core.keys.call(null,lettercomb.letters.tile_freqs),tile_i);
return tile_type;
});
