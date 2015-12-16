// Compiled by ClojureScript 1.7.170 {:static-fns true}
goog.provide('lettercomb.ternary_tree');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.test');

/**
 * @interface
 */
lettercomb.ternary_tree.TSTree = function(){};

lettercomb.ternary_tree.search = (function lettercomb$ternary_tree$search(this$,word){
if((!((this$ == null))) && (!((this$.lettercomb$ternary_tree$TSTree$search$arity$2 == null)))){
return this$.lettercomb$ternary_tree$TSTree$search$arity$2(this$,word);
} else {
var x__5323__auto__ = (((this$ == null))?null:this$);
var m__5324__auto__ = (lettercomb.ternary_tree.search[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(this$,word) : m__5324__auto__.call(null,this$,word));
} else {
var m__5324__auto____$1 = (lettercomb.ternary_tree.search["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,word) : m__5324__auto____$1.call(null,this$,word));
} else {
throw cljs.core.missing_protocol("TSTree.search",this$);
}
}
}
});

lettercomb.ternary_tree.insert = (function lettercomb$ternary_tree$insert(this$,word){
if((!((this$ == null))) && (!((this$.lettercomb$ternary_tree$TSTree$insert$arity$2 == null)))){
return this$.lettercomb$ternary_tree$TSTree$insert$arity$2(this$,word);
} else {
var x__5323__auto__ = (((this$ == null))?null:this$);
var m__5324__auto__ = (lettercomb.ternary_tree.insert[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$2(this$,word) : m__5324__auto__.call(null,this$,word));
} else {
var m__5324__auto____$1 = (lettercomb.ternary_tree.insert["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,word) : m__5324__auto____$1.call(null,this$,word));
} else {
throw cljs.core.missing_protocol("TSTree.insert",this$);
}
}
}
});

lettercomb.ternary_tree.size = (function lettercomb$ternary_tree$size(this$){
if((!((this$ == null))) && (!((this$.lettercomb$ternary_tree$TSTree$size$arity$1 == null)))){
return this$.lettercomb$ternary_tree$TSTree$size$arity$1(this$);
} else {
var x__5323__auto__ = (((this$ == null))?null:this$);
var m__5324__auto__ = (lettercomb.ternary_tree.size[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return (m__5324__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5324__auto__.call(null,this$));
} else {
var m__5324__auto____$1 = (lettercomb.ternary_tree.size["_"]);
if(!((m__5324__auto____$1 == null))){
return (m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5324__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5324__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("TSTree.size",this$);
}
}
}
});

lettercomb.ternary_tree.pick_child = (function lettercomb$ternary_tree$pick_child(letter,node_letter){
if((letter < node_letter)){
return new cljs.core.Keyword(null,"lo","lo",-931799889);
} else {
if((letter > node_letter)){
return new cljs.core.Keyword(null,"hi","hi",-1821422114);
} else {
return new cljs.core.Keyword(null,"eq","eq",-618539067);

}
}
});
lettercomb.ternary_tree.get_node_size = (function lettercomb$ternary_tree$get_node_size(node){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16596_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16596_SHARP_,new cljs.core.Keyword(null,"size","size",1098693007)], null),(0));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lo","lo",-931799889),new cljs.core.Keyword(null,"eq","eq",-618539067),new cljs.core.Keyword(null,"hi","hi",-1821422114)], null))) + (1));
});
lettercomb.ternary_tree.TSTNode;
lettercomb.ternary_tree.letter_node = (function lettercomb$ternary_tree$letter_node(letter){
return (new lettercomb.ternary_tree.TSTNode(letter,false,null,null,null,(1)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {lettercomb.ternary_tree.TSTree}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
lettercomb.ternary_tree.TSTNode = (function (letter,terminal_QMARK_,lo,eq,hi,size,__meta,__extmap,__hash){
this.letter = letter;
this.terminal_QMARK_ = terminal_QMARK_;
this.lo = lo;
this.eq = eq;
this.hi = hi;
this.size = size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
lettercomb.ternary_tree.TSTNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5282__auto____$1,k__5283__auto__,null);
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k16598,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__16600 = (((k16598 instanceof cljs.core.Keyword))?k16598.fqn:null);
switch (G__16600) {
case "letter":
return self__.letter;

break;
case "terminal?":
return self__.terminal_QMARK_;

break;
case "lo":
return self__.lo;

break;
case "eq":
return self__.eq;

break;
case "hi":
return self__.hi;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16598,else__5285__auto__);

}
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer(writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5297__auto__,pr_pair__5299__auto__,"#lettercomb.ternary-tree.TSTNode{",", ","}",opts__5298__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"letter","letter",-125811450),self__.letter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),self__.terminal_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lo","lo",-931799889),self__.lo],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eq","eq",-618539067),self__.eq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hi","hi",-1821422114),self__.hi],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IIterable$ = true;

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16597){
var self__ = this;
var G__16597__$1 = this;
return (new cljs.core.RecordIter((0),G__16597__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letter","letter",-125811450),new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),new cljs.core.Keyword(null,"lo","lo",-931799889),new cljs.core.Keyword(null,"eq","eq",-618539067),new cljs.core.Keyword(null,"hi","hi",-1821422114),new cljs.core.Keyword(null,"size","size",1098693007)], null),cljs.core._iterator(self__.__extmap)));
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.lo,self__.eq,self__.hi,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
var self__ = this;
var this__5277__auto____$1 = this;
var h__5103__auto__ = self__.__hash;
if(!((h__5103__auto__ == null))){
return h__5103__auto__;
} else {
var h__5103__auto____$1 = cljs.core.hash_imap(this__5277__auto____$1);
self__.__hash = h__5103__auto____$1;

return h__5103__auto____$1;
}
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5278__auto__,other__5279__auto__){
var self__ = this;
var this__5278__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4656__auto__ = other__5279__auto__;
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = (this__5278__auto____$1.constructor === other__5279__auto__.constructor);
if(and__4656__auto____$1){
return cljs.core.equiv_map(this__5278__auto____$1,other__5279__auto__);
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
return true;
} else {
return false;
}
});

lettercomb.ternary_tree.TSTNode.prototype.lettercomb$ternary_tree$TSTree$ = true;

lettercomb.ternary_tree.TSTNode.prototype.lettercomb$ternary_tree$TSTree$insert$arity$2 = (function (this$,word){
var self__ = this;
var this$__$1 = this;
var letter__$1 = cljs.core.first(word);
var r_word = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(word,(1));
if(!(clojure.string.blank_QMARK_(letter__$1))){
var child_key = lettercomb.ternary_tree.pick_child(letter__$1,new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(this$__$1));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$__$1,child_key);
return ((function (child_key,node,letter__$1,r_word,this$__$1){
return (function (root){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(root,new cljs.core.Keyword(null,"size","size",1098693007),lettercomb.ternary_tree.get_node_size(root));
});})(child_key,node,letter__$1,r_word,this$__$1))
.call(null,((function (child_key,node,letter__$1,r_word,this$__$1){
return (function (root){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(root,new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),((function (child_key,node,letter__$1,r_word,this$__$1){
return (function (v){
var or__4668__auto__ = v;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (clojure.string.blank_QMARK_(r_word)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(root),letter__$1));
}
});})(child_key,node,letter__$1,r_word,this$__$1))
);
});})(child_key,node,letter__$1,r_word,this$__$1))
.call(null,((function (child_key,node,letter__$1,r_word,this$__$1){
return (function (root){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child_key,new cljs.core.Keyword(null,"eq","eq",-618539067))){
var n_letter = cljs.core.first(r_word);
var node__$1 = (function (){var or__4668__auto__ = node;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return lettercomb.ternary_tree.letter_node(n_letter);
}
})();
var n_node = lettercomb.ternary_tree.insert(node__$1,r_word);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(root,child_key,n_node);
} else {
var node__$1 = (function (){var or__4668__auto__ = node;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return lettercomb.ternary_tree.letter_node(letter__$1);
}
})();
var n_node = lettercomb.ternary_tree.insert(node__$1,word);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(root,child_key,n_node);
}
});})(child_key,node,letter__$1,r_word,this$__$1))
.call(null,this$__$1)));
} else {
return this$__$1;
}
});

lettercomb.ternary_tree.TSTNode.prototype.lettercomb$ternary_tree$TSTree$search$arity$2 = (function (this$,word){
var self__ = this;
var this$__$1 = this;
var letter__$1 = cljs.core.first(word);
var r_word = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(word,(1));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this: ",this$__$1], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["letter: ",letter__$1,"rest: ",r_word], 0));

var child_key = lettercomb.ternary_tree.pick_child(letter__$1,new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(this$__$1));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["child: ",child_key], 0));

var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$__$1,child_key);
if(cljs.core.truth_(temp__4423__auto__)){
var node = temp__4423__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(letter__$1,new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(node))){
if(clojure.string.blank_QMARK_(r_word)){
var and__4656__auto__ = new cljs.core.Keyword(null,"terminal?","terminal?",-851436688).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(letter__$1,new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(node));
} else {
return and__4656__auto__;
}
} else {
return lettercomb.ternary_tree.search(node,r_word);
}
} else {
return lettercomb.ternary_tree.search(node,word);
}
} else {
return false;
}
});

lettercomb.ternary_tree.TSTNode.prototype.lettercomb$ternary_tree$TSTree$size$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eq","eq",-618539067),null,new cljs.core.Keyword(null,"letter","letter",-125811450),null,new cljs.core.Keyword(null,"lo","lo",-931799889),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),null,new cljs.core.Keyword(null,"hi","hi",-1821422114),null], null), null),k__5292__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.lo,self__.eq,self__.hi,self__.size,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5292__auto__)),null));
}
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__16597){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__16601 = cljs.core.keyword_identical_QMARK_;
var expr__16602 = k__5290__auto__;
if(cljs.core.truth_((pred__16601.cljs$core$IFn$_invoke$arity$2 ? pred__16601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"letter","letter",-125811450),expr__16602) : pred__16601.call(null,new cljs.core.Keyword(null,"letter","letter",-125811450),expr__16602)))){
return (new lettercomb.ternary_tree.TSTNode(G__16597,self__.terminal_QMARK_,self__.lo,self__.eq,self__.hi,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16601.cljs$core$IFn$_invoke$arity$2 ? pred__16601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),expr__16602) : pred__16601.call(null,new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),expr__16602)))){
return (new lettercomb.ternary_tree.TSTNode(self__.letter,G__16597,self__.lo,self__.eq,self__.hi,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16601.cljs$core$IFn$_invoke$arity$2 ? pred__16601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lo","lo",-931799889),expr__16602) : pred__16601.call(null,new cljs.core.Keyword(null,"lo","lo",-931799889),expr__16602)))){
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,G__16597,self__.eq,self__.hi,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16601.cljs$core$IFn$_invoke$arity$2 ? pred__16601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eq","eq",-618539067),expr__16602) : pred__16601.call(null,new cljs.core.Keyword(null,"eq","eq",-618539067),expr__16602)))){
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.lo,G__16597,self__.hi,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16601.cljs$core$IFn$_invoke$arity$2 ? pred__16601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hi","hi",-1821422114),expr__16602) : pred__16601.call(null,new cljs.core.Keyword(null,"hi","hi",-1821422114),expr__16602)))){
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.lo,self__.eq,G__16597,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16601.cljs$core$IFn$_invoke$arity$2 ? pred__16601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"size","size",1098693007),expr__16602) : pred__16601.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__16602)))){
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.lo,self__.eq,self__.hi,G__16597,self__.__meta,self__.__extmap,null));
} else {
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.lo,self__.eq,self__.hi,self__.size,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5290__auto__,G__16597),null));
}
}
}
}
}
}
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"letter","letter",-125811450),self__.letter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),self__.terminal_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lo","lo",-931799889),self__.lo],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eq","eq",-618539067),self__.eq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hi","hi",-1821422114),self__.hi],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__16597){
var self__ = this;
var this__5281__auto____$1 = this;
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.lo,self__.eq,self__.hi,self__.size,G__16597,self__.__extmap,self__.__hash));
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5288__auto__)){
return cljs.core._assoc(this__5287__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

lettercomb.ternary_tree.TSTNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"letter","letter",1514720077,null),new cljs.core.Symbol(null,"terminal?","terminal?",789094839,null),new cljs.core.Symbol(null,"lo","lo",708731638,null),new cljs.core.Symbol(null,"eq","eq",1021992460,null),new cljs.core.Symbol(null,"hi","hi",-180890587,null),new cljs.core.Symbol(null,"size","size",-1555742762,null)], null);
});

lettercomb.ternary_tree.TSTNode.cljs$lang$type = true;

lettercomb.ternary_tree.TSTNode.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"lettercomb.ternary-tree/TSTNode");
});

lettercomb.ternary_tree.TSTNode.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write(writer__5317__auto__,"lettercomb.ternary-tree/TSTNode");
});

lettercomb.ternary_tree.__GT_TSTNode = (function lettercomb$ternary_tree$__GT_TSTNode(letter,terminal_QMARK_,lo,eq,hi,size){
return (new lettercomb.ternary_tree.TSTNode(letter,terminal_QMARK_,lo,eq,hi,size,null,null,null));
});

lettercomb.ternary_tree.map__GT_TSTNode = (function lettercomb$ternary_tree$map__GT_TSTNode(G__16599){
return (new lettercomb.ternary_tree.TSTNode(new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(G__16599),new cljs.core.Keyword(null,"terminal?","terminal?",-851436688).cljs$core$IFn$_invoke$arity$1(G__16599),new cljs.core.Keyword(null,"lo","lo",-931799889).cljs$core$IFn$_invoke$arity$1(G__16599),new cljs.core.Keyword(null,"eq","eq",-618539067).cljs$core$IFn$_invoke$arity$1(G__16599),new cljs.core.Keyword(null,"hi","hi",-1821422114).cljs$core$IFn$_invoke$arity$1(G__16599),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__16599),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16599,new cljs.core.Keyword(null,"letter","letter",-125811450),cljs.core.array_seq([new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),new cljs.core.Keyword(null,"lo","lo",-931799889),new cljs.core.Keyword(null,"eq","eq",-618539067),new cljs.core.Keyword(null,"hi","hi",-1821422114),new cljs.core.Keyword(null,"size","size",1098693007)], 0)),null));
});

cljs.core.enable_console_print_BANG_();
lettercomb.ternary_tree.build_root_word_tst = (function lettercomb$ternary_tree$build_root_word_tst(word){
var root_node = lettercomb.ternary_tree.letter_node(cljs.core.first(word));
return lettercomb.ternary_tree.insert(root_node,word);
});
lettercomb.ternary_tree.add_slice_tst = (function lettercomb$ternary_tree$add_slice_tst(sorted_array,tst){
var len = cljs.core.count(sorted_array);
var med_i = (len >> (1));
var med_word = (sorted_array[med_i]);
var left_array = sorted_array.slice((0),med_i);
var right_array = sorted_array.slice((med_i + (1)),len);
return ((function (left_array,right_array,len,med_i,med_word){
return (function (p1__16607_SHARP_){
if(cljs.core.empty_QMARK_(right_array)){
return p1__16607_SHARP_;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(right_array))){
return lettercomb.ternary_tree.insert(p1__16607_SHARP_,cljs.core.first(right_array));
} else {
return lettercomb$ternary_tree$add_slice_tst(right_array,p1__16607_SHARP_);

}
}
});})(left_array,right_array,len,med_i,med_word))
.call(null,((function (left_array,right_array,len,med_i,med_word){
return (function (p1__16606_SHARP_){
if(cljs.core.empty_QMARK_(left_array)){
return p1__16606_SHARP_;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(left_array))){
return lettercomb.ternary_tree.insert(p1__16606_SHARP_,cljs.core.first(left_array));
} else {
return lettercomb$ternary_tree$add_slice_tst(left_array,p1__16606_SHARP_);

}
}
});})(left_array,right_array,len,med_i,med_word))
.call(null,((function (left_array,right_array,len,med_i,med_word){
return (function (p1__16605_SHARP_){
if(cljs.core.truth_(p1__16605_SHARP_)){
return lettercomb.ternary_tree.insert(p1__16605_SHARP_,med_word);
} else {
return lettercomb.ternary_tree.build_root_word_tst(med_word);
}
});})(left_array,right_array,len,med_i,med_word))
.call(null,tst)));
});
lettercomb.ternary_tree.build_tst = (function lettercomb$ternary_tree$build_tst(dict_array){

var cloned_array = dict_array.slice((0),dict_array.length);
var sorted_array = cloned_array.sort();
return lettercomb.ternary_tree.add_slice_tst(sorted_array,null);
});
lettercomb.ternary_tree.test_letter_node = (function lettercomb$ternary_tree$test_letter_node(){
return cljs.test.test_var(lettercomb$ternary_tree$test_letter_node.cljs$lang$var);
});
lettercomb.ternary_tree.test_letter_node.cljs$lang$test = (function (){
var a_node = lettercomb.ternary_tree.letter_node("a");
try{var values__11863__auto___16614 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(1)),lettercomb.ternary_tree.size(a_node));
var result__11864__auto___16615 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11863__auto___16614);
if(cljs.core.truth_(result__11864__auto___16615)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"a-node","a-node",1782588205,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__11863__auto___16614),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"a-node","a-node",1782588205,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11863__auto___16614)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16608){var t__11901__auto___16616 = e16608;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"a-node","a-node",1782588205,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__11901__auto___16616,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__11863__auto___16617 = cljs.core._conj(cljs.core.List.EMPTY,lettercomb.ternary_tree.search(a_node,"a"));
var result__11864__auto___16618 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,values__11863__auto___16617);
if(cljs.core.truth_(result__11864__auto___16618)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"a-node","a-node",1782588205,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core.false_QMARK_,values__11863__auto___16617),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"a-node","a-node",1782588205,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__11863__auto___16617)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16609){var t__11901__auto___16619 = e16609;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"a-node","a-node",1782588205,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11901__auto___16619,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var an_node = lettercomb.ternary_tree.insert(a_node,"an");
try{var values__11863__auto___16620 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(2)),lettercomb.ternary_tree.size(an_node));
var result__11864__auto___16621 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11863__auto___16620);
if(cljs.core.truth_(result__11864__auto___16621)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__11863__auto___16620),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11863__auto___16620)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16610){var t__11901__auto___16622 = e16610;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__11901__auto___16622,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__11863__auto___16623 = cljs.core._conj(cljs.core.List.EMPTY,lettercomb.ternary_tree.search(an_node,"an"));
var result__11864__auto___16624 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,values__11863__auto___16623);
if(cljs.core.truth_(result__11864__auto___16624)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null),"an")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core.true_QMARK_,values__11863__auto___16623),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null),"an")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__11863__auto___16623)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16611){var t__11901__auto___16625 = e16611;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null),"an")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11901__auto___16625,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__11863__auto___16626 = cljs.core._conj(cljs.core.List.EMPTY,lettercomb.ternary_tree.search(an_node,"a"));
var result__11864__auto___16627 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,values__11863__auto___16626);
if(cljs.core.truth_(result__11864__auto___16627)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core.false_QMARK_,values__11863__auto___16626),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__11863__auto___16626)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16612){var t__11901__auto___16628 = e16612;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11901__auto___16628,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__11863__auto__ = cljs.core._conj(cljs.core.List.EMPTY,lettercomb.ternary_tree.search(an_node,"hi"));
var result__11864__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,values__11863__auto__);
if(cljs.core.truth_(result__11864__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null),"hi")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core.false_QMARK_,values__11863__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null),"hi")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__11863__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__11864__auto__;
}catch (e16613){var t__11901__auto__ = e16613;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null),"hi")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11901__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

lettercomb.ternary_tree.test_letter_node.cljs$lang$var = new cljs.core.Var(function(){return lettercomb.ternary_tree.test_letter_node;},new cljs.core.Symbol("lettercomb.ternary-tree","test-letter-node","lettercomb.ternary-tree/test-letter-node",-465798141,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lettercomb.ternary-tree","lettercomb.ternary-tree",-1129499782,null),new cljs.core.Symbol(null,"test-letter-node","test-letter-node",585228872,null),"/Users/ethan/code/LetterComb2/App/src/lettercomb/ternary_tree.cljs",26,1,150,150,cljs.core.List.EMPTY,null,(cljs.core.truth_(lettercomb.ternary_tree.test_letter_node)?lettercomb.ternary_tree.test_letter_node.cljs$lang$test:null)]));
lettercomb.ternary_tree.test_noop = (function lettercomb$ternary_tree$test_noop(){
return cljs.test.test_var(lettercomb$ternary_tree$test_noop.cljs$lang$var);
});
lettercomb.ternary_tree.test_noop.cljs$lang$test = (function (){
var a_node = lettercomb.ternary_tree.letter_node("a");
var an_node = lettercomb.ternary_tree.insert(a_node,"an");
var and_node = lettercomb.ternary_tree.insert(an_node,"and");
try{var values__11863__auto___16638 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(3)),lettercomb.ternary_tree.size(and_node));
var result__11864__auto___16639 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11863__auto___16638);
if(cljs.core.truth_(result__11864__auto___16639)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__11863__auto___16638),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11863__auto___16638)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16629){var t__11901__auto___16640 = e16629;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),t__11901__auto___16640,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__11863__auto___16641 = cljs.core._conj(cljs.core.List.EMPTY,lettercomb.ternary_tree.search(and_node,"and"));
var result__11864__auto___16642 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,values__11863__auto___16641);
if(cljs.core.truth_(result__11864__auto___16642)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null),"and")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core.true_QMARK_,values__11863__auto___16641),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null),"and")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__11863__auto___16641)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16630){var t__11901__auto___16643 = e16630;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null),"and")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11901__auto___16643,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__11863__auto___16644 = cljs.core._conj(cljs.core.List.EMPTY,lettercomb.ternary_tree.search(and_node,"an"));
var result__11864__auto___16645 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,values__11863__auto___16644);
if(cljs.core.truth_(result__11864__auto___16645)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null),"an")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core.true_QMARK_,values__11863__auto___16644),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null),"an")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__11863__auto___16644)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16631){var t__11901__auto___16646 = e16631;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null),"an")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11901__auto___16646,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__11863__auto___16647 = cljs.core._conj(cljs.core.List.EMPTY,lettercomb.ternary_tree.search(and_node,"hey"));
var result__11864__auto___16648 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,values__11863__auto___16647);
if(cljs.core.truth_(result__11864__auto___16648)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null),"hey")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core.false_QMARK_,values__11863__auto___16647),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null),"hey")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__11863__auto___16647)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16632){var t__11901__auto___16649 = e16632;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null),"hey")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11901__auto___16649,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var still_and_node = lettercomb.ternary_tree.insert(and_node,"");
try{var values__11863__auto___16650 = cljs.core._conj(cljs.core.List.EMPTY,lettercomb.ternary_tree.search(still_and_node,"a"));
var result__11864__auto___16651 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,values__11863__auto___16650);
if(cljs.core.truth_(result__11864__auto___16651)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core.false_QMARK_,values__11863__auto___16650),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__11863__auto___16650)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16633){var t__11901__auto___16652 = e16633;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11901__auto___16652,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__11863__auto___16653 = cljs.core._conj(cljs.core.List.EMPTY,lettercomb.ternary_tree.search(still_and_node,"an"));
var result__11864__auto___16654 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,values__11863__auto___16653);
if(cljs.core.truth_(result__11864__auto___16654)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"an")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core.true_QMARK_,values__11863__auto___16653),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"an")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__11863__auto___16653)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16634){var t__11901__auto___16655 = e16634;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"an")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11901__auto___16655,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__11863__auto___16656 = cljs.core._conj(cljs.core.List.EMPTY,lettercomb.ternary_tree.search(still_and_node,"and"));
var result__11864__auto___16657 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,values__11863__auto___16656);
if(cljs.core.truth_(result__11864__auto___16657)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"and")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core.true_QMARK_,values__11863__auto___16656),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"and")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__11863__auto___16656)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16635){var t__11901__auto___16658 = e16635;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"and")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11901__auto___16658,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__11863__auto___16659 = cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,lettercomb.ternary_tree.size(still_and_node)),(3));
var result__11864__auto___16660 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11863__auto___16659);
if(cljs.core.truth_(result__11864__auto___16660)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__11863__auto___16659),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11863__auto___16659)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16636){var t__11901__auto___16661 = e16636;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__11901__auto___16661,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__11863__auto__ = cljs.core._conj(cljs.core.List.EMPTY,lettercomb.ternary_tree.search(still_and_node,"hey"));
var result__11864__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,values__11863__auto__);
if(cljs.core.truth_(result__11864__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"hey")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core.false_QMARK_,values__11863__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"hey")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__11863__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__11864__auto__;
}catch (e16637){var t__11901__auto__ = e16637;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"hey")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11901__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

lettercomb.ternary_tree.test_noop.cljs$lang$var = new cljs.core.Var(function(){return lettercomb.ternary_tree.test_noop;},new cljs.core.Symbol("lettercomb.ternary-tree","test-noop","lettercomb.ternary-tree/test-noop",648911402,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lettercomb.ternary-tree","lettercomb.ternary-tree",-1129499782,null),new cljs.core.Symbol(null,"test-noop","test-noop",-409531149,null),"/Users/ethan/code/LetterComb2/App/src/lettercomb/ternary_tree.cljs",19,1,161,161,cljs.core.List.EMPTY,null,(cljs.core.truth_(lettercomb.ternary_tree.test_noop)?lettercomb.ternary_tree.test_noop.cljs$lang$test:null)]));
lettercomb.ternary_tree.test_build_tst = (function lettercomb$ternary_tree$test_build_tst(){
return cljs.test.test_var(lettercomb$ternary_tree$test_build_tst.cljs$lang$var);
});
lettercomb.ternary_tree.test_build_tst.cljs$lang$test = (function (){
var word_list = ["a","abba","cabba","car","cat","dog"];
var result = lettercomb.ternary_tree.build_tst(word_list);
try{var values__11863__auto___16669 = cljs.core._conj(cljs.core.List.EMPTY,lettercomb.ternary_tree.search(result,"digg"));
var result__11864__auto___16670 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,values__11863__auto___16669);
if(cljs.core.truth_(result__11864__auto___16670)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),"digg")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core.false_QMARK_,values__11863__auto___16669),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),"digg")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__11863__auto___16669)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16662){var t__11901__auto___16671 = e16662;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),"digg")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11901__auto___16671,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var seq__16663 = cljs.core.seq(word_list);
var chunk__16664 = null;
var count__16665 = (0);
var i__16666 = (0);
while(true){
if((i__16666 < count__16665)){
var word = chunk__16664.cljs$core$IIndexed$_nth$arity$2(null,i__16666);
try{var values__11863__auto___16672 = cljs.core._conj(cljs.core.List.EMPTY,lettercomb.ternary_tree.search(result,word));
var result__11864__auto___16673 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,values__11863__auto___16672);
if(cljs.core.truth_(result__11864__auto___16673)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"word","word",1220407802,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core.true_QMARK_,values__11863__auto___16672),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"word","word",1220407802,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__11863__auto___16672)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16667){var t__11901__auto___16674 = e16667;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"word","word",1220407802,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__11901__auto___16674,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__16675 = seq__16663;
var G__16676 = chunk__16664;
var G__16677 = count__16665;
var G__16678 = (i__16666 + (1));
seq__16663 = G__16675;
chunk__16664 = G__16676;
count__16665 = G__16677;
i__16666 = G__16678;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__16663);
if(temp__4425__auto__){
var seq__16663__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16663__$1)){
var c__5471__auto__ = cljs.core.chunk_first(seq__16663__$1);
var G__16679 = cljs.core.chunk_rest(seq__16663__$1);
var G__16680 = c__5471__auto__;
var G__16681 = cljs.core.count(c__5471__auto__);
var G__16682 = (0);
seq__16663 = G__16679;
chunk__16664 = G__16680;
count__16665 = G__16681;
i__16666 = G__16682;
continue;
} else {
var word = cljs.core.first(seq__16663__$1);
try{var values__11863__auto___16683 = cljs.core._conj(cljs.core.List.EMPTY,lettercomb.ternary_tree.search(result,word));
var result__11864__auto___16684 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,values__11863__auto___16683);
if(cljs.core.truth_(result__11864__auto___16684)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"word","word",1220407802,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core.true_QMARK_,values__11863__auto___16683),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"word","word",1220407802,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__11863__auto___16683)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e16668){var t__11901__auto___16685 = e16668;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"search","search",-1089495947,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"word","word",1220407802,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__11901__auto___16685,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__16686 = cljs.core.next(seq__16663__$1);
var G__16687 = null;
var G__16688 = (0);
var G__16689 = (0);
seq__16663 = G__16686;
chunk__16664 = G__16687;
count__16665 = G__16688;
i__16666 = G__16689;
continue;
}
} else {
return null;
}
}
break;
}
});

lettercomb.ternary_tree.test_build_tst.cljs$lang$var = new cljs.core.Var(function(){return lettercomb.ternary_tree.test_build_tst;},new cljs.core.Symbol("lettercomb.ternary-tree","test-build-tst","lettercomb.ternary-tree/test-build-tst",-234187954,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lettercomb.ternary-tree","lettercomb.ternary-tree",-1129499782,null),new cljs.core.Symbol(null,"test-build-tst","test-build-tst",-1322973931,null),"/Users/ethan/code/LetterComb2/App/src/lettercomb/ternary_tree.cljs",24,1,176,176,cljs.core.List.EMPTY,null,(cljs.core.truth_(lettercomb.ternary_tree.test_build_tst)?lettercomb.ternary_tree.test_build_tst.cljs$lang$test:null)]));
