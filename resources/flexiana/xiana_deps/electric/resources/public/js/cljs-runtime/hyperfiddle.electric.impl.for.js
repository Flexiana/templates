goog.provide('hyperfiddle.electric.impl.for$');
hyperfiddle.electric.impl.for$.seq_diff = (function hyperfiddle$electric$impl$for$seq_diff(kf){
return (function (rf){
var state = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((4));
var append = (function (o,k){
var next_index = (state[((2) | (0))]);
(state[((2) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_index,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(next_index,k,cljs.core.PersistentVector.EMPTY),o)));

var temp__5806__auto__ = (state[((3) | (0))]);
if((temp__5806__auto__ == null)){
(o[((0) | (0))] = o);

(o[((1) | (0))] = o);

return (state[((3) | (0))] = o);
} else {
var next_head = temp__5806__auto__;
var next_tail = (next_head[((0) | (0))]);
(o[((0) | (0))] = next_tail);

(o[((1) | (0))] = next_head);

(next_head[((0) | (0))] = o);

return (next_tail[((1) | (0))] = o);
}
});
var scan = (function (r,x){
var k = (kf.cljs$core$IFn$_invoke$arity$1 ? kf.cljs$core$IFn$_invoke$arity$1(x) : kf.call(null,x));
var prev_index = (state[((0) | (0))]);
var prev_head = (state[((1) | (0))]);
var temp__5806__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_index,k);
if((temp__5806__auto__ == null)){
var o = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
append(o,k);

var G__44036 = (function (){var G__44039 = r;
var G__44040 = o;
var G__44041 = (o[((2) | (0))] = x);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__44039,G__44040,G__44041) : rf.call(null,G__44039,G__44040,G__44041));
})();
var G__44037 = null;
var G__44038 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,prev_head], null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__44036,G__44037,G__44038) : rf.call(null,G__44036,G__44037,G__44038));
} else {
var vec__44043 = temp__5806__auto__;
var seq__44044 = cljs.core.seq(vec__44043);
var first__44045 = cljs.core.first(seq__44044);
var seq__44044__$1 = cljs.core.next(seq__44044);
var o = first__44045;
var os = seq__44044__$1;
var prev = (o[((0) | (0))]);
var next = (((o === prev))?null:(prev[((1) | (0))] = (function (){var G__44047 = (o[((1) | (0))]);
(G__44047[((0) | (0))] = prev);

return G__44047;
})()));
var r__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(o[((2) | (0))])))?r:(function (){var G__44048 = r;
var G__44049 = o;
var G__44050 = (o[((2) | (0))] = x);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__44048,G__44049,G__44050) : rf.call(null,G__44048,G__44049,G__44050));
})());
var r__$2 = (((o === prev_head))?(function (){
(state[((1) | (0))] = next);

return r__$1;
})()
:(function (){var G__44051 = r__$1;
var G__44052 = null;
var G__44053 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,prev_head], null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__44051,G__44052,G__44053) : rf.call(null,G__44051,G__44052,G__44053));
})());
(state[((0) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prev_index,k,os));

append(o,k);

return r__$2;
}
});
return (function() {
var G__44212 = null;
var G__44212__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__44212__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__44212__2 = (function (r,xs){
if((xs instanceof hyperfiddle.electric.Failure)){
var temp__5806__auto__ = (state[((1) | (0))]);
if((temp__5806__auto__ == null)){
return r;
} else {
var prev_head = temp__5806__auto__;
var o = prev_head;
var r__$1 = r;
while(true){
var o__$1 = (o[((0) | (0))]);
var r__$2 = (function (){var G__44055 = r__$1;
var G__44056 = o__$1;
var G__44057 = (o__$1[((2) | (0))] = xs);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__44055,G__44056,G__44057) : rf.call(null,G__44055,G__44056,G__44057));
})();
if((o__$1 === prev_head)){
return r__$2;
} else {
var G__44216 = o__$1;
var G__44217 = r__$2;
o = G__44216;
r__$1 = G__44217;
continue;
}
break;
}
}
} else {
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(scan,r,xs);
var r__$2 = (function (){var temp__5806__auto__ = (state[((1) | (0))]);
if((temp__5806__auto__ == null)){
return r__$1;
} else {
var prev_head = temp__5806__auto__;
var o = prev_head;
var r__$2 = r__$1;
while(true){
var o__$1 = (o[((0) | (0))]);
var r__$3 = (function (){var G__44062 = r__$2;
var G__44063 = null;
var G__44064 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o__$1,o__$1], null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__44062,G__44063,G__44064) : rf.call(null,G__44062,G__44063,G__44064));
})();
if((o__$1 === prev_head)){
return r__$3;
} else {
var G__44218 = o__$1;
var G__44219 = r__$3;
o = G__44218;
r__$2 = G__44219;
continue;
}
break;
}
}
})();
(state[((0) | (0))] = (state[((2) | (0))]));

(state[((1) | (0))] = (state[((3) | (0))]));

(state[((2) | (0))] = null);

(state[((3) | (0))] = null);

return r__$2;
}
});
G__44212 = function(r,xs){
switch(arguments.length){
case 0:
return G__44212__0.call(this);
case 1:
return G__44212__1.call(this,r);
case 2:
return G__44212__2.call(this,r,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44212.cljs$core$IFn$_invoke$arity$0 = G__44212__0;
G__44212.cljs$core$IFn$_invoke$arity$1 = G__44212__1;
G__44212.cljs$core$IFn$_invoke$arity$2 = G__44212__2;
return G__44212;
})()
});
});
hyperfiddle.electric.impl.for$.entry = (function hyperfiddle$electric$impl$for$entry(k,v){
return cljs.core.__GT_MapEntry(k,v,null);
});
hyperfiddle.electric.impl.for$.insert_before = (function hyperfiddle$electric$impl$for$insert_before(tier){
return (function (rf){
var state = (function (){var G__44077 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__44077[((0) | (0))] = cljs.core.PersistentArrayMap.EMPTY);

(G__44077[((1) | (0))] = cljs.core.PersistentVector.EMPTY);

return G__44077;
})();
return (function() {
var G__44221 = null;
var G__44221__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__44221__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__44221__2 = (function (r,p__44079){
var vec__44080 = p__44079;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44080,(0),null);
var anchor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44080,(1),null);
var r__$1 = (function (){var k__GT_p = (state[((0) | (0))]);
if(cljs.core.contains_QMARK_(k__GT_p,target)){
return r;
} else {
(state[((0) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(k__GT_p,target,cljs.core.count(k__GT_p)));

(state[((1) | (0))] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((state[((1) | (0))]),target));

var G__44087 = r;
var G__44088 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target], null);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__44087,G__44088) : rf.call(null,G__44087,G__44088));
}
})();
var k__GT_p = (state[((0) | (0))]);
var start_position = (k__GT_p.cljs$core$IFn$_invoke$arity$1 ? k__GT_p.cljs$core$IFn$_invoke$arity$1(target) : k__GT_p.call(null,target));
var anchor_position = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anchor,target))?cljs.core.count(k__GT_p):(function (){var G__44092 = anchor;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__44092)){
return cljs.core.count(k__GT_p);
} else {
return (k__GT_p.cljs$core$IFn$_invoke$arity$1 ? k__GT_p.cljs$core$IFn$_invoke$arity$1(anchor) : k__GT_p.call(null,anchor));

}
})());
var final_position = (((start_position < anchor_position))?(anchor_position - (1)):anchor_position);
var step = cljs.core.compare(final_position,start_position);
var r__$2 = (function (){var G__44094 = step;
switch (G__44094) {
case (0):
return r__$1;

break;
default:
var ks = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target], null);
var i = start_position;
while(true){
var j = (i + step);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((state[((1) | (0))]),j);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
(state[((0) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((state[((0) | (0))]),k,i));

(state[((1) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((state[((1) | (0))]),i,k));

if((j === final_position)){
(state[((0) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((state[((0) | (0))]),target,j));

(state[((1) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((state[((1) | (0))]),j,target));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(r__$1,ks__$1) : rf.call(null,r__$1,ks__$1));
} else {
var G__44228 = ks__$1;
var G__44229 = j;
ks = G__44228;
i = G__44229;
continue;
}
break;
}

}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anchor,target)){
(state[((0) | (0))] = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((state[((0) | (0))]),target));

(state[((1) | (0))] = cljs.core.pop((state[((1) | (0))])));

hyperfiddle.electric.impl.runtime.move(tier,start_position,start_position);

var G__44106 = r__$2;
var G__44107 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target], null);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__44106,G__44107) : rf.call(null,G__44106,G__44107));
} else {
if((start_position === final_position)){
} else {
hyperfiddle.electric.impl.runtime.move(tier,start_position,final_position);
}

return r__$2;
}
});
G__44221 = function(r,p__44079){
switch(arguments.length){
case 0:
return G__44221__0.call(this);
case 1:
return G__44221__1.call(this,r);
case 2:
return G__44221__2.call(this,r,p__44079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44221.cljs$core$IFn$_invoke$arity$0 = G__44221__0;
G__44221.cljs$core$IFn$_invoke$arity$1 = G__44221__1;
G__44221.cljs$core$IFn$_invoke$arity$2 = G__44221__2;
return G__44221;
})()
});
});
hyperfiddle.electric.impl.for$.apply_cycle = (function hyperfiddle$electric$impl$for$apply_cycle(p__44114,p__44115){
var map__44119 = p__44114;
var map__44119__$1 = cljs.core.__destructure_map(map__44119);
var r = map__44119__$1;
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44119__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44119__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44119__$1,new cljs.core.Keyword(null,"failed","failed",-1397425762));
var vec__44120 = p__44115;
var seq__44121 = cljs.core.seq(vec__44120);
var first__44122 = cljs.core.first(seq__44121);
var seq__44121__$1 = cljs.core.next(seq__44121);
var x = first__44122;
var ys = seq__44121__$1;
var temp__5806__auto__ = ys;
if((temp__5806__auto__ == null)){
var temp__5806__auto____$1 = (index.cljs$core$IFn$_invoke$arity$1 ? index.cljs$core$IFn$_invoke$arity$1(x) : index.call(null,x));
if((temp__5806__auto____$1 == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index,x,cljs.core.count(index)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vals","vals",768058733),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals,null)], 0));
} else {
var i = temp__5806__auto____$1;
if(((i + (1)) === cljs.core.count(index))){
} else {
throw (new Error("Assert failed: (== (inc i) (count index))"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"failed","failed",-1397425762),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(failed,x),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(index,x),new cljs.core.Keyword(null,"vals","vals",768058733),cljs.core.pop(vals)], 0));
}
} else {
var vec__44130 = temp__5806__auto__;
var seq__44131 = cljs.core.seq(vec__44130);
var first__44132 = cljs.core.first(seq__44131);
var seq__44131__$1 = cljs.core.next(seq__44131);
var y = first__44132;
var ys__$1 = seq__44131__$1;
var i = (index.cljs$core$IFn$_invoke$arity$1 ? index.cljs$core$IFn$_invoke$arity$1(x) : index.call(null,x));
var v = (vals.cljs$core$IFn$_invoke$arity$1 ? vals.cljs$core$IFn$_invoke$arity$1(i) : vals.call(null,i));
var index__$1 = index;
var vals__$1 = vals;
var i__$1 = i;
var y__$1 = y;
var ys__$2 = ys__$1;
while(true){
var j = (index__$1.cljs$core$IFn$_invoke$arity$1 ? index__$1.cljs$core$IFn$_invoke$arity$1(y__$1) : index__$1.call(null,y__$1));
var index__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index__$1,y__$1,i__$1);
var vals__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vals__$1,i__$1,(vals__$1.cljs$core$IFn$_invoke$arity$1 ? vals__$1.cljs$core$IFn$_invoke$arity$1(j) : vals__$1.call(null,j)));
var temp__5806__auto____$1 = ys__$2;
if((temp__5806__auto____$1 == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index__$2,x,j),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vals","vals",768058733),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vals__$2,j,v)], 0));
} else {
var vec__44149 = temp__5806__auto____$1;
var seq__44150 = cljs.core.seq(vec__44149);
var first__44151 = cljs.core.first(seq__44150);
var seq__44150__$1 = cljs.core.next(seq__44150);
var y__$2 = first__44151;
var ys__$3 = seq__44150__$1;
var G__44258 = index__$2;
var G__44259 = vals__$2;
var G__44260 = j;
var G__44261 = y__$2;
var G__44262 = ys__$3;
index__$1 = G__44258;
vals__$1 = G__44259;
i__$1 = G__44260;
y__$1 = G__44261;
ys__$2 = G__44262;
continue;
}
break;
}
}
});
hyperfiddle.electric.impl.for$.apply_change = (function hyperfiddle$electric$impl$for$apply_change(p__44155,k,v){
var map__44156 = p__44155;
var map__44156__$1 = cljs.core.__destructure_map(map__44156);
var r = map__44156__$1;
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44156__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44156__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44156__$1,new cljs.core.Keyword(null,"failed","failed",-1397425762));
var temp__5806__auto__ = (index.cljs$core$IFn$_invoke$arity$1 ? index.cljs$core$IFn$_invoke$arity$1(k) : index.call(null,k));
if((temp__5806__auto__ == null)){
return r;
} else {
var i = temp__5806__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"vals","vals",768058733),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vals,i,v),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"failed","failed",-1397425762),(function (){var fexpr__44161 = (((v instanceof hyperfiddle.electric.Failure))?cljs.core.conj:cljs.core.disj);
return (fexpr__44161.cljs$core$IFn$_invoke$arity$2 ? fexpr__44161.cljs$core$IFn$_invoke$arity$2(failed,k) : fexpr__44161.call(null,failed,k));
})()], 0));
}
});
hyperfiddle.electric.impl.for$.values = (function hyperfiddle$electric$impl$for$values(p__44169){
var map__44170 = p__44169;
var map__44170__$1 = cljs.core.__destructure_map(map__44170);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44170__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44170__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44170__$1,new cljs.core.Keyword(null,"failed","failed",-1397425762));
var temp__5806__auto__ = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(index,failed)));
if((temp__5806__auto__ == null)){
return vals;
} else {
var vec__44173 = temp__5806__auto__;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44173,(0),null);
return (vals.cljs$core$IFn$_invoke$arity$1 ? vals.cljs$core$IFn$_invoke$arity$1(i) : vals.call(null,i));
}
});
hyperfiddle.electric.impl.for$.seq_patch = (function hyperfiddle$electric$impl$for$seq_patch(var_args){
var G__44183 = arguments.length;
switch (G__44183) {
case 0:
return hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vals","vals",768058733),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"failed","failed",-1397425762),cljs.core.PersistentHashSet.EMPTY], null);
}));

(hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$1 = (function (r){
return r;
}));

(hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$2 = (function (r,diff){
return cljs.core.reduce_kv(hyperfiddle.electric.impl.for$.apply_change,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.for$.apply_cycle,r,cljs.core.get.cljs$core$IFn$_invoke$arity$2(diff,null)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(diff,null));
}));

(hyperfiddle.electric.impl.for$.seq_patch.cljs$lang$maxFixedArity = 2);

/**
 * 
 * Given a function and a continuous flow of collections, returns a continuous flow of vectors of the same size as input
 * collection, where values are produced by the continuous flow returned by the function when called with the continuous
 * flow of values matching the identity provided by key function, defaulting to identity.
 */
hyperfiddle.electric.impl.for$.map_by = (function hyperfiddle$electric$impl$for$map_by(var_args){
var G__44193 = arguments.length;
switch (G__44193) {
case 3:
return hyperfiddle.electric.impl.for$.map_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.impl.for$.map_by.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.for$.map_by.cljs$core$IFn$_invoke$arity$3 = (function (tier,f,_GT_xs){
return hyperfiddle.electric.impl.for$.map_by.cljs$core$IFn$_invoke$arity$4(tier,cljs.core.identity,f,_GT_xs);
}));

(hyperfiddle.electric.impl.for$.map_by.cljs$core$IFn$_invoke$arity$4 = (function (tier,k,f,_GT_xs){
return missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.for$.values,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missionary.core.reductions.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.for$.seq_patch,hyperfiddle.electric.impl.gather.gather(cljs.core.merge,missionary.core.sample((function (p__44195){
var vec__44196 = p__44195;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44196,(0),null);
var _GT_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44196,(1),null);
var G__44200 = id;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__44200)){
return missionary.core.sample(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,id),missionary.core.relieve(cljs.core.into,missionary.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.val),hyperfiddle.electric.impl.for$.insert_before(tier),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.vector),_GT_x], 0))));
} else {
return missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.runtime.with$(tier,(function (){var G__44202 = missionary.core.relieve(cljs.core.PersistentArrayMap.EMPTY,missionary.core.eduction.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.val),_GT_x));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44202) : f.call(null,G__44202));
})())], 0));

}
}),missionary.core.group_by(cljs.core.key,missionary.core.eduction.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.for$.seq_diff(k),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.for$.entry),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_GT_xs], 0))))))], 0));
}));

(hyperfiddle.electric.impl.for$.map_by.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=hyperfiddle.electric.impl.for.js.map
