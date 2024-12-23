(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-geometry'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-geometry'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.o3;
  var floatFromBits = kotlin_kotlin.$_$.da;
  var Long = kotlin_kotlin.$_$.ue;
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.la;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var VOID = kotlin_kotlin.$_$.e;
  var toRawBits = kotlin_kotlin.$_$.hg;
  var toLong = kotlin_kotlin.$_$.mb;
  var isNaN_0 = kotlin_kotlin.$_$.tf;
  var isInfinite = kotlin_kotlin.$_$.sf;
  var numberToInt = kotlin_kotlin.$_$.hb;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var getNumberHashCode = kotlin_kotlin.$_$.ga;
  var equals = kotlin_kotlin.$_$.ba;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(CornerRadius, 'CornerRadius');
  initMetadataForClass(MutableRect, 'MutableRect');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(Offset, 'Offset');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Rect, 'Rect');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(RoundRect, 'RoundRect');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Size, 'Size');
  //endregion
  function _CornerRadius___init__impl__ojmabe(packedValue) {
    return packedValue;
  }
  function _CornerRadius___get_packedValue__impl__okv4jq($this) {
    return $this;
  }
  function _CornerRadius___get_x__impl__1594cn($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _CornerRadius___get_packedValue__impl__okv4jq($this).i3(32).f1();
    return floatFromBits(bits);
  }
  function _CornerRadius___get_y__impl__tyvleu($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _CornerRadius___get_packedValue__impl__okv4jq($this).k3(new Long(-1, 0)).f1();
    return floatFromBits(bits);
  }
  function Companion() {
    Companion_instance = this;
    this.v3f_1 = CornerRadius_0(0.0);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CornerRadius__toString_impl_m3k4zq($this) {
    var tmp;
    if (_CornerRadius___get_x__impl__1594cn($this) === _CornerRadius___get_y__impl__tyvleu($this)) {
      tmp = 'CornerRadius.circular(' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn($this), 1) + ')';
    } else {
      tmp = 'CornerRadius.elliptical(' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn($this), 1) + ', ' + toStringAsFixed(_CornerRadius___get_y__impl__tyvleu($this), 1) + ')';
    }
    return tmp;
  }
  function CornerRadius__hashCode_impl_r6e06j($this) {
    return $this.hashCode();
  }
  function CornerRadius__equals_impl_776hdl($this, other) {
    if (!(other instanceof CornerRadius))
      return false;
    var tmp0_other_with_cast = other instanceof CornerRadius ? other.w3f_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function CornerRadius(packedValue) {
    Companion_getInstance();
    this.w3f_1 = packedValue;
  }
  protoOf(CornerRadius).toString = function () {
    return CornerRadius__toString_impl_m3k4zq(this.w3f_1);
  };
  protoOf(CornerRadius).hashCode = function () {
    return CornerRadius__hashCode_impl_r6e06j(this.w3f_1);
  };
  protoOf(CornerRadius).equals = function (other) {
    return CornerRadius__equals_impl_776hdl(this.w3f_1, other);
  };
  function CornerRadius_0(x, y) {
    y = y === VOID ? x : y;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(x));
    var v2 = toLong(toRawBits(y));
    var tmp$ret$0 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _CornerRadius___init__impl__ojmabe(tmp$ret$0);
  }
  function toStringAsFixed(_this__u8e3s4, digits) {
    if (isNaN_0(_this__u8e3s4))
      return 'NaN';
    if (isInfinite(_this__u8e3s4))
      return _this__u8e3s4 < 0.0 ? '-Infinity' : 'Infinity';
    // Inline function 'kotlin.math.max' call
    var clampedDigits = Math.max(digits, 0);
    // Inline function 'kotlin.math.pow' call
    var pow = Math.pow(10.0, clampedDigits);
    var shifted = _this__u8e3s4 * pow;
    var decimal = shifted - numberToInt(shifted);
    var tmp;
    if (decimal >= 0.5) {
      tmp = numberToInt(shifted) + 1 | 0;
    } else {
      tmp = numberToInt(shifted);
    }
    var roundedShifted = tmp;
    var rounded = roundedShifted / pow;
    var tmp_0;
    if (clampedDigits > 0) {
      tmp_0 = rounded.toString();
    } else {
      tmp_0 = numberToInt(rounded).toString();
    }
    return tmp_0;
  }
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function MutableRect(left, top, right, bottom) {
    this.x3f_1 = left;
    this.y3f_1 = top;
    this.z3f_1 = right;
    this.a3g_1 = bottom;
  }
  protoOf(MutableRect).u21 = function () {
    return this.x3f_1 >= this.z3f_1 || this.y3f_1 >= this.a3g_1;
  };
  protoOf(MutableRect).b3g = function (left, top, right, bottom) {
    var tmp = this;
    // Inline function 'kotlin.math.max' call
    var b = this.x3f_1;
    tmp.x3f_1 = Math.max(left, b);
    var tmp_0 = this;
    // Inline function 'kotlin.math.max' call
    var b_0 = this.y3f_1;
    tmp_0.y3f_1 = Math.max(top, b_0);
    var tmp_1 = this;
    // Inline function 'kotlin.math.min' call
    var b_1 = this.z3f_1;
    tmp_1.z3f_1 = Math.min(right, b_1);
    var tmp_2 = this;
    // Inline function 'kotlin.math.min' call
    var b_2 = this.a3g_1;
    tmp_2.a3g_1 = Math.min(bottom, b_2);
  };
  protoOf(MutableRect).c3g = function (left, top, right, bottom) {
    this.x3f_1 = left;
    this.y3f_1 = top;
    this.z3f_1 = right;
    this.a3g_1 = bottom;
  };
  protoOf(MutableRect).toString = function () {
    return 'MutableRect(' + (toStringAsFixed(this.x3f_1, 1) + ', ') + (toStringAsFixed(this.y3f_1, 1) + ', ') + (toStringAsFixed(this.z3f_1, 1) + ', ') + (toStringAsFixed(this.a3g_1, 1) + ')');
  };
  function toRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.x3f_1, _this__u8e3s4.y3f_1, _this__u8e3s4.z3f_1, _this__u8e3s4.a3g_1);
  }
  function _Offset___init__impl__c168vi(packedValue) {
    return packedValue;
  }
  function _Offset___get_packedValue__impl__xh2k8q($this) {
    return $this;
  }
  function _Offset___get_x__impl__xvi35n($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).i3(32).f1();
    return floatFromBits(bits);
  }
  function _Offset___get_y__impl__8bzhra($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).k3(new Long(-1, 0)).f1();
    return floatFromBits(bits);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.d3g_1 = _Offset___init__impl__c168vi(new Long(0, 0));
    this.e3g_1 = _Offset___init__impl__c168vi(new Long(2139095040, 2139095040));
    this.f3g_1 = _Offset___init__impl__c168vi(new Long(2143289344, 2143289344));
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Offset__isValid_impl_z7krde($this) {
    var v = _Offset___get_packedValue__impl__xh2k8q($this).k3(new Long(2147483647, 2147483647));
    return v.z2(new Long(2139095041, 2139095041)).k3(v.g3()).k3(new Long(-2147483648, -2147483648)).equals(new Long(-2147483648, -2147483648));
  }
  function Offset__getDistance_impl_pclvxn($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).i3(32).f1();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q($this).k3(new Long(-1, 0)).f1();
    var y = floatFromBits(bits_0);
    // Inline function 'kotlin.math.sqrt' call
    var x_0 = x * x + y * y;
    return Math.sqrt(x_0);
  }
  function Offset__getDistanceSquared_impl_97mhi6($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).i3(32).f1();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q($this).k3(new Long(-1, 0)).f1();
    var y = floatFromBits(bits_0);
    return x * x + y * y;
  }
  function Offset__unaryMinus_impl_ssu2iv($this) {
    return _Offset___init__impl__c168vi(_Offset___get_packedValue__impl__xh2k8q($this).m3(new Long(-2147483648, -2147483648)));
  }
  function Offset__minus_impl_hoj2c0($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).i3(32).f1();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q(other).i3(32).f1();
    var tmp4 = tmp - floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = _Offset___get_packedValue__impl__xh2k8q($this).k3(new Long(-1, 0)).f1();
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = _Offset___get_packedValue__impl__xh2k8q(other).k3(new Long(-1, 0)).f1();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_0 - floatFromBits(bits_2);
    var v1 = toLong(toRawBits(tmp4));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$12 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$12);
  }
  function Offset__plus_impl_c78cg0($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).i3(32).f1();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q(other).i3(32).f1();
    var tmp4 = tmp + floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = _Offset___get_packedValue__impl__xh2k8q($this).k3(new Long(-1, 0)).f1();
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = _Offset___get_packedValue__impl__xh2k8q(other).k3(new Long(-1, 0)).f1();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_0 + floatFromBits(bits_2);
    var v1 = toLong(toRawBits(tmp4));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$12 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$12);
  }
  function Offset__times_impl_jz1mli($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Offset___get_packedValue__impl__xh2k8q($this).i3(32).f1();
    var tmp2 = floatFromBits(bits) * operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Offset___get_packedValue__impl__xh2k8q($this).k3(new Long(-1, 0)).f1();
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) * operand;
    var v1 = toLong(toRawBits(tmp2));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$6 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$6);
  }
  function Offset__toString_impl_4ffbou($this) {
    var tmp;
    if (get_isSpecified($this)) {
      tmp = 'Offset(' + toStringAsFixed(_Offset___get_x__impl__xvi35n($this), 1) + ', ' + toStringAsFixed(_Offset___get_y__impl__8bzhra($this), 1) + ')';
    } else {
      tmp = 'Offset.Unspecified';
    }
    return tmp;
  }
  function Offset__hashCode_impl_hbql41($this) {
    return $this.hashCode();
  }
  function Offset__equals_impl_exf2yj($this, other) {
    if (!(other instanceof Offset))
      return false;
    var tmp0_other_with_cast = other instanceof Offset ? other.g3g_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Offset(packedValue) {
    Companion_getInstance_0();
    this.g3g_1 = packedValue;
  }
  protoOf(Offset).toString = function () {
    return Offset__toString_impl_4ffbou(this.g3g_1);
  };
  protoOf(Offset).hashCode = function () {
    return Offset__hashCode_impl_hbql41(this.g3g_1);
  };
  protoOf(Offset).equals = function (other) {
    return Offset__equals_impl_exf2yj(this.g3g_1, other);
  };
  function Offset_0(x, y) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(x));
    var v2 = toLong(toRawBits(y));
    var tmp$ret$0 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$0);
  }
  function get_isFinite(_this__u8e3s4) {
    var v = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).k3(new Long(2139095040, 2139095040)).m3(new Long(2139095040, 2139095040));
    return v.z2(new Long(1, 1)).k3(v.g3()).k3(new Long(-2147483648, -2147483648)).equals(new Long(0, 0));
  }
  function get_isSpecified(_this__u8e3s4) {
    return !_Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).k3(new Long(2147483647, 2147483647)).equals(new Long(2143289344, 2143289344));
  }
  function get_isUnspecified(_this__u8e3s4) {
    return _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4).k3(new Long(2147483647, 2147483647)).equals(new Long(2143289344, 2143289344));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.h3g_1 = new Rect(0.0, 0.0, 0.0, 0.0);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Rect(left, top, right, bottom) {
    Companion_getInstance_1();
    this.i3g_1 = left;
    this.j3g_1 = top;
    this.k3g_1 = right;
    this.l3g_1 = bottom;
  }
  protoOf(Rect).m3g = function () {
    return this.k3g_1 - this.i3g_1;
  };
  protoOf(Rect).n3g = function () {
    return this.l3g_1 - this.j3g_1;
  };
  protoOf(Rect).o3g = function (offset) {
    return new Rect(this.i3g_1 + _Offset___get_x__impl__xvi35n(offset), this.j3g_1 + _Offset___get_y__impl__8bzhra(offset), this.k3g_1 + _Offset___get_x__impl__xvi35n(offset), this.l3g_1 + _Offset___get_y__impl__8bzhra(offset));
  };
  protoOf(Rect).p3g = function (translateX, translateY) {
    return new Rect(this.i3g_1 + translateX, this.j3g_1 + translateY, this.k3g_1 + translateX, this.l3g_1 + translateY);
  };
  protoOf(Rect).q3g = function (offset) {
    return _Offset___get_x__impl__xvi35n(offset) >= this.i3g_1 && _Offset___get_x__impl__xvi35n(offset) < this.k3g_1 && _Offset___get_y__impl__8bzhra(offset) >= this.j3g_1 && _Offset___get_y__impl__8bzhra(offset) < this.l3g_1;
  };
  protoOf(Rect).toString = function () {
    return 'Rect.fromLTRB(' + (toStringAsFixed(this.i3g_1, 1) + ', ') + (toStringAsFixed(this.j3g_1, 1) + ', ') + (toStringAsFixed(this.k3g_1, 1) + ', ') + (toStringAsFixed(this.l3g_1, 1) + ')');
  };
  protoOf(Rect).hashCode = function () {
    var result = getNumberHashCode(this.i3g_1);
    result = imul(result, 31) + getNumberHashCode(this.j3g_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.k3g_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.l3g_1) | 0;
    return result;
  };
  protoOf(Rect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rect))
      return false;
    var tmp0_other_with_cast = other instanceof Rect ? other : THROW_CCE();
    if (!equals(this.i3g_1, tmp0_other_with_cast.i3g_1))
      return false;
    if (!equals(this.j3g_1, tmp0_other_with_cast.j3g_1))
      return false;
    if (!equals(this.k3g_1, tmp0_other_with_cast.k3g_1))
      return false;
    if (!equals(this.l3g_1, tmp0_other_with_cast.l3g_1))
      return false;
    return true;
  };
  function Rect_0(offset, size) {
    return new Rect(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset), _Offset___get_x__impl__xvi35n(offset) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(offset) + _Size___get_height__impl__a04p02(size));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.r3g_1 = RoundRect_1(0.0, 0.0, 0.0, 0.0, Companion_getInstance().v3f_1);
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function RoundRect(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) {
    Companion_getInstance_2();
    topLeftCornerRadius = topLeftCornerRadius === VOID ? Companion_getInstance().v3f_1 : topLeftCornerRadius;
    topRightCornerRadius = topRightCornerRadius === VOID ? Companion_getInstance().v3f_1 : topRightCornerRadius;
    bottomRightCornerRadius = bottomRightCornerRadius === VOID ? Companion_getInstance().v3f_1 : bottomRightCornerRadius;
    bottomLeftCornerRadius = bottomLeftCornerRadius === VOID ? Companion_getInstance().v3f_1 : bottomLeftCornerRadius;
    this.s3g_1 = left;
    this.t3g_1 = top;
    this.u3g_1 = right;
    this.v3g_1 = bottom;
    this.w3g_1 = topLeftCornerRadius;
    this.x3g_1 = topRightCornerRadius;
    this.y3g_1 = bottomRightCornerRadius;
    this.z3g_1 = bottomLeftCornerRadius;
    this.a3h_1 = null;
  }
  protoOf(RoundRect).m3g = function () {
    return this.u3g_1 - this.s3g_1;
  };
  protoOf(RoundRect).n3g = function () {
    return this.v3g_1 - this.t3g_1;
  };
  protoOf(RoundRect).toString = function () {
    var tlRadius = this.w3g_1;
    var trRadius = this.x3g_1;
    var brRadius = this.y3g_1;
    var blRadius = this.z3g_1;
    var rect = toStringAsFixed(this.s3g_1, 1) + ', ' + (toStringAsFixed(this.t3g_1, 1) + ', ') + (toStringAsFixed(this.u3g_1, 1) + ', ') + toStringAsFixed(this.v3g_1, 1);
    if (equals(tlRadius, trRadius) && equals(trRadius, brRadius) && equals(brRadius, blRadius)) {
      if (_CornerRadius___get_x__impl__1594cn(tlRadius) === _CornerRadius___get_y__impl__tyvleu(tlRadius)) {
        return 'RoundRect(rect=' + rect + ', radius=' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn(tlRadius), 1) + ')';
      }
      return 'RoundRect(rect=' + rect + ', x=' + toStringAsFixed(_CornerRadius___get_x__impl__1594cn(tlRadius), 1) + ', ' + ('y=' + toStringAsFixed(_CornerRadius___get_y__impl__tyvleu(tlRadius), 1) + ')');
    }
    return 'RoundRect(' + ('rect=' + rect + ', ') + ('topLeft=' + CornerRadius__toString_impl_m3k4zq(tlRadius) + ', ') + ('topRight=' + CornerRadius__toString_impl_m3k4zq(trRadius) + ', ') + ('bottomRight=' + CornerRadius__toString_impl_m3k4zq(brRadius) + ', ') + ('bottomLeft=' + CornerRadius__toString_impl_m3k4zq(blRadius) + ')');
  };
  protoOf(RoundRect).hashCode = function () {
    var result = getNumberHashCode(this.s3g_1);
    result = imul(result, 31) + getNumberHashCode(this.t3g_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u3g_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v3g_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.w3g_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.x3g_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.y3g_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.z3g_1) | 0;
    return result;
  };
  protoOf(RoundRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundRect))
      return false;
    var tmp0_other_with_cast = other instanceof RoundRect ? other : THROW_CCE();
    if (!equals(this.s3g_1, tmp0_other_with_cast.s3g_1))
      return false;
    if (!equals(this.t3g_1, tmp0_other_with_cast.t3g_1))
      return false;
    if (!equals(this.u3g_1, tmp0_other_with_cast.u3g_1))
      return false;
    if (!equals(this.v3g_1, tmp0_other_with_cast.v3g_1))
      return false;
    if (!equals(this.w3g_1, tmp0_other_with_cast.w3g_1))
      return false;
    if (!equals(this.x3g_1, tmp0_other_with_cast.x3g_1))
      return false;
    if (!equals(this.y3g_1, tmp0_other_with_cast.y3g_1))
      return false;
    if (!equals(this.z3g_1, tmp0_other_with_cast.z3g_1))
      return false;
    return true;
  };
  function get_isSimple(_this__u8e3s4) {
    return _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.w3g_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.w3g_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.w3g_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.x3g_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.w3g_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.x3g_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.w3g_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.y3g_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.w3g_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.y3g_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.w3g_1) === _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.z3g_1) && _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.w3g_1) === _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.z3g_1);
  }
  function RoundRect_0(rect, topLeft, topRight, bottomRight, bottomLeft) {
    topLeft = topLeft === VOID ? Companion_getInstance().v3f_1 : topLeft;
    topRight = topRight === VOID ? Companion_getInstance().v3f_1 : topRight;
    bottomRight = bottomRight === VOID ? Companion_getInstance().v3f_1 : bottomRight;
    bottomLeft = bottomLeft === VOID ? Companion_getInstance().v3f_1 : bottomLeft;
    return new RoundRect(rect.i3g_1, rect.j3g_1, rect.k3g_1, rect.l3g_1, topLeft, topRight, bottomRight, bottomLeft);
  }
  function RoundRect_1(left, top, right, bottom, cornerRadius) {
    return RoundRect_2(left, top, right, bottom, _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius));
  }
  function RoundRect_2(left, top, right, bottom, radiusX, radiusY) {
    var radius = CornerRadius_0(radiusX, radiusY);
    return new RoundRect(left, top, right, bottom, radius, radius, radius, radius);
  }
  function _Size___init__impl__aywn0g(packedValue) {
    return packedValue;
  }
  function _Size___get_packedValue__impl__7rlt1o($this) {
    return $this;
  }
  function _Size___get_width__impl__58y75t($this) {
    if (_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).i3(32).f1();
    return floatFromBits(bits);
  }
  function _Size___get_height__impl__a04p02($this) {
    if (_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).k3(new Long(-1, 0)).f1();
    return floatFromBits(bits);
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.b3h_1 = _Size___init__impl__aywn0g(new Long(0, 0));
    this.c3h_1 = _Size___init__impl__aywn0g(new Long(2143289344, 2143289344));
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function _Size___get_minDimension__impl__4iso0r($this) {
    if (_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'androidx.compose.ui.util.unpackAbsFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o($this).i3(32).k3(new Long(2147483647, 0)).f1();
    var tmp2 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackAbsFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Size___get_packedValue__impl__7rlt1o($this).k3(new Long(2147483647, 0)).f1();
    // Inline function 'kotlin.math.min' call
    var b = floatFromBits(bits_0);
    return Math.min(tmp2, b);
  }
  function Size__toString_impl_o87ni8($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    if (!_Size___get_packedValue__impl__7rlt1o($this).equals(new Long(2143289344, 2143289344))) {
      tmp = 'Size(' + toStringAsFixed(_Size___get_width__impl__58y75t($this), 1) + ', ' + toStringAsFixed(_Size___get_height__impl__a04p02($this), 1) + ')';
    } else {
      tmp = 'Size.Unspecified';
    }
    return tmp;
  }
  function Size__hashCode_impl_2h1qpd($this) {
    return $this.hashCode();
  }
  function Size__equals_impl_gzcc1f($this, other) {
    if (!(other instanceof Size))
      return false;
    var tmp0_other_with_cast = other instanceof Size ? other.d3h_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Size(packedValue) {
    Companion_getInstance_3();
    this.d3h_1 = packedValue;
  }
  protoOf(Size).toString = function () {
    return Size__toString_impl_o87ni8(this.d3h_1);
  };
  protoOf(Size).hashCode = function () {
    return Size__hashCode_impl_2h1qpd(this.d3h_1);
  };
  protoOf(Size).equals = function (other) {
    return Size__equals_impl_gzcc1f(this.d3h_1, other);
  };
  function toRect_0(_this__u8e3s4) {
    return Rect_0(Companion_getInstance_0().d3g_1, _this__u8e3s4);
  }
  function Size_0(width, height) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toRawBits(width));
    var v2 = toLong(toRawBits(height));
    var tmp$ret$0 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$0);
  }
  function get_center(_this__u8e3s4) {
    if (_Size___get_packedValue__impl__7rlt1o(_this__u8e3s4).equals(new Long(2143289344, 2143289344))) {
      throwIllegalStateException('Size is unspecified');
    }
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4).i3(32).f1();
    var tmp = floatFromBits(bits) / 2.0;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4).k3(new Long(-1, 0)).f1();
    var tmp$ret$5 = floatFromBits(bits_0);
    return Offset_0(tmp, tmp$ret$5 / 2.0);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CornerRadius_0;
  _.$_$.b = CornerRadius;
  _.$_$.c = MutableRect;
  _.$_$.d = Offset_0;
  _.$_$.e = Offset;
  _.$_$.f = Rect_0;
  _.$_$.g = Rect;
  _.$_$.h = RoundRect_0;
  _.$_$.i = RoundRect_1;
  _.$_$.j = RoundRect;
  _.$_$.k = Size_0;
  _.$_$.l = Size;
  _.$_$.m = get_center;
  _.$_$.n = get_isFinite;
  _.$_$.o = get_isSimple;
  _.$_$.p = get_isUnspecified;
  _.$_$.q = toRect;
  _.$_$.r = toRect_0;
  _.$_$.s = _CornerRadius___get_x__impl__1594cn;
  _.$_$.t = _CornerRadius___get_y__impl__tyvleu;
  _.$_$.u = Offset__getDistanceSquared_impl_97mhi6;
  _.$_$.v = Offset__getDistance_impl_pclvxn;
  _.$_$.w = Offset__hashCode_impl_hbql41;
  _.$_$.x = Offset__isValid_impl_z7krde;
  _.$_$.y = Offset__minus_impl_hoj2c0;
  _.$_$.z = Offset__plus_impl_c78cg0;
  _.$_$.a1 = Offset__times_impl_jz1mli;
  _.$_$.b1 = Offset__toString_impl_4ffbou;
  _.$_$.c1 = Offset__unaryMinus_impl_ssu2iv;
  _.$_$.d1 = _Offset___get_x__impl__xvi35n;
  _.$_$.e1 = _Offset___get_y__impl__8bzhra;
  _.$_$.f1 = Size__hashCode_impl_2h1qpd;
  _.$_$.g1 = _Size___get_height__impl__a04p02;
  _.$_$.h1 = _Size___get_minDimension__impl__4iso0r;
  _.$_$.i1 = _Size___get_packedValue__impl__7rlt1o;
  _.$_$.j1 = Size__toString_impl_o87ni8;
  _.$_$.k1 = _Size___get_width__impl__58y75t;
  _.$_$.l1 = Companion_getInstance;
  _.$_$.m1 = Companion_getInstance_0;
  _.$_$.n1 = Companion_getInstance_1;
  _.$_$.o1 = Companion_getInstance_3;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-geometry.js.map
