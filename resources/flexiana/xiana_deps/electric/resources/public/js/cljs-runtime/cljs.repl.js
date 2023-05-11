goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36124){
var map__36126 = p__36124;
var map__36126__$1 = cljs.core.__destructure_map(map__36126);
var m = map__36126__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36126__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36126__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36129_36537 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36130_36538 = null;
var count__36131_36539 = (0);
var i__36132_36540 = (0);
while(true){
if((i__36132_36540 < count__36131_36539)){
var f_36541 = chunk__36130_36538.cljs$core$IIndexed$_nth$arity$2(null,i__36132_36540);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36541], 0));


var G__36542 = seq__36129_36537;
var G__36543 = chunk__36130_36538;
var G__36544 = count__36131_36539;
var G__36545 = (i__36132_36540 + (1));
seq__36129_36537 = G__36542;
chunk__36130_36538 = G__36543;
count__36131_36539 = G__36544;
i__36132_36540 = G__36545;
continue;
} else {
var temp__5804__auto___36546 = cljs.core.seq(seq__36129_36537);
if(temp__5804__auto___36546){
var seq__36129_36547__$1 = temp__5804__auto___36546;
if(cljs.core.chunked_seq_QMARK_(seq__36129_36547__$1)){
var c__5568__auto___36548 = cljs.core.chunk_first(seq__36129_36547__$1);
var G__36549 = cljs.core.chunk_rest(seq__36129_36547__$1);
var G__36550 = c__5568__auto___36548;
var G__36551 = cljs.core.count(c__5568__auto___36548);
var G__36552 = (0);
seq__36129_36537 = G__36549;
chunk__36130_36538 = G__36550;
count__36131_36539 = G__36551;
i__36132_36540 = G__36552;
continue;
} else {
var f_36553 = cljs.core.first(seq__36129_36547__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36553], 0));


var G__36554 = cljs.core.next(seq__36129_36547__$1);
var G__36555 = null;
var G__36556 = (0);
var G__36557 = (0);
seq__36129_36537 = G__36554;
chunk__36130_36538 = G__36555;
count__36131_36539 = G__36556;
i__36132_36540 = G__36557;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36558 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36558], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36558)))?cljs.core.second(arglists_36558):arglists_36558)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36138_36560 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36140_36561 = null;
var count__36141_36562 = (0);
var i__36142_36563 = (0);
while(true){
if((i__36142_36563 < count__36141_36562)){
var vec__36153_36564 = chunk__36140_36561.cljs$core$IIndexed$_nth$arity$2(null,i__36142_36563);
var name_36565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36153_36564,(0),null);
var map__36156_36566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36153_36564,(1),null);
var map__36156_36567__$1 = cljs.core.__destructure_map(map__36156_36566);
var doc_36568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36156_36567__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36156_36567__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36565], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36569], 0));

if(cljs.core.truth_(doc_36568)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36568], 0));
} else {
}


var G__36570 = seq__36138_36560;
var G__36571 = chunk__36140_36561;
var G__36572 = count__36141_36562;
var G__36573 = (i__36142_36563 + (1));
seq__36138_36560 = G__36570;
chunk__36140_36561 = G__36571;
count__36141_36562 = G__36572;
i__36142_36563 = G__36573;
continue;
} else {
var temp__5804__auto___36574 = cljs.core.seq(seq__36138_36560);
if(temp__5804__auto___36574){
var seq__36138_36575__$1 = temp__5804__auto___36574;
if(cljs.core.chunked_seq_QMARK_(seq__36138_36575__$1)){
var c__5568__auto___36576 = cljs.core.chunk_first(seq__36138_36575__$1);
var G__36577 = cljs.core.chunk_rest(seq__36138_36575__$1);
var G__36578 = c__5568__auto___36576;
var G__36579 = cljs.core.count(c__5568__auto___36576);
var G__36580 = (0);
seq__36138_36560 = G__36577;
chunk__36140_36561 = G__36578;
count__36141_36562 = G__36579;
i__36142_36563 = G__36580;
continue;
} else {
var vec__36159_36581 = cljs.core.first(seq__36138_36575__$1);
var name_36582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36159_36581,(0),null);
var map__36162_36583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36159_36581,(1),null);
var map__36162_36584__$1 = cljs.core.__destructure_map(map__36162_36583);
var doc_36585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162_36584__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162_36584__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36582], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36586], 0));

if(cljs.core.truth_(doc_36585)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36585], 0));
} else {
}


var G__36587 = cljs.core.next(seq__36138_36575__$1);
var G__36588 = null;
var G__36589 = (0);
var G__36590 = (0);
seq__36138_36560 = G__36587;
chunk__36140_36561 = G__36588;
count__36141_36562 = G__36589;
i__36142_36563 = G__36590;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36163 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36164 = null;
var count__36165 = (0);
var i__36166 = (0);
while(true){
if((i__36166 < count__36165)){
var role = chunk__36164.cljs$core$IIndexed$_nth$arity$2(null,i__36166);
var temp__5804__auto___36591__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36591__$1)){
var spec_36592 = temp__5804__auto___36591__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36592)], 0));
} else {
}


var G__36593 = seq__36163;
var G__36594 = chunk__36164;
var G__36595 = count__36165;
var G__36596 = (i__36166 + (1));
seq__36163 = G__36593;
chunk__36164 = G__36594;
count__36165 = G__36595;
i__36166 = G__36596;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__36163);
if(temp__5804__auto____$1){
var seq__36163__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36163__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36163__$1);
var G__36597 = cljs.core.chunk_rest(seq__36163__$1);
var G__36598 = c__5568__auto__;
var G__36599 = cljs.core.count(c__5568__auto__);
var G__36600 = (0);
seq__36163 = G__36597;
chunk__36164 = G__36598;
count__36165 = G__36599;
i__36166 = G__36600;
continue;
} else {
var role = cljs.core.first(seq__36163__$1);
var temp__5804__auto___36601__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36601__$2)){
var spec_36602 = temp__5804__auto___36601__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36602)], 0));
} else {
}


var G__36603 = cljs.core.next(seq__36163__$1);
var G__36604 = null;
var G__36605 = (0);
var G__36606 = (0);
seq__36163 = G__36603;
chunk__36164 = G__36604;
count__36165 = G__36605;
i__36166 = G__36606;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36610 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36611 = cljs.core.ex_cause(t);
via = G__36610;
t = G__36611;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36349 = datafied_throwable;
var map__36349__$1 = cljs.core.__destructure_map(map__36349);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36349__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36349__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36349__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36350 = cljs.core.last(via);
var map__36350__$1 = cljs.core.__destructure_map(map__36350);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36350__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36350__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36350__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36351 = data;
var map__36351__$1 = cljs.core.__destructure_map(map__36351);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36351__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36351__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36351__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36352 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36352__$1 = cljs.core.__destructure_map(map__36352);
var top_data = map__36352__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36352__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36365 = phase;
var G__36365__$1 = (((G__36365 instanceof cljs.core.Keyword))?G__36365.fqn:null);
switch (G__36365__$1) {
case "read-source":
var map__36372 = data;
var map__36372__$1 = cljs.core.__destructure_map(map__36372);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36372__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36372__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36378 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36378__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36378,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36378);
var G__36378__$2 = (cljs.core.truth_((function (){var fexpr__36396 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36396.cljs$core$IFn$_invoke$arity$1 ? fexpr__36396.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36396.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36378__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36378__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36378__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36378__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36412 = top_data;
var G__36412__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36412,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36412);
var G__36412__$2 = (cljs.core.truth_((function (){var fexpr__36413 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36413.cljs$core$IFn$_invoke$arity$1 ? fexpr__36413.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36413.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36412__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36412__$1);
var G__36412__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36412__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36412__$2);
var G__36412__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36412__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36412__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36412__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36412__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36418 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36418,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36418,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36418,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36418,(3),null);
var G__36422 = top_data;
var G__36422__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36422,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36422);
var G__36422__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36422__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36422__$1);
var G__36422__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36422__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36422__$2);
var G__36422__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36422__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36422__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36422__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36422__$4;
}

break;
case "execution":
var vec__36428 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36428,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36428,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36428,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36428,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36346_SHARP_){
var or__5045__auto__ = (p1__36346_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__36433 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36433.cljs$core$IFn$_invoke$arity$1 ? fexpr__36433.cljs$core$IFn$_invoke$arity$1(p1__36346_SHARP_) : fexpr__36433.call(null,p1__36346_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__36434 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36434__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36434,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36434);
var G__36434__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36434__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36434__$1);
var G__36434__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36434__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36434__$2);
var G__36434__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36434__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36434__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36434__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36434__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36365__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36448){
var map__36449 = p__36448;
var map__36449__$1 = cljs.core.__destructure_map(map__36449);
var triage_data = map__36449__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36449__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36449__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36449__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36449__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36449__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36449__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36449__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36449__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36453 = phase;
var G__36453__$1 = (((G__36453 instanceof cljs.core.Keyword))?G__36453.fqn:null);
switch (G__36453__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36456 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36457 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36458 = loc;
var G__36459 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36462_36624 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36463_36625 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36464_36626 = true;
var _STAR_print_fn_STAR__temp_val__36465_36627 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36464_36626);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36465_36627);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36444_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36444_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36463_36625);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36462_36624);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36456,G__36457,G__36458,G__36459) : format.call(null,G__36456,G__36457,G__36458,G__36459));

break;
case "macroexpansion":
var G__36472 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36473 = cause_type;
var G__36474 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36475 = loc;
var G__36476 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36472,G__36473,G__36474,G__36475,G__36476) : format.call(null,G__36472,G__36473,G__36474,G__36475,G__36476));

break;
case "compile-syntax-check":
var G__36482 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36483 = cause_type;
var G__36484 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36485 = loc;
var G__36486 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36482,G__36483,G__36484,G__36485,G__36486) : format.call(null,G__36482,G__36483,G__36484,G__36485,G__36486));

break;
case "compilation":
var G__36488 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36489 = cause_type;
var G__36490 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36491 = loc;
var G__36492 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36488,G__36489,G__36490,G__36491,G__36492) : format.call(null,G__36488,G__36489,G__36490,G__36491,G__36492));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36493 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36494 = symbol;
var G__36495 = loc;
var G__36496 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36499_36630 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36500_36631 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36501_36632 = true;
var _STAR_print_fn_STAR__temp_val__36502_36633 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36501_36632);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36502_36633);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36447_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36447_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36500_36631);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36499_36630);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36493,G__36494,G__36495,G__36496) : format.call(null,G__36493,G__36494,G__36495,G__36496));
} else {
var G__36517 = "Execution error%s at %s(%s).\n%s\n";
var G__36518 = cause_type;
var G__36519 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36520 = loc;
var G__36521 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36517,G__36518,G__36519,G__36520,G__36521) : format.call(null,G__36517,G__36518,G__36519,G__36520,G__36521));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36453__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
