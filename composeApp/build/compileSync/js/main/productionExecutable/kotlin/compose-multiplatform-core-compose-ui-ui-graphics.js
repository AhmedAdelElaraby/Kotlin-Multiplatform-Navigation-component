(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-util.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './skiko-kjs.js', './compose-multiplatform-core-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./skiko-kjs.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-collection-collection' was not found. Please, check whether 'compose-multiplatform-core-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-graphics'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-graphics'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-util'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['skiko-kjs'], globalThis['compose-multiplatform-core-compose-runtime-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_collection_internal_collection, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_skiko_skiko, kotlin_org_jetbrains_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.e;
  var _FloatFloatPair___init__impl__2q1dd3 = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.v;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.o3;
  var isNaN_0 = kotlin_kotlin.$_$.tf;
  var fastCbrt = kotlin_org_jetbrains_compose_ui_ui_util.$_$.a;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var protoOf = kotlin_kotlin.$_$.kb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.la;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var initMetadataForInterface = kotlin_kotlin.$_$.na;
  var Long = kotlin_kotlin.$_$.ue;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.b3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.c3;
  var floatFromBits = kotlin_kotlin.$_$.da;
  var ulongToDouble = kotlin_kotlin.$_$.mg;
  var equals = kotlin_kotlin.$_$.ba;
  var ULong__hashCode_impl_6hv2lb = kotlin_kotlin.$_$.d3;
  var numberToInt = kotlin_kotlin.$_$.hb;
  var toLong = kotlin_kotlin.$_$.mb;
  var toRawBits = kotlin_kotlin.$_$.hg;
  var toShort = kotlin_kotlin.$_$.nb;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var isFinite = kotlin_kotlin.$_$.rf;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var trimIndent = kotlin_kotlin.$_$.fe;
  var get_PI = kotlin_kotlin.$_$.pb;
  var hashCode = kotlin_kotlin.$_$.ja;
  var get_isSimple = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.xf;
  var _CornerRadius___get_x__impl__1594cn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.s;
  var CornerRadius = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Enum = kotlin_kotlin.$_$.pe;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var toRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r;
  var Offset__hashCode_impl_hbql41 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.w;
  var getNumberHashCode = kotlin_kotlin.$_$.ga;
  var Offset__toString_impl_4ffbou = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b1;
  var charSequenceLength = kotlin_kotlin.$_$.x9;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var getStringHashCode = kotlin_kotlin.$_$.ia;
  var compareTo = kotlin_kotlin.$_$.z9;
  var withSign = kotlin_kotlin.$_$.wb;
  var FunctionAdapter = kotlin_kotlin.$_$.p9;
  var isInterface = kotlin_kotlin.$_$.za;
  var initMetadataForObject = kotlin_kotlin.$_$.pa;
  var mutableIntObjectMapOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.p;
  var arrayCopy = kotlin_kotlin.$_$.x4;
  var coerceIn = kotlin_kotlin.$_$.bc;
  var contentEquals = kotlin_kotlin.$_$.j5;
  var contentHashCode = kotlin_kotlin.$_$.l5;
  var toBits = kotlin_kotlin.$_$.fg;
  var isNaN_1 = kotlin_kotlin.$_$.uf;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var toString = kotlin_kotlin.$_$.ob;
  var Size__toString_impl_o87ni8 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var _CornerRadius___get_y__impl__tyvleu = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var toPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e;
  var toPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f;
  var roundToPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c;
  var toDp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d;
  var toDp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h;
  var get_center = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.l1;
  var CornerRadius_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b;
  var _Size___get_minDimension__impl__4iso0r = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var Density_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i;
  var toString_0 = kotlin_kotlin.$_$.ig;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var BlendMode_SRC_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z1;
  var BlendMode_LUMINOSITY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o1;
  var BlendMode_COLOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c1;
  var BlendMode_SATURATION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t1;
  var BlendMode_HUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m1;
  var BlendMode_MULTIPLY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q1;
  var BlendMode_EXCLUSION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k1;
  var BlendMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e1;
  var BlendMode_SOFT_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v1;
  var BlendMode_HARD_LIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l1;
  var BlendMode_COLOR_BURN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a1;
  var BlendMode_COLOR_DODGE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b1;
  var BlendMode_LIGHTEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n1;
  var BlendMode_DARKEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d1;
  var BlendMode_OVERLAY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r1;
  var BlendMode_SCREEN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u1;
  var BlendMode_MODULATE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p1;
  var BlendMode_PLUS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s1;
  var BlendMode_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b2;
  var BlendMode_DST_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f1;
  var BlendMode_SRC_ATOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w1;
  var BlendMode_DST_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h1;
  var BlendMode_SRC_OUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y1;
  var BlendMode_DST_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g1;
  var BlendMode_SRC_IN_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x1;
  var BlendMode_DST_OVER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i1;
  var BlendMode_DST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j1;
  var BlendMode_SRC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a2;
  var BlendMode_CLEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z;
  var Companion_instance = kotlin_org_jetbrains_skiko_skiko.$_$.l4;
  var Companion_instance_0 = kotlin_org_jetbrains_skiko_skiko.$_$.k4;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var Companion_getInstance_3 = kotlin_org_jetbrains_skiko_skiko.$_$.h4;
  var ClipMode_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d2;
  var ClipMode_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c2;
  var Matrix44 = kotlin_org_jetbrains_skiko_skiko.$_$.a5;
  var FilterMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k2;
  var MipmapMode_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v2;
  var FilterMipmap = kotlin_org_jetbrains_skiko_skiko.$_$.x4;
  var CubicResampler = kotlin_org_jetbrains_skiko_skiko.$_$.w4;
  var FilterMode_LINEAR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j2;
  var MipmapMode_NEAREST_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u2;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var Canvas_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.r3;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w2;
  var PaintMode_STROKE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x2;
  var PaintStrokeCap_BUTT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y2;
  var PaintStrokeCap_SQUARE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a3;
  var PaintStrokeCap_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z2;
  var PaintStrokeJoin_MITER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c3;
  var PaintStrokeJoin_BEVEL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b3;
  var PaintStrokeJoin_ROUND_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d3;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.u3;
  var coerceIn_0 = kotlin_kotlin.$_$.cc;
  var PathOp_XOR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m3;
  var PathOp_REVERSE_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k3;
  var PathOp_UNION_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l3;
  var PathOp_INTERSECT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j3;
  var PathOp_DIFFERENCE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i3;
  var Path_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.v3;
  var PathFillMode_WINDING_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h3;
  var PathFillMode_EVEN_ODD_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g3;
  var Companion_getInstance_4 = kotlin_org_jetbrains_skiko_skiko.$_$.i4;
  var Companion_getInstance_5 = kotlin_org_jetbrains_skiko_skiko.$_$.j4;
  var PathDirection_COUNTER_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f3;
  var PathDirection_CLOCKWISE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e3;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.j2;
  var Companion_getInstance_6 = kotlin_org_jetbrains_skiko_skiko.$_$.a4;
  var SnapshotStateObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e;
  var ColorAlphaType_OPAQUE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e2;
  var ColorAlphaType_PREMUL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f2;
  var ColorInfo = kotlin_org_jetbrains_skiko_skiko.$_$.v4;
  var ImageInfo = kotlin_org_jetbrains_skiko_skiko.$_$.z4;
  var Bitmap_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.q3;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.c4;
  var ColorType_RGBA_F16_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h2;
  var ColorType_RGB_565_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i2;
  var ColorType_ALPHA_8_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g2;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.b4;
  var mutableScatterSetOf = kotlin_org_jetbrains_compose_collection_internal_collection.$_$.t;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var toSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m1;
  var RoundRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i;
  var get_isUnspecified = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p;
  var Point3 = kotlin_org_jetbrains_skiko_skiko.$_$.b5;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var ShadowUtils_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m4;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(BlendMode, 'BlendMode');
  initMetadataForClass(Brush, 'Brush');
  initMetadataForClass(ShaderBrush, 'ShaderBrush', VOID, Brush);
  initMetadataForClass(SolidColor, 'SolidColor', VOID, Brush);
  function clipRect(rect, clipOp) {
    return this.a43(rect.i3g_1, rect.j3g_1, rect.k3g_1, rect.l3g_1, clipOp);
  }
  function clipRect$default(rect, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_10().d43_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.z42(rect, clipOp);
      tmp = Unit_instance;
    } else {
      clipRect(rect, clipOp);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function clipRect$default_0(left, top, right, bottom, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_10().d43_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.a43(left, top, right, bottom, clipOp);
      tmp = Unit_instance;
    } else {
      tmp = $super.a43.call(this, left, top, right, bottom, new ClipOp(clipOp));
    }
    return tmp;
  }
  function clipPath$default(path, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_10().d43_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.f43(path, clipOp);
      tmp = Unit_instance;
    } else {
      tmp = $super.f43.call(this, path, new ClipOp(clipOp));
    }
    return tmp;
  }
  function drawRect(rect, paint) {
    return this.i43(rect.i3g_1, rect.j3g_1, rect.k3g_1, rect.l3g_1, paint);
  }
  initMetadataForInterface(Canvas, 'Canvas');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ClipOp, 'ClipOp');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Color, 'Color');
  initMetadataForInterface(ColorProducer, 'ColorProducer');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(ColorFilter, 'ColorFilter');
  initMetadataForClass(BlendModeColorFilter, 'BlendModeColorFilter', VOID, ColorFilter);
  initMetadataForCompanion(Companion_3);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(ImageBitmapConfig, 'ImageBitmapConfig');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(Matrix, 'Matrix');
  initMetadataForClass(Outline, 'Outline');
  initMetadataForClass(Rectangle, 'Rectangle', VOID, Outline);
  initMetadataForClass(Rounded, 'Rounded', VOID, Outline);
  initMetadataForClass(Generic, 'Generic', VOID, Outline);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  function addRect$default(rect, direction, $super) {
    direction = direction === VOID ? Direction_CounterClockwise_getInstance() : direction;
    var tmp;
    if ($super === VOID) {
      this.f48(rect, direction);
      tmp = Unit_instance;
    } else {
      tmp = $super.f48.call(this, rect, direction);
    }
    return tmp;
  }
  function addRoundRect$default(roundRect, direction, $super) {
    direction = direction === VOID ? Direction_CounterClockwise_getInstance() : direction;
    var tmp;
    if ($super === VOID) {
      this.h48(roundRect, direction);
      tmp = Unit_instance;
    } else {
      tmp = $super.h48.call(this, roundRect, direction);
    }
    return tmp;
  }
  function addPath$default(path, offset, $super) {
    offset = offset === VOID ? Companion_getInstance().d3g_1 : offset;
    var tmp;
    if ($super === VOID) {
      this.i48(path, offset);
      tmp = Unit_instance;
    } else {
      tmp = $super.i48.call(this, path, new Offset_0(offset));
    }
    return tmp;
  }
  initMetadataForInterface(Path, 'Path');
  initMetadataForCompanion(Companion_7);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(RectangleShape$1);
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(Shadow, 'Shadow', Shadow);
  initMetadataForCompanion(Companion_10);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(Adaptation, 'Adaptation');
  initMetadataForClass(Adaptation$Companion$Bradford$1, VOID, VOID, Adaptation);
  initMetadataForClass(Adaptation$Companion$VonKries$1, VOID, VOID, Adaptation);
  initMetadataForClass(Adaptation$Companion$Ciecat02$1, VOID, VOID, Adaptation);
  initMetadataForCompanion(Companion_12);
  initMetadataForCompanion(Companion_13);
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(ColorSpace, 'ColorSpace');
  initMetadataForInterface(DoubleFunction, 'DoubleFunction');
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForObject(ColorSpaces, 'ColorSpaces');
  initMetadataForClass(Connector, 'Connector');
  initMetadataForClass(Connector$Companion$identity$1, VOID, VOID, Connector);
  initMetadataForClass(RgbConnector, 'RgbConnector', VOID, Connector);
  initMetadataForCompanion(Companion_15);
  initMetadataForObject(Illuminant, 'Illuminant');
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(Lab, 'Lab', VOID, ColorSpace);
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(Oklab, 'Oklab', VOID, ColorSpace);
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4, 'sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0', VOID, VOID, [DoubleFunction, FunctionAdapter]);
  initMetadataForClass(Rgb, 'Rgb', VOID, ColorSpace);
  initMetadataForClass(TransferParameters, 'TransferParameters');
  initMetadataForClass(WhitePoint, 'WhitePoint');
  initMetadataForClass(Xyz, 'Xyz', VOID, ColorSpace);
  initMetadataForClass(DrawParams, 'DrawParams', DrawParams);
  function set_canvas(_anonymous_parameter_0__qggqh8) {
  }
  function get_canvas() {
    return new EmptyCanvas();
  }
  function set_layoutDirection(_anonymous_parameter_0__qggqh8) {
  }
  function get_layoutDirection() {
    return LayoutDirection_Ltr_getInstance();
  }
  function set_density(_anonymous_parameter_0__qggqh8) {
  }
  function get_density() {
    return get_DefaultDensity();
  }
  function set_graphicsLayer(_anonymous_parameter_0__qggqh8) {
  }
  function get_graphicsLayer() {
    return null;
  }
  initMetadataForInterface(DrawContext, 'DrawContext');
  initMetadataForClass(CanvasDrawScope$drawContext$1, VOID, VOID, VOID, [DrawContext]);
  function get_center_0() {
    return get_center(this.x4d().z4c());
  }
  function get_size() {
    return this.x4d().z4c();
  }
  function drawRect$default(brush, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().d3g_1 : topLeft;
    size = size === VOID ? offsetSize(this.z4c(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_30().v47_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.c48(brush, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.c48.call(this, brush, new Offset_0(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawRect$default_0(color, topLeft, size, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().d3g_1 : topLeft;
    size = size === VOID ? offsetSize(this.z4c(), this, topLeft) : size;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_30().v47_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.z47(color, topLeft, size, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.z47.call(this, new Color(color), new Offset_0(topLeft), new Size_0(size), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    this.b4e(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode);
  }
  function drawImage$default(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality, $super) {
    srcOffset = srcOffset === VOID ? Companion_getInstance_1().h3i_1 : srcOffset;
    srcSize = srcSize === VOID ? IntSize(image.m3g(), image.n3g()) : srcSize;
    dstOffset = dstOffset === VOID ? Companion_getInstance_1().h3i_1 : dstOffset;
    dstSize = dstSize === VOID ? srcSize : dstSize;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_30().v47_1 : blendMode;
    filterQuality = filterQuality === VOID ? Companion_getInstance_30().w47_1 : filterQuality;
    var tmp;
    if ($super === VOID) {
      this.a4e(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp = Unit_instance;
    } else {
      drawImage(image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function drawRoundRect$default(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode, $super) {
    topLeft = topLeft === VOID ? Companion_getInstance().d3g_1 : topLeft;
    size = size === VOID ? offsetSize(this.z4c(), this, topLeft) : size;
    cornerRadius = cornerRadius === VOID ? Companion_getInstance_2().v3f_1 : cornerRadius;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_30().v47_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.b48(brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.b48.call(this, brush, new Offset_0(topLeft), new Size_0(size), new CornerRadius_0(cornerRadius), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawCircle$default(color, radius, center, alpha, style, colorFilter, blendMode, $super) {
    radius = radius === VOID ? _Size___get_minDimension__impl__4iso0r(this.z4c()) / 2.0 : radius;
    center = center === VOID ? this.h4e() : center;
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_30().v47_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.d4e(color, radius, center, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.d4e.call(this, new Color(color), radius, new Offset_0(center), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default(path, color, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_30().v47_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.x47(path, color, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.x47.call(this, path, new Color(color), alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  function drawPath$default_0(path, brush, alpha, style, colorFilter, blendMode, $super) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_30().v47_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.a48(path, brush, alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.a48.call(this, path, brush, alpha, style, colorFilter, new BlendMode(blendMode));
    }
    return tmp;
  }
  initMetadataForInterface(DrawScope, 'DrawScope', VOID, VOID, [Density_0]);
  initMetadataForClass(CanvasDrawScope, 'CanvasDrawScope', CanvasDrawScope, VOID, [DrawScope]);
  initMetadataForClass(asDrawTransform$1);
  initMetadataForClass(DrawStyle, 'DrawStyle');
  initMetadataForCompanion(Companion_20);
  initMetadataForObject(Fill, 'Fill', VOID, DrawStyle);
  initMetadataForCompanion(Companion_21);
  initMetadataForClass(Stroke, 'Stroke', Stroke, DrawStyle);
  initMetadataForClass(EmptyCanvas, 'EmptyCanvas', EmptyCanvas, VOID, [Canvas]);
  initMetadataForCompanion(Companion_22);
  initMetadataForClass(SkiaBackedCanvas, 'SkiaBackedCanvas', VOID, VOID, [Canvas]);
  initMetadataForClass(SkiaBackedPaint, 'SkiaBackedPaint', SkiaBackedPaint);
  initMetadataForClass(SkiaBackedPath, 'SkiaBackedPath', SkiaBackedPath, VOID, [Path]);
  initMetadataForClass(SkiaBackedPathEffect, 'SkiaBackedPathEffect');
  initMetadataForClass(SkiaGraphicsContext, 'SkiaGraphicsContext', SkiaGraphicsContext);
  initMetadataForClass(SkiaBackedImageBitmap, 'SkiaBackedImageBitmap');
  //endregion
  function computeCubicVerticalBounds(p0y, p1y, p2y, p3y, roots, index) {
    index = index === VOID ? 0 : index;
    var d0 = 3.0 * (p1y - p0y);
    var d1 = 3.0 * (p2y - p1y);
    var d2 = 3.0 * (p3y - p2y);
    var count = findQuadraticRoots(d0, d1, d2, roots, index);
    var dd0 = 2.0 * (d1 - d0);
    var dd1 = 2.0 * (d2 - d1);
    var tmp = count;
    // Inline function 'androidx.compose.ui.graphics.findLineRoot' call
    var index_0 = index + count | 0;
    count = tmp + writeValidRootInUnitRange(-dd0 / (dd1 - dd0), roots, index_0) | 0;
    // Inline function 'kotlin.math.min' call
    var minY = Math.min(p0y, p3y);
    // Inline function 'kotlin.math.max' call
    var maxY = Math.max(p0y, p3y);
    var inductionVariable = 0;
    var last = count;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = roots[i];
        var y = evaluateCubic_0(p0y, p1y, p2y, p3y, t);
        // Inline function 'kotlin.math.min' call
        var a = minY;
        minY = Math.min(a, y);
        // Inline function 'kotlin.math.max' call
        var a_0 = maxY;
        maxY = Math.max(a_0, y);
      }
       while (inductionVariable < last);
    return _FloatFloatPair___init__impl__2q1dd3(minY, maxY);
  }
  function findFirstCubicRoot(p0, p1, p2, p3) {
    var a = 3.0 * (p0 - 2.0 * p1 + p2);
    var b = 3.0 * (p1 - p0);
    var c = p0;
    var d = -p0 + 3.0 * (p1 - p2) + p3;
    // Inline function 'androidx.compose.ui.graphics.closeTo' call
    // Inline function 'kotlin.math.abs' call
    var x = d - 0.0;
    if (Math.abs(x) < access$_get_Epsilon_$tBezierKt_g9m8gx()) {
      // Inline function 'androidx.compose.ui.graphics.closeTo' call
      // Inline function 'kotlin.math.abs' call
      var x_0 = a - 0.0;
      if (Math.abs(x_0) < access$_get_Epsilon_$tBezierKt_g9m8gx()) {
        // Inline function 'androidx.compose.ui.graphics.closeTo' call
        // Inline function 'kotlin.math.abs' call
        var x_1 = b - 0.0;
        if (Math.abs(x_1) < access$_get_Epsilon_$tBezierKt_g9m8gx()) {
          return NaN;
        }
        // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
        var r = -c / b;
        var tmp;
        if (r < 0.0) {
          var tmp_0;
          if (r >= -8.34465E-7) {
            tmp_0 = 0.0;
          } else {
            tmp_0 = NaN;
          }
          tmp = tmp_0;
        } else if (r > 1.0) {
          var tmp_1;
          if (r <= 1.0 + 8.34465E-7) {
            tmp_1 = 1.0;
          } else {
            tmp_1 = NaN;
          }
          tmp = tmp_1;
        } else {
          tmp = r;
        }
        return tmp;
      } else {
        // Inline function 'kotlin.math.sqrt' call
        var x_2 = b * b - 4.0 * a * c;
        var q = Math.sqrt(x_2);
        var a2 = 2.0 * a;
        // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
        var r_0 = (q - b) / a2;
        var tmp_2;
        if (r_0 < 0.0) {
          var tmp_3;
          if (r_0 >= -8.34465E-7) {
            tmp_3 = 0.0;
          } else {
            tmp_3 = NaN;
          }
          tmp_2 = tmp_3;
        } else if (r_0 > 1.0) {
          var tmp_4;
          if (r_0 <= 1.0 + 8.34465E-7) {
            tmp_4 = 1.0;
          } else {
            tmp_4 = NaN;
          }
          tmp_2 = tmp_4;
        } else {
          tmp_2 = r_0;
        }
        var root = tmp_2;
        if (!isNaN_0(root))
          return root;
        // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
        var r_1 = (-b - q) / a2;
        var tmp_5;
        if (r_1 < 0.0) {
          var tmp_6;
          if (r_1 >= -8.34465E-7) {
            tmp_6 = 0.0;
          } else {
            tmp_6 = NaN;
          }
          tmp_5 = tmp_6;
        } else if (r_1 > 1.0) {
          var tmp_7;
          if (r_1 <= 1.0 + 8.34465E-7) {
            tmp_7 = 1.0;
          } else {
            tmp_7 = NaN;
          }
          tmp_5 = tmp_7;
        } else {
          tmp_5 = r_1;
        }
        return tmp_5;
      }
    }
    a = a / d;
    b = b / d;
    c = c / d;
    var o3 = (3.0 * b - a * a) / 9.0;
    var q2 = (2.0 * a * a * a - 9.0 * a * b + 27.0 * c) / 54.0;
    var discriminant = q2 * q2 + o3 * o3 * o3;
    var a3 = a / 3.0;
    if (discriminant < 0.0) {
      var mp33 = -(o3 * o3 * o3);
      // Inline function 'kotlin.math.sqrt' call
      var r_2 = Math.sqrt(mp33);
      var t = -q2 / r_2;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_0 = t < -1.0 ? -1.0 : t;
      var cosPhi = this_0 > 1.0 ? 1.0 : this_0;
      // Inline function 'kotlin.math.acos' call
      var phi = Math.acos(cosPhi);
      var t1 = 2.0 * fastCbrt(r_2);
      // Inline function 'kotlin.math.cos' call
      var x_3 = phi / 3.0;
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_3 = t1 * Math.cos(x_3) - a3;
      var tmp_8;
      if (r_3 < 0.0) {
        var tmp_9;
        if (r_3 >= -8.34465E-7) {
          tmp_9 = 0.0;
        } else {
          tmp_9 = NaN;
        }
        tmp_8 = tmp_9;
      } else if (r_3 > 1.0) {
        var tmp_10;
        if (r_3 <= 1.0 + 8.34465E-7) {
          tmp_10 = 1.0;
        } else {
          tmp_10 = NaN;
        }
        tmp_8 = tmp_10;
      } else {
        tmp_8 = r_3;
      }
      var root_0 = tmp_8;
      if (!isNaN_0(root_0))
        return root_0;
      // Inline function 'kotlin.math.cos' call
      var x_4 = (phi + 6.283185307179586) / 3.0;
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_4 = t1 * Math.cos(x_4) - a3;
      var tmp_11;
      if (r_4 < 0.0) {
        var tmp_12;
        if (r_4 >= -8.34465E-7) {
          tmp_12 = 0.0;
        } else {
          tmp_12 = NaN;
        }
        tmp_11 = tmp_12;
      } else if (r_4 > 1.0) {
        var tmp_13;
        if (r_4 <= 1.0 + 8.34465E-7) {
          tmp_13 = 1.0;
        } else {
          tmp_13 = NaN;
        }
        tmp_11 = tmp_13;
      } else {
        tmp_11 = r_4;
      }
      root_0 = tmp_11;
      if (!isNaN_0(root_0))
        return root_0;
      // Inline function 'kotlin.math.cos' call
      var x_5 = (phi + 2.0 * 6.283185307179586) / 3.0;
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_5 = t1 * Math.cos(x_5) - a3;
      var tmp_14;
      if (r_5 < 0.0) {
        var tmp_15;
        if (r_5 >= -8.34465E-7) {
          tmp_15 = 0.0;
        } else {
          tmp_15 = NaN;
        }
        tmp_14 = tmp_15;
      } else if (r_5 > 1.0) {
        var tmp_16;
        if (r_5 <= 1.0 + 8.34465E-7) {
          tmp_16 = 1.0;
        } else {
          tmp_16 = NaN;
        }
        tmp_14 = tmp_16;
      } else {
        tmp_14 = r_5;
      }
      return tmp_14;
    } else if (discriminant === 0.0) {
      var u1 = -fastCbrt(q2);
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_6 = 2.0 * u1 - a3;
      var tmp_17;
      if (r_6 < 0.0) {
        var tmp_18;
        if (r_6 >= -8.34465E-7) {
          tmp_18 = 0.0;
        } else {
          tmp_18 = NaN;
        }
        tmp_17 = tmp_18;
      } else if (r_6 > 1.0) {
        var tmp_19;
        if (r_6 <= 1.0 + 8.34465E-7) {
          tmp_19 = 1.0;
        } else {
          tmp_19 = NaN;
        }
        tmp_17 = tmp_19;
      } else {
        tmp_17 = r_6;
      }
      var root_1 = tmp_17;
      if (!isNaN_0(root_1))
        return root_1;
      // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
      var r_7 = -u1 - a3;
      var tmp_20;
      if (r_7 < 0.0) {
        var tmp_21;
        if (r_7 >= -8.34465E-7) {
          tmp_21 = 0.0;
        } else {
          tmp_21 = NaN;
        }
        tmp_20 = tmp_21;
      } else if (r_7 > 1.0) {
        var tmp_22;
        if (r_7 <= 1.0 + 8.34465E-7) {
          tmp_22 = 1.0;
        } else {
          tmp_22 = NaN;
        }
        tmp_20 = tmp_22;
      } else {
        tmp_20 = r_7;
      }
      return tmp_20;
    }
    // Inline function 'kotlin.math.sqrt' call
    var sd = Math.sqrt(discriminant);
    var u1_0 = fastCbrt(-q2 + sd);
    var v1 = fastCbrt(q2 + sd);
    // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
    var r_8 = u1_0 - v1 - a3;
    var tmp_23;
    if (r_8 < 0.0) {
      var tmp_24;
      if (r_8 >= -8.34465E-7) {
        tmp_24 = 0.0;
      } else {
        tmp_24 = NaN;
      }
      tmp_23 = tmp_24;
    } else if (r_8 > 1.0) {
      var tmp_25;
      if (r_8 <= 1.0 + 8.34465E-7) {
        tmp_25 = 1.0;
      } else {
        tmp_25 = NaN;
      }
      tmp_23 = tmp_25;
    } else {
      tmp_23 = r_8;
    }
    return tmp_23;
  }
  function evaluateCubic(p1, p2, t) {
    var a = 1.0 / 3.0 + (p1 - p2);
    var b = p2 - 2.0 * p1;
    var c = p1;
    return 3.0 * ((a * t + b) * t + c) * t;
  }
  function findQuadraticRoots(p0, p1, p2, roots, index) {
    index = index === VOID ? 0 : index;
    var a = p0;
    var b = p1;
    var c = p2;
    var d = a - 2.0 * b + c;
    var rootCount = 0;
    if (!(d === 0.0)) {
      // Inline function 'kotlin.math.sqrt' call
      var x = b * b - a * c;
      var v1 = -Math.sqrt(x);
      var v2 = -a + b;
      rootCount = rootCount + writeValidRootInUnitRange(-(v1 + v2) / d, roots, index) | 0;
      rootCount = rootCount + writeValidRootInUnitRange((v1 - v2) / d, roots, index + rootCount | 0) | 0;
      if (rootCount > 1) {
        var s = roots[index];
        var t = roots[index + 1 | 0];
        if (s > t) {
          roots[index] = t;
          roots[index + 1 | 0] = s;
        } else if (s === t) {
          rootCount = rootCount - 1 | 0;
        }
      }
    } else if (!(b === c)) {
      rootCount = rootCount + writeValidRootInUnitRange((2.0 * b - c) / (2.0 * b - 2.0 * c), roots, index) | 0;
    }
    return rootCount;
  }
  function evaluateCubic_0(p0, p1, p2, p3, t) {
    var a = p3 + 3.0 * (p1 - p2) - p0;
    var b = 3.0 * (p2 - 2.0 * p1 + p0);
    var c = 3.0 * (p1 - p0);
    return ((a * t + b) * t + c) * t + p0;
  }
  function writeValidRootInUnitRange(r, roots, index) {
    // Inline function 'androidx.compose.ui.graphics.clampValidRootInUnitRange' call
    var tmp;
    if (r < 0.0) {
      var tmp_0;
      if (r >= -8.34465E-7) {
        tmp_0 = 0.0;
      } else {
        tmp_0 = NaN;
      }
      tmp = tmp_0;
    } else if (r > 1.0) {
      var tmp_1;
      if (r <= 1.0 + 8.34465E-7) {
        tmp_1 = 1.0;
      } else {
        tmp_1 = NaN;
      }
      tmp = tmp_1;
    } else {
      tmp = r;
    }
    var v = tmp;
    roots[index] = v;
    return isNaN_0(v) ? 0 : 1;
  }
  function access$_get_Epsilon_$tBezierKt_g9m8gx() {
    return 1.0E-7;
  }
  function _BlendMode___init__impl__q6jalh(value) {
    return value;
  }
  function Companion() {
    Companion_instance_1 = this;
    this.n41_1 = _BlendMode___init__impl__q6jalh(0);
    this.o41_1 = _BlendMode___init__impl__q6jalh(1);
    this.p41_1 = _BlendMode___init__impl__q6jalh(2);
    this.q41_1 = _BlendMode___init__impl__q6jalh(3);
    this.r41_1 = _BlendMode___init__impl__q6jalh(4);
    this.s41_1 = _BlendMode___init__impl__q6jalh(5);
    this.t41_1 = _BlendMode___init__impl__q6jalh(6);
    this.u41_1 = _BlendMode___init__impl__q6jalh(7);
    this.v41_1 = _BlendMode___init__impl__q6jalh(8);
    this.w41_1 = _BlendMode___init__impl__q6jalh(9);
    this.x41_1 = _BlendMode___init__impl__q6jalh(10);
    this.y41_1 = _BlendMode___init__impl__q6jalh(11);
    this.z41_1 = _BlendMode___init__impl__q6jalh(12);
    this.a42_1 = _BlendMode___init__impl__q6jalh(13);
    this.b42_1 = _BlendMode___init__impl__q6jalh(14);
    this.c42_1 = _BlendMode___init__impl__q6jalh(15);
    this.d42_1 = _BlendMode___init__impl__q6jalh(16);
    this.e42_1 = _BlendMode___init__impl__q6jalh(17);
    this.f42_1 = _BlendMode___init__impl__q6jalh(18);
    this.g42_1 = _BlendMode___init__impl__q6jalh(19);
    this.h42_1 = _BlendMode___init__impl__q6jalh(20);
    this.i42_1 = _BlendMode___init__impl__q6jalh(21);
    this.j42_1 = _BlendMode___init__impl__q6jalh(22);
    this.k42_1 = _BlendMode___init__impl__q6jalh(23);
    this.l42_1 = _BlendMode___init__impl__q6jalh(24);
    this.m42_1 = _BlendMode___init__impl__q6jalh(25);
    this.n42_1 = _BlendMode___init__impl__q6jalh(26);
    this.o42_1 = _BlendMode___init__impl__q6jalh(27);
    this.p42_1 = _BlendMode___init__impl__q6jalh(28);
  }
  var Companion_instance_1;
  function Companion_getInstance_9() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function BlendMode__toString_impl_uuibkd($this) {
    return $this === Companion_getInstance_9().n41_1 ? 'Clear' : $this === Companion_getInstance_9().o41_1 ? 'Src' : $this === Companion_getInstance_9().p41_1 ? 'Dst' : $this === Companion_getInstance_9().q41_1 ? 'SrcOver' : $this === Companion_getInstance_9().r41_1 ? 'DstOver' : $this === Companion_getInstance_9().s41_1 ? 'SrcIn' : $this === Companion_getInstance_9().t41_1 ? 'DstIn' : $this === Companion_getInstance_9().u41_1 ? 'SrcOut' : $this === Companion_getInstance_9().v41_1 ? 'DstOut' : $this === Companion_getInstance_9().w41_1 ? 'SrcAtop' : $this === Companion_getInstance_9().x41_1 ? 'DstAtop' : $this === Companion_getInstance_9().y41_1 ? 'Xor' : $this === Companion_getInstance_9().z41_1 ? 'Plus' : $this === Companion_getInstance_9().a42_1 ? 'Modulate' : $this === Companion_getInstance_9().b42_1 ? 'Screen' : $this === Companion_getInstance_9().c42_1 ? 'Overlay' : $this === Companion_getInstance_9().d42_1 ? 'Darken' : $this === Companion_getInstance_9().e42_1 ? 'Lighten' : $this === Companion_getInstance_9().f42_1 ? 'ColorDodge' : $this === Companion_getInstance_9().g42_1 ? 'ColorBurn' : $this === Companion_getInstance_9().h42_1 ? 'HardLight' : $this === Companion_getInstance_9().i42_1 ? 'Softlight' : $this === Companion_getInstance_9().j42_1 ? 'Difference' : $this === Companion_getInstance_9().k42_1 ? 'Exclusion' : $this === Companion_getInstance_9().l42_1 ? 'Multiply' : $this === Companion_getInstance_9().m42_1 ? 'Hue' : $this === Companion_getInstance_9().n42_1 ? 'Saturation' : $this === Companion_getInstance_9().o42_1 ? 'Color' : $this === Companion_getInstance_9().p42_1 ? 'Luminosity' : 'Unknown';
  }
  function BlendMode__hashCode_impl_93ceri($this) {
    return $this;
  }
  function BlendMode__equals_impl_1tm25i($this, other) {
    if (!(other instanceof BlendMode))
      return false;
    if (!($this === (other instanceof BlendMode ? other.q42_1 : THROW_CCE())))
      return false;
    return true;
  }
  function BlendMode(value) {
    Companion_getInstance_9();
    this.q42_1 = value;
  }
  protoOf(BlendMode).toString = function () {
    return BlendMode__toString_impl_uuibkd(this.q42_1);
  };
  protoOf(BlendMode).hashCode = function () {
    return BlendMode__hashCode_impl_93ceri(this.q42_1);
  };
  protoOf(BlendMode).equals = function (other) {
    return BlendMode__equals_impl_1tm25i(this.q42_1, other);
  };
  function Brush() {
  }
  function ShaderBrush() {
  }
  function SolidColor() {
  }
  function Canvas() {
  }
  function Canvas_0(image) {
    return ActualCanvas(image);
  }
  function _ClipOp___init__impl__pqwwy8(value) {
    return value;
  }
  function Companion_0() {
    Companion_instance_2 = this;
    this.c43_1 = _ClipOp___init__impl__pqwwy8(0);
    this.d43_1 = _ClipOp___init__impl__pqwwy8(1);
  }
  var Companion_instance_2;
  function Companion_getInstance_10() {
    if (Companion_instance_2 == null)
      new Companion_0();
    return Companion_instance_2;
  }
  function ClipOp__toString_impl_vwrlao($this) {
    return $this === Companion_getInstance_10().c43_1 ? 'Difference' : $this === Companion_getInstance_10().d43_1 ? 'Intersect' : 'Unknown';
  }
  function ClipOp__hashCode_impl_hd6jvl($this) {
    return $this;
  }
  function ClipOp__equals_impl_g5ajel($this, other) {
    if (!(other instanceof ClipOp))
      return false;
    if (!($this === (other instanceof ClipOp ? other.n43_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ClipOp(value) {
    Companion_getInstance_10();
    this.n43_1 = value;
  }
  protoOf(ClipOp).toString = function () {
    return ClipOp__toString_impl_vwrlao(this.n43_1);
  };
  protoOf(ClipOp).hashCode = function () {
    return ClipOp__hashCode_impl_hd6jvl(this.n43_1);
  };
  protoOf(ClipOp).equals = function (other) {
    return ClipOp__equals_impl_g5ajel(this.n43_1, other);
  };
  function _Color___init__impl__r6cqi2(value) {
    return value;
  }
  function _Color___get_value__impl__1pls5m($this) {
    return $this;
  }
  function _Color___get_colorSpace__impl__jqqozk($this) {
    var tmp3 = ColorSpaces_getInstance();
    var tmp0 = _Color___get_value__impl__1pls5m($this);
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    // Inline function 'kotlin.ULong.toInt' call
    var this_0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0).k3(_ULong___get_data__impl__fggpzb(other)));
    // Inline function 'androidx.compose.ui.graphics.colorspace.ColorSpaces.getColorSpace' call
    var id = _ULong___get_data__impl__fggpzb(this_0).f1();
    return tmp3.k44_1[id];
  }
  function Color__convert_impl_so5m8t($this, colorSpace) {
    var connector = connect(_Color___get_colorSpace__impl__jqqozk($this), colorSpace);
    return connector.r44($this);
  }
  function _Color___get_red__impl__cwrsk6($this) {
    var tmp;
    var tmp0 = _Color___get_value__impl__1pls5m($this);
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0).k3(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.shr' call
      var this_0 = _Color___get_value__impl__1pls5m($this);
      var tmp4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).j3(48));
      // Inline function 'kotlin.ULong.and' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toFloat' call
      var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).k3(_ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ulongToFloat' call
      var value = _ULong___get_data__impl__fggpzb(this_1);
      tmp = ulongToDouble(value) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.shr' call
      var this_2 = _Color___get_value__impl__1pls5m($this);
      var tmp9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).j3(48));
      // Inline function 'kotlin.ULong.and' call
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      // Inline function 'kotlin.ULong.toShort' call
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp9).k3(_ULong___get_data__impl__fggpzb(other_1)));
      var tmp12 = _ULong___get_data__impl__fggpzb(this_3).n3();
      var tmp$ret$10;
      $l$block: {
        // Inline function 'androidx.compose.ui.graphics.halfToFloat' call
        var bits = tmp12 & 65535;
        var s = bits & access$_get_Fp16SignMask_$tFloat16Kt_xlkwbd();
        var e = (bits >>> access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | 0) & access$_get_Fp16ExponentMask_$tFloat16Kt_ptjxk7();
        var m = bits & access$_get_Fp16SignificandMask_$tFloat16Kt_mubks7();
        var outE = 0;
        var outM = 0;
        if (e === 0) {
          if (!(m === 0)) {
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits_0 = access$_get_Fp32DenormalMagic_$tFloat16Kt_s7dbyd() + m | 0;
            var o = floatFromBits(bits_0);
            o = o - access$_get_Fp32DenormalFloat_$tFloat16Kt_xjne9g();
            tmp$ret$10 = s === 0 ? o : -o;
            break $l$block;
          }
        } else {
          outM = m << 13;
          if (e === 31) {
            outE = 255;
            if (!(outM === 0)) {
              outM = outM | access$_get_Fp32QNaNMask_$tFloat16Kt_di6mcu();
            }
          } else {
            outE = (e - access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() | 0) + access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() | 0;
          }
        }
        var out = s << 16 | outE << access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() | outM;
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        tmp$ret$10 = floatFromBits(out);
      }
      tmp = tmp$ret$10;
    }
    return tmp;
  }
  function _Color___get_green__impl__bta9rs($this) {
    var tmp;
    var tmp0 = _Color___get_value__impl__1pls5m($this);
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0).k3(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.shr' call
      var this_0 = _Color___get_value__impl__1pls5m($this);
      var tmp4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).j3(40));
      // Inline function 'kotlin.ULong.and' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toFloat' call
      var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).k3(_ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ulongToFloat' call
      var value = _ULong___get_data__impl__fggpzb(this_1);
      tmp = ulongToDouble(value) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.shr' call
      var this_2 = _Color___get_value__impl__1pls5m($this);
      var tmp9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).j3(32));
      // Inline function 'kotlin.ULong.and' call
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      // Inline function 'kotlin.ULong.toShort' call
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp9).k3(_ULong___get_data__impl__fggpzb(other_1)));
      var tmp12 = _ULong___get_data__impl__fggpzb(this_3).n3();
      var tmp$ret$10;
      $l$block: {
        // Inline function 'androidx.compose.ui.graphics.halfToFloat' call
        var bits = tmp12 & 65535;
        var s = bits & access$_get_Fp16SignMask_$tFloat16Kt_xlkwbd();
        var e = (bits >>> access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | 0) & access$_get_Fp16ExponentMask_$tFloat16Kt_ptjxk7();
        var m = bits & access$_get_Fp16SignificandMask_$tFloat16Kt_mubks7();
        var outE = 0;
        var outM = 0;
        if (e === 0) {
          if (!(m === 0)) {
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits_0 = access$_get_Fp32DenormalMagic_$tFloat16Kt_s7dbyd() + m | 0;
            var o = floatFromBits(bits_0);
            o = o - access$_get_Fp32DenormalFloat_$tFloat16Kt_xjne9g();
            tmp$ret$10 = s === 0 ? o : -o;
            break $l$block;
          }
        } else {
          outM = m << 13;
          if (e === 31) {
            outE = 255;
            if (!(outM === 0)) {
              outM = outM | access$_get_Fp32QNaNMask_$tFloat16Kt_di6mcu();
            }
          } else {
            outE = (e - access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() | 0) + access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() | 0;
          }
        }
        var out = s << 16 | outE << access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() | outM;
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        tmp$ret$10 = floatFromBits(out);
      }
      tmp = tmp$ret$10;
    }
    return tmp;
  }
  function _Color___get_blue__impl__xwez13($this) {
    var tmp;
    var tmp0 = _Color___get_value__impl__1pls5m($this);
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0).k3(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.shr' call
      var this_0 = _Color___get_value__impl__1pls5m($this);
      var tmp4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).j3(32));
      // Inline function 'kotlin.ULong.and' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toFloat' call
      var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).k3(_ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ulongToFloat' call
      var value = _ULong___get_data__impl__fggpzb(this_1);
      tmp = ulongToDouble(value) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.shr' call
      var this_2 = _Color___get_value__impl__1pls5m($this);
      var tmp9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).j3(16));
      // Inline function 'kotlin.ULong.and' call
      var other_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
      // Inline function 'kotlin.ULong.toShort' call
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp9).k3(_ULong___get_data__impl__fggpzb(other_1)));
      var tmp12 = _ULong___get_data__impl__fggpzb(this_3).n3();
      var tmp$ret$10;
      $l$block: {
        // Inline function 'androidx.compose.ui.graphics.halfToFloat' call
        var bits = tmp12 & 65535;
        var s = bits & access$_get_Fp16SignMask_$tFloat16Kt_xlkwbd();
        var e = (bits >>> access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | 0) & access$_get_Fp16ExponentMask_$tFloat16Kt_ptjxk7();
        var m = bits & access$_get_Fp16SignificandMask_$tFloat16Kt_mubks7();
        var outE = 0;
        var outM = 0;
        if (e === 0) {
          if (!(m === 0)) {
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            // Inline function 'kotlin.fromBits' call
            var bits_0 = access$_get_Fp32DenormalMagic_$tFloat16Kt_s7dbyd() + m | 0;
            var o = floatFromBits(bits_0);
            o = o - access$_get_Fp32DenormalFloat_$tFloat16Kt_xjne9g();
            tmp$ret$10 = s === 0 ? o : -o;
            break $l$block;
          }
        } else {
          outM = m << 13;
          if (e === 31) {
            outE = 255;
            if (!(outM === 0)) {
              outM = outM | access$_get_Fp32QNaNMask_$tFloat16Kt_di6mcu();
            }
          } else {
            outE = (e - access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() | 0) + access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() | 0;
          }
        }
        var out = s << 16 | outE << access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() | outM;
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        tmp$ret$10 = floatFromBits(out);
      }
      tmp = tmp$ret$10;
    }
    return tmp;
  }
  function _Color___get_alpha__impl__wcfyv1($this) {
    var tmp;
    var tmp0 = _Color___get_value__impl__1pls5m($this);
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(63, 0));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp0).k3(_ULong___get_data__impl__fggpzb(other)));
    if (equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.shr' call
      var this_0 = _Color___get_value__impl__1pls5m($this);
      var tmp4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).j3(56));
      // Inline function 'kotlin.ULong.and' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(255, 0));
      // Inline function 'kotlin.ULong.toFloat' call
      var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp4).k3(_ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ulongToFloat' call
      var value = _ULong___get_data__impl__fggpzb(this_1);
      tmp = ulongToDouble(value) / 255.0;
    } else {
      // Inline function 'kotlin.ULong.shr' call
      var this_2 = _Color___get_value__impl__1pls5m($this);
      var tmp9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).j3(6));
      // Inline function 'kotlin.ULong.and' call
      var other_1 = _ULong___init__impl__c78o9k(new Long(1023, 0));
      // Inline function 'kotlin.ULong.toFloat' call
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(tmp9).k3(_ULong___get_data__impl__fggpzb(other_1)));
      // Inline function 'kotlin.ulongToFloat' call
      var value_0 = _ULong___get_data__impl__fggpzb(this_3);
      tmp = ulongToDouble(value_0) / 1023.0;
    }
    return tmp;
  }
  function Color__copy_impl_qlvcl1($this, alpha, red, green, blue) {
    return Color_0(red, green, blue, alpha, _Color___get_colorSpace__impl__jqqozk($this));
  }
  function Color__copy$default_impl_ectz3s($this, alpha, red, green, blue, $super) {
    alpha = alpha === VOID ? _Color___get_alpha__impl__wcfyv1($this) : alpha;
    red = red === VOID ? _Color___get_red__impl__cwrsk6($this) : red;
    green = green === VOID ? _Color___get_green__impl__bta9rs($this) : green;
    blue = blue === VOID ? _Color___get_blue__impl__xwez13($this) : blue;
    var tmp;
    if ($super === VOID) {
      tmp = Color__copy_impl_qlvcl1($this, alpha, red, green, blue);
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Color(tmp_0)).t44.call(new Color($this), alpha, red, green, blue).s44_1;
    }
    return tmp;
  }
  function Color__toString_impl_hpzmaq($this) {
    return 'Color(' + _Color___get_red__impl__cwrsk6($this) + ', ' + _Color___get_green__impl__bta9rs($this) + ', ' + _Color___get_blue__impl__xwez13($this) + ', ' + _Color___get_alpha__impl__wcfyv1($this) + ', ' + _Color___get_colorSpace__impl__jqqozk($this).u44_1 + ')';
  }
  function Companion_1() {
    Companion_instance_3 = this;
    this.x44_1 = Color_1(new Long(-16777216, 0));
    this.y44_1 = Color_1(new Long(-12303292, 0));
    this.z44_1 = Color_1(new Long(-7829368, 0));
    this.a45_1 = Color_1(new Long(-3355444, 0));
    this.b45_1 = Color_1(new Long(-1, 0));
    this.c45_1 = Color_1(new Long(-65536, 0));
    this.d45_1 = Color_1(new Long(-16711936, 0));
    this.e45_1 = Color_1(new Long(-16776961, 0));
    this.f45_1 = Color_1(new Long(-256, 0));
    this.g45_1 = Color_1(new Long(-16711681, 0));
    this.h45_1 = Color_1(new Long(-65281, 0));
    this.i45_1 = Color_2(0);
    this.j45_1 = Color_0(0.0, 0.0, 0.0, 0.0, ColorSpaces_getInstance().i44_1);
  }
  var Companion_instance_3;
  function Companion_getInstance_11() {
    if (Companion_instance_3 == null)
      new Companion_1();
    return Companion_instance_3;
  }
  function Color__hashCode_impl_vjyivj($this) {
    return ULong__hashCode_impl_6hv2lb($this);
  }
  function Color__equals_impl_k06uqz($this, other) {
    if (!(other instanceof Color))
      return false;
    var tmp0_other_with_cast = other instanceof Color ? other.s44_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Color(value) {
    Companion_getInstance_11();
    this.s44_1 = value;
  }
  protoOf(Color).toString = function () {
    return Color__toString_impl_hpzmaq(this.s44_1);
  };
  protoOf(Color).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.s44_1);
  };
  protoOf(Color).equals = function (other) {
    return Color__equals_impl_k06uqz(this.s44_1, other);
  };
  function Color_0(red, green, blue, alpha, colorSpace) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().s43_1 : colorSpace;
    if (colorSpace.k45()) {
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_0 = alpha < 0.0 ? 0.0 : alpha;
      var tmp$ret$2 = this_0 > 1.0 ? 1.0 : this_0;
      var tmp = numberToInt(tmp$ret$2 * 255.0 + 0.5) << 24;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_1 = red < 0.0 ? 0.0 : red;
      var tmp$ret$5 = this_1 > 1.0 ? 1.0 : this_1;
      var tmp_0 = tmp | numberToInt(tmp$ret$5 * 255.0 + 0.5) << 16;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_2 = green < 0.0 ? 0.0 : green;
      var tmp$ret$8 = this_2 > 1.0 ? 1.0 : this_2;
      var tmp_1 = tmp_0 | numberToInt(tmp$ret$8 * 255.0 + 0.5) << 8;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_3 = blue < 0.0 ? 0.0 : blue;
      var tmp$ret$11 = this_3 > 1.0 ? 1.0 : this_3;
      var argb = tmp_1 | numberToInt(tmp$ret$11 * 255.0 + 0.5);
      // Inline function 'kotlin.toULong' call
      // Inline function 'kotlin.ULong.shl' call
      var this_4 = _ULong___init__impl__c78o9k(toLong(argb));
      var tmp$ret$13 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).h3(32));
      return _Color___init__impl__r6cqi2(tmp$ret$13);
    }
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(colorSpace.l45() === 3)) {
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      var tmp$ret$14 = 'Color only works with ColorSpaces with 3 components';
      throwIllegalArgumentException(tmp$ret$14);
    }
    var id = colorSpace.w44_1;
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(id === -1)) {
      // Inline function 'androidx.compose.ui.graphics.Color.<anonymous>' call
      var tmp$ret$15 = 'Unknown color space, please use a color space in ColorSpaces';
      throwIllegalArgumentException(tmp$ret$15);
    }
    var tmp18 = colorSpace.m45(0);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = colorSpace.n45(0);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_5 = red < tmp18 ? tmp18 : red;
    var tmp20 = this_5 > maximumValue ? maximumValue : this_5;
    var tmp$ret$19;
    $l$block: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits = toRawBits(tmp20);
      var s = bits >>> access$_get_Fp32SignShift_$tFloat16Kt_2izwpn() | 0;
      var e = (bits >>> access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() | 0) & access$_get_Fp32ExponentMask_$tFloat16Kt_tfz3hp();
      var m = bits & access$_get_Fp32SignificandMask_$tFloat16Kt_gxn4i7();
      var outE = 0;
      var outM = 0;
      if (e === 255) {
        outE = 31;
        outM = !(m === 0) ? 512 : 0;
      } else {
        e = (e - access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() | 0) + access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() | 0;
        if (e >= 31) {
          outE = 49;
        } else if (e <= 0) {
          if (e >= -10) {
            m = (m | 8388608) >> (1 - e | 0);
            if (!((m & 4096) === 0))
              m = m + 8192 | 0;
            outM = m >> 13;
          }
        } else {
          outE = e;
          outM = m >> 13;
          if (!((m & 4096) === 0)) {
            var out = outE << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM;
            out = out + 1 | 0;
            tmp$ret$19 = toShort(out | s << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n());
            break $l$block;
          }
        }
      }
      tmp$ret$19 = toShort(s << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n() | outE << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM);
    }
    var r = tmp$ret$19;
    var tmp22 = colorSpace.m45(1);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue_0 = colorSpace.n45(1);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_6 = green < tmp22 ? tmp22 : green;
    var tmp24 = this_6 > maximumValue_0 ? maximumValue_0 : this_6;
    var tmp$ret$23;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits_0 = toRawBits(tmp24);
      var s_0 = bits_0 >>> access$_get_Fp32SignShift_$tFloat16Kt_2izwpn() | 0;
      var e_0 = (bits_0 >>> access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() | 0) & access$_get_Fp32ExponentMask_$tFloat16Kt_tfz3hp();
      var m_0 = bits_0 & access$_get_Fp32SignificandMask_$tFloat16Kt_gxn4i7();
      var outE_0 = 0;
      var outM_0 = 0;
      if (e_0 === 255) {
        outE_0 = 31;
        outM_0 = !(m_0 === 0) ? 512 : 0;
      } else {
        e_0 = (e_0 - access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() | 0) + access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() | 0;
        if (e_0 >= 31) {
          outE_0 = 49;
        } else if (e_0 <= 0) {
          if (e_0 >= -10) {
            m_0 = (m_0 | 8388608) >> (1 - e_0 | 0);
            if (!((m_0 & 4096) === 0))
              m_0 = m_0 + 8192 | 0;
            outM_0 = m_0 >> 13;
          }
        } else {
          outE_0 = e_0;
          outM_0 = m_0 >> 13;
          if (!((m_0 & 4096) === 0)) {
            var out_0 = outE_0 << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM_0;
            out_0 = out_0 + 1 | 0;
            tmp$ret$23 = toShort(out_0 | s_0 << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n());
            break $l$block_0;
          }
        }
      }
      tmp$ret$23 = toShort(s_0 << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n() | outE_0 << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM_0);
    }
    var g = tmp$ret$23;
    var tmp26 = colorSpace.m45(2);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue_1 = colorSpace.n45(2);
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_7 = blue < tmp26 ? tmp26 : blue;
    var tmp28 = this_7 > maximumValue_1 ? maximumValue_1 : this_7;
    var tmp$ret$27;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits_1 = toRawBits(tmp28);
      var s_1 = bits_1 >>> access$_get_Fp32SignShift_$tFloat16Kt_2izwpn() | 0;
      var e_1 = (bits_1 >>> access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() | 0) & access$_get_Fp32ExponentMask_$tFloat16Kt_tfz3hp();
      var m_1 = bits_1 & access$_get_Fp32SignificandMask_$tFloat16Kt_gxn4i7();
      var outE_1 = 0;
      var outM_1 = 0;
      if (e_1 === 255) {
        outE_1 = 31;
        outM_1 = !(m_1 === 0) ? 512 : 0;
      } else {
        e_1 = (e_1 - access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() | 0) + access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() | 0;
        if (e_1 >= 31) {
          outE_1 = 49;
        } else if (e_1 <= 0) {
          if (e_1 >= -10) {
            m_1 = (m_1 | 8388608) >> (1 - e_1 | 0);
            if (!((m_1 & 4096) === 0))
              m_1 = m_1 + 8192 | 0;
            outM_1 = m_1 >> 13;
          }
        } else {
          outE_1 = e_1;
          outM_1 = m_1 >> 13;
          if (!((m_1 & 4096) === 0)) {
            var out_1 = outE_1 << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM_1;
            out_1 = out_1 + 1 | 0;
            tmp$ret$27 = toShort(out_1 | s_1 << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n());
            break $l$block_1;
          }
        }
      }
      tmp$ret$27 = toShort(s_1 << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n() | outE_1 << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM_1);
    }
    var b = tmp$ret$27;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_8 = alpha < 0.0 ? 0.0 : alpha;
    var tmp$ret$30 = this_8 > 1.0 ? 1.0 : this_8;
    var a = numberToInt(tmp$ret$30 * 1023.0 + 0.5);
    // Inline function 'kotlin.toULong' call
    var this_9 = toLong(r).k3(new Long(65535, 0)).h3(48).l3(toLong(g).k3(new Long(65535, 0)).h3(32)).l3(toLong(b).k3(new Long(65535, 0)).h3(16)).l3(toLong(a).k3(new Long(1023, 0)).h3(6)).l3(toLong(id).k3(new Long(63, 0)));
    var tmp$ret$31 = _ULong___init__impl__c78o9k(this_9);
    return _Color___init__impl__r6cqi2(tmp$ret$31);
  }
  function Color_1(color) {
    // Inline function 'kotlin.toULong' call
    var this_0 = color.h3(32);
    var tmp$ret$0 = _ULong___init__impl__c78o9k(this_0);
    return _Color___init__impl__r6cqi2(tmp$ret$0);
  }
  function Color_2(color) {
    // Inline function 'kotlin.toULong' call
    // Inline function 'kotlin.ULong.shl' call
    var this_0 = _ULong___init__impl__c78o9k(toLong(color));
    var tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).h3(32));
    return _Color___init__impl__r6cqi2(tmp$ret$1);
  }
  function toArgb(_this__u8e3s4) {
    // Inline function 'kotlin.ULong.shr' call
    var this_0 = _Color___get_value__impl__1pls5m(Color__convert_impl_so5m8t(_this__u8e3s4, ColorSpaces_getInstance().s43_1));
    // Inline function 'kotlin.ULong.toInt' call
    var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).j3(32));
    return _ULong___get_data__impl__fggpzb(this_1).f1();
  }
  function luminance(_this__u8e3s4) {
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.graphics.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!equals(colorSpace.v44_1, Companion_getInstance_23().o45_1)) {
      // Inline function 'androidx.compose.ui.graphics.luminance.<anonymous>' call
      var tmp$ret$0 = 'The specified color must be encoded in an RGB color space. ' + ('The supplied color space is ' + ColorModel__toString_impl_msukd7(colorSpace.v44_1));
      throwIllegalArgumentException(tmp$ret$0);
    }
    var eotf = (colorSpace instanceof Rgb ? colorSpace : THROW_CCE()).h46_1;
    var r = eotf.k46(_Color___get_red__impl__cwrsk6(_this__u8e3s4));
    var g = eotf.k46(_Color___get_green__impl__bta9rs(_this__u8e3s4));
    var b = eotf.k46(_Color___get_blue__impl__xwez13(_this__u8e3s4));
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = this_0 < 0.0 ? 0.0 : this_0;
    return this_1 > 1.0 ? 1.0 : this_1;
  }
  function ColorProducer() {
  }
  function Color_3(red, green, blue, alpha) {
    alpha = alpha === VOID ? 255 : alpha;
    var color = (alpha & 255) << 24 | (red & 255) << 16 | (green & 255) << 8 | blue & 255;
    return Color_2(color);
  }
  function UncheckedColor(red, green, blue, alpha, colorSpace) {
    alpha = alpha === VOID ? 1.0 : alpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().s43_1 : colorSpace;
    if (colorSpace.k45()) {
      var argb = numberToInt(alpha * 255.0 + 0.5) << 24 | numberToInt(red * 255.0 + 0.5) << 16 | numberToInt(green * 255.0 + 0.5) << 8 | numberToInt(blue * 255.0 + 0.5);
      // Inline function 'kotlin.toULong' call
      // Inline function 'kotlin.ULong.shl' call
      var this_0 = _ULong___init__impl__c78o9k(toLong(argb));
      var tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).h3(32));
      return _Color___init__impl__r6cqi2(tmp$ret$1);
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits = toRawBits(red);
      var s = bits >>> access$_get_Fp32SignShift_$tFloat16Kt_2izwpn() | 0;
      var e = (bits >>> access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() | 0) & access$_get_Fp32ExponentMask_$tFloat16Kt_tfz3hp();
      var m = bits & access$_get_Fp32SignificandMask_$tFloat16Kt_gxn4i7();
      var outE = 0;
      var outM = 0;
      if (e === 255) {
        outE = 31;
        outM = !(m === 0) ? 512 : 0;
      } else {
        e = (e - access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() | 0) + access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() | 0;
        if (e >= 31) {
          outE = 49;
        } else if (e <= 0) {
          if (e >= -10) {
            m = (m | 8388608) >> (1 - e | 0);
            if (!((m & 4096) === 0))
              m = m + 8192 | 0;
            outM = m >> 13;
          }
        } else {
          outE = e;
          outM = m >> 13;
          if (!((m & 4096) === 0)) {
            var out = outE << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM;
            out = out + 1 | 0;
            tmp$ret$2 = toShort(out | s << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n());
            break $l$block;
          }
        }
      }
      tmp$ret$2 = toShort(s << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n() | outE << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM);
    }
    var r = tmp$ret$2;
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits_0 = toRawBits(green);
      var s_0 = bits_0 >>> access$_get_Fp32SignShift_$tFloat16Kt_2izwpn() | 0;
      var e_0 = (bits_0 >>> access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() | 0) & access$_get_Fp32ExponentMask_$tFloat16Kt_tfz3hp();
      var m_0 = bits_0 & access$_get_Fp32SignificandMask_$tFloat16Kt_gxn4i7();
      var outE_0 = 0;
      var outM_0 = 0;
      if (e_0 === 255) {
        outE_0 = 31;
        outM_0 = !(m_0 === 0) ? 512 : 0;
      } else {
        e_0 = (e_0 - access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() | 0) + access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() | 0;
        if (e_0 >= 31) {
          outE_0 = 49;
        } else if (e_0 <= 0) {
          if (e_0 >= -10) {
            m_0 = (m_0 | 8388608) >> (1 - e_0 | 0);
            if (!((m_0 & 4096) === 0))
              m_0 = m_0 + 8192 | 0;
            outM_0 = m_0 >> 13;
          }
        } else {
          outE_0 = e_0;
          outM_0 = m_0 >> 13;
          if (!((m_0 & 4096) === 0)) {
            var out_0 = outE_0 << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM_0;
            out_0 = out_0 + 1 | 0;
            tmp$ret$3 = toShort(out_0 | s_0 << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n());
            break $l$block_0;
          }
        }
      }
      tmp$ret$3 = toShort(s_0 << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n() | outE_0 << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM_0);
    }
    var g = tmp$ret$3;
    var tmp$ret$4;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits_1 = toRawBits(blue);
      var s_1 = bits_1 >>> access$_get_Fp32SignShift_$tFloat16Kt_2izwpn() | 0;
      var e_1 = (bits_1 >>> access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() | 0) & access$_get_Fp32ExponentMask_$tFloat16Kt_tfz3hp();
      var m_1 = bits_1 & access$_get_Fp32SignificandMask_$tFloat16Kt_gxn4i7();
      var outE_1 = 0;
      var outM_1 = 0;
      if (e_1 === 255) {
        outE_1 = 31;
        outM_1 = !(m_1 === 0) ? 512 : 0;
      } else {
        e_1 = (e_1 - access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() | 0) + access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() | 0;
        if (e_1 >= 31) {
          outE_1 = 49;
        } else if (e_1 <= 0) {
          if (e_1 >= -10) {
            m_1 = (m_1 | 8388608) >> (1 - e_1 | 0);
            if (!((m_1 & 4096) === 0))
              m_1 = m_1 + 8192 | 0;
            outM_1 = m_1 >> 13;
          }
        } else {
          outE_1 = e_1;
          outM_1 = m_1 >> 13;
          if (!((m_1 & 4096) === 0)) {
            var out_1 = outE_1 << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM_1;
            out_1 = out_1 + 1 | 0;
            tmp$ret$4 = toShort(out_1 | s_1 << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n());
            break $l$block_1;
          }
        }
      }
      tmp$ret$4 = toShort(s_1 << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n() | outE_1 << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM_1);
    }
    var b = tmp$ret$4;
    // Inline function 'kotlin.math.min' call
    // Inline function 'kotlin.math.max' call
    var b_0 = Math.min(alpha, 1.0);
    var tmp$ret$6 = Math.max(0.0, b_0);
    var a = numberToInt(tmp$ret$6 * 1023.0 + 0.5);
    var id = colorSpace.w44_1;
    // Inline function 'kotlin.toULong' call
    var this_1 = toLong(r).k3(new Long(65535, 0)).h3(48).l3(toLong(g).k3(new Long(65535, 0)).h3(32)).l3(toLong(b).k3(new Long(65535, 0)).h3(16)).l3(toLong(a).k3(new Long(1023, 0)).h3(6)).l3(toLong(id).k3(new Long(63, 0)));
    var tmp$ret$7 = _ULong___init__impl__c78o9k(this_1);
    return _Color___init__impl__r6cqi2(tmp$ret$7);
  }
  function compositeOver(_this__u8e3s4, background) {
    var fg = Color__convert_impl_so5m8t(_this__u8e3s4, _Color___get_colorSpace__impl__jqqozk(background));
    var bgA = _Color___get_alpha__impl__wcfyv1(background);
    var fgA = _Color___get_alpha__impl__wcfyv1(fg);
    var a = fgA + bgA * (1.0 - fgA);
    var tmp0 = _Color___get_red__impl__cwrsk6(fg);
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var bgC = _Color___get_red__impl__cwrsk6(background);
    var r = a === 0.0 ? 0.0 : (tmp0 * fgA + bgC * bgA * (1.0 - fgA)) / a;
    var tmp5 = _Color___get_green__impl__bta9rs(fg);
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var bgC_0 = _Color___get_green__impl__bta9rs(background);
    var g = a === 0.0 ? 0.0 : (tmp5 * fgA + bgC_0 * bgA * (1.0 - fgA)) / a;
    var tmp10 = _Color___get_blue__impl__xwez13(fg);
    // Inline function 'androidx.compose.ui.graphics.compositeComponent' call
    var bgC_1 = _Color___get_blue__impl__xwez13(background);
    var b = a === 0.0 ? 0.0 : (tmp10 * fgA + bgC_1 * bgA * (1.0 - fgA)) / a;
    return UncheckedColor(r, g, b, a, _Color___get_colorSpace__impl__jqqozk(background));
  }
  function Companion_2() {
  }
  protoOf(Companion_2).m46 = function (color, blendMode) {
    return BlendModeColorFilter_init_$Create$(color, blendMode);
  };
  protoOf(Companion_2).n46 = function (color, blendMode, $super) {
    blendMode = blendMode === VOID ? Companion_getInstance_9().s41_1 : blendMode;
    return $super === VOID ? this.m46(color, blendMode) : $super.m46.call(this, new Color(color), new BlendMode(blendMode));
  };
  var Companion_instance_4;
  function Companion_getInstance_12() {
    return Companion_instance_4;
  }
  function ColorFilter(nativeColorFilter) {
    this.o46_1 = nativeColorFilter;
  }
  function BlendModeColorFilter_init_$Init$(color, blendMode, $this) {
    BlendModeColorFilter.call($this, color, blendMode, actualTintColorFilter(color, blendMode));
    return $this;
  }
  function BlendModeColorFilter_init_$Create$(color, blendMode) {
    return BlendModeColorFilter_init_$Init$(color, blendMode, objectCreate(protoOf(BlendModeColorFilter)));
  }
  function BlendModeColorFilter(color, blendMode, nativeColorFilter) {
    ColorFilter.call(this, nativeColorFilter);
    this.q46_1 = color;
    this.r46_1 = blendMode;
  }
  protoOf(BlendModeColorFilter).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BlendModeColorFilter))
      return false;
    if (!equals(this.q46_1, other.q46_1))
      return false;
    if (!(this.r46_1 === other.r46_1))
      return false;
    return true;
  };
  protoOf(BlendModeColorFilter).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.q46_1);
    result = imul(31, result) + BlendMode__hashCode_impl_93ceri(this.r46_1) | 0;
    return result;
  };
  protoOf(BlendModeColorFilter).toString = function () {
    return 'BlendModeColorFilter(color=' + Color__toString_impl_hpzmaq(this.q46_1) + ', blendMode=' + BlendMode__toString_impl_uuibkd(this.r46_1) + ')';
  };
  function _FilterQuality___init__impl__nv51aq(value) {
    return value;
  }
  function Companion_3() {
    Companion_instance_5 = this;
    this.s46_1 = _FilterQuality___init__impl__nv51aq(0);
    this.t46_1 = _FilterQuality___init__impl__nv51aq(1);
    this.u46_1 = _FilterQuality___init__impl__nv51aq(2);
    this.v46_1 = _FilterQuality___init__impl__nv51aq(3);
  }
  var Companion_instance_5;
  function Companion_getInstance_13() {
    if (Companion_instance_5 == null)
      new Companion_3();
    return Companion_instance_5;
  }
  var One;
  var NegativeOne;
  function get_Fp32DenormalFloat() {
    _init_properties_Float16_kt__eyzj8x();
    return Fp32DenormalFloat;
  }
  var Fp32DenormalFloat;
  function _Float16___init__impl__fckrew(halfValue) {
    return halfValue;
  }
  function _Float16___init__impl__fckrew_0(value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.graphics.floatToHalf' call
      var bits = toRawBits(value);
      var s = bits >>> access$_get_Fp32SignShift_$tFloat16Kt_2izwpn() | 0;
      var e = (bits >>> access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() | 0) & access$_get_Fp32ExponentMask_$tFloat16Kt_tfz3hp();
      var m = bits & access$_get_Fp32SignificandMask_$tFloat16Kt_gxn4i7();
      var outE = 0;
      var outM = 0;
      if (e === 255) {
        outE = 31;
        outM = !(m === 0) ? 512 : 0;
      } else {
        e = (e - access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() | 0) + access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() | 0;
        if (e >= 31) {
          outE = 49;
        } else if (e <= 0) {
          if (e >= -10) {
            m = (m | 8388608) >> (1 - e | 0);
            if (!((m & 4096) === 0))
              m = m + 8192 | 0;
            outM = m >> 13;
          }
        } else {
          outE = e;
          outM = m >> 13;
          if (!((m & 4096) === 0)) {
            var out = outE << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM;
            out = out + 1 | 0;
            tmp$ret$0 = toShort(out | s << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n());
            break $l$block;
          }
        }
      }
      tmp$ret$0 = toShort(s << access$_get_Fp16SignShift_$tFloat16Kt_ykij6n() | outE << access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() | outM);
    }
    return _Float16___init__impl__fckrew(tmp$ret$0);
  }
  function access$_get_Fp32DenormalFloat_$tFloat16Kt_xjne9g() {
    return get_Fp32DenormalFloat();
  }
  function access$_get_Fp32DenormalMagic_$tFloat16Kt_s7dbyd() {
    return 1056964608;
  }
  function access$_get_Fp16SignMask_$tFloat16Kt_xlkwbd() {
    return 32768;
  }
  function access$_get_Fp16ExponentBias_$tFloat16Kt_n1cnfq() {
    return 15;
  }
  function access$_get_Fp16ExponentMask_$tFloat16Kt_ptjxk7() {
    return 31;
  }
  function access$_get_Fp16ExponentShift_$tFloat16Kt_8f3rbn() {
    return 10;
  }
  function access$_get_Fp16SignificandMask_$tFloat16Kt_mubks7() {
    return 1023;
  }
  function access$_get_Fp16SignShift_$tFloat16Kt_ykij6n() {
    return 15;
  }
  function access$_get_Fp32SignShift_$tFloat16Kt_2izwpn() {
    return 31;
  }
  function access$_get_Fp32ExponentMask_$tFloat16Kt_tfz3hp() {
    return 255;
  }
  function access$_get_Fp32ExponentShift_$tFloat16Kt_lc28s3() {
    return 23;
  }
  function access$_get_Fp32SignificandMask_$tFloat16Kt_gxn4i7() {
    return 8388607;
  }
  function access$_get_Fp32ExponentBias_$tFloat16Kt_jexhi8() {
    return 127;
  }
  function access$_get_Fp32QNaNMask_$tFloat16Kt_di6mcu() {
    return 4194304;
  }
  var properties_initialized_Float16_kt_xeo1ox;
  function _init_properties_Float16_kt__eyzj8x() {
    if (!properties_initialized_Float16_kt_xeo1ox) {
      properties_initialized_Float16_kt_xeo1ox = true;
      One = _Float16___init__impl__fckrew_0(1.0);
      NegativeOne = _Float16___init__impl__fckrew_0(-1.0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = 1056964608;
      Fp32DenormalFloat = floatFromBits(bits);
    }
  }
  function ImageBitmap(width, height, config, hasAlpha, colorSpace) {
    config = config === VOID ? Companion_getInstance_14().w46_1 : config;
    hasAlpha = hasAlpha === VOID ? true : hasAlpha;
    colorSpace = colorSpace === VOID ? ColorSpaces_getInstance().s43_1 : colorSpace;
    return ActualImageBitmap(width, height, config, hasAlpha, colorSpace);
  }
  function _ImageBitmapConfig___init__impl__wfx9yl(value) {
    return value;
  }
  function Companion_4() {
    Companion_instance_6 = this;
    this.w46_1 = _ImageBitmapConfig___init__impl__wfx9yl(0);
    this.x46_1 = _ImageBitmapConfig___init__impl__wfx9yl(1);
    this.y46_1 = _ImageBitmapConfig___init__impl__wfx9yl(2);
    this.z46_1 = _ImageBitmapConfig___init__impl__wfx9yl(3);
    this.a47_1 = _ImageBitmapConfig___init__impl__wfx9yl(4);
  }
  var Companion_instance_6;
  function Companion_getInstance_14() {
    if (Companion_instance_6 == null)
      new Companion_4();
    return Companion_instance_6;
  }
  function ImageBitmapConfig__toString_impl_dfv42d($this) {
    return $this === Companion_getInstance_14().w46_1 ? 'Argb8888' : $this === Companion_getInstance_14().x46_1 ? 'Alpha8' : $this === Companion_getInstance_14().y46_1 ? 'Rgb565' : $this === Companion_getInstance_14().z46_1 ? 'F16' : $this === Companion_getInstance_14().a47_1 ? 'Gpu' : 'Unknown';
  }
  function ImageBitmapConfig__hashCode_impl_8basqi($this) {
    return $this;
  }
  function ImageBitmapConfig__equals_impl_hqcsv2($this, other) {
    if (!(other instanceof ImageBitmapConfig))
      return false;
    if (!($this === (other instanceof ImageBitmapConfig ? other.b47_1 : THROW_CCE())))
      return false;
    return true;
  }
  function ImageBitmapConfig(value) {
    Companion_getInstance_14();
    this.b47_1 = value;
  }
  protoOf(ImageBitmapConfig).toString = function () {
    return ImageBitmapConfig__toString_impl_dfv42d(this.b47_1);
  };
  protoOf(ImageBitmapConfig).hashCode = function () {
    return ImageBitmapConfig__hashCode_impl_8basqi(this.b47_1);
  };
  protoOf(ImageBitmapConfig).equals = function (other) {
    return ImageBitmapConfig__equals_impl_hqcsv2(this.b47_1, other);
  };
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function _Matrix___init__impl__q3kp4w(values) {
    var tmp;
    if (values === VOID) {
      // Inline function 'kotlin.floatArrayOf' call
      tmp = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    } else {
      tmp = values;
    }
    values = tmp;
    return values;
  }
  function _Matrix___get_values__impl__fblr7b($this) {
    return $this;
  }
  function Matrix__map_impl_7meu7m($this, point) {
    var x = _Offset___get_x__impl__xvi35n(point);
    var y = _Offset___get_y__impl__8bzhra(point);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var z = tmp_0 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    var inverseZ = 1 / z;
    var pZ = isFinite(inverseZ) ? inverseZ : 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = tmp_1 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = pZ * (tmp_2 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0]);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = tmp_4 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp$ret$8 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    return Offset(tmp_3, pZ * (tmp_5 + tmp$ret$8));
  }
  function Matrix__map_impl_7meu7m_0($this, rect) {
    var p0 = Matrix__map_impl_7meu7m($this, Offset(rect.x3f_1, rect.y3f_1));
    var p1 = Matrix__map_impl_7meu7m($this, Offset(rect.x3f_1, rect.a3g_1));
    var p3 = Matrix__map_impl_7meu7m($this, Offset(rect.z3f_1, rect.y3f_1));
    var p4 = Matrix__map_impl_7meu7m($this, Offset(rect.z3f_1, rect.a3g_1));
    var tmp = rect;
    var tmp0 = _Offset___get_x__impl__xvi35n(p0);
    // Inline function 'kotlin.math.min' call
    var b = _Offset___get_x__impl__xvi35n(p1);
    var tmp4 = Math.min(tmp0, b);
    var tmp2 = _Offset___get_x__impl__xvi35n(p3);
    // Inline function 'kotlin.math.min' call
    var b_0 = _Offset___get_x__impl__xvi35n(p4);
    // Inline function 'kotlin.math.min' call
    var b_1 = Math.min(tmp2, b_0);
    tmp.x3f_1 = Math.min(tmp4, b_1);
    var tmp_0 = rect;
    var tmp6 = _Offset___get_y__impl__8bzhra(p0);
    // Inline function 'kotlin.math.min' call
    var b_2 = _Offset___get_y__impl__8bzhra(p1);
    var tmp10 = Math.min(tmp6, b_2);
    var tmp8 = _Offset___get_y__impl__8bzhra(p3);
    // Inline function 'kotlin.math.min' call
    var b_3 = _Offset___get_y__impl__8bzhra(p4);
    // Inline function 'kotlin.math.min' call
    var b_4 = Math.min(tmp8, b_3);
    tmp_0.y3f_1 = Math.min(tmp10, b_4);
    var tmp_1 = rect;
    var tmp12 = _Offset___get_x__impl__xvi35n(p0);
    // Inline function 'kotlin.math.max' call
    var b_5 = _Offset___get_x__impl__xvi35n(p1);
    var tmp16 = Math.max(tmp12, b_5);
    var tmp14 = _Offset___get_x__impl__xvi35n(p3);
    // Inline function 'kotlin.math.max' call
    var b_6 = _Offset___get_x__impl__xvi35n(p4);
    // Inline function 'kotlin.math.max' call
    var b_7 = Math.max(tmp14, b_6);
    tmp_1.z3f_1 = Math.max(tmp16, b_7);
    var tmp_2 = rect;
    var tmp18 = _Offset___get_y__impl__8bzhra(p0);
    // Inline function 'kotlin.math.max' call
    var b_8 = _Offset___get_y__impl__8bzhra(p1);
    var tmp22 = Math.max(tmp18, b_8);
    var tmp20 = _Offset___get_y__impl__8bzhra(p3);
    // Inline function 'kotlin.math.max' call
    var b_9 = _Offset___get_y__impl__8bzhra(p4);
    // Inline function 'kotlin.math.max' call
    var b_10 = Math.max(tmp20, b_9);
    tmp_2.a3g_1 = Math.max(tmp22, b_10);
  }
  function Matrix__timesAssign_impl_oas521($this, m) {
    var v00 = dot($this, 0, m, 0);
    var v01 = dot($this, 0, m, 1);
    var v02 = dot($this, 0, m, 2);
    var v03 = dot($this, 0, m, 3);
    var v10 = dot($this, 1, m, 0);
    var v11 = dot($this, 1, m, 1);
    var v12 = dot($this, 1, m, 2);
    var v13 = dot($this, 1, m, 3);
    var v20 = dot($this, 2, m, 0);
    var v21 = dot($this, 2, m, 1);
    var v22 = dot($this, 2, m, 2);
    var v23 = dot($this, 2, m, 3);
    var v30 = dot($this, 3, m, 0);
    var v31 = dot($this, 3, m, 1);
    var v32 = dot($this, 3, m, 2);
    var v33 = dot($this, 3, m, 3);
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] = v23;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v32;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0] = v33;
  }
  function Matrix__toString_impl_l0abk0($this) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_11 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_12 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_13 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp$ret$15 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    return trimIndent('\n            |' + tmp + ' ' + tmp_0 + ' ' + tmp_1 + ' ' + tmp_2 + '|\n            |' + tmp_3 + ' ' + tmp_4 + ' ' + tmp_5 + ' ' + tmp_6 + '|\n            |' + tmp_7 + ' ' + tmp_8 + ' ' + tmp_9 + ' ' + tmp_10 + '|\n            |' + tmp_11 + ' ' + tmp_12 + ' ' + tmp_13 + ' ' + tmp$ret$15 + '|\n        ');
  }
  function Matrix__reset_impl_4l49i7($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var c = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var r = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
            var v = c === r ? 1.0 : 0.0;
            _Matrix___get_values__impl__fblr7b($this)[imul(r, 4) + c | 0] = v;
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
  }
  function Matrix__rotateX_impl_3e5y7j($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var x = degrees * get_PI() / 180.0;
    var c = Math.cos(x);
    // Inline function 'kotlin.math.sin' call
    var x_0 = degrees * get_PI() / 180.0;
    var s = Math.sin(x_0);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    var v01 = a01 * c - a02 * s;
    var v02 = a01 * s + a02 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v11 = a11 * c - a12 * s;
    var v12 = a11 * s + a12 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a21 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a22 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    var v21 = a21 * c - a22 * s;
    var v22 = a21 * s + a22 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a31 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a32 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    var v31 = a31 * c - a32 * s;
    var v32 = a31 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v21;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = v31;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v32;
  }
  function Matrix__rotateY_impl_2x4btc($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var x = degrees * get_PI() / 180.0;
    var c = Math.cos(x);
    // Inline function 'kotlin.math.sin' call
    var x_0 = degrees * get_PI() / 180.0;
    var s = Math.sin(x_0);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    var v00 = a00 * c + a02 * s;
    var v02 = -a00 * s + a02 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v10 = a10 * c + a12 * s;
    var v12 = -a10 * s + a12 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a20 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a22 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0];
    var v20 = a20 * c + a22 * s;
    var v22 = -a20 * s + a22 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a30 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a32 = _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    var v30 = a30 * c + a32 * s;
    var v32 = -a30 * s + a32 * c;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v20;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v22;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = v30;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = v32;
  }
  function Matrix__rotateZ_impl_2g2pf5($this, degrees) {
    // Inline function 'kotlin.math.cos' call
    var x = degrees * get_PI() / 180.0;
    var c = Math.cos(x);
    // Inline function 'kotlin.math.sin' call
    var x_0 = degrees * get_PI() / 180.0;
    var s = Math.sin(x_0);
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a00 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a10 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0];
    var v00 = c * a00 + s * a10;
    var v10 = -s * a00 + c * a10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a01 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a11 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0];
    var v01 = c * a01 + s * a11;
    var v11 = -s * a01 + c * a11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a02 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a12 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0];
    var v02 = c * a02 + s * a12;
    var v12 = -s * a02 + c * a12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a03 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var a13 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0];
    var v03 = c * a03 + s * a13;
    var v13 = -s * a03 + c * a13;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v00;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v01;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v02;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v03;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v10;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v11;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v12;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v13;
  }
  function Matrix__scale_impl_6w89a4($this, x, y, z) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] = v;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_0 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] = v_0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_1 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] = v_1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] = v_2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_3 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] = v_3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_4 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] = v_4;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_5 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] = v_5;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_6 = _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] = v_6;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_7 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] = v_7;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_8 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] = v_8;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_9 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] = v_9;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    var v_10 = _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] * z;
    _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] = v_10;
  }
  function Matrix__scale$default_impl_snaws9($this, x, y, z, $super) {
    x = x === VOID ? 1.0 : x;
    y = y === VOID ? 1.0 : y;
    z = z === VOID ? 1.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__scale_impl_6w89a4($this, x, y, z);
      tmp = Unit_instance;
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Matrix(tmp_0)).d47.call(new Matrix($this), x, y, z);
    }
    return tmp;
  }
  function Matrix__translate_impl_1hftog($this, x, y, z) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 0 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 0 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = tmp_0 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 0 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t1 = tmp_1 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 1 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = tmp_2 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 1 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = tmp_3 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 1 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t2 = tmp_4 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 2 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = tmp_5 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 2 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = tmp_6 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 2 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t3 = tmp_7 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b($this)[imul(0, 4) + 3 | 0] * x;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = tmp_8 + _Matrix___get_values__impl__fblr7b($this)[imul(1, 4) + 3 | 0] * y;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = tmp_9 + _Matrix___get_values__impl__fblr7b($this)[imul(2, 4) + 3 | 0] * z;
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var t4 = tmp_10 + _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 0 | 0] = t1;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 1 | 0] = t2;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 2 | 0] = t3;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b($this)[imul(3, 4) + 3 | 0] = t4;
  }
  function Matrix__translate$default_impl_10t8ql($this, x, y, z, $super) {
    x = x === VOID ? 0.0 : x;
    y = y === VOID ? 0.0 : y;
    z = z === VOID ? 0.0 : z;
    var tmp;
    if ($super === VOID) {
      Matrix__translate_impl_1hftog($this, x, y, z);
      tmp = Unit_instance;
    } else {
      var tmp_0 = $super;
      tmp = (tmp_0 == null ? null : new Matrix(tmp_0)).e47.call(new Matrix($this), x, y, z);
    }
    return tmp;
  }
  function Companion_5() {
    this.f47_1 = 0;
    this.g47_1 = 1;
    this.h47_1 = 3;
    this.i47_1 = 4;
    this.j47_1 = 5;
    this.k47_1 = 7;
    this.l47_1 = 10;
    this.m47_1 = 12;
    this.n47_1 = 13;
    this.o47_1 = 14;
    this.p47_1 = 15;
  }
  var Companion_instance_7;
  function Companion_getInstance_15() {
    return Companion_instance_7;
  }
  function Matrix__hashCode_impl_s9ntm9($this) {
    return hashCode($this);
  }
  function Matrix__equals_impl_g5p8p9($this, other) {
    if (!(other instanceof Matrix))
      return false;
    var tmp0_other_with_cast = other instanceof Matrix ? other.c47_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Matrix(values) {
    this.c47_1 = values;
  }
  protoOf(Matrix).toString = function () {
    return Matrix__toString_impl_l0abk0(this.c47_1);
  };
  protoOf(Matrix).hashCode = function () {
    return Matrix__hashCode_impl_s9ntm9(this.c47_1);
  };
  protoOf(Matrix).equals = function (other) {
    return Matrix__equals_impl_g5p8p9(this.c47_1, other);
  };
  function dot(m1, row, m2, column) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = tmp * _Matrix___get_values__impl__fblr7b(m2)[imul(0, 4) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = tmp_0 + tmp_1 * _Matrix___get_values__impl__fblr7b(m2)[imul(1, 4) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = tmp_2 + tmp_3 * _Matrix___get_values__impl__fblr7b(m2)[imul(2, 4) + column | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b(m1)[imul(row, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    return tmp_4 + tmp_5 * _Matrix___get_values__impl__fblr7b(m2)[imul(3, 4) + column | 0];
  }
  function isIdentity(_this__u8e3s4) {
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var row = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= 3)
          do {
            var column = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var expected = row === column ? 1.0 : 0.0;
            // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
            if (!(_Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(row, 4) + column | 0] === expected)) {
              return false;
            }
          }
           while (inductionVariable_0 <= 3);
      }
       while (inductionVariable <= 3);
    return true;
  }
  function Rectangle(rect) {
    Outline.call(this);
    this.q47_1 = rect;
  }
  protoOf(Rectangle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rectangle))
      return false;
    if (!this.q47_1.equals(other.q47_1))
      return false;
    return true;
  };
  protoOf(Rectangle).hashCode = function () {
    return this.q47_1.hashCode();
  };
  function Rounded(roundRect) {
    Outline.call(this);
    this.r47_1 = roundRect;
    var tmp = this;
    var tmp_0;
    if (!get_isSimple(this.r47_1)) {
      // Inline function 'kotlin.apply' call
      var this_0 = Path_0();
      // Inline function 'androidx.compose.ui.graphics.Rounded.<anonymous>' call
      this_0.t47(this.r47_1);
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    tmp.s47_1 = tmp_0;
  }
  protoOf(Rounded).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rounded))
      return false;
    if (!this.r47_1.equals(other.r47_1))
      return false;
    return true;
  };
  protoOf(Rounded).hashCode = function () {
    return this.r47_1.hashCode();
  };
  function Generic(path) {
    Outline.call(this);
    this.u47_1 = path;
  }
  function Outline() {
  }
  function drawOutline(_this__u8e3s4, outline, color, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_30().v47_1 : blendMode;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp;
    if (outline instanceof Rectangle) {
      var rect = outline.q47_1;
      _this__u8e3s4.z47(color, topLeft(rect), size(rect), alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      if (outline instanceof Rounded) {
        var path = outline.s47_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.x47(path, color, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        } else {
          var rrect = outline.r47_1;
          var radius = _CornerRadius___get_x__impl__1594cn(rrect.z3g_1);
          var tmp0_topLeft = topLeft_0(rrect);
          var tmp1_size = size_0(rrect);
          var tmp2_cornerRadius = CornerRadius(radius);
          _this__u8e3s4.y47(color, tmp0_topLeft, tmp1_size, tmp2_cornerRadius, style, alpha, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          var path_0 = outline.u47_1;
          _this__u8e3s4.x47(path_0, color, alpha, style, colorFilter, blendMode);
          tmp = Unit_instance;
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function topLeft(_this__u8e3s4) {
    return Offset(_this__u8e3s4.i3g_1, _this__u8e3s4.j3g_1);
  }
  function size(_this__u8e3s4) {
    return Size(_this__u8e3s4.m3g(), _this__u8e3s4.n3g());
  }
  function topLeft_0(_this__u8e3s4) {
    return Offset(_this__u8e3s4.s3g_1, _this__u8e3s4.t3g_1);
  }
  function size_0(_this__u8e3s4) {
    return Size(_this__u8e3s4.m3g(), _this__u8e3s4.n3g());
  }
  function drawOutline_0(_this__u8e3s4, outline, brush, alpha, style, colorFilter, blendMode) {
    alpha = alpha === VOID ? 1.0 : alpha;
    style = style === VOID ? Fill_getInstance() : style;
    colorFilter = colorFilter === VOID ? null : colorFilter;
    blendMode = blendMode === VOID ? Companion_getInstance_30().v47_1 : blendMode;
    // Inline function 'androidx.compose.ui.graphics.drawOutlineHelper' call
    var tmp;
    if (outline instanceof Rectangle) {
      var rect = outline.q47_1;
      _this__u8e3s4.c48(brush, topLeft(rect), size(rect), alpha, style, colorFilter, blendMode);
      tmp = Unit_instance;
    } else {
      if (outline instanceof Rounded) {
        var path = outline.s47_1;
        var tmp_0;
        if (!(path == null)) {
          _this__u8e3s4.a48(path, brush, alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        } else {
          var rrect = outline.r47_1;
          var radius = _CornerRadius___get_x__impl__1594cn(rrect.z3g_1);
          _this__u8e3s4.b48(brush, topLeft_0(rrect), size_0(rrect), CornerRadius(radius), alpha, style, colorFilter, blendMode);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        if (outline instanceof Generic) {
          var path_0 = outline.u47_1;
          _this__u8e3s4.a48(path_0, brush, alpha, style, colorFilter, blendMode);
          tmp = Unit_instance;
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function _PaintingStyle___init__impl__pwxppo(value) {
    return value;
  }
  function Companion_6() {
    Companion_instance_8 = this;
    this.d48_1 = _PaintingStyle___init__impl__pwxppo(0);
    this.e48_1 = _PaintingStyle___init__impl__pwxppo(1);
  }
  var Companion_instance_8;
  function Companion_getInstance_16() {
    if (Companion_instance_8 == null)
      new Companion_6();
    return Companion_instance_8;
  }
  var Direction_CounterClockwise_instance;
  var Direction_Clockwise_instance;
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
    Direction_entriesInitialized = true;
    Direction_CounterClockwise_instance = new Direction('CounterClockwise', 0);
    Direction_Clockwise_instance = new Direction('Clockwise', 1);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Direction_CounterClockwise_getInstance() {
    Direction_initEntries();
    return Direction_CounterClockwise_instance;
  }
  function Path() {
  }
  function _PathFillType___init__impl__d59lzz(value) {
    return value;
  }
  function Companion_7() {
    Companion_instance_9 = this;
    this.n48_1 = _PathFillType___init__impl__d59lzz(0);
    this.o48_1 = _PathFillType___init__impl__d59lzz(1);
  }
  var Companion_instance_9;
  function Companion_getInstance_17() {
    if (Companion_instance_9 == null)
      new Companion_7();
    return Companion_instance_9;
  }
  function _PathOperation___init__impl__8ddeif(value) {
    return value;
  }
  function Companion_8() {
    Companion_instance_10 = this;
    this.p48_1 = _PathOperation___init__impl__8ddeif(0);
    this.q48_1 = _PathOperation___init__impl__8ddeif(1);
    this.r48_1 = _PathOperation___init__impl__8ddeif(2);
    this.s48_1 = _PathOperation___init__impl__8ddeif(3);
    this.t48_1 = _PathOperation___init__impl__8ddeif(4);
  }
  var Companion_instance_10;
  function Companion_getInstance_18() {
    if (Companion_instance_10 == null)
      new Companion_8();
    return Companion_instance_10;
  }
  function get_RectangleShape() {
    _init_properties_RectangleShape_kt__k3dd0u();
    return RectangleShape;
  }
  var RectangleShape;
  function RectangleShape$1() {
  }
  protoOf(RectangleShape$1).u48 = function (size, layoutDirection, density) {
    return new Rectangle(toRect(size));
  };
  protoOf(RectangleShape$1).toString = function () {
    return 'RectangleShape';
  };
  var properties_initialized_RectangleShape_kt_h73j90;
  function _init_properties_RectangleShape_kt__k3dd0u() {
    if (!properties_initialized_RectangleShape_kt_h73j90) {
      properties_initialized_RectangleShape_kt_h73j90 = true;
      RectangleShape = new RectangleShape$1();
    }
  }
  function Companion_9() {
    Companion_instance_11 = this;
    this.v48_1 = new Shadow();
  }
  var Companion_instance_11;
  function Companion_getInstance_19() {
    if (Companion_instance_11 == null)
      new Companion_9();
    return Companion_instance_11;
  }
  function Shadow(color, offset, blurRadius) {
    Companion_getInstance_19();
    color = color === VOID ? Color_1(new Long(-16777216, 0)) : color;
    offset = offset === VOID ? Companion_getInstance().d3g_1 : offset;
    blurRadius = blurRadius === VOID ? 0.0 : blurRadius;
    this.w48_1 = color;
    this.x48_1 = offset;
    this.y48_1 = blurRadius;
  }
  protoOf(Shadow).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!equals(this.w48_1, other.w48_1))
      return false;
    if (!equals(this.x48_1, other.x48_1))
      return false;
    if (!(this.y48_1 === other.y48_1))
      return false;
    return true;
  };
  protoOf(Shadow).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.w48_1);
    result = imul(31, result) + Offset__hashCode_impl_hbql41(this.x48_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.y48_1) | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(color=' + Color__toString_impl_hpzmaq(this.w48_1) + ', offset=' + Offset__toString_impl_4ffbou(this.x48_1) + ', blurRadius=' + this.y48_1 + ')';
  };
  function _StrokeCap___init__impl__kfgr27(value) {
    return value;
  }
  function Companion_10() {
    Companion_instance_12 = this;
    this.z48_1 = _StrokeCap___init__impl__kfgr27(0);
    this.a49_1 = _StrokeCap___init__impl__kfgr27(1);
    this.b49_1 = _StrokeCap___init__impl__kfgr27(2);
  }
  var Companion_instance_12;
  function Companion_getInstance_20() {
    if (Companion_instance_12 == null)
      new Companion_10();
    return Companion_instance_12;
  }
  function StrokeCap__toString_impl_3xn0rd($this) {
    return $this === Companion_getInstance_20().z48_1 ? 'Butt' : $this === Companion_getInstance_20().a49_1 ? 'Round' : $this === Companion_getInstance_20().b49_1 ? 'Square' : 'Unknown';
  }
  function StrokeCap__hashCode_impl_posxk8($this) {
    return $this;
  }
  function _StrokeJoin___init__impl__ig23zz(value) {
    return value;
  }
  function Companion_11() {
    Companion_instance_13 = this;
    this.c49_1 = _StrokeJoin___init__impl__ig23zz(0);
    this.d49_1 = _StrokeJoin___init__impl__ig23zz(1);
    this.e49_1 = _StrokeJoin___init__impl__ig23zz(2);
  }
  var Companion_instance_13;
  function Companion_getInstance_21() {
    if (Companion_instance_13 == null)
      new Companion_11();
    return Companion_instance_13;
  }
  function StrokeJoin__toString_impl_ph4e1r($this) {
    return $this === Companion_getInstance_21().c49_1 ? 'Miter' : $this === Companion_getInstance_21().d49_1 ? 'Round' : $this === Companion_getInstance_21().e49_1 ? 'Bevel' : 'Unknown';
  }
  function StrokeJoin__hashCode_impl_3pyh8w($this) {
    return $this;
  }
  function Adaptation$Companion$Bradford$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.8951, -0.7502, 0.0389, 0.2664, 1.7135, -0.0685, -0.1614, 0.0367, 1.0296]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Bradford$1).toString = function () {
    return 'Bradford';
  };
  function Adaptation$Companion$VonKries$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.40024, -0.2263, 0.0, 0.7076, 1.16532, 0.0, -0.08081, 0.0457, 0.91822]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$VonKries$1).toString = function () {
    return 'VonKries';
  };
  function Adaptation$Companion$Ciecat02$1() {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.7328, -0.7036, 0.003, 0.4296, 1.6975, 0.0136, -0.1624, 0.0061, 0.9834]);
    Adaptation.call(this, tmp$ret$0);
  }
  protoOf(Adaptation$Companion$Ciecat02$1).toString = function () {
    return 'Ciecat02';
  };
  function Companion_12() {
    Companion_instance_14 = this;
    var tmp = this;
    tmp.f49_1 = new Adaptation$Companion$Bradford$1();
    var tmp_0 = this;
    tmp_0.g49_1 = new Adaptation$Companion$VonKries$1();
    var tmp_1 = this;
    tmp_1.h49_1 = new Adaptation$Companion$Ciecat02$1();
  }
  var Companion_instance_14;
  function Companion_getInstance_22() {
    if (Companion_instance_14 == null)
      new Companion_12();
    return Companion_instance_14;
  }
  function Adaptation(transform) {
    Companion_getInstance_22();
    this.i49_1 = transform;
  }
  function _ColorModel___init__impl__b968n9(packedValue) {
    return packedValue;
  }
  function _ColorModel___get_packedValue__impl__uvxrhj($this) {
    return $this;
  }
  function _ColorModel___get_componentCount__impl__au0uoc($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    return _ColorModel___get_packedValue__impl__uvxrhj($this).i3(32).f1();
  }
  function Companion_13() {
    Companion_instance_15 = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$0 = toLong(3).h3(32).l3(toLong(0).k3(new Long(-1, 0)));
    tmp.o45_1 = _ColorModel___init__impl__b968n9(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = toLong(3).h3(32).l3(toLong(1).k3(new Long(-1, 0)));
    tmp_0.p45_1 = _ColorModel___init__impl__b968n9(tmp$ret$1);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$2 = toLong(3).h3(32).l3(toLong(2).k3(new Long(-1, 0)));
    tmp_1.q45_1 = _ColorModel___init__impl__b968n9(tmp$ret$2);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$3 = toLong(4).h3(32).l3(toLong(3).k3(new Long(-1, 0)));
    tmp_2.r45_1 = _ColorModel___init__impl__b968n9(tmp$ret$3);
  }
  var Companion_instance_15;
  function Companion_getInstance_23() {
    if (Companion_instance_15 == null)
      new Companion_13();
    return Companion_instance_15;
  }
  function ColorModel__toString_impl_msukd7($this) {
    return equals($this, Companion_getInstance_23().o45_1) ? 'Rgb' : equals($this, Companion_getInstance_23().p45_1) ? 'Xyz' : equals($this, Companion_getInstance_23().q45_1) ? 'Lab' : equals($this, Companion_getInstance_23().r45_1) ? 'Cmyk' : 'Unknown';
  }
  function ColorModel__hashCode_impl_11onkc($this) {
    return $this.hashCode();
  }
  function Companion_14() {
    this.j49_1 = -1;
    this.k49_1 = 63;
  }
  var Companion_instance_16;
  function Companion_getInstance_24() {
    return Companion_instance_16;
  }
  function ColorSpace(name, model, id) {
    this.u44_1 = name;
    this.v44_1 = model;
    this.w44_1 = id;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.u44_1;
    if (charSequenceLength(this_0) === 0) {
      throw IllegalArgumentException_init_$Create$('The name of a color space cannot be null and must contain at least 1 character');
    }
    if (this.w44_1 < -1 || this.w44_1 > 63) {
      throw IllegalArgumentException_init_$Create$('The id must be between -1 and 63');
    }
  }
  protoOf(ColorSpace).l45 = function () {
    return _ColorModel___get_componentCount__impl__au0uoc(this.v44_1);
  };
  protoOf(ColorSpace).k45 = function () {
    return false;
  };
  protoOf(ColorSpace).l49 = function (r, g, b) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([r, g, b]);
    return this.m49(tmp$ret$0);
  };
  protoOf(ColorSpace).n49 = function (v0, v1, v2) {
    var xyz = this.l49(v0, v1, v2);
    var tmp0 = xyz[0];
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = xyz[1];
    var v1_0 = toLong(toRawBits(tmp0));
    var v2_0 = toLong(toRawBits(val2));
    return v1_0.h3(32).l3(v2_0.k3(new Long(-1, 0)));
  };
  protoOf(ColorSpace).o49 = function (v0, v1, v2) {
    var xyz = this.l49(v0, v1, v2);
    return xyz[2];
  };
  protoOf(ColorSpace).p49 = function (x, y, z, a, colorSpace) {
    var colors = this.q49(x, y, z);
    return Color_0(colors[0], colors[1], colors[2], a, colorSpace);
  };
  protoOf(ColorSpace).q49 = function (x, y, z) {
    var xyz = new Float32Array(_ColorModel___get_componentCount__impl__au0uoc(this.v44_1));
    xyz[0] = x;
    xyz[1] = y;
    xyz[2] = z;
    return this.r49(xyz);
  };
  protoOf(ColorSpace).toString = function () {
    return this.u44_1 + ' (id=' + this.w44_1 + ', model=' + ColorModel__toString_impl_msukd7(this.v44_1) + ')';
  };
  protoOf(ColorSpace).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other))) {
      return false;
    }
    var that = other instanceof ColorSpace ? other : THROW_CCE();
    if (!(this.w44_1 === that.w44_1))
      return false;
    return !(this.u44_1 === that.u44_1) ? false : equals(this.v44_1, that.v44_1);
  };
  protoOf(ColorSpace).hashCode = function () {
    var result = getStringHashCode(this.u44_1);
    result = imul(31, result) + ColorModel__hashCode_impl_11onkc(this.v44_1) | 0;
    result = imul(31, result) + this.w44_1 | 0;
    return result;
  };
  function adapt(_this__u8e3s4, whitePoint, adaptation) {
    adaptation = adaptation === VOID ? Companion_getInstance_22().f49_1 : adaptation;
    if (equals(_this__u8e3s4.v44_1, Companion_getInstance_23().o45_1)) {
      var rgb = _this__u8e3s4 instanceof Rgb ? _this__u8e3s4 : THROW_CCE();
      if (compare(rgb.v45_1, whitePoint)) {
        return _this__u8e3s4;
      }
      var xyz = whitePoint.u49();
      var adaptationTransform = chromaticAdaptation(adaptation.i49_1, rgb.v45_1.u49(), xyz);
      var transform = mul3x3(adaptationTransform, rgb.a46_1);
      return Rgb_init_$Create$_1(rgb, transform, whitePoint);
    }
    return _this__u8e3s4;
  }
  function mul3x3Float3(lhs, rhs) {
    var r0 = rhs[0];
    var r1 = rhs[1];
    var r2 = rhs[2];
    rhs[0] = lhs[0] * r0 + lhs[3] * r1 + lhs[6] * r2;
    rhs[1] = lhs[1] * r0 + lhs[4] * r1 + lhs[7] * r2;
    rhs[2] = lhs[2] * r0 + lhs[5] * r1 + lhs[8] * r2;
    return rhs;
  }
  function compare(a, b) {
    if (a === b)
      return true;
    var tmp;
    // Inline function 'kotlin.math.abs' call
    var x = a.s49_1 - b.s49_1;
    if (Math.abs(x) < 0.001) {
      // Inline function 'kotlin.math.abs' call
      var x_0 = a.t49_1 - b.t49_1;
      tmp = Math.abs(x_0) < 0.001;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function mul3x3(lhs, rhs) {
    var r = new Float32Array(9);
    r[0] = lhs[0] * rhs[0] + lhs[3] * rhs[1] + lhs[6] * rhs[2];
    r[1] = lhs[1] * rhs[0] + lhs[4] * rhs[1] + lhs[7] * rhs[2];
    r[2] = lhs[2] * rhs[0] + lhs[5] * rhs[1] + lhs[8] * rhs[2];
    r[3] = lhs[0] * rhs[3] + lhs[3] * rhs[4] + lhs[6] * rhs[5];
    r[4] = lhs[1] * rhs[3] + lhs[4] * rhs[4] + lhs[7] * rhs[5];
    r[5] = lhs[2] * rhs[3] + lhs[5] * rhs[4] + lhs[8] * rhs[5];
    r[6] = lhs[0] * rhs[6] + lhs[3] * rhs[7] + lhs[6] * rhs[8];
    r[7] = lhs[1] * rhs[6] + lhs[4] * rhs[7] + lhs[7] * rhs[8];
    r[8] = lhs[2] * rhs[6] + lhs[5] * rhs[7] + lhs[8] * rhs[8];
    return r;
  }
  function chromaticAdaptation(matrix, srcWhitePoint, dstWhitePoint) {
    var srcLMS = mul3x3Float3(matrix, srcWhitePoint);
    var dstLMS = mul3x3Float3(matrix, dstWhitePoint);
    // Inline function 'kotlin.floatArrayOf' call
    var LMS = new Float32Array([dstLMS[0] / srcLMS[0], dstLMS[1] / srcLMS[1], dstLMS[2] / srcLMS[2]]);
    return mul3x3(inverse3x3(matrix), mul3x3Diag(LMS, matrix));
  }
  function inverse3x3(m) {
    var a = m[0];
    var b = m[3];
    var c = m[6];
    var d = m[1];
    var e = m[4];
    var f = m[7];
    var g = m[2];
    var h = m[5];
    var i = m[8];
    var xA = e * i - f * h;
    var xB = f * g - d * i;
    var xC = d * h - e * g;
    var det = a * xA + b * xB + c * xC;
    var inverted = new Float32Array(m.length);
    inverted[0] = xA / det;
    inverted[1] = xB / det;
    inverted[2] = xC / det;
    inverted[3] = (c * h - b * i) / det;
    inverted[4] = (a * i - c * g) / det;
    inverted[5] = (b * g - a * h) / det;
    inverted[6] = (b * f - c * e) / det;
    inverted[7] = (c * d - a * f) / det;
    inverted[8] = (a * e - b * d) / det;
    return inverted;
  }
  function mul3x3Diag(lhs, rhs) {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([lhs[0] * rhs[0], lhs[1] * rhs[1], lhs[2] * rhs[2], lhs[0] * rhs[3], lhs[1] * rhs[4], lhs[2] * rhs[5], lhs[0] * rhs[6], lhs[1] * rhs[7], lhs[2] * rhs[8]]);
  }
  function rcpResponse(x, a, b, c, d, g) {
    var tmp;
    if (x >= d * c) {
      // Inline function 'kotlin.math.pow' call
      var x_0 = 1.0 / g;
      tmp = (Math.pow(x, x_0) - b) / a;
    } else {
      tmp = x / c;
    }
    return tmp;
  }
  function rcpResponse_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d * c) {
      var tmp0 = x - e;
      // Inline function 'kotlin.math.pow' call
      var x_0 = 1.0 / g;
      tmp = (Math.pow(tmp0, x_0) - b) / a;
    } else {
      tmp = (x - f) / c;
    }
    return tmp;
  }
  function response(x, a, b, c, d, g) {
    var tmp;
    if (x >= d) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = a * x + b;
      tmp = Math.pow(this_0, g);
    } else {
      tmp = c * x;
    }
    return tmp;
  }
  function response_0(x, a, b, c, d, e, f, g) {
    var tmp;
    if (x >= d) {
      // Inline function 'kotlin.math.pow' call
      var this_0 = a * x + b;
      tmp = Math.pow(this_0, g) + e;
    } else {
      tmp = c * x + f;
    }
    return tmp;
  }
  function compare_0(a, b) {
    if (a === b)
      return true;
    var inductionVariable = 0;
    var last = a.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        if (!(compareTo(a[i], b[i]) === 0)) {
          // Inline function 'kotlin.math.abs' call
          var x = a[i] - b[i];
          tmp = Math.abs(x) > 0.001;
        } else {
          tmp = false;
        }
        if (tmp)
          return false;
      }
       while (inductionVariable <= last);
    return true;
  }
  function absRcpResponse(x, a, b, c, d, g) {
    return withSign(rcpResponse(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function absResponse(x, a, b, c, d, g) {
    return withSign(response(x < 0.0 ? -x : x, a, b, c, d, g), x);
  }
  function connect(_this__u8e3s4, destination, intent) {
    destination = destination === VOID ? ColorSpaces_getInstance().s43_1 : destination;
    intent = intent === VOID ? Companion_getInstance_28().v49_1 : intent;
    var srcId = _this__u8e3s4.w44_1;
    var dstId = destination.w44_1;
    var tmp;
    if ((srcId | dstId) < 0) {
      tmp = createConnector(_this__u8e3s4, destination, intent);
    } else {
      var tmp3 = get_Connectors();
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut' call
      var key = srcId | dstId << 6 | _RenderIntent___get_value__impl__ip9mbh(intent) << 12;
      var tmp0_elvis_lhs = tmp3.p(key);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'androidx.compose.ui.graphics.colorspace.connect.<anonymous>' call
        // Inline function 'kotlin.also' call
        var this_0 = createConnector(_this__u8e3s4, destination, intent);
        // Inline function 'androidx.collection.MutableIntObjectMap.getOrPut.<anonymous>' call
        tmp3.co(key, this_0);
        tmp_0 = this_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function createConnector(source, destination, intent) {
    var tmp;
    if (source === destination) {
      tmp = Companion_instance_17.z49(source);
    } else if (equals(source.v44_1, Companion_getInstance_23().o45_1) && equals(destination.v44_1, Companion_getInstance_23().o45_1)) {
      var tmp_0 = source instanceof Rgb ? source : THROW_CCE();
      tmp = new RgbConnector(tmp_0, destination instanceof Rgb ? destination : THROW_CCE(), intent);
    } else {
      tmp = Connector_init_$Create$(source, destination, intent);
    }
    return tmp;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(function_0) {
    this.a4a_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).k46 = function (double) {
    return this.a4a_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).q3 = function () {
    return this.a4a_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0).hashCode = function () {
    return hashCode(this.q3());
  };
  function ColorSpaces$ExtendedSrgb$lambda(x) {
    return absRcpResponse(x, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045, 2.4);
  }
  function ColorSpaces$ExtendedSrgb$lambda_0(x) {
    return absResponse(x, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045, 2.4);
  }
  function ColorSpaces() {
    ColorSpaces_instance = this;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.o43_1 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.p43_1 = new Float32Array([0.67, 0.33, 0.21, 0.71, 0.14, 0.08]);
    this.q43_1 = new TransferParameters(2.4, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045);
    this.r43_1 = new TransferParameters(2.2, 1 / 1.055, 0.055 / 1.055, 1 / 12.92, 0.04045);
    this.s43_1 = Rgb_init_$Create$('sRGB IEC61966-2.1', this.o43_1, Illuminant_getInstance().h4a_1, this.q43_1, 0);
    this.t43_1 = Rgb_init_$Create$_0('sRGB IEC61966-2.1 (Linear)', this.o43_1, Illuminant_getInstance().h4a_1, 1.0, 0.0, 1.0, 1);
    var tmp_1 = this;
    var tmp_2 = Illuminant_getInstance().h4a_1;
    var tmp_3 = ColorSpaces$ExtendedSrgb$lambda;
    var tmp_4 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_3);
    var tmp_5 = ColorSpaces$ExtendedSrgb$lambda_0;
    tmp_1.u43_1 = new Rgb('scRGB-nl IEC 61966-2-2:2003', this.o43_1, tmp_2, null, tmp_4, new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0(tmp_5), -0.799, 2.399, this.q43_1, 2);
    this.v43_1 = Rgb_init_$Create$_0('scRGB IEC 61966-2-2:2003', this.o43_1, Illuminant_getInstance().h4a_1, 1.0, -0.5, 7.499, 3);
    var tmp_6 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$2 = new Float32Array([0.64, 0.33, 0.3, 0.6, 0.15, 0.06]);
    tmp_6.w43_1 = Rgb_init_$Create$('Rec. ITU-R BT.709-5', tmp$ret$2, Illuminant_getInstance().h4a_1, new TransferParameters(1 / 0.45, 1 / 1.099, 0.099 / 1.099, 1 / 4.5, 0.081), 4);
    var tmp_7 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$3 = new Float32Array([0.708, 0.292, 0.17, 0.797, 0.131, 0.046]);
    tmp_7.x43_1 = Rgb_init_$Create$('Rec. ITU-R BT.2020-1', tmp$ret$3, Illuminant_getInstance().h4a_1, new TransferParameters(1 / 0.45, 1 / 1.0993, 0.0993 / 1.0993, 1 / 4.5, 0.08145), 5);
    var tmp_8 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$4 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_8.y43_1 = Rgb_init_$Create$_0('SMPTE RP 431-2-2007 DCI (P3)', tmp$ret$4, new WhitePoint(0.314, 0.351), 2.6, 0.0, 1.0, 6);
    var tmp_9 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$5 = new Float32Array([0.68, 0.32, 0.265, 0.69, 0.15, 0.06]);
    tmp_9.z43_1 = Rgb_init_$Create$('Display P3', tmp$ret$5, Illuminant_getInstance().h4a_1, this.q43_1, 7);
    this.a44_1 = Rgb_init_$Create$('NTSC (1953)', this.p43_1, Illuminant_getInstance().d4a_1, new TransferParameters(1 / 0.45, 1 / 1.099, 0.099 / 1.099, 1 / 4.5, 0.081), 8);
    var tmp_10 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$6 = new Float32Array([0.63, 0.34, 0.31, 0.595, 0.155, 0.07]);
    tmp_10.b44_1 = Rgb_init_$Create$('SMPTE-C RGB', tmp$ret$6, Illuminant_getInstance().h4a_1, new TransferParameters(1 / 0.45, 1 / 1.099, 0.099 / 1.099, 1 / 4.5, 0.081), 9);
    var tmp_11 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$7 = new Float32Array([0.64, 0.33, 0.21, 0.71, 0.15, 0.06]);
    tmp_11.c44_1 = Rgb_init_$Create$_0('Adobe RGB (1998)', tmp$ret$7, Illuminant_getInstance().h4a_1, 2.2, 0.0, 1.0, 10);
    var tmp_12 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$8 = new Float32Array([0.7347, 0.2653, 0.1596, 0.8404, 0.0366, 1.0E-4]);
    tmp_12.d44_1 = Rgb_init_$Create$('ROMM RGB ISO 22028-2:2013', tmp$ret$8, Illuminant_getInstance().e4a_1, new TransferParameters(1.8, 1.0, 0.0, 1 / 16.0, 0.031248), 11);
    var tmp_13 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$9 = new Float32Array([0.7347, 0.2653, 0.0, 1.0, 1.0E-4, -0.077]);
    tmp_13.e44_1 = Rgb_init_$Create$_0('SMPTE ST 2065-1:2012 ACES', tmp$ret$9, Illuminant_getInstance().g4a_1, 1.0, -65504.0, 65504.0, 12);
    var tmp_14 = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$10 = new Float32Array([0.713, 0.293, 0.165, 0.83, 0.128, 0.044]);
    tmp_14.f44_1 = Rgb_init_$Create$_0('Academy S-2014-004 ACEScg', tmp$ret$10, Illuminant_getInstance().g4a_1, 1.0, -65504.0, 65504.0, 13);
    this.g44_1 = new Xyz('Generic XYZ', 14);
    this.h44_1 = new Lab('Generic L*a*b*', 15);
    this.i44_1 = Rgb_init_$Create$('None', this.o43_1, Illuminant_getInstance().h4a_1, this.r43_1, 16);
    this.j44_1 = new Oklab('Oklab', 17);
    var tmp_15 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_15.k44_1 = [this.s43_1, this.t43_1, this.u43_1, this.v43_1, this.w43_1, this.x43_1, this.y43_1, this.z43_1, this.a44_1, this.b44_1, this.c44_1, this.d44_1, this.e44_1, this.f44_1, this.g44_1, this.h44_1, this.i44_1, this.j44_1];
  }
  var ColorSpaces_instance;
  function ColorSpaces_getInstance() {
    if (ColorSpaces_instance == null)
      new ColorSpaces();
    return ColorSpaces_instance;
  }
  function get_Connectors() {
    _init_properties_Connector_kt__swbf17();
    return Connectors;
  }
  var Connectors;
  function computeTransform($this, source, destination, intent) {
    if (compare(source.v45_1, destination.v45_1)) {
      return mul3x3(destination.b46_1, source.a46_1);
    } else {
      var transform = source.a46_1;
      var inverseTransform = destination.b46_1;
      var srcXYZ = source.v45_1.u49();
      var dstXYZ = destination.v45_1.u49();
      if (!compare(source.v45_1, Illuminant_getInstance().e4a_1)) {
        var tmp = Companion_getInstance_22().f49_1.i49_1;
        // Inline function 'kotlin.collections.copyOf' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = Illuminant_getInstance().k4a_1.slice();
        var srcAdaptation = chromaticAdaptation(tmp, srcXYZ, tmp$ret$1);
        transform = mul3x3(srcAdaptation, source.a46_1);
      }
      if (!compare(destination.v45_1, Illuminant_getInstance().e4a_1)) {
        var tmp_0 = Companion_getInstance_22().f49_1.i49_1;
        // Inline function 'kotlin.collections.copyOf' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = Illuminant_getInstance().k4a_1.slice();
        var dstAdaptation = chromaticAdaptation(tmp_0, dstXYZ, tmp$ret$3);
        inverseTransform = inverse3x3(mul3x3(dstAdaptation, destination.a46_1));
      }
      if (intent === Companion_getInstance_28().y49_1) {
        // Inline function 'kotlin.floatArrayOf' call
        var tmp$ret$4 = new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
        transform = mul3x3Diag(tmp$ret$4, transform);
      }
      return mul3x3(inverseTransform, transform);
    }
  }
  function computeTransform_0($this, source, destination, intent) {
    if (!(intent === Companion_getInstance_28().y49_1))
      return null;
    var srcRGB = equals(source.v44_1, Companion_getInstance_23().o45_1);
    var dstRGB = equals(destination.v44_1, Companion_getInstance_23().o45_1);
    if (srcRGB && dstRGB)
      return null;
    if (srcRGB || dstRGB) {
      var tmp = srcRGB ? source : destination;
      var rgb = tmp instanceof Rgb ? tmp : THROW_CCE();
      var srcXYZ = srcRGB ? rgb.v45_1.u49() : Illuminant_getInstance().k4a_1;
      var dstXYZ = dstRGB ? rgb.v45_1.u49() : Illuminant_getInstance().k4a_1;
      // Inline function 'kotlin.floatArrayOf' call
      return new Float32Array([srcXYZ[0] / dstXYZ[0], srcXYZ[1] / dstXYZ[1], srcXYZ[2] / dstXYZ[2]]);
    }
    return null;
  }
  function Connector$Companion$identity$1($source) {
    Connector_init_$Init$($source, $source, Companion_getInstance_28().w49_1, this);
  }
  protoOf(Connector$Companion$identity$1).r44 = function (color) {
    return color;
  };
  function Connector_init_$Init$(source, destination, intent, $this) {
    var tmp = equals(source.v44_1, Companion_getInstance_23().o45_1) ? adapt(source, Illuminant_getInstance().e4a_1) : source;
    var tmp_0;
    if (equals(destination.v44_1, Companion_getInstance_23().o45_1)) {
      tmp_0 = adapt(destination, Illuminant_getInstance().e4a_1);
    } else {
      tmp_0 = destination;
    }
    Connector.call($this, source, destination, tmp, tmp_0, intent, computeTransform_0(Companion_instance_17, source, destination, intent));
    return $this;
  }
  function Connector_init_$Create$(source, destination, intent) {
    return Connector_init_$Init$(source, destination, intent, objectCreate(protoOf(Connector)));
  }
  function RgbConnector(mSource, mDestination, intent) {
    Connector.call(this, mSource, mDestination, mSource, mDestination, intent, null);
    this.x4a_1 = mSource;
    this.y4a_1 = mDestination;
    this.z4a_1 = computeTransform(this, this.x4a_1, this.y4a_1, intent);
  }
  protoOf(RgbConnector).r44 = function (color) {
    // Inline function 'androidx.compose.ui.graphics.Color.component1' call
    var r = _Color___get_red__impl__cwrsk6(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component2' call
    var g = _Color___get_green__impl__bta9rs(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component3' call
    var b = _Color___get_blue__impl__xwez13(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component4' call
    var a = _Color___get_alpha__impl__wcfyv1(color);
    var v0 = this.x4a_1.h46_1.k46(r);
    var v1 = this.x4a_1.h46_1.k46(g);
    var v2 = this.x4a_1.h46_1.k46(b);
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = this.z4a_1;
    var v01 = lhs[0] * v0 + lhs[3] * v1 + lhs[6] * v2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = this.z4a_1;
    var v11 = lhs_0[1] * v0 + lhs_0[4] * v1 + lhs_0[7] * v2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = this.z4a_1;
    var v21 = lhs_1[2] * v0 + lhs_1[5] * v1 + lhs_1[8] * v2;
    var v02 = this.y4a_1.e46_1.k46(v01);
    var v12 = this.y4a_1.e46_1.k46(v11);
    var v22 = this.y4a_1.e46_1.k46(v21);
    return Color_0(v02, v12, v22, a, this.y4a_1);
  };
  function Companion_15() {
  }
  protoOf(Companion_15).z49 = function (source) {
    return new Connector$Companion$identity$1(source);
  };
  var Companion_instance_17;
  function Companion_getInstance_25() {
    return Companion_instance_17;
  }
  function Connector(source, destination, transformSource, transformDestination, renderIntent, transform) {
    this.l44_1 = source;
    this.m44_1 = destination;
    this.n44_1 = transformSource;
    this.o44_1 = transformDestination;
    this.p44_1 = renderIntent;
    this.q44_1 = transform;
  }
  protoOf(Connector).r44 = function (color) {
    // Inline function 'androidx.compose.ui.graphics.Color.component1' call
    var r = _Color___get_red__impl__cwrsk6(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component2' call
    var g = _Color___get_green__impl__bta9rs(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component3' call
    var b = _Color___get_blue__impl__xwez13(color);
    // Inline function 'androidx.compose.ui.graphics.Color.component4' call
    var a = _Color___get_alpha__impl__wcfyv1(color);
    var packed = this.n44_1.n49(r, g, b);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = packed.i3(32).f1();
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = packed.k3(new Long(-1, 0)).f1();
    var y = floatFromBits(bits_0);
    var z = this.n44_1.o49(r, g, b);
    if (!(this.q44_1 == null)) {
      x = x * this.q44_1[0];
      y = y * this.q44_1[1];
      z = z * this.q44_1[2];
    }
    return this.o44_1.p49(x, y, z, a, this.m44_1);
  };
  var properties_initialized_Connector_kt_5j9z4t;
  function _init_properties_Connector_kt__swbf17() {
    if (!properties_initialized_Connector_kt_5j9z4t) {
      properties_initialized_Connector_kt_5j9z4t = true;
      var tmp0 = ColorSpaces_getInstance().s43_1.w44_1;
      var tmp1 = ColorSpaces_getInstance().s43_1.w44_1;
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      var renderIntent = Companion_getInstance_28().v49_1;
      var tmp = tmp0 | tmp1 << 6 | _RenderIntent___get_value__impl__ip9mbh(renderIntent) << 12;
      var tmp_0 = Companion_instance_17.z49(ColorSpaces_getInstance().s43_1);
      var tmp3 = ColorSpaces_getInstance().s43_1.w44_1;
      var tmp4 = ColorSpaces_getInstance().j44_1.w44_1;
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      var renderIntent_0 = Companion_getInstance_28().v49_1;
      var tmp_1 = tmp3 | tmp4 << 6 | _RenderIntent___get_value__impl__ip9mbh(renderIntent_0) << 12;
      var tmp_2 = Connector_init_$Create$(ColorSpaces_getInstance().s43_1, ColorSpaces_getInstance().j44_1, Companion_getInstance_28().v49_1);
      var tmp6 = ColorSpaces_getInstance().j44_1.w44_1;
      var tmp7 = ColorSpaces_getInstance().s43_1.w44_1;
      // Inline function 'androidx.compose.ui.graphics.colorspace.connectorKey' call
      var renderIntent_1 = Companion_getInstance_28().v49_1;
      var tmp$ret$2 = tmp6 | tmp7 << 6 | _RenderIntent___get_value__impl__ip9mbh(renderIntent_1) << 12;
      Connectors = mutableIntObjectMapOf(tmp, tmp_0, tmp_1, tmp_2, tmp$ret$2, Connector_init_$Create$(ColorSpaces_getInstance().j44_1, ColorSpaces_getInstance().s43_1, Companion_getInstance_28().v49_1));
    }
  }
  function Illuminant() {
    Illuminant_instance = this;
    this.b4a_1 = new WhitePoint(0.44757, 0.40745);
    this.c4a_1 = new WhitePoint(0.34842, 0.35161);
    this.d4a_1 = new WhitePoint(0.31006, 0.31616);
    this.e4a_1 = new WhitePoint(0.34567, 0.3585);
    this.f4a_1 = new WhitePoint(0.33242, 0.34743);
    this.g4a_1 = new WhitePoint(0.32168, 0.33767);
    this.h4a_1 = new WhitePoint(0.31271, 0.32902);
    this.i4a_1 = new WhitePoint(0.29902, 0.31485);
    this.j4a_1 = new WhitePoint(0.33333, 0.33333);
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp.k4a_1 = new Float32Array([0.964212, 1.0, 0.825188]);
  }
  var Illuminant_instance;
  function Illuminant_getInstance() {
    if (Illuminant_instance == null)
      new Illuminant();
    return Illuminant_instance;
  }
  function Companion_16() {
    this.a4b_1 = 0.008856452;
    this.b4b_1 = 7.787037;
    this.c4b_1 = 0.13793103;
    this.d4b_1 = 0.20689656;
  }
  var Companion_instance_18;
  function Companion_getInstance_26() {
    return Companion_instance_18;
  }
  function Lab(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_23().q45_1, id);
  }
  protoOf(Lab).m45 = function (component) {
    return component === 0 ? 0.0 : -128.0;
  };
  protoOf(Lab).n45 = function (component) {
    return component === 0 ? 100.0 : 128.0;
  };
  protoOf(Lab).m49 = function (v) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v[0];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = this_0 < 0.0 ? 0.0 : this_0;
    v[0] = this_1 > 100.0 ? 100.0 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_2 = v[1];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_3 = this_2 < -128.0 ? -128.0 : this_2;
    v[1] = this_3 > 128.0 ? 128.0 : this_3;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_4 = v[2];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_5 = this_4 < -128.0 ? -128.0 : this_4;
    v[2] = this_5 > 128.0 ? 128.0 : this_5;
    var fy = (v[0] + 16.0) / 116.0;
    var fx = fy + v[1] * 0.002;
    var fz = fy - v[2] * 0.005;
    var tmp;
    if (fx > 0.20689656) {
      tmp = fx * fx * fx;
    } else {
      var tmp_0 = 1.0 / 7.787037;
      tmp = tmp_0 * (fx - 0.13793103);
    }
    var x = tmp;
    var tmp_1;
    if (fy > 0.20689656) {
      tmp_1 = fy * fy * fy;
    } else {
      var tmp_2 = 1.0 / 7.787037;
      tmp_1 = tmp_2 * (fy - 0.13793103);
    }
    var y = tmp_1;
    var tmp_3;
    if (fz > 0.20689656) {
      tmp_3 = fz * fz * fz;
    } else {
      var tmp_4 = 1.0 / 7.787037;
      tmp_3 = tmp_4 * (fz - 0.13793103);
    }
    var z = tmp_3;
    v[0] = x * Illuminant_getInstance().k4a_1[0];
    v[1] = y * Illuminant_getInstance().k4a_1[1];
    v[2] = z * Illuminant_getInstance().k4a_1[2];
    return v;
  };
  protoOf(Lab).n49 = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v0 < 0.0 ? 0.0 : v0;
    var v00 = this_0 > 100.0 ? 100.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = v1 < -128.0 ? -128.0 : v1;
    var v10 = this_1 > 128.0 ? 128.0 : this_1;
    var fy = (v00 + 16.0) / 116.0;
    var fx = fy + v10 * 0.002;
    var tmp;
    if (fx > 0.20689656) {
      tmp = fx * fx * fx;
    } else {
      var tmp_0 = 1.0 / 7.787037;
      tmp = tmp_0 * (fx - 0.13793103);
    }
    var x = tmp;
    var tmp_1;
    if (fy > 0.20689656) {
      tmp_1 = fy * fy * fy;
    } else {
      var tmp_2 = 1.0 / 7.787037;
      tmp_1 = tmp_2 * (fy - 0.13793103);
    }
    var y = tmp_1;
    var tmp6 = x * Illuminant_getInstance().k4a_1[0];
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = y * Illuminant_getInstance().k4a_1[1];
    var v1_0 = toLong(toRawBits(tmp6));
    var v2_0 = toLong(toRawBits(val2));
    return v1_0.h3(32).l3(v2_0.k3(new Long(-1, 0)));
  };
  protoOf(Lab).o49 = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v0 < 0.0 ? 0.0 : v0;
    var v00 = this_0 > 100.0 ? 100.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = v2 < -128.0 ? -128.0 : v2;
    var v20 = this_1 > 128.0 ? 128.0 : this_1;
    var fy = (v00 + 16.0) / 116.0;
    var fz = fy - v20 * 0.005;
    var tmp;
    if (fz > 0.20689656) {
      tmp = fz * fz * fz;
    } else {
      var tmp_0 = 1.0 / 7.787037;
      tmp = tmp_0 * (fz - 0.13793103);
    }
    var z = tmp;
    return z * Illuminant_getInstance().k4a_1[2];
  };
  protoOf(Lab).p49 = function (x, y, z, a, colorSpace) {
    var x1 = x / Illuminant_getInstance().k4a_1[0];
    var y1 = y / Illuminant_getInstance().k4a_1[1];
    var z1 = z / Illuminant_getInstance().k4a_1[2];
    var tmp;
    if (x1 > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp = Math.cbrt(x1);
    } else {
      var tmp_0 = 7.787037 * x1;
      tmp = tmp_0 + 0.13793103;
    }
    var fx = tmp;
    var tmp_1;
    if (y1 > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp_1 = Math.cbrt(y1);
    } else {
      var tmp_2 = 7.787037 * y1;
      tmp_1 = tmp_2 + 0.13793103;
    }
    var fy = tmp_1;
    var tmp_3;
    if (z1 > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp_3 = Math.cbrt(z1);
    } else {
      var tmp_4 = 7.787037 * z1;
      tmp_3 = tmp_4 + 0.13793103;
    }
    var fz = tmp_3;
    var l = 116.0 * fy - 16.0;
    var a1 = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = l < 0.0 ? 0.0 : l;
    var tmp_5 = this_0 > 100.0 ? 100.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = a1 < -128.0 ? -128.0 : a1;
    var tmp_6 = this_1 > 128.0 ? 128.0 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = b < -128.0 ? -128.0 : b;
    var tmp$ret$11 = this_2 > 128.0 ? 128.0 : this_2;
    return Color_0(tmp_5, tmp_6, tmp$ret$11, a, colorSpace);
  };
  protoOf(Lab).r49 = function (v) {
    var x = v[0] / Illuminant_getInstance().k4a_1[0];
    var y = v[1] / Illuminant_getInstance().k4a_1[1];
    var z = v[2] / Illuminant_getInstance().k4a_1[2];
    var tmp;
    if (x > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp = Math.cbrt(x);
    } else {
      var tmp_0 = 7.787037 * x;
      tmp = tmp_0 + 0.13793103;
    }
    var fx = tmp;
    var tmp_1;
    if (y > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp_1 = Math.cbrt(y);
    } else {
      var tmp_2 = 7.787037 * y;
      tmp_1 = tmp_2 + 0.13793103;
    }
    var fy = tmp_1;
    var tmp_3;
    if (z > 0.008856452) {
      // Inline function 'kotlin.math.cbrt' call
      tmp_3 = Math.cbrt(z);
    } else {
      var tmp_4 = 7.787037 * z;
      tmp_3 = tmp_4 + 0.13793103;
    }
    var fz = tmp_3;
    var l = 116.0 * fy - 16.0;
    var a = 500.0 * (fx - fy);
    var b = 200.0 * (fy - fz);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = l < 0.0 ? 0.0 : l;
    v[0] = this_0 > 100.0 ? 100.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = a < -128.0 ? -128.0 : a;
    v[1] = this_1 > 128.0 ? 128.0 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = b < -128.0 ? -128.0 : b;
    v[2] = this_2 > 128.0 ? 128.0 : this_2;
    return v;
  };
  function Companion_17() {
    Companion_instance_19 = this;
    var tmp = this;
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([0.818933, 0.032984544, 0.0482003, 0.36186674, 0.9293119, 0.26436627, -0.12885971, 0.03614564, 0.6338517]);
    tmp.h4b_1 = mul3x3(tmp$ret$0, chromaticAdaptation(Companion_getInstance_22().f49_1.i49_1, Illuminant_getInstance().e4a_1.u49(), Illuminant_getInstance().h4a_1.u49()));
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.i4b_1 = new Float32Array([0.21045426, 1.9779985, 0.025904037, 0.7936178, -2.4285922, 0.78277177, -0.004072047, 0.4505937, -0.80867577]);
    this.j4b_1 = inverse3x3(this.h4b_1);
    this.k4b_1 = inverse3x3(this.i4b_1);
  }
  var Companion_instance_19;
  function Companion_getInstance_27() {
    if (Companion_instance_19 == null)
      new Companion_17();
    return Companion_instance_19;
  }
  function Oklab(name, id) {
    Companion_getInstance_27();
    ColorSpace.call(this, name, Companion_getInstance_23().q45_1, id);
  }
  protoOf(Oklab).m45 = function (component) {
    return component === 0 ? 0.0 : -0.5;
  };
  protoOf(Oklab).n45 = function (component) {
    return component === 0 ? 1.0 : 0.5;
  };
  protoOf(Oklab).m49 = function (v) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v[0];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = this_0 < 0.0 ? 0.0 : this_0;
    v[0] = this_1 > 1.0 ? 1.0 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_2 = v[1];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_3 = this_2 < -0.5 ? -0.5 : this_2;
    v[1] = this_3 > 0.5 ? 0.5 : this_3;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_4 = v[2];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_5 = this_4 < -0.5 ? -0.5 : this_4;
    v[2] = this_5 > 0.5 ? 0.5 : this_5;
    mul3x3Float3(Companion_getInstance_27().k4b_1, v);
    v[0] = v[0] * v[0] * v[0];
    v[1] = v[1] * v[1] * v[1];
    v[2] = v[2] * v[2] * v[2];
    mul3x3Float3(Companion_getInstance_27().j4b_1, v);
    return v;
  };
  protoOf(Oklab).n49 = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v0 < 0.0 ? 0.0 : v0;
    var v00 = this_0 > 1.0 ? 1.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = v1 < -0.5 ? -0.5 : v1;
    var v10 = this_1 > 0.5 ? 0.5 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = v2 < -0.5 ? -0.5 : v2;
    var v20 = this_2 > 0.5 ? 0.5 : this_2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = Companion_getInstance_27().k4b_1;
    var v01 = lhs[0] * v00 + lhs[3] * v10 + lhs[6] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = Companion_getInstance_27().k4b_1;
    var v11 = lhs_0[1] * v00 + lhs_0[4] * v10 + lhs_0[7] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = Companion_getInstance_27().k4b_1;
    var v21 = lhs_1[2] * v00 + lhs_1[5] * v10 + lhs_1[8] * v20;
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs_2 = Companion_getInstance_27().j4b_1;
    var v03 = lhs_2[0] * v02 + lhs_2[3] * v12 + lhs_2[6] * v22;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_3 = Companion_getInstance_27().j4b_1;
    var v13 = lhs_3[1] * v02 + lhs_3[4] * v12 + lhs_3[7] * v22;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = toLong(toRawBits(v03));
    var v2_0 = toLong(toRawBits(v13));
    return v1_0.h3(32).l3(v2_0.k3(new Long(-1, 0)));
  };
  protoOf(Oklab).o49 = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v0 < 0.0 ? 0.0 : v0;
    var v00 = this_0 > 1.0 ? 1.0 : this_0;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = v1 < -0.5 ? -0.5 : v1;
    var v10 = this_1 > 0.5 ? 0.5 : this_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = v2 < -0.5 ? -0.5 : v2;
    var v20 = this_2 > 0.5 ? 0.5 : this_2;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = Companion_getInstance_27().k4b_1;
    var v01 = lhs[0] * v00 + lhs[3] * v10 + lhs[6] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = Companion_getInstance_27().k4b_1;
    var v11 = lhs_0[1] * v00 + lhs_0[4] * v10 + lhs_0[7] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = Companion_getInstance_27().k4b_1;
    var v21 = lhs_1[2] * v00 + lhs_1[5] * v10 + lhs_1[8] * v20;
    var v02 = v01 * v01 * v01;
    var v12 = v11 * v11 * v11;
    var v22 = v21 * v21 * v21;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_2 = Companion_getInstance_27().j4b_1;
    var v23 = lhs_2[2] * v02 + lhs_2[5] * v12 + lhs_2[8] * v22;
    return v23;
  };
  protoOf(Oklab).p49 = function (x, y, z, a, colorSpace) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = Companion_getInstance_27().h4b_1;
    var v0 = lhs[0] * x + lhs[3] * y + lhs[6] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = Companion_getInstance_27().h4b_1;
    var v1 = lhs_0[1] * x + lhs_0[4] * y + lhs_0[7] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = Companion_getInstance_27().h4b_1;
    var v2 = lhs_1[2] * x + lhs_1[5] * y + lhs_1[8] * z;
    v0 = fastCbrt(v0);
    v1 = fastCbrt(v1);
    v2 = fastCbrt(v2);
    var tmp12 = Companion_getInstance_27().i4b_1;
    var tmp13 = v0;
    var tmp14 = v1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var r2 = v2;
    var v01 = tmp12[0] * tmp13 + tmp12[3] * tmp14 + tmp12[6] * r2;
    var tmp16 = Companion_getInstance_27().i4b_1;
    var tmp17 = v0;
    var tmp18 = v1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var r2_0 = v2;
    var v11 = tmp16[1] * tmp17 + tmp16[4] * tmp18 + tmp16[7] * r2_0;
    var tmp20 = Companion_getInstance_27().i4b_1;
    var tmp21 = v0;
    var tmp22 = v1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var r2_1 = v2;
    var v21 = tmp20[2] * tmp21 + tmp20[5] * tmp22 + tmp20[8] * r2_1;
    return Color_0(v01, v11, v21, a, colorSpace);
  };
  protoOf(Oklab).r49 = function (v) {
    mul3x3Float3(Companion_getInstance_27().h4b_1, v);
    v[0] = fastCbrt(v[0]);
    v[1] = fastCbrt(v[1]);
    v[2] = fastCbrt(v[2]);
    mul3x3Float3(Companion_getInstance_27().i4b_1, v);
    return v;
  };
  function _RenderIntent___init__impl__jceahd(value) {
    return value;
  }
  function _RenderIntent___get_value__impl__ip9mbh($this) {
    return $this;
  }
  function Companion_18() {
    Companion_instance_20 = this;
    this.v49_1 = _RenderIntent___init__impl__jceahd(0);
    this.w49_1 = _RenderIntent___init__impl__jceahd(1);
    this.x49_1 = _RenderIntent___init__impl__jceahd(2);
    this.y49_1 = _RenderIntent___init__impl__jceahd(3);
  }
  var Companion_instance_20;
  function Companion_getInstance_28() {
    if (Companion_instance_20 == null)
      new Companion_18();
    return Companion_instance_20;
  }
  function isSrgb($this, primaries, whitePoint, OETF, EOTF, min, max, id) {
    if (id === 0)
      return true;
    if (!compare_0(primaries, ColorSpaces_getInstance().o43_1)) {
      return false;
    }
    if (!compare(whitePoint, Illuminant_getInstance().h4a_1)) {
      return false;
    }
    if (!(min === 0.0))
      return false;
    if (!(max === 1.0))
      return false;
    var srgb = ColorSpaces_getInstance().s43_1;
    var x = 0.0;
    while (x <= 1.0) {
      if (!compare_1($this, x, OETF, srgb.c46_1))
        return false;
      if (!compare_1($this, x, EOTF, srgb.f46_1))
        return false;
      x = x + 1 / 255.0;
    }
    return true;
  }
  function compare_1($this, point, a, b) {
    var rA = a.k46(point);
    var rB = b.k46(point);
    // Inline function 'kotlin.math.abs' call
    var x = rA - rB;
    return Math.abs(x) <= 0.001;
  }
  function isWideGamut($this, primaries, min, max) {
    return area($this, primaries) / area($this, ColorSpaces_getInstance().p43_1) > 0.9 && contains($this, primaries, ColorSpaces_getInstance().o43_1) || (min < 0.0 && max > 1.0);
  }
  function area($this, primaries) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var det = rx * gy + ry * bx + gx * by - gy * bx - ry * gx - rx * by;
    var r = 0.5 * det;
    return r < 0.0 ? -r : r;
  }
  function cross($this, ax, ay, bx, by) {
    return ax * by - ay * bx;
  }
  function contains($this, p1, p2) {
    // Inline function 'kotlin.floatArrayOf' call
    var p0 = new Float32Array([p1[0] - p2[0], p1[1] - p2[1], p1[2] - p2[2], p1[3] - p2[3], p1[4] - p2[4], p1[5] - p2[5]]);
    if (cross($this, p0[0], p0[1], p2[0] - p2[4], p2[1] - p2[5]) < 0 || cross($this, p2[0] - p2[2], p2[1] - p2[3], p0[0], p0[1]) < 0) {
      return false;
    }
    if (cross($this, p0[2], p0[3], p2[2] - p2[0], p2[3] - p2[1]) < 0 || cross($this, p2[2] - p2[4], p2[3] - p2[5], p0[2], p0[3]) < 0) {
      return false;
    }
    return !(cross($this, p0[4], p0[5], p2[4] - p2[2], p2[5] - p2[3]) < 0 || cross($this, p2[4] - p2[0], p2[5] - p2[1], p0[4], p0[5]) < 0);
  }
  function xyPrimaries($this, primaries) {
    var xyPrimaries = new Float32Array(6);
    if (primaries.length === 9) {
      var sum = primaries[0] + primaries[1] + primaries[2];
      xyPrimaries[0] = primaries[0] / sum;
      xyPrimaries[1] = primaries[1] / sum;
      sum = primaries[3] + primaries[4] + primaries[5];
      xyPrimaries[2] = primaries[3] / sum;
      xyPrimaries[3] = primaries[4] / sum;
      sum = primaries[6] + primaries[7] + primaries[8];
      xyPrimaries[4] = primaries[6] / sum;
      xyPrimaries[5] = primaries[7] / sum;
    } else {
      // Inline function 'kotlin.collections.copyInto' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = primaries;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, xyPrimaries, 0, 0, 6);
    }
    return xyPrimaries;
  }
  function computeXYZMatrix($this, primaries, whitePoint) {
    var rx = primaries[0];
    var ry = primaries[1];
    var gx = primaries[2];
    var gy = primaries[3];
    var bx = primaries[4];
    var by = primaries[5];
    var wx = whitePoint.s49_1;
    var wy = whitePoint.t49_1;
    var oneRxRy = (1 - rx) / ry;
    var oneGxGy = (1 - gx) / gy;
    var oneBxBy = (1 - bx) / by;
    var oneWxWy = (1 - wx) / wy;
    var rxRy = rx / ry;
    var gxGy = gx / gy;
    var bxBy = bx / by;
    var wxWy = wx / wy;
    var byNumerator = (oneWxWy - oneRxRy) * (gxGy - rxRy) - (wxWy - rxRy) * (oneGxGy - oneRxRy);
    var byDenominator = (oneBxBy - oneRxRy) * (gxGy - rxRy) - (bxBy - rxRy) * (oneGxGy - oneRxRy);
    var bY = byNumerator / byDenominator;
    var gY = (wxWy - rxRy - bY * (bxBy - rxRy)) / (gxGy - rxRy);
    var rY = 1.0 - gY - bY;
    var rYRy = rY / ry;
    var gYGy = gY / gy;
    var bYBy = bY / by;
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([rYRy * rx, rY, rYRy * (1.0 - rx - ry), gYGy * gx, gY, gYGy * (1.0 - gx - gy), bYBy * bx, bY, bYBy * (1.0 - bx - by)]);
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(function_0) {
    this.o4b_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).k46 = function (double) {
    return this.o4b_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).q3 = function () {
    return this.o4b_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0).hashCode = function () {
    return hashCode(this.q3());
  };
  function Rgb$Companion$DoubleIdentity$lambda(d) {
    return d;
  }
  function Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, $this) {
    var tmp;
    if (function_0.u4b_1 === 0.0 && function_0.v4b_1 === 0.0) {
      var tmp_0 = Rgb$_init_$lambda_yyl4se(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_0);
    } else {
      var tmp_1 = Rgb$_init_$lambda_yyl4se_0(function_0);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_1);
    }
    var tmp_2 = tmp;
    var tmp_3;
    if (function_0.u4b_1 === 0.0 && function_0.v4b_1 === 0.0) {
      var tmp_4 = Rgb$_init_$lambda_yyl4se_1(function_0);
      tmp_3 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_4);
    } else {
      var tmp_5 = Rgb$_init_$lambda_yyl4se_2(function_0);
      tmp_3 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(tmp_5);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_2, tmp_3, 0.0, 1.0, function_0, id);
    return $this;
  }
  function Rgb_init_$Create$(name, primaries, whitePoint, function_0, id) {
    return Rgb_init_$Init$(name, primaries, whitePoint, function_0, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, $this) {
    var tmp;
    if (gamma === 1.0) {
      tmp = Companion_getInstance_29().w4b_1;
    } else {
      var tmp_0 = Rgb$_init_$lambda_yyl4se_3(gamma);
      tmp = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_0);
    }
    var tmp_1 = tmp;
    var tmp_2;
    if (gamma === 1.0) {
      tmp_2 = Companion_getInstance_29().w4b_1;
    } else {
      var tmp_3 = Rgb$_init_$lambda_yyl4se_4(gamma);
      tmp_2 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(tmp_3);
    }
    Rgb.call($this, name, primaries, whitePoint, null, tmp_1, tmp_2, min, max, new TransferParameters(gamma, 1.0, 0.0, 0.0, 0.0), id);
    return $this;
  }
  function Rgb_init_$Create$_0(name, primaries, whitePoint, gamma, min, max, id) {
    return Rgb_init_$Init$_0(name, primaries, whitePoint, gamma, min, max, id, objectCreate(protoOf(Rgb)));
  }
  function Rgb_init_$Init$_1(colorSpace, transform, whitePoint, $this) {
    Rgb.call($this, colorSpace.u44_1, colorSpace.z45_1, whitePoint, transform, colorSpace.c46_1, colorSpace.f46_1, colorSpace.w45_1, colorSpace.x45_1, colorSpace.y45_1, -1);
    return $this;
  }
  function Rgb_init_$Create$_1(colorSpace, transform, whitePoint) {
    return Rgb_init_$Init$_1(colorSpace, transform, whitePoint, objectCreate(protoOf(Rgb)));
  }
  function Companion_19() {
    Companion_instance_21 = this;
    var tmp = this;
    var tmp_0 = Rgb$Companion$DoubleIdentity$lambda;
    tmp.w4b_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_0(tmp_0);
  }
  var Companion_instance_21;
  function Companion_getInstance_29() {
    if (Companion_instance_21 == null)
      new Companion_19();
    return Companion_instance_21;
  }
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(function_0) {
    this.x4b_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).k46 = function (double) {
    return this.x4b_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).q3 = function () {
    return this.x4b_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1).hashCode = function () {
    return hashCode(this.q3());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(function_0) {
    this.y4b_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).k46 = function (double) {
    return this.y4b_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).q3 = function () {
    return this.y4b_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2).hashCode = function () {
    return hashCode(this.q3());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3(function_0) {
    this.z4b_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).k46 = function (double) {
    return this.z4b_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).q3 = function () {
    return this.z4b_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_3).hashCode = function () {
    return hashCode(this.q3());
  };
  function sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4(function_0) {
    this.a4c_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).k46 = function (double) {
    return this.a4c_1(double);
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).q3 = function () {
    return this.a4c_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, DoubleFunction) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_4).hashCode = function () {
    return hashCode(this.q3());
  };
  function Rgb$oetf$lambda(this$0) {
    return function (x) {
      return coerceIn(this$0.c46_1.k46(x), this$0.w45_1, this$0.x45_1);
    };
  }
  function Rgb$oetfFunc$lambda(this$0) {
    return function (x) {
      return coerceIn(this$0.c46_1.k46(x), this$0.w45_1, this$0.x45_1);
    };
  }
  function Rgb$eotf$lambda(this$0) {
    return function (x) {
      return this$0.f46_1.k46(coerceIn(x, this$0.w45_1, this$0.x45_1));
    };
  }
  function Rgb$eotfFunc$lambda(this$0) {
    return function (x) {
      return this$0.f46_1.k46(coerceIn(x, this$0.w45_1, this$0.x45_1));
    };
  }
  function Rgb$_init_$lambda_yyl4se($function) {
    return function (x) {
      return rcpResponse(x, $function.q4b_1, $function.r4b_1, $function.s4b_1, $function.t4b_1, $function.p4b_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_0($function) {
    return function (x) {
      return rcpResponse_0(x, $function.q4b_1, $function.r4b_1, $function.s4b_1, $function.t4b_1, $function.u4b_1, $function.v4b_1, $function.p4b_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_1($function) {
    return function (x) {
      return response(x, $function.q4b_1, $function.r4b_1, $function.s4b_1, $function.t4b_1, $function.p4b_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_2($function) {
    return function (x) {
      return response_0(x, $function.q4b_1, $function.r4b_1, $function.s4b_1, $function.t4b_1, $function.u4b_1, $function.v4b_1, $function.p4b_1);
    };
  }
  function Rgb$_init_$lambda_yyl4se_3($gamma) {
    return function (x) {
      var tmp0 = x < 0.0 ? 0.0 : x;
      // Inline function 'kotlin.math.pow' call
      var x_0 = 1.0 / $gamma;
      return Math.pow(tmp0, x_0);
    };
  }
  function Rgb$_init_$lambda_yyl4se_4($gamma) {
    return function (x) {
      var tmp0 = x < 0.0 ? 0.0 : x;
      // Inline function 'kotlin.math.pow' call
      var x_0 = $gamma;
      return Math.pow(tmp0, x_0);
    };
  }
  function Rgb(name, primaries, whitePoint, transform, oetf, eotf, min, max, transferParameters, id) {
    Companion_getInstance_29();
    ColorSpace.call(this, name, Companion_getInstance_23().o45_1, id);
    this.v45_1 = whitePoint;
    this.w45_1 = min;
    this.x45_1 = max;
    this.y45_1 = transferParameters;
    this.c46_1 = oetf;
    var tmp = this;
    tmp.d46_1 = Rgb$oetf$lambda(this);
    var tmp_0 = this;
    var tmp_1 = Rgb$oetfFunc$lambda(this);
    tmp_0.e46_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_1(tmp_1);
    this.f46_1 = eotf;
    var tmp_2 = this;
    tmp_2.g46_1 = Rgb$eotf$lambda(this);
    var tmp_3 = this;
    var tmp_4 = Rgb$eotfFunc$lambda(this);
    tmp_3.h46_1 = new sam$androidx_compose_ui_graphics_colorspace_DoubleFunction$0_2(tmp_4);
    if (!(primaries.length === 6) && !(primaries.length === 9)) {
      throw IllegalArgumentException_init_$Create$("The color space's primaries must be defined as an array of 6 floats in xyY or 9 floats in XYZ");
    }
    if (this.w45_1 >= this.x45_1) {
      throw IllegalArgumentException_init_$Create$('Invalid range: min=' + this.w45_1 + ', max=' + this.x45_1 + '; min must be strictly < max');
    }
    this.z45_1 = xyPrimaries(Companion_getInstance_29(), primaries);
    if (transform == null) {
      this.a46_1 = computeXYZMatrix(Companion_getInstance_29(), this.z45_1, this.v45_1);
    } else {
      if (!(transform.length === 9)) {
        throw IllegalArgumentException_init_$Create$('Transform must have 9 entries! Has ' + transform.length);
      }
      this.a46_1 = transform;
    }
    this.b46_1 = inverse3x3(this.a46_1);
    this.i46_1 = isWideGamut(Companion_getInstance_29(), this.z45_1, this.w45_1, this.x45_1);
    this.j46_1 = isSrgb(Companion_getInstance_29(), this.z45_1, this.v45_1, oetf, eotf, this.w45_1, this.x45_1, id);
  }
  protoOf(Rgb).k45 = function () {
    return this.j46_1;
  };
  protoOf(Rgb).m45 = function (component) {
    return this.w45_1;
  };
  protoOf(Rgb).n45 = function (component) {
    return this.x45_1;
  };
  protoOf(Rgb).m49 = function (v) {
    v[0] = this.h46_1.k46(v[0]);
    v[1] = this.h46_1.k46(v[1]);
    v[2] = this.h46_1.k46(v[2]);
    return mul3x3Float3(this.a46_1, v);
  };
  protoOf(Rgb).n49 = function (v0, v1, v2) {
    var v00 = this.h46_1.k46(v0);
    var v10 = this.h46_1.k46(v1);
    var v20 = this.h46_1.k46(v2);
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = this.a46_1;
    var x = lhs[0] * v00 + lhs[3] * v10 + lhs[6] * v20;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = this.a46_1;
    var y = lhs_0[1] * v00 + lhs_0[4] * v10 + lhs_0[7] * v20;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1_0 = toLong(toRawBits(x));
    var v2_0 = toLong(toRawBits(y));
    return v1_0.h3(32).l3(v2_0.k3(new Long(-1, 0)));
  };
  protoOf(Rgb).o49 = function (v0, v1, v2) {
    var v00 = this.h46_1.k46(v0);
    var v10 = this.h46_1.k46(v1);
    var v20 = this.h46_1.k46(v2);
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs = this.a46_1;
    var z = lhs[2] * v00 + lhs[5] * v10 + lhs[8] * v20;
    return z;
  };
  protoOf(Rgb).p49 = function (x, y, z, a, colorSpace) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_0' call
    var lhs = this.b46_1;
    var v0 = lhs[0] * x + lhs[3] * y + lhs[6] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_1' call
    var lhs_0 = this.b46_1;
    var v1 = lhs_0[1] * x + lhs_0[4] * y + lhs_0[7] * z;
    // Inline function 'androidx.compose.ui.graphics.colorspace.mul3x3Float3_2' call
    var lhs_1 = this.b46_1;
    var v2 = lhs_1[2] * x + lhs_1[5] * y + lhs_1[8] * z;
    v0 = this.e46_1.k46(v0);
    v1 = this.e46_1.k46(v1);
    v2 = this.e46_1.k46(v2);
    return Color_0(v0, v1, v2, a, colorSpace);
  };
  protoOf(Rgb).r49 = function (v) {
    mul3x3Float3(this.b46_1, v);
    v[0] = this.e46_1.k46(v[0]);
    v[1] = this.e46_1.k46(v[1]);
    v[2] = this.e46_1.k46(v[2]);
    return v;
  };
  protoOf(Rgb).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!protoOf(ColorSpace).equals.call(this, other))
      return false;
    var rgb = other instanceof Rgb ? other : THROW_CCE();
    if (!(compareTo(rgb.w45_1, this.w45_1) === 0))
      return false;
    if (!(compareTo(rgb.x45_1, this.x45_1) === 0))
      return false;
    if (!this.v45_1.equals(rgb.v45_1))
      return false;
    if (!contentEquals(this.z45_1, rgb.z45_1))
      return false;
    if (!(this.y45_1 == null)) {
      return equals(this.y45_1, rgb.y45_1);
    } else if (rgb.y45_1 == null) {
      return true;
    }
    return !equals(this.c46_1, rgb.c46_1) ? false : equals(this.f46_1, rgb.f46_1);
  };
  protoOf(Rgb).hashCode = function () {
    var result = protoOf(ColorSpace).hashCode.call(this);
    result = imul(31, result) + this.v45_1.hashCode() | 0;
    result = imul(31, result) + contentHashCode(this.z45_1) | 0;
    result = imul(31, result) + (!(this.w45_1 === 0.0) ? toBits(this.w45_1) : 0) | 0;
    result = imul(31, result) + (!(this.x45_1 === 0.0) ? toBits(this.x45_1) : 0) | 0;
    result = imul(31, result) + (!(this.y45_1 == null) ? this.y45_1.hashCode() : 0) | 0;
    if (this.y45_1 == null) {
      result = imul(31, result) + hashCode(this.c46_1) | 0;
      result = imul(31, result) + hashCode(this.f46_1) | 0;
    }
    return result;
  };
  function DoubleFunction() {
  }
  function TransferParameters(gamma, a, b, c, d, e, f) {
    e = e === VOID ? 0.0 : e;
    f = f === VOID ? 0.0 : f;
    this.p4b_1 = gamma;
    this.q4b_1 = a;
    this.r4b_1 = b;
    this.s4b_1 = c;
    this.t4b_1 = d;
    this.u4b_1 = e;
    this.v4b_1 = f;
    if (isNaN_1(this.q4b_1) || isNaN_1(this.r4b_1) || isNaN_1(this.s4b_1) || isNaN_1(this.t4b_1) || isNaN_1(this.u4b_1) || isNaN_1(this.v4b_1) || isNaN_1(this.p4b_1)) {
      throw IllegalArgumentException_init_$Create$('Parameters cannot be NaN');
    }
    if (!(this.t4b_1 >= 0.0 && this.t4b_1 <= 1.0)) {
      throw IllegalArgumentException_init_$Create$('Parameter d must be in the range [0..1], was ' + ('' + this.t4b_1));
    }
    if (this.t4b_1 === 0.0 && (this.q4b_1 === 0.0 || this.p4b_1 === 0.0)) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, the transfer function is constant');
    }
    if (this.t4b_1 >= 1.0 && this.s4b_1 === 0.0) {
      throw IllegalArgumentException_init_$Create$('Parameter c is zero, the transfer function is constant');
    }
    if ((this.q4b_1 === 0.0 || this.p4b_1 === 0.0) && this.s4b_1 === 0.0) {
      throw IllegalArgumentException_init_$Create$('Parameter a or g is zero, and c is zero, the transfer function is constant');
    }
    if (this.s4b_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be increasing');
    }
    if (this.q4b_1 < 0.0 || this.p4b_1 < 0.0) {
      throw IllegalArgumentException_init_$Create$('The transfer function must be positive or increasing');
    }
  }
  protoOf(TransferParameters).toString = function () {
    return 'TransferParameters(gamma=' + this.p4b_1 + ', a=' + this.q4b_1 + ', b=' + this.r4b_1 + ', c=' + this.s4b_1 + ', d=' + this.t4b_1 + ', e=' + this.u4b_1 + ', f=' + this.v4b_1 + ')';
  };
  protoOf(TransferParameters).hashCode = function () {
    var result = getNumberHashCode(this.p4b_1);
    result = imul(result, 31) + getNumberHashCode(this.q4b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.r4b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.s4b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.t4b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u4b_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.v4b_1) | 0;
    return result;
  };
  protoOf(TransferParameters).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransferParameters))
      return false;
    var tmp0_other_with_cast = other instanceof TransferParameters ? other : THROW_CCE();
    if (!equals(this.p4b_1, tmp0_other_with_cast.p4b_1))
      return false;
    if (!equals(this.q4b_1, tmp0_other_with_cast.q4b_1))
      return false;
    if (!equals(this.r4b_1, tmp0_other_with_cast.r4b_1))
      return false;
    if (!equals(this.s4b_1, tmp0_other_with_cast.s4b_1))
      return false;
    if (!equals(this.t4b_1, tmp0_other_with_cast.t4b_1))
      return false;
    if (!equals(this.u4b_1, tmp0_other_with_cast.u4b_1))
      return false;
    if (!equals(this.v4b_1, tmp0_other_with_cast.v4b_1))
      return false;
    return true;
  };
  function WhitePoint(x, y) {
    this.s49_1 = x;
    this.t49_1 = y;
  }
  protoOf(WhitePoint).u49 = function () {
    // Inline function 'kotlin.floatArrayOf' call
    return new Float32Array([this.s49_1 / this.t49_1, 1.0, (1.0 - this.s49_1 - this.t49_1) / this.t49_1]);
  };
  protoOf(WhitePoint).toString = function () {
    return 'WhitePoint(x=' + this.s49_1 + ', y=' + this.t49_1 + ')';
  };
  protoOf(WhitePoint).hashCode = function () {
    var result = getNumberHashCode(this.s49_1);
    result = imul(result, 31) + getNumberHashCode(this.t49_1) | 0;
    return result;
  };
  protoOf(WhitePoint).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WhitePoint))
      return false;
    var tmp0_other_with_cast = other instanceof WhitePoint ? other : THROW_CCE();
    if (!equals(this.s49_1, tmp0_other_with_cast.s49_1))
      return false;
    if (!equals(this.t49_1, tmp0_other_with_cast.t49_1))
      return false;
    return true;
  };
  function Xyz(name, id) {
    ColorSpace.call(this, name, Companion_getInstance_23().p45_1, id);
  }
  protoOf(Xyz).m45 = function (component) {
    return -2.0;
  };
  protoOf(Xyz).n45 = function (component) {
    return 2.0;
  };
  protoOf(Xyz).m49 = function (v) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v[0];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = this_0 < -2.0 ? -2.0 : this_0;
    v[0] = this_1 > 2.0 ? 2.0 : this_1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_2 = v[1];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_3 = this_2 < -2.0 ? -2.0 : this_2;
    v[1] = this_3 > 2.0 ? 2.0 : this_3;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_4 = v[2];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_5 = this_4 < -2.0 ? -2.0 : this_4;
    v[2] = this_5 > 2.0 ? 2.0 : this_5;
    return v;
  };
  protoOf(Xyz).n49 = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v0 < -2.0 ? -2.0 : v0;
    var tmp6 = this_0 > 2.0 ? 2.0 : this_0;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = v1 < -2.0 ? -2.0 : v1;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this_1 > 2.0 ? 2.0 : this_1;
    var v1_0 = toLong(toRawBits(tmp6));
    var v2_0 = toLong(toRawBits(val2));
    return v1_0.h3(32).l3(v2_0.k3(new Long(-1, 0)));
  };
  protoOf(Xyz).o49 = function (v0, v1, v2) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = v2 < -2.0 ? -2.0 : v2;
    return this_0 > 2.0 ? 2.0 : this_0;
  };
  protoOf(Xyz).p49 = function (x, y, z, a, colorSpace) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = x < -2.0 ? -2.0 : x;
    var tmp = this_0 > 2.0 ? 2.0 : this_0;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = y < -2.0 ? -2.0 : y;
    var tmp_0 = this_1 > 2.0 ? 2.0 : this_1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_2 = z < -2.0 ? -2.0 : z;
    var tmp$ret$11 = this_2 > 2.0 ? 2.0 : this_2;
    return Color_0(tmp, tmp_0, tmp$ret$11, a, colorSpace);
  };
  protoOf(Xyz).r49 = function (v) {
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_0 = v[0];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_1 = this_0 < -2.0 ? -2.0 : this_0;
    v[0] = this_1 > 2.0 ? 2.0 : this_1;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_2 = v[1];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_3 = this_2 < -2.0 ? -2.0 : this_2;
    v[1] = this_3 > 2.0 ? 2.0 : this_3;
    // Inline function 'androidx.compose.ui.graphics.colorspace.Xyz.clamp' call
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_4 = v[2];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_5 = this_4 < -2.0 ? -2.0 : this_4;
    v[2] = this_5 > 2.0 ? 2.0 : this_5;
    return v;
  };
  function obtainFillPaint($this) {
    var tmp0_elvis_lhs = $this.g4c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = Paint();
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      this_0.i4c(Companion_getInstance_16().d48_1);
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainFillPaint.<anonymous>' call
      $this.g4c_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function obtainStrokePaint($this) {
    var tmp0_elvis_lhs = $this.h4c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = Paint();
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      this_0.i4c(Companion_getInstance_16().e48_1);
      // Inline function 'kotlin.also' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.obtainStrokePaint.<anonymous>' call
      $this.h4c_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function selectPaint($this, drawStyle) {
    var tmp;
    if (equals(drawStyle, Fill_getInstance())) {
      tmp = obtainFillPaint($this);
    } else {
      if (drawStyle instanceof Stroke) {
        // Inline function 'kotlin.apply' call
        var this_0 = obtainStrokePaint($this);
        // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.selectPaint.<anonymous>' call
        if (!(this_0.t3q() === drawStyle.j4c_1)) {
          this_0.s3q(drawStyle.j4c_1);
        }
        if (!(this_0.p4c() === drawStyle.l4c_1)) {
          this_0.o4c(drawStyle.l4c_1);
        }
        if (!(this_0.r4c() === drawStyle.k4c_1)) {
          this_0.q4c(drawStyle.k4c_1);
        }
        if (!(this_0.t4c() === drawStyle.m4c_1)) {
          this_0.s4c(drawStyle.m4c_1);
        }
        if (!equals(this_0.v4c(), drawStyle.n4c_1)) {
          this_0.u4c(drawStyle.n4c_1);
        }
        tmp = this_0;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = selectPaint($this, style);
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    if (!(brush == null)) {
      brush.r42($this.z4c(), this_0, alpha);
    } else {
      if (!(this_0.y3q() == null)) {
        this_0.x3q(null);
      }
      if (!equals(this_0.x4c(), Companion_getInstance_11().x44_1)) {
        this_0.w4c(Companion_getInstance_11().x44_1);
      }
      if (!(this_0.z3z() === alpha)) {
        this_0.y4c(alpha);
      }
    }
    if (!equals(this_0.b4d(), colorFilter)) {
      this_0.a4d(colorFilter);
    }
    if (!(this_0.d4d() === blendMode)) {
      this_0.c4d(blendMode);
    }
    if (!(this_0.f4d() === filterQuality)) {
      this_0.e4d(filterQuality);
    }
    return this_0;
  }
  function configurePaint$default($this, brush, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_30().w47_1 : filterQuality;
    return configurePaint($this, brush, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality) {
    // Inline function 'kotlin.apply' call
    var this_0 = selectPaint($this, style);
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.configurePaint.<anonymous>' call
    var targetColor = modulate(color, $this, alpha);
    if (!equals(this_0.x4c(), targetColor)) {
      this_0.w4c(targetColor);
    }
    if (!(this_0.y3q() == null)) {
      this_0.x3q(null);
    }
    if (!equals(this_0.b4d(), colorFilter)) {
      this_0.a4d(colorFilter);
    }
    if (!(this_0.d4d() === blendMode)) {
      this_0.c4d(blendMode);
    }
    if (!(this_0.f4d() === filterQuality)) {
      this_0.e4d(filterQuality);
    }
    return this_0;
  }
  function configurePaint$default_0($this, color, style, alpha, colorFilter, blendMode, filterQuality, $super) {
    filterQuality = filterQuality === VOID ? Companion_getInstance_30().w47_1 : filterQuality;
    return configurePaint_0($this, color, style, alpha, colorFilter, blendMode, filterQuality);
  }
  function modulate(_this__u8e3s4, $this, alpha) {
    var tmp;
    if (!(alpha === 1.0)) {
      tmp = Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function DrawParams(density, layoutDirection, canvas, size) {
    density = density === VOID ? get_DefaultDensity() : density;
    layoutDirection = layoutDirection === VOID ? LayoutDirection_Ltr_getInstance() : layoutDirection;
    canvas = canvas === VOID ? new EmptyCanvas() : canvas;
    size = size === VOID ? Companion_getInstance_0().b3h_1 : size;
    this.g4d_1 = density;
    this.h4d_1 = layoutDirection;
    this.i4d_1 = canvas;
    this.j4d_1 = size;
  }
  protoOf(DrawParams).ag = function () {
    return this.g4d_1;
  };
  protoOf(DrawParams).bg = function () {
    return this.h4d_1;
  };
  protoOf(DrawParams).k4d = function () {
    return this.i4d_1;
  };
  protoOf(DrawParams).l4d = function () {
    return this.j4d_1;
  };
  protoOf(DrawParams).toString = function () {
    return 'DrawParams(density=' + toString(this.g4d_1) + ', layoutDirection=' + this.h4d_1.toString() + ', canvas=' + toString(this.i4d_1) + ', size=' + Size__toString_impl_o87ni8(this.j4d_1) + ')';
  };
  protoOf(DrawParams).hashCode = function () {
    var result = hashCode(this.g4d_1);
    result = imul(result, 31) + this.h4d_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.i4d_1) | 0;
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.j4d_1) | 0;
    return result;
  };
  protoOf(DrawParams).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DrawParams))
      return false;
    var tmp0_other_with_cast = other instanceof DrawParams ? other : THROW_CCE();
    if (!equals(this.g4d_1, tmp0_other_with_cast.g4d_1))
      return false;
    if (!this.h4d_1.equals(tmp0_other_with_cast.h4d_1))
      return false;
    if (!equals(this.i4d_1, tmp0_other_with_cast.i4d_1))
      return false;
    if (!equals(this.j4d_1, tmp0_other_with_cast.j4d_1))
      return false;
    return true;
  };
  function CanvasDrawScope$drawContext$1(this$0) {
    this.o4d_1 = this$0;
    this.m4d_1 = asDrawTransform(this);
    this.n4d_1 = null;
  }
  protoOf(CanvasDrawScope$drawContext$1).p4d = function (value) {
    this.o4d_1.e4c_1.i4d_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).j3t = function () {
    return this.o4d_1.e4c_1.i4d_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).q4d = function (value) {
    this.o4d_1.e4c_1.j4d_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).z4c = function () {
    return this.o4d_1.e4c_1.j4d_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).r4d = function () {
    return this.m4d_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).s4d = function (value) {
    this.o4d_1.e4c_1.h4d_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).t4d = function () {
    return this.o4d_1.e4c_1.h4d_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).u4d = function (value) {
    this.o4d_1.e4c_1.g4d_1 = value;
  };
  protoOf(CanvasDrawScope$drawContext$1).k3h = function () {
    return this.o4d_1.e4c_1.g4d_1;
  };
  protoOf(CanvasDrawScope$drawContext$1).v4d = function (_set____db54di) {
    this.n4d_1 = _set____db54di;
  };
  protoOf(CanvasDrawScope$drawContext$1).w4d = function () {
    return this.n4d_1;
  };
  function CanvasDrawScope() {
    this.e4c_1 = new DrawParams();
    var tmp = this;
    tmp.f4c_1 = new CanvasDrawScope$drawContext$1(this);
    this.g4c_1 = null;
    this.h4c_1 = null;
  }
  protoOf(CanvasDrawScope).t4d = function () {
    return this.e4c_1.h4d_1;
  };
  protoOf(CanvasDrawScope).k3h = function () {
    return this.e4c_1.g4d_1.k3h();
  };
  protoOf(CanvasDrawScope).u3h = function () {
    return this.e4c_1.g4d_1.u3h();
  };
  protoOf(CanvasDrawScope).x4d = function () {
    return this.f4c_1;
  };
  protoOf(CanvasDrawScope).c48 = function (brush, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.e4c_1.i4d_1.i43(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).z47 = function (color, topLeft, size, alpha, style, colorFilter, blendMode) {
    return this.e4c_1.i4d_1.i43(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).a4e = function (image, srcOffset, srcSize, dstOffset, dstSize, alpha, style, colorFilter, blendMode, filterQuality) {
    return this.e4c_1.i4d_1.m43(image, srcOffset, srcSize, dstOffset, dstSize, configurePaint(this, null, style, alpha, colorFilter, blendMode, filterQuality));
  };
  protoOf(CanvasDrawScope).b48 = function (brush, topLeft, size, cornerRadius, alpha, style, colorFilter, blendMode) {
    return this.e4c_1.i4d_1.j43(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius), configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).y47 = function (color, topLeft, size, cornerRadius, style, alpha, colorFilter, blendMode) {
    return this.e4c_1.i4d_1.j43(_Offset___get_x__impl__xvi35n(topLeft), _Offset___get_y__impl__8bzhra(topLeft), _Offset___get_x__impl__xvi35n(topLeft) + _Size___get_width__impl__58y75t(size), _Offset___get_y__impl__8bzhra(topLeft) + _Size___get_height__impl__a04p02(size), _CornerRadius___get_x__impl__1594cn(cornerRadius), _CornerRadius___get_y__impl__tyvleu(cornerRadius), configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).d4e = function (color, radius, center, alpha, style, colorFilter, blendMode) {
    return this.e4c_1.i4d_1.k43(center, radius, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).x47 = function (path, color, alpha, style, colorFilter, blendMode) {
    return this.e4c_1.i4d_1.l43(path, configurePaint$default_0(this, color, style, alpha, colorFilter, blendMode));
  };
  protoOf(CanvasDrawScope).a48 = function (path, brush, alpha, style, colorFilter, blendMode) {
    return this.e4c_1.i4d_1.l43(path, configurePaint$default(this, brush, style, alpha, colorFilter, blendMode));
  };
  function asDrawTransform(_this__u8e3s4) {
    return new asDrawTransform$1(_this__u8e3s4);
  }
  function asDrawTransform$1($this_asDrawTransform) {
    this.i4e_1 = $this_asDrawTransform;
  }
  protoOf(asDrawTransform$1).a43 = function (left, top, right, bottom, clipOp) {
    this.i4e_1.j3t().a43(left, top, right, bottom, clipOp);
  };
  protoOf(asDrawTransform$1).w42 = function (left, top) {
    this.i4e_1.j3t().w42(left, top);
  };
  protoOf(asDrawTransform$1).j4e = function (scaleX, scaleY, pivot) {
    // Inline function 'kotlin.apply' call
    var this_0 = this.i4e_1.j3t();
    // Inline function 'androidx.compose.ui.graphics.drawscope.<no name provided>.scale.<anonymous>' call
    this_0.w42(_Offset___get_x__impl__xvi35n(pivot), _Offset___get_y__impl__8bzhra(pivot));
    this_0.x42(scaleX, scaleY);
    this_0.w42(-_Offset___get_x__impl__xvi35n(pivot), -_Offset___get_y__impl__8bzhra(pivot));
  };
  function get_DefaultDensity() {
    _init_properties_DrawContext_kt__bfvdzt();
    return DefaultDensity;
  }
  var DefaultDensity;
  function DrawContext() {
  }
  var properties_initialized_DrawContext_kt_nwly1n;
  function _init_properties_DrawContext_kt__bfvdzt() {
    if (!properties_initialized_DrawContext_kt_nwly1n) {
      properties_initialized_DrawContext_kt_nwly1n = true;
      DefaultDensity = Density(1.0, 1.0);
    }
  }
  function DrawStyle() {
  }
  function offsetSize(_this__u8e3s4, $this, offset) {
    return Size(_Size___get_width__impl__58y75t(_this__u8e3s4) - _Offset___get_x__impl__xvi35n(offset), _Size___get_height__impl__a04p02(_this__u8e3s4) - _Offset___get_y__impl__8bzhra(offset));
  }
  function Companion_20() {
    Companion_instance_22 = this;
    this.v47_1 = Companion_getInstance_9().q41_1;
    this.w47_1 = Companion_getInstance_13().t46_1;
  }
  var Companion_instance_22;
  function Companion_getInstance_30() {
    if (Companion_instance_22 == null)
      new Companion_20();
    return Companion_instance_22;
  }
  function DrawScope() {
  }
  function Fill() {
    Fill_instance = this;
    DrawStyle.call(this);
  }
  var Fill_instance;
  function Fill_getInstance() {
    if (Fill_instance == null)
      new Fill();
    return Fill_instance;
  }
  function Companion_21() {
    Companion_instance_23 = this;
    this.k4e_1 = 0.0;
    this.l4e_1 = 4.0;
    this.m4e_1 = Companion_getInstance_20().z48_1;
    this.n4e_1 = Companion_getInstance_21().c49_1;
  }
  var Companion_instance_23;
  function Companion_getInstance_31() {
    if (Companion_instance_23 == null)
      new Companion_21();
    return Companion_instance_23;
  }
  function Stroke(width, miter, cap, join, pathEffect) {
    Companion_getInstance_31();
    width = width === VOID ? 0.0 : width;
    var tmp;
    if (miter === VOID) {
      Companion_getInstance_31();
      tmp = 4.0;
    } else {
      tmp = miter;
    }
    miter = tmp;
    cap = cap === VOID ? Companion_getInstance_31().m4e_1 : cap;
    join = join === VOID ? Companion_getInstance_31().n4e_1 : join;
    pathEffect = pathEffect === VOID ? null : pathEffect;
    DrawStyle.call(this);
    this.j4c_1 = width;
    this.k4c_1 = miter;
    this.l4c_1 = cap;
    this.m4c_1 = join;
    this.n4c_1 = pathEffect;
  }
  protoOf(Stroke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stroke))
      return false;
    if (!(this.j4c_1 === other.j4c_1))
      return false;
    if (!(this.k4c_1 === other.k4c_1))
      return false;
    if (!(this.l4c_1 === other.l4c_1))
      return false;
    if (!(this.m4c_1 === other.m4c_1))
      return false;
    if (!equals(this.n4c_1, other.n4c_1))
      return false;
    return true;
  };
  protoOf(Stroke).hashCode = function () {
    var result = getNumberHashCode(this.j4c_1);
    result = imul(31, result) + getNumberHashCode(this.k4c_1) | 0;
    result = imul(31, result) + StrokeCap__hashCode_impl_posxk8(this.l4c_1) | 0;
    result = imul(31, result) + StrokeJoin__hashCode_impl_3pyh8w(this.m4c_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.n4c_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(Stroke).toString = function () {
    return 'Stroke(width=' + this.j4c_1 + ', miter=' + this.k4c_1 + ', cap=' + StrokeCap__toString_impl_3xn0rd(this.l4c_1) + ', join=' + StrokeJoin__toString_impl_ph4e1r(this.m4c_1) + ', pathEffect=' + toString_0(this.n4c_1) + ')';
  };
  function EmptyCanvas() {
  }
  protoOf(EmptyCanvas).t42 = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).u42 = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).v42 = function (bounds, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).w42 = function (dx, dy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).x42 = function (sx, sy) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).y42 = function (matrix) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).a43 = function (left, top, right, bottom, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).f43 = function (path, clipOp) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).i43 = function (left, top, right, bottom, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).j43 = function (left, top, right, bottom, radiusX, radiusY, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).k43 = function (center, radius, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).l43 = function (path, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(EmptyCanvas).m43 = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    throw UnsupportedOperationException_init_$Create$();
  };
  function access$_get_dependency__eau0ww($this) {
    return $this.o4e_1;
  }
  function access$_set_dependency__rek8c($this, _set____db54di) {
    $this.o4e_1 = _set____db54di;
    return Unit_instance;
  }
  function access$_get_oldDependency__6kx1q7($this) {
    return $this.p4e_1;
  }
  function access$_set_oldDependency__lsok8j($this, _set____db54di) {
    $this.p4e_1 = _set____db54di;
    return Unit_instance;
  }
  function access$_get_dependenciesSet__8t5wug($this) {
    return $this.q4e_1;
  }
  function access$_get_oldDependenciesSet__gb53k7($this) {
    return $this.r4e_1;
  }
  function access$_set_oldDependenciesSet__hmq7k5($this, _set____db54di) {
    $this.r4e_1 = _set____db54di;
    return Unit_instance;
  }
  function access$_set_trackingInProgress__dxkhgu($this, _set____db54di) {
    $this.s4e_1 = _set____db54di;
    return Unit_instance;
  }
  function _CompositingStrategy___init__impl__pgr8e(value) {
    return value;
  }
  function Companion_22() {
    Companion_instance_24 = this;
    this.t4e_1 = _CompositingStrategy___init__impl__pgr8e(0);
    this.u4e_1 = _CompositingStrategy___init__impl__pgr8e(1);
    this.v4e_1 = _CompositingStrategy___init__impl__pgr8e(2);
  }
  var Companion_instance_24;
  function Companion_getInstance_32() {
    if (Companion_instance_24 == null)
      new Companion_22();
    return Companion_instance_24;
  }
  function drawLayer(_this__u8e3s4, graphicsLayer) {
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = _this__u8e3s4.x4d().j3t();
    graphicsLayer.h4g(canvas, _this__u8e3s4.x4d().w4d());
  }
  function setOutline(_this__u8e3s4, outline) {
    if (outline instanceof Rectangle) {
      _this__u8e3s4.k4g(Offset(outline.q47_1.i3g_1, outline.q47_1.j3g_1), Size(outline.q47_1.m3g(), outline.q47_1.n3g()));
    } else {
      if (outline instanceof Generic) {
        _this__u8e3s4.j4g(outline.u47_1);
      } else {
        if (outline instanceof Rounded) {
          if (!(outline.s47_1 == null)) {
            _this__u8e3s4.j4g(outline.s47_1);
          } else {
            var rr = outline.r47_1;
            _this__u8e3s4.i4g(Offset(rr.s3g_1, rr.t3g_1), Size(rr.m3g(), rr.n3g()), _CornerRadius___get_x__impl__1594cn(rr.z3g_1));
          }
        }
      }
    }
  }
  function toSkia(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_9().n41_1 ? BlendMode_CLEAR_getInstance() : _this__u8e3s4 === Companion_getInstance_9().o41_1 ? BlendMode_SRC_getInstance() : _this__u8e3s4 === Companion_getInstance_9().p41_1 ? BlendMode_DST_getInstance() : _this__u8e3s4 === Companion_getInstance_9().q41_1 ? BlendMode_SRC_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_9().r41_1 ? BlendMode_DST_OVER_getInstance() : _this__u8e3s4 === Companion_getInstance_9().s41_1 ? BlendMode_SRC_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_9().t41_1 ? BlendMode_DST_IN_getInstance() : _this__u8e3s4 === Companion_getInstance_9().u41_1 ? BlendMode_SRC_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_9().v41_1 ? BlendMode_DST_OUT_getInstance() : _this__u8e3s4 === Companion_getInstance_9().w41_1 ? BlendMode_SRC_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_9().x41_1 ? BlendMode_DST_ATOP_getInstance() : _this__u8e3s4 === Companion_getInstance_9().y41_1 ? BlendMode_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_9().z41_1 ? BlendMode_PLUS_getInstance() : _this__u8e3s4 === Companion_getInstance_9().a42_1 ? BlendMode_MODULATE_getInstance() : _this__u8e3s4 === Companion_getInstance_9().b42_1 ? BlendMode_SCREEN_getInstance() : _this__u8e3s4 === Companion_getInstance_9().c42_1 ? BlendMode_OVERLAY_getInstance() : _this__u8e3s4 === Companion_getInstance_9().d42_1 ? BlendMode_DARKEN_getInstance() : _this__u8e3s4 === Companion_getInstance_9().e42_1 ? BlendMode_LIGHTEN_getInstance() : _this__u8e3s4 === Companion_getInstance_9().f42_1 ? BlendMode_COLOR_DODGE_getInstance() : _this__u8e3s4 === Companion_getInstance_9().g42_1 ? BlendMode_COLOR_BURN_getInstance() : _this__u8e3s4 === Companion_getInstance_9().h42_1 ? BlendMode_HARD_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_9().i42_1 ? BlendMode_SOFT_LIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_9().j42_1 ? BlendMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_9().k42_1 ? BlendMode_EXCLUSION_getInstance() : _this__u8e3s4 === Companion_getInstance_9().l42_1 ? BlendMode_MULTIPLY_getInstance() : _this__u8e3s4 === Companion_getInstance_9().m42_1 ? BlendMode_HUE_getInstance() : _this__u8e3s4 === Companion_getInstance_9().n42_1 ? BlendMode_SATURATION_getInstance() : _this__u8e3s4 === Companion_getInstance_9().o42_1 ? BlendMode_COLOR_getInstance() : _this__u8e3s4 === Companion_getInstance_9().p42_1 ? BlendMode_LUMINOSITY_getInstance() : BlendMode_SRC_OVER_getInstance();
  }
  function prepareTransformationMatrix(matrix, pivotX, pivotY, translationX, translationY, rotationX, rotationY, rotationZ, scaleX, scaleY, cameraDistance) {
    Matrix__reset_impl_4l49i7(matrix);
    Matrix__translate$default_impl_10t8ql(matrix, -pivotX, -pivotY);
    // Inline function 'kotlin.apply' call
    var this_0 = new Matrix(_Matrix___init__impl__q3kp4w());
    // Inline function 'androidx.compose.ui.graphics.prepareTransformationMatrix.<anonymous>' call
    var $this$apply = this_0.c47_1;
    Matrix__rotateZ_impl_2g2pf5($this$apply, rotationZ);
    Matrix__rotateY_impl_2x4btc($this$apply, rotationY);
    Matrix__rotateX_impl_3e5y7j($this$apply, rotationX);
    Matrix__scale$default_impl_snaws9($this$apply, scaleX, scaleY);
    var tmp$ret$0 = this_0.c47_1;
    Matrix__timesAssign_impl_oas521(matrix, tmp$ret$0);
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isZero' call
    // Inline function 'kotlin.math.abs' call
    if (!(Math.abs(rotationX) <= 0.001)) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.ui.graphics.isZero' call
      // Inline function 'kotlin.math.abs' call
      tmp = !(Math.abs(rotationY) <= 0.001);
    }
    if (tmp) {
      // Inline function 'kotlin.apply' call
      var this_1 = new Matrix(_Matrix___init__impl__q3kp4w());
      // Inline function 'androidx.compose.ui.graphics.prepareTransformationMatrix.<anonymous>' call
      var depth = cameraDistance * 72.0;
      var tmp0 = this_1.c47_1;
      // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
      var v = -1.0 / depth;
      _Matrix___get_values__impl__fblr7b(tmp0)[imul(2, 4) + 3 | 0] = v;
      var tmp$ret$5 = this_1.c47_1;
      Matrix__timesAssign_impl_oas521(matrix, tmp$ret$5);
    }
    // Inline function 'kotlin.apply' call
    var this_2 = new Matrix(_Matrix___init__impl__q3kp4w());
    // Inline function 'androidx.compose.ui.graphics.prepareTransformationMatrix.<anonymous>' call
    var $this$apply_0 = this_2.c47_1;
    Matrix__translate$default_impl_10t8ql($this$apply_0, pivotX + translationX, pivotY + translationY);
    var tmp$ret$6 = this_2.c47_1;
    Matrix__timesAssign_impl_oas521(matrix, tmp$ret$6);
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 0 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 1 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(2, 4) + 3 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(0, 4) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(1, 4) + 2 | 0] = 0.0;
    // Inline function 'androidx.compose.ui.graphics.Matrix.set' call
    _Matrix___get_values__impl__fblr7b(matrix)[imul(3, 4) + 2 | 0] = 0.0;
  }
  function toSkiaRect(_this__u8e3s4) {
    return Companion_instance.x3s(_this__u8e3s4.i3g_1, _this__u8e3s4.j3g_1, _this__u8e3s4.k3g_1, _this__u8e3s4.l3g_1);
  }
  function toSkiaRRect(_this__u8e3s4) {
    var radii = new Float32Array(8);
    radii[0] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.w3g_1);
    radii[1] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.w3g_1);
    radii[2] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.x3g_1);
    radii[3] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.x3g_1);
    radii[4] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.y3g_1);
    radii[5] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.y3g_1);
    radii[6] = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4.z3g_1);
    radii[7] = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4.z3g_1);
    return Companion_instance_0.w3s(_this__u8e3s4.s3g_1, _this__u8e3s4.t3g_1, _this__u8e3s4.u3g_1, _this__u8e3s4.v3g_1, radii);
  }
  function toComposeRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.h3l_1, _this__u8e3s4.i3l_1, _this__u8e3s4.j3l_1, _this__u8e3s4.k3l_1);
  }
  function _get_skia__ddpejf(_this__u8e3s4, $this) {
    // Inline function 'kotlin.apply' call
    var this_0 = _this__u8e3s4 instanceof SkiaBackedPaint ? _this__u8e3s4 : THROW_CCE();
    // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.<get-skia>.<anonymous>' call
    this_0.y4g($this.m4g_1);
    return this_0.n4g_1;
  }
  function drawImageRect($this, image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    var bitmap = asSkiaBitmap(image);
    // Inline function 'org.jetbrains.skia.impl.use' call
    var this_0 = Companion_getInstance_3().u3p(bitmap);
    var tmp;
    try {
      // Inline function 'androidx.compose.ui.graphics.SkiaBackedCanvas.drawImageRect.<anonymous>' call
      tmp = $this.l4g_1.u3l(this_0, Companion_instance.y3s(_Offset___get_x__impl__xvi35n(srcOffset), _Offset___get_y__impl__8bzhra(srcOffset), _Size___get_width__impl__58y75t(srcSize), _Size___get_height__impl__a04p02(srcSize)), Companion_instance.y3s(_Offset___get_x__impl__xvi35n(dstOffset), _Offset___get_y__impl__8bzhra(dstOffset), _Size___get_width__impl__58y75t(dstSize), _Size___get_height__impl__a04p02(dstSize)), toSkia_2(paint.f4d(), $this), _get_skia__ddpejf(paint, $this), true);
    }finally {
      this_0.u1x();
    }
  }
  function toSkia_0(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_10().c43_1 ? ClipMode_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_10().d43_1 ? ClipMode_INTERSECT_getInstance() : ClipMode_INTERSECT_getInstance();
  }
  function toSkia_1(_this__u8e3s4, $this) {
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_0 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_1 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_2 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 0 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_3 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_4 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_5 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_6 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 1 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_7 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_8 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_9 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_10 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 2 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_11 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(0, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_12 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(1, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp_13 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(2, 4) + 3 | 0];
    // Inline function 'androidx.compose.ui.graphics.Matrix.get' call
    var tmp$ret$15 = _Matrix___get_values__impl__fblr7b(_this__u8e3s4)[imul(3, 4) + 3 | 0];
    return new Matrix44(new Float32Array([tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp$ret$15]));
  }
  function toSkia_2(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_13().t46_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NONE_getInstance()) : _this__u8e3s4 === Companion_getInstance_13().u46_1 ? new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NEAREST_getInstance()) : _this__u8e3s4 === Companion_getInstance_13().v46_1 ? new CubicResampler(1 / 3.0, 1 / 3.0) : new FilterMipmap(FilterMode_NEAREST_getInstance(), MipmapMode_NONE_getInstance());
  }
  function SkiaBackedCanvas(skia) {
    this.l4g_1 = skia;
    this.m4g_1 = 1.0;
  }
  protoOf(SkiaBackedCanvas).t42 = function () {
    this.l4g_1.g3m();
  };
  protoOf(SkiaBackedCanvas).u42 = function () {
    this.l4g_1.i3m();
  };
  protoOf(SkiaBackedCanvas).v42 = function (bounds, paint) {
    this.l4g_1.h3m(bounds.i3g_1, bounds.j3g_1, bounds.k3g_1, bounds.l3g_1, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).w42 = function (dx, dy) {
    this.l4g_1.p3g(dx, dy);
  };
  protoOf(SkiaBackedCanvas).x42 = function (sx, sy) {
    this.l4g_1.d3m(sx, sy);
  };
  protoOf(SkiaBackedCanvas).y42 = function (matrix) {
    if (!isIdentity(matrix)) {
      this.l4g_1.e3m(toSkia_1(matrix, this));
    }
  };
  protoOf(SkiaBackedCanvas).a43 = function (left, top, right, bottom, clipOp) {
    var antiAlias = true;
    this.l4g_1.a3m(Companion_instance.x3s(left, top, right, bottom), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).f43 = function (path, clipOp) {
    var antiAlias = true;
    this.l4g_1.c3m(asSkiaPath(path), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).z4g = function (rect, clipOp) {
    var antiAlias = true;
    get_nativeCanvas(this).b3m(toSkiaRRect(rect), toSkia_0(clipOp, this), antiAlias);
  };
  protoOf(SkiaBackedCanvas).a4h = function (rect, clipOp, $super) {
    clipOp = clipOp === VOID ? Companion_getInstance_10().d43_1 : clipOp;
    var tmp;
    if ($super === VOID) {
      this.z4g(rect, clipOp);
      tmp = Unit_instance;
    } else {
      tmp = $super.z4g.call(this, rect, new ClipOp(clipOp));
    }
    return tmp;
  };
  protoOf(SkiaBackedCanvas).i43 = function (left, top, right, bottom, paint) {
    this.l4g_1.g3l(Companion_instance.x3s(left, top, right, bottom), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).j43 = function (left, top, right, bottom, radiusX, radiusY, paint) {
    this.l4g_1.m3l(Companion_instance_0.v3s(left, top, right, bottom, radiusX, radiusY), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).k43 = function (center, radius, paint) {
    this.l4g_1.l3l(_Offset___get_x__impl__xvi35n(center), _Offset___get_y__impl__8bzhra(center), radius, _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).l43 = function (path, paint) {
    this.l4g_1.t3l(asSkiaPath(path), _get_skia__ddpejf(paint, this));
  };
  protoOf(SkiaBackedCanvas).m43 = function (image, srcOffset, srcSize, dstOffset, dstSize, paint) {
    drawImageRect(this, image, Offset(_IntOffset___get_x__impl__qiqr5o(srcOffset), _IntOffset___get_y__impl__2avpwj(srcOffset)), Size(_IntSize___get_width__impl__d9yl4o(srcSize), _IntSize___get_height__impl__prv63b(srcSize)), Offset(_IntOffset___get_x__impl__qiqr5o(dstOffset), _IntOffset___get_y__impl__2avpwj(dstOffset)), Size(_IntSize___get_width__impl__d9yl4o(dstSize), _IntSize___get_height__impl__prv63b(dstSize)), paint);
  };
  function asComposeCanvas(_this__u8e3s4) {
    return new SkiaBackedCanvas(_this__u8e3s4);
  }
  function get_nativeCanvas(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).l4g_1;
  }
  function ActualCanvas(image) {
    var skiaBitmap = asSkiaBitmap(image);
    // Inline function 'kotlin.require' call
    if (!!skiaBitmap.m3j()) {
      // Inline function 'androidx.compose.ui.graphics.ActualCanvas.<anonymous>' call
      var message = 'Cannot draw on immutable ImageBitmap';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new SkiaBackedCanvas(Canvas_init_$Create$(skiaBitmap));
  }
  function set_alphaMultiplier(_this__u8e3s4, value) {
    (_this__u8e3s4 instanceof SkiaBackedCanvas ? _this__u8e3s4 : THROW_CCE()).m4g_1 = value;
  }
  function Paint() {
    return new SkiaBackedPaint();
  }
  function updateAlpha($this, alpha, multiplier) {
    $this.n4g_1.q3q(toArgb(Color__copy$default_impl_ectz3s(Color_2($this.n4g_1.r3q()), alpha * multiplier)));
  }
  function updateAlpha$default($this, alpha, multiplier, $super) {
    alpha = alpha === VOID ? $this.z3z() : alpha;
    multiplier = multiplier === VOID ? $this.o4g_1 : multiplier;
    return updateAlpha($this, alpha, multiplier);
  }
  function toSkia_3(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_16().d48_1 ? PaintMode_FILL_getInstance() : _this__u8e3s4 === Companion_getInstance_16().e48_1 ? PaintMode_STROKE_getInstance() : PaintMode_FILL_getInstance();
  }
  function toSkia_4(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_20().z48_1 ? PaintStrokeCap_BUTT_getInstance() : _this__u8e3s4 === Companion_getInstance_20().a49_1 ? PaintStrokeCap_ROUND_getInstance() : _this__u8e3s4 === Companion_getInstance_20().b49_1 ? PaintStrokeCap_SQUARE_getInstance() : PaintStrokeCap_BUTT_getInstance();
  }
  function toSkia_5(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_21().c49_1 ? PaintStrokeJoin_MITER_getInstance() : _this__u8e3s4 === Companion_getInstance_21().d49_1 ? PaintStrokeJoin_ROUND_getInstance() : _this__u8e3s4 === Companion_getInstance_21().e49_1 ? PaintStrokeJoin_BEVEL_getInstance() : PaintStrokeJoin_MITER_getInstance();
  }
  function SkiaBackedPaint(skia) {
    skia = skia === VOID ? Paint_init_$Create$() : skia;
    this.n4g_1 = skia;
    this.o4g_1 = 1.0;
    this.p4g_1 = Companion_getInstance_9().q41_1;
    this.q4g_1 = Companion_getInstance_16().d48_1;
    this.r4g_1 = Companion_getInstance_20().z48_1;
    this.s4g_1 = Companion_getInstance_21().d49_1;
    this.t4g_1 = 0.0;
    this.u4g_1 = Companion_getInstance_13().u46_1;
    this.v4g_1 = null;
    this.w4g_1 = null;
    this.x4g_1 = null;
  }
  protoOf(SkiaBackedPaint).b4h = function () {
    return this.n4g_1;
  };
  protoOf(SkiaBackedPaint).y4g = function (value) {
    var multiplier = coerceIn_0(value, 0.0, 1.0);
    updateAlpha$default(this, VOID, multiplier);
    this.o4g_1 = multiplier;
  };
  protoOf(SkiaBackedPaint).y4c = function (value) {
    updateAlpha$default(this, value);
  };
  protoOf(SkiaBackedPaint).z3z = function () {
    return _Color___get_alpha__impl__wcfyv1(Color_2(this.n4g_1.r3q()));
  };
  protoOf(SkiaBackedPaint).w4c = function (color) {
    this.n4g_1.q3q(toArgb(color));
  };
  protoOf(SkiaBackedPaint).x4c = function () {
    return Color_2(this.n4g_1.r3q());
  };
  protoOf(SkiaBackedPaint).c4d = function (value) {
    this.n4g_1.a3r(toSkia(value));
    this.p4g_1 = value;
  };
  protoOf(SkiaBackedPaint).d4d = function () {
    return this.p4g_1;
  };
  protoOf(SkiaBackedPaint).i4c = function (value) {
    this.n4g_1.o3q(toSkia_3(value, this));
    this.q4g_1 = value;
  };
  protoOf(SkiaBackedPaint).s3q = function (value) {
    this.n4g_1.s3q(value);
  };
  protoOf(SkiaBackedPaint).t3q = function () {
    return this.n4g_1.t3q();
  };
  protoOf(SkiaBackedPaint).o4c = function (value) {
    this.n4g_1.v3q(toSkia_4(value, this));
    this.r4g_1 = value;
  };
  protoOf(SkiaBackedPaint).p4c = function () {
    return this.r4g_1;
  };
  protoOf(SkiaBackedPaint).s4c = function (value) {
    this.n4g_1.w3q(toSkia_5(value, this));
    this.s4g_1 = value;
  };
  protoOf(SkiaBackedPaint).t4c = function () {
    return this.s4g_1;
  };
  protoOf(SkiaBackedPaint).q4c = function (value) {
    this.n4g_1.u3q(value);
    this.t4g_1 = value;
  };
  protoOf(SkiaBackedPaint).r4c = function () {
    return this.t4g_1;
  };
  protoOf(SkiaBackedPaint).e4d = function (_set____db54di) {
    this.u4g_1 = _set____db54di;
  };
  protoOf(SkiaBackedPaint).f4d = function () {
    return this.u4g_1;
  };
  protoOf(SkiaBackedPaint).x3q = function (value) {
    this.n4g_1.x3q(value);
    this.v4g_1 = value;
  };
  protoOf(SkiaBackedPaint).y3q = function () {
    return this.v4g_1;
  };
  protoOf(SkiaBackedPaint).a4d = function (value) {
    this.n4g_1.z3q(value == null ? null : asSkiaColorFilter(value));
    this.w4g_1 = value;
  };
  protoOf(SkiaBackedPaint).b4d = function () {
    return this.w4g_1;
  };
  protoOf(SkiaBackedPaint).u4c = function (value) {
    var tmp0_safe_receiver = (value == null ? true : value instanceof SkiaBackedPathEffect) ? value : THROW_CCE();
    this.n4g_1.d3r(tmp0_safe_receiver == null ? null : asSkiaPathEffect(tmp0_safe_receiver));
    this.x4g_1 = value;
  };
  protoOf(SkiaBackedPaint).v4c = function () {
    return this.x4g_1;
  };
  function Path_0() {
    return new SkiaBackedPath();
  }
  function toSkiaOperation(_this__u8e3s4, $this) {
    return _this__u8e3s4 === Companion_getInstance_18().p48_1 ? PathOp_DIFFERENCE_getInstance() : _this__u8e3s4 === Companion_getInstance_18().q48_1 ? PathOp_INTERSECT_getInstance() : _this__u8e3s4 === Companion_getInstance_18().r48_1 ? PathOp_UNION_getInstance() : _this__u8e3s4 === Companion_getInstance_18().s48_1 ? PathOp_XOR_getInstance() : _this__u8e3s4 === Companion_getInstance_18().t48_1 ? PathOp_REVERSE_DIFFERENCE_getInstance() : PathOp_XOR_getInstance();
  }
  function SkiaBackedPath(internalPath) {
    internalPath = internalPath === VOID ? Path_init_$Create$() : internalPath;
    this.c4h_1 = internalPath;
  }
  protoOf(SkiaBackedPath).d4h = function (value) {
    var tmp = this.c4h_1;
    var tmp_0;
    if (value === Companion_getInstance_17().o48_1) {
      tmp_0 = PathFillMode_EVEN_ODD_getInstance();
    } else {
      tmp_0 = PathFillMode_WINDING_getInstance();
    }
    tmp.j3r(tmp_0);
  };
  protoOf(SkiaBackedPath).e4h = function () {
    var tmp;
    if (this.c4h_1.k3r().equals(PathFillMode_EVEN_ODD_getInstance())) {
      tmp = Companion_getInstance_17().o48_1;
    } else {
      tmp = Companion_getInstance_17().n48_1;
    }
    return tmp;
  };
  protoOf(SkiaBackedPath).f48 = function (rect, direction) {
    this.c4h_1.o3r(toSkiaRect(rect), toSkiaPathDirection(direction));
  };
  protoOf(SkiaBackedPath).h48 = function (roundRect, direction) {
    this.c4h_1.q3r(toSkiaRRect(roundRect), toSkiaPathDirection(direction));
  };
  protoOf(SkiaBackedPath).i48 = function (path, offset) {
    this.c4h_1.s3r(asSkiaPath(path), _Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset));
  };
  protoOf(SkiaBackedPath).y2l = function () {
    var fillType = this.e4h();
    this.c4h_1.n3q();
    this.d4h(fillType);
  };
  protoOf(SkiaBackedPath).k48 = function (offset) {
    this.c4h_1.u3r(Companion_getInstance_4().i3q(_Offset___get_x__impl__xvi35n(offset), _Offset___get_y__impl__8bzhra(offset)));
  };
  protoOf(SkiaBackedPath).l48 = function () {
    var bounds = this.c4h_1.l3r();
    return new Rect(bounds.h3l_1, bounds.i3l_1, bounds.j3l_1, bounds.k3l_1);
  };
  protoOf(SkiaBackedPath).m48 = function (path1, path2, operation) {
    var path = Companion_getInstance_5().f3r(asSkiaPath(path1), asSkiaPath(path2), toSkiaOperation(operation, this));
    var tmp = this;
    tmp.c4h_1 = path == null ? this.c4h_1 : path;
    return !(path == null);
  };
  protoOf(SkiaBackedPath).u21 = function () {
    return this.c4h_1.u21();
  };
  function toSkiaPathDirection(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.s2_1) {
      case 0:
        tmp = PathDirection_COUNTER_CLOCKWISE_getInstance();
        break;
      case 1:
        tmp = PathDirection_CLOCKWISE_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function asSkiaPath(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedPath) {
      tmp = _this__u8e3s4.c4h_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Path');
    }
    return tmp;
  }
  function SkiaBackedPathEffect() {
  }
  function asSkiaPathEffect(_this__u8e3s4) {
    return (_this__u8e3s4 instanceof SkiaBackedPathEffect ? _this__u8e3s4 : THROW_CCE()).f4h_1;
  }
  function asSkiaColorFilter(_this__u8e3s4) {
    return _this__u8e3s4.o46_1;
  }
  function actualTintColorFilter(color, blendMode) {
    return Companion_getInstance_6().l3m(toArgb(color), toSkia(blendMode));
  }
  function SkiaGraphicsContext$snapshotObserver$lambda(command) {
    command();
    return Unit_instance;
  }
  function SkiaGraphicsContext() {
    var tmp = this;
    tmp.g4h_1 = new SnapshotStateObserver(SkiaGraphicsContext$snapshotObserver$lambda);
    this.h4h_1 = 0;
    this.g4h_1.e3e();
  }
  protoOf(SkiaGraphicsContext).qy = function () {
    this.g4h_1.f3e();
    this.g4h_1.f2();
  };
  protoOf(SkiaGraphicsContext).i4h = function (layer) {
    if (!layer.e4g_1) {
      this.h4h_1 = this.h4h_1 - 1 | 0;
      layer.j4h();
    }
  };
  function ActualImageBitmap(width, height, config, hasAlpha, colorSpace) {
    var colorType = toSkiaColorType(config);
    var alphaType = hasAlpha ? ColorAlphaType_PREMUL_getInstance() : ColorAlphaType_OPAQUE_getInstance();
    var skiaColorSpace = toSkiaColorSpace(colorSpace);
    var colorInfo = new ColorInfo(colorType, alphaType, skiaColorSpace);
    var imageInfo = new ImageInfo(colorInfo, width, height);
    var bitmap = Bitmap_init_$Create$();
    bitmap.u3j(imageInfo);
    return new SkiaBackedImageBitmap(bitmap);
  }
  function asSkiaBitmap(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof SkiaBackedImageBitmap) {
      tmp = _this__u8e3s4.k4h_1;
    } else {
      throw UnsupportedOperationException_init_$Create$_0('Unable to obtain org.jetbrains.skia.Image');
    }
    return tmp;
  }
  function toSkiaColorType(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_14().w46_1 ? Companion_getInstance_7().y3m_1 : _this__u8e3s4 === Companion_getInstance_14().x46_1 ? ColorType_ALPHA_8_getInstance() : _this__u8e3s4 === Companion_getInstance_14().y46_1 ? ColorType_RGB_565_getInstance() : _this__u8e3s4 === Companion_getInstance_14().z46_1 ? ColorType_RGBA_F16_getInstance() : Companion_getInstance_7().y3m_1;
  }
  function toSkiaColorSpace(_this__u8e3s4) {
    return _this__u8e3s4.equals(ColorSpaces_getInstance().s43_1) ? Companion_getInstance_8().u3m_1 : _this__u8e3s4.equals(ColorSpaces_getInstance().t43_1) ? Companion_getInstance_8().v3m_1 : _this__u8e3s4.equals(ColorSpaces_getInstance().z43_1) ? Companion_getInstance_8().w3m_1 : Companion_getInstance_8().u3m_1;
  }
  function SkiaBackedImageBitmap(bitmap) {
    this.k4h_1 = bitmap;
    this.l4h_1 = toComposeColorSpace(this.k4h_1.x3j());
    this.m4h_1 = toComposeConfig(this.k4h_1.w3j());
    this.n4h_1 = !this.k4h_1.y3j();
  }
  protoOf(SkiaBackedImageBitmap).o4h = function () {
    return this.m4h_1;
  };
  protoOf(SkiaBackedImageBitmap).n3g = function () {
    return this.k4h_1.n3g();
  };
  protoOf(SkiaBackedImageBitmap).m3g = function () {
    return this.k4h_1.m3g();
  };
  protoOf(SkiaBackedImageBitmap).p4h = function () {
    return Unit_instance;
  };
  function toComposeColorSpace(_this__u8e3s4) {
    return equals(_this__u8e3s4, Companion_getInstance_8().u3m_1) ? ColorSpaces_getInstance().s43_1 : equals(_this__u8e3s4, Companion_getInstance_8().v3m_1) ? ColorSpaces_getInstance().t43_1 : equals(_this__u8e3s4, Companion_getInstance_8().w3m_1) ? ColorSpaces_getInstance().z43_1 : ColorSpaces_getInstance().s43_1;
  }
  function toComposeConfig(_this__u8e3s4) {
    return _this__u8e3s4.equals(Companion_getInstance_7().y3m_1) ? Companion_getInstance_14().w46_1 : _this__u8e3s4.equals(ColorType_ALPHA_8_getInstance()) ? Companion_getInstance_14().x46_1 : _this__u8e3s4.equals(ColorType_RGB_565_getInstance()) ? Companion_getInstance_14().y46_1 : _this__u8e3s4.equals(ColorType_RGBA_F16_getInstance()) ? Companion_getInstance_14().z46_1 : Companion_getInstance_14().w46_1;
  }
  function invalidateMatrix($this, requestDraw_0) {
    $this.b4f_1 = true;
    if (requestDraw_0) {
      requestDraw($this);
    }
  }
  function invalidateMatrix$default($this, requestDraw, $super) {
    requestDraw = requestDraw === VOID ? true : requestDraw;
    return invalidateMatrix($this, requestDraw);
  }
  function requestDraw($this) {
    $this.a4f_1.d1l(Unit_instance);
  }
  function updateLayerConfiguration($this, requestDraw) {
    $this.f4f_1 = true;
    invalidateMatrix($this, requestDraw);
  }
  function updateLayerConfiguration$default($this, requestDraw, $super) {
    requestDraw = requestDraw === VOID ? true : requestDraw;
    return updateLayerConfiguration($this, requestDraw);
  }
  function trackRecord($this, block) {
    // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.withTracking' call
    var this_0 = $this.l4f_1;
    access$_set_oldDependency__lsok8j(this_0, access$_get_dependency__eau0ww(this_0));
    var tmp0_safe_receiver = access$_get_dependenciesSet__8t5wug(this_0);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.withTracking.<anonymous>' call
      if (tmp0_safe_receiver.uq()) {
        var tmp0_elvis_lhs = access$_get_oldDependenciesSet__gb53k7(this_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'kotlin.also' call
          var this_1 = mutableScatterSetOf();
          // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.withTracking.<anonymous>.<anonymous>' call
          access$_set_oldDependenciesSet__hmq7k5(this_0, this_1);
          tmp = this_1;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var oldSet = tmp;
        oldSet.pu(tmp0_safe_receiver);
        tmp0_safe_receiver.f2();
      }
    }
    access$_set_trackingInProgress__dxkhgu(this_0, true);
    // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.trackRecord.<anonymous>' call
    $this.w4e_1.b3e($this, GraphicsLayer$trackRecord$lambda, block);
    access$_set_trackingInProgress__dxkhgu(this_0, false);
    var tmp1_safe_receiver = access$_get_oldDependency__6kx1q7(this_0);
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.trackRecord.<anonymous>' call
      onRemovedFromParentLayer(tmp1_safe_receiver);
    }
    var tmp2_safe_receiver = access$_get_oldDependenciesSet__gb53k7(this_0);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.withTracking.<anonymous>' call
      if (tmp2_safe_receiver.uq()) {
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var k = tmp2_safe_receiver.ws_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = tmp2_safe_receiver.vs_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_2 = slot;
              if (!this_2.k3(this_2.g3().h3(7)).k3(new Long(-2139062144, -2139062144)).equals(new Long(-2139062144, -2139062144))) {
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
                      var tmp_0 = k[index];
                      // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.trackRecord.<anonymous>' call
                      var it = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
                      onRemovedFromParentLayer(it);
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
        tmp2_safe_receiver.f2();
      }
    }
  }
  function addSubLayer($this, graphicsLayer) {
    if ($this.l4f_1.q4h(graphicsLayer)) {
      onAddedToParentLayer(graphicsLayer);
    }
  }
  function configureOutline($this) {
    var tmpOutline = $this.e4f_1;
    if ($this.f4f_1 || tmpOutline == null) {
      var tmpPath = $this.j4f_1;
      var tmp;
      if (!(tmpPath == null)) {
        tmp = new Generic(tmpPath);
      } else {
        var tmp1 = $this.g4f_1;
        // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.createOutlineWithPosition' call
        var outlineSize = $this.h4f_1;
        var tmp_0;
        // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
        if (_Size___get_packedValue__impl__7rlt1o(outlineSize).equals(new Long(2143289344, 2143289344))) {
          tmp_0 = toSize_0($this.n4f_1);
        } else {
          tmp_0 = outlineSize;
        }
        var targetSize = tmp_0;
        // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.configureOutline.<anonymous>' call
        var tmp_1;
        if ($this.i4f_1 > 0.0) {
          tmp_1 = new Rounded(RoundRect(_Offset___get_x__impl__xvi35n(tmp1), _Offset___get_y__impl__8bzhra(tmp1), _Offset___get_x__impl__xvi35n(tmp1) + _Size___get_width__impl__58y75t(targetSize), _Offset___get_y__impl__8bzhra(tmp1) + _Size___get_height__impl__a04p02(targetSize), CornerRadius($this.i4f_1)));
        } else {
          tmp_1 = new Rectangle(new Rect(_Offset___get_x__impl__xvi35n(tmp1), _Offset___get_y__impl__8bzhra(tmp1), _Offset___get_x__impl__xvi35n(tmp1) + _Size___get_width__impl__58y75t(targetSize), _Offset___get_y__impl__8bzhra(tmp1) + _Size___get_height__impl__a04p02(targetSize)));
        }
        tmp = tmp_1;
      }
      tmpOutline = tmp;
      $this.e4f_1 = tmpOutline;
      $this.f4f_1 = false;
    }
    return tmpOutline;
  }
  function onAddedToParentLayer($this) {
    $this.k4f_1 = $this.k4f_1 + 1 | 0;
  }
  function onRemovedFromParentLayer($this) {
    $this.k4f_1 = $this.k4f_1 - 1 | 0;
    discardContentIfReleasedAndHaveNoParentLayerUsages($this);
  }
  function resetOutlineParams($this) {
    $this.e4f_1 = null;
    $this.j4f_1 = null;
    $this.h4f_1 = Companion_getInstance_0().c3h_1;
    $this.g4f_1 = Companion_getInstance().d3g_1;
    $this.i4f_1 = 0.0;
    $this.f4f_1 = true;
  }
  function updateMatrix($this) {
    if (!$this.b4f_1)
      return Unit_instance;
    var pivotX;
    var pivotY;
    if (get_isUnspecified($this.b4g_1)) {
      pivotX = _IntSize___get_width__impl__d9yl4o($this.n4f_1) / 2.0;
      pivotY = _IntSize___get_height__impl__prv63b($this.n4f_1) / 2.0;
    } else {
      pivotX = _Offset___get_x__impl__xvi35n($this.b4g_1);
      pivotY = _Offset___get_y__impl__8bzhra($this.b4g_1);
    }
    prepareTransformationMatrix($this.c4f_1, pivotX, pivotY, $this.r4f_1, $this.s4f_1, $this.u4f_1, $this.v4f_1, $this.w4f_1, $this.p4f_1, $this.q4f_1, $this.x4f_1);
    $this.b4f_1 = false;
  }
  function discardContentIfReleasedAndHaveNoParentLayerUsages($this) {
    if ($this.e4g_1 && $this.k4f_1 === 0) {
      var tmp0_safe_receiver = $this.z4e_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.u1x();
      }
      $this.y4e_1.u1x();
      // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.removeDependencies' call
      var this_0 = $this.l4f_1;
      var tmp0_safe_receiver_0 = access$_get_dependency__eau0ww(this_0);
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.removeDependencies.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.discardContentIfReleasedAndHaveNoParentLayerUsages.<anonymous>' call
        onRemovedFromParentLayer(tmp0_safe_receiver_0);
        access$_set_dependency__rek8c(this_0, null);
      }
      var tmp1_safe_receiver = access$_get_dependenciesSet__8t5wug(this_0);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.ui.graphics.layer.ChildLayerDependenciesTracker.removeDependencies.<anonymous>' call
        // Inline function 'androidx.collection.ScatterSet.forEach' call
        // Inline function 'kotlin.contracts.contract' call
        var k = tmp1_safe_receiver.ws_1;
        $l$block: {
          // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
          // Inline function 'kotlin.contracts.contract' call
          var m = tmp1_safe_receiver.vs_1;
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
                      var index = (i << 3) + j | 0;
                      // Inline function 'androidx.collection.ScatterSet.forEach.<anonymous>' call
                      var tmp = k[index];
                      // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.discardContentIfReleasedAndHaveNoParentLayerUsages.<anonymous>' call
                      var it = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
                      onRemovedFromParentLayer(it);
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
        tmp1_safe_receiver.f2();
      }
      $this.w4e_1.c3e($this);
    }
  }
  function requiresLayer($this) {
    var alphaNeedsLayer = $this.o4f_1 < 1.0 && !($this.d4f_1 === Companion_getInstance_32().v4e_1);
    var hasColorFilter = !($this.d4g_1 == null);
    var hasBlendMode = !($this.c4g_1 === Companion_getInstance_9().q41_1);
    var hasRenderEffect = !($this.y4f_1 == null);
    var offscreenBufferRequested = $this.d4f_1 === Companion_getInstance_32().u4e_1;
    return alphaNeedsLayer || hasColorFilter || hasBlendMode || hasRenderEffect || offscreenBufferRequested;
  }
  function drawShadow($this, canvas) {
    // Inline function 'kotlin.with' call
    // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.drawShadow.<anonymous>' call
    var $this$with = $this.z4f_1;
    var tmpOutline = $this.e4f_1;
    var tmp;
    if (tmpOutline instanceof Rectangle) {
      // Inline function 'kotlin.apply' call
      var this_0 = Path_0();
      // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.drawShadow.<anonymous>.<anonymous>' call
      this_0.g48(tmpOutline.q47_1);
      tmp = this_0;
    } else {
      if (tmpOutline instanceof Rounded) {
        // Inline function 'kotlin.apply' call
        var this_1 = Path_0();
        // Inline function 'androidx.compose.ui.graphics.layer.GraphicsLayer.drawShadow.<anonymous>.<anonymous>' call
        this_1.t47(tmpOutline.r47_1);
        tmp = this_1;
      } else {
        if (tmpOutline instanceof Generic) {
          tmp = tmpOutline.u47_1;
        } else {
          return Unit_instance;
        }
      }
    }
    var path = tmp;
    var zParams = new Point3(0.0, 0.0, $this.t4f_1);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$2 = _Dp___init__impl__ms3zkb(300);
    var tmp_0 = -$this$with.l3h(tmp$ret$2);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$3 = _Dp___init__impl__ms3zkb(600);
    var lightPos = new Point3(0.0, tmp_0, $this$with.l3h(tmp$ret$3));
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$4 = _Dp___init__impl__ms3zkb(800);
    var lightRad = $this$with.l3h(tmp$ret$4);
    var ambientAlpha = 0.039 * $this.o4f_1;
    var spotAlpha = 0.19 * $this.o4f_1;
    var ambientColor = Color__copy$default_impl_ectz3s($this.f4g_1, ambientAlpha);
    var spotColor = Color__copy$default_impl_ectz3s($this.g4g_1, spotAlpha);
    ShadowUtils_getInstance().z3s(get_nativeCanvas(canvas), asSkiaPath(path), zParams, lightPos, lightRad, toArgb(ambientColor), toArgb(spotColor), $this.o4f_1 < 1.0, false);
    return Unit_instance;
  }
  function GraphicsLayer$record$lambda(this$0, $density, $layoutDirection, $skiaCanvas, $size, $block) {
    return function () {
      var tmp0 = this$0.x4e_1;
      var tmp1 = $density;
      var tmp2 = $layoutDirection;
      var tmp3 = $skiaCanvas;
      var tmp4 = toSize_0($size);
      var graphicsLayer = this$0;
      var prevDensity = tmp0.x4d().k3h();
      var prevLayoutDirection = tmp0.x4d().t4d();
      var prevCanvas = tmp0.x4d().j3t();
      var prevSize = tmp0.x4d().z4c();
      var prevLayer = tmp0.x4d().w4d();
      // Inline function 'kotlin.apply' call
      var this_0 = tmp0.x4d();
      // Inline function 'androidx.compose.ui.graphics.drawscope.draw.<anonymous>' call
      this_0.u4d(tmp1);
      this_0.s4d(tmp2);
      this_0.p4d(tmp3);
      this_0.q4d(tmp4);
      this_0.v4d(graphicsLayer);
      tmp3.t42();
      var tmp;
      try {
        tmp = $block(tmp0);
      }finally {
        tmp3.u42();
        // Inline function 'kotlin.apply' call
        var this_1 = tmp0.x4d();
        // Inline function 'androidx.compose.ui.graphics.drawscope.draw.<anonymous>' call
        this_1.u4d(prevDensity);
        this_1.s4d(prevLayoutDirection);
        this_1.p4d(prevCanvas);
        this_1.q4d(prevSize);
        this_1.v4d(prevLayer);
      }
      return Unit_instance;
    };
  }
  function GraphicsLayer$trackRecord$lambda(it) {
    requestDraw(it);
    return Unit_instance;
  }
  //region block: post-declaration
  protoOf(CanvasDrawScope).y4d = drawRect$default;
  protoOf(CanvasDrawScope).z4d = drawRect$default_0;
  protoOf(CanvasDrawScope).b4e = drawImage$default;
  protoOf(CanvasDrawScope).c4e = drawRoundRect$default;
  protoOf(CanvasDrawScope).e4e = drawCircle$default;
  protoOf(CanvasDrawScope).f4e = drawPath$default;
  protoOf(CanvasDrawScope).g4e = drawPath$default_0;
  protoOf(CanvasDrawScope).h4e = get_center_0;
  protoOf(CanvasDrawScope).z4c = get_size;
  protoOf(CanvasDrawScope).l3h = toPx;
  protoOf(CanvasDrawScope).n3h = toPx_0;
  protoOf(CanvasDrawScope).m3h = roundToPx;
  protoOf(CanvasDrawScope).s3h = toDp;
  protoOf(CanvasDrawScope).r3h = toDp_0;
  protoOf(CanvasDrawScope).t3h = toSize;
  protoOf(EmptyCanvas).e43 = clipRect$default_0;
  protoOf(EmptyCanvas).g43 = clipPath$default;
  protoOf(EmptyCanvas).z42 = clipRect;
  protoOf(EmptyCanvas).b43 = clipRect$default;
  protoOf(EmptyCanvas).h43 = drawRect;
  protoOf(SkiaBackedCanvas).e43 = clipRect$default_0;
  protoOf(SkiaBackedCanvas).g43 = clipPath$default;
  protoOf(SkiaBackedCanvas).z42 = clipRect;
  protoOf(SkiaBackedCanvas).b43 = clipRect$default;
  protoOf(SkiaBackedCanvas).h43 = drawRect;
  protoOf(SkiaBackedPath).g48 = addRect$default;
  protoOf(SkiaBackedPath).t47 = addRoundRect$default;
  protoOf(SkiaBackedPath).j48 = addPath$default;
  //endregion
  //region block: init
  Companion_instance_4 = new Companion_2();
  Companion_instance_7 = new Companion_5();
  Companion_instance_16 = new Companion_14();
  Companion_instance_17 = new Companion_15();
  Companion_instance_18 = new Companion_16();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CanvasDrawScope;
  _.$_$.b = DrawScope;
  _.$_$.c = Stroke;
  _.$_$.d = drawLayer;
  _.$_$.e = setOutline;
  _.$_$.f = BlendMode;
  _.$_$.g = Canvas_0;
  _.$_$.h = ColorProducer;
  _.$_$.i = Color_3;
  _.$_$.j = Color_2;
  _.$_$.k = Color_1;
  _.$_$.l = Color;
  _.$_$.m = ImageBitmapConfig;
  _.$_$.n = ImageBitmap;
  _.$_$.o = Matrix;
  _.$_$.p = Generic;
  _.$_$.q = Rectangle;
  _.$_$.r = Rounded;
  _.$_$.s = Paint;
  _.$_$.t = Path_0;
  _.$_$.u = get_RectangleShape;
  _.$_$.v = ShaderBrush;
  _.$_$.w = Shadow;
  _.$_$.x = SkiaGraphicsContext;
  _.$_$.y = SolidColor;
  _.$_$.z = set_alphaMultiplier;
  _.$_$.a1 = asComposeCanvas;
  _.$_$.b1 = asSkiaPath;
  _.$_$.c1 = compositeOver;
  _.$_$.d1 = computeCubicVerticalBounds;
  _.$_$.e1 = drawOutline;
  _.$_$.f1 = drawOutline_0;
  _.$_$.g1 = evaluateCubic;
  _.$_$.h1 = findFirstCubicRoot;
  _.$_$.i1 = luminance;
  _.$_$.j1 = get_nativeCanvas;
  _.$_$.k1 = prepareTransformationMatrix;
  _.$_$.l1 = toArgb;
  _.$_$.m1 = toComposeRect;
  _.$_$.n1 = toSkiaRRect;
  _.$_$.o1 = toSkiaRect;
  _.$_$.p1 = drawCircle$default;
  _.$_$.q1 = drawImage$default;
  _.$_$.r1 = drawPath$default_0;
  _.$_$.s1 = drawPath$default;
  _.$_$.t1 = drawRect$default;
  _.$_$.u1 = drawRect$default_0;
  _.$_$.v1 = drawRoundRect$default;
  _.$_$.w1 = BlendMode__hashCode_impl_93ceri;
  _.$_$.x1 = BlendMode__toString_impl_uuibkd;
  _.$_$.y1 = _Color___init__impl__r6cqi2;
  _.$_$.z1 = _Color___get_alpha__impl__wcfyv1;
  _.$_$.a2 = Color__hashCode_impl_vjyivj;
  _.$_$.b2 = Color__toString_impl_hpzmaq;
  _.$_$.c2 = _Color___get_value__impl__1pls5m;
  _.$_$.d2 = _Matrix___init__impl__q3kp4w;
  _.$_$.e2 = Matrix__map_impl_7meu7m;
  _.$_$.f2 = Matrix__map_impl_7meu7m_0;
  _.$_$.g2 = _Matrix___get_values__impl__fblr7b;
  _.$_$.h2 = Color__copy$default_impl_ectz3s;
  _.$_$.i2 = Companion_getInstance_30;
  _.$_$.j2 = Fill_getInstance;
  _.$_$.k2 = Companion_getInstance_32;
  _.$_$.l2 = Companion_getInstance_9;
  _.$_$.m2 = Companion_getInstance_10;
  _.$_$.n2 = Companion_getInstance_11;
  _.$_$.o2 = Companion_instance_4;
  _.$_$.p2 = Companion_getInstance_14;
  _.$_$.q2 = Companion_getInstance_16;
  _.$_$.r2 = Companion_getInstance_18;
  _.$_$.s2 = Companion_getInstance_19;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-graphics.js.map
