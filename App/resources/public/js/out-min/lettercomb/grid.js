// Compiled by ClojureScript 1.7.170 {}
goog.provide('lettercomb.grid');
goog.require('cljs.core');
goog.require('cljs.core.match');
lettercomb.grid.make_rect_board = (function lettercomb$grid$make_rect_board(cols,rows){

return cljs.core.vec.call(null,(function (){var iter__5440__auto__ = (function lettercomb$grid$make_rect_board_$_iter__14171(s__14172){
return (new cljs.core.LazySeq(null,(function (){
var s__14172__$1 = s__14172;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14172__$1);
if(temp__4425__auto__){
var s__14172__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14172__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__14172__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__14174 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__14173 = (0);
while(true){
if((i__14173 < size__5439__auto__)){
var j = cljs.core._nth.call(null,c__5438__auto__,i__14173);
cljs.core.chunk_append.call(null,b__14174,cljs.core.vec.call(null,(function (){var iter__5440__auto__ = ((function (i__14173,j,c__5438__auto__,size__5439__auto__,b__14174,s__14172__$2,temp__4425__auto__){
return (function lettercomb$grid$make_rect_board_$_iter__14171_$_iter__14183(s__14184){
return (new cljs.core.LazySeq(null,((function (i__14173,j,c__5438__auto__,size__5439__auto__,b__14174,s__14172__$2,temp__4425__auto__){
return (function (){
var s__14184__$1 = s__14184;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__14184__$1);
if(temp__4425__auto____$1){
var s__14184__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14184__$2)){
var c__5438__auto____$1 = cljs.core.chunk_first.call(null,s__14184__$2);
var size__5439__auto____$1 = cljs.core.count.call(null,c__5438__auto____$1);
var b__14186 = cljs.core.chunk_buffer.call(null,size__5439__auto____$1);
if((function (){var i__14185 = (0);
while(true){
if((i__14185 < size__5439__auto____$1)){
var i = cljs.core._nth.call(null,c__5438__auto____$1,i__14185);
cljs.core.chunk_append.call(null,b__14186,new cljs.core.Keyword(null,"blank","blank",-1249652109));

var G__14191 = (i__14185 + (1));
i__14185 = G__14191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14186),lettercomb$grid$make_rect_board_$_iter__14171_$_iter__14183.call(null,cljs.core.chunk_rest.call(null,s__14184__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14186),null);
}
} else {
var i = cljs.core.first.call(null,s__14184__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"blank","blank",-1249652109),lettercomb$grid$make_rect_board_$_iter__14171_$_iter__14183.call(null,cljs.core.rest.call(null,s__14184__$2)));
}
} else {
return null;
}
break;
}
});})(i__14173,j,c__5438__auto__,size__5439__auto__,b__14174,s__14172__$2,temp__4425__auto__))
,null,null));
});})(i__14173,j,c__5438__auto__,size__5439__auto__,b__14174,s__14172__$2,temp__4425__auto__))
;
return iter__5440__auto__.call(null,cljs.core.range.call(null,cols));
})()));

var G__14192 = (i__14173 + (1));
i__14173 = G__14192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14174),lettercomb$grid$make_rect_board_$_iter__14171.call(null,cljs.core.chunk_rest.call(null,s__14172__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14174),null);
}
} else {
var j = cljs.core.first.call(null,s__14172__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,(function (){var iter__5440__auto__ = ((function (j,s__14172__$2,temp__4425__auto__){
return (function lettercomb$grid$make_rect_board_$_iter__14171_$_iter__14187(s__14188){
return (new cljs.core.LazySeq(null,((function (j,s__14172__$2,temp__4425__auto__){
return (function (){
var s__14188__$1 = s__14188;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__14188__$1);
if(temp__4425__auto____$1){
var s__14188__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14188__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__14188__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__14190 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__14189 = (0);
while(true){
if((i__14189 < size__5439__auto__)){
var i = cljs.core._nth.call(null,c__5438__auto__,i__14189);
cljs.core.chunk_append.call(null,b__14190,new cljs.core.Keyword(null,"blank","blank",-1249652109));

var G__14193 = (i__14189 + (1));
i__14189 = G__14193;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14190),lettercomb$grid$make_rect_board_$_iter__14171_$_iter__14187.call(null,cljs.core.chunk_rest.call(null,s__14188__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14190),null);
}
} else {
var i = cljs.core.first.call(null,s__14188__$2);
return cljs.core.cons.call(null,new cljs.core.Keyword(null,"blank","blank",-1249652109),lettercomb$grid$make_rect_board_$_iter__14171_$_iter__14187.call(null,cljs.core.rest.call(null,s__14188__$2)));
}
} else {
return null;
}
break;
}
});})(j,s__14172__$2,temp__4425__auto__))
,null,null));
});})(j,s__14172__$2,temp__4425__auto__))
;
return iter__5440__auto__.call(null,cljs.core.range.call(null,cols));
})()),lettercomb$grid$make_rect_board_$_iter__14171.call(null,cljs.core.rest.call(null,s__14172__$2)));
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
lettercomb.grid.get_odd_r = (function lettercomb$grid$get_odd_r(board,p__14194){
var vec__14196 = p__14194;
var col = cljs.core.nth.call(null,vec__14196,(0),null);
var row = cljs.core.nth.call(null,vec__14196,(1),null);

return cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
});
lettercomb.grid.odd_r_to_cube = (function lettercomb$grid$odd_r_to_cube(p__14197){
var vec__14199 = p__14197;
var q = cljs.core.nth.call(null,vec__14199,(0),null);
var r = cljs.core.nth.call(null,vec__14199,(1),null);

var x = (q - ((r - (r & (1))) / (2)));
var z = r;
var y = (((0) - x) - z);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
lettercomb.grid.axial_to_odd_r = (function lettercomb$grid$axial_to_odd_r(p__14200){
var vec__14202 = p__14200;
var x = cljs.core.nth.call(null,vec__14202,(0),null);
var z = cljs.core.nth.call(null,vec__14202,(1),null);
var q = (x + ((z - (z & (1))) / (2)));
var r = z;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null);
});
lettercomb.grid.cube_to_odd_r = (function lettercomb$grid$cube_to_odd_r(p__14203){
var vec__14205 = p__14203;
var x = cljs.core.nth.call(null,vec__14205,(0),null);
var y = cljs.core.nth.call(null,vec__14205,(1),null);
var z = cljs.core.nth.call(null,vec__14205,(2),null);
return lettercomb.grid.axial_to_odd_r.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,z], null));
});
lettercomb.grid.axial_to_cube = (function lettercomb$grid$axial_to_cube(p__14206){
var vec__14208 = p__14206;
var q = cljs.core.nth.call(null,vec__14208,(0),null);
var r = cljs.core.nth.call(null,vec__14208,(1),null);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,(((0) - q) - r),r], null);
});
lettercomb.grid.cube_to_axial = (function lettercomb$grid$cube_to_axial(p__14209){
var vec__14211 = p__14209;
var x = cljs.core.nth.call(null,vec__14211,(0),null);
var y = cljs.core.nth.call(null,vec__14211,(1),null);
var z = cljs.core.nth.call(null,vec__14211,(2),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,z], null);
});
lettercomb.grid.get_cube = (function lettercomb$grid$get_cube(board,xz){

var vec__14213 = lettercomb.grid.cube_to_odd_r.call(null,xz);
var q = cljs.core.nth.call(null,vec__14213,(0),null);
var r = cljs.core.nth.call(null,vec__14213,(1),null);
return cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,q], null));
});
lettercomb.grid.pixel_to_axial = (function lettercomb$grid$pixel_to_axial(p__14214,radius,p__14215){
var vec__14218 = p__14214;
var left = cljs.core.nth.call(null,vec__14218,(0),null);
var top = cljs.core.nth.call(null,vec__14218,(1),null);
var vec__14219 = p__14215;
var x = cljs.core.nth.call(null,vec__14219,(0),null);
var y = cljs.core.nth.call(null,vec__14219,(1),null);

var x__$1 = (x - left);
var y__$1 = (y - top);
var q = (((Math.sqrt((3)) * x__$1) - y__$1) / ((3) * radius));
var r = (((2) * y__$1) / ((3) * radius));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.round(q),Math.round(r)], null);
});
