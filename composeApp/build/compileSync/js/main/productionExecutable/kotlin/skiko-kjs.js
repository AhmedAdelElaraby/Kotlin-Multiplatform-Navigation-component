(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'skiko-kjs'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'skiko-kjs'.");
    }
    globalThis['skiko-kjs'] = factory(typeof globalThis['skiko-kjs'] === 'undefined' ? {} : globalThis['skiko-kjs'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.kb;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var initMetadataForObject = kotlin_kotlin.$_$.pa;
  var VOID = kotlin_kotlin.$_$.e;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var initMetadataForCompanion = kotlin_kotlin.$_$.la;
  var ensureNotNull = kotlin_kotlin.$_$.pf;
  var Enum = kotlin_kotlin.$_$.pe;
  var charSequenceGet = kotlin_kotlin.$_$.w9;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.o2;
  var toShort = kotlin_kotlin.$_$.nb;
  var toString = kotlin_kotlin.$_$.ob;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var equals = kotlin_kotlin.$_$.ba;
  var hashCode = kotlin_kotlin.$_$.ja;
  var toString_0 = kotlin_kotlin.$_$.ig;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.xf;
  var toBits = kotlin_kotlin.$_$.fg;
  var compareTo = kotlin_kotlin.$_$.z9;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var isCharSequence = kotlin_kotlin.$_$.va;
  var trim = kotlin_kotlin.$_$.ge;
  var split = kotlin_kotlin.$_$.td;
  var getOrNull = kotlin_kotlin.$_$.g6;
  var toIntOrNull = kotlin_kotlin.$_$.yd;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.x2;
  var fillArrayVal = kotlin_kotlin.$_$.ca;
  var splitToSequence = kotlin_kotlin.$_$.sd;
  var mapNotNull = kotlin_kotlin.$_$.sc;
  var toList = kotlin_kotlin.$_$.xc;
  var copyToArray = kotlin_kotlin.$_$.q5;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.y2;
  var uintCompare = kotlin_kotlin.$_$.kg;
  var UInt = kotlin_kotlin.$_$.ef;
  var isNaN_0 = kotlin_kotlin.$_$.tf;
  var numberToChar = kotlin_kotlin.$_$.gb;
  var charArrayOf = kotlin_kotlin.$_$.v9;
  var concatToString = kotlin_kotlin.$_$.ad;
  var initMetadataForInterface = kotlin_kotlin.$_$.na;
  var decodeToString = kotlin_kotlin.$_$.cd;
  var contentEquals = kotlin_kotlin.$_$.j5;
  var contentHashCode = kotlin_kotlin.$_$.l5;
  var contentHashCode_0 = kotlin_kotlin.$_$.k5;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var NotImplementedError = kotlin_kotlin.$_$.we;
  var last = kotlin_kotlin.$_$.y6;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.o3;
  var floatFromBits = kotlin_kotlin.$_$.da;
  var joinToString = kotlin_kotlin.$_$.n6;
  var Error_init_$Create$ = kotlin_kotlin.$_$.j1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.o1;
  var until = kotlin_kotlin.$_$.gc;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.f5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m;
  var getBooleanHashCode = kotlin_kotlin.$_$.ea;
  var toBits_0 = kotlin_kotlin.$_$.gg;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.v1;
  var getNumberHashCode = kotlin_kotlin.$_$.ga;
  var RuntimeException = kotlin_kotlin.$_$.ye;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.g2;
  var captureStack = kotlin_kotlin.$_$.u9;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var toIntArray = kotlin_kotlin.$_$.b8;
  var defineProp = kotlin_kotlin.$_$.aa;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.d1;
  var charSequenceLength = kotlin_kotlin.$_$.x9;
  var lazy = kotlin_kotlin.$_$.wf;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var plus = kotlin_kotlin.$_$.yf;
  var toString_1 = kotlin_kotlin.$_$.ee;
  var numberToLong = kotlin_kotlin.$_$.ib;
  var contains = kotlin_kotlin.$_$.bd;
  var encodeToByteArray = kotlin_kotlin.$_$.fd;
  var copyOf = kotlin_kotlin.$_$.n5;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Native, 'Native');
  initMetadataForClass(Managed, 'Managed', VOID, Native);
  initMetadataForClass(BBHFactory, 'BBHFactory', VOID, Managed);
  initMetadataForClass(RTreeFactory, 'RTreeFactory', RTreeFactory_init_$Create$, BBHFactory);
  initMetadataForObject(_FinalizerHolder, '_FinalizerHolder');
  initMetadataForCompanion(Companion);
  initMetadataForObject(_FinalizerHolder_0, '_FinalizerHolder');
  initMetadataForClass(BackendRenderTarget, 'BackendRenderTarget', VOID, Managed);
  initMetadataForCompanion(Companion_0);
  initMetadataForObject(_FinalizerHolder_1, '_FinalizerHolder');
  function get_width() {
    return this.j3j().p3j_1;
  }
  function get_height() {
    return this.j3j().q3j_1;
  }
  function get_colorType() {
    return this.j3j().o3j_1.r3j_1;
  }
  function get_colorSpace() {
    return this.j3j().o3j_1.t3j_1;
  }
  function get_isOpaque() {
    return this.j3j().o3j_1.y3j();
  }
  initMetadataForInterface(IHasImageInfo, 'IHasImageInfo');
  initMetadataForClass(Bitmap, 'Bitmap', Bitmap_init_$Create$, Managed, [Managed, IHasImageInfo]);
  initMetadataForClass(BlendMode, 'BlendMode', VOID, Enum);
  initMetadataForCompanion(Companion_1);
  initMetadataForObject(_FinalizerHolder_2, '_FinalizerHolder');
  initMetadataForClass(BreakIterator, 'BreakIterator', VOID, Managed);
  initMetadataForCompanion(Companion_2);
  initMetadataForObject(_FinalizerHolder_3, '_FinalizerHolder');
  initMetadataForClass(Canvas, 'Canvas', VOID, Managed);
  initMetadataForClass(ClipMode, 'ClipMode', VOID, Enum);
  initMetadataForClass(ColorAlphaType, 'ColorAlphaType', VOID, Enum);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(RefCnt, 'RefCnt', VOID, Managed);
  initMetadataForClass(ColorFilter, 'ColorFilter', VOID, RefCnt);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(ColorInfo, 'ColorInfo');
  initMetadataForCompanion(Companion_5);
  initMetadataForObject(_FinalizerHolder_4, '_FinalizerHolder');
  initMetadataForClass(ColorSpace, 'ColorSpace', VOID, Managed);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(ColorType, 'ColorType', VOID, Enum);
  initMetadataForClass(CubicResampler, 'CubicResampler');
  initMetadataForCompanion(Companion_7);
  initMetadataForObject(_FinalizerHolder_5, '_FinalizerHolder');
  initMetadataForClass(Data, 'Data', VOID, Managed);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(DirectContext, 'DirectContext', VOID, RefCnt);
  initMetadataForClass(FilterMipmap, 'FilterMipmap');
  initMetadataForClass(FilterMode, 'FilterMode', VOID, Enum);
  initMetadataForCompanion(Companion_9);
  initMetadataForObject(_FinalizerHolder_6, '_FinalizerHolder');
  initMetadataForClass(Font, 'Font', Font_init_$Create$, Managed);
  initMetadataForClass(FontEdging, 'FontEdging', VOID, Enum);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(FontFeature, 'FontFeature');
  initMetadataForClass(FontHinting, 'FontHinting', VOID, Enum);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(FontMetrics, 'FontMetrics');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(FontMgr, 'FontMgr', VOID, RefCnt);
  initMetadataForClass(FontMgrWithFallback, 'FontMgrWithFallback', VOID, FontMgr);
  initMetadataForClass(FontSlant, 'FontSlant', VOID, Enum);
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(FontStyle, 'FontStyle');
  initMetadataForCompanion(Companion_14);
  initMetadataForCompanion(Companion_15);
  initMetadataForClass(IRange, 'IRange');
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(Image, 'Image', VOID, RefCnt, [RefCnt, IHasImageInfo]);
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(ImageInfo, 'ImageInfo');
  initMetadataForCompanion(Companion_18);
  initMetadataForObject(_FinalizerHolder_7, '_FinalizerHolder');
  initMetadataForClass(ManagedString, 'ManagedString', VOID, Managed);
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(Matrix33, 'Matrix33');
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(Matrix44, 'Matrix44');
  initMetadataForClass(MipmapMode, 'MipmapMode', VOID, Enum);
  initMetadataForCompanion(Companion_21);
  initMetadataForObject(_FinalizerHolder_8, '_FinalizerHolder');
  initMetadataForClass(Paint, 'Paint', Paint_init_$Create$, Managed);
  initMetadataForClass(PaintMode, 'PaintMode', VOID, Enum);
  initMetadataForClass(PaintStrokeCap, 'PaintStrokeCap', VOID, Enum);
  initMetadataForClass(PaintStrokeJoin, 'PaintStrokeJoin', VOID, Enum);
  initMetadataForCompanion(Companion_22);
  initMetadataForObject(_FinalizerHolder_9, '_FinalizerHolder');
  initMetadataForClass(Path, 'Path', Path_init_$Create$, Managed);
  initMetadataForClass(PathDirection, 'PathDirection', VOID, Enum);
  initMetadataForClass(PathFillMode, 'PathFillMode', VOID, Enum);
  initMetadataForClass(PathOp, 'PathOp', VOID, Enum);
  initMetadataForClass(PathSegment, 'PathSegment', PathSegment);
  initMetadataForCompanion(Companion_23);
  initMetadataForClass(PathSegmentIterator, 'PathSegmentIterator', VOID, Managed);
  initMetadataForClass(PathVerb, 'PathVerb', VOID, Enum);
  initMetadataForCompanion(Companion_24);
  initMetadataForClass(Picture, 'Picture', VOID, RefCnt);
  initMetadataForCompanion(Companion_25);
  initMetadataForObject(_FinalizerHolder_10, '_FinalizerHolder');
  initMetadataForClass(PictureRecorder, 'PictureRecorder', PictureRecorder_init_$Create$, Managed);
  initMetadataForClass(PixelGeometry, 'PixelGeometry', VOID, Enum);
  initMetadataForCompanion(Companion_26);
  initMetadataForClass(Point, 'Point');
  initMetadataForClass(Point3, 'Point3');
  initMetadataForCompanion(Companion_27);
  initMetadataForClass(Rect, 'Rect');
  initMetadataForClass(RRect, 'RRect', VOID, Rect);
  initMetadataForCompanion(Companion_28);
  initMetadataForCompanion(Companion_29);
  initMetadataForClass(Shader, 'Shader', VOID, RefCnt);
  initMetadataForObject(ShadowUtils, 'ShadowUtils');
  initMetadataForClass(ArrayDecoder, 'ArrayDecoder');
  initMetadataForCompanion(Companion_30);
  initMetadataForClass(Surface, 'Surface', VOID, RefCnt);
  initMetadataForClass(SurfaceColorFormat, 'SurfaceColorFormat', VOID, Enum);
  initMetadataForClass(SurfaceOrigin, 'SurfaceOrigin', VOID, Enum);
  initMetadataForClass(SurfaceProps, 'SurfaceProps', SurfaceProps);
  initMetadataForCompanion(Companion_31);
  initMetadataForClass(Typeface, 'Typeface', VOID, RefCnt);
  initMetadataForCompanion(Companion_32);
  initMetadataForObject(_FinalizerHolder_11, '_FinalizerHolder');
  initMetadataForClass(U16String, 'U16String', VOID, Managed);
  initMetadataForObject(CharDirection, 'CharDirection');
  initMetadataForClass(Alignment, 'Alignment', VOID, Enum);
  initMetadataForClass(BaselineMode, 'BaselineMode', VOID, Enum);
  initMetadataForClass(DecorationLineStyle, 'DecorationLineStyle', VOID, Enum);
  initMetadataForCompanion(Companion_33);
  initMetadataForClass(DecorationStyle, 'DecorationStyle');
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  initMetadataForCompanion(Companion_34);
  initMetadataForClass(FontCollection, 'FontCollection', FontCollection_init_$Create$, RefCnt);
  initMetadataForClass(FontRastrSettings, 'FontRastrSettings');
  initMetadataForClass(HeightMode, 'HeightMode', VOID, Enum);
  initMetadataForCompanion(Companion_35);
  initMetadataForClass(LineMetrics, 'LineMetrics');
  initMetadataForCompanion(Companion_36);
  initMetadataForObject(_FinalizerHolder_12, '_FinalizerHolder');
  initMetadataForClass(Paragraph, 'Paragraph', VOID, Managed);
  initMetadataForCompanion(Companion_37);
  initMetadataForObject(_FinalizerHolder_13, '_FinalizerHolder');
  initMetadataForClass(ParagraphBuilder, 'ParagraphBuilder', VOID, Managed);
  initMetadataForCompanion(Companion_38);
  initMetadataForObject(_FinalizerHolder_14, '_FinalizerHolder');
  initMetadataForClass(ParagraphStyle, 'ParagraphStyle', ParagraphStyle, Managed);
  initMetadataForClass(PlaceholderAlignment, 'PlaceholderAlignment', VOID, Enum);
  initMetadataForClass(PlaceholderStyle, 'PlaceholderStyle');
  initMetadataForClass(RectHeightMode, 'RectHeightMode', VOID, Enum);
  initMetadataForClass(RectWidthMode, 'RectWidthMode', VOID, Enum);
  initMetadataForCompanion(Companion_39);
  initMetadataForClass(Shadow, 'Shadow');
  initMetadataForCompanion(Companion_40);
  initMetadataForClass(TextBox, 'TextBox');
  initMetadataForClass(TextIndent, 'TextIndent', TextIndent);
  initMetadataForCompanion(Companion_41);
  initMetadataForObject(_FinalizerHolder_15, '_FinalizerHolder');
  initMetadataForClass(TextStyle, 'TextStyle', TextStyle_init_$Create$, Managed);
  initMetadataForCompanion(Companion_42);
  initMetadataForClass(TypefaceFontProvider, 'TypefaceFontProvider', TypefaceFontProvider_init_$Create$, FontMgr);
  initMetadataForCompanion(Companion_43);
  initMetadataForClass(TypefaceFontProviderWithFallback, 'TypefaceFontProviderWithFallback', TypefaceFontProviderWithFallback_init_$Create$, TypefaceFontProvider);
  initMetadataForClass(GraphicsApi, 'GraphicsApi', VOID, Enum);
  initMetadataForClass(OS, 'OS', VOID, Enum);
  initMetadataForClass(Arch, 'Arch', VOID, Enum);
  initMetadataForClass(ClipboardManager, 'ClipboardManager', ClipboardManager);
  initMetadataForClass(URIManager, 'URIManager', URIManager);
  initMetadataForClass(RenderException, 'RenderException', RenderException, RuntimeException);
  initMetadataForClass(SystemTheme, 'SystemTheme', VOID, Enum);
  initMetadataForClass(InteropScope, 'InteropScope', InteropScope);
  initMetadataForClass(createWebGLContext$contextAttributes$1);
  initMetadataForClass(Pattern, 'Pattern');
  initMetadataForCompanion(Companion_44);
  initMetadataForClass(FinalizationThunk, 'FinalizationThunk');
  initMetadataForCompanion(Companion_45);
  initMetadataForClass(NativePointerArray, 'NativePointerArray');
  initMetadataForCompanion(Companion_46);
  initMetadataForObject(_FinalizerHolder_16, '_FinalizerHolder');
  initMetadataForObject(Stats, 'Stats');
  initMetadataForClass(CanvasRenderer, 'CanvasRenderer');
  initMetadataForClass(SkiaLayer$attachTo$1, VOID, VOID, CanvasRenderer);
  initMetadataForClass(SkiaLayer, 'SkiaLayer', SkiaLayer);
  //endregion
  function RTreeFactory_init_$Init$($this) {
    BBHFactory.call($this, org_jetbrains_skia_RTreeFactory__1nMake());
    RTreeFactory.call($this);
    Stats_instance.v3i();
    return $this;
  }
  function RTreeFactory_init_$Create$() {
    return RTreeFactory_init_$Init$(objectCreate(protoOf(RTreeFactory)));
  }
  function RTreeFactory() {
  }
  function _FinalizerHolder() {
    _FinalizerHolder_instance = this;
    this.a3j_1 = org_jetbrains_skia_BBHFactory__1nGetFinalizer();
  }
  var _FinalizerHolder_instance;
  function _FinalizerHolder_getInstance() {
    if (_FinalizerHolder_instance == null)
      new _FinalizerHolder();
    return _FinalizerHolder_instance;
  }
  function BBHFactory(ptr) {
    Managed.call(this, ptr, _FinalizerHolder_getInstance().a3j_1);
  }
  function Companion() {
    Companion_instance = this;
    Companion_instance_44.b3j();
  }
  protoOf(Companion).c3j = function (width, height, sampleCnt, stencilBits, fbId, fbFormat) {
    Stats_instance.v3i();
    var ptr = org_jetbrains_skia_BackendRenderTarget__1nMakeGL(width, height, sampleCnt, stencilBits, fbId, fbFormat);
    if (ptr === Companion_instance_46.d3j())
      throw new RenderException("Can't create OpenGL BackendRenderTarget");
    return new BackendRenderTarget(ptr);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _FinalizerHolder_0() {
    _FinalizerHolder_instance_0 = this;
    this.e3j_1 = org_jetbrains_skia_BackendRenderTarget__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_0;
  function _FinalizerHolder_getInstance_0() {
    if (_FinalizerHolder_instance_0 == null)
      new _FinalizerHolder_0();
    return _FinalizerHolder_instance_0;
  }
  function BackendRenderTarget(ptr) {
    Companion_getInstance();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_0().e3j_1);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    Companion_instance_44.b3j();
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Bitmap_init_$Init$($this) {
    Bitmap.call($this, org_jetbrains_skia_Bitmap__1nMake());
    Stats_instance.v3i();
    return $this;
  }
  function Bitmap_init_$Create$() {
    return Bitmap_init_$Init$(objectCreate(protoOf(Bitmap)));
  }
  function _FinalizerHolder_1() {
    _FinalizerHolder_instance_1 = this;
    this.f3j_1 = org_jetbrains_skia_Bitmap__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_1;
  function _FinalizerHolder_getInstance_1() {
    if (_FinalizerHolder_instance_1 == null)
      new _FinalizerHolder_1();
    return _FinalizerHolder_instance_1;
  }
  function _nGetImageInfo$ref() {
    var l = function (p0, p1, p2) {
      org_jetbrains_skia_Bitmap__1nGetImageInfo(p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = '_nGetImageInfo';
    return l;
  }
  function Bitmap(ptr) {
    Companion_getInstance_0();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_1().f3j_1);
    this.i3j_1 = null;
  }
  protoOf(Bitmap).j3j = function () {
    var tmp;
    try {
      if (this.i3j_1 == null) {
        var tmp_0 = this;
        var tmp_1 = Companion_getInstance_17();
        var tmp_2 = this.y3i_1;
        tmp_0.i3j_1 = tmp_1.l3j(tmp_2, _nGetImageInfo$ref());
      }
      tmp = ensureNotNull(this.i3j_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Bitmap).m3j = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = org_jetbrains_skia_Bitmap__1nIsImmutable(this.y3i_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Bitmap).n3j = function (info, rowBytes) {
    var tmp;
    try {
      this.i3j_1 = null;
      Stats_instance.v3i();
      tmp = org_jetbrains_skia_Bitmap__1nAllocPixelsRowBytes(this.y3i_1, info.p3j_1, info.q3j_1, info.o3j_1.r3j_1.s2_1, info.o3j_1.s3j_1.s2_1, getPtr(info.o3j_1.t3j_1), rowBytes);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(info.o3j_1.t3j_1);
    }
    return tmp;
  };
  protoOf(Bitmap).u3j = function (imageInfo) {
    return this.n3j(imageInfo, imageInfo.v3j());
  };
  var BlendMode_CLEAR_instance;
  var BlendMode_SRC_instance;
  var BlendMode_DST_instance;
  var BlendMode_SRC_OVER_instance;
  var BlendMode_DST_OVER_instance;
  var BlendMode_SRC_IN_instance;
  var BlendMode_DST_IN_instance;
  var BlendMode_SRC_OUT_instance;
  var BlendMode_DST_OUT_instance;
  var BlendMode_SRC_ATOP_instance;
  var BlendMode_DST_ATOP_instance;
  var BlendMode_XOR_instance;
  var BlendMode_PLUS_instance;
  var BlendMode_MODULATE_instance;
  var BlendMode_SCREEN_instance;
  var BlendMode_OVERLAY_instance;
  var BlendMode_DARKEN_instance;
  var BlendMode_LIGHTEN_instance;
  var BlendMode_COLOR_DODGE_instance;
  var BlendMode_COLOR_BURN_instance;
  var BlendMode_HARD_LIGHT_instance;
  var BlendMode_SOFT_LIGHT_instance;
  var BlendMode_DIFFERENCE_instance;
  var BlendMode_EXCLUSION_instance;
  var BlendMode_MULTIPLY_instance;
  var BlendMode_HUE_instance;
  var BlendMode_SATURATION_instance;
  var BlendMode_COLOR_instance;
  var BlendMode_LUMINOSITY_instance;
  function values() {
    return [BlendMode_CLEAR_getInstance(), BlendMode_SRC_getInstance(), BlendMode_DST_getInstance(), BlendMode_SRC_OVER_getInstance(), BlendMode_DST_OVER_getInstance(), BlendMode_SRC_IN_getInstance(), BlendMode_DST_IN_getInstance(), BlendMode_SRC_OUT_getInstance(), BlendMode_DST_OUT_getInstance(), BlendMode_SRC_ATOP_getInstance(), BlendMode_DST_ATOP_getInstance(), BlendMode_XOR_getInstance(), BlendMode_PLUS_getInstance(), BlendMode_MODULATE_getInstance(), BlendMode_SCREEN_getInstance(), BlendMode_OVERLAY_getInstance(), BlendMode_DARKEN_getInstance(), BlendMode_LIGHTEN_getInstance(), BlendMode_COLOR_DODGE_getInstance(), BlendMode_COLOR_BURN_getInstance(), BlendMode_HARD_LIGHT_getInstance(), BlendMode_SOFT_LIGHT_getInstance(), BlendMode_DIFFERENCE_getInstance(), BlendMode_EXCLUSION_getInstance(), BlendMode_MULTIPLY_getInstance(), BlendMode_HUE_getInstance(), BlendMode_SATURATION_getInstance(), BlendMode_COLOR_getInstance(), BlendMode_LUMINOSITY_getInstance()];
  }
  var BlendMode_entriesInitialized;
  function BlendMode_initEntries() {
    if (BlendMode_entriesInitialized)
      return Unit_instance;
    BlendMode_entriesInitialized = true;
    BlendMode_CLEAR_instance = new BlendMode('CLEAR', 0);
    BlendMode_SRC_instance = new BlendMode('SRC', 1);
    BlendMode_DST_instance = new BlendMode('DST', 2);
    BlendMode_SRC_OVER_instance = new BlendMode('SRC_OVER', 3);
    BlendMode_DST_OVER_instance = new BlendMode('DST_OVER', 4);
    BlendMode_SRC_IN_instance = new BlendMode('SRC_IN', 5);
    BlendMode_DST_IN_instance = new BlendMode('DST_IN', 6);
    BlendMode_SRC_OUT_instance = new BlendMode('SRC_OUT', 7);
    BlendMode_DST_OUT_instance = new BlendMode('DST_OUT', 8);
    BlendMode_SRC_ATOP_instance = new BlendMode('SRC_ATOP', 9);
    BlendMode_DST_ATOP_instance = new BlendMode('DST_ATOP', 10);
    BlendMode_XOR_instance = new BlendMode('XOR', 11);
    BlendMode_PLUS_instance = new BlendMode('PLUS', 12);
    BlendMode_MODULATE_instance = new BlendMode('MODULATE', 13);
    BlendMode_SCREEN_instance = new BlendMode('SCREEN', 14);
    BlendMode_OVERLAY_instance = new BlendMode('OVERLAY', 15);
    BlendMode_DARKEN_instance = new BlendMode('DARKEN', 16);
    BlendMode_LIGHTEN_instance = new BlendMode('LIGHTEN', 17);
    BlendMode_COLOR_DODGE_instance = new BlendMode('COLOR_DODGE', 18);
    BlendMode_COLOR_BURN_instance = new BlendMode('COLOR_BURN', 19);
    BlendMode_HARD_LIGHT_instance = new BlendMode('HARD_LIGHT', 20);
    BlendMode_SOFT_LIGHT_instance = new BlendMode('SOFT_LIGHT', 21);
    BlendMode_DIFFERENCE_instance = new BlendMode('DIFFERENCE', 22);
    BlendMode_EXCLUSION_instance = new BlendMode('EXCLUSION', 23);
    BlendMode_MULTIPLY_instance = new BlendMode('MULTIPLY', 24);
    BlendMode_HUE_instance = new BlendMode('HUE', 25);
    BlendMode_SATURATION_instance = new BlendMode('SATURATION', 26);
    BlendMode_COLOR_instance = new BlendMode('COLOR', 27);
    BlendMode_LUMINOSITY_instance = new BlendMode('LUMINOSITY', 28);
  }
  function BlendMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BlendMode_CLEAR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_CLEAR_instance;
  }
  function BlendMode_SRC_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_instance;
  }
  function BlendMode_DST_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_instance;
  }
  function BlendMode_SRC_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OVER_instance;
  }
  function BlendMode_DST_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OVER_instance;
  }
  function BlendMode_SRC_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_IN_instance;
  }
  function BlendMode_DST_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_IN_instance;
  }
  function BlendMode_SRC_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OUT_instance;
  }
  function BlendMode_DST_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OUT_instance;
  }
  function BlendMode_SRC_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_ATOP_instance;
  }
  function BlendMode_DST_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_ATOP_instance;
  }
  function BlendMode_XOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_XOR_instance;
  }
  function BlendMode_PLUS_getInstance() {
    BlendMode_initEntries();
    return BlendMode_PLUS_instance;
  }
  function BlendMode_MODULATE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MODULATE_instance;
  }
  function BlendMode_SCREEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SCREEN_instance;
  }
  function BlendMode_OVERLAY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_OVERLAY_instance;
  }
  function BlendMode_DARKEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DARKEN_instance;
  }
  function BlendMode_LIGHTEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LIGHTEN_instance;
  }
  function BlendMode_COLOR_DODGE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_DODGE_instance;
  }
  function BlendMode_COLOR_BURN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_BURN_instance;
  }
  function BlendMode_HARD_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HARD_LIGHT_instance;
  }
  function BlendMode_SOFT_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SOFT_LIGHT_instance;
  }
  function BlendMode_DIFFERENCE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DIFFERENCE_instance;
  }
  function BlendMode_EXCLUSION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_EXCLUSION_instance;
  }
  function BlendMode_MULTIPLY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MULTIPLY_instance;
  }
  function BlendMode_HUE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HUE_instance;
  }
  function BlendMode_SATURATION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SATURATION_instance;
  }
  function BlendMode_COLOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_instance;
  }
  function BlendMode_LUMINOSITY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LUMINOSITY_instance;
  }
  function BreakIterator$Companion$makeCharacterInstance$lambda($locale) {
    return function ($this$withErrorGuard, it) {
      return org_jetbrains_skia_BreakIterator__1nMake(0, $this$withErrorGuard.b3k($locale), it);
    };
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.c3k_1 = -1;
    this.d3k_1 = 0;
    this.e3k_1 = 100;
    this.f3k_1 = 100;
    this.g3k_1 = 200;
    this.h3k_1 = 200;
    this.i3k_1 = 300;
    this.j3k_1 = 300;
    this.k3k_1 = 400;
    this.l3k_1 = 400;
    this.m3k_1 = 500;
    Companion_instance_44.b3j();
  }
  protoOf(Companion_1).n3k = function (locale) {
    Stats_instance.v3i();
    return new BreakIterator(withErrorGuard('Failed to create character iterator', BreakIterator$Companion$makeCharacterInstance$lambda(locale)));
  };
  protoOf(Companion_1).o3k = function (locale, $super) {
    locale = locale === VOID ? null : locale;
    return $super === VOID ? this.n3k(locale) : $super.n3k.call(this, locale);
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function _FinalizerHolder_2() {
    _FinalizerHolder_instance_2 = this;
    this.p3k_1 = org_jetbrains_skia_BreakIterator__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_2;
  function _FinalizerHolder_getInstance_2() {
    if (_FinalizerHolder_instance_2 == null)
      new _FinalizerHolder_2();
    return _FinalizerHolder_instance_2;
  }
  function BreakIterator$setText$lambda(this$0, $text) {
    return function ($this$withErrorGuard, it) {
      var tmp = this$0.y3i_1;
      var tmp_0;
      if ($text == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'org.jetbrains.skia.BreakIterator.setText.<anonymous>.<anonymous>' call
        var tmp_1 = 0;
        var tmp_2 = $text.length;
        var tmp_3 = new Int16Array(tmp_2);
        while (tmp_1 < tmp_2) {
          var tmp_4 = tmp_1;
          // Inline function 'kotlin.code' call
          var this_0 = charSequenceGet($text, tmp_4);
          var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
          tmp_3[tmp_4] = toShort(tmp$ret$0);
          tmp_1 = tmp_1 + 1 | 0;
        }
        tmp_0 = tmp_3;
      }
      var tmp_5 = $this$withErrorGuard.q3k(tmp_0);
      var tmp1_safe_receiver = $text;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.length;
      return org_jetbrains_skia_BreakIterator__1nSetText(tmp, tmp_5, tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs, it);
    };
  }
  function BreakIterator(ptr) {
    Companion_getInstance_1();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_2().p3k_1);
    this.t3k_1 = null;
  }
  protoOf(BreakIterator).u1x = function () {
    protoOf(Managed).u1x.call(this);
    var tmp0_safe_receiver = this.t3k_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.u1x();
    }
  };
  protoOf(BreakIterator).u3k = function (offset) {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = org_jetbrains_skia_BreakIterator__1nPreceding(this.y3i_1, offset);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(BreakIterator).v3k = function (offset) {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = org_jetbrains_skia_BreakIterator__1nFollowing(this.y3i_1, offset);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(BreakIterator).w3k = function (text) {
    try {
      Stats_instance.v3i();
      var tmp0_safe_receiver = this.t3k_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.u1x();
      }
      var tmp = this;
      tmp.t3k_1 = new U16String(withErrorGuard('Failed to setText', BreakIterator$setText$lambda(this, text)));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(this.t3k_1);
    }
  };
  function withErrorGuard(message, block) {
    var errorCode = new Int32Array(1);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.withErrorGuard.<anonymous>' call
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        var handle = $this$interopScope.x3k(errorCode);
        var res = block($this$interopScope, handle);
        $this$interopScope.y3k(handle, errorCode);
        if (errorCode[0] > 0) {
          throw RuntimeException_init_$Create$(message + '; operation failed with status ' + toString(errorCode));
        }
        if (res === Companion_instance_46.d3j()) {
          throw IllegalArgumentException_init_$Create$(message);
        }
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
        }
      }
    }
    return res;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    Companion_instance_44.b3j();
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Canvas_init_$Init$(bitmap, surfaceProps, $this) {
    surfaceProps = surfaceProps === VOID ? new SurfaceProps() : surfaceProps;
    Canvas.call($this, org_jetbrains_skia_Canvas__1nMakeFromBitmap(bitmap.y3i_1, surfaceProps.b3l(), surfaceProps.a3l_1.s2_1), true, bitmap);
    Stats_instance.v3i();
    reachabilityBarrier(bitmap);
    return $this;
  }
  function Canvas_init_$Create$(bitmap, surfaceProps) {
    return Canvas_init_$Init$(bitmap, surfaceProps, objectCreate(protoOf(Canvas)));
  }
  function _FinalizerHolder_3() {
    _FinalizerHolder_instance_3 = this;
    this.c3l_1 = org_jetbrains_skia_Canvas__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_3;
  function _FinalizerHolder_getInstance_3() {
    if (_FinalizerHolder_instance_3 == null)
      new _FinalizerHolder_3();
    return _FinalizerHolder_instance_3;
  }
  function Canvas(ptr, managed, _owner) {
    Companion_getInstance_2();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_3().c3l_1, managed);
    this.f3l_1 = _owner;
  }
  protoOf(Canvas).g3l = function (r, paint) {
    Stats_instance.v3i();
    try {
      org_jetbrains_skia_Canvas__1nDrawRect(this.y3i_1, r.h3l_1, r.i3l_1, r.j3l_1, r.k3l_1, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).l3l = function (x, y, radius, paint) {
    Stats_instance.v3i();
    try {
      org_jetbrains_skia_Canvas__1nDrawOval(this.y3i_1, x - radius, y - radius, x + radius, y + radius, getPtr(paint));
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).m3l = function (r, paint) {
    Stats_instance.v3i();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.Canvas.drawRRect.<anonymous>' call
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          org_jetbrains_skia_Canvas__1nDrawRRect(this.y3i_1, r.h3l_1, r.i3l_1, r.j3l_1, r.k3l_1, $this$interopScope.s3l(r.r3l_1), r.r3l_1.length, getPtr(paint));
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
          }
        }
      }
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).t3l = function (path, paint) {
    Stats_instance.v3i();
    try {
      org_jetbrains_skia_Canvas__1nDrawPath(this.y3i_1, getPtr(path), getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(path);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).u3l = function (image, src, dst, samplingMode, paint, strict) {
    Stats_instance.v3i();
    try {
      org_jetbrains_skia_Canvas__1nDrawImageRect(this.y3i_1, getPtr(image), src.h3l_1, src.i3l_1, src.j3l_1, src.k3l_1, dst.h3l_1, dst.i3l_1, dst.j3l_1, dst.k3l_1, samplingMode.v3l(), samplingMode.w3l(), getPtr(paint), strict);
    }finally {
      reachabilityBarrier(image);
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).x3l = function (picture, matrix, paint) {
    Stats_instance.v3i();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.Canvas.drawPicture.<anonymous>' call
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          var tmp = this.y3i_1;
          var tmp_0 = getPtr(picture);
          org_jetbrains_skia_Canvas__1nDrawPicture(tmp, tmp_0, $this$interopScope.s3l(matrix == null ? null : matrix.y3l_1), getPtr(paint));
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(picture);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).y36 = function (color) {
    Stats_instance.v3i();
    try {
      org_jetbrains_skia_Canvas__1nClear(this.y3i_1, color);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).z3l = function () {
    Stats_instance.v3i();
    org_jetbrains_skia_Canvas__1nResetMatrix(this.y3i_1);
    return this;
  };
  protoOf(Canvas).a3m = function (r, mode, antiAlias) {
    Stats_instance.v3i();
    org_jetbrains_skia_Canvas__1nClipRect(this.y3i_1, r.h3l_1, r.i3l_1, r.j3l_1, r.k3l_1, mode.s2_1, antiAlias);
    return this;
  };
  protoOf(Canvas).b3m = function (r, mode, antiAlias) {
    Stats_instance.v3i();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Canvas.clipRRect.<anonymous>' call
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        org_jetbrains_skia_Canvas__1nClipRRect(this.y3i_1, r.h3l_1, r.i3l_1, r.j3l_1, r.k3l_1, $this$interopScope.s3l(r.r3l_1), r.r3l_1.length, mode.s2_1, antiAlias);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).c3m = function (p, mode, antiAlias) {
    Stats_instance.v3i();
    try {
      org_jetbrains_skia_Canvas__1nClipPath(this.y3i_1, getPtr(p), mode.s2_1, antiAlias);
    }finally {
      reachabilityBarrier(p);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).p3g = function (dx, dy) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Canvas.translate.<anonymous>' call
        access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        Stats_instance.v3i();
        org_jetbrains_skia_Canvas__1nTranslate(this.y3i_1, dx, dy);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).d3m = function (sx, sy) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Canvas.scale.<anonymous>' call
        access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        Stats_instance.v3i();
        org_jetbrains_skia_Canvas__1nScale(this.y3i_1, sx, sy);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).e3m = function (matrix) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Canvas.concat.<anonymous>' call
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        Stats_instance.v3i();
        org_jetbrains_skia_Canvas__1nConcat44(this.y3i_1, $this$interopScope.s3l(matrix.f3m_1));
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).g3m = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = org_jetbrains_skia_Canvas__1nSave(this.y3i_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Canvas).h3m = function (left, top, right, bottom, paint) {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = org_jetbrains_skia_Canvas__1nSaveLayerRect(this.y3i_1, left, top, right, bottom, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(Canvas).i3m = function () {
    Stats_instance.v3i();
    org_jetbrains_skia_Canvas__1nRestore(this.y3i_1);
    return this;
  };
  var ClipMode_DIFFERENCE_instance;
  var ClipMode_INTERSECT_instance;
  var ClipMode_entriesInitialized;
  function ClipMode_initEntries() {
    if (ClipMode_entriesInitialized)
      return Unit_instance;
    ClipMode_entriesInitialized = true;
    ClipMode_DIFFERENCE_instance = new ClipMode('DIFFERENCE', 0);
    ClipMode_INTERSECT_instance = new ClipMode('INTERSECT', 1);
  }
  function ClipMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClipMode_DIFFERENCE_getInstance() {
    ClipMode_initEntries();
    return ClipMode_DIFFERENCE_instance;
  }
  function ClipMode_INTERSECT_getInstance() {
    ClipMode_initEntries();
    return ClipMode_INTERSECT_instance;
  }
  var ColorAlphaType_UNKNOWN_instance;
  var ColorAlphaType_OPAQUE_instance;
  var ColorAlphaType_PREMUL_instance;
  var ColorAlphaType_UNPREMUL_instance;
  function values_0() {
    return [ColorAlphaType_UNKNOWN_getInstance(), ColorAlphaType_OPAQUE_getInstance(), ColorAlphaType_PREMUL_getInstance(), ColorAlphaType_UNPREMUL_getInstance()];
  }
  var ColorAlphaType_entriesInitialized;
  function ColorAlphaType_initEntries() {
    if (ColorAlphaType_entriesInitialized)
      return Unit_instance;
    ColorAlphaType_entriesInitialized = true;
    ColorAlphaType_UNKNOWN_instance = new ColorAlphaType('UNKNOWN', 0);
    ColorAlphaType_OPAQUE_instance = new ColorAlphaType('OPAQUE', 1);
    ColorAlphaType_PREMUL_instance = new ColorAlphaType('PREMUL', 2);
    ColorAlphaType_UNPREMUL_instance = new ColorAlphaType('UNPREMUL', 3);
  }
  function ColorAlphaType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ColorAlphaType_UNKNOWN_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_UNKNOWN_instance;
  }
  function ColorAlphaType_OPAQUE_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_OPAQUE_instance;
  }
  function ColorAlphaType_PREMUL_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_PREMUL_instance;
  }
  function ColorAlphaType_UNPREMUL_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_UNPREMUL_instance;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    Companion_instance_44.b3j();
    this.j3m_1 = ColorFilter_init_$Create$_0(org_jetbrains_skia_ColorFilter__1nGetSRGBToLinearGamma(), false);
    this.k3m_1 = ColorFilter_init_$Create$_0(org_jetbrains_skia_ColorFilter__1nGetLuma(), false);
  }
  protoOf(Companion_3).l3m = function (color, mode) {
    Stats_instance.v3i();
    return ColorFilter_init_$Create$(org_jetbrains_skia_ColorFilter__1nMakeBlend(color, mode.s2_1));
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ColorFilter_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    ColorFilter.call($this);
    return $this;
  }
  function ColorFilter_init_$Create$(ptr) {
    return ColorFilter_init_$Init$(ptr, objectCreate(protoOf(ColorFilter)));
  }
  function ColorFilter_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    ColorFilter.call($this);
    return $this;
  }
  function ColorFilter_init_$Create$_0(ptr, allowClose) {
    return ColorFilter_init_$Init$_0(ptr, allowClose, objectCreate(protoOf(ColorFilter)));
  }
  function ColorFilter() {
    Companion_getInstance_3();
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.p3m_1 = new ColorInfo(ColorType_UNKNOWN_getInstance(), ColorAlphaType_UNKNOWN_getInstance(), null);
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function ColorInfo(colorType, alphaType, colorSpace) {
    Companion_getInstance_4();
    this.r3j_1 = colorType;
    this.s3j_1 = alphaType;
    this.t3j_1 = colorSpace;
  }
  protoOf(ColorInfo).y3j = function () {
    return this.s3j_1.equals(ColorAlphaType_OPAQUE_getInstance()) || this.r3j_1.s3m();
  };
  protoOf(ColorInfo).t3m = function () {
    return this.r3j_1.t3m();
  };
  protoOf(ColorInfo).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof ColorInfo))
      return false;
    if (!this.r3j_1.equals(other.r3j_1))
      return false;
    if (!this.s3j_1.equals(other.s3j_1))
      return false;
    return equals(this.t3j_1, other.t3j_1);
  };
  protoOf(ColorInfo).hashCode = function () {
    var prime = 59;
    var result = 1;
    result = imul(result, prime) + this.r3j_1.hashCode() | 0;
    result = imul(result, prime) + this.s3j_1.hashCode() | 0;
    var tmp = imul(result, prime);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.t3j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(ColorInfo).toString = function () {
    return 'ColorInfo(_colorType=' + this.r3j_1.toString() + ', _alphaType=' + this.s3j_1.toString() + ', _colorSpace=' + toString_0(this.t3j_1) + ')';
  };
  function Companion_5() {
    Companion_instance_5 = this;
    Companion_instance_44.b3j();
    this.u3m_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeSRGB(), false);
    this.v3m_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeSRGBLinear(), false);
    this.w3m_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeDisplayP3(), false);
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function ColorSpace_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_4().x3m_1, true);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$(ptr) {
    return ColorSpace_init_$Init$(ptr, objectCreate(protoOf(ColorSpace)));
  }
  function ColorSpace_init_$Init$_0(ptr, managed, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_4().x3m_1, managed);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$_0(ptr, managed) {
    return ColorSpace_init_$Init$_0(ptr, managed, objectCreate(protoOf(ColorSpace)));
  }
  function _FinalizerHolder_4() {
    _FinalizerHolder_instance_4 = this;
    this.x3m_1 = org_jetbrains_skia_ColorSpace__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_4;
  function _FinalizerHolder_getInstance_4() {
    if (_FinalizerHolder_instance_4 == null)
      new _FinalizerHolder_4();
    return _FinalizerHolder_instance_4;
  }
  function ColorSpace() {
    Companion_getInstance_5();
  }
  var ColorType_UNKNOWN_instance;
  var ColorType_ALPHA_8_instance;
  var ColorType_RGB_565_instance;
  var ColorType_ARGB_4444_instance;
  var ColorType_RGBA_8888_instance;
  var ColorType_RGB_888X_instance;
  var ColorType_BGRA_8888_instance;
  var ColorType_RGBA_1010102_instance;
  var ColorType_BGRA_1010102_instance;
  var ColorType_RGB_101010X_instance;
  var ColorType_BGR_101010X_instance;
  var ColorType_BGR_101010X_XR_instance;
  var ColorType_BGRA_10101010_XR_instance;
  var ColorType_RGBA_10x6_instance;
  var ColorType_GRAY_8_instance;
  var ColorType_RGBA_F16NORM_instance;
  var ColorType_RGBA_F16_instance;
  var ColorType_RGBA_F32_instance;
  var ColorType_R8G8_UNORM_instance;
  var ColorType_A16_FLOAT_instance;
  var ColorType_R16G16_FLOAT_instance;
  var ColorType_A16_UNORM_instance;
  var ColorType_R16G16_UNORM_instance;
  var ColorType_R16G16B16A16_UNORM_instance;
  function Companion_6() {
    Companion_instance_6 = this;
    this.y3m_1 = ColorType_BGRA_8888_getInstance();
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    ColorType_initEntries();
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function values_1() {
    return [ColorType_UNKNOWN_getInstance(), ColorType_ALPHA_8_getInstance(), ColorType_RGB_565_getInstance(), ColorType_ARGB_4444_getInstance(), ColorType_RGBA_8888_getInstance(), ColorType_RGB_888X_getInstance(), ColorType_BGRA_8888_getInstance(), ColorType_RGBA_1010102_getInstance(), ColorType_BGRA_1010102_getInstance(), ColorType_RGB_101010X_getInstance(), ColorType_BGR_101010X_getInstance(), ColorType_BGR_101010X_XR_getInstance(), ColorType_BGRA_10101010_XR_getInstance(), ColorType_RGBA_10x6_getInstance(), ColorType_GRAY_8_getInstance(), ColorType_RGBA_F16NORM_getInstance(), ColorType_RGBA_F16_getInstance(), ColorType_RGBA_F32_getInstance(), ColorType_R8G8_UNORM_getInstance(), ColorType_A16_FLOAT_getInstance(), ColorType_R16G16_FLOAT_getInstance(), ColorType_A16_UNORM_getInstance(), ColorType_R16G16_UNORM_getInstance(), ColorType_R16G16B16A16_UNORM_getInstance()];
  }
  var ColorType_entriesInitialized;
  function ColorType_initEntries() {
    if (ColorType_entriesInitialized)
      return Unit_instance;
    ColorType_entriesInitialized = true;
    ColorType_UNKNOWN_instance = new ColorType('UNKNOWN', 0);
    ColorType_ALPHA_8_instance = new ColorType('ALPHA_8', 1);
    ColorType_RGB_565_instance = new ColorType('RGB_565', 2);
    ColorType_ARGB_4444_instance = new ColorType('ARGB_4444', 3);
    ColorType_RGBA_8888_instance = new ColorType('RGBA_8888', 4);
    ColorType_RGB_888X_instance = new ColorType('RGB_888X', 5);
    ColorType_BGRA_8888_instance = new ColorType('BGRA_8888', 6);
    ColorType_RGBA_1010102_instance = new ColorType('RGBA_1010102', 7);
    ColorType_BGRA_1010102_instance = new ColorType('BGRA_1010102', 8);
    ColorType_RGB_101010X_instance = new ColorType('RGB_101010X', 9);
    ColorType_BGR_101010X_instance = new ColorType('BGR_101010X', 10);
    ColorType_BGR_101010X_XR_instance = new ColorType('BGR_101010X_XR', 11);
    ColorType_BGRA_10101010_XR_instance = new ColorType('BGRA_10101010_XR', 12);
    ColorType_RGBA_10x6_instance = new ColorType('RGBA_10x6', 13);
    ColorType_GRAY_8_instance = new ColorType('GRAY_8', 14);
    ColorType_RGBA_F16NORM_instance = new ColorType('RGBA_F16NORM', 15);
    ColorType_RGBA_F16_instance = new ColorType('RGBA_F16', 16);
    ColorType_RGBA_F32_instance = new ColorType('RGBA_F32', 17);
    ColorType_R8G8_UNORM_instance = new ColorType('R8G8_UNORM', 18);
    ColorType_A16_FLOAT_instance = new ColorType('A16_FLOAT', 19);
    ColorType_R16G16_FLOAT_instance = new ColorType('R16G16_FLOAT', 20);
    ColorType_A16_UNORM_instance = new ColorType('A16_UNORM', 21);
    ColorType_R16G16_UNORM_instance = new ColorType('R16G16_UNORM', 22);
    ColorType_R16G16B16A16_UNORM_instance = new ColorType('R16G16B16A16_UNORM', 23);
    Companion_getInstance_6();
  }
  function ColorType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorType).t3m = function () {
    var tmp;
    switch (this.s2_1) {
      case 0:
        tmp = 0;
        break;
      case 1:
        tmp = 1;
        break;
      case 2:
        tmp = 2;
        break;
      case 3:
        tmp = 2;
        break;
      case 4:
        tmp = 4;
        break;
      case 6:
        tmp = 4;
        break;
      case 5:
        tmp = 4;
        break;
      case 7:
        tmp = 4;
        break;
      case 9:
        tmp = 4;
        break;
      case 8:
        tmp = 4;
        break;
      case 10:
        tmp = 4;
        break;
      case 11:
        tmp = 4;
        break;
      case 12:
        tmp = 4;
        break;
      case 13:
        tmp = 8;
        break;
      case 14:
        tmp = 1;
        break;
      case 15:
        tmp = 8;
        break;
      case 16:
        tmp = 8;
        break;
      case 17:
        tmp = 16;
        break;
      case 18:
        tmp = 2;
        break;
      case 21:
        tmp = 2;
        break;
      case 22:
        tmp = 4;
        break;
      case 19:
        tmp = 2;
        break;
      case 20:
        tmp = 4;
        break;
      case 23:
        tmp = 8;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorType).s3m = function () {
    return org_jetbrains_skia_ColorType__1nIsAlwaysOpaque(this.s2_1);
  };
  function ColorType_UNKNOWN_getInstance() {
    ColorType_initEntries();
    return ColorType_UNKNOWN_instance;
  }
  function ColorType_ALPHA_8_getInstance() {
    ColorType_initEntries();
    return ColorType_ALPHA_8_instance;
  }
  function ColorType_RGB_565_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_565_instance;
  }
  function ColorType_ARGB_4444_getInstance() {
    ColorType_initEntries();
    return ColorType_ARGB_4444_instance;
  }
  function ColorType_RGBA_8888_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_8888_instance;
  }
  function ColorType_RGB_888X_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_888X_instance;
  }
  function ColorType_BGRA_8888_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_8888_instance;
  }
  function ColorType_RGBA_1010102_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_1010102_instance;
  }
  function ColorType_BGRA_1010102_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_1010102_instance;
  }
  function ColorType_RGB_101010X_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_101010X_instance;
  }
  function ColorType_BGR_101010X_getInstance() {
    ColorType_initEntries();
    return ColorType_BGR_101010X_instance;
  }
  function ColorType_BGR_101010X_XR_getInstance() {
    ColorType_initEntries();
    return ColorType_BGR_101010X_XR_instance;
  }
  function ColorType_BGRA_10101010_XR_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_10101010_XR_instance;
  }
  function ColorType_RGBA_10x6_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_10x6_instance;
  }
  function ColorType_GRAY_8_getInstance() {
    ColorType_initEntries();
    return ColorType_GRAY_8_instance;
  }
  function ColorType_RGBA_F16NORM_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F16NORM_instance;
  }
  function ColorType_RGBA_F16_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F16_instance;
  }
  function ColorType_RGBA_F32_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F32_instance;
  }
  function ColorType_R8G8_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R8G8_UNORM_instance;
  }
  function ColorType_A16_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_A16_FLOAT_instance;
  }
  function ColorType_R16G16_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16_FLOAT_instance;
  }
  function ColorType_A16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_A16_UNORM_instance;
  }
  function ColorType_R16G16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16_UNORM_instance;
  }
  function ColorType_R16G16B16A16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16B16A16_UNORM_instance;
  }
  function CubicResampler(b, c) {
    this.z3m_1 = b;
    this.a3n_1 = c;
  }
  protoOf(CubicResampler).v3l = function () {
    return toBits(this.z3m_1) | -2147483648;
  };
  protoOf(CubicResampler).w3l = function () {
    return toBits(this.a3n_1);
  };
  protoOf(CubicResampler).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof CubicResampler))
      return false;
    if (!(compareTo(this.z3m_1, other.z3m_1) === 0))
      return false;
    return compareTo(this.a3n_1, other.a3n_1) === 0;
  };
  protoOf(CubicResampler).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.z3m_1) | 0;
    result = imul(result, PRIME) + toBits(this.a3n_1) | 0;
    return result;
  };
  protoOf(CubicResampler).toString = function () {
    return 'CubicResampler(_B=' + this.z3m_1 + ', _C=' + this.a3n_1 + ')';
  };
  function Companion_7() {
    Companion_instance_7 = this;
    Companion_instance_44.b3j();
  }
  protoOf(Companion_7).b3n = function (bytes, offset, length) {
    Stats_instance.v3i();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Companion.makeFromBytes.<anonymous>' call
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        tmp$ret$1 = org_jetbrains_skia_Data__1nMakeFromBytes($this$interopScope.c3n(bytes), offset, length);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
        }
      }
    }
    return new Data(tmp$ret$1);
  };
  protoOf(Companion_7).d3n = function (bytes, offset, length, $super) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? bytes.length : length;
    return $super === VOID ? this.b3n(bytes, offset, length) : $super.b3n.call(this, bytes, offset, length);
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function _FinalizerHolder_5() {
    _FinalizerHolder_instance_5 = this;
    this.e3n_1 = org_jetbrains_skia_Data__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_5;
  function _FinalizerHolder_getInstance_5() {
    if (_FinalizerHolder_instance_5 == null)
      new _FinalizerHolder_5();
    return _FinalizerHolder_instance_5;
  }
  function Data(ptr) {
    Companion_getInstance_7();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_5().e3n_1);
    this.h3n_1 = null;
  }
  protoOf(Data).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof Data ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherData = tmp;
    return this.z3i(otherData);
  };
  protoOf(Data).z3i = function (other) {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = org_jetbrains_skia_Data__1nEquals(this.y3i_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  function Companion_8() {
    Companion_instance_8 = this;
    Companion_instance_44.b3j();
  }
  protoOf(Companion_8).i3n = function () {
    Stats_instance.v3i();
    loadOpenGLLibrary();
    var ptr = org_jetbrains_skia_DirectContext__1nMakeGL();
    if (ptr === Companion_instance_46.d3j())
      throw new RenderException("Can't create OpenGL DirectContext");
    return new DirectContext(ptr);
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function DirectContext(ptr) {
    Companion_getInstance_8();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(DirectContext).l3n = function () {
    Stats_instance.v3i();
    org_jetbrains_skia_DirectContext__1nFlushDefault(this.y3i_1);
    return this;
  };
  protoOf(DirectContext).m3n = function (surface, syncCpu) {
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_DirectContext__1nFlushAndSubmit(this.y3i_1, surface.y3i_1, syncCpu);
    }finally {
      reachabilityBarrier(this);
    }
  };
  protoOf(DirectContext).n3n = function (surface, syncCpu, $super) {
    syncCpu = syncCpu === VOID ? false : syncCpu;
    var tmp;
    if ($super === VOID) {
      this.m3n(surface, syncCpu);
      tmp = Unit_instance;
    } else {
      tmp = $super.m3n.call(this, surface, syncCpu);
    }
    return tmp;
  };
  function FilterMipmap(filterMode, mipmapMode) {
    mipmapMode = mipmapMode === VOID ? MipmapMode_NONE_getInstance() : mipmapMode;
    this.o3n_1 = filterMode;
    this.p3n_1 = mipmapMode;
  }
  protoOf(FilterMipmap).v3l = function () {
    return this.o3n_1.s2_1;
  };
  protoOf(FilterMipmap).w3l = function () {
    return this.p3n_1.s2_1;
  };
  protoOf(FilterMipmap).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FilterMipmap))
      return false;
    if (!this.o3n_1.equals(other.o3n_1))
      return false;
    return this.p3n_1.equals(other.p3n_1);
  };
  protoOf(FilterMipmap).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.o3n_1.hashCode() | 0;
    result = imul(result, PRIME) + this.p3n_1.hashCode() | 0;
    return result;
  };
  protoOf(FilterMipmap).toString = function () {
    return 'FilterMipmap(_filterMode=' + this.o3n_1.toString() + ', _mipmapMode=' + this.p3n_1.toString() + ')';
  };
  var FilterMode_NEAREST_instance;
  var FilterMode_LINEAR_instance;
  var FilterMode_entriesInitialized;
  function FilterMode_initEntries() {
    if (FilterMode_entriesInitialized)
      return Unit_instance;
    FilterMode_entriesInitialized = true;
    FilterMode_NEAREST_instance = new FilterMode('NEAREST', 0);
    FilterMode_LINEAR_instance = new FilterMode('LINEAR', 1);
  }
  function FilterMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FilterMode_NEAREST_getInstance() {
    FilterMode_initEntries();
    return FilterMode_NEAREST_instance;
  }
  function FilterMode_LINEAR_getInstance() {
    FilterMode_initEntries();
    return FilterMode_LINEAR_instance;
  }
  function Companion_9() {
    Companion_instance_9 = this;
    Companion_instance_44.b3j();
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function Font_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_6().q3n_1);
    Font.call($this);
    return $this;
  }
  function Font_init_$Init$_0($this) {
    Font_init_$Init$(org_jetbrains_skia_Font__1nMakeDefault(), $this);
    Stats_instance.v3i();
    return $this;
  }
  function Font_init_$Create$() {
    return Font_init_$Init$_0(objectCreate(protoOf(Font)));
  }
  function Font_init_$Init$_1(typeface, size, $this) {
    Font_init_$Init$(org_jetbrains_skia_Font__1nMakeTypefaceSize(getPtr(typeface), size), $this);
    Stats_instance.v3i();
    reachabilityBarrier(typeface);
    return $this;
  }
  function Font_init_$Create$_0(typeface, size) {
    return Font_init_$Init$_1(typeface, size, objectCreate(protoOf(Font)));
  }
  function _FinalizerHolder_6() {
    _FinalizerHolder_instance_6 = this;
    this.q3n_1 = org_jetbrains_skia_Font__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_6;
  function _FinalizerHolder_getInstance_6() {
    if (_FinalizerHolder_instance_6 == null)
      new _FinalizerHolder_6();
    return _FinalizerHolder_instance_6;
  }
  function Font$_get_metrics_$lambda_bxy7iq(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Font__1nGetMetrics(this$0.y3i_1, it);
      return Unit_instance;
    };
  }
  protoOf(Font).z3i = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Font__1nEquals(this.y3i_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Font).t3n = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      var tmp_0 = Companion_instance_11;
      tmp = fromInteropPointer(tmp_0, Font$_get_metrics_$lambda_bxy7iq(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Font() {
    Companion_getInstance_9();
  }
  var FontEdging_ALIAS_instance;
  var FontEdging_ANTI_ALIAS_instance;
  var FontEdging_SUBPIXEL_ANTI_ALIAS_instance;
  var FontEdging_entriesInitialized;
  function FontEdging_initEntries() {
    if (FontEdging_entriesInitialized)
      return Unit_instance;
    FontEdging_entriesInitialized = true;
    FontEdging_ALIAS_instance = new FontEdging('ALIAS', 0);
    FontEdging_ANTI_ALIAS_instance = new FontEdging('ANTI_ALIAS', 1);
    FontEdging_SUBPIXEL_ANTI_ALIAS_instance = new FontEdging('SUBPIXEL_ANTI_ALIAS', 2);
  }
  function FontEdging(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontEdging_ALIAS_getInstance() {
    FontEdging_initEntries();
    return FontEdging_ALIAS_instance;
  }
  function FontEdging_ANTI_ALIAS_getInstance() {
    FontEdging_initEntries();
    return FontEdging_ANTI_ALIAS_instance;
  }
  function FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance() {
    FontEdging_initEntries();
    return FontEdging_SUBPIXEL_ANTI_ALIAS_instance;
  }
  function FontFeature$Companion$parseW3$lambda(it) {
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString(trim(isCharSequence(it) ? it : THROW_CCE()));
    var parts = split(tmp$ret$0, [' ']);
    var name = parts.p(0);
    var value = getOrNull(parts, 1);
    var tmp;
    switch (value) {
      case 'on':
      case null:
        tmp = 1;
        break;
      case 'off':
        tmp = 0;
        break;
      default:
        var tmp0_elvis_lhs = toIntOrNull(value);
        tmp = tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs;
        break;
    }
    var value_0 = tmp;
    return name.length === 4 ? FontFeature_init_$Create$(name, value_0) : null;
  }
  function FontFeature_init_$Init$(feature, value, $this) {
    FontFeature.call($this, Companion_instance_14.u3n(feature), value, _UInt___init__impl__l7qpdl(0), _UInt___init__impl__l7qpdl(-1));
    return $this;
  }
  function FontFeature_init_$Create$(feature, value) {
    return FontFeature_init_$Init$(feature, value, objectCreate(protoOf(FontFeature)));
  }
  function Companion_10() {
    Companion_instance_10 = this;
    this.v3n_1 = _UInt___init__impl__l7qpdl(0);
    this.w3n_1 = _UInt___init__impl__l7qpdl(-1);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.x3n_1 = fillArrayVal(Array(0), null);
    this.y3n_1 = compilePattern('\\s+');
    this.z3n_1 = compilePattern('([-+])?([a-z0-9]{4})(?:\\[(\\d+)?:(\\d+)?\\])?(?:=(\\d+))?');
    this.a3o_1 = 1;
    this.b3o_1 = 2;
    this.c3o_1 = 3;
    this.d3o_1 = 4;
    this.e3o_1 = 5;
  }
  protoOf(Companion_10).f3o = function (str) {
    var tmp = splitToSequence(str, [',']);
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = toList(mapNotNull(tmp, FontFeature$Companion$parseW3$lambda));
    return copyToArray(this_0);
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function FontFeature(_tag, value, start, end) {
    Companion_getInstance_10();
    this.g3o_1 = _tag;
    this.h3o_1 = value;
    this.i3o_1 = start;
    this.j3o_1 = end;
  }
  protoOf(FontFeature).k3o = function () {
    return Companion_instance_14.l3o(this.g3o_1);
  };
  protoOf(FontFeature).toString = function () {
    var range = '';
    var tmp;
    var tmp0 = this.i3o_1;
    // Inline function 'kotlin.UInt.compareTo' call
    var other = _UInt___init__impl__l7qpdl(0);
    if (uintCompare(_UInt___get_data__impl__f0vqqw(tmp0), _UInt___get_data__impl__f0vqqw(other)) > 0) {
      tmp = true;
    } else {
      var tmp2 = this.j3o_1;
      // Inline function 'kotlin.UInt.compareTo' call
      var other_0 = _UInt___init__impl__l7qpdl(-1);
      tmp = uintCompare(_UInt___get_data__impl__f0vqqw(tmp2), _UInt___get_data__impl__f0vqqw(other_0)) < 0;
    }
    if (tmp) {
      var tmp_0;
      var tmp4 = this.i3o_1;
      // Inline function 'kotlin.UInt.compareTo' call
      var other_1 = _UInt___init__impl__l7qpdl(0);
      if (uintCompare(_UInt___get_data__impl__f0vqqw(tmp4), _UInt___get_data__impl__f0vqqw(other_1)) > 0) {
        tmp_0 = new UInt(this.i3o_1);
      } else {
        tmp_0 = '';
      }
      var tmp_1 = '[' + tmp_0 + ':';
      var tmp_2;
      var tmp6 = this.j3o_1;
      // Inline function 'kotlin.UInt.compareTo' call
      var other_2 = _UInt___init__impl__l7qpdl(-1);
      if (uintCompare(_UInt___get_data__impl__f0vqqw(tmp6), _UInt___get_data__impl__f0vqqw(other_2)) < 0) {
        tmp_2 = new UInt(this.j3o_1);
      } else {
        tmp_2 = '';
      }
      range = tmp_1 + toString(tmp_2) + ']';
    }
    var valuePrefix = '';
    var valueSuffix = '';
    if (this.h3o_1 === 0)
      valuePrefix = '-';
    else if (this.h3o_1 === 1)
      valuePrefix = '+';
    else
      valueSuffix = '=' + this.h3o_1;
    return 'FontFeature(' + valuePrefix + this.g3o_1 + range + valueSuffix + ')';
  };
  protoOf(FontFeature).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontFeature))
      return false;
    if (!(this.k3o() === other.k3o()))
      return false;
    if (!(this.h3o_1 === other.h3o_1))
      return false;
    if (!(this.i3o_1 === other.i3o_1))
      return false;
    return this.j3o_1 === other.j3o_1;
  };
  protoOf(FontFeature).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.g3o_1 | 0;
    result = imul(result, PRIME) + this.h3o_1 | 0;
    var tmp = imul(result, PRIME);
    // Inline function 'kotlin.UInt.shr' call
    var this_0 = this.i3o_1;
    var tmp2 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) >>> 16 | 0);
    // Inline function 'kotlin.UInt.xor' call
    var other = this.i3o_1;
    // Inline function 'kotlin.UInt.toInt' call
    var this_1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp2) ^ _UInt___get_data__impl__f0vqqw(other));
    result = tmp + _UInt___get_data__impl__f0vqqw(this_1) | 0;
    var tmp_0 = imul(result, PRIME);
    // Inline function 'kotlin.UInt.shr' call
    var this_2 = this.j3o_1;
    var tmp7 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_2) >>> 16 | 0);
    // Inline function 'kotlin.UInt.xor' call
    var other_0 = this.j3o_1;
    // Inline function 'kotlin.UInt.toInt' call
    var this_3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp7) ^ _UInt___get_data__impl__f0vqqw(other_0));
    result = tmp_0 + _UInt___get_data__impl__f0vqqw(this_3) | 0;
    return result;
  };
  var FontHinting_NONE_instance;
  var FontHinting_SLIGHT_instance;
  var FontHinting_NORMAL_instance;
  var FontHinting_FULL_instance;
  var FontHinting_entriesInitialized;
  function FontHinting_initEntries() {
    if (FontHinting_entriesInitialized)
      return Unit_instance;
    FontHinting_entriesInitialized = true;
    FontHinting_NONE_instance = new FontHinting('NONE', 0);
    FontHinting_SLIGHT_instance = new FontHinting('SLIGHT', 1);
    FontHinting_NORMAL_instance = new FontHinting('NORMAL', 2);
    FontHinting_FULL_instance = new FontHinting('FULL', 3);
  }
  function FontHinting(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontHinting_NONE_getInstance() {
    FontHinting_initEntries();
    return FontHinting_NONE_instance;
  }
  function FontHinting_SLIGHT_getInstance() {
    FontHinting_initEntries();
    return FontHinting_SLIGHT_instance;
  }
  function FontHinting_NORMAL_getInstance() {
    FontHinting_initEntries();
    return FontHinting_NORMAL_instance;
  }
  function FontHinting_FULL_getInstance() {
    FontHinting_initEntries();
    return FontHinting_FULL_instance;
  }
  function Companion_11() {
  }
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function FontMetrics(top, ascent, descent, bottom, leading, avgCharWidth, maxCharWidth, xMin, xMax, xHeight, capHeight, underlineThickness, underlinePosition, strikeoutThickness, strikeoutPosition) {
    this.m3o_1 = top;
    this.n3o_1 = ascent;
    this.o3o_1 = descent;
    this.p3o_1 = bottom;
    this.q3o_1 = leading;
    this.r3o_1 = avgCharWidth;
    this.s3o_1 = maxCharWidth;
    this.t3o_1 = xMin;
    this.u3o_1 = xMax;
    this.v3o_1 = xHeight;
    this.w3o_1 = capHeight;
    this.x3o_1 = underlineThickness;
    this.y3o_1 = underlinePosition;
    this.z3o_1 = strikeoutThickness;
    this.a3p_1 = strikeoutPosition;
  }
  protoOf(FontMetrics).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontMetrics))
      return false;
    if (!(compareTo(this.m3o_1, other.m3o_1) === 0))
      return false;
    if (!(compareTo(this.n3o_1, other.n3o_1) === 0))
      return false;
    if (!(compareTo(this.o3o_1, other.o3o_1) === 0))
      return false;
    if (!(compareTo(this.p3o_1, other.p3o_1) === 0))
      return false;
    if (!(compareTo(this.q3o_1, other.q3o_1) === 0))
      return false;
    if (!(compareTo(this.r3o_1, other.r3o_1) === 0))
      return false;
    if (!(compareTo(this.s3o_1, other.s3o_1) === 0))
      return false;
    if (!(compareTo(this.t3o_1, other.t3o_1) === 0))
      return false;
    if (!(compareTo(this.u3o_1, other.u3o_1) === 0))
      return false;
    if (!(compareTo(this.v3o_1, other.v3o_1) === 0))
      return false;
    if (!(compareTo(this.w3o_1, other.w3o_1) === 0))
      return false;
    if (this.x3o_1 == null ? !(other.x3o_1 == null) : !(this.x3o_1 == other.x3o_1))
      return false;
    if (this.y3o_1 == null ? !(other.y3o_1 == null) : !(this.y3o_1 == other.y3o_1))
      return false;
    if (this.z3o_1 == null ? !(other.z3o_1 == null) : !(this.z3o_1 == other.z3o_1))
      return false;
    return !(this.a3p_1 == null ? !(other.a3p_1 == null) : !(this.a3p_1 == other.a3p_1));
  };
  protoOf(FontMetrics).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.m3o_1) | 0;
    result = imul(result, PRIME) + toBits(this.n3o_1) | 0;
    result = imul(result, PRIME) + toBits(this.o3o_1) | 0;
    result = imul(result, PRIME) + toBits(this.p3o_1) | 0;
    result = imul(result, PRIME) + toBits(this.q3o_1) | 0;
    result = imul(result, PRIME) + toBits(this.r3o_1) | 0;
    result = imul(result, PRIME) + toBits(this.s3o_1) | 0;
    result = imul(result, PRIME) + toBits(this.t3o_1) | 0;
    result = imul(result, PRIME) + toBits(this.u3o_1) | 0;
    result = imul(result, PRIME) + toBits(this.v3o_1) | 0;
    result = imul(result, PRIME) + toBits(this.w3o_1) | 0;
    var tmp = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.x3o_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.y3o_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.z3o_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    result = tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    var tmp_2 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.a3p_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    result = tmp_2 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
    return result;
  };
  protoOf(FontMetrics).toString = function () {
    return 'FontMetrics(_top=' + this.m3o_1 + ', _ascent=' + this.n3o_1 + ', _descent=' + this.o3o_1 + ', _bottom=' + this.p3o_1 + ', _leading=' + this.q3o_1 + ', _avgCharWidth=' + this.r3o_1 + ', _maxCharWidth=' + this.s3o_1 + ', _xMin=' + this.t3o_1 + ', _xMax=' + this.u3o_1 + ', _xHeight=' + this.v3o_1 + ', _capHeight=' + this.w3o_1 + ', _underlineThickness=' + this.x3o_1 + ', _underlinePosition=' + this.y3o_1 + ', _strikeoutThickness=' + this.z3o_1 + ', _strikeoutPosition=' + this.a3p_1 + ')';
  };
  function fromInteropPointer(_this__u8e3s4, block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Float32Array(15);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        var handle = $this$interopScope.b3p(result);
        block($this$interopScope, handle);
        $this$interopScope.c3p(handle, result);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
        }
      }
    }
    return fromRawData(_this__u8e3s4, result);
  }
  function fromRawData(_this__u8e3s4, rawData) {
    var tmp = rawData[0];
    var tmp_0 = rawData[1];
    var tmp_1 = rawData[2];
    var tmp_2 = rawData[3];
    var tmp_3 = rawData[4];
    var tmp_4 = rawData[5];
    var tmp_5 = rawData[6];
    var tmp_6 = rawData[7];
    var tmp_7 = rawData[8];
    var tmp_8 = rawData[9];
    var tmp_9 = rawData[10];
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_0 = rawData[11];
    var tmp_10 = isNaN_0(this_0) ? null : this_0;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_1 = rawData[12];
    var tmp_11 = isNaN_0(this_1) ? null : this_1;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_2 = rawData[13];
    var tmp_12 = isNaN_0(this_2) ? null : this_2;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_3 = rawData[14];
    var tmp$ret$3 = isNaN_0(this_3) ? null : this_3;
    return new FontMetrics(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp$ret$3);
  }
  function Companion_12() {
    Companion_instance_12 = this;
    Companion_instance_44.b3j();
    this.d3p_1 = FontMgr_init_$Create$(org_jetbrains_skia_FontMgr__1nDefault(), false);
  }
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function FontMgr_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Create$(ptr, allowClose) {
    return FontMgr_init_$Init$_0(ptr, allowClose, objectCreate(protoOf(FontMgr)));
  }
  protoOf(FontMgr).g3p = function (data, ttcIndex) {
    var tmp;
    try {
      Stats_instance.v3i();
      var ptr = org_jetbrains_skia_FontMgr__1nMakeFromData(this.y3i_1, getPtr(data), ttcIndex);
      tmp = ptr === Companion_instance_46.d3j() ? null : new Typeface(ptr);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(data);
    }
    return tmp;
  };
  protoOf(FontMgr).h3p = function (data, ttcIndex, $super) {
    ttcIndex = ttcIndex === VOID ? 0 : ttcIndex;
    return $super === VOID ? this.g3p(data, ttcIndex) : $super.g3p.call(this, data, ttcIndex);
  };
  protoOf(FontMgr).i3p = function (name, style) {
    var tmp;
    try {
      Stats_instance.v3i();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.FontMgr.legacyMakeTypeface.<anonymous>' call
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          tmp$ret$1 = org_jetbrains_skia_FontMgr__1nLegacyMakeTypeface(this.y3i_1, $this$interopScope.b3k(name), style.j3p_1);
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
          }
        }
      }
      var ptr = tmp$ret$1;
      tmp = ptr === Companion_instance_46.d3j() ? null : new Typeface(ptr);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function FontMgr() {
    Companion_getInstance_12();
  }
  function FontMgrWithFallback(fallbackProvider) {
    FontMgr_init_$Init$(org_jetbrains_skia_FontMgrWithFallback__1nDefaultWithFallbackFontProvider(fallbackProvider.y3i_1), this);
  }
  var FontSlant_UPRIGHT_instance;
  var FontSlant_ITALIC_instance;
  var FontSlant_OBLIQUE_instance;
  function values_2() {
    return [FontSlant_UPRIGHT_getInstance(), FontSlant_ITALIC_getInstance(), FontSlant_OBLIQUE_getInstance()];
  }
  var FontSlant_entriesInitialized;
  function FontSlant_initEntries() {
    if (FontSlant_entriesInitialized)
      return Unit_instance;
    FontSlant_entriesInitialized = true;
    FontSlant_UPRIGHT_instance = new FontSlant('UPRIGHT', 0);
    FontSlant_ITALIC_instance = new FontSlant('ITALIC', 1);
    FontSlant_OBLIQUE_instance = new FontSlant('OBLIQUE', 2);
  }
  function FontSlant(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontSlant_UPRIGHT_getInstance() {
    FontSlant_initEntries();
    return FontSlant_UPRIGHT_instance;
  }
  function FontSlant_ITALIC_getInstance() {
    FontSlant_initEntries();
    return FontSlant_ITALIC_instance;
  }
  function FontSlant_OBLIQUE_getInstance() {
    FontSlant_initEntries();
    return FontSlant_OBLIQUE_instance;
  }
  function FontStyle_init_$Init$(weight, width, slant, $this) {
    FontStyle.call($this);
    $this.j3p_1 = weight & 65535 | (width & 255) << 16 | slant.s2_1 << 24;
    return $this;
  }
  function FontStyle_init_$Create$(weight, width, slant) {
    return FontStyle_init_$Init$(weight, width, slant, objectCreate(protoOf(FontStyle)));
  }
  function FontStyle_init_$Init$_0(value, $this) {
    FontStyle.call($this);
    $this.j3p_1 = value;
    return $this;
  }
  function FontStyle_init_$Create$_0(value) {
    return FontStyle_init_$Init$_0(value, objectCreate(protoOf(FontStyle)));
  }
  function Companion_13() {
    Companion_instance_13 = this;
    this.k3p_1 = FontStyle_init_$Create$(400, 5, FontSlant_UPRIGHT_getInstance());
    this.l3p_1 = FontStyle_init_$Create$(700, 5, FontSlant_UPRIGHT_getInstance());
    this.m3p_1 = FontStyle_init_$Create$(400, 5, FontSlant_ITALIC_getInstance());
    this.n3p_1 = FontStyle_init_$Create$(700, 5, FontSlant_ITALIC_getInstance());
  }
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  protoOf(FontStyle).o3p = function () {
    return this.j3p_1 & 65535;
  };
  protoOf(FontStyle).p3p = function (weight) {
    return FontStyle_init_$Create$(weight, this.m3g(), this.q3p());
  };
  protoOf(FontStyle).m3g = function () {
    return this.j3p_1 >> 16 & 255;
  };
  protoOf(FontStyle).q3p = function () {
    return values_2()[this.j3p_1 >> 24 & 255];
  };
  protoOf(FontStyle).toString = function () {
    return 'FontStyle(weight=' + this.o3p() + ', width=' + this.m3g() + ', slant=' + this.q3p().toString() + ')';
  };
  protoOf(FontStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontStyle))
      return false;
    return this.j3p_1 === other.j3p_1;
  };
  protoOf(FontStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.j3p_1 | 0;
    return result;
  };
  function FontStyle() {
    Companion_getInstance_13();
  }
  function Companion_14() {
  }
  protoOf(Companion_14).u3n = function (name) {
    // Inline function 'kotlin.require' call
    if (!(name.length === 4)) {
      // Inline function 'org.jetbrains.skia.Companion.fromString.<anonymous>' call
      var message = "Name must be exactly 4 symbols, got: '" + name + "'";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(name, 0);
    var tmp = (Char__toInt_impl_vasixd(this_0) & 255) << 24;
    // Inline function 'kotlin.code' call
    var this_1 = charSequenceGet(name, 1);
    var tmp_0 = tmp | (Char__toInt_impl_vasixd(this_1) & 255) << 16;
    // Inline function 'kotlin.code' call
    var this_2 = charSequenceGet(name, 2);
    var tmp_1 = tmp_0 | (Char__toInt_impl_vasixd(this_2) & 255) << 8;
    // Inline function 'kotlin.code' call
    var this_3 = charSequenceGet(name, 3);
    return tmp_1 | Char__toInt_impl_vasixd(this_3) & 255;
  };
  protoOf(Companion_14).l3o = function (tag) {
    // Inline function 'kotlin.charArrayOf' call
    var tmp$ret$0 = charArrayOf([numberToChar(tag >> 24 & 255), numberToChar(tag >> 16 & 255), numberToChar(tag >> 8 & 255), numberToChar(tag & 255)]);
    return concatToString(tmp$ret$0);
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    return Companion_instance_14;
  }
  function IHasImageInfo() {
  }
  function Companion_15() {
  }
  var Companion_instance_15;
  function Companion_getInstance_15() {
    return Companion_instance_15;
  }
  function IRange(start, end) {
    this.r3p_1 = start;
    this.s3p_1 = end;
  }
  protoOf(IRange).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof IRange))
      return false;
    if (!(this.r3p_1 === other.r3p_1))
      return false;
    return this.s3p_1 === other.s3p_1;
  };
  protoOf(IRange).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.r3p_1 | 0;
    result = imul(result, PRIME) + this.s3p_1 | 0;
    return result;
  };
  protoOf(IRange).toString = function () {
    return 'IRange(_start=' + this.r3p_1 + ', _end=' + this.s3p_1 + ')';
  };
  function fromInteropPointer_0(_this__u8e3s4, block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(2);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        var handle = $this$interopScope.t3p(result);
        block($this$interopScope, handle);
        $this$interopScope.y3k(handle, result);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
        }
      }
    }
    var result_0 = result;
    return new IRange(result_0[0], result_0[1]);
  }
  function Companion_16() {
    Companion_instance_16 = this;
    Companion_instance_44.b3j();
  }
  protoOf(Companion_16).u3p = function (bitmap) {
    var tmp;
    try {
      Stats_instance.v3i();
      var ptr = org_jetbrains_skia_Image__1nMakeFromBitmap(getPtr(bitmap));
      if (ptr === Companion_instance_46.d3j())
        throw RuntimeException_init_$Create$('Failed to Image::makeFromBitmap ' + bitmap.toString());
      tmp = new Image(ptr);
    }finally {
      reachabilityBarrier(bitmap);
    }
    return tmp;
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function Image_nGetImageInfo$ref() {
    var l = function (p0, p1, p2) {
      org_jetbrains_skia_Image__1nGetImageInfo(p0, p1, p2);
      return Unit_instance;
    };
    l.callableName = 'Image_nGetImageInfo';
    return l;
  }
  function Image$_get_imageInfo_$lambda_c2a05w(this$0) {
    return function () {
      var tmp;
      if (this$0.x3p_1 == null) {
        var tmp_0 = this$0;
        var tmp_1 = Companion_getInstance_17();
        var tmp_2 = this$0.y3i_1;
        tmp_0.x3p_1 = tmp_1.l3j(tmp_2, Image_nGetImageInfo$ref());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Image(ptr) {
    Companion_getInstance_16();
    RefCnt_init_$Init$(ptr, this);
    this.x3p_1 = null;
  }
  protoOf(Image).j3j = function () {
    var tmp;
    try {
      if (this.x3p_1 == null) {
        commonSynchronized(this, Image$_get_imageInfo_$lambda_c2a05w(this));
      }
      tmp = ensureNotNull(this.x3p_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function ImageInfo_init_$Init$(width, height, colorType, alphaType, colorSpace, $this) {
    ImageInfo.call($this, new ColorInfo(colorType, alphaType, colorSpace), width, height);
    return $this;
  }
  function ImageInfo_init_$Init$_0(width, height, colorType, alphaType, colorSpace, $this) {
    ImageInfo_init_$Init$(width, height, values_1()[colorType], values_0()[alphaType], colorSpace === Companion_instance_46.d3j() ? null : ColorSpace_init_$Create$(colorSpace), $this);
    return $this;
  }
  function ImageInfo_init_$Create$(width, height, colorType, alphaType, colorSpace) {
    return ImageInfo_init_$Init$_0(width, height, colorType, alphaType, colorSpace, objectCreate(protoOf(ImageInfo)));
  }
  function Companion_17() {
    Companion_instance_17 = this;
    this.k3j_1 = new ImageInfo(Companion_getInstance_4().p3m_1, 0, 0);
  }
  protoOf(Companion_17).l3j = function (_ptr, _nGetImageInfo) {
    Stats_instance.v3i();
    var colorSpacePtr = null;
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(4);
    $l$block_0: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        var handle = $this$interopScope.t3p(result);
        // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>' call
        // Inline function 'org.jetbrains.skia.impl.withResult' call
        var result_0 = new NativePointerArray(1);
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0_0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
            access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0_0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
            var $this$interopScope_0 = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
            var handle_0 = $this$interopScope_0.y3p(result_0);
            // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>.<anonymous>' call
            _nGetImageInfo(_ptr, handle, handle_0);
            $this$interopScope_0.z3p(handle_0, result_0);
            break $l$block;
          }finally {
            var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
            access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
            if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
              access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
            }
          }
        }
        colorSpacePtr = result_0.p(0);
        $this$interopScope.y3k(handle, result);
        break $l$block_0;
      }finally {
        var tmp1_0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
        }
      }
    }
    // Inline function 'kotlin.let' call
    // Inline function 'org.jetbrains.skia.Companion.createUsing.<anonymous>' call
    return ImageInfo_init_$Create$(result[0], result[1], result[2], result[3], ensureNotNull(colorSpacePtr));
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function ImageInfo(colorInfo, width, height) {
    Companion_getInstance_17();
    this.o3j_1 = colorInfo;
    this.p3j_1 = width;
    this.q3j_1 = height;
  }
  protoOf(ImageInfo).v3j = function () {
    return imul(this.p3j_1, this.t3m());
  };
  protoOf(ImageInfo).t3m = function () {
    return this.o3j_1.t3m();
  };
  protoOf(ImageInfo).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof ImageInfo))
      return false;
    if (!(this.p3j_1 === other.p3j_1))
      return false;
    if (!(this.q3j_1 === other.q3j_1))
      return false;
    return this.o3j_1.equals(other.o3j_1);
  };
  protoOf(ImageInfo).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.p3j_1 | 0;
    result = imul(result, PRIME) + this.q3j_1 | 0;
    result = imul(result, PRIME) + this.o3j_1.hashCode() | 0;
    return result;
  };
  protoOf(ImageInfo).toString = function () {
    return 'ImageInfo(_colorInfo=' + this.o3j_1.toString() + ', _width=' + this.p3j_1 + ', _height=' + this.q3j_1 + ')';
  };
  function Companion_18() {
    Companion_instance_18 = this;
    Companion_instance_44.b3j();
  }
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function ManagedString_init_$Init$(s, $this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.ManagedString.<init>.<anonymous>' call
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        tmp$ret$1 = org_jetbrains_skia_ManagedString__1nMake($this$interopScope.b3k(s));
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
        }
      }
    }
    ManagedString.call($this, tmp$ret$1);
    Stats_instance.v3i();
    return $this;
  }
  function ManagedString_init_$Create$(s) {
    return ManagedString_init_$Init$(s, objectCreate(protoOf(ManagedString)));
  }
  function _FinalizerHolder_7() {
    _FinalizerHolder_instance_7 = this;
    this.b3q_1 = org_jetbrains_skia_ManagedString__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_7;
  function _FinalizerHolder_getInstance_7() {
    if (_FinalizerHolder_instance_7 == null)
      new _FinalizerHolder_7();
    return _FinalizerHolder_instance_7;
  }
  function ManagedString(ptr, managed) {
    Companion_getInstance_18();
    managed = managed === VOID ? true : managed;
    Managed.call(this, ptr, _FinalizerHolder_getInstance_7().b3q_1, managed);
  }
  protoOf(ManagedString).toString = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      var size = org_jetbrains_skia_ManagedString__nStringSize(this.y3i_1);
      // Inline function 'org.jetbrains.skia.impl.withResult' call
      var result = new Int8Array(size);
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          var handle = $this$interopScope.c3q(result);
          // Inline function 'org.jetbrains.skia.ManagedString.toString.<anonymous>' call
          org_jetbrains_skia_ManagedString__nStringData(this.y3i_1, handle, size);
          $this$interopScope.d3q(handle, result);
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
          }
        }
      }
      tmp = decodeToString(result);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ManagedString).g3q = function (s) {
    Stats_instance.v3i();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.ManagedString.append.<anonymous>' call
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        org_jetbrains_skia_ManagedString__1nAppend(this.y3i_1, $this$interopScope.b3k(s));
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
        }
      }
    }
    return this;
  };
  function Companion_19() {
    Companion_instance_19 = this;
    this.h3q_1 = this.i3q(0.0, 0.0);
  }
  protoOf(Companion_19).i3q = function (dx, dy) {
    return new Matrix33(new Float32Array([1.0, 0.0, dx, 0.0, 1.0, dy, 0.0, 0.0, 1.0]));
  };
  var Companion_instance_19;
  function Companion_getInstance_19() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function Matrix33(mat) {
    Companion_getInstance_19();
    // Inline function 'kotlin.require' call
    if (!(mat.length === 9)) {
      // Inline function 'org.jetbrains.skia.Matrix33.<anonymous>' call
      var message = 'Expected 9 elements, got ' + mat.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.y3l_1 = mat;
  }
  protoOf(Matrix33).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix33))
      return false;
    return contentEquals(this.y3l_1, other.y3l_1);
  };
  protoOf(Matrix33).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.y3l_1) | 0;
    return result;
  };
  protoOf(Matrix33).toString = function () {
    return 'Matrix33(_mat=' + toString(this.y3l_1) + ')';
  };
  function Companion_20() {
    Companion_instance_20 = this;
    this.j3q_1 = new Matrix44(new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]));
  }
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function Matrix44(mat) {
    Companion_getInstance_20();
    // Inline function 'kotlin.require' call
    if (!(mat.length === 16)) {
      // Inline function 'org.jetbrains.skia.Matrix44.<anonymous>' call
      var message = 'Expected 16 elements, got ' + mat.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.f3m_1 = mat;
  }
  protoOf(Matrix44).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix44))
      return false;
    return contentEquals(this.f3m_1, other.f3m_1);
  };
  protoOf(Matrix44).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.f3m_1) | 0;
    return result;
  };
  protoOf(Matrix44).toString = function () {
    return 'Matrix44(_mat=' + toString(this.f3m_1) + ')';
  };
  var MipmapMode_NONE_instance;
  var MipmapMode_NEAREST_instance;
  var MipmapMode_LINEAR_instance;
  var MipmapMode_entriesInitialized;
  function MipmapMode_initEntries() {
    if (MipmapMode_entriesInitialized)
      return Unit_instance;
    MipmapMode_entriesInitialized = true;
    MipmapMode_NONE_instance = new MipmapMode('NONE', 0);
    MipmapMode_NEAREST_instance = new MipmapMode('NEAREST', 1);
    MipmapMode_LINEAR_instance = new MipmapMode('LINEAR', 2);
  }
  function MipmapMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MipmapMode_NONE_getInstance() {
    MipmapMode_initEntries();
    return MipmapMode_NONE_instance;
  }
  function MipmapMode_NEAREST_getInstance() {
    MipmapMode_initEntries();
    return MipmapMode_NEAREST_instance;
  }
  function Companion_21() {
    Companion_instance_21 = this;
    Companion_instance_44.b3j();
  }
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function _FinalizerHolder_8() {
    _FinalizerHolder_instance_8 = this;
    this.k3q_1 = org_jetbrains_skia_Paint__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_8;
  function _FinalizerHolder_getInstance_8() {
    if (_FinalizerHolder_instance_8 == null)
      new _FinalizerHolder_8();
    return _FinalizerHolder_instance_8;
  }
  function Paint_init_$Init$($this) {
    Managed.call($this, org_jetbrains_skia_Paint__1nMake(), _FinalizerHolder_getInstance_8().k3q_1);
    Paint.call($this);
    Stats_instance.v3i();
    return $this;
  }
  function Paint_init_$Create$() {
    return Paint_init_$Init$(objectCreate(protoOf(Paint)));
  }
  protoOf(Paint).z3i = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Paint__1nEquals(this.y3i_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Paint).n3q = function () {
    Stats_instance.v3i();
    org_jetbrains_skia_Paint__1nReset(this.y3i_1);
    return this;
  };
  protoOf(Paint).o3q = function (value) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_Paint__1nSetMode(this.y3i_1, value.s2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).p3q = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = values_3()[org_jetbrains_skia_Paint__1nGetMode(this.y3i_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).q3q = function (value) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_Paint__1nSetColor(this.y3i_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).r3q = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = org_jetbrains_skia_Paint__1nGetColor(this.y3i_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).s3q = function (value) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_Paint__1nSetStrokeWidth(this.y3i_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).t3q = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = org_jetbrains_skia_Paint__1nGetStrokeWidth(this.y3i_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).u3q = function (value) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_Paint__1nSetStrokeMiter(this.y3i_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).v3q = function (value) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_Paint__1nSetStrokeCap(this.y3i_1, value.s2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).w3q = function (value) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_Paint__1nSetStrokeJoin(this.y3i_1, value.s2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).x3q = function (value) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_Paint__1nSetShader(this.y3i_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).y3q = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      var shaderPtr = org_jetbrains_skia_Paint__1nGetShader(this.y3i_1);
      tmp = shaderPtr === Companion_instance_46.d3j() ? null : new Shader(shaderPtr);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).z3q = function (value) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_Paint__1nSetColorFilter(this.y3i_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).a3r = function (value) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_Paint__1nSetBlendMode(this.y3i_1, value.s2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).b3r = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = values()[org_jetbrains_skia_Paint__1nGetBlendMode(this.y3i_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).c3r = function () {
    return this.b3r().equals(BlendMode_SRC_OVER_getInstance());
  };
  protoOf(Paint).d3r = function (value) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_Paint__1nSetPathEffect(this.y3i_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).e3r = function (value) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_Paint__1nSetImageFilter(this.y3i_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  function Paint() {
    Companion_getInstance_21();
  }
  var PaintMode_FILL_instance;
  var PaintMode_STROKE_instance;
  var PaintMode_STROKE_AND_FILL_instance;
  function values_3() {
    return [PaintMode_FILL_getInstance(), PaintMode_STROKE_getInstance(), PaintMode_STROKE_AND_FILL_getInstance()];
  }
  var PaintMode_entriesInitialized;
  function PaintMode_initEntries() {
    if (PaintMode_entriesInitialized)
      return Unit_instance;
    PaintMode_entriesInitialized = true;
    PaintMode_FILL_instance = new PaintMode('FILL', 0);
    PaintMode_STROKE_instance = new PaintMode('STROKE', 1);
    PaintMode_STROKE_AND_FILL_instance = new PaintMode('STROKE_AND_FILL', 2);
  }
  function PaintMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintMode_FILL_getInstance() {
    PaintMode_initEntries();
    return PaintMode_FILL_instance;
  }
  function PaintMode_STROKE_getInstance() {
    PaintMode_initEntries();
    return PaintMode_STROKE_instance;
  }
  function PaintMode_STROKE_AND_FILL_getInstance() {
    PaintMode_initEntries();
    return PaintMode_STROKE_AND_FILL_instance;
  }
  var PaintStrokeCap_BUTT_instance;
  var PaintStrokeCap_ROUND_instance;
  var PaintStrokeCap_SQUARE_instance;
  var PaintStrokeCap_entriesInitialized;
  function PaintStrokeCap_initEntries() {
    if (PaintStrokeCap_entriesInitialized)
      return Unit_instance;
    PaintStrokeCap_entriesInitialized = true;
    PaintStrokeCap_BUTT_instance = new PaintStrokeCap('BUTT', 0);
    PaintStrokeCap_ROUND_instance = new PaintStrokeCap('ROUND', 1);
    PaintStrokeCap_SQUARE_instance = new PaintStrokeCap('SQUARE', 2);
  }
  function PaintStrokeCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintStrokeCap_BUTT_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_BUTT_instance;
  }
  function PaintStrokeCap_ROUND_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_ROUND_instance;
  }
  function PaintStrokeCap_SQUARE_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_SQUARE_instance;
  }
  var PaintStrokeJoin_MITER_instance;
  var PaintStrokeJoin_ROUND_instance;
  var PaintStrokeJoin_BEVEL_instance;
  var PaintStrokeJoin_entriesInitialized;
  function PaintStrokeJoin_initEntries() {
    if (PaintStrokeJoin_entriesInitialized)
      return Unit_instance;
    PaintStrokeJoin_entriesInitialized = true;
    PaintStrokeJoin_MITER_instance = new PaintStrokeJoin('MITER', 0);
    PaintStrokeJoin_ROUND_instance = new PaintStrokeJoin('ROUND', 1);
    PaintStrokeJoin_BEVEL_instance = new PaintStrokeJoin('BEVEL', 2);
  }
  function PaintStrokeJoin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintStrokeJoin_MITER_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_MITER_instance;
  }
  function PaintStrokeJoin_ROUND_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_ROUND_instance;
  }
  function PaintStrokeJoin_BEVEL_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_BEVEL_instance;
  }
  function Companion_22() {
    Companion_instance_22 = this;
    Companion_instance_44.b3j();
  }
  protoOf(Companion_22).f3r = function (one, two, op) {
    var tmp;
    try {
      Stats_instance.v3i();
      var ptr = org_jetbrains_skia_Path__1nMakeCombining(getPtr(one), getPtr(two), op.s2_1);
      tmp = ptr === Companion_instance_46.d3j() ? null : new Path(ptr);
    }finally {
      reachabilityBarrier(one);
      reachabilityBarrier(two);
    }
    return tmp;
  };
  var Companion_instance_22;
  function Companion_getInstance_22() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function _FinalizerHolder_9() {
    _FinalizerHolder_instance_9 = this;
    this.g3r_1 = org_jetbrains_skia_Path__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_9;
  function _FinalizerHolder_getInstance_9() {
    if (_FinalizerHolder_instance_9 == null)
      new _FinalizerHolder_9();
    return _FinalizerHolder_instance_9;
  }
  function Path_init_$Init$($this) {
    Path.call($this, org_jetbrains_skia_Path__1nMake());
    Stats_instance.v3i();
    return $this;
  }
  function Path_init_$Create$() {
    return Path_init_$Init$(objectCreate(protoOf(Path)));
  }
  function Path$_get_bounds_$lambda_qr8ora(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Path__1nGetBounds(this$0.y3i_1, it);
      return Unit_instance;
    };
  }
  function Path(ptr) {
    Companion_getInstance_22();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_9().g3r_1);
  }
  protoOf(Path).z3i = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Path__1nEquals(this.y3i_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Path).j3r = function (value) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_Path__1nSetFillMode(this.y3i_1, value.s2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).k3r = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = values_4()[org_jetbrains_skia_Path__1nGetFillMode(this.y3i_1)];
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).n3q = function () {
    Stats_instance.v3i();
    org_jetbrains_skia_Path__1nReset(this.y3i_1);
    return this;
  };
  protoOf(Path).u21 = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = org_jetbrains_skia_Path__1nIsEmpty(this.y3i_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).l3r = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      var tmp_0 = Companion_instance_28;
      tmp = tmp_0.m3r(Path$_get_bounds_$lambda_qr8ora(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).n3r = function (rect, dir, start) {
    Stats_instance.v3i();
    org_jetbrains_skia_Path__1nAddRect(this.y3i_1, rect.h3l_1, rect.i3l_1, rect.j3l_1, rect.k3l_1, dir.s2_1, start);
    return this;
  };
  protoOf(Path).o3r = function (rect, dir, start, $super) {
    dir = dir === VOID ? PathDirection_CLOCKWISE_getInstance() : dir;
    start = start === VOID ? 0 : start;
    return $super === VOID ? this.n3r(rect, dir, start) : $super.n3r.call(this, rect, dir, start);
  };
  protoOf(Path).p3r = function (rrect, dir, start) {
    Stats_instance.v3i();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.Path.addRRect.<anonymous>' call
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        org_jetbrains_skia_Path__1nAddRRect(this.y3i_1, rrect.h3l_1, rrect.i3l_1, rrect.j3l_1, rrect.k3l_1, $this$interopScope.s3l(rrect.r3l_1), rrect.r3l_1.length, dir.s2_1, start);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
        }
      }
    }
    return this;
  };
  protoOf(Path).q3r = function (rrect, dir, start, $super) {
    dir = dir === VOID ? PathDirection_CLOCKWISE_getInstance() : dir;
    start = start === VOID ? 6 : start;
    return $super === VOID ? this.p3r(rrect, dir, start) : $super.p3r.call(this, rrect, dir, start);
  };
  protoOf(Path).r3r = function (src, dx, dy, extend) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_Path__1nAddPathOffset(this.y3i_1, getPtr(src), dx, dy, extend);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(src);
    }
    return tmp;
  };
  protoOf(Path).s3r = function (src, dx, dy, extend, $super) {
    extend = extend === VOID ? false : extend;
    return $super === VOID ? this.r3r(src, dx, dy, extend) : $super.r3r.call(this, src, dx, dy, extend);
  };
  protoOf(Path).t3r = function (matrix, dst, applyPerspectiveClip) {
    var tmp;
    try {
      Stats_instance.v3i();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.Path.transform.<anonymous>' call
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          org_jetbrains_skia_Path__1nTransform(this.y3i_1, $this$interopScope.s3l(matrix.y3l_1), getPtr(dst), applyPerspectiveClip);
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  protoOf(Path).u3r = function (matrix, dst, applyPerspectiveClip, $super) {
    dst = dst === VOID ? null : dst;
    applyPerspectiveClip = applyPerspectiveClip === VOID ? true : applyPerspectiveClip;
    return $super === VOID ? this.t3r(matrix, dst, applyPerspectiveClip) : $super.t3r.call(this, matrix, dst, applyPerspectiveClip);
  };
  protoOf(Path).j = function () {
    return this.v3r(false);
  };
  protoOf(Path).v3r = function (forceClose) {
    return Companion_getInstance_23().w3r(this, forceClose);
  };
  var PathDirection_CLOCKWISE_instance;
  var PathDirection_COUNTER_CLOCKWISE_instance;
  var PathDirection_entriesInitialized;
  function PathDirection_initEntries() {
    if (PathDirection_entriesInitialized)
      return Unit_instance;
    PathDirection_entriesInitialized = true;
    PathDirection_CLOCKWISE_instance = new PathDirection('CLOCKWISE', 0);
    PathDirection_COUNTER_CLOCKWISE_instance = new PathDirection('COUNTER_CLOCKWISE', 1);
  }
  function PathDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathDirection_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_CLOCKWISE_instance;
  }
  function PathDirection_COUNTER_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_COUNTER_CLOCKWISE_instance;
  }
  var PathFillMode_WINDING_instance;
  var PathFillMode_EVEN_ODD_instance;
  var PathFillMode_INVERSE_WINDING_instance;
  var PathFillMode_INVERSE_EVEN_ODD_instance;
  function values_4() {
    return [PathFillMode_WINDING_getInstance(), PathFillMode_EVEN_ODD_getInstance(), PathFillMode_INVERSE_WINDING_getInstance(), PathFillMode_INVERSE_EVEN_ODD_getInstance()];
  }
  var PathFillMode_entriesInitialized;
  function PathFillMode_initEntries() {
    if (PathFillMode_entriesInitialized)
      return Unit_instance;
    PathFillMode_entriesInitialized = true;
    PathFillMode_WINDING_instance = new PathFillMode('WINDING', 0);
    PathFillMode_EVEN_ODD_instance = new PathFillMode('EVEN_ODD', 1);
    PathFillMode_INVERSE_WINDING_instance = new PathFillMode('INVERSE_WINDING', 2);
    PathFillMode_INVERSE_EVEN_ODD_instance = new PathFillMode('INVERSE_EVEN_ODD', 3);
  }
  function PathFillMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathFillMode_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_WINDING_instance;
  }
  function PathFillMode_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_EVEN_ODD_instance;
  }
  function PathFillMode_INVERSE_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_WINDING_instance;
  }
  function PathFillMode_INVERSE_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_EVEN_ODD_instance;
  }
  var PathOp_DIFFERENCE_instance;
  var PathOp_INTERSECT_instance;
  var PathOp_UNION_instance;
  var PathOp_XOR_instance;
  var PathOp_REVERSE_DIFFERENCE_instance;
  var PathOp_entriesInitialized;
  function PathOp_initEntries() {
    if (PathOp_entriesInitialized)
      return Unit_instance;
    PathOp_entriesInitialized = true;
    PathOp_DIFFERENCE_instance = new PathOp('DIFFERENCE', 0);
    PathOp_INTERSECT_instance = new PathOp('INTERSECT', 1);
    PathOp_UNION_instance = new PathOp('UNION', 2);
    PathOp_XOR_instance = new PathOp('XOR', 3);
    PathOp_REVERSE_DIFFERENCE_instance = new PathOp('REVERSE_DIFFERENCE', 4);
  }
  function PathOp(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathOp_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_DIFFERENCE_instance;
  }
  function PathOp_INTERSECT_getInstance() {
    PathOp_initEntries();
    return PathOp_INTERSECT_instance;
  }
  function PathOp_UNION_getInstance() {
    PathOp_initEntries();
    return PathOp_UNION_instance;
  }
  function PathOp_XOR_getInstance() {
    PathOp_initEntries();
    return PathOp_XOR_instance;
  }
  function PathOp_REVERSE_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_REVERSE_DIFFERENCE_instance;
  }
  function PathSegment_init_$Init$(verbOrdinal, x0, y0, isClosedContour, $this) {
    PathSegment.call($this, values_5()[verbOrdinal], new Point(x0, y0), null, null, null, 0.0, false, isClosedContour);
    // Inline function 'kotlin.require' call
    if (!(verbOrdinal === PathVerb_MOVE_getInstance().s2_1 || verbOrdinal === PathVerb_CLOSE_getInstance().s2_1)) {
      // Inline function 'org.jetbrains.skia.PathSegment.<init>.<anonymous>' call
      var message = 'Expected MOVE or CLOSE, got ' + values_5()[verbOrdinal].toString();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PathSegment_init_$Create$(verbOrdinal, x0, y0, isClosedContour) {
    return PathSegment_init_$Init$(verbOrdinal, x0, y0, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_0(x0, y0, x1, y1, isCloseLine, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_LINE_getInstance(), new Point(x0, y0), new Point(x1, y1), null, null, 0.0, isCloseLine, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_0(x0, y0, x1, y1, isCloseLine, isClosedContour) {
    return PathSegment_init_$Init$_0(x0, y0, x1, y1, isCloseLine, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_1(x0, y0, x1, y1, x2, y2, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_QUAD_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_1(x0, y0, x1, y1, x2, y2, isClosedContour) {
    return PathSegment_init_$Init$_1(x0, y0, x1, y1, x2, y2, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CONIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, conicWeight, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour) {
    return PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CUBIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), new Point(x3, y3), 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour) {
    return PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment(verb, p0, p1, p2, p3, conicWeight, isCloseLine, isClosedContour) {
    verb = verb === VOID ? PathVerb_DONE_getInstance() : verb;
    p0 = p0 === VOID ? null : p0;
    p1 = p1 === VOID ? null : p1;
    p2 = p2 === VOID ? null : p2;
    p3 = p3 === VOID ? null : p3;
    conicWeight = conicWeight === VOID ? 0.0 : conicWeight;
    isCloseLine = isCloseLine === VOID ? false : isCloseLine;
    isClosedContour = isClosedContour === VOID ? false : isClosedContour;
    this.x3r_1 = verb;
    this.y3r_1 = p0;
    this.z3r_1 = p1;
    this.a3s_1 = p2;
    this.b3s_1 = p3;
    this.c3s_1 = conicWeight;
    this.d3s_1 = isCloseLine;
    this.e3s_1 = isClosedContour;
  }
  protoOf(PathSegment).toString = function () {
    return 'Segment(verb=' + this.x3r_1.toString() + (!this.x3r_1.equals(PathVerb_DONE_getInstance()) ? ', p0=' + toString_0(this.y3r_1) : '') + (this.x3r_1.equals(PathVerb_LINE_getInstance()) || this.x3r_1.equals(PathVerb_QUAD_getInstance()) || this.x3r_1.equals(PathVerb_CONIC_getInstance()) || this.x3r_1.equals(PathVerb_CUBIC_getInstance()) ? ', p1=' + toString_0(this.z3r_1) : '') + (this.x3r_1.equals(PathVerb_QUAD_getInstance()) || this.x3r_1.equals(PathVerb_CONIC_getInstance()) || this.x3r_1.equals(PathVerb_CUBIC_getInstance()) ? ', p2=' + toString_0(this.a3s_1) : '') + (this.x3r_1.equals(PathVerb_CUBIC_getInstance()) ? ', p3=' + toString_0(this.b3s_1) : '') + (this.x3r_1.equals(PathVerb_CONIC_getInstance()) ? ', conicWeight=' + this.c3s_1 : '') + (this.x3r_1.equals(PathVerb_LINE_getInstance()) ? ', closeLine=' + this.d3s_1 : '') + (!this.x3r_1.equals(PathVerb_DONE_getInstance()) ? ', closedContour=' + this.e3s_1 : '') + ')';
  };
  protoOf(PathSegment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PathSegment))
      return false;
    return this.x3r_1.equals(other.x3r_1) && (!this.x3r_1.equals(PathVerb_DONE_getInstance()) ? equals(this.y3r_1, other.y3r_1) : true) && (this.x3r_1.equals(PathVerb_LINE_getInstance()) || this.x3r_1.equals(PathVerb_QUAD_getInstance()) || this.x3r_1.equals(PathVerb_CONIC_getInstance()) || this.x3r_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.z3r_1, other.z3r_1) : true) && (this.x3r_1.equals(PathVerb_QUAD_getInstance()) || this.x3r_1.equals(PathVerb_CONIC_getInstance()) || this.x3r_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.a3s_1, other.a3s_1) : true) && (this.x3r_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.b3s_1, other.b3s_1) : true) && (this.x3r_1.equals(PathVerb_CONIC_getInstance()) ? compareTo(other.c3s_1, this.c3s_1) === 0 : true) && (this.x3r_1.equals(PathVerb_LINE_getInstance()) ? this.d3s_1 === other.d3s_1 : true) && (!this.x3r_1.equals(PathVerb_DONE_getInstance()) ? this.e3s_1 === other.e3s_1 : true);
  };
  protoOf(PathSegment).hashCode = function () {
    var tmp;
    switch (this.x3r_1.s2_1) {
      case 6:
        tmp = objectHashes([this.x3r_1]);
        break;
      case 0:
        tmp = objectHashes([this.x3r_1, this.y3r_1, this.e3s_1]);
        break;
      case 1:
        tmp = objectHashes([this.x3r_1, this.y3r_1, this.z3r_1, this.d3s_1, this.e3s_1]);
        break;
      case 2:
        tmp = objectHashes([this.x3r_1, this.y3r_1, this.z3r_1, this.a3s_1, this.e3s_1]);
        break;
      case 3:
        tmp = objectHashes([this.x3r_1, this.y3r_1, this.z3r_1, this.a3s_1, this.c3s_1, this.e3s_1]);
        break;
      case 4:
        tmp = objectHashes([this.x3r_1, this.y3r_1, this.z3r_1, this.a3s_1, this.b3s_1, this.e3s_1]);
        break;
      default:
        throw RuntimeException_init_$Create$('Unreachable');
    }
    return tmp;
  };
  function objectHashes(args) {
    return contentHashCode_0(args);
  }
  function Companion_23() {
    Companion_instance_23 = this;
    Companion_instance_44.b3j();
  }
  protoOf(Companion_23).w3r = function (path, forceClose) {
    var tmp;
    try {
      var i = new PathSegmentIterator(path, org_jetbrains_skia_PathSegmentIterator__1nMake(getPtr(path), forceClose));
      i.i3s_1 = nextSegment(i);
      tmp = i;
    }finally {
      reachabilityBarrier(path);
    }
    return tmp;
  };
  var Companion_instance_23;
  function Companion_getInstance_23() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function nextSegment($this) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(10);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        var handle = $this$interopScope.t3p(result);
        // Inline function 'org.jetbrains.skia.PathSegmentIterator.nextSegment.<anonymous>' call
        org_jetbrains_skia_PathSegmentIterator__1nNext($this.y3i_1, handle);
        $this$interopScope.y3k(handle, result);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
        }
      }
    }
    return pathSegmentFromIntArray(result);
  }
  function PathSegmentIterator(_path, ptr) {
    Companion_getInstance_23();
    Managed.call(this, ptr, org_jetbrains_skia_PathSegmentIterator__1nGetFinalizer());
    this.h3s_1 = _path;
    this.i3s_1 = null;
    Stats_instance.v3i();
  }
  protoOf(PathSegmentIterator).l = function () {
    var tmp;
    try {
      var tmp0_safe_receiver = this.i3s_1;
      if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x3r_1, PathVerb_DONE_getInstance()))
        throw NoSuchElementException_init_$Create$();
      var res = this.i3s_1;
      this.i3s_1 = nextSegment(this);
      tmp = res;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathSegmentIterator).k = function () {
    var tmp0_safe_receiver = this.i3s_1;
    return !equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x3r_1, PathVerb_DONE_getInstance());
  };
  protoOf(PathSegmentIterator).l4 = function () {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  function pathSegmentFromIntArray(points) {
    var context = last(points);
    var verb = context & 7;
    var isClosedBit = context >> 7 & 1;
    var isClosedLineBit = context >> 6 & 1;
    var isClosed = !(isClosedBit === 0);
    var tmp;
    switch (values_5()[verb].s2_1) {
      case 0:
      case 5:
        // Inline function 'kotlin.fromBits' call

        var bits = points[0];
        var tmp_0 = floatFromBits(bits);
        // Inline function 'kotlin.fromBits' call

        var bits_0 = points[1];
        var tmp$ret$1 = floatFromBits(bits_0);
        tmp = PathSegment_init_$Create$(verb, tmp_0, tmp$ret$1, isClosed);
        break;
      case 1:
        // Inline function 'kotlin.fromBits' call

        var bits_1 = points[0];
        var tmp_1 = floatFromBits(bits_1);
        // Inline function 'kotlin.fromBits' call

        var bits_2 = points[1];
        var tmp_2 = floatFromBits(bits_2);
        // Inline function 'kotlin.fromBits' call

        var bits_3 = points[2];
        var tmp_3 = floatFromBits(bits_3);
        // Inline function 'kotlin.fromBits' call

        var bits_4 = points[3];
        var tmp$ret$5 = floatFromBits(bits_4);
        tmp = PathSegment_init_$Create$_0(tmp_1, tmp_2, tmp_3, tmp$ret$5, !(isClosedLineBit === 0), isClosed);
        break;
      case 2:
        // Inline function 'kotlin.fromBits' call

        var bits_5 = points[0];
        var tmp_4 = floatFromBits(bits_5);
        // Inline function 'kotlin.fromBits' call

        var bits_6 = points[1];
        var tmp_5 = floatFromBits(bits_6);
        // Inline function 'kotlin.fromBits' call

        var bits_7 = points[2];
        var tmp_6 = floatFromBits(bits_7);
        // Inline function 'kotlin.fromBits' call

        var bits_8 = points[3];
        var tmp_7 = floatFromBits(bits_8);
        // Inline function 'kotlin.fromBits' call

        var bits_9 = points[4];
        var tmp_8 = floatFromBits(bits_9);
        // Inline function 'kotlin.fromBits' call

        var bits_10 = points[5];
        var tmp$ret$11 = floatFromBits(bits_10);
        tmp = PathSegment_init_$Create$_1(tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp$ret$11, isClosed);
        break;
      case 3:
        // Inline function 'kotlin.fromBits' call

        var bits_11 = points[0];
        var tmp_9 = floatFromBits(bits_11);
        // Inline function 'kotlin.fromBits' call

        var bits_12 = points[1];
        var tmp_10 = floatFromBits(bits_12);
        // Inline function 'kotlin.fromBits' call

        var bits_13 = points[2];
        var tmp_11 = floatFromBits(bits_13);
        // Inline function 'kotlin.fromBits' call

        var bits_14 = points[3];
        var tmp_12 = floatFromBits(bits_14);
        // Inline function 'kotlin.fromBits' call

        var bits_15 = points[4];
        var tmp_13 = floatFromBits(bits_15);
        // Inline function 'kotlin.fromBits' call

        var bits_16 = points[5];
        var tmp_14 = floatFromBits(bits_16);
        // Inline function 'kotlin.fromBits' call

        var bits_17 = points[8];
        var tmp$ret$18 = floatFromBits(bits_17);
        tmp = PathSegment_init_$Create$_2(tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp$ret$18, isClosed);
        break;
      case 4:
        // Inline function 'kotlin.fromBits' call

        var bits_18 = points[0];
        var tmp_15 = floatFromBits(bits_18);
        // Inline function 'kotlin.fromBits' call

        var bits_19 = points[1];
        var tmp_16 = floatFromBits(bits_19);
        // Inline function 'kotlin.fromBits' call

        var bits_20 = points[2];
        var tmp_17 = floatFromBits(bits_20);
        // Inline function 'kotlin.fromBits' call

        var bits_21 = points[3];
        var tmp_18 = floatFromBits(bits_21);
        // Inline function 'kotlin.fromBits' call

        var bits_22 = points[4];
        var tmp_19 = floatFromBits(bits_22);
        // Inline function 'kotlin.fromBits' call

        var bits_23 = points[5];
        var tmp_20 = floatFromBits(bits_23);
        // Inline function 'kotlin.fromBits' call

        var bits_24 = points[6];
        var tmp_21 = floatFromBits(bits_24);
        // Inline function 'kotlin.fromBits' call

        var bits_25 = points[7];
        var tmp$ret$26 = floatFromBits(bits_25);
        tmp = PathSegment_init_$Create$_3(tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp$ret$26, isClosed);
        break;
      case 6:
        tmp = new PathSegment();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  var PathVerb_MOVE_instance;
  var PathVerb_LINE_instance;
  var PathVerb_QUAD_instance;
  var PathVerb_CONIC_instance;
  var PathVerb_CUBIC_instance;
  var PathVerb_CLOSE_instance;
  var PathVerb_DONE_instance;
  function values_5() {
    return [PathVerb_MOVE_getInstance(), PathVerb_LINE_getInstance(), PathVerb_QUAD_getInstance(), PathVerb_CONIC_getInstance(), PathVerb_CUBIC_getInstance(), PathVerb_CLOSE_getInstance(), PathVerb_DONE_getInstance()];
  }
  var PathVerb_entriesInitialized;
  function PathVerb_initEntries() {
    if (PathVerb_entriesInitialized)
      return Unit_instance;
    PathVerb_entriesInitialized = true;
    PathVerb_MOVE_instance = new PathVerb('MOVE', 0);
    PathVerb_LINE_instance = new PathVerb('LINE', 1);
    PathVerb_QUAD_instance = new PathVerb('QUAD', 2);
    PathVerb_CONIC_instance = new PathVerb('CONIC', 3);
    PathVerb_CUBIC_instance = new PathVerb('CUBIC', 4);
    PathVerb_CLOSE_instance = new PathVerb('CLOSE', 5);
    PathVerb_DONE_instance = new PathVerb('DONE', 6);
  }
  function PathVerb(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathVerb_MOVE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_MOVE_instance;
  }
  function PathVerb_LINE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_LINE_instance;
  }
  function PathVerb_QUAD_getInstance() {
    PathVerb_initEntries();
    return PathVerb_QUAD_instance;
  }
  function PathVerb_CONIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CONIC_instance;
  }
  function PathVerb_CUBIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CUBIC_instance;
  }
  function PathVerb_CLOSE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CLOSE_instance;
  }
  function PathVerb_DONE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_DONE_instance;
  }
  function Companion_24() {
    Companion_instance_24 = this;
    Companion_instance_44.b3j();
  }
  var Companion_instance_24;
  function Companion_getInstance_24() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function Picture(ptr) {
    Companion_getInstance_24();
    RefCnt_init_$Init$(ptr, this);
  }
  function Companion_25() {
    Companion_instance_25 = this;
    Companion_instance_44.b3j();
  }
  var Companion_instance_25;
  function Companion_getInstance_25() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function PictureRecorder_init_$Init$($this) {
    PictureRecorder.call($this, org_jetbrains_skia_PictureRecorder__1nMake());
    Stats_instance.v3i();
    return $this;
  }
  function PictureRecorder_init_$Create$() {
    return PictureRecorder_init_$Init$(objectCreate(protoOf(PictureRecorder)));
  }
  function _FinalizerHolder_10() {
    _FinalizerHolder_instance_10 = this;
    this.j3s_1 = org_jetbrains_skia_PictureRecorder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_10;
  function _FinalizerHolder_getInstance_10() {
    if (_FinalizerHolder_instance_10 == null)
      new _FinalizerHolder_10();
    return _FinalizerHolder_instance_10;
  }
  function PictureRecorder(ptr) {
    Companion_getInstance_25();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_10().j3s_1);
  }
  protoOf(PictureRecorder).m3s = function (bounds, bbh) {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = new Canvas(org_jetbrains_skia_PictureRecorder__1nBeginRecording(this.y3i_1, bounds.h3l_1, bounds.i3l_1, bounds.j3l_1, bounds.k3l_1, getPtr(bbh)), false, this);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PictureRecorder).n3s = function (bounds, bbh, $super) {
    bbh = bbh === VOID ? null : bbh;
    return $super === VOID ? this.m3s(bounds, bbh) : $super.m3s.call(this, bounds, bbh);
  };
  protoOf(PictureRecorder).o3s = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = new Picture(org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPicture(this.y3i_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PixelGeometry_UNKNOWN_instance;
  var PixelGeometry_RGB_H_instance;
  var PixelGeometry_BGR_H_instance;
  var PixelGeometry_RGB_V_instance;
  var PixelGeometry_BGR_V_instance;
  var PixelGeometry_entriesInitialized;
  function PixelGeometry_initEntries() {
    if (PixelGeometry_entriesInitialized)
      return Unit_instance;
    PixelGeometry_entriesInitialized = true;
    PixelGeometry_UNKNOWN_instance = new PixelGeometry('UNKNOWN', 0);
    PixelGeometry_RGB_H_instance = new PixelGeometry('RGB_H', 1);
    PixelGeometry_BGR_H_instance = new PixelGeometry('BGR_H', 2);
    PixelGeometry_RGB_V_instance = new PixelGeometry('RGB_V', 3);
    PixelGeometry_BGR_V_instance = new PixelGeometry('BGR_V', 4);
  }
  function PixelGeometry(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PixelGeometry_UNKNOWN_getInstance() {
    PixelGeometry_initEntries();
    return PixelGeometry_UNKNOWN_instance;
  }
  function Companion_26() {
    Companion_instance_26 = this;
    this.p3s_1 = new Point(0.0, 0.0);
  }
  var Companion_instance_26;
  function Companion_getInstance_26() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function Point(x, y) {
    Companion_getInstance_26();
    this.q3s_1 = x;
    this.r3s_1 = y;
  }
  protoOf(Point).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point))
      return false;
    if (!(compareTo(this.q3s_1, other.q3s_1) === 0))
      return false;
    return compareTo(this.r3s_1, other.r3s_1) === 0;
  };
  protoOf(Point).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.q3s_1) | 0;
    result = imul(result, PRIME) + toBits(this.r3s_1) | 0;
    return result;
  };
  protoOf(Point).toString = function () {
    return 'Point(_x=' + this.q3s_1 + ', _y=' + this.r3s_1 + ')';
  };
  function Point3(x, y, z) {
    this.s3s_1 = x;
    this.t3s_1 = y;
    this.u3s_1 = z;
  }
  protoOf(Point3).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point3))
      return false;
    if (!(compareTo(this.s3s_1, other.s3s_1) === 0))
      return false;
    if (!(compareTo(this.t3s_1, other.t3s_1) === 0))
      return false;
    return compareTo(this.u3s_1, other.u3s_1) === 0;
  };
  protoOf(Point3).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.s3s_1) | 0;
    result = imul(result, PRIME) + toBits(this.t3s_1) | 0;
    result = imul(result, PRIME) + toBits(this.u3s_1) | 0;
    return result;
  };
  protoOf(Point3).toString = function () {
    return 'Point3(_x=' + this.s3s_1 + ', _y=' + this.t3s_1 + ', _z=' + this.u3s_1 + ')';
  };
  function Companion_27() {
  }
  protoOf(Companion_27).v3s = function (l, t, r, b, xRad, yRad) {
    // Inline function 'kotlin.floatArrayOf' call
    var tmp$ret$0 = new Float32Array([xRad, yRad]);
    return new RRect(l, t, r, b, tmp$ret$0);
  };
  protoOf(Companion_27).w3s = function (l, t, r, b, radii) {
    return new RRect(l, t, r, b, radii);
  };
  var Companion_instance_27;
  function Companion_getInstance_27() {
    return Companion_instance_27;
  }
  function RRect(l, t, r, b, radii) {
    Rect.call(this, l, t, r, b);
    this.r3l_1 = radii;
  }
  protoOf(RRect).toString = function () {
    return 'RRect(_left=' + this.h3l_1 + ', _top=' + this.i3l_1 + ', _right=' + this.j3l_1 + ', _bottom=' + this.k3l_1 + ', _radii=' + joinToString(this.r3l_1) + ')';
  };
  protoOf(RRect).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof RRect))
      return false;
    if (!protoOf(Rect).equals.call(this, other))
      return false;
    var tmp;
    if (this.r3l_1.length === other.r3l_1.length) {
      tmp = contentEquals(this.r3l_1, other.r3l_1);
    } else {
      tmp = contentEquals(normalizeRadii(this.r3l_1), normalizeRadii(other.r3l_1));
    }
    return tmp;
  };
  protoOf(RRect).hashCode = function () {
    var PRIME = 59;
    var result = protoOf(Rect).hashCode.call(this);
    result = imul(result, PRIME) + contentHashCode(this.r3l_1) | 0;
    return result;
  };
  function normalizeRadii(radii) {
    var tmp;
    switch (radii.length) {
      case 0:
        var tmp_0 = 0;
        var tmp_1 = new Float32Array(8);
        while (tmp_0 < 8) {
          tmp_1[tmp_0] = 0.0;
          tmp_0 = tmp_0 + 1 | 0;
        }

        tmp = tmp_1;
        break;
      case 1:
        var tmp_2 = 0;
        var tmp_3 = new Float32Array(8);
        while (tmp_2 < 8) {
          tmp_3[tmp_2] = radii[0];
          tmp_2 = tmp_2 + 1 | 0;
        }

        tmp = tmp_3;
        break;
      case 2:
        var tmp_4 = 0;
        var tmp_5 = new Float32Array(8);
        while (tmp_4 < 8) {
          var tmp_6 = tmp_4;
          tmp_5[tmp_6] = radii[tmp_6 % 2 | 0];
          tmp_4 = tmp_4 + 1 | 0;
        }

        tmp = tmp_5;
        break;
      case 4:
        var tmp_7 = 0;
        var tmp_8 = new Float32Array(8);
        while (tmp_7 < 8) {
          var tmp_9 = tmp_7;
          tmp_8[tmp_9] = radii[tmp_9 / 2 | 0];
          tmp_7 = tmp_7 + 1 | 0;
        }

        tmp = tmp_8;
        break;
      case 8:
        tmp = radii;
        break;
      default:
        throw Error_init_$Create$('illegal radii array');
    }
    return tmp;
  }
  function Companion_28() {
  }
  protoOf(Companion_28).x3s = function (l, t, r, b) {
    return new Rect(l, t, r, b);
  };
  protoOf(Companion_28).y3s = function (l, t, w, h) {
    return new Rect(l, t, l + w, t + h);
  };
  protoOf(Companion_28).m3r = function (block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Float32Array(4);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        var handle = $this$interopScope.b3p(result);
        block($this$interopScope, handle);
        $this$interopScope.c3p(handle, result);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
        }
      }
    }
    var result_0 = result;
    return new Rect(result_0[0], result_0[1], result_0[2], result_0[3]);
  };
  var Companion_instance_28;
  function Companion_getInstance_28() {
    return Companion_instance_28;
  }
  function Rect(left, top, right, bottom) {
    this.h3l_1 = left;
    this.i3l_1 = top;
    this.j3l_1 = right;
    this.k3l_1 = bottom;
  }
  protoOf(Rect).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Rect))
      return false;
    if (!(compareTo(this.h3l_1, other.h3l_1) === 0))
      return false;
    if (!(compareTo(this.i3l_1, other.i3l_1) === 0))
      return false;
    if (!(compareTo(this.j3l_1, other.j3l_1) === 0))
      return false;
    return compareTo(this.k3l_1, other.k3l_1) === 0;
  };
  protoOf(Rect).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.h3l_1) | 0;
    result = imul(result, PRIME) + toBits(this.i3l_1) | 0;
    result = imul(result, PRIME) + toBits(this.j3l_1) | 0;
    result = imul(result, PRIME) + toBits(this.k3l_1) | 0;
    return result;
  };
  protoOf(Rect).toString = function () {
    return 'Rect(_left=' + this.h3l_1 + ', _top=' + this.i3l_1 + ', _right=' + this.j3l_1 + ', _bottom=' + this.k3l_1 + ')';
  };
  function Companion_29() {
    Companion_instance_29 = this;
    Companion_instance_44.b3j();
  }
  var Companion_instance_29;
  function Companion_getInstance_29() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function Shader(ptr) {
    Companion_getInstance_29();
    RefCnt_init_$Init$(ptr, this);
  }
  function ShadowUtils() {
    ShadowUtils_instance = this;
    Companion_instance_44.b3j();
  }
  protoOf(ShadowUtils).z3s = function (canvas, path, zPlaneParams, lightPos, lightRadius, ambientColor, spotColor, transparentOccluder, geometricOnly) {
    Stats_instance.v3i();
    var flags = 0;
    if (transparentOccluder)
      flags = flags | 1;
    if (geometricOnly)
      flags = flags | 2;
    try {
      org_jetbrains_skia_ShadowUtils__1nDrawShadow(getPtr(canvas), getPtr(path), zPlaneParams.s3s_1, zPlaneParams.t3s_1, zPlaneParams.u3s_1, lightPos.s3s_1, lightPos.t3s_1, lightPos.u3s_1, lightRadius, ambientColor, spotColor, flags);
    }finally {
      reachabilityBarrier(canvas);
      reachabilityBarrier(path);
    }
  };
  var ShadowUtils_instance;
  function ShadowUtils_getInstance() {
    if (ShadowUtils_instance == null)
      new ShadowUtils();
    return ShadowUtils_instance;
  }
  function ArrayDecoder(ptr, disposePtr) {
    this.a3t_1 = ptr;
    this.b3t_1 = disposePtr;
  }
  protoOf(ArrayDecoder).qy = function () {
    org_jetbrains_skia_StdVectorDecoder__1nDisposeArray(this.a3t_1, this.b3t_1);
  };
  protoOf(ArrayDecoder).c3t = function (index) {
    return org_jetbrains_skia_StdVectorDecoder__1nReleaseElement(this.a3t_1, index);
  };
  protoOf(ArrayDecoder).n = function () {
    return org_jetbrains_skia_StdVectorDecoder__1nGetArraySize(this.a3t_1);
  };
  function Companion_30() {
    Companion_instance_30 = this;
    Companion_instance_44.b3j();
  }
  protoOf(Companion_30).d3t = function (context, rt, origin, colorFormat, colorSpace, surfaceProps) {
    var tmp;
    try {
      Stats_instance.v3i();
      var tmp$ret$1;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.Companion.makeFromBackendRenderTarget.<anonymous>' call
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          var tmp_0 = getPtr(context);
          var tmp_1 = getPtr(rt);
          var tmp_2 = getPtr(colorSpace);
          tmp$ret$1 = org_jetbrains_skia_Surface__1nMakeFromBackendRenderTarget(tmp_0, tmp_1, origin.s2_1, colorFormat.s2_1, tmp_2, $this$interopScope.x3k(surfaceProps == null ? null : surfaceProps.e3t()));
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
          }
        }
      }
      var ptr = tmp$ret$1;
      tmp = ptr === Companion_instance_46.d3j() ? null : Surface_init_$Create$(ptr, context, rt);
    }finally {
      reachabilityBarrier(context);
      reachabilityBarrier(rt);
      reachabilityBarrier(colorSpace);
    }
    return tmp;
  };
  var Companion_instance_30;
  function Companion_getInstance_30() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function Surface_init_$Init$(ptr, context, renderTarget, $this) {
    RefCnt_init_$Init$(ptr, $this);
    Surface.call($this);
    $this.h3t_1 = context;
    $this.i3t_1 = renderTarget;
    return $this;
  }
  function Surface_init_$Create$(ptr, context, renderTarget) {
    return Surface_init_$Init$(ptr, context, renderTarget, objectCreate(protoOf(Surface)));
  }
  protoOf(Surface).j3t = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      var ptr = org_jetbrains_skia_Surface__1nGetCanvas(this.y3i_1);
      var tmp_0;
      if (ptr === Companion_instance_46.d3j()) {
        throw IllegalArgumentException_init_$Create$_0();
      } else {
        tmp_0 = new Canvas(ptr, false, this);
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Surface).k3t = function () {
    var tmp0_safe_receiver = this.h3t_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.n3n(this);
    }
  };
  function Surface() {
    Companion_getInstance_30();
  }
  var SurfaceColorFormat_UNKNOWN_instance;
  var SurfaceColorFormat_ALPHA_8_instance;
  var SurfaceColorFormat_RGB_565_instance;
  var SurfaceColorFormat_ARGB_4444_instance;
  var SurfaceColorFormat_RGBA_8888_instance;
  var SurfaceColorFormat_RGB_888x_instance;
  var SurfaceColorFormat_BGRA_8888_instance;
  var SurfaceColorFormat_RGBA_1010102_instance;
  var SurfaceColorFormat_RGB_101010x_instance;
  var SurfaceColorFormat_GRAY_8_instance;
  var SurfaceColorFormat_RGBA_F16_NORM_instance;
  var SurfaceColorFormat_RGBA_F16_instance;
  var SurfaceColorFormat_RGBA_F32_instance;
  var SurfaceColorFormat_R8G8_UNORM_instance;
  var SurfaceColorFormat_A16_FLOAT_instance;
  var SurfaceColorFormat_R16G16_FLOAT_instance;
  var SurfaceColorFormat_A16_UNORM_instance;
  var SurfaceColorFormat_R16G16_UNORM_instance;
  var SurfaceColorFormat_R16G16B16A16_UNORM_instance;
  var SurfaceColorFormat_entriesInitialized;
  function SurfaceColorFormat_initEntries() {
    if (SurfaceColorFormat_entriesInitialized)
      return Unit_instance;
    SurfaceColorFormat_entriesInitialized = true;
    SurfaceColorFormat_UNKNOWN_instance = new SurfaceColorFormat('UNKNOWN', 0);
    SurfaceColorFormat_ALPHA_8_instance = new SurfaceColorFormat('ALPHA_8', 1);
    SurfaceColorFormat_RGB_565_instance = new SurfaceColorFormat('RGB_565', 2);
    SurfaceColorFormat_ARGB_4444_instance = new SurfaceColorFormat('ARGB_4444', 3);
    SurfaceColorFormat_RGBA_8888_instance = new SurfaceColorFormat('RGBA_8888', 4);
    SurfaceColorFormat_RGB_888x_instance = new SurfaceColorFormat('RGB_888x', 5);
    SurfaceColorFormat_BGRA_8888_instance = new SurfaceColorFormat('BGRA_8888', 6);
    SurfaceColorFormat_RGBA_1010102_instance = new SurfaceColorFormat('RGBA_1010102', 7);
    SurfaceColorFormat_RGB_101010x_instance = new SurfaceColorFormat('RGB_101010x', 8);
    SurfaceColorFormat_GRAY_8_instance = new SurfaceColorFormat('GRAY_8', 9);
    SurfaceColorFormat_RGBA_F16_NORM_instance = new SurfaceColorFormat('RGBA_F16_NORM', 10);
    SurfaceColorFormat_RGBA_F16_instance = new SurfaceColorFormat('RGBA_F16', 11);
    SurfaceColorFormat_RGBA_F32_instance = new SurfaceColorFormat('RGBA_F32', 12);
    SurfaceColorFormat_R8G8_UNORM_instance = new SurfaceColorFormat('R8G8_UNORM', 13);
    SurfaceColorFormat_A16_FLOAT_instance = new SurfaceColorFormat('A16_FLOAT', 14);
    SurfaceColorFormat_R16G16_FLOAT_instance = new SurfaceColorFormat('R16G16_FLOAT', 15);
    SurfaceColorFormat_A16_UNORM_instance = new SurfaceColorFormat('A16_UNORM', 16);
    SurfaceColorFormat_R16G16_UNORM_instance = new SurfaceColorFormat('R16G16_UNORM', 17);
    SurfaceColorFormat_R16G16B16A16_UNORM_instance = new SurfaceColorFormat('R16G16B16A16_UNORM', 18);
  }
  function SurfaceColorFormat(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SurfaceColorFormat_RGBA_8888_getInstance() {
    SurfaceColorFormat_initEntries();
    return SurfaceColorFormat_RGBA_8888_instance;
  }
  var SurfaceOrigin_TOP_LEFT_instance;
  var SurfaceOrigin_BOTTOM_LEFT_instance;
  var SurfaceOrigin_entriesInitialized;
  function SurfaceOrigin_initEntries() {
    if (SurfaceOrigin_entriesInitialized)
      return Unit_instance;
    SurfaceOrigin_entriesInitialized = true;
    SurfaceOrigin_TOP_LEFT_instance = new SurfaceOrigin('TOP_LEFT', 0);
    SurfaceOrigin_BOTTOM_LEFT_instance = new SurfaceOrigin('BOTTOM_LEFT', 1);
  }
  function SurfaceOrigin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SurfaceOrigin_BOTTOM_LEFT_getInstance() {
    SurfaceOrigin_initEntries();
    return SurfaceOrigin_BOTTOM_LEFT_instance;
  }
  function _getPixelGeometryOrdinal($this) {
    return $this.a3l_1.s2_1;
  }
  function SurfaceProps(isDeviceIndependentFonts, pixelGeometry) {
    isDeviceIndependentFonts = isDeviceIndependentFonts === VOID ? false : isDeviceIndependentFonts;
    pixelGeometry = pixelGeometry === VOID ? PixelGeometry_UNKNOWN_getInstance() : pixelGeometry;
    this.z3k_1 = isDeviceIndependentFonts;
    this.a3l_1 = pixelGeometry;
  }
  protoOf(SurfaceProps).b3l = function () {
    return 0 | (this.z3k_1 ? 1 : 0);
  };
  protoOf(SurfaceProps).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof SurfaceProps))
      return false;
    if (!(this.z3k_1 === other.z3k_1))
      return false;
    return this.a3l_1.equals(other.a3l_1);
  };
  protoOf(SurfaceProps).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.z3k_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.a3l_1.hashCode() | 0;
    return result;
  };
  protoOf(SurfaceProps).toString = function () {
    return 'SurfaceProps(_deviceIndependentFonts=' + this.z3k_1 + ', _pixelGeometry=' + this.a3l_1.toString() + ')';
  };
  protoOf(SurfaceProps).e3t = function () {
    // Inline function 'kotlin.intArrayOf' call
    return new Int32Array([this.b3l(), _getPixelGeometryOrdinal(this)]);
  };
  function Companion_31() {
    Companion_instance_31 = this;
    Companion_instance_44.b3j();
  }
  var Companion_instance_31;
  function Companion_getInstance_31() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function Typeface(ptr) {
    Companion_getInstance_31();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(Typeface).n3t = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = FontStyle_init_$Create$_0(org_jetbrains_skia_Typeface__1nGetFontStyle(this.y3i_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).o3t = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = org_jetbrains_skia_Typeface__1nGetUniqueId(this.y3i_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).z3i = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Typeface__1nEquals(this.y3i_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Typeface).p3t = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      // Inline function 'org.jetbrains.skia.impl.withStringResult' call
      // Inline function 'org.jetbrains.skia.Typeface.<get-familyName>.<anonymous>' call
      var tmp$ret$0 = org_jetbrains_skia_Typeface__1nGetFamilyName(this.y3i_1);
      // Inline function 'org.jetbrains.skia.impl.use' call
      var this_0 = new ManagedString(tmp$ret$0);
      var tmp_0;
      try {
        // Inline function 'org.jetbrains.skia.impl.withStringResult.<anonymous>' call
        tmp_0 = this_0.toString();
      }finally {
        this_0.u1x();
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).toString = function () {
    return "Typeface(familyName='" + this.p3t() + "', fontStyle=" + this.n3t().toString() + ', uniqueId=' + this.o3t() + ')';
  };
  function Companion_32() {
    Companion_instance_32 = this;
    Companion_instance_44.b3j();
  }
  var Companion_instance_32;
  function Companion_getInstance_32() {
    if (Companion_instance_32 == null)
      new Companion_32();
    return Companion_instance_32;
  }
  function _FinalizerHolder_11() {
    _FinalizerHolder_instance_11 = this;
    this.q3t_1 = org_jetbrains_skia_U16String__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_11;
  function _FinalizerHolder_getInstance_11() {
    if (_FinalizerHolder_instance_11 == null)
      new _FinalizerHolder_11();
    return _FinalizerHolder_instance_11;
  }
  function U16String(ptr) {
    Companion_getInstance_32();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_11().q3t_1);
  }
  function CharDirection() {
    CharDirection_instance = this;
    Companion_instance_44.b3j();
    this.r3t_1 = 0;
    this.s3t_1 = 1;
    this.t3t_1 = 2;
    this.u3t_1 = 3;
    this.v3t_1 = 4;
    this.w3t_1 = 5;
    this.x3t_1 = 6;
    this.y3t_1 = 7;
    this.z3t_1 = 8;
    this.a3u_1 = 9;
    this.b3u_1 = 10;
    this.c3u_1 = 11;
    this.d3u_1 = 12;
    this.e3u_1 = 13;
    this.f3u_1 = 14;
    this.g3u_1 = 15;
    this.h3u_1 = 16;
    this.i3u_1 = 17;
    this.j3u_1 = 18;
    this.k3u_1 = 19;
    this.l3u_1 = 20;
    this.m3u_1 = 21;
    this.n3u_1 = 22;
  }
  protoOf(CharDirection).o3u = function (codePoint) {
    return org_jetbrains_skia_icu_Unicode_charDirection(codePoint);
  };
  var CharDirection_instance;
  function CharDirection_getInstance() {
    if (CharDirection_instance == null)
      new CharDirection();
    return CharDirection_instance;
  }
  function getPtr(n) {
    var tmp1_elvis_lhs = n == null ? null : n.y3i_1;
    return tmp1_elvis_lhs == null ? Companion_instance_46.d3j() : tmp1_elvis_lhs;
  }
  var Alignment_LEFT_instance;
  var Alignment_RIGHT_instance;
  var Alignment_CENTER_instance;
  var Alignment_JUSTIFY_instance;
  var Alignment_START_instance;
  var Alignment_END_instance;
  var Alignment_entriesInitialized;
  function Alignment_initEntries() {
    if (Alignment_entriesInitialized)
      return Unit_instance;
    Alignment_entriesInitialized = true;
    Alignment_LEFT_instance = new Alignment('LEFT', 0);
    Alignment_RIGHT_instance = new Alignment('RIGHT', 1);
    Alignment_CENTER_instance = new Alignment('CENTER', 2);
    Alignment_JUSTIFY_instance = new Alignment('JUSTIFY', 3);
    Alignment_START_instance = new Alignment('START', 4);
    Alignment_END_instance = new Alignment('END', 5);
  }
  function Alignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Alignment_LEFT_getInstance() {
    Alignment_initEntries();
    return Alignment_LEFT_instance;
  }
  function Alignment_RIGHT_getInstance() {
    Alignment_initEntries();
    return Alignment_RIGHT_instance;
  }
  function Alignment_CENTER_getInstance() {
    Alignment_initEntries();
    return Alignment_CENTER_instance;
  }
  function Alignment_JUSTIFY_getInstance() {
    Alignment_initEntries();
    return Alignment_JUSTIFY_instance;
  }
  function Alignment_START_getInstance() {
    Alignment_initEntries();
    return Alignment_START_instance;
  }
  function Alignment_END_getInstance() {
    Alignment_initEntries();
    return Alignment_END_instance;
  }
  var BaselineMode_ALPHABETIC_instance;
  var BaselineMode_IDEOGRAPHIC_instance;
  var BaselineMode_entriesInitialized;
  function BaselineMode_initEntries() {
    if (BaselineMode_entriesInitialized)
      return Unit_instance;
    BaselineMode_entriesInitialized = true;
    BaselineMode_ALPHABETIC_instance = new BaselineMode('ALPHABETIC', 0);
    BaselineMode_IDEOGRAPHIC_instance = new BaselineMode('IDEOGRAPHIC', 1);
  }
  function BaselineMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BaselineMode_ALPHABETIC_getInstance() {
    BaselineMode_initEntries();
    return BaselineMode_ALPHABETIC_instance;
  }
  var DecorationLineStyle_SOLID_instance;
  var DecorationLineStyle_DOUBLE_instance;
  var DecorationLineStyle_DOTTED_instance;
  var DecorationLineStyle_DASHED_instance;
  var DecorationLineStyle_WAVY_instance;
  var DecorationLineStyle_entriesInitialized;
  function DecorationLineStyle_initEntries() {
    if (DecorationLineStyle_entriesInitialized)
      return Unit_instance;
    DecorationLineStyle_entriesInitialized = true;
    DecorationLineStyle_SOLID_instance = new DecorationLineStyle('SOLID', 0);
    DecorationLineStyle_DOUBLE_instance = new DecorationLineStyle('DOUBLE', 1);
    DecorationLineStyle_DOTTED_instance = new DecorationLineStyle('DOTTED', 2);
    DecorationLineStyle_DASHED_instance = new DecorationLineStyle('DASHED', 3);
    DecorationLineStyle_WAVY_instance = new DecorationLineStyle('WAVY', 4);
  }
  function DecorationLineStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DecorationLineStyle_SOLID_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_SOLID_instance;
  }
  function DecorationLineStyle_DOUBLE_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_DOUBLE_instance;
  }
  function DecorationLineStyle_DOTTED_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_DOTTED_instance;
  }
  function DecorationLineStyle_DASHED_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_DASHED_instance;
  }
  function DecorationLineStyle_WAVY_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_WAVY_instance;
  }
  function Companion_33() {
    Companion_instance_33 = this;
    this.p3u_1 = new DecorationStyle(false, false, false, true, -16777216, DecorationLineStyle_SOLID_getInstance(), 1.0);
  }
  var Companion_instance_33;
  function Companion_getInstance_33() {
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function DecorationStyle(_underline, _overline, _lineThrough, _gaps, color, lineStyle, thicknessMultiplier) {
    Companion_getInstance_33();
    this.q3u_1 = _underline;
    this.r3u_1 = _overline;
    this.s3u_1 = _lineThrough;
    this.t3u_1 = _gaps;
    this.u3u_1 = color;
    this.v3u_1 = lineStyle;
    this.w3u_1 = thicknessMultiplier;
  }
  protoOf(DecorationStyle).x3u = function () {
    return this.v3u_1;
  };
  protoOf(DecorationStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof DecorationStyle))
      return false;
    if (!(this.q3u_1 === other.q3u_1))
      return false;
    if (!(this.r3u_1 === other.r3u_1))
      return false;
    if (!(this.s3u_1 === other.s3u_1))
      return false;
    if (!(this.t3u_1 === other.t3u_1))
      return false;
    if (!(this.u3u_1 === other.u3u_1))
      return false;
    if (!(compareTo(this.w3u_1, other.w3u_1) === 0))
      return false;
    return this.x3u().equals(other.x3u());
  };
  protoOf(DecorationStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.q3u_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.r3u_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.s3u_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.t3u_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.u3u_1 | 0;
    result = imul(result, PRIME) + toBits(this.w3u_1) | 0;
    result = imul(result, PRIME) + this.x3u().hashCode() | 0;
    return result;
  };
  protoOf(DecorationStyle).toString = function () {
    return 'DecorationStyle(_underline=' + this.q3u_1 + ', _overline=' + this.r3u_1 + ', _lineThrough=' + this.s3u_1 + ', _gaps=' + this.t3u_1 + ', _color=' + this.u3u_1 + ', _lineStyle=' + this.x3u().toString() + ', _thicknessMultiplier=' + this.w3u_1 + ')';
  };
  var Direction_RTL_instance;
  var Direction_LTR_instance;
  function values_6() {
    return [Direction_RTL_getInstance(), Direction_LTR_getInstance()];
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
    Direction_entriesInitialized = true;
    Direction_RTL_instance = new Direction('RTL', 0);
    Direction_LTR_instance = new Direction('LTR', 1);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Direction_RTL_getInstance() {
    Direction_initEntries();
    return Direction_RTL_instance;
  }
  function Direction_LTR_getInstance() {
    Direction_initEntries();
    return Direction_LTR_instance;
  }
  function Companion_34() {
    Companion_instance_34 = this;
    Companion_instance_44.b3j();
  }
  var Companion_instance_34;
  function Companion_getInstance_34() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function FontCollection_init_$Init$($this) {
    FontCollection.call($this, org_jetbrains_skia_paragraph_FontCollection__1nMake());
    Stats_instance.v3i();
    return $this;
  }
  function FontCollection_init_$Create$() {
    return FontCollection_init_$Init$(objectCreate(protoOf(FontCollection)));
  }
  function FontCollection(ptr) {
    Companion_getInstance_34();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(FontCollection).a3v = function (fontMgr) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_FontCollection__1nSetAssetFontManager(this.y3i_1, getPtr(fontMgr), Companion_instance_46.d3j());
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  protoOf(FontCollection).b3v = function (fontMgr) {
    return this.c3v(fontMgr, null);
  };
  protoOf(FontCollection).c3v = function (fontMgr, defaultFamilyName) {
    var tmp;
    try {
      Stats_instance.v3i();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.FontCollection.setDefaultFontManager.<anonymous>' call
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          org_jetbrains_skia_paragraph_FontCollection__1nSetDefaultFontManager(this.y3i_1, getPtr(fontMgr), $this$interopScope.b3k(defaultFamilyName));
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  protoOf(FontCollection).d3v = function (familyNames, style) {
    var tmp;
    try {
      Stats_instance.v3i();
      // Inline function 'org.jetbrains.skia.arrayDecoderScope' call
      var arrayDecoder = null;
      var tmp_0;
      try {
        // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>' call
        var tmp$ret$1;
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
            access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>.<anonymous>' call
            var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
            var tmp_1 = this.y3i_1;
            var tmp_2 = $this$interopScope.e3v(familyNames);
            var tmp1_elvis_lhs = familyNames == null ? null : familyNames.length;
            tmp$ret$1 = org_jetbrains_skia_paragraph_FontCollection__1nFindTypefaces(tmp_1, tmp_2, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, style.j3p_1);
            break $l$block;
          }finally {
            var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
            access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
            if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
              access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
            }
          }
        }
        arrayDecoder = new ArrayDecoder(tmp$ret$1, org_jetbrains_skia_impl_RefCnt__getFinalizer());
        // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>' call
        var arrayDecoder_0 = arrayDecoder;
        // Inline function 'kotlin.collections.map' call
        var this_0 = until(0, arrayDecoder_0.n());
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
        var inductionVariable = this_0.b1_1;
        var last = this_0.c1_1;
        if (inductionVariable <= last)
          do {
            var item = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'org.jetbrains.skia.paragraph.FontCollection.findTypefaces.<anonymous>.<anonymous>' call
            var i = item;
            var tmp$ret$3 = new Typeface(arrayDecoder_0.c3t(i));
            destination.e(tmp$ret$3);
          }
           while (!(item === last));
        // Inline function 'kotlin.collections.toTypedArray' call
        tmp_0 = copyToArray(destination);
      }finally {
        var tmp0_safe_receiver = arrayDecoder;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.qy();
        }
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function FontRastrSettings(edging, hinting, subpixel) {
    this.f3v_1 = edging;
    this.g3v_1 = hinting;
    this.h3v_1 = subpixel;
  }
  protoOf(FontRastrSettings).toString = function () {
    return 'FontRastrSettings(edging=' + this.f3v_1.toString() + ', hinting=' + this.g3v_1.toString() + ', subpixel=' + this.h3v_1 + ')';
  };
  protoOf(FontRastrSettings).hashCode = function () {
    var result = this.f3v_1.hashCode();
    result = imul(result, 31) + this.g3v_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.h3v_1) | 0;
    return result;
  };
  protoOf(FontRastrSettings).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontRastrSettings))
      return false;
    var tmp0_other_with_cast = other instanceof FontRastrSettings ? other : THROW_CCE();
    if (!this.f3v_1.equals(tmp0_other_with_cast.f3v_1))
      return false;
    if (!this.g3v_1.equals(tmp0_other_with_cast.g3v_1))
      return false;
    if (!(this.h3v_1 === tmp0_other_with_cast.h3v_1))
      return false;
    return true;
  };
  var HeightMode_ALL_instance;
  var HeightMode_DISABLE_FIRST_ASCENT_instance;
  var HeightMode_DISABLE_LAST_DESCENT_instance;
  var HeightMode_DISABLE_ALL_instance;
  var HeightMode_entriesInitialized;
  function HeightMode_initEntries() {
    if (HeightMode_entriesInitialized)
      return Unit_instance;
    HeightMode_entriesInitialized = true;
    HeightMode_ALL_instance = new HeightMode('ALL', 0);
    HeightMode_DISABLE_FIRST_ASCENT_instance = new HeightMode('DISABLE_FIRST_ASCENT', 1);
    HeightMode_DISABLE_LAST_DESCENT_instance = new HeightMode('DISABLE_LAST_DESCENT', 2);
    HeightMode_DISABLE_ALL_instance = new HeightMode('DISABLE_ALL', 3);
  }
  function HeightMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function HeightMode_ALL_getInstance() {
    HeightMode_initEntries();
    return HeightMode_ALL_instance;
  }
  function HeightMode_DISABLE_FIRST_ASCENT_getInstance() {
    HeightMode_initEntries();
    return HeightMode_DISABLE_FIRST_ASCENT_instance;
  }
  function HeightMode_DISABLE_LAST_DESCENT_getInstance() {
    HeightMode_initEntries();
    return HeightMode_DISABLE_LAST_DESCENT_instance;
  }
  function HeightMode_DISABLE_ALL_getInstance() {
    HeightMode_initEntries();
    return HeightMode_DISABLE_ALL_instance;
  }
  function Companion_35() {
  }
  protoOf(Companion_35).i3v = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nGetArraySize(array);
  };
  protoOf(Companion_35).j3v = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nDisposeArray(array);
  };
  protoOf(Companion_35).k3v = function (array, index) {
    var intArray = new Int32Array(6);
    var doubleArray = new Float64Array(7);
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    $l$block_0: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        var handle = $this$interopScope.t3p(intArray);
        // Inline function 'org.jetbrains.skia.paragraph.Companion.getArrayElement.<anonymous>' call
        // Inline function 'org.jetbrains.skia.impl.withResult' call
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0_0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
            access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0_0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.impl.withResult.<anonymous>' call
            var $this$interopScope_0 = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
            var handle_0 = $this$interopScope_0.l3v(doubleArray);
            // Inline function 'org.jetbrains.skia.paragraph.Companion.getArrayElement.<anonymous>.<anonymous>' call
            org_jetbrains_skia_paragraph_LineMetrics__1nGetArrayElement(array, index, handle, handle_0);
            $this$interopScope_0.m3v(handle_0, doubleArray);
            break $l$block;
          }finally {
            var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
            access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
            if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
              access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
            }
          }
        }
        $this$interopScope.y3k(handle, intArray);
        break $l$block_0;
      }finally {
        var tmp1_0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
        }
      }
    }
    return new LineMetrics(intArray[0], intArray[1], intArray[2], intArray[3], !(intArray[4] === 0), doubleArray[0], doubleArray[1], doubleArray[2], doubleArray[3], doubleArray[4], doubleArray[5], doubleArray[6], intArray[5]);
  };
  var Companion_instance_35;
  function Companion_getInstance_35() {
    return Companion_instance_35;
  }
  function LineMetrics(startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber) {
    this.n3v_1 = startIndex;
    this.o3v_1 = endIndex;
    this.p3v_1 = endExcludingWhitespaces;
    this.q3v_1 = endIncludingNewline;
    this.r3v_1 = isHardBreak;
    this.s3v_1 = ascent;
    this.t3v_1 = descent;
    this.u3v_1 = unscaledAscent;
    this.v3v_1 = height;
    this.w3v_1 = width;
    this.x3v_1 = left;
    this.y3v_1 = baseline;
    this.z3v_1 = lineNumber;
  }
  protoOf(LineMetrics).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof LineMetrics))
      return false;
    if (!(this.n3v_1 === other.n3v_1))
      return false;
    if (!(this.o3v_1 === other.o3v_1))
      return false;
    if (!(this.p3v_1 === other.p3v_1))
      return false;
    if (!(this.q3v_1 === other.q3v_1))
      return false;
    if (!(this.r3v_1 === other.r3v_1))
      return false;
    if (!(compareTo(this.s3v_1, other.s3v_1) === 0))
      return false;
    if (!(compareTo(this.t3v_1, other.t3v_1) === 0))
      return false;
    if (!(compareTo(this.u3v_1, other.u3v_1) === 0))
      return false;
    if (!(compareTo(this.v3v_1, other.v3v_1) === 0))
      return false;
    if (!(compareTo(this.w3v_1, other.w3v_1) === 0))
      return false;
    if (!(compareTo(this.x3v_1, other.x3v_1) === 0))
      return false;
    if (!(compareTo(this.y3v_1, other.y3v_1) === 0))
      return false;
    return this.z3v_1 === other.z3v_1;
  };
  protoOf(LineMetrics).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.n3v_1 | 0;
    result = imul(result, PRIME) + this.o3v_1 | 0;
    result = imul(result, PRIME) + this.p3v_1 | 0;
    result = imul(result, PRIME) + this.q3v_1 | 0;
    result = imul(result, PRIME) + (this.r3v_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + toBits_0(this.s3v_1).f1() | 0;
    result = imul(result, PRIME) + toBits_0(this.t3v_1).f1() | 0;
    result = imul(result, PRIME) + toBits_0(this.u3v_1).f1() | 0;
    result = imul(result, PRIME) + toBits_0(this.v3v_1).f1() | 0;
    result = imul(result, PRIME) + toBits_0(this.w3v_1).f1() | 0;
    result = imul(result, PRIME) + toBits_0(this.x3v_1).f1() | 0;
    result = imul(result, PRIME) + toBits_0(this.y3v_1).f1() | 0;
    result = imul(result, PRIME) + this.z3v_1 | 0;
    return result;
  };
  protoOf(LineMetrics).toString = function () {
    return 'LineMetrics(_startIndex=' + this.n3v_1 + ', _endIndex=' + this.o3v_1 + ', _endExcludingWhitespaces=' + this.p3v_1 + ', _endIncludingNewline=' + this.q3v_1 + ', _hardBreak=' + this.r3v_1 + ', _ascent=' + this.s3v_1 + ', _descent=' + this.t3v_1 + ', _unscaledAscent=' + this.u3v_1 + ', _height=' + this.v3v_1 + ', _width=' + this.w3v_1 + ', _left=' + this.x3v_1 + ', _baseline=' + this.y3v_1 + ', _lineNumber=' + this.z3v_1 + ')';
  };
  function Companion_36() {
    Companion_instance_36 = this;
    Companion_instance_44.b3j();
  }
  var Companion_instance_36;
  function Companion_getInstance_36() {
    if (Companion_instance_36 == null)
      new Companion_36();
    return Companion_instance_36;
  }
  function _FinalizerHolder_12() {
    _FinalizerHolder_instance_12 = this;
    this.a3w_1 = org_jetbrains_skia_paragraph_Paragraph__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_12;
  function _FinalizerHolder_getInstance_12() {
    if (_FinalizerHolder_instance_12 == null)
      new _FinalizerHolder_12();
    return _FinalizerHolder_instance_12;
  }
  function Paragraph$getWordBoundary$lambda(this$0, $offset) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_paragraph_Paragraph__1nGetWordBoundary(this$0.y3i_1, $offset, it);
      return Unit_instance;
    };
  }
  function Paragraph(ptr, text) {
    Companion_getInstance_36();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_12().a3w_1);
    Stats_instance.v3i();
    this.d3w_1 = text;
  }
  protoOf(Paragraph).u1x = function () {
    if (!(this.d3w_1 == null)) {
      ensureNotNull(this.d3w_1).u1x();
      this.d3w_1 = null;
    }
    protoOf(Managed).u1x.call(this);
  };
  protoOf(Paragraph).n3g = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetHeight(this.y3i_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).e3w = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMinIntrinsicWidth(this.y3i_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).f3w = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMaxIntrinsicWidth(this.y3i_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).g3w = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetAlphabeticBaseline(this.y3i_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).h3w = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nDidExceedMaxLines(this.y3i_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).i3w = function (width) {
    Stats_instance.v3i();
    org_jetbrains_skia_paragraph_Paragraph__1nLayout(this.y3i_1, width);
    return this;
  };
  protoOf(Paragraph).j3w = function (canvas, x, y) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_Paragraph__1nPaint(this.y3i_1, getPtr(canvas), x, y);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(canvas);
    }
    return tmp;
  };
  protoOf(Paragraph).k3w = function (start, end, rectHeightMode, rectWidthMode) {
    var tmp;
    try {
      Stats_instance.v3i();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.Paragraph.getRectsForRange.<anonymous>' call
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForRange(this.y3i_1, start, end, rectHeightMode.s2_1, rectWidthMode.s2_1);
          var size = Companion_instance_40.i3v(this_0);
          var tmp_0 = 0;
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp_1 = fillArrayVal(Array(size), null);
          while (tmp_0 < size) {
            var tmp_2 = tmp_0;
            tmp_1[tmp_2] = Companion_instance_40.k3v(this_0, tmp_2);
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_1;
          Companion_instance_40.j3v(this_0);
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
          }
        }
      }
      tmp = result;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).l3w = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.Paragraph.<get-rectsForPlaceholders>.<anonymous>' call
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForPlaceholders(this.y3i_1);
          var size = Companion_instance_40.i3v(this_0);
          var tmp_0 = 0;
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp_1 = fillArrayVal(Array(size), null);
          while (tmp_0 < size) {
            var tmp_2 = tmp_0;
            tmp_1[tmp_2] = Companion_instance_40.k3v(this_0, tmp_2);
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_1;
          Companion_instance_40.j3v(this_0);
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
          }
        }
      }
      tmp = result;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).m3w = function (offset) {
    var tmp;
    try {
      Stats_instance.v3i();
      var tmp_0 = Companion_instance_15;
      tmp = fromInteropPointer_0(tmp_0, Paragraph$getWordBoundary$lambda(this, offset));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).n3w = function () {
    var tmp;
    try {
      var tmp_0;
      if (this.d3w_1 == null) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = [];
      } else {
        Stats_instance.v3i();
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
            access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
            // Inline function 'org.jetbrains.skia.paragraph.Paragraph.<get-lineMetrics>.<anonymous>' call
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
            // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
            var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetLineMetrics(this.y3i_1, getPtr(this.d3w_1));
            var size = Companion_instance_35.i3v(this_0);
            var tmp_1 = 0;
            // Inline function 'kotlin.arrayOfNulls' call
            var tmp_2 = fillArrayVal(Array(size), null);
            while (tmp_1 < size) {
              var tmp_3 = tmp_1;
              tmp_2[tmp_3] = Companion_instance_35.k3v(this_0, tmp_3);
              tmp_1 = tmp_1 + 1 | 0;
            }
            var result = tmp_2;
            Companion_instance_35.j3v(this_0);
            break $l$block;
          }finally {
            var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
            access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
            if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
              access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
            }
          }
        }
        tmp_0 = result;
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(this.d3w_1);
    }
    return tmp;
  };
  protoOf(Paragraph).o3w = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetLineNumber(this.y3i_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).p3w = function () {
    Stats_instance.v3i();
    org_jetbrains_skia_paragraph_Paragraph__1nMarkDirty(this.y3i_1);
    return this;
  };
  protoOf(Paragraph).q3w = function (from, to, paint) {
    var tmp;
    try {
      if (!(this.d3w_1 == null)) {
        Stats_instance.v3i();
        org_jetbrains_skia_paragraph_Paragraph__1nUpdateForegroundPaint(this.y3i_1, from, to, getPtr(paint), getPtr(this.d3w_1));
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
      reachabilityBarrier(this.d3w_1);
    }
    return tmp;
  };
  function Companion_37() {
    Companion_instance_37 = this;
    Companion_instance_44.b3j();
  }
  var Companion_instance_37;
  function Companion_getInstance_37() {
    if (Companion_instance_37 == null)
      new Companion_37();
    return Companion_instance_37;
  }
  function _FinalizerHolder_13() {
    _FinalizerHolder_instance_13 = this;
    this.r3w_1 = org_jetbrains_skia_paragraph_ParagraphBuilder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_13;
  function _FinalizerHolder_getInstance_13() {
    if (_FinalizerHolder_instance_13 == null)
      new _FinalizerHolder_13();
    return _FinalizerHolder_instance_13;
  }
  function ParagraphBuilder(style, fc) {
    Companion_getInstance_37();
    Managed.call(this, makeParagraphBuilder(style, fc), _FinalizerHolder_getInstance_13().r3w_1);
    this.u3w_1 = null;
  }
  protoOf(ParagraphBuilder).v3w = function (style) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_ParagraphBuilder__1nPushStyle(this.y3i_1, getPtr(style));
      tmp = this;
    }finally {
      reachabilityBarrier(style);
    }
    return tmp;
  };
  protoOf(ParagraphBuilder).w3w = function (text) {
    Stats_instance.v3i();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.ParagraphBuilder.addText.<anonymous>' call
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddText(this.y3i_1, $this$interopScope.b3k(text));
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
    }
    if (this.u3w_1 == null)
      this.u3w_1 = ManagedString_init_$Create$(text);
    else {
      ensureNotNull(this.u3w_1).g3q(text);
    }
    return this;
  };
  protoOf(ParagraphBuilder).x3w = function (style) {
    // Inline function 'kotlin.check' call
    if (!!isNaN_0(style.y3w_1)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!!isNaN_0(style.z3w_1)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!!isNaN_0(style.c3x_1)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddPlaceholder(this.y3i_1, style.y3w_1, style.z3w_1, style.d3x().s2_1, style.e3x().s2_1, style.c3x_1);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(ParagraphBuilder).k1z = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      var paragraph = new Paragraph(org_jetbrains_skia_paragraph_ParagraphBuilder__1nBuild(this.y3i_1), this.u3w_1);
      this.u3w_1 = null;
      tmp = paragraph;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function makeParagraphBuilder(style, fc) {
    Stats_instance.v3i();
    var tmp;
    try {
      tmp = org_jetbrains_skia_paragraph_ParagraphBuilder__1nMake(getPtr(style), getPtr(fc));
    }finally {
      reachabilityBarrier(style);
      reachabilityBarrier(fc);
    }
    return tmp;
  }
  function Companion_38() {
    Companion_instance_38 = this;
    Companion_instance_44.b3j();
  }
  var Companion_instance_38;
  function Companion_getInstance_38() {
    if (Companion_instance_38 == null)
      new Companion_38();
    return Companion_instance_38;
  }
  function _FinalizerHolder_14() {
    _FinalizerHolder_instance_14 = this;
    this.f3x_1 = org_jetbrains_skia_paragraph_ParagraphStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_14;
  function _FinalizerHolder_getInstance_14() {
    if (_FinalizerHolder_instance_14 == null)
      new _FinalizerHolder_14();
    return _FinalizerHolder_instance_14;
  }
  function ParagraphStyle() {
    Companion_getInstance_38();
    Managed.call(this, org_jetbrains_skia_paragraph_ParagraphStyle__1nMake(), _FinalizerHolder_getInstance_14().f3x_1);
    Stats_instance.v3i();
  }
  protoOf(ParagraphStyle).z3i = function (other) {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = org_jetbrains_skia_paragraph_ParagraphStyle__1nEquals(this.y3i_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).i3x = function (value) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextStyle(this.y3i_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).j3x = function (value) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetDirection(this.y3i_1, value.s2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).k3x = function (value) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetAlignment(this.y3i_1, value.s2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).l3x = function (value) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetMaxLinesCount(this.y3i_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).m3x = function (value) {
    var tmp;
    try {
      Stats_instance.v3i();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.ParagraphStyle.<set-ellipsis>.<anonymous>' call
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          org_jetbrains_skia_paragraph_ParagraphStyle__1nSetEllipsis(this.y3i_1, $this$interopScope.b3k(value));
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
          }
        }
      }
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).n3x = function (value) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeightMode(this.y3i_1, value.s2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).o3x = function (value) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetFontRastrSettings(this.y3i_1, value.f3v_1.s2_1, value.g3v_1.s2_1, value.h3v_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).p3x = function (value) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextIndent(this.y3i_1, value.q3x_1, value.r3x_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PlaceholderAlignment_BASELINE_instance;
  var PlaceholderAlignment_ABOVE_BASELINE_instance;
  var PlaceholderAlignment_BELOW_BASELINE_instance;
  var PlaceholderAlignment_TOP_instance;
  var PlaceholderAlignment_BOTTOM_instance;
  var PlaceholderAlignment_MIDDLE_instance;
  var PlaceholderAlignment_entriesInitialized;
  function PlaceholderAlignment_initEntries() {
    if (PlaceholderAlignment_entriesInitialized)
      return Unit_instance;
    PlaceholderAlignment_entriesInitialized = true;
    PlaceholderAlignment_BASELINE_instance = new PlaceholderAlignment('BASELINE', 0);
    PlaceholderAlignment_ABOVE_BASELINE_instance = new PlaceholderAlignment('ABOVE_BASELINE', 1);
    PlaceholderAlignment_BELOW_BASELINE_instance = new PlaceholderAlignment('BELOW_BASELINE', 2);
    PlaceholderAlignment_TOP_instance = new PlaceholderAlignment('TOP', 3);
    PlaceholderAlignment_BOTTOM_instance = new PlaceholderAlignment('BOTTOM', 4);
    PlaceholderAlignment_MIDDLE_instance = new PlaceholderAlignment('MIDDLE', 5);
  }
  function PlaceholderAlignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PlaceholderAlignment_ABOVE_BASELINE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_ABOVE_BASELINE_instance;
  }
  function PlaceholderAlignment_TOP_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_TOP_instance;
  }
  function PlaceholderAlignment_BOTTOM_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_BOTTOM_instance;
  }
  function PlaceholderAlignment_MIDDLE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_MIDDLE_instance;
  }
  function PlaceholderStyle(width, height, alignment, baselineMode, baseline) {
    this.y3w_1 = width;
    this.z3w_1 = height;
    this.a3x_1 = alignment;
    this.b3x_1 = baselineMode;
    this.c3x_1 = baseline;
  }
  protoOf(PlaceholderStyle).d3x = function () {
    return this.a3x_1;
  };
  protoOf(PlaceholderStyle).e3x = function () {
    return this.b3x_1;
  };
  protoOf(PlaceholderStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof PlaceholderStyle))
      return false;
    if (!(compareTo(this.y3w_1, other.y3w_1) === 0))
      return false;
    if (!(compareTo(this.z3w_1, other.z3w_1) === 0))
      return false;
    if (!(compareTo(this.c3x_1, other.c3x_1) === 0))
      return false;
    if (!this.d3x().equals(other.d3x()))
      return false;
    return this.e3x().equals(other.e3x());
  };
  protoOf(PlaceholderStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.y3w_1) | 0;
    result = imul(result, PRIME) + toBits(this.z3w_1) | 0;
    result = imul(result, PRIME) + toBits(this.c3x_1) | 0;
    result = imul(result, PRIME) + this.d3x().hashCode() | 0;
    result = imul(result, PRIME) + this.e3x().hashCode() | 0;
    return result;
  };
  protoOf(PlaceholderStyle).toString = function () {
    return 'PlaceholderStyle(_width=' + this.y3w_1 + ', _height=' + this.z3w_1 + ', _alignment=' + this.d3x().toString() + ', _baselineMode=' + this.e3x().toString() + ', _baseline=' + this.c3x_1 + ')';
  };
  var RectHeightMode_TIGHT_instance;
  var RectHeightMode_MAX_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance;
  var RectHeightMode_STRUT_instance;
  var RectHeightMode_entriesInitialized;
  function RectHeightMode_initEntries() {
    if (RectHeightMode_entriesInitialized)
      return Unit_instance;
    RectHeightMode_entriesInitialized = true;
    RectHeightMode_TIGHT_instance = new RectHeightMode('TIGHT', 0);
    RectHeightMode_MAX_instance = new RectHeightMode('MAX', 1);
    RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance = new RectHeightMode('INCLUDE_LINE_SPACING_MIDDLE', 2);
    RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance = new RectHeightMode('INCLUDE_LINE_SPACING_TOP', 3);
    RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance = new RectHeightMode('INCLUDE_LINE_SPACING_BOTTOM', 4);
    RectHeightMode_STRUT_instance = new RectHeightMode('STRUT', 5);
  }
  function RectHeightMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RectHeightMode_MAX_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_MAX_instance;
  }
  function RectHeightMode_STRUT_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_STRUT_instance;
  }
  var RectWidthMode_TIGHT_instance;
  var RectWidthMode_MAX_instance;
  var RectWidthMode_entriesInitialized;
  function RectWidthMode_initEntries() {
    if (RectWidthMode_entriesInitialized)
      return Unit_instance;
    RectWidthMode_entriesInitialized = true;
    RectWidthMode_TIGHT_instance = new RectWidthMode('TIGHT', 0);
    RectWidthMode_MAX_instance = new RectWidthMode('MAX', 1);
  }
  function RectWidthMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RectWidthMode_TIGHT_getInstance() {
    RectWidthMode_initEntries();
    return RectWidthMode_TIGHT_instance;
  }
  function Companion_39() {
  }
  var Companion_instance_39;
  function Companion_getInstance_39() {
    return Companion_instance_39;
  }
  function Shadow(color, offsetX, offsetY, blurSigma) {
    this.s3x_1 = color;
    this.t3x_1 = offsetX;
    this.u3x_1 = offsetY;
    this.v3x_1 = blurSigma;
  }
  protoOf(Shadow).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!(this.s3x_1 === other.s3x_1))
      return false;
    if (!(compareTo(this.t3x_1, other.t3x_1) === 0))
      return false;
    if (!(compareTo(this.u3x_1, other.u3x_1) === 0))
      return false;
    return compareTo(this.v3x_1, other.v3x_1) === 0;
  };
  protoOf(Shadow).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.s3x_1 | 0;
    result = imul(result, PRIME) + toBits(this.t3x_1) | 0;
    result = imul(result, PRIME) + toBits(this.u3x_1) | 0;
    var blurSigma = toBits_0(this.v3x_1);
    result = imul(result, PRIME) + blurSigma.j3(32).m3(blurSigma).f1() | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(_color=' + this.s3x_1 + ', _offsetX=' + this.t3x_1 + ', _offsetY=' + this.u3x_1 + ', _blurSigma=' + this.v3x_1 + ')';
  };
  function TextBox_init_$Init$(l, t, r, b, direction, $this) {
    TextBox.call($this, Companion_instance_28.x3s(l, t, r, b), values_6()[direction]);
    return $this;
  }
  function TextBox_init_$Create$(l, t, r, b, direction) {
    return TextBox_init_$Init$(l, t, r, b, direction, objectCreate(protoOf(TextBox)));
  }
  function Companion_40() {
  }
  protoOf(Companion_40).k3v = function (array, index) {
    var rect = new Float32Array(4);
    var direction = new Int32Array(1);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.paragraph.Companion.getArrayElement.<anonymous>' call
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        var rectPtr = $this$interopScope.s3l(rect);
        var directionPtr = $this$interopScope.x3k(direction);
        org_jetbrains_skia_paragraph_TextBox__1nGetArrayElement(array, index, rectPtr, directionPtr);
        $this$interopScope.c3p(rectPtr, rect);
        $this$interopScope.y3k(directionPtr, direction);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
        }
      }
    }
    return TextBox_init_$Create$(rect[0], rect[1], rect[2], rect[3], direction[0]);
  };
  protoOf(Companion_40).i3v = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nGetArraySize(array);
  };
  protoOf(Companion_40).j3v = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nDisposeArray(array);
  };
  var Companion_instance_40;
  function Companion_getInstance_40() {
    return Companion_instance_40;
  }
  function TextBox(rect, direction) {
    this.w3x_1 = rect;
    this.x3x_1 = direction;
  }
  protoOf(TextBox).y3x = function () {
    return this.x3x_1;
  };
  protoOf(TextBox).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof TextBox))
      return false;
    if (!this.w3x_1.equals(other.w3x_1))
      return false;
    return this.y3x().equals(other.y3x());
  };
  protoOf(TextBox).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.w3x_1.hashCode() | 0;
    result = imul(result, PRIME) + this.y3x().hashCode() | 0;
    return result;
  };
  protoOf(TextBox).toString = function () {
    return 'TextBox(_rect=' + this.w3x_1.toString() + ', _direction=' + this.y3x().toString() + ')';
  };
  function TextIndent(firstLine, restLine) {
    firstLine = firstLine === VOID ? 0.0 : firstLine;
    restLine = restLine === VOID ? 0.0 : restLine;
    this.q3x_1 = firstLine;
    this.r3x_1 = restLine;
  }
  protoOf(TextIndent).toString = function () {
    return 'TextIndent(firstLine=' + this.q3x_1 + ', restLine=' + this.r3x_1 + ')';
  };
  protoOf(TextIndent).hashCode = function () {
    var result = getNumberHashCode(this.q3x_1);
    result = imul(result, 31) + getNumberHashCode(this.r3x_1) | 0;
    return result;
  };
  protoOf(TextIndent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent))
      return false;
    var tmp0_other_with_cast = other instanceof TextIndent ? other : THROW_CCE();
    if (!equals(this.q3x_1, tmp0_other_with_cast.q3x_1))
      return false;
    if (!equals(this.r3x_1, tmp0_other_with_cast.r3x_1))
      return false;
    return true;
  };
  function Companion_41() {
    Companion_instance_41 = this;
    Companion_instance_44.b3j();
  }
  var Companion_instance_41;
  function Companion_getInstance_41() {
    if (Companion_instance_41 == null)
      new Companion_41();
    return Companion_instance_41;
  }
  function TextStyle_init_$Init$($this) {
    TextStyle.call($this, org_jetbrains_skia_paragraph_TextStyle__1nMake());
    Stats_instance.v3i();
    return $this;
  }
  function TextStyle_init_$Create$() {
    return TextStyle_init_$Init$(objectCreate(protoOf(TextStyle)));
  }
  function _FinalizerHolder_15() {
    _FinalizerHolder_instance_15 = this;
    this.z3x_1 = org_jetbrains_skia_paragraph_TextStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_15;
  function _FinalizerHolder_getInstance_15() {
    if (_FinalizerHolder_instance_15 == null)
      new _FinalizerHolder_15();
    return _FinalizerHolder_instance_15;
  }
  function TextStyle$_get_fontMetrics_$lambda_9osnwy(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_paragraph_TextStyle__1nGetFontMetrics(this$0.y3i_1, it);
      return Unit_instance;
    };
  }
  function TextStyle(ptr) {
    Companion_getInstance_41();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_15().z3x_1);
  }
  protoOf(TextStyle).z3i = function (other) {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = org_jetbrains_skia_paragraph_TextStyle__1nEquals(this.y3i_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(TextStyle).q3q = function (value) {
    this.c3y(value);
  };
  protoOf(TextStyle).c3y = function (color) {
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_TextStyle__1nSetColor(this.y3i_1, color);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).d3y = function (value) {
    this.e3y(value);
  };
  protoOf(TextStyle).e3y = function (paint) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_TextStyle__1nSetForeground(this.y3i_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(TextStyle).f3y = function (value) {
    this.g3y(value);
  };
  protoOf(TextStyle).g3y = function (paint) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_TextStyle__1nSetBackground(this.y3i_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(TextStyle).h3y = function (value) {
    this.i3y(value);
  };
  protoOf(TextStyle).i3y = function (d) {
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_TextStyle__1nSetDecorationStyle(this.y3i_1, d.q3u_1, d.r3u_1, d.s3u_1, d.t3u_1, d.u3u_1, d.v3u_1.s2_1, d.w3u_1);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).j3y = function (value) {
    this.k3y(value);
  };
  protoOf(TextStyle).n3t = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      tmp = FontStyle_init_$Create$_0(org_jetbrains_skia_paragraph_TextStyle__1nGetFontStyle(this.y3i_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(TextStyle).k3y = function (s) {
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_TextStyle__1nSetFontStyle(this.y3i_1, s.j3p_1);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).l3y = function (s) {
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_TextStyle__1nAddShadow(this.y3i_1, s.s3x_1, s.t3x_1, s.u3x_1, s.v3x_1);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).m3y = function (f) {
    try {
      Stats_instance.v3i();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.TextStyle.addFontFeature.<anonymous>' call
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          org_jetbrains_skia_paragraph_TextStyle__1nAddFontFeature(this.y3i_1, $this$interopScope.b3k(f.k3o()), f.h3o_1);
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).n3y = function (FontFeatures) {
    var inductionVariable = 0;
    var last = FontFeatures.length;
    while (inductionVariable < last) {
      var s = FontFeatures[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.m3y(s);
    }
    return this;
  };
  protoOf(TextStyle).o3y = function (value) {
    this.p3y(value);
  };
  protoOf(TextStyle).p3y = function (size) {
    // Inline function 'kotlin.check' call
    if (!!isNaN_0(size)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_TextStyle__1nSetFontSize(this.y3i_1, size);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).q3y = function (value) {
    this.r3y(value);
  };
  protoOf(TextStyle).r3y = function (families) {
    Stats_instance.v3i();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
        // Inline function 'org.jetbrains.skia.paragraph.TextStyle.setFontFamilies.<anonymous>' call
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
        var tmp = this.y3i_1;
        var tmp_0 = $this$interopScope.e3v(families);
        var tmp1_elvis_lhs = families == null ? null : families.length;
        org_jetbrains_skia_paragraph_TextStyle__1nSetFontFamilies(tmp, tmp_0, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
        break $l$block;
      }finally {
        var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
        access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
        }
      }
    }
    return this;
  };
  protoOf(TextStyle).s3y = function (value) {
    this.t3y(value);
  };
  protoOf(TextStyle).t3y = function (height) {
    if (height == null) {
      try {
        Stats_instance.v3i();
        org_jetbrains_skia_paragraph_TextStyle__1nSetHeight(this.y3i_1, false, 0.0);
      }finally {
        reachabilityBarrier(this);
      }
    } else {
      // Inline function 'kotlin.check' call
      if (!!isNaN_0(height)) {
        throw IllegalStateException_init_$Create$('Check failed.');
      }
      try {
        Stats_instance.v3i();
        org_jetbrains_skia_paragraph_TextStyle__1nSetHeight(this.y3i_1, true, height);
      }finally {
        reachabilityBarrier(this);
      }
    }
    return this;
  };
  protoOf(TextStyle).u3y = function (value) {
    this.v3y(value);
  };
  protoOf(TextStyle).v3y = function (letterSpacing) {
    // Inline function 'kotlin.check' call
    if (!!isNaN_0(letterSpacing)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_TextStyle__1nSetLetterSpacing(this.y3i_1, letterSpacing);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).w3y = function (value) {
    this.x3y(value);
  };
  protoOf(TextStyle).x3y = function (baselineShift) {
    // Inline function 'kotlin.check' call
    if (!!isNaN_0(baselineShift)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineShift(this.y3i_1, baselineShift);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).y3y = function (value) {
    this.z3y(value);
  };
  protoOf(TextStyle).z3y = function (typeface) {
    var tmp;
    try {
      Stats_instance.v3i();
      org_jetbrains_skia_paragraph_TextStyle__1nSetTypeface(this.y3i_1, getPtr(typeface));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(typeface);
    }
    return tmp;
  };
  protoOf(TextStyle).a3z = function () {
    var tmp;
    try {
      Stats_instance.v3i();
      var tmp_0 = Companion_instance_11;
      tmp = fromInteropPointer(tmp_0, TextStyle$_get_fontMetrics_$lambda_9osnwy(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function TypefaceFontProvider_init_$Init$($this) {
    TypefaceFontProvider.call($this, org_jetbrains_skia_paragraph_TypefaceFontProvider__1nMake());
    return $this;
  }
  function TypefaceFontProvider_init_$Create$() {
    return TypefaceFontProvider_init_$Init$(objectCreate(protoOf(TypefaceFontProvider)));
  }
  function Companion_42() {
    Companion_instance_42 = this;
    Companion_instance_44.b3j();
  }
  var Companion_instance_42;
  function Companion_getInstance_42() {
    if (Companion_instance_42 == null)
      new Companion_42();
    return Companion_instance_42;
  }
  function TypefaceFontProvider(ptr) {
    Companion_getInstance_42();
    FontMgr_init_$Init$(ptr, this);
    Stats_instance.v3i();
  }
  function TypefaceFontProviderWithFallback_init_$Init$($this) {
    TypefaceFontProviderWithFallback.call($this, org_jetbrains_skia_paragraph_TypefaceFontProviderWithFallback__1nMakeAsFallbackProvider());
    return $this;
  }
  function TypefaceFontProviderWithFallback_init_$Create$() {
    return TypefaceFontProviderWithFallback_init_$Init$(objectCreate(protoOf(TypefaceFontProviderWithFallback)));
  }
  function Companion_43() {
    Companion_instance_43 = this;
    Companion_instance_44.b3j();
  }
  var Companion_instance_43;
  function Companion_getInstance_43() {
    if (Companion_instance_43 == null)
      new Companion_43();
    return Companion_instance_43;
  }
  function TypefaceFontProviderWithFallback(ptr) {
    Companion_getInstance_43();
    TypefaceFontProvider.call(this, ptr);
    Stats_instance.v3i();
  }
  protoOf(TypefaceFontProviderWithFallback).d3z = function (typeface, alias) {
    var tmp;
    try {
      Stats_instance.v3i();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var tmp0 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp0 + 1 | 0);
          // Inline function 'org.jetbrains.skia.paragraph.TypefaceFontProviderWithFallback.registerTypeface.<anonymous>' call
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp();
          org_jetbrains_skia_paragraph_TypefaceFontProviderWithFallback__1nRegisterTypefaceForFallback(this.y3i_1, getPtr(typeface), $this$interopScope.b3k(alias));
          break $l$block;
        }finally {
          var tmp1 = access$_get_interopScopeCounter_$tNative_jsKt_s1v9du();
          access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(tmp1 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp().q1p();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(typeface);
    }
    return tmp;
  };
  var GraphicsApi_UNKNOWN_instance;
  var GraphicsApi_SOFTWARE_FAST_instance;
  var GraphicsApi_SOFTWARE_COMPAT_instance;
  var GraphicsApi_OPENGL_instance;
  var GraphicsApi_DIRECT3D_instance;
  var GraphicsApi_VULKAN_instance;
  var GraphicsApi_METAL_instance;
  var GraphicsApi_WEBGL_instance;
  var GraphicsApi_entriesInitialized;
  function GraphicsApi_initEntries() {
    if (GraphicsApi_entriesInitialized)
      return Unit_instance;
    GraphicsApi_entriesInitialized = true;
    GraphicsApi_UNKNOWN_instance = new GraphicsApi('UNKNOWN', 0);
    GraphicsApi_SOFTWARE_FAST_instance = new GraphicsApi('SOFTWARE_FAST', 1);
    GraphicsApi_SOFTWARE_COMPAT_instance = new GraphicsApi('SOFTWARE_COMPAT', 2);
    GraphicsApi_OPENGL_instance = new GraphicsApi('OPENGL', 3);
    GraphicsApi_DIRECT3D_instance = new GraphicsApi('DIRECT3D', 4);
    GraphicsApi_VULKAN_instance = new GraphicsApi('VULKAN', 5);
    GraphicsApi_METAL_instance = new GraphicsApi('METAL', 6);
    GraphicsApi_WEBGL_instance = new GraphicsApi('WEBGL', 7);
  }
  function GraphicsApi(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function GraphicsApi_WEBGL_getInstance() {
    GraphicsApi_initEntries();
    return GraphicsApi_WEBGL_instance;
  }
  var OS_Android_instance;
  var OS_Linux_instance;
  var OS_Windows_instance;
  var OS_MacOS_instance;
  var OS_Ios_instance;
  var OS_Tvos_instance;
  var OS_JS_instance;
  var OS_Unknown_instance;
  var OS_entriesInitialized;
  function OS_initEntries() {
    if (OS_entriesInitialized)
      return Unit_instance;
    OS_entriesInitialized = true;
    OS_Android_instance = new OS('Android', 0, 'android');
    OS_Linux_instance = new OS('Linux', 1, 'linux');
    OS_Windows_instance = new OS('Windows', 2, 'windows');
    OS_MacOS_instance = new OS('MacOS', 3, 'macos');
    OS_Ios_instance = new OS('Ios', 4, 'ios');
    OS_Tvos_instance = new OS('Tvos', 5, 'tvos');
    OS_JS_instance = new OS('JS', 6, 'js');
    OS_Unknown_instance = new OS('Unknown', 7, 'unknown');
  }
  function OS(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.g3z_1 = id;
  }
  var Arch_X64_instance;
  var Arch_Arm64_instance;
  var Arch_JS_instance;
  var Arch_WASM_instance;
  var Arch_Unknown_instance;
  var Arch_entriesInitialized;
  function Arch_initEntries() {
    if (Arch_entriesInitialized)
      return Unit_instance;
    Arch_entriesInitialized = true;
    Arch_X64_instance = new Arch('X64', 0, 'x64');
    Arch_Arm64_instance = new Arch('Arm64', 1, 'arm64');
    Arch_JS_instance = new Arch('JS', 2, 'js');
    Arch_WASM_instance = new Arch('WASM', 3, 'wasm');
    Arch_Unknown_instance = new Arch('Unknown', 4, 'unknown');
  }
  function Arch(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.j3z_1 = id;
  }
  function OS_Android_getInstance() {
    OS_initEntries();
    return OS_Android_instance;
  }
  function OS_Linux_getInstance() {
    OS_initEntries();
    return OS_Linux_instance;
  }
  function OS_Windows_getInstance() {
    OS_initEntries();
    return OS_Windows_instance;
  }
  function OS_MacOS_getInstance() {
    OS_initEntries();
    return OS_MacOS_instance;
  }
  function OS_Ios_getInstance() {
    OS_initEntries();
    return OS_Ios_instance;
  }
  function OS_Unknown_getInstance() {
    OS_initEntries();
    return OS_Unknown_instance;
  }
  function Arch_Unknown_getInstance() {
    Arch_initEntries();
    return Arch_Unknown_instance;
  }
  function ClipboardManager() {
  }
  function URIManager() {
  }
  function RenderException(message, cause) {
    message = message === VOID ? null : message;
    cause = cause === VOID ? null : cause;
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, RenderException);
  }
  var SystemTheme_DARK_instance;
  var SystemTheme_LIGHT_instance;
  var SystemTheme_UNKNOWN_instance;
  var SystemTheme_entriesInitialized;
  function SystemTheme_initEntries() {
    if (SystemTheme_entriesInitialized)
      return Unit_instance;
    SystemTheme_entriesInitialized = true;
    SystemTheme_DARK_instance = new SystemTheme('DARK', 0);
    SystemTheme_LIGHT_instance = new SystemTheme('LIGHT', 1);
    SystemTheme_UNKNOWN_instance = new SystemTheme('UNKNOWN', 2);
  }
  function SystemTheme(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SystemTheme_UNKNOWN_getInstance() {
    SystemTheme_initEntries();
    return SystemTheme_UNKNOWN_instance;
  }
  function get_registry() {
    _init_properties_Managed_js_kt__4ok5rc();
    return registry;
  }
  var registry;
  function unregister(managed) {
    _init_properties_Managed_js_kt__4ok5rc();
    get_registry().unregister(managed);
  }
  function register(managed, thunk) {
    _init_properties_Managed_js_kt__4ok5rc();
    get_registry().register(managed, thunk);
  }
  function registry$lambda(it) {
    _init_properties_Managed_js_kt__4ok5rc();
    var thunk = it instanceof FinalizationThunk ? it : THROW_CCE();
    thunk.m3z();
    return Unit_instance;
  }
  var properties_initialized_Managed_js_kt_llxy4m;
  function _init_properties_Managed_js_kt__4ok5rc() {
    if (!properties_initialized_Managed_js_kt_llxy4m) {
      properties_initialized_Managed_js_kt_llxy4m = true;
      registry = new FinalizationRegistry(registry$lambda);
    }
  }
  function toInterop($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(array.length);
      $this.z3j_1.e(data);
      if (copyArrayToWasm) {
        toWasm(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_0($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 2));
      $this.z3j_1.e(data);
      if (copyArrayToWasm) {
        toWasm_0(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_1($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 4));
      $this.z3j_1.e(data);
      if (copyArrayToWasm) {
        toWasm_1(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_2($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 4));
      $this.z3j_1.e(data);
      if (copyArrayToWasm) {
        toWasm_2(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_3($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = _malloc(imul(array.length, 8));
      $this.z3j_1.e(data);
      if (copyArrayToWasm) {
        toWasm_3(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_4($this, array, copyArrayToWasm) {
    var tmp;
    if (!(array == null) && array.n() > 0) {
      var data = _malloc(imul(array.n(), 4));
      $this.z3j_1.e(data);
      if (copyArrayToWasm) {
        toWasm_1(data, array.a3q_1);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function InteropScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.z3j_1 = ArrayList_init_$Create$_0();
    this.a3k_1 = false;
  }
  protoOf(InteropScope).b3k = function (string) {
    var tmp;
    if (!(string == null)) {
      tmp = this.c3n(convertToZeroTerminatedString(string));
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(InteropScope).c3n = function (array) {
    return toInterop(this, array, true);
  };
  protoOf(InteropScope).c3q = function (array) {
    return toInterop(this, array, false);
  };
  protoOf(InteropScope).q3k = function (array) {
    return toInterop_0(this, array, true);
  };
  protoOf(InteropScope).y3k = function (_this__u8e3s4, result) {
    fromWasm(_this__u8e3s4, result);
  };
  protoOf(InteropScope).x3k = function (array) {
    return toInterop_1(this, array, true);
  };
  protoOf(InteropScope).t3p = function (array) {
    return toInterop_1(this, array, false);
  };
  protoOf(InteropScope).c3p = function (_this__u8e3s4, result) {
    fromWasm_0(_this__u8e3s4, result);
  };
  protoOf(InteropScope).s3l = function (array) {
    return toInterop_2(this, array, true);
  };
  protoOf(InteropScope).b3p = function (array) {
    return toInterop_2(this, array, false);
  };
  protoOf(InteropScope).m3v = function (_this__u8e3s4, result) {
    fromWasm_1(_this__u8e3s4, result);
  };
  protoOf(InteropScope).l3v = function (array) {
    return toInterop_3(this, array, false);
  };
  protoOf(InteropScope).d3q = function (_this__u8e3s4, result) {
    fromWasm_2(_this__u8e3s4, result);
  };
  protoOf(InteropScope).y3p = function (array) {
    return toInterop_4(this, array, false);
  };
  protoOf(InteropScope).z3p = function (_this__u8e3s4, result) {
    return fromWasm(_this__u8e3s4, result.a3q_1);
  };
  protoOf(InteropScope).e3v = function (stringArray) {
    var tmp;
    var tmp_0;
    if (!(stringArray == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(stringArray.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(stringArray.length);
      var inductionVariable = 0;
      var last = stringArray.length;
      while (inductionVariable < last) {
        var item = stringArray[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.skia.impl.InteropScope.toInterop.<anonymous>' call
        var tmp$ret$2 = this.b3k(item);
        destination.e(tmp$ret$2);
      }
      var ptrs = toIntArray(destination);
      tmp = this.x3k(ptrs);
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(InteropScope).q1p = function () {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.z3j_1.j();
    while (_iterator__ex2g4s.k()) {
      var element = _iterator__ex2g4s.l();
      // Inline function 'org.jetbrains.skia.impl.InteropScope.release.<anonymous>' call
      _free(element);
    }
    this.z3j_1.f2();
    // Inline function 'org.jetbrains.skia.impl.InteropScope.releaseCallbacks' call
    if (this.a3k_1) {
      _releaseLocalCallbackScope();
      this.a3k_1 = false;
    }
  };
  function toWasm(dest, src) {
    return HEAPU8.set(src, dest);
  }
  function toWasm_0(dest, src) {
    return HEAPU16.set(src, dest / 2 | 0);
  }
  function fromWasm(src, result) {
    var startIndex = src / 4 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPU32.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_1(dest, src) {
    return HEAPU32.set(src, dest / 4 | 0);
  }
  function fromWasm_0(src, result) {
    var startIndex = src / 4 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPF32.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_2(dest, src) {
    return HEAPF32.set(src, dest / 4 | 0);
  }
  function fromWasm_1(src, result) {
    var startIndex = src / 8 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPF64.subarray(startIndex, startIndex + result.length | 0));
  }
  function toWasm_3(dest, src) {
    return HEAPF64.set(src, dest / 8 | 0);
  }
  function fromWasm_2(src, result) {
    // Inline function 'kotlin.js.asDynamic' call
    result.set(HEAPU8.subarray(src, src + result.length | 0));
  }
  function getNavigatorInfo() {
    var tmp = navigator.userAgentData ? navigator.userAgentData.platform : navigator.platform;
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  }
  function makeGLContextCurrent(contextPointer) {
    GL.makeContextCurrent(contextPointer);
  }
  function createWebGLContext(canvas, attr) {
    attr = attr === VOID ? null : attr;
    var contextAttributes = new createWebGLContext$contextAttributes$1(attr);
    return GL.createContext(canvas, asJsObject(contextAttributes));
  }
  function asJsObject(_this__u8e3s4) {
    var jsObject = {};
    if (_this__u8e3s4.alpha == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.skiko.wasm.asJsObject.<anonymous>' call
      jsObject.alpha = _this__u8e3s4.alpha;
    }
    if (_this__u8e3s4.depth == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.skiko.wasm.asJsObject.<anonymous>' call
      jsObject.depth = _this__u8e3s4.depth;
    }
    if (_this__u8e3s4.stencil == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.skiko.wasm.asJsObject.<anonymous>' call
      jsObject.stencil = _this__u8e3s4.stencil;
    }
    if (_this__u8e3s4.antialias == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.skiko.wasm.asJsObject.<anonymous>' call
      jsObject.antialias = _this__u8e3s4.antialias;
    }
    if (_this__u8e3s4.premultipliedAlpha == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.skiko.wasm.asJsObject.<anonymous>' call
      jsObject.premultipliedAlpha = _this__u8e3s4.premultipliedAlpha;
    }
    if (_this__u8e3s4.preserveDrawingBuffer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.skiko.wasm.asJsObject.<anonymous>' call
      jsObject.preserveDrawingBuffer = _this__u8e3s4.preserveDrawingBuffer;
    }
    if (_this__u8e3s4.preferLowPowerToHighPerformance == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.skiko.wasm.asJsObject.<anonymous>' call
      jsObject.preferLowPowerToHighPerformance = _this__u8e3s4.preferLowPowerToHighPerformance;
    }
    if (_this__u8e3s4.failIfMajorPerformanceCaveat == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.skiko.wasm.asJsObject.<anonymous>' call
      jsObject.failIfMajorPerformanceCaveat = _this__u8e3s4.failIfMajorPerformanceCaveat;
    }
    if (_this__u8e3s4.enableExtensionsByDefault == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.skiko.wasm.asJsObject.<anonymous>' call
      jsObject.enableExtensionsByDefault = _this__u8e3s4.enableExtensionsByDefault;
    }
    if (_this__u8e3s4.explicitSwapControl == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.skiko.wasm.asJsObject.<anonymous>' call
      jsObject.explicitSwapControl = _this__u8e3s4.explicitSwapControl;
    }
    if (_this__u8e3s4.renderViaOffscreenBackBuffer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.skiko.wasm.asJsObject.<anonymous>' call
      jsObject.renderViaOffscreenBackBuffer = _this__u8e3s4.renderViaOffscreenBackBuffer;
    }
    if (_this__u8e3s4.majorVersion == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'org.jetbrains.skiko.wasm.asJsObject.<anonymous>' call
      jsObject.majorVersion = _this__u8e3s4.majorVersion;
    }
    return jsObject;
  }
  function createWebGLContext$contextAttributes$1($attr) {
    var tmp = this;
    var tmp1_elvis_lhs = $attr == null ? null : $attr.alpha;
    tmp.n3z_1 = tmp1_elvis_lhs == null ? 1 : tmp1_elvis_lhs;
    var tmp_0 = this;
    var tmp1_elvis_lhs_0 = $attr == null ? null : $attr.depth;
    tmp_0.o3z_1 = tmp1_elvis_lhs_0 == null ? 1 : tmp1_elvis_lhs_0;
    var tmp_1 = this;
    var tmp1_elvis_lhs_1 = $attr == null ? null : $attr.stencil;
    tmp_1.p3z_1 = tmp1_elvis_lhs_1 == null ? 8 : tmp1_elvis_lhs_1;
    var tmp_2 = this;
    var tmp1_elvis_lhs_2 = $attr == null ? null : $attr.antialias;
    tmp_2.q3z_1 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    var tmp_3 = this;
    var tmp1_elvis_lhs_3 = $attr == null ? null : $attr.premultipliedAlpha;
    tmp_3.r3z_1 = tmp1_elvis_lhs_3 == null ? 1 : tmp1_elvis_lhs_3;
    var tmp_4 = this;
    var tmp1_elvis_lhs_4 = $attr == null ? null : $attr.preserveDrawingBuffer;
    tmp_4.s3z_1 = tmp1_elvis_lhs_4 == null ? 0 : tmp1_elvis_lhs_4;
    var tmp_5 = this;
    var tmp1_elvis_lhs_5 = $attr == null ? null : $attr.preferLowPowerToHighPerformance;
    tmp_5.t3z_1 = tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5;
    var tmp_6 = this;
    var tmp1_elvis_lhs_6 = $attr == null ? null : $attr.failIfMajorPerformanceCaveat;
    tmp_6.u3z_1 = tmp1_elvis_lhs_6 == null ? 0 : tmp1_elvis_lhs_6;
    var tmp_7 = this;
    var tmp1_elvis_lhs_7 = $attr == null ? null : $attr.enableExtensionsByDefault;
    tmp_7.v3z_1 = tmp1_elvis_lhs_7 == null ? 1 : tmp1_elvis_lhs_7;
    var tmp_8 = this;
    var tmp1_elvis_lhs_8 = $attr == null ? null : $attr.explicitSwapControl;
    tmp_8.w3z_1 = tmp1_elvis_lhs_8 == null ? 0 : tmp1_elvis_lhs_8;
    var tmp_9 = this;
    var tmp1_elvis_lhs_9 = $attr == null ? null : $attr.renderViaOffscreenBackBuffer;
    tmp_9.x3z_1 = tmp1_elvis_lhs_9 == null ? 0 : tmp1_elvis_lhs_9;
    var tmp_10 = this;
    var tmp1_elvis_lhs_10 = $attr == null ? null : $attr.majorVersion;
    tmp_10.y3z_1 = tmp1_elvis_lhs_10 == null ? 2 : tmp1_elvis_lhs_10;
  }
  protoOf(createWebGLContext$contextAttributes$1).z3z = function () {
    return this.n3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).a40 = function () {
    return this.o3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).b40 = function () {
    return this.p3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).c40 = function () {
    return this.q3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).d40 = function () {
    return this.r3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).e40 = function () {
    return this.s3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).f40 = function () {
    return this.t3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).g40 = function () {
    return this.u3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).h40 = function () {
    return this.v3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).i40 = function () {
    return this.w3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).j40 = function () {
    return this.x3z_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).k40 = function () {
    return this.y3z_1;
  };
  var LANG$delegate;
  function Pattern(regex) {
    this.l40_1 = Regex_init_$Create$(regex);
  }
  function compilePattern(regex) {
    _init_properties_Actuals_js_kt__v403ki();
    return new Pattern(regex);
  }
  function commonSynchronized(lock, block) {
    _init_properties_Actuals_js_kt__v403ki();
    block();
  }
  function LANG$delegate$lambda() {
    _init_properties_Actuals_js_kt__v403ki();
    var lang = window.navigator.language;
    var tmp;
    var tmp_0;
    if (lang == null) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      tmp_0 = charSequenceLength(lang) === 0;
    }
    if (tmp_0) {
      tmp = 'en-US';
    } else {
      tmp = lang;
    }
    return tmp;
  }
  var properties_initialized_Actuals_js_kt_fw1oy4;
  function _init_properties_Actuals_js_kt__v403ki() {
    if (!properties_initialized_Actuals_js_kt_fw1oy4) {
      properties_initialized_Actuals_js_kt_fw1oy4 = true;
      LANG$delegate = lazy(LANG$delegate$lambda);
    }
  }
  function Companion_44() {
  }
  protoOf(Companion_44).b3j = function () {
  };
  var Companion_instance_44;
  function Companion_getInstance_44() {
    return Companion_instance_44;
  }
  function FinalizationThunk(finalizer, obj) {
    this.k3z_1 = finalizer;
    this.l3z_1 = obj;
  }
  protoOf(FinalizationThunk).m3z = function () {
    if (!(this.l3z_1 === 0)) {
      org_jetbrains_skia_impl_Managed__invokeFinalizer(this.k3z_1, this.l3z_1);
    }
    this.l3z_1 = 0;
  };
  function Managed(ptr, finalizer, managed) {
    managed = managed === VOID ? true : managed;
    Native.call(this, ptr);
    this.x3i_1 = null;
    if (managed) {
      // Inline function 'kotlin.require' call
      if (!!(ptr === 0)) {
        // Inline function 'org.jetbrains.skia.impl.Managed.<anonymous>' call
        var message = 'Managed ptr is 0';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!!(finalizer === 0)) {
        // Inline function 'org.jetbrains.skia.impl.Managed.<anonymous>' call
        var message_0 = 'Managed finalizer is 0';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var thunk = new FinalizationThunk(finalizer, ptr);
      register(this, thunk);
      this.x3i_1 = thunk;
    }
  }
  protoOf(Managed).u1x = function () {
    if (Companion_instance_46.d3j() === this.y3i_1)
      throw RuntimeException_init_$Create$('Object already closed: ' + getKClassFromExpression(this).xa() + ', _ptr=' + this.y3i_1);
    else if (null == this.x3i_1)
      throw RuntimeException_init_$Create$("Object is not managed, can't close(): " + getKClassFromExpression(this).xa() + ', _ptr=' + this.y3i_1);
    else {
      unregister(this);
      ensureNotNull(this.x3i_1).m3z();
      this.x3i_1 = null;
      this.y3i_1 = 0;
    }
  };
  function get_INTEROP_SCOPE() {
    _init_properties_Native_js_kt__80argu();
    return INTEROP_SCOPE;
  }
  var INTEROP_SCOPE;
  function set_interopScopeCounter(_set____db54di) {
    _init_properties_Native_js_kt__80argu();
    interopScopeCounter = _set____db54di;
  }
  function get_interopScopeCounter() {
    _init_properties_Native_js_kt__80argu();
    return interopScopeCounter;
  }
  var interopScopeCounter;
  function Companion_45() {
  }
  var Companion_instance_45;
  function Companion_getInstance_45() {
    return Companion_instance_45;
  }
  function NativePointerArray(size) {
    this.a3q_1 = new Int32Array(size);
  }
  protoOf(NativePointerArray).p = function (index) {
    return this.a3q_1[index];
  };
  protoOf(NativePointerArray).n = function () {
    return this.a3q_1.length;
  };
  function Companion_46() {
  }
  protoOf(Companion_46).d3j = function () {
    return 0;
  };
  var Companion_instance_46;
  function Companion_getInstance_46() {
    return Companion_instance_46;
  }
  function Native(ptr) {
    if (ptr === Companion_instance_46.d3j())
      throw RuntimeException_init_$Create$("Can't wrap nullptr");
    this.y3i_1 = ptr;
  }
  protoOf(Native).equals = function (other) {
    if (this === other)
      return true;
    if (null == other)
      return false;
    if (!(other instanceof Native))
      return false;
    return this.y3i_1 === other.y3i_1 ? true : this.z3i(other);
  };
  protoOf(Native).hashCode = function () {
    return this.y3i_1;
  };
  protoOf(Native).z3i = function (other) {
    return false;
  };
  protoOf(Native).toString = function () {
    return plus(getKClassFromExpression(this).xa(), '(_ptr=0x') + toString_1(this.y3i_1, 16) + ')';
  };
  function reachabilityBarrier(obj) {
    _init_properties_Native_js_kt__80argu();
  }
  function access$_get_INTEROP_SCOPE_$tNative_jsKt_7a6ufp() {
    return get_INTEROP_SCOPE();
  }
  function access$_get_interopScopeCounter_$tNative_jsKt_s1v9du() {
    return get_interopScopeCounter();
  }
  function access$_set_interopScopeCounter_$tNative_jsKt_xmz0om(_set____db54di) {
    return set_interopScopeCounter(_set____db54di);
  }
  var properties_initialized_Native_js_kt_fdhhkg;
  function _init_properties_Native_js_kt__80argu() {
    if (!properties_initialized_Native_js_kt_fdhhkg) {
      properties_initialized_Native_js_kt_fdhhkg = true;
      INTEROP_SCOPE = new InteropScope();
      interopScopeCounter = 0;
    }
  }
  function RefCnt_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_16().m40_1, true);
    RefCnt.call($this);
    return $this;
  }
  function RefCnt_init_$Init$_0(ptr, allowClose, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_16().m40_1, allowClose);
    RefCnt.call($this);
    return $this;
  }
  protoOf(RefCnt).o3m = function () {
    Stats_instance.v3i();
    return org_jetbrains_skia_impl_RefCnt__getRefCount(this.y3i_1);
  };
  protoOf(RefCnt).toString = function () {
    var s = protoOf(Managed).toString.call(this);
    // Inline function 'kotlin.text.substring' call
    var endIndex = s.length - 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    return s.substring(0, endIndex) + ', refCount=' + this.o3m() + ')';
  };
  function RefCnt() {
  }
  function _FinalizerHolder_16() {
    _FinalizerHolder_instance_16 = this;
    this.m40_1 = org_jetbrains_skia_impl_RefCnt__getFinalizer();
  }
  var _FinalizerHolder_instance_16;
  function _FinalizerHolder_getInstance_16() {
    if (_FinalizerHolder_instance_16 == null)
      new _FinalizerHolder_16();
    return _FinalizerHolder_instance_16;
  }
  function Stats() {
  }
  protoOf(Stats).v3i = function () {
  };
  var Stats_instance;
  function Stats_getInstance() {
    return Stats_instance;
  }
  function currentNanoTime() {
    return numberToLong(window.performance.now() * 1000000);
  }
  function loadOpenGLLibrary() {
  }
  function disposeCanvas($this) {
    var tmp0_safe_receiver = $this.r40_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.u1x();
    }
    $this.r40_1 = null;
    var tmp1_safe_receiver = $this.s40_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.u1x();
    }
    $this.s40_1 = null;
  }
  function CanvasRenderer$needRedraw$lambda(this$0) {
    return function (timestamp) {
      this$0.u40_1 = false;
      makeGLContextCurrent(this$0.n40_1);
      var tmp0_safe_receiver = this$0.t40_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.y36(-1);
      var tmp1_safe_receiver = this$0.t40_1;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver.z3l();
      this$0.v40(timestamp);
      var tmp2_safe_receiver = this$0.r40_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.k3t();
      }
      this$0.q40_1.l3n();
      return Unit_instance;
    };
  }
  function CanvasRenderer(contextPointer, width, height) {
    this.n40_1 = contextPointer;
    this.o40_1 = width;
    this.p40_1 = height;
    this.r40_1 = null;
    this.s40_1 = null;
    this.t40_1 = null;
    makeGLContextCurrent(this.n40_1);
    this.q40_1 = Companion_getInstance_8().i3n();
    this.w40();
    this.u40_1 = false;
  }
  protoOf(CanvasRenderer).w40 = function () {
    disposeCanvas(this);
    this.s40_1 = Companion_getInstance().c3j(this.o40_1, this.p40_1, 1, 8, 0, 32856);
    var tmp = this;
    var tmp0_elvis_lhs = Companion_getInstance_30().d3t(this.q40_1, ensureNotNull(this.s40_1), SurfaceOrigin_BOTTOM_LEFT_getInstance(), SurfaceColorFormat_RGBA_8888_getInstance(), Companion_getInstance_5().u3m_1, new SurfaceProps());
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw new RenderException('Cannot create surface');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.r40_1 = tmp_0;
    this.t40_1 = ensureNotNull(this.r40_1).j3t();
  };
  protoOf(CanvasRenderer).x40 = function () {
    if (this.u40_1) {
      return Unit_instance;
    }
    this.u40_1 = true;
    var tmp = window;
    tmp.requestAnimationFrame(CanvasRenderer$needRedraw$lambda(this));
  };
  function get_hostOs() {
    _init_properties_OsArch_js_kt__jkqwph();
    return hostOs;
  }
  var hostOs;
  function get_hostArch() {
    _init_properties_OsArch_js_kt__jkqwph();
    return hostArch;
  }
  var hostArch;
  var hostId$delegate;
  function detectHostOs() {
    _init_properties_OsArch_js_kt__jkqwph();
    // Inline function 'kotlin.takeIf' call
    var this_0 = getNavigatorInfo();
    var tmp;
    // Inline function 'org.jetbrains.skiko.detectHostOs.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var platformInfo = tmp0_elvis_lhs == null ? window.navigator.userAgent : tmp0_elvis_lhs;
    return contains(platformInfo, 'Android', true) ? OS_Android_getInstance() : contains(platformInfo, 'iPhone', true) ? OS_Ios_getInstance() : contains(platformInfo, 'iOS', true) ? OS_Ios_getInstance() : contains(platformInfo, 'iPad', true) ? OS_Ios_getInstance() : contains(platformInfo, 'Linux', true) ? OS_Linux_getInstance() : contains(platformInfo, 'Mac', true) ? OS_MacOS_getInstance() : contains(platformInfo, 'Win', true) ? OS_Windows_getInstance() : OS_Unknown_getInstance();
  }
  function hostId$delegate$lambda() {
    _init_properties_OsArch_js_kt__jkqwph();
    return get_hostOs().g3z_1 + '-' + get_hostArch().j3z_1;
  }
  var properties_initialized_OsArch_js_kt_ik094d;
  function _init_properties_OsArch_js_kt__jkqwph() {
    if (!properties_initialized_OsArch_js_kt_ik094d) {
      properties_initialized_OsArch_js_kt_ik094d = true;
      hostOs = detectHostOs();
      hostArch = Arch_Unknown_getInstance();
      hostId$delegate = lazy(hostId$delegate$lambda);
    }
  }
  function attachTo($this, htmlCanvas) {
    $this.b41_1 = htmlCanvas;
    var tmp = $this;
    tmp.y40_1 = new SkiaLayer$attachTo$1(htmlCanvas, $this);
  }
  function SkiaLayer$attachTo$1($htmlCanvas, this$0) {
    this.k41_1 = this$0;
    CanvasRenderer.call(this, createWebGLContext($htmlCanvas), $htmlCanvas.width, $htmlCanvas.height);
  }
  protoOf(SkiaLayer$attachTo$1).v40 = function (currentTimestamp) {
    var currentNanos = currentTimestamp * 1000000;
    var tmp0_safe_receiver = this.k41_1.a41_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.l41(ensureNotNull(this.t40_1), this.o40_1, this.p40_1, numberToLong(currentNanos));
    }
  };
  function SkiaLayer() {
    this.y40_1 = null;
    this.z40_1 = GraphicsApi_WEBGL_getInstance();
    this.a41_1 = null;
    this.b41_1 = null;
  }
  protoOf(SkiaLayer).x40 = function () {
    var tmp0_safe_receiver = this.y40_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.x40();
    }
  };
  protoOf(SkiaLayer).m41 = function (container) {
    attachTo(this, container instanceof HTMLCanvasElement ? container : THROW_CCE());
  };
  function get_currentSystemTheme() {
    return SystemTheme_UNKNOWN_getInstance();
  }
  function convertToZeroTerminatedString(string) {
    var utf8 = encodeToByteArray(string);
    return copyOf(utf8, utf8.length + 1 | 0);
  }
  //region block: post-declaration
  protoOf(Bitmap).m3g = get_width;
  protoOf(Bitmap).n3g = get_height;
  protoOf(Bitmap).w3j = get_colorType;
  protoOf(Bitmap).x3j = get_colorSpace;
  protoOf(Bitmap).y3j = get_isOpaque;
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'alpha', function () {
    return this.z3z();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'depth', function () {
    return this.a40();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'stencil', function () {
    return this.b40();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'antialias', function () {
    return this.c40();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'premultipliedAlpha', function () {
    return this.d40();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'preserveDrawingBuffer', function () {
    return this.e40();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'preferLowPowerToHighPerformance', function () {
    return this.f40();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'failIfMajorPerformanceCaveat', function () {
    return this.g40();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'enableExtensionsByDefault', function () {
    return this.h40();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'explicitSwapControl', function () {
    return this.i40();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'renderViaOffscreenBackBuffer', function () {
    return this.j40();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'majorVersion', function () {
    return this.k40();
  });
  //endregion
  //region block: init
  Companion_instance_11 = new Companion_11();
  Companion_instance_14 = new Companion_14();
  Companion_instance_15 = new Companion_15();
  Companion_instance_27 = new Companion_27();
  Companion_instance_28 = new Companion_28();
  Companion_instance_35 = new Companion_35();
  Companion_instance_39 = new Companion_39();
  Companion_instance_40 = new Companion_40();
  Companion_instance_44 = new Companion_44();
  Companion_instance_45 = new Companion_45();
  Companion_instance_46 = new Companion_46();
  Stats_instance = new Stats();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Alignment_CENTER_getInstance;
  _.$_$.b = Alignment_END_getInstance;
  _.$_$.c = Alignment_JUSTIFY_getInstance;
  _.$_$.d = Alignment_LEFT_getInstance;
  _.$_$.e = Alignment_RIGHT_getInstance;
  _.$_$.f = Alignment_START_getInstance;
  _.$_$.g = BaselineMode_ALPHABETIC_getInstance;
  _.$_$.h = DecorationLineStyle_DASHED_getInstance;
  _.$_$.i = DecorationLineStyle_DOTTED_getInstance;
  _.$_$.j = DecorationLineStyle_DOUBLE_getInstance;
  _.$_$.k = DecorationLineStyle_SOLID_getInstance;
  _.$_$.l = DecorationLineStyle_WAVY_getInstance;
  _.$_$.m = Direction_LTR_getInstance;
  _.$_$.n = Direction_RTL_getInstance;
  _.$_$.o = HeightMode_ALL_getInstance;
  _.$_$.p = HeightMode_DISABLE_ALL_getInstance;
  _.$_$.q = HeightMode_DISABLE_FIRST_ASCENT_getInstance;
  _.$_$.r = HeightMode_DISABLE_LAST_DESCENT_getInstance;
  _.$_$.s = PlaceholderAlignment_ABOVE_BASELINE_getInstance;
  _.$_$.t = PlaceholderAlignment_BOTTOM_getInstance;
  _.$_$.u = PlaceholderAlignment_MIDDLE_getInstance;
  _.$_$.v = PlaceholderAlignment_TOP_getInstance;
  _.$_$.w = RectHeightMode_MAX_getInstance;
  _.$_$.x = RectHeightMode_STRUT_getInstance;
  _.$_$.y = RectWidthMode_TIGHT_getInstance;
  _.$_$.z = BlendMode_CLEAR_getInstance;
  _.$_$.a1 = BlendMode_COLOR_BURN_getInstance;
  _.$_$.b1 = BlendMode_COLOR_DODGE_getInstance;
  _.$_$.c1 = BlendMode_COLOR_getInstance;
  _.$_$.d1 = BlendMode_DARKEN_getInstance;
  _.$_$.e1 = BlendMode_DIFFERENCE_getInstance;
  _.$_$.f1 = BlendMode_DST_ATOP_getInstance;
  _.$_$.g1 = BlendMode_DST_IN_getInstance;
  _.$_$.h1 = BlendMode_DST_OUT_getInstance;
  _.$_$.i1 = BlendMode_DST_OVER_getInstance;
  _.$_$.j1 = BlendMode_DST_getInstance;
  _.$_$.k1 = BlendMode_EXCLUSION_getInstance;
  _.$_$.l1 = BlendMode_HARD_LIGHT_getInstance;
  _.$_$.m1 = BlendMode_HUE_getInstance;
  _.$_$.n1 = BlendMode_LIGHTEN_getInstance;
  _.$_$.o1 = BlendMode_LUMINOSITY_getInstance;
  _.$_$.p1 = BlendMode_MODULATE_getInstance;
  _.$_$.q1 = BlendMode_MULTIPLY_getInstance;
  _.$_$.r1 = BlendMode_OVERLAY_getInstance;
  _.$_$.s1 = BlendMode_PLUS_getInstance;
  _.$_$.t1 = BlendMode_SATURATION_getInstance;
  _.$_$.u1 = BlendMode_SCREEN_getInstance;
  _.$_$.v1 = BlendMode_SOFT_LIGHT_getInstance;
  _.$_$.w1 = BlendMode_SRC_ATOP_getInstance;
  _.$_$.x1 = BlendMode_SRC_IN_getInstance;
  _.$_$.y1 = BlendMode_SRC_OUT_getInstance;
  _.$_$.z1 = BlendMode_SRC_OVER_getInstance;
  _.$_$.a2 = BlendMode_SRC_getInstance;
  _.$_$.b2 = BlendMode_XOR_getInstance;
  _.$_$.c2 = ClipMode_DIFFERENCE_getInstance;
  _.$_$.d2 = ClipMode_INTERSECT_getInstance;
  _.$_$.e2 = ColorAlphaType_OPAQUE_getInstance;
  _.$_$.f2 = ColorAlphaType_PREMUL_getInstance;
  _.$_$.g2 = ColorType_ALPHA_8_getInstance;
  _.$_$.h2 = ColorType_RGBA_F16_getInstance;
  _.$_$.i2 = ColorType_RGB_565_getInstance;
  _.$_$.j2 = FilterMode_LINEAR_getInstance;
  _.$_$.k2 = FilterMode_NEAREST_getInstance;
  _.$_$.l2 = FontEdging_ALIAS_getInstance;
  _.$_$.m2 = FontEdging_ANTI_ALIAS_getInstance;
  _.$_$.n2 = FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance;
  _.$_$.o2 = FontHinting_FULL_getInstance;
  _.$_$.p2 = FontHinting_NONE_getInstance;
  _.$_$.q2 = FontHinting_NORMAL_getInstance;
  _.$_$.r2 = FontHinting_SLIGHT_getInstance;
  _.$_$.s2 = FontSlant_ITALIC_getInstance;
  _.$_$.t2 = FontSlant_UPRIGHT_getInstance;
  _.$_$.u2 = MipmapMode_NEAREST_getInstance;
  _.$_$.v2 = MipmapMode_NONE_getInstance;
  _.$_$.w2 = PaintMode_FILL_getInstance;
  _.$_$.x2 = PaintMode_STROKE_getInstance;
  _.$_$.y2 = PaintStrokeCap_BUTT_getInstance;
  _.$_$.z2 = PaintStrokeCap_ROUND_getInstance;
  _.$_$.a3 = PaintStrokeCap_SQUARE_getInstance;
  _.$_$.b3 = PaintStrokeJoin_BEVEL_getInstance;
  _.$_$.c3 = PaintStrokeJoin_MITER_getInstance;
  _.$_$.d3 = PaintStrokeJoin_ROUND_getInstance;
  _.$_$.e3 = PathDirection_CLOCKWISE_getInstance;
  _.$_$.f3 = PathDirection_COUNTER_CLOCKWISE_getInstance;
  _.$_$.g3 = PathFillMode_EVEN_ODD_getInstance;
  _.$_$.h3 = PathFillMode_WINDING_getInstance;
  _.$_$.i3 = PathOp_DIFFERENCE_getInstance;
  _.$_$.j3 = PathOp_INTERSECT_getInstance;
  _.$_$.k3 = PathOp_REVERSE_DIFFERENCE_getInstance;
  _.$_$.l3 = PathOp_UNION_getInstance;
  _.$_$.m3 = PathOp_XOR_getInstance;
  _.$_$.n3 = FontCollection_init_$Create$;
  _.$_$.o3 = TextStyle_init_$Create$;
  _.$_$.p3 = TypefaceFontProviderWithFallback_init_$Create$;
  _.$_$.q3 = Bitmap_init_$Create$;
  _.$_$.r3 = Canvas_init_$Create$;
  _.$_$.s3 = Font_init_$Create$_0;
  _.$_$.t3 = FontStyle_init_$Create$;
  _.$_$.u3 = Paint_init_$Create$;
  _.$_$.v3 = Path_init_$Create$;
  _.$_$.w3 = PictureRecorder_init_$Create$;
  _.$_$.x3 = RTreeFactory_init_$Create$;
  _.$_$.y3 = CharDirection_getInstance;
  _.$_$.z3 = Companion_getInstance_1;
  _.$_$.a4 = Companion_getInstance_3;
  _.$_$.b4 = Companion_getInstance_5;
  _.$_$.c4 = Companion_getInstance_6;
  _.$_$.d4 = Companion_getInstance_7;
  _.$_$.e4 = Companion_getInstance_10;
  _.$_$.f4 = Companion_getInstance_12;
  _.$_$.g4 = Companion_getInstance_13;
  _.$_$.h4 = Companion_getInstance_16;
  _.$_$.i4 = Companion_getInstance_19;
  _.$_$.j4 = Companion_getInstance_22;
  _.$_$.k4 = Companion_instance_27;
  _.$_$.l4 = Companion_instance_28;
  _.$_$.m4 = ShadowUtils_getInstance;
  _.$_$.n4 = DecorationStyle;
  _.$_$.o4 = FontRastrSettings;
  _.$_$.p4 = LineMetrics;
  _.$_$.q4 = ParagraphBuilder;
  _.$_$.r4 = ParagraphStyle;
  _.$_$.s4 = PlaceholderStyle;
  _.$_$.t4 = Shadow;
  _.$_$.u4 = TextIndent;
  _.$_$.v4 = ColorInfo;
  _.$_$.w4 = CubicResampler;
  _.$_$.x4 = FilterMipmap;
  _.$_$.y4 = FontMgrWithFallback;
  _.$_$.z4 = ImageInfo;
  _.$_$.a5 = Matrix44;
  _.$_$.b5 = Point3;
  _.$_$.c5 = ClipboardManager;
  _.$_$.d5 = SkiaLayer;
  _.$_$.e5 = URIManager;
  _.$_$.f5 = currentNanoTime;
  _.$_$.g5 = get_currentSystemTheme;
  _.$_$.h5 = get_hostOs;
  //endregion
  return _;
}));

//# sourceMappingURL=skiko-kjs.js.map
