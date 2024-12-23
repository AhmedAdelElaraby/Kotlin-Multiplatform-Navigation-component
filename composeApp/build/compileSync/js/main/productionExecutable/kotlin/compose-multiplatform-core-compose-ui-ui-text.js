(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-runtime-runtime-saveable.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-util.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-runtime-runtime-saveable.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'), require('./skiko-kjs.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime-saveable' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime-saveable' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-text'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-runtime-runtime-saveable'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-util'], globalThis['skiko-kjs']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_runtime_runtime_saveable, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.kb;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var emptyList = kotlin_kotlin.$_$.r5;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var VOID = kotlin_kotlin.$_$.e;
  var toString = kotlin_kotlin.$_$.ob;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var toString_0 = kotlin_kotlin.$_$.ig;
  var hashCode = kotlin_kotlin.$_$.ja;
  var getStringHashCode = kotlin_kotlin.$_$.ia;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var equals = kotlin_kotlin.$_$.ba;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var initMetadataForCompanion = kotlin_kotlin.$_$.la;
  var FunctionAdapter = kotlin_kotlin.$_$.p9;
  var isInterface = kotlin_kotlin.$_$.za;
  var Comparator = kotlin_kotlin.$_$.oe;
  var compareValues = kotlin_kotlin.$_$.t8;
  var sortedWith = kotlin_kotlin.$_$.x7;
  var charSequenceGet = kotlin_kotlin.$_$.w9;
  var CharSequence = kotlin_kotlin.$_$.ke;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var coerceIn = kotlin_kotlin.$_$.dc;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var coerceAtLeast = kotlin_kotlin.$_$.yb;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var get_lastIndex = kotlin_kotlin.$_$.q6;
  var addAll = kotlin_kotlin.$_$.w4;
  var plus = kotlin_kotlin.$_$.m7;
  var last = kotlin_kotlin.$_$.w6;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i2;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l;
  var BlendMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.o3;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var getNumberHashCode = kotlin_kotlin.$_$.ga;
  var compareTo = kotlin_kotlin.$_$.z9;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.h;
  var lazy = kotlin_kotlin.$_$.vf;
  var KProperty1 = kotlin_kotlin.$_$.kc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ha;
  var numberToInt = kotlin_kotlin.$_$.hb;
  var initMetadataForInterface = kotlin_kotlin.$_$.na;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d3;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var TextUnit__hashCode_impl_qsmeov = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.g1;
  var TextUnit__toString_impl_51ghw0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var get_isUnspecified = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c1;
  var Enum = kotlin_kotlin.$_$.pe;
  var Saver = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.b;
  var arrayListOf = kotlin_kotlin.$_$.y4;
  var KtList = kotlin_kotlin.$_$.o4;
  var ensureNotNull = kotlin_kotlin.$_$.pf;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.xf;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s2;
  var Shadow = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c2;
  var Long = kotlin_kotlin.$_$.ue;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.b3;
  var toArgb = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l1;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j;
  var _TextUnit___get_type__impl__uc2olt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var TextUnitType = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var TextUnit_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var Saver_0 = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.a;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a2;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b2;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j2;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j1;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var IntSize__toString_impl_54w9zl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var getBooleanHashCode = kotlin_kotlin.$_$.ea;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q1;
  var Constraints__toString_impl_37yskr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var toLong = kotlin_kotlin.$_$.mb;
  var fillArrayVal = kotlin_kotlin.$_$.ca;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.r;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var first = kotlin_kotlin.$_$.c6;
  var KtMap = kotlin_kotlin.$_$.q4;
  var KtMutableMap = kotlin_kotlin.$_$.u4;
  var MutableCollection = kotlin_kotlin.$_$.r4;
  var println = kotlin_kotlin.$_$.o9;
  var copyOf = kotlin_kotlin.$_$.p5;
  var copyOf_0 = kotlin_kotlin.$_$.o5;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var arrayCopy = kotlin_kotlin.$_$.x4;
  var ClassCastException = kotlin_kotlin.$_$.me;
  var NullPointerException = kotlin_kotlin.$_$.xe;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.f1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var Exception = kotlin_kotlin.$_$.re;
  var IllegalStateException = kotlin_kotlin.$_$.te;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.w1;
  var captureStack = kotlin_kotlin.$_$.u9;
  var CoroutineImpl = kotlin_kotlin.$_$.l9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ma;
  var initMetadataForLambda = kotlin_kotlin.$_$.oa;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var get_indices = kotlin_kotlin.$_$.m6;
  var yield_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.x1;
  var CancellationException = kotlin_kotlin.$_$.v8;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.a9;
  var Element = kotlin_kotlin.$_$.j9;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.k3;
  var Key_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var to = kotlin_kotlin.$_$.jg;
  var mutableListOf = kotlin_kotlin.$_$.h7;
  var Companion_instance = kotlin_kotlin.$_$.y3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.q2;
  var createFailure = kotlin_kotlin.$_$.of;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.t2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.s2;
  var KMutableProperty1 = kotlin_kotlin.$_$.ic;
  var listOf = kotlin_kotlin.$_$.b7;
  var Comparable = kotlin_kotlin.$_$.ne;
  var Collection = kotlin_kotlin.$_$.n4;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var fastJoinToString = kotlin_org_jetbrains_compose_ui_ui_util.$_$.b;
  var initMetadataForObject = kotlin_kotlin.$_$.pa;
  var ShaderBrush = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y;
  var isNaN_0 = kotlin_kotlin.$_$.tf;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z1;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h2;
  var toList = kotlin_kotlin.$_$.i8;
  var CharDirection_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y3;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var currentNanoTime = kotlin_org_jetbrains_skiko_skiko.$_$.f5;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.w3;
  var isLowSurrogate = kotlin_kotlin.$_$.md;
  var isHighSurrogate = kotlin_kotlin.$_$.ld;
  var charSequenceLength = kotlin_kotlin.$_$.x9;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.o2;
  var sequence = kotlin_kotlin.$_$.vc;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.n2;
  var SequenceScope = kotlin_kotlin.$_$.lc;
  var numberRangeToNumber = kotlin_kotlin.$_$.fb;
  var lazy_0 = kotlin_kotlin.$_$.wf;
  var FontRastrSettings = kotlin_org_jetbrains_skiko_skiko.$_$.o4;
  var FontEdging_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l2;
  var FontEdging_ANTI_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m2;
  var FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n2;
  var FontHinting_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p2;
  var FontHinting_SLIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r2;
  var FontHinting_NORMAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q2;
  var FontHinting_FULL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o2;
  var asList = kotlin_kotlin.$_$.z4;
  var binarySearch = kotlin_kotlin.$_$.d5;
  var get_lastIndex_0 = kotlin_kotlin.$_$.r6;
  var coerceAtMost = kotlin_kotlin.$_$.ac;
  var RectHeightMode_STRUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x;
  var RectWidthMode_TIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y;
  var firstOrNull = kotlin_kotlin.$_$.a6;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var lastOrNull = kotlin_kotlin.$_$.v6;
  var toComposeRect = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m1;
  var RectHeightMode_MAX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w;
  var asSkiaPath = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b1;
  var getOrNull = kotlin_kotlin.$_$.f6;
  var isWhitespace = kotlin_kotlin.$_$.nd;
  var get_nativeCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j1;
  var LineMetrics = kotlin_org_jetbrains_skiko_skiko.$_$.p4;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.j2;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.o3;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w2;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.u3;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.e4;
  var copyToArray = kotlin_kotlin.$_$.q5;
  var Size__toString_impl_o87ni8 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var BlendMode__toString_impl_uuibkd = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x1;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var BlendMode__hashCode_impl_93ceri = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w1;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.g4;
  var DecorationLineStyle_SOLID_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k;
  var DecorationStyle = kotlin_org_jetbrains_skiko_skiko.$_$.n4;
  var Shadow_0 = kotlin_org_jetbrains_skiko_skiko.$_$.t4;
  var _TextUnit___get_isSp__impl__8c3r6q = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var _TextUnit___get_isEm__impl__esrmtl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var DecorationLineStyle_WAVY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l;
  var DecorationLineStyle_DASHED_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h;
  var DecorationLineStyle_DOTTED_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i;
  var DecorationLineStyle_DOUBLE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.eg;
  var sortWith = kotlin_kotlin.$_$.v7;
  var asReversed = kotlin_kotlin.$_$.a5;
  var ParagraphStyle = kotlin_org_jetbrains_skiko_skiko.$_$.r4;
  var HeightMode_DISABLE_ALL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p;
  var TextIndent = kotlin_org_jetbrains_skiko_skiko.$_$.u4;
  var Font_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.s3;
  var ParagraphBuilder = kotlin_org_jetbrains_skiko_skiko.$_$.q4;
  var charSequenceSubSequence = kotlin_kotlin.$_$.y9;
  var BaselineMode_ALPHABETIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g;
  var PlaceholderStyle = kotlin_org_jetbrains_skiko_skiko.$_$.s4;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f1;
  var PlaceholderAlignment_MIDDLE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u;
  var PlaceholderAlignment_BOTTOM_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t;
  var PlaceholderAlignment_TOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v;
  var PlaceholderAlignment_ABOVE_BASELINE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s;
  var Alignment_START_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f;
  var Alignment_END_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b;
  var Alignment_JUSTIFY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c;
  var Alignment_CENTER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a;
  var Alignment_RIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e;
  var Alignment_LEFT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d;
  var HeightMode_ALL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o;
  var HeightMode_DISABLE_LAST_DESCENT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r;
  var HeightMode_DISABLE_FIRST_ASCENT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q;
  var Direction_LTR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m;
  var Direction_RTL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n;
  var KProperty0 = kotlin_kotlin.$_$.jc;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var listOf_0 = kotlin_kotlin.$_$.a7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f5;
  var FontCollection_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.n3;
  var TypefaceFontProviderWithFallback_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.p3;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var FontMgrWithFallback = kotlin_org_jetbrains_skiko_skiko.$_$.y4;
  var first_0 = kotlin_kotlin.$_$.d6;
  var mapOf = kotlin_kotlin.$_$.d7;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l2;
  var firstOrNull_0 = kotlin_kotlin.$_$.z5;
  var Paint = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var coerceIn_0 = kotlin_kotlin.$_$.cc;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q2;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c;
  var setOf = kotlin_kotlin.$_$.t7;
  var get_hostOs = kotlin_org_jetbrains_skiko_skiko.$_$.h5;
  var Companion_getInstance_10 = kotlin_org_jetbrains_skiko_skiko.$_$.f4;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.d4;
  var FontSlant_UPRIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t2;
  var FontSlant_ITALIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s2;
  var FontStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.t3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Range, 'Range');
  initMetadataForCompanion(Companion);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(AnnotatedString, 'AnnotatedString', VOID, VOID, [CharSequence]);
  initMetadataForClass(LinkAnnotation, 'LinkAnnotation');
  initMetadataForClass(Url, 'Url', VOID, LinkAnnotation);
  initMetadataForClass(Clickable, 'Clickable', VOID, LinkAnnotation);
  initMetadataForClass(MultiParagraph, 'MultiParagraph');
  initMetadataForClass(ParagraphInfo, 'ParagraphInfo');
  function get_hasStaleResolvedFonts() {
    return false;
  }
  initMetadataForInterface(ParagraphIntrinsics, 'ParagraphIntrinsics');
  initMetadataForClass(MultiParagraphIntrinsics, 'MultiParagraphIntrinsics', VOID, VOID, [ParagraphIntrinsics]);
  initMetadataForClass(ParagraphIntrinsicInfo, 'ParagraphIntrinsicInfo');
  initMetadataForClass(ParagraphStyle_0, 'ParagraphStyle');
  initMetadataForClass(Placeholder, 'Placeholder');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(AnnotationType, 'AnnotationType', VOID, Enum);
  initMetadataForInterface(NonNullValueClassSaver, 'NonNullValueClassSaver', VOID, VOID, [Saver]);
  initMetadataForClass(NonNullValueClassSaver$1, VOID, VOID, VOID, [NonNullValueClassSaver]);
  initMetadataForClass(SpanStyle, 'SpanStyle');
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(TextLayoutResult, 'TextLayoutResult');
  initMetadataForClass(TextLayoutInput, 'TextLayoutInput');
  initMetadataForClass(TextLinkStyles, 'TextLinkStyles', TextLinkStyles);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(TextRange, 'TextRange');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(TextStyle, 'TextStyle');
  initMetadataForClass(TtsAnnotation, 'TtsAnnotation');
  initMetadataForClass(VerbatimTtsAnnotation, 'VerbatimTtsAnnotation', VOID, TtsAnnotation);
  initMetadataForClass(UrlAnnotation, 'UrlAnnotation');
  initMetadataForClass(LruCache, 'LruCache');
  initMetadataForClass(SimpleArrayMap, 'SimpleArrayMap', SimpleArrayMap_init_$Create$);
  function get_loadingStrategy() {
    return Companion_getInstance_19().z4s_1;
  }
  initMetadataForInterface(Font, 'Font');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(FontFamily, 'FontFamily');
  initMetadataForClass(SystemFontFamily, 'SystemFontFamily', VOID, FontFamily);
  initMetadataForClass(DefaultFontFamily, 'DefaultFontFamily', VOID, SystemFontFamily);
  initMetadataForClass(GenericFontFamily, 'GenericFontFamily', VOID, SystemFontFamily);
  initMetadataForClass(FileBasedFontFamily, 'FileBasedFontFamily', VOID, FontFamily);
  initMetadataForClass(FontListFontFamily, 'FontListFontFamily', VOID, FileBasedFontFamily, [FileBasedFontFamily, KtList]);
  initMetadataForClass(LoadedFontFamily, 'LoadedFontFamily', VOID, FontFamily);
  initMetadataForClass(TypefaceRequestCache, 'TypefaceRequestCache', TypefaceRequestCache);
  initMetadataForClass(TypefaceRequest, 'TypefaceRequest');
  initMetadataForClass(Immutable, 'Immutable');
  initMetadataForClass(Async, 'Async');
  initMetadataForClass(FontLoadFailedException, 'FontLoadFailedException', VOID, IllegalStateException);
  initMetadataForClass(FontFamilyResolverImpl, 'FontFamilyResolverImpl', VOID, VOID, VOID, [1]);
  function interceptFontFamily(fontFamily) {
    return fontFamily;
  }
  function interceptFontWeight(fontWeight) {
    return fontWeight;
  }
  function interceptFontStyle(fontStyle) {
    return fontStyle;
  }
  function interceptFontSynthesis(fontSynthesis) {
    return fontSynthesis;
  }
  initMetadataForInterface(PlatformResolveInterceptor, 'PlatformResolveInterceptor');
  initMetadataForClass(PlatformResolveInterceptor$Companion$Default$1, VOID, VOID, VOID, [PlatformResolveInterceptor]);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(AsyncTypefaceResult, 'AsyncTypefaceResult');
  initMetadataForClass(Key, 'Key');
  initMetadataForCoroutine($runCachedCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(AsyncTypefaceCache, 'AsyncTypefaceCache', AsyncTypefaceCache, VOID, VOID, [4]);
  initMetadataForLambda(AsyncFontListLoader$load$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AsyncFontListLoader$loadWithTimeoutOrNull$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($loadCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($loadWithTimeoutOrNullCOROUTINE$3, CoroutineImpl);
  initMetadataForClass(AsyncFontListLoader, 'AsyncFontListLoader', VOID, VOID, VOID, [0]);
  initMetadataForClass(FontListFontFamilyTypefaceAdapter$Companion$DropExceptionHandler$$inlined$CoroutineExceptionHandler$1, VOID, VOID, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Element]);
  initMetadataForCompanion(Companion_5);
  initMetadataForLambda(FontListFontFamilyTypefaceAdapter$resolve$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(FontListFontFamilyTypefaceAdapter, 'FontListFontFamilyTypefaceAdapter', FontListFontFamilyTypefaceAdapter, VOID, VOID, [2]);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(FontMatcher, 'FontMatcher', FontMatcher);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(FontStyle, 'FontStyle');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(FontSynthesis, 'FontSynthesis');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(FontWeight, 'FontWeight', VOID, VOID, [Comparable]);
  initMetadataForClass(TextInputService, 'TextInputService');
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(Locale, 'Locale');
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(LocaleList, 'LocaleList', VOID, VOID, [Collection]);
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(BaselineShift, 'BaselineShift');
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(Hyphens, 'Hyphens');
  initMetadataForCompanion(Companion_14);
  initMetadataForCompanion(Companion_15);
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(LineHeightStyle, 'LineHeightStyle');
  initMetadataForClass(ResolvedTextDirection, 'ResolvedTextDirection', VOID, Enum);
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(TextAlign, 'TextAlign');
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(TextDecoration, 'TextDecoration');
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(TextDirection, 'TextDirection');
  function merge(other) {
    var tmp;
    var tmp_0;
    if (other instanceof BrushStyle) {
      tmp_0 = this instanceof BrushStyle;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_1 = other.z3z();
      tmp = new BrushStyle(other.i4z_1, takeOrElse_0(tmp_1, TextForegroundStyle$merge$lambda(this)));
    } else {
      var tmp_2;
      if (other instanceof BrushStyle) {
        tmp_2 = !(this instanceof BrushStyle);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp = other;
      } else {
        var tmp_3;
        if (!(other instanceof BrushStyle)) {
          tmp_3 = this instanceof BrushStyle;
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp = this;
        } else {
          tmp = other.k4o(TextForegroundStyle$merge$lambda_0(this));
        }
      }
    }
    return tmp;
  }
  function takeOrElse(other) {
    return !equals(this, Unspecified_instance) ? this : other();
  }
  initMetadataForInterface(TextForegroundStyle, 'TextForegroundStyle');
  initMetadataForObject(Unspecified, 'Unspecified', VOID, VOID, [TextForegroundStyle]);
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(BrushStyle, 'BrushStyle', VOID, VOID, [TextForegroundStyle]);
  initMetadataForClass(ColorStyle, 'ColorStyle', VOID, VOID, [TextForegroundStyle]);
  initMetadataForCompanion(Companion_21);
  initMetadataForClass(TextGeometricTransform, 'TextGeometricTransform', TextGeometricTransform);
  initMetadataForCompanion(Companion_22);
  initMetadataForClass(TextIndent_0, 'TextIndent', TextIndent_0);
  initMetadataForCompanion(Companion_23);
  initMetadataForClass(TextOverflow, 'TextOverflow');
  initMetadataForClass(NoCache, 'NoCache', NoCache);
  initMetadataForClass(PlatformFont, 'PlatformFont', VOID, VOID, [Font]);
  initMetadataForClass(AtomicReference, 'AtomicReference');
  initMetadataForClass(ExpireAfterAccessCache, 'ExpireAfterAccessCache');
  initMetadataForCompanion(Companion_24);
  initMetadataForLambda(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(_get_codePoints_$slambda_43x8dt, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_25);
  initMetadataForClass(FontRasterizationSettings, 'FontRasterizationSettings');
  initMetadataForClass(FontSmoothing, 'FontSmoothing', VOID, Enum);
  initMetadataForClass(FontHinting, 'FontHinting', VOID, Enum);
  function paint$default(canvas, color, shadow, textDecoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().j45_1 : color;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().v47_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.c4k(canvas, color, shadow, textDecoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.c4k.call(this, canvas, new Color(color), shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  }
  function paint$default_0(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode, $super) {
    var tmp;
    if (alpha === VOID) {
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().v47_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.e4k(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.e4k.call(this, canvas, brush, alpha, shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp_0;
  }
  initMetadataForInterface(Paragraph_1, 'Paragraph');
  initMetadataForClass(SkiaParagraph, 'SkiaParagraph', VOID, VOID, [Paragraph_1]);
  initMetadataForCompanion(Companion_26);
  initMetadataForClass(TextDecorationLineStyle, 'TextDecorationLineStyle');
  initMetadataForClass(PlatformTextStyle, 'PlatformTextStyle');
  initMetadataForClass(PlatformFontFamilyTypefaceAdapter, 'PlatformFontFamilyTypefaceAdapter', PlatformFontFamilyTypefaceAdapter);
  initMetadataForClass(SkiaFontLoader, 'SkiaFontLoader', SkiaFontLoader, VOID, VOID, [1]);
  initMetadataForClass(ComputedStyle, 'ComputedStyle', ComputedStyle);
  initMetadataForClass(Op, 'Op');
  initMetadataForClass(StyleAdd, 'StyleAdd', VOID, Op);
  initMetadataForClass(PutPlaceholder, 'PutPlaceholder', VOID, Op);
  initMetadataForClass(EndPlaceholder, 'EndPlaceholder', VOID, Op);
  initMetadataForClass(Cut, 'Cut');
  initMetadataForClass(StyleAdd_0, 'StyleAdd', VOID, Cut);
  initMetadataForClass(StyleRemove, 'StyleRemove', VOID, Cut);
  initMetadataForClass(PutPlaceholder_0, 'PutPlaceholder', VOID, Cut);
  initMetadataForClass(EndPlaceholder_0, 'EndPlaceholder', VOID, Cut);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(ParagraphBuilder_0, 'ParagraphBuilder');
  initMetadataForClass(ParagraphLayouter, 'ParagraphLayouter');
  initMetadataForClass(FontLoadResult, 'FontLoadResult');
  initMetadataForClass(Platform, 'Platform', VOID, Enum);
  initMetadataForClass(LoadedFont, 'LoadedFont', VOID, PlatformFont);
  initMetadataForClass(FontLoader, 'FontLoader', FontLoader);
  initMetadataForClass(FontCache, 'FontCache', FontCache);
  initMetadataForClass(SystemFont, 'SystemFont', VOID, PlatformFont);
  initMetadataForClass(SkiaBackedTypeface, 'SkiaBackedTypeface');
  initMetadataForClass(SkiaParagraphIntrinsics, 'SkiaParagraphIntrinsics', VOID, VOID, [ParagraphIntrinsics]);
  initMetadataForClass(SkiaTextPaint, 'SkiaTextPaint', SkiaTextPaint);
  initMetadataForCompanion(Companion_27);
  initMetadataForClass(LineBreak, 'LineBreak');
  initMetadataForCompanion(Companion_28);
  initMetadataForClass(TextMotion, 'TextMotion');
  initMetadataForClass(createPlatformLocaleDelegate$1);
  //endregion
  var EmptyAnnotatedString;
  function Range_init_$Init$(item, start, end, $this) {
    Range.call($this, item, start, end, '');
    return $this;
  }
  function Range_init_$Create$(item, start, end) {
    return Range_init_$Init$(item, start, end, objectCreate(protoOf(Range)));
  }
  function AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, $this) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (paragraphStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = paragraphStyles;
    }
    paragraphStyles = tmp_0;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (spanStyles.q()) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.<init>.<anonymous>' call
      tmp_1 = null;
    } else {
      tmp_1 = spanStyles;
    }
    var tmp_2 = tmp_1;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_3;
    if (paragraphStyles.q()) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.<init>.<anonymous>' call
      tmp_3 = null;
    } else {
      tmp_3 = paragraphStyles;
    }
    var tmp$ret$5 = tmp_3;
    AnnotatedString.call($this, text, tmp_2, tmp$ret$5, null);
    return $this;
  }
  function AnnotatedString_init_$Create$(text, spanStyles, paragraphStyles) {
    return AnnotatedString_init_$Init$(text, spanStyles, paragraphStyles, objectCreate(protoOf(AnnotatedString)));
  }
  function Range(item, start, end, tag) {
    this.r4h_1 = item;
    this.s4h_1 = start;
    this.t4h_1 = end;
    this.u4h_1 = tag;
    // Inline function 'kotlin.require' call
    if (!(this.s4h_1 <= this.t4h_1)) {
      // Inline function 'androidx.compose.ui.text.Range.<anonymous>' call
      var message = 'Reversed range is not supported';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(Range).ag = function () {
    return this.r4h_1;
  };
  protoOf(Range).bg = function () {
    return this.s4h_1;
  };
  protoOf(Range).k4d = function () {
    return this.t4h_1;
  };
  protoOf(Range).toString = function () {
    return 'Range(item=' + toString_0(this.r4h_1) + ', start=' + this.s4h_1 + ', end=' + this.t4h_1 + ', tag=' + this.u4h_1 + ')';
  };
  protoOf(Range).hashCode = function () {
    var result = this.r4h_1 == null ? 0 : hashCode(this.r4h_1);
    result = imul(result, 31) + this.s4h_1 | 0;
    result = imul(result, 31) + this.t4h_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.u4h_1) | 0;
    return result;
  };
  protoOf(Range).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Range))
      return false;
    var tmp0_other_with_cast = other instanceof Range ? other : THROW_CCE();
    if (!equals(this.r4h_1, tmp0_other_with_cast.r4h_1))
      return false;
    if (!(this.s4h_1 === tmp0_other_with_cast.s4h_1))
      return false;
    if (!(this.t4h_1 === tmp0_other_with_cast.t4h_1))
      return false;
    if (!(this.u4h_1 === tmp0_other_with_cast.u4h_1))
      return false;
    return true;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.v4h_1 = get_AnnotatedStringSaver();
  }
  var Companion_instance_0;
  function Companion_getInstance_12() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.w4h_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).td = function (a, b) {
    return this.w4h_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.td(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).q3 = function () {
    return this.w4h_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.q3(), other.q3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function AnnotatedString$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    var tmp = a.s4h_1;
    // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
    var tmp$ret$1 = b.s4h_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function AnnotatedString(text, spanStylesOrNull, paragraphStylesOrNull, annotations) {
    Companion_getInstance_12();
    spanStylesOrNull = spanStylesOrNull === VOID ? null : spanStylesOrNull;
    paragraphStylesOrNull = paragraphStylesOrNull === VOID ? null : paragraphStylesOrNull;
    annotations = annotations === VOID ? null : annotations;
    this.x4h_1 = text;
    this.y4h_1 = spanStylesOrNull;
    this.z4h_1 = paragraphStylesOrNull;
    this.a4i_1 = annotations;
    var lastStyleEnd = -1;
    var tmp0_safe_receiver = this.z4h_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.sortedBy' call
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_0 = AnnotatedString$lambda;
      var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp_0);
      tmp = sortedWith(tmp0_safe_receiver, tmp$ret$0);
    }
    var tmp1_safe_receiver = tmp;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp1_safe_receiver.n() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp1_safe_receiver.p(index);
          // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>' call
          // Inline function 'kotlin.require' call
          if (!(item.s4h_1 >= lastStyleEnd)) {
            // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
            var message = 'ParagraphStyle should not overlap';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          // Inline function 'kotlin.require' call
          if (!(item.t4h_1 <= this.x4h_1.length)) {
            // Inline function 'androidx.compose.ui.text.AnnotatedString.<anonymous>.<anonymous>' call
            var message_0 = 'ParagraphStyle range [' + item.s4h_1 + ', ' + item.t4h_1 + ')' + ' is out of boundary';
            throw IllegalArgumentException_init_$Create$(toString(message_0));
          }
          lastStyleEnd = item.t4h_1;
        }
         while (inductionVariable <= last);
    }
  }
  protoOf(AnnotatedString).b4i = function () {
    var tmp0_elvis_lhs = this.y4h_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(AnnotatedString).c4i = function () {
    var tmp0_elvis_lhs = this.z4h_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(AnnotatedString).a = function () {
    return this.x4h_1.length;
  };
  protoOf(AnnotatedString).b = function (index) {
    return charSequenceGet(this.x4h_1, index);
  };
  protoOf(AnnotatedString).c = function (startIndex, endIndex) {
    // Inline function 'kotlin.require' call
    if (!(startIndex <= endIndex)) {
      // Inline function 'androidx.compose.ui.text.AnnotatedString.subSequence.<anonymous>' call
      var message = 'start (' + startIndex + ') should be less or equal to end (' + endIndex + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (startIndex === 0 && endIndex === this.x4h_1.length)
      return this;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var text = this.x4h_1.substring(startIndex, endIndex);
    return new AnnotatedString(text, filterRanges(this.y4h_1, startIndex, endIndex), filterRanges(this.z4h_1, startIndex, endIndex), filterRanges(this.a4i_1, startIndex, endIndex));
  };
  protoOf(AnnotatedString).d4i = function (start, end) {
    var tmp0_safe_receiver = this.a4i_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastAny' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.n() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.p(index);
            // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.ui.text.AnnotatedString.hasLinkAnnotations.<anonymous>' call
            var tmp_0;
            var tmp_1 = item.r4h_1;
            if (tmp_1 instanceof LinkAnnotation) {
              tmp_0 = intersect(start, end, item.s4h_1, item.t4h_1);
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$1 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$1 = false;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(AnnotatedString).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnnotatedString))
      return false;
    if (!(this.x4h_1 === other.x4h_1))
      return false;
    if (!equals(this.y4h_1, other.y4h_1))
      return false;
    if (!equals(this.z4h_1, other.z4h_1))
      return false;
    if (!equals(this.a4i_1, other.a4i_1))
      return false;
    return true;
  };
  protoOf(AnnotatedString).hashCode = function () {
    var result = getStringHashCode(this.x4h_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.y4h_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.z4h_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.a4i_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  protoOf(AnnotatedString).toString = function () {
    return this.x4h_1;
  };
  protoOf(AnnotatedString).e4i = function (other) {
    return equals(this.a4i_1, other.a4i_1);
  };
  function filterRanges(ranges, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    // Inline function 'kotlin.require' call
    if (!(start <= end)) {
      // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
      var message = 'start (' + start + ') should be less than or equal to end (' + end + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    if (ranges == null) {
      return null;
    } else {
      tmp = ranges;
    }
    var nonNullRange = tmp;
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(nonNullRange.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = nonNullRange.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nonNullRange.p(index);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        if (intersect(start, end, item.s4h_1, item.t4h_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.e(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(target.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.p(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = item_0.s4h_1;
        var tmp_0 = Math.max(start, b) - start | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b_0 = item_0.t4h_1;
        var tmp$ret$4 = Math.min(end, b_0);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = new Range(item_0.r4h_1, tmp_0, tmp$ret$4 - start | 0, item_0.u4h_1);
        target_0.e(element);
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (target_0.q()) {
      // Inline function 'androidx.compose.ui.text.filterRanges.<anonymous>' call
      tmp_1 = null;
    } else {
      tmp_1 = target_0;
    }
    return tmp_1;
  }
  function intersect(lStart, lEnd, rStart, rEnd) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp_1 = Math.max(lStart, rStart);
    // Inline function 'kotlin.comparisons.minOf' call
    if (tmp_1 < Math.min(lEnd, rEnd)) {
      tmp_0 = true;
    } else {
      tmp_0 = contains(lStart, lEnd, rStart, rEnd);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = contains(rStart, rEnd, lStart, lEnd);
    }
    return tmp;
  }
  function getLocalSpanStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    if (start === end)
      return null;
    var tmp0_elvis_lhs = _this__u8e3s4.y4h_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var spanStyles = tmp;
    if (start === 0 && end >= _this__u8e3s4.x4h_1.length) {
      return spanStyles;
    }
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(spanStyles.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = spanStyles.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = spanStyles.p(index);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.getLocalSpanStyles.<anonymous>' call
        if (intersect(start, end, item.s4h_1, item.t4h_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.e(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(target.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.p(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.getLocalSpanStyles.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var element = Range_init_$Create$(item_0.r4h_1, coerceIn(item_0.s4h_1, start, end) - start | 0, coerceIn(item_0.t4h_1, start, end) - start | 0);
        target_0.e(element);
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function contains(baseStart, baseEnd, targetStart, targetEnd) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return baseStart <= targetStart && targetEnd <= baseEnd && (!(baseEnd === targetEnd) || targetStart === targetEnd === (baseStart === baseEnd));
  }
  function substringWithoutParagraphStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp;
    if (!(start === end)) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = _this__u8e3s4.x4h_1.substring(start, end);
    } else {
      tmp = '';
    }
    return new AnnotatedString(tmp, getLocalSpanStyles(_this__u8e3s4, start, end));
  }
  function normalizedParagraphStyles(_this__u8e3s4, defaultParagraphStyle) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var length = _this__u8e3s4.x4h_1.length;
    var tmp0_elvis_lhs = _this__u8e3s4.z4h_1;
    var paragraphStyles = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    var lastOffset = 0;
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$_0();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = paragraphStyles.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = paragraphStyles.p(index);
        // Inline function 'androidx.compose.ui.text.normalizedParagraphStyles.<anonymous>' call
        var style = item.ag();
        var start = item.bg();
        var end = item.k4d();
        if (!(start === lastOffset)) {
          result.e(Range_init_$Create$(defaultParagraphStyle, lastOffset, start));
        }
        result.e(Range_init_$Create$(defaultParagraphStyle.o4i(style), start, end));
        lastOffset = end;
      }
       while (inductionVariable <= last);
    if (!(lastOffset === length)) {
      result.e(Range_init_$Create$(defaultParagraphStyle, lastOffset, length));
    }
    if (result.q()) {
      result.e(Range_init_$Create$(defaultParagraphStyle, 0, 0));
    }
    return result;
  }
  function access$substringWithoutParagraphStyles$tAnnotatedStringKt($receiver, start, end) {
    return substringWithoutParagraphStyles($receiver, start, end);
  }
  var properties_initialized_AnnotatedString_kt_um06op;
  function _init_properties_AnnotatedString_kt__ww2pyh() {
    if (!properties_initialized_AnnotatedString_kt_um06op) {
      properties_initialized_AnnotatedString_kt_um06op = true;
      EmptyAnnotatedString = AnnotatedString_init_$Create$('');
    }
  }
  function Url(url, styles, linkInteractionListener) {
    styles = styles === VOID ? null : styles;
    linkInteractionListener = linkInteractionListener === VOID ? null : linkInteractionListener;
    LinkAnnotation.call(this);
    this.p4i_1 = url;
    this.q4i_1 = styles;
    this.r4i_1 = linkInteractionListener;
  }
  protoOf(Url).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Url))
      return false;
    if (!(this.p4i_1 === other.p4i_1))
      return false;
    if (!equals(this.q4i_1, other.q4i_1))
      return false;
    if (!equals(this.r4i_1, other.r4i_1))
      return false;
    return true;
  };
  protoOf(Url).hashCode = function () {
    var result = getStringHashCode(this.p4i_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.q4i_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.r4i_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  protoOf(Url).toString = function () {
    return 'LinkAnnotation.Url(url=' + this.p4i_1 + ')';
  };
  function Clickable(tag, styles, linkInteractionListener) {
    styles = styles === VOID ? null : styles;
    LinkAnnotation.call(this);
    this.s4i_1 = tag;
    this.t4i_1 = styles;
    this.u4i_1 = linkInteractionListener;
  }
  protoOf(Clickable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Clickable))
      return false;
    if (!(this.s4i_1 === other.s4i_1))
      return false;
    if (!equals(this.t4i_1, other.t4i_1))
      return false;
    if (!equals(this.u4i_1, other.u4i_1))
      return false;
    return true;
  };
  protoOf(Clickable).hashCode = function () {
    var result = getStringHashCode(this.s4i_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.t4i_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.u4i_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  protoOf(Clickable).toString = function () {
    return 'LinkAnnotation.Clickable(tag=' + this.s4i_1 + ')';
  };
  function LinkAnnotation() {
  }
  function _get_annotatedString__kqljtk($this) {
    return $this.a4j_1.v4i_1;
  }
  function requireIndexInRangeInclusiveEnd($this, offset) {
    // Inline function 'kotlin.require' call
    if (!(0 <= offset ? offset <= _get_annotatedString__kqljtk($this).x4h_1.length : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireIndexInRangeInclusiveEnd.<anonymous>' call
      var message = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__kqljtk($this).a() + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function requireLineIndexInRange($this, lineIndex) {
    // Inline function 'kotlin.require' call
    if (!(0 <= lineIndex ? lineIndex < $this.f4j_1 : false)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.requireLineIndexInRange.<anonymous>' call
      var message = 'lineIndex(' + lineIndex + ') is out of bounds [0, ' + $this.f4j_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function MultiParagraph$getPathForRange$lambda($path, $start, $end) {
    return function (paragraphInfo) {
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.ui.text.MultiParagraph.getPathForRange.<anonymous>.<anonymous>' call
      $path.j48(paragraphInfo.r4j(paragraphInfo.i4j_1.q4j(paragraphInfo.p4j($start), paragraphInfo.p4j($end))));
      return Unit_instance;
    };
  }
  function MultiParagraph(intrinsics, constraints, maxLines, ellipsis) {
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    this.a4j_1 = intrinsics;
    this.b4j_1 = maxLines;
    // Inline function 'kotlin.require' call
    if (!(_Constraints___get_minWidth__impl__hi9lfi(constraints) === 0 && _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
      var message = 'Setting Constraints.minWidth and Constraints.minHeight is not supported, these should be the default zero values instead.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var currentHeight = 0.0;
    var currentLineCount = 0;
    var didExceedMaxLines = false;
    // Inline function 'kotlin.collections.mutableListOf' call
    var paragraphInfoList = ArrayList_init_$Create$_0();
    var infoList = this.a4j_1.z4i_1;
    var inductionVariable = 0;
    var last = infoList.n() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraphInfo = infoList.p(index);
        var tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
        var tmp_0;
        if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints)) {
          tmp_0 = coerceAtLeast(_Constraints___get_maxHeight__impl__dt3e8z(constraints) - ceilToInt(currentHeight) | 0, 0);
        } else {
          tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
        }
        var paragraph = Paragraph(paragraphInfo.s4j_1, Constraints(VOID, tmp, VOID, tmp_0), this.b4j_1 - currentLineCount | 0, ellipsis);
        var paragraphTop = currentHeight;
        var paragraphBottom = currentHeight + paragraph.n3g();
        currentHeight = paragraphBottom;
        var startLineIndex = currentLineCount;
        var endLineIndex = startLineIndex + paragraph.v4j() | 0;
        currentLineCount = endLineIndex;
        paragraphInfoList.e(new ParagraphInfo(paragraph, paragraphInfo.t4j_1, paragraphInfo.u4j_1, startLineIndex, endLineIndex, paragraphTop, paragraphBottom));
        if (paragraph.w4j() || (endLineIndex === this.b4j_1 && !(index === get_lastIndex(this.a4j_1.z4i_1)))) {
          didExceedMaxLines = true;
          break $l$loop;
        }
      }
       while (inductionVariable <= last);
    this.e4j_1 = currentHeight;
    this.f4j_1 = currentLineCount;
    this.c4j_1 = didExceedMaxLines;
    this.h4j_1 = paragraphInfoList;
    this.d4j_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.util.fastFlatMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(paragraphInfoList.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = paragraphInfoList.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item = paragraphInfoList.p(index_0);
        // Inline function 'androidx.compose.ui.util.fastFlatMap.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastMap' call
        var this_0 = item.i4j_1.x4j();
        // Inline function 'kotlin.contracts.contract' call
        var target_0 = ArrayList_init_$Create$(this_0.n());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_1 = 0;
        var last_1 = this_0.n() - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item_0 = this_0.p(index_1);
            // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
            // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.collections.plusAssign' call
            var element = item_0 == null ? null : item.y4j(item_0);
            target_0.e(element);
          }
           while (inductionVariable_1 <= last_1);
        var list = target_0;
        addAll(target, list);
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>' call
    var tmp_2;
    if (target.n() < this.a4j_1.w4i_1.n()) {
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = this.a4j_1.w4i_1.n() - target.n() | 0;
      var list_0 = ArrayList_init_$Create$(size);
      // Inline function 'kotlin.repeat' call
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < size)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.MultiParagraph.<anonymous>.<anonymous>' call
          list_0.e(null);
        }
         while (inductionVariable_2 < size);
      tmp_2 = plus(target, list_0);
    } else {
      tmp_2 = target;
    }
    tmp_1.g4j_1 = tmp_2;
  }
  protoOf(MultiParagraph).z4j = function () {
    var tmp;
    if (this.h4j_1.q()) {
      tmp = 0.0;
    } else {
      tmp = this.h4j_1.p(0).i4j_1.z4j();
    }
    return tmp;
  };
  protoOf(MultiParagraph).a4k = function () {
    var tmp;
    if (this.h4j_1.q()) {
      tmp = 0.0;
    } else {
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.ui.text.MultiParagraph.<get-lastBaseline>.<anonymous>' call
      var $this$with = last(this.h4j_1);
      tmp = $this$with.b4k($this$with.i4j_1.a4k());
    }
    return tmp;
  };
  protoOf(MultiParagraph).c4k = function (canvas, color, shadow, decoration, drawStyle, blendMode) {
    canvas.t42();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.h4j_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.ui.text.MultiParagraph.paint.<anonymous>' call
        item.i4j_1.c4k(canvas, color, shadow, decoration, drawStyle, blendMode);
        canvas.w42(0.0, item.i4j_1.n3g());
      }
       while (inductionVariable <= last);
    canvas.u42();
  };
  protoOf(MultiParagraph).d4k = function (canvas, color, shadow, decoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().j45_1 : color;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().v47_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.c4k(canvas, color, shadow, decoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.c4k.call(this, canvas, new Color(color), shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  };
  protoOf(MultiParagraph).e4k = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    drawMultiParagraph(this, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
  };
  protoOf(MultiParagraph).f4k = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode, $super) {
    var tmp;
    if (alpha === VOID) {
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().v47_1 : blendMode;
    var tmp_0;
    if ($super === VOID) {
      this.e4k(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.e4k.call(this, canvas, brush, alpha, shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp_0;
  };
  protoOf(MultiParagraph).q4j = function (start, end) {
    // Inline function 'kotlin.require' call
    if (!((0 <= start ? start <= end : false) && end <= _get_annotatedString__kqljtk(this).x4h_1.length)) {
      // Inline function 'androidx.compose.ui.text.MultiParagraph.getPathForRange.<anonymous>' call
      var message = 'Start(' + start + ') or End(' + end + ') is out of range [0..' + _get_annotatedString__kqljtk(this).x4h_1.length + '),' + ' or start > end!';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (start === end)
      return Path();
    var path = Path();
    var tmp = TextRange_0(start, end);
    findParagraphsByRange(this.h4j_1, tmp, MultiParagraph$getPathForRange$lambda(path, start, end));
    return path;
  };
  protoOf(MultiParagraph).g4k = function (vertical) {
    var paragraphIndex = findParagraphByY(this.h4j_1, vertical);
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineForVerticalPosition.<anonymous>' call
    var $this$with = this.h4j_1.p(paragraphIndex);
    var tmp;
    if ($this$with.a() === 0) {
      tmp = $this$with.l4j_1;
    } else {
      tmp = $this$with.i4k($this$with.i4j_1.g4k($this$with.h4k(vertical)));
    }
    return tmp;
  };
  protoOf(MultiParagraph).j4k = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.h4j_1);
    } else {
      tmp = findParagraphByIndex(this.h4j_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getParagraphDirection.<anonymous>' call
    var $this$with = this.h4j_1.p(paragraphIndex);
    return $this$with.i4j_1.j4k($this$with.p4j(offset));
  };
  protoOf(MultiParagraph).k4k = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.h4j_1);
    } else {
      tmp = findParagraphByIndex(this.h4j_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getBidiRunDirection.<anonymous>' call
    var $this$with = this.h4j_1.p(paragraphIndex);
    return $this$with.i4j_1.k4k($this$with.p4j(offset));
  };
  protoOf(MultiParagraph).l4k = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.h4j_1);
    } else {
      tmp = findParagraphByIndex(this.h4j_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getWordBoundary.<anonymous>' call
    var $this$with = this.h4j_1.p(paragraphIndex);
    return $this$with.m4k($this$with.i4j_1.l4k($this$with.p4j(offset)), false);
  };
  protoOf(MultiParagraph).o4k = function (offset) {
    var tmp;
    if (offset >= _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.h4j_1);
    } else if (offset < 0) {
      tmp = 0;
    } else {
      tmp = findParagraphByIndex(this.h4j_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineForOffset.<anonymous>' call
    var $this$with = this.h4j_1.p(paragraphIndex);
    return $this$with.i4k($this$with.i4j_1.o4k($this$with.p4j(offset)));
  };
  protoOf(MultiParagraph).p4k = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.h4j_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineTop.<anonymous>' call
    var $this$with = this.h4j_1.p(paragraphIndex);
    return $this$with.b4k($this$with.i4j_1.p4k($this$with.q4k(lineIndex)));
  };
  protoOf(MultiParagraph).r4k = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.h4j_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineStart.<anonymous>' call
    var $this$with = this.h4j_1.p(paragraphIndex);
    return $this$with.s4k($this$with.i4j_1.r4k($this$with.q4k(lineIndex)));
  };
  protoOf(MultiParagraph).t4k = function (lineIndex, visibleEnd) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.h4j_1, lineIndex);
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.ui.text.MultiParagraph.getLineEnd.<anonymous>' call
    var $this$with = this.h4j_1.p(paragraphIndex);
    return $this$with.s4k($this$with.i4j_1.t4k($this$with.q4k(lineIndex), visibleEnd));
  };
  function ParagraphInfo(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) {
    startLineIndex = startLineIndex === VOID ? -1 : startLineIndex;
    endLineIndex = endLineIndex === VOID ? -1 : endLineIndex;
    top = top === VOID ? -1.0 : top;
    bottom = bottom === VOID ? -1.0 : bottom;
    this.i4j_1 = paragraph;
    this.j4j_1 = startIndex;
    this.k4j_1 = endIndex;
    this.l4j_1 = startLineIndex;
    this.m4j_1 = endLineIndex;
    this.n4j_1 = top;
    this.o4j_1 = bottom;
  }
  protoOf(ParagraphInfo).a = function () {
    return this.k4j_1 - this.j4j_1 | 0;
  };
  protoOf(ParagraphInfo).p4j = function (_this__u8e3s4) {
    return coerceIn(_this__u8e3s4, this.j4j_1, this.k4j_1) - this.j4j_1 | 0;
  };
  protoOf(ParagraphInfo).s4k = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.j4j_1 | 0;
  };
  protoOf(ParagraphInfo).q4k = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.l4j_1 | 0;
  };
  protoOf(ParagraphInfo).i4k = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.l4j_1 | 0;
  };
  protoOf(ParagraphInfo).b4k = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.n4j_1;
  };
  protoOf(ParagraphInfo).h4k = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.n4j_1;
  };
  protoOf(ParagraphInfo).y4j = function (_this__u8e3s4) {
    return _this__u8e3s4.o3g(Offset(0.0, this.n4j_1));
  };
  protoOf(ParagraphInfo).r4j = function (_this__u8e3s4) {
    _this__u8e3s4.k48(Offset(0.0, this.n4j_1));
    return _this__u8e3s4;
  };
  protoOf(ParagraphInfo).m4k = function (_this__u8e3s4, treatZeroAsNull) {
    if (treatZeroAsNull && equals(_this__u8e3s4, Companion_getInstance_14().u4k_1)) {
      return Companion_getInstance_14().u4k_1;
    }
    return TextRange_0(this.s4k(_TextRange___get_start__impl__ww4t90(_this__u8e3s4)), this.s4k(_TextRange___get_end__impl__gcdxpp(_this__u8e3s4)));
  };
  protoOf(ParagraphInfo).toString = function () {
    return 'ParagraphInfo(paragraph=' + toString(this.i4j_1) + ', startIndex=' + this.j4j_1 + ', endIndex=' + this.k4j_1 + ', startLineIndex=' + this.l4j_1 + ', endLineIndex=' + this.m4j_1 + ', top=' + this.n4j_1 + ', bottom=' + this.o4j_1 + ')';
  };
  protoOf(ParagraphInfo).hashCode = function () {
    var result = hashCode(this.i4j_1);
    result = imul(result, 31) + this.j4j_1 | 0;
    result = imul(result, 31) + this.k4j_1 | 0;
    result = imul(result, 31) + this.l4j_1 | 0;
    result = imul(result, 31) + this.m4j_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.n4j_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.o4j_1) | 0;
    return result;
  };
  protoOf(ParagraphInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphInfo ? other : THROW_CCE();
    if (!equals(this.i4j_1, tmp0_other_with_cast.i4j_1))
      return false;
    if (!(this.j4j_1 === tmp0_other_with_cast.j4j_1))
      return false;
    if (!(this.k4j_1 === tmp0_other_with_cast.k4j_1))
      return false;
    if (!(this.l4j_1 === tmp0_other_with_cast.l4j_1))
      return false;
    if (!(this.m4j_1 === tmp0_other_with_cast.m4j_1))
      return false;
    if (!equals(this.n4j_1, tmp0_other_with_cast.n4j_1))
      return false;
    if (!equals(this.o4j_1, tmp0_other_with_cast.o4j_1))
      return false;
    return true;
  };
  function findParagraphsByRange(paragraphInfoList, range, action) {
    var paragraphIndex = findParagraphByIndex(paragraphInfoList, _TextRange___get_min__impl__uu95c4(range));
    var inductionVariable = paragraphIndex;
    var last = paragraphInfoList.n();
    if (inductionVariable < last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraph = paragraphInfoList.p(i);
        if (paragraph.j4j_1 >= _TextRange___get_max__impl__owm8m(range))
          break $l$loop_0;
        if (paragraph.j4j_1 === paragraph.k4j_1)
          continue $l$loop_0;
        action(paragraph);
      }
       while (inductionVariable < last);
  }
  function findParagraphByY(paragraphInfoList, y) {
    if (y <= 0)
      return 0;
    if (y >= last(paragraphInfoList).o4j_1)
      return get_lastIndex(paragraphInfoList);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.n() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.p(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByY.<anonymous>' call
        var cmp = midVal.n4j_1 > y ? 1 : midVal.o4j_1 <= y ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function findParagraphByIndex(paragraphInfoList, index) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.n() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.p(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByIndex.<anonymous>' call
        var cmp = midVal.j4j_1 > index ? 1 : midVal.k4j_1 <= index ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function findParagraphByLineIndex(paragraphInfoList, lineIndex) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.n() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.p(mid);
        // Inline function 'androidx.compose.ui.text.findParagraphByLineIndex.<anonymous>' call
        var cmp = midVal.l4j_1 > lineIndex ? 1 : midVal.m4j_1 <= lineIndex ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$1 = mid;
          break $l$block;
        }
      }
      tmp$ret$1 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$1;
  }
  function resolveTextDirection($this, style, defaultStyle) {
    return !(style.g4i_1 === Companion_getInstance_32().b4l_1) ? style : style.v4k(VOID, defaultStyle.g4i_1);
  }
  function MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp0 = this$0.z4i_1;
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0.q()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = tmp0.p(0);
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var maxValue = maxElem.s4j_1.e3w();
        var inductionVariable = 1;
        var last = get_lastIndex(tmp0);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = tmp0.p(i);
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.minIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            var v = e.s4j_1.e3w();
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s4j_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.e3w();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp0 = this$0.z4i_1;
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        // Inline function 'kotlin.contracts.contract' call
        if (tmp0.q()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = tmp0.p(0);
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
        var maxValue = maxElem.s4j_1.f3w();
        var inductionVariable = 1;
        var last = get_lastIndex(tmp0);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = tmp0.p(i);
            // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.maxIntrinsicWidth$delegate.<anonymous>.<anonymous>' call
            var v = e.s4j_1.f3w();
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s4j_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.f3w();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver) {
    this.v4i_1 = annotatedString;
    this.w4i_1 = placeholders;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.x4i_1 = lazy(tmp_0, MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this));
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_1.y4i_1 = lazy(tmp_2, MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this));
    var paragraphStyle = style.f4l();
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle' call
    var this_0 = this.v4i_1;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_1 = normalizedParagraphStyles(this_0, paragraphStyle);
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(this_1.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_1.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_1.p(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle.<anonymous>' call
        var annotatedString_0 = access$substringWithoutParagraphStyles$tAnnotatedStringKt(this_0, item.s4h_1, item.t4h_1);
        // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<anonymous>' call
        var currentParagraphStyle = resolveTextDirection(this, item.r4h_1, paragraphStyle);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = new ParagraphIntrinsicInfo(ParagraphIntrinsics_0(annotatedString_0.x4h_1, style.g4l(currentParagraphStyle), annotatedString_0.b4i(), getLocalPlaceholders(this.w4i_1, item.s4h_1, item.t4h_1), density, fontFamilyResolver), item.s4h_1, item.t4h_1);
        target.e(element);
      }
       while (inductionVariable <= last);
    tmp_3.z4i_1 = target;
  }
  protoOf(MultiParagraphIntrinsics).e3w = function () {
    var tmp0 = this.x4i_1;
    // Inline function 'kotlin.getValue' call
    minIntrinsicWidth$factory();
    return tmp0.v();
  };
  protoOf(MultiParagraphIntrinsics).f3w = function () {
    var tmp0 = this.y4i_1;
    // Inline function 'kotlin.getValue' call
    maxIntrinsicWidth$factory();
    return tmp0.v();
  };
  protoOf(MultiParagraphIntrinsics).h4l = function () {
    var tmp0 = this.z4i_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0.n() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0.p(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.MultiParagraphIntrinsics.<get-hasStaleResolvedFonts>.<anonymous>' call
          if (item.s4j_1.h4l()) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  };
  function ParagraphIntrinsicInfo(intrinsics, startIndex, endIndex) {
    this.s4j_1 = intrinsics;
    this.t4j_1 = startIndex;
    this.u4j_1 = endIndex;
  }
  protoOf(ParagraphIntrinsicInfo).toString = function () {
    return 'ParagraphIntrinsicInfo(intrinsics=' + toString(this.s4j_1) + ', startIndex=' + this.t4j_1 + ', endIndex=' + this.u4j_1 + ')';
  };
  protoOf(ParagraphIntrinsicInfo).hashCode = function () {
    var result = hashCode(this.s4j_1);
    result = imul(result, 31) + this.t4j_1 | 0;
    result = imul(result, 31) + this.u4j_1 | 0;
    return result;
  };
  protoOf(ParagraphIntrinsicInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphIntrinsicInfo))
      return false;
    var tmp0_other_with_cast = other instanceof ParagraphIntrinsicInfo ? other : THROW_CCE();
    if (!equals(this.s4j_1, tmp0_other_with_cast.s4j_1))
      return false;
    if (!(this.t4j_1 === tmp0_other_with_cast.t4j_1))
      return false;
    if (!(this.u4j_1 === tmp0_other_with_cast.u4j_1))
      return false;
    return true;
  };
  function getLocalPlaceholders(_this__u8e3s4, start, end) {
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(_this__u8e3s4.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.p(index);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        if (intersect(start, end, item.s4h_1, item.t4h_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.e(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(target.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = target.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = target.p(index_0);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>' call
        // Inline function 'kotlin.require' call
        if (!(start <= item_0.s4h_1 && item_0.t4h_1 <= end)) {
          // Inline function 'androidx.compose.ui.text.getLocalPlaceholders.<anonymous>.<anonymous>' call
          var message = 'placeholder can not overlap with paragraph.';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        // Inline function 'kotlin.collections.plusAssign' call
        var element = Range_init_$Create$(item_0.r4h_1, item_0.s4h_1 - start | 0, item_0.t4h_1 - start | 0);
        target_0.e(element);
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function minIntrinsicWidth$factory() {
    return getPropertyCallableRef('minIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.e3w();
    }, null);
  }
  function maxIntrinsicWidth$factory() {
    return getPropertyCallableRef('maxIntrinsicWidth', 1, KProperty1, function (receiver) {
      return receiver.f3w();
    }, null);
  }
  function ceilToInt(_this__u8e3s4) {
    // Inline function 'kotlin.math.ceil' call
    var tmp$ret$0 = Math.ceil(_this__u8e3s4);
    return numberToInt(tmp$ret$0);
  }
  function Paragraph(paragraphIntrinsics, constraints, maxLines, ellipsis) {
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    return ActualParagraph(paragraphIntrinsics, maxLines, ellipsis, constraints);
  }
  function Paragraph_0(text, style, constraints, density, fontFamilyResolver, spanStyles, placeholders, maxLines, ellipsis) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = placeholders;
    }
    placeholders = tmp_0;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    ellipsis = ellipsis === VOID ? false : ellipsis;
    return ActualParagraph_0(text, style, spanStyles, placeholders, maxLines, ellipsis, constraints, density, fontFamilyResolver);
  }
  function ParagraphIntrinsics() {
  }
  function ParagraphIntrinsics_0(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = placeholders;
    }
    placeholders = tmp_0;
    return ActualParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function get_DefaultLineHeight() {
    _init_properties_ParagraphStyle_kt__lbx7er();
    return DefaultLineHeight;
  }
  var DefaultLineHeight;
  function ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    textAlign = textAlign === VOID ? Companion_getInstance_30().o4l_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_32().b4l_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().s3i_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_40().s4l_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_26().v4l_1 : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    this.f4i_1 = textAlign;
    this.g4i_1 = textDirection;
    this.h4i_1 = lineHeight;
    this.i4i_1 = textIndent;
    this.j4i_1 = platformStyle;
    this.k4i_1 = lineHeightStyle;
    this.l4i_1 = lineBreak;
    this.m4i_1 = hyphens;
    this.n4i_1 = textMotion;
    if (!equals(this.h4i_1, Companion_getInstance_1().s3i_1)) {
      // Inline function 'kotlin.check' call
      if (!(_TextUnit___get_value__impl__hpbx0k(this.h4i_1) >= 0.0)) {
        // Inline function 'androidx.compose.ui.text.ParagraphStyle.<anonymous>' call
        var message = "lineHeight can't be negative (" + _TextUnit___get_value__impl__hpbx0k(this.h4i_1) + ')';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(ParagraphStyle_0).o4i = function (other) {
    if (other == null)
      return this;
    return fastMerge(this, other.f4i_1, other.g4i_1, other.h4i_1, other.i4i_1, other.j4i_1, other.k4i_1, other.l4i_1, other.m4i_1, other.n4i_1);
  };
  protoOf(ParagraphStyle_0).w4l = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
  };
  protoOf(ParagraphStyle_0).v4k = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    textAlign = textAlign === VOID ? this.f4i_1 : textAlign;
    textDirection = textDirection === VOID ? this.g4i_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.h4i_1 : lineHeight;
    textIndent = textIndent === VOID ? this.i4i_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.j4i_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.k4i_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.l4i_1 : lineBreak;
    hyphens = hyphens === VOID ? this.m4i_1 : hyphens;
    textMotion = textMotion === VOID ? this.n4i_1 : textMotion;
    return $super === VOID ? this.w4l(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) : $super.w4l.call(this, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
  };
  protoOf(ParagraphStyle_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphStyle_0))
      return false;
    if (!(this.f4i_1 === other.f4i_1))
      return false;
    if (!(this.g4i_1 === other.g4i_1))
      return false;
    if (!equals(this.h4i_1, other.h4i_1))
      return false;
    if (!equals(this.i4i_1, other.i4i_1))
      return false;
    if (!equals(this.j4i_1, other.j4i_1))
      return false;
    if (!equals(this.k4i_1, other.k4i_1))
      return false;
    if (!(this.l4i_1 === other.l4i_1))
      return false;
    if (!(this.m4i_1 === other.m4i_1))
      return false;
    if (!equals(this.n4i_1, other.n4i_1))
      return false;
    return true;
  };
  protoOf(ParagraphStyle_0).hashCode = function () {
    var result = TextAlign__hashCode_impl_s8g35y(this.f4i_1);
    result = imul(31, result) + TextDirection__hashCode_impl_g63nwg(this.g4i_1) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.h4i_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.i4i_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.j4i_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.k4i_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    result = imul(31, result) + LineBreak__hashCode_impl_ybksn(this.l4i_1) | 0;
    result = imul(31, result) + Hyphens__hashCode_impl_yb7t8v(this.m4i_1) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.n4i_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    return result;
  };
  protoOf(ParagraphStyle_0).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'androidx.compose.ui.text.ParagraphStyle.toString.<anonymous>' call
    this_0.o8('ParagraphStyle(');
    this_0.o8('textAlign=' + TextAlign__toString_impl_6ha6d3(this.f4i_1) + ', ');
    this_0.o8('textDirection=' + TextDirection__toString_impl_x3uh9t(this.g4i_1) + ', ');
    this_0.o8('lineHeight=' + TextUnit__toString_impl_51ghw0(this.h4i_1) + ', ');
    this_0.o8('textIndent=' + toString_0(this.i4i_1) + ', ');
    this_0.o8('platformStyle=' + toString_0(this.j4i_1) + ', ');
    this_0.o8('lineHeightStyle=' + toString_0(this.k4i_1) + ', ');
    this_0.o8('lineBreak=' + LineBreak__toString_impl_mphhli(this.l4i_1) + ', ');
    this_0.o8('hyphens=' + Hyphens__toString_impl_ck1wg0(this.m4i_1) + ', ');
    this_0.o8('textMotion=' + toString_0(this.n4i_1));
    this_0.o8(')');
    return this_0.toString();
  };
  function fastMerge(_this__u8e3s4, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    if (!(textAlign === Companion_getInstance_30().o4l_1) && !(textAlign === _this__u8e3s4.f4i_1)) {
      tmp_6 = true;
    } else {
      var tmp_7;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!get_isUnspecified(lineHeight)) {
        tmp_7 = !equals(lineHeight, _this__u8e3s4.h4i_1);
      } else {
        tmp_7 = false;
      }
      tmp_6 = tmp_7;
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      tmp_5 = (!(textIndent == null) && !equals(textIndent, _this__u8e3s4.i4i_1));
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = (!(textDirection === Companion_getInstance_32().b4l_1) && !(textDirection === _this__u8e3s4.g4i_1));
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = (!(platformStyle == null) && !equals(platformStyle, _this__u8e3s4.j4i_1));
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      tmp_2 = (!(lineHeightStyle == null) && !equals(lineHeightStyle, _this__u8e3s4.k4i_1));
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = (!(lineBreak === Companion_getInstance_40().s4l_1) && !(lineBreak === _this__u8e3s4.l4i_1));
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = (!(hyphens === Companion_getInstance_26().v4l_1) && !(hyphens === _this__u8e3s4.m4i_1));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = (!(textMotion == null) && !equals(textMotion, _this__u8e3s4.n4i_1));
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_8;
    if (get_isUnspecified(lineHeight)) {
      tmp_8 = _this__u8e3s4.h4i_1;
    } else {
      tmp_8 = lineHeight;
    }
    var tmp3_lineHeight = tmp_8;
    var tmp4_textIndent = textIndent == null ? _this__u8e3s4.i4i_1 : textIndent;
    var tmp5_textAlign = !(textAlign === Companion_getInstance_30().o4l_1) ? textAlign : _this__u8e3s4.f4i_1;
    var tmp6_textDirection = !(textDirection === Companion_getInstance_32().b4l_1) ? textDirection : _this__u8e3s4.g4i_1;
    var tmp7_platformStyle = mergePlatformStyle(_this__u8e3s4, platformStyle);
    var tmp8_lineHeightStyle = lineHeightStyle == null ? _this__u8e3s4.k4i_1 : lineHeightStyle;
    var tmp9_lineBreak = !(lineBreak === Companion_getInstance_40().s4l_1) ? lineBreak : _this__u8e3s4.l4i_1;
    var tmp10_hyphens = !(hyphens === Companion_getInstance_26().v4l_1) ? hyphens : _this__u8e3s4.m4i_1;
    var tmp11_textMotion = textMotion == null ? _this__u8e3s4.n4i_1 : textMotion;
    return new ParagraphStyle_0(tmp5_textAlign, tmp6_textDirection, tmp3_lineHeight, tmp4_textIndent, tmp7_platformStyle, tmp8_lineHeightStyle, tmp9_lineBreak, tmp10_hyphens, tmp11_textMotion);
  }
  function mergePlatformStyle(_this__u8e3s4, other) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    if (_this__u8e3s4.j4i_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.j4i_1;
    return _this__u8e3s4.j4i_1.y4l(other);
  }
  function resolveParagraphStyleDefaults(style, direction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp = style.f4i_1 === Companion_getInstance_30().o4l_1 ? Companion_getInstance_30().m4l_1 : style.f4i_1;
    var tmp_0 = resolveTextDirection_0(direction, style.g4i_1);
    var tmp_1 = get_isUnspecified(style.h4i_1) ? get_DefaultLineHeight() : style.h4i_1;
    var tmp0_elvis_lhs = style.i4i_1;
    var tmp_2 = tmp0_elvis_lhs == null ? Companion_getInstance_35().z4l_1 : tmp0_elvis_lhs;
    var tmp_3 = style.l4i_1 === Companion_getInstance_40().s4l_1 ? Companion_getInstance_40().p4l_1 : style.l4i_1;
    var tmp_4 = style.m4i_1 === Companion_getInstance_26().v4l_1 ? Companion_getInstance_26().t4l_1 : style.m4i_1;
    var tmp1_elvis_lhs = style.n4i_1;
    return new ParagraphStyle_0(tmp, tmp_0, tmp_1, tmp_2, style.j4i_1, style.k4i_1, tmp_3, tmp_4, tmp1_elvis_lhs == null ? Companion_getInstance_41().a4m_1 : tmp1_elvis_lhs);
  }
  var properties_initialized_ParagraphStyle_kt_y6w405;
  function _init_properties_ParagraphStyle_kt__lbx7er() {
    if (!properties_initialized_ParagraphStyle_kt_y6w405) {
      properties_initialized_ParagraphStyle_kt_y6w405 = true;
      DefaultLineHeight = Companion_getInstance_1().s3i_1;
    }
  }
  function Placeholder() {
  }
  protoOf(Placeholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Placeholder))
      return false;
    if (!equals(this.c4m_1, other.c4m_1))
      return false;
    if (!equals(this.d4m_1, other.d4m_1))
      return false;
    if (!(this.e4m_1 === other.e4m_1))
      return false;
    return true;
  };
  protoOf(Placeholder).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.c4m_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.d4m_1) | 0;
    result = imul(31, result) + PlaceholderVerticalAlign__hashCode_impl_1c0k16(this.e4m_1) | 0;
    return result;
  };
  protoOf(Placeholder).toString = function () {
    return 'Placeholder(' + ('width=' + TextUnit__toString_impl_51ghw0(this.c4m_1) + ', ') + ('height=' + TextUnit__toString_impl_51ghw0(this.d4m_1) + ', ') + ('placeholderVerticalAlign=' + PlaceholderVerticalAlign__toString_impl_kf5crp(this.e4m_1)) + ')';
  };
  function _PlaceholderVerticalAlign___init__impl__mll0or(value) {
    return value;
  }
  function PlaceholderVerticalAlign__toString_impl_kf5crp($this) {
    return $this === Companion_getInstance_13().f4m_1 ? 'AboveBaseline' : $this === Companion_getInstance_13().g4m_1 ? 'Top' : $this === Companion_getInstance_13().h4m_1 ? 'Bottom' : $this === Companion_getInstance_13().i4m_1 ? 'Center' : $this === Companion_getInstance_13().j4m_1 ? 'TextTop' : $this === Companion_getInstance_13().k4m_1 ? 'TextBottom' : $this === Companion_getInstance_13().l4m_1 ? 'TextCenter' : 'Invalid';
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.f4m_1 = _PlaceholderVerticalAlign___init__impl__mll0or(1);
    this.g4m_1 = _PlaceholderVerticalAlign___init__impl__mll0or(2);
    this.h4m_1 = _PlaceholderVerticalAlign___init__impl__mll0or(3);
    this.i4m_1 = _PlaceholderVerticalAlign___init__impl__mll0or(4);
    this.j4m_1 = _PlaceholderVerticalAlign___init__impl__mll0or(5);
    this.k4m_1 = _PlaceholderVerticalAlign___init__impl__mll0or(6);
    this.l4m_1 = _PlaceholderVerticalAlign___init__impl__mll0or(7);
  }
  var Companion_instance_1;
  function Companion_getInstance_13() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function PlaceholderVerticalAlign__hashCode_impl_1c0k16($this) {
    return $this;
  }
  function get_AnnotatedStringSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotatedStringSaver;
  }
  var AnnotatedStringSaver;
  function get_AnnotationRangeListSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotationRangeListSaver;
  }
  var AnnotationRangeListSaver;
  function get_AnnotationRangeSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotationRangeSaver;
  }
  var AnnotationRangeSaver;
  function get_VerbatimTtsAnnotationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return VerbatimTtsAnnotationSaver;
  }
  var VerbatimTtsAnnotationSaver;
  function get_UrlAnnotationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return UrlAnnotationSaver;
  }
  var UrlAnnotationSaver;
  function get_LinkSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LinkSaver;
  }
  var LinkSaver;
  function get_ClickableSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ClickableSaver;
  }
  var ClickableSaver;
  function get_ParagraphStyleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ParagraphStyleSaver;
  }
  var ParagraphStyleSaver;
  function get_SpanStyleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return SpanStyleSaver;
  }
  var SpanStyleSaver;
  function get_TextLinkStylesSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextLinkStylesSaver;
  }
  var TextLinkStylesSaver;
  function get_TextDecorationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextDecorationSaver;
  }
  var TextDecorationSaver;
  function get_TextGeometricTransformSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextGeometricTransformSaver;
  }
  var TextGeometricTransformSaver;
  function get_TextIndentSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextIndentSaver;
  }
  var TextIndentSaver;
  function get_FontWeightSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return FontWeightSaver;
  }
  var FontWeightSaver;
  function get_BaselineShiftSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return BaselineShiftSaver;
  }
  var BaselineShiftSaver;
  var TextRangeSaver;
  function get_ShadowSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ShadowSaver;
  }
  var ShadowSaver;
  function get_ColorSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ColorSaver;
  }
  var ColorSaver;
  function get_TextUnitSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextUnitSaver;
  }
  var TextUnitSaver;
  function get_OffsetSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return OffsetSaver;
  }
  var OffsetSaver;
  function get_LocaleListSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LocaleListSaver;
  }
  var LocaleListSaver;
  function get_LocaleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LocaleSaver;
  }
  var LocaleSaver;
  function save(value) {
    _init_properties_Savers_kt__o6r3ry();
    return value;
  }
  function save_0(value, saver, scope) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.save.<anonymous>' call
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.ui.text.save.<anonymous>.<anonymous>' call
      tmp = saver.u3e(scope, value);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  var AnnotationType_Paragraph_instance;
  var AnnotationType_Span_instance;
  var AnnotationType_VerbatimTts_instance;
  var AnnotationType_Url_instance;
  var AnnotationType_Link_instance;
  var AnnotationType_Clickable_instance;
  var AnnotationType_String_instance;
  var AnnotationType_entriesInitialized;
  function AnnotationType_initEntries() {
    if (AnnotationType_entriesInitialized)
      return Unit_instance;
    AnnotationType_entriesInitialized = true;
    AnnotationType_Paragraph_instance = new AnnotationType('Paragraph', 0);
    AnnotationType_Span_instance = new AnnotationType('Span', 1);
    AnnotationType_VerbatimTts_instance = new AnnotationType('VerbatimTts', 2);
    AnnotationType_Url_instance = new AnnotationType('Url', 3);
    AnnotationType_Link_instance = new AnnotationType('Link', 4);
    AnnotationType_Clickable_instance = new AnnotationType('Clickable', 5);
    AnnotationType_String_instance = new AnnotationType('String', 6);
  }
  function AnnotationType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_Saver(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextUnitSaver();
  }
  function get_Saver_0(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextIndentSaver();
  }
  function get_Saver_1(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_ColorSaver();
  }
  function get_Saver_2(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_FontWeightSaver();
  }
  function get_Saver_3(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_BaselineShiftSaver();
  }
  function get_Saver_4(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextGeometricTransformSaver();
  }
  function get_Saver_5(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LocaleListSaver();
  }
  function get_Saver_6(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextDecorationSaver();
  }
  function get_Saver_7(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_ShadowSaver();
  }
  function get_Saver_8(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_OffsetSaver();
  }
  function NonNullValueClassSaver() {
  }
  function NonNullValueClassSaver_0(save, restore) {
    _init_properties_Savers_kt__o6r3ry();
    return new NonNullValueClassSaver$1(save, restore);
  }
  function get_Saver_9(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LocaleSaver();
  }
  function AnnotatedStringSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(it.x4h_1), save_0(it.b4i(), get_AnnotationRangeListSaver(), $this$Saver), save_0(it.c4i(), get_AnnotationRangeListSaver(), $this$Saver), save_0(it.a4i_1, get_AnnotationRangeListSaver(), $this$Saver)]);
  }
  function AnnotatedStringSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.p(1);
    var tmp1 = get_AnnotationRangeListSaver();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp1, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_1 = tmp1.k3e(tmp0);
        tmp_0 = (tmp_1 == null ? true : isInterface(tmp_1, KtList)) ? tmp_1 : THROW_CCE();
      }
      tmp$ret$0 = tmp_0;
    }
    var spanStylesOrNull = tmp$ret$0;
    var tmp2 = list.p(2);
    var tmp3 = get_AnnotationRangeListSaver();
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_2;
      if (equals(tmp2, false)) {
        tmp_2 = !isInterface(tmp3, NonNullValueClassSaver);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_3;
      if (tmp2 == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_4 = tmp3.k3e(tmp2);
        tmp_3 = (tmp_4 == null ? true : isInterface(tmp_4, KtList)) ? tmp_4 : THROW_CCE();
      }
      tmp$ret$5 = tmp_3;
    }
    var paragraphStylesOrNull = tmp$ret$5;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.p(0);
    var tmp_5;
    if (tmp0_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_5 = typeof tmp0_safe_receiver === 'string' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$12 = tmp_5;
    var tmp_6 = ensureNotNull(tmp$ret$12);
    var tmp_7;
    if (spanStylesOrNull == null) {
      tmp_7 = null;
    } else {
      // Inline function 'kotlin.collections.ifEmpty' call
      var tmp_8;
      if (spanStylesOrNull.q()) {
        // Inline function 'androidx.compose.ui.text.AnnotatedStringSaver.<anonymous>.<anonymous>' call
        tmp_8 = null;
      } else {
        tmp_8 = spanStylesOrNull;
      }
      tmp_7 = tmp_8;
    }
    var tmp_9 = tmp_7;
    var tmp_10;
    if (paragraphStylesOrNull == null) {
      tmp_10 = null;
    } else {
      // Inline function 'kotlin.collections.ifEmpty' call
      var tmp_11;
      if (paragraphStylesOrNull.q()) {
        // Inline function 'androidx.compose.ui.text.AnnotatedStringSaver.<anonymous>.<anonymous>' call
        tmp_11 = null;
      } else {
        tmp_11 = paragraphStylesOrNull;
      }
      tmp_10 = tmp_11;
    }
    var tmp_12 = tmp_10;
    var tmp7 = list.p(3);
    var tmp8 = get_AnnotationRangeListSaver();
    var tmp$ret$17;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_13;
      if (equals(tmp7, false)) {
        tmp_13 = !isInterface(tmp8, NonNullValueClassSaver);
      } else {
        tmp_13 = false;
      }
      if (tmp_13) {
        tmp$ret$17 = null;
        break $l$block_1;
      }
      var tmp_14;
      if (tmp7 == null) {
        tmp_14 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_15 = tmp8.k3e(tmp7);
        tmp_14 = (tmp_15 == null ? true : isInterface(tmp_15, KtList)) ? tmp_15 : THROW_CCE();
      }
      tmp$ret$17 = tmp_14;
    }
    return new AnnotatedString(tmp_6, tmp_9, tmp_12, tmp$ret$17);
  }
  function AnnotationRangeListSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(it.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = it.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = it.p(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.AnnotationRangeListSaver.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var element = save_0(item, get_AnnotationRangeSaver(), $this$Saver);
        target.e(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function AnnotationRangeListSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(list.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = list.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.p(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.AnnotationRangeListSaver.<anonymous>.<anonymous>' call
        var tmp1 = get_AnnotationRangeSaver();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp;
          if (equals(item, false)) {
            tmp = !isInterface(tmp1, NonNullValueClassSaver);
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$0 = null;
            break $l$block;
          }
          var tmp_0;
          if (item == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_1 = tmp1.k3e(item);
            tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof Range) ? tmp_1 : THROW_CCE();
          }
          tmp$ret$0 = tmp_0;
        }
        var range = ensureNotNull(tmp$ret$0);
        // Inline function 'kotlin.collections.plusAssign' call
        target.e(range);
      }
       while (inductionVariable <= last);
    return target;
  }
  function AnnotationRangeSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp0_subject = it.r4h_1;
    var tmp;
    if (tmp0_subject instanceof ParagraphStyle_0) {
      tmp = AnnotationType_Paragraph_getInstance();
    } else {
      if (tmp0_subject instanceof SpanStyle) {
        tmp = AnnotationType_Span_getInstance();
      } else {
        if (tmp0_subject instanceof VerbatimTtsAnnotation) {
          tmp = AnnotationType_VerbatimTts_getInstance();
        } else {
          if (tmp0_subject instanceof UrlAnnotation) {
            tmp = AnnotationType_Url_getInstance();
          } else {
            if (tmp0_subject instanceof Url) {
              tmp = AnnotationType_Link_getInstance();
            } else {
              if (tmp0_subject instanceof Clickable) {
                tmp = AnnotationType_Clickable_getInstance();
              } else {
                tmp = AnnotationType_String_getInstance();
              }
            }
          }
        }
      }
    }
    var marker = tmp;
    var tmp_0;
    switch (marker.s2_1) {
      case 0:
        var tmp_1 = it.r4h_1;
        tmp_0 = save_0(tmp_1 instanceof ParagraphStyle_0 ? tmp_1 : THROW_CCE(), get_ParagraphStyleSaver(), $this$Saver);
        break;
      case 1:
        var tmp_2 = it.r4h_1;
        tmp_0 = save_0(tmp_2 instanceof SpanStyle ? tmp_2 : THROW_CCE(), get_SpanStyleSaver(), $this$Saver);
        break;
      case 2:
        var tmp_3 = it.r4h_1;
        tmp_0 = save_0(tmp_3 instanceof VerbatimTtsAnnotation ? tmp_3 : THROW_CCE(), get_VerbatimTtsAnnotationSaver(), $this$Saver);
        break;
      case 3:
        var tmp_4 = it.r4h_1;
        tmp_0 = save_0(tmp_4 instanceof UrlAnnotation ? tmp_4 : THROW_CCE(), get_UrlAnnotationSaver(), $this$Saver);
        break;
      case 4:
        var tmp_5 = it.r4h_1;
        tmp_0 = save_0(tmp_5 instanceof Url ? tmp_5 : THROW_CCE(), get_LinkSaver(), $this$Saver);
        break;
      case 5:
        var tmp_6 = it.r4h_1;
        tmp_0 = save_0(tmp_6 instanceof Clickable ? tmp_6 : THROW_CCE(), get_ClickableSaver(), $this$Saver);
        break;
      case 6:
        tmp_0 = save(it.r4h_1);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var item = tmp_0;
    return arrayListOf([save(marker), item, save(it.s4h_1), save(it.t4h_1), save(it.u4h_1)]);
  }
  function AnnotationRangeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.p(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = tmp0_safe_receiver instanceof AnnotationType ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    var marker = ensureNotNull(tmp$ret$2);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.p(2);
    var tmp_0;
    if (tmp0_safe_receiver_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_0 = typeof tmp0_safe_receiver_0 === 'number' ? tmp0_safe_receiver_0 : THROW_CCE();
    }
    var tmp$ret$5 = tmp_0;
    var start = ensureNotNull(tmp$ret$5);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_1 = list.p(3);
    var tmp_1;
    if (tmp0_safe_receiver_1 == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_1 = typeof tmp0_safe_receiver_1 === 'number' ? tmp0_safe_receiver_1 : THROW_CCE();
    }
    var tmp$ret$8 = tmp_1;
    var end = ensureNotNull(tmp$ret$8);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_2 = list.p(4);
    var tmp_2;
    if (tmp0_safe_receiver_2 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_2 = typeof tmp0_safe_receiver_2 === 'string' ? tmp0_safe_receiver_2 : THROW_CCE();
    }
    var tmp$ret$11 = tmp_2;
    var tag = ensureNotNull(tmp$ret$11);
    var tmp_3;
    switch (marker.s2_1) {
      case 0:
        var tmp4 = list.p(1);
        var tmp5 = get_ParagraphStyleSaver();
        var tmp$ret$12;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_4;
          if (equals(tmp4, false)) {
            tmp_4 = !isInterface(tmp5, NonNullValueClassSaver);
          } else {
            tmp_4 = false;
          }
          if (tmp_4) {
            tmp$ret$12 = null;
            break $l$block;
          }
          var tmp_5;
          if (tmp4 == null) {
            tmp_5 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_6 = tmp5.k3e(tmp4);
            tmp_5 = (tmp_6 == null ? true : tmp_6 instanceof ParagraphStyle_0) ? tmp_6 : THROW_CCE();
          }
          tmp$ret$12 = tmp_5;
        }

        var item = ensureNotNull(tmp$ret$12);
        tmp_3 = new Range(item, start, end, tag);
        break;
      case 1:
        var tmp6 = list.p(1);
        var tmp7 = get_SpanStyleSaver();
        var tmp$ret$17;
        $l$block_0: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_7;
          if (equals(tmp6, false)) {
            tmp_7 = !isInterface(tmp7, NonNullValueClassSaver);
          } else {
            tmp_7 = false;
          }
          if (tmp_7) {
            tmp$ret$17 = null;
            break $l$block_0;
          }
          var tmp_8;
          if (tmp6 == null) {
            tmp_8 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_9 = tmp7.k3e(tmp6);
            tmp_8 = (tmp_9 == null ? true : tmp_9 instanceof SpanStyle) ? tmp_9 : THROW_CCE();
          }
          tmp$ret$17 = tmp_8;
        }

        var item_0 = ensureNotNull(tmp$ret$17);
        tmp_3 = new Range(item_0, start, end, tag);
        break;
      case 2:
        var tmp8 = list.p(1);
        var tmp9 = get_VerbatimTtsAnnotationSaver();
        var tmp$ret$22;
        $l$block_1: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_10;
          if (equals(tmp8, false)) {
            tmp_10 = !isInterface(tmp9, NonNullValueClassSaver);
          } else {
            tmp_10 = false;
          }
          if (tmp_10) {
            tmp$ret$22 = null;
            break $l$block_1;
          }
          var tmp_11;
          if (tmp8 == null) {
            tmp_11 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_12 = tmp9.k3e(tmp8);
            tmp_11 = (tmp_12 == null ? true : tmp_12 instanceof VerbatimTtsAnnotation) ? tmp_12 : THROW_CCE();
          }
          tmp$ret$22 = tmp_11;
        }

        var item_1 = ensureNotNull(tmp$ret$22);
        tmp_3 = new Range(item_1, start, end, tag);
        break;
      case 3:
        var tmp10 = list.p(1);
        var tmp11 = get_UrlAnnotationSaver();
        var tmp$ret$27;
        $l$block_2: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_13;
          if (equals(tmp10, false)) {
            tmp_13 = !isInterface(tmp11, NonNullValueClassSaver);
          } else {
            tmp_13 = false;
          }
          if (tmp_13) {
            tmp$ret$27 = null;
            break $l$block_2;
          }
          var tmp_14;
          if (tmp10 == null) {
            tmp_14 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_15 = tmp11.k3e(tmp10);
            tmp_14 = (tmp_15 == null ? true : tmp_15 instanceof UrlAnnotation) ? tmp_15 : THROW_CCE();
          }
          tmp$ret$27 = tmp_14;
        }

        var item_2 = ensureNotNull(tmp$ret$27);
        tmp_3 = new Range(item_2, start, end, tag);
        break;
      case 4:
        var tmp12 = list.p(1);
        var tmp13 = get_LinkSaver();
        var tmp$ret$32;
        $l$block_3: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_16;
          if (equals(tmp12, false)) {
            tmp_16 = !isInterface(tmp13, NonNullValueClassSaver);
          } else {
            tmp_16 = false;
          }
          if (tmp_16) {
            tmp$ret$32 = null;
            break $l$block_3;
          }
          var tmp_17;
          if (tmp12 == null) {
            tmp_17 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_18 = tmp13.k3e(tmp12);
            tmp_17 = (tmp_18 == null ? true : tmp_18 instanceof Url) ? tmp_18 : THROW_CCE();
          }
          tmp$ret$32 = tmp_17;
        }

        var item_3 = ensureNotNull(tmp$ret$32);
        tmp_3 = new Range(item_3, start, end, tag);
        break;
      case 5:
        var tmp14 = list.p(1);
        var tmp15 = get_ClickableSaver();
        var tmp$ret$37;
        $l$block_4: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_19;
          if (equals(tmp14, false)) {
            tmp_19 = !isInterface(tmp15, NonNullValueClassSaver);
          } else {
            tmp_19 = false;
          }
          if (tmp_19) {
            tmp$ret$37 = null;
            break $l$block_4;
          }
          var tmp_20;
          if (tmp14 == null) {
            tmp_20 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_21 = tmp15.k3e(tmp14);
            tmp_20 = (tmp_21 == null ? true : tmp_21 instanceof Clickable) ? tmp_21 : THROW_CCE();
          }
          tmp$ret$37 = tmp_20;
        }

        var item_4 = ensureNotNull(tmp$ret$37);
        tmp_3 = new Range(item_4, start, end, tag);
        break;
      case 6:
        // Inline function 'androidx.compose.ui.text.restore' call

        var tmp0_safe_receiver_3 = list.p(1);
        var tmp_22;
        if (tmp0_safe_receiver_3 == null) {
          tmp_22 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
          tmp_22 = typeof tmp0_safe_receiver_3 === 'string' ? tmp0_safe_receiver_3 : THROW_CCE();
        }

        var tmp$ret$44 = tmp_22;
        var item_5 = ensureNotNull(tmp$ret$44);
        tmp_3 = new Range(item_5, start, end, tag);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_3;
  }
  function VerbatimTtsAnnotationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return save(it.m4m_1);
  }
  function VerbatimTtsAnnotationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp;
    if (it == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = typeof it === 'string' ? it : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    return new VerbatimTtsAnnotation(ensureNotNull(tmp$ret$2));
  }
  function UrlAnnotationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return save(it.n4m_1);
  }
  function UrlAnnotationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp;
    if (it == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = typeof it === 'string' ? it : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    return new UrlAnnotation(ensureNotNull(tmp$ret$2));
  }
  function LinkSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(it.p4i_1), save_0(it.q4i_1, get_TextLinkStylesSaver(), $this$Saver)]);
  }
  function LinkSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.p(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = typeof tmp0_safe_receiver === 'string' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    var url = ensureNotNull(tmp$ret$2);
    var tmp1 = list.p(1);
    var tmp2 = get_TextLinkStylesSaver();
    var tmp$ret$3;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_0;
      if (equals(tmp1, false)) {
        tmp_0 = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$3 = null;
        break $l$block;
      }
      var tmp_1;
      if (tmp1 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_2 = tmp2.k3e(tmp1);
        tmp_1 = (tmp_2 == null ? true : tmp_2 instanceof TextLinkStyles) ? tmp_2 : THROW_CCE();
      }
      tmp$ret$3 = tmp_1;
    }
    var stylesOrNull = tmp$ret$3;
    return new Url(url, stylesOrNull);
  }
  function ClickableSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(it.s4i_1), save_0(it.t4i_1, get_TextLinkStylesSaver(), $this$Saver)]);
  }
  function ClickableSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.p(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = typeof tmp0_safe_receiver === 'string' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    var tag = ensureNotNull(tmp$ret$2);
    var tmp1 = list.p(1);
    var tmp2 = get_TextLinkStylesSaver();
    var tmp$ret$3;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_0;
      if (equals(tmp1, false)) {
        tmp_0 = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$3 = null;
        break $l$block;
      }
      var tmp_1;
      if (tmp1 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_2 = tmp2.k3e(tmp1);
        tmp_1 = (tmp_2 == null ? true : tmp_2 instanceof TextLinkStyles) ? tmp_2 : THROW_CCE();
      }
      tmp$ret$3 = tmp_1;
    }
    var stylesOrNull = tmp$ret$3;
    return new Clickable(tag, stylesOrNull, null);
  }
  function ParagraphStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(new TextAlign(it.f4i_1)), save(new TextDirection(it.g4i_1)), save_0(new TextUnit(it.h4i_1), get_Saver(Companion_getInstance_1()), $this$Saver), save_0(it.i4i_1, get_Saver_0(Companion_getInstance_35()), $this$Saver)]);
  }
  function ParagraphStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.p(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_0 = tmp0_safe_receiver instanceof TextAlign ? tmp0_safe_receiver.o4m_1 : THROW_CCE();
      var tmp_1 = tmp_0 == null ? null : new TextAlign(tmp_0);
      tmp = tmp_1 == null ? null : tmp_1.o4m_1;
    }
    var tmp_2 = tmp;
    var tmp_3 = ensureNotNull(tmp_2 == null ? null : new TextAlign(tmp_2));
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.p(1);
    var tmp_4;
    if (tmp0_safe_receiver_0 == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_5 = tmp0_safe_receiver_0 instanceof TextDirection ? tmp0_safe_receiver_0.p4m_1 : THROW_CCE();
      var tmp_6 = tmp_5 == null ? null : new TextDirection(tmp_5);
      tmp_4 = tmp_6 == null ? null : tmp_6.p4m_1;
    }
    var tmp_7 = tmp_4;
    var tmp_8 = ensureNotNull(tmp_7 == null ? null : new TextDirection(tmp_7));
    var tmp2 = list.p(2);
    var tmp3 = get_Saver(Companion_getInstance_1());
    var tmp$ret$6;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_9;
      if (equals(tmp2, false)) {
        tmp_9 = !isInterface(tmp3, NonNullValueClassSaver);
      } else {
        tmp_9 = false;
      }
      if (tmp_9) {
        tmp$ret$6 = null;
        break $l$block;
      }
      var tmp_10;
      if (tmp2 == null) {
        tmp_10 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_11 = tmp3.k3e(tmp2);
        var tmp_12;
        if (tmp_11 == null ? true : tmp_11 instanceof TextUnit) {
          var tmp_13 = tmp_11;
          tmp_12 = tmp_13 == null ? null : tmp_13.u3i_1;
        } else {
          tmp_12 = THROW_CCE();
        }
        var tmp_14 = tmp_12;
        var tmp_15 = tmp_14 == null ? null : new TextUnit(tmp_14);
        tmp_10 = tmp_15 == null ? null : tmp_15.u3i_1;
      }
      tmp$ret$6 = tmp_10;
    }
    var tmp_16 = tmp$ret$6;
    var tmp_17 = ensureNotNull(tmp_16 == null ? null : new TextUnit(tmp_16));
    var tmp4 = list.p(3);
    var tmp5 = get_Saver_0(Companion_getInstance_35());
    var tmp$ret$11;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_18;
      if (equals(tmp4, false)) {
        tmp_18 = !isInterface(tmp5, NonNullValueClassSaver);
      } else {
        tmp_18 = false;
      }
      if (tmp_18) {
        tmp$ret$11 = null;
        break $l$block_0;
      }
      var tmp_19;
      if (tmp4 == null) {
        tmp_19 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_20 = tmp5.k3e(tmp4);
        tmp_19 = (tmp_20 == null ? true : tmp_20 instanceof TextIndent_0) ? tmp_20 : THROW_CCE();
      }
      tmp$ret$11 = tmp_19;
    }
    return new ParagraphStyle_0(tmp_3.o4m_1, tmp_8.p4m_1, tmp_17.u3i_1, tmp$ret$11);
  }
  function SpanStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp = save_0(new Color(it.x4c()), get_Saver_1(Companion_getInstance()), $this$Saver);
    var tmp_0 = save_0(new TextUnit(it.r4m_1), get_Saver(Companion_getInstance_1()), $this$Saver);
    var tmp_1 = save_0(it.s4m_1, get_Saver_2(Companion_getInstance_22()), $this$Saver);
    var tmp_2 = it.t4m_1;
    var tmp_3 = save(tmp_2 == null ? null : new FontStyle(tmp_2));
    var tmp_4 = it.u4m_1;
    var tmp_5 = save(tmp_4 == null ? null : new FontSynthesis(tmp_4));
    var tmp_6 = save(-1);
    var tmp_7 = save(it.w4m_1);
    var tmp_8 = save_0(new TextUnit(it.x4m_1), get_Saver(Companion_getInstance_1()), $this$Saver);
    var tmp_9 = it.y4m_1;
    return arrayListOf([tmp, tmp_0, tmp_1, tmp_3, tmp_5, tmp_6, tmp_7, tmp_8, save_0(tmp_9 == null ? null : new BaselineShift(tmp_9), get_Saver_3(Companion_getInstance_25()), $this$Saver), save_0(it.z4m_1, get_Saver_4(Companion_getInstance_34()), $this$Saver), save_0(it.a4n_1, get_Saver_5(Companion_getInstance_24()), $this$Saver), save_0(new Color(it.b4n_1), get_Saver_1(Companion_getInstance()), $this$Saver), save_0(it.c4n_1, get_Saver_6(Companion_getInstance_31()), $this$Saver), save_0(it.d4n_1, get_Saver_7(Companion_getInstance_2()), $this$Saver)]);
  }
  function SpanStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.p(0);
    var tmp1 = get_Saver_1(Companion_getInstance());
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp1, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_1 = tmp1.k3e(tmp0);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof Color) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.s44_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new Color(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.s44_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6));
    var tmp2 = list.p(1);
    var tmp3 = get_Saver(Companion_getInstance_1());
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_8;
      if (equals(tmp2, false)) {
        tmp_8 = !isInterface(tmp3, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_9;
      if (tmp2 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_10 = tmp3.k3e(tmp2);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof TextUnit) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.u3i_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new TextUnit(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.u3i_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15));
    var tmp4 = list.p(2);
    var tmp5 = get_Saver_2(Companion_getInstance_22());
    var tmp$ret$10;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_17;
      if (equals(tmp4, false)) {
        tmp_17 = !isInterface(tmp5, NonNullValueClassSaver);
      } else {
        tmp_17 = false;
      }
      if (tmp_17) {
        tmp$ret$10 = null;
        break $l$block_1;
      }
      var tmp_18;
      if (tmp4 == null) {
        tmp_18 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_19 = tmp5.k3e(tmp4);
        tmp_18 = (tmp_19 == null ? true : tmp_19 instanceof FontWeight) ? tmp_19 : THROW_CCE();
      }
      tmp$ret$10 = tmp_18;
    }
    var tmp_20 = tmp$ret$10;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.p(3);
    var tmp_21;
    if (tmp0_safe_receiver == null) {
      tmp_21 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_22 = tmp0_safe_receiver instanceof FontStyle ? tmp0_safe_receiver.g4n_1 : THROW_CCE();
      var tmp_23 = tmp_22 == null ? null : new FontStyle(tmp_22);
      tmp_21 = tmp_23 == null ? null : tmp_23.g4n_1;
    }
    var tmp_24 = tmp_21;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.p(4);
    var tmp_25;
    if (tmp0_safe_receiver_0 == null) {
      tmp_25 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      var tmp_26 = tmp0_safe_receiver_0 instanceof FontSynthesis ? tmp0_safe_receiver_0.h4n_1 : THROW_CCE();
      var tmp_27 = tmp_26 == null ? null : new FontSynthesis(tmp_26);
      tmp_25 = tmp_27 == null ? null : tmp_27.h4n_1;
    }
    var tmp_28 = tmp_25;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_1 = list.p(6);
    var tmp_29;
    if (tmp0_safe_receiver_1 == null) {
      tmp_29 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_29 = typeof tmp0_safe_receiver_1 === 'string' ? tmp0_safe_receiver_1 : THROW_CCE();
    }
    var tmp_30 = tmp_29;
    var tmp9 = list.p(7);
    var tmp10 = get_Saver(Companion_getInstance_1());
    var tmp$ret$24;
    $l$block_2: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_31;
      if (equals(tmp9, false)) {
        tmp_31 = !isInterface(tmp10, NonNullValueClassSaver);
      } else {
        tmp_31 = false;
      }
      if (tmp_31) {
        tmp$ret$24 = null;
        break $l$block_2;
      }
      var tmp_32;
      if (tmp9 == null) {
        tmp_32 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_33 = tmp10.k3e(tmp9);
        var tmp_34;
        if (tmp_33 == null ? true : tmp_33 instanceof TextUnit) {
          var tmp_35 = tmp_33;
          tmp_34 = tmp_35 == null ? null : tmp_35.u3i_1;
        } else {
          tmp_34 = THROW_CCE();
        }
        var tmp_36 = tmp_34;
        var tmp_37 = tmp_36 == null ? null : new TextUnit(tmp_36);
        tmp_32 = tmp_37 == null ? null : tmp_37.u3i_1;
      }
      tmp$ret$24 = tmp_32;
    }
    var tmp_38 = tmp$ret$24;
    var tmp_39 = ensureNotNull(tmp_38 == null ? null : new TextUnit(tmp_38));
    var tmp11 = list.p(8);
    var tmp12 = get_Saver_3(Companion_getInstance_25());
    var tmp$ret$29;
    $l$block_3: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_40;
      if (equals(tmp11, false)) {
        tmp_40 = !isInterface(tmp12, NonNullValueClassSaver);
      } else {
        tmp_40 = false;
      }
      if (tmp_40) {
        tmp$ret$29 = null;
        break $l$block_3;
      }
      var tmp_41;
      if (tmp11 == null) {
        tmp_41 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_42 = tmp12.k3e(tmp11);
        var tmp_43;
        if (tmp_42 == null ? true : tmp_42 instanceof BaselineShift) {
          var tmp_44 = tmp_42;
          tmp_43 = tmp_44 == null ? null : tmp_44.i4n_1;
        } else {
          tmp_43 = THROW_CCE();
        }
        var tmp_45 = tmp_43;
        var tmp_46 = tmp_45 == null ? null : new BaselineShift(tmp_45);
        tmp_41 = tmp_46 == null ? null : tmp_46.i4n_1;
      }
      tmp$ret$29 = tmp_41;
    }
    var tmp_47 = tmp$ret$29;
    var tmp13 = list.p(9);
    var tmp14 = get_Saver_4(Companion_getInstance_34());
    var tmp$ret$34;
    $l$block_4: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_48;
      if (equals(tmp13, false)) {
        tmp_48 = !isInterface(tmp14, NonNullValueClassSaver);
      } else {
        tmp_48 = false;
      }
      if (tmp_48) {
        tmp$ret$34 = null;
        break $l$block_4;
      }
      var tmp_49;
      if (tmp13 == null) {
        tmp_49 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_50 = tmp14.k3e(tmp13);
        tmp_49 = (tmp_50 == null ? true : tmp_50 instanceof TextGeometricTransform) ? tmp_50 : THROW_CCE();
      }
      tmp$ret$34 = tmp_49;
    }
    var tmp_51 = tmp$ret$34;
    var tmp15 = list.p(10);
    var tmp16 = get_Saver_5(Companion_getInstance_24());
    var tmp$ret$39;
    $l$block_5: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_52;
      if (equals(tmp15, false)) {
        tmp_52 = !isInterface(tmp16, NonNullValueClassSaver);
      } else {
        tmp_52 = false;
      }
      if (tmp_52) {
        tmp$ret$39 = null;
        break $l$block_5;
      }
      var tmp_53;
      if (tmp15 == null) {
        tmp_53 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_54 = tmp16.k3e(tmp15);
        tmp_53 = (tmp_54 == null ? true : tmp_54 instanceof LocaleList) ? tmp_54 : THROW_CCE();
      }
      tmp$ret$39 = tmp_53;
    }
    var tmp_55 = tmp$ret$39;
    var tmp17 = list.p(11);
    var tmp18 = get_Saver_1(Companion_getInstance());
    var tmp$ret$44;
    $l$block_6: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_56;
      if (equals(tmp17, false)) {
        tmp_56 = !isInterface(tmp18, NonNullValueClassSaver);
      } else {
        tmp_56 = false;
      }
      if (tmp_56) {
        tmp$ret$44 = null;
        break $l$block_6;
      }
      var tmp_57;
      if (tmp17 == null) {
        tmp_57 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_58 = tmp18.k3e(tmp17);
        var tmp_59;
        if (tmp_58 == null ? true : tmp_58 instanceof Color) {
          var tmp_60 = tmp_58;
          tmp_59 = tmp_60 == null ? null : tmp_60.s44_1;
        } else {
          tmp_59 = THROW_CCE();
        }
        var tmp_61 = tmp_59;
        var tmp_62 = tmp_61 == null ? null : new Color(tmp_61);
        tmp_57 = tmp_62 == null ? null : tmp_62.s44_1;
      }
      tmp$ret$44 = tmp_57;
    }
    var tmp_63 = tmp$ret$44;
    var tmp_64 = ensureNotNull(tmp_63 == null ? null : new Color(tmp_63));
    var tmp19 = list.p(12);
    var tmp20 = get_Saver_6(Companion_getInstance_31());
    var tmp$ret$49;
    $l$block_7: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_65;
      if (equals(tmp19, false)) {
        tmp_65 = !isInterface(tmp20, NonNullValueClassSaver);
      } else {
        tmp_65 = false;
      }
      if (tmp_65) {
        tmp$ret$49 = null;
        break $l$block_7;
      }
      var tmp_66;
      if (tmp19 == null) {
        tmp_66 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_67 = tmp20.k3e(tmp19);
        tmp_66 = (tmp_67 == null ? true : tmp_67 instanceof TextDecoration) ? tmp_67 : THROW_CCE();
      }
      tmp$ret$49 = tmp_66;
    }
    var tmp_68 = tmp$ret$49;
    var tmp21 = list.p(13);
    var tmp22 = get_Saver_7(Companion_getInstance_2());
    var tmp$ret$54;
    $l$block_8: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_69;
      if (equals(tmp21, false)) {
        tmp_69 = !isInterface(tmp22, NonNullValueClassSaver);
      } else {
        tmp_69 = false;
      }
      if (tmp_69) {
        tmp$ret$54 = null;
        break $l$block_8;
      }
      var tmp_70;
      if (tmp21 == null) {
        tmp_70 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_71 = tmp22.k3e(tmp21);
        tmp_70 = (tmp_71 == null ? true : tmp_71 instanceof Shadow) ? tmp_71 : THROW_CCE();
      }
      tmp$ret$54 = tmp_70;
    }
    return SpanStyle_init_$Create$(tmp_7.s44_1, tmp_16.u3i_1, tmp_20, tmp_24, tmp_28, VOID, tmp_30, tmp_39.u3i_1, tmp_47, tmp_51, tmp_55, tmp_64.s44_1, tmp_68, tmp$ret$54);
  }
  function TextLinkStylesSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(it.j4n_1, get_SpanStyleSaver(), $this$Saver), save_0(it.k4n_1, get_SpanStyleSaver(), $this$Saver), save_0(it.l4n_1, get_SpanStyleSaver(), $this$Saver), save_0(it.m4n_1, get_SpanStyleSaver(), $this$Saver)]);
  }
  function TextLinkStylesSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.p(0);
    var tmp1 = get_SpanStyleSaver();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp1, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_1 = tmp1.k3e(tmp0);
        tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof SpanStyle) ? tmp_1 : THROW_CCE();
      }
      tmp$ret$0 = tmp_0;
    }
    var styleOrNull = tmp$ret$0;
    var tmp2 = list.p(1);
    var tmp3 = get_SpanStyleSaver();
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_2;
      if (equals(tmp2, false)) {
        tmp_2 = !isInterface(tmp3, NonNullValueClassSaver);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_3;
      if (tmp2 == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_4 = tmp3.k3e(tmp2);
        tmp_3 = (tmp_4 == null ? true : tmp_4 instanceof SpanStyle) ? tmp_4 : THROW_CCE();
      }
      tmp$ret$5 = tmp_3;
    }
    var focusedStyleOrNull = tmp$ret$5;
    var tmp4 = list.p(2);
    var tmp5 = get_SpanStyleSaver();
    var tmp$ret$10;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_5;
      if (equals(tmp4, false)) {
        tmp_5 = !isInterface(tmp5, NonNullValueClassSaver);
      } else {
        tmp_5 = false;
      }
      if (tmp_5) {
        tmp$ret$10 = null;
        break $l$block_1;
      }
      var tmp_6;
      if (tmp4 == null) {
        tmp_6 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_7 = tmp5.k3e(tmp4);
        tmp_6 = (tmp_7 == null ? true : tmp_7 instanceof SpanStyle) ? tmp_7 : THROW_CCE();
      }
      tmp$ret$10 = tmp_6;
    }
    var hoveredStyleOrNull = tmp$ret$10;
    var tmp6 = list.p(3);
    var tmp7 = get_SpanStyleSaver();
    var tmp$ret$15;
    $l$block_2: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_8;
      if (equals(tmp6, false)) {
        tmp_8 = !isInterface(tmp7, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$15 = null;
        break $l$block_2;
      }
      var tmp_9;
      if (tmp6 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_10 = tmp7.k3e(tmp6);
        tmp_9 = (tmp_10 == null ? true : tmp_10 instanceof SpanStyle) ? tmp_10 : THROW_CCE();
      }
      tmp$ret$15 = tmp_9;
    }
    var pressedStyleOrNull = tmp$ret$15;
    return new TextLinkStyles(styleOrNull, focusedStyleOrNull, hoveredStyleOrNull, pressedStyleOrNull);
  }
  function TextDecorationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.n4n_1;
  }
  function TextDecorationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new TextDecoration(typeof it === 'number' ? it : THROW_CCE());
  }
  function TextGeometricTransformSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([it.o4n_1, it.p4n_1]);
  }
  function TextGeometricTransformSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    return new TextGeometricTransform(list.p(0), list.p(1));
  }
  function TextIndentSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new TextUnit(it.q4n_1), get_Saver(Companion_getInstance_1()), $this$Saver), save_0(new TextUnit(it.r4n_1), get_Saver(Companion_getInstance_1()), $this$Saver)]);
  }
  function TextIndentSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.p(0);
    var tmp1 = get_Saver(Companion_getInstance_1());
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp1, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_1 = tmp1.k3e(tmp0);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof TextUnit) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.u3i_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new TextUnit(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.u3i_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new TextUnit(tmp_6));
    var tmp2 = list.p(1);
    var tmp3 = get_Saver(Companion_getInstance_1());
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_8;
      if (equals(tmp2, false)) {
        tmp_8 = !isInterface(tmp3, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_9;
      if (tmp2 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_10 = tmp3.k3e(tmp2);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof TextUnit) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.u3i_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new TextUnit(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.u3i_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    return new TextIndent_0(tmp_7.u3i_1, ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15)).u3i_1);
  }
  function FontWeightSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.s4n_1;
  }
  function FontWeightSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new FontWeight(typeof it === 'number' ? it : THROW_CCE());
  }
  function BaselineShiftSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _BaselineShift___get_multiplier__impl__qhmjek(it.i4n_1);
  }
  function BaselineShiftSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new BaselineShift(_BaselineShift___init__impl__scj05g(typeof it === 'number' ? it : THROW_CCE()));
  }
  function TextRangeSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(_TextRange___get_start__impl__ww4t90(it.n4k_1)), save(_TextRange___get_end__impl__gcdxpp(it.n4k_1))]);
  }
  function TextRangeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.p(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$2 = tmp;
    var tmp_0 = ensureNotNull(tmp$ret$2);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.p(1);
    var tmp_1;
    if (tmp0_safe_receiver_0 == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_1 = typeof tmp0_safe_receiver_0 === 'number' ? tmp0_safe_receiver_0 : THROW_CCE();
    }
    var tmp$ret$5 = tmp_1;
    return new TextRange(TextRange_0(tmp_0, ensureNotNull(tmp$ret$5)));
  }
  function ShadowSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new Color(it.w48_1), get_Saver_1(Companion_getInstance()), $this$Saver), save_0(new Offset_0(it.x48_1), get_Saver_8(Companion_getInstance_3()), $this$Saver), save(it.y48_1)]);
  }
  function ShadowSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.p(0);
    var tmp1 = get_Saver_1(Companion_getInstance());
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp1, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_1 = tmp1.k3e(tmp0);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof Color) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.s44_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new Color(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.s44_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6));
    var tmp2 = list.p(1);
    var tmp3 = get_Saver_8(Companion_getInstance_3());
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_8;
      if (equals(tmp2, false)) {
        tmp_8 = !isInterface(tmp3, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_9;
      if (tmp2 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
        var tmp_10 = tmp3.k3e(tmp2);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof Offset_0) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.g3g_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new Offset_0(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.g3g_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new Offset_0(tmp_15));
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.p(2);
    var tmp_17;
    if (tmp0_safe_receiver == null) {
      tmp_17 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
      tmp_17 = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$12 = tmp_17;
    return new Shadow(tmp_7.s44_1, tmp_16.g3g_1, ensureNotNull(tmp$ret$12));
  }
  function ColorSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isUnspecified' call
    var this_0 = it.s44_1;
    if (equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = false;
    } else {
      tmp = toArgb(it.s44_1);
    }
    return tmp;
  }
  function ColorSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance().j45_1;
    } else {
      tmp = Color_0(typeof it === 'number' ? it : THROW_CCE());
    }
    var tmp_0 = tmp;
    return tmp_0 == null ? null : new Color(tmp_0);
  }
  function TextUnitSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, new TextUnit(Companion_getInstance_1().s3i_1))) {
      tmp = false;
    } else {
      tmp = arrayListOf([save(_TextUnit___get_value__impl__hpbx0k(it.u3i_1)), save(new TextUnitType(_TextUnit___get_type__impl__uc2olt(it.u3i_1)))]);
    }
    return tmp;
  }
  function TextUnitSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance_1().s3i_1;
    } else {
      var list = isInterface(it, KtList) ? it : THROW_CCE();
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver = list.p(0);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        tmp_0 = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
      }
      var tmp$ret$2 = tmp_0;
      var tmp_1 = ensureNotNull(tmp$ret$2);
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver_0 = list.p(1);
      var tmp_2;
      if (tmp0_safe_receiver_0 == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        var tmp_3 = tmp0_safe_receiver_0 instanceof TextUnitType ? tmp0_safe_receiver_0.t3i_1 : THROW_CCE();
        var tmp_4 = tmp_3 == null ? null : new TextUnitType(tmp_3);
        tmp_2 = tmp_4 == null ? null : tmp_4.t3i_1;
      }
      var tmp_5 = tmp_2;
      tmp = TextUnit_0(tmp_1, ensureNotNull(tmp_5 == null ? null : new TextUnitType(tmp_5)).t3i_1);
    }
    var tmp_6 = tmp;
    return tmp_6 == null ? null : new TextUnit(tmp_6);
  }
  function OffsetSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, new Offset_0(Companion_getInstance_3().f3g_1))) {
      tmp = false;
    } else {
      tmp = arrayListOf([save(_Offset___get_x__impl__xvi35n(it.g3g_1)), save(_Offset___get_y__impl__8bzhra(it.g3g_1))]);
    }
    return tmp;
  }
  function OffsetSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance_3().f3g_1;
    } else {
      var list = isInterface(it, KtList) ? it : THROW_CCE();
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver = list.p(0);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        tmp_0 = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
      }
      var tmp$ret$2 = tmp_0;
      var tmp_1 = ensureNotNull(tmp$ret$2);
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver_0 = list.p(1);
      var tmp_2;
      if (tmp0_safe_receiver_0 == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
        tmp_2 = typeof tmp0_safe_receiver_0 === 'number' ? tmp0_safe_receiver_0 : THROW_CCE();
      }
      var tmp$ret$5 = tmp_2;
      tmp = Offset(tmp_1, ensureNotNull(tmp$ret$5));
    }
    var tmp_3 = tmp;
    return tmp_3 == null ? null : new Offset_0(tmp_3);
  }
  function LocaleListSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = it.t4n_1;
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(this_0.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.LocaleListSaver.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var element = save_0(item, get_Saver_9(Companion_instance_11), $this$Saver);
        target.e(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function LocaleListSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(list.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = list.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.p(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.LocaleListSaver.<anonymous>.<anonymous>' call
        var tmp1 = get_Saver_9(Companion_instance_11);
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp;
          if (equals(item, false)) {
            tmp = !isInterface(tmp1, NonNullValueClassSaver);
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$0 = null;
            break $l$block;
          }
          var tmp_0;
          if (item == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>' call
            // Inline function 'kotlin.with' call
            // Inline function 'androidx.compose.ui.text.restore.<anonymous>.<anonymous>' call
            var tmp_1 = tmp1.k3e(item);
            tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof Locale) ? tmp_1 : THROW_CCE();
          }
          tmp$ret$0 = tmp_0;
        }
        // Inline function 'kotlin.collections.plusAssign' call
        var element = ensureNotNull(tmp$ret$0);
        target.e(element);
      }
       while (inductionVariable <= last);
    return new LocaleList(target);
  }
  function LocaleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.w4n();
  }
  function LocaleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return Locale_init_$Create$(typeof it === 'string' ? it : THROW_CCE());
  }
  function NonNullValueClassSaver$1($save, $restore) {
    this.x4n_1 = $save;
    this.y4n_1 = $restore;
  }
  protoOf(NonNullValueClassSaver$1).u3e = function (_this__u8e3s4, value) {
    return this.x4n_1(_this__u8e3s4, value);
  };
  protoOf(NonNullValueClassSaver$1).k3e = function (value) {
    return this.y4n_1(value);
  };
  function AnnotationType_Paragraph_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Paragraph_instance;
  }
  function AnnotationType_Span_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Span_instance;
  }
  function AnnotationType_VerbatimTts_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_VerbatimTts_instance;
  }
  function AnnotationType_Url_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Url_instance;
  }
  function AnnotationType_Link_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Link_instance;
  }
  function AnnotationType_Clickable_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Clickable_instance;
  }
  function AnnotationType_String_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_String_instance;
  }
  var properties_initialized_Savers_kt_vjp8zk;
  function _init_properties_Savers_kt__o6r3ry() {
    if (!properties_initialized_Savers_kt_vjp8zk) {
      properties_initialized_Savers_kt_vjp8zk = true;
      var tmp = AnnotatedStringSaver$lambda;
      AnnotatedStringSaver = Saver_0(tmp, AnnotatedStringSaver$lambda_0);
      var tmp_0 = AnnotationRangeListSaver$lambda;
      AnnotationRangeListSaver = Saver_0(tmp_0, AnnotationRangeListSaver$lambda_0);
      var tmp_1 = AnnotationRangeSaver$lambda;
      AnnotationRangeSaver = Saver_0(tmp_1, AnnotationRangeSaver$lambda_0);
      var tmp_2 = VerbatimTtsAnnotationSaver$lambda;
      VerbatimTtsAnnotationSaver = Saver_0(tmp_2, VerbatimTtsAnnotationSaver$lambda_0);
      var tmp_3 = UrlAnnotationSaver$lambda;
      UrlAnnotationSaver = Saver_0(tmp_3, UrlAnnotationSaver$lambda_0);
      var tmp_4 = LinkSaver$lambda;
      LinkSaver = Saver_0(tmp_4, LinkSaver$lambda_0);
      var tmp_5 = ClickableSaver$lambda;
      ClickableSaver = Saver_0(tmp_5, ClickableSaver$lambda_0);
      var tmp_6 = ParagraphStyleSaver$lambda;
      ParagraphStyleSaver = Saver_0(tmp_6, ParagraphStyleSaver$lambda_0);
      var tmp_7 = SpanStyleSaver$lambda;
      SpanStyleSaver = Saver_0(tmp_7, SpanStyleSaver$lambda_0);
      var tmp_8 = TextLinkStylesSaver$lambda;
      TextLinkStylesSaver = Saver_0(tmp_8, TextLinkStylesSaver$lambda_0);
      var tmp_9 = TextDecorationSaver$lambda;
      TextDecorationSaver = Saver_0(tmp_9, TextDecorationSaver$lambda_0);
      var tmp_10 = TextGeometricTransformSaver$lambda;
      TextGeometricTransformSaver = Saver_0(tmp_10, TextGeometricTransformSaver$lambda_0);
      var tmp_11 = TextIndentSaver$lambda;
      TextIndentSaver = Saver_0(tmp_11, TextIndentSaver$lambda_0);
      var tmp_12 = FontWeightSaver$lambda;
      FontWeightSaver = Saver_0(tmp_12, FontWeightSaver$lambda_0);
      var tmp_13 = BaselineShiftSaver$lambda;
      BaselineShiftSaver = Saver_0(tmp_13, BaselineShiftSaver$lambda_0);
      var tmp_14 = TextRangeSaver$lambda;
      TextRangeSaver = Saver_0(tmp_14, TextRangeSaver$lambda_0);
      var tmp_15 = ShadowSaver$lambda;
      ShadowSaver = Saver_0(tmp_15, ShadowSaver$lambda_0);
      var tmp_16 = ColorSaver$lambda;
      ColorSaver = NonNullValueClassSaver_0(tmp_16, ColorSaver$lambda_0);
      var tmp_17 = TextUnitSaver$lambda;
      TextUnitSaver = NonNullValueClassSaver_0(tmp_17, TextUnitSaver$lambda_0);
      var tmp_18 = OffsetSaver$lambda;
      OffsetSaver = NonNullValueClassSaver_0(tmp_18, OffsetSaver$lambda_0);
      var tmp_19 = LocaleListSaver$lambda;
      LocaleListSaver = Saver_0(tmp_19, LocaleListSaver$lambda_0);
      var tmp_20 = LocaleSaver$lambda;
      LocaleSaver = Saver_0(tmp_20, LocaleSaver$lambda_0);
    }
  }
  function get_DefaultFontSize() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultFontSize;
  }
  var DefaultFontSize;
  function get_DefaultLetterSpacing() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultLetterSpacing;
  }
  var DefaultLetterSpacing;
  function get_DefaultBackgroundColor() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultBackgroundColor;
  }
  var DefaultBackgroundColor;
  function get_DefaultColor() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultColor;
  }
  var DefaultColor;
  function get_DefaultColorForegroundStyle() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultColorForegroundStyle;
  }
  var DefaultColorForegroundStyle;
  function SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    color = color === VOID ? Companion_getInstance().j45_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().s3i_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().s3i_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().j45_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_instance_21.z4n(color), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    var tmp;
    if (alpha === VOID) {
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    fontSize = fontSize === VOID ? Companion_getInstance_1().s3i_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().s3i_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().j45_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_instance_21.a4o(brush, alpha), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle(textForegroundStyle, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    fontSize = fontSize === VOID ? Companion_getInstance_1().s3i_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().s3i_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().j45_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    this.q4m_1 = textForegroundStyle;
    this.r4m_1 = fontSize;
    this.s4m_1 = fontWeight;
    this.t4m_1 = fontStyle;
    this.u4m_1 = fontSynthesis;
    this.v4m_1 = fontFamily;
    this.w4m_1 = fontFeatureSettings;
    this.x4m_1 = letterSpacing;
    this.y4m_1 = baselineShift;
    this.z4m_1 = textGeometricTransform;
    this.a4n_1 = localeList;
    this.b4n_1 = background;
    this.c4n_1 = textDecoration;
    this.d4n_1 = shadow;
    this.e4n_1 = platformStyle;
    this.f4n_1 = drawStyle;
  }
  protoOf(SpanStyle).x4c = function () {
    return this.q4m_1.x4c();
  };
  protoOf(SpanStyle).b4o = function () {
    return this.q4m_1.b4o();
  };
  protoOf(SpanStyle).z3z = function () {
    return this.q4m_1.z3z();
  };
  protoOf(SpanStyle).c4o = function (other) {
    if (other == null)
      return this;
    return fastMerge_0(this, other.q4m_1.x4c(), other.q4m_1.b4o(), other.q4m_1.z3z(), other.r4m_1, other.s4m_1, other.t4m_1, other.u4m_1, other.v4m_1, other.w4m_1, other.x4m_1, other.y4m_1, other.z4m_1, other.a4n_1, other.b4n_1, other.c4n_1, other.d4n_1, other.e4n_1, other.f4n_1);
  };
  protoOf(SpanStyle).d4o = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    var tmp;
    if (equals(color, this.x4c())) {
      tmp = this.q4m_1;
    } else {
      tmp = Companion_instance_21.z4n(color);
    }
    return new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
  };
  protoOf(SpanStyle).e4o = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $super) {
    color = color === VOID ? this.x4c() : color;
    fontSize = fontSize === VOID ? this.r4m_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.s4m_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.t4m_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.u4m_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.v4m_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.w4m_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.x4m_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.y4m_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.z4m_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.a4n_1 : localeList;
    background = background === VOID ? this.b4n_1 : background;
    textDecoration = textDecoration === VOID ? this.c4n_1 : textDecoration;
    shadow = shadow === VOID ? this.d4n_1 : shadow;
    platformStyle = platformStyle === VOID ? this.e4n_1 : platformStyle;
    drawStyle = drawStyle === VOID ? this.f4n_1 : drawStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.d4o(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    } else {
      var tmp_0 = $super.d4o;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, platformStyle, drawStyle);
    }
    return tmp;
  };
  protoOf(SpanStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpanStyle))
      return false;
    return this.f4o(other) && this.g4o(other);
  };
  protoOf(SpanStyle).f4o = function (other) {
    if (this === other)
      return true;
    if (!equals(this.r4m_1, other.r4m_1))
      return false;
    if (!equals(this.s4m_1, other.s4m_1))
      return false;
    var tmp = this.t4m_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = other.t4m_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.u4m_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = other.u4m_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.v4m_1, other.v4m_1))
      return false;
    if (!(this.w4m_1 == other.w4m_1))
      return false;
    if (!equals(this.x4m_1, other.x4m_1))
      return false;
    var tmp_5 = this.y4m_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = other.y4m_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.z4m_1, other.z4m_1))
      return false;
    if (!equals(this.a4n_1, other.a4n_1))
      return false;
    if (!equals(this.b4n_1, other.b4n_1))
      return false;
    if (!equals(this.e4n_1, other.e4n_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).g4o = function (other) {
    if (!equals(this.q4m_1, other.q4m_1))
      return false;
    if (!equals(this.c4n_1, other.c4n_1))
      return false;
    if (!equals(this.d4n_1, other.d4n_1))
      return false;
    if (!equals(this.f4n_1, other.f4n_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.x4c());
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.b4o();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.z3z()) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.r4m_1) | 0;
    var tmp_0 = imul(31, result);
    var tmp0_safe_receiver_0 = this.s4m_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.hashCode();
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.t4m_1;
    var tmp_2;
    var tmp_3 = tmp2_safe_receiver;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      tmp_2 = FontStyle__hashCode_impl_7qhg4w(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_4 = imul(31, result);
    var tmp4_safe_receiver = this.u4m_1;
    var tmp_5;
    var tmp_6 = tmp4_safe_receiver;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = null;
    } else {
      tmp_5 = FontSynthesis__hashCode_impl_4wi11v(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_5;
    result = tmp_4 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp6_safe_receiver = this.v4m_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_7 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_8 = imul(31, result);
    var tmp8_safe_receiver = this.w4m_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : getStringHashCode(tmp8_safe_receiver);
    result = tmp_8 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.x4m_1) | 0;
    var tmp_9 = imul(31, result);
    var tmp10_safe_receiver = this.y4m_1;
    var tmp_10;
    var tmp_11 = tmp10_safe_receiver;
    if ((tmp_11 == null ? null : new BaselineShift(tmp_11)) == null) {
      tmp_10 = null;
    } else {
      tmp_10 = BaselineShift__hashCode_impl_g0potx(tmp10_safe_receiver);
    }
    var tmp11_elvis_lhs = tmp_10;
    result = tmp_9 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_12 = imul(31, result);
    var tmp12_safe_receiver = this.z4m_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.hashCode();
    result = tmp_12 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_13 = imul(31, result);
    var tmp14_safe_receiver = this.a4n_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.hashCode();
    result = tmp_13 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.b4n_1) | 0;
    var tmp_14 = imul(31, result);
    var tmp16_safe_receiver = this.c4n_1;
    var tmp17_elvis_lhs = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.hashCode();
    result = tmp_14 + (tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs) | 0;
    var tmp_15 = imul(31, result);
    var tmp18_safe_receiver = this.d4n_1;
    var tmp19_elvis_lhs = tmp18_safe_receiver == null ? null : tmp18_safe_receiver.hashCode();
    result = tmp_15 + (tmp19_elvis_lhs == null ? 0 : tmp19_elvis_lhs) | 0;
    var tmp_16 = imul(31, result);
    var tmp20_safe_receiver = this.e4n_1;
    var tmp21_elvis_lhs = tmp20_safe_receiver == null ? null : tmp20_safe_receiver.hashCode();
    result = tmp_16 + (tmp21_elvis_lhs == null ? 0 : tmp21_elvis_lhs) | 0;
    var tmp_17 = imul(31, result);
    var tmp22_safe_receiver = this.f4n_1;
    var tmp23_elvis_lhs = tmp22_safe_receiver == null ? null : hashCode(tmp22_safe_receiver);
    result = tmp_17 + (tmp23_elvis_lhs == null ? 0 : tmp23_elvis_lhs) | 0;
    return result;
  };
  protoOf(SpanStyle).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'androidx.compose.ui.text.SpanStyle.toString.<anonymous>' call
    this_0.o8('SpanStyle(');
    this_0.o8('color=' + Color__toString_impl_hpzmaq(this.x4c()) + ', ');
    this_0.o8('brush=' + toString_0(this.b4o()) + ', ');
    this_0.o8('alpha=' + this.z3z() + ', ');
    this_0.o8('fontSize=' + TextUnit__toString_impl_51ghw0(this.r4m_1) + ', ');
    this_0.o8('fontWeight=' + toString_0(this.s4m_1) + ', ');
    var tmp = this.t4m_1;
    this_0.o8('fontStyle=' + toString_0(tmp == null ? null : new FontStyle(tmp)) + ', ');
    var tmp_0 = this.u4m_1;
    this_0.o8('fontSynthesis=' + toString_0(tmp_0 == null ? null : new FontSynthesis(tmp_0)) + ', ');
    this_0.o8('fontFamily=' + toString_0(this.v4m_1) + ', ');
    this_0.o8('fontFeatureSettings=' + this.w4m_1 + ', ');
    this_0.o8('letterSpacing=' + TextUnit__toString_impl_51ghw0(this.x4m_1) + ', ');
    var tmp_1 = this.y4m_1;
    this_0.o8('baselineShift=' + toString_0(tmp_1 == null ? null : new BaselineShift(tmp_1)) + ', ');
    this_0.o8('textGeometricTransform=' + toString_0(this.z4m_1) + ', ');
    this_0.o8('localeList=' + toString_0(this.a4n_1) + ', ');
    this_0.o8('background=' + Color__toString_impl_hpzmaq(this.b4n_1) + ', ');
    this_0.o8('textDecoration=' + toString_0(this.c4n_1) + ', ');
    this_0.o8('shadow=' + toString_0(this.d4n_1) + ', ');
    this_0.o8('platformStyle=' + toString_0(this.e4n_1) + ', ');
    this_0.o8('drawStyle=' + toString_0(this.f4n_1));
    this_0.o8(')');
    return this_0.toString();
  };
  function fastMerge_0(_this__u8e3s4, color, brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    var tmp_7;
    var tmp_8;
    var tmp_9;
    var tmp_10;
    var tmp_11;
    var tmp_12;
    var tmp_13;
    var tmp_14;
    var tmp_15;
    var tmp_16;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!get_isUnspecified(fontSize)) {
      tmp_16 = !equals(fontSize, _this__u8e3s4.r4m_1);
    } else {
      tmp_16 = false;
    }
    if (tmp_16) {
      tmp_15 = true;
    } else {
      var tmp_17;
      var tmp_18;
      if (brush == null) {
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        tmp_18 = !equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)));
      } else {
        tmp_18 = false;
      }
      if (tmp_18) {
        tmp_17 = !equals(color, _this__u8e3s4.q4m_1.x4c());
      } else {
        tmp_17 = false;
      }
      tmp_15 = tmp_17;
    }
    if (tmp_15) {
      tmp_14 = true;
    } else {
      var tmp_19;
      var tmp_20 = fontStyle;
      if (!((tmp_20 == null ? null : new FontStyle(tmp_20)) == null)) {
        var tmp_21 = fontStyle;
        var tmp_22 = tmp_21 == null ? null : new FontStyle(tmp_21);
        var tmp_23 = _this__u8e3s4.t4m_1;
        tmp_19 = !equals(tmp_22, tmp_23 == null ? null : new FontStyle(tmp_23));
      } else {
        tmp_19 = false;
      }
      tmp_14 = tmp_19;
    }
    if (tmp_14) {
      tmp_13 = true;
    } else {
      tmp_13 = (!(fontWeight == null) && !equals(fontWeight, _this__u8e3s4.s4m_1));
    }
    if (tmp_13) {
      tmp_12 = true;
    } else {
      tmp_12 = (!(fontFamily == null) && !(fontFamily === _this__u8e3s4.v4m_1));
    }
    if (tmp_12) {
      tmp_11 = true;
    } else {
      var tmp_24;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!get_isUnspecified(letterSpacing)) {
        tmp_24 = !equals(letterSpacing, _this__u8e3s4.x4m_1);
      } else {
        tmp_24 = false;
      }
      tmp_11 = tmp_24;
    }
    if (tmp_11) {
      tmp_10 = true;
    } else {
      tmp_10 = (!(textDecoration == null) && !equals(textDecoration, _this__u8e3s4.c4n_1));
    }
    if (tmp_10) {
      tmp_9 = true;
    } else {
      tmp_9 = !equals(brush, _this__u8e3s4.q4m_1.b4o());
    }
    if (tmp_9) {
      tmp_8 = true;
    } else {
      tmp_8 = (!(brush == null) && !(alpha === _this__u8e3s4.q4m_1.z3z()));
    }
    if (tmp_8) {
      tmp_7 = true;
    } else {
      var tmp_25;
      var tmp_26 = fontSynthesis;
      if (!((tmp_26 == null ? null : new FontSynthesis(tmp_26)) == null)) {
        var tmp_27 = fontSynthesis;
        var tmp_28 = tmp_27 == null ? null : new FontSynthesis(tmp_27);
        var tmp_29 = _this__u8e3s4.u4m_1;
        tmp_25 = !equals(tmp_28, tmp_29 == null ? null : new FontSynthesis(tmp_29));
      } else {
        tmp_25 = false;
      }
      tmp_7 = tmp_25;
    }
    if (tmp_7) {
      tmp_6 = true;
    } else {
      tmp_6 = (!(fontFeatureSettings == null) && !(fontFeatureSettings == _this__u8e3s4.w4m_1));
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      var tmp_30;
      var tmp_31 = baselineShift;
      if (!((tmp_31 == null ? null : new BaselineShift(tmp_31)) == null)) {
        var tmp_32 = baselineShift;
        var tmp_33 = tmp_32 == null ? null : new BaselineShift(tmp_32);
        var tmp_34 = _this__u8e3s4.y4m_1;
        tmp_30 = !equals(tmp_33, tmp_34 == null ? null : new BaselineShift(tmp_34));
      } else {
        tmp_30 = false;
      }
      tmp_5 = tmp_30;
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = (!(textGeometricTransform == null) && !equals(textGeometricTransform, _this__u8e3s4.z4m_1));
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = (!(localeList == null) && !equals(localeList, _this__u8e3s4.a4n_1));
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      var tmp_35;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(background), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
        tmp_35 = !equals(background, _this__u8e3s4.b4n_1);
      } else {
        tmp_35 = false;
      }
      tmp_2 = tmp_35;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = (!(shadow == null) && !equals(shadow, _this__u8e3s4.d4n_1));
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = (!(platformStyle == null) && !equals(platformStyle, _this__u8e3s4.e4n_1));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = (!(drawStyle == null) && !equals(drawStyle, _this__u8e3s4.f4n_1));
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_36;
    if (!(brush == null)) {
      tmp_36 = Companion_instance_21.a4o(brush, alpha);
    } else {
      tmp_36 = Companion_instance_21.z4n(color);
    }
    var otherTextForegroundStyle = tmp_36;
    var tmp11_textForegroundStyle = _this__u8e3s4.q4m_1.h4o(otherTextForegroundStyle);
    var tmp12_fontFamily = fontFamily == null ? _this__u8e3s4.v4m_1 : fontFamily;
    var tmp13_fontSize = !get_isUnspecified(fontSize) ? fontSize : _this__u8e3s4.r4m_1;
    var tmp14_fontWeight = fontWeight == null ? _this__u8e3s4.s4m_1 : fontWeight;
    var tmp_37;
    var tmp_38 = fontStyle;
    if ((tmp_38 == null ? null : new FontStyle(tmp_38)) == null) {
      tmp_37 = _this__u8e3s4.t4m_1;
    } else {
      tmp_37 = fontStyle;
    }
    var tmp15_fontStyle = tmp_37;
    var tmp_39;
    var tmp_40 = fontSynthesis;
    if ((tmp_40 == null ? null : new FontSynthesis(tmp_40)) == null) {
      tmp_39 = _this__u8e3s4.u4m_1;
    } else {
      tmp_39 = fontSynthesis;
    }
    var tmp16_fontSynthesis = tmp_39;
    var tmp17_fontFeatureSettings = fontFeatureSettings == null ? _this__u8e3s4.w4m_1 : fontFeatureSettings;
    var tmp_41;
    if (!get_isUnspecified(letterSpacing)) {
      tmp_41 = letterSpacing;
    } else {
      tmp_41 = _this__u8e3s4.x4m_1;
    }
    var tmp18_letterSpacing = tmp_41;
    var tmp_42;
    var tmp_43 = baselineShift;
    if ((tmp_43 == null ? null : new BaselineShift(tmp_43)) == null) {
      tmp_42 = _this__u8e3s4.y4m_1;
    } else {
      tmp_42 = baselineShift;
    }
    var tmp19_baselineShift = tmp_42;
    var tmp20_textGeometricTransform = textGeometricTransform == null ? _this__u8e3s4.z4m_1 : textGeometricTransform;
    var tmp21_localeList = localeList == null ? _this__u8e3s4.a4n_1 : localeList;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_44;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(background), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_44 = background;
    } else {
      // Inline function 'androidx.compose.ui.text.fastMerge.<anonymous>' call
      tmp_44 = _this__u8e3s4.b4n_1;
    }
    var tmp22_background = tmp_44;
    var tmp23_textDecoration = textDecoration == null ? _this__u8e3s4.c4n_1 : textDecoration;
    var tmp24_shadow = shadow == null ? _this__u8e3s4.d4n_1 : shadow;
    var tmp25_platformStyle = mergePlatformStyle_0(_this__u8e3s4, platformStyle);
    var tmp26_drawStyle = drawStyle == null ? _this__u8e3s4.f4n_1 : drawStyle;
    return new SpanStyle(tmp11_textForegroundStyle, tmp13_fontSize, tmp14_fontWeight, tmp15_fontStyle, tmp16_fontSynthesis, tmp12_fontFamily, tmp17_fontFeatureSettings, tmp18_letterSpacing, tmp19_baselineShift, tmp20_textGeometricTransform, tmp21_localeList, tmp22_background, tmp23_textDecoration, tmp24_shadow, tmp25_platformStyle, tmp26_drawStyle);
  }
  function mergePlatformStyle_0(_this__u8e3s4, other) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (_this__u8e3s4.e4n_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.e4n_1;
    return _this__u8e3s4.e4n_1.j4o(other);
  }
  function resolveSpanStyleDefaults(style) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp = style.q4m_1.k4o(resolveSpanStyleDefaults$lambda);
    var tmp_0 = get_isUnspecified(style.r4m_1) ? get_DefaultFontSize() : style.r4m_1;
    var tmp0_elvis_lhs = style.s4m_1;
    var tmp_1 = tmp0_elvis_lhs == null ? Companion_getInstance_22().x4o_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.t4m_1;
    var tmp_2;
    var tmp_3 = tmp1_elvis_lhs;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = Companion_getInstance_20().e4p_1;
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    var tmp_4 = tmp_2;
    var tmp2_elvis_lhs = style.u4m_1;
    var tmp_5;
    var tmp_6 = tmp2_elvis_lhs;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_21().h4p_1;
    } else {
      tmp_5 = tmp2_elvis_lhs;
    }
    var tmp_7 = tmp_5;
    var tmp3_elvis_lhs = style.v4m_1;
    var tmp_8 = tmp3_elvis_lhs == null ? Companion_getInstance_16().k4p_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = style.w4m_1;
    var tmp_9 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_10;
    if (get_isUnspecified(style.x4m_1)) {
      tmp_10 = get_DefaultLetterSpacing();
    } else {
      tmp_10 = style.x4m_1;
    }
    var tmp_11 = tmp_10;
    var tmp5_elvis_lhs = style.y4m_1;
    var tmp_12;
    var tmp_13 = tmp5_elvis_lhs;
    if ((tmp_13 == null ? null : new BaselineShift(tmp_13)) == null) {
      tmp_12 = Companion_getInstance_25().r4p_1;
    } else {
      tmp_12 = tmp5_elvis_lhs;
    }
    var tmp_14 = tmp_12;
    var tmp6_elvis_lhs = style.z4m_1;
    var tmp_15 = tmp6_elvis_lhs == null ? Companion_getInstance_34().s4p_1 : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = style.a4n_1;
    var tmp_16 = tmp7_elvis_lhs == null ? Companion_getInstance_24().x1r() : tmp7_elvis_lhs;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var this_0 = style.b4n_1;
    var tmp_17;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_17 = this_0;
    } else {
      // Inline function 'androidx.compose.ui.text.resolveSpanStyleDefaults.<anonymous>' call
      tmp_17 = get_DefaultBackgroundColor();
    }
    var tmp_18 = tmp_17;
    var tmp8_elvis_lhs = style.c4n_1;
    var tmp_19 = tmp8_elvis_lhs == null ? Companion_getInstance_31().u4p_1 : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = style.d4n_1;
    var tmp_20 = tmp9_elvis_lhs == null ? Companion_getInstance_2().v48_1 : tmp9_elvis_lhs;
    var tmp10_elvis_lhs = style.f4n_1;
    return new SpanStyle(tmp, tmp_0, tmp_1, tmp_4, tmp_7, tmp_8, tmp_9, tmp_11, tmp_14, tmp_15, tmp_16, tmp_18, tmp_19, tmp_20, style.e4n_1, tmp10_elvis_lhs == null ? Fill_getInstance() : tmp10_elvis_lhs);
  }
  function resolveSpanStyleDefaults$lambda() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return get_DefaultColorForegroundStyle();
  }
  var properties_initialized_SpanStyle_kt_cqbdlj;
  function _init_properties_SpanStyle_kt__ixg4k5() {
    if (!properties_initialized_SpanStyle_kt_cqbdlj) {
      properties_initialized_SpanStyle_kt_cqbdlj = true;
      DefaultFontSize = get_sp(14);
      DefaultLetterSpacing = get_sp(0);
      DefaultBackgroundColor = Companion_getInstance().i45_1;
      DefaultColor = Companion_getInstance().x44_1;
      DefaultColorForegroundStyle = Companion_instance_21.z4n(get_DefaultColor());
    }
  }
  function SynchronizedObject() {
  }
  function createSynchronizedObject() {
    return new SynchronizedObject();
  }
  function TextLayoutResult(layoutInput, multiParagraph, size) {
    this.x4p_1 = layoutInput;
    this.y4p_1 = multiParagraph;
    this.z4p_1 = size;
    this.a4q_1 = this.y4p_1.z4j();
    this.b4q_1 = this.y4p_1.a4k();
    this.c4q_1 = this.y4p_1.g4j_1;
  }
  protoOf(TextLayoutResult).d4q = function () {
    return this.y4p_1.c4j_1 || _IntSize___get_height__impl__prv63b(this.z4p_1) < this.y4p_1.e4j_1;
  };
  protoOf(TextLayoutResult).e4q = function () {
    return _IntSize___get_width__impl__d9yl4o(this.z4p_1) < this.y4p_1.d4j_1;
  };
  protoOf(TextLayoutResult).f4q = function () {
    return this.e4q() || this.d4q();
  };
  protoOf(TextLayoutResult).v4j = function () {
    return this.y4p_1.f4j_1;
  };
  protoOf(TextLayoutResult).r4k = function (lineIndex) {
    return this.y4p_1.r4k(lineIndex);
  };
  protoOf(TextLayoutResult).t4k = function (lineIndex, visibleEnd) {
    return this.y4p_1.t4k(lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).g4q = function (lineIndex, visibleEnd, $super) {
    visibleEnd = visibleEnd === VOID ? false : visibleEnd;
    return $super === VOID ? this.t4k(lineIndex, visibleEnd) : $super.t4k.call(this, lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).p4k = function (lineIndex) {
    return this.y4p_1.p4k(lineIndex);
  };
  protoOf(TextLayoutResult).o4k = function (offset) {
    return this.y4p_1.o4k(offset);
  };
  protoOf(TextLayoutResult).g4k = function (vertical) {
    return this.y4p_1.g4k(vertical);
  };
  protoOf(TextLayoutResult).j4k = function (offset) {
    return this.y4p_1.j4k(offset);
  };
  protoOf(TextLayoutResult).k4k = function (offset) {
    return this.y4p_1.k4k(offset);
  };
  protoOf(TextLayoutResult).l4k = function (offset) {
    return this.y4p_1.l4k(offset);
  };
  protoOf(TextLayoutResult).q4j = function (start, end) {
    return this.y4p_1.q4j(start, end);
  };
  protoOf(TextLayoutResult).h4q = function (layoutInput, size) {
    return new TextLayoutResult(layoutInput, this.y4p_1, size);
  };
  protoOf(TextLayoutResult).i4q = function (layoutInput, size, $super) {
    layoutInput = layoutInput === VOID ? this.x4p_1 : layoutInput;
    size = size === VOID ? this.z4p_1 : size;
    return $super === VOID ? this.h4q(layoutInput, size) : $super.h4q.call(this, layoutInput, new IntSize(size));
  };
  protoOf(TextLayoutResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutResult))
      return false;
    if (!this.x4p_1.equals(other.x4p_1))
      return false;
    if (!equals(this.y4p_1, other.y4p_1))
      return false;
    if (!equals(this.z4p_1, other.z4p_1))
      return false;
    if (!(this.a4q_1 === other.a4q_1))
      return false;
    if (!(this.b4q_1 === other.b4q_1))
      return false;
    if (!equals(this.c4q_1, other.c4q_1))
      return false;
    return true;
  };
  protoOf(TextLayoutResult).hashCode = function () {
    var result = this.x4p_1.hashCode();
    result = imul(31, result) + hashCode(this.y4p_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.z4p_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.a4q_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.b4q_1) | 0;
    result = imul(31, result) + hashCode(this.c4q_1) | 0;
    return result;
  };
  protoOf(TextLayoutResult).toString = function () {
    return 'TextLayoutResult(' + ('layoutInput=' + this.x4p_1.toString() + ', ') + ('multiParagraph=' + toString(this.y4p_1) + ', ') + ('size=' + IntSize__toString_impl_54w9zl(this.z4p_1) + ', ') + ('firstBaseline=' + this.a4q_1 + ', ') + ('lastBaseline=' + this.b4q_1 + ', ') + ('placeholderRects=' + toString(this.c4q_1)) + ')';
  };
  function TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, $this) {
    TextLayoutInput.call($this, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, null, fontFamilyResolver, constraints);
    return $this;
  }
  function TextLayoutInput_init_$Create$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints) {
    return TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, objectCreate(protoOf(TextLayoutInput)));
  }
  function TextLayoutInput(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, fontFamilyResolver, constraints) {
    this.j4q_1 = text;
    this.k4q_1 = style;
    this.l4q_1 = placeholders;
    this.m4q_1 = maxLines;
    this.n4q_1 = softWrap;
    this.o4q_1 = overflow;
    this.p4q_1 = density;
    this.q4q_1 = layoutDirection;
    this.r4q_1 = fontFamilyResolver;
    this.s4q_1 = constraints;
    this.t4q_1 = resourceLoader;
  }
  protoOf(TextLayoutInput).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutInput))
      return false;
    if (!this.j4q_1.equals(other.j4q_1))
      return false;
    if (!this.k4q_1.equals(other.k4q_1))
      return false;
    if (!equals(this.l4q_1, other.l4q_1))
      return false;
    if (!(this.m4q_1 === other.m4q_1))
      return false;
    if (!(this.n4q_1 === other.n4q_1))
      return false;
    if (!(this.o4q_1 === other.o4q_1))
      return false;
    if (!equals(this.p4q_1, other.p4q_1))
      return false;
    if (!this.q4q_1.equals(other.q4q_1))
      return false;
    if (!equals(this.r4q_1, other.r4q_1))
      return false;
    if (!equals(this.s4q_1, other.s4q_1))
      return false;
    return true;
  };
  protoOf(TextLayoutInput).hashCode = function () {
    var result = this.j4q_1.hashCode();
    result = imul(31, result) + this.k4q_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.l4q_1) | 0;
    result = imul(31, result) + this.m4q_1 | 0;
    result = imul(31, result) + getBooleanHashCode(this.n4q_1) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.o4q_1) | 0;
    result = imul(31, result) + hashCode(this.p4q_1) | 0;
    result = imul(31, result) + this.q4q_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.r4q_1) | 0;
    result = imul(31, result) + Constraints__hashCode_impl_ij7484(this.s4q_1) | 0;
    return result;
  };
  protoOf(TextLayoutInput).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'androidx.compose.ui.text.TextLayoutInput.toString.<anonymous>' call
    this_0.o8('TextLayoutInput(');
    this_0.o8('text=' + this.j4q_1.toString() + ', ');
    this_0.o8('style=' + this.k4q_1.toString() + ', ');
    this_0.o8('placeholders=' + toString(this.l4q_1) + ', ');
    this_0.o8('maxLines=' + this.m4q_1 + ', ');
    this_0.o8('softWrap=' + this.n4q_1 + ', ');
    this_0.o8('overflow=' + TextOverflow__toString_impl_10s0c2(this.o4q_1) + ', ');
    this_0.o8('density=' + toString(this.p4q_1) + ', ');
    this_0.o8('layoutDirection=' + this.q4q_1.toString() + ', ');
    this_0.o8('fontFamilyResolver=' + toString(this.r4q_1) + ', ');
    this_0.o8('constraints=' + Constraints__toString_impl_37yskr(this.s4q_1));
    this_0.o8(')');
    return this_0.toString();
  };
  function TextLinkStyles(style, focusedStyle, hoveredStyle, pressedStyle) {
    style = style === VOID ? null : style;
    focusedStyle = focusedStyle === VOID ? null : focusedStyle;
    hoveredStyle = hoveredStyle === VOID ? null : hoveredStyle;
    pressedStyle = pressedStyle === VOID ? null : pressedStyle;
    this.j4n_1 = style;
    this.k4n_1 = focusedStyle;
    this.l4n_1 = hoveredStyle;
    this.m4n_1 = pressedStyle;
  }
  protoOf(TextLinkStyles).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof TextLinkStyles);
    }
    if (tmp)
      return false;
    if (!equals(this.j4n_1, other.j4n_1))
      return false;
    if (!equals(this.k4n_1, other.k4n_1))
      return false;
    if (!equals(this.l4n_1, other.l4n_1))
      return false;
    if (!equals(this.m4n_1, other.m4n_1))
      return false;
    return true;
  };
  protoOf(TextLinkStyles).hashCode = function () {
    var tmp0_safe_receiver = this.j4n_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.k4n_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.l4n_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp6_safe_receiver = this.m4n_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.hashCode();
    result = tmp_1 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    return result;
  };
  var DefaultCacheSize;
  function _TextRange___init__impl__h6icbt(packedValue) {
    return packedValue;
  }
  function _get_packedValue__aj623s($this) {
    return $this;
  }
  function _TextRange___get_start__impl__ww4t90($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _get_packedValue__aj623s($this).i3(32).f1();
  }
  function _TextRange___get_end__impl__gcdxpp($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    return _get_packedValue__aj623s($this).k3(new Long(-1, 0)).f1();
  }
  function _TextRange___get_min__impl__uu95c4($this) {
    return _TextRange___get_start__impl__ww4t90($this) > _TextRange___get_end__impl__gcdxpp($this) ? _TextRange___get_end__impl__gcdxpp($this) : _TextRange___get_start__impl__ww4t90($this);
  }
  function _TextRange___get_max__impl__owm8m($this) {
    return _TextRange___get_start__impl__ww4t90($this) > _TextRange___get_end__impl__gcdxpp($this) ? _TextRange___get_start__impl__ww4t90($this) : _TextRange___get_end__impl__gcdxpp($this);
  }
  function TextRange__toString_impl_pqvlzl($this) {
    return 'TextRange(' + _TextRange___get_start__impl__ww4t90($this) + ', ' + _TextRange___get_end__impl__gcdxpp($this) + ')';
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.u4k_1 = TextRange_1(0);
  }
  var Companion_instance_2;
  function Companion_getInstance_14() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function TextRange__hashCode_impl_3zpp6q($this) {
    return $this.hashCode();
  }
  function TextRange__equals_impl_hkkmea($this, other) {
    if (!(other instanceof TextRange))
      return false;
    var tmp0_other_with_cast = other instanceof TextRange ? other.n4k_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextRange(packedValue) {
    Companion_getInstance_14();
    this.n4k_1 = packedValue;
  }
  protoOf(TextRange).toString = function () {
    return TextRange__toString_impl_pqvlzl(this.n4k_1);
  };
  protoOf(TextRange).hashCode = function () {
    return TextRange__hashCode_impl_3zpp6q(this.n4k_1);
  };
  protoOf(TextRange).equals = function (other) {
    return TextRange__equals_impl_hkkmea(this.n4k_1, other);
  };
  function TextRange_0(start, end) {
    return _TextRange___init__impl__h6icbt(packWithCheck(start, end));
  }
  function TextRange_1(index) {
    return TextRange_0(index, index);
  }
  function packWithCheck(start, end) {
    // Inline function 'kotlin.require' call
    if (!(start >= 0)) {
      // Inline function 'androidx.compose.ui.text.packWithCheck.<anonymous>' call
      var message = 'start cannot be negative. [start: ' + start + ', end: ' + end + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(end >= 0)) {
      // Inline function 'androidx.compose.ui.text.packWithCheck.<anonymous>' call
      var message_0 = 'end cannot be negative. [start: ' + start + ', end: ' + end + ']';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'androidx.compose.ui.util.packInts' call
    return toLong(start).h3(32).l3(toLong(end).k3(new Long(-1, 0)));
  }
  function TextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    TextStyle.call($this, spanStyle, paragraphStyle, createPlatformTextStyleInternal(spanStyle.e4n_1, paragraphStyle.j4i_1));
    return $this;
  }
  function TextStyle_init_$Create$_0(spanStyle, paragraphStyle) {
    return TextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $this) {
    color = color === VOID ? Companion_getInstance().j45_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().s3i_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().s3i_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().j45_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? Companion_getInstance_30().o4l_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_32().b4l_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().s3i_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_40().s4l_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_26().v4l_1 : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp = SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.u4q_1, drawStyle);
    TextStyle.call($this, tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.v4q_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, objectCreate(protoOf(TextStyle)));
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.w4q_1 = TextStyle_init_$Create$_1();
  }
  var Companion_instance_3;
  function Companion_getInstance_15() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function TextStyle(spanStyle, paragraphStyle, platformStyle) {
    Companion_getInstance_15();
    platformStyle = platformStyle === VOID ? null : platformStyle;
    this.c4l_1 = spanStyle;
    this.d4l_1 = paragraphStyle;
    this.e4l_1 = platformStyle;
  }
  protoOf(TextStyle).x4q = function () {
    return this.c4l_1;
  };
  protoOf(TextStyle).f4l = function () {
    return this.d4l_1;
  };
  protoOf(TextStyle).y4q = function (other) {
    if (other == null || equals(other, Companion_getInstance_15().w4q_1))
      return this;
    return TextStyle_init_$Create$_0(this.x4q().c4o(other.x4q()), this.f4l().o4i(other.f4l()));
  };
  protoOf(TextStyle).z4q = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion) {
    var mergedSpanStyle = fastMerge_0(this.c4l_1, color, null, NaN, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.u4q_1, drawStyle);
    var mergedParagraphStyle = fastMerge(this.d4l_1, textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.v4q_1, lineHeightStyle, lineBreak, hyphens, textMotion);
    if (this.c4l_1 === mergedSpanStyle && this.d4l_1 === mergedParagraphStyle)
      return this;
    return TextStyle_init_$Create$_0(mergedSpanStyle, mergedParagraphStyle);
  };
  protoOf(TextStyle).a4r = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion, $super) {
    color = color === VOID ? Companion_getInstance().j45_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().s3i_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().s3i_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().j45_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? Companion_getInstance_30().o4l_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_32().b4l_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().s3i_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_40().s4l_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_26().v4l_1 : hyphens;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.z4q(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion);
    } else {
      var tmp_0 = $super.z4q;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), platformStyle, textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).g4l = function (other) {
    return TextStyle_init_$Create$_0(this.x4q(), this.f4l().o4i(other));
  };
  protoOf(TextStyle).b4r = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp;
    if (equals(color, this.c4l_1.x4c())) {
      tmp = this.c4l_1.q4m_1;
    } else {
      tmp = Companion_instance_21.z4n(color);
    }
    var tmp_0 = tmp;
    var tmp_1 = new SpanStyle(tmp_0, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.u4q_1, drawStyle);
    return new TextStyle(tmp_1, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.v4q_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).c4r = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    color = color === VOID ? this.c4l_1.x4c() : color;
    fontSize = fontSize === VOID ? this.c4l_1.r4m_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.c4l_1.s4m_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.c4l_1.t4m_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.c4l_1.u4m_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.c4l_1.v4m_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.c4l_1.w4m_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.c4l_1.x4m_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.c4l_1.y4m_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.c4l_1.z4m_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.c4l_1.a4n_1 : localeList;
    background = background === VOID ? this.c4l_1.b4n_1 : background;
    textDecoration = textDecoration === VOID ? this.c4l_1.c4n_1 : textDecoration;
    shadow = shadow === VOID ? this.c4l_1.d4n_1 : shadow;
    drawStyle = drawStyle === VOID ? this.c4l_1.f4n_1 : drawStyle;
    textAlign = textAlign === VOID ? this.d4l_1.f4i_1 : textAlign;
    textDirection = textDirection === VOID ? this.d4l_1.g4i_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.d4l_1.h4i_1 : lineHeight;
    textIndent = textIndent === VOID ? this.d4l_1.i4i_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.e4l_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.d4l_1.k4i_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.d4l_1.l4i_1 : lineBreak;
    hyphens = hyphens === VOID ? this.d4l_1.m4i_1 : hyphens;
    textMotion = textMotion === VOID ? this.d4l_1.n4i_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.b4r(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.b4r;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).d4r = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp = SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.u4q_1, drawStyle);
    return new TextStyle(tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.v4q_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).e4r = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    alpha = alpha === VOID ? this.c4l_1.z3z() : alpha;
    fontSize = fontSize === VOID ? this.c4l_1.r4m_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.c4l_1.s4m_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.c4l_1.t4m_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.c4l_1.u4m_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.c4l_1.v4m_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.c4l_1.w4m_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.c4l_1.x4m_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.c4l_1.y4m_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.c4l_1.z4m_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.c4l_1.a4n_1 : localeList;
    background = background === VOID ? this.c4l_1.b4n_1 : background;
    textDecoration = textDecoration === VOID ? this.c4l_1.c4n_1 : textDecoration;
    shadow = shadow === VOID ? this.c4l_1.d4n_1 : shadow;
    drawStyle = drawStyle === VOID ? this.c4l_1.f4n_1 : drawStyle;
    textAlign = textAlign === VOID ? this.d4l_1.f4i_1 : textAlign;
    textDirection = textDirection === VOID ? this.d4l_1.g4i_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.d4l_1.h4i_1 : lineHeight;
    textIndent = textIndent === VOID ? this.d4l_1.i4i_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.e4l_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.d4l_1.k4i_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.d4l_1.l4i_1 : lineBreak;
    hyphens = hyphens === VOID ? this.d4l_1.m4i_1 : hyphens;
    textMotion = textMotion === VOID ? this.d4l_1.n4i_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.d4r(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.d4r;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, brush, alpha, new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).b4o = function () {
    return this.c4l_1.b4o();
  };
  protoOf(TextStyle).x4c = function () {
    return this.c4l_1.x4c();
  };
  protoOf(TextStyle).z3z = function () {
    return this.c4l_1.z3z();
  };
  protoOf(TextStyle).f4r = function () {
    return this.c4l_1.r4m_1;
  };
  protoOf(TextStyle).g4r = function () {
    return this.c4l_1.s4m_1;
  };
  protoOf(TextStyle).h4r = function () {
    return this.c4l_1.t4m_1;
  };
  protoOf(TextStyle).i4r = function () {
    return this.c4l_1.u4m_1;
  };
  protoOf(TextStyle).j4r = function () {
    return this.c4l_1.v4m_1;
  };
  protoOf(TextStyle).k4r = function () {
    return this.c4l_1.w4m_1;
  };
  protoOf(TextStyle).l4r = function () {
    return this.c4l_1.x4m_1;
  };
  protoOf(TextStyle).m4r = function () {
    return this.c4l_1.y4m_1;
  };
  protoOf(TextStyle).n4r = function () {
    return this.c4l_1.z4m_1;
  };
  protoOf(TextStyle).o4r = function () {
    return this.c4l_1.a4n_1;
  };
  protoOf(TextStyle).p4r = function () {
    return this.c4l_1.b4n_1;
  };
  protoOf(TextStyle).q4r = function () {
    return this.c4l_1.c4n_1;
  };
  protoOf(TextStyle).r4r = function () {
    return this.c4l_1.d4n_1;
  };
  protoOf(TextStyle).s4r = function () {
    return this.c4l_1.f4n_1;
  };
  protoOf(TextStyle).t4r = function () {
    return this.d4l_1.f4i_1;
  };
  protoOf(TextStyle).u4r = function () {
    return this.d4l_1.g4i_1;
  };
  protoOf(TextStyle).v4r = function () {
    return this.d4l_1.h4i_1;
  };
  protoOf(TextStyle).w4r = function () {
    return this.d4l_1.i4i_1;
  };
  protoOf(TextStyle).x4r = function () {
    return this.d4l_1.k4i_1;
  };
  protoOf(TextStyle).y4r = function () {
    return this.d4l_1.m4i_1;
  };
  protoOf(TextStyle).z4r = function () {
    return this.d4l_1.l4i_1;
  };
  protoOf(TextStyle).a4s = function () {
    return this.d4l_1.n4i_1;
  };
  protoOf(TextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStyle))
      return false;
    if (!this.c4l_1.equals(other.c4l_1))
      return false;
    if (!this.d4l_1.equals(other.d4l_1))
      return false;
    if (!equals(this.e4l_1, other.e4l_1))
      return false;
    return true;
  };
  protoOf(TextStyle).b4s = function (other) {
    return this === other || (this.d4l_1.equals(other.d4l_1) && this.c4l_1.f4o(other.c4l_1));
  };
  protoOf(TextStyle).c4s = function (other) {
    return this === other || this.c4l_1.g4o(other.c4l_1);
  };
  protoOf(TextStyle).hashCode = function () {
    var result = this.c4l_1.hashCode();
    result = imul(31, result) + this.d4l_1.hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.e4l_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextStyle).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'androidx.compose.ui.text.TextStyle.toString.<anonymous>' call
    this_0.o8('TextStyle(');
    this_0.o8('color=' + Color__toString_impl_hpzmaq(this.x4c()) + ', ');
    this_0.o8('brush=' + toString_0(this.b4o()) + ', ');
    this_0.o8('alpha=' + this.z3z() + ', ');
    this_0.o8('fontSize=' + TextUnit__toString_impl_51ghw0(this.f4r()) + ', ');
    this_0.o8('fontWeight=' + toString_0(this.g4r()) + ', ');
    var tmp = this.h4r();
    this_0.o8('fontStyle=' + toString_0(tmp == null ? null : new FontStyle(tmp)) + ', ');
    var tmp_0 = this.i4r();
    this_0.o8('fontSynthesis=' + toString_0(tmp_0 == null ? null : new FontSynthesis(tmp_0)) + ', ');
    this_0.o8('fontFamily=' + toString_0(this.j4r()) + ', ');
    this_0.o8('fontFeatureSettings=' + this.k4r() + ', ');
    this_0.o8('letterSpacing=' + TextUnit__toString_impl_51ghw0(this.l4r()) + ', ');
    var tmp_1 = this.m4r();
    this_0.o8('baselineShift=' + toString_0(tmp_1 == null ? null : new BaselineShift(tmp_1)) + ', ');
    this_0.o8('textGeometricTransform=' + toString_0(this.n4r()) + ', ');
    this_0.o8('localeList=' + toString_0(this.o4r()) + ', ');
    this_0.o8('background=' + Color__toString_impl_hpzmaq(this.p4r()) + ', ');
    this_0.o8('textDecoration=' + toString_0(this.q4r()) + ', ');
    this_0.o8('shadow=' + toString_0(this.r4r()) + ', ');
    this_0.o8('drawStyle=' + toString_0(this.s4r()) + ', ');
    this_0.o8('textAlign=' + TextAlign__toString_impl_6ha6d3(this.t4r()) + ', ');
    this_0.o8('textDirection=' + TextDirection__toString_impl_x3uh9t(this.u4r()) + ', ');
    this_0.o8('lineHeight=' + TextUnit__toString_impl_51ghw0(this.v4r()) + ', ');
    this_0.o8('textIndent=' + toString_0(this.w4r()) + ', ');
    this_0.o8('platformStyle=' + toString_0(this.e4l_1) + ', ');
    this_0.o8('lineHeightStyle=' + toString_0(this.x4r()) + ', ');
    this_0.o8('lineBreak=' + LineBreak__toString_impl_mphhli(this.z4r()) + ', ');
    this_0.o8('hyphens=' + Hyphens__toString_impl_ck1wg0(this.y4r()) + ', ');
    this_0.o8('textMotion=' + toString_0(this.a4s()));
    this_0.o8(')');
    return this_0.toString();
  };
  function createPlatformTextStyleInternal(platformSpanStyle, platformParagraphStyle) {
    var tmp;
    if (platformSpanStyle == null && platformParagraphStyle == null) {
      tmp = null;
    } else {
      tmp = createPlatformTextStyle(platformSpanStyle, platformParagraphStyle);
    }
    return tmp;
  }
  function resolveDefaults(style, direction) {
    return new TextStyle(resolveSpanStyleDefaults(style.c4l_1), resolveParagraphStyleDefaults(style.d4l_1, direction), style.e4l_1);
  }
  function resolveTextDirection_0(layoutDirection, textDirection) {
    var tmp;
    if (textDirection === Companion_getInstance_32().y4k_1) {
      var tmp_0;
      switch (layoutDirection.s2_1) {
        case 0:
          tmp_0 = Companion_getInstance_32().z4k_1;
          break;
        case 1:
          tmp_0 = Companion_getInstance_32().a4l_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    } else if (textDirection === Companion_getInstance_32().b4l_1) {
      var tmp_1;
      switch (layoutDirection.s2_1) {
        case 0:
          tmp_1 = Companion_getInstance_32().w4k_1;
          break;
        case 1:
          tmp_1 = Companion_getInstance_32().x4k_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_1;
    } else {
      tmp = textDirection;
    }
    return tmp;
  }
  function TtsAnnotation() {
  }
  function VerbatimTtsAnnotation(verbatim) {
    TtsAnnotation.call(this);
    this.m4m_1 = verbatim;
  }
  protoOf(VerbatimTtsAnnotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerbatimTtsAnnotation))
      return false;
    if (!(this.m4m_1 === other.m4m_1))
      return false;
    return true;
  };
  protoOf(VerbatimTtsAnnotation).hashCode = function () {
    return getStringHashCode(this.m4m_1);
  };
  protoOf(VerbatimTtsAnnotation).toString = function () {
    return 'VerbatimTtsAnnotation(verbatim=' + this.m4m_1 + ')';
  };
  function UrlAnnotation(url) {
    this.n4m_1 = url;
  }
  protoOf(UrlAnnotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UrlAnnotation))
      return false;
    if (!(this.n4m_1 === other.n4m_1))
      return false;
    return true;
  };
  protoOf(UrlAnnotation).hashCode = function () {
    return getStringHashCode(this.n4m_1);
  };
  protoOf(UrlAnnotation).toString = function () {
    return 'UrlAnnotation(url=' + this.n4m_1 + ')';
  };
  function get_EMPTY_INTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_INTS;
  }
  var EMPTY_INTS;
  function get_EMPTY_OBJECTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_OBJECTS;
  }
  var EMPTY_OBJECTS;
  function binarySearchInternal(_this__u8e3s4, size, value) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var lo = 0;
    var hi = size - 1 | 0;
    while (lo <= hi) {
      var mid = (lo + hi | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      if (midVal < value) {
        lo = mid + 1 | 0;
      } else if (midVal > value) {
        hi = mid - 1 | 0;
      } else {
        return mid;
      }
    }
    return ~lo;
  }
  var properties_initialized_ContainerHelpers_kt_9fe6be;
  function _init_properties_ContainerHelpers_kt__6fon4s() {
    if (!properties_initialized_ContainerHelpers_kt_9fe6be) {
      properties_initialized_ContainerHelpers_kt_9fe6be = true;
      EMPTY_INTS = new Int32Array(0);
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_OBJECTS = fillArrayVal(Array(0), null);
    }
  }
  function LruCache_init_$Init$(maxSize, $this) {
    LruCache.call($this);
    // Inline function 'kotlin.require' call
    if (!(maxSize > 0)) {
      // Inline function 'androidx.compose.ui.text.caches.LruCache.<init>.<anonymous>' call
      var message = 'maxSize <= 0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.h4s_1 = maxSize;
    $this.e4s_1 = HashMap_init_$Create$(0, 0.75);
    $this.f4s_1 = LinkedHashSet_init_$Create$();
    return $this;
  }
  function LruCache_init_$Create$(maxSize) {
    return LruCache_init_$Init$(maxSize, objectCreate(protoOf(LruCache)));
  }
  function safeSizeOf($this, key, value) {
    var result = $this.n4s(key, value);
    // Inline function 'kotlin.check' call
    if (!(result >= 0)) {
      // Inline function 'androidx.compose.ui.text.caches.LruCache.safeSizeOf.<anonymous>' call
      var message = 'Negative size: ' + toString_0(key) + '=' + toString_0(value);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return result;
  }
  function access$_get_monitor__1eeyt3($this) {
    return $this.d4s_1;
  }
  protoOf(LruCache).n = function () {
    // Inline function 'androidx.compose.ui.text.caches.LruCache.synchronizedValue' call
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    access$_get_monitor__1eeyt3(this);
    return this.g4s_1;
  };
  protoOf(LruCache).l2 = function (key) {
    var mapValue = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.d4s_1;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.get.<anonymous>' call
    mapValue = this.e4s_1.l2(key);
    var tmp;
    if (!(mapValue == null)) {
      this.f4s_1.d2(key);
      this.f4s_1.e(key);
      this.l4s_1 = this.l4s_1 + 1 | 0;
      return mapValue;
    } else {
      var tmp3 = this.m4s_1;
      this.m4s_1 = tmp3 + 1 | 0;
      tmp = tmp3;
    }
    var createdValue = this.o4s(key);
    if (createdValue == null) {
      return null;
    }
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.d4s_1;
    this.j4s_1 = this.j4s_1 + 1 | 0;
    var previousValue = this.e4s_1.o2(key, createdValue);
    this.f4s_1.d2(key);
    this.f4s_1.e(key);
    if (!(previousValue == null)) {
      this.e4s_1.o2(key, previousValue);
      mapValue = previousValue;
    } else {
      this.g4s_1 = this.n() + safeSizeOf(this, key, createdValue) | 0;
    }
    if (!(mapValue == null)) {
      this.q4s(false, key, createdValue, mapValue);
      return mapValue;
    } else {
      this.p4s(this.h4s_1);
      return createdValue;
    }
  };
  protoOf(LruCache).o2 = function (key, value) {
    if (key == null || value == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.d4s_1;
    // Inline function 'androidx.compose.ui.text.caches.LruCache.put.<anonymous>' call
    this.i4s_1 = this.i4s_1 + 1 | 0;
    this.g4s_1 = this.n() + safeSizeOf(this, key, value) | 0;
    previous = this.e4s_1.o2(key, value);
    if (!(previous == null)) {
      this.g4s_1 = this.n() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
    }
    if (this.f4s_1.m(key)) {
      this.f4s_1.d2(key);
    }
    this.f4s_1.e(key);
    if (!(previous == null)) {
      this.q4s(false, key, ensureNotNull(previous), value);
    }
    this.p4s(this.h4s_1);
    return previous;
  };
  protoOf(LruCache).p4s = function (maxSize) {
    $l$loop: while (true) {
      var key = null;
      var value = null;
      // Inline function 'androidx.compose.ui.text.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this.d4s_1;
      if (this.n() < 0 || (this.e4s_1.q() && !(this.n() === 0)) || !(this.e4s_1.q() === this.f4s_1.q())) {
        throw IllegalStateException_init_$Create$('map/keySet size inconsistency');
      }
      if (this.n() > maxSize && !this.e4s_1.q()) {
        key = first(this.f4s_1);
        var tmp0 = this.e4s_1;
        // Inline function 'kotlin.collections.get' call
        var key_0 = key;
        var tmp0_elvis_lhs = (isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).l2(key_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw IllegalStateException_init_$Create$('inconsistent state');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        value = tmp;
        var tmp2 = this.e4s_1;
        // Inline function 'kotlin.collections.remove' call
        var key_1 = key;
        (isInterface(tmp2, KtMutableMap) ? tmp2 : THROW_CCE()).p2(key_1);
        var tmp4 = this.f4s_1;
        // Inline function 'kotlin.collections.remove' call
        var element = key;
        (isInterface(tmp4, MutableCollection) ? tmp4 : THROW_CCE()).d2(element);
        this.g4s_1 = this.n() - safeSizeOf(this, ensureNotNull(key), ensureNotNull(value)) | 0;
        this.k4s_1 = this.k4s_1 + 1 | 0;
      }
      if (key == null && value == null) {
        break $l$loop;
      } else {
        this.q4s(true, ensureNotNull(key), ensureNotNull(value), null);
      }
    }
  };
  protoOf(LruCache).p2 = function (key) {
    if (key == null) {
      throw NullPointerException_init_$Create$();
    }
    var previous = null;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.d4s_1;
    previous = this.e4s_1.p2(key);
    this.f4s_1.d2(key);
    if (!(previous == null)) {
      this.g4s_1 = this.n() - safeSizeOf(this, key, ensureNotNull(previous)) | 0;
    }
    if (!(previous == null)) {
      this.q4s(false, key, ensureNotNull(previous), null);
    }
    return previous;
  };
  protoOf(LruCache).q4s = function (evicted, key, oldValue, newValue) {
  };
  protoOf(LruCache).o4s = function (key) {
    return null;
  };
  protoOf(LruCache).n4s = function (key, value) {
    return 1;
  };
  protoOf(LruCache).toString = function () {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.d4s_1;
    var accesses = this.l4s_1 + this.m4s_1 | 0;
    var hitPercent = !(accesses === 0) ? imul(100, this.l4s_1) / accesses | 0 : 0;
    return 'LruCache[maxSize=' + this.h4s_1 + ',hits=' + this.l4s_1 + ',misses=' + this.m4s_1 + ',' + ('hitRate=' + hitPercent + '%]');
  };
  function LruCache() {
    this.d4s_1 = createSynchronizedObject();
    this.g4s_1 = 0;
    this.h4s_1 = 0;
    this.i4s_1 = 0;
    this.j4s_1 = 0;
    this.k4s_1 = 0;
    this.l4s_1 = 0;
    this.m4s_1 = 0;
  }
  function SimpleArrayMap_init_$Init$(capacity, $this) {
    capacity = capacity === VOID ? 0 : capacity;
    SimpleArrayMap.call($this);
    if (capacity === 0) {
      $this.r4s_1 = get_EMPTY_INTS();
      $this.s4s_1 = get_EMPTY_OBJECTS();
    } else {
      $this.r4s_1 = new Int32Array(capacity);
      var tmp = $this;
      // Inline function 'kotlin.arrayOfNulls' call
      var size = capacity << 1;
      tmp.s4s_1 = fillArrayVal(Array(size), null);
    }
    $this.t4s_1 = 0;
    return $this;
  }
  function SimpleArrayMap_init_$Create$(capacity) {
    return SimpleArrayMap_init_$Init$(capacity, objectCreate(protoOf(SimpleArrayMap)));
  }
  protoOf(SimpleArrayMap).u4s = function (key, hash) {
    var N = this.t4s_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.r4s_1, N, hash);
    if (index < 0) {
      return index;
    }
    if (equals(key, this.s4s_1[index << 1])) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N && this.r4s_1[end] === hash) {
      if (equals(key, this.s4s_1[end << 1]))
        return end;
      end = end + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 && this.r4s_1[i] === hash) {
      if (equals(key, this.s4s_1[i << 1]))
        return i;
      i = i - 1 | 0;
    }
    return ~end;
  };
  protoOf(SimpleArrayMap).v4s = function () {
    var N = this.t4s_1;
    if (N === 0) {
      return -1;
    }
    var index = binarySearchInternal(this.r4s_1, N, 0);
    if (index < 0) {
      return index;
    }
    if (null == this.s4s_1[index << 1]) {
      return index;
    }
    var end;
    end = index + 1 | 0;
    while (end < N && this.r4s_1[end] === 0) {
      if (null == this.s4s_1[end << 1])
        return end;
      end = end + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 && this.r4s_1[i] === 0) {
      if (null == this.s4s_1[i << 1])
        return i;
      i = i - 1 | 0;
    }
    return ~end;
  };
  protoOf(SimpleArrayMap).j2 = function (key) {
    return this.w4s(key) >= 0;
  };
  protoOf(SimpleArrayMap).w4s = function (key) {
    return key == null ? this.v4s() : this.u4s(key, hashCode(key));
  };
  protoOf(SimpleArrayMap).l2 = function (key) {
    var index = this.w4s(key);
    var tmp;
    if (index >= 0) {
      var tmp_0 = this.s4s_1[(index << 1) + 1 | 0];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SimpleArrayMap).gv = function (index) {
    var tmp = this.s4s_1[index << 1];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SimpleArrayMap).zu = function (index) {
    var tmp = this.s4s_1[(index << 1) + 1 | 0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SimpleArrayMap).q = function () {
    return this.t4s_1 <= 0;
  };
  protoOf(SimpleArrayMap).o2 = function (key, value) {
    var osize = this.t4s_1;
    var hash;
    var index;
    if (key == null) {
      hash = 0;
      index = this.v4s();
    } else {
      hash = hashCode(key);
      index = this.u4s(key, hash);
    }
    if (index >= 0) {
      index = (index << 1) + 1 | 0;
      var tmp = this.s4s_1[index];
      var old = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
      this.s4s_1[index] = value;
      return old;
    }
    index = ~index;
    if (osize >= this.r4s_1.length) {
      var n = osize >= 8 ? osize + (osize >> 1) | 0 : osize >= 4 ? 8 : 4;
      if (false) {
        println('SimpleArrayMap put: grow from ' + this.r4s_1.length + ' to ' + n);
      }
      this.r4s_1 = copyOf(this.r4s_1, n);
      this.s4s_1 = copyOf_0(this.s4s_1, n << 1);
      if (true && !(osize === this.t4s_1)) {
        throw ConcurrentModificationException_init_$Create$();
      }
    }
    if (index < osize) {
      if (false) {
        println('SimpleArrayMap put: move ' + index + '-' + (osize - index | 0) + ' to ' + (index + 1 | 0));
      }
      var tmp0 = this.r4s_1;
      var tmp1 = this.r4s_1;
      var tmp2 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var startIndex = index;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = tmp0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, tmp1, tmp2, startIndex, osize);
      var tmp5 = this.s4s_1;
      var tmp6 = this.s4s_1;
      var tmp7 = (index + 1 | 0) << 1;
      var tmp8 = index << 1;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.t4s_1 << 1;
      arrayCopy(tmp5, tmp6, tmp7, tmp8, endIndex);
    }
    if (!(osize === this.t4s_1) || index >= this.r4s_1.length) {
      throw ConcurrentModificationException_init_$Create$();
    }
    this.r4s_1[index] = hash;
    this.s4s_1[index << 1] = key;
    this.s4s_1[(index << 1) + 1 | 0] = value;
    this.t4s_1 = this.t4s_1 + 1 | 0;
    return null;
  };
  protoOf(SimpleArrayMap).equals = function (other) {
    if (this === other) {
      return true;
    }
    try {
      if (other instanceof SimpleArrayMap) {
        var map = other instanceof SimpleArrayMap ? other : THROW_CCE();
        if (!(this.t4s_1 === map.t4s_1)) {
          return false;
        }
        var inductionVariable = 0;
        var last = this.t4s_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var key = this.gv(i);
            var mine = this.zu(i);
            var theirs = map.l2(key);
            if (mine == null) {
              if (!(theirs == null) || !map.j2(key)) {
                return false;
              }
            } else if (!equals(mine, theirs)) {
              return false;
            }
          }
           while (inductionVariable < last);
        return true;
      } else {
        if (!(other == null) ? isInterface(other, KtMap) : false) {
          var map_0 = other;
          if (!(this.t4s_1 === map_0.n())) {
            return false;
          }
          var inductionVariable_0 = 0;
          var last_0 = this.t4s_1;
          if (inductionVariable_0 < last_0)
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var key_0 = this.gv(i_0);
              var mine_0 = this.zu(i_0);
              // Inline function 'kotlin.collections.get' call
              var theirs_0 = (isInterface(map_0, KtMap) ? map_0 : THROW_CCE()).l2(key_0);
              if (mine_0 == null) {
                var tmp;
                if (!(theirs_0 == null)) {
                  tmp = true;
                } else {
                  // Inline function 'kotlin.collections.containsKey' call
                  tmp = !(isInterface(map_0, KtMap) ? map_0 : THROW_CCE()).j2(key_0);
                }
                if (tmp) {
                  return false;
                }
              } else if (!equals(mine_0, theirs_0)) {
                return false;
              }
            }
             while (inductionVariable_0 < last_0);
          return true;
        }
      }
    } catch ($p) {
      if ($p instanceof NullPointerException) {
        var ignored = $p;
      } else {
        if ($p instanceof ClassCastException) {
          var ignored_0 = $p;
        } else {
          throw $p;
        }
      }
    }
    return false;
  };
  protoOf(SimpleArrayMap).hashCode = function () {
    var hashes = this.r4s_1;
    var array = this.s4s_1;
    var result = 0;
    var i = 0;
    var v = 1;
    var s = this.t4s_1;
    while (i < s) {
      var value = array[v];
      var tmp = result;
      var tmp_0 = hashes[i];
      var tmp1_elvis_lhs = value == null ? null : hashCode(value);
      result = tmp + (tmp_0 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
      i = i + 1 | 0;
      v = v + 2 | 0;
    }
    return result;
  };
  protoOf(SimpleArrayMap).toString = function () {
    if (this.q()) {
      return '{}';
    }
    var buffer = StringBuilder_init_$Create$_0(imul(this.t4s_1, 28));
    buffer.p8(_Char___init__impl__6a9atx(123));
    var inductionVariable = 0;
    var last = this.t4s_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i > 0) {
          buffer.o8(', ');
        }
        var key = this.gv(i);
        if (!(key === this)) {
          buffer.n8(key);
        } else {
          buffer.o8('(this Map)');
        }
        buffer.p8(_Char___init__impl__6a9atx(61));
        var value = this.zu(i);
        if (!(value === this)) {
          buffer.n8(value);
        } else {
          buffer.o8('(this Map)');
        }
      }
       while (inductionVariable < last);
    buffer.p8(_Char___init__impl__6a9atx(125));
    return buffer.toString();
  };
  function SimpleArrayMap() {
    this.t4s_1 = 0;
  }
  function Font() {
  }
  function Companion_3() {
    Companion_instance_4 = this;
    this.k4p_1 = new DefaultFontFamily();
    this.l4p_1 = new GenericFontFamily('sans-serif', 'FontFamily.SansSerif');
    this.m4p_1 = new GenericFontFamily('serif', 'FontFamily.Serif');
    this.n4p_1 = new GenericFontFamily('monospace', 'FontFamily.Monospace');
    this.o4p_1 = new GenericFontFamily('cursive', 'FontFamily.Cursive');
  }
  var Companion_instance_4;
  function Companion_getInstance_16() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function FontFamily(canLoadSynchronously) {
    Companion_getInstance_16();
    this.c4t_1 = canLoadSynchronously;
  }
  function SystemFontFamily() {
    FontFamily.call(this, true);
  }
  function DefaultFontFamily() {
    SystemFontFamily.call(this);
  }
  protoOf(DefaultFontFamily).toString = function () {
    return 'FontFamily.Default';
  };
  function GenericFontFamily(name, fontFamilyName) {
    SystemFontFamily.call(this);
    this.e4t_1 = name;
    this.f4t_1 = fontFamilyName;
  }
  protoOf(GenericFontFamily).toString = function () {
    return this.f4t_1;
  };
  function FontListFontFamily() {
  }
  function FileBasedFontFamily() {
  }
  function LoadedFontFamily() {
  }
  function get_GlobalTypefaceRequestCache() {
    _init_properties_FontFamilyResolver_kt__lawdt3();
    return GlobalTypefaceRequestCache;
  }
  var GlobalTypefaceRequestCache;
  function get_GlobalAsyncTypefaceCache() {
    _init_properties_FontFamilyResolver_kt__lawdt3();
    return GlobalAsyncTypefaceCache;
  }
  var GlobalAsyncTypefaceCache;
  function TypefaceRequestCache$runCached$lambda(this$0, $typefaceRequest) {
    return function (finalResult) {
      // Inline function 'androidx.compose.ui.text.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.g4t_1;
      if (finalResult.i4t()) {
        this$0.h4t_1.o2($typefaceRequest, finalResult);
      } else {
        this$0.h4t_1.p2($typefaceRequest);
      }
      return Unit_instance;
    };
  }
  function TypefaceRequestCache() {
    this.g4t_1 = createSynchronizedObject();
    this.h4t_1 = LruCache_init_$Create$(16);
  }
  protoOf(TypefaceRequestCache).j4t = function (typefaceRequest, resolveTypeface) {
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.g4t_1;
    // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>' call
    var tmp0_safe_receiver = this.h4t_1.l2(typefaceRequest);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.font.TypefaceRequestCache.runCached.<anonymous>.<anonymous>' call
      var tmp_0;
      if (tmp0_safe_receiver.i4t()) {
        return tmp0_safe_receiver;
      } else {
        tmp_0 = this.h4t_1.p2(typefaceRequest);
      }
      tmp = tmp_0;
    }
    var tmp_1;
    try {
      tmp_1 = resolveTypeface(TypefaceRequestCache$runCached$lambda(this, typefaceRequest));
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var cause = $p;
        throw new FontLoadFailedException(typefaceRequest.k4t_1, cause);
      } else {
        throw $p;
      }
    }
    var currentTypefaceResult = tmp_1;
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.g4t_1;
    if (this.h4t_1.l2(typefaceRequest) == null && currentTypefaceResult.i4t()) {
      this.h4t_1.o2(typefaceRequest, currentTypefaceResult);
    }
    return currentTypefaceResult;
  };
  function TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    this.k4t_1 = fontFamily;
    this.l4t_1 = fontWeight;
    this.m4t_1 = fontStyle;
    this.n4t_1 = fontSynthesis;
    this.o4t_1 = resourceLoaderCacheKey;
  }
  protoOf(TypefaceRequest).p4t = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    return new TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).q4t = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey, $super) {
    fontFamily = fontFamily === VOID ? this.k4t_1 : fontFamily;
    fontWeight = fontWeight === VOID ? this.l4t_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.m4t_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.n4t_1 : fontSynthesis;
    resourceLoaderCacheKey = resourceLoaderCacheKey === VOID ? this.o4t_1 : resourceLoaderCacheKey;
    return $super === VOID ? this.p4t(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) : $super.p4t.call(this, fontFamily, fontWeight, new FontStyle(fontStyle), new FontSynthesis(fontSynthesis), resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).toString = function () {
    return 'TypefaceRequest(fontFamily=' + toString_0(this.k4t_1) + ', fontWeight=' + this.l4t_1.toString() + ', fontStyle=' + FontStyle__toString_impl_thncxr(this.m4t_1) + ', fontSynthesis=' + FontSynthesis__toString_impl_gunvr0(this.n4t_1) + ', resourceLoaderCacheKey=' + toString_0(this.o4t_1) + ')';
  };
  protoOf(TypefaceRequest).hashCode = function () {
    var result = this.k4t_1 == null ? 0 : hashCode(this.k4t_1);
    result = imul(result, 31) + this.l4t_1.hashCode() | 0;
    result = imul(result, 31) + FontStyle__hashCode_impl_7qhg4w(this.m4t_1) | 0;
    result = imul(result, 31) + FontSynthesis__hashCode_impl_4wi11v(this.n4t_1) | 0;
    result = imul(result, 31) + (this.o4t_1 == null ? 0 : hashCode(this.o4t_1)) | 0;
    return result;
  };
  protoOf(TypefaceRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypefaceRequest))
      return false;
    var tmp0_other_with_cast = other instanceof TypefaceRequest ? other : THROW_CCE();
    if (!equals(this.k4t_1, tmp0_other_with_cast.k4t_1))
      return false;
    if (!this.l4t_1.equals(tmp0_other_with_cast.l4t_1))
      return false;
    if (!(this.m4t_1 === tmp0_other_with_cast.m4t_1))
      return false;
    if (!(this.n4t_1 === tmp0_other_with_cast.n4t_1))
      return false;
    if (!equals(this.o4t_1, tmp0_other_with_cast.o4t_1))
      return false;
    return true;
  };
  function Immutable(value, cacheable) {
    cacheable = cacheable === VOID ? true : cacheable;
    this.r4t_1 = value;
    this.s4t_1 = cacheable;
  }
  protoOf(Immutable).v = function () {
    return this.r4t_1;
  };
  protoOf(Immutable).i4t = function () {
    return this.s4t_1;
  };
  function Async(current) {
    this.t4t_1 = current;
  }
  protoOf(Async).v = function () {
    return this.t4t_1.v();
  };
  protoOf(Async).i4t = function () {
    return this.t4t_1.a4u_1;
  };
  function FontLoadFailedException(fontFamily, cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$('Failed to load font ' + toString_0(fontFamily) + '. Is it installed on the system?', cause, this);
    captureStack(this, FontLoadFailedException);
  }
  function resolve($this, typefaceRequest) {
    var result = $this.d4u_1.j4t(typefaceRequest, FontFamilyResolverImpl$resolve$lambda($this, typefaceRequest));
    return result;
  }
  function FontFamilyResolverImpl$createDefaultTypeface$lambda(this$0) {
    return function (it) {
      return resolve(this$0, it.q4t(null)).v();
    };
  }
  function FontFamilyResolverImpl$resolve$lambda(this$0, $typefaceRequest) {
    return function (onAsyncCompletion) {
      var tmp0_elvis_lhs = this$0.e4u_1.j4u($typefaceRequest, this$0.b4u_1, onAsyncCompletion, this$0.g4u_1);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.f4u_1.j4u($typefaceRequest, this$0.b4u_1, onAsyncCompletion, this$0.g4u_1) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        throw new FontLoadFailedException($typefaceRequest.k4t_1);
      } else {
        tmp = tmp1_elvis_lhs;
      }
      return tmp;
    };
  }
  function FontFamilyResolverImpl(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter) {
    platformResolveInterceptor = platformResolveInterceptor === VOID ? Companion_getInstance_17().k4u_1 : platformResolveInterceptor;
    typefaceRequestCache = typefaceRequestCache === VOID ? get_GlobalTypefaceRequestCache() : typefaceRequestCache;
    fontListFontFamilyTypefaceAdapter = fontListFontFamilyTypefaceAdapter === VOID ? new FontListFontFamilyTypefaceAdapter(get_GlobalAsyncTypefaceCache()) : fontListFontFamilyTypefaceAdapter;
    platformFamilyTypefaceAdapter = platformFamilyTypefaceAdapter === VOID ? new PlatformFontFamilyTypefaceAdapter() : platformFamilyTypefaceAdapter;
    this.b4u_1 = platformFontLoader;
    this.c4u_1 = platformResolveInterceptor;
    this.d4u_1 = typefaceRequestCache;
    this.e4u_1 = fontListFontFamilyTypefaceAdapter;
    this.f4u_1 = platformFamilyTypefaceAdapter;
    var tmp = this;
    tmp.g4u_1 = FontFamilyResolverImpl$createDefaultTypeface$lambda(this);
  }
  protoOf(FontFamilyResolverImpl).l4u = function (fontFamily, fontWeight, fontStyle, fontSynthesis) {
    return resolve(this, new TypefaceRequest(this.c4u_1.m4u(fontFamily), this.c4u_1.n4u(fontWeight), this.c4u_1.o4u(fontStyle), this.c4u_1.p4u(fontSynthesis), this.b4u_1.q4u()));
  };
  function PlatformResolveInterceptor$Companion$Default$1() {
  }
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    tmp.k4u_1 = new PlatformResolveInterceptor$Companion$Default$1();
  }
  var Companion_instance_5;
  function Companion_getInstance_17() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function PlatformResolveInterceptor() {
  }
  var properties_initialized_FontFamilyResolver_kt_43uw85;
  function _init_properties_FontFamilyResolver_kt__lawdt3() {
    if (!properties_initialized_FontFamilyResolver_kt_43uw85) {
      properties_initialized_FontFamilyResolver_kt_43uw85 = true;
      GlobalTypefaceRequestCache = new TypefaceRequestCache();
      GlobalAsyncTypefaceCache = new AsyncTypefaceCache();
    }
  }
  function _AsyncTypefaceResult___init__impl__h4msax(result) {
    return result;
  }
  function _AsyncTypefaceResult___get_result__impl__kpcqqb($this) {
    return $this;
  }
  function _AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca($this) {
    return _AsyncTypefaceResult___get_result__impl__kpcqqb($this) == null;
  }
  function AsyncTypefaceResult__toString_impl_imltdd($this) {
    return 'AsyncTypefaceResult(result=' + toString_0($this) + ')';
  }
  function AsyncTypefaceResult__hashCode_impl_34k3fi($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function AsyncTypefaceResult__equals_impl_4qqxz2($this, other) {
    if (!(other instanceof AsyncTypefaceResult))
      return false;
    var tmp0_other_with_cast = other instanceof AsyncTypefaceResult ? other.r4u_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function AsyncTypefaceResult(result) {
    this.r4u_1 = result;
  }
  protoOf(AsyncTypefaceResult).toString = function () {
    return AsyncTypefaceResult__toString_impl_imltdd(this.r4u_1);
  };
  protoOf(AsyncTypefaceResult).hashCode = function () {
    return AsyncTypefaceResult__hashCode_impl_34k3fi(this.r4u_1);
  };
  protoOf(AsyncTypefaceResult).equals = function (other) {
    return AsyncTypefaceResult__equals_impl_4qqxz2(this.r4u_1, other);
  };
  function Key(font, loaderKey) {
    this.s4u_1 = font;
    this.t4u_1 = loaderKey;
  }
  protoOf(Key).toString = function () {
    return 'Key(font=' + toString(this.s4u_1) + ', loaderKey=' + toString_0(this.t4u_1) + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = hashCode(this.s4u_1);
    result = imul(result, 31) + (this.t4u_1 == null ? 0 : hashCode(this.t4u_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!equals(this.s4u_1, tmp0_other_with_cast.s4u_1))
      return false;
    if (!equals(this.t4u_1, tmp0_other_with_cast.t4u_1))
      return false;
    return true;
  };
  function access$_get_resultCache__u960s4($this) {
    return $this.v4u_1;
  }
  function access$_get_permanentCache__bpfryv($this) {
    return $this.w4u_1;
  }
  function access$_get_cacheLock__y7hpng($this) {
    return $this.x4u_1;
  }
  function $runCachedCOROUTINE$1(_this__u8e3s4, font, platformFontLoader, forever, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g4v_1 = _this__u8e3s4;
    this.h4v_1 = font;
    this.i4v_1 = platformFontLoader;
    this.j4v_1 = forever;
    this.k4v_1 = block;
  }
  protoOf($runCachedCOROUTINE$1).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.l4v_1 = new Key(this.h4v_1, this.i4v_1.q4u());
            this.g4v_1.x4u_1;
            var tmp0_elvis_lhs = this.g4v_1.v4u_1.l2(this.l4v_1);
            var priorResult = tmp0_elvis_lhs == null ? this.g4v_1.w4u_1.l2(this.l4v_1) : tmp0_elvis_lhs;
            if (!(priorResult == null)) {
              return _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.r4u_1);
            }

            this.h9_1 = 1;
            suspendResult = this.k4v_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = suspendResult;
            this.g4v_1.x4u_1;
            if (this_0 == null) {
              this.g4v_1.w4u_1.o2(this.l4v_1, new AsyncTypefaceResult(this.g4v_1.u4u_1));
            } else if (this.j4v_1) {
              this.g4v_1.w4u_1.o2(this.l4v_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(this_0)));
            } else {
              this.g4v_1.v4u_1.o2(this.l4v_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(this_0)));
            }

            return this_0;
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function AsyncTypefaceCache() {
    this.u4u_1 = _AsyncTypefaceResult___init__impl__h4msax(null);
    this.v4u_1 = LruCache_init_$Create$(16);
    this.w4u_1 = SimpleArrayMap_init_$Create$();
    this.x4u_1 = createSynchronizedObject();
  }
  protoOf(AsyncTypefaceCache).m4v = function (font, platformFontLoader, result, forever) {
    var key = new Key(font, platformFontLoader.q4u());
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.x4u_1;
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.put.<anonymous>' call
    var tmp;
    if (result == null) {
      tmp = this.w4u_1.o2(key, new AsyncTypefaceResult(this.u4u_1));
    } else if (forever) {
      tmp = this.w4u_1.o2(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    } else {
      tmp = this.v4u_1.o2(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    }
  };
  protoOf(AsyncTypefaceCache).n4v = function (font, platformFontLoader, result, forever, $super) {
    forever = forever === VOID ? false : forever;
    var tmp;
    if ($super === VOID) {
      this.m4v(font, platformFontLoader, result, forever);
      tmp = Unit_instance;
    } else {
      tmp = $super.m4v.call(this, font, platformFontLoader, result, forever);
    }
    return tmp;
  };
  protoOf(AsyncTypefaceCache).o4v = function (font, platformFontLoader) {
    var key = new Key(font, platformFontLoader.q4u());
    // Inline function 'androidx.compose.ui.text.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.x4u_1;
    // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.get.<anonymous>' call
    var tmp0_elvis_lhs = this.v4u_1.l2(key);
    return tmp0_elvis_lhs == null ? this.w4u_1.l2(key) : tmp0_elvis_lhs;
  };
  protoOf(AsyncTypefaceCache).p4v = function (font, platformFontLoader, forever, block, $completion) {
    var tmp = new $runCachedCOROUTINE$1(this, font, platformFontLoader, forever, block, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  function _set_value__lx0xdg($this, _set____db54di) {
    var tmp0 = $this.z4t_1;
    value$factory();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  }
  function AsyncFontListLoader$load$slambda(this$0, $font, resultContinuation) {
    this.y4v_1 = this$0;
    this.z4v_1 = $font;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$load$slambda).a4w = function ($completion) {
    var tmp = this.b4w($completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(AsyncFontListLoader$load$slambda).c4w = function ($completion) {
    return this.a4w($completion);
  };
  protoOf(AsyncFontListLoader$load$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.y4v_1.d4w(this.z4v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AsyncFontListLoader$load$slambda).b4w = function (completion) {
    return new AsyncFontListLoader$load$slambda(this.y4v_1, this.z4v_1, completion);
  };
  function AsyncFontListLoader$load$slambda_0(this$0, $font, resultContinuation) {
    var i = new AsyncFontListLoader$load$slambda(this$0, $font, resultContinuation);
    var l = function ($completion) {
      return i.a4w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    this.m4w_1 = this$0;
    this.n4w_1 = $this_loadWithTimeoutOrNull;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).p4w = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.s1m($this$withTimeoutOrNull, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).ba = function (p1, $completion) {
    return this.p4w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.m4w_1.y4t_1.q4w(this.n4w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).s1m = function ($this$withTimeoutOrNull, completion) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this.m4w_1, this.n4w_1, completion);
    i.o4w_1 = $this$withTimeoutOrNull;
    return i;
  };
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation);
    var l = function ($this$withTimeoutOrNull, $completion) {
      return i.p4w($this$withTimeoutOrNull, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $loadCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z4w_1 = _this__u8e3s4;
  }
  protoOf($loadCOROUTINE$2).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 12;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.h9_1 = 2;
            continue $sm;
          case 2:
            this.i9_1 = 11;
            var tmp_0 = this;
            tmp_0.c4x_1 = this.z4w_1.u4t_1;
            this.d4x_1 = this.c4x_1;
            this.e4x_1 = get_indices(this.d4x_1).j();
            this.h9_1 = 3;
            continue $sm;
          case 3:
            if (!this.e4x_1.k()) {
              this.h9_1 = 9;
              continue $sm;
            }

            this.f4x_1 = this.e4x_1.l();
            this.g4x_1 = this.d4x_1.p(this.f4x_1);
            var tmp_1 = this;
            tmp_1.h4x_1 = this.g4x_1;
            this.i4x_1 = this.h4x_1;
            if (this.i4x_1.y4s() === Companion_getInstance_19().b4t_1) {
              this.h9_1 = 4;
              suspendResult = this.z4w_1.w4t_1.p4v(this.i4x_1, this.z4w_1.y4t_1, false, AsyncFontListLoader$load$slambda_0(this.z4w_1, this.i4x_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 7;
              continue $sm;
            }

          case 4:
            this.j4x_1 = suspendResult;
            if (!(this.j4x_1 == null)) {
              _set_value__lx0xdg(this.z4w_1, synthesizeTypeface(this.z4w_1.v4t_1.n4t_1, this.j4x_1, this.i4x_1, this.z4w_1.v4t_1.l4t_1, this.z4w_1.v4t_1.m4t_1));
              this.b4x_1 = Unit_instance;
              this.i9_1 = 12;
              this.h9_1 = 8;
              continue $sm;
            } else {
              this.h9_1 = 5;
              suspendResult = yield_0(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            this.h9_1 = 6;
            continue $sm;
          case 6:
            this.h9_1 = 7;
            continue $sm;
          case 7:
            this.h9_1 = 3;
            continue $sm;
          case 8:
            this.i9_1 = 12;
            var shouldCache = get_isActive(this.n9());
            this.z4w_1.a4u_1 = false;
            this.z4w_1.x4t_1(new Immutable(this.z4w_1.v(), shouldCache));
            return Unit_instance;
          case 9:
            this.a4x_1 = Unit_instance;
            this.i9_1 = 12;
            this.h9_1 = 10;
            continue $sm;
          case 10:
            this.i9_1 = 12;
            var shouldCache_0 = get_isActive(this.n9());
            this.z4w_1.a4u_1 = false;
            this.z4w_1.x4t_1(new Immutable(this.z4w_1.v(), shouldCache_0));
            return Unit_instance;
          case 11:
            this.i9_1 = 12;
            var t = this.k9_1;
            var shouldCache_1 = get_isActive(this.n9());
            this.z4w_1.a4u_1 = false;
            this.z4w_1.x4t_1(new Immutable(this.z4w_1.v(), shouldCache_1));
            throw t;
          case 12:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 12) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function $loadWithTimeoutOrNullCOROUTINE$3(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s4x_1 = _this__u8e3s4;
    this.t4x_1 = _this__u8e3s4_0;
  }
  protoOf($loadWithTimeoutOrNullCOROUTINE$3).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 3;
            this.i9_1 = 2;
            this.h9_1 = 1;
            var tmp_0 = new Long(15000, 0);
            suspendResult = withTimeoutOrNull(tmp_0, AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this.s4x_1, this.t4x_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u4x_1 = suspendResult;
            this.i9_1 = 3;
            this.h9_1 = 4;
            continue $sm;
          case 2:
            this.i9_1 = 3;
            var tmp_1 = this.k9_1;
            if (tmp_1 instanceof CancellationException) {
              var cancel = this.k9_1;
              var tmp_2 = this;
              var tmp_3;
              if (get_isActive(this.n9())) {
                tmp_3 = null;
              } else {
                throw cancel;
              }
              tmp_2.u4x_1 = tmp_3;
              this.h9_1 = 4;
              continue $sm;
            } else {
              var tmp_4 = this.k9_1;
              if (tmp_4 instanceof Exception) {
                var uncaughtFontLoadException = this.k9_1;
                var tmp_5 = this;
                var tmp0_safe_receiver = this.n9().u9(Key_instance);
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.p11(this.n9(), IllegalStateException_init_$Create$_0('Unable to load font ' + toString(this.t4x_1), uncaughtFontLoadException));
                }
                tmp_5.u4x_1 = null;
                this.h9_1 = 4;
                continue $sm;
              } else {
                throw this.k9_1;
              }
            }

          case 3:
            throw this.k9_1;
          case 4:
            this.i9_1 = 3;
            return this.u4x_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 3) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function AsyncFontListLoader(fontList, initialType, typefaceRequest, asyncTypefaceCache, onCompletion, platformFontLoader) {
    this.u4t_1 = fontList;
    this.v4t_1 = typefaceRequest;
    this.w4t_1 = asyncTypefaceCache;
    this.x4t_1 = onCompletion;
    this.y4t_1 = platformFontLoader;
    this.z4t_1 = mutableStateOf(initialType);
    this.a4u_1 = true;
  }
  protoOf(AsyncFontListLoader).v = function () {
    var tmp0 = this.z4t_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    value$factory_0();
    return tmp0.v();
  };
  protoOf(AsyncFontListLoader).v4x = function ($completion) {
    var tmp = new $loadCOROUTINE$2(this, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(AsyncFontListLoader).d4w = function (_this__u8e3s4, $completion) {
    var tmp = new $loadWithTimeoutOrNullCOROUTINE$3(this, _this__u8e3s4, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  function FontListFontFamilyTypefaceAdapter$Companion$DropExceptionHandler$$inlined$CoroutineExceptionHandler$1() {
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$Companion$DropExceptionHandler$$inlined$CoroutineExceptionHandler$1).p11 = function (context, exception) {
    // Inline function 'androidx.compose.ui.text.font.Companion.DropExceptionHandler.<anonymous>' call
    return Unit_instance;
  };
  function Companion_5() {
    Companion_instance_6 = this;
    this.x4x_1 = new FontMatcher();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    tmp.y4x_1 = new FontListFontFamilyTypefaceAdapter$Companion$DropExceptionHandler$$inlined$CoroutineExceptionHandler$1();
  }
  var Companion_instance_6;
  function Companion_getInstance_18() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation) {
    this.h4y_1 = $asyncLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.h4y_1.v4x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 2) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).s1m = function ($this$launch, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda(this.h4y_1, completion);
    i.i4y_1 = $this$launch;
    return i;
  };
  function FontListFontFamilyTypefaceAdapter$resolve$slambda_0($asyncLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FontListFontFamilyTypefaceAdapter(asyncTypefaceCache, injectedContext) {
    Companion_getInstance_18();
    asyncTypefaceCache = asyncTypefaceCache === VOID ? new AsyncTypefaceCache() : asyncTypefaceCache;
    injectedContext = injectedContext === VOID ? EmptyCoroutineContext_getInstance() : injectedContext;
    this.h4u_1 = asyncTypefaceCache;
    this.i4u_1 = CoroutineScope_0(Companion_getInstance_18().y4x_1.rh(get_FontCacheManagementDispatcher()).rh(injectedContext).rh(SupervisorJob(injectedContext.u9(Key_instance_0))));
  }
  protoOf(FontListFontFamilyTypefaceAdapter).j4u = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.k4t_1;
    if (!(tmp instanceof FontListFontFamily))
      return null;
    var matched = Companion_getInstance_18().x4x_1.l4y(typefaceRequest.k4t_1.k4y_1, typefaceRequest.l4t_1, typefaceRequest.m4t_1);
    var tmp0_container = firstImmediatelyAvailable(matched, typefaceRequest, this.h4u_1, platformFontLoader, createDefaultTypeface);
    var asyncFontsToLoad = tmp0_container.ag();
    var synthesizedTypeface = tmp0_container.bg();
    if (asyncFontsToLoad == null)
      return new Immutable(synthesizedTypeface);
    var asyncLoader = new AsyncFontListLoader(asyncFontsToLoad, synthesizedTypeface, typefaceRequest, this.h4u_1, onAsyncCompletion, platformFontLoader);
    var tmp_0 = this.i4u_1;
    var tmp_1 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp_0, VOID, tmp_1, FontListFontFamilyTypefaceAdapter$resolve$slambda_0(asyncLoader, null));
    return new Async(asyncLoader);
  };
  function firstImmediatelyAvailable(_this__u8e3s4, typefaceRequest, asyncTypefaceCache, platformFontLoader, createDefaultTypeface) {
    var asyncFontsToLoad = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.n() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__u8e3s4.p(idx);
        var tmp1_subject = font.y4s();
        if (tmp1_subject === Companion_getInstance_19().z4s_1) {
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.synchronized' call
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            access$_get_cacheLock__y7hpng(asyncTypefaceCache);
            var key = new Key(font, platformFontLoader.q4u());
            var tmp0_elvis_lhs = access$_get_resultCache__u960s4(asyncTypefaceCache).l2(key);
            var priorResult = tmp0_elvis_lhs == null ? access$_get_permanentCache__bpfryv(asyncTypefaceCache).l2(key) : tmp0_elvis_lhs;
            if (!(priorResult == null)) {
              tmp$ret$0 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.r4u_1);
              break $l$block;
            }
            // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>' call
            var tmp;
            try {
              tmp = platformFontLoader.m4y(font);
            } catch ($p) {
              var tmp_0;
              if ($p instanceof Exception) {
                var cause = $p;
                throw IllegalStateException_init_$Create$_0('Unable to load font ' + toString(font), cause);
              } else {
                throw $p;
              }
            }
            // Inline function 'kotlin.also' call
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking.<anonymous>' call
            asyncTypefaceCache.n4v(font, platformFontLoader, tmp);
            tmp$ret$0 = tmp;
          }
          var tmp2_elvis_lhs = tmp$ret$0;
          var tmp_1;
          if (tmp2_elvis_lhs == null) {
            throw IllegalStateException_init_$Create$('Unable to load font ' + toString(font));
          } else {
            tmp_1 = tmp2_elvis_lhs;
          }
          var result = tmp_1;
          return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.n4t_1, result, font, typefaceRequest.l4t_1, typefaceRequest.m4t_1));
        } else if (tmp1_subject === Companion_getInstance_19().a4t_1) {
          var tmp$ret$5;
          $l$block_0: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.synchronized' call
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            access$_get_cacheLock__y7hpng(asyncTypefaceCache);
            var key_0 = new Key(font, platformFontLoader.q4u());
            var tmp0_elvis_lhs_0 = access$_get_resultCache__u960s4(asyncTypefaceCache).l2(key_0);
            var priorResult_0 = tmp0_elvis_lhs_0 == null ? access$_get_permanentCache__bpfryv(asyncTypefaceCache).l2(key_0) : tmp0_elvis_lhs_0;
            if (!(priorResult_0 == null)) {
              tmp$ret$5 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult_0.r4u_1);
              break $l$block_0;
            }
            // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>' call
            // Inline function 'kotlin.runCatching' call
            var tmp_2;
            try {
              // Inline function 'androidx.compose.ui.text.font.firstImmediatelyAvailable.<anonymous>.<anonymous>' call
              // Inline function 'kotlin.Companion.success' call
              var value = platformFontLoader.m4y(font);
              tmp_2 = _Result___init__impl__xyqfz8(value);
            } catch ($p) {
              var tmp_3;
              if ($p instanceof Error) {
                var e = $p;
                // Inline function 'kotlin.Companion.failure' call
                tmp_3 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_2 = tmp_3;
            }
            // Inline function 'kotlin.Result.getOrNull' call
            var this_0 = tmp_2;
            var tmp_4;
            if (_Result___get_isFailure__impl__jpiriv(this_0)) {
              tmp_4 = null;
            } else {
              var tmp_5 = _Result___get_value__impl__bjfvqg(this_0);
              tmp_4 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
            }
            // Inline function 'kotlin.also' call
            var this_1 = tmp_4;
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking.<anonymous>' call
            asyncTypefaceCache.n4v(font, platformFontLoader, this_1);
            tmp$ret$5 = this_1;
          }
          var result_0 = tmp$ret$5;
          if (!(result_0 == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.n4t_1, result_0, font, typefaceRequest.l4t_1, typefaceRequest.m4t_1));
          }
        } else if (tmp1_subject === Companion_getInstance_19().b4t_1) {
          var cacheResult = asyncTypefaceCache.o4v(font, platformFontLoader);
          if (cacheResult == null) {
            if (asyncFontsToLoad == null) {
              asyncFontsToLoad = mutableListOf([font]);
            } else {
              asyncFontsToLoad.e(font);
            }
          } else if (_AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca(cacheResult.r4u_1)) {
            continue $l$loop;
          } else if (!(_AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.r4u_1) == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.n4t_1, _AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.r4u_1), font, typefaceRequest.l4t_1, typefaceRequest.m4t_1));
          }
        } else
          throw IllegalStateException_init_$Create$('Unknown font type ' + toString(font));
      }
       while (inductionVariable <= last);
    var fallbackTypeface = createDefaultTypeface(typefaceRequest);
    return to(asyncFontsToLoad, fallbackTypeface);
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.v();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.v();
    }, function (receiver, value) {
      return _set_value__lx0xdg(receiver, value);
    });
  }
  function _FontLoadingStrategy___init__impl__if1sp3(value) {
    return value;
  }
  function _FontLoadingStrategy___get_value__impl__ggsl83($this) {
    return $this;
  }
  function FontLoadingStrategy__toString_impl_fx0z8f($this) {
    return $this === Companion_getInstance_19().z4s_1 ? 'Blocking' : $this === Companion_getInstance_19().a4t_1 ? 'Optional' : $this === Companion_getInstance_19().b4t_1 ? 'Async' : 'Invalid(value=' + _FontLoadingStrategy___get_value__impl__ggsl83($this) + ')';
  }
  function Companion_6() {
    Companion_instance_7 = this;
    this.z4s_1 = _FontLoadingStrategy___init__impl__if1sp3(0);
    this.a4t_1 = _FontLoadingStrategy___init__impl__if1sp3(1);
    this.b4t_1 = _FontLoadingStrategy___init__impl__if1sp3(2);
  }
  var Companion_instance_7;
  function Companion_getInstance_19() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function FontMatcher() {
  }
  protoOf(FontMatcher).l4y = function (fontList, fontWeight, fontStyle) {
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(fontList.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = fontList.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = fontList.p(index);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        if (item.o3p().equals(fontWeight) && item.x4s() === fontStyle) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.e(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!target.q()) {
      return target;
    }
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    // Inline function 'kotlin.contracts.contract' call
    var target_0 = ArrayList_init_$Create$(fontList.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = fontList.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = fontList.p(index_0);
        // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        if (item_0.x4s() === fontStyle) {
          // Inline function 'kotlin.collections.plusAssign' call
          target_0.e(item_0);
        }
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp;
    if (target_0.q()) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
      tmp = fontList;
    } else {
      tmp = target_0;
    }
    var fontsToSearch = tmp;
    var tmp_0;
    if (fontWeight.n4y(Companion_getInstance_22().o4o_1) < 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove = null;
      var bestWeightBelow = null;
      var inductionVariable_1 = 0;
      var last_1 = fontsToSearch.n() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        $l$loop_1: do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var font = fontsToSearch.p(index_1);
          var possibleWeight = font.o3p();
          if (!(null == null) && possibleWeight.n4y(null) < 0) {
            continue $l$loop_1;
          }
          if (!(null == null) && possibleWeight.n4y(null) > 0) {
            continue $l$loop_1;
          }
          if (possibleWeight.n4y(fontWeight) < 0) {
            if (bestWeightBelow == null || possibleWeight.n4y(bestWeightBelow) > 0) {
              bestWeightBelow = possibleWeight;
            }
          } else if (possibleWeight.n4y(fontWeight) > 0) {
            if (bestWeightAbove == null || possibleWeight.n4y(bestWeightAbove) < 0) {
              bestWeightAbove = possibleWeight;
            }
          } else {
            bestWeightAbove = possibleWeight;
            bestWeightBelow = possibleWeight;
            break $l$loop_1;
          }
        }
         while (inductionVariable_1 <= last_1);
      var tmp_1;
      if (true) {
        var tmp1_elvis_lhs = bestWeightBelow;
        tmp_1 = tmp1_elvis_lhs == null ? bestWeightAbove : tmp1_elvis_lhs;
      } else {
        var tmp2_elvis_lhs = bestWeightAbove;
        tmp_1 = tmp2_elvis_lhs == null ? bestWeightBelow : tmp2_elvis_lhs;
      }
      var bestWeight = tmp_1;
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_1 = ArrayList_init_$Create$(fontsToSearch.n());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_2 = 0;
      var last_2 = fontsToSearch.n() - 1 | 0;
      if (inductionVariable_2 <= last_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_1 = fontsToSearch.p(index_2);
          // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_1.o3p().equals(bestWeight)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_1.e(item_1);
          }
        }
         while (inductionVariable_2 <= last_2);
      tmp_0 = target_1;
    } else if (fontWeight.n4y(Companion_getInstance_22().p4o_1) > 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove_0 = null;
      var bestWeightBelow_0 = null;
      var inductionVariable_3 = 0;
      var last_3 = fontsToSearch.n() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        $l$loop_4: do {
          var index_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var font_0 = fontsToSearch.p(index_3);
          var possibleWeight_0 = font_0.o3p();
          if (!(null == null) && possibleWeight_0.n4y(null) < 0) {
            continue $l$loop_4;
          }
          if (!(null == null) && possibleWeight_0.n4y(null) > 0) {
            continue $l$loop_4;
          }
          if (possibleWeight_0.n4y(fontWeight) < 0) {
            if (bestWeightBelow_0 == null || possibleWeight_0.n4y(bestWeightBelow_0) > 0) {
              bestWeightBelow_0 = possibleWeight_0;
            }
          } else if (possibleWeight_0.n4y(fontWeight) > 0) {
            if (bestWeightAbove_0 == null || possibleWeight_0.n4y(bestWeightAbove_0) < 0) {
              bestWeightAbove_0 = possibleWeight_0;
            }
          } else {
            bestWeightAbove_0 = possibleWeight_0;
            bestWeightBelow_0 = possibleWeight_0;
            break $l$loop_4;
          }
        }
         while (inductionVariable_3 <= last_3);
      var tmp_2;
      if (false) {
        var tmp1_elvis_lhs_0 = bestWeightBelow_0;
        tmp_2 = tmp1_elvis_lhs_0 == null ? bestWeightAbove_0 : tmp1_elvis_lhs_0;
      } else {
        var tmp2_elvis_lhs_0 = bestWeightAbove_0;
        tmp_2 = tmp2_elvis_lhs_0 == null ? bestWeightBelow_0 : tmp2_elvis_lhs_0;
      }
      var bestWeight_0 = tmp_2;
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_2 = ArrayList_init_$Create$(fontsToSearch.n());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_4 = 0;
      var last_4 = fontsToSearch.n() - 1 | 0;
      if (inductionVariable_4 <= last_4)
        do {
          var index_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var item_2 = fontsToSearch.p(index_4);
          // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_2.o3p().equals(bestWeight_0)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_2.e(item_2);
          }
        }
         while (inductionVariable_4 <= last_4);
      tmp_0 = target_2;
    } else {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var maxSearchRange = Companion_getInstance_22().p4o_1;
      var bestWeightAbove_1 = null;
      var bestWeightBelow_1 = null;
      var inductionVariable_5 = 0;
      var last_5 = fontsToSearch.n() - 1 | 0;
      if (inductionVariable_5 <= last_5)
        $l$loop_7: do {
          var index_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var font_1 = fontsToSearch.p(index_5);
          var possibleWeight_1 = font_1.o3p();
          if (!(null == null) && possibleWeight_1.n4y(null) < 0) {
            continue $l$loop_7;
          }
          if (!(maxSearchRange == null) && possibleWeight_1.n4y(maxSearchRange) > 0) {
            continue $l$loop_7;
          }
          if (possibleWeight_1.n4y(fontWeight) < 0) {
            if (bestWeightBelow_1 == null || possibleWeight_1.n4y(bestWeightBelow_1) > 0) {
              bestWeightBelow_1 = possibleWeight_1;
            }
          } else if (possibleWeight_1.n4y(fontWeight) > 0) {
            if (bestWeightAbove_1 == null || possibleWeight_1.n4y(bestWeightAbove_1) < 0) {
              bestWeightAbove_1 = possibleWeight_1;
            }
          } else {
            bestWeightAbove_1 = possibleWeight_1;
            bestWeightBelow_1 = possibleWeight_1;
            break $l$loop_7;
          }
        }
         while (inductionVariable_5 <= last_5);
      var tmp_3;
      if (false) {
        var tmp1_elvis_lhs_1 = bestWeightBelow_1;
        tmp_3 = tmp1_elvis_lhs_1 == null ? bestWeightAbove_1 : tmp1_elvis_lhs_1;
      } else {
        var tmp2_elvis_lhs_1 = bestWeightAbove_1;
        tmp_3 = tmp2_elvis_lhs_1 == null ? bestWeightBelow_1 : tmp2_elvis_lhs_1;
      }
      var bestWeight_1 = tmp_3;
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      // Inline function 'kotlin.contracts.contract' call
      var target_3 = ArrayList_init_$Create$(fontsToSearch.n());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_6 = 0;
      var last_6 = fontsToSearch.n() - 1 | 0;
      if (inductionVariable_6 <= last_6)
        do {
          var index_6 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          var item_3 = fontsToSearch.p(index_6);
          // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
          // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
          if (item_3.o3p().equals(bestWeight_1)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_3.e(item_3);
          }
        }
         while (inductionVariable_6 <= last_6);
      // Inline function 'kotlin.collections.ifEmpty' call
      var tmp_4;
      if (target_3.q()) {
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.matchFont.<anonymous>' call
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
        var minSearchRange = Companion_getInstance_22().p4o_1;
        var bestWeightAbove_2 = null;
        var bestWeightBelow_2 = null;
        var inductionVariable_7 = 0;
        var last_7 = fontsToSearch.n() - 1 | 0;
        if (inductionVariable_7 <= last_7)
          $l$loop_10: do {
            var index_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            var font_2 = fontsToSearch.p(index_7);
            var possibleWeight_2 = font_2.o3p();
            if (!(minSearchRange == null) && possibleWeight_2.n4y(minSearchRange) < 0) {
              continue $l$loop_10;
            }
            if (!(null == null) && possibleWeight_2.n4y(null) > 0) {
              continue $l$loop_10;
            }
            if (possibleWeight_2.n4y(fontWeight) < 0) {
              if (bestWeightBelow_2 == null || possibleWeight_2.n4y(bestWeightBelow_2) > 0) {
                bestWeightBelow_2 = possibleWeight_2;
              }
            } else if (possibleWeight_2.n4y(fontWeight) > 0) {
              if (bestWeightAbove_2 == null || possibleWeight_2.n4y(bestWeightAbove_2) < 0) {
                bestWeightAbove_2 = possibleWeight_2;
              }
            } else {
              bestWeightAbove_2 = possibleWeight_2;
              bestWeightBelow_2 = possibleWeight_2;
              break $l$loop_10;
            }
          }
           while (inductionVariable_7 <= last_7);
        var tmp_5;
        if (false) {
          var tmp1_elvis_lhs_2 = bestWeightBelow_2;
          tmp_5 = tmp1_elvis_lhs_2 == null ? bestWeightAbove_2 : tmp1_elvis_lhs_2;
        } else {
          var tmp2_elvis_lhs_2 = bestWeightAbove_2;
          tmp_5 = tmp2_elvis_lhs_2 == null ? bestWeightBelow_2 : tmp2_elvis_lhs_2;
        }
        var bestWeight_2 = tmp_5;
        // Inline function 'androidx.compose.ui.util.fastFilter' call
        // Inline function 'kotlin.contracts.contract' call
        var target_4 = ArrayList_init_$Create$(fontsToSearch.n());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable_8 = 0;
        var last_8 = fontsToSearch.n() - 1 | 0;
        if (inductionVariable_8 <= last_8)
          do {
            var index_8 = inductionVariable_8;
            inductionVariable_8 = inductionVariable_8 + 1 | 0;
            var item_4 = fontsToSearch.p(index_8);
            // Inline function 'androidx.compose.ui.util.fastFilter.<anonymous>' call
            // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight.<anonymous>' call
            if (item_4.o3p().equals(bestWeight_2)) {
              // Inline function 'kotlin.collections.plusAssign' call
              target_4.e(item_4);
            }
          }
           while (inductionVariable_8 <= last_8);
        tmp_4 = target_4;
      } else {
        tmp_4 = target_3;
      }
      tmp_0 = tmp_4;
    }
    var result = tmp_0;
    return result;
  };
  function _FontStyle___init__impl__jcnduf(value) {
    return value;
  }
  function FontStyle__toString_impl_thncxr($this) {
    return $this === Companion_getInstance_20().e4p_1 ? 'Normal' : $this === Companion_getInstance_20().f4p_1 ? 'Italic' : 'Invalid';
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.e4p_1 = _FontStyle___init__impl__jcnduf(0);
    this.f4p_1 = _FontStyle___init__impl__jcnduf(1);
  }
  var Companion_instance_8;
  function Companion_getInstance_20() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function FontStyle__hashCode_impl_7qhg4w($this) {
    return $this;
  }
  function FontStyle__equals_impl_2zal3g($this, other) {
    if (!(other instanceof FontStyle))
      return false;
    if (!($this === (other instanceof FontStyle ? other.g4n_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontStyle(value) {
    Companion_getInstance_20();
    this.g4n_1 = value;
  }
  protoOf(FontStyle).toString = function () {
    return FontStyle__toString_impl_thncxr(this.g4n_1);
  };
  protoOf(FontStyle).hashCode = function () {
    return FontStyle__hashCode_impl_7qhg4w(this.g4n_1);
  };
  protoOf(FontStyle).equals = function (other) {
    return FontStyle__equals_impl_2zal3g(this.g4n_1, other);
  };
  function _FontSynthesis___init__impl__n397bg(value) {
    return value;
  }
  function FontSynthesis__toString_impl_gunvr0($this) {
    return $this === Companion_getInstance_21().g4p_1 ? 'None' : $this === Companion_getInstance_21().h4p_1 ? 'All' : $this === Companion_getInstance_21().i4p_1 ? 'Weight' : $this === Companion_getInstance_21().j4p_1 ? 'Style' : 'Invalid';
  }
  function Companion_8() {
    Companion_instance_9 = this;
    this.g4p_1 = _FontSynthesis___init__impl__n397bg(0);
    this.h4p_1 = _FontSynthesis___init__impl__n397bg(1);
    this.i4p_1 = _FontSynthesis___init__impl__n397bg(2);
    this.j4p_1 = _FontSynthesis___init__impl__n397bg(3);
  }
  var Companion_instance_9;
  function Companion_getInstance_21() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function FontSynthesis__hashCode_impl_4wi11v($this) {
    return $this;
  }
  function FontSynthesis__equals_impl_zgu9mf($this, other) {
    if (!(other instanceof FontSynthesis))
      return false;
    if (!($this === (other instanceof FontSynthesis ? other.h4n_1 : THROW_CCE())))
      return false;
    return true;
  }
  function FontSynthesis(value) {
    Companion_getInstance_21();
    this.h4n_1 = value;
  }
  protoOf(FontSynthesis).toString = function () {
    return FontSynthesis__toString_impl_gunvr0(this.h4n_1);
  };
  protoOf(FontSynthesis).hashCode = function () {
    return FontSynthesis__hashCode_impl_4wi11v(this.h4n_1);
  };
  protoOf(FontSynthesis).equals = function (other) {
    return FontSynthesis__equals_impl_zgu9mf(this.h4n_1, other);
  };
  function Companion_9() {
    Companion_instance_10 = this;
    this.l4o_1 = new FontWeight(100);
    this.m4o_1 = new FontWeight(200);
    this.n4o_1 = new FontWeight(300);
    this.o4o_1 = new FontWeight(400);
    this.p4o_1 = new FontWeight(500);
    this.q4o_1 = new FontWeight(600);
    this.r4o_1 = new FontWeight(700);
    this.s4o_1 = new FontWeight(800);
    this.t4o_1 = new FontWeight(900);
    this.u4o_1 = this.l4o_1;
    this.v4o_1 = this.m4o_1;
    this.w4o_1 = this.n4o_1;
    this.x4o_1 = this.o4o_1;
    this.y4o_1 = this.p4o_1;
    this.z4o_1 = this.q4o_1;
    this.a4p_1 = this.r4o_1;
    this.b4p_1 = this.s4o_1;
    this.c4p_1 = this.t4o_1;
    this.d4p_1 = listOf([this.l4o_1, this.m4o_1, this.n4o_1, this.o4o_1, this.p4o_1, this.q4o_1, this.r4o_1, this.s4o_1, this.t4o_1]);
  }
  var Companion_instance_10;
  function Companion_getInstance_22() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function FontWeight(weight) {
    Companion_getInstance_22();
    this.s4n_1 = weight;
    var containsArg = this.s4n_1;
    // Inline function 'kotlin.require' call
    if (!(1 <= containsArg ? containsArg <= 1000 : false)) {
      // Inline function 'androidx.compose.ui.text.font.FontWeight.<anonymous>' call
      var message = 'Font weight can be in range [1, 1000]. Current value: ' + this.s4n_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(FontWeight).n4y = function (other) {
    return compareTo(this.s4n_1, other.s4n_1);
  };
  protoOf(FontWeight).d = function (other) {
    return this.n4y(other instanceof FontWeight ? other : THROW_CCE());
  };
  protoOf(FontWeight).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontWeight))
      return false;
    if (!(this.s4n_1 === other.s4n_1))
      return false;
    return true;
  };
  protoOf(FontWeight).hashCode = function () {
    return this.s4n_1;
  };
  protoOf(FontWeight).toString = function () {
    return 'FontWeight(weight=' + this.s4n_1 + ')';
  };
  function TextInputService(platformTextInputService) {
    this.o4y_1 = platformTextInputService;
    this.p4y_1 = new AtomicReference(null);
  }
  function Companion_10() {
  }
  protoOf(Companion_10).x1r = function () {
    return get_platformLocaleDelegate().x1r().p(0);
  };
  var Companion_instance_11;
  function Companion_getInstance_23() {
    return Companion_instance_11;
  }
  function Locale_init_$Init$(languageTag, $this) {
    Locale.call($this, get_platformLocaleDelegate().q4y(languageTag));
    return $this;
  }
  function Locale_init_$Create$(languageTag) {
    return Locale_init_$Init$(languageTag, objectCreate(protoOf(Locale)));
  }
  function Locale(platformLocale) {
    this.v4n_1 = platformLocale;
  }
  protoOf(Locale).w4n = function () {
    return getLanguageTag(this.v4n_1);
  };
  protoOf(Locale).equals = function (other) {
    if (other == null)
      return false;
    if (!(other instanceof Locale))
      return false;
    if (this === other)
      return true;
    return this.w4n() === other.w4n();
  };
  protoOf(Locale).hashCode = function () {
    return getStringHashCode(this.w4n());
  };
  protoOf(Locale).toString = function () {
    return this.w4n();
  };
  function Companion_11() {
    Companion_instance_12 = this;
    this.t4p_1 = new LocaleList(emptyList());
  }
  protoOf(Companion_11).x1r = function () {
    return get_platformLocaleDelegate().x1r();
  };
  var Companion_instance_12;
  function Companion_getInstance_24() {
    if (Companion_instance_12 == null)
      new Companion_11();
    return Companion_instance_12;
  }
  function LocaleList(localeList) {
    Companion_getInstance_24();
    this.t4n_1 = localeList;
    this.u4n_1 = this.t4n_1.n();
  }
  protoOf(LocaleList).p = function (i) {
    return this.t4n_1.p(i);
  };
  protoOf(LocaleList).n = function () {
    return this.u4n_1;
  };
  protoOf(LocaleList).r4y = function (element) {
    return this.t4n_1.m(element);
  };
  protoOf(LocaleList).m = function (element) {
    if (!(element instanceof Locale))
      return false;
    return this.r4y(element instanceof Locale ? element : THROW_CCE());
  };
  protoOf(LocaleList).q = function () {
    return this.t4n_1.q();
  };
  protoOf(LocaleList).j = function () {
    return this.t4n_1.j();
  };
  protoOf(LocaleList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LocaleList))
      return false;
    if (!equals(this.t4n_1, other.t4n_1))
      return false;
    return true;
  };
  protoOf(LocaleList).hashCode = function () {
    return hashCode(this.t4n_1);
  };
  protoOf(LocaleList).toString = function () {
    return 'LocaleList(localeList=' + toString(this.t4n_1) + ')';
  };
  function get_platformLocaleDelegate() {
    _init_properties_PlatformLocale_kt__d5ixzh();
    return platformLocaleDelegate;
  }
  var platformLocaleDelegate;
  var properties_initialized_PlatformLocale_kt_ya8ii9;
  function _init_properties_PlatformLocale_kt__d5ixzh() {
    if (!properties_initialized_PlatformLocale_kt_ya8ii9) {
      properties_initialized_PlatformLocale_kt_ya8ii9 = true;
      platformLocaleDelegate = createPlatformLocaleDelegate();
    }
  }
  function get_FontCacheManagementDispatcher() {
    _init_properties_Dispatcher_kt__c4qz95();
    return FontCacheManagementDispatcher;
  }
  var FontCacheManagementDispatcher;
  var properties_initialized_Dispatcher_kt_c7cauv;
  function _init_properties_Dispatcher_kt__c4qz95() {
    if (!properties_initialized_Dispatcher_kt_c7cauv) {
      properties_initialized_Dispatcher_kt_c7cauv = true;
      FontCacheManagementDispatcher = Dispatchers_getInstance().c17();
    }
  }
  function _BaselineShift___init__impl__scj05g(multiplier) {
    return multiplier;
  }
  function _BaselineShift___get_multiplier__impl__qhmjek($this) {
    return $this;
  }
  function Companion_12() {
    Companion_instance_13 = this;
    this.p4p_1 = _BaselineShift___init__impl__scj05g(0.5);
    this.q4p_1 = _BaselineShift___init__impl__scj05g(-0.5);
    this.r4p_1 = _BaselineShift___init__impl__scj05g(0.0);
  }
  var Companion_instance_13;
  function Companion_getInstance_25() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function BaselineShift__toString_impl_x98gcc($this) {
    return 'BaselineShift(multiplier=' + $this + ')';
  }
  function BaselineShift__hashCode_impl_g0potx($this) {
    return getNumberHashCode($this);
  }
  function BaselineShift__equals_impl_37wrjj($this, other) {
    if (!(other instanceof BaselineShift))
      return false;
    var tmp0_other_with_cast = other instanceof BaselineShift ? other.i4n_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function BaselineShift(multiplier) {
    Companion_getInstance_25();
    this.i4n_1 = multiplier;
  }
  protoOf(BaselineShift).toString = function () {
    return BaselineShift__toString_impl_x98gcc(this.i4n_1);
  };
  protoOf(BaselineShift).hashCode = function () {
    return BaselineShift__hashCode_impl_g0potx(this.i4n_1);
  };
  protoOf(BaselineShift).equals = function (other) {
    return BaselineShift__equals_impl_37wrjj(this.i4n_1, other);
  };
  function _Hyphens___init__impl__m2cvg8(value) {
    return value;
  }
  function Companion_13() {
    Companion_instance_14 = this;
    this.t4l_1 = _Hyphens___init__impl__m2cvg8(1);
    this.u4l_1 = _Hyphens___init__impl__m2cvg8(2);
    this.v4l_1 = _Hyphens___init__impl__m2cvg8(-2147483648);
  }
  var Companion_instance_14;
  function Companion_getInstance_26() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function Hyphens__toString_impl_ck1wg0($this) {
    return $this === Companion_getInstance_26().t4l_1 ? 'Hyphens.None' : $this === Companion_getInstance_26().u4l_1 ? 'Hyphens.Auto' : $this === Companion_getInstance_26().v4l_1 ? 'Hyphens.Unspecified' : 'Invalid';
  }
  function Hyphens__hashCode_impl_yb7t8v($this) {
    return $this;
  }
  function Hyphens__equals_impl_oqoi4t($this, other) {
    if (!(other instanceof Hyphens))
      return false;
    if (!($this === (other instanceof Hyphens ? other.s4y_1 : THROW_CCE())))
      return false;
    return true;
  }
  function Hyphens(value) {
    Companion_getInstance_26();
    this.s4y_1 = value;
  }
  protoOf(Hyphens).toString = function () {
    return Hyphens__toString_impl_ck1wg0(this.s4y_1);
  };
  protoOf(Hyphens).hashCode = function () {
    return Hyphens__hashCode_impl_yb7t8v(this.s4y_1);
  };
  protoOf(Hyphens).equals = function (other) {
    return Hyphens__equals_impl_oqoi4t(this.s4y_1, other);
  };
  function _Trim___init__impl__tcc1lr(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function Trim__toString_impl_hxcm0x($this) {
    var tmp0_subject = _get_value__a43j40($this);
    return tmp0_subject === _get_value__a43j40(Companion_getInstance_27().v4y_1) ? 'LineHeightStyle.Trim.FirstLineTop' : tmp0_subject === _get_value__a43j40(Companion_getInstance_27().w4y_1) ? 'LineHeightStyle.Trim.LastLineBottom' : tmp0_subject === _get_value__a43j40(Companion_getInstance_27().x4y_1) ? 'LineHeightStyle.Trim.Both' : tmp0_subject === _get_value__a43j40(Companion_getInstance_27().y4y_1) ? 'LineHeightStyle.Trim.None' : 'Invalid';
  }
  function Companion_14() {
    Companion_instance_15 = this;
    this.t4y_1 = 1;
    this.u4y_1 = 16;
    this.v4y_1 = _Trim___init__impl__tcc1lr(1);
    this.w4y_1 = _Trim___init__impl__tcc1lr(16);
    this.x4y_1 = _Trim___init__impl__tcc1lr(17);
    this.y4y_1 = _Trim___init__impl__tcc1lr(0);
  }
  var Companion_instance_15;
  function Companion_getInstance_27() {
    if (Companion_instance_15 == null)
      new Companion_14();
    return Companion_instance_15;
  }
  function Trim__isTrimFirstLineTop_impl_tqdsaa($this) {
    return (_get_value__a43j40($this) & 1) > 0;
  }
  function Trim__isTrimLastLineBottom_impl_8k6x3e($this) {
    return (_get_value__a43j40($this) & 16) > 0;
  }
  function Trim__hashCode_impl_vclj5c($this) {
    return $this;
  }
  function _Alignment___init__impl__it107q(topRatio) {
    var tmp;
    var containsArg = _Alignment___get_topRatio__impl__gg7tir(topRatio);
    if (0.0 <= containsArg ? containsArg <= 1.0 : false) {
      tmp = true;
    } else {
      tmp = _Alignment___get_topRatio__impl__gg7tir(topRatio) === -1.0;
    }
    // Inline function 'kotlin.check' call
    if (!tmp) {
      // Inline function 'androidx.compose.ui.text.style.Alignment.<anonymous>' call
      var message = 'topRatio should be in [0..1] range or -1';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return topRatio;
  }
  function _Alignment___get_topRatio__impl__gg7tir($this) {
    return $this;
  }
  function Alignment__toString_impl_on6yhu($this) {
    var tmp0_subject = _Alignment___get_topRatio__impl__gg7tir($this);
    return tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_28().z4y_1) ? 'LineHeightStyle.Alignment.Top' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_28().a4z_1) ? 'LineHeightStyle.Alignment.Center' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_28().b4z_1) ? 'LineHeightStyle.Alignment.Proportional' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_28().c4z_1) ? 'LineHeightStyle.Alignment.Bottom' : 'LineHeightStyle.Alignment(topPercentage = ' + _Alignment___get_topRatio__impl__gg7tir($this) + ')';
  }
  function Companion_15() {
    Companion_instance_16 = this;
    this.z4y_1 = _Alignment___init__impl__it107q(0.0);
    this.a4z_1 = _Alignment___init__impl__it107q(0.5);
    this.b4z_1 = _Alignment___init__impl__it107q(-1.0);
    this.c4z_1 = _Alignment___init__impl__it107q(1.0);
  }
  var Companion_instance_16;
  function Companion_getInstance_28() {
    if (Companion_instance_16 == null)
      new Companion_15();
    return Companion_instance_16;
  }
  function Alignment__hashCode_impl_omr6of($this) {
    return getNumberHashCode($this);
  }
  function Companion_16() {
    Companion_instance_17 = this;
    this.d4z_1 = new LineHeightStyle(Companion_getInstance_28().b4z_1, Companion_getInstance_27().x4y_1);
  }
  var Companion_instance_17;
  function Companion_getInstance_29() {
    if (Companion_instance_17 == null)
      new Companion_16();
    return Companion_instance_17;
  }
  function LineHeightStyle(alignment, trim) {
    Companion_getInstance_29();
    this.e4z_1 = alignment;
    this.f4z_1 = trim;
  }
  protoOf(LineHeightStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineHeightStyle))
      return false;
    if (!equals(this.e4z_1, other.e4z_1))
      return false;
    if (!(this.f4z_1 === other.f4z_1))
      return false;
    return true;
  };
  protoOf(LineHeightStyle).hashCode = function () {
    var result = Alignment__hashCode_impl_omr6of(this.e4z_1);
    result = imul(31, result) + Trim__hashCode_impl_vclj5c(this.f4z_1) | 0;
    return result;
  };
  protoOf(LineHeightStyle).toString = function () {
    return 'LineHeightStyle(' + ('alignment=' + Alignment__toString_impl_on6yhu(this.e4z_1) + ', ') + ('trim=' + Trim__toString_impl_hxcm0x(this.f4z_1)) + ')';
  };
  var ResolvedTextDirection_Ltr_instance;
  var ResolvedTextDirection_Rtl_instance;
  var ResolvedTextDirection_entriesInitialized;
  function ResolvedTextDirection_initEntries() {
    if (ResolvedTextDirection_entriesInitialized)
      return Unit_instance;
    ResolvedTextDirection_entriesInitialized = true;
    ResolvedTextDirection_Ltr_instance = new ResolvedTextDirection('Ltr', 0);
    ResolvedTextDirection_Rtl_instance = new ResolvedTextDirection('Rtl', 1);
  }
  function ResolvedTextDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ResolvedTextDirection_Ltr_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Ltr_instance;
  }
  function ResolvedTextDirection_Rtl_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Rtl_instance;
  }
  function _TextAlign___init__impl__99wz4v(value) {
    return value;
  }
  function TextAlign__toString_impl_6ha6d3($this) {
    return $this === Companion_getInstance_30().i4l_1 ? 'Left' : $this === Companion_getInstance_30().j4l_1 ? 'Right' : $this === Companion_getInstance_30().k4l_1 ? 'Center' : $this === Companion_getInstance_30().l4l_1 ? 'Justify' : $this === Companion_getInstance_30().m4l_1 ? 'Start' : $this === Companion_getInstance_30().n4l_1 ? 'End' : $this === Companion_getInstance_30().o4l_1 ? 'Unspecified' : 'Invalid';
  }
  function Companion_17() {
    Companion_instance_18 = this;
    this.i4l_1 = _TextAlign___init__impl__99wz4v(1);
    this.j4l_1 = _TextAlign___init__impl__99wz4v(2);
    this.k4l_1 = _TextAlign___init__impl__99wz4v(3);
    this.l4l_1 = _TextAlign___init__impl__99wz4v(4);
    this.m4l_1 = _TextAlign___init__impl__99wz4v(5);
    this.n4l_1 = _TextAlign___init__impl__99wz4v(6);
    this.o4l_1 = _TextAlign___init__impl__99wz4v(-2147483648);
  }
  var Companion_instance_18;
  function Companion_getInstance_30() {
    if (Companion_instance_18 == null)
      new Companion_17();
    return Companion_instance_18;
  }
  function TextAlign__hashCode_impl_s8g35y($this) {
    return $this;
  }
  function TextAlign__equals_impl_latoh6($this, other) {
    if (!(other instanceof TextAlign))
      return false;
    if (!($this === (other instanceof TextAlign ? other.o4m_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextAlign(value) {
    Companion_getInstance_30();
    this.o4m_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return TextAlign__toString_impl_6ha6d3(this.o4m_1);
  };
  protoOf(TextAlign).hashCode = function () {
    return TextAlign__hashCode_impl_s8g35y(this.o4m_1);
  };
  protoOf(TextAlign).equals = function (other) {
    return TextAlign__equals_impl_latoh6(this.o4m_1, other);
  };
  function Companion_18() {
    Companion_instance_19 = this;
    this.u4p_1 = new TextDecoration(0);
    this.v4p_1 = new TextDecoration(1);
    this.w4p_1 = new TextDecoration(2);
  }
  var Companion_instance_19;
  function Companion_getInstance_31() {
    if (Companion_instance_19 == null)
      new Companion_18();
    return Companion_instance_19;
  }
  function TextDecoration(mask) {
    Companion_getInstance_31();
    this.n4n_1 = mask;
  }
  protoOf(TextDecoration).g4z = function (other) {
    return (this.n4n_1 | other.n4n_1) === this.n4n_1;
  };
  protoOf(TextDecoration).toString = function () {
    if (this.n4n_1 === 0) {
      return 'TextDecoration.None';
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var values = ArrayList_init_$Create$_0();
    if (!((this.n4n_1 & Companion_getInstance_31().v4p_1.n4n_1) === 0)) {
      values.e('Underline');
    }
    if (!((this.n4n_1 & Companion_getInstance_31().w4p_1.n4n_1) === 0)) {
      values.e('LineThrough');
    }
    if (values.n() === 1) {
      return 'TextDecoration.' + values.p(0);
    }
    return 'TextDecoration[' + fastJoinToString(values, ', ') + ']';
  };
  protoOf(TextDecoration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextDecoration))
      return false;
    if (!(this.n4n_1 === other.n4n_1))
      return false;
    return true;
  };
  protoOf(TextDecoration).hashCode = function () {
    return this.n4n_1;
  };
  function _TextDirection___init__impl__lh8lzt(value) {
    return value;
  }
  function TextDirection__toString_impl_x3uh9t($this) {
    return $this === Companion_getInstance_32().w4k_1 ? 'Ltr' : $this === Companion_getInstance_32().x4k_1 ? 'Rtl' : $this === Companion_getInstance_32().y4k_1 ? 'Content' : $this === Companion_getInstance_32().z4k_1 ? 'ContentOrLtr' : $this === Companion_getInstance_32().a4l_1 ? 'ContentOrRtl' : $this === Companion_getInstance_32().b4l_1 ? 'Unspecified' : 'Invalid';
  }
  function Companion_19() {
    Companion_instance_20 = this;
    this.w4k_1 = _TextDirection___init__impl__lh8lzt(1);
    this.x4k_1 = _TextDirection___init__impl__lh8lzt(2);
    this.y4k_1 = _TextDirection___init__impl__lh8lzt(3);
    this.z4k_1 = _TextDirection___init__impl__lh8lzt(4);
    this.a4l_1 = _TextDirection___init__impl__lh8lzt(5);
    this.b4l_1 = _TextDirection___init__impl__lh8lzt(-2147483648);
  }
  var Companion_instance_20;
  function Companion_getInstance_32() {
    if (Companion_instance_20 == null)
      new Companion_19();
    return Companion_instance_20;
  }
  function TextDirection__hashCode_impl_g63nwg($this) {
    return $this;
  }
  function TextDirection__equals_impl_3fvxt0($this, other) {
    if (!(other instanceof TextDirection))
      return false;
    if (!($this === (other instanceof TextDirection ? other.p4m_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextDirection(value) {
    Companion_getInstance_32();
    this.p4m_1 = value;
  }
  protoOf(TextDirection).toString = function () {
    return TextDirection__toString_impl_x3uh9t(this.p4m_1);
  };
  protoOf(TextDirection).hashCode = function () {
    return TextDirection__hashCode_impl_g63nwg(this.p4m_1);
  };
  protoOf(TextDirection).equals = function (other) {
    return TextDirection__equals_impl_3fvxt0(this.p4m_1, other);
  };
  function Unspecified() {
  }
  protoOf(Unspecified).x4c = function () {
    return Companion_getInstance().j45_1;
  };
  protoOf(Unspecified).b4o = function () {
    return null;
  };
  protoOf(Unspecified).z3z = function () {
    return NaN;
  };
  var Unspecified_instance;
  function Unspecified_getInstance() {
    return Unspecified_instance;
  }
  function Companion_20() {
  }
  protoOf(Companion_20).z4n = function (color) {
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = new ColorStyle(color);
    } else {
      tmp = Unspecified_instance;
    }
    return tmp;
  };
  protoOf(Companion_20).a4o = function (brush, alpha) {
    var tmp;
    if (brush == null) {
      tmp = Unspecified_instance;
    } else {
      if (brush instanceof SolidColor) {
        tmp = this.z4n(modulate(brush.h4z_1, alpha));
      } else {
        if (brush instanceof ShaderBrush) {
          tmp = new BrushStyle(brush, alpha);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  var Companion_instance_21;
  function Companion_getInstance_33() {
    return Companion_instance_21;
  }
  function TextForegroundStyle$merge$lambda(this$0) {
    return function () {
      return this$0.z3z();
    };
  }
  function TextForegroundStyle$merge$lambda_0(this$0) {
    return function () {
      return this$0;
    };
  }
  function TextForegroundStyle() {
  }
  function BrushStyle(value, alpha) {
    this.i4z_1 = value;
    this.j4z_1 = alpha;
  }
  protoOf(BrushStyle).z3z = function () {
    return this.j4z_1;
  };
  protoOf(BrushStyle).x4c = function () {
    return Companion_getInstance().j45_1;
  };
  protoOf(BrushStyle).b4o = function () {
    return this.i4z_1;
  };
  protoOf(BrushStyle).toString = function () {
    return 'BrushStyle(value=' + toString(this.i4z_1) + ', alpha=' + this.j4z_1 + ')';
  };
  protoOf(BrushStyle).hashCode = function () {
    var result = hashCode(this.i4z_1);
    result = imul(result, 31) + getNumberHashCode(this.j4z_1) | 0;
    return result;
  };
  protoOf(BrushStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BrushStyle))
      return false;
    var tmp0_other_with_cast = other instanceof BrushStyle ? other : THROW_CCE();
    if (!equals(this.i4z_1, tmp0_other_with_cast.i4z_1))
      return false;
    if (!equals(this.j4z_1, tmp0_other_with_cast.j4z_1))
      return false;
    return true;
  };
  function takeOrElse_0(_this__u8e3s4, block) {
    return isNaN_0(_this__u8e3s4) ? block() : _this__u8e3s4;
  }
  function ColorStyle(value) {
    this.k4z_1 = value;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = this.k4z_1;
    // Inline function 'kotlin.require' call
    if (!!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      // Inline function 'androidx.compose.ui.text.style.ColorStyle.<anonymous>' call
      var message = 'ColorStyle value must be specified, use TextForegroundStyle.Unspecified instead.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(ColorStyle).x4c = function () {
    return this.k4z_1;
  };
  protoOf(ColorStyle).b4o = function () {
    return null;
  };
  protoOf(ColorStyle).z3z = function () {
    return _Color___get_alpha__impl__wcfyv1(this.x4c());
  };
  protoOf(ColorStyle).toString = function () {
    return 'ColorStyle(value=' + Color__toString_impl_hpzmaq(this.k4z_1) + ')';
  };
  protoOf(ColorStyle).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.k4z_1);
  };
  protoOf(ColorStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColorStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ColorStyle ? other : THROW_CCE();
    if (!equals(this.k4z_1, tmp0_other_with_cast.k4z_1))
      return false;
    return true;
  };
  function modulate(_this__u8e3s4, alpha) {
    return isNaN_0(alpha) || alpha >= 1.0 ? _this__u8e3s4 : Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
  }
  function Companion_21() {
    Companion_instance_22 = this;
    this.s4p_1 = new TextGeometricTransform(1.0, 0.0);
  }
  var Companion_instance_22;
  function Companion_getInstance_34() {
    if (Companion_instance_22 == null)
      new Companion_21();
    return Companion_instance_22;
  }
  function TextGeometricTransform(scaleX, skewX) {
    Companion_getInstance_34();
    scaleX = scaleX === VOID ? 1.0 : scaleX;
    skewX = skewX === VOID ? 0.0 : skewX;
    this.o4n_1 = scaleX;
    this.p4n_1 = skewX;
  }
  protoOf(TextGeometricTransform).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextGeometricTransform))
      return false;
    if (!(this.o4n_1 === other.o4n_1))
      return false;
    if (!(this.p4n_1 === other.p4n_1))
      return false;
    return true;
  };
  protoOf(TextGeometricTransform).hashCode = function () {
    var result = getNumberHashCode(this.o4n_1);
    result = imul(31, result) + getNumberHashCode(this.p4n_1) | 0;
    return result;
  };
  protoOf(TextGeometricTransform).toString = function () {
    return 'TextGeometricTransform(scaleX=' + this.o4n_1 + ', skewX=' + this.p4n_1 + ')';
  };
  function Companion_22() {
    Companion_instance_23 = this;
    this.z4l_1 = new TextIndent_0();
  }
  var Companion_instance_23;
  function Companion_getInstance_35() {
    if (Companion_instance_23 == null)
      new Companion_22();
    return Companion_instance_23;
  }
  function TextIndent_0(firstLine, restLine) {
    Companion_getInstance_35();
    firstLine = firstLine === VOID ? get_sp(0) : firstLine;
    restLine = restLine === VOID ? get_sp(0) : restLine;
    this.q4n_1 = firstLine;
    this.r4n_1 = restLine;
  }
  protoOf(TextIndent_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent_0))
      return false;
    if (!equals(this.q4n_1, other.q4n_1))
      return false;
    if (!equals(this.r4n_1, other.r4n_1))
      return false;
    return true;
  };
  protoOf(TextIndent_0).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.q4n_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.r4n_1) | 0;
    return result;
  };
  protoOf(TextIndent_0).toString = function () {
    return 'TextIndent(firstLine=' + TextUnit__toString_impl_51ghw0(this.q4n_1) + ', restLine=' + TextUnit__toString_impl_51ghw0(this.r4n_1) + ')';
  };
  function _TextOverflow___init__impl__obguoe(value) {
    return value;
  }
  function _TextOverflow___get_value__impl__vugm5i($this) {
    return $this;
  }
  function TextOverflow__toString_impl_10s0c2($this) {
    return $this === Companion_getInstance_36().l4z_1 ? 'Clip' : $this === Companion_getInstance_36().m4z_1 ? 'Ellipsis' : $this === Companion_getInstance_36().n4z_1 ? 'Visible' : 'Invalid';
  }
  function Companion_23() {
    Companion_instance_24 = this;
    this.l4z_1 = _TextOverflow___init__impl__obguoe(1);
    this.m4z_1 = _TextOverflow___init__impl__obguoe(2);
    this.n4z_1 = _TextOverflow___init__impl__obguoe(3);
  }
  var Companion_instance_24;
  function Companion_getInstance_36() {
    if (Companion_instance_24 == null)
      new Companion_23();
    return Companion_instance_24;
  }
  function TextOverflow__hashCode_impl_kqdwgt($this) {
    return $this;
  }
  function TextOverflow__equals_impl_jkxdof($this, other) {
    if (!(other instanceof TextOverflow))
      return false;
    if (!($this === (other instanceof TextOverflow ? other.o4z_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextOverflow(value) {
    Companion_getInstance_36();
    this.o4z_1 = value;
  }
  protoOf(TextOverflow).toString = function () {
    return TextOverflow__toString_impl_10s0c2(this.o4z_1);
  };
  protoOf(TextOverflow).hashCode = function () {
    return TextOverflow__hashCode_impl_kqdwgt(this.o4z_1);
  };
  protoOf(TextOverflow).equals = function (other) {
    return TextOverflow__equals_impl_jkxdof(this.o4z_1, other);
  };
  function userPreferredLanguages() {
    return toList(getUserPreferredLanguagesAsArray());
  }
  function getUserPreferredLanguagesAsArray() {
    return window.navigator.languages;
  }
  function strongDirectionType(_this__u8e3s4) {
    switch (CharDirection_getInstance().o3u(_this__u8e3s4)) {
      case 0:
        return Companion_getInstance_37().q4z_1;
      case 1:
      case 13:
        return Companion_getInstance_37().r4z_1;
      default:
        return Companion_getInstance_37().p4z_1;
    }
  }
  function NoCache() {
  }
  protoOf(NoCache).s4z = function (key, loader) {
    return loader(key);
  };
  protoOf(NoCache).t4z = function (key, loader) {
    return this.s4z(!(key == null) ? key : THROW_CCE(), loader);
  };
  function synthesizeTypeface(_this__u8e3s4, typeface, font, requestedWeight, requestedStyle) {
    return typeface;
  }
  function PlatformFont() {
  }
  protoOf(PlatformFont).v4z = function () {
    return '' + getKClassFromExpression(this).xa() + '|' + this.u4z() + '|weight=' + this.o3p().s4n_1 + '|style=' + FontStyle__toString_impl_thncxr(this.x4s());
  };
  function AtomicReference(value) {
    this.w4z_1 = value;
  }
  function checkEvicted($this, now) {
    var expireTime = now.z2($this.x4z_1);
    // Inline function 'kotlin.collections.takeWhile' call
    var this_0 = $this.a50_1.m2();
    var list = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = this_0.j();
    $l$loop: while (_iterator__ex2g4s.k()) {
      var item = _iterator__ex2g4s.l();
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.checkEvicted.<anonymous>' call
      if (!(ensureNotNull($this.a50_1.l2(item)).a1(expireTime) < 0))
        break $l$loop;
      list.e(item);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = list.j();
    while (_iterator__ex2g4s_0.k()) {
      var element = _iterator__ex2g4s_0.l();
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.checkEvicted.<anonymous>' call
      $this.z4z_1.p2(element);
      $this.a50_1.p2(element);
    }
  }
  function currentNanoTime$ref() {
    var l = function () {
      return currentNanoTime();
    };
    l.callableName = 'currentNanoTime';
    return l;
  }
  function ExpireAfterAccessCache(expireAfterNanos, currentNanos) {
    var tmp;
    if (currentNanos === VOID) {
      tmp = currentNanoTime$ref();
    } else {
      tmp = currentNanos;
    }
    currentNanos = tmp;
    this.x4z_1 = expireAfterNanos;
    this.y4z_1 = currentNanos;
    this.z4z_1 = HashMap_init_$Create$_0();
    this.a50_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ExpireAfterAccessCache).t4z = function (key, loader) {
    this.a50_1.p2(key);
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.z4z_1;
    var value = this_0.l2(key);
    var tmp;
    if (value == null) {
      // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.get.<anonymous>' call
      var answer = loader(key);
      this_0.o2(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    // Inline function 'kotlin.also' call
    var this_1 = tmp;
    // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.get.<anonymous>' call
    var now = this.y4z_1();
    // Inline function 'kotlin.collections.set' call
    this.a50_1.o2(key, now);
    checkEvicted(this, now);
    return this_1;
  };
  function get_PUSH_DIRECTIONAL_ISOLATE_RANGE() {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return PUSH_DIRECTIONAL_ISOLATE_RANGE;
  }
  var PUSH_DIRECTIONAL_ISOLATE_RANGE;
  function _StrongDirectionType___init__impl__59uet3(value) {
    return value;
  }
  function Companion_24() {
    Companion_instance_25 = this;
    this.p4z_1 = _StrongDirectionType___init__impl__59uet3(0);
    this.q4z_1 = _StrongDirectionType___init__impl__59uet3(1);
    this.r4z_1 = _StrongDirectionType___init__impl__59uet3(2);
  }
  var Companion_instance_25;
  function Companion_getInstance_37() {
    if (Companion_instance_25 == null)
      new Companion_24();
    return Companion_instance_25;
  }
  function firstStrongDirectionType(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var tmp0_iterator = get_codePointsOutsideDirectionalIsolate(_this__u8e3s4).j();
    $l$loop: while (tmp0_iterator.k()) {
      var codePoint = tmp0_iterator.l();
      var strongDirectionType_0 = strongDirectionType(codePoint);
      var tmp;
      if (strongDirectionType_0 === Companion_getInstance_37().p4z_1) {
        continue $l$loop;
      } else {
        tmp = strongDirectionType_0;
      }
      return tmp;
    }
    return Companion_getInstance_37().p4z_1;
  }
  function codePointAt(_this__u8e3s4, index) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var high = charSequenceGet(_this__u8e3s4, index);
    if (isHighSurrogate(high) && (index + 1 | 0) < charSequenceLength(_this__u8e3s4)) {
      var low = charSequenceGet(_this__u8e3s4, index + 1 | 0);
      if (isLowSurrogate(low)) {
        return toCodePoint(Companion_getInstance_4(), high, low);
      }
    }
    // Inline function 'kotlin.code' call
    return Char__toInt_impl_vasixd(high);
  }
  function get_codePointsOutsideDirectionalIsolate(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return sequence(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0(_this__u8e3s4, null));
  }
  function toCodePoint(_this__u8e3s4, high, low) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return (Char__minus_impl_a2frrh(high, _Char___init__impl__6a9atx(55296)) << 10 | Char__minus_impl_a2frrh(low, _Char___init__impl__6a9atx(56320))) + 65536 | 0;
  }
  function get_codePoints(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return sequence(_get_codePoints_$slambda_43x8dt_0(_this__u8e3s4, null));
  }
  function charCount(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return _this__u8e3s4 >= 65536 ? 2 : 1;
  }
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    this.j50_1 = $this_codePointsOutsideDirectionalIsolate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).j3a = function ($this$sequence, $completion) {
    var tmp = this.k3a($this$sequence, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).ba = function (p1, $completion) {
    return this.j3a(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 5;
            this.l50_1 = 0;
            this.m50_1 = get_codePoints(this.j50_1).j();
            this.h9_1 = 1;
            continue $sm;
          case 1:
            if (!this.m50_1.k()) {
              this.h9_1 = 4;
              continue $sm;
            }

            this.n50_1 = this.m50_1.l();
            var progression = get_PUSH_DIRECTIONAL_ISOLATE_RANGE();
            var containsLower = progression.b1_1;
            var containsUpper = progression.c1_1;
            var containsArg = this.n50_1;
            if (containsLower <= containsArg ? containsArg <= containsUpper : false) {
              this.l50_1 = this.l50_1 + 1 | 0;
              this.h9_1 = 3;
              continue $sm;
            } else {
              if (this.n50_1 === 8297) {
                if (this.l50_1 > 0) {
                  this.l50_1 = this.l50_1 - 1 | 0;
                }
                this.h9_1 = 3;
                continue $sm;
              } else {
                if (this.l50_1 === 0) {
                  this.h9_1 = 2;
                  suspendResult = this.k50_1.jg(this.n50_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.h9_1 = 3;
                  continue $sm;
                }
              }
            }

          case 2:
            this.h9_1 = 3;
            continue $sm;
          case 3:
            this.h9_1 = 1;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 5) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).k3a = function ($this$sequence, completion) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj(this.j50_1, completion);
    i.k50_1 = $this$sequence;
    return i;
  };
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.j3a($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation) {
    this.w50_1 = $this_codePoints;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePoints_$slambda_43x8dt).j3a = function ($this$sequence, $completion) {
    var tmp = this.k3a($this$sequence, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(_get_codePoints_$slambda_43x8dt).ba = function (p1, $completion) {
    return this.j3a(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePoints_$slambda_43x8dt).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 4;
            this.y50_1 = 0;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            if (!(this.y50_1 < charSequenceLength(this.w50_1))) {
              this.h9_1 = 3;
              continue $sm;
            }

            this.z50_1 = codePointAt(this.w50_1, this.y50_1);
            this.h9_1 = 2;
            suspendResult = this.x50_1.jg(this.z50_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.y50_1 = this.y50_1 + charCount(this.z50_1) | 0;
            this.h9_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 4) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(_get_codePoints_$slambda_43x8dt).k3a = function ($this$sequence, completion) {
    var i = new _get_codePoints_$slambda_43x8dt(this.w50_1, completion);
    i.x50_1 = $this$sequence;
    return i;
  };
  function _get_codePoints_$slambda_43x8dt_0($this_codePoints, resultContinuation) {
    var i = new _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.j3a($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_CharHelpers_skiko_kt_d762bq;
  function _init_properties_CharHelpers_skiko_kt__8ej40s() {
    if (!properties_initialized_CharHelpers_skiko_kt_d762bq) {
      properties_initialized_CharHelpers_skiko_kt_d762bq = true;
      PUSH_DIRECTIONAL_ISOLATE_RANGE = numberRangeToNumber(8294, 8296);
    }
  }
  function FontRasterizationSettings$Companion$PlatformDefault$delegate$lambda() {
    var tmp;
    switch (currentPlatform().s2_1) {
      case 2:
        var tmp1_smoothing = FontSmoothing_AntiAlias_getInstance();
        var tmp2_hinting = FontHinting_Normal_getInstance();
        tmp = new FontRasterizationSettings(tmp1_smoothing, tmp2_hinting, true, false);
        break;
      case 1:
      case 0:
        var tmp3_smoothing = FontSmoothing_AntiAlias_getInstance();
        var tmp4_hinting = FontHinting_Slight_getInstance();
        tmp = new FontRasterizationSettings(tmp3_smoothing, tmp4_hinting, true, false);
        break;
      case 7:
        var tmp5_smoothing = FontSmoothing_AntiAlias_getInstance();
        var tmp6_hinting = FontHinting_Slight_getInstance();
        tmp = new FontRasterizationSettings(tmp5_smoothing, tmp6_hinting, true, false);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        var tmp7_smoothing = FontSmoothing_AntiAlias_getInstance();
        var tmp8_hinting = FontHinting_Normal_getInstance();
        tmp = new FontRasterizationSettings(tmp7_smoothing, tmp8_hinting, true, false);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function Companion_25() {
    Companion_instance_26 = this;
    var tmp = this;
    tmp.a51_1 = lazy_0(FontRasterizationSettings$Companion$PlatformDefault$delegate$lambda);
  }
  protoOf(Companion_25).b51 = function () {
    var tmp0 = this.a51_1;
    // Inline function 'kotlin.getValue' call
    PlatformDefault$factory();
    return tmp0.v();
  };
  var Companion_instance_26;
  function Companion_getInstance_38() {
    if (Companion_instance_26 == null)
      new Companion_25();
    return Companion_instance_26;
  }
  function FontRasterizationSettings(smoothing, hinting, subpixelPositioning, autoHintingForced) {
    Companion_getInstance_38();
    this.c51_1 = smoothing;
    this.d51_1 = hinting;
    this.e51_1 = subpixelPositioning;
    this.f51_1 = autoHintingForced;
  }
  protoOf(FontRasterizationSettings).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof FontRasterizationSettings))
      THROW_CCE();
    if (!this.c51_1.equals(other.c51_1))
      return false;
    if (!this.d51_1.equals(other.d51_1))
      return false;
    if (!(this.e51_1 === other.e51_1))
      return false;
    return this.f51_1 === other.f51_1;
  };
  protoOf(FontRasterizationSettings).hashCode = function () {
    var result = this.c51_1.hashCode();
    result = imul(31, result) + this.d51_1.hashCode() | 0;
    result = imul(31, result) + getBooleanHashCode(this.e51_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.f51_1) | 0;
    return result;
  };
  protoOf(FontRasterizationSettings).toString = function () {
    return 'FontRasterizationSettings(smoothing=' + this.c51_1.toString() + ', ' + ('hinting=' + this.d51_1.toString() + ', ') + ('subpixelPositioning=' + this.e51_1 + ', ') + ('autoHintingForced=' + this.f51_1 + ')');
  };
  var FontSmoothing_None_instance;
  var FontSmoothing_AntiAlias_instance;
  var FontSmoothing_SubpixelAntiAlias_instance;
  var FontSmoothing_entriesInitialized;
  function FontSmoothing_initEntries() {
    if (FontSmoothing_entriesInitialized)
      return Unit_instance;
    FontSmoothing_entriesInitialized = true;
    FontSmoothing_None_instance = new FontSmoothing('None', 0);
    FontSmoothing_AntiAlias_instance = new FontSmoothing('AntiAlias', 1);
    FontSmoothing_SubpixelAntiAlias_instance = new FontSmoothing('SubpixelAntiAlias', 2);
  }
  function FontSmoothing(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var FontHinting_None_instance;
  var FontHinting_Slight_instance;
  var FontHinting_Normal_instance;
  var FontHinting_Full_instance;
  var FontHinting_entriesInitialized;
  function FontHinting_initEntries() {
    if (FontHinting_entriesInitialized)
      return Unit_instance;
    FontHinting_entriesInitialized = true;
    FontHinting_None_instance = new FontHinting('None', 0);
    FontHinting_Slight_instance = new FontHinting('Slight', 1);
    FontHinting_Normal_instance = new FontHinting('Normal', 2);
    FontHinting_Full_instance = new FontHinting('Full', 3);
  }
  function FontHinting(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toSkFontRastrSettings(_this__u8e3s4) {
    return new FontRastrSettings(toSkFontEdging(_this__u8e3s4.c51_1), toSkFontHinting(_this__u8e3s4.d51_1), _this__u8e3s4.e51_1);
  }
  function toSkFontEdging(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.s2_1) {
      case 0:
        tmp = FontEdging_ALIAS_getInstance();
        break;
      case 1:
        tmp = FontEdging_ANTI_ALIAS_getInstance();
        break;
      case 2:
        tmp = FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function toSkFontHinting(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.s2_1) {
      case 0:
        tmp = FontHinting_NONE_getInstance();
        break;
      case 1:
        tmp = FontHinting_SLIGHT_getInstance();
        break;
      case 2:
        tmp = FontHinting_NORMAL_getInstance();
        break;
      case 3:
        tmp = FontHinting_FULL_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function FontSmoothing_AntiAlias_getInstance() {
    FontSmoothing_initEntries();
    return FontSmoothing_AntiAlias_instance;
  }
  function FontHinting_Slight_getInstance() {
    FontHinting_initEntries();
    return FontHinting_Slight_instance;
  }
  function FontHinting_Normal_getInstance() {
    FontHinting_initEntries();
    return FontHinting_Normal_instance;
  }
  function PlatformDefault$factory() {
    return getPropertyCallableRef('PlatformDefault', 1, KProperty1, function (receiver) {
      return receiver.b51();
    }, null);
  }
  function Paragraph_1() {
  }
  function _set_paragraph__p1bfvb($this, value) {
    $this.n51_1 = value;
    $this.o51_1 = null;
  }
  function _get_text__de5ose($this) {
    return $this.i51_1.p51_1;
  }
  function lineMetricsForOffset($this, offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    if (!(0 <= offset ? offset <= _get_text__de5ose($this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose($this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp2 = _get_lineMetrics__5iiuki($this);
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.binarySearchFirstMatchingOrLast' call
      // Inline function 'kotlin.collections.isEmpty' call
      if (tmp2.length === 0) {
        tmp$ret$2 = null;
        break $l$block;
      }
      var tmp = asList(tmp2);
      var index = binarySearch(tmp, VOID, VOID, SkiaParagraph$lineMetricsForOffset$lambda(offset));
      tmp$ret$2 = tmp2[coerceAtMost((-index | 0) - 1 | 0, get_lastIndex_0(tmp2))];
    }
    return tmp$ret$2;
  }
  function getLineMetricsForVerticalPosition($this, vertical) {
    var tmp0 = _get_lineMetrics__5iiuki($this);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.binarySearchFirstMatchingOrLast' call
      // Inline function 'kotlin.collections.isEmpty' call
      if (tmp0.length === 0) {
        tmp$ret$1 = null;
        break $l$block;
      }
      var tmp = asList(tmp0);
      var index = binarySearch(tmp, VOID, VOID, SkiaParagraph$getLineMetricsForVerticalPosition$lambda(vertical));
      tmp$ret$1 = tmp0[coerceAtMost((-index | 0) - 1 | 0, get_lastIndex_0(tmp0))];
    }
    return tmp$ret$1;
  }
  function _get_lineMetrics__5iiuki($this) {
    var tmp0_elvis_lhs = $this.o51_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = receiveLineMetrics($this);
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lineMetrics>.<anonymous>' call
      $this.o51_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lineMetrics = tmp;
    return lineMetrics;
  }
  function receiveLineMetrics($this) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = _get_text__de5ose($this);
    if (charSequenceLength(this_0) === 0) {
      tmp = $this.m51_1.e52($this.n51_1);
    } else {
      tmp = $this.n51_1.n3w();
    }
    var lineMetrics = tmp;
    var fontMetrics = $this.f52().t3n();
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(lineMetrics.length === 0)) {
      lineMetrics[0] = trimFirstAscent(lineMetrics[0], fontMetrics, $this.m51_1.g52());
      lineMetrics[lineMetrics.length - 1 | 0] = trimLastDescent(lineMetrics[lineMetrics.length - 1 | 0], fontMetrics, $this.m51_1.g52());
    }
    return lineMetrics;
  }
  function getBoxForwardByOffset($this, offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    if (!(0 <= offset ? offset <= _get_text__de5ose($this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose($this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var to = offset + 1 | 0;
    while (to <= _get_text__de5ose($this).length) {
      var box = firstOrNull($this.n51_1.k3w(offset, to, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (!(box == null)) {
        return box;
      }
      to = to + 1 | 0;
    }
    return null;
  }
  function SkiaParagraph$lineMetricsForOffset$lambda($offset) {
    return function (it) {
      var tmp;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.lineMetricsForOffset.<anonymous>' call
      if ($offset < it.q3v_1) {
        tmp = 1;
      } else {
        tmp = -1;
      }
      return tmp;
    };
  }
  function SkiaParagraph$getLineMetricsForVerticalPosition$lambda($vertical) {
    return function (it) {
      var tmp;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineMetricsForVerticalPosition.<anonymous>' call
      if ($vertical < it.y3v_1 + it.t3v_1) {
        tmp = 1;
      } else {
        tmp = -1;
      }
      return tmp;
    };
  }
  function SkiaParagraph(paragraphIntrinsics, maxLines, ellipsis, constraints) {
    this.i51_1 = paragraphIntrinsics;
    this.j51_1 = maxLines;
    this.k51_1 = constraints;
    this.l51_1 = ellipsis ? '\u2026' : '';
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = this.i51_1.h52();
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.layouter.<anonymous>' call
    this_0.i52(this.j51_1, this.l51_1);
    tmp.m51_1 = this_0;
    this.n51_1 = this.m51_1.j52(this.m3g());
    this.m51_1.k52(Size(this.m3g(), this.n3g()));
    _set_paragraph__p1bfvb(this, this.m51_1.j52(this.m3g()));
    this.n51_1.i3w(this.m3g());
    this.o51_1 = null;
  }
  protoOf(SkiaParagraph).f52 = function () {
    return this.m51_1.l52();
  };
  protoOf(SkiaParagraph).m3g = function () {
    return _Constraints___get_maxWidth__impl__uuyqc(this.k51_1);
  };
  protoOf(SkiaParagraph).n3g = function () {
    return this.n51_1.n3g();
  };
  protoOf(SkiaParagraph).f3w = function () {
    return this.i51_1.y51_1;
  };
  protoOf(SkiaParagraph).z4j = function () {
    var tmp0_safe_receiver = firstOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-firstBaseline>.<anonymous>' call
      tmp = tmp0_safe_receiver.y3v_1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).a4k = function () {
    var tmp0_safe_receiver = lastOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-lastBaseline>.<anonymous>' call
      tmp = tmp0_safe_receiver.y3v_1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).w4j = function () {
    return this.n51_1.h3w();
  };
  protoOf(SkiaParagraph).v4j = function () {
    var tmp;
    if (_get_text__de5ose(this) === '' || this.n51_1.o3w() < 1) {
      tmp = 1;
    } else {
      tmp = this.n51_1.o3w();
    }
    return tmp;
  };
  protoOf(SkiaParagraph).x4j = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.n51_1.l3w();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.<get-placeholderRects>.<anonymous>' call
      var tmp$ret$0 = toComposeRect(item.w3x_1);
      destination.e(tmp$ret$0);
    }
    return destination;
  };
  protoOf(SkiaParagraph).q4j = function (start, end) {
    var boxes = this.n51_1.k3w(start, end, RectHeightMode_MAX_getInstance(), RectWidthMode_TIGHT_getInstance());
    var path = Path();
    var inductionVariable = 0;
    var last = boxes.length;
    while (inductionVariable < last) {
      var b = boxes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      asSkiaPath(path).o3r(b.w3x_1);
    }
    return path;
  };
  protoOf(SkiaParagraph).p4k = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.getLineTop.<anonymous>' call
      // Inline function 'kotlin.math.floor' call
      var x = tmp0_safe_receiver.y3v_1 - tmp0_safe_receiver.s3v_1;
      tmp = Math.floor(x);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).r4k = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n3v_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).t4k = function (lineIndex, visibleEnd) {
    var tmp0_elvis_lhs = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var metrics = tmp;
    var tmp_0;
    if (visibleEnd) {
      var tmp_1;
      if (lineIndex > 0 && metrics.n3v_1 < _get_lineMetrics__5iiuki(this)[lineIndex - 1 | 0].o3v_1) {
        tmp_1 = metrics.o3v_1;
      } else if (metrics.n3v_1 < _get_text__de5ose(this).length && charSequenceGet(_get_text__de5ose(this), metrics.n3v_1) === _Char___init__impl__6a9atx(10)) {
        tmp_1 = metrics.n3v_1;
      } else {
        tmp_1 = metrics.p3v_1;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = metrics.o3v_1;
    }
    return tmp_0;
  };
  protoOf(SkiaParagraph).o4k = function (offset) {
    var tmp0_safe_receiver = lineMetricsForOffset(this, offset);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z3v_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).g4k = function (vertical) {
    var tmp0_safe_receiver = getLineMetricsForVerticalPosition(this, vertical);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z3v_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).j4k = function (offset) {
    return this.i51_1.v51_1;
  };
  protoOf(SkiaParagraph).k4k = function (offset) {
    var tmp0_safe_receiver = getBoxForwardByOffset(this, offset);
    var tmp1_subject = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y3x();
    var tmp;
    switch (tmp1_subject == null ? -1 : tmp1_subject.s2_1) {
      case 0:
        tmp = ResolvedTextDirection_Rtl_getInstance();
        break;
      case 1:
        tmp = ResolvedTextDirection_Ltr_getInstance();
        break;
      case -1:
        tmp = ResolvedTextDirection_Ltr_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(SkiaParagraph).l4k = function (offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'kotlin.require' call
    if (!(0 <= offset ? offset <= _get_text__de5ose(this).length : false)) {
      // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid.<anonymous>' call
      var message = 'Invalid offset: ' + offset + '. Valid range is [0, ' + _get_text__de5ose(this).length + ']';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (offset < _get_text__de5ose(this).length && isWhitespace(charSequenceGet(_get_text__de5ose(this), offset)) || offset === _get_text__de5ose(this).length) {
      var tmp;
      if (offset > 0 && !isWhitespace(charSequenceGet(_get_text__de5ose(this), offset - 1 | 0))) {
        tmp = toTextRange(this.n51_1.m3w(offset - 1 | 0));
      } else {
        tmp = TextRange_0(offset, offset);
      }
      return tmp;
    }
    return toTextRange(this.n51_1.m3w(offset));
  };
  protoOf(SkiaParagraph).c4k = function (canvas, color, shadow, textDecoration, drawStyle, blendMode) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.paint.<anonymous>' call
    var $this$with = this.m51_1;
    $this$with.m52(color);
    $this$with.n52(shadow, textDecoration);
    $this$with.o52(drawStyle);
    $this$with.p52(blendMode);
    var tmp$ret$1 = $this$with.j52(this.m3g());
    _set_paragraph__p1bfvb(this, tmp$ret$1);
    this.n51_1.j3w(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  protoOf(SkiaParagraph).e4k = function (canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.paint.<anonymous>' call
    var $this$with = this.m51_1;
    $this$with.q52(brush, Size(this.m3g(), this.n3g()), alpha);
    $this$with.n52(shadow, textDecoration);
    $this$with.o52(drawStyle);
    $this$with.p52(blendMode);
    var tmp$ret$1 = $this$with.j52(this.m3g());
    _set_paragraph__p1bfvb(this, tmp$ret$1);
    this.n51_1.j3w(get_nativeCanvas(canvas), 0.0, 0.0);
  };
  function trimFirstAscent(_this__u8e3s4, fontMetrics, textStyle) {
    if (get_isUnspecified(textStyle.v4r()))
      return _this__u8e3s4;
    var tmp0_elvis_lhs = textStyle.x4r();
    var style = tmp0_elvis_lhs == null ? Companion_getInstance_29().d4z_1 : tmp0_elvis_lhs;
    var tmp;
    if (Trim__isTrimFirstLineTop_impl_tqdsaa(style.f4z_1)) {
      tmp = -fontMetrics.n3o_1;
    } else {
      tmp = _this__u8e3s4.s3v_1;
    }
    var ascent = tmp;
    return copy(_this__u8e3s4, VOID, VOID, VOID, VOID, VOID, ascent);
  }
  function trimLastDescent(_this__u8e3s4, fontMetrics, textStyle) {
    if (get_isUnspecified(textStyle.v4r()))
      return _this__u8e3s4;
    var tmp0_elvis_lhs = textStyle.x4r();
    var style = tmp0_elvis_lhs == null ? Companion_getInstance_29().d4z_1 : tmp0_elvis_lhs;
    var tmp;
    if (Trim__isTrimLastLineBottom_impl_8k6x3e(style.f4z_1)) {
      tmp = fontMetrics.o3o_1;
    } else {
      tmp = _this__u8e3s4.t3v_1;
    }
    var descent = tmp;
    return copy(_this__u8e3s4, VOID, VOID, VOID, VOID, VOID, VOID, descent);
  }
  function toTextRange(_this__u8e3s4) {
    return TextRange_0(_this__u8e3s4.r3p_1, _this__u8e3s4.s3p_1);
  }
  function copy(_this__u8e3s4, startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber) {
    startIndex = startIndex === VOID ? _this__u8e3s4.n3v_1 : startIndex;
    endIndex = endIndex === VOID ? _this__u8e3s4.o3v_1 : endIndex;
    endExcludingWhitespaces = endExcludingWhitespaces === VOID ? _this__u8e3s4.p3v_1 : endExcludingWhitespaces;
    endIncludingNewline = endIncludingNewline === VOID ? _this__u8e3s4.q3v_1 : endIncludingNewline;
    isHardBreak = isHardBreak === VOID ? _this__u8e3s4.r3v_1 : isHardBreak;
    ascent = ascent === VOID ? _this__u8e3s4.s3v_1 : ascent;
    descent = descent === VOID ? _this__u8e3s4.t3v_1 : descent;
    unscaledAscent = unscaledAscent === VOID ? _this__u8e3s4.u3v_1 : unscaledAscent;
    height = height === VOID ? _this__u8e3s4.v3v_1 : height;
    width = width === VOID ? _this__u8e3s4.w3v_1 : width;
    left = left === VOID ? _this__u8e3s4.x3v_1 : left;
    baseline = baseline === VOID ? _this__u8e3s4.y3v_1 : baseline;
    lineNumber = lineNumber === VOID ? _this__u8e3s4.z3v_1 : lineNumber;
    return new LineMetrics(startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber);
  }
  function _TextDecorationLineStyle___init__impl__fccanb(value) {
    return value;
  }
  function TextDecorationLineStyle__toString_impl_uezvi9($this) {
    return $this === Companion_getInstance_39().r52_1 ? 'Solid' : $this === Companion_getInstance_39().s52_1 ? 'Double' : $this === Companion_getInstance_39().t52_1 ? 'Dotted' : $this === Companion_getInstance_39().u52_1 ? 'Dashed' : $this === Companion_getInstance_39().v52_1 ? 'Wavy' : 'Invalid';
  }
  function Companion_26() {
    Companion_instance_27 = this;
    this.r52_1 = _TextDecorationLineStyle___init__impl__fccanb(1);
    this.s52_1 = _TextDecorationLineStyle___init__impl__fccanb(2);
    this.t52_1 = _TextDecorationLineStyle___init__impl__fccanb(3);
    this.u52_1 = _TextDecorationLineStyle___init__impl__fccanb(4);
    this.v52_1 = _TextDecorationLineStyle___init__impl__fccanb(5);
  }
  var Companion_instance_27;
  function Companion_getInstance_39() {
    if (Companion_instance_27 == null)
      new Companion_26();
    return Companion_instance_27;
  }
  function TextDecorationLineStyle__hashCode_impl_8ntype($this) {
    return $this;
  }
  function TextDecorationLineStyle__equals_impl_3jy6m($this, other) {
    if (!(other instanceof TextDecorationLineStyle))
      return false;
    if (!($this === (other instanceof TextDecorationLineStyle ? other.w52_1 : THROW_CCE())))
      return false;
    return true;
  }
  function TextDecorationLineStyle(value) {
    Companion_getInstance_39();
    this.w52_1 = value;
  }
  protoOf(TextDecorationLineStyle).toString = function () {
    return TextDecorationLineStyle__toString_impl_uezvi9(this.w52_1);
  };
  protoOf(TextDecorationLineStyle).hashCode = function () {
    return TextDecorationLineStyle__hashCode_impl_8ntype(this.w52_1);
  };
  protoOf(TextDecorationLineStyle).equals = function (other) {
    return TextDecorationLineStyle__equals_impl_3jy6m(this.w52_1, other);
  };
  function PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    PlatformTextStyle.call($this);
    $this.u4q_1 = spanStyle;
    $this.v4q_1 = paragraphStyle;
    return $this;
  }
  function PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(PlatformTextStyle)));
  }
  protoOf(PlatformTextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformTextStyle))
      return false;
    if (!equals(this.v4q_1, other.v4q_1))
      return false;
    if (!equals(this.u4q_1, other.u4q_1))
      return false;
    return true;
  };
  protoOf(PlatformTextStyle).hashCode = function () {
    var tmp0_safe_receiver = this.u4q_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.v4q_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  function PlatformTextStyle() {
  }
  function createPlatformTextStyle(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle);
  }
  function createFontFamilyResolver(fontCache) {
    return new FontFamilyResolverImpl(new SkiaFontLoader(fontCache));
  }
  function createFontFamilyResolver_0() {
    return new FontFamilyResolverImpl(new SkiaFontLoader());
  }
  function PlatformFontFamilyTypefaceAdapter() {
  }
  protoOf(PlatformFontFamilyTypefaceAdapter).j4u = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.k4t_1;
    if (tmp instanceof FontListFontFamily)
      return null;
    var skiaFontLoader = platformFontLoader instanceof SkiaFontLoader ? platformFontLoader : THROW_CCE();
    var tmp0_elvis_lhs = typefaceRequest.k4t_1;
    var result = skiaFontLoader.z52(tmp0_elvis_lhs == null ? Companion_getInstance_16().k4p_1 : tmp0_elvis_lhs, typefaceRequest.l4t_1, typefaceRequest.m4t_1);
    return new Immutable(result);
  };
  function SkiaFontLoader(fontCache) {
    fontCache = fontCache === VOID ? new FontCache() : fontCache;
    this.x52_1 = fontCache;
    this.y52_1 = this.x52_1;
  }
  protoOf(SkiaFontLoader).a53 = function () {
    return this.x52_1.b53_1;
  };
  protoOf(SkiaFontLoader).m4y = function (font) {
    if (!(font instanceof PlatformFont)) {
      if (!(font.y4s() === Companion_getInstance_19().a4t_1)) {
        throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + toString(font));
      }
      return null;
    }
    var tmp0_subject = font.y4s();
    var tmp;
    if (tmp0_subject === Companion_getInstance_19().z4s_1) {
      tmp = this.x52_1.f53(font);
    } else if (tmp0_subject === Companion_getInstance_19().a4t_1) {
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        // Inline function 'androidx.compose.ui.text.font.SkiaFontLoader.loadBlocking.<anonymous>' call
        // Inline function 'kotlin.Companion.success' call
        var value = this.x52_1.f53(font);
        tmp_0 = _Result___init__impl__xyqfz8(value);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      // Inline function 'kotlin.Result.getOrNull' call
      var this_0 = tmp_0;
      var tmp_2;
      if (_Result___get_isFailure__impl__jpiriv(this_0)) {
        tmp_2 = null;
      } else {
        var tmp_3 = _Result___get_value__impl__bjfvqg(this_0);
        tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      }
      tmp = tmp_2;
    } else if (tmp0_subject === Companion_getInstance_19().b4t_1) {
      throw UnsupportedOperationException_init_$Create$('Unsupported Async font load path');
    } else {
      throw IllegalArgumentException_init_$Create$('Unknown loading type ' + FontLoadingStrategy__toString_impl_fx0z8f(font.y4s()));
    }
    return tmp;
  };
  protoOf(SkiaFontLoader).z52 = function (fontFamily, fontWeight, fontStyle) {
    return this.x52_1.z52(fontFamily, fontWeight, fontStyle);
  };
  protoOf(SkiaFontLoader).g53 = function (font, $completion) {
    return this.m4y(font);
  };
  protoOf(SkiaFontLoader).q4w = function (font, $completion) {
    return this.g53(font, $completion);
  };
  protoOf(SkiaFontLoader).q4u = function () {
    return this.y52_1;
  };
  function ActualParagraph(paragraphIntrinsics, maxLines, ellipsis, constraints) {
    return new SkiaParagraph(paragraphIntrinsics instanceof SkiaParagraphIntrinsics ? paragraphIntrinsics : THROW_CCE(), maxLines, ellipsis, constraints);
  }
  function ActualParagraph_0(text, style, spanStyles, placeholders, maxLines, ellipsis, constraints, density, fontFamilyResolver) {
    return new SkiaParagraph(new SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver), maxLines, ellipsis, constraints);
  }
  function get_DefaultFontSize_0() {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return DefaultFontSize_0;
  }
  var DefaultFontSize_0;
  function get_skTextStylesCache() {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return skTextStylesCache;
  }
  var skTextStylesCache;
  function ComputedStyle_init_$Init$(density, spanStyle, brushSize, blendMode, lineHeight, $this) {
    brushSize = brushSize === VOID ? Companion_getInstance_5().c3h_1 : brushSize;
    blendMode = blendMode === VOID ? Companion_getInstance_0().v47_1 : blendMode;
    ComputedStyle.call($this);
    $this.b54(density, spanStyle, brushSize, blendMode, lineHeight);
    return $this;
  }
  function ComputedStyle_init_$Create$(density, spanStyle, brushSize, blendMode, lineHeight) {
    return ComputedStyle_init_$Init$(density, spanStyle, brushSize, blendMode, lineHeight, objectCreate(protoOf(ComputedStyle)));
  }
  function ComputedStyle(textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, textDecorationLineStyle, shadow, drawStyle, blendMode, lineHeight) {
    textForegroundStyle = textForegroundStyle === VOID ? Unspecified_instance : textForegroundStyle;
    brushSize = brushSize === VOID ? Companion_getInstance_5().c3h_1 : brushSize;
    var tmp;
    if (fontSize === VOID) {
      tmp = NaN;
    } else {
      tmp = fontSize;
    }
    fontSize = tmp;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? null : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().j45_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    textDecorationLineStyle = textDecorationLineStyle === VOID ? null : textDecorationLineStyle;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().v47_1 : blendMode;
    lineHeight = lineHeight === VOID ? null : lineHeight;
    this.h53_1 = textForegroundStyle;
    this.i53_1 = brushSize;
    this.j53_1 = fontSize;
    this.k53_1 = fontWeight;
    this.l53_1 = fontStyle;
    this.m53_1 = fontSynthesis;
    this.n53_1 = fontFamily;
    this.o53_1 = fontFeatureSettings;
    this.p53_1 = letterSpacing;
    this.q53_1 = baselineShift;
    this.r53_1 = textGeometricTransform;
    this.s53_1 = localeList;
    this.t53_1 = background;
    this.u53_1 = textDecoration;
    this.v53_1 = textDecorationLineStyle;
    this.w53_1 = shadow;
    this.x53_1 = drawStyle;
    this.y53_1 = blendMode;
    this.z53_1 = lineHeight;
    this.a54_1 = new SkiaTextPaint();
  }
  protoOf(ComputedStyle).b54 = function (density, spanStyle, brushSize, blendMode, lineHeight) {
    this.h53_1 = spanStyle.q4m_1;
    this.i53_1 = brushSize;
    var tmp = this;
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.set.<anonymous>' call
    tmp.j53_1 = density.n3h(spanStyle.r4m_1);
    this.k53_1 = spanStyle.s4m_1;
    this.l53_1 = spanStyle.t4m_1;
    this.m53_1 = spanStyle.u4m_1;
    this.n53_1 = spanStyle.v4m_1;
    this.o53_1 = spanStyle.w4m_1;
    var tmp_0 = this;
    var tmp_1;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_0 = spanStyle.x4m_1;
    if (!get_isUnspecified(this_0)) {
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.set.<anonymous>' call
      tmp_1 = density.n3h(spanStyle.x4m_1);
    } else {
      tmp_1 = null;
    }
    tmp_0.p53_1 = tmp_1;
    this.q53_1 = spanStyle.y4m_1;
    this.r53_1 = spanStyle.z4m_1;
    this.s53_1 = spanStyle.a4n_1;
    this.t53_1 = spanStyle.b4n_1;
    this.u53_1 = spanStyle.c4n_1;
    var tmp_2 = this;
    var tmp0_safe_receiver = spanStyle.e4n_1;
    tmp_2.v53_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i4o_1;
    this.w53_1 = spanStyle.d4n_1;
    this.x53_1 = spanStyle.f4n_1;
    this.y53_1 = blendMode;
    var tmp_3 = this;
    var tmp_4;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!get_isUnspecified(lineHeight)) {
      tmp_4 = toPx(lineHeight, density, spanStyle.r4m_1);
    } else {
      tmp_4 = null;
    }
    tmp_3.z53_1 = tmp_4;
  };
  protoOf(ComputedStyle).c54 = function () {
    var paint = this.a54_1.b4h();
    paint.n3q();
    this.a54_1.w4c(this.h53_1.x4c());
    this.a54_1.q52(this.h53_1.b4o(), this.i53_1, this.h53_1.z3z());
    this.a54_1.o52(this.x53_1);
    this.a54_1.c4d(this.y53_1);
    return paint;
  };
  protoOf(ComputedStyle).h54 = function (fontFamilyResolver) {
    var res = TextStyle_init_$Create$();
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = this.h53_1.x4c();
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      res.q3q(toArgb(this.h53_1.x4c()));
    }
    var foreground = this.c54();
    if (!(foreground.y3q() == null) || !foreground.p3q().equals(PaintMode_FILL_getInstance()) || !foreground.c3r()) {
      res.d3y(foreground);
    }
    var tmp0_safe_receiver = this.l53_1;
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp0_safe_receiver;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      var it = (tmp_0 == null ? null : new FontStyle(tmp_0)).g4n_1;
      res.j3y(toSkFontStyle(it));
    }
    var tmp1_safe_receiver = this.u53_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      res.h3y(toSkDecorationStyle(tmp1_safe_receiver, this.h53_1.x4c(), this.v53_1));
    }
    if (!equals(this.t53_1, Companion_getInstance().j45_1)) {
      // Inline function 'kotlin.also' call
      var this_1 = Paint_init_$Create$();
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      this_1.q3q(toArgb(this.t53_1));
      res.f3y(this_1);
    }
    var tmp2_safe_receiver = this.k53_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      res.j3y(res.n3t().p3p(tmp2_safe_receiver.s4n_1));
    }
    var tmp3_safe_receiver = this.w53_1;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      res.l3y(toSkShadow(tmp3_safe_receiver));
    }
    var tmp4_safe_receiver = this.p53_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      res.u3y(tmp4_safe_receiver);
    }
    var tmp_1 = Companion_getInstance_6();
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.o53_1;
    var tmp$ret$8 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    res.n3y(tmp_1.f3o(tmp$ret$8));
    res.o3y(this.j53_1);
    var tmp5_safe_receiver = this.n53_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      var tmp0_elvis_lhs_0 = this.k53_1;
      var tmp_2 = tmp0_elvis_lhs_0 == null ? Companion_getInstance_22().x4o_1 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs = this.l53_1;
      var tmp_3;
      var tmp_4 = tmp1_elvis_lhs;
      if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
        tmp_3 = Companion_getInstance_20().e4p_1;
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      var tmp_5 = tmp_3;
      var tmp2_elvis_lhs = this.m53_1;
      var tmp_6;
      var tmp_7 = tmp2_elvis_lhs;
      if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
        tmp_6 = Companion_getInstance_21().g4p_1;
      } else {
        tmp_6 = tmp2_elvis_lhs;
      }
      var tmp_8 = fontFamilyResolver.l4u(tmp5_safe_receiver, tmp_2, tmp_5, tmp_6).v();
      var resolved = tmp_8 instanceof FontLoadResult ? tmp_8 : THROW_CCE();
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_2 = resolved.j54_1;
      var tmp$ret$9 = copyToArray(this_2);
      res.q3y(tmp$ret$9);
      res.y3y(resolved.i54_1);
    }
    var tmp6_safe_receiver = this.q53_1;
    var tmp_9 = tmp6_safe_receiver;
    if ((tmp_9 == null ? null : new BaselineShift(tmp_9)) == null)
      null;
    else {
      var tmp_10 = tmp6_safe_receiver;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      var it_0 = (tmp_10 == null ? null : new BaselineShift(tmp_10)).i4n_1;
      var fontMetrics = res.a3z();
      res.w3y(_BaselineShift___get_multiplier__impl__qhmjek(it_0) * fontMetrics.n3o_1);
    }
    var tmp7_safe_receiver = this.z53_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.toSkTextStyle.<anonymous>' call
      res.s3y(tmp7_safe_receiver / this.j53_1);
    }
    return res;
  };
  protoOf(ComputedStyle).k54 = function (density, other) {
    var fontSize = toPx_0(other.r4m_1, density, this.j53_1);
    this.h53_1 = this.h53_1.h4o(other.q4m_1);
    var tmp0_safe_receiver = other.v4m_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
      this.n53_1 = tmp0_safe_receiver;
    }
    this.j53_1 = fontSize;
    var tmp1_safe_receiver = other.s4m_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
      this.k53_1 = tmp1_safe_receiver;
    }
    var tmp2_safe_receiver = other.t4m_1;
    var tmp = tmp2_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp2_safe_receiver;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
      this.l53_1 = (tmp_0 == null ? null : new FontStyle(tmp_0)).g4n_1;
    }
    var tmp3_safe_receiver = other.u4m_1;
    var tmp_1 = tmp3_safe_receiver;
    if ((tmp_1 == null ? null : new FontSynthesis(tmp_1)) == null)
      null;
    else {
      var tmp_2 = tmp3_safe_receiver;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
      this.m53_1 = (tmp_2 == null ? null : new FontSynthesis(tmp_2)).h4n_1;
    }
    var tmp4_safe_receiver = other.w4m_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
      this.o53_1 = tmp4_safe_receiver;
    }
    if (!get_isUnspecified(other.x4m_1)) {
      this.p53_1 = toPx_0(other.x4m_1, density, fontSize);
    }
    var tmp5_safe_receiver = other.y4m_1;
    var tmp_3 = tmp5_safe_receiver;
    if ((tmp_3 == null ? null : new BaselineShift(tmp_3)) == null)
      null;
    else {
      var tmp_4 = tmp5_safe_receiver;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
      this.q53_1 = (tmp_4 == null ? null : new BaselineShift(tmp_4)).i4n_1;
    }
    var tmp6_safe_receiver = other.z4m_1;
    if (tmp6_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
      this.r53_1 = tmp6_safe_receiver;
    }
    var tmp7_safe_receiver = other.a4n_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
      this.s53_1 = tmp7_safe_receiver;
    }
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = other.b4n_1;
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      this.t53_1 = other.b4n_1;
    }
    var tmp8_safe_receiver = other.c4n_1;
    if (tmp8_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
      this.u53_1 = tmp8_safe_receiver;
    }
    var tmp9_safe_receiver = other.d4n_1;
    if (tmp9_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
      this.w53_1 = tmp9_safe_receiver;
    }
    var tmp10_safe_receiver = other.f4n_1;
    if (tmp10_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
      this.x53_1 = tmp10_safe_receiver;
    }
    var tmp11_safe_receiver = other.e4n_1;
    if (tmp11_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>' call
      var tmp0_safe_receiver_0 = tmp11_safe_receiver.i4o_1;
      var tmp_5;
      var tmp_6 = tmp0_safe_receiver_0;
      if ((tmp_6 == null ? null : new TextDecorationLineStyle(tmp_6)) == null) {
        tmp_5 = null;
      } else {
        var tmp_7 = tmp0_safe_receiver_0;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.text.platform.ComputedStyle.merge.<anonymous>.<anonymous>' call
        this.v53_1 = (tmp_7 == null ? null : new TextDecorationLineStyle(tmp_7)).w52_1;
        tmp_5 = Unit_instance;
      }
    }
  };
  protoOf(ComputedStyle).toString = function () {
    var tmp = toString(this.h53_1);
    var tmp_0 = Size__toString_impl_o87ni8(this.i53_1);
    var tmp_1 = this.j53_1;
    var tmp_2 = toString_0(this.k53_1);
    var tmp_3 = this.l53_1;
    var tmp_4 = toString_0(tmp_3 == null ? null : new FontStyle(tmp_3));
    var tmp_5 = this.m53_1;
    var tmp_6 = toString_0(tmp_5 == null ? null : new FontSynthesis(tmp_5));
    var tmp_7 = toString_0(this.n53_1);
    var tmp_8 = this.o53_1;
    var tmp_9 = this.p53_1;
    var tmp_10 = this.q53_1;
    var tmp_11 = toString_0(tmp_10 == null ? null : new BaselineShift(tmp_10));
    var tmp_12 = toString_0(this.r53_1);
    var tmp_13 = toString_0(this.s53_1);
    var tmp_14 = Color__toString_impl_hpzmaq(this.t53_1);
    var tmp_15 = toString_0(this.u53_1);
    var tmp_16 = this.v53_1;
    return 'ComputedStyle(textForegroundStyle=' + tmp + ', brushSize=' + tmp_0 + ', fontSize=' + tmp_1 + ', fontWeight=' + tmp_2 + ', fontStyle=' + tmp_4 + ', fontSynthesis=' + tmp_6 + ', fontFamily=' + tmp_7 + ', fontFeatureSettings=' + tmp_8 + ', letterSpacing=' + tmp_9 + ', baselineShift=' + tmp_11 + ', textGeometricTransform=' + tmp_12 + ', localeList=' + tmp_13 + ', background=' + tmp_14 + ', textDecoration=' + tmp_15 + ', textDecorationLineStyle=' + toString_0(tmp_16 == null ? null : new TextDecorationLineStyle(tmp_16)) + ', shadow=' + toString_0(this.w53_1) + ', drawStyle=' + toString_0(this.x53_1) + ', blendMode=' + BlendMode__toString_impl_uuibkd(this.y53_1) + ', lineHeight=' + this.z53_1 + ')';
  };
  protoOf(ComputedStyle).hashCode = function () {
    var result = hashCode(this.h53_1);
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.i53_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.j53_1) | 0;
    result = imul(result, 31) + (this.k53_1 == null ? 0 : this.k53_1.hashCode()) | 0;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.l53_1;
    if ((tmp_1 == null ? null : new FontStyle(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      tmp_0 = FontStyle__hashCode_impl_7qhg4w(this.l53_1);
    }
    result = tmp + tmp_0 | 0;
    var tmp_2 = imul(result, 31);
    var tmp_3;
    var tmp_4 = this.m53_1;
    if ((tmp_4 == null ? null : new FontSynthesis(tmp_4)) == null) {
      tmp_3 = 0;
    } else {
      tmp_3 = FontSynthesis__hashCode_impl_4wi11v(this.m53_1);
    }
    result = tmp_2 + tmp_3 | 0;
    result = imul(result, 31) + (this.n53_1 == null ? 0 : hashCode(this.n53_1)) | 0;
    result = imul(result, 31) + (this.o53_1 == null ? 0 : getStringHashCode(this.o53_1)) | 0;
    result = imul(result, 31) + (this.p53_1 == null ? 0 : getNumberHashCode(this.p53_1)) | 0;
    var tmp_5 = imul(result, 31);
    var tmp_6;
    var tmp_7 = this.q53_1;
    if ((tmp_7 == null ? null : new BaselineShift(tmp_7)) == null) {
      tmp_6 = 0;
    } else {
      tmp_6 = BaselineShift__hashCode_impl_g0potx(this.q53_1);
    }
    result = tmp_5 + tmp_6 | 0;
    result = imul(result, 31) + (this.r53_1 == null ? 0 : this.r53_1.hashCode()) | 0;
    result = imul(result, 31) + (this.s53_1 == null ? 0 : this.s53_1.hashCode()) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.t53_1) | 0;
    result = imul(result, 31) + (this.u53_1 == null ? 0 : this.u53_1.hashCode()) | 0;
    var tmp_8 = imul(result, 31);
    var tmp_9;
    var tmp_10 = this.v53_1;
    if ((tmp_10 == null ? null : new TextDecorationLineStyle(tmp_10)) == null) {
      tmp_9 = 0;
    } else {
      tmp_9 = TextDecorationLineStyle__hashCode_impl_8ntype(this.v53_1);
    }
    result = tmp_8 + tmp_9 | 0;
    result = imul(result, 31) + (this.w53_1 == null ? 0 : this.w53_1.hashCode()) | 0;
    result = imul(result, 31) + (this.x53_1 == null ? 0 : hashCode(this.x53_1)) | 0;
    result = imul(result, 31) + BlendMode__hashCode_impl_93ceri(this.y53_1) | 0;
    result = imul(result, 31) + (this.z53_1 == null ? 0 : getNumberHashCode(this.z53_1)) | 0;
    return result;
  };
  protoOf(ComputedStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComputedStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ComputedStyle ? other : THROW_CCE();
    if (!equals(this.h53_1, tmp0_other_with_cast.h53_1))
      return false;
    if (!equals(this.i53_1, tmp0_other_with_cast.i53_1))
      return false;
    if (!equals(this.j53_1, tmp0_other_with_cast.j53_1))
      return false;
    if (!equals(this.k53_1, tmp0_other_with_cast.k53_1))
      return false;
    var tmp = this.l53_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = tmp0_other_with_cast.l53_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.m53_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = tmp0_other_with_cast.m53_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.n53_1, tmp0_other_with_cast.n53_1))
      return false;
    if (!(this.o53_1 == tmp0_other_with_cast.o53_1))
      return false;
    if (!equals(this.p53_1, tmp0_other_with_cast.p53_1))
      return false;
    var tmp_5 = this.q53_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = tmp0_other_with_cast.q53_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.r53_1, tmp0_other_with_cast.r53_1))
      return false;
    if (!equals(this.s53_1, tmp0_other_with_cast.s53_1))
      return false;
    if (!equals(this.t53_1, tmp0_other_with_cast.t53_1))
      return false;
    if (!equals(this.u53_1, tmp0_other_with_cast.u53_1))
      return false;
    var tmp_8 = this.v53_1;
    var tmp_9 = tmp_8 == null ? null : new TextDecorationLineStyle(tmp_8);
    var tmp_10 = tmp0_other_with_cast.v53_1;
    if (!equals(tmp_9, tmp_10 == null ? null : new TextDecorationLineStyle(tmp_10)))
      return false;
    if (!equals(this.w53_1, tmp0_other_with_cast.w53_1))
      return false;
    if (!equals(this.x53_1, tmp0_other_with_cast.x53_1))
      return false;
    if (!(this.y53_1 === tmp0_other_with_cast.y53_1))
      return false;
    if (!equals(this.z53_1, tmp0_other_with_cast.z53_1))
      return false;
    return true;
  };
  function toPx(_this__u8e3s4, density, fontSize) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.ui.text.platform.toPx.<anonymous>' call
    var tmp$ret$1 = density.n3h(fontSize);
    return toPx_0(_this__u8e3s4, density, tmp$ret$1);
  }
  function toSkFontStyle(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_20().f4p_1 ? Companion_getInstance_7().m3p_1 : Companion_getInstance_7().k3p_1;
  }
  function toSkDecorationStyle(_this__u8e3s4, color, textDecorationLineStyle) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var underline = _this__u8e3s4.g4z(Companion_getInstance_31().v4p_1);
    var overline = false;
    var lineThrough = _this__u8e3s4.g4z(Companion_getInstance_31().w4p_1);
    var gaps = false;
    var tmp;
    var tmp_0 = textDecorationLineStyle;
    if ((tmp_0 == null ? null : new TextDecorationLineStyle(tmp_0)) == null) {
      tmp = null;
    } else {
      tmp = toSkDecorationLineStyle(textDecorationLineStyle);
    }
    var tmp1_elvis_lhs = tmp;
    var lineStyle = tmp1_elvis_lhs == null ? DecorationLineStyle_SOLID_getInstance() : tmp1_elvis_lhs;
    var thicknessMultiplier = 1.0;
    return new DecorationStyle(underline, overline, lineThrough, gaps, toArgb(color), lineStyle, thicknessMultiplier);
  }
  function toSkShadow(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return new Shadow_0(toArgb(_this__u8e3s4.w48_1), _Offset___get_x__impl__xvi35n(_this__u8e3s4.x48_1), _Offset___get_y__impl__8bzhra(_this__u8e3s4.x48_1), _this__u8e3s4.y48_1);
  }
  function toPx_0(_this__u8e3s4, density, fontSize) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    if (get_isUnspecified(_this__u8e3s4)) {
      tmp = fontSize;
    } else if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4)) {
      tmp = fontSize * _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4);
    } else if (_TextUnit___get_isSp__impl__8c3r6q(_this__u8e3s4)) {
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.ui.text.platform.toPx.<anonymous>' call
      tmp = density.n3h(_this__u8e3s4);
    } else {
      var message = 'Unexpected size in TextUnit.toPx';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function toSkDecorationLineStyle(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_39().r52_1 ? DecorationLineStyle_SOLID_getInstance() : _this__u8e3s4 === Companion_getInstance_39().s52_1 ? DecorationLineStyle_DOUBLE_getInstance() : _this__u8e3s4 === Companion_getInstance_39().t52_1 ? DecorationLineStyle_DOTTED_getInstance() : _this__u8e3s4 === Companion_getInstance_39().u52_1 ? DecorationLineStyle_DASHED_getInstance() : _this__u8e3s4 === Companion_getInstance_39().v52_1 ? DecorationLineStyle_WAVY_getInstance() : DecorationLineStyle_SOLID_getInstance();
  }
  function StyleAdd(position, style) {
    Op.call(this);
    this.l54_1 = position;
    this.m54_1 = style;
  }
  protoOf(StyleAdd).n54 = function () {
    return this.l54_1;
  };
  protoOf(StyleAdd).toString = function () {
    return 'StyleAdd(position=' + this.l54_1 + ', style=' + this.m54_1.toString() + ')';
  };
  protoOf(StyleAdd).hashCode = function () {
    var result = this.l54_1;
    result = imul(result, 31) + this.m54_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd ? other : THROW_CCE();
    if (!(this.l54_1 === tmp0_other_with_cast.l54_1))
      return false;
    if (!this.m54_1.equals(tmp0_other_with_cast.m54_1))
      return false;
    return true;
  };
  function PutPlaceholder(cut, width, height) {
    Op.call(this);
    this.o54_1 = cut;
    this.p54_1 = width;
    this.q54_1 = height;
    this.r54_1 = position$factory(this.o54_1);
  }
  protoOf(PutPlaceholder).n54 = function () {
    var tmp0 = this.r54_1;
    // Inline function 'kotlin.getValue' call
    position$factory_0();
    return tmp0.get();
  };
  protoOf(PutPlaceholder).toString = function () {
    return 'PutPlaceholder(cut=' + this.o54_1.toString() + ', width=' + this.p54_1 + ', height=' + this.q54_1 + ')';
  };
  protoOf(PutPlaceholder).hashCode = function () {
    var result = this.o54_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.p54_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.q54_1) | 0;
    return result;
  };
  protoOf(PutPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder ? other : THROW_CCE();
    if (!this.o54_1.equals(tmp0_other_with_cast.o54_1))
      return false;
    if (!equals(this.p54_1, tmp0_other_with_cast.p54_1))
      return false;
    if (!equals(this.q54_1, tmp0_other_with_cast.q54_1))
      return false;
    return true;
  };
  function EndPlaceholder(cut) {
    Op.call(this);
    this.s54_1 = cut;
    this.t54_1 = position$factory_1(this.s54_1);
  }
  protoOf(EndPlaceholder).n54 = function () {
    var tmp0 = this.t54_1;
    // Inline function 'kotlin.getValue' call
    position$factory_2();
    return tmp0.get();
  };
  protoOf(EndPlaceholder).toString = function () {
    return 'EndPlaceholder(cut=' + this.s54_1.toString() + ')';
  };
  protoOf(EndPlaceholder).hashCode = function () {
    return this.s54_1.hashCode();
  };
  protoOf(EndPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder ? other : THROW_CCE();
    if (!this.s54_1.equals(tmp0_other_with_cast.s54_1))
      return false;
    return true;
  };
  function StyleAdd_0(position, style) {
    Cut.call(this);
    this.u54_1 = position;
    this.v54_1 = style;
  }
  protoOf(StyleAdd_0).n54 = function () {
    return this.u54_1;
  };
  protoOf(StyleAdd_0).toString = function () {
    return 'StyleAdd(position=' + this.u54_1 + ', style=' + this.v54_1.toString() + ')';
  };
  protoOf(StyleAdd_0).hashCode = function () {
    var result = this.u54_1;
    result = imul(result, 31) + this.v54_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd_0))
      return false;
    var tmp0_other_with_cast = other instanceof StyleAdd_0 ? other : THROW_CCE();
    if (!(this.u54_1 === tmp0_other_with_cast.u54_1))
      return false;
    if (!this.v54_1.equals(tmp0_other_with_cast.v54_1))
      return false;
    return true;
  };
  function StyleRemove(position, style) {
    Cut.call(this);
    this.w54_1 = position;
    this.x54_1 = style;
  }
  protoOf(StyleRemove).n54 = function () {
    return this.w54_1;
  };
  protoOf(StyleRemove).toString = function () {
    return 'StyleRemove(position=' + this.w54_1 + ', style=' + this.x54_1.toString() + ')';
  };
  protoOf(StyleRemove).hashCode = function () {
    var result = this.w54_1;
    result = imul(result, 31) + this.x54_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleRemove).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleRemove))
      return false;
    var tmp0_other_with_cast = other instanceof StyleRemove ? other : THROW_CCE();
    if (!(this.w54_1 === tmp0_other_with_cast.w54_1))
      return false;
    if (!this.x54_1.equals(tmp0_other_with_cast.x54_1))
      return false;
    return true;
  };
  function PutPlaceholder_0(position, placeholder) {
    Cut.call(this);
    this.y54_1 = position;
    this.z54_1 = placeholder;
  }
  protoOf(PutPlaceholder_0).n54 = function () {
    return this.y54_1;
  };
  protoOf(PutPlaceholder_0).toString = function () {
    return 'PutPlaceholder(position=' + this.y54_1 + ', placeholder=' + this.z54_1.toString() + ')';
  };
  protoOf(PutPlaceholder_0).hashCode = function () {
    var result = this.y54_1;
    result = imul(result, 31) + this.z54_1.hashCode() | 0;
    return result;
  };
  protoOf(PutPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof PutPlaceholder_0 ? other : THROW_CCE();
    if (!(this.y54_1 === tmp0_other_with_cast.y54_1))
      return false;
    if (!this.z54_1.equals(tmp0_other_with_cast.z54_1))
      return false;
    return true;
  };
  function EndPlaceholder_0(position) {
    Cut.call(this);
    this.a55_1 = position;
  }
  protoOf(EndPlaceholder_0).n54 = function () {
    return this.a55_1;
  };
  protoOf(EndPlaceholder_0).toString = function () {
    return 'EndPlaceholder(position=' + this.a55_1 + ')';
  };
  protoOf(EndPlaceholder_0).hashCode = function () {
    return this.a55_1;
  };
  protoOf(EndPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder_0))
      return false;
    var tmp0_other_with_cast = other instanceof EndPlaceholder_0 ? other : THROW_CCE();
    if (!(this.a55_1 === tmp0_other_with_cast.a55_1))
      return false;
    return true;
  };
  function _get_initialStyle__6to25e($this) {
    var tmp = $this.o55_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('initialStyle');
    }
  }
  function _get_ops__e6e97j($this) {
    var tmp = $this.p55_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('ops');
    }
  }
  function prepareDefaultStyle($this) {
    $this.o55_1 = copyWithDefaultFontSize($this.d55_1.x4q(), $this.l55_1);
    $this.n55_1.b54($this.j55_1, _get_initialStyle__6to25e($this), $this.e55_1, $this.m55_1, $this.d55_1.v4r());
  }
  function Op() {
  }
  function Cut() {
  }
  function makeOps($this, spans, placeholders) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var cuts = ArrayList_init_$Create$_0();
    var tmp0_iterator = spans.j();
    while (tmp0_iterator.k()) {
      var span = tmp0_iterator.l();
      cuts.e(new StyleAdd_0(span.s4h_1, span.r4h_1));
      cuts.e(new StyleRemove(span.t4h_1, span.r4h_1));
    }
    var tmp1_iterator = placeholders.j();
    while (tmp1_iterator.k()) {
      var placeholder = tmp1_iterator.l();
      cuts.e(new PutPlaceholder_0(placeholder.s4h_1, placeholder.r4h_1));
      cuts.e(new EndPlaceholder_0(placeholder.t4h_1));
    }
    var ops = mutableListOf([new StyleAdd(0, $this.n55_1)]);
    // Inline function 'kotlin.collections.sortBy' call
    if (cuts.n() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = ParagraphBuilder$makeOps$lambda;
      var tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp);
      sortWith(cuts, tmp$ret$1);
    }
    var activeStyles = mutableListOf([_get_initialStyle__6to25e($this)]);
    var tmp2_iterator = cuts.j();
    while (tmp2_iterator.k()) {
      var cut = tmp2_iterator.l();
      if (cut instanceof StyleAdd_0) {
        activeStyles.e(cut.v54_1);
        var prev = previousStyleAddAtTheSamePosition($this, cut.n54(), ops);
        if (prev == null) {
          var tmp_0 = cut.n54();
          // Inline function 'kotlin.also' call
          var this_0 = mergeStyles($this, activeStyles);
          // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
          this_0.k54($this.j55_1, cut.v54_1);
          ops.e(new StyleAdd(tmp_0, this_0));
        } else {
          prev.m54_1.k54($this.j55_1, cut.v54_1);
        }
      } else {
        if (cut instanceof StyleRemove) {
          activeStyles.d2(cut.x54_1);
          ops.e(new StyleAdd(cut.n54(), mergeStyles($this, activeStyles)));
        } else {
          if (cut instanceof PutPlaceholder_0) {
            var currentStyle = mergeStyles($this, activeStyles);
            var op = new PutPlaceholder(cut, toPx_0(cut.z54_1.c4m_1, $this.j55_1, currentStyle.j53_1), toPx_0(cut.z54_1.d4m_1, $this.j55_1, currentStyle.j53_1));
            ops.e(op);
          } else {
            if (cut instanceof EndPlaceholder_0) {
              ops.e(new EndPlaceholder(cut));
            }
          }
        }
      }
    }
    return ops;
  }
  function mergeStyles($this, activeStyles) {
    var style = ComputedStyle_init_$Create$($this.j55_1, activeStyles.p(0), $this.e55_1, $this.m55_1, $this.d55_1.v4r());
    var inductionVariable = 1;
    var last = activeStyles.n();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        style.k54($this.j55_1, activeStyles.p(i));
      }
       while (inductionVariable < last);
    return style;
  }
  function previousStyleAddAtTheSamePosition($this, position, ops) {
    var tmp0_iterator = asReversed(ops).j();
    while (tmp0_iterator.k()) {
      var prevOp = tmp0_iterator.l();
      if (prevOp.n54() < position)
        return null;
      if (prevOp instanceof StyleAdd)
        return prevOp;
    }
    return null;
  }
  function makeSkFontRasterizationSettings($this, style) {
    var tmp0_safe_receiver = style.d4l_1.j4i_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x4l_1;
    var rasterizationSettings = tmp1_elvis_lhs == null ? Companion_getInstance_38().b51() : tmp1_elvis_lhs;
    return toSkFontRastrSettings(rasterizationSettings);
  }
  function textStyleToParagraphStyle($this, style, computedStyle) {
    var pStyle = new ParagraphStyle();
    pStyle.o3x(makeSkFontRasterizationSettings($this, style));
    pStyle.i3x(makeSkTextStyle($this, computedStyle));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>' call
    var it = style.t4r();
    pStyle.k3x(toSkAlignment(it));
    var lineHeight = computedStyle.z53_1;
    if (!(lineHeight == null) && lineHeight > computedStyle.j53_1) {
      var tmp0_elvis_lhs = style.x4r();
      var lineHeightStyle = tmp0_elvis_lhs == null ? Companion_getInstance_29().d4z_1 : tmp0_elvis_lhs;
      pStyle.n3x(toHeightMode(lineHeightStyle.f4z_1));
    } else {
      pStyle.n3x(HeightMode_DISABLE_ALL_getInstance());
    }
    pStyle.j3x(toSkDirection($this.k55_1));
    var tmp1_safe_receiver = $this.d55_1.w4r();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>' call
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.textStyleToParagraphStyle.<anonymous>.<anonymous>' call
      var $this$with = $this.j55_1;
      pStyle.p3x(new TextIndent($this$with.n3h(tmp1_safe_receiver.q4n_1), $this$with.n3h(tmp1_safe_receiver.r4n_1)));
    }
    return pStyle;
  }
  function makeSkTextStyle($this, style) {
    var tmp = get_skTextStylesCache();
    return tmp.s4z(style, ParagraphBuilder$makeSkTextStyle$lambda($this));
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.r55_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).td = function (a, b) {
    return this.r55_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.td(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).q3 = function () {
    return this.r55_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.q3(), other.q3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0_0).hashCode = function () {
    return hashCode(this.q3());
  };
  function ParagraphBuilder$makeOps$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    var tmp = a.n54();
    // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.makeOps.<anonymous>' call
    var tmp$ret$1 = b.n54();
    return compareValues(tmp, tmp$ret$1);
  }
  function ParagraphBuilder$makeSkTextStyle$lambda(this$0) {
    return function (it) {
      return it.h54(this$0.b55_1);
    };
  }
  function ParagraphBuilder$defaultFont$delegate$lambda(this$0) {
    return function () {
      var loadResult = resolveFontFamily(this$0.d55_1, this$0.b55_1);
      return Font_init_$Create$(loadResult == null ? null : loadResult.i54_1, this$0.n55_1.j53_1);
    };
  }
  function ParagraphBuilder_0(fontFamilyResolver, text, textStyle, brushSize, ellipsis, maxLines, spanStyles, placeholders, density, textDirection, drawStyle, blendMode) {
    brushSize = brushSize === VOID ? Companion_getInstance_5().c3h_1 : brushSize;
    ellipsis = ellipsis === VOID ? '' : ellipsis;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().v47_1 : blendMode;
    this.b55_1 = fontFamilyResolver;
    this.c55_1 = text;
    this.d55_1 = textStyle;
    this.e55_1 = brushSize;
    this.f55_1 = ellipsis;
    this.g55_1 = maxLines;
    this.h55_1 = spanStyles;
    this.i55_1 = placeholders;
    this.j55_1 = density;
    this.k55_1 = textDirection;
    this.l55_1 = drawStyle;
    this.m55_1 = blendMode;
    this.n55_1 = new ComputedStyle();
    var tmp = this;
    tmp.q55_1 = lazy_0(ParagraphBuilder$defaultFont$delegate$lambda(this));
  }
  protoOf(ParagraphBuilder_0).s55 = function (paragraph) {
    if (paragraph == null)
      return Unit_instance;
    prepareDefaultStyle(this);
    var foregroundPaint = this.n55_1.c54();
    paragraph.q3w(0, this.c55_1.length, foregroundPaint);
  };
  protoOf(ParagraphBuilder_0).k1z = function () {
    prepareDefaultStyle(this);
    this.p55_1 = makeOps(this, this.h55_1, this.i55_1);
    var pos = 0;
    var ps = textStyleToParagraphStyle(this, this.d55_1, this.n55_1);
    if (!(this.g55_1 === 2147483647)) {
      ps.l3x(this.g55_1);
      ps.m3x(this.f55_1);
    }
    var tmp = this.b55_1;
    var platformFontLoader = (tmp instanceof FontFamilyResolverImpl ? tmp : THROW_CCE()).b4u_1;
    var tmp_0;
    if (platformFontLoader instanceof SkiaFontLoader) {
      tmp_0 = platformFontLoader.a53();
    } else {
      throw IllegalStateException_init_$Create$('Unsupported font loader ' + toString(platformFontLoader));
    }
    var fontCollection = tmp_0;
    var pb = new ParagraphBuilder(ps, fontCollection);
    var addText = true;
    var tmp1_iterator = _get_ops__e6e97j(this).j();
    while (tmp1_iterator.k()) {
      var op = tmp1_iterator.l();
      if (addText && pos < op.n54()) {
        pb.w3w(toString(charSequenceSubSequence(this.c55_1, pos, op.n54())));
      }
      if (op instanceof StyleAdd) {
        var tmp_1 = op.m54_1.n53_1;
        var tmp3_elvis_lhs = op.m54_1.k53_1;
        var tmp_2 = tmp3_elvis_lhs == null ? Companion_getInstance_22().x4o_1 : tmp3_elvis_lhs;
        var tmp4_elvis_lhs = op.m54_1.l53_1;
        var tmp_3;
        var tmp_4 = tmp4_elvis_lhs;
        if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
          tmp_3 = Companion_getInstance_20().e4p_1;
        } else {
          tmp_3 = tmp4_elvis_lhs;
        }
        var tmp_5 = tmp_3;
        var tmp5_elvis_lhs = op.m54_1.m53_1;
        var tmp_6;
        var tmp_7 = tmp5_elvis_lhs;
        if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
          tmp_6 = Companion_getInstance_21().h4p_1;
        } else {
          tmp_6 = tmp5_elvis_lhs;
        }
        this.b55_1.l4u(tmp_1, tmp_2, tmp_5, tmp_6);
        pb.v3w(makeSkTextStyle(this, op.m54_1));
      } else {
        if (op instanceof PutPlaceholder) {
          var placeholderStyle = new PlaceholderStyle(op.p54_1, op.q54_1, toSkPlaceholderAlignment(op.o54_1.z54_1.e4m_1), BaselineMode_ALPHABETIC_getInstance(), 0.0);
          pb.x3w(placeholderStyle);
          addText = false;
        } else {
          if (op instanceof EndPlaceholder) {
            addText = true;
          }
        }
      }
      pos = op.n54();
    }
    if (addText && pos < this.c55_1.length) {
      pb.w3w(toString(charSequenceSubSequence(this.c55_1, pos, this.c55_1.length)));
    }
    return pb.k1z();
  };
  protoOf(ParagraphBuilder_0).f52 = function () {
    var tmp0 = this.q55_1;
    // Inline function 'kotlin.getValue' call
    defaultFont$factory();
    return tmp0.v();
  };
  protoOf(ParagraphBuilder_0).e52 = function (paragraph) {
    var metrics = this.f52().t3n();
    var tmp0_safe_receiver = this.n55_1.z53_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.ParagraphBuilder.emptyLineMetrics.<anonymous>' call
      tmp = tmp0_safe_receiver / this.n55_1.j53_1;
    }
    var tmp1_elvis_lhs = tmp;
    var heightMultiplier = tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs;
    var ascent = metrics.n3o_1 * heightMultiplier;
    var descent = metrics.o3o_1 * heightMultiplier;
    var baseline = paragraph.g3w();
    var height = descent - ascent;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [new LineMetrics(0, 0, 0, 0, true, -ascent, descent, ascent, height, 0.0, 0.0, baseline, 0)];
  };
  function copyWithDefaultFontSize(_this__u8e3s4, drawStyle) {
    drawStyle = drawStyle === VOID ? null : drawStyle;
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var fontSize = orDefaultFontSize(_this__u8e3s4.r4m_1);
    var tmp;
    if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4.x4m_1)) {
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var other = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4.x4m_1);
      checkArithmetic(fontSize);
      tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(fontSize), _TextUnit___get_value__impl__hpbx0k(fontSize) * other);
    } else {
      tmp = _this__u8e3s4.x4m_1;
    }
    var letterSpacing = tmp;
    return _this__u8e3s4.e4o(VOID, fontSize, VOID, VOID, VOID, VOID, VOID, letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, drawStyle);
  }
  function toSkPlaceholderAlignment(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    if (_this__u8e3s4 === Companion_getInstance_13().f4m_1) {
      tmp = PlaceholderAlignment_ABOVE_BASELINE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().j4m_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().k4m_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().l4m_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().g4m_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().h4m_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_13().i4m_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else {
      var message = 'Invalid PlaceholderVerticalAlign.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function toSkAlignment(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_30().i4l_1 ? Alignment_LEFT_getInstance() : _this__u8e3s4 === Companion_getInstance_30().j4l_1 ? Alignment_RIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_30().k4l_1 ? Alignment_CENTER_getInstance() : _this__u8e3s4 === Companion_getInstance_30().l4l_1 ? Alignment_JUSTIFY_getInstance() : _this__u8e3s4 === Companion_getInstance_30().m4l_1 ? Alignment_START_getInstance() : _this__u8e3s4 === Companion_getInstance_30().n4l_1 ? Alignment_END_getInstance() : Alignment_START_getInstance();
  }
  function toHeightMode(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_27().x4y_1 ? HeightMode_DISABLE_ALL_getInstance() : _this__u8e3s4 === Companion_getInstance_27().v4y_1 ? HeightMode_DISABLE_FIRST_ASCENT_getInstance() : _this__u8e3s4 === Companion_getInstance_27().w4y_1 ? HeightMode_DISABLE_LAST_DESCENT_getInstance() : _this__u8e3s4 === Companion_getInstance_27().y4y_1 ? HeightMode_ALL_getInstance() : HeightMode_DISABLE_ALL_getInstance();
  }
  function toSkDirection(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    switch (_this__u8e3s4.s2_1) {
      case 0:
        tmp = Direction_LTR_getInstance();
        break;
      case 1:
        tmp = Direction_RTL_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function resolveFontFamily(_this__u8e3s4, fontFamilyResolver) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp0_safe_receiver = _this__u8e3s4.j4r();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.text.platform.resolveFontFamily.<anonymous>' call
      var tmp0_elvis_lhs = _this__u8e3s4.g4r();
      var tmp_0 = tmp0_elvis_lhs == null ? Companion_getInstance_22().x4o_1 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = _this__u8e3s4.h4r();
      var tmp_1;
      var tmp_2 = tmp1_elvis_lhs;
      if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_20().e4p_1;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var tmp_3 = tmp_1;
      var tmp2_elvis_lhs = _this__u8e3s4.i4r();
      var tmp_4;
      var tmp_5 = tmp2_elvis_lhs;
      if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
        tmp_4 = Companion_getInstance_21().h4p_1;
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var tmp_6 = fontFamilyResolver.l4u(tmp0_safe_receiver, tmp_0, tmp_3, tmp_4).v();
      tmp = tmp_6 instanceof FontLoadResult ? tmp_6 : THROW_CCE();
    }
    return tmp;
  }
  function orDefaultFontSize(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    if (get_isUnspecified(_this__u8e3s4)) {
      tmp = get_DefaultFontSize_0();
    } else if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4)) {
      var tmp0 = get_DefaultFontSize_0();
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var other = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4);
      checkArithmetic(tmp0);
      tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(tmp0), _TextUnit___get_value__impl__hpbx0k(tmp0) * other);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function position$factory($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.y54_1;
    }, null);
  }
  function position$factory_0() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.n54();
    }, null);
  }
  function position$factory_1($b0) {
    return getPropertyCallableRef('position', 0, KProperty0, function () {
      return $b0.a55_1;
    }, null);
  }
  function position$factory_2() {
    return getPropertyCallableRef('position', 1, KProperty1, function (receiver) {
      return receiver.n54();
    }, null);
  }
  function defaultFont$factory() {
    return getPropertyCallableRef('defaultFont', 1, KProperty1, function (receiver) {
      return receiver.f52();
    }, null);
  }
  var properties_initialized_ParagraphBuilder_skiko_kt_5j6rti;
  function _init_properties_ParagraphBuilder_skiko_kt__fblzyk() {
    if (!properties_initialized_ParagraphBuilder_skiko_kt_5j6rti) {
      properties_initialized_ParagraphBuilder_skiko_kt_5j6rti = true;
      DefaultFontSize_0 = get_sp(16);
      skTextStylesCache = new NoCache();
    }
  }
  function invalidateParagraph($this, onlyForeground) {
    if (onlyForeground && $this.a52_1.h55_1.q()) {
      $this.c52_1 = true;
    } else {
      $this.b52_1 = null;
    }
  }
  function invalidateParagraph$default($this, onlyForeground, $super) {
    onlyForeground = onlyForeground === VOID ? false : onlyForeground;
    return invalidateParagraph($this, onlyForeground);
  }
  function ParagraphLayouter(text, textDirection, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.z51_1 = text;
    this.a52_1 = new ParagraphBuilder_0(fontFamilyResolver, this.z51_1, style, VOID, VOID, VOID, spanStyles, placeholders, density, textDirection);
    this.b52_1 = null;
    this.c52_1 = false;
    var tmp = this;
    tmp.d52_1 = NaN;
  }
  protoOf(ParagraphLayouter).l52 = function () {
    return this.a52_1.f52();
  };
  protoOf(ParagraphLayouter).g52 = function () {
    return this.a52_1.d55_1;
  };
  protoOf(ParagraphLayouter).e52 = function (paragraph) {
    return this.a52_1.e52(paragraph);
  };
  protoOf(ParagraphLayouter).i52 = function (maxLines, ellipsis) {
    if (!(this.a52_1.g55_1 === maxLines) || !(this.a52_1.f55_1 === ellipsis)) {
      this.a52_1.g55_1 = maxLines;
      this.a52_1.f55_1 = ellipsis;
      invalidateParagraph$default(this);
    }
  };
  protoOf(ParagraphLayouter).m52 = function (color) {
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = color;
    } else {
      // Inline function 'androidx.compose.ui.text.platform.ParagraphLayouter.setColor.<anonymous>' call
      tmp = this.a52_1.d55_1.x4c();
    }
    var actualColor = tmp;
    if (!equals(this.a52_1.d55_1.x4c(), actualColor)) {
      this.a52_1.d55_1 = this.a52_1.d55_1.c4r(actualColor);
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).q52 = function (brush, brushSize, alpha) {
    var actualSize = this.a52_1.e55_1;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (!equals(this.a52_1.d55_1.b4o(), brush)) {
      tmp_2 = true;
    } else {
      // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
      tmp_2 = _Size___get_packedValue__impl__7rlt1o(actualSize).equals(new Long(2143289344, 2143289344));
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = !sameValueAs(_Size___get_width__impl__58y75t(actualSize), _Size___get_width__impl__58y75t(brushSize));
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = !sameValueAs(_Size___get_height__impl__a04p02(actualSize), _Size___get_height__impl__a04p02(brushSize));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !sameValueAs(this.a52_1.d55_1.z3z(), alpha);
    }
    if (tmp) {
      this.a52_1.d55_1 = this.a52_1.d55_1.e4r(brush, alpha);
      this.a52_1.e55_1 = brushSize;
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).k52 = function (brushSize) {
    if (!equals(this.a52_1.e55_1, brushSize)) {
      this.a52_1.e55_1 = brushSize;
      var tmp;
      var tmp_0 = this.a52_1.d55_1.b4o();
      if (tmp_0 instanceof ShaderBrush) {
        tmp = true;
      } else {
        var tmp0 = this.a52_1.h55_1;
        var tmp$ret$0;
        $l$block_0: {
          // Inline function 'kotlin.collections.any' call
          var tmp_1;
          if (isInterface(tmp0, Collection)) {
            tmp_1 = tmp0.q();
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
          var _iterator__ex2g4s = tmp0.j();
          while (_iterator__ex2g4s.k()) {
            var element = _iterator__ex2g4s.l();
            // Inline function 'androidx.compose.ui.text.platform.ParagraphLayouter.setBrushSize.<anonymous>' call
            var tmp_2 = element.r4h_1.b4o();
            if (tmp_2 instanceof ShaderBrush) {
              tmp$ret$0 = true;
              break $l$block_0;
            }
          }
          tmp$ret$0 = false;
        }
        tmp = tmp$ret$0;
      }
      if (tmp) {
        invalidateParagraph(this, true);
      }
    }
  };
  protoOf(ParagraphLayouter).n52 = function (shadow, textDecoration) {
    if (!equals(this.a52_1.d55_1.r4r(), shadow) || !equals(this.a52_1.d55_1.q4r(), textDecoration)) {
      this.a52_1.d55_1 = this.a52_1.d55_1.c4r(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, textDecoration, shadow);
      invalidateParagraph$default(this);
    }
  };
  protoOf(ParagraphLayouter).o52 = function (drawStyle) {
    if (!equals(this.a52_1.l55_1, drawStyle)) {
      this.a52_1.l55_1 = drawStyle;
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).p52 = function (blendMode) {
    if (!(this.a52_1.m55_1 === blendMode)) {
      this.a52_1.m55_1 = blendMode;
      invalidateParagraph$default(this);
    }
  };
  protoOf(ParagraphLayouter).j52 = function (width) {
    var paragraph = this.b52_1;
    var tmp;
    if (!(paragraph == null)) {
      var layoutRequired = false;
      if (this.c52_1) {
        this.a52_1.s55(paragraph);
        this.c52_1 = false;
        paragraph.p3w();
        layoutRequired = true;
      }
      if (!sameValueAs(this.d52_1, width)) {
        this.d52_1 = width;
        layoutRequired = true;
      }
      if (layoutRequired) {
        paragraph.i3w(width);
      }
      tmp = paragraph;
    } else {
      paragraph = this.a52_1.k1z();
      paragraph.i3w(width);
      this.b52_1 = paragraph;
      this.c52_1 = false;
      return paragraph;
    }
    return tmp;
  };
  function sameValueAs(_this__u8e3s4, other) {
    // Inline function 'kotlin.math.abs' call
    var x = _this__u8e3s4 - other;
    return Math.abs(x) < 1.0E-5;
  }
  function get_GenericFontFamiliesMapping() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp0 = GenericFontFamiliesMapping$delegate;
    // Inline function 'kotlin.getValue' call
    GenericFontFamiliesMapping$factory();
    return tmp0.v();
  }
  var GenericFontFamiliesMapping$delegate;
  function FontLoadResult(typeface, aliases) {
    this.i54_1 = typeface;
    this.j54_1 = aliases;
  }
  var Platform_Unknown_instance;
  var Platform_Linux_instance;
  var Platform_Windows_instance;
  var Platform_MacOS_instance;
  var Platform_IOS_instance;
  var Platform_TvOS_instance;
  var Platform_WatchOS_instance;
  var Platform_Android_instance;
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_instance;
    Platform_entriesInitialized = true;
    Platform_Unknown_instance = new Platform('Unknown', 0);
    Platform_Linux_instance = new Platform('Linux', 1);
    Platform_Windows_instance = new Platform('Windows', 2);
    Platform_MacOS_instance = new Platform('MacOS', 3);
    Platform_IOS_instance = new Platform('IOS', 4);
    Platform_TvOS_instance = new Platform('TvOS', 5);
    Platform_WatchOS_instance = new Platform('WatchOS', 6);
    Platform_Android_instance = new Platform('Android', 7);
  }
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LoadedFont() {
  }
  function FontLoader() {
    this.t55_1 = new FontCache();
    this.u55_1 = createFontFamilyResolver(this.t55_1);
  }
  function ensureRegistered($this, typeface, key) {
    if (!$this.d53_1.m(key)) {
      $this.c53_1.d3z(typeface, key);
      $this.d53_1.e(key);
    }
  }
  function ensureRegistered_0($this, fontFamily) {
    var tmp;
    if (fontFamily instanceof FontListFontFamily) {
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp0 = fontFamily.k4y_1;
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var destination = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        if (element instanceof SystemFont) {
          destination.e(element);
        }
      }
      var fonts = destination;
      var tmp_0;
      if (fonts.n() === fontFamily.k4y_1.n()) {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(fonts, 10));
        var _iterator__ex2g4s_0 = fonts.j();
        while (_iterator__ex2g4s_0.k()) {
          var item = _iterator__ex2g4s_0.l();
          // Inline function 'androidx.compose.ui.text.platform.FontCache.ensureRegistered.<anonymous>' call
          var tmp$ret$2 = item.z55_1;
          destination_0.e(tmp$ret$2);
        }
        tmp_0 = destination_0;
      } else {
        throw IllegalArgumentException_init_$Create$("Don't load FontListFontFamily through ensureRegistered: " + toString(fontFamily));
      }
      tmp = tmp_0;
    } else {
      if (fontFamily instanceof LoadedFontFamily) {
        var tmp_1 = fontFamily.w55_1;
        var typeface = tmp_1 instanceof SkiaBackedTypeface ? tmp_1 : THROW_CCE();
        ensureRegistered($this, typeface.x55_1, typeface.y55_1);
        tmp = listOf_0(typeface.y55_1);
      } else {
        if (fontFamily instanceof GenericFontFamily) {
          tmp = get_aliases(fontFamily);
        } else {
          if (fontFamily instanceof DefaultFontFamily) {
            tmp = get_aliases(Companion_getInstance_16().l4p_1);
          } else {
            throw IllegalArgumentException_init_$Create$('Unknown font family type: ' + toString(fontFamily));
          }
        }
      }
    }
    return tmp;
  }
  function FontCache$load$lambda($font) {
    return function (it) {
      return loadTypeface($font);
    };
  }
  function FontCache() {
    this.b53_1 = FontCollection_init_$Create$();
    this.c53_1 = TypefaceFontProviderWithFallback_init_$Create$();
    this.d53_1 = HashSet_init_$Create$();
    this.e53_1 = new ExpireAfterAccessCache(new Long(-129542144, 13));
    this.b53_1.b3v(new FontMgrWithFallback(this.c53_1));
    this.b53_1.a3v(this.c53_1);
  }
  protoOf(FontCache).f53 = function (font) {
    var tmp = font.v4z();
    var typeface = this.e53_1.t4z(tmp, FontCache$load$lambda(font));
    ensureRegistered(this, typeface, font.v4z());
    return new FontLoadResult(typeface, listOf_0(font.v4z()));
  };
  protoOf(FontCache).z52 = function (fontFamily, fontWeight, fontStyle) {
    var aliases = ensureRegistered_0(this, fontFamily);
    var style = toSkFontStyle(fontStyle).p3p(fontWeight.s4n_1);
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(aliases);
    return new FontLoadResult(first_0(this.b53_1.d3v(tmp$ret$0, style)), aliases);
  };
  function SystemFont() {
  }
  function SkiaBackedTypeface() {
  }
  function get_aliases(_this__u8e3s4) {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp0_elvis_lhs = get_GenericFontFamiliesMapping().l2(_this__u8e3s4.e4t_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Unknown generic font family ' + _this__u8e3s4.e4t_1;
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function GenericFontFamiliesMapping$delegate$lambda() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp;
    switch (currentPlatform().s2_1) {
      case 1:
        tmp = mapOf([to(Companion_getInstance_16().l4p_1.e4t_1, listOf(['Noto Sans', 'DejaVu Sans', 'Arial'])), to(Companion_getInstance_16().m4p_1.e4t_1, listOf(['Noto Serif', 'DejaVu Serif', 'Times New Roman'])), to(Companion_getInstance_16().n4p_1.e4t_1, listOf(['Noto Sans Mono', 'DejaVu Sans Mono', 'Consolas'])), to(Companion_getInstance_16().o4p_1.e4t_1, listOf_0('Comic Sans MS'))]);
        break;
      case 2:
        tmp = mapOf([to(Companion_getInstance_16().l4p_1.e4t_1, listOf(['Segoe UI', 'Arial'])), to(Companion_getInstance_16().m4p_1.e4t_1, listOf_0('Times New Roman')), to(Companion_getInstance_16().n4p_1.e4t_1, listOf_0('Consolas')), to(Companion_getInstance_16().o4p_1.e4t_1, listOf_0('Comic Sans MS'))]);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        tmp = mapOf([to(Companion_getInstance_16().l4p_1.e4t_1, listOf(['.AppleSystemUIFont', 'Helvetica Neue', 'Helvetica'])), to(Companion_getInstance_16().m4p_1.e4t_1, listOf(['.AppleSystemUIFontSerif', 'Times', 'Times New Roman'])), to(Companion_getInstance_16().n4p_1.e4t_1, listOf(['.AppleSystemUIFontMonospaced', 'Menlo', 'Courier'])), to(Companion_getInstance_16().o4p_1.e4t_1, listOf(['Apple Chancery', 'Snell Roundhand']))]);
        break;
      case 7:
        tmp = mapOf([to(Companion_getInstance_16().l4p_1.e4t_1, listOf(['Roboto', 'Noto Sans'])), to(Companion_getInstance_16().m4p_1.e4t_1, listOf(['Roboto Serif', 'Noto Serif'])), to(Companion_getInstance_16().n4p_1.e4t_1, listOf(['Roboto Mono', 'Noto Sans Mono'])), to(Companion_getInstance_16().o4p_1.e4t_1, listOf_0('Comic Sans MS'))]);
        break;
      case 0:
        tmp = mapOf([to(Companion_getInstance_16().l4p_1.e4t_1, listOf_0('Arial')), to(Companion_getInstance_16().m4p_1.e4t_1, listOf_0('Times New Roman')), to(Companion_getInstance_16().n4p_1.e4t_1, listOf_0('Consolas')), to(Companion_getInstance_16().o4p_1.e4t_1, listOf_0('Comic Sans MS'))]);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function Platform_Unknown_getInstance() {
    Platform_initEntries();
    return Platform_Unknown_instance;
  }
  function Platform_Linux_getInstance() {
    Platform_initEntries();
    return Platform_Linux_instance;
  }
  function Platform_Windows_getInstance() {
    Platform_initEntries();
    return Platform_Windows_instance;
  }
  function Platform_MacOS_getInstance() {
    Platform_initEntries();
    return Platform_MacOS_instance;
  }
  function Platform_IOS_getInstance() {
    Platform_initEntries();
    return Platform_IOS_instance;
  }
  function Platform_Android_getInstance() {
    Platform_initEntries();
    return Platform_Android_instance;
  }
  function GenericFontFamiliesMapping$factory() {
    return getPropertyCallableRef('GenericFontFamiliesMapping', 0, KProperty0, function () {
      return get_GenericFontFamiliesMapping();
    }, null);
  }
  var properties_initialized_PlatformFont_skiko_kt_pdb6wl;
  function _init_properties_PlatformFont_skiko_kt__1fvojb() {
    if (!properties_initialized_PlatformFont_skiko_kt_pdb6wl) {
      properties_initialized_PlatformFont_skiko_kt_pdb6wl = true;
      GenericFontFamiliesMapping$delegate = lazy_0(GenericFontFamiliesMapping$delegate$lambda);
    }
  }
  function drawMultiParagraph(_this__u8e3s4, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    var tmp;
    if (alpha === VOID) {
      tmp = NaN;
    } else {
      tmp = alpha;
    }
    alpha = tmp;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_8().q41_1 : blendMode;
    canvas.t42();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = _this__u8e3s4.h4j_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.ui.text.platform.drawMultiParagraph.<anonymous>' call
        item.i4j_1.e4k(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
        canvas.w42(0.0, item.i4j_1.n3g());
      }
       while (inductionVariable <= last);
    canvas.u42();
  }
  function ActualParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    return new SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver);
  }
  function newLayouter($this) {
    return new ParagraphLayouter($this.p51_1, $this.v51_1, $this.q51_1, $this.r51_1, $this.s51_1, $this.t51_1, $this.u51_1);
  }
  function SkiaParagraphIntrinsics(text, style, spanStyles, placeholders, density, fontFamilyResolver) {
    this.p51_1 = text;
    this.q51_1 = style;
    this.r51_1 = spanStyles;
    this.s51_1 = placeholders;
    this.t51_1 = density;
    this.u51_1 = fontFamilyResolver;
    this.v51_1 = resolveTextDirection_1(this.p51_1, this.q51_1.u4r(), this.q51_1.o4r());
    this.w51_1 = newLayouter(this);
    this.x51_1 = 0.0;
    this.y51_1 = 0.0;
    var tmp = ensureNotNull(this.w51_1);
    var para = tmp.j52(Infinity);
    var tmp_0 = this;
    // Inline function 'kotlin.math.ceil' call
    var x = para.e3w();
    tmp_0.x51_1 = Math.ceil(x);
    var tmp_1 = this;
    // Inline function 'kotlin.math.ceil' call
    var x_0 = para.f3w();
    tmp_1.y51_1 = Math.ceil(x_0);
  }
  protoOf(SkiaParagraphIntrinsics).h52 = function () {
    var tmp0_elvis_lhs = this.w51_1;
    var layouter = tmp0_elvis_lhs == null ? newLayouter(this) : tmp0_elvis_lhs;
    this.w51_1 = null;
    return layouter;
  };
  protoOf(SkiaParagraphIntrinsics).e3w = function () {
    return this.x51_1;
  };
  protoOf(SkiaParagraphIntrinsics).f3w = function () {
    return this.y51_1;
  };
  function resolveTextDirection_1(text, textDirection, localeList) {
    textDirection = textDirection === VOID ? null : textDirection;
    localeList = localeList === VOID ? null : localeList;
    var tmp;
    var tmp_0 = textDirection;
    if ((tmp_0 == null ? null : new TextDirection(tmp_0)) == null) {
      tmp = Companion_getInstance_32().y4k_1;
    } else {
      tmp = textDirection;
    }
    var tmp1_subject = tmp;
    var tmp_1;
    if (tmp1_subject === Companion_getInstance_32().w4k_1) {
      tmp_1 = ResolvedTextDirection_Ltr_getInstance();
    } else if (tmp1_subject === Companion_getInstance_32().x4k_1) {
      tmp_1 = ResolvedTextDirection_Rtl_getInstance();
    } else if (tmp1_subject === Companion_getInstance_32().y4k_1 ? true : tmp1_subject === Companion_getInstance_32().b4l_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda(localeList));
    } else if (tmp1_subject === Companion_getInstance_32().z4k_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_0);
    } else if (tmp1_subject === Companion_getInstance_32().a4l_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_1);
    } else {
      var message = 'Invalid TextDirection.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp_1;
  }
  function contentBasedTextDirection(text, fallback) {
    var tmp0_subject = firstStrongDirectionType(text);
    return tmp0_subject === Companion_getInstance_37().q4z_1 ? ResolvedTextDirection_Ltr_getInstance() : tmp0_subject === Companion_getInstance_37().r4z_1 ? ResolvedTextDirection_Rtl_getInstance() : fallback();
  }
  function localeBasedTextDirection(locale) {
    var tmp;
    if (isRtl((locale == null ? Companion_instance_11.x1r() : locale).v4n_1)) {
      tmp = ResolvedTextDirection_Rtl_getInstance();
    } else {
      tmp = ResolvedTextDirection_Ltr_getInstance();
    }
    return tmp;
  }
  function resolveTextDirection$lambda($localeList) {
    return function () {
      var tmp0_safe_receiver = $localeList;
      return localeBasedTextDirection(tmp0_safe_receiver == null ? null : firstOrNull_0(tmp0_safe_receiver));
    };
  }
  function resolveTextDirection$lambda_0() {
    return ResolvedTextDirection_Ltr_getInstance();
  }
  function resolveTextDirection$lambda_1() {
    return ResolvedTextDirection_Rtl_getInstance();
  }
  function clearShader($this) {
    $this.f54_1 = null;
    $this.e54_1 = null;
    $this.g54_1 = null;
    $this.x3q(null);
  }
  function SkiaTextPaint$setBrush$lambda($brush, $size) {
    return function () {
      return $brush.s42($size);
    };
  }
  function SkiaTextPaint() {
    this.d54_1 = Paint();
    this.e54_1 = null;
    this.f54_1 = null;
    this.g54_1 = null;
  }
  protoOf(SkiaTextPaint).y4c = function (_set____db54di) {
    this.d54_1.y4c(_set____db54di);
  };
  protoOf(SkiaTextPaint).z3z = function () {
    return this.d54_1.z3z();
  };
  protoOf(SkiaTextPaint).c4d = function (_set____db54di) {
    this.d54_1.c4d(_set____db54di);
  };
  protoOf(SkiaTextPaint).d4d = function () {
    return this.d54_1.d4d();
  };
  protoOf(SkiaTextPaint).w4c = function (_set____db54di) {
    this.d54_1.w4c(_set____db54di);
  };
  protoOf(SkiaTextPaint).x4c = function () {
    return this.d54_1.x4c();
  };
  protoOf(SkiaTextPaint).a4d = function (_set____db54di) {
    this.d54_1.a4d(_set____db54di);
  };
  protoOf(SkiaTextPaint).b4d = function () {
    return this.d54_1.b4d();
  };
  protoOf(SkiaTextPaint).e4d = function (_set____db54di) {
    this.d54_1.e4d(_set____db54di);
  };
  protoOf(SkiaTextPaint).f4d = function () {
    return this.d54_1.f4d();
  };
  protoOf(SkiaTextPaint).u4c = function (_set____db54di) {
    this.d54_1.u4c(_set____db54di);
  };
  protoOf(SkiaTextPaint).v4c = function () {
    return this.d54_1.v4c();
  };
  protoOf(SkiaTextPaint).x3q = function (_set____db54di) {
    this.d54_1.x3q(_set____db54di);
  };
  protoOf(SkiaTextPaint).y3q = function () {
    return this.d54_1.y3q();
  };
  protoOf(SkiaTextPaint).o4c = function (_set____db54di) {
    this.d54_1.o4c(_set____db54di);
  };
  protoOf(SkiaTextPaint).p4c = function () {
    return this.d54_1.p4c();
  };
  protoOf(SkiaTextPaint).s4c = function (_set____db54di) {
    this.d54_1.s4c(_set____db54di);
  };
  protoOf(SkiaTextPaint).t4c = function () {
    return this.d54_1.t4c();
  };
  protoOf(SkiaTextPaint).q4c = function (_set____db54di) {
    this.d54_1.q4c(_set____db54di);
  };
  protoOf(SkiaTextPaint).r4c = function () {
    return this.d54_1.r4c();
  };
  protoOf(SkiaTextPaint).s3q = function (_set____db54di) {
    this.d54_1.s3q(_set____db54di);
  };
  protoOf(SkiaTextPaint).t3q = function () {
    return this.d54_1.t3q();
  };
  protoOf(SkiaTextPaint).i4c = function (_set____db54di) {
    this.d54_1.i4c(_set____db54di);
  };
  protoOf(SkiaTextPaint).b4h = function () {
    return this.d54_1.b4h();
  };
  protoOf(SkiaTextPaint).q52 = function (brush, size, alpha) {
    if (brush == null) {
      clearShader(this);
    } else {
      if (brush instanceof SolidColor) {
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        var this_0 = this.x4c();
        if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
          this.w4c(modulate(brush.h4z_1, alpha));
          clearShader(this);
        }
      } else {
        if (brush instanceof ShaderBrush) {
          var tmp;
          if (!equals(this.e54_1, brush)) {
            tmp = true;
          } else {
            var tmp_0 = this.g54_1;
            tmp = !equals(tmp_0 == null ? null : new Size_0(tmp_0), new Size_0(size));
          }
          if (tmp) {
            // Inline function 'androidx.compose.ui.geometry.isSpecified' call
            if (!_Size___get_packedValue__impl__7rlt1o(size).equals(new Long(2143289344, 2143289344))) {
              this.e54_1 = brush;
              this.g54_1 = size;
              var tmp_1 = this;
              tmp_1.f54_1 = derivedStateOf(SkiaTextPaint$setBrush$lambda(brush, size));
            }
          }
          var tmp1_safe_receiver = this.f54_1;
          this.x3q(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v());
          this.y4c(isNaN_0(alpha) ? 1.0 : coerceIn_0(alpha, 0.0, 1.0));
        }
      }
    }
  };
  protoOf(SkiaTextPaint).o52 = function (drawStyle) {
    if (equals(drawStyle, Fill_getInstance()) ? true : drawStyle == null) {
      this.i4c(Companion_getInstance_9().d48_1);
    } else {
      if (drawStyle instanceof Stroke) {
        this.i4c(Companion_getInstance_9().e48_1);
        this.s3q(drawStyle.j4c_1);
        this.q4c(drawStyle.k4c_1);
        this.s4c(drawStyle.m4c_1);
        this.o4c(drawStyle.l4c_1);
        this.u4c(drawStyle.n4c_1);
      }
    }
  };
  function _LineBreak___init__impl__o5i11q(mask) {
    return mask;
  }
  function Companion_27() {
    Companion_instance_28 = this;
    this.p4l_1 = _LineBreak___init__impl__o5i11q(1);
    this.q4l_1 = _LineBreak___init__impl__o5i11q(2);
    this.r4l_1 = _LineBreak___init__impl__o5i11q(3);
    this.s4l_1 = _LineBreak___init__impl__o5i11q(4);
  }
  var Companion_instance_28;
  function Companion_getInstance_40() {
    if (Companion_instance_28 == null)
      new Companion_27();
    return Companion_instance_28;
  }
  function LineBreak__toString_impl_mphhli($this) {
    return 'LineBreak(mask=' + $this + ')';
  }
  function LineBreak__hashCode_impl_ybksn($this) {
    return $this;
  }
  function LineBreak__equals_impl_1r98t9($this, other) {
    if (!(other instanceof LineBreak))
      return false;
    if (!($this === (other instanceof LineBreak ? other.a56_1 : THROW_CCE())))
      return false;
    return true;
  }
  function LineBreak(mask) {
    Companion_getInstance_40();
    this.a56_1 = mask;
  }
  protoOf(LineBreak).toString = function () {
    return LineBreak__toString_impl_mphhli(this.a56_1);
  };
  protoOf(LineBreak).hashCode = function () {
    return LineBreak__hashCode_impl_ybksn(this.a56_1);
  };
  protoOf(LineBreak).equals = function (other) {
    return LineBreak__equals_impl_1r98t9(this.a56_1, other);
  };
  function Companion_28() {
    Companion_instance_29 = this;
    this.a4m_1 = new TextMotion();
    this.b4m_1 = new TextMotion();
  }
  var Companion_instance_29;
  function Companion_getInstance_41() {
    if (Companion_instance_29 == null)
      new Companion_28();
    return Companion_instance_29;
  }
  function TextMotion() {
    Companion_getInstance_41();
  }
  function get_rtlLanguagesSet() {
    _init_properties_JsPlatformLocale_web_kt__p8iahw();
    return rtlLanguagesSet;
  }
  var rtlLanguagesSet;
  function get_language(_this__u8e3s4) {
    _init_properties_JsPlatformLocale_web_kt__p8iahw();
    return _this__u8e3s4.language;
  }
  function getLanguageTag(_this__u8e3s4) {
    _init_properties_JsPlatformLocale_web_kt__p8iahw();
    return _this__u8e3s4.baseName;
  }
  function createPlatformLocaleDelegate() {
    _init_properties_JsPlatformLocale_web_kt__p8iahw();
    return new createPlatformLocaleDelegate$1();
  }
  function toIntlLocale(_this__u8e3s4) {
    _init_properties_JsPlatformLocale_web_kt__p8iahw();
    return parseLanguageTagToIntlLocale(_this__u8e3s4);
  }
  function parseLanguageTagToIntlLocale(languageTag) {
    _init_properties_JsPlatformLocale_web_kt__p8iahw();
    return new Intl.Locale(languageTag);
  }
  function isRtl(_this__u8e3s4) {
    _init_properties_JsPlatformLocale_web_kt__p8iahw();
    return get_rtlLanguagesSet().m(get_language(_this__u8e3s4));
  }
  function createPlatformLocaleDelegate$1() {
  }
  protoOf(createPlatformLocaleDelegate$1).x1r = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = userPreferredLanguages();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.j();
    while (_iterator__ex2g4s.k()) {
      var item = _iterator__ex2g4s.l();
      // Inline function 'androidx.compose.ui.text.intl.<no name provided>.<get-current>.<anonymous>' call
      var tmp$ret$0 = new Locale(toIntlLocale(item));
      destination.e(tmp$ret$0);
    }
    return new LocaleList(destination);
  };
  protoOf(createPlatformLocaleDelegate$1).q4y = function (languageTag) {
    return toIntlLocale(languageTag);
  };
  var properties_initialized_JsPlatformLocale_web_kt_cqhywu;
  function _init_properties_JsPlatformLocale_web_kt__p8iahw() {
    if (!properties_initialized_JsPlatformLocale_web_kt_cqhywu) {
      properties_initialized_JsPlatformLocale_web_kt_cqhywu = true;
      rtlLanguagesSet = setOf(['ar', 'fa', 'he', 'iw', 'ji', 'ur', 'yi']);
    }
  }
  function currentPlatform() {
    switch (get_hostOs().s2_1) {
      case 0:
        return Platform_Android_getInstance();
      case 4:
        return Platform_IOS_getInstance();
      case 3:
        return Platform_MacOS_getInstance();
      case 1:
        return Platform_Linux_getInstance();
      case 2:
        return Platform_Windows_getInstance();
      default:
        return Platform_Unknown_getInstance();
    }
  }
  function loadTypeface(font) {
    if (!(font instanceof PlatformFont)) {
      throw IllegalArgumentException_init_$Create$('Unsupported font type: ' + toString(font));
    }
    var tmp;
    if (font instanceof LoadedFont) {
      var tmp1_elvis_lhs = Companion_getInstance_10().d3p_1.h3p(Companion_getInstance_11().d3n(font.b56_1()));
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var message = 'loadTypeface makeFromData failed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (font instanceof SystemFont) {
        var tmp2_elvis_lhs = Companion_getInstance_10().d3p_1.i3p(font.u4z(), get_skFontStyle(font));
        var tmp_1;
        if (tmp2_elvis_lhs == null) {
          var message_0 = 'loadTypeface legacyMakeTypeface failed';
          throw IllegalStateException_init_$Create$(toString(message_0));
        } else {
          tmp_1 = tmp2_elvis_lhs;
        }
        tmp = tmp_1;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function get_skFontStyle(_this__u8e3s4) {
    return FontStyle_init_$Create$(_this__u8e3s4.o3p().s4n_1, 5, _this__u8e3s4.x4s() === Companion_getInstance_20().f4p_1 ? FontSlant_ITALIC_getInstance() : FontSlant_UPRIGHT_getInstance());
  }
  //region block: post-declaration
  protoOf(PlatformResolveInterceptor$Companion$Default$1).m4u = interceptFontFamily;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).n4u = interceptFontWeight;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).o4u = interceptFontStyle;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).p4u = interceptFontSynthesis;
  protoOf(Unspecified).h4o = merge;
  protoOf(Unspecified).k4o = takeOrElse;
  protoOf(BrushStyle).h4o = merge;
  protoOf(BrushStyle).k4o = takeOrElse;
  protoOf(ColorStyle).h4o = merge;
  protoOf(ColorStyle).k4o = takeOrElse;
  protoOf(SkiaParagraph).g51 = paint$default;
  protoOf(SkiaParagraph).h51 = paint$default_0;
  protoOf(SkiaParagraphIntrinsics).h4l = get_hasStaleResolvedFonts;
  //endregion
  //region block: init
  DefaultCacheSize = 8;
  Companion_instance_11 = new Companion_10();
  Unspecified_instance = new Unspecified();
  Companion_instance_21 = new Companion_20();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FontStyle;
  _.$_$.b = createFontFamilyResolver_0;
  _.$_$.c = TextInputService;
  _.$_$.d = FontLoader;
  _.$_$.e = LineHeightStyle;
  _.$_$.f = TextAlign;
  _.$_$.g = TextOverflow;
  _.$_$.h = MultiParagraphIntrinsics;
  _.$_$.i = MultiParagraph;
  _.$_$.j = ParagraphIntrinsics_0;
  _.$_$.k = Paragraph;
  _.$_$.l = Paragraph_0;
  _.$_$.m = TextLayoutResult;
  _.$_$.n = TextRange_0;
  _.$_$.o = TextRange;
  _.$_$.p = resolveDefaults;
  _.$_$.q = AnnotatedString_init_$Create$;
  _.$_$.r = TextLayoutInput_init_$Create$;
  _.$_$.s = TextStyle_init_$Create$_1;
  _.$_$.t = _TextOverflow___init__impl__obguoe;
  _.$_$.u = TextOverflow__hashCode_impl_kqdwgt;
  _.$_$.v = TextOverflow__toString_impl_10s0c2;
  _.$_$.w = _TextOverflow___get_value__impl__vugm5i;
  _.$_$.x = _TextRange___get_end__impl__gcdxpp;
  _.$_$.y = _TextRange___get_start__impl__ww4t90;
  _.$_$.z = Companion_getInstance_16;
  _.$_$.a1 = Companion_getInstance_22;
  _.$_$.b1 = Companion_getInstance_28;
  _.$_$.c1 = Companion_getInstance_27;
  _.$_$.d1 = Companion_getInstance_30;
  _.$_$.e1 = Companion_getInstance_31;
  _.$_$.f1 = Companion_getInstance_36;
  _.$_$.g1 = Companion_getInstance_15;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-text.js.map
