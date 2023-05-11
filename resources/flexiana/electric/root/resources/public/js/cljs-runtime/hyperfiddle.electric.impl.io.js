goog.provide('hyperfiddle.electric.impl.io');
(com.cognitect.transit.types.UUID.prototype.cljs$core$IUUID$ = cljs.core.PROTOCOL_SENTINEL);
hyperfiddle.electric.impl.io.default_write_handler = cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((function (x){
hyperfiddle.electric.impl.io._last_unserializable_for_repl = x;

console.log("Unserializable reference transfer:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));

return "_";
}),(function (x){
return null;
}),(function (_){
return "";
}));
/**
 * Builds a minimal, cljc map/bounded-queue cache.
 *   One slot per key (map).
 *   Reaching `size` pops oldest value (bounded-queue).
 */
hyperfiddle.electric.impl.io.__GT_cache = (function hyperfiddle$electric$impl$io$__GT_cache(size){
var G__43417 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((size * (2)) + (1)));
var arr43419_43824 = G__43417;
(arr43419_43824[(size * (2))] = cljs.core.identity((0)));

return G__43417;
});
hyperfiddle.electric.impl.io.cache_add = (function hyperfiddle$electric$impl$io$cache_add(cache,k,v){
if(cljs.core.truth_((function (){var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
var arr43428_43826 = cache;
(arr43428_43826[(i + (1))] = cljs.core.identity(v));

return true;
} else {
var G__43827 = (i + (2));
i = G__43827;
continue;
}
} else {
return null;
}
break;
}
})())){
return null;
} else {
var widx = hyperfiddle.electric.impl.array_fields.getswap(cache,(cljs.core.count(cache) - (1)),(function (p1__43422_SHARP_){
return cljs.core.mod((p1__43422_SHARP_ + (2)),(cljs.core.count(cache) - (1)));
}));
var arr43432 = cache;
(arr43432[widx] = cljs.core.identity(k));

return (arr43432[(widx + (1))] = cljs.core.identity(v));
}
});
hyperfiddle.electric.impl.io.cache_get = (function hyperfiddle$electric$impl$io$cache_get(cache,k){
var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
return hyperfiddle.electric.impl.array_fields.get(cache,(i + (1)));
} else {
var G__43831 = (i + (2));
i = G__43831;
continue;
}
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.io.cache__GT_map = (function hyperfiddle$electric$impl$io$cache__GT_map(cache){
var i = (0);
var ac = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
var G__43832 = (i + (2));
var G__43833 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ac,hyperfiddle.electric.impl.array_fields.get(cache,i),hyperfiddle.electric.impl.array_fields.get(cache,(i + (1))));
i = G__43832;
ac = G__43833;
continue;
} else {
return cljs.core.persistent_BANG_(ac);
}
break;
}
});
hyperfiddle.electric.impl.io._BANG_ex_cache = hyperfiddle.electric.impl.io.__GT_cache((16));
hyperfiddle.electric.impl.io.save_original_ex_BANG_ = (function hyperfiddle$electric$impl$io$save_original_ex_BANG_(fi){
var id = hyperfiddle.electric.debug.ex_id(fi);
var temp__5808__auto___43834 = cljs.core.ex_cause(fi);
if((temp__5808__auto___43834 == null)){
} else {
var cause_43835 = temp__5808__auto___43834;
if((cause_43835 instanceof hyperfiddle.electric.FailureInfo)){
} else {
hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_ex_cache,id,cause_43835);
}
}

return id;
});
hyperfiddle.electric.impl.io.get_original_ex = (function hyperfiddle$electric$impl$io$get_original_ex(id){
return hyperfiddle.electric.impl.io.cache_get(hyperfiddle.electric.impl.io._BANG_ex_cache,id);
});
hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_ = null;
hyperfiddle.electric.impl.io.failure_writer = cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((function (_){
return "failure";
}),(function (x){
var err = x.error;
if((err instanceof missionary.Cancelled)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancelled","cancelled",488726224)], null);
} else {
if((err instanceof hyperfiddle.electric.Pending)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending","pending",-220036727)], null);
} else {
if((err instanceof hyperfiddle.electric.Remote)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576),hyperfiddle.electric.debug.serializable(cljs.core.ex_data(err))], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.ex_message(err),hyperfiddle.electric.debug.serializable(cljs.core.ex_data(err)),hyperfiddle.electric.impl.io.save_original_ex_BANG_(err)], null);

}
}
}
}));
hyperfiddle.electric.impl.io.write_opts = (function hyperfiddle$electric$impl$io$write_opts(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,cljs.core.PersistentArrayMap.createAsIfByAssoc([hyperfiddle.electric.Failure,hyperfiddle.electric.impl.io.failure_writer,new cljs.core.Keyword(null,"default","default",-1987822328),hyperfiddle.electric.impl.io.default_write_handler])], 0)),new cljs.core.Keyword(null,"default-handler","default-handler",-1028159207),hyperfiddle.electric.impl.io.default_write_handler], null);
});
hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_ = null;
hyperfiddle.electric.impl.io.failure_reader = cognitect.transit.read_handler((function (p__43449){
var vec__43450 = p__43449;
var seq__43451 = cljs.core.seq(vec__43450);
var first__43452 = cljs.core.first(seq__43451);
var seq__43451__$1 = cljs.core.next(seq__43451);
var tag = first__43452;
var args = seq__43451__$1;
var G__43453 = tag;
var G__43453__$1 = (((G__43453 instanceof cljs.core.Keyword))?G__43453.fqn:null);
switch (G__43453__$1) {
case "exception":
var vec__43455 = args;
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43455,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43455,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43455,(2),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4(message,data,id,null)));

break;
case "remote":
var vec__43458 = args;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43458,(0),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$2("Remote error",(function (){var or__5045__auto__ = data;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})())));

break;
case "pending":
return (new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending())));

break;
case "cancelled":
return (new hyperfiddle.electric.Failure((new missionary.Cancelled())));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43453__$1)].join('')));

}
}));
hyperfiddle.electric.impl.io.read_opts = (function hyperfiddle$electric$impl$io$read_opts(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.PersistentArrayMap(null, 1, ["failure",hyperfiddle.electric.impl.io.failure_reader], null)], 0))], null);
});
hyperfiddle.electric.impl.io.set_ints = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce_kv,(function (r,i,n){
var offset = (i << (2));
var G__43469 = r;
G__43469.setInt32(offset,n);

return G__43469;
}));
/**
 * Encode a control frame to a binary segment.
 */
hyperfiddle.electric.impl.io.encode_numbers = (function hyperfiddle$electric$impl$io$encode_numbers(xs){
var required = (cljs.core.count(xs) << (2));
var G__43470 = (new ArrayBuffer(required));
hyperfiddle.electric.impl.io.set_ints((new DataView(G__43470)),xs);

return G__43470;
});
/**
 * Decode a control frame from a binary segment.
 */
hyperfiddle.electric.impl.io.decode_numbers = (function hyperfiddle$electric$impl$io$decode_numbers(b){
return cljs.core.vec((function (){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.io !== 'undefined') && (typeof hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43472 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43472 = (function (b,meta43473){
this.b = b;
this.meta43473 = meta43473;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43474,meta43473__$1){
var self__ = this;
var _43474__$1 = this;
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43472(self__.b,meta43473__$1));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43474){
var self__ = this;
var _43474__$1 = this;
return self__.meta43473;
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43472.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,rf,r){
var self__ = this;
var ___$1 = this;
var l = self__.b.byteLength;
var v = (new DataView(self__.b));
var r__$1 = r;
var i = (0);
while(true){
if((i < l)){
var G__43843 = (function (){var G__43481 = r__$1;
var G__43482 = v.getInt32(i);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__43481,G__43482) : rf.call(null,G__43481,G__43482));
})();
var G__43844 = (i + (4));
r__$1 = G__43843;
i = G__43844;
continue;
} else {
return r__$1;
}
break;
}
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"meta43473","meta43473",1388494891,null)], null);
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43472.cljs$lang$type = true);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43472.cljs$lang$ctorStr = "hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io43472");

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43472.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io43472");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io43472.
 */
hyperfiddle.electric.impl.io.__GT_t_hyperfiddle$electric$impl$io43472 = (function hyperfiddle$electric$impl$io$decode_numbers_$___GT_t_hyperfiddle$electric$impl$io43472(b__$1,meta43473){
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43472(b__$1,meta43473));
});

}

return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43472(b,cljs.core.PersistentArrayMap.EMPTY));
})()
);
});
var _BANG_cache_43845 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),null], null));
hyperfiddle.electric.impl.io.transit_writer = (function hyperfiddle$electric$impl$io$transit_writer(){
return new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_43845,(function (p__43487){
var map__43488 = p__43487;
var map__43488__$1 = cljs.core.__destructure_map(map__43488);
var cache = map__43488__$1;
var write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43488__$1,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911));
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43488__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(write_handlers,hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_)){
if(cljs.core.truth_(writer)){
return cache;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,new cljs.core.Keyword(null,"writer","writer",-277568236),cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.write_opts()));
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.write_opts())], null);
}
})));
});
/**
 * Encode a data frame to transit json
 */
hyperfiddle.electric.impl.io.encode = (function hyperfiddle$electric$impl$io$encode(x){
return cognitect.transit.write(hyperfiddle.electric.impl.io.transit_writer(),x);
});
var _BANG_cache_43847 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),null], null));
hyperfiddle.electric.impl.io.transit_reader = (function hyperfiddle$electric$impl$io$transit_reader(){
return new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_43847,(function (p__43489){
var map__43490 = p__43489;
var map__43490__$1 = cljs.core.__destructure_map(map__43490);
var cache = map__43490__$1;
var read_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43490__$1,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315));
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43490__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(read_handlers,hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_)){
if(cljs.core.truth_(reader)){
return cache;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,new cljs.core.Keyword(null,"reader","reader",169660853),cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.read_opts()));
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.read_opts())], null);
}
})));
});
/**
 * Decode a data frame from transit json
 */
hyperfiddle.electric.impl.io.decode = (function hyperfiddle$electric$impl$io$decode(s){
return cognitect.transit.read(hyperfiddle.electric.impl.io.transit_reader(),s);
});
hyperfiddle.electric.impl.io.decode_str = (function hyperfiddle$electric$impl$io$decode_str(x){
try{var G__43494 = hyperfiddle.electric.impl.io.decode(x);
console.debug("\uD83D\uDD3D",G__43494);

return G__43494;
}catch (e43491){var t = e43491;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to decode",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),x], null),t);
}});
hyperfiddle.electric.impl.io.chunk_size = ((65536) >> (2));
hyperfiddle.electric.impl.io.message_reader = (function hyperfiddle$electric$impl$io$message_reader(_QMARK_read){

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43510_block_0 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43510_block_0(cr43510_state){
try{var cr43510_place_0 = cljs.core.transient$;
var cr43510_place_1 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr43510_place_2 = (function (){var G__43605 = cr43510_place_1;
var fexpr__43604 = cr43510_place_0;
return (fexpr__43604.cljs$core$IFn$_invoke$arity$1 ? fexpr__43604.cljs$core$IFn$_invoke$arity$1(G__43605) : fexpr__43604.call(null,G__43605));
})();
(cr43510_state[(0)] = cr43510_block_1);

(cr43510_state[(1)] = cr43510_place_2);

return cr43510_state;
}catch (e43601){var cr43510_exception = e43601;
(cr43510_state[(0)] = null);

throw cr43510_exception;
}});
var cr43510_block_2 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43510_block_2(cr43510_state){
try{var cr43510_place_4 = missionary.core.unpark();
var cr43510_place_5 = cr43510_place_4;
var cr43510_place_6 = typeof cr43510_place_5 === 'string';
var cr43510_place_7 = null;
if(cr43510_place_6){
(cr43510_state[(0)] = cr43510_block_9);

(cr43510_state[(3)] = cr43510_place_4);

return cr43510_state;
} else {
(cr43510_state[(0)] = cr43510_block_3);

(cr43510_state[(3)] = cr43510_place_4);

(cr43510_state[(2)] = cr43510_place_7);

return cr43510_state;
}
}catch (e43607){var cr43510_exception = e43607;
(cr43510_state[(0)] = null);

(cr43510_state[(1)] = null);

throw cr43510_exception;
}});
var cr43510_block_7 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43510_block_7(cr43510_state){
try{var cr43510_place_22 = (cr43510_state[(7)]);
var cr43510_place_32 = cljs.core.persistent_BANG_;
var cr43510_place_33 = cr43510_place_22;
var cr43510_place_34 = (function (){var G__43611 = cr43510_place_33;
var fexpr__43610 = cr43510_place_32;
return (fexpr__43610.cljs$core$IFn$_invoke$arity$1 ? fexpr__43610.cljs$core$IFn$_invoke$arity$1(G__43611) : fexpr__43610.call(null,G__43611));
})();
(cr43510_state[(0)] = cr43510_block_8);

(cr43510_state[(7)] = null);

(cr43510_state[(1)] = cr43510_place_34);

return cr43510_state;
}catch (e43608){var cr43510_exception = e43608;
(cr43510_state[(0)] = null);

(cr43510_state[(4)] = null);

(cr43510_state[(2)] = null);

(cr43510_state[(5)] = null);

(cr43510_state[(6)] = null);

(cr43510_state[(7)] = null);

(cr43510_state[(1)] = null);

throw cr43510_exception;
}});
var cr43510_block_10 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43510_block_10(cr43510_state){
try{var cr43510_place_7 = (cr43510_state[(2)]);
(cr43510_state[(0)] = null);

(cr43510_state[(2)] = null);

return cr43510_place_7;
}catch (e43613){var cr43510_exception = e43613;
(cr43510_state[(0)] = null);

(cr43510_state[(2)] = null);

throw cr43510_exception;
}});
var cr43510_block_3 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43510_block_3(cr43510_state){
try{var cr43510_place_4 = (cr43510_state[(3)]);
var cr43510_place_2 = (cr43510_state[(1)]);
var cr43510_place_8 = cljs.core.persistent_BANG_;
var cr43510_place_9 = cljs.core.conj_BANG_;
var cr43510_place_10 = cr43510_place_2;
var cr43510_place_11 = cr43510_place_4;
var cr43510_place_12 = cljs.core.transient$;
var cr43510_place_13 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr43510_place_14 = (function (){var G__43619 = cr43510_place_13;
var fexpr__43618 = cr43510_place_12;
return (fexpr__43618.cljs$core$IFn$_invoke$arity$1 ? fexpr__43618.cljs$core$IFn$_invoke$arity$1(G__43619) : fexpr__43618.call(null,G__43619));
})();
(cr43510_state[(0)] = cr43510_block_4);

(cr43510_state[(3)] = null);

(cr43510_state[(1)] = null);

(cr43510_state[(5)] = cr43510_place_8);

(cr43510_state[(4)] = cr43510_place_9);

(cr43510_state[(6)] = cr43510_place_10);

(cr43510_state[(3)] = cr43510_place_11);

(cr43510_state[(1)] = cr43510_place_14);

return cr43510_state;
}catch (e43614){var cr43510_exception = e43614;
(cr43510_state[(0)] = null);

(cr43510_state[(2)] = null);

(cr43510_state[(3)] = null);

(cr43510_state[(1)] = null);

throw cr43510_exception;
}});
var cr43510_block_1 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43510_block_1(cr43510_state){
try{var cr43510_place_3 = _QMARK_read;
(cr43510_state[(0)] = cr43510_block_2);

return missionary.core.park(cr43510_place_3);
}catch (e43622){var cr43510_exception = e43622;
(cr43510_state[(0)] = null);

(cr43510_state[(1)] = null);

throw cr43510_exception;
}});
var cr43510_block_8 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43510_block_8(cr43510_state){
try{var cr43510_place_9 = (cr43510_state[(4)]);
var cr43510_place_8 = (cr43510_state[(5)]);
var cr43510_place_10 = (cr43510_state[(6)]);
var cr43510_place_28 = (cr43510_state[(1)]);
var cr43510_place_35 = (function (){var G__43627 = cr43510_place_10;
var G__43628 = cr43510_place_28;
var fexpr__43626 = cr43510_place_9;
return (fexpr__43626.cljs$core$IFn$_invoke$arity$2 ? fexpr__43626.cljs$core$IFn$_invoke$arity$2(G__43627,G__43628) : fexpr__43626.call(null,G__43627,G__43628));
})();
var cr43510_place_36 = (function (){var G__43630 = cr43510_place_35;
var fexpr__43629 = cr43510_place_8;
return (fexpr__43629.cljs$core$IFn$_invoke$arity$1 ? fexpr__43629.cljs$core$IFn$_invoke$arity$1(G__43630) : fexpr__43629.call(null,G__43630));
})();
(cr43510_state[(0)] = cr43510_block_10);

(cr43510_state[(4)] = null);

(cr43510_state[(5)] = null);

(cr43510_state[(6)] = null);

(cr43510_state[(1)] = null);

(cr43510_state[(2)] = cr43510_place_36);

return cr43510_state;
}catch (e43624){var cr43510_exception = e43624;
(cr43510_state[(0)] = null);

(cr43510_state[(4)] = null);

(cr43510_state[(2)] = null);

(cr43510_state[(5)] = null);

(cr43510_state[(6)] = null);

(cr43510_state[(1)] = null);

throw cr43510_exception;
}});
var cr43510_block_6 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43510_block_6(cr43510_state){
try{var cr43510_place_22 = (cr43510_state[(7)]);
var cr43510_place_30 = missionary.core.unpark();
var cr43510_place_31 = cr43510_place_22;
(cr43510_state[(0)] = cr43510_block_4);

(cr43510_state[(7)] = null);

(cr43510_state[(3)] = cr43510_place_30);

(cr43510_state[(1)] = cr43510_place_31);

return cr43510_state;
}catch (e43634){var cr43510_exception = e43634;
(cr43510_state[(0)] = null);

(cr43510_state[(1)] = null);

(cr43510_state[(3)] = null);

(cr43510_state[(4)] = null);

(cr43510_state[(2)] = null);

(cr43510_state[(5)] = null);

(cr43510_state[(6)] = null);

(cr43510_state[(7)] = null);

throw cr43510_exception;
}});
var cr43510_block_4 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43510_block_4(cr43510_state){
try{var cr43510_place_14 = (cr43510_state[(1)]);
var cr43510_place_11 = (cr43510_state[(3)]);
var cr43510_place_15 = hyperfiddle.electric.impl.io.decode_numbers;
var cr43510_place_16 = cr43510_place_11;
var cr43510_place_17 = (function (){var G__43640 = cr43510_place_16;
var fexpr__43639 = cr43510_place_15;
return (fexpr__43639.cljs$core$IFn$_invoke$arity$1 ? fexpr__43639.cljs$core$IFn$_invoke$arity$1(G__43640) : fexpr__43639.call(null,G__43640));
})();
var cr43510_place_18 = cljs.core.reduce;
var cr43510_place_19 = cljs.core.conj_BANG_;
var cr43510_place_20 = cr43510_place_14;
var cr43510_place_21 = cr43510_place_17;
var cr43510_place_22 = (function (){var G__43643 = cr43510_place_19;
var G__43644 = cr43510_place_20;
var G__43645 = cr43510_place_21;
var fexpr__43642 = cr43510_place_18;
return (fexpr__43642.cljs$core$IFn$_invoke$arity$3 ? fexpr__43642.cljs$core$IFn$_invoke$arity$3(G__43643,G__43644,G__43645) : fexpr__43642.call(null,G__43643,G__43644,G__43645));
})();
var cr43510_place_23 = cljs.core.count;
var cr43510_place_24 = cr43510_place_17;
var cr43510_place_25 = (function (){var G__43647 = cr43510_place_24;
var fexpr__43646 = cr43510_place_23;
return (fexpr__43646.cljs$core$IFn$_invoke$arity$1 ? fexpr__43646.cljs$core$IFn$_invoke$arity$1(G__43647) : fexpr__43646.call(null,G__43647));
})();
var cr43510_place_26 = hyperfiddle.electric.impl.io.chunk_size;
var cr43510_place_27 = (cr43510_place_25 < cr43510_place_26);
var cr43510_place_28 = null;
if(cr43510_place_27){
(cr43510_state[(0)] = cr43510_block_7);

(cr43510_state[(1)] = null);

(cr43510_state[(3)] = null);

(cr43510_state[(7)] = cr43510_place_22);

(cr43510_state[(1)] = cr43510_place_28);

return cr43510_state;
} else {
(cr43510_state[(0)] = cr43510_block_5);

(cr43510_state[(7)] = cr43510_place_22);

return cr43510_state;
}
}catch (e43636){var cr43510_exception = e43636;
(cr43510_state[(0)] = null);

(cr43510_state[(1)] = null);

(cr43510_state[(3)] = null);

(cr43510_state[(4)] = null);

(cr43510_state[(2)] = null);

(cr43510_state[(5)] = null);

(cr43510_state[(6)] = null);

throw cr43510_exception;
}});
var cr43510_block_9 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43510_block_9(cr43510_state){
try{var cr43510_place_4 = (cr43510_state[(3)]);
var cr43510_place_2 = (cr43510_state[(1)]);
var cr43510_place_37 = cljs.core.conj_BANG_;
var cr43510_place_38 = cr43510_place_2;
var cr43510_place_39 = hyperfiddle.electric.impl.io.decode_str;
var cr43510_place_40 = cr43510_place_4;
var cr43510_place_41 = (function (){var G__43650 = cr43510_place_40;
var fexpr__43649 = cr43510_place_39;
return (fexpr__43649.cljs$core$IFn$_invoke$arity$1 ? fexpr__43649.cljs$core$IFn$_invoke$arity$1(G__43650) : fexpr__43649.call(null,G__43650));
})();
var cr43510_place_42 = (function (){var G__43652 = cr43510_place_38;
var G__43653 = cr43510_place_41;
var fexpr__43651 = cr43510_place_37;
return (fexpr__43651.cljs$core$IFn$_invoke$arity$2 ? fexpr__43651.cljs$core$IFn$_invoke$arity$2(G__43652,G__43653) : fexpr__43651.call(null,G__43652,G__43653));
})();
(cr43510_state[(0)] = cr43510_block_1);

(cr43510_state[(3)] = null);

(cr43510_state[(1)] = cr43510_place_42);

return cr43510_state;
}catch (e43648){var cr43510_exception = e43648;
(cr43510_state[(0)] = null);

(cr43510_state[(3)] = null);

(cr43510_state[(1)] = null);

throw cr43510_exception;
}});
var cr43510_block_5 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43510_block_5(cr43510_state){
try{var cr43510_place_29 = _QMARK_read;
(cr43510_state[(0)] = cr43510_block_6);

return missionary.core.park(cr43510_place_29);
}catch (e43654){var cr43510_exception = e43654;
(cr43510_state[(0)] = null);

(cr43510_state[(1)] = null);

(cr43510_state[(3)] = null);

(cr43510_state[(4)] = null);

(cr43510_state[(2)] = null);

(cr43510_state[(5)] = null);

(cr43510_state[(6)] = null);

(cr43510_state[(7)] = null);

throw cr43510_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43655 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8));
(G__43655[(0)] = cr43510_block_0);

return G__43655;
})());
})(),missionary.core.sp_run);
});
/**
 * Returns a function taking an Electric message and returning a task writing it as individual frames using provided
 * function. Might cut a message into chunks if its size would exceed the server payload limit.
 * An empty message (0b) is written to notify the end of frame.
 */
hyperfiddle.electric.impl.io.message_writer = (function hyperfiddle$electric$impl$io$message_writer(write){
return (function (p1__43656_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43657_block_11 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43657_block_11(cr43657_state){
try{var cr43657_place_48 = (cr43657_state[(2)]);
var cr43657_place_62 = hyperfiddle.electric.impl.io.encode_numbers;
var cr43657_place_63 = cljs.core.subvec;
var cr43657_place_64 = cr43657_place_48;
var cr43657_place_65 = (0);
var cr43657_place_66 = hyperfiddle.electric.impl.io.chunk_size;
var cr43657_place_67 = (function (){var G__43740 = cr43657_place_64;
var G__43741 = cr43657_place_65;
var G__43742 = cr43657_place_66;
var fexpr__43739 = cr43657_place_63;
return (fexpr__43739.cljs$core$IFn$_invoke$arity$3 ? fexpr__43739.cljs$core$IFn$_invoke$arity$3(G__43740,G__43741,G__43742) : fexpr__43739.call(null,G__43740,G__43741,G__43742));
})();
var cr43657_place_68 = (function (){var G__43744 = cr43657_place_67;
var fexpr__43743 = cr43657_place_62;
return (fexpr__43743.cljs$core$IFn$_invoke$arity$1 ? fexpr__43743.cljs$core$IFn$_invoke$arity$1(G__43744) : fexpr__43743.call(null,G__43744));
})();
var cr43657_place_69 = write;
var cr43657_place_70 = cr43657_place_68;
var cr43657_place_71 = (function (){var G__43746 = cr43657_place_70;
var fexpr__43745 = cr43657_place_69;
return (fexpr__43745.cljs$core$IFn$_invoke$arity$1 ? fexpr__43745.cljs$core$IFn$_invoke$arity$1(G__43746) : fexpr__43745.call(null,G__43746));
})();
(cr43657_state[(0)] = cr43657_block_12);

return missionary.core.park(cr43657_place_71);
}catch (e43738){var cr43657_exception = e43738;
(cr43657_state[(0)] = null);

(cr43657_state[(2)] = null);

(cr43657_state[(1)] = null);

throw cr43657_exception;
}});
var cr43657_block_2 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43657_block_2(cr43657_state){
try{var cr43657_place_5 = (cr43657_state[(2)]);
var cr43657_place_10 = cr43657_place_5;
var cr43657_place_11 = cljs.core.seq;
var cr43657_place_12 = cr43657_place_10;
var cr43657_place_13 = (function (){var G__43749 = cr43657_place_12;
var fexpr__43748 = cr43657_place_11;
return (fexpr__43748.cljs$core$IFn$_invoke$arity$1 ? fexpr__43748.cljs$core$IFn$_invoke$arity$1(G__43749) : fexpr__43748.call(null,G__43749));
})();
var cr43657_place_14 = cljs.core.first;
var cr43657_place_15 = cr43657_place_13;
var cr43657_place_16 = (function (){var G__43751 = cr43657_place_15;
var fexpr__43750 = cr43657_place_14;
return (fexpr__43750.cljs$core$IFn$_invoke$arity$1 ? fexpr__43750.cljs$core$IFn$_invoke$arity$1(G__43751) : fexpr__43750.call(null,G__43751));
})();
var cr43657_place_17 = cljs.core.next;
var cr43657_place_18 = cr43657_place_13;
var cr43657_place_19 = (function (){var G__43753 = cr43657_place_18;
var fexpr__43752 = cr43657_place_17;
return (fexpr__43752.cljs$core$IFn$_invoke$arity$1 ? fexpr__43752.cljs$core$IFn$_invoke$arity$1(G__43753) : fexpr__43752.call(null,G__43753));
})();
var cr43657_place_20 = cr43657_place_16;
var cr43657_place_21 = cr43657_place_19;
var cr43657_place_22 = console.debug;
var cr43657_place_23 = "\uD83D\uDD3C";
var cr43657_place_24 = cr43657_place_20;
var cr43657_place_25 = (function (){var G__43755 = cr43657_place_23;
var G__43756 = cr43657_place_24;
var fexpr__43754 = cr43657_place_22;
return (fexpr__43754.cljs$core$IFn$_invoke$arity$2 ? fexpr__43754.cljs$core$IFn$_invoke$arity$2(G__43755,G__43756) : fexpr__43754.call(null,G__43755,G__43756));
})();
var cr43657_place_26 = null;
var cr43657_place_27 = false;
(cr43657_state[(0)] = cr43657_block_3);

(cr43657_state[(2)] = null);

(cr43657_state[(2)] = cr43657_place_27);

(cr43657_state[(3)] = cr43657_place_26);

(cr43657_state[(4)] = cr43657_place_20);

(cr43657_state[(5)] = cr43657_place_21);

return cr43657_state;
}catch (e43747){var cr43657_exception = e43747;
(cr43657_state[(0)] = null);

(cr43657_state[(1)] = null);

(cr43657_state[(2)] = null);

throw cr43657_exception;
}});
var cr43657_block_8 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43657_block_8(cr43657_state){
try{var cr43657_place_48 = (cr43657_state[(2)]);
var cr43657_place_49 = cljs.core.count;
var cr43657_place_50 = cr43657_place_48;
var cr43657_place_51 = (function (){var G__43759 = cr43657_place_50;
var fexpr__43758 = cr43657_place_49;
return (fexpr__43758.cljs$core$IFn$_invoke$arity$1 ? fexpr__43758.cljs$core$IFn$_invoke$arity$1(G__43759) : fexpr__43758.call(null,G__43759));
})();
var cr43657_place_52 = hyperfiddle.electric.impl.io.chunk_size;
var cr43657_place_53 = (cr43657_place_51 >= cr43657_place_52);
var cr43657_place_54 = null;
if(cr43657_place_53){
(cr43657_state[(0)] = cr43657_block_11);

return cr43657_state;
} else {
(cr43657_state[(0)] = cr43657_block_9);

(cr43657_state[(3)] = cr43657_place_54);

return cr43657_state;
}
}catch (e43757){var cr43657_exception = e43757;
(cr43657_state[(0)] = null);

(cr43657_state[(2)] = null);

(cr43657_state[(1)] = null);

throw cr43657_exception;
}});
var cr43657_block_0 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43657_block_0(cr43657_state){
try{var cr43657_place_0 = cljs.core.seq;
var cr43657_place_1 = cljs.core.pop;
var cr43657_place_2 = p1__43656_SHARP_;
var cr43657_place_3 = (function (){var G__43762 = cr43657_place_2;
var fexpr__43761 = cr43657_place_1;
return (fexpr__43761.cljs$core$IFn$_invoke$arity$1 ? fexpr__43761.cljs$core$IFn$_invoke$arity$1(G__43762) : fexpr__43761.call(null,G__43762));
})();
var cr43657_place_4 = (function (){var G__43764 = cr43657_place_3;
var fexpr__43763 = cr43657_place_0;
return (fexpr__43763.cljs$core$IFn$_invoke$arity$1 ? fexpr__43763.cljs$core$IFn$_invoke$arity$1(G__43764) : fexpr__43763.call(null,G__43764));
})();
(cr43657_state[(0)] = cr43657_block_1);

(cr43657_state[(1)] = cr43657_place_4);

return cr43657_state;
}catch (e43760){var cr43657_exception = e43760;
(cr43657_state[(0)] = null);

throw cr43657_exception;
}});
var cr43657_block_6 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43657_block_6(cr43657_state){
try{var cr43657_place_21 = (cr43657_state[(5)]);
var cr43657_place_44 = missionary.core.unpark();
var cr43657_place_45 = cr43657_place_21;
(cr43657_state[(0)] = cr43657_block_1);

(cr43657_state[(5)] = null);

(cr43657_state[(1)] = cr43657_place_45);

return cr43657_state;
}catch (e43765){var cr43657_exception = e43765;
(cr43657_state[(0)] = null);

(cr43657_state[(1)] = null);

(cr43657_state[(5)] = null);

throw cr43657_exception;
}});
var cr43657_block_9 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43657_block_9(cr43657_state){
try{var cr43657_place_48 = (cr43657_state[(2)]);
var cr43657_place_55 = hyperfiddle.electric.impl.io.encode_numbers;
var cr43657_place_56 = cr43657_place_48;
var cr43657_place_57 = (function (){var G__43768 = cr43657_place_56;
var fexpr__43767 = cr43657_place_55;
return (fexpr__43767.cljs$core$IFn$_invoke$arity$1 ? fexpr__43767.cljs$core$IFn$_invoke$arity$1(G__43768) : fexpr__43767.call(null,G__43768));
})();
var cr43657_place_58 = write;
var cr43657_place_59 = cr43657_place_57;
var cr43657_place_60 = (function (){var G__43770 = cr43657_place_59;
var fexpr__43769 = cr43657_place_58;
return (fexpr__43769.cljs$core$IFn$_invoke$arity$1 ? fexpr__43769.cljs$core$IFn$_invoke$arity$1(G__43770) : fexpr__43769.call(null,G__43770));
})();
(cr43657_state[(0)] = cr43657_block_10);

(cr43657_state[(2)] = null);

return missionary.core.park(cr43657_place_60);
}catch (e43766){var cr43657_exception = e43766;
(cr43657_state[(0)] = null);

(cr43657_state[(2)] = null);

(cr43657_state[(3)] = null);

(cr43657_state[(1)] = null);

throw cr43657_exception;
}});
var cr43657_block_7 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43657_block_7(cr43657_state){
try{var cr43657_place_46 = cljs.core.peek;
var cr43657_place_47 = p1__43656_SHARP_;
var cr43657_place_48 = (function (){var G__43773 = cr43657_place_47;
var fexpr__43772 = cr43657_place_46;
return (fexpr__43772.cljs$core$IFn$_invoke$arity$1 ? fexpr__43772.cljs$core$IFn$_invoke$arity$1(G__43773) : fexpr__43772.call(null,G__43773));
})();
(cr43657_state[(0)] = cr43657_block_8);

(cr43657_state[(2)] = cr43657_place_48);

return cr43657_state;
}catch (e43771){var cr43657_exception = e43771;
(cr43657_state[(0)] = null);

(cr43657_state[(1)] = null);

throw cr43657_exception;
}});
var cr43657_block_4 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43657_block_4(cr43657_state){
try{var cr43657_place_26 = (cr43657_state[(3)]);
var cr43657_place_20 = (cr43657_state[(4)]);
var cr43657_place_31 = cr43657_place_26;
var cr43657_place_32 = cljs.core.ex_info;
var cr43657_place_33 = "Failed to encode";
var cr43657_place_34 = new cljs.core.Keyword(null,"value","value",305978217);
var cr43657_place_35 = cr43657_place_20;
var cr43657_place_36 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr43657_place_34,cr43657_place_35]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr43657_place_37 = cr43657_place_31;
var cr43657_place_38 = (function (){var G__43776 = cr43657_place_33;
var G__43777 = cr43657_place_36;
var G__43778 = cr43657_place_37;
var fexpr__43775 = cr43657_place_32;
return (fexpr__43775.cljs$core$IFn$_invoke$arity$3 ? fexpr__43775.cljs$core$IFn$_invoke$arity$3(G__43776,G__43777,G__43778) : fexpr__43775.call(null,G__43776,G__43777,G__43778));
})();
var cr43657_place_39 = (function(){throw cr43657_place_38})();
(cr43657_state[(0)] = null);

(cr43657_state[(2)] = null);

(cr43657_state[(3)] = null);

(cr43657_state[(1)] = null);

(cr43657_state[(4)] = null);

(cr43657_state[(5)] = null);

return null;
}catch (e43774){var cr43657_exception = e43774;
(cr43657_state[(0)] = cr43657_block_5);

(cr43657_state[(4)] = null);

(cr43657_state[(2)] = true);

(cr43657_state[(3)] = cr43657_exception);

return cr43657_state;
}});
var cr43657_block_5 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43657_block_5(cr43657_state){
try{var cr43657_place_27 = (cr43657_state[(2)]);
var cr43657_place_26 = (cr43657_state[(3)]);
var cr43657_place_40 = (cljs.core.truth_(cr43657_place_27)?(function(){throw cr43657_place_26})():cr43657_place_26);
var cr43657_place_41 = write;
var cr43657_place_42 = cr43657_place_40;
var cr43657_place_43 = (function (){var G__43789 = cr43657_place_42;
var fexpr__43788 = cr43657_place_41;
return (fexpr__43788.cljs$core$IFn$_invoke$arity$1 ? fexpr__43788.cljs$core$IFn$_invoke$arity$1(G__43789) : fexpr__43788.call(null,G__43789));
})();
(cr43657_state[(0)] = cr43657_block_6);

(cr43657_state[(2)] = null);

(cr43657_state[(3)] = null);

return missionary.core.park(cr43657_place_43);
}catch (e43779){var cr43657_exception = e43779;
(cr43657_state[(0)] = null);

(cr43657_state[(2)] = null);

(cr43657_state[(3)] = null);

(cr43657_state[(1)] = null);

(cr43657_state[(5)] = null);

throw cr43657_exception;
}});
var cr43657_block_3 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43657_block_3(cr43657_state){
try{var cr43657_place_20 = (cr43657_state[(4)]);
var cr43657_place_28 = hyperfiddle.electric.impl.io.encode;
var cr43657_place_29 = cr43657_place_20;
var cr43657_place_30 = (function (){var G__43793 = cr43657_place_29;
var fexpr__43792 = cr43657_place_28;
return (fexpr__43792.cljs$core$IFn$_invoke$arity$1 ? fexpr__43792.cljs$core$IFn$_invoke$arity$1(G__43793) : fexpr__43792.call(null,G__43793));
})();
(cr43657_state[(0)] = cr43657_block_5);

(cr43657_state[(4)] = null);

(cr43657_state[(3)] = cr43657_place_30);

return cr43657_state;
}catch (e43791){var cr43657_exception = e43791;
(cr43657_state[(0)] = cr43657_block_4);

(cr43657_state[(3)] = cr43657_exception);

return cr43657_state;
}});
var cr43657_block_10 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43657_block_10(cr43657_state){
try{var cr43657_place_61 = missionary.core.unpark();
(cr43657_state[(0)] = cr43657_block_13);

(cr43657_state[(3)] = cr43657_place_61);

return cr43657_state;
}catch (e43794){var cr43657_exception = e43794;
(cr43657_state[(0)] = null);

(cr43657_state[(3)] = null);

(cr43657_state[(1)] = null);

throw cr43657_exception;
}});
var cr43657_block_14 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43657_block_14(cr43657_state){
try{var cr43657_place_9 = (cr43657_state[(1)]);
(cr43657_state[(0)] = null);

(cr43657_state[(1)] = null);

return cr43657_place_9;
}catch (e43795){var cr43657_exception = e43795;
(cr43657_state[(0)] = null);

(cr43657_state[(1)] = null);

throw cr43657_exception;
}});
var cr43657_block_12 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43657_block_12(cr43657_state){
try{var cr43657_place_48 = (cr43657_state[(2)]);
var cr43657_place_72 = missionary.core.unpark();
var cr43657_place_73 = cljs.core.subvec;
var cr43657_place_74 = cr43657_place_48;
var cr43657_place_75 = hyperfiddle.electric.impl.io.chunk_size;
var cr43657_place_76 = (function (){var G__43801 = cr43657_place_74;
var G__43802 = cr43657_place_75;
var fexpr__43800 = cr43657_place_73;
return (fexpr__43800.cljs$core$IFn$_invoke$arity$2 ? fexpr__43800.cljs$core$IFn$_invoke$arity$2(G__43801,G__43802) : fexpr__43800.call(null,G__43801,G__43802));
})();
(cr43657_state[(0)] = cr43657_block_8);

(cr43657_state[(2)] = cr43657_place_76);

return cr43657_state;
}catch (e43797){var cr43657_exception = e43797;
(cr43657_state[(0)] = null);

(cr43657_state[(2)] = null);

(cr43657_state[(1)] = null);

throw cr43657_exception;
}});
var cr43657_block_1 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43657_block_1(cr43657_state){
try{var cr43657_place_4 = (cr43657_state[(1)]);
var cr43657_place_5 = cr43657_place_4;
var cr43657_place_6 = cr43657_place_5;
var cr43657_place_7 = null;
var cr43657_place_8 = (cr43657_place_6 == cr43657_place_7);
var cr43657_place_9 = null;
if(cr43657_place_8){
(cr43657_state[(0)] = cr43657_block_7);

(cr43657_state[(1)] = null);

(cr43657_state[(1)] = cr43657_place_9);

return cr43657_state;
} else {
(cr43657_state[(0)] = cr43657_block_2);

(cr43657_state[(2)] = cr43657_place_5);

return cr43657_state;
}
}catch (e43806){var cr43657_exception = e43806;
(cr43657_state[(0)] = null);

(cr43657_state[(1)] = null);

throw cr43657_exception;
}});
var cr43657_block_13 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43657_block_13(cr43657_state){
try{var cr43657_place_54 = (cr43657_state[(3)]);
(cr43657_state[(0)] = cr43657_block_14);

(cr43657_state[(3)] = null);

(cr43657_state[(1)] = cr43657_place_54);

return cr43657_state;
}catch (e43811){var cr43657_exception = e43811;
(cr43657_state[(0)] = null);

(cr43657_state[(3)] = null);

(cr43657_state[(1)] = null);

throw cr43657_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43812 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__43812[(0)] = cr43657_block_0);

return G__43812;
})());
})(),missionary.core.sp_run);
});
});
/**
 * A transducer partitioning a sequence of network messages into Electric events.
 */
hyperfiddle.electric.impl.io.decoder = (function hyperfiddle$electric$impl$io$decoder(rf){
var data = (function (){var G__43814 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__43814[(0)] = cljs.core.PersistentVector.EMPTY);

(G__43814[(1)] = cljs.core.PersistentVector.EMPTY);

return G__43814;
})();
return (function() {
var G__43855 = null;
var G__43855__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__43855__1 = (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,(data[(0)]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(data[(1)])], 0))){
} else {
throw (new Error("Assert failed: (= [] (aget data 0) (aget data 1))"));
}

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__43855__2 = (function (r,x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(data[(1)]))){
} else {
throw (new Error("Assert failed: (= [] (aget data 1))"));
}

(data[(0)] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((data[(0)]),hyperfiddle.electric.impl.io.decode_str(x)));

return r;
} else {
var xs = hyperfiddle.electric.impl.io.decode_numbers(x);
(data[(1)] = cljs.core.into.cljs$core$IFn$_invoke$arity$2((data[(1)]),xs));

if((cljs.core.count(xs) < hyperfiddle.electric.impl.io.chunk_size)){
var x__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((data[(0)]),(data[(1)]));
(data[(0)] = cljs.core.PersistentVector.EMPTY);

(data[(1)] = cljs.core.PersistentVector.EMPTY);

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(r,x__$1) : rf.call(null,r,x__$1));
} else {
return r;
}
}
});
G__43855 = function(r,x){
switch(arguments.length){
case 0:
return G__43855__0.call(this);
case 1:
return G__43855__1.call(this,r);
case 2:
return G__43855__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43855.cljs$core$IFn$_invoke$arity$0 = G__43855__0;
G__43855.cljs$core$IFn$_invoke$arity$1 = G__43855__1;
G__43855.cljs$core$IFn$_invoke$arity$2 = G__43855__2;
return G__43855;
})()
});
/**
 * A transducer expanding Electric events to a sequence of network messages.
 */
hyperfiddle.electric.impl.io.encoder = (function hyperfiddle$electric$impl$io$encoder(rf){
return (function() {
var G__43856 = null;
var G__43856__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__43856__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__43856__2 = (function (r,x){
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode),cljs.core.pop(x)], 0)));
var r__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r__$1,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.chunk_size),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode_numbers),cljs.core.peek(x)], 0)));
var G__43817 = cljs.core.mod(cljs.core.count(cljs.core.peek(x)),hyperfiddle.electric.impl.io.chunk_size);
switch (G__43817) {
case (0):
var G__43818 = r__$2;
var G__43819 = hyperfiddle.electric.impl.io.encode_numbers(cljs.core.PersistentVector.EMPTY);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__43818,G__43819) : rf.call(null,G__43818,G__43819));

break;
default:
return r__$2;

}
});
G__43856 = function(r,x){
switch(arguments.length){
case 0:
return G__43856__0.call(this);
case 1:
return G__43856__1.call(this,r);
case 2:
return G__43856__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43856.cljs$core$IFn$_invoke$arity$0 = G__43856__0;
G__43856.cljs$core$IFn$_invoke$arity$1 = G__43856__1;
G__43856.cljs$core$IFn$_invoke$arity$2 = G__43856__2;
return G__43856;
})()
});
hyperfiddle.electric.impl.io.foreach = (function hyperfiddle$electric$impl$io$foreach(var_args){
var G__43822 = arguments.length;
switch (G__43822) {
case 1:
return hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$1 = (function (r){
return r;
}));

(hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$2 = (function (r,x){
(r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(x) : r.call(null,x));

return r;
}));

(hyperfiddle.electric.impl.io.foreach.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=hyperfiddle.electric.impl.io.js.map
