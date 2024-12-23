(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-ui-ui-graphics.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-runtime-runtime-saveable.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-runtime-runtime-saveable.js'), require('./skiko-kjs.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime-saveable' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime-saveable' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    globalThis['compose-multiplatform-core-compose-foundation-foundation'] = factory(typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['compose-multiplatform-core-compose-runtime-runtime-saveable'], globalThis['skiko-kjs']);
  }
}(function (_, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_runtime_runtime_saveable, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var get_RectangleShape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u;
  var VOID = kotlin_kotlin.$_$.e;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.x2;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.z2;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.w1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n2;
  var protoOf = kotlin_kotlin.$_$.kb;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a2;
  var hashCode = kotlin_kotlin.$_$.ja;
  var getNumberHashCode = kotlin_kotlin.$_$.ga;
  var equals = kotlin_kotlin.$_$.ba;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var drawOutline = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e1;
  var drawOutline_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f1;
  var observeReads = kotlin_org_jetbrains_compose_ui_ui.$_$.o2;
  var ensureNotNull = kotlin_kotlin.$_$.pf;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.u3;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var invalidateDraw = kotlin_org_jetbrains_compose_ui_ui.$_$.k2;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.q1;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.r1;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l;
  var Dp__toString_impl_kcddez = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var toString = kotlin_kotlin.$_$.ob;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o2;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r2;
  var numberToInt = kotlin_kotlin.$_$.hb;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var ImageBitmapConfig = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n;
  var Canvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var CanvasDrawScope = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l2;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c;
  var get_isSimple = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o;
  var _Size___get_minDimension__impl__4iso0r = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.xf;
  var Rectangle = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q;
  var Rounded = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var Generic = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m2;
  var _CornerRadius___get_x__impl__1594cn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s;
  var DelegatingNode = kotlin_org_jetbrains_compose_ui_ui.$_$.p1;
  var CacheDrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.a;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t;
  var toString_0 = kotlin_kotlin.$_$.ig;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j2;
  var _CornerRadius___get_y__impl__tyvleu = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var CornerRadius = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a;
  var RoundRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.s4;
  var composed = kotlin_org_jetbrains_compose_ui_ui.$_$.w3;
  var isInterface = kotlin_kotlin.$_$.za;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var Role = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var getBooleanHashCode = kotlin_kotlin.$_$.ea;
  var getStringHashCode = kotlin_kotlin.$_$.ia;
  var Role__hashCode_impl_ucjza4 = kotlin_org_jetbrains_compose_ui_ui.$_$.g4;
  var CoroutineImpl = kotlin_kotlin.$_$.l9;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var initMetadataForLambda = kotlin_kotlin.$_$.oa;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var initMetadataForObject = kotlin_kotlin.$_$.pa;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.r;
  var cancelAndJoin = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ma;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var invalidateSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.n2;
  var get_center = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui.$_$.k4;
  var PointerEventPass_Main_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.z3;
  var SuspendingPointerInputModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.s;
  var get_key = kotlin_org_jetbrains_compose_ui_ui.$_$.n;
  var Key = kotlin_org_jetbrains_compose_ui_ui.$_$.m;
  var set_role = kotlin_org_jetbrains_compose_ui_ui.$_$.j3;
  var onClick = kotlin_org_jetbrains_compose_ui_ui.$_$.h3;
  var disabled = kotlin_org_jetbrains_compose_ui_ui.$_$.c3;
  var interceptOutOfBoundsChildEvents = kotlin_org_jetbrains_compose_ui_ui.$_$.y1;
  var sharePointerInputWithSiblings = kotlin_org_jetbrains_compose_ui_ui.$_$.b2;
  var onDensityChange = kotlin_org_jetbrains_compose_ui_ui.$_$.z1;
  var onViewConfigurationChange = kotlin_org_jetbrains_compose_ui_ui.$_$.a2;
  var get_shouldClearDescendantSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.d2;
  var PointerInputModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.c2;
  var KeyInputModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.l;
  var FocusEventModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.e;
  var SemanticsModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.f2;
  var TraversableNode = kotlin_org_jetbrains_compose_ui_ui.$_$.g2;
  var requestFocus = kotlin_org_jetbrains_compose_ui_ui.$_$.g;
  var traverseAncestors = kotlin_org_jetbrains_compose_ui_ui.$_$.r2;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var funFocusTargetModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.f;
  var set_focused = kotlin_org_jetbrains_compose_ui_ui.$_$.d3;
  var requestFocus_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.i3;
  var get_shouldMergeDescendantSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.e2;
  var GlobalPositionAwareModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.s1;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var get_LocalPinnableContainer = kotlin_org_jetbrains_compose_ui_ui.$_$.j1;
  var currentValueOf = kotlin_org_jetbrains_compose_ui_ui.$_$.h2;
  var CompositionLocalConsumerModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.o1;
  var findNearestAncestor = kotlin_org_jetbrains_compose_ui_ui.$_$.j2;
  var findNearestAncestor_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.i2;
  var initMetadataForInterface = kotlin_kotlin.$_$.na;
  var FunctionAdapter = kotlin_kotlin.$_$.p9;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h2;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.t3;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.s3;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.v3;
  var DrawModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.b;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui.$_$.m4;
  var AwaitPointerEventScope = kotlin_org_jetbrains_compose_ui_ui.$_$.p;
  var changedToUpIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.v;
  var isOutOfBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.x;
  var PointerEventPass_Final_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.y3;
  var PointerEventTimeoutCancellationException = kotlin_org_jetbrains_compose_ui_ui.$_$.q;
  var positionChangedIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.c1;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var CancellationException = kotlin_kotlin.$_$.v8;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var changedToDownIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.t;
  var changedToDown = kotlin_org_jetbrains_compose_ui_ui.$_$.u;
  var get_isPrimaryPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.y;
  var changedToUp = kotlin_org_jetbrains_compose_ui_ui.$_$.w;
  var BufferOverflow_DROP_OLDEST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var MutableSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var requireLayoutCoordinates = kotlin_org_jetbrains_compose_ui_ui.$_$.q2;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var toRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var RoundRect_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h;
  var TextOverflow = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_org_jetbrains_compose_ui_ui_text.$_$.w;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g1;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f1;
  var rememberSaveable = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.d;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c2;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.c3;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.k;
  var get_LocalFontFamilyResolver = kotlin_org_jetbrains_compose_ui_ui.$_$.t2;
  var AnnotatedString_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.q;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.x3;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui.$_$.o4;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var Saver = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.a;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.k1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var TextRange = kotlin_org_jetbrains_compose_ui_ui_text.$_$.n;
  var charSequenceGet = kotlin_kotlin.$_$.w9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var charSequenceLength = kotlin_kotlin.$_$.x9;
  var roundToInt = kotlin_kotlin.$_$.tb;
  var toRawBits = kotlin_kotlin.$_$.hg;
  var toLong = kotlin_kotlin.$_$.mb;
  var Long = kotlin_kotlin.$_$.ue;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.o3;
  var floatFromBits = kotlin_kotlin.$_$.da;
  var initMetadataForCompanion = kotlin_kotlin.$_$.la;
  var Companion_instance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var coerceAtLeast = kotlin_kotlin.$_$.yb;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p1;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var coerceIn = kotlin_kotlin.$_$.dc;
  var resolveDefaults = kotlin_org_jetbrains_compose_ui_ui_text.$_$.p;
  var Density_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var Paragraph = kotlin_org_jetbrains_compose_ui_ui_text.$_$.l;
  var isNaN_0 = kotlin_kotlin.$_$.tf;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var coerceAtMost = kotlin_kotlin.$_$.ac;
  var repeat = kotlin_kotlin.$_$.qd;
  var emptyList = kotlin_kotlin.$_$.r5;
  var TextLayoutInput_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.r;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b1;
  var TextLayoutResult = kotlin_org_jetbrains_compose_ui_ui_text.$_$.m;
  var MultiParagraphIntrinsics = kotlin_org_jetbrains_compose_ui_ui_text.$_$.h;
  var MultiParagraph = kotlin_org_jetbrains_compose_ui_ui_text.$_$.i;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var ParagraphIntrinsics = kotlin_org_jetbrains_compose_ui_ui_text.$_$.j;
  var Paragraph_0 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.k;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var TextOverflow__hashCode_impl_kqdwgt = kotlin_org_jetbrains_compose_ui_ui_text.$_$.u;
  var TextOverflow__toString_impl_10s0c2 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.v;
  var invalidateMeasurement = kotlin_org_jetbrains_compose_ui_ui.$_$.m2;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.v1;
  var pointerHoverIcon = kotlin_org_jetbrains_compose_ui_ui.$_$.a1;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var Offset__plus_impl_c78cg0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.z;
  var set_text = kotlin_org_jetbrains_compose_ui_ui.$_$.n3;
  var set_textSubstitution = kotlin_org_jetbrains_compose_ui_ui.$_$.o3;
  var set_isShowingTextSubstitution = kotlin_org_jetbrains_compose_ui_ui.$_$.g3;
  var setTextSubstitution = kotlin_org_jetbrains_compose_ui_ui.$_$.l3;
  var showTextSubstitution = kotlin_org_jetbrains_compose_ui_ui.$_$.m3;
  var clearTextSubstitution = kotlin_org_jetbrains_compose_ui_ui.$_$.b3;
  var getTextLayoutResult = kotlin_org_jetbrains_compose_ui_ui.$_$.e3;
  var invalidateLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.l2;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var get_FirstBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.f1;
  var get_LastBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.g1;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.e1;
  var Companion_getInstance_14 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.b3;
  var TextRange_0 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.o;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.h;
  var lazy = kotlin_kotlin.$_$.vf;
  var _TextRange___get_start__impl__ww4t90 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.y;
  var _TextRange___get_end__impl__gcdxpp = kotlin_org_jetbrains_compose_ui_ui_text.$_$.x;
  var KProperty0 = kotlin_kotlin.$_$.jc;
  var THROW_ISE = kotlin_kotlin.$_$.af;
  var getLocalDelegateReference = kotlin_kotlin.$_$.fa;
  var Offset__minus_impl_hoj2c0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var pointerInput = kotlin_org_jetbrains_compose_ui_ui.$_$.b1;
  var positionChange = kotlin_org_jetbrains_compose_ui_ui.$_$.d1;
  var get_isShiftPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.z;
  var first = kotlin_kotlin.$_$.b6;
  var Enum = kotlin_kotlin.$_$.pe;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b2;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k;
  var get_type = kotlin_org_jetbrains_compose_ui_ui.$_$.o;
  var Companion_getInstance_15 = kotlin_org_jetbrains_compose_ui_ui.$_$.j4;
  var Companion_getInstance_16 = kotlin_org_jetbrains_compose_ui_ui.$_$.i4;
  var get_LocalSystemTheme = kotlin_org_jetbrains_compose_ui_ui.$_$.r3;
  var SystemTheme_Dark_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.a4;
  var get_LocalInputModeManager = kotlin_org_jetbrains_compose_ui_ui.$_$.u2;
  var InputMode = kotlin_org_jetbrains_compose_ui_ui.$_$.e1;
  var Companion_getInstance_17 = kotlin_org_jetbrains_compose_ui_ui.$_$.n4;
  var flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var LayoutCoordinates = kotlin_org_jetbrains_compose_ui_ui.$_$.h1;
  var Companion_getInstance_18 = kotlin_org_jetbrains_skiko_skiko.$_$.z3;
  var Companion_getInstance_19 = kotlin_org_jetbrains_compose_ui_ui.$_$.l4;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(BackgroundElement, 'BackgroundElement', VOID, ModifierNodeElement);
  initMetadataForClass(BackgroundNode, 'BackgroundNode', VOID, Node, [DrawModifierNode, Node]);
  initMetadataForClass(BorderModifierNodeElement, 'BorderModifierNodeElement', VOID, ModifierNodeElement);
  initMetadataForClass(BorderModifierNode, 'BorderModifierNode', VOID, DelegatingNode);
  initMetadataForClass(BorderCache, 'BorderCache', BorderCache);
  initMetadataForClass(ClickableElement, 'ClickableElement', VOID, ModifierNodeElement);
  initMetadataForLambda(ClickableNode$clickPointerInput$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(AbstractClickableNode, 'AbstractClickableNode', VOID, DelegatingNode, [DelegatingNode, PointerInputModifierNode, KeyInputModifierNode, FocusEventModifierNode, SemanticsModifierNode, TraversableNode], [0, 1]);
  initMetadataForClass(ClickableNode, 'ClickableNode', VOID, AbstractClickableNode, VOID, [0, 1]);
  initMetadataForLambda(AbstractClickableNode$handlePressInteraction$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(TraverseKey, 'TraverseKey');
  initMetadataForLambda(AbstractClickableNode$onPointerEvent$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$onPointerEvent$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$onPointerEvent$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$onKeyEvent$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$onKeyEvent$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$handlePressInteraction$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$emitHoverEnter$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$emitHoverExit$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($handlePressInteractionCOROUTINE$0, CoroutineImpl);
  initMetadataForLambda(FocusableNode$onFocusEvent$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(FocusableNode, 'FocusableNode', VOID, DelegatingNode, [DelegatingNode, FocusEventModifierNode, SemanticsModifierNode, GlobalPositionAwareModifierNode]);
  initMetadataForLambda(FocusableInteractionNode$emitWithFallback$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(FocusableInteractionNode, 'FocusableInteractionNode', VOID, Node);
  initMetadataForClass(FocusablePinnableContainerNode, 'FocusablePinnableContainerNode', FocusablePinnableContainerNode, Node, [Node, CompositionLocalConsumerModifierNode]);
  initMetadataForObject(TraverseKey_0, 'TraverseKey');
  initMetadataForClass(FocusedBoundsObserverNode, 'FocusedBoundsObserverNode', VOID, Node, [Node, TraversableNode]);
  initMetadataForObject(TraverseKey_1, 'TraverseKey');
  initMetadataForClass(FocusedBoundsNode, 'FocusedBoundsNode', FocusedBoundsNode, Node, [Node, TraversableNode, GlobalPositionAwareModifierNode]);
  function rememberUpdatedInstance(interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.j25(1257603829);
    sourceInformation($composer_0, 'C(rememberUpdatedInstance):Indication.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(1257603829, $changed, -1, 'androidx.compose.foundation.Indication.rememberUpdatedInstance (Indication.kt:83)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.l25();
    return NoIndicationInstance_instance;
  }
  initMetadataForInterface(Indication, 'Indication');
  initMetadataForLambda(DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(DefaultDebugIndicationInstance, 'DefaultDebugIndicationInstance', VOID, Node, [Node, DrawModifierNode]);
  initMetadataForInterface(IndicationNodeFactory, 'IndicationNodeFactory', VOID, VOID, [Indication]);
  initMetadataForObject(DefaultDebugIndication, 'DefaultDebugIndication', VOID, VOID, [IndicationNodeFactory]);
  initMetadataForObject(NoIndicationInstance, 'NoIndicationInstance');
  initMetadataForClass(IndicationModifierElement, 'IndicationModifierElement', VOID, ModifierNodeElement);
  initMetadataForClass(IndicationModifier, 'IndicationModifier', VOID, VOID, [DrawModifier]);
  initMetadataForClass(IndicationModifierNode, 'IndicationModifierNode', VOID, DelegatingNode);
  initMetadataForLambda(awaitLongPressOrCancellation$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($dragCOROUTINE$5, CoroutineImpl);
  initMetadataForCoroutine($awaitLongPressOrCancellationCOROUTINE$6, CoroutineImpl);
  initMetadataForCoroutine($awaitDragOrCancellationCOROUTINE$7, CoroutineImpl);
  initMetadataForLambda(awaitEachGesture$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($awaitAllPointersUpCOROUTINE$11, CoroutineImpl);
  initMetadataForObject(TraverseKey_2, 'TraverseKey');
  initMetadataForClass(ScrollableContainerNode, 'ScrollableContainerNode', VOID, Node, [Node, TraversableNode]);
  initMetadataForInterface(PressGestureScope, 'PressGestureScope', VOID, VOID, [Density], [0]);
  initMetadataForCoroutine($resetCOROUTINE$22, CoroutineImpl);
  initMetadataForCoroutine($tryAwaitReleaseCOROUTINE$24, CoroutineImpl);
  initMetadataForClass(PressGestureScopeImpl, 'PressGestureScopeImpl', VOID, VOID, [PressGestureScope, Density], [0]);
  initMetadataForLambda(NoPressGesture$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(detectTapAndPress$slambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(detectTapAndPress$slambda$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(detectTapAndPress$slambda$slambda$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(detectTapAndPress$slambda$slambda$slambda_5, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(detectTapAndPress$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(detectTapAndPress$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($awaitFirstDownCOROUTINE$21, CoroutineImpl);
  initMetadataForCoroutine($waitForUpOrCancellationCOROUTINE$25, CoroutineImpl);
  initMetadataForInterface(Interaction, 'Interaction');
  initMetadataForClass(Start, 'Start', VOID, VOID, [Interaction]);
  initMetadataForClass(Stop, 'Stop', VOID, VOID, [Interaction]);
  initMetadataForClass(Cancel, 'Cancel', VOID, VOID, [Interaction]);
  initMetadataForInterface(FocusInteraction, 'FocusInteraction', VOID, VOID, [Interaction]);
  initMetadataForClass(Focus, 'Focus', Focus, VOID, [FocusInteraction]);
  initMetadataForClass(Unfocus, 'Unfocus', VOID, VOID, [FocusInteraction]);
  initMetadataForClass(Enter, 'Enter', Enter, VOID, [Interaction]);
  initMetadataForClass(Exit, 'Exit', VOID, VOID, [Interaction]);
  initMetadataForClass(MutableInteractionSourceImpl, 'MutableInteractionSourceImpl', MutableInteractionSourceImpl, VOID, VOID, [1]);
  initMetadataForInterface(PressInteraction, 'PressInteraction', VOID, VOID, [Interaction]);
  initMetadataForClass(Press, 'Press', VOID, VOID, [PressInteraction]);
  initMetadataForClass(Release, 'Release', VOID, VOID, [PressInteraction]);
  initMetadataForClass(Cancel_0, 'Cancel', VOID, VOID, [PressInteraction]);
  initMetadataForInterface(BringIntoViewParent, 'BringIntoViewParent', VOID, VOID, VOID, [2]);
  initMetadataForObject(TraverseKey_3, 'TraverseKey');
  initMetadataForClass(CornerBasedShape, 'CornerBasedShape');
  initMetadataForClass(PercentCornerSize, 'PercentCornerSize');
  initMetadataForClass(DpCornerSize, 'DpCornerSize');
  initMetadataForClass(ZeroCornerSize$1);
  initMetadataForClass(RoundedCornerShape, 'RoundedCornerShape', VOID, CornerBasedShape);
  initMetadataForObject(EmptyMeasurePolicy, 'EmptyMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(InlineDensity, 'InlineDensity');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(MinLinesConstrainer, 'MinLinesConstrainer');
  initMetadataForClass(MultiParagraphLayoutCache, 'MultiParagraphLayoutCache');
  initMetadataForClass(ParagraphLayoutCache, 'ParagraphLayoutCache');
  initMetadataForClass(SelectableTextAnnotatedStringElement, 'SelectableTextAnnotatedStringElement', VOID, ModifierNodeElement);
  initMetadataForClass(SelectableTextAnnotatedStringNode, 'SelectableTextAnnotatedStringNode', VOID, DelegatingNode, [DelegatingNode, LayoutModifierNode, DrawModifierNode, GlobalPositionAwareModifierNode]);
  initMetadataForClass(SelectionController, 'SelectionController', VOID, VOID, [RememberObserver]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(StaticTextSelectionParams, 'StaticTextSelectionParams');
  initMetadataForClass(makeDefaultSelectionModifier$longPressDragObserver$1);
  initMetadataForClass(makeDefaultSelectionModifier$mouseSelectionObserver$1);
  initMetadataForClass(TextAnnotatedStringElement, 'TextAnnotatedStringElement', VOID, ModifierNodeElement);
  initMetadataForClass(TextSubstitutionValue, 'TextSubstitutionValue');
  initMetadataForClass(TextAnnotatedStringNode, 'TextAnnotatedStringNode', VOID, Node, [Node, LayoutModifierNode, DrawModifierNode, SemanticsModifierNode]);
  initMetadataForClass(TextStringSimpleElement, 'TextStringSimpleElement', VOID, ModifierNodeElement);
  initMetadataForClass(TextSubstitutionValue_0, 'TextSubstitutionValue');
  initMetadataForClass(TextStringSimpleNode, 'TextStringSimpleNode', VOID, Node, [Node, LayoutModifierNode, DrawModifierNode, SemanticsModifierNode]);
  initMetadataForClass(MultiWidgetSelectionDelegate, 'MultiWidgetSelectionDelegate');
  initMetadataForClass(AnchorInfo, 'AnchorInfo');
  initMetadataForClass(Selection, 'Selection');
  initMetadataForInterface(SelectionAdjustment, 'SelectionAdjustment');
  initMetadataForClass(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0, 'sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0', VOID, VOID, [SelectionAdjustment, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0, 'sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0', VOID, VOID, [SelectionAdjustment, FunctionAdapter]);
  initMetadataForInterface(BoundaryFunction, 'BoundaryFunction');
  initMetadataForClass(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0, 'sam$androidx_compose_foundation_text_selection_BoundaryFunction$0', VOID, VOID, [BoundaryFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1, 'sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0', VOID, VOID, [SelectionAdjustment, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0, 'sam$androidx_compose_foundation_text_selection_BoundaryFunction$0', VOID, VOID, [BoundaryFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2, 'sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0', VOID, VOID, [SelectionAdjustment, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3, 'sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0', VOID, VOID, [SelectionAdjustment, FunctionAdapter]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(ClicksCounter, 'ClicksCounter');
  initMetadataForLambda(selectionGestureInput$lambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(selectionGestureInput$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($awaitDownCOROUTINE$34, CoroutineImpl);
  initMetadataForCoroutine($mouseSelectionCOROUTINE$35, CoroutineImpl);
  initMetadataForCoroutine($touchSelectionCOROUTINE$36, CoroutineImpl);
  initMetadataForClass(CrossStatus, 'CrossStatus', VOID, Enum);
  initMetadataForClass(TextSelectionColors, 'TextSelectionColors');
  initMetadataForClass(InputModeFilterIndicationNodeFactory$create$1, VOID, VOID, DelegatingNode, [DelegatingNode, CompositionLocalConsumerModifierNode]);
  initMetadataForClass(InputModeFilterIndicationNodeFactory, 'InputModeFilterIndicationNodeFactory', VOID, VOID, [IndicationNodeFactory]);
  initMetadataForClass(InputModeFilterIndication, 'InputModeFilterIndication', VOID, VOID, [Indication]);
  initMetadataForLambda(InputModeFilterInteractionSource$interactions$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(InputModeFilterInteractionSource$interactions$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(InputModeFilterInteractionSource, 'InputModeFilterInteractionSource');
  initMetadataForClass(sam$androidx_compose_foundation_relocation_BringIntoViewParent$0, 'sam$androidx_compose_foundation_relocation_BringIntoViewParent$0', VOID, VOID, [BringIntoViewParent, FunctionAdapter], [2]);
  initMetadataForLambda(defaultBringIntoViewParent$slambda, CoroutineImpl, VOID, [2]);
  //endregion
  function background(_this__u8e3s4, color, shape) {
    shape = shape === VOID ? get_RectangleShape() : shape;
    var alpha = 1.0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = background$lambda(color, shape);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.f5a(new BackgroundElement(color, VOID, alpha, shape, tmp0_inspectorInfo));
  }
  function BackgroundElement(color, brush, alpha, shape, inspectorInfo) {
    color = color === VOID ? Companion_getInstance().j45_1 : color;
    brush = brush === VOID ? null : brush;
    ModifierNodeElement.call(this);
    this.i8t_1 = color;
    this.j8t_1 = brush;
    this.k8t_1 = alpha;
    this.l8t_1 = shape;
    this.m8t_1 = inspectorInfo;
  }
  protoOf(BackgroundElement).f2e = function () {
    return new BackgroundNode(this.i8t_1, this.j8t_1, this.k8t_1, this.l8t_1);
  };
  protoOf(BackgroundElement).n8t = function (node) {
    node.b8u_1 = this.i8t_1;
    node.c8u_1 = this.j8t_1;
    node.d8u_1 = this.k8t_1;
    node.e8u_1 = this.l8t_1;
  };
  protoOf(BackgroundElement).t5f = function (node) {
    return this.n8t(node instanceof BackgroundNode ? node : THROW_CCE());
  };
  protoOf(BackgroundElement).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.i8t_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.j8t_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.k8t_1) | 0;
    result = imul(31, result) + hashCode(this.l8t_1) | 0;
    return result;
  };
  protoOf(BackgroundElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof BackgroundElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.i8t_1, otherModifier.i8t_1) && equals(this.j8t_1, otherModifier.j8t_1) && this.k8t_1 === otherModifier.k8t_1 && equals(this.l8t_1, otherModifier.l8t_1);
  };
  function drawRect(_this__u8e3s4, $this) {
    if (!equals($this.b8u_1, Companion_getInstance().j45_1)) {
      _this__u8e3s4.z4d($this.b8u_1);
    }
    var tmp0_safe_receiver = $this.c8u_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.BackgroundNode.drawRect.<anonymous>' call
      _this__u8e3s4.y4d(tmp0_safe_receiver, VOID, VOID, $this.d8u_1);
    }
  }
  function drawOutline_1(_this__u8e3s4, $this) {
    var outline = getOutline(_this__u8e3s4, $this);
    if (!equals($this.b8u_1, Companion_getInstance().j45_1)) {
      drawOutline(_this__u8e3s4, outline, $this.b8u_1);
    }
    var tmp0_safe_receiver = $this.c8u_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.BackgroundNode.drawOutline.<anonymous>' call
      drawOutline_0(_this__u8e3s4, outline, tmp0_safe_receiver, $this.d8u_1);
    }
  }
  function getOutline(_this__u8e3s4, $this) {
    var outline = {_v: null};
    if (equals(_this__u8e3s4.z4c(), $this.f8u_1) && _this__u8e3s4.t4d().equals($this.g8u_1) && equals($this.i8u_1, $this.e8u_1)) {
      outline._v = ensureNotNull($this.h8u_1);
    } else {
      observeReads($this, BackgroundNode$getOutline$lambda(outline, $this, _this__u8e3s4));
    }
    $this.h8u_1 = outline._v;
    $this.f8u_1 = _this__u8e3s4.z4c();
    $this.g8u_1 = _this__u8e3s4.t4d();
    $this.i8u_1 = $this.e8u_1;
    return ensureNotNull(outline._v);
  }
  function BackgroundNode$getOutline$lambda($outline, this$0, $this_getOutline) {
    return function () {
      $outline._v = this$0.e8u_1.u48($this_getOutline.z4c(), $this_getOutline.t4d(), $this_getOutline);
      return Unit_instance;
    };
  }
  function BackgroundNode(color, brush, alpha, shape) {
    Node.call(this);
    this.b8u_1 = color;
    this.c8u_1 = brush;
    this.d8u_1 = alpha;
    this.e8u_1 = shape;
    this.f8u_1 = Companion_getInstance_0().c3h_1;
    this.g8u_1 = null;
    this.h8u_1 = null;
    this.i8u_1 = null;
  }
  protoOf(BackgroundNode).j5c = function (_this__u8e3s4) {
    if (this.e8u_1 === get_RectangleShape()) {
      drawRect(_this__u8e3s4, this);
    } else {
      drawOutline_1(_this__u8e3s4, this);
    }
    _this__u8e3s4.u5f();
  };
  protoOf(BackgroundNode).b5f = function () {
    this.f8u_1 = Companion_getInstance_0().c3h_1;
    this.g8u_1 = null;
    this.h8u_1 = null;
    this.i8u_1 = null;
    invalidateDraw(this);
  };
  function background$lambda($color, $shape) {
    return function ($this$null) {
      $this$null.h8l_1 = 'background';
      $this$null.i8l_1 = new Color($color);
      $this$null.j8l_1.l8l('color', new Color($color));
      $this$null.j8l_1.l8l('shape', $shape);
      return Unit_instance;
    };
  }
  function border(_this__u8e3s4, border, shape) {
    shape = shape === VOID ? get_RectangleShape() : shape;
    return border_0(_this__u8e3s4, border.j8u_1, border.k8u_1, shape);
  }
  function border_0(_this__u8e3s4, width, brush, shape) {
    return _this__u8e3s4.f5a(new BorderModifierNodeElement(width, brush, shape));
  }
  function BorderModifierNodeElement(width, brush, shape) {
    ModifierNodeElement.call(this);
    this.m8u_1 = width;
    this.n8u_1 = brush;
    this.o8u_1 = shape;
  }
  protoOf(BorderModifierNodeElement).f2e = function () {
    return new BorderModifierNode(this.m8u_1, this.n8u_1, this.o8u_1);
  };
  protoOf(BorderModifierNodeElement).p8u = function (node) {
    node.k8v(this.m8u_1);
    node.l8v(this.n8u_1);
    node.l5r(this.o8u_1);
  };
  protoOf(BorderModifierNodeElement).t5f = function (node) {
    return this.p8u(node instanceof BorderModifierNode ? node : THROW_CCE());
  };
  protoOf(BorderModifierNodeElement).toString = function () {
    return 'BorderModifierNodeElement(width=' + Dp__toString_impl_kcddez(this.m8u_1) + ', brush=' + toString(this.n8u_1) + ', shape=' + toString(this.o8u_1) + ')';
  };
  protoOf(BorderModifierNodeElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.m8u_1);
    result = imul(result, 31) + hashCode(this.n8u_1) | 0;
    result = imul(result, 31) + hashCode(this.o8u_1) | 0;
    return result;
  };
  protoOf(BorderModifierNodeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BorderModifierNodeElement))
      return false;
    var tmp0_other_with_cast = other instanceof BorderModifierNodeElement ? other : THROW_CCE();
    if (!equals(this.m8u_1, tmp0_other_with_cast.m8u_1))
      return false;
    if (!equals(this.n8u_1, tmp0_other_with_cast.n8u_1))
      return false;
    if (!equals(this.o8u_1, tmp0_other_with_cast.o8u_1))
      return false;
    return true;
  };
  function drawGenericBorder(_this__u8e3s4, $this, brush, outline, fillArea, strokeWidth) {
    var tmp;
    if (fillArea) {
      tmp = _this__u8e3s4.p5c(BorderModifierNode$drawGenericBorder$lambda(outline, brush));
    } else {
      var config;
      var colorFilter;
      if (brush instanceof SolidColor) {
        config = Companion_getInstance_1().x46_1;
        colorFilter = Companion_instance.n46(brush.h4z_1);
      } else {
        config = Companion_getInstance_1().w46_1;
        colorFilter = null;
      }
      var pathBounds = outline.u47_1.l48();
      if ($this.f8v_1 == null) {
        $this.f8v_1 = new BorderCache();
      }
      // Inline function 'kotlin.apply' call
      var this_0 = ensureNotNull($this.f8v_1).q8v();
      // Inline function 'androidx.compose.foundation.BorderModifierNode.drawGenericBorder.<anonymous>' call
      this_0.y2l();
      this_0.g48(pathBounds);
      this_0.m48(this_0, outline.u47_1, Companion_getInstance_2().p48_1);
      var maskPath = this_0;
      var cacheImageBitmap;
      // Inline function 'kotlin.math.ceil' call
      var x = pathBounds.m3g();
      var tmp$ret$1 = Math.ceil(x);
      var tmp_0 = numberToInt(tmp$ret$1);
      // Inline function 'kotlin.math.ceil' call
      var x_0 = pathBounds.n3g();
      var tmp$ret$2 = Math.ceil(x_0);
      var pathBoundsSize = IntSize(tmp_0, numberToInt(tmp$ret$2));
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.foundation.BorderModifierNode.drawGenericBorder.<anonymous>' call
      var tmp0 = ensureNotNull($this.f8v_1);
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache' call
      var config_0 = config;
      var targetImageBitmap = access$_get_imageBitmap__h9wr89(tmp0);
      var targetCanvas = access$_get_canvas__bmcir7(tmp0);
      var tmp_1;
      var tmp0_safe_receiver = targetImageBitmap;
      var tmp_2 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o4h();
      if (equals(tmp_2 == null ? null : new ImageBitmapConfig(tmp_2), new ImageBitmapConfig(Companion_getInstance_1().w46_1))) {
        tmp_1 = true;
      } else {
        var tmp1_safe_receiver = targetImageBitmap;
        var tmp_3 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.o4h();
        tmp_1 = equals(new ImageBitmapConfig(config_0), tmp_3 == null ? null : new ImageBitmapConfig(tmp_3));
      }
      var compatibleConfig = tmp_1;
      if (targetImageBitmap == null || targetCanvas == null || _Size___get_width__impl__58y75t(_this__u8e3s4.z4c()) > targetImageBitmap.m3g() || _Size___get_height__impl__a04p02(_this__u8e3s4.z4c()) > targetImageBitmap.n3g() || !compatibleConfig) {
        // Inline function 'kotlin.also' call
        var this_1 = ImageBitmap(_IntSize___get_width__impl__d9yl4o(pathBoundsSize), _IntSize___get_height__impl__prv63b(pathBoundsSize), config_0);
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        access$_set_imageBitmap__ngt4ez(tmp0, this_1);
        targetImageBitmap = this_1;
        // Inline function 'kotlin.also' call
        var this_2 = Canvas(targetImageBitmap);
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        access$_set_canvas__a5ly4f(tmp0, this_2);
        targetCanvas = this_2;
      }
      var tmp2_elvis_lhs = access$_get_canvasDrawScope__fej02v(tmp0);
      var tmp_4;
      if (tmp2_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_3 = new CanvasDrawScope();
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        access$_set_canvasDrawScope__pi97lf(tmp0, this_3);
        tmp_4 = this_3;
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var targetDrawScope = tmp_4;
      var drawSize = toSize(pathBoundsSize);
      var tmp8 = _this__u8e3s4.t4d();
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
      var canvas = targetCanvas;
      var tmp0_container = targetDrawScope.e4c_1;
      var prevDensity = tmp0_container.ag();
      var prevLayoutDirection = tmp0_container.bg();
      var prevCanvas = tmp0_container.k4d();
      var prevSize = tmp0_container.l4d();
      // Inline function 'kotlin.apply' call
      var this_4 = targetDrawScope.e4c_1;
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
      this_4.g4d_1 = _this__u8e3s4;
      this_4.h4d_1 = tmp8;
      this_4.i4d_1 = canvas;
      this_4.j4d_1 = drawSize;
      canvas.t42();
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      targetDrawScope.z4d(Companion_getInstance().x44_1, VOID, drawSize, VOID, VOID, VOID, Companion_getInstance_3().n41_1);
      // Inline function 'androidx.compose.foundation.BorderModifierNode.drawGenericBorder.<anonymous>.<anonymous>' call
      var tmp1 = -pathBounds.i3g_1;
      // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
      var top = -pathBounds.j3g_1;
      targetDrawScope.x4d().r4d().w42(tmp1, top);
      try {
        // Inline function 'androidx.compose.foundation.BorderModifierNode.drawGenericBorder.<anonymous>.<anonymous>.<anonymous>' call
        targetDrawScope.g4e(outline.u47_1, brush, VOID, new Stroke(strokeWidth * 2));
        var tmp1_0 = (_Size___get_width__impl__58y75t(targetDrawScope.z4c()) + 1) / _Size___get_width__impl__58y75t(targetDrawScope.z4c());
        // Inline function 'androidx.compose.ui.graphics.drawscope.scale' call
        var scaleY = (_Size___get_height__impl__a04p02(targetDrawScope.z4c()) + 1) / _Size___get_height__impl__a04p02(targetDrawScope.z4c());
        var pivot = targetDrawScope.h4e();
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform.<anonymous>' call
        var $this$with = targetDrawScope.x4d();
        var previousSize = $this$with.z4c();
        $this$with.j3t().t42();
        try {
          // Inline function 'androidx.compose.ui.graphics.drawscope.scale.<anonymous>' call
          $this$with.r4d().j4e(tmp1_0, scaleY, pivot);
          // Inline function 'androidx.compose.foundation.BorderModifierNode.drawGenericBorder.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          targetDrawScope.g4e(maskPath, brush, VOID, VOID, VOID, Companion_getInstance_3().n41_1);
        }finally {
          $this$with.j3t().u42();
          $this$with.q4d(previousSize);
        }
      }finally {
        targetDrawScope.x4d().r4d().w42(-tmp1, -top);
      }
      canvas.u42();
      // Inline function 'kotlin.apply' call
      var this_5 = targetDrawScope.e4c_1;
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
      this_5.g4d_1 = prevDensity;
      this_5.h4d_1 = prevLayoutDirection;
      this_5.i4d_1 = prevCanvas;
      this_5.j4d_1 = prevSize;
      targetImageBitmap.p4h();
      cacheImageBitmap = targetImageBitmap;
      tmp = _this__u8e3s4.p5c(BorderModifierNode$drawGenericBorder$lambda_0(pathBounds, cacheImageBitmap, pathBoundsSize, colorFilter));
    }
    return tmp;
  }
  function drawRoundRectBorder(_this__u8e3s4, $this, brush, outline, topLeft, borderSize, fillArea, strokeWidth) {
    var tmp;
    if (get_isSimple(outline.r47_1)) {
      var cornerRadius = outline.r47_1.w3g_1;
      var halfStroke = strokeWidth / 2;
      var borderStroke = new Stroke(strokeWidth);
      tmp = _this__u8e3s4.p5c(BorderModifierNode$drawRoundRectBorder$lambda(fillArea, brush, cornerRadius, halfStroke, strokeWidth, topLeft, borderSize, borderStroke));
    } else {
      if ($this.f8v_1 == null) {
        $this.f8v_1 = new BorderCache();
      }
      var path = ensureNotNull($this.f8v_1).q8v();
      var roundedRectPath = createRoundRectPath(path, outline.r47_1, strokeWidth, fillArea);
      tmp = _this__u8e3s4.p5c(BorderModifierNode$drawRoundRectBorder$lambda_0(roundedRectPath, brush));
    }
    return tmp;
  }
  function BorderModifierNode$drawWithCacheModifierNode$lambda(this$0) {
    return function ($this$CacheDrawModifierNode) {
      var hasValidBorderParams = $this$CacheDrawModifierNode.l3h(this$0.g8v_1) >= 0.0 && _Size___get_minDimension__impl__4iso0r($this$CacheDrawModifierNode.z4c()) > 0.0;
      var tmp;
      if (!hasValidBorderParams) {
        tmp = drawContentWithoutBorder($this$CacheDrawModifierNode);
      } else {
        var tmp_0;
        if (equals(this$0.g8v_1, Companion_getInstance_4().a3i_1)) {
          tmp_0 = 1.0;
        } else {
          // Inline function 'kotlin.math.ceil' call
          var x = $this$CacheDrawModifierNode.l3h(this$0.g8v_1);
          tmp_0 = Math.ceil(x);
        }
        var tmp2 = tmp_0;
        // Inline function 'kotlin.math.ceil' call
        var x_0 = _Size___get_minDimension__impl__4iso0r($this$CacheDrawModifierNode.z4c()) / 2;
        // Inline function 'kotlin.math.min' call
        var b = Math.ceil(x_0);
        var strokeWidthPx = Math.min(tmp2, b);
        var halfStroke = strokeWidthPx / 2;
        var topLeft = Offset(halfStroke, halfStroke);
        var borderSize = Size(_Size___get_width__impl__58y75t($this$CacheDrawModifierNode.z4c()) - strokeWidthPx, _Size___get_height__impl__a04p02($this$CacheDrawModifierNode.z4c()) - strokeWidthPx);
        var fillArea = strokeWidthPx * 2 > _Size___get_minDimension__impl__4iso0r($this$CacheDrawModifierNode.z4c());
        var outline = this$0.i8v_1.u48($this$CacheDrawModifierNode.z4c(), $this$CacheDrawModifierNode.t4d(), $this$CacheDrawModifierNode);
        var tmp_1;
        if (outline instanceof Generic) {
          tmp_1 = drawGenericBorder($this$CacheDrawModifierNode, this$0, this$0.h8v_1, outline, fillArea, strokeWidthPx);
        } else {
          if (outline instanceof Rounded) {
            tmp_1 = drawRoundRectBorder($this$CacheDrawModifierNode, this$0, this$0.h8v_1, outline, topLeft, borderSize, fillArea, strokeWidthPx);
          } else {
            if (outline instanceof Rectangle) {
              tmp_1 = drawRectBorder($this$CacheDrawModifierNode, this$0.h8v_1, topLeft, borderSize, fillArea, strokeWidthPx);
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
        tmp = tmp_1;
      }
      return tmp;
    };
  }
  function BorderModifierNode$drawGenericBorder$lambda($outline, $brush) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.u5f();
      $this$onDrawWithContent.g4e($outline.u47_1, $brush);
      return Unit_instance;
    };
  }
  function BorderModifierNode$drawGenericBorder$lambda_0($pathBounds, $cacheImageBitmap, $pathBoundsSize, $colorFilter) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.u5f();
      var tmp1 = $pathBounds.i3g_1;
      var top = $pathBounds.j3g_1;
      $this$onDrawWithContent.x4d().r4d().w42(tmp1, top);
      var tmp;
      try {
        $this$onDrawWithContent.b4e($cacheImageBitmap, VOID, $pathBoundsSize, VOID, VOID, VOID, VOID, $colorFilter);
        tmp = Unit_instance;
      }finally {
        $this$onDrawWithContent.x4d().r4d().w42(-tmp1, -top);
      }
      return Unit_instance;
    };
  }
  function BorderModifierNode$drawRoundRectBorder$lambda($fillArea, $brush, $cornerRadius, $halfStroke, $strokeWidth, $topLeft, $borderSize, $borderStroke) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.u5f();
      var tmp;
      if ($fillArea) {
        $this$onDrawWithContent.c4e($brush, VOID, VOID, $cornerRadius);
        tmp = Unit_instance;
      } else if (_CornerRadius___get_x__impl__1594cn($cornerRadius) < $halfStroke) {
        var tmp1 = $strokeWidth;
        var tmp2 = $strokeWidth;
        var tmp3 = _Size___get_width__impl__58y75t($this$onDrawWithContent.z4c()) - $strokeWidth;
        var tmp4 = _Size___get_height__impl__a04p02($this$onDrawWithContent.z4c()) - $strokeWidth;
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        var clipOp = Companion_getInstance_5().c43_1;
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform.<anonymous>' call
        var $this$with = $this$onDrawWithContent.x4d();
        var previousSize = $this$with.z4c();
        $this$with.j3t().t42();
        try {
          // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
          $this$with.r4d().a43(tmp1, tmp2, tmp3, tmp4, clipOp);
          // Inline function 'androidx.compose.foundation.BorderModifierNode.drawRoundRectBorder.<anonymous>.<anonymous>' call
          $this$onDrawWithContent.c4e($brush, VOID, VOID, $cornerRadius);
        }finally {
          $this$with.j3t().u42();
          $this$with.q4d(previousSize);
        }
        tmp = Unit_instance;
      } else {
        $this$onDrawWithContent.c4e($brush, $topLeft, $borderSize, shrink($cornerRadius, $halfStroke), VOID, $borderStroke);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function BorderModifierNode$drawRoundRectBorder$lambda_0($roundedRectPath, $brush) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.u5f();
      $this$onDrawWithContent.g4e($roundedRectPath, $brush);
      return Unit_instance;
    };
  }
  function BorderModifierNode(widthParameter, brushParameter, shapeParameter) {
    DelegatingNode.call(this);
    this.f8v_1 = null;
    this.g8v_1 = widthParameter;
    this.h8v_1 = brushParameter;
    this.i8v_1 = shapeParameter;
    var tmp = this;
    tmp.j8v_1 = this.h6g(CacheDrawModifierNode(BorderModifierNode$drawWithCacheModifierNode$lambda(this)));
  }
  protoOf(BorderModifierNode).k8v = function (value) {
    if (!equals(this.g8v_1, value)) {
      this.g8v_1 = value;
      this.j8v_1.k5c();
    }
  };
  protoOf(BorderModifierNode).l8v = function (value) {
    if (!equals(this.h8v_1, value)) {
      this.h8v_1 = value;
      this.j8v_1.k5c();
    }
  };
  protoOf(BorderModifierNode).l5r = function (value) {
    if (!equals(this.i8v_1, value)) {
      this.i8v_1 = value;
      this.j8v_1.k5c();
    }
  };
  function access$_get_imageBitmap__h9wr89($this) {
    return $this.m8v_1;
  }
  function access$_set_imageBitmap__ngt4ez($this, _set____db54di) {
    $this.m8v_1 = _set____db54di;
    return Unit_instance;
  }
  function access$_get_canvas__bmcir7($this) {
    return $this.n8v_1;
  }
  function access$_set_canvas__a5ly4f($this, _set____db54di) {
    $this.n8v_1 = _set____db54di;
    return Unit_instance;
  }
  function access$_get_canvasDrawScope__fej02v($this) {
    return $this.o8v_1;
  }
  function access$_set_canvasDrawScope__pi97lf($this, _set____db54di) {
    $this.o8v_1 = _set____db54di;
    return Unit_instance;
  }
  function BorderCache(imageBitmap, canvas, canvasDrawScope, borderPath) {
    imageBitmap = imageBitmap === VOID ? null : imageBitmap;
    canvas = canvas === VOID ? null : canvas;
    canvasDrawScope = canvasDrawScope === VOID ? null : canvasDrawScope;
    borderPath = borderPath === VOID ? null : borderPath;
    this.m8v_1 = imageBitmap;
    this.n8v_1 = canvas;
    this.o8v_1 = canvasDrawScope;
    this.p8v_1 = borderPath;
  }
  protoOf(BorderCache).q8v = function () {
    var tmp0_elvis_lhs = this.p8v_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = Path();
      // Inline function 'androidx.compose.foundation.BorderCache.obtainPath.<anonymous>' call
      this.p8v_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(BorderCache).toString = function () {
    return 'BorderCache(imageBitmap=' + toString_0(this.m8v_1) + ', canvas=' + toString_0(this.n8v_1) + ', canvasDrawScope=' + toString_0(this.o8v_1) + ', borderPath=' + toString_0(this.p8v_1) + ')';
  };
  protoOf(BorderCache).hashCode = function () {
    var result = this.m8v_1 == null ? 0 : hashCode(this.m8v_1);
    result = imul(result, 31) + (this.n8v_1 == null ? 0 : hashCode(this.n8v_1)) | 0;
    result = imul(result, 31) + (this.o8v_1 == null ? 0 : hashCode(this.o8v_1)) | 0;
    result = imul(result, 31) + (this.p8v_1 == null ? 0 : hashCode(this.p8v_1)) | 0;
    return result;
  };
  protoOf(BorderCache).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BorderCache))
      return false;
    var tmp0_other_with_cast = other instanceof BorderCache ? other : THROW_CCE();
    if (!equals(this.m8v_1, tmp0_other_with_cast.m8v_1))
      return false;
    if (!equals(this.n8v_1, tmp0_other_with_cast.n8v_1))
      return false;
    if (!equals(this.o8v_1, tmp0_other_with_cast.o8v_1))
      return false;
    if (!equals(this.p8v_1, tmp0_other_with_cast.p8v_1))
      return false;
    return true;
  };
  function drawContentWithoutBorder(_this__u8e3s4) {
    return _this__u8e3s4.p5c(drawContentWithoutBorder$lambda);
  }
  function drawRectBorder(_this__u8e3s4, brush, topLeft, borderSize, fillArea, strokeWidthPx) {
    var rectTopLeft = fillArea ? Companion_getInstance_6().d3g_1 : topLeft;
    var size = fillArea ? _this__u8e3s4.z4c() : borderSize;
    var style = fillArea ? Fill_getInstance() : new Stroke(strokeWidthPx);
    return _this__u8e3s4.p5c(drawRectBorder$lambda(brush, rectTopLeft, size, style));
  }
  function shrink(_this__u8e3s4, value) {
    // Inline function 'kotlin.math.max' call
    var b = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4) - value;
    var tmp = Math.max(0.0, b);
    // Inline function 'kotlin.math.max' call
    var b_0 = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4) - value;
    var tmp$ret$1 = Math.max(0.0, b_0);
    return CornerRadius(tmp, tmp$ret$1);
  }
  function createRoundRectPath(targetPath, roundedRect, strokeWidth, fillArea) {
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.compose.foundation.createRoundRectPath.<anonymous>' call
    targetPath.y2l();
    targetPath.t47(roundedRect);
    if (!fillArea) {
      // Inline function 'kotlin.apply' call
      var this_0 = Path();
      // Inline function 'androidx.compose.foundation.createRoundRectPath.<anonymous>.<anonymous>' call
      this_0.t47(createInsetRoundedRect(strokeWidth, roundedRect));
      var insetPath = this_0;
      targetPath.m48(targetPath, insetPath, Companion_getInstance_2().p48_1);
    }
    return targetPath;
  }
  function createInsetRoundedRect(widthPx, roundedRect) {
    var tmp0_right = roundedRect.m3g() - widthPx;
    var tmp1_bottom = roundedRect.n3g() - widthPx;
    var tmp2_topLeftCornerRadius = shrink(roundedRect.w3g_1, widthPx);
    var tmp3_topRightCornerRadius = shrink(roundedRect.x3g_1, widthPx);
    var tmp4_bottomLeftCornerRadius = shrink(roundedRect.z3g_1, widthPx);
    var tmp5_bottomRightCornerRadius = shrink(roundedRect.y3g_1, widthPx);
    return new RoundRect(widthPx, widthPx, tmp0_right, tmp1_bottom, tmp2_topLeftCornerRadius, tmp3_topRightCornerRadius, tmp5_bottomRightCornerRadius, tmp4_bottomLeftCornerRadius);
  }
  function drawContentWithoutBorder$lambda($this$onDrawWithContent) {
    $this$onDrawWithContent.u5f();
    return Unit_instance;
  }
  function drawRectBorder$lambda($brush, $rectTopLeft, $size, $style) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.u5f();
      $this$onDrawWithContent.y4d($brush, $rectTopLeft, $size, VOID, $style);
      return Unit_instance;
    };
  }
  function clickable(_this__u8e3s4, interactionSource, indication_0, enabled, onClickLabel, role, onClick) {
    enabled = enabled === VOID ? true : enabled;
    onClickLabel = onClickLabel === VOID ? null : onClickLabel;
    role = role === VOID ? null : role;
    // Inline function 'androidx.compose.foundation.clickableWithIndicationIfNeeded' call
    var tmp;
    if (!(indication_0 == null) ? isInterface(indication_0, IndicationNodeFactory) : false) {
      var tmp_0 = platformIndication(indication_0);
      // Inline function 'androidx.compose.foundation.clickable.<anonymous>' call
      var indicationNodeFactory = (!(tmp_0 == null) ? isInterface(tmp_0, IndicationNodeFactory) : false) ? tmp_0 : THROW_CCE();
      tmp = new ClickableElement(interactionSource, indicationNodeFactory, enabled, onClickLabel, role, onClick);
    } else {
      if (indication_0 == null) {
        // Inline function 'androidx.compose.foundation.clickable.<anonymous>' call
        tmp = new ClickableElement(interactionSource, null, enabled, onClickLabel, role, onClick);
      } else {
        if (!(interactionSource == null)) {
          var tmp_1 = indication(Companion_instance_0, interactionSource, indication_0);
          // Inline function 'androidx.compose.foundation.clickable.<anonymous>' call
          var tmp$ret$2 = new ClickableElement(interactionSource, null, enabled, onClickLabel, role, onClick);
          tmp = tmp_1.f5a(tmp$ret$2);
        } else {
          var tmp_2 = Companion_instance_0;
          tmp = composed(tmp_2, VOID, clickable$lambda(indication_0, enabled, onClickLabel, role, onClick));
        }
      }
    }
    return _this__u8e3s4.f5a(tmp);
  }
  function ClickableElement(interactionSource, indicationNodeFactory, enabled, onClickLabel, role, onClick) {
    ModifierNodeElement.call(this);
    this.s8v_1 = interactionSource;
    this.t8v_1 = indicationNodeFactory;
    this.u8v_1 = enabled;
    this.v8v_1 = onClickLabel;
    this.w8v_1 = role;
    this.x8v_1 = onClick;
  }
  protoOf(ClickableElement).f2e = function () {
    return new ClickableNode(this.s8v_1, this.t8v_1, this.u8v_1, this.v8v_1, this.w8v_1, this.x8v_1);
  };
  protoOf(ClickableElement).y8v = function (node) {
    node.f8x(this.s8v_1, this.t8v_1, this.u8v_1, this.v8v_1, this.w8v_1, this.x8v_1);
  };
  protoOf(ClickableElement).t5f = function (node) {
    return this.y8v(node instanceof ClickableNode ? node : THROW_CCE());
  };
  protoOf(ClickableElement).equals = function (other) {
    if (this === other)
      return true;
    if (other === null)
      return false;
    if (!getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ClickableElement))
      THROW_CCE();
    if (!equals(this.s8v_1, other.s8v_1))
      return false;
    if (!equals(this.t8v_1, other.t8v_1))
      return false;
    if (!(this.u8v_1 === other.u8v_1))
      return false;
    if (!(this.v8v_1 == other.v8v_1))
      return false;
    var tmp = this.w8v_1;
    var tmp_0 = tmp == null ? null : new Role(tmp);
    var tmp_1 = other.w8v_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new Role(tmp_1)))
      return false;
    if (!(this.x8v_1 === other.x8v_1))
      return false;
    return true;
  };
  protoOf(ClickableElement).hashCode = function () {
    var tmp0_safe_receiver = this.s8v_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.t8v_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    result = imul(31, result) + getBooleanHashCode(this.u8v_1) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.v8v_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : getStringHashCode(tmp4_safe_receiver);
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp6_safe_receiver = this.w8v_1;
    var tmp_2;
    var tmp_3 = tmp6_safe_receiver;
    if ((tmp_3 == null ? null : new Role(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      tmp_2 = Role__hashCode_impl_ucjza4(tmp6_safe_receiver);
    }
    var tmp7_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    result = imul(31, result) + hashCode(this.x8v_1) | 0;
    return result;
  };
  function ClickableNode$clickPointerInput$slambda(this$0, resultContinuation) {
    this.o8x_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ClickableNode$clickPointerInput$slambda).r8x = function ($this$detectTapAndPress, offset, $completion) {
    var tmp = this.s8x($this$detectTapAndPress, offset, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(ClickableNode$clickPointerInput$slambda).a2k = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, PressGestureScope) : false) ? p1 : THROW_CCE();
    return this.r8x(tmp, p2 instanceof Offset_0 ? p2.g3g_1 : THROW_CCE(), $completion);
  };
  protoOf(ClickableNode$clickPointerInput$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 3;
            if (this.o8x_1.m8y_1) {
              requestFocusWhenInMouseInputMode(this.o8x_1.p8y_1);
              this.h9_1 = 1;
              suspendResult = this.o8x_1.z8y(this.p8x_1, this.q8x_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 2;
              continue $sm;
            }

          case 1:
            this.h9_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.k9_1;
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
  protoOf(ClickableNode$clickPointerInput$slambda).s8x = function ($this$detectTapAndPress, offset, completion) {
    var i = new ClickableNode$clickPointerInput$slambda(this.o8x_1, completion);
    i.p8x_1 = $this$detectTapAndPress;
    i.q8x_1 = offset;
    return i;
  };
  function ClickableNode$clickPointerInput$slambda_0(this$0, resultContinuation) {
    var i = new ClickableNode$clickPointerInput$slambda(this$0, resultContinuation);
    var l = function ($this$detectTapAndPress, offset, $completion) {
      return i.r8x($this$detectTapAndPress, offset.g3g_1, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ClickableNode$clickPointerInput$lambda(this$0) {
    return function (it) {
      if (this$0.m8y_1)
        this$0.n8y_1();
      return Unit_instance;
    };
  }
  function ClickableNode(interactionSource, indicationNodeFactory, enabled, onClickLabel, role, onClick) {
    AbstractClickableNode.call(this, interactionSource, indicationNodeFactory, enabled, onClickLabel, role, onClick);
  }
  protoOf(ClickableNode).a8z = function (_this__u8e3s4, $completion) {
    var tmp = ClickableNode$clickPointerInput$slambda_0(this, null);
    return detectTapAndPress(_this__u8e3s4, tmp, ClickableNode$clickPointerInput$lambda(this), $completion);
  };
  protoOf(ClickableNode).f8x = function (interactionSource, indicationNodeFactory, enabled, onClickLabel, role, onClick) {
    this.b8z(interactionSource, indicationNodeFactory, enabled, onClickLabel, role, onClick);
  };
  function AbstractClickableNode$handlePressInteraction$slambda$slambda(this$0, $offset, $interactionSource, resultContinuation) {
    this.m8z_1 = this$0;
    this.n8z_1 = $offset;
    this.o8z_1 = $interactionSource;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$handlePressInteraction$slambda$slambda).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(AbstractClickableNode$handlePressInteraction$slambda$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$handlePressInteraction$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 4;
            if (delayPressInteraction(this.m8z_1)) {
              this.h9_1 = 1;
              suspendResult = delay(get_TapIndicationDelay(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 2;
              continue $sm;
            }

          case 1:
            this.h9_1 = 2;
            continue $sm;
          case 2:
            this.q8z_1 = new Press(this.n8z_1);
            this.h9_1 = 3;
            suspendResult = this.o8z_1.r8z(this.q8z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.m8z_1.s8y_1 = this.q8z_1;
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
  protoOf(AbstractClickableNode$handlePressInteraction$slambda$slambda).s1m = function ($this$launch, completion) {
    var i = new AbstractClickableNode$handlePressInteraction$slambda$slambda(this.m8z_1, this.n8z_1, this.o8z_1, completion);
    i.p8z_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$handlePressInteraction$slambda$slambda_0(this$0, $offset, $interactionSource, resultContinuation) {
    var i = new AbstractClickableNode$handlePressInteraction$slambda$slambda(this$0, $offset, $interactionSource, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function shouldLazilyCreateIndication($this) {
    return $this.w8y_1 == null && !($this.j8y_1 == null);
  }
  function initializeIndicationAndInteractionSourceIfNeeded($this) {
    if (!($this.r8y_1 == null))
      return Unit_instance;
    var tmp0_safe_receiver = $this.j8y_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.AbstractClickableNode.initializeIndicationAndInteractionSourceIfNeeded.<anonymous>' call
      if ($this.i8y_1 == null) {
        $this.i8y_1 = funMutableInteractionSource();
      }
      $this.p8y_1.m90($this.i8y_1);
      var node = tmp0_safe_receiver.n90(ensureNotNull($this.i8y_1));
      $this.h6g(node);
      $this.r8y_1 = node;
    }
  }
  function delayPressInteraction($this) {
    return hasScrollableContainer($this) || isComposeRootInScrollableContainer($this);
  }
  function emitHoverEnter($this) {
    if ($this.t8y_1 == null) {
      var interaction = new Enter();
      var tmp0_safe_receiver = $this.i8y_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.foundation.AbstractClickableNode.emitHoverEnter.<anonymous>' call
        var tmp = $this.z5a();
        launch(tmp, VOID, VOID, AbstractClickableNode$emitHoverEnter$slambda_0(tmp0_safe_receiver, interaction, null));
      }
      $this.t8y_1 = interaction;
    }
  }
  function emitHoverExit($this) {
    var tmp0_safe_receiver = $this.t8y_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.AbstractClickableNode.emitHoverExit.<anonymous>' call
      var interaction = new Exit(tmp0_safe_receiver);
      var tmp0_safe_receiver_0 = $this.i8y_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.foundation.AbstractClickableNode.emitHoverExit.<anonymous>.<anonymous>' call
        var tmp = $this.z5a();
        launch(tmp, VOID, VOID, AbstractClickableNode$emitHoverExit$slambda_0(tmp0_safe_receiver_0, interaction, null));
      }
      $this.t8y_1 = null;
    }
  }
  function TraverseKey() {
  }
  var TraverseKey_instance;
  function TraverseKey_getInstance() {
    return TraverseKey_instance;
  }
  function AbstractClickableNode$onPointerEvent$slambda(this$0, resultContinuation) {
    this.w90_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$onPointerEvent$slambda).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(AbstractClickableNode$onPointerEvent$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$onPointerEvent$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          emitHoverEnter(this.w90_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(AbstractClickableNode$onPointerEvent$slambda).s1m = function ($this$launch, completion) {
    var i = new AbstractClickableNode$onPointerEvent$slambda(this.w90_1, completion);
    i.x90_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$onPointerEvent$slambda_0(this$0, resultContinuation) {
    var i = new AbstractClickableNode$onPointerEvent$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AbstractClickableNode$onPointerEvent$slambda_1(this$0, resultContinuation) {
    this.g91_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$onPointerEvent$slambda_1).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(AbstractClickableNode$onPointerEvent$slambda_1).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$onPointerEvent$slambda_1).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          emitHoverExit(this.g91_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(AbstractClickableNode$onPointerEvent$slambda_1).s1m = function ($this$launch, completion) {
    var i = new AbstractClickableNode$onPointerEvent$slambda_1(this.g91_1, completion);
    i.h91_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$onPointerEvent$slambda_2(this$0, resultContinuation) {
    var i = new AbstractClickableNode$onPointerEvent$slambda_1(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AbstractClickableNode$onPointerEvent$slambda_3(this$0, resultContinuation) {
    this.q91_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$onPointerEvent$slambda_3).s91 = function ($this$SuspendingPointerInputModifierNode, $completion) {
    var tmp = this.t91($this$SuspendingPointerInputModifierNode, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(AbstractClickableNode$onPointerEvent$slambda_3).ba = function (p1, $completion) {
    return this.s91((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$onPointerEvent$slambda_3).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.q91_1.a8z(this.r91_1, this);
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
  protoOf(AbstractClickableNode$onPointerEvent$slambda_3).t91 = function ($this$SuspendingPointerInputModifierNode, completion) {
    var i = new AbstractClickableNode$onPointerEvent$slambda_3(this.q91_1, completion);
    i.r91_1 = $this$SuspendingPointerInputModifierNode;
    return i;
  };
  function AbstractClickableNode$onPointerEvent$slambda_4(this$0, resultContinuation) {
    var i = new AbstractClickableNode$onPointerEvent$slambda_3(this$0, resultContinuation);
    var l = function ($this$SuspendingPointerInputModifierNode, $completion) {
      return i.s91($this$SuspendingPointerInputModifierNode, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AbstractClickableNode$onKeyEvent$slambda(this$0, $press, resultContinuation) {
    this.c92_1 = this$0;
    this.d92_1 = $press;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$onKeyEvent$slambda).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(AbstractClickableNode$onKeyEvent$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$onKeyEvent$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 3;
            this.f92_1 = this.c92_1.i8y_1;
            if (this.f92_1 == null) {
              this.g92_1 = null;
              this.h9_1 = 2;
              continue $sm;
            } else {
              this.h9_1 = 1;
              suspendResult = this.f92_1.r8z(this.d92_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var tmp_0 = this;
            tmp_0.g92_1 = Unit_instance;
            this.h9_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.k9_1;
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
  protoOf(AbstractClickableNode$onKeyEvent$slambda).s1m = function ($this$launch, completion) {
    var i = new AbstractClickableNode$onKeyEvent$slambda(this.c92_1, this.d92_1, completion);
    i.e92_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$onKeyEvent$slambda_0(this$0, $press, resultContinuation) {
    var i = new AbstractClickableNode$onKeyEvent$slambda(this$0, $press, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AbstractClickableNode$onKeyEvent$slambda_1(this$0, $it, resultContinuation) {
    this.p92_1 = this$0;
    this.q92_1 = $it;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$onKeyEvent$slambda_1).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(AbstractClickableNode$onKeyEvent$slambda_1).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$onKeyEvent$slambda_1).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 3;
            this.s92_1 = this.p92_1.i8y_1;
            if (this.s92_1 == null) {
              this.t92_1 = null;
              this.h9_1 = 2;
              continue $sm;
            } else {
              this.h9_1 = 1;
              suspendResult = this.s92_1.r8z(new Release(this.q92_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var tmp_0 = this;
            tmp_0.t92_1 = Unit_instance;
            this.h9_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.k9_1;
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
  protoOf(AbstractClickableNode$onKeyEvent$slambda_1).s1m = function ($this$launch, completion) {
    var i = new AbstractClickableNode$onKeyEvent$slambda_1(this.p92_1, this.q92_1, completion);
    i.r92_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$onKeyEvent$slambda_2(this$0, $it, resultContinuation) {
    var i = new AbstractClickableNode$onKeyEvent$slambda_1(this$0, $it, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AbstractClickableNode$applySemantics$lambda(this$0) {
    return function () {
      this$0.n8y_1();
      return true;
    };
  }
  function AbstractClickableNode$handlePressInteraction$slambda($this_handlePressInteraction, $offset, $interactionSource, this$0, resultContinuation) {
    this.c93_1 = $this_handlePressInteraction;
    this.d93_1 = $offset;
    this.e93_1 = $interactionSource;
    this.f93_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$handlePressInteraction$slambda).r1m = function ($this$coroutineScope, $completion) {
    var tmp = this.s1m($this$coroutineScope, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(AbstractClickableNode$handlePressInteraction$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$handlePressInteraction$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 9;
            var tmp_0 = this;
            tmp_0.h93_1 = launch(this.g93_1, VOID, VOID, AbstractClickableNode$handlePressInteraction$slambda$slambda_0(this.f93_1, this.d93_1, this.e93_1, null));
            this.h9_1 = 1;
            suspendResult = this.c93_1.s93(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i93_1 = suspendResult;
            if (this.h93_1.tv()) {
              this.h9_1 = 4;
              suspendResult = cancelAndJoin(this.h93_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.j93_1 = this.f93_1.s8y_1;
              if (this.j93_1 == null) {
                this.k93_1 = null;
                this.h9_1 = 3;
                continue $sm;
              } else {
                var tmp_1 = this;
                tmp_1.l93_1 = this.j93_1;
                this.m93_1 = this.l93_1;
                var tmp_2 = this;
                tmp_2.n93_1 = this.m93_1;
                this.o93_1 = this.n93_1;
                var tmp_3 = this;
                var tmp_4;
                if (this.i93_1) {
                  tmp_4 = new Release(this.o93_1);
                } else {
                  tmp_4 = new Cancel_0(this.o93_1);
                }
                tmp_3.p93_1 = tmp_4;
                this.h9_1 = 2;
                suspendResult = this.e93_1.r8z(this.p93_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

          case 2:
            var tmp_5 = this;
            tmp_5.k93_1 = Unit_instance;
            this.h9_1 = 3;
            continue $sm;
          case 3:
            this.h9_1 = 8;
            continue $sm;
          case 4:
            if (this.i93_1) {
              this.q93_1 = new Press(this.d93_1);
              this.r93_1 = new Release(this.q93_1);
              this.h9_1 = 5;
              suspendResult = this.e93_1.r8z(this.q93_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 7;
              continue $sm;
            }

          case 5:
            this.h9_1 = 6;
            suspendResult = this.e93_1.r8z(this.r93_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.h9_1 = 7;
            continue $sm;
          case 7:
            this.h9_1 = 8;
            continue $sm;
          case 8:
            this.f93_1.s8y_1 = null;
            return Unit_instance;
          case 9:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 9) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AbstractClickableNode$handlePressInteraction$slambda).s1m = function ($this$coroutineScope, completion) {
    var i = new AbstractClickableNode$handlePressInteraction$slambda(this.c93_1, this.d93_1, this.e93_1, this.f93_1, completion);
    i.g93_1 = $this$coroutineScope;
    return i;
  };
  function AbstractClickableNode$handlePressInteraction$slambda_0($this_handlePressInteraction, $offset, $interactionSource, this$0, resultContinuation) {
    var i = new AbstractClickableNode$handlePressInteraction$slambda($this_handlePressInteraction, $offset, $interactionSource, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.r1m($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AbstractClickableNode$emitHoverEnter$slambda($interactionSource, $interaction, resultContinuation) {
    this.b94_1 = $interactionSource;
    this.c94_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$emitHoverEnter$slambda).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(AbstractClickableNode$emitHoverEnter$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$emitHoverEnter$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.b94_1.r8z(this.c94_1, this);
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
  protoOf(AbstractClickableNode$emitHoverEnter$slambda).s1m = function ($this$launch, completion) {
    var i = new AbstractClickableNode$emitHoverEnter$slambda(this.b94_1, this.c94_1, completion);
    i.d94_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$emitHoverEnter$slambda_0($interactionSource, $interaction, resultContinuation) {
    var i = new AbstractClickableNode$emitHoverEnter$slambda($interactionSource, $interaction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AbstractClickableNode$emitHoverExit$slambda($interactionSource, $interaction, resultContinuation) {
    this.m94_1 = $interactionSource;
    this.n94_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$emitHoverExit$slambda).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(AbstractClickableNode$emitHoverExit$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$emitHoverExit$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.m94_1.r8z(this.n94_1, this);
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
  protoOf(AbstractClickableNode$emitHoverExit$slambda).s1m = function ($this$launch, completion) {
    var i = new AbstractClickableNode$emitHoverExit$slambda(this.m94_1, this.n94_1, completion);
    i.o94_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$emitHoverExit$slambda_0($interactionSource, $interaction, resultContinuation) {
    var i = new AbstractClickableNode$emitHoverExit$slambda($interactionSource, $interaction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $handlePressInteractionCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, offset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x94_1 = _this__u8e3s4;
    this.y94_1 = _this__u8e3s4_0;
    this.z94_1 = offset;
  }
  protoOf($handlePressInteractionCOROUTINE$0).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 3;
            this.a95_1 = this.x94_1.i8y_1;
            if (this.a95_1 == null) {
              this.b95_1 = null;
              this.h9_1 = 2;
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.c95_1 = this.a95_1;
              this.d95_1 = this.c95_1;
              var tmp_1 = this;
              tmp_1.e95_1 = this.d95_1;
              this.f95_1 = this.e95_1;
              this.h9_1 = 1;
              suspendResult = coroutineScope(AbstractClickableNode$handlePressInteraction$slambda_0(this.y94_1, this.z94_1, this.f95_1, this.x94_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var tmp_2 = this;
            tmp_2.b95_1 = Unit_instance;
            this.h9_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.k9_1;
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
  function AbstractClickableNode(interactionSource, indicationNodeFactory, enabled, onClickLabel, role, onClick) {
    DelegatingNode.call(this);
    this.i8y_1 = interactionSource;
    this.j8y_1 = indicationNodeFactory;
    this.k8y_1 = onClickLabel;
    this.l8y_1 = role;
    this.m8y_1 = enabled;
    this.n8y_1 = onClick;
    this.o8y_1 = false;
    this.p8y_1 = new FocusableNode(this.i8y_1);
    this.q8y_1 = null;
    this.r8y_1 = null;
    this.s8y_1 = null;
    this.t8y_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.u8y_1 = LinkedHashMap_init_$Create$();
    this.v8y_1 = Companion_getInstance_6().d3g_1;
    this.w8y_1 = this.i8y_1;
    this.x8y_1 = shouldLazilyCreateIndication(this);
    this.y8y_1 = TraverseKey_instance;
  }
  protoOf(AbstractClickableNode).a5b = function () {
    return this.o8y_1;
  };
  protoOf(AbstractClickableNode).c8z = function (_this__u8e3s4) {
  };
  protoOf(AbstractClickableNode).b8z = function (interactionSource, indicationNodeFactory, enabled, onClickLabel, role, onClick) {
    var isIndicationNodeDirty = false;
    if (!equals(this.w8y_1, interactionSource)) {
      this.d8z();
      this.w8y_1 = interactionSource;
      this.i8y_1 = interactionSource;
      isIndicationNodeDirty = true;
    }
    if (!equals(this.j8y_1, indicationNodeFactory)) {
      this.j8y_1 = indicationNodeFactory;
      isIndicationNodeDirty = true;
    }
    if (!(this.m8y_1 === enabled)) {
      if (enabled) {
        this.h6g(this.p8y_1);
      } else {
        this.j6g(this.p8y_1);
        this.d8z();
      }
      invalidateSemantics(this);
      this.m8y_1 = enabled;
    }
    if (!(this.k8y_1 == onClickLabel)) {
      this.k8y_1 = onClickLabel;
      invalidateSemantics(this);
    }
    var tmp = this.l8y_1;
    var tmp_0 = tmp == null ? null : new Role(tmp);
    var tmp_1 = role;
    if (!equals(tmp_0, tmp_1 == null ? null : new Role(tmp_1))) {
      this.l8y_1 = role;
      invalidateSemantics(this);
    }
    this.n8y_1 = onClick;
    if (!(this.x8y_1 === shouldLazilyCreateIndication(this))) {
      this.x8y_1 = shouldLazilyCreateIndication(this);
      if (!this.x8y_1 && this.r8y_1 == null)
        isIndicationNodeDirty = true;
    }
    if (isIndicationNodeDirty) {
      if (!(this.r8y_1 == null) || !this.x8y_1) {
        var tmp0_safe_receiver = this.r8y_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.foundation.AbstractClickableNode.updateCommon.<anonymous>' call
          this.j6g(tmp0_safe_receiver);
        }
        this.r8y_1 = null;
        initializeIndicationAndInteractionSourceIfNeeded(this);
      }
    }
    this.p8y_1.m90(this.i8y_1);
  };
  protoOf(AbstractClickableNode).e5b = function () {
    if (!this.x8y_1) {
      initializeIndicationAndInteractionSourceIfNeeded(this);
    }
    if (this.m8y_1) {
      this.h6g(this.p8y_1);
    }
  };
  protoOf(AbstractClickableNode).g5b = function () {
    this.d8z();
    if (this.w8y_1 == null) {
      this.i8y_1 = null;
    }
    var tmp0_safe_receiver = this.r8y_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.AbstractClickableNode.onDetach.<anonymous>' call
      this.j6g(tmp0_safe_receiver);
    }
    this.r8y_1 = null;
  };
  protoOf(AbstractClickableNode).d8z = function () {
    var tmp0_safe_receiver = this.i8y_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.AbstractClickableNode.disposeInteractions.<anonymous>' call
      var tmp0_safe_receiver_0 = this.s8y_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.foundation.AbstractClickableNode.disposeInteractions.<anonymous>.<anonymous>' call
        var interaction = new Cancel_0(tmp0_safe_receiver_0);
        tmp0_safe_receiver.g95(interaction);
      }
      var tmp1_safe_receiver = this.t8y_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.foundation.AbstractClickableNode.disposeInteractions.<anonymous>.<anonymous>' call
        var interaction_0 = new Exit(tmp1_safe_receiver);
        tmp0_safe_receiver.g95(interaction_0);
      }
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = this.u8y_1.n2().j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'androidx.compose.foundation.AbstractClickableNode.disposeInteractions.<anonymous>.<anonymous>' call
        tmp0_safe_receiver.g95(new Cancel_0(element));
      }
    }
    this.s8y_1 = null;
    this.t8y_1 = null;
    this.u8y_1.f2();
  };
  protoOf(AbstractClickableNode).d5v = function (pointerEvent, pass, bounds) {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.toOffset' call
    var this_0 = get_center(bounds);
    tmp.v8y_1 = Offset(_IntOffset___get_x__impl__qiqr5o(this_0), _IntOffset___get_y__impl__2avpwj(this_0));
    initializeIndicationAndInteractionSourceIfNeeded(this);
    if (this.m8y_1) {
      if (pass.equals(PointerEventPass_Main_getInstance())) {
        var tmp0_subject = pointerEvent.p5u_1;
        if (tmp0_subject === Companion_getInstance_7().q5v_1) {
          var tmp_0 = this.z5a();
          launch(tmp_0, VOID, VOID, AbstractClickableNode$onPointerEvent$slambda_0(this, null));
        } else if (tmp0_subject === Companion_getInstance_7().r5v_1) {
          var tmp_1 = this.z5a();
          launch(tmp_1, VOID, VOID, AbstractClickableNode$onPointerEvent$slambda_2(this, null));
        }
      }
    }
    if (this.q8y_1 == null) {
      var tmp_2 = this;
      tmp_2.q8y_1 = this.h6g(SuspendingPointerInputModifierNode(AbstractClickableNode$onPointerEvent$slambda_4(this, null)));
    }
    var tmp1_safe_receiver = this.q8y_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d5v(pointerEvent, pass, bounds);
    }
  };
  protoOf(AbstractClickableNode).t5v = function () {
    var tmp0_safe_receiver = this.i8y_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.AbstractClickableNode.onCancelPointerInput.<anonymous>' call
      var tmp0_safe_receiver_0 = this.t8y_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.foundation.AbstractClickableNode.onCancelPointerInput.<anonymous>.<anonymous>' call
        var interaction = new Exit(tmp0_safe_receiver_0);
        tmp = tmp0_safe_receiver.g95(interaction);
      }
    }
    this.t8y_1 = null;
    var tmp1_safe_receiver = this.q8y_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.t5v();
    }
  };
  protoOf(AbstractClickableNode).l5l = function (event) {
    initializeIndicationAndInteractionSourceIfNeeded(this);
    var tmp;
    if (this.m8y_1 && get_isPress(event)) {
      var tmp_0;
      if (!this.u8y_1.j2(new Key(get_key(event)))) {
        var press = new Press(this.v8y_1);
        var tmp0 = this.u8y_1;
        // Inline function 'kotlin.collections.set' call
        var key = new Key(get_key(event));
        tmp0.o2(key, press);
        if (!(this.i8y_1 == null)) {
          var tmp_1 = this.z5a();
          launch(tmp_1, VOID, VOID, AbstractClickableNode$onKeyEvent$slambda_0(this, press, null));
        }
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else if (this.m8y_1 && get_isClick(event)) {
      var tmp0_safe_receiver = this.u8y_1.p2(new Key(get_key(event)));
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.foundation.AbstractClickableNode.onKeyEvent.<anonymous>' call
        if (!(this.i8y_1 == null)) {
          var tmp_2 = this.z5a();
          launch(tmp_2, VOID, VOID, AbstractClickableNode$onKeyEvent$slambda_2(this, tmp0_safe_receiver, null));
        }
      }
      this.n8y_1();
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AbstractClickableNode).k5l = function (event) {
    return false;
  };
  protoOf(AbstractClickableNode).o5j = function (focusState) {
    if (focusState.f5n()) {
      initializeIndicationAndInteractionSourceIfNeeded(this);
    }
    if (this.m8y_1) {
      this.p8y_1.o5j(focusState);
    }
  };
  protoOf(AbstractClickableNode).x6e = function () {
    return true;
  };
  protoOf(AbstractClickableNode).n6e = function (_this__u8e3s4) {
    var tmp = this.l8y_1;
    if (!((tmp == null ? null : new Role(tmp)) == null)) {
      var tmp_0 = this.l8y_1;
      set_role(_this__u8e3s4, ensureNotNull(tmp_0 == null ? null : new Role(tmp_0)).k71_1);
    }
    var tmp0_label = this.k8y_1;
    onClick(_this__u8e3s4, tmp0_label, AbstractClickableNode$applySemantics$lambda(this));
    if (this.m8y_1) {
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.foundation.AbstractClickableNode.applySemantics.<anonymous>' call
      this.p8y_1.n6e(_this__u8e3s4);
    } else {
      disabled(_this__u8e3s4);
    }
    this.c8z(_this__u8e3s4);
  };
  protoOf(AbstractClickableNode).z8y = function (_this__u8e3s4, offset, $completion) {
    var tmp = new $handlePressInteractionCOROUTINE$0(this, _this__u8e3s4, offset, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(AbstractClickableNode).h5c = function () {
    return this.y8y_1;
  };
  function requestFocusWhenInMouseInputMode(_this__u8e3s4) {
    if (isRequestFocusOnClickEnabled()) {
      requestFocus(_this__u8e3s4);
    }
  }
  function hasScrollableContainer(_this__u8e3s4) {
    var hasScrollable = {_v: false};
    var tmp = TraverseKey_instance_2;
    traverseAncestors(_this__u8e3s4, tmp, hasScrollableContainer$lambda(hasScrollable));
    return hasScrollable._v;
  }
  function clickable$lambda($indication, $enabled, $onClickLabel, $role, $onClick) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.j25(-1525724089);
      sourceInformation($composer_0, 'C380@18062L39:Clickable.kt#71ulvw');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-1525724089, $changed, -1, 'androidx.compose.foundation.clickableWithIndicationIfNeeded.<anonymous> (Clickable.kt:380)');
        tmp = Unit_instance;
      }
      sourceInformationMarkerStart($composer_0, -442644670, 'CC(remember):Clickable.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.d27();
      var tmp_0;
      if (false || it === Companion_getInstance_8().w1z_1) {
        // Inline function 'androidx.compose.foundation.clickableWithIndicationIfNeeded.<anonymous>.<anonymous>' call
        var value = funMutableInteractionSource();
        $composer_0.o27(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var newInteractionSource = tmp1_group;
      var tmp_2 = indication(Companion_instance_0, newInteractionSource, $indication);
      // Inline function 'androidx.compose.foundation.clickable.<anonymous>' call
      var tmp$ret$4 = new ClickableElement(newInteractionSource, null, $enabled, $onClickLabel, $role, $onClick);
      var tmp0 = tmp_2.f5a(tmp$ret$4);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_instance;
      }
      $composer_0.l25();
      return tmp0;
    };
  }
  function hasScrollableContainer$lambda($hasScrollable) {
    return function (node) {
      var tmp;
      if ($hasScrollable._v) {
        tmp = true;
      } else {
        tmp = (node instanceof ScrollableContainerNode ? node : THROW_CCE()).u95_1;
      }
      $hasScrollable._v = tmp;
      return !$hasScrollable._v;
    };
  }
  function isSystemInDarkTheme($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1100791446, 'C(isSystemInDarkTheme)40@1721L22:DarkTheme.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(-1100791446, $changed, -1, 'androidx.compose.foundation.isSystemInDarkTheme (DarkTheme.kt:40)');
    }
    var tmp0 = _isSystemInDarkTheme($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function FocusableNode$onFocusEvent$slambda(this$0, resultContinuation) {
    this.d96_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FocusableNode$onFocusEvent$slambda).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(FocusableNode$onFocusEvent$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FocusableNode$onFocusEvent$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = scrollIntoView(this.d96_1, VOID, this);
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
  protoOf(FocusableNode$onFocusEvent$slambda).s1m = function ($this$launch, completion) {
    var i = new FocusableNode$onFocusEvent$slambda(this.d96_1, completion);
    i.e96_1 = $this$launch;
    return i;
  };
  function FocusableNode$onFocusEvent$slambda_0(this$0, resultContinuation) {
    var i = new FocusableNode$onFocusEvent$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FocusableNode$applySemantics$lambda(this$0) {
    return function () {
      return requestFocus(this$0);
    };
  }
  function FocusableNode(interactionSource) {
    DelegatingNode.call(this);
    this.h90_1 = false;
    this.i90_1 = null;
    this.j90_1 = this.h6g(new FocusableInteractionNode(interactionSource));
    this.k90_1 = this.h6g(new FocusablePinnableContainerNode());
    this.l90_1 = this.h6g(new FocusedBoundsNode());
    this.h6g(funFocusTargetModifierNode());
  }
  protoOf(FocusableNode).a5b = function () {
    return this.h90_1;
  };
  protoOf(FocusableNode).m90 = function (interactionSource) {
    return this.j90_1.m90(interactionSource);
  };
  protoOf(FocusableNode).o5j = function (focusState) {
    if (!equals(this.i90_1, focusState)) {
      var isFocused = focusState.f5n();
      if (isFocused) {
        var tmp = this.z5a();
        launch(tmp, VOID, VOID, FocusableNode$onFocusEvent$slambda_0(this, null));
      }
      if (this.x5a_1) {
        invalidateSemantics(this);
      }
      this.j90_1.v96(isFocused);
      this.l90_1.v96(isFocused);
      this.k90_1.v96(isFocused);
      this.i90_1 = focusState;
    }
  };
  protoOf(FocusableNode).n6e = function (_this__u8e3s4) {
    var tmp0_safe_receiver = this.i90_1;
    set_focused(_this__u8e3s4, (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f5n()) === true);
    requestFocus_0(_this__u8e3s4, VOID, FocusableNode$applySemantics$lambda(this));
  };
  protoOf(FocusableNode).d68 = function (coordinates) {
    this.l90_1.d68(coordinates);
  };
  function disposeInteractionSource($this) {
    var tmp0_safe_receiver = $this.s96_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.FocusableInteractionNode.disposeInteractionSource.<anonymous>' call
      var tmp0_safe_receiver_0 = $this.t96_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.foundation.FocusableInteractionNode.disposeInteractionSource.<anonymous>.<anonymous>' call
        var interaction = new Unfocus(tmp0_safe_receiver_0);
        tmp = tmp0_safe_receiver.g95(interaction);
      }
    }
    $this.t96_1 = null;
  }
  function emitWithFallback(_this__u8e3s4, $this, interaction) {
    if ($this.x5a_1) {
      var tmp0_safe_receiver = $this.z5a().sv().u9(Key_instance);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp = tmp0_safe_receiver.vw(FocusableInteractionNode$emitWithFallback$lambda(_this__u8e3s4, interaction));
      }
      var handler = tmp;
      var tmp_0 = $this.z5a();
      launch(tmp_0, VOID, VOID, FocusableInteractionNode$emitWithFallback$slambda_0(_this__u8e3s4, interaction, handler, null));
    } else {
      _this__u8e3s4.g95(interaction);
    }
  }
  function FocusableInteractionNode$emitWithFallback$lambda($this_emitWithFallback, $interaction) {
    return function (it) {
      $this_emitWithFallback.g95($interaction);
      return Unit_instance;
    };
  }
  function FocusableInteractionNode$emitWithFallback$slambda($this_emitWithFallback, $interaction, $handler, resultContinuation) {
    this.k98_1 = $this_emitWithFallback;
    this.l98_1 = $interaction;
    this.m98_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FocusableInteractionNode$emitWithFallback$slambda).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(FocusableInteractionNode$emitWithFallback$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FocusableInteractionNode$emitWithFallback$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.k98_1.r8z(this.l98_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = this.m98_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.qy();
            }

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
  protoOf(FocusableInteractionNode$emitWithFallback$slambda).s1m = function ($this$launch, completion) {
    var i = new FocusableInteractionNode$emitWithFallback$slambda(this.k98_1, this.l98_1, this.m98_1, completion);
    i.n98_1 = $this$launch;
    return i;
  };
  function FocusableInteractionNode$emitWithFallback$slambda_0($this_emitWithFallback, $interaction, $handler, resultContinuation) {
    var i = new FocusableInteractionNode$emitWithFallback$slambda($this_emitWithFallback, $interaction, $handler, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FocusableInteractionNode(interactionSource) {
    Node.call(this);
    this.s96_1 = interactionSource;
    this.t96_1 = null;
    this.u96_1 = false;
  }
  protoOf(FocusableInteractionNode).a5b = function () {
    return this.u96_1;
  };
  protoOf(FocusableInteractionNode).v96 = function (isFocused) {
    var tmp0_safe_receiver = this.s96_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.FocusableInteractionNode.setFocus.<anonymous>' call
      var tmp;
      if (isFocused) {
        var tmp0_safe_receiver_0 = this.t96_1;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.foundation.FocusableInteractionNode.setFocus.<anonymous>.<anonymous>' call
          var interaction = new Unfocus(tmp0_safe_receiver_0);
          emitWithFallback(tmp0_safe_receiver, this, interaction);
          this.t96_1 = null;
        }
        var interaction_0 = new Focus();
        emitWithFallback(tmp0_safe_receiver, this, interaction_0);
        this.t96_1 = interaction_0;
        tmp = Unit_instance;
      } else {
        var tmp1_safe_receiver = this.t96_1;
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.foundation.FocusableInteractionNode.setFocus.<anonymous>.<anonymous>' call
          var interaction_1 = new Unfocus(tmp1_safe_receiver);
          emitWithFallback(tmp0_safe_receiver, this, interaction_1);
          this.t96_1 = null;
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
    }
  };
  protoOf(FocusableInteractionNode).m90 = function (interactionSource) {
    if (!equals(this.s96_1, interactionSource)) {
      disposeInteractionSource(this);
      this.s96_1 = interactionSource;
    }
  };
  function retrievePinnableContainer($this) {
    var container = {_v: null};
    observeReads($this, FocusablePinnableContainerNode$retrievePinnableContainer$lambda(container, $this));
    return container._v;
  }
  function FocusablePinnableContainerNode$retrievePinnableContainer$lambda($container, this$0) {
    return function () {
      $container._v = currentValueOf(this$0, get_LocalPinnableContainer());
      return Unit_instance;
    };
  }
  function FocusablePinnableContainerNode() {
    Node.call(this);
    this.z97_1 = null;
    this.a98_1 = false;
    this.b98_1 = false;
  }
  protoOf(FocusablePinnableContainerNode).a5b = function () {
    return this.b98_1;
  };
  protoOf(FocusablePinnableContainerNode).v96 = function (focused) {
    if (focused) {
      var pinnableContainer = retrievePinnableContainer(this);
      var tmp = this;
      tmp.z97_1 = pinnableContainer == null ? null : pinnableContainer.o98();
    } else {
      var tmp1_safe_receiver = this.z97_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.q1p();
      }
      this.z97_1 = null;
    }
    this.a98_1 = focused;
  };
  protoOf(FocusablePinnableContainerNode).j5b = function () {
    var tmp0_safe_receiver = this.z97_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.q1p();
    }
    this.z97_1 = null;
  };
  protoOf(FocusablePinnableContainerNode).b5f = function () {
    var pinnableContainer = retrievePinnableContainer(this);
    if (this.a98_1) {
      var tmp0_safe_receiver = this.z97_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.q1p();
      }
      var tmp = this;
      tmp.z97_1 = pinnableContainer == null ? null : pinnableContainer.o98();
    }
  };
  function TraverseKey_0() {
  }
  var TraverseKey_instance_0;
  function TraverseKey_getInstance_0() {
    return TraverseKey_instance_0;
  }
  function FocusedBoundsObserverNode() {
  }
  protoOf(FocusedBoundsObserverNode).d99 = function (focusedBounds) {
    this.c99_1(focusedBounds);
    var tmp0_safe_receiver = findNearestAncestor(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d99(focusedBounds);
    }
  };
  function _get_observer__9uzl8r($this) {
    var tmp;
    if ($this.x5a_1) {
      var tmp_0 = findNearestAncestor_0($this, TraverseKey_instance_0);
      tmp = tmp_0 instanceof FocusedBoundsObserverNode ? tmp_0 : null;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function notifyObserverWhenAttached($this) {
    if (!($this.l97_1 == null) && ensureNotNull($this.l97_1).r5n()) {
      var tmp0_safe_receiver = _get_observer__9uzl8r($this);
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.d99($this.l97_1);
      }
    }
  }
  function TraverseKey_1() {
  }
  var TraverseKey_instance_1;
  function TraverseKey_getInstance_1() {
    return TraverseKey_instance_1;
  }
  function FocusedBoundsNode() {
    Node.call(this);
    this.j97_1 = false;
    this.k97_1 = false;
    this.l97_1 = null;
  }
  protoOf(FocusedBoundsNode).h5c = function () {
    return TraverseKey_instance_1;
  };
  protoOf(FocusedBoundsNode).a5b = function () {
    return this.k97_1;
  };
  protoOf(FocusedBoundsNode).v96 = function (focused) {
    if (focused === this.j97_1)
      return Unit_instance;
    if (!focused) {
      var tmp0_safe_receiver = _get_observer__9uzl8r(this);
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.d99(null);
      }
    } else {
      notifyObserverWhenAttached(this);
    }
    this.j97_1 = focused;
  };
  protoOf(FocusedBoundsNode).d68 = function (coordinates) {
    this.l97_1 = coordinates;
    if (!this.j97_1)
      return Unit_instance;
    if (coordinates.r5n()) {
      notifyObserverWhenAttached(this);
    } else {
      var tmp0_safe_receiver = _get_observer__9uzl8r(this);
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.d99(null);
      }
    }
  };
  function get_LocalIndication() {
    _init_properties_Indication_kt__w3ndj0();
    return LocalIndication;
  }
  var LocalIndication;
  function Indication() {
  }
  function DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda$slambda($pressCount, $hoverCount, $focusCount, this$0, resultContinuation) {
    this.n99_1 = $pressCount;
    this.o99_1 = $hoverCount;
    this.p99_1 = $focusCount;
    this.q99_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda$slambda).s99 = function (interaction, $completion) {
    var tmp = this.t99(interaction, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda$slambda).ba = function (p1, $completion) {
    return this.s99((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          var tmp0_subject = this.r99_1;
          if (tmp0_subject instanceof Press) {
            var tmp1 = this.n99_1._v;
            this.n99_1._v = tmp1 + 1 | 0;
          } else {
            if (tmp0_subject instanceof Release) {
              var tmp2 = this.n99_1._v;
              this.n99_1._v = tmp2 - 1 | 0;
            } else {
              if (tmp0_subject instanceof Cancel_0) {
                var tmp3 = this.n99_1._v;
                this.n99_1._v = tmp3 - 1 | 0;
              } else {
                if (tmp0_subject instanceof Enter) {
                  var tmp4 = this.o99_1._v;
                  this.o99_1._v = tmp4 + 1 | 0;
                } else {
                  if (tmp0_subject instanceof Exit) {
                    var tmp5 = this.o99_1._v;
                    this.o99_1._v = tmp5 - 1 | 0;
                  } else {
                    if (tmp0_subject instanceof Focus) {
                      var tmp6 = this.p99_1._v;
                      this.p99_1._v = tmp6 + 1 | 0;
                    } else {
                      if (tmp0_subject instanceof Unfocus) {
                        var tmp7 = this.p99_1._v;
                        this.p99_1._v = tmp7 - 1 | 0;
                      }
                    }
                  }
                }
              }
            }
          }
          var pressed = this.n99_1._v > 0;
          var hovered = this.o99_1._v > 0;
          var focused = this.p99_1._v > 0;
          var invalidateNeeded = false;
          if (!(this.q99_1.i9a_1 === pressed)) {
            this.q99_1.i9a_1 = pressed;
            invalidateNeeded = true;
          }
          if (!(this.q99_1.j9a_1 === hovered)) {
            this.q99_1.j9a_1 = hovered;
            invalidateNeeded = true;
          }
          if (!(this.q99_1.k9a_1 === focused)) {
            this.q99_1.k9a_1 = focused;
            invalidateNeeded = true;
          }
          if (invalidateNeeded) {
            invalidateDraw(this.q99_1);
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda$slambda).t99 = function (interaction, completion) {
    var i = new DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda$slambda(this.n99_1, this.o99_1, this.p99_1, this.q99_1, completion);
    i.r99_1 = interaction;
    return i;
  };
  function DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda$slambda_0($pressCount, $hoverCount, $focusCount, this$0, resultContinuation) {
    var i = new DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda$slambda($pressCount, $hoverCount, $focusCount, this$0, resultContinuation);
    var l = function (interaction, $completion) {
      return i.s99(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.l9a_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).n1h = function (value, $completion) {
    return this.l9a_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).q3 = function () {
    return this.l9a_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda(this$0, resultContinuation) {
    this.u9a_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.w9a_1 = {_v: 0};
            this.x9a_1 = {_v: 0};
            this.y9a_1 = {_v: 0};
            this.h9_1 = 1;
            var tmp_0 = this.u9a_1.h9a_1.z9a();
            var tmp_1 = DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda$slambda_0(this.w9a_1, this.x9a_1, this.y9a_1, this.u9a_1, null);
            suspendResult = tmp_0.z1f(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  protoOf(DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda).s1m = function ($this$launch, completion) {
    var i = new DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda(this.u9a_1, completion);
    i.v9a_1 = $this$launch;
    return i;
  };
  function DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda_0(this$0, resultContinuation) {
    var i = new DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DefaultDebugIndicationInstance(interactionSource) {
    Node.call(this);
    this.h9a_1 = interactionSource;
    this.i9a_1 = false;
    this.j9a_1 = false;
    this.k9a_1 = false;
  }
  protoOf(DefaultDebugIndicationInstance).e5b = function () {
    var tmp = this.z5a();
    launch(tmp, VOID, VOID, DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda_0(this, null));
  };
  protoOf(DefaultDebugIndicationInstance).j5c = function (_this__u8e3s4) {
    _this__u8e3s4.u5f();
    if (this.i9a_1) {
      _this__u8e3s4.z4d(Color__copy$default_impl_ectz3s(Companion_getInstance().x44_1, 0.3), VOID, _this__u8e3s4.z4c());
    } else if (this.j9a_1 || this.k9a_1) {
      _this__u8e3s4.z4d(Color__copy$default_impl_ectz3s(Companion_getInstance().x44_1, 0.1), VOID, _this__u8e3s4.z4c());
    }
  };
  function DefaultDebugIndication() {
  }
  protoOf(DefaultDebugIndication).n90 = function (interactionSource) {
    return new DefaultDebugIndicationInstance(interactionSource);
  };
  protoOf(DefaultDebugIndication).hashCode = function () {
    return -1;
  };
  protoOf(DefaultDebugIndication).equals = function (other) {
    return other === this;
  };
  var DefaultDebugIndication_instance;
  function DefaultDebugIndication_getInstance() {
    return DefaultDebugIndication_instance;
  }
  function NoIndicationInstance() {
  }
  protoOf(NoIndicationInstance).a9b = function (_this__u8e3s4) {
    _this__u8e3s4.u5f();
  };
  var NoIndicationInstance_instance;
  function NoIndicationInstance_getInstance() {
    return NoIndicationInstance_instance;
  }
  function IndicationNodeFactory() {
  }
  function indication(_this__u8e3s4, interactionSource, indication) {
    _init_properties_Indication_kt__w3ndj0();
    return indicationImpl(_this__u8e3s4, interactionSource, platformIndication(indication));
  }
  function indicationImpl(_this__u8e3s4, interactionSource, indication) {
    _init_properties_Indication_kt__w3ndj0();
    if (indication == null)
      return _this__u8e3s4;
    if (!(indication == null) ? isInterface(indication, IndicationNodeFactory) : false) {
      return _this__u8e3s4.f5a(new IndicationModifierElement(interactionSource, indication));
    }
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = indicationImpl$lambda(interactionSource, indication);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return composed(_this__u8e3s4, tmp0_inspectorInfo, indicationImpl$lambda_0(indication, interactionSource));
  }
  function IndicationModifierElement(interactionSource, indication) {
    ModifierNodeElement.call(this);
    this.c9b_1 = interactionSource;
    this.d9b_1 = indication;
  }
  protoOf(IndicationModifierElement).f2e = function () {
    return new IndicationModifierNode(this.d9b_1.n90(this.c9b_1));
  };
  protoOf(IndicationModifierElement).e9b = function (node) {
    node.v9b(this.d9b_1.n90(this.c9b_1));
  };
  protoOf(IndicationModifierElement).t5f = function (node) {
    return this.e9b(node instanceof IndicationModifierNode ? node : THROW_CCE());
  };
  protoOf(IndicationModifierElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IndicationModifierElement))
      return false;
    if (!equals(this.c9b_1, other.c9b_1))
      return false;
    if (!this.d9b_1.equals(other.d9b_1))
      return false;
    return true;
  };
  protoOf(IndicationModifierElement).hashCode = function () {
    var result = hashCode(this.c9b_1);
    result = imul(31, result) + this.d9b_1.hashCode() | 0;
    return result;
  };
  function IndicationModifier(indicationInstance) {
    this.w9b_1 = indicationInstance;
  }
  protoOf(IndicationModifier).j5c = function (_this__u8e3s4) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.IndicationModifier.draw.<anonymous>' call
    this.w9b_1.a9b(_this__u8e3s4);
  };
  function IndicationModifierNode(indicationNode) {
    DelegatingNode.call(this);
    this.u9b_1 = indicationNode;
    this.h6g(this.u9b_1);
  }
  protoOf(IndicationModifierNode).v9b = function (indicationNode) {
    this.j6g(this.u9b_1);
    this.u9b_1 = indicationNode;
    this.h6g(indicationNode);
  };
  function LocalIndication$lambda() {
    _init_properties_Indication_kt__w3ndj0();
    return DefaultDebugIndication_instance;
  }
  function indicationImpl$lambda($interactionSource, $indication) {
    return function ($this$null) {
      $this$null.h8l_1 = 'indication';
      $this$null.j8l_1.l8l('interactionSource', $interactionSource);
      $this$null.j8l_1.l8l('indication', $indication);
      return Unit_instance;
    };
  }
  function indicationImpl$lambda_0($indication, $interactionSource) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.j25(-51460101);
      sourceInformation($composer_0, 'C199@9556L42,200@9611L79:Indication.kt#71ulvw');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-51460101, $changed, -1, 'androidx.compose.foundation.indicationImpl.<anonymous> (Indication.kt:198)');
        tmp = Unit_instance;
      }
      var instance = $indication.e99($interactionSource, $composer_0, 0);
      sourceInformationMarkerStart($composer_0, -1180480700, 'CC(remember):Indication.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.m1w(instance);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.d27();
      var tmp_0;
      if (invalid || it === Companion_getInstance_8().w1z_1) {
        // Inline function 'androidx.compose.foundation.indicationImpl.<anonymous>.<anonymous>' call
        var value = new IndicationModifier(instance);
        $composer_0.o27(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      $composer_0.l25();
      return tmp1_group;
    };
  }
  var properties_initialized_Indication_kt_w71gpq;
  function _init_properties_Indication_kt__w3ndj0() {
    if (!properties_initialized_Indication_kt_w71gpq) {
      properties_initialized_Indication_kt_w71gpq = true;
      LocalIndication = staticCompositionLocalOf(LocalIndication$lambda);
    }
  }
  function get_mouseSlop() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return mouseSlop;
  }
  var mouseSlop;
  function get_defaultTouchSlop() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return defaultTouchSlop;
  }
  var defaultTouchSlop;
  function get_mouseToTouchSlopRatio() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return mouseToTouchSlopRatio;
  }
  var mouseToTouchSlopRatio;
  function isPointerUp(_this__u8e3s4, pointerId) {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    var tmp0 = _this__u8e3s4.k5u_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
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
          // Inline function 'androidx.compose.ui.util.fastFirstOrNull.<anonymous>' call
          // Inline function 'androidx.compose.foundation.gestures.isPointerUp.<anonymous>' call
          if (equals(item.q5u_1, pointerId)) {
            tmp$ret$1 = item;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    return !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t5u_1) === true);
  }
  function pointerSlop(_this__u8e3s4, pointerType) {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return pointerType === Companion_getInstance_9().i5w_1 ? _this__u8e3s4.c6n() * get_mouseToTouchSlopRatio() : _this__u8e3s4.c6n();
  }
  function drag(_this__u8e3s4, pointerId, onDrag, $completion) {
    var tmp = new $dragCOROUTINE$5(_this__u8e3s4, pointerId, onDrag, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function awaitLongPressOrCancellation(_this__u8e3s4, pointerId, $completion) {
    var tmp = new $awaitLongPressOrCancellationCOROUTINE$6(_this__u8e3s4, pointerId, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function awaitDragOrCancellation(_this__u8e3s4, pointerId, $completion) {
    var tmp = new $awaitDragOrCancellationCOROUTINE$7(_this__u8e3s4, pointerId, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function awaitLongPressOrCancellation$slambda($currentDown, $longPress, resultContinuation) {
    this.w9d_1 = $currentDown;
    this.x9d_1 = $longPress;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitLongPressOrCancellation$slambda).b9e = function ($this$withTimeout, $completion) {
    var tmp = this.c9e($this$withTimeout, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(awaitLongPressOrCancellation$slambda).ba = function (p1, $completion) {
    return this.b9e((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitLongPressOrCancellation$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 5;
            this.z9d_1 = false;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            if (!!this.z9d_1) {
              this.h9_1 = 4;
              continue $sm;
            }

            this.h9_1 = 2;
            suspendResult = this.y9d_1.i5z(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.a9e_1 = suspendResult;
            var tmp0 = this.a9e_1.k5u_1;
            var tmp$ret$0;
            l$ret$1: do {
              var inductionVariable = 0;
              var last = tmp0.n() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0.p(index);
                  if (!changedToUpIgnoreConsumed(item)) {
                    tmp$ret$0 = false;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = true;
            }
             while (false);
            if (tmp$ret$0) {
              this.z9d_1 = true;
            }

            var tmp2 = this.a9e_1.k5u_1;
            var tmp$ret$2;
            l$ret$3: do {
              var inductionVariable_0 = 0;
              var last_0 = tmp2.n() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = tmp2.p(index_0);
                  if (item_0.l5w() || isOutOfBounds(item_0, this.y9d_1.v5e(), this.y9d_1.g5z())) {
                    tmp$ret$2 = true;
                    break l$ret$3;
                  }
                }
                 while (inductionVariable_0 <= last_0);
              tmp$ret$2 = false;
            }
             while (false);
            if (tmp$ret$2) {
              this.z9d_1 = true;
            }

            this.h9_1 = 3;
            suspendResult = this.y9d_1.i5z(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var consumeCheck = suspendResult;
            var tmp4 = consumeCheck.k5u_1;
            var tmp$ret$4;
            l$ret$5: do {
              var inductionVariable_1 = 0;
              var last_1 = tmp4.n() - 1 | 0;
              if (inductionVariable_1 <= last_1)
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = tmp4.p(index_1);
                  if (item_1.l5w()) {
                    tmp$ret$4 = true;
                    break l$ret$5;
                  }
                }
                 while (inductionVariable_1 <= last_1);
              tmp$ret$4 = false;
            }
             while (false);
            if (tmp$ret$4) {
              this.z9d_1 = true;
            }

            if (isPointerUp(this.a9e_1, this.w9d_1._v.q5u_1)) {
              var tmp6 = this.a9e_1.k5u_1;
              var tmp$ret$6;
              l$ret$7: do {
                var inductionVariable_2 = 0;
                var last_2 = tmp6.n() - 1 | 0;
                if (inductionVariable_2 <= last_2)
                  do {
                    var index_2 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    var item_2 = tmp6.p(index_2);
                    if (item_2.t5u_1) {
                      tmp$ret$6 = item_2;
                      break l$ret$7;
                    }
                  }
                   while (inductionVariable_2 <= last_2);
                tmp$ret$6 = null;
              }
               while (false);
              var newPressed = tmp$ret$6;
              if (!(newPressed == null)) {
                this.w9d_1._v = newPressed;
                this.x9d_1._v = this.w9d_1._v;
              } else {
                this.z9d_1 = true;
              }
            } else {
              var tmp8 = this.a9e_1.k5u_1;
              var tmp$ret$8;
              l$ret$9: do {
                var inductionVariable_3 = 0;
                var last_3 = tmp8.n() - 1 | 0;
                if (inductionVariable_3 <= last_3)
                  do {
                    var index_3 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var item_3 = tmp8.p(index_3);
                    if (equals(item_3.q5u_1, this.w9d_1._v.q5u_1)) {
                      tmp$ret$8 = item_3;
                      break l$ret$9;
                    }
                  }
                   while (inductionVariable_3 <= last_3);
                tmp$ret$8 = null;
              }
               while (false);
              this.x9d_1._v = tmp$ret$8;
            }

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
  protoOf(awaitLongPressOrCancellation$slambda).c9e = function ($this$withTimeout, completion) {
    var i = new awaitLongPressOrCancellation$slambda(this.w9d_1, this.x9d_1, completion);
    i.y9d_1 = $this$withTimeout;
    return i;
  };
  function awaitLongPressOrCancellation$slambda_0($currentDown, $longPress, resultContinuation) {
    var i = new awaitLongPressOrCancellation$slambda($currentDown, $longPress, resultContinuation);
    var l = function ($this$withTimeout, $completion) {
      return i.b9e($this$withTimeout, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $dragCOROUTINE$5(_this__u8e3s4, pointerId, onDrag, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f9c_1 = _this__u8e3s4;
    this.g9c_1 = pointerId;
    this.h9c_1 = onDrag;
  }
  protoOf($dragCOROUTINE$5).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 3;
            this.i9c_1 = this.g9c_1;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.h9_1 = 4;
              continue $sm;
            }

            this.h9_1 = 2;
            suspendResult = awaitDragOrCancellation(this.f9c_1, this.i9c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return false;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var change = tmp_0;
            if (changedToUpIgnoreConsumed(change)) {
              return true;
            }

            this.h9c_1(change);
            this.i9c_1 = change.q5u_1;
            this.h9_1 = 1;
            continue $sm;
          case 3:
            throw this.k9_1;
          case 4:
            return Unit_instance;
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
  function $awaitLongPressOrCancellationCOROUTINE$6(_this__u8e3s4, pointerId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r9c_1 = _this__u8e3s4;
    this.s9c_1 = pointerId;
  }
  protoOf($awaitLongPressOrCancellationCOROUTINE$6).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 3;
            if (isPointerUp(this.r9c_1.h5z(), this.s9c_1)) {
              return null;
            }

            var tmp_0 = this;
            var tmp0 = this.r9c_1.h5z().k5u_1;
            var tmp$ret$0;
            l$ret$1: do {
              var inductionVariable = 0;
              var last = tmp0.n() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0.p(index);
                  if (equals(item.q5u_1, this.s9c_1)) {
                    tmp$ret$0 = item;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.t9c_1 = tmp_1;
            this.u9c_1 = {_v: null};
            this.v9c_1 = {_v: this.t9c_1};
            this.w9c_1 = this.r9c_1.e5z().a6n();
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.r9c_1.k5z(this.w9c_1, awaitLongPressOrCancellation$slambda_0(this.v9c_1, this.u9c_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x9c_1 = null;
            this.i9_1 = 3;
            this.h9_1 = 4;
            continue $sm;
          case 2:
            this.i9_1 = 3;
            var tmp_2 = this.k9_1;
            if (tmp_2 instanceof PointerEventTimeoutCancellationException) {
              var _ = this.k9_1;
              var tmp_3 = this;
              var tmp1_elvis_lhs = this.u9c_1._v;
              tmp_3.x9c_1 = tmp1_elvis_lhs == null ? this.t9c_1 : tmp1_elvis_lhs;
              this.h9_1 = 4;
              continue $sm;
            } else {
              throw this.k9_1;
            }

          case 3:
            throw this.k9_1;
          case 4:
            this.i9_1 = 3;
            return this.x9c_1;
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
  function $awaitDragOrCancellationCOROUTINE$7(_this__u8e3s4, pointerId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g9d_1 = _this__u8e3s4;
    this.h9d_1 = pointerId;
  }
  protoOf($awaitDragOrCancellationCOROUTINE$7).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 7;
            if (isPointerUp(this.g9d_1.h5z(), this.h9d_1)) {
              return null;
            }

            var tmp_0 = this;
            tmp_0.i9d_1 = this.g9d_1;
            var tmp_1 = this;
            tmp_1.j9d_1 = this.h9d_1;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.l9d_1 = this.i9d_1;
            this.m9d_1 = this.j9d_1;
            this.n9d_1 = this.m9d_1;
            this.h9_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.h9_1 = 8;
              continue $sm;
            }

            this.h9_1 = 3;
            suspendResult = this.l9d_1.j5z(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var event = suspendResult;
            var tmp0 = event.k5u_1;
            var tmp$ret$0;
            l$ret$1: do {
              var inductionVariable = 0;
              var last = tmp0.n() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0.p(index);
                  if (equals(item.q5u_1, this.n9d_1)) {
                    tmp$ret$0 = item;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var WHEN_RESULT;
            if (tmp0_elvis_lhs == null) {
              this.k9d_1 = null;
              this.h9_1 = 9;
              continue $sm;
            } else {
              WHEN_RESULT = tmp0_elvis_lhs;
              this.h9_1 = 4;
              continue $sm;
            }

          case 4:
            var dragEvent = WHEN_RESULT;
            if (changedToUpIgnoreConsumed(dragEvent)) {
              var tmp2 = event.k5u_1;
              var tmp$ret$4;
              l$ret$5: do {
                var inductionVariable_0 = 0;
                var last_0 = tmp2.n() - 1 | 0;
                if (inductionVariable_0 <= last_0)
                  do {
                    var index_0 = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var item_0 = tmp2.p(index_0);
                    if (item_0.t5u_1) {
                      tmp$ret$4 = item_0;
                      break l$ret$5;
                    }
                  }
                   while (inductionVariable_0 <= last_0);
                tmp$ret$4 = null;
              }
               while (false);
              var otherDown = tmp$ret$4;
              if (otherDown == null) {
                this.k9d_1 = dragEvent;
                this.h9_1 = 9;
                continue $sm;
              } else {
                this.n9d_1 = otherDown.q5u_1;
                this.h9_1 = 5;
                continue $sm;
              }
            } else {
              if (positionChangedIgnoreConsumed(dragEvent)) {
                this.k9d_1 = dragEvent;
                this.h9_1 = 9;
                continue $sm;
              } else {
                this.h9_1 = 6;
                continue $sm;
              }
            }

          case 5:
            this.h9_1 = 6;
            continue $sm;
          case 6:
            this.h9_1 = 2;
            continue $sm;
          case 7:
            throw this.k9_1;
          case 8:
            if (false) {
              this.h9_1 = 1;
              continue $sm;
            }

            this.h9_1 = 9;
            continue $sm;
          case 9:
            var change = this.k9d_1;
            var tmp_2;
            if ((change == null ? null : change.l5w()) === false) {
              tmp_2 = change;
            } else {
              tmp_2 = null;
            }

            return tmp_2;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 7) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_DragGestureDetector_kt_xqxw6j;
  function _init_properties_DragGestureDetector_kt__sw7hnt() {
    if (!properties_initialized_DragGestureDetector_kt_xqxw6j) {
      properties_initialized_DragGestureDetector_kt_xqxw6j = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      mouseSlop = _Dp___init__impl__ms3zkb(0.125);
      // Inline function 'androidx.compose.ui.unit.dp' call
      defaultTouchSlop = _Dp___init__impl__ms3zkb(18);
      var tmp0 = get_mouseSlop();
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      var other = get_defaultTouchSlop();
      mouseToTouchSlopRatio = _Dp___get_value__impl__geb1vb(tmp0) / _Dp___get_value__impl__geb1vb(other);
    }
  }
  function awaitEachGesture(_this__u8e3s4, block, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var currentContext = $completion.n9();
    return _this__u8e3s4.f5z(awaitEachGesture$slambda_0(currentContext, block, null), $completion);
  }
  function awaitAllPointersUp(_this__u8e3s4, pass, $completion) {
    pass = pass === VOID ? PointerEventPass_Final_getInstance() : pass;
    var tmp = new $awaitAllPointersUpCOROUTINE$11(_this__u8e3s4, pass, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function allPointersUp(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.h5z().k5u_1;
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
          // Inline function 'androidx.compose.foundation.gestures.allPointersUp.<anonymous>' call
          if (item.t5u_1) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    return !tmp$ret$1;
  }
  function awaitEachGesture$slambda($currentContext, $block, resultContinuation) {
    this.v9e_1 = $currentContext;
    this.w9e_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitEachGesture$slambda).b9e = function ($this$awaitPointerEventScope, $completion) {
    var tmp = this.c9e($this$awaitPointerEventScope, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(awaitEachGesture$slambda).ba = function (p1, $completion) {
    return this.b9e((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitEachGesture$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 9;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive(this.v9e_1)) {
              this.h9_1 = 8;
              continue $sm;
            }

            this.i9_1 = 4;
            this.h9_1 = 2;
            suspendResult = this.w9e_1(this.x9e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h9_1 = 3;
            suspendResult = awaitAllPointersUp(this.x9e_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.i9_1 = 9;
            this.h9_1 = 7;
            continue $sm;
          case 4:
            this.i9_1 = 9;
            var tmp_0 = this.k9_1;
            if (tmp_0 instanceof CancellationException) {
              this.y9e_1 = this.k9_1;
              if (get_isActive(this.v9e_1)) {
                this.h9_1 = 5;
                suspendResult = awaitAllPointersUp(this.x9e_1, VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                throw this.y9e_1;
              }
            } else {
              throw this.k9_1;
            }

          case 5:
            this.h9_1 = 6;
            continue $sm;
          case 6:
            this.h9_1 = 7;
            continue $sm;
          case 7:
            this.i9_1 = 9;
            this.h9_1 = 1;
            continue $sm;
          case 8:
            return Unit_instance;
          case 9:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 9) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(awaitEachGesture$slambda).c9e = function ($this$awaitPointerEventScope, completion) {
    var i = new awaitEachGesture$slambda(this.v9e_1, this.w9e_1, completion);
    i.x9e_1 = $this$awaitPointerEventScope;
    return i;
  };
  function awaitEachGesture$slambda_0($currentContext, $block, resultContinuation) {
    var i = new awaitEachGesture$slambda($currentContext, $block, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $completion) {
      return i.b9e($this$awaitPointerEventScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $awaitAllPointersUpCOROUTINE$11(_this__u8e3s4, pass, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l9e_1 = _this__u8e3s4;
    this.m9e_1 = pass;
  }
  protoOf($awaitAllPointersUpCOROUTINE$11).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 5;
            if (!allPointersUp(this.l9e_1)) {
              this.h9_1 = 1;
              continue $sm;
            } else {
              this.h9_1 = 4;
              continue $sm;
            }

          case 1:
            this.h9_1 = 2;
            suspendResult = this.l9e_1.i5z(this.m9e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var events = suspendResult;
            var tmp0 = events.k5u_1;
            var tmp$ret$0;
            l$ret$1: do {
              var inductionVariable = 0;
              var last = tmp0.n() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0.p(index);
                  if (item.t5u_1) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = false;
            }
             while (false);
            if (tmp$ret$0) {
              this.h9_1 = 1;
              continue $sm;
            }

            this.h9_1 = 3;
            continue $sm;
          case 3:
            this.h9_1 = 4;
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
  function TraverseKey_2() {
  }
  var TraverseKey_instance_2;
  function TraverseKey_getInstance_2() {
    return TraverseKey_instance_2;
  }
  function ScrollableContainerNode() {
  }
  function get_NoPressGesture() {
    _init_properties_TapGestureDetector_kt__k4yygc();
    return NoPressGesture;
  }
  var NoPressGesture;
  function PressGestureScope() {
  }
  function awaitFirstDown(_this__u8e3s4, requireUnconsumed, pass, $completion) {
    requireUnconsumed = requireUnconsumed === VOID ? true : requireUnconsumed;
    pass = pass === VOID ? PointerEventPass_Main_getInstance() : pass;
    var tmp = new $awaitFirstDownCOROUTINE$21(_this__u8e3s4, requireUnconsumed, pass, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function $resetCOROUTINE$22(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t9f_1 = _this__u8e3s4;
  }
  protoOf($resetCOROUTINE$22).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.t9f_1.x9f_1.n1o(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t9f_1.v9f_1 = false;
            this.t9f_1.w9f_1 = false;
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
  function $tryAwaitReleaseCOROUTINE$24(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g9g_1 = _this__u8e3s4;
  }
  protoOf($tryAwaitReleaseCOROUTINE$24).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 3;
            if (!this.g9g_1.v9f_1 && !this.g9g_1.w9f_1) {
              this.h9_1 = 1;
              suspendResult = this.g9g_1.x9f_1.n1o(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 2;
              continue $sm;
            }

          case 1:
            this.g9g_1.x9f_1.p1o();
            this.h9_1 = 2;
            continue $sm;
          case 2:
            return this.g9g_1.v9f_1;
          case 3:
            throw this.k9_1;
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
  function PressGestureScopeImpl(density) {
    this.u9f_1 = density;
    this.v9f_1 = false;
    this.w9f_1 = false;
    this.x9f_1 = Mutex(false);
  }
  protoOf(PressGestureScopeImpl).k3h = function () {
    return this.u9f_1.k3h();
  };
  protoOf(PressGestureScopeImpl).u3h = function () {
    return this.u9f_1.u3h();
  };
  protoOf(PressGestureScopeImpl).m3h = function (_this__u8e3s4) {
    return this.u9f_1.m3h(_this__u8e3s4);
  };
  protoOf(PressGestureScopeImpl).r3h = function (_this__u8e3s4) {
    return this.u9f_1.r3h(_this__u8e3s4);
  };
  protoOf(PressGestureScopeImpl).s3h = function (_this__u8e3s4) {
    return this.u9f_1.s3h(_this__u8e3s4);
  };
  protoOf(PressGestureScopeImpl).l3h = function (_this__u8e3s4) {
    return this.u9f_1.l3h(_this__u8e3s4);
  };
  protoOf(PressGestureScopeImpl).n3h = function (_this__u8e3s4) {
    return this.u9f_1.n3h(_this__u8e3s4);
  };
  protoOf(PressGestureScopeImpl).t3h = function (_this__u8e3s4) {
    return this.u9f_1.t3h(_this__u8e3s4);
  };
  protoOf(PressGestureScopeImpl).z83 = function () {
    this.w9f_1 = true;
    this.x9f_1.p1o();
  };
  protoOf(PressGestureScopeImpl).q1p = function () {
    this.v9f_1 = true;
    this.x9f_1.p1o();
  };
  protoOf(PressGestureScopeImpl).h9g = function ($completion) {
    var tmp = new $resetCOROUTINE$22(this, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(PressGestureScopeImpl).s93 = function ($completion) {
    var tmp = new $tryAwaitReleaseCOROUTINE$24(this, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  function waitForUpOrCancellation(_this__u8e3s4, pass, $completion) {
    pass = pass === VOID ? PointerEventPass_Main_getInstance() : pass;
    var tmp = new $waitForUpOrCancellationCOROUTINE$25(_this__u8e3s4, pass, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function isPrimaryChangedDown(_this__u8e3s4, requireUnconsumed) {
    _init_properties_TapGestureDetector_kt__k4yygc();
    var tmp0 = _this__u8e3s4.k5u_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAll' call
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
          // Inline function 'androidx.compose.ui.util.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.foundation.gestures.isPrimaryChangedDown.<anonymous>' call
          if (!(item.y5u_1 === Companion_getInstance_9().i5w_1)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    var primaryButtonCausesDown = tmp$ret$1;
    var tmp2 = _this__u8e3s4.k5u_1;
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.util.fastAll' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp2.n() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = tmp2.p(index_0);
          // Inline function 'androidx.compose.ui.util.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.foundation.gestures.isPrimaryChangedDown.<anonymous>' call
          if (!(requireUnconsumed ? changedToDown(item_0) : changedToDownIgnoreConsumed(item_0))) {
            tmp$ret$3 = false;
            break $l$block_0;
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$3 = true;
    }
    var changedToDown_0 = tmp$ret$3;
    return changedToDown_0 && (get_isPrimaryPressed(_this__u8e3s4.l5u_1) || !primaryButtonCausesDown);
  }
  function detectTapAndPress(_this__u8e3s4, onPress, onTap, $completion) {
    onPress = onPress === VOID ? get_NoPressGesture() : onPress;
    onTap = onTap === VOID ? null : onTap;
    var pressScope = new PressGestureScopeImpl(_this__u8e3s4);
    return coroutineScope(detectTapAndPress$slambda_0(_this__u8e3s4, onPress, onTap, pressScope, null), $completion);
  }
  function NoPressGesture$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NoPressGesture$slambda).r8x = function ($this$null, it, $completion) {
    var tmp = this.s8x($this$null, it, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(NoPressGesture$slambda).a2k = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, PressGestureScope) : false) ? p1 : THROW_CCE();
    return this.r8x(tmp, p2 instanceof Offset_0 ? p2.g3g_1 : THROW_CCE(), $completion);
  };
  protoOf(NoPressGesture$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(NoPressGesture$slambda).s8x = function ($this$null, it, completion) {
    var i = new NoPressGesture$slambda(completion);
    i.b9h_1 = $this$null;
    i.c9h_1 = it;
    return i;
  };
  function NoPressGesture$slambda_0(resultContinuation) {
    var i = new NoPressGesture$slambda(resultContinuation);
    var l = function ($this$null, it, $completion) {
      return i.r8x($this$null, it.g3g_1, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function detectTapAndPress$slambda$slambda$slambda($pressScope, resultContinuation) {
    this.l9h_1 = $pressScope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(detectTapAndPress$slambda$slambda$slambda).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(detectTapAndPress$slambda$slambda$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(detectTapAndPress$slambda$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.l9h_1.h9g(this);
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
  protoOf(detectTapAndPress$slambda$slambda$slambda).s1m = function ($this$launch, completion) {
    var i = new detectTapAndPress$slambda$slambda$slambda(this.l9h_1, completion);
    i.m9h_1 = $this$launch;
    return i;
  };
  function detectTapAndPress$slambda$slambda$slambda_0($pressScope, resultContinuation) {
    var i = new detectTapAndPress$slambda$slambda$slambda($pressScope, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapAndPress$slambda$slambda$slambda_1($onPress, $pressScope, $down, resultContinuation) {
    this.v9h_1 = $onPress;
    this.w9h_1 = $pressScope;
    this.x9h_1 = $down;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(detectTapAndPress$slambda$slambda$slambda_1).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(detectTapAndPress$slambda$slambda$slambda_1).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(detectTapAndPress$slambda$slambda$slambda_1).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.v9h_1(this.w9h_1, new Offset_0(this.x9h_1.s5u_1), this);
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
  protoOf(detectTapAndPress$slambda$slambda$slambda_1).s1m = function ($this$launch, completion) {
    var i = new detectTapAndPress$slambda$slambda$slambda_1(this.v9h_1, this.w9h_1, this.x9h_1, completion);
    i.y9h_1 = $this$launch;
    return i;
  };
  function detectTapAndPress$slambda$slambda$slambda_2($onPress, $pressScope, $down, resultContinuation) {
    var i = new detectTapAndPress$slambda$slambda$slambda_1($onPress, $pressScope, $down, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapAndPress$slambda$slambda$slambda_3($pressScope, resultContinuation) {
    this.h9i_1 = $pressScope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(detectTapAndPress$slambda$slambda$slambda_3).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(detectTapAndPress$slambda$slambda$slambda_3).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(detectTapAndPress$slambda$slambda$slambda_3).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          this.h9i_1.z83();
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(detectTapAndPress$slambda$slambda$slambda_3).s1m = function ($this$launch, completion) {
    var i = new detectTapAndPress$slambda$slambda$slambda_3(this.h9i_1, completion);
    i.i9i_1 = $this$launch;
    return i;
  };
  function detectTapAndPress$slambda$slambda$slambda_4($pressScope, resultContinuation) {
    var i = new detectTapAndPress$slambda$slambda$slambda_3($pressScope, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapAndPress$slambda$slambda$slambda_5($pressScope, resultContinuation) {
    this.r9i_1 = $pressScope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(detectTapAndPress$slambda$slambda$slambda_5).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(detectTapAndPress$slambda$slambda$slambda_5).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(detectTapAndPress$slambda$slambda$slambda_5).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          this.r9i_1.q1p();
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(detectTapAndPress$slambda$slambda$slambda_5).s1m = function ($this$launch, completion) {
    var i = new detectTapAndPress$slambda$slambda$slambda_5(this.r9i_1, completion);
    i.s9i_1 = $this$launch;
    return i;
  };
  function detectTapAndPress$slambda$slambda$slambda_6($pressScope, resultContinuation) {
    var i = new detectTapAndPress$slambda$slambda$slambda_5($pressScope, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapAndPress$slambda$slambda($this_coroutineScope, $onPress, $onTap, $pressScope, resultContinuation) {
    this.b9j_1 = $this_coroutineScope;
    this.c9j_1 = $onPress;
    this.d9j_1 = $onTap;
    this.e9j_1 = $pressScope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(detectTapAndPress$slambda$slambda).b9e = function ($this$awaitEachGesture, $completion) {
    var tmp = this.c9e($this$awaitEachGesture, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(detectTapAndPress$slambda$slambda).ba = function (p1, $completion) {
    return this.b9e((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(detectTapAndPress$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 3;
            launch(this.b9j_1, VOID, VOID, detectTapAndPress$slambda$slambda$slambda_0(this.e9j_1, null));
            this.h9_1 = 1;
            suspendResult = awaitFirstDown(this.f9j_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.g9j_1 = suspendResult;
            var tmp_0 = this;
            var this_0 = this.g9j_1;
            this_0.o5w();
            tmp_0.h9j_1 = this_0;
            if (!(this.c9j_1 === get_NoPressGesture())) {
              launch(this.b9j_1, VOID, VOID, detectTapAndPress$slambda$slambda$slambda_2(this.c9j_1, this.e9j_1, this.h9j_1, null));
            }

            this.h9_1 = 2;
            suspendResult = waitForUpOrCancellation(this.f9j_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var up = suspendResult;
            if (up == null) {
              launch(this.b9j_1, VOID, VOID, detectTapAndPress$slambda$slambda$slambda_4(this.e9j_1, null));
            } else {
              up.o5w();
              launch(this.b9j_1, VOID, VOID, detectTapAndPress$slambda$slambda$slambda_6(this.e9j_1, null));
              var tmp0_safe_receiver = this.d9j_1;
              if (tmp0_safe_receiver == null)
                null;
              else
                tmp0_safe_receiver(new Offset_0(up.s5u_1));
            }

            return Unit_instance;
          case 3:
            throw this.k9_1;
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
  protoOf(detectTapAndPress$slambda$slambda).c9e = function ($this$awaitEachGesture, completion) {
    var i = new detectTapAndPress$slambda$slambda(this.b9j_1, this.c9j_1, this.d9j_1, this.e9j_1, completion);
    i.f9j_1 = $this$awaitEachGesture;
    return i;
  };
  function detectTapAndPress$slambda$slambda_0($this_coroutineScope, $onPress, $onTap, $pressScope, resultContinuation) {
    var i = new detectTapAndPress$slambda$slambda($this_coroutineScope, $onPress, $onTap, $pressScope, resultContinuation);
    var l = function ($this$awaitEachGesture, $completion) {
      return i.b9e($this$awaitEachGesture, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function detectTapAndPress$slambda($this_detectTapAndPress, $onPress, $onTap, $pressScope, resultContinuation) {
    this.q9j_1 = $this_detectTapAndPress;
    this.r9j_1 = $onPress;
    this.s9j_1 = $onTap;
    this.t9j_1 = $pressScope;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(detectTapAndPress$slambda).r1m = function ($this$coroutineScope, $completion) {
    var tmp = this.s1m($this$coroutineScope, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(detectTapAndPress$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(detectTapAndPress$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = awaitEachGesture(this.q9j_1, detectTapAndPress$slambda$slambda_0(this.u9j_1, this.r9j_1, this.s9j_1, this.t9j_1, null), this);
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
  protoOf(detectTapAndPress$slambda).s1m = function ($this$coroutineScope, completion) {
    var i = new detectTapAndPress$slambda(this.q9j_1, this.r9j_1, this.s9j_1, this.t9j_1, completion);
    i.u9j_1 = $this$coroutineScope;
    return i;
  };
  function detectTapAndPress$slambda_0($this_detectTapAndPress, $onPress, $onTap, $pressScope, resultContinuation) {
    var i = new detectTapAndPress$slambda($this_detectTapAndPress, $onPress, $onTap, $pressScope, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.r1m($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $awaitFirstDownCOROUTINE$21(_this__u8e3s4, requireUnconsumed, pass, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h9f_1 = _this__u8e3s4;
    this.i9f_1 = requireUnconsumed;
    this.j9f_1 = pass;
  }
  protoOf($awaitFirstDownCOROUTINE$21).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 4;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.h9_1 = 2;
            suspendResult = this.h9f_1.i5z(this.j9f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.k9f_1 = suspendResult;
            if (!isPrimaryChangedDown(this.k9f_1, this.i9f_1)) {
              this.h9_1 = 1;
              continue $sm;
            }

            this.h9_1 = 3;
            continue $sm;
          case 3:
            return this.k9f_1.k5u_1.p(0);
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
  function $waitForUpOrCancellationCOROUTINE$25(_this__u8e3s4, pass, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q9g_1 = _this__u8e3s4;
    this.r9g_1 = pass;
  }
  protoOf($waitForUpOrCancellationCOROUTINE$25).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 4;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.h9_1 = 5;
              continue $sm;
            }

            this.h9_1 = 2;
            suspendResult = this.q9g_1.i5z(this.r9g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.s9g_1 = suspendResult;
            var tmp0 = this.s9g_1.k5u_1;
            var tmp$ret$0;
            l$ret$1: do {
              var inductionVariable = 0;
              var last = tmp0.n() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0.p(index);
                  if (!changedToUp(item)) {
                    tmp$ret$0 = false;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = true;
            }
             while (false);
            if (tmp$ret$0) {
              return this.s9g_1.k5u_1.p(0);
            }

            var tmp2 = this.s9g_1.k5u_1;
            var tmp$ret$2;
            l$ret$3: do {
              var inductionVariable_0 = 0;
              var last_0 = tmp2.n() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = tmp2.p(index_0);
                  if (item_0.l5w() || isOutOfBounds(item_0, this.q9g_1.v5e(), this.q9g_1.g5z())) {
                    tmp$ret$2 = true;
                    break l$ret$3;
                  }
                }
                 while (inductionVariable_0 <= last_0);
              tmp$ret$2 = false;
            }
             while (false);
            if (tmp$ret$2) {
              return null;
            }

            this.h9_1 = 3;
            suspendResult = this.q9g_1.i5z(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var consumeCheck = suspendResult;
            var tmp4 = consumeCheck.k5u_1;
            var tmp$ret$4;
            l$ret$5: do {
              var inductionVariable_1 = 0;
              var last_1 = tmp4.n() - 1 | 0;
              if (inductionVariable_1 <= last_1)
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = tmp4.p(index_1);
                  if (item_1.l5w()) {
                    tmp$ret$4 = true;
                    break l$ret$5;
                  }
                }
                 while (inductionVariable_1 <= last_1);
              tmp$ret$4 = false;
            }
             while (false);
            if (tmp$ret$4) {
              return null;
            }

            this.h9_1 = 1;
            continue $sm;
          case 4:
            throw this.k9_1;
          case 5:
            return Unit_instance;
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
  var properties_initialized_TapGestureDetector_kt_lhe8oi;
  function _init_properties_TapGestureDetector_kt__k4yygc() {
    if (!properties_initialized_TapGestureDetector_kt_lhe8oi) {
      properties_initialized_TapGestureDetector_kt_lhe8oi = true;
      NoPressGesture = NoPressGesture$slambda_0(null);
    }
  }
  function Start() {
  }
  function Stop() {
  }
  function Cancel() {
  }
  function Focus() {
  }
  function Unfocus(focus) {
    this.v9j_1 = focus;
  }
  function FocusInteraction() {
  }
  function Enter() {
  }
  function Exit(enter) {
    this.w9j_1 = enter;
  }
  function Interaction() {
  }
  function funMutableInteractionSource() {
    return new MutableInteractionSourceImpl();
  }
  function MutableInteractionSourceImpl() {
    this.x9j_1 = MutableSharedFlow(VOID, 16, BufferOverflow_DROP_OLDEST_getInstance());
  }
  protoOf(MutableInteractionSourceImpl).z9a = function () {
    return this.x9j_1;
  };
  protoOf(MutableInteractionSourceImpl).r8z = function (interaction, $completion) {
    return this.x9j_1.n1h(interaction, $completion);
  };
  protoOf(MutableInteractionSourceImpl).g95 = function (interaction) {
    return this.x9j_1.w1j(interaction);
  };
  function Press(pressPosition) {
    this.y9j_1 = pressPosition;
  }
  function Release(press) {
    this.z9j_1 = press;
  }
  function Cancel_0(press) {
    this.a9k_1 = press;
  }
  function PressInteraction() {
  }
  function BringIntoViewParent() {
  }
  function TraverseKey_3() {
  }
  var TraverseKey_instance_3;
  function TraverseKey_getInstance_3() {
    return TraverseKey_instance_3;
  }
  function findBringIntoViewParent(_this__u8e3s4) {
    if (!_this__u8e3s4.y5a().x5a_1)
      return null;
    var tmp = findNearestAncestor_0(_this__u8e3s4, TraverseKey_instance_3);
    var tmp0_elvis_lhs = (tmp == null ? true : isInterface(tmp, BringIntoViewParent)) ? tmp : THROW_CCE();
    return tmp0_elvis_lhs == null ? defaultBringIntoViewParent(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function scrollIntoView(_this__u8e3s4, rect, $completion) {
    rect = rect === VOID ? null : rect;
    if (!_this__u8e3s4.y5a().x5a_1)
      return Unit_instance;
    var layoutCoordinates = requireLayoutCoordinates(_this__u8e3s4);
    var tmp0_elvis_lhs = findBringIntoViewParent(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    return parent.b9k(layoutCoordinates, scrollIntoView$lambda(rect, layoutCoordinates), $completion);
  }
  function scrollIntoView$lambda($rect, $layoutCoordinates) {
    return function () {
      var tmp3_elvis_lhs = $rect;
      var tmp;
      if (tmp3_elvis_lhs == null) {
        // Inline function 'kotlin.takeIf' call
        var this_0 = $layoutCoordinates;
        var tmp_0;
        // Inline function 'androidx.compose.foundation.relocation.scrollIntoView.<anonymous>.<anonymous>' call
        if (this_0.r5n()) {
          tmp_0 = this_0;
        } else {
          tmp_0 = null;
        }
        var tmp0_safe_receiver = tmp_0;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v5e();
        var tmp_1;
        var tmp_2 = tmp1_safe_receiver;
        if ((tmp_2 == null ? null : new IntSize_0(tmp_2)) == null) {
          tmp_1 = null;
        } else {
          tmp_1 = toSize(tmp1_safe_receiver);
        }
        var tmp2_safe_receiver = tmp_1;
        var tmp_3;
        var tmp_4 = tmp2_safe_receiver;
        if ((tmp_4 == null ? null : new Size_0(tmp_4)) == null) {
          tmp_3 = null;
        } else {
          tmp_3 = toRect(tmp2_safe_receiver);
        }
        tmp = tmp_3;
      } else {
        tmp = tmp3_elvis_lhs;
      }
      return tmp;
    };
  }
  function CornerBasedShape(topStart, topEnd, bottomEnd, bottomStart) {
    this.c9k_1 = topStart;
    this.d9k_1 = topEnd;
    this.e9k_1 = bottomEnd;
    this.f9k_1 = bottomStart;
  }
  protoOf(CornerBasedShape).u48 = function (size, layoutDirection, density) {
    var topStart = this.c9k_1.g9k(size, density);
    var topEnd = this.d9k_1.g9k(size, density);
    var bottomEnd = this.e9k_1.g9k(size, density);
    var bottomStart = this.f9k_1.g9k(size, density);
    var minDimension = _Size___get_minDimension__impl__4iso0r(size);
    if (topStart + bottomStart > minDimension) {
      var scale = minDimension / (topStart + bottomStart);
      topStart = topStart * scale;
      bottomStart = bottomStart * scale;
    }
    if (topEnd + bottomEnd > minDimension) {
      var scale_0 = minDimension / (topEnd + bottomEnd);
      topEnd = topEnd * scale_0;
      bottomEnd = bottomEnd * scale_0;
    }
    // Inline function 'kotlin.require' call
    if (!(topStart >= 0.0 && topEnd >= 0.0 && bottomEnd >= 0.0 && bottomStart >= 0.0)) {
      // Inline function 'androidx.compose.foundation.shape.CornerBasedShape.createOutline.<anonymous>' call
      var message = "Corner size in Px can't be negative(topStart = " + topStart + ', topEnd = ' + topEnd + ', ' + ('bottomEnd = ' + bottomEnd + ', bottomStart = ' + bottomStart + ')!');
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.h9k(size, topStart, topEnd, bottomEnd, bottomStart, layoutDirection);
  };
  protoOf(CornerBasedShape).j9k = function (topStart, topEnd, bottomEnd, bottomStart, $super) {
    topStart = topStart === VOID ? this.c9k_1 : topStart;
    topEnd = topEnd === VOID ? this.d9k_1 : topEnd;
    bottomEnd = bottomEnd === VOID ? this.e9k_1 : bottomEnd;
    bottomStart = bottomStart === VOID ? this.f9k_1 : bottomStart;
    return $super === VOID ? this.i9k(topStart, topEnd, bottomEnd, bottomStart) : $super.i9k.call(this, topStart, topEnd, bottomEnd, bottomStart);
  };
  var ZeroCornerSize;
  function CornerSize(percent) {
    _init_properties_CornerSize_kt__adzyne();
    return new PercentCornerSize(percent);
  }
  function PercentCornerSize(percent) {
    this.k9k_1 = percent;
    if (this.k9k_1 < 0 || this.k9k_1 > 100) {
      throw IllegalArgumentException_init_$Create$('The percent should be in the range of [0, 100]');
    }
  }
  protoOf(PercentCornerSize).g9k = function (shapeSize, density) {
    return _Size___get_minDimension__impl__4iso0r(shapeSize) * (this.k9k_1 / 100.0);
  };
  protoOf(PercentCornerSize).toString = function () {
    return 'CornerSize(size = ' + this.k9k_1 + '%)';
  };
  protoOf(PercentCornerSize).hashCode = function () {
    return getNumberHashCode(this.k9k_1);
  };
  protoOf(PercentCornerSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PercentCornerSize))
      return false;
    var tmp0_other_with_cast = other instanceof PercentCornerSize ? other : THROW_CCE();
    if (!equals(this.k9k_1, tmp0_other_with_cast.k9k_1))
      return false;
    return true;
  };
  function CornerSize_0(size) {
    _init_properties_CornerSize_kt__adzyne();
    return new DpCornerSize(size);
  }
  function DpCornerSize(size) {
    this.l9k_1 = size;
  }
  protoOf(DpCornerSize).g9k = function (shapeSize, density) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.shape.DpCornerSize.toPx.<anonymous>' call
    return density.l3h(this.l9k_1);
  };
  protoOf(DpCornerSize).toString = function () {
    return 'CornerSize(size = ' + _Dp___get_value__impl__geb1vb(this.l9k_1) + '.dp)';
  };
  protoOf(DpCornerSize).hashCode = function () {
    return Dp__hashCode_impl_sxkrra(this.l9k_1);
  };
  protoOf(DpCornerSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DpCornerSize))
      return false;
    var tmp0_other_with_cast = other instanceof DpCornerSize ? other : THROW_CCE();
    if (!equals(this.l9k_1, tmp0_other_with_cast.l9k_1))
      return false;
    return true;
  };
  function ZeroCornerSize$1() {
  }
  protoOf(ZeroCornerSize$1).g9k = function (shapeSize, density) {
    return 0.0;
  };
  protoOf(ZeroCornerSize$1).toString = function () {
    return 'ZeroCornerSize';
  };
  var properties_initialized_CornerSize_kt_9yvmfc;
  function _init_properties_CornerSize_kt__adzyne() {
    if (!properties_initialized_CornerSize_kt_9yvmfc) {
      properties_initialized_CornerSize_kt_9yvmfc = true;
      ZeroCornerSize = new ZeroCornerSize$1();
    }
  }
  function get_CircleShape() {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return CircleShape;
  }
  var CircleShape;
  function RoundedCornerShape(topStart, topEnd, bottomEnd, bottomStart) {
    CornerBasedShape.call(this, topStart, topEnd, bottomEnd, bottomStart);
  }
  protoOf(RoundedCornerShape).h9k = function (size, topStart, topEnd, bottomEnd, bottomStart, layoutDirection) {
    var tmp;
    if (topStart + topEnd + bottomEnd + bottomStart === 0.0) {
      tmp = new Rectangle(toRect(size));
    } else {
      tmp = new Rounded(RoundRect_0(toRect(size), CornerRadius(layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? topStart : topEnd), CornerRadius(layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? topEnd : topStart), CornerRadius(layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? bottomEnd : bottomStart), CornerRadius(layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? bottomStart : bottomEnd)));
    }
    return tmp;
  };
  protoOf(RoundedCornerShape).i9k = function (topStart, topEnd, bottomEnd, bottomStart) {
    return new RoundedCornerShape(topStart, topEnd, bottomEnd, bottomStart);
  };
  protoOf(RoundedCornerShape).toString = function () {
    return 'RoundedCornerShape(topStart = ' + toString(this.c9k_1) + ', topEnd = ' + toString(this.d9k_1) + ', bottomEnd = ' + (toString(this.e9k_1) + ', bottomStart = ' + toString(this.f9k_1) + ')');
  };
  protoOf(RoundedCornerShape).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundedCornerShape))
      return false;
    if (!equals(this.c9k_1, other.c9k_1))
      return false;
    if (!equals(this.d9k_1, other.d9k_1))
      return false;
    if (!equals(this.e9k_1, other.e9k_1))
      return false;
    if (!equals(this.f9k_1, other.f9k_1))
      return false;
    return true;
  };
  protoOf(RoundedCornerShape).hashCode = function () {
    var result = hashCode(this.c9k_1);
    result = imul(31, result) + hashCode(this.d9k_1) | 0;
    result = imul(31, result) + hashCode(this.e9k_1) | 0;
    result = imul(31, result) + hashCode(this.f9k_1) | 0;
    return result;
  };
  function RoundedCornerShape_0(percent) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return RoundedCornerShape_1(CornerSize(percent));
  }
  function RoundedCornerShape_1(corner) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return new RoundedCornerShape(corner, corner, corner, corner);
  }
  function RoundedCornerShape_2(size) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return RoundedCornerShape_1(CornerSize_0(size));
  }
  function RoundedCornerShape_3(topStart, topEnd, bottomEnd, bottomStart) {
    var tmp;
    if (topStart === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = topStart;
    }
    topStart = tmp;
    var tmp_0;
    if (topEnd === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = topEnd;
    }
    topEnd = tmp_0;
    var tmp_1;
    if (bottomEnd === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = bottomEnd;
    }
    bottomEnd = tmp_1;
    var tmp_2;
    if (bottomStart === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottomStart;
    }
    bottomStart = tmp_2;
    _init_properties_RoundedCornerShape_kt__vzposf();
    return new RoundedCornerShape(CornerSize_0(topStart), CornerSize_0(topEnd), CornerSize_0(bottomEnd), CornerSize_0(bottomStart));
  }
  var properties_initialized_RoundedCornerShape_kt_5mose9;
  function _init_properties_RoundedCornerShape_kt__vzposf() {
    if (!properties_initialized_RoundedCornerShape_kt_5mose9) {
      properties_initialized_RoundedCornerShape_kt_5mose9 = true;
      CircleShape = RoundedCornerShape_0(50);
    }
  }
  function BasicText(text, modifier, style, onTextLayout, overflow, softWrap, maxLines, minLines, color, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var style_0 = {_v: style};
    var onTextLayout_0 = {_v: onTextLayout};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var minLines_0 = {_v: minLines};
    var color_0 = {_v: color};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v28(-1186827822);
    sourceInformation($composer_0, 'C(BasicText)P(8,3,7,4,5:c#ui.text.style.TextOverflow,6,1,2)101@5004L7,151@6858L41:BasicText.kt#423gt5');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1w(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1w(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.m1w(style_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.m26(onTextLayout_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.q26(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.o4z_1)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.n26(softWrap_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.q26(maxLines_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.q26(minLines_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.m26(color_0._v) ? 67108864 : 33554432);
    if (!(($dirty & 38347923) === 38347922) || !$composer_0.d25()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance_0;
      }
      if (!(($default & 4) === 0)) {
        style_0._v = Companion_getInstance_10().w4q_1;
      }
      if (!(($default & 8) === 0)) {
        onTextLayout_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        overflow_0._v = new TextOverflow(Companion_getInstance_11().l4z_1);
      }
      if (!(($default & 32) === 0)) {
        softWrap_0._v = true;
      }
      if (!(($default & 64) === 0)) {
        maxLines_0._v = 2147483647;
      }
      if (!(($default & 128) === 0)) {
        minLines_0._v = 1;
      }
      if (!(($default & 256) === 0)) {
        color_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1186827822, $dirty, -1, 'androidx.compose.foundation.text.BasicText (BasicText.kt:96)');
      }
      validateMinMaxLines(minLines_0._v, maxLines_0._v);
      var tmp0 = get_LocalSelectionRegistrar();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.u27(tmp0);
      sourceInformationMarkerEnd($composer_1);
      var selectionRegistrar = tmp0_0;
      $composer_0.j25(-328360224);
      sourceInformation($composer_0, '103@5140L7,105@5286L69,105@5203L152,108@5364L234');
      var tmp;
      if (!(selectionRegistrar == null)) {
        var tmp3 = get_LocalTextSelectionColors();
        // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
        var tmp0_1 = $composer_2.u27(tmp3);
        sourceInformationMarkerEnd($composer_2);
        var backgroundSelectionColor = tmp0_1.r9k_1;
        var tmp_0 = selectionIdSaver(selectionRegistrar);
        sourceInformationMarkerStart($composer_0, -328352935, 'CC(remember):BasicText.kt#9igjgp');
        var tmp6 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.m26(selectionRegistrar);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = tmp6.d27();
        var tmp_1;
        if (invalid || it === Companion_getInstance_8().w1z_1) {
          // Inline function 'androidx.compose.foundation.text.BasicText.<anonymous>' call
          var value = BasicText$lambda(selectionRegistrar);
          tmp6.o27(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var selectableId = rememberSaveable([selectionRegistrar], tmp_0, null, tmp0_group, $composer_0, 0, 4);
        sourceInformationMarkerStart($composer_0, -328350274, 'CC(remember):BasicText.kt#9igjgp');
        var tmp8 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!(!!($composer_0.p26(selectableId) | $composer_0.m1w(selectionRegistrar)) | $composer_0.p26(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(backgroundSelectionColor))));
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = tmp8.d27();
        var tmp_3;
        if (invalid_0 || it_0 === Companion_getInstance_8().w1z_1) {
          // Inline function 'androidx.compose.foundation.text.BasicText.<anonymous>' call
          var value_0 = new SelectionController(selectableId, selectionRegistrar, backgroundSelectionColor);
          tmp8.o27(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        tmp = tmp1_group;
      } else {
        tmp = null;
      }
      var tmp2_group = tmp;
      $composer_0.l25();
      var selectionController = tmp2_group;
      var tmp_5;
      if (!(selectionController == null) || !(onTextLayout_0._v == null)) {
        $composer_0.j25(-1588564052);
        sourceInformation($composer_0, '130@6178L7');
        var tmp_6 = graphicsLayer(modifier_0._v);
        var tmp_7 = AnnotatedString_init_$Create$(text);
        var tmp_8 = style_0._v;
        var tmp_9 = onTextLayout_0._v;
        var tmp_10 = overflow_0._v;
        var tmp_11 = softWrap_0._v;
        var tmp_12 = maxLines_0._v;
        var tmp_13 = minLines_0._v;
        var tmp10 = get_LocalFontFamilyResolver();
        // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
        var $composer_3 = $composer_0;
        sourceInformationMarkerStart($composer_3, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
        var tmp0_2 = $composer_3.u27(tmp10);
        sourceInformationMarkerEnd($composer_3);
        var tmp3_group = textModifier(tmp_6, tmp_7, tmp_8, tmp_9, tmp_10.o4z_1, tmp_11, tmp_12, tmp_13, tmp0_2, null, null, selectionController, color_0._v, null);
        $composer_0.l25();
        tmp_5 = tmp3_group;
      } else {
        $composer_0.j25(-1587866335);
        sourceInformation($composer_0, '143@6671L7');
        var tmp_14 = graphicsLayer(modifier_0._v);
        var tmp_15 = style_0._v;
        var tmp13 = get_LocalFontFamilyResolver();
        // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
        var $composer_4 = $composer_0;
        sourceInformationMarkerStart($composer_4, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
        var tmp0_3 = $composer_4.u27(tmp13);
        sourceInformationMarkerEnd($composer_4);
        var tmp4_group = tmp_14.f5a(new TextStringSimpleElement(text, tmp_15, tmp0_3, overflow_0._v.o4z_1, softWrap_0._v, maxLines_0._v, minLines_0._v, color_0._v));
        $composer_0.l25();
        tmp_5 = tmp4_group;
      }
      var finalModifier = tmp_5;
      var tmp17 = EmptyMeasurePolicy_getInstance();
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_1 = finalModifier;
      var $composer_5 = $composer_0;
      sourceInformationMarkerStart($composer_5, 544976794, 'CC(Layout)P(1)125@4862L23,128@5013L385:Layout.kt#80mrfh');
      if (!((0 & 1) === 0))
        modifier_1 = Companion_instance_0;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_5, 0);
      var materialized = materialize($composer_5, modifier_1);
      var localMap = $composer_5.b27();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_12().r6f_1;
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 1405779621, 'CC(ReusableComposeNode):Composables.kt#9igjgp');
      var tmp_16 = $composer_6.e25();
      if (!isInterface(tmp_16, Applier)) {
        invalidApplier();
      }
      $composer_6.x25();
      if ($composer_6.s25()) {
        $composer_6.y25(factory);
      } else {
        $composer_6.b26();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_6);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp17, Companion_getInstance_12().w6f_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_12().v6f_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_12().t6f_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_12().z6f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.s25() || !equals($this$with.d27(), compositeKeyHash)) {
        $this$with.o27(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).g26(compositeKeyHash, block);
      }
      $composer_6.d26();
      sourceInformationMarkerEnd($composer_6);
      sourceInformationMarkerEnd($composer_5);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.n1z();
    }
    var tmp5_safe_receiver = $composer_0.w28();
    if (tmp5_safe_receiver == null)
      null;
    else {
      tmp5_safe_receiver.i2d(BasicText$lambda_0(text, modifier_0, style_0, onTextLayout_0, overflow_0, softWrap_0, maxLines_0, minLines_0, color_0, $changed, $default));
    }
  }
  function selectionIdSaver(selectionRegistrar) {
    var tmp = selectionIdSaver$lambda(selectionRegistrar);
    return Saver(tmp, selectionIdSaver$lambda_0);
  }
  function textModifier(_this__u8e3s4, text, style, onTextLayout, overflow, softWrap, maxLines, minLines, fontFamilyResolver, placeholders, onPlaceholderLayout, selectionController, color, onShowTranslation) {
    if (selectionController == null) {
      var staticTextModifier = new TextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, null, color, onShowTranslation);
      return _this__u8e3s4.f5a(Companion_instance_0).f5a(staticTextModifier);
    } else {
      var selectableTextModifier = new SelectableTextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color);
      return _this__u8e3s4.f5a(selectionController.x9k_1).f5a(selectableTextModifier);
    }
  }
  function EmptyMeasurePolicy$placementBlock$lambda($this$null) {
    return Unit_instance;
  }
  function EmptyMeasurePolicy() {
    EmptyMeasurePolicy_instance = this;
    var tmp = this;
    tmp.y9k_1 = EmptyMeasurePolicy$placementBlock$lambda;
  }
  protoOf(EmptyMeasurePolicy).e67 = function (_this__u8e3s4, measurables, constraints) {
    return _this__u8e3s4.b5p(_Constraints___get_maxWidth__impl__uuyqc(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints), VOID, this.y9k_1);
  };
  var EmptyMeasurePolicy_instance;
  function EmptyMeasurePolicy_getInstance() {
    if (EmptyMeasurePolicy_instance == null)
      new EmptyMeasurePolicy();
    return EmptyMeasurePolicy_instance;
  }
  function BasicText$lambda($selectionRegistrar) {
    return function () {
      return $selectionRegistrar.z9k();
    };
  }
  function BasicText$lambda_0($text, $modifier, $style, $onTextLayout, $overflow, $softWrap, $maxLines, $minLines, $color, $$changed, $$default) {
    return function ($composer, $force) {
      BasicText($text, $modifier._v, $style._v, $onTextLayout._v, $overflow._v.o4z_1, $softWrap._v, $maxLines._v, $minLines._v, $color._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function selectionIdSaver$lambda($selectionRegistrar) {
    return function ($this$Saver, it) {
      return hasSelection($selectionRegistrar, it) ? it : null;
    };
  }
  function selectionIdSaver$lambda_0(it) {
    return it;
  }
  function validateMinMaxLines(minLines, maxLines) {
    // Inline function 'kotlin.require' call
    if (!(minLines > 0 && maxLines > 0)) {
      // Inline function 'androidx.compose.foundation.text.validateMinMaxLines.<anonymous>' call
      var message = 'both minLines ' + minLines + ' and maxLines ' + maxLines + ' must be greater than zero';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(minLines <= maxLines)) {
      // Inline function 'androidx.compose.foundation.text.validateMinMaxLines.<anonymous>' call
      var message_0 = 'minLines ' + minLines + ' must be less than or equal to maxLines ' + maxLines;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function getParagraphBoundary(_this__u8e3s4, index) {
    return TextRange(findParagraphStart(_this__u8e3s4, index), findParagraphEnd(_this__u8e3s4, index));
  }
  function findParagraphStart(_this__u8e3s4, startIndex) {
    var inductionVariable = startIndex;
    if (1 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (charSequenceGet(_this__u8e3s4, index - 1 | 0) === _Char___init__impl__6a9atx(10)) {
          return index;
        }
      }
       while (1 <= inductionVariable);
    return 0;
  }
  function findParagraphEnd(_this__u8e3s4, startIndex) {
    var inductionVariable = startIndex;
    var last = charSequenceLength(_this__u8e3s4);
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(_this__u8e3s4, index) === _Char___init__impl__6a9atx(10)) {
          return index;
        }
      }
       while (inductionVariable < last);
    return charSequenceLength(_this__u8e3s4);
  }
  function ceilToIntPx(_this__u8e3s4) {
    // Inline function 'kotlin.math.ceil' call
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = Math.ceil(_this__u8e3s4);
    return roundToInt(this_0);
  }
  var SNAPSHOTS_INTERVAL_MILLIS;
  function _InlineDensity___init__impl__1m7u8m(packedValue) {
    return packedValue;
  }
  function _get_packedValue__aj623s($this) {
    return $this;
  }
  function _InlineDensity___init__impl__1m7u8m_0(density, fontScale) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(density));
    var v2 = toLong(toRawBits(fontScale));
    var tmp$ret$0 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _InlineDensity___init__impl__1m7u8m(tmp$ret$0);
  }
  function _InlineDensity___init__impl__1m7u8m_1(density) {
    return _InlineDensity___init__impl__1m7u8m_0(density.k3h(), density.u3h());
  }
  function _InlineDensity___get_density__impl__uz12rr($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _get_packedValue__aj623s($this).i3(32).f1();
    return floatFromBits(bits);
  }
  function _InlineDensity___get_fontScale__impl__ao594c($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _get_packedValue__aj623s($this).k3(new Long(-1, 0)).f1();
    return floatFromBits(bits);
  }
  function InlineDensity__toString_impl_9jhvwu($this) {
    return 'InlineDensity(density=' + _InlineDensity___get_density__impl__uz12rr($this) + ', fontScale=' + _InlineDensity___get_fontScale__impl__ao594c($this) + ')';
  }
  function Companion() {
    Companion_instance_2 = this;
    var tmp = this;
    tmp.a9l_1 = _InlineDensity___init__impl__1m7u8m_0(NaN, NaN);
  }
  var Companion_instance_2;
  function Companion_getInstance_20() {
    if (Companion_instance_2 == null)
      new Companion();
    return Companion_instance_2;
  }
  function InlineDensity__hashCode_impl_vanspp($this) {
    return $this.hashCode();
  }
  function InlineDensity__equals_impl_ppdv5r($this, other) {
    if (!(other instanceof InlineDensity))
      return false;
    var tmp0_other_with_cast = other instanceof InlineDensity ? other.b9l_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function InlineDensity(packedValue) {
    Companion_getInstance_20();
    this.b9l_1 = packedValue;
  }
  protoOf(InlineDensity).toString = function () {
    return InlineDensity__toString_impl_9jhvwu(this.b9l_1);
  };
  protoOf(InlineDensity).hashCode = function () {
    return InlineDensity__hashCode_impl_vanspp(this.b9l_1);
  };
  protoOf(InlineDensity).equals = function (other) {
    return InlineDensity__equals_impl_ppdv5r(this.b9l_1, other);
  };
  function finalConstraints(constraints, softWrap, overflow, maxIntrinsicWidth) {
    return Companion_instance_1.i3h(0, finalMaxWidth(constraints, softWrap, overflow, maxIntrinsicWidth), 0, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
  }
  function finalMaxLines(softWrap, overflow, maxLinesIn) {
    var overwriteMaxLines = !softWrap && overflow === Companion_getInstance_11().m4z_1;
    return overwriteMaxLines ? 1 : coerceAtLeast(maxLinesIn, 1);
  }
  function finalMaxWidth(constraints, softWrap, overflow, maxIntrinsicWidth) {
    var widthMatters = softWrap || overflow === Companion_getInstance_11().m4z_1;
    var tmp;
    if (widthMatters && _Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = 2147483647;
    }
    var maxWidth = tmp;
    var tmp_0;
    if (_Constraints___get_minWidth__impl__hi9lfi(constraints) === maxWidth) {
      tmp_0 = maxWidth;
    } else {
      tmp_0 = coerceIn(ceilToIntPx(maxIntrinsicWidth), _Constraints___get_minWidth__impl__hi9lfi(constraints), maxWidth);
    }
    return tmp_0;
  }
  function get_EmptyTextReplacement() {
    _init_properties_MinLinesConstrainer_kt__odtdjv();
    return EmptyTextReplacement;
  }
  var EmptyTextReplacement;
  function get_TwoLineTextReplacement() {
    _init_properties_MinLinesConstrainer_kt__odtdjv();
    return TwoLineTextReplacement;
  }
  var TwoLineTextReplacement;
  function Companion_0() {
    this.c9l_1 = null;
  }
  protoOf(Companion_0).d9l = function (minMaxUtil, layoutDirection, paramStyle, density, fontFamilyResolver) {
    if (minMaxUtil == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.text.modifiers.Companion.from.<anonymous>' call
      if (layoutDirection.equals(minMaxUtil.e9l_1) && paramStyle.equals(minMaxUtil.f9l_1) && density.k3h() === minMaxUtil.g9l_1.k3h() && fontFamilyResolver === minMaxUtil.h9l_1) {
        return minMaxUtil;
      }
    }
    var tmp1_safe_receiver = this.c9l_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.text.modifiers.Companion.from.<anonymous>' call
      if (layoutDirection.equals(tmp1_safe_receiver.e9l_1) && paramStyle.equals(tmp1_safe_receiver.f9l_1) && density.k3h() === tmp1_safe_receiver.g9l_1.k3h() && fontFamilyResolver === tmp1_safe_receiver.h9l_1) {
        return tmp1_safe_receiver;
      }
    }
    // Inline function 'kotlin.also' call
    var this_0 = new MinLinesConstrainer(layoutDirection, resolveDefaults(paramStyle, layoutDirection), Density_0(density.k3h(), density.u3h()), fontFamilyResolver);
    // Inline function 'androidx.compose.foundation.text.modifiers.Companion.from.<anonymous>' call
    Companion_instance_3.c9l_1 = this_0;
    return this_0;
  };
  var Companion_instance_3;
  function Companion_getInstance_21() {
    return Companion_instance_3;
  }
  function MinLinesConstrainer(layoutDirection, inputTextStyle, density, fontFamilyResolver) {
    this.e9l_1 = layoutDirection;
    this.f9l_1 = inputTextStyle;
    this.g9l_1 = density;
    this.h9l_1 = fontFamilyResolver;
    this.i9l_1 = resolveDefaults(this.f9l_1, this.e9l_1);
    var tmp = this;
    tmp.j9l_1 = NaN;
    var tmp_0 = this;
    tmp_0.k9l_1 = NaN;
  }
  protoOf(MinLinesConstrainer).l9l = function (inConstraints, minLines) {
    var oneLineHeight = this.k9l_1;
    var lineHeight = this.j9l_1;
    if (isNaN_0(oneLineHeight) || isNaN_0(lineHeight)) {
      oneLineHeight = Paragraph(get_EmptyTextReplacement(), this.i9l_1, Constraints(), this.g9l_1, this.h9l_1, VOID, VOID, 1, false).n3g();
      var twoLineHeight = Paragraph(get_TwoLineTextReplacement(), this.i9l_1, Constraints(), this.g9l_1, this.h9l_1, VOID, VOID, 2, false).n3g();
      lineHeight = twoLineHeight - oneLineHeight;
      this.k9l_1 = oneLineHeight;
      this.j9l_1 = lineHeight;
    }
    var tmp;
    if (!(minLines === 1)) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = oneLineHeight + lineHeight * (minLines - 1 | 0);
      var tmp$ret$1 = roundToInt(this_0);
      tmp = coerceAtMost(coerceAtLeast(tmp$ret$1, 0), _Constraints___get_maxHeight__impl__dt3e8z(inConstraints));
    } else {
      tmp = _Constraints___get_minHeight__impl__ev4bgx(inConstraints);
    }
    var minHeight = tmp;
    var tmp0_maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(inConstraints);
    var tmp1_minWidth = _Constraints___get_minWidth__impl__hi9lfi(inConstraints);
    var tmp2_maxWidth = _Constraints___get_maxWidth__impl__uuyqc(inConstraints);
    return Constraints(tmp1_minWidth, tmp2_maxWidth, minHeight, tmp0_maxHeight);
  };
  var properties_initialized_MinLinesConstrainer_kt_uvu6cn;
  function _init_properties_MinLinesConstrainer_kt__odtdjv() {
    if (!properties_initialized_MinLinesConstrainer_kt_uvu6cn) {
      properties_initialized_MinLinesConstrainer_kt_uvu6cn = true;
      EmptyTextReplacement = repeat('H', 10);
      TwoLineTextReplacement = get_EmptyTextReplacement() + '\n' + get_EmptyTextReplacement();
    }
  }
  function textLayoutResult($this, layoutDirection, finalConstraints, multiParagraph) {
    var tmp0 = multiParagraph.a4j_1.f3w();
    // Inline function 'kotlin.math.min' call
    var b = multiParagraph.d4j_1;
    var layoutWidth = Math.min(tmp0, b);
    var tmp = $this.m9l_1;
    var tmp_0 = $this.n9l_1;
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = $this.t9l_1;
    var tmp$ret$1 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    return new TextLayoutResult(TextLayoutInput_init_$Create$(tmp, tmp_0, tmp$ret$1, $this.r9l_1, $this.q9l_1, $this.p9l_1, ensureNotNull($this.w9l_1), layoutDirection, $this.o9l_1, finalConstraints), multiParagraph, constrain(finalConstraints, IntSize(ceilToIntPx(layoutWidth), ceilToIntPx(multiParagraph.e4j_1))));
  }
  function setLayoutDirection($this, layoutDirection) {
    var localIntrinsics = $this.x9l_1;
    var tmp;
    if (localIntrinsics == null || !layoutDirection.equals($this.y9l_1) || localIntrinsics.h4l()) {
      $this.y9l_1 = layoutDirection;
      var tmp0_annotatedString = $this.m9l_1;
      var tmp1_style = resolveDefaults($this.n9l_1, layoutDirection);
      var tmp2_density = ensureNotNull($this.w9l_1);
      var tmp3_fontFamilyResolver = $this.o9l_1;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = $this.t9l_1;
      var tmp4_placeholders = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      tmp = new MultiParagraphIntrinsics(tmp0_annotatedString, tmp1_style, tmp4_placeholders, tmp2_density, tmp3_fontFamilyResolver);
    } else {
      tmp = localIntrinsics;
    }
    var intrinsics = tmp;
    $this.x9l_1 = intrinsics;
    return intrinsics;
  }
  function layoutText($this, constraints, layoutDirection) {
    var localParagraphIntrinsics = setLayoutDirection($this, layoutDirection);
    return new MultiParagraph(localParagraphIntrinsics, finalConstraints(constraints, $this.q9l_1, $this.p9l_1, localParagraphIntrinsics.f3w()), finalMaxLines($this.q9l_1, $this.p9l_1, $this.r9l_1), $this.p9l_1 === Companion_getInstance_11().m4z_1);
  }
  function newLayoutWillBeDifferent(_this__u8e3s4, $this, constraints, layoutDirection) {
    if (_this__u8e3s4 == null)
      return true;
    if (_this__u8e3s4.y4p_1.a4j_1.h4l())
      return true;
    if (!layoutDirection.equals(_this__u8e3s4.x4p_1.q4q_1))
      return true;
    if (equals(constraints, _this__u8e3s4.x4p_1.s4q_1))
      return false;
    if (!(_Constraints___get_maxWidth__impl__uuyqc(constraints) === _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4.x4p_1.s4q_1)))
      return true;
    if (_Constraints___get_maxHeight__impl__dt3e8z(constraints) < _this__u8e3s4.y4p_1.e4j_1 || _this__u8e3s4.y4p_1.c4j_1) {
      return true;
    }
    return false;
  }
  function markDirty($this) {
    $this.x9l_1 = null;
    $this.z9l_1 = null;
    $this.b9m_1 = -1;
    $this.a9m_1 = -1;
  }
  function MultiParagraphLayoutCache(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, placeholders) {
    overflow = overflow === VOID ? Companion_getInstance_11().l4z_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    minLines = minLines === VOID ? 1 : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    this.m9l_1 = text;
    this.n9l_1 = style;
    this.o9l_1 = fontFamilyResolver;
    this.p9l_1 = overflow;
    this.q9l_1 = softWrap;
    this.r9l_1 = maxLines;
    this.s9l_1 = minLines;
    this.t9l_1 = placeholders;
    this.u9l_1 = null;
    this.v9l_1 = Companion_getInstance_20().a9l_1;
    this.w9l_1 = null;
    this.x9l_1 = null;
    this.y9l_1 = null;
    this.z9l_1 = null;
    this.a9m_1 = -1;
    this.b9m_1 = -1;
  }
  protoOf(MultiParagraphLayoutCache).c9m = function (value) {
    var localField = this.w9l_1;
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.text.modifiers.MultiParagraphLayoutCache.<set-density>.<anonymous>' call
      tmp = _InlineDensity___init__impl__1m7u8m_1(value);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    var tmp_1 = tmp1_elvis_lhs;
    if ((tmp_1 == null ? null : new InlineDensity(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_20().a9l_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var newDensity = tmp_0;
    if (localField == null) {
      this.w9l_1 = value;
      this.v9l_1 = newDensity;
      return Unit_instance;
    }
    if (value == null || !equals(this.v9l_1, newDensity)) {
      this.w9l_1 = value;
      this.v9l_1 = newDensity;
      markDirty(this);
    }
  };
  protoOf(MultiParagraphLayoutCache).d9m = function () {
    var tmp0_elvis_lhs = this.z9l_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('You must call layoutWithConstraints first');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MultiParagraphLayoutCache).e9m = function () {
    return this.z9l_1;
  };
  protoOf(MultiParagraphLayoutCache).f9m = function (constraints, layoutDirection) {
    var tmp;
    if (this.s9l_1 > 1) {
      // Inline function 'kotlin.also' call
      var this_0 = Companion_instance_3.d9l(this.u9l_1, layoutDirection, this.n9l_1, ensureNotNull(this.w9l_1), this.o9l_1);
      // Inline function 'androidx.compose.foundation.text.modifiers.MultiParagraphLayoutCache.layoutWithConstraints.<anonymous>' call
      this.u9l_1 = this_0;
      var localMin = this_0;
      tmp = localMin.l9l(constraints, this.s9l_1);
    } else {
      tmp = constraints;
    }
    var finalConstraints = tmp;
    if (!newLayoutWillBeDifferent(this.z9l_1, this, finalConstraints, layoutDirection)) {
      if (equals(finalConstraints, ensureNotNull(this.z9l_1).x4p_1.s4q_1))
        return false;
      this.z9l_1 = textLayoutResult(this, layoutDirection, finalConstraints, ensureNotNull(this.z9l_1).y4p_1);
      return true;
    }
    var multiParagraph = layoutText(this, finalConstraints, layoutDirection);
    this.z9l_1 = textLayoutResult(this, layoutDirection, finalConstraints, multiParagraph);
    return true;
  };
  protoOf(MultiParagraphLayoutCache).g9m = function (text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, placeholders) {
    this.m9l_1 = text;
    this.n9l_1 = style;
    this.o9l_1 = fontFamilyResolver;
    this.p9l_1 = overflow;
    this.q9l_1 = softWrap;
    this.r9l_1 = maxLines;
    this.s9l_1 = minLines;
    this.t9l_1 = placeholders;
    markDirty(this);
  };
  function setLayoutDirection_0($this, layoutDirection) {
    var localIntrinsics = $this.u9m_1;
    var tmp;
    if (localIntrinsics == null || !layoutDirection.equals($this.v9m_1) || localIntrinsics.h4l()) {
      $this.v9m_1 = layoutDirection;
      tmp = ParagraphIntrinsics($this.h9m_1, resolveDefaults($this.i9m_1, layoutDirection), VOID, VOID, ensureNotNull($this.p9m_1), $this.j9m_1);
    } else {
      tmp = localIntrinsics;
    }
    var intrinsics = tmp;
    $this.u9m_1 = intrinsics;
    return intrinsics;
  }
  function layoutText_0($this, constraints, layoutDirection) {
    var localParagraphIntrinsics = setLayoutDirection_0($this, layoutDirection);
    return Paragraph_0(localParagraphIntrinsics, finalConstraints(constraints, $this.l9m_1, $this.k9m_1, localParagraphIntrinsics.f3w()), finalMaxLines($this.l9m_1, $this.k9m_1, $this.m9m_1), $this.k9m_1 === Companion_getInstance_11().m4z_1);
  }
  function newLayoutWillBeDifferent_0($this, constraints, layoutDirection) {
    var tmp0_elvis_lhs = $this.q9m_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var localParagraph = tmp;
    var tmp1_elvis_lhs = $this.u9m_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return true;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var localParagraphIntrinsics = tmp_0;
    if (localParagraphIntrinsics.h4l())
      return true;
    if (!layoutDirection.equals($this.v9m_1))
      return true;
    if (equals(constraints, $this.w9m_1))
      return false;
    if (!(_Constraints___get_maxWidth__impl__uuyqc(constraints) === _Constraints___get_maxWidth__impl__uuyqc($this.w9m_1)))
      return true;
    if (_Constraints___get_maxHeight__impl__dt3e8z(constraints) < localParagraph.n3g() || localParagraph.w4j()) {
      return true;
    }
    return false;
  }
  function markDirty_0($this) {
    $this.q9m_1 = null;
    $this.u9m_1 = null;
    $this.v9m_1 = null;
    $this.x9m_1 = -1;
    $this.y9m_1 = -1;
    $this.w9m_1 = Companion_instance_1.h3h(0, 0);
    $this.s9m_1 = IntSize(0, 0);
    $this.r9m_1 = false;
  }
  function ParagraphLayoutCache(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines) {
    overflow = overflow === VOID ? Companion_getInstance_11().l4z_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    minLines = minLines === VOID ? 1 : minLines;
    this.h9m_1 = text;
    this.i9m_1 = style;
    this.j9m_1 = fontFamilyResolver;
    this.k9m_1 = overflow;
    this.l9m_1 = softWrap;
    this.m9m_1 = maxLines;
    this.n9m_1 = minLines;
    this.o9m_1 = Companion_getInstance_20().a9l_1;
    this.p9m_1 = null;
    this.q9m_1 = null;
    this.r9m_1 = false;
    this.s9m_1 = IntSize(0, 0);
    this.t9m_1 = null;
    this.u9m_1 = null;
    this.v9m_1 = null;
    this.w9m_1 = Companion_instance_1.h3h(0, 0);
    this.x9m_1 = -1;
    this.y9m_1 = -1;
  }
  protoOf(ParagraphLayoutCache).c9m = function (value) {
    var localField = this.p9m_1;
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.text.modifiers.ParagraphLayoutCache.<set-density>.<anonymous>' call
      tmp = _InlineDensity___init__impl__1m7u8m_1(value);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    var tmp_1 = tmp1_elvis_lhs;
    if ((tmp_1 == null ? null : new InlineDensity(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_20().a9l_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var newDensity = tmp_0;
    if (localField == null) {
      this.p9m_1 = value;
      this.o9m_1 = newDensity;
      return Unit_instance;
    }
    if (value == null || !equals(this.o9m_1, newDensity)) {
      this.p9m_1 = value;
      this.o9m_1 = newDensity;
      markDirty_0(this);
    }
  };
  protoOf(ParagraphLayoutCache).z9m = function () {
    var tmp0_safe_receiver = this.u9m_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.h4l();
  };
  protoOf(ParagraphLayoutCache).f9m = function (constraints, layoutDirection) {
    var tmp;
    if (this.n9m_1 > 1) {
      // Inline function 'kotlin.also' call
      var this_0 = Companion_instance_3.d9l(this.t9m_1, layoutDirection, this.i9m_1, ensureNotNull(this.p9m_1), this.j9m_1);
      // Inline function 'androidx.compose.foundation.text.modifiers.ParagraphLayoutCache.layoutWithConstraints.<anonymous>' call
      this.t9m_1 = this_0;
      var localMin = this_0;
      tmp = localMin.l9l(constraints, this.n9m_1);
    } else {
      tmp = constraints;
    }
    var finalConstraints = tmp;
    if (!newLayoutWillBeDifferent_0(this, finalConstraints, layoutDirection)) {
      if (!equals(finalConstraints, this.w9m_1)) {
        var localParagraph = ensureNotNull(this.q9m_1);
        var tmp2 = localParagraph.f3w();
        // Inline function 'kotlin.math.min' call
        var b = localParagraph.m3g();
        var layoutWidth = Math.min(tmp2, b);
        var localSize = constrain(finalConstraints, IntSize(ceilToIntPx(layoutWidth), ceilToIntPx(localParagraph.n3g())));
        this.s9m_1 = localSize;
        this.r9m_1 = (!(this.k9m_1 === Companion_getInstance_11().n4z_1) && (_IntSize___get_width__impl__d9yl4o(localSize) < localParagraph.m3g() || _IntSize___get_height__impl__prv63b(localSize) < localParagraph.n3g()));
        this.w9m_1 = finalConstraints;
      }
      return false;
    }
    var tmp_0 = this;
    // Inline function 'kotlin.also' call
    var this_1 = layoutText_0(this, finalConstraints, layoutDirection);
    // Inline function 'androidx.compose.foundation.text.modifiers.ParagraphLayoutCache.layoutWithConstraints.<anonymous>' call
    this.w9m_1 = finalConstraints;
    var localSize_0 = constrain(finalConstraints, IntSize(ceilToIntPx(this_1.m3g()), ceilToIntPx(this_1.n3g())));
    this.s9m_1 = localSize_0;
    this.r9m_1 = (!(this.k9m_1 === Companion_getInstance_11().n4z_1) && (_IntSize___get_width__impl__d9yl4o(localSize_0) < this_1.m3g() || _IntSize___get_height__impl__prv63b(localSize_0) < this_1.n3g()));
    tmp_0.q9m_1 = this_1;
    return true;
  };
  protoOf(ParagraphLayoutCache).a9n = function (text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines) {
    this.h9m_1 = text;
    this.i9m_1 = style;
    this.j9m_1 = fontFamilyResolver;
    this.k9m_1 = overflow;
    this.l9m_1 = softWrap;
    this.m9m_1 = maxLines;
    this.n9m_1 = minLines;
    markDirty_0(this);
  };
  protoOf(ParagraphLayoutCache).b9n = function (style) {
    var tmp0_elvis_lhs = this.v9m_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var localLayoutDirection = tmp;
    var tmp1_elvis_lhs = this.p9m_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var localDensity = tmp_0;
    var annotatedString = AnnotatedString_init_$Create$(this.h9m_1);
    if (this.q9m_1 == null)
      return null;
    if (this.u9m_1 == null)
      return null;
    var finalConstraints = Constraints__copy$default_impl_f452rp(this.w9m_1, 0, VOID, 0);
    return new TextLayoutResult(TextLayoutInput_init_$Create$(annotatedString, style, emptyList(), this.m9m_1, this.l9m_1, this.k9m_1, localDensity, localLayoutDirection, this.j9m_1, finalConstraints), new MultiParagraph(new MultiParagraphIntrinsics(annotatedString, style, emptyList(), localDensity, this.j9m_1), finalConstraints, this.m9m_1, this.k9m_1 === Companion_getInstance_11().m4z_1), this.s9m_1);
  };
  protoOf(ParagraphLayoutCache).toString = function () {
    return 'ParagraphLayoutCache(paragraph=' + (!(this.q9m_1 == null) ? '<paragraph>' : 'null') + ', ' + ('lastDensity=' + InlineDensity__toString_impl_9jhvwu(this.o9m_1) + ')');
  };
  function SelectableTextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_11().l4z_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    minLines = minLines === VOID ? 1 : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    color = color === VOID ? null : color;
    ModifierNodeElement.call(this);
    this.d9n_1 = text;
    this.e9n_1 = style;
    this.f9n_1 = fontFamilyResolver;
    this.g9n_1 = onTextLayout;
    this.h9n_1 = overflow;
    this.i9n_1 = softWrap;
    this.j9n_1 = maxLines;
    this.k9n_1 = minLines;
    this.l9n_1 = placeholders;
    this.m9n_1 = onPlaceholderLayout;
    this.n9n_1 = selectionController;
    this.o9n_1 = color;
  }
  protoOf(SelectableTextAnnotatedStringElement).f2e = function () {
    return new SelectableTextAnnotatedStringNode(this.d9n_1, this.e9n_1, this.f9n_1, this.g9n_1, this.h9n_1, this.i9n_1, this.j9n_1, this.k9n_1, this.l9n_1, this.m9n_1, this.n9n_1, this.o9n_1);
  };
  protoOf(SelectableTextAnnotatedStringElement).p9n = function (node) {
    node.i9o(this.d9n_1, this.e9n_1, this.l9n_1, this.k9n_1, this.j9n_1, this.i9n_1, this.f9n_1, this.h9n_1, this.g9n_1, this.m9n_1, this.n9n_1, this.o9n_1);
  };
  protoOf(SelectableTextAnnotatedStringElement).t5f = function (node) {
    return this.p9n(node instanceof SelectableTextAnnotatedStringNode ? node : THROW_CCE());
  };
  protoOf(SelectableTextAnnotatedStringElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SelectableTextAnnotatedStringElement))
      return false;
    if (!equals(this.o9n_1, other.o9n_1))
      return false;
    if (!this.d9n_1.equals(other.d9n_1))
      return false;
    if (!this.e9n_1.equals(other.e9n_1))
      return false;
    if (!equals(this.l9n_1, other.l9n_1))
      return false;
    if (!equals(this.f9n_1, other.f9n_1))
      return false;
    if (!(this.g9n_1 === other.g9n_1))
      return false;
    if (!(this.h9n_1 === other.h9n_1))
      return false;
    if (!(this.i9n_1 === other.i9n_1))
      return false;
    if (!(this.j9n_1 === other.j9n_1))
      return false;
    if (!(this.k9n_1 === other.k9n_1))
      return false;
    if (!(this.m9n_1 === other.m9n_1))
      return false;
    if (!equals(this.n9n_1, other.n9n_1))
      return false;
    return true;
  };
  protoOf(SelectableTextAnnotatedStringElement).hashCode = function () {
    var result = this.d9n_1.hashCode();
    result = imul(31, result) + this.e9n_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.f9n_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.g9n_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.h9n_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.i9n_1) | 0;
    result = imul(31, result) + this.j9n_1 | 0;
    result = imul(31, result) + this.k9n_1 | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.l9n_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.m9n_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.n9n_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_3 = imul(31, result);
    var tmp8_safe_receiver = this.o9n_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : hashCode(tmp8_safe_receiver);
    result = tmp_3 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    return result;
  };
  protoOf(SelectableTextAnnotatedStringElement).toString = function () {
    return 'SelectableTextAnnotatedStringElement(text=' + this.d9n_1.toString() + ', style=' + this.e9n_1.toString() + ', fontFamilyResolver=' + toString(this.f9n_1) + ', onTextLayout=' + toString_0(this.g9n_1) + ', overflow=' + TextOverflow__toString_impl_10s0c2(this.h9n_1) + ', softWrap=' + this.i9n_1 + ', maxLines=' + this.j9n_1 + ', minLines=' + this.k9n_1 + ', placeholders=' + toString_0(this.l9n_1) + ', onPlaceholderLayout=' + toString_0(this.m9n_1) + ', selectionController=' + toString_0(this.n9n_1) + ', color=' + toString_0(this.o9n_1) + ')';
  };
  function SelectableTextAnnotatedStringNode(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, overrideColor, onShowTranslation) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_11().l4z_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    minLines = minLines === VOID ? 1 : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    overrideColor = overrideColor === VOID ? null : overrideColor;
    onShowTranslation = onShowTranslation === VOID ? null : onShowTranslation;
    DelegatingNode.call(this);
    this.f9o_1 = selectionController;
    this.g9o_1 = onShowTranslation;
    this.h9o_1 = this.h6g(new TextAnnotatedStringNode(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, this.f9o_1, overrideColor, this.g9o_1));
    var tmp0 = this.f9o_1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.compose.foundation.text.modifiers.SelectableTextAnnotatedStringNode.<anonymous>' call
        var message = 'Do not use SelectionCapableStaticTextModifier unless selectionController != null';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
  }
  protoOf(SelectableTextAnnotatedStringNode).d68 = function (coordinates) {
    var tmp0_safe_receiver = this.f9o_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.j9o(coordinates);
    }
  };
  protoOf(SelectableTextAnnotatedStringNode).j5c = function (_this__u8e3s4) {
    return this.h9o_1.o9p(_this__u8e3s4);
  };
  protoOf(SelectableTextAnnotatedStringNode).u5o = function (_this__u8e3s4, measurable, constraints) {
    return this.h9o_1.p9p(_this__u8e3s4, measurable, constraints);
  };
  protoOf(SelectableTextAnnotatedStringNode).i9o = function (text, style, placeholders, minLines, maxLines, softWrap, fontFamilyResolver, overflow, onTextLayout, onPlaceholderLayout, selectionController, color) {
    this.h9o_1.u9p(this.h9o_1.q9p(color, style), this.h9o_1.r9p(text), this.h9o_1.s9p(style, placeholders, minLines, maxLines, softWrap, fontFamilyResolver, overflow), this.h9o_1.t9p(onTextLayout, onPlaceholderLayout, selectionController, this.g9o_1));
    this.f9o_1 = selectionController;
    invalidateMeasurement(this);
  };
  function SelectionController$modifier$lambda(this$0) {
    return function () {
      return this$0.v9k_1.v9p_1;
    };
  }
  function SelectionController$onRemembered$lambda(this$0) {
    return function () {
      return this$0.v9k_1.v9p_1;
    };
  }
  function SelectionController$onRemembered$lambda_0(this$0) {
    return function () {
      return this$0.v9k_1.w9p_1;
    };
  }
  function SelectionController(selectableId, selectionRegistrar, backgroundSelectionColor, params) {
    params = params === VOID ? Companion_getInstance_22().x9p_1 : params;
    this.s9k_1 = selectableId;
    this.t9k_1 = selectionRegistrar;
    this.u9k_1 = backgroundSelectionColor;
    this.v9k_1 = params;
    this.w9k_1 = null;
    var tmp = this;
    tmp.x9k_1 = pointerHoverIcon(makeSelectionModifier(this.t9k_1, this.s9k_1, SelectionController$modifier$lambda(this)), get_textPointerIcon());
  }
  protoOf(SelectionController).e24 = function () {
    var tmp = this;
    var tmp_0 = SelectionController$onRemembered$lambda(this);
    tmp.w9k_1 = this.t9k_1.y9p(new MultiWidgetSelectionDelegate(this.s9k_1, tmp_0, SelectionController$onRemembered$lambda_0(this)));
  };
  protoOf(SelectionController).g24 = function () {
    var localSelectable = this.w9k_1;
    if (!(localSelectable == null)) {
      this.t9k_1.z9p(localSelectable);
      this.w9k_1 = null;
    }
  };
  protoOf(SelectionController).f24 = function () {
    var localSelectable = this.w9k_1;
    if (!(localSelectable == null)) {
      this.t9k_1.z9p(localSelectable);
      this.w9k_1 = null;
    }
  };
  protoOf(SelectionController).a9q = function (textLayoutResult) {
    var prevTextLayoutResult = this.v9k_1.w9p_1;
    if (!(prevTextLayoutResult == null) && !prevTextLayoutResult.x4p_1.j4q_1.equals(textLayoutResult.x4p_1.j4q_1)) {
      this.t9k_1.b9q(this.s9k_1);
    }
    this.v9k_1 = this.v9k_1.c9q(VOID, textLayoutResult);
  };
  protoOf(SelectionController).j9o = function (coordinates) {
    this.v9k_1 = this.v9k_1.c9q(coordinates);
    this.t9k_1.d9q(this.s9k_1);
  };
  protoOf(SelectionController).e9q = function (drawScope) {
    var tmp0_elvis_lhs = this.t9k_1.f9q().cp(this.s9k_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var selection = tmp;
    var tmp_0;
    if (!selection.l9q_1) {
      tmp_0 = selection.j9q_1.h9q_1;
    } else {
      tmp_0 = selection.k9q_1.h9q_1;
    }
    var start = tmp_0;
    var tmp_1;
    if (!selection.l9q_1) {
      tmp_1 = selection.k9q_1.h9q_1;
    } else {
      tmp_1 = selection.j9q_1.h9q_1;
    }
    var end = tmp_1;
    if (start === end)
      return Unit_instance;
    var tmp1_safe_receiver = this.w9k_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.m9q();
    var lastOffset = tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs;
    var clippedStart = coerceAtMost(start, lastOffset);
    var clippedEnd = coerceAtMost(end, lastOffset);
    var tmp3_elvis_lhs = this.v9k_1.q4j(clippedStart, clippedEnd);
    var tmp_2;
    if (tmp3_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_2 = tmp3_elvis_lhs;
    }
    var selectionPath = tmp_2;
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.text.modifiers.SelectionController.draw.<anonymous>' call
    if (this.v9k_1.n9q()) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
      var right = _Size___get_width__impl__58y75t(drawScope.z4c());
      var bottom = _Size___get_height__impl__a04p02(drawScope.z4c());
      var clipOp = Companion_getInstance_5().d43_1;
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform.<anonymous>' call
      var $this$with = drawScope.x4d();
      var previousSize = $this$with.z4c();
      $this$with.j3t().t42();
      try {
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
        $this$with.r4d().a43(0.0, 0.0, right, bottom, clipOp);
        // Inline function 'androidx.compose.foundation.text.modifiers.SelectionController.draw.<anonymous>.<anonymous>' call
        drawScope.f4e(selectionPath, this.u9k_1);
      }finally {
        $this$with.j3t().u42();
        $this$with.q4d(previousSize);
      }
    } else {
      drawScope.f4e(selectionPath, this.u9k_1);
    }
  };
  function Companion_1() {
    Companion_instance_4 = this;
    this.x9p_1 = new StaticTextSelectionParams(null, null);
  }
  var Companion_instance_4;
  function Companion_getInstance_22() {
    if (Companion_instance_4 == null)
      new Companion_1();
    return Companion_instance_4;
  }
  function StaticTextSelectionParams(layoutCoordinates, textLayoutResult) {
    Companion_getInstance_22();
    this.v9p_1 = layoutCoordinates;
    this.w9p_1 = textLayoutResult;
  }
  protoOf(StaticTextSelectionParams).q4j = function (start, end) {
    var tmp0_safe_receiver = this.w9p_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q4j(start, end);
  };
  protoOf(StaticTextSelectionParams).n9q = function () {
    var tmp0_safe_receiver = this.w9p_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.text.modifiers.StaticTextSelectionParams.<get-shouldClip>.<anonymous>' call
      tmp = (!(tmp0_safe_receiver.x4p_1.o4q_1 === Companion_getInstance_11().n4z_1) && tmp0_safe_receiver.f4q());
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(StaticTextSelectionParams).o9q = function (layoutCoordinates, textLayoutResult) {
    return new StaticTextSelectionParams(layoutCoordinates, textLayoutResult);
  };
  protoOf(StaticTextSelectionParams).c9q = function (layoutCoordinates, textLayoutResult, $super) {
    layoutCoordinates = layoutCoordinates === VOID ? this.v9p_1 : layoutCoordinates;
    textLayoutResult = textLayoutResult === VOID ? this.w9p_1 : textLayoutResult;
    return $super === VOID ? this.o9q(layoutCoordinates, textLayoutResult) : $super.o9q.call(this, layoutCoordinates, textLayoutResult);
  };
  function makeDefaultSelectionModifier(_this__u8e3s4, selectableId, layoutCoordinates) {
    var longPressDragObserver = new makeDefaultSelectionModifier$longPressDragObserver$1(layoutCoordinates, _this__u8e3s4, selectableId);
    var mouseSelectionObserver = new makeDefaultSelectionModifier$mouseSelectionObserver$1(layoutCoordinates, _this__u8e3s4, selectableId);
    return selectionGestureInput(Companion_instance_0, mouseSelectionObserver, longPressDragObserver);
  }
  function makeDefaultSelectionModifier$longPressDragObserver$1($layoutCoordinates, $this_makeDefaultSelectionModifier, $selectableId) {
    this.r9q_1 = $layoutCoordinates;
    this.s9q_1 = $this_makeDefaultSelectionModifier;
    this.t9q_1 = $selectableId;
    this.p9q_1 = Companion_getInstance_6().d3g_1;
    this.q9q_1 = Companion_getInstance_6().d3g_1;
  }
  protoOf(makeDefaultSelectionModifier$longPressDragObserver$1).u9q = function (startPoint) {
    var tmp0_safe_receiver = this.r9q_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.text.modifiers.<no name provided>.onStart.<anonymous>' call
      if (!tmp0_safe_receiver.r5n())
        return Unit_instance;
      this.s9q_1.a9r(tmp0_safe_receiver, startPoint, Companion_getInstance_23().x9q_1, true);
      this.p9q_1 = startPoint;
    }
    if (!hasSelection(this.s9q_1, this.t9q_1))
      return Unit_instance;
    this.q9q_1 = Companion_getInstance_6().d3g_1;
  };
  protoOf(makeDefaultSelectionModifier$longPressDragObserver$1).b9r = function (delta) {
    var tmp0_safe_receiver = this.r9q_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.text.modifiers.<no name provided>.onDrag.<anonymous>' call
      if (!tmp0_safe_receiver.r5n())
        return Unit_instance;
      if (!hasSelection(this.s9q_1, this.t9q_1))
        return Unit_instance;
      this.q9q_1 = Offset__plus_impl_c78cg0(this.q9q_1, delta);
      var newPosition = Offset__plus_impl_c78cg0(this.p9q_1, this.q9q_1);
      var tmp1_previousPosition = this.p9q_1;
      var tmp2_adjustment = Companion_getInstance_23().x9q_1;
      var consumed = this.s9q_1.c9r(tmp0_safe_receiver, newPosition, tmp1_previousPosition, false, tmp2_adjustment, true);
      if (consumed) {
        this.p9q_1 = newPosition;
        this.q9q_1 = Companion_getInstance_6().d3g_1;
      }
    }
  };
  protoOf(makeDefaultSelectionModifier$longPressDragObserver$1).d9r = function () {
    if (hasSelection(this.s9q_1, this.t9q_1)) {
      this.s9q_1.e9r();
    }
  };
  protoOf(makeDefaultSelectionModifier$longPressDragObserver$1).t6e = function () {
    if (hasSelection(this.s9q_1, this.t9q_1)) {
      this.s9q_1.e9r();
    }
  };
  function makeDefaultSelectionModifier$mouseSelectionObserver$1($layoutCoordinates, $this_makeDefaultSelectionModifier, $selectableId) {
    this.g9r_1 = $layoutCoordinates;
    this.h9r_1 = $this_makeDefaultSelectionModifier;
    this.i9r_1 = $selectableId;
    this.f9r_1 = Companion_getInstance_6().d3g_1;
  }
  protoOf(makeDefaultSelectionModifier$mouseSelectionObserver$1).j9r = function (downPosition) {
    var tmp0_safe_receiver = this.g9r_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (!tmp0_safe_receiver.r5n())
        return false;
      var consumed = this.h9r_1.c9r(tmp0_safe_receiver, downPosition, this.f9r_1, false, Companion_getInstance_23().v9q_1, false);
      if (consumed) {
        this.f9r_1 = downPosition;
      }
      return hasSelection(this.h9r_1, this.i9r_1);
    }
    return false;
  };
  protoOf(makeDefaultSelectionModifier$mouseSelectionObserver$1).k9r = function (dragPosition) {
    var tmp0_safe_receiver = this.g9r_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.text.modifiers.<no name provided>.onExtendDrag.<anonymous>' call
      if (!tmp0_safe_receiver.r5n())
        return false;
      if (!hasSelection(this.h9r_1, this.i9r_1))
        return false;
      var consumed = this.h9r_1.c9r(tmp0_safe_receiver, dragPosition, this.f9r_1, false, Companion_getInstance_23().v9q_1, false);
      if (consumed) {
        this.f9r_1 = dragPosition;
      }
    }
    return true;
  };
  protoOf(makeDefaultSelectionModifier$mouseSelectionObserver$1).l9r = function (downPosition, adjustment) {
    var tmp0_safe_receiver = this.g9r_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (!tmp0_safe_receiver.r5n())
        return false;
      this.h9r_1.a9r(tmp0_safe_receiver, downPosition, adjustment, false);
      this.f9r_1 = downPosition;
      return hasSelection(this.h9r_1, this.i9r_1);
    }
    return false;
  };
  protoOf(makeDefaultSelectionModifier$mouseSelectionObserver$1).m9r = function (dragPosition, adjustment) {
    var tmp0_safe_receiver = this.g9r_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.text.modifiers.<no name provided>.onDrag.<anonymous>' call
      if (!tmp0_safe_receiver.r5n())
        return false;
      if (!hasSelection(this.h9r_1, this.i9r_1))
        return false;
      var tmp0_previousPosition = this.f9r_1;
      var consumed = this.h9r_1.c9r(tmp0_safe_receiver, dragPosition, tmp0_previousPosition, false, adjustment, false);
      if (consumed) {
        this.f9r_1 = dragPosition;
      }
    }
    return true;
  };
  protoOf(makeDefaultSelectionModifier$mouseSelectionObserver$1).n9r = function () {
    this.h9r_1.e9r();
  };
  function TextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color, onShowTranslation) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_11().l4z_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    minLines = minLines === VOID ? 1 : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    color = color === VOID ? null : color;
    onShowTranslation = onShowTranslation === VOID ? null : onShowTranslation;
    ModifierNodeElement.call(this);
    this.p9r_1 = text;
    this.q9r_1 = style;
    this.r9r_1 = fontFamilyResolver;
    this.s9r_1 = onTextLayout;
    this.t9r_1 = overflow;
    this.u9r_1 = softWrap;
    this.v9r_1 = maxLines;
    this.w9r_1 = minLines;
    this.x9r_1 = placeholders;
    this.y9r_1 = onPlaceholderLayout;
    this.z9r_1 = selectionController;
    this.a9s_1 = color;
    this.b9s_1 = onShowTranslation;
  }
  protoOf(TextAnnotatedStringElement).f2e = function () {
    return new TextAnnotatedStringNode(this.p9r_1, this.q9r_1, this.r9r_1, this.s9r_1, this.t9r_1, this.u9r_1, this.v9r_1, this.w9r_1, this.x9r_1, this.y9r_1, this.z9r_1, this.a9s_1, this.b9s_1);
  };
  protoOf(TextAnnotatedStringElement).c9s = function (node) {
    node.u9p(node.q9p(this.a9s_1, this.q9r_1), node.r9p(this.p9r_1), node.s9p(this.q9r_1, this.x9r_1, this.w9r_1, this.v9r_1, this.u9r_1, this.r9r_1, this.t9r_1), node.t9p(this.s9r_1, this.y9r_1, this.z9r_1, this.b9s_1));
  };
  protoOf(TextAnnotatedStringElement).t5f = function (node) {
    return this.c9s(node instanceof TextAnnotatedStringNode ? node : THROW_CCE());
  };
  protoOf(TextAnnotatedStringElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextAnnotatedStringElement))
      return false;
    if (!equals(this.a9s_1, other.a9s_1))
      return false;
    if (!this.p9r_1.equals(other.p9r_1))
      return false;
    if (!this.q9r_1.equals(other.q9r_1))
      return false;
    if (!equals(this.x9r_1, other.x9r_1))
      return false;
    if (!equals(this.r9r_1, other.r9r_1))
      return false;
    if (!(this.s9r_1 === other.s9r_1))
      return false;
    if (!(this.b9s_1 === other.b9s_1))
      return false;
    if (!(this.t9r_1 === other.t9r_1))
      return false;
    if (!(this.u9r_1 === other.u9r_1))
      return false;
    if (!(this.v9r_1 === other.v9r_1))
      return false;
    if (!(this.w9r_1 === other.w9r_1))
      return false;
    if (!(this.y9r_1 === other.y9r_1))
      return false;
    if (!equals(this.z9r_1, other.z9r_1))
      return false;
    return true;
  };
  protoOf(TextAnnotatedStringElement).hashCode = function () {
    var result = this.p9r_1.hashCode();
    result = imul(31, result) + this.q9r_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.r9r_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.s9r_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.t9r_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.u9r_1) | 0;
    result = imul(31, result) + this.v9r_1 | 0;
    result = imul(31, result) + this.w9r_1 | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.x9r_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.y9r_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.z9r_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_3 = imul(31, result);
    var tmp8_safe_receiver = this.a9s_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : hashCode(tmp8_safe_receiver);
    result = tmp_3 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    var tmp_4 = imul(31, result);
    var tmp10_safe_receiver = this.b9s_1;
    var tmp11_elvis_lhs = tmp10_safe_receiver == null ? null : hashCode(tmp10_safe_receiver);
    result = tmp_4 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    return result;
  };
  function _get_layoutCache__kch9ev($this) {
    if ($this.l9p_1 == null) {
      $this.l9p_1 = new MultiParagraphLayoutCache($this.x9o_1, $this.y9o_1, $this.z9o_1, $this.b9p_1, $this.c9p_1, $this.d9p_1, $this.e9p_1, $this.f9p_1);
    }
    return ensureNotNull($this.l9p_1);
  }
  function getLayoutCache($this, density) {
    var tmp0_safe_receiver = $this.n9p_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.text.modifiers.TextAnnotatedStringNode.getLayoutCache.<anonymous>' call
      if (tmp0_safe_receiver.f9s_1) {
        var tmp0_safe_receiver_0 = tmp0_safe_receiver.g9s_1;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.also' call
          // Inline function 'androidx.compose.foundation.text.modifiers.TextAnnotatedStringNode.getLayoutCache.<anonymous>.<anonymous>.<anonymous>' call
          tmp0_safe_receiver_0.c9m(density);
          return tmp0_safe_receiver_0;
        }
      }
    }
    // Inline function 'kotlin.also' call
    var this_0 = _get_layoutCache__kch9ev($this);
    // Inline function 'androidx.compose.foundation.text.modifiers.TextAnnotatedStringNode.getLayoutCache.<anonymous>' call
    this_0.c9m(density);
    return this_0;
  }
  function TextSubstitutionValue(original, substitution, isShowingSubstitution, layoutCache) {
    isShowingSubstitution = isShowingSubstitution === VOID ? false : isShowingSubstitution;
    layoutCache = layoutCache === VOID ? null : layoutCache;
    this.d9s_1 = original;
    this.e9s_1 = substitution;
    this.f9s_1 = isShowingSubstitution;
    this.g9s_1 = layoutCache;
  }
  protoOf(TextSubstitutionValue).toString = function () {
    return 'TextSubstitutionValue(original=' + this.d9s_1.toString() + ', substitution=' + this.e9s_1.toString() + ', isShowingSubstitution=' + this.f9s_1 + ', layoutCache=' + toString_0(this.g9s_1) + ')';
  };
  protoOf(TextSubstitutionValue).hashCode = function () {
    var result = this.d9s_1.hashCode();
    result = imul(result, 31) + this.e9s_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.f9s_1) | 0;
    result = imul(result, 31) + (this.g9s_1 == null ? 0 : hashCode(this.g9s_1)) | 0;
    return result;
  };
  protoOf(TextSubstitutionValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextSubstitutionValue))
      return false;
    var tmp0_other_with_cast = other instanceof TextSubstitutionValue ? other : THROW_CCE();
    if (!this.d9s_1.equals(tmp0_other_with_cast.d9s_1))
      return false;
    if (!this.e9s_1.equals(tmp0_other_with_cast.e9s_1))
      return false;
    if (!(this.f9s_1 === tmp0_other_with_cast.f9s_1))
      return false;
    if (!equals(this.g9s_1, tmp0_other_with_cast.g9s_1))
      return false;
    return true;
  };
  function setSubstitution($this, updatedText) {
    var currentTextSubstitution = $this.n9p_1;
    if (!(currentTextSubstitution == null)) {
      if (updatedText.equals(currentTextSubstitution.e9s_1)) {
        return false;
      }
      currentTextSubstitution.e9s_1 = updatedText;
      var tmp0_safe_receiver = currentTextSubstitution.g9s_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp0_safe_receiver.g9m(updatedText, $this.y9o_1, $this.z9o_1, $this.b9p_1, $this.c9p_1, $this.d9p_1, $this.e9p_1, $this.f9p_1);
        tmp = Unit_instance;
      }
      if (tmp == null)
        return false;
    } else {
      var newTextSubstitution = new TextSubstitutionValue($this.x9o_1, updatedText);
      var substitutionLayoutCache = new MultiParagraphLayoutCache(updatedText, $this.y9o_1, $this.z9o_1, $this.b9p_1, $this.c9p_1, $this.d9p_1, $this.e9p_1, $this.f9p_1);
      substitutionLayoutCache.c9m(_get_layoutCache__kch9ev($this).w9l_1);
      newTextSubstitution.g9s_1 = substitutionLayoutCache;
      $this.n9p_1 = newTextSubstitution;
    }
    return true;
  }
  function invalidateForTranslate($this) {
    invalidateSemantics($this);
    invalidateMeasurement($this);
    invalidateDraw($this);
  }
  function TextAnnotatedStringNode$applySemantics$lambda(this$0) {
    return function (textLayoutResult) {
      var inputLayout = _get_layoutCache__kch9ev(this$0).e9m();
      var tmp;
      if (inputLayout == null) {
        tmp = null;
      } else {
        var tmp_0 = this$0.y9o_1;
        var tmp0_safe_receiver = this$0.i9p_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l46();
        var tmp_1;
        var tmp_2 = tmp1_elvis_lhs;
        if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
          tmp_1 = Companion_getInstance().j45_1;
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = inputLayout.i4q(TextLayoutInput_init_$Create$(inputLayout.x4p_1.j4q_1, tmp_0.a4r(tmp_1), inputLayout.x4p_1.l4q_1, inputLayout.x4p_1.m4q_1, inputLayout.x4p_1.n4q_1, inputLayout.x4p_1.o4q_1, inputLayout.x4p_1.p4q_1, inputLayout.x4p_1.q4q_1, inputLayout.x4p_1.r4q_1, inputLayout.x4p_1.s4q_1));
      }
      var tmp3_safe_receiver = tmp;
      var tmp_3;
      if (tmp3_safe_receiver == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.foundation.text.modifiers.TextAnnotatedStringNode.applySemantics.<anonymous>.<anonymous>' call
        textLayoutResult.e(tmp3_safe_receiver);
        tmp_3 = tmp3_safe_receiver;
      }
      var layout = tmp_3;
      return !(layout == null);
    };
  }
  function TextAnnotatedStringNode$applySemantics$lambda_0(this$0) {
    return function (updatedText) {
      setSubstitution(this$0, updatedText);
      invalidateForTranslate(this$0);
      return true;
    };
  }
  function TextAnnotatedStringNode$applySemantics$lambda_1(this$0) {
    return function (it) {
      var tmp;
      if (this$0.n9p_1 == null) {
        return false;
      }
      var tmp0_safe_receiver = this$0.j9p_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(ensureNotNull(this$0.n9p_1));
      var tmp1_safe_receiver = this$0.n9p_1;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = Unit_instance;
      } else {
        tmp1_safe_receiver.f9s_1 = it;
        tmp_0 = Unit_instance;
      }
      invalidateForTranslate(this$0);
      return true;
    };
  }
  function TextAnnotatedStringNode$applySemantics$lambda_2(this$0) {
    return function () {
      this$0.h9s();
      invalidateForTranslate(this$0);
      return true;
    };
  }
  function TextAnnotatedStringNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.u67($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function TextAnnotatedStringNode(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, overrideColor, onShowTranslation) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_11().l4z_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    minLines = minLines === VOID ? 1 : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    overrideColor = overrideColor === VOID ? null : overrideColor;
    onShowTranslation = onShowTranslation === VOID ? null : onShowTranslation;
    Node.call(this);
    this.x9o_1 = text;
    this.y9o_1 = style;
    this.z9o_1 = fontFamilyResolver;
    this.a9p_1 = onTextLayout;
    this.b9p_1 = overflow;
    this.c9p_1 = softWrap;
    this.d9p_1 = maxLines;
    this.e9p_1 = minLines;
    this.f9p_1 = placeholders;
    this.g9p_1 = onPlaceholderLayout;
    this.h9p_1 = selectionController;
    this.i9p_1 = overrideColor;
    this.j9p_1 = onShowTranslation;
    this.k9p_1 = null;
    this.l9p_1 = null;
    this.m9p_1 = null;
    this.n9p_1 = null;
  }
  protoOf(TextAnnotatedStringNode).q9p = function (color, style) {
    var changed = false;
    if (!equals(color, this.i9p_1)) {
      changed = true;
    }
    this.i9p_1 = color;
    changed = changed || !style.c4s(this.y9o_1);
    return changed;
  };
  protoOf(TextAnnotatedStringNode).r9p = function (text) {
    var charDiff = !(this.x9o_1.x4h_1 === text.x4h_1);
    var spanDiff = !equals(this.x9o_1.b4i(), text.b4i());
    var paragraphDiff = !equals(this.x9o_1.c4i(), text.c4i());
    var annotationDiff = !this.x9o_1.e4i(text);
    var anyDiff = charDiff || spanDiff || paragraphDiff || annotationDiff;
    if (anyDiff) {
      this.x9o_1 = text;
    }
    if (charDiff) {
      this.h9s();
    }
    return anyDiff;
  };
  protoOf(TextAnnotatedStringNode).s9p = function (style, placeholders, minLines, maxLines, softWrap, fontFamilyResolver, overflow) {
    var changed;
    changed = !this.y9o_1.b4s(style);
    this.y9o_1 = style;
    if (!equals(this.f9p_1, placeholders)) {
      this.f9p_1 = placeholders;
      changed = true;
    }
    if (!(this.e9p_1 === minLines)) {
      this.e9p_1 = minLines;
      changed = true;
    }
    if (!(this.d9p_1 === maxLines)) {
      this.d9p_1 = maxLines;
      changed = true;
    }
    if (!(this.c9p_1 === softWrap)) {
      this.c9p_1 = softWrap;
      changed = true;
    }
    if (!equals(this.z9o_1, fontFamilyResolver)) {
      this.z9o_1 = fontFamilyResolver;
      changed = true;
    }
    if (!(this.b9p_1 === overflow)) {
      this.b9p_1 = overflow;
      changed = true;
    }
    return changed;
  };
  protoOf(TextAnnotatedStringNode).t9p = function (onTextLayout, onPlaceholderLayout, selectionController, onShowTranslation) {
    var changed = false;
    if (!(this.a9p_1 === onTextLayout)) {
      this.a9p_1 = onTextLayout;
      changed = true;
    }
    if (!(this.g9p_1 === onPlaceholderLayout)) {
      this.g9p_1 = onPlaceholderLayout;
      changed = true;
    }
    if (!equals(this.h9p_1, selectionController)) {
      this.h9p_1 = selectionController;
      changed = true;
    }
    if (!(this.j9p_1 === onShowTranslation)) {
      this.j9p_1 = onShowTranslation;
      changed = true;
    }
    return changed;
  };
  protoOf(TextAnnotatedStringNode).u9p = function (drawChanged, textChanged, layoutChanged, callbacksChanged) {
    if (textChanged || layoutChanged || callbacksChanged) {
      _get_layoutCache__kch9ev(this).g9m(this.x9o_1, this.y9o_1, this.z9o_1, this.b9p_1, this.c9p_1, this.d9p_1, this.e9p_1, this.f9p_1);
    }
    if (!this.x5a_1) {
      return Unit_instance;
    }
    if (textChanged || (drawChanged && !(this.m9p_1 == null))) {
      invalidateSemantics(this);
    }
    if (textChanged || layoutChanged || callbacksChanged) {
      invalidateMeasurement(this);
      invalidateDraw(this);
    }
    if (drawChanged) {
      invalidateDraw(this);
    }
  };
  protoOf(TextAnnotatedStringNode).h9s = function () {
    this.n9p_1 = null;
  };
  protoOf(TextAnnotatedStringNode).n6e = function (_this__u8e3s4) {
    var localSemanticsTextLayoutResult = this.m9p_1;
    if (localSemanticsTextLayoutResult == null) {
      localSemanticsTextLayoutResult = TextAnnotatedStringNode$applySemantics$lambda(this);
      this.m9p_1 = localSemanticsTextLayoutResult;
    }
    set_text(_this__u8e3s4, this.x9o_1);
    var currentTextSubstitution = this.n9p_1;
    if (!(currentTextSubstitution == null)) {
      set_textSubstitution(_this__u8e3s4, currentTextSubstitution.e9s_1);
      set_isShowingTextSubstitution(_this__u8e3s4, currentTextSubstitution.f9s_1);
    }
    setTextSubstitution(_this__u8e3s4, VOID, TextAnnotatedStringNode$applySemantics$lambda_0(this));
    showTextSubstitution(_this__u8e3s4, VOID, TextAnnotatedStringNode$applySemantics$lambda_1(this));
    clearTextSubstitution(_this__u8e3s4, VOID, TextAnnotatedStringNode$applySemantics$lambda_2(this));
    getTextLayoutResult(_this__u8e3s4, VOID, localSemanticsTextLayoutResult);
  };
  protoOf(TextAnnotatedStringNode).w6e = function () {
    return true;
  };
  protoOf(TextAnnotatedStringNode).p9p = function (measureScope, measurable, constraints) {
    return this.u5o(measureScope, measurable, constraints);
  };
  protoOf(TextAnnotatedStringNode).u5o = function (_this__u8e3s4, measurable, constraints) {
    var layoutCache = getLayoutCache(this, _this__u8e3s4);
    var didChangeLayout = layoutCache.f9m(constraints, _this__u8e3s4.t4d());
    var textLayoutResult = layoutCache.d9m();
    textLayoutResult.y4p_1.a4j_1.h4l();
    if (didChangeLayout) {
      invalidateLayer(this);
      var tmp0_safe_receiver = this.a9p_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(textLayoutResult);
      var tmp1_safe_receiver = this.h9p_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.a9q(textLayoutResult);
      }
      var tmp2_elvis_lhs = this.k9p_1;
      var cache = tmp2_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(2) : tmp2_elvis_lhs;
      var tmp2 = get_FirstBaseline();
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = textLayoutResult.a4q_1;
      // Inline function 'kotlin.collections.set' call
      var value = roundToInt(this_0);
      cache.o2(tmp2, value);
      var tmp6 = get_LastBaseline();
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = textLayoutResult.b4q_1;
      // Inline function 'kotlin.collections.set' call
      var value_0 = roundToInt(this_1);
      cache.o2(tmp6, value_0);
      this.k9p_1 = cache;
    }
    var tmp3_safe_receiver = this.g9p_1;
    if (tmp3_safe_receiver == null)
      null;
    else
      tmp3_safe_receiver(textLayoutResult.c4q_1);
    var placeable = measurable.v5o(Companion_instance_1.i3h(_IntSize___get_width__impl__d9yl4o(textLayoutResult.z4p_1), _IntSize___get_width__impl__d9yl4o(textLayoutResult.z4p_1), _IntSize___get_height__impl__prv63b(textLayoutResult.z4p_1), _IntSize___get_height__impl__prv63b(textLayoutResult.z4p_1)));
    var tmp = _IntSize___get_width__impl__d9yl4o(textLayoutResult.z4p_1);
    var tmp_0 = _IntSize___get_height__impl__prv63b(textLayoutResult.z4p_1);
    var tmp_1 = ensureNotNull(this.k9p_1);
    return _this__u8e3s4.r63(tmp, tmp_0, tmp_1, TextAnnotatedStringNode$measure$lambda(placeable));
  };
  protoOf(TextAnnotatedStringNode).o9p = function (contentDrawScope) {
    return this.j5c(contentDrawScope);
  };
  protoOf(TextAnnotatedStringNode).j5c = function (_this__u8e3s4) {
    if (!this.x5a_1) {
      return Unit_instance;
    }
    var tmp0_safe_receiver = this.h9p_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.e9q(_this__u8e3s4);
    }
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = _this__u8e3s4.x4d().j3t();
    var layoutCache = getLayoutCache(this, _this__u8e3s4);
    var textLayoutResult = layoutCache.d9m();
    var localParagraph = textLayoutResult.y4p_1;
    var willClip = textLayoutResult.f4q() && !(this.b9p_1 === Companion_getInstance_11().n4z_1);
    if (willClip) {
      var width = _IntSize___get_width__impl__d9yl4o(textLayoutResult.z4p_1);
      var height = _IntSize___get_height__impl__prv63b(textLayoutResult.z4p_1);
      var bounds = Rect(Companion_getInstance_6().d3g_1, Size(width, height));
      canvas.t42();
      canvas.b43(bounds);
    }
    try {
      var tmp0_elvis_lhs = this.y9o_1.q4r();
      var textDecoration = tmp0_elvis_lhs == null ? Companion_getInstance_13().u4p_1 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = this.y9o_1.r4r();
      var shadow = tmp1_elvis_lhs == null ? Companion_getInstance_14().v48_1 : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = this.y9o_1.s4r();
      var drawStyle = tmp2_elvis_lhs == null ? Fill_getInstance() : tmp2_elvis_lhs;
      var brush = this.y9o_1.b4o();
      if (!(brush == null)) {
        var alpha = this.y9o_1.z3z();
        localParagraph.f4k(canvas, brush, alpha, shadow, textDecoration, drawStyle);
      } else {
        var tmp3_safe_receiver = this.i9p_1;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.l46();
        var tmp;
        var tmp_0 = tmp4_elvis_lhs;
        if ((tmp_0 == null ? null : new Color(tmp_0)) == null) {
          tmp = Companion_getInstance().j45_1;
        } else {
          tmp = tmp4_elvis_lhs;
        }
        var overrideColorVal = tmp;
        var tmp_1;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(overrideColorVal), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
          tmp_1 = overrideColorVal;
        } else {
          // Inline function 'androidx.compose.ui.graphics.isSpecified' call
          var this_0 = this.y9o_1.x4c();
          if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
            tmp_1 = this.y9o_1.x4c();
          } else {
            tmp_1 = Companion_getInstance().x44_1;
          }
        }
        var color = tmp_1;
        localParagraph.d4k(canvas, color, shadow, textDecoration, drawStyle);
      }
    }finally {
      if (willClip) {
        canvas.u42();
      }
    }
    var tmp_2;
    var tmp5_safe_receiver = this.n9p_1;
    if ((tmp5_safe_receiver == null ? null : tmp5_safe_receiver.f9s_1) === true) {
      tmp_2 = false;
    } else {
      tmp_2 = hasLinks(this.x9o_1);
    }
    var hasLinks_0 = tmp_2;
    var tmp_3;
    var tmp_4;
    if (hasLinks_0) {
      tmp_4 = true;
    } else {
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      var this_1 = this.f9p_1;
      tmp_4 = !(this_1 == null || this_1.q());
    }
    if (tmp_4) {
      _this__u8e3s4.u5f();
      tmp_3 = Unit_instance;
    }
  };
  function hasLinks(_this__u8e3s4) {
    return _this__u8e3s4.d4i(0, _this__u8e3s4.a());
  }
  function TextStringSimpleElement(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, color) {
    overflow = overflow === VOID ? Companion_getInstance_11().l4z_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    minLines = minLines === VOID ? 1 : minLines;
    color = color === VOID ? null : color;
    ModifierNodeElement.call(this);
    this.j9s_1 = text;
    this.k9s_1 = style;
    this.l9s_1 = fontFamilyResolver;
    this.m9s_1 = overflow;
    this.n9s_1 = softWrap;
    this.o9s_1 = maxLines;
    this.p9s_1 = minLines;
    this.q9s_1 = color;
  }
  protoOf(TextStringSimpleElement).f2e = function () {
    return new TextStringSimpleNode(this.j9s_1, this.k9s_1, this.l9s_1, this.m9s_1, this.n9s_1, this.o9s_1, this.p9s_1, this.q9s_1);
  };
  protoOf(TextStringSimpleElement).r9s = function (node) {
    node.t9t(node.q9p(this.q9s_1, this.k9s_1), node.r9t(this.j9s_1), node.s9t(this.k9s_1, this.p9s_1, this.o9s_1, this.n9s_1, this.l9s_1, this.m9s_1));
  };
  protoOf(TextStringSimpleElement).t5f = function (node) {
    return this.r9s(node instanceof TextStringSimpleNode ? node : THROW_CCE());
  };
  protoOf(TextStringSimpleElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStringSimpleElement))
      return false;
    if (!equals(this.q9s_1, other.q9s_1))
      return false;
    if (!(this.j9s_1 === other.j9s_1))
      return false;
    if (!this.k9s_1.equals(other.k9s_1))
      return false;
    if (!equals(this.l9s_1, other.l9s_1))
      return false;
    if (!(this.m9s_1 === other.m9s_1))
      return false;
    if (!(this.n9s_1 === other.n9s_1))
      return false;
    if (!(this.o9s_1 === other.o9s_1))
      return false;
    if (!(this.p9s_1 === other.p9s_1))
      return false;
    return true;
  };
  protoOf(TextStringSimpleElement).hashCode = function () {
    var result = getStringHashCode(this.j9s_1);
    result = imul(31, result) + this.k9s_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.l9s_1) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.m9s_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.n9s_1) | 0;
    result = imul(31, result) + this.o9s_1 | 0;
    result = imul(31, result) + this.p9s_1 | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.q9s_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function _get_layoutCache__kch9ev_0($this) {
    if ($this.o9t_1 == null) {
      $this.o9t_1 = new ParagraphLayoutCache($this.f9t_1, $this.g9t_1, $this.h9t_1, $this.i9t_1, $this.j9t_1, $this.k9t_1, $this.l9t_1);
    }
    return ensureNotNull($this.o9t_1);
  }
  function getLayoutCache_0($this, density) {
    var tmp0_safe_receiver = $this.q9t_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.text.modifiers.TextStringSimpleNode.getLayoutCache.<anonymous>' call
      if (tmp0_safe_receiver.w9t_1) {
        var tmp0_safe_receiver_0 = tmp0_safe_receiver.x9t_1;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.also' call
          // Inline function 'androidx.compose.foundation.text.modifiers.TextStringSimpleNode.getLayoutCache.<anonymous>.<anonymous>.<anonymous>' call
          tmp0_safe_receiver_0.c9m(density);
          return tmp0_safe_receiver_0;
        }
      }
    }
    // Inline function 'kotlin.also' call
    var this_0 = _get_layoutCache__kch9ev_0($this);
    // Inline function 'androidx.compose.foundation.text.modifiers.TextStringSimpleNode.getLayoutCache.<anonymous>' call
    this_0.c9m(density);
    return this_0;
  }
  function TextSubstitutionValue_0(original, substitution, isShowingSubstitution, layoutCache) {
    isShowingSubstitution = isShowingSubstitution === VOID ? false : isShowingSubstitution;
    layoutCache = layoutCache === VOID ? null : layoutCache;
    this.u9t_1 = original;
    this.v9t_1 = substitution;
    this.w9t_1 = isShowingSubstitution;
    this.x9t_1 = layoutCache;
  }
  protoOf(TextSubstitutionValue_0).toString = function () {
    return 'TextSubstitution(' + ('layoutCache=' + toString_0(this.x9t_1) + ', isShowingSubstitution=' + this.w9t_1) + ')';
  };
  protoOf(TextSubstitutionValue_0).hashCode = function () {
    var result = getStringHashCode(this.u9t_1);
    result = imul(result, 31) + getStringHashCode(this.v9t_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.w9t_1) | 0;
    result = imul(result, 31) + (this.x9t_1 == null ? 0 : hashCode(this.x9t_1)) | 0;
    return result;
  };
  protoOf(TextSubstitutionValue_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextSubstitutionValue_0))
      return false;
    var tmp0_other_with_cast = other instanceof TextSubstitutionValue_0 ? other : THROW_CCE();
    if (!(this.u9t_1 === tmp0_other_with_cast.u9t_1))
      return false;
    if (!(this.v9t_1 === tmp0_other_with_cast.v9t_1))
      return false;
    if (!(this.w9t_1 === tmp0_other_with_cast.w9t_1))
      return false;
    if (!equals(this.x9t_1, tmp0_other_with_cast.x9t_1))
      return false;
    return true;
  };
  function setSubstitution_0($this, updatedText) {
    var currentTextSubstitution = $this.q9t_1;
    if (!(currentTextSubstitution == null)) {
      if (updatedText === currentTextSubstitution.v9t_1) {
        return false;
      }
      currentTextSubstitution.v9t_1 = updatedText;
      var tmp0_safe_receiver = currentTextSubstitution.x9t_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp0_safe_receiver.a9n(updatedText, $this.g9t_1, $this.h9t_1, $this.i9t_1, $this.j9t_1, $this.k9t_1, $this.l9t_1);
        tmp = Unit_instance;
      }
      if (tmp == null)
        return false;
    } else {
      var newTextSubstitution = new TextSubstitutionValue_0($this.f9t_1, updatedText);
      var substitutionLayoutCache = new ParagraphLayoutCache(updatedText, $this.g9t_1, $this.h9t_1, $this.i9t_1, $this.j9t_1, $this.k9t_1, $this.l9t_1);
      substitutionLayoutCache.c9m(_get_layoutCache__kch9ev_0($this).p9m_1);
      newTextSubstitution.x9t_1 = substitutionLayoutCache;
      $this.q9t_1 = newTextSubstitution;
    }
    return true;
  }
  function clearSubstitution($this) {
    $this.q9t_1 = null;
  }
  function invalidateForTranslate_0($this) {
    invalidateSemantics($this);
    invalidateMeasurement($this);
    invalidateDraw($this);
  }
  function TextStringSimpleNode$applySemantics$lambda(this$0) {
    return function (textLayoutResult) {
      var tmp = _get_layoutCache__kch9ev_0(this$0);
      var tmp_0 = this$0.g9t_1;
      var tmp0_safe_receiver = this$0.m9t_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l46();
      var tmp_1;
      var tmp_2 = tmp1_elvis_lhs;
      if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
        tmp_1 = Companion_getInstance().j45_1;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var tmp2_safe_receiver = tmp.b9n(tmp_0.a4r(tmp_1));
      var tmp_3;
      if (tmp2_safe_receiver == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.also' call
        // Inline function 'androidx.compose.foundation.text.modifiers.TextStringSimpleNode.applySemantics.<anonymous>.<anonymous>' call
        textLayoutResult.e(tmp2_safe_receiver);
        tmp_3 = tmp2_safe_receiver;
      }
      var layout = tmp_3;
      return !(layout == null);
    };
  }
  function TextStringSimpleNode$applySemantics$lambda_0(this$0) {
    return function (updatedText) {
      setSubstitution_0(this$0, updatedText.x4h_1);
      invalidateForTranslate_0(this$0);
      return true;
    };
  }
  function TextStringSimpleNode$applySemantics$lambda_1(this$0) {
    return function (it) {
      var tmp;
      if (this$0.q9t_1 == null) {
        return false;
      }
      var tmp0_safe_receiver = this$0.q9t_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = Unit_instance;
      } else {
        tmp0_safe_receiver.w9t_1 = it;
        tmp_0 = Unit_instance;
      }
      invalidateForTranslate_0(this$0);
      return true;
    };
  }
  function TextStringSimpleNode$applySemantics$lambda_2(this$0) {
    return function () {
      clearSubstitution(this$0);
      invalidateForTranslate_0(this$0);
      return true;
    };
  }
  function TextStringSimpleNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.u67($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function TextStringSimpleNode(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, overrideColor) {
    overflow = overflow === VOID ? Companion_getInstance_11().l4z_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    minLines = minLines === VOID ? 1 : minLines;
    overrideColor = overrideColor === VOID ? null : overrideColor;
    Node.call(this);
    this.f9t_1 = text;
    this.g9t_1 = style;
    this.h9t_1 = fontFamilyResolver;
    this.i9t_1 = overflow;
    this.j9t_1 = softWrap;
    this.k9t_1 = maxLines;
    this.l9t_1 = minLines;
    this.m9t_1 = overrideColor;
    this.n9t_1 = null;
    this.o9t_1 = null;
    this.p9t_1 = null;
    this.q9t_1 = null;
  }
  protoOf(TextStringSimpleNode).q9p = function (color, style) {
    var changed = false;
    if (!equals(color, this.m9t_1)) {
      changed = true;
    }
    this.m9t_1 = color;
    changed = changed || !style.c4s(this.g9t_1);
    return changed;
  };
  protoOf(TextStringSimpleNode).r9t = function (text) {
    if (this.f9t_1 === text)
      return false;
    this.f9t_1 = text;
    clearSubstitution(this);
    return true;
  };
  protoOf(TextStringSimpleNode).s9t = function (style, minLines, maxLines, softWrap, fontFamilyResolver, overflow) {
    var changed;
    changed = !this.g9t_1.b4s(style);
    this.g9t_1 = style;
    if (!(this.l9t_1 === minLines)) {
      this.l9t_1 = minLines;
      changed = true;
    }
    if (!(this.k9t_1 === maxLines)) {
      this.k9t_1 = maxLines;
      changed = true;
    }
    if (!(this.j9t_1 === softWrap)) {
      this.j9t_1 = softWrap;
      changed = true;
    }
    if (!equals(this.h9t_1, fontFamilyResolver)) {
      this.h9t_1 = fontFamilyResolver;
      changed = true;
    }
    if (!(this.i9t_1 === overflow)) {
      this.i9t_1 = overflow;
      changed = true;
    }
    return changed;
  };
  protoOf(TextStringSimpleNode).t9t = function (drawChanged, textChanged, layoutChanged) {
    if (textChanged || layoutChanged) {
      _get_layoutCache__kch9ev_0(this).a9n(this.f9t_1, this.g9t_1, this.h9t_1, this.i9t_1, this.j9t_1, this.k9t_1, this.l9t_1);
    }
    if (!this.x5a_1) {
      return Unit_instance;
    }
    if (textChanged || (drawChanged && !(this.p9t_1 == null))) {
      invalidateSemantics(this);
    }
    if (textChanged || layoutChanged) {
      invalidateMeasurement(this);
      invalidateDraw(this);
    }
    if (drawChanged) {
      invalidateDraw(this);
    }
  };
  protoOf(TextStringSimpleNode).n6e = function (_this__u8e3s4) {
    var localSemanticsTextLayoutResult = this.p9t_1;
    if (localSemanticsTextLayoutResult == null) {
      localSemanticsTextLayoutResult = TextStringSimpleNode$applySemantics$lambda(this);
      this.p9t_1 = localSemanticsTextLayoutResult;
    }
    set_text(_this__u8e3s4, AnnotatedString_init_$Create$(this.f9t_1));
    var currentTextSubstitution = this.q9t_1;
    if (!(currentTextSubstitution == null)) {
      set_isShowingTextSubstitution(_this__u8e3s4, currentTextSubstitution.w9t_1);
      set_textSubstitution(_this__u8e3s4, AnnotatedString_init_$Create$(currentTextSubstitution.v9t_1));
    }
    setTextSubstitution(_this__u8e3s4, VOID, TextStringSimpleNode$applySemantics$lambda_0(this));
    showTextSubstitution(_this__u8e3s4, VOID, TextStringSimpleNode$applySemantics$lambda_1(this));
    clearTextSubstitution(_this__u8e3s4, VOID, TextStringSimpleNode$applySemantics$lambda_2(this));
    getTextLayoutResult(_this__u8e3s4, VOID, localSemanticsTextLayoutResult);
  };
  protoOf(TextStringSimpleNode).u5o = function (_this__u8e3s4, measurable, constraints) {
    var layoutCache = getLayoutCache_0(this, _this__u8e3s4);
    var didChangeLayout = layoutCache.f9m(constraints, _this__u8e3s4.t4d());
    layoutCache.z9m();
    var paragraph = ensureNotNull(layoutCache.q9m_1);
    var layoutSize = layoutCache.s9m_1;
    if (didChangeLayout) {
      invalidateLayer(this);
      var cache = this.n9t_1;
      if (cache == null) {
        cache = LinkedHashMap_init_$Create$_0(2);
      }
      var tmp1 = cache;
      var tmp2 = get_FirstBaseline();
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = paragraph.z4j();
      // Inline function 'kotlin.collections.set' call
      var value = roundToInt(this_0);
      tmp1.o2(tmp2, value);
      var tmp5 = cache;
      var tmp6 = get_LastBaseline();
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = paragraph.a4k();
      // Inline function 'kotlin.collections.set' call
      var value_0 = roundToInt(this_1);
      tmp5.o2(tmp6, value_0);
      this.n9t_1 = cache;
    }
    var placeable = measurable.v5o(Companion_instance_1.i3h(_IntSize___get_width__impl__d9yl4o(layoutSize), _IntSize___get_width__impl__d9yl4o(layoutSize), _IntSize___get_height__impl__prv63b(layoutSize), _IntSize___get_height__impl__prv63b(layoutSize)));
    var tmp = _IntSize___get_width__impl__d9yl4o(layoutSize);
    var tmp_0 = _IntSize___get_height__impl__prv63b(layoutSize);
    var tmp_1 = ensureNotNull(this.n9t_1);
    return _this__u8e3s4.r63(tmp, tmp_0, tmp_1, TextStringSimpleNode$measure$lambda(placeable));
  };
  protoOf(TextStringSimpleNode).j5c = function (_this__u8e3s4) {
    if (!this.x5a_1) {
      return Unit_instance;
    }
    var layoutCache = getLayoutCache_0(this, _this__u8e3s4);
    var tmp0 = layoutCache.q9m_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.compose.foundation.text.modifiers.TextStringSimpleNode.draw.<anonymous>' call
        var message = 'no paragraph (layoutCache=' + toString_0(this.o9t_1) + ', textSubstitution=' + toString_0(this.q9t_1) + ')';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var localParagraph = tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = _this__u8e3s4.x4d().j3t();
    var willClip = layoutCache.r9m_1;
    if (willClip) {
      var width = _IntSize___get_width__impl__d9yl4o(layoutCache.s9m_1);
      var height = _IntSize___get_height__impl__prv63b(layoutCache.s9m_1);
      canvas.t42();
      canvas.e43(0.0, 0.0, width, height);
    }
    var tmp;
    try {
      var tmp0_elvis_lhs = this.g9t_1.q4r();
      var textDecoration = tmp0_elvis_lhs == null ? Companion_getInstance_13().u4p_1 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = this.g9t_1.r4r();
      var shadow = tmp1_elvis_lhs == null ? Companion_getInstance_14().v48_1 : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = this.g9t_1.s4r();
      var drawStyle = tmp2_elvis_lhs == null ? Fill_getInstance() : tmp2_elvis_lhs;
      var brush = this.g9t_1.b4o();
      var tmp_0;
      if (!(brush == null)) {
        var alpha = this.g9t_1.z3z();
        localParagraph.h51(canvas, brush, alpha, shadow, textDecoration, drawStyle);
        tmp_0 = Unit_instance;
      } else {
        var tmp3_safe_receiver = this.m9t_1;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.l46();
        var tmp_1;
        var tmp_2 = tmp4_elvis_lhs;
        if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
          tmp_1 = Companion_getInstance().j45_1;
        } else {
          tmp_1 = tmp4_elvis_lhs;
        }
        var overrideColorVal = tmp_1;
        var tmp_3;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(overrideColorVal), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
          tmp_3 = overrideColorVal;
        } else {
          // Inline function 'androidx.compose.ui.graphics.isSpecified' call
          var this_0 = this.g9t_1.x4c();
          if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
            tmp_3 = this.g9t_1.x4c();
          } else {
            tmp_3 = Companion_getInstance().x44_1;
          }
        }
        var color = tmp_3;
        localParagraph.g51(canvas, color, shadow, textDecoration, drawStyle);
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }finally {
      if (willClip) {
        canvas.u42();
      }
    }
  };
  function _get_lastVisibleOffset__v7xite(_this__u8e3s4, $this) {
    if (!($this.b9u_1 === _this__u8e3s4)) {
      var tmp;
      if (!_this__u8e3s4.d4q() || _this__u8e3s4.y4p_1.c4j_1) {
        tmp = _this__u8e3s4.v4j() - 1 | 0;
      } else {
        var finalVisibleLine = coerceAtMost(_this__u8e3s4.g4k(_IntSize___get_height__impl__prv63b(_this__u8e3s4.z4p_1)), _this__u8e3s4.v4j() - 1 | 0);
        while (finalVisibleLine >= 0 && _this__u8e3s4.p4k(finalVisibleLine) >= _IntSize___get_height__impl__prv63b(_this__u8e3s4.z4p_1)) {
          finalVisibleLine = finalVisibleLine - 1 | 0;
        }
        tmp = coerceAtLeast(finalVisibleLine, 0);
      }
      var lastVisibleLine = tmp;
      $this.c9u_1 = _this__u8e3s4.t4k(lastVisibleLine, true);
      $this.b9u_1 = _this__u8e3s4;
    }
    return $this.c9u_1;
  }
  function MultiWidgetSelectionDelegate(selectableId, coordinatesCallback, layoutResultCallback) {
    this.y9t_1 = selectableId;
    this.z9t_1 = coordinatesCallback;
    this.a9u_1 = layoutResultCallback;
    this.b9u_1 = null;
    this.c9u_1 = -1;
  }
  protoOf(MultiWidgetSelectionDelegate).m9q = function () {
    var tmp0_elvis_lhs = this.a9u_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    return _get_lastVisibleOffset__v7xite(textLayoutResult, this);
  };
  function AnchorInfo(direction, offset, selectableId) {
    this.g9q_1 = direction;
    this.h9q_1 = offset;
    this.i9q_1 = selectableId;
  }
  protoOf(AnchorInfo).d9u = function (direction, offset, selectableId) {
    return new AnchorInfo(direction, offset, selectableId);
  };
  protoOf(AnchorInfo).e9u = function (direction, offset, selectableId, $super) {
    direction = direction === VOID ? this.g9q_1 : direction;
    offset = offset === VOID ? this.h9q_1 : offset;
    selectableId = selectableId === VOID ? this.i9q_1 : selectableId;
    return $super === VOID ? this.d9u(direction, offset, selectableId) : $super.d9u.call(this, direction, offset, selectableId);
  };
  protoOf(AnchorInfo).toString = function () {
    return 'AnchorInfo(direction=' + this.g9q_1.toString() + ', offset=' + this.h9q_1 + ', selectableId=' + this.i9q_1.toString() + ')';
  };
  protoOf(AnchorInfo).hashCode = function () {
    var result = this.g9q_1.hashCode();
    result = imul(result, 31) + this.h9q_1 | 0;
    result = imul(result, 31) + this.i9q_1.hashCode() | 0;
    return result;
  };
  protoOf(AnchorInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnchorInfo))
      return false;
    var tmp0_other_with_cast = other instanceof AnchorInfo ? other : THROW_CCE();
    if (!this.g9q_1.equals(tmp0_other_with_cast.g9q_1))
      return false;
    if (!(this.h9q_1 === tmp0_other_with_cast.h9q_1))
      return false;
    if (!this.i9q_1.equals(tmp0_other_with_cast.i9q_1))
      return false;
    return true;
  };
  function Selection(start, end, handlesCrossed) {
    handlesCrossed = handlesCrossed === VOID ? false : handlesCrossed;
    this.j9q_1 = start;
    this.k9q_1 = end;
    this.l9q_1 = handlesCrossed;
  }
  protoOf(Selection).f9u = function (start, end, handlesCrossed) {
    return new Selection(start, end, handlesCrossed);
  };
  protoOf(Selection).g9u = function (start, end, handlesCrossed, $super) {
    start = start === VOID ? this.j9q_1 : start;
    end = end === VOID ? this.k9q_1 : end;
    handlesCrossed = handlesCrossed === VOID ? this.l9q_1 : handlesCrossed;
    return $super === VOID ? this.f9u(start, end, handlesCrossed) : $super.f9u.call(this, start, end, handlesCrossed);
  };
  protoOf(Selection).toString = function () {
    return 'Selection(start=' + this.j9q_1.toString() + ', end=' + this.k9q_1.toString() + ', handlesCrossed=' + this.l9q_1 + ')';
  };
  protoOf(Selection).hashCode = function () {
    var result = this.j9q_1.hashCode();
    result = imul(result, 31) + this.k9q_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.l9q_1) | 0;
    return result;
  };
  protoOf(Selection).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Selection))
      return false;
    var tmp0_other_with_cast = other instanceof Selection ? other : THROW_CCE();
    if (!this.j9q_1.equals(tmp0_other_with_cast.j9q_1))
      return false;
    if (!this.k9q_1.equals(tmp0_other_with_cast.k9q_1))
      return false;
    if (!(this.l9q_1 === tmp0_other_with_cast.l9q_1))
      return false;
    return true;
  };
  function sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0(function_0) {
    this.h9u_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0).i9u = function (layout) {
    return this.h9u_1(layout);
  };
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0).q3 = function () {
    return this.h9u_1;
  };
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SelectionAdjustment) : false) {
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
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0(function_0) {
    this.j9u_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0).i9u = function (layout) {
    return this.j9u_1(layout);
  };
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0).q3 = function () {
    return this.j9u_1;
  };
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SelectionAdjustment) : false) {
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
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0).hashCode = function () {
    return hashCode(this.q3());
  };
  function sam$androidx_compose_foundation_text_selection_BoundaryFunction$0(function_0) {
    this.k9u_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0).l9u = function (_this__u8e3s4, offset) {
    return this.k9u_1(_this__u8e3s4, offset).n4k_1;
  };
  protoOf(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0).q3 = function () {
    return this.k9u_1;
  };
  protoOf(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, BoundaryFunction) : false) {
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
  protoOf(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1(function_0) {
    this.m9u_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1).i9u = function (layout) {
    return this.m9u_1(layout);
  };
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1).q3 = function () {
    return this.m9u_1;
  };
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SelectionAdjustment) : false) {
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
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1).hashCode = function () {
    return hashCode(this.q3());
  };
  function sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0(function_0) {
    this.n9u_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0).l9u = function (_this__u8e3s4, offset) {
    return this.n9u_1(_this__u8e3s4, offset).n4k_1;
  };
  protoOf(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0).q3 = function () {
    return this.n9u_1;
  };
  protoOf(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, BoundaryFunction) : false) {
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
  protoOf(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0).hashCode = function () {
    return hashCode(this.q3());
  };
  function sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2(function_0) {
    this.o9u_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2).i9u = function (layout) {
    return this.o9u_1(layout);
  };
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2).q3 = function () {
    return this.o9u_1;
  };
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SelectionAdjustment) : false) {
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
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2).hashCode = function () {
    return hashCode(this.q3());
  };
  function sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3(function_0) {
    this.p9u_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3).i9u = function (layout) {
    return this.p9u_1(layout);
  };
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3).q3 = function () {
    return this.p9u_1;
  };
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SelectionAdjustment) : false) {
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
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3).hashCode = function () {
    return hashCode(this.q3());
  };
  function SelectionAdjustment$Companion$None$lambda(layout) {
    return new Selection(layout.q9u().x9u(layout.q9u().t9u_1), layout.y9u().x9u(layout.y9u().u9u_1), layout.z9u().equals(CrossStatus_CROSSED_getInstance()));
  }
  function SelectionAdjustment$Companion$Character$lambda(layout) {
    return ensureAtLeastOneChar(Companion_getInstance_23().v9q_1.i9u(layout), layout);
  }
  function SelectionAdjustment$Companion$Word$lambda(layout) {
    var tmp = SelectionAdjustment$Companion$Word$lambda$lambda;
    return adjustToBoundaries(layout, new sam$androidx_compose_foundation_text_selection_BoundaryFunction$0(tmp));
  }
  function SelectionAdjustment$Companion$Word$lambda$lambda($this$adjustToBoundaries, it) {
    return new TextRange_0($this$adjustToBoundaries.w9u_1.l4k(it));
  }
  function SelectionAdjustment$Companion$Paragraph$lambda(layout) {
    var tmp = SelectionAdjustment$Companion$Paragraph$lambda$lambda;
    return adjustToBoundaries(layout, new sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0(tmp));
  }
  function SelectionAdjustment$Companion$Paragraph$lambda$lambda($this$adjustToBoundaries, it) {
    return new TextRange_0(getParagraphBoundary($this$adjustToBoundaries.a9v(), it));
  }
  function SelectionAdjustment$Companion$CharacterWithWordAccelerate$lambda(layout) {
    var tmp0_elvis_lhs = layout.b9v();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_23().x9q_1.i9u(layout);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var previousSelection = tmp;
    var previousAnchor;
    var newAnchor;
    var startAnchor;
    var endAnchor;
    if (layout.c9v()) {
      previousAnchor = previousSelection.j9q_1;
      newAnchor = updateSelectionBoundary(layout, layout.q9u(), previousAnchor);
      startAnchor = newAnchor;
      endAnchor = previousSelection.k9q_1;
    } else {
      previousAnchor = previousSelection.k9q_1;
      newAnchor = updateSelectionBoundary(layout, layout.y9u(), previousAnchor);
      startAnchor = previousSelection.j9q_1;
      endAnchor = newAnchor;
    }
    var tmp_0;
    if (newAnchor.equals(previousAnchor)) {
      tmp_0 = previousSelection;
    } else {
      var crossed = layout.z9u().equals(CrossStatus_CROSSED_getInstance()) || (layout.z9u().equals(CrossStatus_COLLAPSED_getInstance()) && startAnchor.h9q_1 > endAnchor.h9q_1);
      tmp_0 = ensureAtLeastOneChar(new Selection(startAnchor, endAnchor, crossed), layout);
    }
    return tmp_0;
  }
  function Companion_2() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp_0 = SelectionAdjustment$Companion$None$lambda;
    tmp.v9q_1 = new sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0(tmp_0);
    var tmp_1 = this;
    var tmp_2 = SelectionAdjustment$Companion$Character$lambda;
    tmp_1.w9q_1 = new sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0(tmp_2);
    var tmp_3 = this;
    var tmp_4 = SelectionAdjustment$Companion$Word$lambda;
    tmp_3.x9q_1 = new sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1(tmp_4);
    var tmp_5 = this;
    var tmp_6 = SelectionAdjustment$Companion$Paragraph$lambda;
    tmp_5.y9q_1 = new sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2(tmp_6);
    var tmp_7 = this;
    var tmp_8 = SelectionAdjustment$Companion$CharacterWithWordAccelerate$lambda;
    tmp_7.z9q_1 = new sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3(tmp_8);
  }
  var Companion_instance_5;
  function Companion_getInstance_23() {
    if (Companion_instance_5 == null)
      new Companion_2();
    return Companion_instance_5;
  }
  function SelectionAdjustment() {
  }
  function ensureAtLeastOneChar(_this__u8e3s4, layout) {
    if (!isCollapsed(_this__u8e3s4, layout)) {
      return _this__u8e3s4;
    }
    var text = layout.d9v().a9v();
    var tmp;
    if (layout.n() > 1 || layout.b9v() == null) {
      tmp = true;
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      tmp = charSequenceLength(text) === 0;
    }
    if (tmp) {
      return _this__u8e3s4;
    }
    return expandOneChar(_this__u8e3s4, layout);
  }
  function adjustToBoundaries(layout, boundaryFunction) {
    var crossed = layout.z9u().equals(CrossStatus_CROSSED_getInstance());
    return new Selection(anchorOnBoundary(layout.q9u(), crossed, true, layout.e9v(), boundaryFunction), anchorOnBoundary(layout.y9u(), crossed, false, layout.f9v(), boundaryFunction), crossed);
  }
  function BoundaryFunction() {
  }
  function updateSelectionBoundary(_this__u8e3s4, info, previousSelectionAnchor) {
    var currentRawOffset = _this__u8e3s4.c9v() ? info.t9u_1 : info.u9u_1;
    var currentSlot = _this__u8e3s4.c9v() ? _this__u8e3s4.e9v() : _this__u8e3s4.f9v();
    if (!(currentSlot === info.s9u_1)) {
      return info.x9u(currentRawOffset);
    }
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var currentRawLine$delegate = lazy(tmp, updateSelectionBoundary$lambda_1(info, currentRawOffset));
    var otherRawOffset = _this__u8e3s4.c9v() ? info.u9u_1 : info.t9u_1;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    var anchorSnappedToWordBoundary$delegate = lazy(tmp_0, updateSelectionBoundary$lambda_2(info, currentRawOffset, otherRawOffset, _this__u8e3s4, currentRawLine$delegate));
    if (!info.r9u_1.equals(previousSelectionAnchor.i9q_1)) {
      return updateSelectionBoundary$lambda_0(anchorSnappedToWordBoundary$delegate);
    }
    var rawPreviousHandleOffset = info.v9u_1;
    if (currentRawOffset === rawPreviousHandleOffset) {
      return previousSelectionAnchor;
    }
    var previousRawLine = info.w9u_1.o4k(rawPreviousHandleOffset);
    if (!(updateSelectionBoundary$lambda(currentRawLine$delegate) === previousRawLine)) {
      return updateSelectionBoundary$lambda_0(anchorSnappedToWordBoundary$delegate);
    }
    var previousSelectionOffset = previousSelectionAnchor.h9q_1;
    var previousSelectionWordBoundary = info.w9u_1.l4k(previousSelectionOffset);
    if (!isExpanding(info, currentRawOffset, _this__u8e3s4.c9v())) {
      return info.x9u(currentRawOffset);
    }
    if (previousSelectionOffset === _TextRange___get_start__impl__ww4t90(previousSelectionWordBoundary) || previousSelectionOffset === _TextRange___get_end__impl__gcdxpp(previousSelectionWordBoundary)) {
      return updateSelectionBoundary$lambda_0(anchorSnappedToWordBoundary$delegate);
    }
    return info.x9u(currentRawOffset);
  }
  function expandOneChar(_this__u8e3s4, layout) {
    var info = layout.d9v();
    var text = info.a9v();
    var offset = info.t9u_1;
    var lastOffset = text.length;
    var tmp;
    if (offset === 0) {
      var followingBreak = findFollowingBreak(text, 0);
      var tmp_0;
      if (layout.c9v()) {
        tmp_0 = _this__u8e3s4.g9u(changeOffset(_this__u8e3s4.j9q_1, info, followingBreak), VOID, true);
      } else {
        tmp_0 = _this__u8e3s4.g9u(VOID, changeOffset(_this__u8e3s4.k9q_1, info, followingBreak), false);
      }
      tmp = tmp_0;
    } else if (offset === lastOffset) {
      var precedingBreak = findPrecedingBreak(text, lastOffset);
      var tmp_1;
      if (layout.c9v()) {
        tmp_1 = _this__u8e3s4.g9u(changeOffset(_this__u8e3s4.j9q_1, info, precedingBreak), VOID, false);
      } else {
        tmp_1 = _this__u8e3s4.g9u(VOID, changeOffset(_this__u8e3s4.k9q_1, info, precedingBreak), true);
      }
      tmp = tmp_1;
    } else {
      var tmp1_safe_receiver = layout.b9v();
      var crossed = (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.l9q_1) === true;
      var tmp_2;
      if (!!(layout.c9v() ^ crossed)) {
        tmp_2 = findPrecedingBreak(text, offset);
      } else {
        tmp_2 = findFollowingBreak(text, offset);
      }
      var newOffset = tmp_2;
      var tmp_3;
      if (layout.c9v()) {
        tmp_3 = _this__u8e3s4.g9u(changeOffset(_this__u8e3s4.j9q_1, info, newOffset), VOID, crossed);
      } else {
        tmp_3 = _this__u8e3s4.g9u(VOID, changeOffset(_this__u8e3s4.k9q_1, info, newOffset), crossed);
      }
      tmp = tmp_3;
    }
    return tmp;
  }
  function anchorOnBoundary(_this__u8e3s4, crossed, isStart, slot, boundaryFunction) {
    var offset = isStart ? _this__u8e3s4.t9u_1 : _this__u8e3s4.u9u_1;
    if (!(slot === _this__u8e3s4.s9u_1)) {
      return _this__u8e3s4.x9u(offset);
    }
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.text.selection.anchorOnBoundary.<anonymous>' call
    var range = boundaryFunction.l9u(_this__u8e3s4, offset);
    return _this__u8e3s4.x9u(!!(isStart ^ crossed) ? _TextRange___get_start__impl__ww4t90(range) : _TextRange___get_end__impl__gcdxpp(range));
  }
  function snapToWordBoundary(_this__u8e3s4, currentLine, currentOffset, otherOffset, isStart, crossed) {
    var wordBoundary = _this__u8e3s4.w9u_1.l4k(currentOffset);
    var wordStartLine = _this__u8e3s4.w9u_1.o4k(_TextRange___get_start__impl__ww4t90(wordBoundary));
    var tmp;
    if (wordStartLine === currentLine) {
      tmp = _TextRange___get_start__impl__ww4t90(wordBoundary);
    } else if (currentLine >= _this__u8e3s4.w9u_1.v4j()) {
      tmp = _this__u8e3s4.w9u_1.r4k(_this__u8e3s4.w9u_1.v4j() - 1 | 0);
    } else {
      tmp = _this__u8e3s4.w9u_1.r4k(currentLine);
    }
    var start = tmp;
    var wordEndLine = _this__u8e3s4.w9u_1.o4k(_TextRange___get_end__impl__gcdxpp(wordBoundary));
    var tmp_0;
    if (wordEndLine === currentLine) {
      tmp_0 = _TextRange___get_end__impl__gcdxpp(wordBoundary);
    } else if (currentLine >= _this__u8e3s4.w9u_1.v4j()) {
      tmp_0 = _this__u8e3s4.w9u_1.g4q(_this__u8e3s4.w9u_1.v4j() - 1 | 0);
    } else {
      tmp_0 = _this__u8e3s4.w9u_1.g4q(currentLine);
    }
    var end = tmp_0;
    if (start === otherOffset) {
      return _this__u8e3s4.x9u(end);
    }
    if (end === otherOffset) {
      return _this__u8e3s4.x9u(start);
    }
    var tmp_1;
    if (!!(isStart ^ crossed)) {
      tmp_1 = currentOffset <= end ? start : end;
    } else {
      tmp_1 = currentOffset >= start ? end : start;
    }
    var resultOffset = tmp_1;
    return _this__u8e3s4.x9u(resultOffset);
  }
  function isExpanding(_this__u8e3s4, currentRawOffset, isStart) {
    if (_this__u8e3s4.v9u_1 === -1) {
      return true;
    }
    if (currentRawOffset === _this__u8e3s4.v9u_1) {
      return false;
    }
    var crossed = _this__u8e3s4.g9v().equals(CrossStatus_CROSSED_getInstance());
    var tmp;
    if (!!(isStart ^ crossed)) {
      tmp = currentRawOffset < _this__u8e3s4.v9u_1;
    } else {
      tmp = currentRawOffset > _this__u8e3s4.v9u_1;
    }
    return tmp;
  }
  function changeOffset(_this__u8e3s4, info, newOffset) {
    var tmp0_direction = info.w9u_1.k4k(newOffset);
    return _this__u8e3s4.e9u(tmp0_direction, newOffset);
  }
  function updateSelectionBoundary$lambda($currentRawLine$delegate) {
    // Inline function 'kotlin.getValue' call
    getLocalDelegateReference('currentRawLine', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentRawLine$delegate.v();
  }
  function updateSelectionBoundary$lambda_0($anchorSnappedToWordBoundary$delegate) {
    // Inline function 'kotlin.getValue' call
    getLocalDelegateReference('anchorSnappedToWordBoundary', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $anchorSnappedToWordBoundary$delegate.v();
  }
  function updateSelectionBoundary$lambda_1($info, $currentRawOffset) {
    return function () {
      return $info.w9u_1.o4k($currentRawOffset);
    };
  }
  function updateSelectionBoundary$lambda_2($info, $currentRawOffset, $otherRawOffset, $this_updateSelectionBoundary, $currentRawLine$delegate) {
    return function () {
      return snapToWordBoundary($info, updateSelectionBoundary$lambda($currentRawLine$delegate), $currentRawOffset, $otherRawOffset, $this_updateSelectionBoundary.c9v(), $this_updateSelectionBoundary.z9u().equals(CrossStatus_CROSSED_getInstance()));
    };
  }
  function selectionGestureInput(_this__u8e3s4, mouseSelectionObserver, textDragObserver) {
    return composed(_this__u8e3s4, VOID, selectionGestureInput$lambda(mouseSelectionObserver, textDragObserver));
  }
  function ClicksCounter(viewConfiguration) {
    this.h9v_1 = viewConfiguration;
    this.i9v_1 = 0;
    this.j9v_1 = null;
  }
  protoOf(ClicksCounter).k9v = function (event) {
    var currentPrevEvent = this.j9v_1;
    if (!(currentPrevEvent == null) && this.l9v(currentPrevEvent, event) && this.m9v(currentPrevEvent, event)) {
      this.i9v_1 = this.i9v_1 + 1 | 0;
    } else {
      this.i9v_1 = 1;
    }
    this.j9v_1 = event;
  };
  protoOf(ClicksCounter).l9v = function (prevClick, newClick) {
    return newClick.r5u_1.z2(prevClick.r5u_1).a1(this.h9v_1.b6n()) < 0;
  };
  protoOf(ClicksCounter).m9v = function (prevClick, newClick) {
    return distanceIsTolerable(this.h9v_1, prevClick, newClick);
  };
  function awaitDown(_this__u8e3s4, $completion) {
    var tmp = new $awaitDownCOROUTINE$34(_this__u8e3s4, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function get_isPrecisePointer(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.k5u_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAll' call
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
          // Inline function 'androidx.compose.ui.util.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.foundation.text.selection.<get-isPrecisePointer>.<anonymous>' call
          if (!(item.y5u_1 === Companion_getInstance_9().i5w_1)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function mouseSelection(_this__u8e3s4, observer, clicksCounter, down, $completion) {
    var tmp = new $mouseSelectionCOROUTINE$35(_this__u8e3s4, observer, clicksCounter, down, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function touchSelection(_this__u8e3s4, observer, down, $completion) {
    var tmp = new $touchSelectionCOROUTINE$36(_this__u8e3s4, observer, down, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function distanceIsTolerable(viewConfiguration, change1, change2) {
    var slop = pointerSlop(viewConfiguration, change1.y5u_1);
    return Offset__getDistance_impl_pclvxn(Offset__minus_impl_hoj2c0(change1.s5u_1, change2.s5u_1)) < slop;
  }
  function invoke$lambda($currentMouseSelectionObserver$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentMouseSelectionObserver', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentMouseSelectionObserver$delegate.v();
  }
  function invoke$lambda_0($currentTextDragObserver$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentTextDragObserver', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentTextDragObserver$delegate.v();
  }
  function selectionGestureInput$lambda$slambda$slambda($clicksCounter, $currentMouseSelectionObserver$delegate, $currentTextDragObserver$delegate, resultContinuation) {
    this.j9x_1 = $clicksCounter;
    this.k9x_1 = $currentMouseSelectionObserver$delegate;
    this.l9x_1 = $currentTextDragObserver$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(selectionGestureInput$lambda$slambda$slambda).b9e = function ($this$awaitEachGesture, $completion) {
    var tmp = this.c9e($this$awaitEachGesture, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(selectionGestureInput$lambda$slambda$slambda).ba = function (p1, $completion) {
    return this.b9e((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(selectionGestureInput$lambda$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 5;
            this.h9_1 = 1;
            suspendResult = awaitDown(this.m9x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n9x_1 = suspendResult;
            var tmp_0;
            if (get_isPrecisePointer(this.n9x_1) && get_isPrimaryPressed(this.n9x_1.l5u_1)) {
              var tmp0 = this.n9x_1.k5u_1;
              var tmp$ret$0;
              l$ret$1: do {
                var inductionVariable = 0;
                var last = tmp0.n() - 1 | 0;
                if (inductionVariable <= last)
                  do {
                    var index = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    var item = tmp0.p(index);
                    if (!!item.l5w()) {
                      tmp$ret$0 = false;
                      break l$ret$1;
                    }
                  }
                   while (inductionVariable <= last);
                tmp$ret$0 = true;
              }
               while (false);
              tmp_0 = tmp$ret$0;
            } else {
              tmp_0 = false;
            }

            if (tmp_0) {
              this.h9_1 = 3;
              suspendResult = mouseSelection(this.m9x_1, invoke$lambda(this.k9x_1), this.j9x_1, this.n9x_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (!get_isPrecisePointer(this.n9x_1)) {
                this.h9_1 = 2;
                suspendResult = touchSelection(this.m9x_1, invoke$lambda_0(this.l9x_1), this.n9x_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.h9_1 = 4;
                continue $sm;
              }
            }

          case 2:
            this.h9_1 = 4;
            continue $sm;
          case 3:
            this.h9_1 = 4;
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
  protoOf(selectionGestureInput$lambda$slambda$slambda).c9e = function ($this$awaitEachGesture, completion) {
    var i = new selectionGestureInput$lambda$slambda$slambda(this.j9x_1, this.k9x_1, this.l9x_1, completion);
    i.m9x_1 = $this$awaitEachGesture;
    return i;
  };
  function selectionGestureInput$lambda$slambda$slambda_0($clicksCounter, $currentMouseSelectionObserver$delegate, $currentTextDragObserver$delegate, resultContinuation) {
    var i = new selectionGestureInput$lambda$slambda$slambda($clicksCounter, $currentMouseSelectionObserver$delegate, $currentTextDragObserver$delegate, resultContinuation);
    var l = function ($this$awaitEachGesture, $completion) {
      return i.b9e($this$awaitEachGesture, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function selectionGestureInput$lambda$slambda($currentMouseSelectionObserver$delegate, $currentTextDragObserver$delegate, resultContinuation) {
    this.w9x_1 = $currentMouseSelectionObserver$delegate;
    this.x9x_1 = $currentTextDragObserver$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(selectionGestureInput$lambda$slambda).s91 = function ($this$pointerInput, $completion) {
    var tmp = this.t91($this$pointerInput, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(selectionGestureInput$lambda$slambda).ba = function (p1, $completion) {
    return this.s91((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(selectionGestureInput$lambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.z9x_1 = new ClicksCounter(this.y9x_1.e5z());
            this.h9_1 = 1;
            suspendResult = awaitEachGesture(this.y9x_1, selectionGestureInput$lambda$slambda$slambda_0(this.z9x_1, this.w9x_1, this.x9x_1, null), this);
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
  protoOf(selectionGestureInput$lambda$slambda).t91 = function ($this$pointerInput, completion) {
    var i = new selectionGestureInput$lambda$slambda(this.w9x_1, this.x9x_1, completion);
    i.y9x_1 = $this$pointerInput;
    return i;
  };
  function selectionGestureInput$lambda$slambda_0($currentMouseSelectionObserver$delegate, $currentTextDragObserver$delegate, resultContinuation) {
    var i = new selectionGestureInput$lambda$slambda($currentMouseSelectionObserver$delegate, $currentTextDragObserver$delegate, resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.s91($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function selectionGestureInput$lambda($mouseSelectionObserver, $textDragObserver) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.j25(849554210);
      sourceInformation($composer_0, 'C108@4402L44,109@4482L38,110@4549L527:SelectionGestures.kt#eksfi3');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(849554210, $changed, -1, 'androidx.compose.foundation.text.selection.selectionGestureInput.<anonymous> (SelectionGestures.kt:108)');
        tmp = Unit_instance;
      }
      var currentMouseSelectionObserver$delegate = rememberUpdatedState($mouseSelectionObserver, $composer_0, 0);
      var currentTextDragObserver$delegate = rememberUpdatedState($textDragObserver, $composer_0, 0);
      sourceInformationMarkerStart($composer_0, 1614874290, 'CC(remember):SelectionGestures.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.m1w(currentMouseSelectionObserver$delegate) | $composer_0.m1w(currentTextDragObserver$delegate));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.d27();
      var tmp_0;
      if (invalid || it === Companion_getInstance_8().w1z_1) {
        // Inline function 'androidx.compose.foundation.text.selection.selectionGestureInput.<anonymous>.<anonymous>' call
        var value = selectionGestureInput$lambda$slambda_0(currentMouseSelectionObserver$delegate, currentTextDragObserver$delegate, null);
        $composer_0.o27(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp0 = pointerInput($this$composed, Unit_instance, tmp1_group);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      $composer_0.l25();
      return tmp0;
    };
  }
  function mouseSelection$lambda($observer) {
    return function (it) {
      var tmp;
      if ($observer.k9r(it.s5u_1)) {
        it.o5w();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function mouseSelection$lambda_0($observer, $selectionAdjustment, $dragConsumed) {
    return function (it) {
      var tmp;
      if ($observer.m9r(it.s5u_1, $selectionAdjustment)) {
        it.o5w();
        $dragConsumed._v = true;
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function touchSelection$lambda($observer) {
    return function (it) {
      $observer.b9r(positionChange(it));
      it.o5w();
      return Unit_instance;
    };
  }
  function $awaitDownCOROUTINE$34(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v9v_1 = _this__u8e3s4;
  }
  protoOf($awaitDownCOROUTINE$34).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 4;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.h9_1 = 2;
            suspendResult = this.v9v_1.i5z(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.w9v_1 = suspendResult;
            var tmp0 = this.w9v_1.k5u_1;
            var tmp$ret$0;
            l$ret$1: do {
              var inductionVariable = 0;
              var last = tmp0.n() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0.p(index);
                  if (!changedToDownIgnoreConsumed(item)) {
                    tmp$ret$0 = false;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = true;
            }
             while (false);
            if (!tmp$ret$0) {
              this.h9_1 = 1;
              continue $sm;
            }

            this.h9_1 = 3;
            continue $sm;
          case 3:
            return this.w9v_1;
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
  function $mouseSelectionCOROUTINE$35(_this__u8e3s4, observer, clicksCounter, down, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f9w_1 = _this__u8e3s4;
    this.g9w_1 = observer;
    this.h9w_1 = clicksCounter;
    this.i9w_1 = down;
  }
  protoOf($mouseSelectionCOROUTINE$35).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 6;
            this.j9w_1 = this.i9w_1.k5u_1.p(0);
            this.h9w_1.k9v(this.j9w_1);
            if (get_isShiftPressed(this.i9w_1.m5u_1)) {
              this.k9w_1 = this.g9w_1.j9r(this.j9w_1.s5u_1);
              if (this.k9w_1) {
                this.h9_1 = 3;
                suspendResult = drag(this.f9w_1, this.j9w_1.q5u_1, mouseSelection$lambda(this.g9w_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.h9_1 = 4;
                continue $sm;
              }
            } else {
              var tmp_0 = this;
              switch (this.h9w_1.i9v_1) {
                case 1:
                  tmp_0.l9w_1 = Companion_getInstance_23().v9q_1;
                  break;
                case 2:
                  tmp_0.l9w_1 = Companion_getInstance_23().x9q_1;
                  break;
                default:
                  tmp_0.l9w_1 = Companion_getInstance_23().y9q_1;
                  break;
              }
              this.m9w_1 = this.g9w_1.l9r(this.j9w_1.s5u_1, this.l9w_1);
              if (this.m9w_1) {
                this.n9w_1 = {_v: !equals(this.l9w_1, Companion_getInstance_23().v9q_1)};
                this.h9_1 = 1;
                suspendResult = drag(this.f9w_1, this.j9w_1.q5u_1, mouseSelection$lambda_0(this.g9w_1, this.l9w_1, this.n9w_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.h9_1 = 2;
                continue $sm;
              }
            }

          case 1:
            var shouldConsumeUp = suspendResult;
            if (shouldConsumeUp && this.n9w_1._v) {
              var this_0 = this.f9w_1.h5z().k5u_1;
              var inductionVariable = 0;
              var last = this_0.n() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_0.p(index);
                  if (changedToUp(item)) {
                    item.o5w();
                  }
                }
                 while (inductionVariable <= last);
            }

            this.g9w_1.n9r();
            this.h9_1 = 2;
            continue $sm;
          case 2:
            this.h9_1 = 5;
            continue $sm;
          case 3:
            var shouldConsumeUp_0 = suspendResult;
            if (shouldConsumeUp_0) {
              var this_1 = this.f9w_1.h5z().k5u_1;
              var inductionVariable_0 = 0;
              var last_0 = this_1.n() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_1.p(index_0);
                  if (changedToUp(item_0)) {
                    item_0.o5w();
                  }
                }
                 while (inductionVariable_0 <= last_0);
            }

            this.g9w_1.n9r();
            this.h9_1 = 4;
            continue $sm;
          case 4:
            this.h9_1 = 5;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 6) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  function $touchSelectionCOROUTINE$36(_this__u8e3s4, observer, down, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w9w_1 = _this__u8e3s4;
    this.x9w_1 = observer;
    this.y9w_1 = down;
  }
  protoOf($touchSelectionCOROUTINE$36).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 6;
            this.i9_1 = 5;
            this.z9w_1 = first(this.y9w_1.k5u_1);
            this.h9_1 = 1;
            suspendResult = awaitLongPressOrCancellation(this.w9w_1, this.z9w_1.q5u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.a9x_1 = suspendResult;
            if (!(this.a9x_1 == null) && distanceIsTolerable(this.w9w_1.e5z(), this.z9w_1, this.a9x_1)) {
              this.x9w_1.u9q(this.a9x_1.s5u_1);
              this.h9_1 = 2;
              suspendResult = drag(this.w9w_1, this.a9x_1.q5u_1, touchSelection$lambda(this.x9w_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 4;
              continue $sm;
            }

          case 2:
            if (suspendResult) {
              var this_0 = this.w9w_1.h5z().k5u_1;
              var inductionVariable = 0;
              var last = this_0.n() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_0.p(index);
                  if (changedToUp(item)) {
                    item.o5w();
                  }
                }
                 while (inductionVariable <= last);
              this.x9w_1.d9r();
              this.h9_1 = 3;
              continue $sm;
            } else {
              this.x9w_1.t6e();
              this.h9_1 = 3;
              continue $sm;
            }

          case 3:
            this.h9_1 = 4;
            continue $sm;
          case 4:
            this.i9_1 = 6;
            this.h9_1 = 7;
            continue $sm;
          case 5:
            this.i9_1 = 6;
            var tmp_0 = this.k9_1;
            if (tmp_0 instanceof CancellationException) {
              var c = this.k9_1;
              this.x9w_1.t6e();
              throw c;
            } else {
              throw this.k9_1;
            }

          case 6:
            throw this.k9_1;
          case 7:
            this.i9_1 = 6;
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 6) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  var CrossStatus_CROSSED_instance;
  var CrossStatus_NOT_CROSSED_instance;
  var CrossStatus_COLLAPSED_instance;
  var CrossStatus_entriesInitialized;
  function CrossStatus_initEntries() {
    if (CrossStatus_entriesInitialized)
      return Unit_instance;
    CrossStatus_entriesInitialized = true;
    CrossStatus_CROSSED_instance = new CrossStatus('CROSSED', 0);
    CrossStatus_NOT_CROSSED_instance = new CrossStatus('NOT_CROSSED', 1);
    CrossStatus_COLLAPSED_instance = new CrossStatus('COLLAPSED', 2);
  }
  function CrossStatus(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function isCollapsed(_this__u8e3s4, layout) {
    if (_this__u8e3s4 == null)
      return true;
    if (layout == null)
      return true;
    if (_this__u8e3s4.j9q_1.i9q_1.equals(_this__u8e3s4.k9q_1.i9q_1)) {
      return _this__u8e3s4.j9q_1.h9q_1 === _this__u8e3s4.k9q_1.h9q_1;
    }
    var maxAnchor = _this__u8e3s4.l9q_1 ? _this__u8e3s4.j9q_1 : _this__u8e3s4.k9q_1;
    if (!(maxAnchor.h9q_1 === 0)) {
      return false;
    }
    var minAnchor = _this__u8e3s4.l9q_1 ? _this__u8e3s4.k9q_1 : _this__u8e3s4.j9q_1;
    if (!(layout.a9y().b9y() === minAnchor.h9q_1)) {
      return false;
    }
    var allTextsEmpty = {_v: true};
    layout.c9y(isCollapsed$lambda(allTextsEmpty));
    return allTextsEmpty._v;
  }
  function getTextDirectionForOffset(_this__u8e3s4, offset) {
    return isOffsetAnEmptyLine(_this__u8e3s4, offset) ? _this__u8e3s4.j4k(offset) : _this__u8e3s4.k4k(offset);
  }
  function isOffsetAnEmptyLine(_this__u8e3s4, offset) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = _this__u8e3s4.x4p_1.j4q_1;
    if (charSequenceLength(this_0) === 0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.foundation.text.selection.isOffsetAnEmptyLine.<anonymous>' call
      var currentLine = _this__u8e3s4.o4k(offset);
      tmp = ((offset === 0 || !(currentLine === _this__u8e3s4.o4k(offset - 1 | 0))) && (offset === _this__u8e3s4.x4p_1.j4q_1.a() || !(currentLine === _this__u8e3s4.o4k(offset + 1 | 0))));
    }
    return tmp;
  }
  function isCollapsed$lambda($allTextsEmpty) {
    return function (it) {
      var tmp;
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = it.a9v();
      if (charSequenceLength(this_0) > 0) {
        $allTextsEmpty._v = false;
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CrossStatus_CROSSED_getInstance() {
    CrossStatus_initEntries();
    return CrossStatus_CROSSED_instance;
  }
  function CrossStatus_NOT_CROSSED_getInstance() {
    CrossStatus_initEntries();
    return CrossStatus_NOT_CROSSED_instance;
  }
  function CrossStatus_COLLAPSED_getInstance() {
    CrossStatus_initEntries();
    return CrossStatus_COLLAPSED_instance;
  }
  function get_LocalSelectionRegistrar() {
    _init_properties_SelectionRegistrar_kt__oigj6p();
    return LocalSelectionRegistrar;
  }
  var LocalSelectionRegistrar;
  function hasSelection(_this__u8e3s4, selectableId) {
    _init_properties_SelectionRegistrar_kt__oigj6p();
    var tmp1_safe_receiver = _this__u8e3s4 == null ? null : _this__u8e3s4.f9q();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.dp(selectableId);
    return tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
  }
  function LocalSelectionRegistrar$lambda() {
    _init_properties_SelectionRegistrar_kt__oigj6p();
    return null;
  }
  var properties_initialized_SelectionRegistrar_kt_shxs4d;
  function _init_properties_SelectionRegistrar_kt__oigj6p() {
    if (!properties_initialized_SelectionRegistrar_kt_shxs4d) {
      properties_initialized_SelectionRegistrar_kt_shxs4d = true;
      LocalSelectionRegistrar = compositionLocalOf(VOID, LocalSelectionRegistrar$lambda);
    }
  }
  function get_LocalTextSelectionColors() {
    _init_properties_TextSelectionColors_kt__lgomir();
    return LocalTextSelectionColors;
  }
  var LocalTextSelectionColors;
  function TextSelectionColors(handleColor, backgroundColor) {
    this.q9k_1 = handleColor;
    this.r9k_1 = backgroundColor;
  }
  protoOf(TextSelectionColors).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextSelectionColors))
      return false;
    if (!equals(this.q9k_1, other.q9k_1))
      return false;
    if (!equals(this.r9k_1, other.r9k_1))
      return false;
    return true;
  };
  protoOf(TextSelectionColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.q9k_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.r9k_1) | 0;
    return result;
  };
  protoOf(TextSelectionColors).toString = function () {
    return 'SelectionColors(selectionHandleColor=' + Color__toString_impl_hpzmaq(this.q9k_1) + ', ' + ('selectionBackgroundColor=' + Color__toString_impl_hpzmaq(this.r9k_1) + ')');
  };
  function LocalTextSelectionColors$lambda() {
    _init_properties_TextSelectionColors_kt__lgomir();
    return get_DefaultTextSelectionColors();
  }
  var properties_initialized_TextSelectionColors_kt_x2xmyn;
  function _init_properties_TextSelectionColors_kt__lgomir() {
    if (!properties_initialized_TextSelectionColors_kt_x2xmyn) {
      properties_initialized_TextSelectionColors_kt_x2xmyn = true;
      LocalTextSelectionColors = compositionLocalOf(VOID, LocalTextSelectionColors$lambda);
    }
  }
  function get_TapIndicationDelay() {
    return TapIndicationDelay;
  }
  var TapIndicationDelay;
  function isRequestFocusOnClickEnabled() {
    return true;
  }
  var isInTouchMode;
  function makeSelectionModifier(_this__u8e3s4, selectableId, layoutCoordinates) {
    return makeDefaultSelectionModifier(_this__u8e3s4, selectableId, layoutCoordinates);
  }
  function get_DefaultSelectionColor() {
    _init_properties_DefaultTextSelectionColors_js_kt__ohmec7();
    return DefaultSelectionColor;
  }
  var DefaultSelectionColor;
  function get_DefaultTextSelectionColors() {
    _init_properties_DefaultTextSelectionColors_js_kt__ohmec7();
    return DefaultTextSelectionColors;
  }
  var DefaultTextSelectionColors;
  var properties_initialized_DefaultTextSelectionColors_js_kt_i7z293;
  function _init_properties_DefaultTextSelectionColors_js_kt__ohmec7() {
    if (!properties_initialized_DefaultTextSelectionColors_js_kt_i7z293) {
      properties_initialized_DefaultTextSelectionColors_js_kt_i7z293 = true;
      DefaultSelectionColor = Color_0(new Long(-12417292, 0));
      DefaultTextSelectionColors = new TextSelectionColors(get_DefaultSelectionColor(), Color__copy$default_impl_ectz3s(get_DefaultSelectionColor(), 0.4));
    }
  }
  function get_isPress(_this__u8e3s4) {
    return get_type(_this__u8e3s4) === Companion_getInstance_15().z5k_1 && (equals(get_key(_this__u8e3s4), Companion_getInstance_16().i76_1) || equals(get_key(_this__u8e3s4), Companion_getInstance_16().d78_1) || equals(get_key(_this__u8e3s4), Companion_getInstance_16().h76_1));
  }
  function get_isClick(_this__u8e3s4) {
    return get_type(_this__u8e3s4) === Companion_getInstance_15().y5k_1 && (equals(get_key(_this__u8e3s4), Companion_getInstance_16().i76_1) || equals(get_key(_this__u8e3s4), Companion_getInstance_16().d78_1) || equals(get_key(_this__u8e3s4), Companion_getInstance_16().h76_1));
  }
  function isComposeRootInScrollableContainer(_this__u8e3s4) {
    return false;
  }
  function _isSystemInDarkTheme($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1974537350, 'C(_isSystemInDarkTheme)49@2204L7:DarkTheme.skiko.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(1974537350, $changed, -1, 'androidx.compose.foundation._isSystemInDarkTheme (DarkTheme.skiko.kt:48)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalSystemTheme();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.u27(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.equals(SystemTheme_Dark_getInstance());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  }
  function platformIndication(indication) {
    return inputModeFilterIndication(indication);
  }
  function inputModeFilterIndication(indication) {
    var tmp;
    if (indication == null) {
      tmp = null;
    } else {
      if (!(indication == null) ? isInterface(indication, IndicationNodeFactory) : false) {
        tmp = new InputModeFilterIndicationNodeFactory(indication);
      } else {
        tmp = new InputModeFilterIndication(indication);
      }
    }
    return tmp;
  }
  function InputModeFilterIndicationNodeFactory$create$1(this$0, $filteredSource) {
    this.s9y_1 = $filteredSource;
    DelegatingNode.call(this);
    this.h6g(this$0.t9y_1.n90($filteredSource));
  }
  protoOf(InputModeFilterIndicationNodeFactory$create$1).e5b = function () {
    this.s9y_1.u9y_1 = currentValueOf(this, get_LocalInputModeManager());
  };
  protoOf(InputModeFilterIndicationNodeFactory$create$1).g5b = function () {
    this.s9y_1.u9y_1 = null;
  };
  function InputModeFilterIndicationNodeFactory(original) {
    this.t9y_1 = original;
  }
  protoOf(InputModeFilterIndicationNodeFactory).n90 = function (interactionSource) {
    var filteredSource = new InputModeFilterInteractionSource(interactionSource);
    return new InputModeFilterIndicationNodeFactory$create$1(this, filteredSource);
  };
  protoOf(InputModeFilterIndicationNodeFactory).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof InputModeFilterIndicationNodeFactory))
      THROW_CCE();
    return this.t9y_1.equals(other.t9y_1);
  };
  protoOf(InputModeFilterIndicationNodeFactory).hashCode = function () {
    return this.t9y_1.hashCode();
  };
  function InputModeFilterIndication(original) {
    this.w9y_1 = original;
  }
  protoOf(InputModeFilterIndication).e99 = function (interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.j25(1127348017);
    sourceInformation($composer_0, 'C(rememberUpdatedInstance)87@3207L7,88@3236L116:Indication.skiko.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(1127348017, $changed, -1, 'androidx.compose.foundation.InputModeFilterIndication.rememberUpdatedInstance (Indication.skiko.kt:86)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalInputModeManager();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.u27(this_0);
    sourceInformationMarkerEnd($composer_1);
    var inputModeManager = tmp0;
    var tmp0_0 = rememberUpdatedInstance.call(this, new InputModeFilterInteractionSource(interactionSource, inputModeManager), $composer_0, 112 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.l25();
    return tmp0_0;
  };
  protoOf(InputModeFilterIndication).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof InputModeFilterIndication))
      THROW_CCE();
    return equals(this.w9y_1, other.w9y_1);
  };
  protoOf(InputModeFilterIndication).hashCode = function () {
    return hashCode(this.w9y_1);
  };
  function InputModeFilterInteractionSource$interactions$slambda$slambda($this_flow, $actualFocusCount, $sentFocusCount, this$0, resultContinuation) {
    this.f9z_1 = $this_flow;
    this.g9z_1 = $actualFocusCount;
    this.h9z_1 = $sentFocusCount;
    this.i9z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(InputModeFilterInteractionSource$interactions$slambda$slambda).s99 = function (it, $completion) {
    var tmp = this.t99(it, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(InputModeFilterInteractionSource$interactions$slambda$slambda).ba = function (p1, $completion) {
    return this.s99((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(InputModeFilterInteractionSource$interactions$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 5;
            var tmp_0 = this.j9z_1;
            if (!isInterface(tmp_0, FocusInteraction)) {
              this.h9_1 = 3;
              suspendResult = this.f9z_1.n1h(this.j9z_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.g9z_1._v > 0 && this.h9z_1._v > 0 || (this.g9z_1._v === 0 && _get_isKeyboardMode__dzti3t(this.i9z_1))) {
                var tmp0_subject = this.j9z_1;
                if (tmp0_subject instanceof Focus) {
                  var tmp1 = this.h9z_1._v;
                  this.h9z_1._v = tmp1 + 1 | 0;
                } else {
                  if (tmp0_subject instanceof Unfocus) {
                    var tmp2 = this.h9z_1._v;
                    this.h9z_1._v = tmp2 - 1 | 0;
                  }
                }
                this.h9_1 = 1;
                suspendResult = this.f9z_1.n1h(this.j9z_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.h9_1 = 2;
                continue $sm;
              }
            }

          case 1:
            this.h9_1 = 2;
            continue $sm;
          case 2:
            var tmp3_subject = this.j9z_1;
            if (tmp3_subject instanceof Focus) {
              var tmp4 = this.g9z_1._v;
              this.g9z_1._v = tmp4 + 1 | 0;
            } else {
              if (tmp3_subject instanceof Unfocus) {
                var tmp5 = this.g9z_1._v;
                this.g9z_1._v = tmp5 - 1 | 0;
              }
            }

            this.h9_1 = 4;
            continue $sm;
          case 3:
            this.h9_1 = 4;
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
  protoOf(InputModeFilterInteractionSource$interactions$slambda$slambda).t99 = function (it, completion) {
    var i = new InputModeFilterInteractionSource$interactions$slambda$slambda(this.f9z_1, this.g9z_1, this.h9z_1, this.i9z_1, completion);
    i.j9z_1 = it;
    return i;
  };
  function InputModeFilterInteractionSource$interactions$slambda$slambda_0($this_flow, $actualFocusCount, $sentFocusCount, this$0, resultContinuation) {
    var i = new InputModeFilterInteractionSource$interactions$slambda$slambda($this_flow, $actualFocusCount, $sentFocusCount, this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.s99(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_isKeyboardMode__dzti3t($this) {
    var tmp;
    if ($this.u9y_1 == null) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.u9y_1;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g7n();
      tmp = equals(tmp_0 == null ? null : new InputMode(tmp_0), new InputMode(Companion_getInstance_17().z5s_1));
    }
    return tmp;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.k9z_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).n1h = function (value, $completion) {
    return this.k9z_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).q3 = function () {
    return this.k9z_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
    return hashCode(this.q3());
  };
  function InputModeFilterInteractionSource$interactions$slambda($original, this$0, resultContinuation) {
    this.t9z_1 = $original;
    this.u9z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(InputModeFilterInteractionSource$interactions$slambda).y9z = function ($this$flow, $completion) {
    var tmp = this.z9z($this$flow, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(InputModeFilterInteractionSource$interactions$slambda).ba = function (p1, $completion) {
    return this.y9z((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(InputModeFilterInteractionSource$interactions$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.w9z_1 = {_v: 0};
            this.x9z_1 = {_v: 0};
            this.h9_1 = 1;
            var tmp_0 = this.t9z_1.z9a();
            var tmp_1 = InputModeFilterInteractionSource$interactions$slambda$slambda_0(this.v9z_1, this.w9z_1, this.x9z_1, this.u9z_1, null);
            suspendResult = tmp_0.z1f(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  protoOf(InputModeFilterInteractionSource$interactions$slambda).z9z = function ($this$flow, completion) {
    var i = new InputModeFilterInteractionSource$interactions$slambda(this.t9z_1, this.u9z_1, completion);
    i.v9z_1 = $this$flow;
    return i;
  };
  function InputModeFilterInteractionSource$interactions$slambda_0($original, this$0, resultContinuation) {
    var i = new InputModeFilterInteractionSource$interactions$slambda($original, this$0, resultContinuation);
    var l = function ($this$flow, $completion) {
      return i.y9z($this$flow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function InputModeFilterInteractionSource(original, inputModeManager) {
    inputModeManager = inputModeManager === VOID ? null : inputModeManager;
    this.u9y_1 = inputModeManager;
    var tmp = this;
    tmp.v9y_1 = flow(InputModeFilterInteractionSource$interactions$slambda_0(original, this, null));
  }
  protoOf(InputModeFilterInteractionSource).z9a = function () {
    return this.v9y_1;
  };
  function defaultBringIntoViewParent(_this__u8e3s4) {
    var tmp = defaultBringIntoViewParent$slambda_0(null);
    return new sam$androidx_compose_foundation_relocation_BringIntoViewParent$0(tmp);
  }
  function sam$androidx_compose_foundation_relocation_BringIntoViewParent$0(function_0) {
    this.aa0_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_relocation_BringIntoViewParent$0).b9k = function (childCoordinates, boundsProvider, $completion) {
    return this.aa0_1(childCoordinates, boundsProvider, $completion);
  };
  protoOf(sam$androidx_compose_foundation_relocation_BringIntoViewParent$0).q3 = function () {
    return this.aa0_1;
  };
  protoOf(sam$androidx_compose_foundation_relocation_BringIntoViewParent$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, BringIntoViewParent) : false) {
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
  protoOf(sam$androidx_compose_foundation_relocation_BringIntoViewParent$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function defaultBringIntoViewParent$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(defaultBringIntoViewParent$slambda).la0 = function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, $completion) {
    var tmp = this.ma0(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(defaultBringIntoViewParent$slambda).a2k = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, LayoutCoordinates) : false) ? p1 : THROW_CCE();
    return this.la0(tmp, (!(p2 == null) ? typeof p2 === 'function' : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(defaultBringIntoViewParent$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(defaultBringIntoViewParent$slambda).ma0 = function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, completion) {
    var i = new defaultBringIntoViewParent$slambda(completion);
    i.ja0_1 = _anonymous_parameter_0__qggqh8;
    i.ka0_1 = _anonymous_parameter_1__qggqgd;
    return i;
  };
  function defaultBringIntoViewParent$slambda_0(resultContinuation) {
    var i = new defaultBringIntoViewParent$slambda(resultContinuation);
    var l = function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, $completion) {
      return i.la0(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function findFollowingBreak(_this__u8e3s4, index) {
    var it = Companion_getInstance_18().o3k();
    it.w3k(_this__u8e3s4);
    return it.v3k(index);
  }
  function findPrecedingBreak(_this__u8e3s4, index) {
    var it = Companion_getInstance_18().o3k();
    it.w3k(_this__u8e3s4);
    return it.u3k(index);
  }
  function get_textPointerIcon() {
    _init_properties_TextPointerIcon_skiko_kt__4sfdky();
    return textPointerIcon;
  }
  var textPointerIcon;
  var properties_initialized_TextPointerIcon_skiko_kt_3qxo0w;
  function _init_properties_TextPointerIcon_skiko_kt__4sfdky() {
    if (!properties_initialized_TextPointerIcon_skiko_kt_3qxo0w) {
      properties_initialized_TextPointerIcon_skiko_kt_3qxo0w = true;
      textPointerIcon = Companion_getInstance_19().z5w_1;
    }
  }
  //region block: post-declaration
  protoOf(BackgroundNode).a5f = onMeasureResultChanged;
  protoOf(AbstractClickableNode).z5x = interceptOutOfBoundsChildEvents;
  protoOf(AbstractClickableNode).a5y = sharePointerInputWithSiblings;
  protoOf(AbstractClickableNode).b5y = onDensityChange;
  protoOf(AbstractClickableNode).c5y = onViewConfigurationChange;
  protoOf(AbstractClickableNode).w6e = get_shouldClearDescendantSemantics;
  protoOf(FocusableNode).w6e = get_shouldClearDescendantSemantics;
  protoOf(FocusableNode).x6e = get_shouldMergeDescendantSemantics;
  protoOf(DefaultDebugIndicationInstance).a5f = onMeasureResultChanged;
  protoOf(DefaultDebugIndication).e99 = rememberUpdatedInstance;
  protoOf(IndicationModifier).j5a = foldIn;
  protoOf(IndicationModifier).k5a = all;
  protoOf(IndicationModifier).f5a = then;
  protoOf(SelectableTextAnnotatedStringNode).a5f = onMeasureResultChanged;
  protoOf(TextAnnotatedStringNode).a5f = onMeasureResultChanged;
  protoOf(TextAnnotatedStringNode).x6e = get_shouldMergeDescendantSemantics;
  protoOf(TextStringSimpleNode).a5f = onMeasureResultChanged;
  protoOf(TextStringSimpleNode).w6e = get_shouldClearDescendantSemantics;
  protoOf(TextStringSimpleNode).x6e = get_shouldMergeDescendantSemantics;
  protoOf(InputModeFilterIndicationNodeFactory).e99 = rememberUpdatedInstance;
  //endregion
  //region block: init
  TraverseKey_instance = new TraverseKey();
  TraverseKey_instance_0 = new TraverseKey_0();
  TraverseKey_instance_1 = new TraverseKey_1();
  DefaultDebugIndication_instance = new DefaultDebugIndication();
  NoIndicationInstance_instance = new NoIndicationInstance();
  TraverseKey_instance_2 = new TraverseKey_2();
  TraverseKey_instance_3 = new TraverseKey_3();
  SNAPSHOTS_INTERVAL_MILLIS = 5000;
  Companion_instance_3 = new Companion_0();
  TapIndicationDelay = new Long(0, 0);
  isInTouchMode = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Cancel;
  _.$_$.b = Start;
  _.$_$.c = Stop;
  _.$_$.d = Focus;
  _.$_$.e = Unfocus;
  _.$_$.f = Enter;
  _.$_$.g = Exit;
  _.$_$.h = Interaction;
  _.$_$.i = funMutableInteractionSource;
  _.$_$.j = Cancel_0;
  _.$_$.k = Press;
  _.$_$.l = Release;
  _.$_$.m = PressInteraction;
  _.$_$.n = get_CircleShape;
  _.$_$.o = CornerSize_0;
  _.$_$.p = RoundedCornerShape_2;
  _.$_$.q = RoundedCornerShape_3;
  _.$_$.r = get_LocalTextSelectionColors;
  _.$_$.s = TextSelectionColors;
  _.$_$.t = BasicText;
  _.$_$.u = rememberUpdatedInstance;
  _.$_$.v = IndicationNodeFactory;
  _.$_$.w = Indication;
  _.$_$.x = get_LocalIndication;
  _.$_$.y = background;
  _.$_$.z = border;
  _.$_$.a1 = clickable;
  _.$_$.b1 = isSystemInDarkTheme;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-foundation-foundation.js.map
