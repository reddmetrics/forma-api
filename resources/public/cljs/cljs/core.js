goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____2435 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2435))
{return or__3548__auto____2435;
} else
{var or__3548__auto____2436 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2436))
{return or__3548__auto____2436;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2437 = coll;

if(cljs.core.truth_(and__3546__auto____2437))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2437;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2438 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2438))
{return or__3548__auto____2438;
} else
{var or__3548__auto____2439 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2439))
{return or__3548__auto____2439;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2440 = coll;

if(cljs.core.truth_(and__3546__auto____2440))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2440;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2441 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2441))
{return or__3548__auto____2441;
} else
{var or__3548__auto____2442 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2442))
{return or__3548__auto____2442;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2443 = coll;

if(cljs.core.truth_(and__3546__auto____2443))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2443;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2444 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2444))
{return or__3548__auto____2444;
} else
{var or__3548__auto____2445 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2445))
{return or__3548__auto____2445;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2452 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2446 = coll;

if(cljs.core.truth_(and__3546__auto____2446))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2446;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2447 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2447))
{return or__3548__auto____2447;
} else
{var or__3548__auto____2448 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2448))
{return or__3548__auto____2448;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2453 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2449 = coll;

if(cljs.core.truth_(and__3546__auto____2449))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2449;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2450 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2450))
{return or__3548__auto____2450;
} else
{var or__3548__auto____2451 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2451))
{return or__3548__auto____2451;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2452.call(this,coll,n);
case  3 :
return _nth__2453.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2455 = coll;

if(cljs.core.truth_(and__3546__auto____2455))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2455;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2456 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2456))
{return or__3548__auto____2456;
} else
{var or__3548__auto____2457 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2457))
{return or__3548__auto____2457;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2458 = coll;

if(cljs.core.truth_(and__3546__auto____2458))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2458;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2459 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2459))
{return or__3548__auto____2459;
} else
{var or__3548__auto____2460 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2460))
{return or__3548__auto____2460;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2467 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2461 = o;

if(cljs.core.truth_(and__3546__auto____2461))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2461;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2462 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2462))
{return or__3548__auto____2462;
} else
{var or__3548__auto____2463 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2463))
{return or__3548__auto____2463;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2468 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2464 = o;

if(cljs.core.truth_(and__3546__auto____2464))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2464;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2465 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2465))
{return or__3548__auto____2465;
} else
{var or__3548__auto____2466 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2466))
{return or__3548__auto____2466;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2467.call(this,o,k);
case  3 :
return _lookup__2468.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2470 = coll;

if(cljs.core.truth_(and__3546__auto____2470))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2470;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2471 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2471))
{return or__3548__auto____2471;
} else
{var or__3548__auto____2472 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2472))
{return or__3548__auto____2472;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2473 = coll;

if(cljs.core.truth_(and__3546__auto____2473))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2473;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2474 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2474))
{return or__3548__auto____2474;
} else
{var or__3548__auto____2475 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2475))
{return or__3548__auto____2475;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2476 = coll;

if(cljs.core.truth_(and__3546__auto____2476))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2476;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2477 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2477))
{return or__3548__auto____2477;
} else
{var or__3548__auto____2478 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2478))
{return or__3548__auto____2478;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2479 = coll;

if(cljs.core.truth_(and__3546__auto____2479))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2479;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2480 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2480))
{return or__3548__auto____2480;
} else
{var or__3548__auto____2481 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2481))
{return or__3548__auto____2481;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2482 = coll;

if(cljs.core.truth_(and__3546__auto____2482))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2482;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2483 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2483))
{return or__3548__auto____2483;
} else
{var or__3548__auto____2484 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2484))
{return or__3548__auto____2484;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2485 = coll;

if(cljs.core.truth_(and__3546__auto____2485))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2485;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2486 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2486))
{return or__3548__auto____2486;
} else
{var or__3548__auto____2487 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2487))
{return or__3548__auto____2487;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2488 = coll;

if(cljs.core.truth_(and__3546__auto____2488))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2488;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2489 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2489))
{return or__3548__auto____2489;
} else
{var or__3548__auto____2490 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2490))
{return or__3548__auto____2490;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2491 = o;

if(cljs.core.truth_(and__3546__auto____2491))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2491;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2492 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2492))
{return or__3548__auto____2492;
} else
{var or__3548__auto____2493 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2493))
{return or__3548__auto____2493;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2494 = o;

if(cljs.core.truth_(and__3546__auto____2494))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2494;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2495 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2495))
{return or__3548__auto____2495;
} else
{var or__3548__auto____2496 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2496))
{return or__3548__auto____2496;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2497 = o;

if(cljs.core.truth_(and__3546__auto____2497))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2497;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2498 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2498))
{return or__3548__auto____2498;
} else
{var or__3548__auto____2499 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2499))
{return or__3548__auto____2499;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2500 = o;

if(cljs.core.truth_(and__3546__auto____2500))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2500;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2501 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2501))
{return or__3548__auto____2501;
} else
{var or__3548__auto____2502 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2502))
{return or__3548__auto____2502;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2509 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2503 = coll;

if(cljs.core.truth_(and__3546__auto____2503))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2503;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2504 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2504))
{return or__3548__auto____2504;
} else
{var or__3548__auto____2505 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2505))
{return or__3548__auto____2505;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2510 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2506 = coll;

if(cljs.core.truth_(and__3546__auto____2506))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2506;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2507 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2507))
{return or__3548__auto____2507;
} else
{var or__3548__auto____2508 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2508))
{return or__3548__auto____2508;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2509.call(this,coll,f);
case  3 :
return _reduce__2510.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2512 = o;

if(cljs.core.truth_(and__3546__auto____2512))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2512;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2513 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2513))
{return or__3548__auto____2513;
} else
{var or__3548__auto____2514 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2514))
{return or__3548__auto____2514;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2515 = o;

if(cljs.core.truth_(and__3546__auto____2515))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2515;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2516 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2516))
{return or__3548__auto____2516;
} else
{var or__3548__auto____2517 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2517))
{return or__3548__auto____2517;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2518 = o;

if(cljs.core.truth_(and__3546__auto____2518))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2518;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2519 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2519))
{return or__3548__auto____2519;
} else
{var or__3548__auto____2520 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2520))
{return or__3548__auto____2520;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____2521 = o;

if(cljs.core.truth_(and__3546__auto____2521))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2521;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2522 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2522))
{return or__3548__auto____2522;
} else
{var or__3548__auto____2523 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2523))
{return or__3548__auto____2523;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2524 = d;

if(cljs.core.truth_(and__3546__auto____2524))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2524;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2525 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2525))
{return or__3548__auto____2525;
} else
{var or__3548__auto____2526 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2526))
{return or__3548__auto____2526;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2527 = this$;

if(cljs.core.truth_(and__3546__auto____2527))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2527;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2528 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2528))
{return or__3548__auto____2528;
} else
{var or__3548__auto____2529 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2529))
{return or__3548__auto____2529;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2530 = this$;

if(cljs.core.truth_(and__3546__auto____2530))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2530;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2531 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2531))
{return or__3548__auto____2531;
} else
{var or__3548__auto____2532 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2532))
{return or__3548__auto____2532;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2533 = this$;

if(cljs.core.truth_(and__3546__auto____2533))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2533;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2534 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2534))
{return or__3548__auto____2534;
} else
{var or__3548__auto____2535 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2535))
{return or__3548__auto____2535;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2536 = null;
var G__2536__2537 = (function (o,k){
return null;
});
var G__2536__2538 = (function (o,k,not_found){
return not_found;
});
G__2536 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2536__2537.call(this,o,k);
case  3 :
return G__2536__2538.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2536;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2540 = null;
var G__2540__2541 = (function (_,f){
return f.call(null);
});
var G__2540__2542 = (function (_,f,start){
return start;
});
G__2540 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2540__2541.call(this,_,f);
case  3 :
return G__2540__2542.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2540;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2544 = null;
var G__2544__2545 = (function (_,n){
return null;
});
var G__2544__2546 = (function (_,n,not_found){
return not_found;
});
G__2544 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2544__2545.call(this,_,n);
case  3 :
return G__2544__2546.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2544;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2554 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2548 = cljs.core._nth.call(null,cicoll,0);
var n__2549 = 1;

while(true){
if(cljs.core.truth_((n__2549 < cljs.core._count.call(null,cicoll))))
{{
var G__2558 = f.call(null,val__2548,cljs.core._nth.call(null,cicoll,n__2549));
var G__2559 = (n__2549 + 1);
val__2548 = G__2558;
n__2549 = G__2559;
continue;
}
} else
{return val__2548;
}
break;
}
}
});
var ci_reduce__2555 = (function (cicoll,f,val){
var val__2550 = val;
var n__2551 = 0;

while(true){
if(cljs.core.truth_((n__2551 < cljs.core._count.call(null,cicoll))))
{{
var G__2560 = f.call(null,val__2550,cljs.core._nth.call(null,cicoll,n__2551));
var G__2561 = (n__2551 + 1);
val__2550 = G__2560;
n__2551 = G__2561;
continue;
}
} else
{return val__2550;
}
break;
}
});
var ci_reduce__2556 = (function (cicoll,f,val,idx){
var val__2552 = val;
var n__2553 = idx;

while(true){
if(cljs.core.truth_((n__2553 < cljs.core._count.call(null,cicoll))))
{{
var G__2562 = f.call(null,val__2552,cljs.core._nth.call(null,cicoll,n__2553));
var G__2563 = (n__2553 + 1);
val__2552 = G__2562;
n__2553 = G__2563;
continue;
}
} else
{return val__2552;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2554.call(this,cicoll,f);
case  3 :
return ci_reduce__2555.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2556.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2564 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2577 = null;
var G__2577__2578 = (function (coll,f){
var this__2565 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2565.a[this__2565.i]),(this__2565.i + 1));
});
var G__2577__2579 = (function (coll,f,start){
var this__2566 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2566.i);
});
G__2577 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2577__2578.call(this,coll,f);
case  3 :
return G__2577__2579.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2577;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2567 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2568 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2581 = null;
var G__2581__2582 = (function (coll,n){
var this__2569 = this;
var i__2570 = (n + this__2569.i);

if(cljs.core.truth_((i__2570 < this__2569.a.length)))
{return (this__2569.a[i__2570]);
} else
{return null;
}
});
var G__2581__2583 = (function (coll,n,not_found){
var this__2571 = this;
var i__2572 = (n + this__2571.i);

if(cljs.core.truth_((i__2572 < this__2571.a.length)))
{return (this__2571.a[i__2572]);
} else
{return not_found;
}
});
G__2581 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2581__2582.call(this,coll,n);
case  3 :
return G__2581__2583.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2581;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2573 = this;
return (this__2573.a.length - this__2573.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2574 = this;
return (this__2574.a[this__2574.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2575 = this;
if(cljs.core.truth_(((this__2575.i + 1) < this__2575.a.length)))
{return (new cljs.core.IndexedSeq(this__2575.a,(this__2575.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2576 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2585 = null;
var G__2585__2586 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2585__2587 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2585 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2585__2586.call(this,array,f);
case  3 :
return G__2585__2587.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2585;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2589 = null;
var G__2589__2590 = (function (array,k){
return (array[k]);
});
var G__2589__2591 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2589 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2589__2590.call(this,array,k);
case  3 :
return G__2589__2591.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2589;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2593 = null;
var G__2593__2594 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2593__2595 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2593 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2593__2594.call(this,array,n);
case  3 :
return G__2593__2595.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2593;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____2597 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2597))
{var s__2598 = temp__3698__auto____2597;

return cljs.core._first.call(null,s__2598);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2599 = cljs.core.next.call(null,s);
s = G__2599;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2600 = cljs.core.seq.call(null,x);
var n__2601 = 0;

while(true){
if(cljs.core.truth_(s__2600))
{{
var G__2602 = cljs.core.next.call(null,s__2600);
var G__2603 = (n__2601 + 1);
s__2600 = G__2602;
n__2601 = G__2603;
continue;
}
} else
{return n__2601;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2604 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2605 = (function() { 
var G__2607__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2608 = conj.call(null,coll,x);
var G__2609 = cljs.core.first.call(null,xs);
var G__2610 = cljs.core.next.call(null,xs);
coll = G__2608;
x = G__2609;
xs = G__2610;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2607 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2607__delegate.call(this, coll, x, xs);
};
G__2607.cljs$lang$maxFixedArity = 2;
G__2607.cljs$lang$applyTo = (function (arglist__2611){
var coll = cljs.core.first(arglist__2611);
var x = cljs.core.first(cljs.core.next(arglist__2611));
var xs = cljs.core.rest(cljs.core.next(arglist__2611));
return G__2607__delegate.call(this, coll, x, xs);
});
return G__2607;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2604.call(this,coll,x);
default:
return conj__2605.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2605.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2612 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__2613 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2612.call(this,coll,n);
case  3 :
return nth__2613.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2615 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2616 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2615.call(this,o,k);
case  3 :
return get__2616.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2619 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2620 = (function() { 
var G__2622__delegate = function (coll,k,v,kvs){
while(true){
var ret__2618 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2623 = ret__2618;
var G__2624 = cljs.core.first.call(null,kvs);
var G__2625 = cljs.core.second.call(null,kvs);
var G__2626 = cljs.core.nnext.call(null,kvs);
coll = G__2623;
k = G__2624;
v = G__2625;
kvs = G__2626;
continue;
}
} else
{return ret__2618;
}
break;
}
};
var G__2622 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2622__delegate.call(this, coll, k, v, kvs);
};
G__2622.cljs$lang$maxFixedArity = 3;
G__2622.cljs$lang$applyTo = (function (arglist__2627){
var coll = cljs.core.first(arglist__2627);
var k = cljs.core.first(cljs.core.next(arglist__2627));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2627)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2627)));
return G__2622__delegate.call(this, coll, k, v, kvs);
});
return G__2622;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2619.call(this,coll,k,v);
default:
return assoc__2620.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2620.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2629 = (function (coll){
return coll;
});
var dissoc__2630 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2631 = (function() { 
var G__2633__delegate = function (coll,k,ks){
while(true){
var ret__2628 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2634 = ret__2628;
var G__2635 = cljs.core.first.call(null,ks);
var G__2636 = cljs.core.next.call(null,ks);
coll = G__2634;
k = G__2635;
ks = G__2636;
continue;
}
} else
{return ret__2628;
}
break;
}
};
var G__2633 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2633__delegate.call(this, coll, k, ks);
};
G__2633.cljs$lang$maxFixedArity = 2;
G__2633.cljs$lang$applyTo = (function (arglist__2637){
var coll = cljs.core.first(arglist__2637);
var k = cljs.core.first(cljs.core.next(arglist__2637));
var ks = cljs.core.rest(cljs.core.next(arglist__2637));
return G__2633__delegate.call(this, coll, k, ks);
});
return G__2633;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2629.call(this,coll);
case  2 :
return dissoc__2630.call(this,coll,k);
default:
return dissoc__2631.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2631.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__321__auto____2638 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2639 = x__321__auto____2638;

if(cljs.core.truth_(and__3546__auto____2639))
{var and__3546__auto____2640 = x__321__auto____2638.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____2640))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____2638));
} else
{return and__3546__auto____2640;
}
} else
{return and__3546__auto____2639;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__321__auto____2638);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2642 = (function (coll){
return coll;
});
var disj__2643 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2644 = (function() { 
var G__2646__delegate = function (coll,k,ks){
while(true){
var ret__2641 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2647 = ret__2641;
var G__2648 = cljs.core.first.call(null,ks);
var G__2649 = cljs.core.next.call(null,ks);
coll = G__2647;
k = G__2648;
ks = G__2649;
continue;
}
} else
{return ret__2641;
}
break;
}
};
var G__2646 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2646__delegate.call(this, coll, k, ks);
};
G__2646.cljs$lang$maxFixedArity = 2;
G__2646.cljs$lang$applyTo = (function (arglist__2650){
var coll = cljs.core.first(arglist__2650);
var k = cljs.core.first(cljs.core.next(arglist__2650));
var ks = cljs.core.rest(cljs.core.next(arglist__2650));
return G__2646__delegate.call(this, coll, k, ks);
});
return G__2646;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2642.call(this,coll);
case  2 :
return disj__2643.call(this,coll,k);
default:
return disj__2644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2644.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__321__auto____2651 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2652 = x__321__auto____2651;

if(cljs.core.truth_(and__3546__auto____2652))
{var and__3546__auto____2653 = x__321__auto____2651.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____2653))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____2651));
} else
{return and__3546__auto____2653;
}
} else
{return and__3546__auto____2652;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__321__auto____2651);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__321__auto____2654 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2655 = x__321__auto____2654;

if(cljs.core.truth_(and__3546__auto____2655))
{var and__3546__auto____2656 = x__321__auto____2654.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____2656))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____2654));
} else
{return and__3546__auto____2656;
}
} else
{return and__3546__auto____2655;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__321__auto____2654);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__321__auto____2657 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2658 = x__321__auto____2657;

if(cljs.core.truth_(and__3546__auto____2658))
{var and__3546__auto____2659 = x__321__auto____2657.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____2659))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____2657));
} else
{return and__3546__auto____2659;
}
} else
{return and__3546__auto____2658;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__321__auto____2657);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__321__auto____2660 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2661 = x__321__auto____2660;

if(cljs.core.truth_(and__3546__auto____2661))
{var and__3546__auto____2662 = x__321__auto____2660.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____2662))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____2660));
} else
{return and__3546__auto____2662;
}
} else
{return and__3546__auto____2661;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__321__auto____2660);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__321__auto____2663 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2664 = x__321__auto____2663;

if(cljs.core.truth_(and__3546__auto____2664))
{var and__3546__auto____2665 = x__321__auto____2663.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____2665))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____2663));
} else
{return and__3546__auto____2665;
}
} else
{return and__3546__auto____2664;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__321__auto____2663);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__321__auto____2666 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2667 = x__321__auto____2666;

if(cljs.core.truth_(and__3546__auto____2667))
{var and__3546__auto____2668 = x__321__auto____2666.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____2668))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____2666));
} else
{return and__3546__auto____2668;
}
} else
{return and__3546__auto____2667;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__321__auto____2666);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__321__auto____2669 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2670 = x__321__auto____2669;

if(cljs.core.truth_(and__3546__auto____2670))
{var and__3546__auto____2671 = x__321__auto____2669.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____2671))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____2669));
} else
{return and__3546__auto____2671;
}
} else
{return and__3546__auto____2670;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__321__auto____2669);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2672 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2672.push(key);
}));
return keys__2672;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__321__auto____2673 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2674 = x__321__auto____2673;

if(cljs.core.truth_(and__3546__auto____2674))
{var and__3546__auto____2675 = x__321__auto____2673.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____2675))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____2673));
} else
{return and__3546__auto____2675;
}
} else
{return and__3546__auto____2674;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__321__auto____2673);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____2676 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2676))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2677 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2677))
{return or__3548__auto____2677;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2676;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2678 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2678))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2678;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2679 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2679))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2679;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____2680 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2680))
{return (n == n.toFixed());
} else
{return and__3546__auto____2680;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2681 = coll;

if(cljs.core.truth_(and__3546__auto____2681))
{var and__3546__auto____2682 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2682))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2682;
}
} else
{return and__3546__auto____2681;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2687 = (function (x){
return true;
});
var distinct_QMARK___2688 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2689 = (function() { 
var G__2691__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2683 = cljs.core.set([y,x]);
var xs__2684 = more;

while(true){
var x__2685 = cljs.core.first.call(null,xs__2684);
var etc__2686 = cljs.core.next.call(null,xs__2684);

if(cljs.core.truth_(xs__2684))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2683,x__2685)))
{return false;
} else
{{
var G__2692 = cljs.core.conj.call(null,s__2683,x__2685);
var G__2693 = etc__2686;
s__2683 = G__2692;
xs__2684 = G__2693;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2691 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2691__delegate.call(this, x, y, more);
};
G__2691.cljs$lang$maxFixedArity = 2;
G__2691.cljs$lang$applyTo = (function (arglist__2694){
var x = cljs.core.first(arglist__2694);
var y = cljs.core.first(cljs.core.next(arglist__2694));
var more = cljs.core.rest(cljs.core.next(arglist__2694));
return G__2691__delegate.call(this, x, y, more);
});
return G__2691;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2687.call(this,x);
case  2 :
return distinct_QMARK___2688.call(this,x,y);
default:
return distinct_QMARK___2689.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2689.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2695 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2695)))
{return r__2695;
} else
{if(cljs.core.truth_(r__2695))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2697 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2698 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2696 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2696,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2696);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2697.call(this,comp);
case  2 :
return sort__2698.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2700 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2701 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2700.call(this,keyfn,comp);
case  3 :
return sort_by__2701.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2703 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2704 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2703.call(this,f,val);
case  3 :
return reduce__2704.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2710 = (function (f,coll){
var temp__3695__auto____2706 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2706))
{var s__2707 = temp__3695__auto____2706;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2707),cljs.core.next.call(null,s__2707));
} else
{return f.call(null);
}
});
var seq_reduce__2711 = (function (f,val,coll){
var val__2708 = val;
var coll__2709 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2709))
{{
var G__2713 = f.call(null,val__2708,cljs.core.first.call(null,coll__2709));
var G__2714 = cljs.core.next.call(null,coll__2709);
val__2708 = G__2713;
coll__2709 = G__2714;
continue;
}
} else
{return val__2708;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2710.call(this,f,val);
case  3 :
return seq_reduce__2711.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2715 = null;
var G__2715__2716 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2715__2717 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2715 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2715__2716.call(this,coll,f);
case  3 :
return G__2715__2717.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2715;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2719 = (function (){
return 0;
});
var _PLUS___2720 = (function (x){
return x;
});
var _PLUS___2721 = (function (x,y){
return (x + y);
});
var _PLUS___2722 = (function() { 
var G__2724__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2724 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2724__delegate.call(this, x, y, more);
};
G__2724.cljs$lang$maxFixedArity = 2;
G__2724.cljs$lang$applyTo = (function (arglist__2725){
var x = cljs.core.first(arglist__2725);
var y = cljs.core.first(cljs.core.next(arglist__2725));
var more = cljs.core.rest(cljs.core.next(arglist__2725));
return G__2724__delegate.call(this, x, y, more);
});
return G__2724;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2719.call(this);
case  1 :
return _PLUS___2720.call(this,x);
case  2 :
return _PLUS___2721.call(this,x,y);
default:
return _PLUS___2722.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2722.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2726 = (function (x){
return (- x);
});
var ___2727 = (function (x,y){
return (x - y);
});
var ___2728 = (function() { 
var G__2730__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2730 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2730__delegate.call(this, x, y, more);
};
G__2730.cljs$lang$maxFixedArity = 2;
G__2730.cljs$lang$applyTo = (function (arglist__2731){
var x = cljs.core.first(arglist__2731);
var y = cljs.core.first(cljs.core.next(arglist__2731));
var more = cljs.core.rest(cljs.core.next(arglist__2731));
return G__2730__delegate.call(this, x, y, more);
});
return G__2730;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2726.call(this,x);
case  2 :
return ___2727.call(this,x,y);
default:
return ___2728.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2728.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2732 = (function (){
return 1;
});
var _STAR___2733 = (function (x){
return x;
});
var _STAR___2734 = (function (x,y){
return (x * y);
});
var _STAR___2735 = (function() { 
var G__2737__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2737 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2737__delegate.call(this, x, y, more);
};
G__2737.cljs$lang$maxFixedArity = 2;
G__2737.cljs$lang$applyTo = (function (arglist__2738){
var x = cljs.core.first(arglist__2738);
var y = cljs.core.first(cljs.core.next(arglist__2738));
var more = cljs.core.rest(cljs.core.next(arglist__2738));
return G__2737__delegate.call(this, x, y, more);
});
return G__2737;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2732.call(this);
case  1 :
return _STAR___2733.call(this,x);
case  2 :
return _STAR___2734.call(this,x,y);
default:
return _STAR___2735.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2735.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2739 = (function (x){
return (1 / x);
});
var _SLASH___2740 = (function (x,y){
return (x / y);
});
var _SLASH___2741 = (function() { 
var G__2743__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2743 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2743__delegate.call(this, x, y, more);
};
G__2743.cljs$lang$maxFixedArity = 2;
G__2743.cljs$lang$applyTo = (function (arglist__2744){
var x = cljs.core.first(arglist__2744);
var y = cljs.core.first(cljs.core.next(arglist__2744));
var more = cljs.core.rest(cljs.core.next(arglist__2744));
return G__2743__delegate.call(this, x, y, more);
});
return G__2743;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2739.call(this,x);
case  2 :
return _SLASH___2740.call(this,x,y);
default:
return _SLASH___2741.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2741.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2745 = (function (x){
return true;
});
var _LT___2746 = (function (x,y){
return (x < y);
});
var _LT___2747 = (function() { 
var G__2749__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2750 = y;
var G__2751 = cljs.core.first.call(null,more);
var G__2752 = cljs.core.next.call(null,more);
x = G__2750;
y = G__2751;
more = G__2752;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2749 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2749__delegate.call(this, x, y, more);
};
G__2749.cljs$lang$maxFixedArity = 2;
G__2749.cljs$lang$applyTo = (function (arglist__2753){
var x = cljs.core.first(arglist__2753);
var y = cljs.core.first(cljs.core.next(arglist__2753));
var more = cljs.core.rest(cljs.core.next(arglist__2753));
return G__2749__delegate.call(this, x, y, more);
});
return G__2749;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2745.call(this,x);
case  2 :
return _LT___2746.call(this,x,y);
default:
return _LT___2747.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2747.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2754 = (function (x){
return true;
});
var _LT__EQ___2755 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2756 = (function() { 
var G__2758__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2759 = y;
var G__2760 = cljs.core.first.call(null,more);
var G__2761 = cljs.core.next.call(null,more);
x = G__2759;
y = G__2760;
more = G__2761;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2758 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2758__delegate.call(this, x, y, more);
};
G__2758.cljs$lang$maxFixedArity = 2;
G__2758.cljs$lang$applyTo = (function (arglist__2762){
var x = cljs.core.first(arglist__2762);
var y = cljs.core.first(cljs.core.next(arglist__2762));
var more = cljs.core.rest(cljs.core.next(arglist__2762));
return G__2758__delegate.call(this, x, y, more);
});
return G__2758;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2754.call(this,x);
case  2 :
return _LT__EQ___2755.call(this,x,y);
default:
return _LT__EQ___2756.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2756.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2763 = (function (x){
return true;
});
var _GT___2764 = (function (x,y){
return (x > y);
});
var _GT___2765 = (function() { 
var G__2767__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2768 = y;
var G__2769 = cljs.core.first.call(null,more);
var G__2770 = cljs.core.next.call(null,more);
x = G__2768;
y = G__2769;
more = G__2770;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2767 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2767__delegate.call(this, x, y, more);
};
G__2767.cljs$lang$maxFixedArity = 2;
G__2767.cljs$lang$applyTo = (function (arglist__2771){
var x = cljs.core.first(arglist__2771);
var y = cljs.core.first(cljs.core.next(arglist__2771));
var more = cljs.core.rest(cljs.core.next(arglist__2771));
return G__2767__delegate.call(this, x, y, more);
});
return G__2767;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2763.call(this,x);
case  2 :
return _GT___2764.call(this,x,y);
default:
return _GT___2765.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2765.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2772 = (function (x){
return true;
});
var _GT__EQ___2773 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2774 = (function() { 
var G__2776__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2777 = y;
var G__2778 = cljs.core.first.call(null,more);
var G__2779 = cljs.core.next.call(null,more);
x = G__2777;
y = G__2778;
more = G__2779;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2776 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2776__delegate.call(this, x, y, more);
};
G__2776.cljs$lang$maxFixedArity = 2;
G__2776.cljs$lang$applyTo = (function (arglist__2780){
var x = cljs.core.first(arglist__2780);
var y = cljs.core.first(cljs.core.next(arglist__2780));
var more = cljs.core.rest(cljs.core.next(arglist__2780));
return G__2776__delegate.call(this, x, y, more);
});
return G__2776;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2772.call(this,x);
case  2 :
return _GT__EQ___2773.call(this,x,y);
default:
return _GT__EQ___2774.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2774.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2781 = (function (x){
return x;
});
var max__2782 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2783 = (function() { 
var G__2785__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2785 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2785__delegate.call(this, x, y, more);
};
G__2785.cljs$lang$maxFixedArity = 2;
G__2785.cljs$lang$applyTo = (function (arglist__2786){
var x = cljs.core.first(arglist__2786);
var y = cljs.core.first(cljs.core.next(arglist__2786));
var more = cljs.core.rest(cljs.core.next(arglist__2786));
return G__2785__delegate.call(this, x, y, more);
});
return G__2785;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2781.call(this,x);
case  2 :
return max__2782.call(this,x,y);
default:
return max__2783.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2783.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2787 = (function (x){
return x;
});
var min__2788 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2789 = (function() { 
var G__2791__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2791 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2791__delegate.call(this, x, y, more);
};
G__2791.cljs$lang$maxFixedArity = 2;
G__2791.cljs$lang$applyTo = (function (arglist__2792){
var x = cljs.core.first(arglist__2792);
var y = cljs.core.first(cljs.core.next(arglist__2792));
var more = cljs.core.rest(cljs.core.next(arglist__2792));
return G__2791__delegate.call(this, x, y, more);
});
return G__2791;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2787.call(this,x);
case  2 :
return min__2788.call(this,x,y);
default:
return min__2789.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2789.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2793 = (n % d);

return cljs.core.fix.call(null,((n - rem__2793) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2794 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2794));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2795 = (function (){
return Math.random.call(null);
});
var rand__2796 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2795.call(this);
case  1 :
return rand__2796.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2798 = (function (x){
return true;
});
var _EQ__EQ___2799 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2800 = (function() { 
var G__2802__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2803 = y;
var G__2804 = cljs.core.first.call(null,more);
var G__2805 = cljs.core.next.call(null,more);
x = G__2803;
y = G__2804;
more = G__2805;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2802 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2802__delegate.call(this, x, y, more);
};
G__2802.cljs$lang$maxFixedArity = 2;
G__2802.cljs$lang$applyTo = (function (arglist__2806){
var x = cljs.core.first(arglist__2806);
var y = cljs.core.first(cljs.core.next(arglist__2806));
var more = cljs.core.rest(cljs.core.next(arglist__2806));
return G__2802__delegate.call(this, x, y, more);
});
return G__2802;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2798.call(this,x);
case  2 :
return _EQ__EQ___2799.call(this,x,y);
default:
return _EQ__EQ___2800.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2800.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (0 < n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (0 === n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2807 = n;
var xs__2808 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2809 = xs__2808;

if(cljs.core.truth_(and__3546__auto____2809))
{return (n__2807 > 0);
} else
{return and__3546__auto____2809;
}
})()))
{{
var G__2810 = (n__2807 - 1);
var G__2811 = cljs.core.next.call(null,xs__2808);
n__2807 = G__2810;
xs__2808 = G__2811;
continue;
}
} else
{return xs__2808;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2816 = null;
var G__2816__2817 = (function (coll,n){
var temp__3695__auto____2812 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2812))
{var xs__2813 = temp__3695__auto____2812;

return cljs.core.first.call(null,xs__2813);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__2816__2818 = (function (coll,n,not_found){
var temp__3695__auto____2814 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2814))
{var xs__2815 = temp__3695__auto____2814;

return cljs.core.first.call(null,xs__2815);
} else
{return not_found;
}
});
G__2816 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2816__2817.call(this,coll,n);
case  3 :
return G__2816__2818.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2816;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___2820 = (function (){
return "";
});
var str_STAR___2821 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2822 = (function() { 
var G__2824__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2825 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__2826 = cljs.core.next.call(null,more);
sb = G__2825;
more = G__2826;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__2824 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2824__delegate.call(this, x, ys);
};
G__2824.cljs$lang$maxFixedArity = 1;
G__2824.cljs$lang$applyTo = (function (arglist__2827){
var x = cljs.core.first(arglist__2827);
var ys = cljs.core.rest(arglist__2827);
return G__2824__delegate.call(this, x, ys);
});
return G__2824;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___2820.call(this);
case  1 :
return str_STAR___2821.call(this,x);
default:
return str_STAR___2822.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2822.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2828 = (function (){
return "";
});
var str__2829 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2830 = (function() { 
var G__2832__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__2832 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2832__delegate.call(this, x, ys);
};
G__2832.cljs$lang$maxFixedArity = 1;
G__2832.cljs$lang$applyTo = (function (arglist__2833){
var x = cljs.core.first(arglist__2833);
var ys = cljs.core.rest(arglist__2833);
return G__2832__delegate.call(this, x, ys);
});
return G__2832;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2828.call(this);
case  1 :
return str__2829.call(this,x);
default:
return str__2830.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2830.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2834 = (function (s,start){
return s.substring(start);
});
var subs__2835 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2834.call(this,s,start);
case  3 :
return subs__2835.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2837 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__2838 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2837.call(this,ns);
case  2 :
return symbol__2838.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2840 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2841 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2840.call(this,ns);
case  2 :
return keyword__2841.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2843 = cljs.core.seq.call(null,x);
var ys__2844 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2843)))
{return cljs.core.nil_QMARK_.call(null,ys__2844);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2844)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2843),cljs.core.first.call(null,ys__2844))))
{{
var G__2845 = cljs.core.next.call(null,xs__2843);
var G__2846 = cljs.core.next.call(null,ys__2844);
xs__2843 = G__2845;
ys__2844 = G__2846;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2847_SHARP_,p2__2848_SHARP_){
return cljs.core.hash_combine.call(null,p1__2847_SHARP_,cljs.core.hash.call(null,p2__2848_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__2849__2850 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__2849__2850))
{var G__2852__2854 = cljs.core.first.call(null,G__2849__2850);
var vec__2853__2855 = G__2852__2854;
var key_name__2856 = cljs.core.nth.call(null,vec__2853__2855,0,null);
var f__2857 = cljs.core.nth.call(null,vec__2853__2855,1,null);
var G__2849__2858 = G__2849__2850;

var G__2852__2859 = G__2852__2854;
var G__2849__2860 = G__2849__2858;

while(true){
var vec__2861__2862 = G__2852__2859;
var key_name__2863 = cljs.core.nth.call(null,vec__2861__2862,0,null);
var f__2864 = cljs.core.nth.call(null,vec__2861__2862,1,null);
var G__2849__2865 = G__2849__2860;

var str_name__2866 = cljs.core.name.call(null,key_name__2863);

obj[str_name__2866] = f__2864;
var temp__3698__auto____2867 = cljs.core.next.call(null,G__2849__2865);

if(cljs.core.truth_(temp__3698__auto____2867))
{var G__2849__2868 = temp__3698__auto____2867;

{
var G__2869 = cljs.core.first.call(null,G__2849__2868);
var G__2870 = G__2849__2868;
G__2852__2859 = G__2869;
G__2849__2860 = G__2870;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2871 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2872 = this;
return (new cljs.core.List(this__2872.meta,o,coll,(this__2872.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2873 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2874 = this;
return this__2874.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2875 = this;
return this__2875.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2876 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2877 = this;
return this__2877.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2878 = this;
return this__2878.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2879 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2880 = this;
return (new cljs.core.List(meta,this__2880.first,this__2880.rest,this__2880.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2881 = this;
return this__2881.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2882 = this;
return cljs.core.List.EMPTY;
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2883 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2884 = this;
return (new cljs.core.List(this__2884.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2885 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2886 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2887 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2888 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2889 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2890 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2891 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2892 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2893 = this;
return this__2893.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2894 = this;
return coll;
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__2895){
var items = cljs.core.seq( arglist__2895 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2896 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2897 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2898 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2899 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2899.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2900 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2901 = this;
return this__2901.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2902 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2902.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2902.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2903 = this;
return this__2903.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2904 = this;
return (new cljs.core.Cons(meta,this__2904.first,this__2904.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2905 = null;
var G__2905__2906 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2905__2907 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2905 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2905__2906.call(this,string,f);
case  3 :
return G__2905__2907.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2905;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2909 = null;
var G__2909__2910 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2909__2911 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2909 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2909__2910.call(this,string,k);
case  3 :
return G__2909__2911.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2909;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2913 = null;
var G__2913__2914 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2913__2915 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2913 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2913__2914.call(this,string,n);
case  3 :
return G__2913__2915.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2913;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__2917 = null;
var G__2917__2918 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2917__2919 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2917 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2917__2918.call(this,_,coll);
case  3 :
return G__2917__2919.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2917;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2921 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2921;
} else
{lazy_seq.x = x__2921.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2922 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2923 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2924 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2925 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2925.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2926 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2927 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2928 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2929 = this;
return this__2929.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2930 = this;
return (new cljs.core.LazySeq(meta,this__2930.realized,this__2930.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2931 = cljs.core.array.call(null);

var s__2932 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2932)))
{ary__2931.push(cljs.core.first.call(null,s__2932));
{
var G__2933 = cljs.core.next.call(null,s__2932);
s__2932 = G__2933;
continue;
}
} else
{return ary__2931;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2934 = s;
var i__2935 = n;
var sum__2936 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2937 = (i__2935 > 0);

if(cljs.core.truth_(and__3546__auto____2937))
{return cljs.core.seq.call(null,s__2934);
} else
{return and__3546__auto____2937;
}
})()))
{{
var G__2938 = cljs.core.next.call(null,s__2934);
var G__2939 = (i__2935 - 1);
var G__2940 = (sum__2936 + 1);
s__2934 = G__2938;
i__2935 = G__2939;
sum__2936 = G__2940;
continue;
}
} else
{return sum__2936;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2944 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2945 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2946 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2941 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2941))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2941),concat.call(null,cljs.core.rest.call(null,s__2941),y));
} else
{return y;
}
})));
});
var concat__2947 = (function() { 
var G__2949__delegate = function (x,y,zs){
var cat__2943 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2942 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2942))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2942),cat.call(null,cljs.core.rest.call(null,xys__2942),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2943.call(null,concat.call(null,x,y),zs);
};
var G__2949 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2949__delegate.call(this, x, y, zs);
};
G__2949.cljs$lang$maxFixedArity = 2;
G__2949.cljs$lang$applyTo = (function (arglist__2950){
var x = cljs.core.first(arglist__2950);
var y = cljs.core.first(cljs.core.next(arglist__2950));
var zs = cljs.core.rest(cljs.core.next(arglist__2950));
return G__2949__delegate.call(this, x, y, zs);
});
return G__2949;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2944.call(this);
case  1 :
return concat__2945.call(this,x);
case  2 :
return concat__2946.call(this,x,y);
default:
return concat__2947.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2947.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2951 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2952 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2953 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2954 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2955 = (function() { 
var G__2957__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2957 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2957__delegate.call(this, a, b, c, d, more);
};
G__2957.cljs$lang$maxFixedArity = 4;
G__2957.cljs$lang$applyTo = (function (arglist__2958){
var a = cljs.core.first(arglist__2958);
var b = cljs.core.first(cljs.core.next(arglist__2958));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2958)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2958))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2958))));
return G__2957__delegate.call(this, a, b, c, d, more);
});
return G__2957;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2951.call(this,a);
case  2 :
return list_STAR___2952.call(this,a,b);
case  3 :
return list_STAR___2953.call(this,a,b,c);
case  4 :
return list_STAR___2954.call(this,a,b,c,d);
default:
return list_STAR___2955.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2955.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2968 = (function (f,args){
var fixed_arity__2959 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__2959 + 1)) <= fixed_arity__2959)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2969 = (function (f,x,args){
var arglist__2960 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2961 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2960,fixed_arity__2961) <= fixed_arity__2961)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2960));
} else
{return f.cljs$lang$applyTo(arglist__2960);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2960));
}
});
var apply__2970 = (function (f,x,y,args){
var arglist__2962 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2963 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2962,fixed_arity__2963) <= fixed_arity__2963)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2962));
} else
{return f.cljs$lang$applyTo(arglist__2962);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2962));
}
});
var apply__2971 = (function (f,x,y,z,args){
var arglist__2964 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2965 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2964,fixed_arity__2965) <= fixed_arity__2965)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2964));
} else
{return f.cljs$lang$applyTo(arglist__2964);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2964));
}
});
var apply__2972 = (function() { 
var G__2974__delegate = function (f,a,b,c,d,args){
var arglist__2966 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2967 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2966,fixed_arity__2967) <= fixed_arity__2967)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2966));
} else
{return f.cljs$lang$applyTo(arglist__2966);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2966));
}
};
var G__2974 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2974__delegate.call(this, f, a, b, c, d, args);
};
G__2974.cljs$lang$maxFixedArity = 5;
G__2974.cljs$lang$applyTo = (function (arglist__2975){
var f = cljs.core.first(arglist__2975);
var a = cljs.core.first(cljs.core.next(arglist__2975));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2975)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2975))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2975)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2975)))));
return G__2974__delegate.call(this, f, a, b, c, d, args);
});
return G__2974;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2968.call(this,f,a);
case  3 :
return apply__2969.call(this,f,a,b);
case  4 :
return apply__2970.call(this,f,a,b,c);
case  5 :
return apply__2971.call(this,f,a,b,c,d);
default:
return apply__2972.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2972.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__2976){
var obj = cljs.core.first(arglist__2976);
var f = cljs.core.first(cljs.core.next(arglist__2976));
var args = cljs.core.rest(cljs.core.next(arglist__2976));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2977 = (function (x){
return false;
});
var not_EQ___2978 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2979 = (function() { 
var G__2981__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2981 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2981__delegate.call(this, x, y, more);
};
G__2981.cljs$lang$maxFixedArity = 2;
G__2981.cljs$lang$applyTo = (function (arglist__2982){
var x = cljs.core.first(arglist__2982);
var y = cljs.core.first(cljs.core.next(arglist__2982));
var more = cljs.core.rest(cljs.core.next(arglist__2982));
return G__2981__delegate.call(this, x, y, more);
});
return G__2981;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2977.call(this,x);
case  2 :
return not_EQ___2978.call(this,x,y);
default:
return not_EQ___2979.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2979.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2983 = pred;
var G__2984 = cljs.core.next.call(null,coll);
pred = G__2983;
coll = G__2984;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____2985 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____2985))
{return or__3548__auto____2985;
} else
{{
var G__2986 = pred;
var G__2987 = cljs.core.next.call(null,coll);
pred = G__2986;
coll = G__2987;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2988 = null;
var G__2988__2989 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2988__2990 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2988__2991 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2988__2992 = (function() { 
var G__2994__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2994 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2994__delegate.call(this, x, y, zs);
};
G__2994.cljs$lang$maxFixedArity = 2;
G__2994.cljs$lang$applyTo = (function (arglist__2995){
var x = cljs.core.first(arglist__2995);
var y = cljs.core.first(cljs.core.next(arglist__2995));
var zs = cljs.core.rest(cljs.core.next(arglist__2995));
return G__2994__delegate.call(this, x, y, zs);
});
return G__2994;
})()
;
G__2988 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2988__2989.call(this);
case  1 :
return G__2988__2990.call(this,x);
case  2 :
return G__2988__2991.call(this,x,y);
default:
return G__2988__2992.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2988.cljs$lang$maxFixedArity = 2;
G__2988.cljs$lang$applyTo = G__2988__2992.cljs$lang$applyTo;
return G__2988;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2996__delegate = function (args){
return x;
};
var G__2996 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2996__delegate.call(this, args);
};
G__2996.cljs$lang$maxFixedArity = 0;
G__2996.cljs$lang$applyTo = (function (arglist__2997){
var args = cljs.core.seq( arglist__2997 );;
return G__2996__delegate.call(this, args);
});
return G__2996;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__3001 = (function (){
return cljs.core.identity;
});
var comp__3002 = (function (f){
return f;
});
var comp__3003 = (function (f,g){
return (function() {
var G__3007 = null;
var G__3007__3008 = (function (){
return f.call(null,g.call(null));
});
var G__3007__3009 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3007__3010 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3007__3011 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3007__3012 = (function() { 
var G__3014__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3014 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3014__delegate.call(this, x, y, z, args);
};
G__3014.cljs$lang$maxFixedArity = 3;
G__3014.cljs$lang$applyTo = (function (arglist__3015){
var x = cljs.core.first(arglist__3015);
var y = cljs.core.first(cljs.core.next(arglist__3015));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3015)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3015)));
return G__3014__delegate.call(this, x, y, z, args);
});
return G__3014;
})()
;
G__3007 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3007__3008.call(this);
case  1 :
return G__3007__3009.call(this,x);
case  2 :
return G__3007__3010.call(this,x,y);
case  3 :
return G__3007__3011.call(this,x,y,z);
default:
return G__3007__3012.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3007.cljs$lang$maxFixedArity = 3;
G__3007.cljs$lang$applyTo = G__3007__3012.cljs$lang$applyTo;
return G__3007;
})()
});
var comp__3004 = (function (f,g,h){
return (function() {
var G__3016 = null;
var G__3016__3017 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3016__3018 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3016__3019 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3016__3020 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3016__3021 = (function() { 
var G__3023__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3023 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3023__delegate.call(this, x, y, z, args);
};
G__3023.cljs$lang$maxFixedArity = 3;
G__3023.cljs$lang$applyTo = (function (arglist__3024){
var x = cljs.core.first(arglist__3024);
var y = cljs.core.first(cljs.core.next(arglist__3024));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3024)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3024)));
return G__3023__delegate.call(this, x, y, z, args);
});
return G__3023;
})()
;
G__3016 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3016__3017.call(this);
case  1 :
return G__3016__3018.call(this,x);
case  2 :
return G__3016__3019.call(this,x,y);
case  3 :
return G__3016__3020.call(this,x,y,z);
default:
return G__3016__3021.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3016.cljs$lang$maxFixedArity = 3;
G__3016.cljs$lang$applyTo = G__3016__3021.cljs$lang$applyTo;
return G__3016;
})()
});
var comp__3005 = (function() { 
var G__3025__delegate = function (f1,f2,f3,fs){
var fs__2998 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3026__delegate = function (args){
var ret__2999 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2998),args);
var fs__3000 = cljs.core.next.call(null,fs__2998);

while(true){
if(cljs.core.truth_(fs__3000))
{{
var G__3027 = cljs.core.first.call(null,fs__3000).call(null,ret__2999);
var G__3028 = cljs.core.next.call(null,fs__3000);
ret__2999 = G__3027;
fs__3000 = G__3028;
continue;
}
} else
{return ret__2999;
}
break;
}
};
var G__3026 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3026__delegate.call(this, args);
};
G__3026.cljs$lang$maxFixedArity = 0;
G__3026.cljs$lang$applyTo = (function (arglist__3029){
var args = cljs.core.seq( arglist__3029 );;
return G__3026__delegate.call(this, args);
});
return G__3026;
})()
;
};
var G__3025 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3025__delegate.call(this, f1, f2, f3, fs);
};
G__3025.cljs$lang$maxFixedArity = 3;
G__3025.cljs$lang$applyTo = (function (arglist__3030){
var f1 = cljs.core.first(arglist__3030);
var f2 = cljs.core.first(cljs.core.next(arglist__3030));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3030)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3030)));
return G__3025__delegate.call(this, f1, f2, f3, fs);
});
return G__3025;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3001.call(this);
case  1 :
return comp__3002.call(this,f1);
case  2 :
return comp__3003.call(this,f1,f2);
case  3 :
return comp__3004.call(this,f1,f2,f3);
default:
return comp__3005.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3005.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__3031 = (function (f,arg1){
return (function() { 
var G__3036__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3036 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3036__delegate.call(this, args);
};
G__3036.cljs$lang$maxFixedArity = 0;
G__3036.cljs$lang$applyTo = (function (arglist__3037){
var args = cljs.core.seq( arglist__3037 );;
return G__3036__delegate.call(this, args);
});
return G__3036;
})()
;
});
var partial__3032 = (function (f,arg1,arg2){
return (function() { 
var G__3038__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3038 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3038__delegate.call(this, args);
};
G__3038.cljs$lang$maxFixedArity = 0;
G__3038.cljs$lang$applyTo = (function (arglist__3039){
var args = cljs.core.seq( arglist__3039 );;
return G__3038__delegate.call(this, args);
});
return G__3038;
})()
;
});
var partial__3033 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3040__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3040 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3040__delegate.call(this, args);
};
G__3040.cljs$lang$maxFixedArity = 0;
G__3040.cljs$lang$applyTo = (function (arglist__3041){
var args = cljs.core.seq( arglist__3041 );;
return G__3040__delegate.call(this, args);
});
return G__3040;
})()
;
});
var partial__3034 = (function() { 
var G__3042__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3043__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3043 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3043__delegate.call(this, args);
};
G__3043.cljs$lang$maxFixedArity = 0;
G__3043.cljs$lang$applyTo = (function (arglist__3044){
var args = cljs.core.seq( arglist__3044 );;
return G__3043__delegate.call(this, args);
});
return G__3043;
})()
;
};
var G__3042 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3042__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3042.cljs$lang$maxFixedArity = 4;
G__3042.cljs$lang$applyTo = (function (arglist__3045){
var f = cljs.core.first(arglist__3045);
var arg1 = cljs.core.first(cljs.core.next(arglist__3045));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3045)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3045))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3045))));
return G__3042__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3042;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3031.call(this,f,arg1);
case  3 :
return partial__3032.call(this,f,arg1,arg2);
case  4 :
return partial__3033.call(this,f,arg1,arg2,arg3);
default:
return partial__3034.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3034.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__3046 = (function (f,x){
return (function() {
var G__3050 = null;
var G__3050__3051 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3050__3052 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3050__3053 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3050__3054 = (function() { 
var G__3056__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3056 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3056__delegate.call(this, a, b, c, ds);
};
G__3056.cljs$lang$maxFixedArity = 3;
G__3056.cljs$lang$applyTo = (function (arglist__3057){
var a = cljs.core.first(arglist__3057);
var b = cljs.core.first(cljs.core.next(arglist__3057));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3057)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3057)));
return G__3056__delegate.call(this, a, b, c, ds);
});
return G__3056;
})()
;
G__3050 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3050__3051.call(this,a);
case  2 :
return G__3050__3052.call(this,a,b);
case  3 :
return G__3050__3053.call(this,a,b,c);
default:
return G__3050__3054.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3050.cljs$lang$maxFixedArity = 3;
G__3050.cljs$lang$applyTo = G__3050__3054.cljs$lang$applyTo;
return G__3050;
})()
});
var fnil__3047 = (function (f,x,y){
return (function() {
var G__3058 = null;
var G__3058__3059 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3058__3060 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3058__3061 = (function() { 
var G__3063__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3063 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3063__delegate.call(this, a, b, c, ds);
};
G__3063.cljs$lang$maxFixedArity = 3;
G__3063.cljs$lang$applyTo = (function (arglist__3064){
var a = cljs.core.first(arglist__3064);
var b = cljs.core.first(cljs.core.next(arglist__3064));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3064)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3064)));
return G__3063__delegate.call(this, a, b, c, ds);
});
return G__3063;
})()
;
G__3058 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3058__3059.call(this,a,b);
case  3 :
return G__3058__3060.call(this,a,b,c);
default:
return G__3058__3061.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3058.cljs$lang$maxFixedArity = 3;
G__3058.cljs$lang$applyTo = G__3058__3061.cljs$lang$applyTo;
return G__3058;
})()
});
var fnil__3048 = (function (f,x,y,z){
return (function() {
var G__3065 = null;
var G__3065__3066 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3065__3067 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3065__3068 = (function() { 
var G__3070__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3070 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3070__delegate.call(this, a, b, c, ds);
};
G__3070.cljs$lang$maxFixedArity = 3;
G__3070.cljs$lang$applyTo = (function (arglist__3071){
var a = cljs.core.first(arglist__3071);
var b = cljs.core.first(cljs.core.next(arglist__3071));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3071)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3071)));
return G__3070__delegate.call(this, a, b, c, ds);
});
return G__3070;
})()
;
G__3065 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3065__3066.call(this,a,b);
case  3 :
return G__3065__3067.call(this,a,b,c);
default:
return G__3065__3068.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3065.cljs$lang$maxFixedArity = 3;
G__3065.cljs$lang$applyTo = G__3065__3068.cljs$lang$applyTo;
return G__3065;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3046.call(this,f,x);
case  3 :
return fnil__3047.call(this,f,x,y);
case  4 :
return fnil__3048.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__3074 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3072 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3072))
{var s__3073 = temp__3698__auto____3072;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3073)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3073)));
} else
{return null;
}
})));
});

return mapi__3074.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3075 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3075))
{var s__3076 = temp__3698__auto____3075;

var x__3077 = f.call(null,cljs.core.first.call(null,s__3076));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3077)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3076));
} else
{return cljs.core.cons.call(null,x__3077,keep.call(null,f,cljs.core.rest.call(null,s__3076)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__3087 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3084 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3084))
{var s__3085 = temp__3698__auto____3084;

var x__3086 = f.call(null,idx,cljs.core.first.call(null,s__3085));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3086)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3085));
} else
{return cljs.core.cons.call(null,x__3086,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3085)));
}
} else
{return null;
}
})));
});

return keepi__3087.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3132 = (function (p){
return (function() {
var ep1 = null;
var ep1__3137 = (function (){
return true;
});
var ep1__3138 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3139 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3094 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3094))
{return p.call(null,y);
} else
{return and__3546__auto____3094;
}
})());
});
var ep1__3140 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3095 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3095))
{var and__3546__auto____3096 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3096))
{return p.call(null,z);
} else
{return and__3546__auto____3096;
}
} else
{return and__3546__auto____3095;
}
})());
});
var ep1__3141 = (function() { 
var G__3143__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3097 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3097))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3097;
}
})());
};
var G__3143 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3143__delegate.call(this, x, y, z, args);
};
G__3143.cljs$lang$maxFixedArity = 3;
G__3143.cljs$lang$applyTo = (function (arglist__3144){
var x = cljs.core.first(arglist__3144);
var y = cljs.core.first(cljs.core.next(arglist__3144));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3144)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3144)));
return G__3143__delegate.call(this, x, y, z, args);
});
return G__3143;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3137.call(this);
case  1 :
return ep1__3138.call(this,x);
case  2 :
return ep1__3139.call(this,x,y);
case  3 :
return ep1__3140.call(this,x,y,z);
default:
return ep1__3141.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3141.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3133 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3145 = (function (){
return true;
});
var ep2__3146 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3098 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3098))
{return p2.call(null,x);
} else
{return and__3546__auto____3098;
}
})());
});
var ep2__3147 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3099 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3099))
{var and__3546__auto____3100 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3100))
{var and__3546__auto____3101 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3101))
{return p2.call(null,y);
} else
{return and__3546__auto____3101;
}
} else
{return and__3546__auto____3100;
}
} else
{return and__3546__auto____3099;
}
})());
});
var ep2__3148 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3102 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3102))
{var and__3546__auto____3103 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3103))
{var and__3546__auto____3104 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3104))
{var and__3546__auto____3105 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3105))
{var and__3546__auto____3106 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3106))
{return p2.call(null,z);
} else
{return and__3546__auto____3106;
}
} else
{return and__3546__auto____3105;
}
} else
{return and__3546__auto____3104;
}
} else
{return and__3546__auto____3103;
}
} else
{return and__3546__auto____3102;
}
})());
});
var ep2__3149 = (function() { 
var G__3151__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3107 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3107))
{return cljs.core.every_QMARK_.call(null,(function (p1__3078_SHARP_){
var and__3546__auto____3108 = p1.call(null,p1__3078_SHARP_);

if(cljs.core.truth_(and__3546__auto____3108))
{return p2.call(null,p1__3078_SHARP_);
} else
{return and__3546__auto____3108;
}
}),args);
} else
{return and__3546__auto____3107;
}
})());
};
var G__3151 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3151__delegate.call(this, x, y, z, args);
};
G__3151.cljs$lang$maxFixedArity = 3;
G__3151.cljs$lang$applyTo = (function (arglist__3152){
var x = cljs.core.first(arglist__3152);
var y = cljs.core.first(cljs.core.next(arglist__3152));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3152)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3152)));
return G__3151__delegate.call(this, x, y, z, args);
});
return G__3151;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3145.call(this);
case  1 :
return ep2__3146.call(this,x);
case  2 :
return ep2__3147.call(this,x,y);
case  3 :
return ep2__3148.call(this,x,y,z);
default:
return ep2__3149.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3149.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3134 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3153 = (function (){
return true;
});
var ep3__3154 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3109 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3109))
{var and__3546__auto____3110 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3110))
{return p3.call(null,x);
} else
{return and__3546__auto____3110;
}
} else
{return and__3546__auto____3109;
}
})());
});
var ep3__3155 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3111 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3111))
{var and__3546__auto____3112 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3112))
{var and__3546__auto____3113 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3113))
{var and__3546__auto____3114 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3114))
{var and__3546__auto____3115 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3115))
{return p3.call(null,y);
} else
{return and__3546__auto____3115;
}
} else
{return and__3546__auto____3114;
}
} else
{return and__3546__auto____3113;
}
} else
{return and__3546__auto____3112;
}
} else
{return and__3546__auto____3111;
}
})());
});
var ep3__3156 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3116 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3116))
{var and__3546__auto____3117 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3117))
{var and__3546__auto____3118 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3118))
{var and__3546__auto____3119 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3119))
{var and__3546__auto____3120 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3120))
{var and__3546__auto____3121 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3121))
{var and__3546__auto____3122 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3122))
{var and__3546__auto____3123 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3123))
{return p3.call(null,z);
} else
{return and__3546__auto____3123;
}
} else
{return and__3546__auto____3122;
}
} else
{return and__3546__auto____3121;
}
} else
{return and__3546__auto____3120;
}
} else
{return and__3546__auto____3119;
}
} else
{return and__3546__auto____3118;
}
} else
{return and__3546__auto____3117;
}
} else
{return and__3546__auto____3116;
}
})());
});
var ep3__3157 = (function() { 
var G__3159__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3124 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3124))
{return cljs.core.every_QMARK_.call(null,(function (p1__3079_SHARP_){
var and__3546__auto____3125 = p1.call(null,p1__3079_SHARP_);

if(cljs.core.truth_(and__3546__auto____3125))
{var and__3546__auto____3126 = p2.call(null,p1__3079_SHARP_);

if(cljs.core.truth_(and__3546__auto____3126))
{return p3.call(null,p1__3079_SHARP_);
} else
{return and__3546__auto____3126;
}
} else
{return and__3546__auto____3125;
}
}),args);
} else
{return and__3546__auto____3124;
}
})());
};
var G__3159 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3159__delegate.call(this, x, y, z, args);
};
G__3159.cljs$lang$maxFixedArity = 3;
G__3159.cljs$lang$applyTo = (function (arglist__3160){
var x = cljs.core.first(arglist__3160);
var y = cljs.core.first(cljs.core.next(arglist__3160));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3160)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3160)));
return G__3159__delegate.call(this, x, y, z, args);
});
return G__3159;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3153.call(this);
case  1 :
return ep3__3154.call(this,x);
case  2 :
return ep3__3155.call(this,x,y);
case  3 :
return ep3__3156.call(this,x,y,z);
default:
return ep3__3157.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3157.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3135 = (function() { 
var G__3161__delegate = function (p1,p2,p3,ps){
var ps__3127 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3162 = (function (){
return true;
});
var epn__3163 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3080_SHARP_){
return p1__3080_SHARP_.call(null,x);
}),ps__3127);
});
var epn__3164 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3081_SHARP_){
var and__3546__auto____3128 = p1__3081_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3128))
{return p1__3081_SHARP_.call(null,y);
} else
{return and__3546__auto____3128;
}
}),ps__3127);
});
var epn__3165 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3082_SHARP_){
var and__3546__auto____3129 = p1__3082_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3129))
{var and__3546__auto____3130 = p1__3082_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3130))
{return p1__3082_SHARP_.call(null,z);
} else
{return and__3546__auto____3130;
}
} else
{return and__3546__auto____3129;
}
}),ps__3127);
});
var epn__3166 = (function() { 
var G__3168__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3131 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3131))
{return cljs.core.every_QMARK_.call(null,(function (p1__3083_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3083_SHARP_,args);
}),ps__3127);
} else
{return and__3546__auto____3131;
}
})());
};
var G__3168 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3168__delegate.call(this, x, y, z, args);
};
G__3168.cljs$lang$maxFixedArity = 3;
G__3168.cljs$lang$applyTo = (function (arglist__3169){
var x = cljs.core.first(arglist__3169);
var y = cljs.core.first(cljs.core.next(arglist__3169));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3169)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3169)));
return G__3168__delegate.call(this, x, y, z, args);
});
return G__3168;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3162.call(this);
case  1 :
return epn__3163.call(this,x);
case  2 :
return epn__3164.call(this,x,y);
case  3 :
return epn__3165.call(this,x,y,z);
default:
return epn__3166.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3166.cljs$lang$applyTo;
return epn;
})()
};
var G__3161 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3161__delegate.call(this, p1, p2, p3, ps);
};
G__3161.cljs$lang$maxFixedArity = 3;
G__3161.cljs$lang$applyTo = (function (arglist__3170){
var p1 = cljs.core.first(arglist__3170);
var p2 = cljs.core.first(cljs.core.next(arglist__3170));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3170)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3170)));
return G__3161__delegate.call(this, p1, p2, p3, ps);
});
return G__3161;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3132.call(this,p1);
case  2 :
return every_pred__3133.call(this,p1,p2);
case  3 :
return every_pred__3134.call(this,p1,p2,p3);
default:
return every_pred__3135.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3135.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__3210 = (function (p){
return (function() {
var sp1 = null;
var sp1__3215 = (function (){
return null;
});
var sp1__3216 = (function (x){
return p.call(null,x);
});
var sp1__3217 = (function (x,y){
var or__3548__auto____3172 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3172))
{return or__3548__auto____3172;
} else
{return p.call(null,y);
}
});
var sp1__3218 = (function (x,y,z){
var or__3548__auto____3173 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3173))
{return or__3548__auto____3173;
} else
{var or__3548__auto____3174 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3174))
{return or__3548__auto____3174;
} else
{return p.call(null,z);
}
}
});
var sp1__3219 = (function() { 
var G__3221__delegate = function (x,y,z,args){
var or__3548__auto____3175 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3175))
{return or__3548__auto____3175;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3221 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3221__delegate.call(this, x, y, z, args);
};
G__3221.cljs$lang$maxFixedArity = 3;
G__3221.cljs$lang$applyTo = (function (arglist__3222){
var x = cljs.core.first(arglist__3222);
var y = cljs.core.first(cljs.core.next(arglist__3222));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3222)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3222)));
return G__3221__delegate.call(this, x, y, z, args);
});
return G__3221;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3215.call(this);
case  1 :
return sp1__3216.call(this,x);
case  2 :
return sp1__3217.call(this,x,y);
case  3 :
return sp1__3218.call(this,x,y,z);
default:
return sp1__3219.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3219.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3211 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3223 = (function (){
return null;
});
var sp2__3224 = (function (x){
var or__3548__auto____3176 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3176))
{return or__3548__auto____3176;
} else
{return p2.call(null,x);
}
});
var sp2__3225 = (function (x,y){
var or__3548__auto____3177 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3177))
{return or__3548__auto____3177;
} else
{var or__3548__auto____3178 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3178))
{return or__3548__auto____3178;
} else
{var or__3548__auto____3179 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3179))
{return or__3548__auto____3179;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3226 = (function (x,y,z){
var or__3548__auto____3180 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3180))
{return or__3548__auto____3180;
} else
{var or__3548__auto____3181 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3181))
{return or__3548__auto____3181;
} else
{var or__3548__auto____3182 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3182))
{return or__3548__auto____3182;
} else
{var or__3548__auto____3183 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3183))
{return or__3548__auto____3183;
} else
{var or__3548__auto____3184 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3184))
{return or__3548__auto____3184;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3227 = (function() { 
var G__3229__delegate = function (x,y,z,args){
var or__3548__auto____3185 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3185))
{return or__3548__auto____3185;
} else
{return cljs.core.some.call(null,(function (p1__3088_SHARP_){
var or__3548__auto____3186 = p1.call(null,p1__3088_SHARP_);

if(cljs.core.truth_(or__3548__auto____3186))
{return or__3548__auto____3186;
} else
{return p2.call(null,p1__3088_SHARP_);
}
}),args);
}
};
var G__3229 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3229__delegate.call(this, x, y, z, args);
};
G__3229.cljs$lang$maxFixedArity = 3;
G__3229.cljs$lang$applyTo = (function (arglist__3230){
var x = cljs.core.first(arglist__3230);
var y = cljs.core.first(cljs.core.next(arglist__3230));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3230)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3230)));
return G__3229__delegate.call(this, x, y, z, args);
});
return G__3229;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3223.call(this);
case  1 :
return sp2__3224.call(this,x);
case  2 :
return sp2__3225.call(this,x,y);
case  3 :
return sp2__3226.call(this,x,y,z);
default:
return sp2__3227.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3227.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3212 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3231 = (function (){
return null;
});
var sp3__3232 = (function (x){
var or__3548__auto____3187 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3187))
{return or__3548__auto____3187;
} else
{var or__3548__auto____3188 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3188))
{return or__3548__auto____3188;
} else
{return p3.call(null,x);
}
}
});
var sp3__3233 = (function (x,y){
var or__3548__auto____3189 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3189))
{return or__3548__auto____3189;
} else
{var or__3548__auto____3190 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3190))
{return or__3548__auto____3190;
} else
{var or__3548__auto____3191 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3191))
{return or__3548__auto____3191;
} else
{var or__3548__auto____3192 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3192))
{return or__3548__auto____3192;
} else
{var or__3548__auto____3193 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3193))
{return or__3548__auto____3193;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3234 = (function (x,y,z){
var or__3548__auto____3194 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3194))
{return or__3548__auto____3194;
} else
{var or__3548__auto____3195 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3195))
{return or__3548__auto____3195;
} else
{var or__3548__auto____3196 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3196))
{return or__3548__auto____3196;
} else
{var or__3548__auto____3197 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3197))
{return or__3548__auto____3197;
} else
{var or__3548__auto____3198 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3198))
{return or__3548__auto____3198;
} else
{var or__3548__auto____3199 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3199))
{return or__3548__auto____3199;
} else
{var or__3548__auto____3200 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3200))
{return or__3548__auto____3200;
} else
{var or__3548__auto____3201 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3201))
{return or__3548__auto____3201;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__3235 = (function() { 
var G__3237__delegate = function (x,y,z,args){
var or__3548__auto____3202 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3202))
{return or__3548__auto____3202;
} else
{return cljs.core.some.call(null,(function (p1__3089_SHARP_){
var or__3548__auto____3203 = p1.call(null,p1__3089_SHARP_);

if(cljs.core.truth_(or__3548__auto____3203))
{return or__3548__auto____3203;
} else
{var or__3548__auto____3204 = p2.call(null,p1__3089_SHARP_);

if(cljs.core.truth_(or__3548__auto____3204))
{return or__3548__auto____3204;
} else
{return p3.call(null,p1__3089_SHARP_);
}
}
}),args);
}
};
var G__3237 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3237__delegate.call(this, x, y, z, args);
};
G__3237.cljs$lang$maxFixedArity = 3;
G__3237.cljs$lang$applyTo = (function (arglist__3238){
var x = cljs.core.first(arglist__3238);
var y = cljs.core.first(cljs.core.next(arglist__3238));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3238)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3238)));
return G__3237__delegate.call(this, x, y, z, args);
});
return G__3237;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3231.call(this);
case  1 :
return sp3__3232.call(this,x);
case  2 :
return sp3__3233.call(this,x,y);
case  3 :
return sp3__3234.call(this,x,y,z);
default:
return sp3__3235.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3235.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3213 = (function() { 
var G__3239__delegate = function (p1,p2,p3,ps){
var ps__3205 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3240 = (function (){
return null;
});
var spn__3241 = (function (x){
return cljs.core.some.call(null,(function (p1__3090_SHARP_){
return p1__3090_SHARP_.call(null,x);
}),ps__3205);
});
var spn__3242 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3091_SHARP_){
var or__3548__auto____3206 = p1__3091_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3206))
{return or__3548__auto____3206;
} else
{return p1__3091_SHARP_.call(null,y);
}
}),ps__3205);
});
var spn__3243 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3092_SHARP_){
var or__3548__auto____3207 = p1__3092_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3207))
{return or__3548__auto____3207;
} else
{var or__3548__auto____3208 = p1__3092_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3208))
{return or__3548__auto____3208;
} else
{return p1__3092_SHARP_.call(null,z);
}
}
}),ps__3205);
});
var spn__3244 = (function() { 
var G__3246__delegate = function (x,y,z,args){
var or__3548__auto____3209 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3209))
{return or__3548__auto____3209;
} else
{return cljs.core.some.call(null,(function (p1__3093_SHARP_){
return cljs.core.some.call(null,p1__3093_SHARP_,args);
}),ps__3205);
}
};
var G__3246 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3246__delegate.call(this, x, y, z, args);
};
G__3246.cljs$lang$maxFixedArity = 3;
G__3246.cljs$lang$applyTo = (function (arglist__3247){
var x = cljs.core.first(arglist__3247);
var y = cljs.core.first(cljs.core.next(arglist__3247));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3247)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3247)));
return G__3246__delegate.call(this, x, y, z, args);
});
return G__3246;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3240.call(this);
case  1 :
return spn__3241.call(this,x);
case  2 :
return spn__3242.call(this,x,y);
case  3 :
return spn__3243.call(this,x,y,z);
default:
return spn__3244.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3244.cljs$lang$applyTo;
return spn;
})()
};
var G__3239 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3239__delegate.call(this, p1, p2, p3, ps);
};
G__3239.cljs$lang$maxFixedArity = 3;
G__3239.cljs$lang$applyTo = (function (arglist__3248){
var p1 = cljs.core.first(arglist__3248);
var p2 = cljs.core.first(cljs.core.next(arglist__3248));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3248)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3248)));
return G__3239__delegate.call(this, p1, p2, p3, ps);
});
return G__3239;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3210.call(this,p1);
case  2 :
return some_fn__3211.call(this,p1,p2);
case  3 :
return some_fn__3212.call(this,p1,p2,p3);
default:
return some_fn__3213.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3213.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__3261 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3249 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3249))
{var s__3250 = temp__3698__auto____3249;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3250)),map.call(null,f,cljs.core.rest.call(null,s__3250)));
} else
{return null;
}
})));
});
var map__3262 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3251 = cljs.core.seq.call(null,c1);
var s2__3252 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3253 = s1__3251;

if(cljs.core.truth_(and__3546__auto____3253))
{return s2__3252;
} else
{return and__3546__auto____3253;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3251),cljs.core.first.call(null,s2__3252)),map.call(null,f,cljs.core.rest.call(null,s1__3251),cljs.core.rest.call(null,s2__3252)));
} else
{return null;
}
})));
});
var map__3263 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3254 = cljs.core.seq.call(null,c1);
var s2__3255 = cljs.core.seq.call(null,c2);
var s3__3256 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3257 = s1__3254;

if(cljs.core.truth_(and__3546__auto____3257))
{var and__3546__auto____3258 = s2__3255;

if(cljs.core.truth_(and__3546__auto____3258))
{return s3__3256;
} else
{return and__3546__auto____3258;
}
} else
{return and__3546__auto____3257;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3254),cljs.core.first.call(null,s2__3255),cljs.core.first.call(null,s3__3256)),map.call(null,f,cljs.core.rest.call(null,s1__3254),cljs.core.rest.call(null,s2__3255),cljs.core.rest.call(null,s3__3256)));
} else
{return null;
}
})));
});
var map__3264 = (function() { 
var G__3266__delegate = function (f,c1,c2,c3,colls){
var step__3260 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3259 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3259)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3259),step.call(null,map.call(null,cljs.core.rest,ss__3259)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3171_SHARP_){
return cljs.core.apply.call(null,f,p1__3171_SHARP_);
}),step__3260.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3266 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3266__delegate.call(this, f, c1, c2, c3, colls);
};
G__3266.cljs$lang$maxFixedArity = 4;
G__3266.cljs$lang$applyTo = (function (arglist__3267){
var f = cljs.core.first(arglist__3267);
var c1 = cljs.core.first(cljs.core.next(arglist__3267));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3267)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3267))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3267))));
return G__3266__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3266;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3261.call(this,f,c1);
case  3 :
return map__3262.call(this,f,c1,c2);
case  4 :
return map__3263.call(this,f,c1,c2,c3);
default:
return map__3264.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3264.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____3268 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3268))
{var s__3269 = temp__3698__auto____3268;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3269),take.call(null,(n - 1),cljs.core.rest.call(null,s__3269)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__3272 = (function (n,coll){
while(true){
var s__3270 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3271 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3271))
{return s__3270;
} else
{return and__3546__auto____3271;
}
})()))
{{
var G__3273 = (n - 1);
var G__3274 = cljs.core.rest.call(null,s__3270);
n = G__3273;
coll = G__3274;
continue;
}
} else
{return s__3270;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3272.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3275 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3276 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3275.call(this,n);
case  2 :
return drop_last__3276.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__3278 = cljs.core.seq.call(null,coll);
var lead__3279 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3279))
{{
var G__3280 = cljs.core.next.call(null,s__3278);
var G__3281 = cljs.core.next.call(null,lead__3279);
s__3278 = G__3280;
lead__3279 = G__3281;
continue;
}
} else
{return s__3278;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3284 = (function (pred,coll){
while(true){
var s__3282 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3283 = s__3282;

if(cljs.core.truth_(and__3546__auto____3283))
{return pred.call(null,cljs.core.first.call(null,s__3282));
} else
{return and__3546__auto____3283;
}
})()))
{{
var G__3285 = pred;
var G__3286 = cljs.core.rest.call(null,s__3282);
pred = G__3285;
coll = G__3286;
continue;
}
} else
{return s__3282;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3284.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3287 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3287))
{var s__3288 = temp__3698__auto____3287;

return cljs.core.concat.call(null,s__3288,cycle.call(null,s__3288));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__3289 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3290 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3289.call(this,n);
case  2 :
return repeat__3290.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__3292 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3293 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3292.call(this,n);
case  2 :
return repeatedly__3293.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__3299 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3295 = cljs.core.seq.call(null,c1);
var s2__3296 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3297 = s1__3295;

if(cljs.core.truth_(and__3546__auto____3297))
{return s2__3296;
} else
{return and__3546__auto____3297;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3295),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3296),interleave.call(null,cljs.core.rest.call(null,s1__3295),cljs.core.rest.call(null,s2__3296))));
} else
{return null;
}
})));
});
var interleave__3300 = (function() { 
var G__3302__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3298 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3298)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3298),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3298)));
} else
{return null;
}
})));
};
var G__3302 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3302__delegate.call(this, c1, c2, colls);
};
G__3302.cljs$lang$maxFixedArity = 2;
G__3302.cljs$lang$applyTo = (function (arglist__3303){
var c1 = cljs.core.first(arglist__3303);
var c2 = cljs.core.first(cljs.core.next(arglist__3303));
var colls = cljs.core.rest(cljs.core.next(arglist__3303));
return G__3302__delegate.call(this, c1, c2, colls);
});
return G__3302;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3299.call(this,c1,c2);
default:
return interleave__3300.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3300.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__3306 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3304 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3304))
{var coll__3305 = temp__3695__auto____3304;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3305),cat.call(null,cljs.core.rest.call(null,coll__3305),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3306.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3307 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3308 = (function() { 
var G__3310__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3310 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3310__delegate.call(this, f, coll, colls);
};
G__3310.cljs$lang$maxFixedArity = 2;
G__3310.cljs$lang$applyTo = (function (arglist__3311){
var f = cljs.core.first(arglist__3311);
var coll = cljs.core.first(cljs.core.next(arglist__3311));
var colls = cljs.core.rest(cljs.core.next(arglist__3311));
return G__3310__delegate.call(this, f, coll, colls);
});
return G__3310;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3307.call(this,f,coll);
default:
return mapcat__3308.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3308.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3312 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3312))
{var s__3313 = temp__3698__auto____3312;

var f__3314 = cljs.core.first.call(null,s__3313);
var r__3315 = cljs.core.rest.call(null,s__3313);

if(cljs.core.truth_(pred.call(null,f__3314)))
{return cljs.core.cons.call(null,f__3314,filter.call(null,pred,r__3315));
} else
{return filter.call(null,pred,r__3315);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__3317 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3317.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3316_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3316_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__3324 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3325 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3318 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3318))
{var s__3319 = temp__3698__auto____3318;

var p__3320 = cljs.core.take.call(null,n,s__3319);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3320))))
{return cljs.core.cons.call(null,p__3320,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3319)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3326 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3321 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3321))
{var s__3322 = temp__3698__auto____3321;

var p__3323 = cljs.core.take.call(null,n,s__3322);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3323))))
{return cljs.core.cons.call(null,p__3323,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3322)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3323,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3324.call(this,n,step);
case  3 :
return partition__3325.call(this,n,step,pad);
case  4 :
return partition__3326.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__3332 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3333 = (function (m,ks,not_found){
var sentinel__3328 = cljs.core.lookup_sentinel;
var m__3329 = m;
var ks__3330 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3330))
{var m__3331 = cljs.core.get.call(null,m__3329,cljs.core.first.call(null,ks__3330),sentinel__3328);

if(cljs.core.truth_((sentinel__3328 === m__3331)))
{return not_found;
} else
{{
var G__3335 = sentinel__3328;
var G__3336 = m__3331;
var G__3337 = cljs.core.next.call(null,ks__3330);
sentinel__3328 = G__3335;
m__3329 = G__3336;
ks__3330 = G__3337;
continue;
}
}
} else
{return m__3329;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3332.call(this,m,ks);
case  3 :
return get_in__3333.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__3338,v){
var vec__3339__3340 = p__3338;
var k__3341 = cljs.core.nth.call(null,vec__3339__3340,0,null);
var ks__3342 = cljs.core.nthnext.call(null,vec__3339__3340,1);

if(cljs.core.truth_(ks__3342))
{return cljs.core.assoc.call(null,m,k__3341,assoc_in.call(null,cljs.core.get.call(null,m,k__3341),ks__3342,v));
} else
{return cljs.core.assoc.call(null,m,k__3341,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__3343,f,args){
var vec__3344__3345 = p__3343;
var k__3346 = cljs.core.nth.call(null,vec__3344__3345,0,null);
var ks__3347 = cljs.core.nthnext.call(null,vec__3344__3345,1);

if(cljs.core.truth_(ks__3347))
{return cljs.core.assoc.call(null,m,k__3346,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3346),ks__3347,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3346,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3346),args));
}
};
var update_in = function (m,p__3343,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3343, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3348){
var m = cljs.core.first(arglist__3348);
var p__3343 = cljs.core.first(cljs.core.next(arglist__3348));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3348)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3348)));
return update_in__delegate.call(this, m, p__3343, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3349 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3374 = null;
var G__3374__3375 = (function (coll,k){
var this__3350 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3374__3376 = (function (coll,k,not_found){
var this__3351 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3374 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3374__3375.call(this,coll,k);
case  3 :
return G__3374__3376.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3374;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3352 = this;
var new_array__3353 = cljs.core.aclone.call(null,this__3352.array);

(new_array__3353[k] = v);
return (new cljs.core.Vector(this__3352.meta,new_array__3353));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3354 = this;
var new_array__3355 = cljs.core.aclone.call(null,this__3354.array);

new_array__3355.push(o);
return (new cljs.core.Vector(this__3354.meta,new_array__3355));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3378 = null;
var G__3378__3379 = (function (v,f){
var this__3356 = this;
return cljs.core.ci_reduce.call(null,this__3356.array,f);
});
var G__3378__3380 = (function (v,f,start){
var this__3357 = this;
return cljs.core.ci_reduce.call(null,this__3357.array,f,start);
});
G__3378 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3378__3379.call(this,v,f);
case  3 :
return G__3378__3380.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3378;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3358 = this;
if(cljs.core.truth_((this__3358.array.length > 0)))
{var vector_seq__3359 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3358.array.length)))
{return cljs.core.cons.call(null,(this__3358.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3359.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3360 = this;
return this__3360.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3361 = this;
var count__3362 = this__3361.array.length;

if(cljs.core.truth_((count__3362 > 0)))
{return (this__3361.array[(count__3362 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3363 = this;
if(cljs.core.truth_((this__3363.array.length > 0)))
{var new_array__3364 = cljs.core.aclone.call(null,this__3363.array);

new_array__3364.pop();
return (new cljs.core.Vector(this__3363.meta,new_array__3364));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3365 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3366 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3367 = this;
return (new cljs.core.Vector(meta,this__3367.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3368 = this;
return this__3368.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3382 = null;
var G__3382__3383 = (function (coll,n){
var this__3369 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3370 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3370))
{return (n < this__3369.array.length);
} else
{return and__3546__auto____3370;
}
})()))
{return (this__3369.array[n]);
} else
{return null;
}
});
var G__3382__3384 = (function (coll,n,not_found){
var this__3371 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3372 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3372))
{return (n < this__3371.array.length);
} else
{return and__3546__auto____3372;
}
})()))
{return (this__3371.array[n]);
} else
{return not_found;
}
});
G__3382 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3382__3383.call(this,coll,n);
case  3 :
return G__3382__3384.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3382;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3373 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3373.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3386 = null;
var G__3386__3387 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3386__3388 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3386 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3386__3387.call(this,_,k);
case  3 :
return G__3386__3388.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3386;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__3390){
var args = cljs.core.seq( arglist__3390 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3391 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3411 = null;
var G__3411__3412 = (function (coll,k){
var this__3392 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3411__3413 = (function (coll,k,not_found){
var this__3393 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3411 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3411__3412.call(this,coll,k);
case  3 :
return G__3411__3413.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3411;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__3394 = this;
var v_pos__3395 = (this__3394.start + key);

return (new cljs.core.Subvec(this__3394.meta,cljs.core._assoc.call(null,this__3394.v,v_pos__3395,val),this__3394.start,((this__3394.end > (v_pos__3395 + 1)) ? this__3394.end : (v_pos__3395 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3396 = this;
return (new cljs.core.Subvec(this__3396.meta,cljs.core._assoc_n.call(null,this__3396.v,this__3396.end,o),this__3396.start,(this__3396.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3415 = null;
var G__3415__3416 = (function (coll,f){
var this__3397 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__3415__3417 = (function (coll,f,start){
var this__3398 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__3415 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3415__3416.call(this,coll,f);
case  3 :
return G__3415__3417.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3415;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3399 = this;
var subvec_seq__3400 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__3399.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__3399.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__3400.call(null,this__3399.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3401 = this;
return (this__3401.end - this__3401.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3402 = this;
return cljs.core._nth.call(null,this__3402.v,(this__3402.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3403 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__3403.start,this__3403.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__3403.meta,this__3403.v,this__3403.start,(this__3403.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3404 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3405 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3406 = this;
return (new cljs.core.Subvec(meta,this__3406.v,this__3406.start,this__3406.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3407 = this;
return this__3407.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3419 = null;
var G__3419__3420 = (function (coll,n){
var this__3408 = this;
return cljs.core._nth.call(null,this__3408.v,(this__3408.start + n));
});
var G__3419__3421 = (function (coll,n,not_found){
var this__3409 = this;
return cljs.core._nth.call(null,this__3409.v,(this__3409.start + n),not_found);
});
G__3419 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3419__3420.call(this,coll,n);
case  3 :
return G__3419__3421.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3419;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3410 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3410.meta);
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__3423 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3424 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__3423.call(this,v,start);
case  3 :
return subvec__3424.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;
cljs.core.Subvec.prototype.call = (function() {
var G__3426 = null;
var G__3426__3427 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3426__3428 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3426 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3426__3427.call(this,_,k);
case  3 :
return G__3426__3428.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3426;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3430 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__3431 = array.length;

var i__3432 = 0;

while(true){
if(cljs.core.truth_((i__3432 < len__3431)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3432]))))
{return i__3432;
} else
{{
var G__3433 = (i__3432 + incr);
i__3432 = G__3433;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___3435 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3436 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3434 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3434))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3434;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___3435.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3436.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3439 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3458 = null;
var G__3458__3459 = (function (coll,k){
var this__3440 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3458__3460 = (function (coll,k,not_found){
var this__3441 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3441.strobj,(this__3441.strobj[k]),not_found);
});
G__3458 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3458__3459.call(this,coll,k);
case  3 :
return G__3458__3460.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3458;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3442 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3443 = goog.object.clone.call(null,this__3442.strobj);
var overwrite_QMARK___3444 = new_strobj__3443.hasOwnProperty(k);

(new_strobj__3443[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3444))
{return (new cljs.core.ObjMap(this__3442.meta,this__3442.keys,new_strobj__3443));
} else
{var new_keys__3445 = cljs.core.aclone.call(null,this__3442.keys);

new_keys__3445.push(k);
return (new cljs.core.ObjMap(this__3442.meta,new_keys__3445,new_strobj__3443));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3442.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3446 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3446.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3447 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3448 = this;
if(cljs.core.truth_((this__3448.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3438_SHARP_){
return cljs.core.vector.call(null,p1__3438_SHARP_,(this__3448.strobj[p1__3438_SHARP_]));
}),this__3448.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3449 = this;
return this__3449.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3450 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3451 = this;
return (new cljs.core.ObjMap(meta,this__3451.keys,this__3451.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3452 = this;
return this__3452.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3453 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3453.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3454 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3455 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3455))
{return this__3454.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3455;
}
})()))
{var new_keys__3456 = cljs.core.aclone.call(null,this__3454.keys);
var new_strobj__3457 = goog.object.clone.call(null,this__3454.strobj);

new_keys__3456.splice(cljs.core.scan_array.call(null,1,k,new_keys__3456),1);
cljs.core.js_delete.call(null,new_strobj__3457,k);
return (new cljs.core.ObjMap(this__3454.meta,new_keys__3456,new_strobj__3457));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3463 = null;
var G__3463__3464 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3463__3465 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3463 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3463__3464.call(this,_,k);
case  3 :
return G__3463__3465.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3463;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3467 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3497 = null;
var G__3497__3498 = (function (coll,k){
var this__3468 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3497__3499 = (function (coll,k,not_found){
var this__3469 = this;
var bucket__3470 = (this__3469.hashobj[cljs.core.hash.call(null,k)]);
var i__3471 = (cljs.core.truth_(bucket__3470)?cljs.core.scan_array.call(null,2,k,bucket__3470):null);

if(cljs.core.truth_(i__3471))
{return (bucket__3470[(i__3471 + 1)]);
} else
{return not_found;
}
});
G__3497 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3497__3498.call(this,coll,k);
case  3 :
return G__3497__3499.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3497;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3472 = this;
var h__3473 = cljs.core.hash.call(null,k);
var bucket__3474 = (this__3472.hashobj[h__3473]);

if(cljs.core.truth_(bucket__3474))
{var new_bucket__3475 = cljs.core.aclone.call(null,bucket__3474);
var new_hashobj__3476 = goog.object.clone.call(null,this__3472.hashobj);

(new_hashobj__3476[h__3473] = new_bucket__3475);
var temp__3695__auto____3477 = cljs.core.scan_array.call(null,2,k,new_bucket__3475);

if(cljs.core.truth_(temp__3695__auto____3477))
{var i__3478 = temp__3695__auto____3477;

(new_bucket__3475[(i__3478 + 1)] = v);
return (new cljs.core.HashMap(this__3472.meta,this__3472.count,new_hashobj__3476));
} else
{new_bucket__3475.push(k,v);
return (new cljs.core.HashMap(this__3472.meta,(this__3472.count + 1),new_hashobj__3476));
}
} else
{var new_hashobj__3479 = goog.object.clone.call(null,this__3472.hashobj);

(new_hashobj__3479[h__3473] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3472.meta,(this__3472.count + 1),new_hashobj__3479));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3480 = this;
var bucket__3481 = (this__3480.hashobj[cljs.core.hash.call(null,k)]);
var i__3482 = (cljs.core.truth_(bucket__3481)?cljs.core.scan_array.call(null,2,k,bucket__3481):null);

if(cljs.core.truth_(i__3482))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3483 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3484 = this;
if(cljs.core.truth_((this__3484.count > 0)))
{var hashes__3485 = cljs.core.js_keys.call(null,this__3484.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3462_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3484.hashobj[p1__3462_SHARP_])));
}),hashes__3485);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3486 = this;
return this__3486.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3487 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3488 = this;
return (new cljs.core.HashMap(meta,this__3488.count,this__3488.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3489 = this;
return this__3489.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3490 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3490.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3491 = this;
var h__3492 = cljs.core.hash.call(null,k);
var bucket__3493 = (this__3491.hashobj[h__3492]);
var i__3494 = (cljs.core.truth_(bucket__3493)?cljs.core.scan_array.call(null,2,k,bucket__3493):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3494)))
{return coll;
} else
{var new_hashobj__3495 = goog.object.clone.call(null,this__3491.hashobj);

if(cljs.core.truth_((3 > bucket__3493.length)))
{cljs.core.js_delete.call(null,new_hashobj__3495,h__3492);
} else
{var new_bucket__3496 = cljs.core.aclone.call(null,bucket__3493);

new_bucket__3496.splice(i__3494,2);
(new_hashobj__3495[h__3492] = new_bucket__3496);
}
return (new cljs.core.HashMap(this__3491.meta,(this__3491.count - 1),new_hashobj__3495));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3501 = ks.length;

var i__3502 = 0;
var out__3503 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3502 < len__3501)))
{{
var G__3504 = (i__3502 + 1);
var G__3505 = cljs.core.assoc.call(null,out__3503,(ks[i__3502]),(vs[i__3502]));
i__3502 = G__3504;
out__3503 = G__3505;
continue;
}
} else
{return out__3503;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3506 = null;
var G__3506__3507 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3506__3508 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3506 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3506__3507.call(this,_,k);
case  3 :
return G__3506__3508.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3506;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3510 = cljs.core.seq.call(null,keyvals);
var out__3511 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3510))
{{
var G__3512 = cljs.core.nnext.call(null,in$__3510);
var G__3513 = cljs.core.assoc.call(null,out__3511,cljs.core.first.call(null,in$__3510),cljs.core.second.call(null,in$__3510));
in$__3510 = G__3512;
out__3511 = G__3513;
continue;
}
} else
{return out__3511;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__3514){
var keyvals = cljs.core.seq( arglist__3514 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3515_SHARP_,p2__3516_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3517 = p1__3515_SHARP_;

if(cljs.core.truth_(or__3548__auto____3517))
{return or__3548__auto____3517;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3516_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__3518){
var maps = cljs.core.seq( arglist__3518 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__3521 = (function (m,e){
var k__3519 = cljs.core.first.call(null,e);
var v__3520 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3519)))
{return cljs.core.assoc.call(null,m,k__3519,f.call(null,cljs.core.get.call(null,m,k__3519),v__3520));
} else
{return cljs.core.assoc.call(null,m,k__3519,v__3520);
}
});
var merge2__3523 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3521,(function (){var or__3548__auto____3522 = m1;

if(cljs.core.truth_(or__3548__auto____3522))
{return or__3548__auto____3522;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3523,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__3524){
var f = cljs.core.first(arglist__3524);
var maps = cljs.core.rest(arglist__3524);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3526 = cljs.core.ObjMap.fromObject([],{});
var keys__3527 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3527))
{var key__3528 = cljs.core.first.call(null,keys__3527);
var entry__3529 = cljs.core.get.call(null,map,key__3528,"﷐'user/not-found");

{
var G__3530 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__3529,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__3526,key__3528,entry__3529):ret__3526);
var G__3531 = cljs.core.next.call(null,keys__3527);
ret__3526 = G__3530;
keys__3527 = G__3531;
continue;
}
} else
{return ret__3526;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3532 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3545 = null;
var G__3545__3546 = (function (coll,v){
var this__3533 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3545__3547 = (function (coll,v,not_found){
var this__3534 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3534.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3545 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3545__3546.call(this,coll,v);
case  3 :
return G__3545__3547.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3545;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3535 = this;
return (new cljs.core.Set(this__3535.meta,cljs.core.assoc.call(null,this__3535.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3536 = this;
return cljs.core.keys.call(null,this__3536.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3537 = this;
return (new cljs.core.Set(this__3537.meta,cljs.core.dissoc.call(null,this__3537.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3538 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3539 = this;
var and__3546__auto____3540 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3540))
{var and__3546__auto____3541 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3541))
{return cljs.core.every_QMARK_.call(null,(function (p1__3525_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3525_SHARP_);
}),other);
} else
{return and__3546__auto____3541;
}
} else
{return and__3546__auto____3540;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3542 = this;
return (new cljs.core.Set(meta,this__3542.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3543 = this;
return this__3543.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3544 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3544.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3549 = null;
var G__3549__3550 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3549__3551 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3549 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3549__3550.call(this,_,k);
case  3 :
return G__3549__3551.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3549;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3554 = cljs.core.seq.call(null,coll);
var out__3555 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3554))))
{{
var G__3556 = cljs.core.rest.call(null,in$__3554);
var G__3557 = cljs.core.conj.call(null,out__3555,cljs.core.first.call(null,in$__3554));
in$__3554 = G__3556;
out__3555 = G__3557;
continue;
}
} else
{return out__3555;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__3558 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3559 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3559))
{var e__3560 = temp__3695__auto____3559;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3560));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3558,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3553_SHARP_){
var temp__3695__auto____3561 = cljs.core.find.call(null,smap,p1__3553_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3561))
{var e__3562 = temp__3695__auto____3561;

return cljs.core.second.call(null,e__3562);
} else
{return p1__3553_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3570 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3563,seen){
while(true){
var vec__3564__3565 = p__3563;
var f__3566 = cljs.core.nth.call(null,vec__3564__3565,0,null);
var xs__3567 = vec__3564__3565;

var temp__3698__auto____3568 = cljs.core.seq.call(null,xs__3567);

if(cljs.core.truth_(temp__3698__auto____3568))
{var s__3569 = temp__3698__auto____3568;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3566)))
{{
var G__3571 = cljs.core.rest.call(null,s__3569);
var G__3572 = seen;
p__3563 = G__3571;
seen = G__3572;
continue;
}
} else
{return cljs.core.cons.call(null,f__3566,step.call(null,cljs.core.rest.call(null,s__3569),cljs.core.conj.call(null,seen,f__3566)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3570.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3573 = cljs.core.Vector.fromArray([]);
var s__3574 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3574)))
{{
var G__3575 = cljs.core.conj.call(null,ret__3573,cljs.core.first.call(null,s__3574));
var G__3576 = cljs.core.next.call(null,s__3574);
ret__3573 = G__3575;
s__3574 = G__3576;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3573);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____3577 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3577))
{return or__3548__auto____3577;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3578 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3578 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__3578 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____3579 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3579))
{return or__3548__auto____3579;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3580 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3580 > -1)))
{return cljs.core.subs.call(null,x,2,i__3580);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3583 = cljs.core.ObjMap.fromObject([],{});
var ks__3584 = cljs.core.seq.call(null,keys);
var vs__3585 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3586 = ks__3584;

if(cljs.core.truth_(and__3546__auto____3586))
{return vs__3585;
} else
{return and__3546__auto____3586;
}
})()))
{{
var G__3587 = cljs.core.assoc.call(null,map__3583,cljs.core.first.call(null,ks__3584),cljs.core.first.call(null,vs__3585));
var G__3588 = cljs.core.next.call(null,ks__3584);
var G__3589 = cljs.core.next.call(null,vs__3585);
map__3583 = G__3587;
ks__3584 = G__3588;
vs__3585 = G__3589;
continue;
}
} else
{return map__3583;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3592 = (function (k,x){
return x;
});
var max_key__3593 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3594 = (function() { 
var G__3596__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3581_SHARP_,p2__3582_SHARP_){
return max_key.call(null,k,p1__3581_SHARP_,p2__3582_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3596 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3596__delegate.call(this, k, x, y, more);
};
G__3596.cljs$lang$maxFixedArity = 3;
G__3596.cljs$lang$applyTo = (function (arglist__3597){
var k = cljs.core.first(arglist__3597);
var x = cljs.core.first(cljs.core.next(arglist__3597));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3597)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3597)));
return G__3596__delegate.call(this, k, x, y, more);
});
return G__3596;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3592.call(this,k,x);
case  3 :
return max_key__3593.call(this,k,x,y);
default:
return max_key__3594.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3594.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3598 = (function (k,x){
return x;
});
var min_key__3599 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3600 = (function() { 
var G__3602__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3590_SHARP_,p2__3591_SHARP_){
return min_key.call(null,k,p1__3590_SHARP_,p2__3591_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3602 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3602__delegate.call(this, k, x, y, more);
};
G__3602.cljs$lang$maxFixedArity = 3;
G__3602.cljs$lang$applyTo = (function (arglist__3603){
var k = cljs.core.first(arglist__3603);
var x = cljs.core.first(cljs.core.next(arglist__3603));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3603)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3603)));
return G__3602__delegate.call(this, k, x, y, more);
});
return G__3602;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3598.call(this,k,x);
case  3 :
return min_key__3599.call(this,k,x,y);
default:
return min_key__3600.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3600.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3606 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3607 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3604 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3604))
{var s__3605 = temp__3698__auto____3604;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3605),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3605)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3606.call(this,n,step);
case  3 :
return partition_all__3607.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3609 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3609))
{var s__3610 = temp__3698__auto____3609;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3610))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3610),take_while.call(null,pred,cljs.core.rest.call(null,s__3610)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3611 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3612 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3628 = null;
var G__3628__3629 = (function (rng,f){
var this__3613 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3628__3630 = (function (rng,f,s){
var this__3614 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3628 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3628__3629.call(this,rng,f);
case  3 :
return G__3628__3630.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3628;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3615 = this;
var comp__3616 = (cljs.core.truth_((this__3615.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3616.call(null,this__3615.start,this__3615.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3617 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__3617.end - this__3617.start) / this__3617.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3618 = this;
return this__3618.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3619 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3619.meta,(this__3619.start + this__3619.step),this__3619.end,this__3619.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3620 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3621 = this;
return (new cljs.core.Range(meta,this__3621.start,this__3621.end,this__3621.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3622 = this;
return this__3622.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3632 = null;
var G__3632__3633 = (function (rng,n){
var this__3623 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3623.start + (n * this__3623.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3624 = (this__3623.start > this__3623.end);

if(cljs.core.truth_(and__3546__auto____3624))
{return cljs.core._EQ_.call(null,this__3623.step,0);
} else
{return and__3546__auto____3624;
}
})()))
{return this__3623.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__3632__3634 = (function (rng,n,not_found){
var this__3625 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3625.start + (n * this__3625.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3626 = (this__3625.start > this__3625.end);

if(cljs.core.truth_(and__3546__auto____3626))
{return cljs.core._EQ_.call(null,this__3625.step,0);
} else
{return and__3546__auto____3626;
}
})()))
{return this__3625.start;
} else
{return not_found;
}
}
});
G__3632 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3632__3633.call(this,rng,n);
case  3 :
return G__3632__3634.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3632;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3627 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3627.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3636 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3637 = (function (end){
return range.call(null,0,end,1);
});
var range__3638 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3639 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3636.call(this);
case  1 :
return range__3637.call(this,start);
case  2 :
return range__3638.call(this,start,end);
case  3 :
return range__3639.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3641 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3641))
{var s__3642 = temp__3698__auto____3641;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3642),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3642)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3644 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3644))
{var s__3645 = temp__3698__auto____3644;

var fst__3646 = cljs.core.first.call(null,s__3645);
var fv__3647 = f.call(null,fst__3646);
var run__3648 = cljs.core.cons.call(null,fst__3646,cljs.core.take_while.call(null,(function (p1__3643_SHARP_){
return cljs.core._EQ_.call(null,fv__3647,f.call(null,p1__3643_SHARP_));
}),cljs.core.next.call(null,s__3645)));

return cljs.core.cons.call(null,run__3648,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3648),s__3645))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3663 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3659 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3659))
{var s__3660 = temp__3695__auto____3659;

return reductions.call(null,f,cljs.core.first.call(null,s__3660),cljs.core.rest.call(null,s__3660));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3664 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3661 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3661))
{var s__3662 = temp__3698__auto____3661;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3662)),cljs.core.rest.call(null,s__3662));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3663.call(this,f,init);
case  3 :
return reductions__3664.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3667 = (function (f){
return (function() {
var G__3672 = null;
var G__3672__3673 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3672__3674 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3672__3675 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3672__3676 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3672__3677 = (function() { 
var G__3679__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3679 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3679__delegate.call(this, x, y, z, args);
};
G__3679.cljs$lang$maxFixedArity = 3;
G__3679.cljs$lang$applyTo = (function (arglist__3680){
var x = cljs.core.first(arglist__3680);
var y = cljs.core.first(cljs.core.next(arglist__3680));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3680)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3680)));
return G__3679__delegate.call(this, x, y, z, args);
});
return G__3679;
})()
;
G__3672 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3672__3673.call(this);
case  1 :
return G__3672__3674.call(this,x);
case  2 :
return G__3672__3675.call(this,x,y);
case  3 :
return G__3672__3676.call(this,x,y,z);
default:
return G__3672__3677.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3672.cljs$lang$maxFixedArity = 3;
G__3672.cljs$lang$applyTo = G__3672__3677.cljs$lang$applyTo;
return G__3672;
})()
});
var juxt__3668 = (function (f,g){
return (function() {
var G__3681 = null;
var G__3681__3682 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3681__3683 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3681__3684 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3681__3685 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3681__3686 = (function() { 
var G__3688__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3688 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3688__delegate.call(this, x, y, z, args);
};
G__3688.cljs$lang$maxFixedArity = 3;
G__3688.cljs$lang$applyTo = (function (arglist__3689){
var x = cljs.core.first(arglist__3689);
var y = cljs.core.first(cljs.core.next(arglist__3689));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3689)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3689)));
return G__3688__delegate.call(this, x, y, z, args);
});
return G__3688;
})()
;
G__3681 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3681__3682.call(this);
case  1 :
return G__3681__3683.call(this,x);
case  2 :
return G__3681__3684.call(this,x,y);
case  3 :
return G__3681__3685.call(this,x,y,z);
default:
return G__3681__3686.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3681.cljs$lang$maxFixedArity = 3;
G__3681.cljs$lang$applyTo = G__3681__3686.cljs$lang$applyTo;
return G__3681;
})()
});
var juxt__3669 = (function (f,g,h){
return (function() {
var G__3690 = null;
var G__3690__3691 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3690__3692 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3690__3693 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3690__3694 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3690__3695 = (function() { 
var G__3697__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3697 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3697__delegate.call(this, x, y, z, args);
};
G__3697.cljs$lang$maxFixedArity = 3;
G__3697.cljs$lang$applyTo = (function (arglist__3698){
var x = cljs.core.first(arglist__3698);
var y = cljs.core.first(cljs.core.next(arglist__3698));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3698)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3698)));
return G__3697__delegate.call(this, x, y, z, args);
});
return G__3697;
})()
;
G__3690 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3690__3691.call(this);
case  1 :
return G__3690__3692.call(this,x);
case  2 :
return G__3690__3693.call(this,x,y);
case  3 :
return G__3690__3694.call(this,x,y,z);
default:
return G__3690__3695.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3690.cljs$lang$maxFixedArity = 3;
G__3690.cljs$lang$applyTo = G__3690__3695.cljs$lang$applyTo;
return G__3690;
})()
});
var juxt__3670 = (function() { 
var G__3699__delegate = function (f,g,h,fs){
var fs__3666 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3700 = null;
var G__3700__3701 = (function (){
return cljs.core.reduce.call(null,(function (p1__3649_SHARP_,p2__3650_SHARP_){
return cljs.core.conj.call(null,p1__3649_SHARP_,p2__3650_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3666);
});
var G__3700__3702 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3651_SHARP_,p2__3652_SHARP_){
return cljs.core.conj.call(null,p1__3651_SHARP_,p2__3652_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3666);
});
var G__3700__3703 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3653_SHARP_,p2__3654_SHARP_){
return cljs.core.conj.call(null,p1__3653_SHARP_,p2__3654_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3666);
});
var G__3700__3704 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3655_SHARP_,p2__3656_SHARP_){
return cljs.core.conj.call(null,p1__3655_SHARP_,p2__3656_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3666);
});
var G__3700__3705 = (function() { 
var G__3707__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3657_SHARP_,p2__3658_SHARP_){
return cljs.core.conj.call(null,p1__3657_SHARP_,cljs.core.apply.call(null,p2__3658_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3666);
};
var G__3707 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3707__delegate.call(this, x, y, z, args);
};
G__3707.cljs$lang$maxFixedArity = 3;
G__3707.cljs$lang$applyTo = (function (arglist__3708){
var x = cljs.core.first(arglist__3708);
var y = cljs.core.first(cljs.core.next(arglist__3708));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3708)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3708)));
return G__3707__delegate.call(this, x, y, z, args);
});
return G__3707;
})()
;
G__3700 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3700__3701.call(this);
case  1 :
return G__3700__3702.call(this,x);
case  2 :
return G__3700__3703.call(this,x,y);
case  3 :
return G__3700__3704.call(this,x,y,z);
default:
return G__3700__3705.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3700.cljs$lang$maxFixedArity = 3;
G__3700.cljs$lang$applyTo = G__3700__3705.cljs$lang$applyTo;
return G__3700;
})()
};
var G__3699 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3699__delegate.call(this, f, g, h, fs);
};
G__3699.cljs$lang$maxFixedArity = 3;
G__3699.cljs$lang$applyTo = (function (arglist__3709){
var f = cljs.core.first(arglist__3709);
var g = cljs.core.first(cljs.core.next(arglist__3709));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3709)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3709)));
return G__3699__delegate.call(this, f, g, h, fs);
});
return G__3699;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3667.call(this,f);
case  2 :
return juxt__3668.call(this,f,g);
case  3 :
return juxt__3669.call(this,f,g,h);
default:
return juxt__3670.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3670.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3711 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3714 = cljs.core.next.call(null,coll);
coll = G__3714;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3712 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3710 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3710))
{return (n > 0);
} else
{return and__3546__auto____3710;
}
})()))
{{
var G__3715 = (n - 1);
var G__3716 = cljs.core.next.call(null,coll);
n = G__3715;
coll = G__3716;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3711.call(this,n);
case  2 :
return dorun__3712.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3717 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3718 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3717.call(this,n);
case  2 :
return doall__3718.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3720 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3720),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3720),1)))
{return cljs.core.first.call(null,matches__3720);
} else
{return cljs.core.vec.call(null,matches__3720);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3721 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3721)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3721),1)))
{return cljs.core.first.call(null,matches__3721);
} else
{return cljs.core.vec.call(null,matches__3721);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3722 = cljs.core.re_find.call(null,re,s);
var match_idx__3723 = s.search(re);
var match_str__3724 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3722))?cljs.core.first.call(null,match_data__3722):match_data__3722);
var post_match__3725 = cljs.core.subs.call(null,s,(match_idx__3723 + cljs.core.count.call(null,match_str__3724)));

if(cljs.core.truth_(match_data__3722))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3722,re_seq.call(null,re,post_match__3725));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3726_SHARP_){
return print_one.call(null,p1__3726_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3727 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3727))
{var and__3546__auto____3731 = (function (){var x__321__auto____3728 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3729 = x__321__auto____3728;

if(cljs.core.truth_(and__3546__auto____3729))
{var and__3546__auto____3730 = x__321__auto____3728.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3730))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____3728));
} else
{return and__3546__auto____3730;
}
} else
{return and__3546__auto____3729;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__321__auto____3728);
}
})();

if(cljs.core.truth_(and__3546__auto____3731))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3731;
}
} else
{return and__3546__auto____3727;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__321__auto____3732 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3733 = x__321__auto____3732;

if(cljs.core.truth_(and__3546__auto____3733))
{var and__3546__auto____3734 = x__321__auto____3732.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____3734))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__321__auto____3732));
} else
{return and__3546__auto____3734;
}
} else
{return and__3546__auto____3733;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__321__auto____3732);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3735 = cljs.core.first.call(null,objs);
var sb__3736 = (new goog.string.StringBuffer());

var G__3737__3738 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3737__3738))
{var obj__3739 = cljs.core.first.call(null,G__3737__3738);
var G__3737__3740 = G__3737__3738;

while(true){
if(cljs.core.truth_((obj__3739 === first_obj__3735)))
{} else
{sb__3736.append(" ");
}
var G__3741__3742 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3739,opts));

if(cljs.core.truth_(G__3741__3742))
{var string__3743 = cljs.core.first.call(null,G__3741__3742);
var G__3741__3744 = G__3741__3742;

while(true){
sb__3736.append(string__3743);
var temp__3698__auto____3745 = cljs.core.next.call(null,G__3741__3744);

if(cljs.core.truth_(temp__3698__auto____3745))
{var G__3741__3746 = temp__3698__auto____3745;

{
var G__3749 = cljs.core.first.call(null,G__3741__3746);
var G__3750 = G__3741__3746;
string__3743 = G__3749;
G__3741__3744 = G__3750;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3747 = cljs.core.next.call(null,G__3737__3740);

if(cljs.core.truth_(temp__3698__auto____3747))
{var G__3737__3748 = temp__3698__auto____3747;

{
var G__3751 = cljs.core.first.call(null,G__3737__3748);
var G__3752 = G__3737__3748;
obj__3739 = G__3751;
G__3737__3740 = G__3752;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__3736);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3753 = cljs.core.first.call(null,objs);

var G__3754__3755 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3754__3755))
{var obj__3756 = cljs.core.first.call(null,G__3754__3755);
var G__3754__3757 = G__3754__3755;

while(true){
if(cljs.core.truth_((obj__3756 === first_obj__3753)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3758__3759 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3756,opts));

if(cljs.core.truth_(G__3758__3759))
{var string__3760 = cljs.core.first.call(null,G__3758__3759);
var G__3758__3761 = G__3758__3759;

while(true){
cljs.core.string_print.call(null,string__3760);
var temp__3698__auto____3762 = cljs.core.next.call(null,G__3758__3761);

if(cljs.core.truth_(temp__3698__auto____3762))
{var G__3758__3763 = temp__3698__auto____3762;

{
var G__3766 = cljs.core.first.call(null,G__3758__3763);
var G__3767 = G__3758__3763;
string__3760 = G__3766;
G__3758__3761 = G__3767;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3764 = cljs.core.next.call(null,G__3754__3757);

if(cljs.core.truth_(temp__3698__auto____3764))
{var G__3754__3765 = temp__3698__auto____3764;

{
var G__3768 = cljs.core.first.call(null,G__3754__3765);
var G__3769 = G__3754__3765;
obj__3756 = G__3768;
G__3754__3757 = G__3769;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3770){
var objs = cljs.core.seq( arglist__3770 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3771){
var objs = cljs.core.seq( arglist__3771 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3772){
var objs = cljs.core.seq( arglist__3772 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3773){
var objs = cljs.core.seq( arglist__3773 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3774){
var objs = cljs.core.seq( arglist__3774 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3775 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3775,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3776 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3776))
{var nspc__3777 = temp__3698__auto____3776;

return cljs.core.str.call(null,nspc__3777,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3778 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3778))
{var nspc__3779 = temp__3698__auto____3778;

return cljs.core.str.call(null,nspc__3779,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3780 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3780,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__3781 = this;
var G__3782__3783 = cljs.core.seq.call(null,this__3781.watches);

if(cljs.core.truth_(G__3782__3783))
{var G__3785__3787 = cljs.core.first.call(null,G__3782__3783);
var vec__3786__3788 = G__3785__3787;
var key__3789 = cljs.core.nth.call(null,vec__3786__3788,0,null);
var f__3790 = cljs.core.nth.call(null,vec__3786__3788,1,null);
var G__3782__3791 = G__3782__3783;

var G__3785__3792 = G__3785__3787;
var G__3782__3793 = G__3782__3791;

while(true){
var vec__3794__3795 = G__3785__3792;
var key__3796 = cljs.core.nth.call(null,vec__3794__3795,0,null);
var f__3797 = cljs.core.nth.call(null,vec__3794__3795,1,null);
var G__3782__3798 = G__3782__3793;

f__3797.call(null,key__3796,this$,oldval,newval);
var temp__3698__auto____3799 = cljs.core.next.call(null,G__3782__3798);

if(cljs.core.truth_(temp__3698__auto____3799))
{var G__3782__3800 = temp__3698__auto____3799;

{
var G__3807 = cljs.core.first.call(null,G__3782__3800);
var G__3808 = G__3782__3800;
G__3785__3792 = G__3807;
G__3782__3793 = G__3808;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__3801 = this;
return this$.watches = cljs.core.assoc.call(null,this__3801.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__3802 = this;
return this$.watches = cljs.core.dissoc.call(null,this__3802.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3803 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3803.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3804 = this;
return this__3804.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3805 = this;
return this__3805.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3806 = this;
return (o === other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3815 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__3816 = (function() { 
var G__3818__delegate = function (x,p__3809){
var map__3810__3811 = p__3809;
var map__3810__3812 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3810__3811))?cljs.core.apply.call(null,cljs.core.hash_map,map__3810__3811):map__3810__3811);
var validator__3813 = cljs.core.get.call(null,map__3810__3812,"﷐'validator");
var meta__3814 = cljs.core.get.call(null,map__3810__3812,"﷐'meta");

return (new cljs.core.Atom(x,meta__3814,validator__3813,null));
};
var G__3818 = function (x,var_args){
var p__3809 = null;
if (goog.isDef(var_args)) {
  p__3809 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3818__delegate.call(this, x, p__3809);
};
G__3818.cljs$lang$maxFixedArity = 1;
G__3818.cljs$lang$applyTo = (function (arglist__3819){
var x = cljs.core.first(arglist__3819);
var p__3809 = cljs.core.rest(arglist__3819);
return G__3818__delegate.call(this, x, p__3809);
});
return G__3818;
})()
;
atom = function(x,var_args){
var p__3809 = var_args;
switch(arguments.length){
case  1 :
return atom__3815.call(this,x);
default:
return atom__3816.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3816.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____3820 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3820))
{var validate__3821 = temp__3698__auto____3820;

if(cljs.core.truth_(validate__3821.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",2934))))));
}
} else
{}
var old_value__3822 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__3822,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3823 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3824 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3825 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3826 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3827 = (function() { 
var G__3829__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3829 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3829__delegate.call(this, a, f, x, y, z, more);
};
G__3829.cljs$lang$maxFixedArity = 5;
G__3829.cljs$lang$applyTo = (function (arglist__3830){
var a = cljs.core.first(arglist__3830);
var f = cljs.core.first(cljs.core.next(arglist__3830));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3830)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3830))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3830)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3830)))));
return G__3829__delegate.call(this, a, f, x, y, z, more);
});
return G__3829;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3823.call(this,a,f);
case  3 :
return swap_BANG___3824.call(this,a,f,x);
case  4 :
return swap_BANG___3825.call(this,a,f,x,y);
case  5 :
return swap_BANG___3826.call(this,a,f,x,y,z);
default:
return swap_BANG___3827.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3827.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3831){
var iref = cljs.core.first(arglist__3831);
var f = cljs.core.first(cljs.core.next(arglist__3831));
var args = cljs.core.rest(cljs.core.next(arglist__3831));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3832 = (function (){
return gensym.call(null,"G__");
});
var gensym__3833 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3832.call(this);
case  1 :
return gensym__3833.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3835 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3835.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3836 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3836.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3836.state,this__3836.f);
}
return cljs.core.deref.call(null,this__3836.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3837){
var body = cljs.core.seq( arglist__3837 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3838__3839 = options;
var map__3838__3840 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3838__3839))?cljs.core.apply.call(null,cljs.core.hash_map,map__3838__3839):map__3838__3839);
var keywordize_keys__3841 = cljs.core.get.call(null,map__3838__3840,"﷐'keywordize-keys");
var keyfn__3842 = (cljs.core.truth_(keywordize_keys__3841)?cljs.core.keyword:cljs.core.str);
var f__3848 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__385__auto____3847 = (function iter__3843(s__3844){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3844__3845 = s__3844;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3844__3845)))
{var k__3846 = cljs.core.first.call(null,s__3844__3845);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3842.call(null,k__3846),thisfn.call(null,(x[k__3846]))]),iter__3843.call(null,cljs.core.rest.call(null,s__3844__3845)));
} else
{return null;
}
break;
}
})));
});

return iter__385__auto____3847.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3848.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3849){
var x = cljs.core.first(arglist__3849);
var options = cljs.core.rest(arglist__3849);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3850 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3854__delegate = function (args){
var temp__3695__auto____3851 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3850),args);

if(cljs.core.truth_(temp__3695__auto____3851))
{var v__3852 = temp__3695__auto____3851;

return v__3852;
} else
{var ret__3853 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3850,cljs.core.assoc,args,ret__3853);
return ret__3853;
}
};
var G__3854 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3854__delegate.call(this, args);
};
G__3854.cljs$lang$maxFixedArity = 0;
G__3854.cljs$lang$applyTo = (function (arglist__3855){
var args = cljs.core.seq( arglist__3855 );;
return G__3854__delegate.call(this, args);
});
return G__3854;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__3857 = (function (f){
while(true){
var ret__3856 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3856)))
{{
var G__3860 = ret__3856;
f = G__3860;
continue;
}
} else
{return ret__3856;
}
break;
}
});
var trampoline__3858 = (function() { 
var G__3861__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3861 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3861__delegate.call(this, f, args);
};
G__3861.cljs$lang$maxFixedArity = 1;
G__3861.cljs$lang$applyTo = (function (arglist__3862){
var f = cljs.core.first(arglist__3862);
var args = cljs.core.rest(arglist__3862);
return G__3861__delegate.call(this, f, args);
});
return G__3861;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3857.call(this,f);
default:
return trampoline__3858.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3858.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3863 = (function (){
return rand.call(null,1);
});
var rand__3864 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3863.call(this);
case  1 :
return rand__3864.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__3866 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3866,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3866,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___3875 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3876 = (function (h,child,parent){
var or__3548__auto____3867 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____3867))
{return or__3548__auto____3867;
} else
{var or__3548__auto____3868 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____3868))
{return or__3548__auto____3868;
} else
{var and__3546__auto____3869 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____3869))
{var and__3546__auto____3870 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____3870))
{var and__3546__auto____3871 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____3871))
{var ret__3872 = true;
var i__3873 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3874 = cljs.core.not.call(null,ret__3872);

if(cljs.core.truth_(or__3548__auto____3874))
{return or__3548__auto____3874;
} else
{return cljs.core._EQ_.call(null,i__3873,cljs.core.count.call(null,parent));
}
})()))
{return ret__3872;
} else
{{
var G__3878 = isa_QMARK_.call(null,h,child.call(null,i__3873),parent.call(null,i__3873));
var G__3879 = (i__3873 + 1);
ret__3872 = G__3878;
i__3873 = G__3879;
continue;
}
}
break;
}
} else
{return and__3546__auto____3871;
}
} else
{return and__3546__auto____3870;
}
} else
{return and__3546__auto____3869;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3875.call(this,h,child);
case  3 :
return isa_QMARK___3876.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__3880 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3881 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3880.call(this,h);
case  2 :
return parents__3881.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__3883 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3884 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3883.call(this,h);
case  2 :
return ancestors__3884.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__3886 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3887 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3886.call(this,h);
case  2 :
return descendants__3887.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__3897 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3226))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3898 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3230))))));
}
var tp__3892 = "﷐'parents".call(null,h);
var td__3893 = "﷐'descendants".call(null,h);
var ta__3894 = "﷐'ancestors".call(null,h);
var tf__3895 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____3896 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3892.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3894.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3894.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3892,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3895.call(null,"﷐'ancestors".call(null,h),tag,td__3893,parent,ta__3894),"﷐'descendants":tf__3895.call(null,"﷐'descendants".call(null,h),parent,ta__3894,tag,td__3893)});
})());

if(cljs.core.truth_(or__3548__auto____3896))
{return or__3548__auto____3896;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3897.call(this,h,tag);
case  3 :
return derive__3898.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__3904 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3905 = (function (h,tag,parent){
var parentMap__3900 = "﷐'parents".call(null,h);
var childsParents__3901 = (cljs.core.truth_(parentMap__3900.call(null,tag))?cljs.core.disj.call(null,parentMap__3900.call(null,tag),parent):cljs.core.set([]));
var newParents__3902 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3901))?cljs.core.assoc.call(null,parentMap__3900,tag,childsParents__3901):cljs.core.dissoc.call(null,parentMap__3900,tag));
var deriv_seq__3903 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3889_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3889_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3889_SHARP_),cljs.core.second.call(null,p1__3889_SHARP_)));
}),cljs.core.seq.call(null,newParents__3902)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3900.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3890_SHARP_,p2__3891_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3890_SHARP_,p2__3891_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3903));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3904.call(this,h,tag);
case  3 :
return underive__3905.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__3907 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____3909 = (cljs.core.truth_((function (){var and__3546__auto____3908 = xprefs__3907;

if(cljs.core.truth_(and__3546__auto____3908))
{return xprefs__3907.call(null,y);
} else
{return and__3546__auto____3908;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____3909))
{return or__3548__auto____3909;
} else
{var or__3548__auto____3911 = (function (){var ps__3910 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3910) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3910),prefer_table)))
{} else
{}
{
var G__3914 = cljs.core.rest.call(null,ps__3910);
ps__3910 = G__3914;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3911))
{return or__3548__auto____3911;
} else
{var or__3548__auto____3913 = (function (){var ps__3912 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3912) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3912),y,prefer_table)))
{} else
{}
{
var G__3915 = cljs.core.rest.call(null,ps__3912);
ps__3912 = G__3915;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3913))
{return or__3548__auto____3913;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____3916 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____3916))
{return or__3548__auto____3916;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3925 = cljs.core.reduce.call(null,(function (be,p__3917){
var vec__3918__3919 = p__3917;
var k__3920 = cljs.core.nth.call(null,vec__3918__3919,0,null);
var ___3921 = cljs.core.nth.call(null,vec__3918__3919,1,null);
var e__3922 = vec__3918__3919;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3920)))
{var be2__3924 = (cljs.core.truth_((function (){var or__3548__auto____3923 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____3923))
{return or__3548__auto____3923;
} else
{return cljs.core.dominates.call(null,k__3920,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3922:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3924),k__3920,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3920," and ",cljs.core.first.call(null,be2__3924),", and neither is preferred")));
}
return be2__3924;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3925))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3925));
return cljs.core.second.call(null,best_entry__3925);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3926 = mf;

if(cljs.core.truth_(and__3546__auto____3926))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____3926;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____3927 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3927))
{return or__3548__auto____3927;
} else
{var or__3548__auto____3928 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____3928))
{return or__3548__auto____3928;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____3929 = mf;

if(cljs.core.truth_(and__3546__auto____3929))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____3929;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____3930 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3930))
{return or__3548__auto____3930;
} else
{var or__3548__auto____3931 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____3931))
{return or__3548__auto____3931;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3932 = mf;

if(cljs.core.truth_(and__3546__auto____3932))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____3932;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3933 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3933))
{return or__3548__auto____3933;
} else
{var or__3548__auto____3934 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____3934))
{return or__3548__auto____3934;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____3935 = mf;

if(cljs.core.truth_(and__3546__auto____3935))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____3935;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____3936 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3936))
{return or__3548__auto____3936;
} else
{var or__3548__auto____3937 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____3937))
{return or__3548__auto____3937;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3938 = mf;

if(cljs.core.truth_(and__3546__auto____3938))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____3938;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3939 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3939))
{return or__3548__auto____3939;
} else
{var or__3548__auto____3940 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____3940))
{return or__3548__auto____3940;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3941 = mf;

if(cljs.core.truth_(and__3546__auto____3941))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____3941;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____3942 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3942))
{return or__3548__auto____3942;
} else
{var or__3548__auto____3943 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____3943))
{return or__3548__auto____3943;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3944 = mf;

if(cljs.core.truth_(and__3546__auto____3944))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____3944;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____3945 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3945))
{return or__3548__auto____3945;
} else
{var or__3548__auto____3946 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____3946))
{return or__3548__auto____3946;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____3947 = mf;

if(cljs.core.truth_(and__3546__auto____3947))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____3947;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____3948 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3948))
{return or__3548__auto____3948;
} else
{var or__3548__auto____3949 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3949))
{return or__3548__auto____3949;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3950 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3951 = cljs.core._get_method.call(null,mf,dispatch_val__3950);

if(cljs.core.truth_(target_fn__3951))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3950)));
}
return cljs.core.apply.call(null,target_fn__3951,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3952 = this;
cljs.core.swap_BANG_.call(null,this__3952.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3952.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3952.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3952.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3953 = this;
cljs.core.swap_BANG_.call(null,this__3953.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3953.method_cache,this__3953.method_table,this__3953.cached_hierarchy,this__3953.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3954 = this;
cljs.core.swap_BANG_.call(null,this__3954.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3954.method_cache,this__3954.method_table,this__3954.cached_hierarchy,this__3954.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3955 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3955.cached_hierarchy),cljs.core.deref.call(null,this__3955.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3955.method_cache,this__3955.method_table,this__3955.cached_hierarchy,this__3955.hierarchy);
}
var temp__3695__auto____3956 = cljs.core.deref.call(null,this__3955.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____3956))
{var target_fn__3957 = temp__3695__auto____3956;

return target_fn__3957;
} else
{var temp__3695__auto____3958 = cljs.core.find_and_cache_best_method.call(null,this__3955.name,dispatch_val,this__3955.hierarchy,this__3955.method_table,this__3955.prefer_table,this__3955.method_cache,this__3955.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____3958))
{var target_fn__3959 = temp__3695__auto____3958;

return target_fn__3959;
} else
{return cljs.core.deref.call(null,this__3955.method_table).call(null,this__3955.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3960 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3960.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__3960.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__3960.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3960.method_cache,this__3960.method_table,this__3960.cached_hierarchy,this__3960.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3961 = this;
return cljs.core.deref.call(null,this__3961.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3962 = this;
return cljs.core.deref.call(null,this__3962.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3963 = this;
return cljs.core.do_invoke.call(null,mf,this__3963.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3964__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3964 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3964__delegate.call(this, _, args);
};
G__3964.cljs$lang$maxFixedArity = 1;
G__3964.cljs$lang$applyTo = (function (arglist__3965){
var _ = cljs.core.first(arglist__3965);
var args = cljs.core.rest(arglist__3965);
return G__3964__delegate.call(this, _, args);
});
return G__3964;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
