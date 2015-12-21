// Compiled by ClojureScript 1.7.170 {}
goog.provide('lettercomb.ternary_tree');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.test');

/**
 * @interface
 */
lettercomb.ternary_tree.TSTree = function(){};

lettercomb.ternary_tree.has_QMARK_ = (function lettercomb$ternary_tree$has_QMARK_(this$,word){
if((!((this$ == null))) && (!((this$.lettercomb$ternary_tree$TSTree$has_QMARK_$arity$2 == null)))){
return this$.lettercomb$ternary_tree$TSTree$has_QMARK_$arity$2(this$,word);
} else {
var x__5323__auto__ = (((this$ == null))?null:this$);
var m__5324__auto__ = (lettercomb.ternary_tree.has_QMARK_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,this$,word);
} else {
var m__5324__auto____$1 = (lettercomb.ternary_tree.has_QMARK_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,this$,word);
} else {
throw cljs.core.missing_protocol.call(null,"TSTree.has?",this$);
}
}
}
});

lettercomb.ternary_tree.search = (function lettercomb$ternary_tree$search(this$,word){
if((!((this$ == null))) && (!((this$.lettercomb$ternary_tree$TSTree$search$arity$2 == null)))){
return this$.lettercomb$ternary_tree$TSTree$search$arity$2(this$,word);
} else {
var x__5323__auto__ = (((this$ == null))?null:this$);
var m__5324__auto__ = (lettercomb.ternary_tree.search[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,this$,word);
} else {
var m__5324__auto____$1 = (lettercomb.ternary_tree.search["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,this$,word);
} else {
throw cljs.core.missing_protocol.call(null,"TSTree.search",this$);
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
return m__5324__auto__.call(null,this$,word);
} else {
var m__5324__auto____$1 = (lettercomb.ternary_tree.insert["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,this$,word);
} else {
throw cljs.core.missing_protocol.call(null,"TSTree.insert",this$);
}
}
}
});


/**
 * @interface
 */
lettercomb.ternary_tree.ITSTNode = function(){};

lettercomb.ternary_tree._insert = (function lettercomb$ternary_tree$_insert(this$,word,index){
if((!((this$ == null))) && (!((this$.lettercomb$ternary_tree$ITSTNode$_insert$arity$3 == null)))){
return this$.lettercomb$ternary_tree$ITSTNode$_insert$arity$3(this$,word,index);
} else {
var x__5323__auto__ = (((this$ == null))?null:this$);
var m__5324__auto__ = (lettercomb.ternary_tree._insert[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,this$,word,index);
} else {
var m__5324__auto____$1 = (lettercomb.ternary_tree._insert["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,this$,word,index);
} else {
throw cljs.core.missing_protocol.call(null,"ITSTNode.-insert",this$);
}
}
}
});

lettercomb.ternary_tree._search = (function lettercomb$ternary_tree$_search(this$,word,index){
if((!((this$ == null))) && (!((this$.lettercomb$ternary_tree$ITSTNode$_search$arity$3 == null)))){
return this$.lettercomb$ternary_tree$ITSTNode$_search$arity$3(this$,word,index);
} else {
var x__5323__auto__ = (((this$ == null))?null:this$);
var m__5324__auto__ = (lettercomb.ternary_tree._search[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,this$,word,index);
} else {
var m__5324__auto____$1 = (lettercomb.ternary_tree._search["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,this$,word,index);
} else {
throw cljs.core.missing_protocol.call(null,"ITSTNode.-search",this$);
}
}
}
});

lettercomb.ternary_tree._resize = (function lettercomb$ternary_tree$_resize(this$){
if((!((this$ == null))) && (!((this$.lettercomb$ternary_tree$ITSTNode$_resize$arity$1 == null)))){
return this$.lettercomb$ternary_tree$ITSTNode$_resize$arity$1(this$);
} else {
var x__5323__auto__ = (((this$ == null))?null:this$);
var m__5324__auto__ = (lettercomb.ternary_tree._resize[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,this$);
} else {
var m__5324__auto____$1 = (lettercomb.ternary_tree._resize["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ITSTNode.-resize",this$);
}
}
}
});

lettercomb.ternary_tree.size = (function lettercomb$ternary_tree$size(this$){
if((!((this$ == null))) && (!((this$.lettercomb$ternary_tree$ITSTNode$size$arity$1 == null)))){
return this$.lettercomb$ternary_tree$ITSTNode$size$arity$1(this$);
} else {
var x__5323__auto__ = (((this$ == null))?null:this$);
var m__5324__auto__ = (lettercomb.ternary_tree.size[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,this$);
} else {
var m__5324__auto____$1 = (lettercomb.ternary_tree.size["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ITSTNode.size",this$);
}
}
}
});

lettercomb.ternary_tree.depth = (function lettercomb$ternary_tree$depth(this$){
if((!((this$ == null))) && (!((this$.lettercomb$ternary_tree$ITSTNode$depth$arity$1 == null)))){
return this$.lettercomb$ternary_tree$ITSTNode$depth$arity$1(this$);
} else {
var x__5323__auto__ = (((this$ == null))?null:this$);
var m__5324__auto__ = (lettercomb.ternary_tree.depth[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,this$);
} else {
var m__5324__auto____$1 = (lettercomb.ternary_tree.depth["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ITSTNode.depth",this$);
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
return (cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__15669_SHARP_){
return cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15669_SHARP_,new cljs.core.Keyword(null,"size","size",1098693007)], null),(0));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lo","lo",-931799889),new cljs.core.Keyword(null,"eq","eq",-618539067),new cljs.core.Keyword(null,"hi","hi",-1821422114)], null))) + (1));
});
lettercomb.ternary_tree.get_node_depth = (function lettercomb$ternary_tree$get_node_depth(node){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__15670_SHARP_){
return cljs.core.get_in.call(null,node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15670_SHARP_,new cljs.core.Keyword(null,"depth","depth",1768663640)], null),(0));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lo","lo",-931799889),new cljs.core.Keyword(null,"eq","eq",-618539067),new cljs.core.Keyword(null,"hi","hi",-1821422114)], null))) + (1));
});
lettercomb.ternary_tree.TSTNode;
lettercomb.ternary_tree.letter_node = (function lettercomb$ternary_tree$letter_node(letter){
return (new lettercomb.ternary_tree.TSTNode(letter,false,null,null,null,(1),(1)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {lettercomb.ternary_tree.ITSTNode}
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
lettercomb.ternary_tree.TSTNode = (function (letter,terminal_QMARK_,lo,eq,hi,size,depth,__meta,__extmap,__hash){
this.letter = letter;
this.terminal_QMARK_ = terminal_QMARK_;
this.lo = lo;
this.eq = eq;
this.hi = hi;
this.size = size;
this.depth = depth;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
lettercomb.ternary_tree.TSTNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5282__auto__,k__5283__auto__){
var self__ = this;
var this__5282__auto____$1 = this;
return cljs.core._lookup.call(null,this__5282__auto____$1,k__5283__auto__,null);
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k15672,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__15674 = (((k15672 instanceof cljs.core.Keyword))?k15672.fqn:null);
switch (G__15674) {
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
case "depth":
return self__.depth;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k15672,else__5285__auto__);

}
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5296__auto__,writer__5297__auto__,opts__5298__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var pr_pair__5299__auto__ = ((function (this__5296__auto____$1){
return (function (keyval__5300__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5297__auto__,cljs.core.pr_writer,""," ","",opts__5298__auto__,keyval__5300__auto__);
});})(this__5296__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5297__auto__,pr_pair__5299__auto__,"#lettercomb.ternary-tree.TSTNode{",", ","}",opts__5298__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"letter","letter",-125811450),self__.letter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),self__.terminal_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lo","lo",-931799889),self__.lo],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eq","eq",-618539067),self__.eq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hi","hi",-1821422114),self__.hi],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"depth","depth",1768663640),self__.depth],null))], null),self__.__extmap));
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IIterable$ = true;

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15671){
var self__ = this;
var G__15671__$1 = this;
return (new cljs.core.RecordIter((0),G__15671__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letter","letter",-125811450),new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),new cljs.core.Keyword(null,"lo","lo",-931799889),new cljs.core.Keyword(null,"eq","eq",-618539067),new cljs.core.Keyword(null,"hi","hi",-1821422114),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"depth","depth",1768663640)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.lo,self__.eq,self__.hi,self__.size,self__.depth,self__.__meta,self__.__extmap,self__.__hash));
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5277__auto__){
var self__ = this;
var this__5277__auto____$1 = this;
var h__5103__auto__ = self__.__hash;
if(!((h__5103__auto__ == null))){
return h__5103__auto__;
} else {
var h__5103__auto____$1 = cljs.core.hash_imap.call(null,this__5277__auto____$1);
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
return cljs.core.equiv_map.call(null,this__5278__auto____$1,other__5279__auto__);
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
return lettercomb.ternary_tree._insert.call(null,this$__$1,word,(0));
});

lettercomb.ternary_tree.TSTNode.prototype.lettercomb$ternary_tree$TSTree$search$arity$2 = (function (this$,word){
var self__ = this;
var this$__$1 = this;
if(clojure.string.blank_QMARK_.call(null,word)){
return null;
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,word),(0))){
return null;
} else {
return lettercomb.ternary_tree._search.call(null,this$__$1,word,(0));

}
}
});

lettercomb.ternary_tree.TSTNode.prototype.lettercomb$ternary_tree$TSTree$has_QMARK_$arity$2 = (function (this$,word){
var self__ = this;
var this$__$1 = this;
var node = lettercomb.ternary_tree.search.call(null,this$__$1,word);
var and__4656__auto__ = cljs.core.some_QMARK_.call(null,node);
if(and__4656__auto__){
return new cljs.core.Keyword(null,"terminal?","terminal?",-851436688).cljs$core$IFn$_invoke$arity$1(node);
} else {
return and__4656__auto__;
}
});

lettercomb.ternary_tree.TSTNode.prototype.lettercomb$ternary_tree$ITSTNode$ = true;

lettercomb.ternary_tree.TSTNode.prototype.lettercomb$ternary_tree$ITSTNode$_resize$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"size","size",1098693007),lettercomb.ternary_tree.get_node_size.call(null,this$__$1),new cljs.core.Keyword(null,"depth","depth",1768663640),lettercomb.ternary_tree.get_node_depth.call(null,this$__$1));
});

lettercomb.ternary_tree.TSTNode.prototype.lettercomb$ternary_tree$ITSTNode$_insert$arity$3 = (function (this$,word,index){
var self__ = this;
var this$__$1 = this;
var letter__$1 = cljs.core.get.call(null,word,index);
var child_key = lettercomb.ternary_tree.pick_child.call(null,letter__$1,new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(this$__$1));
var next_index = ((cljs.core._EQ_.call(null,child_key,new cljs.core.Keyword(null,"eq","eq",-618539067)))?(index + (1)):index);
var next_letter = cljs.core.get.call(null,word,next_index);
return lettercomb.ternary_tree._resize.call(null,(((cljs.core._EQ_.call(null,child_key,new cljs.core.Keyword(null,"eq","eq",-618539067))) && ((next_index >= cljs.core.count.call(null,word))))?cljs.core.update.call(null,this$__$1,new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),((function (letter__$1,child_key,next_index,next_letter,this$__$1){
return (function (v){
var or__4668__auto__ = v;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core._EQ_.call(null,letter__$1,new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(this$__$1));
}
});})(letter__$1,child_key,next_index,next_letter,this$__$1))
):(function (){var child_node = (function (){var or__4668__auto__ = cljs.core.get.call(null,this$__$1,child_key);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return lettercomb.ternary_tree.letter_node.call(null,next_letter);
}
})();
return cljs.core.assoc.call(null,this$__$1,child_key,lettercomb.ternary_tree._insert.call(null,child_node,word,next_index));
})()));
});

lettercomb.ternary_tree.TSTNode.prototype.lettercomb$ternary_tree$ITSTNode$_search$arity$3 = (function (this$,word,index){
var self__ = this;
var this$__$1 = this;
if(clojure.string.blank_QMARK_.call(null,word)){
return null;
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,word),(0))){
return null;
} else {
var letter__$1 = cljs.core.get.call(null,word,index);
var child_key = lettercomb.ternary_tree.pick_child.call(null,letter__$1,new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(this$__$1));
var next_index = ((cljs.core._EQ_.call(null,child_key,new cljs.core.Keyword(null,"eq","eq",-618539067)))?(index + (1)):index);
if((cljs.core._EQ_.call(null,child_key,new cljs.core.Keyword(null,"eq","eq",-618539067))) && (cljs.core._EQ_.call(null,next_index,cljs.core.count.call(null,word)))){
return this$__$1;
} else {
var temp__4425__auto__ = cljs.core.get.call(null,this$__$1,child_key);
if(cljs.core.truth_(temp__4425__auto__)){
var child_node = temp__4425__auto__;
return lettercomb.ternary_tree._search.call(null,child_node,word,next_index);
} else {
return null;
}
}

}
}
});

lettercomb.ternary_tree.TSTNode.prototype.lettercomb$ternary_tree$ITSTNode$size$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

lettercomb.ternary_tree.TSTNode.prototype.lettercomb$ternary_tree$ITSTNode$depth$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5291__auto__,k__5292__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"eq","eq",-618539067),null,new cljs.core.Keyword(null,"letter","letter",-125811450),null,new cljs.core.Keyword(null,"lo","lo",-931799889),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),null,new cljs.core.Keyword(null,"depth","depth",1768663640),null,new cljs.core.Keyword(null,"hi","hi",-1821422114),null], null), null),k__5292__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.lo,self__.eq,self__.hi,self__.size,self__.depth,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5292__auto__)),null));
}
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__15671){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__15675 = cljs.core.keyword_identical_QMARK_;
var expr__15676 = k__5290__auto__;
if(cljs.core.truth_(pred__15675.call(null,new cljs.core.Keyword(null,"letter","letter",-125811450),expr__15676))){
return (new lettercomb.ternary_tree.TSTNode(G__15671,self__.terminal_QMARK_,self__.lo,self__.eq,self__.hi,self__.size,self__.depth,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15675.call(null,new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),expr__15676))){
return (new lettercomb.ternary_tree.TSTNode(self__.letter,G__15671,self__.lo,self__.eq,self__.hi,self__.size,self__.depth,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15675.call(null,new cljs.core.Keyword(null,"lo","lo",-931799889),expr__15676))){
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,G__15671,self__.eq,self__.hi,self__.size,self__.depth,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15675.call(null,new cljs.core.Keyword(null,"eq","eq",-618539067),expr__15676))){
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.lo,G__15671,self__.hi,self__.size,self__.depth,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15675.call(null,new cljs.core.Keyword(null,"hi","hi",-1821422114),expr__15676))){
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.lo,self__.eq,G__15671,self__.size,self__.depth,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15675.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__15676))){
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.lo,self__.eq,self__.hi,G__15671,self__.depth,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__15675.call(null,new cljs.core.Keyword(null,"depth","depth",1768663640),expr__15676))){
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.lo,self__.eq,self__.hi,self__.size,G__15671,self__.__meta,self__.__extmap,null));
} else {
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.lo,self__.eq,self__.hi,self__.size,self__.depth,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5290__auto__,G__15671),null));
}
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
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"letter","letter",-125811450),self__.letter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),self__.terminal_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lo","lo",-931799889),self__.lo],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eq","eq",-618539067),self__.eq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hi","hi",-1821422114),self__.hi],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"depth","depth",1768663640),self__.depth],null))], null),self__.__extmap));
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__15671){
var self__ = this;
var this__5281__auto____$1 = this;
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.lo,self__.eq,self__.hi,self__.size,self__.depth,G__15671,self__.__extmap,self__.__hash));
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5287__auto__,entry__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5288__auto__)){
return cljs.core._assoc.call(null,this__5287__auto____$1,cljs.core._nth.call(null,entry__5288__auto__,(0)),cljs.core._nth.call(null,entry__5288__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5287__auto____$1,entry__5288__auto__);
}
});

lettercomb.ternary_tree.TSTNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"letter","letter",1514720077,null),new cljs.core.Symbol(null,"terminal?","terminal?",789094839,null),new cljs.core.Symbol(null,"lo","lo",708731638,null),new cljs.core.Symbol(null,"eq","eq",1021992460,null),new cljs.core.Symbol(null,"hi","hi",-180890587,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"depth","depth",-885772129,null)], null);
});

lettercomb.ternary_tree.TSTNode.cljs$lang$type = true;

lettercomb.ternary_tree.TSTNode.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"lettercomb.ternary-tree/TSTNode");
});

lettercomb.ternary_tree.TSTNode.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write.call(null,writer__5317__auto__,"lettercomb.ternary-tree/TSTNode");
});

lettercomb.ternary_tree.__GT_TSTNode = (function lettercomb$ternary_tree$__GT_TSTNode(letter,terminal_QMARK_,lo,eq,hi,size,depth){
return (new lettercomb.ternary_tree.TSTNode(letter,terminal_QMARK_,lo,eq,hi,size,depth,null,null,null));
});

lettercomb.ternary_tree.map__GT_TSTNode = (function lettercomb$ternary_tree$map__GT_TSTNode(G__15673){
return (new lettercomb.ternary_tree.TSTNode(new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(G__15673),new cljs.core.Keyword(null,"terminal?","terminal?",-851436688).cljs$core$IFn$_invoke$arity$1(G__15673),new cljs.core.Keyword(null,"lo","lo",-931799889).cljs$core$IFn$_invoke$arity$1(G__15673),new cljs.core.Keyword(null,"eq","eq",-618539067).cljs$core$IFn$_invoke$arity$1(G__15673),new cljs.core.Keyword(null,"hi","hi",-1821422114).cljs$core$IFn$_invoke$arity$1(G__15673),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__15673),new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(G__15673),null,cljs.core.dissoc.call(null,G__15673,new cljs.core.Keyword(null,"letter","letter",-125811450),new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),new cljs.core.Keyword(null,"lo","lo",-931799889),new cljs.core.Keyword(null,"eq","eq",-618539067),new cljs.core.Keyword(null,"hi","hi",-1821422114),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"depth","depth",1768663640)),null));
});

cljs.core.enable_console_print_BANG_.call(null);
lettercomb.ternary_tree.build_root_word_tst = (function lettercomb$ternary_tree$build_root_word_tst(word){
var root_node = lettercomb.ternary_tree.letter_node.call(null,cljs.core.first.call(null,word));
return lettercomb.ternary_tree.insert.call(null,root_node,word);
});
lettercomb.ternary_tree.add_slice_tst = (function lettercomb$ternary_tree$add_slice_tst(sorted_array,tst){
var len = cljs.core.count.call(null,sorted_array);
var med_i = (len >> (1));
var med_word = (sorted_array[med_i]);
var left_array = sorted_array.slice((0),med_i);
var right_array = sorted_array.slice((med_i + (1)),len);
return ((function (left_array,right_array,len,med_i,med_word){
return (function (p1__15680_SHARP_){
if(cljs.core.empty_QMARK_.call(null,right_array)){
return p1__15680_SHARP_;
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,right_array))){
return lettercomb.ternary_tree.insert.call(null,p1__15680_SHARP_,cljs.core.first.call(null,right_array));
} else {
return lettercomb$ternary_tree$add_slice_tst.call(null,right_array,p1__15680_SHARP_);

}
}
});})(left_array,right_array,len,med_i,med_word))
.call(null,((function (left_array,right_array,len,med_i,med_word){
return (function (p1__15679_SHARP_){
if(cljs.core.empty_QMARK_.call(null,left_array)){
return p1__15679_SHARP_;
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,left_array))){
return lettercomb.ternary_tree.insert.call(null,p1__15679_SHARP_,cljs.core.first.call(null,left_array));
} else {
return lettercomb$ternary_tree$add_slice_tst.call(null,left_array,p1__15679_SHARP_);

}
}
});})(left_array,right_array,len,med_i,med_word))
.call(null,(cljs.core.truth_(tst)?lettercomb.ternary_tree.insert.call(null,tst,med_word):lettercomb.ternary_tree.build_root_word_tst.call(null,med_word))));
});
lettercomb.ternary_tree.build_tst = (function lettercomb$ternary_tree$build_tst(dict_array){

var cloned_array = dict_array.slice((0),dict_array.length);
var sorted_array = cloned_array.sort();
return cljs.core.trampoline.call(null,lettercomb.ternary_tree.add_slice_tst,sorted_array,null);
});
lettercomb.ternary_tree.test_letter_node = (function lettercomb$ternary_tree$test_letter_node(){
return cljs.test.test_var.call(null,lettercomb$ternary_tree$test_letter_node.cljs$lang$var);
});
lettercomb.ternary_tree.test_letter_node.cljs$lang$test = (function (){
var a_node = lettercomb.ternary_tree.letter_node.call(null,"a");
try{var values__10986__auto___15687 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),lettercomb.ternary_tree.size.call(null,a_node));
var result__10987__auto___15688 = cljs.core.apply.call(null,cljs.core._EQ_,values__10986__auto___15687);
if(cljs.core.truth_(result__10987__auto___15688)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"a-node","a-node",1782588205,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10986__auto___15687),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"a-node","a-node",1782588205,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10986__auto___15687)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15681){var t__11024__auto___15689 = e15681;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"a-node","a-node",1782588205,null)),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto___15689,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10986__auto___15690 = cljs.core._conj.call(null,cljs.core.List.EMPTY,lettercomb.ternary_tree.has_QMARK_.call(null,a_node,"a"));
var result__10987__auto___15691 = cljs.core.apply.call(null,cljs.core.false_QMARK_,values__10986__auto___15690);
if(cljs.core.truth_(result__10987__auto___15691)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"a-node","a-node",1782588205,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.false_QMARK_,values__10986__auto___15690),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"a-node","a-node",1782588205,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__10986__auto___15690)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15682){var t__11024__auto___15692 = e15682;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"a-node","a-node",1782588205,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto___15692,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var an_node = lettercomb.ternary_tree.insert.call(null,a_node,"an");
try{var values__10986__auto___15693 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),lettercomb.ternary_tree.size.call(null,an_node));
var result__10987__auto___15694 = cljs.core.apply.call(null,cljs.core._EQ_,values__10986__auto___15693);
if(cljs.core.truth_(result__10987__auto___15694)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10986__auto___15693),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10986__auto___15693)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15683){var t__11024__auto___15695 = e15683;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto___15695,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10986__auto___15696 = cljs.core._conj.call(null,cljs.core.List.EMPTY,lettercomb.ternary_tree.has_QMARK_.call(null,an_node,"an"));
var result__10987__auto___15697 = cljs.core.apply.call(null,cljs.core.true_QMARK_,values__10986__auto___15696);
if(cljs.core.truth_(result__10987__auto___15697)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null),"an")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.true_QMARK_,values__10986__auto___15696),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null),"an")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__10986__auto___15696)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15684){var t__11024__auto___15698 = e15684;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null),"an")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto___15698,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10986__auto___15699 = cljs.core._conj.call(null,cljs.core.List.EMPTY,lettercomb.ternary_tree.has_QMARK_.call(null,an_node,"a"));
var result__10987__auto___15700 = cljs.core.apply.call(null,cljs.core.false_QMARK_,values__10986__auto___15699);
if(cljs.core.truth_(result__10987__auto___15700)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.false_QMARK_,values__10986__auto___15699),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__10986__auto___15699)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15685){var t__11024__auto___15701 = e15685;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto___15701,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10986__auto__ = cljs.core._conj.call(null,cljs.core.List.EMPTY,lettercomb.ternary_tree.has_QMARK_.call(null,an_node,"hi"));
var result__10987__auto__ = cljs.core.apply.call(null,cljs.core.false_QMARK_,values__10986__auto__);
if(cljs.core.truth_(result__10987__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null),"hi")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.false_QMARK_,values__10986__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null),"hi")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__10986__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__10987__auto__;
}catch (e15686){var t__11024__auto__ = e15686;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null),"hi")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

lettercomb.ternary_tree.test_letter_node.cljs$lang$var = new cljs.core.Var(function(){return lettercomb.ternary_tree.test_letter_node;},new cljs.core.Symbol("lettercomb.ternary-tree","test-letter-node","lettercomb.ternary-tree/test-letter-node",-465798141,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lettercomb.ternary-tree","lettercomb.ternary-tree",-1129499782,null),new cljs.core.Symbol(null,"test-letter-node","test-letter-node",585228872,null),"/Users/ethan/code/LetterComb2/App/src/lettercomb/ternary_tree.cljs",26,1,159,159,cljs.core.List.EMPTY,null,(cljs.core.truth_(lettercomb.ternary_tree.test_letter_node)?lettercomb.ternary_tree.test_letter_node.cljs$lang$test:null)]));
lettercomb.ternary_tree.test_noop = (function lettercomb$ternary_tree$test_noop(){
return cljs.test.test_var.call(null,lettercomb$ternary_tree$test_noop.cljs$lang$var);
});
lettercomb.ternary_tree.test_noop.cljs$lang$test = (function (){
var a_node = lettercomb.ternary_tree.letter_node.call(null,"a");
var an_node = lettercomb.ternary_tree.insert.call(null,a_node,"an");
var and_node = lettercomb.ternary_tree.insert.call(null,an_node,"and");
try{var values__10986__auto___15715 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),lettercomb.ternary_tree.size.call(null,an_node));
var result__10987__auto___15716 = cljs.core.apply.call(null,cljs.core._EQ_,values__10986__auto___15715);
if(cljs.core.truth_(result__10987__auto___15716)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10986__auto___15715),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10986__auto___15715)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15702){var t__11024__auto___15717 = e15702;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto___15717,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10986__auto___15718 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),lettercomb.ternary_tree.depth.call(null,an_node));
var result__10987__auto___15719 = cljs.core.apply.call(null,cljs.core._EQ_,values__10986__auto___15718);
if(cljs.core.truth_(result__10987__auto___15719)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"depth","depth",-885772129,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10986__auto___15718),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"depth","depth",-885772129,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10986__auto___15718)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15703){var t__11024__auto___15720 = e15703;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"depth","depth",-885772129,null),new cljs.core.Symbol(null,"an-node","an-node",-1646798077,null)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto___15720,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10986__auto___15721 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(3)),lettercomb.ternary_tree.size.call(null,and_node));
var result__10987__auto___15722 = cljs.core.apply.call(null,cljs.core._EQ_,values__10986__auto___15721);
if(cljs.core.truth_(result__10987__auto___15722)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10986__auto___15721),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10986__auto___15721)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15704){var t__11024__auto___15723 = e15704;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null)),(3)),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto___15723,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10986__auto___15724 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lettercomb.ternary_tree.depth.call(null,and_node)),(3));
var result__10987__auto___15725 = cljs.core.apply.call(null,cljs.core._EQ_,values__10986__auto___15724);
if(cljs.core.truth_(result__10987__auto___15725)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"depth","depth",-885772129,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10986__auto___15724),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"depth","depth",-885772129,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10986__auto___15724)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15705){var t__11024__auto___15726 = e15705;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"depth","depth",-885772129,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto___15726,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10986__auto___15727 = cljs.core._conj.call(null,cljs.core.List.EMPTY,lettercomb.ternary_tree.has_QMARK_.call(null,and_node,"and"));
var result__10987__auto___15728 = cljs.core.apply.call(null,cljs.core.true_QMARK_,values__10986__auto___15727);
if(cljs.core.truth_(result__10987__auto___15728)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null),"and")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.true_QMARK_,values__10986__auto___15727),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null),"and")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__10986__auto___15727)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15706){var t__11024__auto___15729 = e15706;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null),"and")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto___15729,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10986__auto___15730 = cljs.core._conj.call(null,cljs.core.List.EMPTY,lettercomb.ternary_tree.has_QMARK_.call(null,and_node,"an"));
var result__10987__auto___15731 = cljs.core.apply.call(null,cljs.core.true_QMARK_,values__10986__auto___15730);
if(cljs.core.truth_(result__10987__auto___15731)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null),"an")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.true_QMARK_,values__10986__auto___15730),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null),"an")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__10986__auto___15730)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15707){var t__11024__auto___15732 = e15707;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null),"an")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto___15732,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10986__auto___15733 = cljs.core._conj.call(null,cljs.core.List.EMPTY,lettercomb.ternary_tree.has_QMARK_.call(null,and_node,"hey"));
var result__10987__auto___15734 = cljs.core.apply.call(null,cljs.core.false_QMARK_,values__10986__auto___15733);
if(cljs.core.truth_(result__10987__auto___15734)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null),"hey")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.false_QMARK_,values__10986__auto___15733),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null),"hey")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__10986__auto___15733)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15708){var t__11024__auto___15735 = e15708;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"and-node","and-node",1723181951,null),"hey")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto___15735,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var still_and_node = lettercomb.ternary_tree.insert.call(null,and_node,"");
try{var values__10986__auto___15736 = cljs.core._conj.call(null,cljs.core.List.EMPTY,lettercomb.ternary_tree.has_QMARK_.call(null,still_and_node,"a"));
var result__10987__auto___15737 = cljs.core.apply.call(null,cljs.core.false_QMARK_,values__10986__auto___15736);
if(cljs.core.truth_(result__10987__auto___15737)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.false_QMARK_,values__10986__auto___15736),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__10986__auto___15736)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15709){var t__11024__auto___15738 = e15709;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"a")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto___15738,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10986__auto___15739 = cljs.core._conj.call(null,cljs.core.List.EMPTY,lettercomb.ternary_tree.has_QMARK_.call(null,still_and_node,"an"));
var result__10987__auto___15740 = cljs.core.apply.call(null,cljs.core.true_QMARK_,values__10986__auto___15739);
if(cljs.core.truth_(result__10987__auto___15740)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"an")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.true_QMARK_,values__10986__auto___15739),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"an")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__10986__auto___15739)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15710){var t__11024__auto___15741 = e15710;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"an")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto___15741,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10986__auto___15742 = cljs.core._conj.call(null,cljs.core.List.EMPTY,lettercomb.ternary_tree.has_QMARK_.call(null,still_and_node,"and"));
var result__10987__auto___15743 = cljs.core.apply.call(null,cljs.core.true_QMARK_,values__10986__auto___15742);
if(cljs.core.truth_(result__10987__auto___15743)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"and")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.true_QMARK_,values__10986__auto___15742),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"and")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__10986__auto___15742)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15711){var t__11024__auto___15744 = e15711;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"and")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto___15744,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10986__auto___15745 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lettercomb.ternary_tree.size.call(null,still_and_node)),(3));
var result__10987__auto___15746 = cljs.core.apply.call(null,cljs.core._EQ_,values__10986__auto___15745);
if(cljs.core.truth_(result__10987__auto___15746)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10986__auto___15745),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10986__auto___15745)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15712){var t__11024__auto___15747 = e15712;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto___15747,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10986__auto___15748 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,lettercomb.ternary_tree.depth.call(null,still_and_node)),(3));
var result__10987__auto___15749 = cljs.core.apply.call(null,cljs.core._EQ_,values__10986__auto___15748);
if(cljs.core.truth_(result__10987__auto___15749)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"depth","depth",-885772129,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10986__auto___15748),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"depth","depth",-885772129,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10986__auto___15748)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15713){var t__11024__auto___15750 = e15713;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(3),cljs.core.list(new cljs.core.Symbol(null,"depth","depth",-885772129,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto___15750,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__10986__auto__ = cljs.core._conj.call(null,cljs.core.List.EMPTY,lettercomb.ternary_tree.has_QMARK_.call(null,still_and_node,"hey"));
var result__10987__auto__ = cljs.core.apply.call(null,cljs.core.false_QMARK_,values__10986__auto__);
if(cljs.core.truth_(result__10987__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"hey")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.false_QMARK_,values__10986__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"hey")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__10986__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__10987__auto__;
}catch (e15714){var t__11024__auto__ = e15714;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"still-and-node","still-and-node",-1318123577,null),"hey")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

lettercomb.ternary_tree.test_noop.cljs$lang$var = new cljs.core.Var(function(){return lettercomb.ternary_tree.test_noop;},new cljs.core.Symbol("lettercomb.ternary-tree","test-noop","lettercomb.ternary-tree/test-noop",648911402,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lettercomb.ternary-tree","lettercomb.ternary-tree",-1129499782,null),new cljs.core.Symbol(null,"test-noop","test-noop",-409531149,null),"/Users/ethan/code/LetterComb2/App/src/lettercomb/ternary_tree.cljs",19,1,170,170,cljs.core.List.EMPTY,null,(cljs.core.truth_(lettercomb.ternary_tree.test_noop)?lettercomb.ternary_tree.test_noop.cljs$lang$test:null)]));
lettercomb.ternary_tree.test_build_tst = (function lettercomb$ternary_tree$test_build_tst(){
return cljs.test.test_var.call(null,lettercomb$ternary_tree$test_build_tst.cljs$lang$var);
});
lettercomb.ternary_tree.test_build_tst.cljs$lang$test = (function (){
var word_list = ["a","abba","cabba","car","cat","dog"];
var result = lettercomb.ternary_tree.build_tst.call(null,word_list);
try{var values__10986__auto___15758 = cljs.core._conj.call(null,cljs.core.List.EMPTY,lettercomb.ternary_tree.has_QMARK_.call(null,result,"digg"));
var result__10987__auto___15759 = cljs.core.apply.call(null,cljs.core.false_QMARK_,values__10986__auto___15758);
if(cljs.core.truth_(result__10987__auto___15759)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),"digg")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.false_QMARK_,values__10986__auto___15758),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),"digg")),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),values__10986__auto___15758)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15751){var t__11024__auto___15760 = e15751;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"false?","false?",-1522377573,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),"digg")),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto___15760,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var seq__15752 = cljs.core.seq.call(null,word_list);
var chunk__15753 = null;
var count__15754 = (0);
var i__15755 = (0);
while(true){
if((i__15755 < count__15754)){
var word = cljs.core._nth.call(null,chunk__15753,i__15755);
try{var values__10986__auto___15761 = cljs.core._conj.call(null,cljs.core.List.EMPTY,lettercomb.ternary_tree.has_QMARK_.call(null,result,word));
var result__10987__auto___15762 = cljs.core.apply.call(null,cljs.core.true_QMARK_,values__10986__auto___15761);
if(cljs.core.truth_(result__10987__auto___15762)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"word","word",1220407802,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.true_QMARK_,values__10986__auto___15761),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"word","word",1220407802,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__10986__auto___15761)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15756){var t__11024__auto___15763 = e15756;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"word","word",1220407802,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto___15763,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__15764 = seq__15752;
var G__15765 = chunk__15753;
var G__15766 = count__15754;
var G__15767 = (i__15755 + (1));
seq__15752 = G__15764;
chunk__15753 = G__15765;
count__15754 = G__15766;
i__15755 = G__15767;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15752);
if(temp__4425__auto__){
var seq__15752__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15752__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__15752__$1);
var G__15768 = cljs.core.chunk_rest.call(null,seq__15752__$1);
var G__15769 = c__5471__auto__;
var G__15770 = cljs.core.count.call(null,c__5471__auto__);
var G__15771 = (0);
seq__15752 = G__15768;
chunk__15753 = G__15769;
count__15754 = G__15770;
i__15755 = G__15771;
continue;
} else {
var word = cljs.core.first.call(null,seq__15752__$1);
try{var values__10986__auto___15772 = cljs.core._conj.call(null,cljs.core.List.EMPTY,lettercomb.ternary_tree.has_QMARK_.call(null,result,word));
var result__10987__auto___15773 = cljs.core.apply.call(null,cljs.core.true_QMARK_,values__10986__auto___15772);
if(cljs.core.truth_(result__10987__auto___15773)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"word","word",1220407802,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.true_QMARK_,values__10986__auto___15772),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"word","word",1220407802,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"true?","true?",-1600332395,null),values__10986__auto___15772)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e15757){var t__11024__auto___15774 = e15757;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"true?","true?",-1600332395,null),cljs.core.list(new cljs.core.Symbol(null,"has?","has?",1005094987,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"word","word",1220407802,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__11024__auto___15774,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
var G__15775 = cljs.core.next.call(null,seq__15752__$1);
var G__15776 = null;
var G__15777 = (0);
var G__15778 = (0);
seq__15752 = G__15775;
chunk__15753 = G__15776;
count__15754 = G__15777;
i__15755 = G__15778;
continue;
}
} else {
return null;
}
}
break;
}
});

lettercomb.ternary_tree.test_build_tst.cljs$lang$var = new cljs.core.Var(function(){return lettercomb.ternary_tree.test_build_tst;},new cljs.core.Symbol("lettercomb.ternary-tree","test-build-tst","lettercomb.ternary-tree/test-build-tst",-234187954,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"lettercomb.ternary-tree","lettercomb.ternary-tree",-1129499782,null),new cljs.core.Symbol(null,"test-build-tst","test-build-tst",-1322973931,null),"/Users/ethan/code/LetterComb2/App/src/lettercomb/ternary_tree.cljs",24,1,189,189,cljs.core.List.EMPTY,null,(cljs.core.truth_(lettercomb.ternary_tree.test_build_tst)?lettercomb.ternary_tree.test_build_tst.cljs$lang$test:null)]));
lettercomb.ternary_tree.english = cljs.core.atom.call(null,null);
lettercomb.ternary_tree.build_english_tst_BANG_ = (function lettercomb$ternary_tree$build_english_tst_BANG_(){
var temp__4425__auto__ = WORDS;
if(cljs.core.truth_(temp__4425__auto__)){
var english_words = temp__4425__auto__;
var result = lettercomb.ternary_tree.build_tst.call(null,english_words);
return cljs.core.reset_BANG_.call(null,lettercomb.ternary_tree.english,result);
} else {
return null;
}
});
