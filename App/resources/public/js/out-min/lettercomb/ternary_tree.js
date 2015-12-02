// Compiled by ClojureScript 1.7.170 {}
goog.provide('lettercomb.ternary_tree');
goog.require('cljs.core');

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

lettercomb.ternary_tree.size = (function lettercomb$ternary_tree$size(this$){
if((!((this$ == null))) && (!((this$.lettercomb$ternary_tree$TSTree$size$arity$1 == null)))){
return this$.lettercomb$ternary_tree$TSTree$size$arity$1(this$);
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
throw cljs.core.missing_protocol.call(null,"TSTree.size",this$);
}
}
}
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
lettercomb.ternary_tree.TSTNode = (function (letter,terminal_QMARK_,left,center,right,size,__meta,__extmap,__hash){
this.letter = letter;
this.terminal_QMARK_ = terminal_QMARK_;
this.left = left;
this.center = center;
this.right = right;
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
return cljs.core._lookup.call(null,this__5282__auto____$1,k__5283__auto__,null);
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5284__auto__,k14223,else__5285__auto__){
var self__ = this;
var this__5284__auto____$1 = this;
var G__14225 = (((k14223 instanceof cljs.core.Keyword))?k14223.fqn:null);
switch (G__14225) {
case "letter":
return self__.letter;

break;
case "terminal?":
return self__.terminal_QMARK_;

break;
case "left":
return self__.left;

break;
case "center":
return self__.center;

break;
case "right":
return self__.right;

break;
case "size":
return self__.size;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14223,else__5285__auto__);

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
return cljs.core.pr_sequential_writer.call(null,writer__5297__auto__,pr_pair__5299__auto__,"#lettercomb.ternary-tree.TSTNode{",", ","}",opts__5298__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"letter","letter",-125811450),self__.letter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),self__.terminal_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"left","left",-399115937),self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"center","center",-748944368),self__.center],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"right","right",-452581833),self__.right],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IIterable$ = true;

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14222){
var self__ = this;
var G__14222__$1 = this;
return (new cljs.core.RecordIter((0),G__14222__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letter","letter",-125811450),new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"size","size",1098693007)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
return self__.__meta;
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5276__auto__){
var self__ = this;
var this__5276__auto____$1 = this;
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.left,self__.center,self__.right,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5286__auto__){
var self__ = this;
var this__5286__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
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
var letter__$1 = cljs.core.first.call(null,word);
var r_word = cljs.core.rest.call(null,word);
var direction = (((letter__$1 < new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(this$__$1)))?new cljs.core.Keyword(null,"left","left",-399115937):(((letter__$1 > new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(this$__$1)))?new cljs.core.Keyword(null,"right","right",-452581833):new cljs.core.Keyword(null,"center","center",-748944368)
));
if(cljs.core.empty_QMARK_.call(null,r_word)){
return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),true,new cljs.core.Keyword(null,"size","size",1098693007),(1));
} else {
var letter__$2 = ((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"center","center",-748944368)))?cljs.core.first.call(null,r_word):letter__$1);
var old_leaf = cljs.core.get.call(null,this$__$1,direction);
var new_node = cljs.core.assoc.call(null,this$__$1,direction,lettercomb.ternary_tree.insert.call(null,(function (){var or__4668__auto__ = old_leaf;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (new lettercomb.ternary_tree.TSTNode(letter__$2,false,null,null,null,(1),null,null,null));
}
})(),r_word));
return cljs.core.assoc.call(null,new_node,new cljs.core.Keyword(null,"size","size",1098693007),(((cljs.core.get_in.call(null,new_node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"size","size",1098693007)], null),(0)) + cljs.core.get_in.call(null,new_node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"size","size",1098693007)], null),(0))) + cljs.core.get_in.call(null,new_node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"size","size",1098693007)], null),(0))) + (1)));
}
});

lettercomb.ternary_tree.TSTNode.prototype.lettercomb$ternary_tree$TSTree$search$arity$2 = (function (this$,word){
var self__ = this;
var this$__$1 = this;
var letter__$1 = cljs.core.first.call(null,word);
var r_word = cljs.core.rest.call(null,word);
if(cljs.core.empty_QMARK_.call(null,r_word)){
return new cljs.core.Keyword(null,"terminal?","terminal?",-851436688).cljs$core$IFn$_invoke$arity$1(this$__$1);
} else {
var temp__4423__auto__ = (((letter__$1 < new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(this$__$1)))?new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(this$__$1):((cljs.core._EQ_.call(null,letter__$1,new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(this$__$1)))?new cljs.core.Keyword(null,"center","center",-748944368).cljs$core$IFn$_invoke$arity$1(this$__$1):new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(this$__$1)
));
if(cljs.core.truth_(temp__4423__auto__)){
var node = temp__4423__auto__;
return lettercomb.ternary_tree.search.call(null,node,r_word);
} else {
return false;
}
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
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"letter","letter",-125811450),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"center","center",-748944368),null,new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null),k__5292__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5291__auto____$1),self__.__meta),k__5292__auto__);
} else {
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.left,self__.center,self__.right,self__.size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5292__auto__)),null));
}
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5289__auto__,k__5290__auto__,G__14222){
var self__ = this;
var this__5289__auto____$1 = this;
var pred__14226 = cljs.core.keyword_identical_QMARK_;
var expr__14227 = k__5290__auto__;
if(cljs.core.truth_(pred__14226.call(null,new cljs.core.Keyword(null,"letter","letter",-125811450),expr__14227))){
return (new lettercomb.ternary_tree.TSTNode(G__14222,self__.terminal_QMARK_,self__.left,self__.center,self__.right,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14226.call(null,new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),expr__14227))){
return (new lettercomb.ternary_tree.TSTNode(self__.letter,G__14222,self__.left,self__.center,self__.right,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14226.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__14227))){
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,G__14222,self__.center,self__.right,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14226.call(null,new cljs.core.Keyword(null,"center","center",-748944368),expr__14227))){
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.left,G__14222,self__.right,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14226.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__14227))){
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.left,self__.center,G__14222,self__.size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14226.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__14227))){
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.left,self__.center,self__.right,G__14222,self__.__meta,self__.__extmap,null));
} else {
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.left,self__.center,self__.right,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5290__auto__,G__14222),null));
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
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"letter","letter",-125811450),self__.letter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),self__.terminal_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"left","left",-399115937),self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"center","center",-748944368),self__.center],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"right","right",-452581833),self__.right],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null))], null),self__.__extmap));
});

lettercomb.ternary_tree.TSTNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5281__auto__,G__14222){
var self__ = this;
var this__5281__auto____$1 = this;
return (new lettercomb.ternary_tree.TSTNode(self__.letter,self__.terminal_QMARK_,self__.left,self__.center,self__.right,self__.size,G__14222,self__.__extmap,self__.__hash));
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
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"letter","letter",1514720077,null),new cljs.core.Symbol(null,"terminal?","terminal?",789094839,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"center","center",891587159,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"size","size",-1555742762,null)], null);
});

lettercomb.ternary_tree.TSTNode.cljs$lang$type = true;

lettercomb.ternary_tree.TSTNode.cljs$lang$ctorPrSeq = (function (this__5316__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"lettercomb.ternary-tree/TSTNode");
});

lettercomb.ternary_tree.TSTNode.cljs$lang$ctorPrWriter = (function (this__5316__auto__,writer__5317__auto__){
return cljs.core._write.call(null,writer__5317__auto__,"lettercomb.ternary-tree/TSTNode");
});

lettercomb.ternary_tree.__GT_TSTNode = (function lettercomb$ternary_tree$__GT_TSTNode(letter,terminal_QMARK_,left,center,right,size){
return (new lettercomb.ternary_tree.TSTNode(letter,terminal_QMARK_,left,center,right,size,null,null,null));
});

lettercomb.ternary_tree.map__GT_TSTNode = (function lettercomb$ternary_tree$map__GT_TSTNode(G__14224){
return (new lettercomb.ternary_tree.TSTNode(new cljs.core.Keyword(null,"letter","letter",-125811450).cljs$core$IFn$_invoke$arity$1(G__14224),new cljs.core.Keyword(null,"terminal?","terminal?",-851436688).cljs$core$IFn$_invoke$arity$1(G__14224),new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(G__14224),new cljs.core.Keyword(null,"center","center",-748944368).cljs$core$IFn$_invoke$arity$1(G__14224),new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(G__14224),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__14224),null,cljs.core.dissoc.call(null,G__14224,new cljs.core.Keyword(null,"letter","letter",-125811450),new cljs.core.Keyword(null,"terminal?","terminal?",-851436688),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"size","size",1098693007)),null));
});

lettercomb.ternary_tree.build_root_word_tst = (function lettercomb$ternary_tree$build_root_word_tst(word){
return (new lettercomb.ternary_tree.TSTNode(word,true,null,null,null,(1),null,null,null));
});
lettercomb.ternary_tree.add_slice_tst = (function lettercomb$ternary_tree$add_slice_tst(sorted_array,tst){
var len = sorted_array.length;
var med_i = (len >> (1));
var med_word = (sorted_array[med_i]);
if(cljs.core.truth_(med_word)){
var left_array = sorted_array.slice((0),med_i);
var right_array = sorted_array.slice(med_i,len);
return ((function (left_array,right_array,len,med_i,med_word){
return (function (p1__14232_SHARP_){
if(cljs.core.empty_QMARK_.call(null,right_array)){
return p1__14232_SHARP_;
} else {
return lettercomb$ternary_tree$add_slice_tst.call(null,right_array,p1__14232_SHARP_);
}
});})(left_array,right_array,len,med_i,med_word))
.call(null,((function (left_array,right_array,len,med_i,med_word){
return (function (p1__14231_SHARP_){
if(cljs.core.empty_QMARK_.call(null,left_array)){
return p1__14231_SHARP_;
} else {
return lettercomb$ternary_tree$add_slice_tst.call(null,left_array,p1__14231_SHARP_);
}
});})(left_array,right_array,len,med_i,med_word))
.call(null,((function (left_array,right_array,len,med_i,med_word){
return (function (p1__14230_SHARP_){
if(typeof p1__14230_SHARP_ !== 'undefined'){
return lettercomb.ternary_tree.insert.call(null,p1__14230_SHARP_,med_word);
} else {
return lettercomb.ternary_tree.build_root_word_tst.call(null,med_word);
}
});})(left_array,right_array,len,med_i,med_word))
.call(null,tst)));
} else {
return tst;
}
});
lettercomb.ternary_tree.build_tst = (function lettercomb$ternary_tree$build_tst(dict_array){

var cloned_array = dict_array.slice((0),dict_array.length);
var sorted_array = cloned_array.sort();
return lettercomb.ternary_tree.add_slice_tst.call(null,sorted_array,null);
});
