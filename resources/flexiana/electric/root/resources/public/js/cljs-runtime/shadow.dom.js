goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36660 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36660(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36661 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36661(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35499 = coll;
var G__35500 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35499,G__35500) : shadow.dom.lazy_native_coll_seq.call(null,G__35499,G__35500));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35549 = arguments.length;
switch (G__35549) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35558 = arguments.length;
switch (G__35558) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35571 = arguments.length;
switch (G__35571) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35585 = arguments.length;
switch (G__35585) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35595 = arguments.length;
switch (G__35595) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35613 = arguments.length;
switch (G__35613) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35638){if((e35638 instanceof Object)){
var e = e35638;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35638;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35653 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35654 = null;
var count__35656 = (0);
var i__35657 = (0);
while(true){
if((i__35657 < count__35656)){
var el = chunk__35654.cljs$core$IIndexed$_nth$arity$2(null,i__35657);
var handler_36672__$1 = ((function (seq__35653,chunk__35654,count__35656,i__35657,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35653,chunk__35654,count__35656,i__35657,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36672__$1);


var G__36673 = seq__35653;
var G__36674 = chunk__35654;
var G__36675 = count__35656;
var G__36676 = (i__35657 + (1));
seq__35653 = G__36673;
chunk__35654 = G__36674;
count__35656 = G__36675;
i__35657 = G__36676;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35653);
if(temp__5804__auto__){
var seq__35653__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35653__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35653__$1);
var G__36677 = cljs.core.chunk_rest(seq__35653__$1);
var G__36678 = c__5568__auto__;
var G__36679 = cljs.core.count(c__5568__auto__);
var G__36680 = (0);
seq__35653 = G__36677;
chunk__35654 = G__36678;
count__35656 = G__36679;
i__35657 = G__36680;
continue;
} else {
var el = cljs.core.first(seq__35653__$1);
var handler_36681__$1 = ((function (seq__35653,chunk__35654,count__35656,i__35657,el,seq__35653__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35653,chunk__35654,count__35656,i__35657,el,seq__35653__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36681__$1);


var G__36682 = cljs.core.next(seq__35653__$1);
var G__36683 = null;
var G__36684 = (0);
var G__36685 = (0);
seq__35653 = G__36682;
chunk__35654 = G__36683;
count__35656 = G__36684;
i__35657 = G__36685;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35678 = arguments.length;
switch (G__35678) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35699 = cljs.core.seq(events);
var chunk__35700 = null;
var count__35701 = (0);
var i__35702 = (0);
while(true){
if((i__35702 < count__35701)){
var vec__35720 = chunk__35700.cljs$core$IIndexed$_nth$arity$2(null,i__35702);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35720,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35720,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36687 = seq__35699;
var G__36688 = chunk__35700;
var G__36689 = count__35701;
var G__36690 = (i__35702 + (1));
seq__35699 = G__36687;
chunk__35700 = G__36688;
count__35701 = G__36689;
i__35702 = G__36690;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35699);
if(temp__5804__auto__){
var seq__35699__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35699__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35699__$1);
var G__36691 = cljs.core.chunk_rest(seq__35699__$1);
var G__36692 = c__5568__auto__;
var G__36693 = cljs.core.count(c__5568__auto__);
var G__36694 = (0);
seq__35699 = G__36691;
chunk__35700 = G__36692;
count__35701 = G__36693;
i__35702 = G__36694;
continue;
} else {
var vec__35726 = cljs.core.first(seq__35699__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35726,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35726,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36695 = cljs.core.next(seq__35699__$1);
var G__36696 = null;
var G__36697 = (0);
var G__36698 = (0);
seq__35699 = G__36695;
chunk__35700 = G__36696;
count__35701 = G__36697;
i__35702 = G__36698;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35731 = cljs.core.seq(styles);
var chunk__35732 = null;
var count__35733 = (0);
var i__35734 = (0);
while(true){
if((i__35734 < count__35733)){
var vec__35754 = chunk__35732.cljs$core$IIndexed$_nth$arity$2(null,i__35734);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35754,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35754,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36699 = seq__35731;
var G__36700 = chunk__35732;
var G__36701 = count__35733;
var G__36702 = (i__35734 + (1));
seq__35731 = G__36699;
chunk__35732 = G__36700;
count__35733 = G__36701;
i__35734 = G__36702;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35731);
if(temp__5804__auto__){
var seq__35731__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35731__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35731__$1);
var G__36703 = cljs.core.chunk_rest(seq__35731__$1);
var G__36704 = c__5568__auto__;
var G__36705 = cljs.core.count(c__5568__auto__);
var G__36706 = (0);
seq__35731 = G__36703;
chunk__35732 = G__36704;
count__35733 = G__36705;
i__35734 = G__36706;
continue;
} else {
var vec__35761 = cljs.core.first(seq__35731__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36707 = cljs.core.next(seq__35731__$1);
var G__36708 = null;
var G__36709 = (0);
var G__36710 = (0);
seq__35731 = G__36707;
chunk__35732 = G__36708;
count__35733 = G__36709;
i__35734 = G__36710;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35778_36711 = key;
var G__35778_36712__$1 = (((G__35778_36711 instanceof cljs.core.Keyword))?G__35778_36711.fqn:null);
switch (G__35778_36712__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36714 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_36714,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_36714,"aria-");
}
})())){
el.setAttribute(ks_36714,value);
} else {
(el[ks_36714] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35799){
var map__35801 = p__35799;
var map__35801__$1 = cljs.core.__destructure_map(map__35801);
var props = map__35801__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35801__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35809 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35809,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35809,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35809,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35820 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35820,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35820;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35839 = arguments.length;
switch (G__35839) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35854){
var vec__35857 = p__35854;
var seq__35858 = cljs.core.seq(vec__35857);
var first__35859 = cljs.core.first(seq__35858);
var seq__35858__$1 = cljs.core.next(seq__35858);
var nn = first__35859;
var first__35859__$1 = cljs.core.first(seq__35858__$1);
var seq__35858__$2 = cljs.core.next(seq__35858__$1);
var np = first__35859__$1;
var nc = seq__35858__$2;
var node = vec__35857;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35863 = nn;
var G__35864 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35863,G__35864) : create_fn.call(null,G__35863,G__35864));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35866 = nn;
var G__35867 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35866,G__35867) : create_fn.call(null,G__35866,G__35867));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35869 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35869,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35869,(1),null);
var seq__35872_36722 = cljs.core.seq(node_children);
var chunk__35873_36723 = null;
var count__35874_36724 = (0);
var i__35875_36725 = (0);
while(true){
if((i__35875_36725 < count__35874_36724)){
var child_struct_36726 = chunk__35873_36723.cljs$core$IIndexed$_nth$arity$2(null,i__35875_36725);
var children_36727 = shadow.dom.dom_node(child_struct_36726);
if(cljs.core.seq_QMARK_(children_36727)){
var seq__35909_36728 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36727));
var chunk__35911_36729 = null;
var count__35912_36730 = (0);
var i__35913_36731 = (0);
while(true){
if((i__35913_36731 < count__35912_36730)){
var child_36732 = chunk__35911_36729.cljs$core$IIndexed$_nth$arity$2(null,i__35913_36731);
if(cljs.core.truth_(child_36732)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36732);


var G__36733 = seq__35909_36728;
var G__36734 = chunk__35911_36729;
var G__36735 = count__35912_36730;
var G__36736 = (i__35913_36731 + (1));
seq__35909_36728 = G__36733;
chunk__35911_36729 = G__36734;
count__35912_36730 = G__36735;
i__35913_36731 = G__36736;
continue;
} else {
var G__36737 = seq__35909_36728;
var G__36738 = chunk__35911_36729;
var G__36739 = count__35912_36730;
var G__36740 = (i__35913_36731 + (1));
seq__35909_36728 = G__36737;
chunk__35911_36729 = G__36738;
count__35912_36730 = G__36739;
i__35913_36731 = G__36740;
continue;
}
} else {
var temp__5804__auto___36741 = cljs.core.seq(seq__35909_36728);
if(temp__5804__auto___36741){
var seq__35909_36742__$1 = temp__5804__auto___36741;
if(cljs.core.chunked_seq_QMARK_(seq__35909_36742__$1)){
var c__5568__auto___36743 = cljs.core.chunk_first(seq__35909_36742__$1);
var G__36744 = cljs.core.chunk_rest(seq__35909_36742__$1);
var G__36745 = c__5568__auto___36743;
var G__36746 = cljs.core.count(c__5568__auto___36743);
var G__36747 = (0);
seq__35909_36728 = G__36744;
chunk__35911_36729 = G__36745;
count__35912_36730 = G__36746;
i__35913_36731 = G__36747;
continue;
} else {
var child_36748 = cljs.core.first(seq__35909_36742__$1);
if(cljs.core.truth_(child_36748)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36748);


var G__36749 = cljs.core.next(seq__35909_36742__$1);
var G__36750 = null;
var G__36751 = (0);
var G__36752 = (0);
seq__35909_36728 = G__36749;
chunk__35911_36729 = G__36750;
count__35912_36730 = G__36751;
i__35913_36731 = G__36752;
continue;
} else {
var G__36753 = cljs.core.next(seq__35909_36742__$1);
var G__36754 = null;
var G__36755 = (0);
var G__36756 = (0);
seq__35909_36728 = G__36753;
chunk__35911_36729 = G__36754;
count__35912_36730 = G__36755;
i__35913_36731 = G__36756;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36727);
}


var G__36757 = seq__35872_36722;
var G__36758 = chunk__35873_36723;
var G__36759 = count__35874_36724;
var G__36760 = (i__35875_36725 + (1));
seq__35872_36722 = G__36757;
chunk__35873_36723 = G__36758;
count__35874_36724 = G__36759;
i__35875_36725 = G__36760;
continue;
} else {
var temp__5804__auto___36761 = cljs.core.seq(seq__35872_36722);
if(temp__5804__auto___36761){
var seq__35872_36762__$1 = temp__5804__auto___36761;
if(cljs.core.chunked_seq_QMARK_(seq__35872_36762__$1)){
var c__5568__auto___36763 = cljs.core.chunk_first(seq__35872_36762__$1);
var G__36764 = cljs.core.chunk_rest(seq__35872_36762__$1);
var G__36765 = c__5568__auto___36763;
var G__36766 = cljs.core.count(c__5568__auto___36763);
var G__36767 = (0);
seq__35872_36722 = G__36764;
chunk__35873_36723 = G__36765;
count__35874_36724 = G__36766;
i__35875_36725 = G__36767;
continue;
} else {
var child_struct_36768 = cljs.core.first(seq__35872_36762__$1);
var children_36769 = shadow.dom.dom_node(child_struct_36768);
if(cljs.core.seq_QMARK_(children_36769)){
var seq__35920_36770 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36769));
var chunk__35922_36771 = null;
var count__35923_36772 = (0);
var i__35924_36773 = (0);
while(true){
if((i__35924_36773 < count__35923_36772)){
var child_36774 = chunk__35922_36771.cljs$core$IIndexed$_nth$arity$2(null,i__35924_36773);
if(cljs.core.truth_(child_36774)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36774);


var G__36775 = seq__35920_36770;
var G__36776 = chunk__35922_36771;
var G__36777 = count__35923_36772;
var G__36778 = (i__35924_36773 + (1));
seq__35920_36770 = G__36775;
chunk__35922_36771 = G__36776;
count__35923_36772 = G__36777;
i__35924_36773 = G__36778;
continue;
} else {
var G__36779 = seq__35920_36770;
var G__36780 = chunk__35922_36771;
var G__36781 = count__35923_36772;
var G__36782 = (i__35924_36773 + (1));
seq__35920_36770 = G__36779;
chunk__35922_36771 = G__36780;
count__35923_36772 = G__36781;
i__35924_36773 = G__36782;
continue;
}
} else {
var temp__5804__auto___36783__$1 = cljs.core.seq(seq__35920_36770);
if(temp__5804__auto___36783__$1){
var seq__35920_36784__$1 = temp__5804__auto___36783__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35920_36784__$1)){
var c__5568__auto___36785 = cljs.core.chunk_first(seq__35920_36784__$1);
var G__36786 = cljs.core.chunk_rest(seq__35920_36784__$1);
var G__36787 = c__5568__auto___36785;
var G__36788 = cljs.core.count(c__5568__auto___36785);
var G__36789 = (0);
seq__35920_36770 = G__36786;
chunk__35922_36771 = G__36787;
count__35923_36772 = G__36788;
i__35924_36773 = G__36789;
continue;
} else {
var child_36790 = cljs.core.first(seq__35920_36784__$1);
if(cljs.core.truth_(child_36790)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36790);


var G__36791 = cljs.core.next(seq__35920_36784__$1);
var G__36792 = null;
var G__36793 = (0);
var G__36794 = (0);
seq__35920_36770 = G__36791;
chunk__35922_36771 = G__36792;
count__35923_36772 = G__36793;
i__35924_36773 = G__36794;
continue;
} else {
var G__36795 = cljs.core.next(seq__35920_36784__$1);
var G__36796 = null;
var G__36797 = (0);
var G__36798 = (0);
seq__35920_36770 = G__36795;
chunk__35922_36771 = G__36796;
count__35923_36772 = G__36797;
i__35924_36773 = G__36798;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36769);
}


var G__36799 = cljs.core.next(seq__35872_36762__$1);
var G__36800 = null;
var G__36801 = (0);
var G__36802 = (0);
seq__35872_36722 = G__36799;
chunk__35873_36723 = G__36800;
count__35874_36724 = G__36801;
i__35875_36725 = G__36802;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35965 = cljs.core.seq(node);
var chunk__35966 = null;
var count__35967 = (0);
var i__35968 = (0);
while(true){
if((i__35968 < count__35967)){
var n = chunk__35966.cljs$core$IIndexed$_nth$arity$2(null,i__35968);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36803 = seq__35965;
var G__36804 = chunk__35966;
var G__36805 = count__35967;
var G__36806 = (i__35968 + (1));
seq__35965 = G__36803;
chunk__35966 = G__36804;
count__35967 = G__36805;
i__35968 = G__36806;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35965);
if(temp__5804__auto__){
var seq__35965__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35965__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35965__$1);
var G__36807 = cljs.core.chunk_rest(seq__35965__$1);
var G__36808 = c__5568__auto__;
var G__36809 = cljs.core.count(c__5568__auto__);
var G__36810 = (0);
seq__35965 = G__36807;
chunk__35966 = G__36808;
count__35967 = G__36809;
i__35968 = G__36810;
continue;
} else {
var n = cljs.core.first(seq__35965__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36811 = cljs.core.next(seq__35965__$1);
var G__36812 = null;
var G__36813 = (0);
var G__36814 = (0);
seq__35965 = G__36811;
chunk__35966 = G__36812;
count__35967 = G__36813;
i__35968 = G__36814;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35976 = arguments.length;
switch (G__35976) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35985 = arguments.length;
switch (G__35985) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__36004 = arguments.length;
switch (G__36004) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36818 = arguments.length;
var i__5770__auto___36819 = (0);
while(true){
if((i__5770__auto___36819 < len__5769__auto___36818)){
args__5775__auto__.push((arguments[i__5770__auto___36819]));

var G__36820 = (i__5770__auto___36819 + (1));
i__5770__auto___36819 = G__36820;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__36022_36821 = cljs.core.seq(nodes);
var chunk__36023_36822 = null;
var count__36024_36823 = (0);
var i__36025_36824 = (0);
while(true){
if((i__36025_36824 < count__36024_36823)){
var node_36825 = chunk__36023_36822.cljs$core$IIndexed$_nth$arity$2(null,i__36025_36824);
fragment.appendChild(shadow.dom._to_dom(node_36825));


var G__36826 = seq__36022_36821;
var G__36827 = chunk__36023_36822;
var G__36828 = count__36024_36823;
var G__36829 = (i__36025_36824 + (1));
seq__36022_36821 = G__36826;
chunk__36023_36822 = G__36827;
count__36024_36823 = G__36828;
i__36025_36824 = G__36829;
continue;
} else {
var temp__5804__auto___36830 = cljs.core.seq(seq__36022_36821);
if(temp__5804__auto___36830){
var seq__36022_36831__$1 = temp__5804__auto___36830;
if(cljs.core.chunked_seq_QMARK_(seq__36022_36831__$1)){
var c__5568__auto___36832 = cljs.core.chunk_first(seq__36022_36831__$1);
var G__36833 = cljs.core.chunk_rest(seq__36022_36831__$1);
var G__36834 = c__5568__auto___36832;
var G__36835 = cljs.core.count(c__5568__auto___36832);
var G__36836 = (0);
seq__36022_36821 = G__36833;
chunk__36023_36822 = G__36834;
count__36024_36823 = G__36835;
i__36025_36824 = G__36836;
continue;
} else {
var node_36837 = cljs.core.first(seq__36022_36831__$1);
fragment.appendChild(shadow.dom._to_dom(node_36837));


var G__36838 = cljs.core.next(seq__36022_36831__$1);
var G__36839 = null;
var G__36840 = (0);
var G__36841 = (0);
seq__36022_36821 = G__36838;
chunk__36023_36822 = G__36839;
count__36024_36823 = G__36840;
i__36025_36824 = G__36841;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36016){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36016));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36035_36842 = cljs.core.seq(scripts);
var chunk__36037_36843 = null;
var count__36038_36844 = (0);
var i__36039_36845 = (0);
while(true){
if((i__36039_36845 < count__36038_36844)){
var vec__36051_36846 = chunk__36037_36843.cljs$core$IIndexed$_nth$arity$2(null,i__36039_36845);
var script_tag_36847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36051_36846,(0),null);
var script_body_36848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36051_36846,(1),null);
eval(script_body_36848);


var G__36849 = seq__36035_36842;
var G__36850 = chunk__36037_36843;
var G__36851 = count__36038_36844;
var G__36852 = (i__36039_36845 + (1));
seq__36035_36842 = G__36849;
chunk__36037_36843 = G__36850;
count__36038_36844 = G__36851;
i__36039_36845 = G__36852;
continue;
} else {
var temp__5804__auto___36853 = cljs.core.seq(seq__36035_36842);
if(temp__5804__auto___36853){
var seq__36035_36854__$1 = temp__5804__auto___36853;
if(cljs.core.chunked_seq_QMARK_(seq__36035_36854__$1)){
var c__5568__auto___36855 = cljs.core.chunk_first(seq__36035_36854__$1);
var G__36856 = cljs.core.chunk_rest(seq__36035_36854__$1);
var G__36857 = c__5568__auto___36855;
var G__36858 = cljs.core.count(c__5568__auto___36855);
var G__36859 = (0);
seq__36035_36842 = G__36856;
chunk__36037_36843 = G__36857;
count__36038_36844 = G__36858;
i__36039_36845 = G__36859;
continue;
} else {
var vec__36057_36860 = cljs.core.first(seq__36035_36854__$1);
var script_tag_36861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36057_36860,(0),null);
var script_body_36862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36057_36860,(1),null);
eval(script_body_36862);


var G__36863 = cljs.core.next(seq__36035_36854__$1);
var G__36864 = null;
var G__36865 = (0);
var G__36866 = (0);
seq__36035_36842 = G__36863;
chunk__36037_36843 = G__36864;
count__36038_36844 = G__36865;
i__36039_36845 = G__36866;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36060){
var vec__36062 = p__36060;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36062,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36062,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__36082 = arguments.length;
switch (G__36082) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__36097 = cljs.core.seq(style_keys);
var chunk__36098 = null;
var count__36099 = (0);
var i__36100 = (0);
while(true){
if((i__36100 < count__36099)){
var it = chunk__36098.cljs$core$IIndexed$_nth$arity$2(null,i__36100);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36886 = seq__36097;
var G__36887 = chunk__36098;
var G__36888 = count__36099;
var G__36889 = (i__36100 + (1));
seq__36097 = G__36886;
chunk__36098 = G__36887;
count__36099 = G__36888;
i__36100 = G__36889;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36097);
if(temp__5804__auto__){
var seq__36097__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36097__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36097__$1);
var G__36890 = cljs.core.chunk_rest(seq__36097__$1);
var G__36891 = c__5568__auto__;
var G__36892 = cljs.core.count(c__5568__auto__);
var G__36893 = (0);
seq__36097 = G__36890;
chunk__36098 = G__36891;
count__36099 = G__36892;
i__36100 = G__36893;
continue;
} else {
var it = cljs.core.first(seq__36097__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36894 = cljs.core.next(seq__36097__$1);
var G__36895 = null;
var G__36896 = (0);
var G__36897 = (0);
seq__36097 = G__36894;
chunk__36098 = G__36895;
count__36099 = G__36896;
i__36100 = G__36897;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36111,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36116 = k36111;
var G__36116__$1 = (((G__36116 instanceof cljs.core.Keyword))?G__36116.fqn:null);
switch (G__36116__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36111,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36117){
var vec__36118 = p__36117;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36118,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36118,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36110){
var self__ = this;
var G__36110__$1 = this;
return (new cljs.core.RecordIter((0),G__36110__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36112,other36113){
var self__ = this;
var this36112__$1 = this;
return (((!((other36113 == null)))) && ((((this36112__$1.constructor === other36113.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36112__$1.x,other36113.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36112__$1.y,other36113.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36112__$1.__extmap,other36113.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36111){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36134 = k36111;
var G__36134__$1 = (((G__36134 instanceof cljs.core.Keyword))?G__36134.fqn:null);
switch (G__36134__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36111);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36110){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36135 = cljs.core.keyword_identical_QMARK_;
var expr__36136 = k__5352__auto__;
if(cljs.core.truth_((pred__36135.cljs$core$IFn$_invoke$arity$2 ? pred__36135.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36136) : pred__36135.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36136)))){
return (new shadow.dom.Coordinate(G__36110,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36135.cljs$core$IFn$_invoke$arity$2 ? pred__36135.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36136) : pred__36135.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36136)))){
return (new shadow.dom.Coordinate(self__.x,G__36110,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36110),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36110){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36110,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36115){
var extmap__5385__auto__ = (function (){var G__36176 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36115,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36115)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36176);
} else {
return G__36176;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36115),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36115),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36219,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36254 = k36219;
var G__36254__$1 = (((G__36254 instanceof cljs.core.Keyword))?G__36254.fqn:null);
switch (G__36254__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36219,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36269){
var vec__36270 = p__36269;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36270,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36270,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36218){
var self__ = this;
var G__36218__$1 = this;
return (new cljs.core.RecordIter((0),G__36218__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36220,other36221){
var self__ = this;
var this36220__$1 = this;
return (((!((other36221 == null)))) && ((((this36220__$1.constructor === other36221.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36220__$1.w,other36221.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36220__$1.h,other36221.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36220__$1.__extmap,other36221.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36219){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36291 = k36219;
var G__36291__$1 = (((G__36291 instanceof cljs.core.Keyword))?G__36291.fqn:null);
switch (G__36291__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36219);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36218){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36293 = cljs.core.keyword_identical_QMARK_;
var expr__36294 = k__5352__auto__;
if(cljs.core.truth_((pred__36293.cljs$core$IFn$_invoke$arity$2 ? pred__36293.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36294) : pred__36293.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36294)))){
return (new shadow.dom.Size(G__36218,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36293.cljs$core$IFn$_invoke$arity$2 ? pred__36293.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36294) : pred__36293.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36294)))){
return (new shadow.dom.Size(self__.w,G__36218,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36218),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36218){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36218,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36237){
var extmap__5385__auto__ = (function (){var G__36307 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36237,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36237)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36307);
} else {
return G__36307;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36237),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36237),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__36913 = (i + (1));
var G__36914 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36913;
ret = G__36914;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36339){
var vec__36340 = p__36339;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36340,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36340,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36344 = arguments.length;
switch (G__36344) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36918 = ps;
var G__36919 = (i + (1));
el__$1 = G__36918;
i = G__36919;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__36354 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36354,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36354,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36354,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36357_36928 = cljs.core.seq(props);
var chunk__36358_36929 = null;
var count__36359_36930 = (0);
var i__36360_36931 = (0);
while(true){
if((i__36360_36931 < count__36359_36930)){
var vec__36369_36932 = chunk__36358_36929.cljs$core$IIndexed$_nth$arity$2(null,i__36360_36931);
var k_36933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36369_36932,(0),null);
var v_36934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36369_36932,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_36933);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36933),v_36934);


var G__36935 = seq__36357_36928;
var G__36936 = chunk__36358_36929;
var G__36937 = count__36359_36930;
var G__36938 = (i__36360_36931 + (1));
seq__36357_36928 = G__36935;
chunk__36358_36929 = G__36936;
count__36359_36930 = G__36937;
i__36360_36931 = G__36938;
continue;
} else {
var temp__5804__auto___36939 = cljs.core.seq(seq__36357_36928);
if(temp__5804__auto___36939){
var seq__36357_36940__$1 = temp__5804__auto___36939;
if(cljs.core.chunked_seq_QMARK_(seq__36357_36940__$1)){
var c__5568__auto___36941 = cljs.core.chunk_first(seq__36357_36940__$1);
var G__36942 = cljs.core.chunk_rest(seq__36357_36940__$1);
var G__36943 = c__5568__auto___36941;
var G__36944 = cljs.core.count(c__5568__auto___36941);
var G__36945 = (0);
seq__36357_36928 = G__36942;
chunk__36358_36929 = G__36943;
count__36359_36930 = G__36944;
i__36360_36931 = G__36945;
continue;
} else {
var vec__36374_36946 = cljs.core.first(seq__36357_36940__$1);
var k_36947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36374_36946,(0),null);
var v_36948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36374_36946,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_36947);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36947),v_36948);


var G__36951 = cljs.core.next(seq__36357_36940__$1);
var G__36952 = null;
var G__36953 = (0);
var G__36954 = (0);
seq__36357_36928 = G__36951;
chunk__36358_36929 = G__36952;
count__36359_36930 = G__36953;
i__36360_36931 = G__36954;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__36386 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36386,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36386,(1),null);
var seq__36389_36955 = cljs.core.seq(node_children);
var chunk__36391_36956 = null;
var count__36392_36957 = (0);
var i__36393_36958 = (0);
while(true){
if((i__36393_36958 < count__36392_36957)){
var child_struct_36960 = chunk__36391_36956.cljs$core$IIndexed$_nth$arity$2(null,i__36393_36958);
if((!((child_struct_36960 == null)))){
if(typeof child_struct_36960 === 'string'){
var text_36961 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36961),child_struct_36960].join(''));
} else {
var children_36962 = shadow.dom.svg_node(child_struct_36960);
if(cljs.core.seq_QMARK_(children_36962)){
var seq__36525_36963 = cljs.core.seq(children_36962);
var chunk__36527_36964 = null;
var count__36528_36965 = (0);
var i__36529_36966 = (0);
while(true){
if((i__36529_36966 < count__36528_36965)){
var child_36967 = chunk__36527_36964.cljs$core$IIndexed$_nth$arity$2(null,i__36529_36966);
if(cljs.core.truth_(child_36967)){
node.appendChild(child_36967);


var G__36968 = seq__36525_36963;
var G__36969 = chunk__36527_36964;
var G__36970 = count__36528_36965;
var G__36971 = (i__36529_36966 + (1));
seq__36525_36963 = G__36968;
chunk__36527_36964 = G__36969;
count__36528_36965 = G__36970;
i__36529_36966 = G__36971;
continue;
} else {
var G__36972 = seq__36525_36963;
var G__36973 = chunk__36527_36964;
var G__36974 = count__36528_36965;
var G__36975 = (i__36529_36966 + (1));
seq__36525_36963 = G__36972;
chunk__36527_36964 = G__36973;
count__36528_36965 = G__36974;
i__36529_36966 = G__36975;
continue;
}
} else {
var temp__5804__auto___36976 = cljs.core.seq(seq__36525_36963);
if(temp__5804__auto___36976){
var seq__36525_36977__$1 = temp__5804__auto___36976;
if(cljs.core.chunked_seq_QMARK_(seq__36525_36977__$1)){
var c__5568__auto___36978 = cljs.core.chunk_first(seq__36525_36977__$1);
var G__36979 = cljs.core.chunk_rest(seq__36525_36977__$1);
var G__36980 = c__5568__auto___36978;
var G__36981 = cljs.core.count(c__5568__auto___36978);
var G__36982 = (0);
seq__36525_36963 = G__36979;
chunk__36527_36964 = G__36980;
count__36528_36965 = G__36981;
i__36529_36966 = G__36982;
continue;
} else {
var child_36983 = cljs.core.first(seq__36525_36977__$1);
if(cljs.core.truth_(child_36983)){
node.appendChild(child_36983);


var G__36985 = cljs.core.next(seq__36525_36977__$1);
var G__36986 = null;
var G__36987 = (0);
var G__36988 = (0);
seq__36525_36963 = G__36985;
chunk__36527_36964 = G__36986;
count__36528_36965 = G__36987;
i__36529_36966 = G__36988;
continue;
} else {
var G__36989 = cljs.core.next(seq__36525_36977__$1);
var G__36990 = null;
var G__36991 = (0);
var G__36992 = (0);
seq__36525_36963 = G__36989;
chunk__36527_36964 = G__36990;
count__36528_36965 = G__36991;
i__36529_36966 = G__36992;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36962);
}
}


var G__36993 = seq__36389_36955;
var G__36994 = chunk__36391_36956;
var G__36995 = count__36392_36957;
var G__36996 = (i__36393_36958 + (1));
seq__36389_36955 = G__36993;
chunk__36391_36956 = G__36994;
count__36392_36957 = G__36995;
i__36393_36958 = G__36996;
continue;
} else {
var G__36998 = seq__36389_36955;
var G__36999 = chunk__36391_36956;
var G__37000 = count__36392_36957;
var G__37001 = (i__36393_36958 + (1));
seq__36389_36955 = G__36998;
chunk__36391_36956 = G__36999;
count__36392_36957 = G__37000;
i__36393_36958 = G__37001;
continue;
}
} else {
var temp__5804__auto___37002 = cljs.core.seq(seq__36389_36955);
if(temp__5804__auto___37002){
var seq__36389_37003__$1 = temp__5804__auto___37002;
if(cljs.core.chunked_seq_QMARK_(seq__36389_37003__$1)){
var c__5568__auto___37004 = cljs.core.chunk_first(seq__36389_37003__$1);
var G__37005 = cljs.core.chunk_rest(seq__36389_37003__$1);
var G__37006 = c__5568__auto___37004;
var G__37007 = cljs.core.count(c__5568__auto___37004);
var G__37008 = (0);
seq__36389_36955 = G__37005;
chunk__36391_36956 = G__37006;
count__36392_36957 = G__37007;
i__36393_36958 = G__37008;
continue;
} else {
var child_struct_37009 = cljs.core.first(seq__36389_37003__$1);
if((!((child_struct_37009 == null)))){
if(typeof child_struct_37009 === 'string'){
var text_37010 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37010),child_struct_37009].join(''));
} else {
var children_37011 = shadow.dom.svg_node(child_struct_37009);
if(cljs.core.seq_QMARK_(children_37011)){
var seq__36531_37012 = cljs.core.seq(children_37011);
var chunk__36533_37013 = null;
var count__36534_37014 = (0);
var i__36535_37015 = (0);
while(true){
if((i__36535_37015 < count__36534_37014)){
var child_37017 = chunk__36533_37013.cljs$core$IIndexed$_nth$arity$2(null,i__36535_37015);
if(cljs.core.truth_(child_37017)){
node.appendChild(child_37017);


var G__37019 = seq__36531_37012;
var G__37020 = chunk__36533_37013;
var G__37021 = count__36534_37014;
var G__37022 = (i__36535_37015 + (1));
seq__36531_37012 = G__37019;
chunk__36533_37013 = G__37020;
count__36534_37014 = G__37021;
i__36535_37015 = G__37022;
continue;
} else {
var G__37023 = seq__36531_37012;
var G__37024 = chunk__36533_37013;
var G__37025 = count__36534_37014;
var G__37026 = (i__36535_37015 + (1));
seq__36531_37012 = G__37023;
chunk__36533_37013 = G__37024;
count__36534_37014 = G__37025;
i__36535_37015 = G__37026;
continue;
}
} else {
var temp__5804__auto___37027__$1 = cljs.core.seq(seq__36531_37012);
if(temp__5804__auto___37027__$1){
var seq__36531_37028__$1 = temp__5804__auto___37027__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36531_37028__$1)){
var c__5568__auto___37029 = cljs.core.chunk_first(seq__36531_37028__$1);
var G__37030 = cljs.core.chunk_rest(seq__36531_37028__$1);
var G__37031 = c__5568__auto___37029;
var G__37032 = cljs.core.count(c__5568__auto___37029);
var G__37033 = (0);
seq__36531_37012 = G__37030;
chunk__36533_37013 = G__37031;
count__36534_37014 = G__37032;
i__36535_37015 = G__37033;
continue;
} else {
var child_37034 = cljs.core.first(seq__36531_37028__$1);
if(cljs.core.truth_(child_37034)){
node.appendChild(child_37034);


var G__37035 = cljs.core.next(seq__36531_37028__$1);
var G__37036 = null;
var G__37037 = (0);
var G__37038 = (0);
seq__36531_37012 = G__37035;
chunk__36533_37013 = G__37036;
count__36534_37014 = G__37037;
i__36535_37015 = G__37038;
continue;
} else {
var G__37039 = cljs.core.next(seq__36531_37028__$1);
var G__37040 = null;
var G__37041 = (0);
var G__37042 = (0);
seq__36531_37012 = G__37039;
chunk__36533_37013 = G__37040;
count__36534_37014 = G__37041;
i__36535_37015 = G__37042;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37011);
}
}


var G__37043 = cljs.core.next(seq__36389_37003__$1);
var G__37044 = null;
var G__37045 = (0);
var G__37046 = (0);
seq__36389_36955 = G__37043;
chunk__36391_36956 = G__37044;
count__36392_36957 = G__37045;
i__36393_36958 = G__37046;
continue;
} else {
var G__37047 = cljs.core.next(seq__36389_37003__$1);
var G__37048 = null;
var G__37049 = (0);
var G__37050 = (0);
seq__36389_36955 = G__37047;
chunk__36391_36956 = G__37048;
count__36392_36957 = G__37049;
i__36393_36958 = G__37050;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37051 = arguments.length;
var i__5770__auto___37052 = (0);
while(true){
if((i__5770__auto___37052 < len__5769__auto___37051)){
args__5775__auto__.push((arguments[i__5770__auto___37052]));

var G__37053 = (i__5770__auto___37052 + (1));
i__5770__auto___37052 = G__37053;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36628){
var G__36629 = cljs.core.first(seq36628);
var seq36628__$1 = cljs.core.next(seq36628);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36629,seq36628__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36635 = arguments.length;
switch (G__36635) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__33105__auto___37062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = (function (state_36641){
var state_val_36642 = (state_36641[(1)]);
if((state_val_36642 === (1))){
var state_36641__$1 = state_36641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36641__$1,(2),once_or_cleanup);
} else {
if((state_val_36642 === (2))){
var inst_36638 = (state_36641[(2)]);
var inst_36639 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36641__$1 = (function (){var statearr_36647 = state_36641;
(statearr_36647[(7)] = inst_36638);

return statearr_36647;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36641__$1,inst_36639);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32887__auto__ = null;
var shadow$dom$state_machine__32887__auto____0 = (function (){
var statearr_36648 = [null,null,null,null,null,null,null,null];
(statearr_36648[(0)] = shadow$dom$state_machine__32887__auto__);

(statearr_36648[(1)] = (1));

return statearr_36648;
});
var shadow$dom$state_machine__32887__auto____1 = (function (state_36641){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_36641);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e36649){var ex__32890__auto__ = e36649;
var statearr_36650_37063 = state_36641;
(statearr_36650_37063[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_36641[(4)]))){
var statearr_36651_37064 = state_36641;
(statearr_36651_37064[(1)] = cljs.core.first((state_36641[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37065 = state_36641;
state_36641 = G__37065;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
shadow$dom$state_machine__32887__auto__ = function(state_36641){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32887__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32887__auto____1.call(this,state_36641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32887__auto____0;
shadow$dom$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32887__auto____1;
return shadow$dom$state_machine__32887__auto__;
})()
})();
var state__33107__auto__ = (function (){var statearr_36652 = f__33106__auto__();
(statearr_36652[(6)] = c__33105__auto___37062);

return statearr_36652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
