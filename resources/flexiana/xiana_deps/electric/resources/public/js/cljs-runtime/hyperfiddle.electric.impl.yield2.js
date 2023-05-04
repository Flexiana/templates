goog.provide('hyperfiddle.electric.impl.yield2');

hyperfiddle.electric.impl.yield2.input = ((0) | (0));

hyperfiddle.electric.impl.yield2.recover = ((1) | (0));

hyperfiddle.electric.impl.yield2.children = ((2) | (0));

hyperfiddle.electric.impl.yield2.last_in = ((3) | (0));

hyperfiddle.electric.impl.yield2.last_out = ((4) | (0));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.yield2.Yield = (function (checker,notifier,terminator,state_){
this.checker = checker;
this.notifier = notifier;
this.terminator = terminator;
this.state_ = state_;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.Yield.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__43535 = (arguments.length - (1));
switch (G__43535) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.Yield.prototype.apply = (function (self__,args43534){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args43534)));
}));

(hyperfiddle.electric.impl.yield2.Yield.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return (hyperfiddle.electric.impl.yield2.cancel.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.yield2.cancel.cljs$core$IFn$_invoke$arity$1(this$) : hyperfiddle.electric.impl.yield2.cancel.call(null,this$));
}));

(hyperfiddle.electric.impl.yield2.Yield.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (hyperfiddle.electric.impl.yield2.transfer.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.yield2.transfer.cljs$core$IFn$_invoke$arity$1(this$__$1) : hyperfiddle.electric.impl.yield2.transfer.call(null,this$__$1));
}));

(hyperfiddle.electric.impl.yield2.Yield.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"checker","checker",2053644407,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"state-","state-",-416998234,null)], null);
}));

(hyperfiddle.electric.impl.yield2.Yield.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.Yield.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/Yield");

(hyperfiddle.electric.impl.yield2.Yield.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield2/Yield");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/Yield.
 */
hyperfiddle.electric.impl.yield2.__GT_Yield = (function hyperfiddle$electric$impl$yield2$__GT_Yield(checker,notifier,terminator,state_){
return (new hyperfiddle.electric.impl.yield2.Yield(checker,notifier,terminator,state_));
});

hyperfiddle.electric.impl.yield2.iterator = ((0) | (0));

hyperfiddle.electric.impl.yield2.notified_QMARK_ = ((1) | (0));

hyperfiddle.electric.impl.yield2.on_notify = ((2) | (0));
hyperfiddle.electric.impl.yield2.input_notified = (function hyperfiddle$electric$impl$yield2$input_notified(Y){
if(cljs.core.truth_((function (){var or__5045__auto__ = hyperfiddle.electric.impl.array_fields.getset(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input),hyperfiddle.electric.impl.yield2.notified_QMARK_,true);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__43537 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((G__43537 == null)){
return null;
} else {
return hyperfiddle.electric.impl.array_fields.get(G__43537,hyperfiddle.electric.impl.yield2.notified_QMARK_);
}
}
})())){
return null;
} else {
var fexpr__43538 = Y.notifier;
return (fexpr__43538.cljs$core$IFn$_invoke$arity$0 ? fexpr__43538.cljs$core$IFn$_invoke$arity$0() : fexpr__43538.call(null));
}
});
hyperfiddle.electric.impl.yield2.recover_notified = (function hyperfiddle$electric$impl$yield2$recover_notified(Y){
if(cljs.core.truth_((function (){var or__5045__auto__ = hyperfiddle.electric.impl.array_fields.getset(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover),hyperfiddle.electric.impl.yield2.notified_QMARK_,true);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return hyperfiddle.electric.impl.array_fields.get(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input),hyperfiddle.electric.impl.yield2.notified_QMARK_);
}
})())){
return null;
} else {
var fexpr__43541 = Y.notifier;
return (fexpr__43541.cljs$core$IFn$_invoke$arity$0 ? fexpr__43541.cljs$core$IFn$_invoke$arity$0() : fexpr__43541.call(null));
}
});
hyperfiddle.electric.impl.yield2.terminated = (function hyperfiddle$electric$impl$yield2$terminated(Y){
if((hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(Y.state_,hyperfiddle.electric.impl.yield2.children,cljs.core.dec) === (0))){
var fexpr__43542 = Y.terminator;
return (fexpr__43542.cljs$core$IFn$_invoke$arity$0 ? fexpr__43542.cljs$core$IFn$_invoke$arity$0() : fexpr__43542.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.yield2.swallow = (function hyperfiddle$electric$impl$yield2$swallow(o){
try{return cljs.core.deref(hyperfiddle.electric.impl.array_fields.get(o,hyperfiddle.electric.impl.yield2.iterator));
}catch (e43543){var _ = e43543;
return null;
}});
hyperfiddle.electric.impl.yield2.trash = (function hyperfiddle$electric$impl$yield2$trash(o){
var arr43545_43615 = o;
(arr43545_43615[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
return hyperfiddle.electric.impl.yield2.swallow(o);
})));

var fexpr__43546_43616 = hyperfiddle.electric.impl.array_fields.get(o,hyperfiddle.electric.impl.yield2.iterator);
(fexpr__43546_43616.cljs$core$IFn$_invoke$arity$0 ? fexpr__43546_43616.cljs$core$IFn$_invoke$arity$0() : fexpr__43546_43616.call(null));

if(cljs.core.truth_(hyperfiddle.electric.impl.array_fields.getset(o,hyperfiddle.electric.impl.yield2.notified_QMARK_,false))){
return hyperfiddle.electric.impl.yield2.swallow(o);
} else {
return null;
}
});
hyperfiddle.electric.impl.yield2.cancel = (function hyperfiddle$electric$impl$yield2$cancel(Y){
var fexpr__43547_43617 = hyperfiddle.electric.impl.array_fields.get(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input),hyperfiddle.electric.impl.yield2.iterator);
(fexpr__43547_43617.cljs$core$IFn$_invoke$arity$0 ? fexpr__43547_43617.cljs$core$IFn$_invoke$arity$0() : fexpr__43547_43617.call(null));

var temp__5808__auto__ = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((temp__5808__auto__ == null)){
return null;
} else {
var rec = temp__5808__auto__;
return hyperfiddle.electric.impl.yield2.trash(rec);
}
});
hyperfiddle.electric.impl.yield2.create_recover = (function hyperfiddle$electric$impl$yield2$create_recover(Y,_GT_r){
var temp__5808__auto___43620 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((temp__5808__auto___43620 == null)){
} else {
var rec_43621 = temp__5808__auto___43620;
hyperfiddle.electric.impl.yield2.trash(rec_43621);
}

hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(Y.state_,hyperfiddle.electric.impl.yield2.children,cljs.core.inc);

var me = (function (){var arr43548 = Y.state_;
return (arr43548[hyperfiddle.electric.impl.yield2.recover] = cljs.core.identity(cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3))));
})();
var arr43549 = me;
(arr43549[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
var arr43551 = me;
return (arr43551[hyperfiddle.electric.impl.yield2.notified_QMARK_] = cljs.core.identity(true));
})));

return (arr43549[hyperfiddle.electric.impl.yield2.iterator] = cljs.core.identity((function (){var G__43552 = (function (){
var fexpr__43554 = hyperfiddle.electric.impl.array_fields.get(me,hyperfiddle.electric.impl.yield2.on_notify);
return (fexpr__43554.cljs$core$IFn$_invoke$arity$0 ? fexpr__43554.cljs$core$IFn$_invoke$arity$0() : fexpr__43554.call(null));
});
var G__43553 = (function (){
return hyperfiddle.electric.impl.yield2.terminated(Y);
});
return (_GT_r.cljs$core$IFn$_invoke$arity$2 ? _GT_r.cljs$core$IFn$_invoke$arity$2(G__43552,G__43553) : _GT_r.call(null,G__43552,G__43553));
})()));
});
hyperfiddle.electric.impl.yield2.transfer_loop = (function hyperfiddle$electric$impl$yield2$transfer_loop(o){
while(true){
var arr43555_43623 = o;
(arr43555_43623[hyperfiddle.electric.impl.yield2.notified_QMARK_] = cljs.core.identity(false));

var v = cljs.core.deref(hyperfiddle.electric.impl.array_fields.get(o,hyperfiddle.electric.impl.yield2.iterator));
if(cljs.core.truth_(hyperfiddle.electric.impl.array_fields.get(o,hyperfiddle.electric.impl.yield2.notified_QMARK_))){
var G__43625 = o;
o = G__43625;
continue;
} else {
return v;
}
break;
}
});
hyperfiddle.electric.impl.yield2.transfer_recover = (function hyperfiddle$electric$impl$yield2$transfer_recover(Y){
var arr43556 = Y.state_;
return (arr43556[hyperfiddle.electric.impl.yield2.last_out] = cljs.core.identity(hyperfiddle.electric.impl.yield2.transfer_loop(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover))));
});
hyperfiddle.electric.impl.yield2.transfer_input = (function hyperfiddle$electric$impl$yield2$transfer_input(Y){
var in$ = hyperfiddle.electric.impl.yield2.transfer_loop(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$,hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.last_in))){
if(cljs.core.truth_((function (){var G__43559 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((G__43559 == null)){
return null;
} else {
return hyperfiddle.electric.impl.array_fields.get(G__43559,hyperfiddle.electric.impl.yield2.notified_QMARK_);
}
})())){
return hyperfiddle.electric.impl.yield2.transfer_recover(Y);
} else {
return hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.last_out);
}
} else {
var temp__5806__auto__ = (function (){var fexpr__43560 = Y.checker;
return (fexpr__43560.cljs$core$IFn$_invoke$arity$1 ? fexpr__43560.cljs$core$IFn$_invoke$arity$1(in$) : fexpr__43560.call(null,in$));
})();
if((temp__5806__auto__ == null)){
var arr43561_43631 = Y.state_;
(arr43561_43631[hyperfiddle.electric.impl.yield2.last_in] = cljs.core.identity(new cljs.core.Keyword("hyperfiddle.electric.impl.yield2","none","hyperfiddle.electric.impl.yield2/none",934748982)));

var temp__5808__auto___43632 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((temp__5808__auto___43632 == null)){
} else {
var rec_43633 = temp__5808__auto___43632;
hyperfiddle.electric.impl.yield2.trash(rec_43633);
}

return in$;
} else {
var _GT_recover = temp__5806__auto__;
var out = (function (){
hyperfiddle.electric.impl.yield2.create_recover(Y,_GT_recover);

return hyperfiddle.electric.impl.yield2.transfer_recover(Y);
})()
;
var arr43564_43635 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
(arr43564_43635[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
return hyperfiddle.electric.impl.yield2.recover_notified(Y);
})));

var arr43565 = Y.state_;
(arr43565[hyperfiddle.electric.impl.yield2.last_in] = cljs.core.identity(in$));

return (arr43565[hyperfiddle.electric.impl.yield2.last_out] = cljs.core.identity(out));
}
}
});
hyperfiddle.electric.impl.yield2.transfer = (function hyperfiddle$electric$impl$yield2$transfer(Y){
try{hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(Y.state_,hyperfiddle.electric.impl.yield2.children,cljs.core.inc);

if(cljs.core.truth_(hyperfiddle.electric.impl.array_fields.get(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input),hyperfiddle.electric.impl.yield2.notified_QMARK_))){
return hyperfiddle.electric.impl.yield2.transfer_input(Y);
} else {
if(cljs.core.truth_(hyperfiddle.electric.impl.array_fields.get(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover),hyperfiddle.electric.impl.yield2.notified_QMARK_))){
return hyperfiddle.electric.impl.yield2.transfer_recover(Y);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("You cannot transfer a value if I haven't notified you",cljs.core.PersistentArrayMap.EMPTY);

}
}
}catch (e43568){var e = e43568;
hyperfiddle.electric.impl.yield2.trash(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input));

var temp__5808__auto___43637 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((temp__5808__auto___43637 == null)){
} else {
var rec_43638 = temp__5808__auto___43637;
hyperfiddle.electric.impl.yield2.trash(rec_43638);
}

throw e;
}finally {hyperfiddle.electric.impl.yield2.terminated(Y);
}});
hyperfiddle.electric.impl.yield2.yield$ = (function hyperfiddle$electric$impl$yield2$yield(checker,_GT_input){
return (function (n,t){
var Y = hyperfiddle.electric.impl.yield2.__GT_Yield(checker,n,t,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5)));
var me = (function (){var arr43576 = Y.state_;
(arr43576[hyperfiddle.electric.impl.yield2.children] = cljs.core.identity((1)));

(arr43576[hyperfiddle.electric.impl.yield2.last_in] = cljs.core.identity(new cljs.core.Keyword("hyperfiddle.electric.impl.yield2","none","hyperfiddle.electric.impl.yield2/none",934748982)));

return (arr43576[hyperfiddle.electric.impl.yield2.input] = cljs.core.identity(cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3))));
})();
var arr43578_43641 = me;
(arr43578_43641[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
return hyperfiddle.electric.impl.yield2.input_notified(Y);
})));

(arr43578_43641[hyperfiddle.electric.impl.yield2.iterator] = cljs.core.identity((function (){var G__43579 = (function (){
var fexpr__43581 = hyperfiddle.electric.impl.array_fields.get(me,hyperfiddle.electric.impl.yield2.on_notify);
return (fexpr__43581.cljs$core$IFn$_invoke$arity$0 ? fexpr__43581.cljs$core$IFn$_invoke$arity$0() : fexpr__43581.call(null));
});
var G__43580 = (function (){
return hyperfiddle.electric.impl.yield2.terminated(Y);
});
return (_GT_input.cljs$core$IFn$_invoke$arity$2 ? _GT_input.cljs$core$IFn$_invoke$arity$2(G__43579,G__43580) : _GT_input.call(null,G__43579,G__43580));
})()));

return Y;
});
});

//# sourceMappingURL=hyperfiddle.electric.impl.yield2.js.map
