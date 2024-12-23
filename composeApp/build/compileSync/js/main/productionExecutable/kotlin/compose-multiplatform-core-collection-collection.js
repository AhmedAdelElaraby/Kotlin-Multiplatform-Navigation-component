(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-collection-collection'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-collection-collection'.");
    }
    globalThis['compose-multiplatform-core-collection-collection'] = factory(typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-collection-collection'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var clz32 = Math.clz32;
  var toRawBits = kotlin_kotlin.$_$.hg;
  var toLong = kotlin_kotlin.$_$.mb;
  var Long = kotlin_kotlin.$_$.ue;
  var protoOf = kotlin_kotlin.$_$.kb;
  var getNumberHashCode = kotlin_kotlin.$_$.ga;
  var countTrailingZeroBits = kotlin_kotlin.$_$.nf;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.g1;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var VOID = kotlin_kotlin.$_$.e;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var longArray = kotlin_kotlin.$_$.eb;
  var fill = kotlin_kotlin.$_$.v5;
  var toString = kotlin_kotlin.$_$.ob;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.b3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.c3;
  var ulongCompare = kotlin_kotlin.$_$.lg;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var until = kotlin_kotlin.$_$.gc;
  var copyOf = kotlin_kotlin.$_$.p5;
  var arrayCopy = kotlin_kotlin.$_$.x4;
  var fillArrayVal = kotlin_kotlin.$_$.ca;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var hashCode = kotlin_kotlin.$_$.ja;
  var equals = kotlin_kotlin.$_$.ba;
  var fill_0 = kotlin_kotlin.$_$.w5;
  var toString_0 = kotlin_kotlin.$_$.ig;
  var copyOf_0 = kotlin_kotlin.$_$.o5;
  var longArrayOf = kotlin_kotlin.$_$.db;
  var CoroutineImpl = kotlin_kotlin.$_$.l9;
  var SequenceScope = kotlin_kotlin.$_$.lc;
  var numberRangeToNumber = kotlin_kotlin.$_$.fb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w8;
  var initMetadataForLambda = kotlin_kotlin.$_$.oa;
  var iterator = kotlin_kotlin.$_$.rc;
  var KtSet = kotlin_kotlin.$_$.v4;
  var MutableCollection = kotlin_kotlin.$_$.r4;
  var copyOf_1 = kotlin_kotlin.$_$.m5;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.f1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(FloatSet, 'FloatSet');
  initMetadataForClass(MutableFloatSet, 'MutableFloatSet', MutableFloatSet, FloatSet);
  initMetadataForClass(IntIntMap, 'IntIntMap');
  initMetadataForClass(MutableIntIntMap, 'MutableIntIntMap', MutableIntIntMap, IntIntMap);
  initMetadataForClass(IntList, 'IntList');
  initMetadataForClass(MutableIntList, 'MutableIntList', MutableIntList, IntList);
  initMetadataForClass(IntObjectMap, 'IntObjectMap');
  initMetadataForClass(MutableIntObjectMap, 'MutableIntObjectMap', MutableIntObjectMap, IntObjectMap);
  initMetadataForClass(IntSet, 'IntSet');
  initMetadataForClass(MutableIntSet, 'MutableIntSet', MutableIntSet, IntSet);
  initMetadataForClass(LongObjectMap, 'LongObjectMap');
  initMetadataForClass(MutableLongObjectMap, 'MutableLongObjectMap', MutableLongObjectMap, LongObjectMap);
  initMetadataForClass(LongSet, 'LongSet');
  initMetadataForClass(MutableLongSet, 'MutableLongSet', MutableLongSet, LongSet);
  initMetadataForClass(ObjectFloatMap, 'ObjectFloatMap');
  initMetadataForClass(MutableObjectFloatMap, 'MutableObjectFloatMap', MutableObjectFloatMap, ObjectFloatMap);
  initMetadataForClass(ObjectIntMap, 'ObjectIntMap');
  initMetadataForClass(MutableObjectIntMap, 'MutableObjectIntMap', MutableObjectIntMap, ObjectIntMap);
  initMetadataForClass(ObjectList, 'ObjectList');
  initMetadataForClass(MutableObjectList, 'MutableObjectList', MutableObjectList, ObjectList);
  initMetadataForClass(ScatterMap, 'ScatterMap');
  initMetadataForClass(MutableScatterMap, 'MutableScatterMap', MutableScatterMap, ScatterMap);
  initMetadataForLambda(ScatterSet$SetWrapper$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SetWrapper, 'SetWrapper', VOID, VOID, [KtSet]);
  initMetadataForClass(ScatterSet, 'ScatterSet');
  initMetadataForLambda(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(MutableScatterSet$MutableSetWrapper$iterator$1);
  initMetadataForClass(MutableSetWrapper, 'MutableSetWrapper', VOID, SetWrapper, [SetWrapper, KtSet, MutableCollection]);
  initMetadataForClass(MutableScatterSet, 'MutableScatterSet', MutableScatterSet, ScatterSet);
  initMetadataForClass(valueIterator$1);
  initMetadataForClass(LongSparseArray, 'LongSparseArray', LongSparseArray);
  initMetadataForClass(SparseArrayCompat, 'SparseArrayCompat', SparseArrayCompat);
  //endregion
  function _FloatFloatPair___init__impl__2q1dd3(packedValue) {
    return packedValue;
  }
  function _FloatFloatPair___get_packedValue__impl__5lczxp($this) {
    return $this;
  }
  function _FloatFloatPair___init__impl__2q1dd3_0(first, second) {
    // Inline function 'androidx.collection.packFloats' call
    var v1 = toLong(toRawBits(first));
    var v2 = toLong(toRawBits(second));
    var tmp$ret$0 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _FloatFloatPair___init__impl__2q1dd3(tmp$ret$0);
  }
  var EmptyFloatSet;
  function get_EmptyFloatArray() {
    _init_properties_FloatSet_kt__ctp8je();
    return EmptyFloatArray;
  }
  var EmptyFloatArray;
  function FloatSet() {
    this.jm_1 = get_EmptyGroup();
    this.km_1 = get_EmptyFloatArray();
    this.lm_1 = 0;
    this.mm_1 = 0;
  }
  protoOf(FloatSet).nm = function () {
    return this.lm_1;
  };
  protoOf(FloatSet).om = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.FloatSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(getNumberHashCode(element), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.lm_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.jm_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$4);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.km_1[index] === element) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(FloatSet).pm = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      // Inline function 'androidx.collection.FloatSet.joinToString.<anonymous>' call
      this_0.f(prefix);
      var index = 0;
      // Inline function 'androidx.collection.FloatSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.km_1;
      $l$block_0: {
        // Inline function 'androidx.collection.FloatSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.jm_1;
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
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.FloatSet.forEach.<anonymous>' call
                    // Inline function 'androidx.collection.FloatSet.joinToString.<anonymous>.<anonymous>' call
                    var element = k[index_0];
                    if (index === limit) {
                      this_0.f(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.f(separator);
                    }
                    this_0.gc(element);
                    index = index + 1 | 0;
                  }
                  slot = slot.i3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(FloatSet).qm = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.pm(separator, prefix, postfix, limit, truncated) : $super.pm.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(FloatSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.FloatSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.km_1;
    $l$block: {
      // Inline function 'androidx.collection.FloatSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.jm_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.FloatSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.FloatSet.hashCode.<anonymous>' call
                  var element = k[index];
                  hash = hash + getNumberHashCode(element) | 0;
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
    return hash;
  };
  protoOf(FloatSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof FloatSet)) {
      return false;
    }
    if (!(other.mm_1 === this.mm_1)) {
      return false;
    }
    // Inline function 'androidx.collection.FloatSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.km_1;
    $l$block: {
      // Inline function 'androidx.collection.FloatSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.jm_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.FloatSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.FloatSet.equals.<anonymous>' call
                  var element = k[index];
                  if (!other.om(element)) {
                    return false;
                  }
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
    return true;
  };
  protoOf(FloatSet).toString = function () {
    return this.qm(VOID, '[', ']');
  };
  function initializeStorage($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.lm_1 = newCapacity;
    initializeMetadata($this, newCapacity);
    $this.km_1 = new Float32Array(newCapacity);
  }
  function initializeMetadata($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableFloatSet.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.jm_1 = tmp_0;
    var tmp2 = $this.jm_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth($this);
  }
  function initializeGrowth($this) {
    $this.vm_1 = loadedCapacity($this.nm()) - $this.mm_1 | 0;
  }
  function MutableFloatSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    FloatSet.call(this);
    this.vm_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableFloatSet.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage(this, unloadedCapacity(initialCapacity));
  }
  var properties_initialized_FloatSet_kt_ocjrs8;
  function _init_properties_FloatSet_kt__ctp8je() {
    if (!properties_initialized_FloatSet_kt_ocjrs8) {
      properties_initialized_FloatSet_kt_ocjrs8 = true;
      EmptyFloatSet = new MutableFloatSet(0);
      EmptyFloatArray = new Float32Array(0);
    }
  }
  function initializeStorage_0($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.zm_1 = newCapacity;
    initializeMetadata_0($this, newCapacity);
    $this.xm_1 = new Int32Array(newCapacity);
    $this.ym_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_0($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableIntIntMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.wm_1 = tmp_0;
    var tmp2 = $this.wm_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth_0($this);
  }
  function initializeGrowth_0($this) {
    $this.gn_1 = loadedCapacity($this.nm()) - $this.an_1 | 0;
  }
  function findInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.zm_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.wm_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$4);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.xm_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot($this, hash1);
    var tmp_0;
    if ($this.gn_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.wm_1[offset_0 >> 3].i3((offset_0 & 7) << 3).k3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage($this);
      index_0 = findFirstAvailableSlot($this, hash1);
    }
    $this.an_1 = $this.an_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.gn_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.wm_1[offset_1 >> 3].i3((offset_1 & 7) << 3).k3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.gn_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableIntIntMap.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.wm_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    var c = $this.zm_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].k3((new Long(255, 0)).h3(b_1).g3()).l3(value.h3(b_1));
    return ~index_0;
  }
  function findFirstAvailableSlot($this, hash1) {
    var probeMask = $this.zm_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.wm_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].j3(b).l3(tmp0[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.k3(g.g3().h3(7)).k3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage($this) {
    var tmp;
    if ($this.zm_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.an_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).a3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.zm_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).a3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage($this, nextCapacity($this.zm_1));
    } else {
      resizeStorage($this, nextCapacity($this.zm_1));
    }
  }
  function resizeStorage($this, newCapacity) {
    var previousMetadata = $this.wm_1;
    var previousKeys = $this.xm_1;
    var previousValues = $this.ym_1;
    var previousCapacity = $this.zm_1;
    initializeStorage_0($this, newCapacity);
    var newKeys = $this.xm_1;
    var newValues = $this.ym_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].i3((i & 7) << 3).k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot($this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableIntIntMap.writeMetadata' call
          var value = toLong(tmp$ret$4);
          var m = $this.wm_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
          var c = $this.zm_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableIntIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntIntMap.call(this);
    this.gn_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableIntIntMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_0(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntIntMap).hn = function (key, value) {
    var index = findInsertIndex(this, key);
    if (index < 0)
      index = ~index;
    this.xm_1[index] = key;
    this.ym_1[index] = value;
  };
  function IntIntMap() {
    this.wm_1 = get_EmptyGroup();
    this.xm_1 = get_EmptyIntArray();
    this.ym_1 = get_EmptyIntArray();
    this.zm_1 = 0;
    this.an_1 = 0;
  }
  protoOf(IntIntMap).nm = function () {
    return this.zm_1;
  };
  protoOf(IntIntMap).n = function () {
    return this.an_1;
  };
  protoOf(IntIntMap).q = function () {
    return this.an_1 === 0;
  };
  protoOf(IntIntMap).p = function (key) {
    var index = this.in(key);
    if (index < 0) {
      throw NoSuchElementException_init_$Create$('Cannot find value for key ' + key);
    }
    return this.ym_1[index];
  };
  protoOf(IntIntMap).ii = function (key) {
    return this.in(key) >= 0;
  };
  protoOf(IntIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.xm_1;
    var v = this.ym_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.wm_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntIntMap.hashCode.<anonymous>' call
                  hash = hash + (k[index] ^ v[index]) | 0;
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
    return hash;
  };
  protoOf(IntIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntIntMap)) {
      return false;
    }
    if (!(other.n() === this.n())) {
      return false;
    }
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.xm_1;
    var v = this.ym_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.wm_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  // Inline function 'androidx.collection.IntIntMap.equals.<anonymous>' call
                  if (!(v[index] === other.p(tmp1))) {
                    return false;
                  }
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
    return true;
  };
  protoOf(IntIntMap).toString = function () {
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().p8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.xm_1;
    var v = this.ym_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.wm_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.IntIntMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  // Inline function 'androidx.collection.IntIntMap.toString.<anonymous>' call
                  var value = v[index];
                  s.ec(tmp1);
                  s.o8('=');
                  s.ec(value);
                  i = i + 1 | 0;
                  if (i < this.an_1) {
                    s.p8(_Char___init__impl__6a9atx(44)).p8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.i3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.p8(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(IntIntMap).in = function (key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.zm_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = this.wm_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$4);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (this.xm_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function IntList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyIntArray();
    } else {
      tmp_0 = new Int32Array(initialCapacity);
    }
    tmp.jn_1 = tmp_0;
    this.kn_1 = 0;
  }
  protoOf(IntList).n = function () {
    return this.kn_1;
  };
  protoOf(IntList).p = function (index) {
    if (!(0 <= index ? index < this.kn_1 : false)) {
      // Inline function 'androidx.collection.IntList.lastIndex' call
      var tmp$ret$0 = this.kn_1 - 1 | 0;
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' must be in 0..' + tmp$ret$0);
    }
    return this.jn_1[index];
  };
  protoOf(IntList).pm = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      // Inline function 'androidx.collection.IntList.joinToString.<anonymous>' call
      this_0.f(prefix);
      // Inline function 'androidx.collection.IntList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.jn_1;
      var inductionVariable = 0;
      var last = this.kn_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.collection.IntList.joinToString.<anonymous>.<anonymous>' call
          var element = content[i];
          if (i === limit) {
            this_0.f(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.f(separator);
          }
          this_0.ec(element);
        }
         while (inductionVariable < last);
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntList).ln = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.pm(separator, prefix, postfix, limit, truncated) : $super.pm.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntList).hashCode = function () {
    var hashCode = 0;
    // Inline function 'androidx.collection.IntList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.jn_1;
    var inductionVariable = 0;
    var last = this.kn_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.IntList.hashCode.<anonymous>' call
        var element = content[i];
        hashCode = hashCode + imul(31, element) | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  };
  protoOf(IntList).equals = function (other) {
    var tmp;
    if (!(other instanceof IntList)) {
      tmp = true;
    } else {
      tmp = !(other.kn_1 === this.kn_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.jn_1;
    var otherContent = other.jn_1;
    // Inline function 'androidx.collection.IntList.indices' call
    var progression = until(0, this.kn_1);
    var inductionVariable = progression.b1_1;
    var last = progression.c1_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(content[i] === otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(IntList).toString = function () {
    return this.ln(VOID, '[', ']');
  };
  function MutableIntList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    IntList.call(this, initialCapacity);
  }
  protoOf(MutableIntList).on = function (element) {
    this.pn(this.kn_1 + 1 | 0);
    this.jn_1[this.kn_1] = element;
    this.kn_1 = this.kn_1 + 1 | 0;
    return true;
  };
  protoOf(MutableIntList).pn = function (capacity) {
    var oldContent = this.jn_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.jn_1 = copyOf(oldContent, newSize);
    }
  };
  protoOf(MutableIntList).i2 = function (index) {
    if (!(0 <= index ? index < this.kn_1 : false)) {
      // Inline function 'androidx.collection.IntList.lastIndex' call
      var tmp$ret$0 = this.kn_1 - 1 | 0;
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' must be in 0..' + tmp$ret$0);
    }
    var content = this.jn_1;
    var item = content[index];
    // Inline function 'androidx.collection.IntList.lastIndex' call
    if (!(index === (this.kn_1 - 1 | 0))) {
      var tmp5 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.kn_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = content;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, content, index, tmp5, endIndex);
    }
    this.kn_1 = this.kn_1 - 1 | 0;
    return item;
  };
  protoOf(MutableIntList).qn = function (index, element) {
    if (!(0 <= index ? index < this.kn_1 : false)) {
      // Inline function 'androidx.collection.IntList.lastIndex' call
      var tmp$ret$0 = this.kn_1 - 1 | 0;
      throw IndexOutOfBoundsException_init_$Create$('set index ' + index + ' must be between 0 .. ' + tmp$ret$0);
    }
    var content = this.jn_1;
    var old = content[index];
    content[index] = element;
    return old;
  };
  var EmptyIntObjectMap;
  function initializeStorage_1($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.un_1 = newCapacity;
    initializeMetadata_1($this, newCapacity);
    $this.sn_1 = new Int32Array(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.tn_1 = fillArrayVal(Array(newCapacity), null);
  }
  function initializeMetadata_1($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableIntObjectMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.rn_1 = tmp_0;
    var tmp2 = $this.rn_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth_1($this);
  }
  function initializeGrowth_1($this) {
    $this.bo_1 = loadedCapacity($this.nm()) - $this.vn_1 | 0;
  }
  function findAbsoluteInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.un_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.rn_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$4);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.sn_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_0($this, hash1);
    var tmp_0;
    if ($this.bo_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.rn_1[offset_0 >> 3].i3((offset_0 & 7) << 3).k3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_0($this);
      index_0 = findFirstAvailableSlot_0($this, hash1);
    }
    $this.vn_1 = $this.vn_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.bo_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.rn_1[offset_1 >> 3].i3((offset_1 & 7) << 3).k3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.bo_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableIntObjectMap.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.rn_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    var c = $this.un_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].k3((new Long(255, 0)).h3(b_1).g3()).l3(value.h3(b_1));
    return index_0;
  }
  function findFirstAvailableSlot_0($this, hash1) {
    var probeMask = $this.un_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.rn_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].j3(b).l3(tmp0[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.k3(g.g3().h3(7)).k3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_0($this) {
    var tmp;
    if ($this.un_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.vn_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).a3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.un_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).a3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_0($this, nextCapacity($this.un_1));
    } else {
      resizeStorage_0($this, nextCapacity($this.un_1));
    }
  }
  function resizeStorage_0($this, newCapacity) {
    var previousMetadata = $this.rn_1;
    var previousKeys = $this.sn_1;
    var previousValues = $this.tn_1;
    var previousCapacity = $this.un_1;
    initializeStorage_1($this, newCapacity);
    var newKeys = $this.sn_1;
    var newValues = $this.tn_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].i3((i & 7) << 3).k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_0($this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableIntObjectMap.writeMetadata' call
          var value = toLong(tmp$ret$4);
          var m = $this.rn_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
          var c = $this.un_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableIntObjectMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntObjectMap.call(this);
    this.bo_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableIntObjectMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_1(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntObjectMap).co = function (key, value) {
    var index = findAbsoluteInsertIndex(this, key);
    this.sn_1[index] = key;
    this.tn_1[index] = value;
  };
  protoOf(MutableIntObjectMap).do = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.un_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.rn_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$4);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.sn_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    if (index_0 >= 0) {
      return this.eo(index_0);
    }
    return null;
  };
  protoOf(MutableIntObjectMap).eo = function (index) {
    this.vn_1 = this.vn_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableIntObjectMap.writeMetadata' call
    var value = new Long(254, 0);
    var m = this.rn_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    var c = this.un_1;
    var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    var oldValue = this.tn_1[index];
    this.tn_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  function IntObjectMap() {
    this.rn_1 = get_EmptyGroup();
    this.sn_1 = get_EmptyIntArray();
    this.tn_1 = get_EMPTY_OBJECTS();
    this.un_1 = 0;
    this.vn_1 = 0;
  }
  protoOf(IntObjectMap).nm = function () {
    return this.un_1;
  };
  protoOf(IntObjectMap).n = function () {
    return this.vn_1;
  };
  protoOf(IntObjectMap).q = function () {
    return this.vn_1 === 0;
  };
  protoOf(IntObjectMap).p = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.un_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.rn_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$4);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.sn_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    var tmp_0;
    if (index_0 >= 0) {
      var tmp_1 = this.tn_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(IntObjectMap).fo = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.un_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.rn_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$4);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.sn_1[index] === key) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(IntObjectMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.sn_1;
    var v = this.tn_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.rn_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntObjectMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  var tmp = v[index];
                  // Inline function 'androidx.collection.IntObjectMap.hashCode.<anonymous>' call
                  var tmp_0 = hash;
                  var tmp_1 = tmp1;
                  // Inline function 'kotlin.hashCode' call
                  var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
                  hash = tmp_0 + (tmp_1 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
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
    return hash;
  };
  protoOf(IntObjectMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntObjectMap)) {
      return false;
    }
    if (!(other.n() === this.n())) {
      return false;
    }
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.sn_1;
    var v = this.tn_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.rn_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntObjectMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  var tmp = v[index];
                  // Inline function 'androidx.collection.IntObjectMap.equals.<anonymous>' call
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (value == null) {
                    if (!(other.p(tmp1) == null) || !other.fo(tmp1)) {
                      return false;
                    }
                  } else if (!equals(value, other.p(tmp1))) {
                    return false;
                  }
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
    return true;
  };
  protoOf(IntObjectMap).toString = function () {
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().p8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.sn_1;
    var v = this.tn_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.rn_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.IntObjectMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  var tmp = v[index];
                  // Inline function 'androidx.collection.IntObjectMap.toString.<anonymous>' call
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  s.ec(tmp1);
                  s.o8('=');
                  s.n8(value === this ? '(this)' : value);
                  i = i + 1 | 0;
                  if (i < this.vn_1) {
                    s.p8(_Char___init__impl__6a9atx(44)).p8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.i3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.p8(_Char___init__impl__6a9atx(125)).toString();
  };
  function mutableIntObjectMapOf(key1, value1, key2, value2, key3, value3) {
    _init_properties_IntObjectMap_kt__bzh4pa();
    // Inline function 'kotlin.also' call
    var this_0 = new MutableIntObjectMap();
    // Inline function 'androidx.collection.mutableIntObjectMapOf.<anonymous>' call
    this_0.co(key1, value1);
    this_0.co(key2, value2);
    this_0.co(key3, value3);
    return this_0;
  }
  var properties_initialized_IntObjectMap_kt_hqy7tc;
  function _init_properties_IntObjectMap_kt__bzh4pa() {
    if (!properties_initialized_IntObjectMap_kt_hqy7tc) {
      properties_initialized_IntObjectMap_kt_hqy7tc = true;
      EmptyIntObjectMap = new MutableIntObjectMap(0);
    }
  }
  var EmptyIntSet;
  function get_EmptyIntArray() {
    _init_properties_IntSet_kt__km4dgt();
    return EmptyIntArray;
  }
  var EmptyIntArray;
  function IntSet() {
    this.go_1 = get_EmptyGroup();
    this.ho_1 = get_EmptyIntArray();
    this.io_1 = 0;
    this.jo_1 = 0;
  }
  protoOf(IntSet).nm = function () {
    return this.io_1;
  };
  protoOf(IntSet).ii = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.io_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.go_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$4);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.ho_1[index] === element) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(IntSet).pm = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      // Inline function 'androidx.collection.IntSet.joinToString.<anonymous>' call
      this_0.f(prefix);
      var index = 0;
      // Inline function 'androidx.collection.IntSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.ho_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.go_1;
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
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.IntSet.forEach.<anonymous>' call
                    // Inline function 'androidx.collection.IntSet.joinToString.<anonymous>.<anonymous>' call
                    var element = k[index_0];
                    if (index === limit) {
                      this_0.f(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.f(separator);
                    }
                    this_0.ec(element);
                    index = index + 1 | 0;
                  }
                  slot = slot.i3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntSet).ko = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.pm(separator, prefix, postfix, limit, truncated) : $super.pm.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.ho_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.go_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntSet.hashCode.<anonymous>' call
                  hash = hash + k[index] | 0;
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
    return hash;
  };
  protoOf(IntSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntSet)) {
      return false;
    }
    if (!(other.jo_1 === this.jo_1)) {
      return false;
    }
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.ho_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.go_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.IntSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.IntSet.equals.<anonymous>' call
                  var element = k[index];
                  if (!other.ii(element)) {
                    return false;
                  }
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
    return true;
  };
  protoOf(IntSet).toString = function () {
    return this.ko(VOID, '[', ']');
  };
  function initializeStorage_2($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.io_1 = newCapacity;
    initializeMetadata_2($this, newCapacity);
    $this.ho_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_2($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableIntSet.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.go_1 = tmp_0;
    var tmp2 = $this.go_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth_2($this);
  }
  function initializeGrowth_2($this) {
    $this.po_1 = loadedCapacity($this.nm()) - $this.jo_1 | 0;
  }
  function findAbsoluteInsertIndex_0($this, element) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(element, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.io_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.go_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$4);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.ho_1[index] === element) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_1($this, hash1);
    var tmp_0;
    if ($this.po_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.go_1[offset_0 >> 3].i3((offset_0 & 7) << 3).k3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_1($this);
      index_0 = findFirstAvailableSlot_1($this, hash1);
    }
    $this.jo_1 = $this.jo_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.po_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.go_1[offset_1 >> 3].i3((offset_1 & 7) << 3).k3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.po_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableIntSet.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.go_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    var c = $this.io_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].k3((new Long(255, 0)).h3(b_1).g3()).l3(value.h3(b_1));
    return index_0;
  }
  function findFirstAvailableSlot_1($this, hash1) {
    var probeMask = $this.io_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.go_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].j3(b).l3(tmp0[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.k3(g.g3().h3(7)).k3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_1($this) {
    var tmp;
    if ($this.io_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.jo_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).a3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.io_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).a3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_1($this, nextCapacity($this.io_1));
    } else {
      resizeStorage_1($this, nextCapacity($this.io_1));
    }
  }
  function resizeStorage_1($this, newCapacity) {
    var previousMetadata = $this.go_1;
    var previousElements = $this.ho_1;
    var previousCapacity = $this.io_1;
    initializeStorage_2($this, newCapacity);
    var newElements = $this.ho_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].i3((i & 7) << 3).k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousElement, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_1($this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableIntSet.writeMetadata' call
          var value = toLong(tmp$ret$4);
          var m = $this.go_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
          var c = $this.io_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableIntSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntSet.call(this);
    this.po_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableIntSet.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_2(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntSet).on = function (element) {
    var oldSize = this.jo_1;
    var index = findAbsoluteInsertIndex_0(this, element);
    this.ho_1[index] = element;
    return !(this.jo_1 === oldSize);
  };
  var properties_initialized_IntSet_kt_za7tcl;
  function _init_properties_IntSet_kt__km4dgt() {
    if (!properties_initialized_IntSet_kt_za7tcl) {
      properties_initialized_IntSet_kt_za7tcl = true;
      EmptyIntSet = new MutableIntSet(0);
      EmptyIntArray = new Int32Array(0);
    }
  }
  function initializeStorage_3($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.to_1 = newCapacity;
    initializeMetadata_3($this, newCapacity);
    $this.ro_1 = longArray(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.so_1 = fillArrayVal(Array(newCapacity), null);
  }
  function initializeMetadata_3($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableLongObjectMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.qo_1 = tmp_0;
    var tmp2 = $this.qo_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth_3($this);
  }
  function initializeGrowth_3($this) {
    $this.ap_1 = loadedCapacity($this.nm()) - $this.uo_1 | 0;
  }
  function findAbsoluteInsertIndex_1($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key.hashCode(), -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.to_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.qo_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$4);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.ro_1[index].equals(key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_2($this, hash1);
    var tmp_0;
    if ($this.ap_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.qo_1[offset_0 >> 3].i3((offset_0 & 7) << 3).k3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_2($this);
      index_0 = findFirstAvailableSlot_2($this, hash1);
    }
    $this.uo_1 = $this.uo_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.ap_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.qo_1[offset_1 >> 3].i3((offset_1 & 7) << 3).k3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.ap_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableLongObjectMap.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.qo_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    var c = $this.to_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].k3((new Long(255, 0)).h3(b_1).g3()).l3(value.h3(b_1));
    return index_0;
  }
  function findFirstAvailableSlot_2($this, hash1) {
    var probeMask = $this.to_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.qo_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].j3(b).l3(tmp0[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.k3(g.g3().h3(7)).k3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_2($this) {
    var tmp;
    if ($this.to_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.uo_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).a3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.to_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).a3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_2($this, nextCapacity($this.to_1));
    } else {
      resizeStorage_2($this, nextCapacity($this.to_1));
    }
  }
  function resizeStorage_2($this, newCapacity) {
    var previousMetadata = $this.qo_1;
    var previousKeys = $this.ro_1;
    var previousValues = $this.so_1;
    var previousCapacity = $this.to_1;
    initializeStorage_3($this, newCapacity);
    var newKeys = $this.ro_1;
    var newValues = $this.so_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].i3((i & 7) << 3).k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey.hashCode(), -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_2($this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableLongObjectMap.writeMetadata' call
          var value = toLong(tmp$ret$4);
          var m = $this.qo_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
          var c = $this.to_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableLongObjectMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    LongObjectMap.call(this);
    this.ap_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableLongObjectMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_3(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableLongObjectMap).bp = function (key, value) {
    var index = findAbsoluteInsertIndex_1(this, key);
    this.ro_1[index] = key;
    this.so_1[index] = value;
  };
  protoOf(MutableLongObjectMap).f2 = function () {
    this.uo_1 = 0;
    if (!(this.qo_1 === get_EmptyGroup())) {
      fill(this.qo_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.qo_1;
      var tmp1 = this.to_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp1 >> 3;
      var b = (tmp1 & 7) << 3;
      tmp0[i] = tmp0[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    }
    fill_0(this.so_1, null, 0, this.to_1);
    initializeGrowth_3(this);
  };
  function LongObjectMap() {
    this.qo_1 = get_EmptyGroup();
    this.ro_1 = get_EmptyLongArray();
    this.so_1 = get_EMPTY_OBJECTS();
    this.to_1 = 0;
    this.uo_1 = 0;
  }
  protoOf(LongObjectMap).nm = function () {
    return this.to_1;
  };
  protoOf(LongObjectMap).n = function () {
    return this.uo_1;
  };
  protoOf(LongObjectMap).q = function () {
    return this.uo_1 === 0;
  };
  protoOf(LongObjectMap).cp = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.to_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.qo_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$4);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.ro_1[index].equals(key)) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    var tmp_0;
    if (index_0 >= 0) {
      var tmp_1 = this.so_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(LongObjectMap).dp = function (key) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.to_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.qo_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$4);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.ro_1[index].equals(key)) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(LongObjectMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.LongObjectMap.forEach' call
    var k = this.ro_1;
    var v = this.so_1;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.forEachIndexed' call
      var m = this.qo_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.LongObjectMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  var tmp = v[index];
                  // Inline function 'androidx.collection.LongObjectMap.hashCode.<anonymous>' call
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = hash;
                  var tmp_1 = tmp1.hashCode();
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = value == null ? null : hashCode(value);
                  hash = tmp_0 + (tmp_1 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
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
    return hash;
  };
  protoOf(LongObjectMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LongObjectMap)) {
      return false;
    }
    if (!(other.n() === this.n())) {
      return false;
    }
    // Inline function 'androidx.collection.LongObjectMap.forEach' call
    var k = this.ro_1;
    var v = this.so_1;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.forEachIndexed' call
      var m = this.qo_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.LongObjectMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  var tmp = v[index];
                  // Inline function 'androidx.collection.LongObjectMap.equals.<anonymous>' call
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (value == null) {
                    if (!(other.cp(tmp1) == null) || !other.dp(tmp1)) {
                      return false;
                    }
                  } else if (!equals(value, other.cp(tmp1))) {
                    return false;
                  }
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
    return true;
  };
  protoOf(LongObjectMap).toString = function () {
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().p8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.LongObjectMap.forEach' call
    var k = this.ro_1;
    var v = this.so_1;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.forEachIndexed' call
      var m = this.qo_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.LongObjectMap.forEach.<anonymous>' call
                  var tmp1 = k[index];
                  var tmp = v[index];
                  // Inline function 'androidx.collection.LongObjectMap.toString.<anonymous>' call
                  var value = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  s.fc(tmp1);
                  s.o8('=');
                  s.n8(value === this ? '(this)' : value);
                  i = i + 1 | 0;
                  if (i < this.uo_1) {
                    s.p8(_Char___init__impl__6a9atx(44)).p8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.i3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.p8(_Char___init__impl__6a9atx(125)).toString();
  };
  var EmptyLongSet;
  function get_EmptyLongArray() {
    _init_properties_LongSet_kt__wt9fxo();
    return EmptyLongArray;
  }
  var EmptyLongArray;
  function LongSet() {
    this.ep_1 = get_EmptyGroup();
    this.fp_1 = get_EmptyLongArray();
    this.gp_1 = 0;
    this.hp_1 = 0;
  }
  protoOf(LongSet).nm = function () {
    return this.gp_1;
  };
  protoOf(LongSet).ip = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.gp_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.ep_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$4);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.fp_1[index].equals(element)) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    return tmp$ret$9 >= 0;
  };
  protoOf(LongSet).pm = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      // Inline function 'androidx.collection.LongSet.joinToString.<anonymous>' call
      this_0.f(prefix);
      var index = 0;
      // Inline function 'androidx.collection.LongSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.fp_1;
      $l$block_0: {
        // Inline function 'androidx.collection.LongSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.ep_1;
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
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.LongSet.forEach.<anonymous>' call
                    // Inline function 'androidx.collection.LongSet.joinToString.<anonymous>.<anonymous>' call
                    var element = k[index_0];
                    if (index === limit) {
                      this_0.f(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.f(separator);
                    }
                    this_0.fc(element);
                    index = index + 1 | 0;
                  }
                  slot = slot.i3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(LongSet).jp = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.pm(separator, prefix, postfix, limit, truncated) : $super.pm.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(LongSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.LongSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.fp_1;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.ep_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.LongSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.LongSet.hashCode.<anonymous>' call
                  hash = hash + k[index].hashCode() | 0;
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
    return hash;
  };
  protoOf(LongSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LongSet)) {
      return false;
    }
    if (!(other.hp_1 === this.hp_1)) {
      return false;
    }
    // Inline function 'androidx.collection.LongSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.fp_1;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.ep_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.LongSet.forEach.<anonymous>' call
                  // Inline function 'androidx.collection.LongSet.equals.<anonymous>' call
                  var element = k[index];
                  if (!other.ip(element)) {
                    return false;
                  }
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
    return true;
  };
  protoOf(LongSet).toString = function () {
    return this.jp(VOID, '[', ']');
  };
  function initializeStorage_4($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.gp_1 = newCapacity;
    initializeMetadata_4($this, newCapacity);
    $this.fp_1 = longArray(newCapacity);
  }
  function initializeMetadata_4($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableLongSet.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.ep_1 = tmp_0;
    var tmp2 = $this.ep_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth_4($this);
  }
  function initializeGrowth_4($this) {
    $this.op_1 = loadedCapacity($this.nm()) - $this.hp_1 | 0;
  }
  function removeElementAt($this, index) {
    $this.hp_1 = $this.hp_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableLongSet.writeMetadata' call
    var value = new Long(254, 0);
    var m = $this.ep_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    var c = $this.gp_1;
    var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
  }
  function findAbsoluteInsertIndex_2($this, element) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(element.hashCode(), -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.gp_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.ep_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$4);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if ($this.fp_1[index].equals(element)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_3($this, hash1);
    var tmp_0;
    if ($this.op_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.ep_1[offset_0 >> 3].i3((offset_0 & 7) << 3).k3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_3($this);
      index_0 = findFirstAvailableSlot_3($this, hash1);
    }
    $this.hp_1 = $this.hp_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.op_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.ep_1[offset_1 >> 3].i3((offset_1 & 7) << 3).k3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.op_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableLongSet.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.ep_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    var c = $this.gp_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].k3((new Long(255, 0)).h3(b_1).g3()).l3(value.h3(b_1));
    return index_0;
  }
  function findFirstAvailableSlot_3($this, hash1) {
    var probeMask = $this.gp_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.ep_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].j3(b).l3(tmp0[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.k3(g.g3().h3(7)).k3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_3($this) {
    var tmp;
    if ($this.gp_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.hp_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).a3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.gp_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).a3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_3($this, nextCapacity($this.gp_1));
    } else {
      resizeStorage_3($this, nextCapacity($this.gp_1));
    }
  }
  function resizeStorage_3($this, newCapacity) {
    var previousMetadata = $this.ep_1;
    var previousElements = $this.fp_1;
    var previousCapacity = $this.gp_1;
    initializeStorage_4($this, newCapacity);
    var newElements = $this.fp_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].i3((i & 7) << 3).k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousElement.hashCode(), -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_3($this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableLongSet.writeMetadata' call
          var value = toLong(tmp$ret$4);
          var m = $this.ep_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
          var c = $this.gp_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableLongSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    LongSet.call(this);
    this.op_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableLongSet.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_4(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableLongSet).pp = function (element) {
    var index = findAbsoluteInsertIndex_2(this, element);
    this.fp_1[index] = element;
  };
  protoOf(MutableLongSet).qp = function (element) {
    var tmp$ret$9;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.gp_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.ep_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$4 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$4);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (this.fp_1[index].equals(element)) {
            tmp$ret$9 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$9 = -1;
    }
    var index_0 = tmp$ret$9;
    var exists = index_0 >= 0;
    if (exists) {
      removeElementAt(this, index_0);
    }
    return exists;
  };
  var properties_initialized_LongSet_kt_r3x9iu;
  function _init_properties_LongSet_kt__wt9fxo() {
    if (!properties_initialized_LongSet_kt_r3x9iu) {
      properties_initialized_LongSet_kt_r3x9iu = true;
      EmptyLongSet = new MutableLongSet(0);
      EmptyLongArray = longArray(0);
    }
  }
  function get_DELETED() {
    _init_properties_LongSparseArray_kt__ucg8tx();
    return DELETED;
  }
  var DELETED;
  function access$_get_DELETED_$tLongSparseArrayKt_9psy8u() {
    return get_DELETED();
  }
  var properties_initialized_LongSparseArray_kt_xmlmcz;
  function _init_properties_LongSparseArray_kt__ucg8tx() {
    if (!properties_initialized_LongSparseArray_kt_xmlmcz) {
      properties_initialized_LongSparseArray_kt_xmlmcz = true;
      DELETED = new Object();
    }
  }
  function initializeStorage_5($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.up_1 = newCapacity;
    initializeMetadata_5($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.sp_1 = fillArrayVal(Array(newCapacity), null);
    $this.tp_1 = new Float32Array(newCapacity);
  }
  function initializeMetadata_5($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableObjectFloatMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.rp_1 = tmp_0;
    var tmp2 = $this.rp_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth_5($this);
  }
  function initializeGrowth_5($this) {
    $this.bq_1 = loadedCapacity($this.nm()) - $this.vp_1 | 0;
  }
  function findIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.up_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.rp_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$5);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals($this.sp_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_4($this, hash1);
    var tmp_0;
    if ($this.bq_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.rp_1[offset_0 >> 3].i3((offset_0 & 7) << 3).k3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_4($this);
      index_0 = findFirstAvailableSlot_4($this, hash1);
    }
    $this.vp_1 = $this.vp_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.bq_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.rp_1[offset_1 >> 3].i3((offset_1 & 7) << 3).k3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.bq_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableObjectFloatMap.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.rp_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    var c = $this.up_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].k3((new Long(255, 0)).h3(b_1).g3()).l3(value.h3(b_1));
    return ~index_0;
  }
  function findFirstAvailableSlot_4($this, hash1) {
    var probeMask = $this.up_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.rp_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].j3(b).l3(tmp0[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.k3(g.g3().h3(7)).k3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_4($this) {
    var tmp;
    if ($this.up_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.vp_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).a3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.up_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).a3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_4($this, nextCapacity($this.up_1));
    } else {
      resizeStorage_4($this, nextCapacity($this.up_1));
    }
  }
  function resizeStorage_4($this, newCapacity) {
    var previousMetadata = $this.rp_1;
    var previousKeys = $this.sp_1;
    var previousValues = $this.tp_1;
    var previousCapacity = $this.up_1;
    initializeStorage_5($this, newCapacity);
    var newKeys = $this.sp_1;
    var newValues = $this.tp_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].i3((i & 7) << 3).k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_4($this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableObjectFloatMap.writeMetadata' call
          var value = toLong(tmp$ret$5);
          var m = $this.rp_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
          var c = $this.up_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableObjectFloatMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ObjectFloatMap.call(this);
    this.bq_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableObjectFloatMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_5(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableObjectFloatMap).cq = function (key, value) {
    var index = findIndex(this, key);
    if (index < 0)
      index = ~index;
    this.sp_1[index] = key;
    this.tp_1[index] = value;
  };
  protoOf(MutableObjectFloatMap).dq = function (from) {
    // Inline function 'androidx.collection.ObjectFloatMap.forEach' call
    var k = from.sp_1;
    var v = from.tp_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectFloatMap.forEachIndexed' call
      var m = from.rp_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectFloatMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  // Inline function 'androidx.collection.MutableObjectFloatMap.putAll.<anonymous>' call
                  var value = v[index];
                  this.cq(tmp1, value);
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
  };
  protoOf(MutableObjectFloatMap).f2 = function () {
    this.vp_1 = 0;
    if (!(this.rp_1 === get_EmptyGroup())) {
      fill(this.rp_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.rp_1;
      var tmp1 = this.up_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp1 >> 3;
      var b = (tmp1 & 7) << 3;
      tmp0[i] = tmp0[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    }
    fill_0(this.sp_1, null, 0, this.up_1);
    initializeGrowth_5(this);
  };
  function ObjectFloatMap() {
    this.rp_1 = get_EmptyGroup();
    this.sp_1 = get_EMPTY_OBJECTS();
    this.tp_1 = get_EmptyFloatArray();
    this.up_1 = 0;
    this.vp_1 = 0;
  }
  protoOf(ObjectFloatMap).nm = function () {
    return this.up_1;
  };
  protoOf(ObjectFloatMap).n = function () {
    return this.vp_1;
  };
  protoOf(ObjectFloatMap).q = function () {
    return this.vp_1 === 0;
  };
  protoOf(ObjectFloatMap).l2 = function (key) {
    var index = this.fq(key);
    if (index < 0) {
      throw NoSuchElementException_init_$Create$('There is no key ' + toString_0(key) + ' in the map');
    }
    return this.tp_1[index];
  };
  protoOf(ObjectFloatMap).eq = function (key, defaultValue) {
    var index = this.fq(key);
    if (index >= 0) {
      return this.tp_1[index];
    }
    return defaultValue;
  };
  protoOf(ObjectFloatMap).a6 = function (key) {
    return this.fq(key) >= 0;
  };
  protoOf(ObjectFloatMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ObjectFloatMap.forEach' call
    var k = this.sp_1;
    var v = this.tp_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectFloatMap.forEachIndexed' call
      var m = this.rp_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectFloatMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  // Inline function 'androidx.collection.ObjectFloatMap.hashCode.<anonymous>' call
                  var value = v[index];
                  var tmp_0 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = tmp1 == null ? null : hashCode(tmp1);
                  hash = tmp_0 + ((tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) ^ getNumberHashCode(value)) | 0;
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
    return hash;
  };
  protoOf(ObjectFloatMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ObjectFloatMap)) {
      return false;
    }
    if (!(other.n() === this.n())) {
      return false;
    }
    var o = other instanceof ObjectFloatMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ObjectFloatMap.forEach' call
    var k = this.sp_1;
    var v = this.tp_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectFloatMap.forEachIndexed' call
      var m = this.rp_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectFloatMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  // Inline function 'androidx.collection.ObjectFloatMap.equals.<anonymous>' call
                  if (!(v[index] === o.l2(tmp1))) {
                    return false;
                  }
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
    return true;
  };
  protoOf(ObjectFloatMap).toString = function () {
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().p8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ObjectFloatMap.forEach' call
    var k = this.sp_1;
    var v = this.tp_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectFloatMap.forEachIndexed' call
      var m = this.rp_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectFloatMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  // Inline function 'androidx.collection.ObjectFloatMap.toString.<anonymous>' call
                  var value = v[index];
                  s.n8(tmp1 === this ? '(this)' : tmp1);
                  s.o8('=');
                  s.gc(value);
                  i = i + 1 | 0;
                  if (i < this.vp_1) {
                    s.p8(_Char___init__impl__6a9atx(44)).p8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.i3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.p8(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ObjectFloatMap).fq = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.up_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = this.rp_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$5);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals(this.sp_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function get_EmptyObjectIntMap() {
    _init_properties_ObjectIntMap_kt__tjeyss();
    return EmptyObjectIntMap;
  }
  var EmptyObjectIntMap;
  function initializeStorage_6($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.jq_1 = newCapacity;
    initializeMetadata_6($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.hq_1 = fillArrayVal(Array(newCapacity), null);
    $this.iq_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_6($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableObjectIntMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.gq_1 = tmp_0;
    var tmp2 = $this.gq_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth_6($this);
  }
  function initializeGrowth_6($this) {
    $this.qq_1 = loadedCapacity($this.nm()) - $this.kq_1 | 0;
  }
  function findIndex_0($this, key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.jq_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.gq_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$5);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals($this.hq_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_5($this, hash1);
    var tmp_0;
    if ($this.qq_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.gq_1[offset_0 >> 3].i3((offset_0 & 7) << 3).k3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_5($this);
      index_0 = findFirstAvailableSlot_5($this, hash1);
    }
    $this.kq_1 = $this.kq_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.qq_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.gq_1[offset_1 >> 3].i3((offset_1 & 7) << 3).k3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.qq_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableObjectIntMap.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.gq_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    var c = $this.jq_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].k3((new Long(255, 0)).h3(b_1).g3()).l3(value.h3(b_1));
    return ~index_0;
  }
  function findFirstAvailableSlot_5($this, hash1) {
    var probeMask = $this.jq_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.gq_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].j3(b).l3(tmp0[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.k3(g.g3().h3(7)).k3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_5($this) {
    var tmp;
    if ($this.jq_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.kq_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).a3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.jq_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).a3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_5($this, nextCapacity($this.jq_1));
    } else {
      resizeStorage_5($this, nextCapacity($this.jq_1));
    }
  }
  function resizeStorage_5($this, newCapacity) {
    var previousMetadata = $this.gq_1;
    var previousKeys = $this.hq_1;
    var previousValues = $this.iq_1;
    var previousCapacity = $this.jq_1;
    initializeStorage_6($this, newCapacity);
    var newKeys = $this.hq_1;
    var newValues = $this.iq_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].i3((i & 7) << 3).k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_5($this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableObjectIntMap.writeMetadata' call
          var value = toLong(tmp$ret$5);
          var m = $this.gq_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
          var c = $this.jq_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableObjectIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ObjectIntMap.call(this);
    this.qq_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableObjectIntMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_6(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableObjectIntMap).rq = function (key, value) {
    var index = findIndex_0(this, key);
    if (index < 0)
      index = ~index;
    this.hq_1[index] = key;
    this.iq_1[index] = value;
  };
  protoOf(MutableObjectIntMap).sq = function (key, value, default_0) {
    var index = findIndex_0(this, key);
    var previous = default_0;
    if (index < 0) {
      index = ~index;
    } else {
      previous = this.iq_1[index];
    }
    this.hq_1[index] = key;
    this.iq_1[index] = value;
    return previous;
  };
  protoOf(MutableObjectIntMap).tq = function (index) {
    this.kq_1 = this.kq_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableObjectIntMap.writeMetadata' call
    var value = new Long(254, 0);
    var m = this.gq_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    var c = this.jq_1;
    var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    this.hq_1[index] = null;
  };
  function ObjectIntMap() {
    this.gq_1 = get_EmptyGroup();
    this.hq_1 = get_EMPTY_OBJECTS();
    this.iq_1 = get_EmptyIntArray();
    this.jq_1 = 0;
    this.kq_1 = 0;
  }
  protoOf(ObjectIntMap).nm = function () {
    return this.jq_1;
  };
  protoOf(ObjectIntMap).n = function () {
    return this.kq_1;
  };
  protoOf(ObjectIntMap).q = function () {
    return this.kq_1 === 0;
  };
  protoOf(ObjectIntMap).uq = function () {
    return !(this.kq_1 === 0);
  };
  protoOf(ObjectIntMap).l2 = function (key) {
    var index = this.fq(key);
    if (index < 0) {
      throw NoSuchElementException_init_$Create$('There is no key ' + toString_0(key) + ' in the map');
    }
    return this.iq_1[index];
  };
  protoOf(ObjectIntMap).vq = function (key, defaultValue) {
    var index = this.fq(key);
    if (index >= 0) {
      return this.iq_1[index];
    }
    return defaultValue;
  };
  protoOf(ObjectIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.hq_1;
    var v = this.iq_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.gq_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  // Inline function 'androidx.collection.ObjectIntMap.hashCode.<anonymous>' call
                  var tmp_0 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = tmp1 == null ? null : hashCode(tmp1);
                  hash = tmp_0 + ((tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) ^ v[index]) | 0;
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
    return hash;
  };
  protoOf(ObjectIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ObjectIntMap)) {
      return false;
    }
    if (!(other.n() === this.n())) {
      return false;
    }
    var o = other instanceof ObjectIntMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.hq_1;
    var v = this.iq_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.gq_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  // Inline function 'androidx.collection.ObjectIntMap.equals.<anonymous>' call
                  if (!(v[index] === o.l2(tmp1))) {
                    return false;
                  }
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
    return true;
  };
  protoOf(ObjectIntMap).toString = function () {
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().p8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.hq_1;
    var v = this.iq_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.gq_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ObjectIntMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  // Inline function 'androidx.collection.ObjectIntMap.toString.<anonymous>' call
                  var value = v[index];
                  s.n8(tmp1 === this ? '(this)' : tmp1);
                  s.o8('=');
                  s.ec(value);
                  i = i + 1 | 0;
                  if (i < this.kq_1) {
                    s.p8(_Char___init__impl__6a9atx(44)).p8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.i3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.p8(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ObjectIntMap).fq = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.jq_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = this.gq_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$5);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals(this.hq_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function mutableObjectIntMapOf() {
    _init_properties_ObjectIntMap_kt__tjeyss();
    return new MutableObjectIntMap();
  }
  function emptyObjectIntMap() {
    _init_properties_ObjectIntMap_kt__tjeyss();
    var tmp = get_EmptyObjectIntMap();
    return tmp instanceof ObjectIntMap ? tmp : THROW_CCE();
  }
  var properties_initialized_ObjectIntMap_kt_ycqxma;
  function _init_properties_ObjectIntMap_kt__tjeyss() {
    if (!properties_initialized_ObjectIntMap_kt_ycqxma) {
      properties_initialized_ObjectIntMap_kt_ycqxma = true;
      EmptyObjectIntMap = new MutableObjectIntMap(0);
    }
  }
  function get_EmptyArray() {
    _init_properties_ObjectList_kt__fnapct();
    return EmptyArray;
  }
  var EmptyArray;
  var EmptyObjectList;
  function ObjectList$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString_0(element);
      }
      return tmp;
    };
  }
  function ObjectList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyArray();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_0 = fillArrayVal(Array(initialCapacity), null);
    }
    tmp.wq_1 = tmp_0;
    this.xq_1 = 0;
  }
  protoOf(ObjectList).n = function () {
    return this.xq_1;
  };
  protoOf(ObjectList).m = function (element) {
    return this.r(element) >= 0;
  };
  protoOf(ObjectList).r = function (element) {
    if (element == null) {
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.wq_1;
      var inductionVariable = 0;
      var last = this.xq_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = content[i];
          // Inline function 'androidx.collection.ObjectList.indexOf.<anonymous>' call
          if (((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE()) == null) {
            return i;
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content_0 = this.wq_1;
      var inductionVariable_0 = 0;
      var last_0 = this.xq_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp_0 = content_0[i_0];
          // Inline function 'androidx.collection.ObjectList.indexOf.<anonymous>' call
          var item = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
          if (equals(element, item)) {
            return i_0;
          }
        }
         while (inductionVariable_0 < last_0);
    }
    return -1;
  };
  protoOf(ObjectList).q = function () {
    return this.xq_1 === 0;
  };
  protoOf(ObjectList).uq = function () {
    return !(this.xq_1 === 0);
  };
  protoOf(ObjectList).yq = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      // Inline function 'androidx.collection.ObjectList.joinToString.<anonymous>' call
      this_0.f(prefix);
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.wq_1;
      var inductionVariable = 0;
      var last = this.xq_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp = content[i];
          // Inline function 'androidx.collection.ObjectList.joinToString.<anonymous>.<anonymous>' call
          var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
          if (i === limit) {
            this_0.f(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.f(separator);
          }
          if (transform == null) {
            this_0.n8(element);
          } else {
            this_0.f(transform(element));
          }
        }
         while (inductionVariable < last);
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(ObjectList).zq = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.yq(separator, prefix, postfix, limit, truncated, transform) : $super.yq.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ObjectList).hashCode = function () {
    var hashCode_0 = 0;
    // Inline function 'androidx.collection.ObjectList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.wq_1;
    var inductionVariable = 0;
    var last = this.xq_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = content[i];
        // Inline function 'androidx.collection.ObjectList.hashCode.<anonymous>' call
        var tmp_0 = hashCode_0;
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
        var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        hashCode_0 = tmp_0 + imul(31, tmp$ret$0) | 0;
      }
       while (inductionVariable < last);
    return hashCode_0;
  };
  protoOf(ObjectList).equals = function (other) {
    var tmp;
    if (!(other instanceof ObjectList)) {
      tmp = true;
    } else {
      tmp = !(other.xq_1 === this.xq_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.wq_1;
    var otherContent = other.wq_1;
    // Inline function 'androidx.collection.ObjectList.indices' call
    var progression = until(0, this.xq_1);
    var inductionVariable = progression.b1_1;
    var last = progression.c1_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(content[i], otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(ObjectList).toString = function () {
    return this.zq(VOID, '[', ']', VOID, VOID, ObjectList$toString$lambda(this));
  };
  function MutableObjectList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    ObjectList.call(this, initialCapacity);
    this.cr_1 = null;
  }
  protoOf(MutableObjectList).e = function (element) {
    this.pn(this.xq_1 + 1 | 0);
    this.wq_1[this.xq_1] = element;
    this.xq_1 = this.xq_1 + 1 | 0;
    return true;
  };
  protoOf(MutableObjectList).f2 = function () {
    fill_0(this.wq_1, null, 0, this.xq_1);
    this.xq_1 = 0;
  };
  protoOf(MutableObjectList).pn = function (capacity) {
    var oldContent = this.wq_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.wq_1 = copyOf_0(oldContent, newSize);
    }
  };
  var properties_initialized_ObjectList_kt_7isazj;
  function _init_properties_ObjectList_kt__fnapct() {
    if (!properties_initialized_ObjectList_kt_7isazj) {
      properties_initialized_ObjectList_kt_7isazj = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EmptyArray = fillArrayVal(Array(0), null);
      EmptyObjectList = new MutableObjectList(0);
    }
  }
  function get_EmptyGroup() {
    _init_properties_ScatterMap_kt__cygxb2();
    return EmptyGroup;
  }
  var EmptyGroup;
  var EmptyScatterMap;
  function unloadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (true && capacity === 7) {
      return 8;
    }
    return capacity + ((capacity - 1 | 0) / 7 | 0) | 0;
  }
  function normalizeCapacity(n) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (n > 0) {
      // Inline function 'kotlin.countLeadingZeroBits' call
      tmp = -1 >>> clz32(n) | 0;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function loadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (true && capacity === 7) {
      return 6;
    }
    return capacity - (capacity / 8 | 0) | 0;
  }
  function nextCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (capacity === 0) {
      tmp = 6;
    } else {
      tmp = imul(capacity, 2) + 1 | 0;
    }
    return tmp;
  }
  function initializeStorage_7($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.math.max' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.gr_1 = newCapacity;
    initializeMetadata_7($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.er_1 = fillArrayVal(Array(newCapacity), null);
    var tmp_1 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_1.fr_1 = fillArrayVal(Array(newCapacity), null);
  }
  function initializeMetadata_7($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableScatterMap.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.dr_1 = tmp_0;
    var tmp2 = $this.dr_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth_7($this);
  }
  function initializeGrowth_7($this) {
    $this.nr_1 = loadedCapacity($this.nm()) - $this.hr_1 | 0;
  }
  function findFirstAvailableSlot_6($this, hash1) {
    var probeMask = $this.gr_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.dr_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].j3(b).l3(tmp0[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.k3(g.g3().h3(7)).k3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_6($this) {
    var tmp;
    if ($this.gr_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.hr_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).a3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.gr_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).a3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_6($this, nextCapacity($this.gr_1));
    } else {
      resizeStorage_6($this, nextCapacity($this.gr_1));
    }
  }
  function resizeStorage_6($this, newCapacity) {
    var previousMetadata = $this.dr_1;
    var previousKeys = $this.er_1;
    var previousValues = $this.fr_1;
    var previousCapacity = $this.gr_1;
    initializeStorage_7($this, newCapacity);
    var newKeys = $this.er_1;
    var newValues = $this.fr_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].i3((i & 7) << 3).k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_6($this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableScatterMap.writeMetadata' call
          var value = toLong(tmp$ret$5);
          var m = $this.dr_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
          var c = $this.gr_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableScatterMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterMap.call(this);
    this.nr_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableScatterMap.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_7(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterMap).or = function (key, value) {
    // Inline function 'kotlin.let' call
    // Inline function 'androidx.collection.MutableScatterMap.set.<anonymous>' call
    var index = this.pr(key);
    var index_0 = index < 0 ? ~index : index;
    this.er_1[index_0] = key;
    this.fr_1[index_0] = value;
  };
  protoOf(MutableScatterMap).p2 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.gr_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.dr_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$5);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.er_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    if (index_0 >= 0) {
      return this.eo(index_0);
    }
    return null;
  };
  protoOf(MutableScatterMap).eo = function (index) {
    this.hr_1 = this.hr_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableScatterMap.writeMetadata' call
    var value = new Long(254, 0);
    var m = this.dr_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    var c = this.gr_1;
    var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    this.er_1[index] = null;
    var oldValue = this.fr_1[index];
    this.fr_1[index] = null;
    return (oldValue == null ? true : !(oldValue == null)) ? oldValue : THROW_CCE();
  };
  protoOf(MutableScatterMap).f2 = function () {
    this.hr_1 = 0;
    if (!(this.dr_1 === get_EmptyGroup())) {
      fill(this.dr_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.dr_1;
      var tmp1 = this.gr_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp1 >> 3;
      var b = (tmp1 & 7) << 3;
      tmp0[i] = tmp0[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    }
    fill_0(this.fr_1, null, 0, this.gr_1);
    fill_0(this.er_1, null, 0, this.gr_1);
    initializeGrowth_7(this);
  };
  protoOf(MutableScatterMap).pr = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.gr_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = this.dr_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$5);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals(this.er_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_6(this, hash1);
    var tmp_0;
    if (this.nr_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !this.dr_1[offset_0 >> 3].i3((offset_0 & 7) << 3).k3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_6(this);
      index_0 = findFirstAvailableSlot_6(this, hash1);
    }
    this.hr_1 = this.hr_1 + 1 | 0;
    var tmp_1 = this;
    var tmp_2 = this.nr_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if (this.dr_1[offset_1 >> 3].i3((offset_1 & 7) << 3).k3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.nr_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableScatterMap.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = this.dr_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    var c = this.gr_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].k3((new Long(255, 0)).h3(b_1).g3()).l3(value.h3(b_1));
    return ~index_0;
  };
  function ScatterMap() {
    this.dr_1 = get_EmptyGroup();
    this.er_1 = get_EMPTY_OBJECTS();
    this.fr_1 = get_EMPTY_OBJECTS();
    this.gr_1 = 0;
    this.hr_1 = 0;
  }
  protoOf(ScatterMap).nm = function () {
    return this.gr_1;
  };
  protoOf(ScatterMap).n = function () {
    return this.hr_1;
  };
  protoOf(ScatterMap).q = function () {
    return this.hr_1 === 0;
  };
  protoOf(ScatterMap).uq = function () {
    return !(this.hr_1 === 0);
  };
  protoOf(ScatterMap).l2 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.gr_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.dr_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$5);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.er_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    var tmp_0;
    if (index_0 >= 0) {
      var tmp_1 = this.fr_1[index_0];
      tmp_0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = null;
    }
    return tmp_0;
  };
  protoOf(ScatterMap).j2 = function (key) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.gr_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.dr_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$5);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.er_1[index], key)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.er_1;
    var v = this.fr_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.dr_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
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
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  // Inline function 'androidx.collection.ScatterMap.hashCode.<anonymous>' call
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  var tmp_1 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = tmp1 == null ? null : hashCode(tmp1);
                  var tmp_2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs_0 = value == null ? null : hashCode(value);
                  hash = tmp_1 + (tmp_2 ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0)) | 0;
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
    return hash;
  };
  protoOf(ScatterMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterMap)) {
      return false;
    }
    if (!(other.n() === this.n())) {
      return false;
    }
    var o = other instanceof ScatterMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.er_1;
    var v = this.fr_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.dr_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
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
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  // Inline function 'androidx.collection.ScatterMap.equals.<anonymous>' call
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  if (value == null) {
                    if (!(o.l2(tmp1) == null) || !o.j2(tmp1)) {
                      return false;
                    }
                  } else if (!equals(value, o.l2(tmp1))) {
                    return false;
                  }
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
    return true;
  };
  protoOf(ScatterMap).toString = function () {
    if (this.q()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().p8(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.er_1;
    var v = this.fr_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.dr_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterMap.forEach.<anonymous>' call
                  var tmp = k[index];
                  var tmp1 = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp_0 = v[index];
                  // Inline function 'androidx.collection.ScatterMap.toString.<anonymous>' call
                  var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                  s.n8(tmp1 === this ? '(this)' : tmp1);
                  s.o8('=');
                  s.n8(value === this ? '(this)' : value);
                  i = i + 1 | 0;
                  if (i < this.hr_1) {
                    s.p8(_Char___init__impl__6a9atx(44)).p8(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = slot.i3(8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.p8(_Char___init__impl__6a9atx(125)).toString();
  };
  function mutableScatterMapOf() {
    _init_properties_ScatterMap_kt__cygxb2();
    return new MutableScatterMap();
  }
  var properties_initialized_ScatterMap_kt_apzngg;
  function _init_properties_ScatterMap_kt__cygxb2() {
    if (!properties_initialized_ScatterMap_kt_apzngg) {
      properties_initialized_ScatterMap_kt_apzngg = true;
      // Inline function 'kotlin.longArrayOf' call
      EmptyGroup = longArrayOf([new Long(-2139062017, -2139062144), new Long(-1, -1)]);
      EmptyScatterMap = new MutableScatterMap(0);
    }
  }
  var EmptyScatterSet;
  function ScatterSet$SetWrapper$iterator$slambda(this$0, resultContinuation) {
    this.yr_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ScatterSet$SetWrapper$iterator$slambda).ts = function ($this$iterator, $completion) {
    var tmp = this.us($this$iterator, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(ScatterSet$SetWrapper$iterator$slambda).ba = function (p1, $completion) {
    return this.ts(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ScatterSet$SetWrapper$iterator$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 11;
            var tmp_0 = this;
            tmp_0.as_1 = this.yr_1;
            this.bs_1 = this.as_1;
            this.cs_1 = this.bs_1.ws_1;
            var tmp_1 = this;
            tmp_1.ds_1 = this.bs_1;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.fs_1 = this.ds_1;
            this.gs_1 = this.fs_1.vs_1;
            this.hs_1 = this.gs_1.length - 2 | 0;
            this.is_1 = numberRangeToNumber(0, this.hs_1).j();
            this.h9_1 = 2;
            continue $sm;
          case 2:
            if (!this.is_1.k()) {
              this.h9_1 = 9;
              continue $sm;
            }

            this.js_1 = this.is_1.l();
            this.ks_1 = this.gs_1[this.js_1];
            var this_0 = this.ks_1;
            if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.ls_1 = 8 - (~(this.js_1 - this.hs_1 | 0) >>> 31 | 0) | 0;
              this.ms_1 = until(0, this.ls_1).j();
              this.h9_1 = 3;
              continue $sm;
            } else {
              this.h9_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.ms_1.k()) {
              this.h9_1 = 6;
              continue $sm;
            }

            this.ns_1 = this.ms_1.l();
            if (this.ks_1.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
              this.os_1 = (this.js_1 << 3) + this.ns_1 | 0;
              var tmp_2 = this;
              tmp_2.ps_1 = this.os_1;
              this.qs_1 = this.ps_1;
              var tmp_3 = this;
              var tmp_4 = this.cs_1[this.qs_1];
              tmp_3.rs_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
              this.ss_1 = this.rs_1;
              this.h9_1 = 4;
              suspendResult = this.zr_1.jg(this.ss_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 5;
              continue $sm;
            }

          case 4:
            this.h9_1 = 5;
            continue $sm;
          case 5:
            this.ks_1 = this.ks_1.i3(8);
            this.h9_1 = 3;
            continue $sm;
          case 6:
            if (!(this.ls_1 === 8)) {
              this.es_1 = Unit_instance;
              this.h9_1 = 10;
              continue $sm;
            } else {
              this.h9_1 = 7;
              continue $sm;
            }

          case 7:
            this.h9_1 = 8;
            continue $sm;
          case 8:
            this.h9_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.h9_1 = 1;
              continue $sm;
            }

            this.h9_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 11) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(ScatterSet$SetWrapper$iterator$slambda).us = function ($this$iterator, completion) {
    var i = new ScatterSet$SetWrapper$iterator$slambda(this.yr_1, completion);
    i.zr_1 = $this$iterator;
    return i;
  };
  function ScatterSet$SetWrapper$iterator$slambda_0(this$0, resultContinuation) {
    var i = new ScatterSet$SetWrapper$iterator$slambda(this$0, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.ts($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SetWrapper($outer) {
    this.zs_1 = $outer;
  }
  protoOf(SetWrapper).n = function () {
    return this.zs_1.ys_1;
  };
  protoOf(SetWrapper).c2 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'androidx.collection.SetWrapper.containsAll.<anonymous>' call
      if (!this.zs_1.m(element)) {
        return false;
      }
    }
    return true;
  };
  protoOf(SetWrapper).m = function (element) {
    return this.zs_1.m(element);
  };
  protoOf(SetWrapper).q = function () {
    return this.zs_1.q();
  };
  protoOf(SetWrapper).j = function () {
    return iterator(ScatterSet$SetWrapper$iterator$slambda_0(this.zs_1, null));
  };
  function ScatterSet$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString_0(element);
      }
      return tmp;
    };
  }
  function ScatterSet() {
    this.vs_1 = get_EmptyGroup();
    this.ws_1 = get_EMPTY_OBJECTS();
    this.xs_1 = 0;
    this.ys_1 = 0;
  }
  protoOf(ScatterSet).nm = function () {
    return this.xs_1;
  };
  protoOf(ScatterSet).n = function () {
    return this.ys_1;
  };
  protoOf(ScatterSet).q = function () {
    return this.ys_1 === 0;
  };
  protoOf(ScatterSet).uq = function () {
    return !(this.ys_1 === 0);
  };
  protoOf(ScatterSet).m = function (element) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.xs_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.vs_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$5);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.ws_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    return tmp$ret$10 >= 0;
  };
  protoOf(ScatterSet).yq = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.joinToString.<anonymous>' call
      this_0.f(prefix);
      var index = 0;
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.ws_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.vs_1;
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
                    var index_0 = (i << 3) + j | 0;
                    // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                    var tmp = k[index_0];
                    // Inline function 'androidx.collection.ScatterSet.joinToString.<anonymous>.<anonymous>' call
                    var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                    if (index === limit) {
                      this_0.f(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.f(separator);
                    }
                    if (transform == null) {
                      this_0.n8(element);
                    } else {
                      this_0.f(transform(element));
                    }
                    index = index + 1 | 0;
                  }
                  slot = slot.i3(8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.f(postfix);
    }
    return this_0.toString();
  };
  protoOf(ScatterSet).at = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.yq(separator, prefix, postfix, limit, truncated, transform) : $super.yq.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ScatterSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.ws_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.vs_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  var tmp = k[index];
                  // Inline function 'androidx.collection.ScatterSet.hashCode.<anonymous>' call
                  var tmp_0 = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp0_safe_receiver = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
                  hash = tmp_0 + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
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
    return hash;
  };
  protoOf(ScatterSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterSet)) {
      return false;
    }
    if (!(other.n() === this.n())) {
      return false;
    }
    var o = other instanceof ScatterSet ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.ws_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.vs_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  var tmp = k[index];
                  // Inline function 'androidx.collection.ScatterSet.equals.<anonymous>' call
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  if (!o.m(element)) {
                    return false;
                  }
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
    return true;
  };
  protoOf(ScatterSet).toString = function () {
    return this.at(VOID, '[', ']', VOID, VOID, ScatterSet$toString$lambda(this));
  };
  protoOf(ScatterSet).bt = function () {
    return new SetWrapper(this);
  };
  function MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation) {
    this.kt_1 = this$0;
    this.lt_1 = this$1;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).ts = function ($this$iterator, $completion) {
    var tmp = this.us($this$iterator, $completion);
    tmp.j9_1 = Unit_instance;
    tmp.k9_1 = null;
    return tmp.p9();
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).ba = function (p1, $completion) {
    return this.ts(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).p9 = function () {
    var suspendResult = this.j9_1;
    $sm: do
      try {
        var tmp = this.h9_1;
        switch (tmp) {
          case 0:
            this.i9_1 = 11;
            var tmp_0 = this;
            tmp_0.nt_1 = this.kt_1;
            this.h9_1 = 1;
            continue $sm;
          case 1:
            this.pt_1 = this.nt_1;
            this.qt_1 = this.pt_1.vs_1;
            this.rt_1 = this.qt_1.length - 2 | 0;
            this.st_1 = numberRangeToNumber(0, this.rt_1).j();
            this.h9_1 = 2;
            continue $sm;
          case 2:
            if (!this.st_1.k()) {
              this.h9_1 = 9;
              continue $sm;
            }

            this.tt_1 = this.st_1.l();
            this.ut_1 = this.qt_1[this.tt_1];
            var this_0 = this.ut_1;
            if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
              this.vt_1 = 8 - (~(this.tt_1 - this.rt_1 | 0) >>> 31 | 0) | 0;
              this.wt_1 = until(0, this.vt_1).j();
              this.h9_1 = 3;
              continue $sm;
            } else {
              this.h9_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.wt_1.k()) {
              this.h9_1 = 6;
              continue $sm;
            }

            this.xt_1 = this.wt_1.l();
            if (this.ut_1.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
              this.yt_1 = (this.tt_1 << 3) + this.xt_1 | 0;
              var tmp_1 = this;
              tmp_1.zt_1 = this.yt_1;
              this.au_1 = this.zt_1;
              this.lt_1.bu_1 = this.au_1;
              this.h9_1 = 4;
              var tmp_2 = this.kt_1.ws_1[this.au_1];
              suspendResult = this.mt_1.jg((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.h9_1 = 5;
              continue $sm;
            }

          case 4:
            this.h9_1 = 5;
            continue $sm;
          case 5:
            this.ut_1 = this.ut_1.i3(8);
            this.h9_1 = 3;
            continue $sm;
          case 6:
            if (!(this.vt_1 === 8)) {
              this.ot_1 = Unit_instance;
              this.h9_1 = 10;
              continue $sm;
            } else {
              this.h9_1 = 7;
              continue $sm;
            }

          case 7:
            this.h9_1 = 8;
            continue $sm;
          case 8:
            this.h9_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.h9_1 = 1;
              continue $sm;
            }

            this.h9_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.k9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.i9_1 === 11) {
          throw e;
        } else {
          this.h9_1 = this.i9_1;
          this.k9_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda).us = function ($this$iterator, completion) {
    var i = new MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda(this.kt_1, this.lt_1, completion);
    i.mt_1 = $this$iterator;
    return i;
  };
  function MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this$1, resultContinuation) {
    var i = new MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.ts($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function MutableScatterSet$MutableSetWrapper$iterator$1(this$0) {
    this.du_1 = this$0;
    this.bu_1 = -1;
    var tmp = this;
    tmp.cu_1 = iterator(MutableScatterSet$MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this, null));
  }
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$1).k = function () {
    return this.cu_1.k();
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$1).l = function () {
    return this.cu_1.l();
  };
  protoOf(MutableScatterSet$MutableSetWrapper$iterator$1).l4 = function () {
    if (!(this.bu_1 === -1)) {
      this.du_1.ju(this.bu_1);
      this.bu_1 = -1;
    }
  };
  function initializeStorage_8($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.xs_1 = newCapacity;
    initializeMetadata_8($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.ws_1 = fillArrayVal(Array(newCapacity), null);
  }
  function initializeMetadata_8($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      // Inline function 'androidx.collection.MutableScatterSet.initializeMetadata.<anonymous>' call
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.vs_1 = tmp_0;
    var tmp2 = $this.vs_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp2[i] = tmp2[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    initializeGrowth_8($this);
  }
  function initializeGrowth_8($this) {
    $this.iu_1 = loadedCapacity($this.nm()) - $this.ys_1 | 0;
  }
  function findAbsoluteInsertIndex_3($this, element) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = element == null ? null : hashCode(element);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$0, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.xs_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp3 = $this.vs_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
      var x = g.m3(tmp$ret$5);
      var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        if (!!m.equals(new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_0 = m;
        var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
        if (equals($this.ws_1[index], element)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_1 = m;
        m = this_1.k3(this_1.z2(new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_7($this, hash1);
    var tmp_0;
    if ($this.iu_1 === 0) {
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      tmp_0 = !$this.vs_1[offset_0 >> 3].i3((offset_0 & 7) << 3).k3(new Long(255, 0)).equals(new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      adjustStorage_7($this);
      index_0 = findFirstAvailableSlot_7($this, hash1);
    }
    $this.ys_1 = $this.ys_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.iu_1;
    var tmp_3;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    if ($this.vs_1[offset_1 >> 3].i3((offset_1 & 7) << 3).k3(new Long(255, 0)).equals(new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.iu_1 = tmp_2 - tmp_3 | 0;
    var tmp1 = index_0;
    // Inline function 'androidx.collection.MutableScatterSet.writeMetadata' call
    var value = toLong(hash2);
    var m_0 = $this.vs_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = tmp1 >> 3;
    var b_0 = (tmp1 & 7) << 3;
    m_0[i_0] = m_0[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    var c = $this.xs_1;
    var cloneIndex = ((tmp1 - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_1 = cloneIndex >> 3;
    var b_1 = (cloneIndex & 7) << 3;
    m_0[i_1] = m_0[i_1].k3((new Long(255, 0)).h3(b_1).g3()).l3(value.h3(b_1));
    return index_0;
  }
  function findFirstAvailableSlot_7($this, hash1) {
    var probeMask = $this.xs_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.vs_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = tmp0[i].j3(b).l3(tmp0[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = g.k3(g.g3().h3(7)).k3(new Long(-2139062144, -2139062144));
      if (!m.equals(new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function adjustStorage_7($this) {
    var tmp;
    if ($this.xs_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = $this.ys_1;
      var tmp1 = _ULong___init__impl__c78o9k(toLong(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp1).a3(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = $this.xs_1;
      var tmp4 = _ULong___init__impl__c78o9k(toLong(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).a3(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp6), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      resizeStorage_7($this, nextCapacity($this.xs_1));
    } else {
      resizeStorage_7($this, nextCapacity($this.xs_1));
    }
  }
  function resizeStorage_7($this, newCapacity) {
    var previousMetadata = $this.vs_1;
    var previousElements = $this.ws_1;
    var previousCapacity = $this.xs_1;
    initializeStorage_8($this, newCapacity);
    var newElements = $this.ws_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        if (previousMetadata[i >> 3].i3((i & 7) << 3).k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousElement == null ? null : hashCode(previousElement);
          var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$2, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_7($this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.MutableScatterSet.writeMetadata' call
          var value = toLong(tmp$ret$5);
          var m = $this.vs_1;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
          var c = $this.xs_1;
          var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
          // Inline function 'androidx.collection.writeRawMetadata' call
          var i_1 = cloneIndex >> 3;
          var b_0 = (cloneIndex & 7) << 3;
          m[i_1] = m[i_1].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  }
  function MutableSetWrapper($outer) {
    this.lu_1 = $outer;
    SetWrapper.call(this, $outer);
  }
  protoOf(MutableSetWrapper).e = function (element) {
    return this.lu_1.e(element);
  };
  protoOf(MutableSetWrapper).o = function (elements) {
    return this.lu_1.mu(elements);
  };
  protoOf(MutableSetWrapper).f2 = function () {
    this.lu_1.f2();
  };
  protoOf(MutableSetWrapper).j = function () {
    return new MutableScatterSet$MutableSetWrapper$iterator$1(this.lu_1);
  };
  protoOf(MutableSetWrapper).d2 = function (element) {
    return this.lu_1.d2(element);
  };
  function MutableScatterSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterSet.call(this);
    this.iu_1 = 0;
    // Inline function 'kotlin.require' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'androidx.collection.MutableScatterSet.<anonymous>' call
      var message = 'Capacity must be a positive value.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    initializeStorage_8(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterSet).e = function (element) {
    var oldSize = this.n();
    var index = findAbsoluteInsertIndex_3(this, element);
    this.ws_1[index] = element;
    return !(this.n() === oldSize);
  };
  protoOf(MutableScatterSet).nu = function (element) {
    var index = findAbsoluteInsertIndex_3(this, element);
    this.ws_1[index] = element;
  };
  protoOf(MutableScatterSet).mu = function (elements) {
    var oldSize = this.n();
    this.ou(elements);
    return !(oldSize === this.n());
  };
  protoOf(MutableScatterSet).pu = function (elements) {
    var oldSize = this.n();
    this.qu(elements);
    return !(oldSize === this.n());
  };
  protoOf(MutableScatterSet).ou = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'androidx.collection.MutableScatterSet.plusAssign.<anonymous>' call
      this.nu(element);
    }
  };
  protoOf(MutableScatterSet).qu = function (elements) {
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = elements.ws_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = elements.vs_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          if (!this_0.k3(this_0.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                if (slot.k3(new Long(255, 0)).a1(new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                  var tmp = k[index];
                  // Inline function 'androidx.collection.MutableScatterSet.plusAssign.<anonymous>' call
                  var element = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                  this.nu(element);
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
  };
  protoOf(MutableScatterSet).d2 = function (element) {
    var tmp$ret$10;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$0, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.xs_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp3 = this.vs_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = tmp3[i].j3(b).l3(tmp3[i + 1 | 0].h3(64 - b | 0).k3(toLong(b).f3().i3(63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$5 = (new Long(16843009, 16843009)).a3(toLong(hash2));
        var x = g.m3(tmp$ret$5);
        var m = x.z2(new Long(16843009, 16843009)).k3(x.g3()).k3(new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          if (!!m.equals(new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_0 = m;
          var index = (tmp + (countTrailingZeroBits(this_0) >> 3) | 0) & probeMask;
          if (equals(this.ws_1[index], element)) {
            tmp$ret$10 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_1 = m;
          m = this_1.k3(this_1.z2(new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        if (!g.k3(g.g3().h3(6)).k3(new Long(-2139062144, -2139062144)).equals(new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$10 = -1;
    }
    var index_0 = tmp$ret$10;
    var exists = index_0 >= 0;
    if (exists) {
      this.ju(index_0);
    }
    return exists;
  };
  protoOf(MutableScatterSet).ju = function (index) {
    this.ys_1 = this.ys_1 - 1 | 0;
    // Inline function 'androidx.collection.MutableScatterSet.writeMetadata' call
    var value = new Long(254, 0);
    var m = this.vs_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i = index >> 3;
    var b = (index & 7) << 3;
    m[i] = m[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    var c = this.xs_1;
    var cloneIndex = ((index - 7 | 0) & c) + (7 & c) | 0;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var i_0 = cloneIndex >> 3;
    var b_0 = (cloneIndex & 7) << 3;
    m[i_0] = m[i_0].k3((new Long(255, 0)).h3(b_0).g3()).l3(value.h3(b_0));
    this.ws_1[index] = null;
  };
  protoOf(MutableScatterSet).f2 = function () {
    this.ys_1 = 0;
    if (!(this.vs_1 === get_EmptyGroup())) {
      fill(this.vs_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.vs_1;
      var tmp1 = this.xs_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp1 >> 3;
      var b = (tmp1 & 7) << 3;
      tmp0[i] = tmp0[i].k3((new Long(255, 0)).h3(b).g3()).l3(value.h3(b));
    }
    fill_0(this.ws_1, null, 0, this.xs_1);
    initializeGrowth_8(this);
  };
  protoOf(MutableScatterSet).ru = function () {
    return new MutableSetWrapper(this);
  };
  function mutableScatterSetOf() {
    _init_properties_ScatterSet_kt__vy48mc();
    return new MutableScatterSet();
  }
  function mutableScatterSetOf_0(element1, element2) {
    _init_properties_ScatterSet_kt__vy48mc();
    // Inline function 'kotlin.apply' call
    var this_0 = new MutableScatterSet(2);
    // Inline function 'androidx.collection.mutableScatterSetOf.<anonymous>' call
    this_0.nu(element1);
    this_0.nu(element2);
    return this_0;
  }
  var properties_initialized_ScatterSet_kt_dmj456;
  function _init_properties_ScatterSet_kt__vy48mc() {
    if (!properties_initialized_ScatterSet_kt_dmj456) {
      properties_initialized_ScatterSet_kt_dmj456 = true;
      EmptyScatterSet = new MutableScatterSet(0);
    }
  }
  function valueIterator(_this__u8e3s4) {
    return new valueIterator$1(_this__u8e3s4);
  }
  function valueIterator$1($this_valueIterator) {
    this.tu_1 = $this_valueIterator;
    this.su_1 = 0;
  }
  protoOf(valueIterator$1).k = function () {
    return this.su_1 < this.tu_1.yu();
  };
  protoOf(valueIterator$1).l = function () {
    var tmp1 = this.su_1;
    this.su_1 = tmp1 + 1 | 0;
    return this.tu_1.zu(tmp1);
  };
  function get_DELETED_0() {
    _init_properties_SparseArrayCompat_kt__9he7pl();
    return DELETED_0;
  }
  var DELETED_0;
  function commonGet(_this__u8e3s4, key) {
    _init_properties_SparseArrayCompat_kt__9he7pl();
    // Inline function 'androidx.collection.internalGet' call
    var i = binarySearch_0(_this__u8e3s4.vu_1, _this__u8e3s4.xu_1, key);
    var tmp;
    if (i < 0 || _this__u8e3s4.wu_1[i] === get_DELETED_0()) {
      tmp = null;
    } else {
      var tmp_0 = _this__u8e3s4.wu_1[i];
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function gc(_this__u8e3s4) {
    _init_properties_SparseArrayCompat_kt__9he7pl();
    var n = _this__u8e3s4.xu_1;
    var o = 0;
    var keys = _this__u8e3s4.vu_1;
    var values = _this__u8e3s4.wu_1;
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var value = values[i];
        if (!(value === get_DELETED_0())) {
          if (!(i === o)) {
            keys[o] = keys[i];
            values[o] = value;
            values[i] = null;
          }
          o = o + 1 | 0;
        }
      }
       while (inductionVariable < n);
    _this__u8e3s4.uu_1 = false;
    _this__u8e3s4.xu_1 = o;
  }
  function access$_get_DELETED_$tSparseArrayCompatKt_tkdov8() {
    return get_DELETED_0();
  }
  function access$gc$tSparseArrayCompatKt($receiver) {
    return gc($receiver);
  }
  var properties_initialized_SparseArrayCompat_kt_h7ddor;
  function _init_properties_SparseArrayCompat_kt__9he7pl() {
    if (!properties_initialized_SparseArrayCompat_kt_h7ddor) {
      properties_initialized_SparseArrayCompat_kt_h7ddor = true;
      DELETED_0 = new Object();
    }
  }
  function get_EMPTY_INTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_INTS;
  }
  var EMPTY_INTS;
  function get_EMPTY_LONGS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_LONGS;
  }
  var EMPTY_LONGS;
  function get_EMPTY_OBJECTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_OBJECTS;
  }
  var EMPTY_OBJECTS;
  function idealLongArraySize(need) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return idealByteArraySize(imul(need, 8)) / 8 | 0;
  }
  function idealByteArraySize(need) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var inductionVariable = 4;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (need <= ((1 << i) - 12 | 0)) {
          return (1 << i) - 12 | 0;
        }
      }
       while (inductionVariable <= 31);
    return need;
  }
  function binarySearch(array, size, value) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var lo = 0;
    var hi = size - 1 | 0;
    while (lo <= hi) {
      var mid = (lo + hi | 0) >>> 1 | 0;
      var midVal = array[mid];
      if (midVal.a1(value) < 0) {
        lo = mid + 1 | 0;
      } else if (midVal.a1(value) > 0) {
        hi = mid - 1 | 0;
      } else {
        return mid;
      }
    }
    return ~lo;
  }
  function idealIntArraySize(need) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return idealByteArraySize(imul(need, 4)) / 4 | 0;
  }
  function binarySearch_0(array, size, value) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var lo = 0;
    var hi = size - 1 | 0;
    while (lo <= hi) {
      var mid = (lo + hi | 0) >>> 1 | 0;
      var midVal = array[mid];
      if (midVal < value) {
        lo = mid + 1 | 0;
      } else if (midVal > value) {
        hi = mid - 1 | 0;
      } else {
        return mid;
      }
    }
    return ~lo;
  }
  var properties_initialized_ContainerHelpers_kt_9fe6be;
  function _init_properties_ContainerHelpers_kt__6fon4s() {
    if (!properties_initialized_ContainerHelpers_kt_9fe6be) {
      properties_initialized_ContainerHelpers_kt_9fe6be = true;
      EMPTY_INTS = new Int32Array(0);
      EMPTY_LONGS = longArray(0);
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_OBJECTS = fillArrayVal(Array(0), null);
    }
  }
  function LongSparseArray(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 10 : initialCapacity;
    this.av_1 = false;
    this.dv_1 = 0;
    if (initialCapacity === 0) {
      this.bv_1 = get_EMPTY_LONGS();
      this.cv_1 = get_EMPTY_OBJECTS();
    } else {
      var idealCapacity = idealLongArraySize(initialCapacity);
      this.bv_1 = longArray(idealCapacity);
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.cv_1 = fillArrayVal(Array(idealCapacity), null);
    }
  }
  protoOf(LongSparseArray).cp = function (key) {
    // Inline function 'androidx.collection.commonGet' call
    // Inline function 'androidx.collection.commonGetInternal' call
    var i = binarySearch(this.bv_1, this.dv_1, key);
    var tmp;
    if (i < 0 || this.cv_1[i] === access$_get_DELETED_$tLongSparseArrayKt_9psy8u()) {
      tmp = null;
    } else {
      tmp = this.cv_1[i];
    }
    var tmp_0 = tmp;
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(LongSparseArray).ev = function (key) {
    var i = binarySearch(this.bv_1, this.dv_1, key);
    var tmp;
    if (i >= 0) {
      var tmp_0;
      if (!(this.cv_1[i] === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
        this.cv_1[i] = access$_get_DELETED_$tLongSparseArrayKt_9psy8u();
        this.av_1 = true;
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(LongSparseArray).fv = function (key, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonPut' call
      var index = binarySearch(this.bv_1, this.dv_1, key);
      if (index >= 0) {
        this.cv_1[index] = value;
      } else {
        index = ~index;
        if (index < this.dv_1 && this.cv_1[index] === access$_get_DELETED_$tLongSparseArrayKt_9psy8u()) {
          this.bv_1[index] = key;
          this.cv_1[index] = value;
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
        if (this.av_1 && this.dv_1 >= this.bv_1.length) {
          // Inline function 'androidx.collection.commonGc' call
          var n = this.dv_1;
          var newSize = 0;
          var keys = this.bv_1;
          var values = this.cv_1;
          var inductionVariable = 0;
          if (inductionVariable < n)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var value_0 = values[i];
              if (!(value_0 === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
                if (!(i === newSize)) {
                  keys[newSize] = keys[i];
                  values[newSize] = value_0;
                  values[i] = null;
                }
                newSize = newSize + 1 | 0;
              }
            }
             while (inductionVariable < n);
          this.av_1 = false;
          this.dv_1 = newSize;
          index = ~binarySearch(this.bv_1, this.dv_1, key);
        }
        if (this.dv_1 >= this.bv_1.length) {
          var newSize_0 = idealLongArraySize(this.dv_1 + 1 | 0);
          this.bv_1 = copyOf_1(this.bv_1, newSize_0);
          this.cv_1 = copyOf_0(this.cv_1, newSize_0);
        }
        if (!((this.dv_1 - index | 0) === 0)) {
          var tmp1 = this.bv_1;
          var tmp2 = this.bv_1;
          var tmp3 = index + 1 | 0;
          var tmp4 = index;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex = this.dv_1;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = tmp1;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, tmp2, tmp3, tmp4, endIndex);
          var tmp6 = this.cv_1;
          var tmp7 = this.cv_1;
          var tmp8 = index + 1 | 0;
          var tmp9 = index;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex_0 = this.dv_1;
          arrayCopy(tmp6, tmp7, tmp8, tmp9, endIndex_0);
        }
        this.bv_1[index] = key;
        this.cv_1[index] = value;
        this.dv_1 = this.dv_1 + 1 | 0;
      }
    }
    return tmp$ret$0;
  };
  protoOf(LongSparseArray).yu = function () {
    // Inline function 'androidx.collection.commonSize' call
    if (this.av_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.dv_1;
      var newSize = 0;
      var keys = this.bv_1;
      var values = this.cv_1;
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = values[i];
          if (!(value === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
            if (!(i === newSize)) {
              keys[newSize] = keys[i];
              values[newSize] = value;
              values[i] = null;
            }
            newSize = newSize + 1 | 0;
          }
        }
         while (inductionVariable < n);
      this.av_1 = false;
      this.dv_1 = newSize;
    }
    return this.dv_1;
  };
  protoOf(LongSparseArray).q = function () {
    // Inline function 'androidx.collection.commonIsEmpty' call
    return this.yu() === 0;
  };
  protoOf(LongSparseArray).gv = function (index) {
    // Inline function 'androidx.collection.commonKeyAt' call
    // Inline function 'kotlin.require' call
    if (!(0 <= index ? index < this.dv_1 : false)) {
      // Inline function 'androidx.collection.commonKeyAt.<anonymous>' call
      var message = 'Expected index to be within 0..size()-1, but was ' + index;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.av_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.dv_1;
      var newSize = 0;
      var keys = this.bv_1;
      var values = this.cv_1;
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = values[i];
          if (!(value === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
            if (!(i === newSize)) {
              keys[newSize] = keys[i];
              values[newSize] = value;
              values[i] = null;
            }
            newSize = newSize + 1 | 0;
          }
        }
         while (inductionVariable < n);
      this.av_1 = false;
      this.dv_1 = newSize;
    }
    return this.bv_1[index];
  };
  protoOf(LongSparseArray).zu = function (index) {
    // Inline function 'androidx.collection.commonValueAt' call
    // Inline function 'kotlin.require' call
    if (!(0 <= index ? index < this.dv_1 : false)) {
      // Inline function 'androidx.collection.commonValueAt.<anonymous>' call
      var message = 'Expected index to be within 0..size()-1, but was ' + index;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.av_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.dv_1;
      var newSize = 0;
      var keys = this.bv_1;
      var values = this.cv_1;
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = values[i];
          if (!(value === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
            if (!(i === newSize)) {
              keys[newSize] = keys[i];
              values[newSize] = value;
              values[i] = null;
            }
            newSize = newSize + 1 | 0;
          }
        }
         while (inductionVariable < n);
      this.av_1 = false;
      this.dv_1 = newSize;
    }
    var tmp = this.cv_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(LongSparseArray).hv = function (key) {
    // Inline function 'androidx.collection.commonIndexOfKey' call
    if (this.av_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.dv_1;
      var newSize = 0;
      var keys = this.bv_1;
      var values = this.cv_1;
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = values[i];
          if (!(value === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
            if (!(i === newSize)) {
              keys[newSize] = keys[i];
              values[newSize] = value;
              values[i] = null;
            }
            newSize = newSize + 1 | 0;
          }
        }
         while (inductionVariable < n);
      this.av_1 = false;
      this.dv_1 = newSize;
    }
    return binarySearch(this.bv_1, this.dv_1, key);
  };
  protoOf(LongSparseArray).dp = function (key) {
    // Inline function 'androidx.collection.commonContainsKey' call
    return this.hv(key) >= 0;
  };
  protoOf(LongSparseArray).f2 = function () {
    var n = this.dv_1;
    var values = this.cv_1;
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        values[i] = null;
      }
       while (inductionVariable < n);
    this.dv_1 = 0;
    this.av_1 = false;
    return Unit_instance;
  };
  protoOf(LongSparseArray).toString = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonToString' call
      if (this.yu() <= 0) {
        tmp$ret$0 = '{}';
        break $l$block;
      }
      // Inline function 'kotlin.text.buildString' call
      var capacity = imul(this.dv_1, 28);
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$_0(capacity);
      // Inline function 'androidx.collection.commonToString.<anonymous>' call
      this_0.p8(_Char___init__impl__6a9atx(123));
      var inductionVariable = 0;
      var last = this.dv_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (i > 0) {
            this_0.o8(', ');
          }
          var key = this.gv(i);
          this_0.fc(key);
          this_0.p8(_Char___init__impl__6a9atx(61));
          var value = this.zu(i);
          if (!(value === this_0)) {
            this_0.n8(value);
          } else {
            this_0.o8('(this Map)');
          }
        }
         while (inductionVariable < last);
      this_0.p8(_Char___init__impl__6a9atx(125));
      tmp$ret$0 = this_0.toString();
    }
    return tmp$ret$0;
  };
  function SparseArrayCompat(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 10 : initialCapacity;
    this.uu_1 = false;
    this.xu_1 = 0;
    if (initialCapacity === 0) {
      this.vu_1 = get_EMPTY_INTS();
      this.wu_1 = get_EMPTY_OBJECTS();
    } else {
      var capacity = idealIntArraySize(initialCapacity);
      this.vu_1 = new Int32Array(capacity);
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.wu_1 = fillArrayVal(Array(capacity), null);
    }
  }
  protoOf(SparseArrayCompat).p = function (key) {
    return commonGet(this, key);
  };
  protoOf(SparseArrayCompat).iv = function (index) {
    var tmp;
    if (!(this.wu_1[index] === access$_get_DELETED_$tSparseArrayCompatKt_tkdov8())) {
      this.wu_1[index] = access$_get_DELETED_$tSparseArrayCompatKt_tkdov8();
      this.uu_1 = true;
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(SparseArrayCompat).jv = function (key, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonReplace' call
      var index = this.kv(key);
      if (index >= 0) {
        var tmp = this.wu_1[index];
        var oldValue = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        this.wu_1[index] = value;
        tmp$ret$0 = oldValue;
        break $l$block;
      }
      tmp$ret$0 = null;
    }
    return tmp$ret$0;
  };
  protoOf(SparseArrayCompat).lv = function (key, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonPut' call
      var i = binarySearch_0(this.vu_1, this.xu_1, key);
      if (i >= 0) {
        this.wu_1[i] = value;
      } else {
        i = ~i;
        if (i < this.xu_1 && this.wu_1[i] === access$_get_DELETED_$tSparseArrayCompatKt_tkdov8()) {
          this.vu_1[i] = key;
          this.wu_1[i] = value;
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
        if (this.uu_1 && this.xu_1 >= this.vu_1.length) {
          access$gc$tSparseArrayCompatKt(this);
          i = ~binarySearch_0(this.vu_1, this.xu_1, key);
        }
        if (this.xu_1 >= this.vu_1.length) {
          var n = idealIntArraySize(this.xu_1 + 1 | 0);
          this.vu_1 = copyOf(this.vu_1, n);
          this.wu_1 = copyOf_0(this.wu_1, n);
        }
        if (!((this.xu_1 - i | 0) === 0)) {
          var tmp0 = this.vu_1;
          var tmp1 = this.vu_1;
          var tmp2 = i + 1 | 0;
          var tmp3 = i;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex = this.xu_1;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = tmp0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, tmp1, tmp2, tmp3, endIndex);
          var tmp5 = this.wu_1;
          var tmp6 = this.wu_1;
          var tmp7 = i + 1 | 0;
          var tmp8 = i;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex_0 = this.xu_1;
          arrayCopy(tmp5, tmp6, tmp7, tmp8, endIndex_0);
        }
        this.vu_1[i] = key;
        this.wu_1[i] = value;
        this.xu_1 = this.xu_1 + 1 | 0;
      }
    }
    return tmp$ret$0;
  };
  protoOf(SparseArrayCompat).yu = function () {
    // Inline function 'androidx.collection.commonSize' call
    if (this.uu_1) {
      access$gc$tSparseArrayCompatKt(this);
    }
    return this.xu_1;
  };
  protoOf(SparseArrayCompat).gv = function (index) {
    // Inline function 'androidx.collection.commonKeyAt' call
    if (this.uu_1) {
      access$gc$tSparseArrayCompatKt(this);
    }
    return this.vu_1[index];
  };
  protoOf(SparseArrayCompat).zu = function (index) {
    // Inline function 'androidx.collection.commonValueAt' call
    if (this.uu_1) {
      access$gc$tSparseArrayCompatKt(this);
    }
    var tmp = this.wu_1[index];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(SparseArrayCompat).kv = function (key) {
    // Inline function 'androidx.collection.commonIndexOfKey' call
    if (this.uu_1) {
      access$gc$tSparseArrayCompatKt(this);
    }
    return binarySearch_0(this.vu_1, this.xu_1, key);
  };
  protoOf(SparseArrayCompat).toString = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonToString' call
      if (this.yu() <= 0) {
        tmp$ret$0 = '{}';
        break $l$block;
      }
      var buffer = StringBuilder_init_$Create$_0(imul(this.xu_1, 28));
      buffer.p8(_Char___init__impl__6a9atx(123));
      var inductionVariable = 0;
      var last = this.xu_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (i > 0) {
            buffer.o8(', ');
          }
          var key = this.gv(i);
          buffer.ec(key);
          buffer.p8(_Char___init__impl__6a9atx(61));
          var value = this.zu(i);
          if (!(value === this)) {
            buffer.n8(value);
          } else {
            buffer.o8('(this Map)');
          }
        }
         while (inductionVariable < last);
      buffer.p8(_Char___init__impl__6a9atx(125));
      tmp$ret$0 = buffer.toString();
    }
    return tmp$ret$0;
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LongSparseArray;
  _.$_$.b = MutableIntIntMap;
  _.$_$.c = MutableIntList;
  _.$_$.d = MutableIntObjectMap;
  _.$_$.e = MutableIntSet;
  _.$_$.f = MutableLongObjectMap;
  _.$_$.g = MutableLongSet;
  _.$_$.h = MutableObjectFloatMap;
  _.$_$.i = MutableObjectIntMap;
  _.$_$.j = MutableObjectList;
  _.$_$.k = MutableScatterMap;
  _.$_$.l = MutableScatterSet;
  _.$_$.m = ScatterSet;
  _.$_$.n = SparseArrayCompat;
  _.$_$.o = emptyObjectIntMap;
  _.$_$.p = mutableIntObjectMapOf;
  _.$_$.q = mutableObjectIntMapOf;
  _.$_$.r = mutableScatterMapOf;
  _.$_$.s = mutableScatterSetOf_0;
  _.$_$.t = mutableScatterSetOf;
  _.$_$.u = valueIterator;
  _.$_$.v = _FloatFloatPair___init__impl__2q1dd3_0;
  _.$_$.w = _FloatFloatPair___get_packedValue__impl__5lczxp;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-collection-collection.js.map
