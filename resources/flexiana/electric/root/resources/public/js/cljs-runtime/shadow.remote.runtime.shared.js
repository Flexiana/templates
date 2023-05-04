goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33363,res){
var map__33365 = p__33363;
var map__33365__$1 = cljs.core.__destructure_map(map__33365);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33365__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33365__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33366 = res;
var G__33366__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33366,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33366);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33366__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33366__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33403 = arguments.length;
switch (G__33403) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33415,msg,handlers,timeout_after_ms){
var map__33419 = p__33415;
var map__33419__$1 = cljs.core.__destructure_map(map__33419);
var runtime = map__33419__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33419__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33636 = arguments.length;
var i__5770__auto___33637 = (0);
while(true){
if((i__5770__auto___33637 < len__5769__auto___33636)){
args__5775__auto__.push((arguments[i__5770__auto___33637]));

var G__33638 = (i__5770__auto___33637 + (1));
i__5770__auto___33637 = G__33638;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33425,ev,args){
var map__33426 = p__33425;
var map__33426__$1 = cljs.core.__destructure_map(map__33426);
var runtime = map__33426__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33426__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33427 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33430 = null;
var count__33431 = (0);
var i__33432 = (0);
while(true){
if((i__33432 < count__33431)){
var ext = chunk__33430.cljs$core$IIndexed$_nth$arity$2(null,i__33432);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33640 = seq__33427;
var G__33641 = chunk__33430;
var G__33642 = count__33431;
var G__33643 = (i__33432 + (1));
seq__33427 = G__33640;
chunk__33430 = G__33641;
count__33431 = G__33642;
i__33432 = G__33643;
continue;
} else {
var G__33644 = seq__33427;
var G__33645 = chunk__33430;
var G__33646 = count__33431;
var G__33647 = (i__33432 + (1));
seq__33427 = G__33644;
chunk__33430 = G__33645;
count__33431 = G__33646;
i__33432 = G__33647;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33427);
if(temp__5804__auto__){
var seq__33427__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33427__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33427__$1);
var G__33648 = cljs.core.chunk_rest(seq__33427__$1);
var G__33649 = c__5568__auto__;
var G__33650 = cljs.core.count(c__5568__auto__);
var G__33651 = (0);
seq__33427 = G__33648;
chunk__33430 = G__33649;
count__33431 = G__33650;
i__33432 = G__33651;
continue;
} else {
var ext = cljs.core.first(seq__33427__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33652 = cljs.core.next(seq__33427__$1);
var G__33653 = null;
var G__33654 = (0);
var G__33655 = (0);
seq__33427 = G__33652;
chunk__33430 = G__33653;
count__33431 = G__33654;
i__33432 = G__33655;
continue;
} else {
var G__33656 = cljs.core.next(seq__33427__$1);
var G__33657 = null;
var G__33658 = (0);
var G__33659 = (0);
seq__33427 = G__33656;
chunk__33430 = G__33657;
count__33431 = G__33658;
i__33432 = G__33659;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33422){
var G__33423 = cljs.core.first(seq33422);
var seq33422__$1 = cljs.core.next(seq33422);
var G__33424 = cljs.core.first(seq33422__$1);
var seq33422__$2 = cljs.core.next(seq33422__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33423,G__33424,seq33422__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33452,p__33453){
var map__33454 = p__33452;
var map__33454__$1 = cljs.core.__destructure_map(map__33454);
var runtime = map__33454__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33454__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33455 = p__33453;
var map__33455__$1 = cljs.core.__destructure_map(map__33455);
var msg = map__33455__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33455__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33457 = cljs.core.deref(state_ref);
var map__33457__$1 = cljs.core.__destructure_map(map__33457);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33457__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33457__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33462){
var map__33463 = p__33462;
var map__33463__$1 = cljs.core.__destructure_map(map__33463);
var runtime = map__33463__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33463__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33486,msg){
var map__33489 = p__33486;
var map__33489__$1 = cljs.core.__destructure_map(map__33489);
var runtime = map__33489__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33489__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33525,key,p__33526){
var map__33527 = p__33525;
var map__33527__$1 = cljs.core.__destructure_map(map__33527);
var state = map__33527__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33527__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33528 = p__33526;
var map__33528__$1 = cljs.core.__destructure_map(map__33528);
var spec = map__33528__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33528__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33554,key,spec){
var map__33555 = p__33554;
var map__33555__$1 = cljs.core.__destructure_map(map__33555);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33555__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33561_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33561_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33563_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33563_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33564_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33564_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33565_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33565_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33566_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33566_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33602,key){
var map__33607 = p__33602;
var map__33607__$1 = cljs.core.__destructure_map(map__33607);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33607__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33610,msg){
var map__33612 = p__33610;
var map__33612__$1 = cljs.core.__destructure_map(map__33612);
var runtime = map__33612__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33612__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33614,p__33615){
var map__33616 = p__33614;
var map__33616__$1 = cljs.core.__destructure_map(map__33616);
var runtime = map__33616__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33616__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33617 = p__33615;
var map__33617__$1 = cljs.core.__destructure_map(map__33617);
var msg = map__33617__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33617__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33617__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33619 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33621 = null;
var count__33622 = (0);
var i__33623 = (0);
while(true){
if((i__33623 < count__33622)){
var map__33628 = chunk__33621.cljs$core$IIndexed$_nth$arity$2(null,i__33623);
var map__33628__$1 = cljs.core.__destructure_map(map__33628);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33628__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33676 = seq__33619;
var G__33677 = chunk__33621;
var G__33678 = count__33622;
var G__33679 = (i__33623 + (1));
seq__33619 = G__33676;
chunk__33621 = G__33677;
count__33622 = G__33678;
i__33623 = G__33679;
continue;
} else {
var G__33680 = seq__33619;
var G__33681 = chunk__33621;
var G__33682 = count__33622;
var G__33683 = (i__33623 + (1));
seq__33619 = G__33680;
chunk__33621 = G__33681;
count__33622 = G__33682;
i__33623 = G__33683;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33619);
if(temp__5804__auto__){
var seq__33619__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33619__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33619__$1);
var G__33684 = cljs.core.chunk_rest(seq__33619__$1);
var G__33685 = c__5568__auto__;
var G__33686 = cljs.core.count(c__5568__auto__);
var G__33687 = (0);
seq__33619 = G__33684;
chunk__33621 = G__33685;
count__33622 = G__33686;
i__33623 = G__33687;
continue;
} else {
var map__33630 = cljs.core.first(seq__33619__$1);
var map__33630__$1 = cljs.core.__destructure_map(map__33630);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33630__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33689 = cljs.core.next(seq__33619__$1);
var G__33690 = null;
var G__33691 = (0);
var G__33692 = (0);
seq__33619 = G__33689;
chunk__33621 = G__33690;
count__33622 = G__33691;
i__33623 = G__33692;
continue;
} else {
var G__33695 = cljs.core.next(seq__33619__$1);
var G__33696 = null;
var G__33697 = (0);
var G__33698 = (0);
seq__33619 = G__33695;
chunk__33621 = G__33696;
count__33622 = G__33697;
i__33623 = G__33698;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
