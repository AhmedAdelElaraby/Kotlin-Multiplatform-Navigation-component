(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-serialization-kotlinx-serialization-core.js', './compose-multiplatform-core-lifecycle-lifecycle-common.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js', './compose-multiplatform-core-lifecycle-lifecycle-runtime.js', './compose-multiplatform-core-savedstate-savedstate.js', './compose-multiplatform-core-core-core-bundle.js', './compose-multiplatform-core-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-common.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-runtime.js'), require('./compose-multiplatform-core-savedstate-savedstate.js'), require('./compose-multiplatform-core-core-core-bundle.js'), require('./compose-multiplatform-core-collection-collection.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-common' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-common' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-runtime' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-runtime' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-savedstate-savedstate'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-savedstate-savedstate' was not found. Please, check whether 'compose-multiplatform-core-savedstate-savedstate' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-core-core-bundle'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-core-core-bundle' was not found. Please, check whether 'compose-multiplatform-core-core-core-bundle' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-common'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-navigation-navigation-common'.");
    }
    globalThis['compose-multiplatform-core-navigation-navigation-common'] = factory(typeof globalThis['compose-multiplatform-core-navigation-navigation-common'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-navigation-navigation-common'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime'], globalThis['compose-multiplatform-core-savedstate-savedstate'], globalThis['compose-multiplatform-core-core-core-bundle'], globalThis['compose-multiplatform-core-collection-collection']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_runtime, kotlin_org_jetbrains_androidx_savedstate_savedstate, kotlin_org_jetbrains_androidx_core_core_bundle, kotlin_org_jetbrains_compose_collection_internal_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var VOID = kotlin_kotlin.$_$.e;
  var initMetadataForInterface = kotlin_kotlin.$_$.na;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var toString = kotlin_kotlin.$_$.ob;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var ClassCastException = kotlin_kotlin.$_$.me;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.g1;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var toString_0 = kotlin_kotlin.$_$.ig;
  var equals = kotlin_kotlin.$_$.ba;
  var hashCode = kotlin_kotlin.$_$.ja;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var ensureNotNull = kotlin_kotlin.$_$.pf;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var emptyList = kotlin_kotlin.$_$.r5;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var emptySet = kotlin_kotlin.$_$.t5;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var plus = kotlin_kotlin.$_$.n7;
  var Collection = kotlin_kotlin.$_$.n4;
  var isInterface = kotlin_kotlin.$_$.za;
  var lastOrNull = kotlin_kotlin.$_$.u6;
  var plus_0 = kotlin_kotlin.$_$.l7;
  var toMutableList = kotlin_kotlin.$_$.m8;
  var minus = kotlin_kotlin.$_$.g7;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var charSequenceLength = kotlin_kotlin.$_$.x9;
  var Enum = kotlin_kotlin.$_$.pe;
  var first = kotlin_kotlin.$_$.b6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var listOf = kotlin_kotlin.$_$.a7;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var toMap = kotlin_kotlin.$_$.k8;
  var getStringHashCode = kotlin_kotlin.$_$.ia;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var State_CREATED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.h;
  var initMetadataForCompanion = kotlin_kotlin.$_$.la;
  var AbstractSavedStateViewModelFactory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.a;
  var AbstractSavedStateViewModelFactory_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.g;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.g;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.h;
  var State_DESTROYED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.i;
  var Companion_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.j;
  var getKClass = kotlin_kotlin.$_$.c;
  var create = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.d;
  var Factory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.e;
  var LifecycleRegistry_init_$Create$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_runtime.$_$.a;
  var Companion_instance = kotlin_org_jetbrains_androidx_savedstate_savedstate.$_$.b;
  var lazy = kotlin_kotlin.$_$.wf;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.j;
  var Bundle_init_$Create$ = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.c;
  var enableSavedStateHandles = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.f;
  var MutableCreationExtras = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.b;
  var get_SAVED_STATE_REGISTRY_OWNER_KEY = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.c;
  var get_VIEW_MODEL_STORE_OWNER_KEY = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.d;
  var get_DEFAULT_ARGS_KEY = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel_savedstate.$_$.b;
  var HasDefaultViewModelProviderFactory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.c;
  var Default_getInstance = kotlin_kotlin.$_$.s3;
  var toByte = kotlin_kotlin.$_$.lb;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.f1;
  var toHexString = kotlin_kotlin.$_$.xd;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.u3;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var checkIndexOverflow = kotlin_kotlin.$_$.e5;
  var IllegalArgumentException = kotlin_kotlin.$_$.se;
  var Bundle_init_$Create$_0 = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.d;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.d1;
  var StringBuilder = kotlin_kotlin.$_$.zc;
  var contains = kotlin_kotlin.$_$.bd;
  var replace = kotlin_kotlin.$_$.rd;
  var firstOrNull = kotlin_kotlin.$_$.y5;
  var emptyMap = kotlin_kotlin.$_$.s5;
  var split = kotlin_kotlin.$_$.td;
  var getOrNull = kotlin_kotlin.$_$.g6;
  var mapCapacity = kotlin_kotlin.$_$.c7;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var filterNotNull = kotlin_kotlin.$_$.x5;
  var to = kotlin_kotlin.$_$.jg;
  var RegexOption_IGNORE_CASE_getInstance = kotlin_kotlin.$_$.f;
  var Regex_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.h;
  var lazy_0 = kotlin_kotlin.$_$.vf;
  var addAll = kotlin_kotlin.$_$.w4;
  var plus_1 = kotlin_kotlin.$_$.m7;
  var KProperty1 = kotlin_kotlin.$_$.kc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ha;
  var KtMap = kotlin_kotlin.$_$.q4;
  var Comparable = kotlin_kotlin.$_$.ne;
  var toString_1 = kotlin_kotlin.$_$.ee;
  var generateSequence = kotlin_kotlin.$_$.qc;
  var isBlank = kotlin_kotlin.$_$.kd;
  var MutableCollection = kotlin_kotlin.$_$.r4;
  var asSequence = kotlin_kotlin.$_$.b5;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var SparseArrayCompat = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.n;
  var maxOrNull = kotlin_kotlin.$_$.e7;
  var listOfNotNull = kotlin_kotlin.$_$.z6;
  var valueIterator = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.u;
  var asSequence_0 = kotlin_kotlin.$_$.mc;
  var equals_0 = kotlin_kotlin.$_$.hd;
  var toInt = kotlin_kotlin.$_$.zd;
  var toInt_0 = kotlin_kotlin.$_$.ae;
  var startsWith = kotlin_kotlin.$_$.ud;
  var isIntArray = kotlin_kotlin.$_$.ya;
  var primitiveArrayConcat = kotlin_kotlin.$_$.d;
  var toTypedArray = kotlin_kotlin.$_$.o8;
  var contentDeepEquals = kotlin_kotlin.$_$.h5;
  var toList = kotlin_kotlin.$_$.c8;
  var toIntArray = kotlin_kotlin.$_$.b8;
  var KtList = kotlin_kotlin.$_$.o4;
  var copyToArray = kotlin_kotlin.$_$.q5;
  var Long = kotlin_kotlin.$_$.ue;
  var endsWith = kotlin_kotlin.$_$.gd;
  var toLong = kotlin_kotlin.$_$.ce;
  var toLong_0 = kotlin_kotlin.$_$.de;
  var isLongArray = kotlin_kotlin.$_$.ab;
  var longArrayOf = kotlin_kotlin.$_$.db;
  var toTypedArray_0 = kotlin_kotlin.$_$.r8;
  var toList_0 = kotlin_kotlin.$_$.d8;
  var toLongArray = kotlin_kotlin.$_$.j8;
  var toDouble = kotlin_kotlin.$_$.wd;
  var isFloatArray = kotlin_kotlin.$_$.xa;
  var toTypedArray_1 = kotlin_kotlin.$_$.q8;
  var toList_1 = kotlin_kotlin.$_$.f8;
  var toFloatArray = kotlin_kotlin.$_$.z7;
  var isBooleanArray = kotlin_kotlin.$_$.sa;
  var booleanArrayOf = kotlin_kotlin.$_$.s9;
  var toTypedArray_2 = kotlin_kotlin.$_$.p8;
  var toList_2 = kotlin_kotlin.$_$.h8;
  var toBooleanArray = kotlin_kotlin.$_$.y7;
  var isArray = kotlin_kotlin.$_$.ra;
  var toList_3 = kotlin_kotlin.$_$.i8;
  var removeSuffix = kotlin_kotlin.$_$.pd;
  var asSequence_1 = kotlin_kotlin.$_$.c5;
  var map = kotlin_kotlin.$_$.tc;
  var filterNotNull_0 = kotlin_kotlin.$_$.oc;
  var indexOf = kotlin_kotlin.$_$.jd;
  var toCharArray = kotlin_kotlin.$_$.vd;
  var charSequenceGet = kotlin_kotlin.$_$.w9;
  var encodeToByteArray = kotlin_kotlin.$_$.ed;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.o2;
  var toString_2 = kotlin_kotlin.$_$.p2;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.m1;
  var decodeToString = kotlin_kotlin.$_$.dd;
  var initMetadataForObject = kotlin_kotlin.$_$.pa;
  var Exception = kotlin_kotlin.$_$.re;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.l1;
  var captureStack = kotlin_kotlin.$_$.u9;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(NavType, 'NavType');
  initMetadataForClass(CollectionNavType, 'CollectionNavType', VOID, NavType);
  initMetadataForInterface(FloatingWindow, 'FloatingWindow');
  initMetadataForClass(NamedNavArgument, 'NamedNavArgument');
  initMetadataForClass(Builder, 'Builder', Builder);
  initMetadataForClass(NavArgument, 'NavArgument');
  initMetadataForClass(NavArgumentBuilder, 'NavArgumentBuilder', NavArgumentBuilder);
  initMetadataForClass(NavigatorState, 'NavigatorState');
  initMetadataForClass(ParamType, 'ParamType', VOID, Enum);
  initMetadataForClass(RouteBuilder, 'RouteBuilder');
  initMetadataForClass(RouteEncoder, 'RouteEncoder', VOID, AbstractEncoder);
  initMetadataForCompanion(Companion);
  initMetadataForClass(NavResultSavedStateFactory, 'NavResultSavedStateFactory', VOID, AbstractSavedStateViewModelFactory);
  initMetadataForClass(SavedStateViewModel, 'SavedStateViewModel', VOID, ViewModel);
  initMetadataForClass(NavBackStackEntry$defaultViewModelProviderFactory$1, VOID, VOID, VOID, [Factory]);
  initMetadataForClass(NavBackStackEntry, 'NavBackStackEntry', VOID, VOID, [HasDefaultViewModelProviderFactory]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ParamQuery, 'ParamQuery', ParamQuery);
  initMetadataForClass(Builder_0, 'Builder', Builder_init_$Create$);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(NavDeepLink, 'NavDeepLink');
  initMetadataForClass(DeepLinkMatch, 'DeepLinkMatch', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(NavDestination, 'NavDestination');
  initMetadataForClass(NavDestinationBuilder, 'NavDestinationBuilder');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(NavGraph$iterator$1);
  initMetadataForClass(NavGraph, 'NavGraph', VOID, NavDestination);
  initMetadataForClass(NavGraphBuilder, 'NavGraphBuilder', VOID, NavDestinationBuilder);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(Navigator, 'Navigator');
  initMetadataForClass(NavGraphNavigator, 'NavGraphNavigator', VOID, Navigator);
  initMetadataForClass(Builder_1, 'Builder', Builder_1);
  initMetadataForClass(NavOptions, 'NavOptions');
  initMetadataForClass(NavOptionsBuilder, 'NavOptionsBuilder', NavOptionsBuilder);
  initMetadataForClass(NavType$Companion$IntType$1, VOID, VOID, NavType);
  initMetadataForClass(NavType$Companion$IntArrayType$1, VOID, VOID, CollectionNavType);
  initMetadataForClass(NavType$Companion$IntListType$1, VOID, VOID, CollectionNavType);
  initMetadataForClass(NavType$Companion$LongType$1, VOID, VOID, NavType);
  initMetadataForClass(NavType$Companion$LongArrayType$1, VOID, VOID, CollectionNavType);
  initMetadataForClass(NavType$Companion$LongListType$1, VOID, VOID, CollectionNavType);
  initMetadataForClass(NavType$Companion$FloatType$1, VOID, VOID, NavType);
  initMetadataForClass(NavType$Companion$FloatArrayType$1, VOID, VOID, CollectionNavType);
  initMetadataForClass(NavType$Companion$FloatListType$1, VOID, VOID, CollectionNavType);
  initMetadataForClass(NavType$Companion$BoolType$1, VOID, VOID, NavType);
  initMetadataForClass(NavType$Companion$BoolArrayType$1, VOID, VOID, CollectionNavType);
  initMetadataForClass(NavType$Companion$BoolListType$1, VOID, VOID, CollectionNavType);
  initMetadataForClass(NavType$Companion$StringType$1, VOID, VOID, NavType);
  initMetadataForClass(NavType$Companion$StringArrayType$1, VOID, VOID, CollectionNavType);
  initMetadataForClass(NavType$Companion$StringListType$1, VOID, VOID, CollectionNavType);
  initMetadataForCompanion(Companion_5);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(NavigatorProvider, 'NavigatorProvider', NavigatorProvider);
  initMetadataForCompanion(Companion_7);
  initMetadataForObject(UriCodec, 'UriCodec');
  initMetadataForClass(URISyntaxException, 'URISyntaxException', VOID, Exception);
  initMetadataForClass(Lock, 'Lock', Lock);
  //endregion
  function CollectionNavType(isNullableAllowed) {
    NavType.call(this, isNullableAllowed);
  }
  function FloatingWindow() {
  }
  function NamedNavArgument(name, argument) {
    this.db9_1 = name;
    this.eb9_1 = argument;
  }
  protoOf(NamedNavArgument).ag = function () {
    return this.db9_1;
  };
  protoOf(NamedNavArgument).bg = function () {
    return this.eb9_1;
  };
  function navArgument(name, builder) {
    // Inline function 'kotlin.apply' call
    var this_0 = new NavArgumentBuilder();
    builder(this_0);
    return new NamedNavArgument(name, this_0.k1z());
  }
  function Builder() {
    this.kb9_1 = null;
    this.lb9_1 = false;
    this.mb9_1 = null;
    this.nb9_1 = false;
    this.ob9_1 = false;
  }
  protoOf(Builder).pb9 = function (type) {
    var tmp = this;
    tmp.kb9_1 = type instanceof NavType ? type : THROW_CCE();
    return this;
  };
  protoOf(Builder).k1z = function () {
    var tmp0_elvis_lhs = this.kb9_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0 = Companion_getInstance_7().fba(this.mb9_1);
      tmp = tmp_0 instanceof NavType ? tmp_0 : THROW_CCE();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var finalType = tmp;
    return new NavArgument(finalType, this.lb9_1, this.mb9_1, this.nb9_1, this.ob9_1);
  };
  function NavArgument(type, isNullable, defaultValue, defaultValuePresent, unknownDefaultValuePresent) {
    // Inline function 'kotlin.require' call
    if (!!(!type.ub8() && isNullable)) {
      // Inline function 'androidx.navigation.NavArgument.<anonymous>' call
      var message = type.n2t() + ' does not allow nullable values';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!(!isNullable && defaultValuePresent && defaultValue == null)) {
      // Inline function 'androidx.navigation.NavArgument.<anonymous>' call
      var message_0 = 'Argument with type ' + type.n2t() + ' has null value but is not nullable.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.gba_1 = type;
    this.hba_1 = isNullable;
    this.kba_1 = defaultValue;
    this.iba_1 = defaultValuePresent || unknownDefaultValuePresent;
    this.jba_1 = unknownDefaultValuePresent;
  }
  protoOf(NavArgument).lba = function (name, bundle) {
    if (this.iba_1 && !(this.kba_1 == null)) {
      this.gba_1.vb8(bundle, name, this.kba_1);
    }
  };
  protoOf(NavArgument).mba = function (name, bundle) {
    if (!this.hba_1 && bundle.jb5(name) && bundle.sb6(name) == null) {
      return false;
    }
    try {
      this.gba_1.wb8(bundle, name);
    } catch ($p) {
      if ($p instanceof ClassCastException) {
        var e = $p;
        return false;
      } else {
        throw $p;
      }
    }
    return true;
  };
  protoOf(NavArgument).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.o8(getKClassFromExpression(this).xa());
    sb.o8(' Type: ' + this.gba_1.toString());
    sb.o8(' Nullable: ' + this.hba_1);
    if (this.iba_1) {
      sb.o8(' DefaultValue: ' + toString_0(this.kba_1));
    }
    return sb.toString();
  };
  protoOf(NavArgument).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    var that = other instanceof NavArgument ? other : THROW_CCE();
    if (!(this.hba_1 === that.hba_1))
      return false;
    if (!(this.iba_1 === that.iba_1))
      return false;
    if (!equals(this.gba_1, that.gba_1))
      return false;
    var tmp;
    if (!(this.kba_1 == null)) {
      tmp = equals(this.kba_1, that.kba_1);
    } else {
      tmp = that.kba_1 == null;
    }
    return tmp;
  };
  protoOf(NavArgument).hashCode = function () {
    var result = hashCode(this.gba_1);
    result = imul(31, result) + (this.hba_1 ? 1 : 0) | 0;
    result = imul(31, result) + (this.iba_1 ? 1 : 0) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.kba_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function missingRequiredArguments(_this__u8e3s4, isArgumentMissing) {
    // Inline function 'kotlin.collections.filterValues' call
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = _this__u8e3s4.t().j();
    while (_iterator__ex2g4s.k()) {
      var entry = _iterator__ex2g4s.l();
      // Inline function 'androidx.navigation.missingRequiredArguments.<anonymous>' call
      var it = entry.v();
      var tmp;
      if (!ensureNotNull(it == null ? null : it.hba_1)) {
        tmp = !it.iba_1;
      } else {
        tmp = false;
      }
      if (tmp) {
        result.o2(entry.u(), entry.v());
      }
    }
    var requiredArgumentKeys = result.m2();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s_0 = requiredArgumentKeys.j();
    while (_iterator__ex2g4s_0.k()) {
      var element = _iterator__ex2g4s_0.l();
      // Inline function 'androidx.navigation.missingRequiredArguments.<anonymous>' call
      if (isArgumentMissing(element)) {
        destination.e(element);
      }
    }
    return destination;
  }
  function NavArgumentBuilder() {
    this.fb9_1 = new Builder();
    this.gb9_1 = null;
    this.hb9_1 = false;
    this.ib9_1 = null;
    this.jb9_1 = false;
  }
  protoOf(NavArgumentBuilder).nba = function (value) {
    this.gb9_1 = value;
    this.fb9_1.pb9(value);
  };
  protoOf(NavArgumentBuilder).k1z = function () {
    return this.fb9_1.k1z();
  };
  function navOptions(optionsBuilder) {
    // Inline function 'kotlin.apply' call
    var this_0 = new NavOptionsBuilder();
    optionsBuilder(this_0);
    return this_0.xba();
  }
  function NavigatorState() {
    this.yba_1 = new Lock();
    var tmp = this;
    // Inline function 'kotlin.collections.listOf' call
    var tmp$ret$0 = emptyList();
    tmp.zba_1 = MutableStateFlow(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$1 = emptySet();
    tmp_0.abb_1 = MutableStateFlow(tmp$ret$1);
    this.bbb_1 = false;
    this.cbb_1 = asStateFlow(this.zba_1);
    this.dbb_1 = asStateFlow(this.abb_1);
  }
  protoOf(NavigatorState).ebb = function (backStackEntry) {
    // Inline function 'androidx.navigation.internal.withLock' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.internal.Lock.withLockImpl' call
    this.yba_1;
    this.zba_1.d1l(plus(this.zba_1.v(), backStackEntry));
  };
  protoOf(NavigatorState).fbb = function (backStackEntry) {
    var tmp;
    var tmp0 = this.abb_1.v();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.q();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'androidx.navigation.NavigatorState.pushWithTransition.<anonymous>' call
        if (element === backStackEntry) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    if (tmp$ret$0) {
      var tmp2 = this.cbb_1.v();
      var tmp$ret$2;
      $l$block_2: {
        // Inline function 'kotlin.collections.any' call
        var tmp_1;
        if (isInterface(tmp2, Collection)) {
          tmp_1 = tmp2.q();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$2 = false;
          break $l$block_2;
        }
        var _iterator__ex2g4s_0 = tmp2.j();
        while (_iterator__ex2g4s_0.k()) {
          var element_0 = _iterator__ex2g4s_0.l();
          // Inline function 'androidx.navigation.NavigatorState.pushWithTransition.<anonymous>' call
          if (element_0 === backStackEntry) {
            tmp$ret$2 = true;
            break $l$block_2;
          }
        }
        tmp$ret$2 = false;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    if (tmp) {
      return Unit_instance;
    }
    var previousEntry = lastOrNull(this.cbb_1.v());
    if (!(previousEntry == null)) {
      this.abb_1.d1l(plus_0(this.abb_1.v(), previousEntry));
    }
    this.abb_1.d1l(plus_0(this.abb_1.v(), backStackEntry));
    this.ebb(backStackEntry);
  };
  protoOf(NavigatorState).hbb = function (popUpTo, saveState) {
    // Inline function 'androidx.navigation.internal.withLock' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.internal.Lock.withLockImpl' call
    this.yba_1;
    // Inline function 'kotlin.collections.takeWhile' call
    var this_0 = this.zba_1.v();
    var list = ArrayList_init_$Create$();
    var _iterator__ex2g4s = this_0.j();
    $l$loop: while (_iterator__ex2g4s.k()) {
      var item = _iterator__ex2g4s.l();
      // Inline function 'androidx.navigation.NavigatorState.pop.<anonymous>.<anonymous>' call
      if (!!item.equals(popUpTo))
        break $l$loop;
      list.e(item);
    }
    this.zba_1.d1l(list);
  };
  protoOf(NavigatorState).ibb = function (popUpTo, saveState) {
    var tmp;
    var tmp0 = this.abb_1.v();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp_0;
      if (isInterface(tmp0, Collection)) {
        tmp_0 = tmp0.q();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'androidx.navigation.NavigatorState.popWithTransition.<anonymous>' call
        if (element === popUpTo) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    if (tmp$ret$0) {
      var tmp2 = this.cbb_1.v();
      var tmp$ret$2;
      $l$block_2: {
        // Inline function 'kotlin.collections.none' call
        var tmp_1;
        if (isInterface(tmp2, Collection)) {
          tmp_1 = tmp2.q();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$2 = true;
          break $l$block_2;
        }
        var _iterator__ex2g4s_0 = tmp2.j();
        while (_iterator__ex2g4s_0.k()) {
          var element_0 = _iterator__ex2g4s_0.l();
          // Inline function 'androidx.navigation.NavigatorState.popWithTransition.<anonymous>' call
          if (element_0 === popUpTo) {
            tmp$ret$2 = false;
            break $l$block_2;
          }
        }
        tmp$ret$2 = true;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = false;
    }
    if (tmp) {
      return Unit_instance;
    }
    this.abb_1.d1l(plus_0(this.abb_1.v(), popUpTo));
    var tmp4 = this.cbb_1.v();
    var tmp$ret$5;
    $l$block_3: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var iterator = tmp4.a2(tmp4.n());
      while (iterator.v4()) {
        var element_1 = iterator.x4();
        // Inline function 'androidx.navigation.NavigatorState.popWithTransition.<anonymous>' call
        if (!element_1.equals(popUpTo) && this.cbb_1.v().y1(element_1) < this.cbb_1.v().y1(popUpTo)) {
          tmp$ret$5 = element_1;
          break $l$block_3;
        }
      }
      tmp$ret$5 = null;
    }
    var incomingEntry = tmp$ret$5;
    if (!(incomingEntry == null)) {
      this.abb_1.d1l(plus_0(this.abb_1.v(), incomingEntry));
    }
    this.hbb(popUpTo, saveState);
  };
  protoOf(NavigatorState).jbb = function (backStackEntry) {
    // Inline function 'androidx.navigation.internal.withLock' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.navigation.internal.Lock.withLockImpl' call
    this.yba_1;
    var tempStack = toMutableList(this.cbb_1.v());
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfLast' call
      var iterator = tempStack.a2(tempStack.n());
      while (iterator.v4()) {
        // Inline function 'androidx.navigation.NavigatorState.onLaunchSingleTop.<anonymous>.<anonymous>' call
        if (iterator.x4().obb_1 === backStackEntry.obb_1) {
          tmp$ret$1 = iterator.w4();
          break $l$block;
        }
      }
      tmp$ret$1 = -1;
    }
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.navigation.NavigatorState.onLaunchSingleTop.<anonymous>.<anonymous>' call
    var idx = tmp$ret$1;
    tempStack.g2(idx, backStackEntry);
    this.zba_1.d1l(tempStack);
  };
  protoOf(NavigatorState).wbb = function (entry) {
    this.abb_1.d1l(minus(this.abb_1.v(), entry));
  };
  var ParamType_PATH_instance;
  var ParamType_QUERY_instance;
  var ParamType_entriesInitialized;
  function ParamType_initEntries() {
    if (ParamType_entriesInitialized)
      return Unit_instance;
    ParamType_entriesInitialized = true;
    ParamType_PATH_instance = new ParamType('PATH', 0);
    ParamType_QUERY_instance = new ParamType('QUERY', 1);
  }
  function RouteBuilder_init_$Init$(serializer, $this) {
    RouteBuilder.call($this);
    $this.xbb_1 = serializer;
    $this.ybb_1 = serializer.nab().hac();
    return $this;
  }
  function RouteBuilder_init_$Create$(serializer) {
    return RouteBuilder_init_$Init$(serializer, objectCreate(protoOf(RouteBuilder)));
  }
  function addPath($this, path) {
    $this.zbb_1 = $this.zbb_1 + ('/' + path);
  }
  function addQuery($this, name, value) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = $this.abc_1;
    if (charSequenceLength(this_0) === 0) {
      tmp = '?';
    } else {
      tmp = '&';
    }
    var symbol = tmp;
    $this.abc_1 = $this.abc_1 + (symbol + name + '=' + value);
  }
  function computeParamType($this, index, type) {
    var tmp;
    var tmp_0;
    if (type instanceof CollectionNavType) {
      tmp_0 = true;
    } else {
      tmp_0 = $this.xbb_1.nab().mac(index);
    }
    if (tmp_0) {
      tmp = ParamType_QUERY_getInstance();
    } else {
      tmp = ParamType_PATH_getInstance();
    }
    return tmp;
  }
  function ParamType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ParamType_PATH_getInstance() {
    ParamType_initEntries();
    return ParamType_PATH_instance;
  }
  function ParamType_QUERY_getInstance() {
    ParamType_initEntries();
    return ParamType_QUERY_instance;
  }
  protoOf(RouteBuilder).k1z = function () {
    return this.ybb_1 + this.zbb_1 + this.abc_1;
  };
  protoOf(RouteBuilder).bbc = function (index, name, type, value) {
    var paramType = computeParamType(this, index, type);
    var tmp0 = paramType.s2_1;
    if (tmp0 === 0) {
      // Inline function 'kotlin.require' call
      if (!(value.n() === 1)) {
        // Inline function 'androidx.navigation.serialization.RouteBuilder.appendArg.<anonymous>' call
        var message = 'Expected one value for argument ' + name + ', found ' + value.n() + 'values instead.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      addPath(this, first(value));
    } else if (tmp0 === 1) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = value.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'androidx.navigation.serialization.RouteBuilder.appendArg.<anonymous>' call
        addQuery(this, name, element);
      }
    }
  };
  function RouteBuilder() {
    this.zbb_1 = '';
    this.abc_1 = '';
  }
  function internalEncodeValue($this, value) {
    var argName = $this.cbc_1.nab().lac($this.gbc_1);
    var navType = $this.dbc_1.l2(argName);
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (navType == null) {
        // Inline function 'androidx.navigation.serialization.RouteEncoder.internalEncodeValue.<anonymous>' call
        var message = 'Cannot find NavType for argument ' + argName + '. Please provide NavType through typeMap.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    var tmp;
    if (navType instanceof CollectionNavType) {
      tmp = navType.qb8(value);
    } else {
      tmp = listOf(navType.bb9(value));
    }
    var parsedValue = tmp;
    // Inline function 'kotlin.collections.set' call
    $this.fbc_1.o2(argName, parsedValue);
  }
  function RouteEncoder(serializer, typeMap) {
    AbstractEncoder.call(this);
    this.cbc_1 = serializer;
    this.dbc_1 = typeMap;
    this.ebc_1 = EmptySerializersModule();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.fbc_1 = LinkedHashMap_init_$Create$();
    this.gbc_1 = -1;
  }
  protoOf(RouteEncoder).dae = function () {
    return this.ebc_1;
  };
  protoOf(RouteEncoder).hbc = function (value) {
    protoOf(AbstractEncoder).cae.call(this, this.cbc_1, !(value == null) ? value : THROW_CCE());
    return toMap(this.fbc_1);
  };
  protoOf(RouteEncoder).cae = function (serializer, value) {
    internalEncodeValue(this, value);
  };
  protoOf(RouteEncoder).fad = function (descriptor, index) {
    this.gbc_1 = index;
    return true;
  };
  protoOf(RouteEncoder).gad = function (value) {
    internalEncodeValue(this, value);
  };
  function generateHashCode(_this__u8e3s4) {
    var hash = getStringHashCode(_this__u8e3s4.nab().hac());
    var inductionVariable = 0;
    var last = _this__u8e3s4.nab().iac();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        hash = imul(31, hash) + getStringHashCode(_this__u8e3s4.nab().lac(i)) | 0;
      }
       while (inductionVariable < last);
    return hash;
  }
  function generateRouteWithArgs(route, typeMap) {
    var serializer_0 = serializer(getKClassFromExpression(route));
    var argMap = (new RouteEncoder(serializer_0, typeMap)).hbc(route);
    var builder = RouteBuilder_init_$Create$(serializer_0);
    forEachIndexed(serializer_0, typeMap, generateRouteWithArgs$lambda(argMap, builder));
    return builder.k1z();
  }
  function forEachIndexed(_this__u8e3s4, typeMap, operation) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.nab().iac();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var argName = _this__u8e3s4.nab().lac(i);
        var navType = typeMap.l2(argName);
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          if (navType == null) {
            // Inline function 'androidx.navigation.serialization.forEachIndexed.<anonymous>' call
            var message = 'Cannot locate NavType for argument [' + argName + ']';
            throw IllegalStateException_init_$Create$(toString(message));
          } else {
            break $l$block;
          }
        }
        operation(i, argName, navType);
      }
       while (inductionVariable < last);
  }
  function generateRouteWithArgs$lambda($argMap, $builder) {
    return function (index, argName, navType) {
      var value = ensureNotNull($argMap.l2(argName));
      $builder.bbc(index, argName, navType, value);
      return Unit_instance;
    };
  }
  function NavBackStackEntry_init_$Init$(entry, arguments_0, $this) {
    arguments_0 = arguments_0 === VOID ? entry.ibc() : arguments_0;
    NavBackStackEntry.call($this, entry.kbb_1, arguments_0, entry.mbb_1, entry.nbb_1, entry.obb_1, entry.pbb_1);
    $this.mbb_1 = entry.mbb_1;
    $this.jbc(entry.ubb_1);
    return $this;
  }
  function NavBackStackEntry_init_$Create$(entry, arguments_0) {
    return NavBackStackEntry_init_$Init$(entry, arguments_0, objectCreate(protoOf(NavBackStackEntry)));
  }
  function Companion() {
  }
  protoOf(Companion).kbc = function (destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState) {
    return new NavBackStackEntry(destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState);
  };
  protoOf(Companion).lbc = function (destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState, $super) {
    arguments_0 = arguments_0 === VOID ? null : arguments_0;
    hostLifecycleState = hostLifecycleState === VOID ? State_CREATED_getInstance() : hostLifecycleState;
    viewModelStoreProvider = viewModelStoreProvider === VOID ? null : viewModelStoreProvider;
    id = id === VOID ? randomUUID() : id;
    savedState = savedState === VOID ? null : savedState;
    return $super === VOID ? this.kbc(destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState) : $super.kbc.call(this, destination, arguments_0, hostLifecycleState, viewModelStoreProvider, id, savedState);
  };
  protoOf(Companion).mbc = function () {
    return randomUUID();
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function NavResultSavedStateFactory(owner) {
    AbstractSavedStateViewModelFactory_init_$Init$(owner, null, this);
  }
  protoOf(NavResultSavedStateFactory).fb8 = function (key, modelClass, handle) {
    var tmp = new SavedStateViewModel(handle);
    return tmp instanceof ViewModel ? tmp : THROW_CCE();
  };
  function SavedStateViewModel(handle) {
    ViewModel_init_$Init$(this);
    this.qbc_1 = handle;
  }
  function NavBackStackEntry$savedStateHandle$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (!this$0.sbb_1) {
        // Inline function 'androidx.navigation.NavBackStackEntry.savedStateHandle$delegate.<anonymous>.<anonymous>' call
        var message = "You cannot access the NavBackStackEntry's SavedStateHandle until it is added to the NavController's back stack (i.e., the Lifecycle of the NavBackStackEntry reaches the CREATED state).";
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var tmp_0;
      if (!!this$0.p7w().w56().equals(State_DESTROYED_getInstance())) {
        // Inline function 'androidx.navigation.NavBackStackEntry.savedStateHandle$delegate.<anonymous>.<anonymous>' call
        var message_0 = "You cannot access the NavBackStackEntry's SavedStateHandle after the NavBackStackEntry is destroyed.";
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      return Companion_getInstance().c59(this$0, new NavResultSavedStateFactory(this$0)).g59(getKClass(SavedStateViewModel)).qbc_1;
    };
  }
  function NavBackStackEntry$defaultViewModelProviderFactory$1() {
  }
  function NavBackStackEntry(destination, immutableArgs, hostLifecycleState, viewModelStoreProvider, id, savedState) {
    immutableArgs = immutableArgs === VOID ? null : immutableArgs;
    hostLifecycleState = hostLifecycleState === VOID ? State_CREATED_getInstance() : hostLifecycleState;
    viewModelStoreProvider = viewModelStoreProvider === VOID ? null : viewModelStoreProvider;
    id = id === VOID ? Companion_instance_0.mbc() : id;
    savedState = savedState === VOID ? null : savedState;
    this.kbb_1 = destination;
    this.lbb_1 = immutableArgs;
    this.mbb_1 = hostLifecycleState;
    this.nbb_1 = viewModelStoreProvider;
    this.obb_1 = id;
    this.pbb_1 = savedState;
    this.qbb_1 = LifecycleRegistry_init_$Create$(this);
    this.rbb_1 = Companion_instance.tb6(this);
    this.sbb_1 = false;
    var tmp = this;
    tmp.tbb_1 = lazy(NavBackStackEntry$savedStateHandle$delegate$lambda(this));
    this.ubb_1 = State_INITIALIZED_getInstance();
    var tmp_0 = this;
    tmp_0.vbb_1 = new NavBackStackEntry$defaultViewModelProviderFactory$1();
  }
  protoOf(NavBackStackEntry).ibc = function () {
    var tmp;
    if (this.lbb_1 == null) {
      tmp = null;
    } else {
      tmp = Bundle_init_$Create$(this.lbb_1);
    }
    return tmp;
  };
  protoOf(NavBackStackEntry).p7w = function () {
    return this.qbb_1;
  };
  protoOf(NavBackStackEntry).jbc = function (maxState) {
    this.ubb_1 = maxState;
    this.rbc();
  };
  protoOf(NavBackStackEntry).p57 = function (event) {
    this.mbb_1 = event.p56();
    this.rbc();
  };
  protoOf(NavBackStackEntry).rbc = function () {
    if (!this.sbb_1) {
      this.rbb_1.xb6();
      this.sbb_1 = true;
      if (!(this.nbb_1 == null)) {
        enableSavedStateHandles(this);
      }
      this.rbb_1.eb7(this.pbb_1);
    }
    if (this.mbb_1.s2_1 < this.ubb_1.s2_1) {
      this.qbb_1.o57(this.mbb_1);
    } else {
      this.qbb_1.o57(this.ubb_1);
    }
  };
  protoOf(NavBackStackEntry).b59 = function () {
    // Inline function 'kotlin.check' call
    if (!this.sbb_1) {
      // Inline function 'androidx.navigation.NavBackStackEntry.<get-viewModelStore>.<anonymous>' call
      var message = "You cannot access the NavBackStackEntry's ViewModels until it is added to the NavController's back stack (i.e., the Lifecycle of the NavBackStackEntry reaches the CREATED state).";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    if (!!this.p7w().w56().equals(State_DESTROYED_getInstance())) {
      // Inline function 'androidx.navigation.NavBackStackEntry.<get-viewModelStore>.<anonymous>' call
      var message_0 = "You cannot access the NavBackStackEntry's ViewModels after the NavBackStackEntry is destroyed.";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var tmp2 = this.nbb_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp2 == null) {
        // Inline function 'androidx.navigation.NavBackStackEntry.<get-viewModelStore>.<anonymous>' call
        var message_1 = 'You must call setViewModelStore() on your NavHostController before accessing the ViewModelStore of a navigation graph.';
        throw IllegalStateException_init_$Create$(toString(message_1));
      } else {
        break $l$block;
      }
    }
    return this.nbb_1.sbc(this.obb_1);
  };
  protoOf(NavBackStackEntry).q57 = function () {
    return this.vbb_1;
  };
  protoOf(NavBackStackEntry).r57 = function () {
    var extras = new MutableCreationExtras();
    extras.b58(get_SAVED_STATE_REGISTRY_OWNER_KEY(), this);
    extras.b58(get_VIEW_MODEL_STORE_OWNER_KEY(), this);
    var tmp0_safe_receiver = this.ibc();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.navigation.NavBackStackEntry.<get-defaultViewModelCreationExtras>.<anonymous>' call
      extras.b58(get_DEFAULT_ARGS_KEY(), tmp0_safe_receiver);
    }
    return extras;
  };
  protoOf(NavBackStackEntry).ob7 = function () {
    return this.rbb_1.vb6_1;
  };
  protoOf(NavBackStackEntry).tbc = function (outBundle) {
    this.rbb_1.gb7(outBundle);
  };
  protoOf(NavBackStackEntry).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof NavBackStackEntry);
    }
    if (tmp)
      return false;
    var tmp_0;
    if (this.obb_1 === other.obb_1 && this.kbb_1.equals(other.kbb_1) && equals(this.p7w(), other.p7w()) && equals(this.ob7(), other.ob7())) {
      var tmp_1;
      if (equals(this.lbb_1, other.lbb_1)) {
        tmp_1 = true;
      } else {
        var tmp0_safe_receiver = this.lbb_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lb5();
        var tmp_2;
        if (tmp1_safe_receiver == null) {
          tmp_2 = null;
        } else {
          var tmp$ret$0;
          $l$block_0: {
            // Inline function 'kotlin.collections.all' call
            var tmp_3;
            if (isInterface(tmp1_safe_receiver, Collection)) {
              tmp_3 = tmp1_safe_receiver.q();
            } else {
              tmp_3 = false;
            }
            if (tmp_3) {
              tmp$ret$0 = true;
              break $l$block_0;
            }
            var _iterator__ex2g4s = tmp1_safe_receiver.j();
            while (_iterator__ex2g4s.k()) {
              var element = _iterator__ex2g4s.l();
              // Inline function 'androidx.navigation.NavBackStackEntry.equals.<anonymous>' call
              var tmp_4 = this.lbb_1.sb6(element);
              var tmp0_safe_receiver_0 = other.lbb_1;
              if (!equals(tmp_4, tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.sb6(element))) {
                tmp$ret$0 = false;
                break $l$block_0;
              }
            }
            tmp$ret$0 = true;
          }
          tmp_2 = tmp$ret$0;
        }
        tmp_1 = tmp_2 === true;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  protoOf(NavBackStackEntry).hashCode = function () {
    var result = getStringHashCode(this.obb_1);
    result = imul(31, result) + this.kbb_1.hashCode() | 0;
    var tmp0_safe_receiver = this.lbb_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lb5();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = tmp1_safe_receiver.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'androidx.navigation.NavBackStackEntry.hashCode.<anonymous>' call
        var tmp = imul(31, result);
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver_0 = this.lbb_1.sb6(element);
        var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
        result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
      }
    }
    result = imul(31, result) + hashCode(this.p7w()) | 0;
    result = imul(31, result) + hashCode(this.ob7()) | 0;
    return result;
  };
  protoOf(NavBackStackEntry).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.o8(getKClassFromExpression(this).xa());
    sb.o8('(' + this.obb_1 + ')');
    sb.o8(' destination=');
    sb.n8(this.kbb_1);
    return sb.toString();
  };
  function randomUUID() {
    // Inline function 'kotlin.also' call
    var this_0 = Default_getInstance().zh(16);
    // Inline function 'androidx.navigation.randomUUID.<anonymous>' call
    // Inline function 'kotlin.experimental.and' call
    var this_1 = this_0[6];
    this_0[6] = toByte(this_1 & 15);
    // Inline function 'kotlin.experimental.or' call
    var this_2 = this_0[6];
    this_0[6] = toByte(this_2 | 64);
    // Inline function 'kotlin.experimental.and' call
    var this_3 = this_0[8];
    this_0[8] = toByte(this_3 & 63);
    // Inline function 'kotlin.experimental.or' call
    var this_4 = this_0[8];
    this_0[8] = toByte(this_4 | -128);
    var bytes = this_0;
    return StringBuilder_init_$Create$_0(36).o8(toHexString(bytes, 0, 4)).p8(_Char___init__impl__6a9atx(45)).o8(toHexString(bytes, 4, 6)).p8(_Char___init__impl__6a9atx(45)).o8(toHexString(bytes, 6, 8)).p8(_Char___init__impl__6a9atx(45)).o8(toHexString(bytes, 8, 10)).p8(_Char___init__impl__6a9atx(45)).o8(toHexString(bytes, 10)).toString();
  }
  function Builder_init_$Init$($this) {
    Builder_0.call($this);
    return $this;
  }
  function Builder_init_$Create$() {
    return Builder_init_$Init$(objectCreate(protoOf(Builder_0)));
  }
  function Companion_0() {
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function _get_pathPattern__sckhty($this) {
    var tmp0 = $this.zbc_1;
    // Inline function 'kotlin.getValue' call
    pathPattern$factory();
    return tmp0.v();
  }
  function _get_isParameterizedQuery__xqgc1a($this) {
    var tmp0 = $this.abd_1;
    // Inline function 'kotlin.getValue' call
    isParameterizedQuery$factory();
    return tmp0.v();
  }
  function _get_queryArgsMap__wndpo($this) {
    var tmp0 = $this.bbd_1;
    // Inline function 'kotlin.getValue' call
    queryArgsMap$factory();
    return tmp0.v();
  }
  function _get_fragArgsAndRegex__re1vcc($this) {
    var tmp0 = $this.dbd_1;
    // Inline function 'kotlin.getValue' call
    fragArgsAndRegex$factory();
    return tmp0.v();
  }
  function _get_fragArgs__u59k8s($this) {
    var tmp0 = $this.ebd_1;
    // Inline function 'kotlin.getValue' call
    fragArgs$factory();
    return tmp0.v();
  }
  function _get_fragRegex__izdpx8($this) {
    var tmp0 = $this.fbd_1;
    // Inline function 'kotlin.getValue' call
    fragRegex$factory();
    return tmp0.v();
  }
  function _get_fragPattern__jm7xn7($this) {
    var tmp0 = $this.gbd_1;
    // Inline function 'kotlin.getValue' call
    fragPattern$factory();
    return tmp0.v();
  }
  function buildRegex($this, uri, args, uriRegex) {
    var result = Companion_getInstance_3().jbd_1.xc(uri);
    var appendPos = 0;
    while (!(result == null)) {
      var argName = ensureNotNull(result.md().p(1)).bd_1;
      args.e(argName);
      if (result.ld().b1_1 > appendPos) {
        var tmp = Companion_getInstance_0();
        var tmp1 = appendPos;
        // Inline function 'kotlin.text.substring' call
        var endIndex = result.ld().b1_1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = uri.substring(tmp1, endIndex);
        uriRegex.o8(tmp.nc(tmp$ret$1));
      }
      uriRegex.o8('([^/]*?|)');
      appendPos = result.ld().c1_1 + 1 | 0;
      result = result.l();
    }
    if (appendPos < uri.length) {
      var tmp_0 = Companion_getInstance_0();
      // Inline function 'kotlin.text.substring' call
      var startIndex = appendPos;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = uri.substring(startIndex);
      uriRegex.o8(tmp_0.nc(tmp$ret$3));
    }
  }
  function getMatchingUriFragment($this, deepLink, bundle, arguments_0) {
    var tmp0_elvis_lhs = getFragment($this, deepLink);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var fragment = tmp;
    var tmp1_safe_receiver = _get_fragPattern__jm7xn7($this);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.xc(fragment);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var result = tmp_0;
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_0 = _get_fragArgs__u59k8s($this);
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var _iterator__ex2g4s = this_0.j();
    while (_iterator__ex2g4s.k()) {
      var item = _iterator__ex2g4s.l();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      var tmp0_safe_receiver = result.md().p(index_0 + 1 | 0);
      var tmp1_safe_receiver_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bd_1;
      var tmp_1;
      if (tmp1_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.navigation.NavDeepLink.getMatchingUriFragment.<anonymous>.<anonymous>' call
        tmp_1 = Companion_getInstance_9().nbd(tmp1_safe_receiver_0);
      }
      var tmp2_elvis_lhs_0 = tmp_1;
      var value = tmp2_elvis_lhs_0 == null ? '' : tmp2_elvis_lhs_0;
      var argument = arguments_0.l2(item);
      try {
        parseArgument($this, bundle, item, value, argument);
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          return Unit_instance;
        } else {
          throw $p;
        }
      }
      destination.e(Unit_instance);
    }
  }
  function getMatchingPathArguments($this, result, bundle, arguments_0) {
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_0 = $this.xbc_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var _iterator__ex2g4s = this_0.j();
    while (_iterator__ex2g4s.k()) {
      var item = _iterator__ex2g4s.l();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      var tmp0_safe_receiver = result.md().p(index_0 + 1 | 0);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bd_1;
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.navigation.NavDeepLink.getMatchingPathArguments.<anonymous>.<anonymous>' call
        tmp = Companion_getInstance_9().nbd(tmp1_safe_receiver);
      }
      var tmp2_elvis_lhs = tmp;
      var value = tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
      var argument = arguments_0.l2(item);
      try {
        parseArgument($this, bundle, item, value, argument);
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          return false;
        } else {
          throw $p;
        }
      }
      destination.e(Unit_instance);
    }
    return true;
  }
  function getMatchingQueryArguments($this, deepLink, bundle, arguments_0) {
    var queryParameters = parseQueryParameters($this, deepLink);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = _get_queryArgsMap__wndpo($this).t().j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'androidx.navigation.NavDeepLink.getMatchingQueryArguments.<anonymous>' call
      var paramName = element.u();
      var storedParam = element.v();
      var inputParams = queryParameters.l2(paramName);
      if ($this.cbd_1) {
        var argValue = getQuery($this, deepLink);
        if (!(argValue == null) && !(argValue === deepLink)) {
          inputParams = listOf(argValue);
        }
      }
      var parseSuccess = parseInputParams($this, inputParams, storedParam, bundle, arguments_0);
      if (!parseSuccess)
        return false;
    }
    return true;
  }
  function parseInputParams($this, inputParams, storedParam, bundle, arguments_0) {
    var tempBundle = Bundle_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = storedParam.pbd_1.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'androidx.navigation.NavDeepLink.parseInputParams.<anonymous>' call
      var argument = arguments_0.l2(element);
      var navType = argument == null ? null : argument.gba_1;
      var tmp;
      if (navType instanceof CollectionNavType) {
        tmp = !argument.iba_1;
      } else {
        tmp = false;
      }
      if (tmp) {
        navType.vb8(tempBundle, element, navType.rb8());
      }
    }
    if (inputParams == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = inputParams.j();
      while (_iterator__ex2g4s_0.k()) {
        var element_0 = _iterator__ex2g4s_0.l();
        // Inline function 'androidx.navigation.NavDeepLink.parseInputParams.<anonymous>' call
        var tmp0_safe_receiver = storedParam.obd_1;
        var tmp_0;
        if (tmp0_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.navigation.NavDeepLink.parseInputParams.<anonymous>.<anonymous>' call
          tmp_0 = Regex_init_$Create$(tmp0_safe_receiver).xc(element_0);
        }
        var argMatchResult = tmp_0;
        if (argMatchResult == null) {
          return false;
        }
        // Inline function 'kotlin.collections.mapIndexed' call
        var this_0 = storedParam.pbd_1;
        // Inline function 'kotlin.collections.mapIndexedTo' call
        var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
        var index = 0;
        var _iterator__ex2g4s_1 = this_0.j();
        while (_iterator__ex2g4s_1.k()) {
          var item = _iterator__ex2g4s_1.l();
          var _unary__edvuaz = index;
          index = _unary__edvuaz + 1 | 0;
          // Inline function 'androidx.navigation.NavDeepLink.parseInputParams.<anonymous>.<anonymous>' call
          var index_0 = checkIndexOverflow(_unary__edvuaz);
          var tmp0_safe_receiver_0 = argMatchResult.md().p(index_0 + 1 | 0);
          var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.bd_1;
          var value = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
          var argument_0 = arguments_0.l2(item);
          var tmp_1;
          try {
            var tmp_2;
            if (!tempBundle.jb5(item)) {
              parseArgument($this, tempBundle, item, value, argument_0);
              tmp_2 = Unit_instance;
            } else {
              tmp_2 = parseArgumentForRepeatedParam($this, tempBundle, item, value, argument_0);
            }
            tmp_1 = tmp_2;
          } catch ($p) {
            var tmp_3;
            if ($p instanceof IllegalArgumentException) {
              var e = $p;
              tmp_3 = Unit_instance;
            } else {
              throw $p;
            }
            tmp_1 = tmp_3;
          }
          var tmp$ret$2 = tmp_1;
          destination.e(tmp$ret$2);
        }
      }
    }
    bundle.mb5(tempBundle);
    return true;
  }
  function parseArgument($this, bundle, name, value, argument) {
    if (!(argument == null)) {
      var type = argument.gba_1;
      type.zb8(bundle, name, value);
    } else {
      bundle.vb5(name, value);
    }
  }
  function parseArgumentForRepeatedParam($this, bundle, name, value, argument) {
    if (!bundle.jb5(name)) {
      return true;
    }
    if (!(argument == null)) {
      var type = argument.gba_1;
      var previousValue = type.wb8(bundle, name);
      type.ab9(bundle, name, value, previousValue);
    }
    return false;
  }
  function ParamQuery() {
    this.obd_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.pbd_1 = ArrayList_init_$Create$();
  }
  protoOf(ParamQuery).qbd = function (name) {
    this.pbd_1.e(name);
  };
  protoOf(Builder_0).ubd = function (uriPattern) {
    this.rbd_1 = uriPattern;
    return this;
  };
  protoOf(Builder_0).k1z = function () {
    return new NavDeepLink(this.rbd_1, this.sbd_1, this.tbd_1);
  };
  function Builder_0() {
    this.rbd_1 = null;
    this.sbd_1 = null;
    this.tbd_1 = null;
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.ibd_1 = Regex_init_$Create$('^[a-zA-Z]+[+\\w\\-.]*:');
    this.jbd_1 = Regex_init_$Create$('\\{(.+?)\\}');
    this.kbd_1 = Regex_init_$Create$('^[^?#]+\\?([^#]*).*');
    this.lbd_1 = Regex_init_$Create$('#(.+)');
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function parsePath($this) {
    if ($this.ubc_1 == null)
      return Unit_instance;
    var uriRegex = new StringBuilder('^');
    if (!Companion_getInstance_3().ibd_1.vc($this.ubc_1)) {
      uriRegex.o8('http[s]?://');
    }
    var tmp0_safe_receiver = Regex_init_$Create$('(\\?|#|$)').xc($this.ubc_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.navigation.NavDeepLink.parsePath.<anonymous>' call
      var tmp0 = $this.ubc_1;
      // Inline function 'kotlin.text.substring' call
      var endIndex = tmp0_safe_receiver.ld().b1_1;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = tmp0.substring(0, endIndex);
      buildRegex($this, tmp$ret$1, $this.xbc_1, uriRegex);
      $this.hbd_1 = (!contains(uriRegex, '.*') && !contains(uriRegex, '([^/]+?)'));
      uriRegex.o8('($|(\\?(.)*)|(#(.)*))');
    }
    $this.ybc_1 = replace(uriRegex.toString(), '.*', '\\E.*\\Q');
  }
  function parseQuery($this) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var paramArgMap = LinkedHashMap_init_$Create$();
    if ($this.ubc_1 == null || !_get_isParameterizedQuery__xqgc1a($this))
      return paramArgMap;
    var queryParameters = parseQueryParameters($this, $this.ubc_1);
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = queryParameters.t().j();
    while (tmp0_iterator.k()) {
      var tmp1_loop_parameter = tmp0_iterator.l();
      // Inline function 'kotlin.collections.component1' call
      var paramName = tmp1_loop_parameter.u();
      // Inline function 'kotlin.collections.component2' call
      var queryParams = tmp1_loop_parameter.v();
      var argRegex = new StringBuilder('^');
      // Inline function 'kotlin.require' call
      if (!(queryParams.n() <= 1)) {
        // Inline function 'androidx.navigation.NavDeepLink.parseQuery.<anonymous>' call
        var message = 'Query parameter ' + paramName + ' must only be present once in ' + $this.ubc_1 + '. ' + 'To support repeated query parameters, use an array type for your ' + 'argument and the pattern provided in your URI will be used to ' + 'parse each query parameter instance.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp2_elvis_lhs = firstOrNull(queryParams);
      var tmp;
      if (tmp2_elvis_lhs == null) {
        // Inline function 'kotlin.apply' call
        // Inline function 'androidx.navigation.NavDeepLink.parseQuery.<anonymous>' call
        $this.cbd_1 = true;
        tmp = paramName;
      } else {
        tmp = tmp2_elvis_lhs;
      }
      var queryParam = tmp;
      var result = Companion_getInstance_3().jbd_1.xc(queryParam);
      var appendPos = 0;
      var param = new ParamQuery();
      while (!(result == null)) {
        param.qbd(ensureNotNull(result.md().p(1)).bd_1);
        if (result.ld().b1_1 > appendPos) {
          var tmp7 = appendPos;
          // Inline function 'kotlin.text.substring' call
          var endIndex = result.ld().b1_1;
          // Inline function 'kotlin.js.asDynamic' call
          var inputLiteral = queryParam.substring(tmp7, endIndex);
          argRegex.o8(Companion_getInstance_0().nc(inputLiteral));
        }
        argRegex.o8('([\\s\\S]+?)?');
        appendPos = result.ld().c1_1 + 1 | 0;
        result = result.l();
      }
      if (appendPos < queryParam.length) {
        var tmp_0 = Companion_getInstance_0();
        // Inline function 'kotlin.text.substring' call
        var startIndex = appendPos;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$9 = queryParam.substring(startIndex);
        argRegex.o8(tmp_0.nc(tmp$ret$9));
      }
      argRegex.o8('$');
      param.obd_1 = replace(argRegex.toString(), '.*', '\\E.*\\Q');
      // Inline function 'kotlin.collections.set' call
      paramArgMap.o2(paramName, param);
    }
    return paramArgMap;
  }
  function getQuery($this, uri) {
    var tmp0_safe_receiver = Companion_getInstance_3().kbd_1.xc(uri);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.md();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.p(1);
    return tmp2_safe_receiver == null ? null : tmp2_safe_receiver.bd_1;
  }
  function parseQueryParameters($this, uri) {
    var tmp0_elvis_lhs = getQuery($this, uri);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return emptyMap();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var query = tmp;
    // Inline function 'kotlin.collections.map' call
    var this_0 = split(query, ['&']);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.j();
    while (_iterator__ex2g4s.k()) {
      var item = _iterator__ex2g4s.l();
      // Inline function 'androidx.navigation.NavDeepLink.parseQueryParameters.<anonymous>' call
      var tmp$ret$0 = split(item, ['=']);
      destination.e(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.groupByTo' call
    var destination_0 = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s_0 = destination.j();
    while (_iterator__ex2g4s_0.k()) {
      var element = _iterator__ex2g4s_0.l();
      // Inline function 'androidx.navigation.NavDeepLink.parseQueryParameters.<anonymous>' call
      var key = element.p(0);
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination_0.l2(key);
      var tmp_0;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$();
        destination_0.o2(key, answer);
        tmp_0 = answer;
      } else {
        tmp_0 = value;
      }
      var list = tmp_0;
      // Inline function 'androidx.navigation.NavDeepLink.parseQueryParameters.<anonymous>' call
      var tmp0_safe_receiver = getOrNull(element, 1);
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.navigation.NavDeepLink.parseQueryParameters.<anonymous>.<anonymous>' call
        tmp_1 = Companion_getInstance_9().nbd(tmp0_safe_receiver);
      }
      var tmp$ret$8 = tmp_1;
      list.e(tmp$ret$8);
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_1 = LinkedHashMap_init_$Create$_0(mapCapacity(destination_0.n()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_1 = destination_0.t().j();
    while (_iterator__ex2g4s_1.k()) {
      var element_0 = _iterator__ex2g4s_1.l();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_2 = element_0.u();
      // Inline function 'androidx.navigation.NavDeepLink.parseQueryParameters.<anonymous>' call
      var tmp$ret$12 = filterNotNull(element_0.v());
      destination_1.o2(tmp_2, tmp$ret$12);
    }
    return destination_1;
  }
  function getFragment($this, uri) {
    var tmp0_safe_receiver = Companion_getInstance_3().lbd_1.xc(uri);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.md();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.p(1);
    return tmp2_safe_receiver == null ? null : tmp2_safe_receiver.bd_1;
  }
  function parseFragment($this) {
    if ($this.ubc_1 == null)
      return null;
    // Inline function 'kotlin.collections.mutableListOf' call
    var fragArgs = ArrayList_init_$Create$();
    var tmp0_elvis_lhs = getFragment($this, $this.ubc_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var fragment = tmp;
    var fragRegex = new StringBuilder('^');
    buildRegex($this, fragment, fragArgs, fragRegex);
    fragRegex.o8('$');
    return to(fragArgs, fragRegex.toString());
  }
  function NavDeepLink$pathPattern$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.ybc_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.navigation.NavDeepLink.pathPattern$delegate.<anonymous>.<anonymous>' call
        tmp = Regex_init_$Create$_0(tmp0_safe_receiver, RegexOption_IGNORE_CASE_getInstance());
      }
      return tmp;
    };
  }
  function NavDeepLink$isParameterizedQuery$delegate$lambda(this$0) {
    return function () {
      return !(this$0.ubc_1 == null) && Companion_getInstance_3().kbd_1.uc(this$0.ubc_1);
    };
  }
  function NavDeepLink$queryArgsMap$delegate$lambda(this$0) {
    return function () {
      return parseQuery(this$0);
    };
  }
  function NavDeepLink$fragArgsAndRegex$delegate$lambda(this$0) {
    return function () {
      return parseFragment(this$0);
    };
  }
  function NavDeepLink$fragArgs$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = _get_fragArgsAndRegex__re1vcc(this$0);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yf_1;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.collections.mutableListOf' call
        tmp = ArrayList_init_$Create$();
      } else {
        tmp = tmp1_elvis_lhs;
      }
      return tmp;
    };
  }
  function NavDeepLink$fragRegex$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = _get_fragArgsAndRegex__re1vcc(this$0);
      return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zf_1;
    };
  }
  function NavDeepLink$fragPattern$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = _get_fragRegex__izdpx8(this$0);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.navigation.NavDeepLink.fragPattern$delegate.<anonymous>.<anonymous>' call
        tmp = Regex_init_$Create$_0(tmp0_safe_receiver, RegexOption_IGNORE_CASE_getInstance());
      }
      return tmp;
    };
  }
  function NavDeepLink$getMatchingArguments$lambda($bundle) {
    return function (argName) {
      return !$bundle.jb5(argName);
    };
  }
  function NavDeepLink(uriPattern, action, mimeType) {
    Companion_getInstance_3();
    this.ubc_1 = uriPattern;
    this.vbc_1 = action;
    this.wbc_1 = mimeType;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.xbc_1 = ArrayList_init_$Create$();
    this.ybc_1 = null;
    var tmp_0 = this;
    tmp_0.zbc_1 = lazy(NavDeepLink$pathPattern$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.abd_1 = lazy(NavDeepLink$isParameterizedQuery$delegate$lambda(this));
    var tmp_2 = this;
    var tmp_3 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_2.bbd_1 = lazy_0(tmp_3, NavDeepLink$queryArgsMap$delegate$lambda(this));
    this.cbd_1 = false;
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_4.dbd_1 = lazy_0(tmp_5, NavDeepLink$fragArgsAndRegex$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_6.ebd_1 = lazy_0(tmp_7, NavDeepLink$fragArgs$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_8.fbd_1 = lazy_0(tmp_9, NavDeepLink$fragRegex$delegate$lambda(this));
    var tmp_10 = this;
    tmp_10.gbd_1 = lazy(NavDeepLink$fragPattern$delegate$lambda(this));
    this.hbd_1 = false;
    parsePath(this);
  }
  protoOf(NavDeepLink).vbd = function () {
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = _get_queryArgsMap__wndpo(this).n2();
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'androidx.navigation.NavDeepLink.<get-argumentsNames>.<anonymous>' call
      var list = element.pbd_1;
      addAll(destination, list);
    }
    return plus_1(plus_1(this.xbc_1, destination), _get_fragArgs__u59k8s(this));
  };
  protoOf(NavDeepLink).wbd = function (deepLink, arguments_0) {
    var tmp0_safe_receiver = _get_pathPattern__sckhty(this);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.xc(deepLink);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var result = tmp;
    var bundle = Bundle_init_$Create$_0();
    if (!getMatchingPathArguments(this, result, bundle, arguments_0))
      return null;
    if (_get_isParameterizedQuery__xqgc1a(this) && !getMatchingQueryArguments(this, deepLink, bundle, arguments_0)) {
      return null;
    }
    getMatchingUriFragment(this, deepLink, bundle, arguments_0);
    var missingRequiredArguments_0 = missingRequiredArguments(arguments_0, NavDeepLink$getMatchingArguments$lambda(bundle));
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!missingRequiredArguments_0.q())
      return null;
    return bundle;
  };
  protoOf(NavDeepLink).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof NavDeepLink);
    }
    if (tmp)
      return false;
    return this.ubc_1 == other.ubc_1 && this.vbc_1 == other.vbc_1 && this.wbc_1 == other.wbc_1;
  };
  protoOf(NavDeepLink).hashCode = function () {
    var result = 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.ubc_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.vbc_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.wbc_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    result = tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    return result;
  };
  function pathPattern$factory() {
    return getPropertyCallableRef('pathPattern', 1, KProperty1, function (receiver) {
      return _get_pathPattern__sckhty(receiver);
    }, null);
  }
  function isParameterizedQuery$factory() {
    return getPropertyCallableRef('isParameterizedQuery', 1, KProperty1, function (receiver) {
      return _get_isParameterizedQuery__xqgc1a(receiver);
    }, null);
  }
  function queryArgsMap$factory() {
    return getPropertyCallableRef('queryArgsMap', 1, KProperty1, function (receiver) {
      return _get_queryArgsMap__wndpo(receiver);
    }, null);
  }
  function fragArgsAndRegex$factory() {
    return getPropertyCallableRef('fragArgsAndRegex', 1, KProperty1, function (receiver) {
      return _get_fragArgsAndRegex__re1vcc(receiver);
    }, null);
  }
  function fragArgs$factory() {
    return getPropertyCallableRef('fragArgs', 1, KProperty1, function (receiver) {
      return _get_fragArgs__u59k8s(receiver);
    }, null);
  }
  function fragRegex$factory() {
    return getPropertyCallableRef('fragRegex', 1, KProperty1, function (receiver) {
      return _get_fragRegex__izdpx8(receiver);
    }, null);
  }
  function fragPattern$factory() {
    return getPropertyCallableRef('fragPattern', 1, KProperty1, function (receiver) {
      return _get_fragPattern__jm7xn7(receiver);
    }, null);
  }
  function NavDestination$Companion$_get_hierarchy_$lambda_vny2w0(it) {
    return it.ybd_1;
  }
  function DeepLinkMatch(destination, matchingArgs, isExactDeepLink) {
    this.ebe_1 = destination;
    this.fbe_1 = matchingArgs;
    this.gbe_1 = isExactDeepLink;
  }
  protoOf(DeepLinkMatch).hbe = function (other) {
    if (this.gbe_1 && !other.gbe_1) {
      return 1;
    } else if (!this.gbe_1 && other.gbe_1) {
      return -1;
    }
    if (!(this.fbe_1 == null) && other.fbe_1 == null) {
      return 1;
    } else if (this.fbe_1 == null && !(other.fbe_1 == null)) {
      return -1;
    }
    if (!(this.fbe_1 == null)) {
      var sizeDifference = this.fbe_1.yu() - ensureNotNull(other.fbe_1).yu() | 0;
      if (sizeDifference > 0) {
        return 1;
      } else if (sizeDifference < 0) {
        return -1;
      }
    }
    return 0;
  };
  protoOf(DeepLinkMatch).d = function (other) {
    return this.hbe(other instanceof DeepLinkMatch ? other : THROW_CCE());
  };
  protoOf(DeepLinkMatch).ibe = function (arguments_0) {
    if (arguments_0 == null || this.fbe_1 == null)
      return false;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.fbe_1.lb5().j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'androidx.navigation.DeepLinkMatch.hasMatchingArgs.<anonymous>' call
      if (!arguments_0.jb5(element))
        return false;
      // Inline function 'kotlin.collections.get' call
      var this_0 = this.ebe_1.bbe_1;
      var tmp0_safe_receiver = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).l2(element);
      var type = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gba_1;
      var matchingArgValue = type == null ? null : type.wb8(this.fbe_1, ensureNotNull(element));
      var entryArgValue = type == null ? null : type.wb8(arguments_0, ensureNotNull(element));
      if ((type == null ? null : type.cb9(matchingArgValue, entryArgValue)) === false) {
        return false;
      }
    }
    return true;
  };
  function NavDestination_init_$Init$(navigator, $this) {
    NavDestination.call($this, navigator.mbe());
    return $this;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).nbe = function (id) {
    return '0x' + toString_1(id, 16);
  };
  protoOf(Companion_2).obe = function (route) {
    return !(route == null) ? 'multiplatform-app://androidx.navigation/' + route : '';
  };
  protoOf(Companion_2).pbe = function (_this__u8e3s4) {
    return generateSequence(_this__u8e3s4, NavDestination$Companion$_get_hierarchy_$lambda_vny2w0);
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function NavDestination$addDeepLink$lambda($navDeepLink) {
    return function (key) {
      return !$navDeepLink.vbd().m(key);
    };
  }
  function NavDestination(navigatorName) {
    this.xbd_1 = navigatorName;
    this.ybd_1 = null;
    this.zbd_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.abe_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.bbe_1 = LinkedHashMap_init_$Create$();
    this.cbe_1 = 0;
    this.dbe_1 = null;
  }
  protoOf(NavDestination).ibc = function () {
    return toMap(this.bbe_1);
  };
  protoOf(NavDestination).qbe = function (route) {
    if (route == null) {
      this.cbe_1 = 0;
    } else {
      // Inline function 'kotlin.text.isNotBlank' call
      // Inline function 'kotlin.require' call
      if (!!isBlank(route)) {
        // Inline function 'androidx.navigation.NavDestination.<set-route>.<anonymous>' call
        var message = 'Cannot have an empty route';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var internalRoute = Companion_instance_3.obe(route);
      this.cbe_1 = getStringHashCode(internalRoute);
      this.rbe(internalRoute);
    }
    var tmp4 = this.abe_1;
    var tmp2 = this.abe_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp2.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'androidx.navigation.NavDestination.<set-route>.<anonymous>' call
        if (element.ubc_1 === Companion_instance_3.obe(this.dbe_1)) {
          tmp$ret$3 = element;
          break $l$block;
        }
      }
      tmp$ret$3 = null;
    }
    // Inline function 'kotlin.collections.remove' call
    var element_0 = tmp$ret$3;
    (isInterface(tmp4, MutableCollection) ? tmp4 : THROW_CCE()).d2(element_0);
    this.dbe_1 = route;
  };
  protoOf(NavDestination).sbe = function () {
    return this.xbd_1;
  };
  protoOf(NavDestination).rbe = function (uriPattern) {
    this.tbe(Builder_init_$Create$().ubd(uriPattern).k1z());
  };
  protoOf(NavDestination).tbe = function (navDeepLink) {
    var tmp = this.bbe_1;
    var missingRequiredArguments_0 = missingRequiredArguments(tmp, NavDestination$addDeepLink$lambda(navDeepLink));
    // Inline function 'kotlin.require' call
    if (!missingRequiredArguments_0.q()) {
      // Inline function 'androidx.navigation.NavDestination.addDeepLink.<anonymous>' call
      var message = 'Deep link ' + navDeepLink.ubc_1 + " can't be used to open destination " + this.toString() + '.\n' + ('Following required arguments are missing: ' + toString(missingRequiredArguments_0));
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.abe_1.e(navDeepLink);
  };
  protoOf(NavDestination).ube = function (route) {
    var tmp;
    if (this instanceof NavGraph) {
      tmp = this.hbf(route, false, false, this);
    } else {
      tmp = this.vbe(route);
    }
    var matchingDeepLink = tmp;
    return matchingDeepLink;
  };
  protoOf(NavDestination).vbe = function (route) {
    if (this.abe_1.q()) {
      return null;
    }
    var internalRoute = Companion_instance_3.obe(route);
    var bestMatch = null;
    var tmp0_iterator = this.abe_1.j();
    while (tmp0_iterator.k()) {
      var deepLink = tmp0_iterator.l();
      var matchingArguments = deepLink.wbd(internalRoute, this.bbe_1);
      if (!(matchingArguments == null)) {
        var newMatch = new DeepLinkMatch(this, matchingArguments, deepLink.hbd_1);
        if (bestMatch == null || newMatch.hbe(bestMatch) > 0) {
          bestMatch = newMatch;
        }
      }
    }
    return bestMatch;
  };
  protoOf(NavDestination).ibf = function (route, arguments_0) {
    if (this.dbe_1 === route)
      return true;
    var matchingDeepLink = this.ube(route);
    if (!this.equals(matchingDeepLink == null ? null : matchingDeepLink.ebe_1))
      return false;
    return matchingDeepLink.ibe(arguments_0);
  };
  protoOf(NavDestination).jbf = function (argumentName, argument) {
    // Inline function 'kotlin.collections.set' call
    this.bbe_1.o2(argumentName, argument);
  };
  protoOf(NavDestination).kbf = function (args) {
    if (args == null && this.bbe_1.q()) {
      return null;
    }
    var defaultArgs = Bundle_init_$Create$_0();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.bbe_1.t().j();
    while (tmp0_iterator.k()) {
      var tmp1_loop_parameter = tmp0_iterator.l();
      // Inline function 'kotlin.collections.component1' call
      var key = tmp1_loop_parameter.u();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.v();
      value.lba(key, defaultArgs);
    }
    if (!(args == null)) {
      defaultArgs.mb5(args);
      // Inline function 'kotlin.collections.iterator' call
      var tmp2_iterator = this.bbe_1.t().j();
      while (tmp2_iterator.k()) {
        var tmp3_loop_parameter = tmp2_iterator.l();
        // Inline function 'kotlin.collections.component1' call
        var key_0 = tmp3_loop_parameter.u();
        // Inline function 'kotlin.collections.component2' call
        var value_0 = tmp3_loop_parameter.v();
        if (!value_0.jba_1) {
          // Inline function 'kotlin.require' call
          if (!value_0.mba(key_0, defaultArgs)) {
            // Inline function 'androidx.navigation.NavDestination.addInDefaultArgs.<anonymous>' call
            var message = "Wrong argument type for '" + key_0 + "' in argument bundle. " + value_0.gba_1.n2t() + ' ' + 'expected.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
        }
      }
    }
    return defaultArgs;
  };
  protoOf(NavDestination).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.o8(getKClassFromExpression(this).xa());
    // Inline function 'kotlin.text.isNullOrBlank' call
    var this_0 = this.dbe_1;
    if (!(this_0 == null || isBlank(this_0))) {
      sb.o8(' route=');
      sb.o8(this.dbe_1);
    }
    if (!(this.zbd_1 == null)) {
      sb.o8(' label=');
      sb.f(this.zbd_1);
    }
    return sb.toString();
  };
  protoOf(NavDestination).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof NavDestination);
    }
    if (tmp)
      return false;
    var equalDeepLinks = equals(this.abe_1, other.abe_1);
    var tmp_0;
    if (this.bbe_1.n() === other.bbe_1.n()) {
      var tmp0 = asSequence(this.bbe_1);
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.sequences.all' call
        var _iterator__ex2g4s = tmp0.j();
        while (_iterator__ex2g4s.k()) {
          var element = _iterator__ex2g4s.l();
          // Inline function 'androidx.navigation.NavDestination.equals.<anonymous>' call
          if (!(other.bbe_1.j2(element.u()) && equals(other.bbe_1.l2(element.u()), element.v()))) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
        tmp$ret$1 = true;
      }
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = false;
    }
    var equalArguments = tmp_0;
    return this.cbe_1 === other.cbe_1 && this.dbe_1 == other.dbe_1 && equalDeepLinks && equalArguments;
  };
  protoOf(NavDestination).hashCode = function () {
    var result = this.cbe_1;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.dbe_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.abe_1.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'androidx.navigation.NavDestination.hashCode.<anonymous>' call
      var tmp_0 = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element.ubc_1;
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
      var tmp_1 = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_1 = element.vbc_1;
      var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
      result = tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
      var tmp_2 = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_2 = element.wbc_1;
      var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
      result = tmp_2 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.bbe_1.m2().j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      // Inline function 'androidx.navigation.NavDestination.hashCode.<anonymous>' call
      result = imul(31, result) + getStringHashCode(element_0) | 0;
      var tmp_3 = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_3 = this.bbe_1.l2(element_0);
      var tmp1_elvis_lhs_3 = tmp0_safe_receiver_3 == null ? null : hashCode(tmp0_safe_receiver_3);
      result = tmp_3 + (tmp1_elvis_lhs_3 == null ? 0 : tmp1_elvis_lhs_3) | 0;
    }
    return result;
  };
  function NavDestinationBuilder_init_$Init$(navigator, route, $this) {
    NavDestinationBuilder.call($this, navigator, -1, route);
    return $this;
  }
  function NavDestinationBuilder(navigator, id, route) {
    this.lbf_1 = navigator;
    this.mbf_1 = id;
    this.nbf_1 = route;
    this.obf_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.pbf_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.qbf_1 = ArrayList_init_$Create$();
  }
  protoOf(NavDestinationBuilder).rbf = function (name, argument) {
    // Inline function 'kotlin.collections.set' call
    this.pbf_1.o2(name, argument);
  };
  protoOf(NavDestinationBuilder).sbf = function (navDeepLink) {
    this.qbf_1.e(navDeepLink);
  };
  protoOf(NavDestinationBuilder).tbf = function () {
    return this.lbf_1.ubf();
  };
  protoOf(NavDestinationBuilder).k1z = function () {
    // Inline function 'kotlin.also' call
    var this_0 = this.tbf();
    // Inline function 'androidx.navigation.NavDestinationBuilder.build.<anonymous>' call
    this_0.zbd_1 = this.obf_1;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.pbf_1.t().j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'androidx.navigation.NavDestinationBuilder.build.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = element.u();
      // Inline function 'kotlin.collections.component2' call
      var argument = element.v();
      this_0.jbf(name, argument);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = this.qbf_1.j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      // Inline function 'androidx.navigation.NavDestinationBuilder.build.<anonymous>.<anonymous>' call
      this_0.tbe(element_0);
    }
    if (!(this.nbf_1 == null)) {
      this_0.qbe(this.nbf_1);
    }
    if (!(this.mbf_1 === -1)) {
      this_0.cbe_1 = this.mbf_1;
    }
    return this_0;
  };
  function NavGraph$Companion$childHierarchy$lambda(it) {
    var tmp;
    if (it instanceof NavGraph) {
      tmp = it.wbf(it.vbf());
    } else {
      tmp = null;
    }
    return tmp;
  }
  function _set_startDestinationId__488ru8($this, startDestId) {
    // Inline function 'kotlin.require' call
    if (!!(startDestId === $this.cbe_1)) {
      // Inline function 'androidx.navigation.NavGraph.<set-startDestinationId>.<anonymous>' call
      var message = 'Start destination ' + startDestId + ' cannot use the same id as the graph ' + $this.toString();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (!($this.gbf_1 == null)) {
      _set_startDestinationRoute__ih5gmw($this, null);
    }
    $this.ebf_1 = startDestId;
    $this.fbf_1 = null;
  }
  function _set_startDestinationRoute__ih5gmw($this, startDestRoute) {
    var tmp = $this;
    var tmp_0;
    if (startDestRoute == null) {
      tmp_0 = 0;
    } else {
      // Inline function 'kotlin.require' call
      if (!!(startDestRoute == $this.dbe_1)) {
        // Inline function 'androidx.navigation.NavGraph.<set-startDestinationRoute>.<anonymous>' call
        var message = 'Start destination ' + startDestRoute + ' cannot use the same route as the graph ' + $this.toString();
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.text.isNotBlank' call
      // Inline function 'kotlin.require' call
      if (!!isBlank(startDestRoute)) {
        // Inline function 'androidx.navigation.NavGraph.<set-startDestinationRoute>.<anonymous>' call
        var message_0 = 'Cannot have an empty start destination route';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var internalRoute = Companion_instance_3.obe(startDestRoute);
      tmp_0 = getStringHashCode(internalRoute);
    }
    tmp.ebf_1 = tmp_0;
    $this.gbf_1 = startDestRoute;
  }
  function Companion_3() {
  }
  protoOf(Companion_3).xbf = function (_this__u8e3s4) {
    var tmp = _this__u8e3s4 instanceof NavDestination ? _this__u8e3s4 : THROW_CCE();
    return generateSequence(tmp, NavGraph$Companion$childHierarchy$lambda);
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function NavGraph$iterator$1(this$0) {
    this.abg_1 = this$0;
    this.ybf_1 = -1;
    this.zbf_1 = false;
  }
  protoOf(NavGraph$iterator$1).k = function () {
    return (this.ybf_1 + 1 | 0) < this.abg_1.dbf_1.yu();
  };
  protoOf(NavGraph$iterator$1).l = function () {
    if (!this.k()) {
      throw NoSuchElementException_init_$Create$();
    }
    this.zbf_1 = true;
    this.ybf_1 = this.ybf_1 + 1 | 0;
    return this.abg_1.dbf_1.zu(this.ybf_1);
  };
  protoOf(NavGraph$iterator$1).l4 = function () {
    // Inline function 'kotlin.check' call
    if (!this.zbf_1) {
      // Inline function 'androidx.navigation.<no name provided>.remove.<anonymous>' call
      var message = 'You must call next() before you can remove an element';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.navigation.<no name provided>.remove.<anonymous>' call
    var $this$with = this.abg_1.dbf_1;
    $this$with.zu(this.ybf_1).ybd_1 = null;
    $this$with.iv(this.ybf_1);
    this.ybf_1 = this.ybf_1 - 1 | 0;
    this.zbf_1 = false;
  };
  function NavGraph$setStartDestination$lambda($startDestRoute) {
    return function (startDestination) {
      // Inline function 'kotlin.collections.mapValues' call
      var this_0 = startDestination.ibc();
      // Inline function 'kotlin.collections.mapValuesTo' call
      var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.n()));
      // Inline function 'kotlin.collections.associateByTo' call
      var _iterator__ex2g4s = this_0.t().j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
        var tmp = element.u();
        // Inline function 'androidx.navigation.NavGraph.setStartDestination.<anonymous>.<anonymous>' call
        var tmp$ret$1 = element.v().gba_1;
        destination.o2(tmp, tmp$ret$1);
      }
      var args = destination;
      return generateRouteWithArgs($startDestRoute, args);
    };
  }
  function NavGraph(navGraphNavigator) {
    NavDestination_init_$Init$(navGraphNavigator, this);
    this.dbf_1 = new SparseArrayCompat();
    this.ebf_1 = 0;
    this.fbf_1 = null;
    this.gbf_1 = null;
  }
  protoOf(NavGraph).hbf = function (route, searchChildren, searchParent, lastVisited) {
    var bestMatch = this.vbe(route);
    var tmp;
    if (searchChildren) {
      // Inline function 'kotlin.collections.mapNotNull' call
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var destination = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = this.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
        // Inline function 'androidx.navigation.NavGraph.matchDeepLinkComprehensive.<anonymous>' call
        var tmp0_safe_receiver = !element.equals(lastVisited) ? element.ube(route) : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
          destination.e(tmp0_safe_receiver);
        }
      }
      tmp = maxOrNull(destination);
    } else {
      tmp = null;
    }
    var bestChildMatch = tmp;
    var tmp0_safe_receiver_0 = this.ybd_1;
    var tmp_0;
    if (tmp0_safe_receiver_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.navigation.NavGraph.matchDeepLinkComprehensive.<anonymous>' call
      tmp_0 = searchParent && !tmp0_safe_receiver_0.equals(lastVisited) ? tmp0_safe_receiver_0.hbf(route, searchChildren, true, this) : null;
    }
    var bestParentMatch = tmp_0;
    return maxOrNull(listOfNotNull([bestMatch, bestChildMatch, bestParentMatch]));
  };
  protoOf(NavGraph).ube = function (route) {
    return this.hbf(route, true, false, this);
  };
  protoOf(NavGraph).bbg = function (node) {
    var id = node.cbe_1;
    var innerRoute = node.dbe_1;
    // Inline function 'kotlin.require' call
    if (!(!(id === 0) || !(innerRoute == null))) {
      // Inline function 'androidx.navigation.NavGraph.addDestination.<anonymous>' call
      var message = 'Destinations must have an id or route.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (!(this.dbe_1 == null)) {
      // Inline function 'kotlin.require' call
      if (!!(innerRoute == this.dbe_1)) {
        // Inline function 'androidx.navigation.NavGraph.addDestination.<anonymous>' call
        var message_0 = 'Destination ' + node.toString() + ' cannot have the same route as graph ' + this.toString();
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    // Inline function 'kotlin.require' call
    if (!!(id === this.cbe_1)) {
      // Inline function 'androidx.navigation.NavGraph.addDestination.<anonymous>' call
      var message_1 = 'Destination ' + node.toString() + ' cannot have the same id as graph ' + this.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var existingDestination = this.dbf_1.p(id);
    if (existingDestination === node) {
      return Unit_instance;
    }
    // Inline function 'kotlin.check' call
    if (!(node.ybd_1 == null)) {
      // Inline function 'androidx.navigation.NavGraph.addDestination.<anonymous>' call
      var message_2 = 'Destination already has a parent set. Call NavGraph.remove() to remove the previous parent.';
      throw IllegalStateException_init_$Create$(toString(message_2));
    }
    if (!(existingDestination == null)) {
      existingDestination.ybd_1 = null;
    }
    node.ybd_1 = this;
    this.dbf_1.lv(node.cbe_1, node);
  };
  protoOf(NavGraph).cbg = function (nodes) {
    var tmp0_iterator = nodes.j();
    $l$loop: while (tmp0_iterator.k()) {
      var node = tmp0_iterator.l();
      if (node == null) {
        continue $l$loop;
      }
      this.bbg(node);
    }
  };
  protoOf(NavGraph).wbf = function (resId) {
    return this.dbg(resId, this, false);
  };
  protoOf(NavGraph).dbg = function (resId, lastVisited, searchChildren) {
    var destination = this.dbf_1.p(resId);
    if (!(destination == null))
      return destination;
    if (searchChildren) {
      var tmp0 = asSequence_0(valueIterator(this.dbf_1));
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.sequences.firstNotNullOfOrNull' call
        var _iterator__ex2g4s = tmp0.j();
        while (_iterator__ex2g4s.k()) {
          var element = _iterator__ex2g4s.l();
          // Inline function 'androidx.navigation.NavGraph.findNodeComprehensive.<anonymous>' call
          var tmp;
          var tmp_0;
          if (element instanceof NavGraph) {
            tmp_0 = !element.equals(lastVisited);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp = element.dbg(resId, this, true);
          } else {
            tmp = null;
          }
          var result = tmp;
          if (!(result == null)) {
            tmp$ret$1 = result;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      destination = tmp$ret$1;
    }
    var tmp0_elvis_lhs = destination;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      var tmp_2;
      if (!(this.ybd_1 == null) && !equals(this.ybd_1, lastVisited)) {
        tmp_2 = ensureNotNull(this.ybd_1).dbg(resId, this, searchChildren);
      } else {
        tmp_2 = null;
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  };
  protoOf(NavGraph).ebg = function (route) {
    var tmp;
    // Inline function 'kotlin.text.isNullOrBlank' call
    if (!(route == null || isBlank(route))) {
      tmp = this.fbg(route, true);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(NavGraph).fbg = function (route, searchParents) {
    var tmp0 = asSequence_0(valueIterator(this.dbf_1));
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.sequences.firstOrNull' call
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'androidx.navigation.NavGraph.findNode.<anonymous>' call
        if (equals_0(element.dbe_1, route) || !(element.ube(route) == null)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var destination = tmp$ret$1;
    return destination == null ? searchParents && !(this.ybd_1 == null) ? ensureNotNull(this.ybd_1).ebg(route) : null : destination;
  };
  protoOf(NavGraph).j = function () {
    return new NavGraph$iterator$1(this);
  };
  protoOf(NavGraph).sbe = function () {
    return !(this.cbe_1 === 0) ? protoOf(NavDestination).sbe.call(this) : 'the root navigation';
  };
  protoOf(NavGraph).vbf = function () {
    return this.ebf_1;
  };
  protoOf(NavGraph).gbg = function (startDestId) {
    _set_startDestinationId__488ru8(this, startDestId);
  };
  protoOf(NavGraph).hbg = function (startDestRoute) {
    _set_startDestinationRoute__ih5gmw(this, startDestRoute);
  };
  protoOf(NavGraph).ibg = function (startDestRoute) {
    var tmp = serializer(getKClassFromExpression(startDestRoute));
    this.jbg(tmp, NavGraph$setStartDestination$lambda(startDestRoute));
  };
  protoOf(NavGraph).jbg = function (serializer, parseRoute) {
    var id = generateHashCode(serializer);
    var startDest = this.wbf(id);
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (startDest == null) {
        // Inline function 'androidx.navigation.NavGraph.setStartDestination.<anonymous>' call
        var message = 'Cannot find startDestination ' + serializer.nab().hac() + ' from NavGraph. ' + 'Ensure the starting NavDestination was added with route from KClass.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    _set_startDestinationRoute__ih5gmw(this, parseRoute(startDest));
    this.ebf_1 = id;
  };
  protoOf(NavGraph).kbg = function () {
    if (this.fbf_1 == null) {
      var tmp = this;
      var tmp0_elvis_lhs = this.gbf_1;
      tmp.fbf_1 = tmp0_elvis_lhs == null ? this.ebf_1.toString() : tmp0_elvis_lhs;
    }
    return ensureNotNull(this.fbf_1);
  };
  protoOf(NavGraph).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.o8(protoOf(NavDestination).toString.call(this));
    var tmp0_elvis_lhs = this.ebg(this.gbf_1);
    var startDestination = tmp0_elvis_lhs == null ? this.wbf(this.vbf()) : tmp0_elvis_lhs;
    sb.o8(' startDestination=');
    if (startDestination == null) {
      if (!(this.gbf_1 == null)) {
        sb.o8(this.gbf_1);
      } else if (!(this.fbf_1 == null)) {
        sb.o8(this.fbf_1);
      } else {
        sb.o8(Companion_instance_3.nbe(this.ebf_1));
      }
    } else {
      sb.o8('{');
      sb.o8(startDestination.toString());
      sb.o8('}');
    }
    return sb.toString();
  };
  protoOf(NavGraph).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof NavGraph);
    }
    if (tmp)
      return false;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (protoOf(NavDestination).equals.call(this, other)) {
      // Inline function 'androidx.collection.size' call
      var tmp_3 = this.dbf_1.yu();
      // Inline function 'androidx.collection.size' call
      tmp_2 = tmp_3 === other.dbf_1.yu();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.vbf() === other.vbf();
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp2 = asSequence_0(valueIterator(this.dbf_1));
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.sequences.all' call
        var _iterator__ex2g4s = tmp2.j();
        while (_iterator__ex2g4s.k()) {
          var element = _iterator__ex2g4s.l();
          // Inline function 'androidx.navigation.NavGraph.equals.<anonymous>' call
          if (!element.equals(other.dbf_1.p(element.cbe_1))) {
            tmp$ret$3 = false;
            break $l$block;
          }
        }
        tmp$ret$3 = true;
      }
      tmp_0 = tmp$ret$3;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  protoOf(NavGraph).hashCode = function () {
    var result = this.vbf();
    // Inline function 'androidx.collection.forEach' call
    var this_0 = this.dbf_1;
    var inductionVariable = 0;
    var last = this_0.yu();
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1 = this_0.gv(index);
        // Inline function 'androidx.navigation.NavGraph.hashCode.<anonymous>' call
        var value = this_0.zu(index);
        result = imul(31, result) + tmp1 | 0;
        result = imul(31, result) + value.hashCode() | 0;
      }
       while (inductionVariable < last);
    return result;
  };
  function NavGraphBuilder_init_$Init$(provider, startDestination, route, $this) {
    // Inline function 'androidx.navigation.get' call
    var clazz = getKClass(NavGraphNavigator);
    var tmp$ret$0 = provider.nbg(clazz);
    NavDestinationBuilder_init_$Init$(tmp$ret$0, route, $this);
    NavGraphBuilder.call($this);
    $this.ubg_1 = provider;
    $this.wbg_1 = startDestination;
    return $this;
  }
  function NavGraphBuilder_init_$Create$(provider, startDestination, route) {
    return NavGraphBuilder_init_$Init$(provider, startDestination, route, objectCreate(protoOf(NavGraphBuilder)));
  }
  function NavGraphBuilder$build$lambda(it) {
    return ensureNotNull(it.dbe_1);
  }
  protoOf(NavGraphBuilder).abh = function (navDestination) {
    var tmp0 = this.zbg_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = navDestination.k1z();
    tmp0.e(element);
  };
  protoOf(NavGraphBuilder).k1z = function () {
    // Inline function 'kotlin.also' call
    var this_0 = protoOf(NavDestinationBuilder).k1z.call(this);
    // Inline function 'androidx.navigation.NavGraphBuilder.build.<anonymous>' call
    this_0.cbg(this.zbg_1);
    if (this.vbg_1 === 0 && this.wbg_1 == null && this.xbg_1 == null && this.ybg_1 == null) {
      if (!(this.nbf_1 == null)) {
        throw IllegalStateException_init_$Create$('You must set a start destination route');
      } else {
        throw IllegalStateException_init_$Create$('You must set a start destination id');
      }
    }
    if (!(this.wbg_1 == null)) {
      this_0.hbg(ensureNotNull(this.wbg_1));
    } else if (!(this.xbg_1 == null)) {
      var tmp = serializer(ensureNotNull(this.xbg_1));
      this_0.jbg(tmp, NavGraphBuilder$build$lambda);
    } else if (!(this.ybg_1 == null)) {
      this_0.ibg(ensureNotNull(this.ybg_1));
    } else {
      this_0.gbg(this.vbg_1);
    }
    return this_0;
  };
  function NavGraphBuilder() {
    this.vbg_1 = 0;
    this.wbg_1 = null;
    this.xbg_1 = null;
    this.ybg_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.zbg_1 = ArrayList_init_$Create$();
  }
  function navigate($this, entry, navOptions, navigatorExtras) {
    var tmp = entry.kbb_1;
    var destination = tmp instanceof NavGraph ? tmp : THROW_CCE();
    var args = entry.ibc();
    var startId = destination.vbf();
    var startRoute = destination.gbf_1;
    // Inline function 'kotlin.check' call
    if (!(!(startId === 0) || !(startRoute == null))) {
      // Inline function 'androidx.navigation.NavGraphNavigator.navigate.<anonymous>' call
      var message = 'no start destination defined via app:startDestination for ' + destination.sbe();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp_0;
    if (!(startRoute == null)) {
      tmp_0 = destination.fbg(startRoute, false);
    } else {
      tmp_0 = destination.dbf_1.p(startId);
    }
    var startDestination = tmp_0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (startDestination == null) {
        var dest = destination.kbg();
        throw IllegalArgumentException_init_$Create$('navigation destination ' + dest + ' is not a direct child of this NavGraph');
      } else {
        break $l$block;
      }
    }
    if (!(startRoute == null) && !(startRoute == startDestination.dbe_1)) {
      var tmp0_safe_receiver = startDestination.ube(startRoute);
      var matchingArgs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.fbe_1;
      if (!(matchingArgs == null) && !matchingArgs.q()) {
        var bundle = Bundle_init_$Create$_0();
        bundle.mb5(matchingArgs);
        var tmp1_safe_receiver = args;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'androidx.navigation.NavGraphNavigator.navigate.<anonymous>' call
          bundle.mb5(tmp1_safe_receiver);
        }
        args = bundle;
      }
    }
    var navigator = $this.ebh_1.fbh(startDestination.xbd_1);
    var startDestinationEntry = $this.gbh().gbb(startDestination, startDestination.kbf(args));
    navigator.hbh(listOf(startDestinationEntry), navOptions, navigatorExtras);
  }
  function Companion_4() {
    this.ibh_1 = 'navigation';
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function NavGraphNavigator(navigatorProvider) {
    Navigator_init_$Init$('navigation', this);
    this.ebh_1 = navigatorProvider;
  }
  protoOf(NavGraphNavigator).ubf = function () {
    return new NavGraph(this);
  };
  protoOf(NavGraphNavigator).hbh = function (entries, navOptions, navigatorExtras) {
    var tmp0_iterator = entries.j();
    while (tmp0_iterator.k()) {
      var entry = tmp0_iterator.l();
      navigate(this, entry, navOptions, navigatorExtras);
    }
  };
  function NavOptions_init_$Init$(singleTop, restoreState, popUpToRoute, popUpToInclusive, popUpToSaveState, $this) {
    NavOptions.call($this, singleTop, restoreState, getStringHashCode(Companion_instance_3.obe(popUpToRoute)), popUpToInclusive, popUpToSaveState);
    $this.ubh_1 = popUpToRoute;
    return $this;
  }
  function NavOptions_init_$Create$(singleTop, restoreState, popUpToRoute, popUpToInclusive, popUpToSaveState) {
    return NavOptions_init_$Init$(singleTop, restoreState, popUpToRoute, popUpToInclusive, popUpToSaveState, objectCreate(protoOf(NavOptions)));
  }
  function NavOptions_init_$Init$_0(singleTop, restoreState, popUpToRouteClass, popUpToInclusive, popUpToSaveState, $this) {
    NavOptions.call($this, singleTop, restoreState, generateHashCode(serializer(ensureNotNull(popUpToRouteClass))), popUpToInclusive, popUpToSaveState);
    $this.vbh_1 = popUpToRouteClass;
    return $this;
  }
  function NavOptions_init_$Create$_0(singleTop, restoreState, popUpToRouteClass, popUpToInclusive, popUpToSaveState) {
    return NavOptions_init_$Init$_0(singleTop, restoreState, popUpToRouteClass, popUpToInclusive, popUpToSaveState, objectCreate(protoOf(NavOptions)));
  }
  function NavOptions_init_$Init$_1(singleTop, restoreState, popUpToRouteObject, popUpToInclusive, popUpToSaveState, $this) {
    NavOptions.call($this, singleTop, restoreState, generateHashCode(serializer(getKClassFromExpression(popUpToRouteObject))), popUpToInclusive, popUpToSaveState);
    $this.wbh_1 = popUpToRouteObject;
    return $this;
  }
  function NavOptions_init_$Create$_1(singleTop, restoreState, popUpToRouteObject, popUpToInclusive, popUpToSaveState) {
    return NavOptions_init_$Init$_1(singleTop, restoreState, popUpToRouteObject, popUpToInclusive, popUpToSaveState, objectCreate(protoOf(NavOptions)));
  }
  function Builder_1() {
    this.xbh_1 = false;
    this.ybh_1 = false;
    this.zbh_1 = -1;
    this.abi_1 = null;
    this.bbi_1 = null;
    this.cbi_1 = null;
    this.dbi_1 = false;
    this.ebi_1 = false;
  }
  protoOf(Builder_1).fbi = function (singleTop) {
    this.xbh_1 = singleTop;
    return this;
  };
  protoOf(Builder_1).gbi = function (restoreState) {
    this.ybh_1 = restoreState;
    return this;
  };
  protoOf(Builder_1).hbi = function (destinationId, inclusive, saveState) {
    this.zbh_1 = destinationId;
    this.abi_1 = null;
    this.dbi_1 = inclusive;
    this.ebi_1 = saveState;
    return this;
  };
  protoOf(Builder_1).ibi = function (route, inclusive, saveState) {
    this.abi_1 = route;
    this.zbh_1 = -1;
    this.dbi_1 = inclusive;
    this.ebi_1 = saveState;
    return this;
  };
  protoOf(Builder_1).jbi = function (klass, inclusive, saveState) {
    this.bbi_1 = klass;
    this.zbh_1 = -1;
    this.dbi_1 = inclusive;
    this.ebi_1 = saveState;
    return this;
  };
  protoOf(Builder_1).kbi = function (route, inclusive, saveState) {
    this.cbi_1 = route;
    this.hbi(generateHashCode(serializer(getKClassFromExpression(route))), inclusive, saveState);
    return this;
  };
  protoOf(Builder_1).k1z = function () {
    var tmp;
    if (!(this.abi_1 == null)) {
      tmp = NavOptions_init_$Create$(this.xbh_1, this.ybh_1, this.abi_1, this.dbi_1, this.ebi_1);
    } else if (!(this.bbi_1 == null)) {
      tmp = NavOptions_init_$Create$_0(this.xbh_1, this.ybh_1, this.bbi_1, this.dbi_1, this.ebi_1);
    } else if (!(this.cbi_1 == null)) {
      tmp = NavOptions_init_$Create$_1(this.xbh_1, this.ybh_1, ensureNotNull(this.cbi_1), this.dbi_1, this.ebi_1);
    } else {
      tmp = new NavOptions(this.xbh_1, this.ybh_1, this.zbh_1, this.dbi_1, this.ebi_1);
    }
    return tmp;
  };
  function NavOptions(singleTop, restoreState, popUpToId, popUpToInclusive, popUpToSaveState) {
    this.pbh_1 = singleTop;
    this.qbh_1 = restoreState;
    this.rbh_1 = popUpToId;
    this.sbh_1 = popUpToInclusive;
    this.tbh_1 = popUpToSaveState;
    this.ubh_1 = null;
    this.vbh_1 = null;
    this.wbh_1 = null;
  }
  protoOf(NavOptions).lbi = function () {
    return this.pbh_1;
  };
  protoOf(NavOptions).mbi = function () {
    return this.qbh_1;
  };
  protoOf(NavOptions).nbi = function () {
    return this.sbh_1;
  };
  protoOf(NavOptions).obi = function () {
    return this.tbh_1;
  };
  protoOf(NavOptions).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof NavOptions);
    }
    if (tmp)
      return false;
    return this.pbh_1 === other.pbh_1 && this.qbh_1 === other.qbh_1 && this.rbh_1 === other.rbh_1 && this.ubh_1 == other.ubh_1 && equals(this.vbh_1, other.vbh_1) && equals(this.wbh_1, other.wbh_1) && this.sbh_1 === other.sbh_1 && this.tbh_1 === other.tbh_1;
  };
  protoOf(NavOptions).hashCode = function () {
    var result = this.lbi() ? 1 : 0;
    result = imul(31, result) + (this.mbi() ? 1 : 0) | 0;
    result = imul(31, result) + this.rbh_1 | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.ubh_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.vbh_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.wbh_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    result = tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    result = imul(31, result) + (this.nbi() ? 1 : 0) | 0;
    result = imul(31, result) + (this.obi() ? 1 : 0) | 0;
    return result;
  };
  protoOf(NavOptions).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.o8(getKClassFromExpression(this).xa());
    sb.o8('(');
    if (this.pbh_1) {
      sb.o8('launchSingleTop ');
    }
    if (this.qbh_1) {
      sb.o8('restoreState ');
    }
    if (!(this.ubh_1 == null) || !(this.rbh_1 === -1)) {
      sb.o8('popUpTo(');
      if (!(this.ubh_1 == null)) {
        sb.o8(this.ubh_1);
      } else if (!(this.vbh_1 == null)) {
        sb.n8(this.vbh_1);
      } else if (!(this.wbh_1 == null)) {
        sb.n8(this.wbh_1);
      } else {
        sb.o8(Companion_instance_3.nbe(this.rbh_1));
      }
      if (this.sbh_1) {
        sb.o8(' inclusive');
      }
      if (this.tbh_1) {
        sb.o8(' saveState');
      }
      sb.o8(')');
    }
    return sb.toString();
  };
  function NavOptionsBuilder() {
    this.oba_1 = new Builder_1();
    this.pba_1 = false;
    this.qba_1 = false;
    this.rba_1 = -1;
    this.sba_1 = null;
    this.tba_1 = false;
    this.uba_1 = false;
    this.vba_1 = null;
    this.wba_1 = null;
  }
  protoOf(NavOptionsBuilder).xba = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = this.oba_1;
    // Inline function 'androidx.navigation.NavOptionsBuilder.build.<anonymous>' call
    this_0.fbi(this.pba_1);
    this_0.gbi(this.qba_1);
    if (!(this.sba_1 == null)) {
      this_0.ibi(this.sba_1, this.tba_1, this.uba_1);
    } else if (!(this.vba_1 == null)) {
      this_0.jbi(ensureNotNull(this.vba_1), this.tba_1, this.uba_1);
    } else if (!(this.wba_1 == null)) {
      this_0.kbi(ensureNotNull(this.wba_1), this.tba_1, this.uba_1);
    } else {
      this_0.hbi(this.rba_1, this.tba_1, this.uba_1);
    }
    return this_0.k1z();
  };
  function NavType$Companion$IntType$1() {
    NavType.call(this, false);
  }
  protoOf(NavType$Companion$IntType$1).n2t = function () {
    return 'integer';
  };
  protoOf(NavType$Companion$IntType$1).rbi = function (bundle, key, value) {
    bundle.rb5(key, value);
  };
  protoOf(NavType$Companion$IntType$1).vb8 = function (bundle, key, value) {
    return this.rbi(bundle, key, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$IntType$1).wb8 = function (bundle, key) {
    var tmp = bundle.sb6(key);
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  };
  protoOf(NavType$Companion$IntType$1).xb8 = function (value) {
    var tmp;
    if (startsWith(value, '0x')) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = value.substring(2);
      tmp = toInt_0(tmp$ret$1, 16);
    } else {
      tmp = toInt(value);
    }
    return tmp;
  };
  function NavType$Companion$IntArrayType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(NavType$Companion$IntArrayType$1).n2t = function () {
    return 'integer[]';
  };
  protoOf(NavType$Companion$IntArrayType$1).ubi = function (bundle, key, value) {
    bundle.db6(key, value);
  };
  protoOf(NavType$Companion$IntArrayType$1).vb8 = function (bundle, key, value) {
    return this.ubi(bundle, key, (value == null ? true : isIntArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$IntArrayType$1).wb8 = function (bundle, key) {
    var tmp = bundle.sb6(key);
    return (tmp == null ? true : isIntArray(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(NavType$Companion$IntArrayType$1).xb8 = function (value) {
    // Inline function 'kotlin.intArrayOf' call
    return new Int32Array([Companion_getInstance_7().qb9_1.xb8(value)]);
  };
  protoOf(NavType$Companion$IntArrayType$1).vbi = function (value, previousValue) {
    var tmp;
    if (previousValue == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.plus' call
      var elements = this.xb8(value);
      tmp = primitiveArrayConcat([previousValue, elements]);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.xb8(value) : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$IntArrayType$1).yb8 = function (value, previousValue) {
    return this.vbi(value, (previousValue == null ? true : isIntArray(previousValue)) ? previousValue : THROW_CCE());
  };
  protoOf(NavType$Companion$IntArrayType$1).wbi = function (value, other) {
    var valueArray = value == null ? null : toTypedArray(value);
    var otherArray = other == null ? null : toTypedArray(other);
    return contentDeepEquals(valueArray, otherArray);
  };
  protoOf(NavType$Companion$IntArrayType$1).cb9 = function (value, other) {
    var tmp = (value == null ? true : isIntArray(value)) ? value : THROW_CCE();
    return this.wbi(tmp, (other == null ? true : isIntArray(other)) ? other : THROW_CCE());
  };
  protoOf(NavType$Companion$IntArrayType$1).xbi = function (value) {
    var tmp1_safe_receiver = value == null ? null : toList(value);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_safe_receiver, 10));
      var _iterator__ex2g4s = tmp1_safe_receiver.j();
      while (_iterator__ex2g4s.k()) {
        var item = _iterator__ex2g4s.l();
        // Inline function 'androidx.navigation.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = item.toString();
        destination.e(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp2_elvis_lhs = tmp;
    return tmp2_elvis_lhs == null ? emptyList() : tmp2_elvis_lhs;
  };
  protoOf(NavType$Companion$IntArrayType$1).qb8 = function (value) {
    return this.xbi((value == null ? true : isIntArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$IntArrayType$1).rb8 = function () {
    // Inline function 'kotlin.intArrayOf' call
    return new Int32Array([]);
  };
  function NavType$Companion$IntListType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(NavType$Companion$IntListType$1).n2t = function () {
    return 'List<Int>';
  };
  protoOf(NavType$Companion$IntListType$1).abj = function (bundle, key, value) {
    bundle.db6(key, value == null ? null : toIntArray(value));
  };
  protoOf(NavType$Companion$IntListType$1).vb8 = function (bundle, key, value) {
    return this.abj(bundle, key, (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$IntListType$1).wb8 = function (bundle, key) {
    var tmp = bundle.sb6(key);
    var tmp0_safe_receiver = (tmp == null ? true : isIntArray(tmp)) ? tmp : THROW_CCE();
    return tmp0_safe_receiver == null ? null : toList(tmp0_safe_receiver);
  };
  protoOf(NavType$Companion$IntListType$1).xb8 = function (value) {
    return listOf(Companion_getInstance_7().qb9_1.xb8(value));
  };
  protoOf(NavType$Companion$IntListType$1).bbj = function (value, previousValue) {
    var tmp1_elvis_lhs = previousValue == null ? null : plus_1(previousValue, this.xb8(value));
    return tmp1_elvis_lhs == null ? this.xb8(value) : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$IntListType$1).yb8 = function (value, previousValue) {
    return this.bbj(value, (previousValue == null ? true : isInterface(previousValue, KtList)) ? previousValue : THROW_CCE());
  };
  protoOf(NavType$Companion$IntListType$1).cbj = function (value, other) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp = copyToArray(value);
    }
    var valueArray = tmp;
    var tmp_0;
    if (other == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(other);
    }
    var otherArray = tmp_0;
    return contentDeepEquals(valueArray, otherArray);
  };
  protoOf(NavType$Companion$IntListType$1).cb9 = function (value, other) {
    var tmp = (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE();
    return this.cbj(tmp, (other == null ? true : isInterface(other, KtList)) ? other : THROW_CCE());
  };
  protoOf(NavType$Companion$IntListType$1).dbj = function (value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(value, 10));
      var _iterator__ex2g4s = value.j();
      while (_iterator__ex2g4s.k()) {
        var item = _iterator__ex2g4s.l();
        // Inline function 'androidx.navigation.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = item.toString();
        destination.e(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$IntListType$1).qb8 = function (value) {
    return this.dbj((value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$IntListType$1).rb8 = function () {
    return emptyList();
  };
  function NavType$Companion$LongType$1() {
    NavType.call(this, false);
  }
  protoOf(NavType$Companion$LongType$1).n2t = function () {
    return 'long';
  };
  protoOf(NavType$Companion$LongType$1).gbj = function (bundle, key, value) {
    bundle.sb5(key, value);
  };
  protoOf(NavType$Companion$LongType$1).vb8 = function (bundle, key, value) {
    return this.gbj(bundle, key, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$LongType$1).wb8 = function (bundle, key) {
    var tmp = bundle.sb6(key);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(NavType$Companion$LongType$1).xb8 = function (value) {
    var localValue = value;
    if (endsWith(value, 'L')) {
      var tmp0 = localValue;
      // Inline function 'kotlin.text.substring' call
      var endIndex = value.length - 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      localValue = tmp0.substring(0, endIndex);
    }
    var tmp;
    if (startsWith(value, '0x')) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = localValue.substring(2);
      tmp = toLong_0(tmp$ret$3, 16);
    } else {
      tmp = toLong(localValue);
    }
    return tmp;
  };
  function NavType$Companion$LongArrayType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(NavType$Companion$LongArrayType$1).n2t = function () {
    return 'long[]';
  };
  protoOf(NavType$Companion$LongArrayType$1).jbj = function (bundle, key, value) {
    bundle.eb6(key, value);
  };
  protoOf(NavType$Companion$LongArrayType$1).vb8 = function (bundle, key, value) {
    return this.jbj(bundle, key, (value == null ? true : isLongArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$LongArrayType$1).wb8 = function (bundle, key) {
    var tmp = bundle.sb6(key);
    return (tmp == null ? true : isLongArray(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(NavType$Companion$LongArrayType$1).xb8 = function (value) {
    // Inline function 'kotlin.longArrayOf' call
    return longArrayOf([Companion_getInstance_7().tb9_1.xb8(value)]);
  };
  protoOf(NavType$Companion$LongArrayType$1).kbj = function (value, previousValue) {
    var tmp;
    if (previousValue == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.plus' call
      var elements = this.xb8(value);
      tmp = primitiveArrayConcat([previousValue, elements]);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.xb8(value) : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$LongArrayType$1).yb8 = function (value, previousValue) {
    return this.kbj(value, (previousValue == null ? true : isLongArray(previousValue)) ? previousValue : THROW_CCE());
  };
  protoOf(NavType$Companion$LongArrayType$1).lbj = function (value, other) {
    var valueArray = value == null ? null : toTypedArray_0(value);
    var otherArray = other == null ? null : toTypedArray_0(other);
    return contentDeepEquals(valueArray, otherArray);
  };
  protoOf(NavType$Companion$LongArrayType$1).cb9 = function (value, other) {
    var tmp = (value == null ? true : isLongArray(value)) ? value : THROW_CCE();
    return this.lbj(tmp, (other == null ? true : isLongArray(other)) ? other : THROW_CCE());
  };
  protoOf(NavType$Companion$LongArrayType$1).mbj = function (value) {
    var tmp1_safe_receiver = value == null ? null : toList_0(value);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_safe_receiver, 10));
      var _iterator__ex2g4s = tmp1_safe_receiver.j();
      while (_iterator__ex2g4s.k()) {
        var item = _iterator__ex2g4s.l();
        // Inline function 'androidx.navigation.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = item.toString();
        destination.e(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp2_elvis_lhs = tmp;
    return tmp2_elvis_lhs == null ? emptyList() : tmp2_elvis_lhs;
  };
  protoOf(NavType$Companion$LongArrayType$1).qb8 = function (value) {
    return this.mbj((value == null ? true : isLongArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$LongArrayType$1).rb8 = function () {
    // Inline function 'kotlin.longArrayOf' call
    return longArrayOf([]);
  };
  function NavType$Companion$LongListType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(NavType$Companion$LongListType$1).n2t = function () {
    return 'List<Long>';
  };
  protoOf(NavType$Companion$LongListType$1).pbj = function (bundle, key, value) {
    bundle.eb6(key, value == null ? null : toLongArray(value));
  };
  protoOf(NavType$Companion$LongListType$1).vb8 = function (bundle, key, value) {
    return this.pbj(bundle, key, (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$LongListType$1).wb8 = function (bundle, key) {
    var tmp = bundle.sb6(key);
    var tmp0_safe_receiver = (tmp == null ? true : isLongArray(tmp)) ? tmp : THROW_CCE();
    return tmp0_safe_receiver == null ? null : toList_0(tmp0_safe_receiver);
  };
  protoOf(NavType$Companion$LongListType$1).xb8 = function (value) {
    return listOf(Companion_getInstance_7().tb9_1.xb8(value));
  };
  protoOf(NavType$Companion$LongListType$1).qbj = function (value, previousValue) {
    var tmp1_elvis_lhs = previousValue == null ? null : plus_1(previousValue, this.xb8(value));
    return tmp1_elvis_lhs == null ? this.xb8(value) : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$LongListType$1).yb8 = function (value, previousValue) {
    return this.qbj(value, (previousValue == null ? true : isInterface(previousValue, KtList)) ? previousValue : THROW_CCE());
  };
  protoOf(NavType$Companion$LongListType$1).rbj = function (value, other) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp = copyToArray(value);
    }
    var valueArray = tmp;
    var tmp_0;
    if (other == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(other);
    }
    var otherArray = tmp_0;
    return contentDeepEquals(valueArray, otherArray);
  };
  protoOf(NavType$Companion$LongListType$1).cb9 = function (value, other) {
    var tmp = (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE();
    return this.rbj(tmp, (other == null ? true : isInterface(other, KtList)) ? other : THROW_CCE());
  };
  protoOf(NavType$Companion$LongListType$1).sbj = function (value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(value, 10));
      var _iterator__ex2g4s = value.j();
      while (_iterator__ex2g4s.k()) {
        var item = _iterator__ex2g4s.l();
        // Inline function 'androidx.navigation.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = item.toString();
        destination.e(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$LongListType$1).qb8 = function (value) {
    return this.sbj((value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$LongListType$1).rb8 = function () {
    return emptyList();
  };
  function NavType$Companion$FloatType$1() {
    NavType.call(this, false);
  }
  protoOf(NavType$Companion$FloatType$1).n2t = function () {
    return 'float';
  };
  protoOf(NavType$Companion$FloatType$1).vbj = function (bundle, key, value) {
    bundle.tb5(key, value);
  };
  protoOf(NavType$Companion$FloatType$1).vb8 = function (bundle, key, value) {
    return this.vbj(bundle, key, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$FloatType$1).wb8 = function (bundle, key) {
    var tmp = bundle.sb6(key);
    return (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
  };
  protoOf(NavType$Companion$FloatType$1).xb8 = function (value) {
    // Inline function 'kotlin.text.toFloat' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(value);
  };
  function NavType$Companion$FloatArrayType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(NavType$Companion$FloatArrayType$1).n2t = function () {
    return 'float[]';
  };
  protoOf(NavType$Companion$FloatArrayType$1).ybj = function (bundle, key, value) {
    bundle.fb6(key, value);
  };
  protoOf(NavType$Companion$FloatArrayType$1).vb8 = function (bundle, key, value) {
    return this.ybj(bundle, key, (value == null ? true : isFloatArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$FloatArrayType$1).wb8 = function (bundle, key) {
    var tmp = bundle.sb6(key);
    return (tmp == null ? true : isFloatArray(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(NavType$Companion$FloatArrayType$1).xb8 = function (value) {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([Companion_getInstance_7().wb9_1.xb8(value)]);
  };
  protoOf(NavType$Companion$FloatArrayType$1).zbj = function (value, previousValue) {
    var tmp;
    if (previousValue == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.plus' call
      var elements = this.xb8(value);
      tmp = primitiveArrayConcat([previousValue, elements]);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.xb8(value) : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$FloatArrayType$1).yb8 = function (value, previousValue) {
    return this.zbj(value, (previousValue == null ? true : isFloatArray(previousValue)) ? previousValue : THROW_CCE());
  };
  protoOf(NavType$Companion$FloatArrayType$1).abk = function (value, other) {
    var valueArray = value == null ? null : toTypedArray_1(value);
    var otherArray = other == null ? null : toTypedArray_1(other);
    return contentDeepEquals(valueArray, otherArray);
  };
  protoOf(NavType$Companion$FloatArrayType$1).cb9 = function (value, other) {
    var tmp = (value == null ? true : isFloatArray(value)) ? value : THROW_CCE();
    return this.abk(tmp, (other == null ? true : isFloatArray(other)) ? other : THROW_CCE());
  };
  protoOf(NavType$Companion$FloatArrayType$1).bbk = function (value) {
    var tmp1_safe_receiver = value == null ? null : toList_1(value);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_safe_receiver, 10));
      var _iterator__ex2g4s = tmp1_safe_receiver.j();
      while (_iterator__ex2g4s.k()) {
        var item = _iterator__ex2g4s.l();
        // Inline function 'androidx.navigation.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = item.toString();
        destination.e(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp2_elvis_lhs = tmp;
    return tmp2_elvis_lhs == null ? emptyList() : tmp2_elvis_lhs;
  };
  protoOf(NavType$Companion$FloatArrayType$1).qb8 = function (value) {
    return this.bbk((value == null ? true : isFloatArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$FloatArrayType$1).rb8 = function () {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([]);
  };
  function NavType$Companion$FloatListType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(NavType$Companion$FloatListType$1).n2t = function () {
    return 'List<Float>';
  };
  protoOf(NavType$Companion$FloatListType$1).ebk = function (bundle, key, value) {
    bundle.fb6(key, value == null ? null : toFloatArray(value));
  };
  protoOf(NavType$Companion$FloatListType$1).vb8 = function (bundle, key, value) {
    return this.ebk(bundle, key, (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$FloatListType$1).wb8 = function (bundle, key) {
    var tmp = bundle.sb6(key);
    var tmp0_safe_receiver = (tmp == null ? true : isFloatArray(tmp)) ? tmp : THROW_CCE();
    return tmp0_safe_receiver == null ? null : toList_1(tmp0_safe_receiver);
  };
  protoOf(NavType$Companion$FloatListType$1).xb8 = function (value) {
    return listOf(Companion_getInstance_7().wb9_1.xb8(value));
  };
  protoOf(NavType$Companion$FloatListType$1).fbk = function (value, previousValue) {
    var tmp1_elvis_lhs = previousValue == null ? null : plus_1(previousValue, this.xb8(value));
    return tmp1_elvis_lhs == null ? this.xb8(value) : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$FloatListType$1).yb8 = function (value, previousValue) {
    return this.fbk(value, (previousValue == null ? true : isInterface(previousValue, KtList)) ? previousValue : THROW_CCE());
  };
  protoOf(NavType$Companion$FloatListType$1).gbk = function (value, other) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp = copyToArray(value);
    }
    var valueArray = tmp;
    var tmp_0;
    if (other == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(other);
    }
    var otherArray = tmp_0;
    return contentDeepEquals(valueArray, otherArray);
  };
  protoOf(NavType$Companion$FloatListType$1).cb9 = function (value, other) {
    var tmp = (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE();
    return this.gbk(tmp, (other == null ? true : isInterface(other, KtList)) ? other : THROW_CCE());
  };
  protoOf(NavType$Companion$FloatListType$1).hbk = function (value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(value, 10));
      var _iterator__ex2g4s = value.j();
      while (_iterator__ex2g4s.k()) {
        var item = _iterator__ex2g4s.l();
        // Inline function 'androidx.navigation.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = item.toString();
        destination.e(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$FloatListType$1).qb8 = function (value) {
    return this.hbk((value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$FloatListType$1).rb8 = function () {
    return emptyList();
  };
  function NavType$Companion$BoolType$1() {
    NavType.call(this, false);
  }
  protoOf(NavType$Companion$BoolType$1).n2t = function () {
    return 'boolean';
  };
  protoOf(NavType$Companion$BoolType$1).kbk = function (bundle, key, value) {
    bundle.nb5(key, value);
  };
  protoOf(NavType$Companion$BoolType$1).vb8 = function (bundle, key, value) {
    return this.kbk(bundle, key, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$BoolType$1).wb8 = function (bundle, key) {
    var tmp = bundle.sb6(key);
    return (tmp == null ? true : typeof tmp === 'boolean') ? tmp : THROW_CCE();
  };
  protoOf(NavType$Companion$BoolType$1).xb8 = function (value) {
    var tmp;
    switch (value) {
      case 'true':
        tmp = true;
        break;
      case 'false':
        tmp = false;
        break;
      default:
        throw IllegalArgumentException_init_$Create$('A boolean NavType only accepts "true" or "false" values.');
    }
    return tmp;
  };
  function NavType$Companion$BoolArrayType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(NavType$Companion$BoolArrayType$1).n2t = function () {
    return 'boolean[]';
  };
  protoOf(NavType$Companion$BoolArrayType$1).nbk = function (bundle, key, value) {
    bundle.zb5(key, value);
  };
  protoOf(NavType$Companion$BoolArrayType$1).vb8 = function (bundle, key, value) {
    return this.nbk(bundle, key, (value == null ? true : isBooleanArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$BoolArrayType$1).wb8 = function (bundle, key) {
    var tmp = bundle.sb6(key);
    return (tmp == null ? true : isBooleanArray(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(NavType$Companion$BoolArrayType$1).xb8 = function (value) {
    // Inline function 'kotlin.booleanArrayOf' call
    return booleanArrayOf([Companion_getInstance_7().zb9_1.xb8(value)]);
  };
  protoOf(NavType$Companion$BoolArrayType$1).obk = function (value, previousValue) {
    var tmp;
    if (previousValue == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.plus' call
      var elements = this.xb8(value);
      tmp = primitiveArrayConcat([previousValue, elements]);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.xb8(value) : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$BoolArrayType$1).yb8 = function (value, previousValue) {
    return this.obk(value, (previousValue == null ? true : isBooleanArray(previousValue)) ? previousValue : THROW_CCE());
  };
  protoOf(NavType$Companion$BoolArrayType$1).pbk = function (value, other) {
    var valueArray = value == null ? null : toTypedArray_2(value);
    var otherArray = other == null ? null : toTypedArray_2(other);
    return contentDeepEquals(valueArray, otherArray);
  };
  protoOf(NavType$Companion$BoolArrayType$1).cb9 = function (value, other) {
    var tmp = (value == null ? true : isBooleanArray(value)) ? value : THROW_CCE();
    return this.pbk(tmp, (other == null ? true : isBooleanArray(other)) ? other : THROW_CCE());
  };
  protoOf(NavType$Companion$BoolArrayType$1).qbk = function (value) {
    var tmp1_safe_receiver = value == null ? null : toList_2(value);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_safe_receiver, 10));
      var _iterator__ex2g4s = tmp1_safe_receiver.j();
      while (_iterator__ex2g4s.k()) {
        var item = _iterator__ex2g4s.l();
        // Inline function 'androidx.navigation.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = item.toString();
        destination.e(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp2_elvis_lhs = tmp;
    return tmp2_elvis_lhs == null ? emptyList() : tmp2_elvis_lhs;
  };
  protoOf(NavType$Companion$BoolArrayType$1).qb8 = function (value) {
    return this.qbk((value == null ? true : isBooleanArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$BoolArrayType$1).rb8 = function () {
    // Inline function 'kotlin.booleanArrayOf' call
    return booleanArrayOf([]);
  };
  function NavType$Companion$BoolListType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(NavType$Companion$BoolListType$1).n2t = function () {
    return 'List<Boolean>';
  };
  protoOf(NavType$Companion$BoolListType$1).tbk = function (bundle, key, value) {
    bundle.zb5(key, value == null ? null : toBooleanArray(value));
  };
  protoOf(NavType$Companion$BoolListType$1).vb8 = function (bundle, key, value) {
    return this.tbk(bundle, key, (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$BoolListType$1).wb8 = function (bundle, key) {
    var tmp = bundle.sb6(key);
    var tmp0_safe_receiver = (tmp == null ? true : isBooleanArray(tmp)) ? tmp : THROW_CCE();
    return tmp0_safe_receiver == null ? null : toList_2(tmp0_safe_receiver);
  };
  protoOf(NavType$Companion$BoolListType$1).xb8 = function (value) {
    return listOf(Companion_getInstance_7().zb9_1.xb8(value));
  };
  protoOf(NavType$Companion$BoolListType$1).ubk = function (value, previousValue) {
    var tmp1_elvis_lhs = previousValue == null ? null : plus_1(previousValue, this.xb8(value));
    return tmp1_elvis_lhs == null ? this.xb8(value) : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$BoolListType$1).yb8 = function (value, previousValue) {
    return this.ubk(value, (previousValue == null ? true : isInterface(previousValue, KtList)) ? previousValue : THROW_CCE());
  };
  protoOf(NavType$Companion$BoolListType$1).vbk = function (value, other) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp = copyToArray(value);
    }
    var valueArray = tmp;
    var tmp_0;
    if (other == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(other);
    }
    var otherArray = tmp_0;
    return contentDeepEquals(valueArray, otherArray);
  };
  protoOf(NavType$Companion$BoolListType$1).cb9 = function (value, other) {
    var tmp = (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE();
    return this.vbk(tmp, (other == null ? true : isInterface(other, KtList)) ? other : THROW_CCE());
  };
  protoOf(NavType$Companion$BoolListType$1).wbk = function (value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(value, 10));
      var _iterator__ex2g4s = value.j();
      while (_iterator__ex2g4s.k()) {
        var item = _iterator__ex2g4s.l();
        // Inline function 'androidx.navigation.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = item.toString();
        destination.e(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$BoolListType$1).qb8 = function (value) {
    return this.wbk((value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$BoolListType$1).rb8 = function () {
    return emptyList();
  };
  function NavType$Companion$StringType$1() {
    NavType.call(this, true);
  }
  protoOf(NavType$Companion$StringType$1).n2t = function () {
    return 'string';
  };
  protoOf(NavType$Companion$StringType$1).zbk = function (bundle, key, value) {
    bundle.vb5(key, value);
  };
  protoOf(NavType$Companion$StringType$1).vb8 = function (bundle, key, value) {
    return this.zbk(bundle, key, (value == null ? true : typeof value === 'string') ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$StringType$1).wb8 = function (bundle, key) {
    var tmp = bundle.sb6(key);
    return (tmp == null ? true : typeof tmp === 'string') ? tmp : THROW_CCE();
  };
  protoOf(NavType$Companion$StringType$1).xb8 = function (value) {
    return value === 'null' ? null : value;
  };
  protoOf(NavType$Companion$StringType$1).abl = function (value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.navigation.<no name provided>.serializeAsValue.<anonymous>' call
      tmp = Companion_getInstance_9().bbl(value);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$StringType$1).bb9 = function (value) {
    return this.abl((value == null ? true : typeof value === 'string') ? value : THROW_CCE());
  };
  function NavType$Companion$StringArrayType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(NavType$Companion$StringArrayType$1).n2t = function () {
    return 'string[]';
  };
  protoOf(NavType$Companion$StringArrayType$1).ebl = function (bundle, key, value) {
    bundle.hb6(key, (value == null ? true : isArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$StringArrayType$1).vb8 = function (bundle, key, value) {
    return this.ebl(bundle, key, (value == null ? true : isArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$StringArrayType$1).wb8 = function (bundle, key) {
    var tmp = bundle.sb6(key);
    return (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(NavType$Companion$StringArrayType$1).xb8 = function (value) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [value];
  };
  protoOf(NavType$Companion$StringArrayType$1).fbl = function (value, previousValue) {
    var tmp;
    if (previousValue == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.plus' call
      var elements = this.xb8(value);
      // Inline function 'kotlin.js.asDynamic' call
      tmp = previousValue.concat(elements);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.xb8(value) : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$StringArrayType$1).yb8 = function (value, previousValue) {
    return this.fbl(value, (previousValue == null ? true : isArray(previousValue)) ? previousValue : THROW_CCE());
  };
  protoOf(NavType$Companion$StringArrayType$1).gbl = function (value, other) {
    return contentDeepEquals(value, other);
  };
  protoOf(NavType$Companion$StringArrayType$1).cb9 = function (value, other) {
    var tmp = (value == null ? true : isArray(value)) ? value : THROW_CCE();
    return this.gbl(tmp, (other == null ? true : isArray(other)) ? other : THROW_CCE());
  };
  protoOf(NavType$Companion$StringArrayType$1).hbl = function (value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(value.length);
      var inductionVariable = 0;
      var last = value.length;
      while (inductionVariable < last) {
        var item = value[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.navigation.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = Companion_getInstance_9().bbl(item);
        destination.e(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$StringArrayType$1).qb8 = function (value) {
    return this.hbl((value == null ? true : isArray(value)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$StringArrayType$1).rb8 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [];
  };
  function NavType$Companion$StringListType$1() {
    CollectionNavType.call(this, true);
  }
  protoOf(NavType$Companion$StringListType$1).n2t = function () {
    return 'List<String>';
  };
  protoOf(NavType$Companion$StringListType$1).kbl = function (bundle, key, value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp = copyToArray(value);
    }
    bundle.hb6(key, tmp);
  };
  protoOf(NavType$Companion$StringListType$1).vb8 = function (bundle, key, value) {
    return this.kbl(bundle, key, (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$StringListType$1).wb8 = function (bundle, key) {
    var tmp = bundle.sb6(key);
    var tmp0_safe_receiver = (tmp == null ? true : isArray(tmp)) ? tmp : THROW_CCE();
    return tmp0_safe_receiver == null ? null : toList_3(tmp0_safe_receiver);
  };
  protoOf(NavType$Companion$StringListType$1).xb8 = function (value) {
    return listOf(value);
  };
  protoOf(NavType$Companion$StringListType$1).lbl = function (value, previousValue) {
    var tmp1_elvis_lhs = previousValue == null ? null : plus_1(previousValue, this.xb8(value));
    return tmp1_elvis_lhs == null ? this.xb8(value) : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$StringListType$1).yb8 = function (value, previousValue) {
    return this.lbl(value, (previousValue == null ? true : isInterface(previousValue, KtList)) ? previousValue : THROW_CCE());
  };
  protoOf(NavType$Companion$StringListType$1).mbl = function (value, other) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp = copyToArray(value);
    }
    var valueArray = tmp;
    var tmp_0;
    if (other == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(other);
    }
    var otherArray = tmp_0;
    return contentDeepEquals(valueArray, otherArray);
  };
  protoOf(NavType$Companion$StringListType$1).cb9 = function (value, other) {
    var tmp = (value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE();
    return this.mbl(tmp, (other == null ? true : isInterface(other, KtList)) ? other : THROW_CCE());
  };
  protoOf(NavType$Companion$StringListType$1).nbl = function (value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(value, 10));
      var _iterator__ex2g4s = value.j();
      while (_iterator__ex2g4s.k()) {
        var item = _iterator__ex2g4s.l();
        // Inline function 'androidx.navigation.<no name provided>.serializeAsValues.<anonymous>' call
        var tmp$ret$0 = Companion_getInstance_9().bbl(item);
        destination.e(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  };
  protoOf(NavType$Companion$StringListType$1).qb8 = function (value) {
    return this.nbl((value == null ? true : isInterface(value, KtList)) ? value : THROW_CCE());
  };
  protoOf(NavType$Companion$StringListType$1).rb8 = function () {
    return emptyList();
  };
  function Companion_5() {
    Companion_instance_6 = this;
    var tmp = this;
    tmp.qb9_1 = new NavType$Companion$IntType$1();
    var tmp_0 = this;
    tmp_0.rb9_1 = new NavType$Companion$IntArrayType$1();
    var tmp_1 = this;
    tmp_1.sb9_1 = new NavType$Companion$IntListType$1();
    var tmp_2 = this;
    tmp_2.tb9_1 = new NavType$Companion$LongType$1();
    var tmp_3 = this;
    tmp_3.ub9_1 = new NavType$Companion$LongArrayType$1();
    var tmp_4 = this;
    tmp_4.vb9_1 = new NavType$Companion$LongListType$1();
    var tmp_5 = this;
    tmp_5.wb9_1 = new NavType$Companion$FloatType$1();
    var tmp_6 = this;
    tmp_6.xb9_1 = new NavType$Companion$FloatArrayType$1();
    var tmp_7 = this;
    tmp_7.yb9_1 = new NavType$Companion$FloatListType$1();
    var tmp_8 = this;
    tmp_8.zb9_1 = new NavType$Companion$BoolType$1();
    var tmp_9 = this;
    tmp_9.aba_1 = new NavType$Companion$BoolArrayType$1();
    var tmp_10 = this;
    tmp_10.bba_1 = new NavType$Companion$BoolListType$1();
    var tmp_11 = this;
    tmp_11.cba_1 = new NavType$Companion$StringType$1();
    var tmp_12 = this;
    tmp_12.dba_1 = new NavType$Companion$StringArrayType$1();
    var tmp_13 = this;
    tmp_13.eba_1 = new NavType$Companion$StringListType$1();
  }
  protoOf(Companion_5).fba = function (value) {
    var tmp;
    if (!(value == null) ? typeof value === 'number' : false) {
      var tmp_0 = this.qb9_1;
      tmp = tmp_0 instanceof NavType ? tmp_0 : THROW_CCE();
    } else {
      if (!(value == null) ? isIntArray(value) : false) {
        var tmp_1 = this.rb9_1;
        tmp = tmp_1 instanceof NavType ? tmp_1 : THROW_CCE();
      } else {
        if (value instanceof Long) {
          var tmp_2 = this.tb9_1;
          tmp = tmp_2 instanceof NavType ? tmp_2 : THROW_CCE();
        } else {
          if (!(value == null) ? isLongArray(value) : false) {
            var tmp_3 = this.ub9_1;
            tmp = tmp_3 instanceof NavType ? tmp_3 : THROW_CCE();
          } else {
            if (!(value == null) ? typeof value === 'number' : false) {
              var tmp_4 = this.wb9_1;
              tmp = tmp_4 instanceof NavType ? tmp_4 : THROW_CCE();
            } else {
              if (!(value == null) ? isFloatArray(value) : false) {
                var tmp_5 = this.xb9_1;
                tmp = tmp_5 instanceof NavType ? tmp_5 : THROW_CCE();
              } else {
                if (!(value == null) ? typeof value === 'boolean' : false) {
                  var tmp_6 = this.zb9_1;
                  tmp = tmp_6 instanceof NavType ? tmp_6 : THROW_CCE();
                } else {
                  if (!(value == null) ? isBooleanArray(value) : false) {
                    var tmp_7 = this.aba_1;
                    tmp = tmp_7 instanceof NavType ? tmp_7 : THROW_CCE();
                  } else {
                    var tmp_8;
                    if (!(value == null) ? typeof value === 'string' : false) {
                      tmp_8 = true;
                    } else {
                      tmp_8 = value == null;
                    }
                    if (tmp_8) {
                      var tmp_9 = this.cba_1;
                      tmp = tmp_9 instanceof NavType ? tmp_9 : THROW_CCE();
                    } else {
                      if (!(value == null) ? isArray(value) : false) {
                        var tmp_10 = this.dba_1;
                        tmp = tmp_10 instanceof NavType ? tmp_10 : THROW_CCE();
                      } else {
                        throw IllegalArgumentException_init_$Create$(toString_0(value) + ' is not supported for navigation arguments.');
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function NavType(isNullableAllowed) {
    Companion_getInstance_7();
    this.sb8_1 = isNullableAllowed;
    this.tb8_1 = 'nav_type';
  }
  protoOf(NavType).ub8 = function () {
    return this.sb8_1;
  };
  protoOf(NavType).yb8 = function (value, previousValue) {
    return this.xb8(value);
  };
  protoOf(NavType).zb8 = function (bundle, key, value) {
    var parsedValue = this.xb8(value);
    this.vb8(bundle, key, parsedValue);
    return parsedValue;
  };
  protoOf(NavType).ab9 = function (bundle, key, value, previousValue) {
    if (!bundle.jb5(key)) {
      throw IllegalArgumentException_init_$Create$('There is no previous value in this bundle.');
    }
    if (!(value == null)) {
      var parsedCombinedValue = this.yb8(value, previousValue);
      this.vb8(bundle, key, parsedCombinedValue);
      return parsedCombinedValue;
    }
    return previousValue;
  };
  protoOf(NavType).bb9 = function (value) {
    return toString_0(value);
  };
  protoOf(NavType).n2t = function () {
    return this.tb8_1;
  };
  protoOf(NavType).cb9 = function (value, other) {
    return equals(value, other);
  };
  protoOf(NavType).toString = function () {
    return this.n2t();
  };
  function Navigator_init_$Init$(name, $this) {
    Navigator.call($this);
    $this.jbe_1 = name;
    return $this;
  }
  function Navigator$navigate$lambda(this$0, $navOptions, $navigatorExtras) {
    return function (backStackEntry) {
      var tmp = backStackEntry.kbb_1;
      var tmp0_elvis_lhs = tmp instanceof NavDestination ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return null;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var destination = tmp_0;
      var navigatedToDestination = this$0.kbh(destination, backStackEntry.ibc(), $navOptions, $navigatorExtras);
      var tmp_1;
      if (navigatedToDestination == null) {
        tmp_1 = null;
      } else if (equals(navigatedToDestination, destination)) {
        tmp_1 = backStackEntry;
      } else {
        tmp_1 = this$0.gbh().gbb(navigatedToDestination, navigatedToDestination.kbf(backStackEntry.ibc()));
      }
      return tmp_1;
    };
  }
  function Navigator$onLaunchSingleTop$lambda($this$navOptions) {
    $this$navOptions.pba_1 = true;
    return Unit_instance;
  }
  protoOf(Navigator).mbe = function () {
    var tmp0_elvis_lhs = this.jbe_1;
    return tmp0_elvis_lhs == null ? removeSuffix(ensureNotNull(getKClassFromExpression(this).xa()), 'Navigator') : tmp0_elvis_lhs;
  };
  protoOf(Navigator).gbh = function () {
    var tmp0 = this.kbe_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.navigation.Navigator.<get-state>.<anonymous>' call
        var message = "You cannot access the Navigator's state until the Navigator is attached";
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  };
  protoOf(Navigator).jbh = function (state) {
    this.kbe_1 = state;
    this.lbe_1 = true;
  };
  protoOf(Navigator).hbh = function (entries, navOptions, navigatorExtras) {
    var tmp = asSequence_1(entries);
    // Inline function 'kotlin.sequences.forEach' call
    var _iterator__ex2g4s = filterNotNull_0(map(tmp, Navigator$navigate$lambda(this, navOptions, navigatorExtras))).j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'androidx.navigation.Navigator.navigate.<anonymous>' call
      this.gbh().ebb(element);
    }
  };
  protoOf(Navigator).jbb = function (backStackEntry) {
    var tmp = backStackEntry.kbb_1;
    var tmp0_elvis_lhs = tmp instanceof NavDestination ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var destination = tmp_0;
    this.kbh(destination, null, navOptions(Navigator$onLaunchSingleTop$lambda), null);
    this.gbh().jbb(backStackEntry);
  };
  protoOf(Navigator).kbh = function (destination, args, navOptions, navigatorExtras) {
    return destination;
  };
  protoOf(Navigator).lbh = function (popUpTo, savedState) {
    var backStack = this.gbh().cbb_1.v();
    // Inline function 'kotlin.check' call
    if (!backStack.m(popUpTo)) {
      // Inline function 'androidx.navigation.Navigator.popBackStack.<anonymous>' call
      var message = 'popBackStack was called with ' + popUpTo.toString() + ' which does not exist in back stack ' + toString(backStack);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var iterator = backStack.a2(backStack.n());
    var lastPoppedEntry = null;
    $l$loop: do {
      lastPoppedEntry = iterator.x4();
    }
     while (!equals(lastPoppedEntry, popUpTo) && this.mbh());
    if (!(lastPoppedEntry == null)) {
      this.gbh().hbb(lastPoppedEntry, savedState);
    }
  };
  protoOf(Navigator).mbh = function () {
    return true;
  };
  protoOf(Navigator).nbh = function () {
    return null;
  };
  protoOf(Navigator).obh = function (savedState) {
  };
  function Navigator() {
    this.kbe_1 = null;
    this.lbe_1 = false;
  }
  function Companion_6() {
  }
  protoOf(Companion_6).obl = function (name) {
    // Inline function 'kotlin.text.isNullOrEmpty' call
    return !(name == null || charSequenceLength(name) === 0);
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function NavigatorProvider() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.lbg_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.mbg_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(NavigatorProvider).pbl = function () {
    return this.mbg_1;
  };
  protoOf(NavigatorProvider).nbg = function (navigatorClass) {
    var tmp0_elvis_lhs = this.lbg_1.l2(navigatorClass);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Could not find Navigator with class "' + toString(navigatorClass) + '". You must call ' + 'NavController.addNavigator() for each navigation type.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var navigator = tmp;
    return navigator instanceof Navigator ? navigator : THROW_CCE();
  };
  protoOf(NavigatorProvider).fbh = function (name) {
    // Inline function 'kotlin.require' call
    if (!Companion_instance_7.obl(name)) {
      // Inline function 'androidx.navigation.NavigatorProvider.getNavigator.<anonymous>' call
      var message = 'navigator name cannot be an empty string';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_elvis_lhs = this.mbg_1.l2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Could not find Navigator with name "' + name + '". You must call ' + 'NavController.addNavigator() for each navigation type.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var navigator = tmp;
    return navigator instanceof Navigator ? navigator : THROW_CCE();
  };
  protoOf(NavigatorProvider).qbl = function (navigator) {
    var previousNavigator = this.lbg_1.l2(getKClassFromExpression(navigator));
    if (equals(previousNavigator, navigator)) {
      return navigator;
    }
    // Inline function 'kotlin.check' call
    if (!!((previousNavigator == null ? null : previousNavigator.lbe_1) === true)) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message = 'Navigator ' + toString(navigator) + ' is replacing an already attached ' + toString_0(previousNavigator);
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    if (!!navigator.lbe_1) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message_0 = 'Navigator ' + toString(navigator) + ' is already attached to another NavController';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var tmp2 = this.lbg_1;
    // Inline function 'kotlin.collections.set' call
    var key = getKClassFromExpression(navigator);
    tmp2.o2(key, navigator);
    return this.rbl(navigator.mbe(), navigator);
  };
  protoOf(NavigatorProvider).rbl = function (name, navigator) {
    // Inline function 'kotlin.require' call
    if (!Companion_instance_7.obl(name)) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message = 'Navigator name cannot be an empty string';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var previousNavigator = this.mbg_1.l2(name);
    if (equals(previousNavigator, navigator)) {
      return navigator;
    }
    // Inline function 'kotlin.check' call
    if (!!((previousNavigator == null ? null : previousNavigator.lbe_1) === true)) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message_0 = 'Navigator ' + toString(navigator) + ' is replacing an already attached ' + toString_0(previousNavigator);
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    if (!!navigator.lbe_1) {
      // Inline function 'androidx.navigation.NavigatorProvider.addNavigator.<anonymous>' call
      var message_1 = 'Navigator ' + toString(navigator) + ' is already attached to another NavController';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    return this.mbg_1.o2(name, navigator);
  };
  function isAllowed($this, c, allow) {
    return (_Char___init__impl__6a9atx(65) <= c ? c <= _Char___init__impl__6a9atx(90) : false) || (_Char___init__impl__6a9atx(97) <= c ? c <= _Char___init__impl__6a9atx(122) : false) || (_Char___init__impl__6a9atx(48) <= c ? c <= _Char___init__impl__6a9atx(57) : false) || !(indexOf("_-!.~'()*", c) === -1) || (!(allow == null) && !(indexOf(allow, c) === -1));
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.mbd_1 = toCharArray('0123456789ABCDEF');
  }
  protoOf(Companion_7).sbl = function (s, allow) {
    var encoded = null;
    var oldLength = s.length;
    var current = 0;
    while (current < oldLength) {
      var nextToEncode = current;
      while (nextToEncode < oldLength && isAllowed(this, charSequenceGet(s, nextToEncode), allow)) {
        nextToEncode = nextToEncode + 1 | 0;
      }
      if (nextToEncode === oldLength) {
        if (current === 0) {
          return s;
        } else {
          ensureNotNull(encoded).bc(s, current, oldLength);
          return encoded.toString();
        }
      }
      if (encoded == null) {
        encoded = StringBuilder_init_$Create$();
      }
      if (nextToEncode > current) {
        encoded.bc(s, current, nextToEncode);
      }
      current = nextToEncode;
      var nextAllowed = current + 1 | 0;
      while (nextAllowed < oldLength && !isAllowed(this, charSequenceGet(s, nextAllowed), allow)) {
        nextAllowed = nextAllowed + 1 | 0;
      }
      var bytes = encodeToByteArray(s, current, nextAllowed);
      var bytesLength = bytes.length;
      var inductionVariable = 0;
      if (inductionVariable < bytesLength)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          encoded.p8(_Char___init__impl__6a9atx(37));
          encoded.p8(this.mbd_1[(bytes[i] & 240) >> 4]);
          encoded.p8(this.mbd_1[bytes[i] & 15]);
        }
         while (inductionVariable < bytesLength);
      current = nextAllowed;
    }
    var tmp3_safe_receiver = encoded;
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    return tmp4_elvis_lhs == null ? s : tmp4_elvis_lhs;
  };
  protoOf(Companion_7).bbl = function (s, allow, $super) {
    allow = allow === VOID ? null : allow;
    return $super === VOID ? this.sbl(s, allow) : $super.sbl.call(this, s, allow);
  };
  protoOf(Companion_7).nbd = function (s) {
    return UriCodec_getInstance().ubl(s, false, false);
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function hexCharToValue($this, c) {
    if (_Char___init__impl__6a9atx(48) <= c ? c <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp = Char__toInt_impl_vasixd(c);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      return tmp - Char__toInt_impl_vasixd(this_0) | 0;
    }
    if (_Char___init__impl__6a9atx(97) <= c ? c <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = 10 + Char__toInt_impl_vasixd(c) | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      return tmp_0 - Char__toInt_impl_vasixd(this_1) | 0;
    }
    if (_Char___init__impl__6a9atx(65) <= c ? c <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = 10 + Char__toInt_impl_vasixd(c) | 0;
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      return tmp_1 - Char__toInt_impl_vasixd(this_2) | 0;
    }
    return -1;
  }
  function unexpectedCharacterException($this, uri, name, unexpected, index) {
    var nameString = name == null ? '' : ' in [' + name + ']';
    return new URISyntaxException(uri, 'Unexpected character' + nameString + ': ' + toString_2(unexpected), index);
  }
  function getNextCharacter($this, uri, index, end, name) {
    if (index >= end) {
      var nameString = name == null ? '' : ' in [' + name + ']';
      throw new URISyntaxException(uri, 'Unexpected end of string' + nameString, index);
    }
    return charSequenceGet(uri, index);
  }
  function appendDecoded($this, builder, s, convertPlus, throwOnFailure) {
    var tmp = 0;
    var tmp_0 = s.length;
    var tmp_1 = new Int8Array(tmp_0);
    while (tmp < tmp_0) {
      tmp_1[tmp] = 0;
      tmp = tmp + 1 | 0;
    }
    var byteBuffer = tmp_1;
    var byteBufferPosition = {_v: 0};
    var i = 0;
    while (i < s.length) {
      var c = charSequenceGet(s, i);
      i = i + 1 | 0;
      var tmp1_subject = c;
      if (tmp1_subject === _Char___init__impl__6a9atx(43)) {
        appendDecoded$flush(byteBufferPosition, builder, byteBuffer, throwOnFailure);
        builder.p8(convertPlus ? _Char___init__impl__6a9atx(32) : _Char___init__impl__6a9atx(43));
      } else if (tmp1_subject === _Char___init__impl__6a9atx(37)) {
        var hexValue = 0;
        var j = 0;
        $l$loop: while (j < 2) {
          try {
            c = getNextCharacter($this, s, i, s.length, null);
          } catch ($p) {
            if ($p instanceof URISyntaxException) {
              var e = $p;
              if (throwOnFailure) {
                throw IllegalArgumentException_init_$Create$_0(e);
              } else {
                appendDecoded$flush(byteBufferPosition, builder, byteBuffer, throwOnFailure);
                builder.p8(_Char___init__impl__6a9atx(65533));
                return Unit_instance;
              }
            } else {
              throw $p;
            }
          }
          i = i + 1 | 0;
          var newDigit = hexCharToValue($this, c);
          if (newDigit < 0) {
            if (throwOnFailure) {
              throw IllegalArgumentException_init_$Create$_0(unexpectedCharacterException($this, s, null, c, i - 1 | 0));
            } else {
              appendDecoded$flush(byteBufferPosition, builder, byteBuffer, throwOnFailure);
              builder.p8(_Char___init__impl__6a9atx(65533));
              break $l$loop;
            }
          }
          hexValue = toByte((hexValue * 16 | 0) + newDigit | 0);
          j = j + 1 | 0;
        }
        appendDecoded$put(byteBuffer, byteBufferPosition, hexValue);
      } else {
        appendDecoded$flush(byteBufferPosition, builder, byteBuffer, throwOnFailure);
        builder.p8(c);
      }
    }
    appendDecoded$flush(byteBufferPosition, builder, byteBuffer, throwOnFailure);
  }
  function appendDecoded$put(byteBuffer, byteBufferPosition, byte) {
    var tmp0 = byteBufferPosition._v;
    byteBufferPosition._v = tmp0 + 1 | 0;
    byteBuffer[tmp0] = byte;
  }
  function appendDecoded$flush(byteBufferPosition, $builder, byteBuffer, $throwOnFailure) {
    if (byteBufferPosition._v === 0) {
      return Unit_instance;
    }
    $builder.o8(decodeToString(byteBuffer, VOID, byteBufferPosition._v, $throwOnFailure));
    byteBufferPosition._v = 0;
  }
  function UriCodec() {
    UriCodec_instance = this;
    this.tbl_1 = _Char___init__impl__6a9atx(65533);
  }
  protoOf(UriCodec).ubl = function (s, convertPlus, throwOnFailure) {
    var builder = StringBuilder_init_$Create$_0(s.length);
    appendDecoded(this, builder, s, convertPlus, throwOnFailure);
    return builder.toString();
  };
  var UriCodec_instance;
  function UriCodec_getInstance() {
    if (UriCodec_instance == null)
      new UriCodec();
    return UriCodec_instance;
  }
  function URISyntaxException(input, reason, index) {
    Exception_init_$Init$(reason + ' at index ' + index + ': ' + input, this);
    captureStack(this, URISyntaxException);
  }
  function Lock() {
  }
  //region block: post-declaration
  protoOf(NavBackStackEntry$defaultViewModelProviderFactory$1).y58 = create;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  Companion_instance_5 = new Companion_4();
  Companion_instance_7 = new Companion_6();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = generateHashCode;
  _.$_$.b = generateRouteWithArgs;
  _.$_$.c = FloatingWindow;
  _.$_$.d = NavDestinationBuilder;
  _.$_$.e = NavDestination;
  _.$_$.f = NavGraphNavigator;
  _.$_$.g = NavGraph;
  _.$_$.h = NavigatorProvider;
  _.$_$.i = NavigatorState;
  _.$_$.j = Navigator;
  _.$_$.k = navArgument;
  _.$_$.l = navOptions;
  _.$_$.m = NavBackStackEntry_init_$Create$;
  _.$_$.n = NavDestination_init_$Init$;
  _.$_$.o = NavDestinationBuilder_init_$Init$;
  _.$_$.p = NavGraphBuilder_init_$Create$;
  _.$_$.q = Navigator_init_$Init$;
  _.$_$.r = Companion_instance_0;
  _.$_$.s = Companion_instance_3;
  _.$_$.t = Companion_instance_4;
  _.$_$.u = Companion_getInstance_7;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-navigation-navigation-common.js.map
