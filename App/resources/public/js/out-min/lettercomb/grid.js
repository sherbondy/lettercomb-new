// Compiled by ClojureScript 1.7.170 {:static-fns true}
goog.provide('lettercomb.grid');
goog.require('cljs.core');
goog.require('cljs.core.match');
lettercomb.grid.make_rect_board = (function lettercomb$grid$make_rect_board(cols,rows){

return cljs.core.vec((function (){var iter__5440__auto__ = (function lettercomb$grid$make_rect_board_$_iter__16535(s__16536){
return (new cljs.core.LazySeq(null,(function (){
var s__16536__$1 = s__16536;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16536__$1);
if(temp__4425__auto__){
var s__16536__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16536__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__16536__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__16538 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__16537 = (0);
while(true){
if((i__16537 < size__5439__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__16537);
cljs.core.chunk_append(b__16538,cljs.core.vec((function (){var iter__5440__auto__ = ((function (i__16537,j,c__5438__auto__,size__5439__auto__,b__16538,s__16536__$2,temp__4425__auto__){
return (function lettercomb$grid$make_rect_board_$_iter__16535_$_iter__16553(s__16554){
return (new cljs.core.LazySeq(null,((function (i__16537,j,c__5438__auto__,size__5439__auto__,b__16538,s__16536__$2,temp__4425__auto__){
return (function (){
var s__16554__$1 = s__16554;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__16554__$1);
if(temp__4425__auto____$1){
var s__16554__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16554__$2)){
var c__5438__auto____$1 = cljs.core.chunk_first(s__16554__$2);
var size__5439__auto____$1 = cljs.core.count(c__5438__auto____$1);
var b__16556 = cljs.core.chunk_buffer(size__5439__auto____$1);
if((function (){var i__16555 = (0);
while(true){
if((i__16555 < size__5439__auto____$1)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto____$1,i__16555);
cljs.core.chunk_append(b__16556,new cljs.core.Keyword(null,"blank","blank",-1249652109));

var G__16565 = (i__16555 + (1));
i__16555 = G__16565;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16556),lettercomb$grid$make_rect_board_$_iter__16535_$_iter__16553(cljs.core.chunk_rest(s__16554__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16556),null);
}
} else {
var i = cljs.core.first(s__16554__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"blank","blank",-1249652109),lettercomb$grid$make_rect_board_$_iter__16535_$_iter__16553(cljs.core.rest(s__16554__$2)));
}
} else {
return null;
}
break;
}
});})(i__16537,j,c__5438__auto__,size__5439__auto__,b__16538,s__16536__$2,temp__4425__auto__))
,null,null));
});})(i__16537,j,c__5438__auto__,size__5439__auto__,b__16538,s__16536__$2,temp__4425__auto__))
;
return iter__5440__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols));
})()));

var G__16566 = (i__16537 + (1));
i__16537 = G__16566;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16538),lettercomb$grid$make_rect_board_$_iter__16535(cljs.core.chunk_rest(s__16536__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16538),null);
}
} else {
var j = cljs.core.first(s__16536__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__5440__auto__ = ((function (j,s__16536__$2,temp__4425__auto__){
return (function lettercomb$grid$make_rect_board_$_iter__16535_$_iter__16559(s__16560){
return (new cljs.core.LazySeq(null,((function (j,s__16536__$2,temp__4425__auto__){
return (function (){
var s__16560__$1 = s__16560;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__16560__$1);
if(temp__4425__auto____$1){
var s__16560__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16560__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__16560__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__16562 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__16561 = (0);
while(true){
if((i__16561 < size__5439__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__16561);
cljs.core.chunk_append(b__16562,new cljs.core.Keyword(null,"blank","blank",-1249652109));

var G__16567 = (i__16561 + (1));
i__16561 = G__16567;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16562),lettercomb$grid$make_rect_board_$_iter__16535_$_iter__16559(cljs.core.chunk_rest(s__16560__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16562),null);
}
} else {
var i = cljs.core.first(s__16560__$2);
return cljs.core.cons(new cljs.core.Keyword(null,"blank","blank",-1249652109),lettercomb$grid$make_rect_board_$_iter__16535_$_iter__16559(cljs.core.rest(s__16560__$2)));
}
} else {
return null;
}
break;
}
});})(j,s__16536__$2,temp__4425__auto__))
,null,null));
});})(j,s__16536__$2,temp__4425__auto__))
;
return iter__5440__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols));
})()),lettercomb$grid$make_rect_board_$_iter__16535(cljs.core.rest(s__16536__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(rows));
})());
});
lettercomb.grid.get_odd_r = (function lettercomb$grid$get_odd_r(board,p__16568){
var vec__16570 = p__16568;
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16570,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16570,(1),null);

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
});
lettercomb.grid.odd_r_to_cube = (function lettercomb$grid$odd_r_to_cube(p__16571){
var vec__16573 = p__16571;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16573,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16573,(1),null);

var x = (q - ((r - (r & (1))) / (2)));
var z = r;
var y = (((0) - x) - z);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
lettercomb.grid.axial_to_odd_r = (function lettercomb$grid$axial_to_odd_r(p__16574){
var vec__16576 = p__16574;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16576,(0),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16576,(1),null);
var q = (x + ((z - (z & (1))) / (2)));
var r = z;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null);
});
lettercomb.grid.cube_to_odd_r = (function lettercomb$grid$cube_to_odd_r(p__16577){
var vec__16579 = p__16577;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16579,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16579,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16579,(2),null);
return lettercomb.grid.axial_to_odd_r(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,z], null));
});
lettercomb.grid.axial_to_cube = (function lettercomb$grid$axial_to_cube(p__16580){
var vec__16582 = p__16580;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16582,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16582,(1),null);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,(((0) - q) - r),r], null);
});
lettercomb.grid.cube_to_axial = (function lettercomb$grid$cube_to_axial(p__16583){
var vec__16585 = p__16583;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16585,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16585,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16585,(2),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,z], null);
});
lettercomb.grid.get_cube = (function lettercomb$grid$get_cube(board,xz){

var vec__16587 = lettercomb.grid.cube_to_odd_r(xz);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16587,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16587,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,q], null));
});
lettercomb.grid.pixel_to_axial = (function lettercomb$grid$pixel_to_axial(p__16588,radius,p__16589){
var vec__16592 = p__16588;
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16592,(0),null);
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16592,(1),null);
var vec__16593 = p__16589;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16593,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16593,(1),null);

var x__$1 = (x - left);
var y__$1 = (y - top);
var q = (((Math.sqrt((3)) * x__$1) - y__$1) / ((3) * radius));
var r = (((2) * y__$1) / ((3) * radius));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.round(q),Math.round(r)], null);
});
