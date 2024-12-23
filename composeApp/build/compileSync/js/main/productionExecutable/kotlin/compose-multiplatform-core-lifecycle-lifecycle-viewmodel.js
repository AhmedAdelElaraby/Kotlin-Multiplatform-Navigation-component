(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-lifecycle-lifecycle-viewmodel'.");
    }
    globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] = factory(typeof globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-lifecycle-lifecycle-viewmodel'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForInterface = kotlin_kotlin.$_$.na;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var initMetadataForObject = kotlin_kotlin.$_$.pa;
  var VOID = kotlin_kotlin.$_$.e;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var KtMap = kotlin_kotlin.$_$.q4;
  var isInterface = kotlin_kotlin.$_$.za;
  var toString = kotlin_kotlin.$_$.ob;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var Exception = kotlin_kotlin.$_$.re;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.x;
  var ensureNotNull = kotlin_kotlin.$_$.pf;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.j2;
  var copyToArray = kotlin_kotlin.$_$.q5;
  var initMetadataForCompanion = kotlin_kotlin.$_$.la;
  //endregion
  //region block: pre-declaration
  function get_defaultViewModelCreationExtras() {
    return Empty_getInstance();
  }
  initMetadataForInterface(HasDefaultViewModelProviderFactory, 'HasDefaultViewModelProviderFactory');
  initMetadataForClass(ViewModelStore, 'ViewModelStore', ViewModelStore);
  initMetadataForClass(CreationExtras, 'CreationExtras');
  initMetadataForObject(Empty, 'Empty', VOID, CreationExtras);
  initMetadataForClass(MutableCreationExtras, 'MutableCreationExtras', MutableCreationExtras, CreationExtras);
  initMetadataForClass(InitializerViewModelFactoryBuilder, 'InitializerViewModelFactoryBuilder', InitializerViewModelFactoryBuilder);
  initMetadataForClass(ViewModelImpl, 'ViewModelImpl', ViewModelImpl_init_$Create$);
  initMetadataForClass(ViewModelProviderImpl, 'ViewModelProviderImpl');
  initMetadataForObject(ViewModelKey, 'ViewModelKey');
  initMetadataForObject(ViewModelProviders, 'ViewModelProviders');
  initMetadataForClass(ViewModel, 'ViewModel');
  function create(modelClass, extras) {
    return ViewModelProviders_instance.r58();
  }
  initMetadataForInterface(Factory, 'Factory');
  initMetadataForClass(OnRequeryFactory, 'OnRequeryFactory');
  initMetadataForCompanion(Companion);
  initMetadataForClass(ViewModelProvider, 'ViewModelProvider');
  initMetadataForClass(ViewModelInitializer, 'ViewModelInitializer');
  initMetadataForClass(InitializerViewModelFactory, 'InitializerViewModelFactory', VOID, VOID, [Factory]);
  initMetadataForObject(DefaultViewModelProviderFactory, 'DefaultViewModelProviderFactory', VOID, VOID, [Factory]);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  //endregion
  function HasDefaultViewModelProviderFactory() {
  }
  function ViewModelStore() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.s57_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ViewModelStore).t57 = function (key, viewModel) {
    var oldViewModel = this.s57_1.o2(key, viewModel);
    if (oldViewModel == null)
      null;
    else {
      oldViewModel.v57();
    }
  };
  protoOf(ViewModelStore).w57 = function (key) {
    return this.s57_1.l2(key);
  };
  protoOf(ViewModelStore).f2 = function () {
    var tmp0_iterator = this.s57_1.n2().j();
    while (tmp0_iterator.k()) {
      var vm = tmp0_iterator.l();
      vm.v57();
    }
    this.s57_1.f2();
  };
  function Empty() {
    Empty_instance = this;
    CreationExtras.call(this);
  }
  protoOf(Empty).y57 = function (key) {
    return null;
  };
  var Empty_instance;
  function Empty_getInstance() {
    if (Empty_instance == null)
      new Empty();
    return Empty_instance;
  }
  function CreationExtras() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.z57_1 = LinkedHashMap_init_$Create$();
  }
  function MutableCreationExtras(initialExtras) {
    initialExtras = initialExtras === VOID ? Empty_getInstance() : initialExtras;
    CreationExtras.call(this);
    this.z57_1.q2(initialExtras.z57_1);
  }
  protoOf(MutableCreationExtras).b58 = function (key, t) {
    // Inline function 'kotlin.collections.set' call
    this.z57_1.o2(key, t);
  };
  protoOf(MutableCreationExtras).y57 = function (key) {
    var tmp = this.z57_1.l2(key);
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  function InitializerViewModelFactoryBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.c58_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(InitializerViewModelFactoryBuilder).d58 = function (clazz, initializer) {
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.c58_1;
    // Inline function 'kotlin.require' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).j2(clazz)) {
      // Inline function 'androidx.lifecycle.viewmodel.InitializerViewModelFactoryBuilder.addInitializer.<anonymous>' call
      var message = 'A `initializer` with the same `clazz` has already been added: ' + get_canonicalName(clazz) + '.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp3 = this.c58_1;
    // Inline function 'kotlin.collections.set' call
    var value = new ViewModelInitializer(clazz, initializer);
    tmp3.o2(clazz, value);
  };
  protoOf(InitializerViewModelFactoryBuilder).k1z = function () {
    return ViewModelProviders_instance.f58(this.c58_1.n2());
  };
  function ViewModelImpl_init_$Init$($this) {
    ViewModelImpl.call($this);
    return $this;
  }
  function ViewModelImpl_init_$Create$() {
    return ViewModelImpl_init_$Init$(objectCreate(protoOf(ViewModelImpl)));
  }
  function closeWithRuntimeException($this, closeable) {
    try {
      if (closeable == null)
        null;
      else {
        closeable.u1x();
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        throw RuntimeException_init_$Create$(e);
      } else {
        throw $p;
      }
    }
  }
  protoOf(ViewModelImpl).f2 = function () {
    if (this.j58_1)
      return Unit_instance;
    this.j58_1 = true;
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.g58_1;
    var tmp0_iterator = this.h58_1.n2().j();
    while (tmp0_iterator.k()) {
      var closeable = tmp0_iterator.l();
      closeWithRuntimeException(this, closeable);
    }
    var tmp1_iterator = this.i58_1.j();
    while (tmp1_iterator.k()) {
      var closeable_0 = tmp1_iterator.l();
      closeWithRuntimeException(this, closeable_0);
    }
    this.i58_1.f2();
  };
  function ViewModelImpl() {
    this.g58_1 = new SynchronizedObject();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.h58_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.i58_1 = LinkedHashSet_init_$Create$();
    this.j58_1 = false;
  }
  function ViewModelProviderImpl(store, factory, extras) {
    this.k58_1 = store;
    this.l58_1 = factory;
    this.m58_1 = extras;
  }
  protoOf(ViewModelProviderImpl).n58 = function (modelClass, key) {
    var viewModel = this.k58_1.w57(key);
    if (modelClass.ya(viewModel)) {
      var tmp = this.l58_1;
      if (tmp instanceof OnRequeryFactory) {
        this.l58_1.o58(ensureNotNull(viewModel));
      }
      return viewModel instanceof ViewModel ? viewModel : THROW_CCE();
    }
    var extras = new MutableCreationExtras(this.m58_1);
    extras.b58(ViewModelKey_instance, key);
    // Inline function 'kotlin.also' call
    var this_0 = createViewModel(this.l58_1, modelClass, extras);
    // Inline function 'androidx.lifecycle.viewmodel.ViewModelProviderImpl.getViewModel.<anonymous>' call
    this.k58_1.t57(key, this_0);
    return this_0;
  };
  protoOf(ViewModelProviderImpl).p58 = function (modelClass, key, $super) {
    key = key === VOID ? ViewModelProviders_instance.q58(modelClass) : key;
    return $super === VOID ? this.n58(modelClass, key) : $super.n58.call(this, modelClass, key);
  };
  function ViewModelKey() {
  }
  var ViewModelKey_instance;
  function ViewModelKey_getInstance() {
    return ViewModelKey_instance;
  }
  function ViewModelProviders() {
    this.e58_1 = 'androidx.lifecycle.ViewModelProvider.DefaultKey';
  }
  protoOf(ViewModelProviders).q58 = function (modelClass) {
    var tmp0 = get_canonicalName(modelClass);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        // Inline function 'androidx.lifecycle.viewmodel.internal.ViewModelProviders.getDefaultKey.<anonymous>' call
        var message = 'Local and anonymous classes can not be ViewModels';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var canonicalName = tmp$ret$1;
    return 'androidx.lifecycle.ViewModelProvider.DefaultKey:' + canonicalName;
  };
  protoOf(ViewModelProviders).r58 = function () {
    throw UnsupportedOperationException_init_$Create$('`Factory.create(String, CreationExtras)` is not implemented. You may need to override the method and provide a custom implementation. Note that using `Factory.create(String)` is not supported and considered an error.');
  };
  protoOf(ViewModelProviders).f58 = function (initializers) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(initializers);
    return new InitializerViewModelFactory(tmp$ret$0.slice());
  };
  protoOf(ViewModelProviders).s58 = function (owner) {
    var tmp;
    if (isInterface(owner, HasDefaultViewModelProviderFactory)) {
      tmp = owner.q57();
    } else {
      tmp = DefaultViewModelProviderFactory_instance;
    }
    return tmp;
  };
  protoOf(ViewModelProviders).t58 = function (owner) {
    var tmp;
    if (isInterface(owner, HasDefaultViewModelProviderFactory)) {
      tmp = owner.r57();
    } else {
      tmp = Empty_getInstance();
    }
    return tmp;
  };
  protoOf(ViewModelProviders).u58 = function (modelClass, extras, initializers) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var inductionVariable = 0;
      var last = initializers.length;
      while (inductionVariable < last) {
        var element = initializers[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.lifecycle.viewmodel.internal.ViewModelProviders.createViewModelFromInitializers.<anonymous>' call
        if (element.v58_1.equals(modelClass)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w58_1;
    var tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver(extras);
    var viewModel = (tmp == null ? true : tmp instanceof ViewModel) ? tmp : THROW_CCE();
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.requireNotNull' call
      if (viewModel == null) {
        // Inline function 'androidx.lifecycle.viewmodel.internal.ViewModelProviders.createViewModelFromInitializers.<anonymous>' call
        var message = 'No initializer set for given class ' + get_canonicalName(modelClass);
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$3 = viewModel;
        break $l$block_0;
      }
    }
    return tmp$ret$3;
  };
  var ViewModelProviders_instance;
  function ViewModelProviders_getInstance() {
    return ViewModelProviders_instance;
  }
  function ViewModel_init_$Init$($this) {
    ViewModel.call($this);
    $this.u57_1 = ViewModelImpl_init_$Create$();
    return $this;
  }
  protoOf(ViewModel).x58 = function () {
  };
  protoOf(ViewModel).v57 = function () {
    this.u57_1.f2();
    this.x58();
  };
  function ViewModel() {
  }
  function Factory() {
  }
  function OnRequeryFactory() {
  }
  protoOf(OnRequeryFactory).o58 = function (viewModel) {
  };
  function Companion() {
    Companion_instance = this;
    this.z58_1 = ViewModelKey_instance;
  }
  protoOf(Companion).a59 = function (owner, factory, extras) {
    return new ViewModelProvider(new ViewModelProviderImpl(owner.b59(), factory, extras));
  };
  protoOf(Companion).c59 = function (owner, factory, extras, $super) {
    factory = factory === VOID ? ViewModelProviders_instance.s58(owner) : factory;
    extras = extras === VOID ? ViewModelProviders_instance.t58(owner) : extras;
    return $super === VOID ? this.a59(owner, factory, extras) : $super.a59.call(this, owner, factory, extras);
  };
  protoOf(Companion).d59 = function (store, factory, extras) {
    return new ViewModelProvider(new ViewModelProviderImpl(store, factory, extras));
  };
  protoOf(Companion).e59 = function (store, factory, extras, $super) {
    factory = factory === VOID ? DefaultViewModelProviderFactory_instance : factory;
    extras = extras === VOID ? Empty_getInstance() : extras;
    return $super === VOID ? this.d59(store, factory, extras) : $super.d59.call(this, store, factory, extras);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ViewModelProvider(impl) {
    Companion_getInstance();
    this.f59_1 = impl;
  }
  protoOf(ViewModelProvider).g59 = function (modelClass) {
    return this.f59_1.p58(modelClass);
  };
  protoOf(ViewModelProvider).h59 = function (key, modelClass) {
    return this.f59_1.n58(modelClass, key);
  };
  function ViewModelInitializer(clazz, initializer) {
    this.v58_1 = clazz;
    this.w58_1 = initializer;
  }
  function InitializerViewModelFactory(initializers) {
    this.i59_1 = initializers;
  }
  protoOf(InitializerViewModelFactory).y58 = function (modelClass, extras) {
    return ViewModelProviders_instance.u58(modelClass, extras, this.i59_1.slice());
  };
  function DefaultViewModelProviderFactory() {
  }
  protoOf(DefaultViewModelProviderFactory).y58 = function (modelClass, extras) {
    return ViewModelProviders_instance.r58();
  };
  var DefaultViewModelProviderFactory_instance;
  function DefaultViewModelProviderFactory_getInstance() {
    return DefaultViewModelProviderFactory_instance;
  }
  function createViewModel(factory, modelClass, extras) {
    return factory.y58(modelClass, extras);
  }
  function SynchronizedObject() {
  }
  function get_canonicalName(_this__u8e3s4) {
    return _this__u8e3s4.xa();
  }
  //region block: init
  ViewModelKey_instance = new ViewModelKey();
  ViewModelProviders_instance = new ViewModelProviders();
  DefaultViewModelProviderFactory_instance = new DefaultViewModelProviderFactory();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = InitializerViewModelFactoryBuilder;
  _.$_$.b = MutableCreationExtras;
  _.$_$.c = HasDefaultViewModelProviderFactory;
  _.$_$.d = create;
  _.$_$.e = Factory;
  _.$_$.f = ViewModelStore;
  _.$_$.g = ViewModel;
  _.$_$.h = ViewModel_init_$Init$;
  _.$_$.i = Empty_getInstance;
  _.$_$.j = Companion_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-lifecycle-lifecycle-viewmodel.js.map
