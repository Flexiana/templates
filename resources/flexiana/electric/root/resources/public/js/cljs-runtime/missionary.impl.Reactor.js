goog.provide('missionary.impl.Reactor');





/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Reactor.Failer = (function (t,e){
this.t = t;
this.e = e;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Reactor.Failer.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__40212 = (arguments.length - (1));
switch (G__40212) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Reactor.Failer.prototype.apply = (function (self__,args40209){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40209)));
}));

(missionary.impl.Reactor.Failer.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return null;
}));

(missionary.impl.Reactor.Failer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.t.cljs$core$IFn$_invoke$arity$0 ? self__.t.cljs$core$IFn$_invoke$arity$0() : self__.t.call(null));

throw self__.e;
}));

(missionary.impl.Reactor.Failer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null);
}));

(missionary.impl.Reactor.Failer.cljs$lang$type = true);

(missionary.impl.Reactor.Failer.cljs$lang$ctorStr = "missionary.impl.Reactor/Failer");

(missionary.impl.Reactor.Failer.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Reactor/Failer");
}));

/**
 * Positional factory function for missionary.impl.Reactor/Failer.
 */
missionary.impl.Reactor.__GT_Failer = (function missionary$impl$Reactor$__GT_Failer(t,e){
return (new missionary.impl.Reactor.Failer(t,e));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Reactor.Subscription = (function (notifier,terminator,subscriber,subscribed,prev,next){
this.notifier = notifier;
this.terminator = terminator;
this.subscriber = subscriber;
this.subscribed = subscribed;
this.prev = prev;
this.next = next;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Reactor.Subscription.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__40220 = (arguments.length - (1));
switch (G__40220) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Reactor.Subscription.prototype.apply = (function (self__,args40219){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40219)));
}));

(missionary.impl.Reactor.Subscription.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
(missionary.impl.Reactor.unsubscribe.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Reactor.unsubscribe.cljs$core$IFn$_invoke$arity$1(this$) : missionary.impl.Reactor.unsubscribe.call(null,this$));

return null;
}));

(missionary.impl.Reactor.Subscription.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (missionary.impl.Reactor.push.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Reactor.push.cljs$core$IFn$_invoke$arity$1(this$__$1) : missionary.impl.Reactor.push.call(null,this$__$1));
}));

(missionary.impl.Reactor.Subscription.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"subscriber","subscriber",-423806886,null),new cljs.core.Symbol(null,"subscribed","subscribed",-1642347512,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"next","next",1522830042,null)], null);
}));

(missionary.impl.Reactor.Subscription.cljs$lang$type = true);

(missionary.impl.Reactor.Subscription.cljs$lang$ctorStr = "missionary.impl.Reactor/Subscription");

(missionary.impl.Reactor.Subscription.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Reactor/Subscription");
}));

/**
 * Positional factory function for missionary.impl.Reactor/Subscription.
 */
missionary.impl.Reactor.__GT_Subscription = (function missionary$impl$Reactor$__GT_Subscription(notifier,terminator,subscriber,subscribed,prev,next){
return (new missionary.impl.Reactor.Subscription(notifier,terminator,subscriber,subscribed,prev,next));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.Reactor.Publisher = (function (process,iterator,ranks,pending,children,live,busy,done,value,prev,next,child,sibling,active,subs){
this.process = process;
this.iterator = iterator;
this.ranks = ranks;
this.pending = pending;
this.children = children;
this.live = live;
this.busy = busy;
this.done = done;
this.value = value;
this.prev = prev;
this.next = next;
this.child = child;
this.sibling = sibling;
this.active = active;
this.subs = subs;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Reactor.Publisher.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__40299 = (arguments.length - (1));
switch (G__40299) {
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

(missionary.impl.Reactor.Publisher.prototype.apply = (function (self__,args40290){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40290)));
}));

(missionary.impl.Reactor.Publisher.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
(missionary.impl.Reactor.free.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Reactor.free.cljs$core$IFn$_invoke$arity$1(this$) : missionary.impl.Reactor.free.call(null,this$));

return null;
}));

(missionary.impl.Reactor.Publisher.prototype.cljs$core$IFn$_invoke$arity$2 = (function (n,t){
var self__ = this;
var this$ = this;
return (missionary.impl.Reactor.subscribe.cljs$core$IFn$_invoke$arity$3 ? missionary.impl.Reactor.subscribe.cljs$core$IFn$_invoke$arity$3(this$,n,t) : missionary.impl.Reactor.subscribe.call(null,this$,n,t));
}));

(missionary.impl.Reactor.Publisher.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"iterator","iterator",-32550441,null),new cljs.core.Symbol(null,"ranks","ranks",-162053339,null),cljs.core.with_meta(new cljs.core.Symbol(null,"pending","pending",1420494800,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"live","live",30383488,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"next","next",1522830042,null),new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.Symbol(null,"sibling","sibling",456666527,null),new cljs.core.Symbol(null,"active","active",-758473701,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null)], null);
}));

(missionary.impl.Reactor.Publisher.cljs$lang$type = true);

(missionary.impl.Reactor.Publisher.cljs$lang$ctorStr = "missionary.impl.Reactor/Publisher");

(missionary.impl.Reactor.Publisher.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Reactor/Publisher");
}));

/**
 * Positional factory function for missionary.impl.Reactor/Publisher.
 */
missionary.impl.Reactor.__GT_Publisher = (function missionary$impl$Reactor$__GT_Publisher(process,iterator,ranks,pending,children,live,busy,done,value,prev,next,child,sibling,active,subs){
return (new missionary.impl.Reactor.Publisher(process,iterator,ranks,pending,children,live,busy,done,value,prev,next,child,sibling,active,subs));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.Reactor.Process = (function (success,failure,result,kill,boot,alive,active,current,reaction,schedule,subscriber,delayed){
this.success = success;
this.failure = failure;
this.result = result;
this.kill = kill;
this.boot = boot;
this.alive = alive;
this.active = active;
this.current = current;
this.reaction = reaction;
this.schedule = schedule;
this.subscriber = subscriber;
this.delayed = delayed;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Reactor.Process.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__40326 = (arguments.length - (1));
switch (G__40326) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Reactor.Process.prototype.apply = (function (self__,args40325){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40325)));
}));

(missionary.impl.Reactor.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
(missionary.impl.Reactor.event.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Reactor.event.cljs$core$IFn$_invoke$arity$1(self__.kill) : missionary.impl.Reactor.event.call(null,self__.kill));

return null;
}));

(missionary.impl.Reactor.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"success","success",-763789863,null),new cljs.core.Symbol(null,"failure","failure",-1934019890,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"kill","kill",1628195952,null),new cljs.core.Symbol(null,"boot","boot",-646575184,null),new cljs.core.Symbol(null,"alive","alive",-1229505839,null),new cljs.core.Symbol(null,"active","active",-758473701,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.Symbol(null,"schedule","schedule",1989806793,null),new cljs.core.Symbol(null,"subscriber","subscriber",-423806886,null),new cljs.core.Symbol(null,"delayed","delayed",1892523756,null)], null);
}));

(missionary.impl.Reactor.Process.cljs$lang$type = true);

(missionary.impl.Reactor.Process.cljs$lang$ctorStr = "missionary.impl.Reactor/Process");

(missionary.impl.Reactor.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Reactor/Process");
}));

/**
 * Positional factory function for missionary.impl.Reactor/Process.
 */
missionary.impl.Reactor.__GT_Process = (function missionary$impl$Reactor$__GT_Process(success,failure,result,kill,boot,alive,active,current,reaction,schedule,subscriber,delayed){
return (new missionary.impl.Reactor.Process(success,failure,result,kill,boot,alive,active,current,reaction,schedule,subscriber,delayed));
});

missionary.impl.Reactor.stale = ({});
missionary.impl.Reactor.error = ({});
missionary.impl.Reactor.current = null;
missionary.impl.Reactor.delayed = null;
missionary.impl.Reactor.lt = (function missionary$impl$Reactor$lt(x,y){
if((x == null)){
return true;
} else {
if((y == null)){
return false;
} else {
var xl = x.length;
var yl = y.length;
var ml = (function (){var x__5133__auto__ = xl;
var y__5134__auto__ = yl;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var i = (0);
while(true){
if((i < ml)){
var xi = (x[i]);
var yi = (y[i]);
if((xi === yi)){
var G__40538 = (i + (1));
i = G__40538;
continue;
} else {
return (xi < yi);
}
} else {
return (xl > yl);
}
break;
}
}
}
});
missionary.impl.Reactor.link = (function missionary$impl$Reactor$link(x,y){
if(missionary.impl.Reactor.lt(x.ranks,y.ranks)){
(y.sibling = x.child);

(x.child = y);

return x;
} else {
(x.sibling = y.child);

(y.child = x);

return y;
}
});
missionary.impl.Reactor.dequeue = (function missionary$impl$Reactor$dequeue(pub){
var head = pub.child;
(pub.child = null);

var heap = null;
var prev = null;
var head__$1 = head;
while(true){
if((head__$1 == null)){
if((prev == null)){
return heap;
} else {
if((heap == null)){
return prev;
} else {
return missionary.impl.Reactor.link(heap,prev);
}
}
} else {
var next = head__$1.sibling;
(head__$1.sibling = null);

if((prev == null)){
var G__40541 = heap;
var G__40542 = head__$1;
var G__40543 = next;
heap = G__40541;
prev = G__40542;
head__$1 = G__40543;
continue;
} else {
var head__$2 = missionary.impl.Reactor.link(prev,head__$1);
var G__40544 = (((heap == null))?head__$2:missionary.impl.Reactor.link(heap,head__$2));
var G__40545 = null;
var G__40546 = next;
heap = G__40544;
prev = G__40545;
head__$1 = G__40546;
continue;
}
}
break;
}
});
missionary.impl.Reactor.schedule = (function missionary$impl$Reactor$schedule(pub){
var ps = pub.process;
var temp__5806__auto__ = ps.schedule;
if((temp__5806__auto__ == null)){
(ps.schedule = pub);

(ps.delayed = missionary.impl.Reactor.delayed);

return (missionary.impl.Reactor.delayed = ps);
} else {
var sch = temp__5806__auto__;
return (ps.schedule = missionary.impl.Reactor.link(pub,sch));
}
});
missionary.impl.Reactor.pull = (function missionary$impl$Reactor$pull(pub){
var ps = pub.process;
var cur = ps.subscriber;
(ps.subscriber = pub);

(pub.value = missionary.impl.Reactor.error);

try{(pub.value = cljs.core.deref(pub.iterator));
}catch (e40361){var e_40549 = e40361;
if((ps === ps.result)){
(ps.result = e_40549);

var k_40550 = ps.kill;
if(cljs.core.truth_((k_40550.busy = cljs.core.not(k_40550.busy)))){
missionary.impl.Reactor.schedule(k_40550);
} else {
}
} else {
}
}
return (ps.subscriber = cur);
});
missionary.impl.Reactor.sample = (function missionary$impl$Reactor$sample(pub){
while(true){
missionary.impl.Reactor.pull(pub);

if(cljs.core.truth_((pub.busy = cljs.core.not(pub.busy)))){
if(cljs.core.truth_(pub.done)){
return missionary.impl.Reactor.schedule(pub);
} else {
continue;
}
} else {
return null;
}
break;
}
});
missionary.impl.Reactor.touch = (function missionary$impl$Reactor$touch(pub){
var ps = pub.process;
if(cljs.core.truth_(pub.done)){
var prv = pub.prev;
(pub.prev = null);

if((pub === prv)){
return (ps.alive = null);
} else {
var nxt = pub.next;
(nxt.prev = prv);

(prv.next = nxt);

if((pub === ps.alive)){
return (ps.alive = prv);
} else {
return null;
}
}
} else {
if((pub === pub.active)){
(pub.active = ps.active);

(ps.active = pub);

(pub.pending = (1));

return missionary.impl.Reactor.pull(pub);
} else {
if(cljs.core.truth_(pub.live)){
return (pub.value = missionary.impl.Reactor.stale);
} else {
return missionary.impl.Reactor.sample(pub);
}
}
}
});
missionary.impl.Reactor.ack = (function missionary$impl$Reactor$ack(pub){
if(((pub.pending = (pub.pending - (1))) === (0))){
(pub.value = null);

if(cljs.core.truth_((pub.busy = cljs.core.not(pub.busy)))){
return missionary.impl.Reactor.schedule(pub);
} else {
return null;
}
} else {
return null;
}
});
missionary.impl.Reactor.propagate = (function missionary$impl$Reactor$propagate(pub){
var ps = pub.process;
(missionary.impl.Reactor.current = ps);

var pub_40551__$1 = pub;
while(true){
(ps.reaction = missionary.impl.Reactor.dequeue(pub_40551__$1));

(ps.current = pub_40551__$1);

missionary.impl.Reactor.touch(pub_40551__$1);

var temp__5808__auto___40552 = pub_40551__$1.subs;
if((temp__5808__auto___40552 == null)){
} else {
var t_40553 = temp__5808__auto___40552;
(pub_40551__$1.subs = null);

var s_40554 = t_40553;
while(true){
var s_40555__$1 = s_40554.next;
(s_40555__$1.prev = null);

if((s_40555__$1 === t_40553)){
} else {
var G__40556 = s_40555__$1;
s_40554 = G__40556;
continue;
}
break;
}

var n_40557 = t_40553.next;
while(true){
var s_40558 = n_40557;
var n_40559__$1 = s_40558.next;
(s_40558.next = null);

if((pub_40551__$1.pending > (0))){
(pub_40551__$1.pending = (pub_40551__$1.pending + (1)));
} else {
}

(ps.subscriber = s_40558.subscriber);

var fexpr__40379_40560 = (((pub_40551__$1.prev == null))?s_40558.terminator:s_40558.notifier);
(fexpr__40379_40560.cljs$core$IFn$_invoke$arity$0 ? fexpr__40379_40560.cljs$core$IFn$_invoke$arity$0() : fexpr__40379_40560.call(null));

(ps.subscriber = null);

if((s_40558 === t_40553)){
} else {
var G__40561 = n_40559__$1;
n_40557 = G__40561;
continue;
}
break;
}
}

var temp__5808__auto___40562 = ps.reaction;
if((temp__5808__auto___40562 == null)){
} else {
var r_40563 = temp__5808__auto___40562;
var G__40564 = r_40563;
pub_40551__$1 = G__40564;
continue;
}
break;
}

(ps.current = null);

(missionary.impl.Reactor.current = null);

while(true){
var temp__5808__auto___40565 = ps.active;
if((temp__5808__auto___40565 == null)){
} else {
var pub_40566__$1 = temp__5808__auto___40565;
(ps.active = pub_40566__$1.active);

(pub_40566__$1.active = (((missionary.impl.Reactor.error === pub_40566__$1.value))?null:pub_40566__$1));

missionary.impl.Reactor.ack(pub_40566__$1);

continue;
}
break;
}

if((ps.alive == null)){
var temp__5808__auto__ = ps.boot;
if((temp__5808__auto__ == null)){
return null;
} else {
var pub__$1 = temp__5808__auto__;
(ps.boot = null);

if((ps.result === ps)){
(ps.result = pub__$1.value);

return ps.success;
} else {
return ps.failure;
}
}
} else {
return null;
}
});
missionary.impl.Reactor.hook = (function missionary$impl$Reactor$hook(s){
var pub = s.subscribed;
if((pub.prev == null)){
var fexpr__40381 = s.terminator;
return (fexpr__40381.cljs$core$IFn$_invoke$arity$0 ? fexpr__40381.cljs$core$IFn$_invoke$arity$0() : fexpr__40381.call(null));
} else {
var p = pub.subs;
(pub.subs = s);

if((p == null)){
return (s.next = (s.prev = s));
} else {
var n = p.next;
(p.next = s);

(n.prev = s);

(s.prev = p);

return (s.next = n);
}
}
});
missionary.impl.Reactor.cancel = (function missionary$impl$Reactor$cancel(pub){
if(cljs.core.truth_(pub.live)){
(pub.live = false);

var ps = pub.process;
var cur = ps.subscriber;
(ps.subscriber = pub);

var fexpr__40404_40567 = pub.iterator;
(fexpr__40404_40567.cljs$core$IFn$_invoke$arity$0 ? fexpr__40404_40567.cljs$core$IFn$_invoke$arity$0() : fexpr__40404_40567.call(null));

(ps.subscriber = cur);

if((missionary.impl.Reactor.stale === pub.value)){
return missionary.impl.Reactor.sample(pub);
} else {
return null;
}
} else {
return null;
}
});
missionary.impl.Reactor.failer = (function missionary$impl$Reactor$failer(n,t,e){
(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return missionary.impl.Reactor.__GT_Failer(t,e);
});
missionary.impl.Reactor.free = (function missionary$impl$Reactor$free(pub){
if((pub.process === missionary.impl.Reactor.current)){
} else {
throw (new Error("Cancellation failure : not in reactor context."));
}

return missionary.impl.Reactor.cancel(pub);
});
missionary.impl.Reactor.subscribe = (function missionary$impl$Reactor$subscribe(pub,n,t){
var ps = pub.process;
var sub = ps.subscriber;
if((!((ps === missionary.impl.Reactor.current)))){
return missionary.impl.Reactor.failer(n,t,(new Error("Subscription failure : not in reactor context.")));
} else {
if((sub === ps.boot)){
return missionary.impl.Reactor.failer(n,t,(new Error("Subscription failure : not a subscriber.")));
} else {
var s = missionary.impl.Reactor.__GT_Subscription(n,t,sub,pub,null,null);
if((pub.active === pub)){
missionary.impl.Reactor.hook(s);
} else {
if((pub.pending > (0))){
(pub.pending = (pub.pending + (1)));
} else {
}

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));
}

return s;
}
}
});
missionary.impl.Reactor.unsubscribe = (function missionary$impl$Reactor$unsubscribe(s){
var sub = s.subscriber;
var ps = sub.process;
if((ps === missionary.impl.Reactor.current)){
} else {
throw (new Error("Unsubscription failure : not in reactor context."));
}

var temp__5808__auto__ = s.subscribed;
if((temp__5808__auto__ == null)){
return null;
} else {
var pub = temp__5808__auto__;
(s.subscribed = null);

var temp__5806__auto__ = s.prev;
if((temp__5806__auto__ == null)){
if((pub.pending > (0))){
return missionary.impl.Reactor.ack(pub);
} else {
return null;
}
} else {
var p = temp__5806__auto__;
var n = s.next;
(s.prev = null);

(s.next = null);

if((p === s)){
(pub.subs = null);
} else {
(n.prev = p);

(p.next = n);

if((s === pub.subs)){
(pub.subs = p);
} else {
}
}

var cur = ps.subscriber;
(ps.subscriber = sub);

var fexpr__40438_40568 = s.notifier;
(fexpr__40438_40568.cljs$core$IFn$_invoke$arity$0 ? fexpr__40438_40568.cljs$core$IFn$_invoke$arity$0() : fexpr__40438_40568.call(null));

return (ps.subscriber = cur);
}
}
});
missionary.impl.Reactor.push = (function missionary$impl$Reactor$push(s){
var sub = s.subscriber;
var ps = sub.process;
if((ps === missionary.impl.Reactor.current)){
} else {
throw (new Error("Transfer failure : not in reactor context."));
}

var value = (function (){var temp__5806__auto__ = s.subscribed;
if((temp__5806__auto__ == null)){
return missionary.impl.Reactor.error;
} else {
var pub = temp__5806__auto__;
var value = pub.value;
if((pub.pending > (0))){
missionary.impl.Reactor.ack(pub);

return value;
} else {
if((value === missionary.impl.Reactor.stale)){
missionary.impl.Reactor.sample(pub);

return pub.value;
} else {
return value;
}
}
}
})();
var cur = ps.subscriber;
(ps.subscriber = sub);

if((value === missionary.impl.Reactor.error)){
var fexpr__40442_40569 = s.terminator;
(fexpr__40442_40569.cljs$core$IFn$_invoke$arity$0 ? fexpr__40442_40569.cljs$core$IFn$_invoke$arity$0() : fexpr__40442_40569.call(null));

(ps.subscriber = cur);

throw (new missionary.Cancelled("Subscription cancelled."));
} else {
missionary.impl.Reactor.hook(s);

(ps.subscriber = cur);

return value;
}
});
missionary.impl.Reactor.event = (function missionary$impl$Reactor$event(pub){
var temp__5806__auto__ = missionary.impl.Reactor.current;
if((temp__5806__auto__ == null)){
if(cljs.core.truth_((pub.busy = cljs.core.not(pub.busy)))){
var temp__5808__auto___40570 = missionary.impl.Reactor.propagate(pub);
if((temp__5808__auto___40570 == null)){
} else {
var cb_40571 = temp__5808__auto___40570;
var G__40443_40572 = pub.process.result;
(cb_40571.cljs$core$IFn$_invoke$arity$1 ? cb_40571.cljs$core$IFn$_invoke$arity$1(G__40443_40572) : cb_40571.call(null,G__40443_40572));
}
} else {
}

while(true){
var temp__5808__auto__ = missionary.impl.Reactor.delayed;
if((temp__5808__auto__ == null)){
return null;
} else {
var ps = temp__5808__auto__;
(missionary.impl.Reactor.delayed = ps.delayed);

(ps.delayed = null);

var pub__$1 = ps.schedule;
(ps.schedule = null);

var temp__5808__auto___40573__$1 = missionary.impl.Reactor.propagate(pub__$1);
if((temp__5808__auto___40573__$1 == null)){
} else {
var cb_40574 = temp__5808__auto___40573__$1;
var G__40444_40575 = ps.result;
(cb_40574.cljs$core$IFn$_invoke$arity$1 ? cb_40574.cljs$core$IFn$_invoke$arity$1(G__40444_40575) : cb_40574.call(null,G__40444_40575));
}

continue;
}
break;
}
} else {
var ps = temp__5806__auto__;
if(cljs.core.truth_((pub.busy = cljs.core.not(pub.busy)))){
if((ps === pub.process)){
if(missionary.impl.Reactor.lt(ps.current.ranks,pub.ranks)){
return (ps.reaction = (function (){var temp__5806__auto____$1 = ps.reaction;
if((temp__5806__auto____$1 == null)){
return pub;
} else {
var r = temp__5806__auto____$1;
return missionary.impl.Reactor.link(pub,r);
}
})());
} else {
return missionary.impl.Reactor.schedule(pub);
}
} else {
return missionary.impl.Reactor.schedule(pub);
}
} else {
return null;
}
}
});
missionary.impl.Reactor.kill = (function (){
if((typeof missionary !== 'undefined') && (typeof missionary.impl !== 'undefined') && (typeof missionary.impl.Reactor !== 'undefined') && (typeof missionary.impl.Reactor.t_missionary$impl$Reactor40446 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
missionary.impl.Reactor.t_missionary$impl$Reactor40446 = (function (meta40447){
this.meta40447 = meta40447;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Reactor.t_missionary$impl$Reactor40446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40448,meta40447__$1){
var self__ = this;
var _40448__$1 = this;
return (new missionary.impl.Reactor.t_missionary$impl$Reactor40446(meta40447__$1));
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor40446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40448){
var self__ = this;
var _40448__$1 = this;
return self__.meta40447;
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor40446.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var ps = missionary.impl.Reactor.current;
var temp__5808__auto___40576 = ps.alive;
if((temp__5808__auto___40576 == null)){
} else {
var t_40577 = temp__5808__auto___40576;
var pub_40578 = t_40577.next;
while(true){
missionary.impl.Reactor.cancel(pub_40578);

var temp__5808__auto___40579__$1 = ps.alive;
if((temp__5808__auto___40579__$1 == null)){
} else {
var t_40580__$1 = temp__5808__auto___40579__$1;
var pub_40581__$1 = (function (){var pub_40581__$1 = pub_40578;
while(true){
var pub__$2 = pub_40581__$1.next;
if((pub__$2.prev == null)){
var G__40582 = pub__$2;
pub_40581__$1 = G__40582;
continue;
} else {
return pub__$2;
}
break;
}
})();
if((pub_40581__$1 === t_40580__$1.next)){
} else {
var G__40583 = pub_40581__$1;
pub_40578 = G__40583;
continue;
}
}
break;
}
}

return true;
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor40446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40447","meta40447",513715218,null)], null);
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor40446.cljs$lang$type = true);

(missionary.impl.Reactor.t_missionary$impl$Reactor40446.cljs$lang$ctorStr = "missionary.impl.Reactor/t_missionary$impl$Reactor40446");

(missionary.impl.Reactor.t_missionary$impl$Reactor40446.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Reactor/t_missionary$impl$Reactor40446");
}));

/**
 * Positional factory function for missionary.impl.Reactor/t_missionary$impl$Reactor40446.
 */
missionary.impl.Reactor.__GT_t_missionary$impl$Reactor40446 = (function missionary$impl$Reactor$__GT_t_missionary$impl$Reactor40446(meta40447){
return (new missionary.impl.Reactor.t_missionary$impl$Reactor40446(meta40447));
});

}

return (new missionary.impl.Reactor.t_missionary$impl$Reactor40446(cljs.core.PersistentArrayMap.EMPTY));
})()
;
missionary.impl.Reactor.zero = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((0));
missionary.impl.Reactor.run = (function missionary$impl$Reactor$run(init,s,f){
var ps = missionary.impl.Reactor.__GT_Process(s,f,null,null,null,null,null,null,null,null,null,null);
var k = missionary.impl.Reactor.__GT_Publisher(ps,missionary.impl.Reactor.kill,null,(0),(0),false,false,false,false,null,null,null,null,null,null);
var b = missionary.impl.Reactor.__GT_Publisher(ps,(function (){
if((typeof missionary !== 'undefined') && (typeof missionary.impl !== 'undefined') && (typeof missionary.impl.Reactor !== 'undefined') && (typeof missionary.impl.Reactor.t_missionary$impl$Reactor40456 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
missionary.impl.Reactor.t_missionary$impl$Reactor40456 = (function (init,s,f,ps,k,meta40457){
this.init = init;
this.s = s;
this.f = f;
this.ps = ps;
this.k = k;
this.meta40457 = meta40457;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Reactor.t_missionary$impl$Reactor40456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40458,meta40457__$1){
var self__ = this;
var _40458__$1 = this;
return (new missionary.impl.Reactor.t_missionary$impl$Reactor40456(self__.init,self__.s,self__.f,self__.ps,self__.k,meta40457__$1));
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor40456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40458){
var self__ = this;
var _40458__$1 = this;
return self__.meta40457;
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor40456.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.init.cljs$core$IFn$_invoke$arity$0 ? self__.init.cljs$core$IFn$_invoke$arity$0() : self__.init.call(null));
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor40456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"init","init",-234949907,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ps","ps",1932889573,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta40457","meta40457",-520187780,null)], null);
}));

(missionary.impl.Reactor.t_missionary$impl$Reactor40456.cljs$lang$type = true);

(missionary.impl.Reactor.t_missionary$impl$Reactor40456.cljs$lang$ctorStr = "missionary.impl.Reactor/t_missionary$impl$Reactor40456");

(missionary.impl.Reactor.t_missionary$impl$Reactor40456.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Reactor/t_missionary$impl$Reactor40456");
}));

/**
 * Positional factory function for missionary.impl.Reactor/t_missionary$impl$Reactor40456.
 */
missionary.impl.Reactor.__GT_t_missionary$impl$Reactor40456 = (function missionary$impl$Reactor$run_$___GT_t_missionary$impl$Reactor40456(init__$1,s__$1,f__$1,ps__$1,k__$1,meta40457){
return (new missionary.impl.Reactor.t_missionary$impl$Reactor40456(init__$1,s__$1,f__$1,ps__$1,k__$1,meta40457));
});

}

return (new missionary.impl.Reactor.t_missionary$impl$Reactor40456(init,s,f,ps,k,cljs.core.PersistentArrayMap.EMPTY));
})()
,missionary.impl.Reactor.zero,(0),(0),false,false,false,null,null,null,null,null,null,null);
(ps.kill = k);

(ps.boot = b);

(ps.result = ps);

missionary.impl.Reactor.event(b);

return ps;
});
missionary.impl.Reactor.publish = (function missionary$impl$Reactor$publish(flow,continuous){
var ps = (function (){var G__40471 = missionary.impl.Reactor.current;
if((G__40471 == null)){
throw (new Error("Publication failure : not in reactor context."));
} else {
}

return G__40471;
})();
var cur = ps.subscriber;
var pub = missionary.impl.Reactor.__GT_Publisher(ps,null,(function (){var n = cur.ranks.length;
var a = (new Array((n + (1))));
var n__5636__auto___40584 = n;
var i_40585 = (0);
while(true){
if((i_40585 < n__5636__auto___40584)){
(a[i_40585] = (cur.ranks[i_40585]));

var G__40586 = (i_40585 + (1));
i_40585 = G__40586;
continue;
} else {
}
break;
}

var G__40473 = a;
(G__40473[n] = (function (){var G__40474 = cur.children;
(cur.children = (G__40474 + (1)));

return G__40474;
})());

return G__40473;
})(),(0),(0),true,true,false,null,null,null,null,null,null,null);
if(cljs.core.truth_(continuous)){
} else {
(pub.active = pub);
}

var temp__5806__auto___40587 = ps.alive;
if((temp__5806__auto___40587 == null)){
(pub.next = (pub.prev = pub));
} else {
var p_40588 = temp__5806__auto___40587;
var n_40589 = p_40588.next;
(p_40588.next = pub);

(n_40589.prev = pub);

(pub.prev = p_40588);

(pub.next = n_40589);
}

(ps.alive = pub);

(ps.subscriber = pub);

(pub.iterator = (function (){var G__40479 = (function (){
return missionary.impl.Reactor.event(pub);
});
var G__40480 = (function (){
(pub.done = true);

return missionary.impl.Reactor.event(pub);
});
return (flow.cljs$core$IFn$_invoke$arity$2 ? flow.cljs$core$IFn$_invoke$arity$2(G__40479,G__40480) : flow.call(null,G__40479,G__40480));
})());

(ps.subscriber = cur);

if(cljs.core.truth_(ps.kill.value)){
missionary.impl.Reactor.cancel(pub);
} else {
}

if(cljs.core.truth_((pub.busy = cljs.core.not(pub.busy)))){
missionary.impl.Reactor.touch(pub);
} else {
if(cljs.core.truth_(continuous)){
missionary.impl.Reactor.cancel(pub);

throw (new Error("Publication failure : undefined continuous flow."));
} else {
}
}

return pub;
});

//# sourceMappingURL=missionary.impl.Reactor.js.map
