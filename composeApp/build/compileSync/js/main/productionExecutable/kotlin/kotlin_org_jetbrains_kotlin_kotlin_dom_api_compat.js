(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat'.");
    }
    globalThis.kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat = factory(typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined' ? {} : kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.kb;
  var toString = kotlin_kotlin.$_$.ob;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(EventListenerHandler, 'EventListenerHandler');
  //endregion
  function EventListener(handler) {
    return new EventListenerHandler(handler);
  }
  function EventListenerHandler(handler) {
    this.am_1 = handler;
  }
  protoOf(EventListenerHandler).bm = function (event) {
    this.am_1(event);
  };
  protoOf(EventListenerHandler).handleEvent = function (event) {
    return this.bm(event);
  };
  protoOf(EventListenerHandler).toString = function () {
    return 'EventListenerHandler(' + toString(this.am_1) + ')';
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = EventListener;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js.map
