(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-geometry.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-unit'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-unit'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-unit'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-unit'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-unit'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_geometry) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Long = kotlin_kotlin.$_$.ue;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var VOID = kotlin_kotlin.$_$.e;
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.la;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var coerceIn = kotlin_kotlin.$_$.dc;
  var coerceAtLeast = kotlin_kotlin.$_$.yb;
  var toLong = kotlin_kotlin.$_$.mb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var roundToInt = kotlin_kotlin.$_$.tb;
  var isInfinite = kotlin_kotlin.$_$.sf;
  var equals = kotlin_kotlin.$_$.ba;
  var toString = kotlin_kotlin.$_$.ob;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var initMetadataForInterface = kotlin_kotlin.$_$.na;
  var getNumberHashCode = kotlin_kotlin.$_$.ga;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.o3;
  var floatFromBits = kotlin_kotlin.$_$.da;
  var compareTo = kotlin_kotlin.$_$.z9;
  var isNaN_0 = kotlin_kotlin.$_$.tf;
  var Comparable = kotlin_kotlin.$_$.ne;
  var toRawBits = kotlin_kotlin.$_$.hg;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var Enum = kotlin_kotlin.$_$.pe;
  var toBits = kotlin_kotlin.$_$.fg;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Constraints, 'Constraints');
  function toDp(_this__u8e3s4) {
    // Inline function 'kotlin.check' call
    if (!equals(_TextUnit___get_type__impl__uc2olt(_this__u8e3s4), Companion_getInstance_8().p3h_1)) {
      // Inline function 'androidx.compose.ui.unit.FontScalingLinear.toDp.<anonymous>' call
      var message = 'Only Sp can convert to Px';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return _Dp___init__impl__ms3zkb(_TextUnit___get_value__impl__hpbx0k(_this__u8e3s4) * this.u3h());
  }
  initMetadataForInterface(FontScalingLinear, 'FontScalingLinear');
  function toPx(_this__u8e3s4) {
    return _Dp___get_value__impl__geb1vb(_this__u8e3s4) * this.k3h();
  }
  function roundToPx(_this__u8e3s4) {
    var px = this.l3h(_this__u8e3s4);
    var tmp;
    if (isInfinite(px)) {
      tmp = 2147483647;
    } else {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      tmp = roundToInt(px);
    }
    return tmp;
  }
  function toPx_0(_this__u8e3s4) {
    // Inline function 'kotlin.check' call
    if (!equals(_TextUnit___get_type__impl__uc2olt(_this__u8e3s4), Companion_getInstance_8().p3h_1)) {
      // Inline function 'androidx.compose.ui.unit.Density.toPx.<anonymous>' call
      var message = 'Only Sp can convert to Px';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return this.l3h(this.r3h(_this__u8e3s4));
  }
  function toDp_0(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = _this__u8e3s4 / this.k3h();
    return _Dp___init__impl__ms3zkb(this_0);
  }
  function toSize(_this__u8e3s4) {
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!_DpSize___get_packedValue__impl__jx4au8(_this__u8e3s4).equals(new Long(2143289344, 2143289344))) {
      tmp = Size(this.l3h(_DpSize___get_width__impl__o3d5gt(_this__u8e3s4)), this.l3h(_DpSize___get_height__impl__5xueo2(_this__u8e3s4)));
    } else {
      tmp = Companion_getInstance().c3h_1;
    }
    return tmp;
  }
  initMetadataForInterface(Density, 'Density', VOID, VOID, [FontScalingLinear]);
  initMetadataForClass(DensityImpl, 'DensityImpl', VOID, VOID, [Density]);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Dp, 'Dp', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(DpOffset, 'DpOffset');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(IntOffset, 'IntOffset');
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(IntRect, 'IntRect');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(IntSize, 'IntSize');
  initMetadataForClass(LayoutDirection, 'LayoutDirection', VOID, Enum);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(TextUnit, 'TextUnit');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(TextUnitType, 'TextUnitType');
  //endregion
  function _Constraints___init__impl__v8ud31(value) {
    return value;
  }
  function _Constraints___get_value__impl__3ah2ax($this) {
    return $this;
  }
  function _Constraints___get_minWidth__impl__hi9lfi($this) {
    // Inline function 'androidx.compose.ui.unit.Constraints.focusIndex' call
    // Inline function 'androidx.compose.ui.unit.indexToBitOffset' call
    var index = _Constraints___get_value__impl__3ah2ax($this).k3(new Long(3, 0)).f1();
    // Inline function 'androidx.compose.ui.unit.widthMask' call
    var mask = (1 << (13 + (((index & 1) << 1) + imul((index & 2) >> 1, 3) | 0) | 0)) - 1 | 0;
    return _Constraints___get_value__impl__3ah2ax($this).i3(2).f1() & mask;
  }
  function _Constraints___get_maxWidth__impl__uuyqc($this) {
    // Inline function 'androidx.compose.ui.unit.Constraints.focusIndex' call
    // Inline function 'androidx.compose.ui.unit.indexToBitOffset' call
    var index = _Constraints___get_value__impl__3ah2ax($this).k3(new Long(3, 0)).f1();
    // Inline function 'androidx.compose.ui.unit.widthMask' call
    var mask = (1 << (13 + (((index & 1) << 1) + imul((index & 2) >> 1, 3) | 0) | 0)) - 1 | 0;
    var width = _Constraints___get_value__impl__3ah2ax($this).i3(33).f1() & mask;
    return width === 0 ? 2147483647 : width - 1 | 0;
  }
  function _Constraints___get_minHeight__impl__ev4bgx($this) {
    // Inline function 'androidx.compose.ui.unit.Constraints.focusIndex' call
    // Inline function 'androidx.compose.ui.unit.indexToBitOffset' call
    var index = _Constraints___get_value__impl__3ah2ax($this).k3(new Long(3, 0)).f1();
    var bitOffset = ((index & 1) << 1) + imul((index & 2) >> 1, 3) | 0;
    // Inline function 'androidx.compose.ui.unit.heightMask' call
    var mask = (1 << (18 - bitOffset | 0)) - 1 | 0;
    // Inline function 'androidx.compose.ui.unit.minHeightOffsets' call
    var offset = 15 + bitOffset | 0;
    return _Constraints___get_value__impl__3ah2ax($this).i3(offset).f1() & mask;
  }
  function _Constraints___get_maxHeight__impl__dt3e8z($this) {
    // Inline function 'androidx.compose.ui.unit.Constraints.focusIndex' call
    // Inline function 'androidx.compose.ui.unit.indexToBitOffset' call
    var index = _Constraints___get_value__impl__3ah2ax($this).k3(new Long(3, 0)).f1();
    var bitOffset = ((index & 1) << 1) + imul((index & 2) >> 1, 3) | 0;
    // Inline function 'androidx.compose.ui.unit.heightMask' call
    var mask = (1 << (18 - bitOffset | 0)) - 1 | 0;
    // Inline function 'androidx.compose.ui.unit.minHeightOffsets' call
    var offset = (15 + bitOffset | 0) + 31 | 0;
    var height = _Constraints___get_value__impl__3ah2ax($this).i3(offset).f1() & mask;
    return height === 0 ? 2147483647 : height - 1 | 0;
  }
  function _Constraints___get_hasBoundedWidth__impl__7hd0wr($this) {
    // Inline function 'androidx.compose.ui.unit.Constraints.focusIndex' call
    // Inline function 'androidx.compose.ui.unit.indexToBitOffset' call
    var index = _Constraints___get_value__impl__3ah2ax($this).k3(new Long(3, 0)).f1();
    // Inline function 'androidx.compose.ui.unit.widthMask' call
    var mask = (1 << (13 + (((index & 1) << 1) + imul((index & 2) >> 1, 3) | 0) | 0)) - 1 | 0;
    return !((_Constraints___get_value__impl__3ah2ax($this).i3(33).f1() & mask) === 0);
  }
  function _Constraints___get_hasBoundedHeight__impl__bsh4rw($this) {
    // Inline function 'androidx.compose.ui.unit.Constraints.focusIndex' call
    // Inline function 'androidx.compose.ui.unit.indexToBitOffset' call
    var index = _Constraints___get_value__impl__3ah2ax($this).k3(new Long(3, 0)).f1();
    var bitOffset = ((index & 1) << 1) + imul((index & 2) >> 1, 3) | 0;
    // Inline function 'androidx.compose.ui.unit.heightMask' call
    var mask = (1 << (18 - bitOffset | 0)) - 1 | 0;
    // Inline function 'androidx.compose.ui.unit.minHeightOffsets' call
    var offset = (15 + bitOffset | 0) + 31 | 0;
    return !((_Constraints___get_value__impl__3ah2ax($this).i3(offset).f1() & mask) === 0);
  }
  function Constraints__copy_impl_ivfv3y($this, minWidth, maxWidth, minHeight, maxHeight) {
    // Inline function 'androidx.compose.ui.unit.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(minHeight >= 0 && minWidth >= 0)) {
      // Inline function 'androidx.compose.ui.unit.Constraints.copy.<anonymous>' call
      var tmp$ret$0 = 'minHeight(' + minHeight + ') and minWidth(' + minWidth + ') must be >= 0';
      throwIllegalArgumentException(tmp$ret$0);
    }
    // Inline function 'androidx.compose.ui.unit.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(maxWidth >= minWidth)) {
      // Inline function 'androidx.compose.ui.unit.Constraints.copy.<anonymous>' call
      var tmp$ret$1 = 'maxWidth(' + maxWidth + ') must be >= minWidth(' + minWidth + ')';
      throwIllegalArgumentException(tmp$ret$1);
    }
    // Inline function 'androidx.compose.ui.unit.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(maxHeight >= minHeight)) {
      // Inline function 'androidx.compose.ui.unit.Constraints.copy.<anonymous>' call
      var tmp$ret$2 = 'maxHeight(' + maxHeight + ') must be >= minHeight(' + minHeight + ')';
      throwIllegalArgumentException(tmp$ret$2);
    }
    return createConstraints(minWidth, maxWidth, minHeight, maxHeight);
  }
  function Constraints__copy$default_impl_f452rp($this, minWidth, maxWidth, minHeight, maxHeight, $super) {
    minWidth = minWidth === VOID ? _Constraints___get_minWidth__impl__hi9lfi($this) : minWidth;
    maxWidth = maxWidth === VOID ? _Constraints___get_maxWidth__impl__uuyqc($this) : maxWidth;
    minHeight = minHeight === VOID ? _Constraints___get_minHeight__impl__ev4bgx($this) : minHeight;
    maxHeight = maxHeight === VOID ? _Constraints___get_maxHeight__impl__dt3e8z($this) : maxHeight;
    var tmp;
    if ($super === VOID) {
      tmp = Constraints__copy_impl_ivfv3y($this, minWidth, maxWidth, minHeight, maxHeight);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Constraints(tmp_0)).f3h.call(new Constraints($this), minWidth, maxWidth, minHeight, maxHeight).e3h_1;
    }
    return tmp;
  }
  function Constraints__toString_impl_37yskr($this) {
    var maxWidth = _Constraints___get_maxWidth__impl__uuyqc($this);
    var maxWidthStr = maxWidth === 2147483647 ? 'Infinity' : maxWidth.toString();
    var maxHeight = _Constraints___get_maxHeight__impl__dt3e8z($this);
    var maxHeightStr = maxHeight === 2147483647 ? 'Infinity' : maxHeight.toString();
    return 'Constraints(minWidth = ' + _Constraints___get_minWidth__impl__hi9lfi($this) + ', maxWidth = ' + maxWidthStr + ', ' + ('minHeight = ' + _Constraints___get_minHeight__impl__ev4bgx($this) + ', maxHeight = ' + maxHeightStr + ')');
  }
  function Companion() {
    this.g3h_1 = 2147483647;
  }
  protoOf(Companion).h3h = function (width, height) {
    // Inline function 'androidx.compose.ui.unit.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(width >= 0 && height >= 0)) {
      // Inline function 'androidx.compose.ui.unit.Companion.fixed.<anonymous>' call
      var tmp$ret$0 = 'width(' + width + ') and height(' + height + ') must be >= 0';
      throwIllegalArgumentException(tmp$ret$0);
    }
    return createConstraints(width, width, height, height);
  };
  protoOf(Companion).i3h = function (minWidth, maxWidth, minHeight, maxHeight) {
    // Inline function 'kotlin.math.min' call
    var minW = Math.min(minWidth, 262142);
    var tmp;
    if (maxWidth === 2147483647) {
      tmp = 2147483647;
    } else {
      // Inline function 'kotlin.math.min' call
      tmp = Math.min(maxWidth, 262142);
    }
    var maxW = tmp;
    var consumed = maxW === 2147483647 ? minW : maxW;
    var maxAllowed = maxAllowedForSize(consumed);
    var tmp_0;
    if (maxHeight === 2147483647) {
      tmp_0 = 2147483647;
    } else {
      // Inline function 'kotlin.math.min' call
      tmp_0 = Math.min(maxAllowed, maxHeight);
    }
    var maxH = tmp_0;
    // Inline function 'kotlin.math.min' call
    var minH = Math.min(maxAllowed, minHeight);
    return Constraints_0(minW, maxW, minH, maxH);
  };
  protoOf(Companion).j3h = function (minWidth, maxWidth, minHeight, maxHeight) {
    // Inline function 'kotlin.math.min' call
    var minH = Math.min(minHeight, 262142);
    var tmp;
    if (maxHeight === 2147483647) {
      tmp = 2147483647;
    } else {
      // Inline function 'kotlin.math.min' call
      tmp = Math.min(maxHeight, 262142);
    }
    var maxH = tmp;
    var consumed = maxH === 2147483647 ? minH : maxH;
    var maxAllowed = maxAllowedForSize(consumed);
    var tmp_0;
    if (maxWidth === 2147483647) {
      tmp_0 = 2147483647;
    } else {
      // Inline function 'kotlin.math.min' call
      tmp_0 = Math.min(maxAllowed, maxWidth);
    }
    var maxW = tmp_0;
    // Inline function 'kotlin.math.min' call
    var minW = Math.min(maxAllowed, minWidth);
    return Constraints_0(minW, maxW, minH, maxH);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function Constraints__hashCode_impl_ij7484($this) {
    return $this.hashCode();
  }
  function Constraints__equals_impl_33vs20($this, other) {
    if (!(other instanceof Constraints))
      return false;
    var tmp0_other_with_cast = other instanceof Constraints ? other.e3h_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function Constraints(value) {
    this.e3h_1 = value;
  }
  protoOf(Constraints).toString = function () {
    return Constraints__toString_impl_37yskr(this.e3h_1);
  };
  protoOf(Constraints).hashCode = function () {
    return Constraints__hashCode_impl_ij7484(this.e3h_1);
  };
  protoOf(Constraints).equals = function (other) {
    return Constraints__equals_impl_33vs20(this.e3h_1, other);
  };
  function Constraints_0(minWidth, maxWidth, minHeight, maxHeight) {
    minWidth = minWidth === VOID ? 0 : minWidth;
    maxWidth = maxWidth === VOID ? 2147483647 : maxWidth;
    minHeight = minHeight === VOID ? 0 : minHeight;
    maxHeight = maxHeight === VOID ? 2147483647 : maxHeight;
    // Inline function 'androidx.compose.ui.unit.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(maxWidth >= minWidth)) {
      // Inline function 'androidx.compose.ui.unit.Constraints.<anonymous>' call
      var tmp$ret$0 = 'maxWidth(' + maxWidth + ') must be >= than minWidth(' + minWidth + ')';
      throwIllegalArgumentException(tmp$ret$0);
    }
    // Inline function 'androidx.compose.ui.unit.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(maxHeight >= minHeight)) {
      // Inline function 'androidx.compose.ui.unit.Constraints.<anonymous>' call
      var tmp$ret$1 = 'maxHeight(' + maxHeight + ') must be >= than minHeight(' + minHeight + ')';
      throwIllegalArgumentException(tmp$ret$1);
    }
    // Inline function 'androidx.compose.ui.unit.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(minWidth >= 0 && minHeight >= 0)) {
      // Inline function 'androidx.compose.ui.unit.Constraints.<anonymous>' call
      var tmp$ret$2 = 'minWidth(' + minWidth + ') and minHeight(' + minHeight + ') must be >= 0';
      throwIllegalArgumentException(tmp$ret$2);
    }
    return createConstraints(minWidth, maxWidth, minHeight, maxHeight);
  }
  function constrain(_this__u8e3s4, size) {
    return IntSize_0(coerceIn(_IntSize___get_width__impl__d9yl4o(size), _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4), _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4)), coerceIn(_IntSize___get_height__impl__prv63b(size), _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4), _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4)));
  }
  function offset(_this__u8e3s4, horizontal, vertical) {
    horizontal = horizontal === VOID ? 0 : horizontal;
    vertical = vertical === VOID ? 0 : vertical;
    return Constraints_0(coerceAtLeast(_Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4) + horizontal | 0, 0), addMaxWithMinimum(_Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4), horizontal), coerceAtLeast(_Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4) + vertical | 0, 0), addMaxWithMinimum(_Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4), vertical));
  }
  function createConstraints(minWidth, maxWidth, minHeight, maxHeight) {
    var heightVal = maxHeight === 2147483647 ? minHeight : maxHeight;
    var heightBits = bitsNeedForSizeUnchecked(heightVal);
    var widthVal = maxWidth === 2147483647 ? minWidth : maxWidth;
    var widthBits = bitsNeedForSizeUnchecked(widthVal);
    if ((widthBits + heightBits | 0) > 31) {
      invalidConstraint(widthVal, heightVal);
    }
    var maxWidthValue = maxWidth + 1 | 0;
    maxWidthValue = maxWidthValue & ~(maxWidthValue >> 31);
    var maxHeightValue = maxHeight + 1 | 0;
    maxHeightValue = maxHeightValue & ~(maxHeightValue >> 31);
    var focus;
    switch (widthBits) {
      case 15:
        focus = 1;
        break;
      case 16:
        focus = 2;
        break;
      case 13:
        focus = 0;
        break;
      case 18:
        focus = 3;
        break;
      default:
        focus = 0;
        break;
    }
    // Inline function 'androidx.compose.ui.unit.indexToBitOffset' call
    var index = focus;
    // Inline function 'androidx.compose.ui.unit.minHeightOffsets' call
    var minHeightOffset = 15 + (((index & 1) << 1) + imul((index & 2) >> 1, 3) | 0) | 0;
    var maxHeightOffset = minHeightOffset + 31 | 0;
    var value = toLong(focus).l3(toLong(minWidth).h3(2)).l3(toLong(maxWidthValue).h3(33)).l3(toLong(minHeight).h3(minHeightOffset)).l3(toLong(maxHeightValue).h3(maxHeightOffset));
    return _Constraints___init__impl__v8ud31(value);
  }
  function maxAllowedForSize(size) {
    var tmp;
    if (size < 8191) {
      tmp = 262142;
    } else if (size < 32767) {
      tmp = 65534;
    } else if (size < 65535) {
      tmp = 32766;
    } else if (size < 262143) {
      tmp = 8190;
    } else {
      invalidSize(size);
    }
    return tmp;
  }
  function addMaxWithMinimum(max, value) {
    var tmp;
    if (max === 2147483647) {
      tmp = max;
    } else {
      tmp = coerceAtLeast(max + value | 0, 0);
    }
    return tmp;
  }
  function bitsNeedForSizeUnchecked(size) {
    return size < 8191 ? 13 : size < 32767 ? 15 : size < 65535 ? 16 : size < 262143 ? 18 : 255;
  }
  function invalidConstraint(widthVal, heightVal) {
    throw IllegalArgumentException_init_$Create$("Can't represent a width of " + widthVal + ' and height of ' + heightVal + ' in Constraints');
  }
  function invalidSize(size) {
    throw IllegalArgumentException_init_$Create$("Can't represent a size of " + size + ' in Constraints');
  }
  function constrainWidth(_this__u8e3s4, width) {
    return coerceIn(width, _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4), _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4));
  }
  function constrainHeight(_this__u8e3s4, height) {
    return coerceIn(height, _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4), _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4));
  }
  function constrain_0(_this__u8e3s4, otherConstraints) {
    return Constraints_0(coerceIn(_Constraints___get_minWidth__impl__hi9lfi(otherConstraints), _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4), _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4)), coerceIn(_Constraints___get_maxWidth__impl__uuyqc(otherConstraints), _Constraints___get_minWidth__impl__hi9lfi(_this__u8e3s4), _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4)), coerceIn(_Constraints___get_minHeight__impl__ev4bgx(otherConstraints), _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4), _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4)), coerceIn(_Constraints___get_maxHeight__impl__dt3e8z(otherConstraints), _Constraints___get_minHeight__impl__ev4bgx(_this__u8e3s4), _Constraints___get_maxHeight__impl__dt3e8z(_this__u8e3s4)));
  }
  function Density() {
  }
  function Density_0(density, fontScale) {
    fontScale = fontScale === VOID ? 1.0 : fontScale;
    return new DensityImpl(density, fontScale);
  }
  function DensityImpl(density, fontScale) {
    this.v3h_1 = density;
    this.w3h_1 = fontScale;
  }
  protoOf(DensityImpl).k3h = function () {
    return this.v3h_1;
  };
  protoOf(DensityImpl).u3h = function () {
    return this.w3h_1;
  };
  protoOf(DensityImpl).toString = function () {
    return 'DensityImpl(density=' + this.v3h_1 + ', fontScale=' + this.w3h_1 + ')';
  };
  protoOf(DensityImpl).hashCode = function () {
    var result = getNumberHashCode(this.v3h_1);
    result = imul(result, 31) + getNumberHashCode(this.w3h_1) | 0;
    return result;
  };
  protoOf(DensityImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DensityImpl))
      return false;
    var tmp0_other_with_cast = other instanceof DensityImpl ? other : THROW_CCE();
    if (!equals(this.v3h_1, tmp0_other_with_cast.v3h_1))
      return false;
    if (!equals(this.w3h_1, tmp0_other_with_cast.w3h_1))
      return false;
    return true;
  };
  function _DpSize___init__impl__t4mur0(packedValue) {
    return packedValue;
  }
  function _DpSize___get_packedValue__impl__jx4au8($this) {
    return $this;
  }
  function _DpSize___get_width__impl__o3d5gt($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _DpSize___get_packedValue__impl__jx4au8($this).i3(32).f1();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = floatFromBits(bits);
    return _Dp___init__impl__ms3zkb(this_0);
  }
  function _DpSize___get_height__impl__5xueo2($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _DpSize___get_packedValue__impl__jx4au8($this).k3(new Long(-1, 0)).f1();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = floatFromBits(bits);
    return _Dp___init__impl__ms3zkb(this_0);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.x3h_1 = _DpSize___init__impl__t4mur0(new Long(0, 0));
    this.y3h_1 = _DpSize___init__impl__t4mur0(new Long(2143289344, 2143289344));
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function _Dp___init__impl__ms3zkb(value) {
    return value;
  }
  function _Dp___get_value__impl__geb1vb($this) {
    return $this;
  }
  function Dp__compareTo_impl_tlg3dl($this, other) {
    return compareTo(_Dp___get_value__impl__geb1vb($this), _Dp___get_value__impl__geb1vb(other));
  }
  function Dp__compareTo_impl_tlg3dl_0($this, other) {
    return Dp__compareTo_impl_tlg3dl($this.z3h_1, other instanceof Dp ? other.z3h_1 : THROW_CCE());
  }
  function Dp__toString_impl_kcddez($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (isNaN_0(_Dp___get_value__impl__geb1vb($this))) {
      tmp = 'Dp.Unspecified';
    } else {
      tmp = '' + _Dp___get_value__impl__geb1vb($this) + '.dp';
    }
    return tmp;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.a3i_1 = _Dp___init__impl__ms3zkb(0.0);
    var tmp = this;
    tmp.b3i_1 = _Dp___init__impl__ms3zkb(Infinity);
    var tmp_0 = this;
    tmp_0.c3i_1 = _Dp___init__impl__ms3zkb(NaN);
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Dp__hashCode_impl_sxkrra($this) {
    return getNumberHashCode($this);
  }
  function Dp__equals_impl_bc4gpq($this, other) {
    if (!(other instanceof Dp))
      return false;
    var tmp0_other_with_cast = other instanceof Dp ? other.z3h_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Dp(value) {
    Companion_getInstance_2();
    this.z3h_1 = value;
  }
  protoOf(Dp).d3i = function (other) {
    return Dp__compareTo_impl_tlg3dl(this.z3h_1, other);
  };
  protoOf(Dp).d = function (other) {
    return Dp__compareTo_impl_tlg3dl_0(this, other);
  };
  protoOf(Dp).toString = function () {
    return Dp__toString_impl_kcddez(this.z3h_1);
  };
  protoOf(Dp).hashCode = function () {
    return Dp__hashCode_impl_sxkrra(this.z3h_1);
  };
  protoOf(Dp).equals = function (other) {
    return Dp__equals_impl_bc4gpq(this.z3h_1, other);
  };
  function DpSize(width, height) {
    var tmp0 = _Dp___get_value__impl__geb1vb(width);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _Dp___get_value__impl__geb1vb(height);
    var v1 = toLong(toRawBits(tmp0));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$0 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _DpSize___init__impl__t4mur0(tmp$ret$0);
  }
  function _DpOffset___init__impl__yq36wy(packedValue) {
    return packedValue;
  }
  function _DpOffset___get_packedValue__impl__7zqn8y($this) {
    return $this;
  }
  function _DpOffset___get_x__impl__uauqb5($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _DpOffset___get_packedValue__impl__7zqn8y($this).i3(32).f1();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = floatFromBits(bits);
    return _Dp___init__impl__ms3zkb(this_0);
  }
  function _DpOffset___get_y__impl__1h898y($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _DpOffset___get_packedValue__impl__7zqn8y($this).k3(new Long(-1, 0)).f1();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = floatFromBits(bits);
    return _Dp___init__impl__ms3zkb(this_0);
  }
  function DpOffset__toString_impl_qqhvsu($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!_DpOffset___get_packedValue__impl__7zqn8y($this).equals(new Long(2143289344, 2143289344))) {
      tmp = '(' + Dp__toString_impl_kcddez(_DpOffset___get_x__impl__uauqb5($this)) + ', ' + Dp__toString_impl_kcddez(_DpOffset___get_y__impl__1h898y($this)) + ')';
    } else {
      tmp = 'DpOffset.Unspecified';
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.e3i_1 = _DpOffset___init__impl__yq36wy(new Long(0, 0));
    this.f3i_1 = _DpOffset___init__impl__yq36wy(new Long(2143289344, 2143289344));
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function DpOffset__hashCode_impl_mjg9df($this) {
    return $this.hashCode();
  }
  function DpOffset__equals_impl_7fc41d($this, other) {
    if (!(other instanceof DpOffset))
      return false;
    var tmp0_other_with_cast = other instanceof DpOffset ? other.g3i_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function DpOffset(packedValue) {
    Companion_getInstance_3();
    this.g3i_1 = packedValue;
  }
  protoOf(DpOffset).toString = function () {
    return DpOffset__toString_impl_qqhvsu(this.g3i_1);
  };
  protoOf(DpOffset).hashCode = function () {
    return DpOffset__hashCode_impl_mjg9df(this.g3i_1);
  };
  protoOf(DpOffset).equals = function (other) {
    return DpOffset__equals_impl_7fc41d(this.g3i_1, other);
  };
  function DpOffset_0(x, y) {
    var tmp0 = _Dp___get_value__impl__geb1vb(x);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _Dp___get_value__impl__geb1vb(y);
    var v1 = toLong(toRawBits(tmp0));
    var v2 = toLong(toRawBits(val2));
    var tmp$ret$0 = v1.h3(32).l3(v2.k3(new Long(-1, 0)));
    return _DpOffset___init__impl__yq36wy(tmp$ret$0);
  }
  function FontScalingLinear() {
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function _IntOffset___init__impl__rq8h7b(packedValue) {
    return packedValue;
  }
  function _IntOffset___get_packedValue__impl__982pbx($this) {
    return $this;
  }
  function _IntOffset___get_x__impl__qiqr5o($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _IntOffset___get_packedValue__impl__982pbx($this).i3(32).f1();
  }
  function _IntOffset___get_y__impl__2avpwj($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    return _IntOffset___get_packedValue__impl__982pbx($this).k3(new Long(-1, 0)).f1();
  }
  function IntOffset__minus_impl_4m69hb($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var tmp = _IntOffset___get_packedValue__impl__982pbx($this).i3(32).f1();
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var tmp4 = tmp - _IntOffset___get_packedValue__impl__982pbx(other).i3(32).f1() | 0;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var tmp_0 = _IntOffset___get_packedValue__impl__982pbx($this).k3(new Long(-1, 0)).f1();
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = tmp_0 - _IntOffset___get_packedValue__impl__982pbx(other).k3(new Long(-1, 0)).f1() | 0;
    var tmp$ret$4 = toLong(tmp4).h3(32).l3(toLong(val2).k3(new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$4);
  }
  function IntOffset__plus_impl_nqoa9b($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var tmp = _IntOffset___get_packedValue__impl__982pbx($this).i3(32).f1();
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var tmp4 = tmp + _IntOffset___get_packedValue__impl__982pbx(other).i3(32).f1() | 0;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var tmp_0 = _IntOffset___get_packedValue__impl__982pbx($this).k3(new Long(-1, 0)).f1();
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = tmp_0 + _IntOffset___get_packedValue__impl__982pbx(other).k3(new Long(-1, 0)).f1() | 0;
    var tmp$ret$4 = toLong(tmp4).h3(32).l3(toLong(val2).k3(new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$4);
  }
  function IntOffset__toString_impl_h46d8h($this) {
    return '(' + _IntOffset___get_x__impl__qiqr5o($this) + ', ' + _IntOffset___get_y__impl__2avpwj($this) + ')';
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.h3i_1 = _IntOffset___init__impl__rq8h7b(new Long(0, 0));
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function IntOffset__hashCode_impl_w5rrxs($this) {
    return $this.hashCode();
  }
  function IntOffset__equals_impl_45wak4($this, other) {
    if (!(other instanceof IntOffset))
      return false;
    var tmp0_other_with_cast = other instanceof IntOffset ? other.i3i_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function IntOffset(packedValue) {
    Companion_getInstance_4();
    this.i3i_1 = packedValue;
  }
  protoOf(IntOffset).toString = function () {
    return IntOffset__toString_impl_h46d8h(this.i3i_1);
  };
  protoOf(IntOffset).hashCode = function () {
    return IntOffset__hashCode_impl_w5rrxs(this.i3i_1);
  };
  protoOf(IntOffset).equals = function (other) {
    return IntOffset__equals_impl_45wak4(this.i3i_1, other);
  };
  function IntOffset_0(x, y) {
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = toLong(x).h3(32).l3(toLong(y).k3(new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$0);
  }
  function plus(_this__u8e3s4, offset) {
    return Offset(_Offset___get_x__impl__xvi35n(_this__u8e3s4) + _IntOffset___get_x__impl__qiqr5o(offset), _Offset___get_y__impl__8bzhra(_this__u8e3s4) + _IntOffset___get_y__impl__2avpwj(offset));
  }
  function minus(_this__u8e3s4, offset) {
    return Offset(_Offset___get_x__impl__xvi35n(_this__u8e3s4) - _IntOffset___get_x__impl__qiqr5o(offset), _Offset___get_y__impl__8bzhra(_this__u8e3s4) - _IntOffset___get_y__impl__2avpwj(offset));
  }
  function round(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_0 = _Offset___get_x__impl__xvi35n(_this__u8e3s4);
    var tmp2 = roundToInt(this_0);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    // Inline function 'kotlin.math.roundToInt' call
    var this_1 = _Offset___get_y__impl__8bzhra(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = roundToInt(this_1);
    var tmp$ret$4 = toLong(tmp2).h3(32).l3(toLong(val2).k3(new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$4);
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.j3i_1 = new IntRect(0, 0, 0, 0);
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function IntRect(left, top, right, bottom) {
    Companion_getInstance_5();
    this.k3i_1 = left;
    this.l3i_1 = top;
    this.m3i_1 = right;
    this.n3i_1 = bottom;
  }
  protoOf(IntRect).o3i = function (offset) {
    return _IntOffset___get_x__impl__qiqr5o(offset) >= this.k3i_1 && _IntOffset___get_x__impl__qiqr5o(offset) < this.m3i_1 && _IntOffset___get_y__impl__2avpwj(offset) >= this.l3i_1 && _IntOffset___get_y__impl__2avpwj(offset) < this.n3i_1;
  };
  protoOf(IntRect).toString = function () {
    return 'IntRect.fromLTRB(' + ('' + this.k3i_1 + ', ') + ('' + this.l3i_1 + ', ') + ('' + this.m3i_1 + ', ') + ('' + this.n3i_1 + ')');
  };
  protoOf(IntRect).hashCode = function () {
    var result = this.k3i_1;
    result = imul(result, 31) + this.l3i_1 | 0;
    result = imul(result, 31) + this.m3i_1 | 0;
    result = imul(result, 31) + this.n3i_1 | 0;
    return result;
  };
  protoOf(IntRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IntRect))
      return false;
    var tmp0_other_with_cast = other instanceof IntRect ? other : THROW_CCE();
    if (!(this.k3i_1 === tmp0_other_with_cast.k3i_1))
      return false;
    if (!(this.l3i_1 === tmp0_other_with_cast.l3i_1))
      return false;
    if (!(this.m3i_1 === tmp0_other_with_cast.m3i_1))
      return false;
    if (!(this.n3i_1 === tmp0_other_with_cast.n3i_1))
      return false;
    return true;
  };
  function toRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.k3i_1, _this__u8e3s4.l3i_1, _this__u8e3s4.m3i_1, _this__u8e3s4.n3i_1);
  }
  function IntRect_0(offset, size) {
    return new IntRect(_IntOffset___get_x__impl__qiqr5o(offset), _IntOffset___get_y__impl__2avpwj(offset), _IntOffset___get_x__impl__qiqr5o(offset) + _IntSize___get_width__impl__d9yl4o(size) | 0, _IntOffset___get_y__impl__2avpwj(offset) + _IntSize___get_height__impl__prv63b(size) | 0);
  }
  function _IntSize___init__impl__emcjft(packedValue) {
    return packedValue;
  }
  function _IntSize___get_packedValue__impl__uho7jf($this) {
    return $this;
  }
  function _IntSize___get_width__impl__d9yl4o($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _IntSize___get_packedValue__impl__uho7jf($this).i3(32).f1();
  }
  function _IntSize___get_height__impl__prv63b($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    return _IntSize___get_packedValue__impl__uho7jf($this).k3(new Long(-1, 0)).f1();
  }
  function IntSize__toString_impl_54w9zl($this) {
    return '' + _IntSize___get_width__impl__d9yl4o($this) + ' x ' + _IntSize___get_height__impl__prv63b($this);
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.p3i_1 = _IntSize___init__impl__emcjft(new Long(0, 0));
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function IntSize__hashCode_impl_gm9mta($this) {
    return $this.hashCode();
  }
  function IntSize__equals_impl_i3v38e($this, other) {
    if (!(other instanceof IntSize))
      return false;
    var tmp0_other_with_cast = other instanceof IntSize ? other.q3i_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function IntSize(packedValue) {
    Companion_getInstance_6();
    this.q3i_1 = packedValue;
  }
  protoOf(IntSize).toString = function () {
    return IntSize__toString_impl_54w9zl(this.q3i_1);
  };
  protoOf(IntSize).hashCode = function () {
    return IntSize__hashCode_impl_gm9mta(this.q3i_1);
  };
  protoOf(IntSize).equals = function (other) {
    return IntSize__equals_impl_i3v38e(this.q3i_1, other);
  };
  function IntSize_0(width, height) {
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = toLong(width).h3(32).l3(toLong(height).k3(new Long(-1, 0)));
    return _IntSize___init__impl__emcjft(tmp$ret$0);
  }
  function toSize_0(_this__u8e3s4) {
    return Size(_IntSize___get_width__impl__d9yl4o(_this__u8e3s4), _IntSize___get_height__impl__prv63b(_this__u8e3s4));
  }
  function toIntRect(_this__u8e3s4) {
    return IntRect_0(Companion_getInstance_4().h3i_1, _this__u8e3s4);
  }
  function get_center(_this__u8e3s4) {
    return _IntOffset___init__impl__rq8h7b(_IntSize___get_packedValue__impl__uho7jf(_this__u8e3s4).i3(33).h3(32).l3(_IntSize___get_packedValue__impl__uho7jf(_this__u8e3s4).h3(32).i3(33).k3(new Long(-1, 0))));
  }
  var LayoutDirection_Ltr_instance;
  var LayoutDirection_Rtl_instance;
  var LayoutDirection_entriesInitialized;
  function LayoutDirection_initEntries() {
    if (LayoutDirection_entriesInitialized)
      return Unit_instance;
    LayoutDirection_entriesInitialized = true;
    LayoutDirection_Ltr_instance = new LayoutDirection('Ltr', 0);
    LayoutDirection_Rtl_instance = new LayoutDirection('Rtl', 1);
  }
  function LayoutDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function LayoutDirection_Ltr_getInstance() {
    LayoutDirection_initEntries();
    return LayoutDirection_Ltr_instance;
  }
  function _TextUnit___init__impl__r5fj1s(packedValue) {
    return packedValue;
  }
  function _TextUnit___get_packedValue__impl__it60w4($this) {
    return $this;
  }
  function TextUnit__toString_impl_51ghw0($this) {
    var tmp0_subject = _TextUnit___get_type__impl__uc2olt($this);
    return equals(tmp0_subject, Companion_getInstance_8().o3h_1) ? 'Unspecified' : equals(tmp0_subject, Companion_getInstance_8().p3h_1) ? '' + _TextUnit___get_value__impl__hpbx0k($this) + '.sp' : equals(tmp0_subject, Companion_getInstance_8().q3h_1) ? '' + _TextUnit___get_value__impl__hpbx0k($this) + '.em' : 'Invalid';
  }
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.r3i_1 = [new TextUnitType(Companion_getInstance_8().o3h_1), new TextUnitType(Companion_getInstance_8().p3h_1), new TextUnitType(Companion_getInstance_8().q3h_1)];
    var tmp_0 = this;
    var tmp_1 = new Long(0, 0);
    tmp_0.s3i_1 = pack(tmp_1, NaN);
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function _TextUnit___get_rawType__impl__tu8yq5($this) {
    return _TextUnit___get_packedValue__impl__it60w4($this).k3(new Long(0, 255));
  }
  function _TextUnit___get_type__impl__uc2olt($this) {
    return Companion_getInstance_7().r3i_1[_TextUnit___get_rawType__impl__tu8yq5($this).j3(32).f1()].t3i_1;
  }
  function _TextUnit___get_isSp__impl__8c3r6q($this) {
    return _TextUnit___get_rawType__impl__tu8yq5($this).equals(new Long(0, 1));
  }
  function _TextUnit___get_isEm__impl__esrmtl($this) {
    return _TextUnit___get_rawType__impl__tu8yq5($this).equals(new Long(0, 2));
  }
  function _TextUnit___get_value__impl__hpbx0k($this) {
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = _TextUnit___get_packedValue__impl__it60w4($this).k3(new Long(-1, 0)).f1();
    return floatFromBits(bits);
  }
  function TextUnit__hashCode_impl_qsmeov($this) {
    return $this.hashCode();
  }
  function TextUnit__equals_impl_49w9tp($this, other) {
    if (!(other instanceof TextUnit))
      return false;
    var tmp0_other_with_cast = other instanceof TextUnit ? other.u3i_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextUnit(packedValue) {
    Companion_getInstance_7();
    this.u3i_1 = packedValue;
  }
  protoOf(TextUnit).toString = function () {
    return TextUnit__toString_impl_51ghw0(this.u3i_1);
  };
  protoOf(TextUnit).hashCode = function () {
    return TextUnit__hashCode_impl_qsmeov(this.u3i_1);
  };
  protoOf(TextUnit).equals = function (other) {
    return TextUnit__equals_impl_49w9tp(this.u3i_1, other);
  };
  function get_isUnspecified(_this__u8e3s4) {
    return _TextUnit___get_rawType__impl__tu8yq5(_this__u8e3s4).equals(new Long(0, 0));
  }
  function _TextUnitType___init__impl__br87qi(type) {
    return type;
  }
  function _TextUnitType___get_type__impl__sa627r($this) {
    return $this;
  }
  function TextUnitType__toString_impl_x93gyy($this) {
    return equals($this, Companion_getInstance_8().o3h_1) ? 'Unspecified' : equals($this, Companion_getInstance_8().p3h_1) ? 'Sp' : equals($this, Companion_getInstance_8().q3h_1) ? 'Em' : 'Invalid';
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.o3h_1 = _TextUnitType___init__impl__br87qi(new Long(0, 0));
    this.p3h_1 = _TextUnitType___init__impl__br87qi(new Long(0, 1));
    this.q3h_1 = _TextUnitType___init__impl__br87qi(new Long(0, 2));
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function TextUnitType__hashCode_impl_g0uo7b($this) {
    return $this.hashCode();
  }
  function TextUnitType__equals_impl_nrbaqr($this, other) {
    if (!(other instanceof TextUnitType))
      return false;
    var tmp0_other_with_cast = other instanceof TextUnitType ? other.t3i_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextUnitType(type) {
    Companion_getInstance_8();
    this.t3i_1 = type;
  }
  protoOf(TextUnitType).toString = function () {
    return TextUnitType__toString_impl_x93gyy(this.t3i_1);
  };
  protoOf(TextUnitType).hashCode = function () {
    return TextUnitType__hashCode_impl_g0uo7b(this.t3i_1);
  };
  protoOf(TextUnitType).equals = function (other) {
    return TextUnitType__equals_impl_nrbaqr(this.t3i_1, other);
  };
  function TextUnit_0(value, type) {
    return pack(_TextUnitType___get_type__impl__sa627r(type), value);
  }
  function get_sp(_this__u8e3s4) {
    return pack(new Long(0, 1), _this__u8e3s4);
  }
  function get_sp_0(_this__u8e3s4) {
    return pack(new Long(0, 1), _this__u8e3s4);
  }
  function checkArithmetic(a) {
    // Inline function 'kotlin.require' call
    if (!!get_isUnspecified(a)) {
      // Inline function 'androidx.compose.ui.unit.checkArithmetic.<anonymous>' call
      var message = 'Cannot perform operation for Unspecified type.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function pack(unitType, v) {
    return _TextUnit___init__impl__r5fj1s(unitType.l3(toLong(toBits(v)).k3(new Long(-1, 0))));
  }
  //region block: post-declaration
  protoOf(DensityImpl).l3h = toPx;
  protoOf(DensityImpl).n3h = toPx_0;
  protoOf(DensityImpl).m3h = roundToPx;
  protoOf(DensityImpl).s3h = toDp_0;
  protoOf(DensityImpl).r3h = toDp;
  protoOf(DensityImpl).t3h = toSize;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Constraints_0;
  _.$_$.b = Constraints;
  _.$_$.c = roundToPx;
  _.$_$.d = toDp_0;
  _.$_$.e = toPx;
  _.$_$.f = toPx_0;
  _.$_$.g = toSize;
  _.$_$.h = Density_0;
  _.$_$.i = Density;
  _.$_$.j = DpOffset_0;
  _.$_$.k = DpOffset;
  _.$_$.l = DpSize;
  _.$_$.m = Dp;
  _.$_$.n = toDp;
  _.$_$.o = IntOffset_0;
  _.$_$.p = IntOffset;
  _.$_$.q = IntRect_0;
  _.$_$.r = IntSize_0;
  _.$_$.s = IntSize;
  _.$_$.t = TextUnitType;
  _.$_$.u = TextUnit_0;
  _.$_$.v = TextUnit;
  _.$_$.w = get_center;
  _.$_$.x = checkArithmetic;
  _.$_$.y = constrainHeight;
  _.$_$.z = constrainWidth;
  _.$_$.a1 = constrain_0;
  _.$_$.b1 = constrain;
  _.$_$.c1 = get_isUnspecified;
  _.$_$.d1 = minus;
  _.$_$.e1 = offset;
  _.$_$.f1 = pack;
  _.$_$.g1 = plus;
  _.$_$.h1 = round;
  _.$_$.i1 = get_sp_0;
  _.$_$.j1 = get_sp;
  _.$_$.k1 = toIntRect;
  _.$_$.l1 = toRect;
  _.$_$.m1 = toSize_0;
  _.$_$.n1 = LayoutDirection_Ltr_getInstance;
  _.$_$.o1 = _Constraints___get_hasBoundedHeight__impl__bsh4rw;
  _.$_$.p1 = _Constraints___get_hasBoundedWidth__impl__7hd0wr;
  _.$_$.q1 = Constraints__hashCode_impl_ij7484;
  _.$_$.r1 = _Constraints___get_maxHeight__impl__dt3e8z;
  _.$_$.s1 = _Constraints___get_maxWidth__impl__uuyqc;
  _.$_$.t1 = _Constraints___get_minHeight__impl__ev4bgx;
  _.$_$.u1 = _Constraints___get_minWidth__impl__hi9lfi;
  _.$_$.v1 = Constraints__toString_impl_37yskr;
  _.$_$.w1 = _Dp___init__impl__ms3zkb;
  _.$_$.x1 = Dp__compareTo_impl_tlg3dl;
  _.$_$.y1 = Dp__hashCode_impl_sxkrra;
  _.$_$.z1 = Dp__toString_impl_kcddez;
  _.$_$.a2 = _Dp___get_value__impl__geb1vb;
  _.$_$.b2 = _DpOffset___get_x__impl__uauqb5;
  _.$_$.c2 = _DpOffset___get_y__impl__1h898y;
  _.$_$.d2 = IntOffset__minus_impl_4m69hb;
  _.$_$.e2 = IntOffset__plus_impl_nqoa9b;
  _.$_$.f2 = _IntOffset___get_x__impl__qiqr5o;
  _.$_$.g2 = _IntOffset___get_y__impl__2avpwj;
  _.$_$.h2 = IntSize__hashCode_impl_gm9mta;
  _.$_$.i2 = _IntSize___get_height__impl__prv63b;
  _.$_$.j2 = _IntSize___get_packedValue__impl__uho7jf;
  _.$_$.k2 = IntSize__toString_impl_54w9zl;
  _.$_$.l2 = _IntSize___get_width__impl__d9yl4o;
  _.$_$.m2 = _TextUnit___init__impl__r5fj1s;
  _.$_$.n2 = TextUnit__hashCode_impl_qsmeov;
  _.$_$.o2 = _TextUnit___get_isEm__impl__esrmtl;
  _.$_$.p2 = _TextUnit___get_isSp__impl__8c3r6q;
  _.$_$.q2 = _TextUnit___get_packedValue__impl__it60w4;
  _.$_$.r2 = _TextUnit___get_rawType__impl__tu8yq5;
  _.$_$.s2 = TextUnit__toString_impl_51ghw0;
  _.$_$.t2 = _TextUnit___get_type__impl__uc2olt;
  _.$_$.u2 = _TextUnit___get_value__impl__hpbx0k;
  _.$_$.v2 = Constraints__copy$default_impl_f452rp;
  _.$_$.w2 = Companion_instance;
  _.$_$.x2 = Companion_getInstance_2;
  _.$_$.y2 = Companion_getInstance_3;
  _.$_$.z2 = Companion_getInstance_1;
  _.$_$.a3 = Companion_getInstance_4;
  _.$_$.b3 = Companion_getInstance_5;
  _.$_$.c3 = Companion_getInstance_6;
  _.$_$.d3 = Companion_getInstance_7;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-unit.js.map
