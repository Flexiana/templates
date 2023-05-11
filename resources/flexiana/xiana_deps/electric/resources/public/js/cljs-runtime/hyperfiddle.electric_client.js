goog.provide('hyperfiddle.electric_client');
/**
 * @define {string}
 */
hyperfiddle.electric_client.VERSION = goog.define("hyperfiddle.electric_client.VERSION","");
hyperfiddle.electric_client.server_url = (function hyperfiddle$electric_client$server_url(){
var url = (new URL(window.location));
var proto = url.protocol;
(url.protocol = (function (){var G__44034 = proto;
switch (G__44034) {
case "http:":
return "ws:";

break;
case "https:":
return "wss:";

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected protocol",proto);

}
})());

url.searchParams.set("HYPERFIDDLE_ELECTRIC_CLIENT_VERSION",hyperfiddle.electric_client.VERSION);

return url.toString();
});
hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = hyperfiddle.electric_client.server_url();
hyperfiddle.electric_client.remove_listeners = (function hyperfiddle$electric_client$remove_listeners(ws){
(ws.onopen = null);

return (ws.onclose = null);
});
hyperfiddle.electric_client.connect = (function hyperfiddle$electric_client$connect(url){
return (function (s,f){
try{var ws = (new WebSocket(url));
(ws.binaryType = "arraybuffer");

(ws.onopen = (function (_){
hyperfiddle.electric_client.remove_listeners(ws);

return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(ws) : s.call(null,ws));
}));

(ws.onclose = (function (_){
hyperfiddle.electric_client.remove_listeners(ws);

return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(WebSocket.CONNECTING,ws.readyState)){
return ws.close();
} else {
return null;
}
});
}catch (e44042){var e = e44042;
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));

return (function (){
return cljs.core.List.EMPTY;
});
}});
});
hyperfiddle.electric_client.wait_for_flush = (function hyperfiddle$electric_client$wait_for_flush(ws){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44054_block_0 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44054_block_0(cr44054_state){
try{(cr44054_state[(0)] = cr44054_block_1);

return cr44054_state;
}catch (e44076){var cr44054_exception = e44076;
(cr44054_state[(0)] = null);

throw cr44054_exception;
}});
var cr44054_block_1 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44054_block_1(cr44054_state){
try{var cr44054_place_0 = (4096);
var cr44054_place_1 = ws;
var cr44054_place_2 = cr44054_place_1.bufferedAmount;
var cr44054_place_3 = (cr44054_place_0 < cr44054_place_2);
var cr44054_place_4 = null;
if(cr44054_place_3){
(cr44054_state[(0)] = cr44054_block_3);

return cr44054_state;
} else {
(cr44054_state[(0)] = cr44054_block_2);

(cr44054_state[(1)] = cr44054_place_4);

return cr44054_state;
}
}catch (e44078){var cr44054_exception = e44078;
(cr44054_state[(0)] = null);

throw cr44054_exception;
}});
var cr44054_block_2 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44054_block_2(cr44054_state){
try{var cr44054_place_5 = null;
(cr44054_state[(0)] = cr44054_block_5);

(cr44054_state[(1)] = cr44054_place_5);

return cr44054_state;
}catch (e44084){var cr44054_exception = e44084;
(cr44054_state[(0)] = null);

(cr44054_state[(1)] = null);

throw cr44054_exception;
}});
var cr44054_block_3 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44054_block_3(cr44054_state){
try{var cr44054_place_6 = missionary.core.sleep;
var cr44054_place_7 = (50);
var cr44054_place_8 = (function (){var G__44091 = cr44054_place_7;
var fexpr__44090 = cr44054_place_6;
return (fexpr__44090.cljs$core$IFn$_invoke$arity$1 ? fexpr__44090.cljs$core$IFn$_invoke$arity$1(G__44091) : fexpr__44090.call(null,G__44091));
})();
(cr44054_state[(0)] = cr44054_block_4);

return missionary.core.park(cr44054_place_8);
}catch (e44089){var cr44054_exception = e44089;
(cr44054_state[(0)] = null);

throw cr44054_exception;
}});
var cr44054_block_4 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44054_block_4(cr44054_state){
try{var cr44054_place_9 = missionary.core.unpark();
(cr44054_state[(0)] = cr44054_block_1);

return cr44054_state;
}catch (e44093){var cr44054_exception = e44093;
(cr44054_state[(0)] = null);

throw cr44054_exception;
}});
var cr44054_block_5 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44054_block_5(cr44054_state){
try{var cr44054_place_4 = (cr44054_state[(1)]);
(cr44054_state[(0)] = null);

(cr44054_state[(1)] = null);

return cr44054_place_4;
}catch (e44098){var cr44054_exception = e44098;
(cr44054_state[(0)] = null);

(cr44054_state[(1)] = null);

throw cr44054_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44100 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__44100[(0)] = cr44054_block_0);

return G__44100;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.wait_for_close = (function hyperfiddle$electric_client$wait_for_close(ws){
return (function (s,f){
(ws.onclose = (function (e){
(ws.onclose = null);

var G__44101 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),e.code,new cljs.core.Keyword(null,"reason","reason",-2070751759),e.reason], null);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__44101) : s.call(null,G__44101));
}));

return (function (){
if((ws.onclose == null)){
return null;
} else {
(ws.onclose = null);

var G__44105 = (new missionary.Cancelled());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44105) : f.call(null,G__44105));
}
});
});
});
hyperfiddle.electric_client.payload = (function hyperfiddle$electric_client$payload(x){
return x.data;
});
hyperfiddle.electric_client.send_BANG_ = (function hyperfiddle$electric_client$send_BANG_(ws,msg){
var G__44108 = ws;
G__44108.send(msg);

return G__44108;
});
hyperfiddle.electric_client.send_all = (function hyperfiddle$electric_client$send_all(ws,msgs){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44113_block_0 = (function hyperfiddle$electric_client$send_all_$_cr44113_block_0(cr44113_state){
try{var cr44113_place_0 = hyperfiddle.electric_client.wait_for_flush;
var cr44113_place_1 = hyperfiddle.electric_client.send_BANG_;
var cr44113_place_2 = ws;
var cr44113_place_3 = hyperfiddle.electric.impl.io.encode;
var cr44113_place_4 = (1);
var cr44113_place_5 = msgs;
(cr44113_state[(0)] = cr44113_block_1);

(cr44113_state[(2)] = cr44113_place_0);

(cr44113_state[(1)] = cr44113_place_1);

(cr44113_state[(4)] = cr44113_place_2);

(cr44113_state[(3)] = cr44113_place_3);

return missionary.core.fork(cr44113_place_4,cr44113_place_5);
}catch (e44152){var cr44113_exception = e44152;
(cr44113_state[(0)] = null);

throw cr44113_exception;
}});
var cr44113_block_1 = (function hyperfiddle$electric_client$send_all_$_cr44113_block_1(cr44113_state){
try{var cr44113_place_1 = (cr44113_state[(1)]);
var cr44113_place_0 = (cr44113_state[(2)]);
var cr44113_place_3 = (cr44113_state[(3)]);
var cr44113_place_2 = (cr44113_state[(4)]);
var cr44113_place_6 = missionary.core.unpark();
var cr44113_place_7 = (function (){var G__44160 = cr44113_place_6;
var fexpr__44159 = cr44113_place_3;
return (fexpr__44159.cljs$core$IFn$_invoke$arity$1 ? fexpr__44159.cljs$core$IFn$_invoke$arity$1(G__44160) : fexpr__44159.call(null,G__44160));
})();
var cr44113_place_8 = (function (){var G__44163 = cr44113_place_2;
var G__44164 = cr44113_place_7;
var fexpr__44162 = cr44113_place_1;
return (fexpr__44162.cljs$core$IFn$_invoke$arity$2 ? fexpr__44162.cljs$core$IFn$_invoke$arity$2(G__44163,G__44164) : fexpr__44162.call(null,G__44163,G__44164));
})();
var cr44113_place_9 = (function (){var G__44166 = cr44113_place_8;
var fexpr__44165 = cr44113_place_0;
return (fexpr__44165.cljs$core$IFn$_invoke$arity$1 ? fexpr__44165.cljs$core$IFn$_invoke$arity$1(G__44166) : fexpr__44165.call(null,G__44166));
})();
(cr44113_state[(0)] = cr44113_block_2);

(cr44113_state[(1)] = null);

(cr44113_state[(2)] = null);

(cr44113_state[(3)] = null);

(cr44113_state[(4)] = null);

return missionary.core.park(cr44113_place_9);
}catch (e44157){var cr44113_exception = e44157;
(cr44113_state[(0)] = null);

(cr44113_state[(1)] = null);

(cr44113_state[(2)] = null);

(cr44113_state[(3)] = null);

(cr44113_state[(4)] = null);

throw cr44113_exception;
}});
var cr44113_block_2 = (function hyperfiddle$electric_client$send_all_$_cr44113_block_2(cr44113_state){
try{var cr44113_place_10 = missionary.core.unpark();
(cr44113_state[(0)] = null);

return cr44113_place_10;
}catch (e44168){var cr44113_exception = e44168;
(cr44113_state[(0)] = null);

throw cr44113_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44172 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__44172[(0)] = cr44113_block_0);

return G__44172;
})());
})(),missionary.core.ap_run));
});
/**
 * 
 * server : the server part of the program
 * cb : the callback for incoming messages.
 * msgs : the discrete flow of messages to send, spawned when websocket is connected, cancelled on websocket close.
 * Returns a task producing nil or failing if the websocket was closed before end of reduction.
 */
hyperfiddle.electric_client.connector = (function hyperfiddle$electric_client$connector(server){
return (function (cb,msgs){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44179_block_4 = (function hyperfiddle$electric_client$connector_$_cr44179_block_4(cr44179_state){
try{var cr44179_place_33 = missionary.core.unpark();
(cr44179_state[(0)] = cr44179_block_6);

(cr44179_state[(4)] = cr44179_place_33);

return cr44179_state;
}catch (e44272){var cr44179_exception = e44272;
(cr44179_state[(0)] = cr44179_block_5);

(cr44179_state[(4)] = cr44179_exception);

return cr44179_state;
}});
var cr44179_block_2 = (function hyperfiddle$electric_client$connector_$_cr44179_block_2(cr44179_state){
try{var cr44179_place_3 = (cr44179_state[(2)]);
var cr44179_place_8 = cr44179_place_3;
var cr44179_place_9 = null;
var cr44179_place_10 = false;
(cr44179_state[(0)] = cr44179_block_3);

(cr44179_state[(2)] = null);

(cr44179_state[(2)] = cr44179_place_8);

(cr44179_state[(4)] = cr44179_place_9);

(cr44179_state[(3)] = cr44179_place_10);

return cr44179_state;
}catch (e44278){var cr44179_exception = e44278;
(cr44179_state[(0)] = null);

(cr44179_state[(1)] = null);

(cr44179_state[(2)] = null);

throw cr44179_exception;
}});
var cr44179_block_10 = (function hyperfiddle$electric_client$connector_$_cr44179_block_10(cr44179_state){
try{var cr44179_place_42 = (cr44179_state[(5)]);
var cr44179_place_10 = (cr44179_state[(3)]);
var cr44179_place_9 = (cr44179_state[(4)]);
var cr44179_place_50 = (cljs.core.truth_(cr44179_place_10)?(function(){throw cr44179_place_9})():cr44179_place_9);
(cr44179_state[(0)] = cr44179_block_12);

(cr44179_state[(5)] = null);

(cr44179_state[(3)] = null);

(cr44179_state[(4)] = null);

(cr44179_state[(1)] = cr44179_place_50);

return cr44179_state;
}catch (e44286){var cr44179_exception = e44286;
(cr44179_state[(0)] = null);

(cr44179_state[(5)] = null);

(cr44179_state[(1)] = null);

(cr44179_state[(3)] = null);

(cr44179_state[(4)] = null);

throw cr44179_exception;
}});
var cr44179_block_7 = (function hyperfiddle$electric_client$connector_$_cr44179_block_7(cr44179_state){
try{var cr44179_place_8 = (cr44179_state[(2)]);
var cr44179_place_43 = cr44179_place_8;
var cr44179_place_44 = cr44179_place_43.close();
var cr44179_place_45 = missionary.core.compel;
var cr44179_place_46 = hyperfiddle.electric_client.wait_for_close;
var cr44179_place_47 = (function (){var G__44303 = cr44179_place_46;
var fexpr__44302 = cr44179_place_45;
return (fexpr__44302.cljs$core$IFn$_invoke$arity$1 ? fexpr__44302.cljs$core$IFn$_invoke$arity$1(G__44303) : fexpr__44302.call(null,G__44303));
})();
(cr44179_state[(0)] = cr44179_block_8);

(cr44179_state[(2)] = null);

return missionary.core.park(cr44179_place_47);
}catch (e44301){var cr44179_exception = e44301;
(cr44179_state[(0)] = null);

(cr44179_state[(2)] = null);

(cr44179_state[(5)] = null);

(cr44179_state[(1)] = null);

(cr44179_state[(3)] = null);

(cr44179_state[(4)] = null);

throw cr44179_exception;
}});
var cr44179_block_6 = (function hyperfiddle$electric_client$connector_$_cr44179_block_6(cr44179_state){
try{var cr44179_place_8 = (cr44179_state[(2)]);
var cr44179_place_36 = cljs.core._EQ_;
var cr44179_place_37 = WebSocket;
var cr44179_place_38 = cr44179_place_37.CLOSED;
var cr44179_place_39 = cr44179_place_8;
var cr44179_place_40 = cr44179_place_39.readyState;
var cr44179_place_41 = (function (){var G__44307 = cr44179_place_38;
var G__44308 = cr44179_place_40;
var fexpr__44306 = cr44179_place_36;
return (fexpr__44306.cljs$core$IFn$_invoke$arity$2 ? fexpr__44306.cljs$core$IFn$_invoke$arity$2(G__44307,G__44308) : fexpr__44306.call(null,G__44307,G__44308));
})();
var cr44179_place_42 = null;
if(cljs.core.truth_(cr44179_place_41)){
(cr44179_state[(0)] = cr44179_block_9);

(cr44179_state[(2)] = null);

(cr44179_state[(5)] = cr44179_place_42);

return cr44179_state;
} else {
(cr44179_state[(0)] = cr44179_block_7);

(cr44179_state[(5)] = cr44179_place_42);

return cr44179_state;
}
}catch (e44304){var cr44179_exception = e44304;
(cr44179_state[(0)] = null);

(cr44179_state[(2)] = null);

(cr44179_state[(1)] = null);

(cr44179_state[(3)] = null);

(cr44179_state[(4)] = null);

throw cr44179_exception;
}});
var cr44179_block_11 = (function hyperfiddle$electric_client$connector_$_cr44179_block_11(cr44179_state){
try{var cr44179_place_51 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
(cr44179_state[(0)] = cr44179_block_12);

(cr44179_state[(1)] = cr44179_place_51);

return cr44179_state;
}catch (e44310){var cr44179_exception = e44310;
(cr44179_state[(0)] = null);

(cr44179_state[(1)] = null);

throw cr44179_exception;
}});
var cr44179_block_9 = (function hyperfiddle$electric_client$connector_$_cr44179_block_9(cr44179_state){
try{var cr44179_place_49 = null;
(cr44179_state[(0)] = cr44179_block_10);

(cr44179_state[(5)] = cr44179_place_49);

return cr44179_state;
}catch (e44312){var cr44179_exception = e44312;
(cr44179_state[(0)] = null);

(cr44179_state[(5)] = null);

(cr44179_state[(1)] = null);

(cr44179_state[(3)] = null);

(cr44179_state[(4)] = null);

throw cr44179_exception;
}});
var cr44179_block_0 = (function hyperfiddle$electric_client$connector_$_cr44179_block_0(cr44179_state){
try{var cr44179_place_0 = hyperfiddle.electric_client.connect;
var cr44179_place_1 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr44179_place_2 = (function (){var G__44315 = cr44179_place_1;
var fexpr__44314 = cr44179_place_0;
return (fexpr__44314.cljs$core$IFn$_invoke$arity$1 ? fexpr__44314.cljs$core$IFn$_invoke$arity$1(G__44315) : fexpr__44314.call(null,G__44315));
})();
(cr44179_state[(0)] = cr44179_block_1);

return missionary.core.park(cr44179_place_2);
}catch (e44313){var cr44179_exception = e44313;
(cr44179_state[(0)] = null);

throw cr44179_exception;
}});
var cr44179_block_5 = (function hyperfiddle$electric_client$connector_$_cr44179_block_5(cr44179_state){
try{var cr44179_place_9 = (cr44179_state[(4)]);
var cr44179_place_34 = cr44179_place_9;
var cr44179_place_35 = (function(){throw cr44179_place_34})();
(cr44179_state[(0)] = null);

(cr44179_state[(2)] = null);

(cr44179_state[(1)] = null);

(cr44179_state[(3)] = null);

(cr44179_state[(4)] = null);

return null;
}catch (e44316){var cr44179_exception = e44316;
(cr44179_state[(0)] = cr44179_block_6);

(cr44179_state[(3)] = true);

(cr44179_state[(4)] = cr44179_exception);

return cr44179_state;
}});
var cr44179_block_3 = (function hyperfiddle$electric_client$connector_$_cr44179_block_3(cr44179_state){
try{var cr44179_place_8 = (cr44179_state[(2)]);
var cr44179_place_11 = hyperfiddle.electric_client.send_BANG_;
var cr44179_place_12 = cr44179_place_8;
var cr44179_place_13 = hyperfiddle.electric.impl.io.encode;
var cr44179_place_14 = server;
var cr44179_place_15 = (function (){var G__44319 = cr44179_place_14;
var fexpr__44318 = cr44179_place_13;
return (fexpr__44318.cljs$core$IFn$_invoke$arity$1 ? fexpr__44318.cljs$core$IFn$_invoke$arity$1(G__44319) : fexpr__44318.call(null,G__44319));
})();
var cr44179_place_16 = (function (){var G__44321 = cr44179_place_12;
var G__44322 = cr44179_place_15;
var fexpr__44320 = cr44179_place_11;
return (fexpr__44320.cljs$core$IFn$_invoke$arity$2 ? fexpr__44320.cljs$core$IFn$_invoke$arity$2(G__44321,G__44322) : fexpr__44320.call(null,G__44321,G__44322));
})();
var cr44179_place_17 = cr44179_place_8;
var cr44179_place_18 = cljs.core.comp;
var cr44179_place_19 = cb;
var cr44179_place_20 = hyperfiddle.electric.impl.io.decode;
var cr44179_place_21 = hyperfiddle.electric_client.payload;
var cr44179_place_22 = (function (){var G__44325 = cr44179_place_19;
var G__44326 = cr44179_place_20;
var G__44327 = cr44179_place_21;
var fexpr__44324 = cr44179_place_18;
return (fexpr__44324.cljs$core$IFn$_invoke$arity$3 ? fexpr__44324.cljs$core$IFn$_invoke$arity$3(G__44325,G__44326,G__44327) : fexpr__44324.call(null,G__44325,G__44326,G__44327));
})();
var cr44179_place_23 = (cr44179_place_17.onmessage = cr44179_place_22);
var cr44179_place_24 = missionary.core.race;
var cr44179_place_25 = hyperfiddle.electric_client.send_all;
var cr44179_place_26 = cr44179_place_8;
var cr44179_place_27 = msgs;
var cr44179_place_28 = (function (){var G__44330 = cr44179_place_26;
var G__44331 = cr44179_place_27;
var fexpr__44329 = cr44179_place_25;
return (fexpr__44329.cljs$core$IFn$_invoke$arity$2 ? fexpr__44329.cljs$core$IFn$_invoke$arity$2(G__44330,G__44331) : fexpr__44329.call(null,G__44330,G__44331));
})();
var cr44179_place_29 = hyperfiddle.electric_client.wait_for_close;
var cr44179_place_30 = cr44179_place_8;
var cr44179_place_31 = (function (){var G__44333 = cr44179_place_30;
var fexpr__44332 = cr44179_place_29;
return (fexpr__44332.cljs$core$IFn$_invoke$arity$1 ? fexpr__44332.cljs$core$IFn$_invoke$arity$1(G__44333) : fexpr__44332.call(null,G__44333));
})();
var cr44179_place_32 = (function (){var G__44335 = cr44179_place_28;
var G__44336 = cr44179_place_31;
var fexpr__44334 = cr44179_place_24;
return (fexpr__44334.cljs$core$IFn$_invoke$arity$2 ? fexpr__44334.cljs$core$IFn$_invoke$arity$2(G__44335,G__44336) : fexpr__44334.call(null,G__44335,G__44336));
})();
(cr44179_state[(0)] = cr44179_block_4);

return missionary.core.park(cr44179_place_32);
}catch (e44317){var cr44179_exception = e44317;
(cr44179_state[(0)] = cr44179_block_5);

(cr44179_state[(4)] = cr44179_exception);

return cr44179_state;
}});
var cr44179_block_1 = (function hyperfiddle$electric_client$connector_$_cr44179_block_1(cr44179_state){
try{var cr44179_place_3 = missionary.core.unpark();
var cr44179_place_4 = cr44179_place_3;
var cr44179_place_5 = null;
var cr44179_place_6 = (cr44179_place_4 == cr44179_place_5);
var cr44179_place_7 = null;
if(cr44179_place_6){
(cr44179_state[(0)] = cr44179_block_11);

(cr44179_state[(1)] = cr44179_place_7);

return cr44179_state;
} else {
(cr44179_state[(0)] = cr44179_block_2);

(cr44179_state[(2)] = cr44179_place_3);

(cr44179_state[(1)] = cr44179_place_7);

return cr44179_state;
}
}catch (e44340){var cr44179_exception = e44340;
(cr44179_state[(0)] = null);

throw cr44179_exception;
}});
var cr44179_block_12 = (function hyperfiddle$electric_client$connector_$_cr44179_block_12(cr44179_state){
try{var cr44179_place_7 = (cr44179_state[(1)]);
(cr44179_state[(0)] = null);

(cr44179_state[(1)] = null);

return cr44179_place_7;
}catch (e44341){var cr44179_exception = e44341;
(cr44179_state[(0)] = null);

(cr44179_state[(1)] = null);

throw cr44179_exception;
}});
var cr44179_block_8 = (function hyperfiddle$electric_client$connector_$_cr44179_block_8(cr44179_state){
try{var cr44179_place_48 = missionary.core.unpark();
(cr44179_state[(0)] = cr44179_block_10);

(cr44179_state[(5)] = cr44179_place_48);

return cr44179_state;
}catch (e44345){var cr44179_exception = e44345;
(cr44179_state[(0)] = null);

(cr44179_state[(5)] = null);

(cr44179_state[(1)] = null);

(cr44179_state[(3)] = null);

(cr44179_state[(4)] = null);

throw cr44179_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44346 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__44346[(0)] = cr44179_block_0);

return G__44346;
})());
})(),missionary.core.sp_run);
});
});
hyperfiddle.electric_client.fib_iter = (function hyperfiddle$electric_client$fib_iter(p__44347){
var vec__44348 = p__44347;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44348,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44348,(1),null);
var G__44351 = b;
switch (G__44351) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,(a + b)], null);

}
});
hyperfiddle.electric_client.fib = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.iterate(hyperfiddle.electric_client.fib_iter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)));
hyperfiddle.electric_client.retry_delays = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(100)),hyperfiddle.electric_client.fib);
hyperfiddle.electric_client.boot_with_retry = (function hyperfiddle$electric_client$boot_with_retry(client,conn){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44352_block_11 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44352_block_11(cr44352_state){
try{var cr44352_place_72 = (cr44352_state[(3)]);
(cr44352_state[(0)] = cr44352_block_13);

(cr44352_state[(3)] = null);

(cr44352_state[(6)] = cr44352_place_72);

return cr44352_state;
}catch (e44703){var cr44352_exception = e44703;
(cr44352_state[(0)] = null);

(cr44352_state[(1)] = null);

(cr44352_state[(4)] = null);

(cr44352_state[(3)] = null);

(cr44352_state[(2)] = null);

(cr44352_state[(6)] = null);

throw cr44352_exception;
}});
var cr44352_block_3 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44352_block_3(cr44352_state){
try{var cr44352_place_51 = missionary.core.unpark();
(cr44352_state[(0)] = cr44352_block_5);

(cr44352_state[(5)] = cr44352_place_51);

return cr44352_state;
}catch (e44704){var cr44352_exception = e44704;
(cr44352_state[(0)] = cr44352_block_4);

(cr44352_state[(5)] = cr44352_exception);

return cr44352_state;
}});
var cr44352_block_1 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44352_block_1(cr44352_state){
try{var cr44352_place_0 = (cr44352_state[(1)]);
var cr44352_place_2 = cljs.core.object_array;
var cr44352_place_3 = (1);
var cr44352_place_4 = (function (){var G__44707 = cr44352_place_3;
var fexpr__44706 = cr44352_place_2;
return (fexpr__44706.cljs$core$IFn$_invoke$arity$1 ? fexpr__44706.cljs$core$IFn$_invoke$arity$1(G__44707) : fexpr__44706.call(null,G__44707));
})();
var cr44352_place_5 = console;
var cr44352_place_6 = "Connecting...";
var cr44352_place_7 = cr44352_place_5.log(cr44352_place_6);
var cr44352_place_8 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr44352_place_9 = cr44352_place_0;
var cr44352_place_10 = cr44352_place_9;
var cr44352_place_11 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr44352_place_10);
var cr44352_place_12 = null;
var cr44352_place_13 = false;
(cr44352_state[(0)] = cr44352_block_2);

(cr44352_state[(3)] = cr44352_place_8);

(cr44352_state[(4)] = cr44352_place_13);

(cr44352_state[(5)] = cr44352_place_12);

(cr44352_state[(6)] = cr44352_place_4);

return cr44352_state;
}catch (e44705){var cr44352_exception = e44705;
(cr44352_state[(0)] = null);

(cr44352_state[(1)] = null);

(cr44352_state[(2)] = null);

throw cr44352_exception;
}});
var cr44352_block_4 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44352_block_4(cr44352_state){
try{var cr44352_place_12 = (cr44352_state[(5)]);
var cr44352_place_52 = cr44352_place_12;
var cr44352_place_53 = (function(){throw cr44352_place_52})();
(cr44352_state[(0)] = null);

(cr44352_state[(3)] = null);

(cr44352_state[(1)] = null);

(cr44352_state[(4)] = null);

(cr44352_state[(2)] = null);

(cr44352_state[(5)] = null);

return null;
}catch (e44708){var cr44352_exception = e44708;
(cr44352_state[(0)] = cr44352_block_5);

(cr44352_state[(4)] = true);

(cr44352_state[(5)] = cr44352_exception);

return cr44352_state;
}});
var cr44352_block_16 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44352_block_16(cr44352_state){
try{var cr44352_place_60 = (cr44352_state[(4)]);
var cr44352_place_106 = cr44352_place_60;
var cr44352_place_107 = cljs.core.seq;
var cr44352_place_108 = cr44352_place_106;
var cr44352_place_109 = (function (){var G__44711 = cr44352_place_108;
var fexpr__44710 = cr44352_place_107;
return (fexpr__44710.cljs$core$IFn$_invoke$arity$1 ? fexpr__44710.cljs$core$IFn$_invoke$arity$1(G__44711) : fexpr__44710.call(null,G__44711));
})();
var cr44352_place_110 = cljs.core.first;
var cr44352_place_111 = cr44352_place_109;
var cr44352_place_112 = (function (){var G__44713 = cr44352_place_111;
var fexpr__44712 = cr44352_place_110;
return (fexpr__44712.cljs$core$IFn$_invoke$arity$1 ? fexpr__44712.cljs$core$IFn$_invoke$arity$1(G__44713) : fexpr__44712.call(null,G__44713));
})();
var cr44352_place_113 = cljs.core.next;
var cr44352_place_114 = cr44352_place_109;
var cr44352_place_115 = (function (){var G__44715 = cr44352_place_114;
var fexpr__44714 = cr44352_place_113;
return (fexpr__44714.cljs$core$IFn$_invoke$arity$1 ? fexpr__44714.cljs$core$IFn$_invoke$arity$1(G__44715) : fexpr__44714.call(null,G__44715));
})();
var cr44352_place_116 = cr44352_place_112;
var cr44352_place_117 = cr44352_place_115;
var cr44352_place_118 = console;
var cr44352_place_119 = "Next attempt in ";
var cr44352_place_120 = cr44352_place_116;
var cr44352_place_121 = (1000);
var cr44352_place_122 = (cr44352_place_120 / cr44352_place_121);
var cr44352_place_123 = " seconds.";
var cr44352_place_124 = [cr44352_place_119,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44352_place_122),cr44352_place_123].join('');
var cr44352_place_125 = cr44352_place_118.log(cr44352_place_124);
var cr44352_place_126 = missionary.core.sleep;
var cr44352_place_127 = cr44352_place_116;
var cr44352_place_128 = cr44352_place_117;
var cr44352_place_129 = (function (){var G__44717 = cr44352_place_127;
var G__44718 = cr44352_place_128;
var fexpr__44716 = cr44352_place_126;
return (fexpr__44716.cljs$core$IFn$_invoke$arity$2 ? fexpr__44716.cljs$core$IFn$_invoke$arity$2(G__44717,G__44718) : fexpr__44716.call(null,G__44717,G__44718));
})();
(cr44352_state[(0)] = cr44352_block_17);

(cr44352_state[(4)] = null);

return missionary.core.park(cr44352_place_129);
}catch (e44709){var cr44352_exception = e44709;
(cr44352_state[(0)] = null);

(cr44352_state[(1)] = null);

(cr44352_state[(4)] = null);

(cr44352_state[(2)] = null);

throw cr44352_exception;
}});
var cr44352_block_5 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44352_block_5(cr44352_state){
try{var cr44352_place_8 = (cr44352_state[(3)]);
var cr44352_place_13 = (cr44352_state[(4)]);
var cr44352_place_12 = (cr44352_state[(5)]);
var cr44352_place_54 = cr44352_place_8;
var cr44352_place_55 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr44352_place_54);
var cr44352_place_56 = (cljs.core.truth_(cr44352_place_13)?(function(){throw cr44352_place_12})():cr44352_place_12);
var cr44352_place_57 = cr44352_place_56;
var cr44352_place_58 = null;
var cr44352_place_59 = (cr44352_place_57 == cr44352_place_58);
var cr44352_place_60 = null;
if(cr44352_place_59){
(cr44352_state[(0)] = cr44352_block_14);

(cr44352_state[(3)] = null);

(cr44352_state[(4)] = null);

(cr44352_state[(5)] = null);

(cr44352_state[(4)] = cr44352_place_60);

return cr44352_state;
} else {
(cr44352_state[(0)] = cr44352_block_6);

(cr44352_state[(3)] = null);

(cr44352_state[(4)] = null);

(cr44352_state[(5)] = null);

(cr44352_state[(3)] = cr44352_place_56);

(cr44352_state[(4)] = cr44352_place_60);

return cr44352_state;
}
}catch (e44719){var cr44352_exception = e44719;
(cr44352_state[(0)] = null);

(cr44352_state[(3)] = null);

(cr44352_state[(1)] = null);

(cr44352_state[(4)] = null);

(cr44352_state[(2)] = null);

(cr44352_state[(5)] = null);

throw cr44352_exception;
}});
var cr44352_block_18 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44352_block_18(cr44352_state){
try{var cr44352_place_131 = null;
(cr44352_state[(0)] = cr44352_block_19);

(cr44352_state[(1)] = cr44352_place_131);

return cr44352_state;
}catch (e44720){var cr44352_exception = e44720;
(cr44352_state[(0)] = null);

(cr44352_state[(1)] = null);

throw cr44352_exception;
}});
var cr44352_block_9 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44352_block_9(cr44352_state){
try{var cr44352_place_79 = cljs.core.ex_info;
var cr44352_place_80 = "Stale client";
var cr44352_place_81 = new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079);
var cr44352_place_82 = new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405);
var cr44352_place_83 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr44352_place_81,cr44352_place_82]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr44352_place_84 = (function (){var G__44723 = cr44352_place_80;
var G__44724 = cr44352_place_83;
var fexpr__44722 = cr44352_place_79;
return (fexpr__44722.cljs$core$IFn$_invoke$arity$2 ? fexpr__44722.cljs$core$IFn$_invoke$arity$2(G__44723,G__44724) : fexpr__44722.call(null,G__44723,G__44724));
})();
var cr44352_place_85 = (function(){throw cr44352_place_84})();
(cr44352_state[(0)] = null);

return null;
}catch (e44721){var cr44352_exception = e44721;
(cr44352_state[(0)] = null);

throw cr44352_exception;
}});
var cr44352_block_19 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44352_block_19(cr44352_state){
try{var cr44352_place_105 = (cr44352_state[(1)]);
(cr44352_state[(0)] = null);

(cr44352_state[(1)] = null);

return cr44352_place_105;
}catch (e44725){var cr44352_exception = e44725;
(cr44352_state[(0)] = null);

(cr44352_state[(1)] = null);

throw cr44352_exception;
}});
var cr44352_block_6 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44352_block_6(cr44352_state){
try{var cr44352_place_56 = (cr44352_state[(3)]);
var cr44352_place_61 = cr44352_place_56;
var cr44352_place_62 = new cljs.core.Keyword(null,"code","code",1586293142);
var cr44352_place_63 = cr44352_place_61;
var cr44352_place_64 = cr44352_place_62.cljs$core$IFn$_invoke$arity$1(cr44352_place_63);
var cr44352_place_65 = cr44352_place_64;
var cr44352_place_66 = null;
var cr44352_place_67 = (cr44352_place_65 == cr44352_place_66);
var cr44352_place_68 = null;
if(cr44352_place_67){
(cr44352_state[(0)] = cr44352_block_12);

(cr44352_state[(3)] = null);

(cr44352_state[(6)] = cr44352_place_68);

return cr44352_state;
} else {
(cr44352_state[(0)] = cr44352_block_7);

(cr44352_state[(3)] = null);

(cr44352_state[(5)] = cr44352_place_61);

(cr44352_state[(3)] = cr44352_place_64);

(cr44352_state[(6)] = cr44352_place_68);

return cr44352_state;
}
}catch (e44726){var cr44352_exception = e44726;
(cr44352_state[(0)] = null);

(cr44352_state[(1)] = null);

(cr44352_state[(3)] = null);

(cr44352_state[(4)] = null);

(cr44352_state[(2)] = null);

throw cr44352_exception;
}});
var cr44352_block_10 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44352_block_10(cr44352_state){
try{var cr44352_place_61 = (cr44352_state[(5)]);
var cr44352_place_69 = (cr44352_state[(1)]);
var cr44352_place_86 = cljs.core.ex_info;
var cr44352_place_87 = "Remote error - ";
var cr44352_place_88 = cr44352_place_69;
var cr44352_place_89 = " ";
var cr44352_place_90 = new cljs.core.Keyword(null,"reason","reason",-2070751759);
var cr44352_place_91 = cr44352_place_61;
var cr44352_place_92 = cr44352_place_90.cljs$core$IFn$_invoke$arity$1(cr44352_place_91);
var cr44352_place_93 = [cr44352_place_87,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44352_place_88),cr44352_place_89,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44352_place_92)].join('');
var cr44352_place_94 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr44352_place_95 = (function (){var G__44729 = cr44352_place_93;
var G__44730 = cr44352_place_94;
var fexpr__44728 = cr44352_place_86;
return (fexpr__44728.cljs$core$IFn$_invoke$arity$2 ? fexpr__44728.cljs$core$IFn$_invoke$arity$2(G__44729,G__44730) : fexpr__44728.call(null,G__44729,G__44730));
})();
var cr44352_place_96 = (function(){throw cr44352_place_95})();
(cr44352_state[(0)] = null);

(cr44352_state[(5)] = null);

(cr44352_state[(1)] = null);

return null;
}catch (e44727){var cr44352_exception = e44727;
(cr44352_state[(0)] = null);

(cr44352_state[(5)] = null);

(cr44352_state[(1)] = null);

throw cr44352_exception;
}});
var cr44352_block_2 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44352_block_2(cr44352_state){
try{var cr44352_place_4 = (cr44352_state[(6)]);
var cr44352_place_14 = (function (x){
var fexpr__44496 = (cr44352_place_4[(0)]);
var G__44733 = x;
var fexpr__44732 = fexpr__44496;
return (fexpr__44732.cljs$core$IFn$_invoke$arity$1 ? fexpr__44732.cljs$core$IFn$_invoke$arity$1(G__44733) : fexpr__44732.call(null,G__44733));
});
var cr44352_place_15 = cljs.core.partial;
var cr44352_place_31 = (function (cr44497_state){
try{var cr44497_place_49 = (1);
var cr44497_place_50 = missionary.core.none;
(cr44497_state[(0)] = cr44352_place_29);

return missionary.core.fork(cr44497_place_49,cr44497_place_50);
}catch (e44770){var e44564 = e44770;
var cr44497_exception = e44564;
(cr44497_state[(0)] = null);

(cr44497_state[(2)] = null);

(cr44497_state[(4)] = null);

throw cr44497_exception;
}});
var cr44352_place_27 = (function (cr44497_state){
try{var cr44497_place_28 = (cr44497_state[(3)]);
var cr44497_place_33 = cr44497_place_28;
var cr44497_place_34 = (1);
var cr44497_place_35 = missionary.core.seed;
var cr44497_place_36 = cljs.core.range;
var cr44497_place_37 = (2);
var cr44497_place_38 = (function (){var G__44558 = cr44497_place_37;
var fexpr__44557 = cr44497_place_36;
var G__44773 = G__44558;
var fexpr__44772 = fexpr__44557;
return (fexpr__44772.cljs$core$IFn$_invoke$arity$1 ? fexpr__44772.cljs$core$IFn$_invoke$arity$1(G__44773) : fexpr__44772.call(null,G__44773));
})();
var cr44497_place_39 = (function (){var G__44560 = cr44497_place_38;
var fexpr__44559 = cr44497_place_35;
var G__44775 = G__44560;
var fexpr__44774 = fexpr__44559;
return (fexpr__44774.cljs$core$IFn$_invoke$arity$1 ? fexpr__44774.cljs$core$IFn$_invoke$arity$1(G__44775) : fexpr__44774.call(null,G__44775));
})();
(cr44497_state[(0)] = cr44352_place_17);

(cr44497_state[(3)] = null);

(cr44497_state[(3)] = cr44497_place_33);

return missionary.core.fork(cr44497_place_34,cr44497_place_39);
}catch (e44771){var e44556 = e44771;
var cr44497_exception = e44556;
(cr44497_state[(0)] = null);

(cr44497_state[(2)] = null);

(cr44497_state[(1)] = null);

(cr44497_state[(3)] = null);

(cr44497_state[(4)] = null);

throw cr44497_exception;
}});
var cr44352_place_18 = (function (cr44497_state){
try{var cr44497_place_11 = missionary.core.unpark();
var cr44497_place_12 = cr44497_place_11;
var cr44497_place_13 = null;
var G__44542 = cr44497_place_12;
var G__44777 = G__44542;
switch (G__44777) {
case (0):
(cr44497_state[(0)] = cr44352_place_34);

(cr44497_state[(2)] = cr44497_place_13);

return cr44497_state;

break;
case (1):
(cr44497_state[(0)] = cr44352_place_23);

(cr44497_state[(2)] = cr44497_place_13);

return cr44497_state;

break;
default:
(cr44497_state[(0)] = cr44352_place_26);

(cr44497_state[(1)] = null);

(cr44497_state[(1)] = cr44497_place_11);

return cr44497_state;

}
}catch (e44776){var e44541 = e44776;
var cr44497_exception = e44541;
(cr44497_state[(0)] = null);

(cr44497_state[(1)] = null);

throw cr44497_exception;
}});
var cr44352_place_26 = (function (cr44497_state){
try{var cr44497_place_11 = (cr44497_state[(1)]);
var cr44497_place_52 = "No matching clause: ";
var cr44497_place_53 = cr44497_place_11;
var cr44497_place_54 = [cr44497_place_52,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44497_place_53)].join('');
var cr44497_place_55 = (new Error(cr44497_place_54));
var cr44497_place_56 = (function(){throw cr44497_place_55})();
(cr44497_state[(0)] = null);

(cr44497_state[(1)] = null);

return null;
}catch (e44778){var e44555 = e44778;
var cr44497_exception = e44555;
(cr44497_state[(0)] = null);

(cr44497_state[(1)] = null);

throw cr44497_exception;
}});
var cr44352_place_29 = (function (cr44497_state){
try{var cr44497_place_51 = missionary.core.unpark();
(cr44497_state[(0)] = cr44352_place_30);

(cr44497_state[(4)] = cr44497_place_51);

return cr44497_state;
}catch (e44779){var e44562 = e44779;
var cr44497_exception = e44562;
(cr44497_state[(0)] = null);

(cr44497_state[(2)] = null);

(cr44497_state[(4)] = null);

throw cr44497_exception;
}});
var cr44352_place_24 = (function (cr44497_state){
try{var cr44497_place_28 = missionary.core.unpark();
var cr44497_place_29 = cr44497_place_28;
var cr44497_place_30 = null;
var cr44497_place_31 = (cr44497_place_29 == cr44497_place_30);
var cr44497_place_32 = null;
if(cr44497_place_31){
(cr44497_state[(0)] = cr44352_place_31);

(cr44497_state[(1)] = null);

(cr44497_state[(4)] = cr44497_place_32);

return cr44497_state;
} else {
(cr44497_state[(0)] = cr44352_place_27);

(cr44497_state[(3)] = cr44497_place_28);

(cr44497_state[(4)] = cr44497_place_32);

return cr44497_state;
}
}catch (e44780){var e44553 = e44780;
var cr44497_exception = e44553;
(cr44497_state[(0)] = null);

(cr44497_state[(2)] = null);

(cr44497_state[(1)] = null);

throw cr44497_exception;
}});
var cr44352_place_25 = (function (cr44497_state){
try{(cr44497_state[(0)] = cr44352_place_21);

return cr44497_state;
}catch (e44781){var e44554 = e44781;
var cr44497_exception = e44554;
(cr44497_state[(0)] = null);

(cr44497_state[(2)] = null);

(cr44497_state[(1)] = null);

throw cr44497_exception;
}});
var cr44352_place_23 = (function (cr44497_state){
try{(cr44497_state[(0)] = cr44352_place_21);

return cr44497_state;
}catch (e44782){var e44552 = e44782;
var cr44497_exception = e44552;
(cr44497_state[(0)] = null);

(cr44497_state[(2)] = null);

(cr44497_state[(1)] = null);

throw cr44497_exception;
}});
var cr44352_place_19 = (function (cr44497_state){
try{var cr44497_place_23 = missionary.core.unpark();
var cr44497_place_24 = (1);
var cr44497_place_25 = missionary.core.none;
(cr44497_state[(0)] = cr44352_place_20);

return missionary.core.fork(cr44497_place_24,cr44497_place_25);
}catch (e44783){var e44543 = e44783;
var cr44497_exception = e44543;
(cr44497_state[(0)] = null);

(cr44497_state[(2)] = null);

throw cr44497_exception;
}});
var cr44352_place_32 = (function (cr44497_state){
try{var cr44497_place_42 = (cr44497_state[(1)]);
(cr44497_state[(0)] = cr44352_place_30);

(cr44497_state[(1)] = null);

(cr44497_state[(4)] = cr44497_place_42);

return cr44497_state;
}catch (e44784){var e44565 = e44784;
var cr44497_exception = e44565;
(cr44497_state[(0)] = null);

(cr44497_state[(2)] = null);

(cr44497_state[(1)] = null);

(cr44497_state[(4)] = null);

throw cr44497_exception;
}});
var cr44352_place_33 = (function (cr44497_state){
try{var cr44497_place_33 = (cr44497_state[(3)]);
var cr44497_place_43 = cr44497_place_33;
(cr44497_state[(0)] = cr44352_place_32);

(cr44497_state[(3)] = null);

(cr44497_state[(1)] = cr44497_place_43);

return cr44497_state;
}catch (e44785){var e44566 = e44785;
var cr44497_exception = e44566;
(cr44497_state[(0)] = null);

(cr44497_state[(2)] = null);

(cr44497_state[(3)] = null);

(cr44497_state[(1)] = null);

(cr44497_state[(4)] = null);

throw cr44497_exception;
}});
var cr44352_place_21 = (function (cr44497_state){
try{var cr44497_place_4 = (cr44497_state[(1)]);
var cr44497_place_27 = cr44497_place_4;
(cr44497_state[(0)] = cr44352_place_24);

return missionary.core.park(cr44497_place_27);
}catch (e44786){var e44545 = e44786;
var cr44497_exception = e44545;
(cr44497_state[(0)] = null);

(cr44497_state[(2)] = null);

(cr44497_state[(1)] = null);

throw cr44497_exception;
}});
var cr44352_place_34 = (function (cr44497_state){
try{var cr44497_place_4 = (cr44497_state[(1)]);
var cr44497_place_14 = cr44497_place_4;
var cr44497_place_15 = hyperfiddle.electric.impl.runtime.subject_at;
var cr44497_place_16 = cr44352_place_4;
var cr44497_place_17 = (0);
var cr44497_place_18 = (function (){var G__44569 = cr44497_place_16;
var G__44570 = cr44497_place_17;
var fexpr__44568 = cr44497_place_15;
var G__44789 = G__44569;
var G__44790 = G__44570;
var fexpr__44788 = fexpr__44568;
return (fexpr__44788.cljs$core$IFn$_invoke$arity$2 ? fexpr__44788.cljs$core$IFn$_invoke$arity$2(G__44789,G__44790) : fexpr__44788.call(null,G__44789,G__44790));
})();
var cr44497_place_19 = client;
var cr44497_place_20 = cr44497_place_14;
var cr44497_place_21 = cr44497_place_18;
var cr44497_place_22 = (function (){var G__44572 = cr44497_place_20;
var G__44573 = cr44497_place_21;
var fexpr__44571 = cr44497_place_19;
var G__44792 = G__44572;
var G__44793 = G__44573;
var fexpr__44791 = fexpr__44571;
return (fexpr__44791.cljs$core$IFn$_invoke$arity$2 ? fexpr__44791.cljs$core$IFn$_invoke$arity$2(G__44792,G__44793) : fexpr__44791.call(null,G__44792,G__44793));
})();
(cr44497_state[(0)] = cr44352_place_19);

(cr44497_state[(1)] = null);

return missionary.core.park(cr44497_place_22);
}catch (e44787){var e44567 = e44787;
var cr44497_exception = e44567;
(cr44497_state[(0)] = null);

(cr44497_state[(2)] = null);

(cr44497_state[(1)] = null);

throw cr44497_exception;
}});
var cr44352_place_20 = (function (cr44497_state){
try{var cr44497_place_26 = missionary.core.unpark();
(cr44497_state[(0)] = cr44352_place_28);

(cr44497_state[(2)] = cr44497_place_26);

return cr44497_state;
}catch (e44794){var e44544 = e44794;
var cr44497_exception = e44544;
(cr44497_state[(0)] = null);

(cr44497_state[(2)] = null);

throw cr44497_exception;
}});
var cr44352_place_28 = (function (cr44497_state){
try{var cr44497_place_13 = (cr44497_state[(2)]);
(cr44497_state[(0)] = null);

(cr44497_state[(2)] = null);

return cr44497_place_13;
}catch (e44795){var e44561 = e44795;
var cr44497_exception = e44561;
(cr44497_state[(0)] = null);

(cr44497_state[(2)] = null);

throw cr44497_exception;
}});
var cr44352_place_17 = (function (cr44497_state){
try{var cr44497_place_40 = missionary.core.unpark();
var cr44497_place_41 = cr44497_place_40;
var cr44497_place_42 = null;
var G__44540 = cr44497_place_41;
var G__44797 = G__44540;
switch (G__44797) {
case (0):
(cr44497_state[(0)] = cr44352_place_33);

(cr44497_state[(1)] = null);

(cr44497_state[(1)] = cr44497_place_42);

return cr44497_state;

break;
case (1):
(cr44497_state[(0)] = cr44352_place_25);

(cr44497_state[(3)] = null);

(cr44497_state[(4)] = null);

return cr44497_state;

break;
default:
(cr44497_state[(0)] = cr44352_place_16);

(cr44497_state[(2)] = null);

(cr44497_state[(1)] = null);

(cr44497_state[(3)] = null);

(cr44497_state[(4)] = null);

(cr44497_state[(1)] = cr44497_place_40);

return cr44497_state;

}
}catch (e44796){var e44539 = e44796;
var cr44497_exception = e44539;
(cr44497_state[(0)] = null);

(cr44497_state[(2)] = null);

(cr44497_state[(1)] = null);

(cr44497_state[(3)] = null);

(cr44497_state[(4)] = null);

throw cr44497_exception;
}});
var cr44352_place_30 = (function (cr44497_state){
try{var cr44497_place_32 = (cr44497_state[(4)]);
(cr44497_state[(0)] = cr44352_place_28);

(cr44497_state[(4)] = null);

(cr44497_state[(2)] = cr44497_place_32);

return cr44497_state;
}catch (e44798){var e44563 = e44798;
var cr44497_exception = e44563;
(cr44497_state[(0)] = null);

(cr44497_state[(2)] = null);

(cr44497_state[(4)] = null);

throw cr44497_exception;
}});
var cr44352_place_16 = (function (cr44497_state){
try{var cr44497_place_40 = (cr44497_state[(1)]);
var cr44497_place_44 = "No matching clause: ";
var cr44497_place_45 = cr44497_place_40;
var cr44497_place_46 = [cr44497_place_44,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44497_place_45)].join('');
var cr44497_place_47 = (new Error(cr44497_place_46));
var cr44497_place_48 = (function(){throw cr44497_place_47})();
(cr44497_state[(0)] = null);

(cr44497_state[(1)] = null);

return null;
}catch (e44799){var e44538 = e44799;
var cr44497_exception = e44538;
(cr44497_state[(0)] = null);

(cr44497_state[(1)] = null);

throw cr44497_exception;
}});
var cr44352_place_22 = (function (cr44497_state){
try{var cr44497_place_0 = console;
var cr44497_place_1 = "Connected.";
var cr44497_place_2 = cr44497_place_0.log(cr44497_place_1);
var cr44497_place_3 = missionary.core.rdv;
var cr44497_place_4 = (function (){var fexpr__44547 = cr44497_place_3;
var fexpr__44801 = fexpr__44547;
return (fexpr__44801.cljs$core$IFn$_invoke$arity$0 ? fexpr__44801.cljs$core$IFn$_invoke$arity$0() : fexpr__44801.call(null));
})();
var cr44497_place_5 = (2);
var cr44497_place_6 = missionary.core.seed;
var cr44497_place_7 = cljs.core.range;
var cr44497_place_8 = (2);
var cr44497_place_9 = (function (){var G__44549 = cr44497_place_8;
var fexpr__44548 = cr44497_place_7;
var G__44803 = G__44549;
var fexpr__44802 = fexpr__44548;
return (fexpr__44802.cljs$core$IFn$_invoke$arity$1 ? fexpr__44802.cljs$core$IFn$_invoke$arity$1(G__44803) : fexpr__44802.call(null,G__44803));
})();
var cr44497_place_10 = (function (){var G__44551 = cr44497_place_9;
var fexpr__44550 = cr44497_place_6;
var G__44805 = G__44551;
var fexpr__44804 = fexpr__44550;
return (fexpr__44804.cljs$core$IFn$_invoke$arity$1 ? fexpr__44804.cljs$core$IFn$_invoke$arity$1(G__44805) : fexpr__44804.call(null,G__44805));
})();
(cr44497_state[(0)] = cr44352_place_18);

(cr44497_state[(1)] = cr44497_place_4);

return missionary.core.fork(cr44497_place_5,cr44497_place_10);
}catch (e44800){var e44546 = e44800;
var cr44497_exception = e44546;
(cr44497_state[(0)] = null);

throw cr44497_exception;
}});
var cr44352_place_35 = cloroutine.impl.coroutine;
var cr44352_place_36 = cljs.core.object_array;
var cr44352_place_37 = (5);
var cr44352_place_38 = (function (){var G__44807 = cr44352_place_37;
var fexpr__44806 = cr44352_place_36;
return (fexpr__44806.cljs$core$IFn$_invoke$arity$1 ? fexpr__44806.cljs$core$IFn$_invoke$arity$1(G__44807) : fexpr__44806.call(null,G__44807));
})();
var cr44352_place_39 = cr44352_place_38;
var cr44352_place_40 = (0);
var cr44352_place_41 = cr44352_place_22;
var cr44352_place_42 = (cr44352_place_39[cr44352_place_40] = cr44352_place_41);
var cr44352_place_43 = cr44352_place_38;
var cr44352_place_44 = (function (){var G__44809 = cr44352_place_43;
var fexpr__44808 = cr44352_place_35;
return (fexpr__44808.cljs$core$IFn$_invoke$arity$1 ? fexpr__44808.cljs$core$IFn$_invoke$arity$1(G__44809) : fexpr__44808.call(null,G__44809));
})();
var cr44352_place_45 = missionary.core.ap_run;
var cr44352_place_46 = (function (){var G__44811 = cr44352_place_44;
var G__44812 = cr44352_place_45;
var fexpr__44810 = cr44352_place_15;
return (fexpr__44810.cljs$core$IFn$_invoke$arity$2 ? fexpr__44810.cljs$core$IFn$_invoke$arity$2(G__44811,G__44812) : fexpr__44810.call(null,G__44811,G__44812));
})();
var cr44352_place_47 = conn;
var cr44352_place_48 = cr44352_place_14;
var cr44352_place_49 = cr44352_place_46;
var cr44352_place_50 = (function (){var G__44814 = cr44352_place_48;
var G__44815 = cr44352_place_49;
var fexpr__44813 = cr44352_place_47;
return (fexpr__44813.cljs$core$IFn$_invoke$arity$2 ? fexpr__44813.cljs$core$IFn$_invoke$arity$2(G__44814,G__44815) : fexpr__44813.call(null,G__44814,G__44815));
})();
(cr44352_state[(0)] = cr44352_block_3);

(cr44352_state[(6)] = null);

return missionary.core.park(cr44352_place_50);
}catch (e44731){var cr44352_exception = e44731;
(cr44352_state[(0)] = cr44352_block_4);

(cr44352_state[(6)] = null);

(cr44352_state[(5)] = cr44352_exception);

return cr44352_state;
}});
var cr44352_block_14 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44352_block_14(cr44352_state){
try{var cr44352_place_101 = null;
(cr44352_state[(0)] = cr44352_block_15);

(cr44352_state[(4)] = cr44352_place_101);

return cr44352_state;
}catch (e44816){var cr44352_exception = e44816;
(cr44352_state[(0)] = null);

(cr44352_state[(1)] = null);

(cr44352_state[(4)] = null);

(cr44352_state[(2)] = null);

throw cr44352_exception;
}});
var cr44352_block_15 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44352_block_15(cr44352_state){
try{var cr44352_place_60 = (cr44352_state[(4)]);
var cr44352_place_102 = cr44352_place_60;
var cr44352_place_103 = null;
var cr44352_place_104 = (cr44352_place_102 == cr44352_place_103);
var cr44352_place_105 = null;
if(cr44352_place_104){
(cr44352_state[(0)] = cr44352_block_18);

(cr44352_state[(1)] = null);

(cr44352_state[(4)] = null);

(cr44352_state[(2)] = null);

(cr44352_state[(1)] = cr44352_place_105);

return cr44352_state;
} else {
(cr44352_state[(0)] = cr44352_block_16);

return cr44352_state;
}
}catch (e44817){var cr44352_exception = e44817;
(cr44352_state[(0)] = null);

(cr44352_state[(1)] = null);

(cr44352_state[(4)] = null);

(cr44352_state[(2)] = null);

throw cr44352_exception;
}});
var cr44352_block_7 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44352_block_7(cr44352_state){
try{var cr44352_place_64 = (cr44352_state[(3)]);
var cr44352_place_69 = cr44352_place_64;
var cr44352_place_70 = cr44352_place_69;
var cr44352_place_71 = cr44352_place_70;
var cr44352_place_72 = null;
var G__44819 = cr44352_place_71;
switch (G__44819) {
case (1005):
case (1006):
(cr44352_state[(0)] = cr44352_block_8);

(cr44352_state[(3)] = null);

(cr44352_state[(5)] = null);

(cr44352_state[(3)] = cr44352_place_72);

return cr44352_state;

break;
case (1008):
(cr44352_state[(0)] = cr44352_block_9);

(cr44352_state[(3)] = null);

(cr44352_state[(1)] = null);

(cr44352_state[(4)] = null);

(cr44352_state[(5)] = null);

(cr44352_state[(2)] = null);

(cr44352_state[(6)] = null);

return cr44352_state;

break;
default:
(cr44352_state[(0)] = cr44352_block_10);

(cr44352_state[(3)] = null);

(cr44352_state[(1)] = null);

(cr44352_state[(4)] = null);

(cr44352_state[(2)] = null);

(cr44352_state[(6)] = null);

(cr44352_state[(1)] = cr44352_place_69);

return cr44352_state;

}
}catch (e44818){var cr44352_exception = e44818;
(cr44352_state[(0)] = null);

(cr44352_state[(3)] = null);

(cr44352_state[(1)] = null);

(cr44352_state[(4)] = null);

(cr44352_state[(5)] = null);

(cr44352_state[(2)] = null);

(cr44352_state[(6)] = null);

throw cr44352_exception;
}});
var cr44352_block_0 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44352_block_0(cr44352_state){
try{var cr44352_place_0 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr44352_place_1 = hyperfiddle.electric_client.retry_delays;
(cr44352_state[(0)] = cr44352_block_1);

(cr44352_state[(1)] = cr44352_place_0);

(cr44352_state[(2)] = cr44352_place_1);

return cr44352_state;
}catch (e44820){var cr44352_exception = e44820;
(cr44352_state[(0)] = null);

throw cr44352_exception;
}});
var cr44352_block_17 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44352_block_17(cr44352_state){
try{var cr44352_place_130 = missionary.core.unpark();
(cr44352_state[(0)] = cr44352_block_1);

(cr44352_state[(2)] = cr44352_place_130);

return cr44352_state;
}catch (e44821){var cr44352_exception = e44821;
(cr44352_state[(0)] = null);

(cr44352_state[(1)] = null);

(cr44352_state[(2)] = null);

throw cr44352_exception;
}});
var cr44352_block_8 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44352_block_8(cr44352_state){
try{var cr44352_place_73 = console;
var cr44352_place_74 = "Connection lost.";
var cr44352_place_75 = cr44352_place_73.log(cr44352_place_74);
var cr44352_place_76 = cljs.core.seq;
var cr44352_place_77 = hyperfiddle.electric_client.retry_delays;
var cr44352_place_78 = (function (){var G__44824 = cr44352_place_77;
var fexpr__44823 = cr44352_place_76;
return (fexpr__44823.cljs$core$IFn$_invoke$arity$1 ? fexpr__44823.cljs$core$IFn$_invoke$arity$1(G__44824) : fexpr__44823.call(null,G__44824));
})();
(cr44352_state[(0)] = cr44352_block_11);

(cr44352_state[(3)] = cr44352_place_78);

return cr44352_state;
}catch (e44822){var cr44352_exception = e44822;
(cr44352_state[(0)] = null);

(cr44352_state[(1)] = null);

(cr44352_state[(4)] = null);

(cr44352_state[(3)] = null);

(cr44352_state[(2)] = null);

(cr44352_state[(6)] = null);

throw cr44352_exception;
}});
var cr44352_block_13 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44352_block_13(cr44352_state){
try{var cr44352_place_68 = (cr44352_state[(6)]);
(cr44352_state[(0)] = cr44352_block_15);

(cr44352_state[(6)] = null);

(cr44352_state[(4)] = cr44352_place_68);

return cr44352_state;
}catch (e44825){var cr44352_exception = e44825;
(cr44352_state[(0)] = null);

(cr44352_state[(1)] = null);

(cr44352_state[(4)] = null);

(cr44352_state[(2)] = null);

(cr44352_state[(6)] = null);

throw cr44352_exception;
}});
var cr44352_block_12 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44352_block_12(cr44352_state){
try{var cr44352_place_1 = (cr44352_state[(2)]);
var cr44352_place_97 = console;
var cr44352_place_98 = "Failed to connect.";
var cr44352_place_99 = cr44352_place_97.log(cr44352_place_98);
var cr44352_place_100 = cr44352_place_1;
(cr44352_state[(0)] = cr44352_block_13);

(cr44352_state[(6)] = cr44352_place_100);

return cr44352_state;
}catch (e44826){var cr44352_exception = e44826;
(cr44352_state[(0)] = null);

(cr44352_state[(1)] = null);

(cr44352_state[(4)] = null);

(cr44352_state[(2)] = null);

(cr44352_state[(6)] = null);

throw cr44352_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44827 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((7));
(G__44827[(0)] = cr44352_block_0);

return G__44827;
})());
})(),missionary.core.sp_run);
});

//# sourceMappingURL=hyperfiddle.electric_client.js.map
