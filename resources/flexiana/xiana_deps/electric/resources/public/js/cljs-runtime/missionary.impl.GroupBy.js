goog.provide('missionary.impl.GroupBy');





/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.GroupBy.Process = (function (keyfn,notifier,terminator,key,value,input,table,load,live,busy,done){
this.keyfn = keyfn;
this.notifier = notifier;
this.terminator = terminator;
this.key = key;
this.value = value;
this.input = input;
this.table = table;
this.load = load;
this.live = live;
this.busy = busy;
this.done = done;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.GroupBy.Process.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__40112 = (arguments.length - (1));
switch (G__40112) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.GroupBy.Process.prototype.apply = (function (self__,args40111){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40111)));
}));

(missionary.impl.GroupBy.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var p = this;
(missionary.impl.GroupBy.kill.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.kill.cljs$core$IFn$_invoke$arity$1(p) : missionary.impl.GroupBy.kill.call(null,p));

return null;
}));

(missionary.impl.GroupBy.Process.prototype.cljs$core$IFn$_invoke$arity$2 = (function (n,t){
var self__ = this;
var p = this;
return (missionary.impl.GroupBy.group.cljs$core$IFn$_invoke$arity$3 ? missionary.impl.GroupBy.group.cljs$core$IFn$_invoke$arity$3(p,n,t) : missionary.impl.GroupBy.group.call(null,p,n,t));
}));

(missionary.impl.GroupBy.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (p){
var self__ = this;
var p__$1 = this;
return (missionary.impl.GroupBy.sample.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.sample.cljs$core$IFn$_invoke$arity$1(p__$1) : missionary.impl.GroupBy.sample.call(null,p__$1));
}));

(missionary.impl.GroupBy.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keyfn","keyfn",-1874375437,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.Symbol(null,"table","table",1075588491,null),cljs.core.with_meta(new cljs.core.Symbol(null,"load","load",321890343,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"live","live",30383488,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null))], null);
}));

(missionary.impl.GroupBy.Process.cljs$lang$type = true);

(missionary.impl.GroupBy.Process.cljs$lang$ctorStr = "missionary.impl.GroupBy/Process");

(missionary.impl.GroupBy.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.GroupBy/Process");
}));

/**
 * Positional factory function for missionary.impl.GroupBy/Process.
 */
missionary.impl.GroupBy.__GT_Process = (function missionary$impl$GroupBy$__GT_Process(keyfn,notifier,terminator,key,value,input,table,load,live,busy,done){
return (new missionary.impl.GroupBy.Process(keyfn,notifier,terminator,key,value,input,table,load,live,busy,done));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.GroupBy.Group = (function (process,key,notifier,terminator){
this.process = process;
this.key = key;
this.notifier = notifier;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.GroupBy.Group.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__40127 = (arguments.length - (1));
switch (G__40127) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.GroupBy.Group.prototype.apply = (function (self__,args40120){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40120)));
}));

(missionary.impl.GroupBy.Group.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var g = this;
(missionary.impl.GroupBy.cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.cancel.cljs$core$IFn$_invoke$arity$1(g) : missionary.impl.GroupBy.cancel.call(null,g));

return null;
}));

(missionary.impl.GroupBy.Group.prototype.cljs$core$IDeref$_deref$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return (missionary.impl.GroupBy.consume.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.consume.cljs$core$IFn$_invoke$arity$1(g__$1) : missionary.impl.GroupBy.consume.call(null,g__$1));
}));

(missionary.impl.GroupBy.Group.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(missionary.impl.GroupBy.Group.cljs$lang$type = true);

(missionary.impl.GroupBy.Group.cljs$lang$ctorStr = "missionary.impl.GroupBy/Group");

(missionary.impl.GroupBy.Group.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.GroupBy/Group");
}));

/**
 * Positional factory function for missionary.impl.GroupBy/Group.
 */
missionary.impl.GroupBy.__GT_Group = (function missionary$impl$GroupBy$__GT_Group(process,key,notifier,terminator){
return (new missionary.impl.GroupBy.Group(process,key,notifier,terminator));
});

missionary.impl.GroupBy.kill = (function missionary$impl$GroupBy$kill(p){
if(cljs.core.truth_(p.live)){
(p.live = false);

var fexpr__40133 = p.input;
return (fexpr__40133.cljs$core$IFn$_invoke$arity$0 ? fexpr__40133.cljs$core$IFn$_invoke$arity$0() : fexpr__40133.call(null));
} else {
return null;
}
});
missionary.impl.GroupBy.step = (function missionary$impl$GroupBy$step(i,m){
return ((i + (1)) & m);
});
missionary.impl.GroupBy.group = (function missionary$impl$GroupBy$group(p,n,t){
var k = p.key;
var g = missionary.impl.GroupBy.__GT_Group(p,k,n,t);
var table = p.table;
if((k === p)){
} else {
(p.key = p);

var s_40258 = table.length;
var m_40259 = (s_40258 - (1));
var i_40260 = (cljs.core.hash(k) & m_40259);
while(true){
var G__40135_40262 = (table[i_40260]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__40135_40262)){
(table[i_40260] = g);
} else {
var G__40263 = missionary.impl.GroupBy.step(i_40260,m_40259);
i_40260 = G__40263;
continue;

}
break;
}

var ss_40264 = (s_40258 << (1));
if((ss_40264 <= ((3) * (p.load = (p.load + (1)))))){
var mm_40267 = (ss_40264 - (1));
var larger_40268 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(ss_40264);
(p.table = larger_40268);

var n__5636__auto___40270 = s_40258;
var i_40271 = (0);
while(true){
if((i_40271 < n__5636__auto___40270)){
var temp__5808__auto___40272 = (table[i_40271]);
if((temp__5808__auto___40272 == null)){
} else {
var h_40273 = temp__5808__auto___40272;
var j_40274 = (cljs.core.hash(h_40273.key) & mm_40267);
while(true){
var G__40147_40275 = (larger_40268[j_40274]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__40147_40275)){
(larger_40268[j_40274] = h_40273);
} else {
var G__40276 = missionary.impl.GroupBy.step(j_40274,mm_40267);
j_40274 = G__40276;
continue;

}
break;
}
}

var G__40277 = (i_40271 + (1));
i_40271 = G__40277;
continue;
} else {
}
break;
}
} else {
}
}

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return g;
});
missionary.impl.GroupBy.cancel = (function missionary$impl$GroupBy$cancel(g){
var p = g.process;
var k = g.key;
if(cljs.core.truth_(p.live)){
if((k === p)){
return null;
} else {
(g.key = p);

var table = p.table;
var m = (table.length - (1));
var i = (function (){var i = (cljs.core.hash(k) & m);
while(true){
if((g === (table[i]))){
return i;
} else {
var G__40280 = missionary.impl.GroupBy.step(i,m);
i = G__40280;
continue;
}
break;
}
})();
(table[i] = null);

(p.load = (p.load - (1)));

var i_40281__$1 = missionary.impl.GroupBy.step(i,m);
while(true){
var temp__5808__auto___40282 = (table[i_40281__$1]);
if((temp__5808__auto___40282 == null)){
} else {
var h_40283 = temp__5808__auto___40282;
var j_40284 = (cljs.core.hash(h_40283.key) & m);
if((i_40281__$1 === j_40284)){
} else {
(table[i_40281__$1] = null);

var j_40286__$1 = j_40284;
while(true){
if(((table[j_40286__$1]) == null)){
(table[j_40286__$1] = h_40283);
} else {
var G__40288 = missionary.impl.GroupBy.step(j_40286__$1,m);
j_40286__$1 = G__40288;
continue;
}
break;
}
}

var G__40289 = missionary.impl.GroupBy.step(i_40281__$1,m);
i_40281__$1 = G__40289;
continue;
}
break;
}

var fexpr__40190 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,p.key))?p.notifier:g.notifier);
return (fexpr__40190.cljs$core$IFn$_invoke$arity$0 ? fexpr__40190.cljs$core$IFn$_invoke$arity$0() : fexpr__40190.call(null));
}
} else {
return null;
}
});
missionary.impl.GroupBy.transfer = (function missionary$impl$GroupBy$transfer(p){
while(true){
if(cljs.core.truth_((p.busy = cljs.core.not(p.busy)))){
if(cljs.core.truth_(p.done)){
(p.live = false);

var temp__5808__auto___40297 = p.table;
if((temp__5808__auto___40297 == null)){
} else {
var table_40301 = temp__5808__auto___40297;
(p.table = null);

var n__5636__auto___40304 = table_40301.length;
var i_40309 = (0);
while(true){
if((i_40309 < n__5636__auto___40304)){
var temp__5808__auto___40315__$1 = (table_40301[i_40309]);
if((temp__5808__auto___40315__$1 == null)){
} else {
var g_40317 = temp__5808__auto___40315__$1;
var fexpr__40193_40318 = g_40317.terminator;
(fexpr__40193_40318.cljs$core$IFn$_invoke$arity$0 ? fexpr__40193_40318.cljs$core$IFn$_invoke$arity$0() : fexpr__40193_40318.call(null));
}

var G__40320 = (i_40309 + (1));
i_40309 = G__40320;
continue;
} else {
}
break;
}
}

var fexpr__40194 = p.terminator;
return (fexpr__40194.cljs$core$IFn$_invoke$arity$0 ? fexpr__40194.cljs$core$IFn$_invoke$arity$0() : fexpr__40194.call(null));
} else {
if((p === p.value)){
var table = p.table;
try{var k = (p.key = (function (){var G__40199 = (p.value = cljs.core.deref(p.input));
var fexpr__40198 = p.keyfn;
return (fexpr__40198.cljs$core$IFn$_invoke$arity$1 ? fexpr__40198.cljs$core$IFn$_invoke$arity$1(G__40199) : fexpr__40198.call(null,G__40199));
})());
var m = (table.length - (1));
var i = (cljs.core.hash(k) & m);
while(true){
var temp__5806__auto__ = (table[i]);
if((temp__5806__auto__ == null)){
var fexpr__40202 = p.notifier;
return (fexpr__40202.cljs$core$IFn$_invoke$arity$0 ? fexpr__40202.cljs$core$IFn$_invoke$arity$0() : fexpr__40202.call(null));
} else {
var h = temp__5806__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,h.key)){
var fexpr__40204 = h.notifier;
return (fexpr__40204.cljs$core$IFn$_invoke$arity$0 ? fexpr__40204.cljs$core$IFn$_invoke$arity$0() : fexpr__40204.call(null));
} else {
var G__40336 = missionary.impl.GroupBy.step(i,m);
i = G__40336;
continue;
}
}
break;
}
}catch (e40195){var e = e40195;
(p.value = e);

(p.table = null);

missionary.impl.GroupBy.kill(p);

var n__5636__auto___40339 = table.length;
var i_40341 = (0);
while(true){
if((i_40341 < n__5636__auto___40339)){
var temp__5808__auto___40342 = (table[i_40341]);
if((temp__5808__auto___40342 == null)){
} else {
var g_40343 = temp__5808__auto___40342;
var fexpr__40196_40344 = g_40343.terminator;
(fexpr__40196_40344.cljs$core$IFn$_invoke$arity$0 ? fexpr__40196_40344.cljs$core$IFn$_invoke$arity$0() : fexpr__40196_40344.call(null));
}

var G__40345 = (i_40341 + (1));
i_40341 = G__40345;
continue;
} else {
}
break;
}

var fexpr__40197 = p.notifier;
return (fexpr__40197.cljs$core$IFn$_invoke$arity$0 ? fexpr__40197.cljs$core$IFn$_invoke$arity$0() : fexpr__40197.call(null));
}} else {
try{cljs.core.deref(p.input);
}catch (e40205){var __40347 = e40205;
}
continue;
}
}
} else {
return null;
}
break;
}
});
missionary.impl.GroupBy.sample = (function missionary$impl$GroupBy$sample(p){
var k = p.key;
if((k === p)){
missionary.impl.GroupBy.transfer(p);

throw p.value;
} else {
return cljs.core.__GT_MapEntry(k,p,null);
}
});
missionary.impl.GroupBy.consume = (function missionary$impl$GroupBy$consume(g){
var p = g.process;
if((p === g.key)){
var fexpr__40207_40348 = g.terminator;
(fexpr__40207_40348.cljs$core$IFn$_invoke$arity$0 ? fexpr__40207_40348.cljs$core$IFn$_invoke$arity$0() : fexpr__40207_40348.call(null));

throw (new missionary.Cancelled("Group consumer cancelled."));
} else {
var x = p.value;
(p.value = p);

(p.key = p);

missionary.impl.GroupBy.transfer(p);

return x;
}
});
missionary.impl.GroupBy.run = (function missionary$impl$GroupBy$run(k,f,n,t){
var p = missionary.impl.GroupBy.__GT_Process(k,n,t,null,null,null,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8)),(0),true,true,false);
(p.key = p);

(p.value = p);

(p.input = (function (){var G__40216 = (function (){
return missionary.impl.GroupBy.transfer(p);
});
var G__40217 = (function (){
(p.done = true);

return missionary.impl.GroupBy.transfer(p);
});
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__40216,G__40217) : f.call(null,G__40216,G__40217));
})());

missionary.impl.GroupBy.transfer(p);

return p;
});

//# sourceMappingURL=missionary.impl.GroupBy.js.map
