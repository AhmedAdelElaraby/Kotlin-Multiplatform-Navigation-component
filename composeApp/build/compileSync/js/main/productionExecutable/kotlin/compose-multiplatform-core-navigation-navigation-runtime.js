(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-core-core-bundle.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-navigation-navigation-common.js', './compose-multiplatform-core-lifecycle-lifecycle-common.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-core-core-bundle.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-navigation-navigation-common.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-common.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-core-core-bundle'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'compose-multiplatform-core-core-core-bundle' was not found. Please, check whether 'compose-multiplatform-core-core-core-bundle' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-navigation-navigation-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'compose-multiplatform-core-navigation-navigation-common' was not found. Please, check whether 'compose-multiplatform-core-navigation-navigation-common' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-common' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-common' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-navigation-navigation-runtime'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'compose-multiplatform-core-navigation-navigation-runtime'.");
    }
    globalThis['compose-multiplatform-core-navigation-navigation-runtime'] = factory(typeof globalThis['compose-multiplatform-core-navigation-navigation-runtime'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-navigation-navigation-runtime'], globalThis['compose-multiplatform-core-core-core-bundle'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-navigation-navigation-common'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_org_jetbrains_androidx_core_core_bundle, kotlin_kotlin, kotlin_org_jetbrains_androidx_navigation_navigation_common, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Bundle_init_$Create$ = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.d;
  var protoOf = kotlin_kotlin.$_$.kb;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.la;
  var Companion_instance = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.r;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var toString = kotlin_kotlin.$_$.ig;
  var getStringHashCode = kotlin_kotlin.$_$.ia;
  var hashCode = kotlin_kotlin.$_$.ja;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var equals = kotlin_kotlin.$_$.ba;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var NavigatorState = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.i;
  var ensureNotNull = kotlin_kotlin.$_$.pf;
  var toString_0 = kotlin_kotlin.$_$.ob;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var println = kotlin_kotlin.$_$.o9;
  var toMutableList = kotlin_kotlin.$_$.m8;
  var State_DESTROYED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.i;
  var State_CREATED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.h;
  var Collection = kotlin_kotlin.$_$.n4;
  var isInterface = kotlin_kotlin.$_$.za;
  var VOID = kotlin_kotlin.$_$.e;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var reversed = kotlin_kotlin.$_$.s7;
  var Companion_instance_0 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.s;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.l;
  var generateSequence = kotlin_kotlin.$_$.qc;
  var takeWhile = kotlin_kotlin.$_$.wc;
  var removeLast = kotlin_kotlin.$_$.r7;
  var navOptions = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.l;
  var NavGraph = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.g;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var generateHashCode = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.a;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var mapCapacity = kotlin_kotlin.$_$.c7;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u;
  var generateRouteWithArgs = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.b;
  var listOf = kotlin_kotlin.$_$.a7;
  var Companion_instance_1 = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.t;
  var map = kotlin_kotlin.$_$.tc;
  var toList = kotlin_kotlin.$_$.xc;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var get_lastIndex = kotlin_kotlin.$_$.q6;
  var NavBackStackEntry_init_$Create$ = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.m;
  var removeAll = kotlin_kotlin.$_$.o7;
  var KtMutableMap = kotlin_kotlin.$_$.u4;
  var lastOrNull = kotlin_kotlin.$_$.u6;
  var last = kotlin_kotlin.$_$.w6;
  var mutableListOf = kotlin_kotlin.$_$.h7;
  var first = kotlin_kotlin.$_$.b6;
  var FloatingWindow = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.c;
  var plus = kotlin_kotlin.$_$.n7;
  var emptyList = kotlin_kotlin.$_$.r5;
  var FunctionAdapter = kotlin_kotlin.$_$.p9;
  var LifecycleEventObserver = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.a;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.j;
  var NavigatorProvider = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.h;
  var NavGraphNavigator = kotlin_org_jetbrains_androidx_navigation_navigation_common.$_$.f;
  var BufferOverflow_DROP_OLDEST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var MutableSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var asSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var removeFirst = kotlin_kotlin.$_$.q7;
  var State_STARTED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.l;
  var State_RESUMED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.k;
  var firstOrNull = kotlin_kotlin.$_$.y5;
  var addAll = kotlin_kotlin.$_$.w4;
  var asReversed = kotlin_kotlin.$_$.a5;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.o;
  var fillArrayVal = kotlin_kotlin.$_$.ca;
  var checkIndexOverflow = kotlin_kotlin.$_$.e5;
  var filterNotNull = kotlin_kotlin.$_$.x5;
  var ArrayDeque_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var InitializerViewModelFactoryBuilder = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.a;
  var getKClass = kotlin_kotlin.$_$.c;
  var Companion_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.j;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.g;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.h;
  var ViewModelStore = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.f;
  var StringBuilder = kotlin_kotlin.$_$.zc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(NavBackStackEntryState, 'NavBackStackEntryState');
  initMetadataForClass(NavControllerNavigatorState, 'NavControllerNavigatorState', VOID, NavigatorState);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(sam$androidx_lifecycle_LifecycleEventObserver$0, 'sam$androidx_lifecycle_LifecycleEventObserver$0', VOID, VOID, [LifecycleEventObserver, FunctionAdapter]);
  initMetadataForClass(NavController, 'NavController', NavController);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(NavControllerViewModel, 'NavControllerViewModel', NavControllerViewModel, ViewModel);
  initMetadataForClass(NavHostController, 'NavHostController', NavHostController, NavController);
  initMetadataForClass(AtomicInt, 'AtomicInt');
  //endregion
  function NavBackStackEntryState_init_$Init$(entry, $this) {
    NavBackStackEntryState.call($this, entry.obb_1, entry.kbb_1.cbe_1, entry.ibc(), Bundle_init_$Create$());
    entry.tbc($this.ybl_1);
    return $this;
  }
  function NavBackStackEntryState_init_$Create$(entry) {
    return NavBackStackEntryState_init_$Init$(entry, objectCreate(protoOf(NavBackStackEntryState)));
  }
  function Companion() {
    this.zbl_1 = 'NavBackStackEntryState.id';
    this.abm_1 = 'NavBackStackEntryState.destinationId';
    this.bbm_1 = 'NavBackStackEntryState.args';
    this.cbm_1 = 'NavBackStackEntryState.savedState';
  }
  protoOf(Companion).dbm = function (bundle) {
    if (bundle == null)
      return null;
    var tmp0_elvis_lhs = bundle.nb6('NavBackStackEntryState.id');
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var id = tmp;
    var destinationId = bundle.lb6('NavBackStackEntryState.destinationId');
    var tmp1_elvis_lhs = bundle.ob6('NavBackStackEntryState.args');
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var args = tmp_0;
    var tmp2_elvis_lhs = bundle.ob6('NavBackStackEntryState.savedState');
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      return null;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var savedState = tmp_1;
    return new NavBackStackEntryState(id, destinationId, args, savedState);
  };
  var Companion_instance_2;
  function Companion_getInstance_0() {
    return Companion_instance_2;
  }
  function NavBackStackEntryState(id, destinationId, args, savedState) {
    this.vbl_1 = id;
    this.wbl_1 = destinationId;
    this.xbl_1 = args;
    this.ybl_1 = savedState;
  }
  protoOf(NavBackStackEntryState).ebm = function (destination, hostLifecycleState, viewModel) {
    return Companion_instance.kbc(destination, this.xbl_1, hostLifecycleState, viewModel, this.vbl_1, this.ybl_1);
  };
  protoOf(NavBackStackEntryState).fbm = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = Bundle_init_$Create$();
    // Inline function 'androidx.navigation.NavBackStackEntryState.toBundle.<anonymous>' call
    this_0.vb5('NavBackStackEntryState.id', this.vbl_1);
    this_0.rb5('NavBackStackEntryState.destinationId', this.wbl_1);
    this_0.xb5('NavBackStackEntryState.args', this.xbl_1);
    this_0.xb5('NavBackStackEntryState.savedState', this.ybl_1);
    return this_0;
  };
  protoOf(NavBackStackEntryState).toString = function () {
    return 'NavBackStackEntryState(id=' + this.vbl_1 + ', destinationId=' + this.wbl_1 + ', args=' + toString(this.xbl_1) + ', savedState=' + this.ybl_1.toString() + ')';
  };
  protoOf(NavBackStackEntryState).hashCode = function () {
    var result = getStringHashCode(this.vbl_1);
    result = imul(result, 31) + this.wbl_1 | 0;
    result = imul(result, 31) + (this.xbl_1 == null ? 0 : hashCode(this.xbl_1)) | 0;
    result = imul(result, 31) + hashCode(this.ybl_1) | 0;
    return result;
  };
  protoOf(NavBackStackEntryState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NavBackStackEntryState))
      return false;
    var tmp0_other_with_cast = other instanceof NavBackStackEntryState ? other : THROW_CCE();
    if (!(this.vbl_1 === tmp0_other_with_cast.vbl_1))
      return false;
    if (!(this.wbl_1 === tmp0_other_with_cast.wbl_1))
      return false;
    if (!equals(this.xbl_1, tmp0_other_with_cast.xbl_1))
      return false;
    if (!equals(this.ybl_1, tmp0_other_with_cast.ybl_1))
      return false;
    return true;
  };
  function NavController$NavControllerNavigatorState$pop$lambda(this$0, $popUpTo, $saveState) {
    return function () {
      protoOf(NavigatorState).hbb.call(this$0, $popUpTo, $saveState);
      return Unit_instance;
    };
  }
  function linkChildToParent($this, child, parent) {
    // Inline function 'kotlin.collections.set' call
    $this.pbm_1.o2(child, parent);
    if ($this.qbm_1.l2(parent) == null) {
      var tmp3 = $this.qbm_1;
      // Inline function 'kotlin.collections.set' call
      var value = new AtomicInt(0);
      tmp3.o2(parent, value);
    }
    ensureNotNull($this.qbm_1.l2(parent)).ibn();
  }
  function navigateInternal(_this__u8e3s4, $this, entries, navOptions, navigatorExtras, handler) {
    $this.abn_1 = handler;
    _this__u8e3s4.hbh(entries, navOptions, navigatorExtras);
    $this.abn_1 = null;
  }
  function popBackStackInternal(_this__u8e3s4, $this, popUpTo, saveState, handler) {
    $this.bbn_1 = handler;
    _this__u8e3s4.lbh(popUpTo, saveState);
    $this.bbn_1 = null;
  }
  function NavControllerNavigatorState($outer, navigator) {
    this.qbn_1 = $outer;
    NavigatorState.call(this);
    this.pbn_1 = navigator;
  }
  protoOf(NavControllerNavigatorState).ebb = function (backStackEntry) {
    var tmp0 = this.qbn_1.ybm_1;
    // Inline function 'androidx.navigation.get' call
    var name = backStackEntry.kbb_1.xbd_1;
    var destinationNavigator = tmp0.fbh(name);
    if (equals(destinationNavigator, this.pbn_1)) {
      var handler = this.qbn_1.abn_1;
      if (!(handler == null)) {
        handler(backStackEntry);
        this.rbn(backStackEntry);
      } else {
        println('Ignoring add of destination ' + backStackEntry.kbb_1.toString() + ' ' + 'outside of the call to navigate(). ');
      }
    } else {
      var tmp2 = this.qbn_1.zbm_1.l2(destinationNavigator);
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        if (tmp2 == null) {
          // Inline function 'androidx.navigation.NavControllerNavigatorState.push.<anonymous>' call
          var message = 'NavigatorBackStack for ' + backStackEntry.kbb_1.xbd_1 + ' should ' + 'already be created';
          throw IllegalStateException_init_$Create$(toString_0(message));
        } else {
          tmp$ret$2 = tmp2;
          break $l$block;
        }
      }
      var navigatorBackStack = tmp$ret$2;
      navigatorBackStack.ebb(backStackEntry);
    }
  };
  protoOf(NavControllerNavigatorState).rbn = function (backStackEntry) {
    protoOf(NavigatorState).ebb.call(this, backStackEntry);
  };
  protoOf(NavControllerNavigatorState).gbb = function (destination, arguments_0) {
    return Companion_instance.lbc(destination, arguments_0, this.qbn_1.sbn(), this.qbn_1.ubm_1);
  };
  protoOf(NavControllerNavigatorState).hbb = function (popUpTo, saveState) {
    var tmp0 = this.qbn_1.ybm_1;
    // Inline function 'androidx.navigation.get' call
    var name = popUpTo.kbb_1.xbd_1;
    var destinationNavigator = tmp0.fbh(name);
    // Inline function 'kotlin.collections.set' call
    this.qbn_1.cbn_1.o2(popUpTo, saveState);
    if (equals(destinationNavigator, this.pbn_1)) {
      var handler = this.qbn_1.bbn_1;
      if (!(handler == null)) {
        handler(popUpTo);
        protoOf(NavigatorState).hbb.call(this, popUpTo, saveState);
      } else {
        this.qbn_1.tbn(popUpTo, NavController$NavControllerNavigatorState$pop$lambda(this, popUpTo, saveState));
      }
    } else {
      ensureNotNull(this.qbn_1.zbm_1.l2(destinationNavigator)).hbb(popUpTo, saveState);
    }
  };
  protoOf(NavControllerNavigatorState).ibb = function (popUpTo, saveState) {
    protoOf(NavigatorState).ibb.call(this, popUpTo, saveState);
  };
  protoOf(NavControllerNavigatorState).wbb = function (entry) {
    var savedState = this.qbn_1.cbn_1.l2(entry) === true;
    protoOf(NavigatorState).wbb.call(this, entry);
    this.qbn_1.cbn_1.p2(entry);
    if (!this.qbn_1.kbm_1.m(entry)) {
      this.qbn_1.wbn(entry);
      if (entry.p7w().w56().s56(State_CREATED_getInstance())) {
        entry.jbc(State_DESTROYED_getInstance());
      }
      var tmp;
      var tmp0 = this.qbn_1.kbm_1;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.none' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.q();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.j();
        while (_iterator__ex2g4s.k()) {
          var element = _iterator__ex2g4s.l();
          // Inline function 'androidx.navigation.NavControllerNavigatorState.markTransitionComplete.<anonymous>' call
          if (element.obb_1 === entry.obb_1) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      if (tmp$ret$0) {
        tmp = !savedState;
      } else {
        tmp = false;
      }
      if (tmp) {
        var tmp0_safe_receiver = this.qbn_1.ubm_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.zbn(entry.obb_1);
        }
      }
      this.qbn_1.ubn();
      this.qbn_1.nbm_1.w1j(this.qbn_1.vbn());
    } else if (!this.bbb_1) {
      this.qbn_1.ubn();
      this.qbn_1.lbm_1.w1j(toMutableList(this.qbn_1.kbm_1));
      this.qbn_1.nbm_1.w1j(this.qbn_1.vbn());
    }
  };
  function popBackStack($this, destinationId, inclusive) {
    return $this.abo(destinationId, inclusive, false);
  }
  function popBackStackInternal_0($this, destinationId, inclusive, saveState) {
    if ($this.kbm_1.q()) {
      return false;
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var popOperations = ArrayList_init_$Create$();
    var iterator = reversed($this.kbm_1).j();
    var foundDestination = null;
    $l$loop: while (iterator.k()) {
      var destination = iterator.l().kbb_1;
      var navigator = $this.ybm_1.fbh(destination.xbd_1);
      if (inclusive || !(destination.cbe_1 === destinationId)) {
        popOperations.e(navigator);
      }
      if (destination.cbe_1 === destinationId) {
        foundDestination = destination;
        break $l$loop;
      }
    }
    if (foundDestination == null) {
      var destinationName = Companion_instance_0.nbe(destinationId);
      println('Ignoring popBackStack to destination ' + destinationName + ' as it was not found ' + 'on the current back stack');
      return false;
    }
    return executePopOperations($this, popOperations, foundDestination, inclusive, saveState);
  }
  function popBackStackInternal$default($this, destinationId, inclusive, saveState, $super) {
    saveState = saveState === VOID ? false : saveState;
    return popBackStackInternal_0($this, destinationId, inclusive, saveState);
  }
  function popBackStackInternal_1($this, route, inclusive, saveState) {
    var finalRoute = generateRouteFilled($this, route);
    return popBackStackInternal_2($this, finalRoute, inclusive, saveState);
  }
  function popBackStackInternal_2($this, route, inclusive, saveState) {
    if ($this.kbm_1.q()) {
      return false;
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var popOperations = ArrayList_init_$Create$();
    var tmp0 = $this.kbm_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var iterator = tmp0.a2(tmp0.n());
      while (iterator.v4()) {
        var element = iterator.x4();
        // Inline function 'androidx.navigation.NavController.popBackStackInternal.<anonymous>' call
        var hasRoute = element.kbb_1.ibf(route, element.ibc());
        if (inclusive || !hasRoute) {
          var navigator = $this.ybm_1.fbh(element.kbb_1.xbd_1);
          popOperations.e(navigator);
        }
        if (hasRoute) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    var foundDestination = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kbb_1;
    if (foundDestination == null) {
      println('Ignoring popBackStack to route ' + route + ' as it was not found ' + 'on the current back stack');
      return false;
    }
    return executePopOperations($this, popOperations, foundDestination, inclusive, saveState);
  }
  function executePopOperations($this, popOperations, foundDestination, inclusive, saveState) {
    var popped = {_v: false};
    var savedState = ArrayDeque_init_$Create$();
    var tmp0_iterator = popOperations.j();
    $l$loop: while (tmp0_iterator.k()) {
      var navigator = tmp0_iterator.l();
      var receivedPop = {_v: false};
      var tmp = $this.kbm_1.we();
      popBackStackInternal(navigator, $this, tmp, saveState, NavController$executePopOperations$lambda(receivedPop, popped, $this, saveState, savedState));
      if (!receivedPop._v) {
        break $l$loop;
      }
    }
    if (saveState) {
      if (!inclusive) {
        var tmp_0 = generateSequence(foundDestination, NavController$executePopOperations$lambda_0);
        // Inline function 'kotlin.sequences.forEach' call
        var _iterator__ex2g4s = takeWhile(tmp_0, NavController$executePopOperations$lambda_1($this)).j();
        while (_iterator__ex2g4s.k()) {
          var element = _iterator__ex2g4s.l();
          // Inline function 'androidx.navigation.NavController.executePopOperations.<anonymous>' call
          var tmp0 = $this.rbm_1;
          var tmp1 = element.cbe_1;
          var tmp0_safe_receiver = savedState.ve();
          // Inline function 'kotlin.collections.set' call
          var value = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.vbl_1;
          tmp0.o2(tmp1, value);
        }
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!savedState.q()) {
        var firstState = savedState.ue();
        var firstStateDestination = $this.bbo(firstState.wbl_1);
        var tmp_1 = generateSequence(firstStateDestination, NavController$executePopOperations$lambda_2);
        // Inline function 'kotlin.sequences.forEach' call
        var _iterator__ex2g4s_0 = takeWhile(tmp_1, NavController$executePopOperations$lambda_3($this)).j();
        while (_iterator__ex2g4s_0.k()) {
          var element_0 = _iterator__ex2g4s_0.l();
          // Inline function 'androidx.navigation.NavController.executePopOperations.<anonymous>' call
          var tmp0_0 = $this.rbm_1;
          var tmp1_0 = element_0.cbe_1;
          // Inline function 'kotlin.collections.set' call
          var value_0 = firstState.vbl_1;
          tmp0_0.o2(tmp1_0, value_0);
        }
        if ($this.rbm_1.n2().m(firstState.vbl_1)) {
          var tmp5 = $this.sbm_1;
          // Inline function 'kotlin.collections.set' call
          var key = firstState.vbl_1;
          tmp5.o2(key, savedState);
        }
      }
    }
    return popped._v;
  }
  function popEntryFromBackStack($this, popUpTo, saveState, savedState) {
    var entry = $this.kbm_1.we();
    // Inline function 'kotlin.check' call
    if (!entry.equals(popUpTo)) {
      // Inline function 'androidx.navigation.NavController.popEntryFromBackStack.<anonymous>' call
      var message = 'Attempted to pop ' + popUpTo.kbb_1.toString() + ', which is not the top of the back stack ' + ('(' + entry.kbb_1.toString() + ')');
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    removeLast($this.kbm_1);
    var navigator = $this.cbo().fbh(entry.kbb_1.xbd_1);
    var state = $this.zbm_1.l2(navigator);
    var tmp;
    var tmp1_safe_receiver = state == null ? null : state.dbb_1;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v();
    if ((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.m(entry)) === true) {
      tmp = true;
    } else {
      tmp = $this.qbm_1.j2(entry);
    }
    var transitioning = tmp;
    if (entry.p7w().w56().s56(State_CREATED_getInstance())) {
      if (saveState) {
        entry.jbc(State_CREATED_getInstance());
        savedState.ye(NavBackStackEntryState_init_$Create$(entry));
      }
      if (!transitioning) {
        entry.jbc(State_DESTROYED_getInstance());
        $this.wbn(entry);
      } else {
        entry.jbc(State_CREATED_getInstance());
      }
    }
    if (!saveState && !transitioning) {
      var tmp3_safe_receiver = $this.ubm_1;
      if (tmp3_safe_receiver == null)
        null;
      else {
        tmp3_safe_receiver.zbn(entry.obb_1);
      }
    }
  }
  function popEntryFromBackStack$default($this, popUpTo, saveState, savedState, $super) {
    saveState = saveState === VOID ? false : saveState;
    savedState = savedState === VOID ? ArrayDeque_init_$Create$() : savedState;
    return popEntryFromBackStack($this, popUpTo, saveState, savedState);
  }
  function clearBackStackInternal($this, destinationId) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = $this.zbm_1.n2().j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'androidx.navigation.NavController.clearBackStackInternal.<anonymous>' call
      element.bbb_1 = true;
    }
    var restored = restoreStateInternal($this, destinationId, null, navOptions(NavController$clearBackStackInternal$lambda), null);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = $this.zbm_1.n2().j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      // Inline function 'androidx.navigation.NavController.clearBackStackInternal.<anonymous>' call
      element_0.bbb_1 = false;
    }
    return restored && popBackStackInternal_0($this, destinationId, true, false);
  }
  function dispatchOnDestinationChanged($this) {
    $l$loop: while (true) {
      var tmp;
      if (!$this.kbm_1.q()) {
        var tmp_0 = $this.kbm_1.we().kbb_1;
        tmp = tmp_0 instanceof NavGraph;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      popEntryFromBackStack$default($this, $this.kbm_1.we());
    }
    var lastBackStackEntry = $this.kbm_1.xe();
    if (!(lastBackStackEntry == null)) {
      // Inline function 'kotlin.collections.plusAssign' call
      $this.ebn_1.e(lastBackStackEntry);
    }
    $this.dbn_1 = $this.dbn_1 + 1 | 0;
    $this.ubn();
    $this.dbn_1 = $this.dbn_1 - 1 | 0;
    if ($this.dbn_1 === 0) {
      var dispatchList = toMutableList($this.ebn_1);
      $this.ebn_1.f2();
      var tmp5_iterator = dispatchList.j();
      while (tmp5_iterator.k()) {
        var backStackEntry = tmp5_iterator.l();
        var tmp6_iterator = $this.vbm_1.j();
        while (tmp6_iterator.k()) {
          var listener = tmp6_iterator.l();
          listener.dbo($this, backStackEntry.kbb_1, backStackEntry.ibc());
        }
        $this.fbn_1.w1j(backStackEntry);
      }
      $this.lbm_1.w1j(toMutableList($this.kbm_1));
      $this.nbm_1.w1j($this.vbn());
    }
    return !(lastBackStackEntry == null);
  }
  function onGraphCreated($this, startDestinationArgs) {
    var tmp0_safe_receiver = $this.hbm_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>' call
      var navigatorNames = tmp0_safe_receiver.pb6('multiplatform-support-nav:controller:navigatorState:names');
      if (!(navigatorNames == null)) {
        var tmp0_iterator = navigatorNames.j();
        while (tmp0_iterator.k()) {
          var name = tmp0_iterator.l();
          var navigator = $this.ybm_1.fbh(ensureNotNull(name));
          var bundle = tmp0_safe_receiver.ob6(name);
          if (!(bundle == null)) {
            navigator.obh(bundle);
          }
        }
      }
    }
    var tmp1_safe_receiver = $this.ibm_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>' call
      var tmp0_iterator_0 = tmp1_safe_receiver.j();
      while (tmp0_iterator_0.k()) {
        var state = tmp0_iterator_0.l();
        var node = $this.bbo(state.wbl_1);
        if (node == null) {
          var dest = Companion_instance_0.nbe(state.wbl_1);
          throw IllegalStateException_init_$Create$('Restoring the Navigation back stack failed: destination ' + dest + ' cannot be ' + ('found from the current destination ' + toString($this.ebo())));
        }
        var entry = state.ebm(node, $this.sbn(), $this.ubm_1);
        var navigator_0 = $this.ybm_1.fbh(node.xbd_1);
        // Inline function 'kotlin.collections.getOrPut' call
        var this_0 = $this.zbm_1;
        var value = this_0.l2(navigator_0);
        var tmp;
        if (value == null) {
          // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>.<anonymous>' call
          var answer = new NavControllerNavigatorState($this, navigator_0);
          this_0.o2(navigator_0, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var navigatorBackStack = tmp;
        $this.kbm_1.e(entry);
        navigatorBackStack.rbn(entry);
        var parent = entry.kbb_1.ybd_1;
        if (!(parent == null)) {
          linkChildToParent($this, entry, getBackStackEntry($this, parent.cbe_1));
        }
      }
      $this.ibm_1 = null;
    }
    // Inline function 'kotlin.collections.filterNot' call
    var tmp0 = $this.ybm_1.pbl().n2();
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>' call
      if (!element.lbe_1) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = destination.j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>' call
      // Inline function 'kotlin.collections.getOrPut' call
      var this_1 = $this.zbm_1;
      var value_0 = this_1.l2(element_0);
      var tmp_0;
      if (value_0 == null) {
        // Inline function 'androidx.navigation.NavController.onGraphCreated.<anonymous>.<anonymous>' call
        var answer_0 = new NavControllerNavigatorState($this, element_0);
        this_1.o2(element_0, answer_0);
        tmp_0 = answer_0;
      } else {
        tmp_0 = value_0;
      }
      var navigatorBackStack_0 = tmp_0;
      element_0.jbh(navigatorBackStack_0);
    }
    if (!($this.gbm_1 == null) && $this.kbm_1.q()) {
      var deepLinked = !$this.jbm_1 && handleDeepLink($this);
      if (!deepLinked) {
        navigate($this, ensureNotNull($this.gbm_1), startDestinationArgs, null, null);
      }
    } else {
      dispatchOnDestinationChanged($this);
    }
  }
  function handleDeepLink($this) {
    return false;
  }
  function getTopGraph(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4.xe();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kbb_1;
    var currentNode = tmp1_elvis_lhs == null ? ensureNotNull($this.gbm_1) : tmp1_elvis_lhs;
    var tmp;
    if (currentNode instanceof NavGraph) {
      tmp = currentNode;
    } else {
      tmp = ensureNotNull(currentNode.ybd_1);
    }
    return tmp;
  }
  function generateRouteFilled($this, route) {
    var id = generateHashCode(serializer(getKClassFromExpression(route)));
    var destination = $this.gbo($this.fbo(), id, true);
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (destination == null) {
        // Inline function 'androidx.navigation.NavController.generateRouteFilled.<anonymous>' call
        var message = 'Destination with route ' + getKClassFromExpression(route).xa() + ' cannot be found ' + ('in navigation graph ' + toString($this.gbm_1));
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        break $l$block;
      }
    }
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = destination.ibc();
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$(mapCapacity(this_0.n()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = this_0.t().j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp = element.u();
      // Inline function 'androidx.navigation.NavController.generateRouteFilled.<anonymous>' call
      var tmp$ret$3 = element.v().gba_1;
      destination_0.o2(tmp, tmp$ret$3);
    }
    return generateRouteWithArgs(route, destination_0);
  }
  function navigateInternal_0($this, route, navOptions, navigatorExtras) {
    var tmp0 = $this.gbm_1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.navigation.NavController.navigateInternal.<anonymous>' call
        var message = 'Cannot navigate to ' + route + '. Navigation graph has not been set for ' + ('NavController ' + toString_0($this) + '.');
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        break $l$block;
      }
    }
    var currGraph = getTopGraph($this.kbm_1, $this);
    var deepLinkMatch = currGraph.hbf(route, true, true, currGraph);
    if (!(deepLinkMatch == null)) {
      var destination = deepLinkMatch.ebe_1;
      var tmp0_elvis_lhs = destination.kbf(deepLinkMatch.fbe_1);
      var args = tmp0_elvis_lhs == null ? Bundle_init_$Create$() : tmp0_elvis_lhs;
      var node = deepLinkMatch.ebe_1;
      navigate($this, node, args, navOptions, navigatorExtras);
    } else {
      throw IllegalArgumentException_init_$Create$('Navigation destination that matches route ' + route + ' cannot be found in the ' + ('navigation graph ' + toString($this.gbm_1)));
    }
  }
  function navigate($this, node, args, navOptions, navigatorExtras) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = $this.zbm_1.n2().j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'androidx.navigation.NavController.navigate.<anonymous>' call
      element.bbb_1 = true;
    }
    var popped = false;
    var launchSingleTop = false;
    var navigated = {_v: false};
    if (!(navOptions == null)) {
      if (!(navOptions.ubh_1 == null))
        popped = popBackStackInternal_2($this, ensureNotNull(navOptions.ubh_1), navOptions.nbi(), navOptions.obi());
      else if (!(navOptions.vbh_1 == null))
        popped = popBackStackInternal_0($this, generateHashCode(serializer(ensureNotNull(navOptions.vbh_1))), navOptions.nbi(), navOptions.obi());
      else if (!(navOptions.wbh_1 == null))
        popped = popBackStackInternal_1($this, ensureNotNull(navOptions.wbh_1), navOptions.nbi(), navOptions.obi());
      else if (!(navOptions.rbh_1 === -1))
        popped = popBackStackInternal_0($this, navOptions.rbh_1, navOptions.nbi(), navOptions.obi());
    }
    var finalArgs = node.kbf(args);
    var tmp;
    if ((navOptions == null ? null : navOptions.mbi()) === true) {
      tmp = $this.rbm_1.j2(node.cbe_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      navigated._v = restoreStateInternal($this, node.cbe_1, finalArgs, navOptions, navigatorExtras);
    } else {
      var tmp_0;
      if ((navOptions == null ? null : navOptions.lbi()) === true) {
        tmp_0 = launchSingleTopInternal($this, node, args);
      } else {
        tmp_0 = false;
      }
      launchSingleTop = tmp_0;
      if (!launchSingleTop) {
        var backStackEntry = Companion_instance.lbc(node, finalArgs, $this.sbn(), $this.ubm_1);
        var navigator = $this.ybm_1.fbh(node.xbd_1);
        var tmp_1 = listOf(backStackEntry);
        navigateInternal(navigator, $this, tmp_1, navOptions, navigatorExtras, NavController$navigate$lambda(navigated, $this, node, finalArgs));
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = $this.zbm_1.n2().j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      // Inline function 'androidx.navigation.NavController.navigate.<anonymous>' call
      element_0.bbb_1 = false;
    }
    if (popped || navigated._v || launchSingleTop) {
      dispatchOnDestinationChanged($this);
    } else {
      $this.ubn();
    }
  }
  function launchSingleTopInternal($this, node, args) {
    var currentBackStackEntry = $this.hbo();
    var tmp0 = $this.kbm_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfLast' call
      var iterator = tmp0.a2(tmp0.n());
      while (iterator.v4()) {
        // Inline function 'androidx.navigation.NavController.launchSingleTopInternal.<anonymous>' call
        if (iterator.x4().kbb_1 === node) {
          tmp$ret$1 = iterator.w4();
          break $l$block;
        }
      }
      tmp$ret$1 = -1;
    }
    var nodeIndex = tmp$ret$1;
    if (nodeIndex === -1)
      return false;
    if (node instanceof NavGraph) {
      var tmp = Companion_instance_1.xbf(node);
      var childHierarchyId = toList(map(tmp, NavController$launchSingleTopInternal$lambda));
      if (!(($this.kbm_1.te_1 - nodeIndex | 0) === childHierarchyId.n()))
        return false;
      // Inline function 'kotlin.collections.map' call
      var this_0 = $this.kbm_1.b2(nodeIndex, $this.kbm_1.te_1);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.j();
      while (_iterator__ex2g4s.k()) {
        var item = _iterator__ex2g4s.l();
        // Inline function 'androidx.navigation.NavController.launchSingleTopInternal.<anonymous>' call
        var tmp$ret$2 = item.kbb_1.cbe_1;
        destination.e(tmp$ret$2);
      }
      var backQueueId = destination;
      if (!equals(backQueueId, childHierarchyId))
        return false;
    } else {
      var tmp_0 = node.cbe_1;
      var tmp1_safe_receiver = currentBackStackEntry == null ? null : currentBackStackEntry.kbb_1;
      if (!(tmp_0 === (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.cbe_1))) {
        return false;
      }
    }
    var tempBackQueue = ArrayDeque_init_$Create$();
    while (get_lastIndex($this.kbm_1) >= nodeIndex) {
      var oldEntry = removeLast($this.kbm_1);
      $this.wbn(oldEntry);
      var newEntry = NavBackStackEntry_init_$Create$(oldEntry, oldEntry.kbb_1.kbf(args));
      tempBackQueue.ye(newEntry);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = tempBackQueue.j();
    while (_iterator__ex2g4s_0.k()) {
      var element = _iterator__ex2g4s_0.l();
      // Inline function 'androidx.navigation.NavController.launchSingleTopInternal.<anonymous>' call
      var parent = element.kbb_1.ybd_1;
      if (!(parent == null)) {
        var newParent = getBackStackEntry($this, parent.cbe_1);
        linkChildToParent($this, element, newParent);
      }
      $this.kbm_1.e(element);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_1 = tempBackQueue.j();
    while (_iterator__ex2g4s_1.k()) {
      var element_0 = _iterator__ex2g4s_1.l();
      // Inline function 'androidx.navigation.NavController.launchSingleTopInternal.<anonymous>' call
      var navigator = $this.ybm_1.fbh(element_0.kbb_1.xbd_1);
      navigator.jbb(element_0);
    }
    return true;
  }
  function restoreStateInternal($this, id, args, navOptions, navigatorExtras) {
    if (!$this.rbm_1.j2(id)) {
      return false;
    }
    var backStackId = $this.rbm_1.l2(id);
    var tmp = $this.rbm_1.n2();
    removeAll(tmp, NavController$restoreStateInternal$lambda(backStackId));
    // Inline function 'kotlin.collections.remove' call
    var this_0 = $this.sbm_1;
    var backStackState = (isInterface(this_0, KtMutableMap) ? this_0 : THROW_CCE()).p2(backStackId);
    var entries = instantiateBackStack($this, backStackState);
    return executeRestoreState($this, entries, args, navOptions, navigatorExtras);
  }
  function executeRestoreState($this, entries, args, navOptions, navigatorExtras) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var entriesGroupedByNavigator = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = entries.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'androidx.navigation.NavController.executeRestoreState.<anonymous>' call
      var tmp = element.kbb_1;
      if (!(tmp instanceof NavGraph)) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = destination.j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      // Inline function 'androidx.navigation.NavController.executeRestoreState.<anonymous>' call
      var previousEntryList = lastOrNull(entriesGroupedByNavigator);
      var tmp1_safe_receiver = previousEntryList == null ? null : last(previousEntryList);
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.kbb_1;
      var previousNavigatorName = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.xbd_1;
      if (previousNavigatorName === element_0.kbb_1.xbd_1) {
        // Inline function 'kotlin.collections.plusAssign' call
        previousEntryList.e(element_0);
      } else {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_1 = mutableListOf([element_0]);
        entriesGroupedByNavigator.e(element_1);
      }
    }
    var navigated = {_v: false};
    var tmp0_iterator = entriesGroupedByNavigator.j();
    while (tmp0_iterator.k()) {
      var entryList = tmp0_iterator.l();
      var navigator = $this.ybm_1.fbh(first(entryList).kbb_1.xbd_1);
      var lastNavigatedIndex = {_v: 0};
      navigateInternal(navigator, $this, entryList, navOptions, navigatorExtras, NavController$executeRestoreState$lambda(navigated, entries, lastNavigatedIndex, $this, args));
    }
    return navigated._v;
  }
  function instantiateBackStack($this, backStackState) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var backStack = ArrayList_init_$Create$();
    var tmp0_safe_receiver = $this.kbm_1.xe();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kbb_1;
    var currentDestination = tmp1_elvis_lhs == null ? $this.fbo() : tmp1_elvis_lhs;
    if (backStackState == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = backStackState.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'androidx.navigation.NavController.instantiateBackStack.<anonymous>' call
        var node = $this.gbo(currentDestination, element.wbl_1, true);
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          if (node == null) {
            // Inline function 'androidx.navigation.NavController.instantiateBackStack.<anonymous>.<anonymous>' call
            var dest = Companion_instance_0.nbe(element.wbl_1);
            var message = 'Restore State failed: destination ' + dest + ' cannot be found from the current ' + ('destination ' + currentDestination.toString());
            throw IllegalStateException_init_$Create$(toString_0(message));
          } else {
            break $l$block;
          }
        }
        // Inline function 'kotlin.collections.plusAssign' call
        var element_0 = element.ebm(node, $this.sbn(), $this.ubm_1);
        backStack.e(element_0);
        currentDestination = node;
      }
    }
    return backStack;
  }
  function addEntryToBackStack($this, node, finalArgs, backStackEntry, restoredEntries) {
    var newDest = backStackEntry.kbb_1;
    if (!isInterface(newDest, FloatingWindow)) {
      $l$loop: while (true) {
        var tmp;
        var tmp_0;
        if (!$this.kbm_1.q()) {
          var tmp_1 = $this.kbm_1.we().kbb_1;
          tmp_0 = isInterface(tmp_1, FloatingWindow);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp = popBackStackInternal$default($this, $this.kbm_1.we().kbb_1.cbe_1, true);
        } else {
          tmp = false;
        }
        if (!tmp) {
          break $l$loop;
        }
      }
    }
    var hierarchy = ArrayDeque_init_$Create$();
    var destination = newDest;
    if (node instanceof NavGraph) {
      do {
        var parent = ensureNotNull(destination).ybd_1;
        if (!(parent == null)) {
          var tmp$ret$1;
          $l$block: {
            // Inline function 'kotlin.collections.lastOrNull' call
            var iterator = restoredEntries.a2(restoredEntries.n());
            while (iterator.v4()) {
              var element = iterator.x4();
              // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
              if (element.kbb_1.equals(parent)) {
                tmp$ret$1 = element;
                break $l$block;
              }
            }
            tmp$ret$1 = null;
          }
          var tmp0_elvis_lhs = tmp$ret$1;
          var entry = tmp0_elvis_lhs == null ? Companion_instance.lbc(parent, finalArgs, $this.sbn(), $this.ubm_1) : tmp0_elvis_lhs;
          hierarchy.ye(entry);
          var tmp_2;
          // Inline function 'kotlin.collections.isNotEmpty' call
          if (!$this.kbm_1.q()) {
            tmp_2 = $this.kbm_1.we().kbb_1 === parent;
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            popEntryFromBackStack$default($this, $this.kbm_1.we());
          }
        }
        destination = parent;
      }
       while (!(destination == null) && !(destination === node));
    }
    destination = hierarchy.q() ? newDest : hierarchy.ue().kbb_1;
    while (!(destination == null) && !($this.bbo(destination.cbe_1) === destination)) {
      var parent_0 = destination.ybd_1;
      if (!(parent_0 == null)) {
        var tmp_3;
        if ((finalArgs == null ? null : finalArgs.q()) === true) {
          tmp_3 = null;
        } else {
          tmp_3 = finalArgs;
        }
        var args = tmp_3;
        var tmp$ret$4;
        $l$block_0: {
          // Inline function 'kotlin.collections.lastOrNull' call
          var iterator_0 = restoredEntries.a2(restoredEntries.n());
          while (iterator_0.v4()) {
            var element_0 = iterator_0.x4();
            // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
            if (element_0.kbb_1.equals(parent_0)) {
              tmp$ret$4 = element_0;
              break $l$block_0;
            }
          }
          tmp$ret$4 = null;
        }
        var tmp2_elvis_lhs = tmp$ret$4;
        var entry_0 = tmp2_elvis_lhs == null ? Companion_instance.lbc(parent_0, parent_0.kbf(args), $this.sbn(), $this.ubm_1) : tmp2_elvis_lhs;
        hierarchy.ye(entry_0);
      }
      destination = parent_0;
    }
    var overlappingDestination = hierarchy.q() ? newDest : hierarchy.ue().kbb_1;
    $l$loop_0: while (true) {
      var tmp_4;
      var tmp_5;
      if (!$this.kbm_1.q()) {
        var tmp_6 = $this.kbm_1.we().kbb_1;
        tmp_5 = tmp_6 instanceof NavGraph;
      } else {
        tmp_5 = false;
      }
      if (tmp_5) {
        var tmp_7 = $this.kbm_1.we().kbb_1;
        tmp_4 = (tmp_7 instanceof NavGraph ? tmp_7 : THROW_CCE()).dbf_1.p(overlappingDestination.cbe_1) == null;
      } else {
        tmp_4 = false;
      }
      if (!tmp_4) {
        break $l$loop_0;
      }
      popEntryFromBackStack$default($this, $this.kbm_1.we());
    }
    var tmp3_elvis_lhs = $this.kbm_1.ve();
    var firstEntry = tmp3_elvis_lhs == null ? hierarchy.ve() : tmp3_elvis_lhs;
    if (!equals(firstEntry == null ? null : firstEntry.kbb_1, $this.gbm_1)) {
      var tmp$ret$6;
      $l$block_1: {
        // Inline function 'kotlin.collections.lastOrNull' call
        var iterator_1 = restoredEntries.a2(restoredEntries.n());
        while (iterator_1.v4()) {
          var element_1 = iterator_1.x4();
          // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
          if (element_1.kbb_1.equals(ensureNotNull($this.gbm_1))) {
            tmp$ret$6 = element_1;
            break $l$block_1;
          }
        }
        tmp$ret$6 = null;
      }
      var tmp5_elvis_lhs = tmp$ret$6;
      var entry_1 = tmp5_elvis_lhs == null ? Companion_instance.lbc(ensureNotNull($this.gbm_1), ensureNotNull($this.gbm_1).kbf(finalArgs), $this.sbn(), $this.ubm_1) : tmp5_elvis_lhs;
      hierarchy.ye(entry_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = hierarchy.j();
    while (_iterator__ex2g4s.k()) {
      var element_2 = _iterator__ex2g4s.l();
      // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
      var navigator = $this.ybm_1.fbh(element_2.kbb_1.xbd_1);
      var tmp0 = $this.zbm_1.l2(navigator);
      var tmp$ret$8;
      $l$block_2: {
        // Inline function 'kotlin.checkNotNull' call
        if (tmp0 == null) {
          // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>.<anonymous>' call
          var message = 'NavigatorBackStack for ' + node.xbd_1 + ' should already be created';
          throw IllegalStateException_init_$Create$(toString_0(message));
        } else {
          tmp$ret$8 = tmp0;
          break $l$block_2;
        }
      }
      var navigatorBackStack = tmp$ret$8;
      navigatorBackStack.rbn(element_2);
    }
    $this.kbm_1.o(hierarchy);
    $this.kbm_1.e(backStackEntry);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = plus(hierarchy, backStackEntry).j();
    while (_iterator__ex2g4s_0.k()) {
      var element_3 = _iterator__ex2g4s_0.l();
      // Inline function 'androidx.navigation.NavController.addEntryToBackStack.<anonymous>' call
      var parent_1 = element_3.kbb_1.ybd_1;
      if (!(parent_1 == null)) {
        linkChildToParent($this, element_3, getBackStackEntry($this, parent_1.cbe_1));
      }
    }
  }
  function addEntryToBackStack$default($this, node, finalArgs, backStackEntry, restoredEntries, $super) {
    restoredEntries = restoredEntries === VOID ? emptyList() : restoredEntries;
    return addEntryToBackStack($this, node, finalArgs, backStackEntry, restoredEntries);
  }
  function getBackStackEntry($this, destinationId) {
    var tmp0 = $this.kbm_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.lastOrNull' call
      var iterator = tmp0.a2(tmp0.n());
      while (iterator.v4()) {
        var element = iterator.x4();
        // Inline function 'androidx.navigation.NavController.getBackStackEntry.<anonymous>' call
        if (element.kbb_1.cbe_1 === destinationId) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var lastFromBackStack = tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlin.requireNotNull' call
      if (lastFromBackStack == null) {
        // Inline function 'androidx.navigation.NavController.getBackStackEntry.<anonymous>' call
        var message = 'No destination with ID ' + destinationId + " is on the NavController's back stack. The " + ('current destination is ' + toString($this.ebo()));
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        break $l$block_0;
      }
    }
    return lastFromBackStack;
  }
  function Companion_0() {
    this.ibo_1 = 'multiplatform-support-nav:controller:navigatorState';
    this.jbo_1 = 'multiplatform-support-nav:controller:navigatorState:names';
    this.kbo_1 = 'multiplatform-support-nav:controller:backStack';
    this.lbo_1 = 'multiplatform-support-nav:controller:backStackDestIds';
    this.mbo_1 = 'multiplatform-support-nav:controller:backStackIds';
    this.nbo_1 = 'multiplatform-support-nav:controller:backStackStates';
    this.obo_1 = 'multiplatform-support-nav:controller:backStackStates:';
    this.pbo_1 = 'multiplatform-support-nav:controller:deepLinkHandled';
  }
  var Companion_instance_3;
  function Companion_getInstance_1() {
    return Companion_instance_3;
  }
  function sam$androidx_lifecycle_LifecycleEventObserver$0(function_0) {
    this.qbo_1 = function_0;
  }
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).k56 = function (source, event) {
    return this.qbo_1(source, event);
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).q3 = function () {
    return this.qbo_1;
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, LifecycleEventObserver) : false) {
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
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function NavController$lifecycleObserver$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8, event) {
      this$0.wbm_1 = event.p56();
      var tmp;
      if (!(this$0.gbm_1 == null)) {
        var tmp0_iterator = this$0.kbm_1.j();
        while (tmp0_iterator.k()) {
          var entry = tmp0_iterator.l();
          entry.p57(event);
        }
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function NavController$executePopOperations$lambda($receivedPop, $popped, this$0, $saveState, $savedState) {
    return function (entry) {
      $receivedPop._v = true;
      $popped._v = true;
      popEntryFromBackStack(this$0, entry, $saveState, $savedState);
      return Unit_instance;
    };
  }
  function NavController$executePopOperations$lambda_0(destination) {
    var tmp;
    var tmp0_safe_receiver = destination.ybd_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.vbf()) === destination.cbe_1) {
      tmp = destination.ybd_1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function NavController$executePopOperations$lambda_1(this$0) {
    return function (destination) {
      return !this$0.rbm_1.j2(destination.cbe_1);
    };
  }
  function NavController$executePopOperations$lambda_2(destination) {
    var tmp;
    var tmp0_safe_receiver = destination.ybd_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.vbf()) === destination.cbe_1) {
      tmp = destination.ybd_1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function NavController$executePopOperations$lambda_3(this$0) {
    return function (destination) {
      return !this$0.rbm_1.j2(destination.cbe_1);
    };
  }
  function NavController$clearBackStackInternal$lambda($this$navOptions) {
    $this$navOptions.qba_1 = true;
    return Unit_instance;
  }
  function NavController$navigate$lambda($navigated, this$0, $node, $finalArgs) {
    return function (it) {
      $navigated._v = true;
      addEntryToBackStack$default(this$0, $node, $finalArgs, it);
      return Unit_instance;
    };
  }
  function NavController$launchSingleTopInternal$lambda(it) {
    return it.cbe_1;
  }
  function NavController$restoreStateInternal$lambda($backStackId) {
    return function (it) {
      return it == $backStackId;
    };
  }
  function NavController$executeRestoreState$lambda($navigated, $entries, $lastNavigatedIndex, this$0, $args) {
    return function (entry) {
      $navigated._v = true;
      var entryIndex = $entries.r(entry);
      var tmp;
      if (!(entryIndex === -1)) {
        // Inline function 'kotlin.also' call
        var this_0 = $entries.b2($lastNavigatedIndex._v, entryIndex + 1 | 0);
        // Inline function 'androidx.navigation.NavController.executeRestoreState.<anonymous>.<anonymous>' call
        $lastNavigatedIndex._v = entryIndex + 1 | 0;
        tmp = this_0;
      } else {
        tmp = emptyList();
      }
      var restoredEntries = tmp;
      addEntryToBackStack(this$0, entry.kbb_1, $args, entry, restoredEntries);
      return Unit_instance;
    };
  }
  function NavController() {
    this.gbm_1 = null;
    this.hbm_1 = null;
    this.ibm_1 = null;
    this.jbm_1 = false;
    this.kbm_1 = ArrayDeque_init_$Create$();
    this.lbm_1 = MutableStateFlow(emptyList());
    this.mbm_1 = asStateFlow(this.lbm_1);
    this.nbm_1 = MutableStateFlow(emptyList());
    this.obm_1 = asStateFlow(this.nbm_1);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.pbm_1 = LinkedHashMap_init_$Create$_0();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.qbm_1 = LinkedHashMap_init_$Create$_0();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.rbm_1 = LinkedHashMap_init_$Create$_0();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_2.sbm_1 = LinkedHashMap_init_$Create$_0();
    this.tbm_1 = null;
    this.ubm_1 = null;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_3.vbm_1 = ArrayList_init_$Create$();
    this.wbm_1 = State_INITIALIZED_getInstance();
    var tmp_4 = this;
    var tmp_5 = NavController$lifecycleObserver$lambda(this);
    tmp_4.xbm_1 = new sam$androidx_lifecycle_LifecycleEventObserver$0(tmp_5);
    this.ybm_1 = new NavigatorProvider();
    var tmp_6 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_6.zbm_1 = LinkedHashMap_init_$Create$_0();
    this.abn_1 = null;
    this.bbn_1 = null;
    var tmp_7 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_7.cbn_1 = LinkedHashMap_init_$Create$_0();
    this.ybm_1.qbl(new NavGraphNavigator(this.ybm_1));
    this.dbn_1 = 0;
    var tmp_8 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_8.ebn_1 = ArrayList_init_$Create$();
    this.fbn_1 = MutableSharedFlow(1, VOID, BufferOverflow_DROP_OLDEST_getInstance());
    this.gbn_1 = asSharedFlow(this.fbn_1);
  }
  protoOf(NavController).rbo = function (graph) {
    this.sbo(graph, null);
  };
  protoOf(NavController).fbo = function () {
    var tmp0 = this.gbm_1;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.navigation.NavController.<get-graph>.<anonymous>' call
        var message = 'You must call setGraph() before calling getGraph()';
        throw IllegalStateException_init_$Create$(toString_0(message));
      } else {
        break $l$block;
      }
    }
    var tmp = this.gbm_1;
    return tmp instanceof NavGraph ? tmp : THROW_CCE();
  };
  protoOf(NavController).wbn = function (child) {
    var tmp0_elvis_lhs = this.pbm_1.p2(child);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp1_safe_receiver = this.qbm_1.l2(parent);
    var count = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.tbo();
    if (count === 0) {
      var tmp0 = this.ybm_1;
      // Inline function 'androidx.navigation.get' call
      var name = parent.kbb_1.xbd_1;
      var navGraphNavigator = tmp0.fbh(name);
      var tmp2_safe_receiver = this.zbm_1.l2(navGraphNavigator);
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.wbb(parent);
      }
      this.qbm_1.p2(parent);
    }
    return parent;
  };
  protoOf(NavController).sbn = function () {
    var tmp;
    if (this.tbm_1 == null) {
      tmp = State_CREATED_getInstance();
    } else {
      tmp = this.wbm_1;
    }
    return tmp;
  };
  protoOf(NavController).cbo = function () {
    return this.ybm_1;
  };
  protoOf(NavController).mbh = function () {
    var tmp;
    if (this.kbm_1.q()) {
      tmp = false;
    } else {
      tmp = popBackStack(this, ensureNotNull(this.ebo()).cbe_1, true);
    }
    return tmp;
  };
  protoOf(NavController).abo = function (destinationId, inclusive, saveState) {
    var popped = popBackStackInternal_0(this, destinationId, inclusive, saveState);
    return popped && dispatchOnDestinationChanged(this);
  };
  protoOf(NavController).tbn = function (popUpTo, onComplete) {
    var popIndex = this.kbm_1.r(popUpTo);
    if (popIndex < 0) {
      println('Ignoring pop of ' + popUpTo.toString() + ' as it was not found on the current back stack');
      return Unit_instance;
    }
    if (!((popIndex + 1 | 0) === this.kbm_1.te_1)) {
      popBackStackInternal_0(this, this.kbm_1.p(popIndex + 1 | 0).kbb_1.cbe_1, true, false);
    }
    popEntryFromBackStack$default(this, popUpTo);
    onComplete();
    dispatchOnDestinationChanged(this);
  };
  protoOf(NavController).ubn = function () {
    var backStack = toMutableList(this.kbm_1);
    if (backStack.q()) {
      return Unit_instance;
    }
    var nextResumed = last(backStack).kbb_1;
    // Inline function 'kotlin.collections.mutableListOf' call
    var nextStarted = ArrayList_init_$Create$();
    if (!(nextResumed == null) ? isInterface(nextResumed, FloatingWindow) : false) {
      var iterator = reversed(backStack).j();
      $l$loop: while (iterator.k()) {
        var destination = iterator.l().kbb_1;
        nextStarted.e(destination);
        var tmp;
        if (!isInterface(destination, FloatingWindow)) {
          tmp = !(destination instanceof NavGraph);
        } else {
          tmp = false;
        }
        if (tmp) {
          break $l$loop;
        }
      }
    }
    var upwardStateTransitions = HashMap_init_$Create$();
    var iterator_0 = reversed(backStack).j();
    while (iterator_0.k()) {
      var entry = iterator_0.l();
      var currentMaxLifecycle = entry.ubb_1;
      var destination_0 = entry.kbb_1;
      if (!(nextResumed == null) && destination_0.cbe_1 === nextResumed.cbe_1) {
        if (!currentMaxLifecycle.equals(State_RESUMED_getInstance())) {
          var navigator = this.cbo().fbh(entry.kbb_1.xbd_1);
          var state = this.zbm_1.l2(navigator);
          var tmp1_safe_receiver = state == null ? null : state.dbb_1;
          var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v();
          var transitioning = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.m(entry);
          var tmp_0;
          if (!(transitioning === true)) {
            var tmp3_safe_receiver = this.qbm_1.l2(entry);
            tmp_0 = !((tmp3_safe_receiver == null ? null : tmp3_safe_receiver.h12()) === 0);
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            // Inline function 'kotlin.collections.set' call
            var value = State_RESUMED_getInstance();
            upwardStateTransitions.o2(entry, value);
          } else {
            // Inline function 'kotlin.collections.set' call
            var value_0 = State_STARTED_getInstance();
            upwardStateTransitions.o2(entry, value_0);
          }
        }
        var tmp4_safe_receiver = firstOrNull(nextStarted);
        if ((tmp4_safe_receiver == null ? null : tmp4_safe_receiver.cbe_1) === destination_0.cbe_1) {
          removeFirst(nextStarted);
        }
        nextResumed = nextResumed.ybd_1;
      } else {
        var tmp_1;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!nextStarted.q()) {
          tmp_1 = destination_0.cbe_1 === first(nextStarted).cbe_1;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          var started = removeFirst(nextStarted);
          if (currentMaxLifecycle.equals(State_RESUMED_getInstance())) {
            entry.jbc(State_STARTED_getInstance());
          } else if (!currentMaxLifecycle.equals(State_STARTED_getInstance())) {
            // Inline function 'kotlin.collections.set' call
            var value_1 = State_STARTED_getInstance();
            upwardStateTransitions.o2(entry, value_1);
          }
          var tmp5_safe_receiver = started.ybd_1;
          if (tmp5_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.navigation.NavController.updateBackStackLifecycle.<anonymous>' call
            if (!nextStarted.m(tmp5_safe_receiver)) {
              nextStarted.e(tmp5_safe_receiver);
            }
          }
        } else {
          entry.jbc(State_CREATED_getInstance());
        }
      }
    }
    iterator_0 = backStack.j();
    while (iterator_0.k()) {
      var entry_0 = iterator_0.l();
      var newState = upwardStateTransitions.l2(entry_0);
      if (!(newState == null)) {
        entry_0.jbc(newState);
      } else {
        entry_0.rbc();
      }
    }
  };
  protoOf(NavController).vbn = function () {
    // Inline function 'kotlin.collections.mutableListOf' call
    var entries = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.zbm_1.n2().j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'androidx.navigation.NavController.populateVisibleEntries.<anonymous>' call
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = element.dbb_1.v();
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s_0 = tmp0.j();
      while (_iterator__ex2g4s_0.k()) {
        var element_0 = _iterator__ex2g4s_0.l();
        // Inline function 'androidx.navigation.NavController.populateVisibleEntries.<anonymous>.<anonymous>' call
        if (!entries.m(element_0) && !element_0.ubb_1.s56(State_STARTED_getInstance())) {
          destination.e(element_0);
        }
      }
      // Inline function 'kotlin.collections.plusAssign' call
      addAll(entries, destination);
    }
    // Inline function 'kotlin.collections.filter' call
    var tmp0_0 = this.kbm_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_1 = tmp0_0.j();
    while (_iterator__ex2g4s_1.k()) {
      var element_1 = _iterator__ex2g4s_1.l();
      // Inline function 'androidx.navigation.NavController.populateVisibleEntries.<anonymous>' call
      if (!entries.m(element_1) && element_1.ubb_1.s56(State_STARTED_getInstance())) {
        destination_0.e(element_1);
      }
    }
    // Inline function 'kotlin.collections.plusAssign' call
    addAll(entries, destination_0);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_2 = entries.j();
    while (_iterator__ex2g4s_2.k()) {
      var element_2 = _iterator__ex2g4s_2.l();
      // Inline function 'androidx.navigation.NavController.populateVisibleEntries.<anonymous>' call
      var tmp = element_2.kbb_1;
      if (!(tmp instanceof NavGraph)) {
        destination_1.e(element_2);
      }
    }
    return destination_1;
  };
  protoOf(NavController).sbo = function (graph, startDestinationArgs) {
    if (!equals(this.gbm_1, graph)) {
      var tmp0_safe_receiver = this.gbm_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.navigation.NavController.setGraph.<anonymous>' call
        var savedBackStackIds = ArrayList_init_$Create$_1(this.rbm_1.m2());
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = savedBackStackIds.j();
        while (_iterator__ex2g4s.k()) {
          var element = _iterator__ex2g4s.l();
          // Inline function 'androidx.navigation.NavController.setGraph.<anonymous>.<anonymous>' call
          clearBackStackInternal(this, element);
        }
        popBackStackInternal$default(this, tmp0_safe_receiver.cbe_1, true);
      }
      this.gbm_1 = graph;
      onGraphCreated(this, startDestinationArgs);
    } else {
      var inductionVariable = 0;
      var last = graph.dbf_1.yu();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var newDestination = graph.dbf_1.zu(i);
          var key = ensureNotNull(this.gbm_1).dbf_1.gv(i);
          ensureNotNull(this.gbm_1).dbf_1.jv(key, newDestination);
        }
         while (inductionVariable < last);
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = this.kbm_1.j();
      while (_iterator__ex2g4s_0.k()) {
        var element_0 = _iterator__ex2g4s_0.l();
        // Inline function 'androidx.navigation.NavController.setGraph.<anonymous>' call
        var hierarchy = asReversed(toList(Companion_instance_0.pbe(element_0.kbb_1)));
        // Inline function 'kotlin.collections.fold' call
        var accumulator = ensureNotNull(this.gbm_1);
        var _iterator__ex2g4s_1 = hierarchy.j();
        while (_iterator__ex2g4s_1.k()) {
          var element_1 = _iterator__ex2g4s_1.l();
          // Inline function 'androidx.navigation.NavController.setGraph.<anonymous>.<anonymous>' call
          var newDest = accumulator;
          var tmp;
          if (element_1.equals(this.gbm_1) && newDest.equals(graph)) {
            tmp = newDest;
          } else {
            if (newDest instanceof NavGraph) {
              tmp = ensureNotNull(newDest.wbf(element_1.cbe_1));
            } else {
              tmp = newDest;
            }
          }
          accumulator = tmp;
        }
        var newDestination_0 = accumulator;
        element_0.kbb_1 = newDestination_0;
      }
    }
  };
  protoOf(NavController).ebo = function () {
    var tmp0_safe_receiver = this.hbo();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kbb_1;
  };
  protoOf(NavController).bbo = function (destinationId) {
    if (this.gbm_1 == null) {
      return null;
    }
    if (ensureNotNull(this.gbm_1).cbe_1 === destinationId) {
      return this.gbm_1;
    }
    var tmp0_safe_receiver = this.kbm_1.xe();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kbb_1;
    var currentNode = tmp1_elvis_lhs == null ? ensureNotNull(this.gbm_1) : tmp1_elvis_lhs;
    return this.gbo(currentNode, destinationId, false);
  };
  protoOf(NavController).gbo = function (_this__u8e3s4, destinationId, searchChildren) {
    if (_this__u8e3s4.cbe_1 === destinationId) {
      return _this__u8e3s4;
    }
    var tmp;
    if (_this__u8e3s4 instanceof NavGraph) {
      tmp = _this__u8e3s4;
    } else {
      tmp = ensureNotNull(_this__u8e3s4.ybd_1);
    }
    var currentGraph = tmp;
    return currentGraph.dbg(destinationId, currentGraph, searchChildren);
  };
  protoOf(NavController).ubo = function (route, navOptions, navigatorExtras) {
    navigateInternal_0(this, route, navOptions, navigatorExtras);
  };
  protoOf(NavController).vbo = function (route, navOptions, navigatorExtras, $super) {
    navOptions = navOptions === VOID ? null : navOptions;
    navigatorExtras = navigatorExtras === VOID ? null : navigatorExtras;
    var tmp;
    if ($super === VOID) {
      this.ubo(route, navOptions, navigatorExtras);
      tmp = Unit_instance;
    } else {
      tmp = $super.ubo.call(this, route, navOptions, navigatorExtras);
    }
    return tmp;
  };
  protoOf(NavController).ib7 = function () {
    var b = null;
    var navigatorNames = ArrayList_init_$Create$();
    var navigatorState = Bundle_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.ybm_1.pbl().t().j();
    while (tmp0_iterator.k()) {
      var tmp1_loop_parameter = tmp0_iterator.l();
      // Inline function 'kotlin.collections.component1' call
      var name = tmp1_loop_parameter.u();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.v();
      var savedState = value.nbh();
      if (!(savedState == null)) {
        navigatorNames.e(name);
        navigatorState.xb5(name, savedState);
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!navigatorNames.q()) {
      b = Bundle_init_$Create$();
      navigatorState.yb5('multiplatform-support-nav:controller:navigatorState:names', navigatorNames);
      b.xb5('multiplatform-support-nav:controller:navigatorState', navigatorState);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.kbm_1.q()) {
      if (b == null) {
        b = Bundle_init_$Create$();
      }
      // Inline function 'kotlin.arrayOfNulls' call
      var size = this.kbm_1.te_1;
      var backStack = fillArrayVal(Array(size), null);
      var index = 0;
      var tmp2_iterator = this.kbm_1.j();
      while (tmp2_iterator.k()) {
        var backStackEntry = tmp2_iterator.l();
        var tmp3 = index;
        index = tmp3 + 1 | 0;
        backStack[tmp3] = NavBackStackEntryState_init_$Create$(backStackEntry).fbm();
      }
      b.ib6('multiplatform-support-nav:controller:backStack', backStack);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.rbm_1.q()) {
      if (b == null) {
        b = Bundle_init_$Create$();
      }
      var backStackDestIds = new Int32Array(this.rbm_1.n());
      var backStackIds = ArrayList_init_$Create$();
      var index_0 = 0;
      // Inline function 'kotlin.collections.iterator' call
      var tmp4_iterator = this.rbm_1.t().j();
      while (tmp4_iterator.k()) {
        var tmp5_loop_parameter = tmp4_iterator.l();
        // Inline function 'kotlin.collections.component1' call
        var destId = tmp5_loop_parameter.u();
        // Inline function 'kotlin.collections.component2' call
        var id = tmp5_loop_parameter.v();
        var tmp6 = index_0;
        index_0 = tmp6 + 1 | 0;
        backStackDestIds[tmp6] = destId;
        // Inline function 'kotlin.collections.plusAssign' call
        backStackIds.e(id);
      }
      b.db6('multiplatform-support-nav:controller:backStackDestIds', backStackDestIds);
      b.yb5('multiplatform-support-nav:controller:backStackIds', backStackIds);
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.sbm_1.q()) {
      if (b == null) {
        b = Bundle_init_$Create$();
      }
      var backStackStateIds = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.iterator' call
      var tmp7_iterator = this.sbm_1.t().j();
      while (tmp7_iterator.k()) {
        var tmp8_loop_parameter = tmp7_iterator.l();
        // Inline function 'kotlin.collections.component1' call
        var id_0 = tmp8_loop_parameter.u();
        // Inline function 'kotlin.collections.component2' call
        var backStackStates = tmp8_loop_parameter.v();
        // Inline function 'kotlin.collections.plusAssign' call
        backStackStateIds.e(id_0);
        // Inline function 'kotlin.arrayOfNulls' call
        var size_0 = backStackStates.te_1;
        var states = fillArrayVal(Array(size_0), null);
        // Inline function 'kotlin.collections.forEachIndexed' call
        var index_1 = 0;
        var _iterator__ex2g4s = backStackStates.j();
        while (_iterator__ex2g4s.k()) {
          var item = _iterator__ex2g4s.l();
          var _unary__edvuaz = index_1;
          index_1 = _unary__edvuaz + 1 | 0;
          // Inline function 'androidx.navigation.NavController.saveState.<anonymous>' call
          states[checkIndexOverflow(_unary__edvuaz)] = item.fbm();
        }
        b.ib6('multiplatform-support-nav:controller:backStackStates:' + id_0, states);
      }
      b.yb5('multiplatform-support-nav:controller:backStackStates', backStackStateIds);
    }
    if (this.jbm_1) {
      if (b == null) {
        b = Bundle_init_$Create$();
      }
      b.nb5('multiplatform-support-nav:controller:deepLinkHandled', this.jbm_1);
    }
    return b;
  };
  protoOf(NavController).wbo = function (navState) {
    if (navState == null) {
      return Unit_instance;
    }
    this.hbm_1 = navState.ob6('multiplatform-support-nav:controller:navigatorState');
    var tmp = this;
    var tmp0_safe_receiver = navState.rb6('multiplatform-support-nav:controller:backStack');
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.mapNotNull' call
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var destination = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.length;
      while (inductionVariable < last) {
        var element = tmp0_safe_receiver[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
        // Inline function 'androidx.navigation.NavController.restoreState.<anonymous>' call
        var tmp0_safe_receiver_0 = Companion_instance_2.dbm(element);
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
          destination.e(tmp0_safe_receiver_0);
        }
      }
      tmp_0 = destination;
    }
    tmp.ibm_1 = tmp_0;
    this.sbm_1.f2();
    var backStackDestIds = navState.qb6('multiplatform-support-nav:controller:backStackDestIds');
    var backStackIds = navState.pb6('multiplatform-support-nav:controller:backStackIds');
    if (!(backStackDestIds == null) && !(backStackIds == null)) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = backStackDestIds.length;
      while (inductionVariable_0 < last_0) {
        var item = backStackDestIds[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.navigation.NavController.restoreState.<anonymous>' call
        var tmp0 = this.rbm_1;
        // Inline function 'kotlin.collections.set' call
        var value = backStackIds.p(_unary__edvuaz);
        tmp0.o2(item, value);
      }
    }
    var backStackStateIds = navState.pb6('multiplatform-support-nav:controller:backStackStates');
    var tmp2_safe_receiver = backStackStateIds == null ? null : filterNotNull(backStackStateIds);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = tmp2_safe_receiver.j();
      while (_iterator__ex2g4s.k()) {
        var element_0 = _iterator__ex2g4s.l();
        // Inline function 'androidx.navigation.NavController.restoreState.<anonymous>' call
        var tmp0_safe_receiver_1 = navState.rb6('multiplatform-support-nav:controller:backStackStates:' + element_0);
        var tmp_1;
        if (tmp0_safe_receiver_1 == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.collections.mapNotNull' call
          // Inline function 'kotlin.collections.mapNotNullTo' call
          var destination_0 = ArrayList_init_$Create$();
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_1 = 0;
          var last_1 = tmp0_safe_receiver_1.length;
          while (inductionVariable_1 < last_1) {
            var element_1 = tmp0_safe_receiver_1[inductionVariable_1];
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
            // Inline function 'androidx.navigation.NavController.restoreState.<anonymous>.<anonymous>' call
            var tmp0_safe_receiver_2 = Companion_instance_2.dbm(element_1);
            if (tmp0_safe_receiver_2 == null)
              null;
            else {
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>.<anonymous>' call
              destination_0.e(tmp0_safe_receiver_2);
            }
          }
          tmp_1 = destination_0;
        }
        var backStackState = tmp_1;
        if (!(backStackState == null)) {
          var tmp4 = this.sbm_1;
          // Inline function 'kotlin.apply' call
          var this_0 = ArrayDeque_init_$Create$_0(backStackState.n());
          // Inline function 'androidx.navigation.NavController.restoreState.<anonymous>.<anonymous>' call
          var tmp0_iterator = backStackState.j();
          while (tmp0_iterator.k()) {
            var i = tmp0_iterator.l();
            this_0.e(i);
          }
          // Inline function 'kotlin.collections.set' call
          tmp4.o2(element_0, this_0);
        }
      }
    }
    this.jbm_1 = navState.jb6('multiplatform-support-nav:controller:deepLinkHandled');
  };
  protoOf(NavController).xbo = function (owner) {
    if (equals(owner, this.tbm_1)) {
      return Unit_instance;
    }
    var tmp0_safe_receiver = this.tbm_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p7w();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.v56(this.xbm_1);
    }
    this.tbm_1 = owner;
    owner.p7w().u56(this.xbm_1);
  };
  protoOf(NavController).ybo = function (viewModelStore) {
    if (equals(this.ubm_1, Companion_getInstance_2().abp(viewModelStore))) {
      return Unit_instance;
    }
    // Inline function 'kotlin.check' call
    if (!this.kbm_1.q()) {
      // Inline function 'androidx.navigation.NavController.setViewModelStore.<anonymous>' call
      var message = 'ViewModelStore should be set before setGraph call';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    this.ubm_1 = Companion_getInstance_2().abp(viewModelStore);
  };
  protoOf(NavController).hbo = function () {
    return this.kbm_1.xe();
  };
  function NavControllerViewModel$Companion$FACTORY$lambda($this$initializer) {
    return new NavControllerViewModel();
  }
  function Companion_1() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'androidx.lifecycle.viewmodel.viewModelFactory' call
    // Inline function 'kotlin.apply' call
    var this_0 = new InitializerViewModelFactoryBuilder();
    // Inline function 'androidx.navigation.Companion.FACTORY.<anonymous>' call
    // Inline function 'androidx.lifecycle.viewmodel.initializer' call
    var initializer = NavControllerViewModel$Companion$FACTORY$lambda;
    this_0.d58(getKClass(NavControllerViewModel), initializer);
    tmp.zbo_1 = this_0.k1z();
  }
  protoOf(Companion_1).abp = function (viewModelStore) {
    var viewModelProvider = Companion_getInstance().e59(viewModelStore, this.zbo_1);
    // Inline function 'androidx.lifecycle.get' call
    return viewModelProvider.g59(getKClass(NavControllerViewModel));
  };
  var Companion_instance_4;
  function Companion_getInstance_2() {
    if (Companion_instance_4 == null)
      new Companion_1();
    return Companion_instance_4;
  }
  function NavControllerViewModel() {
    Companion_getInstance_2();
    ViewModel_init_$Init$(this);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.ybn_1 = LinkedHashMap_init_$Create$_0();
  }
  protoOf(NavControllerViewModel).zbn = function (backStackEntryId) {
    var viewModelStore = this.ybn_1.p2(backStackEntryId);
    if (viewModelStore == null)
      null;
    else {
      viewModelStore.f2();
    }
  };
  protoOf(NavControllerViewModel).x58 = function () {
    var tmp0_iterator = this.ybn_1.n2().j();
    while (tmp0_iterator.k()) {
      var store = tmp0_iterator.l();
      store.f2();
    }
    this.ybn_1.f2();
  };
  protoOf(NavControllerViewModel).sbc = function (backStackEntryId) {
    var viewModelStore = this.ybn_1.l2(backStackEntryId);
    if (viewModelStore == null) {
      viewModelStore = new ViewModelStore();
      var tmp0 = this.ybn_1;
      // Inline function 'kotlin.collections.set' call
      var value = viewModelStore;
      tmp0.o2(backStackEntryId, value);
    }
    return viewModelStore;
  };
  protoOf(NavControllerViewModel).toString = function () {
    var sb = new StringBuilder('NavControllerViewModel{');
    sb.ec(hashCode(this));
    sb.o8('} ViewModelStores (');
    var viewModelStoreIterator = this.ybn_1.m2().j();
    while (viewModelStoreIterator.k()) {
      sb.o8(viewModelStoreIterator.l());
      if (viewModelStoreIterator.k()) {
        sb.o8(', ');
      }
    }
    sb.p8(_Char___init__impl__6a9atx(41));
    return sb.toString();
  };
  function NavHostController() {
    NavController.call(this);
  }
  protoOf(NavHostController).xbo = function (owner) {
    protoOf(NavController).xbo.call(this, owner);
  };
  protoOf(NavHostController).ybo = function (viewModelStore) {
    protoOf(NavController).ybo.call(this, viewModelStore);
  };
  function AtomicInt(initialValue) {
    this.hbn_1 = atomic$int$1(initialValue);
  }
  protoOf(AtomicInt).ibn = function () {
    return this.hbn_1.atomicfu$incrementAndGet();
  };
  protoOf(AtomicInt).tbo = function () {
    return this.hbn_1.atomicfu$decrementAndGet();
  };
  protoOf(AtomicInt).h12 = function () {
    return this.hbn_1.kotlinx$atomicfu$value;
  };
  //region block: init
  Companion_instance_2 = new Companion();
  Companion_instance_3 = new Companion_0();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = NavHostController;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-navigation-navigation-runtime.js.map
