goog.provide('hyperfiddle.electric.impl.gather');
hyperfiddle.electric.impl.gather.done_BANG_ = (function hyperfiddle$electric$impl$gather$done_BANG_(main,terminator){
if(((main[((6) | (0))] = ((main[((6) | (0))]) - (1))) === (0))){
return (terminator.cljs$core$IFn$_invoke$arity$0 ? terminator.cljs$core$IFn$_invoke$arity$0() : terminator.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.gather.cancel_BANG_ = (function hyperfiddle$electric$impl$gather$cancel_BANG_(main){
var temp__5808__auto__ = (main[((2) | (0))]);
if((temp__5808__auto__ == null)){
return null;
} else {
var item = temp__5808__auto__;
var item_41207__$1 = item;
while(true){
if((item_41207__$1 === main)){
} else {
var n_41208 = (item_41207__$1[((2) | (0))]);
(item_41207__$1[((1) | (0))] = null);

(item_41207__$1[((2) | (0))] = null);

var fexpr__41126_41209 = (item_41207__$1[((0) | (0))]);
(fexpr__41126_41209.cljs$core$IFn$_invoke$arity$0 ? fexpr__41126_41209.cljs$core$IFn$_invoke$arity$0() : fexpr__41126_41209.call(null));

var G__41210 = n_41208;
item_41207__$1 = G__41210;
continue;
}
break;
}

(main[((1) | (0))] = null);

(main[((2) | (0))] = null);

var fexpr__41130 = (main[((0) | (0))]);
return (fexpr__41130.cljs$core$IFn$_invoke$arity$0 ? fexpr__41130.cljs$core$IFn$_invoke$arity$0() : fexpr__41130.call(null));
}
});
hyperfiddle.electric.impl.gather.flush_BANG_ = (function hyperfiddle$electric$impl$gather$flush_BANG_(item){
var item__$1 = item;
while(true){
if((!((item__$1 == null)))){
var next = (function (){var a__41002__auto__ = item__$1;
var i__41003__auto__ = ((3) | (0));
var x__41004__auto__ = (a__41002__auto__[i__41003__auto__]);
(a__41002__auto__[i__41003__auto__] = null);

return x__41004__auto__;
})();
try{cljs.core.deref((item__$1[((0) | (0))]));
}catch (e41137){var __41211 = e41137;
}
var G__41212 = next;
item__$1 = G__41212;
continue;
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.gather.fail_BANG_ = (function hyperfiddle$electric$impl$gather$fail_BANG_(main,item,error){
hyperfiddle.electric.impl.gather.cancel_BANG_(main);

hyperfiddle.electric.impl.gather.flush_BANG_((function (){var a__41002__auto__ = main;
var i__41003__auto__ = ((3) | (0));
var x__41004__auto__ = (a__41002__auto__[i__41003__auto__]);
(a__41002__auto__[i__41003__auto__] = null);

return x__41004__auto__;
})());

hyperfiddle.electric.impl.gather.flush_BANG_(item);

throw error;
});
hyperfiddle.electric.impl.gather.sample_BANG_ = (function hyperfiddle$electric$impl$gather$sample_BANG_(main,rf,notifier){
var idle = (function (){var a__41002__auto__ = main;
var i__41003__auto__ = ((5) | (0));
var x__41004__auto__ = (a__41002__auto__[i__41003__auto__]);
(a__41002__auto__[i__41003__auto__] = false);

return x__41004__auto__;
})();
var head = (function (){var a__41002__auto__ = main;
var i__41003__auto__ = ((3) | (0));
var x__41004__auto__ = (a__41002__auto__[i__41003__auto__]);
(a__41002__auto__[i__41003__auto__] = null);

return x__41004__auto__;
})();
var item = (function (){var a__41002__auto__ = head;
var i__41003__auto__ = ((3) | (0));
var x__41004__auto__ = (a__41002__auto__[i__41003__auto__]);
(a__41002__auto__[i__41003__auto__] = null);

return x__41004__auto__;
})();
var r = (function (){try{return cljs.core.deref((head[((0) | (0))]));
}catch (e41147){var e = e41147;
return hyperfiddle.electric.impl.gather.fail_BANG_(main,item,e);
}})();
while(true){
if((item == null)){
if(cljs.core.truth_((main[((5) | (0))]))){
if(idle){
(notifier.cljs$core$IFn$_invoke$arity$0 ? notifier.cljs$core$IFn$_invoke$arity$0() : notifier.call(null));
} else {
}
} else {
(main[((5) | (0))] = idle);
}

return r;
} else {
var next = (function (){var a__41002__auto__ = item;
var i__41003__auto__ = ((3) | (0));
var x__41004__auto__ = (a__41002__auto__[i__41003__auto__]);
(a__41002__auto__[i__41003__auto__] = null);

return x__41004__auto__;
})();
var G__41214 = next;
var G__41215 = (function (){try{var G__41150 = r;
var G__41151 = cljs.core.deref((item[((0) | (0))]));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__41150,G__41151) : rf.call(null,G__41150,G__41151));
}catch (e41148){var e = e41148;
return hyperfiddle.electric.impl.gather.fail_BANG_(main,next,e);
}})();
item = G__41214;
r = G__41215;
continue;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.gather.It = (function (main,rf,notifier,terminator){
this.main = main;
this.rf = rf;
this.notifier = notifier;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.gather.It.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__41162 = (arguments.length - (1));
switch (G__41162) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.gather.It.prototype.apply = (function (self__,args41155){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args41155)));
}));

(hyperfiddle.electric.impl.gather.It.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var it = this;
return hyperfiddle.electric.impl.gather.cancel_BANG_(self__.main);
}));

(hyperfiddle.electric.impl.gather.It.prototype.cljs$core$IDeref$_deref$arity$1 = (function (it){
var self__ = this;
var it__$1 = this;
return hyperfiddle.electric.impl.gather.sample_BANG_(self__.main,self__.rf,self__.notifier);
}));

(hyperfiddle.electric.impl.gather.It.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"main","main",-477271134,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(hyperfiddle.electric.impl.gather.It.cljs$lang$type = true);

(hyperfiddle.electric.impl.gather.It.cljs$lang$ctorStr = "hyperfiddle.electric.impl.gather/It");

(hyperfiddle.electric.impl.gather.It.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.gather/It");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.gather/It.
 */
hyperfiddle.electric.impl.gather.__GT_It = (function hyperfiddle$electric$impl$gather$__GT_It(main,rf,notifier,terminator){
return (new hyperfiddle.electric.impl.gather.It(main,rf,notifier,terminator));
});

hyperfiddle.electric.impl.gather.transfer_BANG_ = (function hyperfiddle$electric$impl$gather$transfer_BANG_(it){
var main = it.main;
while(true){
if(cljs.core.truth_((main[((4) | (0))] = cljs.core.not((main[((4) | (0))]))))){
var temp__5806__auto___41220 = (main[((1) | (0))]);
if((temp__5806__auto___41220 == null)){
try{cljs.core.deref((main[((0) | (0))]));
}catch (e41186){var __41221 = e41186;
}} else {
var prev_41222 = temp__5806__auto___41220;
var item_41223 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((4) | (0)));
var idle_41224 = (function (){var a__41002__auto__ = main;
var i__41003__auto__ = ((5) | (0));
var x__41004__auto__ = (a__41002__auto__[i__41003__auto__]);
(a__41002__auto__[i__41003__auto__] = false);

return x__41004__auto__;
})();
(main[((6) | (0))] = ((main[((6) | (0))]) + (1)));

(item_41223[((1) | (0))] = prev_41222);

(prev_41222[((2) | (0))] = item_41223);

(main[((1) | (0))] = item_41223);

(item_41223[((2) | (0))] = main);

var n_41225 = ((function (item_41223,idle_41224,prev_41222,temp__5806__auto___41220,main){
return (function (){
if(((item_41223[((1) | (0))]) == null)){
try{return cljs.core.deref((item_41223[((0) | (0))]));
}catch (e41189){var _ = e41189;
return null;
}} else {
var temp__5806__auto____$1 = (function (){var a__41002__auto__ = main;
var i__41003__auto__ = ((3) | (0));
var x__41004__auto__ = (a__41002__auto__[i__41003__auto__]);
(a__41002__auto__[i__41003__auto__] = item_41223);

return x__41004__auto__;
})();
if((temp__5806__auto____$1 == null)){
if(cljs.core.truth_((main[((5) | (0))]))){
var fexpr__41190 = it.notifier;
return (fexpr__41190.cljs$core$IFn$_invoke$arity$0 ? fexpr__41190.cljs$core$IFn$_invoke$arity$0() : fexpr__41190.call(null));
} else {
return (main[((5) | (0))] = true);
}
} else {
var curr = temp__5806__auto____$1;
return (item_41223[((3) | (0))] = curr);
}
}
});})(item_41223,idle_41224,prev_41222,temp__5806__auto___41220,main))
;
var t_41226 = ((function (n_41225,item_41223,idle_41224,prev_41222,temp__5806__auto___41220,main){
return (function (){
var temp__5808__auto___41227 = (item_41223[((1) | (0))]);
if((temp__5808__auto___41227 == null)){
} else {
var prev_41231__$1 = temp__5808__auto___41227;
var next_41232 = (item_41223[((2) | (0))]);
(next_41232[((1) | (0))] = prev_41231__$1);

(prev_41231__$1[((2) | (0))] = next_41232);

(item_41223[((1) | (0))] = null);

(item_41223[((2) | (0))] = null);
}

return hyperfiddle.electric.impl.gather.done_BANG_(main,it.terminator);
});})(n_41225,item_41223,idle_41224,prev_41222,temp__5806__auto___41220,main))
;
(item_41223[((0) | (0))] = (function (){try{var fexpr__41196 = cljs.core.deref((main[((0) | (0))]));
return (fexpr__41196.cljs$core$IFn$_invoke$arity$2 ? fexpr__41196.cljs$core$IFn$_invoke$arity$2(n_41225,t_41226) : fexpr__41196.call(null,n_41225,t_41226));
}catch (e41195){var e = e41195;
return hyperfiddle.electric.impl.failer.run(e,n_41225,t_41226);
}})());

if(cljs.core.truth_((main[((5) | (0))]))){
if(idle_41224){
var fexpr__41199_41233 = it.notifier;
(fexpr__41199_41233.cljs$core$IFn$_invoke$arity$0 ? fexpr__41199_41233.cljs$core$IFn$_invoke$arity$0() : fexpr__41199_41233.call(null));
} else {
}
} else {
(main[((5) | (0))] = idle_41224);
}
}

continue;
} else {
return null;
}
break;
}
});
/**
 * 
 * Given a commutative function and a flow of flows, returns a flow concurrently running the flow with flows produced by
 * this flow and producing values produced by nested flows, reduced by the function if more than one can be transferred
 * simultaneously.
 */
hyperfiddle.electric.impl.gather.gather = (function hyperfiddle$electric$impl$gather$gather(rf,_GT__GT_x){
return (function (n,t){
var main = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((7) | (0)));
var it = hyperfiddle.electric.impl.gather.__GT_It(main,rf,n,t);
var G__41200_41234 = main;
(G__41200_41234[((1) | (0))] = main);

(G__41200_41234[((2) | (0))] = main);

(G__41200_41234[((4) | (0))] = true);

(G__41200_41234[((5) | (0))] = true);

(G__41200_41234[((6) | (0))] = (1));


(main[((0) | (0))] = (function (){var G__41201 = (function (){
return hyperfiddle.electric.impl.gather.transfer_BANG_(it);
});
var G__41202 = (function (){
return hyperfiddle.electric.impl.gather.done_BANG_(main,t);
});
return (_GT__GT_x.cljs$core$IFn$_invoke$arity$2 ? _GT__GT_x.cljs$core$IFn$_invoke$arity$2(G__41201,G__41202) : _GT__GT_x.call(null,G__41201,G__41202));
})());

hyperfiddle.electric.impl.gather.transfer_BANG_(it);

return it;
});
});

//# sourceMappingURL=hyperfiddle.electric.impl.gather.js.map
