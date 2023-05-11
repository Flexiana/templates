goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33175 = arguments.length;
switch (G__33175) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33176 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33176 = (function (f,blockable,meta33177){
this.f = f;
this.blockable = blockable;
this.meta33177 = meta33177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33178,meta33177__$1){
var self__ = this;
var _33178__$1 = this;
return (new cljs.core.async.t_cljs$core$async33176(self__.f,self__.blockable,meta33177__$1));
}));

(cljs.core.async.t_cljs$core$async33176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33178){
var self__ = this;
var _33178__$1 = this;
return self__.meta33177;
}));

(cljs.core.async.t_cljs$core$async33176.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33176.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33176.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33176.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33177","meta33177",509770629,null)], null);
}));

(cljs.core.async.t_cljs$core$async33176.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33176");

(cljs.core.async.t_cljs$core$async33176.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33176");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33176.
 */
cljs.core.async.__GT_t_cljs$core$async33176 = (function cljs$core$async$__GT_t_cljs$core$async33176(f__$1,blockable__$1,meta33177){
return (new cljs.core.async.t_cljs$core$async33176(f__$1,blockable__$1,meta33177));
});

}

return (new cljs.core.async.t_cljs$core$async33176(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33181 = arguments.length;
switch (G__33181) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33183 = arguments.length;
switch (G__33183) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33185 = arguments.length;
switch (G__33185) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35454 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35454) : fn1.call(null,val_35454));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35454) : fn1.call(null,val_35454));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33187 = arguments.length;
switch (G__33187) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___35460 = n;
var x_35461 = (0);
while(true){
if((x_35461 < n__5636__auto___35460)){
(a[x_35461] = x_35461);

var G__35462 = (x_35461 + (1));
x_35461 = G__35462;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33192 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33192 = (function (flag,meta33193){
this.flag = flag;
this.meta33193 = meta33193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33194,meta33193__$1){
var self__ = this;
var _33194__$1 = this;
return (new cljs.core.async.t_cljs$core$async33192(self__.flag,meta33193__$1));
}));

(cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33194){
var self__ = this;
var _33194__$1 = this;
return self__.meta33193;
}));

(cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33193","meta33193",-1625521107,null)], null);
}));

(cljs.core.async.t_cljs$core$async33192.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33192");

(cljs.core.async.t_cljs$core$async33192.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33192");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33192.
 */
cljs.core.async.__GT_t_cljs$core$async33192 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33192(flag__$1,meta33193){
return (new cljs.core.async.t_cljs$core$async33192(flag__$1,meta33193));
});

}

return (new cljs.core.async.t_cljs$core$async33192(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33202 = (function (flag,cb,meta33203){
this.flag = flag;
this.cb = cb;
this.meta33203 = meta33203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33204,meta33203__$1){
var self__ = this;
var _33204__$1 = this;
return (new cljs.core.async.t_cljs$core$async33202(self__.flag,self__.cb,meta33203__$1));
}));

(cljs.core.async.t_cljs$core$async33202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33204){
var self__ = this;
var _33204__$1 = this;
return self__.meta33203;
}));

(cljs.core.async.t_cljs$core$async33202.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33202.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33203","meta33203",-1612390109,null)], null);
}));

(cljs.core.async.t_cljs$core$async33202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33202");

(cljs.core.async.t_cljs$core$async33202.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33202.
 */
cljs.core.async.__GT_t_cljs$core$async33202 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33202(flag__$1,cb__$1,meta33203){
return (new cljs.core.async.t_cljs$core$async33202(flag__$1,cb__$1,meta33203));
});

}

return (new cljs.core.async.t_cljs$core$async33202(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33209_SHARP_){
var G__33212 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33209_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33212) : fret.call(null,G__33212));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33210_SHARP_){
var G__33213 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33210_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33213) : fret.call(null,G__33213));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35484 = (i + (1));
i = G__35484;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35492 = arguments.length;
var i__5770__auto___35493 = (0);
while(true){
if((i__5770__auto___35493 < len__5769__auto___35492)){
args__5775__auto__.push((arguments[i__5770__auto___35493]));

var G__35494 = (i__5770__auto___35493 + (1));
i__5770__auto___35493 = G__35494;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33217){
var map__33218 = p__33217;
var map__33218__$1 = cljs.core.__destructure_map(map__33218);
var opts = map__33218__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33215){
var G__33216 = cljs.core.first(seq33215);
var seq33215__$1 = cljs.core.next(seq33215);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33216,seq33215__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33223 = arguments.length;
switch (G__33223) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33105__auto___35497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = (function (state_33270){
var state_val_33271 = (state_33270[(1)]);
if((state_val_33271 === (7))){
var inst_33266 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
var statearr_33274_35498 = state_33270__$1;
(statearr_33274_35498[(2)] = inst_33266);

(statearr_33274_35498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (1))){
var state_33270__$1 = state_33270;
var statearr_33275_35501 = state_33270__$1;
(statearr_33275_35501[(2)] = null);

(statearr_33275_35501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (4))){
var inst_33244 = (state_33270[(7)]);
var inst_33244__$1 = (state_33270[(2)]);
var inst_33247 = (inst_33244__$1 == null);
var state_33270__$1 = (function (){var statearr_33276 = state_33270;
(statearr_33276[(7)] = inst_33244__$1);

return statearr_33276;
})();
if(cljs.core.truth_(inst_33247)){
var statearr_33277_35504 = state_33270__$1;
(statearr_33277_35504[(1)] = (5));

} else {
var statearr_33278_35505 = state_33270__$1;
(statearr_33278_35505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (13))){
var state_33270__$1 = state_33270;
var statearr_33279_35509 = state_33270__$1;
(statearr_33279_35509[(2)] = null);

(statearr_33279_35509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (6))){
var inst_33244 = (state_33270[(7)]);
var state_33270__$1 = state_33270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33270__$1,(11),to,inst_33244);
} else {
if((state_val_33271 === (3))){
var inst_33268 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33270__$1,inst_33268);
} else {
if((state_val_33271 === (12))){
var state_33270__$1 = state_33270;
var statearr_33280_35512 = state_33270__$1;
(statearr_33280_35512[(2)] = null);

(statearr_33280_35512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (2))){
var state_33270__$1 = state_33270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33270__$1,(4),from);
} else {
if((state_val_33271 === (11))){
var inst_33259 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
if(cljs.core.truth_(inst_33259)){
var statearr_33281_35513 = state_33270__$1;
(statearr_33281_35513[(1)] = (12));

} else {
var statearr_33282_35514 = state_33270__$1;
(statearr_33282_35514[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (9))){
var state_33270__$1 = state_33270;
var statearr_33283_35515 = state_33270__$1;
(statearr_33283_35515[(2)] = null);

(statearr_33283_35515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (5))){
var state_33270__$1 = state_33270;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33284_35516 = state_33270__$1;
(statearr_33284_35516[(1)] = (8));

} else {
var statearr_33285_35517 = state_33270__$1;
(statearr_33285_35517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (14))){
var inst_33264 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
var statearr_33286_35518 = state_33270__$1;
(statearr_33286_35518[(2)] = inst_33264);

(statearr_33286_35518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (10))){
var inst_33256 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
var statearr_33287_35520 = state_33270__$1;
(statearr_33287_35520[(2)] = inst_33256);

(statearr_33287_35520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (8))){
var inst_33253 = cljs.core.async.close_BANG_(to);
var state_33270__$1 = state_33270;
var statearr_33288_35521 = state_33270__$1;
(statearr_33288_35521[(2)] = inst_33253);

(statearr_33288_35521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32887__auto__ = null;
var cljs$core$async$state_machine__32887__auto____0 = (function (){
var statearr_33289 = [null,null,null,null,null,null,null,null];
(statearr_33289[(0)] = cljs$core$async$state_machine__32887__auto__);

(statearr_33289[(1)] = (1));

return statearr_33289;
});
var cljs$core$async$state_machine__32887__auto____1 = (function (state_33270){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_33270);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e33290){var ex__32890__auto__ = e33290;
var statearr_33291_35525 = state_33270;
(statearr_33291_35525[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_33270[(4)]))){
var statearr_33292_35527 = state_33270;
(statearr_33292_35527[(1)] = cljs.core.first((state_33270[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35528 = state_33270;
state_33270 = G__35528;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$state_machine__32887__auto__ = function(state_33270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32887__auto____1.call(this,state_33270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32887__auto____0;
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32887__auto____1;
return cljs$core$async$state_machine__32887__auto__;
})()
})();
var state__33107__auto__ = (function (){var statearr_33293 = f__33106__auto__();
(statearr_33293[(6)] = c__33105__auto___35497);

return statearr_33293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__33294){
var vec__33295 = p__33294;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33295,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33295,(1),null);
var job = vec__33295;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33105__auto___35529 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = (function (state_33302){
var state_val_33303 = (state_33302[(1)]);
if((state_val_33303 === (1))){
var state_33302__$1 = state_33302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33302__$1,(2),res,v);
} else {
if((state_val_33303 === (2))){
var inst_33299 = (state_33302[(2)]);
var inst_33300 = cljs.core.async.close_BANG_(res);
var state_33302__$1 = (function (){var statearr_33304 = state_33302;
(statearr_33304[(7)] = inst_33299);

return statearr_33304;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33302__$1,inst_33300);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____0 = (function (){
var statearr_33305 = [null,null,null,null,null,null,null,null];
(statearr_33305[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__);

(statearr_33305[(1)] = (1));

return statearr_33305;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____1 = (function (state_33302){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_33302);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e33306){var ex__32890__auto__ = e33306;
var statearr_33307_35532 = state_33302;
(statearr_33307_35532[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_33302[(4)]))){
var statearr_33308_35533 = state_33302;
(statearr_33308_35533[(1)] = cljs.core.first((state_33302[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35534 = state_33302;
state_33302 = G__35534;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__ = function(state_33302){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____1.call(this,state_33302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__;
})()
})();
var state__33107__auto__ = (function (){var statearr_33309 = f__33106__auto__();
(statearr_33309[(6)] = c__33105__auto___35529);

return statearr_33309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33310){
var vec__33311 = p__33310;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33311,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33311,(1),null);
var job = vec__33311;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___35542 = n;
var __35543 = (0);
while(true){
if((__35543 < n__5636__auto___35542)){
var G__33314_35544 = type;
var G__33314_35545__$1 = (((G__33314_35544 instanceof cljs.core.Keyword))?G__33314_35544.fqn:null);
switch (G__33314_35545__$1) {
case "compute":
var c__33105__auto___35547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35543,c__33105__auto___35547,G__33314_35544,G__33314_35545__$1,n__5636__auto___35542,jobs,results,process__$1,async){
return (function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = ((function (__35543,c__33105__auto___35547,G__33314_35544,G__33314_35545__$1,n__5636__auto___35542,jobs,results,process__$1,async){
return (function (state_33327){
var state_val_33328 = (state_33327[(1)]);
if((state_val_33328 === (1))){
var state_33327__$1 = state_33327;
var statearr_33329_35550 = state_33327__$1;
(statearr_33329_35550[(2)] = null);

(statearr_33329_35550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33328 === (2))){
var state_33327__$1 = state_33327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33327__$1,(4),jobs);
} else {
if((state_val_33328 === (3))){
var inst_33325 = (state_33327[(2)]);
var state_33327__$1 = state_33327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33327__$1,inst_33325);
} else {
if((state_val_33328 === (4))){
var inst_33317 = (state_33327[(2)]);
var inst_33318 = process__$1(inst_33317);
var state_33327__$1 = state_33327;
if(cljs.core.truth_(inst_33318)){
var statearr_33330_35552 = state_33327__$1;
(statearr_33330_35552[(1)] = (5));

} else {
var statearr_33331_35553 = state_33327__$1;
(statearr_33331_35553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33328 === (5))){
var state_33327__$1 = state_33327;
var statearr_33332_35554 = state_33327__$1;
(statearr_33332_35554[(2)] = null);

(statearr_33332_35554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33328 === (6))){
var state_33327__$1 = state_33327;
var statearr_33333_35555 = state_33327__$1;
(statearr_33333_35555[(2)] = null);

(statearr_33333_35555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33328 === (7))){
var inst_33323 = (state_33327[(2)]);
var state_33327__$1 = state_33327;
var statearr_33334_35556 = state_33327__$1;
(statearr_33334_35556[(2)] = inst_33323);

(statearr_33334_35556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35543,c__33105__auto___35547,G__33314_35544,G__33314_35545__$1,n__5636__auto___35542,jobs,results,process__$1,async))
;
return ((function (__35543,switch__32886__auto__,c__33105__auto___35547,G__33314_35544,G__33314_35545__$1,n__5636__auto___35542,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____0 = (function (){
var statearr_33335 = [null,null,null,null,null,null,null];
(statearr_33335[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__);

(statearr_33335[(1)] = (1));

return statearr_33335;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____1 = (function (state_33327){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_33327);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e33336){var ex__32890__auto__ = e33336;
var statearr_33337_35559 = state_33327;
(statearr_33337_35559[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_33327[(4)]))){
var statearr_33338_35560 = state_33327;
(statearr_33338_35560[(1)] = cljs.core.first((state_33327[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35563 = state_33327;
state_33327 = G__35563;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__ = function(state_33327){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____1.call(this,state_33327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__;
})()
;})(__35543,switch__32886__auto__,c__33105__auto___35547,G__33314_35544,G__33314_35545__$1,n__5636__auto___35542,jobs,results,process__$1,async))
})();
var state__33107__auto__ = (function (){var statearr_33339 = f__33106__auto__();
(statearr_33339[(6)] = c__33105__auto___35547);

return statearr_33339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
});})(__35543,c__33105__auto___35547,G__33314_35544,G__33314_35545__$1,n__5636__auto___35542,jobs,results,process__$1,async))
);


break;
case "async":
var c__33105__auto___35564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35543,c__33105__auto___35564,G__33314_35544,G__33314_35545__$1,n__5636__auto___35542,jobs,results,process__$1,async){
return (function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = ((function (__35543,c__33105__auto___35564,G__33314_35544,G__33314_35545__$1,n__5636__auto___35542,jobs,results,process__$1,async){
return (function (state_33352){
var state_val_33353 = (state_33352[(1)]);
if((state_val_33353 === (1))){
var state_33352__$1 = state_33352;
var statearr_33354_35565 = state_33352__$1;
(statearr_33354_35565[(2)] = null);

(statearr_33354_35565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (2))){
var state_33352__$1 = state_33352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33352__$1,(4),jobs);
} else {
if((state_val_33353 === (3))){
var inst_33350 = (state_33352[(2)]);
var state_33352__$1 = state_33352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33352__$1,inst_33350);
} else {
if((state_val_33353 === (4))){
var inst_33342 = (state_33352[(2)]);
var inst_33343 = async(inst_33342);
var state_33352__$1 = state_33352;
if(cljs.core.truth_(inst_33343)){
var statearr_33355_35569 = state_33352__$1;
(statearr_33355_35569[(1)] = (5));

} else {
var statearr_33356_35570 = state_33352__$1;
(statearr_33356_35570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (5))){
var state_33352__$1 = state_33352;
var statearr_33357_35572 = state_33352__$1;
(statearr_33357_35572[(2)] = null);

(statearr_33357_35572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (6))){
var state_33352__$1 = state_33352;
var statearr_33358_35573 = state_33352__$1;
(statearr_33358_35573[(2)] = null);

(statearr_33358_35573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (7))){
var inst_33348 = (state_33352[(2)]);
var state_33352__$1 = state_33352;
var statearr_33360_35574 = state_33352__$1;
(statearr_33360_35574[(2)] = inst_33348);

(statearr_33360_35574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35543,c__33105__auto___35564,G__33314_35544,G__33314_35545__$1,n__5636__auto___35542,jobs,results,process__$1,async))
;
return ((function (__35543,switch__32886__auto__,c__33105__auto___35564,G__33314_35544,G__33314_35545__$1,n__5636__auto___35542,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____0 = (function (){
var statearr_33361 = [null,null,null,null,null,null,null];
(statearr_33361[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__);

(statearr_33361[(1)] = (1));

return statearr_33361;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____1 = (function (state_33352){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_33352);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e33362){var ex__32890__auto__ = e33362;
var statearr_33364_35576 = state_33352;
(statearr_33364_35576[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_33352[(4)]))){
var statearr_33367_35577 = state_33352;
(statearr_33367_35577[(1)] = cljs.core.first((state_33352[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35578 = state_33352;
state_33352 = G__35578;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__ = function(state_33352){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____1.call(this,state_33352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__;
})()
;})(__35543,switch__32886__auto__,c__33105__auto___35564,G__33314_35544,G__33314_35545__$1,n__5636__auto___35542,jobs,results,process__$1,async))
})();
var state__33107__auto__ = (function (){var statearr_33392 = f__33106__auto__();
(statearr_33392[(6)] = c__33105__auto___35564);

return statearr_33392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
});})(__35543,c__33105__auto___35564,G__33314_35544,G__33314_35545__$1,n__5636__auto___35542,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33314_35545__$1)].join('')));

}

var G__35579 = (__35543 + (1));
__35543 = G__35579;
continue;
} else {
}
break;
}

var c__33105__auto___35580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = (function (state_33420){
var state_val_33421 = (state_33420[(1)]);
if((state_val_33421 === (7))){
var inst_33414 = (state_33420[(2)]);
var state_33420__$1 = state_33420;
var statearr_33438_35582 = state_33420__$1;
(statearr_33438_35582[(2)] = inst_33414);

(statearr_33438_35582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33421 === (1))){
var state_33420__$1 = state_33420;
var statearr_33439_35583 = state_33420__$1;
(statearr_33439_35583[(2)] = null);

(statearr_33439_35583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33421 === (4))){
var inst_33396 = (state_33420[(7)]);
var inst_33396__$1 = (state_33420[(2)]);
var inst_33397 = (inst_33396__$1 == null);
var state_33420__$1 = (function (){var statearr_33440 = state_33420;
(statearr_33440[(7)] = inst_33396__$1);

return statearr_33440;
})();
if(cljs.core.truth_(inst_33397)){
var statearr_33441_35586 = state_33420__$1;
(statearr_33441_35586[(1)] = (5));

} else {
var statearr_33442_35587 = state_33420__$1;
(statearr_33442_35587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33421 === (6))){
var inst_33396 = (state_33420[(7)]);
var inst_33401 = (state_33420[(8)]);
var inst_33401__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33404 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33406 = [inst_33396,inst_33401__$1];
var inst_33407 = (new cljs.core.PersistentVector(null,2,(5),inst_33404,inst_33406,null));
var state_33420__$1 = (function (){var statearr_33444 = state_33420;
(statearr_33444[(8)] = inst_33401__$1);

return statearr_33444;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33420__$1,(8),jobs,inst_33407);
} else {
if((state_val_33421 === (3))){
var inst_33417 = (state_33420[(2)]);
var state_33420__$1 = state_33420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33420__$1,inst_33417);
} else {
if((state_val_33421 === (2))){
var state_33420__$1 = state_33420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33420__$1,(4),from);
} else {
if((state_val_33421 === (9))){
var inst_33411 = (state_33420[(2)]);
var state_33420__$1 = (function (){var statearr_33446 = state_33420;
(statearr_33446[(9)] = inst_33411);

return statearr_33446;
})();
var statearr_33447_35588 = state_33420__$1;
(statearr_33447_35588[(2)] = null);

(statearr_33447_35588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33421 === (5))){
var inst_33399 = cljs.core.async.close_BANG_(jobs);
var state_33420__$1 = state_33420;
var statearr_33450_35589 = state_33420__$1;
(statearr_33450_35589[(2)] = inst_33399);

(statearr_33450_35589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33421 === (8))){
var inst_33401 = (state_33420[(8)]);
var inst_33409 = (state_33420[(2)]);
var state_33420__$1 = (function (){var statearr_33451 = state_33420;
(statearr_33451[(10)] = inst_33409);

return statearr_33451;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33420__$1,(9),results,inst_33401);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____0 = (function (){
var statearr_33456 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__);

(statearr_33456[(1)] = (1));

return statearr_33456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____1 = (function (state_33420){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_33420);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e33458){var ex__32890__auto__ = e33458;
var statearr_33459_35590 = state_33420;
(statearr_33459_35590[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_33420[(4)]))){
var statearr_33460_35591 = state_33420;
(statearr_33460_35591[(1)] = cljs.core.first((state_33420[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35592 = state_33420;
state_33420 = G__35592;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__ = function(state_33420){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____1.call(this,state_33420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__;
})()
})();
var state__33107__auto__ = (function (){var statearr_33461 = f__33106__auto__();
(statearr_33461[(6)] = c__33105__auto___35580);

return statearr_33461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
}));


var c__33105__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = (function (state_33581){
var state_val_33582 = (state_33581[(1)]);
if((state_val_33582 === (7))){
var inst_33577 = (state_33581[(2)]);
var state_33581__$1 = state_33581;
var statearr_33584_35594 = state_33581__$1;
(statearr_33584_35594[(2)] = inst_33577);

(statearr_33584_35594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (20))){
var state_33581__$1 = state_33581;
var statearr_33585_35596 = state_33581__$1;
(statearr_33585_35596[(2)] = null);

(statearr_33585_35596[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (1))){
var state_33581__$1 = state_33581;
var statearr_33586_35597 = state_33581__$1;
(statearr_33586_35597[(2)] = null);

(statearr_33586_35597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (4))){
var inst_33466 = (state_33581[(7)]);
var inst_33466__$1 = (state_33581[(2)]);
var inst_33467 = (inst_33466__$1 == null);
var state_33581__$1 = (function (){var statearr_33587 = state_33581;
(statearr_33587[(7)] = inst_33466__$1);

return statearr_33587;
})();
if(cljs.core.truth_(inst_33467)){
var statearr_33588_35602 = state_33581__$1;
(statearr_33588_35602[(1)] = (5));

} else {
var statearr_33589_35603 = state_33581__$1;
(statearr_33589_35603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (15))){
var inst_33503 = (state_33581[(8)]);
var state_33581__$1 = state_33581;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33581__$1,(18),to,inst_33503);
} else {
if((state_val_33582 === (21))){
var inst_33571 = (state_33581[(2)]);
var state_33581__$1 = state_33581;
var statearr_33590_35604 = state_33581__$1;
(statearr_33590_35604[(2)] = inst_33571);

(statearr_33590_35604[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (13))){
var inst_33574 = (state_33581[(2)]);
var state_33581__$1 = (function (){var statearr_33592 = state_33581;
(statearr_33592[(9)] = inst_33574);

return statearr_33592;
})();
var statearr_33593_35605 = state_33581__$1;
(statearr_33593_35605[(2)] = null);

(statearr_33593_35605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (6))){
var inst_33466 = (state_33581[(7)]);
var state_33581__$1 = state_33581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33581__$1,(11),inst_33466);
} else {
if((state_val_33582 === (17))){
var inst_33560 = (state_33581[(2)]);
var state_33581__$1 = state_33581;
if(cljs.core.truth_(inst_33560)){
var statearr_33608_35606 = state_33581__$1;
(statearr_33608_35606[(1)] = (19));

} else {
var statearr_33613_35607 = state_33581__$1;
(statearr_33613_35607[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (3))){
var inst_33579 = (state_33581[(2)]);
var state_33581__$1 = state_33581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33581__$1,inst_33579);
} else {
if((state_val_33582 === (12))){
var inst_33500 = (state_33581[(10)]);
var state_33581__$1 = state_33581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33581__$1,(14),inst_33500);
} else {
if((state_val_33582 === (2))){
var state_33581__$1 = state_33581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33581__$1,(4),results);
} else {
if((state_val_33582 === (19))){
var state_33581__$1 = state_33581;
var statearr_33629_35609 = state_33581__$1;
(statearr_33629_35609[(2)] = null);

(statearr_33629_35609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (11))){
var inst_33500 = (state_33581[(2)]);
var state_33581__$1 = (function (){var statearr_33632 = state_33581;
(statearr_33632[(10)] = inst_33500);

return statearr_33632;
})();
var statearr_33633_35610 = state_33581__$1;
(statearr_33633_35610[(2)] = null);

(statearr_33633_35610[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (9))){
var state_33581__$1 = state_33581;
var statearr_33639_35612 = state_33581__$1;
(statearr_33639_35612[(2)] = null);

(statearr_33639_35612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (5))){
var state_33581__$1 = state_33581;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33660_35614 = state_33581__$1;
(statearr_33660_35614[(1)] = (8));

} else {
var statearr_33661_35621 = state_33581__$1;
(statearr_33661_35621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (14))){
var inst_33547 = (state_33581[(11)]);
var inst_33503 = (state_33581[(8)]);
var inst_33503__$1 = (state_33581[(2)]);
var inst_33543 = (inst_33503__$1 == null);
var inst_33547__$1 = cljs.core.not(inst_33543);
var state_33581__$1 = (function (){var statearr_33662 = state_33581;
(statearr_33662[(11)] = inst_33547__$1);

(statearr_33662[(8)] = inst_33503__$1);

return statearr_33662;
})();
if(inst_33547__$1){
var statearr_33663_35622 = state_33581__$1;
(statearr_33663_35622[(1)] = (15));

} else {
var statearr_33664_35626 = state_33581__$1;
(statearr_33664_35626[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (16))){
var inst_33547 = (state_33581[(11)]);
var state_33581__$1 = state_33581;
var statearr_33666_35627 = state_33581__$1;
(statearr_33666_35627[(2)] = inst_33547);

(statearr_33666_35627[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (10))){
var inst_33479 = (state_33581[(2)]);
var state_33581__$1 = state_33581;
var statearr_33667_35628 = state_33581__$1;
(statearr_33667_35628[(2)] = inst_33479);

(statearr_33667_35628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (18))){
var inst_33557 = (state_33581[(2)]);
var state_33581__$1 = state_33581;
var statearr_33668_35629 = state_33581__$1;
(statearr_33668_35629[(2)] = inst_33557);

(statearr_33668_35629[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33582 === (8))){
var inst_33470 = cljs.core.async.close_BANG_(to);
var state_33581__$1 = state_33581;
var statearr_33669_35630 = state_33581__$1;
(statearr_33669_35630[(2)] = inst_33470);

(statearr_33669_35630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____0 = (function (){
var statearr_33670 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33670[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__);

(statearr_33670[(1)] = (1));

return statearr_33670;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____1 = (function (state_33581){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_33581);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e33672){var ex__32890__auto__ = e33672;
var statearr_33673_35635 = state_33581;
(statearr_33673_35635[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_33581[(4)]))){
var statearr_33674_35636 = state_33581;
(statearr_33674_35636[(1)] = cljs.core.first((state_33581[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35637 = state_33581;
state_33581 = G__35637;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__ = function(state_33581){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____1.call(this,state_33581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32887__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32887__auto__;
})()
})();
var state__33107__auto__ = (function (){var statearr_33675 = f__33106__auto__();
(statearr_33675[(6)] = c__33105__auto__);

return statearr_33675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
}));

return c__33105__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33693 = arguments.length;
switch (G__33693) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33703 = arguments.length;
switch (G__33703) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33708 = arguments.length;
switch (G__33708) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33105__auto___35658 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = (function (state_33735){
var state_val_33736 = (state_33735[(1)]);
if((state_val_33736 === (7))){
var inst_33731 = (state_33735[(2)]);
var state_33735__$1 = state_33735;
var statearr_33737_35659 = state_33735__$1;
(statearr_33737_35659[(2)] = inst_33731);

(statearr_33737_35659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33736 === (1))){
var state_33735__$1 = state_33735;
var statearr_33738_35660 = state_33735__$1;
(statearr_33738_35660[(2)] = null);

(statearr_33738_35660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33736 === (4))){
var inst_33711 = (state_33735[(7)]);
var inst_33711__$1 = (state_33735[(2)]);
var inst_33713 = (inst_33711__$1 == null);
var state_33735__$1 = (function (){var statearr_33739 = state_33735;
(statearr_33739[(7)] = inst_33711__$1);

return statearr_33739;
})();
if(cljs.core.truth_(inst_33713)){
var statearr_33740_35661 = state_33735__$1;
(statearr_33740_35661[(1)] = (5));

} else {
var statearr_33741_35662 = state_33735__$1;
(statearr_33741_35662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33736 === (13))){
var state_33735__$1 = state_33735;
var statearr_33742_35663 = state_33735__$1;
(statearr_33742_35663[(2)] = null);

(statearr_33742_35663[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33736 === (6))){
var inst_33711 = (state_33735[(7)]);
var inst_33718 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33711) : p.call(null,inst_33711));
var state_33735__$1 = state_33735;
if(cljs.core.truth_(inst_33718)){
var statearr_33744_35665 = state_33735__$1;
(statearr_33744_35665[(1)] = (9));

} else {
var statearr_33745_35666 = state_33735__$1;
(statearr_33745_35666[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33736 === (3))){
var inst_33733 = (state_33735[(2)]);
var state_33735__$1 = state_33735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33735__$1,inst_33733);
} else {
if((state_val_33736 === (12))){
var state_33735__$1 = state_33735;
var statearr_33746_35667 = state_33735__$1;
(statearr_33746_35667[(2)] = null);

(statearr_33746_35667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33736 === (2))){
var state_33735__$1 = state_33735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33735__$1,(4),ch);
} else {
if((state_val_33736 === (11))){
var inst_33711 = (state_33735[(7)]);
var inst_33722 = (state_33735[(2)]);
var state_33735__$1 = state_33735;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33735__$1,(8),inst_33722,inst_33711);
} else {
if((state_val_33736 === (9))){
var state_33735__$1 = state_33735;
var statearr_33747_35669 = state_33735__$1;
(statearr_33747_35669[(2)] = tc);

(statearr_33747_35669[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33736 === (5))){
var inst_33715 = cljs.core.async.close_BANG_(tc);
var inst_33716 = cljs.core.async.close_BANG_(fc);
var state_33735__$1 = (function (){var statearr_33748 = state_33735;
(statearr_33748[(8)] = inst_33715);

return statearr_33748;
})();
var statearr_33749_35670 = state_33735__$1;
(statearr_33749_35670[(2)] = inst_33716);

(statearr_33749_35670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33736 === (14))){
var inst_33729 = (state_33735[(2)]);
var state_33735__$1 = state_33735;
var statearr_33751_35671 = state_33735__$1;
(statearr_33751_35671[(2)] = inst_33729);

(statearr_33751_35671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33736 === (10))){
var state_33735__$1 = state_33735;
var statearr_33752_35672 = state_33735__$1;
(statearr_33752_35672[(2)] = fc);

(statearr_33752_35672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33736 === (8))){
var inst_33724 = (state_33735[(2)]);
var state_33735__$1 = state_33735;
if(cljs.core.truth_(inst_33724)){
var statearr_33754_35673 = state_33735__$1;
(statearr_33754_35673[(1)] = (12));

} else {
var statearr_33755_35674 = state_33735__$1;
(statearr_33755_35674[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32887__auto__ = null;
var cljs$core$async$state_machine__32887__auto____0 = (function (){
var statearr_33757 = [null,null,null,null,null,null,null,null,null];
(statearr_33757[(0)] = cljs$core$async$state_machine__32887__auto__);

(statearr_33757[(1)] = (1));

return statearr_33757;
});
var cljs$core$async$state_machine__32887__auto____1 = (function (state_33735){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_33735);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e33759){var ex__32890__auto__ = e33759;
var statearr_33760_35676 = state_33735;
(statearr_33760_35676[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_33735[(4)]))){
var statearr_33761_35677 = state_33735;
(statearr_33761_35677[(1)] = cljs.core.first((state_33735[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35679 = state_33735;
state_33735 = G__35679;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$state_machine__32887__auto__ = function(state_33735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32887__auto____1.call(this,state_33735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32887__auto____0;
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32887__auto____1;
return cljs$core$async$state_machine__32887__auto__;
})()
})();
var state__33107__auto__ = (function (){var statearr_33762 = f__33106__auto__();
(statearr_33762[(6)] = c__33105__auto___35658);

return statearr_33762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33105__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = (function (state_33786){
var state_val_33787 = (state_33786[(1)]);
if((state_val_33787 === (7))){
var inst_33782 = (state_33786[(2)]);
var state_33786__$1 = state_33786;
var statearr_33788_35685 = state_33786__$1;
(statearr_33788_35685[(2)] = inst_33782);

(statearr_33788_35685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (1))){
var inst_33764 = init;
var inst_33765 = inst_33764;
var state_33786__$1 = (function (){var statearr_33789 = state_33786;
(statearr_33789[(7)] = inst_33765);

return statearr_33789;
})();
var statearr_33790_35686 = state_33786__$1;
(statearr_33790_35686[(2)] = null);

(statearr_33790_35686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (4))){
var inst_33768 = (state_33786[(8)]);
var inst_33768__$1 = (state_33786[(2)]);
var inst_33769 = (inst_33768__$1 == null);
var state_33786__$1 = (function (){var statearr_33791 = state_33786;
(statearr_33791[(8)] = inst_33768__$1);

return statearr_33791;
})();
if(cljs.core.truth_(inst_33769)){
var statearr_33792_35692 = state_33786__$1;
(statearr_33792_35692[(1)] = (5));

} else {
var statearr_33793_35693 = state_33786__$1;
(statearr_33793_35693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (6))){
var inst_33772 = (state_33786[(9)]);
var inst_33765 = (state_33786[(7)]);
var inst_33768 = (state_33786[(8)]);
var inst_33772__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33765,inst_33768) : f.call(null,inst_33765,inst_33768));
var inst_33774 = cljs.core.reduced_QMARK_(inst_33772__$1);
var state_33786__$1 = (function (){var statearr_33794 = state_33786;
(statearr_33794[(9)] = inst_33772__$1);

return statearr_33794;
})();
if(inst_33774){
var statearr_33795_35694 = state_33786__$1;
(statearr_33795_35694[(1)] = (8));

} else {
var statearr_33796_35695 = state_33786__$1;
(statearr_33796_35695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (3))){
var inst_33784 = (state_33786[(2)]);
var state_33786__$1 = state_33786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33786__$1,inst_33784);
} else {
if((state_val_33787 === (2))){
var state_33786__$1 = state_33786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33786__$1,(4),ch);
} else {
if((state_val_33787 === (9))){
var inst_33772 = (state_33786[(9)]);
var inst_33765 = inst_33772;
var state_33786__$1 = (function (){var statearr_33797 = state_33786;
(statearr_33797[(7)] = inst_33765);

return statearr_33797;
})();
var statearr_33798_35696 = state_33786__$1;
(statearr_33798_35696[(2)] = null);

(statearr_33798_35696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (5))){
var inst_33765 = (state_33786[(7)]);
var state_33786__$1 = state_33786;
var statearr_33799_35697 = state_33786__$1;
(statearr_33799_35697[(2)] = inst_33765);

(statearr_33799_35697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (10))){
var inst_33780 = (state_33786[(2)]);
var state_33786__$1 = state_33786;
var statearr_33800_35698 = state_33786__$1;
(statearr_33800_35698[(2)] = inst_33780);

(statearr_33800_35698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33787 === (8))){
var inst_33772 = (state_33786[(9)]);
var inst_33776 = cljs.core.deref(inst_33772);
var state_33786__$1 = state_33786;
var statearr_33801_35704 = state_33786__$1;
(statearr_33801_35704[(2)] = inst_33776);

(statearr_33801_35704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32887__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32887__auto____0 = (function (){
var statearr_33802 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33802[(0)] = cljs$core$async$reduce_$_state_machine__32887__auto__);

(statearr_33802[(1)] = (1));

return statearr_33802;
});
var cljs$core$async$reduce_$_state_machine__32887__auto____1 = (function (state_33786){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_33786);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e33803){var ex__32890__auto__ = e33803;
var statearr_33804_35708 = state_33786;
(statearr_33804_35708[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_33786[(4)]))){
var statearr_33805_35709 = state_33786;
(statearr_33805_35709[(1)] = cljs.core.first((state_33786[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35711 = state_33786;
state_33786 = G__35711;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32887__auto__ = function(state_33786){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32887__auto____1.call(this,state_33786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32887__auto____0;
cljs$core$async$reduce_$_state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32887__auto____1;
return cljs$core$async$reduce_$_state_machine__32887__auto__;
})()
})();
var state__33107__auto__ = (function (){var statearr_33807 = f__33106__auto__();
(statearr_33807[(6)] = c__33105__auto__);

return statearr_33807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
}));

return c__33105__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33105__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = (function (state_33813){
var state_val_33814 = (state_33813[(1)]);
if((state_val_33814 === (1))){
var inst_33808 = cljs.core.async.reduce(f__$1,init,ch);
var state_33813__$1 = state_33813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33813__$1,(2),inst_33808);
} else {
if((state_val_33814 === (2))){
var inst_33810 = (state_33813[(2)]);
var inst_33811 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33810) : f__$1.call(null,inst_33810));
var state_33813__$1 = state_33813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33813__$1,inst_33811);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32887__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32887__auto____0 = (function (){
var statearr_33815 = [null,null,null,null,null,null,null];
(statearr_33815[(0)] = cljs$core$async$transduce_$_state_machine__32887__auto__);

(statearr_33815[(1)] = (1));

return statearr_33815;
});
var cljs$core$async$transduce_$_state_machine__32887__auto____1 = (function (state_33813){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_33813);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e33817){var ex__32890__auto__ = e33817;
var statearr_33818_35723 = state_33813;
(statearr_33818_35723[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_33813[(4)]))){
var statearr_33819_35724 = state_33813;
(statearr_33819_35724[(1)] = cljs.core.first((state_33813[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35725 = state_33813;
state_33813 = G__35725;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32887__auto__ = function(state_33813){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32887__auto____1.call(this,state_33813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32887__auto____0;
cljs$core$async$transduce_$_state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32887__auto____1;
return cljs$core$async$transduce_$_state_machine__32887__auto__;
})()
})();
var state__33107__auto__ = (function (){var statearr_33820 = f__33106__auto__();
(statearr_33820[(6)] = c__33105__auto__);

return statearr_33820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
}));

return c__33105__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33822 = arguments.length;
switch (G__33822) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33105__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = (function (state_33848){
var state_val_33849 = (state_33848[(1)]);
if((state_val_33849 === (7))){
var inst_33830 = (state_33848[(2)]);
var state_33848__$1 = state_33848;
var statearr_33851_35730 = state_33848__$1;
(statearr_33851_35730[(2)] = inst_33830);

(statearr_33851_35730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (1))){
var inst_33824 = cljs.core.seq(coll);
var inst_33825 = inst_33824;
var state_33848__$1 = (function (){var statearr_33852 = state_33848;
(statearr_33852[(7)] = inst_33825);

return statearr_33852;
})();
var statearr_33853_35735 = state_33848__$1;
(statearr_33853_35735[(2)] = null);

(statearr_33853_35735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (4))){
var inst_33825 = (state_33848[(7)]);
var inst_33828 = cljs.core.first(inst_33825);
var state_33848__$1 = state_33848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33848__$1,(7),ch,inst_33828);
} else {
if((state_val_33849 === (13))){
var inst_33842 = (state_33848[(2)]);
var state_33848__$1 = state_33848;
var statearr_33854_35739 = state_33848__$1;
(statearr_33854_35739[(2)] = inst_33842);

(statearr_33854_35739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (6))){
var inst_33833 = (state_33848[(2)]);
var state_33848__$1 = state_33848;
if(cljs.core.truth_(inst_33833)){
var statearr_33855_35744 = state_33848__$1;
(statearr_33855_35744[(1)] = (8));

} else {
var statearr_33856_35745 = state_33848__$1;
(statearr_33856_35745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (3))){
var inst_33846 = (state_33848[(2)]);
var state_33848__$1 = state_33848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33848__$1,inst_33846);
} else {
if((state_val_33849 === (12))){
var state_33848__$1 = state_33848;
var statearr_33857_35749 = state_33848__$1;
(statearr_33857_35749[(2)] = null);

(statearr_33857_35749[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (2))){
var inst_33825 = (state_33848[(7)]);
var state_33848__$1 = state_33848;
if(cljs.core.truth_(inst_33825)){
var statearr_33858_35750 = state_33848__$1;
(statearr_33858_35750[(1)] = (4));

} else {
var statearr_33860_35751 = state_33848__$1;
(statearr_33860_35751[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (11))){
var inst_33839 = cljs.core.async.close_BANG_(ch);
var state_33848__$1 = state_33848;
var statearr_33861_35752 = state_33848__$1;
(statearr_33861_35752[(2)] = inst_33839);

(statearr_33861_35752[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (9))){
var state_33848__$1 = state_33848;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33862_35753 = state_33848__$1;
(statearr_33862_35753[(1)] = (11));

} else {
var statearr_33863_35757 = state_33848__$1;
(statearr_33863_35757[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (5))){
var inst_33825 = (state_33848[(7)]);
var state_33848__$1 = state_33848;
var statearr_33864_35758 = state_33848__$1;
(statearr_33864_35758[(2)] = inst_33825);

(statearr_33864_35758[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (10))){
var inst_33844 = (state_33848[(2)]);
var state_33848__$1 = state_33848;
var statearr_33865_35759 = state_33848__$1;
(statearr_33865_35759[(2)] = inst_33844);

(statearr_33865_35759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (8))){
var inst_33825 = (state_33848[(7)]);
var inst_33835 = cljs.core.next(inst_33825);
var inst_33825__$1 = inst_33835;
var state_33848__$1 = (function (){var statearr_33866 = state_33848;
(statearr_33866[(7)] = inst_33825__$1);

return statearr_33866;
})();
var statearr_33867_35760 = state_33848__$1;
(statearr_33867_35760[(2)] = null);

(statearr_33867_35760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32887__auto__ = null;
var cljs$core$async$state_machine__32887__auto____0 = (function (){
var statearr_33868 = [null,null,null,null,null,null,null,null];
(statearr_33868[(0)] = cljs$core$async$state_machine__32887__auto__);

(statearr_33868[(1)] = (1));

return statearr_33868;
});
var cljs$core$async$state_machine__32887__auto____1 = (function (state_33848){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_33848);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e33869){var ex__32890__auto__ = e33869;
var statearr_33871_35764 = state_33848;
(statearr_33871_35764[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_33848[(4)]))){
var statearr_33872_35765 = state_33848;
(statearr_33872_35765[(1)] = cljs.core.first((state_33848[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35766 = state_33848;
state_33848 = G__35766;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$state_machine__32887__auto__ = function(state_33848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32887__auto____1.call(this,state_33848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32887__auto____0;
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32887__auto____1;
return cljs$core$async$state_machine__32887__auto__;
})()
})();
var state__33107__auto__ = (function (){var statearr_33873 = f__33106__auto__();
(statearr_33873[(6)] = c__33105__auto__);

return statearr_33873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
}));

return c__33105__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33875 = arguments.length;
switch (G__33875) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35779 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35779(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35780 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35780(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35781 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35781(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35785 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35785(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33880 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33880 = (function (ch,cs,meta33881){
this.ch = ch;
this.cs = cs;
this.meta33881 = meta33881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33882,meta33881__$1){
var self__ = this;
var _33882__$1 = this;
return (new cljs.core.async.t_cljs$core$async33880(self__.ch,self__.cs,meta33881__$1));
}));

(cljs.core.async.t_cljs$core$async33880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33882){
var self__ = this;
var _33882__$1 = this;
return self__.meta33881;
}));

(cljs.core.async.t_cljs$core$async33880.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33880.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33880.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33880.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33880.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33880.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33881","meta33881",-1342411004,null)], null);
}));

(cljs.core.async.t_cljs$core$async33880.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33880.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33880");

(cljs.core.async.t_cljs$core$async33880.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33880");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33880.
 */
cljs.core.async.__GT_t_cljs$core$async33880 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33880(ch__$1,cs__$1,meta33881){
return (new cljs.core.async.t_cljs$core$async33880(ch__$1,cs__$1,meta33881));
});

}

return (new cljs.core.async.t_cljs$core$async33880(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33105__auto___35786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = (function (state_34021){
var state_val_34022 = (state_34021[(1)]);
if((state_val_34022 === (7))){
var inst_34017 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34025_35787 = state_34021__$1;
(statearr_34025_35787[(2)] = inst_34017);

(statearr_34025_35787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (20))){
var inst_33919 = (state_34021[(7)]);
var inst_33931 = cljs.core.first(inst_33919);
var inst_33932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33931,(0),null);
var inst_33933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33931,(1),null);
var state_34021__$1 = (function (){var statearr_34026 = state_34021;
(statearr_34026[(8)] = inst_33932);

return statearr_34026;
})();
if(cljs.core.truth_(inst_33933)){
var statearr_34027_35788 = state_34021__$1;
(statearr_34027_35788[(1)] = (22));

} else {
var statearr_34028_35789 = state_34021__$1;
(statearr_34028_35789[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (27))){
var inst_33887 = (state_34021[(9)]);
var inst_33962 = (state_34021[(10)]);
var inst_33964 = (state_34021[(11)]);
var inst_33969 = (state_34021[(12)]);
var inst_33969__$1 = cljs.core._nth(inst_33962,inst_33964);
var inst_33970 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33969__$1,inst_33887,done);
var state_34021__$1 = (function (){var statearr_34029 = state_34021;
(statearr_34029[(12)] = inst_33969__$1);

return statearr_34029;
})();
if(cljs.core.truth_(inst_33970)){
var statearr_34030_35790 = state_34021__$1;
(statearr_34030_35790[(1)] = (30));

} else {
var statearr_34031_35791 = state_34021__$1;
(statearr_34031_35791[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (1))){
var state_34021__$1 = state_34021;
var statearr_34032_35792 = state_34021__$1;
(statearr_34032_35792[(2)] = null);

(statearr_34032_35792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (24))){
var inst_33919 = (state_34021[(7)]);
var inst_33938 = (state_34021[(2)]);
var inst_33939 = cljs.core.next(inst_33919);
var inst_33896 = inst_33939;
var inst_33897 = null;
var inst_33898 = (0);
var inst_33899 = (0);
var state_34021__$1 = (function (){var statearr_34033 = state_34021;
(statearr_34033[(13)] = inst_33898);

(statearr_34033[(14)] = inst_33938);

(statearr_34033[(15)] = inst_33899);

(statearr_34033[(16)] = inst_33897);

(statearr_34033[(17)] = inst_33896);

return statearr_34033;
})();
var statearr_34034_35793 = state_34021__$1;
(statearr_34034_35793[(2)] = null);

(statearr_34034_35793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (39))){
var state_34021__$1 = state_34021;
var statearr_34038_35794 = state_34021__$1;
(statearr_34038_35794[(2)] = null);

(statearr_34038_35794[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (4))){
var inst_33887 = (state_34021[(9)]);
var inst_33887__$1 = (state_34021[(2)]);
var inst_33888 = (inst_33887__$1 == null);
var state_34021__$1 = (function (){var statearr_34039 = state_34021;
(statearr_34039[(9)] = inst_33887__$1);

return statearr_34039;
})();
if(cljs.core.truth_(inst_33888)){
var statearr_34040_35795 = state_34021__$1;
(statearr_34040_35795[(1)] = (5));

} else {
var statearr_34041_35796 = state_34021__$1;
(statearr_34041_35796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (15))){
var inst_33898 = (state_34021[(13)]);
var inst_33899 = (state_34021[(15)]);
var inst_33897 = (state_34021[(16)]);
var inst_33896 = (state_34021[(17)]);
var inst_33915 = (state_34021[(2)]);
var inst_33916 = (inst_33899 + (1));
var tmp34035 = inst_33898;
var tmp34036 = inst_33897;
var tmp34037 = inst_33896;
var inst_33896__$1 = tmp34037;
var inst_33897__$1 = tmp34036;
var inst_33898__$1 = tmp34035;
var inst_33899__$1 = inst_33916;
var state_34021__$1 = (function (){var statearr_34043 = state_34021;
(statearr_34043[(13)] = inst_33898__$1);

(statearr_34043[(15)] = inst_33899__$1);

(statearr_34043[(16)] = inst_33897__$1);

(statearr_34043[(17)] = inst_33896__$1);

(statearr_34043[(18)] = inst_33915);

return statearr_34043;
})();
var statearr_34045_35797 = state_34021__$1;
(statearr_34045_35797[(2)] = null);

(statearr_34045_35797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (21))){
var inst_33942 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34049_35798 = state_34021__$1;
(statearr_34049_35798[(2)] = inst_33942);

(statearr_34049_35798[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (31))){
var inst_33969 = (state_34021[(12)]);
var inst_33973 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33969);
var state_34021__$1 = state_34021;
var statearr_34050_35800 = state_34021__$1;
(statearr_34050_35800[(2)] = inst_33973);

(statearr_34050_35800[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (32))){
var inst_33961 = (state_34021[(19)]);
var inst_33962 = (state_34021[(10)]);
var inst_33964 = (state_34021[(11)]);
var inst_33963 = (state_34021[(20)]);
var inst_33975 = (state_34021[(2)]);
var inst_33976 = (inst_33964 + (1));
var tmp34046 = inst_33961;
var tmp34047 = inst_33962;
var tmp34048 = inst_33963;
var inst_33961__$1 = tmp34046;
var inst_33962__$1 = tmp34047;
var inst_33963__$1 = tmp34048;
var inst_33964__$1 = inst_33976;
var state_34021__$1 = (function (){var statearr_34051 = state_34021;
(statearr_34051[(21)] = inst_33975);

(statearr_34051[(19)] = inst_33961__$1);

(statearr_34051[(10)] = inst_33962__$1);

(statearr_34051[(11)] = inst_33964__$1);

(statearr_34051[(20)] = inst_33963__$1);

return statearr_34051;
})();
var statearr_34052_35802 = state_34021__$1;
(statearr_34052_35802[(2)] = null);

(statearr_34052_35802[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (40))){
var inst_33990 = (state_34021[(22)]);
var inst_33994 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33990);
var state_34021__$1 = state_34021;
var statearr_34053_35803 = state_34021__$1;
(statearr_34053_35803[(2)] = inst_33994);

(statearr_34053_35803[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (33))){
var inst_33979 = (state_34021[(23)]);
var inst_33981 = cljs.core.chunked_seq_QMARK_(inst_33979);
var state_34021__$1 = state_34021;
if(inst_33981){
var statearr_34054_35804 = state_34021__$1;
(statearr_34054_35804[(1)] = (36));

} else {
var statearr_34055_35805 = state_34021__$1;
(statearr_34055_35805[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (13))){
var inst_33908 = (state_34021[(24)]);
var inst_33912 = cljs.core.async.close_BANG_(inst_33908);
var state_34021__$1 = state_34021;
var statearr_34056_35806 = state_34021__$1;
(statearr_34056_35806[(2)] = inst_33912);

(statearr_34056_35806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (22))){
var inst_33932 = (state_34021[(8)]);
var inst_33935 = cljs.core.async.close_BANG_(inst_33932);
var state_34021__$1 = state_34021;
var statearr_34057_35808 = state_34021__$1;
(statearr_34057_35808[(2)] = inst_33935);

(statearr_34057_35808[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (36))){
var inst_33979 = (state_34021[(23)]);
var inst_33983 = cljs.core.chunk_first(inst_33979);
var inst_33985 = cljs.core.chunk_rest(inst_33979);
var inst_33987 = cljs.core.count(inst_33983);
var inst_33961 = inst_33985;
var inst_33962 = inst_33983;
var inst_33963 = inst_33987;
var inst_33964 = (0);
var state_34021__$1 = (function (){var statearr_34058 = state_34021;
(statearr_34058[(19)] = inst_33961);

(statearr_34058[(10)] = inst_33962);

(statearr_34058[(11)] = inst_33964);

(statearr_34058[(20)] = inst_33963);

return statearr_34058;
})();
var statearr_34059_35812 = state_34021__$1;
(statearr_34059_35812[(2)] = null);

(statearr_34059_35812[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (41))){
var inst_33979 = (state_34021[(23)]);
var inst_33996 = (state_34021[(2)]);
var inst_33997 = cljs.core.next(inst_33979);
var inst_33961 = inst_33997;
var inst_33962 = null;
var inst_33963 = (0);
var inst_33964 = (0);
var state_34021__$1 = (function (){var statearr_34060 = state_34021;
(statearr_34060[(19)] = inst_33961);

(statearr_34060[(25)] = inst_33996);

(statearr_34060[(10)] = inst_33962);

(statearr_34060[(11)] = inst_33964);

(statearr_34060[(20)] = inst_33963);

return statearr_34060;
})();
var statearr_34061_35813 = state_34021__$1;
(statearr_34061_35813[(2)] = null);

(statearr_34061_35813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (43))){
var state_34021__$1 = state_34021;
var statearr_34062_35817 = state_34021__$1;
(statearr_34062_35817[(2)] = null);

(statearr_34062_35817[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (29))){
var inst_34005 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34063_35818 = state_34021__$1;
(statearr_34063_35818[(2)] = inst_34005);

(statearr_34063_35818[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (44))){
var inst_34014 = (state_34021[(2)]);
var state_34021__$1 = (function (){var statearr_34064 = state_34021;
(statearr_34064[(26)] = inst_34014);

return statearr_34064;
})();
var statearr_34065_35819 = state_34021__$1;
(statearr_34065_35819[(2)] = null);

(statearr_34065_35819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (6))){
var inst_33952 = (state_34021[(27)]);
var inst_33951 = cljs.core.deref(cs);
var inst_33952__$1 = cljs.core.keys(inst_33951);
var inst_33953 = cljs.core.count(inst_33952__$1);
var inst_33954 = cljs.core.reset_BANG_(dctr,inst_33953);
var inst_33960 = cljs.core.seq(inst_33952__$1);
var inst_33961 = inst_33960;
var inst_33962 = null;
var inst_33963 = (0);
var inst_33964 = (0);
var state_34021__$1 = (function (){var statearr_34069 = state_34021;
(statearr_34069[(19)] = inst_33961);

(statearr_34069[(10)] = inst_33962);

(statearr_34069[(11)] = inst_33964);

(statearr_34069[(27)] = inst_33952__$1);

(statearr_34069[(20)] = inst_33963);

(statearr_34069[(28)] = inst_33954);

return statearr_34069;
})();
var statearr_34070_35821 = state_34021__$1;
(statearr_34070_35821[(2)] = null);

(statearr_34070_35821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (28))){
var inst_33961 = (state_34021[(19)]);
var inst_33979 = (state_34021[(23)]);
var inst_33979__$1 = cljs.core.seq(inst_33961);
var state_34021__$1 = (function (){var statearr_34074 = state_34021;
(statearr_34074[(23)] = inst_33979__$1);

return statearr_34074;
})();
if(inst_33979__$1){
var statearr_34075_35822 = state_34021__$1;
(statearr_34075_35822[(1)] = (33));

} else {
var statearr_34079_35823 = state_34021__$1;
(statearr_34079_35823[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (25))){
var inst_33964 = (state_34021[(11)]);
var inst_33963 = (state_34021[(20)]);
var inst_33966 = (inst_33964 < inst_33963);
var inst_33967 = inst_33966;
var state_34021__$1 = state_34021;
if(cljs.core.truth_(inst_33967)){
var statearr_34080_35824 = state_34021__$1;
(statearr_34080_35824[(1)] = (27));

} else {
var statearr_34081_35825 = state_34021__$1;
(statearr_34081_35825[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (34))){
var state_34021__$1 = state_34021;
var statearr_34082_35829 = state_34021__$1;
(statearr_34082_35829[(2)] = null);

(statearr_34082_35829[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (17))){
var state_34021__$1 = state_34021;
var statearr_34083_35830 = state_34021__$1;
(statearr_34083_35830[(2)] = null);

(statearr_34083_35830[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (3))){
var inst_34019 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34021__$1,inst_34019);
} else {
if((state_val_34022 === (12))){
var inst_33947 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34085_35831 = state_34021__$1;
(statearr_34085_35831[(2)] = inst_33947);

(statearr_34085_35831[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (2))){
var state_34021__$1 = state_34021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34021__$1,(4),ch);
} else {
if((state_val_34022 === (23))){
var state_34021__$1 = state_34021;
var statearr_34089_35832 = state_34021__$1;
(statearr_34089_35832[(2)] = null);

(statearr_34089_35832[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (35))){
var inst_34003 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34094_35833 = state_34021__$1;
(statearr_34094_35833[(2)] = inst_34003);

(statearr_34094_35833[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (19))){
var inst_33919 = (state_34021[(7)]);
var inst_33923 = cljs.core.chunk_first(inst_33919);
var inst_33924 = cljs.core.chunk_rest(inst_33919);
var inst_33925 = cljs.core.count(inst_33923);
var inst_33896 = inst_33924;
var inst_33897 = inst_33923;
var inst_33898 = inst_33925;
var inst_33899 = (0);
var state_34021__$1 = (function (){var statearr_34103 = state_34021;
(statearr_34103[(13)] = inst_33898);

(statearr_34103[(15)] = inst_33899);

(statearr_34103[(16)] = inst_33897);

(statearr_34103[(17)] = inst_33896);

return statearr_34103;
})();
var statearr_34104_35835 = state_34021__$1;
(statearr_34104_35835[(2)] = null);

(statearr_34104_35835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (11))){
var inst_33919 = (state_34021[(7)]);
var inst_33896 = (state_34021[(17)]);
var inst_33919__$1 = cljs.core.seq(inst_33896);
var state_34021__$1 = (function (){var statearr_34109 = state_34021;
(statearr_34109[(7)] = inst_33919__$1);

return statearr_34109;
})();
if(inst_33919__$1){
var statearr_34111_35836 = state_34021__$1;
(statearr_34111_35836[(1)] = (16));

} else {
var statearr_34112_35837 = state_34021__$1;
(statearr_34112_35837[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (9))){
var inst_33949 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34115_35838 = state_34021__$1;
(statearr_34115_35838[(2)] = inst_33949);

(statearr_34115_35838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (5))){
var inst_33894 = cljs.core.deref(cs);
var inst_33895 = cljs.core.seq(inst_33894);
var inst_33896 = inst_33895;
var inst_33897 = null;
var inst_33898 = (0);
var inst_33899 = (0);
var state_34021__$1 = (function (){var statearr_34117 = state_34021;
(statearr_34117[(13)] = inst_33898);

(statearr_34117[(15)] = inst_33899);

(statearr_34117[(16)] = inst_33897);

(statearr_34117[(17)] = inst_33896);

return statearr_34117;
})();
var statearr_34119_35840 = state_34021__$1;
(statearr_34119_35840[(2)] = null);

(statearr_34119_35840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (14))){
var state_34021__$1 = state_34021;
var statearr_34123_35841 = state_34021__$1;
(statearr_34123_35841[(2)] = null);

(statearr_34123_35841[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (45))){
var inst_34011 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34124_35842 = state_34021__$1;
(statearr_34124_35842[(2)] = inst_34011);

(statearr_34124_35842[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (26))){
var inst_33952 = (state_34021[(27)]);
var inst_34007 = (state_34021[(2)]);
var inst_34008 = cljs.core.seq(inst_33952);
var state_34021__$1 = (function (){var statearr_34125 = state_34021;
(statearr_34125[(29)] = inst_34007);

return statearr_34125;
})();
if(inst_34008){
var statearr_34127_35843 = state_34021__$1;
(statearr_34127_35843[(1)] = (42));

} else {
var statearr_34128_35844 = state_34021__$1;
(statearr_34128_35844[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (16))){
var inst_33919 = (state_34021[(7)]);
var inst_33921 = cljs.core.chunked_seq_QMARK_(inst_33919);
var state_34021__$1 = state_34021;
if(inst_33921){
var statearr_34129_35845 = state_34021__$1;
(statearr_34129_35845[(1)] = (19));

} else {
var statearr_34130_35846 = state_34021__$1;
(statearr_34130_35846[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (38))){
var inst_34000 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34134_35847 = state_34021__$1;
(statearr_34134_35847[(2)] = inst_34000);

(statearr_34134_35847[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (30))){
var state_34021__$1 = state_34021;
var statearr_34136_35848 = state_34021__$1;
(statearr_34136_35848[(2)] = null);

(statearr_34136_35848[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (10))){
var inst_33899 = (state_34021[(15)]);
var inst_33897 = (state_34021[(16)]);
var inst_33907 = cljs.core._nth(inst_33897,inst_33899);
var inst_33908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33907,(0),null);
var inst_33909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33907,(1),null);
var state_34021__$1 = (function (){var statearr_34140 = state_34021;
(statearr_34140[(24)] = inst_33908);

return statearr_34140;
})();
if(cljs.core.truth_(inst_33909)){
var statearr_34141_35849 = state_34021__$1;
(statearr_34141_35849[(1)] = (13));

} else {
var statearr_34142_35850 = state_34021__$1;
(statearr_34142_35850[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (18))){
var inst_33945 = (state_34021[(2)]);
var state_34021__$1 = state_34021;
var statearr_34144_35851 = state_34021__$1;
(statearr_34144_35851[(2)] = inst_33945);

(statearr_34144_35851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (42))){
var state_34021__$1 = state_34021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34021__$1,(45),dchan);
} else {
if((state_val_34022 === (37))){
var inst_33887 = (state_34021[(9)]);
var inst_33990 = (state_34021[(22)]);
var inst_33979 = (state_34021[(23)]);
var inst_33990__$1 = cljs.core.first(inst_33979);
var inst_33991 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33990__$1,inst_33887,done);
var state_34021__$1 = (function (){var statearr_34148 = state_34021;
(statearr_34148[(22)] = inst_33990__$1);

return statearr_34148;
})();
if(cljs.core.truth_(inst_33991)){
var statearr_34150_35852 = state_34021__$1;
(statearr_34150_35852[(1)] = (39));

} else {
var statearr_34156_35853 = state_34021__$1;
(statearr_34156_35853[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34022 === (8))){
var inst_33898 = (state_34021[(13)]);
var inst_33899 = (state_34021[(15)]);
var inst_33901 = (inst_33899 < inst_33898);
var inst_33902 = inst_33901;
var state_34021__$1 = state_34021;
if(cljs.core.truth_(inst_33902)){
var statearr_34159_35855 = state_34021__$1;
(statearr_34159_35855[(1)] = (10));

} else {
var statearr_34160_35856 = state_34021__$1;
(statearr_34160_35856[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32887__auto__ = null;
var cljs$core$async$mult_$_state_machine__32887__auto____0 = (function (){
var statearr_34165 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34165[(0)] = cljs$core$async$mult_$_state_machine__32887__auto__);

(statearr_34165[(1)] = (1));

return statearr_34165;
});
var cljs$core$async$mult_$_state_machine__32887__auto____1 = (function (state_34021){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_34021);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e34167){var ex__32890__auto__ = e34167;
var statearr_34168_35861 = state_34021;
(statearr_34168_35861[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_34021[(4)]))){
var statearr_34172_35862 = state_34021;
(statearr_34172_35862[(1)] = cljs.core.first((state_34021[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35865 = state_34021;
state_34021 = G__35865;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32887__auto__ = function(state_34021){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32887__auto____1.call(this,state_34021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32887__auto____0;
cljs$core$async$mult_$_state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32887__auto____1;
return cljs$core$async$mult_$_state_machine__32887__auto__;
})()
})();
var state__33107__auto__ = (function (){var statearr_34174 = f__33106__auto__();
(statearr_34174[(6)] = c__33105__auto___35786);

return statearr_34174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34181 = arguments.length;
switch (G__34181) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35876 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35876(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35884 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35884(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35888 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35888(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35893 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35893(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35894 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35894(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35895 = arguments.length;
var i__5770__auto___35896 = (0);
while(true){
if((i__5770__auto___35896 < len__5769__auto___35895)){
args__5775__auto__.push((arguments[i__5770__auto___35896]));

var G__35897 = (i__5770__auto___35896 + (1));
i__5770__auto___35896 = G__35897;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34222){
var map__34223 = p__34222;
var map__34223__$1 = cljs.core.__destructure_map(map__34223);
var opts = map__34223__$1;
var statearr_34227_35898 = state;
(statearr_34227_35898[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34229_35899 = state;
(statearr_34229_35899[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_34232_35900 = state;
(statearr_34232_35900[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34203){
var G__34204 = cljs.core.first(seq34203);
var seq34203__$1 = cljs.core.next(seq34203);
var G__34205 = cljs.core.first(seq34203__$1);
var seq34203__$2 = cljs.core.next(seq34203__$1);
var G__34206 = cljs.core.first(seq34203__$2);
var seq34203__$3 = cljs.core.next(seq34203__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34204,G__34205,G__34206,seq34203__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34254 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34254 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34255){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34255 = meta34255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34256,meta34255__$1){
var self__ = this;
var _34256__$1 = this;
return (new cljs.core.async.t_cljs$core$async34254(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34255__$1));
}));

(cljs.core.async.t_cljs$core$async34254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34256){
var self__ = this;
var _34256__$1 = this;
return self__.meta34255;
}));

(cljs.core.async.t_cljs$core$async34254.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34254.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34254.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34254.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34254.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34254.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34254.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34254.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34255","meta34255",1579921586,null)], null);
}));

(cljs.core.async.t_cljs$core$async34254.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34254");

(cljs.core.async.t_cljs$core$async34254.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34254");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34254.
 */
cljs.core.async.__GT_t_cljs$core$async34254 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34254(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34255){
return (new cljs.core.async.t_cljs$core$async34254(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34255));
});

}

return (new cljs.core.async.t_cljs$core$async34254(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33105__auto___35915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = (function (state_34359){
var state_val_34360 = (state_34359[(1)]);
if((state_val_34360 === (7))){
var inst_34318 = (state_34359[(2)]);
var state_34359__$1 = state_34359;
if(cljs.core.truth_(inst_34318)){
var statearr_34365_35916 = state_34359__$1;
(statearr_34365_35916[(1)] = (8));

} else {
var statearr_34366_35917 = state_34359__$1;
(statearr_34366_35917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (20))){
var inst_34311 = (state_34359[(7)]);
var state_34359__$1 = state_34359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34359__$1,(23),out,inst_34311);
} else {
if((state_val_34360 === (1))){
var inst_34290 = calc_state();
var inst_34291 = cljs.core.__destructure_map(inst_34290);
var inst_34292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34291,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34291,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34291,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34295 = inst_34290;
var state_34359__$1 = (function (){var statearr_34371 = state_34359;
(statearr_34371[(8)] = inst_34292);

(statearr_34371[(9)] = inst_34293);

(statearr_34371[(10)] = inst_34294);

(statearr_34371[(11)] = inst_34295);

return statearr_34371;
})();
var statearr_34374_35918 = state_34359__$1;
(statearr_34374_35918[(2)] = null);

(statearr_34374_35918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (24))){
var inst_34298 = (state_34359[(12)]);
var inst_34295 = inst_34298;
var state_34359__$1 = (function (){var statearr_34376 = state_34359;
(statearr_34376[(11)] = inst_34295);

return statearr_34376;
})();
var statearr_34378_35919 = state_34359__$1;
(statearr_34378_35919[(2)] = null);

(statearr_34378_35919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (4))){
var inst_34313 = (state_34359[(13)]);
var inst_34311 = (state_34359[(7)]);
var inst_34309 = (state_34359[(2)]);
var inst_34311__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34309,(0),null);
var inst_34312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34309,(1),null);
var inst_34313__$1 = (inst_34311__$1 == null);
var state_34359__$1 = (function (){var statearr_34382 = state_34359;
(statearr_34382[(13)] = inst_34313__$1);

(statearr_34382[(7)] = inst_34311__$1);

(statearr_34382[(14)] = inst_34312);

return statearr_34382;
})();
if(cljs.core.truth_(inst_34313__$1)){
var statearr_34385_35926 = state_34359__$1;
(statearr_34385_35926[(1)] = (5));

} else {
var statearr_34386_35927 = state_34359__$1;
(statearr_34386_35927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (15))){
var inst_34332 = (state_34359[(15)]);
var inst_34300 = (state_34359[(16)]);
var inst_34332__$1 = cljs.core.empty_QMARK_(inst_34300);
var state_34359__$1 = (function (){var statearr_34390 = state_34359;
(statearr_34390[(15)] = inst_34332__$1);

return statearr_34390;
})();
if(inst_34332__$1){
var statearr_34391_35928 = state_34359__$1;
(statearr_34391_35928[(1)] = (17));

} else {
var statearr_34392_35929 = state_34359__$1;
(statearr_34392_35929[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (21))){
var inst_34298 = (state_34359[(12)]);
var inst_34295 = inst_34298;
var state_34359__$1 = (function (){var statearr_34397 = state_34359;
(statearr_34397[(11)] = inst_34295);

return statearr_34397;
})();
var statearr_34398_35930 = state_34359__$1;
(statearr_34398_35930[(2)] = null);

(statearr_34398_35930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (13))){
var inst_34325 = (state_34359[(2)]);
var inst_34326 = calc_state();
var inst_34295 = inst_34326;
var state_34359__$1 = (function (){var statearr_34399 = state_34359;
(statearr_34399[(17)] = inst_34325);

(statearr_34399[(11)] = inst_34295);

return statearr_34399;
})();
var statearr_34404_35931 = state_34359__$1;
(statearr_34404_35931[(2)] = null);

(statearr_34404_35931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (22))){
var inst_34352 = (state_34359[(2)]);
var state_34359__$1 = state_34359;
var statearr_34406_35932 = state_34359__$1;
(statearr_34406_35932[(2)] = inst_34352);

(statearr_34406_35932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (6))){
var inst_34312 = (state_34359[(14)]);
var inst_34316 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34312,change);
var state_34359__$1 = state_34359;
var statearr_34407_35933 = state_34359__$1;
(statearr_34407_35933[(2)] = inst_34316);

(statearr_34407_35933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (25))){
var state_34359__$1 = state_34359;
var statearr_34408_35934 = state_34359__$1;
(statearr_34408_35934[(2)] = null);

(statearr_34408_35934[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (17))){
var inst_34301 = (state_34359[(18)]);
var inst_34312 = (state_34359[(14)]);
var inst_34334 = (inst_34301.cljs$core$IFn$_invoke$arity$1 ? inst_34301.cljs$core$IFn$_invoke$arity$1(inst_34312) : inst_34301.call(null,inst_34312));
var inst_34335 = cljs.core.not(inst_34334);
var state_34359__$1 = state_34359;
var statearr_34409_35935 = state_34359__$1;
(statearr_34409_35935[(2)] = inst_34335);

(statearr_34409_35935[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (3))){
var inst_34356 = (state_34359[(2)]);
var state_34359__$1 = state_34359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34359__$1,inst_34356);
} else {
if((state_val_34360 === (12))){
var state_34359__$1 = state_34359;
var statearr_34410_35936 = state_34359__$1;
(statearr_34410_35936[(2)] = null);

(statearr_34410_35936[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (2))){
var inst_34298 = (state_34359[(12)]);
var inst_34295 = (state_34359[(11)]);
var inst_34298__$1 = cljs.core.__destructure_map(inst_34295);
var inst_34300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34298__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34298__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34298__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34359__$1 = (function (){var statearr_34415 = state_34359;
(statearr_34415[(18)] = inst_34301);

(statearr_34415[(12)] = inst_34298__$1);

(statearr_34415[(16)] = inst_34300);

return statearr_34415;
})();
return cljs.core.async.ioc_alts_BANG_(state_34359__$1,(4),inst_34302);
} else {
if((state_val_34360 === (23))){
var inst_34343 = (state_34359[(2)]);
var state_34359__$1 = state_34359;
if(cljs.core.truth_(inst_34343)){
var statearr_34420_35937 = state_34359__$1;
(statearr_34420_35937[(1)] = (24));

} else {
var statearr_34421_35938 = state_34359__$1;
(statearr_34421_35938[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (19))){
var inst_34338 = (state_34359[(2)]);
var state_34359__$1 = state_34359;
var statearr_34422_35939 = state_34359__$1;
(statearr_34422_35939[(2)] = inst_34338);

(statearr_34422_35939[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (11))){
var inst_34312 = (state_34359[(14)]);
var inst_34322 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34312);
var state_34359__$1 = state_34359;
var statearr_34426_35940 = state_34359__$1;
(statearr_34426_35940[(2)] = inst_34322);

(statearr_34426_35940[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (9))){
var inst_34329 = (state_34359[(19)]);
var inst_34312 = (state_34359[(14)]);
var inst_34300 = (state_34359[(16)]);
var inst_34329__$1 = (inst_34300.cljs$core$IFn$_invoke$arity$1 ? inst_34300.cljs$core$IFn$_invoke$arity$1(inst_34312) : inst_34300.call(null,inst_34312));
var state_34359__$1 = (function (){var statearr_34428 = state_34359;
(statearr_34428[(19)] = inst_34329__$1);

return statearr_34428;
})();
if(cljs.core.truth_(inst_34329__$1)){
var statearr_34429_35941 = state_34359__$1;
(statearr_34429_35941[(1)] = (14));

} else {
var statearr_34430_35942 = state_34359__$1;
(statearr_34430_35942[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (5))){
var inst_34313 = (state_34359[(13)]);
var state_34359__$1 = state_34359;
var statearr_34435_35943 = state_34359__$1;
(statearr_34435_35943[(2)] = inst_34313);

(statearr_34435_35943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (14))){
var inst_34329 = (state_34359[(19)]);
var state_34359__$1 = state_34359;
var statearr_34436_35944 = state_34359__$1;
(statearr_34436_35944[(2)] = inst_34329);

(statearr_34436_35944[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (26))){
var inst_34348 = (state_34359[(2)]);
var state_34359__$1 = state_34359;
var statearr_34437_35945 = state_34359__$1;
(statearr_34437_35945[(2)] = inst_34348);

(statearr_34437_35945[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (16))){
var inst_34340 = (state_34359[(2)]);
var state_34359__$1 = state_34359;
if(cljs.core.truth_(inst_34340)){
var statearr_34441_35946 = state_34359__$1;
(statearr_34441_35946[(1)] = (20));

} else {
var statearr_34443_35947 = state_34359__$1;
(statearr_34443_35947[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (10))){
var inst_34354 = (state_34359[(2)]);
var state_34359__$1 = state_34359;
var statearr_34444_35948 = state_34359__$1;
(statearr_34444_35948[(2)] = inst_34354);

(statearr_34444_35948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (18))){
var inst_34332 = (state_34359[(15)]);
var state_34359__$1 = state_34359;
var statearr_34445_35950 = state_34359__$1;
(statearr_34445_35950[(2)] = inst_34332);

(statearr_34445_35950[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (8))){
var inst_34311 = (state_34359[(7)]);
var inst_34320 = (inst_34311 == null);
var state_34359__$1 = state_34359;
if(cljs.core.truth_(inst_34320)){
var statearr_34446_35954 = state_34359__$1;
(statearr_34446_35954[(1)] = (11));

} else {
var statearr_34447_35955 = state_34359__$1;
(statearr_34447_35955[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32887__auto__ = null;
var cljs$core$async$mix_$_state_machine__32887__auto____0 = (function (){
var statearr_34449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34449[(0)] = cljs$core$async$mix_$_state_machine__32887__auto__);

(statearr_34449[(1)] = (1));

return statearr_34449;
});
var cljs$core$async$mix_$_state_machine__32887__auto____1 = (function (state_34359){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_34359);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e34450){var ex__32890__auto__ = e34450;
var statearr_34451_35956 = state_34359;
(statearr_34451_35956[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_34359[(4)]))){
var statearr_34452_35957 = state_34359;
(statearr_34452_35957[(1)] = cljs.core.first((state_34359[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35958 = state_34359;
state_34359 = G__35958;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32887__auto__ = function(state_34359){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32887__auto____1.call(this,state_34359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32887__auto____0;
cljs$core$async$mix_$_state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32887__auto____1;
return cljs$core$async$mix_$_state_machine__32887__auto__;
})()
})();
var state__33107__auto__ = (function (){var statearr_34464 = f__33106__auto__();
(statearr_34464[(6)] = c__33105__auto___35915);

return statearr_34464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35962 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35962(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35964 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35964(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35969 = (function() {
var G__35970 = null;
var G__35970__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35970__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35970 = function(p,v){
switch(arguments.length){
case 1:
return G__35970__1.call(this,p);
case 2:
return G__35970__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35970.cljs$core$IFn$_invoke$arity$1 = G__35970__1;
G__35970.cljs$core$IFn$_invoke$arity$2 = G__35970__2;
return G__35970;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34496 = arguments.length;
switch (G__34496) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35969(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35969(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34508 = arguments.length;
switch (G__34508) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34502_SHARP_){
if(cljs.core.truth_((p1__34502_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34502_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34502_SHARP_.call(null,topic)))){
return p1__34502_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34502_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34521 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34521 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34522){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34522 = meta34522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34523,meta34522__$1){
var self__ = this;
var _34523__$1 = this;
return (new cljs.core.async.t_cljs$core$async34521(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34522__$1));
}));

(cljs.core.async.t_cljs$core$async34521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34523){
var self__ = this;
var _34523__$1 = this;
return self__.meta34522;
}));

(cljs.core.async.t_cljs$core$async34521.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34521.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34521.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34521.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34521.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34521.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34521.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34522","meta34522",-990163067,null)], null);
}));

(cljs.core.async.t_cljs$core$async34521.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34521");

(cljs.core.async.t_cljs$core$async34521.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34521");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34521.
 */
cljs.core.async.__GT_t_cljs$core$async34521 = (function cljs$core$async$__GT_t_cljs$core$async34521(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34522){
return (new cljs.core.async.t_cljs$core$async34521(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34522));
});

}

return (new cljs.core.async.t_cljs$core$async34521(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33105__auto___35975 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = (function (state_34602){
var state_val_34603 = (state_34602[(1)]);
if((state_val_34603 === (7))){
var inst_34598 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
var statearr_34604_35977 = state_34602__$1;
(statearr_34604_35977[(2)] = inst_34598);

(statearr_34604_35977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (20))){
var state_34602__$1 = state_34602;
var statearr_34605_35978 = state_34602__$1;
(statearr_34605_35978[(2)] = null);

(statearr_34605_35978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (1))){
var state_34602__$1 = state_34602;
var statearr_34606_35979 = state_34602__$1;
(statearr_34606_35979[(2)] = null);

(statearr_34606_35979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (24))){
var inst_34581 = (state_34602[(7)]);
var inst_34590 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34581);
var state_34602__$1 = state_34602;
var statearr_34607_35980 = state_34602__$1;
(statearr_34607_35980[(2)] = inst_34590);

(statearr_34607_35980[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (4))){
var inst_34531 = (state_34602[(8)]);
var inst_34531__$1 = (state_34602[(2)]);
var inst_34532 = (inst_34531__$1 == null);
var state_34602__$1 = (function (){var statearr_34608 = state_34602;
(statearr_34608[(8)] = inst_34531__$1);

return statearr_34608;
})();
if(cljs.core.truth_(inst_34532)){
var statearr_34609_35981 = state_34602__$1;
(statearr_34609_35981[(1)] = (5));

} else {
var statearr_34610_35982 = state_34602__$1;
(statearr_34610_35982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (15))){
var inst_34575 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
var statearr_34611_35983 = state_34602__$1;
(statearr_34611_35983[(2)] = inst_34575);

(statearr_34611_35983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (21))){
var inst_34595 = (state_34602[(2)]);
var state_34602__$1 = (function (){var statearr_34612 = state_34602;
(statearr_34612[(9)] = inst_34595);

return statearr_34612;
})();
var statearr_34613_35986 = state_34602__$1;
(statearr_34613_35986[(2)] = null);

(statearr_34613_35986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (13))){
var inst_34557 = (state_34602[(10)]);
var inst_34559 = cljs.core.chunked_seq_QMARK_(inst_34557);
var state_34602__$1 = state_34602;
if(inst_34559){
var statearr_34614_35990 = state_34602__$1;
(statearr_34614_35990[(1)] = (16));

} else {
var statearr_34615_35991 = state_34602__$1;
(statearr_34615_35991[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (22))){
var inst_34587 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
if(cljs.core.truth_(inst_34587)){
var statearr_34616_35992 = state_34602__$1;
(statearr_34616_35992[(1)] = (23));

} else {
var statearr_34617_35993 = state_34602__$1;
(statearr_34617_35993[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (6))){
var inst_34581 = (state_34602[(7)]);
var inst_34583 = (state_34602[(11)]);
var inst_34531 = (state_34602[(8)]);
var inst_34581__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34531) : topic_fn.call(null,inst_34531));
var inst_34582 = cljs.core.deref(mults);
var inst_34583__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34582,inst_34581__$1);
var state_34602__$1 = (function (){var statearr_34618 = state_34602;
(statearr_34618[(7)] = inst_34581__$1);

(statearr_34618[(11)] = inst_34583__$1);

return statearr_34618;
})();
if(cljs.core.truth_(inst_34583__$1)){
var statearr_34619_35994 = state_34602__$1;
(statearr_34619_35994[(1)] = (19));

} else {
var statearr_34620_35995 = state_34602__$1;
(statearr_34620_35995[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (25))){
var inst_34592 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
var statearr_34622_35996 = state_34602__$1;
(statearr_34622_35996[(2)] = inst_34592);

(statearr_34622_35996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (17))){
var inst_34557 = (state_34602[(10)]);
var inst_34566 = cljs.core.first(inst_34557);
var inst_34567 = cljs.core.async.muxch_STAR_(inst_34566);
var inst_34568 = cljs.core.async.close_BANG_(inst_34567);
var inst_34569 = cljs.core.next(inst_34557);
var inst_34541 = inst_34569;
var inst_34542 = null;
var inst_34543 = (0);
var inst_34544 = (0);
var state_34602__$1 = (function (){var statearr_34624 = state_34602;
(statearr_34624[(12)] = inst_34542);

(statearr_34624[(13)] = inst_34543);

(statearr_34624[(14)] = inst_34544);

(statearr_34624[(15)] = inst_34541);

(statearr_34624[(16)] = inst_34568);

return statearr_34624;
})();
var statearr_34625_35997 = state_34602__$1;
(statearr_34625_35997[(2)] = null);

(statearr_34625_35997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (3))){
var inst_34600 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34602__$1,inst_34600);
} else {
if((state_val_34603 === (12))){
var inst_34577 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
var statearr_34626_35998 = state_34602__$1;
(statearr_34626_35998[(2)] = inst_34577);

(statearr_34626_35998[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (2))){
var state_34602__$1 = state_34602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34602__$1,(4),ch);
} else {
if((state_val_34603 === (23))){
var state_34602__$1 = state_34602;
var statearr_34627_35999 = state_34602__$1;
(statearr_34627_35999[(2)] = null);

(statearr_34627_35999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (19))){
var inst_34583 = (state_34602[(11)]);
var inst_34531 = (state_34602[(8)]);
var inst_34585 = cljs.core.async.muxch_STAR_(inst_34583);
var state_34602__$1 = state_34602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34602__$1,(22),inst_34585,inst_34531);
} else {
if((state_val_34603 === (11))){
var inst_34541 = (state_34602[(15)]);
var inst_34557 = (state_34602[(10)]);
var inst_34557__$1 = cljs.core.seq(inst_34541);
var state_34602__$1 = (function (){var statearr_34629 = state_34602;
(statearr_34629[(10)] = inst_34557__$1);

return statearr_34629;
})();
if(inst_34557__$1){
var statearr_34630_36000 = state_34602__$1;
(statearr_34630_36000[(1)] = (13));

} else {
var statearr_34631_36001 = state_34602__$1;
(statearr_34631_36001[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (9))){
var inst_34579 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
var statearr_34632_36003 = state_34602__$1;
(statearr_34632_36003[(2)] = inst_34579);

(statearr_34632_36003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (5))){
var inst_34538 = cljs.core.deref(mults);
var inst_34539 = cljs.core.vals(inst_34538);
var inst_34540 = cljs.core.seq(inst_34539);
var inst_34541 = inst_34540;
var inst_34542 = null;
var inst_34543 = (0);
var inst_34544 = (0);
var state_34602__$1 = (function (){var statearr_34634 = state_34602;
(statearr_34634[(12)] = inst_34542);

(statearr_34634[(13)] = inst_34543);

(statearr_34634[(14)] = inst_34544);

(statearr_34634[(15)] = inst_34541);

return statearr_34634;
})();
var statearr_34635_36005 = state_34602__$1;
(statearr_34635_36005[(2)] = null);

(statearr_34635_36005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (14))){
var state_34602__$1 = state_34602;
var statearr_34639_36006 = state_34602__$1;
(statearr_34639_36006[(2)] = null);

(statearr_34639_36006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (16))){
var inst_34557 = (state_34602[(10)]);
var inst_34561 = cljs.core.chunk_first(inst_34557);
var inst_34562 = cljs.core.chunk_rest(inst_34557);
var inst_34563 = cljs.core.count(inst_34561);
var inst_34541 = inst_34562;
var inst_34542 = inst_34561;
var inst_34543 = inst_34563;
var inst_34544 = (0);
var state_34602__$1 = (function (){var statearr_34640 = state_34602;
(statearr_34640[(12)] = inst_34542);

(statearr_34640[(13)] = inst_34543);

(statearr_34640[(14)] = inst_34544);

(statearr_34640[(15)] = inst_34541);

return statearr_34640;
})();
var statearr_34641_36007 = state_34602__$1;
(statearr_34641_36007[(2)] = null);

(statearr_34641_36007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (10))){
var inst_34542 = (state_34602[(12)]);
var inst_34543 = (state_34602[(13)]);
var inst_34544 = (state_34602[(14)]);
var inst_34541 = (state_34602[(15)]);
var inst_34549 = cljs.core._nth(inst_34542,inst_34544);
var inst_34550 = cljs.core.async.muxch_STAR_(inst_34549);
var inst_34551 = cljs.core.async.close_BANG_(inst_34550);
var inst_34552 = (inst_34544 + (1));
var tmp34636 = inst_34542;
var tmp34637 = inst_34543;
var tmp34638 = inst_34541;
var inst_34541__$1 = tmp34638;
var inst_34542__$1 = tmp34636;
var inst_34543__$1 = tmp34637;
var inst_34544__$1 = inst_34552;
var state_34602__$1 = (function (){var statearr_34642 = state_34602;
(statearr_34642[(12)] = inst_34542__$1);

(statearr_34642[(13)] = inst_34543__$1);

(statearr_34642[(14)] = inst_34544__$1);

(statearr_34642[(15)] = inst_34541__$1);

(statearr_34642[(17)] = inst_34551);

return statearr_34642;
})();
var statearr_34643_36008 = state_34602__$1;
(statearr_34643_36008[(2)] = null);

(statearr_34643_36008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (18))){
var inst_34572 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
var statearr_34644_36009 = state_34602__$1;
(statearr_34644_36009[(2)] = inst_34572);

(statearr_34644_36009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (8))){
var inst_34543 = (state_34602[(13)]);
var inst_34544 = (state_34602[(14)]);
var inst_34546 = (inst_34544 < inst_34543);
var inst_34547 = inst_34546;
var state_34602__$1 = state_34602;
if(cljs.core.truth_(inst_34547)){
var statearr_34645_36010 = state_34602__$1;
(statearr_34645_36010[(1)] = (10));

} else {
var statearr_34646_36011 = state_34602__$1;
(statearr_34646_36011[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32887__auto__ = null;
var cljs$core$async$state_machine__32887__auto____0 = (function (){
var statearr_34647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34647[(0)] = cljs$core$async$state_machine__32887__auto__);

(statearr_34647[(1)] = (1));

return statearr_34647;
});
var cljs$core$async$state_machine__32887__auto____1 = (function (state_34602){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_34602);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e34648){var ex__32890__auto__ = e34648;
var statearr_34650_36012 = state_34602;
(statearr_34650_36012[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_34602[(4)]))){
var statearr_34651_36013 = state_34602;
(statearr_34651_36013[(1)] = cljs.core.first((state_34602[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36014 = state_34602;
state_34602 = G__36014;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$state_machine__32887__auto__ = function(state_34602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32887__auto____1.call(this,state_34602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32887__auto____0;
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32887__auto____1;
return cljs$core$async$state_machine__32887__auto__;
})()
})();
var state__33107__auto__ = (function (){var statearr_34653 = f__33106__auto__();
(statearr_34653[(6)] = c__33105__auto___35975);

return statearr_34653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34655 = arguments.length;
switch (G__34655) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34657 = arguments.length;
switch (G__34657) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34659 = arguments.length;
switch (G__34659) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33105__auto___36026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = (function (state_34713){
var state_val_34714 = (state_34713[(1)]);
if((state_val_34714 === (7))){
var state_34713__$1 = state_34713;
var statearr_34715_36027 = state_34713__$1;
(statearr_34715_36027[(2)] = null);

(statearr_34715_36027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (1))){
var state_34713__$1 = state_34713;
var statearr_34716_36028 = state_34713__$1;
(statearr_34716_36028[(2)] = null);

(statearr_34716_36028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (4))){
var inst_34665 = (state_34713[(7)]);
var inst_34664 = (state_34713[(8)]);
var inst_34667 = (inst_34665 < inst_34664);
var state_34713__$1 = state_34713;
if(cljs.core.truth_(inst_34667)){
var statearr_34720_36029 = state_34713__$1;
(statearr_34720_36029[(1)] = (6));

} else {
var statearr_34721_36030 = state_34713__$1;
(statearr_34721_36030[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (15))){
var inst_34696 = (state_34713[(9)]);
var inst_34702 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34696);
var state_34713__$1 = state_34713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34713__$1,(17),out,inst_34702);
} else {
if((state_val_34714 === (13))){
var inst_34696 = (state_34713[(9)]);
var inst_34696__$1 = (state_34713[(2)]);
var inst_34697 = cljs.core.some(cljs.core.nil_QMARK_,inst_34696__$1);
var state_34713__$1 = (function (){var statearr_34722 = state_34713;
(statearr_34722[(9)] = inst_34696__$1);

return statearr_34722;
})();
if(cljs.core.truth_(inst_34697)){
var statearr_34723_36031 = state_34713__$1;
(statearr_34723_36031[(1)] = (14));

} else {
var statearr_34724_36032 = state_34713__$1;
(statearr_34724_36032[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (6))){
var state_34713__$1 = state_34713;
var statearr_34725_36033 = state_34713__$1;
(statearr_34725_36033[(2)] = null);

(statearr_34725_36033[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (17))){
var inst_34704 = (state_34713[(2)]);
var state_34713__$1 = (function (){var statearr_34746 = state_34713;
(statearr_34746[(10)] = inst_34704);

return statearr_34746;
})();
var statearr_34747_36034 = state_34713__$1;
(statearr_34747_36034[(2)] = null);

(statearr_34747_36034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (3))){
var inst_34709 = (state_34713[(2)]);
var state_34713__$1 = state_34713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34713__$1,inst_34709);
} else {
if((state_val_34714 === (12))){
var _ = (function (){var statearr_34755 = state_34713;
(statearr_34755[(4)] = cljs.core.rest((state_34713[(4)])));

return statearr_34755;
})();
var state_34713__$1 = state_34713;
var ex34745 = (state_34713__$1[(2)]);
var statearr_34756_36036 = state_34713__$1;
(statearr_34756_36036[(5)] = ex34745);


if((ex34745 instanceof Object)){
var statearr_34760_36040 = state_34713__$1;
(statearr_34760_36040[(1)] = (11));

(statearr_34760_36040[(5)] = null);

} else {
throw ex34745;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (2))){
var inst_34663 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34664 = cnt;
var inst_34665 = (0);
var state_34713__$1 = (function (){var statearr_34764 = state_34713;
(statearr_34764[(7)] = inst_34665);

(statearr_34764[(11)] = inst_34663);

(statearr_34764[(8)] = inst_34664);

return statearr_34764;
})();
var statearr_34765_36044 = state_34713__$1;
(statearr_34765_36044[(2)] = null);

(statearr_34765_36044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (11))){
var inst_34674 = (state_34713[(2)]);
var inst_34675 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34713__$1 = (function (){var statearr_34766 = state_34713;
(statearr_34766[(12)] = inst_34674);

return statearr_34766;
})();
var statearr_34767_36045 = state_34713__$1;
(statearr_34767_36045[(2)] = inst_34675);

(statearr_34767_36045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (9))){
var inst_34665 = (state_34713[(7)]);
var _ = (function (){var statearr_34768 = state_34713;
(statearr_34768[(4)] = cljs.core.cons((12),(state_34713[(4)])));

return statearr_34768;
})();
var inst_34682 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34665) : chs__$1.call(null,inst_34665));
var inst_34683 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34665) : done.call(null,inst_34665));
var inst_34684 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34682,inst_34683);
var ___$1 = (function (){var statearr_34769 = state_34713;
(statearr_34769[(4)] = cljs.core.rest((state_34713[(4)])));

return statearr_34769;
})();
var state_34713__$1 = state_34713;
var statearr_34770_36049 = state_34713__$1;
(statearr_34770_36049[(2)] = inst_34684);

(statearr_34770_36049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (5))){
var inst_34694 = (state_34713[(2)]);
var state_34713__$1 = (function (){var statearr_34772 = state_34713;
(statearr_34772[(13)] = inst_34694);

return statearr_34772;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34713__$1,(13),dchan);
} else {
if((state_val_34714 === (14))){
var inst_34700 = cljs.core.async.close_BANG_(out);
var state_34713__$1 = state_34713;
var statearr_34776_36050 = state_34713__$1;
(statearr_34776_36050[(2)] = inst_34700);

(statearr_34776_36050[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (16))){
var inst_34707 = (state_34713[(2)]);
var state_34713__$1 = state_34713;
var statearr_34777_36054 = state_34713__$1;
(statearr_34777_36054[(2)] = inst_34707);

(statearr_34777_36054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (10))){
var inst_34665 = (state_34713[(7)]);
var inst_34687 = (state_34713[(2)]);
var inst_34688 = (inst_34665 + (1));
var inst_34665__$1 = inst_34688;
var state_34713__$1 = (function (){var statearr_34778 = state_34713;
(statearr_34778[(7)] = inst_34665__$1);

(statearr_34778[(14)] = inst_34687);

return statearr_34778;
})();
var statearr_34779_36055 = state_34713__$1;
(statearr_34779_36055[(2)] = null);

(statearr_34779_36055[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (8))){
var inst_34692 = (state_34713[(2)]);
var state_34713__$1 = state_34713;
var statearr_34780_36056 = state_34713__$1;
(statearr_34780_36056[(2)] = inst_34692);

(statearr_34780_36056[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32887__auto__ = null;
var cljs$core$async$state_machine__32887__auto____0 = (function (){
var statearr_34781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34781[(0)] = cljs$core$async$state_machine__32887__auto__);

(statearr_34781[(1)] = (1));

return statearr_34781;
});
var cljs$core$async$state_machine__32887__auto____1 = (function (state_34713){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_34713);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e34782){var ex__32890__auto__ = e34782;
var statearr_34783_36061 = state_34713;
(statearr_34783_36061[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_34713[(4)]))){
var statearr_34784_36065 = state_34713;
(statearr_34784_36065[(1)] = cljs.core.first((state_34713[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36070 = state_34713;
state_34713 = G__36070;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$state_machine__32887__auto__ = function(state_34713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32887__auto____1.call(this,state_34713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32887__auto____0;
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32887__auto____1;
return cljs$core$async$state_machine__32887__auto__;
})()
})();
var state__33107__auto__ = (function (){var statearr_34786 = f__33106__auto__();
(statearr_34786[(6)] = c__33105__auto___36026);

return statearr_34786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34794 = arguments.length;
switch (G__34794) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33105__auto___36076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = (function (state_34828){
var state_val_34829 = (state_34828[(1)]);
if((state_val_34829 === (7))){
var inst_34808 = (state_34828[(7)]);
var inst_34807 = (state_34828[(8)]);
var inst_34807__$1 = (state_34828[(2)]);
var inst_34808__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34807__$1,(0),null);
var inst_34809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34807__$1,(1),null);
var inst_34810 = (inst_34808__$1 == null);
var state_34828__$1 = (function (){var statearr_34832 = state_34828;
(statearr_34832[(7)] = inst_34808__$1);

(statearr_34832[(8)] = inst_34807__$1);

(statearr_34832[(9)] = inst_34809);

return statearr_34832;
})();
if(cljs.core.truth_(inst_34810)){
var statearr_34833_36077 = state_34828__$1;
(statearr_34833_36077[(1)] = (8));

} else {
var statearr_34834_36078 = state_34828__$1;
(statearr_34834_36078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34829 === (1))){
var inst_34797 = cljs.core.vec(chs);
var inst_34798 = inst_34797;
var state_34828__$1 = (function (){var statearr_34836 = state_34828;
(statearr_34836[(10)] = inst_34798);

return statearr_34836;
})();
var statearr_34837_36079 = state_34828__$1;
(statearr_34837_36079[(2)] = null);

(statearr_34837_36079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34829 === (4))){
var inst_34798 = (state_34828[(10)]);
var state_34828__$1 = state_34828;
return cljs.core.async.ioc_alts_BANG_(state_34828__$1,(7),inst_34798);
} else {
if((state_val_34829 === (6))){
var inst_34824 = (state_34828[(2)]);
var state_34828__$1 = state_34828;
var statearr_34842_36081 = state_34828__$1;
(statearr_34842_36081[(2)] = inst_34824);

(statearr_34842_36081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34829 === (3))){
var inst_34826 = (state_34828[(2)]);
var state_34828__$1 = state_34828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34828__$1,inst_34826);
} else {
if((state_val_34829 === (2))){
var inst_34798 = (state_34828[(10)]);
var inst_34800 = cljs.core.count(inst_34798);
var inst_34801 = (inst_34800 > (0));
var state_34828__$1 = state_34828;
if(cljs.core.truth_(inst_34801)){
var statearr_34844_36083 = state_34828__$1;
(statearr_34844_36083[(1)] = (4));

} else {
var statearr_34845_36084 = state_34828__$1;
(statearr_34845_36084[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34829 === (11))){
var inst_34798 = (state_34828[(10)]);
var inst_34817 = (state_34828[(2)]);
var tmp34843 = inst_34798;
var inst_34798__$1 = tmp34843;
var state_34828__$1 = (function (){var statearr_34846 = state_34828;
(statearr_34846[(10)] = inst_34798__$1);

(statearr_34846[(11)] = inst_34817);

return statearr_34846;
})();
var statearr_34847_36085 = state_34828__$1;
(statearr_34847_36085[(2)] = null);

(statearr_34847_36085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34829 === (9))){
var inst_34808 = (state_34828[(7)]);
var state_34828__$1 = state_34828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34828__$1,(11),out,inst_34808);
} else {
if((state_val_34829 === (5))){
var inst_34822 = cljs.core.async.close_BANG_(out);
var state_34828__$1 = state_34828;
var statearr_34848_36086 = state_34828__$1;
(statearr_34848_36086[(2)] = inst_34822);

(statearr_34848_36086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34829 === (10))){
var inst_34820 = (state_34828[(2)]);
var state_34828__$1 = state_34828;
var statearr_34849_36087 = state_34828__$1;
(statearr_34849_36087[(2)] = inst_34820);

(statearr_34849_36087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34829 === (8))){
var inst_34798 = (state_34828[(10)]);
var inst_34808 = (state_34828[(7)]);
var inst_34807 = (state_34828[(8)]);
var inst_34809 = (state_34828[(9)]);
var inst_34812 = (function (){var cs = inst_34798;
var vec__34803 = inst_34807;
var v = inst_34808;
var c = inst_34809;
return (function (p1__34790_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34790_SHARP_);
});
})();
var inst_34813 = cljs.core.filterv(inst_34812,inst_34798);
var inst_34798__$1 = inst_34813;
var state_34828__$1 = (function (){var statearr_34850 = state_34828;
(statearr_34850[(10)] = inst_34798__$1);

return statearr_34850;
})();
var statearr_34851_36088 = state_34828__$1;
(statearr_34851_36088[(2)] = null);

(statearr_34851_36088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32887__auto__ = null;
var cljs$core$async$state_machine__32887__auto____0 = (function (){
var statearr_34852 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34852[(0)] = cljs$core$async$state_machine__32887__auto__);

(statearr_34852[(1)] = (1));

return statearr_34852;
});
var cljs$core$async$state_machine__32887__auto____1 = (function (state_34828){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_34828);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e34853){var ex__32890__auto__ = e34853;
var statearr_34854_36089 = state_34828;
(statearr_34854_36089[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_34828[(4)]))){
var statearr_34855_36090 = state_34828;
(statearr_34855_36090[(1)] = cljs.core.first((state_34828[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36091 = state_34828;
state_34828 = G__36091;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$state_machine__32887__auto__ = function(state_34828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32887__auto____1.call(this,state_34828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32887__auto____0;
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32887__auto____1;
return cljs$core$async$state_machine__32887__auto__;
})()
})();
var state__33107__auto__ = (function (){var statearr_34856 = f__33106__auto__();
(statearr_34856[(6)] = c__33105__auto___36076);

return statearr_34856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34863 = arguments.length;
switch (G__34863) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33105__auto___36093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = (function (state_34889){
var state_val_34890 = (state_34889[(1)]);
if((state_val_34890 === (7))){
var inst_34871 = (state_34889[(7)]);
var inst_34871__$1 = (state_34889[(2)]);
var inst_34872 = (inst_34871__$1 == null);
var inst_34873 = cljs.core.not(inst_34872);
var state_34889__$1 = (function (){var statearr_34893 = state_34889;
(statearr_34893[(7)] = inst_34871__$1);

return statearr_34893;
})();
if(inst_34873){
var statearr_34894_36094 = state_34889__$1;
(statearr_34894_36094[(1)] = (8));

} else {
var statearr_34895_36095 = state_34889__$1;
(statearr_34895_36095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (1))){
var inst_34866 = (0);
var state_34889__$1 = (function (){var statearr_34896 = state_34889;
(statearr_34896[(8)] = inst_34866);

return statearr_34896;
})();
var statearr_34900_36096 = state_34889__$1;
(statearr_34900_36096[(2)] = null);

(statearr_34900_36096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (4))){
var state_34889__$1 = state_34889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34889__$1,(7),ch);
} else {
if((state_val_34890 === (6))){
var inst_34884 = (state_34889[(2)]);
var state_34889__$1 = state_34889;
var statearr_34901_36101 = state_34889__$1;
(statearr_34901_36101[(2)] = inst_34884);

(statearr_34901_36101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (3))){
var inst_34886 = (state_34889[(2)]);
var inst_34887 = cljs.core.async.close_BANG_(out);
var state_34889__$1 = (function (){var statearr_34902 = state_34889;
(statearr_34902[(9)] = inst_34886);

return statearr_34902;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34889__$1,inst_34887);
} else {
if((state_val_34890 === (2))){
var inst_34866 = (state_34889[(8)]);
var inst_34868 = (inst_34866 < n);
var state_34889__$1 = state_34889;
if(cljs.core.truth_(inst_34868)){
var statearr_34903_36102 = state_34889__$1;
(statearr_34903_36102[(1)] = (4));

} else {
var statearr_34904_36103 = state_34889__$1;
(statearr_34904_36103[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (11))){
var inst_34866 = (state_34889[(8)]);
var inst_34876 = (state_34889[(2)]);
var inst_34877 = (inst_34866 + (1));
var inst_34866__$1 = inst_34877;
var state_34889__$1 = (function (){var statearr_34905 = state_34889;
(statearr_34905[(8)] = inst_34866__$1);

(statearr_34905[(10)] = inst_34876);

return statearr_34905;
})();
var statearr_34906_36104 = state_34889__$1;
(statearr_34906_36104[(2)] = null);

(statearr_34906_36104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (9))){
var state_34889__$1 = state_34889;
var statearr_34907_36105 = state_34889__$1;
(statearr_34907_36105[(2)] = null);

(statearr_34907_36105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (5))){
var state_34889__$1 = state_34889;
var statearr_34908_36106 = state_34889__$1;
(statearr_34908_36106[(2)] = null);

(statearr_34908_36106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (10))){
var inst_34881 = (state_34889[(2)]);
var state_34889__$1 = state_34889;
var statearr_34909_36107 = state_34889__$1;
(statearr_34909_36107[(2)] = inst_34881);

(statearr_34909_36107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34890 === (8))){
var inst_34871 = (state_34889[(7)]);
var state_34889__$1 = state_34889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34889__$1,(11),out,inst_34871);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32887__auto__ = null;
var cljs$core$async$state_machine__32887__auto____0 = (function (){
var statearr_34910 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34910[(0)] = cljs$core$async$state_machine__32887__auto__);

(statearr_34910[(1)] = (1));

return statearr_34910;
});
var cljs$core$async$state_machine__32887__auto____1 = (function (state_34889){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_34889);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e34911){var ex__32890__auto__ = e34911;
var statearr_34912_36108 = state_34889;
(statearr_34912_36108[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_34889[(4)]))){
var statearr_34913_36109 = state_34889;
(statearr_34913_36109[(1)] = cljs.core.first((state_34889[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36114 = state_34889;
state_34889 = G__36114;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$state_machine__32887__auto__ = function(state_34889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32887__auto____1.call(this,state_34889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32887__auto____0;
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32887__auto____1;
return cljs$core$async$state_machine__32887__auto__;
})()
})();
var state__33107__auto__ = (function (){var statearr_34914 = f__33106__auto__();
(statearr_34914[(6)] = c__33105__auto___36093);

return statearr_34914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34920 = (function (f,ch,meta34921){
this.f = f;
this.ch = ch;
this.meta34921 = meta34921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34922,meta34921__$1){
var self__ = this;
var _34922__$1 = this;
return (new cljs.core.async.t_cljs$core$async34920(self__.f,self__.ch,meta34921__$1));
}));

(cljs.core.async.t_cljs$core$async34920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34922){
var self__ = this;
var _34922__$1 = this;
return self__.meta34921;
}));

(cljs.core.async.t_cljs$core$async34920.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34920.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34920.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34927 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34927 = (function (f,ch,meta34921,_,fn1,meta34928){
this.f = f;
this.ch = ch;
this.meta34921 = meta34921;
this._ = _;
this.fn1 = fn1;
this.meta34928 = meta34928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34929,meta34928__$1){
var self__ = this;
var _34929__$1 = this;
return (new cljs.core.async.t_cljs$core$async34927(self__.f,self__.ch,self__.meta34921,self__._,self__.fn1,meta34928__$1));
}));

(cljs.core.async.t_cljs$core$async34927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34929){
var self__ = this;
var _34929__$1 = this;
return self__.meta34928;
}));

(cljs.core.async.t_cljs$core$async34927.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34927.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34927.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34927.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34919_SHARP_){
var G__34930 = (((p1__34919_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34919_SHARP_) : self__.f.call(null,p1__34919_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34930) : f1.call(null,G__34930));
});
}));

(cljs.core.async.t_cljs$core$async34927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34921","meta34921",815239243,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34920","cljs.core.async/t_cljs$core$async34920",1114508182,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34928","meta34928",651709689,null)], null);
}));

(cljs.core.async.t_cljs$core$async34927.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34927");

(cljs.core.async.t_cljs$core$async34927.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34927");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34927.
 */
cljs.core.async.__GT_t_cljs$core$async34927 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34927(f__$1,ch__$1,meta34921__$1,___$2,fn1__$1,meta34928){
return (new cljs.core.async.t_cljs$core$async34927(f__$1,ch__$1,meta34921__$1,___$2,fn1__$1,meta34928));
});

}

return (new cljs.core.async.t_cljs$core$async34927(self__.f,self__.ch,self__.meta34921,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34933 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34933) : self__.f.call(null,G__34933));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34920.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34921","meta34921",815239243,null)], null);
}));

(cljs.core.async.t_cljs$core$async34920.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34920");

(cljs.core.async.t_cljs$core$async34920.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34920");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34920.
 */
cljs.core.async.__GT_t_cljs$core$async34920 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34920(f__$1,ch__$1,meta34921){
return (new cljs.core.async.t_cljs$core$async34920(f__$1,ch__$1,meta34921));
});

}

return (new cljs.core.async.t_cljs$core$async34920(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34937 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34937 = (function (f,ch,meta34938){
this.f = f;
this.ch = ch;
this.meta34938 = meta34938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34939,meta34938__$1){
var self__ = this;
var _34939__$1 = this;
return (new cljs.core.async.t_cljs$core$async34937(self__.f,self__.ch,meta34938__$1));
}));

(cljs.core.async.t_cljs$core$async34937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34939){
var self__ = this;
var _34939__$1 = this;
return self__.meta34938;
}));

(cljs.core.async.t_cljs$core$async34937.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34937.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34937.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34937.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34937.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34937.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34938","meta34938",1556664951,null)], null);
}));

(cljs.core.async.t_cljs$core$async34937.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34937");

(cljs.core.async.t_cljs$core$async34937.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34937");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34937.
 */
cljs.core.async.__GT_t_cljs$core$async34937 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34937(f__$1,ch__$1,meta34938){
return (new cljs.core.async.t_cljs$core$async34937(f__$1,ch__$1,meta34938));
});

}

return (new cljs.core.async.t_cljs$core$async34937(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34940 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34940 = (function (p,ch,meta34941){
this.p = p;
this.ch = ch;
this.meta34941 = meta34941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34942,meta34941__$1){
var self__ = this;
var _34942__$1 = this;
return (new cljs.core.async.t_cljs$core$async34940(self__.p,self__.ch,meta34941__$1));
}));

(cljs.core.async.t_cljs$core$async34940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34942){
var self__ = this;
var _34942__$1 = this;
return self__.meta34941;
}));

(cljs.core.async.t_cljs$core$async34940.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34940.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34940.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34940.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34940.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34940.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34940.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34941","meta34941",1025241196,null)], null);
}));

(cljs.core.async.t_cljs$core$async34940.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34940");

(cljs.core.async.t_cljs$core$async34940.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34940");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34940.
 */
cljs.core.async.__GT_t_cljs$core$async34940 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34940(p__$1,ch__$1,meta34941){
return (new cljs.core.async.t_cljs$core$async34940(p__$1,ch__$1,meta34941));
});

}

return (new cljs.core.async.t_cljs$core$async34940(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34944 = arguments.length;
switch (G__34944) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33105__auto___36186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = (function (state_34966){
var state_val_34967 = (state_34966[(1)]);
if((state_val_34967 === (7))){
var inst_34962 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
var statearr_34968_36187 = state_34966__$1;
(statearr_34968_36187[(2)] = inst_34962);

(statearr_34968_36187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (1))){
var state_34966__$1 = state_34966;
var statearr_34969_36188 = state_34966__$1;
(statearr_34969_36188[(2)] = null);

(statearr_34969_36188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (4))){
var inst_34948 = (state_34966[(7)]);
var inst_34948__$1 = (state_34966[(2)]);
var inst_34949 = (inst_34948__$1 == null);
var state_34966__$1 = (function (){var statearr_34973 = state_34966;
(statearr_34973[(7)] = inst_34948__$1);

return statearr_34973;
})();
if(cljs.core.truth_(inst_34949)){
var statearr_34974_36196 = state_34966__$1;
(statearr_34974_36196[(1)] = (5));

} else {
var statearr_34975_36197 = state_34966__$1;
(statearr_34975_36197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (6))){
var inst_34948 = (state_34966[(7)]);
var inst_34953 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34948) : p.call(null,inst_34948));
var state_34966__$1 = state_34966;
if(cljs.core.truth_(inst_34953)){
var statearr_34976_36198 = state_34966__$1;
(statearr_34976_36198[(1)] = (8));

} else {
var statearr_34977_36199 = state_34966__$1;
(statearr_34977_36199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (3))){
var inst_34964 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34966__$1,inst_34964);
} else {
if((state_val_34967 === (2))){
var state_34966__$1 = state_34966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34966__$1,(4),ch);
} else {
if((state_val_34967 === (11))){
var inst_34956 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
var statearr_34978_36200 = state_34966__$1;
(statearr_34978_36200[(2)] = inst_34956);

(statearr_34978_36200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (9))){
var state_34966__$1 = state_34966;
var statearr_34979_36201 = state_34966__$1;
(statearr_34979_36201[(2)] = null);

(statearr_34979_36201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (5))){
var inst_34951 = cljs.core.async.close_BANG_(out);
var state_34966__$1 = state_34966;
var statearr_34980_36208 = state_34966__$1;
(statearr_34980_36208[(2)] = inst_34951);

(statearr_34980_36208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (10))){
var inst_34959 = (state_34966[(2)]);
var state_34966__$1 = (function (){var statearr_34985 = state_34966;
(statearr_34985[(8)] = inst_34959);

return statearr_34985;
})();
var statearr_34986_36217 = state_34966__$1;
(statearr_34986_36217[(2)] = null);

(statearr_34986_36217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (8))){
var inst_34948 = (state_34966[(7)]);
var state_34966__$1 = state_34966;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34966__$1,(11),out,inst_34948);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32887__auto__ = null;
var cljs$core$async$state_machine__32887__auto____0 = (function (){
var statearr_34987 = [null,null,null,null,null,null,null,null,null];
(statearr_34987[(0)] = cljs$core$async$state_machine__32887__auto__);

(statearr_34987[(1)] = (1));

return statearr_34987;
});
var cljs$core$async$state_machine__32887__auto____1 = (function (state_34966){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_34966);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e34988){var ex__32890__auto__ = e34988;
var statearr_34989_36281 = state_34966;
(statearr_34989_36281[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_34966[(4)]))){
var statearr_34990_36283 = state_34966;
(statearr_34990_36283[(1)] = cljs.core.first((state_34966[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36287 = state_34966;
state_34966 = G__36287;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$state_machine__32887__auto__ = function(state_34966){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32887__auto____1.call(this,state_34966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32887__auto____0;
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32887__auto____1;
return cljs$core$async$state_machine__32887__auto__;
})()
})();
var state__33107__auto__ = (function (){var statearr_34991 = f__33106__auto__();
(statearr_34991[(6)] = c__33105__auto___36186);

return statearr_34991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34993 = arguments.length;
switch (G__34993) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33105__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = (function (state_35083){
var state_val_35084 = (state_35083[(1)]);
if((state_val_35084 === (7))){
var inst_35071 = (state_35083[(2)]);
var state_35083__$1 = state_35083;
var statearr_35097_36296 = state_35083__$1;
(statearr_35097_36296[(2)] = inst_35071);

(statearr_35097_36296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35084 === (20))){
var inst_35041 = (state_35083[(7)]);
var inst_35052 = (state_35083[(2)]);
var inst_35053 = cljs.core.next(inst_35041);
var inst_35021 = inst_35053;
var inst_35022 = null;
var inst_35023 = (0);
var inst_35024 = (0);
var state_35083__$1 = (function (){var statearr_35098 = state_35083;
(statearr_35098[(8)] = inst_35052);

(statearr_35098[(9)] = inst_35023);

(statearr_35098[(10)] = inst_35024);

(statearr_35098[(11)] = inst_35021);

(statearr_35098[(12)] = inst_35022);

return statearr_35098;
})();
var statearr_35099_36298 = state_35083__$1;
(statearr_35099_36298[(2)] = null);

(statearr_35099_36298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35084 === (1))){
var state_35083__$1 = state_35083;
var statearr_35100_36299 = state_35083__$1;
(statearr_35100_36299[(2)] = null);

(statearr_35100_36299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35084 === (4))){
var inst_35004 = (state_35083[(13)]);
var inst_35004__$1 = (state_35083[(2)]);
var inst_35008 = (inst_35004__$1 == null);
var state_35083__$1 = (function (){var statearr_35101 = state_35083;
(statearr_35101[(13)] = inst_35004__$1);

return statearr_35101;
})();
if(cljs.core.truth_(inst_35008)){
var statearr_35102_36300 = state_35083__$1;
(statearr_35102_36300[(1)] = (5));

} else {
var statearr_35103_36302 = state_35083__$1;
(statearr_35103_36302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35084 === (15))){
var state_35083__$1 = state_35083;
var statearr_35107_36303 = state_35083__$1;
(statearr_35107_36303[(2)] = null);

(statearr_35107_36303[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35084 === (21))){
var state_35083__$1 = state_35083;
var statearr_35108_36304 = state_35083__$1;
(statearr_35108_36304[(2)] = null);

(statearr_35108_36304[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35084 === (13))){
var inst_35023 = (state_35083[(9)]);
var inst_35024 = (state_35083[(10)]);
var inst_35021 = (state_35083[(11)]);
var inst_35022 = (state_35083[(12)]);
var inst_35037 = (state_35083[(2)]);
var inst_35038 = (inst_35024 + (1));
var tmp35104 = inst_35023;
var tmp35105 = inst_35021;
var tmp35106 = inst_35022;
var inst_35021__$1 = tmp35105;
var inst_35022__$1 = tmp35106;
var inst_35023__$1 = tmp35104;
var inst_35024__$1 = inst_35038;
var state_35083__$1 = (function (){var statearr_35111 = state_35083;
(statearr_35111[(14)] = inst_35037);

(statearr_35111[(9)] = inst_35023__$1);

(statearr_35111[(10)] = inst_35024__$1);

(statearr_35111[(11)] = inst_35021__$1);

(statearr_35111[(12)] = inst_35022__$1);

return statearr_35111;
})();
var statearr_35112_36305 = state_35083__$1;
(statearr_35112_36305[(2)] = null);

(statearr_35112_36305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35084 === (22))){
var state_35083__$1 = state_35083;
var statearr_35113_36306 = state_35083__$1;
(statearr_35113_36306[(2)] = null);

(statearr_35113_36306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35084 === (6))){
var inst_35004 = (state_35083[(13)]);
var inst_35019 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35004) : f.call(null,inst_35004));
var inst_35020 = cljs.core.seq(inst_35019);
var inst_35021 = inst_35020;
var inst_35022 = null;
var inst_35023 = (0);
var inst_35024 = (0);
var state_35083__$1 = (function (){var statearr_35114 = state_35083;
(statearr_35114[(9)] = inst_35023);

(statearr_35114[(10)] = inst_35024);

(statearr_35114[(11)] = inst_35021);

(statearr_35114[(12)] = inst_35022);

return statearr_35114;
})();
var statearr_35116_36308 = state_35083__$1;
(statearr_35116_36308[(2)] = null);

(statearr_35116_36308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35084 === (17))){
var inst_35041 = (state_35083[(7)]);
var inst_35045 = cljs.core.chunk_first(inst_35041);
var inst_35046 = cljs.core.chunk_rest(inst_35041);
var inst_35047 = cljs.core.count(inst_35045);
var inst_35021 = inst_35046;
var inst_35022 = inst_35045;
var inst_35023 = inst_35047;
var inst_35024 = (0);
var state_35083__$1 = (function (){var statearr_35117 = state_35083;
(statearr_35117[(9)] = inst_35023);

(statearr_35117[(10)] = inst_35024);

(statearr_35117[(11)] = inst_35021);

(statearr_35117[(12)] = inst_35022);

return statearr_35117;
})();
var statearr_35118_36310 = state_35083__$1;
(statearr_35118_36310[(2)] = null);

(statearr_35118_36310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35084 === (3))){
var inst_35073 = (state_35083[(2)]);
var state_35083__$1 = state_35083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35083__$1,inst_35073);
} else {
if((state_val_35084 === (12))){
var inst_35061 = (state_35083[(2)]);
var state_35083__$1 = state_35083;
var statearr_35119_36311 = state_35083__$1;
(statearr_35119_36311[(2)] = inst_35061);

(statearr_35119_36311[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35084 === (2))){
var state_35083__$1 = state_35083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35083__$1,(4),in$);
} else {
if((state_val_35084 === (23))){
var inst_35069 = (state_35083[(2)]);
var state_35083__$1 = state_35083;
var statearr_35120_36312 = state_35083__$1;
(statearr_35120_36312[(2)] = inst_35069);

(statearr_35120_36312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35084 === (19))){
var inst_35056 = (state_35083[(2)]);
var state_35083__$1 = state_35083;
var statearr_35121_36313 = state_35083__$1;
(statearr_35121_36313[(2)] = inst_35056);

(statearr_35121_36313[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35084 === (11))){
var inst_35021 = (state_35083[(11)]);
var inst_35041 = (state_35083[(7)]);
var inst_35041__$1 = cljs.core.seq(inst_35021);
var state_35083__$1 = (function (){var statearr_35125 = state_35083;
(statearr_35125[(7)] = inst_35041__$1);

return statearr_35125;
})();
if(inst_35041__$1){
var statearr_35126_36314 = state_35083__$1;
(statearr_35126_36314[(1)] = (14));

} else {
var statearr_35127_36315 = state_35083__$1;
(statearr_35127_36315[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35084 === (9))){
var inst_35063 = (state_35083[(2)]);
var inst_35064 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35083__$1 = (function (){var statearr_35128 = state_35083;
(statearr_35128[(15)] = inst_35063);

return statearr_35128;
})();
if(cljs.core.truth_(inst_35064)){
var statearr_35129_36316 = state_35083__$1;
(statearr_35129_36316[(1)] = (21));

} else {
var statearr_35130_36317 = state_35083__$1;
(statearr_35130_36317[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35084 === (5))){
var inst_35013 = cljs.core.async.close_BANG_(out);
var state_35083__$1 = state_35083;
var statearr_35131_36318 = state_35083__$1;
(statearr_35131_36318[(2)] = inst_35013);

(statearr_35131_36318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35084 === (14))){
var inst_35041 = (state_35083[(7)]);
var inst_35043 = cljs.core.chunked_seq_QMARK_(inst_35041);
var state_35083__$1 = state_35083;
if(inst_35043){
var statearr_35132_36319 = state_35083__$1;
(statearr_35132_36319[(1)] = (17));

} else {
var statearr_35133_36320 = state_35083__$1;
(statearr_35133_36320[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35084 === (16))){
var inst_35059 = (state_35083[(2)]);
var state_35083__$1 = state_35083;
var statearr_35134_36321 = state_35083__$1;
(statearr_35134_36321[(2)] = inst_35059);

(statearr_35134_36321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35084 === (10))){
var inst_35024 = (state_35083[(10)]);
var inst_35022 = (state_35083[(12)]);
var inst_35035 = cljs.core._nth(inst_35022,inst_35024);
var state_35083__$1 = state_35083;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35083__$1,(13),out,inst_35035);
} else {
if((state_val_35084 === (18))){
var inst_35041 = (state_35083[(7)]);
var inst_35050 = cljs.core.first(inst_35041);
var state_35083__$1 = state_35083;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35083__$1,(20),out,inst_35050);
} else {
if((state_val_35084 === (8))){
var inst_35023 = (state_35083[(9)]);
var inst_35024 = (state_35083[(10)]);
var inst_35026 = (inst_35024 < inst_35023);
var inst_35027 = inst_35026;
var state_35083__$1 = state_35083;
if(cljs.core.truth_(inst_35027)){
var statearr_35135_36322 = state_35083__$1;
(statearr_35135_36322[(1)] = (10));

} else {
var statearr_35136_36323 = state_35083__$1;
(statearr_35136_36323[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32887__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32887__auto____0 = (function (){
var statearr_35137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35137[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32887__auto__);

(statearr_35137[(1)] = (1));

return statearr_35137;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32887__auto____1 = (function (state_35083){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_35083);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e35138){var ex__32890__auto__ = e35138;
var statearr_35139_36328 = state_35083;
(statearr_35139_36328[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_35083[(4)]))){
var statearr_35140_36329 = state_35083;
(statearr_35140_36329[(1)] = cljs.core.first((state_35083[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36330 = state_35083;
state_35083 = G__36330;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32887__auto__ = function(state_35083){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32887__auto____1.call(this,state_35083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32887__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32887__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32887__auto__;
})()
})();
var state__33107__auto__ = (function (){var statearr_35141 = f__33106__auto__();
(statearr_35141[(6)] = c__33105__auto__);

return statearr_35141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
}));

return c__33105__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35143 = arguments.length;
switch (G__35143) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35145 = arguments.length;
switch (G__35145) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35147 = arguments.length;
switch (G__35147) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33105__auto___36379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = (function (state_35182){
var state_val_35183 = (state_35182[(1)]);
if((state_val_35183 === (7))){
var inst_35177 = (state_35182[(2)]);
var state_35182__$1 = state_35182;
var statearr_35184_36380 = state_35182__$1;
(statearr_35184_36380[(2)] = inst_35177);

(statearr_35184_36380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35183 === (1))){
var inst_35156 = null;
var state_35182__$1 = (function (){var statearr_35185 = state_35182;
(statearr_35185[(7)] = inst_35156);

return statearr_35185;
})();
var statearr_35186_36382 = state_35182__$1;
(statearr_35186_36382[(2)] = null);

(statearr_35186_36382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35183 === (4))){
var inst_35162 = (state_35182[(8)]);
var inst_35162__$1 = (state_35182[(2)]);
var inst_35163 = (inst_35162__$1 == null);
var inst_35164 = cljs.core.not(inst_35163);
var state_35182__$1 = (function (){var statearr_35187 = state_35182;
(statearr_35187[(8)] = inst_35162__$1);

return statearr_35187;
})();
if(inst_35164){
var statearr_35188_36383 = state_35182__$1;
(statearr_35188_36383[(1)] = (5));

} else {
var statearr_35189_36384 = state_35182__$1;
(statearr_35189_36384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35183 === (6))){
var state_35182__$1 = state_35182;
var statearr_35190_36385 = state_35182__$1;
(statearr_35190_36385[(2)] = null);

(statearr_35190_36385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35183 === (3))){
var inst_35179 = (state_35182[(2)]);
var inst_35180 = cljs.core.async.close_BANG_(out);
var state_35182__$1 = (function (){var statearr_35191 = state_35182;
(statearr_35191[(9)] = inst_35179);

return statearr_35191;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35182__$1,inst_35180);
} else {
if((state_val_35183 === (2))){
var state_35182__$1 = state_35182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35182__$1,(4),ch);
} else {
if((state_val_35183 === (11))){
var inst_35162 = (state_35182[(8)]);
var inst_35171 = (state_35182[(2)]);
var inst_35156 = inst_35162;
var state_35182__$1 = (function (){var statearr_35192 = state_35182;
(statearr_35192[(7)] = inst_35156);

(statearr_35192[(10)] = inst_35171);

return statearr_35192;
})();
var statearr_35193_36395 = state_35182__$1;
(statearr_35193_36395[(2)] = null);

(statearr_35193_36395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35183 === (9))){
var inst_35162 = (state_35182[(8)]);
var state_35182__$1 = state_35182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35182__$1,(11),out,inst_35162);
} else {
if((state_val_35183 === (5))){
var inst_35162 = (state_35182[(8)]);
var inst_35156 = (state_35182[(7)]);
var inst_35166 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35162,inst_35156);
var state_35182__$1 = state_35182;
if(inst_35166){
var statearr_35195_36397 = state_35182__$1;
(statearr_35195_36397[(1)] = (8));

} else {
var statearr_35196_36398 = state_35182__$1;
(statearr_35196_36398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35183 === (10))){
var inst_35174 = (state_35182[(2)]);
var state_35182__$1 = state_35182;
var statearr_35197_36399 = state_35182__$1;
(statearr_35197_36399[(2)] = inst_35174);

(statearr_35197_36399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35183 === (8))){
var inst_35156 = (state_35182[(7)]);
var tmp35194 = inst_35156;
var inst_35156__$1 = tmp35194;
var state_35182__$1 = (function (){var statearr_35198 = state_35182;
(statearr_35198[(7)] = inst_35156__$1);

return statearr_35198;
})();
var statearr_35199_36406 = state_35182__$1;
(statearr_35199_36406[(2)] = null);

(statearr_35199_36406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32887__auto__ = null;
var cljs$core$async$state_machine__32887__auto____0 = (function (){
var statearr_35200 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35200[(0)] = cljs$core$async$state_machine__32887__auto__);

(statearr_35200[(1)] = (1));

return statearr_35200;
});
var cljs$core$async$state_machine__32887__auto____1 = (function (state_35182){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_35182);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e35201){var ex__32890__auto__ = e35201;
var statearr_35202_36407 = state_35182;
(statearr_35202_36407[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_35182[(4)]))){
var statearr_35203_36408 = state_35182;
(statearr_35203_36408[(1)] = cljs.core.first((state_35182[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36409 = state_35182;
state_35182 = G__36409;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$state_machine__32887__auto__ = function(state_35182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32887__auto____1.call(this,state_35182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32887__auto____0;
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32887__auto____1;
return cljs$core$async$state_machine__32887__auto__;
})()
})();
var state__33107__auto__ = (function (){var statearr_35204 = f__33106__auto__();
(statearr_35204[(6)] = c__33105__auto___36379);

return statearr_35204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35208 = arguments.length;
switch (G__35208) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33105__auto___36417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = (function (state_35250){
var state_val_35251 = (state_35250[(1)]);
if((state_val_35251 === (7))){
var inst_35246 = (state_35250[(2)]);
var state_35250__$1 = state_35250;
var statearr_35254_36421 = state_35250__$1;
(statearr_35254_36421[(2)] = inst_35246);

(statearr_35254_36421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (1))){
var inst_35211 = (new Array(n));
var inst_35212 = inst_35211;
var inst_35213 = (0);
var state_35250__$1 = (function (){var statearr_35255 = state_35250;
(statearr_35255[(7)] = inst_35212);

(statearr_35255[(8)] = inst_35213);

return statearr_35255;
})();
var statearr_35256_36423 = state_35250__$1;
(statearr_35256_36423[(2)] = null);

(statearr_35256_36423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (4))){
var inst_35217 = (state_35250[(9)]);
var inst_35217__$1 = (state_35250[(2)]);
var inst_35218 = (inst_35217__$1 == null);
var inst_35219 = cljs.core.not(inst_35218);
var state_35250__$1 = (function (){var statearr_35257 = state_35250;
(statearr_35257[(9)] = inst_35217__$1);

return statearr_35257;
})();
if(inst_35219){
var statearr_35258_36424 = state_35250__$1;
(statearr_35258_36424[(1)] = (5));

} else {
var statearr_35259_36425 = state_35250__$1;
(statearr_35259_36425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (15))){
var inst_35240 = (state_35250[(2)]);
var state_35250__$1 = state_35250;
var statearr_35260_36426 = state_35250__$1;
(statearr_35260_36426[(2)] = inst_35240);

(statearr_35260_36426[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (13))){
var state_35250__$1 = state_35250;
var statearr_35261_36427 = state_35250__$1;
(statearr_35261_36427[(2)] = null);

(statearr_35261_36427[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (6))){
var inst_35213 = (state_35250[(8)]);
var inst_35236 = (inst_35213 > (0));
var state_35250__$1 = state_35250;
if(cljs.core.truth_(inst_35236)){
var statearr_35262_36431 = state_35250__$1;
(statearr_35262_36431[(1)] = (12));

} else {
var statearr_35263_36432 = state_35250__$1;
(statearr_35263_36432[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (3))){
var inst_35248 = (state_35250[(2)]);
var state_35250__$1 = state_35250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35250__$1,inst_35248);
} else {
if((state_val_35251 === (12))){
var inst_35212 = (state_35250[(7)]);
var inst_35238 = cljs.core.vec(inst_35212);
var state_35250__$1 = state_35250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35250__$1,(15),out,inst_35238);
} else {
if((state_val_35251 === (2))){
var state_35250__$1 = state_35250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35250__$1,(4),ch);
} else {
if((state_val_35251 === (11))){
var inst_35230 = (state_35250[(2)]);
var inst_35231 = (new Array(n));
var inst_35212 = inst_35231;
var inst_35213 = (0);
var state_35250__$1 = (function (){var statearr_35264 = state_35250;
(statearr_35264[(7)] = inst_35212);

(statearr_35264[(8)] = inst_35213);

(statearr_35264[(10)] = inst_35230);

return statearr_35264;
})();
var statearr_35265_36435 = state_35250__$1;
(statearr_35265_36435[(2)] = null);

(statearr_35265_36435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (9))){
var inst_35212 = (state_35250[(7)]);
var inst_35228 = cljs.core.vec(inst_35212);
var state_35250__$1 = state_35250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35250__$1,(11),out,inst_35228);
} else {
if((state_val_35251 === (5))){
var inst_35212 = (state_35250[(7)]);
var inst_35217 = (state_35250[(9)]);
var inst_35213 = (state_35250[(8)]);
var inst_35223 = (state_35250[(11)]);
var inst_35222 = (inst_35212[inst_35213] = inst_35217);
var inst_35223__$1 = (inst_35213 + (1));
var inst_35224 = (inst_35223__$1 < n);
var state_35250__$1 = (function (){var statearr_35266 = state_35250;
(statearr_35266[(11)] = inst_35223__$1);

(statearr_35266[(12)] = inst_35222);

return statearr_35266;
})();
if(cljs.core.truth_(inst_35224)){
var statearr_35267_36436 = state_35250__$1;
(statearr_35267_36436[(1)] = (8));

} else {
var statearr_35268_36438 = state_35250__$1;
(statearr_35268_36438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (14))){
var inst_35243 = (state_35250[(2)]);
var inst_35244 = cljs.core.async.close_BANG_(out);
var state_35250__$1 = (function (){var statearr_35270 = state_35250;
(statearr_35270[(13)] = inst_35243);

return statearr_35270;
})();
var statearr_35274_36439 = state_35250__$1;
(statearr_35274_36439[(2)] = inst_35244);

(statearr_35274_36439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (10))){
var inst_35234 = (state_35250[(2)]);
var state_35250__$1 = state_35250;
var statearr_35275_36440 = state_35250__$1;
(statearr_35275_36440[(2)] = inst_35234);

(statearr_35275_36440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (8))){
var inst_35212 = (state_35250[(7)]);
var inst_35223 = (state_35250[(11)]);
var tmp35269 = inst_35212;
var inst_35212__$1 = tmp35269;
var inst_35213 = inst_35223;
var state_35250__$1 = (function (){var statearr_35276 = state_35250;
(statearr_35276[(7)] = inst_35212__$1);

(statearr_35276[(8)] = inst_35213);

return statearr_35276;
})();
var statearr_35277_36441 = state_35250__$1;
(statearr_35277_36441[(2)] = null);

(statearr_35277_36441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32887__auto__ = null;
var cljs$core$async$state_machine__32887__auto____0 = (function (){
var statearr_35278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35278[(0)] = cljs$core$async$state_machine__32887__auto__);

(statearr_35278[(1)] = (1));

return statearr_35278;
});
var cljs$core$async$state_machine__32887__auto____1 = (function (state_35250){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_35250);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e35279){var ex__32890__auto__ = e35279;
var statearr_35280_36443 = state_35250;
(statearr_35280_36443[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_35250[(4)]))){
var statearr_35281_36445 = state_35250;
(statearr_35281_36445[(1)] = cljs.core.first((state_35250[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36446 = state_35250;
state_35250 = G__36446;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$state_machine__32887__auto__ = function(state_35250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32887__auto____1.call(this,state_35250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32887__auto____0;
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32887__auto____1;
return cljs$core$async$state_machine__32887__auto__;
})()
})();
var state__33107__auto__ = (function (){var statearr_35282 = f__33106__auto__();
(statearr_35282[(6)] = c__33105__auto___36417);

return statearr_35282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35297 = arguments.length;
switch (G__35297) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33105__auto___36451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33106__auto__ = (function (){var switch__32886__auto__ = (function (state_35369){
var state_val_35370 = (state_35369[(1)]);
if((state_val_35370 === (7))){
var inst_35361 = (state_35369[(2)]);
var state_35369__$1 = state_35369;
var statearr_35373_36452 = state_35369__$1;
(statearr_35373_36452[(2)] = inst_35361);

(statearr_35373_36452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35370 === (1))){
var inst_35308 = [];
var inst_35309 = inst_35308;
var inst_35310 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35369__$1 = (function (){var statearr_35374 = state_35369;
(statearr_35374[(7)] = inst_35309);

(statearr_35374[(8)] = inst_35310);

return statearr_35374;
})();
var statearr_35375_36454 = state_35369__$1;
(statearr_35375_36454[(2)] = null);

(statearr_35375_36454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35370 === (4))){
var inst_35313 = (state_35369[(9)]);
var inst_35313__$1 = (state_35369[(2)]);
var inst_35317 = (inst_35313__$1 == null);
var inst_35318 = cljs.core.not(inst_35317);
var state_35369__$1 = (function (){var statearr_35376 = state_35369;
(statearr_35376[(9)] = inst_35313__$1);

return statearr_35376;
})();
if(inst_35318){
var statearr_35377_36455 = state_35369__$1;
(statearr_35377_36455[(1)] = (5));

} else {
var statearr_35378_36460 = state_35369__$1;
(statearr_35378_36460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35370 === (15))){
var inst_35309 = (state_35369[(7)]);
var inst_35353 = cljs.core.vec(inst_35309);
var state_35369__$1 = state_35369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35369__$1,(18),out,inst_35353);
} else {
if((state_val_35370 === (13))){
var inst_35345 = (state_35369[(2)]);
var state_35369__$1 = state_35369;
var statearr_35379_36461 = state_35369__$1;
(statearr_35379_36461[(2)] = inst_35345);

(statearr_35379_36461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35370 === (6))){
var inst_35309 = (state_35369[(7)]);
var inst_35350 = inst_35309.length;
var inst_35351 = (inst_35350 > (0));
var state_35369__$1 = state_35369;
if(cljs.core.truth_(inst_35351)){
var statearr_35380_36469 = state_35369__$1;
(statearr_35380_36469[(1)] = (15));

} else {
var statearr_35381_36470 = state_35369__$1;
(statearr_35381_36470[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35370 === (17))){
var inst_35358 = (state_35369[(2)]);
var inst_35359 = cljs.core.async.close_BANG_(out);
var state_35369__$1 = (function (){var statearr_35382 = state_35369;
(statearr_35382[(10)] = inst_35358);

return statearr_35382;
})();
var statearr_35383_36471 = state_35369__$1;
(statearr_35383_36471[(2)] = inst_35359);

(statearr_35383_36471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35370 === (3))){
var inst_35363 = (state_35369[(2)]);
var state_35369__$1 = state_35369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35369__$1,inst_35363);
} else {
if((state_val_35370 === (12))){
var inst_35309 = (state_35369[(7)]);
var inst_35338 = cljs.core.vec(inst_35309);
var state_35369__$1 = state_35369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35369__$1,(14),out,inst_35338);
} else {
if((state_val_35370 === (2))){
var state_35369__$1 = state_35369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35369__$1,(4),ch);
} else {
if((state_val_35370 === (11))){
var inst_35313 = (state_35369[(9)]);
var inst_35320 = (state_35369[(11)]);
var inst_35309 = (state_35369[(7)]);
var inst_35335 = inst_35309.push(inst_35313);
var tmp35384 = inst_35309;
var inst_35309__$1 = tmp35384;
var inst_35310 = inst_35320;
var state_35369__$1 = (function (){var statearr_35385 = state_35369;
(statearr_35385[(12)] = inst_35335);

(statearr_35385[(7)] = inst_35309__$1);

(statearr_35385[(8)] = inst_35310);

return statearr_35385;
})();
var statearr_35386_36477 = state_35369__$1;
(statearr_35386_36477[(2)] = null);

(statearr_35386_36477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35370 === (9))){
var inst_35310 = (state_35369[(8)]);
var inst_35328 = cljs.core.keyword_identical_QMARK_(inst_35310,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35369__$1 = state_35369;
var statearr_35387_36481 = state_35369__$1;
(statearr_35387_36481[(2)] = inst_35328);

(statearr_35387_36481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35370 === (5))){
var inst_35313 = (state_35369[(9)]);
var inst_35320 = (state_35369[(11)]);
var inst_35324 = (state_35369[(13)]);
var inst_35310 = (state_35369[(8)]);
var inst_35320__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35313) : f.call(null,inst_35313));
var inst_35324__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35320__$1,inst_35310);
var state_35369__$1 = (function (){var statearr_35388 = state_35369;
(statearr_35388[(11)] = inst_35320__$1);

(statearr_35388[(13)] = inst_35324__$1);

return statearr_35388;
})();
if(inst_35324__$1){
var statearr_35389_36497 = state_35369__$1;
(statearr_35389_36497[(1)] = (8));

} else {
var statearr_35390_36498 = state_35369__$1;
(statearr_35390_36498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35370 === (14))){
var inst_35313 = (state_35369[(9)]);
var inst_35320 = (state_35369[(11)]);
var inst_35340 = (state_35369[(2)]);
var inst_35341 = [];
var inst_35342 = inst_35341.push(inst_35313);
var inst_35309 = inst_35341;
var inst_35310 = inst_35320;
var state_35369__$1 = (function (){var statearr_35391 = state_35369;
(statearr_35391[(14)] = inst_35342);

(statearr_35391[(15)] = inst_35340);

(statearr_35391[(7)] = inst_35309);

(statearr_35391[(8)] = inst_35310);

return statearr_35391;
})();
var statearr_35392_36505 = state_35369__$1;
(statearr_35392_36505[(2)] = null);

(statearr_35392_36505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35370 === (16))){
var state_35369__$1 = state_35369;
var statearr_35393_36506 = state_35369__$1;
(statearr_35393_36506[(2)] = null);

(statearr_35393_36506[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35370 === (10))){
var inst_35330 = (state_35369[(2)]);
var state_35369__$1 = state_35369;
if(cljs.core.truth_(inst_35330)){
var statearr_35394_36507 = state_35369__$1;
(statearr_35394_36507[(1)] = (11));

} else {
var statearr_35395_36508 = state_35369__$1;
(statearr_35395_36508[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35370 === (18))){
var inst_35355 = (state_35369[(2)]);
var state_35369__$1 = state_35369;
var statearr_35396_36515 = state_35369__$1;
(statearr_35396_36515[(2)] = inst_35355);

(statearr_35396_36515[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35370 === (8))){
var inst_35324 = (state_35369[(13)]);
var state_35369__$1 = state_35369;
var statearr_35397_36516 = state_35369__$1;
(statearr_35397_36516[(2)] = inst_35324);

(statearr_35397_36516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32887__auto__ = null;
var cljs$core$async$state_machine__32887__auto____0 = (function (){
var statearr_35398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35398[(0)] = cljs$core$async$state_machine__32887__auto__);

(statearr_35398[(1)] = (1));

return statearr_35398;
});
var cljs$core$async$state_machine__32887__auto____1 = (function (state_35369){
while(true){
var ret_value__32888__auto__ = (function (){try{while(true){
var result__32889__auto__ = switch__32886__auto__(state_35369);
if(cljs.core.keyword_identical_QMARK_(result__32889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32889__auto__;
}
break;
}
}catch (e35399){var ex__32890__auto__ = e35399;
var statearr_35400_36522 = state_35369;
(statearr_35400_36522[(2)] = ex__32890__auto__);


if(cljs.core.seq((state_35369[(4)]))){
var statearr_35401_36523 = state_35369;
(statearr_35401_36523[(1)] = cljs.core.first((state_35369[(4)])));

} else {
throw ex__32890__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32888__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36524 = state_35369;
state_35369 = G__36524;
continue;
} else {
return ret_value__32888__auto__;
}
break;
}
});
cljs$core$async$state_machine__32887__auto__ = function(state_35369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32887__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32887__auto____1.call(this,state_35369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32887__auto____0;
cljs$core$async$state_machine__32887__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32887__auto____1;
return cljs$core$async$state_machine__32887__auto__;
})()
})();
var state__33107__auto__ = (function (){var statearr_35402 = f__33106__auto__();
(statearr_35402[(6)] = c__33105__auto___36451);

return statearr_35402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33107__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
