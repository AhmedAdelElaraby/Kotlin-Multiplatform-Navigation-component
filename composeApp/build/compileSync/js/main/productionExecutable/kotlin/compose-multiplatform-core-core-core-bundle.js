(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-core-core-bundle'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-core-core-bundle'.");
    }
    globalThis['compose-multiplatform-core-core-core-bundle'] = factory(typeof globalThis['compose-multiplatform-core-core-core-bundle'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-core-core-bundle'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var protoOf = kotlin_kotlin.$_$.kb;
  var objectCreate = kotlin_kotlin.$_$.jb;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.w;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.g1;
  var Unit_instance = kotlin_kotlin.$_$.d4;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var println = kotlin_kotlin.$_$.o9;
  var Char = kotlin_kotlin.$_$.le;
  var THROW_CCE = kotlin_kotlin.$_$.ze;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.t3;
  var ensureNotNull = kotlin_kotlin.$_$.pf;
  var ClassCastException = kotlin_kotlin.$_$.me;
  var getKClass = kotlin_kotlin.$_$.c;
  var ArrayList = kotlin_kotlin.$_$.m4;
  var isIntArray = kotlin_kotlin.$_$.ya;
  var isArray = kotlin_kotlin.$_$.ra;
  var toString = kotlin_kotlin.$_$.ob;
  var initMetadataForClass = kotlin_kotlin.$_$.ka;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q1;
  var isShortArray = kotlin_kotlin.$_$.bb;
  var isLongArray = kotlin_kotlin.$_$.ab;
  var isFloatArray = kotlin_kotlin.$_$.xa;
  var isDoubleArray = kotlin_kotlin.$_$.wa;
  var isCharArray = kotlin_kotlin.$_$.ua;
  var isByteArray = kotlin_kotlin.$_$.ta;
  var isBooleanArray = kotlin_kotlin.$_$.sa;
  var isCharSequence = kotlin_kotlin.$_$.va;
  var Long = kotlin_kotlin.$_$.ue;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Bundle, 'Bundle', Bundle_init_$Create$);
  //endregion
  function Bundle_init_$Init$($this) {
    Bundle.call($this, LinkedHashMap_init_$Create$());
    return $this;
  }
  function Bundle_init_$Create$() {
    return Bundle_init_$Init$(objectCreate(protoOf(Bundle)));
  }
  function Bundle_init_$Init$_0(initialCapacity, $this) {
    Bundle.call($this, LinkedHashMap_init_$Create$_0(initialCapacity));
    return $this;
  }
  function Bundle_init_$Create$_0(initialCapacity) {
    return Bundle_init_$Init$_0(initialCapacity, objectCreate(protoOf(Bundle)));
  }
  function Bundle_init_$Init$_1(bundle, $this) {
    Bundle.call($this, LinkedHashMap_init_$Create$_1(bundle.ib5_1));
    return $this;
  }
  function Bundle_init_$Create$_1(bundle) {
    return Bundle_init_$Init$_1(bundle, objectCreate(protoOf(Bundle)));
  }
  function typeWarning($this, key, value, className, defaultValue, e) {
    var sb = StringBuilder_init_$Create$();
    sb.o8('Key ');
    sb.o8(key);
    sb.o8(' expected ');
    sb.o8(className);
    if (!(value == null)) {
      sb.o8(' but value was a ');
      sb.o8(get_canonicalName(getKClassFromExpression(value)));
    } else {
      sb.o8(' but value was of a different type');
    }
    sb.o8('.  The default value ');
    sb.n8(defaultValue);
    sb.o8(' was returned.');
    println(sb.toString());
    println('Attempt to cast generated internal exception: ' + e.toString());
  }
  function typeWarning_0($this, key, value, className, e) {
    typeWarning($this, key, value, className, '<null>', e);
  }
  function Bundle(bundleData) {
    this.ib5_1 = bundleData;
  }
  protoOf(Bundle).yu = function () {
    return this.ib5_1.n();
  };
  protoOf(Bundle).q = function () {
    return this.ib5_1.q();
  };
  protoOf(Bundle).jb5 = function (key) {
    return this.ib5_1.j2(key);
  };
  protoOf(Bundle).kb5 = function (key) {
    this.ib5_1.p2(key);
  };
  protoOf(Bundle).lb5 = function () {
    return this.ib5_1.m2();
  };
  protoOf(Bundle).mb5 = function (bundle) {
    this.ib5_1.q2(bundle.ib5_1);
  };
  protoOf(Bundle).nb5 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).ob5 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).pb5 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    var value_0 = new Char(value);
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value_0);
  };
  protoOf(Bundle).qb5 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).rb5 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).sb5 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).tb5 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).ub5 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).vb5 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).wb5 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).xb5 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).yb5 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).zb5 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).ab6 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).bb6 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).cb6 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).db6 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).eb6 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).fb6 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).gb6 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).hb6 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).ib6 = function (key, value) {
    // Inline function 'androidx.core.bundle.Bundle.setObject' call
    // Inline function 'kotlin.collections.set' call
    this.ib5_1.o2(key, value);
  };
  protoOf(Bundle).jb6 = function (key) {
    return this.kb6(key, false);
  };
  protoOf(Bundle).kb6 = function (key, defaultValue) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.ib5_1.l2(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = defaultValue;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = typeof value === 'boolean' ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().jb())), defaultValue, e);
          tmp_1 = defaultValue;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).lb6 = function (key) {
    return this.mb6(key, 0);
  };
  protoOf(Bundle).mb6 = function (key, defaultValue) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.ib5_1.l2(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = defaultValue;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = typeof value === 'number' ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().mb())), defaultValue, e);
          tmp_1 = defaultValue;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).nb6 = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.ib5_1.l2(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = typeof value === 'string' ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().qb())), e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).ob6 = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.ib5_1.l2(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = value instanceof Bundle ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, ensureNotNull(get_canonicalName(getKClass(Bundle))), e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).pb6 = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getArrayList' call
      var tmp0_elvis_lhs = this.ib5_1.l2(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = value instanceof ArrayList ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, 'ArrayList<' + ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().qb())) + '>', e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).qb6 = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getObject' call
      var tmp0_elvis_lhs = this.ib5_1.l2(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = isIntArray(value) ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, ensureNotNull(get_canonicalName(PrimitiveClasses_getInstance().wb())), e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).rb6 = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.core.bundle.Bundle.getArray' call
      var tmp0_elvis_lhs = this.ib5_1.l2(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = null;
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      var tmp_0;
      try {
        tmp_0 = isArray(value) ? value : THROW_CCE();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof ClassCastException) {
          var e = $p;
          typeWarning_0(this, key, value, 'Array<' + ensureNotNull(get_canonicalName(getKClass(Bundle))) + '>', e);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$0 = tmp_0;
    }
    return tmp$ret$0;
  };
  protoOf(Bundle).sb6 = function (key) {
    return this.ib5_1.l2(key);
  };
  protoOf(Bundle).toString = function () {
    return toString(this.ib5_1);
  };
  function bundleOf(pairs) {
    // Inline function 'kotlin.apply' call
    var this_0 = Bundle_init_$Create$_0(pairs.length);
    // Inline function 'androidx.core.bundle.bundleOf.<anonymous>' call
    var inductionVariable = 0;
    var last = pairs.length;
    while (inductionVariable < last) {
      var tmp1_loop_parameter = pairs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = tmp1_loop_parameter.ag();
      var value = tmp1_loop_parameter.bg();
      if (value == null) {
        this_0.vb5(key, null);
      } else {
        if (!(value == null) ? typeof value === 'boolean' : false) {
          this_0.nb5(key, value);
        } else {
          if (!(value == null) ? typeof value === 'number' : false) {
            this_0.ob5(key, value);
          } else {
            if (value instanceof Char) {
              this_0.pb5(key, value.m1_1);
            } else {
              if (!(value == null) ? typeof value === 'number' : false) {
                this_0.ub5(key, value);
              } else {
                if (!(value == null) ? typeof value === 'number' : false) {
                  this_0.tb5(key, value);
                } else {
                  if (!(value == null) ? typeof value === 'number' : false) {
                    this_0.rb5(key, value);
                  } else {
                    if (value instanceof Long) {
                      this_0.sb5(key, value);
                    } else {
                      if (!(value == null) ? typeof value === 'number' : false) {
                        this_0.qb5(key, value);
                      } else {
                        if (value instanceof Bundle) {
                          this_0.xb5(key, value);
                        } else {
                          if (!(value == null) ? typeof value === 'string' : false) {
                            this_0.vb5(key, value);
                          } else {
                            if (!(value == null) ? isCharSequence(value) : false) {
                              this_0.wb5(key, value);
                            } else {
                              if (!(value == null) ? isBooleanArray(value) : false) {
                                this_0.zb5(key, value);
                              } else {
                                if (!(value == null) ? isByteArray(value) : false) {
                                  this_0.ab6(key, value);
                                } else {
                                  if (!(value == null) ? isCharArray(value) : false) {
                                    this_0.cb6(key, value);
                                  } else {
                                    if (!(value == null) ? isDoubleArray(value) : false) {
                                      this_0.gb6(key, value);
                                    } else {
                                      if (!(value == null) ? isFloatArray(value) : false) {
                                        this_0.fb6(key, value);
                                      } else {
                                        if (!(value == null) ? isIntArray(value) : false) {
                                          this_0.db6(key, value);
                                        } else {
                                          if (!(value == null) ? isLongArray(value) : false) {
                                            this_0.eb6(key, value);
                                          } else {
                                            if (!(value == null) ? isShortArray(value) : false) {
                                              this_0.bb6(key, value);
                                            } else {
                                              var valueType = get_canonicalName(getKClassFromExpression(value));
                                              throw IllegalArgumentException_init_$Create$('Illegal value type ' + valueType + ' for key "' + key + '"');
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return this_0;
  }
  function get_canonicalName(_this__u8e3s4) {
    return _this__u8e3s4.xa();
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Bundle;
  _.$_$.b = bundleOf;
  _.$_$.c = Bundle_init_$Create$_1;
  _.$_$.d = Bundle_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-core-core-bundle.js.map
