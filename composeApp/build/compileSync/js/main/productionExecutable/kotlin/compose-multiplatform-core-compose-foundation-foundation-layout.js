(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] = factory(typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(function (_, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForInterface = kotlin_kotlin.$_$.na;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var VOID = kotlin_kotlin.$_$.e;
  var roundToInt = kotlin_kotlin.$_$.tb;
  var get_lastIndex = kotlin_kotlin.$_$.p6;
  var initMetadataForObject = kotlin_kotlin.$_$.pa;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.r4;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var Placeable = kotlin_org_jetbrains_compose_ui_ui.$_$.m1;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var fillArrayVal = kotlin_kotlin.$_$.ca;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var toString = kotlin_kotlin.$_$.ob;
  var hashCode = kotlin_kotlin.$_$.ja;
  var getBooleanHashCode = kotlin_kotlin.$_$.ea;
  var equals = kotlin_kotlin.$_$.ba;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.k1;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.u3;
  var ParentDataModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.x1;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var FunctionAdapter = kotlin_kotlin.$_$.p9;
  var isInterface = kotlin_kotlin.$_$.za;
  var ensureNotNull = kotlin_kotlin.$_$.pf;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var Dp__toString_impl_kcddez = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.w1;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var offset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e1;
  var constrainWidth = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var constrainHeight = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.v1;
  var toLong = kotlin_kotlin.$_$.mb;
  var coerceAtLeast = kotlin_kotlin.$_$.yb;
  var numberToLong = kotlin_kotlin.$_$.ib;
  var Long = kotlin_kotlin.$_$.ue;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.xb;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.r1;
  var IllegalArgumentException = kotlin_kotlin.$_$.se;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var get_sign = kotlin_kotlin.$_$.vb;
  var coerceIn = kotlin_kotlin.$_$.dc;
  var initMetadataForCompanion = kotlin_kotlin.$_$.la;
  var getNumberHashCode = kotlin_kotlin.$_$.ga;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var IntOffset_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p1;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var Enum = kotlin_kotlin.$_$.pe;
  var IntSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var coerceAtMost = kotlin_kotlin.$_$.ac;
  //endregion
  //region block: pre-declaration
  function get_spacing() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  initMetadataForInterface(Horizontal, 'Horizontal');
  function get_spacing_0() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  initMetadataForInterface(Vertical, 'Vertical');
  initMetadataForClass(Arrangement$Start$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$End$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Top$1, VOID, VOID, VOID, [Vertical]);
  initMetadataForClass(Arrangement$Bottom$1, VOID, VOID, VOID, [Vertical]);
  initMetadataForClass(Arrangement$Center$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForClass(Arrangement$SpaceEvenly$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForClass(Arrangement$SpaceBetween$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForClass(Arrangement$SpaceAround$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForObject(Arrangement, 'Arrangement');
  initMetadataForClass(BoxMeasurePolicy, 'BoxMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForClass(BoxChildDataNode, 'BoxChildDataNode', VOID, Node, [ParentDataModifierNode, Node]);
  initMetadataForObject(BoxScopeInstance, 'BoxScopeInstance');
  initMetadataForClass(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', VOID, VOID, [MeasurePolicy, FunctionAdapter]);
  function createConstraints$default(mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing, $super) {
    isPrioritizing = isPrioritizing === VOID ? false : isPrioritizing;
    return $super === VOID ? this.f8k(mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) : $super.f8k.call(this, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing).e3h_1;
  }
  initMetadataForInterface(RowColumnMeasurePolicy, 'RowColumnMeasurePolicy');
  initMetadataForClass(ColumnMeasurePolicy, 'ColumnMeasurePolicy', VOID, VOID, [MeasurePolicy, RowColumnMeasurePolicy]);
  initMetadataForObject(ColumnScopeInstance, 'ColumnScopeInstance');
  initMetadataForClass(PaddingValuesImpl, 'PaddingValuesImpl', PaddingValuesImpl);
  initMetadataForClass(PaddingValuesElement, 'PaddingValuesElement', VOID, ModifierNodeElement);
  initMetadataForClass(PaddingValuesModifier, 'PaddingValuesModifier', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(RowMeasurePolicy, 'RowMeasurePolicy', VOID, VOID, [MeasurePolicy, RowColumnMeasurePolicy]);
  initMetadataForObject(RowScopeInstance, 'RowScopeInstance');
  initMetadataForClass(RowColumnParentData, 'RowColumnParentData');
  initMetadataForCompanion(Companion);
  initMetadataForClass(FillElement, 'FillElement', VOID, ModifierNodeElement);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(WrapContentElement, 'WrapContentElement', VOID, ModifierNodeElement);
  initMetadataForClass(FillNode, 'FillNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  initMetadataForClass(WrapContentNode, 'WrapContentNode', VOID, Node, [LayoutModifierNode, Node]);
  initMetadataForClass(UnspecifiedConstraintsElement, 'UnspecifiedConstraintsElement', UnspecifiedConstraintsElement, ModifierNodeElement);
  initMetadataForClass(UnspecifiedConstraintsNode, 'UnspecifiedConstraintsNode', UnspecifiedConstraintsNode, Node, [LayoutModifierNode, Node]);
  //endregion
  function Horizontal() {
  }
  function Vertical() {
  }
  function Arrangement$Start$1() {
  }
  protoOf(Arrangement$Start$1).i8i = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().t8i(sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().s8i(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$Start$1).toString = function () {
    return 'Arrangement#Start';
  };
  function Arrangement$End$1() {
  }
  protoOf(Arrangement$End$1).i8i = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().s8i(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().t8i(sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$End$1).toString = function () {
    return 'Arrangement#End';
  };
  function Arrangement$Top$1() {
  }
  protoOf(Arrangement$Top$1).j8i = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().t8i(sizes, outPositions, false);
  };
  protoOf(Arrangement$Top$1).toString = function () {
    return 'Arrangement#Top';
  };
  function Arrangement$Bottom$1() {
  }
  protoOf(Arrangement$Bottom$1).j8i = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().s8i(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Bottom$1).toString = function () {
    return 'Arrangement#Bottom';
  };
  function Arrangement$Center$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.u8i_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$Center$1).h8i = function () {
    return this.u8i_1;
  };
  protoOf(Arrangement$Center$1).i8i = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().v8i(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().v8i(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$Center$1).j8i = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().v8i(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Center$1).toString = function () {
    return 'Arrangement#Center';
  };
  function Arrangement$SpaceEvenly$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.w8i_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceEvenly$1).h8i = function () {
    return this.w8i_1;
  };
  protoOf(Arrangement$SpaceEvenly$1).i8i = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().x8i(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().x8i(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceEvenly$1).j8i = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().x8i(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceEvenly$1).toString = function () {
    return 'Arrangement#SpaceEvenly';
  };
  function Arrangement$SpaceBetween$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.y8i_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceBetween$1).h8i = function () {
    return this.y8i_1;
  };
  protoOf(Arrangement$SpaceBetween$1).i8i = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().z8i(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().z8i(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceBetween$1).j8i = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().z8i(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceBetween$1).toString = function () {
    return 'Arrangement#SpaceBetween';
  };
  function Arrangement$SpaceAround$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.a8j_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceAround$1).h8i = function () {
    return this.a8j_1;
  };
  protoOf(Arrangement$SpaceAround$1).i8i = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().b8j(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().b8j(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceAround$1).j8i = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().b8j(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceAround$1).toString = function () {
    return 'Arrangement#SpaceAround';
  };
  function Arrangement() {
    Arrangement_instance = this;
    var tmp = this;
    tmp.k8i_1 = new Arrangement$Start$1();
    var tmp_0 = this;
    tmp_0.l8i_1 = new Arrangement$End$1();
    var tmp_1 = this;
    tmp_1.m8i_1 = new Arrangement$Top$1();
    var tmp_2 = this;
    tmp_2.n8i_1 = new Arrangement$Bottom$1();
    var tmp_3 = this;
    tmp_3.o8i_1 = new Arrangement$Center$1();
    var tmp_4 = this;
    tmp_4.p8i_1 = new Arrangement$SpaceEvenly$1();
    var tmp_5 = this;
    tmp_5.q8i_1 = new Arrangement$SpaceBetween$1();
    var tmp_6 = this;
    tmp_6.r8i_1 = new Arrangement$SpaceAround$1();
  }
  protoOf(Arrangement).s8i = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = totalSize - consumedSize | 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
        outPosition[_unary__edvuaz] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeRightOrBottom.<anonymous>' call
          var it = size[i];
          outPosition[i] = current;
          current = current + it | 0;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).t8i = function (size, outPosition, reverseInput) {
    var current = 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = size.length;
      while (inductionVariable < last) {
        var item = size[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeLeftOrTop.<anonymous>' call
        outPosition[_unary__edvuaz] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_0 = size.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeLeftOrTop.<anonymous>' call
          var it = size[i];
          outPosition[i] = current;
          current = current + it | 0;
        }
         while (0 <= inductionVariable_0);
    }
  };
  protoOf(Arrangement).v8i = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = (totalSize - consumedSize | 0) / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[_unary__edvuaz] = roundToInt(this_0);
        current = current + item;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeCenter.<anonymous>' call
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + it;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).x8i = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var gapSize = (totalSize - consumedSize | 0) / (size.length + 1 | 0);
    var current = gapSize;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[_unary__edvuaz] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceEvenly.<anonymous>' call
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).z8i = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (size.length === 0)
      return Unit_instance;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = get_lastIndex(size);
    var noOfGaps = Math.max(a, 1);
    var gapSize = (totalSize - consumedSize | 0) / noOfGaps;
    var current = 0.0;
    if (reverseInput && size.length === 1) {
      current = gapSize;
    }
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[_unary__edvuaz] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceBetween.<anonymous>' call
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).b8j = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(size.length === 0)) {
      tmp = (totalSize - consumedSize | 0) / size.length;
    } else {
      tmp = 0.0;
    }
    var gapSize = tmp;
    var current = gapSize / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        // Inline function 'kotlin.math.roundToInt' call
        var this_0 = current;
        outPosition[_unary__edvuaz] = roundToInt(this_0);
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          // Inline function 'androidx.compose.foundation.layout.Arrangement.placeSpaceAround.<anonymous>' call
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          // Inline function 'kotlin.math.roundToInt' call
          var this_1 = current;
          outPosition[i] = roundToInt(this_1);
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  var Arrangement_instance;
  function Arrangement_getInstance() {
    if (Arrangement_instance == null)
      new Arrangement();
    return Arrangement_instance;
  }
  function get_cache1() {
    _init_properties_Box_kt__tvzvdl();
    return cache1;
  }
  var cache1;
  function get_cache2() {
    _init_properties_Box_kt__tvzvdl();
    return cache2;
  }
  var cache2;
  var DefaultBoxMeasurePolicy;
  var EmptyBoxMeasurePolicy;
  function cacheFor(propagateMinConstraints) {
    _init_properties_Box_kt__tvzvdl();
    // Inline function 'kotlin.apply' call
    var this_0 = HashMap_init_$Create$(9);
    // Inline function 'androidx.compose.foundation.layout.cacheFor.<anonymous>' call
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().j59_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().k59_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().l59_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().m59_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().n59_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().o59_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().p59_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().q59_1);
    cacheFor$_anonymous_$putAlignment_u13yrc(this_0, propagateMinConstraints, Companion_getInstance().r59_1);
    return this_0;
  }
  function BoxMeasurePolicy$measure$lambda($this$layout) {
    return Unit_instance;
  }
  function BoxMeasurePolicy$measure$lambda_0($placeable, $measurable, $this_measure, $boxWidth, $boxHeight, this$0) {
    return function ($this$layout) {
      placeInBox($this$layout, $placeable, $measurable, $this_measure.t4d(), $boxWidth, $boxHeight, this$0.c8j_1);
      return Unit_instance;
    };
  }
  function BoxMeasurePolicy$measure$lambda_1($placeables, $measurables, $this_measure, $boxWidth, $boxHeight, this$0) {
    return function ($this$layout) {
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.BoxMeasurePolicy.measure.<anonymous>.<anonymous>' call
        if (!(item instanceof Placeable))
          THROW_CCE();
        var measurable = $measurables.p(_unary__edvuaz);
        placeInBox($this$layout, item, measurable, $this_measure.t4d(), $boxWidth._v, $boxHeight._v, this$0.c8j_1);
      }
      return Unit_instance;
    };
  }
  function BoxMeasurePolicy(alignment, propagateMinConstraints) {
    this.c8j_1 = alignment;
    this.d8j_1 = propagateMinConstraints;
  }
  protoOf(BoxMeasurePolicy).e67 = function (_this__u8e3s4, measurables, constraints) {
    if (measurables.q()) {
      var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      return _this__u8e3s4.b5p(tmp, tmp_0, VOID, BoxMeasurePolicy$measure$lambda);
    }
    var tmp_1;
    if (this.d8j_1) {
      tmp_1 = constraints;
    } else {
      tmp_1 = Constraints__copy$default_impl_f452rp(constraints, 0, VOID, 0);
    }
    var contentConstraints = tmp_1;
    if (measurables.n() === 1) {
      var measurable = measurables.p(0);
      var boxWidth;
      var boxHeight;
      var placeable;
      if (!get_matchesParentSize(measurable)) {
        placeable = measurable.v5o(contentConstraints);
        var tmp0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        // Inline function 'kotlin.math.max' call
        var b = placeable.w5o_1;
        boxWidth = Math.max(tmp0, b);
        var tmp2 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        // Inline function 'kotlin.math.max' call
        var b_0 = placeable.x5o_1;
        boxHeight = Math.max(tmp2, b_0);
      } else {
        boxWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        boxHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        placeable = measurable.v5o(Companion_instance.h3h(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_minHeight__impl__ev4bgx(constraints)));
      }
      return _this__u8e3s4.b5p(boxWidth, boxHeight, VOID, BoxMeasurePolicy$measure$lambda_0(placeable, measurable, _this__u8e3s4, boxWidth, boxHeight, this));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.n();
    var placeables = fillArrayVal(Array(size), null);
    var hasMatchParentSizeChildren = false;
    var boxWidth_0 = {_v: _Constraints___get_minWidth__impl__hi9lfi(constraints)};
    var boxHeight_0 = {_v: _Constraints___get_minHeight__impl__ev4bgx(constraints)};
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    var last = measurables.n() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.p(index);
        // Inline function 'androidx.compose.foundation.layout.BoxMeasurePolicy.measure.<anonymous>' call
        if (!get_matchesParentSize(item)) {
          var placeable_0 = item.v5o(contentConstraints);
          placeables[index] = placeable_0;
          var tmp0_0 = boxWidth_0._v;
          // Inline function 'kotlin.math.max' call
          var b_1 = placeable_0.w5o_1;
          boxWidth_0._v = Math.max(tmp0_0, b_1);
          var tmp2_0 = boxHeight_0._v;
          // Inline function 'kotlin.math.max' call
          var b_2 = placeable_0.x5o_1;
          boxHeight_0._v = Math.max(tmp2_0, b_2);
        } else {
          hasMatchParentSizeChildren = true;
        }
      }
       while (inductionVariable <= last);
    if (hasMatchParentSizeChildren) {
      var tmp0_minWidth = !(boxWidth_0._v === 2147483647) ? boxWidth_0._v : 0;
      var tmp1_minHeight = !(boxHeight_0._v === 2147483647) ? boxHeight_0._v : 0;
      var tmp2_maxWidth = boxWidth_0._v;
      var tmp3_maxHeight = boxHeight_0._v;
      var matchParentSizeConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
      // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.n() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.p(index_0);
          // Inline function 'androidx.compose.foundation.layout.BoxMeasurePolicy.measure.<anonymous>' call
          if (get_matchesParentSize(item_0)) {
            placeables[index_0] = item_0.v5o(matchParentSizeConstraints);
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp_2 = boxWidth_0._v;
    var tmp_3 = boxHeight_0._v;
    return _this__u8e3s4.b5p(tmp_2, tmp_3, VOID, BoxMeasurePolicy$measure$lambda_1(placeables, measurables, _this__u8e3s4, boxWidth_0, boxHeight_0, this));
  };
  protoOf(BoxMeasurePolicy).toString = function () {
    return 'BoxMeasurePolicy(alignment=' + toString(this.c8j_1) + ', propagateMinConstraints=' + this.d8j_1 + ')';
  };
  protoOf(BoxMeasurePolicy).hashCode = function () {
    var result = hashCode(this.c8j_1);
    result = imul(result, 31) + getBooleanHashCode(this.d8j_1) | 0;
    return result;
  };
  protoOf(BoxMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BoxMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof BoxMeasurePolicy ? other : THROW_CCE();
    if (!equals(this.c8j_1, tmp0_other_with_cast.c8j_1))
      return false;
    if (!(this.d8j_1 === tmp0_other_with_cast.d8j_1))
      return false;
    return true;
  };
  function get_matchesParentSize(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s8j_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function placeInBox(_this__u8e3s4, placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(measurable);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r8j_1;
    var childAlignment = tmp1_elvis_lhs == null ? alignment : tmp1_elvis_lhs;
    var position = childAlignment.e5a(IntSize(placeable.w5o_1, placeable.x5o_1), IntSize(boxWidth, boxHeight), layoutDirection);
    _this__u8e3s4.w67(placeable, position);
  }
  function BoxChildDataNode() {
  }
  function get_boxChildDataNode(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _this__u8e3s4.c68();
    return tmp instanceof BoxChildDataNode ? tmp : null;
  }
  function maybeCachedBoxMeasurePolicy(alignment, propagateMinConstraints) {
    _init_properties_Box_kt__tvzvdl();
    var cache = propagateMinConstraints ? get_cache1() : get_cache2();
    var tmp0_elvis_lhs = cache.l2(alignment);
    return tmp0_elvis_lhs == null ? new BoxMeasurePolicy(alignment, propagateMinConstraints) : tmp0_elvis_lhs;
  }
  function BoxScopeInstance() {
  }
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    return BoxScopeInstance_instance;
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.t8j_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).e67 = function (_this__u8e3s4, measurables, constraints) {
    return this.t8j_1(_this__u8e3s4, measurables, new Constraints_0(constraints));
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).q3 = function () {
    return this.t8j_1;
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, MeasurePolicy) : false) {
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
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function cacheFor$_anonymous_$putAlignment_u13yrc($this_apply, $propagateMinConstraints, it) {
    $this_apply.o2(it, new BoxMeasurePolicy(it, $propagateMinConstraints));
  }
  function EmptyBoxMeasurePolicy$lambda($this$MeasurePolicy, _anonymous_parameter_0__qggqh8, constraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.e3h_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.e3h_1);
    return $this$MeasurePolicy.b5p(tmp, tmp_0, VOID, EmptyBoxMeasurePolicy$lambda$lambda);
  }
  function EmptyBoxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_instance;
  }
  var properties_initialized_Box_kt_kr8cbp;
  function _init_properties_Box_kt__tvzvdl() {
    if (!properties_initialized_Box_kt_kr8cbp) {
      properties_initialized_Box_kt_kr8cbp = true;
      cache1 = cacheFor(true);
      cache2 = cacheFor(false);
      DefaultBoxMeasurePolicy = new BoxMeasurePolicy(Companion_getInstance().j59_1, false);
      var tmp = EmptyBoxMeasurePolicy$lambda;
      EmptyBoxMeasurePolicy = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp);
    }
  }
  function get_DefaultColumnMeasurePolicy() {
    _init_properties_Column_kt__s1zb92();
    return DefaultColumnMeasurePolicy;
  }
  var DefaultColumnMeasurePolicy;
  function getCrossAxisPosition($this, placeable, parentData, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, layoutDirection) {
    var childCrossAlignment = parentData == null ? null : parentData.w8j_1;
    var tmp2_elvis_lhs = childCrossAlignment == null ? null : childCrossAlignment.y8j(crossAxisLayoutSize - placeable.w5o_1 | 0, layoutDirection, placeable, beforeCrossAxisAlignmentLine);
    return tmp2_elvis_lhs == null ? $this.a8k_1.z59(0, crossAxisLayoutSize - placeable.w5o_1 | 0, layoutDirection) : tmp2_elvis_lhs;
  }
  function ColumnMeasurePolicy$placeHelper$lambda($placeables, this$0, $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $measureScope, $mainAxisPositions) {
    return function ($this$layout) {
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.ColumnMeasurePolicy.placeHelper.<anonymous>.<anonymous>.<anonymous>' call
        var crossAxisPosition = getCrossAxisPosition(this$0, ensureNotNull(item), get_rowColumnParentData(item), $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $measureScope.t4d());
        $this$layout.u67(item, crossAxisPosition, $mainAxisPositions[_unary__edvuaz]);
      }
      return Unit_instance;
    };
  }
  function ColumnMeasurePolicy(verticalArrangement, horizontalAlignment) {
    this.z8j_1 = verticalArrangement;
    this.a8k_1 = horizontalAlignment;
  }
  protoOf(ColumnMeasurePolicy).b8k = function (_this__u8e3s4) {
    return _this__u8e3s4.x5o_1;
  };
  protoOf(ColumnMeasurePolicy).c8k = function (_this__u8e3s4) {
    return _this__u8e3s4.w5o_1;
  };
  protoOf(ColumnMeasurePolicy).d8k = function (mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.layout.ColumnMeasurePolicy.populateMainAxisPositions.<anonymous>' call
    this.z8j_1.j8i(measureScope, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions);
  };
  protoOf(ColumnMeasurePolicy).e8k = function (placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.layout.ColumnMeasurePolicy.placeHelper.<anonymous>' call
    return measureScope.b5p(crossAxisLayoutSize, mainAxisLayoutSize, VOID, ColumnMeasurePolicy$placeHelper$lambda(placeables, this, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, measureScope, mainAxisPositions));
  };
  protoOf(ColumnMeasurePolicy).f8k = function (mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) {
    return createColumnConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax);
  };
  protoOf(ColumnMeasurePolicy).e67 = function (_this__u8e3s4, measurables, constraints) {
    var tmp = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp_1 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var tmp_2 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_3 = _this__u8e3s4.m3h(this.z8j_1.h8i());
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.n();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    return measure(this, tmp, tmp_0, tmp_1, tmp_2, tmp_3, _this__u8e3s4, measurables, tmp$ret$0, 0, measurables.n());
  };
  protoOf(ColumnMeasurePolicy).toString = function () {
    return 'ColumnMeasurePolicy(verticalArrangement=' + toString(this.z8j_1) + ', horizontalAlignment=' + toString(this.a8k_1) + ')';
  };
  protoOf(ColumnMeasurePolicy).hashCode = function () {
    var result = hashCode(this.z8j_1);
    result = imul(result, 31) + hashCode(this.a8k_1) | 0;
    return result;
  };
  protoOf(ColumnMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColumnMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof ColumnMeasurePolicy ? other : THROW_CCE();
    if (!equals(this.z8j_1, tmp0_other_with_cast.z8j_1))
      return false;
    if (!equals(this.a8k_1, tmp0_other_with_cast.a8k_1))
      return false;
    return true;
  };
  function createColumnConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax) {
    _init_properties_Column_kt__s1zb92();
    var tmp;
    if (!isPrioritizing) {
      tmp = Constraints(crossAxisMin, crossAxisMax, mainAxisMin, mainAxisMax);
    } else {
      tmp = Companion_instance.j3h(crossAxisMin, crossAxisMax, mainAxisMin, mainAxisMax);
    }
    return tmp;
  }
  function columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer, $changed) {
    _init_properties_Column_kt__s1zb92();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1089876336, 'C(columnMeasurePolicy)P(1):Column.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(1089876336, $changed, -1, 'androidx.compose.foundation.layout.columnMeasurePolicy (Column.kt:106)');
    }
    $composer_0.j25(-1789957655);
    sourceInformation($composer_0, '109@5034L227');
    var tmp;
    if (equals(verticalArrangement, Arrangement_getInstance().m8i_1) && equals(horizontalAlignment, Companion_getInstance().v59_1)) {
      tmp = get_DefaultColumnMeasurePolicy();
    } else {
      sourceInformationMarkerStart($composer_0, -1789953197, 'CC(remember):Column.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.m1w(verticalArrangement) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.m1w(horizontalAlignment) || ($changed & 48) === 32));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.d27();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().w1z_1) {
        // Inline function 'androidx.compose.foundation.layout.columnMeasurePolicy.<anonymous>' call
        var value = new ColumnMeasurePolicy(verticalArrangement, horizontalAlignment);
        $composer_0.o27(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp = tmp1_group;
    }
    var tmp2_group = tmp;
    $composer_0.l25();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp2_group;
  }
  function ColumnScopeInstance() {
  }
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    return ColumnScopeInstance_instance;
  }
  var properties_initialized_Column_kt_nm4x4;
  function _init_properties_Column_kt__s1zb92() {
    if (!properties_initialized_Column_kt_nm4x4) {
      properties_initialized_Column_kt_nm4x4 = true;
      DefaultColumnMeasurePolicy = new ColumnMeasurePolicy(Arrangement_getInstance().m8i_1, Companion_getInstance().v59_1);
    }
  }
  function PaddingValues(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return new PaddingValuesImpl(start, top, end, bottom);
  }
  function padding(_this__u8e3s4, paddingValues) {
    return _this__u8e3s4.f5a(new PaddingValuesElement(paddingValues, padding$lambda(paddingValues)));
  }
  function PaddingValuesImpl(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    this.h8k_1 = start;
    this.i8k_1 = top;
    this.j8k_1 = end;
    this.k8k_1 = bottom;
    // Inline function 'kotlin.require' call
    if (!(_Dp___get_value__impl__geb1vb(this.h8k_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesImpl.<anonymous>' call
      var message = 'Start padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(_Dp___get_value__impl__geb1vb(this.i8k_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesImpl.<anonymous>' call
      var message_0 = 'Top padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(_Dp___get_value__impl__geb1vb(this.j8k_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesImpl.<anonymous>' call
      var message_1 = 'End padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.require' call
    if (!(_Dp___get_value__impl__geb1vb(this.k8k_1) >= 0)) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesImpl.<anonymous>' call
      var message_2 = 'Bottom padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
  }
  protoOf(PaddingValuesImpl).l8k = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.h8k_1 : this.j8k_1;
  };
  protoOf(PaddingValuesImpl).m8k = function () {
    return this.i8k_1;
  };
  protoOf(PaddingValuesImpl).n8k = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.j8k_1 : this.h8k_1;
  };
  protoOf(PaddingValuesImpl).o8k = function () {
    return this.k8k_1;
  };
  protoOf(PaddingValuesImpl).equals = function (other) {
    if (!(other instanceof PaddingValuesImpl))
      return false;
    return equals(this.h8k_1, other.h8k_1) && equals(this.i8k_1, other.i8k_1) && equals(this.j8k_1, other.j8k_1) && equals(this.k8k_1, other.k8k_1);
  };
  protoOf(PaddingValuesImpl).hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.h8k_1), 31) + Dp__hashCode_impl_sxkrra(this.i8k_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.j8k_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.k8k_1) | 0;
  };
  protoOf(PaddingValuesImpl).toString = function () {
    return 'PaddingValues(start=' + Dp__toString_impl_kcddez(this.h8k_1) + ', top=' + Dp__toString_impl_kcddez(this.i8k_1) + ', end=' + Dp__toString_impl_kcddez(this.j8k_1) + ', bottom=' + Dp__toString_impl_kcddez(this.k8k_1) + ')';
  };
  function PaddingValuesElement(paddingValues, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.q8k_1 = paddingValues;
    this.r8k_1 = inspectorInfo;
  }
  protoOf(PaddingValuesElement).f2e = function () {
    return new PaddingValuesModifier(this.q8k_1);
  };
  protoOf(PaddingValuesElement).s8k = function (node) {
    node.g8l_1 = this.q8k_1;
  };
  protoOf(PaddingValuesElement).t5f = function (node) {
    return this.s8k(node instanceof PaddingValuesModifier ? node : THROW_CCE());
  };
  protoOf(PaddingValuesElement).hashCode = function () {
    return hashCode(this.q8k_1);
  };
  protoOf(PaddingValuesElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingValuesElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherElement = tmp;
    return equals(this.q8k_1, otherElement.q8k_1);
  };
  function PaddingValuesModifier$measure$lambda($placeable, $this_measure, this$0) {
    return function ($this$layout) {
      $this$layout.u67($placeable, $this_measure.m3h(this$0.g8l_1.l8k($this_measure.t4d())), $this_measure.m3h(this$0.g8l_1.m8k()));
      return Unit_instance;
    };
  }
  function PaddingValuesModifier(paddingValues) {
    Node.call(this);
    this.g8l_1 = paddingValues;
  }
  protoOf(PaddingValuesModifier).u5o = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2 = this.g8l_1.l8k(_this__u8e3s4.t4d());
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (Dp__compareTo_impl_tlg3dl(tmp_2, tmp$ret$0) >= 0) {
      var tmp_3 = this.g8l_1.m8k();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      tmp_1 = Dp__compareTo_impl_tlg3dl(tmp_3, tmp$ret$1) >= 0;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp_4 = this.g8l_1.n8k(_this__u8e3s4.t4d());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
      tmp_0 = Dp__compareTo_impl_tlg3dl(tmp_4, tmp$ret$2) >= 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp_5 = this.g8l_1.o8k();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$3 = _Dp___init__impl__ms3zkb(0);
      tmp = Dp__compareTo_impl_tlg3dl(tmp_5, tmp$ret$3) >= 0;
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      // Inline function 'androidx.compose.foundation.layout.PaddingValuesModifier.measure.<anonymous>' call
      var message = 'Padding must be non-negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var horizontal = _this__u8e3s4.m3h(this.g8l_1.l8k(_this__u8e3s4.t4d())) + _this__u8e3s4.m3h(this.g8l_1.n8k(_this__u8e3s4.t4d())) | 0;
    var vertical = _this__u8e3s4.m3h(this.g8l_1.m8k()) + _this__u8e3s4.m3h(this.g8l_1.o8k()) | 0;
    var placeable = measurable.v5o(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.w5o_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.x5o_1 + vertical | 0);
    return _this__u8e3s4.b5p(width, height, VOID, PaddingValuesModifier$measure$lambda(placeable, _this__u8e3s4, this));
  };
  function padding$lambda($paddingValues) {
    return function ($this$$receiver) {
      $this$$receiver.h8l_1 = 'padding';
      $this$$receiver.j8l_1.l8l('paddingValues', $paddingValues);
      return Unit_instance;
    };
  }
  function get_DefaultRowMeasurePolicy() {
    _init_properties_Row_kt__jenljs();
    return DefaultRowMeasurePolicy;
  }
  var DefaultRowMeasurePolicy;
  function getCrossAxisPosition_0($this, placeable, parentData, crossAxisLayoutSize, beforeCrossAxisAlignmentLine) {
    var childCrossAlignment = parentData == null ? null : parentData.w8j_1;
    var tmp2_elvis_lhs = childCrossAlignment == null ? null : childCrossAlignment.y8j(crossAxisLayoutSize - placeable.x5o_1 | 0, LayoutDirection_Ltr_getInstance(), placeable, beforeCrossAxisAlignmentLine);
    return tmp2_elvis_lhs == null ? $this.n8l_1.b5a(0, crossAxisLayoutSize - placeable.x5o_1 | 0) : tmp2_elvis_lhs;
  }
  function RowMeasurePolicy$placeHelper$lambda($placeables, this$0, $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $mainAxisPositions) {
    return function ($this$layout) {
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.foundation.layout.RowMeasurePolicy.placeHelper.<anonymous>.<anonymous>.<anonymous>' call
        var crossAxisPosition = getCrossAxisPosition_0(this$0, ensureNotNull(item), get_rowColumnParentData(item), $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine);
        $this$layout.u67(item, $mainAxisPositions[_unary__edvuaz], crossAxisPosition);
      }
      return Unit_instance;
    };
  }
  function RowMeasurePolicy(horizontalArrangement, verticalAlignment) {
    this.m8l_1 = horizontalArrangement;
    this.n8l_1 = verticalAlignment;
  }
  protoOf(RowMeasurePolicy).b8k = function (_this__u8e3s4) {
    return _this__u8e3s4.w5o_1;
  };
  protoOf(RowMeasurePolicy).c8k = function (_this__u8e3s4) {
    return _this__u8e3s4.x5o_1;
  };
  protoOf(RowMeasurePolicy).e67 = function (_this__u8e3s4, measurables, constraints) {
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var tmp_3 = _this__u8e3s4.m3h(this.m8l_1.h8i());
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.n();
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    return measure(this, tmp, tmp_0, tmp_1, tmp_2, tmp_3, _this__u8e3s4, measurables, tmp$ret$0, 0, measurables.n());
  };
  protoOf(RowMeasurePolicy).d8k = function (mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.layout.RowMeasurePolicy.populateMainAxisPositions.<anonymous>' call
    this.m8l_1.i8i(measureScope, mainAxisLayoutSize, childrenMainAxisSize, measureScope.t4d(), mainAxisPositions);
  };
  protoOf(RowMeasurePolicy).e8k = function (placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.foundation.layout.RowMeasurePolicy.placeHelper.<anonymous>' call
    return measureScope.b5p(mainAxisLayoutSize, crossAxisLayoutSize, VOID, RowMeasurePolicy$placeHelper$lambda(placeables, this, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, mainAxisPositions));
  };
  protoOf(RowMeasurePolicy).f8k = function (mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) {
    return createRowConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax);
  };
  protoOf(RowMeasurePolicy).toString = function () {
    return 'RowMeasurePolicy(horizontalArrangement=' + toString(this.m8l_1) + ', verticalAlignment=' + toString(this.n8l_1) + ')';
  };
  protoOf(RowMeasurePolicy).hashCode = function () {
    var result = hashCode(this.m8l_1);
    result = imul(result, 31) + hashCode(this.n8l_1) | 0;
    return result;
  };
  protoOf(RowMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowMeasurePolicy))
      return false;
    var tmp0_other_with_cast = other instanceof RowMeasurePolicy ? other : THROW_CCE();
    if (!equals(this.m8l_1, tmp0_other_with_cast.m8l_1))
      return false;
    if (!equals(this.n8l_1, tmp0_other_with_cast.n8l_1))
      return false;
    return true;
  };
  function createRowConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax) {
    _init_properties_Row_kt__jenljs();
    var tmp;
    if (!isPrioritizing) {
      tmp = Constraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    } else {
      tmp = Companion_instance.i3h(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    }
    return tmp;
  }
  function rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer, $changed) {
    _init_properties_Row_kt__jenljs();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -837807694, 'C(rowMeasurePolicy):Row.kt#2w3rfo');
    if (isTraceInProgress()) {
      traceEventStart(-837807694, $changed, -1, 'androidx.compose.foundation.layout.rowMeasurePolicy (Row.kt:122)');
    }
    $composer_0.j25(-1828507469);
    sourceInformation($composer_0, '125@5803L224');
    var tmp;
    if (equals(horizontalArrangement, Arrangement_getInstance().k8i_1) && equals(verticalAlignment, Companion_getInstance().s59_1)) {
      tmp = get_DefaultRowMeasurePolicy();
    } else {
      sourceInformationMarkerStart($composer_0, -1828503104, 'CC(remember):Row.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.m1w(horizontalArrangement) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.m1w(verticalAlignment) || ($changed & 48) === 32));
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.d27();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().w1z_1) {
        // Inline function 'androidx.compose.foundation.layout.rowMeasurePolicy.<anonymous>' call
        var value = new RowMeasurePolicy(horizontalArrangement, verticalAlignment);
        $composer_0.o27(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp1_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      sourceInformationMarkerEnd($composer_0);
      tmp = tmp1_group;
    }
    var tmp2_group = tmp;
    $composer_0.l25();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp2_group;
  }
  function RowScopeInstance() {
  }
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    return RowScopeInstance_instance;
  }
  var properties_initialized_Row_kt_sbxnna;
  function _init_properties_Row_kt__jenljs() {
    if (!properties_initialized_Row_kt_sbxnna) {
      properties_initialized_Row_kt_sbxnna = true;
      DefaultRowMeasurePolicy = new RowMeasurePolicy(Arrangement_getInstance().k8i_1, Companion_getInstance().s59_1);
    }
  }
  function RowColumnParentData() {
  }
  function get_rowColumnParentData(_this__u8e3s4) {
    var tmp = _this__u8e3s4.c68();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function get_weight(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.u8j_1;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  }
  function get_rowColumnParentData_0(_this__u8e3s4) {
    var tmp = _this__u8e3s4.c68();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function get_isRelative(_this__u8e3s4) {
    var tmp0_safe_receiver = get_crossAxisAlignment(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o8l();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function get_fill(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.v8j_1;
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function get_crossAxisAlignment(_this__u8e3s4) {
    return _this__u8e3s4 == null ? null : _this__u8e3s4.w8j_1;
  }
  function RowColumnMeasurePolicy() {
  }
  function measure(_this__u8e3s4, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, arrangementSpacingInt, measureScope, measurables, placeables, startIndex, endIndex, crossAxisOffset, currentLineIndex) {
    crossAxisOffset = crossAxisOffset === VOID ? null : crossAxisOffset;
    currentLineIndex = currentLineIndex === VOID ? 0 : currentLineIndex;
    var arrangementSpacingPx = toLong(arrangementSpacingInt);
    var totalWeight = 0.0;
    var fixedSpace = 0;
    var crossAxisSpace = 0;
    var weightChildrenCount = 0;
    var anyAlignBy = false;
    var subSize = endIndex - startIndex | 0;
    var childrenMainAxisSize = new Int32Array(subSize);
    var beforeCrossAxisAlignmentLine = 0;
    var afterCrossAxisAlignmentLine = 0;
    var spaceAfterLastNoWeight = 0;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = measurables.p(i);
        var parentData = get_rowColumnParentData_0(child);
        var weight = get_weight(parentData);
        anyAlignBy = anyAlignBy || get_isRelative(parentData);
        if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          weightChildrenCount = weightChildrenCount + 1 | 0;
        } else {
          var tmp;
          if (crossAxisMax === 2147483647) {
            tmp = null;
          } else {
            var tmp2_safe_receiver = parentData == null ? null : parentData.x8j_1;
            var tmp_0;
            if (tmp2_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'androidx.compose.foundation.layout.measure.<anonymous>' call
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              // Inline function 'kotlin.math.roundToInt' call
              var this_0 = tmp2_safe_receiver.p8l_1 * crossAxisMax;
              tmp_0 = roundToInt(this_0);
            }
            tmp = tmp_0;
          }
          var crossAxisDesiredSize = tmp;
          var remaining = mainAxisMax - fixedSpace | 0;
          var tmp5_elvis_lhs = placeables[i];
          var tmp_1;
          if (tmp5_elvis_lhs == null) {
            var tmp_2 = crossAxisDesiredSize == null ? 0 : crossAxisDesiredSize;
            var tmp_3;
            if (mainAxisMax === 2147483647) {
              tmp_3 = 2147483647;
            } else {
              tmp_3 = coerceAtLeast(remaining, 0);
            }
            var tmp_4 = tmp_3;
            tmp_1 = child.v5o(_this__u8e3s4.g8k(0, tmp_2, tmp_4, crossAxisDesiredSize == null ? crossAxisMax : crossAxisDesiredSize));
          } else {
            tmp_1 = tmp5_elvis_lhs;
          }
          var placeable = tmp_1;
          var placeableMainAxisSize = _this__u8e3s4.b8k(placeable);
          var placeableCrossAxisSize = _this__u8e3s4.c8k(placeable);
          childrenMainAxisSize[i - startIndex | 0] = placeableMainAxisSize;
          // Inline function 'kotlin.math.min' call
          var b = coerceAtLeast(remaining - placeableMainAxisSize | 0, 0);
          spaceAfterLastNoWeight = Math.min(arrangementSpacingInt, b);
          fixedSpace = fixedSpace + (placeableMainAxisSize + spaceAfterLastNoWeight | 0) | 0;
          // Inline function 'kotlin.math.max' call
          var a = crossAxisSpace;
          crossAxisSpace = Math.max(a, placeableCrossAxisSize);
          placeables[i] = placeable;
        }
      }
       while (inductionVariable < endIndex);
    var weightedSpace = 0;
    if (weightChildrenCount === 0) {
      fixedSpace = fixedSpace - spaceAfterLastNoWeight | 0;
    } else {
      var tmp_5;
      if (!(mainAxisMax === 2147483647)) {
        tmp_5 = mainAxisMax;
      } else {
        tmp_5 = mainAxisMin;
      }
      var targetSpace = tmp_5;
      // Inline function 'kotlin.Long.times' call
      var other = weightChildrenCount - 1 | 0;
      var arrangementSpacingTotal = arrangementSpacingPx.a3(toLong(other));
      var remainingToTarget = coerceAtLeast_0(numberToLong(targetSpace - fixedSpace | 0).z2(arrangementSpacingTotal), new Long(0, 0));
      // Inline function 'kotlin.Long.div' call
      var other_0 = totalWeight;
      var weightUnitSpace = remainingToTarget.o3() / other_0;
      var remainder = remainingToTarget;
      var inductionVariable_0 = startIndex;
      if (inductionVariable_0 < endIndex)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var measurable = measurables.p(i_0);
          var itemWeight = get_weight(get_rowColumnParentData_0(measurable));
          var weightedSize = weightUnitSpace * itemWeight;
          try {
            var tmp11 = remainder;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            // Inline function 'kotlin.Long.minus' call
            var other_1 = roundToInt(weightedSize);
            remainder = tmp11.z2(toLong(other_1));
          } catch ($p) {
            if ($p instanceof IllegalArgumentException) {
              var e = $p;
              throw IllegalArgumentException_init_$Create$_0('This log indicates a hard-to-reproduce Compose issue, modified with additional debugging details. Please help us by adding your experiences to the bug link provided. Thank you for helping us improve Compose. https://issuetracker.google.com/issues/297974033 mainAxisMax ' + mainAxisMax + 'mainAxisMin ' + mainAxisMin + 'targetSpace ' + targetSpace + 'arrangementSpacingPx ' + arrangementSpacingPx + 'weightChildrenCount ' + weightChildrenCount + 'fixedSpace ' + fixedSpace + 'arrangementSpacingTotal ' + arrangementSpacingTotal + 'remainingToTarget ' + remainingToTarget.toString() + 'totalWeight ' + totalWeight + 'weightUnitSpace ' + weightUnitSpace + 'itemWeight ' + itemWeight + 'weightedSize ' + weightedSize, e);
            } else {
              throw $p;
            }
          }
        }
         while (inductionVariable_0 < endIndex);
      var inductionVariable_1 = startIndex;
      if (inductionVariable_1 < endIndex)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          if (placeables[i_1] == null) {
            var child_0 = measurables.p(i_1);
            var parentData_0 = get_rowColumnParentData_0(child_0);
            var weight_0 = get_weight(parentData_0);
            var tmp_6;
            if (crossAxisMax === 2147483647) {
              tmp_6 = null;
            } else {
              var tmp9_safe_receiver = parentData_0 == null ? null : parentData_0.x8j_1;
              var tmp_7;
              if (tmp9_safe_receiver == null) {
                tmp_7 = null;
              } else {
                // Inline function 'kotlin.let' call
                // Inline function 'androidx.compose.foundation.layout.measure.<anonymous>' call
                // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
                // Inline function 'kotlin.math.roundToInt' call
                var this_1 = tmp9_safe_receiver.p8l_1 * crossAxisMax;
                tmp_7 = roundToInt(this_1);
              }
              tmp_6 = tmp_7;
            }
            var crossAxisDesiredSize_0 = tmp_6;
            // Inline function 'kotlin.check' call
            if (!(weight_0 > 0)) {
              // Inline function 'androidx.compose.foundation.layout.measure.<anonymous>' call
              var message = 'All weights <= 0 should have placeables';
              throw IllegalStateException_init_$Create$(toString(message));
            }
            var remainderUnit = get_sign(remainder);
            // Inline function 'kotlin.Long.minus' call
            remainder = remainder.z2(toLong(remainderUnit));
            var weightedSize_0 = weightUnitSpace * weight_0;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            // Inline function 'kotlin.math.roundToInt' call
            // Inline function 'kotlin.math.max' call
            var b_0 = roundToInt(weightedSize_0) + remainderUnit | 0;
            var childMainAxisSize = Math.max(0, b_0);
            var childConstraints;
            try {
              var tmp_8;
              if (get_fill(parentData_0) && !(childMainAxisSize === 2147483647)) {
                tmp_8 = childMainAxisSize;
              } else {
                tmp_8 = 0;
              }
              var tmp_9 = tmp_8;
              var tmp_10 = crossAxisDesiredSize_0 == null ? 0 : crossAxisDesiredSize_0;
              childConstraints = _this__u8e3s4.f8k(tmp_9, tmp_10, childMainAxisSize, crossAxisDesiredSize_0 == null ? crossAxisMax : crossAxisDesiredSize_0, true);
            } catch ($p) {
              if ($p instanceof IllegalArgumentException) {
                var e_0 = $p;
                throw IllegalArgumentException_init_$Create$_0('This log indicates a hard-to-reproduce Compose issue, modified with additional debugging details. Please help us by adding your experiences to the bug link provided. Thank you for helping us improve Compose. https://issuetracker.google.com/issues/300280216 mainAxisMax ' + mainAxisMax + 'mainAxisMin ' + mainAxisMin + 'targetSpace ' + targetSpace + 'arrangementSpacingPx ' + arrangementSpacingPx + 'weightChildrenCount ' + weightChildrenCount + 'fixedSpace ' + fixedSpace + 'arrangementSpacingTotal ' + arrangementSpacingTotal + 'remainingToTarget ' + remainingToTarget.toString() + 'totalWeight ' + totalWeight + 'weightUnitSpace ' + weightUnitSpace + 'weight ' + weight_0 + 'weightedSize ' + weightedSize_0 + 'crossAxisDesiredSize ' + crossAxisDesiredSize_0 + 'remainderUnit ' + remainderUnit + 'childMainAxisSize ' + childMainAxisSize, e_0);
              } else {
                throw $p;
              }
            }
            var placeable_0 = child_0.v5o(childConstraints);
            var placeableMainAxisSize_0 = _this__u8e3s4.b8k(placeable_0);
            var placeableCrossAxisSize_0 = _this__u8e3s4.c8k(placeable_0);
            childrenMainAxisSize[i_1 - startIndex | 0] = placeableMainAxisSize_0;
            weightedSpace = weightedSpace + placeableMainAxisSize_0 | 0;
            // Inline function 'kotlin.math.max' call
            var a_0 = crossAxisSpace;
            crossAxisSpace = Math.max(a_0, placeableCrossAxisSize_0);
            placeables[i_1] = placeable_0;
          }
        }
         while (inductionVariable_1 < endIndex);
      weightedSpace = coerceIn(numberToLong(weightedSpace).y2(arrangementSpacingTotal).f1(), 0, mainAxisMax - fixedSpace | 0);
    }
    if (anyAlignBy) {
      var inductionVariable_2 = startIndex;
      if (inductionVariable_2 < endIndex)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var placeable_1 = placeables[i_2];
          var parentData_1 = get_rowColumnParentData(ensureNotNull(placeable_1));
          var tmp13_safe_receiver = get_crossAxisAlignment(parentData_1);
          var alignmentLinePosition = tmp13_safe_receiver == null ? null : tmp13_safe_receiver.q8l(placeable_1);
          if (alignmentLinePosition == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'androidx.compose.foundation.layout.measure.<anonymous>' call
            var placeableCrossAxisSize_1 = _this__u8e3s4.c8k(placeable_1);
            var tmp0 = beforeCrossAxisAlignmentLine;
            // Inline function 'kotlin.math.max' call
            var b_1 = !(alignmentLinePosition === -2147483648) ? alignmentLinePosition : 0;
            beforeCrossAxisAlignmentLine = Math.max(tmp0, b_1);
            var tmp2 = afterCrossAxisAlignmentLine;
            var tmp_11;
            if (!(alignmentLinePosition === -2147483648)) {
              tmp_11 = alignmentLinePosition;
            } else {
              tmp_11 = placeableCrossAxisSize_1;
            }
            // Inline function 'kotlin.math.max' call
            var b_2 = placeableCrossAxisSize_1 - tmp_11 | 0;
            afterCrossAxisAlignmentLine = Math.max(tmp2, b_2);
          }
        }
         while (inductionVariable_2 < endIndex);
    }
    // Inline function 'kotlin.math.max' call
    var a_1 = coerceAtLeast(fixedSpace + weightedSpace | 0, 0);
    var mainAxisLayoutSize = Math.max(a_1, mainAxisMin);
    var tmp29 = crossAxisSpace;
    // Inline function 'kotlin.math.max' call
    var b_3 = beforeCrossAxisAlignmentLine + afterCrossAxisAlignmentLine | 0;
    // Inline function 'kotlin.math.max' call
    var b_4 = Math.max(crossAxisMin, b_3);
    var crossAxisLayoutSize = Math.max(tmp29, b_4);
    var tmp_12 = 0;
    var tmp_13 = new Int32Array(subSize);
    while (tmp_12 < subSize) {
      tmp_13[tmp_12] = 0;
      tmp_12 = tmp_12 + 1 | 0;
    }
    var mainAxisPositions = tmp_13;
    _this__u8e3s4.d8k(mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope);
    return _this__u8e3s4.e8k(placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex);
  }
  var FillWholeMaxWidth;
  var FillWholeMaxHeight;
  function get_FillWholeMaxSize() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxSize;
  }
  var FillWholeMaxSize;
  var WrapContentWidthCenter;
  var WrapContentWidthStart;
  var WrapContentHeightCenter;
  var WrapContentHeightTop;
  var WrapContentSizeCenter;
  var WrapContentSizeTopStart;
  function Companion() {
  }
  protoOf(Companion).r8l = function (fraction) {
    return new FillElement(Direction_Horizontal_getInstance(), fraction, 'fillMaxWidth');
  };
  protoOf(Companion).s8l = function (fraction) {
    return new FillElement(Direction_Vertical_getInstance(), fraction, 'fillMaxHeight');
  };
  protoOf(Companion).t8l = function (fraction) {
    return new FillElement(Direction_Both_getInstance(), fraction, 'fillMaxSize');
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    return Companion_instance_0;
  }
  function FillElement(direction, fraction, inspectorName) {
    ModifierNodeElement.call(this);
    this.v8l_1 = direction;
    this.w8l_1 = fraction;
    this.x8l_1 = inspectorName;
  }
  protoOf(FillElement).f2e = function () {
    return new FillNode(this.v8l_1, this.w8l_1);
  };
  protoOf(FillElement).y8l = function (node) {
    node.m8m_1 = this.v8l_1;
    node.n8m_1 = this.w8l_1;
  };
  protoOf(FillElement).t5f = function (node) {
    return this.y8l(node instanceof FillNode ? node : THROW_CCE());
  };
  protoOf(FillElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FillElement))
      return false;
    if (!this.v8l_1.equals(other.v8l_1))
      return false;
    if (!(this.w8l_1 === other.w8l_1))
      return false;
    return true;
  };
  protoOf(FillElement).hashCode = function () {
    var result = this.v8l_1.hashCode();
    result = imul(31, result) + getNumberHashCode(this.w8l_1) | 0;
    return result;
  };
  function WrapContentElement$Companion$width$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0(IntOffset($align.z59(0, _IntSize___get_width__impl__d9yl4o(size.q3i_1), layoutDirection), 0));
    };
  }
  function WrapContentElement$Companion$height$lambda($align) {
    return function (size, _anonymous_parameter_1__qggqgd) {
      return new IntOffset_0(IntOffset(0, $align.b5a(0, _IntSize___get_height__impl__prv63b(size.q3i_1))));
    };
  }
  function WrapContentElement$Companion$size$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset_0($align.e5a(Companion_getInstance_1().p3i_1, size.q3i_1, layoutDirection));
    };
  }
  function Companion_0() {
  }
  protoOf(Companion_0).o8m = function (align, unbounded) {
    var tmp = Direction_Horizontal_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$width$lambda(align), align, 'wrapContentWidth');
  };
  protoOf(Companion_0).p8m = function (align, unbounded) {
    var tmp = Direction_Vertical_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$height$lambda(align), align, 'wrapContentHeight');
  };
  protoOf(Companion_0).q8m = function (align, unbounded) {
    var tmp = Direction_Both_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$size$lambda(align), align, 'wrapContentSize');
  };
  var Companion_instance_1;
  function Companion_getInstance_4() {
    return Companion_instance_1;
  }
  function WrapContentElement(direction, unbounded, alignmentCallback, align, inspectorName) {
    ModifierNodeElement.call(this);
    this.s8m_1 = direction;
    this.t8m_1 = unbounded;
    this.u8m_1 = alignmentCallback;
    this.v8m_1 = align;
    this.w8m_1 = inspectorName;
  }
  protoOf(WrapContentElement).f2e = function () {
    return new WrapContentNode(this.s8m_1, this.t8m_1, this.u8m_1);
  };
  protoOf(WrapContentElement).x8m = function (node) {
    node.l8n_1 = this.s8m_1;
    node.m8n_1 = this.t8m_1;
    node.n8n_1 = this.u8m_1;
  };
  protoOf(WrapContentElement).t5f = function (node) {
    return this.x8m(node instanceof WrapContentNode ? node : THROW_CCE());
  };
  protoOf(WrapContentElement).equals = function (other) {
    if (this === other)
      return true;
    if (other === null)
      return false;
    if (!getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof WrapContentElement))
      THROW_CCE();
    if (!this.s8m_1.equals(other.s8m_1))
      return false;
    if (!(this.t8m_1 === other.t8m_1))
      return false;
    if (!equals(this.v8m_1, other.v8m_1))
      return false;
    return true;
  };
  protoOf(WrapContentElement).hashCode = function () {
    var result = this.s8m_1.hashCode();
    result = imul(31, result) + getBooleanHashCode(this.t8m_1) | 0;
    result = imul(31, result) + hashCode(this.v8m_1) | 0;
    return result;
  };
  function FillNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.s67($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function FillNode(direction, fraction) {
    Node.call(this);
    this.m8m_1 = direction;
    this.n8m_1 = fraction;
  }
  protoOf(FillNode).u5o = function (_this__u8e3s4, measurable, constraints) {
    var minWidth;
    var maxWidth;
    if (_Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) && !this.m8m_1.equals(Direction_Vertical_getInstance())) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = _Constraints___get_maxWidth__impl__uuyqc(constraints) * this.n8m_1;
      var tmp$ret$1 = roundToInt(this_0);
      var width = coerceIn(tmp$ret$1, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
      minWidth = width;
      maxWidth = width;
    } else {
      minWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      maxWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var minHeight;
    var maxHeight;
    if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints) && !this.m8m_1.equals(Direction_Horizontal_getInstance())) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = _Constraints___get_maxHeight__impl__dt3e8z(constraints) * this.n8m_1;
      var tmp$ret$3 = roundToInt(this_1);
      var height = coerceIn(tmp$ret$3, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
      minHeight = height;
      maxHeight = height;
    } else {
      minHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var placeable = measurable.v5o(Constraints(minWidth, maxWidth, minHeight, maxHeight));
    var tmp = placeable.w5o_1;
    var tmp_0 = placeable.x5o_1;
    return _this__u8e3s4.b5p(tmp, tmp_0, VOID, FillNode$measure$lambda(placeable));
  };
  var Direction_Vertical_instance;
  var Direction_Horizontal_instance;
  var Direction_Both_instance;
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
    Direction_entriesInitialized = true;
    Direction_Vertical_instance = new Direction('Vertical', 0);
    Direction_Horizontal_instance = new Direction('Horizontal', 1);
    Direction_Both_instance = new Direction('Both', 2);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function WrapContentNode$measure$lambda(this$0, $wrapperWidth, $placeable, $wrapperHeight, $this_measure) {
    return function ($this$layout) {
      var position = this$0.n8n_1(new IntSize_0(IntSize($wrapperWidth - $placeable.w5o_1 | 0, $wrapperHeight - $placeable.x5o_1 | 0)), $this_measure.t4d()).i3i_1;
      $this$layout.w67($placeable, position);
      return Unit_instance;
    };
  }
  function WrapContentNode(direction, unbounded, alignmentCallback) {
    Node.call(this);
    this.l8n_1 = direction;
    this.m8n_1 = unbounded;
    this.n8n_1 = alignmentCallback;
  }
  protoOf(WrapContentNode).u5o = function (_this__u8e3s4, measurable, constraints) {
    var tmp0_minWidth = !this.l8n_1.equals(Direction_Vertical_getInstance()) ? 0 : _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp1_minHeight = !this.l8n_1.equals(Direction_Horizontal_getInstance()) ? 0 : _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp;
    if (!this.l8n_1.equals(Direction_Vertical_getInstance()) && this.m8n_1) {
      tmp = 2147483647;
    } else {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var tmp2_maxWidth = tmp;
    var tmp_0;
    if (!this.l8n_1.equals(Direction_Horizontal_getInstance()) && this.m8n_1) {
      tmp_0 = 2147483647;
    } else {
      tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var tmp3_maxHeight = tmp_0;
    var wrappedConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
    var placeable = measurable.v5o(wrappedConstraints);
    var wrapperWidth = coerceIn(placeable.w5o_1, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
    var wrapperHeight = coerceIn(placeable.x5o_1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    return _this__u8e3s4.b5p(wrapperWidth, wrapperHeight, VOID, WrapContentNode$measure$lambda(this, wrapperWidth, placeable, wrapperHeight, _this__u8e3s4));
  };
  function defaultMinSize(_this__u8e3s4, minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_2().c3i_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_2().c3i_1 : minHeight;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.f5a(new UnspecifiedConstraintsElement(minWidth, minHeight));
  }
  function fillMaxSize(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.f5a(fraction === 1.0 ? get_FillWholeMaxSize() : Companion_instance_0.t8l(fraction));
  }
  function UnspecifiedConstraintsElement(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_2().c3i_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_2().c3i_1 : minHeight;
    ModifierNodeElement.call(this);
    this.p8n_1 = minWidth;
    this.q8n_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsElement).f2e = function () {
    return new UnspecifiedConstraintsNode(this.p8n_1, this.q8n_1);
  };
  protoOf(UnspecifiedConstraintsElement).r8n = function (node) {
    node.f8o_1 = this.p8n_1;
    node.g8o_1 = this.q8n_1;
  };
  protoOf(UnspecifiedConstraintsElement).t5f = function (node) {
    return this.r8n(node instanceof UnspecifiedConstraintsNode ? node : THROW_CCE());
  };
  protoOf(UnspecifiedConstraintsElement).equals = function (other) {
    if (!(other instanceof UnspecifiedConstraintsElement))
      return false;
    return equals(this.p8n_1, other.p8n_1) && equals(this.q8n_1, other.q8n_1);
  };
  protoOf(UnspecifiedConstraintsElement).hashCode = function () {
    return imul(Dp__hashCode_impl_sxkrra(this.p8n_1), 31) + Dp__hashCode_impl_sxkrra(this.q8n_1) | 0;
  };
  function UnspecifiedConstraintsNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.s67($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function UnspecifiedConstraintsNode(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_2().c3i_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_2().c3i_1 : minHeight;
    Node.call(this);
    this.f8o_1 = minWidth;
    this.g8o_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsNode).u5o = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    if (!equals(this.f8o_1, Companion_getInstance_2().c3i_1) && _Constraints___get_minWidth__impl__hi9lfi(constraints) === 0) {
      tmp = coerceAtLeast(coerceAtMost(_this__u8e3s4.m3h(this.f8o_1), _Constraints___get_maxWidth__impl__uuyqc(constraints)), 0);
    } else {
      tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    }
    var tmp_0 = tmp;
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2;
    if (!equals(this.g8o_1, Companion_getInstance_2().c3i_1) && _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0) {
      tmp_2 = coerceAtLeast(coerceAtMost(_this__u8e3s4.m3h(this.g8o_1), _Constraints___get_maxHeight__impl__dt3e8z(constraints)), 0);
    } else {
      tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    }
    var wrappedConstraints = Constraints(tmp_0, tmp_1, tmp_2, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    var placeable = measurable.v5o(wrappedConstraints);
    var tmp_3 = placeable.w5o_1;
    var tmp_4 = placeable.x5o_1;
    return _this__u8e3s4.b5p(tmp_3, tmp_4, VOID, UnspecifiedConstraintsNode$measure$lambda(placeable));
  };
  function Direction_Vertical_getInstance() {
    Direction_initEntries();
    return Direction_Vertical_instance;
  }
  function Direction_Horizontal_getInstance() {
    Direction_initEntries();
    return Direction_Horizontal_instance;
  }
  function Direction_Both_getInstance() {
    Direction_initEntries();
    return Direction_Both_instance;
  }
  var properties_initialized_Size_kt_x7rk2r;
  function _init_properties_Size_kt__jcru8v() {
    if (!properties_initialized_Size_kt_x7rk2r) {
      properties_initialized_Size_kt_x7rk2r = true;
      FillWholeMaxWidth = Companion_instance_0.r8l(1.0);
      FillWholeMaxHeight = Companion_instance_0.s8l(1.0);
      FillWholeMaxSize = Companion_instance_0.t8l(1.0);
      WrapContentWidthCenter = Companion_instance_1.o8m(Companion_getInstance().w59_1, false);
      WrapContentWidthStart = Companion_instance_1.o8m(Companion_getInstance().v59_1, false);
      WrapContentHeightCenter = Companion_instance_1.p8m(Companion_getInstance().t59_1, false);
      WrapContentHeightTop = Companion_instance_1.p8m(Companion_getInstance().s59_1, false);
      WrapContentSizeCenter = Companion_instance_1.q8m(Companion_getInstance().n59_1, false);
      WrapContentSizeTopStart = Companion_instance_1.q8m(Companion_getInstance().j59_1, false);
    }
  }
  //region block: post-declaration
  protoOf(Arrangement$Start$1).h8i = get_spacing;
  protoOf(Arrangement$End$1).h8i = get_spacing;
  protoOf(Arrangement$Top$1).h8i = get_spacing_0;
  protoOf(Arrangement$Bottom$1).h8i = get_spacing_0;
  protoOf(ColumnMeasurePolicy).g8k = createConstraints$default;
  protoOf(RowMeasurePolicy).g8k = createConstraints$default;
  //endregion
  //region block: init
  BoxScopeInstance_instance = new BoxScopeInstance();
  ColumnScopeInstance_instance = new ColumnScopeInstance();
  RowScopeInstance_instance = new RowScopeInstance();
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = PaddingValues;
  _.$_$.b = columnMeasurePolicy;
  _.$_$.c = defaultMinSize;
  _.$_$.d = fillMaxSize;
  _.$_$.e = maybeCachedBoxMeasurePolicy;
  _.$_$.f = padding;
  _.$_$.g = rowMeasurePolicy;
  _.$_$.h = Arrangement_getInstance;
  _.$_$.i = BoxScopeInstance_instance;
  _.$_$.j = ColumnScopeInstance_instance;
  _.$_$.k = RowScopeInstance_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-foundation-foundation-layout.js.map
