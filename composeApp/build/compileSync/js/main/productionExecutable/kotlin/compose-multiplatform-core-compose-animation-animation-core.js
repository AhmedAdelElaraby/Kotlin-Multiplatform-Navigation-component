(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-collection-collection.js', './compose-multiplatform-core-compose-ui-ui.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-geometry.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    globalThis['compose-multiplatform-core-compose-animation-animation-core'] = factory(typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_collection_internal_collection, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_geometry) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var equals = kotlin_kotlin.$_$.ba;
  var VOID = kotlin_kotlin.$_$.e;
  var coerceIn = kotlin_kotlin.$_$.cc;
  var Long = kotlin_kotlin.$_$.ue;
  var CoroutineImpl = kotlin_kotlin.$_$.l9;
  var protoOf = kotlin_kotlin.$_$.kb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var CancellationException = kotlin_kotlin.$_$.v8;
  var initMetadataForLambda = kotlin_kotlin.$_$.oa;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.o3;
  var KMutableProperty1 = kotlin_kotlin.$_$.ic;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ha;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var isNaN_0 = kotlin_kotlin.$_$.tf;
  var toString = kotlin_kotlin.$_$.ob;
  var toString_0 = kotlin_kotlin.$_$.ig;
  var initMetadataForInterface = kotlin_kotlin.$_$.na;
  var Enum = kotlin_kotlin.$_$.pe;
  var hashCode = kotlin_kotlin.$_$.ja;
  var getNumberHashCode = kotlin_kotlin.$_$.ga;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var computeCubicVerticalBounds = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d1;
  var _FloatFloatPair___get_packedValue__impl__5lczxp = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.w;
  var floatFromBits = kotlin_kotlin.$_$.da;
  var findFirstCubicRoot = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h1;
  var evaluateCubic = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g1;
  var FunctionAdapter = kotlin_kotlin.$_$.p9;
  var isInterface = kotlin_kotlin.$_$.za;
  var coerceIn_0 = kotlin_kotlin.$_$.ec;
  var numberToLong = kotlin_kotlin.$_$.ib;
  var withFrameNanos = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var Key_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.p4;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ma;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.z;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var Key_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var ensureNotNull = kotlin_kotlin.$_$.pf;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var captureStack = kotlin_kotlin.$_$.u9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var isFinite = kotlin_kotlin.$_$.qf;
  var isNaN_1 = kotlin_kotlin.$_$.uf;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.n3;
  var toRawBits = kotlin_kotlin.$_$.hg;
  var toLong = kotlin_kotlin.$_$.mb;
  var Key_instance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.t4;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var roundToLong = kotlin_kotlin.$_$.ub;
  var initMetadataForCompanion = kotlin_kotlin.$_$.la;
  var until = kotlin_kotlin.$_$.gc;
  var fill = kotlin_kotlin.$_$.w5;
  var intercepted = kotlin_kotlin.$_$.y8;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var returnIfSuspended = kotlin_kotlin.$_$.j;
  var mutableFloatStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var MutableObjectList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.j;
  var mutableLongStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.k3;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var derivedStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var DisposableEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var SnapshotStateObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var Companion_instance = kotlin_kotlin.$_$.y3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.q2;
  var KProperty0 = kotlin_kotlin.$_$.jc;
  var KProperty1 = kotlin_kotlin.$_$.kc;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.h;
  var lazy = kotlin_kotlin.$_$.vf;
  var numberToInt = kotlin_kotlin.$_$.hb;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m;
  var _DpOffset___get_x__impl__uauqb5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var _DpOffset___get_y__impl__1h898y = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var DpOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j;
  var DpOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var roundToInt = kotlin_kotlin.$_$.tb;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var coerceAtLeast = kotlin_kotlin.$_$.yb;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var initMetadataForObject = kotlin_kotlin.$_$.pa;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.eg;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.p3;
  var to = kotlin_kotlin.$_$.jg;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a3;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y2;
  var mapOf = kotlin_kotlin.$_$.d7;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.y;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(Animatable$runAnimation$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Animatable$snapTo$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(Animatable, 'Animatable', VOID, VOID, VOID, [4, 3, 1, 0]);
  initMetadataForClass(AnimationResult, 'AnimationResult');
  function isFinishedFromNanos(playTimeNanos) {
    return playTimeNanos.a1(this.m80()) >= 0;
  }
  initMetadataForInterface(Animation, 'Animation');
  initMetadataForClass(TargetBasedAnimation, 'TargetBasedAnimation', VOID, VOID, [Animation]);
  initMetadataForClass(AnimationEndReason, 'AnimationEndReason', VOID, Enum);
  initMetadataForClass(SpringSpec, 'SpringSpec', SpringSpec);
  initMetadataForClass(StartDelayAnimationSpec, 'StartDelayAnimationSpec');
  function getEndVelocity(initialValue, targetValue, initialVelocity) {
    return this.p80(this.n80(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  initMetadataForInterface(VectorizedAnimationSpec, 'VectorizedAnimationSpec');
  initMetadataForClass(StartDelayVectorizedAnimationSpec, 'StartDelayVectorizedAnimationSpec', VOID, VOID, [VectorizedAnimationSpec]);
  initMetadataForClass(TweenSpec, 'TweenSpec', TweenSpec);
  initMetadataForClass(AnimationState, 'AnimationState');
  initMetadataForClass(AnimationScope, 'AnimationScope');
  initMetadataForClass(AnimationVector_3, 'AnimationVector');
  initMetadataForClass(AnimationVector1D, 'AnimationVector1D', VOID, AnimationVector_3);
  initMetadataForClass(AnimationVector2D, 'AnimationVector2D', VOID, AnimationVector_3);
  initMetadataForClass(AnimationVector3D, 'AnimationVector3D', VOID, AnimationVector_3);
  initMetadataForClass(AnimationVector4D, 'AnimationVector4D', VOID, AnimationVector_3);
  initMetadataForClass(ComplexDouble, 'ComplexDouble');
  initMetadataForInterface(Easing, 'Easing');
  initMetadataForClass(CubicBezierEasing, 'CubicBezierEasing', VOID, VOID, [Easing]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  function getEndVelocity_0(initialValue, targetValue, initialVelocity) {
    return this.d82(this.f82(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  function vectorize(converter) {
    return VectorizedFloatAnimationSpec_init_$Create$(this);
  }
  initMetadataForInterface(FloatAnimationSpec, 'FloatAnimationSpec');
  initMetadataForClass(FloatSpringSpec, 'FloatSpringSpec', FloatSpringSpec, VOID, [FloatAnimationSpec]);
  initMetadataForClass(FloatTweenSpec, 'FloatTweenSpec', FloatTweenSpec, VOID, [FloatAnimationSpec]);
  initMetadataForLambda(withInfiniteAnimationFrameNanos$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($withInfiniteAnimationFrameNanosCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(Mutator, 'Mutator');
  initMetadataForLambda(MutatorMutex$mutate$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(MutatorMutex, 'MutatorMutex', MutatorMutex, VOID, VOID, [2, 3]);
  initMetadataForClass(MutatePriority, 'MutatePriority', VOID, Enum);
  initMetadataForClass(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', VOID, CancellationException);
  initMetadataForClass(MutationInterruptedException, 'MutationInterruptedException', MutationInterruptedException, PlatformOptimizedCancellationException);
  initMetadataForClass(SpringSimulation, 'SpringSimulation');
  initMetadataForCoroutine($animateCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($callWithFrameNanosCOROUTINE$2, CoroutineImpl);
  initMetadataForLambda(SeekableTransitionState$seekTo$slambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(SeekableTransitionState$seekTo$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(SeekableTransitionState$animateTo$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SeekingAnimationState, 'SeekingAnimationState', SeekingAnimationState);
  initMetadataForCompanion(Companion);
  initMetadataForLambda(SeekableTransitionState$snapTo$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(SeekableTransitionState$seekTo$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(SeekableTransitionState$animateTo$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($runAnimationsCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($doOneFrameCOROUTINE$4, CoroutineImpl);
  initMetadataForCoroutine($animateOneFrameCOROUTINE$5, CoroutineImpl);
  initMetadataForCoroutine($waitForCompositionAfterTargetStateChangeCOROUTINE$6, CoroutineImpl);
  initMetadataForCoroutine($waitForCompositionCOROUTINE$7, CoroutineImpl);
  initMetadataForClass(TransitionState, 'TransitionState');
  initMetadataForClass(SeekableTransitionState, 'SeekableTransitionState', VOID, TransitionState, VOID, [0, 1, 2]);
  initMetadataForClass(DeferredAnimationData, 'DeferredAnimationData');
  initMetadataForClass(TransitionAnimationState, 'TransitionAnimationState');
  function isTransitioningTo(_this__u8e3s4, targetState) {
    return equals(_this__u8e3s4, this.h8e()) && equals(targetState, this.p56());
  }
  initMetadataForInterface(Segment, 'Segment');
  initMetadataForClass(SegmentImpl, 'SegmentImpl', VOID, VOID, [Segment]);
  initMetadataForClass(DeferredAnimation, 'DeferredAnimation');
  initMetadataForLambda(Transition$animateTo$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Transition$animateTo$$inlined$cache$1$2);
  initMetadataForClass(Transition, 'Transition');
  initMetadataForClass(MutableTransitionState, 'MutableTransitionState', VOID, TransitionState);
  initMetadataForLambda(rememberTransition$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(rememberTransition$$inlined$cache$2$1);
  initMetadataForClass(createDeferredAnimation$$inlined$cache$1$1);
  initMetadataForClass(createChildTransitionInternal$$inlined$cache$1$1);
  initMetadataForClass(TwoWayConverterImpl, 'TwoWayConverterImpl');
  initMetadataForObject(Spring, 'Spring');
  function get_isInfinite() {
    return false;
  }
  initMetadataForInterface(VectorizedFiniteAnimationSpec, 'VectorizedFiniteAnimationSpec', VOID, VOID, [VectorizedAnimationSpec]);
  initMetadataForClass(VectorizedSpringSpec, 'VectorizedSpringSpec', VectorizedSpringSpec_init_$Create$, VOID, [VectorizedFiniteAnimationSpec]);
  initMetadataForClass(VectorizedFloatAnimationSpec$1);
  initMetadataForClass(VectorizedFloatAnimationSpec, 'VectorizedFloatAnimationSpec', VOID, VOID, [VectorizedFiniteAnimationSpec]);
  function getDurationNanos(initialValue, targetValue, initialVelocity) {
    return numberToLong(this.a8i() + this.z8h() | 0).a3(new Long(1000000, 0));
  }
  initMetadataForInterface(VectorizedDurationBasedAnimationSpec, 'VectorizedDurationBasedAnimationSpec', VOID, VOID, [VectorizedFiniteAnimationSpec]);
  initMetadataForClass(VectorizedTweenSpec, 'VectorizedTweenSpec', VectorizedTweenSpec, VOID, [VectorizedDurationBasedAnimationSpec]);
  initMetadataForClass(createSpringAnimations$1);
  initMetadataForClass(createSpringAnimations$2);
  initMetadataForClass(AtomicReference, 'AtomicReference');
  //endregion
  function get_positiveInfinityBounds1D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds1D;
  }
  var positiveInfinityBounds1D;
  function get_positiveInfinityBounds2D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds2D;
  }
  var positiveInfinityBounds2D;
  function get_positiveInfinityBounds3D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds3D;
  }
  var positiveInfinityBounds3D;
  function get_positiveInfinityBounds4D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds4D;
  }
  var positiveInfinityBounds4D;
  function get_negativeInfinityBounds1D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds1D;
  }
  var negativeInfinityBounds1D;
  function get_negativeInfinityBounds2D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds2D;
  }
  var negativeInfinityBounds2D;
  function get_negativeInfinityBounds3D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds3D;
  }
  var negativeInfinityBounds3D;
  function get_negativeInfinityBounds4D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds4D;
  }
  var negativeInfinityBounds4D;
  function Animatable$runAnimation$slambda$lambda(this$0, $endState, $block, $clampingNeeded) {
    return function ($this$animate) {
      updateState($this$animate, this$0.w7w_1);
      var clamped = clampToBounds(this$0, $this$animate.v());
      var tmp;
      if (!equals(clamped, $this$animate.v())) {
        this$0.w7w_1.w7x(clamped);
        $endState.w7x(clamped);
        var tmp0_safe_receiver = $block;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver(this$0);
        $this$animate.x7x();
        $clampingNeeded._v = true;
        tmp = Unit_instance;
      } else {
        var tmp1_safe_receiver = $block;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver(this$0);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function _set_isRunning__kpbg34($this, _set____db54di) {
    var tmp0 = $this.x7w_1;
    isRunning$factory();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  }
  function _set_targetValue__aqsk0r($this, _set____db54di) {
    var tmp0 = $this.y7w_1;
    targetValue$factory();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  }
  function runAnimation($this, animation, initialVelocity, block, $completion) {
    var startTime = $this.w7w_1.t7x_1;
    return $this.b7x_1.a7y(VOID, Animatable$runAnimation$slambda_0($this, initialVelocity, animation, startTime, block, null), $completion);
  }
  function clampToBounds($this, value) {
    if (equals($this.f7x_1, $this.d7x_1) && equals($this.g7x_1, $this.e7x_1)) {
      return value;
    }
    var valueVector = $this.t7w_1.b7y()(value);
    var clamped = false;
    var inductionVariable = 0;
    var last = valueVector.c7y();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (valueVector.d7y(i) < $this.f7x_1.d7y(i) || valueVector.d7y(i) > $this.g7x_1.d7y(i)) {
          clamped = true;
          valueVector.e7y(i, coerceIn(valueVector.d7y(i), $this.f7x_1.d7y(i), $this.g7x_1.d7y(i)));
        }
      }
       while (inductionVariable < last);
    if (clamped) {
      return $this.t7w_1.f7y()(valueVector);
    } else {
      return value;
    }
  }
  function endAnimation($this) {
    // Inline function 'kotlin.apply' call
    var this_0 = $this.w7w_1;
    // Inline function 'androidx.compose.animation.core.Animatable.endAnimation.<anonymous>' call
    this_0.s7x_1.g7y();
    this_0.t7x_1 = new Long(0, -2147483648);
    _set_isRunning__kpbg34($this, false);
  }
  function Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    this.p7y_1 = this$0;
    this.q7y_1 = $initialVelocity;
    this.r7y_1 = $animation;
    this.s7y_1 = $startTime;
    this.t7y_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$runAnimation$slambda).x7y = function ($completion) {
    var tmp = this.b4w($completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(Animatable$runAnimation$slambda).c4w = function ($completion) {
    return this.x7y($completion);
  };
  protoOf(Animatable$runAnimation$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 3;
            this.i9_1 = 2;
            this.p7y_1.w7w_1.s7x_1 = this.p7y_1.t7w_1.b7y()(this.q7y_1);
            _set_targetValue__aqsk0r(this.p7y_1, this.r7y_1.y7y());
            _set_isRunning__kpbg34(this.p7y_1, true);
            this.v7y_1 = copy(this.p7y_1.w7w_1, VOID, VOID, VOID, new Long(0, -2147483648));
            this.w7y_1 = {_v: false};
            this.h9_1 = 1;
            suspendResult = animate(this.v7y_1, this.r7y_1, this.s7y_1, Animatable$runAnimation$slambda$lambda(this.p7y_1, this.v7y_1, this.t7y_1, this.w7y_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var endReason = this.w7y_1._v ? AnimationEndReason_BoundReached_getInstance() : AnimationEndReason_Finished_getInstance();
            endAnimation(this.p7y_1);
            this.u7y_1 = new AnimationResult(this.v7y_1, endReason);
            this.i9_1 = 3;
            this.h9_1 = 4;
            continue $sm;
          case 2:
            this.i9_1 = 3;
            var tmp_0 = this.k9_1;
            if (tmp_0 instanceof CancellationException) {
              var e = this.k9_1;
              var tmp_1 = this;
              endAnimation(this.p7y_1);
              throw e;
            } else {
              throw this.k9_1;
            }

          case 3:
            throw this.k9_1;
          case 4:
            this.i9_1 = 3;
            return this.u7y_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i9_1 === 3) {
          throw e_0;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(Animatable$runAnimation$slambda).b4w = function (completion) {
    return new Animatable$runAnimation$slambda(this.p7y_1, this.q7y_1, this.r7y_1, this.s7y_1, this.t7y_1, completion);
  };
  function Animatable$runAnimation$slambda_0(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    var i = new Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation);
    var l = function ($completion) {
      return i.x7y($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation) {
    this.h7z_1 = this$0;
    this.i7z_1 = $targetValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$snapTo$slambda).j7z = function ($completion) {
    var tmp = this.b4w($completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(Animatable$snapTo$slambda).c4w = function ($completion) {
    return this.j7z($completion);
  };
  protoOf(Animatable$snapTo$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          endAnimation(this.h7z_1);
          var clampedValue = clampToBounds(this.h7z_1, this.i7z_1);
          this.h7z_1.w7w_1.w7x(clampedValue);
          _set_targetValue__aqsk0r(this.h7z_1, clampedValue);
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
  protoOf(Animatable$snapTo$slambda).b4w = function (completion) {
    return new Animatable$snapTo$slambda(this.h7z_1, this.i7z_1, completion);
  };
  function Animatable$snapTo$slambda_0(this$0, $targetValue, resultContinuation) {
    var i = new Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation);
    var l = function ($completion) {
      return i.j7z($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Animatable(initialValue, typeConverter, visibilityThreshold, label) {
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    label = label === VOID ? 'Animatable' : label;
    this.t7w_1 = typeConverter;
    this.u7w_1 = visibilityThreshold;
    this.v7w_1 = label;
    this.w7w_1 = new AnimationState(this.t7w_1, initialValue);
    this.x7w_1 = mutableStateOf(false);
    this.y7w_1 = mutableStateOf(initialValue);
    this.z7w_1 = null;
    this.a7x_1 = null;
    this.b7x_1 = new MutatorMutex();
    this.c7x_1 = new SpringSpec(VOID, VOID, this.u7w_1);
    var tmp = this;
    var tmp0_subject = this.k7z();
    var tmp_0;
    if (tmp0_subject instanceof AnimationVector1D) {
      tmp_0 = get_negativeInfinityBounds1D();
    } else {
      if (tmp0_subject instanceof AnimationVector2D) {
        tmp_0 = get_negativeInfinityBounds2D();
      } else {
        if (tmp0_subject instanceof AnimationVector3D) {
          tmp_0 = get_negativeInfinityBounds3D();
        } else {
          tmp_0 = get_negativeInfinityBounds4D();
        }
      }
    }
    var tmp_1 = tmp_0;
    tmp.d7x_1 = tmp_1 instanceof AnimationVector_3 ? tmp_1 : THROW_CCE();
    var tmp_2 = this;
    var tmp0_subject_0 = this.k7z();
    var tmp_3;
    if (tmp0_subject_0 instanceof AnimationVector1D) {
      tmp_3 = get_positiveInfinityBounds1D();
    } else {
      if (tmp0_subject_0 instanceof AnimationVector2D) {
        tmp_3 = get_positiveInfinityBounds2D();
      } else {
        if (tmp0_subject_0 instanceof AnimationVector3D) {
          tmp_3 = get_positiveInfinityBounds3D();
        } else {
          tmp_3 = get_positiveInfinityBounds4D();
        }
      }
    }
    var tmp_4 = tmp_3;
    tmp_2.e7x_1 = tmp_4 instanceof AnimationVector_3 ? tmp_4 : THROW_CCE();
    this.f7x_1 = this.d7x_1;
    this.g7x_1 = this.e7x_1;
  }
  protoOf(Animatable).v = function () {
    return this.w7w_1.v();
  };
  protoOf(Animatable).k7z = function () {
    return this.w7w_1.s7x_1;
  };
  protoOf(Animatable).l7z = function () {
    return this.t7w_1.f7y()(this.k7z());
  };
  protoOf(Animatable).m7z = function () {
    var tmp0 = this.x7w_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    isRunning$factory_0();
    return tmp0.v();
  };
  protoOf(Animatable).y7y = function () {
    var tmp0 = this.y7w_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    targetValue$factory_0();
    return tmp0.v();
  };
  protoOf(Animatable).n7z = function (targetValue, animationSpec, initialVelocity, block, $completion) {
    var tmp0_initialValue = this.v();
    var tmp1_typeConverter = this.t7w_1;
    var anim = TargetBasedAnimation_0(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, initialVelocity);
    return runAnimation(this, anim, initialVelocity, block, $completion);
  };
  protoOf(Animatable).o7z = function (targetValue, animationSpec, initialVelocity, block, $completion, $super) {
    animationSpec = animationSpec === VOID ? this.c7x_1 : animationSpec;
    initialVelocity = initialVelocity === VOID ? this.l7z() : initialVelocity;
    block = block === VOID ? null : block;
    return $super === VOID ? this.n7z(targetValue, animationSpec, initialVelocity, block, $completion) : $super.n7z.call(this, targetValue, animationSpec, initialVelocity, block, $completion);
  };
  protoOf(Animatable).p7z = function (targetValue, $completion) {
    return this.b7x_1.a7y(VOID, Animatable$snapTo$slambda_0(this, targetValue, null), $completion);
  };
  protoOf(Animatable).q7z = function () {
    return this.w7w_1;
  };
  function AnimationResult(endState, endReason) {
    this.r7z_1 = endState;
    this.s7z_1 = endReason;
  }
  protoOf(AnimationResult).toString = function () {
    return 'AnimationResult(endReason=' + this.s7z_1.toString() + ', endState=' + this.r7z_1.toString() + ')';
  };
  function Animatable_0(initialValue, visibilityThreshold) {
    var tmp;
    if (visibilityThreshold === VOID) {
      tmp = 0.01;
    } else {
      tmp = visibilityThreshold;
    }
    visibilityThreshold = tmp;
    _init_properties_Animatable_kt__f2hc5e();
    return new Animatable(initialValue, get_VectorConverter(FloatCompanionObject_instance), visibilityThreshold);
  }
  function isRunning$factory() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.m7z();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function isRunning$factory_0() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.m7z();
    }, function (receiver, value) {
      return _set_isRunning__kpbg34(receiver, value);
    });
  }
  function targetValue$factory() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.y7y();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  function targetValue$factory_0() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return receiver.y7y();
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r(receiver, value);
    });
  }
  var properties_initialized_Animatable_kt_s5cd7k;
  function _init_properties_Animatable_kt__f2hc5e() {
    if (!properties_initialized_Animatable_kt_s5cd7k) {
      properties_initialized_Animatable_kt_s5cd7k = true;
      positiveInfinityBounds1D = AnimationVector(Infinity);
      positiveInfinityBounds2D = AnimationVector_0(Infinity, Infinity);
      positiveInfinityBounds3D = AnimationVector_1(Infinity, Infinity, Infinity);
      positiveInfinityBounds4D = AnimationVector_2(Infinity, Infinity, Infinity, Infinity);
      negativeInfinityBounds1D = AnimationVector(-Infinity);
      negativeInfinityBounds2D = AnimationVector_0(-Infinity, -Infinity);
      negativeInfinityBounds3D = AnimationVector_1(-Infinity, -Infinity, -Infinity);
      negativeInfinityBounds4D = AnimationVector_2(-Infinity, -Infinity, -Infinity, -Infinity);
    }
  }
  function TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $this) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    TargetBasedAnimation.call($this, animationSpec.t7z(typeConverter), typeConverter, initialValue, targetValue, initialVelocityVector);
    return $this;
  }
  function TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    return TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, objectCreate(protoOf(TargetBasedAnimation)));
  }
  function _get_endVelocity__lqkp53($this) {
    var tmp0_elvis_lhs = $this.c80_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.u7z_1.d80($this.y7z_1, $this.z7z_1, $this.a80_1);
      // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.<get-endVelocity>.<anonymous>' call
      $this.c80_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function TargetBasedAnimation(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    this.u7z_1 = animationSpec;
    this.v7z_1 = typeConverter;
    this.w7z_1 = targetValue;
    this.x7z_1 = initialValue;
    this.y7z_1 = this.v7z_1.b7y()(initialValue);
    this.z7z_1 = this.v7z_1.b7y()(targetValue);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_0(initialVelocityVector);
    tmp.a80_1 = tmp1_elvis_lhs == null ? newInstance(this.v7z_1.b7y()(initialValue)) : tmp1_elvis_lhs;
    this.b80_1 = new Long(-1, -1);
    this.c80_1 = null;
  }
  protoOf(TargetBasedAnimation).e80 = function () {
    return this.v7z_1;
  };
  protoOf(TargetBasedAnimation).f80 = function (value) {
    if (!equals(this.w7z_1, value)) {
      this.w7z_1 = value;
      this.z7z_1 = this.v7z_1.b7y()(value);
      this.c80_1 = null;
      this.b80_1 = new Long(-1, -1);
    }
  };
  protoOf(TargetBasedAnimation).g80 = function (value) {
    if (!equals(value, this.x7z_1)) {
      this.x7z_1 = value;
      this.y7z_1 = this.v7z_1.b7y()(value);
      this.c80_1 = null;
      this.b80_1 = new Long(-1, -1);
    }
  };
  protoOf(TargetBasedAnimation).h80 = function () {
    return this.x7z_1;
  };
  protoOf(TargetBasedAnimation).y7y = function () {
    return this.w7z_1;
  };
  protoOf(TargetBasedAnimation).i80 = function () {
    return this.u7z_1.i80();
  };
  protoOf(TargetBasedAnimation).j80 = function (playTimeNanos) {
    var tmp;
    if (!this.l80(playTimeNanos)) {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>' call
      var it = this.u7z_1.k80(playTimeNanos, this.y7z_1, this.z7z_1, this.a80_1);
      var inductionVariable = 0;
      var last = it.c7y();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.core.checkPrecondition' call
          // Inline function 'kotlin.contracts.contract' call
          if (!!isNaN_0(it.d7y(i))) {
            // Inline function 'androidx.compose.animation.core.TargetBasedAnimation.getValueFromNanos.<anonymous>.<anonymous>' call
            var tmp$ret$0 = 'AnimationVector cannot contain a NaN. ' + toString(it) + '. Animation: ' + this.toString() + ',' + (' playTimeNanos: ' + playTimeNanos.toString());
            throwIllegalStateException(tmp$ret$0);
          }
        }
         while (inductionVariable < last);
      tmp = this.v7z_1.f7y()(it);
    } else {
      tmp = this.y7y();
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).m80 = function () {
    if (this.b80_1.a1(new Long(0, 0)) < 0) {
      this.b80_1 = this.u7z_1.n80(this.y7z_1, this.z7z_1, this.a80_1);
    }
    return this.b80_1;
  };
  protoOf(TargetBasedAnimation).o80 = function (playTimeNanos) {
    var tmp;
    if (!this.l80(playTimeNanos)) {
      tmp = this.u7z_1.p80(playTimeNanos, this.y7z_1, this.z7z_1, this.a80_1);
    } else {
      tmp = _get_endVelocity__lqkp53(this);
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).toString = function () {
    return 'TargetBasedAnimation: ' + toString_0(this.h80()) + ' -> ' + toString_0(this.y7y()) + ',' + ('initial velocity: ' + toString(this.a80_1) + ', duration: ' + get_durationMillis(this).toString() + ' ms,') + ('animationSpec: ' + toString(this.u7z_1));
  };
  function Animation() {
  }
  function get_durationMillis(_this__u8e3s4) {
    return _this__u8e3s4.m80().b3(new Long(1000000, 0));
  }
  function TargetBasedAnimation_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocity) {
    return TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, typeConverter.b7y()(initialVelocity));
  }
  var AnimationEndReason_BoundReached_instance;
  var AnimationEndReason_Finished_instance;
  var AnimationEndReason_entriesInitialized;
  function AnimationEndReason_initEntries() {
    if (AnimationEndReason_entriesInitialized)
      return Unit_instance;
    AnimationEndReason_entriesInitialized = true;
    AnimationEndReason_BoundReached_instance = new AnimationEndReason('BoundReached', 0);
    AnimationEndReason_Finished_instance = new AnimationEndReason('Finished', 1);
  }
  function AnimationEndReason(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimationEndReason_BoundReached_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_BoundReached_instance;
  }
  function AnimationEndReason_Finished_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_Finished_instance;
  }
  function SpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    var tmp;
    if (dampingRatio === VOID) {
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    this.q80_1 = dampingRatio;
    this.r80_1 = stiffness;
    this.s80_1 = visibilityThreshold;
  }
  protoOf(SpringSpec).t7z = function (converter) {
    return VectorizedSpringSpec_init_$Create$(this.q80_1, this.r80_1, convert(converter, this.s80_1));
  };
  protoOf(SpringSpec).equals = function (other) {
    var tmp;
    if (other instanceof SpringSpec) {
      tmp = (other.q80_1 === this.q80_1 && other.r80_1 === this.r80_1 && equals(other.s80_1, this.s80_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SpringSpec).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.s80_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return imul(imul(tmp$ret$0, 31) + getNumberHashCode(this.q80_1) | 0, 31) + getNumberHashCode(this.r80_1) | 0;
  };
  function spring(dampingRatio, stiffness, visibilityThreshold) {
    var tmp;
    if (dampingRatio === VOID) {
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    return new SpringSpec(dampingRatio, stiffness, visibilityThreshold);
  }
  function convert(_this__u8e3s4, data) {
    if (data == null) {
      return null;
    } else {
      return _this__u8e3s4.b7y()(data);
    }
  }
  function delayed(animationSpec, startDelayNanos) {
    return new StartDelayAnimationSpec(animationSpec, startDelayNanos);
  }
  function StartDelayAnimationSpec(animationSpec, startDelayNanos) {
    this.t80_1 = animationSpec;
    this.u80_1 = startDelayNanos;
  }
  protoOf(StartDelayAnimationSpec).t7z = function (converter) {
    var vecSpec = this.t80_1.t7z(converter);
    return new StartDelayVectorizedAnimationSpec(vecSpec, this.u80_1);
  };
  protoOf(StartDelayAnimationSpec).hashCode = function () {
    return imul(31, hashCode(this.t80_1)) + this.u80_1.hashCode() | 0;
  };
  protoOf(StartDelayAnimationSpec).equals = function (other) {
    if (!(other instanceof StartDelayAnimationSpec)) {
      return false;
    }
    return other.u80_1.equals(this.u80_1) && equals(other.t80_1, this.t80_1);
  };
  function StartDelayVectorizedAnimationSpec(vectorizedAnimationSpec, startDelayNanos) {
    this.v80_1 = vectorizedAnimationSpec;
    this.w80_1 = startDelayNanos;
  }
  protoOf(StartDelayVectorizedAnimationSpec).i80 = function () {
    return this.v80_1.i80();
  };
  protoOf(StartDelayVectorizedAnimationSpec).n80 = function (initialValue, targetValue, initialVelocity) {
    return this.v80_1.n80(initialValue, targetValue, initialVelocity).y2(this.w80_1);
  };
  protoOf(StartDelayVectorizedAnimationSpec).p80 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var tmp;
    if (playTimeNanos.a1(this.w80_1) < 0) {
      tmp = initialVelocity;
    } else {
      tmp = this.v80_1.p80(playTimeNanos.z2(this.w80_1), initialValue, targetValue, initialVelocity);
    }
    return tmp;
  };
  protoOf(StartDelayVectorizedAnimationSpec).k80 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var tmp;
    if (playTimeNanos.a1(this.w80_1) < 0) {
      tmp = initialValue;
    } else {
      tmp = this.v80_1.k80(playTimeNanos.z2(this.w80_1), initialValue, targetValue, initialVelocity);
    }
    return tmp;
  };
  protoOf(StartDelayVectorizedAnimationSpec).hashCode = function () {
    return imul(31, hashCode(this.v80_1)) + this.w80_1.hashCode() | 0;
  };
  protoOf(StartDelayVectorizedAnimationSpec).equals = function (other) {
    if (!(other instanceof StartDelayVectorizedAnimationSpec)) {
      return false;
    }
    return other.w80_1.equals(this.w80_1) && equals(other.v80_1, this.v80_1);
  };
  function TweenSpec(durationMillis, delay, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.x80_1 = durationMillis;
    this.y80_1 = delay;
    this.z80_1 = easing;
  }
  protoOf(TweenSpec).t7z = function (converter) {
    return new VectorizedTweenSpec(this.x80_1, this.y80_1, this.z80_1);
  };
  protoOf(TweenSpec).equals = function (other) {
    var tmp;
    if (other instanceof TweenSpec) {
      tmp = (other.x80_1 === this.x80_1 && other.y80_1 === this.y80_1 && equals(other.z80_1, this.z80_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TweenSpec).hashCode = function () {
    return imul(imul(this.x80_1, 31) + hashCode(this.z80_1) | 0, 31) + this.y80_1 | 0;
  };
  function tween(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    return new TweenSpec(durationMillis, delayMillis, easing);
  }
  function createZeroVectorFrom(_this__u8e3s4, value) {
    // Inline function 'kotlin.also' call
    var this_0 = _this__u8e3s4.b7y()(value);
    // Inline function 'androidx.compose.animation.core.createZeroVectorFrom.<anonymous>' call
    this_0.g7y();
    return this_0;
  }
  function AnimationState(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    this.q7x_1 = typeConverter;
    this.r7x_1 = mutableStateOf(initialValue);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_0(initialVelocityVector);
    tmp.s7x_1 = tmp1_elvis_lhs == null ? createZeroVectorFrom(this.q7x_1, initialValue) : tmp1_elvis_lhs;
    this.t7x_1 = lastFrameTimeNanos;
    this.u7x_1 = finishedTimeNanos;
    this.v7x_1 = isRunning;
  }
  protoOf(AnimationState).w7x = function (_set____db54di) {
    var tmp0 = this.r7x_1;
    value$factory();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationState).v = function () {
    var tmp0 = this.r7x_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    value$factory_0();
    return tmp0.v();
  };
  protoOf(AnimationState).l7z = function () {
    return this.q7x_1.f7y()(this.s7x_1);
  };
  protoOf(AnimationState).toString = function () {
    return 'AnimationState(' + ('value=' + toString_0(this.v()) + ', ') + ('velocity=' + toString_0(this.l7z()) + ', ') + ('isRunning=' + this.v7x_1 + ', ') + ('lastFrameTimeNanos=' + this.t7x_1.toString() + ', ') + ('finishedTimeNanos=' + this.u7x_1.toString()) + ')';
  };
  function AnimationScope(initialValue, typeConverter, initialVelocityVector, lastFrameTimeNanos, targetValue, startTimeNanos, isRunning, onCancel) {
    this.h7x_1 = typeConverter;
    this.i7x_1 = targetValue;
    this.j7x_1 = startTimeNanos;
    this.k7x_1 = onCancel;
    this.l7x_1 = mutableStateOf(initialValue);
    this.m7x_1 = copy_0(initialVelocityVector);
    this.n7x_1 = lastFrameTimeNanos;
    this.o7x_1 = new Long(0, -2147483648);
    this.p7x_1 = mutableStateOf(isRunning);
  }
  protoOf(AnimationScope).w7x = function (_set____db54di) {
    var tmp0 = this.l7x_1;
    value$factory_1();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationScope).v = function () {
    var tmp0 = this.l7x_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    value$factory_2();
    return tmp0.v();
  };
  protoOf(AnimationScope).a81 = function (_set____db54di) {
    var tmp0 = this.p7x_1;
    isRunning$factory_1();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationScope).m7z = function () {
    var tmp0 = this.p7x_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    isRunning$factory_2();
    return tmp0.v();
  };
  protoOf(AnimationScope).x7x = function () {
    this.a81(false);
    this.k7x_1();
  };
  function copy(_this__u8e3s4, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.v() : value;
    velocityVector = velocityVector === VOID ? copy_0(_this__u8e3s4.s7x_1) : velocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.t7x_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.u7x_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.v7x_1 : isRunning;
    return new AnimationState(_this__u8e3s4.q7x_1, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function value$factory() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.v();
    }, function (receiver, value) {
      return receiver.w7x(value);
    });
  }
  function value$factory_0() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.v();
    }, function (receiver, value) {
      return receiver.w7x(value);
    });
  }
  function value$factory_1() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.v();
    }, function (receiver, value) {
      return receiver.w7x(value);
    });
  }
  function value$factory_2() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.v();
    }, function (receiver, value) {
      return receiver.w7x(value);
    });
  }
  function isRunning$factory_1() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.m7z();
    }, function (receiver, value) {
      return receiver.a81(value);
    });
  }
  function isRunning$factory_2() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.m7z();
    }, function (receiver, value) {
      return receiver.a81(value);
    });
  }
  function AnimationVector1D(initVal) {
    AnimationVector_3.call(this);
    this.b81_1 = initVal;
    this.c81_1 = 1;
  }
  protoOf(AnimationVector1D).g7y = function () {
    this.b81_1 = 0.0;
  };
  protoOf(AnimationVector1D).d81 = function () {
    return new AnimationVector1D(0.0);
  };
  protoOf(AnimationVector1D).d7y = function (index) {
    if (index === 0) {
      return this.b81_1;
    } else {
      return 0.0;
    }
  };
  protoOf(AnimationVector1D).e7y = function (index, value) {
    if (index === 0) {
      this.b81_1 = value;
    }
  };
  protoOf(AnimationVector1D).c7y = function () {
    return this.c81_1;
  };
  protoOf(AnimationVector1D).toString = function () {
    return 'AnimationVector1D: value = ' + this.b81_1;
  };
  protoOf(AnimationVector1D).equals = function (other) {
    var tmp;
    if (other instanceof AnimationVector1D) {
      tmp = other.b81_1 === this.b81_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector1D).hashCode = function () {
    return getNumberHashCode(this.b81_1);
  };
  function AnimationVector(v1) {
    return new AnimationVector1D(v1);
  }
  function AnimationVector2D(v1, v2) {
    AnimationVector_3.call(this);
    this.e81_1 = v1;
    this.f81_1 = v2;
    this.g81_1 = 2;
  }
  protoOf(AnimationVector2D).g7y = function () {
    this.e81_1 = 0.0;
    this.f81_1 = 0.0;
  };
  protoOf(AnimationVector2D).d81 = function () {
    return new AnimationVector2D(0.0, 0.0);
  };
  protoOf(AnimationVector2D).d7y = function (index) {
    switch (index) {
      case 0:
        return this.e81_1;
      case 1:
        return this.f81_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector2D).e7y = function (index, value) {
    if (index === 0)
      this.e81_1 = value;
    else if (index === 1)
      this.f81_1 = value;
  };
  protoOf(AnimationVector2D).c7y = function () {
    return this.g81_1;
  };
  protoOf(AnimationVector2D).toString = function () {
    return 'AnimationVector2D: v1 = ' + this.e81_1 + ', v2 = ' + this.f81_1;
  };
  protoOf(AnimationVector2D).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AnimationVector2D) {
      tmp_0 = other.e81_1 === this.e81_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.f81_1 === this.f81_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector2D).hashCode = function () {
    return imul(getNumberHashCode(this.e81_1), 31) + getNumberHashCode(this.f81_1) | 0;
  };
  function AnimationVector_0(v1, v2) {
    return new AnimationVector2D(v1, v2);
  }
  function AnimationVector3D(v1, v2, v3) {
    AnimationVector_3.call(this);
    this.h81_1 = v1;
    this.i81_1 = v2;
    this.j81_1 = v3;
    this.k81_1 = 3;
  }
  protoOf(AnimationVector3D).g7y = function () {
    this.h81_1 = 0.0;
    this.i81_1 = 0.0;
    this.j81_1 = 0.0;
  };
  protoOf(AnimationVector3D).d81 = function () {
    return new AnimationVector3D(0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector3D).d7y = function (index) {
    switch (index) {
      case 0:
        return this.h81_1;
      case 1:
        return this.i81_1;
      case 2:
        return this.j81_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector3D).e7y = function (index, value) {
    switch (index) {
      case 0:
        this.h81_1 = value;
        break;
      case 1:
        this.i81_1 = value;
        break;
      case 2:
        this.j81_1 = value;
        break;
    }
  };
  protoOf(AnimationVector3D).c7y = function () {
    return this.k81_1;
  };
  protoOf(AnimationVector3D).toString = function () {
    return 'AnimationVector3D: v1 = ' + this.h81_1 + ', v2 = ' + this.i81_1 + ', v3 = ' + this.j81_1;
  };
  protoOf(AnimationVector3D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof AnimationVector3D) {
      tmp_1 = other.h81_1 === this.h81_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.i81_1 === this.i81_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.j81_1 === this.j81_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector3D).hashCode = function () {
    return imul(imul(getNumberHashCode(this.h81_1), 31) + getNumberHashCode(this.i81_1) | 0, 31) + getNumberHashCode(this.j81_1) | 0;
  };
  function AnimationVector_1(v1, v2, v3) {
    return new AnimationVector3D(v1, v2, v3);
  }
  function AnimationVector4D(v1, v2, v3, v4) {
    AnimationVector_3.call(this);
    this.l81_1 = v1;
    this.m81_1 = v2;
    this.n81_1 = v3;
    this.o81_1 = v4;
    this.p81_1 = 4;
  }
  protoOf(AnimationVector4D).g7y = function () {
    this.l81_1 = 0.0;
    this.m81_1 = 0.0;
    this.n81_1 = 0.0;
    this.o81_1 = 0.0;
  };
  protoOf(AnimationVector4D).d81 = function () {
    return new AnimationVector4D(0.0, 0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector4D).d7y = function (index) {
    switch (index) {
      case 0:
        return this.l81_1;
      case 1:
        return this.m81_1;
      case 2:
        return this.n81_1;
      case 3:
        return this.o81_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector4D).e7y = function (index, value) {
    switch (index) {
      case 0:
        this.l81_1 = value;
        break;
      case 1:
        this.m81_1 = value;
        break;
      case 2:
        this.n81_1 = value;
        break;
      case 3:
        this.o81_1 = value;
        break;
    }
  };
  protoOf(AnimationVector4D).c7y = function () {
    return this.p81_1;
  };
  protoOf(AnimationVector4D).toString = function () {
    return 'AnimationVector4D: v1 = ' + this.l81_1 + ', v2 = ' + this.m81_1 + ', v3 = ' + this.n81_1 + ', v4 = ' + this.o81_1;
  };
  protoOf(AnimationVector4D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof AnimationVector4D) {
      tmp_2 = other.l81_1 === this.l81_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.m81_1 === this.m81_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.n81_1 === this.n81_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.o81_1 === this.o81_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector4D).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.l81_1), 31) + getNumberHashCode(this.m81_1) | 0, 31) + getNumberHashCode(this.n81_1) | 0, 31) + getNumberHashCode(this.o81_1) | 0;
  };
  function AnimationVector_2(v1, v2, v3, v4) {
    return new AnimationVector4D(v1, v2, v3, v4);
  }
  function AnimationVector_3() {
  }
  function newInstance(_this__u8e3s4) {
    var tmp = _this__u8e3s4.d81();
    return tmp instanceof AnimationVector_3 ? tmp : THROW_CCE();
  }
  function copy_0(_this__u8e3s4) {
    var newVector = newInstance(_this__u8e3s4);
    var inductionVariable = 0;
    var last = newVector.c7y();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.e7y(i, _this__u8e3s4.d7y(i));
      }
       while (inductionVariable < last);
    return newVector;
  }
  function copyFrom(_this__u8e3s4, source) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.c7y();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.e7y(i, source.d7y(i));
      }
       while (inductionVariable < last);
  }
  function access$_get__real__hax6q4($this) {
    return $this.q81_1;
  }
  function access$_set__real__eq79rc($this, _set____db54di) {
    $this.q81_1 = _set____db54di;
    return Unit_instance;
  }
  function access$_get__imaginary__4kix73($this) {
    return $this.r81_1;
  }
  function access$_set__imaginary__ahpny5($this, _set____db54di) {
    $this.r81_1 = _set____db54di;
    return Unit_instance;
  }
  function ComplexDouble(_real, _imaginary) {
    this.q81_1 = _real;
    this.r81_1 = _imaginary;
  }
  protoOf(ComplexDouble).s81 = function () {
    return this.q81_1;
  };
  protoOf(ComplexDouble).t81 = function () {
    return this.r81_1;
  };
  protoOf(ComplexDouble).toString = function () {
    return 'ComplexDouble(_real=' + this.q81_1 + ', _imaginary=' + this.r81_1 + ')';
  };
  protoOf(ComplexDouble).hashCode = function () {
    var result = getNumberHashCode(this.q81_1);
    result = imul(result, 31) + getNumberHashCode(this.r81_1) | 0;
    return result;
  };
  protoOf(ComplexDouble).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ComplexDouble))
      return false;
    var tmp0_other_with_cast = other instanceof ComplexDouble ? other : THROW_CCE();
    if (!equals(this.q81_1, tmp0_other_with_cast.q81_1))
      return false;
    if (!equals(this.r81_1, tmp0_other_with_cast.r81_1))
      return false;
    return true;
  };
  function complexSqrt(num) {
    var tmp;
    if (num < 0.0) {
      // Inline function 'kotlin.math.abs' call
      // Inline function 'kotlin.math.sqrt' call
      var x = Math.abs(num);
      var tmp$ret$1 = Math.sqrt(x);
      tmp = new ComplexDouble(0.0, tmp$ret$1);
    } else {
      // Inline function 'kotlin.math.sqrt' call
      var tmp$ret$2 = Math.sqrt(num);
      tmp = new ComplexDouble(tmp$ret$2, 0.0);
    }
    return tmp;
  }
  function get_FastOutSlowInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return FastOutSlowInEasing;
  }
  var FastOutSlowInEasing;
  var LinearOutSlowInEasing;
  var FastOutLinearInEasing;
  function get_LinearEasing() {
    _init_properties_Easing_kt__v6fq45();
    return LinearEasing;
  }
  var LinearEasing;
  function Easing() {
  }
  function throwNoSolution($this, fraction) {
    throw IllegalArgumentException_init_$Create$('The cubic curve with parameters (' + $this.v81_1 + ', ' + $this.w81_1 + ', ' + $this.x81_1 + ', ' + $this.y81_1 + ') has no solution at ' + fraction);
  }
  function CubicBezierEasing(a, b, c, d) {
    this.v81_1 = a;
    this.w81_1 = b;
    this.x81_1 = c;
    this.y81_1 = d;
    // Inline function 'androidx.compose.animation.core.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!isNaN_0(this.v81_1) && !isNaN_0(this.w81_1) && !isNaN_0(this.x81_1) && !isNaN_0(this.y81_1))) {
      // Inline function 'androidx.compose.animation.core.CubicBezierEasing.<anonymous>' call
      var tmp$ret$0 = 'Parameters to CubicBezierEasing cannot be NaN. Actual parameters are: ' + this.v81_1 + ', ' + this.w81_1 + ', ' + this.x81_1 + ', ' + this.y81_1 + '.';
      throwIllegalArgumentException(tmp$ret$0);
    }
    var roots = new Float32Array(5);
    var extrema = computeCubicVerticalBounds(0.0, this.w81_1, this.y81_1, 1.0, roots, 0);
    var tmp = this;
    // Inline function 'androidx.collection.FloatFloatPair.first' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _FloatFloatPair___get_packedValue__impl__5lczxp(extrema).i3(32).f1();
    tmp.z81_1 = floatFromBits(bits);
    var tmp_0 = this;
    // Inline function 'androidx.collection.FloatFloatPair.second' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _FloatFloatPair___get_packedValue__impl__5lczxp(extrema).k3(new Long(-1, 0)).f1();
    tmp_0.a82_1 = floatFromBits(bits_0);
  }
  protoOf(CubicBezierEasing).u81 = function (fraction) {
    var tmp;
    if (fraction > 0.0 && fraction < 1.0) {
      var t = findFirstCubicRoot(0.0 - fraction, this.v81_1 - fraction, this.x81_1 - fraction, 1.0 - fraction);
      if (isNaN_0(t)) {
        throwNoSolution(this, fraction);
      }
      var tmp0 = evaluateCubic(this.w81_1, this.y81_1, t);
      var tmp1 = this.z81_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue = this.a82_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_0 = tmp0 < tmp1 ? tmp1 : tmp0;
      tmp = this_0 > maximumValue ? maximumValue : this_0;
    } else {
      tmp = fraction;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof CubicBezierEasing) {
      tmp_2 = this.v81_1 === other.v81_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.w81_1 === other.w81_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.x81_1 === other.x81_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.y81_1 === other.y81_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.v81_1), 31) + getNumberHashCode(this.w81_1) | 0, 31) + getNumberHashCode(this.x81_1) | 0, 31) + getNumberHashCode(this.y81_1) | 0;
  };
  protoOf(CubicBezierEasing).toString = function () {
    return 'CubicBezierEasing(a=' + this.v81_1 + ', b=' + this.w81_1 + ', c=' + this.x81_1 + ', d=' + this.y81_1 + ')';
  };
  function sam$androidx_compose_animation_core_Easing$0(function_0) {
    this.b82_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0).u81 = function (fraction) {
    return this.b82_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0).q3 = function () {
    return this.b82_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function LinearEasing$lambda(fraction) {
    _init_properties_Easing_kt__v6fq45();
    return fraction;
  }
  var properties_initialized_Easing_kt_af4f4d;
  function _init_properties_Easing_kt__v6fq45() {
    if (!properties_initialized_Easing_kt_af4f4d) {
      properties_initialized_Easing_kt_af4f4d = true;
      FastOutSlowInEasing = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
      LinearOutSlowInEasing = new CubicBezierEasing(0.0, 0.0, 0.2, 1.0);
      FastOutLinearInEasing = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
      var tmp = LinearEasing$lambda;
      LinearEasing = new sam$androidx_compose_animation_core_Easing$0(tmp);
    }
  }
  function FloatAnimationSpec() {
  }
  function FloatSpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    var tmp;
    if (dampingRatio === VOID) {
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    var tmp_1;
    if (visibilityThreshold === VOID) {
      tmp_1 = 0.01;
    } else {
      tmp_1 = visibilityThreshold;
    }
    visibilityThreshold = tmp_1;
    this.h82_1 = dampingRatio;
    this.i82_1 = stiffness;
    this.j82_1 = visibilityThreshold;
    var tmp_2 = this;
    // Inline function 'kotlin.also' call
    var this_0 = new SpringSimulation(1.0);
    // Inline function 'androidx.compose.animation.core.FloatSpringSpec.spring.<anonymous>' call
    this_0.s82(this.h82_1);
    this_0.t82(this.i82_1);
    tmp_2.k82_1 = this_0;
  }
  protoOf(FloatSpringSpec).c82 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.b3(new Long(1000000, 0));
    this.k82_1.l82_1 = targetValue;
    var value = _Motion___get_value__impl__e0x31d(this.k82_1.u82(initialValue, initialVelocity, playTimeMillis));
    return value;
  };
  protoOf(FloatSpringSpec).d82 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = playTimeNanos.b3(new Long(1000000, 0));
    this.k82_1.l82_1 = targetValue;
    var velocity = _Motion___get_velocity__impl__h2mglt(this.k82_1.u82(initialValue, initialVelocity, playTimeMillis));
    return velocity;
  };
  protoOf(FloatSpringSpec).e82 = function (initialValue, targetValue, initialVelocity) {
    return 0.0;
  };
  protoOf(FloatSpringSpec).f82 = function (initialValue, targetValue, initialVelocity) {
    var tmp0_stiffness = this.k82_1.v82();
    var tmp1_dampingRatio = this.k82_1.r82_1;
    var tmp2_initialDisplacement = (initialValue - targetValue) / this.j82_1;
    var tmp3_initialVelocity = initialVelocity / this.j82_1;
    return estimateAnimationDurationMillis(tmp0_stiffness, tmp1_dampingRatio, tmp3_initialVelocity, tmp2_initialDisplacement, 1.0).a3(new Long(1000000, 0));
  };
  protoOf(FloatSpringSpec).t7z = function (converter) {
    return this.g82(converter);
  };
  function clampPlayTimeNanos($this, playTimeNanos) {
    return coerceIn_0(playTimeNanos.z2($this.a83_1), new Long(0, 0), $this.z82_1);
  }
  function FloatTweenSpec(duration, delay, easing) {
    duration = duration === VOID ? 300 : duration;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.w82_1 = duration;
    this.x82_1 = delay;
    this.y82_1 = easing;
    this.z82_1 = numberToLong(this.w82_1).a3(new Long(1000000, 0));
    this.a83_1 = numberToLong(this.x82_1).a3(new Long(1000000, 0));
  }
  protoOf(FloatTweenSpec).c82 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var clampedPlayTimeNanos = clampPlayTimeNanos(this, playTimeNanos);
    var tmp;
    if (this.w82_1 === 0) {
      tmp = 1.0;
    } else {
      // Inline function 'kotlin.Long.div' call
      var other = this.z82_1.o3();
      tmp = clampedPlayTimeNanos.o3() / other;
    }
    var rawFraction = tmp;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = rawFraction < 0.0 ? 0.0 : rawFraction;
    var tmp$ret$3 = this_0 > 1.0 ? 1.0 : this_0;
    var fraction = this.y82_1.u81(tmp$ret$3);
    return lerp(initialValue, targetValue, fraction);
  };
  protoOf(FloatTweenSpec).f82 = function (initialValue, targetValue, initialVelocity) {
    return numberToLong(this.x82_1 + this.w82_1 | 0).a3(new Long(1000000, 0));
  };
  protoOf(FloatTweenSpec).d82 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var clampedPlayTimeNanos = clampPlayTimeNanos(this, playTimeNanos);
    if (clampedPlayTimeNanos.a1(new Long(0, 0)) < 0) {
      return 0.0;
    } else if (clampedPlayTimeNanos.equals(new Long(0, 0))) {
      return initialVelocity;
    }
    var startNum = this.c82(clampedPlayTimeNanos.z2(new Long(1000000, 0)), initialValue, targetValue, initialVelocity);
    var endNum = this.c82(clampedPlayTimeNanos, initialValue, targetValue, initialVelocity);
    return (endNum - startNum) * 1000.0;
  };
  protoOf(FloatTweenSpec).t7z = function (converter) {
    return this.g82(converter);
  };
  function withInfiniteAnimationFrameNanos(onFrame, $completion) {
    var tmp = new $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation) {
    this.u83_1 = $onFrame;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withInfiniteAnimationFrameNanos$slambda).c4w = function ($completion) {
    var tmp = this.b4w($completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(withInfiniteAnimationFrameNanos$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = withFrameNanos(this.u83_1, this);
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
  protoOf(withInfiniteAnimationFrameNanos$slambda).b4w = function (completion) {
    return new withInfiniteAnimationFrameNanos$slambda(this.u83_1, completion);
  };
  function withInfiniteAnimationFrameNanos$slambda_0($onFrame, resultContinuation) {
    var i = new withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation);
    var l = function ($completion) {
      return i.c4w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $withInfiniteAnimationFrameNanosCOROUTINE$0(onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j83_1 = onFrame;
  }
  protoOf($withInfiniteAnimationFrameNanosCOROUTINE$0).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 4;
            var tmp_0 = this;
            tmp_0.k83_1 = this.n9().u9(Key_instance);
            if (this.k83_1 == null) {
              this.h9_1 = 2;
              suspendResult = withFrameNanos(this.j83_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 1;
              suspendResult = this.k83_1.v83(withInfiniteAnimationFrameNanos$slambda_0(this.j83_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.l83_1 = suspendResult;
            this.h9_1 = 3;
            continue $sm;
          case 2:
            this.l83_1 = suspendResult;
            this.h9_1 = 3;
            continue $sm;
          case 3:
            return this.l83_1;
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
  function Mutator(priority, job) {
    this.w83_1 = priority;
    this.x83_1 = job;
  }
  protoOf(Mutator).y83 = function (other) {
    return this.w83_1.t2(other.w83_1) >= 0;
  };
  protoOf(Mutator).z83 = function () {
    return this.x83_1.bx(new MutationInterruptedException());
  };
  function tryMutateOrCancel($this, mutator) {
    $l$loop: while (true) {
      var oldMutator = $this.y7x_1.h12();
      if (oldMutator == null || mutator.y83(oldMutator)) {
        if ($this.y7x_1.u2b(oldMutator, mutator)) {
          if (oldMutator == null)
            null;
          else {
            oldMutator.z83();
          }
          break $l$loop;
        }
      } else
        throw CancellationException_init_$Create$('Current mutation had a higher priority');
    }
  }
  function MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation) {
    this.j84_1 = $priority;
    this.k84_1 = this$0;
    this.l84_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutatorMutex$mutate$slambda).t84 = function ($this$coroutineScope, $completion) {
    var tmp = this.s1m($this$coroutineScope, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(MutatorMutex$mutate$slambda).ba = function (p1, $completion) {
    return this.t84((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutatorMutex$mutate$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 9;
            this.n84_1 = new Mutator(this.j84_1, ensureNotNull(this.m84_1.sv().u9(Key_instance_0)));
            tryMutateOrCancel(this.k84_1, this.n84_1);
            var tmp_0 = this;
            tmp_0.o84_1 = this.k84_1.z7x_1;
            this.p84_1 = this.o84_1;
            var tmp_1 = this;
            tmp_1.q84_1 = null;
            this.h9_1 = 1;
            suspendResult = this.p84_1.m1o(this.q84_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.r84_1 = Unit_instance;
            this.h9_1 = 2;
            continue $sm;
          case 2:
            this.i9_1 = 8;
            this.h9_1 = 3;
            continue $sm;
          case 3:
            this.i9_1 = 7;
            this.h9_1 = 4;
            suspendResult = this.l84_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.s84_1 = suspendResult;
            this.h9_1 = 5;
            continue $sm;
          case 5:
            var tmp_2 = this.s84_1;
            this.i9_1 = 8;
            this.k84_1.y7x_1.u2b(this.n84_1, null);
            this.r84_1 = tmp_2;
            this.i9_1 = 9;
            this.h9_1 = 6;
            continue $sm;
          case 6:
            var tmp_3 = this.r84_1;
            this.i9_1 = 9;
            this.p84_1.o1o(this.q84_1);
            return tmp_3;
          case 7:
            this.i9_1 = 8;
            var t = this.k9_1;
            this.k84_1.y7x_1.u2b(this.n84_1, null);
            throw t;
          case 8:
            this.i9_1 = 9;
            var t_0 = this.k9_1;
            this.p84_1.o1o(this.q84_1);
            throw t_0;
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
  protoOf(MutatorMutex$mutate$slambda).s1m = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutate$slambda(this.j84_1, this.k84_1, this.l84_1, completion);
    i.m84_1 = $this$coroutineScope;
    return i;
  };
  function MutatorMutex$mutate$slambda_0($priority, this$0, $block, resultContinuation) {
    var i = new MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.t84($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutatorMutex() {
    this.y7x_1 = new AtomicReference(null);
    this.z7x_1 = Mutex();
  }
  protoOf(MutatorMutex).u84 = function (priority, block, $completion) {
    return coroutineScope(MutatorMutex$mutate$slambda_0(priority, this, block, null), $completion);
  };
  protoOf(MutatorMutex).a7y = function (priority, block, $completion, $super) {
    priority = priority === VOID ? MutatePriority_Default_getInstance() : priority;
    return $super === VOID ? this.u84(priority, block, $completion) : $super.u84.call(this, priority, block, $completion);
  };
  var MutatePriority_Default_instance;
  var MutatePriority_UserInput_instance;
  var MutatePriority_PreventUserInput_instance;
  var MutatePriority_entriesInitialized;
  function MutatePriority_initEntries() {
    if (MutatePriority_entriesInitialized)
      return Unit_instance;
    MutatePriority_entriesInitialized = true;
    MutatePriority_Default_instance = new MutatePriority('Default', 0);
    MutatePriority_UserInput_instance = new MutatePriority('UserInput', 1);
    MutatePriority_PreventUserInput_instance = new MutatePriority('PreventUserInput', 2);
  }
  function MutatePriority(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MutationInterruptedException() {
    PlatformOptimizedCancellationException.call(this, 'Mutation interrupted');
    captureStack(this, MutationInterruptedException);
  }
  function MutatePriority_Default_getInstance() {
    MutatePriority_initEntries();
    return MutatePriority_Default_instance;
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function estimateAnimationDurationMillis(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    if (dampingRatio === 0.0) {
      return new Long(2077252342, 2147);
    }
    return estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    var tmp = 2.0 * dampingRatio;
    // Inline function 'kotlin.math.sqrt' call
    var dampingCoefficient = tmp * Math.sqrt(stiffness);
    var partialRoot = dampingCoefficient * dampingCoefficient - 4.0 * stiffness;
    var tmp1 = -dampingCoefficient;
    // Inline function 'androidx.compose.animation.core.plus' call
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    var this_0 = complexSqrt(partialRoot);
    access$_set__real__eq79rc(this_0, access$_get__real__hax6q4(this_0) + tmp1);
    // Inline function 'androidx.compose.animation.core.ComplexDouble.times' call
    access$_set__real__eq79rc(this_0, access$_get__real__hax6q4(this_0) * 0.5);
    access$_set__imaginary__ahpny5(this_0, access$_get__imaginary__4kix73(this_0) * 0.5);
    var firstRoot = this_0;
    var tmp5 = -dampingCoefficient;
    // Inline function 'androidx.compose.animation.core.minus' call
    // Inline function 'androidx.compose.animation.core.ComplexDouble.unaryMinus' call
    var this_1 = complexSqrt(partialRoot);
    access$_set__real__eq79rc(this_1, access$_get__real__hax6q4(this_1) * -1);
    access$_set__imaginary__ahpny5(this_1, access$_get__imaginary__4kix73(this_1) * -1);
    // Inline function 'androidx.compose.animation.core.plus' call
    // Inline function 'androidx.compose.animation.core.ComplexDouble.plus' call
    access$_set__real__eq79rc(this_1, access$_get__real__hax6q4(this_1) + tmp5);
    // Inline function 'androidx.compose.animation.core.ComplexDouble.times' call
    access$_set__real__eq79rc(this_1, access$_get__real__hax6q4(this_1) * 0.5);
    access$_set__imaginary__ahpny5(this_1, access$_get__imaginary__4kix73(this_1) * 0.5);
    var secondRoot = this_1;
    return estimateDurationInternal(firstRoot, secondRoot, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateDurationInternal(firstRoot, secondRoot, dampingRatio, initialVelocity, initialPosition, delta) {
    if (initialPosition === 0.0 && initialVelocity === 0.0) {
      return new Long(0, 0);
    }
    var v0 = initialPosition < 0 ? -initialVelocity : initialVelocity;
    // Inline function 'kotlin.math.abs' call
    var p0 = Math.abs(initialPosition);
    return numberToLong((dampingRatio > 1.0 ? estimateOverDamped(firstRoot, secondRoot, p0, v0, delta) : dampingRatio < 1.0 ? estimateUnderDamped(firstRoot, p0, v0, delta) : estimateCriticallyDamped(firstRoot, p0, v0, delta)) * 1000.0);
  }
  function estimateOverDamped(firstRoot, secondRoot, p0, v0, delta) {
    var r1 = firstRoot.s81();
    var r2 = secondRoot.s81();
    var c2 = (r1 * p0 - v0) / (r1 - r2);
    var c1 = p0 - c2;
    // Inline function 'kotlin.math.abs' call
    var x = delta / c1;
    // Inline function 'kotlin.math.ln' call
    var x_0 = Math.abs(x);
    var t1 = Math.log(x_0) / r1;
    // Inline function 'kotlin.math.abs' call
    var x_1 = delta / c2;
    // Inline function 'kotlin.math.ln' call
    var x_2 = Math.abs(x_1);
    var t2 = Math.log(x_2) / r2;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    if (!isFinite(t1)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      if (!isFinite(t2)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    // Inline function 'kotlin.math.ln' call
    var x_3 = c1 * r1 / (-c2 * r2);
    var tInflection = Math.log(x_3) / (r2 - r1);
    var tmp_0;
    if (isNaN_1(tInflection) || tInflection <= 0.0) {
      tmp_0 = -delta;
    } else if (tInflection > 0.0 && -estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) < delta) {
      if (c2 > 0.0 && c1 < 0.0) {
        tCurr = 0.0;
      }
      tmp_0 = -delta;
    } else {
      // Inline function 'kotlin.math.ln' call
      var x_4 = -(c2 * r2 * r2) / (c1 * r1 * r1);
      tCurr = Math.log(x_4) / (r1 - r2);
      tmp_0 = delta;
    }
    var signedDelta = tmp_0;
    var tmp_1 = c1 * r1;
    // Inline function 'kotlin.math.exp' call
    var x_5 = r1 * tCurr;
    var tmp_2 = tmp_1 * Math.exp(x_5);
    var tmp_3 = c2 * r2;
    // Inline function 'kotlin.math.exp' call
    var x_6 = r2 * tCurr;
    // Inline function 'kotlin.math.abs' call
    var x_7 = tmp_2 + tmp_3 * Math.exp(x_6);
    if (Math.abs(x_7) < 1.0E-4) {
      return tCurr;
    }
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 && iterations < 100) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var x_8 = tCurr;
      // Inline function 'androidx.compose.animation.core.estimateOverDamped.<anonymous>' call
      // Inline function 'kotlin.math.exp' call
      var x_9 = r1 * x_8;
      var tmp_4 = c1 * Math.exp(x_9);
      // Inline function 'kotlin.math.exp' call
      var x_10 = r2 * x_8;
      var tmp_5 = tmp_4 + c2 * Math.exp(x_10) + signedDelta;
      // Inline function 'androidx.compose.animation.core.estimateOverDamped.<anonymous>' call
      var tmp_6 = c1 * r1;
      // Inline function 'kotlin.math.exp' call
      var x_11 = r1 * x_8;
      var tmp_7 = tmp_6 * Math.exp(x_11);
      var tmp_8 = c2 * r2;
      // Inline function 'kotlin.math.exp' call
      var x_12 = r2 * x_8;
      tCurr = x_8 - tmp_5 / (tmp_7 + tmp_8 * Math.exp(x_12));
      // Inline function 'kotlin.math.abs' call
      var x_13 = tLast - tCurr;
      tDelta = Math.abs(x_13);
    }
    return tCurr;
  }
  function estimateUnderDamped(firstRoot, p0, v0, delta) {
    var r = firstRoot.s81();
    var c1 = p0;
    var c2 = (v0 - r * c1) / firstRoot.t81();
    // Inline function 'kotlin.math.sqrt' call
    var x = c1 * c1 + c2 * c2;
    var c = Math.sqrt(x);
    // Inline function 'kotlin.math.ln' call
    var x_0 = delta / c;
    return Math.log(x_0) / r;
  }
  function estimateCriticallyDamped(firstRoot, p0, v0, delta) {
    var r = firstRoot.s81();
    var c1 = p0;
    var c2 = v0 - r * c1;
    // Inline function 'kotlin.math.abs' call
    var x = delta / c1;
    // Inline function 'kotlin.math.ln' call
    var x_0 = Math.abs(x);
    var t1 = Math.log(x_0) / r;
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
    // Inline function 'kotlin.math.abs' call
    var x_1 = delta / c2;
    // Inline function 'kotlin.math.ln' call
    var x_2 = Math.abs(x_1);
    var guess = Math.log(x_2);
    var t = guess;
    var inductionVariable = 0;
    if (inductionVariable <= 5)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.math.abs' call
        var x_3 = t / r;
        // Inline function 'kotlin.math.ln' call
        var x_4 = Math.abs(x_3);
        t = guess - Math.log(x_4);
      }
       while (inductionVariable <= 5);
    var t2 = t / r;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    if (!isFinite(t1)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      if (!isFinite(t2)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    var tInflection = -(r * c1 + c2) / (r * c2);
    // Inline function 'kotlin.math.exp' call
    var x_5 = r * tInflection;
    var tmp_0 = c1 * Math.exp(x_5);
    var tmp_1 = c2 * tInflection;
    // Inline function 'kotlin.math.exp' call
    var x_6 = r * tInflection;
    var xInflection = tmp_0 + tmp_1 * Math.exp(x_6);
    var tmp_2;
    if (isNaN_1(tInflection) || tInflection <= 0.0) {
      tmp_2 = -delta;
    } else if (tInflection > 0.0 && -xInflection < delta) {
      if (c2 < 0 && c1 > 0) {
        tCurr = 0.0;
      }
      tmp_2 = -delta;
    } else {
      var tConcavChange = -(2.0 / r) - c1 / c2;
      tCurr = tConcavChange;
      tmp_2 = delta;
    }
    var signedDelta = tmp_2;
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 && iterations < 100) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var x_7 = tCurr;
      // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
      var tmp_3 = c1 + c2 * x_7;
      // Inline function 'kotlin.math.exp' call
      var x_8 = r * x_7;
      var tmp_4 = tmp_3 * Math.exp(x_8) + signedDelta;
      // Inline function 'androidx.compose.animation.core.estimateCriticallyDamped.<anonymous>' call
      var tmp_5 = c2 * (r * x_7 + 1) + c1 * r;
      // Inline function 'kotlin.math.exp' call
      var x_9 = r * x_7;
      tCurr = x_7 - tmp_4 / (tmp_5 * Math.exp(x_9));
      // Inline function 'kotlin.math.abs' call
      var x_10 = tLast - tCurr;
      tDelta = Math.abs(x_10);
    }
    return tCurr;
  }
  function estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) {
    // Inline function 'kotlin.math.exp' call
    var x = r1 * tInflection;
    var tmp = c1 * Math.exp(x);
    // Inline function 'kotlin.math.exp' call
    var x_0 = r2 * tInflection;
    return tmp + c2 * Math.exp(x_0);
  }
  var UNSET;
  function init($this) {
    if ($this.n82_1) {
      return Unit_instance;
    }
    if ($this.l82_1 === UNSET) {
      throw IllegalStateException_init_$Create$('Error: Final position of the spring must be set before the animation starts');
    }
    var dampingRatioSquared = $this.r82_1 * $this.r82_1;
    if ($this.r82_1 > 1) {
      var tmp = $this;
      var tmp_0 = -$this.r82_1 * $this.m82_1;
      var tmp_1 = $this.m82_1;
      // Inline function 'kotlin.math.sqrt' call
      var x = dampingRatioSquared - 1;
      tmp.o82_1 = tmp_0 + tmp_1 * Math.sqrt(x);
      var tmp_2 = $this;
      var tmp_3 = -$this.r82_1 * $this.m82_1;
      var tmp_4 = $this.m82_1;
      // Inline function 'kotlin.math.sqrt' call
      var x_0 = dampingRatioSquared - 1;
      tmp_2.p82_1 = tmp_3 - tmp_4 * Math.sqrt(x_0);
    } else if ($this.r82_1 >= 0 && $this.r82_1 < 1) {
      var tmp_5 = $this;
      var tmp_6 = $this.m82_1;
      // Inline function 'kotlin.math.sqrt' call
      var x_1 = 1 - dampingRatioSquared;
      tmp_5.q82_1 = tmp_6 * Math.sqrt(x_1);
    }
    $this.n82_1 = true;
  }
  function SpringSimulation(finalPosition) {
    this.l82_1 = finalPosition;
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.m82_1 = Math.sqrt(50.0);
    this.n82_1 = false;
    this.o82_1 = 0.0;
    this.p82_1 = 0.0;
    this.q82_1 = 0.0;
    var tmp_0 = this;
    tmp_0.r82_1 = 1.0;
  }
  protoOf(SpringSimulation).t82 = function (value) {
    if (this.v82() <= 0) {
      throw IllegalArgumentException_init_$Create$('Spring stiffness constant must be positive.');
    }
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.m82_1 = Math.sqrt(value);
    this.n82_1 = false;
  };
  protoOf(SpringSimulation).v82 = function () {
    return this.m82_1 * this.m82_1;
  };
  protoOf(SpringSimulation).s82 = function (value) {
    if (value < 0) {
      throw IllegalArgumentException_init_$Create$('Damping ratio must be non-negative');
    }
    this.r82_1 = value;
    this.n82_1 = false;
  };
  protoOf(SpringSimulation).u82 = function (lastDisplacement, lastVelocity, timeElapsed) {
    init(this);
    var adjustedDisplacement = lastDisplacement - this.l82_1;
    // Inline function 'kotlin.Long.div' call
    var deltaT = timeElapsed.p3() / 1000.0;
    var displacement;
    var currentVelocity;
    if (this.r82_1 > 1) {
      var coeffA = adjustedDisplacement - (this.p82_1 * adjustedDisplacement - lastVelocity) / (this.p82_1 - this.o82_1);
      var coeffB = (this.p82_1 * adjustedDisplacement - lastVelocity) / (this.p82_1 - this.o82_1);
      // Inline function 'kotlin.math.exp' call
      var x = this.p82_1 * deltaT;
      var tmp = coeffA * Math.exp(x);
      // Inline function 'kotlin.math.exp' call
      var x_0 = this.o82_1 * deltaT;
      displacement = tmp + coeffB * Math.exp(x_0);
      var tmp_0 = coeffA * this.p82_1;
      // Inline function 'kotlin.math.exp' call
      var x_1 = this.p82_1 * deltaT;
      var tmp_1 = tmp_0 * Math.exp(x_1);
      var tmp_2 = coeffB * this.o82_1;
      // Inline function 'kotlin.math.exp' call
      var x_2 = this.o82_1 * deltaT;
      currentVelocity = tmp_1 + tmp_2 * Math.exp(x_2);
    } else if (this.r82_1 === 1.0) {
      var coeffA_0 = adjustedDisplacement;
      var coeffB_0 = lastVelocity + this.m82_1 * adjustedDisplacement;
      var tmp_3 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      var x_3 = -this.m82_1 * deltaT;
      displacement = tmp_3 * Math.exp(x_3);
      var tmp_4 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      var x_4 = -this.m82_1 * deltaT;
      var tmp_5 = tmp_4 * Math.exp(x_4) * -this.m82_1;
      // Inline function 'kotlin.math.exp' call
      var x_5 = -this.m82_1 * deltaT;
      currentVelocity = tmp_5 + coeffB_0 * Math.exp(x_5);
    } else {
      var cosCoeff = adjustedDisplacement;
      var sinCoeff = 1 / this.q82_1 * (this.r82_1 * this.m82_1 * adjustedDisplacement + lastVelocity);
      // Inline function 'kotlin.math.exp' call
      var x_6 = -this.r82_1 * this.m82_1 * deltaT;
      var tmp_6 = Math.exp(x_6);
      // Inline function 'kotlin.math.cos' call
      var x_7 = this.q82_1 * deltaT;
      var tmp_7 = cosCoeff * Math.cos(x_7);
      // Inline function 'kotlin.math.sin' call
      var x_8 = this.q82_1 * deltaT;
      displacement = tmp_6 * (tmp_7 + sinCoeff * Math.sin(x_8));
      var tmp_8 = displacement * -this.m82_1 * this.r82_1;
      // Inline function 'kotlin.math.exp' call
      var x_9 = -this.r82_1 * this.m82_1 * deltaT;
      var tmp_9 = Math.exp(x_9);
      var tmp_10 = -this.q82_1 * cosCoeff;
      // Inline function 'kotlin.math.sin' call
      var x_10 = this.q82_1 * deltaT;
      var tmp_11 = tmp_10 * Math.sin(x_10);
      var tmp_12 = this.q82_1 * sinCoeff;
      // Inline function 'kotlin.math.cos' call
      var x_11 = this.q82_1 * deltaT;
      currentVelocity = tmp_8 + tmp_9 * (tmp_11 + tmp_12 * Math.cos(x_11));
    }
    var newValue = displacement + this.l82_1;
    var newVelocity = currentVelocity;
    return Motion(newValue, newVelocity);
  };
  function _Motion___init__impl__vk56rv(packedValue) {
    return packedValue;
  }
  function _Motion___get_packedValue__impl__qymh4n($this) {
    return $this;
  }
  function _Motion___get_value__impl__e0x31d($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Motion___get_packedValue__impl__qymh4n($this).i3(32).f1();
    return floatFromBits(bits);
  }
  function _Motion___get_velocity__impl__h2mglt($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Motion___get_packedValue__impl__qymh4n($this).k3(new Long(-1, 0)).f1();
    return floatFromBits(bits);
  }
  function Motion(value, velocity) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(value));
    var v2 = toLong(toRawBits(velocity));
    var tmp$ret$0 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _Motion___init__impl__vk56rv(tmp$ret$0);
  }
  function get_durationScale(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.u9(Key_instance_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v84();
    var scale = tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs;
    // Inline function 'androidx.compose.animation.core.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(scale >= 0.0)) {
      // Inline function 'androidx.compose.animation.core.<get-durationScale>.<anonymous>' call
      var tmp$ret$0 = 'negative scale factor';
      throwIllegalStateException(tmp$ret$0);
    }
    return scale;
  }
  function animate(_this__u8e3s4, animation, startTimeNanos, block, $completion) {
    startTimeNanos = startTimeNanos === VOID ? new Long(0, -2147483648) : startTimeNanos;
    var tmp;
    if (block === VOID) {
      tmp = animate$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp_0 = new $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, $completion);
    tmp_0.j9_1 = Unit_instance;
    tmp_0.k9_1 = null;
    return tmp_0.p9();
  }
  function updateState(_this__u8e3s4, state) {
    state.w7x(_this__u8e3s4.v());
    copyFrom(state.s7x_1, _this__u8e3s4.m7x_1);
    state.u7x_1 = _this__u8e3s4.o7x_1;
    state.t7x_1 = _this__u8e3s4.n7x_1;
    state.v7x_1 = _this__u8e3s4.m7z();
  }
  function callWithFrameNanos(_this__u8e3s4, onFrame, $completion) {
    var tmp = new $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function doAnimationFrameWithScale(_this__u8e3s4, frameTimeNanos, durationScale, anim, state, block) {
    var tmp;
    if (durationScale === 0.0) {
      tmp = anim.m80();
    } else {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = frameTimeNanos.z2(_this__u8e3s4.j7x_1).o3() / durationScale;
      tmp = numberToLong(tmp$ret$0);
    }
    var playTimeNanos = tmp;
    doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block);
  }
  function doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block) {
    _this__u8e3s4.n7x_1 = frameTimeNanos;
    _this__u8e3s4.w7x(anim.j80(playTimeNanos));
    _this__u8e3s4.m7x_1 = anim.o80(playTimeNanos);
    var isLastFrame = anim.l80(playTimeNanos);
    if (isLastFrame) {
      _this__u8e3s4.o7x_1 = _this__u8e3s4.n7x_1;
      _this__u8e3s4.a81(false);
    }
    updateState(_this__u8e3s4, state);
    block(_this__u8e3s4);
  }
  function animate_0(initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    return animate_1(get_VectorConverter(FloatCompanionObject_instance), initialValue, targetValue, initialVelocity, animationSpec, block, $completion);
  }
  function animate_1(typeConverter, initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? null : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    var tmp;
    if (initialVelocity == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.animation.core.animate.<anonymous>' call
      tmp = typeConverter.b7y()(initialVelocity);
    }
    var tmp1_elvis_lhs = tmp;
    var initialVelocityVector = tmp1_elvis_lhs == null ? newInstance(typeConverter.b7y()(initialValue)) : tmp1_elvis_lhs;
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector);
    var tmp_0 = new AnimationState(typeConverter, initialValue, initialVelocityVector);
    return animate(tmp_0, anim, VOID, animate$lambda_3(block, typeConverter), $completion);
  }
  function animate$lambda($this$null) {
    return Unit_instance;
  }
  function animate$lambda$lambda($this_animate) {
    return function () {
      $this_animate.v7x_1 = false;
      return Unit_instance;
    };
  }
  function animate$lambda_0($lateInitScope, $initialValue, $animation, $initialVelocityVector, $durationScale, $this_animate, $block) {
    return function (it) {
      var tmp = $animation.e80();
      var tmp_0 = $animation.y7y();
      // Inline function 'kotlin.apply' call
      var this_0 = new AnimationScope($initialValue, tmp, $initialVelocityVector, it, tmp_0, it, true, animate$lambda$lambda($this_animate));
      // Inline function 'androidx.compose.animation.core.animate.<anonymous>.<anonymous>' call
      doAnimationFrameWithScale(this_0, it, $durationScale, $animation, $this_animate, $block);
      $lateInitScope._v = this_0;
      return Unit_instance;
    };
  }
  function animate$lambda_1($this_animate) {
    return function () {
      $this_animate.v7x_1 = false;
      return Unit_instance;
    };
  }
  function animate$lambda_2($lateInitScope, $durationScale, $animation, $this_animate, $block) {
    return function (it) {
      doAnimationFrameWithScale(ensureNotNull($lateInitScope._v), it, $durationScale, $animation, $this_animate, $block);
      return Unit_instance;
    };
  }
  function callWithFrameNanos$lambda($onFrame) {
    return function (it) {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = it.b3(toLong(1));
      return $onFrame(tmp$ret$0);
    };
  }
  function animate$lambda_3($block, $typeConverter) {
    return function ($this$animate) {
      $block($this$animate.v(), $typeConverter.f7y()($this$animate.m7x_1));
      return Unit_instance;
    };
  }
  function $animateCOROUTINE$1(_this__u8e3s4, animation, startTimeNanos, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e85_1 = _this__u8e3s4;
    this.f85_1 = animation;
    this.g85_1 = startTimeNanos;
    this.h85_1 = block;
  }
  protoOf($animateCOROUTINE$1).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 7;
            this.i85_1 = this.f85_1.j80(new Long(0, 0));
            this.j85_1 = this.f85_1.o80(new Long(0, 0));
            this.k85_1 = {_v: null};
            this.i9_1 = 6;
            if (this.g85_1.equals(new Long(0, -2147483648))) {
              var tmp_0 = this;
              tmp_0.l85_1 = get_durationScale(this.n9());
              this.h9_1 = 1;
              suspendResult = callWithFrameNanos(this.f85_1, animate$lambda_0(this.k85_1, this.i85_1, this.f85_1, this.j85_1, this.l85_1, this.e85_1, this.h85_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.f85_1.e80();
              var tmp_2 = this.f85_1.y7y();
              var this_0 = new AnimationScope(this.i85_1, tmp_1, this.j85_1, this.g85_1, tmp_2, this.g85_1, true, animate$lambda_1(this.e85_1));
              doAnimationFrameWithScale(this_0, this.g85_1, get_durationScale(this.n9()), this.f85_1, this.e85_1, this.h85_1);
              this.k85_1._v = this_0;
              this.h9_1 = 2;
              continue $sm;
            }

          case 1:
            this.h9_1 = 2;
            continue $sm;
          case 2:
            this.h9_1 = 3;
            continue $sm;
          case 3:
            if (!ensureNotNull(this.k85_1._v).m7z()) {
              this.h9_1 = 5;
              continue $sm;
            }

            var tmp_3 = this;
            tmp_3.m85_1 = get_durationScale(this.n9());
            this.h9_1 = 4;
            suspendResult = callWithFrameNanos(this.f85_1, animate$lambda_2(this.k85_1, this.m85_1, this.f85_1, this.e85_1, this.h85_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.h9_1 = 3;
            continue $sm;
          case 5:
            this.i9_1 = 7;
            this.h9_1 = 8;
            continue $sm;
          case 6:
            this.i9_1 = 7;
            var tmp_4 = this.k9_1;
            if (tmp_4 instanceof CancellationException) {
              var e = this.k9_1;
              var tmp0_safe_receiver = this.k85_1._v;
              if (tmp0_safe_receiver != null) {
                tmp0_safe_receiver.a81(false);
              }
              var tmp1_safe_receiver = this.k85_1._v;
              if (equals(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.n7x_1, this.e85_1.t7x_1)) {
                this.e85_1.v7x_1 = false;
              }
              throw e;
            } else {
              throw this.k9_1;
            }

          case 7:
            throw this.k9_1;
          case 8:
            this.i9_1 = 7;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.i9_1 === 7) {
          throw e_0;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e_0;
        }
      }
     while (true);
  };
  function $callWithFrameNanosCOROUTINE$2(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v85_1 = _this__u8e3s4;
    this.w85_1 = onFrame;
  }
  protoOf($callWithFrameNanosCOROUTINE$2).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 4;
            if (this.v85_1.i80()) {
              this.h9_1 = 2;
              suspendResult = withInfiniteAnimationFrameNanos(this.w85_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 1;
              suspendResult = withFrameNanos(callWithFrameNanos$lambda(this.w85_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.x85_1 = suspendResult;
            this.h9_1 = 3;
            continue $sm;
          case 2:
            this.x85_1 = suspendResult;
            this.h9_1 = 3;
            continue $sm;
          case 3:
            return this.x85_1;
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
  function get_SeekableTransitionStateTotalDurationChanged() {
    _init_properties_Transition_kt__s6zoln();
    return SeekableTransitionStateTotalDurationChanged;
  }
  var SeekableTransitionStateTotalDurationChanged;
  function get_SeekableStateObserver() {
    _init_properties_Transition_kt__s6zoln();
    var tmp0 = SeekableStateObserver$delegate;
    // Inline function 'kotlin.getValue' call
    SeekableStateObserver$factory();
    return tmp0.v();
  }
  var SeekableStateObserver$delegate;
  function SeekableTransitionState$seekTo$slambda$slambda$slambda(this$0, resultContinuation) {
    this.g86_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = runAnimations(this.g86_1, this);
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
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).s1m = function ($this$launch, completion) {
    var i = new SeekableTransitionState$seekTo$slambda$slambda$slambda(this.g86_1, completion);
    i.h86_1 = $this$launch;
    return i;
  };
  function SeekableTransitionState$seekTo$slambda$slambda$slambda_0(this$0, resultContinuation) {
    var i = new SeekableTransitionState$seekTo$slambda$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SeekableTransitionState$seekTo$slambda$slambda($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation) {
    this.q86_1 = $targetState;
    this.r86_1 = $oldTargetState;
    this.s86_1 = this$0;
    this.t86_1 = $transition;
    this.u86_1 = $fraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).r1m = function ($this$coroutineScope, $completion) {
    var tmp = this.s1m($this$coroutineScope, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            if (!equals(this.q86_1, this.r86_1)) {
              moveAnimationToInitialState(this.s86_1);
            } else {
              this.s86_1.j87_1 = null;
              if (equals(this.s86_1.w56(), this.q86_1)) {
                return Unit_instance;
              }
            }

            if (!equals(this.q86_1, this.r86_1)) {
              this.t86_1.a88(this.q86_1);
              this.t86_1.b88(new Long(0, 0));
              this.s86_1.c88(this.q86_1);
              this.t86_1.d88(this.u86_1);
            }

            _set_fraction__t78qnf(this.s86_1, this.u86_1);
            if (this.s86_1.i87_1.uq()) {
              launch(this.v86_1, VOID, VOID, SeekableTransitionState$seekTo$slambda$slambda$slambda_0(this.s86_1, null));
            } else {
              this.s86_1.h87_1 = new Long(0, -2147483648);
            }

            this.h9_1 = 1;
            suspendResult = waitForCompositionAfterTargetStateChange(this.s86_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            seekToFraction(this.s86_1);
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
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).s1m = function ($this$coroutineScope, completion) {
    var i = new SeekableTransitionState$seekTo$slambda$slambda(this.q86_1, this.r86_1, this.s86_1, this.t86_1, this.u86_1, completion);
    i.v86_1 = $this$coroutineScope;
    return i;
  };
  function SeekableTransitionState$seekTo$slambda$slambda_0($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation) {
    var i = new SeekableTransitionState$seekTo$slambda$slambda($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.r1m($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SeekableTransitionState$animateTo$slambda$slambda(this$0, $targetState, $transition, $animationSpec, resultContinuation) {
    this.m88_1 = this$0;
    this.n88_1 = $targetState;
    this.o88_1 = $transition;
    this.p88_1 = $animationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).r1m = function ($this$coroutineScope, $completion) {
    var tmp = this.s1m($this$coroutineScope, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 8;
            this.r88_1 = this.m88_1.p56();
            if (!equals(this.n88_1, this.r88_1)) {
              moveAnimationToInitialState(this.m88_1);
              _set_fraction__t78qnf(this.m88_1, 0.0);
              this.o88_1.a88(this.n88_1);
              this.o88_1.b88(new Long(0, 0));
              this.m88_1.w88(this.r88_1);
              this.m88_1.c88(this.n88_1);
            }

            var tmp_0 = this;
            tmp_0.s88_1 = this.m88_1.f87_1;
            this.t88_1 = this.s88_1;
            var tmp_1 = this;
            tmp_1.u88_1 = null;
            this.h9_1 = 1;
            suspendResult = this.t88_1.m1o(this.u88_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_2 = this;
            var tmp$ret$0 = Unit_instance;
            l$ret$1: do {
              var tmp_3;
              try {
                tmp$ret$0 = this.m88_1.z86_1;
                break l$ret$1;
              } catch ($p) {
                var tmp_4;
                var t = $p;
                this.t88_1.o1o(this.u88_1);
                throw t;
              }
            }
             while (false);
            var tmp_5 = tmp$ret$0;
            this.t88_1.o1o(this.u88_1);
            tmp_2.v88_1 = tmp_5;
            if (!equals(this.n88_1, this.v88_1)) {
              this.h9_1 = 2;
              suspendResult = doOneFrame(this.m88_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 4;
              continue $sm;
            }

          case 2:
            this.h9_1 = 3;
            suspendResult = waitForCompositionAfterTargetStateChange(this.m88_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.h9_1 = 4;
            continue $sm;
          case 4:
            if (!equals(this.m88_1.w56(), this.n88_1)) {
              if (this.m88_1.h89() < 1.0) {
                var runningAnimation = this.m88_1.j87_1;
                var tmp0_safe_receiver = this.p88_1;
                var newSpec = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t7z(get_VectorConverter(FloatCompanionObject_instance));
                if (runningAnimation == null || !equals(newSpec, runningAnimation.y88_1)) {
                  var oldSpec = runningAnimation == null ? null : runningAnimation.y88_1;
                  var oldVelocity;
                  if (!(oldSpec == null)) {
                    var tmp_6 = runningAnimation.x88_1;
                    var tmp_7 = runningAnimation.b89_1;
                    var tmp_8 = Companion_getInstance_7().g89_1;
                    var tmp2_elvis_lhs = runningAnimation.c89_1;
                    oldVelocity = oldSpec.p80(tmp_6, tmp_7, tmp_8, tmp2_elvis_lhs == null ? Companion_getInstance_7().f89_1 : tmp2_elvis_lhs);
                  } else if (runningAnimation == null || runningAnimation.x88_1.equals(new Long(0, 0))) {
                    oldVelocity = Companion_getInstance_7().f89_1;
                  } else {
                    var oldDurationNanos = runningAnimation.d89_1;
                    var tmp_9;
                    if (oldDurationNanos.equals(new Long(0, -2147483648))) {
                      tmp_9 = this.m88_1.b87_1;
                    } else {
                      tmp_9 = oldDurationNanos;
                    }
                    var tmp2 = tmp_9;
                    var other = 1000.0 * (new Long(1000000, 0)).o3();
                    var oldDuration = tmp2.o3() / other;
                    if (oldDuration <= (new Long(0, 0)).o3()) {
                      oldVelocity = Companion_getInstance_7().f89_1;
                    } else {
                      oldVelocity = new AnimationVector1D(1.0 / oldDuration);
                    }
                  }
                  var newAnimation = runningAnimation == null ? new SeekingAnimationState() : runningAnimation;
                  newAnimation.y88_1 = newSpec;
                  newAnimation.z88_1 = false;
                  newAnimation.a89_1 = this.m88_1.h89();
                  newAnimation.b89_1.e7y(0, this.m88_1.h89());
                  newAnimation.d89_1 = this.m88_1.b87_1;
                  newAnimation.x88_1 = new Long(0, 0);
                  newAnimation.c89_1 = oldVelocity;
                  var tmp_10 = newAnimation;
                  var tmp5_elvis_lhs = newSpec == null ? null : newSpec.n80(newAnimation.b89_1, Companion_getInstance_7().g89_1, oldVelocity);
                  var tmp_11;
                  if (tmp5_elvis_lhs == null) {
                    var tmp4 = this.m88_1.b87_1;
                    var other_0 = 1.0 - this.m88_1.h89();
                    tmp_11 = roundToLong(tmp4.p3() * other_0);
                  } else {
                    tmp_11 = tmp5_elvis_lhs;
                  }
                  tmp_10.e89_1 = tmp_11;
                  this.m88_1.j87_1 = newAnimation;
                }
              }
              this.h9_1 = 5;
              suspendResult = runAnimations(this.m88_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 7;
              continue $sm;
            }

          case 5:
            this.m88_1.w88(this.n88_1);
            this.h9_1 = 6;
            suspendResult = waitForComposition(this.m88_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            _set_fraction__t78qnf(this.m88_1, 0.0);
            this.h9_1 = 7;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 8) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).s1m = function ($this$coroutineScope, completion) {
    var i = new SeekableTransitionState$animateTo$slambda$slambda(this.m88_1, this.n88_1, this.o88_1, this.p88_1, completion);
    i.q88_1 = $this$coroutineScope;
    return i;
  };
  function SeekableTransitionState$animateTo$slambda$slambda_0(this$0, $targetState, $transition, $animationSpec, resultContinuation) {
    var i = new SeekableTransitionState$animateTo$slambda$slambda(this$0, $targetState, $transition, $animationSpec, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.r1m($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_fraction__t78qnf($this, _set____db54di) {
    var tmp0 = $this.d87_1;
    fraction$factory();
    tmp0.q2n(_set____db54di);
    return Unit_instance;
  }
  function endAllAnimations($this) {
    var tmp0_safe_receiver = $this.a87_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.i89();
    }
    $this.i87_1.f2();
    var current = $this.j87_1;
    if (!(current == null)) {
      $this.j87_1 = null;
      _set_fraction__t78qnf($this, 1.0);
      seekToFraction($this);
    }
  }
  function runAnimations($this, $completion) {
    var tmp = new $runAnimationsCOROUTINE$3($this, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function doOneFrame($this, $completion) {
    var tmp = new $doOneFrameCOROUTINE$4($this, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function animateOneFrame($this, $completion) {
    var tmp = new $animateOneFrameCOROUTINE$5($this, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function recalculateAnimationValue($this, animation, deltaPlayTimeNanos) {
    var playTimeNanos = animation.x88_1.y2(deltaPlayTimeNanos);
    animation.x88_1 = playTimeNanos;
    var durationNanos = animation.e89_1;
    if (playTimeNanos.a1(durationNanos) >= 0) {
      animation.a89_1 = 1.0;
    } else {
      var animationSpec = animation.y88_1;
      if (!(animationSpec == null)) {
        var tmp = animation;
        var tmp_0 = animation.b89_1;
        var tmp_1 = Companion_getInstance_7().g89_1;
        var tmp0_elvis_lhs = animation.c89_1;
        tmp.a89_1 = coerceIn(animationSpec.k80(playTimeNanos, tmp_0, tmp_1, tmp0_elvis_lhs == null ? Companion_getInstance_7().f89_1 : tmp0_elvis_lhs).d7y(0), 0.0, 1.0);
      } else {
        animation.a89_1 = lerp(animation.b89_1.d7y(0), 1.0, playTimeNanos.o3() / durationNanos.o3());
      }
    }
  }
  function waitForCompositionAfterTargetStateChange($this, $completion) {
    var tmp = new $waitForCompositionAfterTargetStateChangeCOROUTINE$6($this, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function waitForComposition($this, $completion) {
    var tmp = new $waitForCompositionCOROUTINE$7($this, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function moveAnimationToInitialState($this) {
    var tmp0_elvis_lhs = $this.a87_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    var tmp1_elvis_lhs = $this.j87_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp_1;
      if ($this.b87_1.a1(new Long(0, 0)) <= 0 || $this.h89() === 1.0 || equals($this.w56(), $this.p56())) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.also' call
        var this_0 = new SeekingAnimationState();
        // Inline function 'androidx.compose.animation.core.SeekableTransitionState.moveAnimationToInitialState.<anonymous>' call
        this_0.a89_1 = $this.h89();
        var totalDurationNanos = $this.b87_1;
        this_0.d89_1 = totalDurationNanos;
        var tmp_2 = this_0;
        // Inline function 'kotlin.Long.times' call
        var other = 1.0 - $this.h89();
        var tmp$ret$0 = totalDurationNanos.p3() * other;
        tmp_2.e89_1 = roundToLong(tmp$ret$0);
        this_0.b89_1.e7y(0, $this.h89());
        tmp_1 = this_0;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var animation = tmp_0;
    if (!(animation == null)) {
      animation.d89_1 = $this.b87_1;
      // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
      $this.i87_1.e(animation);
      transition.f8b(animation);
    }
    $this.j87_1 = null;
  }
  function seekToFraction($this) {
    var tmp0_elvis_lhs = $this.a87_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    var playTimeNanos = roundToLong($this.h89() * transition.g8b().p3());
    transition.h8b(playTimeNanos);
  }
  function SeekingAnimationState() {
    this.x88_1 = new Long(0, 0);
    this.y88_1 = null;
    this.z88_1 = false;
    this.a89_1 = 0.0;
    this.b89_1 = new AnimationVector1D(0.0);
    this.c89_1 = null;
    this.d89_1 = new Long(0, 0);
    this.e89_1 = new Long(0, 0);
  }
  protoOf(SeekingAnimationState).toString = function () {
    return 'progress nanos: ' + this.x88_1.toString() + ', animationSpec: ' + toString_0(this.y88_1) + ',' + (' isComplete: ' + this.z88_1 + ', value: ' + this.a89_1 + ', start: ' + this.b89_1.toString() + ',') + (' initialVelocity: ' + toString_0(this.c89_1) + ', durationNanos: ' + this.d89_1.toString() + ',') + (' animationSpecDuration: ' + this.e89_1.toString());
  };
  function Companion() {
    Companion_instance_0 = this;
    this.f89_1 = new AnimationVector1D(0.0);
    this.g89_1 = new AnimationVector1D(1.0);
  }
  var Companion_instance_0;
  function Companion_getInstance_7() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function SeekableTransitionState$recalculateTotalDurationNanos$lambda(this$0) {
    return function () {
      var tmp = this$0;
      var tmp0_safe_receiver = this$0.a87_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g8b();
      tmp.b87_1 = tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs;
      return Unit_instance;
    };
  }
  function SeekableTransitionState$firstFrameLambda$lambda(this$0) {
    return function (frameTimeNanos) {
      this$0.h87_1 = frameTimeNanos;
      return Unit_instance;
    };
  }
  function SeekableTransitionState$animateOneFrameLambda$lambda(this$0) {
    return function (frameTimeNanos) {
      var delta = frameTimeNanos.z2(this$0.h87_1);
      this$0.h87_1 = frameTimeNanos;
      // Inline function 'kotlin.Long.div' call
      var other = this$0.l87_1;
      var tmp$ret$0 = delta.p3() / other;
      var deltaPlayTimeNanos = roundToLong(tmp$ret$0);
      var tmp;
      if (this$0.i87_1.uq()) {
        // Inline function 'androidx.collection.ObjectList.forEach' call
        var this_0 = this$0.i87_1;
        // Inline function 'kotlin.contracts.contract' call
        var content = this_0.wq_1;
        var inductionVariable = 0;
        var last = this_0.xq_1;
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp_0 = content[i];
            // Inline function 'androidx.compose.animation.core.SeekableTransitionState.animateOneFrameLambda.<anonymous>.<anonymous>' call
            var animation = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
            recalculateAnimationValue(this$0, animation, deltaPlayTimeNanos);
            animation.z88_1 = true;
          }
           while (inductionVariable < last);
        var tmp0_safe_receiver = this$0.a87_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.i8b();
        }
        var this_1 = this$0.i87_1;
        var gap = 0;
        var size = this_1.xq_1;
        var content_0 = this_1.wq_1;
        // Inline function 'androidx.collection.ObjectList.indices' call
        var progression = until(0, this_1.xq_1);
        var inductionVariable_0 = progression.b1_1;
        var last_0 = progression.c1_1;
        if (inductionVariable_0 <= last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            content_0[i_0 - gap | 0] = content_0[i_0];
            var tmp_1 = content_0[i_0];
            // Inline function 'androidx.compose.animation.core.SeekableTransitionState.animateOneFrameLambda.<anonymous>.<anonymous>' call
            if (((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE()).z88_1) {
              gap = gap + 1 | 0;
            }
          }
           while (!(i_0 === last_0));
        fill(content_0, null, size - gap | 0, size);
        this_1.xq_1 = this_1.xq_1 - gap | 0;
        tmp = Unit_instance;
      }
      var currentAnimation = this$0.j87_1;
      var tmp_2;
      if (!(currentAnimation == null)) {
        currentAnimation.d89_1 = this$0.b87_1;
        recalculateAnimationValue(this$0, currentAnimation, deltaPlayTimeNanos);
        _set_fraction__t78qnf(this$0, currentAnimation.a89_1);
        if (currentAnimation.a89_1 === 1.0) {
          this$0.j87_1 = null;
        }
        seekToFraction(this$0);
        tmp_2 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SeekableTransitionState$snapTo$slambda(this$0, $targetState, $transition, resultContinuation) {
    this.r8b_1 = this$0;
    this.s8b_1 = $targetState;
    this.t8b_1 = $transition;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$snapTo$slambda).j7z = function ($completion) {
    var tmp = this.b4w($completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(SeekableTransitionState$snapTo$slambda).c4w = function ($completion) {
    return this.j7z($completion);
  };
  protoOf(SeekableTransitionState$snapTo$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 3;
            endAllAnimations(this.r8b_1);
            this.r8b_1.h87_1 = new Long(0, -2147483648);
            _set_fraction__t78qnf(this.r8b_1, 0.0);
            var tmp_0 = this;
            var tmp0_subject = this.s8b_1;
            tmp_0.u8b_1 = equals(tmp0_subject, this.r8b_1.w56()) ? -4.0 : equals(tmp0_subject, this.r8b_1.p56()) ? -5.0 : -3.0;
            this.t8b_1.a88(this.s8b_1);
            this.t8b_1.b88(new Long(0, 0));
            this.r8b_1.c88(this.s8b_1);
            _set_fraction__t78qnf(this.r8b_1, 0.0);
            this.r8b_1.w88(this.s8b_1);
            this.t8b_1.d88(this.u8b_1);
            if (this.u8b_1 === -3.0) {
              this.h9_1 = 1;
              suspendResult = waitForCompositionAfterTargetStateChange(this.r8b_1, this);
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
            this.t8b_1.v8b();
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
  protoOf(SeekableTransitionState$snapTo$slambda).b4w = function (completion) {
    return new SeekableTransitionState$snapTo$slambda(this.r8b_1, this.s8b_1, this.t8b_1, completion);
  };
  function SeekableTransitionState$snapTo$slambda_0(this$0, $targetState, $transition, resultContinuation) {
    var i = new SeekableTransitionState$snapTo$slambda(this$0, $targetState, $transition, resultContinuation);
    var l = function ($completion) {
      return i.j7z($completion);
    };
    l.$arity = 0;
    return l;
  }
  function SeekableTransitionState$seekTo$slambda($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation) {
    this.e8c_1 = $targetState;
    this.f8c_1 = $oldTargetState;
    this.g8c_1 = this$0;
    this.h8c_1 = $transition;
    this.i8c_1 = $fraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$seekTo$slambda).j7z = function ($completion) {
    var tmp = this.b4w($completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(SeekableTransitionState$seekTo$slambda).c4w = function ($completion) {
    return this.j7z($completion);
  };
  protoOf(SeekableTransitionState$seekTo$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = coroutineScope(SeekableTransitionState$seekTo$slambda$slambda_0(this.e8c_1, this.f8c_1, this.g8c_1, this.h8c_1, this.i8c_1, null), this);
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
  protoOf(SeekableTransitionState$seekTo$slambda).b4w = function (completion) {
    return new SeekableTransitionState$seekTo$slambda(this.e8c_1, this.f8c_1, this.g8c_1, this.h8c_1, this.i8c_1, completion);
  };
  function SeekableTransitionState$seekTo$slambda_0($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation) {
    var i = new SeekableTransitionState$seekTo$slambda($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation);
    var l = function ($completion) {
      return i.j7z($completion);
    };
    l.$arity = 0;
    return l;
  }
  function SeekableTransitionState$animateTo$slambda($transition, this$0, $targetState, $animationSpec, resultContinuation) {
    this.r8c_1 = $transition;
    this.s8c_1 = this$0;
    this.t8c_1 = $targetState;
    this.u8c_1 = $animationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$animateTo$slambda).j7z = function ($completion) {
    var tmp = this.b4w($completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(SeekableTransitionState$animateTo$slambda).c4w = function ($completion) {
    return this.j7z($completion);
  };
  protoOf(SeekableTransitionState$animateTo$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = coroutineScope(SeekableTransitionState$animateTo$slambda$slambda_0(this.s8c_1, this.t8c_1, this.r8c_1, this.u8c_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.r8c_1.v8b();
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
  protoOf(SeekableTransitionState$animateTo$slambda).b4w = function (completion) {
    return new SeekableTransitionState$animateTo$slambda(this.r8c_1, this.s8c_1, this.t8c_1, this.u8c_1, completion);
  };
  function SeekableTransitionState$animateTo$slambda_0($transition, this$0, $targetState, $animationSpec, resultContinuation) {
    var i = new SeekableTransitionState$animateTo$slambda($transition, this$0, $targetState, $animationSpec, resultContinuation);
    var l = function ($completion) {
      return i.j7z($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $runAnimationsCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r89_1 = _this__u8e3s4;
  }
  protoOf($runAnimationsCOROUTINE$3).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 6;
            if (this.r89_1.i87_1.q() && this.r89_1.j87_1 == null) {
              return Unit_instance;
            }

            if (get_durationScale(this.n9()) === 0.0) {
              endAllAnimations(this.r89_1);
              this.r89_1.h87_1 = new Long(0, -2147483648);
              return Unit_instance;
            }

            if (this.r89_1.h87_1.equals(new Long(0, -2147483648))) {
              this.h9_1 = 1;
              suspendResult = withFrameNanos(this.r89_1.k87_1, this);
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
            this.h9_1 = 3;
            continue $sm;
          case 3:
            if (!(this.r89_1.i87_1.uq() || !(this.r89_1.j87_1 == null))) {
              this.h9_1 = 5;
              continue $sm;
            }

            this.h9_1 = 4;
            suspendResult = animateOneFrame(this.r89_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.h9_1 = 3;
            continue $sm;
          case 5:
            this.r89_1.h87_1 = new Long(0, -2147483648);
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
  function $doOneFrameCOROUTINE$4(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a8a_1 = _this__u8e3s4;
  }
  protoOf($doOneFrameCOROUTINE$4).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 4;
            if (this.a8a_1.h87_1.equals(new Long(0, -2147483648))) {
              this.h9_1 = 2;
              suspendResult = withFrameNanos(this.a8a_1.k87_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 1;
              suspendResult = animateOneFrame(this.a8a_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.h9_1 = 3;
            continue $sm;
          case 2:
            this.h9_1 = 3;
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
  function $animateOneFrameCOROUTINE$5(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j8a_1 = _this__u8e3s4;
  }
  protoOf($animateOneFrameCOROUTINE$5).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 3;
            var tmp_0 = this;
            tmp_0.k8a_1 = get_durationScale(this.n9());
            if (this.k8a_1 <= 0.0) {
              endAllAnimations(this.j8a_1);
              this.h9_1 = 2;
              continue $sm;
            } else {
              this.j8a_1.l87_1 = this.k8a_1;
              this.h9_1 = 1;
              suspendResult = withFrameNanos(this.j8a_1.m87_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
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
  function $waitForCompositionAfterTargetStateChangeCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t8a_1 = _this__u8e3s4;
  }
  protoOf($waitForCompositionAfterTargetStateChangeCOROUTINE$6).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 4;
            this.u8a_1 = this.t8a_1.p56();
            this.h9_1 = 1;
            suspendResult = this.t8a_1.f87_1.n1o(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (equals(this.u8a_1, this.t8a_1.z86_1)) {
              this.t8a_1.f87_1.p1o();
              this.h9_1 = 3;
              continue $sm;
            } else {
              this.h9_1 = 2;
              var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
              cancellable.d10();
              this.t8a_1.e87_1 = cancellable;
              this.t8a_1.f87_1.p1o();
              suspendResult = returnIfSuspended(cancellable.vx(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            var state = suspendResult;
            if (!equals(state, this.u8a_1)) {
              this.t8a_1.h87_1 = new Long(0, -2147483648);
              throw CancellationException_init_$Create$('snapTo() was canceled because state was changed to ' + (toString_0(state) + ' instead of ' + toString_0(this.u8a_1)));
            }

            this.h9_1 = 3;
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
  function $waitForCompositionCOROUTINE$7(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d8b_1 = _this__u8e3s4;
  }
  protoOf($waitForCompositionCOROUTINE$7).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 3;
            this.e8b_1 = this.d8b_1.p56();
            this.h9_1 = 1;
            suspendResult = this.d8b_1.f87_1.n1o(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h9_1 = 2;
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.d10();
            this.d8b_1.e87_1 = cancellable;
            this.d8b_1.f87_1.p1o();
            suspendResult = returnIfSuspended(cancellable.vx(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var state = suspendResult;
            if (!equals(state, this.e8b_1)) {
              this.d8b_1.h87_1 = new Long(0, -2147483648);
              throw CancellationException_init_$Create$('targetState while waiting for composition');
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
  function SeekableTransitionState(initialState) {
    Companion_getInstance_7();
    TransitionState.call(this);
    this.x86_1 = mutableStateOf(initialState);
    this.y86_1 = mutableStateOf(initialState);
    this.z86_1 = initialState;
    this.a87_1 = null;
    this.b87_1 = new Long(0, 0);
    var tmp = this;
    tmp.c87_1 = SeekableTransitionState$recalculateTotalDurationNanos$lambda(this);
    this.d87_1 = mutableFloatStateOf(0.0);
    this.e87_1 = null;
    this.f87_1 = Mutex();
    this.g87_1 = new MutatorMutex();
    this.h87_1 = new Long(0, -2147483648);
    this.i87_1 = new MutableObjectList();
    this.j87_1 = null;
    var tmp_0 = this;
    tmp_0.k87_1 = SeekableTransitionState$firstFrameLambda$lambda(this);
    this.l87_1 = 0.0;
    var tmp_1 = this;
    tmp_1.m87_1 = SeekableTransitionState$animateOneFrameLambda$lambda(this);
  }
  protoOf(SeekableTransitionState).c88 = function (_set____db54di) {
    var tmp0 = this.x86_1;
    targetState$factory();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  };
  protoOf(SeekableTransitionState).p56 = function () {
    var tmp0 = this.x86_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    targetState$factory_0();
    return tmp0.v();
  };
  protoOf(SeekableTransitionState).w88 = function (_set____db54di) {
    var tmp0 = this.y86_1;
    currentState$factory();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  };
  protoOf(SeekableTransitionState).w56 = function () {
    var tmp0 = this.y86_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    currentState$factory_0();
    return tmp0.v();
  };
  protoOf(SeekableTransitionState).h89 = function () {
    var tmp0 = this.d87_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    fraction$factory_0();
    return tmp0.r2n();
  };
  protoOf(SeekableTransitionState).v8c = function (targetState, $completion) {
    var tmp0_elvis_lhs = this.a87_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    if (equals(this.w56(), targetState) && equals(this.p56(), targetState)) {
      return Unit_instance;
    }
    return this.g87_1.a7y(VOID, SeekableTransitionState$snapTo$slambda_0(this, targetState, transition, null), $completion);
  };
  protoOf(SeekableTransitionState).w8c = function (fraction, targetState, $completion) {
    // Inline function 'androidx.compose.animation.core.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0.0 <= fraction ? fraction <= 1.0 : false)) {
      // Inline function 'androidx.compose.animation.core.SeekableTransitionState.seekTo.<anonymous>' call
      var tmp$ret$0 = 'Expecting fraction between 0 and 1. Got ' + fraction;
      throwIllegalArgumentException(tmp$ret$0);
    }
    var tmp0_elvis_lhs = this.a87_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    var oldTargetState = this.p56();
    return this.g87_1.a7y(VOID, SeekableTransitionState$seekTo$slambda_0(targetState, oldTargetState, this, transition, fraction, null), $completion);
  };
  protoOf(SeekableTransitionState).x8c = function (fraction, targetState, $completion, $super) {
    targetState = targetState === VOID ? this.p56() : targetState;
    return $super === VOID ? this.w8c(fraction, targetState, $completion) : $super.w8c.call(this, fraction, targetState, $completion);
  };
  protoOf(SeekableTransitionState).y8c = function (targetState, animationSpec, $completion) {
    var tmp0_elvis_lhs = this.a87_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    return this.g87_1.a7y(VOID, SeekableTransitionState$animateTo$slambda_0(transition, this, targetState, animationSpec, null), $completion);
  };
  protoOf(SeekableTransitionState).z8c = function (targetState, animationSpec, $completion, $super) {
    targetState = targetState === VOID ? this.p56() : targetState;
    animationSpec = animationSpec === VOID ? null : animationSpec;
    return $super === VOID ? this.y8c(targetState, animationSpec, $completion) : $super.y8c.call(this, targetState, animationSpec, $completion);
  };
  protoOf(SeekableTransitionState).a8d = function (transition) {
    // Inline function 'androidx.compose.animation.core.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.a87_1 == null || equals(transition, this.a87_1))) {
      // Inline function 'androidx.compose.animation.core.SeekableTransitionState.transitionConfigured.<anonymous>' call
      var tmp$ret$0 = 'An instance of SeekableTransitionState has been used in different Transitions. ' + ('Previous instance: ' + toString_0(this.a87_1) + ', new instance: ' + transition.toString());
      throwIllegalStateException(tmp$ret$0);
    }
    this.a87_1 = transition;
  };
  protoOf(SeekableTransitionState).b8d = function () {
    this.a87_1 = null;
    get_SeekableStateObserver().c3e(this);
  };
  protoOf(SeekableTransitionState).c8d = function () {
    get_SeekableStateObserver().b3e(this, get_SeekableTransitionStateTotalDurationChanged(), this.c87_1);
  };
  protoOf(SeekableTransitionState).d8d = function () {
    var previousTotalDurationNanos = this.b87_1;
    this.c8d();
    if (!previousTotalDurationNanos.equals(this.b87_1)) {
      var animation = this.j87_1;
      if (!(animation == null)) {
        animation.d89_1 = this.b87_1;
        if (animation.y88_1 == null) {
          animation.e89_1 = roundToLong((1.0 - animation.b89_1.d7y(0)) * this.b87_1.p3());
        }
      } else if (!this.b87_1.equals(new Long(0, 0))) {
        seekToFraction(this);
      }
    }
  };
  function TransitionState() {
    this.e8d_1 = mutableStateOf(false);
  }
  protoOf(TransitionState).a81 = function (_set____db54di) {
    var tmp0 = this.e8d_1;
    isRunning$factory_3();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionState).f8d = function () {
    var tmp0 = this.e8d_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    isRunning$factory_4();
    return tmp0.v();
  };
  function _set_targetValue__aqsk0r_0($this, _set____db54di) {
    var tmp0 = $this.i8d_1;
    targetValue$factory_1();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  }
  function _get_targetValue__jjlmb5($this) {
    var tmp0 = $this.i8d_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    targetValue$factory_2();
    return tmp0.v();
  }
  function _set_animationSpec__7qdru($this, _set____db54di) {
    var tmp0 = $this.k8d_1;
    animationSpec$factory();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  }
  function _set_animation__pan2kh($this, _set____db54di) {
    var tmp0 = $this.l8d_1;
    animation$factory();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  }
  function updateAnimation($this, initialValue, isInterrupted) {
    var tmp0_safe_receiver = $this.n8d_1;
    if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y7y(), _get_targetValue__jjlmb5($this))) {
      _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$($this.v8d_1, $this.g8d_1, initialValue, initialValue, newInstance($this.s8d_1)));
      $this.q8d_1 = true;
      $this.y8d($this.x8d().m80());
      return Unit_instance;
    }
    var tmp;
    if (isInterrupted && !$this.u8d_1) {
      var tmp_0;
      var tmp_1 = $this.z8d();
      if (tmp_1 instanceof SpringSpec) {
        tmp_0 = $this.z8d();
      } else {
        tmp_0 = $this.v8d_1;
      }
      tmp = tmp_0;
    } else {
      tmp = $this.z8d();
    }
    var specWithoutDelay = tmp;
    var tmp_2;
    if ($this.w8d_1.a8e().a1(new Long(0, 0)) <= 0) {
      tmp_2 = specWithoutDelay;
    } else {
      tmp_2 = delayed(specWithoutDelay, $this.w8d_1.a8e());
    }
    var spec = tmp_2;
    _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$(spec, $this.g8d_1, initialValue, _get_targetValue__jjlmb5($this), $this.s8d_1));
    $this.y8d($this.x8d().m80());
    $this.q8d_1 = false;
    onChildAnimationUpdated($this.w8d_1);
  }
  function updateAnimation$default($this, initialValue, isInterrupted, $super) {
    initialValue = initialValue === VOID ? $this.v() : initialValue;
    isInterrupted = isInterrupted === VOID ? false : isInterrupted;
    return updateAnimation($this, initialValue, isInterrupted);
  }
  function DeferredAnimationData($outer, animation, transitionSpec, targetValueByState) {
    this.e8e_1 = $outer;
    this.b8e_1 = animation;
    this.c8e_1 = transitionSpec;
    this.d8e_1 = targetValueByState;
  }
  protoOf(DeferredAnimationData).f8e = function (segment) {
    var targetValue = this.d8e_1(segment.p56());
    if (this.e8e_1.m8e_1.n8e()) {
      var initialValue = this.d8e_1(segment.h8e());
      this.b8e_1.i8e(initialValue, targetValue, this.c8e_1(segment));
    } else {
      this.b8e_1.g8e(targetValue, this.c8e_1(segment));
    }
  };
  protoOf(DeferredAnimationData).v = function () {
    this.f8e(this.e8e_1.m8e_1.o8e());
    return this.b8e_1.v();
  };
  function Transition$animateTo$lambda$slambda$lambda(this$0, $durationScale) {
    return function (it) {
      var tmp;
      if (!this$0.n8e()) {
        // Inline function 'kotlin.Long.div' call
        var tmp$ret$0 = it.b3(toLong(1));
        this$0.p8e(tmp$ret$0, $durationScale);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Transition_init_$Init$(transitionState, label, $this) {
    label = label === VOID ? null : label;
    Transition.call($this, transitionState, null, label);
    return $this;
  }
  function Transition_init_$Create$(transitionState, label) {
    return Transition_init_$Init$(transitionState, label, objectCreate(protoOf(Transition)));
  }
  function _set_segment__77iylu($this, _set____db54di) {
    var tmp0 = $this.r87_1;
    segment$factory();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  }
  function _set__playTimeNanos__8elh7c($this, _set____db54di) {
    var tmp0 = $this.s87_1;
    _playTimeNanos$factory();
    tmp0.q2q(_set____db54di);
    return Unit_instance;
  }
  function _get__playTimeNanos__xxox8s($this) {
    var tmp0 = $this.s87_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    _playTimeNanos$factory_0();
    return tmp0.r2q();
  }
  function _set_updateChildrenNeeded__eksjzu($this, _set____db54di) {
    var tmp0 = $this.u87_1;
    updateChildrenNeeded$factory();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  }
  function _get_updateChildrenNeeded__mpvzi($this) {
    var tmp0 = $this.u87_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    updateChildrenNeeded$factory_0();
    return tmp0.v();
  }
  function calculateTotalDurationNanos($this) {
    var maxDurationNanos = new Long(0, 0);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = $this.v87_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.animation.core.Transition.calculateTotalDurationNanos.<anonymous>' call
        var tmp0 = maxDurationNanos;
        // Inline function 'kotlin.math.max' call
        var b = item.q8e();
        maxDurationNanos = tmp0.a1(b) >= 0 ? tmp0 : b;
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = $this.w87_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.p(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.calculateTotalDurationNanos.<anonymous>' call
        var tmp0_0 = maxDurationNanos;
        // Inline function 'kotlin.math.max' call
        var b_0 = calculateTotalDurationNanos(item_0);
        maxDurationNanos = tmp0_0.a1(b_0) >= 0 ? tmp0_0 : b_0;
      }
       while (inductionVariable_0 <= last_0);
    return maxDurationNanos;
  }
  function resetAnimations($this) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = $this.v87_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.animation.core.Transition.resetAnimations.<anonymous>' call
        item.r8e();
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = $this.w87_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.p(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.resetAnimations.<anonymous>' call
        resetAnimations(item_0);
      }
       while (inductionVariable_0 <= last_0);
  }
  function onChildAnimationUpdated($this) {
    _set_updateChildrenNeeded__eksjzu($this, true);
    if ($this.n8e()) {
      var maxDurationNanos = new Long(0, 0);
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = $this.v87_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.n() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.p(index);
          // Inline function 'androidx.compose.animation.core.Transition.onChildAnimationUpdated.<anonymous>' call
          var tmp0 = maxDurationNanos;
          // Inline function 'kotlin.math.max' call
          var b = item.q8e();
          maxDurationNanos = tmp0.a1(b) >= 0 ? tmp0 : b;
          item.s8e($this.y87_1);
        }
         while (inductionVariable <= last);
      _set_updateChildrenNeeded__eksjzu($this, false);
    }
  }
  function TransitionAnimationState($outer, initialValue, initialVelocityVector, typeConverter, label) {
    this.w8d_1 = $outer;
    this.g8d_1 = typeConverter;
    this.h8d_1 = label;
    this.i8d_1 = mutableStateOf(initialValue);
    this.j8d_1 = spring();
    this.k8d_1 = mutableStateOf(this.j8d_1);
    this.l8d_1 = mutableStateOf(TargetBasedAnimation_init_$Create$(this.z8d(), this.g8d_1, initialValue, _get_targetValue__jjlmb5(this), initialVelocityVector));
    this.m8d_1 = null;
    this.n8d_1 = null;
    this.o8d_1 = mutableStateOf(true);
    this.p8d_1 = mutableFloatStateOf(-1.0);
    this.q8d_1 = false;
    this.r8d_1 = mutableStateOf(initialValue);
    this.s8d_1 = initialVelocityVector;
    this.t8d_1 = mutableLongStateOf(this.x8d().m80());
    this.u8d_1 = false;
    var tmp0_safe_receiver = get_visibilityThresholdMap().l2(this.g8d_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.animation.core.TransitionAnimationState.<anonymous>' call
      var vector = this.g8d_1.b7y()(initialValue);
      var inductionVariable = 0;
      var last = vector.c7y();
      if (inductionVariable < last)
        do {
          var id = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          vector.e7y(id, tmp0_safe_receiver);
        }
         while (inductionVariable < last);
      tmp = this.g8d_1.f7y()(vector);
    }
    var visibilityThreshold = tmp;
    this.v8d_1 = spring(VOID, VOID, visibilityThreshold);
  }
  protoOf(TransitionAnimationState).z8d = function () {
    var tmp0 = this.k8d_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    animationSpec$factory_0();
    return tmp0.v();
  };
  protoOf(TransitionAnimationState).x8d = function () {
    var tmp0 = this.l8d_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    animation$factory_0();
    return tmp0.v();
  };
  protoOf(TransitionAnimationState).t8e = function (_set____db54di) {
    var tmp0 = this.o8d_1;
    isFinished$factory();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).u8e = function () {
    var tmp0 = this.o8d_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    isFinished$factory_0();
    return tmp0.v();
  };
  protoOf(TransitionAnimationState).v8e = function (_set____db54di) {
    var tmp0 = this.p8d_1;
    resetSnapValue$factory();
    tmp0.q2n(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).w8e = function () {
    var tmp0 = this.p8d_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    resetSnapValue$factory_0();
    return tmp0.r2n();
  };
  protoOf(TransitionAnimationState).w7x = function (_set____db54di) {
    var tmp0 = this.r8d_1;
    value$factory_3();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).v = function () {
    var tmp0 = this.r8d_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    value$factory_4();
    return tmp0.v();
  };
  protoOf(TransitionAnimationState).y8d = function (_set____db54di) {
    var tmp0 = this.t8d_1;
    durationNanos$factory();
    tmp0.q2q(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).q8e = function () {
    var tmp0 = this.t8d_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    durationNanos$factory_0();
    return tmp0.r2q();
  };
  protoOf(TransitionAnimationState).x8e = function (playTimeNanos, scaleToEnd) {
    var playTime = scaleToEnd ? this.x8d().m80() : playTimeNanos;
    this.w7x(this.x8d().j80(playTime));
    this.s8d_1 = this.x8d().o80(playTime);
    if (this.x8d().l80(playTime)) {
      this.t8e(true);
    }
  };
  protoOf(TransitionAnimationState).s8e = function (playTimeNanos) {
    if (!(this.w8e() === -1.0)) {
      return Unit_instance;
    }
    this.u8d_1 = true;
    if (equals(this.x8d().y7y(), this.x8d().h80())) {
      this.w7x(this.x8d().y7y());
    } else {
      this.w7x(this.x8d().j80(playTimeNanos));
      this.s8d_1 = this.x8d().o80(playTimeNanos);
    }
  };
  protoOf(TransitionAnimationState).y8e = function () {
    var tmp0_elvis_lhs = this.m8d_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var animState = tmp;
    var tmp1_elvis_lhs = this.n8d_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var animation = tmp_0;
    var tmp0 = animState.d89_1;
    // Inline function 'kotlin.Long.times' call
    var other = animState.a89_1;
    var tmp$ret$0 = tmp0.p3() * other;
    var initialPlayTimeNanos = roundToLong(tmp$ret$0);
    var initialValue = animation.j80(initialPlayTimeNanos);
    if (this.q8d_1) {
      this.x8d().f80(initialValue);
    }
    this.x8d().g80(initialValue);
    this.y8d(this.x8d().m80());
    if (this.w8e() === -2.0 || this.q8d_1) {
      this.w7x(initialValue);
    } else {
      this.s8e(this.w8d_1.a8e());
    }
    if (initialPlayTimeNanos.a1(animState.d89_1) >= 0) {
      this.m8d_1 = null;
      this.n8d_1 = null;
    } else {
      animState.z88_1 = false;
    }
  };
  protoOf(TransitionAnimationState).r8e = function () {
    this.v8e(-2.0);
  };
  protoOf(TransitionAnimationState).z8e = function (fraction) {
    switch (fraction) {
      case -4.0:
      case -5.0:
        var initAnim = this.n8d_1;
        if (!(initAnim == null)) {
          this.x8d().g80(initAnim.y7y());
          this.m8d_1 = null;
          this.n8d_1 = null;
        }

        var tmp;
        if (fraction === -4.0) {
          tmp = this.x8d().h80();
        } else {
          tmp = this.x8d().y7y();
        }

        var animationValue = tmp;
        this.x8d().g80(animationValue);
        this.x8d().f80(animationValue);
        this.w7x(animationValue);
        this.y8d(this.x8d().m80());
        break;
      default:
        this.v8e(fraction);
        break;
    }
  };
  protoOf(TransitionAnimationState).a8f = function (animationState) {
    if (!equals(this.x8d().y7y(), this.x8d().h80())) {
      this.n8d_1 = this.x8d();
      this.m8d_1 = animationState;
    }
    _set_animation__pan2kh(this, TargetBasedAnimation_init_$Create$(this.v8d_1, this.g8d_1, this.v(), this.v(), newInstance(this.s8d_1)));
    this.y8d(this.x8d().m80());
    this.q8d_1 = true;
  };
  protoOf(TransitionAnimationState).b8f = function () {
    this.n8d_1 = null;
    this.m8d_1 = null;
    this.q8d_1 = false;
  };
  protoOf(TransitionAnimationState).toString = function () {
    return 'current value: ' + toString_0(this.v()) + ', target: ' + toString_0(_get_targetValue__jjlmb5(this)) + ', spec: ' + toString(this.z8d());
  };
  protoOf(TransitionAnimationState).g8e = function (targetValue, animationSpec) {
    var tmp;
    if (this.q8d_1) {
      var tmp0_safe_receiver = this.n8d_1;
      tmp = equals(targetValue, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y7y());
    } else {
      tmp = false;
    }
    if (tmp) {
      return Unit_instance;
    }
    if (equals(_get_targetValue__jjlmb5(this), targetValue) && this.w8e() === -1.0) {
      return Unit_instance;
    }
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru(this, animationSpec);
    var initialValue = this.w8e() === -3.0 ? targetValue : this.v();
    updateAnimation(this, initialValue, !this.u8e());
    this.t8e(this.w8e() === -3.0);
    if (this.w8e() >= 0.0) {
      var duration = this.x8d().m80();
      var tmp_0 = this.x8d();
      // Inline function 'kotlin.Long.times' call
      var other = this.w8e();
      var tmp$ret$0 = duration.o3() * other;
      this.w7x(tmp_0.j80(numberToLong(tmp$ret$0)));
    } else if (this.w8e() === -3.0) {
      this.w7x(targetValue);
    }
    this.q8d_1 = false;
    this.v8e(-1.0);
  };
  protoOf(TransitionAnimationState).i8e = function (initialValue, targetValue, animationSpec) {
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru(this, animationSpec);
    if (equals(this.x8d().h80(), initialValue) && equals(this.x8d().y7y(), targetValue)) {
      return Unit_instance;
    }
    updateAnimation$default(this, initialValue);
  };
  function SegmentImpl(initialState, targetState) {
    this.c8f_1 = initialState;
    this.d8f_1 = targetState;
  }
  protoOf(SegmentImpl).h8e = function () {
    return this.c8f_1;
  };
  protoOf(SegmentImpl).p56 = function () {
    return this.d8f_1;
  };
  protoOf(SegmentImpl).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Segment) : false) {
      tmp_0 = equals(this.c8f_1, other.h8e());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.d8f_1, other.p56());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SegmentImpl).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.c8f_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.d8f_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
  };
  function Segment() {
  }
  function DeferredAnimation($outer, typeConverter, label) {
    this.m8e_1 = $outer;
    this.j8e_1 = typeConverter;
    this.k8e_1 = label;
    this.l8e_1 = mutableStateOf(null);
  }
  protoOf(DeferredAnimation).f8f = function (_set____db54di) {
    var tmp0 = this.l8e_1;
    data$factory();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  };
  protoOf(DeferredAnimation).g8f = function () {
    var tmp0 = this.l8e_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    data$factory_0();
    return tmp0.v();
  };
  protoOf(DeferredAnimation).h8f = function (transitionSpec, targetValueByState) {
    var tmp0_elvis_lhs = this.g8f();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = new DeferredAnimationData(this, new TransitionAnimationState(this.m8e_1, targetValueByState(this.m8e_1.w56()), createZeroVectorFrom(this.j8e_1, targetValueByState(this.m8e_1.w56())), this.j8e_1, this.k8e_1), transitionSpec, targetValueByState);
      // Inline function 'androidx.compose.animation.core.DeferredAnimation.animate.<anonymous>' call
      this.f8f(this_0);
      this.m8e_1.i8f(this_0.b8e_1);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var animData = tmp;
    // Inline function 'kotlin.apply' call
    // Inline function 'androidx.compose.animation.core.DeferredAnimation.animate.<anonymous>' call
    animData.d8e_1 = targetValueByState;
    animData.c8e_1 = transitionSpec;
    animData.f8e(this.m8e_1.o8e());
    return animData;
  };
  protoOf(DeferredAnimation).j8f = function () {
    var tmp0_safe_receiver = this.g8f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.apply' call
      // Inline function 'androidx.compose.animation.core.DeferredAnimation.setupSeeking.<anonymous>' call
      tmp0_safe_receiver.b8e_1.i8e(tmp0_safe_receiver.d8e_1(this.m8e_1.o8e().h8e()), tmp0_safe_receiver.d8e_1(this.m8e_1.o8e().p56()), tmp0_safe_receiver.c8e_1(this.m8e_1.o8e()));
    }
  };
  function Transition$totalDurationNanos$delegate$lambda(this$0) {
    return function () {
      return calculateTotalDurationNanos(this$0);
    };
  }
  function Transition$animateTo$lambda() {
    return EmptyCoroutineContext_getInstance();
  }
  function Transition$animateTo$lambda$slambda(this$0, resultContinuation) {
    this.s8f_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Transition$animateTo$lambda$slambda).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(Transition$animateTo$lambda$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Transition$animateTo$lambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 4;
            this.u8f_1 = get_durationScale(this.t8f_1.sv());
            this.h9_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive(this.t8f_1)) {
              this.h9_1 = 3;
              continue $sm;
            }

            this.h9_1 = 2;
            suspendResult = withFrameNanos(Transition$animateTo$lambda$slambda$lambda(this.s8f_1, this.u8f_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  protoOf(Transition$animateTo$lambda$slambda).s1m = function ($this$launch, completion) {
    var i = new Transition$animateTo$lambda$slambda(this.s8f_1, completion);
    i.t8f_1 = $this$launch;
    return i;
  };
  function Transition$animateTo$lambda$slambda_0(this$0, resultContinuation) {
    var i = new Transition$animateTo$lambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Transition$animateTo$$inlined$cache$1$2() {
  }
  protoOf(Transition$animateTo$$inlined$cache$1$2).qy = function () {
    // Inline function 'androidx.compose.animation.core.Transition.animateTo.<anonymous>.<anonymous>.<anonymous>' call
  };
  function Transition$animateTo$lambda_0($coroutineScope, this$0) {
    return function ($this$DisposableEffect) {
      var tmp = CoroutineStart_UNDISPATCHED_getInstance();
      launch($coroutineScope, VOID, tmp, Transition$animateTo$lambda$slambda_0(this$0, null));
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new Transition$animateTo$$inlined$cache$1$2();
    };
  }
  function Transition$animateTo$lambda_1($tmp1_rcvr, $targetState, $$changed) {
    return function ($composer, $force) {
      $tmp1_rcvr.v8f($targetState, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Transition(transitionState, parentTransition, label) {
    label = label === VOID ? null : label;
    this.n87_1 = transitionState;
    this.o87_1 = parentTransition;
    this.p87_1 = label;
    this.q87_1 = mutableStateOf(this.w56());
    this.r87_1 = mutableStateOf(new SegmentImpl(this.w56(), this.w56()));
    this.s87_1 = mutableLongStateOf(new Long(0, 0));
    this.t87_1 = mutableLongStateOf(new Long(0, -2147483648));
    this.u87_1 = mutableStateOf(false);
    this.v87_1 = mutableStateListOf();
    this.w87_1 = mutableStateListOf();
    this.x87_1 = mutableStateOf(false);
    this.y87_1 = new Long(0, 0);
    var tmp = this;
    tmp.z87_1 = derivedStateOf(Transition$totalDurationNanos$delegate$lambda(this));
    this.n87_1.a8d(this);
  }
  protoOf(Transition).w56 = function () {
    return this.n87_1.w56();
  };
  protoOf(Transition).c88 = function (_set____db54di) {
    var tmp0 = this.q87_1;
    targetState$factory_1();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).p56 = function () {
    var tmp0 = this.q87_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    targetState$factory_2();
    return tmp0.v();
  };
  protoOf(Transition).o8e = function () {
    var tmp0 = this.r87_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    segment$factory_0();
    return tmp0.v();
  };
  protoOf(Transition).m7z = function () {
    return !this.w8f().equals(new Long(0, -2147483648));
  };
  protoOf(Transition).b88 = function (value) {
    if (this.o87_1 == null) {
      _set__playTimeNanos__8elh7c(this, value);
    }
  };
  protoOf(Transition).a8e = function () {
    var tmp0_safe_receiver = this.o87_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a8e();
    return tmp1_elvis_lhs == null ? _get__playTimeNanos__xxox8s(this) : tmp1_elvis_lhs;
  };
  protoOf(Transition).x8f = function (_set____db54di) {
    var tmp0 = this.t87_1;
    startTimeNanos$factory();
    tmp0.q2q(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).w8f = function () {
    var tmp0 = this.t87_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    startTimeNanos$factory_0();
    return tmp0.r2q();
  };
  protoOf(Transition).y8f = function () {
    return this.v87_1;
  };
  protoOf(Transition).z8f = function (_set____db54di) {
    var tmp0 = this.x87_1;
    isSeeking$factory();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).n8e = function () {
    var tmp0 = this.x87_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    isSeeking$factory_0();
    return tmp0.v();
  };
  protoOf(Transition).a8g = function () {
    var tmp;
    var tmp0 = this.v87_1;
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
          // Inline function 'androidx.compose.animation.core.Transition.<get-hasInitialValueAnimations>.<anonymous>' call
          if (!(item.m8d_1 == null)) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    if (tmp$ret$1) {
      tmp = true;
    } else {
      var tmp2 = this.w87_1;
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'androidx.compose.ui.util.fastAny' call
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
            // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
            // Inline function 'androidx.compose.animation.core.Transition.<get-hasInitialValueAnimations>.<anonymous>' call
            if (item_0.a8g()) {
              tmp$ret$3 = true;
              break $l$block_0;
            }
          }
           while (inductionVariable_0 <= last_0);
        tmp$ret$3 = false;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  protoOf(Transition).g8b = function () {
    var tmp0 = this.z87_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    totalDurationNanos$factory();
    return tmp0.v();
  };
  protoOf(Transition).p8e = function (frameTimeNanos, durationScale) {
    if (this.w8f().equals(new Long(0, -2147483648))) {
      this.b8g(frameTimeNanos);
    }
    var deltaT = frameTimeNanos.z2(this.w8f());
    var tmp;
    if (durationScale === 0.0) {
      tmp = deltaT;
    } else {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = deltaT.p3() / durationScale;
      tmp = roundToLong(tmp$ret$0);
    }
    var scaledPlayTimeNanos = tmp;
    this.b88(scaledPlayTimeNanos);
    this.c8g(scaledPlayTimeNanos, durationScale === 0.0);
  };
  protoOf(Transition).c8g = function (scaledPlayTimeNanos, scaleToEnd) {
    if (this.w8f().equals(new Long(0, -2147483648))) {
      this.b8g(scaledPlayTimeNanos);
    } else if (!this.n87_1.f8d()) {
      this.n87_1.a81(true);
    }
    _set_updateChildrenNeeded__eksjzu(this, false);
    var allFinished = true;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.v87_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
        if (!item.u8e()) {
          item.x8e(scaledPlayTimeNanos, scaleToEnd);
        }
        if (!item.u8e()) {
          allFinished = false;
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.w87_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.p(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.onFrame.<anonymous>' call
        if (!equals(item_0.p56(), item_0.w56())) {
          item_0.c8g(scaledPlayTimeNanos, scaleToEnd);
        }
        if (!equals(item_0.p56(), item_0.w56())) {
          allFinished = false;
        }
      }
       while (inductionVariable_0 <= last_0);
    if (allFinished) {
      this.v8b();
    }
  };
  protoOf(Transition).b8g = function (frameTimeNanos) {
    this.x8f(frameTimeNanos);
    this.n87_1.a81(true);
  };
  protoOf(Transition).d8g = function () {
    this.v8b();
    this.n87_1.b8d();
  };
  protoOf(Transition).v8b = function () {
    this.x8f(new Long(0, -2147483648));
    var tmp = this.n87_1;
    if (tmp instanceof MutableTransitionState) {
      this.n87_1.w88(this.p56());
    }
    this.b88(new Long(0, 0));
    this.n87_1.a81(false);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.w87_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.animation.core.Transition.onTransitionEnd.<anonymous>' call
        item.v8b();
      }
       while (inductionVariable <= last);
  };
  protoOf(Transition).e8g = function (initialState, targetState, playTimeNanos) {
    this.x8f(new Long(0, -2147483648));
    this.n87_1.a81(false);
    if (!this.n8e() || !equals(this.w56(), initialState) || !equals(this.p56(), targetState)) {
      var tmp;
      if (!equals(this.w56(), initialState)) {
        var tmp_0 = this.n87_1;
        tmp = tmp_0 instanceof MutableTransitionState;
      } else {
        tmp = false;
      }
      if (tmp) {
        this.n87_1.w88(initialState);
      }
      this.c88(targetState);
      this.z8f(true);
      _set_segment__77iylu(this, new SegmentImpl(initialState, targetState));
    }
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.w87_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>.<anonymous>' call
        var it = item instanceof Transition ? item : THROW_CCE();
        if (it.n8e()) {
          it.e8g(it.w56(), it.p56(), playTimeNanos);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.v87_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.p(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.setPlaytimeAfterInitialAndTargetStateEstablished.<anonymous>' call
        item_0.s8e(playTimeNanos);
      }
       while (inductionVariable_0 <= last_0);
    this.y87_1 = playTimeNanos;
  };
  protoOf(Transition).f8g = function (transition) {
    return this.w87_1.s23(transition);
  };
  protoOf(Transition).g8g = function (transition) {
    return this.w87_1.s2k(transition);
  };
  protoOf(Transition).i8f = function (animation) {
    return this.v87_1.s23(animation);
  };
  protoOf(Transition).h8g = function (animation) {
    this.v87_1.s2k(animation);
  };
  protoOf(Transition).a88 = function (targetState) {
    if (!equals(this.p56(), targetState)) {
      _set_segment__77iylu(this, new SegmentImpl(this.p56(), targetState));
      if (!equals(this.w56(), this.p56())) {
        this.n87_1.w88(this.p56());
      }
      this.c88(targetState);
      if (!this.m7z()) {
        _set_updateChildrenNeeded__eksjzu(this, true);
      }
      resetAnimations(this);
    }
  };
  protoOf(Transition).v8f = function (targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v28(-1493585151);
    sourceInformation($composer_0, 'C(animateTo)1220@49879L24,1221@49959L1012,1221@49920L1051:Transition.kt#pdpnli');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.m1w(targetState) : $composer_0.m26(targetState)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1w(this) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.d25()) {
      if (isTraceInProgress()) {
        traceEventStart(-1493585151, $dirty, -1, 'androidx.compose.animation.core.Transition.animateTo (Transition.kt:1212)');
      }
      if (!this.n8e()) {
        this.a88(targetState);
        if (!equals(targetState, this.w56()) || this.m7z() || _get_updateChildrenNeeded__mpvzi(this)) {
          // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
          var getContext = null;
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 773894976, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
          if (!((1 & 1) === 0)) {
            getContext = Transition$animateTo$lambda;
          }
          var composer = $composer_1;
          sourceInformationMarkerStart($composer_1, -954370320, 'CC(remember):Effects.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_1.d27();
          var tmp;
          if (false || it === Companion_getInstance().w1z_1) {
            // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
            var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
            $composer_1.o27(value);
            tmp = value;
          } else {
            tmp = it;
          }
          var tmp_0 = tmp;
          var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          sourceInformationMarkerEnd($composer_1);
          var wrapper = tmp1_group;
          var tmp0 = wrapper.a2f_1;
          sourceInformationMarkerEnd($composer_1);
          var coroutineScope = tmp0;
          sourceInformationMarkerStart($composer_0, 335902523, 'CC(remember):Transition.kt#9igjgp');
          var tmp4 = $composer_0;
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = !!($composer_0.m26(coroutineScope) | ($dirty & 112) === 32);
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_0 = tmp4.d27();
          var tmp_1;
          if (invalid || it_0 === Companion_getInstance().w1z_1) {
            // Inline function 'androidx.compose.animation.core.Transition.animateTo.<anonymous>' call
            var value_0 = Transition$animateTo$lambda_0(coroutineScope, this);
            tmp4.o27(value_0);
            tmp_1 = value_0;
          } else {
            tmp_1 = it_0;
          }
          var tmp_2 = tmp_1;
          var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          DisposableEffect(coroutineScope, this, tmp0_group, $composer_0, 112 & $dirty);
        }
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.n1z();
    }
    var tmp2_safe_receiver = $composer_0.w28();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.i2d(Transition$animateTo$lambda_1(this, targetState, $changed));
    }
  };
  protoOf(Transition).h8b = function (playTimeNanos) {
    if (this.w8f().equals(new Long(0, -2147483648))) {
      this.x8f(playTimeNanos);
    }
    this.b88(playTimeNanos);
    _set_updateChildrenNeeded__eksjzu(this, false);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.v87_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.animation.core.Transition.seekAnimations.<anonymous>' call
        item.s8e(playTimeNanos);
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.w87_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.p(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.seekAnimations.<anonymous>' call
        if (!equals(item_0.p56(), item_0.w56())) {
          item_0.h8b(playTimeNanos);
        }
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).f8b = function (animationState) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.v87_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.animation.core.Transition.setInitialAnimations.<anonymous>' call
        item.a8f(animationState);
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.w87_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.p(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.setInitialAnimations.<anonymous>' call
        item_0.f8b(animationState);
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).d88 = function (fraction) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.v87_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.animation.core.Transition.resetAnimationFraction.<anonymous>' call
        item.z8e(fraction);
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.w87_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.p(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.resetAnimationFraction.<anonymous>' call
        item_0.d88(fraction);
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).i89 = function () {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.v87_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.animation.core.Transition.clearInitialAnimations.<anonymous>' call
        item.b8f();
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.w87_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.p(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.clearInitialAnimations.<anonymous>' call
        item_0.i89();
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).i8b = function () {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.v87_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = this_0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.p(index);
        // Inline function 'androidx.compose.animation.core.Transition.updateInitialValues.<anonymous>' call
        item.y8e();
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.w87_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = this_1.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.p(index_0);
        // Inline function 'androidx.compose.animation.core.Transition.updateInitialValues.<anonymous>' call
        item_0.i8b();
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).toString = function () {
    var tmp0 = this.y8f();
    // Inline function 'androidx.compose.ui.util.fastFold' call
    // Inline function 'kotlin.contracts.contract' call
    var accumulator = 'Transition animation values: ';
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = tmp0.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0.p(index);
        // Inline function 'androidx.compose.ui.util.fastFold.<anonymous>' call
        // Inline function 'androidx.compose.animation.core.Transition.toString.<anonymous>' call
        accumulator = accumulator + item.toString() + ', ';
      }
       while (inductionVariable <= last);
    return accumulator;
  };
  protoOf(Transition).i8g = function (deferredAnimation) {
    var tmp0_safe_receiver = deferredAnimation.g8f();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b8e_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.animation.core.Transition.removeAnimation.<anonymous>' call
      this.h8g(tmp1_safe_receiver);
    }
  };
  function MutableTransitionState(initialState) {
    TransitionState.call(this);
    this.k8g_1 = mutableStateOf(initialState);
    this.l8g_1 = mutableStateOf(initialState);
  }
  protoOf(MutableTransitionState).w88 = function (_set____db54di) {
    var tmp0 = this.k8g_1;
    currentState$factory_1();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  };
  protoOf(MutableTransitionState).w56 = function () {
    var tmp0 = this.k8g_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    currentState$factory_2();
    return tmp0.v();
  };
  protoOf(MutableTransitionState).m8g = function (_set____db54di) {
    var tmp0 = this.l8g_1;
    targetState$factory_3();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  };
  protoOf(MutableTransitionState).p56 = function () {
    var tmp0 = this.l8g_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    targetState$factory_4();
    return tmp0.v();
  };
  protoOf(MutableTransitionState).a8d = function (transition) {
  };
  protoOf(MutableTransitionState).b8d = function () {
  };
  function rememberTransition(transitionState, label, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1643203617, 'C(rememberTransition)P(1)822@34343L94,837@35067L190,837@35038L219:Transition.kt#pdpnli');
    if (!(($default & 2) === 0))
      label_0 = null;
    if (isTraceInProgress()) {
      traceEventStart(1643203617, $changed, -1, 'androidx.compose.animation.core.rememberTransition (Transition.kt:821)');
    }
    sourceInformationMarkerStart($composer_0, 587424932, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.m1w(transitionState) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d27();
    var tmp;
    if (invalid || it === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.animation.core.rememberTransition.<anonymous>' call
      var value = Transition_init_$Create$(transitionState, label_0);
      $composer_0.o27(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var transition = tmp1_group;
    if (transitionState instanceof SeekableTransitionState) {
      $composer_0.j25(1030461252);
      sourceInformation($composer_0, '826@34574L382,826@34500L456');
      var tmp_1 = transitionState.w56();
      var tmp_2 = transitionState.p56();
      sourceInformationMarkerStart($composer_0, 587432612, 'CC(remember):Transition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($changed & 14 ^ 6) > 4 && $composer_0.m1w(transitionState) || ($changed & 6) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.d27();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance().w1z_1) {
        // Inline function 'androidx.compose.animation.core.rememberTransition.<anonymous>' call
        var value_0 = rememberTransition$slambda_0(transitionState, null);
        $composer_0.o27(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      LaunchedEffect(tmp_1, tmp_2, tmp2_group, $composer_0, 0);
      $composer_0.l25();
    } else {
      $composer_0.j25(1030922811);
      sourceInformation($composer_0, '835@34989L38');
      transition.v8f(transitionState.p56(), $composer_0, 0);
      $composer_0.l25();
    }
    sourceInformationMarkerStart($composer_0, 587448196, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_1 = $composer_0.m1w(transition);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.d27();
    var tmp_5;
    if (invalid_1 || it_1 === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.animation.core.rememberTransition.<anonymous>' call
      var value_1 = rememberTransition$lambda(transition);
      $composer_0.o27(value_1);
      tmp_5 = value_1;
    } else {
      tmp_5 = it_1;
    }
    var tmp_6 = tmp_5;
    var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect_0(transition, tmp3_group, $composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return transition;
  }
  function createDeferredAnimation(_this__u8e3s4, typeConverter, label, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var label_0 = label;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1714122528, 'C(createDeferredAnimation)P(1)1781@72682L58,1782@72772L75,1782@72745L102:Transition.kt#pdpnli');
    if (!(($default & 2) === 0))
      label_0 = 'DeferredAnimation';
    if (isTraceInProgress()) {
      traceEventStart(-1714122528, $changed, -1, 'androidx.compose.animation.core.createDeferredAnimation (Transition.kt:1780)');
    }
    sourceInformationMarkerStart($composer_0, -1378232737, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.m1w(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d27();
    var tmp;
    if (invalid || it === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.animation.core.createDeferredAnimation.<anonymous>' call
      var value = new DeferredAnimation(_this__u8e3s4, typeConverter, label_0);
      $composer_0.o27(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var lazyAnim = tmp1_group;
    sourceInformationMarkerStart($composer_0, -1378229840, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!((($changed & 14 ^ 6) > 4 && $composer_0.m1w(_this__u8e3s4) || ($changed & 6) === 4) | $composer_0.m26(lazyAnim));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.d27();
    var tmp_1;
    if (invalid_0 || it_0 === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.animation.core.createDeferredAnimation.<anonymous>' call
      var value_0 = createDeferredAnimation$lambda(_this__u8e3s4, lazyAnim);
      $composer_0.o27(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect_0(lazyAnim, tmp2_group, $composer_0, 0);
    if (_this__u8e3s4.n8e()) {
      lazyAnim.j8f();
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return lazyAnim;
  }
  function createChildTransitionInternal(_this__u8e3s4, initialState, targetState, childLabel, $composer, $changed) {
    _init_properties_Transition_kt__s6zoln();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -198307638, 'C(createChildTransitionInternal)P(1,2)1827@74657L116,1831@74808L112,1831@74779L141:Transition.kt#pdpnli');
    if (isTraceInProgress()) {
      traceEventStart(-198307638, $changed, -1, 'androidx.compose.animation.core.createChildTransitionInternal (Transition.kt:1826)');
    }
    sourceInformationMarkerStart($composer_0, 1039291970, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.m1w(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d27();
    var tmp;
    if (invalid || it === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.animation.core.createChildTransitionInternal.<anonymous>' call
      var value = new Transition(new MutableTransitionState(initialState), _this__u8e3s4, '' + _this__u8e3s4.p87_1 + ' > ' + childLabel);
      $composer_0.o27(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var transition = tmp1_group;
    sourceInformationMarkerStart($composer_0, 1039296798, 'CC(remember):Transition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!((($changed & 14 ^ 6) > 4 && $composer_0.m1w(_this__u8e3s4) || ($changed & 6) === 4) | $composer_0.m1w(transition));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.d27();
    var tmp_1;
    if (invalid_0 || it_0 === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.animation.core.createChildTransitionInternal.<anonymous>' call
      var value_0 = createChildTransitionInternal$lambda(_this__u8e3s4, transition);
      $composer_0.o27(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    DisposableEffect_0(transition, tmp2_group, $composer_0, 0);
    if (_this__u8e3s4.n8e()) {
      transition.e8g(initialState, targetState, _this__u8e3s4.y87_1);
    } else {
      transition.a88(targetState);
      transition.z8f(false);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return transition;
  }
  function SeekableTransitionStateTotalDurationChanged$lambda(it) {
    _init_properties_Transition_kt__s6zoln();
    it.d8d();
    return Unit_instance;
  }
  function SeekableStateObserver$delegate$lambda() {
    _init_properties_Transition_kt__s6zoln();
    // Inline function 'kotlin.apply' call
    var this_0 = new SnapshotStateObserver(SeekableStateObserver$delegate$lambda$lambda);
    // Inline function 'androidx.compose.animation.core.SeekableStateObserver$delegate.<anonymous>.<anonymous>' call
    this_0.e3e();
    return this_0;
  }
  function SeekableStateObserver$delegate$lambda$lambda(it) {
    _init_properties_Transition_kt__s6zoln();
    it();
    return Unit_instance;
  }
  function rememberTransition$slambda($transitionState, resultContinuation) {
    this.v8g_1 = $transitionState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberTransition$slambda).r1m = function ($this$LaunchedEffect, $completion) {
    var tmp = this.s1m($this$LaunchedEffect, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(rememberTransition$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberTransition$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.v8g_1.c8d();
            var tmp_0 = this;
            tmp_0.x8g_1 = this.v8g_1.f87_1;
            this.y8g_1 = this.x8g_1;
            var tmp_1 = this;
            tmp_1.z8g_1 = null;
            this.h9_1 = 1;
            suspendResult = this.y8g_1.m1o(this.z8g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            l$ret$1: do {
              var tmp_2;
              try {
                this.v8g_1.z86_1 = this.v8g_1.p56();
                var tmp0_safe_receiver = this.v8g_1.e87_1;
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  var value = this.v8g_1.p56();
                  tmp0_safe_receiver.s9(_Result___init__impl__xyqfz8(value));
                }
                this.v8g_1.e87_1 = null;
                break l$ret$1;
              } catch ($p) {
                var tmp_3;
                var t = $p;
                this.y8g_1.o1o(this.z8g_1);
                throw t;
              }
            }
             while (false);
            this.y8g_1.o1o(this.z8g_1);
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
  protoOf(rememberTransition$slambda).s1m = function ($this$LaunchedEffect, completion) {
    var i = new rememberTransition$slambda(this.v8g_1, completion);
    i.w8g_1 = $this$LaunchedEffect;
    return i;
  };
  function rememberTransition$slambda_0($transitionState, resultContinuation) {
    var i = new rememberTransition$slambda($transitionState, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.r1m($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function rememberTransition$$inlined$cache$2$1($transition) {
    this.a8h_1 = $transition;
  }
  protoOf(rememberTransition$$inlined$cache$2$1).qy = function () {
    // Inline function 'androidx.compose.animation.core.rememberTransition.<anonymous>.<anonymous>.<anonymous>' call
    this.a8h_1.d8g();
  };
  function rememberTransition$lambda($transition) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new rememberTransition$$inlined$cache$2$1($transition);
    };
  }
  function createDeferredAnimation$$inlined$cache$1$1($this_createDeferredAnimation, $lazyAnim) {
    this.b8h_1 = $this_createDeferredAnimation;
    this.c8h_1 = $lazyAnim;
  }
  protoOf(createDeferredAnimation$$inlined$cache$1$1).qy = function () {
    // Inline function 'androidx.compose.animation.core.createDeferredAnimation.<anonymous>.<anonymous>.<anonymous>' call
    this.b8h_1.i8g(this.c8h_1);
  };
  function createDeferredAnimation$lambda($this_createDeferredAnimation, $lazyAnim) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new createDeferredAnimation$$inlined$cache$1$1($this_createDeferredAnimation, $lazyAnim);
    };
  }
  function createChildTransitionInternal$$inlined$cache$1$1($this_createChildTransitionInternal, $transition) {
    this.d8h_1 = $this_createChildTransitionInternal;
    this.e8h_1 = $transition;
  }
  protoOf(createChildTransitionInternal$$inlined$cache$1$1).qy = function () {
    // Inline function 'androidx.compose.animation.core.createChildTransitionInternal.<anonymous>.<anonymous>.<anonymous>' call
    this.d8h_1.g8g(this.e8h_1);
  };
  function createChildTransitionInternal$lambda($this_createChildTransitionInternal, $transition) {
    return function ($this$DisposableEffect) {
      $this_createChildTransitionInternal.f8g($transition);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new createChildTransitionInternal$$inlined$cache$1$1($this_createChildTransitionInternal, $transition);
    };
  }
  function SeekableStateObserver$factory() {
    return getPropertyCallableRef('SeekableStateObserver', 0, KProperty0, function () {
      return get_SeekableStateObserver();
    }, null);
  }
  function targetState$factory() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.p56();
    }, function (receiver, value) {
      return receiver.c88(value);
    });
  }
  function targetState$factory_0() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.p56();
    }, function (receiver, value) {
      return receiver.c88(value);
    });
  }
  function currentState$factory() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.w56();
    }, function (receiver, value) {
      return receiver.w88(value);
    });
  }
  function currentState$factory_0() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.w56();
    }, function (receiver, value) {
      return receiver.w88(value);
    });
  }
  function fraction$factory() {
    return getPropertyCallableRef('fraction', 1, KMutableProperty1, function (receiver) {
      return receiver.h89();
    }, function (receiver, value) {
      return _set_fraction__t78qnf(receiver, value);
    });
  }
  function fraction$factory_0() {
    return getPropertyCallableRef('fraction', 1, KMutableProperty1, function (receiver) {
      return receiver.h89();
    }, function (receiver, value) {
      return _set_fraction__t78qnf(receiver, value);
    });
  }
  function isRunning$factory_3() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.f8d();
    }, function (receiver, value) {
      return receiver.a81(value);
    });
  }
  function isRunning$factory_4() {
    return getPropertyCallableRef('isRunning', 1, KMutableProperty1, function (receiver) {
      return receiver.f8d();
    }, function (receiver, value) {
      return receiver.a81(value);
    });
  }
  function targetState$factory_1() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.p56();
    }, function (receiver, value) {
      return receiver.c88(value);
    });
  }
  function targetState$factory_2() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.p56();
    }, function (receiver, value) {
      return receiver.c88(value);
    });
  }
  function segment$factory() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.o8e();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function segment$factory_0() {
    return getPropertyCallableRef('segment', 1, KMutableProperty1, function (receiver) {
      return receiver.o8e();
    }, function (receiver, value) {
      return _set_segment__77iylu(receiver, value);
    });
  }
  function _playTimeNanos$factory() {
    return getPropertyCallableRef('_playTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get__playTimeNanos__xxox8s(receiver);
    }, function (receiver, value) {
      return _set__playTimeNanos__8elh7c(receiver, value);
    });
  }
  function _playTimeNanos$factory_0() {
    return getPropertyCallableRef('_playTimeNanos', 1, KMutableProperty1, function (receiver) {
      return _get__playTimeNanos__xxox8s(receiver);
    }, function (receiver, value) {
      return _set__playTimeNanos__8elh7c(receiver, value);
    });
  }
  function startTimeNanos$factory() {
    return getPropertyCallableRef('startTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.w8f();
    }, function (receiver, value) {
      return receiver.x8f(value);
    });
  }
  function startTimeNanos$factory_0() {
    return getPropertyCallableRef('startTimeNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.w8f();
    }, function (receiver, value) {
      return receiver.x8f(value);
    });
  }
  function updateChildrenNeeded$factory() {
    return getPropertyCallableRef('updateChildrenNeeded', 1, KMutableProperty1, function (receiver) {
      return _get_updateChildrenNeeded__mpvzi(receiver);
    }, function (receiver, value) {
      return _set_updateChildrenNeeded__eksjzu(receiver, value);
    });
  }
  function updateChildrenNeeded$factory_0() {
    return getPropertyCallableRef('updateChildrenNeeded', 1, KMutableProperty1, function (receiver) {
      return _get_updateChildrenNeeded__mpvzi(receiver);
    }, function (receiver, value) {
      return _set_updateChildrenNeeded__eksjzu(receiver, value);
    });
  }
  function isSeeking$factory() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.n8e();
    }, function (receiver, value) {
      return receiver.z8f(value);
    });
  }
  function isSeeking$factory_0() {
    return getPropertyCallableRef('isSeeking', 1, KMutableProperty1, function (receiver) {
      return receiver.n8e();
    }, function (receiver, value) {
      return receiver.z8f(value);
    });
  }
  function totalDurationNanos$factory() {
    return getPropertyCallableRef('totalDurationNanos', 1, KProperty1, function (receiver) {
      return receiver.g8b();
    }, null);
  }
  function targetValue$factory_1() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return _get_targetValue__jjlmb5(receiver);
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r_0(receiver, value);
    });
  }
  function targetValue$factory_2() {
    return getPropertyCallableRef('targetValue', 1, KMutableProperty1, function (receiver) {
      return _get_targetValue__jjlmb5(receiver);
    }, function (receiver, value) {
      return _set_targetValue__aqsk0r_0(receiver, value);
    });
  }
  function animationSpec$factory() {
    return getPropertyCallableRef('animationSpec', 1, KMutableProperty1, function (receiver) {
      return receiver.z8d();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru(receiver, value);
    });
  }
  function animationSpec$factory_0() {
    return getPropertyCallableRef('animationSpec', 1, KMutableProperty1, function (receiver) {
      return receiver.z8d();
    }, function (receiver, value) {
      return _set_animationSpec__7qdru(receiver, value);
    });
  }
  function animation$factory() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.x8d();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function animation$factory_0() {
    return getPropertyCallableRef('animation', 1, KMutableProperty1, function (receiver) {
      return receiver.x8d();
    }, function (receiver, value) {
      return _set_animation__pan2kh(receiver, value);
    });
  }
  function isFinished$factory() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.u8e();
    }, function (receiver, value) {
      return receiver.t8e(value);
    });
  }
  function isFinished$factory_0() {
    return getPropertyCallableRef('isFinished', 1, KMutableProperty1, function (receiver) {
      return receiver.u8e();
    }, function (receiver, value) {
      return receiver.t8e(value);
    });
  }
  function resetSnapValue$factory() {
    return getPropertyCallableRef('resetSnapValue', 1, KMutableProperty1, function (receiver) {
      return receiver.w8e();
    }, function (receiver, value) {
      return receiver.v8e(value);
    });
  }
  function resetSnapValue$factory_0() {
    return getPropertyCallableRef('resetSnapValue', 1, KMutableProperty1, function (receiver) {
      return receiver.w8e();
    }, function (receiver, value) {
      return receiver.v8e(value);
    });
  }
  function value$factory_3() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.v();
    }, function (receiver, value) {
      return receiver.w7x(value);
    });
  }
  function value$factory_4() {
    return getPropertyCallableRef('value', 1, KMutableProperty1, function (receiver) {
      return receiver.v();
    }, function (receiver, value) {
      return receiver.w7x(value);
    });
  }
  function durationNanos$factory() {
    return getPropertyCallableRef('durationNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.q8e();
    }, function (receiver, value) {
      return receiver.y8d(value);
    });
  }
  function durationNanos$factory_0() {
    return getPropertyCallableRef('durationNanos', 1, KMutableProperty1, function (receiver) {
      return receiver.q8e();
    }, function (receiver, value) {
      return receiver.y8d(value);
    });
  }
  function data$factory() {
    return getPropertyCallableRef('data', 1, KMutableProperty1, function (receiver) {
      return receiver.g8f();
    }, function (receiver, value) {
      return receiver.f8f(value);
    });
  }
  function data$factory_0() {
    return getPropertyCallableRef('data', 1, KMutableProperty1, function (receiver) {
      return receiver.g8f();
    }, function (receiver, value) {
      return receiver.f8f(value);
    });
  }
  function currentState$factory_1() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.w56();
    }, function (receiver, value) {
      return receiver.w88(value);
    });
  }
  function currentState$factory_2() {
    return getPropertyCallableRef('currentState', 1, KMutableProperty1, function (receiver) {
      return receiver.w56();
    }, function (receiver, value) {
      return receiver.w88(value);
    });
  }
  function targetState$factory_3() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.p56();
    }, function (receiver, value) {
      return receiver.m8g(value);
    });
  }
  function targetState$factory_4() {
    return getPropertyCallableRef('targetState', 1, KMutableProperty1, function (receiver) {
      return receiver.p56();
    }, function (receiver, value) {
      return receiver.m8g(value);
    });
  }
  var properties_initialized_Transition_kt_wb2qvd;
  function _init_properties_Transition_kt__s6zoln() {
    if (!properties_initialized_Transition_kt_wb2qvd) {
      properties_initialized_Transition_kt_wb2qvd = true;
      SeekableTransitionStateTotalDurationChanged = SeekableTransitionStateTotalDurationChanged$lambda;
      var tmp = LazyThreadSafetyMode_NONE_getInstance();
      SeekableStateObserver$delegate = lazy(tmp, SeekableStateObserver$delegate$lambda);
    }
  }
  function get_FloatToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return FloatToVector;
  }
  var FloatToVector;
  function get_IntToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntToVector;
  }
  var IntToVector;
  function get_DpToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpToVector;
  }
  var DpToVector;
  function get_DpOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpOffsetToVector;
  }
  var DpOffsetToVector;
  function get_SizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return SizeToVector;
  }
  var SizeToVector;
  function get_OffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return OffsetToVector;
  }
  var OffsetToVector;
  function get_IntOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntOffsetToVector;
  }
  var IntOffsetToVector;
  function get_IntSizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntSizeToVector;
  }
  var IntSizeToVector;
  function get_RectToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return RectToVector;
  }
  var RectToVector;
  function lerp(start, stop, fraction) {
    _init_properties_VectorConverters_kt__g28mmu();
    return start * (1 - fraction) + stop * fraction;
  }
  function get_VectorConverter(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_FloatToVector();
  }
  function TwoWayConverter(convertToVector, convertFromVector) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new TwoWayConverterImpl(convertToVector, convertFromVector);
  }
  function TwoWayConverterImpl(convertToVector, convertFromVector) {
    this.f8h_1 = convertToVector;
    this.g8h_1 = convertFromVector;
  }
  protoOf(TwoWayConverterImpl).b7y = function () {
    return this.f8h_1;
  };
  protoOf(TwoWayConverterImpl).f7y = function () {
    return this.g8h_1;
  };
  function get_VectorConverter_0(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntToVector();
  }
  function get_VectorConverter_1(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntSizeToVector();
  }
  function get_VectorConverter_2(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntOffsetToVector();
  }
  function get_VectorConverter_3(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_RectToVector();
  }
  function get_VectorConverter_4(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_SizeToVector();
  }
  function get_VectorConverter_5(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_OffsetToVector();
  }
  function get_VectorConverter_6(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpToVector();
  }
  function get_VectorConverter_7(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpOffsetToVector();
  }
  function FloatToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function FloatToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return it.b81_1;
  }
  function IntToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function IntToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return numberToInt(it.b81_1);
  }
  function DpToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(_Dp___get_value__impl__geb1vb(it.z3h_1));
  }
  function DpToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Dp(_Dp___init__impl__ms3zkb(it.b81_1));
  }
  function DpOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Dp___get_value__impl__geb1vb(_DpOffset___get_x__impl__uauqb5(it.g3i_1)), _Dp___get_value__impl__geb1vb(_DpOffset___get_y__impl__1h898y(it.g3i_1)));
  }
  function DpOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = it.e81_1;
    var tmp = _Dp___init__impl__ms3zkb(this_0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_1 = it.f81_1;
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(this_1);
    return new DpOffset_0(DpOffset(tmp, tmp$ret$1));
  }
  function SizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Size___get_width__impl__58y75t(it.d3h_1), _Size___get_height__impl__a04p02(it.d3h_1));
  }
  function SizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Size_0(Size(it.e81_1, it.f81_1));
  }
  function OffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Offset___get_x__impl__xvi35n(it.g3g_1), _Offset___get_y__impl__8bzhra(it.g3g_1));
  }
  function OffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Offset_0(Offset(it.e81_1, it.f81_1));
  }
  function IntOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntOffset___get_x__impl__qiqr5o(it.i3i_1), _IntOffset___get_y__impl__2avpwj(it.i3i_1));
  }
  function IntOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = it.e81_1;
    var tmp = roundToInt(this_0);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = it.f81_1;
    var tmp$ret$3 = roundToInt(this_1);
    return new IntOffset_0(IntOffset(tmp, tmp$ret$3));
  }
  function IntSizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntSize___get_width__impl__d9yl4o(it.q3i_1), _IntSize___get_height__impl__prv63b(it.q3i_1));
  }
  function IntSizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = it.e81_1;
    var tmp$ret$1 = roundToInt(this_0);
    var tmp = coerceAtLeast(tmp$ret$1, 0);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = it.f81_1;
    var tmp$ret$3 = roundToInt(this_1);
    return new IntSize_0(IntSize(tmp, coerceAtLeast(tmp$ret$3, 0)));
  }
  function RectToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector4D(it.i3g_1, it.j3g_1, it.k3g_1, it.l3g_1);
  }
  function RectToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Rect(it.l81_1, it.m81_1, it.n81_1, it.o81_1);
  }
  var properties_initialized_VectorConverters_kt_cg0a6g;
  function _init_properties_VectorConverters_kt__g28mmu() {
    if (!properties_initialized_VectorConverters_kt_cg0a6g) {
      properties_initialized_VectorConverters_kt_cg0a6g = true;
      var tmp = FloatToVector$lambda;
      FloatToVector = TwoWayConverter(tmp, FloatToVector$lambda_0);
      var tmp_0 = IntToVector$lambda;
      IntToVector = TwoWayConverter(tmp_0, IntToVector$lambda_0);
      var tmp_1 = DpToVector$lambda;
      DpToVector = TwoWayConverter(tmp_1, DpToVector$lambda_0);
      var tmp_2 = DpOffsetToVector$lambda;
      DpOffsetToVector = TwoWayConverter(tmp_2, DpOffsetToVector$lambda_0);
      var tmp_3 = SizeToVector$lambda;
      SizeToVector = TwoWayConverter(tmp_3, SizeToVector$lambda_0);
      var tmp_4 = OffsetToVector$lambda;
      OffsetToVector = TwoWayConverter(tmp_4, OffsetToVector$lambda_0);
      var tmp_5 = IntOffsetToVector$lambda;
      IntOffsetToVector = TwoWayConverter(tmp_5, IntOffsetToVector$lambda_0);
      var tmp_6 = IntSizeToVector$lambda;
      IntSizeToVector = TwoWayConverter(tmp_6, IntSizeToVector$lambda_0);
      var tmp_7 = RectToVector$lambda;
      RectToVector = TwoWayConverter(tmp_7, RectToVector$lambda_0);
    }
  }
  function Spring() {
    this.h8h_1 = 10000.0;
    this.i8h_1 = 1500.0;
    this.j8h_1 = 400.0;
    this.k8h_1 = 200.0;
    this.l8h_1 = 50.0;
    this.m8h_1 = 0.2;
    this.n8h_1 = 0.5;
    this.o8h_1 = 0.75;
    this.p8h_1 = 1.0;
    this.q8h_1 = 0.01;
  }
  var Spring_instance;
  function Spring_getInstance() {
    return Spring_instance;
  }
  function VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $this) {
    var tmp;
    if (dampingRatio === VOID) {
      tmp = 1.0;
    } else {
      tmp = dampingRatio;
    }
    dampingRatio = tmp;
    var tmp_0;
    if (stiffness === VOID) {
      tmp_0 = 1500.0;
    } else {
      tmp_0 = stiffness;
    }
    stiffness = tmp_0;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    VectorizedSpringSpec.call($this, dampingRatio, stiffness, createSpringAnimations(visibilityThreshold, dampingRatio, stiffness));
    return $this;
  }
  function VectorizedSpringSpec_init_$Create$(dampingRatio, stiffness, visibilityThreshold) {
    return VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, objectCreate(protoOf(VectorizedSpringSpec)));
  }
  function VectorizedSpringSpec(dampingRatio, stiffness, anims) {
    this.r8h_1 = dampingRatio;
    this.s8h_1 = stiffness;
    this.t8h_1 = new VectorizedFloatAnimationSpec(anims);
  }
  protoOf(VectorizedSpringSpec).i80 = function () {
    return this.t8h_1.i80();
  };
  protoOf(VectorizedSpringSpec).n80 = function (initialValue, targetValue, initialVelocity) {
    return this.t8h_1.n80(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).d80 = function (initialValue, targetValue, initialVelocity) {
    return this.t8h_1.d80(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).k80 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.t8h_1.k80(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).p80 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.t8h_1.p80(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function VectorizedFiniteAnimationSpec() {
  }
  function VectorizedAnimationSpec() {
  }
  function _get_valueVector__r10idf($this) {
    var tmp = $this.v8h_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl($this) {
    var tmp = $this.w8h_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_endVelocityVector__l8kbka($this) {
    var tmp = $this.x8h_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('endVelocityVector');
    }
  }
  function VectorizedFloatAnimationSpec_init_$Init$(anim, $this) {
    VectorizedFloatAnimationSpec.call($this, new VectorizedFloatAnimationSpec$1(anim));
    return $this;
  }
  function VectorizedFloatAnimationSpec_init_$Create$(anim) {
    return VectorizedFloatAnimationSpec_init_$Init$(anim, objectCreate(protoOf(VectorizedFloatAnimationSpec)));
  }
  function VectorizedFloatAnimationSpec$1($anim) {
    this.y8h_1 = $anim;
  }
  protoOf(VectorizedFloatAnimationSpec$1).p = function (index) {
    return this.y8h_1;
  };
  function VectorizedFloatAnimationSpec(anims) {
    this.u8h_1 = anims;
  }
  protoOf(VectorizedFloatAnimationSpec).k80 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.v8h_1 == null)) {
      this.v8h_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf(this).c7y();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf(this).e7y(i, this.u8h_1.p(i).c82(playTimeNanos, initialValue.d7y(i), targetValue.d7y(i), initialVelocity.d7y(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf(this);
  };
  protoOf(VectorizedFloatAnimationSpec).p80 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.w8h_1 == null)) {
      this.w8h_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).c7y();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl(this).e7y(i, this.u8h_1.p(i).d82(playTimeNanos, initialValue.d7y(i), targetValue.d7y(i), initialVelocity.d7y(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl(this);
  };
  protoOf(VectorizedFloatAnimationSpec).d80 = function (initialValue, targetValue, initialVelocity) {
    if (!!(this.x8h_1 == null)) {
      this.x8h_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_endVelocityVector__l8kbka(this).c7y();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_endVelocityVector__l8kbka(this).e7y(i, this.u8h_1.p(i).e82(initialValue.d7y(i), targetValue.d7y(i), initialVelocity.d7y(i)));
      }
       while (inductionVariable < last);
    return _get_endVelocityVector__l8kbka(this);
  };
  protoOf(VectorizedFloatAnimationSpec).n80 = function (initialValue, targetValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    // Inline function 'kotlin.collections.forEach' call
    var progression = until(0, initialValue.c7y());
    var inductionVariable = progression.b1_1;
    var last = progression.c1_1;
    if (inductionVariable <= last)
      do {
        var element = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.VectorizedFloatAnimationSpec.getDurationNanos.<anonymous>' call
        var it = element;
        var tmp0 = maxDuration;
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = this.u8h_1.p(it).f82(initialValue.d7y(it), targetValue.d7y(it), initialVelocity.d7y(it));
        maxDuration = tmp0.a1(b) >= 0 ? tmp0 : b;
      }
       while (!(element === last));
    return maxDuration;
  };
  function createSpringAnimations(visibilityThreshold, dampingRatio, stiffness) {
    if (!(visibilityThreshold == null)) {
      return new createSpringAnimations$1(visibilityThreshold, dampingRatio, stiffness);
    } else {
      return new createSpringAnimations$2(dampingRatio, stiffness);
    }
  }
  function VectorizedDurationBasedAnimationSpec() {
  }
  function VectorizedTweenSpec(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.b8i_1 = durationMillis;
    this.c8i_1 = delayMillis;
    this.d8i_1 = easing;
    this.e8i_1 = VectorizedFloatAnimationSpec_init_$Create$(new FloatTweenSpec(this.b8i_1, this.c8i_1, this.d8i_1));
  }
  protoOf(VectorizedTweenSpec).z8h = function () {
    return this.b8i_1;
  };
  protoOf(VectorizedTweenSpec).a8i = function () {
    return this.c8i_1;
  };
  protoOf(VectorizedTweenSpec).k80 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.e8i_1.k80(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedTweenSpec).p80 = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.e8i_1.p80(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function createSpringAnimations$1($visibilityThreshold, $dampingRatio, $stiffness) {
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    var this_0 = until(0, $visibilityThreshold.c7y());
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var inductionVariable = this_0.b1_1;
    var last = this_0.c1_1;
    if (inductionVariable <= last)
      do {
        var item = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.<no name provided>.anims.<anonymous>' call
        var index = item;
        var tmp$ret$0 = new FloatSpringSpec($dampingRatio, $stiffness, $visibilityThreshold.d7y(index));
        destination.e(tmp$ret$0);
      }
       while (!(item === last));
    tmp.f8i_1 = destination;
  }
  protoOf(createSpringAnimations$1).p = function (index) {
    return this.f8i_1.p(index);
  };
  function createSpringAnimations$2($dampingRatio, $stiffness) {
    this.g8i_1 = new FloatSpringSpec($dampingRatio, $stiffness);
  }
  protoOf(createSpringAnimations$2).p = function (index) {
    return this.g8i_1;
  };
  var rectVisibilityThreshold;
  function get_visibilityThresholdMap() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return visibilityThresholdMap;
  }
  var visibilityThresholdMap;
  function get_VisibilityThreshold(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return IntOffset(1, 1);
  }
  function get_VisibilityThreshold_0(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return IntSize(1, 1);
  }
  var properties_initialized_VisibilityThresholds_kt_k6rdp8;
  function _init_properties_VisibilityThresholds_kt__rvu6yi() {
    if (!properties_initialized_VisibilityThresholds_kt_k6rdp8) {
      properties_initialized_VisibilityThresholds_kt_k6rdp8 = true;
      rectVisibilityThreshold = new Rect(0.5, 0.5, 0.5, 0.5);
      visibilityThresholdMap = mapOf([to(get_VectorConverter_0(IntCompanionObject_instance), 1.0), to(get_VectorConverter_1(Companion_getInstance_0()), 1.0), to(get_VectorConverter_2(Companion_getInstance_1()), 1.0), to(get_VectorConverter(FloatCompanionObject_instance), 0.01), to(get_VectorConverter_3(Companion_getInstance_2()), 0.5), to(get_VectorConverter_4(Companion_getInstance_3()), 0.5), to(get_VectorConverter_5(Companion_getInstance_4()), 0.5), to(get_VectorConverter_6(Companion_getInstance_5()), 0.1), to(get_VectorConverter_7(Companion_getInstance_6()), 0.1)]);
    }
  }
  function AtomicReference(value) {
    this.a84_1 = value;
  }
  protoOf(AtomicReference).h12 = function () {
    // Inline function 'kotlinx.atomicfu.atomicfu_getValue' call
    return this.a84_1;
  };
  protoOf(AtomicReference).u2b = function (expect, newValue) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.atomicfu_compareAndSet' call
      if (equals(this.a84_1, expect)) {
        // Inline function 'androidx.compose.animation.core.AtomicReference.compareAndSet.<set-delegate>' call
        this.a84_1 = newValue;
        tmp$ret$0 = true;
        break $l$block_0;
      } else {
        tmp$ret$0 = false;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  };
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  //region block: post-declaration
  protoOf(TargetBasedAnimation).l80 = isFinishedFromNanos;
  protoOf(StartDelayVectorizedAnimationSpec).d80 = getEndVelocity;
  protoOf(FloatSpringSpec).g82 = vectorize;
  protoOf(FloatTweenSpec).e82 = getEndVelocity_0;
  protoOf(FloatTweenSpec).g82 = vectorize;
  protoOf(SegmentImpl).e8f = isTransitioningTo;
  protoOf(VectorizedFloatAnimationSpec).i80 = get_isInfinite;
  protoOf(VectorizedTweenSpec).n80 = getDurationNanos;
  protoOf(VectorizedTweenSpec).i80 = get_isInfinite;
  protoOf(VectorizedTweenSpec).d80 = getEndVelocity;
  //endregion
  //region block: init
  UNSET = 3.4028235E38;
  Spring_instance = new Spring();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Animatable_0;
  _.$_$.b = Animatable;
  _.$_$.c = AnimationVector2D;
  _.$_$.d = CubicBezierEasing;
  _.$_$.e = get_FastOutSlowInEasing;
  _.$_$.f = get_LinearEasing;
  _.$_$.g = SeekableTransitionState;
  _.$_$.h = isTransitioningTo;
  _.$_$.i = Segment;
  _.$_$.j = TweenSpec;
  _.$_$.k = TwoWayConverter;
  _.$_$.l = get_VectorConverter_2;
  _.$_$.m = get_VectorConverter_6;
  _.$_$.n = get_VectorConverter_1;
  _.$_$.o = get_VectorConverter;
  _.$_$.p = get_VisibilityThreshold;
  _.$_$.q = get_VisibilityThreshold_0;
  _.$_$.r = createChildTransitionInternal;
  _.$_$.s = createDeferredAnimation;
  _.$_$.t = rememberTransition;
  _.$_$.u = spring;
  _.$_$.v = tween;
  _.$_$.w = animate_0;
  _.$_$.x = Spring_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-animation-animation-core.js.map
