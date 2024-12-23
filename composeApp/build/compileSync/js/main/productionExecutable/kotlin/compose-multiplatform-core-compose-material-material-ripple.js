(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-ui-ui-util.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    globalThis['compose-multiplatform-core-compose-material-material-ripple'] = factory(typeof globalThis['compose-multiplatform-core-compose-material-material-ripple'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-material-material-ripple'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-ui-ui-util']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_collection_internal_collection, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_util) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var CoroutineImpl = kotlin_kotlin.$_$.l9;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var protoOf = kotlin_kotlin.$_$.kb;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var isInterface = kotlin_kotlin.$_$.za;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var invalidateDraw = kotlin_org_jetbrains_compose_ui_ui.$_$.k2;
  var initMetadataForLambda = kotlin_kotlin.$_$.oa;
  var VOID = kotlin_kotlin.$_$.e;
  var MutableScatterMap = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.k;
  var Long = kotlin_kotlin.$_$.ue;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h2;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var mutableStateMapOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.o3;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var isNaN_0 = kotlin_kotlin.$_$.tf;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var Interaction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h;
  var PressInteraction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m;
  var Cancel = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j;
  var Release = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l;
  var Press = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k;
  var equals = kotlin_kotlin.$_$.ba;
  var FunctionAdapter = kotlin_kotlin.$_$.p9;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var hashCode = kotlin_kotlin.$_$.ja;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.u3;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var MutableObjectList = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.j;
  var requireDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.p2;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m1;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.q1;
  var onPlaced = kotlin_org_jetbrains_compose_ui_ui.$_$.t1;
  var CompositionLocalConsumerModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.o1;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.r1;
  var LayoutAwareModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.u1;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var Cancel_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a;
  var Stop = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c;
  var Start = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b;
  var Unfocus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e;
  var Focus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d;
  var Exit = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g;
  var Enter = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f;
  var lastOrNull = kotlin_kotlin.$_$.u6;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m2;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n2;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l;
  var rememberUpdatedState = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.b3;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var getBooleanHashCode = kotlin_kotlin.$_$.ea;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var Indication = kotlin_org_jetbrains_compose_foundation_foundation.$_$.w;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.v;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ma;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var ensureNotNull = kotlin_kotlin.$_$.pf;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z1;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v;
  var KMutableProperty1 = kotlin_kotlin.$_$.ic;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ha;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var luminance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.la;
  var initMetadataForObject = kotlin_kotlin.$_$.pa;
  var getNumberHashCode = kotlin_kotlin.$_$.ga;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(CommonRippleNode$addRipple$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(RippleNode, 'RippleNode', VOID, Node, [Node, CompositionLocalConsumerModifierNode, DrawModifierNode, LayoutAwareModifierNode]);
  initMetadataForClass(CommonRippleNode, 'CommonRippleNode', VOID, RippleNode);
  initMetadataForClass(Ripple, 'Ripple', VOID, VOID, [Indication]);
  initMetadataForClass(CommonRipple, 'CommonRipple', VOID, Ripple);
  initMetadataForLambda(CommonRippleIndicationInstance$addRipple$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(RippleIndicationInstance, 'RippleIndicationInstance');
  initMetadataForClass(CommonRippleIndicationInstance, 'CommonRippleIndicationInstance', VOID, RippleIndicationInstance, [RippleIndicationInstance, RememberObserver]);
  initMetadataForLambda(RippleNode$onAttach$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(RippleNode$onAttach$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(StateLayer$handleInteraction$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(StateLayer$handleInteraction$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(StateLayer, 'StateLayer');
  initMetadataForLambda(Ripple$rememberUpdatedInstance$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(Ripple$rememberUpdatedInstance$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeOut$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeOut$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($animateCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($fadeInCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($fadeOutCOROUTINE$2, CoroutineImpl);
  initMetadataForClass(RippleAnimation, 'RippleAnimation', VOID, VOID, VOID, [0]);
  initMetadataForCompanion(Companion);
  initMetadataForObject(DebugRippleTheme, 'DebugRippleTheme');
  initMetadataForClass(RippleAlpha, 'RippleAlpha');
  //endregion
  function CommonRippleNode$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation) {
    this.va0_1 = $rippleAnimation;
    this.wa0_1 = this$0;
    this.xa0_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CommonRippleNode$addRipple$slambda).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(CommonRippleNode$addRipple$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CommonRippleNode$addRipple$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 5;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.i9_1 = 4;
            this.h9_1 = 2;
            suspendResult = this.va0_1.la1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.za0_1 = suspendResult;
            this.i9_1 = 5;
            this.h9_1 = 3;
            continue $sm;
          case 3:
            this.i9_1 = 5;
            this.wa0_1.ka2_1.p2(this.xa0_1);
            invalidateDraw(this.wa0_1);
            return Unit_instance;
          case 4:
            this.i9_1 = 5;
            var t = this.k9_1;
            this.wa0_1.ka2_1.p2(this.xa0_1);
            invalidateDraw(this.wa0_1);
            throw t;
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
  protoOf(CommonRippleNode$addRipple$slambda).s1m = function ($this$launch, completion) {
    var i = new CommonRippleNode$addRipple$slambda(this.va0_1, this.wa0_1, this.xa0_1, completion);
    i.ya0_1 = $this$launch;
    return i;
  };
  function CommonRippleNode$addRipple$slambda_0($rippleAnimation, this$0, $interaction, resultContinuation) {
    var i = new CommonRippleNode$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CommonRippleNode(interactionSource, bounded, radius, color, rippleAlpha) {
    RippleNode.call(this, interactionSource, bounded, radius, color, rippleAlpha);
    this.ka2_1 = new MutableScatterMap();
  }
  protoOf(CommonRippleNode).la2 = function (interaction, size, targetRadius) {
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var this_0 = this.ka2_1;
    var k = this_0.er_1;
    var v = this_0.fr_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.dr_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          if (!this_1.k3(this_1.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                  var tmp_0 = v[index];
                  // Inline function 'androidx.compose.material.ripple.CommonRippleNode.addRipple.<anonymous>' call
                  ((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).ma2();
                }
                slot = slot.i3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    var origin = this.ba3_1 ? interaction.y9j_1 : null;
    var rippleAnimation = new RippleAnimation(origin, targetRadius, this.ba3_1);
    this.ka2_1.or(interaction, rippleAnimation);
    var tmp_1 = this.z5a();
    launch(tmp_1, VOID, VOID, CommonRippleNode$addRipple$slambda_0(rippleAnimation, this, interaction, null));
    invalidateDraw(this);
  };
  protoOf(CommonRippleNode).la3 = function (interaction) {
    var tmp0_safe_receiver = this.ka2_1.l2(interaction);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ma2();
    }
  };
  protoOf(CommonRippleNode).ma3 = function (_this__u8e3s4) {
    var alpha = this.ea3_1().qa3_1;
    if (!(alpha === 0.0)) {
      // Inline function 'androidx.collection.ScatterMap.forEach' call
      var this_0 = this.ka2_1;
      var k = this_0.er_1;
      var v = this_0.fr_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m = this_0.dr_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            if (!this_1.k3(this_1.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                    var tmp = k[index];
                    (tmp == null ? true : !(tmp == null)) || THROW_CCE();
                    var tmp_0 = v[index];
                    // Inline function 'androidx.compose.material.ripple.CommonRippleNode.drawRipples.<anonymous>' call
                    // Inline function 'kotlin.with' call
                    // Inline function 'androidx.compose.material.ripple.CommonRippleNode.drawRipples.<anonymous>.<anonymous>' call
                    ((tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE()).sa3(_this__u8e3s4, Color__copy$default_impl_ectz3s(this.ra3(), alpha));
                  }
                  slot = slot.i3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
  };
  protoOf(CommonRippleNode).g5b = function () {
    this.ka2_1.f2();
  };
  function CommonRipple(bounded, radius, color) {
    Ripple.call(this, bounded, radius, color);
  }
  protoOf(CommonRipple).wa3 = function (interactionSource, bounded, radius, color, rippleAlpha, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.j25(-1768051227);
    sourceInformation($composer_0, 'C(rememberUpdatedRippleInstance)P(2!1,3:c#ui.unit.Dp)60@2195L125:CommonRipple.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(-1768051227, $changed, -1, 'androidx.compose.material.ripple.CommonRipple.rememberUpdatedRippleInstance (CommonRipple.kt:59)');
    }
    sourceInformationMarkerStart($composer_0, -1865672267, 'CC(remember):CommonRipple.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.m1w(interactionSource) || ($changed & 6) === 4) | (($changed & 458752 ^ 196608) > 131072 && $composer_0.m1w(this) || ($changed & 196608) === 131072));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d27();
    var tmp;
    if (invalid || it === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.material.ripple.CommonRipple.rememberUpdatedRippleInstance.<anonymous>' call
      var value = new CommonRippleIndicationInstance(bounded, radius, color, rippleAlpha);
      $composer_0.o27(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.l25();
    return tmp1_group;
  };
  function drawRipples(_this__u8e3s4, $this, color) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = $this.ga4_1.t().j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'androidx.compose.material.ripple.CommonRippleIndicationInstance.drawRipples.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var ripple = element.v();
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.material.ripple.CommonRippleIndicationInstance.drawRipples.<anonymous>.<anonymous>' call
      var alpha = $this.fa4_1.v().qa3_1;
      if (!(alpha === 0.0)) {
        ripple.sa3(_this__u8e3s4, Color__copy$default_impl_ectz3s(color, alpha));
      }
    }
  }
  function CommonRippleIndicationInstance$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation) {
    this.qa4_1 = $rippleAnimation;
    this.ra4_1 = this$0;
    this.sa4_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 5;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.i9_1 = 4;
            this.h9_1 = 2;
            suspendResult = this.qa4_1.la1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ua4_1 = suspendResult;
            this.i9_1 = 5;
            this.h9_1 = 3;
            continue $sm;
          case 3:
            this.i9_1 = 5;
            this.ra4_1.ga4_1.p2(this.sa4_1);
            return Unit_instance;
          case 4:
            this.i9_1 = 5;
            var t = this.k9_1;
            this.ra4_1.ga4_1.p2(this.sa4_1);
            throw t;
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
  protoOf(CommonRippleIndicationInstance$addRipple$slambda).s1m = function ($this$launch, completion) {
    var i = new CommonRippleIndicationInstance$addRipple$slambda(this.qa4_1, this.ra4_1, this.sa4_1, completion);
    i.ta4_1 = $this$launch;
    return i;
  };
  function CommonRippleIndicationInstance$addRipple$slambda_0($rippleAnimation, this$0, $interaction, resultContinuation) {
    var i = new CommonRippleIndicationInstance$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function CommonRippleIndicationInstance(bounded, radius, color, rippleAlpha) {
    RippleIndicationInstance.call(this, bounded, rippleAlpha);
    this.ca4_1 = bounded;
    this.da4_1 = radius;
    this.ea4_1 = color;
    this.fa4_1 = rippleAlpha;
    this.ga4_1 = mutableStateMapOf();
    var tmp = this;
    tmp.ha4_1 = NaN;
  }
  protoOf(CommonRippleIndicationInstance).a9b = function (_this__u8e3s4) {
    var tmp = this;
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = this.da4_1;
    if (isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp_0 = getRippleEndRadius(_this__u8e3s4, this.ca4_1, _this__u8e3s4.z4c());
    } else {
      tmp_0 = _this__u8e3s4.l3h(this.da4_1);
    }
    tmp.ha4_1 = tmp_0;
    var color = this.ea4_1.v().s44_1;
    _this__u8e3s4.u5f();
    this.xa4(_this__u8e3s4, this.da4_1, color);
    drawRipples(_this__u8e3s4, this, color);
  };
  protoOf(CommonRippleIndicationInstance).ya4 = function (interaction, scope) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.ga4_1.t().j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'androidx.compose.material.ripple.CommonRippleIndicationInstance.addRipple.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var ripple = element.v();
      ripple.ma2();
    }
    var origin = this.ca4_1 ? interaction.y9j_1 : null;
    var rippleAnimation = new RippleAnimation(origin, this.ha4_1, this.ca4_1);
    // Inline function 'kotlin.collections.set' call
    this.ga4_1.o2(interaction, rippleAnimation);
    launch(scope, VOID, VOID, CommonRippleIndicationInstance$addRipple$slambda_0(rippleAnimation, this, interaction, null));
  };
  protoOf(CommonRippleIndicationInstance).la3 = function (interaction) {
    var tmp0_safe_receiver = this.ga4_1.l2(interaction);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ma2();
    }
  };
  protoOf(CommonRippleIndicationInstance).e24 = function () {
  };
  protoOf(CommonRippleIndicationInstance).g24 = function () {
    this.ga4_1.f2();
  };
  protoOf(CommonRippleIndicationInstance).f24 = function () {
    this.ga4_1.f2();
  };
  function get_DefaultTweenSpec() {
    _init_properties_Ripple_kt__d55ieo();
    return DefaultTweenSpec;
  }
  var DefaultTweenSpec;
  function createRippleModifierNode(interactionSource, bounded, radius, color, rippleAlpha) {
    _init_properties_Ripple_kt__d55ieo();
    return createPlatformRippleNode(interactionSource, bounded, radius, color, rippleAlpha);
  }
  function RippleNode$onAttach$slambda$slambda(this$0, $this_launch, resultContinuation) {
    this.ia5_1 = this$0;
    this.ja5_1 = $this_launch;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleNode$onAttach$slambda$slambda).s99 = function (interaction, $completion) {
    var tmp = this.t99(interaction, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(RippleNode$onAttach$slambda$slambda).ba = function (p1, $completion) {
    return this.s99((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleNode$onAttach$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          var tmp0_subject = this.ka5_1;
          if (isInterface(tmp0_subject, PressInteraction)) {
            if (this.ia5_1.ja3_1) {
              handlePressInteraction(this.ia5_1, this.ka5_1);
            } else {
              var tmp0 = this.ia5_1.ka3_1;
              var element = this.ka5_1;
              tmp0.e(element);
            }
          } else {
            updateStateLayer(this.ia5_1, this.ka5_1, this.ja5_1);
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
  protoOf(RippleNode$onAttach$slambda$slambda).t99 = function (interaction, completion) {
    var i = new RippleNode$onAttach$slambda$slambda(this.ia5_1, this.ja5_1, completion);
    i.ka5_1 = interaction;
    return i;
  };
  function RippleNode$onAttach$slambda$slambda_0(this$0, $this_launch, resultContinuation) {
    var i = new RippleNode$onAttach$slambda$slambda(this$0, $this_launch, resultContinuation);
    var l = function (interaction, $completion) {
      return i.s99(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function handlePressInteraction($this, pressInteraction) {
    if (pressInteraction instanceof Press) {
      $this.la2(pressInteraction, $this.ia3_1, $this.ha3_1);
    } else {
      if (pressInteraction instanceof Release) {
        $this.la3(pressInteraction.z9j_1);
      } else {
        if (pressInteraction instanceof Cancel) {
          $this.la3(pressInteraction.a9k_1);
        }
      }
    }
  }
  function updateStateLayer($this, interaction, scope) {
    var tmp0_elvis_lhs = $this.ga3_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new StateLayer($this.ba3_1, $this.ea3_1);
      // Inline function 'androidx.compose.material.ripple.RippleNode.updateStateLayer.<anonymous>' call
      invalidateDraw($this);
      $this.ga3_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stateLayer = tmp;
    stateLayer.qa5(interaction, scope);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.ra5_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).n1h = function (value, $completion) {
    return this.ra5_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).q3 = function () {
    return this.ra5_1;
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
  function RippleNode$onAttach$slambda(this$0, resultContinuation) {
    this.aa6_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleNode$onAttach$slambda).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(RippleNode$onAttach$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleNode$onAttach$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            var tmp_0 = this.aa6_1.aa3_1.z9a();
            var tmp_1 = RippleNode$onAttach$slambda$slambda_0(this.aa6_1, this.ba6_1, null);
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
  protoOf(RippleNode$onAttach$slambda).s1m = function ($this$launch, completion) {
    var i = new RippleNode$onAttach$slambda(this.aa6_1, completion);
    i.ba6_1 = $this$launch;
    return i;
  };
  function RippleNode$onAttach$slambda_0(this$0, resultContinuation) {
    var i = new RippleNode$onAttach$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleNode(interactionSource, bounded, radius, color, rippleAlpha) {
    Node.call(this);
    this.aa3_1 = interactionSource;
    this.ba3_1 = bounded;
    this.ca3_1 = radius;
    this.da3_1 = color;
    this.ea3_1 = rippleAlpha;
    this.fa3_1 = false;
    this.ga3_1 = null;
    this.ha3_1 = 0.0;
    this.ia3_1 = Companion_getInstance_0().b3h_1;
    this.ja3_1 = false;
    var tmp = this;
    // Inline function 'androidx.collection.mutableObjectListOf' call
    tmp.ka3_1 = new MutableObjectList();
  }
  protoOf(RippleNode).a5b = function () {
    return this.fa3_1;
  };
  protoOf(RippleNode).ra3 = function () {
    return this.da3_1.l46();
  };
  protoOf(RippleNode).f68 = function (size) {
    this.ja3_1 = true;
    var density = requireDensity(this);
    this.ia3_1 = toSize(size);
    var tmp = this;
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.material.ripple.RippleNode.onRemeasured.<anonymous>' call
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = this.ca3_1;
    if (isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp_0 = getRippleEndRadius(density, this.ba3_1, this.ia3_1);
    } else {
      tmp_0 = density.l3h(this.ca3_1);
    }
    tmp.ha3_1 = tmp_0;
    // Inline function 'androidx.collection.ObjectList.forEach' call
    var this_1 = this.ka3_1;
    // Inline function 'kotlin.contracts.contract' call
    var content = this_1.wq_1;
    var inductionVariable = 0;
    var last = this_1.xq_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp_1 = content[i];
        // Inline function 'androidx.compose.material.ripple.RippleNode.onRemeasured.<anonymous>' call
        var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
        handlePressInteraction(this, it);
      }
       while (inductionVariable < last);
    this.ka3_1.f2();
  };
  protoOf(RippleNode).e5b = function () {
    var tmp = this.z5a();
    launch(tmp, VOID, VOID, RippleNode$onAttach$slambda_0(this, null));
  };
  protoOf(RippleNode).j5c = function (_this__u8e3s4) {
    _this__u8e3s4.u5f();
    var tmp0_safe_receiver = this.ga3_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.material.ripple.RippleNode.draw.<anonymous>' call
      tmp0_safe_receiver.ca6(_this__u8e3s4, this.ha3_1, this.ra3());
    }
    this.ma3(_this__u8e3s4);
  };
  function StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    this.la6_1 = this$0;
    this.ma6_1 = $targetAlpha;
    this.na6_1 = $incomingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateLayer$handleInteraction$slambda).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(StateLayer$handleInteraction$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateLayer$handleInteraction$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.la6_1.na5_1.o7z(this.ma6_1, this.na6_1, VOID, VOID, this);
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
  protoOf(StateLayer$handleInteraction$slambda).s1m = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda(this.la6_1, this.ma6_1, this.na6_1, completion);
    i.oa6_1 = $this$launch;
    return i;
  };
  function StateLayer$handleInteraction$slambda_0(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation) {
    this.xa6_1 = this$0;
    this.ya6_1 = $outgoingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateLayer$handleInteraction$slambda_1).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(StateLayer$handleInteraction$slambda_1).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateLayer$handleInteraction$slambda_1).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.xa6_1.na5_1.o7z(0.0, this.ya6_1, VOID, VOID, this);
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
  protoOf(StateLayer$handleInteraction$slambda_1).s1m = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda_1(this.xa6_1, this.ya6_1, completion);
    i.za6_1 = $this$launch;
    return i;
  };
  function StateLayer$handleInteraction$slambda_2(this$0, $outgoingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StateLayer(bounded, rippleAlpha) {
    this.la5_1 = bounded;
    this.ma5_1 = rippleAlpha;
    this.na5_1 = Animatable(0.0);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.oa5_1 = ArrayList_init_$Create$();
    this.pa5_1 = null;
  }
  protoOf(StateLayer).qa5 = function (interaction, scope) {
    if (interaction instanceof Enter) {
      this.oa5_1.e(interaction);
    } else {
      if (interaction instanceof Exit) {
        this.oa5_1.d2(interaction.w9j_1);
      } else {
        if (interaction instanceof Focus) {
          this.oa5_1.e(interaction);
        } else {
          if (interaction instanceof Unfocus) {
            this.oa5_1.d2(interaction.v9j_1);
          } else {
            if (interaction instanceof Start) {
              this.oa5_1.e(interaction);
            } else {
              if (interaction instanceof Stop) {
                this.oa5_1.d2(interaction.ba7_1);
              } else {
                if (interaction instanceof Cancel_0) {
                  this.oa5_1.d2(interaction.aa7_1);
                } else {
                  return Unit_instance;
                }
              }
            }
          }
        }
      }
    }
    var newInteraction = lastOrNull(this.oa5_1);
    if (!equals(this.pa5_1, newInteraction)) {
      if (!(newInteraction == null)) {
        var rippleAlpha = this.ma5_1();
        var tmp;
        if (interaction instanceof Enter) {
          tmp = rippleAlpha.pa3_1;
        } else {
          if (interaction instanceof Focus) {
            tmp = rippleAlpha.oa3_1;
          } else {
            if (interaction instanceof Start) {
              tmp = rippleAlpha.na3_1;
            } else {
              tmp = 0.0;
            }
          }
        }
        var targetAlpha = tmp;
        var incomingAnimationSpec = incomingStateLayerAnimationSpecFor(newInteraction);
        launch(scope, VOID, VOID, StateLayer$handleInteraction$slambda_0(this, targetAlpha, incomingAnimationSpec, null));
      } else {
        var outgoingAnimationSpec = outgoingStateLayerAnimationSpecFor(this.pa5_1);
        launch(scope, VOID, VOID, StateLayer$handleInteraction$slambda_2(this, outgoingAnimationSpec, null));
      }
      this.pa5_1 = newInteraction;
    }
  };
  protoOf(StateLayer).ca6 = function (_this__u8e3s4, radius, color) {
    var alpha = this.na5_1.v();
    if (alpha > 0.0) {
      var modulatedColor = Color__copy$default_impl_ectz3s(color, alpha);
      if (this.la5_1) {
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        var right = _Size___get_width__impl__58y75t(_this__u8e3s4.z4c());
        var bottom = _Size___get_height__impl__a04p02(_this__u8e3s4.z4c());
        var clipOp = Companion_getInstance_1().d43_1;
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform.<anonymous>' call
        var $this$with = _this__u8e3s4.x4d();
        var previousSize = $this$with.z4c();
        $this$with.j3t().t42();
        try {
          // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
          $this$with.r4d().a43(0.0, 0.0, right, bottom, clipOp);
          // Inline function 'androidx.compose.material.ripple.StateLayer.drawStateLayer.<anonymous>' call
          _this__u8e3s4.e4e(modulatedColor, radius);
        }finally {
          $this$with.j3t().u42();
          $this$with.q4d(previousSize);
        }
      } else {
        _this__u8e3s4.e4e(modulatedColor, radius);
      }
    }
  };
  function incomingStateLayerAnimationSpecFor(interaction) {
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (interaction instanceof Enter) {
      tmp = get_DefaultTweenSpec();
    } else {
      if (interaction instanceof Focus) {
        tmp = new TweenSpec(45, VOID, get_LinearEasing());
      } else {
        if (interaction instanceof Start) {
          tmp = new TweenSpec(45, VOID, get_LinearEasing());
        } else {
          tmp = get_DefaultTweenSpec();
        }
      }
    }
    return tmp;
  }
  function outgoingStateLayerAnimationSpecFor(interaction) {
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (interaction instanceof Enter) {
      tmp = get_DefaultTweenSpec();
    } else {
      if (interaction instanceof Focus) {
        tmp = get_DefaultTweenSpec();
      } else {
        if (interaction instanceof Start) {
          tmp = new TweenSpec(150, VOID, get_LinearEasing());
        } else {
          tmp = get_DefaultTweenSpec();
        }
      }
    }
    return tmp;
  }
  function rememberRipple(bounded, radius, color, $composer, $changed, $default) {
    _init_properties_Ripple_kt__d55ieo();
    var bounded_0 = bounded;
    var radius_0 = radius;
    var color_0 = color;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1635163520, 'C(rememberRipple)P(!1,2:c#ui.unit.Dp,1:c#ui.graphics.Color)147@7571L27,148@7610L85:Ripple.kt#vhb33q');
    if (!(($default & 1) === 0))
      bounded_0 = true;
    if (!(($default & 2) === 0))
      radius_0 = Companion_getInstance_2().c3i_1;
    if (!(($default & 4) === 0))
      color_0 = Companion_getInstance_3().j45_1;
    if (isTraceInProgress()) {
      traceEventStart(1635163520, $changed, -1, 'androidx.compose.material.ripple.rememberRipple (Ripple.kt:146)');
    }
    var colorState = rememberUpdatedState(new Color(color_0), $composer_0, 14 & $changed >> 6);
    sourceInformationMarkerStart($composer_0, 487972074, 'CC(remember):Ripple.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.n26(bounded_0) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.o26(_Dp___get_value__impl__geb1vb(radius_0)) || ($changed & 48) === 32));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d27();
    var tmp;
    if (invalid || it === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.material.ripple.rememberRipple.<anonymous>' call
      var value = new CommonRipple(bounded_0, radius_0, colorState);
      $composer_0.o27(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function Ripple$rememberUpdatedInstance$slambda$slambda($instance, $this_LaunchedEffect, resultContinuation) {
    this.ka7_1 = $instance;
    this.la7_1 = $this_LaunchedEffect;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Ripple$rememberUpdatedInstance$slambda$slambda).s99 = function (interaction, $completion) {
    var tmp = this.t99(interaction, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda$slambda).ba = function (p1, $completion) {
    return this.s99((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          var tmp0_subject = this.ma7_1;
          if (tmp0_subject instanceof Press) {
            this.ka7_1.ya4(this.ma7_1, this.la7_1);
          } else {
            if (tmp0_subject instanceof Release) {
              this.ka7_1.la3(this.ma7_1.z9j_1);
            } else {
              if (tmp0_subject instanceof Cancel) {
                this.ka7_1.la3(this.ma7_1.a9k_1);
              } else {
                this.ka7_1.za4(this.ma7_1, this.la7_1);
              }
            }
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
  protoOf(Ripple$rememberUpdatedInstance$slambda$slambda).t99 = function (interaction, completion) {
    var i = new Ripple$rememberUpdatedInstance$slambda$slambda(this.ka7_1, this.la7_1, completion);
    i.ma7_1 = interaction;
    return i;
  };
  function Ripple$rememberUpdatedInstance$slambda$slambda_0($instance, $this_LaunchedEffect, resultContinuation) {
    var i = new Ripple$rememberUpdatedInstance$slambda$slambda($instance, $this_LaunchedEffect, resultContinuation);
    var l = function (interaction, $completion) {
      return i.s99(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.na7_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).n1h = function (value, $completion) {
    return this.na7_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).q3 = function () {
    return this.na7_1;
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
  function Ripple$rememberUpdatedInstance$slambda($interactionSource, $instance, resultContinuation) {
    this.wa7_1 = $interactionSource;
    this.xa7_1 = $instance;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Ripple$rememberUpdatedInstance$slambda).r1m = function ($this$LaunchedEffect, $completion) {
    var tmp = this.s1m($this$LaunchedEffect, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Ripple$rememberUpdatedInstance$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            var tmp_0 = this.wa7_1.z9a();
            var tmp_1 = Ripple$rememberUpdatedInstance$slambda$slambda_0(this.xa7_1, this.ya7_1, null);
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
  protoOf(Ripple$rememberUpdatedInstance$slambda).s1m = function ($this$LaunchedEffect, completion) {
    var i = new Ripple$rememberUpdatedInstance$slambda(this.wa7_1, this.xa7_1, completion);
    i.ya7_1 = $this$LaunchedEffect;
    return i;
  };
  function Ripple$rememberUpdatedInstance$slambda_0($interactionSource, $instance, resultContinuation) {
    var i = new Ripple$rememberUpdatedInstance$slambda($interactionSource, $instance, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.r1m($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Ripple(bounded, radius, color) {
    this.xa3_1 = bounded;
    this.ya3_1 = radius;
    this.za3_1 = color;
  }
  protoOf(Ripple).e99 = function (interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.j25(988743187);
    sourceInformation($composer_0, 'C(rememberUpdatedInstance)197@9514L7,198@9542L221,207@9856L13,207@9829L41,209@9895L155,217@10104L491,217@10060L535:Ripple.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(988743187, $changed, -1, 'androidx.compose.material.ripple.Ripple.rememberUpdatedInstance (Ripple.kt:196)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalRippleTheme();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.u27(this_0);
    sourceInformationMarkerEnd($composer_1);
    var theme = tmp0;
    $composer_0.j25(-9793426);
    sourceInformation($composer_0, '203@9725L14');
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_1 = this.za3_1.v().s44_1;
    if (!equals(_Color___get_value__impl__1pls5m(this_1), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = this.za3_1.v().s44_1;
    } else {
      tmp = theme.za7($composer_0, 0);
    }
    var tmp1_group = tmp;
    $composer_0.l25();
    var color = rememberUpdatedState(new Color(tmp1_group), $composer_0, 0);
    var rippleAlpha = rememberUpdatedState(theme.aa8($composer_0, 0), $composer_0, 0);
    var instance = this.wa3(interactionSource, this.xa3_1, this.ya3_1, color, rippleAlpha, $composer_0, 14 & $changed | 458752 & $changed << 12);
    sourceInformationMarkerStart($composer_0, -9776216, 'CC(remember):Ripple.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.m1w(interactionSource) || ($changed & 6) === 4) | $composer_0.m26(instance));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d27();
    var tmp_0;
    if (invalid || it === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.material.ripple.Ripple.rememberUpdatedInstance.<anonymous>' call
      var value = Ripple$rememberUpdatedInstance$slambda_0(interactionSource, instance, null);
      $composer_0.o27(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp2_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    LaunchedEffect(instance, interactionSource, tmp2_group, $composer_0, 112 & $changed << 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.l25();
    return instance;
  };
  protoOf(Ripple).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Ripple))
      return false;
    if (!(this.xa3_1 === other.xa3_1))
      return false;
    if (!equals(this.ya3_1, other.ya3_1))
      return false;
    if (!equals(this.za3_1, other.za3_1))
      return false;
    return true;
  };
  protoOf(Ripple).hashCode = function () {
    var result = getBooleanHashCode(this.xa3_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.ya3_1) | 0;
    result = imul(31, result) + hashCode(this.za3_1) | 0;
    return result;
  };
  function RippleIndicationInstance$stateLayer$lambda($rippleAlpha) {
    return function () {
      return $rippleAlpha.v();
    };
  }
  function RippleIndicationInstance(bounded, rippleAlpha) {
    this.va4_1 = bounded;
    var tmp = this;
    tmp.wa4_1 = new StateLayer(this.va4_1, RippleIndicationInstance$stateLayer$lambda(rippleAlpha));
  }
  protoOf(RippleIndicationInstance).za4 = function (interaction, scope) {
    this.wa4_1.qa5(interaction, scope);
  };
  protoOf(RippleIndicationInstance).xa4 = function (_this__u8e3s4, radius, color) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.material.ripple.RippleIndicationInstance.drawStateLayer.<anonymous>' call
    var $this$with = this.wa4_1;
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (isNaN_0(_Dp___get_value__impl__geb1vb(radius))) {
      tmp = getRippleEndRadius(_this__u8e3s4, this.va4_1, _this__u8e3s4.z4c());
    } else {
      tmp = _this__u8e3s4.l3h(radius);
    }
    var targetRadius = tmp;
    $this$with.ca6(_this__u8e3s4, targetRadius, color);
  };
  var properties_initialized_Ripple_kt_3wqvym;
  function _init_properties_Ripple_kt__d55ieo() {
    if (!properties_initialized_Ripple_kt_3wqvym) {
      properties_initialized_Ripple_kt_3wqvym = true;
      DefaultTweenSpec = new TweenSpec(15, VOID, get_LinearEasing());
    }
  }
  function get_BoundedRippleExtraRadius() {
    _init_properties_RippleAnimation_kt__8sy0vy();
    return BoundedRippleExtraRadius;
  }
  var BoundedRippleExtraRadius;
  function RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation) {
    this.ja8_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.ja8_1.fa1_1.o7z(1.0, tween(75, VOID, get_LinearEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeIn$slambda$slambda).s1m = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this.ja8_1, completion);
    i.ka8_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation) {
    this.ta8_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.ta8_1.ga1_1.o7z(1.0, tween(225, VOID, get_FastOutSlowInEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).s1m = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this.ta8_1, completion);
    i.ua8_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_2(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation) {
    this.da9_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.da9_1.ha1_1.o7z(1.0, tween(225, VOID, get_LinearEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).s1m = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this.da9_1, completion);
    i.ea9_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_4(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation) {
    this.na9_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeOut$slambda$slambda).r1m = function ($this$launch, $completion) {
    var tmp = this.s1m($this$launch, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = this.na9_1.fa1_1.o7z(0.0, tween(150, VOID, get_LinearEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeOut$slambda$slambda).s1m = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this.na9_1, completion);
    i.oa9_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeOut$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.r1m($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _set_finishedFadingIn__33hlo9($this, _set____db54di) {
    var tmp0 = $this.ja1_1;
    finishedFadingIn$factory();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  }
  function _get_finishedFadingIn__pzmnej($this) {
    var tmp0 = $this.ja1_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    finishedFadingIn$factory_0();
    return tmp0.v();
  }
  function _set_finishRequested__u52oy2($this, _set____db54di) {
    var tmp0 = $this.ka1_1;
    finishRequested$factory();
    tmp0.d1l(_set____db54di);
    return Unit_instance;
  }
  function _get_finishRequested__usb5ii($this) {
    var tmp0 = $this.ka1_1;
    // Inline function 'androidx.compose.runtime.getValue' call
    finishRequested$factory_0();
    return tmp0.v();
  }
  function fadeIn($this, $completion) {
    var tmp = new $fadeInCOROUTINE$1($this, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function fadeOut($this, $completion) {
    var tmp = new $fadeOutCOROUTINE$2($this, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function RippleAnimation$fadeIn$slambda(this$0, resultContinuation) {
    this.paa_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda).raa = function ($this$coroutineScope, $completion) {
    var tmp = this.s1m($this$coroutineScope, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(RippleAnimation$fadeIn$slambda).ba = function (p1, $completion) {
    return this.raa((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          launch(this.qaa_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_0(this.paa_1, null));
          launch(this.qaa_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_2(this.paa_1, null));
          return launch(this.qaa_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_4(this.paa_1, null));
        } else if (tmp === 1) {
          throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda).s1m = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeIn$slambda(this.paa_1, completion);
    i.qaa_1 = $this$coroutineScope;
    return i;
  };
  function RippleAnimation$fadeIn$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.raa($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function RippleAnimation$fadeOut$slambda(this$0, resultContinuation) {
    this.aab_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeOut$slambda).raa = function ($this$coroutineScope, $completion) {
    var tmp = this.s1m($this$coroutineScope, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(RippleAnimation$fadeOut$slambda).ba = function (p1, $completion) {
    return this.raa((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeOut$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          return launch(this.bab_1, VOID, VOID, RippleAnimation$fadeOut$slambda$slambda_0(this.aab_1, null));
        } else if (tmp === 1) {
          throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeOut$slambda).s1m = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeOut$slambda(this.aab_1, completion);
    i.bab_1 = $this$coroutineScope;
    return i;
  };
  function RippleAnimation$fadeOut$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda(this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.raa($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $animateCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.kab_1 = _this__u8e3s4;
  }
  protoOf($animateCOROUTINE$0).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 4;
            this.h9_1 = 1;
            suspendResult = fadeIn(this.kab_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            _set_finishedFadingIn__33hlo9(this.kab_1, true);
            this.h9_1 = 2;
            suspendResult = this.kab_1.ia1_1.f11(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h9_1 = 3;
            suspendResult = fadeOut(this.kab_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  function $fadeInCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xa9_1 = _this__u8e3s4;
  }
  protoOf($fadeInCOROUTINE$1).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = coroutineScope(RippleAnimation$fadeIn$slambda_0(this.xa9_1, null), this);
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
  function $fadeOutCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.gaa_1 = _this__u8e3s4;
  }
  protoOf($fadeOutCOROUTINE$2).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            suspendResult = coroutineScope(RippleAnimation$fadeOut$slambda_0(this.gaa_1, null), this);
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
  function RippleAnimation(origin, radius, bounded) {
    this.aa1_1 = origin;
    this.ba1_1 = radius;
    this.ca1_1 = bounded;
    this.da1_1 = null;
    this.ea1_1 = null;
    this.fa1_1 = Animatable(0.0);
    this.ga1_1 = Animatable(0.0);
    this.ha1_1 = Animatable(0.0);
    this.ia1_1 = CompletableDeferred(null);
    this.ja1_1 = mutableStateOf(false);
    this.ka1_1 = mutableStateOf(false);
  }
  protoOf(RippleAnimation).la1 = function ($completion) {
    var tmp = new $animateCOROUTINE$0(this, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(RippleAnimation).ma2 = function () {
    _set_finishRequested__u52oy2(this, true);
    this.ia1_1.g11(Unit_instance);
  };
  protoOf(RippleAnimation).sa3 = function (_this__u8e3s4, color) {
    if (this.da1_1 == null) {
      this.da1_1 = getRippleStartRadius(_this__u8e3s4.z4c());
    }
    var tmp = this.aa1_1;
    if ((tmp == null ? null : new Offset(tmp)) == null) {
      this.aa1_1 = _this__u8e3s4.h4e();
    }
    var tmp_0 = this.ea1_1;
    if ((tmp_0 == null ? null : new Offset(tmp_0)) == null) {
      this.ea1_1 = Offset_0(_Size___get_width__impl__58y75t(_this__u8e3s4.z4c()) / 2.0, _Size___get_height__impl__a04p02(_this__u8e3s4.z4c()) / 2.0);
    }
    var tmp_1;
    if (_get_finishRequested__usb5ii(this) && !_get_finishedFadingIn__pzmnej(this)) {
      tmp_1 = 1.0;
    } else {
      tmp_1 = this.fa1_1.v();
    }
    var alpha = tmp_1;
    var radius = lerp(ensureNotNull(this.da1_1), this.ba1_1, this.ga1_1.v());
    var tmp_2 = this.aa1_1;
    var tmp_3 = _Offset___get_x__impl__xvi35n(ensureNotNull(tmp_2 == null ? null : new Offset(tmp_2)).g3g_1);
    var tmp_4 = this.ea1_1;
    var tmp_5 = lerp(tmp_3, _Offset___get_x__impl__xvi35n(ensureNotNull(tmp_4 == null ? null : new Offset(tmp_4)).g3g_1), this.ha1_1.v());
    var tmp_6 = this.aa1_1;
    var tmp_7 = _Offset___get_y__impl__8bzhra(ensureNotNull(tmp_6 == null ? null : new Offset(tmp_6)).g3g_1);
    var tmp_8 = this.ea1_1;
    var centerOffset = Offset_0(tmp_5, lerp(tmp_7, _Offset___get_y__impl__8bzhra(ensureNotNull(tmp_8 == null ? null : new Offset(tmp_8)).g3g_1), this.ha1_1.v()));
    var modulatedColor = Color__copy$default_impl_ectz3s(color, _Color___get_alpha__impl__wcfyv1(color) * alpha);
    if (this.ca1_1) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
      var right = _Size___get_width__impl__58y75t(_this__u8e3s4.z4c());
      var bottom = _Size___get_height__impl__a04p02(_this__u8e3s4.z4c());
      var clipOp = Companion_getInstance_1().d43_1;
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform.<anonymous>' call
      var $this$with = _this__u8e3s4.x4d();
      var previousSize = $this$with.z4c();
      $this$with.j3t().t42();
      try {
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
        $this$with.r4d().a43(0.0, 0.0, right, bottom, clipOp);
        // Inline function 'androidx.compose.material.ripple.RippleAnimation.draw.<anonymous>' call
        _this__u8e3s4.e4e(modulatedColor, radius, centerOffset);
      }finally {
        $this$with.j3t().u42();
        $this$with.q4d(previousSize);
      }
    } else {
      _this__u8e3s4.e4e(modulatedColor, radius, centerOffset);
    }
  };
  function getRippleEndRadius(_this__u8e3s4, bounded, size) {
    _init_properties_RippleAnimation_kt__8sy0vy();
    var radiusCoveringBounds = Offset__getDistance_impl_pclvxn(Offset_0(_Size___get_width__impl__58y75t(size), _Size___get_height__impl__a04p02(size))) / 2.0;
    var tmp;
    if (bounded) {
      tmp = radiusCoveringBounds + _this__u8e3s4.l3h(get_BoundedRippleExtraRadius());
    } else {
      tmp = radiusCoveringBounds;
    }
    return tmp;
  }
  function getRippleStartRadius(size) {
    _init_properties_RippleAnimation_kt__8sy0vy();
    var tmp0 = _Size___get_width__impl__58y75t(size);
    // Inline function 'kotlin.math.max' call
    var b = _Size___get_height__impl__a04p02(size);
    return Math.max(tmp0, b) * 0.3;
  }
  function finishedFadingIn$factory() {
    return getPropertyCallableRef('finishedFadingIn', 1, KMutableProperty1, function (receiver) {
      return _get_finishedFadingIn__pzmnej(receiver);
    }, function (receiver, value) {
      return _set_finishedFadingIn__33hlo9(receiver, value);
    });
  }
  function finishedFadingIn$factory_0() {
    return getPropertyCallableRef('finishedFadingIn', 1, KMutableProperty1, function (receiver) {
      return _get_finishedFadingIn__pzmnej(receiver);
    }, function (receiver, value) {
      return _set_finishedFadingIn__33hlo9(receiver, value);
    });
  }
  function finishRequested$factory() {
    return getPropertyCallableRef('finishRequested', 1, KMutableProperty1, function (receiver) {
      return _get_finishRequested__usb5ii(receiver);
    }, function (receiver, value) {
      return _set_finishRequested__u52oy2(receiver, value);
    });
  }
  function finishRequested$factory_0() {
    return getPropertyCallableRef('finishRequested', 1, KMutableProperty1, function (receiver) {
      return _get_finishRequested__usb5ii(receiver);
    }, function (receiver, value) {
      return _set_finishRequested__u52oy2(receiver, value);
    });
  }
  var properties_initialized_RippleAnimation_kt_4ja21o;
  function _init_properties_RippleAnimation_kt__8sy0vy() {
    if (!properties_initialized_RippleAnimation_kt_4ja21o) {
      properties_initialized_RippleAnimation_kt_4ja21o = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      BoundedRippleExtraRadius = _Dp___init__impl__ms3zkb(10);
    }
  }
  function get_LocalRippleTheme() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LocalRippleTheme;
  }
  var LocalRippleTheme;
  function get_LightThemeHighContrastRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LightThemeHighContrastRippleAlpha;
  }
  var LightThemeHighContrastRippleAlpha;
  function get_LightThemeLowContrastRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LightThemeLowContrastRippleAlpha;
  }
  var LightThemeLowContrastRippleAlpha;
  function get_DarkThemeRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return DarkThemeRippleAlpha;
  }
  var DarkThemeRippleAlpha;
  function Companion() {
  }
  protoOf(Companion).lab = function (contentColor, lightTheme) {
    var contentLuminance = luminance(contentColor);
    var tmp;
    if (!lightTheme && contentLuminance < 0.5) {
      tmp = Companion_getInstance_3().b45_1;
    } else {
      tmp = contentColor;
    }
    return tmp;
  };
  protoOf(Companion).mab = function (contentColor, lightTheme) {
    var tmp;
    if (lightTheme) {
      var tmp_0;
      if (luminance(contentColor) > 0.5) {
        tmp_0 = get_LightThemeHighContrastRippleAlpha();
      } else {
        tmp_0 = get_LightThemeLowContrastRippleAlpha();
      }
      tmp = tmp_0;
    } else {
      tmp = get_DarkThemeRippleAlpha();
    }
    return tmp;
  };
  var Companion_instance;
  function Companion_getInstance_4() {
    return Companion_instance;
  }
  function DebugRippleTheme() {
  }
  protoOf(DebugRippleTheme).za7 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.j25(2042140174);
    sourceInformation($composer_0, 'C(defaultColor):RippleTheme.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(2042140174, $changed, -1, 'androidx.compose.material.ripple.DebugRippleTheme.defaultColor (RippleTheme.kt:239)');
    }
    var tmp0 = Companion_instance.lab(Companion_getInstance_3().x44_1, true);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.l25();
    return tmp0;
  };
  protoOf(DebugRippleTheme).aa8 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.j25(-1629816343);
    sourceInformation($composer_0, 'C(rippleAlpha):RippleTheme.kt#vhb33q');
    if (isTraceInProgress()) {
      traceEventStart(-1629816343, $changed, -1, 'androidx.compose.material.ripple.DebugRippleTheme.rippleAlpha (RippleTheme.kt:243)');
    }
    var tmp0 = Companion_instance.mab(Companion_getInstance_3().x44_1, true);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.l25();
    return tmp0;
  };
  var DebugRippleTheme_instance;
  function DebugRippleTheme_getInstance() {
    return DebugRippleTheme_instance;
  }
  function RippleAlpha(draggedAlpha, focusedAlpha, hoveredAlpha, pressedAlpha) {
    this.na3_1 = draggedAlpha;
    this.oa3_1 = focusedAlpha;
    this.pa3_1 = hoveredAlpha;
    this.qa3_1 = pressedAlpha;
  }
  protoOf(RippleAlpha).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleAlpha))
      return false;
    if (!(this.na3_1 === other.na3_1))
      return false;
    if (!(this.oa3_1 === other.oa3_1))
      return false;
    if (!(this.pa3_1 === other.pa3_1))
      return false;
    if (!(this.qa3_1 === other.qa3_1))
      return false;
    return true;
  };
  protoOf(RippleAlpha).hashCode = function () {
    var result = getNumberHashCode(this.na3_1);
    result = imul(31, result) + getNumberHashCode(this.oa3_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.pa3_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.qa3_1) | 0;
    return result;
  };
  protoOf(RippleAlpha).toString = function () {
    return 'RippleAlpha(draggedAlpha=' + this.na3_1 + ', focusedAlpha=' + this.oa3_1 + ', ' + ('hoveredAlpha=' + this.pa3_1 + ', pressedAlpha=' + this.qa3_1 + ')');
  };
  function LocalRippleTheme$lambda() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return DebugRippleTheme_instance;
  }
  var properties_initialized_RippleTheme_kt_m09bsn;
  function _init_properties_RippleTheme_kt__e4jrk7() {
    if (!properties_initialized_RippleTheme_kt_m09bsn) {
      properties_initialized_RippleTheme_kt_m09bsn = true;
      LocalRippleTheme = staticCompositionLocalOf(LocalRippleTheme$lambda);
      LightThemeHighContrastRippleAlpha = new RippleAlpha(0.16, 0.24, 0.08, 0.24);
      LightThemeLowContrastRippleAlpha = new RippleAlpha(0.08, 0.12, 0.04, 0.12);
      DarkThemeRippleAlpha = new RippleAlpha(0.08, 0.12, 0.04, 0.1);
    }
  }
  function createPlatformRippleNode(interactionSource, bounded, radius, color, rippleAlpha) {
    return new CommonRippleNode(interactionSource, bounded, radius, color, rippleAlpha);
  }
  //region block: post-declaration
  protoOf(RippleNode).a5f = onMeasureResultChanged;
  protoOf(RippleNode).e68 = onPlaced;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  DebugRippleTheme_instance = new DebugRippleTheme();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalRippleTheme;
  _.$_$.b = RippleAlpha;
  _.$_$.c = createRippleModifierNode;
  _.$_$.d = rememberRipple;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-material-material-ripple.js.map
