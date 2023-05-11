goog.provide('hyperfiddle.electric');
(hyperfiddle.electric.Pending.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.Pending.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (other instanceof hyperfiddle.electric.Pending);
}));
(hyperfiddle.electric.Failure.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (((other instanceof hyperfiddle.electric.Failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.error,other.error)));
}));
(hyperfiddle.electric.FailureInfo.prototype.__proto__ = cljs.core.ExceptionInfo.prototype);
(hyperfiddle.electric.FailureInfo.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.FailureInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (((other instanceof hyperfiddle.electric.FailureInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.cause,other.cause)));
}));
/**
 * Takes a resolve map and a program, returns a booting function.
 *   The booting function takes
 *   * as first argument a function Any->Task[Unit] returned task writes the value on the wire.
 *   * as second argument a flow producing the values read on the wire.
 *   and returning a task that runs the local reactor.
 */
hyperfiddle.electric.eval = hyperfiddle.electric.impl.runtime.eval;
hyperfiddle.electric.hook = hyperfiddle.electric.impl.runtime.hook;
hyperfiddle.electric.bind = hyperfiddle.electric.impl.runtime.bind;
hyperfiddle.electric.with$ = hyperfiddle.electric.impl.runtime.with$;
hyperfiddle.electric.pair = (function hyperfiddle$electric$pair(c,s){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr46895_block_0 = (function hyperfiddle$electric$pair_$_cr46895_block_0(cr46895_state){
try{var cr46895_place_0 = missionary.core.dfv;
var cr46895_place_1 = (function (){var fexpr__46959 = cr46895_place_0;
return (fexpr__46959.cljs$core$IFn$_invoke$arity$0 ? fexpr__46959.cljs$core$IFn$_invoke$arity$0() : fexpr__46959.call(null));
})();
var cr46895_place_2 = missionary.core.dfv;
var cr46895_place_3 = (function (){var fexpr__46960 = cr46895_place_2;
return (fexpr__46960.cljs$core$IFn$_invoke$arity$0 ? fexpr__46960.cljs$core$IFn$_invoke$arity$0() : fexpr__46960.call(null));
})();
var cr46895_place_4 = missionary.core.join;
var cr46895_place_5 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr46895_place_6 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr46898_block_0 = (function (cr46898_state){
try{var cr46898_place_0 = cr46895_place_1;
(cr46898_state[(0)] = cr46898_block_1);

return missionary.core.park(cr46898_place_0);
}catch (e46965){var e46904 = e46965;
var cr46898_exception = e46904;
(cr46898_state[(0)] = null);

throw cr46898_exception;
}});
var cr46898_block_1 = (function (cr46898_state){
try{var cr46898_place_1 = missionary.core.unpark();
var cr46898_place_2 = cr46898_place_1;
var cr46898_place_3 = x;
var cr46898_place_4 = (function (){var G__46907 = cr46898_place_3;
var fexpr__46906 = cr46898_place_2;
var G__46968 = G__46907;
var fexpr__46967 = fexpr__46906;
return (fexpr__46967.cljs$core$IFn$_invoke$arity$1 ? fexpr__46967.cljs$core$IFn$_invoke$arity$1(G__46968) : fexpr__46967.call(null,G__46968));
})();
(cr46898_state[(0)] = null);

return cr46898_place_4;
}catch (e46966){var e46905 = e46966;
var cr46898_exception = e46905;
(cr46898_state[(0)] = null);

throw cr46898_exception;
}});
return cloroutine.impl.coroutine((function (){var G__46908 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__46908[(0)] = cr46898_block_0);

return G__46908;
})());
})(),missionary.core.sp_run);
});
var cr46895_place_7 = (function (_BANG_){
var G__46970_47093 = _BANG_;
var fexpr__46969_47094 = cr46895_place_3;
(fexpr__46969_47094.cljs$core$IFn$_invoke$arity$1 ? fexpr__46969_47094.cljs$core$IFn$_invoke$arity$1(G__46970_47093) : fexpr__46969_47094.call(null,G__46970_47093));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr46895_place_8 = s;
var cr46895_place_9 = cr46895_place_6;
var cr46895_place_10 = cr46895_place_7;
var cr46895_place_11 = (function (){var G__46972 = cr46895_place_9;
var G__46973 = cr46895_place_10;
var fexpr__46971 = cr46895_place_8;
return (fexpr__46971.cljs$core$IFn$_invoke$arity$2 ? fexpr__46971.cljs$core$IFn$_invoke$arity$2(G__46972,G__46973) : fexpr__46971.call(null,G__46972,G__46973));
})();
var cr46895_place_12 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr46912_block_0 = (function (cr46912_state){
try{var cr46912_place_0 = cr46895_place_3;
(cr46912_state[(0)] = cr46912_block_1);

return missionary.core.park(cr46912_place_0);
}catch (e46978){var e46918 = e46978;
var cr46912_exception = e46918;
(cr46912_state[(0)] = null);

throw cr46912_exception;
}});
var cr46912_block_1 = (function (cr46912_state){
try{var cr46912_place_1 = missionary.core.unpark();
var cr46912_place_2 = cr46912_place_1;
var cr46912_place_3 = x;
var cr46912_place_4 = (function (){var G__46921 = cr46912_place_3;
var fexpr__46920 = cr46912_place_2;
var G__46981 = G__46921;
var fexpr__46980 = fexpr__46920;
return (fexpr__46980.cljs$core$IFn$_invoke$arity$1 ? fexpr__46980.cljs$core$IFn$_invoke$arity$1(G__46981) : fexpr__46980.call(null,G__46981));
})();
(cr46912_state[(0)] = null);

return cr46912_place_4;
}catch (e46979){var e46919 = e46979;
var cr46912_exception = e46919;
(cr46912_state[(0)] = null);

throw cr46912_exception;
}});
return cloroutine.impl.coroutine((function (){var G__46922 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__46922[(0)] = cr46912_block_0);

return G__46922;
})());
})(),missionary.core.sp_run);
});
var cr46895_place_13 = (function (_BANG_){
var G__46983_47095 = _BANG_;
var fexpr__46982_47096 = cr46895_place_1;
(fexpr__46982_47096.cljs$core$IFn$_invoke$arity$1 ? fexpr__46982_47096.cljs$core$IFn$_invoke$arity$1(G__46983_47095) : fexpr__46982_47096.call(null,G__46983_47095));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr46895_place_14 = (function (p1__46894_SHARP_){
throw p1__46894_SHARP_;
});
var cr46895_place_15 = c;
var cr46895_place_16 = cr46895_place_12;
var cr46895_place_17 = cr46895_place_13;
var cr46895_place_18 = cr46895_place_14;
var cr46895_place_19 = (function (){var G__46985 = cr46895_place_16;
var G__46986 = cr46895_place_17;
var G__46987 = cr46895_place_18;
var fexpr__46984 = cr46895_place_15;
return (fexpr__46984.cljs$core$IFn$_invoke$arity$3 ? fexpr__46984.cljs$core$IFn$_invoke$arity$3(G__46985,G__46986,G__46987) : fexpr__46984.call(null,G__46985,G__46986,G__46987));
})();
var cr46895_place_20 = (function (){var G__46989 = cr46895_place_5;
var G__46990 = cr46895_place_11;
var G__46991 = cr46895_place_19;
var fexpr__46988 = cr46895_place_4;
return (fexpr__46988.cljs$core$IFn$_invoke$arity$3 ? fexpr__46988.cljs$core$IFn$_invoke$arity$3(G__46989,G__46990,G__46991) : fexpr__46988.call(null,G__46989,G__46990,G__46991));
})();
(cr46895_state[(0)] = cr46895_block_1);

return missionary.core.park(cr46895_place_20);
}catch (e46958){var cr46895_exception = e46958;
(cr46895_state[(0)] = null);

throw cr46895_exception;
}});
var cr46895_block_1 = (function hyperfiddle$electric$pair_$_cr46895_block_1(cr46895_state){
try{var cr46895_place_21 = missionary.core.unpark();
(cr46895_state[(0)] = null);

return cr46895_place_21;
}catch (e46992){var cr46895_exception = e46992;
(cr46895_state[(0)] = null);

throw cr46895_exception;
}});
return cloroutine.impl.coroutine((function (){var G__46993 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__46993[(0)] = cr46895_block_0);

return G__46993;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric.failure_QMARK_ = (function hyperfiddle$electric$failure_QMARK_(x){
return (x instanceof hyperfiddle.electric.Failure);
});
hyperfiddle.electric.task__GT_cp = (function hyperfiddle$electric$task__GT_cp(var_args){
var G__46996 = arguments.length;
switch (G__46996) {
case 1:
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$1 = (function (_BANG_x){
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2(_BANG_x,(new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending()))));
}));

(hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2 = (function (_BANG_x,pending){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,pending,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr46997_block_0 = (function hyperfiddle$electric$cr46997_block_0(cr46997_state){
try{var cr46997_place_0 = _BANG_x;
(cr46997_state[(0)] = cr46997_block_1);

return missionary.core.park(cr46997_place_0);
}catch (e47000){var cr46997_exception = e47000;
(cr46997_state[(0)] = null);

throw cr46997_exception;
}});
var cr46997_block_1 = (function hyperfiddle$electric$cr46997_block_1(cr46997_state){
try{var cr46997_place_1 = missionary.core.unpark();
(cr46997_state[(0)] = null);

return cr46997_place_1;
}catch (e47001){var cr46997_exception = e47001;
(cr46997_state[(0)] = null);

throw cr46997_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47002 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__47002[(0)] = cr46997_block_0);

return G__47002;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.task__GT_cp.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.Clock = (function (raf,callback,terminator){
this.raf = raf;
this.callback = callback;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.Clock.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__47004 = (arguments.length - (1));
switch (G__47004) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.Clock.prototype.apply = (function (self__,args47003){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47003)));
}));

(hyperfiddle.electric.Clock.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
if((self__.raf === (0))){
return (self__.callback = null);
} else {
window.cancelAnimationFrame(self__.raf);

return (self__.terminator.cljs$core$IFn$_invoke$arity$0 ? self__.terminator.cljs$core$IFn$_invoke$arity$0() : self__.terminator.call(null));
}
}));

(hyperfiddle.electric.Clock.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.callback == null)){
(self__.terminator.cljs$core$IFn$_invoke$arity$0 ? self__.terminator.cljs$core$IFn$_invoke$arity$0() : self__.terminator.call(null));
} else {
(self__.raf = window.requestAnimationFrame(self__.callback));
}

return new cljs.core.Keyword("hyperfiddle.electric","tick","hyperfiddle.electric/tick",-1268517293);
}));

(hyperfiddle.electric.Clock.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"raf","raf",345121375,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(hyperfiddle.electric.Clock.cljs$lang$type = true);

(hyperfiddle.electric.Clock.cljs$lang$ctorStr = "hyperfiddle.electric/Clock");

(hyperfiddle.electric.Clock.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric/Clock");
}));

/**
 * Positional factory function for hyperfiddle.electric/Clock.
 */
hyperfiddle.electric.__GT_Clock = (function hyperfiddle$electric$__GT_Clock(raf,callback,terminator){
return (new hyperfiddle.electric.Clock(raf,callback,terminator));
});

/**
 * lazy & efficient logical clock that schedules no work unless sampled
 */
hyperfiddle.electric._LT_clock = (function hyperfiddle$electric$_LT_clock(n,t){
var cancel = hyperfiddle.electric.__GT_Clock((0),null,t);
(cancel.callback = (function (_){
(cancel.raf = (0));

return (n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));
}));

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return cancel;
});
hyperfiddle.electric._get_system_time_ms = (function hyperfiddle$electric$_get_system_time_ms(_){
return Date.now();
});
hyperfiddle.electric._check_fn_arity_BANG_ = (function hyperfiddle$electric$_check_fn_arity_BANG_(name,expected,actual){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,actual)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["You called ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("hyperfiddle.electric","unnamed-efn","hyperfiddle.electric/unnamed-efn",1016396331)], 0));
}
})()),", a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),"-arg e/fn with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)," arguments."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null));
} else {
return null;
}
});
hyperfiddle.electric.watchable_QMARK_ = (function hyperfiddle$electric$watchable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
}
});
hyperfiddle.electric.checked_watch = (function hyperfiddle$electric$checked_watch(_BANG_x){
if(hyperfiddle.electric.watchable_QMARK_(_BANG_x)){
} else {
throw (new Error(["Assert failed: ","Provided argument is not Watchable.","\n","(watchable? !x)"].join('')));
}

return missionary.core.watch(_BANG_x);
});
hyperfiddle.electric._invalid_watch_usage_message = "Invalid e/watch (use from Electric code only, maybe you forgot a e/def?)";
hyperfiddle.electric.debounce_discreet = (function hyperfiddle$electric$debounce_discreet(var_args){
var G__47008 = arguments.length;
switch (G__47008) {
case 2:
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$2 = (function (delay,flow){
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3(delay,null,flow);
}));

(hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3 = (function (delay,init,flow){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,init,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47009_block_4 = (function hyperfiddle$electric$cr47009_block_4(cr47009_state){
try{var cr47009_place_2 = (cr47009_state[(2)]);
var cr47009_place_9 = cr47009_place_2;
var cr47009_place_10 = missionary.Cancelled;
var cr47009_place_11 = (cr47009_place_9 instanceof cr47009_place_10);
var cr47009_place_12 = null;
if(cr47009_place_11){
(cr47009_state[(0)] = cr47009_block_9);

(cr47009_state[(1)] = cr47009_place_12);

return cr47009_state;
} else {
(cr47009_state[(0)] = cr47009_block_5);

(cr47009_state[(1)] = cr47009_place_12);

return cr47009_state;
}
}catch (e47027){var cr47009_exception = e47027;
(cr47009_state[(0)] = cr47009_block_12);

(cr47009_state[(3)] = true);

(cr47009_state[(2)] = cr47009_exception);

return cr47009_state;
}});
var cr47009_block_11 = (function hyperfiddle$electric$cr47009_block_11(cr47009_state){
try{var cr47009_place_12 = (cr47009_state[(1)]);
(cr47009_state[(0)] = cr47009_block_12);

(cr47009_state[(1)] = null);

(cr47009_state[(2)] = cr47009_place_12);

return cr47009_state;
}catch (e47028){var cr47009_exception = e47028;
(cr47009_state[(0)] = cr47009_block_12);

(cr47009_state[(1)] = null);

(cr47009_state[(3)] = true);

(cr47009_state[(2)] = cr47009_exception);

return cr47009_state;
}});
var cr47009_block_7 = (function hyperfiddle$electric$cr47009_block_7(cr47009_state){
try{var cr47009_place_2 = (cr47009_state[(2)]);
var cr47009_place_16 = cr47009_place_2;
var cr47009_place_17 = (function(){throw cr47009_place_16})();
(cr47009_state[(0)] = null);

(cr47009_state[(2)] = null);

(cr47009_state[(3)] = null);

return null;
}catch (e47029){var cr47009_exception = e47029;
(cr47009_state[(0)] = cr47009_block_12);

(cr47009_state[(3)] = true);

(cr47009_state[(2)] = cr47009_exception);

return cr47009_state;
}});
var cr47009_block_3 = (function hyperfiddle$electric$cr47009_block_3(cr47009_state){
try{var cr47009_place_8 = missionary.core.unpark();
(cr47009_state[(0)] = cr47009_block_12);

(cr47009_state[(2)] = cr47009_place_8);

return cr47009_state;
}catch (e47030){var cr47009_exception = e47030;
(cr47009_state[(0)] = cr47009_block_4);

(cr47009_state[(2)] = cr47009_exception);

return cr47009_state;
}});
var cr47009_block_12 = (function hyperfiddle$electric$cr47009_block_12(cr47009_state){
try{var cr47009_place_2 = (cr47009_state[(2)]);
var cr47009_place_3 = (cr47009_state[(3)]);
var cr47009_place_22 = (cljs.core.truth_(cr47009_place_3)?(function(){throw cr47009_place_2})():cr47009_place_2);
(cr47009_state[(0)] = null);

(cr47009_state[(2)] = null);

(cr47009_state[(3)] = null);

return cr47009_place_22;
}catch (e47031){var cr47009_exception = e47031;
(cr47009_state[(0)] = null);

(cr47009_state[(2)] = null);

(cr47009_state[(3)] = null);

throw cr47009_exception;
}});
var cr47009_block_9 = (function hyperfiddle$electric$cr47009_block_9(cr47009_state){
try{var cr47009_place_2 = (cr47009_state[(2)]);
var cr47009_place_18 = cr47009_place_2;
var cr47009_place_19 = (1);
var cr47009_place_20 = missionary.core.none;
(cr47009_state[(0)] = cr47009_block_10);

return missionary.core.fork(cr47009_place_19,cr47009_place_20);
}catch (e47032){var cr47009_exception = e47032;
(cr47009_state[(0)] = cr47009_block_12);

(cr47009_state[(1)] = null);

(cr47009_state[(3)] = true);

(cr47009_state[(2)] = cr47009_exception);

return cr47009_state;
}});
var cr47009_block_10 = (function hyperfiddle$electric$cr47009_block_10(cr47009_state){
try{var cr47009_place_21 = missionary.core.unpark();
(cr47009_state[(0)] = cr47009_block_11);

(cr47009_state[(1)] = cr47009_place_21);

return cr47009_state;
}catch (e47033){var cr47009_exception = e47033;
(cr47009_state[(0)] = cr47009_block_12);

(cr47009_state[(1)] = null);

(cr47009_state[(3)] = true);

(cr47009_state[(2)] = cr47009_exception);

return cr47009_state;
}});
var cr47009_block_0 = (function hyperfiddle$electric$cr47009_block_0(cr47009_state){
try{var cr47009_place_0 = flow;
(cr47009_state[(0)] = cr47009_block_1);

return missionary.core.switch$(cr47009_place_0);
}catch (e47034){var cr47009_exception = e47034;
(cr47009_state[(0)] = null);

throw cr47009_exception;
}});
var cr47009_block_1 = (function hyperfiddle$electric$cr47009_block_1(cr47009_state){
try{var cr47009_place_1 = missionary.core.unpark();
var cr47009_place_2 = null;
var cr47009_place_3 = false;
(cr47009_state[(0)] = cr47009_block_2);

(cr47009_state[(1)] = cr47009_place_1);

(cr47009_state[(2)] = cr47009_place_2);

(cr47009_state[(3)] = cr47009_place_3);

return cr47009_state;
}catch (e47035){var cr47009_exception = e47035;
(cr47009_state[(0)] = null);

throw cr47009_exception;
}});
var cr47009_block_6 = (function hyperfiddle$electric$cr47009_block_6(cr47009_state){
try{var cr47009_place_15 = null;
(cr47009_state[(0)] = cr47009_block_8);

(cr47009_state[(4)] = cr47009_place_15);

return cr47009_state;
}catch (e47036){var cr47009_exception = e47036;
(cr47009_state[(0)] = cr47009_block_12);

(cr47009_state[(4)] = null);

(cr47009_state[(1)] = null);

(cr47009_state[(3)] = true);

(cr47009_state[(2)] = cr47009_exception);

return cr47009_state;
}});
var cr47009_block_2 = (function hyperfiddle$electric$cr47009_block_2(cr47009_state){
try{var cr47009_place_1 = (cr47009_state[(1)]);
var cr47009_place_4 = missionary.core.sleep;
var cr47009_place_5 = delay;
var cr47009_place_6 = cr47009_place_1;
var cr47009_place_7 = (function (){var G__47039 = cr47009_place_5;
var G__47040 = cr47009_place_6;
var fexpr__47038 = cr47009_place_4;
return (fexpr__47038.cljs$core$IFn$_invoke$arity$2 ? fexpr__47038.cljs$core$IFn$_invoke$arity$2(G__47039,G__47040) : fexpr__47038.call(null,G__47039,G__47040));
})();
(cr47009_state[(0)] = cr47009_block_3);

(cr47009_state[(1)] = null);

return missionary.core.park(cr47009_place_7);
}catch (e47037){var cr47009_exception = e47037;
(cr47009_state[(0)] = cr47009_block_4);

(cr47009_state[(1)] = null);

(cr47009_state[(2)] = cr47009_exception);

return cr47009_state;
}});
var cr47009_block_5 = (function hyperfiddle$electric$cr47009_block_5(cr47009_state){
try{var cr47009_place_13 = new cljs.core.Keyword(null,"else","else",-1508377146);
var cr47009_place_14 = null;
if(cljs.core.truth_(cr47009_place_13)){
(cr47009_state[(0)] = cr47009_block_7);

(cr47009_state[(1)] = null);

return cr47009_state;
} else {
(cr47009_state[(0)] = cr47009_block_6);

(cr47009_state[(4)] = cr47009_place_14);

return cr47009_state;
}
}catch (e47041){var cr47009_exception = e47041;
(cr47009_state[(0)] = cr47009_block_12);

(cr47009_state[(1)] = null);

(cr47009_state[(3)] = true);

(cr47009_state[(2)] = cr47009_exception);

return cr47009_state;
}});
var cr47009_block_8 = (function hyperfiddle$electric$cr47009_block_8(cr47009_state){
try{var cr47009_place_14 = (cr47009_state[(4)]);
(cr47009_state[(0)] = cr47009_block_11);

(cr47009_state[(4)] = null);

(cr47009_state[(1)] = cr47009_place_14);

return cr47009_state;
}catch (e47042){var cr47009_exception = e47042;
(cr47009_state[(0)] = cr47009_block_12);

(cr47009_state[(4)] = null);

(cr47009_state[(1)] = null);

(cr47009_state[(3)] = true);

(cr47009_state[(2)] = cr47009_exception);

return cr47009_state;
}});
return cloroutine.impl.coroutine((function (){var G__47043 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__47043[(0)] = cr47009_block_0);

return G__47043;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.debounce_discreet.cljs$lang$maxFixedArity = 3);

hyperfiddle.electric.throttle = (function hyperfiddle$electric$throttle(dur,_GT_in){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47044_block_5 = (function hyperfiddle$electric$throttle_$_cr47044_block_5(cr47044_state){
try{var cr47044_place_19 = missionary.core.unpark();
var cr47044_place_20 = (1);
var cr47044_place_21 = missionary.core.none;
(cr47044_state[(0)] = cr47044_block_6);

return missionary.core.fork(cr47044_place_20,cr47044_place_21);
}catch (e47065){var cr47044_exception = e47065;
(cr47044_state[(0)] = null);

(cr47044_state[(2)] = null);

throw cr47044_exception;
}});
var cr47044_block_7 = (function hyperfiddle$electric$throttle_$_cr47044_block_7(cr47044_state){
try{var cr47044_place_12 = (cr47044_state[(1)]);
var cr47044_place_23 = "No matching clause: ";
var cr47044_place_24 = cr47044_place_12;
var cr47044_place_25 = [cr47044_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr47044_place_24)].join('');
var cr47044_place_26 = (new Error(cr47044_place_25));
var cr47044_place_27 = (function(){throw cr47044_place_26})();
(cr47044_state[(0)] = null);

(cr47044_state[(1)] = null);

return null;
}catch (e47066){var cr47044_exception = e47066;
(cr47044_state[(0)] = null);

(cr47044_state[(1)] = null);

throw cr47044_exception;
}});
var cr47044_block_0 = (function hyperfiddle$electric$throttle_$_cr47044_block_0(cr47044_state){
try{var cr47044_place_0 = (1);
var cr47044_place_1 = missionary.core.relieve;
var cr47044_place_2 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr47044_place_3 = _GT_in;
var cr47044_place_4 = (function (){var G__47069 = cr47044_place_2;
var G__47070 = cr47044_place_3;
var fexpr__47068 = cr47044_place_1;
return (fexpr__47068.cljs$core$IFn$_invoke$arity$2 ? fexpr__47068.cljs$core$IFn$_invoke$arity$2(G__47069,G__47070) : fexpr__47068.call(null,G__47069,G__47070));
})();
(cr47044_state[(0)] = cr47044_block_1);

return missionary.core.fork(cr47044_place_0,cr47044_place_4);
}catch (e47067){var cr47044_exception = e47067;
(cr47044_state[(0)] = null);

throw cr47044_exception;
}});
var cr47044_block_2 = (function hyperfiddle$electric$throttle_$_cr47044_block_2(cr47044_state){
try{var cr47044_place_12 = missionary.core.unpark();
var cr47044_place_13 = cr47044_place_12;
var cr47044_place_14 = null;
var G__47072 = cr47044_place_13;
switch (G__47072) {
case (0):
(cr47044_state[(0)] = cr47044_block_3);

(cr47044_state[(2)] = cr47044_place_14);

return cr47044_state;

break;
case (1):
(cr47044_state[(0)] = cr47044_block_4);

(cr47044_state[(1)] = null);

(cr47044_state[(2)] = cr47044_place_14);

return cr47044_state;

break;
default:
(cr47044_state[(0)] = cr47044_block_7);

(cr47044_state[(1)] = null);

(cr47044_state[(1)] = cr47044_place_12);

return cr47044_state;

}
}catch (e47071){var cr47044_exception = e47071;
(cr47044_state[(0)] = null);

(cr47044_state[(1)] = null);

throw cr47044_exception;
}});
var cr47044_block_3 = (function hyperfiddle$electric$throttle_$_cr47044_block_3(cr47044_state){
try{var cr47044_place_5 = (cr47044_state[(1)]);
var cr47044_place_15 = cr47044_place_5;
(cr47044_state[(0)] = cr47044_block_8);

(cr47044_state[(1)] = null);

(cr47044_state[(2)] = cr47044_place_15);

return cr47044_state;
}catch (e47073){var cr47044_exception = e47073;
(cr47044_state[(0)] = null);

(cr47044_state[(1)] = null);

(cr47044_state[(2)] = null);

throw cr47044_exception;
}});
var cr47044_block_6 = (function hyperfiddle$electric$throttle_$_cr47044_block_6(cr47044_state){
try{var cr47044_place_22 = missionary.core.unpark();
(cr47044_state[(0)] = cr47044_block_8);

(cr47044_state[(2)] = cr47044_place_22);

return cr47044_state;
}catch (e47074){var cr47044_exception = e47074;
(cr47044_state[(0)] = null);

(cr47044_state[(2)] = null);

throw cr47044_exception;
}});
var cr47044_block_1 = (function hyperfiddle$electric$throttle_$_cr47044_block_1(cr47044_state){
try{var cr47044_place_5 = missionary.core.unpark();
var cr47044_place_6 = (1);
var cr47044_place_7 = missionary.core.seed;
var cr47044_place_8 = cljs.core.range;
var cr47044_place_9 = (2);
var cr47044_place_10 = (function (){var G__47077 = cr47044_place_9;
var fexpr__47076 = cr47044_place_8;
return (fexpr__47076.cljs$core$IFn$_invoke$arity$1 ? fexpr__47076.cljs$core$IFn$_invoke$arity$1(G__47077) : fexpr__47076.call(null,G__47077));
})();
var cr47044_place_11 = (function (){var G__47079 = cr47044_place_10;
var fexpr__47078 = cr47044_place_7;
return (fexpr__47078.cljs$core$IFn$_invoke$arity$1 ? fexpr__47078.cljs$core$IFn$_invoke$arity$1(G__47079) : fexpr__47078.call(null,G__47079));
})();
(cr47044_state[(0)] = cr47044_block_2);

(cr47044_state[(1)] = cr47044_place_5);

return missionary.core.fork(cr47044_place_6,cr47044_place_11);
}catch (e47075){var cr47044_exception = e47075;
(cr47044_state[(0)] = null);

throw cr47044_exception;
}});
var cr47044_block_8 = (function hyperfiddle$electric$throttle_$_cr47044_block_8(cr47044_state){
try{var cr47044_place_14 = (cr47044_state[(2)]);
(cr47044_state[(0)] = null);

(cr47044_state[(2)] = null);

return cr47044_place_14;
}catch (e47080){var cr47044_exception = e47080;
(cr47044_state[(0)] = null);

(cr47044_state[(2)] = null);

throw cr47044_exception;
}});
var cr47044_block_4 = (function hyperfiddle$electric$throttle_$_cr47044_block_4(cr47044_state){
try{var cr47044_place_16 = missionary.core.sleep;
var cr47044_place_17 = dur;
var cr47044_place_18 = (function (){var G__47083 = cr47044_place_17;
var fexpr__47082 = cr47044_place_16;
return (fexpr__47082.cljs$core$IFn$_invoke$arity$1 ? fexpr__47082.cljs$core$IFn$_invoke$arity$1(G__47083) : fexpr__47082.call(null,G__47083));
})();
(cr47044_state[(0)] = cr47044_block_5);

return missionary.core.park(cr47044_place_18);
}catch (e47081){var cr47044_exception = e47081;
(cr47044_state[(0)] = null);

(cr47044_state[(2)] = null);

throw cr47044_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47084 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__47084[(0)] = cr47044_block_0);

return G__47084;
})());
})(),missionary.core.ap_run);
});
/**
 * Bound to the HTTP request of the page in which the current Electric program is running.
 */
hyperfiddle.electric._STAR_http_request_STAR_ = null;

//# sourceMappingURL=hyperfiddle.electric.js.map
