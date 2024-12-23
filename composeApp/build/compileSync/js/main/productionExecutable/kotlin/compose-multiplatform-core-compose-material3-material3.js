(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-animation-animation-core.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './compose-multiplatform-core-compose-material-material-ripple.js', './compose-multiplatform-core-compose-ui-ui-text.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./compose-multiplatform-core-compose-material-material-ripple.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-material-material-ripple'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-material-material-ripple' was not found. Please, check whether 'compose-multiplatform-core-compose-material-material-ripple' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    globalThis['compose-multiplatform-core-compose-material3-material3'] = factory(typeof globalThis['compose-multiplatform-core-compose-material3-material3'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-material-material-ripple'], globalThis['compose-multiplatform-core-compose-ui-ui-text']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_material_material_ripple, kotlin_org_jetbrains_compose_ui_ui_text) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.kb;
  var equals = kotlin_kotlin.$_$.ba;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a2;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.s4;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var funMutableInteractionSource = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m;
  var VOID = kotlin_kotlin.$_$.e;
  var semantics = kotlin_org_jetbrains_compose_ui_ui.$_$.k3;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var CoroutineImpl = kotlin_kotlin.$_$.l9;
  var Interaction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h;
  var isInterface = kotlin_kotlin.$_$.za;
  var Cancel = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j;
  var Release = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l;
  var Press = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k;
  var Unfocus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e;
  var Focus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d;
  var Exit = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g;
  var Enter = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f;
  var initMetadataForLambda = kotlin_kotlin.$_$.oa;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var lastOrNull = kotlin_kotlin.$_$.u6;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var get_VectorConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.m;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var FunctionAdapter = kotlin_kotlin.$_$.p9;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var hashCode = kotlin_kotlin.$_$.ja;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var PaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h2;
  var initMetadataForObject = kotlin_kotlin.$_$.pa;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.q4;
  var set_role = kotlin_org_jetbrains_compose_ui_ui.$_$.j3;
  var defaultMinSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.r4;
  var rowMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.x3;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui.$_$.o4;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var RowScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.g1;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b2;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n2;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c2;
  var Long = kotlin_kotlin.$_$.ue;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.b3;
  var compositeOver = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c1;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.w1;
  var roundToInt = kotlin_kotlin.$_$.tb;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.u3;
  var currentValueOf = kotlin_org_jetbrains_compose_ui_ui.$_$.h2;
  var coerceAtLeast = kotlin_kotlin.$_$.zb;
  var isNaN_0 = kotlin_kotlin.$_$.tf;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var CompositionLocalConsumerModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.o1;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.v1;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y1;
  var get_LocalIndication = kotlin_org_jetbrains_compose_foundation_foundation.$_$.x;
  var get_LocalRippleTheme = kotlin_org_jetbrains_compose_material_material_ripple.$_$.a;
  var get_LocalTextSelectionColors = kotlin_org_jetbrains_compose_foundation_foundation.$_$.r;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.c3;
  var TextSelectionColors = kotlin_org_jetbrains_compose_foundation_foundation.$_$.s;
  var toString = kotlin_kotlin.$_$.ig;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var ColorProducer = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h;
  var getBooleanHashCode = kotlin_kotlin.$_$.ea;
  var rememberUpdatedInstance = kotlin_org_jetbrains_compose_foundation_foundation.$_$.u;
  var IndicationNodeFactory = kotlin_org_jetbrains_compose_foundation_foundation.$_$.v;
  var observeReads = kotlin_org_jetbrains_compose_ui_ui.$_$.o2;
  var createRippleModifierNode = kotlin_org_jetbrains_compose_material_material_ripple.$_$.c;
  var DelegatingNode = kotlin_org_jetbrains_compose_ui_ui.$_$.p1;
  var RippleAlpha = kotlin_org_jetbrains_compose_material_material_ripple.$_$.b;
  var rememberRipple = kotlin_org_jetbrains_compose_material_material_ripple.$_$.d;
  var toString_0 = kotlin_kotlin.$_$.ob;
  var get_CircleShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.n;
  var get_RectangleShape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.xf;
  var CornerSize = kotlin_org_jetbrains_compose_foundation_foundation.$_$.o;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.k;
  var border = kotlin_org_jetbrains_compose_foundation_foundation.$_$.z;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.y;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.d;
  var set_isContainer = kotlin_org_jetbrains_compose_ui_ui.$_$.f3;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.r;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.s2;
  var pointerInput = kotlin_org_jetbrains_compose_ui_ui.$_$.b1;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e;
  var BoxScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i;
  var clickable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a1;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var FontStyle = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a;
  var TextAlign = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f;
  var TextOverflow = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g;
  var _TextUnit___get_packedValue__impl__it60w4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_org_jetbrains_compose_ui_ui_text.$_$.w;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d3;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.d1;
  var BasicText = kotlin_org_jetbrains_compose_foundation_foundation.$_$.t;
  var CompositionLocalProvider_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var structuralEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var Start = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ma;
  var CubicBezierEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.d;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j;
  var Enum = kotlin_kotlin.$_$.pe;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.p;
  var RoundedCornerShape_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.q;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i1;
  var get_sp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j1;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f1;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.z;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a1;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.b1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.c1;
  var LineHeightStyle = kotlin_org_jetbrains_compose_ui_ui_text.$_$.e;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ButtonColors, 'ButtonColors');
  initMetadataForLambda(ButtonElevation$animateElevation$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(ButtonElevation$animateElevation$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ButtonElevation$animateElevation$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ButtonElevation, 'ButtonElevation');
  initMetadataForObject(ButtonDefaults, 'ButtonDefaults');
  initMetadataForClass(ColorScheme, 'ColorScheme');
  initMetadataForObject(MinimumInteractiveModifier, 'MinimumInteractiveModifier', VOID, ModifierNodeElement);
  initMetadataForClass(MinimumInteractiveModifierNode, 'MinimumInteractiveModifierNode', MinimumInteractiveModifierNode, Node, [Node, CompositionLocalConsumerModifierNode, LayoutModifierNode]);
  initMetadataForObject(MaterialTheme, 'MaterialTheme');
  initMetadataForClass(RippleConfiguration, 'RippleConfiguration', RippleConfiguration);
  initMetadataForClass(sam$androidx_compose_ui_graphics_ColorProducer$0, 'sam$androidx_compose_ui_graphics_ColorProducer$0', VOID, VOID, [ColorProducer, FunctionAdapter]);
  initMetadataForClass(RippleNodeFactory, 'RippleNodeFactory', VOID, VOID, [IndicationNodeFactory]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_ColorProducer$0_0, 'sam$androidx_compose_ui_graphics_ColorProducer$0', VOID, VOID, [ColorProducer, FunctionAdapter]);
  initMetadataForClass(DelegatingThemeAwareRippleNode, 'DelegatingThemeAwareRippleNode', VOID, DelegatingNode, [DelegatingNode, CompositionLocalConsumerModifierNode]);
  initMetadataForObject(RippleDefaults, 'RippleDefaults');
  initMetadataForObject(CompatRippleTheme, 'CompatRippleTheme');
  initMetadataForClass(Shapes, 'Shapes', Shapes);
  initMetadataForObject(ShapeDefaults, 'ShapeDefaults');
  initMetadataForLambda(Surface$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Typography, 'Typography', Typography);
  initMetadataForObject(ElevationDefaults, 'ElevationDefaults');
  initMetadataForCoroutine($animateElevationCOROUTINE$0, CoroutineImpl);
  initMetadataForObject(ColorDarkTokens, 'ColorDarkTokens');
  initMetadataForObject(ColorLightTokens, 'ColorLightTokens');
  initMetadataForClass(ColorSchemeKeyTokens, 'ColorSchemeKeyTokens', VOID, Enum);
  initMetadataForObject(ElevationTokens, 'ElevationTokens');
  initMetadataForObject(FilledButtonTokens, 'FilledButtonTokens');
  initMetadataForObject(PaletteTokens, 'PaletteTokens');
  initMetadataForClass(ShapeKeyTokens, 'ShapeKeyTokens', VOID, Enum);
  initMetadataForObject(ShapeTokens, 'ShapeTokens');
  initMetadataForObject(StateTokens, 'StateTokens');
  initMetadataForObject(TypeScaleTokens, 'TypeScaleTokens');
  initMetadataForObject(TypefaceTokens, 'TypefaceTokens');
  initMetadataForClass(TypographyKeyTokens, 'TypographyKeyTokens', VOID, Enum);
  initMetadataForObject(TypographyTokens, 'TypographyTokens');
  //endregion
  function ButtonColors(containerColor, contentColor, disabledContainerColor, disabledContentColor) {
    this.oaj_1 = containerColor;
    this.paj_1 = contentColor;
    this.qaj_1 = disabledContainerColor;
    this.raj_1 = disabledContentColor;
  }
  protoOf(ButtonColors).saj = function (enabled) {
    return enabled ? this.oaj_1 : this.qaj_1;
  };
  protoOf(ButtonColors).taj = function (enabled) {
    return enabled ? this.paj_1 : this.raj_1;
  };
  protoOf(ButtonColors).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof ButtonColors);
    }
    if (tmp)
      return false;
    if (!equals(this.oaj_1, other.oaj_1))
      return false;
    if (!equals(this.paj_1, other.paj_1))
      return false;
    if (!equals(this.qaj_1, other.qaj_1))
      return false;
    if (!equals(this.raj_1, other.raj_1))
      return false;
    return true;
  };
  protoOf(ButtonColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.oaj_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.paj_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.qaj_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.raj_1) | 0;
    return result;
  };
  function Button(onClick, modifier, enabled, shape, colors, elevation, border, contentPadding, interactionSource, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var shape_0 = {_v: shape};
    var colors_0 = {_v: colors};
    var elevation_0 = {_v: elevation};
    var border_0 = {_v: border};
    var contentPadding_0 = {_v: contentPadding};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v28(650121315);
    sourceInformation($composer_0, 'C(Button)P(8,7,5,9,1,4!1,3,6)111@5461L5,112@5510L14,113@5575L17,126@6204L22,134@6467L587,124@6130L924:Button.kt#uh7d8r');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m26(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1w(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.n26(enabled_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | (($default & 8) === 0 && $composer_0.m1w(shape_0._v) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | (($default & 16) === 0 && $composer_0.m1w(colors_0._v) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | (($default & 32) === 0 && $composer_0.m1w(elevation_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.m1w(border_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.m1w(contentPadding_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.m1w(interactionSource_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.m26(content) ? 536870912 : 268435456);
    if (!(($dirty & 306783379) === 306783378) || !$composer_0.d25()) {
      $composer_0.m25();
      if (($changed & 1) === 0 || $composer_0.q25()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 8) === 0)) {
          shape_0._v = ButtonDefaults_getInstance().hak($composer_0, 6);
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          colors_0._v = ButtonDefaults_getInstance().iak($composer_0, 6);
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          var tmp = ButtonDefaults_getInstance();
          var tmp_0 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
          elevation_0._v = tmp.jak(tmp_0, tmp_1, tmp_2, tmp_3, _Dp___init__impl__ms3zkb(0.0), $composer_0, 196608, 31);
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          border_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          contentPadding_0._v = ButtonDefaults_getInstance().waj_1;
        }
        if (!(($default & 256) === 0)) {
          interactionSource_0._v = null;
        }
      } else {
        $composer_0.n1z();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
      }
      $composer_0.n25();
      if (isTraceInProgress()) {
        traceEventStart(650121315, $dirty, -1, 'androidx.compose.material3.Button (Button.kt:118)');
      }
      var tmp0_elvis_lhs = interactionSource_0._v;
      $composer_0.j25(-239156623);
      sourceInformation($composer_0, '120@5882L39');
      var tmp_4;
      if (tmp0_elvis_lhs == null) {
        sourceInformationMarkerStart($composer_0, -239155972, 'CC(remember):Button.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.d27();
        var tmp_5;
        if (false || it === Companion_getInstance().w1z_1) {
          // Inline function 'androidx.compose.material3.Button.<anonymous>' call
          var value = funMutableInteractionSource();
          this_0.o27(value);
          tmp_5 = value;
        } else {
          tmp_5 = it;
        }
        var tmp_6 = tmp_5;
        var tmp0_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        tmp_4 = tmp0_group;
      } else {
        tmp_4 = tmp0_elvis_lhs;
      }
      var tmp1_group = tmp_4;
      $composer_0.l25();
      var interactionSource_1 = tmp1_group;
      var containerColor = colors_0._v.saj(enabled_0._v);
      var contentColor = colors_0._v.taj(enabled_0._v);
      var tmp1_safe_receiver = elevation_0._v;
      $composer_0.j25(-239150048);
      sourceInformation($composer_0, '123@6067L43');
      var tmp2_group = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.pak(enabled_0._v, interactionSource_1, $composer_0, 14 & $dirty >> 6 | 896 & $dirty >> 9);
      $composer_0.l25();
      var tmp_7;
      if (tmp2_group == null) {
        tmp_7 = null;
      } else {
        var tmp_8 = tmp2_group.v();
        tmp_7 = tmp_8 == null ? null : tmp_8.z3h_1;
      }
      var tmp3_elvis_lhs = tmp_7;
      var tmp_9;
      var tmp_10 = tmp3_elvis_lhs;
      if ((tmp_10 == null ? null : new Dp(tmp_10)) == null) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_9 = _Dp___init__impl__ms3zkb(0);
      } else {
        tmp_9 = tmp3_elvis_lhs;
      }
      var shadowElevation = tmp_9;
      var tmp_11 = modifier_0._v;
      sourceInformationMarkerStart($composer_0, -239145685, 'CC(remember):Button.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.d27();
      var tmp_12;
      if (false || it_0 === Companion_getInstance().w1z_1) {
        // Inline function 'androidx.compose.material3.Button.<anonymous>' call
        var value_0 = Button$lambda;
        this_1.o27(value_0);
        tmp_12 = value_0;
      } else {
        tmp_12 = it_0;
      }
      var tmp_13 = tmp_12;
      var tmp3_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      var tmp_14 = semantics(tmp_11, VOID, tmp3_group);
      var tmp_15 = enabled_0._v;
      var tmp_16 = shape_0._v;
      var tmp_17 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_18 = border_0._v;
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.material3.Button.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(956488494, true, Button$lambda_0(contentColor, contentPadding_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.m1w(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_1.d27();
      var tmp_19;
      if (invalid || it_1 === Companion_getInstance().w1z_1) {
        // Inline function 'androidx.compose.material3.Button.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.o27(value_1);
        tmp_19 = value_1;
      } else {
        tmp_19 = it_1;
      }
      var tmp_20 = tmp_19;
      var tmp0 = (tmp_20 == null ? true : !(tmp_20 == null)) ? tmp_20 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      Surface_0(onClick, tmp_14, tmp_15, tmp_16, containerColor, contentColor, tmp_17, shadowElevation, tmp_18, interactionSource_1, tmp0, $composer_0, 14 & $dirty | 896 & $dirty | 7168 & $dirty | 234881024 & $dirty << 6, 6, 64);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.n1z();
    }
    var tmp4_safe_receiver = $composer_0.w28();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.i2d(Button$lambda_1(onClick, modifier_0, enabled_0, shape_0, colors_0, elevation_0, border_0, contentPadding_0, interactionSource_0, content, $changed, $default));
    }
  }
  function ButtonElevation$animateElevation$slambda$slambda($interactions, resultContinuation) {
    this.yak_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ButtonElevation$animateElevation$slambda$slambda).s99 = function (interaction, $completion) {
    var tmp = this.t99(interaction, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(ButtonElevation$animateElevation$slambda$slambda).ba = function (p1, $completion) {
    return this.s99((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ButtonElevation$animateElevation$slambda$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        if (tmp === 0) {
          this.i9_1 = 1;
          var tmp0_subject = this.zak_1;
          if (tmp0_subject instanceof Enter) {
            this.yak_1.s23(this.zak_1);
          } else {
            if (tmp0_subject instanceof Exit) {
              this.yak_1.s2k(this.zak_1.w9j_1);
            } else {
              if (tmp0_subject instanceof Focus) {
                this.yak_1.s23(this.zak_1);
              } else {
                if (tmp0_subject instanceof Unfocus) {
                  this.yak_1.s2k(this.zak_1.v9j_1);
                } else {
                  if (tmp0_subject instanceof Press) {
                    this.yak_1.s23(this.zak_1);
                  } else {
                    if (tmp0_subject instanceof Release) {
                      this.yak_1.s2k(this.zak_1.z9j_1);
                    } else {
                      if (tmp0_subject instanceof Cancel) {
                        this.yak_1.s2k(this.zak_1.a9k_1);
                      }
                    }
                  }
                }
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
  protoOf(ButtonElevation$animateElevation$slambda$slambda).t99 = function (interaction, completion) {
    var i = new ButtonElevation$animateElevation$slambda$slambda(this.yak_1, completion);
    i.zak_1 = interaction;
    return i;
  };
  function ButtonElevation$animateElevation$slambda$slambda_0($interactions, resultContinuation) {
    var i = new ButtonElevation$animateElevation$slambda$slambda($interactions, resultContinuation);
    var l = function (interaction, $completion) {
      return i.s99(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function animateElevation($this, enabled, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1312510462, 'C(animateElevation)939@43442L46,940@43531L1077,940@43497L1111,982@45105L51,984@45189L863,984@45166L886:Button.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1312510462, $changed, -1, 'androidx.compose.material3.ButtonElevation.animateElevation (Button.kt:938)');
    }
    sourceInformationMarkerStart($composer_0, -842871664, 'CC(remember):Button.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d27();
    var tmp;
    if (false || it === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.material3.ButtonElevation.animateElevation.<anonymous>' call
      var value = mutableStateListOf();
      $composer_0.o27(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var interactions = tmp1_group;
    sourceInformationMarkerStart($composer_0, -842867785, 'CC(remember):Button.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 112 ^ 48) > 32 && $composer_0.m1w(interactionSource) || ($changed & 48) === 32;
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_0.d27();
    var tmp_1;
    if (invalid || it_0 === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.material3.ButtonElevation.animateElevation.<anonymous>' call
      var value_0 = ButtonElevation$animateElevation$slambda_0(interactionSource, interactions, null);
      $composer_0.o27(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp2_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    LaunchedEffect(interactionSource, tmp2_group, $composer_0, 14 & $changed >> 3);
    var interaction = lastOrNull(interactions);
    var tmp_3;
    if (!enabled) {
      tmp_3 = $this.oak_1;
    } else {
      var tmp_4;
      if (interaction instanceof Press) {
        tmp_4 = $this.lak_1;
      } else {
        if (interaction instanceof Enter) {
          tmp_4 = $this.nak_1;
        } else {
          if (interaction instanceof Focus) {
            tmp_4 = $this.mak_1;
          } else {
            tmp_4 = $this.kak_1;
          }
        }
      }
      tmp_3 = tmp_4;
    }
    var target = tmp_3;
    sourceInformationMarkerStart($composer_0, -842818443, 'CC(remember):Button.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = $composer_0.d27();
    var tmp_5;
    if (false || it_1 === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.material3.ButtonElevation.animateElevation.<anonymous>' call
      var value_1 = new Animatable(new Dp(target), get_VectorConverter(Companion_getInstance_0()));
      $composer_0.o27(value_1);
      tmp_5 = value_1;
    } else {
      tmp_5 = it_1;
    }
    var tmp_6 = tmp_5;
    var tmp3_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    var animatable = tmp3_group;
    sourceInformationMarkerStart($composer_0, -842814943, 'CC(remember):Button.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!(!!(!!(!!($composer_0.m26(animatable) | $composer_0.o26(_Dp___get_value__impl__geb1vb(target))) | (($changed & 14 ^ 6) > 4 && $composer_0.n26(enabled) || ($changed & 6) === 4)) | (($changed & 896 ^ 384) > 256 && $composer_0.m1w($this) || ($changed & 384) === 256)) | $composer_0.m26(interaction));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = $composer_0.d27();
    var tmp_7;
    if (invalid_0 || it_2 === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.material3.ButtonElevation.animateElevation.<anonymous>' call
      var value_2 = ButtonElevation$animateElevation$slambda_2(animatable, target, enabled, $this, interaction, null);
      $composer_0.o27(value_2);
      tmp_7 = value_2;
    } else {
      tmp_7 = it_2;
    }
    var tmp_8 = tmp_7;
    var tmp4_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
    sourceInformationMarkerEnd($composer_0);
    LaunchedEffect(new Dp(target), tmp4_group, $composer_0, 0);
    var tmp0 = animatable.q7z();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.aal_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).n1h = function (value, $completion) {
    return this.aal_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).q3 = function () {
    return this.aal_1;
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
  function ButtonElevation$animateElevation$slambda($interactionSource, $interactions, resultContinuation) {
    this.jal_1 = $interactionSource;
    this.kal_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ButtonElevation$animateElevation$slambda).r1m = function ($this$LaunchedEffect, $completion) {
    var tmp = this.s1m($this$LaunchedEffect, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(ButtonElevation$animateElevation$slambda).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ButtonElevation$animateElevation$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 2;
            this.h9_1 = 1;
            var tmp_0 = this.jal_1.z9a();
            var tmp_1 = ButtonElevation$animateElevation$slambda$slambda_0(this.kal_1, null);
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
  protoOf(ButtonElevation$animateElevation$slambda).s1m = function ($this$LaunchedEffect, completion) {
    var i = new ButtonElevation$animateElevation$slambda(this.jal_1, this.kal_1, completion);
    i.lal_1 = $this$LaunchedEffect;
    return i;
  };
  function ButtonElevation$animateElevation$slambda_0($interactionSource, $interactions, resultContinuation) {
    var i = new ButtonElevation$animateElevation$slambda($interactionSource, $interactions, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.r1m($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ButtonElevation$animateElevation$slambda_1($animatable, $target, $enabled, this$0, $interaction, resultContinuation) {
    this.ual_1 = $animatable;
    this.val_1 = $target;
    this.wal_1 = $enabled;
    this.xal_1 = this$0;
    this.yal_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ButtonElevation$animateElevation$slambda_1).r1m = function ($this$LaunchedEffect, $completion) {
    var tmp = this.s1m($this$LaunchedEffect, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(ButtonElevation$animateElevation$slambda_1).ba = function (p1, $completion) {
    return this.r1m((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ButtonElevation$animateElevation$slambda_1).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 5;
            if (!this.ual_1.y7y().equals(new Dp(this.val_1))) {
              if (!this.wal_1) {
                this.h9_1 = 2;
                suspendResult = this.ual_1.p7z(new Dp(this.val_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_0 = this;
                var tmp0_subject = this.ual_1.y7y().z3h_1;
                tmp_0.aam_1 = equals(tmp0_subject, this.xal_1.lak_1) ? new Press(Companion_getInstance_1().d3g_1) : equals(tmp0_subject, this.xal_1.nak_1) ? new Enter() : equals(tmp0_subject, this.xal_1.mak_1) ? new Focus() : null;
                this.h9_1 = 1;
                suspendResult = animateElevation_0(this.ual_1, this.val_1, this.aam_1, this.yal_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.h9_1 = 4;
              continue $sm;
            }

          case 1:
            this.h9_1 = 3;
            continue $sm;
          case 2:
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
  protoOf(ButtonElevation$animateElevation$slambda_1).s1m = function ($this$LaunchedEffect, completion) {
    var i = new ButtonElevation$animateElevation$slambda_1(this.ual_1, this.val_1, this.wal_1, this.xal_1, this.yal_1, completion);
    i.zal_1 = $this$LaunchedEffect;
    return i;
  };
  function ButtonElevation$animateElevation$slambda_2($animatable, $target, $enabled, this$0, $interaction, resultContinuation) {
    var i = new ButtonElevation$animateElevation$slambda_1($animatable, $target, $enabled, this$0, $interaction, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.r1m($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ButtonElevation(defaultElevation, pressedElevation, focusedElevation, hoveredElevation, disabledElevation) {
    this.kak_1 = defaultElevation;
    this.lak_1 = pressedElevation;
    this.mak_1 = focusedElevation;
    this.nak_1 = hoveredElevation;
    this.oak_1 = disabledElevation;
  }
  protoOf(ButtonElevation).pak = function (enabled, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -2045116089, 'C(shadowElevation)931@43193L74:Button.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-2045116089, $changed, -1, 'androidx.compose.material3.ButtonElevation.shadowElevation (Button.kt:930)');
    }
    var tmp0 = animateElevation(this, enabled, interactionSource, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(ButtonElevation).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof ButtonElevation);
    }
    if (tmp)
      return false;
    if (!equals(this.kak_1, other.kak_1))
      return false;
    if (!equals(this.lak_1, other.lak_1))
      return false;
    if (!equals(this.mak_1, other.mak_1))
      return false;
    if (!equals(this.nak_1, other.nak_1))
      return false;
    if (!equals(this.oak_1, other.oak_1))
      return false;
    return true;
  };
  protoOf(ButtonElevation).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.kak_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.lak_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.mak_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.nak_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.oak_1) | 0;
    return result;
  };
  function ButtonDefaults() {
    ButtonDefaults_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.uaj_1 = _Dp___init__impl__ms3zkb(24);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.vaj_1 = _Dp___init__impl__ms3zkb(8);
    this.waj_1 = PaddingValues(this.uaj_1, this.vaj_1, this.uaj_1, this.vaj_1);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.xaj_1 = _Dp___init__impl__ms3zkb(16);
    this.yaj_1 = PaddingValues(this.xaj_1, this.vaj_1, this.uaj_1, this.vaj_1);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.zaj_1 = _Dp___init__impl__ms3zkb(12);
    this.aak_1 = PaddingValues(this.zaj_1, this.waj_1.m8k(), this.zaj_1, this.waj_1.o8k());
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.bak_1 = _Dp___init__impl__ms3zkb(16);
    this.cak_1 = PaddingValues(this.zaj_1, this.waj_1.m8k(), this.bak_1, this.waj_1.o8k());
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.dak_1 = _Dp___init__impl__ms3zkb(58);
    var tmp_5 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_5.eak_1 = _Dp___init__impl__ms3zkb(40);
    this.fak_1 = FilledButtonTokens_getInstance().xam_1;
    var tmp_6 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_6.gak_1 = _Dp___init__impl__ms3zkb(8);
  }
  protoOf(ButtonDefaults).hak = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1234923021, 'C542@25460L5:Button.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1234923021, $changed, -1, 'androidx.compose.material3.ButtonDefaults.<get-shape> (Button.kt:542)');
    }
    var tmp0 = get_value(FilledButtonTokens_getInstance().eam_1, $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(ButtonDefaults).iak = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1449248637, 'C(buttonColors)564@26242L11:Button.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1449248637, $changed, -1, 'androidx.compose.material3.ButtonDefaults.buttonColors (Button.kt:564)');
    }
    var tmp0 = this.aan(MaterialTheme_instance.zam($composer_0, 6));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(ButtonDefaults).aan = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.lao_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0 = fromToken(_this__u8e3s4, FilledButtonTokens_getInstance().bam_1);
      var tmp_1 = fromToken(_this__u8e3s4, FilledButtonTokens_getInstance().oam_1);
      var tmp_2 = fromToken(_this__u8e3s4, FilledButtonTokens_getInstance().fam_1);
      FilledButtonTokens_getInstance();
      var tmp_3 = Color__copy$default_impl_ectz3s(tmp_2, 0.12);
      var tmp_4 = fromToken(_this__u8e3s4, FilledButtonTokens_getInstance().iam_1);
      FilledButtonTokens_getInstance();
      // Inline function 'kotlin.also' call
      var this_0 = new ButtonColors(tmp_0, tmp_1, tmp_3, Color__copy$default_impl_ectz3s(tmp_4, 0.38));
      // Inline function 'androidx.compose.material3.ButtonDefaults.<get-defaultButtonColors>.<anonymous>' call
      _this__u8e3s4.lao_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ButtonDefaults).jak = function (defaultElevation, pressedElevation, focusedElevation, hoveredElevation, disabledElevation, $composer, $changed, $default) {
    var defaultElevation_0 = defaultElevation;
    var pressedElevation_0 = pressedElevation;
    var focusedElevation_0 = focusedElevation;
    var hoveredElevation_0 = hoveredElevation;
    var disabledElevation_0 = disabledElevation;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1827791191, 'C(buttonElevation)P(0:c#ui.unit.Dp,4:c#ui.unit.Dp,2:c#ui.unit.Dp,3:c#ui.unit.Dp,1:c#ui.unit.Dp):Button.kt#uh7d8r');
    if (!(($default & 1) === 0))
      defaultElevation_0 = FilledButtonTokens_getInstance().cam_1;
    if (!(($default & 2) === 0))
      pressedElevation_0 = FilledButtonTokens_getInstance().qam_1;
    if (!(($default & 4) === 0))
      focusedElevation_0 = FilledButtonTokens_getInstance().kam_1;
    if (!(($default & 8) === 0))
      hoveredElevation_0 = FilledButtonTokens_getInstance().mam_1;
    if (!(($default & 16) === 0))
      disabledElevation_0 = FilledButtonTokens_getInstance().gam_1;
    if (isTraceInProgress()) {
      traceEventStart(1827791191, $changed, -1, 'androidx.compose.material3.ButtonDefaults.buttonElevation (Button.kt:802)');
    }
    var tmp0 = new ButtonElevation(defaultElevation_0, pressedElevation_0, focusedElevation_0, hoveredElevation_0, disabledElevation_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var ButtonDefaults_instance;
  function ButtonDefaults_getInstance() {
    if (ButtonDefaults_instance == null)
      new ButtonDefaults();
    return ButtonDefaults_instance;
  }
  function Button$lambda($this$semantics) {
    set_role($this$semantics, Companion_getInstance_2().u72_1);
    return Unit_instance;
  }
  function Button$lambda$lambda($contentPadding, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C139@6632L406:Button.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.d25()) {
        if (isTraceInProgress()) {
          traceEventStart(1327513942, $changed, -1, 'androidx.compose.material3.Button.<anonymous>.<anonymous> (Button.kt:139)');
        }
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var modifier = padding(defaultMinSize(Companion_instance, ButtonDefaults_getInstance().dak_1, ButtonDefaults_getInstance().eak_1), $contentPadding._v);
        var horizontalArrangement = Arrangement_getInstance().o8i_1;
        var verticalAlignment = Companion_getInstance_3().t59_1;
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 693286680, 'CC(Row)P(2,1,3)99@5018L58,100@5081L130:Row.kt#2w3rfo');
        if (!((0 & 1) === 0))
          modifier = Companion_instance;
        if (!((0 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().k8i_1;
        if (!((0 & 4) === 0))
          verticalAlignment = Companion_getInstance_3().s59_1;
        var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
        var localMap = $composer_2.b27();
        var materialized = materialize($composer_2, modifier_0);
        var tmp0 = Companion_getInstance_4().r6f_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
        var tmp_0 = $composer_3.e25();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_3.x25();
        if ($composer_3.s25()) {
          $composer_3.y25(tmp0);
        } else {
          $composer_3.b26();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_4().w6f_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_4().v6f_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_4().z6f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.s25() || !equals($this$with.d27(), compositeKeyHash)) {
          $this$with.o27(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).g26(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_4().t6f_1);
        // Inline function 'androidx.compose.foundation.layout.Row.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -407840262, 'C101@5126L9:Row.kt#2w3rfo');
        $content(RowScopeInstance_instance, $composer_4, 6 | 112 & 432 >> 6);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.d26();
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        sourceInformationMarkerEnd($composer_1);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      } else {
        $composer_0.n1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.b25(p0, p1);
    };
  }
  function Button$lambda_0($contentColor, $contentPadding, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C137@6586L10,138@6618L430,135@6477L571:Button.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.d25()) {
        if (isTraceInProgress()) {
          traceEventStart(956488494, $changed, -1, 'androidx.compose.material3.Button.<anonymous> (Button.kt:135)');
        }
        var tmp_0 = MaterialTheme_instance.paq($composer_0, 6).maq_1;
        // Inline function 'kotlin.run' call
        // Inline function 'androidx.compose.material3.Button.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(1327513942, true, Button$lambda$lambda($contentPadding, $content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.m1w(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.d27();
        var tmp_1;
        if (invalid || it === Companion_getInstance().w1z_1) {
          // Inline function 'androidx.compose.material3.Button.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.o27(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        ProvideContentColorTextStyle($contentColor, tmp_0, tmp0, $composer_0, 384);
        var tmp_3;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_3 = Unit_instance;
        }
        tmp = tmp_3;
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
  function Button$lambda_1($onClick, $modifier, $enabled, $shape, $colors, $elevation, $border, $contentPadding, $interactionSource, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button($onClick, $modifier._v, $enabled._v, $shape._v, $colors._v, $elevation._v, $border._v, $contentPadding._v, $interactionSource._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function get_LocalColorScheme() {
    _init_properties_ColorScheme_kt__xhtsty();
    return LocalColorScheme;
  }
  var LocalColorScheme;
  function get_LocalTonalElevationEnabled() {
    _init_properties_ColorScheme_kt__xhtsty();
    return LocalTonalElevationEnabled;
  }
  var LocalTonalElevationEnabled;
  function ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceDim, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest) {
    this.ban_1 = primary;
    this.can_1 = onPrimary;
    this.dan_1 = primaryContainer;
    this.ean_1 = onPrimaryContainer;
    this.fan_1 = inversePrimary;
    this.gan_1 = secondary;
    this.han_1 = onSecondary;
    this.ian_1 = secondaryContainer;
    this.jan_1 = onSecondaryContainer;
    this.kan_1 = tertiary;
    this.lan_1 = onTertiary;
    this.man_1 = tertiaryContainer;
    this.nan_1 = onTertiaryContainer;
    this.oan_1 = background;
    this.pan_1 = onBackground;
    this.qan_1 = surface;
    this.ran_1 = onSurface;
    this.san_1 = surfaceVariant;
    this.tan_1 = onSurfaceVariant;
    this.uan_1 = surfaceTint;
    this.van_1 = inverseSurface;
    this.wan_1 = inverseOnSurface;
    this.xan_1 = error;
    this.yan_1 = onError;
    this.zan_1 = errorContainer;
    this.aao_1 = onErrorContainer;
    this.bao_1 = outline;
    this.cao_1 = outlineVariant;
    this.dao_1 = scrim;
    this.eao_1 = surfaceBright;
    this.fao_1 = surfaceDim;
    this.gao_1 = surfaceContainer;
    this.hao_1 = surfaceContainerHigh;
    this.iao_1 = surfaceContainerHighest;
    this.jao_1 = surfaceContainerLow;
    this.kao_1 = surfaceContainerLowest;
    this.lao_1 = null;
    this.mao_1 = null;
    this.nao_1 = null;
    this.oao_1 = null;
    this.pao_1 = null;
    this.qao_1 = null;
    this.rao_1 = null;
    this.sao_1 = null;
    this.tao_1 = null;
    this.uao_1 = null;
    this.vao_1 = null;
    this.wao_1 = null;
    this.xao_1 = null;
    this.yao_1 = null;
    this.zao_1 = null;
    this.aap_1 = null;
    this.bap_1 = null;
    this.cap_1 = null;
    this.dap_1 = null;
    this.eap_1 = null;
    this.fap_1 = null;
    this.gap_1 = null;
    this.hap_1 = null;
    this.iap_1 = null;
    this.jap_1 = null;
    this.kap_1 = null;
    this.lap_1 = null;
    this.map_1 = null;
    this.nap_1 = null;
    this.oap_1 = null;
    this.pap_1 = null;
    this.qap_1 = null;
    this.rap_1 = null;
    this.sap_1 = null;
    this.tap_1 = null;
    this.uap_1 = null;
    this.vap_1 = null;
    this.wap_1 = null;
    this.xap_1 = null;
    this.yap_1 = null;
    this.zap_1 = null;
  }
  protoOf(ColorScheme).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'androidx.compose.material3.ColorScheme.toString.<anonymous>' call
    this_0.o8('ColorScheme(');
    this_0.o8('primary=' + Color__toString_impl_hpzmaq(this.ban_1) + ', ');
    this_0.o8('onPrimary=' + Color__toString_impl_hpzmaq(this.can_1) + ', ');
    this_0.o8('primaryContainer=' + Color__toString_impl_hpzmaq(this.dan_1) + ', ');
    this_0.o8('onPrimaryContainer=' + Color__toString_impl_hpzmaq(this.ean_1) + ', ');
    this_0.o8('inversePrimary=' + Color__toString_impl_hpzmaq(this.fan_1) + ', ');
    this_0.o8('secondary=' + Color__toString_impl_hpzmaq(this.gan_1) + ', ');
    this_0.o8('onSecondary=' + Color__toString_impl_hpzmaq(this.han_1) + ', ');
    this_0.o8('secondaryContainer=' + Color__toString_impl_hpzmaq(this.ian_1) + ', ');
    this_0.o8('onSecondaryContainer=' + Color__toString_impl_hpzmaq(this.jan_1) + ', ');
    this_0.o8('tertiary=' + Color__toString_impl_hpzmaq(this.kan_1) + ', ');
    this_0.o8('onTertiary=' + Color__toString_impl_hpzmaq(this.lan_1) + ', ');
    this_0.o8('tertiaryContainer=' + Color__toString_impl_hpzmaq(this.man_1) + ', ');
    this_0.o8('onTertiaryContainer=' + Color__toString_impl_hpzmaq(this.nan_1) + ', ');
    this_0.o8('background=' + Color__toString_impl_hpzmaq(this.oan_1) + ', ');
    this_0.o8('onBackground=' + Color__toString_impl_hpzmaq(this.pan_1) + ', ');
    this_0.o8('surface=' + Color__toString_impl_hpzmaq(this.qan_1) + ', ');
    this_0.o8('onSurface=' + Color__toString_impl_hpzmaq(this.ran_1) + ', ');
    this_0.o8('surfaceVariant=' + Color__toString_impl_hpzmaq(this.san_1) + ', ');
    this_0.o8('onSurfaceVariant=' + Color__toString_impl_hpzmaq(this.tan_1) + ', ');
    this_0.o8('surfaceTint=' + Color__toString_impl_hpzmaq(this.uan_1) + ', ');
    this_0.o8('inverseSurface=' + Color__toString_impl_hpzmaq(this.van_1) + ', ');
    this_0.o8('inverseOnSurface=' + Color__toString_impl_hpzmaq(this.wan_1) + ', ');
    this_0.o8('error=' + Color__toString_impl_hpzmaq(this.xan_1) + ', ');
    this_0.o8('onError=' + Color__toString_impl_hpzmaq(this.yan_1) + ', ');
    this_0.o8('errorContainer=' + Color__toString_impl_hpzmaq(this.zan_1) + ', ');
    this_0.o8('onErrorContainer=' + Color__toString_impl_hpzmaq(this.aao_1) + ', ');
    this_0.o8('outline=' + Color__toString_impl_hpzmaq(this.bao_1) + ', ');
    this_0.o8('outlineVariant=' + Color__toString_impl_hpzmaq(this.cao_1) + ', ');
    this_0.o8('scrim=' + Color__toString_impl_hpzmaq(this.dao_1) + ', ');
    this_0.o8('surfaceBright=' + Color__toString_impl_hpzmaq(this.eao_1) + ', ');
    this_0.o8('surfaceDim=' + Color__toString_impl_hpzmaq(this.fao_1) + ', ');
    this_0.o8('surfaceContainer=' + Color__toString_impl_hpzmaq(this.gao_1) + ', ');
    this_0.o8('surfaceContainerHigh=' + Color__toString_impl_hpzmaq(this.hao_1) + ', ');
    this_0.o8('surfaceContainerHighest=' + Color__toString_impl_hpzmaq(this.iao_1) + ', ');
    this_0.o8('surfaceContainerLow=' + Color__toString_impl_hpzmaq(this.jao_1) + ', ');
    this_0.o8('surfaceContainerLowest=' + Color__toString_impl_hpzmaq(this.kao_1) + ', ');
    this_0.o8(')');
    return this_0.toString();
  };
  function lightColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest, surfaceDim) {
    primary = primary === VOID ? ColorLightTokens_getInstance().par_1 : primary;
    onPrimary = onPrimary === VOID ? ColorLightTokens_getInstance().zaq_1 : onPrimary;
    primaryContainer = primaryContainer === VOID ? ColorLightTokens_getInstance().qar_1 : primaryContainer;
    onPrimaryContainer = onPrimaryContainer === VOID ? ColorLightTokens_getInstance().aar_1 : onPrimaryContainer;
    inversePrimary = inversePrimary === VOID ? ColorLightTokens_getInstance().uaq_1 : inversePrimary;
    secondary = secondary === VOID ? ColorLightTokens_getInstance().uar_1 : secondary;
    onSecondary = onSecondary === VOID ? ColorLightTokens_getInstance().dar_1 : onSecondary;
    secondaryContainer = secondaryContainer === VOID ? ColorLightTokens_getInstance().var_1 : secondaryContainer;
    onSecondaryContainer = onSecondaryContainer === VOID ? ColorLightTokens_getInstance().ear_1 : onSecondaryContainer;
    tertiary = tertiary === VOID ? ColorLightTokens_getInstance().ias_1 : tertiary;
    onTertiary = onTertiary === VOID ? ColorLightTokens_getInstance().jar_1 : onTertiary;
    tertiaryContainer = tertiaryContainer === VOID ? ColorLightTokens_getInstance().jas_1 : tertiaryContainer;
    onTertiaryContainer = onTertiaryContainer === VOID ? ColorLightTokens_getInstance().kar_1 : onTertiaryContainer;
    background = background === VOID ? ColorLightTokens_getInstance().qaq_1 : background;
    onBackground = onBackground === VOID ? ColorLightTokens_getInstance().waq_1 : onBackground;
    surface = surface === VOID ? ColorLightTokens_getInstance().yar_1 : surface;
    onSurface = onSurface === VOID ? ColorLightTokens_getInstance().har_1 : onSurface;
    surfaceVariant = surfaceVariant === VOID ? ColorLightTokens_getInstance().has_1 : surfaceVariant;
    onSurfaceVariant = onSurfaceVariant === VOID ? ColorLightTokens_getInstance().iar_1 : onSurfaceVariant;
    surfaceTint = surfaceTint === VOID ? primary : surfaceTint;
    inverseSurface = inverseSurface === VOID ? ColorLightTokens_getInstance().vaq_1 : inverseSurface;
    inverseOnSurface = inverseOnSurface === VOID ? ColorLightTokens_getInstance().taq_1 : inverseOnSurface;
    error = error === VOID ? ColorLightTokens_getInstance().raq_1 : error;
    onError = onError === VOID ? ColorLightTokens_getInstance().xaq_1 : onError;
    errorContainer = errorContainer === VOID ? ColorLightTokens_getInstance().saq_1 : errorContainer;
    onErrorContainer = onErrorContainer === VOID ? ColorLightTokens_getInstance().yaq_1 : onErrorContainer;
    outline = outline === VOID ? ColorLightTokens_getInstance().nar_1 : outline;
    outlineVariant = outlineVariant === VOID ? ColorLightTokens_getInstance().oar_1 : outlineVariant;
    scrim = scrim === VOID ? ColorLightTokens_getInstance().tar_1 : scrim;
    surfaceBright = surfaceBright === VOID ? ColorLightTokens_getInstance().zar_1 : surfaceBright;
    surfaceContainer = surfaceContainer === VOID ? ColorLightTokens_getInstance().aas_1 : surfaceContainer;
    surfaceContainerHigh = surfaceContainerHigh === VOID ? ColorLightTokens_getInstance().bas_1 : surfaceContainerHigh;
    surfaceContainerHighest = surfaceContainerHighest === VOID ? ColorLightTokens_getInstance().cas_1 : surfaceContainerHighest;
    surfaceContainerLow = surfaceContainerLow === VOID ? ColorLightTokens_getInstance().das_1 : surfaceContainerLow;
    surfaceContainerLowest = surfaceContainerLowest === VOID ? ColorLightTokens_getInstance().eas_1 : surfaceContainerLowest;
    surfaceDim = surfaceDim === VOID ? ColorLightTokens_getInstance().fas_1 : surfaceDim;
    _init_properties_ColorScheme_kt__xhtsty();
    return new ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceDim, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest);
  }
  function fromToken(_this__u8e3s4, value) {
    _init_properties_ColorScheme_kt__xhtsty();
    switch (value.s2_1) {
      case 0:
        return _this__u8e3s4.oan_1;
      case 1:
        return _this__u8e3s4.xan_1;
      case 2:
        return _this__u8e3s4.zan_1;
      case 3:
        return _this__u8e3s4.wan_1;
      case 4:
        return _this__u8e3s4.fan_1;
      case 5:
        return _this__u8e3s4.van_1;
      case 6:
        return _this__u8e3s4.pan_1;
      case 7:
        return _this__u8e3s4.yan_1;
      case 8:
        return _this__u8e3s4.aao_1;
      case 9:
        return _this__u8e3s4.can_1;
      case 10:
        return _this__u8e3s4.ean_1;
      case 13:
        return _this__u8e3s4.han_1;
      case 14:
        return _this__u8e3s4.jan_1;
      case 17:
        return _this__u8e3s4.ran_1;
      case 18:
        return _this__u8e3s4.tan_1;
      case 42:
        return _this__u8e3s4.uan_1;
      case 19:
        return _this__u8e3s4.lan_1;
      case 20:
        return _this__u8e3s4.nan_1;
      case 23:
        return _this__u8e3s4.bao_1;
      case 24:
        return _this__u8e3s4.cao_1;
      case 25:
        return _this__u8e3s4.ban_1;
      case 26:
        return _this__u8e3s4.dan_1;
      case 29:
        return _this__u8e3s4.dao_1;
      case 30:
        return _this__u8e3s4.gan_1;
      case 31:
        return _this__u8e3s4.ian_1;
      case 34:
        return _this__u8e3s4.qan_1;
      case 43:
        return _this__u8e3s4.san_1;
      case 35:
        return _this__u8e3s4.eao_1;
      case 36:
        return _this__u8e3s4.gao_1;
      case 37:
        return _this__u8e3s4.hao_1;
      case 38:
        return _this__u8e3s4.iao_1;
      case 39:
        return _this__u8e3s4.jao_1;
      case 40:
        return _this__u8e3s4.kao_1;
      case 41:
        return _this__u8e3s4.fao_1;
      case 44:
        return _this__u8e3s4.kan_1;
      case 45:
        return _this__u8e3s4.man_1;
      default:
        return Companion_getInstance_5().j45_1;
    }
  }
  function darkColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest, surfaceDim) {
    primary = primary === VOID ? ColorDarkTokens_getInstance().lat_1 : primary;
    onPrimary = onPrimary === VOID ? ColorDarkTokens_getInstance().vas_1 : onPrimary;
    primaryContainer = primaryContainer === VOID ? ColorDarkTokens_getInstance().mat_1 : primaryContainer;
    onPrimaryContainer = onPrimaryContainer === VOID ? ColorDarkTokens_getInstance().was_1 : onPrimaryContainer;
    inversePrimary = inversePrimary === VOID ? ColorDarkTokens_getInstance().qas_1 : inversePrimary;
    secondary = secondary === VOID ? ColorDarkTokens_getInstance().qat_1 : secondary;
    onSecondary = onSecondary === VOID ? ColorDarkTokens_getInstance().zas_1 : onSecondary;
    secondaryContainer = secondaryContainer === VOID ? ColorDarkTokens_getInstance().rat_1 : secondaryContainer;
    onSecondaryContainer = onSecondaryContainer === VOID ? ColorDarkTokens_getInstance().aat_1 : onSecondaryContainer;
    tertiary = tertiary === VOID ? ColorDarkTokens_getInstance().eau_1 : tertiary;
    onTertiary = onTertiary === VOID ? ColorDarkTokens_getInstance().fat_1 : onTertiary;
    tertiaryContainer = tertiaryContainer === VOID ? ColorDarkTokens_getInstance().fau_1 : tertiaryContainer;
    onTertiaryContainer = onTertiaryContainer === VOID ? ColorDarkTokens_getInstance().gat_1 : onTertiaryContainer;
    background = background === VOID ? ColorDarkTokens_getInstance().mas_1 : background;
    onBackground = onBackground === VOID ? ColorDarkTokens_getInstance().sas_1 : onBackground;
    surface = surface === VOID ? ColorDarkTokens_getInstance().uat_1 : surface;
    onSurface = onSurface === VOID ? ColorDarkTokens_getInstance().dat_1 : onSurface;
    surfaceVariant = surfaceVariant === VOID ? ColorDarkTokens_getInstance().dau_1 : surfaceVariant;
    onSurfaceVariant = onSurfaceVariant === VOID ? ColorDarkTokens_getInstance().eat_1 : onSurfaceVariant;
    surfaceTint = surfaceTint === VOID ? primary : surfaceTint;
    inverseSurface = inverseSurface === VOID ? ColorDarkTokens_getInstance().ras_1 : inverseSurface;
    inverseOnSurface = inverseOnSurface === VOID ? ColorDarkTokens_getInstance().pas_1 : inverseOnSurface;
    error = error === VOID ? ColorDarkTokens_getInstance().nas_1 : error;
    onError = onError === VOID ? ColorDarkTokens_getInstance().tas_1 : onError;
    errorContainer = errorContainer === VOID ? ColorDarkTokens_getInstance().oas_1 : errorContainer;
    onErrorContainer = onErrorContainer === VOID ? ColorDarkTokens_getInstance().uas_1 : onErrorContainer;
    outline = outline === VOID ? ColorDarkTokens_getInstance().jat_1 : outline;
    outlineVariant = outlineVariant === VOID ? ColorDarkTokens_getInstance().kat_1 : outlineVariant;
    scrim = scrim === VOID ? ColorDarkTokens_getInstance().pat_1 : scrim;
    surfaceBright = surfaceBright === VOID ? ColorDarkTokens_getInstance().vat_1 : surfaceBright;
    surfaceContainer = surfaceContainer === VOID ? ColorDarkTokens_getInstance().wat_1 : surfaceContainer;
    surfaceContainerHigh = surfaceContainerHigh === VOID ? ColorDarkTokens_getInstance().xat_1 : surfaceContainerHigh;
    surfaceContainerHighest = surfaceContainerHighest === VOID ? ColorDarkTokens_getInstance().yat_1 : surfaceContainerHighest;
    surfaceContainerLow = surfaceContainerLow === VOID ? ColorDarkTokens_getInstance().zat_1 : surfaceContainerLow;
    surfaceContainerLowest = surfaceContainerLowest === VOID ? ColorDarkTokens_getInstance().aau_1 : surfaceContainerLowest;
    surfaceDim = surfaceDim === VOID ? ColorDarkTokens_getInstance().bau_1 : surfaceDim;
    _init_properties_ColorScheme_kt__xhtsty();
    return new ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceDim, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest);
  }
  function contentColorFor(backgroundColor, $composer, $changed) {
    _init_properties_ColorScheme_kt__xhtsty();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 509589638, 'C(contentColorFor)P(0:c#ui.graphics.Color):ColorScheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(509589638, $changed, -1, 'androidx.compose.material3.contentColorFor (ColorScheme.kt:882)');
    }
    $composer_0.j25(-1680919312);
    sourceInformation($composer_0, '*882@40066L11,883@40150L7');
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var this_0 = contentColorFor_0(MaterialTheme_instance.zam($composer_0, 6), backgroundColor);
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = this_0;
    } else {
      // Inline function 'androidx.compose.material3.contentColorFor.<anonymous>' call
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_1 = get_LocalContentColor();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.u27(this_1);
      sourceInformationMarkerEnd($composer_1);
      tmp = tmp0.s44_1;
    }
    var tmp1_group = tmp;
    $composer_0.l25();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function applyTonalElevation(_this__u8e3s4, backgroundColor, elevation, $composer, $changed) {
    _init_properties_ColorScheme_kt__xhtsty();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1610977682, 'C(applyTonalElevation)P(0:c#ui.graphics.Color,1:c#ui.unit.Dp)900@41006L7:ColorScheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1610977682, $changed, -1, 'androidx.compose.material3.applyTonalElevation (ColorScheme.kt:899)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalTonalElevationEnabled();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.u27(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tonalElevationEnabled = tmp0;
    var tmp;
    if (equals(backgroundColor, _this__u8e3s4.qan_1) && tonalElevationEnabled) {
      tmp = surfaceColorAtElevation(_this__u8e3s4, elevation);
    } else {
      tmp = backgroundColor;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  }
  function contentColorFor_0(_this__u8e3s4, backgroundColor) {
    _init_properties_ColorScheme_kt__xhtsty();
    return equals(backgroundColor, _this__u8e3s4.ban_1) ? _this__u8e3s4.can_1 : equals(backgroundColor, _this__u8e3s4.gan_1) ? _this__u8e3s4.han_1 : equals(backgroundColor, _this__u8e3s4.kan_1) ? _this__u8e3s4.lan_1 : equals(backgroundColor, _this__u8e3s4.oan_1) ? _this__u8e3s4.pan_1 : equals(backgroundColor, _this__u8e3s4.xan_1) ? _this__u8e3s4.yan_1 : equals(backgroundColor, _this__u8e3s4.dan_1) ? _this__u8e3s4.ean_1 : equals(backgroundColor, _this__u8e3s4.ian_1) ? _this__u8e3s4.jan_1 : equals(backgroundColor, _this__u8e3s4.man_1) ? _this__u8e3s4.nan_1 : equals(backgroundColor, _this__u8e3s4.zan_1) ? _this__u8e3s4.aao_1 : equals(backgroundColor, _this__u8e3s4.van_1) ? _this__u8e3s4.wan_1 : equals(backgroundColor, _this__u8e3s4.qan_1) ? _this__u8e3s4.ran_1 : equals(backgroundColor, _this__u8e3s4.san_1) ? _this__u8e3s4.tan_1 : equals(backgroundColor, _this__u8e3s4.eao_1) ? _this__u8e3s4.ran_1 : equals(backgroundColor, _this__u8e3s4.gao_1) ? _this__u8e3s4.ran_1 : equals(backgroundColor, _this__u8e3s4.hao_1) ? _this__u8e3s4.ran_1 : equals(backgroundColor, _this__u8e3s4.iao_1) ? _this__u8e3s4.ran_1 : equals(backgroundColor, _this__u8e3s4.jao_1) ? _this__u8e3s4.ran_1 : equals(backgroundColor, _this__u8e3s4.kao_1) ? _this__u8e3s4.ran_1 : Companion_getInstance_5().j45_1;
  }
  function surfaceColorAtElevation(_this__u8e3s4, elevation) {
    _init_properties_ColorScheme_kt__xhtsty();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (equals(elevation, tmp$ret$0))
      return _this__u8e3s4.qan_1;
    // Inline function 'kotlin.math.ln' call
    var x = _Dp___get_value__impl__geb1vb(elevation) + 1;
    var alpha = (4.5 * Math.log(x) + 2.0) / 100.0;
    return compositeOver(Color__copy$default_impl_ectz3s(_this__u8e3s4.uan_1, alpha), _this__u8e3s4.qan_1);
  }
  function LocalColorScheme$lambda() {
    _init_properties_ColorScheme_kt__xhtsty();
    return lightColorScheme();
  }
  function LocalTonalElevationEnabled$lambda() {
    _init_properties_ColorScheme_kt__xhtsty();
    return true;
  }
  var properties_initialized_ColorScheme_kt_ox8mco;
  function _init_properties_ColorScheme_kt__xhtsty() {
    if (!properties_initialized_ColorScheme_kt_ox8mco) {
      properties_initialized_ColorScheme_kt_ox8mco = true;
      LocalColorScheme = staticCompositionLocalOf(LocalColorScheme$lambda);
      LocalTonalElevationEnabled = staticCompositionLocalOf(LocalTonalElevationEnabled$lambda);
    }
  }
  function get_LocalContentColor() {
    _init_properties_ContentColor_kt__5mda8a();
    return LocalContentColor;
  }
  var LocalContentColor;
  function LocalContentColor$lambda() {
    _init_properties_ContentColor_kt__5mda8a();
    return new Color(Companion_getInstance_5().x44_1);
  }
  var properties_initialized_ContentColor_kt_sc8rw;
  function _init_properties_ContentColor_kt__5mda8a() {
    if (!properties_initialized_ContentColor_kt_sc8rw) {
      properties_initialized_ContentColor_kt_sc8rw = true;
      LocalContentColor = compositionLocalOf(VOID, LocalContentColor$lambda);
    }
  }
  var LocalMinimumInteractiveComponentEnforcement;
  function get_LocalMinimumInteractiveComponentSize() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return LocalMinimumInteractiveComponentSize;
  }
  var LocalMinimumInteractiveComponentSize;
  function minimumInteractiveComponentSize(_this__u8e3s4) {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return _this__u8e3s4.f5a(MinimumInteractiveModifier_getInstance());
  }
  function MinimumInteractiveModifier() {
    MinimumInteractiveModifier_instance = this;
    ModifierNodeElement.call(this);
  }
  protoOf(MinimumInteractiveModifier).f2e = function () {
    return new MinimumInteractiveModifierNode();
  };
  protoOf(MinimumInteractiveModifier).jau = function (node) {
  };
  protoOf(MinimumInteractiveModifier).t5f = function (node) {
    return this.jau(node instanceof MinimumInteractiveModifierNode ? node : THROW_CCE());
  };
  protoOf(MinimumInteractiveModifier).hashCode = function () {
    return identityHashCode(this);
  };
  protoOf(MinimumInteractiveModifier).equals = function (other) {
    return other === this;
  };
  var MinimumInteractiveModifier_instance;
  function MinimumInteractiveModifier_getInstance() {
    if (MinimumInteractiveModifier_instance == null)
      new MinimumInteractiveModifier();
    return MinimumInteractiveModifier_instance;
  }
  function MinimumInteractiveModifierNode$measure$lambda($width, $placeable, $height) {
    return function ($this$layout) {
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = ($width - $placeable.w5o_1 | 0) / 2.0;
      var centerX = roundToInt(this_0);
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = ($height - $placeable.x5o_1 | 0) / 2.0;
      var centerY = roundToInt(this_1);
      $this$layout.u67($placeable, centerX, centerY);
      return Unit_instance;
    };
  }
  function MinimumInteractiveModifierNode() {
    Node.call(this);
  }
  protoOf(MinimumInteractiveModifierNode).u5o = function (_this__u8e3s4, measurable, constraints) {
    var tmp1 = currentValueOf(this, get_LocalMinimumInteractiveComponentSize()).z3h_1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    // Inline function 'androidx.compose.ui.unit.coerceAtLeast' call
    var minimumValue = _Dp___init__impl__ms3zkb(0);
    var size = _Dp___init__impl__ms3zkb(coerceAtLeast(_Dp___get_value__impl__geb1vb(tmp1), _Dp___get_value__impl__geb1vb(minimumValue)));
    var placeable = measurable.v5o(constraints);
    var tmp;
    if (this.x5a_1) {
      var tmp_0;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!isNaN_0(_Dp___get_value__impl__geb1vb(size))) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$3 = _Dp___init__impl__ms3zkb(0);
        tmp_0 = Dp__compareTo_impl_tlg3dl(size, tmp$ret$3) > 0;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    var enforcement = tmp;
    var tmp_1;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(size))) {
      tmp_1 = _this__u8e3s4.m3h(size);
    } else {
      tmp_1 = 0;
    }
    var sizePx = tmp_1;
    var tmp_2;
    if (enforcement) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = placeable.w5o_1;
      tmp_2 = Math.max(a, sizePx);
    } else {
      tmp_2 = placeable.w5o_1;
    }
    var width = tmp_2;
    var tmp_3;
    if (enforcement) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var a_0 = placeable.x5o_1;
      tmp_3 = Math.max(a_0, sizePx);
    } else {
      tmp_3 = placeable.x5o_1;
    }
    var height = tmp_3;
    return _this__u8e3s4.b5p(width, height, VOID, MinimumInteractiveModifierNode$measure$lambda(width, placeable, height));
  };
  function LocalMinimumInteractiveComponentEnforcement$lambda() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return true;
  }
  function LocalMinimumInteractiveComponentSize$lambda() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(48);
    return new Dp(tmp$ret$0);
  }
  var properties_initialized_InteractiveComponentSize_kt_3r58bm;
  function _init_properties_InteractiveComponentSize_kt__58cq2s() {
    if (!properties_initialized_InteractiveComponentSize_kt_3r58bm) {
      properties_initialized_InteractiveComponentSize_kt_3r58bm = true;
      LocalMinimumInteractiveComponentEnforcement = staticCompositionLocalOf(LocalMinimumInteractiveComponentEnforcement$lambda);
      LocalMinimumInteractiveComponentSize = staticCompositionLocalOf(LocalMinimumInteractiveComponentSize$lambda);
    }
  }
  var LocalUsingExpressiveTheme;
  function MaterialTheme() {
  }
  protoOf(MaterialTheme).zam = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -561618718, 'C83@3609L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-561618718, $changed, -1, 'androidx.compose.material3.MaterialTheme.<get-colorScheme> (MaterialTheme.kt:83)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorScheme();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.u27(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(MaterialTheme).paq = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -942794935, 'C91@3895L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-942794935, $changed, -1, 'androidx.compose.material3.MaterialTheme.<get-typography> (MaterialTheme.kt:91)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalTypography();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.u27(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(MaterialTheme).xau = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 419509830, 'C99@4161L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(419509830, $changed, -1, 'androidx.compose.material3.MaterialTheme.<get-shapes> (MaterialTheme.kt:99)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalShapes();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.u27(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var MaterialTheme_instance;
  function MaterialTheme_getInstance() {
    return MaterialTheme_instance;
  }
  function MaterialTheme_0(colorScheme, shapes, typography, content, $composer, $changed, $default) {
    _init_properties_MaterialTheme_kt__ccmets();
    var colorScheme_0 = {_v: colorScheme};
    var shapes_0 = {_v: shapes};
    var typography_0 = {_v: typography};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v28(-2127166334);
    sourceInformation($composer_0, 'C(MaterialTheme)P(!1,2,3)51@2364L11,52@2412L6,53@2463L10,56@2542L32,57@2601L40,67@3101L81,59@2681L501:MaterialTheme.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && $composer_0.m1w(colorScheme_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.m1w(shapes_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.m1w(typography_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.m26(content) ? 2048 : 1024);
    if (!(($dirty & 1171) === 1170) || !$composer_0.d25()) {
      $composer_0.m25();
      if (($changed & 1) === 0 || $composer_0.q25()) {
        if (!(($default & 1) === 0)) {
          colorScheme_0._v = MaterialTheme_instance.zam($composer_0, 6);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          shapes_0._v = MaterialTheme_instance.xau($composer_0, 6);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          typography_0._v = MaterialTheme_instance.paq($composer_0, 6);
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.n1z();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.n25();
      if (isTraceInProgress()) {
        traceEventStart(-2127166334, $dirty, -1, 'androidx.compose.material3.MaterialTheme (MaterialTheme.kt:55)');
      }
      var tmp = _Dp___init__impl__ms3zkb(0.0);
      var rippleIndication = rippleOrFallbackImplementation(false, tmp, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 7);
      var selectionColors = rememberTextSelectionColors(colorScheme_0._v, $composer_0, 14 & $dirty);
      var tmp_0 = [get_LocalColorScheme().b2d(colorScheme_0._v), get_LocalIndication().b2d(rippleIndication), get_LocalRippleTheme().b2d(CompatRippleTheme_instance), get_LocalShapes().b2d(shapes_0._v), get_LocalTextSelectionColors().b2d(selectionColors), get_LocalTypography().b2d(typography_0._v)];
      // Inline function 'kotlin.run' call
      // Inline function 'androidx.compose.material3.MaterialTheme.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1066563262, true, MaterialTheme$lambda(typography_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.m1w(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.d27();
      var tmp_1;
      if (invalid || it === Companion_getInstance().w1z_1) {
        // Inline function 'androidx.compose.material3.MaterialTheme.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.o27(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      CompositionLocalProvider(tmp_0, tmp0, $composer_0, 56);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.n1z();
    }
    var tmp0_safe_receiver = $composer_0.w28();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.i2d(MaterialTheme$lambda_0(colorScheme_0, shapes_0, typography_0, content, $changed, $default));
    }
  }
  function rememberTextSelectionColors(colorScheme, $composer, $changed) {
    _init_properties_MaterialTheme_kt__ccmets();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1866455512, 'C(rememberTextSelectionColors)161@6816L198:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1866455512, $changed, -1, 'androidx.compose.material3.rememberTextSelectionColors (MaterialTheme.kt:159)');
    }
    var primaryColor = colorScheme.ban_1;
    sourceInformationMarkerStart($composer_0, -1160063291, 'CC(remember):MaterialTheme.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.p26(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(primaryColor)));
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_0.d27();
    var tmp;
    if (invalid || it === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.material3.rememberTextSelectionColors.<anonymous>' call
      var value = new TextSelectionColors(primaryColor, Color__copy$default_impl_ectz3s(primaryColor, 0.4));
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
  function LocalUsingExpressiveTheme$lambda() {
    _init_properties_MaterialTheme_kt__ccmets();
    return false;
  }
  function MaterialTheme$lambda($typography, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C68@3111L65:MaterialTheme.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.d25()) {
        if (isTraceInProgress()) {
          traceEventStart(-1066563262, $changed, -1, 'androidx.compose.material3.MaterialTheme.<anonymous> (MaterialTheme.kt:68)');
        }
        ProvideTextStyle($typography._v.jaq_1, $content, $composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.n1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.b25(p0, p1);
    };
  }
  function MaterialTheme$lambda_0($colorScheme, $shapes, $typography, $content, $$changed, $$default) {
    return function ($composer, $force) {
      MaterialTheme_0($colorScheme._v, $shapes._v, $typography._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_MaterialTheme_kt_8j16em;
  function _init_properties_MaterialTheme_kt__ccmets() {
    if (!properties_initialized_MaterialTheme_kt_8j16em) {
      properties_initialized_MaterialTheme_kt_8j16em = true;
      LocalUsingExpressiveTheme = staticCompositionLocalOf(LocalUsingExpressiveTheme$lambda);
    }
  }
  function get_LocalUseFallbackRippleImplementation() {
    _init_properties_Ripple_kt__d55ieo();
    return LocalUseFallbackRippleImplementation;
  }
  var LocalUseFallbackRippleImplementation;
  function get_LocalRippleConfiguration() {
    _init_properties_Ripple_kt__d55ieo();
    return LocalRippleConfiguration;
  }
  var LocalRippleConfiguration;
  function get_DefaultBoundedRipple() {
    _init_properties_Ripple_kt__d55ieo();
    return DefaultBoundedRipple;
  }
  var DefaultBoundedRipple;
  function get_DefaultUnboundedRipple() {
    _init_properties_Ripple_kt__d55ieo();
    return DefaultUnboundedRipple;
  }
  var DefaultUnboundedRipple;
  function RippleConfiguration(color, rippleAlpha) {
    color = color === VOID ? Companion_getInstance_5().j45_1 : color;
    rippleAlpha = rippleAlpha === VOID ? null : rippleAlpha;
    this.yau_1 = color;
    this.zau_1 = rippleAlpha;
  }
  protoOf(RippleConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleConfiguration))
      return false;
    if (!equals(this.yau_1, other.yau_1))
      return false;
    if (!equals(this.zau_1, other.zau_1))
      return false;
    return true;
  };
  protoOf(RippleConfiguration).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.yau_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.zau_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(RippleConfiguration).toString = function () {
    return 'RippleConfiguration(color=' + Color__toString_impl_hpzmaq(this.yau_1) + ', rippleAlpha=' + toString(this.zau_1) + ')';
  };
  function RippleNodeFactory_init_$Init$(bounded, radius, color, $this) {
    RippleNodeFactory.call($this, bounded, radius, null, color);
    return $this;
  }
  function RippleNodeFactory_init_$Create$(bounded, radius, color) {
    return RippleNodeFactory_init_$Init$(bounded, radius, color, objectCreate(protoOf(RippleNodeFactory)));
  }
  function sam$androidx_compose_ui_graphics_ColorProducer$0(function_0) {
    this.aav_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).l46 = function () {
    return this.aav_1().s44_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).q3 = function () {
    return this.aav_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ColorProducer) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function RippleNodeFactory$create$lambda(this$0) {
    return function () {
      return new Color(this$0.eav_1);
    };
  }
  function RippleNodeFactory(bounded, radius, colorProducer, color) {
    this.bav_1 = bounded;
    this.cav_1 = radius;
    this.dav_1 = colorProducer;
    this.eav_1 = color;
  }
  protoOf(RippleNodeFactory).n90 = function (interactionSource) {
    var tmp0_elvis_lhs = this.dav_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0 = RippleNodeFactory$create$lambda(this);
      tmp = new sam$androidx_compose_ui_graphics_ColorProducer$0(tmp_0);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var colorProducer = tmp;
    return new DelegatingThemeAwareRippleNode(interactionSource, this.bav_1, this.cav_1, colorProducer);
  };
  protoOf(RippleNodeFactory).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleNodeFactory))
      return false;
    if (!(this.bav_1 === other.bav_1))
      return false;
    if (!equals(this.cav_1, other.cav_1))
      return false;
    if (!equals(this.dav_1, other.dav_1))
      return false;
    return equals(this.eav_1, other.eav_1);
  };
  protoOf(RippleNodeFactory).hashCode = function () {
    var result = getBooleanHashCode(this.bav_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.cav_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.dav_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.eav_1) | 0;
    return result;
  };
  function updateConfiguration($this) {
    observeReads($this, DelegatingThemeAwareRippleNode$updateConfiguration$lambda($this));
  }
  function attachNewRipple($this) {
    var tmp = DelegatingThemeAwareRippleNode$attachNewRipple$lambda($this);
    var calculateColor = new sam$androidx_compose_ui_graphics_ColorProducer$0_0(tmp);
    var calculateRippleAlpha = DelegatingThemeAwareRippleNode$attachNewRipple$lambda_0($this);
    $this.yav_1 = $this.h6g(createRippleModifierNode($this.uav_1, $this.vav_1, $this.wav_1, calculateColor, calculateRippleAlpha));
  }
  function removeRipple($this) {
    var tmp0_safe_receiver = $this.yav_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.material3.DelegatingThemeAwareRippleNode.removeRipple.<anonymous>' call
      $this.j6g(tmp0_safe_receiver);
    }
  }
  function sam$androidx_compose_ui_graphics_ColorProducer$0_0(function_0) {
    this.zav_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0_0).l46 = function () {
    return this.zav_1().s44_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0_0).q3 = function () {
    return this.zav_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ColorProducer) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0_0).hashCode = function () {
    return hashCode(this.q3());
  };
  function DelegatingThemeAwareRippleNode$updateConfiguration$lambda(this$0) {
    return function () {
      var configuration = currentValueOf(this$0, get_LocalRippleConfiguration());
      var tmp;
      if (configuration == null) {
        removeRipple(this$0);
        tmp = Unit_instance;
      } else {
        var tmp_0;
        if (this$0.yav_1 == null) {
          attachNewRipple(this$0);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  function DelegatingThemeAwareRippleNode$attachNewRipple$lambda(this$0) {
    return function () {
      var userDefinedColor = this$0.xav_1.l46();
      var tmp;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(userDefinedColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
        tmp = userDefinedColor;
      } else {
        var rippleConfiguration = currentValueOf(this$0, get_LocalRippleConfiguration());
        var tmp_0;
        var tmp1_safe_receiver = rippleConfiguration == null ? null : rippleConfiguration.yau_1;
        var tmp_1;
        var tmp_2 = tmp1_safe_receiver;
        if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
          tmp_1 = null;
        } else {
          // Inline function 'androidx.compose.ui.graphics.isSpecified' call
          tmp_1 = !equals(_Color___get_value__impl__1pls5m(tmp1_safe_receiver), _ULong___init__impl__c78o9k(new Long(16, 0)));
        }
        if (tmp_1 === true) {
          tmp_0 = rippleConfiguration.yau_1;
        } else {
          tmp_0 = currentValueOf(this$0, get_LocalContentColor()).s44_1;
        }
        tmp = tmp_0;
      }
      return new Color(tmp);
    };
  }
  function DelegatingThemeAwareRippleNode$attachNewRipple$lambda_0(this$0) {
    return function () {
      var rippleConfiguration = currentValueOf(this$0, get_LocalRippleConfiguration());
      var tmp1_elvis_lhs = rippleConfiguration == null ? null : rippleConfiguration.zau_1;
      return tmp1_elvis_lhs == null ? RippleDefaults_getInstance().aaw_1 : tmp1_elvis_lhs;
    };
  }
  function DelegatingThemeAwareRippleNode(interactionSource, bounded, radius, color) {
    DelegatingNode.call(this);
    this.uav_1 = interactionSource;
    this.vav_1 = bounded;
    this.wav_1 = radius;
    this.xav_1 = color;
    this.yav_1 = null;
  }
  protoOf(DelegatingThemeAwareRippleNode).e5b = function () {
    updateConfiguration(this);
  };
  protoOf(DelegatingThemeAwareRippleNode).b5f = function () {
    updateConfiguration(this);
  };
  function RippleDefaults() {
    RippleDefaults_instance = this;
    var tmp = this;
    tmp.aaw_1 = new RippleAlpha(0.16, 0.1, 0.08, 0.1);
  }
  var RippleDefaults_instance;
  function RippleDefaults_getInstance() {
    if (RippleDefaults_instance == null)
      new RippleDefaults();
    return RippleDefaults_instance;
  }
  function rippleOrFallbackImplementation(bounded, radius, color, $composer, $changed, $default) {
    _init_properties_Ripple_kt__d55ieo();
    var bounded_0 = bounded;
    var radius_0 = radius;
    var color_0 = color;
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1315814667, 'C(rippleOrFallbackImplementation)P(!1,2:c#ui.unit.Dp,1:c#ui.graphics.Color):Ripple.kt#uh7d8r');
    if (!(($default & 1) === 0))
      bounded_0 = true;
    if (!(($default & 2) === 0))
      radius_0 = Companion_getInstance_0().c3i_1;
    if (!(($default & 4) === 0))
      color_0 = Companion_getInstance_5().j45_1;
    if (isTraceInProgress()) {
      traceEventStart(-1315814667, $changed, -1, 'androidx.compose.material3.rippleOrFallbackImplementation (Ripple.kt:230)');
    }
    $composer_0.j25(-1280632857);
    sourceInformation($composer_0, '231@10696L7,232@10748L38');
    var tmp;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalUseFallbackRippleImplementation();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.u27(this_0);
    sourceInformationMarkerEnd($composer_1);
    if (tmp0) {
      tmp = rememberRipple(bounded_0, radius_0, color_0, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed, 0);
    } else {
      tmp = ripple(bounded_0, radius_0, color_0);
    }
    var tmp1_group = tmp;
    $composer_0.l25();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp1_group;
  }
  function CompatRippleTheme() {
  }
  protoOf(CompatRippleTheme).za7 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.j25(-1844533201);
    sourceInformation($composer_0, 'C(defaultColor)244@11142L7:Ripple.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1844533201, $changed, -1, 'androidx.compose.material3.CompatRippleTheme.defaultColor (Ripple.kt:244)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalContentColor();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.u27(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.s44_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.l25();
    return tmp0_0;
  };
  protoOf(CompatRippleTheme).aa8 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.j25(-290975286);
    sourceInformation($composer_0, 'C(rippleAlpha):Ripple.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-290975286, $changed, -1, 'androidx.compose.material3.CompatRippleTheme.rippleAlpha (Ripple.kt:248)');
    }
    var tmp0 = RippleDefaults_getInstance().aaw_1;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.l25();
    return tmp0;
  };
  var CompatRippleTheme_instance;
  function CompatRippleTheme_getInstance() {
    return CompatRippleTheme_instance;
  }
  function ripple(bounded, radius, color) {
    bounded = bounded === VOID ? true : bounded;
    radius = radius === VOID ? Companion_getInstance_0().c3i_1 : radius;
    color = color === VOID ? Companion_getInstance_5().j45_1 : color;
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (equals(radius, Companion_getInstance_0().c3i_1) && equals(color, Companion_getInstance_5().j45_1)) {
      var tmp_0;
      if (bounded) {
        return get_DefaultBoundedRipple();
      } else {
        tmp_0 = get_DefaultUnboundedRipple();
      }
      tmp = tmp_0;
    } else {
      tmp = RippleNodeFactory_init_$Create$(bounded, radius, color);
    }
    return tmp;
  }
  function LocalUseFallbackRippleImplementation$lambda() {
    _init_properties_Ripple_kt__d55ieo();
    return false;
  }
  function LocalRippleConfiguration$lambda() {
    _init_properties_Ripple_kt__d55ieo();
    return new RippleConfiguration();
  }
  var properties_initialized_Ripple_kt_3wqvym;
  function _init_properties_Ripple_kt__d55ieo() {
    if (!properties_initialized_Ripple_kt_3wqvym) {
      properties_initialized_Ripple_kt_3wqvym = true;
      LocalUseFallbackRippleImplementation = staticCompositionLocalOf(LocalUseFallbackRippleImplementation$lambda);
      LocalRippleConfiguration = compositionLocalOf(VOID, LocalRippleConfiguration$lambda);
      DefaultBoundedRipple = RippleNodeFactory_init_$Create$(true, Companion_getInstance_0().c3i_1, Companion_getInstance_5().j45_1);
      DefaultUnboundedRipple = RippleNodeFactory_init_$Create$(false, Companion_getInstance_0().c3i_1, Companion_getInstance_5().j45_1);
    }
  }
  function get_LocalShapes() {
    _init_properties_Shapes_kt__48nj2q();
    return LocalShapes;
  }
  var LocalShapes;
  function get_value(_this__u8e3s4, $composer, $changed) {
    _init_properties_Shapes_kt__48nj2q();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1629172543, 'C191@7815L6:Shapes.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(1629172543, $changed, -1, 'androidx.compose.material3.<get-value> (Shapes.kt:191)');
    }
    var tmp0 = fromToken_0(MaterialTheme_instance.xau($composer_0, 6), _this__u8e3s4);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function Shapes(extraSmall, small, medium, large, extraLarge) {
    extraSmall = extraSmall === VOID ? ShapeDefaults_getInstance().baw_1 : extraSmall;
    small = small === VOID ? ShapeDefaults_getInstance().caw_1 : small;
    medium = medium === VOID ? ShapeDefaults_getInstance().daw_1 : medium;
    large = large === VOID ? ShapeDefaults_getInstance().eaw_1 : large;
    extraLarge = extraLarge === VOID ? ShapeDefaults_getInstance().faw_1 : extraLarge;
    this.gaw_1 = extraSmall;
    this.haw_1 = small;
    this.iaw_1 = medium;
    this.jaw_1 = large;
    this.kaw_1 = extraLarge;
  }
  protoOf(Shapes).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shapes))
      return false;
    if (!equals(this.gaw_1, other.gaw_1))
      return false;
    if (!equals(this.haw_1, other.haw_1))
      return false;
    if (!equals(this.iaw_1, other.iaw_1))
      return false;
    if (!equals(this.jaw_1, other.jaw_1))
      return false;
    if (!equals(this.kaw_1, other.kaw_1))
      return false;
    return true;
  };
  protoOf(Shapes).hashCode = function () {
    var result = hashCode(this.gaw_1);
    result = imul(31, result) + hashCode(this.haw_1) | 0;
    result = imul(31, result) + hashCode(this.iaw_1) | 0;
    result = imul(31, result) + hashCode(this.jaw_1) | 0;
    result = imul(31, result) + hashCode(this.kaw_1) | 0;
    return result;
  };
  protoOf(Shapes).toString = function () {
    return 'Shapes(' + ('extraSmall=' + toString_0(this.gaw_1) + ', ') + ('small=' + toString_0(this.haw_1) + ', ') + ('medium=' + toString_0(this.iaw_1) + ', ') + ('large=' + toString_0(this.jaw_1) + ', ') + ('extraLarge=' + toString_0(this.kaw_1) + ')');
  };
  function fromToken_0(_this__u8e3s4, value) {
    _init_properties_Shapes_kt__48nj2q();
    var tmp;
    switch (value.s2_1) {
      case 0:
        tmp = _this__u8e3s4.kaw_1;
        break;
      case 1:
        tmp = top(_this__u8e3s4.kaw_1);
        break;
      case 2:
        tmp = _this__u8e3s4.gaw_1;
        break;
      case 3:
        tmp = top(_this__u8e3s4.gaw_1);
        break;
      case 4:
        tmp = get_CircleShape();
        break;
      case 5:
        tmp = _this__u8e3s4.jaw_1;
        break;
      case 6:
        tmp = end(_this__u8e3s4.jaw_1);
        break;
      case 7:
        tmp = top(_this__u8e3s4.jaw_1);
        break;
      case 8:
        tmp = _this__u8e3s4.iaw_1;
        break;
      case 9:
        tmp = get_RectangleShape();
        break;
      case 10:
        tmp = _this__u8e3s4.haw_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function ShapeDefaults() {
    ShapeDefaults_instance = this;
    this.baw_1 = ShapeTokens_getInstance().naw_1;
    this.caw_1 = ShapeTokens_getInstance().vaw_1;
    this.daw_1 = ShapeTokens_getInstance().taw_1;
    this.eaw_1 = ShapeTokens_getInstance().qaw_1;
    this.faw_1 = ShapeTokens_getInstance().law_1;
  }
  var ShapeDefaults_instance;
  function ShapeDefaults_getInstance() {
    if (ShapeDefaults_instance == null)
      new ShapeDefaults();
    return ShapeDefaults_instance;
  }
  function top(_this__u8e3s4) {
    _init_properties_Shapes_kt__48nj2q();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0.0);
    var tmp0_bottomStart = CornerSize(tmp$ret$0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(0.0);
    var tmp1_bottomEnd = CornerSize(tmp$ret$1);
    return _this__u8e3s4.j9k(VOID, VOID, tmp1_bottomEnd, tmp0_bottomStart);
  }
  function end(_this__u8e3s4) {
    _init_properties_Shapes_kt__48nj2q();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0.0);
    var tmp = CornerSize(tmp$ret$0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(0.0);
    return _this__u8e3s4.j9k(tmp, VOID, VOID, CornerSize(tmp$ret$1));
  }
  function LocalShapes$lambda() {
    _init_properties_Shapes_kt__48nj2q();
    return new Shapes();
  }
  var properties_initialized_Shapes_kt_91wqbw;
  function _init_properties_Shapes_kt__48nj2q() {
    if (!properties_initialized_Shapes_kt_91wqbw) {
      properties_initialized_Shapes_kt_91wqbw = true;
      LocalShapes = staticCompositionLocalOf(LocalShapes$lambda);
    }
  }
  function get_LocalAbsoluteTonalElevation() {
    _init_properties_Surface_kt__8o7unv();
    return LocalAbsoluteTonalElevation;
  }
  var LocalAbsoluteTonalElevation;
  function Surface(modifier, shape, color, contentColor, tonalElevation, shadowElevation, border, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var shape_0 = {_v: shape};
    var color_0 = {_v: new Color(color)};
    var contentColor_0 = contentColor;
    var tonalElevation_0 = tonalElevation;
    var shadowElevation_0 = {_v: new Dp(shadowElevation)};
    var border_0 = {_v: border};
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -513881741, 'C(Surface)P(4,6,1:c#ui.graphics.Color,3:c#ui.graphics.Color,7:c#ui.unit.Dp,5:c#ui.unit.Dp)96@5014L11,97@5061L22,*103@5278L7,107@5451L741,104@5307L885:Surface.kt#uh7d8r');
    if (!(($default & 1) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 2) === 0)) {
      shape_0._v = get_RectangleShape();
    }
    if (!(($default & 4) === 0)) {
      color_0._v = new Color(MaterialTheme_instance.zam($composer_0, 6).qan_1);
    }
    if (!(($default & 8) === 0))
      contentColor_0 = contentColorFor(color_0._v.s44_1, $composer_0, 14 & $changed >> 6);
    if (!(($default & 16) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tonalElevation_0 = _Dp___init__impl__ms3zkb(0);
    }
    if (!(($default & 32) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      shadowElevation_0._v = new Dp(tmp$ret$1);
    }
    if (!(($default & 64) === 0)) {
      border_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-513881741, $changed, -1, 'androidx.compose.material3.Surface (Surface.kt:102)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalAbsoluteTonalElevation();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.u27(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp5 = tmp0.z3h_1;
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var other = tonalElevation_0;
    var absoluteElevation = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp5) + _Dp___get_value__impl__geb1vb(other));
    var tmp = [get_LocalContentColor().b2d(new Color(contentColor_0)), get_LocalAbsoluteTonalElevation().b2d(new Dp(absoluteElevation))];
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.material3.Surface.<anonymous>' call
    var dispatchReceiver = rememberComposableLambda(-70914509, true, Surface$lambda(modifier_0, shape_0, color_0, absoluteElevation, border_0, shadowElevation_0, content), $composer_0, 54);
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_2.m1w(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_2.d27();
    var tmp_0;
    if (invalid || it === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
      $composer_2.o27(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp0_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    sourceInformationMarkerEnd($composer_2);
    CompositionLocalProvider(tmp, tmp0_0, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function surface(_this__u8e3s4, shape, backgroundColor, border_0, shadowElevation) {
    _init_properties_Surface_kt__8o7unv();
    var tmp;
    if (shadowElevation > 0.0) {
      tmp = graphicsLayer(Companion_instance, VOID, VOID, VOID, VOID, VOID, shadowElevation, VOID, VOID, VOID, VOID, VOID, shape, false);
    } else {
      tmp = Companion_instance;
    }
    return clip(background(_this__u8e3s4.f5a(tmp).f5a(!(border_0 == null) ? border(Companion_instance, border_0, shape) : Companion_instance), backgroundColor, shape), shape);
  }
  function surfaceColorAtElevation_0(color, elevation, $composer, $changed) {
    _init_properties_Surface_kt__8o7unv();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -2079918090, 'C(surfaceColorAtElevation)P(0:c#ui.graphics.Color,1:c#ui.unit.Dp)465@24025L11,465@24037L37:Surface.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-2079918090, $changed, -1, 'androidx.compose.material3.surfaceColorAtElevation (Surface.kt:465)');
    }
    var tmp0 = applyTonalElevation(MaterialTheme_instance.zam($composer_0, 6), color, elevation, $composer_0, 112 & $changed << 3 | 896 & $changed << 3);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function Surface_0(onClick, modifier, enabled, shape, color, contentColor, tonalElevation, shadowElevation, border, interactionSource, content, $composer, $changed, $changed1, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var shape_0 = {_v: shape};
    var color_0 = {_v: new Color(color)};
    var contentColor_0 = contentColor;
    var tonalElevation_0 = tonalElevation;
    var shadowElevation_0 = {_v: new Dp(shadowElevation)};
    var border_0 = {_v: border};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -789752804, 'C(Surface)P(7,6,4,9,1:c#ui.graphics.Color,3:c#ui.graphics.Color,10:c#ui.unit.Dp,8:c#ui.unit.Dp!1,5)196@10536L11,197@10583L22,*204@10857L7,208@11030L853,205@10886L997:Surface.kt#uh7d8r');
    if (!(($default & 2) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 4) === 0)) {
      enabled_0._v = true;
    }
    if (!(($default & 8) === 0)) {
      shape_0._v = get_RectangleShape();
    }
    if (!(($default & 16) === 0)) {
      color_0._v = new Color(MaterialTheme_instance.zam($composer_0, 6).qan_1);
    }
    if (!(($default & 32) === 0))
      contentColor_0 = contentColorFor(color_0._v.s44_1, $composer_0, 14 & $changed >> 12);
    if (!(($default & 64) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tonalElevation_0 = _Dp___init__impl__ms3zkb(0);
    }
    if (!(($default & 128) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      shadowElevation_0._v = new Dp(tmp$ret$1);
    }
    if (!(($default & 256) === 0)) {
      border_0._v = null;
    }
    if (!(($default & 512) === 0)) {
      interactionSource_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-789752804, $changed, $changed1, 'androidx.compose.material3.Surface (Surface.kt:203)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalAbsoluteTonalElevation();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.u27(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp5 = tmp0.z3h_1;
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var other = tonalElevation_0;
    var absoluteElevation = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp5) + _Dp___get_value__impl__geb1vb(other));
    var tmp = [get_LocalContentColor().b2d(new Color(contentColor_0)), get_LocalAbsoluteTonalElevation().b2d(new Dp(absoluteElevation))];
    // Inline function 'kotlin.run' call
    // Inline function 'androidx.compose.material3.Surface.<anonymous>' call
    var dispatchReceiver = rememberComposableLambda(1279702876, true, Surface$lambda_0(modifier_0, shape_0, color_0, absoluteElevation, border_0, shadowElevation_0, interactionSource_0, enabled_0, onClick, content), $composer_0, 54);
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_2.m1w(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_2.d27();
    var tmp_0;
    if (invalid || it === Companion_getInstance().w1z_1) {
      // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_3(dispatchReceiver);
      $composer_2.o27(value);
      tmp_0 = value;
    } else {
      tmp_0 = it;
    }
    var tmp_1 = tmp_0;
    var tmp0_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    sourceInformationMarkerEnd($composer_2);
    CompositionLocalProvider(tmp, tmp0_0, $composer_0, 56);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
  }
  function LocalAbsoluteTonalElevation$lambda() {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return new Dp(tmp$ret$0);
  }
  function Surface$lambda$lambda($this$semantics) {
    _init_properties_Surface_kt__8o7unv();
    set_isContainer($this$semantics, true);
    return Unit_instance;
  }
  function Surface$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$lambda$slambda).s91 = function ($this$pointerInput, $completion) {
    var tmp = this.t91($this$pointerInput, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(Surface$lambda$slambda).ba = function (p1, $completion) {
    return this.s91((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$lambda$slambda).p9 = function () {
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
  protoOf(Surface$lambda$slambda).t91 = function ($this$pointerInput, completion) {
    var i = new Surface$lambda$slambda(completion);
    i.eax_1 = $this$pointerInput;
    return i;
  };
  function Surface$lambda$slambda_0(resultContinuation) {
    var i = new Surface$lambda$slambda(resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.s91($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$lambda($modifier, $shape, $color, $absoluteElevation, $border, $shadowElevation, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C114@5653L69,*116@5825L7,118@5940L115,122@6096L2,108@5461L725:Surface.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.d25()) {
        if (isTraceInProgress()) {
          traceEventStart(-70914509, $changed, -1, 'androidx.compose.material3.Surface.<anonymous> (Surface.kt:108)');
        }
        var tmp_0 = $modifier._v;
        var tmp_1 = $shape._v;
        var tmp_2 = surfaceColorAtElevation_0($color._v.s44_1, $absoluteElevation, $composer_0, 0);
        var tmp_3 = $border._v;
        // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
        var this_0 = get_LocalDensity();
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.u27(this_0);
        sourceInformationMarkerEnd($composer_1);
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$2 = tmp0.l3h($shadowElevation._v.z3h_1);
        var tmp_4 = surface(tmp_0, tmp_1, tmp_2, tmp_3, tmp$ret$2);
        sourceInformationMarkerStart($composer_0, 190720220, 'CC(remember):Surface.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.d27();
        var tmp_5;
        if (false || it === Companion_getInstance().w1z_1) {
          // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>.<anonymous>' call
          var value = Surface$lambda$lambda;
          $composer_0.o27(value);
          tmp_5 = value;
        } else {
          tmp_5 = it;
        }
        var tmp_6 = tmp_5;
        var tmp0_group = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        var tmp_7 = semantics(tmp_4, false, tmp0_group);
        sourceInformationMarkerStart($composer_0, 190725099, 'CC(remember):Surface.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.d27();
        var tmp_8;
        if (false || it_0 === Companion_getInstance().w1z_1) {
          // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = Surface$lambda$slambda_0(null);
          $composer_0.o27(value_0);
          tmp_8 = value_0;
        } else {
          tmp_8 = it_0;
        }
        var tmp_9 = tmp_8;
        var tmp1_group = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
        sourceInformationMarkerEnd($composer_0);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = pointerInput(tmp_7, Unit_instance, tmp1_group);
        var contentAlignment = null;
        var propagateMinConstraints = true;
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier = Companion_instance;
        if (!((2 & 2) === 0))
          contentAlignment = Companion_getInstance_3().j59_1;
        if (!((2 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHash($composer_3, 0);
        var localMap = $composer_3.b27();
        var materialized = materialize($composer_3, modifier_0);
        var tmp0_0 = Companion_getInstance_4().r6f_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
        var tmp_10 = $composer_4.e25();
        if (!isInterface(tmp_10, Applier)) {
          invalidApplier();
        }
        $composer_4.x25();
        if ($composer_4.s25()) {
          $composer_4.y25(tmp0_0);
        } else {
          $composer_4.b26();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_4);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_4().w6f_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_4().v6f_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_4().z6f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.s25() || !equals($this$with.d27(), compositeKeyHash)) {
          $this$with.o27(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).g26(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_4().t6f_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, -1154533166, 'C125@6167L9:Surface.kt#uh7d8r');
        $content($composer_6, 0);
        sourceInformationMarkerEnd($composer_6);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.d26();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        var tmp_11;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_11 = Unit_instance;
        }
        tmp = tmp_11;
      } else {
        $composer_0.n1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.b25(p0, p1);
    };
  }
  function Surface$lambda_0($modifier, $shape, $color, $absoluteElevation, $border, $shadowElevation, $interactionSource, $enabled, $onClick, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C216@11287L69,*218@11459L7,222@11649L32,209@11040L837:Surface.kt#uh7d8r');
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.d25()) {
        if (isTraceInProgress()) {
          traceEventStart(1279702876, $changed, -1, 'androidx.compose.material3.Surface.<anonymous> (Surface.kt:209)');
        }
        var tmp_0 = minimumInteractiveComponentSize($modifier._v);
        var tmp_1 = $shape._v;
        var tmp_2 = surfaceColorAtElevation_0($color._v.s44_1, $absoluteElevation, $composer_0, 0);
        var tmp_3 = $border._v;
        // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
        var this_0 = get_LocalDensity();
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
        var tmp0 = $composer_1.u27(this_0);
        sourceInformationMarkerEnd($composer_1);
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$2 = tmp0.l3h($shadowElevation._v.z3h_1);
        var tmp_4 = surface(tmp_0, tmp_1, tmp_2, tmp_3, tmp$ret$2);
        var tmp_5 = $interactionSource._v;
        var tmp_6 = _Dp___init__impl__ms3zkb(0.0);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = clickable(tmp_4, tmp_5, rippleOrFallbackImplementation(false, tmp_6, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 7), $enabled._v, VOID, VOID, $onClick);
        var contentAlignment = null;
        var propagateMinConstraints = true;
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 733328855, 'CC(Box)P(2,1,3)72@3384L130:Box.kt#2w3rfo');
        if (!((2 & 1) === 0))
          modifier = Companion_instance;
        if (!((2 & 2) === 0))
          contentAlignment = Companion_getInstance_3().j59_1;
        if (!((2 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_3 = $composer_2;
        sourceInformationMarkerStart($composer_3, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHash($composer_3, 0);
        var localMap = $composer_3.b27();
        var materialized = materialize($composer_3, modifier_0);
        var tmp0_0 = Companion_getInstance_4().r6f_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
        var tmp_7 = $composer_4.e25();
        if (!isInterface(tmp_7, Applier)) {
          invalidApplier();
        }
        $composer_4.x25();
        if ($composer_4.s25()) {
          $composer_4.y25(tmp0_0);
        } else {
          $composer_4.b26();
        }
        // Inline function 'androidx.compose.ui.layout.Layout.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_4);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_4().w6f_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_4().v6f_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_4().z6f_1;
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        if ($this$with.s25() || !equals($this$with.d27(), compositeKeyHash)) {
          $this$with.o27(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).g26(compositeKeyHash, block);
        }
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_4().t6f_1);
        // Inline function 'androidx.compose.foundation.layout.Box.<anonymous>' call
        var $composer_5 = $composer_4;
        sourceInformationMarkerStart($composer_5, -2146769399, 'C73@3429L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.Surface.<anonymous>.<anonymous>.<anonymous>' call
        var $composer_6 = $composer_5;
        sourceInformationMarkerStart($composer_6, -1148887694, 'C228@11858L9:Surface.kt#uh7d8r');
        $content($composer_6, 0);
        sourceInformationMarkerEnd($composer_6);
        sourceInformationMarkerEnd($composer_5);
        $composer_4.d26();
        sourceInformationMarkerEnd($composer_4);
        sourceInformationMarkerEnd($composer_3);
        sourceInformationMarkerEnd($composer_2);
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_instance;
        }
        tmp = tmp_8;
      } else {
        $composer_0.n1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1) {
      return $boundThis.b25(p0, p1);
    };
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      LocalAbsoluteTonalElevation = compositionLocalOf(VOID, LocalAbsoluteTonalElevation$lambda);
    }
  }
  function get_LocalTextStyle() {
    _init_properties_Text_kt__l2j80d();
    return LocalTextStyle;
  }
  var LocalTextStyle;
  function Text(text, modifier, color, fontSize, fontStyle, fontWeight, fontFamily, letterSpacing, textDecoration, textAlign, lineHeight, overflow, softWrap, maxLines, minLines, onTextLayout, style, $composer, $changed, $changed1, $default) {
    _init_properties_Text_kt__l2j80d();
    var modifier_0 = {_v: modifier};
    var color_0 = {_v: new Color(color)};
    var fontSize_0 = {_v: new TextUnit(fontSize)};
    var tmp = fontStyle;
    var fontStyle_0 = {_v: tmp == null ? null : new FontStyle(tmp)};
    var fontWeight_0 = {_v: fontWeight};
    var fontFamily_0 = {_v: fontFamily};
    var letterSpacing_0 = {_v: new TextUnit(letterSpacing)};
    var textDecoration_0 = {_v: textDecoration};
    var tmp_0 = textAlign;
    var textAlign_0 = {_v: tmp_0 == null ? null : new TextAlign(tmp_0)};
    var lineHeight_0 = {_v: new TextUnit(lineHeight)};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var minLines_0 = {_v: minLines};
    var onTextLayout_0 = {_v: onTextLayout};
    var style_0 = {_v: style};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v28(-2055108902);
    sourceInformation($composer_0, 'C(Text)P(14,9,0:c#ui.graphics.Color,2:c#ui.unit.TextUnit,3:c#ui.text.font.FontStyle,4!1,5:c#ui.unit.TextUnit,16,15:c#ui.text.style.TextAlign,6:c#ui.unit.TextUnit,11:c#ui.text.style.TextOverflow,12)108@5620L7,113@5732L530:Text.kt#uh7d8r');
    var $dirty = $changed;
    var $dirty1 = $changed1;
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
      $dirty = $dirty | ($composer_0.p26(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.s44_1))) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.p26(_TextUnit___get_packedValue__impl__it60w4(fontSize_0._v.u3i_1)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.m1w(fontStyle_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.m1w(fontWeight_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.m1w(fontFamily_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.p26(_TextUnit___get_packedValue__impl__it60w4(letterSpacing_0._v.u3i_1)) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.m1w(textDecoration_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.m1w(textAlign_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.p26(_TextUnit___get_packedValue__impl__it60w4(lineHeight_0._v.u3i_1)) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.q26(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.o4z_1)) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.n26(softWrap_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 3072) === 0)
      $dirty1 = $dirty1 | ($composer_0.q26(maxLines_0._v) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 24576) === 0)
      $dirty1 = $dirty1 | ($composer_0.q26(minLines_0._v) ? 16384 : 8192);
    if (!(($default & 32768) === 0))
      $dirty1 = $dirty1 | 196608;
    else if (($changed1 & 196608) === 0)
      $dirty1 = $dirty1 | ($composer_0.m26(onTextLayout_0._v) ? 131072 : 65536);
    if (($changed1 & 1572864) === 0)
      $dirty1 = $dirty1 | (($default & 65536) === 0 && $composer_0.m1w(style_0._v) ? 1048576 : 524288);
    if (!(($dirty & 306783379) === 306783378) || !(($dirty1 & 599187) === 599186) || !$composer_0.d25()) {
      $composer_0.m25();
      if (($changed & 1) === 0 || $composer_0.q25()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(Companion_getInstance_5().j45_1);
        }
        if (!(($default & 8) === 0)) {
          fontSize_0._v = new TextUnit(Companion_getInstance_6().s3i_1);
        }
        if (!(($default & 16) === 0)) {
          fontStyle_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          fontWeight_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          fontFamily_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          letterSpacing_0._v = new TextUnit(Companion_getInstance_6().s3i_1);
        }
        if (!(($default & 256) === 0)) {
          textDecoration_0._v = null;
        }
        if (!(($default & 512) === 0)) {
          textAlign_0._v = null;
        }
        if (!(($default & 1024) === 0)) {
          lineHeight_0._v = new TextUnit(Companion_getInstance_6().s3i_1);
        }
        if (!(($default & 2048) === 0)) {
          overflow_0._v = new TextOverflow(Companion_getInstance_7().l4z_1);
        }
        if (!(($default & 4096) === 0)) {
          softWrap_0._v = true;
        }
        if (!(($default & 8192) === 0)) {
          maxLines_0._v = 2147483647;
        }
        if (!(($default & 16384) === 0)) {
          minLines_0._v = 1;
        }
        if (!(($default & 32768) === 0)) {
          onTextLayout_0._v = null;
        }
        if (!(($default & 65536) === 0)) {
          var tmp0 = get_LocalTextStyle();
          // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
          var $composer_1 = $composer_0;
          sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
          var tmp0_0 = $composer_1.u27(tmp0);
          sourceInformationMarkerEnd($composer_1);
          style_0._v = tmp0_0;
          $dirty1 = $dirty1 & -3670017;
        }
      } else {
        $composer_0.n1z();
        if (!(($default & 65536) === 0))
          $dirty1 = $dirty1 & -3670017;
      }
      $composer_0.n25();
      if (isTraceInProgress()) {
        traceEventStart(-2055108902, $dirty, $dirty1, 'androidx.compose.material3.Text (Text.kt:109)');
      }
      $composer_0.j25(-1827892941);
      sourceInformation($composer_0, '');
      // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
      var this_0 = color_0._v.s44_1;
      var tmp_1;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
        tmp_1 = this_0;
      } else {
        // Inline function 'androidx.compose.material3.Text.<anonymous>' call
        $composer_0.j25(-1827892168);
        sourceInformation($composer_0, '*111@5715L7');
        // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
        var this_1 = style_0._v.x4c();
        var tmp_2;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(this_1), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
          tmp_2 = this_1;
        } else {
          // Inline function 'androidx.compose.material3.Text.<anonymous>.<anonymous>' call
          var tmp0_1 = get_LocalContentColor();
          // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
          var $composer_2 = $composer_0;
          sourceInformationMarkerStart($composer_2, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
          var tmp0_2 = $composer_2.u27(tmp0_1);
          sourceInformationMarkerEnd($composer_2);
          tmp_2 = tmp0_2.s44_1;
        }
        var tmp0_group = tmp_2;
        $composer_0.l25();
        tmp_1 = tmp0_group;
      }
      var tmp0_group_0 = tmp_1;
      $composer_0.l25();
      var textColor = tmp0_group_0;
      var tmp_3 = modifier_0._v;
      var tmp_4 = textAlign_0._v;
      var tmp0_elvis_lhs = tmp_4 == null ? null : tmp_4.o4m_1;
      var tmp_5;
      var tmp_6 = tmp0_elvis_lhs;
      if ((tmp_6 == null ? null : new TextAlign(tmp_6)) == null) {
        tmp_5 = Companion_getInstance_8().o4l_1;
      } else {
        tmp_5 = tmp0_elvis_lhs;
      }
      var tmp1_textAlign = tmp_5;
      var tmp_7 = style_0._v;
      var tmp_8 = fontSize_0._v;
      var tmp_9 = fontWeight_0._v;
      var tmp_10 = fontStyle_0._v;
      var tmp_11 = tmp_7.a4r(textColor, tmp_8.u3i_1, tmp_9, tmp_10 == null ? null : tmp_10.g4n_1, VOID, fontFamily_0._v, VOID, letterSpacing_0._v.u3i_1, VOID, VOID, VOID, VOID, textDecoration_0._v, VOID, VOID, tmp1_textAlign, VOID, lineHeight_0._v.u3i_1);
      var tmp_12 = onTextLayout_0._v;
      var tmp_13 = overflow_0._v;
      var tmp_14 = softWrap_0._v;
      var tmp_15 = maxLines_0._v;
      var tmp_16 = minLines_0._v;
      BasicText(text, tmp_3, tmp_11, tmp_12, tmp_13.o4z_1, tmp_14, tmp_15, tmp_16, null, $composer_0, 14 & $dirty | 112 & $dirty | 7168 & $dirty1 >> 6 | 57344 & $dirty1 << 9 | 458752 & $dirty1 << 9 | 3670016 & $dirty1 << 9 | 29360128 & $dirty1 << 9, 256);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.n1z();
    }
    var tmp1_safe_receiver = $composer_0.w28();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.i2d(Text$lambda(text, modifier_0, color_0, fontSize_0, fontStyle_0, fontWeight_0, fontFamily_0, letterSpacing_0, textDecoration_0, textAlign_0, lineHeight_0, overflow_0, softWrap_0, maxLines_0, minLines_0, onTextLayout_0, style_0, $changed, $changed1, $default));
    }
  }
  function ProvideTextStyle(value, content, $composer, $changed) {
    _init_properties_Text_kt__l2j80d();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v28(-460300127);
    sourceInformation($composer_0, 'C(ProvideTextStyle)P(1)347@14710L7,348@14735L80:Text.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1w(value) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m26(content) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.d25()) {
      if (isTraceInProgress()) {
        traceEventStart(-460300127, $dirty, -1, 'androidx.compose.material3.ProvideTextStyle (Text.kt:346)');
      }
      var tmp0 = get_LocalTextStyle();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.u27(tmp0);
      sourceInformationMarkerEnd($composer_1);
      var mergedStyle = tmp0_0.y4q(value);
      CompositionLocalProvider_0(get_LocalTextStyle().b2d(mergedStyle), content, $composer_0, 8 | 112 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.n1z();
    }
    var tmp0_safe_receiver = $composer_0.w28();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.i2d(ProvideTextStyle$lambda(value, content, $changed));
    }
  }
  function LocalTextStyle$lambda() {
    _init_properties_Text_kt__l2j80d();
    return get_DefaultTextStyle();
  }
  function Text$lambda($text, $modifier, $color, $fontSize, $fontStyle, $fontWeight, $fontFamily, $letterSpacing, $textDecoration, $textAlign, $lineHeight, $overflow, $softWrap, $maxLines, $minLines, $onTextLayout, $style, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      var tmp = $modifier._v;
      var tmp_0 = $color._v;
      var tmp_1 = $fontSize._v;
      var tmp_2 = $fontStyle._v;
      var tmp_3 = tmp_2 == null ? null : tmp_2.g4n_1;
      var tmp_4 = $fontWeight._v;
      var tmp_5 = $fontFamily._v;
      var tmp_6 = $letterSpacing._v;
      var tmp_7 = $textDecoration._v;
      var tmp_8 = $textAlign._v;
      Text($text, tmp, tmp_0.s44_1, tmp_1.u3i_1, tmp_3, tmp_4, tmp_5, tmp_6.u3i_1, tmp_7, tmp_8 == null ? null : tmp_8.o4m_1, $lineHeight._v.u3i_1, $overflow._v.o4z_1, $softWrap._v, $maxLines._v, $minLines._v, $onTextLayout._v, $style._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function ProvideTextStyle$lambda($value, $content, $$changed) {
    return function ($composer, $force) {
      ProvideTextStyle($value, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Text_kt_kgdrtb;
  function _init_properties_Text_kt__l2j80d() {
    if (!properties_initialized_Text_kt_kgdrtb) {
      properties_initialized_Text_kt_kgdrtb = true;
      var tmp = structuralEqualityPolicy();
      LocalTextStyle = compositionLocalOf(tmp, LocalTextStyle$lambda);
    }
  }
  function get_LocalTypography() {
    _init_properties_Typography_kt__rm3fch();
    return LocalTypography;
  }
  var LocalTypography;
  function Typography(displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall) {
    displayLarge = displayLarge === VOID ? TypographyTokens_getInstance().iax_1 : displayLarge;
    displayMedium = displayMedium === VOID ? TypographyTokens_getInstance().jax_1 : displayMedium;
    displaySmall = displaySmall === VOID ? TypographyTokens_getInstance().kax_1 : displaySmall;
    headlineLarge = headlineLarge === VOID ? TypographyTokens_getInstance().lax_1 : headlineLarge;
    headlineMedium = headlineMedium === VOID ? TypographyTokens_getInstance().max_1 : headlineMedium;
    headlineSmall = headlineSmall === VOID ? TypographyTokens_getInstance().nax_1 : headlineSmall;
    titleLarge = titleLarge === VOID ? TypographyTokens_getInstance().rax_1 : titleLarge;
    titleMedium = titleMedium === VOID ? TypographyTokens_getInstance().sax_1 : titleMedium;
    titleSmall = titleSmall === VOID ? TypographyTokens_getInstance().tax_1 : titleSmall;
    bodyLarge = bodyLarge === VOID ? TypographyTokens_getInstance().fax_1 : bodyLarge;
    bodyMedium = bodyMedium === VOID ? TypographyTokens_getInstance().gax_1 : bodyMedium;
    bodySmall = bodySmall === VOID ? TypographyTokens_getInstance().hax_1 : bodySmall;
    labelLarge = labelLarge === VOID ? TypographyTokens_getInstance().oax_1 : labelLarge;
    labelMedium = labelMedium === VOID ? TypographyTokens_getInstance().pax_1 : labelMedium;
    labelSmall = labelSmall === VOID ? TypographyTokens_getInstance().qax_1 : labelSmall;
    this.aaq_1 = displayLarge;
    this.baq_1 = displayMedium;
    this.caq_1 = displaySmall;
    this.daq_1 = headlineLarge;
    this.eaq_1 = headlineMedium;
    this.faq_1 = headlineSmall;
    this.gaq_1 = titleLarge;
    this.haq_1 = titleMedium;
    this.iaq_1 = titleSmall;
    this.jaq_1 = bodyLarge;
    this.kaq_1 = bodyMedium;
    this.laq_1 = bodySmall;
    this.maq_1 = labelLarge;
    this.naq_1 = labelMedium;
    this.oaq_1 = labelSmall;
  }
  protoOf(Typography).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Typography))
      return false;
    if (!this.aaq_1.equals(other.aaq_1))
      return false;
    if (!this.baq_1.equals(other.baq_1))
      return false;
    if (!this.caq_1.equals(other.caq_1))
      return false;
    if (!this.daq_1.equals(other.daq_1))
      return false;
    if (!this.eaq_1.equals(other.eaq_1))
      return false;
    if (!this.faq_1.equals(other.faq_1))
      return false;
    if (!this.gaq_1.equals(other.gaq_1))
      return false;
    if (!this.haq_1.equals(other.haq_1))
      return false;
    if (!this.iaq_1.equals(other.iaq_1))
      return false;
    if (!this.jaq_1.equals(other.jaq_1))
      return false;
    if (!this.kaq_1.equals(other.kaq_1))
      return false;
    if (!this.laq_1.equals(other.laq_1))
      return false;
    if (!this.maq_1.equals(other.maq_1))
      return false;
    if (!this.naq_1.equals(other.naq_1))
      return false;
    if (!this.oaq_1.equals(other.oaq_1))
      return false;
    return true;
  };
  protoOf(Typography).hashCode = function () {
    var result = this.aaq_1.hashCode();
    result = imul(31, result) + this.baq_1.hashCode() | 0;
    result = imul(31, result) + this.caq_1.hashCode() | 0;
    result = imul(31, result) + this.daq_1.hashCode() | 0;
    result = imul(31, result) + this.eaq_1.hashCode() | 0;
    result = imul(31, result) + this.faq_1.hashCode() | 0;
    result = imul(31, result) + this.gaq_1.hashCode() | 0;
    result = imul(31, result) + this.haq_1.hashCode() | 0;
    result = imul(31, result) + this.iaq_1.hashCode() | 0;
    result = imul(31, result) + this.jaq_1.hashCode() | 0;
    result = imul(31, result) + this.kaq_1.hashCode() | 0;
    result = imul(31, result) + this.laq_1.hashCode() | 0;
    result = imul(31, result) + this.maq_1.hashCode() | 0;
    result = imul(31, result) + this.naq_1.hashCode() | 0;
    result = imul(31, result) + this.oaq_1.hashCode() | 0;
    return result;
  };
  protoOf(Typography).toString = function () {
    return 'Typography(displayLarge=' + this.aaq_1.toString() + ', displayMedium=' + this.baq_1.toString() + ',' + ('displaySmall=' + this.caq_1.toString() + ', ') + ('headlineLarge=' + this.daq_1.toString() + ', headlineMedium=' + this.eaq_1.toString() + ',') + (' headlineSmall=' + this.faq_1.toString() + ', ') + ('titleLarge=' + this.gaq_1.toString() + ', titleMedium=' + this.haq_1.toString() + ', titleSmall=' + this.iaq_1.toString() + ', ') + ('bodyLarge=' + this.jaq_1.toString() + ', bodyMedium=' + this.kaq_1.toString() + ', bodySmall=' + this.laq_1.toString() + ', ') + ('labelLarge=' + this.maq_1.toString() + ', labelMedium=' + this.naq_1.toString() + ', labelSmall=' + this.oaq_1.toString() + ')');
  };
  function LocalTypography$lambda() {
    _init_properties_Typography_kt__rm3fch();
    return new Typography();
  }
  var properties_initialized_Typography_kt_bpd27j;
  function _init_properties_Typography_kt__rm3fch() {
    if (!properties_initialized_Typography_kt_bpd27j) {
      properties_initialized_Typography_kt_bpd27j = true;
      LocalTypography = staticCompositionLocalOf(LocalTypography$lambda);
    }
  }
  function get_OutgoingSpecEasing() {
    _init_properties_Elevation_kt__80i8t1();
    return OutgoingSpecEasing;
  }
  var OutgoingSpecEasing;
  function get_DefaultIncomingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return DefaultIncomingSpec;
  }
  var DefaultIncomingSpec;
  function get_DefaultOutgoingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return DefaultOutgoingSpec;
  }
  var DefaultOutgoingSpec;
  function get_HoveredOutgoingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return HoveredOutgoingSpec;
  }
  var HoveredOutgoingSpec;
  function animateElevation_0(_this__u8e3s4, target, from, to, $completion) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    var tmp = new $animateElevationCOROUTINE$0(_this__u8e3s4, target, from, to, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  }
  function ElevationDefaults() {
  }
  protoOf(ElevationDefaults).hay = function (interaction) {
    var tmp;
    if (interaction instanceof Press) {
      tmp = get_DefaultIncomingSpec();
    } else {
      if (interaction instanceof Start) {
        tmp = get_DefaultIncomingSpec();
      } else {
        if (interaction instanceof Enter) {
          tmp = get_DefaultIncomingSpec();
        } else {
          if (interaction instanceof Focus) {
            tmp = get_DefaultIncomingSpec();
          } else {
            tmp = null;
          }
        }
      }
    }
    return tmp;
  };
  protoOf(ElevationDefaults).iay = function (interaction) {
    var tmp;
    if (interaction instanceof Press) {
      tmp = get_DefaultOutgoingSpec();
    } else {
      if (interaction instanceof Start) {
        tmp = get_DefaultOutgoingSpec();
      } else {
        if (interaction instanceof Enter) {
          tmp = get_HoveredOutgoingSpec();
        } else {
          if (interaction instanceof Focus) {
            tmp = get_DefaultOutgoingSpec();
          } else {
            tmp = null;
          }
        }
      }
    }
    return tmp;
  };
  var ElevationDefaults_instance;
  function ElevationDefaults_getInstance() {
    return ElevationDefaults_instance;
  }
  function $animateElevationCOROUTINE$0(_this__u8e3s4, target, from, to, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.cay_1 = _this__u8e3s4;
    this.day_1 = target;
    this.eay_1 = from;
    this.fay_1 = to;
  }
  protoOf($animateElevationCOROUTINE$0).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 4;
            this.gay_1 = !(this.fay_1 == null) ? ElevationDefaults_instance.hay(this.fay_1) : !(this.eay_1 == null) ? ElevationDefaults_instance.iay(this.eay_1) : null;
            if (!(this.gay_1 == null)) {
              this.h9_1 = 2;
              suspendResult = this.cay_1.o7z(new Dp(this.day_1), this.gay_1, VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 1;
              suspendResult = this.cay_1.p7z(new Dp(this.day_1), this);
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
  var properties_initialized_Elevation_kt_70s6ab;
  function _init_properties_Elevation_kt__80i8t1() {
    if (!properties_initialized_Elevation_kt_70s6ab) {
      properties_initialized_Elevation_kt_70s6ab = true;
      OutgoingSpecEasing = new CubicBezierEasing(0.4, 0.0, 0.6, 1.0);
      DefaultIncomingSpec = new TweenSpec(120, VOID, get_FastOutSlowInEasing());
      DefaultOutgoingSpec = new TweenSpec(150, VOID, get_OutgoingSpecEasing());
      HoveredOutgoingSpec = new TweenSpec(120, VOID, get_OutgoingSpecEasing());
    }
  }
  function ProvideContentColorTextStyle(contentColor, textStyle, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v28(-716124955);
    sourceInformation($composer_0, 'C(ProvideContentColorTextStyle)P(1:c#ui.graphics.Color,2)39@1423L7,40@1452L151:ProvideContentColorTextStyle.kt#mqatfk');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.p26(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor))) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1w(textStyle) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.m26(content) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.d25()) {
      if (isTraceInProgress()) {
        traceEventStart(-716124955, $dirty, -1, 'androidx.compose.material3.internal.ProvideContentColorTextStyle (ProvideContentColorTextStyle.kt:38)');
      }
      var tmp0 = get_LocalTextStyle();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
      var tmp0_0 = $composer_1.u27(tmp0);
      sourceInformationMarkerEnd($composer_1);
      var mergedStyle = tmp0_0.y4q(textStyle);
      CompositionLocalProvider([get_LocalContentColor().b2d(new Color(contentColor)), get_LocalTextStyle().b2d(mergedStyle)], content, $composer_0, 8 | 112 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.n1z();
    }
    var tmp0_safe_receiver = $composer_0.w28();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.i2d(ProvideContentColorTextStyle$lambda(contentColor, textStyle, content, $changed));
    }
  }
  function ProvideContentColorTextStyle$lambda($contentColor, $textStyle, $content, $$changed) {
    return function ($composer, $force) {
      ProvideContentColorTextStyle($contentColor, $textStyle, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ColorDarkTokens() {
    ColorDarkTokens_instance = this;
    this.mas_1 = PaletteTokens_getInstance().jaz_1;
    this.nas_1 = PaletteTokens_getInstance().tay_1;
    this.oas_1 = PaletteTokens_getInstance().oay_1;
    this.pas_1 = PaletteTokens_getInstance().caz_1;
    this.qas_1 = PaletteTokens_getInstance().nb0_1;
    this.ras_1 = PaletteTokens_getInstance().oaz_1;
    this.sas_1 = PaletteTokens_getInstance().oaz_1;
    this.tas_1 = PaletteTokens_getInstance().nay_1;
    this.uas_1 = PaletteTokens_getInstance().uay_1;
    this.vas_1 = PaletteTokens_getInstance().lb0_1;
    this.was_1 = PaletteTokens_getInstance().sb0_1;
    this.xas_1 = PaletteTokens_getInstance().jb0_1;
    this.yas_1 = PaletteTokens_getInstance().mb0_1;
    this.zas_1 = PaletteTokens_getInstance().yb0_1;
    this.aat_1 = PaletteTokens_getInstance().fb1_1;
    this.bat_1 = PaletteTokens_getInstance().wb0_1;
    this.cat_1 = PaletteTokens_getInstance().zb0_1;
    this.dat_1 = PaletteTokens_getInstance().oaz_1;
    this.eat_1 = PaletteTokens_getInstance().eb0_1;
    this.fat_1 = PaletteTokens_getInstance().lb1_1;
    this.gat_1 = PaletteTokens_getInstance().sb1_1;
    this.hat_1 = PaletteTokens_getInstance().jb1_1;
    this.iat_1 = PaletteTokens_getInstance().mb1_1;
    this.jat_1 = PaletteTokens_getInstance().cb0_1;
    this.kat_1 = PaletteTokens_getInstance().zaz_1;
    this.lat_1 = PaletteTokens_getInstance().rb0_1;
    this.mat_1 = PaletteTokens_getInstance().mb0_1;
    this.nat_1 = PaletteTokens_getInstance().sb0_1;
    this.oat_1 = PaletteTokens_getInstance().rb0_1;
    this.pat_1 = PaletteTokens_getInstance().xay_1;
    this.qat_1 = PaletteTokens_getInstance().eb1_1;
    this.rat_1 = PaletteTokens_getInstance().zb0_1;
    this.sat_1 = PaletteTokens_getInstance().fb1_1;
    this.tat_1 = PaletteTokens_getInstance().eb1_1;
    this.uat_1 = PaletteTokens_getInstance().jaz_1;
    this.vat_1 = PaletteTokens_getInstance().eaz_1;
    this.wat_1 = PaletteTokens_getInstance().aaz_1;
    this.xat_1 = PaletteTokens_getInstance().baz_1;
    this.yat_1 = PaletteTokens_getInstance().daz_1;
    this.zat_1 = PaletteTokens_getInstance().yay_1;
    this.aau_1 = PaletteTokens_getInstance().gaz_1;
    this.bau_1 = PaletteTokens_getInstance().jaz_1;
    this.cau_1 = this.lat_1;
    this.dau_1 = PaletteTokens_getInstance().zaz_1;
    this.eau_1 = PaletteTokens_getInstance().rb1_1;
    this.fau_1 = PaletteTokens_getInstance().mb1_1;
    this.gau_1 = PaletteTokens_getInstance().sb1_1;
    this.hau_1 = PaletteTokens_getInstance().rb1_1;
  }
  var ColorDarkTokens_instance;
  function ColorDarkTokens_getInstance() {
    if (ColorDarkTokens_instance == null)
      new ColorDarkTokens();
    return ColorDarkTokens_instance;
  }
  function ColorLightTokens() {
    ColorLightTokens_instance = this;
    this.qaq_1 = PaletteTokens_getInstance().taz_1;
    this.raq_1 = PaletteTokens_getInstance().pay_1;
    this.saq_1 = PaletteTokens_getInstance().uay_1;
    this.taq_1 = PaletteTokens_getInstance().raz_1;
    this.uaq_1 = PaletteTokens_getInstance().rb0_1;
    this.vaq_1 = PaletteTokens_getInstance().caz_1;
    this.waq_1 = PaletteTokens_getInstance().yay_1;
    this.xaq_1 = PaletteTokens_getInstance().may_1;
    this.yaq_1 = PaletteTokens_getInstance().lay_1;
    this.zaq_1 = PaletteTokens_getInstance().kb0_1;
    this.aar_1 = PaletteTokens_getInstance().jb0_1;
    this.bar_1 = PaletteTokens_getInstance().jb0_1;
    this.car_1 = PaletteTokens_getInstance().mb0_1;
    this.dar_1 = PaletteTokens_getInstance().xb0_1;
    this.ear_1 = PaletteTokens_getInstance().wb0_1;
    this.far_1 = PaletteTokens_getInstance().wb0_1;
    this.gar_1 = PaletteTokens_getInstance().zb0_1;
    this.har_1 = PaletteTokens_getInstance().yay_1;
    this.iar_1 = PaletteTokens_getInstance().zaz_1;
    this.jar_1 = PaletteTokens_getInstance().kb1_1;
    this.kar_1 = PaletteTokens_getInstance().jb1_1;
    this.lar_1 = PaletteTokens_getInstance().jb1_1;
    this.mar_1 = PaletteTokens_getInstance().mb1_1;
    this.nar_1 = PaletteTokens_getInstance().bb0_1;
    this.oar_1 = PaletteTokens_getInstance().eb0_1;
    this.par_1 = PaletteTokens_getInstance().nb0_1;
    this.qar_1 = PaletteTokens_getInstance().sb0_1;
    this.rar_1 = PaletteTokens_getInstance().sb0_1;
    this.sar_1 = PaletteTokens_getInstance().rb0_1;
    this.tar_1 = PaletteTokens_getInstance().xay_1;
    this.uar_1 = PaletteTokens_getInstance().ab1_1;
    this.var_1 = PaletteTokens_getInstance().fb1_1;
    this.war_1 = PaletteTokens_getInstance().fb1_1;
    this.xar_1 = PaletteTokens_getInstance().eb1_1;
    this.yar_1 = PaletteTokens_getInstance().taz_1;
    this.zar_1 = PaletteTokens_getInstance().taz_1;
    this.aas_1 = PaletteTokens_getInstance().qaz_1;
    this.bas_1 = PaletteTokens_getInstance().paz_1;
    this.cas_1 = PaletteTokens_getInstance().oaz_1;
    this.das_1 = PaletteTokens_getInstance().saz_1;
    this.eas_1 = PaletteTokens_getInstance().zay_1;
    this.fas_1 = PaletteTokens_getInstance().naz_1;
    this.gas_1 = this.par_1;
    this.has_1 = PaletteTokens_getInstance().fb0_1;
    this.ias_1 = PaletteTokens_getInstance().nb1_1;
    this.jas_1 = PaletteTokens_getInstance().sb1_1;
    this.kas_1 = PaletteTokens_getInstance().sb1_1;
    this.las_1 = PaletteTokens_getInstance().rb1_1;
  }
  var ColorLightTokens_instance;
  function ColorLightTokens_getInstance() {
    if (ColorLightTokens_instance == null)
      new ColorLightTokens();
    return ColorLightTokens_instance;
  }
  var ColorSchemeKeyTokens_Background_instance;
  var ColorSchemeKeyTokens_Error_instance;
  var ColorSchemeKeyTokens_ErrorContainer_instance;
  var ColorSchemeKeyTokens_InverseOnSurface_instance;
  var ColorSchemeKeyTokens_InversePrimary_instance;
  var ColorSchemeKeyTokens_InverseSurface_instance;
  var ColorSchemeKeyTokens_OnBackground_instance;
  var ColorSchemeKeyTokens_OnError_instance;
  var ColorSchemeKeyTokens_OnErrorContainer_instance;
  var ColorSchemeKeyTokens_OnPrimary_instance;
  var ColorSchemeKeyTokens_OnPrimaryContainer_instance;
  var ColorSchemeKeyTokens_OnPrimaryFixed_instance;
  var ColorSchemeKeyTokens_OnPrimaryFixedVariant_instance;
  var ColorSchemeKeyTokens_OnSecondary_instance;
  var ColorSchemeKeyTokens_OnSecondaryContainer_instance;
  var ColorSchemeKeyTokens_OnSecondaryFixed_instance;
  var ColorSchemeKeyTokens_OnSecondaryFixedVariant_instance;
  var ColorSchemeKeyTokens_OnSurface_instance;
  var ColorSchemeKeyTokens_OnSurfaceVariant_instance;
  var ColorSchemeKeyTokens_OnTertiary_instance;
  var ColorSchemeKeyTokens_OnTertiaryContainer_instance;
  var ColorSchemeKeyTokens_OnTertiaryFixed_instance;
  var ColorSchemeKeyTokens_OnTertiaryFixedVariant_instance;
  var ColorSchemeKeyTokens_Outline_instance;
  var ColorSchemeKeyTokens_OutlineVariant_instance;
  var ColorSchemeKeyTokens_Primary_instance;
  var ColorSchemeKeyTokens_PrimaryContainer_instance;
  var ColorSchemeKeyTokens_PrimaryFixed_instance;
  var ColorSchemeKeyTokens_PrimaryFixedDim_instance;
  var ColorSchemeKeyTokens_Scrim_instance;
  var ColorSchemeKeyTokens_Secondary_instance;
  var ColorSchemeKeyTokens_SecondaryContainer_instance;
  var ColorSchemeKeyTokens_SecondaryFixed_instance;
  var ColorSchemeKeyTokens_SecondaryFixedDim_instance;
  var ColorSchemeKeyTokens_Surface_instance;
  var ColorSchemeKeyTokens_SurfaceBright_instance;
  var ColorSchemeKeyTokens_SurfaceContainer_instance;
  var ColorSchemeKeyTokens_SurfaceContainerHigh_instance;
  var ColorSchemeKeyTokens_SurfaceContainerHighest_instance;
  var ColorSchemeKeyTokens_SurfaceContainerLow_instance;
  var ColorSchemeKeyTokens_SurfaceContainerLowest_instance;
  var ColorSchemeKeyTokens_SurfaceDim_instance;
  var ColorSchemeKeyTokens_SurfaceTint_instance;
  var ColorSchemeKeyTokens_SurfaceVariant_instance;
  var ColorSchemeKeyTokens_Tertiary_instance;
  var ColorSchemeKeyTokens_TertiaryContainer_instance;
  var ColorSchemeKeyTokens_TertiaryFixed_instance;
  var ColorSchemeKeyTokens_TertiaryFixedDim_instance;
  var ColorSchemeKeyTokens_entriesInitialized;
  function ColorSchemeKeyTokens_initEntries() {
    if (ColorSchemeKeyTokens_entriesInitialized)
      return Unit_instance;
    ColorSchemeKeyTokens_entriesInitialized = true;
    ColorSchemeKeyTokens_Background_instance = new ColorSchemeKeyTokens('Background', 0);
    ColorSchemeKeyTokens_Error_instance = new ColorSchemeKeyTokens('Error', 1);
    ColorSchemeKeyTokens_ErrorContainer_instance = new ColorSchemeKeyTokens('ErrorContainer', 2);
    ColorSchemeKeyTokens_InverseOnSurface_instance = new ColorSchemeKeyTokens('InverseOnSurface', 3);
    ColorSchemeKeyTokens_InversePrimary_instance = new ColorSchemeKeyTokens('InversePrimary', 4);
    ColorSchemeKeyTokens_InverseSurface_instance = new ColorSchemeKeyTokens('InverseSurface', 5);
    ColorSchemeKeyTokens_OnBackground_instance = new ColorSchemeKeyTokens('OnBackground', 6);
    ColorSchemeKeyTokens_OnError_instance = new ColorSchemeKeyTokens('OnError', 7);
    ColorSchemeKeyTokens_OnErrorContainer_instance = new ColorSchemeKeyTokens('OnErrorContainer', 8);
    ColorSchemeKeyTokens_OnPrimary_instance = new ColorSchemeKeyTokens('OnPrimary', 9);
    ColorSchemeKeyTokens_OnPrimaryContainer_instance = new ColorSchemeKeyTokens('OnPrimaryContainer', 10);
    ColorSchemeKeyTokens_OnPrimaryFixed_instance = new ColorSchemeKeyTokens('OnPrimaryFixed', 11);
    ColorSchemeKeyTokens_OnPrimaryFixedVariant_instance = new ColorSchemeKeyTokens('OnPrimaryFixedVariant', 12);
    ColorSchemeKeyTokens_OnSecondary_instance = new ColorSchemeKeyTokens('OnSecondary', 13);
    ColorSchemeKeyTokens_OnSecondaryContainer_instance = new ColorSchemeKeyTokens('OnSecondaryContainer', 14);
    ColorSchemeKeyTokens_OnSecondaryFixed_instance = new ColorSchemeKeyTokens('OnSecondaryFixed', 15);
    ColorSchemeKeyTokens_OnSecondaryFixedVariant_instance = new ColorSchemeKeyTokens('OnSecondaryFixedVariant', 16);
    ColorSchemeKeyTokens_OnSurface_instance = new ColorSchemeKeyTokens('OnSurface', 17);
    ColorSchemeKeyTokens_OnSurfaceVariant_instance = new ColorSchemeKeyTokens('OnSurfaceVariant', 18);
    ColorSchemeKeyTokens_OnTertiary_instance = new ColorSchemeKeyTokens('OnTertiary', 19);
    ColorSchemeKeyTokens_OnTertiaryContainer_instance = new ColorSchemeKeyTokens('OnTertiaryContainer', 20);
    ColorSchemeKeyTokens_OnTertiaryFixed_instance = new ColorSchemeKeyTokens('OnTertiaryFixed', 21);
    ColorSchemeKeyTokens_OnTertiaryFixedVariant_instance = new ColorSchemeKeyTokens('OnTertiaryFixedVariant', 22);
    ColorSchemeKeyTokens_Outline_instance = new ColorSchemeKeyTokens('Outline', 23);
    ColorSchemeKeyTokens_OutlineVariant_instance = new ColorSchemeKeyTokens('OutlineVariant', 24);
    ColorSchemeKeyTokens_Primary_instance = new ColorSchemeKeyTokens('Primary', 25);
    ColorSchemeKeyTokens_PrimaryContainer_instance = new ColorSchemeKeyTokens('PrimaryContainer', 26);
    ColorSchemeKeyTokens_PrimaryFixed_instance = new ColorSchemeKeyTokens('PrimaryFixed', 27);
    ColorSchemeKeyTokens_PrimaryFixedDim_instance = new ColorSchemeKeyTokens('PrimaryFixedDim', 28);
    ColorSchemeKeyTokens_Scrim_instance = new ColorSchemeKeyTokens('Scrim', 29);
    ColorSchemeKeyTokens_Secondary_instance = new ColorSchemeKeyTokens('Secondary', 30);
    ColorSchemeKeyTokens_SecondaryContainer_instance = new ColorSchemeKeyTokens('SecondaryContainer', 31);
    ColorSchemeKeyTokens_SecondaryFixed_instance = new ColorSchemeKeyTokens('SecondaryFixed', 32);
    ColorSchemeKeyTokens_SecondaryFixedDim_instance = new ColorSchemeKeyTokens('SecondaryFixedDim', 33);
    ColorSchemeKeyTokens_Surface_instance = new ColorSchemeKeyTokens('Surface', 34);
    ColorSchemeKeyTokens_SurfaceBright_instance = new ColorSchemeKeyTokens('SurfaceBright', 35);
    ColorSchemeKeyTokens_SurfaceContainer_instance = new ColorSchemeKeyTokens('SurfaceContainer', 36);
    ColorSchemeKeyTokens_SurfaceContainerHigh_instance = new ColorSchemeKeyTokens('SurfaceContainerHigh', 37);
    ColorSchemeKeyTokens_SurfaceContainerHighest_instance = new ColorSchemeKeyTokens('SurfaceContainerHighest', 38);
    ColorSchemeKeyTokens_SurfaceContainerLow_instance = new ColorSchemeKeyTokens('SurfaceContainerLow', 39);
    ColorSchemeKeyTokens_SurfaceContainerLowest_instance = new ColorSchemeKeyTokens('SurfaceContainerLowest', 40);
    ColorSchemeKeyTokens_SurfaceDim_instance = new ColorSchemeKeyTokens('SurfaceDim', 41);
    ColorSchemeKeyTokens_SurfaceTint_instance = new ColorSchemeKeyTokens('SurfaceTint', 42);
    ColorSchemeKeyTokens_SurfaceVariant_instance = new ColorSchemeKeyTokens('SurfaceVariant', 43);
    ColorSchemeKeyTokens_Tertiary_instance = new ColorSchemeKeyTokens('Tertiary', 44);
    ColorSchemeKeyTokens_TertiaryContainer_instance = new ColorSchemeKeyTokens('TertiaryContainer', 45);
    ColorSchemeKeyTokens_TertiaryFixed_instance = new ColorSchemeKeyTokens('TertiaryFixed', 46);
    ColorSchemeKeyTokens_TertiaryFixedDim_instance = new ColorSchemeKeyTokens('TertiaryFixedDim', 47);
  }
  function ColorSchemeKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ColorSchemeKeyTokens_OnPrimary_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnPrimary_instance;
  }
  function ColorSchemeKeyTokens_OnSurface_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnSurface_instance;
  }
  function ColorSchemeKeyTokens_Primary_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_Primary_instance;
  }
  function ElevationTokens() {
    ElevationTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.wb1_1 = _Dp___init__impl__ms3zkb(0.0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.xb1_1 = _Dp___init__impl__ms3zkb(1.0);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.yb1_1 = _Dp___init__impl__ms3zkb(3.0);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.zb1_1 = _Dp___init__impl__ms3zkb(6.0);
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.ab2_1 = _Dp___init__impl__ms3zkb(8.0);
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.bb2_1 = _Dp___init__impl__ms3zkb(12.0);
  }
  var ElevationTokens_instance;
  function ElevationTokens_getInstance() {
    if (ElevationTokens_instance == null)
      new ElevationTokens();
    return ElevationTokens_instance;
  }
  function FilledButtonTokens() {
    FilledButtonTokens_instance = this;
    this.bam_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.cam_1 = ElevationTokens_getInstance().wb1_1;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.dam_1 = _Dp___init__impl__ms3zkb(40.0);
    this.eam_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.fam_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.gam_1 = ElevationTokens_getInstance().wb1_1;
    this.ham_1 = 0.12;
    this.iam_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.jam_1 = 0.38;
    this.kam_1 = ElevationTokens_getInstance().wb1_1;
    this.lam_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.mam_1 = ElevationTokens_getInstance().xb1_1;
    this.nam_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.oam_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.pam_1 = TypographyKeyTokens_LabelLarge_getInstance();
    this.qam_1 = ElevationTokens_getInstance().wb1_1;
    this.ram_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.sam_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.tam_1 = 0.38;
    this.uam_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.vam_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.wam_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.xam_1 = _Dp___init__impl__ms3zkb(18.0);
    this.yam_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
  }
  var FilledButtonTokens_instance;
  function FilledButtonTokens_getInstance() {
    if (FilledButtonTokens_instance == null)
      new FilledButtonTokens();
    return FilledButtonTokens_instance;
  }
  function PaletteTokens() {
    PaletteTokens_instance = this;
    this.jay_1 = Color_0(0, 0, 0);
    this.kay_1 = Color_0(0, 0, 0);
    this.lay_1 = Color_0(65, 14, 11);
    this.may_1 = Color_0(255, 255, 255);
    this.nay_1 = Color_0(96, 20, 16);
    this.oay_1 = Color_0(140, 29, 24);
    this.pay_1 = Color_0(179, 38, 30);
    this.qay_1 = Color_0(220, 54, 46);
    this.ray_1 = Color_0(228, 105, 98);
    this.say_1 = Color_0(236, 146, 142);
    this.tay_1 = Color_0(242, 184, 181);
    this.uay_1 = Color_0(249, 222, 220);
    this.vay_1 = Color_0(252, 238, 238);
    this.way_1 = Color_0(255, 251, 249);
    this.xay_1 = Color_0(0, 0, 0);
    this.yay_1 = Color_0(29, 27, 32);
    this.zay_1 = Color_0(255, 255, 255);
    this.aaz_1 = Color_0(33, 31, 38);
    this.baz_1 = Color_0(43, 41, 48);
    this.caz_1 = Color_0(50, 47, 53);
    this.daz_1 = Color_0(54, 52, 59);
    this.eaz_1 = Color_0(59, 56, 62);
    this.faz_1 = Color_0(72, 70, 76);
    this.gaz_1 = Color_0(15, 13, 19);
    this.haz_1 = Color_0(96, 93, 100);
    this.iaz_1 = Color_0(121, 118, 125);
    this.jaz_1 = Color_0(20, 18, 24);
    this.kaz_1 = Color_0(147, 143, 150);
    this.laz_1 = Color_0(174, 169, 177);
    this.maz_1 = Color_0(202, 197, 205);
    this.naz_1 = Color_0(222, 216, 225);
    this.oaz_1 = Color_0(230, 224, 233);
    this.paz_1 = Color_0(236, 230, 240);
    this.qaz_1 = Color_0(243, 237, 247);
    this.raz_1 = Color_0(245, 239, 247);
    this.saz_1 = Color_0(247, 242, 250);
    this.taz_1 = Color_0(254, 247, 255);
    this.uaz_1 = Color_0(255, 251, 255);
    this.vaz_1 = Color_0(0, 0, 0);
    this.waz_1 = Color_0(29, 26, 34);
    this.xaz_1 = Color_0(255, 255, 255);
    this.yaz_1 = Color_0(50, 47, 55);
    this.zaz_1 = Color_0(73, 69, 79);
    this.ab0_1 = Color_0(96, 93, 102);
    this.bb0_1 = Color_0(121, 116, 126);
    this.cb0_1 = Color_0(147, 143, 153);
    this.db0_1 = Color_0(174, 169, 180);
    this.eb0_1 = Color_0(202, 196, 208);
    this.fb0_1 = Color_0(231, 224, 236);
    this.gb0_1 = Color_0(245, 238, 250);
    this.hb0_1 = Color_0(255, 251, 254);
    this.ib0_1 = Color_0(0, 0, 0);
    this.jb0_1 = Color_0(33, 0, 93);
    this.kb0_1 = Color_0(255, 255, 255);
    this.lb0_1 = Color_0(56, 30, 114);
    this.mb0_1 = Color_0(79, 55, 139);
    this.nb0_1 = Color_0(103, 80, 164);
    this.ob0_1 = Color_0(127, 103, 190);
    this.pb0_1 = Color_0(154, 130, 219);
    this.qb0_1 = Color_0(182, 157, 248);
    this.rb0_1 = Color_0(208, 188, 255);
    this.sb0_1 = Color_0(234, 221, 255);
    this.tb0_1 = Color_0(246, 237, 255);
    this.ub0_1 = Color_0(255, 251, 254);
    this.vb0_1 = Color_0(0, 0, 0);
    this.wb0_1 = Color_0(29, 25, 43);
    this.xb0_1 = Color_0(255, 255, 255);
    this.yb0_1 = Color_0(51, 45, 65);
    this.zb0_1 = Color_0(74, 68, 88);
    this.ab1_1 = Color_0(98, 91, 113);
    this.bb1_1 = Color_0(122, 114, 137);
    this.cb1_1 = Color_0(149, 141, 165);
    this.db1_1 = Color_0(176, 167, 192);
    this.eb1_1 = Color_0(204, 194, 220);
    this.fb1_1 = Color_0(232, 222, 248);
    this.gb1_1 = Color_0(246, 237, 255);
    this.hb1_1 = Color_0(255, 251, 254);
    this.ib1_1 = Color_0(0, 0, 0);
    this.jb1_1 = Color_0(49, 17, 29);
    this.kb1_1 = Color_0(255, 255, 255);
    this.lb1_1 = Color_0(73, 37, 50);
    this.mb1_1 = Color_0(99, 59, 72);
    this.nb1_1 = Color_0(125, 82, 96);
    this.ob1_1 = Color_0(152, 105, 119);
    this.pb1_1 = Color_0(181, 131, 146);
    this.qb1_1 = Color_0(210, 157, 172);
    this.rb1_1 = Color_0(239, 184, 200);
    this.sb1_1 = Color_0(255, 216, 228);
    this.tb1_1 = Color_0(255, 236, 241);
    this.ub1_1 = Color_0(255, 251, 250);
    this.vb1_1 = Color_0(255, 255, 255);
  }
  var PaletteTokens_instance;
  function PaletteTokens_getInstance() {
    if (PaletteTokens_instance == null)
      new PaletteTokens();
    return PaletteTokens_instance;
  }
  var ShapeKeyTokens_CornerExtraLarge_instance;
  var ShapeKeyTokens_CornerExtraLargeTop_instance;
  var ShapeKeyTokens_CornerExtraSmall_instance;
  var ShapeKeyTokens_CornerExtraSmallTop_instance;
  var ShapeKeyTokens_CornerFull_instance;
  var ShapeKeyTokens_CornerLarge_instance;
  var ShapeKeyTokens_CornerLargeEnd_instance;
  var ShapeKeyTokens_CornerLargeTop_instance;
  var ShapeKeyTokens_CornerMedium_instance;
  var ShapeKeyTokens_CornerNone_instance;
  var ShapeKeyTokens_CornerSmall_instance;
  var ShapeKeyTokens_entriesInitialized;
  function ShapeKeyTokens_initEntries() {
    if (ShapeKeyTokens_entriesInitialized)
      return Unit_instance;
    ShapeKeyTokens_entriesInitialized = true;
    ShapeKeyTokens_CornerExtraLarge_instance = new ShapeKeyTokens('CornerExtraLarge', 0);
    ShapeKeyTokens_CornerExtraLargeTop_instance = new ShapeKeyTokens('CornerExtraLargeTop', 1);
    ShapeKeyTokens_CornerExtraSmall_instance = new ShapeKeyTokens('CornerExtraSmall', 2);
    ShapeKeyTokens_CornerExtraSmallTop_instance = new ShapeKeyTokens('CornerExtraSmallTop', 3);
    ShapeKeyTokens_CornerFull_instance = new ShapeKeyTokens('CornerFull', 4);
    ShapeKeyTokens_CornerLarge_instance = new ShapeKeyTokens('CornerLarge', 5);
    ShapeKeyTokens_CornerLargeEnd_instance = new ShapeKeyTokens('CornerLargeEnd', 6);
    ShapeKeyTokens_CornerLargeTop_instance = new ShapeKeyTokens('CornerLargeTop', 7);
    ShapeKeyTokens_CornerMedium_instance = new ShapeKeyTokens('CornerMedium', 8);
    ShapeKeyTokens_CornerNone_instance = new ShapeKeyTokens('CornerNone', 9);
    ShapeKeyTokens_CornerSmall_instance = new ShapeKeyTokens('CornerSmall', 10);
  }
  function ShapeKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ShapeKeyTokens_CornerFull_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerFull_instance;
  }
  function ShapeTokens() {
    ShapeTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(28.0);
    tmp.law_1 = RoundedCornerShape(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_1 = _Dp___init__impl__ms3zkb(28.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_2 = _Dp___init__impl__ms3zkb(28.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$4 = _Dp___init__impl__ms3zkb(0.0);
    tmp_0.maw_1 = RoundedCornerShape_0(tmp_1, tmp_2, tmp_3, tmp$ret$4);
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$5 = _Dp___init__impl__ms3zkb(4.0);
    tmp_4.naw_1 = RoundedCornerShape(tmp$ret$5);
    var tmp_5 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_6 = _Dp___init__impl__ms3zkb(4.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_7 = _Dp___init__impl__ms3zkb(4.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_8 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$9 = _Dp___init__impl__ms3zkb(0.0);
    tmp_5.oaw_1 = RoundedCornerShape_0(tmp_6, tmp_7, tmp_8, tmp$ret$9);
    this.paw_1 = get_CircleShape();
    var tmp_9 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$10 = _Dp___init__impl__ms3zkb(16.0);
    tmp_9.qaw_1 = RoundedCornerShape(tmp$ret$10);
    var tmp_10 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_11 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_12 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_13 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$14 = _Dp___init__impl__ms3zkb(0.0);
    tmp_10.raw_1 = RoundedCornerShape_0(tmp_11, tmp_12, tmp_13, tmp$ret$14);
    var tmp_14 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_15 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_16 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_17 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$18 = _Dp___init__impl__ms3zkb(0.0);
    tmp_14.saw_1 = RoundedCornerShape_0(tmp_15, tmp_16, tmp_17, tmp$ret$18);
    var tmp_18 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$19 = _Dp___init__impl__ms3zkb(12.0);
    tmp_18.taw_1 = RoundedCornerShape(tmp$ret$19);
    this.uaw_1 = get_RectangleShape();
    var tmp_19 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$20 = _Dp___init__impl__ms3zkb(8.0);
    tmp_19.vaw_1 = RoundedCornerShape(tmp$ret$20);
  }
  var ShapeTokens_instance;
  function ShapeTokens_getInstance() {
    if (ShapeTokens_instance == null)
      new ShapeTokens();
    return ShapeTokens_instance;
  }
  function StateTokens() {
    this.cb2_1 = 0.16;
    this.db2_1 = 0.1;
    this.eb2_1 = 0.08;
    this.fb2_1 = 0.1;
  }
  var StateTokens_instance;
  function StateTokens_getInstance() {
    return StateTokens_instance;
  }
  function TypeScaleTokens() {
    TypeScaleTokens_instance = this;
    this.gb2_1 = TypefaceTokens_getInstance().eb5_1;
    this.hb2_1 = get_sp(24.0);
    this.ib2_1 = get_sp_0(16);
    this.jb2_1 = get_sp(0.5);
    this.kb2_1 = TypefaceTokens_getInstance().hb5_1;
    this.lb2_1 = TypefaceTokens_getInstance().eb5_1;
    this.mb2_1 = get_sp(20.0);
    this.nb2_1 = get_sp_0(14);
    this.ob2_1 = get_sp(0.2);
    this.pb2_1 = TypefaceTokens_getInstance().hb5_1;
    this.qb2_1 = TypefaceTokens_getInstance().eb5_1;
    this.rb2_1 = get_sp(16.0);
    this.sb2_1 = get_sp_0(12);
    this.tb2_1 = get_sp(0.4);
    this.ub2_1 = TypefaceTokens_getInstance().hb5_1;
    this.vb2_1 = TypefaceTokens_getInstance().db5_1;
    this.wb2_1 = get_sp(64.0);
    this.xb2_1 = get_sp_0(57);
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.TextUnit.unaryMinus' call
    var this_0 = get_sp(0.2);
    checkArithmetic(this_0);
    tmp.yb2_1 = pack(_TextUnit___get_rawType__impl__tu8yq5(this_0), -_TextUnit___get_value__impl__hpbx0k(this_0));
    this.zb2_1 = TypefaceTokens_getInstance().hb5_1;
    this.ab3_1 = TypefaceTokens_getInstance().db5_1;
    this.bb3_1 = get_sp(52.0);
    this.cb3_1 = get_sp_0(45);
    this.db3_1 = get_sp(0.0);
    this.eb3_1 = TypefaceTokens_getInstance().hb5_1;
    this.fb3_1 = TypefaceTokens_getInstance().db5_1;
    this.gb3_1 = get_sp(44.0);
    this.hb3_1 = get_sp_0(36);
    this.ib3_1 = get_sp(0.0);
    this.jb3_1 = TypefaceTokens_getInstance().hb5_1;
    this.kb3_1 = TypefaceTokens_getInstance().db5_1;
    this.lb3_1 = get_sp(40.0);
    this.mb3_1 = get_sp_0(32);
    this.nb3_1 = get_sp(0.0);
    this.ob3_1 = TypefaceTokens_getInstance().hb5_1;
    this.pb3_1 = TypefaceTokens_getInstance().db5_1;
    this.qb3_1 = get_sp(36.0);
    this.rb3_1 = get_sp_0(28);
    this.sb3_1 = get_sp(0.0);
    this.tb3_1 = TypefaceTokens_getInstance().hb5_1;
    this.ub3_1 = TypefaceTokens_getInstance().db5_1;
    this.vb3_1 = get_sp(32.0);
    this.wb3_1 = get_sp_0(24);
    this.xb3_1 = get_sp(0.0);
    this.yb3_1 = TypefaceTokens_getInstance().hb5_1;
    this.zb3_1 = TypefaceTokens_getInstance().eb5_1;
    this.ab4_1 = get_sp(20.0);
    this.bb4_1 = get_sp_0(14);
    this.cb4_1 = get_sp(0.1);
    this.db4_1 = TypefaceTokens_getInstance().gb5_1;
    this.eb4_1 = TypefaceTokens_getInstance().eb5_1;
    this.fb4_1 = get_sp(16.0);
    this.gb4_1 = get_sp_0(12);
    this.hb4_1 = get_sp(0.5);
    this.ib4_1 = TypefaceTokens_getInstance().gb5_1;
    this.jb4_1 = TypefaceTokens_getInstance().eb5_1;
    this.kb4_1 = get_sp(16.0);
    this.lb4_1 = get_sp_0(11);
    this.mb4_1 = get_sp(0.5);
    this.nb4_1 = TypefaceTokens_getInstance().gb5_1;
    this.ob4_1 = TypefaceTokens_getInstance().db5_1;
    this.pb4_1 = get_sp(28.0);
    this.qb4_1 = get_sp_0(22);
    this.rb4_1 = get_sp(0.0);
    this.sb4_1 = TypefaceTokens_getInstance().hb5_1;
    this.tb4_1 = TypefaceTokens_getInstance().eb5_1;
    this.ub4_1 = get_sp(24.0);
    this.vb4_1 = get_sp_0(16);
    this.wb4_1 = get_sp(0.2);
    this.xb4_1 = TypefaceTokens_getInstance().gb5_1;
    this.yb4_1 = TypefaceTokens_getInstance().eb5_1;
    this.zb4_1 = get_sp(20.0);
    this.ab5_1 = get_sp_0(14);
    this.bb5_1 = get_sp(0.1);
    this.cb5_1 = TypefaceTokens_getInstance().gb5_1;
  }
  var TypeScaleTokens_instance;
  function TypeScaleTokens_getInstance() {
    if (TypeScaleTokens_instance == null)
      new TypeScaleTokens();
    return TypeScaleTokens_instance;
  }
  function TypefaceTokens() {
    TypefaceTokens_instance = this;
    this.db5_1 = Companion_getInstance_9().l4p_1;
    this.eb5_1 = Companion_getInstance_9().l4p_1;
    this.fb5_1 = Companion_getInstance_10().a4p_1;
    this.gb5_1 = Companion_getInstance_10().y4o_1;
    this.hb5_1 = Companion_getInstance_10().x4o_1;
  }
  var TypefaceTokens_instance;
  function TypefaceTokens_getInstance() {
    if (TypefaceTokens_instance == null)
      new TypefaceTokens();
    return TypefaceTokens_instance;
  }
  var TypographyKeyTokens_BodyLarge_instance;
  var TypographyKeyTokens_BodyMedium_instance;
  var TypographyKeyTokens_BodySmall_instance;
  var TypographyKeyTokens_DisplayLarge_instance;
  var TypographyKeyTokens_DisplayMedium_instance;
  var TypographyKeyTokens_DisplaySmall_instance;
  var TypographyKeyTokens_HeadlineLarge_instance;
  var TypographyKeyTokens_HeadlineMedium_instance;
  var TypographyKeyTokens_HeadlineSmall_instance;
  var TypographyKeyTokens_LabelLarge_instance;
  var TypographyKeyTokens_LabelMedium_instance;
  var TypographyKeyTokens_LabelSmall_instance;
  var TypographyKeyTokens_TitleLarge_instance;
  var TypographyKeyTokens_TitleMedium_instance;
  var TypographyKeyTokens_TitleSmall_instance;
  var TypographyKeyTokens_entriesInitialized;
  function TypographyKeyTokens_initEntries() {
    if (TypographyKeyTokens_entriesInitialized)
      return Unit_instance;
    TypographyKeyTokens_entriesInitialized = true;
    TypographyKeyTokens_BodyLarge_instance = new TypographyKeyTokens('BodyLarge', 0);
    TypographyKeyTokens_BodyMedium_instance = new TypographyKeyTokens('BodyMedium', 1);
    TypographyKeyTokens_BodySmall_instance = new TypographyKeyTokens('BodySmall', 2);
    TypographyKeyTokens_DisplayLarge_instance = new TypographyKeyTokens('DisplayLarge', 3);
    TypographyKeyTokens_DisplayMedium_instance = new TypographyKeyTokens('DisplayMedium', 4);
    TypographyKeyTokens_DisplaySmall_instance = new TypographyKeyTokens('DisplaySmall', 5);
    TypographyKeyTokens_HeadlineLarge_instance = new TypographyKeyTokens('HeadlineLarge', 6);
    TypographyKeyTokens_HeadlineMedium_instance = new TypographyKeyTokens('HeadlineMedium', 7);
    TypographyKeyTokens_HeadlineSmall_instance = new TypographyKeyTokens('HeadlineSmall', 8);
    TypographyKeyTokens_LabelLarge_instance = new TypographyKeyTokens('LabelLarge', 9);
    TypographyKeyTokens_LabelMedium_instance = new TypographyKeyTokens('LabelMedium', 10);
    TypographyKeyTokens_LabelSmall_instance = new TypographyKeyTokens('LabelSmall', 11);
    TypographyKeyTokens_TitleLarge_instance = new TypographyKeyTokens('TitleLarge', 12);
    TypographyKeyTokens_TitleMedium_instance = new TypographyKeyTokens('TitleMedium', 13);
    TypographyKeyTokens_TitleSmall_instance = new TypographyKeyTokens('TitleSmall', 14);
  }
  function TypographyKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TypographyKeyTokens_LabelLarge_getInstance() {
    TypographyKeyTokens_initEntries();
    return TypographyKeyTokens_LabelLarge_instance;
  }
  function get_DefaultLineHeightStyle() {
    _init_properties_TypographyTokens_kt__by6b7t();
    return DefaultLineHeightStyle;
  }
  var DefaultLineHeightStyle;
  function get_DefaultTextStyle() {
    _init_properties_TypographyTokens_kt__by6b7t();
    return DefaultTextStyle;
  }
  var DefaultTextStyle;
  function TypographyTokens() {
    TypographyTokens_instance = this;
    var tmp = this;
    var tmp0_$this = get_DefaultTextStyle();
    var tmp1_fontFamily = TypeScaleTokens_getInstance().gb2_1;
    var tmp2_fontWeight = TypeScaleTokens_getInstance().kb2_1;
    var tmp3_fontSize = TypeScaleTokens_getInstance().ib2_1;
    var tmp4_lineHeight = TypeScaleTokens_getInstance().hb2_1;
    var tmp5_letterSpacing = TypeScaleTokens_getInstance().jb2_1;
    tmp.fax_1 = tmp0_$this.c4r(VOID, tmp3_fontSize, tmp2_fontWeight, VOID, VOID, tmp1_fontFamily, VOID, tmp5_letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight);
    var tmp_0 = this;
    var tmp0_$this_0 = get_DefaultTextStyle();
    var tmp1_fontFamily_0 = TypeScaleTokens_getInstance().lb2_1;
    var tmp2_fontWeight_0 = TypeScaleTokens_getInstance().pb2_1;
    var tmp3_fontSize_0 = TypeScaleTokens_getInstance().nb2_1;
    var tmp4_lineHeight_0 = TypeScaleTokens_getInstance().mb2_1;
    var tmp5_letterSpacing_0 = TypeScaleTokens_getInstance().ob2_1;
    tmp_0.gax_1 = tmp0_$this_0.c4r(VOID, tmp3_fontSize_0, tmp2_fontWeight_0, VOID, VOID, tmp1_fontFamily_0, VOID, tmp5_letterSpacing_0, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_0);
    var tmp_1 = this;
    var tmp0_$this_1 = get_DefaultTextStyle();
    var tmp1_fontFamily_1 = TypeScaleTokens_getInstance().qb2_1;
    var tmp2_fontWeight_1 = TypeScaleTokens_getInstance().ub2_1;
    var tmp3_fontSize_1 = TypeScaleTokens_getInstance().sb2_1;
    var tmp4_lineHeight_1 = TypeScaleTokens_getInstance().rb2_1;
    var tmp5_letterSpacing_1 = TypeScaleTokens_getInstance().tb2_1;
    tmp_1.hax_1 = tmp0_$this_1.c4r(VOID, tmp3_fontSize_1, tmp2_fontWeight_1, VOID, VOID, tmp1_fontFamily_1, VOID, tmp5_letterSpacing_1, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_1);
    var tmp_2 = this;
    var tmp0_$this_2 = get_DefaultTextStyle();
    var tmp1_fontFamily_2 = TypeScaleTokens_getInstance().vb2_1;
    var tmp2_fontWeight_2 = TypeScaleTokens_getInstance().zb2_1;
    var tmp3_fontSize_2 = TypeScaleTokens_getInstance().xb2_1;
    var tmp4_lineHeight_2 = TypeScaleTokens_getInstance().wb2_1;
    var tmp5_letterSpacing_2 = TypeScaleTokens_getInstance().yb2_1;
    tmp_2.iax_1 = tmp0_$this_2.c4r(VOID, tmp3_fontSize_2, tmp2_fontWeight_2, VOID, VOID, tmp1_fontFamily_2, VOID, tmp5_letterSpacing_2, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_2);
    var tmp_3 = this;
    var tmp0_$this_3 = get_DefaultTextStyle();
    var tmp1_fontFamily_3 = TypeScaleTokens_getInstance().ab3_1;
    var tmp2_fontWeight_3 = TypeScaleTokens_getInstance().eb3_1;
    var tmp3_fontSize_3 = TypeScaleTokens_getInstance().cb3_1;
    var tmp4_lineHeight_3 = TypeScaleTokens_getInstance().bb3_1;
    var tmp5_letterSpacing_3 = TypeScaleTokens_getInstance().db3_1;
    tmp_3.jax_1 = tmp0_$this_3.c4r(VOID, tmp3_fontSize_3, tmp2_fontWeight_3, VOID, VOID, tmp1_fontFamily_3, VOID, tmp5_letterSpacing_3, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_3);
    var tmp_4 = this;
    var tmp0_$this_4 = get_DefaultTextStyle();
    var tmp1_fontFamily_4 = TypeScaleTokens_getInstance().fb3_1;
    var tmp2_fontWeight_4 = TypeScaleTokens_getInstance().jb3_1;
    var tmp3_fontSize_4 = TypeScaleTokens_getInstance().hb3_1;
    var tmp4_lineHeight_4 = TypeScaleTokens_getInstance().gb3_1;
    var tmp5_letterSpacing_4 = TypeScaleTokens_getInstance().ib3_1;
    tmp_4.kax_1 = tmp0_$this_4.c4r(VOID, tmp3_fontSize_4, tmp2_fontWeight_4, VOID, VOID, tmp1_fontFamily_4, VOID, tmp5_letterSpacing_4, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_4);
    var tmp_5 = this;
    var tmp0_$this_5 = get_DefaultTextStyle();
    var tmp1_fontFamily_5 = TypeScaleTokens_getInstance().kb3_1;
    var tmp2_fontWeight_5 = TypeScaleTokens_getInstance().ob3_1;
    var tmp3_fontSize_5 = TypeScaleTokens_getInstance().mb3_1;
    var tmp4_lineHeight_5 = TypeScaleTokens_getInstance().lb3_1;
    var tmp5_letterSpacing_5 = TypeScaleTokens_getInstance().nb3_1;
    tmp_5.lax_1 = tmp0_$this_5.c4r(VOID, tmp3_fontSize_5, tmp2_fontWeight_5, VOID, VOID, tmp1_fontFamily_5, VOID, tmp5_letterSpacing_5, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_5);
    var tmp_6 = this;
    var tmp0_$this_6 = get_DefaultTextStyle();
    var tmp1_fontFamily_6 = TypeScaleTokens_getInstance().pb3_1;
    var tmp2_fontWeight_6 = TypeScaleTokens_getInstance().tb3_1;
    var tmp3_fontSize_6 = TypeScaleTokens_getInstance().rb3_1;
    var tmp4_lineHeight_6 = TypeScaleTokens_getInstance().qb3_1;
    var tmp5_letterSpacing_6 = TypeScaleTokens_getInstance().sb3_1;
    tmp_6.max_1 = tmp0_$this_6.c4r(VOID, tmp3_fontSize_6, tmp2_fontWeight_6, VOID, VOID, tmp1_fontFamily_6, VOID, tmp5_letterSpacing_6, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_6);
    var tmp_7 = this;
    var tmp0_$this_7 = get_DefaultTextStyle();
    var tmp1_fontFamily_7 = TypeScaleTokens_getInstance().ub3_1;
    var tmp2_fontWeight_7 = TypeScaleTokens_getInstance().yb3_1;
    var tmp3_fontSize_7 = TypeScaleTokens_getInstance().wb3_1;
    var tmp4_lineHeight_7 = TypeScaleTokens_getInstance().vb3_1;
    var tmp5_letterSpacing_7 = TypeScaleTokens_getInstance().xb3_1;
    tmp_7.nax_1 = tmp0_$this_7.c4r(VOID, tmp3_fontSize_7, tmp2_fontWeight_7, VOID, VOID, tmp1_fontFamily_7, VOID, tmp5_letterSpacing_7, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_7);
    var tmp_8 = this;
    var tmp0_$this_8 = get_DefaultTextStyle();
    var tmp1_fontFamily_8 = TypeScaleTokens_getInstance().zb3_1;
    var tmp2_fontWeight_8 = TypeScaleTokens_getInstance().db4_1;
    var tmp3_fontSize_8 = TypeScaleTokens_getInstance().bb4_1;
    var tmp4_lineHeight_8 = TypeScaleTokens_getInstance().ab4_1;
    var tmp5_letterSpacing_8 = TypeScaleTokens_getInstance().cb4_1;
    tmp_8.oax_1 = tmp0_$this_8.c4r(VOID, tmp3_fontSize_8, tmp2_fontWeight_8, VOID, VOID, tmp1_fontFamily_8, VOID, tmp5_letterSpacing_8, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_8);
    var tmp_9 = this;
    var tmp0_$this_9 = get_DefaultTextStyle();
    var tmp1_fontFamily_9 = TypeScaleTokens_getInstance().eb4_1;
    var tmp2_fontWeight_9 = TypeScaleTokens_getInstance().ib4_1;
    var tmp3_fontSize_9 = TypeScaleTokens_getInstance().gb4_1;
    var tmp4_lineHeight_9 = TypeScaleTokens_getInstance().fb4_1;
    var tmp5_letterSpacing_9 = TypeScaleTokens_getInstance().hb4_1;
    tmp_9.pax_1 = tmp0_$this_9.c4r(VOID, tmp3_fontSize_9, tmp2_fontWeight_9, VOID, VOID, tmp1_fontFamily_9, VOID, tmp5_letterSpacing_9, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_9);
    var tmp_10 = this;
    var tmp0_$this_10 = get_DefaultTextStyle();
    var tmp1_fontFamily_10 = TypeScaleTokens_getInstance().jb4_1;
    var tmp2_fontWeight_10 = TypeScaleTokens_getInstance().nb4_1;
    var tmp3_fontSize_10 = TypeScaleTokens_getInstance().lb4_1;
    var tmp4_lineHeight_10 = TypeScaleTokens_getInstance().kb4_1;
    var tmp5_letterSpacing_10 = TypeScaleTokens_getInstance().mb4_1;
    tmp_10.qax_1 = tmp0_$this_10.c4r(VOID, tmp3_fontSize_10, tmp2_fontWeight_10, VOID, VOID, tmp1_fontFamily_10, VOID, tmp5_letterSpacing_10, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_10);
    var tmp_11 = this;
    var tmp0_$this_11 = get_DefaultTextStyle();
    var tmp1_fontFamily_11 = TypeScaleTokens_getInstance().ob4_1;
    var tmp2_fontWeight_11 = TypeScaleTokens_getInstance().sb4_1;
    var tmp3_fontSize_11 = TypeScaleTokens_getInstance().qb4_1;
    var tmp4_lineHeight_11 = TypeScaleTokens_getInstance().pb4_1;
    var tmp5_letterSpacing_11 = TypeScaleTokens_getInstance().rb4_1;
    tmp_11.rax_1 = tmp0_$this_11.c4r(VOID, tmp3_fontSize_11, tmp2_fontWeight_11, VOID, VOID, tmp1_fontFamily_11, VOID, tmp5_letterSpacing_11, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_11);
    var tmp_12 = this;
    var tmp0_$this_12 = get_DefaultTextStyle();
    var tmp1_fontFamily_12 = TypeScaleTokens_getInstance().tb4_1;
    var tmp2_fontWeight_12 = TypeScaleTokens_getInstance().xb4_1;
    var tmp3_fontSize_12 = TypeScaleTokens_getInstance().vb4_1;
    var tmp4_lineHeight_12 = TypeScaleTokens_getInstance().ub4_1;
    var tmp5_letterSpacing_12 = TypeScaleTokens_getInstance().wb4_1;
    tmp_12.sax_1 = tmp0_$this_12.c4r(VOID, tmp3_fontSize_12, tmp2_fontWeight_12, VOID, VOID, tmp1_fontFamily_12, VOID, tmp5_letterSpacing_12, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_12);
    var tmp_13 = this;
    var tmp0_$this_13 = get_DefaultTextStyle();
    var tmp1_fontFamily_13 = TypeScaleTokens_getInstance().yb4_1;
    var tmp2_fontWeight_13 = TypeScaleTokens_getInstance().cb5_1;
    var tmp3_fontSize_13 = TypeScaleTokens_getInstance().ab5_1;
    var tmp4_lineHeight_13 = TypeScaleTokens_getInstance().zb4_1;
    var tmp5_letterSpacing_13 = TypeScaleTokens_getInstance().bb5_1;
    tmp_13.tax_1 = tmp0_$this_13.c4r(VOID, tmp3_fontSize_13, tmp2_fontWeight_13, VOID, VOID, tmp1_fontFamily_13, VOID, tmp5_letterSpacing_13, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_13);
  }
  var TypographyTokens_instance;
  function TypographyTokens_getInstance() {
    if (TypographyTokens_instance == null)
      new TypographyTokens();
    return TypographyTokens_instance;
  }
  var properties_initialized_TypographyTokens_kt_gw7fqt;
  function _init_properties_TypographyTokens_kt__by6b7t() {
    if (!properties_initialized_TypographyTokens_kt_gw7fqt) {
      properties_initialized_TypographyTokens_kt_gw7fqt = true;
      DefaultLineHeightStyle = new LineHeightStyle(Companion_getInstance_11().a4z_1, Companion_getInstance_12().y4y_1);
      DefaultTextStyle = Companion_getInstance_13().w4q_1.c4r(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, defaultPlatformTextStyle(), get_DefaultLineHeightStyle());
    }
  }
  var nextHash;
  function identityHashCode(instance) {
    if (instance == null) {
      return 0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var hashCode = instance['kotlinIdentityHashcodeValue$'];
    if (hashCode != null) {
      return hashCode;
    }
    var tmp;
    switch (typeof instance) {
      case 'object':
      case 'function':
        tmp = memoizeIdentityHashCode(instance);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('identity hash code for ' + typeof instance + ' is not supported');
    }
    return tmp;
  }
  function memoizeIdentityHashCode(instance) {
    var tmp0 = nextHash;
    nextHash = tmp0 + 1 | 0;
    var value = tmp0;
    var descriptor = new Object();
    descriptor.value = value;
    descriptor.writable = false;
    descriptor.configurable = false;
    descriptor.enumerable = false;
    Object.defineProperty(instance, 'kotlinIdentityHashcodeValue$', descriptor);
    return value;
  }
  function defaultPlatformTextStyle() {
    return null;
  }
  //region block: post-declaration
  protoOf(RippleNodeFactory).e99 = rememberUpdatedInstance;
  //endregion
  //region block: init
  MaterialTheme_instance = new MaterialTheme();
  CompatRippleTheme_instance = new CompatRippleTheme();
  ElevationDefaults_instance = new ElevationDefaults();
  StateTokens_instance = new StateTokens();
  nextHash = 1;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Button;
  _.$_$.b = MaterialTheme_0;
  _.$_$.c = Surface;
  _.$_$.d = Text;
  _.$_$.e = darkColorScheme;
  _.$_$.f = lightColorScheme;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-material3-material3.js.map
