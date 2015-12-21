// Compiled by ClojureScript 1.7.170 {}
goog.provide('lettercomb.grid');
goog.require('cljs.core');
goog.require('cljs.core.match');
lettercomb.grid.make_rect_board = (function lettercomb$grid$make_rect_board(cols,rows){

return cljs.core.vec.call(null,(function (){var iter__5440__auto__ = (function lettercomb$grid$make_rect_board_$_iter__15618(s__15619){
return (new cljs.core.LazySeq(null,(function (){
var s__15619__$1 = s__15619;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15619__$1);
if(temp__4425__auto__){
var s__15619__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15619__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__15619__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__15621 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__15620 = (0);
while(true){
if((i__15620 < size__5439__auto__)){
var j = cljs.core._nth.call(null,c__5438__auto__,i__15620);
cljs.core.chunk_append.call(null,b__15621,cljs.core.vec.call(null,(function (){var iter__5440__auto__ = ((function (i__15620,j,c__5438__auto__,size__5439__auto__,b__15621,s__15619__$2,temp__4425__auto__){
return (function lettercomb$grid$make_rect_board_$_iter__15618_$_iter__15630(s__15631){
return (new cljs.core.LazySeq(null,((function (i__15620,j,c__5438__auto__,size__5439__auto__,b__15621,s__15619__$2,temp__4425__auto__){
return (function (){
var s__15631__$1 = s__15631;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__15631__$1);
if(temp__4425__auto____$1){
var s__15631__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15631__$2)){
var c__5438__auto____$1 = cljs.core.chunk_first.call(null,s__15631__$2);
var size__5439__auto____$1 = cljs.core.count.call(null,c__5438__auto____$1);
var b__15633 = cljs.core.chunk_buffer.call(null,size__5439__auto____$1);
if((function (){var i__15632 = (0);
while(true){
if((i__15632 < size__5439__auto____$1)){
var i = cljs.core._nth.call(null,c__5438__auto____$1,i__15632);
cljs.core.chunk_append.call(null,b__15633,new cljs.core.Keyword(null,"blank","blank",-1249652109));

var G__15638 = (i__15632 + (1));
i__15632 = G__15638;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15633),lettercomb$grid$make_rect_board_$_iter__15618_$_iter__15630.call(null,cljs.core.chunk_rest.call(null,s__15631__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15633),null);
}
} else {
var i = cljs.core.first.call(null,s__15631__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"blank","blank",-1249652109),lettercomb$grid$make_rect_board_$_iter__15618_$_iter__15630.call(null,cljs.core.rest.call(null,s__15631__$2)));
}
} else {
return null;
}
break;
}
});})(i__15620,j,c__5438__auto__,size__5439__auto__,b__15621,s__15619__$2,temp__4425__auto__))
,null,null));
});})(i__15620,j,c__5438__auto__,size__5439__auto__,b__15621,s__15619__$2,temp__4425__auto__))
;
return iter__5440__auto__.call(null,cljs.core.range.call(null,cols));
})()));

var G__15639 = (i__15620 + (1));
i__15620 = G__15639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15621),lettercomb$grid$make_rect_board_$_iter__15618.call(null,cljs.core.chunk_rest.call(null,s__15619__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15621),null);
}
} else {
var j = cljs.core.first.call(null,s__15619__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__5440__auto__ = ((function (j,s__15619__$2,temp__4425__auto__){
return (function lettercomb$grid$make_rect_board_$_iter__15618_$_iter__15634(s__15635){
return (new cljs.core.LazySeq(null,((function (j,s__15619__$2,temp__4425__auto__){
return (function (){
var s__15635__$1 = s__15635;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__15635__$1);
if(temp__4425__auto____$1){
var s__15635__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15635__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__15635__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__15637 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__15636 = (0);
while(true){
if((i__15636 < size__5439__auto__)){
var i = cljs.core._nth.call(null,c__5438__auto__,i__15636);
cljs.core.chunk_append.call(null,b__15637,new cljs.core.Keyword(null,"blank","blank",-1249652109));

var G__15640 = (i__15636 + (1));
i__15636 = G__15640;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15637),lettercomb$grid$make_rect_board_$_iter__15618_$_iter__15634.call(null,cljs.core.chunk_rest.call(null,s__15635__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15637),null);
}
} else {
var i = cljs.core.first.call(null,s__15635__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"blank","blank",-1249652109),lettercomb$grid$make_rect_board_$_iter__15618_$_iter__15634.call(null,cljs.core.rest.call(null,s__15635__$2)));
}
} else {
return null;
}
break;
}
});})(j,s__15619__$2,temp__4425__auto__))
,null,null));
});})(j,s__15619__$2,temp__4425__auto__))
;
return iter__5440__auto__.call(null,cljs.core.range.call(null,cols));
})()),lettercomb$grid$make_rect_board_$_iter__15618.call(null,cljs.core.rest.call(null,s__15619__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,cljs.core.range.call(null,rows));
})());
});
lettercomb.grid.get_odd_r = (function lettercomb$grid$get_odd_r(board,p__15641){
var vec__15643 = p__15641;
var col = cljs.core.nth.call(null,vec__15643,(0),null);
var row = cljs.core.nth.call(null,vec__15643,(1),null);

return cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
});
lettercomb.grid.odd_r_to_cube = (function lettercomb$grid$odd_r_to_cube(p__15644){
var vec__15646 = p__15644;
var q = cljs.core.nth.call(null,vec__15646,(0),null);
var r = cljs.core.nth.call(null,vec__15646,(1),null);

var x = (q - ((r - (r & (1))) / (2)));
var z = r;
var y = (((0) - x) - z);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
lettercomb.grid.axial_to_odd_r = (function lettercomb$grid$axial_to_odd_r(p__15647){
var vec__15649 = p__15647;
var x = cljs.core.nth.call(null,vec__15649,(0),null);
var z = cljs.core.nth.call(null,vec__15649,(1),null);
var q = (x + ((z - (z & (1))) / (2)));
var r = z;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null);
});
lettercomb.grid.cube_to_odd_r = (function lettercomb$grid$cube_to_odd_r(p__15650){
var vec__15652 = p__15650;
var x = cljs.core.nth.call(null,vec__15652,(0),null);
var y = cljs.core.nth.call(null,vec__15652,(1),null);
var z = cljs.core.nth.call(null,vec__15652,(2),null);
return lettercomb.grid.axial_to_odd_r.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,z], null));
});
lettercomb.grid.axial_to_cube = (function lettercomb$grid$axial_to_cube(p__15653){
var vec__15655 = p__15653;
var q = cljs.core.nth.call(null,vec__15655,(0),null);
var r = cljs.core.nth.call(null,vec__15655,(1),null);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,(((0) - q) - r),r], null);
});
lettercomb.grid.cube_to_axial = (function lettercomb$grid$cube_to_axial(p__15656){
var vec__15658 = p__15656;
var x = cljs.core.nth.call(null,vec__15658,(0),null);
var y = cljs.core.nth.call(null,vec__15658,(1),null);
var z = cljs.core.nth.call(null,vec__15658,(2),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,z], null);
});
lettercomb.grid.get_cube = (function lettercomb$grid$get_cube(board,xz){

var vec__15660 = lettercomb.grid.cube_to_odd_r.call(null,xz);
var q = cljs.core.nth.call(null,vec__15660,(0),null);
var r = cljs.core.nth.call(null,vec__15660,(1),null);
return cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,q], null));
});
lettercomb.grid.pixel_to_axial = (function lettercomb$grid$pixel_to_axial(p__15661,radius,p__15662){
var vec__15665 = p__15661;
var left = cljs.core.nth.call(null,vec__15665,(0),null);
var top = cljs.core.nth.call(null,vec__15665,(1),null);
var vec__15666 = p__15662;
var x = cljs.core.nth.call(null,vec__15666,(0),null);
var y = cljs.core.nth.call(null,vec__15666,(1),null);

var x__$1 = (x - left);
var y__$1 = (y - top);
var q = (((Math.sqrt((3)) * x__$1) - y__$1) / ((3) * radius));
var r = (((2) * y__$1) / ((3) * radius));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.round(q),Math.round(r)], null);
});
