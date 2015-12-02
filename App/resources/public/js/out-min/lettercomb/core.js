// Compiled by ClojureScript 1.7.170 {}
goog.provide('lettercomb.core');
goog.require('cljs.core');
goog.require('lettercomb.letters');
goog.require('lettercomb.grid');
goog.require('lettercomb.ternary_tree');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(cljs.core.truth_(window.ejecta)){
ejecta.include("resources/public/js/scrabble-words.js");
} else {
}
lettercomb.core.is_tv_QMARK_ = cljs.core.some_QMARK_.call(null,cljs.core.re_find.call(null,/AppleTV/,navigator.userAgent));
lettercomb.core.radius = (cljs.core.truth_(lettercomb.core.is_tv_QMARK_)?(48):(24));
lettercomb.core.line_width = (cljs.core.truth_(lettercomb.core.is_tv_QMARK_)?(4):(2));
lettercomb.core.angle = cljs.core.atom.call(null,Math.PI);
lettercomb.core.hovered_cell = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
lettercomb.core.open_cell = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
lettercomb.core.next_letter = cljs.core.atom.call(null,new cljs.core.Keyword(null,"A","A",-1688942394));
lettercomb.core.current_word_cells = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
lettercomb.core.touch_down_QMARK_ = cljs.core.atom.call(null,false);
lettercomb.core.score = cljs.core.atom.call(null,(0));
lettercomb.core.start_time = cljs.core.atom.call(null,null);
lettercomb.core.canvas = document.getElementById("canvas");
lettercomb.core.ctx = lettercomb.core.canvas.getContext("2d",{"antialias": lettercomb.core.is_tv_QMARK_, "antialiasSamples": (4)});
lettercomb.core.word_set = cljs.core.set.call(null,WORDS);
console.log(cljs.core.contains_QMARK_.call(null,lettercomb.core.word_set,"hello"));
lettercomb.core.window_width = (function lettercomb$core$window_width(){
return window.innerWidth;
});
lettercomb.core.window_height = (function lettercomb$core$window_height(){
return window.innerHeight;
});
lettercomb.core.hex_height = (function lettercomb$core$hex_height(radius){
return (2.0 * radius);
});
lettercomb.core.cos_pi_over_six = Math.cos((Math.PI / 6.0));
lettercomb.core.hex_width = (function lettercomb$core$hex_width(radius){
return ((2.0 * radius) * lettercomb.core.cos_pi_over_six);
});
lettercomb.core.board_h_count = (9);
lettercomb.core.board_v_count = (11);
lettercomb.core.board = cljs.core.atom.call(null,lettercomb.grid.make_rect_board.call(null,lettercomb.core.board_h_count,lettercomb.core.board_v_count));
lettercomb.core.left_top = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((lettercomb.core.window_width.call(null) - (lettercomb.core.board_h_count * lettercomb.core.hex_width.call(null,lettercomb.core.radius))) / (2)),((lettercomb.core.window_height.call(null) - ((0.75 * lettercomb.core.board_v_count) * lettercomb.core.hex_height.call(null,lettercomb.core.radius))) / (2))], null);
lettercomb.core.blacken_BANG_ = (function lettercomb$core$blacken_BANG_(ctx){
ctx.fillStyle = "#000";

return ctx.fillRect((0),(0),lettercomb.core.window_width.call(null),lettercomb.core.window_height.call(null));
});
lettercomb.core.rand_hex_str = (function lettercomb$core$rand_hex_str(){
return Math.round((Math.random() * (15))).toString((16));
});
lettercomb.core.rand_color_str = (function lettercomb$core$rand_color_str(){
return [cljs.core.str("#"),cljs.core.str(lettercomb.core.rand_hex_str.call(null)),cljs.core.str(lettercomb.core.rand_hex_str.call(null)),cljs.core.str(lettercomb.core.rand_hex_str.call(null))].join('');
});
lettercomb.core.hex_point = (function lettercomb$core$hex_point(p__14235,radius,i){
var vec__14237 = p__14235;
var cx = cljs.core.nth.call(null,vec__14237,(0),null);
var cy = cljs.core.nth.call(null,vec__14237,(1),null);

var angle = ((Math.PI / 3.0) * (i + 0.5));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + (radius * Math.cos(angle))),(cy + (radius * Math.sin(angle)))], null);
});
lettercomb.core.hexagon = (function lettercomb$core$hexagon(center,radius){
var iter__5440__auto__ = (function lettercomb$core$hexagon_$_iter__14242(s__14243){
return (new cljs.core.LazySeq(null,(function (){
var s__14243__$1 = s__14243;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14243__$1);
if(temp__4425__auto__){
var s__14243__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14243__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__14243__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__14245 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__14244 = (0);
while(true){
if((i__14244 < size__5439__auto__)){
var i = cljs.core._nth.call(null,c__5438__auto__,i__14244);
cljs.core.chunk_append.call(null,b__14245,lettercomb.core.hex_point.call(null,center,radius,i));

var G__14246 = (i__14244 + (1));
i__14244 = G__14246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14245),lettercomb$core$hexagon_$_iter__14242.call(null,cljs.core.chunk_rest.call(null,s__14243__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14245),null);
}
} else {
var i = cljs.core.first.call(null,s__14243__$2);
return cljs.core.cons.call(null,lettercomb.core.hex_point.call(null,center,radius,i),lettercomb$core$hexagon_$_iter__14242.call(null,cljs.core.rest.call(null,s__14243__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,cljs.core.range.call(null,(7)));
});
lettercomb.core.move_to_BANG_ = (function lettercomb$core$move_to_BANG_(ctx,p__14247){
var vec__14249 = p__14247;
var x = cljs.core.nth.call(null,vec__14249,(0),null);
var y = cljs.core.nth.call(null,vec__14249,(1),null);
return ctx.moveTo(x,y);
});
lettercomb.core.line_to_BANG_ = (function lettercomb$core$line_to_BANG_(ctx,p__14250){
var vec__14252 = p__14250;
var x = cljs.core.nth.call(null,vec__14252,(0),null);
var y = cljs.core.nth.call(null,vec__14252,(1),null);
return ctx.lineTo(x,y);
});
lettercomb.core.score_location = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(32)], null);
lettercomb.core.draw_score_BANG_ = (function lettercomb$core$draw_score_BANG_(ctx,score){
ctx.save();

ctx.fillStyle = "#fff";

ctx.fillText([cljs.core.str(score),cljs.core.str(" pts")].join(''),lettercomb.core.score_location.call(null,(0)),lettercomb.core.score_location.call(null,(1)));

return ctx.restore();
});
lettercomb.core.pad = (function lettercomb$core$pad(val,padding,size){
var str_val = [cljs.core.str(val)].join('');
var len = cljs.core.count.call(null,str_val);
var pad_size = (function (){var x__4999__auto__ = (0);
var y__5000__auto__ = (size - len);
return ((x__4999__auto__ > y__5000__auto__) ? x__4999__auto__ : y__5000__auto__);
})();
return cljs.core.apply.call(null,cljs.core.str,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,pad_size,padding)),str_val));
});
lettercomb.core.timer_location = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(lettercomb.core.window_width.call(null) - (32)),(32)], null);
lettercomb.core.draw_timer_BANG_ = (function lettercomb$core$draw_timer_BANG_(ctx,seconds_left){
ctx.save();

ctx.fillStyle = "#fff";

ctx.textAlign = "end";

var mins_14253 = Math.floor((seconds_left / (60)));
var secs_14254 = cljs.core.mod.call(null,seconds_left,(60));
ctx.fillText([cljs.core.str(lettercomb.core.pad.call(null,mins_14253,"0",(2))),cljs.core.str(":"),cljs.core.str(lettercomb.core.pad.call(null,secs_14254,"0",(2)))].join(''),lettercomb.core.timer_location.call(null,(0)),lettercomb.core.timer_location.call(null,(1)));

return ctx.restore();
});
lettercomb.core.font_size = ((lettercomb.core.radius * (2)) / (3));
lettercomb.core.q_font_size = (lettercomb.core.font_size / (4));
lettercomb.core.menu_size = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(lettercomb.core.radius * (4)),(lettercomb.core.radius * 1.5)], null);
lettercomb.core.menu_position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((lettercomb.core.window_width.call(null) / (2)) - (lettercomb.core.menu_size.call(null,(0)) / (2))),((lettercomb.core.window_height.call(null) - lettercomb.core.menu_size.call(null,(1))) - (lettercomb.core.radius * 0.5))], null);
lettercomb.core.draw_menu_BANG_ = (function lettercomb$core$draw_menu_BANG_(ctx){
ctx.save();

ctx.fillStyle = "#000";

ctx.beginPath();

ctx.rect(lettercomb.core.menu_position.call(null,(0)),lettercomb.core.menu_position.call(null,(1)),lettercomb.core.menu_size.call(null,(0)),lettercomb.core.menu_size.call(null,(1)));

ctx.lineWidth = lettercomb.core.line_width;

ctx.strokeStyle = "#fff";

ctx.fill();

ctx.stroke();

ctx.fillStyle = "#fff";

ctx.textAlign = "center";

ctx.textBaseline = "middle";

ctx.fillText("MENU",(lettercomb.core.menu_position.call(null,(0)) + (lettercomb.core.menu_size.call(null,(0)) * 0.5)),(lettercomb.core.menu_position.call(null,(1)) + (lettercomb.core.menu_size.call(null,(1)) * 0.5)));

return ctx.restore();
});
lettercomb.core.draw_hexagon_BANG_ = (function lettercomb$core$draw_hexagon_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___14265 = arguments.length;
var i__5727__auto___14266 = (0);
while(true){
if((i__5727__auto___14266 < len__5726__auto___14265)){
args__5733__auto__.push((arguments[i__5727__auto___14266]));

var G__14267 = (i__5727__auto___14266 + (1));
i__5727__auto___14266 = G__14267;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return lettercomb.core.draw_hexagon_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

lettercomb.core.draw_hexagon_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,center,radius,p__14259){
var vec__14260 = p__14259;
var fill_color = cljs.core.nth.call(null,vec__14260,(0),null);
ctx.beginPath();

ctx.fillStyle = (function (){var or__4668__auto__ = fill_color;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return "#000";
}
})();

lettercomb.core.move_to_BANG_.call(null,ctx,lettercomb.core.hex_point.call(null,center,radius,(0)));

var seq__14261_14268 = cljs.core.seq.call(null,cljs.core.range.call(null,(7)));
var chunk__14262_14269 = null;
var count__14263_14270 = (0);
var i__14264_14271 = (0);
while(true){
if((i__14264_14271 < count__14263_14270)){
var i_14272 = cljs.core._nth.call(null,chunk__14262_14269,i__14264_14271);
lettercomb.core.line_to_BANG_.call(null,ctx,lettercomb.core.hex_point.call(null,center,radius,i_14272));

var G__14273 = seq__14261_14268;
var G__14274 = chunk__14262_14269;
var G__14275 = count__14263_14270;
var G__14276 = (i__14264_14271 + (1));
seq__14261_14268 = G__14273;
chunk__14262_14269 = G__14274;
count__14263_14270 = G__14275;
i__14264_14271 = G__14276;
continue;
} else {
var temp__4425__auto___14277 = cljs.core.seq.call(null,seq__14261_14268);
if(temp__4425__auto___14277){
var seq__14261_14278__$1 = temp__4425__auto___14277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14261_14278__$1)){
var c__5471__auto___14279 = cljs.core.chunk_first.call(null,seq__14261_14278__$1);
var G__14280 = cljs.core.chunk_rest.call(null,seq__14261_14278__$1);
var G__14281 = c__5471__auto___14279;
var G__14282 = cljs.core.count.call(null,c__5471__auto___14279);
var G__14283 = (0);
seq__14261_14268 = G__14280;
chunk__14262_14269 = G__14281;
count__14263_14270 = G__14282;
i__14264_14271 = G__14283;
continue;
} else {
var i_14284 = cljs.core.first.call(null,seq__14261_14278__$1);
lettercomb.core.line_to_BANG_.call(null,ctx,lettercomb.core.hex_point.call(null,center,radius,i_14284));

var G__14285 = cljs.core.next.call(null,seq__14261_14278__$1);
var G__14286 = null;
var G__14287 = (0);
var G__14288 = (0);
seq__14261_14268 = G__14285;
chunk__14262_14269 = G__14286;
count__14263_14270 = G__14287;
i__14264_14271 = G__14288;
continue;
}
} else {
}
}
break;
}

ctx.fill();

return ctx.stroke();
});

lettercomb.core.draw_hexagon_BANG_.cljs$lang$maxFixedArity = (3);

lettercomb.core.draw_hexagon_BANG_.cljs$lang$applyTo = (function (seq14255){
var G__14256 = cljs.core.first.call(null,seq14255);
var seq14255__$1 = cljs.core.next.call(null,seq14255);
var G__14257 = cljs.core.first.call(null,seq14255__$1);
var seq14255__$2 = cljs.core.next.call(null,seq14255__$1);
var G__14258 = cljs.core.first.call(null,seq14255__$2);
var seq14255__$3 = cljs.core.next.call(null,seq14255__$2);
return lettercomb.core.draw_hexagon_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14256,G__14257,G__14258,seq14255__$3);
});
lettercomb.core.draw_letter_BANG_ = (function lettercomb$core$draw_letter_BANG_(ctx,p__14289,letter){
var vec__14291 = p__14289;
var cx = cljs.core.nth.call(null,vec__14291,(0),null);
var cy = cljs.core.nth.call(null,vec__14291,(1),null);
return ctx.fillText(letter,(cx - lettercomb.core.q_font_size),(cy + lettercomb.core.q_font_size));
});
lettercomb.core.letter_color = (function lettercomb$core$letter_color(letter){

return lettercomb.letters.point_colors.call(null,cljs.core.get.call(null,lettercomb.letters.letter_points,letter,"#000"));
});
lettercomb.core.draw_letter_hex_BANG_ = (function lettercomb$core$draw_letter_hex_BANG_(ctx,center,radius,letter,color){
lettercomb.core.draw_hexagon_BANG_.call(null,ctx,center,radius,color);

ctx.fillStyle = "#fff";

return lettercomb.core.draw_letter_BANG_.call(null,ctx,center,cljs.core.name.call(null,letter));
});
lettercomb.core.center_at = (function lettercomb$core$center_at(p__14292,p__14293,radius){
var vec__14296 = p__14292;
var col = cljs.core.nth.call(null,vec__14296,(0),null);
var row = cljs.core.nth.call(null,vec__14296,(1),null);
var vec__14297 = p__14293;
var left = cljs.core.nth.call(null,vec__14297,(0),null);
var top = cljs.core.nth.call(null,vec__14297,(1),null);
var hex_w = lettercomb.core.hex_width.call(null,radius);
var y_offset = (((3) * 0.5) * radius);
var x_offset = ((cljs.core.odd_QMARK_.call(null,row))?(hex_w / 2.0):(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((left + (col * hex_w)) + x_offset),(top + (row * y_offset))], null);
});
lettercomb.core.fill_board_BANG_ = (function lettercomb$core$fill_board_BANG_(ctx,board,left_top,radius){

var seq__14310 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,board)));
var chunk__14315 = null;
var count__14316 = (0);
var i__14317 = (0);
while(true){
if((i__14317 < count__14316)){
var row = cljs.core._nth.call(null,chunk__14315,i__14317);
var seq__14318_14322 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.nth.call(null,board,row))));
var chunk__14319_14323 = null;
var count__14320_14324 = (0);
var i__14321_14325 = (0);
while(true){
if((i__14321_14325 < count__14320_14324)){
var col_14326 = cljs.core._nth.call(null,chunk__14319_14323,i__14321_14325);
var center_14327 = lettercomb.core.center_at.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_14326,row], null),left_top,radius);
var letter_14328 = lettercomb.grid.get_odd_r.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_14326,row], null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blank","blank",-1249652109),letter_14328)){
lettercomb.core.draw_hexagon_BANG_.call(null,ctx,center_14327,radius,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,lettercomb.core.open_cell),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_14326,row], null)))?"#fff":"#000"));
} else {
var color_14329 = ((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.deref.call(null,lettercomb.core.current_word_cells)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_14326,row], null)))?lettercomb.letters.darken.call(null,lettercomb.core.letter_color.call(null,letter_14328)):lettercomb.core.letter_color.call(null,letter_14328));
lettercomb.core.draw_letter_hex_BANG_.call(null,ctx,center_14327,radius,letter_14328,color_14329);
}

var G__14330 = seq__14318_14322;
var G__14331 = chunk__14319_14323;
var G__14332 = count__14320_14324;
var G__14333 = (i__14321_14325 + (1));
seq__14318_14322 = G__14330;
chunk__14319_14323 = G__14331;
count__14320_14324 = G__14332;
i__14321_14325 = G__14333;
continue;
} else {
var temp__4425__auto___14334 = cljs.core.seq.call(null,seq__14318_14322);
if(temp__4425__auto___14334){
var seq__14318_14335__$1 = temp__4425__auto___14334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14318_14335__$1)){
var c__5471__auto___14336 = cljs.core.chunk_first.call(null,seq__14318_14335__$1);
var G__14337 = cljs.core.chunk_rest.call(null,seq__14318_14335__$1);
var G__14338 = c__5471__auto___14336;
var G__14339 = cljs.core.count.call(null,c__5471__auto___14336);
var G__14340 = (0);
seq__14318_14322 = G__14337;
chunk__14319_14323 = G__14338;
count__14320_14324 = G__14339;
i__14321_14325 = G__14340;
continue;
} else {
var col_14341 = cljs.core.first.call(null,seq__14318_14335__$1);
var center_14342 = lettercomb.core.center_at.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_14341,row], null),left_top,radius);
var letter_14343 = lettercomb.grid.get_odd_r.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_14341,row], null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blank","blank",-1249652109),letter_14343)){
lettercomb.core.draw_hexagon_BANG_.call(null,ctx,center_14342,radius,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,lettercomb.core.open_cell),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_14341,row], null)))?"#fff":"#000"));
} else {
var color_14344 = ((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.deref.call(null,lettercomb.core.current_word_cells)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_14341,row], null)))?lettercomb.letters.darken.call(null,lettercomb.core.letter_color.call(null,letter_14343)):lettercomb.core.letter_color.call(null,letter_14343));
lettercomb.core.draw_letter_hex_BANG_.call(null,ctx,center_14342,radius,letter_14343,color_14344);
}

var G__14345 = cljs.core.next.call(null,seq__14318_14335__$1);
var G__14346 = null;
var G__14347 = (0);
var G__14348 = (0);
seq__14318_14322 = G__14345;
chunk__14319_14323 = G__14346;
count__14320_14324 = G__14347;
i__14321_14325 = G__14348;
continue;
}
} else {
}
}
break;
}

var G__14349 = seq__14310;
var G__14350 = chunk__14315;
var G__14351 = count__14316;
var G__14352 = (i__14317 + (1));
seq__14310 = G__14349;
chunk__14315 = G__14350;
count__14316 = G__14351;
i__14317 = G__14352;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14310);
if(temp__4425__auto__){
var seq__14310__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14310__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__14310__$1);
var G__14353 = cljs.core.chunk_rest.call(null,seq__14310__$1);
var G__14354 = c__5471__auto__;
var G__14355 = cljs.core.count.call(null,c__5471__auto__);
var G__14356 = (0);
seq__14310 = G__14353;
chunk__14315 = G__14354;
count__14316 = G__14355;
i__14317 = G__14356;
continue;
} else {
var row = cljs.core.first.call(null,seq__14310__$1);
var seq__14311_14357 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.nth.call(null,board,row))));
var chunk__14312_14358 = null;
var count__14313_14359 = (0);
var i__14314_14360 = (0);
while(true){
if((i__14314_14360 < count__14313_14359)){
var col_14361 = cljs.core._nth.call(null,chunk__14312_14358,i__14314_14360);
var center_14362 = lettercomb.core.center_at.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_14361,row], null),left_top,radius);
var letter_14363 = lettercomb.grid.get_odd_r.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_14361,row], null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blank","blank",-1249652109),letter_14363)){
lettercomb.core.draw_hexagon_BANG_.call(null,ctx,center_14362,radius,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,lettercomb.core.open_cell),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_14361,row], null)))?"#fff":"#000"));
} else {
var color_14364 = ((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.deref.call(null,lettercomb.core.current_word_cells)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_14361,row], null)))?lettercomb.letters.darken.call(null,lettercomb.core.letter_color.call(null,letter_14363)):lettercomb.core.letter_color.call(null,letter_14363));
lettercomb.core.draw_letter_hex_BANG_.call(null,ctx,center_14362,radius,letter_14363,color_14364);
}

var G__14365 = seq__14311_14357;
var G__14366 = chunk__14312_14358;
var G__14367 = count__14313_14359;
var G__14368 = (i__14314_14360 + (1));
seq__14311_14357 = G__14365;
chunk__14312_14358 = G__14366;
count__14313_14359 = G__14367;
i__14314_14360 = G__14368;
continue;
} else {
var temp__4425__auto___14369__$1 = cljs.core.seq.call(null,seq__14311_14357);
if(temp__4425__auto___14369__$1){
var seq__14311_14370__$1 = temp__4425__auto___14369__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14311_14370__$1)){
var c__5471__auto___14371 = cljs.core.chunk_first.call(null,seq__14311_14370__$1);
var G__14372 = cljs.core.chunk_rest.call(null,seq__14311_14370__$1);
var G__14373 = c__5471__auto___14371;
var G__14374 = cljs.core.count.call(null,c__5471__auto___14371);
var G__14375 = (0);
seq__14311_14357 = G__14372;
chunk__14312_14358 = G__14373;
count__14313_14359 = G__14374;
i__14314_14360 = G__14375;
continue;
} else {
var col_14376 = cljs.core.first.call(null,seq__14311_14370__$1);
var center_14377 = lettercomb.core.center_at.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_14376,row], null),left_top,radius);
var letter_14378 = lettercomb.grid.get_odd_r.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_14376,row], null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blank","blank",-1249652109),letter_14378)){
lettercomb.core.draw_hexagon_BANG_.call(null,ctx,center_14377,radius,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,lettercomb.core.open_cell),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_14376,row], null)))?"#fff":"#000"));
} else {
var color_14379 = ((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.deref.call(null,lettercomb.core.current_word_cells)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_14376,row], null)))?lettercomb.letters.darken.call(null,lettercomb.core.letter_color.call(null,letter_14378)):lettercomb.core.letter_color.call(null,letter_14378));
lettercomb.core.draw_letter_hex_BANG_.call(null,ctx,center_14377,radius,letter_14378,color_14379);
}

var G__14380 = cljs.core.next.call(null,seq__14311_14370__$1);
var G__14381 = null;
var G__14382 = (0);
var G__14383 = (0);
seq__14311_14357 = G__14380;
chunk__14312_14358 = G__14381;
count__14313_14359 = G__14382;
i__14314_14360 = G__14383;
continue;
}
} else {
}
}
break;
}

var G__14384 = cljs.core.next.call(null,seq__14310__$1);
var G__14385 = null;
var G__14386 = (0);
var G__14387 = (0);
seq__14310 = G__14384;
chunk__14315 = G__14385;
count__14316 = G__14386;
i__14317 = G__14387;
continue;
}
} else {
return null;
}
}
break;
}
});
lettercomb.core.board_center = (function lettercomb$core$board_center(board,left_top,radius){
var mid_row = Math.floor((cljs.core.count.call(null,board) / (2)));
var mid_col = Math.floor((cljs.core.count.call(null,board.call(null,(0))) / (2)));
return lettercomb.core.center_at.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mid_col,mid_row], null),left_top,radius);
});
lettercomb.core.draw_cannon_BANG_ = (function lettercomb$core$draw_cannon_BANG_(ctx,center,radius,angle,next_letter){
ctx.save();

ctx.translate(center.call(null,(0)),center.call(null,(1)));

ctx.rotate(angle);

ctx.translate(((-1) * center.call(null,(0))),((-1) * center.call(null,(1))));

lettercomb.core.draw_hexagon_BANG_.call(null,ctx,center,radius,"#fff");

lettercomb.core.draw_hexagon_BANG_.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [center.call(null,(0)),(center.call(null,(1)) - radius)], null),radius,"#fff");

ctx.restore();

ctx.fillStyle = "#000";

return lettercomb.core.draw_letter_BANG_.call(null,ctx,center,cljs.core.name.call(null,next_letter));
});
lettercomb.core.playing_QMARK_ = cljs.core.atom.call(null,true);
lettercomb.core.play_BANG_ = (function lettercomb$core$play_BANG_(){
return cljs.core.reset_BANG_.call(null,lettercomb.core.playing_QMARK_,true);
});
lettercomb.core.pause_BANG_ = (function lettercomb$core$pause_BANG_(){
return cljs.core.reset_BANG_.call(null,lettercomb.core.playing_QMARK_,false);
});
lettercomb.core.e__GT_v = (function lettercomb$core$e__GT_v(e){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(e.pageX - lettercomb.core.canvas.offsetLeft),(e.pageY - lettercomb.core.canvas.offsetTop)], null);
});
lettercomb.core.v__GT_angle = (function lettercomb$core$v__GT_angle(p__14388,p__14389){
var vec__14392 = p__14388;
var cx = cljs.core.nth.call(null,vec__14392,(0),null);
var cy = cljs.core.nth.call(null,vec__14392,(1),null);
var vec__14393 = p__14389;
var ex = cljs.core.nth.call(null,vec__14393,(0),null);
var ey = cljs.core.nth.call(null,vec__14393,(1),null);

return Math.atan2((ex - cx),(cy - ey));
});
lettercomb.core.v__GT_odd_r = (function lettercomb$core$v__GT_odd_r(v){
return cljs.core.comp.call(null,lettercomb.grid.axial_to_odd_r,cljs.core.partial.call(null,lettercomb.grid.pixel_to_axial,lettercomb.core.left_top,lettercomb.core.radius)).call(null,v);
});
lettercomb.core.next_coord = (function lettercomb$core$next_coord(angle,delta,p__14394){
var vec__14396 = p__14394;
var x = cljs.core.nth.call(null,vec__14396,(0),null);
var y = cljs.core.nth.call(null,vec__14396,(1),null);

var next_x = (x + (Math.sin(angle) * delta));
var next_y = (y - (Math.cos(angle) * delta));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_x,next_y], null);
});
lettercomb.core.out_of_bounds_QMARK_ = (function lettercomb$core$out_of_bounds_QMARK_(board,point){
return (lettercomb.grid.get_odd_r.call(null,board,point) == null);
});
lettercomb.core.occupied_QMARK_ = (function lettercomb$core$occupied_QMARK_(board,cell){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"blank","blank",-1249652109),lettercomb.grid.get_odd_r.call(null,board,cell));
});
lettercomb.core.canvas_offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lettercomb.core.canvas.offsetLeft,lettercomb.core.canvas.offsetTop], null);
lettercomb.core.the_center = lettercomb.core.board_center.call(null,cljs.core.deref.call(null,lettercomb.core.board),lettercomb.core.left_top,lettercomb.core.radius);
lettercomb.core.page_center = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(lettercomb.core.the_center.call(null,(0)) + lettercomb.core.canvas_offset.call(null,(0))),(lettercomb.core.the_center.call(null,(1)) + lettercomb.core.canvas_offset.call(null,(1)))], null);
lettercomb.core.destination_cell = (function lettercomb$core$destination_cell(var_args){
var args__5733__auto__ = [];
var len__5726__auto___14403 = arguments.length;
var i__5727__auto___14404 = (0);
while(true){
if((i__5727__auto___14404 < len__5726__auto___14403)){
args__5733__auto__.push((arguments[i__5727__auto___14404]));

var G__14405 = (i__5727__auto___14404 + (1));
i__5727__auto___14404 = G__14405;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return lettercomb.core.destination_cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

lettercomb.core.destination_cell.cljs$core$IFn$_invoke$arity$variadic = (function (board,angle,delta,point){
while(true){
var point__$1 = (function (){var or__4668__auto__ = point;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return lettercomb.core.page_center;
}
})();
var current_cell = lettercomb.core.v__GT_odd_r.call(null,point__$1);
var vec__14401 = lettercomb.core.next_coord.call(null,angle,delta,point__$1);
var x = cljs.core.nth.call(null,vec__14401,(0),null);
var y = cljs.core.nth.call(null,vec__14401,(1),null);
var dest_coords = vec__14401;
var vec__14402 = lettercomb.core.v__GT_odd_r.call(null,dest_coords);
var col = cljs.core.nth.call(null,vec__14402,(0),null);
var row = cljs.core.nth.call(null,vec__14402,(1),null);
var dest_cell = vec__14402;
if(cljs.core.truth_((function (){var or__4668__auto__ = lettercomb.core.occupied_QMARK_.call(null,board,dest_cell);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return lettercomb.core.out_of_bounds_QMARK_.call(null,board,dest_cell);
}
})())){
if(cljs.core.not.call(null,(function (){var or__4668__auto__ = lettercomb.core.occupied_QMARK_.call(null,board,current_cell);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return lettercomb.core.out_of_bounds_QMARK_.call(null,board,current_cell);
}
})())){
return current_cell;
} else {
return null;
}
} else {
var G__14406 = board;
var G__14407 = angle;
var G__14408 = delta;
var G__14409 = dest_coords;
board = G__14406;
angle = G__14407;
delta = G__14408;
point = G__14409;
continue;
}
break;
}
});

lettercomb.core.destination_cell.cljs$lang$maxFixedArity = (3);

lettercomb.core.destination_cell.cljs$lang$applyTo = (function (seq14397){
var G__14398 = cljs.core.first.call(null,seq14397);
var seq14397__$1 = cljs.core.next.call(null,seq14397);
var G__14399 = cljs.core.first.call(null,seq14397__$1);
var seq14397__$2 = cljs.core.next.call(null,seq14397__$1);
var G__14400 = cljs.core.first.call(null,seq14397__$2);
var seq14397__$3 = cljs.core.next.call(null,seq14397__$2);
return lettercomb.core.destination_cell.cljs$core$IFn$_invoke$arity$variadic(G__14398,G__14399,G__14400,seq14397__$3);
});
lettercomb.core.write_letter_BANG_ = (function lettercomb$core$write_letter_BANG_(a_board,p__14410,letter_kw){
var vec__14412 = p__14410;
var col = cljs.core.nth.call(null,vec__14412,(0),null);
var row = cljs.core.nth.call(null,vec__14412,(1),null);
return cljs.core.swap_BANG_.call(null,a_board,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),letter_kw);
});
lettercomb.core.clear_cell_BANG_ = (function lettercomb$core$clear_cell_BANG_(a_board,cell){
return lettercomb.core.write_letter_BANG_.call(null,a_board,cell,new cljs.core.Keyword(null,"blank","blank",-1249652109));
});
lettercomb.core.write_word_BANG_ = (function lettercomb$core$write_word_BANG_(a_board,p__14413,word){
var vec__14419 = p__14413;
var start_col = cljs.core.nth.call(null,vec__14419,(0),null);
var start_row = cljs.core.nth.call(null,vec__14419,(1),null);
var up_word = word.toUpperCase();
var seq__14420 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,up_word)));
var chunk__14421 = null;
var count__14422 = (0);
var i__14423 = (0);
while(true){
if((i__14423 < count__14422)){
var i = cljs.core._nth.call(null,chunk__14421,i__14423);
lettercomb.core.write_letter_BANG_.call(null,a_board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + start_col),start_row], null),cljs.core.keyword.call(null,cljs.core.nth.call(null,up_word,i)));

var G__14424 = seq__14420;
var G__14425 = chunk__14421;
var G__14426 = count__14422;
var G__14427 = (i__14423 + (1));
seq__14420 = G__14424;
chunk__14421 = G__14425;
count__14422 = G__14426;
i__14423 = G__14427;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14420);
if(temp__4425__auto__){
var seq__14420__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14420__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__14420__$1);
var G__14428 = cljs.core.chunk_rest.call(null,seq__14420__$1);
var G__14429 = c__5471__auto__;
var G__14430 = cljs.core.count.call(null,c__5471__auto__);
var G__14431 = (0);
seq__14420 = G__14428;
chunk__14421 = G__14429;
count__14422 = G__14430;
i__14423 = G__14431;
continue;
} else {
var i = cljs.core.first.call(null,seq__14420__$1);
lettercomb.core.write_letter_BANG_.call(null,a_board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + start_col),start_row], null),cljs.core.keyword.call(null,cljs.core.nth.call(null,up_word,i)));

var G__14432 = cljs.core.next.call(null,seq__14420__$1);
var G__14433 = null;
var G__14434 = (0);
var G__14435 = (0);
seq__14420 = G__14432;
chunk__14421 = G__14433;
count__14422 = G__14434;
i__14423 = G__14435;
continue;
}
} else {
return null;
}
}
break;
}
});
lettercomb.core.pick_random_letter_BANG_ = (function lettercomb$core$pick_random_letter_BANG_(){
return cljs.core.reset_BANG_.call(null,lettercomb.core.next_letter,lettercomb.letters.rand_letter.call(null));
});
lettercomb.core.hover_cell_BANG_ = (function lettercomb$core$hover_cell_BANG_(e){
var v = lettercomb.core.e__GT_v.call(null,e);
var coord = lettercomb.core.v__GT_odd_r.call(null,v);
return cljs.core.reset_BANG_.call(null,lettercomb.core.hovered_cell,coord);
});
lettercomb.core.handle_angle = (function lettercomb$core$handle_angle(new_angle){
cljs.core.reset_BANG_.call(null,lettercomb.core.angle,new_angle);

var temp__4425__auto__ = lettercomb.core.destination_cell.call(null,cljs.core.deref.call(null,lettercomb.core.board),new_angle,(0.5 * lettercomb.core.radius));
if(cljs.core.truth_(temp__4425__auto__)){
var dest = temp__4425__auto__;
return cljs.core.reset_BANG_.call(null,lettercomb.core.open_cell,dest);
} else {
return null;
}
});
lettercomb.core.handle_move = (function lettercomb$core$handle_move(e){
var v_14436 = lettercomb.core.e__GT_v.call(null,e);
var new_angle_14437 = lettercomb.core.v__GT_angle.call(null,lettercomb.core.page_center,v_14436);
lettercomb.core.handle_angle.call(null,new_angle_14437);

if(cljs.core.truth_(cljs.core.deref.call(null,lettercomb.core.touch_down_QMARK_))){
lettercomb.core.hover_cell_BANG_.call(null,e);

if(cljs.core.truth_(lettercomb.core.occupied_QMARK_.call(null,cljs.core.deref.call(null,lettercomb.core.board),cljs.core.deref.call(null,lettercomb.core.hovered_cell)))){
if((!(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,lettercomb.core.current_word_cells)))) && (!(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.deref.call(null,lettercomb.core.current_word_cells)),cljs.core.deref.call(null,lettercomb.core.hovered_cell))))){
return cljs.core.swap_BANG_.call(null,lettercomb.core.current_word_cells,cljs.core.conj,cljs.core.deref.call(null,lettercomb.core.hovered_cell));
} else {
return null;
}
} else {
return cljs.core.reset_BANG_.call(null,lettercomb.core.current_word_cells,cljs.core.PersistentVector.EMPTY);
}
} else {
return null;
}
});
lettercomb.core.first_touch = (function lettercomb$core$first_touch(e){
return cljs.core.first.call(null,e.changedTouches);
});
lettercomb.core.handle_touch_move = (function lettercomb$core$handle_touch_move(e){
var touch = lettercomb.core.first_touch.call(null,e);
return lettercomb.core.handle_move.call(null,touch);
});
lettercomb.core.selected_word = (function lettercomb$core$selected_word(board,word_cells){
return clojure.string.lower_case.call(null,cljs.core.apply.call(null,cljs.core.str,(function (){var iter__5440__auto__ = (function lettercomb$core$selected_word_$_iter__14442(s__14443){
return (new cljs.core.LazySeq(null,(function (){
var s__14443__$1 = s__14443;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14443__$1);
if(temp__4425__auto__){
var s__14443__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14443__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__14443__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__14445 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__14444 = (0);
while(true){
if((i__14444 < size__5439__auto__)){
var cell = cljs.core._nth.call(null,c__5438__auto__,i__14444);
cljs.core.chunk_append.call(null,b__14445,cljs.core.name.call(null,(function (){var or__4668__auto__ = lettercomb.grid.get_odd_r.call(null,board,cell);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return "";
}
})()));

var G__14446 = (i__14444 + (1));
i__14444 = G__14446;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14445),lettercomb$core$selected_word_$_iter__14442.call(null,cljs.core.chunk_rest.call(null,s__14443__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14445),null);
}
} else {
var cell = cljs.core.first.call(null,s__14443__$2);
return cljs.core.cons.call(null,cljs.core.name.call(null,(function (){var or__4668__auto__ = lettercomb.grid.get_odd_r.call(null,board,cell);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return "";
}
})()),lettercomb$core$selected_word_$_iter__14442.call(null,cljs.core.rest.call(null,s__14443__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,word_cells);
})()));
});
lettercomb.core.clear_selected_word_BANG_ = (function lettercomb$core$clear_selected_word_BANG_(a_board,word_cells){
var seq__14451 = cljs.core.seq.call(null,word_cells);
var chunk__14452 = null;
var count__14453 = (0);
var i__14454 = (0);
while(true){
if((i__14454 < count__14453)){
var cell = cljs.core._nth.call(null,chunk__14452,i__14454);
lettercomb.core.clear_cell_BANG_.call(null,a_board,cell);

var G__14455 = seq__14451;
var G__14456 = chunk__14452;
var G__14457 = count__14453;
var G__14458 = (i__14454 + (1));
seq__14451 = G__14455;
chunk__14452 = G__14456;
count__14453 = G__14457;
i__14454 = G__14458;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14451);
if(temp__4425__auto__){
var seq__14451__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14451__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__14451__$1);
var G__14459 = cljs.core.chunk_rest.call(null,seq__14451__$1);
var G__14460 = c__5471__auto__;
var G__14461 = cljs.core.count.call(null,c__5471__auto__);
var G__14462 = (0);
seq__14451 = G__14459;
chunk__14452 = G__14460;
count__14453 = G__14461;
i__14454 = G__14462;
continue;
} else {
var cell = cljs.core.first.call(null,seq__14451__$1);
lettercomb.core.clear_cell_BANG_.call(null,a_board,cell);

var G__14463 = cljs.core.next.call(null,seq__14451__$1);
var G__14464 = null;
var G__14465 = (0);
var G__14466 = (0);
seq__14451 = G__14463;
chunk__14452 = G__14464;
count__14453 = G__14465;
i__14454 = G__14466;
continue;
}
} else {
return null;
}
}
break;
}
});
lettercomb.core.increase_score_BANG_ = (function lettercomb$core$increase_score_BANG_(added_score){
return cljs.core.swap_BANG_.call(null,lettercomb.core.score,cljs.core._PLUS_,added_score);
});
lettercomb.core.handle_release = (function lettercomb$core$handle_release(var_args){
var args__5733__auto__ = [];
var len__5726__auto___14470 = arguments.length;
var i__5727__auto___14471 = (0);
while(true){
if((i__5727__auto___14471 < len__5726__auto___14470)){
args__5733__auto__.push((arguments[i__5727__auto___14471]));

var G__14472 = (i__5727__auto___14471 + (1));
i__5727__auto___14471 = G__14472;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return lettercomb.core.handle_release.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

lettercomb.core.handle_release.cljs$core$IFn$_invoke$arity$variadic = (function (p__14468){
var vec__14469 = p__14468;
var e = cljs.core.nth.call(null,vec__14469,(0),null);
cljs.core.reset_BANG_.call(null,lettercomb.core.touch_down_QMARK_,false);

if(cljs.core.truth_(e)){
lettercomb.core.handle_move.call(null,e);
} else {
}

if(cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.deref.call(null,lettercomb.core.open_cell);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,lettercomb.core.current_word_cells));
} else {
return and__4656__auto__;
}
})())){
lettercomb.core.write_letter_BANG_.call(null,lettercomb.core.board,cljs.core.deref.call(null,lettercomb.core.open_cell),cljs.core.deref.call(null,lettercomb.core.next_letter));

cljs.core.reset_BANG_.call(null,lettercomb.core.open_cell,null);

lettercomb.core.pick_random_letter_BANG_.call(null);
} else {
}

var hovered_word_14473 = lettercomb.core.selected_word.call(null,cljs.core.deref.call(null,lettercomb.core.board),cljs.core.deref.call(null,lettercomb.core.current_word_cells));
if(cljs.core.contains_QMARK_.call(null,lettercomb.core.word_set,hovered_word_14473)){
console.log([cljs.core.str(hovered_word_14473),cljs.core.str(" is a real word...")].join(''));

lettercomb.core.clear_selected_word_BANG_.call(null,lettercomb.core.board,cljs.core.deref.call(null,lettercomb.core.current_word_cells));

cljs.core.reset_BANG_.call(null,lettercomb.core.current_word_cells,cljs.core.PersistentVector.EMPTY);

lettercomb.core.increase_score_BANG_.call(null,lettercomb.letters.word_score.call(null,hovered_word_14473));
} else {
}

return cljs.core.reset_BANG_.call(null,lettercomb.core.hovered_cell,null);
});

lettercomb.core.handle_release.cljs$lang$maxFixedArity = (0);

lettercomb.core.handle_release.cljs$lang$applyTo = (function (seq14467){
return lettercomb.core.handle_release.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14467));
});
lettercomb.core.handle_touch_release = (function lettercomb$core$handle_touch_release(e){
var touch = lettercomb.core.first_touch.call(null,e);
return lettercomb.core.handle_release.call(null,touch);
});
lettercomb.core.handle_start = (function lettercomb$core$handle_start(var_args){
var args__5733__auto__ = [];
var len__5726__auto___14477 = arguments.length;
var i__5727__auto___14478 = (0);
while(true){
if((i__5727__auto___14478 < len__5726__auto___14477)){
args__5733__auto__.push((arguments[i__5727__auto___14478]));

var G__14479 = (i__5727__auto___14478 + (1));
i__5727__auto___14478 = G__14479;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return lettercomb.core.handle_start.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

lettercomb.core.handle_start.cljs$core$IFn$_invoke$arity$variadic = (function (p__14475){
var vec__14476 = p__14475;
var e = cljs.core.nth.call(null,vec__14476,(0),null);
cljs.core.reset_BANG_.call(null,lettercomb.core.touch_down_QMARK_,true);

if(cljs.core.truth_(e)){
lettercomb.core.hover_cell_BANG_.call(null,e);

if(cljs.core.truth_(lettercomb.core.occupied_QMARK_.call(null,cljs.core.deref.call(null,lettercomb.core.board),cljs.core.deref.call(null,lettercomb.core.hovered_cell)))){
return cljs.core.reset_BANG_.call(null,lettercomb.core.current_word_cells,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,lettercomb.core.hovered_cell)], null));
} else {
return null;
}
} else {
return null;
}
});

lettercomb.core.handle_start.cljs$lang$maxFixedArity = (0);

lettercomb.core.handle_start.cljs$lang$applyTo = (function (seq14474){
return lettercomb.core.handle_start.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14474));
});
lettercomb.core.handle_touch_start = (function lettercomb$core$handle_touch_start(e){
var touch = lettercomb.core.first_touch.call(null,e);
return lettercomb.core.handle_start.call(null,touch);
});
cljs.core.add_watch.call(null,lettercomb.core.current_word_cells,new cljs.core.Keyword(null,"current-word","current-word",1786672226),(function (k,r,o,n){
return null;
}));
lettercomb.core.gamepads = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lettercomb.core.p1_gamepad = cljs.core.atom.call(null,null);
lettercomb.core.update_p1_gamepad_BANG_ = (function lettercomb$core$update_p1_gamepad_BANG_(){
var gamepads = navigator.getGamepads();
cljs.core.println.call(null,"setting p1 gamepad...");

if(!(cljs.core.empty_QMARK_.call(null,gamepads))){
return cljs.core.reset_BANG_.call(null,lettercomb.core.p1_gamepad,cljs.core.first.call(null,gamepads));
} else {
return cljs.core.reset_BANG_.call(null,lettercomb.core.p1_gamepad,null);
}
});
lettercomb.core.add_gamepad_BANG_ = (function lettercomb$core$add_gamepad_BANG_(e){
cljs.core.println.call(null,"gamepad added...");

var index = e.gamepad.index;
cljs.core.swap_BANG_.call(null,lettercomb.core.gamepads,cljs.core.assoc,e.gamepad.id,index);

if(cljs.core._EQ_.call(null,index,(0))){
return lettercomb.core.update_p1_gamepad_BANG_.call(null);
} else {
return null;
}
});
lettercomb.core.remove_gamepad_BANG_ = (function lettercomb$core$remove_gamepad_BANG_(e){
cljs.core.println.call(null,"gamepad removed...");

cljs.core.swap_BANG_.call(null,lettercomb.core.gamepads,cljs.core.dissoc,e.gamepad.id);

return lettercomb.core.update_p1_gamepad_BANG_.call(null);
});
lettercomb.core.add_event_listeners = (function lettercomb$core$add_event_listeners(){
if(cljs.core.not.call(null,window.ejecta)){
lettercomb.core.canvas.addEventListener("mousemove",lettercomb.core.handle_move);

lettercomb.core.canvas.addEventListener("mouseup",lettercomb.core.handle_release);

return lettercomb.core.canvas.addEventListener("mousedown",lettercomb.core.handle_start);
} else {
if(cljs.core.truth_(lettercomb.core.is_tv_QMARK_)){
window.addEventListener("gamepadconnected",lettercomb.core.add_gamepad_BANG_);

return window.addEventListener("gamepaddisconnected",lettercomb.core.remove_gamepad_BANG_);
} else {
lettercomb.core.canvas.addEventListener("touchmove",lettercomb.core.handle_touch_move);

lettercomb.core.canvas.addEventListener("touchend",lettercomb.core.handle_touch_release);

return lettercomb.core.canvas.addEventListener("touchstart",lettercomb.core.handle_touch_start);
}
}
});
lettercomb.core.handle_gamepads = (function lettercomb$core$handle_gamepads(){
var temp__4425__auto__ = cljs.core.deref.call(null,lettercomb.core.p1_gamepad);
if(cljs.core.truth_(temp__4425__auto__)){
var pad = temp__4425__auto__;
var buttons = pad.buttons;
var a = (buttons[(0)]);
var up_v = (buttons[(12)]).value;
var down_v = (buttons[(13)]).value;
var left_v = (buttons[(14)]).value;
var right_v = (buttons[(15)]).value;
var left_stick_h = ((function (){var x__4999__auto__ = left_v;
var y__5000__auto__ = right_v;
return ((x__4999__auto__ > y__5000__auto__) ? x__4999__auto__ : y__5000__auto__);
})() * (((left_v > right_v))?(-1):(1)));
var left_stick_v = ((function (){var x__4999__auto__ = up_v;
var y__5000__auto__ = down_v;
return ((x__4999__auto__ > y__5000__auto__) ? x__4999__auto__ : y__5000__auto__);
})() * (((down_v > up_v))?(-1):(1)));
if(cljs.core.truth_(a.pressed)){
lettercomb.core.handle_start.call(null);
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,lettercomb.core.touch_down_QMARK_))){
lettercomb.core.handle_release.call(null);
} else {
}
}

if((cljs.core.not.call(null,cljs.core.deref.call(null,lettercomb.core.touch_down_QMARK_))) && ((cljs.core.not_EQ_.call(null,left_stick_h,(0))) || (cljs.core.not_EQ_.call(null,left_stick_v,(0))))){
var stick_angle = Math.atan2(left_stick_h,left_stick_v);
return lettercomb.core.handle_angle.call(null,stick_angle);
} else {
return null;
}
} else {
return null;
}
});
setInterval((function (){
return lettercomb.core.handle_gamepads.call(null);
}),(16));
lettercomb.core.game_duration_ms = (((5) * (60)) * (1000));
lettercomb.core.game_loop = (function lettercomb$core$game_loop(){
requestAnimationFrame(lettercomb$core$game_loop);

if(cljs.core.truth_(cljs.core.deref.call(null,lettercomb.core.playing_QMARK_))){
lettercomb.core.blacken_BANG_.call(null,lettercomb.core.ctx);

lettercomb.core.fill_board_BANG_.call(null,lettercomb.core.ctx,cljs.core.deref.call(null,lettercomb.core.board),lettercomb.core.left_top,lettercomb.core.radius);

lettercomb.core.draw_cannon_BANG_.call(null,lettercomb.core.ctx,lettercomb.core.the_center,lettercomb.core.radius,cljs.core.deref.call(null,lettercomb.core.angle),cljs.core.deref.call(null,lettercomb.core.next_letter));

lettercomb.core.draw_score_BANG_.call(null,lettercomb.core.ctx,cljs.core.deref.call(null,lettercomb.core.score));

var time_left_ms_14480 = (lettercomb.core.game_duration_ms + (cljs.core.deref.call(null,lettercomb.core.start_time) - (new Date()).getTime()));
var seconds_left_14481 = Math.floor((time_left_ms_14480 / (1000)));
lettercomb.core.draw_timer_BANG_.call(null,lettercomb.core.ctx,seconds_left_14481);

return lettercomb.core.draw_menu_BANG_.call(null,lettercomb.core.ctx);
} else {
return null;
}
});
lettercomb.core.init_BANG_ = (function lettercomb$core$init_BANG_(){
var pixel_ratio_14482 = window.devicePixelRatio;
lettercomb.core.canvas.width = (lettercomb.core.window_width.call(null) * pixel_ratio_14482);

lettercomb.core.canvas.height = (lettercomb.core.window_height.call(null) * pixel_ratio_14482);

lettercomb.core.canvas.style.width = [cljs.core.str(lettercomb.core.window_width.call(null)),cljs.core.str("px")].join('');

lettercomb.core.canvas.style.height = [cljs.core.str(lettercomb.core.window_height.call(null)),cljs.core.str("px")].join('');

lettercomb.core.ctx.scale(pixel_ratio_14482,pixel_ratio_14482);

lettercomb.core.ctx.strokeStyle = "#fff";

lettercomb.core.ctx.lineWidth = lettercomb.core.line_width;

lettercomb.core.ctx.font = [cljs.core.str("bold "),cljs.core.str(lettercomb.core.font_size),cljs.core.str("px Courier-Bold")].join('');

return cljs.core.reset_BANG_.call(null,lettercomb.core.start_time,(new Date()).getTime(),lettercomb.core.write_word_BANG_.call(null,lettercomb.core.board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),"hello"),lettercomb.core.write_word_BANG_.call(null,lettercomb.core.board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),"there"),lettercomb.core.add_event_listeners.call(null),lettercomb.core.game_loop.call(null));
});
lettercomb.core.init_BANG_.call(null);
lettercomb.core.pause_BANG_.call(null);
lettercomb.core.play_BANG_.call(null);
