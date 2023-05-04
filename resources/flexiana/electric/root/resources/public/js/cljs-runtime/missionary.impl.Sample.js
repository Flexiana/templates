goog.provide('missionary.impl.Sample');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Sample.Process = (function (combinator,notifier,terminator,args,inputs,busy,done,alive){
this.combinator = combinator;
this.notifier = notifier;
this.terminator = terminator;
this.args = args;
this.inputs = inputs;
this.busy = busy;
this.done = done;
this.alive = alive;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Sample.Process.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__40158 = (arguments.length - (1));
switch (G__40158) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Sample.Process.prototype.apply = (function (self__,args40157){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40157)));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var fexpr__40160 = (self__.inputs[(self__.inputs.length - (1))]);
return (fexpr__40160.cljs$core$IFn$_invoke$arity$0 ? fexpr__40160.cljs$core$IFn$_invoke$arity$0() : fexpr__40160.call(null));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (p){
var self__ = this;
var p__$1 = this;
return (missionary.impl.Sample.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Sample.transfer.cljs$core$IFn$_invoke$arity$1(p__$1) : missionary.impl.Sample.transfer.call(null,p__$1));
}));

(missionary.impl.Sample.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinator","combinator",-746639828,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"alive","alive",-1229505839,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null))], null);
}));

(missionary.impl.Sample.Process.cljs$lang$type = true);

(missionary.impl.Sample.Process.cljs$lang$ctorStr = "missionary.impl.Sample/Process");

(missionary.impl.Sample.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Sample/Process");
}));

/**
 * Positional factory function for missionary.impl.Sample/Process.
 */
missionary.impl.Sample.__GT_Process = (function missionary$impl$Sample$__GT_Process(combinator,notifier,terminator,args,inputs,busy,done,alive){
return (new missionary.impl.Sample.Process(combinator,notifier,terminator,args,inputs,busy,done,alive));
});

missionary.impl.Sample.ready = (function missionary$impl$Sample$ready(ps){
var args = ps.args;
var inputs = ps.inputs;
var sampled = (inputs.length - (1));
var cb = null;
while(true){
if(cljs.core.truth_((ps.busy = cljs.core.not(ps.busy)))){
if(cljs.core.truth_(ps.done)){
var n__5636__auto___40235 = sampled;
var i_40236 = (0);
while(true){
if((i_40236 < n__5636__auto___40235)){
var input_40237 = (inputs[i_40236]);
(input_40237.cljs$core$IFn$_invoke$arity$0 ? input_40237.cljs$core$IFn$_invoke$arity$0() : input_40237.call(null));

if(((args[i_40236]) === args)){
try{cljs.core.deref(input_40237);
}catch (e40200){var __40239 = e40200;
}} else {
(args[i_40236] = args);
}

var G__40240 = (i_40236 + (1));
i_40236 = G__40240;
continue;
} else {
}
break;
}

if(((ps.alive = (ps.alive - (1))) === (0))){
return ps.terminator;
} else {
return null;
}
} else {
if(((args[sampled]) === args)){
try{cljs.core.deref((inputs[sampled]));
}catch (e40206){var __40241 = e40206;
}
var G__40242 = cb;
cb = G__40242;
continue;
} else {
return ps.notifier;
}
}
} else {
return cb;
}
break;
}
});
missionary.impl.Sample.transfer = (function missionary$impl$Sample$transfer(ps){
var c = ps.combinator;
var args = ps.args;
var inputs = ps.inputs;
var sampled = (inputs.length - (1));
var sampler = (inputs[sampled]);
var x = (function (){try{try{if((c == null)){
throw (new Error("Undefined continuous flow."));
} else {
}

var n__5636__auto___40243 = sampled;
var i_40244 = (0);
while(true){
if((i_40244 < n__5636__auto___40243)){
if(((args[i_40244]) === args)){
var input_40245 = (inputs[i_40244]);
while(true){
(args[i_40244] = null);

var x_40246 = cljs.core.deref(input_40245);
if(((args[i_40244]) === args)){
continue;
} else {
(args[i_40244] = x_40246);
}
break;
}
} else {
}

var G__40247 = (i_40244 + (1));
i_40244 = G__40247;
continue;
} else {
}
break;
}
}catch (e40210){var e_40249 = e40210;
try{cljs.core.deref(sampler);
}catch (e40211){var __40250 = e40211;
}
throw e_40249;
}
(args[sampled] = cljs.core.deref(sampler));

return c.apply(null,args);
}catch (e40208){var e = e40208;
(ps.notifier = null);

(sampler.cljs$core$IFn$_invoke$arity$0 ? sampler.cljs$core$IFn$_invoke$arity$0() : sampler.call(null));

(args[sampled] = args);

return e;
}})();
var temp__5808__auto___40251 = missionary.impl.Sample.ready(ps);
if((temp__5808__auto___40251 == null)){
} else {
var cb_40252 = temp__5808__auto___40251;
(cb_40252.cljs$core$IFn$_invoke$arity$0 ? cb_40252.cljs$core$IFn$_invoke$arity$0() : cb_40252.call(null));
}

if((ps.notifier == null)){
throw x;
} else {
return x;
}
});
missionary.impl.Sample.dirty = (function missionary$impl$Sample$dirty(p,i){
var args = p.args;
if(((args[i]) === args)){
try{return cljs.core.deref((p.inputs[i]));
}catch (e40214){var _ = e40214;
return null;
}} else {
return (args[i] = args);
}
});
missionary.impl.Sample.run = (function missionary$impl$Sample$run(c,f,fs,n,t){
var it = cljs.core.iter(fs);
var arity = (cljs.core.count(fs) + (1));
var args = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var inputs = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var ps = missionary.impl.Sample.__GT_Process(c,n,t,args,inputs,false,false,arity);
var done = (function (){
if(((ps.alive = (ps.alive - (1))) === (0))){
var fexpr__40221 = ps.terminator;
return (fexpr__40221.cljs$core$IFn$_invoke$arity$0 ? fexpr__40221.cljs$core$IFn$_invoke$arity$0() : fexpr__40221.call(null));
} else {
return null;
}
});
var index_40253 = (0);
var flow_40254 = f;
while(true){
if(cljs.core.truth_(it.hasNext())){
(inputs[index_40253] = (function (){var G__40223 = ((function (index_40253,flow_40254,it,arity,args,inputs,ps,done){
return (function (){
return missionary.impl.Sample.dirty(ps,index_40253);
});})(index_40253,flow_40254,it,arity,args,inputs,ps,done))
;
var G__40224 = done;
return (flow_40254.cljs$core$IFn$_invoke$arity$2 ? flow_40254.cljs$core$IFn$_invoke$arity$2(G__40223,G__40224) : flow_40254.call(null,G__40223,G__40224));
})());

if(((args[index_40253]) == null)){
(ps.combinator = null);
} else {
}

var G__40255 = (index_40253 + (1));
var G__40256 = it.next();
index_40253 = G__40255;
flow_40254 = G__40256;
continue;
} else {
(inputs[index_40253] = (function (){var G__40225 = ((function (index_40253,flow_40254,it,arity,args,inputs,ps,done){
return (function (){
var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_40253,flow_40254,it,arity,args,inputs,ps,done))
;
var G__40226 = ((function (index_40253,flow_40254,G__40225,it,arity,args,inputs,ps,done){
return (function (){
(ps.done = true);

var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_40253,flow_40254,G__40225,it,arity,args,inputs,ps,done))
;
return (flow_40254.cljs$core$IFn$_invoke$arity$2 ? flow_40254.cljs$core$IFn$_invoke$arity$2(G__40225,G__40226) : flow_40254.call(null,G__40225,G__40226));
})());
}
break;
}

return ps;
});

//# sourceMappingURL=missionary.impl.Sample.js.map
