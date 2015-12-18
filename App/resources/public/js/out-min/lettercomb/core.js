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
lettercomb.core.hex_point = (function lettercomb$core$hex_point(p__15765,radius,i){
var vec__15767 = p__15765;
var cx = cljs.core.nth.call(null,vec__15767,(0),null);
var cy = cljs.core.nth.call(null,vec__15767,(1),null);

var angle = ((Math.PI / 3.0) * (i + 0.5));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + (radius * Math.cos(angle))),(cy + (radius * Math.sin(angle)))], null);
});
lettercomb.core.hexagon = (function lettercomb$core$hexagon(center,radius){
var iter__5440__auto__ = (function lettercomb$core$hexagon_$_iter__15772(s__15773){
return (new cljs.core.LazySeq(null,(function (){
var s__15773__$1 = s__15773;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15773__$1);
if(temp__4425__auto__){
var s__15773__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15773__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__15773__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__15775 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__15774 = (0);
while(true){
if((i__15774 < size__5439__auto__)){
var i = cljs.core._nth.call(null,c__5438__auto__,i__15774);
cljs.core.chunk_append.call(null,b__15775,lettercomb.core.hex_point.call(null,center,radius,i));

var G__15776 = (i__15774 + (1));
i__15774 = G__15776;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15775),lettercomb$core$hexagon_$_iter__15772.call(null,cljs.core.chunk_rest.call(null,s__15773__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15775),null);
}
} else {
var i = cljs.core.first.call(null,s__15773__$2);
return cljs.core.cons.call(null,lettercomb.core.hex_point.call(null,center,radius,i),lettercomb$core$hexagon_$_iter__15772.call(null,cljs.core.rest.call(null,s__15773__$2)));
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
lettercomb.core.move_to_BANG_ = (function lettercomb$core$move_to_BANG_(ctx,p__15777){
var vec__15779 = p__15777;
var x = cljs.core.nth.call(null,vec__15779,(0),null);
var y = cljs.core.nth.call(null,vec__15779,(1),null);
return ctx.moveTo(x,y);
});
lettercomb.core.line_to_BANG_ = (function lettercomb$core$line_to_BANG_(ctx,p__15780){
var vec__15782 = p__15780;
var x = cljs.core.nth.call(null,vec__15782,(0),null);
var y = cljs.core.nth.call(null,vec__15782,(1),null);
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

var mins_15783 = Math.floor((seconds_left / (60)));
var secs_15784 = cljs.core.mod.call(null,seconds_left,(60));
ctx.fillText([cljs.core.str(lettercomb.core.pad.call(null,mins_15783,"0",(2))),cljs.core.str(":"),cljs.core.str(lettercomb.core.pad.call(null,secs_15784,"0",(2)))].join(''),lettercomb.core.timer_location.call(null,(0)),lettercomb.core.timer_location.call(null,(1)));

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
var len__5726__auto___15795 = arguments.length;
var i__5727__auto___15796 = (0);
while(true){
if((i__5727__auto___15796 < len__5726__auto___15795)){
args__5733__auto__.push((arguments[i__5727__auto___15796]));

var G__15797 = (i__5727__auto___15796 + (1));
i__5727__auto___15796 = G__15797;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return lettercomb.core.draw_hexagon_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

lettercomb.core.draw_hexagon_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,center,radius,p__15789){
var vec__15790 = p__15789;
var fill_color = cljs.core.nth.call(null,vec__15790,(0),null);
ctx.beginPath();

ctx.fillStyle = (function (){var or__4668__auto__ = fill_color;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return "#000";
}
})();

lettercomb.core.move_to_BANG_.call(null,ctx,lettercomb.core.hex_point.call(null,center,radius,(0)));

var seq__15791_15798 = cljs.core.seq.call(null,cljs.core.range.call(null,(7)));
var chunk__15792_15799 = null;
var count__15793_15800 = (0);
var i__15794_15801 = (0);
while(true){
if((i__15794_15801 < count__15793_15800)){
var i_15802 = cljs.core._nth.call(null,chunk__15792_15799,i__15794_15801);
lettercomb.core.line_to_BANG_.call(null,ctx,lettercomb.core.hex_point.call(null,center,radius,i_15802));

var G__15803 = seq__15791_15798;
var G__15804 = chunk__15792_15799;
var G__15805 = count__15793_15800;
var G__15806 = (i__15794_15801 + (1));
seq__15791_15798 = G__15803;
chunk__15792_15799 = G__15804;
count__15793_15800 = G__15805;
i__15794_15801 = G__15806;
continue;
} else {
var temp__4425__auto___15807 = cljs.core.seq.call(null,seq__15791_15798);
if(temp__4425__auto___15807){
var seq__15791_15808__$1 = temp__4425__auto___15807;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15791_15808__$1)){
var c__5471__auto___15809 = cljs.core.chunk_first.call(null,seq__15791_15808__$1);
var G__15810 = cljs.core.chunk_rest.call(null,seq__15791_15808__$1);
var G__15811 = c__5471__auto___15809;
var G__15812 = cljs.core.count.call(null,c__5471__auto___15809);
var G__15813 = (0);
seq__15791_15798 = G__15810;
chunk__15792_15799 = G__15811;
count__15793_15800 = G__15812;
i__15794_15801 = G__15813;
continue;
} else {
var i_15814 = cljs.core.first.call(null,seq__15791_15808__$1);
lettercomb.core.line_to_BANG_.call(null,ctx,lettercomb.core.hex_point.call(null,center,radius,i_15814));

var G__15815 = cljs.core.next.call(null,seq__15791_15808__$1);
var G__15816 = null;
var G__15817 = (0);
var G__15818 = (0);
seq__15791_15798 = G__15815;
chunk__15792_15799 = G__15816;
count__15793_15800 = G__15817;
i__15794_15801 = G__15818;
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

lettercomb.core.draw_hexagon_BANG_.cljs$lang$applyTo = (function (seq15785){
var G__15786 = cljs.core.first.call(null,seq15785);
var seq15785__$1 = cljs.core.next.call(null,seq15785);
var G__15787 = cljs.core.first.call(null,seq15785__$1);
var seq15785__$2 = cljs.core.next.call(null,seq15785__$1);
var G__15788 = cljs.core.first.call(null,seq15785__$2);
var seq15785__$3 = cljs.core.next.call(null,seq15785__$2);
return lettercomb.core.draw_hexagon_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15786,G__15787,G__15788,seq15785__$3);
});
lettercomb.core.draw_letter_BANG_ = (function lettercomb$core$draw_letter_BANG_(ctx,p__15819,letter){
var vec__15821 = p__15819;
var cx = cljs.core.nth.call(null,vec__15821,(0),null);
var cy = cljs.core.nth.call(null,vec__15821,(1),null);
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
lettercomb.core.center_at = (function lettercomb$core$center_at(p__15822,p__15823,radius){
var vec__15826 = p__15822;
var col = cljs.core.nth.call(null,vec__15826,(0),null);
var row = cljs.core.nth.call(null,vec__15826,(1),null);
var vec__15827 = p__15823;
var left = cljs.core.nth.call(null,vec__15827,(0),null);
var top = cljs.core.nth.call(null,vec__15827,(1),null);
var hex_w = lettercomb.core.hex_width.call(null,radius);
var y_offset = (((3) * 0.5) * radius);
var x_offset = ((cljs.core.odd_QMARK_.call(null,row))?(hex_w / 2.0):(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((left + (col * hex_w)) + x_offset),(top + (row * y_offset))], null);
});
lettercomb.core.fill_board_BANG_ = (function lettercomb$core$fill_board_BANG_(ctx,board,left_top,radius){

var seq__15840 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,board)));
var chunk__15845 = null;
var count__15846 = (0);
var i__15847 = (0);
while(true){
if((i__15847 < count__15846)){
var row = cljs.core._nth.call(null,chunk__15845,i__15847);
var seq__15848_15852 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.nth.call(null,board,row))));
var chunk__15849_15853 = null;
var count__15850_15854 = (0);
var i__15851_15855 = (0);
while(true){
if((i__15851_15855 < count__15850_15854)){
var col_15856 = cljs.core._nth.call(null,chunk__15849_15853,i__15851_15855);
var center_15857 = lettercomb.core.center_at.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15856,row], null),left_top,radius);
var letter_15858 = lettercomb.grid.get_odd_r.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15856,row], null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blank","blank",-1249652109),letter_15858)){
lettercomb.core.draw_hexagon_BANG_.call(null,ctx,center_15857,radius,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,lettercomb.core.open_cell),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15856,row], null)))?"#fff":"#000"));
} else {
var color_15859 = ((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.deref.call(null,lettercomb.core.current_word_cells)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15856,row], null)))?lettercomb.letters.darken.call(null,lettercomb.core.letter_color.call(null,letter_15858)):lettercomb.core.letter_color.call(null,letter_15858));
lettercomb.core.draw_letter_hex_BANG_.call(null,ctx,center_15857,radius,letter_15858,color_15859);
}

var G__15860 = seq__15848_15852;
var G__15861 = chunk__15849_15853;
var G__15862 = count__15850_15854;
var G__15863 = (i__15851_15855 + (1));
seq__15848_15852 = G__15860;
chunk__15849_15853 = G__15861;
count__15850_15854 = G__15862;
i__15851_15855 = G__15863;
continue;
} else {
var temp__4425__auto___15864 = cljs.core.seq.call(null,seq__15848_15852);
if(temp__4425__auto___15864){
var seq__15848_15865__$1 = temp__4425__auto___15864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15848_15865__$1)){
var c__5471__auto___15866 = cljs.core.chunk_first.call(null,seq__15848_15865__$1);
var G__15867 = cljs.core.chunk_rest.call(null,seq__15848_15865__$1);
var G__15868 = c__5471__auto___15866;
var G__15869 = cljs.core.count.call(null,c__5471__auto___15866);
var G__15870 = (0);
seq__15848_15852 = G__15867;
chunk__15849_15853 = G__15868;
count__15850_15854 = G__15869;
i__15851_15855 = G__15870;
continue;
} else {
var col_15871 = cljs.core.first.call(null,seq__15848_15865__$1);
var center_15872 = lettercomb.core.center_at.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15871,row], null),left_top,radius);
var letter_15873 = lettercomb.grid.get_odd_r.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15871,row], null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blank","blank",-1249652109),letter_15873)){
lettercomb.core.draw_hexagon_BANG_.call(null,ctx,center_15872,radius,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,lettercomb.core.open_cell),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15871,row], null)))?"#fff":"#000"));
} else {
var color_15874 = ((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.deref.call(null,lettercomb.core.current_word_cells)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15871,row], null)))?lettercomb.letters.darken.call(null,lettercomb.core.letter_color.call(null,letter_15873)):lettercomb.core.letter_color.call(null,letter_15873));
lettercomb.core.draw_letter_hex_BANG_.call(null,ctx,center_15872,radius,letter_15873,color_15874);
}

var G__15875 = cljs.core.next.call(null,seq__15848_15865__$1);
var G__15876 = null;
var G__15877 = (0);
var G__15878 = (0);
seq__15848_15852 = G__15875;
chunk__15849_15853 = G__15876;
count__15850_15854 = G__15877;
i__15851_15855 = G__15878;
continue;
}
} else {
}
}
break;
}

var G__15879 = seq__15840;
var G__15880 = chunk__15845;
var G__15881 = count__15846;
var G__15882 = (i__15847 + (1));
seq__15840 = G__15879;
chunk__15845 = G__15880;
count__15846 = G__15881;
i__15847 = G__15882;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15840);
if(temp__4425__auto__){
var seq__15840__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15840__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__15840__$1);
var G__15883 = cljs.core.chunk_rest.call(null,seq__15840__$1);
var G__15884 = c__5471__auto__;
var G__15885 = cljs.core.count.call(null,c__5471__auto__);
var G__15886 = (0);
seq__15840 = G__15883;
chunk__15845 = G__15884;
count__15846 = G__15885;
i__15847 = G__15886;
continue;
} else {
var row = cljs.core.first.call(null,seq__15840__$1);
var seq__15841_15887 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.nth.call(null,board,row))));
var chunk__15842_15888 = null;
var count__15843_15889 = (0);
var i__15844_15890 = (0);
while(true){
if((i__15844_15890 < count__15843_15889)){
var col_15891 = cljs.core._nth.call(null,chunk__15842_15888,i__15844_15890);
var center_15892 = lettercomb.core.center_at.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15891,row], null),left_top,radius);
var letter_15893 = lettercomb.grid.get_odd_r.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15891,row], null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blank","blank",-1249652109),letter_15893)){
lettercomb.core.draw_hexagon_BANG_.call(null,ctx,center_15892,radius,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,lettercomb.core.open_cell),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15891,row], null)))?"#fff":"#000"));
} else {
var color_15894 = ((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.deref.call(null,lettercomb.core.current_word_cells)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15891,row], null)))?lettercomb.letters.darken.call(null,lettercomb.core.letter_color.call(null,letter_15893)):lettercomb.core.letter_color.call(null,letter_15893));
lettercomb.core.draw_letter_hex_BANG_.call(null,ctx,center_15892,radius,letter_15893,color_15894);
}

var G__15895 = seq__15841_15887;
var G__15896 = chunk__15842_15888;
var G__15897 = count__15843_15889;
var G__15898 = (i__15844_15890 + (1));
seq__15841_15887 = G__15895;
chunk__15842_15888 = G__15896;
count__15843_15889 = G__15897;
i__15844_15890 = G__15898;
continue;
} else {
var temp__4425__auto___15899__$1 = cljs.core.seq.call(null,seq__15841_15887);
if(temp__4425__auto___15899__$1){
var seq__15841_15900__$1 = temp__4425__auto___15899__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15841_15900__$1)){
var c__5471__auto___15901 = cljs.core.chunk_first.call(null,seq__15841_15900__$1);
var G__15902 = cljs.core.chunk_rest.call(null,seq__15841_15900__$1);
var G__15903 = c__5471__auto___15901;
var G__15904 = cljs.core.count.call(null,c__5471__auto___15901);
var G__15905 = (0);
seq__15841_15887 = G__15902;
chunk__15842_15888 = G__15903;
count__15843_15889 = G__15904;
i__15844_15890 = G__15905;
continue;
} else {
var col_15906 = cljs.core.first.call(null,seq__15841_15900__$1);
var center_15907 = lettercomb.core.center_at.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15906,row], null),left_top,radius);
var letter_15908 = lettercomb.grid.get_odd_r.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15906,row], null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blank","blank",-1249652109),letter_15908)){
lettercomb.core.draw_hexagon_BANG_.call(null,ctx,center_15907,radius,((cljs.core._EQ_.call(null,cljs.core.deref.call(null,lettercomb.core.open_cell),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15906,row], null)))?"#fff":"#000"));
} else {
var color_15909 = ((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.deref.call(null,lettercomb.core.current_word_cells)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_15906,row], null)))?lettercomb.letters.darken.call(null,lettercomb.core.letter_color.call(null,letter_15908)):lettercomb.core.letter_color.call(null,letter_15908));
lettercomb.core.draw_letter_hex_BANG_.call(null,ctx,center_15907,radius,letter_15908,color_15909);
}

var G__15910 = cljs.core.next.call(null,seq__15841_15900__$1);
var G__15911 = null;
var G__15912 = (0);
var G__15913 = (0);
seq__15841_15887 = G__15910;
chunk__15842_15888 = G__15911;
count__15843_15889 = G__15912;
i__15844_15890 = G__15913;
continue;
}
} else {
}
}
break;
}

var G__15914 = cljs.core.next.call(null,seq__15840__$1);
var G__15915 = null;
var G__15916 = (0);
var G__15917 = (0);
seq__15840 = G__15914;
chunk__15845 = G__15915;
count__15846 = G__15916;
i__15847 = G__15917;
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
lettercomb.core.v__GT_angle = (function lettercomb$core$v__GT_angle(p__15918,p__15919){
var vec__15922 = p__15918;
var cx = cljs.core.nth.call(null,vec__15922,(0),null);
var cy = cljs.core.nth.call(null,vec__15922,(1),null);
var vec__15923 = p__15919;
var ex = cljs.core.nth.call(null,vec__15923,(0),null);
var ey = cljs.core.nth.call(null,vec__15923,(1),null);

return Math.atan2((ex - cx),(cy - ey));
});
lettercomb.core.v__GT_odd_r = (function lettercomb$core$v__GT_odd_r(v){
return cljs.core.comp.call(null,lettercomb.grid.axial_to_odd_r,cljs.core.partial.call(null,lettercomb.grid.pixel_to_axial,lettercomb.core.left_top,lettercomb.core.radius)).call(null,v);
});
lettercomb.core.next_coord = (function lettercomb$core$next_coord(angle,delta,p__15924){
var vec__15926 = p__15924;
var x = cljs.core.nth.call(null,vec__15926,(0),null);
var y = cljs.core.nth.call(null,vec__15926,(1),null);

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
var len__5726__auto___15933 = arguments.length;
var i__5727__auto___15934 = (0);
while(true){
if((i__5727__auto___15934 < len__5726__auto___15933)){
args__5733__auto__.push((arguments[i__5727__auto___15934]));

var G__15935 = (i__5727__auto___15934 + (1));
i__5727__auto___15934 = G__15935;
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
var vec__15931 = lettercomb.core.next_coord.call(null,angle,delta,point__$1);
var x = cljs.core.nth.call(null,vec__15931,(0),null);
var y = cljs.core.nth.call(null,vec__15931,(1),null);
var dest_coords = vec__15931;
var vec__15932 = lettercomb.core.v__GT_odd_r.call(null,dest_coords);
var col = cljs.core.nth.call(null,vec__15932,(0),null);
var row = cljs.core.nth.call(null,vec__15932,(1),null);
var dest_cell = vec__15932;
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
var G__15936 = board;
var G__15937 = angle;
var G__15938 = delta;
var G__15939 = dest_coords;
board = G__15936;
angle = G__15937;
delta = G__15938;
point = G__15939;
continue;
}
break;
}
});

lettercomb.core.destination_cell.cljs$lang$maxFixedArity = (3);

lettercomb.core.destination_cell.cljs$lang$applyTo = (function (seq15927){
var G__15928 = cljs.core.first.call(null,seq15927);
var seq15927__$1 = cljs.core.next.call(null,seq15927);
var G__15929 = cljs.core.first.call(null,seq15927__$1);
var seq15927__$2 = cljs.core.next.call(null,seq15927__$1);
var G__15930 = cljs.core.first.call(null,seq15927__$2);
var seq15927__$3 = cljs.core.next.call(null,seq15927__$2);
return lettercomb.core.destination_cell.cljs$core$IFn$_invoke$arity$variadic(G__15928,G__15929,G__15930,seq15927__$3);
});
lettercomb.core.write_letter_BANG_ = (function lettercomb$core$write_letter_BANG_(a_board,p__15940,letter_kw){
var vec__15942 = p__15940;
var col = cljs.core.nth.call(null,vec__15942,(0),null);
var row = cljs.core.nth.call(null,vec__15942,(1),null);
return cljs.core.swap_BANG_.call(null,a_board,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),letter_kw);
});
lettercomb.core.clear_cell_BANG_ = (function lettercomb$core$clear_cell_BANG_(a_board,cell){
return lettercomb.core.write_letter_BANG_.call(null,a_board,cell,new cljs.core.Keyword(null,"blank","blank",-1249652109));
});
lettercomb.core.write_word_BANG_ = (function lettercomb$core$write_word_BANG_(a_board,p__15943,word){
var vec__15949 = p__15943;
var start_col = cljs.core.nth.call(null,vec__15949,(0),null);
var start_row = cljs.core.nth.call(null,vec__15949,(1),null);
var up_word = word.toUpperCase();
var seq__15950 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,up_word)));
var chunk__15951 = null;
var count__15952 = (0);
var i__15953 = (0);
while(true){
if((i__15953 < count__15952)){
var i = cljs.core._nth.call(null,chunk__15951,i__15953);
lettercomb.core.write_letter_BANG_.call(null,a_board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + start_col),start_row], null),cljs.core.keyword.call(null,cljs.core.nth.call(null,up_word,i)));

var G__15954 = seq__15950;
var G__15955 = chunk__15951;
var G__15956 = count__15952;
var G__15957 = (i__15953 + (1));
seq__15950 = G__15954;
chunk__15951 = G__15955;
count__15952 = G__15956;
i__15953 = G__15957;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15950);
if(temp__4425__auto__){
var seq__15950__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15950__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__15950__$1);
var G__15958 = cljs.core.chunk_rest.call(null,seq__15950__$1);
var G__15959 = c__5471__auto__;
var G__15960 = cljs.core.count.call(null,c__5471__auto__);
var G__15961 = (0);
seq__15950 = G__15958;
chunk__15951 = G__15959;
count__15952 = G__15960;
i__15953 = G__15961;
continue;
} else {
var i = cljs.core.first.call(null,seq__15950__$1);
lettercomb.core.write_letter_BANG_.call(null,a_board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + start_col),start_row], null),cljs.core.keyword.call(null,cljs.core.nth.call(null,up_word,i)));

var G__15962 = cljs.core.next.call(null,seq__15950__$1);
var G__15963 = null;
var G__15964 = (0);
var G__15965 = (0);
seq__15950 = G__15962;
chunk__15951 = G__15963;
count__15952 = G__15964;
i__15953 = G__15965;
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
var v_15966 = lettercomb.core.e__GT_v.call(null,e);
var new_angle_15967 = lettercomb.core.v__GT_angle.call(null,lettercomb.core.page_center,v_15966);
lettercomb.core.handle_angle.call(null,new_angle_15967);

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
return clojure.string.lower_case.call(null,cljs.core.apply.call(null,cljs.core.str,(function (){var iter__5440__auto__ = (function lettercomb$core$selected_word_$_iter__15972(s__15973){
return (new cljs.core.LazySeq(null,(function (){
var s__15973__$1 = s__15973;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15973__$1);
if(temp__4425__auto__){
var s__15973__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15973__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__15973__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__15975 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__15974 = (0);
while(true){
if((i__15974 < size__5439__auto__)){
var cell = cljs.core._nth.call(null,c__5438__auto__,i__15974);
cljs.core.chunk_append.call(null,b__15975,cljs.core.name.call(null,(function (){var or__4668__auto__ = lettercomb.grid.get_odd_r.call(null,board,cell);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return "";
}
})()));

var G__15976 = (i__15974 + (1));
i__15974 = G__15976;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15975),lettercomb$core$selected_word_$_iter__15972.call(null,cljs.core.chunk_rest.call(null,s__15973__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15975),null);
}
} else {
var cell = cljs.core.first.call(null,s__15973__$2);
return cljs.core.cons.call(null,cljs.core.name.call(null,(function (){var or__4668__auto__ = lettercomb.grid.get_odd_r.call(null,board,cell);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return "";
}
})()),lettercomb$core$selected_word_$_iter__15972.call(null,cljs.core.rest.call(null,s__15973__$2)));
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
var seq__15981 = cljs.core.seq.call(null,word_cells);
var chunk__15982 = null;
var count__15983 = (0);
var i__15984 = (0);
while(true){
if((i__15984 < count__15983)){
var cell = cljs.core._nth.call(null,chunk__15982,i__15984);
lettercomb.core.clear_cell_BANG_.call(null,a_board,cell);

var G__15985 = seq__15981;
var G__15986 = chunk__15982;
var G__15987 = count__15983;
var G__15988 = (i__15984 + (1));
seq__15981 = G__15985;
chunk__15982 = G__15986;
count__15983 = G__15987;
i__15984 = G__15988;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15981);
if(temp__4425__auto__){
var seq__15981__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15981__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__15981__$1);
var G__15989 = cljs.core.chunk_rest.call(null,seq__15981__$1);
var G__15990 = c__5471__auto__;
var G__15991 = cljs.core.count.call(null,c__5471__auto__);
var G__15992 = (0);
seq__15981 = G__15989;
chunk__15982 = G__15990;
count__15983 = G__15991;
i__15984 = G__15992;
continue;
} else {
var cell = cljs.core.first.call(null,seq__15981__$1);
lettercomb.core.clear_cell_BANG_.call(null,a_board,cell);

var G__15993 = cljs.core.next.call(null,seq__15981__$1);
var G__15994 = null;
var G__15995 = (0);
var G__15996 = (0);
seq__15981 = G__15993;
chunk__15982 = G__15994;
count__15983 = G__15995;
i__15984 = G__15996;
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
var len__5726__auto___16000 = arguments.length;
var i__5727__auto___16001 = (0);
while(true){
if((i__5727__auto___16001 < len__5726__auto___16000)){
args__5733__auto__.push((arguments[i__5727__auto___16001]));

var G__16002 = (i__5727__auto___16001 + (1));
i__5727__auto___16001 = G__16002;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return lettercomb.core.handle_release.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

lettercomb.core.handle_release.cljs$core$IFn$_invoke$arity$variadic = (function (p__15998){
var vec__15999 = p__15998;
var e = cljs.core.nth.call(null,vec__15999,(0),null);
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

var hovered_word_16003 = lettercomb.core.selected_word.call(null,cljs.core.deref.call(null,lettercomb.core.board),cljs.core.deref.call(null,lettercomb.core.current_word_cells));
if(cljs.core.contains_QMARK_.call(null,lettercomb.core.word_set,hovered_word_16003)){
console.log([cljs.core.str(hovered_word_16003),cljs.core.str(" is a real word...")].join(''));

lettercomb.core.clear_selected_word_BANG_.call(null,lettercomb.core.board,cljs.core.deref.call(null,lettercomb.core.current_word_cells));

cljs.core.reset_BANG_.call(null,lettercomb.core.current_word_cells,cljs.core.PersistentVector.EMPTY);

lettercomb.core.increase_score_BANG_.call(null,lettercomb.letters.word_score.call(null,hovered_word_16003));
} else {
}

return cljs.core.reset_BANG_.call(null,lettercomb.core.hovered_cell,null);
});

lettercomb.core.handle_release.cljs$lang$maxFixedArity = (0);

lettercomb.core.handle_release.cljs$lang$applyTo = (function (seq15997){
return lettercomb.core.handle_release.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15997));
});
lettercomb.core.handle_touch_release = (function lettercomb$core$handle_touch_release(e){
var touch = lettercomb.core.first_touch.call(null,e);
return lettercomb.core.handle_release.call(null,touch);
});
lettercomb.core.handle_start = (function lettercomb$core$handle_start(var_args){
var args__5733__auto__ = [];
var len__5726__auto___16007 = arguments.length;
var i__5727__auto___16008 = (0);
while(true){
if((i__5727__auto___16008 < len__5726__auto___16007)){
args__5733__auto__.push((arguments[i__5727__auto___16008]));

var G__16009 = (i__5727__auto___16008 + (1));
i__5727__auto___16008 = G__16009;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return lettercomb.core.handle_start.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

lettercomb.core.handle_start.cljs$core$IFn$_invoke$arity$variadic = (function (p__16005){
var vec__16006 = p__16005;
var e = cljs.core.nth.call(null,vec__16006,(0),null);
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

lettercomb.core.handle_start.cljs$lang$applyTo = (function (seq16004){
return lettercomb.core.handle_start.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16004));
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
lettercomb.core.game_loop = (function lettercomb$core$game_loop(){
requestAnimationFrame(lettercomb$core$game_loop);

if(cljs.core.truth_(cljs.core.deref.call(null,lettercomb.core.playing_QMARK_))){
lettercomb.core.blacken_BANG_.call(null,lettercomb.core.ctx);

lettercomb.core.fill_board_BANG_.call(null,lettercomb.core.ctx,cljs.core.deref.call(null,lettercomb.core.board),lettercomb.core.left_top,lettercomb.core.radius);

lettercomb.core.draw_cannon_BANG_.call(null,lettercomb.core.ctx,lettercomb.core.the_center,lettercomb.core.radius,cljs.core.deref.call(null,lettercomb.core.angle),cljs.core.deref.call(null,lettercomb.core.next_letter));

lettercomb.core.draw_score_BANG_.call(null,lettercomb.core.ctx,cljs.core.deref.call(null,lettercomb.core.score));

var time_left_ms_16010 = (lettercomb.core.game_duration_ms + (cljs.core.deref.call(null,lettercomb.core.start_time) - (new Date()).getTime()));
var seconds_left_16011 = Math.floor((time_left_ms_16010 / (1000)));
lettercomb.core.draw_timer_BANG_.call(null,lettercomb.core.ctx,seconds_left_16011);

return lettercomb.core.draw_menu_BANG_.call(null,lettercomb.core.ctx);
} else {
return null;
}
});
lettercomb.core.init_BANG_ = (function lettercomb$core$init_BANG_(){
var pixel_ratio_16012 = window.devicePixelRatio;
lettercomb.core.canvas.width = (lettercomb.core.window_width.call(null) * pixel_ratio_16012);

lettercomb.core.canvas.height = (lettercomb.core.window_height.call(null) * pixel_ratio_16012);

lettercomb.core.canvas.style.width = [cljs.core.str(lettercomb.core.window_width.call(null)),cljs.core.str("px")].join('');

lettercomb.core.canvas.style.height = [cljs.core.str(lettercomb.core.window_height.call(null)),cljs.core.str("px")].join('');

lettercomb.core.ctx.scale(pixel_ratio_16012,pixel_ratio_16012);

lettercomb.core.ctx.strokeStyle = "#fff";

lettercomb.core.ctx.lineWidth = lettercomb.core.line_width;

lettercomb.core.ctx.font = [cljs.core.str("bold "),cljs.core.str(lettercomb.core.font_size),cljs.core.str("px Courier-Bold")].join('');

return cljs.core.reset_BANG_.call(null,lettercomb.core.start_time,(new Date()).getTime(),lettercomb.core.write_word_BANG_.call(null,lettercomb.core.board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),"hello"),lettercomb.core.write_word_BANG_.call(null,lettercomb.core.board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),"there"),lettercomb.core.add_event_listeners.call(null),lettercomb.core.game_loop.call(null));
});
lettercomb.core.init_BANG_.call(null);
lettercomb.core.pause_BANG_.call(null);
lettercomb.core.play_BANG_.call(null);
