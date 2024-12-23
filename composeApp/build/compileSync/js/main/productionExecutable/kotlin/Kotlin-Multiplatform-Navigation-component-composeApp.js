(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-material3-material3.js', './compose-multiplatform-core-navigation-navigation-compose.js', './compose-multiplatform-core-navigation-navigation-common.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './compose-multiplatform-core-compose-ui-ui-text.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-material3-material3.js'), require('./compose-multiplatform-core-navigation-navigation-compose.js'), require('./compose-multiplatform-core-navigation-navigation-common.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-Multiplatform-Navigation-component:composeApp'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Kotlin-Multiplatform-Navigation-component:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-Multiplatform-Navigation-component:composeApp'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'Kotlin-Multiplatform-Navigation-component:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-Multiplatform-Navigation-component:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'Kotlin-Multiplatform-Navigation-component:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-Multiplatform-Navigation-component:composeApp'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'Kotlin-Multiplatform-Navigation-component:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-Multiplatform-Navigation-component:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'Kotlin-Multiplatform-Navigation-component:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-material3-material3'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-Multiplatform-Navigation-component:composeApp'. Its dependency 'compose-multiplatform-core-compose-material3-material3' was not found. Please, check whether 'compose-multiplatform-core-compose-material3-material3' is loaded prior to 'Kotlin-Multiplatform-Navigation-component:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-navigation-navigation-compose'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-Multiplatform-Navigation-component:composeApp'. Its dependency 'compose-multiplatform-core-navigation-navigation-compose' was not found. Please, check whether 'compose-multiplatform-core-navigation-navigation-compose' is loaded prior to 'Kotlin-Multiplatform-Navigation-component:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-navigation-navigation-common'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-Multiplatform-Navigation-component:composeApp'. Its dependency 'compose-multiplatform-core-navigation-navigation-common' was not found. Please, check whether 'compose-multiplatform-core-navigation-navigation-common' is loaded prior to 'Kotlin-Multiplatform-Navigation-component:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-Multiplatform-Navigation-component:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'Kotlin-Multiplatform-Navigation-component:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-Multiplatform-Navigation-component:composeApp'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'Kotlin-Multiplatform-Navigation-component:composeApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-Multiplatform-Navigation-component:composeApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'Kotlin-Multiplatform-Navigation-component:composeApp'.");
    }
    globalThis['Kotlin-Multiplatform-Navigation-component:composeApp'] = factory(typeof globalThis['Kotlin-Multiplatform-Navigation-component:composeApp'] === 'undefined' ? {} : globalThis['Kotlin-Multiplatform-Navigation-component:composeApp'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['compose-multiplatform-core-navigation-navigation-compose'], globalThis['compose-multiplatform-core-navigation-navigation-common'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-ui-ui-text']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_androidx_navigation_navigation_compose, kotlin_org_jetbrains_androidx_navigation_navigation_common, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_ui_ui_text) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var initMetadataForObject = kotlin_kotlin.$_$.pa;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var Long = kotlin_kotlin.$_$.ue;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k;
  var isSystemInDarkTheme = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k;
  var KProperty0 = kotlin_kotlin.$_$.jc;
  var THROW_ISE = kotlin_kotlin.$_$.af;
  var getLocalDelegateReference = kotlin_kotlin.$_$.fa;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.b3;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y1;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var Surface = kotlin_org_jetbrains_compose_material3_material3.$_$.c;
  var MaterialTheme = kotlin_org_jetbrains_compose_material3_material3.$_$.b;
  var VOID = kotlin_kotlin.$_$.e;
  var lightColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.f;
  var darkColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var rememberNavController = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.c;
  var NavHost = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.a;
  var Companion_getInstance_0 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.u;
  var composable = kotlin_org_jetbrains_androidx_navigation_navigation_compose.$_$.b;
  var navArgument = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.k;
  var listOf = kotlin_kotlin.$_$.a7;
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.s4;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.r4;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h;
  var columnMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b;
  var get_currentCompositeKeyHash = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.x3;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.o4;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var isInterface = kotlin_kotlin.$_$.za;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var equals = kotlin_kotlin.$_$.ba;
  var ColumnScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n2;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.s;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j1;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.t;
  var Text = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  var Button = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.pf;
  var ComposeViewport = kotlin_org_jetbrains_compose_ui_ui.$_$.p3;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$AppKt, 'ComposableSingletons$AppKt');
  initMetadataForClass(StateScreens, 'StateScreens');
  initMetadataForObject(StateFirstScreen, 'StateFirstScreen', VOID, StateScreens);
  initMetadataForObject(StateSecondScreen, 'StateSecondScreen', VOID, StateScreens);
  initMetadataForObject(ComposableSingletons$BodyScreenKt, 'ComposableSingletons$BodyScreenKt');
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  //endregion
  function App($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v28(-1804089773);
    if (!($changed === 0) || !$composer_0.d25()) {
      if (isTraceInProgress()) {
        traceEventStart(-1804089773, $changed, -1, 'com.workdev.example.App (App.kt:23)');
      }
      AppTheme(ComposableSingletons$AppKt_getInstance().xbv_1, $composer_0, 6);
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
      tmp0_safe_receiver.i2d(App$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.b25(p0, p1);
    };
  }
  function ComposableSingletons$AppKt$lambda_1$lambda_ua4ft5($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.d25()) {
      if (isTraceInProgress()) {
        traceEventStart(-2034351416, $changed, -1, 'com.workdev.example.ComposableSingletons$AppKt.lambda-1.<anonymous> (App.kt:26)');
      }
      Navigation($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.n1z();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AppKt() {
    ComposableSingletons$AppKt_instance = this;
    var tmp = this;
    tmp.xbv_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-2034351416, false, ComposableSingletons$AppKt$lambda_1$lambda_ua4ft5));
  }
  var ComposableSingletons$AppKt_instance;
  function ComposableSingletons$AppKt_getInstance() {
    if (ComposableSingletons$AppKt_instance == null)
      new ComposableSingletons$AppKt();
    return ComposableSingletons$AppKt_instance;
  }
  function App$lambda($$changed) {
    return function ($composer, $force) {
      App($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var Seed;
  function get_PrimaryLight() {
    _init_properties_Color_kt__6h0l1r();
    return PrimaryLight;
  }
  var PrimaryLight;
  function get_OnPrimaryLight() {
    _init_properties_Color_kt__6h0l1r();
    return OnPrimaryLight;
  }
  var OnPrimaryLight;
  function get_PrimaryContainerLight() {
    _init_properties_Color_kt__6h0l1r();
    return PrimaryContainerLight;
  }
  var PrimaryContainerLight;
  function get_OnPrimaryContainerLight() {
    _init_properties_Color_kt__6h0l1r();
    return OnPrimaryContainerLight;
  }
  var OnPrimaryContainerLight;
  function get_SecondaryLight() {
    _init_properties_Color_kt__6h0l1r();
    return SecondaryLight;
  }
  var SecondaryLight;
  function get_OnSecondaryLight() {
    _init_properties_Color_kt__6h0l1r();
    return OnSecondaryLight;
  }
  var OnSecondaryLight;
  function get_SecondaryContainerLight() {
    _init_properties_Color_kt__6h0l1r();
    return SecondaryContainerLight;
  }
  var SecondaryContainerLight;
  function get_OnSecondaryContainerLight() {
    _init_properties_Color_kt__6h0l1r();
    return OnSecondaryContainerLight;
  }
  var OnSecondaryContainerLight;
  function get_TertiaryLight() {
    _init_properties_Color_kt__6h0l1r();
    return TertiaryLight;
  }
  var TertiaryLight;
  function get_OnTertiaryLight() {
    _init_properties_Color_kt__6h0l1r();
    return OnTertiaryLight;
  }
  var OnTertiaryLight;
  function get_TertiaryContainerLight() {
    _init_properties_Color_kt__6h0l1r();
    return TertiaryContainerLight;
  }
  var TertiaryContainerLight;
  function get_OnTertiaryContainerLight() {
    _init_properties_Color_kt__6h0l1r();
    return OnTertiaryContainerLight;
  }
  var OnTertiaryContainerLight;
  function get_ErrorLight() {
    _init_properties_Color_kt__6h0l1r();
    return ErrorLight;
  }
  var ErrorLight;
  function get_OnErrorLight() {
    _init_properties_Color_kt__6h0l1r();
    return OnErrorLight;
  }
  var OnErrorLight;
  function get_ErrorContainerLight() {
    _init_properties_Color_kt__6h0l1r();
    return ErrorContainerLight;
  }
  var ErrorContainerLight;
  function get_OnErrorContainerLight() {
    _init_properties_Color_kt__6h0l1r();
    return OnErrorContainerLight;
  }
  var OnErrorContainerLight;
  function get_BackgroundLight() {
    _init_properties_Color_kt__6h0l1r();
    return BackgroundLight;
  }
  var BackgroundLight;
  function get_OnBackgroundLight() {
    _init_properties_Color_kt__6h0l1r();
    return OnBackgroundLight;
  }
  var OnBackgroundLight;
  function get_SurfaceLight() {
    _init_properties_Color_kt__6h0l1r();
    return SurfaceLight;
  }
  var SurfaceLight;
  function get_OnSurfaceLight() {
    _init_properties_Color_kt__6h0l1r();
    return OnSurfaceLight;
  }
  var OnSurfaceLight;
  function get_SurfaceVariantLight() {
    _init_properties_Color_kt__6h0l1r();
    return SurfaceVariantLight;
  }
  var SurfaceVariantLight;
  function get_OnSurfaceVariantLight() {
    _init_properties_Color_kt__6h0l1r();
    return OnSurfaceVariantLight;
  }
  var OnSurfaceVariantLight;
  function get_OutlineLight() {
    _init_properties_Color_kt__6h0l1r();
    return OutlineLight;
  }
  var OutlineLight;
  function get_OutlineVariantLight() {
    _init_properties_Color_kt__6h0l1r();
    return OutlineVariantLight;
  }
  var OutlineVariantLight;
  function get_ScrimLight() {
    _init_properties_Color_kt__6h0l1r();
    return ScrimLight;
  }
  var ScrimLight;
  function get_InverseSurfaceLight() {
    _init_properties_Color_kt__6h0l1r();
    return InverseSurfaceLight;
  }
  var InverseSurfaceLight;
  function get_InverseOnSurfaceLight() {
    _init_properties_Color_kt__6h0l1r();
    return InverseOnSurfaceLight;
  }
  var InverseOnSurfaceLight;
  function get_InversePrimaryLight() {
    _init_properties_Color_kt__6h0l1r();
    return InversePrimaryLight;
  }
  var InversePrimaryLight;
  function get_SurfaceDimLight() {
    _init_properties_Color_kt__6h0l1r();
    return SurfaceDimLight;
  }
  var SurfaceDimLight;
  function get_SurfaceBrightLight() {
    _init_properties_Color_kt__6h0l1r();
    return SurfaceBrightLight;
  }
  var SurfaceBrightLight;
  function get_SurfaceContainerLowestLight() {
    _init_properties_Color_kt__6h0l1r();
    return SurfaceContainerLowestLight;
  }
  var SurfaceContainerLowestLight;
  function get_SurfaceContainerLowLight() {
    _init_properties_Color_kt__6h0l1r();
    return SurfaceContainerLowLight;
  }
  var SurfaceContainerLowLight;
  function get_SurfaceContainerLight() {
    _init_properties_Color_kt__6h0l1r();
    return SurfaceContainerLight;
  }
  var SurfaceContainerLight;
  function get_SurfaceContainerHighLight() {
    _init_properties_Color_kt__6h0l1r();
    return SurfaceContainerHighLight;
  }
  var SurfaceContainerHighLight;
  function get_SurfaceContainerHighestLight() {
    _init_properties_Color_kt__6h0l1r();
    return SurfaceContainerHighestLight;
  }
  var SurfaceContainerHighestLight;
  function get_PrimaryDark() {
    _init_properties_Color_kt__6h0l1r();
    return PrimaryDark;
  }
  var PrimaryDark;
  function get_OnPrimaryDark() {
    _init_properties_Color_kt__6h0l1r();
    return OnPrimaryDark;
  }
  var OnPrimaryDark;
  function get_PrimaryContainerDark() {
    _init_properties_Color_kt__6h0l1r();
    return PrimaryContainerDark;
  }
  var PrimaryContainerDark;
  function get_OnPrimaryContainerDark() {
    _init_properties_Color_kt__6h0l1r();
    return OnPrimaryContainerDark;
  }
  var OnPrimaryContainerDark;
  function get_SecondaryDark() {
    _init_properties_Color_kt__6h0l1r();
    return SecondaryDark;
  }
  var SecondaryDark;
  function get_OnSecondaryDark() {
    _init_properties_Color_kt__6h0l1r();
    return OnSecondaryDark;
  }
  var OnSecondaryDark;
  function get_SecondaryContainerDark() {
    _init_properties_Color_kt__6h0l1r();
    return SecondaryContainerDark;
  }
  var SecondaryContainerDark;
  function get_OnSecondaryContainerDark() {
    _init_properties_Color_kt__6h0l1r();
    return OnSecondaryContainerDark;
  }
  var OnSecondaryContainerDark;
  function get_TertiaryDark() {
    _init_properties_Color_kt__6h0l1r();
    return TertiaryDark;
  }
  var TertiaryDark;
  function get_OnTertiaryDark() {
    _init_properties_Color_kt__6h0l1r();
    return OnTertiaryDark;
  }
  var OnTertiaryDark;
  function get_TertiaryContainerDark() {
    _init_properties_Color_kt__6h0l1r();
    return TertiaryContainerDark;
  }
  var TertiaryContainerDark;
  function get_OnTertiaryContainerDark() {
    _init_properties_Color_kt__6h0l1r();
    return OnTertiaryContainerDark;
  }
  var OnTertiaryContainerDark;
  function get_ErrorDark() {
    _init_properties_Color_kt__6h0l1r();
    return ErrorDark;
  }
  var ErrorDark;
  function get_OnErrorDark() {
    _init_properties_Color_kt__6h0l1r();
    return OnErrorDark;
  }
  var OnErrorDark;
  function get_ErrorContainerDark() {
    _init_properties_Color_kt__6h0l1r();
    return ErrorContainerDark;
  }
  var ErrorContainerDark;
  function get_OnErrorContainerDark() {
    _init_properties_Color_kt__6h0l1r();
    return OnErrorContainerDark;
  }
  var OnErrorContainerDark;
  function get_BackgroundDark() {
    _init_properties_Color_kt__6h0l1r();
    return BackgroundDark;
  }
  var BackgroundDark;
  function get_OnBackgroundDark() {
    _init_properties_Color_kt__6h0l1r();
    return OnBackgroundDark;
  }
  var OnBackgroundDark;
  function get_SurfaceDark() {
    _init_properties_Color_kt__6h0l1r();
    return SurfaceDark;
  }
  var SurfaceDark;
  function get_OnSurfaceDark() {
    _init_properties_Color_kt__6h0l1r();
    return OnSurfaceDark;
  }
  var OnSurfaceDark;
  function get_SurfaceVariantDark() {
    _init_properties_Color_kt__6h0l1r();
    return SurfaceVariantDark;
  }
  var SurfaceVariantDark;
  function get_OnSurfaceVariantDark() {
    _init_properties_Color_kt__6h0l1r();
    return OnSurfaceVariantDark;
  }
  var OnSurfaceVariantDark;
  function get_OutlineDark() {
    _init_properties_Color_kt__6h0l1r();
    return OutlineDark;
  }
  var OutlineDark;
  function get_OutlineVariantDark() {
    _init_properties_Color_kt__6h0l1r();
    return OutlineVariantDark;
  }
  var OutlineVariantDark;
  function get_ScrimDark() {
    _init_properties_Color_kt__6h0l1r();
    return ScrimDark;
  }
  var ScrimDark;
  function get_InverseSurfaceDark() {
    _init_properties_Color_kt__6h0l1r();
    return InverseSurfaceDark;
  }
  var InverseSurfaceDark;
  function get_InverseOnSurfaceDark() {
    _init_properties_Color_kt__6h0l1r();
    return InverseOnSurfaceDark;
  }
  var InverseOnSurfaceDark;
  function get_InversePrimaryDark() {
    _init_properties_Color_kt__6h0l1r();
    return InversePrimaryDark;
  }
  var InversePrimaryDark;
  function get_SurfaceDimDark() {
    _init_properties_Color_kt__6h0l1r();
    return SurfaceDimDark;
  }
  var SurfaceDimDark;
  function get_SurfaceBrightDark() {
    _init_properties_Color_kt__6h0l1r();
    return SurfaceBrightDark;
  }
  var SurfaceBrightDark;
  function get_SurfaceContainerLowestDark() {
    _init_properties_Color_kt__6h0l1r();
    return SurfaceContainerLowestDark;
  }
  var SurfaceContainerLowestDark;
  function get_SurfaceContainerLowDark() {
    _init_properties_Color_kt__6h0l1r();
    return SurfaceContainerLowDark;
  }
  var SurfaceContainerLowDark;
  function get_SurfaceContainerDark() {
    _init_properties_Color_kt__6h0l1r();
    return SurfaceContainerDark;
  }
  var SurfaceContainerDark;
  function get_SurfaceContainerHighDark() {
    _init_properties_Color_kt__6h0l1r();
    return SurfaceContainerHighDark;
  }
  var SurfaceContainerHighDark;
  function get_SurfaceContainerHighestDark() {
    _init_properties_Color_kt__6h0l1r();
    return SurfaceContainerHighestDark;
  }
  var SurfaceContainerHighestDark;
  var properties_initialized_Color_kt_bdybnx;
  function _init_properties_Color_kt__6h0l1r() {
    if (!properties_initialized_Color_kt_bdybnx) {
      properties_initialized_Color_kt_bdybnx = true;
      Seed = Color(new Long(-14863017, 0));
      PrimaryLight = Color(new Long(-12034172, 0));
      OnPrimaryLight = Color(new Long(-1, 0));
      PrimaryContainerLight = Color(new Long(-2759681, 0));
      OnPrimaryContainerLight = Color(new Long(-13613206, 0));
      SecondaryLight = Color(new Long(-13933435, 0));
      OnSecondaryLight = Color(new Long(-1, 0));
      SecondaryContainerLight = Color(new Long(-3676161, 0));
      OnSecondaryContainerLight = Color(new Long(-16364437, 0));
      TertiaryLight = Color(new Long(-13277592, 0));
      OnTertiaryLight = Color(new Long(-1, 0));
      TertiaryContainerLight = Color(new Long(-4592402, 0));
      OnTertiaryContainerLight = Color(new Long(-15053232, 0));
      ErrorLight = Color(new Long(-4516564, 0));
      OnErrorLight = Color(new Long(-1, 0));
      ErrorContainerLight = Color(new Long(-9512, 0));
      OnErrorContainerLight = Color(new Long(-12517369, 0));
      BackgroundLight = Color(new Long(-394759, 0));
      OnBackgroundLight = Color(new Long(-15066084, 0));
      SurfaceLight = Color(new Long(-394759, 0));
      OnSurfaceLight = Color(new Long(-15066084, 0));
      SurfaceVariantLight = Color(new Long(-2300455, 0));
      OnSurfaceVariantLight = Color(new Long(-12564159, 0));
      OutlineLight = Color(new Long(-9340560, 0));
      OutlineVariantLight = Color(new Long(-4142658, 0));
      ScrimLight = Color(new Long(-16777216, 0));
      InverseSurfaceLight = Color(new Long(-13684431, 0));
      InverseOnSurfaceLight = Color(new Long(-986639, 0));
      InversePrimaryLight = Color(new Long(-5191695, 0));
      SurfaceDimLight = Color(new Long(-2434342, 0));
      SurfaceBrightLight = Color(new Long(-394759, 0));
      SurfaceContainerLowestLight = Color(new Long(-1, 0));
      SurfaceContainerLowLight = Color(new Long(-789516, 0));
      SurfaceContainerLight = Color(new Long(-1118482, 0));
      SurfaceContainerHighLight = Color(new Long(-1513240, 0));
      SurfaceContainerHighestLight = Color(new Long(-1907998, 0));
      PrimaryDark = Color(new Long(-5191695, 0));
      OnPrimaryDark = Color(new Long(-15191725, 0));
      PrimaryContainerDark = Color(new Long(-13613206, 0));
      OnPrimaryContainerDark = Color(new Long(-2759681, 0));
      SecondaryDark = Color(new Long(-6763022, 0));
      OnSecondaryDark = Color(new Long(-16763828, 0));
      SecondaryContainerDark = Color(new Long(-16364437, 0));
      OnSecondaryContainerDark = Color(new Long(-3676161, 0));
      TertiaryDark = Color(new Long(-6369327, 0));
      OnTertiaryDark = Color(new Long(-16763079, 0));
      TertiaryContainerDark = Color(new Long(-15053232, 0));
      OnTertiaryContainerDark = Color(new Long(-4592402, 0));
      ErrorDark = Color(new Long(-19535, 0));
      OnErrorDark = Color(new Long(-9961455, 0));
      ErrorContainerDark = Color(new Long(-7208932, 0));
      OnErrorContainerDark = Color(new Long(-9512, 0));
      BackgroundDark = Color(new Long(-15592428, 0));
      OnBackgroundDark = Color(new Long(-1907998, 0));
      SurfaceDark = Color(new Long(-15592428, 0));
      OnSurfaceDark = Color(new Long(-1907998, 0));
      SurfaceVariantDark = Color(new Long(-12564159, 0));
      OnSurfaceVariantDark = Color(new Long(-4142658, 0));
      OutlineDark = Color(new Long(-7695479, 0));
      OutlineVariantDark = Color(new Long(-12564159, 0));
      ScrimDark = Color(new Long(-16777216, 0));
      InverseSurfaceDark = Color(new Long(-1907998, 0));
      InverseOnSurfaceDark = Color(new Long(-13684431, 0));
      InversePrimaryDark = Color(new Long(-12034172, 0));
      SurfaceDimDark = Color(new Long(-15592428, 0));
      SurfaceBrightDark = Color(new Long(-13158086, 0));
      SurfaceContainerLowestDark = Color(new Long(-15986929, 0));
      SurfaceContainerLowDark = Color(new Long(-15066084, 0));
      SurfaceContainerDark = Color(new Long(-14802912, 0));
      SurfaceContainerHighDark = Color(new Long(-14144981, 0));
      SurfaceContainerHighestDark = Color(new Long(-13421259, 0));
    }
  }
  function get_LightColorScheme() {
    _init_properties_Theme_kt__w31tqv();
    return LightColorScheme;
  }
  var LightColorScheme;
  function get_DarkColorScheme() {
    _init_properties_Theme_kt__w31tqv();
    return DarkColorScheme;
  }
  var DarkColorScheme;
  function get_LocalThemeIsDark() {
    _init_properties_Theme_kt__w31tqv();
    return LocalThemeIsDark;
  }
  var LocalThemeIsDark;
  function AppTheme(content, $composer, $changed) {
    _init_properties_Theme_kt__w31tqv();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v28(-1530142142);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m26(content) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.d25()) {
      if (isTraceInProgress()) {
        traceEventStart(-1530142142, $dirty, -1, 'com.workdev.example.theme.AppTheme (Theme.kt:90)');
      }
      var systemIsDark = isSystemInDarkTheme($composer_0, 0);
      $composer_0.j25(-1344495585);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.n26(systemIsDark);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.d27();
      var tmp;
      if (invalid || it === Companion_getInstance().w1z_1) {
        // Inline function 'com.workdev.example.theme.AppTheme.<anonymous>' call
        var value = mutableStateOf(systemIsDark);
        tmp0.o27(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.l25();
      var isDarkState = tmp0_group;
      var tmp_1 = get_LocalThemeIsDark().b2d(isDarkState);
      // Inline function 'kotlin.run' call
      // Inline function 'com.workdev.example.theme.AppTheme.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(262182658, true, AppTheme$lambda(isDarkState, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.m1w(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.d27();
      var tmp_2;
      if (invalid_0 || it_0 === Companion_getInstance().w1z_1) {
        // Inline function 'com.workdev.example.theme.AppTheme.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.o27(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmp0_0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      CompositionLocalProvider(tmp_1, tmp0_0, $composer_0, 56);
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
      tmp1_safe_receiver.i2d(AppTheme$lambda_0(content, $changed));
    }
  }
  function AppTheme$_anonymous_$_anonymous_$lambda$0_r74xel($isDark$delegate) {
    _init_properties_Theme_kt__w31tqv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('isDark', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $isDark$delegate.v();
  }
  function LocalThemeIsDark$lambda() {
    _init_properties_Theme_kt__w31tqv();
    return mutableStateOf(true);
  }
  function AppTheme$lambda$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.d25()) {
        if (isTraceInProgress()) {
          traceEventStart(-1394106666, $changed, -1, 'com.workdev.example.theme.AppTheme.<anonymous>.<anonymous> (Theme.kt:100)');
        }
        var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
        var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
        Surface(null, null, tmp_0, tmp_1, tmp_2, tmp_3, null, $content, $composer_0, 0, 127);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
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
  function AppTheme$lambda($isDarkState, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.d25()) {
        if (isTraceInProgress()) {
          traceEventStart(262182658, $changed, -1, 'com.workdev.example.theme.AppTheme.<anonymous> (Theme.kt:96)');
        }
        var isDark$delegate = $isDarkState;
        SystemAppearance(!AppTheme$_anonymous_$_anonymous_$lambda$0_r74xel(isDark$delegate), $composer_0, 0);
        var tmp_0 = AppTheme$_anonymous_$_anonymous_$lambda$0_r74xel(isDark$delegate) ? get_DarkColorScheme() : get_LightColorScheme();
        // Inline function 'kotlin.run' call
        // Inline function 'com.workdev.example.theme.AppTheme.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-1394106666, true, AppTheme$lambda$lambda($content), $composer_0, 54);
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
          // Inline function 'com.workdev.example.theme.AppTheme.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
          $composer_1.o27(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        MaterialTheme(tmp_0, null, null, tmp0, $composer_0, 3072, 6);
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
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.b25(p0, p1);
    };
  }
  function AppTheme$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppTheme($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Theme_kt_uwj6hl;
  function _init_properties_Theme_kt__w31tqv() {
    if (!properties_initialized_Theme_kt_uwj6hl) {
      properties_initialized_Theme_kt_uwj6hl = true;
      var tmp0_primary = get_PrimaryLight();
      var tmp1_onPrimary = get_OnPrimaryLight();
      var tmp2_primaryContainer = get_PrimaryContainerLight();
      var tmp3_onPrimaryContainer = get_OnPrimaryContainerLight();
      var tmp4_secondary = get_SecondaryLight();
      var tmp5_onSecondary = get_OnSecondaryLight();
      var tmp6_secondaryContainer = get_SecondaryContainerLight();
      var tmp7_onSecondaryContainer = get_OnSecondaryContainerLight();
      var tmp8_tertiary = get_TertiaryLight();
      var tmp9_onTertiary = get_OnTertiaryLight();
      var tmp10_tertiaryContainer = get_TertiaryContainerLight();
      var tmp11_onTertiaryContainer = get_OnTertiaryContainerLight();
      var tmp12_error = get_ErrorLight();
      var tmp13_onError = get_OnErrorLight();
      var tmp14_errorContainer = get_ErrorContainerLight();
      var tmp15_onErrorContainer = get_OnErrorContainerLight();
      var tmp16_background = get_BackgroundLight();
      var tmp17_onBackground = get_OnBackgroundLight();
      var tmp18_surface = get_SurfaceLight();
      var tmp19_onSurface = get_OnSurfaceLight();
      var tmp20_surfaceVariant = get_SurfaceVariantLight();
      var tmp21_onSurfaceVariant = get_OnSurfaceVariantLight();
      var tmp22_outline = get_OutlineLight();
      var tmp23_outlineVariant = get_OutlineVariantLight();
      var tmp24_scrim = get_ScrimLight();
      var tmp25_inverseSurface = get_InverseSurfaceLight();
      var tmp26_inverseOnSurface = get_InverseOnSurfaceLight();
      var tmp27_inversePrimary = get_InversePrimaryLight();
      var tmp28_surfaceDim = get_SurfaceDimLight();
      var tmp29_surfaceBright = get_SurfaceBrightLight();
      var tmp30_surfaceContainerLowest = get_SurfaceContainerLowestLight();
      var tmp31_surfaceContainerLow = get_SurfaceContainerLowLight();
      var tmp32_surfaceContainer = get_SurfaceContainerLight();
      var tmp33_surfaceContainerHigh = get_SurfaceContainerHighLight();
      var tmp34_surfaceContainerHighest = get_SurfaceContainerHighestLight();
      LightColorScheme = lightColorScheme(tmp0_primary, tmp1_onPrimary, tmp2_primaryContainer, tmp3_onPrimaryContainer, tmp27_inversePrimary, tmp4_secondary, tmp5_onSecondary, tmp6_secondaryContainer, tmp7_onSecondaryContainer, tmp8_tertiary, tmp9_onTertiary, tmp10_tertiaryContainer, tmp11_onTertiaryContainer, tmp16_background, tmp17_onBackground, tmp18_surface, tmp19_onSurface, tmp20_surfaceVariant, tmp21_onSurfaceVariant, VOID, tmp25_inverseSurface, tmp26_inverseOnSurface, tmp12_error, tmp13_onError, tmp14_errorContainer, tmp15_onErrorContainer, tmp22_outline, tmp23_outlineVariant, tmp24_scrim, tmp29_surfaceBright, tmp32_surfaceContainer, tmp33_surfaceContainerHigh, tmp34_surfaceContainerHighest, tmp31_surfaceContainerLow, tmp30_surfaceContainerLowest, tmp28_surfaceDim);
      var tmp0_primary_0 = get_PrimaryDark();
      var tmp1_onPrimary_0 = get_OnPrimaryDark();
      var tmp2_primaryContainer_0 = get_PrimaryContainerDark();
      var tmp3_onPrimaryContainer_0 = get_OnPrimaryContainerDark();
      var tmp4_secondary_0 = get_SecondaryDark();
      var tmp5_onSecondary_0 = get_OnSecondaryDark();
      var tmp6_secondaryContainer_0 = get_SecondaryContainerDark();
      var tmp7_onSecondaryContainer_0 = get_OnSecondaryContainerDark();
      var tmp8_tertiary_0 = get_TertiaryDark();
      var tmp9_onTertiary_0 = get_OnTertiaryDark();
      var tmp10_tertiaryContainer_0 = get_TertiaryContainerDark();
      var tmp11_onTertiaryContainer_0 = get_OnTertiaryContainerDark();
      var tmp12_error_0 = get_ErrorDark();
      var tmp13_onError_0 = get_OnErrorDark();
      var tmp14_errorContainer_0 = get_ErrorContainerDark();
      var tmp15_onErrorContainer_0 = get_OnErrorContainerDark();
      var tmp16_background_0 = get_BackgroundDark();
      var tmp17_onBackground_0 = get_OnBackgroundDark();
      var tmp18_surface_0 = get_SurfaceDark();
      var tmp19_onSurface_0 = get_OnSurfaceDark();
      var tmp20_surfaceVariant_0 = get_SurfaceVariantDark();
      var tmp21_onSurfaceVariant_0 = get_OnSurfaceVariantDark();
      var tmp22_outline_0 = get_OutlineDark();
      var tmp23_outlineVariant_0 = get_OutlineVariantDark();
      var tmp24_scrim_0 = get_ScrimDark();
      var tmp25_inverseSurface_0 = get_InverseSurfaceDark();
      var tmp26_inverseOnSurface_0 = get_InverseOnSurfaceDark();
      var tmp27_inversePrimary_0 = get_InversePrimaryDark();
      var tmp28_surfaceDim_0 = get_SurfaceDimDark();
      var tmp29_surfaceBright_0 = get_SurfaceBrightDark();
      var tmp30_surfaceContainerLowest_0 = get_SurfaceContainerLowestDark();
      var tmp31_surfaceContainerLow_0 = get_SurfaceContainerLowDark();
      var tmp32_surfaceContainer_0 = get_SurfaceContainerDark();
      var tmp33_surfaceContainerHigh_0 = get_SurfaceContainerHighDark();
      var tmp34_surfaceContainerHighest_0 = get_SurfaceContainerHighestDark();
      DarkColorScheme = darkColorScheme(tmp0_primary_0, tmp1_onPrimary_0, tmp2_primaryContainer_0, tmp3_onPrimaryContainer_0, tmp27_inversePrimary_0, tmp4_secondary_0, tmp5_onSecondary_0, tmp6_secondaryContainer_0, tmp7_onSecondaryContainer_0, tmp8_tertiary_0, tmp9_onTertiary_0, tmp10_tertiaryContainer_0, tmp11_onTertiaryContainer_0, tmp16_background_0, tmp17_onBackground_0, tmp18_surface_0, tmp19_onSurface_0, tmp20_surfaceVariant_0, tmp21_onSurfaceVariant_0, VOID, tmp25_inverseSurface_0, tmp26_inverseOnSurface_0, tmp12_error_0, tmp13_onError_0, tmp14_errorContainer_0, tmp15_onErrorContainer_0, tmp22_outline_0, tmp23_outlineVariant_0, tmp24_scrim_0, tmp29_surfaceBright_0, tmp32_surfaceContainer_0, tmp33_surfaceContainerHigh_0, tmp34_surfaceContainerHighest_0, tmp31_surfaceContainerLow_0, tmp30_surfaceContainerLowest_0, tmp28_surfaceDim_0);
      LocalThemeIsDark = compositionLocalOf(VOID, LocalThemeIsDark$lambda);
    }
  }
  function Navigation($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v28(-322570921);
    if (!($changed === 0) || !$composer_0.d25()) {
      if (isTraceInProgress()) {
        traceEventStart(-322570921, $changed, -1, 'com.workdev.example.ui.Navigation.Navigation (Navigation.kt:13)');
      }
      var navController = rememberNavController([], $composer_0, 0);
      var tmp = StateFirstScreen_getInstance().ybv_1;
      $composer_0.j25(1587933989);
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.m26(navController);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = tmp0.d27();
      var tmp_0;
      if (invalid || it === Companion_getInstance().w1z_1) {
        // Inline function 'com.workdev.example.ui.Navigation.Navigation.<anonymous>' call
        var value = Navigation$lambda(navController);
        tmp0.o27(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.l25();
      NavHost(navController, tmp, null, null, null, null, null, null, null, null, tmp0_group, $composer_0, 0, 0, 1020);
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
      tmp1_safe_receiver.i2d(Navigation$lambda_0($changed));
    }
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.i3e(p0, p1, p2, p3);
    };
  }
  function Navigation$lambda$lambda($navController) {
    return function ($this$composable, it, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1448306042, $changed, -1, 'com.workdev.example.ui.Navigation.Navigation.<anonymous>.<anonymous>.<anonymous> (Navigation.kt:22)');
      }
      FirstScreen($navController, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Navigation$lambda$lambda_0($this$navArgument) {
    $this$navArgument.nba(Companion_getInstance_0().cba_1);
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.i3e(p0, p1, p2, p3);
    };
  }
  function Navigation$lambda$lambda_1($navController) {
    return function ($this$composable, backStackEntry, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1185026033, $changed, -1, 'com.workdev.example.ui.Navigation.Navigation.<anonymous>.<anonymous>.<anonymous> (Navigation.kt:32)');
      }
      SecondScreen($navController, backStackEntry, $composer_0, 112 & $changed);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Navigation$lambda($navController) {
    return function ($this$NavHost) {
      var tmp = StateFirstScreen_getInstance().ybv_1;
      composable($this$NavHost, tmp, VOID, VOID, VOID, VOID, VOID, VOID, VOID, ComposableLambda$invoke$ref_2(composableLambdaInstance(1448306042, true, Navigation$lambda$lambda($navController))));
      var tmp_0 = StateSecondScreen_getInstance().ybv_1 + '/{text}';
      var tmp_1 = listOf(navArgument('text', Navigation$lambda$lambda_0));
      composable($this$NavHost, tmp_0, tmp_1, VOID, VOID, VOID, VOID, VOID, VOID, ComposableLambda$invoke$ref_3(composableLambdaInstance(1185026033, true, Navigation$lambda$lambda_1($navController))));
      return Unit_instance;
    };
  }
  function Navigation$lambda_0($$changed) {
    return function ($composer, $force) {
      Navigation($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var com_workdev_example_ui_Navigation_StateScreens_StateFirstScreen$stable;
  var com_workdev_example_ui_Navigation_StateScreens_StateSecondScreen$stable;
  var com_workdev_example_ui_Navigation_StateScreens$stable;
  function StateFirstScreen() {
    StateFirstScreen_instance = this;
    StateScreens.call(this, 'FirstScreen');
  }
  var StateFirstScreen_instance;
  function StateFirstScreen_getInstance() {
    if (StateFirstScreen_instance == null)
      new StateFirstScreen();
    return StateFirstScreen_instance;
  }
  function StateSecondScreen() {
    StateSecondScreen_instance = this;
    StateScreens.call(this, 'SecondScreen');
  }
  var StateSecondScreen_instance;
  function StateSecondScreen_getInstance() {
    if (StateSecondScreen_instance == null)
      new StateSecondScreen();
    return StateSecondScreen_instance;
  }
  function StateScreens(route) {
    this.ybv_1 = route;
  }
  function BodyScreen(Label, Labe_lbtn, navController, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v28(-2104049453);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1w(Label) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1w(Labe_lbtn) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.m26(navController) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.d25()) {
      if (isTraceInProgress()) {
        traceEventStart(-2104049453, $dirty, -1, 'com.workdev.example.ui.Screens.FirstScreen.BodyScreen (BodyScreen.kt:20)');
      }
      TextScreen(Label, Labe_lbtn, navController, $composer_0, 14 & $dirty | 112 & $dirty | 896 & $dirty);
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
      tmp0_safe_receiver.i2d(BodyScreen$lambda(Label, Labe_lbtn, navController, $changed));
    }
  }
  function TextScreen(Label, Labe_lbtn, navController, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v28(2085704488);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1w(Label) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m1w(Labe_lbtn) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.m26(navController) ? 256 : 128);
    if (!(($dirty & 147) === 146) || !$composer_0.d25()) {
      if (isTraceInProgress()) {
        traceEventStart(2085704488, $dirty, -1, 'com.workdev.example.ui.Screens.FirstScreen.TextScreen (BodyScreen.kt:32)');
      }
      var tmp0_modifier = fillMaxSize(Companion_instance);
      var tmp1_horizontalAlignment = Companion_getInstance_1().w59_1;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = tmp0_modifier;
      var verticalArrangement = Arrangement_getInstance().o8i_1;
      var horizontalAlignment = tmp1_horizontalAlignment;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier = Companion_instance;
      if (!((0 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().m8i_1;
      if (!((0 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().v59_1;
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 438 >> 3 | 112 & 438 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.b27();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0 = Companion_getInstance_2().r6f_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
      var tmp = $composer_3.e25();
      if (!isInterface(tmp, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().w6f_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().v6f_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().z6f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.s25() || !equals($this$with.d27(), compositeKeyHash)) {
        $this$with.o27(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).g26(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().t6f_1);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'com.workdev.example.ui.Screens.FirstScreen.TextScreen.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp0_style = TextStyle_init_$Create$(Companion_getInstance_3().x44_1);
      var tmp1_fontSize = get_sp(30);
      var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text(Label, null, tmp_0, tmp1_fontSize, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, tmp0_style, $composer_5, 3072 | 14 & $dirty, 1572864, 65526);
      $composer_5.j25(-1065187994);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.m26(navController);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_5.d27();
      var tmp_4;
      if (invalid || it === Companion_getInstance().w1z_1) {
        // Inline function 'com.workdev.example.ui.Screens.FirstScreen.TextScreen.<anonymous>.<anonymous>' call
        var value = TextScreen$lambda(navController);
        $composer_5.o27(value);
        tmp_4 = value;
      } else {
        tmp_4 = it;
      }
      var tmp_5 = tmp_4;
      var tmp0_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_5.l25();
      // Inline function 'kotlin.run' call
      // Inline function 'com.workdev.example.ui.Screens.FirstScreen.TextScreen.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(557963150, true, TextScreen$lambda_0(Labe_lbtn), $composer_5, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_6 = $composer_5;
      sourceInformationMarkerStart($composer_6, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_6.m1w(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_6.d27();
      var tmp_6;
      if (invalid_0 || it_0 === Companion_getInstance().w1z_1) {
        // Inline function 'com.workdev.example.ui.Screens.FirstScreen.TextScreen.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_4(dispatchReceiver);
        $composer_6.o27(value_0);
        tmp_6 = value_0;
      } else {
        tmp_6 = it_0;
      }
      var tmp_7 = tmp_6;
      var tmp0_0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      sourceInformationMarkerEnd($composer_6);
      Button(tmp0_group, null, false, null, null, null, null, null, null, tmp0_0, $composer_5, 805306368, 510);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.d26();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
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
      tmp0_safe_receiver.i2d(TextScreen$lambda_1(Label, Labe_lbtn, navController, $changed));
    }
  }
  function BodyScreen$lambda($Label, $Labe_lbtn, $navController, $$changed) {
    return function ($composer, $force) {
      BodyScreen($Label, $Labe_lbtn, $navController, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function TextScreen$lambda($navController) {
    return function () {
      $navController.vbo(StateSecondScreen_getInstance().ybv_1 + '/Hello Second Screen');
      return Unit_instance;
    };
  }
  function TextScreen$lambda_0($Labe_lbtn) {
    return function ($this$Button, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.d25()) {
        if (isTraceInProgress()) {
          traceEventStart(557963150, $changed, -1, 'com.workdev.example.ui.Screens.FirstScreen.TextScreen.<anonymous>.<anonymous> (BodyScreen.kt:54)');
        }
        var tmp0_style = TextStyle_init_$Create$(Companion_getInstance_3().x44_1);
        var tmp1_fontSize = get_sp(30);
        var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_3 = _TextOverflow___init__impl__obguoe(0);
        Text($Labe_lbtn, null, tmp_0, tmp1_fontSize, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, tmp0_style, $composer_0, 3072, 1572864, 65526);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.n1z();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.h3e(p0, p1, p2);
    };
  }
  function TextScreen$lambda_1($Label, $Labe_lbtn, $navController, $$changed) {
    return function ($composer, $force) {
      TextScreen($Label, $Labe_lbtn, $navController, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function FirstScreen(navController, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v28(1712505475);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m26(navController) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.d25()) {
      if (isTraceInProgress()) {
        traceEventStart(1712505475, $dirty, -1, 'com.workdev.example.ui.Screens.FirstScreen.FirstScreen (FirstScreen.kt:7)');
      }
      BodyScreen('Hello First Screen !', 'Click here', navController, $composer_0, 54 | 896 & $dirty << 6);
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
      tmp0_safe_receiver.i2d(FirstScreen$lambda(navController, $changed));
    }
  }
  function FirstScreen$lambda($navController, $$changed) {
    return function ($composer, $force) {
      FirstScreen($navController, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function BodyScreen_0(text, navController, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v28(-732887748);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1w(text) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m26(navController) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.d25()) {
      if (isTraceInProgress()) {
        traceEventStart(-732887748, $dirty, -1, 'com.workdev.example.ui.Screens.SecondScreen.BodyScreen (BodyScreen.kt:19)');
      }
      TextScreen_0(text, navController, $composer_0, 14 & $dirty | 112 & $dirty);
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
      tmp0_safe_receiver.i2d(BodyScreen$lambda_0(text, navController, $changed));
    }
  }
  function TextScreen_0(text, navController, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v28(-2002175151);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m1w(text) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m26(navController) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.d25()) {
      if (isTraceInProgress()) {
        traceEventStart(-2002175151, $dirty, -1, 'com.workdev.example.ui.Screens.SecondScreen.TextScreen (BodyScreen.kt:40)');
      }
      var tmp0_modifier = fillMaxSize(Companion_instance);
      var tmp1_horizontalAlignment = Companion_getInstance_1().w59_1;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = tmp0_modifier;
      var verticalArrangement = Arrangement_getInstance().o8i_1;
      var horizontalAlignment = tmp1_horizontalAlignment;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, -483455358, 'CC(Column)P(2,3,1)86@4330L61,87@4396L133:Column.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier = Companion_instance;
      if (!((0 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().m8i_1;
      if (!((0 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().v59_1;
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 438 >> 3 | 112 & 438 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      sourceInformationMarkerStart($composer_2, -1323940314, 'CC(Layout)P(!1,2)79@3208L23,82@3359L411:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHash($composer_2, 0);
      var localMap = $composer_2.b27();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0 = Companion_getInstance_2().r6f_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      sourceInformationMarkerStart($composer_3, -692256719, 'CC(ReusableComposeNode)P(1,2)376@14062L9:Composables.kt#9igjgp');
      var tmp = $composer_3.e25();
      if (!isInterface(tmp, Applier)) {
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
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().w6f_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().v6f_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_2().z6f_1;
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.runtime.Updater.set.<anonymous>' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      if ($this$with.s25() || !equals($this$with.d27(), compositeKeyHash)) {
        $this$with.o27(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).g26(compositeKeyHash, block);
      }
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().t6f_1);
      // Inline function 'androidx.compose.foundation.layout.Column.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -384784025, 'C88@4444L9:Column.kt#2w3rfo');
      // Inline function 'com.workdev.example.ui.Screens.SecondScreen.TextScreen.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp0_style = TextStyle_init_$Create$(Companion_getInstance_3().x44_1);
      var tmp1_fontSize = get_sp(30);
      var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text(text, null, tmp_0, tmp1_fontSize, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, tmp0_style, $composer_5, 3072 | 14 & $dirty, 1572864, 65526);
      $composer_5.j25(-602854847);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.m26(navController);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_5.d27();
      var tmp_4;
      if (invalid || it === Companion_getInstance().w1z_1) {
        // Inline function 'com.workdev.example.ui.Screens.SecondScreen.TextScreen.<anonymous>.<anonymous>' call
        var value = TextScreen$lambda_2(navController);
        $composer_5.o27(value);
        tmp_4 = value;
      } else {
        tmp_4 = it;
      }
      var tmp_5 = tmp_4;
      var tmp0_group = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_5.l25();
      Button(tmp0_group, null, false, null, null, null, null, null, null, ComposableSingletons$BodyScreenKt_getInstance().zbv_1, $composer_5, 805306368, 510);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.d26();
      sourceInformationMarkerEnd($composer_3);
      sourceInformationMarkerEnd($composer_2);
      sourceInformationMarkerEnd($composer_1);
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
      tmp0_safe_receiver.i2d(TextScreen$lambda_3(text, navController, $changed));
    }
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.h3e(p0, p1, p2);
    };
  }
  function ComposableSingletons$BodyScreenKt$lambda_1$lambda_3o9hmm($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.d25()) {
      if (isTraceInProgress()) {
        traceEventStart(-1143569353, $changed, -1, 'com.workdev.example.ui.Screens.SecondScreen.ComposableSingletons$BodyScreenKt.lambda-1.<anonymous> (BodyScreen.kt:56)');
      }
      var tmp0_style = TextStyle_init_$Create$(Companion_getInstance_3().x44_1);
      var tmp1_fontSize = get_sp(30);
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextOverflow___init__impl__obguoe(0);
      Text('Back', null, tmp, tmp1_fontSize, null, null, null, tmp_0, null, null, tmp_1, tmp_2, false, 0, 0, null, tmp0_style, $composer_0, 3078, 1572864, 65526);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.n1z();
    }
    return Unit_instance;
  }
  function ComposableSingletons$BodyScreenKt() {
    ComposableSingletons$BodyScreenKt_instance = this;
    var tmp = this;
    tmp.zbv_1 = ComposableLambda$invoke$ref_5(composableLambdaInstance(-1143569353, false, ComposableSingletons$BodyScreenKt$lambda_1$lambda_3o9hmm));
  }
  var ComposableSingletons$BodyScreenKt_instance;
  function ComposableSingletons$BodyScreenKt_getInstance() {
    if (ComposableSingletons$BodyScreenKt_instance == null)
      new ComposableSingletons$BodyScreenKt();
    return ComposableSingletons$BodyScreenKt_instance;
  }
  function BodyScreen$lambda_0($text, $navController, $$changed) {
    return function ($composer, $force) {
      BodyScreen_0($text, $navController, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function TextScreen$lambda_2($navController) {
    return function () {
      $navController.mbh();
      return Unit_instance;
    };
  }
  function TextScreen$lambda_3($text, $navController, $$changed) {
    return function ($composer, $force) {
      TextScreen_0($text, $navController, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SecondScreen(navController, backStackEntry, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v28(438024359);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.m26(navController) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.m26(backStackEntry) ? 32 : 16);
    if (!(($dirty & 19) === 18) || !$composer_0.d25()) {
      if (isTraceInProgress()) {
        traceEventStart(438024359, $dirty, -1, 'com.workdev.example.ui.Screens.SecondScreen.SecondScreen (SecondScreen.kt:8)');
      }
      var tmp0_safe_receiver = backStackEntry.ibc();
      var text = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.nb6('text');
      BodyScreen_0(ensureNotNull(text), navController, $composer_0, 112 & $dirty << 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.n1z();
    }
    var tmp0_safe_receiver_0 = $composer_0.w28();
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.i2d(SecondScreen$lambda(navController, backStackEntry, $changed));
    }
  }
  function SecondScreen$lambda($navController, $backStackEntry, $$changed) {
    return function ($composer, $force) {
      SecondScreen($navController, $backStackEntry, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function SystemAppearance(isDark, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.v28(-340711459);
    if (!(($changed & 1) === 0) || !$composer_0.d25()) {
      if (isTraceInProgress()) {
        traceEventStart(-340711459, $changed, -1, 'com.workdev.example.theme.SystemAppearance (Theme.js.kt:5)');
      }
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
      tmp0_safe_receiver.i2d(SystemAppearance$lambda(isDark, $changed));
    }
  }
  function SystemAppearance$lambda($isDark, $$changed) {
    return function ($composer, $force) {
      SystemAppearance($isDark, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function main() {
    onWasmReady(main$lambda);
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1) {
      return $boundThis.b25(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.d25()) {
      if (isTraceInProgress()) {
        traceEventStart(-2028331569, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:11)');
      }
      App($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.n1z();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.abw_1 = ComposableLambda$invoke$ref_6(composableLambdaInstance(-2028331569, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function main$lambda() {
    var tmp0_elvis_lhs = document.body;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var body = tmp;
    ComposeViewport(body, ComposableSingletons$MainKt_getInstance().abw_1);
    return Unit_instance;
  }
  function mainWrapper() {
    main();
  }
  //region block: init
  com_workdev_example_ui_Navigation_StateScreens_StateFirstScreen$stable = 0;
  com_workdev_example_ui_Navigation_StateScreens_StateSecondScreen$stable = 0;
  com_workdev_example_ui_Navigation_StateScreens$stable = 0;
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=Kotlin-Multiplatform-Navigation-component-composeApp.js.map
