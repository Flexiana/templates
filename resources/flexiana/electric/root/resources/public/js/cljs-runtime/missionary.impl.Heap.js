goog.provide('missionary.impl.Heap');
missionary.impl.Heap.create = (function missionary$impl$Heap$create(cap){
var G__40118 = (new Array((cap + (1))));
(G__40118[(0)] = (0));

return G__40118;
});
missionary.impl.Heap.size = (function missionary$impl$Heap$size(heap){
return (heap[(0)]);
});
missionary.impl.Heap.enqueue = (function missionary$impl$Heap$enqueue(heap,i){
var j = ((heap[(0)]) + (1));
(heap[(0)] = j);

(heap[j] = i);

var j__$1 = j;
while(true){
if(((1) === j__$1)){
return null;
} else {
var p = (j__$1 >> (1));
var x = (heap[j__$1]);
var y = (heap[p]);
if((y < x)){
return null;
} else {
(heap[p] = x);

(heap[j__$1] = y);

var G__40167 = p;
j__$1 = G__40167;
continue;
}
}
break;
}
});
missionary.impl.Heap.dequeue = (function missionary$impl$Heap$dequeue(heap){
var s = (heap[(0)]);
var i = (heap[(1)]);
(heap[(0)] = (s - (1)));

(heap[(1)] = (heap[s]));

var j_40168 = (1);
while(true){
var l_40169 = (j_40168 << (1));
if((l_40169 < s)){
var x_40170 = (heap[j_40168]);
var y_40171 = (heap[l_40169]);
var r_40172 = (l_40169 + (1));
if((r_40172 < s)){
var z_40173 = (heap[r_40172]);
if((y_40171 < z_40173)){
if((z_40173 < x_40170)){
(heap[r_40172] = x_40170);

(heap[j_40168] = z_40173);

var G__40174 = r_40172;
j_40168 = G__40174;
continue;
} else {
}
} else {
if((y_40171 < x_40170)){
(heap[l_40169] = x_40170);

(heap[j_40168] = y_40171);

var G__40175 = l_40169;
j_40168 = G__40175;
continue;
} else {
}
}
} else {
if((y_40171 < x_40170)){
(heap[l_40169] = x_40170);

(heap[j_40168] = y_40171);

var G__40176 = l_40169;
j_40168 = G__40176;
continue;
} else {
}
}
} else {
}
break;
}

return i;
});

//# sourceMappingURL=missionary.impl.Heap.js.map
