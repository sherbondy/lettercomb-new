// Compiled by ClojureScript 1.7.170 {:static-fns true}
goog.provide('lettercomb.core');
goog.require('cljs.core');
goog.require('lettercomb.letters');
goog.require('lettercomb.grid');
goog.require('lettercomb.ternary_tree');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
if(cljs.core.truth_(window.ejecta)){
ejecta.include("resources/public/js/scrabble-words.js");
} else {
}
lettercomb.core.is_tv_QMARK_ = cljs.core.some_QMARK_(cljs.core.re_find(/AppleTV/,navigator.userAgent));
lettercomb.core.radius = (cljs.core.truth_(lettercomb.core.is_tv_QMARK_)?(48):(24));
lettercomb.core.line_width = (cljs.core.truth_(lettercomb.core.is_tv_QMARK_)?(4):(2));
lettercomb.core.angle = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(Math.PI) : cljs.core.atom.call(null,Math.PI));
lettercomb.core.hovered_cell = (function (){var G__16692 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16692) : cljs.core.atom.call(null,G__16692));
})();
lettercomb.core.open_cell = (function (){var G__16693 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16693) : cljs.core.atom.call(null,G__16693));
})();
lettercomb.core.next_letter = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"A","A",-1688942394)) : cljs.core.atom.call(null,new cljs.core.Keyword(null,"A","A",-1688942394)));
lettercomb.core.current_word_cells = (function (){var G__16694 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16694) : cljs.core.atom.call(null,G__16694));
})();
lettercomb.core.touch_down_QMARK_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
lettercomb.core.score = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
lettercomb.core.start_time = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
lettercomb.core.canvas = document.getElementById("canvas");
lettercomb.core.ctx = lettercomb.core.canvas.getContext("2d",{"antialias": lettercomb.core.is_tv_QMARK_, "antialiasSamples": (4)});
lettercomb.core.word_set = cljs.core.set(WORDS);
console.log(cljs.core.contains_QMARK_(lettercomb.core.word_set,"hello"));
lettercomb.core.window_width = (function lettercomb$core$window_width(){
return window.innerWidth;
});
lettercomb.core.window_height = (function lettercomb$core$window_height(){
return window.innerHeight;
});
lettercomb.core.hex_height = (function lettercomb$core$hex_height(radius){
return (2.0 * radius);
});
lettercomb.core.cos_pi_over_six = (function (){var G__16695 = (Math.PI / 6.0);
return Math.cos(G__16695);
})();
lettercomb.core.hex_width = (function lettercomb$core$hex_width(radius){
return ((2.0 * radius) * lettercomb.core.cos_pi_over_six);
});
lettercomb.core.board_h_count = (9);
lettercomb.core.board_v_count = (11);
lettercomb.core.board = (function (){var G__16696 = lettercomb.grid.make_rect_board(lettercomb.core.board_h_count,lettercomb.core.board_v_count);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16696) : cljs.core.atom.call(null,G__16696));
})();
lettercomb.core.left_top = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((lettercomb.core.window_width() - (lettercomb.core.board_h_count * lettercomb.core.hex_width(lettercomb.core.radius))) / (2)),((lettercomb.core.window_height() - ((0.75 * lettercomb.core.board_v_count) * lettercomb.core.hex_height(lettercomb.core.radius))) / (2))], null);
lettercomb.core.blacken_BANG_ = (function lettercomb$core$blacken_BANG_(ctx){
ctx.fillStyle = "#000";

return ctx.fillRect((0),(0),lettercomb.core.window_width(),lettercomb.core.window_height());
});
lettercomb.core.rand_hex_str = (function lettercomb$core$rand_hex_str(){
return (function (){var G__16698 = (Math.random() * (15));
return Math.round(G__16698);
})().toString((16));
});
lettercomb.core.rand_color_str = (function lettercomb$core$rand_color_str(){
return [cljs.core.str("#"),cljs.core.str(lettercomb.core.rand_hex_str()),cljs.core.str(lettercomb.core.rand_hex_str()),cljs.core.str(lettercomb.core.rand_hex_str())].join('');
});
lettercomb.core.hex_point = (function lettercomb$core$hex_point(p__16699,radius,i){
var vec__16701 = p__16699;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16701,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16701,(1),null);

var angle = ((Math.PI / 3.0) * (i + 0.5));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + (radius * Math.cos(angle))),(cy + (radius * Math.sin(angle)))], null);
});
lettercomb.core.hexagon = (function lettercomb$core$hexagon(center,radius){
var iter__5440__auto__ = (function lettercomb$core$hexagon_$_iter__16708(s__16709){
return (new cljs.core.LazySeq(null,(function (){
var s__16709__$1 = s__16709;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16709__$1);
if(temp__4425__auto__){
var s__16709__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16709__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__16709__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__16711 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__16710 = (0);
while(true){
if((i__16710 < size__5439__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__16710);
cljs.core.chunk_append(b__16711,lettercomb.core.hex_point(center,radius,i));

var G__16714 = (i__16710 + (1));
i__16710 = G__16714;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16711),lettercomb$core$hexagon_$_iter__16708(cljs.core.chunk_rest(s__16709__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16711),null);
}
} else {
var i = cljs.core.first(s__16709__$2);
return cljs.core.cons(lettercomb.core.hex_point(center,radius,i),lettercomb$core$hexagon_$_iter__16708(cljs.core.rest(s__16709__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((7)));
});
lettercomb.core.move_to_BANG_ = (function lettercomb$core$move_to_BANG_(ctx,p__16715){
var vec__16717 = p__16715;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16717,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16717,(1),null);
return ctx.moveTo(x,y);
});
lettercomb.core.line_to_BANG_ = (function lettercomb$core$line_to_BANG_(ctx,p__16718){
var vec__16720 = p__16718;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16720,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16720,(1),null);
return ctx.lineTo(x,y);
});
lettercomb.core.score_location = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(32)], null);
lettercomb.core.draw_score_BANG_ = (function lettercomb$core$draw_score_BANG_(ctx,score){
ctx.save();

ctx.fillStyle = "#fff";

ctx.fillText([cljs.core.str(score),cljs.core.str(" pts")].join(''),(lettercomb.core.score_location.cljs$core$IFn$_invoke$arity$1 ? lettercomb.core.score_location.cljs$core$IFn$_invoke$arity$1((0)) : lettercomb.core.score_location.call(null,(0))),(lettercomb.core.score_location.cljs$core$IFn$_invoke$arity$1 ? lettercomb.core.score_location.cljs$core$IFn$_invoke$arity$1((1)) : lettercomb.core.score_location.call(null,(1))));

return ctx.restore();
});
lettercomb.core.pad = (function lettercomb$core$pad(val,padding,size){
var str_val = [cljs.core.str(val)].join('');
var len = cljs.core.count(str_val);
var pad_size = (function (){var x__4999__auto__ = (0);
var y__5000__auto__ = (size - len);
return ((x__4999__auto__ > y__5000__auto__) ? x__4999__auto__ : y__5000__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad_size,padding)),str_val));
});
lettercomb.core.timer_location = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(lettercomb.core.window_width() - (32)),(32)], null);
lettercomb.core.draw_timer_BANG_ = (function lettercomb$core$draw_timer_BANG_(ctx,seconds_left){
ctx.save();

ctx.fillStyle = "#fff";

ctx.textAlign = "end";

var mins_16723 = (function (){var G__16722 = (seconds_left / (60));
return Math.floor(G__16722);
})();
var secs_16724 = cljs.core.mod(seconds_left,(60));
ctx.fillText([cljs.core.str(lettercomb.core.pad(mins_16723,"0",(2))),cljs.core.str(":"),cljs.core.str(lettercomb.core.pad(secs_16724,"0",(2)))].join(''),(lettercomb.core.timer_location.cljs$core$IFn$_invoke$arity$1 ? lettercomb.core.timer_location.cljs$core$IFn$_invoke$arity$1((0)) : lettercomb.core.timer_location.call(null,(0))),(lettercomb.core.timer_location.cljs$core$IFn$_invoke$arity$1 ? lettercomb.core.timer_location.cljs$core$IFn$_invoke$arity$1((1)) : lettercomb.core.timer_location.call(null,(1))));

return ctx.restore();
});
lettercomb.core.font_size = ((lettercomb.core.radius * (2)) / (3));
lettercomb.core.q_font_size = (lettercomb.core.font_size / (4));
lettercomb.core.menu_size = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(lettercomb.core.radius * (4)),(lettercomb.core.radius * 1.5)], null);
lettercomb.core.menu_position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((lettercomb.core.window_width() / (2)) - ((lettercomb.core.menu_size.cljs$core$IFn$_invoke$arity$1 ? lettercomb.core.menu_size.cljs$core$IFn$_invoke$arity$1((0)) : lettercomb.core.menu_size.call(null,(0))) / (2))),((lettercomb.core.window_height() - (lettercomb.core.menu_size.cljs$core$IFn$_invoke$arity$1 ? lettercomb.core.menu_size.cljs$core$IFn$_invoke$arity$1((1)) : lettercomb.core.menu_size.call(null,(1)))) - (lettercomb.core.radius * 0.5))], null);
lettercomb.core.draw_menu_BANG_ = (function lettercomb$core$draw_menu_BANG_(ctx){
ctx.save();

ctx.fillStyle = "#000";

ctx.beginPath();

ctx.rect((lettercomb.core.menu_position.cljs$core$IFn$_invoke$arity$1 ? lettercomb.core.menu_position.cljs$core$IFn$_invoke$arity$1((0)) : lettercomb.core.menu_position.call(null,(0))),(lettercomb.core.menu_position.cljs$core$IFn$_invoke$arity$1 ? lettercomb.core.menu_position.cljs$core$IFn$_invoke$arity$1((1)) : lettercomb.core.menu_position.call(null,(1))),(lettercomb.core.menu_size.cljs$core$IFn$_invoke$arity$1 ? lettercomb.core.menu_size.cljs$core$IFn$_invoke$arity$1((0)) : lettercomb.core.menu_size.call(null,(0))),(lettercomb.core.menu_size.cljs$core$IFn$_invoke$arity$1 ? lettercomb.core.menu_size.cljs$core$IFn$_invoke$arity$1((1)) : lettercomb.core.menu_size.call(null,(1))));

ctx.lineWidth = lettercomb.core.line_width;

ctx.strokeStyle = "#fff";

ctx.fill();

ctx.stroke();

ctx.fillStyle = "#fff";

ctx.textAlign = "center";

ctx.textBaseline = "middle";

ctx.fillText("MENU",((lettercomb.core.menu_position.cljs$core$IFn$_invoke$arity$1 ? lettercomb.core.menu_position.cljs$core$IFn$_invoke$arity$1((0)) : lettercomb.core.menu_position.call(null,(0))) + ((lettercomb.core.menu_size.cljs$core$IFn$_invoke$arity$1 ? lettercomb.core.menu_size.cljs$core$IFn$_invoke$arity$1((0)) : lettercomb.core.menu_size.call(null,(0))) * 0.5)),((lettercomb.core.menu_position.cljs$core$IFn$_invoke$arity$1 ? lettercomb.core.menu_position.cljs$core$IFn$_invoke$arity$1((1)) : lettercomb.core.menu_position.call(null,(1))) + ((lettercomb.core.menu_size.cljs$core$IFn$_invoke$arity$1 ? lettercomb.core.menu_size.cljs$core$IFn$_invoke$arity$1((1)) : lettercomb.core.menu_size.call(null,(1))) * 0.5)));

return ctx.restore();
});
lettercomb.core.draw_hexagon_BANG_ = (function lettercomb$core$draw_hexagon_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___16735 = arguments.length;
var i__5727__auto___16736 = (0);
while(true){
if((i__5727__auto___16736 < len__5726__auto___16735)){
args__5733__auto__.push((arguments[i__5727__auto___16736]));

var G__16737 = (i__5727__auto___16736 + (1));
i__5727__auto___16736 = G__16737;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return lettercomb.core.draw_hexagon_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

lettercomb.core.draw_hexagon_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,center,radius,p__16729){
var vec__16730 = p__16729;
var fill_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16730,(0),null);
ctx.beginPath();

ctx.fillStyle = (function (){var or__4668__auto__ = fill_color;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return "#000";
}
})();

lettercomb.core.move_to_BANG_(ctx,lettercomb.core.hex_point(center,radius,(0)));

var seq__16731_16738 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((7)));
var chunk__16732_16739 = null;
var count__16733_16740 = (0);
var i__16734_16741 = (0);
while(true){
if((i__16734_16741 < count__16733_16740)){
var i_16742 = chunk__16732_16739.cljs$core$IIndexed$_nth$arity$2(null,i__16734_16741);
lettercomb.core.line_to_BANG_(ctx,lettercomb.core.hex_point(center,radius,i_16742));

var G__16743 = seq__16731_16738;
var G__16744 = chunk__16732_16739;
var G__16745 = count__16733_16740;
var G__16746 = (i__16734_16741 + (1));
seq__16731_16738 = G__16743;
chunk__16732_16739 = G__16744;
count__16733_16740 = G__16745;
i__16734_16741 = G__16746;
continue;
} else {
var temp__4425__auto___16747 = cljs.core.seq(seq__16731_16738);
if(temp__4425__auto___16747){
var seq__16731_16748__$1 = temp__4425__auto___16747;
if(cljs.core.chunked_seq_QMARK_(seq__16731_16748__$1)){
var c__5471__auto___16749 = cljs.core.chunk_first(seq__16731_16748__$1);
var G__16750 = cljs.core.chunk_rest(seq__16731_16748__$1);
var G__16751 = c__5471__auto___16749;
var G__16752 = cljs.core.count(c__5471__auto___16749);
var G__16753 = (0);
seq__16731_16738 = G__16750;
chunk__16732_16739 = G__16751;
count__16733_16740 = G__16752;
i__16734_16741 = G__16753;
continue;
} else {
var i_16754 = cljs.core.first(seq__16731_16748__$1);
lettercomb.core.line_to_BANG_(ctx,lettercomb.core.hex_point(center,radius,i_16754));

var G__16755 = cljs.core.next(seq__16731_16748__$1);
var G__16756 = null;
var G__16757 = (0);
var G__16758 = (0);
seq__16731_16738 = G__16755;
chunk__16732_16739 = G__16756;
count__16733_16740 = G__16757;
i__16734_16741 = G__16758;
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

lettercomb.core.draw_hexagon_BANG_.cljs$lang$applyTo = (function (seq16725){
var G__16726 = cljs.core.first(seq16725);
var seq16725__$1 = cljs.core.next(seq16725);
var G__16727 = cljs.core.first(seq16725__$1);
var seq16725__$2 = cljs.core.next(seq16725__$1);
var G__16728 = cljs.core.first(seq16725__$2);
var seq16725__$3 = cljs.core.next(seq16725__$2);
return lettercomb.core.draw_hexagon_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16726,G__16727,G__16728,seq16725__$3);
});
lettercomb.core.draw_letter_BANG_ = (function lettercomb$core$draw_letter_BANG_(ctx,p__16759,letter){
var vec__16761 = p__16759;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16761,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16761,(1),null);
return ctx.fillText(letter,(cx - lettercomb.core.q_font_size),(cy + lettercomb.core.q_font_size));
});
lettercomb.core.letter_color = (function lettercomb$core$letter_color(letter){

var G__16763 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(lettercomb.letters.letter_points,letter,"#000");
return (lettercomb.letters.point_colors.cljs$core$IFn$_invoke$arity$1 ? lettercomb.letters.point_colors.cljs$core$IFn$_invoke$arity$1(G__16763) : lettercomb.letters.point_colors.call(null,G__16763));
});
lettercomb.core.draw_letter_hex_BANG_ = (function lettercomb$core$draw_letter_hex_BANG_(ctx,center,radius,letter,color){
lettercomb.core.draw_hexagon_BANG_.cljs$core$IFn$_invoke$arity$variadic(ctx,center,radius,cljs.core.array_seq([color], 0));

ctx.fillStyle = "#fff";

return lettercomb.core.draw_letter_BANG_(ctx,center,cljs.core.name(letter));
});
lettercomb.core.center_at = (function lettercomb$core$center_at(p__16764,p__16765,radius){
var vec__16768 = p__16764;
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16768,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16768,(1),null);
var vec__16769 = p__16765;
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16769,(0),null);
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16769,(1),null);
var hex_w = lettercomb.core.hex_width(radius);
var y_offset = (((3) * 0.5) * radius);
var x_offset = ((cljs.core.odd_QMARK_(row))?(hex_w / 2.0):(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((left + (col * hex_w)) + x_offset),(top + (row * y_offset))], null);
});
lettercomb.core.fill_board_BANG_ = (function lettercomb$core$fill_board_BANG_(ctx,board,left_top,radius){

var seq__16782 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(board)));
var chunk__16787 = null;
var count__16788 = (0);
var i__16789 = (0);
while(true){
if((i__16789 < count__16788)){
var row = chunk__16787.cljs$core$IIndexed$_nth$arity$2(null,i__16789);
var seq__16790_16794 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,row))));
var chunk__16791_16795 = null;
var count__16792_16796 = (0);
var i__16793_16797 = (0);
while(true){
if((i__16793_16797 < count__16792_16796)){
var col_16798 = chunk__16791_16795.cljs$core$IIndexed$_nth$arity$2(null,i__16793_16797);
var center_16799 = lettercomb.core.center_at(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_16798,row], null),left_top,radius);
var letter_16800 = lettercomb.grid.get_odd_r(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_16798,row], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blank","blank",-1249652109),letter_16800)){
lettercomb.core.draw_hexagon_BANG_.cljs$core$IFn$_invoke$arity$variadic(ctx,center_16799,radius,cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.open_cell) : cljs.core.deref.call(null,lettercomb.core.open_cell)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_16798,row], null)))?"#fff":"#000")], 0));
} else {
var color_16801 = ((cljs.core.contains_QMARK_(cljs.core.set((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.current_word_cells) : cljs.core.deref.call(null,lettercomb.core.current_word_cells))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_16798,row], null)))?lettercomb.letters.darken(lettercomb.core.letter_color(letter_16800)):lettercomb.core.letter_color(letter_16800));
lettercomb.core.draw_letter_hex_BANG_(ctx,center_16799,radius,letter_16800,color_16801);
}

var G__16802 = seq__16790_16794;
var G__16803 = chunk__16791_16795;
var G__16804 = count__16792_16796;
var G__16805 = (i__16793_16797 + (1));
seq__16790_16794 = G__16802;
chunk__16791_16795 = G__16803;
count__16792_16796 = G__16804;
i__16793_16797 = G__16805;
continue;
} else {
var temp__4425__auto___16806 = cljs.core.seq(seq__16790_16794);
if(temp__4425__auto___16806){
var seq__16790_16807__$1 = temp__4425__auto___16806;
if(cljs.core.chunked_seq_QMARK_(seq__16790_16807__$1)){
var c__5471__auto___16808 = cljs.core.chunk_first(seq__16790_16807__$1);
var G__16809 = cljs.core.chunk_rest(seq__16790_16807__$1);
var G__16810 = c__5471__auto___16808;
var G__16811 = cljs.core.count(c__5471__auto___16808);
var G__16812 = (0);
seq__16790_16794 = G__16809;
chunk__16791_16795 = G__16810;
count__16792_16796 = G__16811;
i__16793_16797 = G__16812;
continue;
} else {
var col_16813 = cljs.core.first(seq__16790_16807__$1);
var center_16814 = lettercomb.core.center_at(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_16813,row], null),left_top,radius);
var letter_16815 = lettercomb.grid.get_odd_r(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_16813,row], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blank","blank",-1249652109),letter_16815)){
lettercomb.core.draw_hexagon_BANG_.cljs$core$IFn$_invoke$arity$variadic(ctx,center_16814,radius,cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.open_cell) : cljs.core.deref.call(null,lettercomb.core.open_cell)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_16813,row], null)))?"#fff":"#000")], 0));
} else {
var color_16816 = ((cljs.core.contains_QMARK_(cljs.core.set((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.current_word_cells) : cljs.core.deref.call(null,lettercomb.core.current_word_cells))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_16813,row], null)))?lettercomb.letters.darken(lettercomb.core.letter_color(letter_16815)):lettercomb.core.letter_color(letter_16815));
lettercomb.core.draw_letter_hex_BANG_(ctx,center_16814,radius,letter_16815,color_16816);
}

var G__16817 = cljs.core.next(seq__16790_16807__$1);
var G__16818 = null;
var G__16819 = (0);
var G__16820 = (0);
seq__16790_16794 = G__16817;
chunk__16791_16795 = G__16818;
count__16792_16796 = G__16819;
i__16793_16797 = G__16820;
continue;
}
} else {
}
}
break;
}

var G__16821 = seq__16782;
var G__16822 = chunk__16787;
var G__16823 = count__16788;
var G__16824 = (i__16789 + (1));
seq__16782 = G__16821;
chunk__16787 = G__16822;
count__16788 = G__16823;
i__16789 = G__16824;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__16782);
if(temp__4425__auto__){
var seq__16782__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16782__$1)){
var c__5471__auto__ = cljs.core.chunk_first(seq__16782__$1);
var G__16825 = cljs.core.chunk_rest(seq__16782__$1);
var G__16826 = c__5471__auto__;
var G__16827 = cljs.core.count(c__5471__auto__);
var G__16828 = (0);
seq__16782 = G__16825;
chunk__16787 = G__16826;
count__16788 = G__16827;
i__16789 = G__16828;
continue;
} else {
var row = cljs.core.first(seq__16782__$1);
var seq__16783_16829 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(board,row))));
var chunk__16784_16830 = null;
var count__16785_16831 = (0);
var i__16786_16832 = (0);
while(true){
if((i__16786_16832 < count__16785_16831)){
var col_16833 = chunk__16784_16830.cljs$core$IIndexed$_nth$arity$2(null,i__16786_16832);
var center_16834 = lettercomb.core.center_at(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_16833,row], null),left_top,radius);
var letter_16835 = lettercomb.grid.get_odd_r(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_16833,row], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blank","blank",-1249652109),letter_16835)){
lettercomb.core.draw_hexagon_BANG_.cljs$core$IFn$_invoke$arity$variadic(ctx,center_16834,radius,cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.open_cell) : cljs.core.deref.call(null,lettercomb.core.open_cell)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_16833,row], null)))?"#fff":"#000")], 0));
} else {
var color_16836 = ((cljs.core.contains_QMARK_(cljs.core.set((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.current_word_cells) : cljs.core.deref.call(null,lettercomb.core.current_word_cells))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_16833,row], null)))?lettercomb.letters.darken(lettercomb.core.letter_color(letter_16835)):lettercomb.core.letter_color(letter_16835));
lettercomb.core.draw_letter_hex_BANG_(ctx,center_16834,radius,letter_16835,color_16836);
}

var G__16837 = seq__16783_16829;
var G__16838 = chunk__16784_16830;
var G__16839 = count__16785_16831;
var G__16840 = (i__16786_16832 + (1));
seq__16783_16829 = G__16837;
chunk__16784_16830 = G__16838;
count__16785_16831 = G__16839;
i__16786_16832 = G__16840;
continue;
} else {
var temp__4425__auto___16841__$1 = cljs.core.seq(seq__16783_16829);
if(temp__4425__auto___16841__$1){
var seq__16783_16842__$1 = temp__4425__auto___16841__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16783_16842__$1)){
var c__5471__auto___16843 = cljs.core.chunk_first(seq__16783_16842__$1);
var G__16844 = cljs.core.chunk_rest(seq__16783_16842__$1);
var G__16845 = c__5471__auto___16843;
var G__16846 = cljs.core.count(c__5471__auto___16843);
var G__16847 = (0);
seq__16783_16829 = G__16844;
chunk__16784_16830 = G__16845;
count__16785_16831 = G__16846;
i__16786_16832 = G__16847;
continue;
} else {
var col_16848 = cljs.core.first(seq__16783_16842__$1);
var center_16849 = lettercomb.core.center_at(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_16848,row], null),left_top,radius);
var letter_16850 = lettercomb.grid.get_odd_r(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_16848,row], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blank","blank",-1249652109),letter_16850)){
lettercomb.core.draw_hexagon_BANG_.cljs$core$IFn$_invoke$arity$variadic(ctx,center_16849,radius,cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.open_cell) : cljs.core.deref.call(null,lettercomb.core.open_cell)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_16848,row], null)))?"#fff":"#000")], 0));
} else {
var color_16851 = ((cljs.core.contains_QMARK_(cljs.core.set((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.current_word_cells) : cljs.core.deref.call(null,lettercomb.core.current_word_cells))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_16848,row], null)))?lettercomb.letters.darken(lettercomb.core.letter_color(letter_16850)):lettercomb.core.letter_color(letter_16850));
lettercomb.core.draw_letter_hex_BANG_(ctx,center_16849,radius,letter_16850,color_16851);
}

var G__16852 = cljs.core.next(seq__16783_16842__$1);
var G__16853 = null;
var G__16854 = (0);
var G__16855 = (0);
seq__16783_16829 = G__16852;
chunk__16784_16830 = G__16853;
count__16785_16831 = G__16854;
i__16786_16832 = G__16855;
continue;
}
} else {
}
}
break;
}

var G__16856 = cljs.core.next(seq__16782__$1);
var G__16857 = null;
var G__16858 = (0);
var G__16859 = (0);
seq__16782 = G__16856;
chunk__16787 = G__16857;
count__16788 = G__16858;
i__16789 = G__16859;
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
var mid_row = (function (){var G__16862 = (cljs.core.count(board) / (2));
return Math.floor(G__16862);
})();
var mid_col = (function (){var G__16863 = (cljs.core.count((board.cljs$core$IFn$_invoke$arity$1 ? board.cljs$core$IFn$_invoke$arity$1((0)) : board.call(null,(0)))) / (2));
return Math.floor(G__16863);
})();
return lettercomb.core.center_at(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mid_col,mid_row], null),left_top,radius);
});
lettercomb.core.draw_cannon_BANG_ = (function lettercomb$core$draw_cannon_BANG_(ctx,center,radius,angle,next_letter){
ctx.save();

ctx.translate((center.cljs$core$IFn$_invoke$arity$1 ? center.cljs$core$IFn$_invoke$arity$1((0)) : center.call(null,(0))),(center.cljs$core$IFn$_invoke$arity$1 ? center.cljs$core$IFn$_invoke$arity$1((1)) : center.call(null,(1))));

ctx.rotate(angle);

ctx.translate(((-1) * (center.cljs$core$IFn$_invoke$arity$1 ? center.cljs$core$IFn$_invoke$arity$1((0)) : center.call(null,(0)))),((-1) * (center.cljs$core$IFn$_invoke$arity$1 ? center.cljs$core$IFn$_invoke$arity$1((1)) : center.call(null,(1)))));

lettercomb.core.draw_hexagon_BANG_.cljs$core$IFn$_invoke$arity$variadic(ctx,center,radius,cljs.core.array_seq(["#fff"], 0));

lettercomb.core.draw_hexagon_BANG_.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(center.cljs$core$IFn$_invoke$arity$1 ? center.cljs$core$IFn$_invoke$arity$1((0)) : center.call(null,(0))),((center.cljs$core$IFn$_invoke$arity$1 ? center.cljs$core$IFn$_invoke$arity$1((1)) : center.call(null,(1))) - radius)], null),radius,cljs.core.array_seq(["#fff"], 0));

ctx.restore();

ctx.fillStyle = "#000";

return lettercomb.core.draw_letter_BANG_(ctx,center,cljs.core.name(next_letter));
});
lettercomb.core.playing_QMARK_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
lettercomb.core.play_BANG_ = (function lettercomb$core$play_BANG_(){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(lettercomb.core.playing_QMARK_,true) : cljs.core.reset_BANG_.call(null,lettercomb.core.playing_QMARK_,true));
});
lettercomb.core.pause_BANG_ = (function lettercomb$core$pause_BANG_(){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(lettercomb.core.playing_QMARK_,false) : cljs.core.reset_BANG_.call(null,lettercomb.core.playing_QMARK_,false));
});
lettercomb.core.e__GT_v = (function lettercomb$core$e__GT_v(e){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(e.pageX - lettercomb.core.canvas.offsetLeft),(e.pageY - lettercomb.core.canvas.offsetTop)], null);
});
lettercomb.core.v__GT_angle = (function lettercomb$core$v__GT_angle(p__16864,p__16865){
var vec__16870 = p__16864;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16870,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16870,(1),null);
var vec__16871 = p__16865;
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16871,(0),null);
var ey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16871,(1),null);

var G__16872 = (ex - cx);
var G__16873 = (cy - ey);
return Math.atan2(G__16872,G__16873);
});
lettercomb.core.v__GT_odd_r = (function lettercomb$core$v__GT_odd_r(v){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lettercomb.grid.axial_to_odd_r,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lettercomb.grid.pixel_to_axial,lettercomb.core.left_top,lettercomb.core.radius)).call(null,v);
});
lettercomb.core.next_coord = (function lettercomb$core$next_coord(angle,delta,p__16874){
var vec__16876 = p__16874;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16876,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16876,(1),null);

var next_x = (x + (Math.sin(angle) * delta));
var next_y = (y - (Math.cos(angle) * delta));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_x,next_y], null);
});
lettercomb.core.out_of_bounds_QMARK_ = (function lettercomb$core$out_of_bounds_QMARK_(board,point){
return (lettercomb.grid.get_odd_r(board,point) == null);
});
lettercomb.core.occupied_QMARK_ = (function lettercomb$core$occupied_QMARK_(board,cell){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blank","blank",-1249652109),lettercomb.grid.get_odd_r(board,cell));
});
lettercomb.core.canvas_offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lettercomb.core.canvas.offsetLeft,lettercomb.core.canvas.offsetTop], null);
lettercomb.core.the_center = lettercomb.core.board_center((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.board) : cljs.core.deref.call(null,lettercomb.core.board)),lettercomb.core.left_top,lettercomb.core.radius);
lettercomb.core.page_center = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((lettercomb.core.the_center.cljs$core$IFn$_invoke$arity$1 ? lettercomb.core.the_center.cljs$core$IFn$_invoke$arity$1((0)) : lettercomb.core.the_center.call(null,(0))) + (lettercomb.core.canvas_offset.cljs$core$IFn$_invoke$arity$1 ? lettercomb.core.canvas_offset.cljs$core$IFn$_invoke$arity$1((0)) : lettercomb.core.canvas_offset.call(null,(0)))),((lettercomb.core.the_center.cljs$core$IFn$_invoke$arity$1 ? lettercomb.core.the_center.cljs$core$IFn$_invoke$arity$1((1)) : lettercomb.core.the_center.call(null,(1))) + (lettercomb.core.canvas_offset.cljs$core$IFn$_invoke$arity$1 ? lettercomb.core.canvas_offset.cljs$core$IFn$_invoke$arity$1((1)) : lettercomb.core.canvas_offset.call(null,(1))))], null);
lettercomb.core.destination_cell = (function lettercomb$core$destination_cell(var_args){
var args__5733__auto__ = [];
var len__5726__auto___16883 = arguments.length;
var i__5727__auto___16884 = (0);
while(true){
if((i__5727__auto___16884 < len__5726__auto___16883)){
args__5733__auto__.push((arguments[i__5727__auto___16884]));

var G__16885 = (i__5727__auto___16884 + (1));
i__5727__auto___16884 = G__16885;
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
var current_cell = lettercomb.core.v__GT_odd_r(point__$1);
var vec__16881 = lettercomb.core.next_coord(angle,delta,point__$1);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16881,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16881,(1),null);
var dest_coords = vec__16881;
var vec__16882 = lettercomb.core.v__GT_odd_r(dest_coords);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16882,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16882,(1),null);
var dest_cell = vec__16882;
if(cljs.core.truth_((function (){var or__4668__auto__ = lettercomb.core.occupied_QMARK_(board,dest_cell);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return lettercomb.core.out_of_bounds_QMARK_(board,dest_cell);
}
})())){
if(cljs.core.not((function (){var or__4668__auto__ = lettercomb.core.occupied_QMARK_(board,current_cell);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return lettercomb.core.out_of_bounds_QMARK_(board,current_cell);
}
})())){
return current_cell;
} else {
return null;
}
} else {
var G__16886 = board;
var G__16887 = angle;
var G__16888 = delta;
var G__16889 = dest_coords;
board = G__16886;
angle = G__16887;
delta = G__16888;
point = G__16889;
continue;
}
break;
}
});

lettercomb.core.destination_cell.cljs$lang$maxFixedArity = (3);

lettercomb.core.destination_cell.cljs$lang$applyTo = (function (seq16877){
var G__16878 = cljs.core.first(seq16877);
var seq16877__$1 = cljs.core.next(seq16877);
var G__16879 = cljs.core.first(seq16877__$1);
var seq16877__$2 = cljs.core.next(seq16877__$1);
var G__16880 = cljs.core.first(seq16877__$2);
var seq16877__$3 = cljs.core.next(seq16877__$2);
return lettercomb.core.destination_cell.cljs$core$IFn$_invoke$arity$variadic(G__16878,G__16879,G__16880,seq16877__$3);
});
lettercomb.core.write_letter_BANG_ = (function lettercomb$core$write_letter_BANG_(a_board,p__16890,letter_kw){
var vec__16892 = p__16890;
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16892,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16892,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a_board,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),letter_kw);
});
lettercomb.core.clear_cell_BANG_ = (function lettercomb$core$clear_cell_BANG_(a_board,cell){
return lettercomb.core.write_letter_BANG_(a_board,cell,new cljs.core.Keyword(null,"blank","blank",-1249652109));
});
lettercomb.core.write_word_BANG_ = (function lettercomb$core$write_word_BANG_(a_board,p__16893,word){
var vec__16899 = p__16893;
var start_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16899,(0),null);
var start_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16899,(1),null);
var up_word = word.toUpperCase();
var seq__16900 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(up_word)));
var chunk__16901 = null;
var count__16902 = (0);
var i__16903 = (0);
while(true){
if((i__16903 < count__16902)){
var i = chunk__16901.cljs$core$IIndexed$_nth$arity$2(null,i__16903);
lettercomb.core.write_letter_BANG_(a_board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + start_col),start_row], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(up_word,i)));

var G__16904 = seq__16900;
var G__16905 = chunk__16901;
var G__16906 = count__16902;
var G__16907 = (i__16903 + (1));
seq__16900 = G__16904;
chunk__16901 = G__16905;
count__16902 = G__16906;
i__16903 = G__16907;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__16900);
if(temp__4425__auto__){
var seq__16900__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16900__$1)){
var c__5471__auto__ = cljs.core.chunk_first(seq__16900__$1);
var G__16908 = cljs.core.chunk_rest(seq__16900__$1);
var G__16909 = c__5471__auto__;
var G__16910 = cljs.core.count(c__5471__auto__);
var G__16911 = (0);
seq__16900 = G__16908;
chunk__16901 = G__16909;
count__16902 = G__16910;
i__16903 = G__16911;
continue;
} else {
var i = cljs.core.first(seq__16900__$1);
lettercomb.core.write_letter_BANG_(a_board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + start_col),start_row], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(up_word,i)));

var G__16912 = cljs.core.next(seq__16900__$1);
var G__16913 = null;
var G__16914 = (0);
var G__16915 = (0);
seq__16900 = G__16912;
chunk__16901 = G__16913;
count__16902 = G__16914;
i__16903 = G__16915;
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
var G__16918 = lettercomb.core.next_letter;
var G__16919 = lettercomb.letters.rand_letter();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16918,G__16919) : cljs.core.reset_BANG_.call(null,G__16918,G__16919));
});
lettercomb.core.hover_cell_BANG_ = (function lettercomb$core$hover_cell_BANG_(e){
var v = lettercomb.core.e__GT_v(e);
var coord = lettercomb.core.v__GT_odd_r(v);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(lettercomb.core.hovered_cell,coord) : cljs.core.reset_BANG_.call(null,lettercomb.core.hovered_cell,coord));
});
lettercomb.core.handle_angle = (function lettercomb$core$handle_angle(new_angle){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(lettercomb.core.angle,new_angle) : cljs.core.reset_BANG_.call(null,lettercomb.core.angle,new_angle));

var temp__4425__auto__ = lettercomb.core.destination_cell((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.board) : cljs.core.deref.call(null,lettercomb.core.board)),new_angle,(0.5 * lettercomb.core.radius));
if(cljs.core.truth_(temp__4425__auto__)){
var dest = temp__4425__auto__;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(lettercomb.core.open_cell,dest) : cljs.core.reset_BANG_.call(null,lettercomb.core.open_cell,dest));
} else {
return null;
}
});
lettercomb.core.handle_move = (function lettercomb$core$handle_move(e){
var v_16924 = lettercomb.core.e__GT_v(e);
var new_angle_16925 = lettercomb.core.v__GT_angle(lettercomb.core.page_center,v_16924);
lettercomb.core.handle_angle(new_angle_16925);

if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.touch_down_QMARK_) : cljs.core.deref.call(null,lettercomb.core.touch_down_QMARK_)))){
lettercomb.core.hover_cell_BANG_(e);

if(cljs.core.truth_(lettercomb.core.occupied_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.board) : cljs.core.deref.call(null,lettercomb.core.board)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.hovered_cell) : cljs.core.deref.call(null,lettercomb.core.hovered_cell))))){
if((!(cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.current_word_cells) : cljs.core.deref.call(null,lettercomb.core.current_word_cells))))) && (!(cljs.core.contains_QMARK_(cljs.core.set((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.current_word_cells) : cljs.core.deref.call(null,lettercomb.core.current_word_cells))),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.hovered_cell) : cljs.core.deref.call(null,lettercomb.core.hovered_cell)))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lettercomb.core.current_word_cells,cljs.core.conj,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.hovered_cell) : cljs.core.deref.call(null,lettercomb.core.hovered_cell)));
} else {
return null;
}
} else {
var G__16922 = lettercomb.core.current_word_cells;
var G__16923 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16922,G__16923) : cljs.core.reset_BANG_.call(null,G__16922,G__16923));
}
} else {
return null;
}
});
lettercomb.core.first_touch = (function lettercomb$core$first_touch(e){
return cljs.core.first(e.changedTouches);
});
lettercomb.core.handle_touch_move = (function lettercomb$core$handle_touch_move(e){
var touch = lettercomb.core.first_touch(e);
return lettercomb.core.handle_move(touch);
});
lettercomb.core.selected_word = (function lettercomb$core$selected_word(board,word_cells){
return clojure.string.lower_case(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__5440__auto__ = (function lettercomb$core$selected_word_$_iter__16932(s__16933){
return (new cljs.core.LazySeq(null,(function (){
var s__16933__$1 = s__16933;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16933__$1);
if(temp__4425__auto__){
var s__16933__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16933__$2)){
var c__5438__auto__ = cljs.core.chunk_first(s__16933__$2);
var size__5439__auto__ = cljs.core.count(c__5438__auto__);
var b__16935 = cljs.core.chunk_buffer(size__5439__auto__);
if((function (){var i__16934 = (0);
while(true){
if((i__16934 < size__5439__auto__)){
var cell = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5438__auto__,i__16934);
cljs.core.chunk_append(b__16935,cljs.core.name((function (){var or__4668__auto__ = lettercomb.grid.get_odd_r(board,cell);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return "";
}
})()));

var G__16938 = (i__16934 + (1));
i__16934 = G__16938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16935),lettercomb$core$selected_word_$_iter__16932(cljs.core.chunk_rest(s__16933__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16935),null);
}
} else {
var cell = cljs.core.first(s__16933__$2);
return cljs.core.cons(cljs.core.name((function (){var or__4668__auto__ = lettercomb.grid.get_odd_r(board,cell);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return "";
}
})()),lettercomb$core$selected_word_$_iter__16932(cljs.core.rest(s__16933__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__(word_cells);
})()));
});
lettercomb.core.clear_selected_word_BANG_ = (function lettercomb$core$clear_selected_word_BANG_(a_board,word_cells){
var seq__16943 = cljs.core.seq(word_cells);
var chunk__16944 = null;
var count__16945 = (0);
var i__16946 = (0);
while(true){
if((i__16946 < count__16945)){
var cell = chunk__16944.cljs$core$IIndexed$_nth$arity$2(null,i__16946);
lettercomb.core.clear_cell_BANG_(a_board,cell);

var G__16947 = seq__16943;
var G__16948 = chunk__16944;
var G__16949 = count__16945;
var G__16950 = (i__16946 + (1));
seq__16943 = G__16947;
chunk__16944 = G__16948;
count__16945 = G__16949;
i__16946 = G__16950;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__16943);
if(temp__4425__auto__){
var seq__16943__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16943__$1)){
var c__5471__auto__ = cljs.core.chunk_first(seq__16943__$1);
var G__16951 = cljs.core.chunk_rest(seq__16943__$1);
var G__16952 = c__5471__auto__;
var G__16953 = cljs.core.count(c__5471__auto__);
var G__16954 = (0);
seq__16943 = G__16951;
chunk__16944 = G__16952;
count__16945 = G__16953;
i__16946 = G__16954;
continue;
} else {
var cell = cljs.core.first(seq__16943__$1);
lettercomb.core.clear_cell_BANG_(a_board,cell);

var G__16955 = cljs.core.next(seq__16943__$1);
var G__16956 = null;
var G__16957 = (0);
var G__16958 = (0);
seq__16943 = G__16955;
chunk__16944 = G__16956;
count__16945 = G__16957;
i__16946 = G__16958;
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lettercomb.core.score,cljs.core._PLUS_,added_score);
});
lettercomb.core.handle_release = (function lettercomb$core$handle_release(var_args){
var args__5733__auto__ = [];
var len__5726__auto___16964 = arguments.length;
var i__5727__auto___16965 = (0);
while(true){
if((i__5727__auto___16965 < len__5726__auto___16964)){
args__5733__auto__.push((arguments[i__5727__auto___16965]));

var G__16966 = (i__5727__auto___16965 + (1));
i__5727__auto___16965 = G__16966;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return lettercomb.core.handle_release.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

lettercomb.core.handle_release.cljs$core$IFn$_invoke$arity$variadic = (function (p__16960){
var vec__16961 = p__16960;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16961,(0),null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(lettercomb.core.touch_down_QMARK_,false) : cljs.core.reset_BANG_.call(null,lettercomb.core.touch_down_QMARK_,false));

if(cljs.core.truth_(e)){
lettercomb.core.handle_move(e);
} else {
}

if(cljs.core.truth_((function (){var and__4656__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.open_cell) : cljs.core.deref.call(null,lettercomb.core.open_cell));
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.current_word_cells) : cljs.core.deref.call(null,lettercomb.core.current_word_cells)));
} else {
return and__4656__auto__;
}
})())){
lettercomb.core.write_letter_BANG_(lettercomb.core.board,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.open_cell) : cljs.core.deref.call(null,lettercomb.core.open_cell)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.next_letter) : cljs.core.deref.call(null,lettercomb.core.next_letter)));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(lettercomb.core.open_cell,null) : cljs.core.reset_BANG_.call(null,lettercomb.core.open_cell,null));

lettercomb.core.pick_random_letter_BANG_();
} else {
}

var hovered_word_16967 = lettercomb.core.selected_word((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.board) : cljs.core.deref.call(null,lettercomb.core.board)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.current_word_cells) : cljs.core.deref.call(null,lettercomb.core.current_word_cells)));
if(cljs.core.contains_QMARK_(lettercomb.core.word_set,hovered_word_16967)){
console.log([cljs.core.str(hovered_word_16967),cljs.core.str(" is a real word...")].join(''));

lettercomb.core.clear_selected_word_BANG_(lettercomb.core.board,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.current_word_cells) : cljs.core.deref.call(null,lettercomb.core.current_word_cells)));

var G__16962_16968 = lettercomb.core.current_word_cells;
var G__16963_16969 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16962_16968,G__16963_16969) : cljs.core.reset_BANG_.call(null,G__16962_16968,G__16963_16969));

lettercomb.core.increase_score_BANG_(lettercomb.letters.word_score(hovered_word_16967));
} else {
}

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(lettercomb.core.hovered_cell,null) : cljs.core.reset_BANG_.call(null,lettercomb.core.hovered_cell,null));
});

lettercomb.core.handle_release.cljs$lang$maxFixedArity = (0);

lettercomb.core.handle_release.cljs$lang$applyTo = (function (seq16959){
return lettercomb.core.handle_release.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16959));
});
lettercomb.core.handle_touch_release = (function lettercomb$core$handle_touch_release(e){
var touch = lettercomb.core.first_touch(e);
return lettercomb.core.handle_release.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([touch], 0));
});
lettercomb.core.handle_start = (function lettercomb$core$handle_start(var_args){
var args__5733__auto__ = [];
var len__5726__auto___16975 = arguments.length;
var i__5727__auto___16976 = (0);
while(true){
if((i__5727__auto___16976 < len__5726__auto___16975)){
args__5733__auto__.push((arguments[i__5727__auto___16976]));

var G__16977 = (i__5727__auto___16976 + (1));
i__5727__auto___16976 = G__16977;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return lettercomb.core.handle_start.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

lettercomb.core.handle_start.cljs$core$IFn$_invoke$arity$variadic = (function (p__16971){
var vec__16972 = p__16971;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16972,(0),null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(lettercomb.core.touch_down_QMARK_,true) : cljs.core.reset_BANG_.call(null,lettercomb.core.touch_down_QMARK_,true));

if(cljs.core.truth_(e)){
lettercomb.core.hover_cell_BANG_(e);

if(cljs.core.truth_(lettercomb.core.occupied_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.board) : cljs.core.deref.call(null,lettercomb.core.board)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.hovered_cell) : cljs.core.deref.call(null,lettercomb.core.hovered_cell))))){
var G__16973 = lettercomb.core.current_word_cells;
var G__16974 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.hovered_cell) : cljs.core.deref.call(null,lettercomb.core.hovered_cell))], null);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16973,G__16974) : cljs.core.reset_BANG_.call(null,G__16973,G__16974));
} else {
return null;
}
} else {
return null;
}
});

lettercomb.core.handle_start.cljs$lang$maxFixedArity = (0);

lettercomb.core.handle_start.cljs$lang$applyTo = (function (seq16970){
return lettercomb.core.handle_start.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16970));
});
lettercomb.core.handle_touch_start = (function lettercomb$core$handle_touch_start(e){
var touch = lettercomb.core.first_touch(e);
return lettercomb.core.handle_start.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([touch], 0));
});
cljs.core.add_watch(lettercomb.core.current_word_cells,new cljs.core.Keyword(null,"current-word","current-word",1786672226),(function (k,r,o,n){
return null;
}));
lettercomb.core.gamepads = (function (){var G__16978 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16978) : cljs.core.atom.call(null,G__16978));
})();
lettercomb.core.p1_gamepad = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
lettercomb.core.update_p1_gamepad_BANG_ = (function lettercomb$core$update_p1_gamepad_BANG_(){
var gamepads = navigator.getGamepads();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["setting p1 gamepad..."], 0));

if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),gamepads.length))){
var G__16981 = lettercomb.core.p1_gamepad;
var G__16982 = (gamepads[(0)]);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16981,G__16982) : cljs.core.reset_BANG_.call(null,G__16981,G__16982));
} else {
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(lettercomb.core.p1_gamepad,null) : cljs.core.reset_BANG_.call(null,lettercomb.core.p1_gamepad,null));
}
});
lettercomb.core.add_gamepad_BANG_ = (function lettercomb$core$add_gamepad_BANG_(e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["gamepad added..."], 0));

var index = e.gamepad.index;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lettercomb.core.gamepads,cljs.core.assoc,e.gamepad.id,index);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(0))){
return lettercomb.core.update_p1_gamepad_BANG_();
} else {
return null;
}
});
lettercomb.core.remove_gamepad_BANG_ = (function lettercomb$core$remove_gamepad_BANG_(e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["gamepad removed..."], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lettercomb.core.gamepads,cljs.core.dissoc,e.gamepad.id);

return lettercomb.core.update_p1_gamepad_BANG_();
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
lettercomb.core.handle_start();
} else {
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.touch_down_QMARK_) : cljs.core.deref.call(null,lettercomb.core.touch_down_QMARK_)))){
lettercomb.core.handle_release();
} else {
}
}

if((cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.touch_down_QMARK_) : cljs.core.deref.call(null,lettercomb.core.touch_down_QMARK_)))) && ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(left_stick_h,(0))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(left_stick_v,(0))))){
var stick_angle = (function (){var G__16985 = left_stick_h;
var G__16986 = ((-1) * left_stick_v);
return Math.atan2(G__16985,G__16986);
})();
return lettercomb.core.handle_angle(stick_angle);
} else {
return null;
}
} else {
return null;
}
});
var G__16987_16989 = (function (){
return lettercomb.core.handle_gamepads();
});
var G__16988_16990 = (16);
setInterval(G__16987_16989,G__16988_16990);
lettercomb.core.game_duration_ms = (((5) * (60)) * (1000));
lettercomb.core.game_loop = (function lettercomb$core$game_loop(){
requestAnimationFrame(lettercomb$core$game_loop);

if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.playing_QMARK_) : cljs.core.deref.call(null,lettercomb.core.playing_QMARK_)))){
lettercomb.core.blacken_BANG_(lettercomb.core.ctx);

lettercomb.core.fill_board_BANG_(lettercomb.core.ctx,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.board) : cljs.core.deref.call(null,lettercomb.core.board)),lettercomb.core.left_top,lettercomb.core.radius);

lettercomb.core.draw_cannon_BANG_(lettercomb.core.ctx,lettercomb.core.the_center,lettercomb.core.radius,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.angle) : cljs.core.deref.call(null,lettercomb.core.angle)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.next_letter) : cljs.core.deref.call(null,lettercomb.core.next_letter)));

lettercomb.core.draw_score_BANG_(lettercomb.core.ctx,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.score) : cljs.core.deref.call(null,lettercomb.core.score)));

var time_left_ms_16993 = (lettercomb.core.game_duration_ms + ((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lettercomb.core.start_time) : cljs.core.deref.call(null,lettercomb.core.start_time)) - (new Date()).getTime()));
var seconds_left_16994 = (function (){var G__16992 = (time_left_ms_16993 / (1000));
return Math.floor(G__16992);
})();
lettercomb.core.draw_timer_BANG_(lettercomb.core.ctx,seconds_left_16994);

return lettercomb.core.draw_menu_BANG_(lettercomb.core.ctx);
} else {
return null;
}
});
lettercomb.core.init_BANG_ = (function lettercomb$core$init_BANG_(){
var pixel_ratio_17007 = window.devicePixelRatio;
lettercomb.core.canvas.width = (lettercomb.core.window_width() * pixel_ratio_17007);

lettercomb.core.canvas.height = (lettercomb.core.window_height() * pixel_ratio_17007);

lettercomb.core.canvas.style.width = [cljs.core.str(lettercomb.core.window_width()),cljs.core.str("px")].join('');

lettercomb.core.canvas.style.height = [cljs.core.str(lettercomb.core.window_height()),cljs.core.str("px")].join('');

lettercomb.core.ctx.scale(pixel_ratio_17007,pixel_ratio_17007);

lettercomb.core.ctx.strokeStyle = "#fff";

lettercomb.core.ctx.lineWidth = lettercomb.core.line_width;

lettercomb.core.ctx.font = [cljs.core.str("bold "),cljs.core.str(lettercomb.core.font_size),cljs.core.str("px Courier-Bold")].join('');

var G__17001 = lettercomb.core.start_time;
var G__17002 = (new Date()).getTime();
var G__17003 = lettercomb.core.write_word_BANG_(lettercomb.core.board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),"hello");
var G__17004 = lettercomb.core.write_word_BANG_(lettercomb.core.board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),"there");
var G__17005 = lettercomb.core.add_event_listeners();
var G__17006 = lettercomb.core.game_loop();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$6 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$6(G__17001,G__17002,G__17003,G__17004,G__17005,G__17006) : cljs.core.reset_BANG_.call(null,G__17001,G__17002,G__17003,G__17004,G__17005,G__17006));
});
lettercomb.core.init_BANG_();
lettercomb.core.pause_BANG_();
lettercomb.core.play_BANG_();
