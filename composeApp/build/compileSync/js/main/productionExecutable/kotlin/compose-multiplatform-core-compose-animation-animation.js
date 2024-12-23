(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-animation-animation-core.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    globalThis['compose-multiplatform-core-compose-animation-animation'] = factory(typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-animation-animation'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_collection_internal_collection, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.s4;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.r4;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var get_LocalLayoutDirection = kotlin_org_jetbrains_compose_ui_ui.$_$.w2;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var mutableScatterMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.r;
  var equals = kotlin_kotlin.$_$.ba;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.x3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.o4;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var isInterface = kotlin_kotlin.$_$.za;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var VOID = kotlin_kotlin.$_$.e;
  var mutableFloatStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.u;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.t3;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.s3;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.v3;
  var ParentDataModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.l1;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var KMutableProperty0 = kotlin_kotlin.$_$.hc;
  var THROW_ISE = kotlin_kotlin.$_$.af;
  var getLocalDelegateReference = kotlin_kotlin.$_$.fa;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var get_VectorConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n;
  var createDeferredAnimation = kotlin_org_jetbrains_compose_animation_animation_core.$_$.s;
  var clipToBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.c;
  var isTransitioningTo = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h;
  var Segment = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var fillArrayVal = kotlin_kotlin.$_$.ca;
  var get_lastIndex = kotlin_kotlin.$_$.r6;
  var compareTo = kotlin_kotlin.$_$.z9;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.k1;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.v;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var layout = kotlin_org_jetbrains_compose_ui_ui.$_$.n1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var Spring_instance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.x;
  var get_VisibilityThreshold = kotlin_org_jetbrains_compose_animation_animation_core.$_$.q;
  var KMutableProperty1 = kotlin_kotlin.$_$.ic;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ha;
  var Enum = kotlin_kotlin.$_$.pe;
  var createChildTransitionInternal = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r;
  var produceState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var get_lastIndex_0 = kotlin_kotlin.$_$.q6;
  var KProperty0 = kotlin_kotlin.$_$.jc;
  var FunctionAdapter = kotlin_kotlin.$_$.p9;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var hashCode = kotlin_kotlin.$_$.ja;
  var CoroutineImpl = kotlin_kotlin.$_$.l9;
  var initMetadataForLambda = kotlin_kotlin.$_$.oa;
  var ProduceStateScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var snapshotFlow = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.u3;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.v1;
  var LayoutModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.i1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.la;
  var plus = kotlin_kotlin.$_$.k7;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a3;
  var get_VectorConverter_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.j;
  var emptyMap = kotlin_kotlin.$_$.s5;
  var toString = kotlin_kotlin.$_$.ig;
  var toString_0 = kotlin_kotlin.$_$.ob;
  var getBooleanHashCode = kotlin_kotlin.$_$.ea;
  var getNumberHashCode = kotlin_kotlin.$_$.ga;
  var TransformOrigin__toString_impl_nn7ftd = kotlin_org_jetbrains_compose_ui_ui.$_$.f4;
  var TransformOrigin__hashCode_impl_pmqpcw = kotlin_org_jetbrains_compose_ui_ui.$_$.c4;
  var initMetadataForInterface = kotlin_kotlin.$_$.na;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.o3;
  var get_VectorConverter_1 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.w1;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.xf;
  var ensureNotNull = kotlin_kotlin.$_$.pf;
  var IntOffset__minus_impl_4m69hb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b1;
  var IntOffset__plus_impl_nqoa9b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui.$_$.h4;
  var _TransformOrigin___get_pivotFractionX__impl__a9pmci = kotlin_org_jetbrains_compose_ui_ui.$_$.d4;
  var _TransformOrigin___get_pivotFractionY__impl__ijwupp = kotlin_org_jetbrains_compose_ui_ui.$_$.e4;
  var AnimationVector2D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.c;
  var TransformOrigin = kotlin_org_jetbrains_compose_ui_ui.$_$.h;
  var TransformOrigin_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.i;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k;
  var get_VisibilityThreshold_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.p;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ContentTransform, 'ContentTransform');
  initMetadataForClass(ChildData, 'ChildData', VOID, VOID, [ParentDataModifier]);
  initMetadataForClass(LayoutModifierWithPassThroughIntrinsics, 'LayoutModifierWithPassThroughIntrinsics', VOID, VOID, [LayoutModifier]);
  initMetadataForClass(SizeModifier, 'SizeModifier', VOID, LayoutModifierWithPassThroughIntrinsics);
  initMetadataForClass(AnimatedContentTransitionScopeImpl, 'AnimatedContentTransitionScopeImpl', VOID, VOID, [Segment]);
  initMetadataForClass(AnimatedContentScopeImpl, 'AnimatedContentScopeImpl');
  initMetadataForClass(AnimatedContentMeasurePolicy, 'AnimatedContentMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForClass(SizeTransformImpl, 'SizeTransformImpl');
  initMetadataForClass(AnimatedContent$$inlined$fastForEach$1$4$1$1);
  initMetadataForClass(EnterExitState, 'EnterExitState', VOID, Enum);
  initMetadataForClass(AnimatedVisibilityScopeImpl, 'AnimatedVisibilityScopeImpl');
  initMetadataForClass(AnimatedEnterExitMeasurePolicy, 'AnimatedEnterExitMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(AnimatedEnterExitImpl$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AnimatedEnterExitImpl$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(LayoutModifierNodeWithPassThroughIntrinsics, 'LayoutModifierNodeWithPassThroughIntrinsics', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(EnterTransition, 'EnterTransition');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ExitTransition, 'ExitTransition');
  initMetadataForClass(TransitionData, 'TransitionData', TransitionData);
  initMetadataForClass(EnterTransitionImpl, 'EnterTransitionImpl', VOID, EnterTransition);
  initMetadataForClass(Fade, 'Fade');
  initMetadataForClass(Scale, 'Scale');
  initMetadataForClass(ExitTransitionImpl, 'ExitTransitionImpl', VOID, ExitTransition);
  initMetadataForInterface(GraphicsLayerBlockForEnterExit, 'GraphicsLayerBlockForEnterExit');
  initMetadataForClass(EnterExitTransitionElement, 'EnterExitTransitionElement', VOID, ModifierNodeElement);
  initMetadataForClass(EnterExitTransitionModifierNode, 'EnterExitTransitionModifierNode', VOID, LayoutModifierNodeWithPassThroughIntrinsics);
  initMetadataForClass(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0, 'sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0', VOID, VOID, [GraphicsLayerBlockForEnterExit, FunctionAdapter]);
  //endregion
  function AnimatedContent(_this__u8e3s4, modifier, transitionSpec, contentAlignment, contentKey, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var transitionSpec_0 = {_v: transitionSpec};
    var contentAlignment_0 = {_v: contentAlignment};
    var contentKey_0 = {_v: contentKey};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v28(-114689412);
    sourceInformation($composer_0, 'C(AnimatedContent)P(3,4,1,2)705@34084L222,711@34405L6,714@34537L7,715@34565L106,719@34759L51,720@34832L69,808@39387L58,809@39479L45,819@39798L52,810@39529L327:AnimatedContent.kt#xbi5r1');
    var $dirty = $changed;
    if (!(($default & -2147483648) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1w(_this__u8e3s4) ? 4 : 2);
    if (!(($default & 1) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1w(modifier_0._v) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.m26(transitionSpec_0._v) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.m1w(contentAlignment_0._v) ? 2048 : 1024);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.m26(contentKey_0._v) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.m26(content) ? 131072 : 65536);
    if (!(($dirty & 74899) === 74898) || !$composer_0.d25()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 2) === 0)) {
        sourceInformationMarkerStart($composer_0, -801919159, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.d27();
        var tmp;
        if (false || it === Companion_getInstance().w1z_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
          var value = AnimatedContent$lambda;
          this_0.o27(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        transitionSpec_0._v = tmp0_group;
      }
      if (!(($default & 4) === 0)) {
        contentAlignment_0._v = Companion_getInstance_0().j59_1;
      }
      if (!(($default & 8) === 0)) {
        sourceInformationMarkerStart($composer_0, -801909103, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_1 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = this_1.d27();
        var tmp_1;
        if (false || it_0 === Companion_getInstance().w1z_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
          var value_0 = AnimatedContent$lambda_0;
          this_1.o27(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp_2 = tmp_1;
        var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        contentKey_0._v = tmp1_group;
      }
      if (isTraceInProgress()) {
        traceEventStart(-114689412, $dirty, -1, 'androidx.compose.animation.AnimatedContent (AnimatedContent.kt:713)');
      }
      var tmp4 = get_LocalLayoutDirection();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.u27(tmp4);
      sourceInformationMarkerEnd($composer_1);
      var layoutDirection = tmp0;
      sourceInformationMarkerStart($composer_0, -801903883, 'CC(remember):AnimatedContent.kt#9igjgp');
      var tmp7 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = tmp7.d27();
      var tmp_3;
      if (invalid || it_1 === Companion_getInstance().w1z_1) {
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
        var value_1 = new AnimatedContentTransitionScopeImpl(_this__u8e3s4, contentAlignment_0._v, layoutDirection);
        tmp7.o27(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var rootScope = tmp2_group;
      sourceInformationMarkerStart($composer_0, -801897730, 'CC(remember):AnimatedContent.kt#9igjgp');
      var tmp9 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = tmp9.d27();
      var tmp_5;
      if (invalid_0 || it_2 === Companion_getInstance().w1z_1) {
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
        var value_2 = mutableStateListOf([_this__u8e3s4.w56()]);
        tmp9.o27(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var currentlyVisible = tmp3_group;
      sourceInformationMarkerStart($composer_0, -801895376, 'CC(remember):AnimatedContent.kt#9igjgp');
      var tmp11 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_3 = tmp11.d27();
      var tmp_7;
      if (invalid_1 || it_3 === Companion_getInstance().w1z_1) {
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
        var value_3 = mutableScatterMapOf();
        tmp11.o27(value_3);
        tmp_7 = value_3;
      } else {
        tmp_7 = it_3;
      }
      var tmp_8 = tmp_7;
      var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var contentMap = tmp4_group;
      if (!currentlyVisible.kf(_this__u8e3s4.w56())) {
        currentlyVisible.f2();
        currentlyVisible.s23(_this__u8e3s4.w56());
      }
      if (equals(_this__u8e3s4.w56(), _this__u8e3s4.p56())) {
        if (!(currentlyVisible.n() === 1) || !equals(currentlyVisible.p(0), _this__u8e3s4.w56())) {
          currentlyVisible.f2();
          currentlyVisible.s23(_this__u8e3s4.w56());
        }
        if (!(contentMap.n() === 1) || contentMap.j2(_this__u8e3s4.w56())) {
          contentMap.f2();
        }
        rootScope.i8o_1 = contentAlignment_0._v;
        rootScope.j8o_1 = layoutDirection;
      }
      if (!equals(_this__u8e3s4.w56(), _this__u8e3s4.p56()) && !currentlyVisible.kf(_this__u8e3s4.p56())) {
        var tmp$ret$22;
        $l$block: {
          // Inline function 'kotlin.collections.indexOfFirst' call
          var index = 0;
          var _iterator__ex2g4s = currentlyVisible.j();
          while (_iterator__ex2g4s.k()) {
            var item = _iterator__ex2g4s.l();
            // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
            if (equals(contentKey_0._v(item), contentKey_0._v(_this__u8e3s4.p56()))) {
              tmp$ret$22 = index;
              break $l$block;
            }
            index = index + 1 | 0;
          }
          tmp$ret$22 = -1;
        }
        var id = tmp$ret$22;
        if (id === -1) {
          currentlyVisible.s23(_this__u8e3s4.p56());
        } else {
          currentlyVisible.p2w(id, _this__u8e3s4.p56());
        }
      }
      $composer_0.j25(-801837164);
      sourceInformation($composer_0, '*756@36778L2565');
      if (!contentMap.j2(_this__u8e3s4.p56()) || !contentMap.j2(_this__u8e3s4.w56())) {
        contentMap.f2();
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        var last = currentlyVisible.n() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index_0 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item_0 = currentlyVisible.p(index_0);
            // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
            // Inline function 'kotlin.run' call
            // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>' call
            var dispatchReceiver = rememberComposableLambda(885640742, true, AnimatedContent$lambda_1(transitionSpec_0, rootScope, _this__u8e3s4, item_0, currentlyVisible, content), $composer_0, 54);
            // Inline function 'androidx.compose.runtime.remember' call
            var $composer_2 = $composer_0;
            sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid_2 = $composer_2.m1w(dispatchReceiver);
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it_4 = $composer_2.d27();
            var tmp_9;
            if (invalid_2 || it_4 === Companion_getInstance().w1z_1) {
              // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>' call
              var value_4 = ComposableLambda$invoke$ref_0(dispatchReceiver);
              $composer_2.o27(value_4);
              tmp_9 = value_4;
            } else {
              tmp_9 = it_4;
            }
            var tmp_10 = tmp_9;
            var tmp0_0 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
            sourceInformationMarkerEnd($composer_2);
            contentMap.or(item_0, tmp0_0);
          }
           while (inductionVariable <= last);
      }
      $composer_0.l25();
      var tmp5_remember$arg$1 = _this__u8e3s4.o8e();
      sourceInformationMarkerStart($composer_0, -801749627, 'CC(remember):AnimatedContent.kt#9igjgp');
      var tmp17 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = !!($composer_0.m1w(rootScope) | $composer_0.m1w(tmp5_remember$arg$1));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_5 = tmp17.d27();
      var tmp_11;
      if (invalid_3 || it_5 === Companion_getInstance().w1z_1) {
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
        var value_5 = transitionSpec_0._v(rootScope);
        tmp17.o27(value_5);
        tmp_11 = value_5;
      } else {
        tmp_11 = it_5;
      }
      var tmp_12 = tmp_11;
      var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var contentTransform = tmp6_group;
      var sizeModifier = rootScope.n8o(contentTransform, $composer_0, 0);
      var tmp0_modifier = modifier_0._v.f5a(sizeModifier);
      sourceInformationMarkerStart($composer_0, -801736481, 'CC(remember):AnimatedContent.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_6 = this_2.d27();
      var tmp_13;
      if (false || it_6 === Companion_getInstance().w1z_1) {
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
        var value_6 = new AnimatedContentMeasurePolicy(rootScope);
        this_2.o27(value_6);
        tmp_13 = value_6;
      } else {
        tmp_13 = it_6;
      }
      var tmp_14 = tmp_13;
      var tmp7_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_1 = tmp0_modifier;
      var $composer_3 = $composer_0;
      sourceInformationMarkerStart($composer_3, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_1 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_3, 0);
      var localMap = $composer_3.b27();
      var materialized = materialize($composer_3, modifier_1);
      var tmp0_1 = Companion_getInstance_1().r6f_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
      var tmp_15 = $composer_4.e25();
      if (!isInterface(tmp_15, Applier)) {
        invalidApplier();
      }
      $composer_4.x25();
      if ($composer_4.s25()) {
        $composer_4.y25(tmp0_1);
      } else {
        $composer_4.b26();
      }
      // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_4);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp7_group, Companion_getInstance_1().w6f_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().v6f_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_1().z6f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.s25() || !equals($this$with.d27(), compositeKeyHash)) {
        $this$with.o27(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).g26(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().t6f_1);
      // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>' call
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 1023567688, 'C:AnimatedContent.kt#xbi5r1');
      $composer_5.j25(-1491001814);
      sourceInformation($composer_5, '');
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = currentlyVisible.n() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_1 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_1 = currentlyVisible.p(index_1);
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>' call
          $composer_5.j22(1908315325, contentKey_0._v(item_1));
          sourceInformation($composer_5, '815@39722L8');
          var tmp0_safe_receiver = contentMap.l2(item_1);
          tmp0_safe_receiver == null || tmp0_safe_receiver($composer_5, 0);
          $composer_5.m22();
        }
         while (inductionVariable_0 <= last_0);
      $composer_5.l25();
      sourceInformationMarkerEnd($composer_5);
      $composer_4.d26();
      sourceInformationMarkerEnd($composer_4);
      sourceInformationMarkerEnd($composer_3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.n1z();
    }
    var tmp8_safe_receiver = $composer_0.w28();
    if (tmp8_safe_receiver == null)
      null;
    else {
      tmp8_safe_receiver.i2d(AnimatedContent$lambda_2(_this__u8e3s4, modifier_0, transitionSpec_0, contentAlignment_0, contentKey_0, content, $changed, $default));
    }
  }
  function ContentTransform(targetContentEnter, initialContentExit, targetContentZIndex, sizeTransform) {
    targetContentZIndex = targetContentZIndex === VOID ? 0.0 : targetContentZIndex;
    sizeTransform = sizeTransform === VOID ? SizeTransform() : sizeTransform;
    this.o8o_1 = targetContentEnter;
    this.p8o_1 = initialContentExit;
    this.q8o_1 = mutableFloatStateOf(targetContentZIndex);
    this.r8o_1 = sizeTransform;
  }
  protoOf(ContentTransform).s8o = function (_set____db54di) {
    var tmp0 = this.q8o_1;
    targetContentZIndex$factory();
    tmp0.q2n(_set____db54di);
    return Unit_instance;
  };
  protoOf(ContentTransform).t8o = function () {
    var tmp0 = this.q8o_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    targetContentZIndex$factory_0();
    return tmp0.r2n();
  };
  function togetherWith(_this__u8e3s4, exit) {
    return new ContentTransform(_this__u8e3s4, exit);
  }
  function AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda(this$0, this$1) {
    return function ($this$animate) {
      var tmp0_safe_receiver = this$0.l8o_1.l2($this$animate.h8e());
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = tmp0_safe_receiver.v();
        tmp = tmp_0 == null ? null : tmp_0.q3i_1;
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_1;
      var tmp_2 = tmp1_elvis_lhs;
      if ((tmp_2 == null ? null : new IntSize(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_2().p3i_1;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var initial = tmp_1;
      var tmp2_safe_receiver = this$0.l8o_1.l2($this$animate.p56());
      var tmp_3;
      if (tmp2_safe_receiver == null) {
        tmp_3 = null;
      } else {
        var tmp_4 = tmp2_safe_receiver.v();
        tmp_3 = tmp_4 == null ? null : tmp_4.q3i_1;
      }
      var tmp3_elvis_lhs = tmp_3;
      var tmp_5;
      var tmp_6 = tmp3_elvis_lhs;
      if ((tmp_6 == null ? null : new IntSize(tmp_6)) == null) {
        tmp_5 = Companion_getInstance_2().p3i_1;
      } else {
        tmp_5 = tmp3_elvis_lhs;
      }
      var target = tmp_5;
      var tmp4_safe_receiver = this$1.v8o_1.v();
      var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.x8o(initial, target);
      return tmp5_elvis_lhs == null ? spring() : tmp5_elvis_lhs;
    };
  }
  function AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda_0(this$0) {
    return function (it) {
      var tmp0_safe_receiver = this$0.l8o_1.l2(it);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = tmp0_safe_receiver.v();
        tmp = tmp_0 == null ? null : tmp_0.q3i_1;
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_1;
      var tmp_2 = tmp1_elvis_lhs;
      if ((tmp_2 == null ? null : new IntSize(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_2().p3i_1;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      return new IntSize(tmp_1);
    };
  }
  function AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda_1(this$0, $placeable, $measuredSize) {
    return function ($this$layout) {
      var offset = this$0.i8o_1.e5a(IntSize_0($placeable.w5o_1, $placeable.x5o_1), $measuredSize, LayoutDirection_Ltr_getInstance());
      $this$layout.w67($placeable, offset);
      return Unit_instance;
    };
  }
  function ChildData(isTarget) {
    this.y8o_1 = mutableStateOf(isTarget);
  }
  protoOf(ChildData).z8o = function (_set____db54di) {
    var tmp0 = this.y8o_1;
    isTarget$factory();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  };
  protoOf(ChildData).a8p = function () {
    var tmp0 = this.y8o_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    isTarget$factory_0();
    return tmp0.v();
  };
  protoOf(ChildData).g68 = function (_this__u8e3s4, parentData) {
    return this;
  };
  function SizeModifier($outer, sizeAnimation, sizeTransform) {
    this.w8o_1 = $outer;
    LayoutModifierWithPassThroughIntrinsics.call(this);
    this.u8o_1 = sizeAnimation;
    this.v8o_1 = sizeTransform;
  }
  protoOf(SizeModifier).u5o = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.v5o(constraints);
    var tmp = AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda(this.w8o_1, this);
    var size = this.u8o_1.h8f(tmp, AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda_0(this.w8o_1));
    this.w8o_1.m8o_1 = size;
    var measuredSize;
    if (_this__u8e3s4.b66()) {
      measuredSize = IntSize_0(placeable.w5o_1, placeable.x5o_1);
    } else {
      measuredSize = size.v().q3i_1;
    }
    var tmp_0 = _IntSize___get_width__impl__d9yl4o(measuredSize);
    var tmp_1 = _IntSize___get_height__impl__prv63b(measuredSize);
    return _this__u8e3s4.b5p(tmp_0, tmp_1, VOID, AnimatedContentTransitionScopeImpl$SizeModifier$measure$lambda_1(this.w8o_1, placeable, measuredSize));
  };
  function createSizeAnimationModifier$lambda($shouldAnimateSize$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldAnimateSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $shouldAnimateSize$delegate.v();
  }
  function createSizeAnimationModifier$lambda_0($shouldAnimateSize$delegate, value) {
    getLocalDelegateReference('shouldAnimateSize', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $shouldAnimateSize$delegate.d1l(value);
    return Unit_instance;
  }
  function AnimatedContentTransitionScopeImpl(transition, contentAlignment, layoutDirection) {
    this.h8o_1 = transition;
    this.i8o_1 = contentAlignment;
    this.j8o_1 = layoutDirection;
    this.k8o_1 = mutableStateOf(new IntSize(Companion_getInstance_2().p3i_1));
    this.l8o_1 = mutableScatterMapOf();
    this.m8o_1 = null;
  }
  protoOf(AnimatedContentTransitionScopeImpl).h8e = function () {
    return this.h8o_1.o8e().h8e();
  };
  protoOf(AnimatedContentTransitionScopeImpl).p56 = function () {
    return this.h8o_1.o8e().p56();
  };
  protoOf(AnimatedContentTransitionScopeImpl).b8p = function (_set____db54di) {
    var tmp0 = this.k8o_1;
    measuredSize$factory();
    var value = new IntSize(_set____db54di);
    tmp0.d1l(value);
    return Unit_instance;
  };
  protoOf(AnimatedContentTransitionScopeImpl).c8p = function () {
    var tmp0 = this.k8o_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    measuredSize$factory_0();
    return tmp0.v().q3i_1;
  };
  protoOf(AnimatedContentTransitionScopeImpl).n8o = function (contentTransform, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 93755870, 'C(createSizeAnimationModifier)574@27302L40,575@27371L52:AnimatedContent.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(93755870, $changed, -1, 'androidx.compose.animation.AnimatedContentTransitionScopeImpl.createSizeAnimationModifier (AnimatedContent.kt:573)');
    }
    sourceInformationMarkerStart($composer_0, -546171924, 'CC(remember):AnimatedContent.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.m1w(this);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d27();
    var tmp;
    if (invalid || it === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.animation.AnimatedContentTransitionScopeImpl.createSizeAnimationModifier.<anonymous>' call
      var value = mutableStateOf(false);
      $composer_0.o27(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var shouldAnimateSize$delegate = tmp1_group;
    var sizeTransform = rememberUpdatedState(contentTransform.r8o_1, $composer_0, 0);
    if (equals(this.h8o_1.w56(), this.h8o_1.p56())) {
      createSizeAnimationModifier$lambda_0(shouldAnimateSize$delegate, false);
    } else {
      if (!(sizeTransform.v() == null)) {
        createSizeAnimationModifier$lambda_0(shouldAnimateSize$delegate, true);
      }
    }
    $composer_0.j25(-546156510);
    sourceInformation($composer_0, '585@27840L48,586@27901L205');
    var tmp_1;
    if (createSizeAnimationModifier$lambda(shouldAnimateSize$delegate)) {
      var tmp_2 = get_VectorConverter(Companion_getInstance_2());
      var sizeAnimation = createDeferredAnimation(this.h8o_1, tmp_2, null, $composer_0, 0, 2);
      sourceInformationMarkerStart($composer_0, -546152591, 'CC(remember):AnimatedContent.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.m1w(sizeAnimation);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.d27();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance().w1z_1) {
        // Inline function 'androidx.compose.animation.AnimatedContentTransitionScopeImpl.createSizeAnimationModifier.<anonymous>' call
        var tmp_4;
        var tmp0_safe_receiver = sizeTransform.v();
        if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d8p()) === false) {
          tmp_4 = Companion_instance;
        } else {
          tmp_4 = clipToBounds(Companion_instance);
        }
        var value_0 = tmp_4.f5a(new SizeModifier(this, sizeAnimation, sizeTransform));
        $composer_0.o27(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_5 = tmp_3;
      var tmp2_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp_1 = tmp2_group;
    } else {
      this.m8o_1 = null;
      tmp_1 = Companion_instance;
    }
    var tmp3_group = tmp_1;
    $composer_0.l25();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp3_group;
  };
  function AnimatedContentScopeImpl(animatedVisibilityScope) {
    this.e8p_1 = animatedVisibilityScope;
  }
  function AnimatedContentMeasurePolicy$measure$lambda($placeables, this$0, $maxWidth, $maxHeight) {
    return function ($this$layout) {
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>.<anonymous>' call
        if (element == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>.<anonymous>.<anonymous>' call
          var offset = this$0.f8p_1.i8o_1.e5a(IntSize_0(element.w5o_1, element.x5o_1), IntSize_0($maxWidth, $maxHeight), LayoutDirection_Ltr_getInstance());
          $this$layout.u67(element, _IntOffset___get_x__impl__qiqr5o(offset), _IntOffset___get_y__impl__2avpwj(offset));
        }
      }
      return Unit_instance;
    };
  }
  function AnimatedContentMeasurePolicy(rootScope) {
    this.f8p_1 = rootScope;
  }
  protoOf(AnimatedContentMeasurePolicy).e67 = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.n();
    var placeables = fillArrayVal(Array(size), null);
    var targetSize = Companion_getInstance_2().p3i_1;
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = measurables.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.p(index);
        // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
        var tmp = item.c68();
        var tmp0_safe_receiver = tmp instanceof ChildData ? tmp : null;
        if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a8p()) === true) {
          // Inline function 'kotlin.also' call
          var this_0 = item.v5o(constraints);
          // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>.<anonymous>' call
          targetSize = IntSize_0(this_0.w5o_1, this_0.x5o_1);
          placeables[index] = this_0;
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    var last_0 = measurables.n() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = measurables.p(index_0);
        // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
        if (placeables[index_0] == null) {
          placeables[index_0] = item_0.v5o(constraints);
        }
      }
       while (inductionVariable_0 <= last_0);
    var tmp_0;
    if (_this__u8e3s4.b66()) {
      tmp_0 = _IntSize___get_width__impl__d9yl4o(targetSize);
    } else {
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'kotlin.collections.maxByOrNull' call
        // Inline function 'kotlin.collections.isEmpty' call
        if (placeables.length === 0) {
          tmp$ret$3 = null;
          break $l$block_0;
        }
        var maxElem = placeables[0];
        var lastIndex = get_lastIndex(placeables);
        if (lastIndex === 0) {
          tmp$ret$3 = maxElem;
          break $l$block_0;
        }
        // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
        var tmp0_safe_receiver_0 = maxElem;
        var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.w5o_1;
        var maxValue = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        var inductionVariable_1 = 1;
        if (inductionVariable_1 <= lastIndex)
          do {
            var i = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var e = placeables[i];
            // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
            var tmp1_elvis_lhs_0 = e == null ? null : e.w5o_1;
            var v = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === lastIndex));
        tmp$ret$3 = maxElem;
      }
      var tmp0_safe_receiver_1 = tmp$ret$3;
      var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : tmp0_safe_receiver_1.w5o_1;
      tmp_0 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
    }
    var maxWidth = tmp_0;
    var tmp_1;
    if (_this__u8e3s4.b66()) {
      tmp_1 = _IntSize___get_height__impl__prv63b(targetSize);
    } else {
      var tmp$ret$7;
      $l$block_2: {
        // Inline function 'kotlin.collections.maxByOrNull' call
        // Inline function 'kotlin.collections.isEmpty' call
        if (placeables.length === 0) {
          tmp$ret$7 = null;
          break $l$block_2;
        }
        var maxElem_0 = placeables[0];
        var lastIndex_0 = get_lastIndex(placeables);
        if (lastIndex_0 === 0) {
          tmp$ret$7 = maxElem_0;
          break $l$block_2;
        }
        // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
        var tmp0_safe_receiver_2 = maxElem_0;
        var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : tmp0_safe_receiver_2.x5o_1;
        var maxValue_0 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
        var inductionVariable_2 = 1;
        if (inductionVariable_2 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var e_0 = placeables[i_0];
            // Inline function 'androidx.compose.animation.AnimatedContentMeasurePolicy.measure.<anonymous>' call
            var tmp1_elvis_lhs_3 = e_0 == null ? null : e_0.x5o_1;
            var v_0 = tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3;
            if (compareTo(maxValue_0, v_0) < 0) {
              maxElem_0 = e_0;
              maxValue_0 = v_0;
            }
          }
           while (!(i_0 === lastIndex_0));
        tmp$ret$7 = maxElem_0;
      }
      var tmp2_safe_receiver = tmp$ret$7;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.x5o_1;
      tmp_1 = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    }
    var maxHeight = tmp_1;
    if (!_this__u8e3s4.b66()) {
      this.f8p_1.b8p(IntSize_0(maxWidth, maxHeight));
    }
    return _this__u8e3s4.b5p(maxWidth, maxHeight, VOID, AnimatedContentMeasurePolicy$measure$lambda(placeables, this, maxWidth, maxHeight));
  };
  function SizeTransform(clip, sizeAnimationSpec) {
    clip = clip === VOID ? true : clip;
    var tmp;
    if (sizeAnimationSpec === VOID) {
      tmp = SizeTransform$lambda;
    } else {
      tmp = sizeAnimationSpec;
    }
    sizeAnimationSpec = tmp;
    return new SizeTransformImpl(clip, sizeAnimationSpec);
  }
  function SizeTransformImpl(clip, sizeAnimationSpec) {
    clip = clip === VOID ? true : clip;
    this.g8p_1 = clip;
    this.h8p_1 = sizeAnimationSpec;
  }
  protoOf(SizeTransformImpl).d8p = function () {
    return this.g8p_1;
  };
  protoOf(SizeTransformImpl).x8o = function (initialSize, targetSize) {
    return this.h8p_1(new IntSize(initialSize), new IntSize(targetSize));
  };
  function AnimatedContent$lambda($this$null) {
    var tmp = fadeIn(tween(220, 90));
    var tmp0_animationSpec = tween(220, 90);
    return togetherWith(tmp.i8p(scaleIn(tmp0_animationSpec, 0.92)), fadeOut(tween(90)));
  }
  function AnimatedContent$lambda_0(it) {
    return it;
  }
  function AnimatedContent$lambda$lambda$lambda($placeable, $specOnEnter) {
    return function ($this$layout) {
      $this$layout.t67($placeable, 0, 0, $specOnEnter.t8o());
      return Unit_instance;
    };
  }
  function AnimatedContent$lambda$lambda($specOnEnter) {
    return function ($this$layout, measurable, constraints) {
      var placeable = measurable.v5o(constraints.e3h_1);
      var tmp = placeable.w5o_1;
      var tmp_0 = placeable.x5o_1;
      return $this$layout.b5p(tmp, tmp_0, VOID, AnimatedContent$lambda$lambda$lambda(placeable, $specOnEnter));
    };
  }
  function AnimatedContent$lambda$lambda_0($stateForContent) {
    return function (it) {
      return equals(it, $stateForContent);
    };
  }
  function AnimatedContent$lambda$lambda_1($exit) {
    return function (currentState, targetState) {
      return currentState.equals(EnterExitState_PostExit_getInstance()) && targetState.equals(EnterExitState_PostExit_getInstance()) && !$exit.p8p().n8p_1;
    };
  }
  function AnimatedContent$$inlined$fastForEach$1$4$1$1($currentlyVisible, $stateForContent, $rootScope) {
    this.q8p_1 = $currentlyVisible;
    this.r8p_1 = $stateForContent;
    this.s8p_1 = $rootScope;
  }
  protoOf(AnimatedContent$$inlined$fastForEach$1$4$1$1).qy = function () {
    // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    this.q8p_1.s2k(this.r8p_1);
    this.s8p_1.l8o_1.p2(this.r8p_1);
  };
  function AnimatedContent$lambda$lambda$lambda_0($currentlyVisible, $stateForContent, $rootScope) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new AnimatedContent$$inlined$fastForEach$1$4$1$1($currentlyVisible, $stateForContent, $rootScope);
    };
  }
  function AnimatedContent$lambda$lambda_2($currentlyVisible, $stateForContent, $rootScope, $content) {
    return function ($this$AnimatedEnterExitImpl, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C793@38802L230,793@38779L253,*801@39194L43,802@39265L24:AnimatedContent.kt#xbi5r1');
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.m1w($this$AnimatedEnterExitImpl) : $composer_0.m26($this$AnimatedEnterExitImpl)) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 19) === 18) || !$composer_0.d25()) {
        if (isTraceInProgress()) {
          traceEventStart(-616195562, $dirty, -1, 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous> (AnimatedContent.kt:793)');
        }
        sourceInformationMarkerStart($composer_0, 641996302, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(!!($composer_0.m1w($currentlyVisible) | $composer_0.m26($stateForContent)) | $composer_0.m26($rootScope));
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.d27();
        var tmp_1;
        if (invalid || it === Companion_getInstance().w1z_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = AnimatedContent$lambda$lambda$lambda_0($currentlyVisible, $stateForContent, $rootScope);
          $composer_0.o27(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        DisposableEffect($this$AnimatedEnterExitImpl, tmp0_group, $composer_0, 14 & $dirty);
        $rootScope.l8o_1.or($stateForContent, ($this$AnimatedEnterExitImpl instanceof AnimatedVisibilityScopeImpl ? $this$AnimatedEnterExitImpl : THROW_CCE()).u8p_1);
        sourceInformationMarkerStart($composer_0, 642008659, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.d27();
        var tmp_3;
        if (false || it_0 === Companion_getInstance().w1z_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = new AnimatedContentScopeImpl($this$AnimatedEnterExitImpl);
          $composer_0.o27(value_0);
          tmp_3 = value_0;
        } else {
          tmp_3 = it_0;
        }
        var tmp_4 = tmp_3;
        var tmp1_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        $content(tmp1_group, $stateForContent, $composer_0, 0);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_instance;
        }
        tmp_0 = tmp_5;
      } else {
        $composer_0.n1z();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.h3e(p0, p1, p2);
    };
  }
  function AnimatedContent$lambda_1($transitionSpec, $rootScope, $this_AnimatedContent, $stateForContent, $currentlyVisible, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C757@36814L38,761@37028L323,768@37384L125,779@37953L328,775@37761L25,786@38417L233,791@38669L660,773@37692L1637:AnimatedContent.kt#xbi5r1');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.d25()) {
        if (isTraceInProgress()) {
          traceEventStart(885640742, $changed, -1, 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous> (AnimatedContent.kt:757)');
        }
        sourceInformationMarkerStart($composer_0, 1908224079, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.d27();
        var tmp_0;
        if (false || it === Companion_getInstance().w1z_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = $transitionSpec._v($rootScope);
          $composer_0.o27(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp_1 = tmp_0;
        var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var specOnEnter = tmp0_group;
        var tmp1_remember$arg$0 = equals($this_AnimatedContent.o8e().p56(), $stateForContent);
        sourceInformationMarkerStart($composer_0, 1908231212, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.n26(tmp1_remember$arg$0);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.d27();
        var tmp_2;
        if (invalid || it_0 === Companion_getInstance().w1z_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_3;
          if (equals($this_AnimatedContent.o8e().p56(), $stateForContent)) {
            tmp_3 = Companion_getInstance_6().v8p_1;
          } else {
            tmp_3 = $transitionSpec._v($rootScope).p8o_1;
          }
          var value_0 = tmp_3;
          $composer_0.o27(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_4 = tmp_2;
        var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var exit = tmp2_group;
        sourceInformationMarkerStart($composer_0, 1908242406, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.d27();
        var tmp_5;
        if (false || it_1 === Companion_getInstance().w1z_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = new ChildData(equals($stateForContent, $this_AnimatedContent.p56()));
          $composer_0.o27(value_1);
          tmp_5 = value_1;
        } else {
          tmp_5 = it_1;
        }
        var tmp_6 = tmp_5;
        var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var childData = tmp3_group;
        var tmp0_enter = specOnEnter.o8o_1;
        var tmp_7 = Companion_instance;
        sourceInformationMarkerStart($composer_0, 1908260817, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_0.m26(specOnEnter);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_0.d27();
        var tmp_8;
        if (invalid_0 || it_2 === Companion_getInstance().w1z_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = AnimatedContent$lambda$lambda(specOnEnter);
          $composer_0.o27(value_2);
          tmp_8 = value_2;
        } else {
          tmp_8 = it_2;
        }
        var tmp_9 = tmp_8;
        var tmp4_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var tmp_10 = layout(tmp_7, tmp4_group);
        // Inline function 'kotlin.apply' call
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        childData.z8o(equals($stateForContent, $this_AnimatedContent.p56()));
        var tmp1_modifier = tmp_10.f5a(childData);
        sourceInformationMarkerStart($composer_0, 1908254370, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = $composer_0.m26($stateForContent);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = $composer_0.d27();
        var tmp_11;
        if (invalid_1 || it_3 === Companion_getInstance().w1z_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_3 = AnimatedContent$lambda$lambda_0($stateForContent);
          $composer_0.o27(value_3);
          tmp_11 = value_3;
        } else {
          tmp_11 = it_3;
        }
        var tmp_12 = tmp_11;
        var tmp5_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        sourceInformationMarkerStart($composer_0, 1908275570, 'CC(remember):AnimatedContent.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = $composer_0.m1w(exit);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_4 = $composer_0.d27();
        var tmp_13;
        if (invalid_2 || it_4 === Companion_getInstance().w1z_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_4 = AnimatedContent$lambda$lambda_1(exit);
          $composer_0.o27(value_4);
          tmp_13 = value_4;
        } else {
          tmp_13 = it_4;
        }
        var tmp_14 = tmp_13;
        var tmp6_group = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'kotlin.run' call
        // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-616195562, true, AnimatedContent$lambda$lambda_2($currentlyVisible, $stateForContent, $rootScope, $content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_3 = $composer_1.m1w(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_5 = $composer_1.d27();
        var tmp_15;
        if (invalid_3 || it_5 === Companion_getInstance().w1z_1) {
          // Inline function 'androidx.compose.animation.AnimatedContent.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_5 = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.o27(value_5);
          tmp_15 = value_5;
        } else {
          tmp_15 = it_5;
        }
        var tmp_16 = tmp_15;
        var tmp0 = (tmp_16 == null ? true : !(tmp_16 == null)) ? tmp_16 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        AnimatedEnterExitImpl($this_AnimatedContent, tmp5_group, tmp1_modifier, tmp0_enter, exit, tmp6_group, null, tmp0, $composer_0, 12582912, 64);
        var tmp_17;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_17 = Unit_instance;
        }
        tmp = tmp_17;
      } else {
        $composer_0.n1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.b25(p0, p1);
    };
  }
  function AnimatedContent$lambda_2($this_AnimatedContent, $modifier, $transitionSpec, $contentAlignment, $contentKey, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedContent($this_AnimatedContent, $modifier._v, $transitionSpec._v, $contentAlignment._v, $contentKey._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SizeTransform$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_2())));
  }
  function targetContentZIndex$factory() {
    return getPropertyCallableRef('targetContentZIndex', 1, KMutableProperty1, function (receiver) {
      return receiver.t8o();
    }, function (receiver, value) {
      return receiver.s8o(value);
    });
  }
  function targetContentZIndex$factory_0() {
    return getPropertyCallableRef('targetContentZIndex', 1, KMutableProperty1, function (receiver) {
      return receiver.t8o();
    }, function (receiver, value) {
      return receiver.s8o(value);
    });
  }
  function measuredSize$factory() {
    return getPropertyCallableRef('measuredSize', 1, KMutableProperty1, function (receiver) {
      return new IntSize(receiver.c8p());
    }, function (receiver, value) {
      return receiver.b8p(value.q3i_1);
    });
  }
  function measuredSize$factory_0() {
    return getPropertyCallableRef('measuredSize', 1, KMutableProperty1, function (receiver) {
      return new IntSize(receiver.c8p());
    }, function (receiver, value) {
      return receiver.b8p(value.q3i_1);
    });
  }
  function isTarget$factory() {
    return getPropertyCallableRef('isTarget', 1, KMutableProperty1, function (receiver) {
      return receiver.a8p();
    }, function (receiver, value) {
      return receiver.z8o(value);
    });
  }
  function isTarget$factory_0() {
    return getPropertyCallableRef('isTarget', 1, KMutableProperty1, function (receiver) {
      return receiver.a8p();
    }, function (receiver, value) {
      return receiver.z8o(value);
    });
  }
  var EnterExitState_PreEnter_instance;
  var EnterExitState_Visible_instance;
  var EnterExitState_PostExit_instance;
  var EnterExitState_entriesInitialized;
  function EnterExitState_initEntries() {
    if (EnterExitState_entriesInitialized)
      return Unit_instance;
    EnterExitState_entriesInitialized = true;
    EnterExitState_PreEnter_instance = new EnterExitState('PreEnter', 0);
    EnterExitState_Visible_instance = new EnterExitState('Visible', 1);
    EnterExitState_PostExit_instance = new EnterExitState('PostExit', 2);
  }
  function EnterExitState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimatedEnterExitImpl(transition, visible, modifier, enter, exit, shouldDisposeBlock, onLookaheadMeasured, content, $composer, $changed, $default) {
    var onLookaheadMeasured_0 = {_v: onLookaheadMeasured};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v28(-891967166);
    sourceInformation($composer_0, 'C(AnimatedEnterExitImpl)P(6,7,3,1,2,5,4)741@39659L116,745@39818L40,752@40073L399,747@39898L574,768@40570L69,773@40810L47,794@41913L50,769@40652L1325:AnimatedVisibility.kt#xbi5r1');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1w(transition) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m26(visible) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.m1w(modifier) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.m1w(enter) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.m1w(exit) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.m26(shouldDisposeBlock) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ((($changed & 2097152) === 0 ? $composer_0.m1w(onLookaheadMeasured_0._v) : $composer_0.m26(onLookaheadMeasured_0._v)) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.m26(content) ? 8388608 : 4194304);
    if (!(($dirty & 4793491) === 4793490) || !$composer_0.d25()) {
      if (!(($default & 64) === 0)) {
        onLookaheadMeasured_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-891967166, $dirty, -1, 'androidx.compose.animation.AnimatedEnterExitImpl (AnimatedVisibility.kt:737)');
      }
      if (visible(transition.p56()) || visible(transition.w56()) || transition.n8e() || transition.a8g()) {
        // Inline function 'androidx.compose.animation.core.createChildTransition' call
        var $changed_0 = 48 | 14 & $dirty;
        var label = 'EnterExitTransition';
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1215497572, 'CC(createChildTransition)1814@74186L36,1815@74246L74,1816@74343L39,1817@74394L63:Transition.kt#pdpnli');
        if (!((0 & 1) === 0))
          label = 'ChildTransition';
        sourceInformationMarkerStart($composer_1, 272028789, 'CC(remember):Transition.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = ($changed_0 & 14 ^ 6) > 4 && $composer_1.m1w(transition) || ($changed_0 & 6) === 4;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.d27();
        var tmp;
        if (invalid || it === Companion_getInstance().w1z_1) {
          // Inline function 'androidx.compose.animation.core.createChildTransition.<anonymous>' call
          var value = transition.w56();
          $composer_1.o27(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        var initialParentState = tmp1_group;
        var tmp5 = transition.n8e() ? transition.w56() : initialParentState;
        // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
        var $changed_1 = 112 & $changed_0 >> 3;
        var $composer_2 = $composer_1;
        $composer_2.j25(-466616829);
        sourceInformation($composer_2, 'C742@39737L28:AnimatedVisibility.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(-466616829, $changed_1, -1, 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous> (AnimatedVisibility.kt:742)');
        }
        var tmp0 = targetEnterExit(transition, visible, tmp5, $composer_2, 14 & $dirty | 112 & $dirty | 896 & $changed_1 << 6);
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_2.l25();
        var initialState = tmp0;
        var tmp8 = transition.p56();
        // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
        var $changed_2 = 112 & $changed_0 >> 3;
        var $composer_3 = $composer_1;
        $composer_3.j25(-466616829);
        sourceInformation($composer_3, 'C742@39737L28:AnimatedVisibility.kt#xbi5r1');
        if (isTraceInProgress()) {
          traceEventStart(-466616829, $changed_2, -1, 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous> (AnimatedVisibility.kt:742)');
        }
        var tmp0_0 = targetEnterExit(transition, visible, tmp8, $composer_3, 14 & $dirty | 112 & $dirty | 896 & $changed_2 << 6);
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        $composer_3.l25();
        var targetState = tmp0_0;
        var tmp0_1 = createChildTransitionInternal(transition, initialState, targetState, label, $composer_1, 14 & $changed_0 | 7168 & $changed_0 << 6);
        sourceInformationMarkerEnd($composer_1);
        var childTransition = tmp0_1;
        var shouldDisposeBlockUpdated$delegate = rememberUpdatedState(shouldDisposeBlock, $composer_0, 14 & $dirty >> 15);
        var tmp_1 = shouldDisposeBlock(childTransition.w56(), childTransition.p56());
        sourceInformationMarkerStart($composer_0, 1581710007, 'CC(remember):AnimatedVisibility.kt#9igjgp');
        var tmp11 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!($composer_0.m1w(childTransition) | $composer_0.m1w(shouldDisposeBlockUpdated$delegate));
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = tmp11.d27();
        var tmp_2;
        if (invalid_0 || it_0 === Companion_getInstance().w1z_1) {
          // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
          var value_0 = AnimatedEnterExitImpl$slambda_0(childTransition, shouldDisposeBlockUpdated$delegate, null);
          tmp11.o27(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp_3 = tmp_2;
        var tmp0_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var shouldDisposeAfterExit$delegate = produceState(tmp_1, tmp0_group, $composer_0, 0);
        if (!get_exitFinished(childTransition) || !AnimatedEnterExitImpl$lambda_0(shouldDisposeAfterExit$delegate)) {
          sourceInformationMarkerStart($composer_0, 1581725581, 'CC(remember):AnimatedVisibility.kt#9igjgp');
          var tmp13 = $composer_0;
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_1 = ($dirty & 14) === 4;
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_1 = tmp13.d27();
          var tmp_4;
          if (invalid_1 || it_1 === Companion_getInstance().w1z_1) {
            // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
            var value_1 = new AnimatedVisibilityScopeImpl(childTransition);
            tmp13.o27(value_1);
            tmp_4 = value_1;
          } else {
            tmp_4 = it_1;
          }
          var tmp_5 = tmp_4;
          var tmp1_group_0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          var scope = tmp1_group_0;
          var tmp_6 = createModifier(childTransition, enter, exit, null, 'Built-in', $composer_0, 24576 | 112 & $dirty >> 6 | 896 & $dirty >> 6, 4);
          $composer_0.j25(1581736656);
          sourceInformation($composer_0, '775@40967L849');
          var tmp_7;
          if (!(onLookaheadMeasured_0._v == null)) {
            var tmp_8 = Companion_instance;
            sourceInformationMarkerStart($composer_0, 1581739065, 'CC(remember):AnimatedVisibility.kt#9igjgp');
            var tmp15 = $composer_0;
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid_2 = ($dirty & 3670016) === 1048576 || (!(($dirty & 2097152) === 0) && $composer_0.m26(onLookaheadMeasured_0._v));
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
            var it_2 = tmp15.d27();
            var tmp_9;
            if (invalid_2 || it_2 === Companion_getInstance().w1z_1) {
              // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
              var value_2 = AnimatedEnterExitImpl$lambda_1(onLookaheadMeasured_0);
              tmp15.o27(value_2);
              tmp_9 = value_2;
            } else {
              tmp_9 = it_2;
            }
            var tmp_10 = tmp_9;
            var tmp2_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
            sourceInformationMarkerEnd($composer_0);
            tmp_7 = layout(tmp_8, tmp2_group);
          } else {
            tmp_7 = Companion_instance;
          }
          var tmp3_group = tmp_7;
          $composer_0.l25();
          var tmp19 = modifier.f5a(tmp_6.f5a(tmp3_group));
          sourceInformationMarkerStart($composer_0, 1581768538, 'CC(remember):AnimatedVisibility.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var this_0 = $composer_0;
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it_3 = this_0.d27();
          var tmp_11;
          if (false || it_3 === Companion_getInstance().w1z_1) {
            // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
            var value_3 = new AnimatedEnterExitMeasurePolicy(scope);
            this_0.o27(value_3);
            tmp_11 = value_3;
          } else {
            tmp_11 = it_3;
          }
          var tmp_12 = tmp_11;
          var tmp4_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
          sourceInformationMarkerEnd($composer_0);
          // Inline function 'androidx.compose.ui.layout.Layout' call
          var modifier_0 = tmp19;
          var $composer_4 = $composer_0;
          sourceInformationMarkerStart($composer_4, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
          if (!((0 & 2) === 0))
            modifier_0 = Companion_instance;
          var compositeKeyHash = get_currentCompositeKeyHash($composer_4, 0);
          var localMap = $composer_4.b27();
          var materialized = materialize($composer_4, modifier_0);
          var tmp0_2 = Companion_getInstance_1().r6f_1;
          // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
          var $composer_5 = $composer_4;
          sourceInformationMarkerStart($composer_5, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
          var tmp_13 = $composer_5.e25();
          if (!isInterface(tmp_13, Applier)) {
            invalidApplier();
          }
          $composer_5.x25();
          if ($composer_5.s25()) {
            $composer_5.y25(tmp0_2);
          } else {
            $composer_5.b26();
          }
          // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
          var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_5);
          Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp4_group, Companion_getInstance_1().w6f_1);
          Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().v6f_1);
          // Inline function 'androidx.compose.runtime.Updater.set' call
          var block = Companion_getInstance_1().z6f_1;
          // Inline function 'kotlin.with' call
          // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
          var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
          if ($this$with.s25() || !equals($this$with.d27(), compositeKeyHash)) {
            $this$with.o27(compositeKeyHash);
            _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).g26(compositeKeyHash, block);
          }
          Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().t6f_1);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>' call
          var $composer_6 = $composer_5;
          sourceInformationMarkerStart($composer_6, 254461613, 'C770@40694L9:AnimatedVisibility.kt#xbi5r1');
          content(scope, $composer_6, 112 & $dirty >> 18);
          sourceInformationMarkerEnd($composer_6);
          $composer_5.d26();
          sourceInformationMarkerEnd($composer_5);
          sourceInformationMarkerEnd($composer_4);
        }
      }
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
      tmp5_safe_receiver.i2d(AnimatedEnterExitImpl$lambda_2(transition, visible, modifier, enter, exit, shouldDisposeBlock, onLookaheadMeasured_0, content, $changed, $default));
    }
  }
  function AnimatedVisibilityScopeImpl(transition) {
    this.t8p_1 = transition;
    this.u8p_1 = mutableStateOf(new IntSize(Companion_getInstance_2().p3i_1));
  }
  function targetEnterExit(_this__u8e3s4, visible, targetState, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 361571134, 'C(targetEnterExit)P(1):AnimatedVisibility.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(361571134, $changed, -1, 'androidx.compose.animation.targetEnterExit (AnimatedVisibility.kt:855)');
    }
    $composer_0.j22(-902048200, _this__u8e3s4);
    sourceInformation($composer_0, '868@44365L34');
    var tmp;
    if (_this__u8e3s4.n8e()) {
      var tmp_0;
      if (visible(targetState)) {
        tmp_0 = EnterExitState_Visible_getInstance();
      } else {
        var tmp_1;
        if (visible(_this__u8e3s4.w56())) {
          tmp_1 = EnterExitState_PostExit_getInstance();
        } else {
          tmp_1 = EnterExitState_PreEnter_getInstance();
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else {
      sourceInformationMarkerStart($composer_0, -902039492, 'CC(remember):AnimatedVisibility.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.d27();
      var tmp_2;
      if (false || it === Companion_getInstance().w1z_1) {
        // Inline function 'androidx.compose.animation.targetEnterExit.<anonymous>' call
        var value = mutableStateOf(false);
        $composer_0.o27(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp2_group = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var hasBeenVisible = tmp2_group;
      if (visible(_this__u8e3s4.w56())) {
        hasBeenVisible.d1l(true);
      }
      var tmp_4;
      if (visible(targetState)) {
        tmp_4 = EnterExitState_Visible_getInstance();
      } else {
        var tmp_5;
        if (hasBeenVisible.v()) {
          tmp_5 = EnterExitState_PostExit_getInstance();
        } else {
          tmp_5 = EnterExitState_PreEnter_getInstance();
        }
        tmp_4 = tmp_5;
      }
      tmp = tmp_4;
    }
    var tmp1 = tmp;
    $composer_0.m22();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1;
  }
  function get_exitFinished(_this__u8e3s4) {
    return _this__u8e3s4.w56().equals(EnterExitState_PostExit_getInstance()) && _this__u8e3s4.p56().equals(EnterExitState_PostExit_getInstance());
  }
  function AnimatedEnterExitMeasurePolicy$measure$lambda($placeables) {
    return function ($this$layout) {
      var this_0 = $placeables;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = this_0.n() - 1 | 0;
      var tmp;
      if (inductionVariable <= last) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.p(index);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>.<anonymous>' call
          $this$layout.u67(item, 0, 0);
        }
         while (inductionVariable <= last);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function AnimatedEnterExitMeasurePolicy(scope) {
    this.x8p_1 = scope;
    this.y8p_1 = false;
  }
  protoOf(AnimatedEnterExitMeasurePolicy).e67 = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'androidx.compose.ui.util.fastMap' call
    // Inline function 'kotlin.contracts.contract' call
    var target = ArrayList_init_$Create$(measurables.n());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = measurables.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.p(index);
        // Inline function 'androidx.compose.ui.util.fastMap.<anonymous>' call
        // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
        // Inline function 'kotlin.collections.plusAssign' call
        var element = item.v5o(constraints);
        target.e(element);
      }
       while (inductionVariable <= last);
    var placeables = target;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxBy' call
      // Inline function 'kotlin.contracts.contract' call
      if (placeables.q()) {
        tmp$ret$2 = null;
        break $l$block;
      }
      var maxElem = placeables.p(0);
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
      var maxValue = maxElem.w5o_1;
      var inductionVariable_0 = 1;
      var last_0 = get_lastIndex_0(placeables);
      if (inductionVariable_0 <= last_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var e = placeables.p(i);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
          var v = e.w5o_1;
          if (compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
         while (!(i === last_0));
      tmp$ret$2 = maxElem;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w5o_1;
    var maxWidth = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.util.fastMaxBy' call
      // Inline function 'kotlin.contracts.contract' call
      if (placeables.q()) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var maxElem_0 = placeables.p(0);
      // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
      var maxValue_0 = maxElem_0.x5o_1;
      var inductionVariable_1 = 1;
      var last_1 = get_lastIndex_0(placeables);
      if (inductionVariable_1 <= last_1)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var e_0 = placeables.p(i_0);
          // Inline function 'androidx.compose.animation.AnimatedEnterExitMeasurePolicy.measure.<anonymous>' call
          var v_0 = e_0.x5o_1;
          if (compareTo(maxValue_0, v_0) < 0) {
            maxElem_0 = e_0;
            maxValue_0 = v_0;
          }
        }
         while (!(i_0 === last_1));
      tmp$ret$5 = maxElem_0;
    }
    var tmp2_safe_receiver = tmp$ret$5;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.x5o_1;
    var maxHeight = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
    if (_this__u8e3s4.b66()) {
      this.y8p_1 = true;
      this.x8p_1.u8p_1.d1l(new IntSize(IntSize_0(maxWidth, maxHeight)));
    } else if (!this.y8p_1) {
      this.x8p_1.u8p_1.d1l(new IntSize(IntSize_0(maxWidth, maxHeight)));
    }
    return _this__u8e3s4.b5p(maxWidth, maxHeight, VOID, AnimatedEnterExitMeasurePolicy$measure$lambda(placeables));
  };
  function AnimatedEnterExitImpl$lambda($shouldDisposeBlockUpdated$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldDisposeBlockUpdated', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $shouldDisposeBlockUpdated$delegate.v();
  }
  function AnimatedEnterExitImpl$lambda_0($shouldDisposeAfterExit$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldDisposeAfterExit', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $shouldDisposeAfterExit$delegate.v();
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.z8p_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).n1h = function (value, $completion) {
    return this.z8p_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).q3 = function () {
    return this.z8p_1;
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
  function AnimatedEnterExitImpl$slambda$lambda($childTransition) {
    return function () {
      return get_exitFinished($childTransition);
    };
  }
  function AnimatedEnterExitImpl$slambda$slambda($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    this.i8q_1 = $this_produceState;
    this.j8q_1 = $childTransition;
    this.k8q_1 = $shouldDisposeBlockUpdated$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedEnterExitImpl$slambda$slambda).m8q = function (it, $completion) {
    var tmp = this.n8q(it, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(AnimatedEnterExitImpl$slambda$slambda).ba = function (p1, $completion) {
    return this.m8q((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedEnterExitImpl$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          var tmp_0;
          if (this.l8q_1) {
            tmp_0 = AnimatedEnterExitImpl$lambda(this.k8q_1)(this.j8q_1.w56(), this.j8q_1.p56());
          } else {
            tmp_0 = false;
          }
          this.i8q_1.d1l(tmp_0);
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
  protoOf(AnimatedEnterExitImpl$slambda$slambda).n8q = function (it, completion) {
    var i = new AnimatedEnterExitImpl$slambda$slambda(this.i8q_1, this.j8q_1, this.k8q_1, completion);
    i.l8q_1 = it;
    return i;
  };
  function AnimatedEnterExitImpl$slambda$slambda_0($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    var i = new AnimatedEnterExitImpl$slambda$slambda($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation);
    var l = function (it, $completion) {
      return i.m8q(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedEnterExitImpl$slambda($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    this.w8q_1 = $childTransition;
    this.x8q_1 = $shouldDisposeBlockUpdated$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedEnterExitImpl$slambda).z8q = function ($this$produceState, $completion) {
    var tmp = this.a8r($this$produceState, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(AnimatedEnterExitImpl$slambda).ba = function (p1, $completion) {
    return this.z8q((!(p1 == null) ? isInterface(p1, ProduceStateScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedEnterExitImpl$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            var tmp_0 = snapshotFlow(AnimatedEnterExitImpl$slambda$lambda(this.w8q_1));
            var tmp_1 = AnimatedEnterExitImpl$slambda$slambda_0(this.y8q_1, this.w8q_1, this.x8q_1, null);
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
  protoOf(AnimatedEnterExitImpl$slambda).a8r = function ($this$produceState, completion) {
    var i = new AnimatedEnterExitImpl$slambda(this.w8q_1, this.x8q_1, completion);
    i.y8q_1 = $this$produceState;
    return i;
  };
  function AnimatedEnterExitImpl$slambda_0($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    var i = new AnimatedEnterExitImpl$slambda($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation);
    var l = function ($this$produceState, $completion) {
      return i.z8q($this$produceState, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function AnimatedEnterExitImpl$lambda$lambda($$this$run) {
    return function ($this$layout) {
      $this$layout.u67($$this$run, 0, 0);
      return Unit_instance;
    };
  }
  function AnimatedEnterExitImpl$lambda_1($onLookaheadMeasured) {
    return function ($this$layout, measurable, constraints) {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.animation.AnimatedEnterExitImpl.<anonymous>.<anonymous>.<anonymous>' call
      var $this$run = measurable.v5o(constraints.e3h_1);
      if ($this$layout.b66()) {
        $onLookaheadMeasured._v.b8r(IntSize_0($this$run.w5o_1, $this$run.x5o_1));
      }
      var tmp = $this$run.w5o_1;
      var tmp_0 = $this$run.x5o_1;
      return $this$layout.b5p(tmp, tmp_0, VOID, AnimatedEnterExitImpl$lambda$lambda($this$run));
    };
  }
  function AnimatedEnterExitImpl$lambda_2($transition, $visible, $modifier, $enter, $exit, $shouldDisposeBlock, $onLookaheadMeasured, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedEnterExitImpl($transition, $visible, $modifier, $enter, $exit, $shouldDisposeBlock, $onLookaheadMeasured._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function EnterExitState_PreEnter_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_PreEnter_instance;
  }
  function EnterExitState_Visible_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_Visible_instance;
  }
  function EnterExitState_PostExit_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_PostExit_instance;
  }
  function get_InvalidSize() {
    _init_properties_AnimationModifier_kt__u6vzef();
    return InvalidSize;
  }
  var InvalidSize;
  function LayoutModifierNodeWithPassThroughIntrinsics() {
    Node.call(this);
  }
  function get_isValid(_this__u8e3s4) {
    _init_properties_AnimationModifier_kt__u6vzef();
    return !equals(_this__u8e3s4, get_InvalidSize());
  }
  function LayoutModifierWithPassThroughIntrinsics() {
  }
  var properties_initialized_AnimationModifier_kt_fvv7xx;
  function _init_properties_AnimationModifier_kt__u6vzef() {
    if (!properties_initialized_AnimationModifier_kt_fvv7xx) {
      properties_initialized_AnimationModifier_kt_fvv7xx = true;
      InvalidSize = IntSize_0(-2147483648, -2147483648);
    }
  }
  function get_TransformOriginVectorConverter() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return TransformOriginVectorConverter;
  }
  var TransformOriginVectorConverter;
  function get_DefaultAlphaAndScaleSpring() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultAlphaAndScaleSpring;
  }
  var DefaultAlphaAndScaleSpring;
  function get_DefaultOffsetAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultOffsetAnimationSpec;
  }
  var DefaultOffsetAnimationSpec;
  function get_DefaultSizeAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultSizeAnimationSpec;
  }
  var DefaultSizeAnimationSpec;
  function Companion() {
    Companion_instance_0 = this;
    this.c8r_1 = new EnterTransitionImpl(new TransitionData());
  }
  var Companion_instance_0;
  function Companion_getInstance_5() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function EnterTransition() {
    Companion_getInstance_5();
  }
  protoOf(EnterTransition).i8p = function (enter) {
    var tmp0_elvis_lhs = enter.p8p().j8p_1;
    var tmp = tmp0_elvis_lhs == null ? this.p8p().j8p_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = enter.p8p().k8p_1;
    var tmp_0 = tmp1_elvis_lhs == null ? this.p8p().k8p_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = enter.p8p().l8p_1;
    var tmp_1 = tmp2_elvis_lhs == null ? this.p8p().l8p_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = enter.p8p().m8p_1;
    return new EnterTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? this.p8p().m8p_1 : tmp3_elvis_lhs, VOID, plus(this.p8p().o8p_1, enter.p8p().o8p_1)));
  };
  protoOf(EnterTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_5().c8r_1)) {
      tmp = 'EnterTransition.None';
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.animation.EnterTransition.toString.<anonymous>' call
      var $this$run = this.p8p();
      var tmp3_safe_receiver = $this$run.j8p_1;
      var tmp_0 = 'EnterTransition: \nFade - ' + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nSlide - ';
      var tmp2_safe_receiver = $this$run.k8p_1;
      var tmp_1 = tmp_0 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nShrink - ';
      var tmp1_safe_receiver = $this$run.l8p_1;
      var tmp_2 = tmp_1 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nScale - ';
      var tmp0_safe_receiver = $this$run.m8p_1;
      tmp = tmp_2 + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString());
    }
    return tmp;
  };
  protoOf(EnterTransition).equals = function (other) {
    var tmp;
    if (other instanceof EnterTransition) {
      tmp = other.p8p().equals(this.p8p());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EnterTransition).hashCode = function () {
    return this.p8p().hashCode();
  };
  function Companion_0() {
    Companion_instance_1 = this;
    this.v8p_1 = new ExitTransitionImpl(new TransitionData());
    this.w8p_1 = new ExitTransitionImpl(new TransitionData(VOID, VOID, VOID, VOID, true));
  }
  var Companion_instance_1;
  function Companion_getInstance_6() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function ExitTransition() {
    Companion_getInstance_6();
  }
  protoOf(ExitTransition).d8r = function (exit) {
    var tmp0_elvis_lhs = exit.p8p().j8p_1;
    var tmp = tmp0_elvis_lhs == null ? this.p8p().j8p_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = exit.p8p().k8p_1;
    var tmp_0 = tmp1_elvis_lhs == null ? this.p8p().k8p_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = exit.p8p().l8p_1;
    var tmp_1 = tmp2_elvis_lhs == null ? this.p8p().l8p_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = exit.p8p().m8p_1;
    return new ExitTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp3_elvis_lhs == null ? this.p8p().m8p_1 : tmp3_elvis_lhs, exit.p8p().n8p_1 || this.p8p().n8p_1, plus(this.p8p().o8p_1, exit.p8p().o8p_1)));
  };
  protoOf(ExitTransition).equals = function (other) {
    var tmp;
    if (other instanceof ExitTransition) {
      tmp = other.p8p().equals(this.p8p());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ExitTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_6().v8p_1)) {
      tmp = 'ExitTransition.None';
    } else if (this.equals(Companion_getInstance_6().w8p_1)) {
      tmp = 'ExitTransition.KeepUntilTransitionsFinished';
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.animation.ExitTransition.toString.<anonymous>' call
      var $this$run = this.p8p();
      var tmp3_safe_receiver = $this$run.j8p_1;
      var tmp_0 = 'ExitTransition: \nFade - ' + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nSlide - ';
      var tmp2_safe_receiver = $this$run.k8p_1;
      var tmp_1 = tmp_0 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nShrink - ';
      var tmp1_safe_receiver = $this$run.l8p_1;
      var tmp_2 = tmp_1 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nScale - ';
      var tmp0_safe_receiver = $this$run.m8p_1;
      tmp = tmp_2 + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString()) + ',\nKeepUntilTransitionsFinished - ' + $this$run.n8p_1;
    }
    return tmp;
  };
  protoOf(ExitTransition).hashCode = function () {
    return this.p8p().hashCode();
  };
  function fadeIn(animationSpec, initialAlpha) {
    var tmp;
    if (animationSpec === VOID) {
      tmp = spring(VOID, 400.0);
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    initialAlpha = initialAlpha === VOID ? 0.0 : initialAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(new Fade(initialAlpha, animationSpec)));
  }
  function fadeOut(animationSpec, targetAlpha) {
    var tmp;
    if (animationSpec === VOID) {
      tmp = spring(VOID, 400.0);
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    targetAlpha = targetAlpha === VOID ? 0.0 : targetAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(new Fade(targetAlpha, animationSpec)));
  }
  function createModifier(_this__u8e3s4, enter, exit, isEnabled, label, $composer, $changed, $default) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var isEnabled_0 = {_v: isEnabled};
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 28261782, 'C(createModifier)867@38160L8,870@38224L31,871@38277L28,896@39249L56,898@39349L58:EnterExitTransition.kt#xbi5r1');
    if (!(($default & 4) === 0)) {
      sourceInformationMarkerStart($composer_0, -165056410, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.d27();
      var tmp;
      if (false || it === Companion_getInstance().w1z_1) {
        // Inline function 'androidx.compose.animation.createModifier.<anonymous>' call
        var value = createModifier$lambda;
        $composer_0.o27(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      isEnabled_0._v = tmp0_group;
    }
    if (isTraceInProgress()) {
      traceEventStart(28261782, $changed, -1, 'androidx.compose.animation.createModifier (EnterExitTransition.kt:869)');
    }
    var activeEnter = trackActiveEnter(_this__u8e3s4, enter, $composer_0, 14 & $changed | 112 & $changed);
    var activeExit = trackActiveExit(_this__u8e3s4, exit, $composer_0, 14 & $changed | 112 & $changed >> 3);
    var shouldAnimateSlide = !(activeEnter.p8p().k8p_1 == null) || !(activeExit.p8p().k8p_1 == null);
    var shouldAnimateSizeChange = !(activeEnter.p8p().l8p_1 == null) || !(activeExit.p8p().l8p_1 == null);
    $composer_0.j25(-165044049);
    sourceInformation($composer_0, '878@38627L27,878@38576L79');
    var tmp_1;
    if (shouldAnimateSlide) {
      var tmp_2 = get_VectorConverter_0(Companion_getInstance_3());
      sourceInformationMarkerStart($composer_0, -165041447, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.d27();
      var tmp_3;
      if (false || it_0 === Companion_getInstance().w1z_1) {
        // Inline function 'androidx.compose.animation.createModifier.<anonymous>' call
        var value_0 = label + ' slide';
        $composer_0.o27(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp_1 = createDeferredAnimation(_this__u8e3s4, tmp_2, tmp2_group, $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp_1 = null;
    }
    var tmp3_group = tmp_1;
    $composer_0.l25();
    var slideAnimation = tmp3_group;
    $composer_0.j25(-165038614);
    sourceInformation($composer_0, '883@38800L35,883@38751L85');
    var tmp_5;
    if (shouldAnimateSizeChange) {
      var tmp_6 = get_VectorConverter(Companion_getInstance_2());
      sourceInformationMarkerStart($composer_0, -165035903, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_0.d27();
      var tmp_7;
      if (false || it_1 === Companion_getInstance().w1z_1) {
        // Inline function 'androidx.compose.animation.createModifier.<anonymous>' call
        var value_1 = label + ' shrink/expand';
        $composer_0.o27(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp_8 = tmp_7;
      var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp_5 = createDeferredAnimation(_this__u8e3s4, tmp_6, tmp4_group, $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp_5 = null;
    }
    var tmp5_group = tmp_5;
    $composer_0.l25();
    var sizeAnimation = tmp5_group;
    $composer_0.j25(-165033189);
    sourceInformation($composer_0, '889@38995L48,887@38919L134');
    var tmp_9;
    if (shouldAnimateSizeChange) {
      var tmp_10 = get_VectorConverter_0(Companion_getInstance_3());
      sourceInformationMarkerStart($composer_0, -165029650, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_0.d27();
      var tmp_11;
      if (false || it_2 === Companion_getInstance().w1z_1) {
        // Inline function 'androidx.compose.animation.createModifier.<anonymous>' call
        var value_2 = label + ' InterruptionHandlingOffset';
        $composer_0.o27(value_2);
        tmp_11 = value_2;
      } else {
        tmp_11 = it_2;
      }
      var tmp_12 = tmp_11;
      var tmp6_group = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp_9 = createDeferredAnimation(_this__u8e3s4, tmp_10, tmp6_group, $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp_9 = null;
    }
    var tmp7_group = tmp_9;
    $composer_0.l25();
    var offsetAnimation = tmp7_group;
    var tmp_13;
    var tmp_14;
    var tmp0_safe_receiver = activeEnter.p8p().l8p_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.h8r_1) === false) {
      tmp_14 = true;
    } else {
      var tmp1_safe_receiver = activeExit.p8p().l8p_1;
      tmp_14 = (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.h8r_1) === false;
    }
    if (tmp_14) {
      tmp_13 = true;
    } else {
      tmp_13 = !shouldAnimateSizeChange;
    }
    var disableClip = tmp_13;
    var graphicsLayerBlock = createGraphicsLayerBlock(_this__u8e3s4, activeEnter, activeExit, label, $composer_0, 14 & $changed | 7168 & $changed >> 3);
    var tmp_15 = Companion_instance;
    sourceInformationMarkerStart($composer_0, -165018312, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.n26(disableClip) | (($changed & 7168 ^ 3072) > 2048 && $composer_0.m1w(isEnabled_0._v) || ($changed & 3072) === 2048));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_0.d27();
    var tmp_16;
    if (invalid || it_3 === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.animation.createModifier.<anonymous>' call
      var value_3 = createModifier$lambda_0(disableClip, isEnabled_0);
      $composer_0.o27(value_3);
      tmp_16 = value_3;
    } else {
      tmp_16 = it_3;
    }
    var tmp_17 = tmp_16;
    var tmp8_group = (tmp_17 == null ? true : !(tmp_17 == null)) ? tmp_17 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var tmp1 = graphicsLayer(tmp_15, tmp8_group).f5a(new EnterExitTransitionElement(_this__u8e3s4, sizeAnimation, offsetAnimation, slideAnimation, activeEnter, activeExit, isEnabled_0._v, graphicsLayerBlock));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1;
  }
  function TransitionData(fade, slide, changeSize, scale, hold, effectsMap) {
    fade = fade === VOID ? null : fade;
    slide = slide === VOID ? null : slide;
    changeSize = changeSize === VOID ? null : changeSize;
    scale = scale === VOID ? null : scale;
    hold = hold === VOID ? false : hold;
    effectsMap = effectsMap === VOID ? emptyMap() : effectsMap;
    this.j8p_1 = fade;
    this.k8p_1 = slide;
    this.l8p_1 = changeSize;
    this.m8p_1 = scale;
    this.n8p_1 = hold;
    this.o8p_1 = effectsMap;
  }
  protoOf(TransitionData).toString = function () {
    return 'TransitionData(fade=' + toString(this.j8p_1) + ', slide=' + toString(this.k8p_1) + ', changeSize=' + toString(this.l8p_1) + ', scale=' + toString(this.m8p_1) + ', hold=' + this.n8p_1 + ', effectsMap=' + toString_0(this.o8p_1) + ')';
  };
  protoOf(TransitionData).hashCode = function () {
    var result = this.j8p_1 == null ? 0 : this.j8p_1.hashCode();
    result = imul(result, 31) + (this.k8p_1 == null ? 0 : this.k8p_1.hashCode()) | 0;
    result = imul(result, 31) + (this.l8p_1 == null ? 0 : this.l8p_1.hashCode()) | 0;
    result = imul(result, 31) + (this.m8p_1 == null ? 0 : this.m8p_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.n8p_1) | 0;
    result = imul(result, 31) + hashCode(this.o8p_1) | 0;
    return result;
  };
  protoOf(TransitionData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransitionData))
      return false;
    var tmp0_other_with_cast = other instanceof TransitionData ? other : THROW_CCE();
    if (!equals(this.j8p_1, tmp0_other_with_cast.j8p_1))
      return false;
    if (!equals(this.k8p_1, tmp0_other_with_cast.k8p_1))
      return false;
    if (!equals(this.l8p_1, tmp0_other_with_cast.l8p_1))
      return false;
    if (!equals(this.m8p_1, tmp0_other_with_cast.m8p_1))
      return false;
    if (!(this.n8p_1 === tmp0_other_with_cast.n8p_1))
      return false;
    if (!equals(this.o8p_1, tmp0_other_with_cast.o8p_1))
      return false;
    return true;
  };
  function EnterTransitionImpl(data) {
    EnterTransition.call(this);
    this.i8r_1 = data;
  }
  protoOf(EnterTransitionImpl).p8p = function () {
    return this.i8r_1;
  };
  function Fade(alpha, animationSpec) {
    this.j8r_1 = alpha;
    this.k8r_1 = animationSpec;
  }
  protoOf(Fade).toString = function () {
    return 'Fade(alpha=' + this.j8r_1 + ', animationSpec=' + toString_0(this.k8r_1) + ')';
  };
  protoOf(Fade).hashCode = function () {
    var result = getNumberHashCode(this.j8r_1);
    result = imul(result, 31) + hashCode(this.k8r_1) | 0;
    return result;
  };
  protoOf(Fade).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Fade))
      return false;
    var tmp0_other_with_cast = other instanceof Fade ? other : THROW_CCE();
    if (!equals(this.j8r_1, tmp0_other_with_cast.j8r_1))
      return false;
    if (!equals(this.k8r_1, tmp0_other_with_cast.k8r_1))
      return false;
    return true;
  };
  function Scale(scale, transformOrigin, animationSpec) {
    this.l8r_1 = scale;
    this.m8r_1 = transformOrigin;
    this.n8r_1 = animationSpec;
  }
  protoOf(Scale).toString = function () {
    return 'Scale(scale=' + this.l8r_1 + ', transformOrigin=' + TransformOrigin__toString_impl_nn7ftd(this.m8r_1) + ', animationSpec=' + toString_0(this.n8r_1) + ')';
  };
  protoOf(Scale).hashCode = function () {
    var result = getNumberHashCode(this.l8r_1);
    result = imul(result, 31) + TransformOrigin__hashCode_impl_pmqpcw(this.m8r_1) | 0;
    result = imul(result, 31) + hashCode(this.n8r_1) | 0;
    return result;
  };
  protoOf(Scale).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Scale))
      return false;
    var tmp0_other_with_cast = other instanceof Scale ? other : THROW_CCE();
    if (!equals(this.l8r_1, tmp0_other_with_cast.l8r_1))
      return false;
    if (!equals(this.m8r_1, tmp0_other_with_cast.m8r_1))
      return false;
    if (!equals(this.n8r_1, tmp0_other_with_cast.n8r_1))
      return false;
    return true;
  };
  function ExitTransitionImpl(data) {
    ExitTransition.call(this);
    this.o8r_1 = data;
  }
  protoOf(ExitTransitionImpl).p8p = function () {
    return this.o8r_1;
  };
  function trackActiveEnter(_this__u8e3s4, enter, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 21614502, 'C(trackActiveEnter)915@40149L40:EnterExitTransition.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(21614502, $changed, -1, 'androidx.compose.animation.trackActiveEnter (EnterExitTransition.kt:910)');
    }
    sourceInformationMarkerStart($composer_0, -1583278438, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.m1w(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d27();
    var tmp;
    if (invalid || it === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.animation.trackActiveEnter.<anonymous>' call
      var value = mutableStateOf(enter);
      $composer_0.o27(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var activeEnter$delegate = tmp1_group;
    if (_this__u8e3s4.w56().equals(_this__u8e3s4.p56()) && _this__u8e3s4.w56().equals(EnterExitState_Visible_getInstance())) {
      if (_this__u8e3s4.n8e()) {
        trackActiveEnter$lambda_0(activeEnter$delegate, enter);
      } else {
        trackActiveEnter$lambda_0(activeEnter$delegate, Companion_getInstance_5().c8r_1);
      }
    } else if (_this__u8e3s4.p56().equals(EnterExitState_Visible_getInstance())) {
      trackActiveEnter$lambda_0(activeEnter$delegate, trackActiveEnter$lambda(activeEnter$delegate).i8p(enter));
    }
    var tmp0 = trackActiveEnter$lambda(activeEnter$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function trackActiveExit(_this__u8e3s4, exit, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1363864804, 'C(trackActiveExit)935@41130L39:EnterExitTransition.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(-1363864804, $changed, -1, 'androidx.compose.animation.trackActiveExit (EnterExitTransition.kt:930)');
    }
    sourceInformationMarkerStart($composer_0, 1483140299, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.m1w(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d27();
    var tmp;
    if (invalid || it === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.animation.trackActiveExit.<anonymous>' call
      var value = mutableStateOf(exit);
      $composer_0.o27(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var activeExit$delegate = tmp1_group;
    if (_this__u8e3s4.w56().equals(_this__u8e3s4.p56()) && _this__u8e3s4.w56().equals(EnterExitState_Visible_getInstance())) {
      if (_this__u8e3s4.n8e()) {
        trackActiveExit$lambda_0(activeExit$delegate, exit);
      } else {
        trackActiveExit$lambda_0(activeExit$delegate, Companion_getInstance_6().v8p_1);
      }
    } else if (!_this__u8e3s4.p56().equals(EnterExitState_Visible_getInstance())) {
      trackActiveExit$lambda_0(activeExit$delegate, trackActiveExit$lambda(activeExit$delegate).d8r(exit));
    }
    var tmp0 = trackActiveExit$lambda(activeExit$delegate);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function GraphicsLayerBlockForEnterExit() {
  }
  function createGraphicsLayerBlock(_this__u8e3s4, enter, exit, label, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 642253525, 'C(createGraphicsLayerBlock)985@42946L2853:EnterExitTransition.kt#xbi5r1');
    if (isTraceInProgress()) {
      traceEventStart(642253525, $changed, -1, 'androidx.compose.animation.createGraphicsLayerBlock (EnterExitTransition.kt:958)');
    }
    var shouldAnimateAlpha = !(enter.p8p().j8p_1 == null) || !(exit.p8p().j8p_1 == null);
    var shouldAnimateScale = !(enter.p8p().m8p_1 == null) || !(exit.p8p().m8p_1 == null);
    $composer_0.j25(-1545808136);
    sourceInformation($composer_0, '968@42460L27,967@42377L120');
    var tmp;
    if (shouldAnimateAlpha) {
      var tmp_0 = get_VectorConverter_1(FloatCompanionObject_instance);
      sourceInformationMarkerStart($composer_0, -1545804535, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.d27();
      var tmp_1;
      if (false || it === Companion_getInstance().w1z_1) {
        // Inline function 'androidx.compose.animation.createGraphicsLayerBlock.<anonymous>' call
        var value = label + ' alpha';
        $composer_0.o27(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp = createDeferredAnimation(_this__u8e3s4, tmp_0, tmp1_group, $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp = null;
    }
    var tmp2_group = tmp;
    $composer_0.l25();
    var alphaAnimation = tmp2_group;
    $composer_0.j25(-1545801832);
    sourceInformation($composer_0, '974@42657L27,973@42574L120');
    var tmp_3;
    if (shouldAnimateScale) {
      var tmp_4 = get_VectorConverter_1(FloatCompanionObject_instance);
      sourceInformationMarkerStart($composer_0, -1545798231, 'CC(remember):EnterExitTransition.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.d27();
      var tmp_5;
      if (false || it_0 === Companion_getInstance().w1z_1) {
        // Inline function 'androidx.compose.animation.createGraphicsLayerBlock.<anonymous>' call
        var value_0 = label + ' scale';
        $composer_0.o27(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp_3 = createDeferredAnimation(_this__u8e3s4, tmp_4, tmp3_group, $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp_3 = null;
    }
    var tmp4_group = tmp_3;
    $composer_0.l25();
    var scaleAnimation = tmp4_group;
    $composer_0.j25(-1545795192);
    sourceInformation($composer_0, '979@42781L136');
    var tmp_7;
    if (shouldAnimateScale) {
      tmp_7 = createDeferredAnimation(_this__u8e3s4, get_TransformOriginVectorConverter(), 'TransformOriginInterruptionHandling', $composer_0, 384 | 14 & $changed, 0);
    } else {
      tmp_7 = null;
    }
    var tmp5_group = tmp_7;
    $composer_0.l25();
    var transformOriginAnimation = tmp5_group;
    sourceInformationMarkerStart($composer_0, -1545786157, 'CC(remember):EnterExitTransition.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!(!!(!!(!!($composer_0.m26(alphaAnimation) | (($changed & 112 ^ 48) > 32 && $composer_0.m1w(enter) || ($changed & 48) === 32)) | (($changed & 896 ^ 384) > 256 && $composer_0.m1w(exit) || ($changed & 384) === 256)) | $composer_0.m26(scaleAnimation)) | (($changed & 14 ^ 6) > 4 && $composer_0.m1w(_this__u8e3s4) || ($changed & 6) === 4)) | $composer_0.m26(transformOriginAnimation));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.d27();
    var tmp_8;
    if (invalid || it_1 === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.animation.createGraphicsLayerBlock.<anonymous>' call
      var tmp_9 = createGraphicsLayerBlock$lambda(alphaAnimation, scaleAnimation, _this__u8e3s4, enter, exit, transformOriginAnimation);
      var value_1 = new sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0(tmp_9);
      $composer_0.o27(value_1);
      tmp_8 = value_1;
    } else {
      tmp_8 = it_1;
    }
    var tmp_10 = tmp_8;
    var tmp6_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp6_group;
  }
  function EnterExitTransitionElement(transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock) {
    ModifierNodeElement.call(this);
    this.r8r_1 = transition;
    this.s8r_1 = sizeAnimation;
    this.t8r_1 = offsetAnimation;
    this.u8r_1 = slideAnimation;
    this.v8r_1 = enter;
    this.w8r_1 = exit;
    this.x8r_1 = isEnabled;
    this.y8r_1 = graphicsLayerBlock;
  }
  protoOf(EnterExitTransitionElement).f2e = function () {
    return new EnterExitTransitionModifierNode(this.r8r_1, this.s8r_1, this.t8r_1, this.u8r_1, this.v8r_1, this.w8r_1, this.x8r_1, this.y8r_1);
  };
  protoOf(EnterExitTransitionElement).z8r = function (node) {
    node.n8s_1 = this.r8r_1;
    node.o8s_1 = this.s8r_1;
    node.p8s_1 = this.t8r_1;
    node.q8s_1 = this.u8r_1;
    node.r8s_1 = this.v8r_1;
    node.s8s_1 = this.w8r_1;
    node.t8s_1 = this.x8r_1;
    node.u8s_1 = this.y8r_1;
  };
  protoOf(EnterExitTransitionElement).t5f = function (node) {
    return this.z8r(node instanceof EnterExitTransitionModifierNode ? node : THROW_CCE());
  };
  protoOf(EnterExitTransitionElement).toString = function () {
    return 'EnterExitTransitionElement(transition=' + this.r8r_1.toString() + ', sizeAnimation=' + toString(this.s8r_1) + ', offsetAnimation=' + toString(this.t8r_1) + ', slideAnimation=' + toString(this.u8r_1) + ', enter=' + this.v8r_1.toString() + ', exit=' + this.w8r_1.toString() + ', isEnabled=' + toString_0(this.x8r_1) + ', graphicsLayerBlock=' + toString_0(this.y8r_1) + ')';
  };
  protoOf(EnterExitTransitionElement).hashCode = function () {
    var result = hashCode(this.r8r_1);
    result = imul(result, 31) + (this.s8r_1 == null ? 0 : hashCode(this.s8r_1)) | 0;
    result = imul(result, 31) + (this.t8r_1 == null ? 0 : hashCode(this.t8r_1)) | 0;
    result = imul(result, 31) + (this.u8r_1 == null ? 0 : hashCode(this.u8r_1)) | 0;
    result = imul(result, 31) + this.v8r_1.hashCode() | 0;
    result = imul(result, 31) + this.w8r_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.x8r_1) | 0;
    result = imul(result, 31) + hashCode(this.y8r_1) | 0;
    return result;
  };
  protoOf(EnterExitTransitionElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EnterExitTransitionElement))
      return false;
    var tmp0_other_with_cast = other instanceof EnterExitTransitionElement ? other : THROW_CCE();
    if (!equals(this.r8r_1, tmp0_other_with_cast.r8r_1))
      return false;
    if (!equals(this.s8r_1, tmp0_other_with_cast.s8r_1))
      return false;
    if (!equals(this.t8r_1, tmp0_other_with_cast.t8r_1))
      return false;
    if (!equals(this.u8r_1, tmp0_other_with_cast.u8r_1))
      return false;
    if (!this.v8r_1.equals(tmp0_other_with_cast.v8r_1))
      return false;
    if (!this.w8r_1.equals(tmp0_other_with_cast.w8r_1))
      return false;
    if (!equals(this.x8r_1, tmp0_other_with_cast.x8r_1))
      return false;
    if (!equals(this.y8r_1, tmp0_other_with_cast.y8r_1))
      return false;
    return true;
  };
  function _set_lookaheadConstraints__uusx37($this, value) {
    $this.v8s_1 = true;
    $this.x8s_1 = value;
  }
  function EnterExitTransitionModifierNode$sizeTransitionSpec$lambda(this$0) {
    return function ($this$null) {
      var tmp;
      if ($this$null.e8f(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.r8s_1.p8p().l8p_1;
        tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g8r_1;
      } else if ($this$null.e8f(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp1_safe_receiver = this$0.s8s_1.p8p().l8p_1;
        tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.g8r_1;
      } else {
        tmp = get_DefaultSizeAnimationSpec();
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? get_DefaultSizeAnimationSpec() : tmp2_elvis_lhs;
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.u67($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_0(this$0, $target) {
    return function (it) {
      return new IntSize(this$0.b8t(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_1($this$animate) {
    return get_DefaultOffsetAnimationSpec();
  }
  function EnterExitTransitionModifierNode$measure$lambda_2(this$0, $target) {
    return function (it) {
      return new IntOffset(this$0.c8t(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_3(this$0, $target) {
    return function (it) {
      return new IntOffset(this$0.d8t(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_4($placeable, $offset, $offsetDelta, $layerBlock) {
    return function ($this$layout) {
      $this$layout.z67($placeable, _IntOffset___get_x__impl__qiqr5o($offset) + _IntOffset___get_x__impl__qiqr5o($offsetDelta) | 0, _IntOffset___get_y__impl__2avpwj($offset) + _IntOffset___get_y__impl__2avpwj($offsetDelta) | 0, 0.0, $layerBlock);
      return Unit_instance;
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_5($$this$run) {
    return function ($this$layout) {
      $this$layout.u67($$this$run, 0, 0);
      return Unit_instance;
    };
  }
  function EnterExitTransitionModifierNode$slideSpec$lambda(this$0) {
    return function ($this$null) {
      var tmp;
      if ($this$null.e8f(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.r8s_1.p8p().k8p_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f8t_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultOffsetAnimationSpec() : tmp1_elvis_lhs;
      } else if ($this$null.e8f(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = this$0.s8s_1.p8p().k8p_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.f8t_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultOffsetAnimationSpec() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultOffsetAnimationSpec();
      }
      return tmp;
    };
  }
  function EnterExitTransitionModifierNode(transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock) {
    LayoutModifierNodeWithPassThroughIntrinsics.call(this);
    this.n8s_1 = transition;
    this.o8s_1 = sizeAnimation;
    this.p8s_1 = offsetAnimation;
    this.q8s_1 = slideAnimation;
    this.r8s_1 = enter;
    this.s8s_1 = exit;
    this.t8s_1 = isEnabled;
    this.u8s_1 = graphicsLayerBlock;
    this.v8s_1 = false;
    this.w8s_1 = get_InvalidSize();
    this.x8s_1 = Constraints();
    this.y8s_1 = null;
    var tmp = this;
    tmp.z8s_1 = EnterExitTransitionModifierNode$sizeTransitionSpec$lambda(this);
    var tmp_0 = this;
    tmp_0.a8t_1 = EnterExitTransitionModifierNode$slideSpec$lambda(this);
  }
  protoOf(EnterExitTransitionModifierNode).d3x = function () {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.animation.EnterExitTransitionModifierNode.<get-alignment>.<anonymous>' call
    var tmp;
    if (this.n8s_1.o8e().e8f(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
      var tmp0_safe_receiver = this.r8s_1.p8p().l8p_1;
      var tmp2_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e8r_1;
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        var tmp1_safe_receiver = this.s8s_1.p8p().l8p_1;
        tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.e8r_1;
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      var tmp3_safe_receiver = this.s8s_1.p8p().l8p_1;
      var tmp5_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.e8r_1;
      var tmp_1;
      if (tmp5_elvis_lhs == null) {
        var tmp4_safe_receiver = this.r8s_1.p8p().l8p_1;
        tmp_1 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.e8r_1;
      } else {
        tmp_1 = tmp5_elvis_lhs;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).b8t = function (targetState, fullSize) {
    var tmp;
    switch (targetState.s2_1) {
      case 1:
        tmp = fullSize;
        break;
      case 0:
        var tmp1_safe_receiver = this.r8s_1.p8p().l8p_1;
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.f8r_1;
        var tmp_0;
        if (tmp2_safe_receiver == null) {
          tmp_0 = null;
        } else {
          var tmp_1 = tmp2_safe_receiver(new IntSize(fullSize));
          tmp_0 = tmp_1 == null ? null : tmp_1.q3i_1;
        }

        var tmp3_elvis_lhs = tmp_0;
        var tmp_2;
        var tmp_3 = tmp3_elvis_lhs;
        if ((tmp_3 == null ? null : new IntSize(tmp_3)) == null) {
          tmp_2 = fullSize;
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }

        tmp = tmp_2;
        break;
      case 2:
        var tmp4_safe_receiver = this.s8s_1.p8p().l8p_1;
        var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.f8r_1;
        var tmp_4;
        if (tmp5_safe_receiver == null) {
          tmp_4 = null;
        } else {
          var tmp_5 = tmp5_safe_receiver(new IntSize(fullSize));
          tmp_4 = tmp_5 == null ? null : tmp_5.q3i_1;
        }

        var tmp6_elvis_lhs = tmp_4;
        var tmp_6;
        var tmp_7 = tmp6_elvis_lhs;
        if ((tmp_7 == null ? null : new IntSize(tmp_7)) == null) {
          tmp_6 = fullSize;
        } else {
          tmp_6 = tmp6_elvis_lhs;
        }

        tmp = tmp_6;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).e5b = function () {
    protoOf(LayoutModifierNodeWithPassThroughIntrinsics).e5b.call(this);
    this.v8s_1 = false;
    this.w8s_1 = get_InvalidSize();
  };
  protoOf(EnterExitTransitionModifierNode).c8t = function (targetState, fullSize) {
    var tmp;
    if (this.y8s_1 == null) {
      tmp = Companion_getInstance_3().h3i_1;
    } else if (this.d3x() == null) {
      tmp = Companion_getInstance_3().h3i_1;
    } else if (equals(this.y8s_1, this.d3x())) {
      tmp = Companion_getInstance_3().h3i_1;
    } else {
      var tmp_0;
      switch (targetState.s2_1) {
        case 1:
          tmp_0 = Companion_getInstance_3().h3i_1;
          break;
        case 0:
          tmp_0 = Companion_getInstance_3().h3i_1;
          break;
        case 2:
          var tmp1_safe_receiver = this.s8s_1.p8p().l8p_1;
          var tmp_1;
          if (tmp1_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.animation.EnterExitTransitionModifierNode.targetOffsetByState.<anonymous>' call
            var endSize = tmp1_safe_receiver.f8r_1(new IntSize(fullSize)).q3i_1;
            var targetOffset = ensureNotNull(this.d3x()).e5a(fullSize, endSize, LayoutDirection_Ltr_getInstance());
            var currentOffset = ensureNotNull(this.y8s_1).e5a(fullSize, endSize, LayoutDirection_Ltr_getInstance());
            tmp_1 = IntOffset__minus_impl_4m69hb(targetOffset, currentOffset);
          }

          var tmp2_elvis_lhs = tmp_1;
          var tmp_2;
          var tmp_3 = tmp2_elvis_lhs;
          if ((tmp_3 == null ? null : new IntOffset(tmp_3)) == null) {
            tmp_2 = Companion_getInstance_3().h3i_1;
          } else {
            tmp_2 = tmp2_elvis_lhs;
          }

          tmp_0 = tmp_2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).u5o = function (_this__u8e3s4, measurable, constraints) {
    if (this.n8s_1.w56().equals(this.n8s_1.p56())) {
      this.y8s_1 = null;
    } else if (this.y8s_1 == null) {
      var tmp = this;
      var tmp0_elvis_lhs = this.d3x();
      tmp.y8s_1 = tmp0_elvis_lhs == null ? Companion_getInstance_0().j59_1 : tmp0_elvis_lhs;
    }
    if (_this__u8e3s4.b66()) {
      var placeable = measurable.v5o(constraints);
      var measuredSize = IntSize_0(placeable.w5o_1, placeable.x5o_1);
      this.w8s_1 = measuredSize;
      _set_lookaheadConstraints__uusx37(this, constraints);
      var tmp_0 = _IntSize___get_width__impl__d9yl4o(measuredSize);
      var tmp_1 = _IntSize___get_height__impl__prv63b(measuredSize);
      return _this__u8e3s4.b5p(tmp_0, tmp_1, VOID, EnterExitTransitionModifierNode$measure$lambda(placeable));
    } else if (this.t8s_1()) {
      var layerBlock = this.u8s_1.p8r();
      var placeable_0 = measurable.v5o(constraints);
      var measuredSize_0 = IntSize_0(placeable_0.w5o_1, placeable_0.x5o_1);
      var target = get_isValid(this.w8s_1) ? this.w8s_1 : measuredSize_0;
      var tmp1_safe_receiver = this.o8s_1;
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        tmp_2 = tmp1_safe_receiver.h8f(this.z8s_1, EnterExitTransitionModifierNode$measure$lambda_0(this, target));
      }
      var animSize = tmp_2;
      var tmp_3;
      if (animSize == null) {
        tmp_3 = null;
      } else {
        var tmp_4 = animSize.v();
        tmp_3 = tmp_4 == null ? null : tmp_4.q3i_1;
      }
      var tmp3_elvis_lhs = tmp_3;
      var tmp_5;
      var tmp_6 = tmp3_elvis_lhs;
      if ((tmp_6 == null ? null : new IntSize(tmp_6)) == null) {
        tmp_5 = measuredSize_0;
      } else {
        tmp_5 = tmp3_elvis_lhs;
      }
      var currentSize = constrain(constraints, tmp_5);
      var tmp4_safe_receiver = this.p8s_1;
      var tmp_7;
      if (tmp4_safe_receiver == null) {
        tmp_7 = null;
      } else {
        var tmp_8 = EnterExitTransitionModifierNode$measure$lambda_1;
        tmp_7 = tmp4_safe_receiver.h8f(tmp_8, EnterExitTransitionModifierNode$measure$lambda_2(this, target));
      }
      var tmp5_safe_receiver = tmp_7;
      var tmp_9;
      if (tmp5_safe_receiver == null) {
        tmp_9 = null;
      } else {
        var tmp_10 = tmp5_safe_receiver.v();
        tmp_9 = tmp_10 == null ? null : tmp_10.i3i_1;
      }
      var tmp6_elvis_lhs = tmp_9;
      var tmp_11;
      var tmp_12 = tmp6_elvis_lhs;
      if ((tmp_12 == null ? null : new IntOffset(tmp_12)) == null) {
        tmp_11 = Companion_getInstance_3().h3i_1;
      } else {
        tmp_11 = tmp6_elvis_lhs;
      }
      var offsetDelta = tmp_11;
      var tmp7_safe_receiver = this.q8s_1;
      var tmp_13;
      if (tmp7_safe_receiver == null) {
        tmp_13 = null;
      } else {
        tmp_13 = tmp7_safe_receiver.h8f(this.a8t_1, EnterExitTransitionModifierNode$measure$lambda_3(this, target));
      }
      var tmp8_safe_receiver = tmp_13;
      var tmp_14;
      if (tmp8_safe_receiver == null) {
        tmp_14 = null;
      } else {
        var tmp_15 = tmp8_safe_receiver.v();
        tmp_14 = tmp_15 == null ? null : tmp_15.i3i_1;
      }
      var tmp9_elvis_lhs = tmp_14;
      var tmp_16;
      var tmp_17 = tmp9_elvis_lhs;
      if ((tmp_17 == null ? null : new IntOffset(tmp_17)) == null) {
        tmp_16 = Companion_getInstance_3().h3i_1;
      } else {
        tmp_16 = tmp9_elvis_lhs;
      }
      var slideOffset = tmp_16;
      var tmp10_safe_receiver = this.y8s_1;
      var tmp11_elvis_lhs = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.e5a(target, currentSize, LayoutDirection_Ltr_getInstance());
      var tmp_18;
      var tmp_19 = tmp11_elvis_lhs;
      if ((tmp_19 == null ? null : new IntOffset(tmp_19)) == null) {
        tmp_18 = Companion_getInstance_3().h3i_1;
      } else {
        tmp_18 = tmp11_elvis_lhs;
      }
      var offset = IntOffset__plus_impl_nqoa9b(tmp_18, slideOffset);
      var tmp_20 = _IntSize___get_width__impl__d9yl4o(currentSize);
      var tmp_21 = _IntSize___get_height__impl__prv63b(currentSize);
      return _this__u8e3s4.b5p(tmp_20, tmp_21, VOID, EnterExitTransitionModifierNode$measure$lambda_4(placeable_0, offset, offsetDelta, layerBlock));
    } else {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.animation.EnterExitTransitionModifierNode.measure.<anonymous>' call
      var $this$run = measurable.v5o(constraints);
      var tmp_22 = $this$run.w5o_1;
      var tmp_23 = $this$run.x5o_1;
      return _this__u8e3s4.b5p(tmp_22, tmp_23, VOID, EnterExitTransitionModifierNode$measure$lambda_5($this$run));
    }
  };
  protoOf(EnterExitTransitionModifierNode).d8t = function (targetState, fullSize) {
    var tmp0_safe_receiver = this.r8s_1.p8p().k8p_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e8t_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp_0 = tmp1_safe_receiver(new IntSize(fullSize));
      tmp = tmp_0 == null ? null : tmp_0.i3i_1;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_1;
    var tmp_2 = tmp2_elvis_lhs;
    if ((tmp_2 == null ? null : new IntOffset(tmp_2)) == null) {
      tmp_1 = Companion_getInstance_3().h3i_1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var preEnter = tmp_1;
    var tmp3_safe_receiver = this.s8s_1.p8p().k8p_1;
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.e8t_1;
    var tmp_3;
    if (tmp4_safe_receiver == null) {
      tmp_3 = null;
    } else {
      var tmp_4 = tmp4_safe_receiver(new IntSize(fullSize));
      tmp_3 = tmp_4 == null ? null : tmp_4.i3i_1;
    }
    var tmp5_elvis_lhs = tmp_3;
    var tmp_5;
    var tmp_6 = tmp5_elvis_lhs;
    if ((tmp_6 == null ? null : new IntOffset(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_3().h3i_1;
    } else {
      tmp_5 = tmp5_elvis_lhs;
    }
    var postExit = tmp_5;
    var tmp_7;
    switch (targetState.s2_1) {
      case 1:
        tmp_7 = Companion_getInstance_3().h3i_1;
        break;
      case 0:
        tmp_7 = preEnter;
        break;
      case 2:
        tmp_7 = postExit;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_7;
  };
  function scaleIn(animationSpec, initialScale, transformOrigin) {
    var tmp;
    if (animationSpec === VOID) {
      tmp = spring(VOID, 400.0);
    } else {
      tmp = animationSpec;
    }
    animationSpec = tmp;
    initialScale = initialScale === VOID ? 0.0 : initialScale;
    transformOrigin = transformOrigin === VOID ? Companion_getInstance_4().c5p_1 : transformOrigin;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(VOID, VOID, VOID, new Scale(initialScale, transformOrigin, animationSpec)));
  }
  function sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0(function_0) {
    this.g8t_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).p8r = function () {
    return this.g8t_1();
  };
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).q3 = function () {
    return this.g8t_1;
  };
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, GraphicsLayerBlockForEnterExit) : false) {
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
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function trackActiveEnter$lambda($activeEnter$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('activeEnter', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $activeEnter$delegate.v();
  }
  function trackActiveEnter$lambda_0($activeEnter$delegate, value) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    getLocalDelegateReference('activeEnter', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $activeEnter$delegate.d1l(value);
    return Unit_instance;
  }
  function trackActiveExit$lambda($activeExit$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('activeExit', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $activeExit$delegate.v();
  }
  function trackActiveExit$lambda_0($activeExit$delegate, value) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    getLocalDelegateReference('activeExit', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $activeExit$delegate.d1l(value);
    return Unit_instance;
  }
  function TransformOriginVectorConverter$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new AnimationVector2D(_TransformOrigin___get_pivotFractionX__impl__a9pmci(it.x5s_1), _TransformOrigin___get_pivotFractionY__impl__ijwupp(it.x5s_1));
  }
  function TransformOriginVectorConverter$lambda_0(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new TransformOrigin_0(TransformOrigin(it.e81_1, it.f81_1));
  }
  function createModifier$lambda() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return true;
  }
  function createModifier$lambda_0($disableClip, $isEnabled) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.m5r(!$disableClip && $isEnabled._v());
      return Unit_instance;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda($enter, $exit) {
    return function ($this$animate) {
      var tmp;
      if ($this$animate.e8f(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = $enter.p8p().j8p_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k8r_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp1_elvis_lhs;
      } else if ($this$animate.e8f(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = $exit.p8p().j8p_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.k8r_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultAlphaAndScaleSpring();
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_0($enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.s2_1) {
        case 1:
          tmp = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.p8p().j8p_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j8r_1;
          tmp = tmp2_elvis_lhs == null ? 1.0 : tmp2_elvis_lhs;
          break;
        case 2:
          var tmp3_safe_receiver = $exit.p8p().j8p_1;
          var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.j8r_1;
          tmp = tmp4_elvis_lhs == null ? 1.0 : tmp4_elvis_lhs;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_1($enter, $exit) {
    return function ($this$animate) {
      var tmp;
      if ($this$animate.e8f(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = $enter.p8p().m8p_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n8r_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp1_elvis_lhs;
      } else if ($this$animate.e8f(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = $exit.p8p().m8p_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.n8r_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultAlphaAndScaleSpring();
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_2($enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.s2_1) {
        case 1:
          tmp = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.p8p().m8p_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.l8r_1;
          tmp = tmp2_elvis_lhs == null ? 1.0 : tmp2_elvis_lhs;
          break;
        case 2:
          var tmp3_safe_receiver = $exit.p8p().m8p_1;
          var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.l8r_1;
          tmp = tmp4_elvis_lhs == null ? 1.0 : tmp4_elvis_lhs;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_3($this$animate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return spring();
  }
  function createGraphicsLayerBlock$lambda$lambda_4($transformOriginWhenVisible, $enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.s2_1) {
        case 1:
          tmp = $transformOriginWhenVisible;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.p8p().m8p_1;
          var tmp3_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.m8r_1;
          var tmp_0;
          var tmp_1 = tmp3_elvis_lhs;
          if ((tmp_1 == null ? null : new TransformOrigin_0(tmp_1)) == null) {
            var tmp2_safe_receiver = $exit.p8p().m8p_1;
            tmp_0 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.m8r_1;
          } else {
            tmp_0 = tmp3_elvis_lhs;
          }

          tmp = tmp_0;
          break;
        case 2:
          var tmp4_safe_receiver = $exit.p8p().m8p_1;
          var tmp6_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.m8r_1;
          var tmp_2;
          var tmp_3 = tmp6_elvis_lhs;
          if ((tmp_3 == null ? null : new TransformOrigin_0(tmp_3)) == null) {
            var tmp5_safe_receiver = $enter.p8p().m8p_1;
            tmp_2 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.m8r_1;
          } else {
            tmp_2 = tmp6_elvis_lhs;
          }

          tmp = tmp_2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp7_elvis_lhs = tmp;
      var tmp_4;
      var tmp_5 = tmp7_elvis_lhs;
      if ((tmp_5 == null ? null : new TransformOrigin_0(tmp_5)) == null) {
        tmp_4 = Companion_getInstance_4().c5p_1;
      } else {
        tmp_4 = tmp7_elvis_lhs;
      }
      return new TransformOrigin_0(tmp_4);
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_5($alpha, $scale, $transformOrigin) {
    return function ($this$null) {
      var tmp0_safe_receiver = $alpha;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v();
      $this$null.y4c(tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs);
      var tmp2_safe_receiver = $scale;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.v();
      $this$null.b5r(tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs);
      var tmp4_safe_receiver = $scale;
      var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.v();
      $this$null.c5r(tmp5_elvis_lhs == null ? 1.0 : tmp5_elvis_lhs);
      var tmp6_safe_receiver = $transformOrigin;
      var tmp;
      if (tmp6_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = tmp6_safe_receiver.v();
        tmp = tmp_0 == null ? null : tmp_0.x5s_1;
      }
      var tmp7_elvis_lhs = tmp;
      var tmp_1;
      var tmp_2 = tmp7_elvis_lhs;
      if ((tmp_2 == null ? null : new TransformOrigin_0(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_4().c5p_1;
      } else {
        tmp_1 = tmp7_elvis_lhs;
      }
      $this$null.k5r(tmp_1);
      return Unit_instance;
    };
  }
  function createGraphicsLayerBlock$lambda($alphaAnimation, $scaleAnimation, $this_createGraphicsLayerBlock, $enter, $exit, $transformOriginAnimation) {
    return function () {
      var tmp0_safe_receiver = $alphaAnimation;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = createGraphicsLayerBlock$lambda$lambda($enter, $exit);
        tmp = tmp0_safe_receiver.h8f(tmp_0, createGraphicsLayerBlock$lambda$lambda_0($enter, $exit));
      }
      var alpha = tmp;
      var tmp1_safe_receiver = $scaleAnimation;
      var tmp_1;
      if (tmp1_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp_2 = createGraphicsLayerBlock$lambda$lambda_1($enter, $exit);
        tmp_1 = tmp1_safe_receiver.h8f(tmp_2, createGraphicsLayerBlock$lambda$lambda_2($enter, $exit));
      }
      var scale = tmp_1;
      var tmp_3;
      if ($this_createGraphicsLayerBlock.w56().equals(EnterExitState_PreEnter_getInstance())) {
        var tmp2_safe_receiver = $enter.p8p().m8p_1;
        var tmp4_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.m8r_1;
        var tmp_4;
        var tmp_5 = tmp4_elvis_lhs;
        if ((tmp_5 == null ? null : new TransformOrigin_0(tmp_5)) == null) {
          var tmp3_safe_receiver = $exit.p8p().m8p_1;
          tmp_4 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.m8r_1;
        } else {
          tmp_4 = tmp4_elvis_lhs;
        }
        tmp_3 = tmp_4;
      } else {
        var tmp5_safe_receiver = $exit.p8p().m8p_1;
        var tmp7_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.m8r_1;
        var tmp_6;
        var tmp_7 = tmp7_elvis_lhs;
        if ((tmp_7 == null ? null : new TransformOrigin_0(tmp_7)) == null) {
          var tmp6_safe_receiver = $enter.p8p().m8p_1;
          tmp_6 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.m8r_1;
        } else {
          tmp_6 = tmp7_elvis_lhs;
        }
        tmp_3 = tmp_6;
      }
      var transformOriginWhenVisible = tmp_3;
      var tmp8_safe_receiver = $transformOriginAnimation;
      var tmp_8;
      if (tmp8_safe_receiver == null) {
        tmp_8 = null;
      } else {
        var tmp_9 = createGraphicsLayerBlock$lambda$lambda_3;
        tmp_8 = tmp8_safe_receiver.h8f(tmp_9, createGraphicsLayerBlock$lambda$lambda_4(transformOriginWhenVisible, $enter, $exit));
      }
      var transformOrigin = tmp_8;
      var block = createGraphicsLayerBlock$lambda$lambda_5(alpha, scale, transformOrigin);
      return block;
    };
  }
  var properties_initialized_EnterExitTransition_kt_te1nvp;
  function _init_properties_EnterExitTransition_kt__2obrqf() {
    if (!properties_initialized_EnterExitTransition_kt_te1nvp) {
      properties_initialized_EnterExitTransition_kt_te1nvp = true;
      var tmp = TransformOriginVectorConverter$lambda;
      TransformOriginVectorConverter = TwoWayConverter(tmp, TransformOriginVectorConverter$lambda_0);
      DefaultAlphaAndScaleSpring = spring(VOID, 400.0);
      DefaultOffsetAnimationSpec = spring(VOID, 400.0, new IntOffset(get_VisibilityThreshold_0(Companion_getInstance_3())));
      DefaultSizeAnimationSpec = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_2())));
    }
  }
  var platformFlingScrollFriction;
  //region block: post-declaration
  protoOf(ChildData).j5a = foldIn;
  protoOf(ChildData).k5a = all;
  protoOf(ChildData).f5a = then;
  protoOf(LayoutModifierWithPassThroughIntrinsics).j5a = foldIn;
  protoOf(LayoutModifierWithPassThroughIntrinsics).k5a = all;
  protoOf(LayoutModifierWithPassThroughIntrinsics).f5a = then;
  protoOf(AnimatedContentTransitionScopeImpl).e8f = isTransitioningTo;
  //endregion
  //region block: init
  platformFlingScrollFriction = 0.015;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AnimatedContent;
  _.$_$.b = ContentTransform;
  _.$_$.c = fadeIn;
  _.$_$.d = fadeOut;
  _.$_$.e = togetherWith;
  _.$_$.f = Companion_getInstance_5;
  _.$_$.g = Companion_getInstance_6;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-animation-animation.js.map
