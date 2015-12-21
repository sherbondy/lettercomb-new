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
lettercomb.core.lookahead_radius = (lettercomb.core.radius * 0.75);
lettercomb.core.line_width = (cljs.core.truth_(lettercomb.core.is_tv_QMARK_)?(4):(2));
lettercomb.core.angle = cljs.core.atom.call(null,Math.PI);
lettercomb.core.hovered_cell = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
lettercomb.core.open_cell = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
lettercomb.core.n_lookahead = (4);
lettercomb.core.next_letters = cljs.core.atom.call(null,cljs.core.mapv.call(null,(function (){
return lettercomb.letters.rand_letter.call(null);
}),cljs.core.range.call(null,lettercomb.core.n_lookahead)));
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
lettercomb.core.hex_point = (function lettercomb$core$hex_point(p__15781,radius,i){
var vec__15783 = p__15781;
var cx = cljs.core.nth.call(null,vec__15783,(0),null);
var cy = cljs.core.nth.call(null,vec__15783,(1),null);

var angle = ((Math.PI / 3.0) * (i + 0.5));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + (radius * Math.cos(angle))),(cy + (radius * Math.sin(angle)))], null);
});
lettercomb.core.hexagon = (function lettercomb$core$hexagon(center,radius){
var iter__5440__auto__ = (function lettercomb$core$hexagon_$_iter__15788(s__15789){
return (new cljs.core.LazySeq(null,(function (){
var s__15789__$1 = s__15789;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15789__$1);
if(temp__4425__auto__){
var s__15789__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15789__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__15789__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__15791 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__15790 = (0);
while(true){
if((i__15790 < size__5439__auto__)){
var i = cljs.core._nth.call(null,c__5438__auto__,i__15790);
cljs.core.chunk_append.call(null,b__15791,lettercomb.core.hex_point.call(null,center,radius,i));

var G__15792 = (i__15790 + (1));
i__15790 = G__15792;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15791),lettercomb$core$hexagon_$_iter__15788.call(null,cljs.core.chunk_rest.call(null,s__15789__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15791),null);
}
} else {
var i = cljs.core.first.call(null,s__15789__$2);
return cljs.core.cons.call(null,lettercomb.core.hex_point.call(null,center,radius,i),lettercomb$core$hexagon_$_iter__15788.call(null,cljs.core.rest.call(null,s__15789__$2)));
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
lettercomb.core.move_to_BANG_ = (function lettercomb$core$move_to_BANG_(ctx,p__15793){
var vec__15795 = p__15793;
var x = cljs.core.nth.call(null,vec__15795,(0),null);
var y = cljs.core.nth.call(null,vec__15795,(1),null);
return ctx.moveTo(x,y);
});
lettercomb.core.line_to_BANG_ = (function lettercomb$core$line_to_BANG_(ctx,p__15796){
var vec__15798 = p__15796;
var x = cljs.core.nth.call(null,vec__15798,(0),null);
var y = cljs.core.nth.call(null,vec__15798,(1),null);
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

var mins_15799 = Math.floor((seconds_left / (60)));
var secs_15800 = cljs.core.mod.call(null,seconds_left,(60));
ctx.fillText([cljs.core.str(lettercomb.core.pad.call(null,mins_15799,"0",(2))),cljs.core.str(":"),cljs.core.str(lettercomb.core.pad.call(null,secs_15800,"0",(2)))].join(''),lettercomb.core.timer_location.call(null,(0)),lettercomb.core.timer_location.call(null,(1)));

return ctx.restore();
});
lettercomb.core.center_at = (function lettercomb$core$center_at(p__15801,p__15802,radius){
var vec__15805 = p__15801;
var col = cljs.core.nth.call(null,vec__15805,(0),null);
var row = cljs.core.nth.call(null,vec__15805,(1),null);
var vec__15806 = p__15802;
var left = cljs.core.nth.call(null,vec__15806,(0),null);
var top = cljs.core.nth.call(null,vec__15806,(1),null);
var hex_w = lettercomb.core.hex_width.call(null,radius);
var y_offset = (((3) * 0.5) * radius);
var x_offset = ((cljs.core.odd_QMARK_.call(null,row))?(hex_w / 2.0):(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((left + (col * hex_w)) + x_offset),(top + (row * y_offset))], null);
});
lettercomb.core.board_center = (function lettercomb$core$board_center(board,left_top,radius){
var mid_row = Math.floor((cljs.core.count.call(null,board) / (2)));
var mid_col = Math.floor((cljs.core.count.call(null,board.call(null,(0))) / (2)));
return lettercomb.core.center_at.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mid_col,mid_row], null),left_top,radius);
});
lettercomb.core.canvas_offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lettercomb.core.canvas.offsetLeft,lettercomb.core.canvas.offsetTop], null);
lettercomb.core.the_center = lettercomb.core.board_center.call(null,cljs.core.deref.call(null,lettercomb.core.board),lettercomb.core.left_top,lettercomb.core.radius);
lettercomb.core.center_bot = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lettercomb.core.the_center.call(null,(0)),lettercomb.core.window_height.call(null)], null);
lettercomb.core.page_center = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(lettercomb.core.the_center.call(null,(0)) + lettercomb.core.canvas_offset.call(null,(0))),(lettercomb.core.the_center.call(null,(1)) + lettercomb.core.canvas_offset.call(null,(1)))], null);
lettercomb.core.font_size = ((lettercomb.core.radius * (2)) / (3));
lettercomb.core.q_font_size = (lettercomb.core.font_size / (4));
lettercomb.core.lookahead_width = (lettercomb.core.n_lookahead * lettercomb.core.hex_width.call(null,lettercomb.core.lookahead_radius));
lettercomb.core.menu_size = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(lettercomb.core.radius * (4)),(lettercomb.core.radius * 1.5)], null);
lettercomb.core.menu_position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((lettercomb.core.center_bot.call(null,(0)) - (lettercomb.core.menu_size.call(null,(0)) / (2))) - (lettercomb.core.lookahead_width / (2))),((lettercomb.core.center_bot.call(null,(1)) - lettercomb.core.menu_size.call(null,(1))) - (16))], null);
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
var len__5726__auto___15817 = arguments.length;
var i__5727__auto___15818 = (0);
while(true){
if((i__5727__auto___15818 < len__5726__auto___15817)){
args__5733__auto__.push((arguments[i__5727__auto___15818]));

var G__15819 = (i__5727__auto___15818 + (1));
i__5727__auto___15818 = G__15819;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return lettercomb.core.draw_hexagon_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

lettercomb.core.draw_hexagon_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,center,radius,p__15811){
var vec__15812 = p__15811;
var fill_color = cljs.core.nth.call(null,vec__15812,(0),null);
ctx.beginPath();

ctx.fillStyle = (function (){var or__4668__auto__ = fill_color;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return "#000";
}
})();

lettercomb.core.move_to_BANG_.call(null,ctx,lettercomb.core.hex_point.call(null,center,radius,(0)));

var seq__15813_15820 = cljs.core.seq.call(null,cljs.core.range.call(null,(7)));
var chunk__15814_15821 = null;
var count__15815_15822 = (0);
var i__15816_15823 = (0);
while(true){
if((i__15816_15823 < count__15815_15822)){
var i_15824 = cljs.core._nth.call(null,chunk__15814_15821,i__15816_15823);
lettercomb.core.line_to_BANG_.call(null,ctx,lettercomb.core.hex_point.call(null,center,radius,i_15824));

var G__15825 = seq__15813_15820;
var G__15826 = chunk__15814_15821;
var G__15827 = count__15815_15822;
var G__15828 = (i__15816_15823 + (1));
seq__15813_15820 = G__15825;
chunk__15814_15821 = G__15826;
count__15815_15822 = G__15827;
i__15816_15823 = G__15828;
continue;
} else {
var temp__4425__auto___15829 = cljs.core.seq.call(null,seq__15813_15820);
if(temp__4425__auto___15829){
var seq__15813_15830__$1 = temp__4425__auto___15829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15813_15830__$1)){
var c__5471__auto___15831 = cljs.core.chunk_first.call(null,seq__15813_15830__$1);
var G__15832 = cljs.core.chunk_rest.call(null,seq__15813_15830__$1);
var G__15833 = c__5471__auto___15831;
var G__15834 = cljs.core.count.call(null,c__5471__auto___15831);
var G__15835 = (0);
seq__15813_15820 = G__15832;
chunk__15814_15821 = G__15833;
count__15815_15822 = G__15834;
i__15816_15823 = G__15835;
continue;
} else {
var i_15836 = cljs.core.first.call(null,seq__15813_15830__$1);
lettercomb.core.line_to_BANG_.call(null,ctx,lettercomb.core.hex_point.call(null,center,radius,i_15836));

var G__15837 = cljs.core.next.call(null,seq__15813_15830__$1);
var G__15838 = null;
var G__15839 = (0);
var G__15840 = (0);
seq__15813_15820 = G__15837;
chunk__15814_15821 = G__15838;
count__15815_15822 = G__15839;
i__15816_15823 = G__15840;
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

lettercomb.core.draw_hexagon_BANG_.cljs$lang$applyTo = (function (seq15807){
var G__15808 = cljs.core.first.call(null,seq15807);
var seq15807__$1 = cljs.core.next.call(null,seq15807);
var G__15809 = cljs.core.first.call(null,seq15807__$1);
var seq15807__$2 = cljs.core.next.call(null,seq15807__$1);
var G__15810 = cljs.core.first.call(null,seq15807__$2);
var seq15807__$3 = cljs.core.next.call(null,seq15807__$2);
return lettercomb.core.draw_hexagon_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15808,G__15809,G__15810,seq15807__$3);
});
lettercomb.core.draw_letter_BANG_ = (function lettercomb$core$draw_letter_BANG_(ctx,p__15841,letter){
var vec__15843 = p__15841;
var cx = cljs.core.nth.call(null,vec__15843,(0),null);
var cy = cljs.core.nth.call(null,vec__15843,(1),null);
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
lettercomb.core.fill_board_BANG_ = (function lettercomb$core$fill_board_BANG_(ctx,board,left_top,radius){

var seq__15856 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,board)));
var chunk__15861 = null;
var count__15862 = (0);
var i__15863 = (0);
while(true){
if((i__15863 < count__15862)){
var row = cljs.core._nth.call(null,chunk__15861,i__15863);
var seq__15864_15868 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.nth.call(null,board,row))));
var chunk__15865_15869 = null;
var count__15866_15870 = (0);
var i__15867_15871 = (0);
while(true){
if((i__15867_15871 < count__15866_15870)){
var col_15872 = cljs.core._nth.call(null,chunk__15865_15869,i__15867_15871);
var center_15873 = lettercomb.core.center_at.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15872,row], null),left_top,radius);
var letter_15874 = lettercomb.grid.get_odd_r.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15872,row], null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blank","blank",-1249652109),letter_15874)){
lettercomb.core.draw_hexagon_BANG_.call(null,ctx,center_15873,radius,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,lettercomb.core.open_cell),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15872,row], null)))?"#fff":"#000"));
} else {
var color_15875 = ((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.deref.call(null,lettercomb.core.current_word_cells)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15872,row], null)))?lettercomb.letters.darken.call(null,lettercomb.core.letter_color.call(null,letter_15874)):lettercomb.core.letter_color.call(null,letter_15874));
lettercomb.core.draw_letter_hex_BANG_.call(null,ctx,center_15873,radius,letter_15874,color_15875);
}

var G__15876 = seq__15864_15868;
var G__15877 = chunk__15865_15869;
var G__15878 = count__15866_15870;
var G__15879 = (i__15867_15871 + (1));
seq__15864_15868 = G__15876;
chunk__15865_15869 = G__15877;
count__15866_15870 = G__15878;
i__15867_15871 = G__15879;
continue;
} else {
var temp__4425__auto___15880 = cljs.core.seq.call(null,seq__15864_15868);
if(temp__4425__auto___15880){
var seq__15864_15881__$1 = temp__4425__auto___15880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15864_15881__$1)){
var c__5471__auto___15882 = cljs.core.chunk_first.call(null,seq__15864_15881__$1);
var G__15883 = cljs.core.chunk_rest.call(null,seq__15864_15881__$1);
var G__15884 = c__5471__auto___15882;
var G__15885 = cljs.core.count.call(null,c__5471__auto___15882);
var G__15886 = (0);
seq__15864_15868 = G__15883;
chunk__15865_15869 = G__15884;
count__15866_15870 = G__15885;
i__15867_15871 = G__15886;
continue;
} else {
var col_15887 = cljs.core.first.call(null,seq__15864_15881__$1);
var center_15888 = lettercomb.core.center_at.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15887,row], null),left_top,radius);
var letter_15889 = lettercomb.grid.get_odd_r.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15887,row], null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blank","blank",-1249652109),letter_15889)){
lettercomb.core.draw_hexagon_BANG_.call(null,ctx,center_15888,radius,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,lettercomb.core.open_cell),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15887,row], null)))?"#fff":"#000"));
} else {
var color_15890 = ((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.deref.call(null,lettercomb.core.current_word_cells)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15887,row], null)))?lettercomb.letters.darken.call(null,lettercomb.core.letter_color.call(null,letter_15889)):lettercomb.core.letter_color.call(null,letter_15889));
lettercomb.core.draw_letter_hex_BANG_.call(null,ctx,center_15888,radius,letter_15889,color_15890);
}

var G__15891 = cljs.core.next.call(null,seq__15864_15881__$1);
var G__15892 = null;
var G__15893 = (0);
var G__15894 = (0);
seq__15864_15868 = G__15891;
chunk__15865_15869 = G__15892;
count__15866_15870 = G__15893;
i__15867_15871 = G__15894;
continue;
}
} else {
}
}
break;
}

var G__15895 = seq__15856;
var G__15896 = chunk__15861;
var G__15897 = count__15862;
var G__15898 = (i__15863 + (1));
seq__15856 = G__15895;
chunk__15861 = G__15896;
count__15862 = G__15897;
i__15863 = G__15898;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15856);
if(temp__4425__auto__){
var seq__15856__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15856__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__15856__$1);
var G__15899 = cljs.core.chunk_rest.call(null,seq__15856__$1);
var G__15900 = c__5471__auto__;
var G__15901 = cljs.core.count.call(null,c__5471__auto__);
var G__15902 = (0);
seq__15856 = G__15899;
chunk__15861 = G__15900;
count__15862 = G__15901;
i__15863 = G__15902;
continue;
} else {
var row = cljs.core.first.call(null,seq__15856__$1);
var seq__15857_15903 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.nth.call(null,board,row))));
var chunk__15858_15904 = null;
var count__15859_15905 = (0);
var i__15860_15906 = (0);
while(true){
if((i__15860_15906 < count__15859_15905)){
var col_15907 = cljs.core._nth.call(null,chunk__15858_15904,i__15860_15906);
var center_15908 = lettercomb.core.center_at.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15907,row], null),left_top,radius);
var letter_15909 = lettercomb.grid.get_odd_r.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15907,row], null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blank","blank",-1249652109),letter_15909)){
lettercomb.core.draw_hexagon_BANG_.call(null,ctx,center_15908,radius,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,lettercomb.core.open_cell),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15907,row], null)))?"#fff":"#000"));
} else {
var color_15910 = ((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.deref.call(null,lettercomb.core.current_word_cells)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15907,row], null)))?lettercomb.letters.darken.call(null,lettercomb.core.letter_color.call(null,letter_15909)):lettercomb.core.letter_color.call(null,letter_15909));
lettercomb.core.draw_letter_hex_BANG_.call(null,ctx,center_15908,radius,letter_15909,color_15910);
}

var G__15911 = seq__15857_15903;
var G__15912 = chunk__15858_15904;
var G__15913 = count__15859_15905;
var G__15914 = (i__15860_15906 + (1));
seq__15857_15903 = G__15911;
chunk__15858_15904 = G__15912;
count__15859_15905 = G__15913;
i__15860_15906 = G__15914;
continue;
} else {
var temp__4425__auto___15915__$1 = cljs.core.seq.call(null,seq__15857_15903);
if(temp__4425__auto___15915__$1){
var seq__15857_15916__$1 = temp__4425__auto___15915__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15857_15916__$1)){
var c__5471__auto___15917 = cljs.core.chunk_first.call(null,seq__15857_15916__$1);
var G__15918 = cljs.core.chunk_rest.call(null,seq__15857_15916__$1);
var G__15919 = c__5471__auto___15917;
var G__15920 = cljs.core.count.call(null,c__5471__auto___15917);
var G__15921 = (0);
seq__15857_15903 = G__15918;
chunk__15858_15904 = G__15919;
count__15859_15905 = G__15920;
i__15860_15906 = G__15921;
continue;
} else {
var col_15922 = cljs.core.first.call(null,seq__15857_15916__$1);
var center_15923 = lettercomb.core.center_at.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15922,row], null),left_top,radius);
var letter_15924 = lettercomb.grid.get_odd_r.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15922,row], null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blank","blank",-1249652109),letter_15924)){
lettercomb.core.draw_hexagon_BANG_.call(null,ctx,center_15923,radius,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,lettercomb.core.open_cell),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15922,row], null)))?"#fff":"#000"));
} else {
var color_15925 = ((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.deref.call(null,lettercomb.core.current_word_cells)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15922,row], null)))?lettercomb.letters.darken.call(null,lettercomb.core.letter_color.call(null,letter_15924)):lettercomb.core.letter_color.call(null,letter_15924));
lettercomb.core.draw_letter_hex_BANG_.call(null,ctx,center_15923,radius,letter_15924,color_15925);
}

var G__15926 = cljs.core.next.call(null,seq__15857_15916__$1);
var G__15927 = null;
var G__15928 = (0);
var G__15929 = (0);
seq__15857_15903 = G__15926;
chunk__15858_15904 = G__15927;
count__15859_15905 = G__15928;
i__15860_15906 = G__15929;
continue;
}
} else {
}
}
break;
}

var G__15930 = cljs.core.next.call(null,seq__15856__$1);
var G__15931 = null;
var G__15932 = (0);
var G__15933 = (0);
seq__15856 = G__15930;
chunk__15861 = G__15931;
count__15862 = G__15932;
i__15863 = G__15933;
continue;
}
} else {
return null;
}
}
break;
}
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
lettercomb.core.v__GT_angle = (function lettercomb$core$v__GT_angle(p__15934,p__15935){
var vec__15938 = p__15934;
var cx = cljs.core.nth.call(null,vec__15938,(0),null);
var cy = cljs.core.nth.call(null,vec__15938,(1),null);
var vec__15939 = p__15935;
var ex = cljs.core.nth.call(null,vec__15939,(0),null);
var ey = cljs.core.nth.call(null,vec__15939,(1),null);

return Math.atan2((ex - cx),(cy - ey));
});
lettercomb.core.v__GT_odd_r = (function lettercomb$core$v__GT_odd_r(v){
return cljs.core.comp.call(null,lettercomb.grid.axial_to_odd_r,cljs.core.partial.call(null,lettercomb.grid.pixel_to_axial,lettercomb.core.left_top,lettercomb.core.radius)).call(null,v);
});
lettercomb.core.next_coord = (function lettercomb$core$next_coord(angle,delta,p__15940){
var vec__15942 = p__15940;
var x = cljs.core.nth.call(null,vec__15942,(0),null);
var y = cljs.core.nth.call(null,vec__15942,(1),null);

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
lettercomb.core.destination_cell = (function lettercomb$core$destination_cell(var_args){
var args__5733__auto__ = [];
var len__5726__auto___15949 = arguments.length;
var i__5727__auto___15950 = (0);
while(true){
if((i__5727__auto___15950 < len__5726__auto___15949)){
args__5733__auto__.push((arguments[i__5727__auto___15950]));

var G__15951 = (i__5727__auto___15950 + (1));
i__5727__auto___15950 = G__15951;
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
var vec__15947 = lettercomb.core.next_coord.call(null,angle,delta,point__$1);
var x = cljs.core.nth.call(null,vec__15947,(0),null);
var y = cljs.core.nth.call(null,vec__15947,(1),null);
var dest_coords = vec__15947;
var vec__15948 = lettercomb.core.v__GT_odd_r.call(null,dest_coords);
var col = cljs.core.nth.call(null,vec__15948,(0),null);
var row = cljs.core.nth.call(null,vec__15948,(1),null);
var dest_cell = vec__15948;
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
var G__15952 = board;
var G__15953 = angle;
var G__15954 = delta;
var G__15955 = dest_coords;
board = G__15952;
angle = G__15953;
delta = G__15954;
point = G__15955;
continue;
}
break;
}
});

lettercomb.core.destination_cell.cljs$lang$maxFixedArity = (3);

lettercomb.core.destination_cell.cljs$lang$applyTo = (function (seq15943){
var G__15944 = cljs.core.first.call(null,seq15943);
var seq15943__$1 = cljs.core.next.call(null,seq15943);
var G__15945 = cljs.core.first.call(null,seq15943__$1);
var seq15943__$2 = cljs.core.next.call(null,seq15943__$1);
var G__15946 = cljs.core.first.call(null,seq15943__$2);
var seq15943__$3 = cljs.core.next.call(null,seq15943__$2);
return lettercomb.core.destination_cell.cljs$core$IFn$_invoke$arity$variadic(G__15944,G__15945,G__15946,seq15943__$3);
});
lettercomb.core.write_letter_BANG_ = (function lettercomb$core$write_letter_BANG_(a_board,p__15956,letter_kw){
var vec__15958 = p__15956;
var col = cljs.core.nth.call(null,vec__15958,(0),null);
var row = cljs.core.nth.call(null,vec__15958,(1),null);
return cljs.core.swap_BANG_.call(null,a_board,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),letter_kw);
});
lettercomb.core.clear_cell_BANG_ = (function lettercomb$core$clear_cell_BANG_(a_board,cell){
return lettercomb.core.write_letter_BANG_.call(null,a_board,cell,new cljs.core.Keyword(null,"blank","blank",-1249652109));
});
lettercomb.core.write_word_BANG_ = (function lettercomb$core$write_word_BANG_(a_board,p__15959,word){
var vec__15965 = p__15959;
var start_col = cljs.core.nth.call(null,vec__15965,(0),null);
var start_row = cljs.core.nth.call(null,vec__15965,(1),null);
var up_word = word.toUpperCase();
var seq__15966 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,up_word)));
var chunk__15967 = null;
var count__15968 = (0);
var i__15969 = (0);
while(true){
if((i__15969 < count__15968)){
var i = cljs.core._nth.call(null,chunk__15967,i__15969);
lettercomb.core.write_letter_BANG_.call(null,a_board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + start_col),start_row], null),cljs.core.keyword.call(null,cljs.core.nth.call(null,up_word,i)));

var G__15970 = seq__15966;
var G__15971 = chunk__15967;
var G__15972 = count__15968;
var G__15973 = (i__15969 + (1));
seq__15966 = G__15970;
chunk__15967 = G__15971;
count__15968 = G__15972;
i__15969 = G__15973;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15966);
if(temp__4425__auto__){
var seq__15966__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15966__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__15966__$1);
var G__15974 = cljs.core.chunk_rest.call(null,seq__15966__$1);
var G__15975 = c__5471__auto__;
var G__15976 = cljs.core.count.call(null,c__5471__auto__);
var G__15977 = (0);
seq__15966 = G__15974;
chunk__15967 = G__15975;
count__15968 = G__15976;
i__15969 = G__15977;
continue;
} else {
var i = cljs.core.first.call(null,seq__15966__$1);
lettercomb.core.write_letter_BANG_.call(null,a_board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + start_col),start_row], null),cljs.core.keyword.call(null,cljs.core.nth.call(null,up_word,i)));

var G__15978 = cljs.core.next.call(null,seq__15966__$1);
var G__15979 = null;
var G__15980 = (0);
var G__15981 = (0);
seq__15966 = G__15978;
chunk__15967 = G__15979;
count__15968 = G__15980;
i__15969 = G__15981;
continue;
}
} else {
return null;
}
}
break;
}
});
lettercomb.core.update_next_letter_BANG_ = (function lettercomb$core$update_next_letter_BANG_(){
return cljs.core.swap_BANG_.call(null,lettercomb.core.next_letters,(function (prev){
return cljs.core.conj.call(null,cljs.core.subvec.call(null,prev,(1)),lettercomb.letters.rand_letter.call(null));
}));
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
var v_15982 = lettercomb.core.e__GT_v.call(null,e);
var new_angle_15983 = lettercomb.core.v__GT_angle.call(null,lettercomb.core.page_center,v_15982);
lettercomb.core.handle_angle.call(null,new_angle_15983);

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
return clojure.string.lower_case.call(null,cljs.core.apply.call(null,cljs.core.str,(function (){var iter__5440__auto__ = (function lettercomb$core$selected_word_$_iter__15988(s__15989){
return (new cljs.core.LazySeq(null,(function (){
var s__15989__$1 = s__15989;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15989__$1);
if(temp__4425__auto__){
var s__15989__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15989__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__15989__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__15991 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__15990 = (0);
while(true){
if((i__15990 < size__5439__auto__)){
var cell = cljs.core._nth.call(null,c__5438__auto__,i__15990);
cljs.core.chunk_append.call(null,b__15991,cljs.core.name.call(null,(function (){var or__4668__auto__ = lettercomb.grid.get_odd_r.call(null,board,cell);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return "";
}
})()));

var G__15992 = (i__15990 + (1));
i__15990 = G__15992;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15991),lettercomb$core$selected_word_$_iter__15988.call(null,cljs.core.chunk_rest.call(null,s__15989__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15991),null);
}
} else {
var cell = cljs.core.first.call(null,s__15989__$2);
return cljs.core.cons.call(null,cljs.core.name.call(null,(function (){var or__4668__auto__ = lettercomb.grid.get_odd_r.call(null,board,cell);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return "";
}
})()),lettercomb$core$selected_word_$_iter__15988.call(null,cljs.core.rest.call(null,s__15989__$2)));
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
var seq__15997 = cljs.core.seq.call(null,word_cells);
var chunk__15998 = null;
var count__15999 = (0);
var i__16000 = (0);
while(true){
if((i__16000 < count__15999)){
var cell = cljs.core._nth.call(null,chunk__15998,i__16000);
lettercomb.core.clear_cell_BANG_.call(null,a_board,cell);

var G__16001 = seq__15997;
var G__16002 = chunk__15998;
var G__16003 = count__15999;
var G__16004 = (i__16000 + (1));
seq__15997 = G__16001;
chunk__15998 = G__16002;
count__15999 = G__16003;
i__16000 = G__16004;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15997);
if(temp__4425__auto__){
var seq__15997__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15997__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__15997__$1);
var G__16005 = cljs.core.chunk_rest.call(null,seq__15997__$1);
var G__16006 = c__5471__auto__;
var G__16007 = cljs.core.count.call(null,c__5471__auto__);
var G__16008 = (0);
seq__15997 = G__16005;
chunk__15998 = G__16006;
count__15999 = G__16007;
i__16000 = G__16008;
continue;
} else {
var cell = cljs.core.first.call(null,seq__15997__$1);
lettercomb.core.clear_cell_BANG_.call(null,a_board,cell);

var G__16009 = cljs.core.next.call(null,seq__15997__$1);
var G__16010 = null;
var G__16011 = (0);
var G__16012 = (0);
seq__15997 = G__16009;
chunk__15998 = G__16010;
count__15999 = G__16011;
i__16000 = G__16012;
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
var len__5726__auto___16016 = arguments.length;
var i__5727__auto___16017 = (0);
while(true){
if((i__5727__auto___16017 < len__5726__auto___16016)){
args__5733__auto__.push((arguments[i__5727__auto___16017]));

var G__16018 = (i__5727__auto___16017 + (1));
i__5727__auto___16017 = G__16018;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return lettercomb.core.handle_release.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

lettercomb.core.handle_release.cljs$core$IFn$_invoke$arity$variadic = (function (p__16014){
var vec__16015 = p__16014;
var e = cljs.core.nth.call(null,vec__16015,(0),null);
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
lettercomb.core.write_letter_BANG_.call(null,lettercomb.core.board,cljs.core.deref.call(null,lettercomb.core.open_cell),cljs.core.first.call(null,cljs.core.deref.call(null,lettercomb.core.next_letters)));

cljs.core.reset_BANG_.call(null,lettercomb.core.open_cell,null);

lettercomb.core.update_next_letter_BANG_.call(null);
} else {
}

var hovered_word_16019 = lettercomb.core.selected_word.call(null,cljs.core.deref.call(null,lettercomb.core.board),cljs.core.deref.call(null,lettercomb.core.current_word_cells));
if(cljs.core.contains_QMARK_.call(null,lettercomb.core.word_set,hovered_word_16019)){
console.log([cljs.core.str(hovered_word_16019),cljs.core.str(" is a real word...")].join(''));

lettercomb.core.clear_selected_word_BANG_.call(null,lettercomb.core.board,cljs.core.deref.call(null,lettercomb.core.current_word_cells));

cljs.core.reset_BANG_.call(null,lettercomb.core.current_word_cells,cljs.core.PersistentVector.EMPTY);

lettercomb.core.increase_score_BANG_.call(null,lettercomb.letters.word_score.call(null,hovered_word_16019));
} else {
}

return cljs.core.reset_BANG_.call(null,lettercomb.core.hovered_cell,null);
});

lettercomb.core.handle_release.cljs$lang$maxFixedArity = (0);

lettercomb.core.handle_release.cljs$lang$applyTo = (function (seq16013){
return lettercomb.core.handle_release.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16013));
});
lettercomb.core.handle_touch_release = (function lettercomb$core$handle_touch_release(e){
var touch = lettercomb.core.first_touch.call(null,e);
return lettercomb.core.handle_release.call(null,touch);
});
lettercomb.core.handle_start = (function lettercomb$core$handle_start(var_args){
var args__5733__auto__ = [];
var len__5726__auto___16023 = arguments.length;
var i__5727__auto___16024 = (0);
while(true){
if((i__5727__auto___16024 < len__5726__auto___16023)){
args__5733__auto__.push((arguments[i__5727__auto___16024]));

var G__16025 = (i__5727__auto___16024 + (1));
i__5727__auto___16024 = G__16025;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return lettercomb.core.handle_start.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

lettercomb.core.handle_start.cljs$core$IFn$_invoke$arity$variadic = (function (p__16021){
var vec__16022 = p__16021;
var e = cljs.core.nth.call(null,vec__16022,(0),null);
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

lettercomb.core.handle_start.cljs$lang$applyTo = (function (seq16020){
return lettercomb.core.handle_start.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16020));
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

if(!(cljs.core._EQ_.call(null,(0),gamepads.length))){
return cljs.core.reset_BANG_.call(null,lettercomb.core.p1_gamepad,(gamepads[(0)]));
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
window.addEventListener("gamepadconnected",lettercomb.core.add_gamepad_BANG_);

window.addEventListener("gamepaddisconnected",lettercomb.core.remove_gamepad_BANG_);

lettercomb.core.canvas.addEventListener("touchmove",lettercomb.core.handle_touch_move);

lettercomb.core.canvas.addEventListener("touchend",lettercomb.core.handle_touch_release);

lettercomb.core.canvas.addEventListener("touchstart",lettercomb.core.handle_touch_start);

if(cljs.core.truth_(window.ejecta)){
return null;
} else {
lettercomb.core.canvas.addEventListener("mousemove",lettercomb.core.handle_move);

lettercomb.core.canvas.addEventListener("mouseup",lettercomb.core.handle_release);

return lettercomb.core.canvas.addEventListener("mousedown",lettercomb.core.handle_start);
}
});
lettercomb.core.handle_gamepads = (function lettercomb$core$handle_gamepads(){
var temp__4425__auto__ = (navigator.getGamepads()[(0)]);
if(cljs.core.truth_(temp__4425__auto__)){
var pad = temp__4425__auto__;
var buttons = pad.buttons;
var a = (buttons[(0)]);
var up_v = (buttons[(12)]).value;
var down_v = (buttons[(13)]).value;
var left_v = (buttons[(14)]).value;
var right_v = (buttons[(15)]).value;
var d_pad_h = ((function (){var x__4999__auto__ = left_v;
var y__5000__auto__ = right_v;
return ((x__4999__auto__ > y__5000__auto__) ? x__4999__auto__ : y__5000__auto__);
})() * (((left_v > right_v))?(-1):(1)));
var d_pad_v = ((function (){var x__4999__auto__ = up_v;
var y__5000__auto__ = down_v;
return ((x__4999__auto__ > y__5000__auto__) ? x__4999__auto__ : y__5000__auto__);
})() * (((down_v > up_v))?(1):(-1)));
var left_stick_h = (function (){var or__4668__auto__ = (pad.axes[(0)]);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return d_pad_h;
}
})();
var left_stick_v = (function (){var or__4668__auto__ = (pad.axes[(1)]);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return d_pad_v;
}
})();
if(cljs.core.truth_(a.pressed)){
lettercomb.core.handle_start.call(null);
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,lettercomb.core.touch_down_QMARK_))){
lettercomb.core.handle_release.call(null);
} else {
}
}

if((cljs.core.not.call(null,cljs.core.deref.call(null,lettercomb.core.touch_down_QMARK_))) && ((cljs.core.not_EQ_.call(null,left_stick_h,(0))) || (cljs.core.not_EQ_.call(null,left_stick_v,(0))))){
var stick_angle = Math.atan2(left_stick_h,((-1) * left_stick_v));
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
lettercomb.core.now = (function lettercomb$core$now(){
return (new Date()).getTime();
});
lettercomb.core.get_seconds_left = (function lettercomb$core$get_seconds_left(){
var time_since_start = (cljs.core.deref.call(null,lettercomb.core.start_time) - lettercomb.core.now.call(null));
var time_left_ms = (function (){var x__4999__auto__ = (lettercomb.core.game_duration_ms + time_since_start);
var y__5000__auto__ = (0);
return ((x__4999__auto__ > y__5000__auto__) ? x__4999__auto__ : y__5000__auto__);
})();
var seconds_left = Math.floor((time_left_ms / (1000)));
return seconds_left;
});
lettercomb.core.draw_lookahead_BANG_ = (function lettercomb$core$draw_lookahead_BANG_(ctx,center_bot,radius){
var seq__16030 = cljs.core.seq.call(null,cljs.core.range.call(null,(1),lettercomb.core.n_lookahead));
var chunk__16031 = null;
var count__16032 = (0);
var i__16033 = (0);
while(true){
if((i__16033 < count__16032)){
var i = cljs.core._nth.call(null,chunk__16031,i__16033);
var letter_16034 = cljs.core.get.call(null,cljs.core.deref.call(null,lettercomb.core.next_letters),i);
var color_16035 = lettercomb.core.letter_color.call(null,letter_16034);
var x_offset_16036 = ((i - (lettercomb.core.n_lookahead >> (1))) * lettercomb.core.hex_width.call(null,radius));
lettercomb.core.draw_letter_hex_BANG_.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x_offset_16036 + center_bot.call(null,(0))) + (lettercomb.core.lookahead_width / (2))),((center_bot.call(null,(1)) - radius) - (16))], null),radius,letter_16034,color_16035);

var G__16037 = seq__16030;
var G__16038 = chunk__16031;
var G__16039 = count__16032;
var G__16040 = (i__16033 + (1));
seq__16030 = G__16037;
chunk__16031 = G__16038;
count__16032 = G__16039;
i__16033 = G__16040;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16030);
if(temp__4425__auto__){
var seq__16030__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16030__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__16030__$1);
var G__16041 = cljs.core.chunk_rest.call(null,seq__16030__$1);
var G__16042 = c__5471__auto__;
var G__16043 = cljs.core.count.call(null,c__5471__auto__);
var G__16044 = (0);
seq__16030 = G__16041;
chunk__16031 = G__16042;
count__16032 = G__16043;
i__16033 = G__16044;
continue;
} else {
var i = cljs.core.first.call(null,seq__16030__$1);
var letter_16045 = cljs.core.get.call(null,cljs.core.deref.call(null,lettercomb.core.next_letters),i);
var color_16046 = lettercomb.core.letter_color.call(null,letter_16045);
var x_offset_16047 = ((i - (lettercomb.core.n_lookahead >> (1))) * lettercomb.core.hex_width.call(null,radius));
lettercomb.core.draw_letter_hex_BANG_.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x_offset_16047 + center_bot.call(null,(0))) + (lettercomb.core.lookahead_width / (2))),((center_bot.call(null,(1)) - radius) - (16))], null),radius,letter_16045,color_16046);

var G__16048 = cljs.core.next.call(null,seq__16030__$1);
var G__16049 = null;
var G__16050 = (0);
var G__16051 = (0);
seq__16030 = G__16048;
chunk__16031 = G__16049;
count__16032 = G__16050;
i__16033 = G__16051;
continue;
}
} else {
return null;
}
}
break;
}
});
lettercomb.core.game_loop = (function lettercomb$core$game_loop(){
requestAnimationFrame(lettercomb$core$game_loop);

if(cljs.core.truth_(cljs.core.deref.call(null,lettercomb.core.playing_QMARK_))){
lettercomb.core.blacken_BANG_.call(null,lettercomb.core.ctx);

lettercomb.core.fill_board_BANG_.call(null,lettercomb.core.ctx,cljs.core.deref.call(null,lettercomb.core.board),lettercomb.core.left_top,lettercomb.core.radius);

lettercomb.core.draw_cannon_BANG_.call(null,lettercomb.core.ctx,lettercomb.core.the_center,lettercomb.core.radius,cljs.core.deref.call(null,lettercomb.core.angle),cljs.core.first.call(null,cljs.core.deref.call(null,lettercomb.core.next_letters)));

lettercomb.core.draw_lookahead_BANG_.call(null,lettercomb.core.ctx,lettercomb.core.center_bot,lettercomb.core.lookahead_radius);

lettercomb.core.draw_score_BANG_.call(null,lettercomb.core.ctx,cljs.core.deref.call(null,lettercomb.core.score));

lettercomb.core.draw_timer_BANG_.call(null,lettercomb.core.ctx,lettercomb.core.get_seconds_left.call(null));

return lettercomb.core.draw_menu_BANG_.call(null,lettercomb.core.ctx);
} else {
return null;
}
});
lettercomb.core.init_BANG_ = (function lettercomb$core$init_BANG_(){
var pixel_ratio_16052 = window.devicePixelRatio;
lettercomb.core.canvas.width = (lettercomb.core.window_width.call(null) * pixel_ratio_16052);

lettercomb.core.canvas.height = (lettercomb.core.window_height.call(null) * pixel_ratio_16052);

lettercomb.core.canvas.style.width = [cljs.core.str(lettercomb.core.window_width.call(null)),cljs.core.str("px")].join('');

lettercomb.core.canvas.style.height = [cljs.core.str(lettercomb.core.window_height.call(null)),cljs.core.str("px")].join('');

lettercomb.core.ctx.scale(pixel_ratio_16052,pixel_ratio_16052);

lettercomb.core.ctx.strokeStyle = "#fff";

lettercomb.core.ctx.lineWidth = lettercomb.core.line_width;

lettercomb.core.ctx.font = [cljs.core.str("bold "),cljs.core.str(lettercomb.core.font_size),cljs.core.str("px Courier-Bold")].join('');

return cljs.core.reset_BANG_.call(null,lettercomb.core.start_time,(new Date()).getTime(),lettercomb.core.write_word_BANG_.call(null,lettercomb.core.board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),"hello"),lettercomb.core.write_word_BANG_.call(null,lettercomb.core.board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),"there"),lettercomb.core.add_event_listeners.call(null),lettercomb.core.game_loop.call(null));
});
lettercomb.core.init_BANG_.call(null);
lettercomb.core.pause_BANG_.call(null);
lettercomb.core.play_BANG_.call(null);