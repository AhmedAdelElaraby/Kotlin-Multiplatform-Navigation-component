(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForInterface = kotlin_kotlin.$_$.na;
  var VOID = kotlin_kotlin.$_$.e;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.r3;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var emptyList = kotlin_kotlin.$_$.r5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.i;
  var lazy = kotlin_kotlin.$_$.vf;
  var toString = kotlin_kotlin.$_$.ob;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var KProperty1 = kotlin_kotlin.$_$.kc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ha;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.n1;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var captureStack = kotlin_kotlin.$_$.u9;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.p1;
  var IllegalArgumentException = kotlin_kotlin.$_$.se;
  var equals = kotlin_kotlin.$_$.ba;
  var getStringHashCode = kotlin_kotlin.$_$.ia;
  var isBlank = kotlin_kotlin.$_$.kd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var toList = kotlin_kotlin.$_$.i8;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.n;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.t;
  var toHashSet = kotlin_kotlin.$_$.a8;
  var copyToArray = kotlin_kotlin.$_$.q5;
  var toBooleanArray = kotlin_kotlin.$_$.y7;
  var withIndex = kotlin_kotlin.$_$.s8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var to = kotlin_kotlin.$_$.jg;
  var toMap = kotlin_kotlin.$_$.l8;
  var lazy_0 = kotlin_kotlin.$_$.wf;
  var contentEquals = kotlin_kotlin.$_$.i5;
  var until = kotlin_kotlin.$_$.gc;
  var joinToString = kotlin_kotlin.$_$.o6;
  var initMetadataForObject = kotlin_kotlin.$_$.pa;
  var ensureNotNull = kotlin_kotlin.$_$.pf;
  var Char = kotlin_kotlin.$_$.le;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var isInterface = kotlin_kotlin.$_$.za;
  var Duration__toIsoString_impl_9h6wsm = kotlin_kotlin.$_$.l2;
  var Duration = kotlin_kotlin.$_$.he;
  var hashCode = kotlin_kotlin.$_$.ja;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var fillArrayVal = kotlin_kotlin.$_$.ca;
  var booleanArray = kotlin_kotlin.$_$.t9;
  var emptyMap = kotlin_kotlin.$_$.s5;
  var contentHashCode = kotlin_kotlin.$_$.k5;
  var Companion_getInstance = kotlin_kotlin.$_$.w3;
  var isCharArray = kotlin_kotlin.$_$.ua;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.n3;
  var isDoubleArray = kotlin_kotlin.$_$.wa;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.o3;
  var isFloatArray = kotlin_kotlin.$_$.xa;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.x3;
  var isLongArray = kotlin_kotlin.$_$.ab;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.b4;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.f3;
  var ULongArray = kotlin_kotlin.$_$.ff;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.e3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.c3;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.p3;
  var isIntArray = kotlin_kotlin.$_$.ya;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.a4;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.a3;
  var UIntArray = kotlin_kotlin.$_$.df;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.z2;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.y2;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.q3;
  var isShortArray = kotlin_kotlin.$_$.bb;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.c4;
  var _UShortArray___get_size__impl__jqto1b = kotlin_kotlin.$_$.i3;
  var UShortArray = kotlin_kotlin.$_$.hf;
  var UShortArray__get_impl_fnbhmx = kotlin_kotlin.$_$.h3;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.g3;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.m3;
  var isByteArray = kotlin_kotlin.$_$.ta;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.z3;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.w2;
  var UByteArray = kotlin_kotlin.$_$.bf;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.v2;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.u2;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.l3;
  var isBooleanArray = kotlin_kotlin.$_$.sa;
  var Long = kotlin_kotlin.$_$.ue;
  var Unit = kotlin_kotlin.$_$.jf;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.t3;
  var getKClass = kotlin_kotlin.$_$.c;
  var ULong = kotlin_kotlin.$_$.gf;
  var UInt = kotlin_kotlin.$_$.ef;
  var UShort = kotlin_kotlin.$_$.if;
  var UByte = kotlin_kotlin.$_$.cf;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.v3;
  var mapOf = kotlin_kotlin.$_$.d7;
  var get_js = kotlin_kotlin.$_$.cb;
  var findAssociatedObject = kotlin_kotlin.$_$.a;
  var get_indices = kotlin_kotlin.$_$.l6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var get_indices_0 = kotlin_kotlin.$_$.k6;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SerializationStrategy, 'SerializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [SerializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicSerializer, 'PolymorphicSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor');
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl');
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(BYTE, 'BYTE', VOID, PrimitiveKind);
  initMetadataForObject(CHAR, 'CHAR', VOID, PrimitiveKind);
  initMetadataForObject(SHORT, 'SHORT', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(LONG, 'LONG', VOID, PrimitiveKind);
  initMetadataForObject(FLOAT, 'FLOAT', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(OPEN, 'OPEN', VOID, PolymorphicKind);
  function beginCollection(descriptor, collectionSize) {
    return this.dad(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.oab(this, value);
  }
  initMetadataForInterface(Encoder, 'Encoder');
  initMetadataForClass(AbstractEncoder, 'AbstractEncoder', VOID, VOID, [Encoder]);
  initMetadataForObject(NothingSerializer_0, 'NothingSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DurationSerializer, 'DurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor');
  initMetadataForClass(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(PrimitiveArraySerializer, 'PrimitiveArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor');
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(NoOpEncoder, 'NoOpEncoder', VOID, AbstractEncoder);
  initMetadataForObject(NothingSerialDescriptor, 'NothingSerialDescriptor');
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(SerializerFactory, 'SerializerFactory');
  initMetadataForObject(CharArraySerializer_0, 'CharArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(DoubleArraySerializer_0, 'DoubleArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(FloatArraySerializer_0, 'FloatArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(LongArraySerializer_0, 'LongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ULongArraySerializer_0, 'ULongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(IntArraySerializer_0, 'IntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UIntArraySerializer_0, 'UIntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ShortArraySerializer_0, 'ShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UShortArraySerializer_0, 'UShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ByteArraySerializer_0, 'ByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UByteArraySerializer_0, 'UByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(BooleanArraySerializer_0, 'BooleanArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(CharSerializer, 'CharSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FloatSerializer, 'FloatSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ShortSerializer, 'ShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ByteSerializer, 'ByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UnitSerializer, 'UnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor, 'PrimitiveSerialDescriptor');
  initMetadataForObject(ULongSerializer, 'ULongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UIntSerializer, 'UIntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UShortSerializer, 'UShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UByteSerializer, 'UByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.xab('type', serializer_0(StringCompanionObject_instance).nab());
      $this$buildSerialDescriptor.xab('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.yab_1.xa() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.rab_1 = this$0.zab_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.yab_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.yab_1 = baseClass;
    this.zab_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.aac_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).bac = function () {
    return this.yab_1;
  };
  protoOf(PolymorphicSerializer).nab = function () {
    var tmp0 = this.aac_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory();
    return tmp0.v();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.yab_1) + ')';
  };
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.dac(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.bac());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.nab();
    }, null);
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializer(_this__u8e3s4) {
    var tmp0_elvis_lhs = serializerOrNull(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      serializerNotRegistered(_this__u8e3s4);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_1(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.eac_1 = original;
    this.fac_1 = kClass;
    this.gac_1 = this.eac_1.hac() + '<' + this.fac_1.xa() + '>';
  }
  protoOf(ContextDescriptor).iac = function () {
    return this.eac_1.iac();
  };
  protoOf(ContextDescriptor).jac = function () {
    return this.eac_1.jac();
  };
  protoOf(ContextDescriptor).kac = function (index) {
    return this.eac_1.kac(index);
  };
  protoOf(ContextDescriptor).lac = function (index) {
    return this.eac_1.lac(index);
  };
  protoOf(ContextDescriptor).mac = function (index) {
    return this.eac_1.mac(index);
  };
  protoOf(ContextDescriptor).hac = function () {
    return this.gac_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.eac_1, another.eac_1) && another.fac_1.equals(this.fac_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.fac_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.gac_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.fac_1) + ', original: ' + toString(this.eac_1) + ')';
  };
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementDescriptors$$inlined$Iterable$1(_this__u8e3s4);
  }
  function elementDescriptors$1($this_elementDescriptors) {
    this.oac_1 = $this_elementDescriptors;
    this.nac_1 = $this_elementDescriptors.iac();
  }
  protoOf(elementDescriptors$1).k = function () {
    return this.nac_1 > 0;
  };
  protoOf(elementDescriptors$1).l = function () {
    var tmp = this.oac_1.iac();
    var tmp1 = this.nac_1;
    this.nac_1 = tmp1 - 1 | 0;
    return this.oac_1.kac(tmp - tmp1 | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.pac_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).j = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1(this.pac_1);
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!equals(kind, CLASS_getInstance())) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.sab_1.n(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.pab_1 = serialName;
    this.qab_1 = false;
    this.rab_1 = emptyList();
    this.sab_1 = ArrayList_init_$Create$();
    this.tab_1 = HashSet_init_$Create$();
    this.uab_1 = ArrayList_init_$Create$();
    this.vab_1 = ArrayList_init_$Create$();
    this.wab_1 = ArrayList_init_$Create$();
  }
  protoOf(ClassSerialDescriptorBuilder).qac = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.tab_1.e(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered in " + this.pab_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.sab_1.e(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.uab_1.e(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.vab_1.e(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.wab_1.e(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).xab = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.qac(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.qac.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.cad_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory();
    return tmp0.v();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.bad_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.lac(it) + ': ' + this$0.kac(it).hac();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.rac_1 = serialName;
    this.sac_1 = kind;
    this.tac_1 = elementsCount;
    this.uac_1 = builder.rab_1;
    this.vac_1 = toHashSet(builder.sab_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.sab_1;
    tmp.wac_1 = copyToArray(this_0);
    this.xac_1 = compactArray(builder.uab_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.vab_1;
    tmp_0.yac_1 = copyToArray(this_1);
    this.zac_1 = toBooleanArray(builder.wab_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.wac_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.j();
    while (_iterator__ex2g4s.k()) {
      var item = _iterator__ex2g4s.l();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.qf_1, item.pf_1);
      destination.e(tmp$ret$2);
    }
    tmp_1.aad_1 = toMap(destination);
    this.bad_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.cad_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).hac = function () {
    return this.rac_1;
  };
  protoOf(SerialDescriptorImpl).jac = function () {
    return this.sac_1;
  };
  protoOf(SerialDescriptorImpl).iac = function () {
    return this.tac_1;
  };
  protoOf(SerialDescriptorImpl).lac = function (index) {
    return getChecked(this.wac_1, index);
  };
  protoOf(SerialDescriptorImpl).kac = function (index) {
    return getChecked(this.xac_1, index);
  };
  protoOf(SerialDescriptorImpl).mac = function (index) {
    return getChecked_0(this.zac_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.hac() === other.hac())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.bad_1, other.bad_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.iac() === other.iac())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.iac();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.kac(index).hac() === other.kac(index).hac())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.kac(index).jac(), other.kac(index).jac())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    var tmp = until(0, this.tac_1);
    var tmp_0 = this.rac_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_instance;
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).xa());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).dad = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).ead = function (descriptor) {
  };
  protoOf(AbstractEncoder).fad = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).gad = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).had = function (value) {
    return this.gad(value);
  };
  protoOf(AbstractEncoder).iad = function (value) {
    return this.gad(value);
  };
  protoOf(AbstractEncoder).jad = function (value) {
    return this.gad(value);
  };
  protoOf(AbstractEncoder).kad = function (value) {
    return this.gad(value);
  };
  protoOf(AbstractEncoder).lad = function (value) {
    return this.gad(value);
  };
  protoOf(AbstractEncoder).mad = function (value) {
    return this.gad(value);
  };
  protoOf(AbstractEncoder).nad = function (value) {
    return this.gad(value);
  };
  protoOf(AbstractEncoder).oad = function (value) {
    return this.gad(new Char(value));
  };
  protoOf(AbstractEncoder).pad = function (value) {
    return this.gad(value);
  };
  protoOf(AbstractEncoder).qad = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).rad = function (descriptor, index, value) {
    if (this.fad(descriptor, index)) {
      this.had(value);
    }
  };
  protoOf(AbstractEncoder).sad = function (descriptor, index, value) {
    if (this.fad(descriptor, index)) {
      this.iad(value);
    }
  };
  protoOf(AbstractEncoder).tad = function (descriptor, index, value) {
    if (this.fad(descriptor, index)) {
      this.jad(value);
    }
  };
  protoOf(AbstractEncoder).uad = function (descriptor, index, value) {
    if (this.fad(descriptor, index)) {
      this.kad(value);
    }
  };
  protoOf(AbstractEncoder).vad = function (descriptor, index, value) {
    if (this.fad(descriptor, index)) {
      this.lad(value);
    }
  };
  protoOf(AbstractEncoder).wad = function (descriptor, index, value) {
    if (this.fad(descriptor, index)) {
      this.mad(value);
    }
  };
  protoOf(AbstractEncoder).xad = function (descriptor, index, value) {
    if (this.fad(descriptor, index)) {
      this.nad(value);
    }
  };
  protoOf(AbstractEncoder).yad = function (descriptor, index, value) {
    if (this.fad(descriptor, index)) {
      this.oad(value);
    }
  };
  protoOf(AbstractEncoder).zad = function (descriptor, index, value) {
    if (this.fad(descriptor, index)) {
      this.pad(value);
    }
  };
  protoOf(AbstractEncoder).aae = function (descriptor, index) {
    return this.fad(descriptor, index) ? this.qad(descriptor.kac(index)) : NoOpEncoder_getInstance();
  };
  protoOf(AbstractEncoder).bae = function (descriptor, index, serializer, value) {
    if (this.fad(descriptor, index)) {
      this.cae(serializer, value);
    }
  };
  function Encoder() {
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).cac = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var descriptor = this.nab();
    var composite = encoder.dad(descriptor);
    // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
    composite.zad(this.nab(), 0, actualSerializer.nab().hac());
    var tmp = this.nab();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
    composite.bae(tmp, 1, tmp$ret$0, value);
    composite.ead(descriptor);
  };
  protoOf(AbstractPolymorphicSerializer).oab = function (encoder, value) {
    return this.cac(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(AbstractPolymorphicSerializer).dac = function (encoder, value) {
    return encoder.dae().fae(this.bac(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.xa();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.xa() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.xa() + "' has to be sealed and '@Serializable'."));
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.gae_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).nab = function () {
    return this.gae_1;
  };
  protoOf(NothingSerializer_0).hae = function (encoder, value) {
    throw SerializationException_init_$Create$_0("'kotlin.Nothing' cannot be serialized");
  };
  protoOf(NothingSerializer_0).oab = function (encoder, value) {
    var tmp;
    if (false) {
      tmp = value;
    } else {
      tmp = THROW_CCE();
    }
    return this.hae(encoder, tmp);
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.iae_1 = new PrimitiveSerialDescriptor('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).nab = function () {
    return this.iae_1;
  };
  protoOf(DurationSerializer).jae = function (encoder, value) {
    encoder.pad(Duration__toIsoString_impl_9h6wsm(value));
  };
  protoOf(DurationSerializer).oab = function (encoder, value) {
    return this.jae(encoder, value instanceof Duration ? value.hk_1 : THROW_CCE());
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.kae_1 = elementDescriptor;
    this.lae_1 = 1;
  }
  protoOf(ListLikeDescriptor).jac = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).iac = function () {
    return this.lae_1;
  };
  protoOf(ListLikeDescriptor).lac = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).mac = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.hac() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).kac = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.hac() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.kae_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.kae_1, other.kae_1) && this.hac() === other.hac())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.kae_1), 31) + getStringHashCode(this.hac()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.hac() + '(' + toString(this.kae_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.oae_1 = primitive.hac() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).hac = function () {
    return this.oae_1;
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.pae_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).qae = function (encoder, value) {
    var size = this.rae(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.nab();
    var composite = encoder.eae(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.CollectionLikeSerializer.serialize.<anonymous>' call
    var iterator = this.sae(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.bae(this.nab(), index, this.pae_1, iterator.l());
      }
       while (inductionVariable < size);
    composite.ead(descriptor);
  };
  protoOf(CollectionLikeSerializer).oab = function (encoder, value) {
    return this.qae(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function AbstractCollectionSerializer() {
  }
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.uae_1 = new PrimitiveArrayDescriptor(primitiveSerializer.nab());
  }
  protoOf(PrimitiveArraySerializer).nab = function () {
    return this.uae_1;
  };
  protoOf(PrimitiveArraySerializer).vae = function (_this__u8e3s4) {
    var message = 'This method lead to boxing and must not be used, use writeContents instead';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(PrimitiveArraySerializer).sae = function (_this__u8e3s4) {
    return this.vae((_this__u8e3s4 == null ? true : !(_this__u8e3s4 == null)) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).xae = function (encoder, value) {
    var size = this.rae(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.uae_1;
    var composite = encoder.eae(descriptor, size);
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.wae(composite, value, size);
    composite.ead(descriptor);
  };
  protoOf(PrimitiveArraySerializer).oab = function (encoder, value) {
    return this.xae(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  protoOf(PrimitiveArraySerializer).qae = function (encoder, value) {
    return this.xae(encoder, (value == null ? true : !(value == null)) ? value : THROW_CCE());
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.kaf_1 = true;
  }
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.hac() === other.hac())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.kaf_1 && contentEquals(this.xaf(), other.xaf()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.iac() === other.iac())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.iac();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.kac(index).hac() === other.kac(index).hac())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.kac(index).jac(), other.kac(index).jac())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.yaf_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).zaf = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.yaf_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).nab = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).oab = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.bag_1 = EmptySerializersModule_0();
  }
  protoOf(NoOpEncoder).dae = function () {
    return this.bag_1;
  };
  protoOf(NoOpEncoder).gad = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).had = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).iad = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).jad = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).kad = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).lad = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).mad = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).nad = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).oad = function (value) {
    return Unit_instance;
  };
  protoOf(NoOpEncoder).pad = function (value) {
    return Unit_instance;
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.cag_1 = OBJECT_getInstance();
    this.dag_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).jac = function () {
    return this.cag_1;
  };
  protoOf(NothingSerialDescriptor).hac = function () {
    return this.dag_1;
  };
  protoOf(NothingSerialDescriptor).iac = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).lac = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).mac = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).kac = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.dag_1) + imul(31, this.cag_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.rab_1 = this$0.fag_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.eag_1 = objectInstance;
    this.fag_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.gag_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).nab = function () {
    var tmp0 = this.gag_1;
    // Inline function 'kotlin.getValue' call
    descriptor$factory_0();
    return tmp0.v();
  };
  protoOf(ObjectSerializer).cac = function (encoder, value) {
    encoder.dad(this.nab()).ead(this.nab());
  };
  protoOf(ObjectSerializer).oab = function (encoder, value) {
    return this.cac(encoder, !(value == null) ? value : THROW_CCE());
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.nab();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function notRegisteredMessage(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    var tmp0_elvis_lhs = _this__u8e3s4.xa();
    return notRegisteredMessage_0(tmp0_elvis_lhs == null ? '<local class name not available>' : tmp0_elvis_lhs);
  }
  function notRegisteredMessage_0(className) {
    _init_properties_Platform_common_kt__3qzecs();
    return "Serializer for class '" + className + "' is not found.\n" + "Please ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.q())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function serializerNotRegistered(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    throw SerializationException_init_$Create$_0(notRegisteredMessage(_this__u8e3s4));
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.uaf_1;
    // Inline function 'kotlin.getValue' call
    childSerializers$factory();
    return tmp0.v();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.waf_1;
    // Inline function 'kotlin.getValue' call
    _hashCode$factory_0();
    return tmp0.v();
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.maf_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zaf();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.maf_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.aag();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          var tmp$ret$0 = item.nab();
          destination.e(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.xaf());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.lac(i) + ': ' + this$0.kac(i).hac();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.laf_1 = serialName;
    this.maf_1 = generatedSerializer;
    this.naf_1 = elementsCount;
    this.oaf_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.naf_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.paf_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.naf_1;
    tmp_3.qaf_1 = fillArrayVal(Array(size), null);
    this.raf_1 = null;
    this.saf_1 = booleanArray(this.naf_1);
    this.taf_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.uaf_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.vaf_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.waf_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).hac = function () {
    return this.laf_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).iac = function () {
    return this.naf_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).jac = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).xaf = function () {
    var tmp0 = this.vaf_1;
    // Inline function 'kotlin.getValue' call
    typeParameterDescriptors$factory();
    return tmp0.v();
  };
  protoOf(PluginGeneratedSerialDescriptor).kac = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).nab();
  };
  protoOf(PluginGeneratedSerialDescriptor).mac = function (index) {
    return getChecked_0(this.saf_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).lac = function (index) {
    return getChecked(this.paf_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.hac() === other.hac())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.xaf(), other.xaf())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.iac() === other.iac())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.iac();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.kac(index).hac() === other.kac(index).hac())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.kac(index).jac(), other.kac(index).jac())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    var tmp = until(0, this.naf_1);
    var tmp_0 = this.hac() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.hac());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.hac();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.j();
    while (_iterator__ex2g4s_0.k()) {
      var element_0 = _iterator__ex2g4s_0.l();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.jac();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.xaf();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function SerializerFactory() {
  }
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance()));
  }
  protoOf(CharArraySerializer_0).kag = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(CharArraySerializer_0).rae = function (_this__u8e3s4) {
    return this.kag((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CharArraySerializer_0).lag = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.yad(this.uae_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(CharArraySerializer_0).wae = function (encoder, content, size) {
    return this.lag(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(DoubleCompanionObject_instance));
  }
  protoOf(DoubleArraySerializer_0).oag = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(DoubleArraySerializer_0).rae = function (_this__u8e3s4) {
    return this.oag((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(DoubleArraySerializer_0).pag = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.xad(this.uae_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(DoubleArraySerializer_0).wae = function (encoder, content, size) {
    return this.pag(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(FloatCompanionObject_instance));
  }
  protoOf(FloatArraySerializer_0).sag = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(FloatArraySerializer_0).rae = function (_this__u8e3s4) {
    return this.sag((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(FloatArraySerializer_0).tag = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.wad(this.uae_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(FloatArraySerializer_0).wae = function (encoder, content, size) {
    return this.tag(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_0()));
  }
  protoOf(LongArraySerializer_0).wag = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(LongArraySerializer_0).rae = function (_this__u8e3s4) {
    return this.wag((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LongArraySerializer_0).xag = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.vad(this.uae_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(LongArraySerializer_0).wae = function (encoder, content, size) {
    return this.xag(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(Companion_getInstance_1()));
  }
  protoOf(ULongArraySerializer_0).aah = function (_this__u8e3s4) {
    return _ULongArray___get_size__impl__ju6dtr(_this__u8e3s4);
  };
  protoOf(ULongArraySerializer_0).rae = function (_this__u8e3s4) {
    return this.aah(_this__u8e3s4 instanceof ULongArray ? _this__u8e3s4.ef_1 : THROW_CCE());
  };
  protoOf(ULongArraySerializer_0).bah = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.aae(this.uae_1, i);
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = ULongArray__get_impl_pr71q9(content, i);
        var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
        tmp.lad(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(ULongArraySerializer_0).wae = function (encoder, content, size) {
    return this.bah(encoder, content instanceof ULongArray ? content.ef_1 : THROW_CCE(), size);
  };
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(IntCompanionObject_instance));
  }
  protoOf(IntArraySerializer_0).eah = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(IntArraySerializer_0).rae = function (_this__u8e3s4) {
    return this.eah((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(IntArraySerializer_0).fah = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.uad(this.uae_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(IntArraySerializer_0).wae = function (encoder, content, size) {
    return this.fah(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(Companion_getInstance_2()));
  }
  protoOf(UIntArraySerializer_0).iah = function (_this__u8e3s4) {
    return _UIntArray___get_size__impl__r6l8ci(_this__u8e3s4);
  };
  protoOf(UIntArraySerializer_0).rae = function (_this__u8e3s4) {
    return this.iah(_this__u8e3s4 instanceof UIntArray ? _this__u8e3s4.ff_1 : THROW_CCE());
  };
  protoOf(UIntArraySerializer_0).jah = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.aae(this.uae_1, i);
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = UIntArray__get_impl_gp5kza(content, i);
        var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(this_0);
        tmp.kad(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UIntArraySerializer_0).wae = function (encoder, content, size) {
    return this.jah(encoder, content instanceof UIntArray ? content.ff_1 : THROW_CCE(), size);
  };
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(ShortCompanionObject_instance));
  }
  protoOf(ShortArraySerializer_0).mah = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ShortArraySerializer_0).rae = function (_this__u8e3s4) {
    return this.mah((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ShortArraySerializer_0).nah = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.tad(this.uae_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ShortArraySerializer_0).wae = function (encoder, content, size) {
    return this.nah(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(Companion_getInstance_3()));
  }
  protoOf(UShortArraySerializer_0).qah = function (_this__u8e3s4) {
    return _UShortArray___get_size__impl__jqto1b(_this__u8e3s4);
  };
  protoOf(UShortArraySerializer_0).rae = function (_this__u8e3s4) {
    return this.qah(_this__u8e3s4 instanceof UShortArray ? _this__u8e3s4.gf_1 : THROW_CCE());
  };
  protoOf(UShortArraySerializer_0).rah = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.aae(this.uae_1, i);
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = UShortArray__get_impl_fnbhmx(content, i);
        var tmp$ret$0 = _UShort___get_data__impl__g0245(this_0);
        tmp.jad(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UShortArraySerializer_0).wae = function (encoder, content, size) {
    return this.rah(encoder, content instanceof UShortArray ? content.gf_1 : THROW_CCE(), size);
  };
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(ByteCompanionObject_instance));
  }
  protoOf(ByteArraySerializer_0).uah = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(ByteArraySerializer_0).rae = function (_this__u8e3s4) {
    return this.uah((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ByteArraySerializer_0).vah = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.sad(this.uae_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(ByteArraySerializer_0).wae = function (encoder, content, size) {
    return this.vah(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(Companion_getInstance_4()));
  }
  protoOf(UByteArraySerializer_0).yah = function (_this__u8e3s4) {
    return _UByteArray___get_size__impl__h6pkdv(_this__u8e3s4);
  };
  protoOf(UByteArraySerializer_0).rae = function (_this__u8e3s4) {
    return this.yah(_this__u8e3s4 instanceof UByteArray ? _this__u8e3s4.hf_1 : THROW_CCE());
  };
  protoOf(UByteArraySerializer_0).zah = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = encoder.aae(this.uae_1, i);
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = UByteArray__get_impl_t5f3hv(content, i);
        var tmp$ret$0 = _UByte___get_data__impl__jof9qr(this_0);
        tmp.iad(tmp$ret$0);
      }
       while (inductionVariable < size);
  };
  protoOf(UByteArraySerializer_0).wae = function (encoder, content, size) {
    return this.zah(encoder, content instanceof UByteArray ? content.hf_1 : THROW_CCE(), size);
  };
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_12(BooleanCompanionObject_instance));
  }
  protoOf(BooleanArraySerializer_0).cai = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  protoOf(BooleanArraySerializer_0).rae = function (_this__u8e3s4) {
    return this.cai((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(BooleanArraySerializer_0).dai = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.rad(this.uae_1, i, content[i]);
      }
       while (inductionVariable < size);
  };
  protoOf(BooleanArraySerializer_0).wae = function (encoder, content, size) {
    return this.dai(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function builtinSerializerOrNull(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    var tmp = get_BUILTIN_SERIALIZERS().l2(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.eai_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).nab = function () {
    return this.eai_1;
  };
  protoOf(StringSerializer).fai = function (encoder, value) {
    return encoder.pad(value);
  };
  protoOf(StringSerializer).oab = function (encoder, value) {
    return this.fai(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.gai_1 = new PrimitiveSerialDescriptor('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).nab = function () {
    return this.gai_1;
  };
  protoOf(CharSerializer).hai = function (encoder, value) {
    return encoder.oad(value);
  };
  protoOf(CharSerializer).oab = function (encoder, value) {
    return this.hai(encoder, value instanceof Char ? value.m1_1 : THROW_CCE());
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.iai_1 = new PrimitiveSerialDescriptor('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).nab = function () {
    return this.iai_1;
  };
  protoOf(DoubleSerializer).jai = function (encoder, value) {
    return encoder.nad(value);
  };
  protoOf(DoubleSerializer).oab = function (encoder, value) {
    return this.jai(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.kai_1 = new PrimitiveSerialDescriptor('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).nab = function () {
    return this.kai_1;
  };
  protoOf(FloatSerializer).lai = function (encoder, value) {
    return encoder.mad(value);
  };
  protoOf(FloatSerializer).oab = function (encoder, value) {
    return this.lai(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.mai_1 = new PrimitiveSerialDescriptor('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).nab = function () {
    return this.mai_1;
  };
  protoOf(LongSerializer).nai = function (encoder, value) {
    return encoder.lad(value);
  };
  protoOf(LongSerializer).oab = function (encoder, value) {
    return this.nai(encoder, value instanceof Long ? value : THROW_CCE());
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.oai_1 = new PrimitiveSerialDescriptor('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).nab = function () {
    return this.oai_1;
  };
  protoOf(IntSerializer).pai = function (encoder, value) {
    return encoder.kad(value);
  };
  protoOf(IntSerializer).oab = function (encoder, value) {
    return this.pai(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.qai_1 = new PrimitiveSerialDescriptor('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).nab = function () {
    return this.qai_1;
  };
  protoOf(ShortSerializer).rai = function (encoder, value) {
    return encoder.jad(value);
  };
  protoOf(ShortSerializer).oab = function (encoder, value) {
    return this.rai(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.sai_1 = new PrimitiveSerialDescriptor('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).nab = function () {
    return this.sai_1;
  };
  protoOf(ByteSerializer).tai = function (encoder, value) {
    return encoder.iad(value);
  };
  protoOf(ByteSerializer).oab = function (encoder, value) {
    return this.tai(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.uai_1 = new PrimitiveSerialDescriptor('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).nab = function () {
    return this.uai_1;
  };
  protoOf(BooleanSerializer).vai = function (encoder, value) {
    return encoder.had(value);
  };
  protoOf(BooleanSerializer).oab = function (encoder, value) {
    return this.vai(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.wai_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).nab = function () {
    return this.wai_1.nab();
  };
  protoOf(UnitSerializer).xai = function (encoder, value) {
    this.wai_1.cac(encoder, Unit_instance);
  };
  protoOf(UnitSerializer).oab = function (encoder, value) {
    return this.xai(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    this.yai_1 = serialName;
    this.zai_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor).hac = function () {
    return this.yai_1;
  };
  protoOf(PrimitiveSerialDescriptor).jac = function () {
    return this.zai_1;
  };
  protoOf(PrimitiveSerialDescriptor).iac = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor).lac = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor).mac = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor).kac = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor).toString = function () {
    return 'PrimitiveDescriptor(' + this.yai_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor))
      return false;
    if (this.yai_1 === other.yai_1 && equals(this.zai_1, other.zai_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.yai_1) + imul(31, this.zai_1.hashCode()) | 0;
  };
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().qb(), serializer_0(StringCompanionObject_instance)), to(getKClass(Char), serializer_1(Companion_getInstance())), to(PrimitiveClasses_getInstance().tb(), CharArraySerializer()), to(PrimitiveClasses_getInstance().ob(), serializer_2(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().zb(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().nb(), serializer_3(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().yb(), FloatArraySerializer()), to(getKClass(Long), serializer_4(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().xb(), LongArraySerializer()), to(getKClass(ULong), serializer_5(Companion_getInstance_1())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().mb(), serializer_6(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().wb(), IntArraySerializer()), to(getKClass(UInt), serializer_7(Companion_getInstance_2())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().lb(), serializer_8(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().vb(), ShortArraySerializer()), to(getKClass(UShort), serializer_9(Companion_getInstance_3())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().kb(), serializer_10(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().ub(), ByteArraySerializer()), to(getKClass(UByte), serializer_11(Companion_getInstance_4())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().jb(), serializer_12(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().sb(), BooleanArraySerializer()), to(getKClass(Unit), serializer_13(Unit_instance)), to(PrimitiveClasses_getInstance().ib(), NothingSerializer()), to(getKClass(Duration), serializer_14(Companion_getInstance_5()))]);
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.aaj_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_4(Companion_getInstance_0()));
  }
  protoOf(ULongSerializer).nab = function () {
    return this.aaj_1;
  };
  protoOf(ULongSerializer).baj = function (encoder, value) {
    var tmp = encoder.qad(this.aaj_1);
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(value);
    tmp.lad(tmp$ret$0);
  };
  protoOf(ULongSerializer).oab = function (encoder, value) {
    return this.baj(encoder, value instanceof ULong ? value.kl_1 : THROW_CCE());
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.caj_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_6(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).nab = function () {
    return this.caj_1;
  };
  protoOf(UIntSerializer).daj = function (encoder, value) {
    var tmp = encoder.qad(this.caj_1);
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.kad(tmp$ret$0);
  };
  protoOf(UIntSerializer).oab = function (encoder, value) {
    return this.daj(encoder, value instanceof UInt ? value.al_1 : THROW_CCE());
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.eaj_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_8(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).nab = function () {
    return this.eaj_1;
  };
  protoOf(UShortSerializer).faj = function (encoder, value) {
    var tmp = encoder.qad(this.eaj_1);
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(value);
    tmp.jad(tmp$ret$0);
  };
  protoOf(UShortSerializer).oab = function (encoder, value) {
    return this.faj(encoder, value instanceof UShort ? value.ul_1 : THROW_CCE());
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.gaj_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_10(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).nab = function () {
    return this.gaj_1;
  };
  protoOf(UByteSerializer).haj = function (encoder, value) {
    var tmp = encoder.qad(this.gaj_1);
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0 = _UByte___get_data__impl__jof9qr(value);
    tmp.iad(tmp$ret$0);
  };
  protoOf(UByteSerializer).oab = function (encoder, value) {
    return this.haj(encoder, value instanceof UByte ? value.qk_1 : THROW_CCE());
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.iaj_1 = class2ContextualFactory;
    this.jaj_1 = polyBase2Serializers;
    this.kaj_1 = polyBase2DefaultSerializerProvider;
    this.laj_1 = polyBase2NamedSerializers;
    this.maj_1 = polyBase2DefaultDeserializerProvider;
  }
  protoOf(SerialModuleImpl).fae = function (baseClass, value) {
    if (!baseClass.ya(value))
      return null;
    var tmp0_safe_receiver = this.jaj_1.l2(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l2(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.kaj_1.l2(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializableWith(serializer) {
    this.naj_1 = serializer;
  }
  protoOf(SerializableWith).equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.naj_1.equals(tmp0_other_with_cast.naj_1))
      return false;
    return true;
  };
  protoOf(SerializableWith).hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.naj_1.hashCode();
  };
  protoOf(SerializableWith).toString = function () {
    return '@kotlinx.serialization.SerializableWith(' + 'serializer=' + toString(this.naj_1) + ')';
  };
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp_0;
      if (_this__u8e3s4 === PrimitiveClasses_getInstance().ib()) {
        tmp_0 = NothingSerializer_getInstance();
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_safe_receiver = get_js(_this__u8e3s4).Companion;
        tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? isInterface(tmp_1, KSerializer) : false) ? tmp_1 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      var assocObject = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.hag(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      var e = $p;
      tmp_2 = null;
      tmp = tmp_2;
    }
    return tmp;
  }
  function get_isInterface(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = get_js(_this__u8e3s4).$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  //region block: post-declaration
  protoOf(AbstractEncoder).eae = beginCollection;
  protoOf(AbstractEncoder).cae = encodeSerializableValue;
  protoOf(InlinePrimitiveDescriptor$1).aag = typeParametersSerializers;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AbstractEncoder;
  _.$_$.b = EmptySerializersModule_0;
  _.$_$.c = serializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
