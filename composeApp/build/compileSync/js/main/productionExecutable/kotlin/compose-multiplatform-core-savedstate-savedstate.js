(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-lifecycle-lifecycle-common.js', './compose-multiplatform-core-core-core-bundle.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-common.js'), require('./compose-multiplatform-core-core-core-bundle.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-savedstate-savedstate'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-savedstate-savedstate'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-savedstate-savedstate'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-common' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-common' is loaded prior to 'compose-multiplatform-core-savedstate-savedstate'.");
    }
    if (typeof globalThis['compose-multiplatform-core-core-core-bundle'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-savedstate-savedstate'. Its dependency 'compose-multiplatform-core-core-core-bundle' was not found. Please, check whether 'compose-multiplatform-core-core-core-bundle' is loaded prior to 'compose-multiplatform-core-savedstate-savedstate'.");
    }
    globalThis['compose-multiplatform-core-savedstate-savedstate'] = factory(typeof globalThis['compose-multiplatform-core-savedstate-savedstate'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-savedstate-savedstate'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['compose-multiplatform-core-core-core-bundle']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_androidx_core_core_bundle) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.la;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.j;
  var toString = kotlin_kotlin.$_$.ob;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var State_STARTED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.l;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var initMetadataForInterface = kotlin_kotlin.$_$.na;
  var equals = kotlin_kotlin.$_$.ba;
  var FunctionAdapter = kotlin_kotlin.$_$.p9;
  var isInterface = kotlin_kotlin.$_$.za;
  var LifecycleEventObserver = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.a;
  var hashCode = kotlin_kotlin.$_$.ja;
  var VOID = kotlin_kotlin.$_$.e;
  var Event_ON_STOP_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.g;
  var Event_ON_START_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.f;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var Bundle_init_$Create$ = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.d;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(SavedStateRegistryController, 'SavedStateRegistryController');
  initMetadataForInterface(SavedStateProvider, 'SavedStateProvider');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(sam$androidx_lifecycle_LifecycleEventObserver$0, 'sam$androidx_lifecycle_LifecycleEventObserver$0', VOID, VOID, [LifecycleEventObserver, FunctionAdapter]);
  initMetadataForClass(SavedStateRegistry, 'SavedStateRegistry');
  //endregion
  function Companion() {
  }
  protoOf(Companion).tb6 = function (owner) {
    return new SavedStateRegistryController(owner);
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function SavedStateRegistryController(owner) {
    this.ub6_1 = owner;
    this.vb6_1 = new SavedStateRegistry();
    this.wb6_1 = false;
  }
  protoOf(SavedStateRegistryController).xb6 = function () {
    var lifecycle = this.ub6_1.p7w();
    // Inline function 'kotlin.check' call
    if (!lifecycle.w56().equals(State_INITIALIZED_getInstance())) {
      // Inline function 'androidx.savedstate.SavedStateRegistryController.performAttach.<anonymous>' call
      var message = "Restarter must be created only during owner's initialization stage";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    platformPerformAttach(this.ub6_1);
    this.vb6_1.db7(lifecycle);
    this.wb6_1 = true;
  };
  protoOf(SavedStateRegistryController).eb7 = function (savedState) {
    if (!this.wb6_1) {
      this.xb6();
    }
    var lifecycle = this.ub6_1.p7w();
    // Inline function 'kotlin.check' call
    if (!!lifecycle.w56().s56(State_STARTED_getInstance())) {
      // Inline function 'androidx.savedstate.SavedStateRegistryController.performRestore.<anonymous>' call
      var message = 'performRestore cannot be called when owner is ' + lifecycle.w56().toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.vb6_1.fb7(savedState);
  };
  protoOf(SavedStateRegistryController).gb7 = function (outBundle) {
    this.vb6_1.hb7(outBundle);
  };
  function SavedStateProvider() {
  }
  function Companion_0() {
    this.jb7_1 = 'androidx.lifecycle.BundlableSavedStateRegistry.key';
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function sam$androidx_lifecycle_LifecycleEventObserver$0(function_0) {
    this.kb7_1 = function_0;
  }
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).k56 = function (source, event) {
    return this.kb7_1(source, event);
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).q3 = function () {
    return this.kb7_1;
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
  function SavedStateRegistry$performAttach$lambda(this$0) {
    return function (_anonymous_parameter_0__qggqh8, event) {
      var tmp;
      if (event.equals(Event_ON_START_getInstance())) {
        this$0.cb7_1 = true;
        tmp = Unit_instance;
      } else if (event.equals(Event_ON_STOP_getInstance())) {
        this$0.cb7_1 = false;
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SavedStateRegistry() {
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.yb6_1 = LinkedHashMap_init_$Create$();
    this.zb6_1 = false;
    this.ab7_1 = null;
    this.bb7_1 = false;
    this.cb7_1 = true;
  }
  protoOf(SavedStateRegistry).lb7 = function (key) {
    // Inline function 'kotlin.check' call
    if (!this.bb7_1) {
      // Inline function 'androidx.savedstate.SavedStateRegistry.consumeRestoredStateForKey.<anonymous>' call
      var message = 'You can consumeRestoredStateForKey only after super.onCreate of corresponding component';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (!(this.ab7_1 == null)) {
      var tmp0_safe_receiver = this.ab7_1;
      var result = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ob6(key);
      var tmp1_safe_receiver = this.ab7_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.kb5(key);
      }
      var tmp2_safe_receiver = this.ab7_1;
      if (!((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.q()) === false)) {
        this.ab7_1 = null;
      }
      return result;
    }
    return null;
  };
  protoOf(SavedStateRegistry).mb7 = function (key, provider) {
    var previous = this.yb6_1.o2(key, provider);
    // Inline function 'kotlin.require' call
    if (!(previous == null)) {
      // Inline function 'androidx.savedstate.SavedStateRegistry.registerSavedStateProvider.<anonymous>' call
      var message = 'SavedStateProvider with the given key is already registered';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  protoOf(SavedStateRegistry).nb7 = function (key) {
    var provider = null;
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.yb6_1.t().j();
    $l$loop: while (tmp0_iterator.k()) {
      var tmp1_loop_parameter = tmp0_iterator.l();
      // Inline function 'kotlin.collections.component1' call
      var k = tmp1_loop_parameter.u();
      // Inline function 'kotlin.collections.component2' call
      var value = tmp1_loop_parameter.v();
      if (k === key) {
        provider = value;
        break $l$loop;
      }
    }
    return provider;
  };
  protoOf(SavedStateRegistry).db7 = function (lifecycle) {
    // Inline function 'kotlin.check' call
    if (!!this.zb6_1) {
      // Inline function 'androidx.savedstate.SavedStateRegistry.performAttach.<anonymous>' call
      var message = 'SavedStateRegistry was already attached.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp = SavedStateRegistry$performAttach$lambda(this);
    lifecycle.u56(new sam$androidx_lifecycle_LifecycleEventObserver$0(tmp));
    this.zb6_1 = true;
  };
  protoOf(SavedStateRegistry).fb7 = function (savedState) {
    // Inline function 'kotlin.check' call
    if (!this.zb6_1) {
      // Inline function 'androidx.savedstate.SavedStateRegistry.performRestore.<anonymous>' call
      var message = 'You must call performAttach() before calling performRestore(Bundle).';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    if (!!this.bb7_1) {
      // Inline function 'androidx.savedstate.SavedStateRegistry.performRestore.<anonymous>' call
      var message_0 = 'SavedStateRegistry was already restored.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var tmp = this;
    tmp.ab7_1 = savedState == null ? null : savedState.ob6('androidx.lifecycle.BundlableSavedStateRegistry.key');
    this.bb7_1 = true;
  };
  protoOf(SavedStateRegistry).hb7 = function (outBundle) {
    var components = Bundle_init_$Create$();
    var tmp0_safe_receiver = this.ab7_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.savedstate.SavedStateRegistry.performSave.<anonymous>' call
      components.mb5(tmp0_safe_receiver);
    }
    // Inline function 'androidx.savedstate.SavedStateRegistry.forEachObserverWithAdditions' call
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    $l$loop: while (true) {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = this.yb6_1.m2();
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'androidx.savedstate.SavedStateRegistry.forEachObserverWithAdditions.<anonymous>' call
        if (!visited.m(element)) {
          destination.e(element);
        }
      }
      var keys = destination;
      if (keys.q()) {
        break $l$loop;
      }
      var tmp0_iterator = keys.j();
      $l$loop_0: while (tmp0_iterator.k()) {
        var key = tmp0_iterator.l();
        var tmp1_elvis_lhs = this.yb6_1.l2(key);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        var value = tmp;
        // Inline function 'androidx.savedstate.SavedStateRegistry.performSave.<anonymous>' call
        components.xb5(key, value.ib7());
        visited.e(key);
      }
    }
    if (!components.q()) {
      outBundle.xb5('androidx.lifecycle.BundlableSavedStateRegistry.key', components);
    }
  };
  function platformPerformAttach(owner) {
  }
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SavedStateProvider;
  _.$_$.b = Companion_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-savedstate-savedstate.js.map
