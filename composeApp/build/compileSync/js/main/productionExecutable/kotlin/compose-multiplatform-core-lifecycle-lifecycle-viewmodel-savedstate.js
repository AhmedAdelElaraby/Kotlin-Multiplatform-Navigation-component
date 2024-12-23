(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js', './compose-multiplatform-core-lifecycle-lifecycle-common.js', './compose-multiplatform-core-core-core-bundle.js', './compose-multiplatform-core-savedstate-savedstate.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-common.js'), require('./compose-multiplatform-core-core-core-bundle.js'), require('./compose-multiplatform-core-savedstate-savedstate.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-common' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-common' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    if (typeof globalThis['compose-multiplatform-core-core-core-bundle'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'compose-multiplatform-core-core-core-bundle' was not found. Please, check whether 'compose-multiplatform-core-core-core-bundle' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    if (typeof globalThis['compose-multiplatform-core-savedstate-savedstate'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'. Its dependency 'compose-multiplatform-core-savedstate-savedstate' was not found. Please, check whether 'compose-multiplatform-core-savedstate-savedstate' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'.");
    }
    globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'] = factory(typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['compose-multiplatform-core-core-core-bundle'], globalThis['compose-multiplatform-core-savedstate-savedstate']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_androidx_core_core_bundle, kotlin_org_jetbrains_androidx_savedstate_savedstate) {
  'use strict';
  //region block: imports
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var Companion_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.j;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.j;
  var State_CREATED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.h;
  var toString = kotlin_kotlin.$_$.ob;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var lazy = kotlin_kotlin.$_$.wf;
  var Bundle_init_$Create$ = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.d;
  var protoOf = kotlin_kotlin.$_$.kb;
  var SavedStateProvider = kotlin_org_jetbrains_androidx_savedstate_savedstate.$_$.a;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var VOID = kotlin_kotlin.$_$.e;
  var Event_ON_CREATE_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.c;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var LifecycleEventObserver = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.a;
  var ViewModel = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.g;
  var ViewModel_init_$Init$ = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.h;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var getKClass = kotlin_kotlin.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var Factory = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_viewmodel.$_$.e;
  var KProperty1 = kotlin_kotlin.$_$.kc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ha;
  var NotImplementedError = kotlin_kotlin.$_$.we;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.q;
  var Char = kotlin_kotlin.$_$.le;
  var Long = kotlin_kotlin.$_$.ue;
  var isCharSequence = kotlin_kotlin.$_$.va;
  var Bundle = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.a;
  var isByteArray = kotlin_kotlin.$_$.ta;
  var initMetadataForCompanion = kotlin_kotlin.$_$.la;
  var equals = kotlin_kotlin.$_$.ba;
  var FunctionAdapter = kotlin_kotlin.$_$.p9;
  var isInterface = kotlin_kotlin.$_$.za;
  var hashCode = kotlin_kotlin.$_$.ja;
  var toMap = kotlin_kotlin.$_$.k8;
  var toList = kotlin_kotlin.$_$.e8;
  var copyToArray = kotlin_kotlin.$_$.q5;
  var bundleOf = kotlin_org_jetbrains_androidx_core_core_bundle.$_$.b;
  var ClassCastException = kotlin_kotlin.$_$.me;
  var ensureNotNull = kotlin_kotlin.$_$.pf;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(SavedStateHandlesProvider, 'SavedStateHandlesProvider', VOID, VOID, [SavedStateProvider]);
  initMetadataForClass(SavedStateHandleAttacher, 'SavedStateHandleAttacher', VOID, VOID, [LifecycleEventObserver]);
  initMetadataForClass(SavedStateHandlesVM, 'SavedStateHandlesVM', SavedStateHandlesVM, ViewModel);
  initMetadataForClass(SAVED_STATE_REGISTRY_OWNER_KEY$1);
  initMetadataForClass(VIEW_MODEL_STORE_OWNER_KEY$1);
  initMetadataForClass(DEFAULT_ARGS_KEY$1);
  initMetadataForClass(savedStateHandlesVM$1, VOID, VOID, VOID, [Factory]);
  initMetadataForClass(AbstractSavedStateViewModelFactory, 'AbstractSavedStateViewModelFactory', VOID, VOID, [Factory]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0, 'sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0', VOID, VOID, [SavedStateProvider, FunctionAdapter]);
  initMetadataForClass(SavedStateHandle, 'SavedStateHandle', SavedStateHandle_init_$Create$_0);
  //endregion
  function get_SAVED_STATE_REGISTRY_OWNER_KEY() {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    return SAVED_STATE_REGISTRY_OWNER_KEY;
  }
  var SAVED_STATE_REGISTRY_OWNER_KEY;
  function get_VIEW_MODEL_STORE_OWNER_KEY() {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    return VIEW_MODEL_STORE_OWNER_KEY;
  }
  var VIEW_MODEL_STORE_OWNER_KEY;
  function get_DEFAULT_ARGS_KEY() {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    return DEFAULT_ARGS_KEY;
  }
  var DEFAULT_ARGS_KEY;
  function createSavedStateHandle(_this__u8e3s4) {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    var tmp0_elvis_lhs = _this__u8e3s4.y57(get_SAVED_STATE_REGISTRY_OWNER_KEY());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('CreationExtras must have a value by `SAVED_STATE_REGISTRY_OWNER_KEY`');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var savedStateRegistryOwner = tmp;
    var tmp1_elvis_lhs = _this__u8e3s4.y57(get_VIEW_MODEL_STORE_OWNER_KEY());
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('CreationExtras must have a value by `VIEW_MODEL_STORE_OWNER_KEY`');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var viewModelStateRegistryOwner = tmp_0;
    var defaultArgs = _this__u8e3s4.y57(get_DEFAULT_ARGS_KEY());
    var tmp2_elvis_lhs = _this__u8e3s4.y57(Companion_getInstance().z58_1);
    var tmp_1;
    if (tmp2_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('CreationExtras must have a value by `VIEW_MODEL_KEY`');
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var key = tmp_1;
    return createSavedStateHandle_0(savedStateRegistryOwner, viewModelStateRegistryOwner, key, defaultArgs);
  }
  function enableSavedStateHandles(_this__u8e3s4) {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    var currentState = _this__u8e3s4.p7w().w56();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(currentState.equals(State_INITIALIZED_getInstance()) || currentState.equals(State_CREATED_getInstance()))) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (_this__u8e3s4.ob7().nb7('androidx.lifecycle.internal.SavedStateHandlesProvider') == null) {
      var provider = new SavedStateHandlesProvider(_this__u8e3s4.ob7(), _this__u8e3s4);
      _this__u8e3s4.ob7().mb7('androidx.lifecycle.internal.SavedStateHandlesProvider', provider);
      _this__u8e3s4.p7w().u56(new SavedStateHandleAttacher(provider));
    }
  }
  function createSavedStateHandle_0(savedStateRegistryOwner, viewModelStoreOwner, key, defaultArgs) {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    var provider = get_savedStateHandlesProvider(savedStateRegistryOwner);
    var viewModel = get_savedStateHandlesVM(viewModelStoreOwner);
    var tmp0_elvis_lhs = viewModel.qb7_1.l2(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = Companion_instance.vb7(provider.lb7(key), defaultArgs);
      // Inline function 'androidx.lifecycle.createSavedStateHandle.<anonymous>' call
      // Inline function 'kotlin.collections.set' call
      viewModel.qb7_1.o2(key, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_viewModel__fokd3h($this) {
    var tmp0 = $this.ub7_1;
    // Inline function 'kotlin.getValue' call
    viewModel$factory();
    return tmp0.v();
  }
  function SavedStateHandlesProvider$viewModel$delegate$lambda($viewModelStoreOwner) {
    return function () {
      return get_savedStateHandlesVM($viewModelStoreOwner);
    };
  }
  function SavedStateHandlesProvider(savedStateRegistry, viewModelStoreOwner) {
    this.rb7_1 = savedStateRegistry;
    this.sb7_1 = false;
    this.tb7_1 = null;
    var tmp = this;
    tmp.ub7_1 = lazy(SavedStateHandlesProvider$viewModel$delegate$lambda(viewModelStoreOwner));
  }
  protoOf(SavedStateHandlesProvider).ib7 = function () {
    // Inline function 'kotlin.apply' call
    var this_0 = Bundle_init_$Create$();
    // Inline function 'androidx.lifecycle.SavedStateHandlesProvider.saveState.<anonymous>' call
    var tmp0_safe_receiver = this.tb7_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.lifecycle.SavedStateHandlesProvider.saveState.<anonymous>.<anonymous>' call
      this_0.mb5(tmp0_safe_receiver);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = _get_viewModel__fokd3h(this).qb7_1.t().j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'androidx.lifecycle.SavedStateHandlesProvider.saveState.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var key = element.u();
      // Inline function 'kotlin.collections.component2' call
      var handle = element.v();
      var savedState = handle.ab8().ib7();
      if (!savedState.q()) {
        this_0.xb5(key, savedState);
      }
    }
    // Inline function 'kotlin.also' call
    // Inline function 'androidx.lifecycle.SavedStateHandlesProvider.saveState.<anonymous>' call
    this.sb7_1 = false;
    return this_0;
  };
  protoOf(SavedStateHandlesProvider).bb8 = function () {
    if (!this.sb7_1) {
      var newState = this.rb7_1.lb7('androidx.lifecycle.internal.SavedStateHandlesProvider');
      var tmp = this;
      // Inline function 'kotlin.apply' call
      var this_0 = Bundle_init_$Create$();
      // Inline function 'androidx.lifecycle.SavedStateHandlesProvider.performRestore.<anonymous>' call
      var tmp0_safe_receiver = this.tb7_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.lifecycle.SavedStateHandlesProvider.performRestore.<anonymous>.<anonymous>' call
        this_0.mb5(tmp0_safe_receiver);
      }
      if (newState == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.lifecycle.SavedStateHandlesProvider.performRestore.<anonymous>.<anonymous>' call
        this_0.mb5(newState);
      }
      tmp.tb7_1 = this_0;
      this.sb7_1 = true;
      _get_viewModel__fokd3h(this);
    }
  };
  protoOf(SavedStateHandlesProvider).lb7 = function (key) {
    this.bb8();
    var tmp0_safe_receiver = this.tb7_1;
    // Inline function 'kotlin.also' call
    var this_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ob6(key);
    // Inline function 'androidx.lifecycle.SavedStateHandlesProvider.consumeRestoredStateForKey.<anonymous>' call
    var tmp0_safe_receiver_0 = this.tb7_1;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.kb5(key);
    }
    var tmp1_safe_receiver = this.tb7_1;
    if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q()) === true) {
      this.tb7_1 = null;
    }
    return this_0;
  };
  function SavedStateHandleAttacher(provider) {
    this.cb8_1 = provider;
  }
  protoOf(SavedStateHandleAttacher).k56 = function (source, event) {
    // Inline function 'kotlin.check' call
    if (!event.equals(Event_ON_CREATE_getInstance())) {
      // Inline function 'androidx.lifecycle.SavedStateHandleAttacher.onStateChanged.<anonymous>' call
      var message = 'Next event must be ON_CREATE, it was ' + event.toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    source.p7w().v56(this);
    this.cb8_1.bb8();
  };
  function get_savedStateHandlesProvider(_this__u8e3s4) {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    var tmp = _this__u8e3s4.ob7().nb7('androidx.lifecycle.internal.SavedStateHandlesProvider');
    var tmp0_elvis_lhs = tmp instanceof SavedStateHandlesProvider ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("enableSavedStateHandles() wasn't called prior to createSavedStateHandle() call");
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateHandlesVM() {
    ViewModel_init_$Init$(this);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.qb7_1 = LinkedHashMap_init_$Create$();
  }
  function get_savedStateHandlesVM(_this__u8e3s4) {
    _init_properties_SavedStateHandleSupport_kt__nxqisr();
    var tmp = Companion_getInstance();
    return tmp.c59(_this__u8e3s4, new savedStateHandlesVM$1()).h59('androidx.lifecycle.internal.SavedStateHandlesVM', getKClass(SavedStateHandlesVM));
  }
  function SAVED_STATE_REGISTRY_OWNER_KEY$1() {
  }
  function VIEW_MODEL_STORE_OWNER_KEY$1() {
  }
  function DEFAULT_ARGS_KEY$1() {
  }
  function savedStateHandlesVM$1() {
  }
  protoOf(savedStateHandlesVM$1).y58 = function (modelClass, extras) {
    var tmp = new SavedStateHandlesVM();
    return tmp instanceof ViewModel ? tmp : THROW_CCE();
  };
  function viewModel$factory() {
    return getPropertyCallableRef('viewModel', 1, KProperty1, function (receiver) {
      return _get_viewModel__fokd3h(receiver);
    }, null);
  }
  var properties_initialized_SavedStateHandleSupport_kt_6hqgvh;
  function _init_properties_SavedStateHandleSupport_kt__nxqisr() {
    if (!properties_initialized_SavedStateHandleSupport_kt_6hqgvh) {
      properties_initialized_SavedStateHandleSupport_kt_6hqgvh = true;
      SAVED_STATE_REGISTRY_OWNER_KEY = new SAVED_STATE_REGISTRY_OWNER_KEY$1();
      VIEW_MODEL_STORE_OWNER_KEY = new VIEW_MODEL_STORE_OWNER_KEY$1();
      DEFAULT_ARGS_KEY = new DEFAULT_ARGS_KEY$1();
    }
  }
  function AbstractSavedStateViewModelFactory_init_$Init$(owner, defaultArgs, $this) {
    AbstractSavedStateViewModelFactory.call($this);
    $this.db8_1 = owner.p7w();
    $this.eb8_1 = defaultArgs;
    return $this;
  }
  protoOf(AbstractSavedStateViewModelFactory).y58 = function (modelClass, extras) {
    var tmp0_elvis_lhs = extras.y57(Companion_getInstance().z58_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('VIEW_MODEL_KEY must always be provided by ViewModelProvider');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var key = tmp;
    return this.fb8(key, modelClass, createSavedStateHandle(extras));
  };
  protoOf(AbstractSavedStateViewModelFactory).fb8 = function (key, modelClass, handle) {
    throw new NotImplementedError();
  };
  function AbstractSavedStateViewModelFactory() {
    this.db8_1 = null;
    this.eb8_1 = null;
  }
  function SavedStateHandle_init_$Init$(initialState, $this) {
    SavedStateHandle.call($this);
    $this.wb7_1.q2(initialState);
    return $this;
  }
  function SavedStateHandle_init_$Create$(initialState) {
    return SavedStateHandle_init_$Init$(initialState, objectCreate(protoOf(SavedStateHandle)));
  }
  function SavedStateHandle_init_$Init$_0($this) {
    SavedStateHandle.call($this);
    return $this;
  }
  function SavedStateHandle_init_$Create$_0() {
    return SavedStateHandle_init_$Init$_0(objectCreate(protoOf(SavedStateHandle)));
  }
  function Companion() {
  }
  protoOf(Companion).vb7 = function (restoredState, defaultState) {
    if (restoredState == null) {
      var tmp;
      if (defaultState == null) {
        tmp = SavedStateHandle_init_$Create$_0();
      } else {
        var state = HashMap_init_$Create$();
        var tmp0_iterator = defaultState.lb5().j();
        while (tmp0_iterator.k()) {
          var key = tmp0_iterator.l();
          var tmp1 = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
          // Inline function 'kotlin.collections.set' call
          var value = defaultState.sb6(key);
          state.o2(tmp1, value);
        }
        tmp = SavedStateHandle_init_$Create$(state);
      }
      return tmp;
    }
    // Inline function 'kotlin.collections.mutableMapOf' call
    var state_0 = LinkedHashMap_init_$Create$();
    var tmp1_iterator = restoredState.lb5().j();
    while (tmp1_iterator.k()) {
      var key_0 = tmp1_iterator.l();
      var tmp4 = (!(key_0 == null) ? typeof key_0 === 'string' : false) ? key_0 : THROW_CCE();
      // Inline function 'kotlin.collections.set' call
      var value_0 = restoredState.sb6(key_0);
      state_0.o2(tmp4, value_0);
    }
    return SavedStateHandle_init_$Create$(state_0);
  };
  protoOf(Companion).gb8 = function (value) {
    var tmp;
    if (value == null) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      var tmp_3;
      var tmp_4;
      var tmp_5;
      var tmp_6;
      if (!(value == null) ? typeof value === 'boolean' : false) {
        tmp_6 = true;
      } else {
        tmp_6 = !(value == null) ? typeof value === 'number' : false;
      }
      if (tmp_6) {
        tmp_5 = true;
      } else {
        tmp_5 = value instanceof Char;
      }
      if (tmp_5) {
        tmp_4 = true;
      } else {
        tmp_4 = !(value == null) ? typeof value === 'number' : false;
      }
      if (tmp_4) {
        tmp_3 = true;
      } else {
        tmp_3 = !(value == null) ? typeof value === 'number' : false;
      }
      if (tmp_3) {
        tmp_2 = true;
      } else {
        tmp_2 = !(value == null) ? typeof value === 'number' : false;
      }
      if (tmp_2) {
        tmp_1 = true;
      } else {
        tmp_1 = value instanceof Long;
      }
      if (tmp_1) {
        tmp_0 = true;
      } else {
        tmp_0 = !(value == null) ? typeof value === 'number' : false;
      }
      if (tmp_0) {
        tmp = true;
      } else {
        var tmp_7;
        if (value instanceof Bundle) {
          tmp_7 = true;
        } else {
          tmp_7 = !(value == null) ? isCharSequence(value) : false;
        }
        if (tmp_7) {
          tmp = true;
        } else {
          if (!(value == null) ? isByteArray(value) : false) {
            tmp = true;
          } else {
            tmp = false;
          }
        }
      }
    }
    return tmp;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0(function_0) {
    this.hb8_1 = function_0;
  }
  protoOf(sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0).ib7 = function () {
    return this.hb8_1();
  };
  protoOf(sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0).q3 = function () {
    return this.hb8_1;
  };
  protoOf(sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SavedStateProvider) : false) {
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
  protoOf(sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function SavedStateHandle$savedStateProvider$lambda(this$0) {
    return function () {
      var map = toMap(this$0.xb7_1);
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = map.t().j();
      while (tmp0_iterator.k()) {
        var tmp1_loop_parameter = tmp0_iterator.l();
        // Inline function 'kotlin.collections.component1' call
        var key = tmp1_loop_parameter.u();
        // Inline function 'kotlin.collections.component2' call
        var value = tmp1_loop_parameter.v();
        var savedState = value.ib7();
        this$0.ib8(key, savedState);
      }
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = toList(this$0.wb7_1);
      var tmp$ret$3 = copyToArray(this_0);
      return bundleOf(tmp$ret$3.slice());
    };
  }
  protoOf(SavedStateHandle).ab8 = function () {
    return this.zb7_1;
  };
  protoOf(SavedStateHandle).jb8 = function (key) {
    var tmp;
    try {
      var tmp_0 = this.wb7_1.l2(key);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof ClassCastException) {
        var e = $p;
        this.kb8(key);
        tmp_1 = null;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  protoOf(SavedStateHandle).ib8 = function (key, value) {
    if (!Companion_instance.gb8(value)) {
      throw IllegalArgumentException_init_$Create$("Can't put value with type " + toString(getKClassFromExpression(ensureNotNull(value))) + ' into saved state');
    }
    // Inline function 'kotlin.collections.set' call
    this.wb7_1.o2(key, value);
    var tmp0_safe_receiver = this.yb7_1.l2(key);
    if (tmp0_safe_receiver != null) {
      tmp0_safe_receiver.d1l(value);
    }
  };
  protoOf(SavedStateHandle).kb8 = function (key) {
    var tmp = this.wb7_1.p2(key);
    var latestValue = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    this.yb7_1.p2(key);
    return latestValue;
  };
  function SavedStateHandle() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.wb7_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.xb7_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.yb7_1 = LinkedHashMap_init_$Create$();
    var tmp_2 = this;
    var tmp_3 = SavedStateHandle$savedStateProvider$lambda(this);
    tmp_2.zb7_1 = new sam$androidx_savedstate_SavedStateRegistry_SavedStateProvider$0(tmp_3);
  }
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AbstractSavedStateViewModelFactory;
  _.$_$.b = get_DEFAULT_ARGS_KEY;
  _.$_$.c = get_SAVED_STATE_REGISTRY_OWNER_KEY;
  _.$_$.d = get_VIEW_MODEL_STORE_OWNER_KEY;
  _.$_$.e = createSavedStateHandle;
  _.$_$.f = enableSavedStateHandles;
  _.$_$.g = AbstractSavedStateViewModelFactory_init_$Init$;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-viewmodel-savedstate.js.map
