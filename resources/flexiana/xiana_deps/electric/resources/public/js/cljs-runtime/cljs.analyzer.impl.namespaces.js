goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__39537 = libspec;
var seq__39538 = cljs.core.seq(vec__39537);
var first__39539 = cljs.core.first(seq__39538);
var seq__39538__$1 = cljs.core.next(seq__39538);
var lib = first__39539;
var spec = seq__39538__$1;
var libspec__$1 = vec__39537;
var vec__39541 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39541,(0),null);
var vec__39544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39541,(1),null);
var seq__39545 = cljs.core.seq(vec__39544);
var first__39546 = cljs.core.first(seq__39545);
var seq__39545__$1 = cljs.core.next(seq__39545);
var _ = first__39546;
var first__39546__$1 = cljs.core.first(seq__39545__$1);
var seq__39545__$2 = cljs.core.next(seq__39545__$1);
var alias = first__39546__$1;
var post_spec = seq__39545__$2;
var post = vec__39544;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__39550 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39550,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__39550;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__39554 = cljs.core.seq(new_as_aliases);
var chunk__39555 = null;
var count__39556 = (0);
var i__39557 = (0);
while(true){
if((i__39557 < count__39556)){
var vec__39572 = chunk__39555.cljs$core$IIndexed$_nth$arity$2(null,i__39557);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39572,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39572,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__39594 = seq__39554;
var G__39595 = chunk__39555;
var G__39596 = count__39556;
var G__39597 = (i__39557 + (1));
seq__39554 = G__39594;
chunk__39555 = G__39595;
count__39556 = G__39596;
i__39557 = G__39597;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__39554);
if(temp__5804__auto__){
var seq__39554__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39554__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39554__$1);
var G__39598 = cljs.core.chunk_rest(seq__39554__$1);
var G__39599 = c__5568__auto__;
var G__39600 = cljs.core.count(c__5568__auto__);
var G__39601 = (0);
seq__39554 = G__39598;
chunk__39555 = G__39599;
count__39556 = G__39600;
i__39557 = G__39601;
continue;
} else {
var vec__39575 = cljs.core.first(seq__39554__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39575,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39575,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__39602 = cljs.core.next(seq__39554__$1);
var G__39603 = null;
var G__39604 = (0);
var G__39605 = (0);
seq__39554 = G__39602;
chunk__39555 = G__39603;
count__39556 = G__39604;
i__39557 = G__39605;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__39582 = arguments.length;
switch (G__39582) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__39583 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__39583__$1 = cljs.core.__destructure_map(map__39583);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39583__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39583__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__39584 = ret__$1;
var G__39584__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__39584,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__39584);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__39584__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__39584__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__39585,p__39586){
var map__39587 = p__39585;
var map__39587__$1 = cljs.core.__destructure_map(map__39587);
var ret__$1 = map__39587__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39587__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__39588 = p__39586;
var seq__39589 = cljs.core.seq(vec__39588);
var first__39590 = cljs.core.first(seq__39589);
var seq__39589__$1 = cljs.core.next(seq__39589);
var spec_key = first__39590;
var libspecs = seq__39589__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__39591 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__39591__$1 = cljs.core.__destructure_map(map__39591);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39591__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39591__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__39592 = ret__$1;
var G__39592__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__39592,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__39592);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__39592__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__39592__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
