(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-lifecycle-lifecycle-common.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-lifecycle-lifecycle-common.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-runtime'.");
    }
    if (typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-runtime'. Its dependency 'compose-multiplatform-core-lifecycle-lifecycle-common' was not found. Please, check whether 'compose-multiplatform-core-lifecycle-lifecycle-common' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-runtime'.");
    }
    globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime'] = factory(typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-lifecycle-lifecycle-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-lifecycle-lifecycle-common'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.kb;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var State_INITIALIZED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.j;
  var State_DESTROYED_getInstance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.i;
  var toString = kotlin_kotlin.$_$.ig;
  var toString_0 = kotlin_kotlin.$_$.ob;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var first = kotlin_kotlin.$_$.c6;
  var last = kotlin_kotlin.$_$.x6;
  var toList = kotlin_kotlin.$_$.g8;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var KtMap = kotlin_kotlin.$_$.q4;
  var isInterface = kotlin_kotlin.$_$.za;
  var Companion_instance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.m;
  var reversed = kotlin_kotlin.$_$.s7;
  var lastOrNull = kotlin_kotlin.$_$.t6;
  var Lifecycling_instance = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.n;
  var ensureNotNull = kotlin_kotlin.$_$.pf;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var initMetadataForCompanion = kotlin_kotlin.$_$.la;
  var Lifecycle = kotlin_org_jetbrains_androidx_lifecycle_lifecycle_common.$_$.b;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var VOID = kotlin_kotlin.$_$.e;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ObserverWithState, 'ObserverWithState');
  initMetadataForCompanion(Companion);
  initMetadataForClass(LifecycleRegistry, 'LifecycleRegistry', VOID, Lifecycle);
  initMetadataForClass(WeakReference, 'WeakReference');
  //endregion
  function LifecycleRegistry_init_$Init$(provider, $this) {
    LifecycleRegistry.call($this, provider, true);
    return $this;
  }
  function LifecycleRegistry_init_$Create$(provider) {
    return LifecycleRegistry_init_$Init$(provider, objectCreate(protoOf(LifecycleRegistry)));
  }
  function moveToState($this, next) {
    if ($this.c57_1.equals(next)) {
      return Unit_instance;
    }
    // Inline function 'kotlin.check' call
    if (!!($this.c57_1.equals(State_INITIALIZED_getInstance()) && next.equals(State_DESTROYED_getInstance()))) {
      // Inline function 'androidx.lifecycle.LifecycleRegistry.moveToState.<anonymous>' call
      var message = 'State must be at least CREATED to move to ' + next.toString() + ', but was ' + $this.c57_1.toString() + ' in component ' + toString($this.d57_1.h12());
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    $this.c57_1 = next;
    if ($this.f57_1 || !($this.e57_1 === 0)) {
      $this.g57_1 = true;
      return Unit_instance;
    }
    $this.f57_1 = true;
    sync($this);
    $this.f57_1 = false;
    if ($this.c57_1.equals(State_DESTROYED_getInstance())) {
      var tmp = $this;
      // Inline function 'kotlin.collections.linkedMapOf' call
      tmp.b57_1 = LinkedHashMap_init_$Create$();
    }
  }
  function _get_isSynced__dwdj3t($this) {
    if ($this.b57_1.q()) {
      return true;
    }
    var eldestObserverState = first($this.b57_1.n2()).k57_1;
    var newestObserverState = last($this.b57_1.n2()).k57_1;
    return eldestObserverState.equals(newestObserverState) && $this.c57_1.equals(newestObserverState);
  }
  function calculateTargetState($this, observer) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.lifecycle.LifecycleRegistry.calculateTargetState.<anonymous>' call
    var it = toList($this.b57_1.m2());
    var index = it.r(observer);
    var tmp;
    if (index > 0) {
      var tmp0_safe_receiver = $this.b57_1.l2(it.p(index - 1 | 0));
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k57_1;
    } else {
      tmp = null;
    }
    var siblingState = tmp;
    var tmp_0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.h57_1.q()) {
      tmp_0 = $this.h57_1.p($this.h57_1.n() - 1 | 0);
    } else {
      tmp_0 = null;
    }
    var parentState = tmp_0;
    return Companion_instance_0.m57(Companion_instance_0.m57($this.c57_1, siblingState), parentState);
  }
  function popParentState($this) {
    $this.h57_1.i2($this.h57_1.n() - 1 | 0);
  }
  function pushParentState($this, state) {
    $this.h57_1.e(state);
  }
  function forwardPass($this, lifecycleOwner) {
    // Inline function 'androidx.lifecycle.LifecycleRegistry.forEachObserverWithAdditions' call
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    $l$loop: while (!$this.g57_1) {
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = $this.b57_1.m2();
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.j();
      while (_iterator__ex2g4s.k()) {
        var element = _iterator__ex2g4s.l();
        // Inline function 'androidx.lifecycle.LifecycleRegistry.forEachObserverWithAdditions.<anonymous>' call
        if (!visited.m(element)) {
          destination.e(element);
        }
      }
      var keys = destination;
      if (keys.q()) {
        break $l$loop;
      }
      var tmp0_iterator = keys.j();
      $l$loop_1: while (tmp0_iterator.k()) {
        var key = tmp0_iterator.l();
        if ($this.g57_1) {
          break $l$loop_1;
        }
        var tmp1_elvis_lhs = $this.b57_1.l2(key);
        var tmp;
        if (tmp1_elvis_lhs == null) {
          continue $l$loop_1;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        var value = tmp;
        // Inline function 'androidx.lifecycle.LifecycleRegistry.forwardPass.<anonymous>' call
        $l$loop_2: while (true) {
          var tmp_0;
          if (value.k57_1.t2($this.c57_1) < 0 && !$this.g57_1) {
            // Inline function 'kotlin.collections.contains' call
            // Inline function 'kotlin.collections.containsKey' call
            var this_0 = $this.b57_1;
            tmp_0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).j2(key);
          } else {
            tmp_0 = false;
          }
          if (!tmp_0) {
            break $l$loop_2;
          }
          pushParentState($this, value.k57_1);
          var tmp0_elvis_lhs = Companion_instance.m56(value.k57_1);
          var tmp_1;
          if (tmp0_elvis_lhs == null) {
            throw IllegalStateException_init_$Create$('no event up from ' + value.k57_1.toString());
          } else {
            tmp_1 = tmp0_elvis_lhs;
          }
          var event = tmp_1;
          value.n57(lifecycleOwner, event);
          popParentState($this);
        }
        visited.e(key);
      }
    }
  }
  function backwardPass($this, lifecycleOwner) {
    // Inline function 'androidx.lifecycle.LifecycleRegistry.forEachObserverReversed' call
    var keys = reversed($this.b57_1.m2());
    var tmp0_iterator = keys.j();
    $l$loop_0: while (tmp0_iterator.k()) {
      var key = tmp0_iterator.l();
      if ($this.g57_1) {
        break $l$loop_0;
      }
      var tmp1_elvis_lhs = $this.b57_1.l2(key);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var value = tmp;
      // Inline function 'androidx.lifecycle.LifecycleRegistry.backwardPass.<anonymous>' call
      $l$loop_1: while (true) {
        var tmp_0;
        if (value.k57_1.t2($this.c57_1) > 0 && !$this.g57_1) {
          // Inline function 'kotlin.collections.contains' call
          // Inline function 'kotlin.collections.containsKey' call
          var this_0 = $this.b57_1;
          tmp_0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).j2(key);
        } else {
          tmp_0 = false;
        }
        if (!tmp_0) {
          break $l$loop_1;
        }
        var tmp0_elvis_lhs = Companion_instance.l56(value.k57_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          throw IllegalStateException_init_$Create$('no event down from ' + value.k57_1.toString());
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var event = tmp_1;
        pushParentState($this, event.p56());
        value.n57(lifecycleOwner, event);
        popParentState($this);
      }
    }
  }
  function sync($this) {
    var tmp0_elvis_lhs = $this.d57_1.h12();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('LifecycleOwner of this LifecycleRegistry is already garbage collected. It is too late to change lifecycle state.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lifecycleOwner = tmp;
    while (!_get_isSynced__dwdj3t($this)) {
      $this.g57_1 = false;
      if ($this.c57_1.t2(first($this.b57_1.n2()).k57_1) < 0) {
        backwardPass($this, lifecycleOwner);
      }
      var newest = lastOrNull($this.b57_1.n2());
      if (!$this.g57_1 && !(newest == null) && $this.c57_1.t2(newest.k57_1) > 0) {
        forwardPass($this, lifecycleOwner);
      }
    }
    $this.g57_1 = false;
    $this.i57_1.d1l($this.w56());
  }
  function enforceMainThreadIfNeeded($this, methodName) {
    if ($this.a57_1) {
      // Inline function 'kotlin.check' call
      if (!isMainThread()) {
        // Inline function 'androidx.lifecycle.LifecycleRegistry.enforceMainThreadIfNeeded.<anonymous>' call
        var message = 'Method ' + methodName + ' must be called on the main thread';
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
    }
  }
  function ObserverWithState(observer, initialState) {
    this.l57_1 = Lifecycling_instance.y56(ensureNotNull(observer));
    this.k57_1 = initialState;
  }
  protoOf(ObserverWithState).n57 = function (owner, event) {
    var newState = event.p56();
    this.k57_1 = Companion_instance_0.m57(this.k57_1, newState);
    this.l57_1.k56(ensureNotNull(owner), event);
    this.k57_1 = newState;
  };
  function Companion() {
  }
  protoOf(Companion).m57 = function (state1, state2) {
    return !(state2 == null) && state2.t2(state1) < 0 ? state2 : state1;
  };
  var Companion_instance_0;
  function Companion_getInstance() {
    return Companion_instance_0;
  }
  function LifecycleRegistry(provider, enforceMainThread) {
    Lifecycle.call(this);
    this.a57_1 = enforceMainThread;
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.b57_1 = LinkedHashMap_init_$Create$();
    this.c57_1 = State_INITIALIZED_getInstance();
    this.e57_1 = 0;
    this.f57_1 = false;
    this.g57_1 = false;
    this.h57_1 = ArrayList_init_$Create$();
    this.d57_1 = new WeakReference(provider);
    this.i57_1 = MutableStateFlow(State_INITIALIZED_getInstance());
  }
  protoOf(LifecycleRegistry).o57 = function (state) {
    enforceMainThreadIfNeeded(this, 'setCurrentState');
    moveToState(this, state);
  };
  protoOf(LifecycleRegistry).w56 = function () {
    return this.c57_1;
  };
  protoOf(LifecycleRegistry).p57 = function (event) {
    enforceMainThreadIfNeeded(this, 'handleLifecycleEvent');
    moveToState(this, event.p56());
  };
  protoOf(LifecycleRegistry).u56 = function (observer) {
    enforceMainThreadIfNeeded(this, 'addObserver');
    var initialState = this.c57_1.equals(State_DESTROYED_getInstance()) ? State_DESTROYED_getInstance() : State_INITIALIZED_getInstance();
    var statefulObserver = new ObserverWithState(observer, initialState);
    var previous = this.b57_1.o2(observer, statefulObserver);
    if (!(previous == null)) {
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.d57_1.h12();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lifecycleOwner = tmp;
    var isReentrance = !(this.e57_1 === 0) || this.f57_1;
    var targetState = calculateTargetState(this, observer);
    this.e57_1 = this.e57_1 + 1 | 0;
    $l$loop: while (true) {
      var tmp_0;
      if (statefulObserver.k57_1.t2(targetState) < 0) {
        // Inline function 'kotlin.collections.contains' call
        // Inline function 'kotlin.collections.containsKey' call
        var this_0 = this.b57_1;
        tmp_0 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).j2(observer);
      } else {
        tmp_0 = false;
      }
      if (!tmp_0) {
        break $l$loop;
      }
      pushParentState(this, statefulObserver.k57_1);
      var tmp3_elvis_lhs = Companion_instance.m56(statefulObserver.k57_1);
      var tmp_1;
      if (tmp3_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('no event up from ' + statefulObserver.k57_1.toString());
      } else {
        tmp_1 = tmp3_elvis_lhs;
      }
      var event = tmp_1;
      statefulObserver.n57(lifecycleOwner, event);
      popParentState(this);
      targetState = calculateTargetState(this, observer);
    }
    if (!isReentrance) {
      sync(this);
    }
    this.e57_1 = this.e57_1 - 1 | 0;
  };
  protoOf(LifecycleRegistry).v56 = function (observer) {
    enforceMainThreadIfNeeded(this, 'removeObserver');
    this.b57_1.p2(observer);
  };
  function isMainThread() {
    return true;
  }
  function WeakReference(reference) {
    this.j57_1 = reference;
  }
  protoOf(WeakReference).h12 = function () {
    return this.j57_1;
  };
  //region block: init
  Companion_instance_0 = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LifecycleRegistry_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-runtime.js.map
