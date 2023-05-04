goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38664 = arguments.length;
var i__5770__auto___38665 = (0);
while(true){
if((i__5770__auto___38665 < len__5769__auto___38664)){
args__5775__auto__.push((arguments[i__5770__auto___38665]));

var G__38666 = (i__5770__auto___38665 + (1));
i__5770__auto___38665 = G__38666;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38096){
var G__38097 = cljs.core.first(seq38096);
var seq38096__$1 = cljs.core.next(seq38096);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38097,seq38096__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38105 = cljs.core.seq(sources);
var chunk__38106 = null;
var count__38107 = (0);
var i__38108 = (0);
while(true){
if((i__38108 < count__38107)){
var map__38115 = chunk__38106.cljs$core$IIndexed$_nth$arity$2(null,i__38108);
var map__38115__$1 = cljs.core.__destructure_map(map__38115);
var src = map__38115__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38115__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38115__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38115__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38115__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38116){var e_38672 = e38116;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38672);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38672.message)].join('')));
}

var G__38674 = seq__38105;
var G__38675 = chunk__38106;
var G__38676 = count__38107;
var G__38677 = (i__38108 + (1));
seq__38105 = G__38674;
chunk__38106 = G__38675;
count__38107 = G__38676;
i__38108 = G__38677;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38105);
if(temp__5804__auto__){
var seq__38105__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38105__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38105__$1);
var G__38678 = cljs.core.chunk_rest(seq__38105__$1);
var G__38680 = c__5568__auto__;
var G__38681 = cljs.core.count(c__5568__auto__);
var G__38682 = (0);
seq__38105 = G__38678;
chunk__38106 = G__38680;
count__38107 = G__38681;
i__38108 = G__38682;
continue;
} else {
var map__38117 = cljs.core.first(seq__38105__$1);
var map__38117__$1 = cljs.core.__destructure_map(map__38117);
var src = map__38117__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38117__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38117__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38117__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38117__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38118){var e_38685 = e38118;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38685);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38685.message)].join('')));
}

var G__38687 = cljs.core.next(seq__38105__$1);
var G__38688 = null;
var G__38689 = (0);
var G__38690 = (0);
seq__38105 = G__38687;
chunk__38106 = G__38688;
count__38107 = G__38689;
i__38108 = G__38690;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__38119 = cljs.core.seq(js_requires);
var chunk__38120 = null;
var count__38121 = (0);
var i__38122 = (0);
while(true){
if((i__38122 < count__38121)){
var js_ns = chunk__38120.cljs$core$IIndexed$_nth$arity$2(null,i__38122);
var require_str_38694 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38694);


var G__38695 = seq__38119;
var G__38696 = chunk__38120;
var G__38697 = count__38121;
var G__38698 = (i__38122 + (1));
seq__38119 = G__38695;
chunk__38120 = G__38696;
count__38121 = G__38697;
i__38122 = G__38698;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38119);
if(temp__5804__auto__){
var seq__38119__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38119__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38119__$1);
var G__38700 = cljs.core.chunk_rest(seq__38119__$1);
var G__38701 = c__5568__auto__;
var G__38702 = cljs.core.count(c__5568__auto__);
var G__38703 = (0);
seq__38119 = G__38700;
chunk__38120 = G__38701;
count__38121 = G__38702;
i__38122 = G__38703;
continue;
} else {
var js_ns = cljs.core.first(seq__38119__$1);
var require_str_38704 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38704);


var G__38705 = cljs.core.next(seq__38119__$1);
var G__38706 = null;
var G__38707 = (0);
var G__38708 = (0);
seq__38119 = G__38705;
chunk__38120 = G__38706;
count__38121 = G__38707;
i__38122 = G__38708;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38124){
var map__38125 = p__38124;
var map__38125__$1 = cljs.core.__destructure_map(map__38125);
var msg = map__38125__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38125__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38125__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38126(s__38127){
return (new cljs.core.LazySeq(null,(function (){
var s__38127__$1 = s__38127;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38127__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__38134 = cljs.core.first(xs__6360__auto__);
var map__38134__$1 = cljs.core.__destructure_map(map__38134);
var src = map__38134__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38134__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38134__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__38127__$1,map__38134,map__38134__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38125,map__38125__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38126_$_iter__38128(s__38129){
return (new cljs.core.LazySeq(null,((function (s__38127__$1,map__38134,map__38134__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38125,map__38125__$1,msg,info,reload_info){
return (function (){
var s__38129__$1 = s__38129;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__38129__$1);
if(temp__5804__auto____$1){
var s__38129__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38129__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38129__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38131 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38130 = (0);
while(true){
if((i__38130 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__38130);
cljs.core.chunk_append(b__38131,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38714 = (i__38130 + (1));
i__38130 = G__38714;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38131),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38126_$_iter__38128(cljs.core.chunk_rest(s__38129__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38131),null);
}
} else {
var warning = cljs.core.first(s__38129__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38126_$_iter__38128(cljs.core.rest(s__38129__$2)));
}
} else {
return null;
}
break;
}
});})(s__38127__$1,map__38134,map__38134__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38125,map__38125__$1,msg,info,reload_info))
,null,null));
});})(s__38127__$1,map__38134,map__38134__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38125,map__38125__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38126(cljs.core.rest(s__38127__$1)));
} else {
var G__38718 = cljs.core.rest(s__38127__$1);
s__38127__$1 = G__38718;
continue;
}
} else {
var G__38719 = cljs.core.rest(s__38127__$1);
s__38127__$1 = G__38719;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__38137_38720 = cljs.core.seq(warnings);
var chunk__38138_38721 = null;
var count__38139_38722 = (0);
var i__38140_38723 = (0);
while(true){
if((i__38140_38723 < count__38139_38722)){
var map__38143_38725 = chunk__38138_38721.cljs$core$IIndexed$_nth$arity$2(null,i__38140_38723);
var map__38143_38726__$1 = cljs.core.__destructure_map(map__38143_38725);
var w_38727 = map__38143_38726__$1;
var msg_38728__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38143_38726__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38143_38726__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38143_38726__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38143_38726__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38731)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38729),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38730),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38728__$1)].join(''));


var G__38732 = seq__38137_38720;
var G__38733 = chunk__38138_38721;
var G__38734 = count__38139_38722;
var G__38735 = (i__38140_38723 + (1));
seq__38137_38720 = G__38732;
chunk__38138_38721 = G__38733;
count__38139_38722 = G__38734;
i__38140_38723 = G__38735;
continue;
} else {
var temp__5804__auto___38736 = cljs.core.seq(seq__38137_38720);
if(temp__5804__auto___38736){
var seq__38137_38737__$1 = temp__5804__auto___38736;
if(cljs.core.chunked_seq_QMARK_(seq__38137_38737__$1)){
var c__5568__auto___38739 = cljs.core.chunk_first(seq__38137_38737__$1);
var G__38740 = cljs.core.chunk_rest(seq__38137_38737__$1);
var G__38741 = c__5568__auto___38739;
var G__38742 = cljs.core.count(c__5568__auto___38739);
var G__38743 = (0);
seq__38137_38720 = G__38740;
chunk__38138_38721 = G__38741;
count__38139_38722 = G__38742;
i__38140_38723 = G__38743;
continue;
} else {
var map__38146_38744 = cljs.core.first(seq__38137_38737__$1);
var map__38146_38745__$1 = cljs.core.__destructure_map(map__38146_38744);
var w_38746 = map__38146_38745__$1;
var msg_38747__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38146_38745__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38146_38745__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38146_38745__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38146_38745__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38750)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38748),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38749),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38747__$1)].join(''));


var G__38753 = cljs.core.next(seq__38137_38737__$1);
var G__38754 = null;
var G__38755 = (0);
var G__38756 = (0);
seq__38137_38720 = G__38753;
chunk__38138_38721 = G__38754;
count__38139_38722 = G__38755;
i__38140_38723 = G__38756;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38123_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38123_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38151){
var map__38152 = p__38151;
var map__38152__$1 = cljs.core.__destructure_map(map__38152);
var msg = map__38152__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38152__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38152__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__38155 = cljs.core.seq(updates);
var chunk__38157 = null;
var count__38158 = (0);
var i__38159 = (0);
while(true){
if((i__38159 < count__38158)){
var path = chunk__38157.cljs$core$IIndexed$_nth$arity$2(null,i__38159);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38365_38763 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38369_38764 = null;
var count__38370_38765 = (0);
var i__38371_38766 = (0);
while(true){
if((i__38371_38766 < count__38370_38765)){
var node_38767 = chunk__38369_38764.cljs$core$IIndexed$_nth$arity$2(null,i__38371_38766);
if(cljs.core.not(node_38767.shadow$old)){
var path_match_38770 = shadow.cljs.devtools.client.browser.match_paths(node_38767.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38770)){
var new_link_38771 = (function (){var G__38412 = node_38767.cloneNode(true);
G__38412.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38770),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38412;
})();
(node_38767.shadow$old = true);

(new_link_38771.onload = ((function (seq__38365_38763,chunk__38369_38764,count__38370_38765,i__38371_38766,seq__38155,chunk__38157,count__38158,i__38159,new_link_38771,path_match_38770,node_38767,path,map__38152,map__38152__$1,msg,updates,reload_info){
return (function (e){
var seq__38413_38773 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38415_38774 = null;
var count__38416_38775 = (0);
var i__38417_38776 = (0);
while(true){
if((i__38417_38776 < count__38416_38775)){
var map__38425_38778 = chunk__38415_38774.cljs$core$IIndexed$_nth$arity$2(null,i__38417_38776);
var map__38425_38779__$1 = cljs.core.__destructure_map(map__38425_38778);
var task_38780 = map__38425_38779__$1;
var fn_str_38781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38425_38779__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38425_38779__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38783 = goog.getObjectByName(fn_str_38781,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38782)].join(''));

(fn_obj_38783.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38783.cljs$core$IFn$_invoke$arity$2(path,new_link_38771) : fn_obj_38783.call(null,path,new_link_38771));


var G__38786 = seq__38413_38773;
var G__38787 = chunk__38415_38774;
var G__38788 = count__38416_38775;
var G__38789 = (i__38417_38776 + (1));
seq__38413_38773 = G__38786;
chunk__38415_38774 = G__38787;
count__38416_38775 = G__38788;
i__38417_38776 = G__38789;
continue;
} else {
var temp__5804__auto___38790 = cljs.core.seq(seq__38413_38773);
if(temp__5804__auto___38790){
var seq__38413_38792__$1 = temp__5804__auto___38790;
if(cljs.core.chunked_seq_QMARK_(seq__38413_38792__$1)){
var c__5568__auto___38793 = cljs.core.chunk_first(seq__38413_38792__$1);
var G__38794 = cljs.core.chunk_rest(seq__38413_38792__$1);
var G__38795 = c__5568__auto___38793;
var G__38796 = cljs.core.count(c__5568__auto___38793);
var G__38797 = (0);
seq__38413_38773 = G__38794;
chunk__38415_38774 = G__38795;
count__38416_38775 = G__38796;
i__38417_38776 = G__38797;
continue;
} else {
var map__38429_38798 = cljs.core.first(seq__38413_38792__$1);
var map__38429_38799__$1 = cljs.core.__destructure_map(map__38429_38798);
var task_38800 = map__38429_38799__$1;
var fn_str_38801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38429_38799__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38429_38799__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38803 = goog.getObjectByName(fn_str_38801,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38802)].join(''));

(fn_obj_38803.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38803.cljs$core$IFn$_invoke$arity$2(path,new_link_38771) : fn_obj_38803.call(null,path,new_link_38771));


var G__38805 = cljs.core.next(seq__38413_38792__$1);
var G__38806 = null;
var G__38807 = (0);
var G__38808 = (0);
seq__38413_38773 = G__38805;
chunk__38415_38774 = G__38806;
count__38416_38775 = G__38807;
i__38417_38776 = G__38808;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38767);
});})(seq__38365_38763,chunk__38369_38764,count__38370_38765,i__38371_38766,seq__38155,chunk__38157,count__38158,i__38159,new_link_38771,path_match_38770,node_38767,path,map__38152,map__38152__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38770], 0));

goog.dom.insertSiblingAfter(new_link_38771,node_38767);


var G__38809 = seq__38365_38763;
var G__38810 = chunk__38369_38764;
var G__38811 = count__38370_38765;
var G__38812 = (i__38371_38766 + (1));
seq__38365_38763 = G__38809;
chunk__38369_38764 = G__38810;
count__38370_38765 = G__38811;
i__38371_38766 = G__38812;
continue;
} else {
var G__38813 = seq__38365_38763;
var G__38814 = chunk__38369_38764;
var G__38815 = count__38370_38765;
var G__38816 = (i__38371_38766 + (1));
seq__38365_38763 = G__38813;
chunk__38369_38764 = G__38814;
count__38370_38765 = G__38815;
i__38371_38766 = G__38816;
continue;
}
} else {
var G__38817 = seq__38365_38763;
var G__38818 = chunk__38369_38764;
var G__38819 = count__38370_38765;
var G__38820 = (i__38371_38766 + (1));
seq__38365_38763 = G__38817;
chunk__38369_38764 = G__38818;
count__38370_38765 = G__38819;
i__38371_38766 = G__38820;
continue;
}
} else {
var temp__5804__auto___38822 = cljs.core.seq(seq__38365_38763);
if(temp__5804__auto___38822){
var seq__38365_38824__$1 = temp__5804__auto___38822;
if(cljs.core.chunked_seq_QMARK_(seq__38365_38824__$1)){
var c__5568__auto___38825 = cljs.core.chunk_first(seq__38365_38824__$1);
var G__38826 = cljs.core.chunk_rest(seq__38365_38824__$1);
var G__38827 = c__5568__auto___38825;
var G__38828 = cljs.core.count(c__5568__auto___38825);
var G__38829 = (0);
seq__38365_38763 = G__38826;
chunk__38369_38764 = G__38827;
count__38370_38765 = G__38828;
i__38371_38766 = G__38829;
continue;
} else {
var node_38830 = cljs.core.first(seq__38365_38824__$1);
if(cljs.core.not(node_38830.shadow$old)){
var path_match_38832 = shadow.cljs.devtools.client.browser.match_paths(node_38830.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38832)){
var new_link_38833 = (function (){var G__38436 = node_38830.cloneNode(true);
G__38436.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38832),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38436;
})();
(node_38830.shadow$old = true);

(new_link_38833.onload = ((function (seq__38365_38763,chunk__38369_38764,count__38370_38765,i__38371_38766,seq__38155,chunk__38157,count__38158,i__38159,new_link_38833,path_match_38832,node_38830,seq__38365_38824__$1,temp__5804__auto___38822,path,map__38152,map__38152__$1,msg,updates,reload_info){
return (function (e){
var seq__38438_38834 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38440_38835 = null;
var count__38441_38836 = (0);
var i__38442_38837 = (0);
while(true){
if((i__38442_38837 < count__38441_38836)){
var map__38451_38839 = chunk__38440_38835.cljs$core$IIndexed$_nth$arity$2(null,i__38442_38837);
var map__38451_38840__$1 = cljs.core.__destructure_map(map__38451_38839);
var task_38841 = map__38451_38840__$1;
var fn_str_38842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38451_38840__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38451_38840__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38844 = goog.getObjectByName(fn_str_38842,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38843)].join(''));

(fn_obj_38844.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38844.cljs$core$IFn$_invoke$arity$2(path,new_link_38833) : fn_obj_38844.call(null,path,new_link_38833));


var G__38847 = seq__38438_38834;
var G__38848 = chunk__38440_38835;
var G__38849 = count__38441_38836;
var G__38850 = (i__38442_38837 + (1));
seq__38438_38834 = G__38847;
chunk__38440_38835 = G__38848;
count__38441_38836 = G__38849;
i__38442_38837 = G__38850;
continue;
} else {
var temp__5804__auto___38851__$1 = cljs.core.seq(seq__38438_38834);
if(temp__5804__auto___38851__$1){
var seq__38438_38852__$1 = temp__5804__auto___38851__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38438_38852__$1)){
var c__5568__auto___38854 = cljs.core.chunk_first(seq__38438_38852__$1);
var G__38855 = cljs.core.chunk_rest(seq__38438_38852__$1);
var G__38856 = c__5568__auto___38854;
var G__38857 = cljs.core.count(c__5568__auto___38854);
var G__38858 = (0);
seq__38438_38834 = G__38855;
chunk__38440_38835 = G__38856;
count__38441_38836 = G__38857;
i__38442_38837 = G__38858;
continue;
} else {
var map__38456_38859 = cljs.core.first(seq__38438_38852__$1);
var map__38456_38860__$1 = cljs.core.__destructure_map(map__38456_38859);
var task_38861 = map__38456_38860__$1;
var fn_str_38862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38456_38860__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38456_38860__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38864 = goog.getObjectByName(fn_str_38862,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38863)].join(''));

(fn_obj_38864.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38864.cljs$core$IFn$_invoke$arity$2(path,new_link_38833) : fn_obj_38864.call(null,path,new_link_38833));


var G__38865 = cljs.core.next(seq__38438_38852__$1);
var G__38866 = null;
var G__38867 = (0);
var G__38868 = (0);
seq__38438_38834 = G__38865;
chunk__38440_38835 = G__38866;
count__38441_38836 = G__38867;
i__38442_38837 = G__38868;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38830);
});})(seq__38365_38763,chunk__38369_38764,count__38370_38765,i__38371_38766,seq__38155,chunk__38157,count__38158,i__38159,new_link_38833,path_match_38832,node_38830,seq__38365_38824__$1,temp__5804__auto___38822,path,map__38152,map__38152__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38832], 0));

goog.dom.insertSiblingAfter(new_link_38833,node_38830);


var G__38870 = cljs.core.next(seq__38365_38824__$1);
var G__38871 = null;
var G__38872 = (0);
var G__38873 = (0);
seq__38365_38763 = G__38870;
chunk__38369_38764 = G__38871;
count__38370_38765 = G__38872;
i__38371_38766 = G__38873;
continue;
} else {
var G__38874 = cljs.core.next(seq__38365_38824__$1);
var G__38875 = null;
var G__38876 = (0);
var G__38877 = (0);
seq__38365_38763 = G__38874;
chunk__38369_38764 = G__38875;
count__38370_38765 = G__38876;
i__38371_38766 = G__38877;
continue;
}
} else {
var G__38878 = cljs.core.next(seq__38365_38824__$1);
var G__38879 = null;
var G__38880 = (0);
var G__38881 = (0);
seq__38365_38763 = G__38878;
chunk__38369_38764 = G__38879;
count__38370_38765 = G__38880;
i__38371_38766 = G__38881;
continue;
}
}
} else {
}
}
break;
}


var G__38882 = seq__38155;
var G__38883 = chunk__38157;
var G__38884 = count__38158;
var G__38885 = (i__38159 + (1));
seq__38155 = G__38882;
chunk__38157 = G__38883;
count__38158 = G__38884;
i__38159 = G__38885;
continue;
} else {
var G__38886 = seq__38155;
var G__38887 = chunk__38157;
var G__38888 = count__38158;
var G__38889 = (i__38159 + (1));
seq__38155 = G__38886;
chunk__38157 = G__38887;
count__38158 = G__38888;
i__38159 = G__38889;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38155);
if(temp__5804__auto__){
var seq__38155__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38155__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38155__$1);
var G__38892 = cljs.core.chunk_rest(seq__38155__$1);
var G__38893 = c__5568__auto__;
var G__38894 = cljs.core.count(c__5568__auto__);
var G__38895 = (0);
seq__38155 = G__38892;
chunk__38157 = G__38893;
count__38158 = G__38894;
i__38159 = G__38895;
continue;
} else {
var path = cljs.core.first(seq__38155__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38457_38896 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38461_38897 = null;
var count__38462_38898 = (0);
var i__38463_38899 = (0);
while(true){
if((i__38463_38899 < count__38462_38898)){
var node_38900 = chunk__38461_38897.cljs$core$IIndexed$_nth$arity$2(null,i__38463_38899);
if(cljs.core.not(node_38900.shadow$old)){
var path_match_38901 = shadow.cljs.devtools.client.browser.match_paths(node_38900.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38901)){
var new_link_38902 = (function (){var G__38511 = node_38900.cloneNode(true);
G__38511.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38901),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38511;
})();
(node_38900.shadow$old = true);

(new_link_38902.onload = ((function (seq__38457_38896,chunk__38461_38897,count__38462_38898,i__38463_38899,seq__38155,chunk__38157,count__38158,i__38159,new_link_38902,path_match_38901,node_38900,path,seq__38155__$1,temp__5804__auto__,map__38152,map__38152__$1,msg,updates,reload_info){
return (function (e){
var seq__38518_38904 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38520_38905 = null;
var count__38521_38906 = (0);
var i__38522_38907 = (0);
while(true){
if((i__38522_38907 < count__38521_38906)){
var map__38528_38908 = chunk__38520_38905.cljs$core$IIndexed$_nth$arity$2(null,i__38522_38907);
var map__38528_38909__$1 = cljs.core.__destructure_map(map__38528_38908);
var task_38910 = map__38528_38909__$1;
var fn_str_38911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38528_38909__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38528_38909__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38913 = goog.getObjectByName(fn_str_38911,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38912)].join(''));

(fn_obj_38913.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38913.cljs$core$IFn$_invoke$arity$2(path,new_link_38902) : fn_obj_38913.call(null,path,new_link_38902));


var G__38914 = seq__38518_38904;
var G__38915 = chunk__38520_38905;
var G__38916 = count__38521_38906;
var G__38917 = (i__38522_38907 + (1));
seq__38518_38904 = G__38914;
chunk__38520_38905 = G__38915;
count__38521_38906 = G__38916;
i__38522_38907 = G__38917;
continue;
} else {
var temp__5804__auto___38919__$1 = cljs.core.seq(seq__38518_38904);
if(temp__5804__auto___38919__$1){
var seq__38518_38920__$1 = temp__5804__auto___38919__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38518_38920__$1)){
var c__5568__auto___38921 = cljs.core.chunk_first(seq__38518_38920__$1);
var G__38922 = cljs.core.chunk_rest(seq__38518_38920__$1);
var G__38923 = c__5568__auto___38921;
var G__38924 = cljs.core.count(c__5568__auto___38921);
var G__38925 = (0);
seq__38518_38904 = G__38922;
chunk__38520_38905 = G__38923;
count__38521_38906 = G__38924;
i__38522_38907 = G__38925;
continue;
} else {
var map__38535_38926 = cljs.core.first(seq__38518_38920__$1);
var map__38535_38927__$1 = cljs.core.__destructure_map(map__38535_38926);
var task_38928 = map__38535_38927__$1;
var fn_str_38929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38535_38927__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38535_38927__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38931 = goog.getObjectByName(fn_str_38929,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38930)].join(''));

(fn_obj_38931.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38931.cljs$core$IFn$_invoke$arity$2(path,new_link_38902) : fn_obj_38931.call(null,path,new_link_38902));


var G__38932 = cljs.core.next(seq__38518_38920__$1);
var G__38933 = null;
var G__38934 = (0);
var G__38935 = (0);
seq__38518_38904 = G__38932;
chunk__38520_38905 = G__38933;
count__38521_38906 = G__38934;
i__38522_38907 = G__38935;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38900);
});})(seq__38457_38896,chunk__38461_38897,count__38462_38898,i__38463_38899,seq__38155,chunk__38157,count__38158,i__38159,new_link_38902,path_match_38901,node_38900,path,seq__38155__$1,temp__5804__auto__,map__38152,map__38152__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38901], 0));

goog.dom.insertSiblingAfter(new_link_38902,node_38900);


var G__38937 = seq__38457_38896;
var G__38938 = chunk__38461_38897;
var G__38939 = count__38462_38898;
var G__38940 = (i__38463_38899 + (1));
seq__38457_38896 = G__38937;
chunk__38461_38897 = G__38938;
count__38462_38898 = G__38939;
i__38463_38899 = G__38940;
continue;
} else {
var G__38941 = seq__38457_38896;
var G__38942 = chunk__38461_38897;
var G__38943 = count__38462_38898;
var G__38944 = (i__38463_38899 + (1));
seq__38457_38896 = G__38941;
chunk__38461_38897 = G__38942;
count__38462_38898 = G__38943;
i__38463_38899 = G__38944;
continue;
}
} else {
var G__38945 = seq__38457_38896;
var G__38946 = chunk__38461_38897;
var G__38947 = count__38462_38898;
var G__38948 = (i__38463_38899 + (1));
seq__38457_38896 = G__38945;
chunk__38461_38897 = G__38946;
count__38462_38898 = G__38947;
i__38463_38899 = G__38948;
continue;
}
} else {
var temp__5804__auto___38949__$1 = cljs.core.seq(seq__38457_38896);
if(temp__5804__auto___38949__$1){
var seq__38457_38950__$1 = temp__5804__auto___38949__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38457_38950__$1)){
var c__5568__auto___38951 = cljs.core.chunk_first(seq__38457_38950__$1);
var G__38954 = cljs.core.chunk_rest(seq__38457_38950__$1);
var G__38955 = c__5568__auto___38951;
var G__38956 = cljs.core.count(c__5568__auto___38951);
var G__38957 = (0);
seq__38457_38896 = G__38954;
chunk__38461_38897 = G__38955;
count__38462_38898 = G__38956;
i__38463_38899 = G__38957;
continue;
} else {
var node_38958 = cljs.core.first(seq__38457_38950__$1);
if(cljs.core.not(node_38958.shadow$old)){
var path_match_38959 = shadow.cljs.devtools.client.browser.match_paths(node_38958.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38959)){
var new_link_38961 = (function (){var G__38547 = node_38958.cloneNode(true);
G__38547.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38959),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38547;
})();
(node_38958.shadow$old = true);

(new_link_38961.onload = ((function (seq__38457_38896,chunk__38461_38897,count__38462_38898,i__38463_38899,seq__38155,chunk__38157,count__38158,i__38159,new_link_38961,path_match_38959,node_38958,seq__38457_38950__$1,temp__5804__auto___38949__$1,path,seq__38155__$1,temp__5804__auto__,map__38152,map__38152__$1,msg,updates,reload_info){
return (function (e){
var seq__38549_38962 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38551_38963 = null;
var count__38552_38964 = (0);
var i__38553_38965 = (0);
while(true){
if((i__38553_38965 < count__38552_38964)){
var map__38565_38967 = chunk__38551_38963.cljs$core$IIndexed$_nth$arity$2(null,i__38553_38965);
var map__38565_38968__$1 = cljs.core.__destructure_map(map__38565_38967);
var task_38969 = map__38565_38968__$1;
var fn_str_38970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38565_38968__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38565_38968__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38974 = goog.getObjectByName(fn_str_38970,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38971)].join(''));

(fn_obj_38974.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38974.cljs$core$IFn$_invoke$arity$2(path,new_link_38961) : fn_obj_38974.call(null,path,new_link_38961));


var G__38976 = seq__38549_38962;
var G__38977 = chunk__38551_38963;
var G__38978 = count__38552_38964;
var G__38979 = (i__38553_38965 + (1));
seq__38549_38962 = G__38976;
chunk__38551_38963 = G__38977;
count__38552_38964 = G__38978;
i__38553_38965 = G__38979;
continue;
} else {
var temp__5804__auto___38980__$2 = cljs.core.seq(seq__38549_38962);
if(temp__5804__auto___38980__$2){
var seq__38549_38981__$1 = temp__5804__auto___38980__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38549_38981__$1)){
var c__5568__auto___38982 = cljs.core.chunk_first(seq__38549_38981__$1);
var G__38983 = cljs.core.chunk_rest(seq__38549_38981__$1);
var G__38984 = c__5568__auto___38982;
var G__38985 = cljs.core.count(c__5568__auto___38982);
var G__38986 = (0);
seq__38549_38962 = G__38983;
chunk__38551_38963 = G__38984;
count__38552_38964 = G__38985;
i__38553_38965 = G__38986;
continue;
} else {
var map__38569_38988 = cljs.core.first(seq__38549_38981__$1);
var map__38569_38989__$1 = cljs.core.__destructure_map(map__38569_38988);
var task_38990 = map__38569_38989__$1;
var fn_str_38991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38569_38989__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38569_38989__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38993 = goog.getObjectByName(fn_str_38991,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38992)].join(''));

(fn_obj_38993.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38993.cljs$core$IFn$_invoke$arity$2(path,new_link_38961) : fn_obj_38993.call(null,path,new_link_38961));


var G__38995 = cljs.core.next(seq__38549_38981__$1);
var G__38996 = null;
var G__38997 = (0);
var G__38998 = (0);
seq__38549_38962 = G__38995;
chunk__38551_38963 = G__38996;
count__38552_38964 = G__38997;
i__38553_38965 = G__38998;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38958);
});})(seq__38457_38896,chunk__38461_38897,count__38462_38898,i__38463_38899,seq__38155,chunk__38157,count__38158,i__38159,new_link_38961,path_match_38959,node_38958,seq__38457_38950__$1,temp__5804__auto___38949__$1,path,seq__38155__$1,temp__5804__auto__,map__38152,map__38152__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38959], 0));

goog.dom.insertSiblingAfter(new_link_38961,node_38958);


var G__39000 = cljs.core.next(seq__38457_38950__$1);
var G__39001 = null;
var G__39002 = (0);
var G__39003 = (0);
seq__38457_38896 = G__39000;
chunk__38461_38897 = G__39001;
count__38462_38898 = G__39002;
i__38463_38899 = G__39003;
continue;
} else {
var G__39005 = cljs.core.next(seq__38457_38950__$1);
var G__39006 = null;
var G__39007 = (0);
var G__39008 = (0);
seq__38457_38896 = G__39005;
chunk__38461_38897 = G__39006;
count__38462_38898 = G__39007;
i__38463_38899 = G__39008;
continue;
}
} else {
var G__39009 = cljs.core.next(seq__38457_38950__$1);
var G__39010 = null;
var G__39011 = (0);
var G__39012 = (0);
seq__38457_38896 = G__39009;
chunk__38461_38897 = G__39010;
count__38462_38898 = G__39011;
i__38463_38899 = G__39012;
continue;
}
}
} else {
}
}
break;
}


var G__39013 = cljs.core.next(seq__38155__$1);
var G__39014 = null;
var G__39016 = (0);
var G__39017 = (0);
seq__38155 = G__39013;
chunk__38157 = G__39014;
count__38158 = G__39016;
i__38159 = G__39017;
continue;
} else {
var G__39018 = cljs.core.next(seq__38155__$1);
var G__39019 = null;
var G__39020 = (0);
var G__39021 = (0);
seq__38155 = G__39018;
chunk__38157 = G__39019;
count__38158 = G__39020;
i__38159 = G__39021;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__38582){
var map__38583 = p__38582;
var map__38583__$1 = cljs.core.__destructure_map(map__38583);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38583__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__38597){
var map__38598 = p__38597;
var map__38598__$1 = cljs.core.__destructure_map(map__38598);
var _ = map__38598__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38598__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38600,done,error){
var map__38601 = p__38600;
var map__38601__$1 = cljs.core.__destructure_map(map__38601);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38601__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38609,done,error){
var map__38610 = p__38609;
var map__38610__$1 = cljs.core.__destructure_map(map__38610);
var msg = map__38610__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38610__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38610__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38610__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38613){
var map__38614 = p__38613;
var map__38614__$1 = cljs.core.__destructure_map(map__38614);
var src = map__38614__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38614__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38619 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38619) : done.call(null,G__38619));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38622){
var map__38623 = p__38622;
var map__38623__$1 = cljs.core.__destructure_map(map__38623);
var msg__$1 = map__38623__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38623__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38625){var ex = e38625;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38626){
var map__38627 = p__38626;
var map__38627__$1 = cljs.core.__destructure_map(map__38627);
var env = map__38627__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38627__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38643){
var map__38644 = p__38643;
var map__38644__$1 = cljs.core.__destructure_map(map__38644);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38644__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38644__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__38652){
var map__38653 = p__38652;
var map__38653__$1 = cljs.core.__destructure_map(map__38653);
var svc = map__38653__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38653__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
