(function(e, t) {
    'object' == typeof exports && 'object' == typeof module ? module.exports = t(require('xmldom'), function() {
        try {
            return require('jszip')
        } catch (t) {}
    }()) : 'function' == typeof define && define.amd ? define(['xmldom', 'jszip'], t) : 'object' == typeof exports ? exports.ePub = t(require('xmldom'), function() {
        try {
            return require('jszip')
        } catch (t) {}
    }()) : e.ePub = t(e.xmldom, e.jszip)
})(this, function(e, t) {
    var n = Math.PI,
        a = String.fromCharCode,
        o = Math.sqrt,
        r = String.prototype,
        i = Math.LN2,
        l = Math.log,
        s = Math.pow,
        c = Math.abs,
        d = Math.exp,
        p = Math.expm1,
        u = Math.round,
        g = Math.ceil,
        h = Math.min,
        m = Math.max,
        y = Math.floor;
    return function(e) {
        function t(a) {
            if (n[a]) return n[a].exports;
            var i = n[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return e[a].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, a) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: a
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e['default']
            } : function() {
                return e
            };
            return t.d(n, 'a', n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = '/dist/', t(t.s = 148)
    }([function(e, t, n) {
        var a = n(2),
            i = n(23),
            o = n(13),
            r = n(14),
            l = n(19),
            s = 'prototype',
            d = function(e, t, n) {
                var c = e & d.F,
                    p = e & d.G,
                    u = e & d.S,
                    g = e & d.P,
                    h = e & d.B,
                    m = p ? a : u ? a[t] || (a[t] = {}) : (a[t] || {})[s],
                    f = p ? i : i[t] || (i[t] = {}),
                    y = f[s] || (f[s] = {}),
                    v, b, x, E;
                for (v in p && (n = t), n) b = !c && m && void 0 !== m[v], x = (b ? m : n)[v], E = h && b ? l(x, a) : g && 'function' == typeof x ? l(Function.call, x) : x, m && r(m, v, x, e & d.U), f[v] != x && o(f, v, E), g && y[v] != x && (y[v] = x)
            };
        a.core = i, d.F = 1, d.G = 2, d.S = 4, d.P = 8, d.B = 16, d.W = 32, d.U = 64, d.R = 128, e.exports = d
    }, function(e, t, n) {
        var a = n(4);
        e.exports = function(e) {
            if (!a(e)) throw TypeError(e + ' is not an object!');
            return e
        }
    }, function(e) {
        var t = e.exports = 'undefined' != typeof window && window.Math == Math ? window : 'undefined' != typeof self && self.Math == Math ? self : Function('return this')();
        'number' == typeof __g && (__g = t)
    }, function(e) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (t) {
                return !0
            }
        }
    }, function(e) {
        e.exports = function(e) {
            return 'object' == typeof e ? null !== e : 'function' == typeof e
        }
    }, function(e, t, n) {
        var a = n(55)('wks'),
            i = n(37),
            o = n(2).Symbol,
            r = 'function' == typeof o,
            l = e.exports = function(e) {
                return a[e] || (a[e] = r && o[e] || (r ? o : i)('Symbol.' + e))
            };
        l.store = a
    }, function(e, t, n) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function i() {
            var e = new Date().getTime(),
                t = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(t) {
                    var n = 0 | (e + 16 * Math.random()) % 16;
                    return e = y(e / 16), ('x' == t ? n : 8 | 7 & n).toString(16)
                });
            return t
        }

        function o(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }

        function r(e, t, n, a, i) {
            var o = a || 0,
                l = i || t.length,
                s = parseInt(o + (l - o) / 2),
                d;
            return (n || (n = function(e, t) {
                return e > t ? 1 : e < t ? -1 : e == t ? 0 : void 0
            }), 0 >= l - o) ? s : (d = n(t[s], e), 1 == l - o ? 0 <= d ? s : s + 1 : 0 === d ? s : -1 === d ? r(e, t, n, s, l) : r(e, t, n, o, s))
        }

        function l(e, t, n, a, i) {
            var o = a || 0,
                r = i || t.length,
                s = parseInt(o + (r - o) / 2),
                d;
            return (n || (n = function(e, t) {
                return e > t ? 1 : e < t ? -1 : e == t ? 0 : void 0
            }), 0 >= r - o) ? -1 : (d = n(t[s], e), 1 == r - o ? 0 === d ? s : -1 : 0 === d ? s : -1 === d ? l(e, t, n, s, r) : l(e, t, n, o, s))
        }

        function s(e, t) {
            for (var n = e.parentNode, a = n.childNodes, o = -1, r = 0, i; r < a.length && (i = a[r], i.nodeType === t && o++, i != e); r++);
            return o
        }

        function d(e, t) {
            return new Blob([e], {
                type: t
            })
        }

        function c(e, t) {
            return 'undefined' == typeof e.querySelector ? e.getElementsByTagName(t) : e.querySelectorAll(t)
        }

        function p(e, t, n) {
            for (var a = document.createTreeWalker(e, n, null, !1), i; i = a.nextNode();) t(i)
        }

        function u(e, t) {
            if (t(e)) return !0;
            if (e = e.firstChild, e)
                do {
                    var n = u(e, t);
                    if (n) return !0;
                    e = e.nextSibling
                } while (e)
        }

        function g(e) {
            for (var t = [e]; e; e = e.parentNode) t.unshift(e);
            return t
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var h = function() {
            function e(e, t) {
                for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
            return function(t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }();
        t.uuid = i, t.documentHeight = function() {
            return m(document.documentElement.clientHeight, document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight)
        }, t.isElement = function(e) {
            return !!(e && 1 == e.nodeType)
        }, t.isNumber = o, t.isFloat = function(e) {
            var t = parseFloat(e);
            return !1 !== o(e) && ('string' == typeof e && -1 < e.indexOf('.') || y(t) !== t)
        }, t.prefixed = function(e) {
            var t = ['Webkit', 'webkit', 'Moz', 'O', 'ms'],
                n = ['-webkit-', '-webkit-', '-moz-', '-o-', '-ms-'],
                a = e[0].toUpperCase() + e.slice(1),
                o = t.length;
            if ('undefined' == typeof document || 'undefined' != typeof document.body.style[e]) return e;
            for (var r = 0; r < o; r++)
                if ('undefined' != typeof document.body.style[t[r] + a]) return n[r] + e;
            return e
        }, t.defaults = function(e) {
            for (var t = 1, n = arguments.length, a; t < n; t++)
                for (var i in a = arguments[t], a) void 0 === e[i] && (e[i] = a[i]);
            return e
        }, t.extend = function(e) {
            var t = [].slice.call(arguments, 1);
            return t.forEach(function(t) {
                t && Object.getOwnPropertyNames(t).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                })
            }), e
        }, t.insert = function(e, t, n) {
            var a = r(e, t, n);
            return t.splice(a, 0, e), a
        }, t.locationOf = r, t.indexOfSorted = l, t.bounds = function(e) {
            var t = window.getComputedStyle(e),
                n = 0,
                a = 0;
            return ['width', 'paddingRight', 'paddingLeft', 'marginRight', 'marginLeft', 'borderRightWidth', 'borderLeftWidth'].forEach(function(e) {
                n += parseFloat(t[e]) || 0
            }), ['height', 'paddingTop', 'paddingBottom', 'marginTop', 'marginBottom', 'borderTopWidth', 'borderBottomWidth'].forEach(function(e) {
                a += parseFloat(t[e]) || 0
            }), {
                height: a,
                width: n
            }
        }, t.borders = function(e) {
            var t = window.getComputedStyle(e),
                n = 0,
                a = 0;
            return ['paddingRight', 'paddingLeft', 'marginRight', 'marginLeft', 'borderRightWidth', 'borderLeftWidth'].forEach(function(e) {
                n += parseFloat(t[e]) || 0
            }), ['paddingTop', 'paddingBottom', 'marginTop', 'marginBottom', 'borderTopWidth', 'borderBottomWidth'].forEach(function(e) {
                a += parseFloat(t[e]) || 0
            }), {
                height: a,
                width: n
            }
        }, t.nodeBounds = function(e) {
            var t = e.ownerDocument,
                n;
            if (e.nodeType == Node.TEXT_NODE) {
                var a = t.createRange();
                a.selectNodeContents(e), n = a.getBoundingClientRect()
            } else n = e.getBoundingClientRect();
            return n
        }, t.windowBounds = function() {
            var e = window.innerWidth,
                t = window.innerHeight;
            return {
                top: 0,
                left: 0,
                right: e,
                bottom: t,
                width: e,
                height: t
            }
        }, t.indexOfNode = s, t.indexOfTextNode = function(e) {
            return s(e, b)
        }, t.indexOfElementNode = function(e) {
            return s(e, v)
        }, t.isXml = function(e) {
            return -1 < ['xml', 'opf', 'ncx'].indexOf(e)
        }, t.createBlob = d, t.createBlobUrl = function(e, t) {
            var n = d(e, t),
                a;
            return a = x.createObjectURL(n), a
        }, t.revokeBlobUrl = function(e) {
            return x.revokeObjectURL(e)
        }, t.createBase64Url = function(e, t) {
            var n, a;
            if ('string' == typeof e) return n = btoa(encodeURIComponent(e)), a = 'data:' + t + ';base64,' + n, a
        }, t.type = function(e) {
            return Object.prototype.toString.call(e).slice(8, -1)
        }, t.parse = function(e, t, a) {
            var i, o;
            return o = 'undefined' == typeof DOMParser || a ? n(371).DOMParser : DOMParser, 65279 === e.charCodeAt(0) && (e = e.slice(1)), i = new o().parseFromString(e, t), i
        }, t.qs = function(e, t) {
            var n;
            if (!e) throw new Error('No Element Provided');
            return 'undefined' == typeof e.querySelector ? (n = e.getElementsByTagName(t), n.length) ? n[0] : void 0 : e.querySelector(t)
        }, t.qsa = c, t.qsp = function(e, t, n) {
            var a, i;
            if ('undefined' != typeof e.querySelector) {
                for (var o in t += '[', n) t += o + '~=\'' + n[o] + '\'';
                return t += ']', e.querySelector(t)
            }
            return (a = e.getElementsByTagName(t), i = Array.prototype.slice.call(a, 0).filter(function(e) {
                for (var t in n)
                    if (e.getAttribute(t) === n[t]) return !0;
                return !1
            }), i) ? i[0] : void 0
        }, t.sprint = function(e, t) {
            var n = e.ownerDocument || e;
            'undefined' == typeof n.createTreeWalker ? u(e, function(e) {
                e && 3 === e.nodeType && t(e)
            }, !0) : p(e, t, NodeFilter.SHOW_TEXT)
        }, t.treeWalker = p, t.walk = u, t.blob2base64 = function(e) {
            return new Promise(function(t) {
                var n = new FileReader;
                n.readAsDataURL(e), n.onloadend = function() {
                    t(n.result)
                }
            })
        }, t.defer = function() {
            var e = this;
            this.resolve = null, this.reject = null, this.id = i(), this.promise = new Promise(function(t, n) {
                e.resolve = t, e.reject = n
            }), Object.freeze(this)
        }, t.querySelectorByType = function(e, t, n) {
            var a;
            if ('undefined' != typeof e.querySelector && (a = e.querySelector(t + '[*|type="' + n + '"]')), !a || 0 === a.length) {
                a = c(e, t);
                for (var o = 0; o < a.length; o++)
                    if (a[o].getAttributeNS('http://www.idpf.org/2007/ops', 'type') === n || a[o].getAttribute('epub:type') === n) return a[o]
            } else return a
        }, t.findChildren = function(e) {
            for (var t = [], n = e.childNodes, a = 0, i; a < n.length; a++) i = n[a], 1 === i.nodeType && t.push(i);
            return t
        }, t.parents = g, t.filterChildren = function(e, t, n) {
            for (var a = [], o = e.childNodes, r = 0, i; r < o.length; r++)
                if (i = o[r], 1 === i.nodeType && i.nodeName.toLowerCase() === t) {
                    if (n) return i;
                    a.push(i)
                }
            if (!n) return a
        }, t.getParentByTagName = function(e, t) {
            var n;
            if (null !== e && '' !== t)
                for (n = e.parentNode; 1 === n.nodeType;) {
                    if (n.tagName.toLowerCase() === t) return n;
                    n = n.parentNode
                }
        };
        var f = t.requestAnimationFrame = 'undefined' != typeof window && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame),
            v = 1,
            b = 3,
            x = 'undefined' == typeof URL ? 'undefined' == typeof window ? void 0 : window.URL || window.webkitURL || window.mozURL : URL,
            E = t.RangeObject = function() {
                function e() {
                    a(this, e), this.collapsed = !1, this.commonAncestorContainer = void 0, this.endContainer = void 0, this.endOffset = void 0, this.startContainer = void 0, this.startOffset = void 0
                }
                return h(e, [{
                    key: 'setStart',
                    value: function(e, t) {
                        this.startContainer = e, this.startOffset = t, this.endContainer ? this.commonAncestorContainer = this._commonAncestorContainer() : this.collapse(!0), this._checkCollapsed()
                    }
                }, {
                    key: 'setEnd',
                    value: function(e, t) {
                        this.endContainer = e, this.endOffset = t, this.startContainer ? (this.collapsed = !1, this.commonAncestorContainer = this._commonAncestorContainer()) : this.collapse(!1), this._checkCollapsed()
                    }
                }, {
                    key: 'collapse',
                    value: function(e) {
                        this.collapsed = !0, e ? (this.endContainer = this.startContainer, this.endOffset = this.startOffset, this.commonAncestorContainer = this.startContainer.parentNode) : (this.startContainer = this.endContainer, this.startOffset = this.endOffset, this.commonAncestorContainer = this.endOffset.parentNode)
                    }
                }, {
                    key: 'selectNode',
                    value: function(e) {
                        var t = e.parentNode,
                            n = Array.prototype.indexOf.call(t.childNodes, e);
                        this.setStart(t, n), this.setEnd(t, n + 1)
                    }
                }, {
                    key: 'selectNodeContents',
                    value: function(e) {
                        var t = e.childNodes[e.childNodes - 1],
                            n = 3 === e.nodeType ? e.textContent.length : parent.childNodes.length;
                        this.setStart(e, 0), this.setEnd(e, n)
                    }
                }, {
                    key: '_commonAncestorContainer',
                    value: function(e, t) {
                        var n = g(e || this.startContainer),
                            a = g(t || this.endContainer);
                        if (n[0] == a[0])
                            for (var o = 0; o < n.length; o++)
                                if (n[o] != a[o]) return n[o - 1]
                    }
                }, {
                    key: '_checkCollapsed',
                    value: function() {
                        this.collapsed = this.startContainer === this.endContainer && this.startOffset === this.endOffset
                    }
                }, {
                    key: 'toString',
                    value: function() {}
                }]), e
            }()
    }, function(e, t, n) {
        e.exports = !n(3)(function() {
            return 7 != Object.defineProperty({}, 'a', {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(e, t, n) {
        var a = n(1),
            i = n(106),
            o = n(24),
            r = Object.defineProperty;
        t.f = n(7) ? Object.defineProperty : function(e, t, n) {
            if (a(e), t = o(t, !0), a(n), i) try {
                return r(e, t, n)
            } catch (t) {}
            if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!');
            return 'value' in n && (e[t] = n.value), e
        }
    }, function(e, t, n) {
        var a = n(26);
        e.exports = function(e) {
            return 0 < e ? h(a(e), 9007199254740991) : 0
        }
    }, function(e, t, n) {
        var a = n(25);
        e.exports = function(e) {
            return Object(a(e))
        }
    }, function(e) {
        e.exports = function(e) {
            if ('function' != typeof e) throw TypeError(e + ' is not a function!');
            return e
        }
    }, function(e) {
        var t = {}.hasOwnProperty;
        e.exports = function(e, n) {
            return t.call(e, n)
        }
    }, function(e, t, n) {
        var a = n(8),
            i = n(36);
        e.exports = n(7) ? function(e, t, n) {
            return a.f(e, t, i(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    }, function(e, t, n) {
        var a = n(2),
            i = n(13),
            o = n(12),
            r = n(37)('src'),
            l = 'toString',
            s = Function[l],
            d = ('' + s).split(l);
        n(23).inspectSource = function(e) {
            return s.call(e)
        }, (e.exports = function(e, t, n, l) {
            var s = 'function' == typeof n;
            s && (o(n, 'name') || i(n, 'name', t));
            e[t] === n || (s && (o(n, r) || i(n, r, e[t] ? '' + e[t] : d.join(t + ''))), e === a ? e[t] = n : l ? e[t] ? e[t] = n : i(e, t, n) : (delete e[t], i(e, t, n)))
        })(Function.prototype, l, function() {
            return 'function' == typeof this && this[r] || s.call(this)
        })
    }, function(e, t, n) {
        var a = n(52),
            i = n(25);
        e.exports = function(e) {
            return a(i(e))
        }
    }, function(e, t, n) {
        var a = n(0),
            i = n(3),
            o = n(25),
            r = /"/g,
            l = function(e, t, n, a) {
                var i = o(e) + '',
                    l = '<' + t;
                return '' !== n && (l += ' ' + n + '="' + (a + '').replace(r, '&quot;') + '"'), l + '>' + i + '</' + t + '>'
            };
        e.exports = function(e, t) {
            var n = {};
            n[e] = t(l), a(a.P + a.F * i(function() {
                var t = '' [e]('"');
                return t !== t.toLowerCase() || 3 < t.split('"').length
            }), 'String', n)
        }
    }, function(e, t, n) {
        var a = n(53),
            i = n(36),
            o = n(15),
            r = n(24),
            l = n(12),
            s = n(106),
            d = Object.getOwnPropertyDescriptor;
        t.f = n(7) ? d : function(e, t) {
            if (e = o(e), t = r(t, !0), s) try {
                return d(e, t)
            } catch (t) {}
            return l(e, t) ? i(!a.f.call(e, t), e[t]) : void 0
        }
    }, function(e, t, n) {
        var a = n(12),
            i = n(10),
            o = n(75)('IE_PROTO'),
            r = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = i(e), a(e, o) ? e[o] : 'function' == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? r : null
        }
    }, function(e, t, n) {
        var a = n(11);
        e.exports = function(e, t, n) {
            return (a(e), void 0 === t) ? e : 1 === n ? function(n) {
                return e.call(t, n)
            } : 2 === n ? function(n, a) {
                return e.call(t, n, a)
            } : 3 === n ? function(n, a, i) {
                return e.call(t, n, a, i)
            } : function() {
                return e.apply(t, arguments)
            }
        }
    }, function(e) {
        var t = {}.toString;
        e.exports = function(e) {
            return t.call(e).slice(8, -1)
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(3);
        e.exports = function(e, t) {
            return !!e && a(function() {
                t ? e.call(null, function() {}, 1) : e.call(null)
            })
        }
    }, function(e, t, n) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            },
            i = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            r = n(6),
            l = 1,
            s = 3,
            d = function() {
                function e(t, n, i) {
                    a(this, e);
                    var l;
                    if (this.str = '', this.base = {}, this.spinePos = 0, this.range = !1, this.path = {}, this.start = null, this.end = null, !(this instanceof e)) return new e(t, n, i);
                    if ('string' == typeof n ? this.base = this.parseComponent(n) : 'object' === ('undefined' == typeof n ? 'undefined' : o(n)) && n.steps && (this.base = n), l = this.checkType(t), 'string' === l) return this.str = t, (0, r.extend)(this, this.parse(t));
                    if ('range' === l) return (0, r.extend)(this, this.fromRange(t, this.base, i));
                    if ('node' === l) return (0, r.extend)(this, this.fromNode(t, this.base, i));
                    if ('EpubCFI' === l && t.path) return t;
                    if (!t) return this;
                    throw new TypeError('not a valid argument for EpubCFI')
                }
                return i(e, [{
                    key: 'checkType',
                    value: function(t) {
                        return this.isCfiString(t) ? 'string' : t && 'object' === ('undefined' == typeof t ? 'undefined' : o(t)) && ('Range' === (0, r.type)(t) || 'undefined' != typeof t.startContainer) ? 'range' : t && 'object' === ('undefined' == typeof t ? 'undefined' : o(t)) && 'undefined' != typeof t.nodeType ? 'node' : t && 'object' === ('undefined' == typeof t ? 'undefined' : o(t)) && t instanceof e && 'EpubCFI'
                    }
                }, {
                    key: 'parse',
                    value: function(e) {
                        var t = {
                                spinePos: -1,
                                range: !1,
                                base: {},
                                path: {},
                                start: null,
                                end: null
                            },
                            n, a, i;
                        return 'string' == typeof e ? (0 === e.indexOf('epubcfi(') && ')' === e[e.length - 1] && (e = e.slice(8, e.length - 1)), n = this.getChapterComponent(e), !n) ? {
                            spinePos: -1
                        } : (t.base = this.parseComponent(n), a = this.getPathComponent(e), t.path = this.parseComponent(a), i = this.getRange(e), i && (t.range = !0, t.start = this.parseComponent(i[0]), t.end = this.parseComponent(i[1])), t.spinePos = t.base.steps[1].index, t) : {
                            spinePos: -1
                        }
                    }
                }, {
                    key: 'parseComponent',
                    value: function(e) {
                        var t = {
                                steps: [],
                                terminal: {
                                    offset: null,
                                    assertion: null
                                }
                            },
                            n = e.split(':'),
                            a = n[0].split('/'),
                            i;
                        return 1 < n.length && (i = n[1], t.terminal = this.parseTerminal(i)), '' === a[0] && a.shift(), t.steps = a.map(function(e) {
                            return this.parseStep(e)
                        }.bind(this)), t
                    }
                }, {
                    key: 'parseStep',
                    value: function(e) {
                        var t, n, a, i, o;
                        if (i = e.match(/\[(.*)\]/), i && i[1] && (o = i[1]), n = parseInt(e), !isNaN(n)) return 0 == n % 2 ? (t = 'element', a = n / 2 - 1) : (t = 'text', a = (n - 1) / 2), {
                            type: t,
                            index: a,
                            id: o || null
                        }
                    }
                }, {
                    key: 'parseTerminal',
                    value: function(e) {
                        var t = e.match(/\[(.*)\]/),
                            n, a;
                        return t && t[1] ? (n = parseInt(e.split('[')[0]), a = t[1]) : n = parseInt(e), (0, r.isNumber)(n) || (n = null), {
                            offset: n,
                            assertion: a
                        }
                    }
                }, {
                    key: 'getChapterComponent',
                    value: function(e) {
                        var t = e.split('!');
                        return t[0]
                    }
                }, {
                    key: 'getPathComponent',
                    value: function(e) {
                        var t = e.split('!');
                        if (t[1]) {
                            var n = t[1].split(',');
                            return n[0]
                        }
                    }
                }, {
                    key: 'getRange',
                    value: function(e) {
                        var t = e.split(',');
                        return 3 === t.length && [t[1], t[2]]
                    }
                }, {
                    key: 'getCharecterOffsetComponent',
                    value: function(e) {
                        var t = e.split(':');
                        return t[1] || ''
                    }
                }, {
                    key: 'joinSteps',
                    value: function(e) {
                        return e ? e.map(function(e) {
                            var t = '';
                            return 'element' === e.type && (t += 2 * (e.index + 1)), 'text' === e.type && (t += 1 + 2 * e.index), e.id && (t += '[' + e.id + ']'), t
                        }).join('/') : ''
                    }
                }, {
                    key: 'segmentString',
                    value: function(e) {
                        var t = '/';
                        return t += this.joinSteps(e.steps), e.terminal && null != e.terminal.offset && (t += ':' + e.terminal.offset), e.terminal && null != e.terminal.assertion && (t += '[' + e.terminal.assertion + ']'), t
                    }
                }, {
                    key: 'toString',
                    value: function() {
                        var e = 'epubcfi(';
                        return e += this.segmentString(this.base), e += '!', e += this.segmentString(this.path), this.range && this.start && (e += ',', e += this.segmentString(this.start)), this.range && this.end && (e += ',', e += this.segmentString(this.end)), e += ')', e
                    }
                }, {
                    key: 'compare',
                    value: function(t, n) {
                        var a, o, r, l, s, s;
                        if ('string' == typeof t && (t = new e(t)), 'string' == typeof n && (n = new e(n)), t.spinePos > n.spinePos) return 1;
                        if (t.spinePos < n.spinePos) return -1;
                        t.range ? (a = t.path.steps.concat(t.start.steps), r = t.start.terminal) : (a = t.path.steps, r = t.path.terminal), n.range ? (o = n.path.steps.concat(n.start.steps), l = n.start.terminal) : (o = n.path.steps, l = n.path.terminal);
                        for (var d = 0; d < a.length; d++) {
                            if (!a[d]) return -1;
                            if (!o[d]) return 1;
                            if (a[d].index > o[d].index) return 1;
                            if (a[d].index < o[d].index) return -1
                        }
                        return a.length < o.length ? 1 : r.offset > l.offset ? 1 : r.offset < l.offset ? -1 : 0
                    }
                }, {
                    key: 'step',
                    value: function(e) {
                        var t = e.nodeType === s ? 'text' : 'element';
                        return {
                            id: e.id,
                            tagName: e.tagName,
                            type: t,
                            index: this.position(e)
                        }
                    }
                }, {
                    key: 'filteredStep',
                    value: function(e, t) {
                        var n = this.filter(e, t),
                            a;
                        if (n) return a = n.nodeType === s ? 'text' : 'element', {
                            id: n.id,
                            tagName: n.tagName,
                            type: a,
                            index: this.filteredPosition(n, t)
                        }
                    }
                }, {
                    key: 'pathTo',
                    value: function(e, t, n) {
                        for (var a = {
                                steps: [],
                                terminal: {
                                    offset: null,
                                    assertion: null
                                }
                            }, i = e, o; i && i.parentNode && i.parentNode.nodeType != 9;) o = n ? this.filteredStep(i, n) : this.step(i), o && a.steps.unshift(o), i = i.parentNode;
                        return null != t && 0 <= t && (a.terminal.offset = t, 'text' != a.steps[a.steps.length - 1].type && a.steps.push({
                            type: 'text',
                            index: 0
                        })), a
                    }
                }, {
                    key: 'equalStep',
                    value: function(e, t) {
                        return e && t && e.index === t.index && e.id === t.id && e.type === t.type
                    }
                }, {
                    key: 'fromRange',
                    value: function(e, t, n) {
                        var a = {
                                range: !1,
                                base: {},
                                path: {},
                                start: null,
                                end: null
                            },
                            r = e.startContainer,
                            l = e.endContainer,
                            s = e.startOffset,
                            d = e.endOffset,
                            c = !1;
                        if (n && (c = null != r.ownerDocument.querySelector('.' + n)), 'string' == typeof t ? (a.base = this.parseComponent(t), a.spinePos = a.base.steps[1].index) : 'object' === ('undefined' == typeof t ? 'undefined' : o(t)) && (a.base = t), e.collapsed) c && (s = this.patchOffset(r, s, n)), a.path = this.pathTo(r, s, n);
                        else {
                            a.range = !0, c && (s = this.patchOffset(r, s, n)), a.start = this.pathTo(r, s, n), c && (d = this.patchOffset(l, d, n)), a.end = this.pathTo(l, d, n), a.path = {
                                steps: [],
                                terminal: null
                            };
                            var p = a.start.steps.length,
                                u;
                            for (u = 0; u < p && this.equalStep(a.start.steps[u], a.end.steps[u]); u++) u === p - 1 ? a.start.terminal === a.end.terminal && (a.path.steps.push(a.start.steps[u]), a.range = !1) : a.path.steps.push(a.start.steps[u]);
                            a.start.steps = a.start.steps.slice(a.path.steps.length), a.end.steps = a.end.steps.slice(a.path.steps.length)
                        }
                        return a
                    }
                }, {
                    key: 'fromNode',
                    value: function(e, t, n) {
                        var a = {
                            range: !1,
                            base: {},
                            path: {},
                            start: null,
                            end: null
                        };
                        return 'string' == typeof t ? (a.base = this.parseComponent(t), a.spinePos = a.base.steps[1].index) : 'object' === ('undefined' == typeof t ? 'undefined' : o(t)) && (a.base = t), a.path = this.pathTo(e, null, n), a
                    }
                }, {
                    key: 'filter',
                    value: function(e, t) {
                        var n = !1,
                            a, i, o, r, l;
                        return e.nodeType === s ? (n = !0, o = e.parentNode, a = e.parentNode.classList.contains(t)) : (n = !1, a = e.classList.contains(t)), a && n ? (r = o.previousSibling, l = o.nextSibling, r && r.nodeType === s ? i = r : l && l.nodeType === s && (i = l), i ? i : e) : a && !n ? !1 : e
                    }
                }, {
                    key: 'patchOffset',
                    value: function(e, t, n) {
                        if (e.nodeType != s) throw new Error('Anchor must be a text node');
                        var a = e,
                            i = t;
                        for (e.parentNode.classList.contains(n) && (a = e.parentNode); a.previousSibling;) {
                            if (a.previousSibling.nodeType !== l) i += a.previousSibling.textContent.length;
                            else if (a.previousSibling.classList.contains(n)) i += a.previousSibling.textContent.length;
                            else break;
                            a = a.previousSibling
                        }
                        return i
                    }
                }, {
                    key: 'normalizedMap',
                    value: function(e, t, n) {
                        var a = {},
                            o = -1,
                            r = e.length,
                            d, i, c;
                        for (d = 0; d < r; d++) i = e[d].nodeType, i === l && e[d].classList.contains(n) && (i = s), 0 < d && i === s && c === s ? a[d] = o : t === i && (++o, a[d] = o), c = i;
                        return a
                    }
                }, {
                    key: 'position',
                    value: function(e) {
                        var t, n;
                        return e.nodeType === l ? (t = e.parentNode.children, !t && (t = (0, r.findChildren)(e.parentNode)), n = Array.prototype.indexOf.call(t, e)) : (t = this.textNodes(e.parentNode), n = t.indexOf(e)), n
                    }
                }, {
                    key: 'filteredPosition',
                    value: function(e, t) {
                        var n, a, i;
                        return e.nodeType === l ? (n = e.parentNode.children, i = this.normalizedMap(n, l, t)) : (n = e.parentNode.childNodes, e.parentNode.classList.contains(t) && (e = e.parentNode, n = e.parentNode.childNodes), i = this.normalizedMap(n, s, t)), a = Array.prototype.indexOf.call(n, e), i[a]
                    }
                }, {
                    key: 'stepsToXpath',
                    value: function(e) {
                        var t = ['.', '*'];
                        return e.forEach(function(e) {
                            var n = e.index + 1;
                            e.id ? t.push('*[position()=' + n + ' and @id=\'' + e.id + '\']') : 'text' === e.type ? t.push('text()[' + n + ']') : t.push('*[' + n + ']')
                        }), t.join('/')
                    }
                }, {
                    key: 'stepsToQuerySelector',
                    value: function(e) {
                        var t = ['html'];
                        return e.forEach(function(e) {
                            var n = e.index + 1;
                            e.id ? t.push('#' + e.id) : 'text' === e.type || t.push('*:nth-child(' + n + ')')
                        }), t.join('>')
                    }
                }, {
                    key: 'textNodes',
                    value: function(e, t) {
                        return Array.prototype.slice.call(e.childNodes).filter(function(e) {
                            return e.nodeType === s || t && e.classList.contains(t)
                        })
                    }
                }, {
                    key: 'walkToNode',
                    value: function(e, t, n) {
                        var a = t || document,
                            o = a.documentElement,
                            l = e.length,
                            s, d, c;
                        for (c = 0; c < l && (d = e[c], 'element' === d.type ? d.id ? o = a.getElementById(d.id) : (s = o.children || (0, r.findChildren)(o), o = s[d.index]) : 'text' === d.type && (o = this.textNodes(o, n)[d.index]), !!o); c++);
                        return o
                    }
                }, {
                    key: 'findNode',
                    value: function(e, t, n) {
                        var a = t || document,
                            i, o;
                        return n || 'undefined' == typeof a.evaluate ? n ? i = this.walkToNode(e, a, n) : i = this.walkToNode(e, a) : (o = this.stepsToXpath(e), i = a.evaluate(o, a, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue), i
                    }
                }, {
                    key: 'fixMiss',
                    value: function(e, t, n, a) {
                        var i = this.findNode(e.slice(0, -1), n, a),
                            o = i.childNodes,
                            r = this.normalizedMap(o, s, a),
                            d = e[e.length - 1].index,
                            c, p;
                        for (var u in r) {
                            if (!r.hasOwnProperty(u)) return;
                            if (r[u] === d)
                                if (c = o[u], p = c.textContent.length, t > p) t -= p;
                                else {
                                    i = c.nodeType === l ? c.childNodes[0] : c;
                                    break
                                }
                        }
                        return {
                            container: i,
                            offset: t
                        }
                    }
                }, {
                    key: 'toRange',
                    value: function(e, t) {
                        var n = e || document,
                            a = this,
                            i = !!t && null != n.querySelector('.' + t),
                            o, l, s, d, c, p, u, g;
                        if (o = 'undefined' == typeof n.createRange ? new r.RangeObject : n.createRange(), a.range ? (l = a.start, p = a.path.steps.concat(l.steps), d = this.findNode(p, n, i ? t : null), s = a.end, u = a.path.steps.concat(s.steps), c = this.findNode(u, n, i ? t : null)) : (l = a.path, p = a.path.steps, d = this.findNode(a.path.steps, n, i ? t : null)), d) try {
                            null == l.terminal.offset ? o.setStart(d, 0) : o.setStart(d, l.terminal.offset)
                        } catch (a) {
                            g = this.fixMiss(p, l.terminal.offset, n, i ? t : null), o.setStart(g.container, g.offset)
                        } else return console.log('No startContainer found for', this.toString()), null;
                        if (c) try {
                            null == s.terminal.offset ? o.setEnd(c, 0) : o.setEnd(c, s.terminal.offset)
                        } catch (r) {
                            g = this.fixMiss(u, a.end.terminal.offset, n, i ? t : null), o.setEnd(g.container, g.offset)
                        }
                        return o
                    }
                }, {
                    key: 'isCfiString',
                    value: function(e) {
                        return 'string' == typeof e && 0 === e.indexOf('epubcfi(') && ')' === e[e.length - 1]
                    }
                }, {
                    key: 'generateChapterComponent',
                    value: function(e, t, n) {
                        var a = parseInt(t),
                            i = '/' + 2 * (e + 1) + '/';
                        return i += 2 * (a + 1), n && (i += '[' + n + ']'), i
                    }
                }, {
                    key: 'collapse',
                    value: function(e) {
                        this.range && (this.range = !1, e ? (this.path.steps = this.path.steps.concat(this.start.steps), this.path.terminal = this.start.terminal) : (this.path.steps = this.path.steps.concat(this.end.steps), this.path.terminal = this.end.terminal))
                    }
                }]), e
            }();
        t.default = d, e.exports = t['default']
    }, function(e) {
        var t = e.exports = {
            version: '2.5.0'
        };
        'number' == typeof __e && (__e = t)
    }, function(e, t, n) {
        var a = n(4);
        e.exports = function(e, t) {
            if (!a(e)) return e;
            var n, i;
            if (t && 'function' == typeof(n = e.toString) && !a(i = n.call(e))) return i;
            if ('function' == typeof(n = e.valueOf) && !a(i = n.call(e))) return i;
            if (!t && 'function' == typeof(n = e.toString) && !a(i = n.call(e))) return i;
            throw TypeError('Can\'t convert object to primitive value')
        }
    }, function(e) {
        e.exports = function(e) {
            if (e == void 0) throw TypeError('Can\'t call method on  ' + e);
            return e
        }
    }, function(e) {
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? y : g)(e)
        }
    }, function(e, t, n) {
        var a = n(0),
            i = n(23),
            o = n(3);
        e.exports = function(e, t) {
            var n = (i.Object || {})[e] || Object[e],
                r = {};
            r[e] = t(n), a(a.S + a.F * o(function() {
                n(1)
            }), 'Object', r)
        }
    }, function(e, t, n) {
        var a = n(19),
            i = n(52),
            o = n(10),
            r = n(9),
            l = n(92);
        e.exports = function(e, t) {
            var n = 1 == e,
                s = 4 == e,
                d = 6 == e,
                c = t || l;
            return function(t, l, p) {
                for (var u = o(t), g = i(u), h = a(l, p, 3), m = r(g.length), f = 0, y = n ? c(t, m) : 2 == e ? c(t, 0) : void 0, v, b; m > f; f++)
                    if ((5 == e || d || f in g) && (v = g[f], b = h(v, f, u), e))
                        if (n) y[f] = b;
                        else if (b) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return v;
                    case 6:
                        return f;
                    case 2:
                        y.push(v);
                } else if (s) return !1;
                return d ? -1 : 3 == e || s ? s : y
            }
        }
    }, function(e, t, n) {
        'use strict';
        if (n(7)) {
            var a = n(38),
                i = n(2),
                o = n(3),
                r = n(0),
                l = n(66),
                s = n(98),
                d = n(19),
                c = n(43),
                p = n(36),
                g = n(13),
                h = n(45),
                m = n(26),
                f = n(9),
                v = n(131),
                b = n(39),
                x = n(24),
                E = n(12),
                k = n(54),
                _ = n(4),
                S = n(10),
                N = n(89),
                w = n(40),
                T = n(18),
                C = n(41).f,
                R = n(91),
                P = n(37),
                O = n(5),
                A = n(28),
                I = n(56),
                L = n(64),
                D = n(94),
                M = n(48),
                B = n(61),
                F = n(42),
                z = n(93),
                j = n(121),
                q = n(8),
                U = n(17),
                V = q.f,
                W = U.f,
                H = i.RangeError,
                G = i.TypeError,
                Y = i.Uint8Array,
                K = 'ArrayBuffer',
                X = 'Shared' + K,
                $ = 'BYTES_PER_ELEMENT',
                Z = 'prototype',
                J = Array[Z],
                Q = s.ArrayBuffer,
                ee = s.DataView,
                te = A(0),
                ne = A(2),
                ae = A(3),
                ie = A(4),
                oe = A(5),
                re = A(6),
                le = I(!0),
                se = I(!1),
                de = D.values,
                ce = D.keys,
                pe = D.entries,
                ue = J.lastIndexOf,
                ge = J.reduce,
                he = J.reduceRight,
                me = J.join,
                fe = J.sort,
                ye = J.slice,
                ve = J.toString,
                be = J.toLocaleString,
                xe = O('iterator'),
                Ee = O('toStringTag'),
                ke = P('typed_constructor'),
                _e = P('def_constructor'),
                Se = l.CONSTR,
                Ne = l.TYPED,
                we = l.VIEW,
                Te = 'Wrong length!',
                Ce = A(1, function(e, t) {
                    return Ie(L(e, e[_e]), t)
                }),
                Re = o(function() {
                    return 1 === new Y(new Uint16Array([1]).buffer)[0]
                }),
                Pe = !!Y && !!Y[Z].set && o(function() {
                    new Y(1).set({})
                }),
                Oe = function(e, t) {
                    var n = m(e);
                    if (0 > n || n % t) throw H('Wrong offset!');
                    return n
                },
                Ae = function(e) {
                    if (_(e) && Ne in e) return e;
                    throw G(e + ' is not a typed array!')
                },
                Ie = function(e, t) {
                    if (!(_(e) && ke in e)) throw G('It is not a typed array constructor!');
                    return new e(t)
                },
                Le = function(e, t) {
                    return De(L(e, e[_e]), t)
                },
                De = function(e, t) {
                    for (var n = 0, a = t.length, i = Ie(e, a); a > n;) i[n] = t[n++];
                    return i
                },
                Me = function(e, t, n) {
                    V(e, t, {
                        get: function() {
                            return this._d[n]
                        }
                    })
                },
                Be = function(e) {
                    var t = S(e),
                        n = arguments.length,
                        a = 1 < n ? arguments[1] : void 0,
                        o = a !== void 0,
                        r = R(t),
                        l, i, s, c, p, u;
                    if (r != void 0 && !N(r)) {
                        for (u = r.call(t), s = [], l = 0; !(p = u.next()).done; l++) s.push(p.value);
                        t = s
                    }
                    for (o && 2 < n && (a = d(a, arguments[2], 2)), l = 0, i = f(t.length), c = Ie(this, i); i > l; l++) c[l] = o ? a(t[l], l) : t[l];
                    return c
                },
                Fe = function() {
                    for (var e = 0, t = arguments.length, n = Ie(this, t); t > e;) n[e] = arguments[e++];
                    return n
                },
                ze = !!Y && o(function() {
                    be.call(new Y(1))
                }),
                je = function() {
                    return be.apply(ze ? ye.call(Ae(this)) : Ae(this), arguments)
                },
                qe = {
                    copyWithin: function(e, t) {
                        return j.call(Ae(this), e, t, 2 < arguments.length ? arguments[2] : void 0)
                    },
                    every: function(e) {
                        return ie(Ae(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    fill: function() {
                        return z.apply(Ae(this), arguments)
                    },
                    filter: function(e) {
                        return Le(this, ne(Ae(this), e, 1 < arguments.length ? arguments[1] : void 0))
                    },
                    find: function(e) {
                        return oe(Ae(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    findIndex: function(e) {
                        return re(Ae(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    forEach: function(e) {
                        te(Ae(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    indexOf: function(e) {
                        return se(Ae(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    includes: function(e) {
                        return le(Ae(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    join: function() {
                        return me.apply(Ae(this), arguments)
                    },
                    lastIndexOf: function() {
                        return ue.apply(Ae(this), arguments)
                    },
                    map: function(e) {
                        return Ce(Ae(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    reduce: function() {
                        return ge.apply(Ae(this), arguments)
                    },
                    reduceRight: function() {
                        return he.apply(Ae(this), arguments)
                    },
                    reverse: function() {
                        for (var e = this, t = Ae(e).length, n = y(t / 2), a = 0, i; a < n;) i = e[a], e[a++] = e[--t], e[t] = i;
                        return e
                    },
                    some: function(e) {
                        return ae(Ae(this), e, 1 < arguments.length ? arguments[1] : void 0)
                    },
                    sort: function(e) {
                        return fe.call(Ae(this), e)
                    },
                    subarray: function(e, t) {
                        var n = Ae(this),
                            a = n.length,
                            i = b(e, a);
                        return new(L(n, n[_e]))(n.buffer, n.byteOffset + i * n.BYTES_PER_ELEMENT, f((t === void 0 ? a : b(t, a)) - i))
                    }
                },
                Ue = function(e, t) {
                    return Le(this, ye.call(Ae(this), e, t))
                },
                Ve = function(e) {
                    Ae(this);
                    var t = Oe(arguments[1], 1),
                        n = this.length,
                        a = S(e),
                        i = f(a.length),
                        o = 0;
                    if (i + t > n) throw H(Te);
                    for (; o < i;) this[t + o] = a[o++]
                },
                We = {
                    entries: function() {
                        return pe.call(Ae(this))
                    },
                    keys: function() {
                        return ce.call(Ae(this))
                    },
                    values: function() {
                        return de.call(Ae(this))
                    }
                },
                He = function(e, t) {
                    return _(e) && e[Ne] && 'symbol' != typeof t && t in e && +t + '' == t + ''
                },
                Ge = function(e, t) {
                    return He(e, t = x(t, !0)) ? p(2, e[t]) : W(e, t)
                },
                Ye = function(e, t, n) {
                    return He(e, t = x(t, !0)) && _(n) && E(n, 'value') && !E(n, 'get') && !E(n, 'set') && !n.configurable && (!E(n, 'writable') || n.writable) && (!E(n, 'enumerable') || n.enumerable) ? (e[t] = n.value, e) : V(e, t, n)
                };
            Se || (U.f = Ge, q.f = Ye), r(r.S + r.F * !Se, 'Object', {
                getOwnPropertyDescriptor: Ge,
                defineProperty: Ye
            }), o(function() {
                ve.call({})
            }) && (ve = be = function() {
                return me.call(this)
            });
            var Ke = h({}, qe);
            h(Ke, We), g(Ke, xe, We.values), h(Ke, {
                slice: Ue,
                set: Ve,
                constructor: function() {},
                toString: ve,
                toLocaleString: je
            }), Me(Ke, 'buffer', 'b'), Me(Ke, 'byteOffset', 'o'), Me(Ke, 'byteLength', 'l'), Me(Ke, 'length', 'e'), V(Ke, Ee, {
                get: function() {
                    return this[Ne]
                }
            }), e.exports = function(e, t, n, s) {
                s = !!s;
                var d = e + (s ? 'Clamped' : '') + 'Array',
                    p = i[d],
                    h = p || {},
                    m = p && T(p),
                    y = !p || !l.ABV,
                    b = {},
                    x = p && p[Z],
                    E = function(n, a) {
                        var i = n._d;
                        return i.v['get' + e](a * t + i.o, Re)
                    },
                    S = function(n, a, i) {
                        var o = n._d;
                        s && (i = 0 > (i = u(i)) ? 0 : 255 < i ? 255 : 255 & i), o.v['set' + e](a * t + o.o, i, Re)
                    },
                    N = function(e, t) {
                        V(e, t, {
                            get: function() {
                                return E(this, t)
                            },
                            set: function(e) {
                                return S(this, t, e)
                            },
                            enumerable: !0
                        })
                    };
                y ? (p = n(function(e, n, a, i) {
                    c(e, p, d, '_d');
                    var o = 0,
                        r = 0,
                        l, s, u, h;
                    if (!_(n)) u = v(n), s = u * t, l = new Q(s);
                    else if (n instanceof Q || (h = k(n)) == K || h == X) {
                        l = n, r = Oe(a, t);
                        var m = n.byteLength;
                        if (void 0 === i) {
                            if (m % t) throw H(Te);
                            if (s = m - r, 0 > s) throw H(Te)
                        } else if (s = f(i) * t, s + r > m) throw H(Te);
                        u = s / t
                    } else return Ne in n ? De(p, n) : Be.call(p, n);
                    for (g(e, '_d', {
                            b: l,
                            o: r,
                            l: s,
                            e: u,
                            v: new ee(l)
                        }); o < u;) N(e, o++)
                }), x = p[Z] = w(Ke), g(x, 'constructor', p)) : (!o(function() {
                    p(1)
                }) || !o(function() {
                    new p(-1)
                }) || !B(function(e) {
                    new p, new p(null), new p(1.5), new p(e)
                }, !0)) && (p = n(function(e, n, a, i) {
                    c(e, p, d);
                    var o;
                    return _(n) ? n instanceof Q || (o = k(n)) == K || o == X ? void 0 === i ? void 0 === a ? new h(n) : new h(n, Oe(a, t)) : new h(n, Oe(a, t), i) : Ne in n ? De(p, n) : Be.call(p, n) : new h(v(n))
                }), te(m === Function.prototype ? C(h) : C(h).concat(C(m)), function(e) {
                    e in p || g(p, e, h[e])
                }), p[Z] = x, !a && (x.constructor = p));
                var R = x[xe],
                    P = !!R && ('values' == R.name || R.name == void 0),
                    O = We.values;
                g(p, ke, !0), g(x, Ne, d), g(x, we, !0), g(x, _e, p), (s ? new p(1)[Ee] != d : !(Ee in x)) && V(x, Ee, {
                    get: function() {
                        return d
                    }
                }), b[d] = p, r(r.G + r.W + r.F * (p != h), b), r(r.S, d, {
                    BYTES_PER_ELEMENT: t
                }), r(r.S + r.F * o(function() {
                    h.of.call(p, 1)
                }), d, {
                    from: Be,
                    of: Fe
                }), $ in x || g(x, $, t), r(r.P, d, qe), F(d), r(r.P + r.F * Pe, d, {
                    set: Ve
                }), r(r.P + r.F * !P, d, We), a || x.toString == ve || (x.toString = ve), r(r.P + r.F * o(function() {
                    new p(1).slice()
                }), d, {
                    slice: Ue
                }), r(r.P + r.F * (o(function() {
                    return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
                }) || !o(function() {
                    x.toLocaleString.call([1, 2])
                })), d, {
                    toLocaleString: je
                }), M[d] = P ? R : O, a || P || g(x, xe, O)
            }
        } else e.exports = function() {}
    }, function(e, t, n) {
        var a = n(126),
            i = n(0),
            o = n(55)('metadata'),
            r = o.store || (o.store = new(n(129))),
            l = function(e, t, n) {
                var i = r.get(e);
                if (!i) {
                    if (!n) return;
                    r.set(e, i = new a)
                }
                var o = i.get(t);
                if (!o) {
                    if (!n) return;
                    i.set(t, o = new a)
                }
                return o
            };
        e.exports = {
            store: r,
            map: l,
            has: function(e, t, n) {
                var a = l(t, n, !1);
                return a !== void 0 && a.has(e)
            },
            get: function(e, t, n) {
                var a = l(t, n, !1);
                return a === void 0 ? void 0 : a.get(e)
            },
            set: function(e, t, n, a) {
                l(n, a, !0).set(e, t)
            },
            keys: function(e, t) {
                var n = l(e, t, !1),
                    a = [];
                return n && n.forEach(function(e, t) {
                    a.push(t)
                }), a
            },
            key: function(e) {
                return e === void 0 || 'symbol' == typeof e ? e : e + ''
            },
            exp: function(e) {
                i(i.S, 'Reflect', e)
            }
        }
    }, function(e, t) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var n = t.EPUBJS_VERSION = '0.3',
            a = t.DOM_EVENTS = ['keydown', 'keyup', 'keypressed', 'mouseup', 'mousedown', 'click', 'touchend', 'touchstart'],
            i = t.EVENTS = {
                BOOK: {
                    OPEN_FAILED: 'openFailed'
                },
                CONTENTS: {
                    EXPAND: 'expand',
                    RESIZE: 'resize',
                    SELECTED: 'selected',
                    SELECTED_RANGE: 'selectedRange',
                    LINK_CLICKED: 'linkClicked'
                },
                LOCATIONS: {
                    CHANGED: 'changed'
                },
                MANAGERS: {
                    RESIZE: 'resize',
                    RESIZED: 'resized',
                    ORIENTATION_CHANGE: 'orientationchange',
                    ADDED: 'added',
                    SCROLL: 'scroll',
                    SCROLLED: 'scrolled',
                    REMOVED: 'removed'
                },
                VIEWS: {
                    AXIS: 'axis',
                    LOAD_ERROR: 'loaderror',
                    RENDERED: 'rendered',
                    RESIZED: 'resized',
                    DISPLAYED: 'displayed',
                    SHOWN: 'shown',
                    HIDDEN: 'hidden',
                    MARK_CLICKED: 'markClicked'
                },
                RENDITION: {
                    STARTED: 'started',
                    ATTACHED: 'attached',
                    DISPLAYED: 'displayed',
                    DISPLAY_ERROR: 'displayerror',
                    RENDERED: 'rendered',
                    REMOVED: 'removed',
                    RESIZED: 'resized',
                    ORIENTATION_CHANGE: 'orientationchange',
                    LOCATION_CHANGED: 'locationChanged',
                    RELOCATED: 'relocated',
                    MARK_CLICKED: 'markClicked',
                    SELECTED: 'selected',
                    LAYOUT: 'layout'
                },
                LAYOUT: {
                    UPDATED: 'updated'
                }
            }
    }, function(e, t, n) {
        var a = n(37)('meta'),
            i = n(4),
            o = n(12),
            r = n(8).f,
            l = 0,
            s = Object.isExtensible || function() {
                return !0
            },
            d = !n(3)(function() {
                return s(Object.preventExtensions({}))
            }),
            c = function(e) {
                r(e, a, {
                    value: {
                        i: 'O' + ++l,
                        w: {}
                    }
                })
            },
            p = e.exports = {
                KEY: a,
                NEED: !1,
                fastKey: function(e, t) {
                    if (!i(e)) return 'symbol' == typeof e ? e : ('string' == typeof e ? 'S' : 'P') + e;
                    if (!o(e, a)) {
                        if (!s(e)) return 'F';
                        if (!t) return 'E';
                        c(e)
                    }
                    return e[a].i
                },
                getWeak: function(e, t) {
                    if (!o(e, a)) {
                        if (!s(e)) return !0;
                        if (!t) return !1;
                        c(e)
                    }
                    return e[a].w
                },
                onFreeze: function(e) {
                    return d && p.NEED && s(e) && !o(e, a) && c(e), e
                }
            }
    }, function(e, t, n) {
        var a = n(108),
            i = n(76);
        e.exports = Object.keys || function(e) {
            return a(e, i)
        }
    }, function(e, t, n) {
        var a = n(5)('unscopables'),
            i = Array.prototype;
        i[a] == void 0 && n(13)(i, a, {}), e.exports = function(e) {
            i[a][e] = !0
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(356),
            o = n(370),
            r = Function.prototype.apply,
            s = Function.prototype.call,
            i = Object.create,
            l = Object.defineProperty,
            d = Object.defineProperties,
            c = Object.prototype.hasOwnProperty,
            p = {
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            u, g, h, m, f, y, v;
        u = function(e, t) {
            var n;
            return o(t), c.call(this, '__ee__') ? n = this.__ee__ : (n = p.value = i(null), l(this, '__ee__', p), p.value = null), n[e] ? 'object' == typeof n[e] ? n[e].push(t) : n[e] = [n[e], t] : n[e] = t, this
        }, g = function(e, t) {
            var n, a;
            return o(t), a = this, u.call(this, e, n = function() {
                h.call(a, e, n), r.call(t, this, arguments)
            }), n.__eeOnceListener__ = t, this
        }, h = function(e, t) {
            var n, a, r, l;
            if (o(t), !c.call(this, '__ee__')) return this;
            if (n = this.__ee__, !n[e]) return this;
            if (a = n[e], 'object' == typeof a)
                for (l = 0; r = a[l]; ++l)(r === t || r.__eeOnceListener__ === t) && (2 === a.length ? n[e] = a[l ? 0 : 1] : a.splice(l, 1));
            else(a === t || a.__eeOnceListener__ === t) && delete n[e];
            return this
        }, m = function(e) {
            var t, n, a, i, o;
            if (c.call(this, '__ee__') && (i = this.__ee__[e], !!i))
                if ('object' == typeof i) {
                    for (n = arguments.length, o = Array(n - 1), t = 1; t < n; ++t) o[t - 1] = arguments[t];
                    for (i = i.slice(), t = 0; a = i[t]; ++t) r.call(a, this, o)
                } else switch (arguments.length) {
                    case 1:
                        s.call(i, this);
                        break;
                    case 2:
                        s.call(i, this, arguments[1]);
                        break;
                    case 3:
                        s.call(i, this, arguments[1], arguments[2]);
                        break;
                    default:
                        for (n = arguments.length, o = Array(n - 1), t = 1; t < n; ++t) o[t - 1] = arguments[t];
                        r.call(i, this, o);
                }
        }, f = {
            on: u,
            once: g,
            off: h,
            emit: m
        }, y = {
            on: a(u),
            once: a(g),
            off: a(h),
            emit: a(m)
        }, v = d({}, y), e.exports = t = function(e) {
            return null == e ? i(v) : d(Object(e), y)
        }, t.methods = f
    }, function(e) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }, function(e) {
        var t = 0,
            n = Math.random();
        e.exports = function(e) {
            return 'Symbol('.concat(e === void 0 ? '' : e, ')_', (++t + n).toString(36))
        }
    }, function(e) {
        e.exports = !1
    }, function(e, t, n) {
        var a = n(26);
        e.exports = function(e, t) {
            return e = a(e), 0 > e ? m(e + t, 0) : h(e, t)
        }
    }, function(e, t, n) {
        var a = n(1),
            i = n(109),
            o = n(76),
            r = n(75)('IE_PROTO'),
            l = function() {},
            s = 'prototype',
            d = function() {
                var e = n(73)('iframe'),
                    t = o.length,
                    a = '<',
                    i = '>',
                    r;
                for (e.style.display = 'none', n(77).appendChild(e), e.src = 'javascript:', r = e.contentWindow.document, r.open(), r.write(a + 'script' + i + 'document.F=Object' + a + '/script' + i), r.close(), d = r.F; t--;) delete d[s][o[t]];
                return d()
            };
        e.exports = Object.create || function(e, t) {
            var n;
            return null === e ? n = d() : (l[s] = a(e), n = new l, l[s] = null, n[r] = e), void 0 === t ? n : i(n, t)
        }
    }, function(e, t, n) {
        var a = n(108),
            i = n(76).concat('length', 'prototype');
        t.f = Object.getOwnPropertyNames || function(e) {
            return a(e, i)
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(2),
            i = n(8),
            o = n(7),
            r = n(5)('species');
        e.exports = function(e) {
            var t = a[e];
            o && t && !t[r] && i.f(t, r, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }, function(e) {
        e.exports = function(e, t, n, a) {
            if (!(e instanceof t) || a !== void 0 && a in e) throw TypeError(n + ': incorrect invocation!');
            return e
        }
    }, function(e, t, n) {
        var a = n(19),
            i = n(119),
            o = n(89),
            r = n(1),
            l = n(9),
            s = n(91),
            d = {},
            c = {},
            t = e.exports = function(e, t, n, p, u) {
                var g = u ? function() {
                        return e
                    } : s(e),
                    h = a(n, p, t ? 2 : 1),
                    m = 0,
                    f, y, v, b;
                if ('function' != typeof g) throw TypeError(e + ' is not iterable!');
                if (o(g)) {
                    for (f = l(e.length); f > m; m++)
                        if (b = t ? h(r(y = e[m])[0], y[1]) : h(e[m]), b === d || b === c) return b;
                } else
                    for (v = g.call(e); !(y = v.next()).done;)
                        if (b = i(v, h, y.value, t), b === d || b === c) return b
            };
        t.BREAK = d, t.RETURN = c
    }, function(e, t, n) {
        var a = n(14);
        e.exports = function(e, t, n) {
            for (var i in t) a(e, i, t[i], n);
            return e
        }
    }, function(e, t, n) {
        var a = n(8).f,
            i = n(12),
            o = n(5)('toStringTag');
        e.exports = function(e, t, n) {
            e && !i(e = n ? e : e.prototype, o) && a(e, o, {
                configurable: !0,
                value: t
            })
        }
    }, function(e, t, n) {
        var a = n(0),
            i = n(25),
            o = n(3),
            r = n(79),
            l = '[' + r + ']',
            s = '\u200B\x85',
            d = RegExp('^' + l + l + '*'),
            c = RegExp(l + l + '*$'),
            p = function(e, t, n) {
                var i = {},
                    l = o(function() {
                        return !!r[e]() || s[e]() != s
                    }),
                    d = i[e] = l ? t(u) : r[e];
                n && (i[n] = d), a(a.P + a.F * l, 'String', i)
            },
            u = p.trim = function(e, t) {
                return e = i(e) + '', 1 & t && (e = e.replace(d, '')), 2 & t && (e = e.replace(c, '')), e
            };
        e.exports = p
    }, function(e) {
        e.exports = {}
    }, function(e, t, n) {
        var a = n(4);
        e.exports = function(e, t) {
            if (!a(e) || e._t !== t) throw TypeError('Incompatible receiver, ' + t + ' required!');
            return e
        }
    }, function(e, t, n) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            o = n(71),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o),
            l = function() {
                function e(t) {
                    a(this, e);
                    var n, i;
                    n = t.indexOf('://'), -1 < n && (t = new URL(t).pathname), i = this.parse(t), this.path = t, this.directory = this.isDirectory(t) ? t : i.dir + '/', this.filename = i.base, this.extension = i.ext.slice(1)
                }
                return i(e, [{
                    key: 'parse',
                    value: function(e) {
                        return r.default.parse(e)
                    }
                }, {
                    key: 'isAbsolute',
                    value: function(e) {
                        return r.default.isAbsolute(e || this.path)
                    }
                }, {
                    key: 'isDirectory',
                    value: function(e) {
                        return '/' === e.charAt(e.length - 1)
                    }
                }, {
                    key: 'resolve',
                    value: function(e) {
                        return r.default.resolve(this.directory, e)
                    }
                }, {
                    key: 'relative',
                    value: function(e) {
                        return r.default.relative(this.directory, e)
                    }
                }, {
                    key: 'splitPath',
                    value: function(e) {
                        return this.splitPathRe.exec(e).slice(1)
                    }
                }, {
                    key: 'toString',
                    value: function() {
                        return this.path
                    }
                }]), e
            }();
        t.default = l, e.exports = t['default']
    }, function(e) {
        var t = function() {
            return this
        }();
        try {
            t = t || Function('return this')() || (1, eval)('this')
        } catch (n) {
            'object' == typeof window && (t = window)
        }
        e.exports = t
    }, function(e, t, n) {
        var a = n(20);
        e.exports = Object('z').propertyIsEnumerable(0) ? Object : function(e) {
            return 'String' == a(e) ? e.split('') : Object(e)
        }
    }, function(e, t) {
        t.f = {}.propertyIsEnumerable
    }, function(e, t, n) {
        var a = n(20),
            i = n(5)('toStringTag'),
            o = 'Arguments' == a(function() {
                return arguments
            }()),
            r = function(e, t) {
                try {
                    return e[t]
                } catch (t) {}
            };
        e.exports = function(e) {
            var t, n, l;
            return e === void 0 ? 'Undefined' : null === e ? 'Null' : 'string' == typeof(n = r(t = Object(e), i)) ? n : o ? a(t) : 'Object' == (l = a(t)) && 'function' == typeof t.callee ? 'Arguments' : l
        }
    }, function(e, t, n) {
        var a = n(2),
            i = '__core-js_shared__',
            o = a[i] || (a[i] = {});
        e.exports = function(e) {
            return o[e] || (o[e] = {})
        }
    }, function(e, t, n) {
        var a = n(15),
            i = n(9),
            o = n(39);
        e.exports = function(e) {
            return function(t, n, r) {
                var l = a(t),
                    s = i(l.length),
                    d = o(r, s),
                    c;
                if (e && n != n) {
                    for (; s > d;)
                        if (c = l[d++], c != c) return !0;
                } else
                    for (; s > d; d++)
                        if ((e || d in l) && l[d] === n) return e || d || 0; return !e && -1
            }
        }
    }, function(e, t) {
        t.f = Object.getOwnPropertySymbols
    }, function(e, t, n) {
        var a = n(20);
        e.exports = Array.isArray || function(e) {
            return 'Array' == a(e)
        }
    }, function(e) {
        e.exports = function(e, t, n) {
            var a = n === void 0;
            switch (t.length) {
                case 0:
                    return a ? e() : e.call(n);
                case 1:
                    return a ? e(t[0]) : e.call(n, t[0]);
                case 2:
                    return a ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                case 3:
                    return a ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                case 4:
                    return a ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
            }
            return e.apply(n, t)
        }
    }, function(e, t, n) {
        var a = n(4),
            i = n(20),
            o = n(5)('match');
        e.exports = function(e) {
            var t;
            return a(e) && ((t = e[o]) === void 0 ? 'RegExp' == i(e) : !!t)
        }
    }, function(e, t, n) {
        var a = n(5)('iterator'),
            i = !1;
        try {
            var o = [7][a]();
            o['return'] = function() {
                i = !0
            }, Array.from(o, function() {
                throw 2
            })
        } catch (t) {}
        e.exports = function(e, t) {
            if (!t && !i) return !1;
            var n = !1;
            try {
                var o = [7],
                    r = o[a]();
                r.next = function() {
                    return {
                        done: n = !0
                    }
                }, o[a] = function() {
                    return r
                }, e(o)
            } catch (t) {}
            return n
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(1);
        e.exports = function() {
            var e = a(this),
                t = '';
            return e.global && (t += 'g'), e.ignoreCase && (t += 'i'), e.multiline && (t += 'm'), e.unicode && (t += 'u'), e.sticky && (t += 'y'), t
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(13),
            i = n(14),
            o = n(3),
            r = n(25),
            l = n(5);
        e.exports = function(e, t, n) {
            var s = l(e),
                d = n(r, s, '' [e]),
                c = d[0],
                p = d[1];
            o(function() {
                var t = {};
                return t[s] = function() {
                    return 7
                }, 7 != '' [e](t)
            }) && (i(String.prototype, e, c), a(RegExp.prototype, s, 2 == t ? function(e, t) {
                return p.call(e, this, t)
            } : function(e) {
                return p.call(e, this)
            }))
        }
    }, function(e, t, n) {
        var a = n(1),
            i = n(11),
            o = n(5)('species');
        e.exports = function(e, t) {
            var n = a(e).constructor,
                r;
            return n === void 0 || (r = a(n)[o]) == void 0 ? t : i(r)
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(2),
            i = n(0),
            o = n(14),
            r = n(45),
            l = n(32),
            s = n(44),
            d = n(43),
            c = n(4),
            p = n(3),
            u = n(61),
            g = n(46),
            h = n(80);
        e.exports = function(e, t, n, m, f, y) {
            var v = a[e],
                b = v,
                x = f ? 'set' : 'add',
                E = b && b.prototype,
                k = {},
                _ = function(e) {
                    var t = E[e];
                    o(E, e, 'delete' == e ? function(e) {
                        return y && !c(e) ? !1 : t.call(this, 0 === e ? 0 : e)
                    } : 'has' == e ? function(e) {
                        return y && !c(e) ? !1 : t.call(this, 0 === e ? 0 : e)
                    } : 'get' == e ? function(e) {
                        return y && !c(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                    } : 'add' == e ? function(e) {
                        return t.call(this, 0 === e ? 0 : e), this
                    } : function(e, n) {
                        return t.call(this, 0 === e ? 0 : e, n), this
                    })
                };
            if ('function' != typeof b || !(y || E.forEach && !p(function() {
                    new b().entries().next()
                }))) b = m.getConstructor(t, e, f, x), r(b.prototype, n), l.NEED = !0;
            else {
                var S = new b,
                    N = S[x](y ? {} : -0, 1) != S,
                    w = p(function() {
                        S.has(1)
                    }),
                    T = u(function(e) {
                        new b(e)
                    }),
                    R = !y && p(function() {
                        for (var e = new b, t = 5; t--;) e[x](t, t);
                        return !e.has(-0)
                    });
                T || (b = t(function(t, n) {
                    d(t, b, e);
                    var a = h(new v, t, b);
                    return void 0 != n && s(n, f, a[x], a), a
                }), b.prototype = E, E.constructor = b), (w || R) && (_('delete'), _('has'), f && _('get')), (R || N) && _(x), y && E.clear && delete E.clear
            }
            return g(b, e), k[e] = b, i(i.G + i.W + i.F * (b != v), k), y || m.setStrong(b, e, f), b
        }
    }, function(e, t, n) {
        for (var a = n(2), o = n(13), r = n(37), l = r('typed_array'), s = r('view'), d = !!(a.ArrayBuffer && a.DataView), c = d, p = 0, i = ['Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float32Array', 'Float64Array'], u; p < 9;)(u = a[i[p++]]) ? (o(u.prototype, l, !0), o(u.prototype, s, !0)) : c = !1;
        e.exports = {
            ABV: d,
            CONSTR: c,
            TYPED: l,
            VIEW: s
        }
    }, function(e, t, n) {
        'use strict';
        e.exports = n(38) || !n(3)(function() {
            var e = Math.random();
            __defineSetter__.call(null, e, function() {}), delete n(2)[e]
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0);
        e.exports = function(e) {
            a(a.S, e, {
                of: function() {
                    for (var e = arguments.length, t = Array(e); e--;) t[e] = arguments[e];
                    return new this(t)
                }
            })
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(11),
            o = n(19),
            r = n(44);
        e.exports = function(e) {
            a(a.S, e, {
                from: function(e) {
                    var t = arguments[1],
                        a, l, s, n;
                    return (i(this), a = void 0 !== t, a && i(t), void 0 == e) ? new this : (l = [], a ? (s = 0, n = o(t, arguments[2], 2), r(e, !1, function(e) {
                        l.push(n(e, s++))
                    })) : r(e, !1, l.push, l), new this(l))
                }
            })
        }
    }, function(e, t, n) {
        'use strict';

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            r = n(50),
            l = a(r),
            s = n(71),
            d = a(s),
            c = function() {
                function e(t, n) {
                    i(this, e);
                    var a = -1 < t.indexOf('://'),
                        o = t,
                        r;
                    if (this.Url = void 0, this.href = t, this.protocol = '', this.origin = '', this.hash = '', this.hash = '', this.search = '', this.base = n, !a && !1 !== n && 'string' != typeof n && window && window.location && (this.base = window.location.href), a || this.base) try {
                        this.Url = this.base ? new URL(t, this.base) : new URL(t), this.href = this.Url.href, this.protocol = this.Url.protocol, this.origin = this.Url.origin, this.hash = this.Url.hash, this.search = this.Url.search, o = this.Url.pathname
                    } catch (t) {
                        this.Url = void 0, this.base && (r = new l.default(this.base), o = r.resolve(o))
                    }
                    this.Path = new l.default(o), this.directory = this.Path.directory, this.filename = this.Path.filename, this.extension = this.Path.extension
                }
                return o(e, [{
                    key: 'path',
                    value: function() {
                        return this.Path
                    }
                }, {
                    key: 'resolve',
                    value: function(e) {
                        var t = -1 < e.indexOf('://'),
                            n;
                        return t ? e : (n = d.default.resolve(this.directory, e), this.origin + n)
                    }
                }, {
                    key: 'relative',
                    value: function(e) {
                        return d.default.relative(e, this.directory)
                    }
                }, {
                    key: 'toString',
                    value: function() {
                        return this.href
                    }
                }]), e
            }();
        t.default = c, e.exports = t['default']
    }, function(e) {
        'use strict';

        function t(e) {
            if ('string' != typeof e) throw new TypeError('Path must be a string. Received ' + e)
        }

        function n(e, t) {
            for (var n = '', a = -1, o = 0, r = 0, i; r <= e.length; ++r) {
                if (r < e.length) i = e.charCodeAt(r);
                else if (47 === i) break;
                else i = 47;
                if (47 === i) {
                    if (a == r - 1 || 1 == o);
                    else if (a != r - 1 && 2 == o) {
                        if (2 > n.length || 46 !== n.charCodeAt(n.length - 1) || 46 !== n.charCodeAt(n.length - 2))
                            if (2 < n.length) {
                                for (var l = n.length - 1, s = l; 0 <= s && 47 !== n.charCodeAt(s); --s);
                                if (s != l) {
                                    n = -1 == s ? '' : n.slice(0, s), a = r, o = 0;
                                    continue
                                }
                            } else if (2 === n.length || 1 === n.length) {
                            n = '', a = r, o = 0;
                            continue
                        }
                        t && (0 < n.length ? n += '/..' : n = '..')
                    } else 0 < n.length ? n += '/' + e.slice(a + 1, r) : n = e.slice(a + 1, r);
                    a = r, o = 0
                } else 46 === i && -1 != o ? ++o : o = -1
            }
            return n
        }

        function a(e, t) {
            var n = t.dir || t.root,
                a = t.base || (t.name || '') + (t.ext || '');
            return n ? n === t.root ? n + a : n + e + a : a
        }
        if (!o) var o = {
            cwd: function() {
                return '/'
            }
        };
        var r = {
            resolve: function() {
                for (var e = '', a = !1, r = arguments.length - 1, i; - 1 <= r && !a; r--) {
                    var l;
                    (0 <= r ? l = arguments[r] : (void 0 == i && (i = o.cwd()), l = i), t(l), 0 !== l.length) && (e = l + '/' + e, a = 47 === l.charCodeAt(0))
                }
                return e = n(e, !a), a ? 0 < e.length ? '/' + e : '/' : 0 < e.length ? e : '.'
            },
            normalize: function(e) {
                if (t(e), 0 === e.length) return '.';
                var a = 47 === e.charCodeAt(0),
                    i = 47 === e.charCodeAt(e.length - 1);
                return e = n(e, !a), 0 !== e.length || a || (e = '.'), 0 < e.length && i && (e += '/'), a ? '/' + e : e
            },
            isAbsolute: function(e) {
                return t(e), 0 < e.length && 47 === e.charCodeAt(0)
            },
            join: function() {
                if (0 === arguments.length) return '.';
                for (var e = 0, n, a; e < arguments.length; ++e) a = arguments[e], t(a), 0 < a.length && (void 0 == n ? n = a : n += '/' + a);
                return void 0 === n ? '.' : r.normalize(n)
            },
            relative: function(e, n) {
                if (t(e), t(n), e === n) return '';
                if (e = r.resolve(e), n = r.resolve(n), e === n) return '';
                for (var a = 1; a < e.length && 47 === e.charCodeAt(a); ++a);
                for (var o = e.length, l = o - a, s = 1; s < n.length && 47 === n.charCodeAt(s); ++s);
                for (var d = n.length, c = d - s, p = l < c ? l : c, u = -1, g = 0; g <= p; ++g) {
                    if (g == p) {
                        if (c > p) {
                            if (47 === n.charCodeAt(s + g)) return n.slice(s + g + 1);
                            if (0 == g) return n.slice(s + g)
                        } else l > p && (47 === e.charCodeAt(a + g) ? u = g : 0 == g && (u = 0));
                        break
                    }
                    var i = e.charCodeAt(a + g),
                        h = n.charCodeAt(s + g);
                    if (i !== h) break;
                    else 47 === i && (u = g)
                }
                var m = '';
                for (g = a + u + 1; g <= o; ++g)(g === o || 47 === e.charCodeAt(g)) && (m += 0 === m.length ? '..' : '/..');
                return 0 < m.length ? m + n.slice(s + u) : (s += u, 47 === n.charCodeAt(s) && ++s, n.slice(s))
            },
            _makeLong: function(e) {
                return e
            },
            dirname: function(e) {
                if (t(e), 0 === e.length) return '.';
                for (var n = e.charCodeAt(0), a = 47 === n, o = -1, r = !0, l = e.length - 1; 1 <= l; --l)
                    if (n = e.charCodeAt(l), 47 !== n) r = !1;
                    else if (!r) {
                    o = l;
                    break
                }
                return -1 === o ? a ? '/' : '.' : a && 1 === o ? '//' : e.slice(0, o)
            },
            basename: function(e, n) {
                if (n !== void 0 && 'string' != typeof n) throw new TypeError('"ext" argument must be a string');
                t(e);
                var a = 0,
                    o = -1,
                    r = !0,
                    l;
                if (void 0 !== n && 0 < n.length && n.length <= e.length) {
                    if (n.length === e.length && n === e) return '';
                    var i = n.length - 1,
                        s = -1;
                    for (l = e.length - 1; 0 <= l; --l) {
                        var d = e.charCodeAt(l);
                        if (47 !== d) - 1 == s && (r = !1, s = l + 1), 0 <= i && (d === n.charCodeAt(i) ? -1 == --i && (o = l) : (i = -1, o = s));
                        else if (!r) {
                            a = l + 1;
                            break
                        }
                    }
                    return a === o ? o = s : -1 === o && (o = e.length), e.slice(a, o)
                }
                for (l = e.length - 1; 0 <= l; --l)
                    if (47 !== e.charCodeAt(l)) - 1 == o && (r = !1, o = l + 1);
                    else if (!r) {
                    a = l + 1;
                    break
                }
                return -1 === o ? '' : e.slice(a, o)
            },
            extname: function(e) {
                t(e);
                for (var n = -1, a = 0, o = -1, r = !0, l = 0, s = e.length - 1, i; 0 <= s; --s) {
                    if (i = e.charCodeAt(s), 47 === i) {
                        if (!r) {
                            a = s + 1;
                            break
                        }
                        continue
                    } - 1 == o && (r = !1, o = s + 1), 46 === i ? -1 == n ? n = s : 1 != l && (l = 1) : -1 !== n && (l = -1)
                }
                return -1 === n || -1 === o || 0 == l || 1 == l && n === o - 1 && n === a + 1 ? '' : e.slice(n, o)
            },
            format: function(e) {
                if (null === e || 'object' != typeof e) throw new TypeError('Parameter "pathObject" must be an object, not ' + typeof e);
                return a('/', e)
            },
            parse: function(e) {
                t(e);
                var n = {
                    root: '',
                    dir: '',
                    base: '',
                    ext: '',
                    name: ''
                };
                if (0 === e.length) return n;
                var a = e.charCodeAt(0),
                    o = 47 === a,
                    r;
                o ? (n.root = '/', r = 1) : r = 0;
                for (var l = -1, s = 0, d = -1, c = !0, p = e.length - 1, i = 0; p >= r; --p) {
                    if (a = e.charCodeAt(p), 47 === a) {
                        if (!c) {
                            s = p + 1;
                            break
                        }
                        continue
                    } - 1 == d && (c = !1, d = p + 1), 46 === a ? -1 == l ? l = p : 1 != i && (i = 1) : -1 != l && (i = -1)
                }
                return -1 == l || -1 == d || 0 == i || 1 == i && l == d - 1 && l == s + 1 ? -1 != d && (0 == s && o ? n.base = n.name = e.slice(1, d) : n.base = n.name = e.slice(s, d)) : (0 == s && o ? (n.name = e.slice(1, l), n.base = e.slice(1, d)) : (n.name = e.slice(s, l), n.base = e.slice(s, d)), n.ext = e.slice(l, d)), 0 < s ? n.dir = e.slice(0, s - 1) : o && (n.dir = '/'), n
            },
            sep: '/',
            delimiter: ':',
            posix: null
        };
        e.exports = r
    }, function(e, t, n) {
        'use strict';

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        }), t.replaceBase = function(e, t) {
            var n = t.url,
                a = -1 < n.indexOf('://'),
                i, r;
            e && (r = (0, o.qs)(e, 'head'), i = (0, o.qs)(r, 'base'), !i && (i = e.createElement('base'), r.insertBefore(i, r.firstChild)), !a && window && window.location && (n = window.location.origin + n), i.setAttribute('href', n))
        }, t.replaceCanonical = function(e, t) {
            var n = t.canonical,
                a, i;
            e && (a = (0, o.qs)(e, 'head'), i = (0, o.qs)(a, 'link[rel=\'canonical\']'), i ? i.setAttribute('href', n) : (i = e.createElement('link'), i.setAttribute('rel', 'canonical'), i.setAttribute('href', n), a.appendChild(i)))
        }, t.replaceMeta = function(e, t) {
            var n = t.idref,
                a, i;
            e && (a = (0, o.qs)(e, 'head'), i = (0, o.qs)(a, 'link[property=\'dc.identifier\']'), i ? i.setAttribute('content', n) : (i = e.createElement('meta'), i.setAttribute('name', 'dc.identifier'), i.setAttribute('content', n), a.appendChild(i)))
        }, t.replaceLinks = function(e, t) {
            var n = e.querySelectorAll('a[href]');
            if (n.length)
                for (var a = (0, o.qs)(e.ownerDocument, 'base'), l = a ? a.getAttribute('href') : void 0, s = function(e) {
                        var n = e.getAttribute('href');
                        if (0 !== n.indexOf('mailto:')) {
                            var a = -1 < n.indexOf('://'),
                                i = new r.default(n, l);
                            a ? e.setAttribute('target', '_blank') : e.onclick = function() {
                                return i && i.hash ? t(i.Path.path + i.hash) : i ? t(i.Path.path) : t(n), !1
                            }
                        }
                    }.bind(this), d = 0; d < n.length; d++) s(n[d])
        }, t.substitute = function(e, t, n) {
            return t.forEach(function(t, a) {
                t && n[a] && (e = e.replace(new RegExp(t, 'g'), n[a]))
            }), e
        };
        var o = n(6),
            i = n(70),
            r = a(i),
            l = n(50),
            s = a(l)
    }, function(e, t, n) {
        var a = n(4),
            i = n(2).document,
            o = a(i) && a(i.createElement);
        e.exports = function(e) {
            return o ? i.createElement(e) : {}
        }
    }, function(e, t, n) {
        var a = n(2),
            i = n(23),
            o = n(38),
            r = n(107),
            l = n(8).f;
        e.exports = function(e) {
            var t = i.Symbol || (i.Symbol = o ? {} : a.Symbol || {});
            '_' == e.charAt(0) || e in t || l(t, e, {
                value: r.f(e)
            })
        }
    }, function(e, t, n) {
        var a = n(55)('keys'),
            i = n(37);
        e.exports = function(e) {
            return a[e] || (a[e] = i(e))
        }
    }, function(e) {
        e.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf']
    }, function(e, t, n) {
        var a = n(2).document;
        e.exports = a && a.documentElement
    }, function(e, t, n) {
        var a = n(4),
            i = n(1),
            o = function(e, t) {
                if (i(e), !a(t) && null !== t) throw TypeError(t + ': can\'t set as prototype!')
            };
        e.exports = {
            set: Object.setPrototypeOf || ('__proto__' in {} ? function(e, t, a) {
                try {
                    a = n(19)(Function.call, n(17).f(Object.prototype, '__proto__').set, 2), a(e, []), t = !(e instanceof Array)
                } catch (n) {
                    t = !0
                }
                return function(e, n) {
                    return o(e, n), t ? e.__proto__ = n : a(e, n), e
                }
            }({}, !1) : void 0),
            check: o
        }
    }, function(e) {
        e.exports = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
    }, function(e, t, n) {
        var a = n(4),
            i = n(78).set;
        e.exports = function(e, t, n) {
            var o = t.constructor,
                r;
            return o !== n && 'function' == typeof o && (r = o.prototype) !== n.prototype && a(r) && i && i(e, r), e
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(26),
            i = n(25);
        e.exports = function(e) {
            var t = i(this) + '',
                o = '',
                r = a(e);
            if (0 > r || r == Infinity) throw RangeError('Count can\'t be negative');
            for (; 0 < r;
                (r >>>= 1) && (t += t)) 1 & r && (o += t);
            return o
        }
    }, function(e) {
        e.exports = Math.sign || function(e) {
            return 0 == (e = +e) || e != e ? e : 0 > e ? -1 : 1
        }
    }, function(e) {
        var t = p;
        e.exports = !t || 22025.465794806718 < t(10) || 22025.465794806718 > t(10) || -2e-17 != t(-2e-17) ? function(e) {
            return 0 == (e = +e) ? e : -1e-6 < e && 1e-6 > e ? e + e * e / 2 : d(e) - 1
        } : t
    }, function(e, t, n) {
        var o = n(26),
            r = n(25);
        e.exports = function(e) {
            return function(t, n) {
                var d = r(t) + '',
                    s = o(n),
                    i = d.length,
                    l, a;
                return 0 > s || s >= i ? e ? '' : void 0 : (l = d.charCodeAt(s), 55296 > l || 56319 < l || s + 1 === i || 56320 > (a = d.charCodeAt(s + 1)) || 57343 < a ? e ? d.charAt(s) : l : e ? d.slice(s, s + 2) : (l - 55296 << 10) + (a - 56320) + 65536)
            }
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(38),
            i = n(0),
            o = n(14),
            r = n(13),
            l = n(12),
            s = n(48),
            d = n(86),
            c = n(46),
            p = n(18),
            u = n(5)('iterator'),
            g = !([].keys && 'next' in [].keys()),
            h = 'keys',
            m = 'values',
            f = function() {
                return this
            };
        e.exports = function(e, t, n, y, v, b, x) {
            d(n, t, y);
            var E = function(e) {
                    return !g && e in N ? N[e] : e === h ? function() {
                        return new n(this, e)
                    } : e === m ? function() {
                        return new n(this, e)
                    } : function() {
                        return new n(this, e)
                    }
                },
                k = t + ' Iterator',
                _ = v == m,
                S = !1,
                N = e.prototype,
                w = N[u] || N['@@iterator'] || v && N[v],
                T = w || E(v),
                C = v ? _ ? E('entries') : T : void 0,
                R = 'Array' == t ? N.entries || w : w,
                P, O, A;
            if (R && (A = p(R.call(new e)), A !== Object.prototype && A.next && (c(A, k, !0), !a && !l(A, u) && r(A, u, f))), _ && w && w.name !== m && (S = !0, T = function() {
                    return w.call(this)
                }), (!a || x) && (g || S || !N[u]) && r(N, u, T), s[t] = T, s[k] = f, v)
                if (P = {
                        values: _ ? T : E(m),
                        keys: b ? T : E(h),
                        entries: C
                    }, x)
                    for (O in P) O in N || o(N, O, P[O]);
                else i(i.P + i.F * (g || S), t, P);
            return P
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(40),
            i = n(36),
            o = n(46),
            r = {};
        n(13)(r, n(5)('iterator'), function() {
            return this
        }), e.exports = function(e, t, n) {
            e.prototype = a(r, {
                next: i(1, n)
            }), o(e, t + ' Iterator')
        }
    }, function(e, t, n) {
        var a = n(60),
            i = n(25);
        e.exports = function(e, t, n) {
            if (a(t)) throw TypeError('String#' + n + ' doesn\'t accept regex!');
            return i(e) + ''
        }
    }, function(e, t, n) {
        var a = n(5)('match');
        e.exports = function(e) {
            var t = /./;
            try {
                '/./' [e](t)
            } catch (n) {
                try {
                    return t[a] = !1, !'/./' [e](t)
                } catch (e) {}
            }
            return !0
        }
    }, function(e, t, n) {
        var a = n(48),
            i = n(5)('iterator'),
            o = Array.prototype;
        e.exports = function(e) {
            return e !== void 0 && (a.Array === e || o[i] === e)
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(8),
            i = n(36);
        e.exports = function(e, t, n) {
            t in e ? a.f(e, t, i(0, n)) : e[t] = n
        }
    }, function(e, t, n) {
        var a = n(54),
            i = n(5)('iterator'),
            o = n(48);
        e.exports = n(23).getIteratorMethod = function(e) {
            if (e != void 0) return e[i] || e['@@iterator'] || o[a(e)]
        }
    }, function(e, t, n) {
        var a = n(242);
        e.exports = function(e, t) {
            return new(a(e))(t)
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(10),
            i = n(39),
            o = n(9);
        e.exports = function(e) {
            for (var t = a(this), n = o(t.length), r = arguments.length, l = i(1 < r ? arguments[1] : void 0, n), s = 2 < r ? arguments[2] : void 0, d = void 0 === s ? n : i(s, n); d > l;) t[l++] = e;
            return t
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(34),
            i = n(122),
            o = n(48),
            r = n(15);
        e.exports = n(85)(Array, 'Array', function(e, t) {
            this._t = r(e), this._i = 0, this._k = t
        }, function() {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, i(1)) : 'keys' == t ? i(0, n) : 'values' == t ? i(0, e[n]) : i(0, [n, e[n]])
        }, 'values'), o.Arguments = o.Array, a('keys'), a('values'), a('entries')
    }, function(e, t, n) {
        var a = n(19),
            i = n(59),
            o = n(77),
            r = n(73),
            l = n(2),
            s = l.process,
            d = l.setImmediate,
            c = l.clearImmediate,
            p = l.MessageChannel,
            u = l.Dispatch,
            g = 0,
            h = {},
            m = 'onreadystatechange',
            f = function() {
                var e = +this;
                if (h.hasOwnProperty(e)) {
                    var t = h[e];
                    delete h[e], t()
                }
            },
            y = function(e) {
                f.call(e.data)
            },
            v, b, x;
        d && c || (d = function(e) {
            for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
            return h[++g] = function() {
                i('function' == typeof e ? e : Function(e), t)
            }, v(g), g
        }, c = function(e) {
            delete h[e]
        }, 'process' == n(20)(s) ? v = function(e) {
            s.nextTick(a(f, e, 1))
        } : u && u.now ? v = function(e) {
            u.now(a(f, e, 1))
        } : p ? (b = new p, x = b.port2, b.port1.onmessage = y, v = a(x.postMessage, x, 1)) : l.addEventListener && 'function' == typeof postMessage && !l.importScripts ? (v = function(e) {
            l.postMessage(e + '', '*')
        }, l.addEventListener('message', y, !1)) : m in r('script') ? v = function(e) {
            o.appendChild(r('script'))[m] = function() {
                o.removeChild(this), f.call(e)
            }
        } : v = function(e) {
            setTimeout(a(f, e, 1), 0)
        }), e.exports = {
            set: d,
            clear: c
        }
    }, function(e, t, n) {
        var a = n(2),
            i = n(95).set,
            o = a.MutationObserver || a.WebKitMutationObserver,
            r = a.process,
            l = a.Promise,
            s = 'process' == n(20)(r);
        e.exports = function() {
            var e = function() {
                    var e, a;
                    for (s && (e = r.domain) && e.exit(); t;) {
                        a = t.fn, t = t.next;
                        try {
                            a()
                        } catch (a) {
                            throw t ? d() : n = void 0, a
                        }
                    }
                    n = void 0, e && e.enter()
                },
                t, n, d;
            if (s) d = function() {
                r.nextTick(e)
            };
            else if (o) {
                var c = !0,
                    p = document.createTextNode('');
                new o(e).observe(p, {
                    characterData: !0
                }), d = function() {
                    p.data = c = !c
                }
            } else if (l && l.resolve) {
                var u = l.resolve();
                d = function() {
                    u.then(e)
                }
            } else d = function() {
                i.call(a, e)
            };
            return function(e) {
                var a = {
                    fn: e,
                    next: void 0
                };
                n && (n.next = a), t || (t = a, d()), n = a
            }
        }
    }, function(e, t, n) {
        'use strict';

        function a(e) {
            var t, n;
            this.promise = new e(function(e, a) {
                if (t != void 0 || n != void 0) throw TypeError('Bad Promise constructor');
                t = e, n = a
            }), this.resolve = i(t), this.reject = i(n)
        }
        var i = n(11);
        e.exports.f = function(e) {
            return new a(e)
        }
    }, function(e, t, n) {
        'use strict';

        function a(t, n, a) {
            var o = Array(a),
                r = 8 * a - n - 1,
                l = (1 << r) - 1,
                d = l >> 1,
                p = 23 === n ? G(2, -24) - G(2, -77) : 0,
                u = 0,
                i = 0 > t || 0 === t && 0 > 1 / t ? 1 : 0,
                s, g, h;
            for (t = H(t), t != t || t === V ? (g = t == t ? 0 : 1, s = l) : (s = Y(K(t) / X), 1 > t * (h = G(2, -s)) && (s--, h *= 2), t += 1 <= s + d ? p / h : p * G(2, 1 - d), 2 <= t * h && (s++, h /= 2), s + d >= l ? (g = 0, s = l) : 1 <= s + d ? (g = (t * h - 1) * G(2, n), s += d) : (g = t * G(2, d - 1) * G(2, n), s = 0)); 8 <= n; o[u++] = 255 & g, g /= 256, n -= 8);
            for (s = s << n | g, r += n; 0 < r; o[u++] = 255 & s, s /= 256, r -= 8);
            return o[--u] |= 128 * i, o
        }

        function o(t, n, a) {
            var o = 8 * a - n - 1,
                r = (1 << o) - 1,
                l = r >> 1,
                d = o - 7,
                c = a - 1,
                i = t[c--],
                s = 127 & i,
                e;
            for (i >>= 7; 0 < d; s = 256 * s + t[c], c--, d -= 8);
            for (e = s & (1 << -d) - 1, s >>= -d, d += n; 0 < d; e = 256 * e + t[c], c--, d -= 8);
            if (0 === s) s = 1 - l;
            else {
                if (s === r) return e ? NaN : i ? -V : V;
                e += G(2, n), s -= l
            }
            return (i ? -1 : 1) * e * G(2, s - n)
        }

        function r(e) {
            return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
        }

        function d(e) {
            return [255 & e]
        }

        function p(e) {
            return [255 & e, 255 & e >> 8]
        }

        function u(e) {
            return [255 & e, 255 & e >> 8, 255 & e >> 16, 255 & e >> 24]
        }

        function g(e) {
            return a(e, 52, 8)
        }

        function h(e) {
            return a(e, 23, 4)
        }

        function m(e, t, n) {
            O(e[M], t, {
                get: function() {
                    return this[n]
                }
            })
        }

        function f(e, t, n, a) {
            var i = R(+n);
            if (i + t > e[ee]) throw U(B);
            var o = e[Q]._b,
                r = i + e[te],
                l = o.slice(r, r + t);
            return a ? l : l.reverse()
        }

        function v(e, t, n, a, o, r) {
            var l = R(+n);
            if (l + t > e[ee]) throw U(B);
            for (var s = e[Q]._b, d = l + e[te], c = a(+o), p = 0; p < t; p++) s[d + p] = c[r ? p : t - p - 1]
        }
        var b = n(2),
            x = n(7),
            E = n(38),
            k = n(66),
            _ = n(13),
            S = n(45),
            N = n(3),
            w = n(43),
            T = n(26),
            C = n(9),
            R = n(131),
            P = n(41).f,
            O = n(8).f,
            A = n(93),
            I = n(46),
            L = 'ArrayBuffer',
            D = 'DataView',
            M = 'prototype',
            B = 'Wrong index!',
            F = b[L],
            z = b[D],
            q = b.Math,
            U = b.RangeError,
            V = b.Infinity,
            W = F,
            H = c,
            G = s,
            Y = y,
            K = l,
            X = i,
            $ = 'buffer',
            Z = 'byteLength',
            J = 'byteOffset',
            Q = x ? '_b' : $,
            ee = x ? '_l' : Z,
            te = x ? '_o' : J;
        if (!k.ABV) F = function(e) {
            w(this, F, L);
            var t = R(e);
            this._b = A.call(Array(t), 0), this[ee] = t
        }, z = function(e, t, n) {
            w(this, z, D), w(e, F, D);
            var a = e[ee],
                i = T(t);
            if (0 > i || i > a) throw U('Wrong offset!');
            if (n = void 0 === n ? a - i : C(n), i + n > a) throw U('Wrong length!');
            this[Q] = e, this[te] = i, this[ee] = n
        }, x && (m(F, Z, '_l'), m(z, $, '_b'), m(z, Z, '_l'), m(z, J, '_o')), S(z[M], {
            getInt8: function(e) {
                return f(this, 1, e)[0] << 24 >> 24
            },
            getUint8: function(e) {
                return f(this, 1, e)[0]
            },
            getInt16: function(e) {
                var t = f(this, 2, e, arguments[1]);
                return (t[1] << 8 | t[0]) << 16 >> 16
            },
            getUint16: function(e) {
                var t = f(this, 2, e, arguments[1]);
                return t[1] << 8 | t[0]
            },
            getInt32: function(e) {
                return r(f(this, 4, e, arguments[1]))
            },
            getUint32: function(e) {
                return r(f(this, 4, e, arguments[1])) >>> 0
            },
            getFloat32: function(e) {
                return o(f(this, 4, e, arguments[1]), 23, 4)
            },
            getFloat64: function(e) {
                return o(f(this, 8, e, arguments[1]), 52, 8)
            },
            setInt8: function(e, t) {
                v(this, 1, e, d, t)
            },
            setUint8: function(e, t) {
                v(this, 1, e, d, t)
            },
            setInt16: function(e, t) {
                v(this, 2, e, p, t, arguments[2])
            },
            setUint16: function(e, t) {
                v(this, 2, e, p, t, arguments[2])
            },
            setInt32: function(e, t) {
                v(this, 4, e, u, t, arguments[2])
            },
            setUint32: function(e, t) {
                v(this, 4, e, u, t, arguments[2])
            },
            setFloat32: function(e, t) {
                v(this, 4, e, h, t, arguments[2])
            },
            setFloat64: function(e, t) {
                v(this, 8, e, g, t, arguments[2])
            }
        });
        else {
            if (!N(function() {
                    F(1)
                }) || !N(function() {
                    new F(-1)
                }) || N(function() {
                    return new F, new F(1.5), new F(NaN), F.name != L
                })) {
                F = function(e) {
                    return w(this, F), new W(R(e))
                };
                for (var ne = F[M] = W[M], ae = P(W), ie = 0, j; ae.length > ie;)(j = ae[ie++]) in F || _(F, j, W[j]);
                E || (ne.constructor = F)
            }
            var oe = new z(new F(2)),
                re = z[M].setInt8;
            oe.setInt8(0, 2147483648), oe.setInt8(1, 2147483649), (oe.getInt8(0) || !oe.getInt8(1)) && S(z[M], {
                setInt8: function(e, t) {
                    re.call(this, e, t << 24 >> 24)
                },
                setUint8: function(e, t) {
                    re.call(this, e, t << 24 >> 24)
                }
            }, !0)
        }
        I(F, L), I(z, D), _(z[M], k.VIEW, !0), t[L] = F, t[D] = z
    }, function(e, t, n) {
        'use strict';
        var a = n(363)();
        e.exports = function(e) {
            return e !== a && null !== e
        }
    }, function(e, t) {
        'use strict';

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var a = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            i = function() {
                function e(t) {
                    n(this, e), this.context = t || this, this.hooks = []
                }
                return a(e, [{
                    key: 'register',
                    value: function() {
                        for (var e = 0; e < arguments.length; ++e)
                            if ('function' == typeof arguments[e]) this.hooks.push(arguments[e]);
                            else
                                for (var t = 0; t < arguments[e].length; ++t) this.hooks.push(arguments[e][t])
                    }
                }, {
                    key: 'trigger',
                    value: function() {
                        var e = arguments,
                            t = this.context,
                            n = [];
                        return this.hooks.forEach(function(a) {
                            var i = a.apply(t, e);
                            i && 'function' == typeof i.then && n.push(i)
                        }), Promise.all(n)
                    }
                }, {
                    key: 'list',
                    value: function() {
                        return this.hooks
                    }
                }, {
                    key: 'clear',
                    value: function() {
                        return this.hooks = []
                    }
                }]), e
            }();
        t.default = i, e.exports = t['default']
    }, function(e, t, n) {
        'use strict';
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var a = n(6),
            i = n(50),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i);
        t.default = function(e, t, n, i) {
            function r(t) {
                c.reject(t)
            }

            function l() {
                if (this.readyState === XMLHttpRequest.DONE) {
                    var e = !1;
                    if (('' === this.responseType || 'document' === this.responseType) && (e = this.responseXML), 200 === this.status || 0 === this.status || e) {
                        var n;
                        if (!this.response && !e) return c.reject({
                            status: this.status,
                            message: 'Empty Response',
                            stack: new Error().stack
                        }), c.promise;
                        if (403 === this.status) return c.reject({
                            status: this.status,
                            response: this.response,
                            message: 'Forbidden',
                            stack: new Error().stack
                        }), c.promise;
                        n = e ? this.responseXML : (0, a.isXml)(t) ? (0, a.parse)(this.response, 'text/xml') : 'xhtml' == t ? (0, a.parse)(this.response, 'application/xhtml+xml') : 'html' == t || 'htm' == t ? (0, a.parse)(this.response, 'text/html') : 'json' == t ? JSON.parse(this.response) : 'blob' == t ? s ? this.response : new Blob([this.response]) : this.response, c.resolve(n)
                    } else c.reject({
                        status: this.status,
                        message: this.response,
                        stack: new Error().stack
                    })
                }
            }
            var s = 'undefined' != typeof window && window.URL,
                d = s ? 'blob' : 'arraybuffer',
                c = new a.defer,
                p = new XMLHttpRequest,
                u = XMLHttpRequest.prototype,
                g;
            for (g in 'overrideMimeType' in u || Object.defineProperty(u, 'overrideMimeType', {
                    value: function() {}
                }), n && (p.withCredentials = !0), p.onreadystatechange = l, p.onerror = r, p.open('GET', e, !0), i) p.setRequestHeader(g, i[g]);
            return 'json' == t && p.setRequestHeader('Accept', 'application/json'), t || (t = new o.default(e).extension), 'blob' == t && (p.responseType = d), (0, a.isXml)(t) && p.overrideMimeType('text/xml'), 'xhtml' == t, 'html' != t && 'htm' != t, 'binary' == t && (p.responseType = 'arraybuffer'), p.send(), c.promise
        }, e.exports = t['default']
    }, function(e, t, n) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        }), t.Task = void 0;
        var i = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            o = n(6),
            r = function() {
                function e(t) {
                    a(this, e), this._q = [], this.context = t, this.tick = o.requestAnimationFrame, this.running = !1, this.paused = !1
                }
                return i(e, [{
                    key: 'enqueue',
                    value: function() {
                        var e = [].shift.call(arguments),
                            t = arguments,
                            n, a, i;
                        if (!e) throw new Error('No Task Provided');
                        return 'function' == typeof e ? (n = new o.defer, a = n.promise, i = {
                            task: e,
                            args: t,
                            deferred: n,
                            promise: a
                        }) : i = {
                            promise: e
                        }, this._q.push(i), !1 != this.paused || this.running || this.run(), i.promise
                    }
                }, {
                    key: 'dequeue',
                    value: function() {
                        var e, t, n;
                        if (this._q.length && !this.paused) {
                            if (e = this._q.shift(), t = e.task, t) return n = t.apply(this.context, e.args), n && 'function' == typeof n.then ? n.then(function() {
                                e.deferred.resolve.apply(this.context, arguments)
                            }.bind(this), function() {
                                e.deferred.reject.apply(this.context, arguments)
                            }.bind(this)) : (e.deferred.resolve.apply(this.context, n), e.promise);
                            if (e.promise) return e.promise
                        } else return e = new o.defer, e.deferred.resolve(), e.promise
                    }
                }, {
                    key: 'dump',
                    value: function() {
                        for (; this._q.length;) this.dequeue()
                    }
                }, {
                    key: 'run',
                    value: function() {
                        var e = this;
                        return this.running || (this.running = !0, this.defered = new o.defer), this.tick.call(window, function() {
                            e._q.length ? e.dequeue().then(function() {
                                this.run()
                            }.bind(e)) : (e.defered.resolve(), e.running = void 0)
                        }), !0 == this.paused && (this.paused = !1), this.defered.promise
                    }
                }, {
                    key: 'flush',
                    value: function() {
                        return this.running ? this.running : this._q.length ? (this.running = this.dequeue().then(function() {
                            return this.running = void 0, this.flush()
                        }.bind(this)), this.running) : void 0
                    }
                }, {
                    key: 'clear',
                    value: function() {
                        this._q = []
                    }
                }, {
                    key: 'length',
                    value: function() {
                        return this._q.length
                    }
                }, {
                    key: 'pause',
                    value: function() {
                        this.paused = !0
                    }
                }, {
                    key: 'stop',
                    value: function() {
                        this._q = [], this.running = !1, this.paused = !0
                    }
                }]), e
            }();
        t.default = r, t.Task = function e(t, n, i) {
            return a(this, e),
                function() {
                    var e = this,
                        n = arguments || [];
                    return new Promise(function(a, o) {
                        n.push(function(e, t) {
                            !e && t ? o(t) : a(e)
                        }), t.apply(i || e, n)
                    })
                }
        }
    }, function(e, t, n) {
        'use strict';

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            r = n(35),
            l = a(r),
            s = n(6),
            d = n(22),
            c = a(d),
            p = n(142),
            g = a(p),
            h = n(72),
            m = n(31),
            f = 'undefined' != typeof navigator,
            y = f && /Chrome/.test(navigator.userAgent),
            v = f && !y && /AppleWebKit/.test(navigator.userAgent),
            b = function() {
                function e(t, n, a, o, v) {
                    i(this, e), this.epubcfi = new c.default, this.document = t, this.documentElement = this.document.documentElement, this.content = n || this.document.body, this.window = this.document.defaultView, this._size = {
                        width: 0,
                        height: 0
                    }, this.sectionIndex = o || 0, this.cfiBase = a || '', this.isVerticalWriting = v, this.epubReadingSystem('epub.js', m.EPUBJS_VERSION), this.listeners();
                    if (!v) {
                        this.direction(window.reader.book.package.metadata.direction)
                    }
                    if(isVerticalWriting === 'none') {var verticalMode = check_writingMode($(this.documentElement));isVerticalWriting = verticalMode;window.reader.setVertical(verticalMode);window.reader.book.settings.isVerticalWriting = verticalMode; window.reader.rendition.settings.isVerticalWriting = verticalMode;}
                }
                return o(e, [{
                    key: 'width',
                    value: function(e) {
                        var t = this.content;
                        return e && (0, s.isNumber)(e) && (e += 'px'), e && (t.style.width = e), this.window.getComputedStyle(t).width
                    }
                }, {
                    key: 'height',
                    value: function(e) {
                        var t = this.content;
                        return e && (0, s.isNumber)(e) && (e += 'px'), e && (t.style.height = e), this.window.getComputedStyle(t).height
                    }
                }, {
                    key: 'contentWidth',
                    value: function(e) {
                        var t = this.content || this.document.body;
                        return e && (0, s.isNumber)(e) && (e += 'px'), e && (t.style.width = e), this.window.getComputedStyle(t).width
                    }
                }, {
                    key: 'contentHeight',
                    value: function(e) {
                        var t = this.content || this.document.body;
                        return e && (0, s.isNumber)(e) && (e += 'px'), e && (t.style.height = e), this.window.getComputedStyle(t).height
                    }
                }, {
                    key: 'textWidth',
                    value: function() {
                        try {
                            let that = this.document.createRange();
                        } catch (e) {
                            return 0;
                        }
                        var e = this.document.createRange(),
                            t = this.content || this.document.body,
                            n = (0, s.borders)(t),
                            a, i;
                        return e.selectNodeContents(t), a = e.getBoundingClientRect(), i = a.width, n && n.width && (i += n.width), u(i)
                    }
                }, {
                    key: 'textHeight',
                    value: function() {
                        try {
                            let that = this.document.createRange();
                        } catch (e) {
                            return 0;
                        }
                        var e = this.document.createRange(),
                            t = this.content || this.document.body,
                            n = (0, s.borders)(t),
                            a, i;
                        return e.selectNodeContents(t), a = e.getBoundingClientRect(), i = a.height, i && n.height && (i += n.height), u(i)
                    }
                }, {
                    key: 'scrollWidth',
                    value: function() {
                        var e = this.documentElement.scrollWidth;
                        return e
                    }
                }, {
                    key: 'scrollHeight',
                    value: function() {
                        var e = this.documentElement.scrollHeight;
                        return e
                    }
                }, {
                    key: 'overflow',
                    value: function(e) {
                        return e && (this.documentElement.style.overflow = e), this.window.getComputedStyle(this.documentElement).overflow
                    }
                }, {
                    key: 'overflowX',
                    value: function(e) {
                        return e && (this.documentElement.style.overflowX = e), this.window.getComputedStyle(this.documentElement).overflowX
                    }
                }, {
                    key: 'overflowY',
                    value: function(e) {
                        return e && (this.documentElement.style.overflowY = e), this.window.getComputedStyle(this.documentElement).overflowY
                    }
                }, {
                    key: 'css',
                    value: function(e, t, n) {
                        set_css(this, e, t, n);
                        return;
                        var a = this.content || this.document.body;
                        return t && a.style.setProperty(e, t, n ? 'important' : ''), this.window.getComputedStyle(a)[e]
                    }
                }, {
                    key: 'viewport',
                    value: function(e) {
                        var t = this.document.querySelector('meta[name=\'viewport\']'),
                            n = {
                                width: void 0,
                                height: void 0,
                                scale: void 0,
                                minimum: void 0,
                                maximum: void 0,
                                scalable: void 0
                            },
                            a = [],
                            i = {};
                        if (t && t.hasAttribute('content')) {
                            var o = t.getAttribute('content'),
                                r = o.match(/width\s*=\s*([^,]*)/),
                                l = o.match(/height\s*=\s*([^,]*)/),
                                d = o.match(/initial-scale\s*=\s*([^,]*)/),
                                c = o.match(/minimum-scale\s*=\s*([^,]*)/),
                                p = o.match(/maximum-scale\s*=\s*([^,]*)/),
                                u = o.match(/user-scalable\s*=\s*([^,]*)/);
                            r && r.length && 'undefined' != typeof r[1] && (n.width = r[1]), l && l.length && 'undefined' != typeof l[1] && (n.height = l[1]), d && d.length && 'undefined' != typeof d[1] && (n.scale = d[1]), c && c.length && 'undefined' != typeof c[1] && (n.minimum = c[1]), p && p.length && 'undefined' != typeof p[1] && (n.maximum = p[1]), u && u.length && 'undefined' != typeof u[1] && (n.scalable = u[1])
                        }
                        return i = (0, s.defaults)(e || {}, n), e && (i.width && a.push('width=' + i.width), i.height && a.push('height=' + i.height), i.scale && a.push('initial-scale=' + i.scale), 'no' === i.scalable ? (a.push('minimum-scale=' + i.scale), a.push('maximum-scale=' + i.scale), a.push('user-scalable=' + i.scalable)) : (i.scalable && a.push('user-scalable=' + i.scalable), i.minimum && a.push('minimum-scale=' + i.minimum), i.maximum && a.push('minimum-scale=' + i.maximum)), !t && (t = this.document.createElement('meta'), t.setAttribute('name', 'viewport'), this.document.querySelector('head').appendChild(t)), t.setAttribute('content', a.join(', ')), this.window.scrollTo(0, 0)), i
                    }
                }, {
                    key: 'expand',
                    value: function() {
                        this.emit(m.EVENTS.CONTENTS.EXPAND)
                    }
                }, {
                    key: 'listeners',
                    value: function() {
                        this.imageLoadListeners(), this.mediaQueryListeners(), this.addEventListeners(), this.addSelectionListeners(), this.resizeListeners(), this.linksHandler()
                    }
                }, {
                    key: 'removeListeners',
                    value: function() {
                        this.removeEventListeners(), this.removeSelectionListeners(), clearTimeout(this.expanding)
                    }
                }, {
                    key: 'resizeCheck',
                    value: function() {
                        var e = this.textWidth(),
                            t = this.textHeight();
                        (e != this._size.width || t != this._size.height) && (this._size = {
                            width: e,
                            height: t
                        }, this.onResize && this.onResize(this._size), this.emit(m.EVENTS.CONTENTS.RESIZE, this._size))
                    }
                }, {
                    key: 'resizeListeners',
                    value: function() {
                        clearTimeout(this.expanding), requestAnimationFrame(this.resizeCheck.bind(this)), this.expanding = setTimeout(this.resizeListeners.bind(this), 350)
                    }
                }, {
                    key: 'transitionListeners',
                    value: function() {
                        var e = this.content;
                        e.style.transitionProperty = 'font, font-size, font-size-adjust, font-stretch, font-variation-settings, font-weight, width, height', e.style.transitionDuration = '0.001ms', e.style.transitionTimingFunction = 'linear', e.style.transitionDelay = '0', this.document.addEventListener('transitionend', this.resizeCheck.bind(this))
                    }
                }, {
                    key: 'mediaQueryListeners',
                    value: function() {
                        for (var e = this.document.styleSheets, t = function(e) {
                                e.matches && !this._expanding && setTimeout(this.expand.bind(this), 1)
                            }.bind(this), n = 0; n < e.length; n += 1) {
                            var a;
                            try {
                                a = e[n].cssRules
                            } catch (t) {
                                return
                            }
                            if (!a) return;
                            for (var i = 0; i < a.length; i += 1)
                                if (a[i].media) {
                                    var o = this.window.matchMedia(a[i].media.mediaText);
                                    o.addListener(t)
                                }
                        }
                    }
                }, {
                    key: 'resizeObservers',
                    value: function() {
                        var e = this;
                        this.observer = new MutationObserver(function() {
                            e.resizeCheck()
                        });
                        this.observer.observe(this.document, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })
                    }
                }, {
                    key: 'imageLoadListeners',
                    value: function() {
                        for (var e = this.document.querySelectorAll('img'), t = 0, n; t < e.length; t++) n = e[t], 'undefined' != typeof n.naturalWidth && 0 === n.naturalWidth && (n.onload = this.expand.bind(this))
                    }
                }, {
                    key: 'fontLoadListeners',
                    value: function() {
                        this.document && this.document.fonts && this.document.fonts.ready.then(function() {
                            this.resizeCheck()
                        }.bind(this))
                    }
                }, {
                    key: 'root',
                    value: function() {
                        return this.document ? this.document.documentElement : null
                    }
                }, {
                    key: 'locationOf',
                    value: function(e, t) {
                        var n = {
                                left: 0,
                                top: 0
                            },
                            a;
                        if (!this.document) return n;
                        if (this.epubcfi.isCfiString(e)) {
                            var i = new c.default(e).toRange(this.document, t);
                            if (i)
                                if (i.startContainer.nodeType === Node.ELEMENT_NODE) a = i.startContainer.getBoundingClientRect(), n.left = a.left, n.top = a.top;
                                else if (v) {
                                var o = i.startContainer,
                                    r = new Range;
                                try {
                                    o.nodeType === 1 ? a = o.getBoundingClientRect() : i.startOffset + 2 < o.length ? (r.setStart(o, i.startOffset), r.setEnd(o, i.startOffset + 2), a = r.getBoundingClientRect()) : 0 < i.startOffset - 2 ? (r.setStart(o, i.startOffset - 2), r.setEnd(o, i.startOffset), a = r.getBoundingClientRect()) : a = o.parentNode.getBoundingClientRect()
                                } catch (t) {
                                    console.error(t, t.stack)
                                }
                            } else a = i.getBoundingClientRect()
                        } else if ('string' == typeof e && -1 < e.indexOf('#')) {
                            var l = e.substring(e.indexOf('#') + 1),
                                s = this.document.getElementById(l);
                            s && (a = s.getBoundingClientRect())
                        }
                        return a && (n.left = a.left, n.top = a.top), n
                    }
                }, {
                    key: 'addStylesheet',
                    value: function(e) {
                        return new Promise(function(t) {
                            var n = !1,
                                a;
                            return this.document ? (a = this.document.querySelector('link[href=\'' + e + '\']'), a ? void t(!0) : void(a = this.document.createElement('link'), a.type = 'text/css', a.rel = 'stylesheet', a.href = e, a.onload = a.onreadystatechange = function() {
                                n || this.readyState && 'complete' != this.readyState || (n = !0, setTimeout(function() {
                                    t(!0)
                                }, 1))
                            }, this.document.head.appendChild(a))) : void t(!1)
                        }.bind(this))
                    }
                }, {
                    key: 'addStylesheetRules',
                    value: function(e) {
                        var t = 'epubjs-inserted-css',
                            n, a;
                        if (this.document && e && 0 !== e.length)
                            if (n = this.document.getElementById('#' + t), n || (n = this.document.createElement('style'), n.id = t), this.document.head.appendChild(n), a = n.sheet, '[object Array]' === Object.prototype.toString.call(e))
                                for (var o = 0, i = e.length; o < i; o++) {
                                    var r = 1,
                                        l = e[o],
                                        s = e[o][0],
                                        d = '';
                                    '[object Array]' === Object.prototype.toString.call(l[1][0]) && (l = l[1], r = 0);
                                    for (var c = l.length, p; r < c; r++) p = l[r], d += p[0] + ':' + p[1] + (p[2] ? ' !important' : '') + ';\n';
                                    a.insertRule(s + '{' + d + '}', a.cssRules.length)
                                } else {
                                    var u = Object.keys(e);
                                    u.forEach(function(t) {
                                        var n = e[t];
                                        if (Array.isArray(n)) n.forEach(function(e) {
                                            var n = Object.keys(e),
                                                i = n.map(function(t) {
                                                    return t + ':' + e[t]
                                                }).join(';');
                                            a.insertRule(t + '{' + i + '}', a.cssRules.length)
                                        });
                                        else {
                                            var i = Object.keys(n),
                                                o = i.map(function(e) {
                                                    return e + ':' + n[e]
                                                }).join(';');
                                            a.insertRule(t + '{' + o + '}', a.cssRules.length)
                                        }
                                    })
                                }
                    }
                }, {
                    key: 'addScript',
                    value: function(e) {
                        return new Promise(function(t) {
                            var n = !1,
                                a;
                            return this.document ? void(a = this.document.createElement('script'), a.type = 'text/javascript', a.async = !0, a.src = e, a.onload = a.onreadystatechange = function() {
                                n || this.readyState && 'complete' != this.readyState || (n = !0, setTimeout(function() {
                                    t(!0)
                                }, 1))
                            }, this.document.head.appendChild(a)) : void t(!1)
                        }.bind(this))
                    }
                }, {
                    key: 'addClass',
                    value: function(e) {
                        var t;
                        this.document && (t = this.content || this.document.body, t && t.classList.add(e))
                    }
                }, {
                    key: 'removeClass',
                    value: function(e) {
                        var t;
                        this.document && (t = this.content || this.document.body, t && t.classList.remove(e))
                    }
                }, {
                    key: 'addEventListeners',
                    value: function() {
                        this.document && m.DOM_EVENTS.forEach(function(e) {
                            this.document.addEventListener(e, this.triggerEvent.bind(this), !1)
                        }, this)
                    }
                }, {
                    key: 'removeEventListeners',
                    value: function() {
                        this.document && m.DOM_EVENTS.forEach(function(e) {
                            this.document.removeEventListener(e, this.triggerEvent, !1)
                        }, this)
                    }
                }, {
                    key: 'triggerEvent',
                    value: function(t) {
                        this.emit(t.type, t)
                    }
                }, {
                    key: 'addSelectionListeners',
                    value: function() {
                        this.document && this.document.addEventListener('selectionchange', this.onSelectionChange.bind(this), !1)
                    }
                }, {
                    key: 'removeSelectionListeners',
                    value: function() {
                        this.document && this.document.removeEventListener('selectionchange', this.onSelectionChange, !1)
                    }
                }, {
                    key: 'onSelectionChange',
                    value: function() {
                        this.selectionEndTimeout && clearTimeout(this.selectionEndTimeout), this.selectionEndTimeout = setTimeout(function() {
                            var e = this.window.getSelection();
                            this.triggerSelectedEvent(e)
                        }.bind(this), 250)
                    }
                }, {
                    key: 'triggerSelectedEvent',
                    value: function(e) {
                        var t, n;
                        e && 0 < e.rangeCount && (t = e.getRangeAt(0), !t.collapsed && (n = new c.default(t, this.cfiBase).toString(), this.emit(m.EVENTS.CONTENTS.SELECTED, n), this.emit(m.EVENTS.CONTENTS.SELECTED_RANGE, t)))
                    }
                }, {
                    key: 'range',
                    value: function(e, t) {
                        var n = new c.default(e);
                        return n.toRange(this.document, t)
                    }
                }, {
                    key: 'cfiFromRange',
                    value: function(e, t) {
                        return new c.default(e, this.cfiBase, t).toString()
                    }
                }, {
                    key: 'cfiFromNode',
                    value: function(e, t) {
                        return new c.default(e, this.cfiBase, t).toString()
                    }
                }, {
                    key: 'map',
                    value: function(e) {
                        var t = new g.default(e);
                        return t.section()
                    }
                }, {
                    key: 'size',
                    value: function(e, t) {
                        var n = {
                            scale: 1,
                            scalable: 'no'
                        };
                        this.layoutStyle('scrolling'), 0 <= e && (this.width(e), n.width = e, this.css('padding', '0 ' + e / 12 + 'px')), 0 <= t && (this.height(t), n.height = t), this.css('margin', '0'), this.css('box-sizing', 'border-box'), this.viewport(n)
                    }
                }, {
                    key: 'columns',
                    value: function(e, t, n, a) {
                        var i = (0, s.prefixed)('column-axis'),
                            o = (0, s.prefixed)('column-gap'),
                            r = (0, s.prefixed)('column-width'),
                            l = (0, s.prefixed)('column-fill'),
                            d = this.writingMode(),
                            c = 0 === d.indexOf('tb-' /*'vertical'*/ ) ? 'vertical' : 'horizontal';
                        this.layoutStyle('paginated'), 'rtl' === this.content.dir && this.direction('rtl'), this.width(e), this.height(t), this.viewport({
                            width: e,
                            height: t,
                            scale: 1,
                            scalable: 'no'
                        }), this.css('overflow-y', 'hidden'), this.css('margin', '0', !0), 'vertical' == c ? (this.css('padding-top', a / 2 + 'px', !0), this.css('padding-bottom', a / 2 + 'px', !0), this.css('padding-left', '20px'), this.css('padding-right', '20px')) : (this.css('padding-top', '20px'), this.css('padding-bottom', '20px'), this.css('padding-left', a / 2 + 'px', !0), this.css('padding-right', a / 2 + 'px', !0)), this.css('box-sizing', 'border-box'), this.css('max-width', 'inherit'), this.css(i, 'horizontal'), this.css(l, 'auto'), this.css(o, a + 'px'), this.css(r, n + 'px')
                    }
                }, {
                    key: 'scaler',
                    value: function(e, t, n) {
                        var a = '';
                        this.css('transform-origin', 'top left'), (0 <= t || 0 <= n) && (a = ' translate(' + (t || 0) + 'px, ' + (n || 0) + 'px)'), this.css('transform', 'scale(' + e + ')' + a);
                    }
                }, {
                    key: 'fit',
                    value: function(e, t) {
                        var n = this.viewport(),
                            a = e / parseInt(n.width),
                            i = t / parseInt(n.height),
                            o = a < i ? a : i,
                            w = (e - n.width * o) / 2 / o,
                            r = (t - n.height * o) / 2 / o;
                        this.layoutStyle('paginated'), this.width(parseInt(n.width) /*e*/ ), this.height(parseInt(n.height) /*t*/ ), this.overflow('hidden'), this.content.style.position = "absolute", this.content.style.left = "0px", this.content.style.top = "0px", this.scaler(o, w, r), this.css('background-color', 'transparent');
                        get_contentSize(n, o);
                    }
                }, {
                    key: 'direction',
                    value: function(e) {
                        this.documentElement && (this.documentElement.style.direction = e)
                    }
                }, {
                    key: 'mapPage',
                    value: function(e, t, n, a, i) {
                        var o = new g.default(t, i);
                        return o.page(this, e, n, a)
                    }
                }, {
                    key: 'linksHandler',
                    value: function() {
                        var e = this;
                        (0, h.replaceLinks)(this.content, function(t) {
                            e.emit(m.EVENTS.CONTENTS.LINK_CLICKED, t)
                        })
                    }
                }, {
                    key: 'writingMode',
                    value: function( /*e*/ ) {
                        var t = (0, s.prefixed)('writing-mode');
                        let originDir = window.reader.book.package.metadata.direction;
                        if (this.isVerticalWriting && this.documentElement) {
                            this.documentElement.style[t] = (originDir === "rtl") ? "tb-rl" : "tb-rl";
                            this.documentElement.style["writing-mode"] = (originDir === "rtl") ? "tb-rl" : "tb-lr";
                        } else {
                            this.documentElement.style[t] = (originDir === "rtl") ? "rl-tb" : "lr-tb";
                            this.documentElement.style["writing-mode"] = (originDir === "rtl") ? "rl-tb" : "lr-tb";
                        }
                        return /*e this.isVerticalWriting&&this.documentElement&&(this.documentElement.style[t]=(originDir === "rtl") ? "tb-rl": "tb-rl" e),*/ this.window.getComputedStyle(this.documentElement)[t] || ''
                    }
                }, {
                    key: 'layoutStyle',
                    value: function(e) {
                        return e && (this._layoutStyle = e, navigator.epubReadingSystem.layoutStyle = this._layoutStyle), this._layoutStyle || 'paginated'
                    }
                }, {
                    key: 'epubReadingSystem',
                    value: function(e, t) {
                        return navigator.epubReadingSystem = {
                            name: e,
                            version: t,
                            layoutStyle: this.layoutStyle(),
                            hasFeature: function(e) {
                                return 'dom-manipulation' === e || 'layout-changes' === e || 'touch-events' === e || 'mouse-events' === e || 'keyboard-events' === e || 'spine-scripting' !== e && !1
                            }
                        }, navigator.epubReadingSystem
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        this.observer && this.observer.disconnect(), this.document.removeEventListener('transitionend', this.resizeCheck), this.removeListeners()
                    }
                }], [{
                    key: 'listenedEvents',
                    get: function() {
                        return m.DOM_EVENTS
                    }
                }]), e
            }();
        (0, l.default)(b.prototype), t.default = b, e.exports = t['default']
    }, function(e, t, n) {
        'use strict';

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            r = n(35),
            l = a(r),
            s = n(6),
            d = n(142),
            c = a(d),
            p = n(102),
            u = a(p),
            h = n(388),
            m = a(h),
            f = n(398),
            v = a(f),
            b = n(31),
            x = function() {
                function e(t) {
                    i(this, e), this.name = 'default', this.optsSettings = t.settings, this.View = t.view, this.request = t.request, this.renditionQueue = t.queue, this.q = new u.default(this), this.settings = (0, s.extend)(this.settings || {}, {
                        infinite: !0,
                        hidden: !1,
                        width: void 0,
                        height: void 0,
                        axis: void 0,
                        flow: 'scrolled',
                        ignoreClass: '',
                        fullsize: void 0
                    }), (0, s.extend)(this.settings, t.settings || {}), this.viewSettings = {
                        ignoreClass: this.settings.ignoreClass,
                        axis: this.settings.axis,
                        flow: this.settings.flow,
                        layout: this.layout,
                        method: this.settings.method,
                        width: 0,
                        height: 0,
                        forceEvenPages: 0 /*!0*/ ,
                        isVerticalWriting: this.settings.isVerticalWriting
                    }, this.rendered = !1
                }
                return o(e, [{
                    key: 'render',
                    value: function(e, t) {
                        var n = e.tagName;
                        'undefined' == typeof this.settings.fullsize && n && ('body' == n.toLowerCase() || 'html' == n.toLowerCase()) && (this.settings.fullsize = !0), this.settings.fullsize && (this.settings.overflow = 'visible', this.overflow = this.settings.overflow), this.settings.size = t, this.stage = new m.default({
                            width: t.width,
                            height: t.height,
                            overflow: this.overflow,
                            hidden: this.settings.hidden,
                            axis: this.settings.axis,
                            fullsize: this.settings.fullsize,
                            direction: this.settings.direction
                        }), this.stage.attachTo(e), this.container = this.stage.getContainer(), this.views = new v.default(this.container), this._bounds = this.bounds(), this._stageSize = this.stage.size(), this.viewSettings.width = this._stageSize.width, this.viewSettings.height = this._stageSize.height, this.stage.onResize(this.onResized.bind(this)), this.stage.onOrientationChange(this.onOrientationChange.bind(this)), this.addEventListeners(), this.layout && this.updateLayout(), this.rendered = !0
                    }
                }, {
                    key: 'addEventListeners',
                    value: function() {
                        var e;
                        window.addEventListener('unload', function() {
                            this.destroy()
                        }.bind(this)), e = this.settings.fullsize ? window : this.container, e.addEventListener('scroll', this.onScroll.bind(this))
                    }
                }, {
                    key: 'removeEventListeners',
                    value: function() {
                        var e;
                        e = this.settings.fullsize ? window : this.container, e.removeEventListener('scroll', this.onScroll.bind(this))
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        clearTimeout(this.orientationTimeout), clearTimeout(this.resizeTimeout), clearTimeout(this.afterScrolled), this.clear(), this.removeEventListeners(), this.stage.destroy(), this.rendered = !1
                    }
                }, {
                    key: 'onOrientationChange',
                    value: function() {
                        var e = window,
                            t = e.orientation;
                        this.optsSettings.resizeOnOrientationChange && this.resize(), clearTimeout(this.orientationTimeout), this.orientationTimeout = setTimeout(function() {
                            this.orientationTimeout = void 0, this.optsSettings.resizeOnOrientationChange && this.resize(), this.emit(b.EVENTS.MANAGERS.ORIENTATION_CHANGE, t)
                        }.bind(this), 500)
                    }
                }, {
                    key: 'onResized',
                    value: function() {
                        this.resize()
                    }
                }, {
                    key: 'resize',
                    value: function(e, t) {
                        var n = this.stage.size(e, t);
                        return this.winBounds = (0, s.windowBounds)(), this.orientationTimeout && this.winBounds.width === this.winBounds.height ? void(this._stageSize = void 0) : void(this._stageSize && this._stageSize.width === n.width && this._stageSize.height === n.height || (this._stageSize = n, this._bounds = this.bounds(), this.clear(), this.viewSettings.width = this._stageSize.width, this.viewSettings.height = this._stageSize.height, this.updateLayout(), this.emit(b.EVENTS.MANAGERS.RESIZED, {
                            width: this._stageSize.width,
                            height: this._stageSize.height
                        })))
                    }
                }, {
                    key: 'createView',
                    value: function(e) {
                        return new this.View(e, this.viewSettings)
                    }
                }, {
                    key: 'display',
                    value: function(e, t) {
                        var n = new s.defer,
                            a = n.promise;
                            e = turn_double(e)||e;
                        (t === e.href || (0, s.isNumber)(t)) && (t = void 0);
                        var i = this.views.find(e);
                        if (i && e) {
                            var o = i.offset();
                            if ('ltr' === this.settings.direction) this.scrollTo(o.left, o.top, !0);
                            else {
                                var r = i.width();
                                this.scrollTo(o.left + r, o.top, !0)
                            }
                            if (t) {
                                var l = i.locationOf(t);
                                this.moveTo(l)
                            }
                            return n.resolve(), a
                        }
                        return this.clear(), this.add(e).then(function(e) {
                            if (t) {
                                var n = e.locationOf(t);
                                this.moveTo(n)
                            }
                        }.bind(this), function(e) {
                            n.reject(e)
                        }).then(function() {
                            var t;
                            if ('pre-paginated' === this.layout.name && 1 < this.layout.divisor && (t = e.next(), t && display_nextPage(e))){ return this.add(t);}else{display_singlePage(e);}
                        }.bind(this)).then(function() {
                            this.views.show(), n.resolve()
                        }.bind(this)), a
                    }
                }, {
                    key: 'afterDisplayed',
                    value: function(e) {
                        this.emit(b.EVENTS.MANAGERS.ADDED, e)
                    }
                }, {
                    key: 'afterResized',
                    value: function(e) {
                        this.emit(b.EVENTS.MANAGERS.RESIZE, e.section)
                    }
                }, {
                    key: 'moveTo',
                    value: function(e) {
                        var t = 0,
                            n = 0;
                        this.isPaginated ? (t = y(e.left / this.layout.delta) * this.layout.delta, t + this.layout.delta > this.container.scrollWidth && (t = this.container.scrollWidth - this.layout.delta)) : n = e.top, this.scrollTo(t, n, !0)
                    }
                }, {
                    key: 'add',
                    value: function(e) {
                        var t = this,
                            n = this.createView(e);
                        return this.views.append(n), n.onDisplayed = this.afterDisplayed.bind(this), n.onResize = this.afterResized.bind(this), n.on(b.EVENTS.VIEWS.AXIS, function(e) {
                            t.updateAxis(e)
                        }), n.display(this.request)
                    }
                }, {
                    key: 'append',
                    value: function(e) {
                        var t = this,
                            n = this.createView(e);
                        return this.views.append(n), n.onDisplayed = this.afterDisplayed.bind(this), n.onResize = this.afterResized.bind(this), n.on(b.EVENTS.VIEWS.AXIS, function(e) {
                            t.updateAxis(e)
                        }), n.display(this.request)
                    }
                }, {
                    key: 'prepend',
                    value: function(e) {
                        var t = this,
                            n = this.createView(e);
                        return n.on(b.EVENTS.VIEWS.RESIZED, function(e) {
                            t.counter(e)
                        }), this.views.prepend(n), n.onDisplayed = this.afterDisplayed.bind(this), n.onResize = this.afterResized.bind(this), n.on(b.EVENTS.VIEWS.AXIS, function(e) {
                            t.updateAxis(e)
                        }), n.display(this.request)
                    }
                }, {
                    key: 'counter',
                    value: function(e) {
                        'vertical' === this.settings.axis ? this.scrollBy(0, e.heightDelta, !0) : this.scrollBy(e.widthDelta, 0, !0)
                    }
                }, {
                    key: 'next',
                    value: function() {
                        var e = this.settings.direction,
                            t, n;
                        if (this.views.length) {
                            if (this.isPaginated && 'horizontal' === this.settings.axis && (!e || 'ltr' === e)) {
                                if(readType==='pre-paginated'){t=this.views.last().section.next();}else{
                                let $body = $("iframe").contents().find("body"),
                                    padding = {
                                        left: parseFloat($body.css("padding-left")),
                                        right: parseFloat($body.css("padding-right"))
                                    };
                                this.scrollLeft = this.container.scrollLeft, n = this.container.scrollLeft /*+this.container.offsetWidth*/ + this.layout.delta, n *= ($(this.container).children(".epub-view").length), n += padding.left + padding.right, n < /*=*/ this.container.scrollWidth ? this.scrollBy(this.layout.delta, 0, !0) : t = this.views.last().section.next();}
                            } else if (this.isPaginated && 'horizontal' === this.settings.axis && 'rtl' === e) {
                                let divider = $(this.container).children(".epub-view").length;
                                this.scrollLeft = this.container.scrollLeft, n = this.container.scrollLeft, /*0<n*/ (n < this.container.scrollWidth - this.layout.delta && this.container.scrollWidth / divider !== this.layout.delta) ? this.scrollBy(-this.layout.delta /*this.layout.delta*/ , 0, !0) : t = this.views.last().section.next();
                            } else if (this.isPaginated && 'vertical' === this.settings.axis) {
                                this.scrollTop = this.container.scrollTop;
                                var a = this.container.scrollTop + this.container.offsetHeight;
                                if (a < this.container.scrollHeight) {
                                    let $body = $("iframe").contents().find("body"),
                                        padding = {
                                            top: parseFloat($body.css("padding-top")),
                                            bottom: parseFloat($body.css("padding-bottom"))
                                        },
                                        height = Math.ceil(this.layout.height - padding.top - padding.bottom + this.layout.gap);
                                    this.scrollBy(0, /*this.layout.*/ height, !0)
                                } else {
                                    t = this.views.last().section.next()
                                }
                            } else t = this.views.last().section.next();
                            return t ? (this.clear(), this.append(t).then(function() {
                                var e;
                                if ('pre-paginated' === this.layout.name && 1 < this.layout.divisor && (e = t.next(), e && display_nextPage(t))) {return this.append(e);}else{display_singlePage(t); }
                            }.bind(this), function(e) {
                                displaying.reject(e)
                            }).then(function() {
                                this.views.show()
                            }.bind(this))) : void 0
                        }
                    }
                }, {
                    key: 'prev',
                    value: function() {
                        var e = this.settings.direction,
                            t, n;
                        if (this.views.length) {
                            if (this.isPaginated && 'horizontal' === this.settings.axis && (!e || 'ltr' === e)) {if(readType==='pre-paginated'){t=this.views.first().section.prev();}else{this.scrollLeft = this.container.scrollLeft, n = this.container.scrollLeft, 0 < n ? this.scrollBy(-this.layout.delta, 0, !0) : t = this.views.first().section.prev();}}
                            else if (this.isPaginated && 'horizontal' === this.settings.axis && 'rtl' === e) this.scrollLeft = this.container.scrollLeft, n = this.container.scrollLeft /*+this.container.offsetWidth+this.layout.delta*/ , /*n<=this.container.scrollWidth*/ n > 0 ? this.scrollBy( /*-*/ this.layout.delta, 0, !0) : t = this.views.first().section.prev();
                            else if (this.isPaginated && 'vertical' === this.settings.axis) {
                                this.scrollTop = this.container.scrollTop;
                                var a = this.container.scrollTop;
                                if (0 < a) {
                                    let $body = $("iframe").contents().find("body"),
                                        padding = {
                                            top: parseFloat($body.css("padding-top")),
                                            bottom: parseFloat($body.css("padding-bottom"))
                                        },
                                        height = Math.ceil(this.layout.height - padding.top - padding.bottom + this.layout.gap);
                                    this.scrollBy(0, - /*this.layout.*/ height, !0)
                                } else {
                                    t = this.views.first().section.prev()
                                }
                            } else t = this.views.first().section.prev();
                            return t ? (this.clear(), this.prepend(t).then(function() {
                                var e;
                                if ('pre-paginated' === this.layout.name && 1 < this.layout.divisor && (e = t.prev(), e && display_nextPage(t, true))){ return this.prepend(e);} else {display_singlePage(t);}
                            }.bind(this), function(e) {
                                displaying.reject(e)
                            }).then(function() {
                                this.isPaginated && 'horizontal' === this.settings.axis && ('rtl' === this.settings.direction ? (!this.settings.isVerticalWriting) ? this.scrollTo(this.container.scrollWidth, 0, true, true) : this.scrollTo(0, 0, !0) : this.scrollTo(this.container.scrollWidth - this.layout.delta, 0, !0)), this.views.show()
                            }.bind(this))) : void 0
                        }
                    }
                }, {
                    key: 'current',
                    value: function() {
                        var e = this.visible();
                        return e.length ? e[e.length - 1] : null
                    }
                }, {
                    key: 'clear',
                    value: function() {
                        this.views && (this.views.hide(), this.scrollTo(0, 0, !0), this.views.clear())
                    }
                }, {
                    key: 'currentLocation',
                    value: function() {
                        return this.location = 'vertical' === this.settings.axis ? this.scrolledLocation() : this.paginatedLocation(), this.location
                    }
                }, {
                    key: 'scrolledLocation',
                    value: function() {
                        var e = this,
                            t = this.visible(),
                            n = this.container.getBoundingClientRect(),
                            a = n.height < window.innerHeight ? n.height : window.innerHeight,
                            o = 0,
                            r = 0;
                        this.settings.fullsize && (o = window.scrollY);
                        var i = t.map(function(t) {
                            var l = t.section,
                                s = l.index,
                                d = l.href,
                                c = t.position(),
                                p = t.height(),
                                u = o + n.top - c.top + r,
                                h = u + a - r;
                            h > p && (h = p, r = h - u);
                            var m = e.layout.count(p, a).pages,
                                f = g(u / a),
                                y = [],
                                v = g(h / a);
                            y = [];
                            for (var b = f, i; b <= v; b++) i = b + 1, y.push(i);
                            var x = e.mapping.page(t.contents, t.section.cfiBase, u, h);
                            return {
                                index: s,
                                href: d,
                                pages: y,
                                totalPages: m,
                                mapping: x
                            }
                        });
                        return i
                    }
                }, {
                    key: 'paginatedLocation',
                    value: function() {
                        var e = this,
                            t = this.visible(),
                            n = this.container.getBoundingClientRect(),
                            a = 0,
                            o = 0;
                        this.settings.fullsize && (a = window.scrollX);
                        var i = t.map(function(t) {
                            var r = t.section,
                                l = r.index,
                                s = r.href,
                                d = t.offset().left,
                                c = t.position().left,
                                p = t.width(),
                                u = a + n.left - c + o,
                                g = u + e.layout.width - o,
                                h = e.mapping.page(t.contents, t.section.cfiBase, u, g),
                                m = e.layout.count(p).pages,
                                f = y(u / e.layout.pageWidth),
                                v = [],
                                b = y(g / e.layout.pageWidth);
                            if (0 > f && (f = 0, ++b), 'rtl' === e.settings.direction) {
                                var x = f;
                                f = m - b, b = m - x
                            }
                            for (var E = f + 1, i; E <= b; E++) i = E, v.push(i);
                            return {
                                index: l,
                                href: s,
                                pages: v,
                                totalPages: m,
                                mapping: h
                            }
                        });
                        return i
                    }
                }, {
                    key: 'isVisible',
                    value: function(e, t, n, a) {
                        var i = e.position(),
                            o = a || this.bounds();
                        return 'horizontal' === this.settings.axis && i.right > o.left - t && i.left < o.right + n || 'vertical' === this.settings.axis && i.bottom > o.top - t && i.top < o.bottom + n
                    }
                }, {
                    key: 'visible',
                    value: function() {
                        for (var e = this.bounds(), t = this.views.displayed(), n = t.length, a = [], o = 0, i, r; o < n; o++) r = t[o], i = this.isVisible(r, 0, 0, e), !0 === i && a.push(r);
                        return a
                    }
                }, {
                    key: 'scrollBy',
                    value: function(e, t, n) {
                        var a = 'rtl' === this.settings.direction ? -1 : 1;
                        n && (this.ignore = !0), this.settings.fullsize ? window.scrollBy(e * a, t * a) : (e && (this.container.scrollLeft += e * a), t && (this.container.scrollTop += t)), this.scrolled = !0
                    }
                }, {
                    key: 'scrollTo',
                    value: function(e, t, n) {
                        let container;
                        n && (this.ignore = !0), this.settings.fullsize ? window.scrollTo(e, t) : (!end) ? (this.container.scrollLeft = e, this.container.scrollTop = t):(container=this.container,setTimeout(function(){container.scrollLeft=container.scrollWidth,container = null;})), this.scrolled = !0
                    }
                }, {
                    key: 'onScroll',
                    value: function() {
                        var e, t;
                        this.settings.fullsize ? (e = window.scrollY, t = window.scrollX) : (e = this.container.scrollTop, t = this.container.scrollLeft), this.scrollTop = e, this.scrollLeft = t, this.ignore ? this.ignore = !1 : (this.emit(b.EVENTS.MANAGERS.SCROLL, {
                            top: e,
                            left: t
                        }), clearTimeout(this.afterScrolled), this.afterScrolled = setTimeout(function() {
                            this.emit(b.EVENTS.MANAGERS.SCROLLED, {
                                top: this.scrollTop,
                                left: this.scrollLeft
                            })
                        }.bind(this), 20))
                    }
                }, {
                    key: 'bounds',
                    value: function() {
                        var e;
                        return e = this.stage.bounds(), e
                    }
                }, {
                    key: 'applyLayout',
                    value: function(e) {
                        this.layout = e, this.updateLayout()
                    }
                }, {
                    key: 'updateLayout',
                    value: function() {
                        this.stage && (this._stageSize = this.stage.size(), this.isPaginated ? (this.layout.calculate(this._stageSize.width, this._stageSize.height, this.settings.gap), this.settings.offset = this.layout.delta) : this.layout.calculate(this._stageSize.width, this._stageSize.height), this.viewSettings.width = this.layout.width, this.viewSettings.height = this.layout.height, this.setLayout(this.layout))
                    }
                }, {
                    key: 'setLayout',
                    value: function(e) {
                        this.viewSettings.layout = e, this.mapping = new c.default(e.props, this.settings.direction, this.settings.axis), this.views && this.views.forEach(function(t) {
                            t && t.setLayout(e)
                        })
                    }
                }, {
                    key: 'updateAxis',
                    value: function(e, t) {
                        this.isPaginated || (e = 'vertical'), (t || e !== this.settings.axis) && (this.settings.axis = e, this.stage && this.stage.axis(e), this.viewSettings.axis = e, this.mapping && (this.mapping = new c.default(this.layout.props, this.settings.direction, this.settings.axis)), this.layout && ('vertical' === e ? this.layout.spread('none') : this.layout.spread(this.layout.settings.spread)))
                    }
                }, {
                    key: 'updateFlow',
                    value: function(e) {
                        var t = 'paginated' === e || 'auto' === e;
                        this.isPaginated = t, ('scrolled-doc' === e || 'scrolled-continuous' === e || 'scrolled' === e) && this.updateAxis('vertical'), this.viewSettings.flow = e, this.overflow = this.settings.overflow ? this.settings.overflow : t ? 'hidden' : 'auto', this.updateLayout()
                    }
                }, {
                    key: 'getContents',
                    value: function() {
                        var e = [];
                        return this.views ? (this.views.forEach(function(t) {
                            var n = t && t.contents;
                            n && e.push(n)
                        }), e) : e
                    }
                }, {
                    key: 'direction',
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'ltr';
                        this.settings.direction = e, this.stage && this.stage.direction(e), this.viewSettings.direction = e, this.updateLayout()
                    }
                }, {
                    key: 'isRendered',
                    value: function() {
                        return this.rendered
                    }
                }]), e
            }();
        (0, l.default)(x.prototype), t.default = x, e.exports = t['default']
    }, function(e) {
        e.exports = function(e) {
            var t = typeof e;
            return null != e && ('object' == t || 'function' == t)
        }
    }, function(e, t, n) {
        e.exports = !n(7) && !n(3)(function() {
            return 7 != Object.defineProperty(n(73)('div'), 'a', {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(e, t, n) {
        t.f = n(5)
    }, function(e, t, n) {
        var a = n(12),
            o = n(15),
            r = n(56)(!1),
            i = n(75)('IE_PROTO');
        e.exports = function(e, t) {
            var n = o(e),
                l = 0,
                s = [],
                d;
            for (d in n) d != i && a(n, d) && s.push(d);
            for (; t.length > l;) a(n, d = t[l++]) && (~r(s, d) || s.push(d));
            return s
        }
    }, function(e, t, n) {
        var a = n(8),
            o = n(1),
            r = n(33);
        e.exports = n(7) ? Object.defineProperties : function(e, t) {
            o(e);
            for (var n = r(t), l = n.length, s = 0, i; l > s;) a.f(e, i = n[s++], t[i]);
            return e
        }
    }, function(e, t, n) {
        var a = n(15),
            i = n(41).f,
            o = {}.toString,
            r = 'object' == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            l = function(e) {
                try {
                    return i(e)
                } catch (t) {
                    return r.slice()
                }
            };
        e.exports.f = function(e) {
            return r && '[object Window]' == o.call(e) ? l(e) : i(a(e))
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(33),
            i = n(57),
            o = n(53),
            r = n(10),
            l = n(52),
            s = Object.assign;
        e.exports = !s || n(3)(function() {
            var e = {},
                t = {},
                n = Symbol(),
                a = 'abcdefghijklmnopqrst';
            return e[n] = 7, a.split('').forEach(function(e) {
                t[e] = e
            }), 7 != s({}, e)[n] || Object.keys(s({}, t)).join('') != a
        }) ? function(e) {
            for (var t = r(e), n = arguments.length, s = 1, d = i.f, c = o.f; n > s;)
                for (var p = l(arguments[s++]), u = d ? a(p).concat(d(p)) : a(p), g = u.length, h = 0, m; g > h;) c.call(p, m = u[h++]) && (t[m] = p[m]);
            return t
        } : s
    }, function(e, t, n) {
        'use strict';
        var a = n(11),
            i = n(4),
            o = n(59),
            r = [].slice,
            l = {},
            s = function(e, t, a) {
                if (!(t in l)) {
                    for (var o = [], n = 0; n < t; n++) o[n] = 'a[' + n + ']';
                    l[t] = Function('F,a', 'return new F(' + o.join(',') + ')')
                }
                return l[t](e, a)
            };
        e.exports = Function.bind || function(e) {
            var t = a(this),
                n = r.call(arguments, 1),
                l = function() {
                    var a = n.concat(r.call(arguments));
                    return this instanceof l ? s(t, a.length, a) : o(t, a, e)
                };
            return i(t.prototype) && (l.prototype = t.prototype), l
        }
    }, function(e, t, n) {
        var a = n(2).parseInt,
            i = n(47).trim,
            o = n(79),
            r = /^[-+]?0[xX]/;
        e.exports = 8 !== a(o + '08') || 22 !== a(o + '0x16') ? function(e, t) {
            var n = i(e + '', 3);
            return a(n, t >>> 0 || (r.test(n) ? 16 : 10))
        } : a
    }, function(e, t, n) {
        var a = n(2).parseFloat,
            i = n(47).trim;
        e.exports = 1 / a(n(79) + '-0') == -Infinity ? a : function(e) {
            var t = i(e + '', 3),
                n = a(t);
            return 0 === n && '-' == t.charAt(0) ? -0 : n
        }
    }, function(e, t, n) {
        var a = n(20);
        e.exports = function(e, t) {
            if ('number' != typeof e && 'Number' != a(e)) throw TypeError(t);
            return +e
        }
    }, function(e, t, n) {
        var a = n(4);
        e.exports = function(e) {
            return !a(e) && isFinite(e) && y(e) === e
        }
    }, function(e) {
        e.exports = Math.log1p || function(e) {
            return -1e-8 < (e = +e) && 1e-8 > e ? e - e * e / 2 : l(1 + e)
        }
    }, function(e, t, n) {
        var i = n(82),
            a = s,
            o = a(2, -52),
            r = a(2, -23),
            l = a(2, 127) * (2 - r),
            d = a(2, -126),
            p = function(e) {
                return e + 1 / o - 1 / o
            };
        e.exports = Math.fround || function(e) {
            var t = c(e),
                n = i(e),
                s, a;
            return t < d ? n * p(t / d / r) * d * r : (s = (1 + r / o) * t, a = s - (s - t), a > l || a != a ? n * Infinity : n * a)
        }
    }, function(e, t, n) {
        var a = n(1);
        e.exports = function(t, e, n, i) {
            try {
                return i ? e(a(n)[0], n[1]) : e(n)
            } catch (n) {
                var o = t['return'];
                throw void 0 !== o && a(o.call(t)), n
            }
        }
    }, function(e, t, n) {
        var a = n(11),
            o = n(10),
            r = n(52),
            l = n(9);
        e.exports = function(e, t, n, s, d) {
            a(t);
            var c = o(e),
                p = r(c),
                u = l(c.length),
                g = d ? u - 1 : 0,
                h = d ? -1 : 1;
            if (2 > n)
                for (;;) {
                    if (g in p) {
                        s = p[g], g += h;
                        break
                    }
                    if (g += h, d ? 0 > g : u <= g) throw TypeError('Reduce of empty array with no initial value')
                }
            for (; d ? 0 <= g : u > g; g += h) g in p && (s = t(s, p[g], g, c));
            return s
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(10),
            i = n(39),
            o = n(9);
        e.exports = [].copyWithin || function(e, t) {
            var n = a(this),
                r = o(n.length),
                l = i(e, r),
                s = i(t, r),
                d = 2 < arguments.length ? arguments[2] : void 0,
                c = h((d === void 0 ? r : i(d, r)) - s, r - l),
                p = 1;
            for (s < l && l < s + c && (p = -1, s += c - 1, l += c - 1); 0 < c--;) s in n ? n[l] = n[s] : delete n[l], l += p, s += p;
            return n
        }
    }, function(e) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    }, function(e, t, n) {
        n(7) && 'g' != /./g.flags && n(8).f(RegExp.prototype, 'flags', {
            configurable: !0,
            get: n(62)
        })
    }, function(e) {
        e.exports = function(e) {
            try {
                return {
                    e: !1,
                    v: e()
                }
            } catch (t) {
                return {
                    e: !0,
                    v: t
                }
            }
        }
    }, function(e, t, n) {
        var a = n(97);
        e.exports = function(e, t) {
            var n = a.f(e),
                i = n.resolve;
            return i(t), n.promise
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(127),
            i = n(49),
            o = 'Map';
        e.exports = n(65)(o, function(e) {
            return function() {
                return e(this, 0 < arguments.length ? arguments[0] : void 0)
            }
        }, {
            get: function(e) {
                var t = a.getEntry(i(this, o), e);
                return t && t.v
            },
            set: function(e, t) {
                return a.def(i(this, o), 0 === e ? 0 : e, t)
            }
        }, a, !0)
    }, function(e, t, n) {
        'use strict';
        var a = n(8).f,
            i = n(40),
            o = n(45),
            r = n(19),
            l = n(43),
            s = n(44),
            d = n(85),
            c = n(122),
            p = n(42),
            u = n(7),
            g = n(32).fastKey,
            h = n(49),
            m = u ? '_s' : 'size',
            f = function(e, t) {
                var n = g(t),
                    a;
                if ('F' !== n) return e._i[n];
                for (a = e._f; a; a = a.n)
                    if (a.k == t) return a
            };
        e.exports = {
            getConstructor: function(e, t, n, d) {
                var c = e(function(e, a) {
                    l(e, c, t, '_i'), e._t = t, e._i = i(null), e._f = void 0, e._l = void 0, e[m] = 0, void 0 != a && s(a, n, e[d], e)
                });
                return o(c.prototype, {
                    clear: function() {
                        for (var e = h(this, t), n = e._i, a = e._f; a; a = a.n) a.r = !0, a.p && (a.p = a.p.n = void 0), delete n[a.i];
                        e._f = e._l = void 0, e[m] = 0
                    },
                    delete: function(e) {
                        var n = h(this, t),
                            a = f(n, e);
                        if (a) {
                            var i = a.n,
                                o = a.p;
                            delete n._i[a.i], a.r = !0, o && (o.n = i), i && (i.p = o), n._f == a && (n._f = i), n._l == a && (n._l = o), n[m]--
                        }
                        return !!a
                    },
                    forEach: function(e) {
                        h(this, t);
                        for (var n = r(e, 1 < arguments.length ? arguments[1] : void 0, 3), a; a = a ? a.n : this._f;)
                            for (n(a.v, a.k, this); a && a.r;) a = a.p
                    },
                    has: function(e) {
                        return !!f(h(this, t), e)
                    }
                }), u && a(c.prototype, 'size', {
                    get: function() {
                        return h(this, t)[m]
                    }
                }), c
            },
            def: function(e, t, n) {
                var a = f(e, t),
                    i, o;
                return a ? a.v = n : (e._l = a = {
                    i: o = g(t, !0),
                    k: t,
                    v: n,
                    p: i = e._l,
                    n: void 0,
                    r: !1
                }, !e._f && (e._f = a), i && (i.n = a), e[m]++, 'F' !== o && (e._i[o] = a)), e
            },
            getEntry: f,
            setStrong: function(e, t, n) {
                d(e, t, function(e, n) {
                    this._t = h(e, t), this._k = n, this._l = void 0
                }, function() {
                    for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p;
                    return e._t && (e._l = n = n ? n.n : e._t._f) ? 'keys' == t ? c(0, n.k) : 'values' == t ? c(0, n.v) : c(0, [n.k, n.v]) : (e._t = void 0, c(1))
                }, n ? 'entries' : 'values', !n, !0), p(t)
            }
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(127),
            i = n(49),
            o = 'Set';
        e.exports = n(65)(o, function(e) {
            return function() {
                return e(this, 0 < arguments.length ? arguments[0] : void 0)
            }
        }, {
            add: function(e) {
                return a.def(i(this, o), e = 0 === e ? 0 : e, e)
            }
        }, a)
    }, function(e, t, n) {
        'use strict';
        var a = n(28)(0),
            i = n(14),
            o = n(32),
            r = n(111),
            l = n(130),
            s = n(4),
            d = n(3),
            c = n(49),
            p = 'WeakMap',
            u = o.getWeak,
            g = Object.isExtensible,
            h = l.ufstore,
            m = {},
            f = function(e) {
                return function() {
                    return e(this, 0 < arguments.length ? arguments[0] : void 0)
                }
            },
            y = {
                get: function(e) {
                    if (s(e)) {
                        var t = u(e);
                        return !0 === t ? h(c(this, p)).get(e) : t ? t[this._i] : void 0
                    }
                },
                set: function(e, t) {
                    return l.def(c(this, p), e, t)
                }
            },
            v = e.exports = n(65)(p, f, y, l, !0, !0),
            x;
        d(function() {
            return 7 != new v().set((Object.freeze || Object)(m), 7).get(m)
        }) && (x = l.getConstructor(f, p), r(x.prototype, y), o.NEED = !0, a(['delete', 'has', 'get', 'set'], function(e) {
            var t = v.prototype,
                n = t[e];
            i(t, e, function(t, a) {
                if (s(t) && !g(t)) {
                    this._f || (this._f = new x);
                    var i = this._f[e](t, a);
                    return 'set' == e ? this : i
                }
                return n.call(this, t, a)
            })
        }))
    }, function(e, t, n) {
        'use strict';
        var a = n(45),
            i = n(32).getWeak,
            o = n(1),
            r = n(4),
            l = n(43),
            s = n(44),
            d = n(28),
            c = n(12),
            p = n(49),
            u = d(5),
            g = d(6),
            h = 0,
            m = function(e) {
                return e._l || (e._l = new f)
            },
            f = function() {
                this.a = []
            },
            y = function(e, t) {
                return u(e.a, function(e) {
                    return e[0] === t
                })
            };
        f.prototype = {
            get: function(e) {
                var t = y(this, e);
                if (t) return t[1]
            },
            has: function(e) {
                return !!y(this, e)
            },
            set: function(e, t) {
                var n = y(this, e);
                n ? n[1] = t : this.a.push([e, t])
            },
            delete: function(e) {
                var t = g(this.a, function(t) {
                    return t[0] === e
                });
                return ~t && this.a.splice(t, 1), !!~t
            }
        }, e.exports = {
            getConstructor: function(e, t, n, o) {
                var d = e(function(e, a) {
                    l(e, d, t, '_i'), e._t = t, e._i = h++, e._l = void 0, void 0 != a && s(a, n, e[o], e)
                });
                return a(d.prototype, {
                    delete: function(e) {
                        if (!r(e)) return !1;
                        var n = i(e);
                        return !0 === n ? m(p(this, t))['delete'](e) : n && c(n, this._i) && delete n[this._i]
                    },
                    has: function(e) {
                        if (!r(e)) return !1;
                        var n = i(e);
                        return !0 === n ? m(p(this, t)).has(e) : n && c(n, this._i)
                    }
                }), d
            },
            def: function(e, t, n) {
                var a = i(o(t), !0);
                return !0 === a ? m(e).set(t, n) : a[e._i] = n, e
            },
            ufstore: m
        }
    }, function(e, t, n) {
        var a = n(26),
            i = n(9);
        e.exports = function(e) {
            if (e === void 0) return 0;
            var t = a(e),
                n = i(t);
            if (t !== n) throw RangeError('Wrong length!');
            return n
        }
    }, function(e, t, n) {
        var a = n(41),
            i = n(57),
            o = n(1),
            r = n(2).Reflect;
        e.exports = r && r.ownKeys || function(e) {
            var t = a.f(o(e)),
                n = i.f;
            return n ? t.concat(n(e)) : t
        }
    }, function(e, t, n) {
        'use strict';

        function a(e, t, n, d, c, p, u, g) {
            for (var h = c, m = 0, f = !!u && l(u, g, 3), y, v; m < d;) {
                if (m in n) {
                    if (y = f ? f(n[m], m, t) : n[m], v = !1, o(y) && (v = y[s], v = void 0 === v ? i(y) : !!v), v && 0 < p) h = a(e, t, y, r(y.length), h, p - 1) - 1;
                    else {
                        if (9007199254740991 <= h) throw TypeError();
                        e[h] = y
                    }
                    h++
                }
                m++
            }
            return h
        }
        var i = n(58),
            o = n(4),
            r = n(9),
            l = n(19),
            s = n(5)('isConcatSpreadable');
        e.exports = a
    }, function(e, t, n) {
        var a = n(9),
            i = n(81),
            o = n(25);
        e.exports = function(e, t, n, r) {
            var l = o(e) + '',
                s = l.length,
                d = void 0 === n ? ' ' : n + '',
                c = a(t);
            if (c <= s || '' == d) return l;
            var p = c - s,
                u = i.call(d, g(p / d.length));
            return u.length > p && (u = u.slice(0, p)), r ? u + l : l + u
        }
    }, function(e, t, n) {
        var a = n(33),
            o = n(15),
            r = n(53).f;
        e.exports = function(e) {
            return function(t) {
                for (var n = o(t), l = a(n), s = l.length, d = 0, i = [], c; s > d;) r.call(n, c = l[d++]) && i.push(e ? [c, n[c]] : n[c]);
                return i
            }
        }
    }, function(e, t, n) {
        var a = n(54),
            i = n(137);
        e.exports = function(e) {
            return function() {
                if (a(this) != e) throw TypeError(e + '#toJSON isn\'t generic');
                return i(this)
            }
        }
    }, function(e, t, n) {
        var a = n(44);
        e.exports = function(e, t) {
            var n = [];
            return a(e, !1, n.push, n, t), n
        }
    }, function(e) {
        e.exports = Math.scale || function(e, t, n, a, i) {
            return 0 === arguments.length || e != e || t != t || n != n || a != a || i != i ? NaN : e === Infinity || e === -Infinity ? e : (e - t) * (i - a) / (n - t) + a
        }
    }, function(e, t) {
        function n(e, t) {
            for (var n in e) t[n] = e[n]
        }

        function a(e, a) {
            var i = e.prototype;
            if (Object.create) {
                var t = Object.create(a.prototype);
                i.__proto__ = t
            }
            if (!(i instanceof a)) {
                function o() {}
                o.prototype = a.prototype, o = new o, n(i, o), e.prototype = i = o
            }
            i.constructor != e && ('function' != typeof e && console.error('unknow Class:' + e), i.constructor = e)
        }

        function o(e, t) {
            if (t instanceof Error) var n = t;
            else n = this, Error.call(this, ae[e]), this.message = ae[e], Error.captureStackTrace && Error.captureStackTrace(this, o);
            return n.code = e, t && (this.message = this.message + ': ' + t), n
        }

        function r() {}

        function i(e, t) {
            this._node = e, this._refresh = t, l(this)
        }

        function l(e) {
            var t = e._node._inc || e._node.ownerDocument._inc;
            if (e._inc != t) {
                var a = e._refresh(e._node);
                q(e, 'length', a.length), n(a, e), e._inc = t
            }
        }

        function s() {}

        function d(e, t) {
            for (var n = e.length; n--;)
                if (e[n] === t) return n
        }

        function c(e, t, n, a) {
            if (a ? t[d(t, a)] = n : t[t.length++] = n, e) {
                n.ownerElement = e;
                var i = e.ownerDocument;
                i && (a && v(i, e, a), y(i, e, n))
            }
        }

        function p(e, t, n) {
            var a = d(t, n);
            if (0 <= a) {
                for (var i = t.length - 1; a < i;) t[a] = t[++a];
                if (t.length = i, e) {
                    var r = e.ownerDocument;
                    r && (v(r, e, n), n.ownerElement = null)
                }
            } else throw o(pe, new Error(e.tagName + '@' + n))
        }

        function u(e) {
            if (this._features = {}, e)
                for (var t in e) this._features = e[t]
        }

        function g() {}

        function h(e) {
            return '<' == e && '&lt;' || '>' == e && '&gt;' || '&' == e && '&amp;' || '"' == e && '&quot;' || '&#' + e.charCodeAt() + ';'
        }

        function m(e, t) {
            if (t(e)) return !0;
            if (e = e.firstChild)
                do
                    if (m(e, t)) return !0;
            while (e = e.nextSibling)
        }

        function f() {}

        function y(e, t, n) {
            e && e._inc++;
            var a = n.namespaceURI;
            'http://www.w3.org/2000/xmlns/' == a && (t._nsMap[n.prefix ? n.localName : ''] = n.value)
        }

        function v(e, t, n) {
            e && e._inc++;
            var a = n.namespaceURI;
            'http://www.w3.org/2000/xmlns/' == a && delete t._nsMap[n.prefix ? n.localName : '']
        }

        function b(e, t, n) {
            if (e && e._inc) {
                e._inc++;
                var a = t.childNodes;
                if (n) a[a.length++] = n;
                else {
                    for (var o = t.firstChild, r = 0; o;) a[r++] = o, o = o.nextSibling;
                    a.length = r
                }
            }
        }

        function x(e, t) {
            var n = t.previousSibling,
                a = t.nextSibling;
            return n ? n.nextSibling = a : e.firstChild = a, a ? a.previousSibling = n : e.lastChild = n, b(e.ownerDocument, e), t
        }

        function E(e, t, n) {
            var a = t.parentNode;
            if (a && a.removeChild(t), t.nodeType === ee) {
                var i = t.firstChild;
                if (null == i) return t;
                var o = t.lastChild
            } else i = o = t;
            var r = n ? n.previousSibling : e.lastChild;
            i.previousSibling = r, o.nextSibling = n, r ? r.nextSibling = i : e.firstChild = i, null == n ? e.lastChild = o : n.previousSibling = o;
            do i.parentNode = e; while (i !== o && (i = i.nextSibling));
            return b(e.ownerDocument || e, e), t.nodeType == ee && (t.firstChild = t.lastChild = null), t
        }

        function k(e, t) {
            var n = t.parentNode;
            if (n) {
                var a = e.lastChild;
                n.removeChild(t);
                var a = e.lastChild
            }
            var a = e.lastChild;
            return t.parentNode = e, t.previousSibling = a, t.nextSibling = null, a ? a.nextSibling = t : e.firstChild = t, e.lastChild = t, b(e.ownerDocument, e, t), t
        }

        function _() {
            this._nsMap = {}
        }

        function S() {}

        function N() {}

        function w() {}

        function T() {}

        function C() {}

        function R() {}

        function P() {}

        function O() {}

        function A() {}

        function I() {}

        function L() {}

        function D() {}

        function M(e, t) {
            var n = [],
                a = 9 == this.nodeType ? this.documentElement : this,
                i = a.prefix,
                o = a.namespaceURI;
            if (o && null == i) {
                var i = a.lookupPrefix(o);
                if (null == i) var r = [{
                    namespace: o,
                    prefix: null
                }]
            }
            return F(this, n, e, t, r), n.join('')
        }

        function B(e, t, n) {
            var a = e.prefix || '',
                o = e.namespaceURI;
            if (!a && !o) return !1;
            if ('xml' === a && 'http://www.w3.org/XML/1998/namespace' === o || 'http://www.w3.org/2000/xmlns/' == o) return !1;
            for (var r = n.length; r--;) {
                var i = n[r];
                if (i.prefix == a) return i.namespace != o
            }
            return !0
        }

        function F(e, t, n, a, o) {
            if (a) {
                if (e = a(e), !e) return;
                if ('string' == typeof e) return void t.push(e)
            }
            switch (e.nodeType) {
                case W:
                    o || (o = []);
                    var r = o.length,
                        l = e.attributes,
                        s = l.length,
                        d = e.firstChild,
                        c = e.tagName;
                    n = U === e.namespaceURI || n, t.push('<', c);
                    for (var p = 0, i; p < s; p++) i = l.item(p), 'xmlns' == i.prefix ? o.push({
                        prefix: i.localName,
                        namespace: i.value
                    }) : 'xmlns' == i.nodeName && o.push({
                        prefix: '',
                        namespace: i.value
                    });
                    for (var p = 0, i; p < s; p++) {
                        if (i = l.item(p), B(i, n, o)) {
                            var u = i.prefix || '',
                                g = i.namespaceURI,
                                m = u ? ' xmlns:' + u : ' xmlns';
                            t.push(m, '="', g, '"'), o.push({
                                prefix: u,
                                namespace: g
                            })
                        }
                        F(i, t, n, a, o)
                    }
                    if (B(e, n, o)) {
                        var u = e.prefix || '',
                            g = e.namespaceURI,
                            m = u ? ' xmlns:' + u : ' xmlns';
                        t.push(m, '="', g, '"'), o.push({
                            prefix: u,
                            namespace: g
                        })
                    }
                    if (d || n && !/^(?:meta|link|img|br|hr|input)$/i.test(c)) {
                        if (t.push('>'), n && /^script$/i.test(c))
                            for (; d;) d.data ? t.push(d.data) : F(d, t, n, a, o), d = d.nextSibling;
                        else
                            for (; d;) F(d, t, n, a, o), d = d.nextSibling;
                        t.push('</', c, '>')
                    } else t.push('/>');
                    return;
                case J:
                case ee:
                    for (var d = e.firstChild; d;) F(d, t, n, a, o), d = d.nextSibling;
                    return;
                case H:
                    return t.push(' ', e.name, '="', e.value.replace(/[<&"]/g, h), '"');
                case G:
                    return t.push(e.data.replace(/[<&]/g, h));
                case Y:
                    return t.push('<![CDATA[', e.data, ']]>');
                case Z:
                    return t.push('<!--', e.data, '-->');
                case Q:
                    var f = e.publicId,
                        y = e.systemId;
                    if (t.push('<!DOCTYPE ', e.name), f) t.push(' PUBLIC "', f), y && '.' != y && t.push('" "', y), t.push('">');
                    else if (y && '.' != y) t.push(' SYSTEM "', y, '">');
                    else {
                        var v = e.internalSubset;
                        v && t.push(' [', v, ']'), t.push('>')
                    }
                    return;
                case $:
                    return t.push('<?', e.target, ' ', e.data, '?>');
                case K:
                    return t.push('&', e.nodeName, ';');
                default:
                    t.push('??', e.nodeName);
            }
        }

        function z(e, t, n) {
            var a;
            switch (t.nodeType) {
                case W:
                    a = t.cloneNode(!1), a.ownerDocument = e;
                case ee:
                    break;
                case H:
                    n = !0;
            }
            if (a || (a = t.cloneNode(!1)), a.ownerDocument = e, a.parentNode = null, n)
                for (var i = t.firstChild; i;) a.appendChild(z(e, i, n)), i = i.nextSibling;
            return a
        }

        function j(e, t, a) {
            var o = new t.constructor;
            for (var l in t) {
                var n = t[l];
                'object' != typeof n && n != o[l] && (o[l] = n)
            }
            switch (t.childNodes && (o.childNodes = new r), o.ownerDocument = e, o.nodeType) {
                case W:
                    var d = t.attributes,
                        c = o.attributes = new s,
                        p = d.length;
                    c._ownerElement = o;
                    for (var u = 0; u < p; u++) o.setAttributeNode(j(e, d.item(u), !0));
                    break;;
                case H:
                    a = !0;
            }
            if (a)
                for (var i = t.firstChild; i;) o.appendChild(j(e, i, a)), i = i.nextSibling;
            return o
        }

        function q(e, t, n) {
            e[t] = n
        }
        var U = 'http://www.w3.org/1999/xhtml',
            V = {},
            W = V.ELEMENT_NODE = 1,
            H = V.ATTRIBUTE_NODE = 2,
            G = V.TEXT_NODE = 3,
            Y = V.CDATA_SECTION_NODE = 4,
            K = V.ENTITY_REFERENCE_NODE = 5,
            X = V.ENTITY_NODE = 6,
            $ = V.PROCESSING_INSTRUCTION_NODE = 7,
            Z = V.COMMENT_NODE = 8,
            J = V.DOCUMENT_NODE = 9,
            Q = V.DOCUMENT_TYPE_NODE = 10,
            ee = V.DOCUMENT_FRAGMENT_NODE = 11,
            te = V.NOTATION_NODE = 12,
            ne = {},
            ae = {},
            ie = ne.INDEX_SIZE_ERR = (ae[1] = 'Index size error', 1),
            oe = ne.DOMSTRING_SIZE_ERR = (ae[2] = 'DOMString size error', 2),
            re = ne.HIERARCHY_REQUEST_ERR = (ae[3] = 'Hierarchy request error', 3),
            le = ne.WRONG_DOCUMENT_ERR = (ae[4] = 'Wrong document', 4),
            se = ne.INVALID_CHARACTER_ERR = (ae[5] = 'Invalid character', 5),
            de = ne.NO_DATA_ALLOWED_ERR = (ae[6] = 'No data allowed', 6),
            ce = ne.NO_MODIFICATION_ALLOWED_ERR = (ae[7] = 'No modification allowed', 7),
            pe = ne.NOT_FOUND_ERR = (ae[8] = 'Not found', 8),
            ue = ne.NOT_SUPPORTED_ERR = (ae[9] = 'Not supported', 9),
            ge = ne.INUSE_ATTRIBUTE_ERR = (ae[10] = 'Attribute in use', 10),
            he = ne.INVALID_STATE_ERR = (ae[11] = 'Invalid state', 11),
            me = ne.SYNTAX_ERR = (ae[12] = 'Syntax error', 12),
            fe = ne.INVALID_MODIFICATION_ERR = (ae[13] = 'Invalid modification', 13),
            ye = ne.NAMESPACE_ERR = (ae[14] = 'Invalid namespace', 14),
            ve = ne.INVALID_ACCESS_ERR = (ae[15] = 'Invalid access', 15);
        o.prototype = Error.prototype, n(ne, o);
        r.prototype = {
            length: 0,
            item: function(e) {
                return this[e] || null
            },
            toString: function(e, t) {
                for (var n = [], a = 0; a < this.length; a++) F(this[a], n, e, t);
                return n.join('')
            }
        }, i.prototype.item = function(e) {
            return l(this), this[e]
        }, a(i, r);
        s.prototype = {
            length: 0,
            item: r.prototype.item,
            getNamedItem: function(e) {
                for (var t = this.length; t--;) {
                    var n = this[t];
                    if (n.nodeName == e) return n
                }
            },
            setNamedItem: function(e) {
                var t = e.ownerElement;
                if (t && t != this._ownerElement) throw new o(ge);
                var n = this.getNamedItem(e.nodeName);
                return c(this._ownerElement, this, e, n), n
            },
            setNamedItemNS: function(e) {
                var t = e.ownerElement,
                    n;
                if (t && t != this._ownerElement) throw new o(ge);
                return n = this.getNamedItemNS(e.namespaceURI, e.localName), c(this._ownerElement, this, e, n), n
            },
            removeNamedItem: function(e) {
                var t = this.getNamedItem(e);
                return p(this._ownerElement, this, t), t
            },
            removeNamedItemNS: function(e, t) {
                var n = this.getNamedItemNS(e, t);
                return p(this._ownerElement, this, n), n
            },
            getNamedItemNS: function(e, t) {
                for (var n = this.length; n--;) {
                    var a = this[n];
                    if (a.localName == t && a.namespaceURI == e) return a
                }
                return null
            }
        };
        u.prototype = {
            hasFeature: function(e, t) {
                var n = this._features[e.toLowerCase()];
                return n && (!t || t in n)
            },
            createDocument: function(e, t, n) {
                var a = new f;
                if (a.implementation = this, a.childNodes = new r, a.doctype = n, n && a.appendChild(n), t) {
                    var i = a.createElementNS(e, t);
                    a.appendChild(i)
                }
                return a
            },
            createDocumentType: function(e, t, n) {
                var a = new R;
                return a.name = e, a.nodeName = e, a.publicId = t, a.systemId = n, a
            }
        };
        g.prototype = {
            firstChild: null,
            lastChild: null,
            previousSibling: null,
            nextSibling: null,
            attributes: null,
            parentNode: null,
            childNodes: null,
            ownerDocument: null,
            nodeValue: null,
            namespaceURI: null,
            prefix: null,
            localName: null,
            insertBefore: function(e, t) {
                return E(this, e, t)
            },
            replaceChild: function(e, t) {
                this.insertBefore(e, t), t && this.removeChild(t)
            },
            removeChild: function(e) {
                return x(this, e)
            },
            appendChild: function(e) {
                return this.insertBefore(e, null)
            },
            hasChildNodes: function() {
                return null != this.firstChild
            },
            cloneNode: function(e) {
                return j(this.ownerDocument || this, this, e)
            },
            normalize: function() {
                for (var e = this.firstChild; e;) {
                    var t = e.nextSibling;
                    t && t.nodeType == G && e.nodeType == G ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), e = t)
                }
            },
            isSupported: function(e, t) {
                return this.ownerDocument.implementation.hasFeature(e, t)
            },
            hasAttributes: function() {
                return 0 < this.attributes.length
            },
            lookupPrefix: function(e) {
                for (var t = this; t;) {
                    var a = t._nsMap;
                    if (a)
                        for (var i in a)
                            if (a[i] == e) return i;
                    t = t.nodeType == H ? t.ownerDocument : t.parentNode
                }
                return null
            },
            lookupNamespaceURI: function(e) {
                for (var t = this; t;) {
                    var n = t._nsMap;
                    if (n && e in n) return n[e];
                    t = t.nodeType == H ? t.ownerDocument : t.parentNode
                }
                return null
            },
            isDefaultNamespace: function(e) {
                var t = this.lookupPrefix(e);
                return null == t
            }
        }, n(V, g), n(V, g.prototype), f.prototype = {
            nodeName: '#document',
            nodeType: J,
            doctype: null,
            documentElement: null,
            _inc: 1,
            insertBefore: function(e, t) {
                if (e.nodeType == ee) {
                    for (var n = e.firstChild, a; n;) a = n.nextSibling, this.insertBefore(n, t), n = a;
                    return e
                }
                return null == this.documentElement && e.nodeType == W && (this.documentElement = e), E(this, e, t), e.ownerDocument = this, e
            },
            removeChild: function(e) {
                return this.documentElement == e && (this.documentElement = null), x(this, e)
            },
            importNode: function(e, t) {
                return z(this, e, t)
            },
            getElementById: function(e) {
                var t = null;
                return m(this.documentElement, function(n) {
                    if (n.nodeType == W && n.getAttribute('id') == e) return t = n, !0
                }), t
            },
            createElement: function(e) {
                var t = new _;
                t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.childNodes = new r;
                var n = t.attributes = new s;
                return n._ownerElement = t, t
            },
            createDocumentFragment: function() {
                var e = new I;
                return e.ownerDocument = this, e.childNodes = new r, e
            },
            createTextNode: function(e) {
                var t = new w;
                return t.ownerDocument = this, t.appendData(e), t
            },
            createComment: function(e) {
                var t = new T;
                return t.ownerDocument = this, t.appendData(e), t
            },
            createCDATASection: function(e) {
                var t = new C;
                return t.ownerDocument = this, t.appendData(e), t
            },
            createProcessingInstruction: function(e, t) {
                var n = new L;
                return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = t, n
            },
            createAttribute: function(e) {
                var t = new S;
                return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, t
            },
            createEntityReference: function(e) {
                var t = new A;
                return t.ownerDocument = this, t.nodeName = e, t
            },
            createElementNS: function(e, t) {
                var n = new _,
                    a = t.split(':'),
                    i = n.attributes = new s;
                return n.childNodes = new r, n.ownerDocument = this, n.nodeName = t, n.tagName = t, n.namespaceURI = e, 2 == a.length ? (n.prefix = a[0], n.localName = a[1]) : n.localName = t, i._ownerElement = n, n
            },
            createAttributeNS: function(e, t) {
                var n = new S,
                    a = t.split(':');
                return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = !0, 2 == a.length ? (n.prefix = a[0], n.localName = a[1]) : n.localName = t, n
            }
        }, a(f, g);
        _.prototype = {
            nodeType: W,
            hasAttribute: function(e) {
                return null != this.getAttributeNode(e)
            },
            getAttribute: function(e) {
                var t = this.getAttributeNode(e);
                return t && t.value || ''
            },
            getAttributeNode: function(e) {
                return this.attributes.getNamedItem(e)
            },
            setAttribute: function(e, t) {
                var n = this.ownerDocument.createAttribute(e);
                n.value = n.nodeValue = '' + t, this.setAttributeNode(n)
            },
            removeAttribute: function(e) {
                var t = this.getAttributeNode(e);
                t && this.removeAttributeNode(t)
            },
            appendChild: function(e) {
                return e.nodeType === ee ? this.insertBefore(e, null) : k(this, e)
            },
            setAttributeNode: function(e) {
                return this.attributes.setNamedItem(e)
            },
            setAttributeNodeNS: function(e) {
                return this.attributes.setNamedItemNS(e)
            },
            removeAttributeNode: function(e) {
                return this.attributes.removeNamedItem(e.nodeName)
            },
            removeAttributeNS: function(e, t) {
                var n = this.getAttributeNodeNS(e, t);
                n && this.removeAttributeNode(n)
            },
            hasAttributeNS: function(e, t) {
                return null != this.getAttributeNodeNS(e, t)
            },
            getAttributeNS: function(e, t) {
                var n = this.getAttributeNodeNS(e, t);
                return n && n.value || ''
            },
            setAttributeNS: function(e, t, n) {
                var a = this.ownerDocument.createAttributeNS(e, t);
                a.value = a.nodeValue = '' + n, this.setAttributeNode(a)
            },
            getAttributeNodeNS: function(e, t) {
                return this.attributes.getNamedItemNS(e, t)
            },
            getElementsByTagName: function(e) {
                return new i(this, function(t) {
                    var n = [];
                    return m(t, function(a) {
                        a !== t && a.nodeType == W && ('*' === e || a.tagName == e) && n.push(a)
                    }), n
                })
            },
            getElementsByTagNameNS: function(e, t) {
                return new i(this, function(n) {
                    var a = [];
                    return m(n, function(i) {
                        i !== n && i.nodeType === W && ('*' === e || i.namespaceURI === e) && ('*' === t || i.localName == t) && a.push(i)
                    }), a
                })
            }
        }, f.prototype.getElementsByTagName = _.prototype.getElementsByTagName, f.prototype.getElementsByTagNameNS = _.prototype.getElementsByTagNameNS, a(_, g);
        S.prototype.nodeType = H, a(S, g);
        N.prototype = {
            data: '',
            substringData: function(e, t) {
                return this.data.substring(e, e + t)
            },
            appendData: function(e) {
                e = this.data + e, this.nodeValue = this.data = e, this.length = e.length
            },
            insertData: function(e, t) {
                this.replaceData(e, 0, t)
            },
            appendChild: function() {
                throw new Error(ae[re])
            },
            deleteData: function(e, t) {
                this.replaceData(e, t, '')
            },
            replaceData: function(e, t, n) {
                var a = this.data.substring(0, e),
                    i = this.data.substring(e + t);
                n = a + n + i, this.nodeValue = this.data = n, this.length = n.length
            }
        }, a(N, g);
        w.prototype = {
            nodeName: '#text',
            nodeType: G,
            splitText: function(e) {
                var t = this.data,
                    n = t.substring(e);
                t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;
                var a = this.ownerDocument.createTextNode(n);
                return this.parentNode && this.parentNode.insertBefore(a, this.nextSibling), a
            }
        }, a(w, N);
        T.prototype = {
            nodeName: '#comment',
            nodeType: Z
        }, a(T, N);
        C.prototype = {
            nodeName: '#cdata-section',
            nodeType: Y
        }, a(C, N);
        R.prototype.nodeType = Q, a(R, g);
        P.prototype.nodeType = te, a(P, g);
        O.prototype.nodeType = X, a(O, g);
        A.prototype.nodeType = K, a(A, g);
        I.prototype.nodeName = '#document-fragment', I.prototype.nodeType = ee, a(I, g), L.prototype.nodeType = $, a(L, g), D.prototype.serializeToString = function(e, t, n) {
            return M.call(e, t, n)
        }, g.prototype.toString = M;
        try {
            if (Object.defineProperty) {
                function e(t) {
                    switch (t.nodeType) {
                        case W:
                        case ee:
                            var n = [];
                            for (t = t.firstChild; t;) 7 !== t.nodeType && 8 !== t.nodeType && n.push(e(t)), t = t.nextSibling;
                            return n.join('');
                        default:
                            return t.nodeValue;
                    }
                }
                Object.defineProperty(i.prototype, 'length', {
                    get: function() {
                        return l(this), this.$$length
                    }
                }), Object.defineProperty(g.prototype, 'textContent', {
                    get: function() {
                        return e(this)
                    },
                    set: function(e) {
                        switch (this.nodeType) {
                            case W:
                            case ee:
                                for (; this.firstChild;) this.removeChild(this.firstChild);
                                (e || e + '') && this.appendChild(this.ownerDocument.createTextNode(e));
                                break;
                            default:
                                this.data = e, this.value = e, this.nodeValue = e;
                        }
                    }
                }), q = function(e, t, n) {
                    e['$$' + t] = n
                }
            }
        } catch (t) {}
        t.DOMImplementation = u, t.XMLSerializer = D
    }, function(e) {
        'use strict';
        var t = {
                application: {
                    ecmascript: ['es', 'ecma'],
                    javascript: 'js',
                    ogg: 'ogx',
                    pdf: 'pdf',
                    postscript: ['ps', 'ai', 'eps', 'epsi', 'epsf', 'eps2', 'eps3'],
                    "rdf+xml": 'rdf',
                    smil: ['smi', 'smil'],
                    "xhtml+xml": ['xhtml', 'xht'],
                    xml: ['xml', 'xsl', 'xsd', 'opf', 'ncx'],
                    zip: 'zip',
                    "x-httpd-eruby": 'rhtml',
                    "x-latex": 'latex',
                    "x-maker": ['frm', 'maker', 'frame', 'fm', 'fb', 'book', 'fbdoc'],
                    "x-object": 'o',
                    "x-shockwave-flash": ['swf', 'swfl'],
                    "x-silverlight": 'scr',
                    "epub+zip": 'epub',
                    "font-tdpfr": 'pfr',
                    "inkml+xml": ['ink', 'inkml'],
                    json: 'json',
                    "jsonml+json": 'jsonml',
                    "mathml+xml": 'mathml',
                    "metalink+xml": 'metalink',
                    mp4: 'mp4s',
                    "omdoc+xml": 'omdoc',
                    oxps: 'oxps',
                    "vnd.amazon.ebook": 'azw',
                    widget: 'wgt',
                    "x-dtbook+xml": 'dtb',
                    "x-dtbresource+xml": 'res',
                    "x-font-bdf": 'bdf',
                    "x-font-ghostscript": 'gsf',
                    "x-font-linux-psf": 'psf',
                    "x-font-otf": 'otf',
                    "x-font-pcf": 'pcf',
                    "x-font-snf": 'snf',
                    "x-font-ttf": ['ttf', 'ttc'],
                    "x-font-type1": ['pfa', 'pfb', 'pfm', 'afm'],
                    "x-font-woff": 'woff',
                    "x-mobipocket-ebook": ['prc', 'mobi'],
                    "x-mspublisher": 'pub',
                    "x-nzb": 'nzb',
                    "x-tgif": 'obj',
                    "xaml+xml": 'xaml',
                    "xml-dtd": 'dtd',
                    "xproc+xml": 'xpl',
                    "xslt+xml": 'xslt',
                    "internet-property-stream": 'acx',
                    "x-compress": 'z',
                    "x-compressed": 'tgz',
                    "x-gzip": 'gz'
                },
                audio: {
                    flac: 'flac',
                    midi: ['mid', 'midi', 'kar', 'rmi'],
                    mpeg: ['mpga', 'mpega', 'mp2', 'mp3', 'm4a', 'mp2a', 'm2a', 'm3a'],
                    mpegurl: 'm3u',
                    ogg: ['oga', 'ogg', 'spx'],
                    "x-aiff": ['aif', 'aiff', 'aifc'],
                    "x-ms-wma": 'wma',
                    "x-wav": 'wav',
                    adpcm: 'adp',
                    mp4: 'mp4a',
                    webm: 'weba',
                    "x-aac": 'aac',
                    "x-caf": 'caf',
                    "x-matroska": 'mka',
                    "x-pn-realaudio-plugin": 'rmp',
                    xm: 'xm',
                    mid: ['mid', 'rmi']
                },
                image: {
                    gif: 'gif',
                    ief: 'ief',
                    jpeg: ['jpeg', 'jpg', 'jpe'],
                    pcx: 'pcx',
                    png: 'png',
                    "svg+xml": ['svg', 'svgz'],
                    tiff: ['tiff', 'tif'],
                    "x-icon": 'ico',
                    bmp: 'bmp',
                    webp: 'webp',
                    "x-pict": ['pic', 'pct'],
                    "x-tga": 'tga',
                    "cis-cod": 'cod'
                },
                text: {
                    "cache-manifest": ['manifest', 'appcache'],
                    css: 'css',
                    csv: 'csv',
                    html: ['html', 'htm', 'shtml', 'stm'],
                    mathml: 'mml',
                    plain: ['txt', 'text', 'brf', 'conf', 'def', 'list', 'log', 'in', 'bas'],
                    richtext: 'rtx',
                    "tab-separated-values": 'tsv',
                    "x-bibtex": 'bib'
                },
                video: {
                    mpeg: ['mpeg', 'mpg', 'mpe', 'm1v', 'm2v', 'mp2', 'mpa', 'mpv2'],
                    mp4: ['mp4', 'mp4v', 'mpg4'],
                    quicktime: ['qt', 'mov'],
                    ogg: 'ogv',
                    "vnd.mpegurl": ['mxu', 'm4u'],
                    "x-flv": 'flv',
                    "x-la-asf": ['lsf', 'lsx'],
                    "x-mng": 'mng',
                    "x-ms-asf": ['asf', 'asx', 'asr'],
                    "x-ms-wm": 'wm',
                    "x-ms-wmv": 'wmv',
                    "x-ms-wmx": 'wmx',
                    "x-ms-wvx": 'wvx',
                    "x-msvideo": 'avi',
                    "x-sgi-movie": 'movie',
                    "x-matroska": ['mpv', 'mkv', 'mk3d', 'mks'],
                    "3gpp2": '3g2',
                    h261: 'h261',
                    h263: 'h263',
                    h264: 'h264',
                    jpeg: 'jpgv',
                    jpm: ['jpm', 'jpgm'],
                    mj2: ['mj2', 'mjp2'],
                    "vnd.ms-playready.media.pyv": 'pyv',
                    "vnd.uvvu.mp4": ['uvu', 'uvvu'],
                    "vnd.vivo": 'viv',
                    webm: 'webm',
                    "x-f4v": 'f4v',
                    "x-m4v": 'm4v',
                    "x-ms-vob": 'vob',
                    "x-smv": 'smv'
                }
            },
            n = function() {
                var e = {},
                    n, a, i, o;
                for (n in t)
                    if (t.hasOwnProperty(n))
                        for (a in t[n])
                            if (t[n].hasOwnProperty(a))
                                if (i = t[n][a], 'string' == typeof i) e[i] = n + '/' + a;
                                else
                                    for (o = 0; o < i.length; o++) e[i[o]] = n + '/' + a;
                return e
            }();
        e.exports = {
            lookup: function(e) {
                return e && n[e.split('.').pop().toLowerCase()] || 'text/plain'
            }
        }
    }, function(e, t, n) {
        'use strict';

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            },
            r = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            l = n(35),
            s = a(l),
            d = n(6),
            c = n(100),
            p = a(c),
            u = n(22),
            g = a(u),
            h = n(102),
            m = a(h),
            f = n(382),
            y = a(f),
            v = n(383),
            b = a(v),
            x = n(103),
            E = a(x),
            k = n(384),
            _ = a(k),
            S = n(31),
            N = n(143),
            w = a(N),
            T = n(104),
            C = a(T),
            R = n(147),
            P = a(R),
            O = function() {
                function e(t, n) {
                    i(this, e), this.settings = (0, d.extend)(this.settings || {}, {
                        width: null,
                        height: null,
                        ignoreClass: '',
                        manager: 'default',
                        view: 'iframe',
                        flow: null,
                        layout: null,
                        spread: null,
                        minSpreadWidth: 800,
                        stylesheet: null,
                        resizeOnOrientationChange: !0,
                        script: null
                    }), (0, d.extend)(this.settings, n), 'object' === o(this.settings.manager) && (this.manager = this.settings.manager), this.book = t, this.hooks = {}, this.hooks.display = new p.default(this), this.hooks.serialize = new p.default(this), this.hooks.content = new p.default(this), this.hooks.unloaded = new p.default(this), this.hooks.layout = new p.default(this), this.hooks.render = new p.default(this), this.hooks.show = new p.default(this), this.hooks.content.register(this.handleLinks.bind(this)), this.hooks.content.register(this.passEvents.bind(this)), this.hooks.content.register(this.adjustImages.bind(this)), this.book.spine.hooks.content.register(this.injectIdentifier.bind(this)), this.settings.stylesheet && this.book.spine.hooks.content.register(this.injectStylesheet.bind(this)), this.settings.script && this.book.spine.hooks.content.register(this.injectScript.bind(this)), this.themes = new b.default(this), this.annotations = new _.default(this), this.epubcfi = new g.default, this.q = new m.default(this), this.location = void 0, this.q.enqueue(this.book.opened), this.starting = new d.defer, this.started = this.starting.promise, this.q.enqueue(this.start)
                }
                return r(e, [{
                    key: 'setManager',
                    value: function(e) {
                        this.manager = e
                    }
                }, {
                    key: 'requireManager',
                    value: function(e) {
                        var t;
                        return t = 'string' == typeof e && 'default' === e ? C.default : 'string' == typeof e && 'continuous' === e ? P.default : e, t
                    }
                }, {
                    key: 'requireView',
                    value: function(e) {
                        var t;
                        return t = 'string' == typeof e && 'iframe' === e ? w.default : e, t
                    }
                }, {
                    key: 'start',
                    value: function() {
                        this.manager || (this.ViewManager = this.requireManager(this.settings.manager), this.View = this.requireView(this.settings.view), this.manager = new this.ViewManager({
                            view: this.View,
                            queue: this.q,
                            request: this.book.load.bind(this.book),
                            settings: this.settings
                        })), this.direction(this.book.package.metadata.direction), this.settings.globalLayoutProperties = this.determineLayoutProperties(this.book.package.metadata), this.flow(this.settings.globalLayoutProperties.flow), this.layout(this.settings.globalLayoutProperties), this.manager.on(S.EVENTS.MANAGERS.ADDED, this.afterDisplayed.bind(this)), this.manager.on(S.EVENTS.MANAGERS.REMOVED, this.afterRemoved.bind(this)), this.manager.on(S.EVENTS.MANAGERS.RESIZED, this.onResized.bind(this)), this.manager.on(S.EVENTS.MANAGERS.ORIENTATION_CHANGE, this.onOrientationChange.bind(this)), this.manager.on(S.EVENTS.MANAGERS.SCROLLED, this.reportLocation.bind(this)), this.emit(S.EVENTS.RENDITION.STARTED), this.starting.resolve()
                    }
                }, {
                    key: 'attachTo',
                    value: function(e) {
                        return this.q.enqueue(function() {
                            this.manager.render(e, {
                                width: this.settings.width,
                                height: this.settings.height
                            }), this.emit(S.EVENTS.RENDITION.ATTACHED)
                        }.bind(this))
                    }
                }, {
                    key: 'display',
                    value: function(e) {
                        return this.displaying && this.displaying.resolve(), this.q.enqueue(this._display, e)
                    }
                }, {
                    key: '_display',
                    value: function(e) {
                        var t = this;
                        if (this.book) {
                            var n = this.epubcfi.isCfiString(e),
                                a = new d.defer,
                                i = a.promise,
                                o;
                            return (this.displaying = a, this.book.locations.length() && (0, d.isFloat)(e) && (e = this.book.locations.cfiFromPercentage(parseFloat(e))), o = this.book.spine.get(e), !o) ? (a.reject(new Error('No Section Found')), i) : (this.manager.display(o, e).then(function() {
                                a.resolve(o), t.displaying = void 0, t.emit(S.EVENTS.RENDITION.DISPLAYED, o), t.reportLocation()
                            }, function(e) {
                                t.emit(S.EVENTS.RENDITION.DISPLAY_ERROR, e)
                            }), i)
                        }
                    }
                }, {
                    key: 'afterDisplayed',
                    value: function(e) {
                        var t = this;
                        e.on(S.EVENTS.VIEWS.MARK_CLICKED, function(n, a) {
                            return t.triggerMarkEvent(n, a, e)
                        }), this.hooks.render.trigger(e, this).then(function() {
                            e.contents ? t.hooks.content.trigger(e.contents, t).then(function() {
                                t.emit(S.EVENTS.RENDITION.RENDERED, e.section, e)
                            }) : t.emit(S.EVENTS.RENDITION.RENDERED, e.section, e)
                        })
                    }
                }, {
                    key: 'afterRemoved',
                    value: function(e) {
                        var t = this;
                        this.hooks.unloaded.trigger(e, this).then(function() {
                            t.emit(S.EVENTS.RENDITION.REMOVED, e.section, e)
                        })
                    }
                }, {
                    key: 'onResized',
                    value: function(e) {
                        this.emit(S.EVENTS.RENDITION.RESIZED, {
                            width: e.width,
                            height: e.height
                        }), this.location && this.location.start && this.display(this.location.start.cfi)
                    }
                }, {
                    key: 'onOrientationChange',
                    value: function(e) {
                        this.emit(S.EVENTS.RENDITION.ORIENTATION_CHANGE, e)
                    }
                }, {
                    key: 'moveTo',
                    value: function(e) {
                        this.manager.moveTo(e)
                    }
                }, {
                    key: 'resize',
                    value: function(e, t) {
                        e && (this.settings.width = e), t && (this.settings.height = t), this.manager.resize(e, t)
                    }
                }, {
                    key: 'clear',
                    value: function() {
                        this.manager.clear()
                    }
                }, {
                    key: 'next',
                    value: function() {
                        return this.q.enqueue(this.manager.next.bind(this.manager)).then(this.reportLocation.bind(this))
                    }
                }, {
                    key: 'prev',
                    value: function() {
                        return this.q.enqueue(this.manager.prev.bind(this.manager)).then(this.reportLocation.bind(this))
                    }
                }, {
                    key: 'determineLayoutProperties',
                    value: function(e) {
                        var t = this.settings.layout || e.layout || 'reflowable',
                            n = this.settings.spread || e.spread || 'auto',
                            a = this.settings.orientation || e.orientation || 'auto',
                            i = this.settings.flow || e.flow || 'auto',
                            o = e.viewport || '',
                            r = this.settings.minSpreadWidth || e.minSpreadWidth || 800,
                            l = this.settings.direction || e.direction || 'ltr',
                            s;
                        return (0 === this.settings.width || 0 < this.settings.width) && (0 === this.settings.height || 0 < this.settings.height), s = {
                            layout: t,
                            spread: n,
                            orientation: a,
                            flow: i,
                            viewport: o,
                            minSpreadWidth: r,
                            direction: l
                        }, s
                    }
                }, {
                    key: 'flow',
                    value: function(e) {
                        var t = e;
                        ('scrolled' === e || 'scrolled-doc' === e || 'scrolled-continuous' === e) && (t = 'scrolled'), ('auto' === e || 'paginated' === e) && (t = 'paginated'), this.settings.flow = e, this._layout && this._layout.flow(t), this.manager && this._layout && this.manager.applyLayout(this._layout), this.manager && this.manager.updateFlow(t), this.manager && this.manager.isRendered() && this.location && (this.manager.clear(), this.display(this.location.start.cfi))
                    }
                }, {
                    key: 'layout',
                    value: function(e) {
                        var t = this;
                        return e && (this._layout = new y.default(e), this._layout.spread(e.spread, this.settings.minSpreadWidth), this._layout.on(S.EVENTS.LAYOUT.UPDATED, function(e, n) {
                            t.emit(S.EVENTS.RENDITION.LAYOUT, e, n)
                        })), this.manager && this._layout && this.manager.applyLayout(this._layout), this._layout
                    }
                }, {
                    key: 'spread',
                    value: function(e, t) {
                        this._layout.spread(e, t), this.manager.isRendered() && this.manager.updateLayout()
                    }
                }, {
                    key: 'direction',
                    value: function(e) {
                        this.settings.direction = e || 'ltr', this.manager && this.manager.direction(this.settings.direction), this.manager && this.manager.isRendered() && this.location && (this.manager.clear(), this.display(this.location.start.cfi))
                    }
                }, {
                    key: 'reportLocation',
                    value: function() {
                        return this.q.enqueue(function() {
                            requestAnimationFrame(function() {
                                var e = this.manager.currentLocation();
                                if (e && e.then && 'function' == typeof e.then) e.then(function(e) {
                                    var t = this.located(e);
                                    t && t.start && t.end && (this.location = t, this.emit(S.EVENTS.RENDITION.LOCATION_CHANGED, {
                                        index: this.location.start.index,
                                        href: this.location.start.href,
                                        start: this.location.start.cfi,
                                        end: this.location.end.cfi,
                                        percentage: this.location.start.percentage
                                    }), this.emit(S.EVENTS.RENDITION.RELOCATED, this.location))
                                }.bind(this));
                                else if (e) {
                                    var t = this.located(e);
                                    if (!t || !t.start || !t.end) return;
                                    this.location = t, this.emit(S.EVENTS.RENDITION.LOCATION_CHANGED, {
                                        index: this.location.start.index,
                                        href: this.location.start.href,
                                        start: this.location.start.cfi,
                                        end: this.location.end.cfi,
                                        percentage: this.location.start.percentage
                                    }), this.emit(S.EVENTS.RENDITION.RELOCATED, this.location)
                                }
                            }.bind(this))
                        }.bind(this))
                    }
                }, {
                    key: 'currentLocation',
                    value: function() {
                        var e = this.manager.currentLocation();
                        if (e && e.then && 'function' == typeof e.then) e.then(function(e) {
                            var t = this.located(e);
                            return t
                        }.bind(this));
                        else if (e) {
                            var t = this.located(e);
                            return t
                        }
                    }
                }, {
                    key: 'located',
                    value: function(e) {
                        if (!e.length) return {};
                        var t = e[0],
                            n = e[e.length - 1],
                            a = {
                                start: {
                                    index: t.index,
                                    href: t.href,
                                    cfi: t.mapping.start,
                                    displayed: {
                                        page: t.pages[0] || 1,
                                        total: t.totalPages
                                    }
                                },
                                end: {
                                    index: n.index,
                                    href: n.href,
                                    cfi: n.mapping.end,
                                    displayed: {
                                        page: n.pages[n.pages.length - 1] || 1,
                                        total: n.totalPages
                                    }
                                }
                            },
                            i = this.book.locations.locationFromCfi(t.mapping.start),
                            o = this.book.locations.locationFromCfi(n.mapping.end);
                        null != i && (a.start.location = i, a.start.percentage = this.book.locations.percentageFromLocation(i)), null != o && (a.end.location = o, a.end.percentage = this.book.locations.percentageFromLocation(o));
                        var r = this.book.pageList.pageFromCfi(t.mapping.start),
                            l = this.book.pageList.pageFromCfi(n.mapping.end);
                        return -1 != r && (a.start.page = r), -1 != l && (a.end.page = l), n.index === this.book.spine.last().index && a.end.displayed.page >= a.end.displayed.total && (a.atEnd = !0), t.index === this.book.spine.first().index && 1 === a.start.displayed.page && (a.atStart = !0), a
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        this.manager && this.manager.destroy(), this.book = void 0
                    }
                }, {
                    key: 'passEvents',
                    value: function(t) {
                        var n = this,
                            e = E.default.listenedEvents;
                        e.forEach(function(a) {
                            t.on(a, function(e) {
                                return n.triggerViewEvent(e, t)
                            })
                        }), t.on(S.EVENTS.CONTENTS.SELECTED, function(a) {
                            return n.triggerSelectedEvent(a, t)
                        })
                    }
                }, {
                    key: 'triggerViewEvent',
                    value: function(t, e) {
                        this.emit(t.type, t, e)
                    }
                }, {
                    key: 'triggerSelectedEvent',
                    value: function(e, t) {
                        this.emit(S.EVENTS.RENDITION.SELECTED, e, t)
                    }
                }, {
                    key: 'triggerMarkEvent',
                    value: function(e, t, n) {
                        this.emit(S.EVENTS.RENDITION.MARK_CLICKED, e, t, n)
                    }
                }, {
                    key: 'getRange',
                    value: function(e, t) {
                        var n = new g.default(e),
                            a = this.manager.visible().filter(function(e) {
                                if (n.spinePos === e.index) return !0
                            });
                        if (a.length) return a[0].contents.range(n, t)
                    }
                }, {
                    key: 'adjustImages',
                    value: function(e) {
                        if ('pre-paginated' === this._layout.name) return new Promise(function(e) {
                            e()
                        });
                        var t = e.window.getComputedStyle(e.content, null),
                            n = e.content.offsetHeight - (parseFloat(t.paddingTop) + parseFloat(t.paddingBottom));
                        return e.addStylesheetRules({
                            img: {
                                "max-width": (this._layout.columnWidth ? this._layout.columnWidth + 'px' : '100%') + '!important',
                                "max-height": n + 'px!important',
                                "object-fit": 'contain',
                                "page-break-inside": 'avoid',
                                "break-inside": 'avoid'
                            },
                            svg: {
                                "max-width": (this._layout.columnWidth ? this._layout.columnWidth + 'px' : '100%') + '!important',
                                "max-height": n + 'px!important',
                                "page-break-inside": 'avoid',
                                "break-inside": 'avoid'
                            }
                        }), new Promise(function(e) {
                            setTimeout(function() {
                                e()
                            }, 1)
                        })
                    }
                }, {
                    key: 'getContents',
                    value: function() {
                        return this.manager ? this.manager.getContents() : []
                    }
                }, {
                    key: 'views',
                    value: function() {
                        var e = this.manager ? this.manager.views : void 0;
                        return e || []
                    }
                }, {
                    key: 'handleLinks',
                    value: function(e) {
                        var t = this;
                        e && e.on(S.EVENTS.CONTENTS.LINK_CLICKED, function(e) {
                            var n = t.book.path.relative(e);
                            t.display(n)
                        })
                    }
                }, {
                    key: 'injectStylesheet',
                    value: function(e) {
                        var t = e.createElement('link');
                        t.setAttribute('type', 'text/css'), t.setAttribute('rel', 'stylesheet'), t.setAttribute('href', this.settings.stylesheet), e.getElementsByTagName('head')[0].appendChild(t)
                    }
                }, {
                    key: 'injectScript',
                    value: function(e) {
                        var t = e.createElement('script');
                        t.setAttribute('type', 'text/javascript'), t.setAttribute('src', this.settings.script), t.textContent = ' ', e.getElementsByTagName('head')[0].appendChild(t)
                    }
                }, {
                    key: 'injectIdentifier',
                    value: function(e) {
                        var t = this.book.package.metadata.identifier,
                            n = e.createElement('meta');
                        n.setAttribute('name', 'dc.relation.ispartof'), t && n.setAttribute('content', t), e.getElementsByTagName('head')[0].appendChild(n)
                    }
                }]), e
            }();
        (0, s.default)(O.prototype), t.default = O, e.exports = t['default']
    }, function(e, t, n) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            o = n(22),
            l = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o),
            r = n(6),
            s = function() {
                function e(t, n, i, o) {
                    a(this, e), this.layout = t, this.horizontal = 'horizontal' === i, this.direction = n || 'ltr', this._dev = o
                }
                return i(e, [{
                    key: 'section',
                    value: function(e) {
                        var t = this.findRanges(e),
                            n = this.rangeListToCfiList(e.section.cfiBase, t);
                        return n
                    }
                }, {
                    key: 'page',
                    value: function(e, t, n, a) {
                        var i = e && e.document && e.document.body,
                            o;
                        if (i) {
                            if (o = this.rangePairToCfiPair(t, {
                                    start: this.findStart(i, n, a),
                                    end: this.findEnd(i, n, a)
                                }), !0 === this._dev) {
                                var s = e.document,
                                    d = new l.default(o.start).toRange(s),
                                    c = new l.default(o.end).toRange(s),
                                    p = s.defaultView.getSelection(),
                                    u = s.createRange();
                                p.removeAllRanges(), u.setStart(d.startContainer, d.startOffset), u.setEnd(c.endContainer, c.endOffset), p.addRange(u)
                            }
                            return o
                        }
                    }
                }, {
                    key: 'walk',
                    value: function(e, t) {
                        if (!(e && e.nodeType === Node.TEXT_NODE)) {
                            var n = {
                                    acceptNode: function(e) {
                                        return 0 < e.data.trim().length ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
                                    }
                                },
                                a = n.acceptNode;
                            a.acceptNode = n.acceptNode;
                            for (var i = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, a, !1), o, r;
                                (o = i.nextNode()) && (r = t(o), !r););
                            return r
                        }
                    }
                }, {
                    key: 'findRanges',
                    value: function(e) {
                        for (var t = [], n = e.contents.scrollWidth(), a = g(n / this.layout.spreadWidth), o = a * this.layout.divisor, r = this.layout.columnWidth, l = this.layout.gap, s = 0, i, d; s < o.pages; s++) i = (r + l) * s, d = r * (s + 1) + l * s, t.push({
                            start: this.findStart(e.document.body, i, d),
                            end: this.findEnd(e.document.body, i, d)
                        });
                        return t
                    }
                }, {
                    key: 'findStart',
                    value: function(e, t, n) {
                        for (var a = this, i = [e], o = e, l, s; i.length;)
                            if (l = i.shift(), s = this.walk(l, function(e) {
                                    var l, s, d, c, p;
                                    if (p = (0, r.nodeBounds)(e), a.horizontal && 'ltr' === a.direction) {
                                        if (l = a.horizontal ? p.left : p.top, s = a.horizontal ? p.right : p.bottom, l >= t && l <= n) return e;
                                        if (s > t) return e;
                                        o = e, i.push(e)
                                    } else if (a.horizontal && 'rtl' === a.direction) {
                                        if (l = p.left, s = p.right, s <= n && s >= t) return e;
                                        if (l < n) return e;
                                        o = e, i.push(e)
                                    } else {
                                        if (d = p.top, c = p.bottom, d >= t && d <= n) return e;
                                        if (c > t) return e;
                                        o = e, i.push(e)
                                    }
                                }), s) return this.findTextStartRange(s, t, n);
                        return this.findTextStartRange(o, t, n)
                    }
                }, {
                    key: 'findEnd',
                    value: function(e, t, n) {
                        for (var a = this, i = [e], o = e, l, s; i.length;)
                            if (l = i.shift(), s = this.walk(l, function(e) {
                                    var l, s, d, c, p;
                                    if (p = (0, r.nodeBounds)(e), a.horizontal && 'ltr' === a.direction) {
                                        if (l = u(p.left), s = u(p.right), l > n && o) return o;
                                        if (s > n) return e;
                                        o = e, i.push(e)
                                    } else if (a.horizontal && 'rtl' === a.direction) {
                                        if (l = u(a.horizontal ? p.left : p.top), s = u(a.horizontal ? p.right : p.bottom), s < t && o) return o;
                                        if (l < t) return e;
                                        o = e, i.push(e)
                                    } else {
                                        if (d = u(p.top), c = u(p.bottom), d > n && o) return o;
                                        if (c > n) return e;
                                        o = e, i.push(e)
                                    }
                                }), s) return this.findTextEndRange(s, t, n);
                        return this.findTextEndRange(o, t, n)
                    }
                }, {
                    key: 'findTextStartRange',
                    value: function(e, t, n) {
                        for (var a = this.splitTextNodeIntoRanges(e), o = 0, i, r, l, s, d; o < a.length; o++)
                            if (i = a[o], r = i.getBoundingClientRect(), this.horizontal && 'ltr' === this.direction) {
                                if (l = r.left, l >= t) return i;
                            } else if (this.horizontal && 'rtl' === this.direction) {
                            if (d = r.right, d <= n) return i;
                        } else if (s = r.top, s >= t) return i;
                        return a[0]
                    }
                }, {
                    key: 'findTextEndRange',
                    value: function(e, t, n) {
                        for (var a = this.splitTextNodeIntoRanges(e), o = 0, i, r, l, s, d, c, p; o < a.length; o++) {
                            if (r = a[o], l = r.getBoundingClientRect(), this.horizontal && 'ltr' === this.direction) {
                                if (s = l.left, d = l.right, s > n && i) return i;
                                if (d > n) return r
                            } else if (this.horizontal && 'rtl' === this.direction) {
                                if (s = l.left, d = l.right, d < t && i) return i;
                                if (s < t) return r
                            } else {
                                if (c = l.top, p = l.bottom, c > n && i) return i;
                                if (p > n) return r
                            }
                            i = r
                        }
                        return a[a.length - 1]
                    }
                }, {
                    key: 'splitTextNodeIntoRanges',
                    value: function(e, t) {
                        var n = [],
                            a = e.textContent || '',
                            i = a.trim(),
                            o = e.ownerDocument,
                            r = t || ' ',
                            l = i.indexOf(r),
                            s;
                        if (-1 === l || e.nodeType != Node.TEXT_NODE) return s = o.createRange(), s.selectNodeContents(e), [s];
                        for (s = o.createRange(), s.setStart(e, 0), s.setEnd(e, l), n.push(s), s = !1; - 1 != l;) l = i.indexOf(r, l + 1), 0 < l && (s && (s.setEnd(e, l), n.push(s)), s = o.createRange(), s.setStart(e, l + 1));
                        return s && (s.setEnd(e, i.length), n.push(s)), n
                    }
                }, {
                    key: 'rangePairToCfiPair',
                    value: function(e, t) {
                        var n = t.start,
                            a = t.end;
                        n.collapse(!0), a.collapse(!1);
                        var i = new l.default(n, e).toString(),
                            o = new l.default(a, e).toString();
                        return {
                            start: i,
                            end: o
                        }
                    }
                }, {
                    key: 'rangeListToCfiList',
                    value: function(e, t) {
                        for (var n = [], a = 0, i; a < t.length; a++) i = this.rangePairToCfiPair(e, t[a]), n.push(i);
                        return n
                    }
                }, {
                    key: 'axis',
                    value: function(e) {
                        return e && (this.horizontal = 'horizontal' === e), this.horizontal
                    }
                }]), e
            }();
        t.default = s, e.exports = t['default']
    }, function(e, t, n) {
        'use strict';

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            r = n(35),
            l = a(r),
            s = n(6),
            d = n(22),
            c = a(d),
            p = n(103),
            u = a(p),
            h = n(31),
            f = n(385),
            m = function() {
                function e(t, n) {
                    i(this, e), this.settings = (0, s.extend)({
                        ignoreClass: '',
                        axis: n.layout && 'scrolled' === n.layout.props.flow ? 'vertical' : 'horizontal',
                        direction: void 0,
                        width: 0,
                        height: 0,
                        layout: void 0,
                        globalLayoutProperties: {},
                        method: void 0
                    }, n || {}), this.id = 'epubjs-view-' + (0, s.uuid)(), this.section = t, this.index = t.index, this.element = this.container(this.settings.axis), this.added = !1, this.displayed = !1, this.rendered = !1, this.fixedWidth = 0, this.fixedHeight = 0, this.epubcfi = new c.default, this.layout = this.settings.layout, this.pane = void 0, this.highlights = {}, this.underlines = {}, this.marks = {}
                }
                return o(e, [{
                    key: 'container',
                    value: function(e) {
                        var t = document.createElement('div');
                        return t.classList.add('epub-view'), t.style.height = '0px', t.style.width = '0px', t.style.overflow = 'hidden', t.style.position = 'relative', t.style.display = 'block', t.style.flex = e && 'horizontal' == e ? 'none' : 'initial', t
                    }
                }, {
                    key: 'create',
                    value: function() {
                        return this.iframe ? this.iframe : (this.element || (this.element = this.createContainer()), this.iframe = document.createElement('iframe'), this.iframe.id = this.id, this.iframe.scrolling = 'no', this.iframe.style.overflow = 'hidden', this.iframe.seamless = 'seamless', this.iframe.style.border = 'none', this.iframe.setAttribute('enable-annotation', 'true'), this.resizing = !0, this.element.style.visibility = 'hidden', this.iframe.style.visibility = 'hidden', this.iframe.style.width = '0', this.iframe.style.height = '0', this._width = 0, this._height = 0, this.element.setAttribute('ref', this.index), this.element.appendChild(this.iframe), this.added = !0, this.elementBounds = (0, s.bounds)(this.element), this.supportsSrcdoc = !!('srcdoc' in this.iframe), this.settings.method || (this.settings.method = this.supportsSrcdoc ? 'srcdoc' : 'write'), this.iframe)
                    }
                }, {
                    key: 'render',
                    value: function(e) {
                        return this.create(), this.size(), this.sectionRender || (this.sectionRender = this.section.render(e)), this.sectionRender.then(function(e) {
                            return this.load(e)
                        }.bind(this)).then(function() {
                            var e = this;
                            this.layout.format(this.contents);
                            var t = this.contents.writingMode(),
                                n = 0 === t.indexOf("tb-" /*'vertical'*/ ) ? 'vertical' : 'horizontal';
                            return this.setAxis(n), this.emit(h.EVENTS.VIEWS.AXIS, n), this.addListeners(), new Promise(function(t) {
                                e.expand(), t()
                            })
                        }.bind(this), function(t) {
                            return this.emit(h.EVENTS.VIEWS.LOAD_ERROR, t), new Promise(function(e, n) {
                                n(t)
                            })
                        }.bind(this)).then(function() {
                            this.emit(h.EVENTS.VIEWS.RENDERED, this.section)
                        }.bind(this))
                    }
                }, {
                    key: 'reset',
                    value: function() {
                        this.iframe && (this.iframe.style.width = '0', this.iframe.style.height = '0', this._width = 0, this._height = 0, this._textWidth = void 0, this._contentWidth = void 0, this._textHeight = void 0, this._contentHeight = void 0), this._needsReframe = !0
                    }
                }, {
                    key: 'size',
                    value: function(e, t) {
                        var n = e || this.settings.width,
                            a = t || this.settings.height;
                        'pre-paginated' === this.layout.name ? this.lock('both', n, a) : 'horizontal' === this.settings.axis ? this.lock('height', n, a) : this.lock('width', n, a), this.settings.width = n, this.settings.height = a
                    }
                }, {
                    key: 'lock',
                    value: function(e, t, n) {
                        var a = (0, s.borders)(this.element),
                            i;
                        i = this.iframe ? (0, s.borders)(this.iframe) : {
                            width: 0,
                            height: 0
                        }, 'width' == e && (0, s.isNumber)(t) && (this.lockedWidth = t - a.width - i.width), 'height' == e && (0, s.isNumber)(n) && (this.lockedHeight = n - a.height - i.height), 'both' === e && (0, s.isNumber)(t) && (0, s.isNumber)(n) && (this.lockedWidth = t - a.width - i.width, this.lockedHeight = n - a.height - i.height), this.displayed && this.iframe && this.expand()
                    }
                }, {
                    key: 'expand',
                    value: function() {
                        var e = this.lockedWidth,
                            t = this.lockedHeight,
                            n, contnetHeight;
                        !this.iframe || this._expanding || (this._expanding = !0, 'pre-paginated' === this.layout.name ? (e = this.layout.columnWidth, t = this.layout.height) : 'horizontal' === this.settings.axis ? (e = this.contents.textWidth(), 0 < e % this.layout.pageWidth && (e = g(e / this.layout.pageWidth) * this.layout.pageWidth), this.settings.forceEvenPages && (n = e / this.layout.pageWidth, 1 < this.layout.divisor && 'reflowable' === this.layout.name && 0 < n % 2 && (e += this.layout.pageWidth))) : 'vertical' === this.settings.axis && (contnetHeight = this.contents.content.offsetHeight, t = Math.ceil(this.contents.textHeight() / contnetHeight) * contnetHeight /*t=this.contents.textHeight()*/ ), (this._needsReframe || e != this._width || t != this._height) && this.reframe(e, t), this._expanding = !1)
                    }
                }, {
                    key: 'reframe',
                    value: function(e, t) {
                        var n = this,
                            a;
                        (0, s.isNumber)(e) && (this.element.style.width = e + 'px', this.iframe.style.width = e + 'px', this._width = e), (0, s.isNumber)(t) && (this.element.style.height = t + 'px', this.iframe.style.height = t + 'px', this._height = t);
                        var i = this.prevBounds ? e - this.prevBounds.width : e,
                            o = this.prevBounds ? t - this.prevBounds.height : t;
                        a = {
                            width: e,
                            height: t,
                            widthDelta: i,
                            heightDelta: o
                        }, this.pane && this.pane.render(), requestAnimationFrame(function() {
                            var e;
                            for (var t in n.marks) n.marks.hasOwnProperty(t) && (e = n.marks[t], n.placeMark(e.element, e.range))
                        }), this.onResize(this, a), this.emit(h.EVENTS.VIEWS.RESIZED, a), this.prevBounds = a, this.elementBounds = (0, s.bounds)(this.element)
                    }
                }, {
                    key: 'load',
                    value: function(e) {
                        var t = new s.defer,
                            n = t.promise;
                        if (!this.iframe) return t.reject(new Error('No Iframe Available')), n;
                        if (this.iframe.onload = function(e) {
                                this.onLoad(e, t)
                            }.bind(this), 'blobUrl' === this.settings.method) this.blobUrl = (0, s.createBlobUrl)(e, 'application/xhtml+xml'), this.iframe.src = this.blobUrl;
                        else if ('srcdoc' === this.settings.method) this.iframe.srcdoc = e;
                        else {
                            if (this.document = this.iframe.contentDocument, !this.document) return t.reject(new Error('No Document Available')), n;
                            this.iframe.contentDocument.open(), this.iframe.contentDocument.write(e), this.iframe.contentDocument.close()
                        }
                        return n
                    }
                }, {
                    key: 'onLoad',
                    value: function(e, t) {
                        var n = this;
                        this.window = this.iframe.contentWindow, this.document = this.iframe.contentDocument, this.contents = new u.default(this.document, this.document.body, this.section.cfiBase, this.section.index, this.settings.isVerticalWriting), this.rendering = !1;
                        var a = this.document.querySelector('link[rel=\'canonical\']');
                        a ? a.setAttribute('href', this.section.canonical) : (a = this.document.createElement('link'), a.setAttribute('rel', 'canonical'), a.setAttribute('href', this.section.canonical), this.document.querySelector('head').appendChild(a)), this.contents.on(h.EVENTS.CONTENTS.EXPAND, function() {
                            n.displayed && n.iframe && (n.expand(), n.contents && n.layout.format(n.contents))
                        }), this.contents.on(h.EVENTS.CONTENTS.RESIZE, function() {
                            n.displayed && n.iframe && (n.expand(), n.contents && n.layout.format(n.contents))
                        }), t.resolve(this.contents)
                    }
                }, {
                    key: 'setLayout',
                    value: function(e) {
                        this.layout = e, this.contents && (this.layout.format(this.contents), this.expand())
                    }
                }, {
                    key: 'setAxis',
                    value: function(e) {
                        'scrolled' === this.layout.props.flow && (e = 'vertical'), this.settings.axis = e, this.element.style.flex = 'horizontal' == e ? 'none' : 'initial', this.size()
                    }
                }, {
                    key: 'addListeners',
                    value: function() {}
                }, {
                    key: 'removeListeners',
                    value: function() {}
                }, {
                    key: 'display',
                    value: function(e) {
                        var t = new s.defer;
                        return this.displayed ? t.resolve(this) : this.render(e).then(function() {
                            this.emit(h.EVENTS.VIEWS.DISPLAYED, this), this.onDisplayed(this), this.displayed = !0, t.resolve(this)
                        }.bind(this), function(e) {
                            t.reject(e, this)
                        }), t.promise
                    }
                }, {
                    key: 'show',
                    value: function() {
                        this.element.style.visibility = 'visible', this.iframe && (this.iframe.style.visibility = 'visible', this.iframe.style.transform = 'translateZ(0)', this.iframe.offsetWidth, this.iframe.style.transform = null), this.emit(h.EVENTS.VIEWS.SHOWN, this)
                    }
                }, {
                    key: 'hide',
                    value: function() {
                        this.element.style.visibility = 'hidden', this.iframe.style.visibility = 'hidden', this.stopExpanding = !0, this.emit(h.EVENTS.VIEWS.HIDDEN, this)
                    }
                }, {
                    key: 'offset',
                    value: function() {
                        return {
                            top: this.element.offsetTop,
                            left: this.element.offsetLeft
                        }
                    }
                }, {
                    key: 'width',
                    value: function() {
                        return this._width
                    }
                }, {
                    key: 'height',
                    value: function() {
                        return this._height
                    }
                }, {
                    key: 'position',
                    value: function() {
                        return this.element.getBoundingClientRect()
                    }
                }, {
                    key: 'locationOf',
                    value: function(e) {
                        var t = this.iframe.getBoundingClientRect(),
                            n = this.contents.locationOf(e, this.settings.ignoreClass);
                        return {
                            left: n.left,
                            top: n.top
                        }
                    }
                }, {
                    key: 'onDisplayed',
                    value: function() {}
                }, {
                    key: 'onResize',
                    value: function() {}
                }, {
                    key: 'bounds',
                    value: function(e) {
                        return (e || !this.elementBounds) && (this.elementBounds = (0, s.bounds)(this.element)), this.elementBounds
                    }
                }, {
                    key: 'highlight',
                    value: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments[2],
                            a = this,
                            i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 'epubjs-hl',
                            o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {};
                        if (this.contents) {
                            var r = Object.assign({
                                    fill: 'yellow',
                                    "fill-opacity": '0.3',
                                    "mix-blend-mode": 'multiply'
                                }, o),
                                l = this.contents.range(e),
                                s = function() {
                                    a.emit(h.EVENTS.VIEWS.MARK_CLICKED, e, t)
                                };
                            t.epubcfi = "";
                            t.epubcfi = e, (this.pane) || (this.pane = new f.Pane(this.iframe, this.element));
                            var d = new f.Highlight(l, i, t, r),
                                c = this.pane.addMark(d);
                            return this.highlights[e] = {
                                mark: c,
                                element: c.element,
                                listeners: [s, n]
                            }, c.element.setAttribute('ref', i), c.element.addEventListener('click', s), c.element.addEventListener('touchstart', s), n && (c.element.addEventListener('click', n), c.element.addEventListener('touchstart', n)), c
                        }
                    }
                }, {
                    key: 'underline',
                    value: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments[2],
                            a = this,
                            i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 'epubjs-ul',
                            o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {};
                        if (this.contents) {
                            var r = Object.assign({
                                    stroke: 'black',
                                    "stroke-opacity": '0.3',
                                    "mix-blend-mode": 'multiply'
                                }, o),
                                l = this.contents.range(e),
                                s = function() {
                                    a.emit(h.EVENTS.VIEWS.MARK_CLICKED, e, t)
                                };
                            t.epubcfi = e, this.pane || (this.pane = new f.Pane(this.iframe, this.element));
                            var d = new f.Underline(l, i, t, r),
                                c = this.pane.addMark(d);
                            return this.underlines[e] = {
                                mark: c,
                                element: c.element,
                                listeners: [s, n]
                            }, c.element.setAttribute('ref', i), c.element.addEventListener('click', s), c.element.addEventListener('touchstart', s), n && (c.element.addEventListener('click', n), c.element.addEventListener('touchstart', n)), c
                        }
                    }
                }, {
                    key: 'mark',
                    value: function(e) {
                        var t = this,
                            n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            a = arguments[2];
                        if (this.contents) {
                            if (e in this.marks) {
                                var i = this.marks[e];
                                return i
                            }
                            var o = this.contents.range(e);
                            if (o) {
                                var r = o.commonAncestorContainer,
                                    l = 1 === r.nodeType ? r : r.parentNode,
                                    s = function() {
                                        t.emit(h.EVENTS.VIEWS.MARK_CLICKED, e, n)
                                    };
                                o.collapsed && 1 === r.nodeType ? (o = new Range, o.selectNodeContents(r)) : o.collapsed && (o = new Range, o.selectNodeContents(l));
                                var d = this.document.createElement('a');
                                return d.setAttribute('ref', 'epubjs-mk'), d.style.position = 'absolute', d.dataset.epubcfi = e, n && Object.keys(n).forEach(function(e) {
                                    d.dataset[e] = n[e]
                                }), a && (d.addEventListener('click', a), d.addEventListener('touchstart', a)), d.addEventListener('click', s), d.addEventListener('touchstart', s), this.placeMark(d, o), this.element.appendChild(d), this.marks[e] = {
                                    element: d,
                                    range: o,
                                    listeners: [s, a]
                                }, l
                            }
                        }
                    }
                }, {
                    key: 'placeMark',
                    value: function(e, t) {
                        var n, a, o;
                        if ('pre-paginated' === this.layout.name || 'horizontal' !== this.settings.axis) {
                            var r = t.getBoundingClientRect();
                            n = r.top, a = r.right
                        } else
                            for (var l = t.getClientRects(), s = void 0, d = 0; d != l.length; d++) s = l[d], (!o || s.left < o) && (o = s.left, a = o + this.layout.columnWidth - this.layout.gap, n = s.top);
                        e.style.top = n + 'px', e.style.left = a + 'px'
                    }
                }, {
                    key: 'unhighlight',
                    value: function(e) {
                        var t;
                        e in this.highlights && (t = this.highlights[e], this.pane.removeMark(t.mark), t.listeners.forEach(function(e) {
                            e && t.element.removeEventListener('click', e)
                        }), delete this.highlights[e])
                    }
                }, {
                    key: 'ununderline',
                    value: function(e) {
                        var t;
                        e in this.underlines && (t = this.underlines[e], this.pane.removeMark(t.mark), t.listeners.forEach(function(e) {
                            e && t.element.removeEventListener('click', e)
                        }), delete this.underlines[e])
                    }
                }, {
                    key: 'unmark',
                    value: function(e) {
                        var t;
                        e in this.marks && (t = this.marks[e], this.element.removeChild(t.element), t.listeners.forEach(function(e) {
                            e && t.element.removeEventListener('click', e)
                        }), delete this.marks[e])
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        for (var e in this.highlights) this.unhighlight(e);
                        for (var t in this.underlines) this.ununderline(t);
                        for (var n in this.marks) this.unmark(n);
                        this.blobUrl && (0, s.revokeBlobUrl)(this.blobUrl), this.displayed && (this.displayed = !1, this.removeListeners(), this.stopExpanding = !0, this.element.removeChild(this.iframe), this.iframe = void 0, this.contents = void 0, this._textWidth = null, this._textHeight = null, this._width = null, this._height = null)
                    }
                }]), e
            }();
        (0, l.default)(m.prototype), t.default = m, e.exports = t['default']
    }, function(e, t, n) {
        var a = n(105),
            i = n(390),
            o = n(392);
        e.exports = function(e, t, n) {
            function r(t) {
                var n = b,
                    a = x;
                return b = x = void 0, g = t, k = e.apply(a, n), k
            }

            function l(e) {
                return g = e, _ = setTimeout(c, t), f ? r(e) : k
            }

            function s(e) {
                var n = e - S,
                    a = e - g,
                    i = t - n;
                return y ? h(i, E - a) : i
            }

            function d(e) {
                var n = e - S,
                    a = e - g;
                return void 0 == S || n >= t || 0 > n || y && a >= E
            }

            function c() {
                var e = i();
                return d(e) ? p(e) : void(_ = setTimeout(c, s(e)))
            }

            function p(e) {
                return (_ = void 0, v && b) ? r(e) : (b = x = void 0, k)
            }

            function u() {
                var e = i(),
                    n = d(e);
                if (b = arguments, x = this, S = e, n) {
                    if (void 0 === _) return l(S);
                    if (y) return _ = setTimeout(c, t), r(S)
                }
                return void 0 === _ && (_ = setTimeout(c, t)), k
            }
            var g = 0,
                f = !1,
                y = !1,
                v = !0,
                b, x, E, k, _, S;
            if ('function' != typeof e) throw new TypeError('Expected a function');
            return t = o(t) || 0, a(n) && (f = !!n.leading, y = 'maxWait' in n, E = y ? m(o(n.maxWait) || 0, t) : E, v = 'trailing' in n ? !!n.trailing : v), u.cancel = function() {
                void 0 !== _ && clearTimeout(_), g = 0, b = S = x = _ = void 0
            }, u.flush = function() {
                return void 0 === _ ? k : p(i())
            }, u
        }
    }, function(e, t, n) {
        var a = n(391),
            i = 'object' == typeof self && self && self.Object === Object && self,
            o = a || i || Function('return this')();
        e.exports = o
    }, function(e, t, n) {
        var a = n(145),
            i = a.Symbol;
        e.exports = i
    }, function(e, t, n) {
        'use strict';

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function o(e, t) {
            if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t && ('object' == typeof t || 'function' == typeof t) ? t : e
        }

        function r(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var l = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            s = n(6),
            d = n(104),
            p = a(d),
            u = n(31),
            g = n(144),
            h = a(g),
            m = function(e) {
                function t(e) {
                    i(this, t);
                    var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.name = 'continuous', n.settings = (0, s.extend)(n.settings || {}, {
                        infinite: !0,
                        overflow: void 0,
                        axis: void 0,
                        flow: 'scrolled',
                        offset: 500,
                        offsetDelta: 250,
                        width: void 0,
                        height: void 0
                    }), (0, s.extend)(n.settings, e.settings || {}), 'undefined' != e.settings.gap && 0 === e.settings.gap && (n.settings.gap = e.settings.gap), n.viewSettings = {
                        ignoreClass: n.settings.ignoreClass,
                        axis: n.settings.axis,
                        flow: n.settings.flow,
                        layout: n.layout,
                        width: 0,
                        height: 0,
                        forceEvenPages: !1
                    }, n.scrollTop = 0, n.scrollLeft = 0, n
                }
                return r(t, e), l(t, [{
                    key: 'display',
                    value: function(e, t) {
                        return p.default.prototype.display.call(this, e, t).then(function() {
                            return this.fill()
                        }.bind(this))
                    }
                }, {
                    key: 'fill',
                    value: function(e) {
                        var t = this,
                            n = e || new s.defer;
                        return this.q.enqueue(function() {
                            return t.check()
                        }).then(function(e) {
                            e ? t.fill(n) : n.resolve()
                        }), n.promise
                    }
                }, {
                    key: 'moveTo',
                    value: function(e) {
                        var t = 0,
                            n = 0,
                            a = 0,
                            i = 0;
                        this.isPaginated ? (t = y(e.left / this.layout.delta) * this.layout.delta, a = t + this.settings.offset) : (n = e.top, i = e.top + this.settings.offset), (0 < t || 0 < n) && this.scrollBy(t, n, !0)
                    }
                }, {
                    key: 'afterResized',
                    value: function(e) {
                        this.emit(u.EVENTS.MANAGERS.RESIZE, e.section)
                    }
                }, {
                    key: 'removeShownListeners',
                    value: function(e) {
                        e.onDisplayed = function() {}
                    }
                }, {
                    key: 'add',
                    value: function(e) {
                        var t = this,
                            n = this.createView(e);
                        return this.views.append(n), n.on(u.EVENTS.VIEWS.RESIZED, function() {
                            n.expanded = !0
                        }), n.on(u.EVENTS.VIEWS.AXIS, function(e) {
                            t.updateAxis(e)
                        }), n.onDisplayed = this.afterDisplayed.bind(this), n.onResize = this.afterResized.bind(this), n.display(this.request)
                    }
                }, {
                    key: 'append',
                    value: function(e) {
                        var t = this.createView(e);
                        return t.on(u.EVENTS.VIEWS.RESIZED, function() {
                            t.expanded = !0
                        }), this.views.append(t), t.onDisplayed = this.afterDisplayed.bind(this), t
                    }
                }, {
                    key: 'prepend',
                    value: function(e) {
                        var t = this,
                            n = this.createView(e);
                        return n.on(u.EVENTS.VIEWS.RESIZED, function(e) {
                            t.counter(e), n.expanded = !0
                        }), this.views.prepend(n), n.onDisplayed = this.afterDisplayed.bind(this), n
                    }
                }, {
                    key: 'counter',
                    value: function(e) {
                        'vertical' === this.settings.axis ? this.scrollBy(0, e.heightDelta, !0) : this.scrollBy(e.widthDelta, 0, !0)
                    }
                }, {
                    key: 'update',
                    value: function(e) {
                        for (var t = this.bounds(), n = this.views.all(), a = n.length, o = [], r = 'undefined' == typeof e ? this.settings.offset || 0 : e, l = new s.defer, d = [], c = 0, i, p; c < a; c++)
                            if (p = n[c], i = this.isVisible(p, r, r, t), !0 === i) {
                                if (!p.displayed) {
                                    var u = p.display(this.request).then(function(e) {
                                        e.show()
                                    }, function() {
                                        p.hide()
                                    });
                                    d.push(u)
                                } else p.show();
                                o.push(p)
                            } else this.q.enqueue(p.destroy.bind(p)), clearTimeout(this.trimTimeout), this.trimTimeout = setTimeout(function() {
                                this.q.enqueue(this.trim.bind(this))
                            }.bind(this), 250);
                        return d.length ? Promise.all(d).catch(function(e) {
                            l.reject(e)
                        }) : (l.resolve(), l.promise)
                    }
                }, {
                    key: 'check',
                    value: function(e, t) {
                        var n = this,
                            a = new s.defer,
                            i = [],
                            o = 'horizontal' === this.settings.axis,
                            r = this.settings.offset || 0;
                        e && o && (r = e), t && !o && (r = t);
                        var l = this._bounds,
                            d = 'rtl' === this.settings.direction,
                            c = o && d ? -1 : 1,
                            p = o ? this.scrollLeft : this.scrollTop * c,
                            u = o ? y(l.width) : l.height,
                            g = o ? this.container.scrollWidth : this.container.scrollHeight,
                            h = function() {
                                var e = n.views.first(),
                                    t = e && e.section.prev();
                                t && i.push(n.prepend(t))
                            },
                            m = function() {
                                var e = n.views.last(),
                                    t = e && e.section.next();
                                t && i.push(n.append(t))
                            };
                        p + u + r >= g && (o && d ? h() : m()), 0 > p - r && (o && d ? m() : h());
                        var f = i.map(function(e) {
                            return e.displayed
                        });
                        return i.length ? Promise.all(f).then(function() {
                            if ('pre-paginated' === n.layout.name && n.layout.props.spread) return n.check()
                        }).then(function() {
                            return n.update(r)
                        }, function(e) {
                            return e
                        }) : (this.q.enqueue(function() {
                            this.update()
                        }.bind(this)), a.resolve(!1), a.promise)
                    }
                }, {
                    key: 'trim',
                    value: function() {
                        for (var e = new s.defer, t = this.views.displayed(), n = t[0], a = t[t.length - 1], o = this.views.indexOf(n), r = this.views.indexOf(a), l = this.views.slice(0, o), d = this.views.slice(r + 1), c = 0; c < l.length - 1; c++) this.erase(l[c], l);
                        for (var i = 1; i < d.length; i++) this.erase(d[i]);
                        return e.resolve(), e.promise
                    }
                }, {
                    key: 'erase',
                    value: function(e, t) {
                        var n, a;
                        this.settings.fullsize ? (n = window.scrollY, a = window.scrollX) : (n = this.container.scrollTop, a = this.container.scrollLeft);
                        var i = e.bounds();
                        this.views.remove(e), t && ('vertical' === this.settings.axis ? this.scrollTo(0, n - i.height, !0) : this.scrollTo(a - y(i.width), 0, !0))
                    }
                }, {
                    key: 'addEventListeners',
                    value: function() {
                        window.addEventListener('unload', function() {
                            this.ignore = !0, this.destroy()
                        }.bind(this)), this.addScrollListeners()
                    }
                }, {
                    key: 'addScrollListeners',
                    value: function() {
                        var e;
                        this.tick = s.requestAnimationFrame, this.settings.fullsize ? (this.prevScrollTop = window.scrollY, this.prevScrollLeft = window.scrollX) : (this.prevScrollTop = this.container.scrollTop, this.prevScrollLeft = this.container.scrollLeft), this.scrollDeltaVert = 0, this.scrollDeltaHorz = 0, this.settings.fullsize ? (e = window, this.scrollTop = window.scrollY, this.scrollLeft = window.scrollX) : (e = this.container, this.scrollTop = this.container.scrollTop, this.scrollLeft = this.container.scrollLeft), e.addEventListener('scroll', this.onScroll.bind(this)), this._scrolled = (0, h.default)(this.scrolled.bind(this), 30), this.didScroll = !1
                    }
                }, {
                    key: 'removeEventListeners',
                    value: function() {
                        var e;
                        e = this.settings.fullsize ? window : this.container, e.removeEventListener('scroll', this.onScroll.bind(this))
                    }
                }, {
                    key: 'onScroll',
                    value: function() {
                        var e = 'rtl' === this.settings.direction ? -1 : 1,
                            t, n;
                        this.settings.fullsize ? (t = window.scrollY * e, n = window.scrollX * e) : (t = this.container.scrollTop, n = this.container.scrollLeft), this.scrollTop = t, this.scrollLeft = n, this.ignore ? this.ignore = !1 : this._scrolled(), this.scrollDeltaVert += c(t - this.prevScrollTop), this.scrollDeltaHorz += c(n - this.prevScrollLeft), this.prevScrollTop = t, this.prevScrollLeft = n, clearTimeout(this.scrollTimeout), this.scrollTimeout = setTimeout(function() {
                            this.scrollDeltaVert = 0, this.scrollDeltaHorz = 0
                        }.bind(this), 150), this.didScroll = !1
                    }
                }, {
                    key: 'scrolled',
                    value: function() {
                        this.q.enqueue(function() {
                            this.check()
                        }.bind(this)), this.emit(u.EVENTS.MANAGERS.SCROLL, {
                            top: this.scrollTop,
                            left: this.scrollLeft
                        }), clearTimeout(this.afterScrolled), this.afterScrolled = setTimeout(function() {
                            this.emit(u.EVENTS.MANAGERS.SCROLLED, {
                                top: this.scrollTop,
                                left: this.scrollLeft
                            })
                        }.bind(this))
                    }
                }, {
                    key: 'next',
                    value: function() {
                        var e = this.settings.direction,
                            t = 'pre-paginated' === this.layout.props.name && this.layout.props.spread ? 2 * this.layout.props.delta : this.layout.props.delta;
                        this.views.length && (this.isPaginated && 'horizontal' === this.settings.axis ? this.scrollBy(t, 0, !0) : this.scrollBy(0, this.layout.height, !0), this.q.enqueue(function() {
                            this.check()
                        }.bind(this)))
                    }
                }, {
                    key: 'prev',
                    value: function() {
                        var e = this.settings.direction,
                            t = 'pre-paginated' === this.layout.props.name && this.layout.props.spread ? 2 * this.layout.props.delta : this.layout.props.delta;
                        this.views.length && (this.isPaginated && 'horizontal' === this.settings.axis ? this.scrollBy(-t, 0, !0) : this.scrollBy(0, -this.layout.height, !0), this.q.enqueue(function() {
                            this.check()
                        }.bind(this)))
                    }
                }, {
                    key: 'updateAxis',
                    value: function(e, t) {
                        this.isPaginated || (e = 'vertical'), (t || e !== this.settings.axis) && (this.settings.axis = e, this.stage && this.stage.axis(e), this.viewSettings.axis = e, this.mapping && this.mapping.axis(e), this.layout && ('vertical' === e ? this.layout.spread('none') : this.layout.spread(this.layout.settings.spread)), this.settings.infinite = 'vertical' === e)
                    }
                }]), t
            }(p.default);
        t.default = m, e.exports = t['default']
    }, function(e, t, n) {
        n(149), e.exports = n(354)
    }, function(e, t, n) {
        'use strict';
        (function(e) {
            function t(e, t, n) {
                e[t] || Object[a](e, t, {
                    writable: !0,
                    configurable: !0,
                    value: n
                })
            }
            if (n(150), n(350), n(351), e._babelPolyfill) throw new Error('only one instance of babel-polyfill is allowed');
            e._babelPolyfill = !0;
            var a = 'defineProperty';
            t(String.prototype, 'padLeft', ''.padStart), t(String.prototype, 'padRight', ''.padEnd), ['pop', 'reverse', 'shift', 'keys', 'values', 'entries', 'indexOf', 'every', 'some', 'forEach', 'map', 'filter', 'find', 'findIndex', 'includes', 'join', 'slice', 'concat', 'push', 'splice', 'unshift', 'sort', 'lastIndexOf', 'reduce', 'reduceRight', 'copyWithin', 'fill'].forEach(function(e) {
                [][e] && t(Array, e, Function.call.bind([][e]))
            })
        }).call(t, n(51))
    }, function(e, t, n) {
        n(151), n(154), n(155), n(156), n(157), n(158), n(159), n(160), n(161), n(162), n(163), n(164), n(165), n(166), n(167), n(168), n(170), n(171), n(172), n(173), n(174), n(175), n(176), n(177), n(178), n(179), n(180), n(181), n(182), n(183), n(184), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(232), n(233), n(235), n(236), n(237), n(238), n(239), n(240), n(241), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(255), n(94), n(256), n(257), n(123), n(258), n(259), n(260), n(261), n(262), n(126), n(128), n(129), n(263), n(264), n(265), n(266), n(267), n(268), n(269), n(270), n(271), n(272), n(273), n(274), n(275), n(276), n(277), n(278), n(279), n(280), n(281), n(282), n(283), n(284), n(285), n(286), n(287), n(288), n(289), n(290), n(291), n(292), n(293), n(294), n(295), n(296), n(297), n(298), n(299), n(300), n(301), n(302), n(303), n(304), n(305), n(306), n(307), n(308), n(309), n(310), n(311), n(312), n(313), n(314), n(315), n(316), n(317), n(318), n(319), n(320), n(321), n(322), n(323), n(324), n(325), n(326), n(327), n(328), n(329), n(330), n(331), n(332), n(333), n(334), n(335), n(336), n(337), n(338), n(339), n(340), n(341), n(342), n(343), n(344), n(345), n(348), n(349), e.exports = n(23)
    }, function(e, t, n) {
        'use strict';
        var a = n(2),
            o = n(12),
            i = n(7),
            r = n(0),
            l = n(14),
            s = n(32).KEY,
            d = n(3),
            c = n(55),
            p = n(46),
            u = n(37),
            g = n(5),
            h = n(107),
            m = n(74),
            f = n(152),
            y = n(153),
            v = n(58),
            b = n(1),
            x = n(15),
            _ = n(24),
            E = n(36),
            S = n(40),
            N = n(110),
            w = n(17),
            T = n(8),
            C = n(33),
            R = w.f,
            P = T.f,
            O = N.f,
            A = a.Symbol,
            I = a.JSON,
            L = I && I.stringify,
            D = 'prototype',
            M = g('_hidden'),
            B = g('toPrimitive'),
            F = {}.propertyIsEnumerable,
            z = c('symbol-registry'),
            q = c('symbols'),
            U = c('op-symbols'),
            V = Object[D],
            W = 'function' == typeof A,
            H = a.QObject,
            G = !H || !H[D] || !H[D].findChild,
            Y = i && d(function() {
                return 7 != S(P({}, 'a', {
                    get: function() {
                        return P(this, 'a', {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(e, t, n) {
                var a = R(V, t);
                a && delete V[t], P(e, t, n), a && e !== V && P(V, t, a)
            } : P,
            K = function(e) {
                var t = q[e] = S(A[D]);
                return t._k = e, t
            },
            X = W && 'symbol' == typeof A.iterator ? function(e) {
                return 'symbol' == typeof e
            } : function(e) {
                return e instanceof A
            },
            $ = function(e, t, n) {
                return e === V && $(U, t, n), b(e), t = _(t, !0), b(n), o(q, t) ? (n.enumerable ? (o(e, M) && e[M][t] && (e[M][t] = !1), n = S(n, {
                    enumerable: E(0, !1)
                })) : (!o(e, M) && P(e, M, E(1, {})), e[M][t] = !0), Y(e, t, n)) : P(e, t, n)
            },
            Z = function(e, t) {
                b(e);
                for (var n = y(t = x(t)), a = 0, i = n.length, o; i > a;) $(e, o = n[a++], t[o]);
                return e
            },
            J = function(e) {
                var t = F.call(this, e = _(e, !0));
                return this === V && o(q, e) && !o(U, e) ? !1 : t || !o(this, e) || !o(q, e) || o(this, M) && this[M][e] ? t : !0
            },
            Q = function(e, t) {
                if (e = x(e), t = _(t, !0), e !== V || !o(q, t) || o(U, t)) {
                    var n = R(e, t);
                    return n && o(q, t) && !(o(e, M) && e[M][t]) && (n.enumerable = !0), n
                }
            },
            ee = function(e) {
                for (var t = O(x(e)), n = [], a = 0, i; t.length > a;) o(q, i = t[a++]) || i == M || i == s || n.push(i);
                return n
            },
            te = function(e) {
                for (var t = e === V, n = O(t ? U : x(e)), a = [], r = 0, i; n.length > r;) o(q, i = n[r++]) && (!t || o(V, i)) && a.push(q[i]);
                return a
            };
        W || (A = function() {
            if (this instanceof A) throw TypeError('Symbol is not a constructor!');
            var e = u(0 < arguments.length ? arguments[0] : void 0),
                t = function(n) {
                    this === V && t.call(U, n), o(this, M) && o(this[M], e) && (this[M][e] = !1), Y(this, e, E(1, n))
                };
            return i && G && Y(V, e, {
                configurable: !0,
                set: t
            }), K(e)
        }, l(A[D], 'toString', function() {
            return this._k
        }), w.f = Q, T.f = $, n(41).f = N.f = ee, n(53).f = J, n(57).f = te, i && !n(38) && l(V, 'propertyIsEnumerable', J, !0), h.f = function(e) {
            return K(g(e))
        }), r(r.G + r.W + r.F * !W, {
            Symbol: A
        });
        for (var ne = ['hasInstance', 'isConcatSpreadable', 'iterator', 'match', 'replace', 'search', 'species', 'split', 'toPrimitive', 'toStringTag', 'unscopables'], ae = 0; ne.length > ae;) g(ne[ae++]);
        for (var j = C(g.store), ie = 0; j.length > ie;) m(j[ie++]);
        r(r.S + r.F * !W, 'Symbol', {
            for: function(e) {
                return o(z, e += '') ? z[e] : z[e] = A(e)
            },
            keyFor: function(e) {
                if (X(e)) return f(z, e);
                throw TypeError(e + ' is not a symbol!')
            },
            useSetter: function() {
                G = !0
            },
            useSimple: function() {
                G = !1
            }
        }), r(r.S + r.F * !W, 'Object', {
            create: function(e, t) {
                return t === void 0 ? S(e) : Z(S(e), t)
            },
            defineProperty: $,
            defineProperties: Z,
            getOwnPropertyDescriptor: Q,
            getOwnPropertyNames: ee,
            getOwnPropertySymbols: te
        }), I && r(r.S + r.F * (!W || d(function() {
            var e = A();
            return '[null]' != L([e]) || '{}' != L({
                a: e
            }) || '{}' != L(Object(e))
        })), 'JSON', {
            stringify: function(e) {
                if (!(void 0 === e || X(e))) {
                    for (var t = [e], n = 1, a, i; arguments.length > n;) t.push(arguments[n++]);
                    return a = t[1], 'function' == typeof a && (i = a), (i || !v(a)) && (a = function(e, t) {
                        if (i && (t = i.call(this, e, t)), !X(t)) return t
                    }), t[1] = a, L.apply(I, t)
                }
            }
        }), A[D][B] || n(13)(A[D], B, A[D].valueOf), p(A, 'Symbol'), p(Math, 'Math', !0), p(a.JSON, 'JSON', !0)
    }, function(e, t, n) {
        var a = n(33),
            i = n(15);
        e.exports = function(e, t) {
            for (var n = i(e), o = a(n), r = o.length, l = 0, s; r > l;)
                if (n[s = o[l++]] === t) return s
        }
    }, function(e, t, n) {
        var a = n(33),
            o = n(57),
            r = n(53);
        e.exports = function(e) {
            var t = a(e),
                n = o.f;
            if (n)
                for (var l = n(e), s = r.f, d = 0, i; l.length > d;) s.call(e, i = l[d++]) && t.push(i);
            return t
        }
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Object', {
            create: n(40)
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S + a.F * !n(7), 'Object', {
            defineProperty: n(8).f
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S + a.F * !n(7), 'Object', {
            defineProperties: n(109)
        })
    }, function(e, t, n) {
        var a = n(15),
            i = n(17).f;
        n(27)('getOwnPropertyDescriptor', function() {
            return function(e, t) {
                return i(a(e), t)
            }
        })
    }, function(e, t, n) {
        var a = n(10),
            i = n(18);
        n(27)('getPrototypeOf', function() {
            return function(e) {
                return i(a(e))
            }
        })
    }, function(e, t, n) {
        var a = n(10),
            i = n(33);
        n(27)('keys', function() {
            return function(e) {
                return i(a(e))
            }
        })
    }, function(e, t, n) {
        n(27)('getOwnPropertyNames', function() {
            return n(110).f
        })
    }, function(e, t, n) {
        var a = n(4),
            i = n(32).onFreeze;
        n(27)('freeze', function(e) {
            return function(t) {
                return e && a(t) ? e(i(t)) : t
            }
        })
    }, function(e, t, n) {
        var a = n(4),
            i = n(32).onFreeze;
        n(27)('seal', function(e) {
            return function(t) {
                return e && a(t) ? e(i(t)) : t
            }
        })
    }, function(e, t, n) {
        var a = n(4),
            i = n(32).onFreeze;
        n(27)('preventExtensions', function(e) {
            return function(t) {
                return e && a(t) ? e(i(t)) : t
            }
        })
    }, function(e, t, n) {
        var a = n(4);
        n(27)('isFrozen', function(e) {
            return function(t) {
                return !a(t) || !!e && e(t)
            }
        })
    }, function(e, t, n) {
        var a = n(4);
        n(27)('isSealed', function(e) {
            return function(t) {
                return !a(t) || !!e && e(t)
            }
        })
    }, function(e, t, n) {
        var a = n(4);
        n(27)('isExtensible', function(e) {
            return function(t) {
                return !!a(t) && (!e || e(t))
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S + a.F, 'Object', {
            assign: n(111)
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Object', {
            is: n(169)
        })
    }, function(e) {
        e.exports = Object.is || function(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
        }
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Object', {
            setPrototypeOf: n(78).set
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(54);
        ({})[n(5)('toStringTag')] = 'z', n(14)(Object.prototype, 'toString', function() {
            return '[object ' + a(this) + ']'
        }, !0)
    }, function(e, t, n) {
        var a = n(0);
        a(a.P, 'Function', {
            bind: n(112)
        })
    }, function(e, t, n) {
        var a = n(8).f,
            i = Function.prototype,
            o = /^\s*function ([^ (]*)/,
            r = 'name';
        r in i || n(7) && a(i, r, {
            configurable: !0,
            get: function() {
                try {
                    return ('' + this).match(o)[1]
                } catch (t) {
                    return ''
                }
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(4),
            i = n(18),
            o = n(5)('hasInstance'),
            r = Function.prototype;
        o in r || n(8).f(r, o, {
            value: function(e) {
                if ('function' != typeof this || !a(e)) return !1;
                if (!a(this.prototype)) return e instanceof this;
                for (; e = i(e);)
                    if (this.prototype === e) return !0;
                return !1
            }
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(113);
        a(a.G + a.F * (parseInt != i), {
            parseInt: i
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(114);
        a(a.G + a.F * (parseFloat != i), {
            parseFloat: i
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(2),
            i = n(12),
            o = n(20),
            l = n(80),
            s = n(24),
            d = n(3),
            c = n(41).f,
            p = n(17).f,
            u = n(8).f,
            g = n(47).trim,
            h = 'Number',
            m = a[h],
            f = m,
            y = m.prototype,
            v = o(n(40)(y)) == h,
            b = function(e) {
                var t = s(e, !1);
                if ('string' == typeof t && 2 < t.length) {
                    t = 'trim' in r ? t.trim() : g(t, 3);
                    var n = t.charCodeAt(0),
                        a, o, d;
                    if (43 === n || 45 === n) {
                        if (a = t.charCodeAt(2), 88 === a || 120 === a) return NaN;
                    } else if (48 === n) {
                        switch (t.charCodeAt(1)) {
                            case 66:
                            case 98:
                                o = 2, d = 49;
                                break;
                            case 79:
                            case 111:
                                o = 8, d = 55;
                                break;
                            default:
                                return +t;
                        }
                        for (var c = t.slice(2), p = 0, i = c.length, l; p < i; p++)
                            if (l = c.charCodeAt(p), 48 > l || l > d) return NaN;
                        return parseInt(c, o)
                    }
                }
                return +t
            };
        if (!m(' 0o1') || !m('0b1') || m('+0x1')) {
            m = function(e) {
                var t = 1 > arguments.length ? 0 : e,
                    n = this;
                return n instanceof m && (v ? d(function() {
                    y.valueOf.call(n)
                }) : o(n) != h) ? l(new f(b(t)), n, m) : b(t)
            };
            for (var x = n(7) ? c(f) : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(','), E = 0, k; x.length > E; E++) i(f, k = x[E]) && !i(m, k) && u(m, k, p(f, k));
            m.prototype = y, y.constructor = m, n(14)(a, h, m)
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(26),
            o = n(115),
            r = n(81),
            l = 1.toFixed,
            s = y,
            d = [0, 0, 0, 0, 0, 0],
            c = 'Number.toFixed: incorrect invocation!',
            p = '0',
            u = function(e, t) {
                for (var n = -1, a = t; 6 > ++n;) a += e * d[n], d[n] = a % 1e7, a = s(a / 1e7)
            },
            g = function(e) {
                for (var t = 6, n = 0; 0 <= --t;) n += d[t], d[t] = s(n / e), n = 1e7 * (n % e)
            },
            h = function() {
                for (var e = 6, n = ''; 0 <= --e;)
                    if ('' != n || 0 == e || 0 !== d[e]) {
                        var a = d[e] + '';
                        n = '' == n ? a : n + r.call(p, 7 - a.length) + a
                    }
                return n
            },
            v = function(e, t, n) {
                return 0 === t ? n : 1 == t % 2 ? v(e, t - 1, n * e) : v(e * e, t / 2, n)
            },
            b = function(e) {
                for (var t = 0, n = e; 4096 <= n;) t += 12, n /= 4096;
                for (; 2 <= n;) t += 1, n /= 2;
                return t
            };
        a(a.P + a.F * ('0.000' !== 8e-5.toFixed(3) || '1' !== 0.9.toFixed(0) || '1.25' !== 1.255.toFixed(2) || '1000000000000000128' !== 1000000000000000100.toFixed(0) || !n(3)(function() {
            l.call({})
        })), 'Number', {
            toFixed: function(t) {
                var n = o(this, c),
                    a = i(t),
                    l = '',
                    s = p,
                    d, m, f, y;
                if (0 > a || 20 < a) throw RangeError(c);
                if (n != n) return 'NaN';
                if (-1e21 >= n || 1e21 <= n) return n + '';
                if (0 > n && (l = '-', n = -n), 1e-21 < n)
                    if (d = b(n * v(2, 69, 1)) - 69, m = 0 > d ? n * v(2, -d, 1) : n / v(2, d, 1), m *= 4503599627370496, d = 52 - d, 0 < d) {
                        for (u(0, m), f = a; 7 <= f;) u(1e7, 0), f -= 7;
                        for (u(v(10, f, 1), 0), f = d - 1; 23 <= f;) g(8388608), f -= 23;
                        g(1 << f), u(1, 1), g(2), s = h()
                    } else u(0, m), u(1 << -d, 0), s = h() + r.call(p, a);
                return 0 < a ? (y = s.length, s = l + (y <= a ? '0.' + r.call(p, a - y) + s : s.slice(0, y - a) + '.' + s.slice(y - a))) : s = l + s, s
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(3),
            o = n(115),
            r = 1.toPrecision;
        a(a.P + a.F * (i(function() {
            return '1' !== r.call(1, void 0)
        }) || !i(function() {
            r.call({})
        })), 'Number', {
            toPrecision: function(e) {
                var t = o(this, 'Number#toPrecision: incorrect invocation!');
                return e === void 0 ? r.call(t) : r.call(t, e)
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Number', {
            EPSILON: 2.220446049250313e-16
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(2).isFinite;
        a(a.S, 'Number', {
            isFinite: function(e) {
                return 'number' == typeof e && i(e)
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Number', {
            isInteger: n(116)
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Number', {
            isNaN: function(e) {
                return e != e
            }
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(116);
        a(a.S, 'Number', {
            isSafeInteger: function(e) {
                return i(e) && 9007199254740991 >= c(e)
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Number', {
            MAX_SAFE_INTEGER: 9007199254740991
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Number', {
            MIN_SAFE_INTEGER: -9007199254740991
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(114);
        a(a.S + a.F * (Number.parseFloat != i), 'Number', {
            parseFloat: i
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(113);
        a(a.S + a.F * (Number.parseInt != i), 'Number', {
            parseInt: i
        })
    }, function(e, t, n) {
        var a = n(0),
            r = n(117),
            s = o,
            d = Math.acosh;
        a(a.S + a.F * !(d && 710 == y(d(Number.MAX_VALUE)) && d(Infinity) == Infinity), 'Math', {
            acosh: function(e) {
                return 1 > (e = +e) ? NaN : 94906265.62425156 < e ? l(e) + i : r(e - 1 + s(e - 1) * s(e + 1))
            }
        })
    }, function(e, t, n) {
        function a(e) {
            return isFinite(e = +e) && 0 != e ? 0 > e ? -a(-e) : l(e + o(e * e + 1)) : e
        }
        var i = n(0),
            r = Math.asinh;
        i(i.S + i.F * !(r && 0 < 1 / r(0)), 'Math', {
            asinh: a
        })
    }, function(e, t, n) {
        var a = n(0),
            i = Math.atanh;
        a(a.S + a.F * !(i && 0 > 1 / i(-0)), 'Math', {
            atanh: function(e) {
                return 0 == (e = +e) ? e : l((1 + e) / (1 - e)) / 2
            }
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(82);
        a(a.S, 'Math', {
            cbrt: function(e) {
                return i(e = +e) * s(c(e), 1 / 3)
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Math', {
            clz32: function(e) {
                return (e >>>= 0) ? 31 - y(l(e + 0.5) * Math.LOG2E) : 32
            }
        })
    }, function(e, t, n) {
        var a = n(0),
            i = d;
        a(a.S, 'Math', {
            cosh: function(e) {
                return (i(e = +e) + i(-e)) / 2
            }
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(83);
        a(a.S + a.F * (i != p), 'Math', {
            expm1: i
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Math', {
            fround: n(118)
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Math', {
            hypot: function() {
                for (var e = 0, t = 0, n = arguments.length, a = 0, i, r; t < n;) i = c(arguments[t++]), a < i ? (r = a / i, e = e * r * r + 1, a = i) : 0 < i ? (r = i / a, e += r * r) : e += i;
                return a == Infinity ? Infinity : a * o(e)
            }
        })
    }, function(e, t, n) {
        var a = n(0),
            i = Math.imul;
        a(a.S + a.F * n(3)(function() {
            return -5 != i(4294967295, 5) || 2 != i.length
        }), 'Math', {
            imul: function(e, t) {
                var n = 65535,
                    a = +e,
                    i = +t,
                    o = n & a,
                    r = n & i;
                return 0 | o * r + ((n & a >>> 16) * r + o * (n & i >>> 16) << 16 >>> 0)
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Math', {
            log10: function(e) {
                return l(e) * Math.LOG10E
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Math', {
            log1p: n(117)
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Math', {
            log2: function(e) {
                return l(e) / i
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Math', {
            sign: n(82)
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(83),
            o = d;
        a(a.S + a.F * n(3)(function() {
            return !0
        }), 'Math', {
            sinh: function(e) {
                return 1 > c(e = +e) ? (i(e) - i(-e)) / 2 : (o(e - 1) - o(-e - 1)) * (Math.E / 2)
            }
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(83),
            o = d;
        a(a.S, 'Math', {
            tanh: function(e) {
                var t = i(e = +e),
                    n = i(-e);
                return t == Infinity ? 1 : n == Infinity ? -1 : (t - n) / (o(e) + o(-e))
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Math', {
            trunc: function(e) {
                return (0 < e ? y : g)(e)
            }
        })
    }, function(e, t, n) {
        var i = n(0),
            o = n(39),
            r = a,
            l = String.fromCodePoint;
        i(i.S + i.F * (!!l && 1 != l.length), 'String', {
            fromCodePoint: function() {
                for (var e = [], t = arguments.length, n = 0, a; t > n;) {
                    if (a = +arguments[n++], o(a, 1114111) !== a) throw RangeError(a + ' is not a valid code point');
                    e.push(65536 > a ? r(a) : r(((a -= 65536) >> 10) + 55296, a % 1024 + 56320))
                }
                return e.join('')
            }
        })
    }, function(e, t, n) {
        var a = n(0),
            o = n(15),
            r = n(9);
        a(a.S, 'String', {
            raw: function(e) {
                for (var t = o(e.raw), n = r(t.length), a = arguments.length, l = [], s = 0; n > s;) l.push(t[s++] + ''), s < a && l.push(arguments[s] + '');
                return l.join('')
            }
        })
    }, function(e, t, n) {
        'use strict';
        n(47)('trim', function(e) {
            return function() {
                return e(this, 3)
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(84)(!0);
        n(85)(String, 'String', function(e) {
            this._t = e + '', this._i = 0
        }, function() {
            var e = this._t,
                t = this._i,
                n;
            return t >= e.length ? {
                value: void 0,
                done: !0
            } : (n = a(e, t), this._i += n.length, {
                value: n,
                done: !1
            })
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(84)(!1);
        a(a.P, 'String', {
            codePointAt: function(e) {
                return i(this, e)
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(9),
            o = n(87),
            r = 'endsWith',
            l = '' [r];
        a(a.P + a.F * n(88)(r), 'String', {
            endsWith: function(e) {
                var t = o(this, e, r),
                    n = 1 < arguments.length ? arguments[1] : void 0,
                    a = i(t.length),
                    l = n === void 0 ? a : h(i(n), a),
                    s = e + '';
                return t.slice(l - s.length, l) === s
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(87),
            o = 'includes';
        a(a.P + a.F * n(88)(o), 'String', {
            includes: function(e) {
                return !!~i(this, e, o).indexOf(e, 1 < arguments.length ? arguments[1] : void 0)
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.P, 'String', {
            repeat: n(81)
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(9),
            o = n(87),
            r = 'startsWith',
            l = '' [r];
        a(a.P + a.F * n(88)(r), 'String', {
            startsWith: function(e) {
                var t = o(this, e, r),
                    n = i(h(1 < arguments.length ? arguments[1] : void 0, t.length)),
                    a = e + '';
                return t.slice(n, n + a.length) === a
            }
        })
    }, function(e, t, n) {
        'use strict';
        n(16)('anchor', function(e) {
            return function(t) {
                return e(this, 'a', 'name', t)
            }
        })
    }, function(e, t, n) {
        'use strict';
        n(16)('big', function(e) {
            return function() {
                return e(this, 'big', '', '')
            }
        })
    }, function(e, t, n) {
        'use strict';
        n(16)('blink', function(e) {
            return function() {
                return e(this, 'blink', '', '')
            }
        })
    }, function(e, t, n) {
        'use strict';
        n(16)('bold', function(e) {
            return function() {
                return e(this, 'b', '', '')
            }
        })
    }, function(e, t, n) {
        'use strict';
        n(16)('fixed', function(e) {
            return function() {
                return e(this, 'tt', '', '')
            }
        })
    }, function(e, t, n) {
        'use strict';
        n(16)('fontcolor', function(e) {
            return function(t) {
                return e(this, 'font', 'color', t)
            }
        })
    }, function(e, t, n) {
        'use strict';
        n(16)('fontsize', function(e) {
            return function(t) {
                return e(this, 'font', 'size', t)
            }
        })
    }, function(e, t, n) {
        'use strict';
        n(16)('italics', function(e) {
            return function() {
                return e(this, 'i', '', '')
            }
        })
    }, function(e, t, n) {
        'use strict';
        n(16)('link', function(e) {
            return function(t) {
                return e(this, 'a', 'href', t)
            }
        })
    }, function(e, t, n) {
        'use strict';
        n(16)('small', function(e) {
            return function() {
                return e(this, 'small', '', '')
            }
        })
    }, function(e, t, n) {
        'use strict';
        n(16)('strike', function(e) {
            return function() {
                return e(this, 'strike', '', '')
            }
        })
    }, function(e, t, n) {
        'use strict';
        n(16)('sub', function(e) {
            return function() {
                return e(this, 'sub', '', '')
            }
        })
    }, function(e, t, n) {
        'use strict';
        n(16)('sup', function(e) {
            return function() {
                return e(this, 'sup', '', '')
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Date', {
            now: function() {
                return new Date().getTime()
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(10),
            o = n(24);
        a(a.P + a.F * n(3)(function() {
            return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                toISOString: function() {
                    return 1
                }
            })
        }), 'Date', {
            toJSON: function() {
                var e = i(this),
                    t = o(e);
                return 'number' != typeof t || isFinite(t) ? e.toISOString() : null
            }
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(231);
        a(a.P + a.F * (Date.prototype.toISOString !== i), 'Date', {
            toISOString: i
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(3),
            i = Date.prototype.getTime,
            o = Date.prototype.toISOString,
            r = function(e) {
                return 9 < e ? e : '0' + e
            };
        e.exports = a(function() {
            return '0385-07-25T07:06:39.999Z' != o.call(new Date(-50000000000001))
        }) || !a(function() {
            o.call(new Date(NaN))
        }) ? function() {
            if (!isFinite(i.call(this))) throw RangeError('Invalid time value');
            var e = this,
                t = e.getUTCFullYear(),
                n = e.getUTCMilliseconds(),
                a = 0 > t ? '-' : 9999 < t ? '+' : '';
            return a + ('00000' + c(t)).slice(a ? -6 : -4) + '-' + r(e.getUTCMonth() + 1) + '-' + r(e.getUTCDate()) + 'T' + r(e.getUTCHours()) + ':' + r(e.getUTCMinutes()) + ':' + r(e.getUTCSeconds()) + '.' + (99 < n ? n : '0' + r(n)) + 'Z'
        } : o
    }, function(e, t, n) {
        var a = Date.prototype,
            i = 'Invalid Date',
            o = 'toString',
            r = a[o],
            l = a.getTime;
        new Date(NaN) + '' != i && n(14)(a, o, function() {
            var e = l.call(this);
            return e === e ? r.call(this) : i
        })
    }, function(e, t, n) {
        var a = n(5)('toPrimitive'),
            i = Date.prototype;
        a in i || n(13)(i, a, n(234))
    }, function(e, t, n) {
        'use strict';
        var a = n(1),
            i = n(24),
            o = 'number';
        e.exports = function(e) {
            if ('string' !== e && e !== o && 'default' !== e) throw TypeError('Incorrect hint');
            return i(a(this), e != o)
        }
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Array', {
            isArray: n(58)
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(19),
            i = n(0),
            o = n(10),
            r = n(119),
            l = n(89),
            s = n(9),
            d = n(90),
            c = n(91);
        i(i.S + i.F * !n(61)(function(e) {
            Array.from(e)
        }), 'Array', {
            from: function(e) {
                var t = o(e),
                    n = 'function' == typeof this ? this : Array,
                    i = arguments.length,
                    p = 1 < i ? arguments[1] : void 0,
                    u = void 0 !== p,
                    g = 0,
                    h = c(t),
                    m, f, y, v;
                if (u && (p = a(p, 2 < i ? arguments[2] : void 0, 2)), void 0 != h && !(n == Array && l(h)))
                    for (v = h.call(t), f = new n; !(y = v.next()).done; g++) d(f, g, u ? r(v, p, [y.value, g], !0) : y.value);
                else
                    for (m = s(t.length), f = new n(m); m > g; g++) d(f, g, u ? p(t[g], g) : t[g]);
                return f.length = g, f
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(90);
        a(a.S + a.F * n(3)(function() {
            function e() {}
            return !(Array.of.call(e) instanceof e)
        }), 'Array', {
            of: function() {
                for (var e = 0, t = arguments.length, n = new('function' == typeof this ? this : Array)(t); t > e;) i(n, e, arguments[e++]);
                return n.length = t, n
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(15),
            o = [].join;
        a(a.P + a.F * (n(52) != Object || !n(21)(o)), 'Array', {
            join: function(e) {
                return o.call(i(this), e === void 0 ? ',' : e)
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(77),
            o = n(20),
            r = n(39),
            l = n(9),
            s = [].slice;
        a(a.P + a.F * n(3)(function() {
            i && s.call(i)
        }), 'Array', {
            slice: function(e, t) {
                var n = l(this.length),
                    a = o(this);
                if (t = void 0 === t ? n : t, 'Array' == a) return s.call(this, e, t);
                for (var d = r(e, n), c = r(t, n), p = l(c - d), u = Array(p), g = 0; g < p; g++) u[g] = 'String' == a ? this.charAt(d + g) : this[d + g];
                return u
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(11),
            o = n(10),
            r = n(3),
            l = [].sort,
            s = [1, 2, 3];
        a(a.P + a.F * (r(function() {
            s.sort(void 0)
        }) || !r(function() {
            s.sort(null)
        }) || !n(21)(l)), 'Array', {
            sort: function(e) {
                return e === void 0 ? l.call(o(this)) : l.call(o(this), i(e))
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(28)(0),
            o = n(21)([].forEach, !0);
        a(a.P + a.F * !o, 'Array', {
            forEach: function(e) {
                return i(this, e, arguments[1])
            }
        })
    }, function(e, t, n) {
        var a = n(4),
            i = n(58),
            o = n(5)('species');
        e.exports = function(e) {
            var t;
            return i(e) && (t = e.constructor, 'function' == typeof t && (t === Array || i(t.prototype)) && (t = void 0), a(t) && (t = t[o], null === t && (t = void 0))), void 0 === t ? Array : t
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(28)(1);
        a(a.P + a.F * !n(21)([].map, !0), 'Array', {
            map: function(e) {
                return i(this, e, arguments[1])
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(28)(2);
        a(a.P + a.F * !n(21)([].filter, !0), 'Array', {
            filter: function(e) {
                return i(this, e, arguments[1])
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(28)(3);
        a(a.P + a.F * !n(21)([].some, !0), 'Array', {
            some: function(e) {
                return i(this, e, arguments[1])
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(28)(4);
        a(a.P + a.F * !n(21)([].every, !0), 'Array', {
            every: function(e) {
                return i(this, e, arguments[1])
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(120);
        a(a.P + a.F * !n(21)([].reduce, !0), 'Array', {
            reduce: function(e) {
                return i(this, e, arguments.length, arguments[1], !1)
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(120);
        a(a.P + a.F * !n(21)([].reduceRight, !0), 'Array', {
            reduceRight: function(e) {
                return i(this, e, arguments.length, arguments[1], !0)
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(56)(!1),
            o = [].indexOf,
            r = !!o && 0 > 1 / [1].indexOf(1, -0);
        a(a.P + a.F * (r || !n(21)(o)), 'Array', {
            indexOf: function(e) {
                return r ? o.apply(this, arguments) || 0 : i(this, e, arguments[1])
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(15),
            o = n(26),
            r = n(9),
            l = [].lastIndexOf,
            s = !!l && 0 > 1 / [1].lastIndexOf(1, -0);
        a(a.P + a.F * (s || !n(21)(l)), 'Array', {
            lastIndexOf: function(e) {
                if (s) return l.apply(this, arguments) || 0;
                var t = i(this),
                    n = r(t.length),
                    a = n - 1;
                for (1 < arguments.length && (a = h(a, o(arguments[1]))), 0 > a && (a = n + a); 0 <= a; a--)
                    if (a in t && t[a] === e) return a || 0;
                return -1
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.P, 'Array', {
            copyWithin: n(121)
        }), n(34)('copyWithin')
    }, function(e, t, n) {
        var a = n(0);
        a(a.P, 'Array', {
            fill: n(93)
        }), n(34)('fill')
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(28)(5),
            o = 'find',
            r = !0;
        o in [] && [, ][o](function() {
            r = !1
        }), a(a.P + a.F * r, 'Array', {
            find: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n(34)(o)
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(28)(6),
            o = 'findIndex',
            r = !0;
        o in [] && [, ][o](function() {
            r = !1
        }), a(a.P + a.F * r, 'Array', {
            findIndex: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n(34)(o)
    }, function(e, t, n) {
        n(42)('Array')
    }, function(e, t, n) {
        var a = n(2),
            o = n(80),
            r = n(8).f,
            l = n(41).f,
            s = n(60),
            d = n(62),
            c = a.RegExp,
            u = c,
            g = c.prototype,
            p = /a/g,
            h = /a/g,
            m = new c(p) !== p;
        if (n(7) && (!m || n(3)(function() {
                return h[n(5)('match')] = !1, c(p) != p || c(h) == h || '/a/i' != c(p, 'i')
            }))) {
            c = function(e, t) {
                var n = this instanceof c,
                    a = s(e),
                    i = t === void 0;
                return !n && a && e.constructor === c && i ? e : o(m ? new u(a && !i ? e.source : e, t) : u((a = e instanceof c) ? e.source : e, a && i ? d.call(e) : t), n ? this : g, c)
            };
            for (var f = function(e) {
                    (e in c) || r(c, e, {
                        configurable: !0,
                        get: function() {
                            return u[e]
                        },
                        set: function(t) {
                            u[e] = t
                        }
                    })
                }, y = l(u), v = 0; y.length > v;) f(y[v++]);
            g.constructor = c, c.prototype = g, n(14)(a, 'RegExp', c)
        }
        n(42)('RegExp')
    }, function(e, t, n) {
        'use strict';
        n(123);
        var a = n(1),
            i = n(62),
            o = n(7),
            r = 'toString',
            l = /./ [r],
            s = function(e) {
                n(14)(RegExp.prototype, r, e, !0)
            };
        n(3)(function() {
            return '/a/b' != l.call({
                source: 'a',
                flags: 'b'
            })
        }) ? s(function() {
            var e = a(this);
            return '/'.concat(e.source, '/', 'flags' in e ? e.flags : !o && e instanceof RegExp ? i.call(e) : void 0)
        }) : l.name != r && s(function() {
            return l.call(this)
        })
    }, function(e, t, n) {
        n(63)('match', 1, function(e, t, n) {
            return [function(n) {
                'use strict';
                var a = e(this),
                    i = n == void 0 ? void 0 : n[t];
                return i === void 0 ? new RegExp(n)[t](a + '') : i.call(n, a)
            }, n]
        })
    }, function(e, t, n) {
        n(63)('replace', 2, function(e, t, n) {
            return [function(a, i) {
                'use strict';
                var o = e(this),
                    r = a == void 0 ? void 0 : a[t];
                return r === void 0 ? n.call(o + '', a, i) : r.call(a, o, i)
            }, n]
        })
    }, function(e, t, n) {
        n(63)('search', 1, function(e, t, n) {
            return [function(n) {
                'use strict';
                var a = e(this),
                    i = n == void 0 ? void 0 : n[t];
                return i === void 0 ? new RegExp(n)[t](a + '') : i.call(n, a)
            }, n]
        })
    }, function(e, t, n) {
        n(63)('split', 2, function(e, t, a) {
            'use strict';
            var o = n(60),
                r = a,
                l = [].push,
                i = 'split',
                s = 'length',
                d = 'lastIndex';
            if ('c' == 'abbc' [i](/(b)*/)[1] || 4 != 'test' [i](/(?:)/, -1)[s] || 2 != 'ab' [i](/(?:ab)*/)[s] || 4 != '.' [i](/(.?)(.?)/)[s] || 1 < '.' [i](/()()/)[s] || '' [i](/.?/)[s]) {
                var c = /()??/.exec('')[1] === void 0;
                a = function(e, t) {
                    var n = this + '';
                    if (void 0 === e && 0 === t) return [];
                    if (!o(e)) return r.call(n, e, t);
                    var a = [],
                        p = (e.ignoreCase ? 'i' : '') + (e.multiline ? 'm' : '') + (e.unicode ? 'u' : '') + (e.sticky ? 'y' : ''),
                        u = 0,
                        g = void 0 === t ? 4294967295 : t >>> 0,
                        h = new RegExp(e.source, p + 'g'),
                        m, f, y, v, b;
                    for (c || (m = new RegExp('^' + h.source + '$(?!\\s)', p));
                        (f = h.exec(n)) && (y = f.index + f[0][s], !(y > u && (a.push(n.slice(u, f.index)), !c && 1 < f[s] && f[0].replace(m, function() {
                            for (b = 1; b < arguments[s] - 2; b++) void 0 === arguments[b] && (f[b] = void 0)
                        }), 1 < f[s] && f.index < n[s] && l.apply(a, f.slice(1)), v = f[0][s], u = y, a[s] >= g)));) h[d] === f.index && h[d]++;
                    return u === n[s] ? (v || !h.test('')) && a.push('') : a.push(n.slice(u)), a[s] > g ? a.slice(0, g) : a
                }
            } else '0' [i](void 0, 0)[s] && (a = function(e, t) {
                return void 0 === e && 0 === t ? [] : r.call(this, e, t)
            });
            return [function(n, i) {
                var o = e(this),
                    r = n == void 0 ? void 0 : n[t];
                return r === void 0 ? a.call(o + '', n, i) : r.call(n, o, i)
            }, a]
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(38),
            i = n(2),
            o = n(19),
            r = n(54),
            l = n(0),
            s = n(4),
            d = n(11),
            c = n(43),
            p = n(44),
            u = n(64),
            g = n(95).set,
            h = n(96)(),
            m = n(97),
            f = n(124),
            y = n(125),
            v = 'Promise',
            b = i.TypeError,
            x = i.process,
            E = i[v],
            k = 'process' == r(x),
            _ = function() {},
            S = D = m.f,
            N = !! function() {
                try {
                    var e = E.resolve(1),
                        t = (e.constructor = {})[n(5)('species')] = function(e) {
                            e(_, _)
                        };
                    return (k || 'function' == typeof PromiseRejectionEvent) && e.then(_) instanceof t
                } catch (t) {}
            }(),
            w = a ? function(e, t) {
                return e === t || e === E && t === B
            } : function(e, t) {
                return e === t
            },
            T = function(e) {
                var t;
                return s(e) && 'function' == typeof(t = e.then) && t
            },
            C = function(e, t) {
                if (!e._n) {
                    e._n = !0;
                    var n = e._c;
                    h(function() {
                        for (var a = e._v, o = 1 == e._s, r = 0, i = function(t) {
                                var n = o ? t.ok : t.fail,
                                    i = t.resolve,
                                    r = t.reject,
                                    l = t.domain,
                                    s, d;
                                try {
                                    n ? (!o && (2 == e._h && O(e), e._h = 1), !0 === n ? s = a : (l && l.enter(), s = n(a), l && l.exit()), s === t.promise ? r(b('Promise-chain cycle')) : (d = T(s)) ? d.call(s, i, r) : i(s)) : r(a)
                                } catch (t) {
                                    r(t)
                                }
                            }; n.length > r;) i(n[r++]);
                        e._c = [], e._n = !1, t && !e._h && R(e)
                    })
                }
            },
            R = function(e) {
                g.call(i, function() {
                    var t = e._v,
                        n = P(e),
                        a, o, r;
                    if (n && (a = f(function() {
                            k ? x.emit('unhandledRejection', t, e) : (o = i.onunhandledrejection) ? o({
                                promise: e,
                                reason: t
                            }) : (r = i.console) && r.error && r.error('Unhandled promise rejection', t)
                        }), e._h = k || P(e) ? 2 : 1), e._a = void 0, n && a.e) throw a.v
                })
            },
            P = function(e) {
                if (1 == e._h) return !1;
                for (var t = e._a || e._c, n = 0, a; t.length > n;)
                    if (a = t[n++], a.fail || !P(a.promise)) return !1;
                return !0
            },
            O = function(e) {
                g.call(i, function() {
                    var t;
                    k ? x.emit('rejectionHandled', e) : (t = i.onrejectionhandled) && t({
                        promise: e,
                        reason: e._v
                    })
                })
            },
            A = function(e) {
                var t = this;
                t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, !t._a && (t._a = t._c.slice()), C(t, !0))
            },
            I = function(e) {
                var t = this,
                    n;
                if (!t._d) {
                    t._d = !0, t = t._w || t;
                    try {
                        if (t === e) throw b('Promise can\'t be resolved itself');
                        (n = T(e)) ? h(function() {
                            var a = {
                                _w: t,
                                _d: !1
                            };
                            try {
                                n.call(e, o(I, a, 1), o(A, a, 1))
                            } catch (t) {
                                A.call(a, t)
                            }
                        }): (t._v = e, t._s = 1, C(t, !1))
                    } catch (n) {
                        A.call({
                            _w: t,
                            _d: !1
                        }, n)
                    }
                }
            },
            L, D, M, B;
        N || (E = function(e) {
            c(this, E, v, '_h'), d(e), L.call(this);
            try {
                e(o(I, this, 1), o(A, this, 1))
            } catch (e) {
                A.call(this, e)
            }
        }, L = function() {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }, L.prototype = n(45)(E.prototype, {
            then: function(e, t) {
                var n = S(u(this, E));
                return n.ok = 'function' != typeof e || e, n.fail = 'function' == typeof t && t, n.domain = k ? x.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && C(this, !1), n.promise
            },
            catch: function(e) {
                return this.then(void 0, e)
            }
        }), M = function() {
            var e = new L;
            this.promise = e, this.resolve = o(I, e, 1), this.reject = o(A, e, 1)
        }, m.f = S = function(e) {
            return w(E, e) ? new M(e) : D(e)
        }), l(l.G + l.W + l.F * !N, {
            Promise: E
        }), n(46)(E, v), n(42)(v), B = n(23)[v], l(l.S + l.F * !N, v, {
            reject: function(e) {
                var t = S(this),
                    n = t.reject;
                return n(e), t.promise
            }
        }), l(l.S + l.F * (a || !N), v, {
            resolve: function(e) {
                return e instanceof E && w(e.constructor, this) ? e : y(this, e)
            }
        }), l(l.S + l.F * !(N && n(61)(function(e) {
            E.all(e)['catch'](_)
        })), v, {
            all: function(e) {
                var t = this,
                    n = S(t),
                    a = n.resolve,
                    i = n.reject,
                    o = f(function() {
                        var n = [],
                            o = 0,
                            r = 1;
                        p(e, !1, function(e) {
                            var l = o++,
                                s = !1;
                            n.push(void 0), r++, t.resolve(e).then(function(e) {
                                s || (s = !0, n[l] = e, --r || a(n))
                            }, i)
                        }), --r || a(n)
                    });
                return o.e && i(o.v), n.promise
            },
            race: function(e) {
                var t = this,
                    n = S(t),
                    a = n.reject,
                    i = f(function() {
                        p(e, !1, function(e) {
                            t.resolve(e).then(n.resolve, a)
                        })
                    });
                return i.e && a(i.v), n.promise
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(130),
            i = n(49),
            o = 'WeakSet';
        n(65)(o, function(e) {
            return function() {
                return e(this, 0 < arguments.length ? arguments[0] : void 0)
            }
        }, {
            add: function(e) {
                return a.def(i(this, o), e, !0)
            }
        }, a, !1, !0)
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(66),
            o = n(98),
            r = n(1),
            l = n(39),
            s = n(9),
            d = n(4),
            c = n(2).ArrayBuffer,
            p = n(64),
            u = o.ArrayBuffer,
            g = o.DataView,
            h = i.ABV && c.isView,
            m = u.prototype.slice,
            f = i.VIEW,
            y = 'ArrayBuffer';
        a(a.G + a.W + a.F * (c !== u), {
            ArrayBuffer: u
        }), a(a.S + a.F * !i.CONSTR, y, {
            isView: function(e) {
                return h && h(e) || d(e) && f in e
            }
        }), a(a.P + a.U + a.F * n(3)(function() {
            return !new u(2).slice(1, void 0).byteLength
        }), y, {
            slice: function(e, t) {
                if (m !== void 0 && t === void 0) return m.call(r(this), e);
                for (var n = r(this).byteLength, a = l(e, n), i = l(void 0 === t ? n : t, n), o = new(p(this, u))(s(i - a)), d = new g(this), c = new g(o), h = 0; a < i;) c.setUint8(h++, d.getUint8(a++));
                return o
            }
        }), n(42)(y)
    }, function(e, t, n) {
        var a = n(0);
        a(a.G + a.W + a.F * !n(66).ABV, {
            DataView: n(98).DataView
        })
    }, function(e, t, n) {
        n(29)('Int8', 1, function(e) {
            return function(t, n, a) {
                return e(this, t, n, a)
            }
        })
    }, function(e, t, n) {
        n(29)('Uint8', 1, function(e) {
            return function(t, n, a) {
                return e(this, t, n, a)
            }
        })
    }, function(e, t, n) {
        n(29)('Uint8', 1, function(e) {
            return function(t, n, a) {
                return e(this, t, n, a)
            }
        }, !0)
    }, function(e, t, n) {
        n(29)('Int16', 2, function(e) {
            return function(t, n, a) {
                return e(this, t, n, a)
            }
        })
    }, function(e, t, n) {
        n(29)('Uint16', 2, function(e) {
            return function(t, n, a) {
                return e(this, t, n, a)
            }
        })
    }, function(e, t, n) {
        n(29)('Int32', 4, function(e) {
            return function(t, n, a) {
                return e(this, t, n, a)
            }
        })
    }, function(e, t, n) {
        n(29)('Uint32', 4, function(e) {
            return function(t, n, a) {
                return e(this, t, n, a)
            }
        })
    }, function(e, t, n) {
        n(29)('Float32', 4, function(e) {
            return function(t, n, a) {
                return e(this, t, n, a)
            }
        })
    }, function(e, t, n) {
        n(29)('Float64', 8, function(e) {
            return function(t, n, a) {
                return e(this, t, n, a)
            }
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(11),
            o = n(1),
            r = (n(2).Reflect || {}).apply,
            l = Function.apply;
        a(a.S + a.F * !n(3)(function() {
            r(function() {})
        }), 'Reflect', {
            apply: function(e, t, n) {
                var a = i(e),
                    s = o(n);
                return r ? r(a, t, s) : l.call(a, t, s)
            }
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(40),
            o = n(11),
            r = n(1),
            l = n(4),
            s = n(3),
            d = n(112),
            c = (n(2).Reflect || {}).construct,
            p = s(function() {
                function e() {}
                return !(c(function() {}, [], e) instanceof e)
            }),
            u = !s(function() {
                c(function() {})
            });
        a(a.S + a.F * (p || u), 'Reflect', {
            construct: function(e, t) {
                o(e), r(t);
                var n = 3 > arguments.length ? e : o(arguments[2]);
                if (u && !p) return c(e, t, n);
                if (e == n) {
                    switch (t.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t[0]);
                        case 2:
                            return new e(t[0], t[1]);
                        case 3:
                            return new e(t[0], t[1], t[2]);
                        case 4:
                            return new e(t[0], t[1], t[2], t[3]);
                    }
                    var a = [null];
                    return a.push.apply(a, t), new(d.apply(e, a))
                }
                var s = n.prototype,
                    g = i(l(s) ? s : Object.prototype),
                    h = Function.apply.call(e, g, t);
                return l(h) ? h : g
            }
        })
    }, function(e, t, n) {
        var a = n(8),
            i = n(0),
            o = n(1),
            r = n(24);
        i(i.S + i.F * n(3)(function() {
            Reflect.defineProperty(a.f({}, 1, {
                value: 1
            }), 1, {
                value: 2
            })
        }), 'Reflect', {
            defineProperty: function(e, t, n) {
                o(e), t = r(t, !0), o(n);
                try {
                    return a.f(e, t, n), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(17).f,
            o = n(1);
        a(a.S, 'Reflect', {
            deleteProperty: function(e, t) {
                var n = i(o(e), t);
                return n && !n.configurable ? !1 : delete e[t]
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(1),
            o = function(e) {
                this._t = i(e), this._i = 0;
                var t = this._k = [],
                    n;
                for (n in e) t.push(n)
            };
        n(86)(o, 'Object', function() {
            var e = this,
                t = e._k,
                n;
            do
                if (e._i >= t.length) return {
                    value: void 0,
                    done: !0
                };
            while (!((n = t[e._i++]) in e._t));
            return {
                value: n,
                done: !1
            }
        }), a(a.S, 'Reflect', {
            enumerate: function(e) {
                return new o(e)
            }
        })
    }, function(e, t, n) {
        function a(e, t) {
            var n = 3 > arguments.length ? e : arguments[2],
                l, c;
            return d(e) === n ? e[t] : (l = i.f(e, t)) ? r(l, 'value') ? l.value : void 0 === l.get ? void 0 : l.get.call(n) : s(c = o(e)) ? a(c, t, n) : void 0
        }
        var i = n(17),
            o = n(18),
            r = n(12),
            l = n(0),
            s = n(4),
            d = n(1);
        l(l.S, 'Reflect', {
            get: a
        })
    }, function(e, t, n) {
        var a = n(17),
            i = n(0),
            o = n(1);
        i(i.S, 'Reflect', {
            getOwnPropertyDescriptor: function(e, t) {
                return a.f(o(e), t)
            }
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(18),
            o = n(1);
        a(a.S, 'Reflect', {
            getPrototypeOf: function(e) {
                return i(o(e))
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Reflect', {
            has: function(e, t) {
                return t in e
            }
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(1),
            o = Object.isExtensible;
        a(a.S, 'Reflect', {
            isExtensible: function(e) {
                return i(e), !o || o(e)
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Reflect', {
            ownKeys: n(132)
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(1),
            o = Object.preventExtensions;
        a(a.S, 'Reflect', {
            preventExtensions: function(e) {
                i(e);
                try {
                    return o && o(e), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function(e, t, n) {
        function a(e, t, n) {
            var s = 4 > arguments.length ? e : arguments[3],
                u = o.f(c(e), t),
                g, h;
            if (!u) {
                if (p(h = r(e))) return a(h, t, n, s);
                u = d(0)
            }
            return l(u, 'value') ? !1 !== u.writable && p(s) && (g = o.f(s, t) || d(0), g.value = n, i.f(s, t, g), !0) : void 0 !== u.set && (u.set.call(s, n), !0)
        }
        var i = n(8),
            o = n(17),
            r = n(18),
            l = n(12),
            s = n(0),
            d = n(36),
            c = n(1),
            p = n(4);
        s(s.S, 'Reflect', {
            set: a
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(78);
        i && a(a.S, 'Reflect', {
            setPrototypeOf: function(e, t) {
                i.check(e, t);
                try {
                    return i.set(e, t), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(56)(!0);
        a(a.P, 'Array', {
            includes: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n(34)('includes')
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(133),
            o = n(10),
            r = n(9),
            l = n(11),
            s = n(92);
        a(a.P, 'Array', {
            flatMap: function(e) {
                var t = o(this),
                    n, a;
                return l(e), n = r(t.length), a = s(t, 0), i(a, t, t, n, 0, 1, e, arguments[1]), a
            }
        }), n(34)('flatMap')
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(133),
            o = n(10),
            r = n(9),
            l = n(26),
            s = n(92);
        a(a.P, 'Array', {
            flatten: function() {
                var e = arguments[0],
                    t = o(this),
                    n = r(t.length),
                    a = s(t, 0);
                return i(a, t, t, n, 0, void 0 === e ? 1 : l(e)), a
            }
        }), n(34)('flatten')
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(84)(!0);
        a(a.P, 'String', {
            at: function(e) {
                return i(this, e)
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(134);
        a(a.P, 'String', {
            padStart: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0, !0)
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(134);
        a(a.P, 'String', {
            padEnd: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0, !1)
            }
        })
    }, function(e, t, n) {
        'use strict';
        n(47)('trimLeft', function(e) {
            return function() {
                return e(this, 1)
            }
        }, 'trimStart')
    }, function(e, t, n) {
        'use strict';
        n(47)('trimRight', function(e) {
            return function() {
                return e(this, 2)
            }
        }, 'trimEnd')
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(25),
            o = n(9),
            r = n(60),
            l = n(62),
            s = RegExp.prototype,
            d = function(e, t) {
                this._r = e, this._s = t
            };
        n(86)(d, 'RegExp String', function() {
            var e = this._r.exec(this._s);
            return {
                value: e,
                done: null === e
            }
        }), a(a.P, 'String', {
            matchAll: function(e) {
                if (i(this), !r(e)) throw TypeError(e + ' is not a regexp!');
                var t = this + '',
                    n = 'flags' in s ? e.flags + '' : l.call(e),
                    a = new RegExp(e.source, ~n.indexOf('g') ? n : 'g' + n);
                return a.lastIndex = o(e.lastIndex), new d(a, t)
            }
        })
    }, function(e, t, n) {
        n(74)('asyncIterator')
    }, function(e, t, n) {
        n(74)('observable')
    }, function(e, t, n) {
        var a = n(0),
            o = n(132),
            r = n(15),
            l = n(17),
            s = n(90);
        a(a.S, 'Object', {
            getOwnPropertyDescriptors: function(e) {
                for (var t = r(e), n = l.f, a = o(t), d = {}, c = 0, i, p; a.length > c;) p = n(t, i = a[c++]), void 0 !== p && s(d, i, p);
                return d
            }
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(135)(!1);
        a(a.S, 'Object', {
            values: function(e) {
                return i(e)
            }
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(135)(!0);
        a(a.S, 'Object', {
            entries: function(e) {
                return i(e)
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(10),
            o = n(11),
            r = n(8);
        n(7) && a(a.P + n(67), 'Object', {
            __defineGetter__: function(e, t) {
                r.f(i(this), e, {
                    get: o(t),
                    enumerable: !0,
                    configurable: !0
                })
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(10),
            o = n(11),
            r = n(8);
        n(7) && a(a.P + n(67), 'Object', {
            __defineSetter__: function(e, t) {
                r.f(i(this), e, {
                    set: o(t),
                    enumerable: !0,
                    configurable: !0
                })
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(10),
            o = n(24),
            r = n(18),
            l = n(17).f;
        n(7) && a(a.P + n(67), 'Object', {
            __lookupGetter__: function(e) {
                var t = i(this),
                    n = o(e, !0),
                    a;
                do
                    if (a = l(t, n)) return a.get;
                while (t = r(t))
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(10),
            o = n(24),
            r = n(18),
            l = n(17).f;
        n(7) && a(a.P + n(67), 'Object', {
            __lookupSetter__: function(e) {
                var t = i(this),
                    n = o(e, !0),
                    a;
                do
                    if (a = l(t, n)) return a.set;
                while (t = r(t))
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.P + a.R, 'Map', {
            toJSON: n(136)('Map')
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.P + a.R, 'Set', {
            toJSON: n(136)('Set')
        })
    }, function(e, t, n) {
        n(68)('Map')
    }, function(e, t, n) {
        n(68)('Set')
    }, function(e, t, n) {
        n(68)('WeakMap')
    }, function(e, t, n) {
        n(68)('WeakSet')
    }, function(e, t, n) {
        n(69)('Map')
    }, function(e, t, n) {
        n(69)('Set')
    }, function(e, t, n) {
        n(69)('WeakMap')
    }, function(e, t, n) {
        n(69)('WeakSet')
    }, function(e, t, n) {
        var a = n(0);
        a(a.G, {
            global: n(2)
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'System', {
            global: n(2)
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(20);
        a(a.S, 'Error', {
            isError: function(e) {
                return 'Error' === i(e)
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Math', {
            clamp: function(e, t, n) {
                return h(n, m(t, e))
            }
        })
    }, function(e, t, a) {
        var i = a(0);
        i(i.S, 'Math', {
            DEG_PER_RAD: n / 180
        })
    }, function(e, t, a) {
        var i = a(0);
        i(i.S, 'Math', {
            degrees: function(e) {
                return e * (180 / n)
            }
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(138),
            o = n(118);
        a(a.S, 'Math', {
            fscale: function(e, t, n, a, r) {
                return o(i(e, t, n, a, r))
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Math', {
            iaddh: function(e, t, n, a) {
                var i = e >>> 0,
                    o = n >>> 0;
                return 0 | (t >>> 0) + (a >>> 0) + ((i & o | (i | o) & ~(i + o >>> 0)) >>> 31)
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Math', {
            isubh: function(e, t, n, a) {
                var i = e >>> 0,
                    o = n >>> 0;
                return 0 | (t >>> 0) - (a >>> 0) - ((~i & o | ~(i ^ o) & i - o >>> 0) >>> 31)
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Math', {
            imulh: function(e, n) {
                var a = 65535,
                    i = +e,
                    o = +n,
                    r = i & a,
                    l = o & a,
                    s = i >> 16,
                    d = o >> 16,
                    c = (s * l >>> 0) + (r * l >>> 16);
                return s * d + (c >> 16) + ((r * d >>> 0) + (c & a) >> 16)
            }
        })
    }, function(e, t, a) {
        var i = a(0);
        i(i.S, 'Math', {
            RAD_PER_DEG: 180 / n
        })
    }, function(e, t, a) {
        var i = a(0);
        i(i.S, 'Math', {
            radians: function(e) {
                return e * (n / 180)
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Math', {
            scale: n(138)
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Math', {
            umulh: function(e, n) {
                var a = 65535,
                    i = +e,
                    o = +n,
                    r = i & a,
                    l = o & a,
                    s = i >>> 16,
                    d = o >>> 16,
                    c = (s * l >>> 0) + (r * l >>> 16);
                return s * d + (c >>> 16) + ((r * d >>> 0) + (c & a) >>> 16)
            }
        })
    }, function(e, t, n) {
        var a = n(0);
        a(a.S, 'Math', {
            signbit: function(e) {
                return (e = +e) == e ? 0 == e ? 1 / e == Infinity : 0 < e : e
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(23),
            o = n(2),
            r = n(64),
            l = n(125);
        a(a.P + a.R, 'Promise', {
            finally: function(t) {
                var n = r(this, i.Promise || o.Promise),
                    e = 'function' == typeof t;
                return this.then(e ? function(e) {
                    return l(n, t()).then(function() {
                        return e
                    })
                } : t, e ? function(a) {
                    return l(n, t()).then(function() {
                        throw a
                    })
                } : t)
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(97),
            o = n(124);
        a(a.S, 'Promise', {
            try: function(e) {
                var t = i.f(this),
                    n = o(e);
                return (n.e ? t.reject : t.resolve)(n.v), t.promise
            }
        })
    }, function(e, t, n) {
        var a = n(30),
            i = n(1),
            o = a.key,
            r = a.set;
        a.exp({
            defineMetadata: function(e, t, n, a) {
                r(e, t, i(n), o(a))
            }
        })
    }, function(e, t, n) {
        var a = n(30),
            i = n(1),
            o = a.key,
            r = a.map,
            l = a.store;
        a.exp({
            deleteMetadata: function(e, t) {
                var n = 3 > arguments.length ? void 0 : o(arguments[2]),
                    a = r(i(t), n, !1);
                if (void 0 === a || !a['delete'](e)) return !1;
                if (a.size) return !0;
                var s = l.get(t);
                return s['delete'](n), !!s.size || l['delete'](t)
            }
        })
    }, function(e, t, n) {
        var a = n(30),
            i = n(1),
            o = n(18),
            r = a.has,
            l = a.get,
            s = a.key,
            d = function(e, t, n) {
                var a = r(e, t, n);
                if (a) return l(e, t, n);
                var i = o(t);
                return null === i ? void 0 : d(e, i, n)
            };
        a.exp({
            getMetadata: function(e, t) {
                return d(e, i(t), 3 > arguments.length ? void 0 : s(arguments[2]))
            }
        })
    }, function(e, t, n) {
        var a = n(128),
            i = n(137),
            o = n(30),
            r = n(1),
            l = n(18),
            s = o.keys,
            d = o.key,
            c = function(e, t) {
                var n = s(e, t),
                    o = l(e);
                if (null === o) return n;
                var r = c(o, t);
                return r.length ? n.length ? i(new a(n.concat(r))) : r : n
            };
        o.exp({
            getMetadataKeys: function(e) {
                return c(r(e), 2 > arguments.length ? void 0 : d(arguments[1]))
            }
        })
    }, function(e, t, n) {
        var a = n(30),
            i = n(1),
            o = a.get,
            r = a.key;
        a.exp({
            getOwnMetadata: function(e, t) {
                return o(e, i(t), 3 > arguments.length ? void 0 : r(arguments[2]))
            }
        })
    }, function(e, t, n) {
        var a = n(30),
            i = n(1),
            o = a.keys,
            r = a.key;
        a.exp({
            getOwnMetadataKeys: function(e) {
                return o(i(e), 2 > arguments.length ? void 0 : r(arguments[1]))
            }
        })
    }, function(e, t, n) {
        var a = n(30),
            i = n(1),
            o = n(18),
            r = a.has,
            l = a.key,
            s = function(e, t, n) {
                var a = r(e, t, n);
                if (a) return !0;
                var i = o(t);
                return null !== i && s(e, i, n)
            };
        a.exp({
            hasMetadata: function(e, t) {
                return s(e, i(t), 3 > arguments.length ? void 0 : l(arguments[2]))
            }
        })
    }, function(e, t, n) {
        var a = n(30),
            i = n(1),
            o = a.has,
            r = a.key;
        a.exp({
            hasOwnMetadata: function(e, t) {
                return o(e, i(t), 3 > arguments.length ? void 0 : r(arguments[2]))
            }
        })
    }, function(e, t, n) {
        var a = n(30),
            i = n(1),
            o = n(11),
            r = a.key,
            l = a.set;
        a.exp({
            metadata: function(e, t) {
                return function(n, a) {
                    l(e, t, (a === void 0 ? o : i)(n), r(a))
                }
            }
        })
    }, function(e, t, n) {
        var a = n(0),
            i = n(96)(),
            o = n(2).process,
            r = 'process' == n(20)(o);
        a(a.G, {
            asap: function(e) {
                var t = r && o.domain;
                i(t ? t.bind(e) : e)
            }
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(0),
            i = n(2),
            o = n(23),
            r = n(96)(),
            l = n(5)('observable'),
            s = n(11),
            d = n(1),
            c = n(43),
            p = n(45),
            u = n(13),
            g = n(44),
            h = g.RETURN,
            f = function(e) {
                return null == e ? void 0 : s(e)
            },
            y = function(e) {
                var t = e._c;
                t && (e._c = void 0, t())
            },
            v = function(e) {
                return e._o === void 0
            },
            m = function(e) {
                v(e) || (e._o = void 0, y(e))
            },
            b = function(t, e) {
                d(t), this._c = void 0, this._o = t, t = new x(this);
                try {
                    var n = e(t),
                        a = n;
                    null != n && ('function' == typeof n.unsubscribe ? n = function() {
                        a.unsubscribe()
                    } : s(n), this._c = n)
                } catch (n) {
                    return void t.error(n)
                }
                v(this) && y(this)
            };
        b.prototype = p({}, {
            unsubscribe: function() {
                m(this)
            }
        });
        var x = function(e) {
            this._s = e
        };
        x.prototype = p({}, {
            next: function(e) {
                var t = this._s;
                if (!v(t)) {
                    var n = t._o;
                    try {
                        var a = f(n.next);
                        if (a) return a.call(n, e)
                    } catch (n) {
                        try {
                            m(t)
                        } finally {
                            throw n
                        }
                    }
                }
            },
            error: function(e) {
                var t = this._s;
                if (v(t)) throw e;
                var n = t._o;
                t._o = void 0;
                try {
                    var a = f(n.error);
                    if (!a) throw e;
                    e = a.call(n, e)
                } catch (n) {
                    try {
                        y(t)
                    } finally {
                        throw n
                    }
                }
                return y(t), e
            },
            complete: function(e) {
                var t = this._s;
                if (!v(t)) {
                    var n = t._o;
                    t._o = void 0;
                    try {
                        var a = f(n.complete);
                        e = a ? a.call(n, e) : void 0
                    } catch (n) {
                        try {
                            y(t)
                        } finally {
                            throw n
                        }
                    }
                    return y(t), e
                }
            }
        });
        var E = function(e) {
            c(this, E, 'Observable', '_f')._f = s(e)
        };
        p(E.prototype, {
            subscribe: function(e) {
                return new b(e, this._f)
            },
            forEach: function(e) {
                var t = this;
                return new(o.Promise || i.Promise)(function(n, a) {
                    s(e);
                    var i = t.subscribe({
                        next: function(t) {
                            try {
                                return e(t)
                            } catch (t) {
                                a(t), i.unsubscribe()
                            }
                        },
                        error: a,
                        complete: n
                    })
                })
            }
        }), p(E, {
            from: function(e) {
                var t = 'function' == typeof this ? this : E,
                    n = f(d(e)[l]);
                if (n) {
                    var a = d(n.call(e));
                    return a.constructor === t ? a : new t(function(e) {
                        return a.subscribe(e)
                    })
                }
                return new t(function(t) {
                    var n = !1;
                    return r(function() {
                            if (!n) {
                                try {
                                    if (g(e, !1, function(e) {
                                            if (t.next(e), n) return h
                                        }) === h) return
                                } catch (a) {
                                    if (n) throw a;
                                    return void t.error(a)
                                }
                                t.complete()
                            }
                        }),
                        function() {
                            n = !0
                        }
                })
            },
            of: function() {
                for (var e = 0, t = arguments.length, n = Array(t); e < t;) n[e] = arguments[e++];
                return new('function' == typeof this ? this : E)(function(e) {
                    var t = !1;
                    return r(function() {
                            if (!t) {
                                for (var a = 0; a < n.length; ++a)
                                    if (e.next(n[a]), t) return;
                                e.complete()
                            }
                        }),
                        function() {
                            t = !0
                        }
                })
            }
        }), u(E.prototype, l, function() {
            return this
        }), a(a.G, {
            Observable: E
        }), n(42)('Observable')
    }, function(e, t, n) {
        var a = n(2),
            i = n(0),
            o = n(59),
            r = n(346),
            l = a.navigator,
            s = !!l && /MSIE .\./.test(l.userAgent),
            d = function(e) {
                return s ? function(t, n) {
                    return e(o(r, [].slice.call(arguments, 2), 'function' == typeof t ? t : Function(t)), n)
                } : e
            };
        i(i.G + i.B + i.F * s, {
            setTimeout: d(a.setTimeout),
            setInterval: d(a.setInterval)
        })
    }, function(e, t, n) {
        'use strict';
        var a = n(347),
            i = n(59),
            o = n(11);
        e.exports = function() {
            for (var e = o(this), t = arguments.length, n = Array(t), r = 0, l = a._, s = !1; t > r;)(n[r] = arguments[r++]) === l && (s = !0);
            return function() {
                var a = this,
                    o = arguments.length,
                    r = 0,
                    d = 0,
                    c;
                if (!s && !o) return i(e, n, a);
                if (c = n.slice(), s)
                    for (; t > r; r++) c[r] === l && (c[r] = arguments[d++]);
                for (; o > d;) c.push(arguments[d++]);
                return i(e, c, a)
            }
        }
    }, function(e, t, n) {
        e.exports = n(2)
    }, function(e, t, n) {
        var a = n(0),
            i = n(95);
        a(a.G + a.B, {
            setImmediate: i.set,
            clearImmediate: i.clear
        })
    }, function(e, t, n) {
        for (var a = n(94), o = n(33), r = n(14), l = n(2), s = n(13), d = n(48), c = n(5), p = c('iterator'), u = c('toStringTag'), g = d.Array, h = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, m = o(h), f = 0; f < m.length; f++) {
            var i = m[f],
                y = h[i],
                v = l[i],
                b = v && v.prototype,
                x;
            if (b && (b[p] || s(b, p, g), b[u] || s(b, u, i), d[i] = g, y))
                for (x in a) b[x] || r(b, x, a[x], !0)
        }
    }, function(e, t, n) {
        (function(t) {
            ! function(t) {
                'use strict';

                function n(e, t, n, a) {
                    var o = t && t.prototype instanceof i ? t : i,
                        r = Object.create(o.prototype),
                        l = new g(a || []);
                    return r._invoke = d(e, n, l), r
                }

                function a(e, t, n) {
                    try {
                        return {
                            type: 'normal',
                            arg: e.call(t, n)
                        }
                    } catch (e) {
                        return {
                            type: 'throw',
                            arg: e
                        }
                    }
                }

                function i() {}

                function o() {}

                function r() {}

                function l(e) {
                    ['next', 'throw', 'return'].forEach(function(t) {
                        e[t] = function(e) {
                            return this._invoke(t, e)
                        }
                    })
                }

                function s(e) {
                    function n(t, i, o, r) {
                        var l = a(e[t], e, i);
                        if ('throw' === l.type) r(l.arg);
                        else {
                            var s = l.arg,
                                d = s.value;
                            return d && 'object' == typeof d && y.call(d, '__await') ? Promise.resolve(d.__await).then(function(e) {
                                n('next', e, o, r)
                            }, function(e) {
                                n('throw', e, o, r)
                            }) : Promise.resolve(d).then(function(e) {
                                s.value = e, o(s)
                            }, r)
                        }
                    }
                    'object' == typeof t.process && t.process.domain && (n = t.process.domain.bind(n));
                    var i;
                    this._invoke = function(e, t) {
                        function a() {
                            return new Promise(function(a, i) {
                                n(e, t, a, i)
                            })
                        }
                        return i = i ? i.then(a, a) : a()
                    }
                }

                function d(e, t, n) {
                    var i = S;
                    return function(o, r) {
                        if (i == w) throw new Error('Generator is already running');
                        if (i == T) {
                            if ('throw' === o) throw r;
                            return m()
                        }
                        for (n.method = o, n.arg = r;;) {
                            var l = n.delegate;
                            if (l) {
                                var s = c(l, n);
                                if (s) {
                                    if (s === C) continue;
                                    return s
                                }
                            }
                            if ('next' === n.method) n.sent = n._sent = n.arg;
                            else if ('throw' === n.method) {
                                if (i == S) throw i = T, n.arg;
                                n.dispatchException(n.arg)
                            } else 'return' === n.method && n.abrupt('return', n.arg);
                            i = w;
                            var d = a(e, t, n);
                            if ('normal' === d.type) {
                                if (i = n.done ? T : N, d.arg === C) continue;
                                return {
                                    value: d.arg,
                                    done: n.done
                                }
                            }
                            'throw' === d.type && (i = T, n.method = 'throw', n.arg = d.arg)
                        }
                    }
                }

                function c(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, 'throw' === t.method) {
                            if (e.iterator.return && (t.method = 'return', t.arg = void 0, c(e, t), 'throw' === t.method)) return C;
                            t.method = 'throw', t.arg = new TypeError('The iterator does not provide a \'throw\' method')
                        }
                        return C
                    }
                    var i = a(n, e.iterator, t.arg);
                    if ('throw' === i.type) return t.method = 'throw', t.arg = i.arg, t.delegate = null, C;
                    var o = i.arg;
                    if (!o) return t.method = 'throw', t.arg = new TypeError('iterator result is not an object'), t.delegate = null, C;
                    if (o.done) t[e.resultName] = o.value, t.next = e.nextLoc, 'return' !== t.method && (t.method = 'next', t.arg = void 0);
                    else return o;
                    return t.delegate = null, C
                }

                function p(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function u(e) {
                    var t = e.completion || {};
                    t.type = 'normal', delete t.arg, e.completion = t
                }

                function g(e) {
                    this.tryEntries = [{
                        tryLoc: 'root'
                    }], e.forEach(p, this), this.reset(!0)
                }

                function h(e) {
                    if (e) {
                        var t = e[b];
                        if (t) return t.call(e);
                        if ('function' == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                a = function t() {
                                    for (; ++n < e.length;)
                                        if (y.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: m
                    }
                }

                function m() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                var f = Object.prototype,
                    y = f.hasOwnProperty,
                    v = 'function' == typeof Symbol ? Symbol : {},
                    b = v.iterator || '@@iterator',
                    x = v.asyncIterator || '@@asyncIterator',
                    E = v.toStringTag || '@@toStringTag',
                    k = 'object' == typeof e,
                    _ = t.regeneratorRuntime;
                if (_) return void(k && (e.exports = _));
                _ = t.regeneratorRuntime = k ? e.exports : {}, _.wrap = n;
                var S = 'suspendedStart',
                    N = 'suspendedYield',
                    w = 'executing',
                    T = 'completed',
                    C = {},
                    R = {};
                R[b] = function() {
                    return this
                };
                var P = Object.getPrototypeOf,
                    O = P && P(P(h([])));
                O && O !== f && y.call(O, b) && (R = O);
                var A = r.prototype = i.prototype = Object.create(R);
                o.prototype = A.constructor = r, r.constructor = o, r[E] = o.displayName = 'GeneratorFunction', _.isGeneratorFunction = function(e) {
                    var t = 'function' == typeof e && e.constructor;
                    return !!t && (t === o || 'GeneratorFunction' === (t.displayName || t.name))
                }, _.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : (e.__proto__ = r, !(E in e) && (e[E] = 'GeneratorFunction')), e.prototype = Object.create(A), e
                }, _.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, l(s.prototype), s.prototype[x] = function() {
                    return this
                }, _.AsyncIterator = s, _.async = function(e, t, a, i) {
                    var o = new s(n(e, t, a, i));
                    return _.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                        return e.done ? e.value : o.next()
                    })
                }, l(A), A[E] = 'Generator', A[b] = function() {
                    return this
                }, A.toString = function() {
                    return '[object Generator]'
                }, _.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var a = t.pop();
                                if (a in e) return n.value = a, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, _.values = h, g.prototype = {
                    constructor: g,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = 'next', this.arg = void 0, this.tryEntries.forEach(u), !e)
                            for (var t in this) 't' === t.charAt(0) && y.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0],
                            t = e.completion;
                        if ('throw' === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        function t(t, a) {
                            return o.type = 'throw', o.arg = e, n.next = t, a && (n.method = 'next', n.arg = void 0), !!a
                        }
                        if (this.done) throw e;
                        for (var n = this, a = this.tryEntries.length - 1; 0 <= a; --a) {
                            var i = this.tryEntries[a],
                                o = i.completion;
                            if ('root' === i.tryLoc) return t('end');
                            if (i.tryLoc <= this.prev) {
                                var r = y.call(i, 'catchLoc'),
                                    l = y.call(i, 'finallyLoc');
                                if (r && l) {
                                    if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                                } else if (r) {
                                    if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
                                } else if (!l) throw new Error('try statement without catch or finally');
                                else if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1, a; 0 <= n; --n)
                            if (a = this.tryEntries[n], a.tryLoc <= this.prev && y.call(a, 'finallyLoc') && this.prev < a.finallyLoc) {
                                var i = a;
                                break
                            }
                        i && ('break' === e || 'continue' === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = e, o.arg = t, i ? (this.method = 'next', this.next = i.finallyLoc, C) : this.complete(o)
                    },
                    complete: function(e, t) {
                        if ('throw' === e.type) throw e.arg;
                        return 'break' === e.type || 'continue' === e.type ? this.next = e.arg : 'return' === e.type ? (this.rval = this.arg = e.arg, this.method = 'return', this.next = 'end') : 'normal' === e.type && t && (this.next = t), C
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1, n; 0 <= t; --t)
                            if (n = this.tryEntries[t], n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), u(n), C
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1, n; 0 <= t; --t)
                            if (n = this.tryEntries[t], n.tryLoc === e) {
                                var a = n.completion;
                                if ('throw' === a.type) {
                                    var i = a.arg;
                                    u(n)
                                }
                                return i
                            }
                        throw new Error('illegal catch attempt')
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: h(e),
                            resultName: t,
                            nextLoc: n
                        }, 'next' === this.method && (this.arg = void 0), C
                    }
                }
            }('object' == typeof t ? t : 'object' == typeof window ? window : 'object' == typeof self ? self : this)
        }).call(t, n(51))
    }, function(e, t, n) {
        n(352), e.exports = n(23).RegExp.escape
    }, function(e, t, n) {
        var a = n(0),
            i = n(353)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
        a(a.S, 'RegExp', {
            escape: function(e) {
                return i(e)
            }
        })
    }, function(e) {
        e.exports = function(e, t) {
            var n = t === Object(t) ? function(e) {
                return t[e]
            } : t;
            return function(t) {
                return (t + '').replace(e, n)
            }
        }
    }, function(e, t, n) {
        'use strict';
        (function(a) {
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function o(e, t) {
                return new l.default(e, t)
            }
            Object.defineProperty(t, '__esModule', {
                value: !0
            });
            var r = n(355),
                l = i(r),
                s = n(141),
                d = i(s),
                c = n(22),
                p = i(c),
                u = n(103),
                g = i(u),
                h = n(6),
                m = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(h),
                f = n(31);
            n(401);
            var y = n(143),
                v = i(y),
                b = n(104),
                x = i(b),
                E = n(147),
                k = i(E);
            o.VERSION = f.EPUBJS_VERSION, 'undefined' != typeof a && (a.EPUBJS_VERSION = f.EPUBJS_VERSION), o.Book = l.default, o.Rendition = d.default, o.Contents = g.default, o.CFI = p.default, o.utils = m, t.default = o, e.exports = t['default']
        }).call(t, n(51))
    }, function(e, t, n) {
        'use strict';

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            r = n(35),
            l = a(r),
            s = n(6),
            d = n(70),
            c = a(d),
            p = n(50),
            u = a(p),
            g = n(372),
            h = a(g),
            m = n(376),
            f = a(m),
            y = n(377),
            v = a(y),
            b = n(378),
            x = a(b),
            E = n(379),
            k = a(E),
            _ = n(380),
            S = a(_),
            N = n(381),
            w = a(N),
            T = n(141),
            C = a(T),
            R = n(399),
            P = a(R),
            O = n(101),
            A = a(O),
            I = n(22),
            L = a(I),
            D = n(31),
            M = 'META-INF/container.xml',
            B = {
                BINARY: 'binary',
                BASE64: 'base64',
                EPUB: 'epub',
                OPF: 'opf',
                MANIFEST: 'json',
                DIRECTORY: 'directory'
            },
            F = function() {
                function e(t, n) {
                    var a = this;
                    i(this, e), 'undefined' == typeof n && 'string' != typeof t && !1 == t instanceof Blob && (n = t, t = void 0), this.settings = (0, s.extend)(this.settings || {}, {
                        requestMethod: void 0,
                        requestCredentials: void 0,
                        requestHeaders: void 0,
                        encoding: void 0,
                        replacements: void 0,
                        canonical: void 0,
                        openAs: void 0
                    }), (0, s.extend)(this.settings, n), this.opening = new s.defer, this.opened = this.opening.promise, this.isOpen = !1, this.loading = {
                        manifest: new s.defer,
                        spine: new s.defer,
                        metadata: new s.defer,
                        cover: new s.defer,
                        navigation: new s.defer,
                        pageList: new s.defer,
                        resources: new s.defer
                    }, this.loaded = {
                        manifest: this.loading.manifest.promise,
                        spine: this.loading.spine.promise,
                        metadata: this.loading.metadata.promise,
                        cover: this.loading.cover.promise,
                        navigation: this.loading.navigation.promise,
                        pageList: this.loading.pageList.promise,
                        resources: this.loading.resources.promise
                    }, this.ready = Promise.all([this.loaded.manifest, this.loaded.spine, this.loaded.metadata, this.loaded.cover, this.loaded.navigation, this.loaded.resources]), this.isRendered = !1, this.request = this.settings.requestMethod || A.default, this.spine = new h.default, this.locations = new f.default(this.spine, this.load.bind(this)), this.navigation = void 0, this.pageList = void 0, this.url = void 0, this.path = void 0, this.archived = !1, this.archive = void 0, this.resources = void 0, this.rendition = void 0, this.container = void 0, this.packaging = void 0, t && this.open(t, this.settings.openAs).catch(function() {
                        var e = new Error('Cannot load book at ' + t);
                        a.emit(D.EVENTS.BOOK.OPEN_FAILED, e)
                    })
                }
                return o(e, [{
                    key: 'open',
                    value: function(e, t) {
                        var n = t || this.determineType(e),
                            a;
                        return n === B.BINARY ? (this.archived = !0, this.url = new c.default('/', ''), a = this.openEpub(e)) : n === B.BASE64 ? (this.archived = !0, this.url = new c.default('/', ''), a = this.openEpub(e, n)) : n === B.EPUB ? (this.archived = !0, this.url = new c.default('/', ''), a = this.request(e, 'binary', this.settings.requestCredentials).then(this.openEpub.bind(this))) : n == B.OPF ? (this.url = new c.default(e), a = this.openPackaging(this.url.Path.toString())) : n == B.MANIFEST ? (this.url = new c.default(e), a = this.openManifest(this.url.Path.toString())) : (this.url = new c.default(e), a = this.openContainer(M).then(this.openPackaging.bind(this))), a
                    }
                }, {
                    key: 'openEpub',
                    value: function(e, t) {
                        var n = this;
                        return this.unarchive(e, t || this.settings.encoding).then(function() {
                            return n.openContainer(M)
                        }).then(function(e) {
                            return n.openPackaging(e)
                        })
                    }
                }, {
                    key: 'openContainer',
                    value: function(e) {
                        var t = this;
                        return this.load(e).then(function(e) {
                            return t.container = new v.default(e), t.resolve(t.container.packagePath)
                        })
                    }
                }, {
                    key: 'openPackaging',
                    value: function(e) {
                        var t = this;
                        return this.path = new u.default(e), this.load(e).then(function(e) {
                            return t.packaging = new x.default(e), t.unpack(t.packaging)
                        })
                    }
                }, {
                    key: 'openManifest',
                    value: function(e) {
                        var t = this;
                        return this.path = new u.default(e), this.load(e).then(function(e) {
                            return t.packaging = new x.default, t.packaging.load(e), t.unpack(t.packaging)
                        })
                    }
                }, {
                    key: 'load',
                    value: function(e) {
                        var t;
                        return this.archived ? (t = this.resolve(e), this.archive.request(t)) : (t = this.resolve(e), this.request(t, null, this.settings.requestCredentials, this.settings.requestHeaders))
                    }
                }, {
                    key: 'resolve',
                    value: function(e, t) {
                        if (e) {
                            var n = e,
                                a = -1 < e.indexOf('://');
                            return a ? e : (this.path && (n = this.path.resolve(e)), !1 != t && this.url && (n = this.url.resolve(n)), n)
                        }
                    }
                }, {
                    key: 'canonical',
                    value: function(e) {
                        var t = e;
                        return e ? (t = this.settings.canonical ? this.settings.canonical(e) : this.resolve(e, !0), t) : ''
                    }
                }, {
                    key: 'determineType',
                    value: function(e) {
                        var t, n, a;
                        return 'base64' === this.settings.encoding ? B.BASE64 : 'string' == typeof e ? (t = new c.default(e), n = t.path(), a = n.extension, a ? 'epub' === a ? B.EPUB : 'opf' === a ? B.OPF : 'json' === a ? B.MANIFEST : void 0 : B.DIRECTORY) : B.BINARY
                    }
                }, {
                    key: 'unpack',
                    value: function(e) {
                        var t = this;
                        this.package = e, this.spine.unpack(this.package, this.resolve.bind(this), this.canonical.bind(this)), this.resources = new S.default(this.package.manifest, {
                            archive: this.archive,
                            resolver: this.resolve.bind(this),
                            request: this.request.bind(this),
                            replacements: this.settings.replacements || (this.archived ? 'blobUrl' : 'base64')
                        }), this.loadNavigation(this.package).then(function() {
                            t.loading.navigation.resolve(t.navigation)
                        }), this.package.coverPath && (this.cover = this.resolve(this.package.coverPath)), this.loading.manifest.resolve(this.package.manifest), this.loading.metadata.resolve(this.package.metadata), this.loading.spine.resolve(this.spine), this.loading.cover.resolve(this.cover), this.loading.resources.resolve(this.resources), this.loading.pageList.resolve(this.pageList), this.isOpen = !0, this.archived || this.settings.replacements && 'none' != this.settings.replacements ? this.replacements().then(function() {
                            t.opening.resolve(t)
                        }).catch(function(e) {
                            console.error(e)
                        }) : this.opening.resolve(this)
                    }
                }, {
                    key: 'loadNavigation',
                    value: function(e) {
                        var t = this,
                            n = e.navPath || e.ncxPath,
                            a = e.toc;
                        return a ? new Promise(function(n) {
                            t.navigation = new k.default(a), e.pageList && (t.pageList = new w.default(e.pageList)), n(t.navigation)
                        }) : n ? this.load(n, 'xml').then(function(e) {
                            return t.navigation = new k.default(e), t.pageList = new w.default(e), t.navigation
                        }) : new Promise(function(e) {
                            t.navigation = new k.default, t.pageList = new w.default, e(t.navigation)
                        })
                    }
                }, {
                    key: 'section',
                    value: function(e) {
                        return this.spine.get(e)
                    }
                }, {
                    key: 'renderTo',
                    value: function(e, t) {
                        return this.rendition = new C.default(this, t), this.rendition.attachTo(e), this.rendition
                    }
                }, {
                    key: 'setRequestCredentials',
                    value: function(e) {
                        this.settings.requestCredentials = e
                    }
                }, {
                    key: 'setRequestHeaders',
                    value: function(e) {
                        this.settings.requestHeaders = e
                    }
                }, {
                    key: 'unarchive',
                    value: function(e, t) {
                        return this.archive = new P.default, this.archive.open(e, t)
                    }
                }, {
                    key: 'coverUrl',
                    value: function() {
                        var e = this,
                            t = this.loaded.cover.then(function() {
                                return e.archived ? e.resources.get(e.cover) : e.cover
                            });
                        return t
                    }
                }, {
                    key: 'replacements',
                    value: function() {
                        var e = this;
                        return this.spine.hooks.serialize.register(function(t, n) {
                            n.output = e.resources.substitute(t, n.url)
                        }), this.resources.replacements().then(function() {
                            return e.resources.replaceCss()
                        })
                    }
                }, {
                    key: 'getRange',
                    value: function(e) {
                        var t = new L.default(e),
                            n = this.spine.get(t.spinePos),
                            a = this.load.bind(this);
                        return n ? n.load(a).then(function() {
                            var e = t.toRange(n.document);
                            return e
                        }) : new Promise(function(e, t) {
                            t('CFI could not be found')
                        })
                    }
                }, {
                    key: 'key',
                    value: function(e) {
                        var t = e || this.package.metadata.identifier || this.url.filename;
                        return 'epubjs:' + D.EPUBJS_VERSION + ':' + t
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        this.opened = void 0, this.loading = void 0, this.loaded = void 0, this.ready = void 0, this.isOpen = !1, this.isRendered = !1, this.spine && this.spine.destroy(), this.locations && this.locations.destroy(), this.pageList && this.pageList.destroy(), this.archive && this.archive.destroy(), this.resources && this.resources.destroy(), this.container && this.container.destroy(), this.packaging && this.packaging.destroy(), this.rendition && this.rendition.destroy(), this.spine = void 0, this.locations = void 0, this.pageList = void 0, this.archive = void 0, this.resources = void 0, this.container = void 0, this.packaging = void 0, this.rendition = void 0, this.navigation = void 0, this.url = void 0, this.path = void 0, this.archived = !1
                    }
                }]), e
            }();
        (0, l.default)(F.prototype), t.default = F, e.exports = t['default']
    }, function(e, t, n) {
        'use strict';
        var a = n(357),
            i = n(365),
            o = n(366),
            r = n(367),
            l;
        l = e.exports = function(t, n) {
            var o, l, s, d, p;
            return 2 > arguments.length || 'string' != typeof t ? (d = n, n = t, t = null) : d = arguments[2], null == t ? (o = s = !0, l = !1) : (o = r.call(t, 'c'), l = r.call(t, 'e'), s = r.call(t, 'w')), p = {
                value: n,
                configurable: o,
                enumerable: l,
                writable: s
            }, d ? a(i(d), p) : p
        }, l.gs = function(t, n, l) {
            var s, d, p, u;
            return 'string' == typeof t ? p = arguments[3] : (p = l, l = n, n = t, t = null), null == n ? n = void 0 : o(n) ? null == l ? l = void 0 : !o(l) && (p = l, l = void 0) : (p = n, n = l = void 0), null == t ? (s = !0, d = !1) : (s = r.call(t, 'c'), d = r.call(t, 'e')), u = {
                get: n,
                set: l,
                configurable: s,
                enumerable: d
            }, p ? a(i(p), u) : u
        }
    }, function(e, t, n) {
        'use strict';
        e.exports = n(358)() ? Object.assign : n(359)
    }, function(e) {
        'use strict';
        e.exports = function() {
            var e = Object.assign,
                t;
            return !('function' != typeof e) && (t = {
                foo: 'raz'
            }, e(t, {
                bar: 'dwa'
            }, {
                trzy: 'trzy'
            }), 'razdwatrzy' === t.foo + t.bar + t.trzy)
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(360),
            o = n(364);
        e.exports = function(e, t) {
            var n = m(arguments.length, 2),
                r, l, i;
            for (e = Object(o(e)), i = function(n) {
                    try {
                        e[n] = t[n]
                    } catch (t) {
                        r || (r = t)
                    }
                }, l = 1; l < n; ++l) t = arguments[l], a(t).forEach(i);
            if (r !== void 0) throw r;
            return e
        }
    }, function(e, t, n) {
        'use strict';
        e.exports = n(361)() ? Object.keys : n(362)
    }, function(e) {
        'use strict';
        e.exports = function() {
            try {
                return Object.keys('primitive'), !0
            } catch (t) {
                return !1
            }
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(99),
            i = Object.keys;
        e.exports = function(e) {
            return i(a(e) ? Object(e) : e)
        }
    }, function(e) {
        'use strict';
        e.exports = function() {}
    }, function(e, t, n) {
        'use strict';
        var a = n(99);
        e.exports = function(e) {
            if (!a(e)) throw new TypeError('Cannot use null or undefined');
            return e
        }
    }, function(e, t, n) {
        'use strict';
        var a = n(99),
            i = Array.prototype.forEach,
            o = Object.create,
            r = function(e, t) {
                for (var n in e) t[n] = e[n]
            };
        e.exports = function() {
            var e = o(null);
            return i.call(arguments, function(t) {
                a(t) && r(Object(t), e)
            }), e
        }
    }, function(e) {
        'use strict';
        e.exports = function(e) {
            return 'function' == typeof e
        }
    }, function(e, t, n) {
        'use strict';
        e.exports = n(368)() ? r.contains : n(369)
    }, function(e) {
        'use strict';
        var t = 'razdwatrzy';
        e.exports = function() {
            return !('function' != typeof t.contains) && !0 === t.contains('dwa') && !1 === t.contains('foo')
        }
    }, function(e) {
        'use strict';
        var t = r.indexOf;
        e.exports = function(e) {
            return -1 < t.call(this, e, arguments[1])
        }
    }, function(e) {
        'use strict';
        e.exports = function(e) {
            if ('function' != typeof e) throw new TypeError(e + ' is not a function');
            return e
        }
    }, function(t) {
        t.exports = e
    }, function(e, t, n) {
        'use strict';

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            r = n(22),
            l = a(r),
            s = n(100),
            d = a(s),
            c = n(373),
            p = a(c),
            u = n(72),
            g = function() {
                function e() {
                    i(this, e), this.spineItems = [], this.spineByHref = {}, this.spineById = {}, this.hooks = {}, this.hooks.serialize = new d.default, this.hooks.content = new d.default, this.hooks.content.register(u.replaceBase), this.hooks.content.register(u.replaceCanonical), this.hooks.content.register(u.replaceMeta), this.epubcfi = new l.default, this.loaded = !1, this.items = void 0, this.manifest = void 0, this.spineNodeIndex = void 0, this.baseUrl = void 0, this.length = void 0
                }
                return o(e, [{
                    key: 'unpack',
                    value: function(e, t, n) {
                        var a = this;
                        this.items = e.spine, this.manifest = e.manifest, this.spineNodeIndex = e.spineNodeIndex, this.baseUrl = e.baseUrl || e.basePath || '', this.length = this.items.length, this.items.forEach(function(e, i) {
                            var o = a.manifest[e.idref],
                                r;
                            e.index = i, e.cfiBase = a.epubcfi.generateChapterComponent(a.spineNodeIndex, e.index, e.idref), e.href && (e.url = t(e.href, !0), e.canonical = n(e.href)), o && (e.href = o.href, e.url = t(e.href, !0), e.canonical = n(e.href), o.properties.length && e.properties.push.apply(e.properties, o.properties)), 'yes' === e.linear ? (e.prev = function() {
                                for (var t = e.index, n; 0 < t;) {
                                    if (n = this.get(t - 1), n && n.linear) return n;
                                    t -= 1
                                }
                            }.bind(a), e.next = function() {
                                for (var t = e.index, n; t < this.spineItems.length - 1;) {
                                    if (n = this.get(t + 1), n && n.linear) return n;
                                    t += 1
                                }
                            }.bind(a)) : (e.prev = function() {}, e.next = function() {}), r = new p.default(e, a.hooks), a.append(r)
                        }), this.loaded = !0
                    }
                }, {
                    key: 'get',
                    value: function(e) {
                        var t = 0;
                        if ('undefined' == typeof e)
                            for (; t < this.spineItems.length;) {
                                var n = this.spineItems[t];
                                if (n && n.linear) break;
                                t += 1
                            } else if (this.epubcfi.isCfiString(e)) {
                                var a = new l.default(e);
                                t = a.spinePos
                            } else 'number' == typeof e || !1 === isNaN(e) ? t = e : 'string' == typeof e && 0 === e.indexOf('#') ? t = this.spineById[e.substring(1)] : 'string' == typeof e && (e = e.split('#')[0], t = this.spineByHref[e] || this.spineByHref[encodeURI(e)]);
                        return this.spineItems[t] || null
                    }
                }, {
                    key: 'append',
                    value: function(e) {
                        var t = this.spineItems.length;
                        return e.index = t, this.spineItems.push(e), this.spineByHref[decodeURI(e.href)] = t, this.spineByHref[encodeURI(e.href)] = t, this.spineByHref[e.href] = t, this.spineById[e.idref] = t, t
                    }
                }, {
                    key: 'prepend',
                    value: function(e) {
                        return this.spineByHref[e.href] = 0, this.spineById[e.idref] = 0, this.spineItems.forEach(function(e, t) {
                            e.index = t
                        }), 0
                    }
                }, {
                    key: 'remove',
                    value: function(e) {
                        var t = this.spineItems.indexOf(e);
                        if (-1 < t) return delete this.spineByHref[e.href], delete this.spineById[e.idref], this.spineItems.splice(t, 1)
                    }
                }, {
                    key: 'each',
                    value: function() {
                        return this.spineItems.forEach.apply(this.spineItems, arguments)
                    }
                }, {
                    key: 'first',
                    value: function() {
                        var e = 0;
                        do {
                            var t = this.get(e);
                            if (t && t.linear) return t;
                            e += 1
                        } while (e < this.spineItems.length)
                    }
                }, {
                    key: 'last',
                    value: function() {
                        var e = this.spineItems.length - 1;
                        do {
                            var t = this.get(e);
                            if (t && t.linear) return t;
                            e -= 1
                        } while (0 <= e)
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        this.each(function(e) {
                            return e.destroy()
                        }), this.spineItems = void 0, this.spineByHref = void 0, this.spineById = void 0, this.hooks.serialize.clear(), this.hooks.content.clear(), this.hooks = void 0, this.epubcfi = void 0, this.loaded = !1, this.items = void 0, this.manifest = void 0, this.spineNodeIndex = void 0, this.baseUrl = void 0, this.length = void 0
                    }
                }]), e
            }();
        t.default = g, e.exports = t['default']
    }, function(e, t, n) {
        'use strict';

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            r = n(6),
            l = n(22),
            s = a(l),
            d = n(100),
            c = a(d),
            p = n(72),
            u = function() {
                function e(t, n) {
                    i(this, e), this.idref = t.idref, this.linear = 'yes' === t.linear, this.properties = t.properties, this.index = t.index, this.href = t.href, this.url = t.url, this.canonical = t.canonical, this.next = t.next, this.prev = t.prev, this.cfiBase = t.cfiBase, n ? this.hooks = n : (this.hooks = {}, this.hooks.serialize = new c.default(this), this.hooks.content = new c.default(this)), this.document = void 0, this.contents = void 0, this.output = void 0
                }
                return o(e, [{
                    key: 'load',
                    value: function(e) {
                        var t = e || this.request || n(101),
                            a = new r.defer,
                            i = a.promise;
                        return this.contents ? a.resolve(this.contents) : t(this.url).then(function(e) {
                            return this.document = e, this.contents = e.documentElement, this.hooks.content.trigger(this.document, this)
                        }.bind(this)).then(function() {
                            a.resolve(this.contents)
                        }.bind(this)).catch(function(e) {
                            a.reject(e)
                        }), i
                    }
                }, {
                    key: 'base',
                    value: function() {
                        return (0, p.replaceBase)(this.document, this)
                    }
                }, {
                    key: 'render',
                    value: function(e) {
                        var t = new r.defer,
                            a = t.promise;
                        return this.output, this.load(e).then(function(e) {
                            var t = 'undefined' != typeof navigator && navigator.userAgent || '',
                                a = 0 <= t.indexOf('Trident'),
                                i;
                            i = 'undefined' == typeof XMLSerializer || a ? n(374).XMLSerializer : XMLSerializer;
                            var o = new i;
                            return this.output = o.serializeToString(e), this.output
                        }.bind(this)).then(function() {
                            return this.hooks.serialize.trigger(this.output, this)
                        }.bind(this)).then(function() {
                            t.resolve(this.output)
                        }.bind(this)).catch(function(e) {
                            t.reject(e)
                        }), a
                    }
                }, {
                    key: "isNodeInBody",
                    value: function(e) {
                        var t = e,
                            f = null,
                            s = null;
                        while (t.parentNode != null && t.nodeName.toLowerCase() !== 'html') {
                            f = t.parentNode;
                            s = t;
                            t = t.parentNode;
                        }
                        if (s.nodeName == "head" || s.nodeName == "HEAD") {
                            return false;
                        } else {
                            return true;
                        }
                    }
                }, {
                    key: 'find',
                    value: function(e) {
                        var t = this,
                            n = [],
                            a = e.toLowerCase(),
                            i = function(e) {
                                if (e.textContent.trim().length === 0) return;
                                if (!t.isNodeInBody(e)) {
                                    return;
                                }
                                if (e.parentNode.nodeName == "canvas" || e.parentNode.nodeName == "CANVAS" || e.parentNode.nodeName == "audio" || e.parentNode.nodeName == "AUDIO" || e.parentNode.nodeName == "video" || e.parentNode.nodeName == "VIDEO") {
                                    return;
                                }
                                for (var i = e.textContent.toLowerCase(), o = t.document.createRange(), r = -1, l = 150, s, d, c; - 1 != d;) d = i.indexOf(a, r + 1), -1 != d && (o = t.document.createRange(), o.setStart(e, d), o.setEnd(e, d + a.length), s = t.cfiFromRange(o), e.textContent.length < l ? c = e.textContent : (c = e.textContent.substring(d - l / 2, d + l / 2), c = '...' + c + '...'), n.push({
                                    cfi: s,
                                    excerpt: c
                                })), r = d
                            };
                        return (0, r.sprint)(t.document, function(e) {
                            i(e)
                        }), n
                    }
                }, {
                    key: 'reconcileLayoutSettings',
                    value: function(e) {
                        var t = {
                            layout: e.layout,
                            spread: e.spread,
                            orientation: e.orientation
                        };
                        return this.properties.forEach(function(e) {
                            var n = e.replace('rendition:', ''),
                                a = n.indexOf('-'),
                                i, o; - 1 != a && (i = n.slice(0, a), o = n.slice(a + 1), t[i] = o)
                        }), t
                    }
                }, {
                    key: 'cfiFromRange',
                    value: function(e) {
                        return new s.default(e, this.cfiBase).toString()
                    }
                }, {
                    key: 'cfiFromElement',
                    value: function(e) {
                        return new s.default(e, this.cfiBase).toString()
                    }
                }, {
                    key: 'unload',
                    value: function() {
                        this.document = void 0, this.contents = void 0, this.output = void 0
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        this.unload(), this.hooks.serialize.clear(), this.hooks.content.clear(), this.hooks = void 0, this.idref = void 0, this.linear = void 0, this.properties = void 0, this.index = void 0, this.href = void 0, this.url = void 0, this.next = void 0, this.prev = void 0, this.cfiBase = void 0
                    }
                }]), e
            }();
        t.default = u, e.exports = t['default']
    }, function(e, t, n) {
        function a(e) {
            this.options = e || {
                locator: {}
            }
        }

        function i(e, t, n) {
            function a(t) {
                var a = e[t];
                !a && r && (a = 2 == e.length ? function(n) {
                    e(t, n)
                } : e), i[t] = a && function(e) {
                    a('[xmldom ' + t + ']\t' + e + l(n))
                } || function() {}
            }
            if (!e) {
                if (t instanceof o) return t;
                e = t
            }
            var i = {},
                r = e instanceof Function;
            return n = n || {}, a('warning'), a('error'), a('fatalError'), i
        }

        function o() {
            this.cdata = !1
        }

        function r(e, t) {
            t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber
        }

        function l(e) {
            if (e) return '\n@' + (e.systemId || '') + '#[line:' + e.lineNumber + ',col:' + e.columnNumber + ']'
        }

        function s(e, t, n) {
            return 'string' == typeof e ? e.substr(t, n) : e.length >= t + n || t ? new java.lang.String(e, t, n) + '' : e
        }

        function d(e, t) {
            e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t)
        }
        a.prototype.parseFromString = function(e, t) {
            var n = this.options,
                a = new c,
                r = n.domBuilder || new o,
                l = n.errorHandler,
                s = n.locator,
                d = n.xmlns || {},
                p = {
                    lt: '<',
                    gt: '>',
                    amp: '&',
                    quot: '"',
                    apos: '\''
                };
            return s && r.setDocumentLocator(s), a.errorHandler = i(l, r, s), a.domBuilder = n.domBuilder || r, /\/x?html?$/.test(t) && (p.nbsp = '\xA0', p.copy = '\xA9', d[''] = 'http://www.w3.org/1999/xhtml'), d.xml = d.xml || 'http://www.w3.org/XML/1998/namespace', e ? a.parse(e, d, p) : a.errorHandler.error('invalid doc source'), r.doc
        }, o.prototype = {
            startDocument: function() {
                this.doc = new p().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId)
            },
            startElement: function(e, t, n, a) {
                var o = this.doc,
                    l = o.createElementNS(e, n || t),
                    s = a.length;
                d(this, l), this.currentElement = l, this.locator && r(this.locator, l);
                for (var c = 0; c < s; c++) {
                    var e = a.getURI(c),
                        i = a.getValue(c),
                        n = a.getQName(c),
                        p = o.createAttributeNS(e, n);
                    this.locator && r(a.getLocator(c), p), p.value = p.nodeValue = i, l.setAttributeNode(p)
                }
            },
            endElement: function() {
                var e = this.currentElement,
                    t = e.tagName;
                this.currentElement = e.parentNode
            },
            startPrefixMapping: function() {},
            endPrefixMapping: function() {},
            processingInstruction: function(e, t) {
                var n = this.doc.createProcessingInstruction(e, t);
                this.locator && r(this.locator, n), d(this, n)
            },
            ignorableWhitespace: function() {},
            characters: function(e) {
                if (e = s.apply(this, arguments), e) {
                    if (this.cdata) var t = this.doc.createCDATASection(e);
                    else var t = this.doc.createTextNode(e);
                    this.currentElement ? this.currentElement.appendChild(t) : /^\s*$/.test(e) && this.doc.appendChild(t), this.locator && r(this.locator, t)
                }
            },
            skippedEntity: function() {},
            endDocument: function() {
                this.doc.normalize()
            },
            setDocumentLocator: function(e) {
                (this.locator = e) && (e.lineNumber = 0)
            },
            comment: function(e) {
                e = s.apply(this, arguments);
                var t = this.doc.createComment(e);
                this.locator && r(this.locator, t), d(this, t)
            },
            startCDATA: function() {
                this.cdata = !0
            },
            endCDATA: function() {
                this.cdata = !1
            },
            startDTD: function(e, t, n) {
                var a = this.doc.implementation;
                if (a && a.createDocumentType) {
                    var i = a.createDocumentType(e, t, n);
                    this.locator && r(this.locator, i), d(this, i)
                }
            },
            warning: function(e) {
                console.warn('[xmldom warning]\t' + e, l(this.locator))
            },
            error: function(e) {
                console.error('[xmldom error]\t' + e, l(this.locator))
            },
            fatalError: function(e) {
                throw console.error('[xmldom fatalError]\t' + e, l(this.locator)), e
            }
        }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'.replace(/\w+/g, function(e) {
            o.prototype[e] = function() {
                return null
            }
        });
        var c = n(375).XMLReader,
            p = t.DOMImplementation = n(139).DOMImplementation;
        t.XMLSerializer = n(139).XMLSerializer, t.DOMParser = a
    }, function(e, t) {
        function n() {}

        function i(e, t, n, c, h) {
            function f(e) {
                if (65535 < e) {
                    e -= 65536;
                    var t = 55296 + (e >> 10),
                        n = 56320 + (1023 & e);
                    return a(t, n)
                }
                return a(e)
            }

            function y(e) {
                var t = e.slice(1, -1);
                return t in n ? n[t] : '#' === t.charAt(0) ? f(parseInt(t.substr(1).replace('x', '0x'))) : (h.error('entity not found:' + e), e)
            }

            function v(t) {
                if (t > w) {
                    var n = e.substring(w, t).replace(/&#?\w+;/g, y);
                    _ && b(w), c.characters(n, 0, t - w), w = t
                }
            }

            function b(t, n) {
                for (; t >= E && (n = k.exec(e));) x = n.index, E = x + n[0].length, _.lineNumber++;
                _.columnNumber = t - x + 1
            }
            for (var x = 0, E = 0, k = /.*(?:\r\n?|\n)|.*$/g, _ = c.locator, S = [{
                    currentNSMap: t
                }], N = {}, w = 0;;) {
                try {
                    var T = e.indexOf('<', w);
                    if (0 > T) {
                        if (!e.substr(w).match(/^\s*$/)) {
                            var C = c.doc,
                                R = C.createTextNode(e.substr(w));
                            C.appendChild(R), c.currentElement = R
                        }
                        return
                    }
                    switch (T > w && v(T), e.charAt(T + 1)) {
                        case '/':
                            var P = e.indexOf('>', T + 3),
                                O = e.substring(T + 2, P),
                                A = S.pop();
                            0 > P ? (O = e.substring(T + 2).replace(/[\s<].*/, ''), h.error('end tag name: ' + O + ' is not complete:' + A.tagName), P = T + 1 + O.length) : O.match(/\s</) && (O = O.replace(/[\s<].*/, ''), h.error('end tag name: ' + O + ' maybe not complete'), P = T + 1 + O.length);
                            var I = A.localNSMap,
                                L = A.tagName == O,
                                D = L || A.tagName && A.tagName.toLowerCase() == O.toLowerCase();
                            if (D) {
                                if (c.endElement(A.uri, A.localName, O), I)
                                    for (var M in I) c.endPrefixMapping(M);
                                L || h.fatalError('end tag name: ' + O + ' is not match the current start tagName:' + A.tagName)
                            } else S.push(A);
                            P++;
                            break;
                        case '?':
                            _ && b(T), P = u(e, T, c);
                            break;
                        case '!':
                            _ && b(T), P = p(e, T, c, h);
                            break;
                        default:
                            _ && b(T);
                            var B = new g,
                                F = S[S.length - 1].currentNSMap,
                                P = r(e, T, B, F, y, h),
                                z = B.length;
                            if (!B.closed && d(e, P, B.tagName, N) && (B.closed = !0, !n.nbsp && h.warning('unclosed xml attribute')), _ && z) {
                                for (var j = o(_, {}), q = 0, i; q < z; q++) i = B[q], b(i.offset), i.locator = o(_, {});
                                c.locator = j, l(B, c, F) && S.push(B), c.locator = _
                            } else l(B, c, F) && S.push(B);
                            'http://www.w3.org/1999/xhtml' !== B.uri || B.closed ? P++ : P = s(e, P, B.tagName, y, c);
                    }
                } catch (t) {
                    h.error('element parse error: ' + t), P = -1
                }
                P > w ? w = P : v(m(T, w) + 1)
            }
        }

        function o(e, n) {
            return n.lineNumber = e.lineNumber, n.columnNumber = e.columnNumber, n
        }

        function r(e, t, n, a, i, o) {
            for (var r = ++t, l = x, s, d;;) {
                var p = e.charAt(r);
                switch (p) {
                    case '=':
                        if (l == E) s = e.slice(t, r), l = _;
                        else if (l == k) l = _;
                        else throw new Error('attribute equal must after attrName');
                        break;
                    case '\'':
                    case '"':
                        if (l == _ || l == E) {
                            if (l == E && (o.warning('attribute value must after "="'), s = e.slice(t, r)), t = r + 1, r = e.indexOf(p, t), 0 < r) d = e.slice(t, r).replace(/&#?\w+;/g, i), n.add(s, d, t - 1), l = N;
                            else throw new Error('attribute value no end \'' + p + '\' match');
                        } else if (l == S) d = e.slice(t, r).replace(/&#?\w+;/g, i), n.add(s, d, t), o.warning('attribute "' + s + '" missed start quot(' + p + ')!!'), t = r + 1, l = N;
                        else throw new Error('attribute value must after "="');
                        break;
                    case '/':
                        switch (l) {
                            case x:
                                n.setTagName(e.slice(t, r));
                            case N:
                            case w:
                            case T:
                                l = T, n.closed = !0;
                            case S:
                            case E:
                            case k:
                                break;
                            default:
                                throw new Error('attribute invalid close char(\'/\')');
                        }
                        break;
                    case '':
                        return o.error('unexpected end of input'), l == x && n.setTagName(e.slice(t, r)), r;
                    case '>':
                        switch (l) {
                            case x:
                                n.setTagName(e.slice(t, r));
                            case N:
                            case w:
                            case T:
                                break;
                            case S:
                            case E:
                                d = e.slice(t, r), '/' === d.slice(-1) && (n.closed = !0, d = d.slice(0, -1));
                            case k:
                                l == k && (d = s), l == S ? (o.warning('attribute "' + d + '" missed quot(")!!'), n.add(s, d.replace(/&#?\w+;/g, i), t)) : (('http://www.w3.org/1999/xhtml' !== a[''] || !d.match(/^(?:disabled|checked|selected)$/i)) && o.warning('attribute "' + d + '" missed value!! "' + d + '" instead!!'), n.add(d, d, t));
                                break;
                            case _:
                                throw new Error('attribute value missed!!');
                        }
                        return r;
                    case '\x80':
                        p = ' ';
                    default:
                        if (' ' >= p) switch (l) {
                            case x:
                                n.setTagName(e.slice(t, r)), l = w;
                                break;
                            case E:
                                s = e.slice(t, r), l = k;
                                break;
                            case S:
                                var d = e.slice(t, r).replace(/&#?\w+;/g, i);
                                o.warning('attribute "' + d + '" missed quot(")!!'), n.add(s, d, t);
                            case N:
                                l = w;
                        } else switch (l) {
                            case k:
                                n.tagName;
                                'http://www.w3.org/1999/xhtml' === a[''] && s.match(/^(?:disabled|checked|selected)$/i) || o.warning('attribute "' + s + '" missed value!! "' + s + '" instead2!!'), n.add(s, s, t), t = r, l = E;
                                break;
                            case N:
                                o.warning('attribute space is required"' + s + '"!!');
                            case w:
                                l = E, t = r;
                                break;
                            case _:
                                l = S, t = r;
                                break;
                            case T:
                                throw new Error('elements closed character \'/\' and \'>\' must be connected to');
                        }
                }
                r++
            }
        }

        function l(e, t, n) {
            for (var o = e.tagName, r = null, l = e.length; l--;) {
                var i = e[l],
                    a = i.qName,
                    s = i.value,
                    d = a.indexOf(':');
                if (0 < d) var p = i.prefix = a.slice(0, d),
                    u = a.slice(d + 1),
                    g = 'xmlns' === p && u;
                else u = a, p = null, g = 'xmlns' === a && '';
                i.localName = u, !1 !== g && (null == r && (r = {}, c(n, n = {})), n[g] = r[g] = s, i.uri = 'http://www.w3.org/2000/xmlns/', t.startPrefixMapping(g, s))
            }
            for (var l = e.length; l--;) {
                i = e[l];
                var p = i.prefix;
                p && ('xml' === p && (i.uri = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== p && (i.uri = n[p || '']))
            }
            var d = o.indexOf(':');
            0 < d ? (p = e.prefix = o.slice(0, d), u = e.localName = o.slice(d + 1)) : (p = null, u = e.localName = o);
            var h = e.uri = n[p || ''];
            if (t.startElement(h, u, o, e), !e.closed) return e.currentNSMap = n, e.localNSMap = r, !0;
            if (t.endElement(h, u, o), r)
                for (p in r) t.endPrefixMapping(p)
        }

        function s(e, t, n, a, i) {
            if (/^(?:script|textarea)$/i.test(n)) {
                var o = e.indexOf('</' + n + '>', t),
                    r = e.substring(t + 1, o);
                if (/[&<]/.test(r)) return /^script$/i.test(n) ? (i.characters(r, 0, r.length), o) : (r = r.replace(/&#?\w+;/g, a), i.characters(r, 0, r.length), o)
            }
            return t + 1
        }

        function d(e, t, n, a) {
            var i = a[n];
            return null == i && (i = e.lastIndexOf('</' + n + '>'), i < t && (i = e.lastIndexOf('</' + n)), a[n] = i), i < t
        }

        function c(e, t) {
            for (var a in e) t[a] = e[a]
        }

        function p(e, t, n, a) {
            var i = e.charAt(t + 2);
            switch (i) {
                case '-':
                    if ('-' === e.charAt(t + 3)) {
                        var o = e.indexOf('-->', t + 4);
                        return o > t ? (n.comment(e, t + 4, o - t - 4), o + 3) : (a.error('Unclosed comment'), -1)
                    }
                    return -1;
                default:
                    if ('CDATA[' == e.substr(t + 3, 6)) {
                        var o = e.indexOf(']]>', t + 9);
                        return n.startCDATA(), n.characters(e, t + 9, o - t - 9), n.endCDATA(), o + 3
                    }
                    var r = f(e, t),
                        l = r.length;
                    if (1 < l && /!doctype/i.test(r[0][0])) {
                        var s = r[1][0],
                            d = 3 < l && /^public$/i.test(r[2][0]) && r[3][0],
                            c = 4 < l && r[4][0],
                            p = r[l - 1];
                        return n.startDTD(s, d && d.replace(/^(['"])(.*?)\1$/, '$2'), c && c.replace(/^(['"])(.*?)\1$/, '$2')), n.endDTD(), p.index + p[0].length
                    }
            }
            return -1
        }

        function u(e, t, n) {
            var a = e.indexOf('?>', t);
            if (a) {
                var i = e.substring(t, a).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
                if (i) {
                    i[0].length;
                    return n.processingInstruction(i[1], i[2]), a + 2
                }
                return -1
            }
            return -1
        }

        function g() {}

        function h(e, t) {
            return e.__proto__ = t, e
        }

        function f(e, t) {
            var n = [],
                a = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g,
                i;
            for (a.lastIndex = t, a.exec(e); i = a.exec(e);)
                if (n.push(i), i[1]) return n
        }
        var y = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
            v = new RegExp('[\\-\\.0-9' + y.source.slice(1, -1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
            b = new RegExp('^' + y.source + v.source + '*(?::' + y.source + v.source + '*)?$'),
            x = 0,
            E = 1,
            k = 2,
            _ = 3,
            S = 4,
            N = 5,
            w = 6,
            T = 7;
        n.prototype = {
            parse: function(e, t, n) {
                var a = this.domBuilder;
                a.startDocument(), c(t, t = {}), i(e, t, n, a, this.errorHandler), a.endDocument()
            }
        }, g.prototype = {
            setTagName: function(e) {
                if (!b.test(e)) throw new Error('invalid tagName:' + e);
                this.tagName = e
            },
            add: function(e, t, n) {
                if (!b.test(e)) throw new Error('invalid attribute:' + e);
                this[this.length++] = {
                    qName: e,
                    value: t,
                    offset: n
                }
            },
            length: 0,
            getLocalName: function(e) {
                return this[e].localName
            },
            getLocator: function(e) {
                return this[e].locator
            },
            getQName: function(e) {
                return this[e].qName
            },
            getURI: function(e) {
                return this[e].uri
            },
            getValue: function(e) {
                return this[e].value
            }
        }, h({}, h.prototype) instanceof h || (h = function(e, t) {
            function n() {}
            for (t in n.prototype = t, n = new n, e) n[t] = e[t];
            return n
        }), t.XMLReader = n
    }, function(e, t, n) {
        'use strict';

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            r = n(6),
            l = n(102),
            s = a(l),
            d = n(22),
            c = a(d),
            p = n(31),
            u = n(35),
            h = a(u),
            m = function() {
                function e(t, n, a) {
                    i(this, e), this.spine = t, this.request = n, this.pause = a || 100, this.q = new s.default(this), this.epubcfi = new c.default, this._locations = [], this.total = 0, this.break = 150, this._current = 0, this.currentLocation = '', this._currentCfi = '', this.processingTimeout = void 0
                }
                return o(e, [{
                    key: 'generate',
                    value: function(e) {
                        return e && (this.break = e), this.q.pause(), this.spine.each(function(e) {
                            e.linear && this.q.enqueue(this.process.bind(this), e)
                        }.bind(this)), this.q.run().then(function() {
                            return this.total = this._locations.length - 1, this._currentCfi && (this.currentLocation = this._currentCfi), this._locations
                        }.bind(this))
                    }
                }, {
                    key: 'createRange',
                    value: function() {
                        return {
                            startContainer: void 0,
                            startOffset: void 0,
                            endContainer: void 0,
                            endOffset: void 0
                        }
                    }
                }, {
                    key: 'process',
                    value: function(e) {
                        return e.load(this.request).then(function(t) {
                            var n = new r.defer,
                                a = this.parse(t, e.cfiBase);
                            return this._locations = this._locations.concat(a), e.unload(), this.processingTimeout = setTimeout(function() {
                                return n.resolve(a)
                            }, this.pause), n.promise
                        }.bind(this))
                    }
                }, {
                    key: 'parse',
                    value: function(e, t, n) {
                        var a = [],
                            i = e.ownerDocument,
                            o = (0, r.qs)(i, 'body'),
                            l = 0,
                            s = n || this.break,
                            d, p;
                        if ((0, r.sprint)(o, function(e) {
                                var n = e.length,
                                    i = 0,
                                    o;
                                if (0 === e.textContent.trim().length) return !1;
                                for (0 == l && (d = this.createRange(), d.startContainer = e, d.startOffset = 0), o = s - l, o > n && (l += n, i = n); i < n;)
                                    if (o = s - l, 0 === l && (i += 1, d = this.createRange(), d.startContainer = e, d.startOffset = i), i + o >= n) l += n - i, i = n;
                                    else {
                                        i += o, d.endContainer = e, d.endOffset = i;
                                        var r = new c.default(d, t).toString();
                                        a.push(r), l = 0
                                    }
                                p = e
                            }.bind(this)), d && d.startContainer && p) {
                            d.endContainer = p, d.endOffset = p.length;
                            var u = new c.default(d, t).toString();
                            a.push(u), l = 0
                        }
                        return a
                    }
                }, {
                    key: 'locationFromCfi',
                    value: function(e) {
                        var t;
                        return (c.default.prototype.isCfiString(e) && (e = new c.default(e)), 0 === this._locations.length) ? -1 : (t = (0, r.locationOf)(e, this._locations, this.epubcfi.compare), t > this.total ? this.total : t)
                    }
                }, {
                    key: 'percentageFromCfi',
                    value: function(e) {
                        if (0 === this._locations.length) return null;
                        var t = this.locationFromCfi(e);
                        return this.percentageFromLocation(t)
                    }
                }, {
                    key: 'percentageFromLocation',
                    value: function(e) {
                        return e && this.total ? e / this.total : 0
                    }
                }, {
                    key: 'cfiFromLocation',
                    value: function(e) {
                        var t = -1;
                        return 'number' != typeof e && (e = parseInt(e)), 0 <= e && e < this._locations.length && (t = this._locations[e]), t
                    }
                }, {
                    key: 'cfiFromPercentage',
                    value: function(e) {
                        var t;
                        if (1 < e && console.warn('Normalize cfiFromPercentage value to between 0 - 1'), 1 <= e) {
                            var n = new c.default(this._locations[this.total]);
                            return n.collapse(), n.toString()
                        }
                        return t = g(this.total * e), this.cfiFromLocation(t)
                    }
                }, {
                    key: 'load',
                    value: function(e) {
                        return this._locations = 'string' == typeof e ? JSON.parse(e) : e, this.total = this._locations.length - 1, this._locations
                    }
                }, {
                    key: 'save',
                    value: function() {
                        return JSON.stringify(this._locations)
                    }
                }, {
                    key: 'getCurrent',
                    value: function() {
                        return this._current
                    }
                }, {
                    key: 'setCurrent',
                    value: function(e) {
                        var t;
                        if ('string' == typeof e) this._currentCfi = e;
                        else if ('number' == typeof e) this._current = e;
                        else return;
                        0 === this._locations.length || ('string' == typeof e ? (t = this.locationFromCfi(e), this._current = t) : t = e, this.emit(p.EVENTS.LOCATIONS.CHANGED, {
                            percentage: this.percentageFromLocation(t)
                        }))
                    }
                }, {
                    key: 'length',
                    value: function() {
                        return this._locations.length
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        this.spine = void 0, this.request = void 0, this.pause = void 0, this.q.stop(), this.q = void 0, this.epubcfi = void 0, this._locations = void 0, this.total = void 0, this.break = void 0, this._current = void 0, this.currentLocation = void 0, this._currentCfi = void 0, clearTimeout(this.processingTimeout)
                    }
                }, {
                    key: 'currentLocation',
                    get: function() {
                        return this._current
                    },
                    set: function(e) {
                        this.setCurrent(e)
                    }
                }]), e
            }();
        (0, h.default)(m.prototype), t.default = m, e.exports = t['default']
    }, function(e, t, n) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            o = n(71),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o),
            l = n(6),
            s = function() {
                function e(t) {
                    a(this, e), this.packagePath = '', this.directory = '', this.encoding = '', t && this.parse(t)
                }
                return i(e, [{
                    key: 'parse',
                    value: function(e) {
                        var t;
                        if (!e) throw new Error('Container File Not Found');
                        if (t = (0, l.qs)(e, 'rootfile'), !t) throw new Error('No RootFile Found');
                        this.packagePath = t.getAttribute('full-path'), this.directory = r.default.dirname(this.packagePath), this.encoding = e.xmlEncoding
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        this.packagePath = void 0, this.directory = void 0, this.encoding = void 0
                    }
                }]), e
            }();
        t.default = s, e.exports = t['default']
    }, function(e, t, n) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            o = n(6),
            r = function() {
                function e(t) {
                    a(this, e), this.manifest = {}, this.navPath = '', this.ncxPath = '', this.coverPath = '', this.spineNodeIndex = 0, this.spine = [], this.metadata = {}, t && this.parse(t)
                }
                return i(e, [{
                    key: 'parse',
                    value: function(e) {
                        var t, n, a;
                        if (!e) throw new Error('Package File Not Found');
                        if (t = (0, o.qs)(e, 'metadata'), !t) throw new Error('No Metadata Found');
                        if (n = (0, o.qs)(e, 'manifest'), !n) throw new Error('No Manifest Found');
                        if (a = (0, o.qs)(e, 'spine'), !a) throw new Error('No Spine Found');
                        return this.manifest = this.parseManifest(n), this.navPath = this.findNavPath(n), this.ncxPath = this.findNcxPath(n, a), this.coverPath = this.findCoverPath(e), this.spineNodeIndex = (0, o.indexOfElementNode)(a), this.spine = this.parseSpine(a, this.manifest), this.uniqueIdentifier = this.findUniqueIdentifier(e), this.metadata = this.parseMetadata(t), this.metadata.direction = a.getAttribute('page-progression-direction'), {
                            metadata: this.metadata,
                            spine: this.spine,
                            manifest: this.manifest,
                            navPath: this.navPath,
                            ncxPath: this.ncxPath,
                            coverPath: this.coverPath,
                            spineNodeIndex: this.spineNodeIndex
                        }
                    }
                }, {
                    key: 'parseMetadata',
                    value: function(e) {
                        var t = {
                            title: this.getElementText(e, 'title'),
                            creator: this.getElementText(e, 'creator'),
                            description: this.getElementText(e, 'description'),
                            generator:e.querySelector("[name=generator]").getAttribute("content"),
                            pubdate: this.getElementText(e, 'date'),
                            publisher: this.getElementText(e, 'publisher'),
                            identifier: this.getElementText(e, 'identifier'),
                            language: this.getElementText(e, 'language'),
                            rights: this.getElementText(e, 'rights'),
                            modified_date: this.getPropertyText(e, 'dcterms:modified'),
                            layout: this.getPropertyText(e, 'rendition:layout'),
                            orientation: this.getPropertyText(e, 'rendition:orientation'),
                            flow: this.getPropertyText(e, 'rendition:flow'),
                            viewport: this.getPropertyText(e, 'rendition:viewport'),
                            media_active_class: this.getPropertyText(e, 'media:active-class'),
                            spread: this.getPropertyText(e, 'rendition:spread')
                        };
                        return t
                    }
                }, {
                    key: 'parseManifest',
                    value: function(e) {
                        var t = {},
                            n = (0, o.qsa)(e, 'item'),
                            a = Array.prototype.slice.call(n);
                        return a.forEach(function(e) {
                            var n = e.getAttribute('id'),
                                a = e.getAttribute('href') || '',
                                i = e.getAttribute('media-type') || '',
                                o = e.getAttribute('media-overlay') || '',
                                r = e.getAttribute('properties') || '';
                            t[n] = {
                                href: a,
                                type: i,
                                overlay: o,
                                properties: r.length ? r.split(' ') : []
                            }
                        }), t
                    }
                }, {
                    key: 'parseSpine',
                    value: function(e) {
                        var t = [],
                            n = (0, o.qsa)(e, 'itemref'),
                            a = Array.prototype.slice.call(n);
                        return a.forEach(function(e, n) {
                            var a = e.getAttribute('idref'),
                                i = e.getAttribute('properties') || '',
                                o = i.length ? i.split(' ') : [],
                                r = {
                                    idref: a,
                                    linear: e.getAttribute('linear') || 'yes',
                                    properties: o,
                                    index: n
                                };
                            t.push(r)
                        }), t
                    }
                }, {
                    key: 'findUniqueIdentifier',
                    value: function(e) {
                        var t = e.documentElement.getAttribute('unique-identifier');
                        if (!t) return '';
                        var n = e.getElementById(t);
                        return n ? 'identifier' === n.localName && 'http://purl.org/dc/elements/1.1/' === n.namespaceURI ? n.childNodes[0].nodeValue.trim() : '' : ''
                    }
                }, {
                    key: 'findNavPath',
                    value: function(e) {
                        var t = (0, o.qsp)(e, 'item', {
                            properties: 'nav'
                        });
                        return !!t && t.getAttribute('href')
                    }
                }, {
                    key: 'findNcxPath',
                    value: function(e, t) {
                        var n = (0, o.qsp)(e, 'item', {
                                "media-type": 'application/x-dtbncx+xml'
                            }),
                            a;
                        return n || (a = t.getAttribute('toc'), a && (n = e.querySelector('#' + a))), !!n && n.getAttribute('href')
                    }
                }, {
                    key: 'findCoverPath',
                    value: function(e) {
                        var t = (0, o.qs)(e, 'package'),
                            n = t.getAttribute('version');
                        if ('2.0' === n) {
                            var a = (0, o.qsp)(e, 'meta', {
                                name: 'cover'
                            });
                            if (a) {
                                var i = a.getAttribute('content'),
                                    r = e.getElementById(i);
                                return r ? r.getAttribute('href') : ''
                            }
                            return !1
                        }
                        var l = (0, o.qsp)(e, 'item', {
                            properties: 'cover-image'
                        });
                        return l ? l.getAttribute('href') : ''
                    }
                }, {
                    key: 'getElementText',
                    value: function(e, t) {
                        var n = e.getElementsByTagNameNS('http://purl.org/dc/elements/1.1/', t),
                            a;
                        return n && 0 !== n.length ? (a = n[0], a.childNodes.length ? a.childNodes[0].nodeValue : '') : ''
                    }
                }, {
                    key: 'getPropertyText',
                    value: function(e, t) {
                        var n = (0, o.qsp)(e, 'meta', {
                            property: t
                        });
                        return n && n.childNodes.length ? n.childNodes[0].nodeValue : ''
                    }
                }, {
                    key: 'load',
                    value: function(e) {
                        var t = this;
                        this.metadata = e.metadata;
                        var n = e.readingOrder || e.spine;
                        return this.spine = n.map(function(e, t) {
                            return e.index = t, e
                        }), e.resources.forEach(function(e, n) {
                            t.manifest[n] = e, e.rel && 'cover' === e.rel[0] && (t.coverPath = e.href)
                        }), this.spineNodeIndex = 0, this.toc = e.toc.map(function(e) {
                            return e.label = e.title, e
                        }), {
                            metadata: this.metadata,
                            spine: this.spine,
                            manifest: this.manifest,
                            navPath: this.navPath,
                            ncxPath: this.ncxPath,
                            coverPath: this.coverPath,
                            spineNodeIndex: this.spineNodeIndex,
                            toc: this.toc
                        }
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        this.manifest = void 0, this.navPath = void 0, this.ncxPath = void 0, this.coverPath = void 0, this.spineNodeIndex = void 0, this.spine = void 0, this.metadata = void 0
                    }
                }]), e
            }();
        t.default = r, e.exports = t['default']
    }, function(e, t, n) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            o = n(6),
            r = function() {
                function e(t) {
                    a(this, e), this.toc = [], this.tocByHref = {}, this.tocById = {}, this.pagelists=[],this.landmarks = [], this.landmarksByType = {}, this.length = 0;
                    if(t){ t=change_toc(t);this.parse(t);}
                }
                return i(e, [{
                    key: 'parse',
                    value: function(e) {
                        var t = e.nodeType,
                            n, a;
                        t && (n = (0, o.qs)(e, 'html'), a = (0, o.qs)(e, 'ncx')), t ? n ? (this.toc = this.parseNav(e), this.landmarks = this.parseLandmarks(e)) : a && (this.toc = this.parseNcx(e)) : this.toc = this.load(e), this.length = 0, this.unpack(this.toc)
                    }
                }, {
                    key: 'unpack',
                    value: function(e) {
                        for (var t = 0, n; t < e.length; t++) n = e[t], n.href && (this.tocByHref[n.href] = t), n.id && (this.tocById[n.id] = t), this.length++, n.subitems.length && this.unpack(n.subitems)
                    }
                }, {
                    key: 'get',
                    value: function(e) {
                        var t;
                        return e ? (0 === e.indexOf('#') ? t = this.tocById[e.substring(1)] : e in this.tocByHref && (t = this.tocByHref[e]), this.toc[t]) : this.toc
                    }
                }, {
                    key: 'landmark',
                    value: function(e) {
                        var t;
                        return e ? (t = this.landmarksByType[e], this.landmarks[t]) : this.landmarks
                    }
                }, {
                    key: 'parseNav',
                    value: function(e) {
                        var t = (0, o.querySelectorByType)(e, 'nav', 'toc'),
                            n = t ? (0, o.qsa)(t, 'li') : [],
                            a = n.length,
                            r = {},
                            l = [],
                            s, i, d;
                        if (!n || 0 === a) return l;
                        for (s = 0; s < a; ++s) i = this.navItem(n[s]), i && (r[i.id] = i, i.parent ? (d = r[i.parent], d.subitems.push(i)) : l.push(i));
                        return l
                    }
                }, {
                    key: 'navItem',
                    value: function(e) {
                        var t = e.getAttribute('id') || void 0,
                            n = (0, o.filterChildren)(e, 'a', !0);
                        if (n) {
                            var a = n.getAttribute('href') || '';
                            t || (t = a);
                            var i = n.textContent || '',
                                r = (0, o.getParentByTagName)(e, 'li'),
                                l;
                            if (r && (l = r.getAttribute('id'), !l)) {
                                var s = (0, o.filterChildren)(r, 'a', !0);
                                l = s && s.getAttribute('href')
                            }
                            for (; !l && r;)
                                if (r = (0, o.getParentByTagName)(r, 'li'), r && (l = r.getAttribute('id'), !l)) {
                                    var d = (0, o.filterChildren)(r, 'a', !0);
                                    l = d && d.getAttribute('href')
                                }
                            return {
                                id: t,
                                href: a,
                                label: i,
                                subitems: [],
                                parent: l
                            }
                        }
                    }
                }, {
                    /*amend by jane -->*/
                    key:'parsePageLists',
                    value:function(e){
                        var t=(0, o.querySelectorByType)(e, 'nav', 'page-list'),
                                n=t?(0, o.qsa)(t, 'li') : [],
                                a=n.length,
                                r=[],
                                l,i;
                        if(!n||0===a) return r;
                        for(l=0;l<a;++l)i=this.pageListItem(n[l]), i && r.push(i);
                        return r
                    }
                },{
                    key:'pageListItem',
                    value:function(e){
                        var t = e.getAttribute('id') || void 0,
                                 n=(0, o.filterChildren)(e,'a',!0);
                         if(n){
                             var a = n.getAttribute('href') || '',
                                     i = n.textContent || '';
                             t || (t = a);
                             return {
                                 id:t,href:a,label:i
                             }
                         }
                    }
                    /*<--amend by jane*/
                },{
                    key: 'parseLandmarks',
                    value: function(e) {
                        var t = (0, o.querySelectorByType)(e, 'nav', 'landmarks'),
                            n = t ? (0, o.qsa)(t, 'li') : [],
                            a = n.length,
                            r = [],
                            l, i;
                        if (!n || 0 === a) return r;
                        for (l = 0; l < a; ++l) i = this.landmarkItem(n[l]), i && (r.push(i), this.landmarksByType[i.type] = l);
                        return r
                    }
                }, {
                    key: 'landmarkItem',
                    value: function(e) {
                        var t = (0, o.filterChildren)(e, 'a', !0);
                        if (t) {
                            var n = t.getAttributeNS('http://www.idpf.org/2007/ops', 'type') || void 0,
                                a = t.getAttribute('href') || '',
                                i = t.textContent || '';
                            return {
                                href: a,
                                label: i,
                                type: n
                            }
                        }
                    }
                }, {
                    key: 'parseNcx',
                    value: function(e) {
                        var t = (0, o.qsa)(e, 'navPoint'),
                            n = t.length,
                            a = {},
                            r = [],
                            l, i, s;
                        if (!t || 0 === n) return r;
                        for (l = 0; l < n; ++l) i = this.ncxItem(t[l]), a[i.id] = i, i.parent ? (s = a[i.parent], s.subitems.push(i)) : r.push(i);
                        return r
                    }
                }, {
                    key: 'ncxItem',
                    value: function(e) {
                        var t = e.getAttribute('id') || !1,
                            n = (0, o.qs)(e, 'content'),
                            a = n.getAttribute('src'),
                            i = (0, o.qs)(e, 'navLabel'),
                            r = i.textContent ? i.textContent : '',
                            l = e.parentNode,
                            s;
                        return l && 'navPoint' === l.nodeName && (s = l.getAttribute('id')), {
                            id: t,
                            href: a,
                            label: r,
                            subitems: [],
                            parent: s
                        }
                    }
                }, {
                    key: 'load',
                    value: function(e) {
                        var t = this;
                        return e.map(function(e) {
                            return e.label = e.title, e.subitems = e.children ? t.load(e.children) : [], e
                        })
                    }
                }, {
                    key: 'forEach',
                    value: function(e) {
                        return this.toc.forEach(e)
                    }
                }]), e
            }();
        t.default = r, e.exports = t['default']
    }, function(e, t, n) {
        'use strict';

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            r = n(72),
            l = n(6),
            s = n(70),
            d = a(s),
            c = n(140),
            p = a(c),
            u = n(50),
            g = a(u),
            h = n(71),
            m = a(h),
            f = function() {
                function e(t, n) {
                    i(this, e), this.settings = {
                        replacements: n && n.replacements || 'base64',
                        archive: n && n.archive,
                        resolver: n && n.resolver,
                        request: n && n.request
                    }, this.manifest = t, this.resources = Object.keys(t).map(function(e) {
                        return t[e]
                    }), this.replacementUrls = [], this.html = [], this.assets = [], this.css = [], this.urls = [], this.cssUrls = [], this.split(), this.splitUrls()
                }
                return o(e, [{
                    key: 'split',
                    value: function() {
                        this.html = this.resources.filter(function(e) {
                            if ('application/xhtml+xml' === e.type || 'text/html' === e.type) return !0
                        }), this.assets = this.resources.filter(function(e) {
                            if ('application/xhtml+xml' !== e.type && 'text/html' !== e.type) return !0
                        }), this.css = this.resources.filter(function(e) {
                            if ('text/css' === e.type) return !0
                        })
                    }
                }, {
                    key: 'splitUrls',
                    value: function() {
                        this.urls = this.assets.map(function(e) {
                            return e.href
                        }.bind(this)), this.cssUrls = this.css.map(function(e) {
                            return e.href
                        })
                    }
                }, {
                    key: 'createUrl',
                    value: function(e) {
                        var t = new d.default(e),
                            n = p.default.lookup(t.filename);
                        return this.settings.archive ? this.settings.archive.createUrl(e, {
                            base64: 'base64' === this.settings.replacements
                        }) : 'base64' === this.settings.replacements ? this.settings.request(e, 'blob').then(function(e) {
                            return (0, l.blob2base64)(e)
                        }).then(function(e) {
                            return (0, l.createBase64Url)(e, n)
                        }) : this.settings.request(e, 'blob').then(function(e) {
                            return (0, l.createBlobUrl)(e, n)
                        })
                    }
                }, {
                    key: 'replacements',
                    value: function() {
                        var e = this;
                        if ('none' === this.settings.replacements) return new Promise(function(e) {
                            e(this.urls)
                        }.bind(this));
                        var t = this.urls.map(function(t) {
                            var n = e.settings.resolver(t);
                            return e.createUrl(n).catch(function(e) {
                                return console.error(e), null
                            })
                        });
                        return Promise.all(t).then(function(t) {
                            return e.replacementUrls = t.filter(function(e) {
                                return 'string' == typeof e
                            }), t
                        })
                    }
                }, {
                    key: 'replaceCss',
                    value: function(e, t) {
                        var n = [];
                        return e = e || this.settings.archive, t = t || this.settings.resolver, this.cssUrls.forEach(function(a) {
                            var i = this.createCssFile(a, e, t).then(function(e) {
                                var t = this.urls.indexOf(a); - 1 < t && (this.replacementUrls[t] = e)
                            }.bind(this));
                            n.push(i)
                        }.bind(this)), Promise.all(n)
                    }
                }, {
                    key: 'createCssFile',
                    value: function(e) {
                        var t = this,
                            n;
                        if (m.default.isAbsolute(e)) return new Promise(function(e) {
                            e()
                        });
                        var a = this.settings.resolver(e),
                            i;
                        i = this.settings.archive ? this.settings.archive.getText(a) : this.settings.request(a, 'text');
                        var o = this.urls.map(function(e) {
                            var n = t.settings.resolver(e),
                                i = new g.default(a).relative(n);
                            return i
                        });
                        return i ? i.then(function(e) {
                            return e = (0, r.substitute)(e, o, t.replacementUrls), n = 'base64' === t.settings.replacements ? (0, l.createBase64Url)(e, 'text/css') : (0, l.createBlobUrl)(e, 'text/css'), n
                        }, function() {
                            return new Promise(function(e) {
                                e()
                            })
                        }) : new Promise(function(e) {
                            e()
                        })
                    }
                }, {
                    key: 'relativeTo',
                    value: function(e, t) {
                        return t = t || this.settings.resolver, this.urls.map(function(n) {
                            var a = t(n),
                                i = new g.default(e).relative(a);
                            return i
                        }.bind(this))
                    }
                }, {
                    key: 'get',
                    value: function(e) {
                        var t = (!e) ? -1 : this.urls.indexOf(e.replace('/OEBPS/', "")); /*var t=this.urls.indexOf(e);*/
                        return -1 === t ? void 0 : this.replacementUrls.length ? new Promise(function(e) {
                            e(this.replacementUrls[t])
                        }.bind(this)) : this.createUrl(e)
                    }
                }, {
                    key: 'substitute',
                    value: function(e, t) {
                        var n;
                        return n = t ? this.relativeTo(t) : this.urls, (0, r.substitute)(e, n, this.replacementUrls)
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        this.settings = void 0, this.manifest = void 0, this.resources = void 0, this.replacementUrls = void 0, this.html = void 0, this.assets = void 0, this.css = void 0, this.urls = void 0, this.cssUrls = void 0
                    }
                }]), e
            }();
        t.default = f, e.exports = t['default']
    }, function(e, t, n) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            o = n(22),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(o),
            l = n(6),
            s = function() {
                function e(t) {
                    a(this, e), this.pages = [], this.locations = [], this.epubcfi = new r.default, this.firstPage = 0, this.lastPage = 0, this.totalPages = 0, this.toc = void 0, this.ncx = void 0, t && (this.pageList = this.parse(t)), this.pageList && this.pageList.length && this.process(this.pageList)
                }
                return i(e, [{
                    key: 'parse',
                    value: function(e) {
                        var t = (0, l.qs)(e, 'html'),
                            n = (0, l.qs)(e, 'ncx');
                        return t ? this.parseNav(e) : void n
                    }
                }, {
                    key: 'parseNav',
                    value: function(e) {
                        var t = (0, l.querySelectorByType)(e, 'nav', 'page-list'),
                            n = t ? (0, l.qsa)(t, 'li') : [],
                            a = n.length,
                            o = [],
                            r, i;
                        if (!n || 0 === a) return o;
                        for (r = 0; r < a; ++r) i = this.item(n[r]), o.push(i);
                        return o
                    }
                }, {
                    key: 'item',
                    value: function(e) {
                        var t = (0, l.qs)(e, 'a'),
                            n = t.getAttribute('href') || '',
                            a = t.textContent || '',
                            i = parseInt(a),
                            o = n.indexOf('epubcfi'),
                            r, s, d;
                        return -1 == o ? {
                            href: n,
                            page: i
                        } : (r = n.split('#'), s = r[0], d = !!(1 < r.length) && r[1], {
                            cfi: d,
                            href: n,
                            packageUrl: s,
                            page: i
                        })
                    }
                }, {
                    key: 'process',
                    value: function(e) {
                        e.forEach(function(e) {
                            this.pages.push(e.page), e.cfi && this.locations.push(e.cfi)
                        }, this), this.firstPage = parseInt(this.pages[0]), this.lastPage = parseInt(this.pages[this.pages.length - 1]), this.totalPages = this.lastPage - this.firstPage
                    }
                }, {
                    key: 'pageFromCfi',
                    value: function(e) {
                        var t = -1;
                        if (0 === this.locations.length) return -1;
                        var n = (0, l.indexOfSorted)(e, this.locations, this.epubcfi.compare);
                        return -1 == n ? (n = (0, l.locationOf)(e, this.locations, this.epubcfi.compare), t = 0 <= n - 1 ? this.pages[n - 1] : this.pages[0], void 0 !== t || (t = -1)) : t = this.pages[n], t
                    }
                }, {
                    key: 'cfiFromPage',
                    value: function(e) {
                        var t = -1;
                        'number' != typeof e && (e = parseInt(e));
                        var n = this.pages.indexOf(e);
                        return -1 != n && (t = this.locations[n]), t
                    }
                }, {
                    key: 'pageFromPercentage',
                    value: function(e) {
                        var t = u(this.totalPages * e);
                        return t
                    }
                }, {
                    key: 'percentageFromPage',
                    value: function(e) {
                        var t = (e - this.firstPage) / this.totalPages;
                        return u(1e3 * t) / 1e3
                    }
                }, {
                    key: 'percentageFromCfi',
                    value: function(e) {
                        var t = this.pageFromCfi(e),
                            n = this.percentageFromPage(t);
                        return n
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        this.pages = void 0, this.locations = void 0, this.epubcfi = void 0, this.pageList = void 0, this.toc = void 0, this.ncx = void 0
                    }
                }]), e
            }();
        t.default = s, e.exports = t['default']
    }, function(e, t, n) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            o = n(6),
            r = n(31),
            l = n(35),
            s = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(l),
            d = function() {
                function e(t) {
                    a(this, e), this.settings = t, this.name = t.layout || 'reflowable', this._spread = 'none' !== t.spread, this._minSpreadWidth = t.minSpreadWidth || 800, this._evenSpreads = t.evenSpreads || !1, this._flow = 'scrolled' === t.flow || 'scrolled-continuous' === t.flow || 'scrolled-doc' === t.flow ? 'scrolled' : 'paginated', this.width = 0, this.height = 0, this.spreadWidth = 0, this.delta = 0, this.columnWidth = 0, this.gap = 0, this.divisor = 1, this.props = {
                        name: this.name,
                        spread: this._spread,
                        flow: this._flow,
                        width: 0,
                        height: 0,
                        spreadWidth: 0,
                        delta: 0,
                        columnWidth: 0,
                        gap: 0,
                        divisor: 1
                    }
                }
                return i(e, [{
                    key: 'flow',
                    value: function(e) {
                        return 'undefined' != typeof e && (this._flow = 'scrolled' === e || 'scrolled-continuous' === e || 'scrolled-doc' === e ? 'scrolled' : 'paginated', this.update({
                            flow: this._flow
                        })), this._flow
                    }
                }, {
                    key: 'spread',
                    value: function(e, t) {
                        return e && (this._spread = 'none' !== e, this.update({
                            spread: this._spread
                        })), 0 <= t && (this._minSpreadWidth = t), this._spread
                    }
                }, {
                    key: 'calculate',
                    value: function(e, t, n) {
                        e = Math.round(e), t = Math.round(t);
                        var a = 1,
                            i = n || 0,
                            o = e,
                            r = t,
                            l = y(o / 12),
                            s, d, c, p;
                        a = this._spread && o >= this._minSpreadWidth ? 2 : 1, 'reflowable' !== this.name || 'paginated' !== this._flow || 0 <= n || (i = 0 == l % 2 ? l : l - 1), 'pre-paginated' === this.name && (i = 0), 1 < a ? (s = o / a - i, c = s + i) : (s = o, c = o), 'pre-paginated' === this.name && 1 < a && (o = s), d = s * a + i, p = o, this.width = o, this.height = r, this.spreadWidth = d, this.pageWidth = c, this.delta = p, this.columnWidth = s, this.gap = i, this.divisor = a, this.update({
                            width: o,
                            height: r,
                            spreadWidth: d,
                            pageWidth: c,
                            delta: p,
                            columnWidth: s,
                            gap: i,
                            divisor: a
                        })
                    }
                }, {
                    key: 'format',
                    value: function(e) {
                        var t;
                        if('pre-paginated' !== this.name && 'paginated' === this._flow && content_cover && contents.sectionIndex === 0)reflowable_cover(e, this);
                        return t = 'pre-paginated' === this.name ? e.fit(this.columnWidth, this.height) : 'paginated' === this._flow ? e.columns(this.width, this.height, this.columnWidth, this.gap) : e.size(this.width, null), t
                    }
                }, {
                    key: 'count',
                    value: function(e, t) {
                        var n, a;
                        return 'pre-paginated' === this.name ? (n = 1, a = 1) : 'paginated' === this._flow ? (t = t || this.delta, n = g(e / t), a = n * this.divisor) : (t = t || this.height, n = g(e / t), a = n), {
                            spreads: n,
                            pages: a
                        }
                    }
                }, {
                    key: 'update',
                    value: function(e) {
                        var t = this;
                        if (Object.keys(e).forEach(function(n) {
                                t.props[n] === e[n] && delete e[n]
                            }), 0 < Object.keys(e).length) {
                            var n = (0, o.extend)(this.props, e);
                            this.emit(r.EVENTS.LAYOUT.UPDATED, n, e)
                        }
                    }
                }]), e
            }();
        (0, s.default)(d.prototype), t.default = d, e.exports = t['default']
    }, function(e, t, n) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
            },
            o = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            r = n(70),
            l = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r),
            s = function() {
                function e(t) {
                    a(this, e), this.rendition = t, this._themes = {
                        default: {
                            rules: {},
                            url: '',
                            serialized: ''
                        }
                    }, this._overrides = {}, this._current = 'default', this._injected = [], this.rendition.hooks.content.register(this.inject.bind(this)), this.rendition.hooks.content.register(this.overrides.bind(this))
                }
                return o(e, [{
                    key: 'register',
                    value: function() {
                        return 0 === arguments.length ? void 0 : 1 === arguments.length && 'object' === i(arguments[0]) ? this.registerThemes(arguments[0]) : 1 === arguments.length && 'string' == typeof arguments[0] ? this.default(arguments[0]) : 2 === arguments.length && 'string' == typeof arguments[1] ? this.registerUrl(arguments[0], arguments[1]) : 2 === arguments.length && 'object' === i(arguments[1]) ? this.registerRules(arguments[0], arguments[1]) : void 0
                    }
                }, {
                    key: 'default',
                    value: function(e) {
                        return e ? 'string' == typeof e ? this.registerUrl('default', e) : 'object' === ('undefined' == typeof e ? 'undefined' : i(e)) ? this.registerRules('default', e) : void 0 : void 0
                    }
                }, {
                    key: 'registerThemes',
                    value: function(e) {
                        for (var t in e) e.hasOwnProperty(t) && ('string' == typeof e[t] ? this.registerUrl(t, e[t]) : this.registerRules(t, e[t]))
                    }
                }, {
                    key: 'registerUrl',
                    value: function(e, t) {
                        var n = new l.default(t);
                        this._themes[e] = {
                            url: n.toString()
                        }, this._injected[e] && this.update(e)
                    }
                }, {
                    key: 'registerRules',
                    value: function(e, t) {
                        this._themes[e] = {
                            rules: t
                        }, this._injected[e] && this.update(e)
                    }
                }, {
                    key: 'select',
                    value: function(e) {
                        var t = this._current,
                            n;
                        this._current = e, this.update(e), n = this.rendition.getContents(), n.forEach(function(n) {
                            n.removeClass(t), n.addClass(e)
                        })
                    }
                }, {
                    key: 'update',
                    value: function(e) {
                        var t = this,
                            n = this.rendition.getContents();
                        n.forEach(function(n) {
                            t.add(e, n)
                        })
                    }
                }, {
                    key: 'inject',
                    value: function(e) {
                        var t = [],
                            n = this._themes,
                            a;
                        for (var i in n) n.hasOwnProperty(i) && (i === this._current || 'default' == i) && (a = n[i], (a.rules && 0 < Object.keys(a.rules).length || a.url && -1 === t.indexOf(a.url)) && this.add(i, e), this._injected.push(i));
                        'default' != this._current && e.addClass(this._current)
                    }
                }, {
                    key: 'add',
                    value: function(e, t) {
                        var n = this._themes[e];
                        n && t && (n.url ? t.addStylesheet(n.url) : n.serialized || n.rules && (t.addStylesheetRules(n.rules), n.injected = !0))
                    }
                }, {
                    key: 'override',
                    value: function(e, t, n) {
                        var a = this,
                            i = this.rendition.getContents();
                        this._overrides[e] = {
                            value: t,
                            priority: !0 === n
                        }, i.forEach(function(t) {
                            t.css(e, a._overrides[e].value, a._overrides[e].priority)
                        })
                    }
                }, {
                    key: 'overrides',
                    value: function(e) {
                        var t = this._overrides;
                        for (var n in t) t.hasOwnProperty(n) && e.css(n, t[n].value, t[n].priority)
                    }
                }, {
                    key: 'fontSize',
                    value: function(e) {
                        this.override('font-size', e)
                    }
                }, {
                    key: 'font',
                    value: function(e) {
                        this.override('font-family', e, !0)
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        this.rendition = void 0, this._themes = void 0, this._overrides = void 0, this._current = void 0, this._injected = void 0
                    }
                }]), e
            }();
        t.default = s, e.exports = t['default']
    }, function(e, t, n) {
        'use strict';

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            r = n(35),
            l = a(r),
            s = n(22),
            d = a(s),
            c = function() {
                function e(t) {
                    i(this, e), this.rendition = t, this.highlights = [], this.underlines = [], this.marks = [], this._annotations = {}, this._annotationsBySectionIndex = {}, this.rendition.hooks.render.register(this.inject.bind(this)), this.rendition.hooks.unloaded.register(this.clear.bind(this))
                }
                return o(e, [{
                    key: 'add',
                    value: function(e, t, n, a, i, o) {
                        var r = encodeURI(t),
                            l = new d.default(t),
                            s = l.spinePos,
                            c = new p({
                                type: e,
                                cfiRange: t,
                                data: n,
                                sectionIndex: s,
                                cb: a,
                                className: i,
                                styles: o
                            });
                        this._annotations[r] = c, s in this._annotationsBySectionIndex ? this._annotationsBySectionIndex[s].push(r) : this._annotationsBySectionIndex[s] = [r];
                        var u = this.rendition.views();
                        return u.forEach(function(e) {
                            c.sectionIndex === e.index && c.attach(e)
                        }), c
                    }
                }, {
                    key: 'remove',
                    value: function(e, t) {
                        var n = this,
                            a = encodeURI(e);
                        if (a in this._annotations) {
                            var i = this._annotations[a];
                            if (t && i.type !== t) return;
                            var o = this.rendition.views();
                            o.forEach(function(e) {
                                n._removeFromAnnotationBySectionIndex(i.sectionIndex, a), i.sectionIndex === e.index && i.detach(e)
                            }), delete this._annotations[a]
                        }
                    }
                }, {
                    key: '_removeFromAnnotationBySectionIndex',
                    value: function(e, t) {
                        this._annotationsBySectionIndex[e] = this._annotationsAt(e).filter(function(e) {
                            return e !== t
                        })
                    }
                }, {
                    key: '_annotationsAt',
                    value: function(e) {
                        return this._annotationsBySectionIndex[e]
                    }
                }, {
                    key: 'highlight',
                    value: function(e, t, n, a, i) {
                        this.add('highlight', e, t, n, a, i)
                    }
                }, {
                    key: 'underline',
                    value: function(e, t, n, a, i) {
                        this.add('underline', e, t, n, a, i)
                    }
                }, {
                    key: 'mark',
                    value: function(e, t, n) {
                        this.add('mark', e, t, n)
                    }
                }, {
                    key: 'each',
                    value: function() {
                        return this._annotations.forEach.apply(this._annotations, arguments)
                    }
                }, {
                    key: 'inject',
                    value: function(e) {
                        var t = this,
                            n = e.index;
                        if (n in this._annotationsBySectionIndex) {
                            var a = this._annotationsBySectionIndex[n];
                            a.forEach(function(n) {
                                var a = t._annotations[n];
                                a.attach(e)
                            })
                        }
                    }
                }, {
                    key: 'clear',
                    value: function(e) {
                        var t = this,
                            n = e.index;
                        if (n in this._annotationsBySectionIndex) {
                            var a = this._annotationsBySectionIndex[n];
                            a.forEach(function(n) {
                                var a = t._annotations[n];
                                a.detach(e)
                            })
                        }
                    }
                }, {
                    key: 'show',
                    value: function() {}
                }, {
                    key: 'hide',
                    value: function() {}
                }]), e
            }(),
            p = function() {
                function e(t) {
                    var n = t.type,
                        a = t.cfiRange,
                        o = t.data,
                        r = t.sectionIndex,
                        l = t.cb,
                        s = t.className,
                        d = t.styles;
                    i(this, e), this.type = n, this.cfiRange = a, this.data = o, this.sectionIndex = r, this.mark = void 0, this.cb = l, this.className = s, this.styles = d
                }
                return o(e, [{
                    key: 'update',
                    value: function(e) {
                        this.data = e
                    }
                }, {
                    key: 'attach',
                    value: function(e) {
                        var t = this.cfiRange,
                            n = this.data,
                            a = this.type,
                            i = this.mark,
                            o = this.cb,
                            r = this.className,
                            l = this.styles,
                            s;
                        return 'highlight' === a ? s = e.highlight(t, n, o, r, l) : 'underline' === a ? s = e.underline(t, n, o, r, l) : 'mark' === a && (s = e.mark(t, n, o)), this.mark = s, s
                    }
                }, {
                    key: 'detach',
                    value: function(e) {
                        var t = this.cfiRange,
                            n = this.type,
                            a;
                        return e && ('highlight' === n ? a = e.unhighlight(t) : 'underline' === n ? a = e.ununderline(t) : 'mark' === n && (a = e.unmark(t))), this.mark = void 0, a
                    }
                }, {
                    key: 'text',
                    value: function() {}
                }]), e
            }();
        (0, l.default)(p.prototype), t.default = c, e.exports = t['default']
    }, function(e, t, n) {
        'use strict';

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!e) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
            return t && ('object' === ('undefined' == typeof t ? 'undefined' : c(t)) || 'function' == typeof t) ? t : e
        }

        function o(e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function, not ' + ('undefined' == typeof t ? 'undefined' : c(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }

        function l(e, t) {
            var n = t.getBoundingClientRect(),
                a = e.getBoundingClientRect();
            return {
                top: a.top - n.top,
                left: a.left - n.left,
                height: e.scrollHeight,
                width: e.scrollWidth
            }
        }

        function s(e, t) {
            e.style.top = t.top + 'px', e.style.left = t.left + 'px', e.style.height = t.height + 'px', e.style.width = t.width + 'px'
        }

        function d(e, t) {
            return t.right <= e.right && t.left >= e.left && t.top >= e.top && t.bottom <= e.bottom
        }
        var c = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
        };
        Object.defineProperty(t, '__esModule', {
            value: !0
        }), t.Underline = t.Highlight = t.Mark = t.Pane = void 0;
        var p = function e(t, n, a) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, n);
                if (i === void 0) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, n, a)
                }
                if ('value' in i) return i.value;
                var r = i.get;
                return void 0 === r ? void 0 : r.call(a)
            },
            u = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            g = n(386),
            h = a(g),
            m = n(387),
            f = a(m),
            y = t.Pane = function() {
                function e(t) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document.body;
                    r(this, e), this.target = t, this.element = h.default.createElement('svg'), this.marks = [], this.element.style.position = 'absolute', this.element.setAttribute('pointer-events', 'none'), f.default.proxyMouse(this.target, this.marks), this.container = n, this.container.appendChild(this.element), this.render()
                }
                return u(e, [{
                    key: 'addMark',
                    value: function(e) {
                        var t = h.default.createElement('g');
                        return this.element.appendChild(t), e.bind(t, this.container), this.marks.push(e), e.render(), e
                    }
                }, {
                    key: 'removeMark',
                    value: function(e) {
                        var t = this.marks.indexOf(e);
                        if (-1 !== t) {
                            var n = e.unbind();
                            this.element.removeChild(n), this.marks.splice(t, 1)
                        }
                    }
                }, {
                    key: 'render',
                    value: function() {
                        s(this.element, l(this.target, this.container));
                        var e = !0,
                            t = !1,
                            n;
                        try {
                            for (var a = this.marks[Symbol.iterator](), i, o; !(e = (i = a.next()).done); e = !0) o = i.value, o.render()
                        } catch (e) {
                            t = !0, n = e
                        } finally {
                            try {
                                !e && a.return && a.return()
                            } finally {
                                if (t) throw n
                            }
                        }
                    }
                }]), e
            }(),
            v = t.Mark = function() {
                function e() {
                    r(this, e), this.element = null
                }
                return u(e, [{
                    key: 'bind',
                    value: function(e, t) {
                        this.element = e, this.container = t
                    }
                }, {
                    key: 'unbind',
                    value: function() {
                        var e = this.element;
                        return this.element = null, e
                    }
                }, {
                    key: 'render',
                    value: function() {}
                }, {
                    key: 'dispatchEvent',
                    value: function(t) {
                        this.element && this.element.dispatchEvent(t)
                    }
                }, {
                    key: 'getBoundingClientRect',
                    value: function() {
                        return this.element.getBoundingClientRect()
                    }
                }, {
                    key: 'getClientRects',
                    value: function() {
                        for (var e = [], t = this.element.firstChild; t;) e.push(t.getBoundingClientRect()), t = t.nextSibling;
                        return e
                    }
                }, {
                    key: 'filteredRanges',
                    value: function() {
                        var e = Array.from(this.range.getClientRects());
                        return e.filter(function(t) {
                            for (var n = 0; n < e.length; n++) {
                                if (e[n] === t) return !0;
                                var a = d(e[n], t);
                                if (a) return !1
                            }
                            return !0
                        })
                    }
                }]), e
            }(),
            b = t.Highlight = function(e) {
                function t(e, n, a, o) {
                    r(this, t);
                    var l = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return l.range = e, l.className = n, l.data = a || {}, l.attributes = o || {}, l
                }
                return o(t, e), u(t, [{
                    key: 'bind',
                    value: function(e, n) {
                        for (var a in p(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'bind', this).call(this, e, n), this.data) this.data.hasOwnProperty(a) && (this.element.dataset[a] = this.data[a]);
                        for (var a in this.attributes) this.attributes.hasOwnProperty(a) && this.element.setAttribute(a, this.attributes[a]);
                        this.className && this.element.classList.add(this.className)
                    }
                }, {
                    key: 'render',
                    value: function() {
                        for (; this.element.firstChild;) this.element.removeChild(this.element.firstChild);
                        for (var e = this.element.ownerDocument.createDocumentFragment(), t = this.filteredRanges(), n = this.element.getBoundingClientRect(), a = this.container.getBoundingClientRect(), o = 0, i = t.length; o < i; o++) {
                            var l = t[o],
                                r = h.default.createElement('rect');
                            r.setAttribute('x', l.left - n.left + a.left), r.setAttribute('y', l.top - n.top + a.top), r.setAttribute('height', l.height), r.setAttribute('width', l.width), e.appendChild(r)
                        }
                        this.element.appendChild(e)
                    }
                }]), t
            }(v),
            x = t.Underline = function(e) {
                function t(e, n, a, o) {
                    return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, a, o))
                }
                return o(t, e), u(t, [{
                    key: 'render',
                    value: function() {
                        for (; this.element.firstChild;) this.element.removeChild(this.element.firstChild);
                        for (var e = this.element.ownerDocument.createDocumentFragment(), t = this.filteredRanges(), n = this.element.getBoundingClientRect(), a = this.container.getBoundingClientRect(), o = 0, i = t.length; o < i; o++) {
                            var l = t[o],
                                r = h.default.createElement('rect');
                            r.setAttribute('x', l.left - n.left + a.left), r.setAttribute('y', l.top - n.top + a.top), r.setAttribute('height', l.height), r.setAttribute('width', l.width), r.setAttribute('fill', 'none');
                            var s = h.default.createElement('line');
                            s.setAttribute('x1', l.left - n.left + a.left), s.setAttribute('x2', l.left - n.left + a.left + l.width), s.setAttribute('y1', l.top - n.top + a.top + l.height - 1), s.setAttribute('y2', l.top - n.top + a.top + l.height - 1), s.setAttribute('stroke-width', 1), s.setAttribute('stroke', 'black'), s.setAttribute('stroke-linecap', 'square'), e.appendChild(r), e.appendChild(s)
                        }
                        this.element.appendChild(e)
                    }
                }]), t
            }(b)
    }, function(e, t) {
        'use strict';

        function n(e) {
            return document.createElementNS('http://www.w3.org/2000/svg', e)
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        }), t.createElement = n, t.default = {
            createElement: n
        }
    }, function(e, t) {
        'use strict';

        function n(n, r) {
            function t(l) {
                for (var e = r.length - 1; 0 <= e; e--) {
                    var i = r[e],
                        t = l.clientX,
                        s = l.clientY;
                    if (l.touches && l.touches.length && (t = l.touches[0].clientX, s = l.touches[0].clientY), !!o(i, n, t, s)) {
                        i.dispatchEvent(a(l));
                        break
                    }
                }
            }
            if ('iframe' === n.nodeName || 'IFRAME' === n.nodeName) try {
                this.target = n.contentDocument
            } catch (e) {
                this.target = n
            } else this.target = n;
            for (var e = ['mouseup', 'mousedown', 'click', 'touchstart'], i = 0, l; i < e.length; i++) l = e[i], this.target.addEventListener(l, function(n) {
                return t(n)
            }, !1)
        }

        function a(t) {
            var e = Object.assign({}, t, {
                bubbles: !1
            });
            try {
                return new MouseEvent(t.type, e)
            } catch (a) {
                var n = document.createEvent('MouseEvents');
                return n.initMouseEvent(t.type, !1, e.cancelable, e.view, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget), n
            }
        }

        function o(e, t, n, a) {
            function o(e, t, n) {
                var a = e.top - l.top,
                    i = e.left - l.left,
                    o = a + e.height,
                    r = i + e.width;
                return a <= n && i <= t && o > n && r > t
            }
            var l = t.getBoundingClientRect(),
                r = e.getBoundingClientRect();
            if (!o(r, n, a)) return !1;
            for (var s = e.getClientRects(), d = 0, i = s.length; d < i; d++)
                if (o(s[d], n, a)) return !0;
            return !1
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        }), t.proxyMouse = n, t.clone = a, t.default = {
            proxyMouse: n
        }
    }, function(e, t, n) {
        'use strict';

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            o = n(6),
            r = n(389),
            l = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r),
            s = function() {
                function e(t) {
                    a(this, e), this.settings = t || {}, this.id = 'epubjs-container-' + (0, o.uuid)(), this.container = this.create(this.settings), this.settings.hidden && (this.wrapper = this.wrap(this.container))
                }
                return i(e, [{
                    key: 'create',
                    value: function(e) {
                        var t = e.height,
                            n = e.width,
                            a = e.overflow || !1,
                            i = e.axis || 'vertical',
                            r = e.direction;
                        e.height && (0, o.isNumber)(e.height) && (t = e.height + 'px'), e.width && (0, o.isNumber)(e.width) && (n = e.width + 'px');
                        var l = document.createElement('div');
                        return l.id = this.id, l.classList.add('epub-container'), l.style.wordSpacing = '0', l.style.lineHeight = '0', l.style.verticalAlign = 'top', l.style.position = 'relative', 'horizontal' === i && (l.style.display = 'flex', l.style.flexDirection = 'row', l.style.flexWrap = 'nowrap'), n && (l.style.width = n), t && (l.style.height = t), a && (l.style.overflow = a), r && (l.dir = r, l.style.direction = r), r && this.settings.fullsize && (document.body.style.direction = r), l
                    }
                }, {
                    key: 'wrap',
                    value: function(e) {
                        var t = document.createElement('div');
                        return t.style.visibility = 'hidden', t.style.overflow = 'hidden', t.style.width = '0', t.style.height = '0', t.appendChild(e), t
                    }
                }, {
                    key: 'getElement',
                    value: function(e) {
                        var t;
                        if ((0, o.isElement)(e) ? t = e : 'string' == typeof e && (t = document.getElementById(e)), !t) throw new Error('Not an Element');
                        return t
                    }
                }, {
                    key: 'attachTo',
                    value: function(e) {
                        var t = this.getElement(e),
                            n;
                        if (t) return n = this.settings.hidden ? this.wrapper : this.container, t.appendChild(n), this.element = t, t
                    }
                }, {
                    key: 'getContainer',
                    value: function() {
                        return this.container
                    }
                }, {
                    key: 'onResize',
                    value: function(e) {
                        (0, o.isNumber)(this.settings.width) && (0, o.isNumber)(this.settings.height) || (this.resizeFunc = (0, l.default)(e, 50), window.addEventListener('resize', this.resizeFunc, !1))
                    }
                }, {
                    key: 'onOrientationChange',
                    value: function(e) {
                        this.orientationChangeFunc = e, window.addEventListener('orientationchange', this.orientationChangeFunc, !1)
                    }
                }, {
                    key: 'size',
                    value: function(e, t) {
                        var n;
                        null === e ? (n = this.element.getBoundingClientRect(), n.width && (e = y(n.width), this.container.style.width = e + 'px')) : (0, o.isNumber)(e) ? this.container.style.width = e + 'px' : this.container.style.width = e, null === t ? (n = n || this.element.getBoundingClientRect(), n.height && (t = n.height, this.container.style.height = t + 'px')) : (0, o.isNumber)(t) ? this.container.style.height = t + 'px' : this.container.style.height = t, (0, o.isNumber)(e) || (n = this.container.getBoundingClientRect(), e = y(n.width)), (0, o.isNumber)(t) || (n = n || this.container.getBoundingClientRect(), t = n.height), this.containerStyles = window.getComputedStyle(this.container), this.containerPadding = {
                            left: parseFloat(this.containerStyles['padding-left']) || 0,
                            right: parseFloat(this.containerStyles['padding-right']) || 0,
                            top: parseFloat(this.containerStyles['padding-top']) || 0,
                            bottom: parseFloat(this.containerStyles['padding-bottom']) || 0
                        };
                        var a = (0, o.windowBounds)(),
                            i = window.getComputedStyle(document.body),
                            r = {
                                left: parseFloat(i['padding-left']) || 0,
                                right: parseFloat(i['padding-right']) || 0,
                                top: parseFloat(i['padding-top']) || 0,
                                bottom: parseFloat(i['padding-bottom']) || 0
                            };
                        return e || (e = a.width - r.left - r.right), (!this.settings.fullsize || t) && t || (t = a.height - r.top - r.bottom), {
                            width: e - this.containerPadding.left - this.containerPadding.right,
                            height: t - this.containerPadding.top - this.containerPadding.bottom
                        }
                    }
                }, {
                    key: 'bounds',
                    value: function() {
                        var e;
                        return 'visible' !== this.container.style.overflow && (e = this.container && this.container.getBoundingClientRect()), e && e.width && e.height ? e : (0, o.windowBounds)()
                    }
                }, {
                    key: 'getSheet',
                    value: function() {
                        var e = document.createElement('style');
                        return e.appendChild(document.createTextNode('')), document.head.appendChild(e), e.sheet
                    }
                }, {
                    key: 'addStyleRules',
                    value: function(e, t) {
                        var n = '#' + this.id + ' ',
                            a = '';
                        this.sheet || (this.sheet = this.getSheet()), t.forEach(function(e) {
                            for (var t in e) e.hasOwnProperty(t) && (a += t + ':' + e[t] + ';')
                        }), this.sheet.insertRule(n + e + ' {' + a + '}', 0)
                    }
                }, {
                    key: 'axis',
                    value: function(e) {
                        'horizontal' === e ? (this.container.style.display = 'flex', this.container.style.flexDirection = 'row', this.container.style.flexWrap = 'nowrap') : this.container.style.display = 'block'
                    }
                }, {
                    key: 'direction',
                    value: function(e) {
                        this.container && (this.container.dir = e, this.container.style.direction = e), this.settings.fullsize && (document.body.style.direction = e)
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        var e;
                        this.element && (e = this.settings.hidden ? this.wrapper : this.container, this.element.contains(this.container) && this.element.removeChild(this.container), window.removeEventListener('resize', this.resizeFunc), window.removeEventListener('orientationChange', this.orientationChangeFunc))
                    }
                }]), e
            }();
        t.default = s, e.exports = t['default']
    }, function(e, t, n) {
        var a = n(144),
            i = n(105);
        e.exports = function(e, t, n) {
            var o = !0,
                r = !0;
            if ('function' != typeof e) throw new TypeError('Expected a function');
            return i(n) && (o = 'leading' in n ? !!n.leading : o, r = 'trailing' in n ? !!n.trailing : r), a(e, t, {
                leading: o,
                maxWait: t,
                trailing: r
            })
        }
    }, function(e, t, n) {
        var a = n(145);
        e.exports = function() {
            return a.Date.now()
        }
    }, function(e, t, n) {
        (function(t) {
            var n = 'object' == typeof t && t && t.Object === Object && t;
            e.exports = n
        }).call(t, n(51))
    }, function(e, t, n) {
        var a = n(105),
            i = n(393),
            o = 0 / 0,
            r = /^\s+|\s+$/g,
            l = /^[-+]0x[0-9a-f]+$/i,
            s = /^0b[01]+$/i,
            d = /^0o[0-7]+$/i,
            c = parseInt;
        e.exports = function(e) {
            if ('number' == typeof e) return e;
            if (i(e)) return o;
            if (a(e)) {
                var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
                e = a(t) ? t + '' : t
            }
            if ('string' != typeof e) return 0 === e ? e : +e;
            e = e.replace(r, '');
            var n = s.test(e);
            return n || d.test(e) ? c(e.slice(2), n ? 2 : 8) : l.test(e) ? o : +e
        }
    }, function(e, t, n) {
        var a = n(394),
            i = n(397);
        e.exports = function(e) {
            return 'symbol' == typeof e || i(e) && a(e) == '[object Symbol]'
        }
    }, function(e, t, n) {
        var a = n(146),
            i = n(395),
            o = n(396),
            r = a ? a.toStringTag : void 0;
        e.exports = function(e) {
            return null == e ? void 0 === e ? '[object Undefined]' : '[object Null]' : r && r in Object(e) ? i(e) : o(e)
        }
    }, function(e, t, n) {
        var a = n(146),
            i = Object.prototype,
            o = i.hasOwnProperty,
            r = i.toString,
            l = a ? a.toStringTag : void 0;
        e.exports = function(e) {
            var t = o.call(e, l),
                n = e[l];
            try {
                e[l] = void 0
            } catch (t) {}
            var a = r.call(e);
            return t ? e[l] = n : delete e[l], a
        }
    }, function(e) {
        var t = Object.prototype,
            n = t.toString;
        e.exports = function(e) {
            return n.call(e)
        }
    }, function(e) {
        e.exports = function(e) {
            return null != e && 'object' == typeof e
        }
    }, function(e, t) {
        'use strict';

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var a = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            i = function() {
                function e(t) {
                    n(this, e), this.container = t, this._views = [], this.length = 0, this.hidden = !1
                }
                return a(e, [{
                    key: 'all',
                    value: function() {
                        return this._views
                    }
                }, {
                    key: 'first',
                    value: function() {
                        return this._views[0]
                    }
                }, {
                    key: 'last',
                    value: function() {
                        return this._views[this._views.length - 1]
                    }
                }, {
                    key: 'indexOf',
                    value: function(e) {
                        return this._views.indexOf(e)
                    }
                }, {
                    key: 'slice',
                    value: function() {
                        return this._views.slice.apply(this._views, arguments)
                    }
                }, {
                    key: 'get',
                    value: function(e) {
                        return this._views[e]
                    }
                }, {
                    key: 'append',
                    value: function(e) {
                        return this._views.push(e), this.container && this.container.appendChild(e.element), this.length++, e
                    }
                }, {
                    key: 'prepend',
                    value: function(e) {
                        return this._views.unshift(e), this.container && this.container.insertBefore(e.element, this.container.firstChild), this.length++, e
                    }
                }, {
                    key: 'insert',
                    value: function(e, t) {
                        return this._views.splice(t, 0, e), this.container && (t < this.container.children.length ? this.container.insertBefore(e.element, this.container.children[t]) : this.container.appendChild(e.element)), this.length++, e
                    }
                }, {
                    key: 'remove',
                    value: function(e) {
                        var t = this._views.indexOf(e); - 1 < t && this._views.splice(t, 1), this.destroy(e), this.length--
                    }
                }, {
                    key: 'destroy',
                    value: function(e) {
                        e.displayed && e.destroy(), this.container && this.container.removeChild(e.element), e = null
                    }
                }, {
                    key: 'forEach',
                    value: function() {
                        return this._views.forEach.apply(this._views, arguments)
                    }
                }, {
                    key: 'clear',
                    value: function() {
                        var e = this.length,
                            t;
                        if (this.length) {
                            for (var n = 0; n < e; n++) t = this._views[n], this.destroy(t);
                            this._views = [], this.length = 0
                        }
                    }
                }, {
                    key: 'find',
                    value: function(e) {
                        for (var t = this.length, n = 0, a; n < t; n++)
                            if (a = this._views[n], a.displayed && a.section.index == e.index) return a
                    }
                }, {
                    key: 'displayed',
                    value: function() {
                        for (var e = [], t = this.length, n = 0, a; n < t; n++) a = this._views[n], a.displayed && e.push(a);
                        return e
                    }
                }, {
                    key: 'show',
                    value: function() {
                        for (var e = this.length, t = 0, n; t < e; t++) n = this._views[t], n.displayed && n.show();
                        this.hidden = !1
                    }
                }, {
                    key: 'hide',
                    value: function() {
                        for (var e = this.length, t = 0, n; t < e; t++) n = this._views[t], n.displayed && n.hide();
                        this.hidden = !0
                    }
                }]), e
            }();
        t.default = i, e.exports = t['default']
    }, function(e, t, n) {
        'use strict';

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        Object.defineProperty(t, '__esModule', {
            value: !0
        });
        var o = function() {
                function e(e, t) {
                    for (var n = 0, a; n < t.length; n++) a = t[n], a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
                return function(t, n, a) {
                    return n && e(t.prototype, n), a && e(t, a), t
                }
            }(),
            l = n(6),
            r = n(101),
            s = a(r),
            d = n(140),
            c = a(d),
            p = n(50),
            u = a(p),
            g = function() {
                function e() {
                    i(this, e), this.zip = void 0, this.urlCache = {}, this.checkRequirements()
                }
                return o(e, [{
                    key: 'checkRequirements',
                    value: function() {
                        try {
                            if ('undefined' == typeof JSZip) {
                                var e = n(400);
                                this.zip = new e
                            } else this.zip = new JSZip
                        } catch (t) {
                            throw new Error('JSZip lib not loaded')
                        }
                    }
                }, {
                    key: 'open',
                    value: function(e, t) {
                        return this.zip.loadAsync(e, {
                            base64: t
                        })
                    }
                }, {
                    key: 'openUrl',
                    value: function(e, t) {
                        return (0, s.default)(e, 'binary').then(function(e) {
                            return this.zip.loadAsync(e, {
                                base64: t
                            })
                        }.bind(this))
                    }
                }, {
                    key: 'request',
                    value: function(e, t) {
                        var n = new l.defer,
                            a = new u.default(e),
                            i;
                        return t || (t = a.extension), i = 'blob' == t ? this.getBlob(e) : this.getText(e), i ? i.then(function(e) {
                            var a = this.handleResponse(e, t);
                            n.resolve(a)
                        }.bind(this)) : n.reject({
                            message: 'File not found in the epub: ' + e,
                            stack: new Error().stack
                        }), n.promise
                    }
                }, {
                    key: 'handleResponse',
                    value: function(e, t) {
                        var n;
                        return n = 'json' == t ? JSON.parse(e) : (0, l.isXml)(t) ? (0, l.parse)(e, 'text/xml') : 'xhtml' == t ? (0, l.parse)(e, 'application/xhtml+xml') : 'html' == t || 'htm' == t ? (0, l.parse)(e, 'text/html') : e, n
                    }
                }, {
                    key: 'getBlob',
                    value: function(e, t) {
                        var n = window.decodeURIComponent(e.substr(1)),
                            a = this.zip.file(n);
                        if (a) return t = t || c.default.lookup(a.name), a.async('uint8array').then(function(e) {
                            return new Blob([e], {
                                type: t
                            })
                        })
                    }
                }, {
                    key: 'getText',
                    value: function(e) {
                        var t = window.decodeURIComponent(e.substr(1)),
                            n = this.zip.file(t);
                        if (n) return n.async('string').then(function(e) {
                            return e
                        })
                    }
                }, {
                    key: 'getBase64',
                    value: function(e, t) {
                        var n = window.decodeURIComponent(e.substr(1)),
                            a = this.zip.file(n);
                        if (a) return t = t || c.default.lookup(a.name), a.async('base64').then(function(e) {
                            return 'data:' + t + ';base64,' + e
                        })
                    }
                }, {
                    key: 'createUrl',
                    value: function(e, t) {
                        var n = new l.defer,
                            a = window.URL || window.webkitURL || window.mozURL,
                            i = t && t.base64,
                            o, r;
                        return e in this.urlCache ? (n.resolve(this.urlCache[e]), n.promise) : (i ? (r = this.getBase64(e), r && r.then(function(t) {
                            this.urlCache[e] = t, n.resolve(t)
                        }.bind(this))) : (r = this.getBlob(e), r && r.then(function(t) {
                            o = a.createObjectURL(t), this.urlCache[e] = o, n.resolve(o)
                        }.bind(this))), r || n.reject({
                            message: 'File not found in the epub: ' + e,
                            stack: new Error().stack
                        }), n.promise)
                    }
                }, {
                    key: 'revokeUrl',
                    value: function(e) {
                        var t = window.URL || window.webkitURL || window.mozURL,
                            n = this.urlCache[e];
                        n && t.revokeObjectURL(n)
                    }
                }, {
                    key: 'destroy',
                    value: function() {
                        var e = window.URL || window.webkitURL || window.mozURL;
                        for (var t in this.urlCache) e.revokeObjectURL(t);
                        this.zip = void 0, this.urlCache = {}
                    }
                }]), e
            }();
        t.default = g, e.exports = t['default']
    }, function(n) {
        if ('undefined' == typeof t) {
            var a = new Error('Cannot find module "jszip"');
            throw a.code = 'MODULE_NOT_FOUND', a
        }
        n.exports = t
    }, function(e, t, n) {
        'use strict';
        (function(e, n) {
            var a = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
                },
                i, o, r;
            (function(l, s) {
                l || (l = window || e), 'object' === a(n) && n.exports ? n.exports = s(l) : (o = [], i = s, r = 'function' == typeof i ? i.apply(t, o) : i, !(r !== void 0 && (n.exports = r)))
            })(void 0, function(e) {
                function t(e) {
                    return void 0 !== p[e]
                }

                function n() {
                    l.call(this), this._isInvalid = !0
                }

                function a(e) {
                    return '' == e && n.call(this), e.toLowerCase()
                }

                function o(e) {
                    var t = e.charCodeAt(0);
                    return 32 < t && 127 > t && -1 == [34, 35, 60, 62, 63, 96].indexOf(t) ? e : encodeURIComponent(e)
                }

                function r(e) {
                    var t = e.charCodeAt(0);
                    return 32 < t && 127 > t && -1 == [34, 35, 60, 62, 96].indexOf(t) ? e : encodeURIComponent(e)
                }

                function i(e, l, s) {
                    function d(e) {
                        E.push(e)
                    }
                    var f = l || 'scheme start',
                        y = 0,
                        v = '',
                        b = !1,
                        x = !1,
                        E = [];
                    loop: for (;
                        (e[y - 1] != m || 0 == y) && !this._isInvalid;) {
                        var k = e[y];
                        switch (f) {
                            case 'scheme start':
                                if (k && g.test(k)) v += k.toLowerCase(), f = 'scheme';
                                else if (!l) {
                                    v = '', f = 'no scheme';
                                    continue
                                } else {
                                    d('Invalid scheme.');
                                    break loop
                                }
                                break;
                            case 'scheme':
                                if (k && h.test(k)) v += k.toLowerCase();
                                else if (':' == k) {
                                    if (this._scheme = v, v = '', l) break loop;
                                    t(this._scheme) && (this._isRelative = !0), f = 'file' == this._scheme ? 'relative' : this._isRelative && s && s._scheme == this._scheme ? 'relative or authority' : this._isRelative ? 'authority first slash' : 'scheme data'
                                } else if (!l) {
                                    v = '', y = 0, f = 'no scheme';
                                    continue
                                } else if (m == k) break loop;
                                else {
                                    d('Code point not allowed in scheme: ' + k);
                                    break loop
                                }
                                break;
                            case 'scheme data':
                                '?' == k ? (this._query = '?', f = 'query') : '#' == k ? (this._fragment = '#', f = 'fragment') : m != k && '\t' != k && '\n' != k && '\r' != k && (this._schemeData += o(k));
                                break;
                            case 'no scheme':
                                if (!s || !t(s._scheme)) d('Missing scheme.'), n.call(this);
                                else {
                                    f = 'relative';
                                    continue
                                }
                                break;
                            case 'relative or authority':
                                if ('/' == k && '/' == e[y + 1]) f = 'authority ignore slashes';
                                else {
                                    d('Expected /, got: ' + k), f = 'relative';
                                    continue
                                }
                                break;
                            case 'relative':
                                if (this._isRelative = !0, 'file' != this._scheme && (this._scheme = s._scheme), m == k) {
                                    this._host = s._host, this._port = s._port, this._path = s._path.slice(), this._query = s._query, this._username = s._username, this._password = s._password;
                                    break loop
                                } else if ('/' == k || '\\' == k) '\\' == k && d('\\ is an invalid code point.'), f = 'relative slash';
                                else if ('?' == k) this._host = s._host, this._port = s._port, this._path = s._path.slice(), this._query = '?', this._username = s._username, this._password = s._password, f = 'query';
                                else if ('#' == k) this._host = s._host, this._port = s._port, this._path = s._path.slice(), this._query = s._query, this._fragment = '#', this._username = s._username, this._password = s._password, f = 'fragment';
                                else {
                                    var c = e[y + 1],
                                        _ = e[y + 2];
                                    'file' == this._scheme && g.test(k) && (':' == c || '|' == c) && (m == _ || '/' == _ || '\\' == _ || '?' == _ || '#' == _) || (this._host = s._host, this._port = s._port, this._username = s._username, this._password = s._password, this._path = s._path.slice(), this._path.pop()), f = 'relative path';
                                    continue
                                }
                                break;
                            case 'relative slash':
                                if ('/' == k || '\\' == k) '\\' == k && d('\\ is an invalid code point.'), f = 'file' == this._scheme ? 'file host' : 'authority ignore slashes';
                                else {
                                    'file' != this._scheme && (this._host = s._host, this._port = s._port, this._username = s._username, this._password = s._password), f = 'relative path';
                                    continue
                                }
                                break;
                            case 'authority first slash':
                                if ('/' == k) f = 'authority second slash';
                                else {
                                    d('Expected \'/\', got: ' + k), f = 'authority ignore slashes';
                                    continue
                                }
                                break;
                            case 'authority second slash':
                                if (f = 'authority ignore slashes', '/' != k) {
                                    d('Expected \'/\', got: ' + k);
                                    continue
                                }
                                break;
                            case 'authority ignore slashes':
                                if ('/' != k && '\\' != k) {
                                    f = 'authority';
                                    continue
                                } else d('Expected authority, got: ' + k);
                                break;
                            case 'authority':
                                if ('@' == k) {
                                    b && (d('@ already seen.'), v += '%40'), b = !0;
                                    for (var S = 0, i; S < v.length; S++) {
                                        if (i = v[S], '\t' == i || '\n' == i || '\r' == i) {
                                            d('Invalid whitespace in authority.');
                                            continue
                                        }
                                        if (':' == i && null === this._password) {
                                            this._password = '';
                                            continue
                                        }
                                        var N = o(i);
                                        null === this._password ? this._username += N : this._password += N
                                    }
                                    v = ''
                                } else if (m == k || '/' == k || '\\' == k || '?' == k || '#' == k) {
                                    y -= v.length, v = '', f = 'host';
                                    continue
                                } else v += k;
                                break;
                            case 'file host':
                                if (m == k || '/' == k || '\\' == k || '?' == k || '#' == k) {
                                    2 == v.length && g.test(v[0]) && (':' == v[1] || '|' == v[1]) ? f = 'relative path' : 0 == v.length ? f = 'relative path start' : (this._host = a.call(this, v), v = '', f = 'relative path start');
                                    continue
                                } else '\t' == k || '\n' == k || '\r' == k ? d('Invalid whitespace in file host.') : v += k;
                                break;
                            case 'host':
                            case 'hostname':
                                if (':' == k && !x) {
                                    if (this._host = a.call(this, v), v = '', f = 'port', 'hostname' == l) break loop;
                                } else if (m == k || '/' == k || '\\' == k || '?' == k || '#' == k) {
                                    if (this._host = a.call(this, v), v = '', f = 'relative path start', l) break loop;
                                    continue
                                } else '\t' != k && '\n' != k && '\r' != k ? ('[' == k ? x = !0 : ']' == k && (x = !1), v += k) : d('Invalid code point in host/hostname: ' + k);
                                break;
                            case 'port':
                                if (/[0-9]/.test(k)) v += k;
                                else if (m == k || '/' == k || '\\' == k || '?' == k || '#' == k || l) {
                                    if ('' != v) {
                                        var w = parseInt(v, 10);
                                        w != p[this._scheme] && (this._port = w + ''), v = ''
                                    }
                                    if (l) break loop;
                                    f = 'relative path start';
                                    continue
                                } else '\t' == k || '\n' == k || '\r' == k ? d('Invalid code point in port: ' + k) : n.call(this);
                                break;
                            case 'relative path start':
                                if ('\\' == k && d('\'\\\' not allowed in path.'), f = 'relative path', '/' != k && '\\' != k) continue;
                                break;
                            case 'relative path':
                                if (m == k || '/' == k || '\\' == k || !l && ('?' == k || '#' == k)) {
                                    '\\' == k && d('\\ not allowed in relative path.');
                                    var T;
                                    (T = u[v.toLowerCase()]) && (v = T), '..' == v ? (this._path.pop(), '/' != k && '\\' != k && this._path.push('')) : '.' == v && '/' != k && '\\' != k ? this._path.push('') : '.' != v && ('file' == this._scheme && 0 == this._path.length && 2 == v.length && g.test(v[0]) && '|' == v[1] && (v = v[0] + ':'), this._path.push(v)), v = '', '?' == k ? (this._query = '?', f = 'query') : '#' == k && (this._fragment = '#', f = 'fragment')
                                } else '\t' != k && '\n' != k && '\r' != k && (v += o(k));
                                break;
                            case 'query':
                                l || '#' != k ? m != k && '\t' != k && '\n' != k && '\r' != k && (this._query += r(k)) : (this._fragment = '#', f = 'fragment');
                                break;
                            case 'fragment':
                                m != k && '\t' != k && '\n' != k && '\r' != k && (this._fragment += k);
                        }
                        y++
                    }
                }

                function l() {
                    this._scheme = '', this._schemeData = '', this._username = '', this._password = null, this._host = '', this._port = '', this._path = [], this._query = '', this._fragment = '', this._isInvalid = !1, this._isRelative = !1
                }

                function s(e, t) {
                    void 0 === t || t instanceof s || (t = new s(t + '')), this._url = e, l.call(this);
                    var n = e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, '');
                    i.call(this, n, null, t)
                }
                var d = !1;
                if (!e.forceJURL) try {
                    var c = new URL('b', 'http://a');
                    c.pathname = 'c%20d', d = 'http://a/c%20d' === c.href
                } catch (t) {}
                if (d) return e.URL;
                var p = Object.create(null);
                p.ftp = 21, p.file = 0, p.gopher = 70, p.http = 80, p.https = 443, p.ws = 80, p.wss = 443;
                var u = Object.create(null);
                u['%2e'] = '.', u['.%2e'] = '..', u['%2e.'] = '..', u['%2e%2e'] = '..';
                var g = /[a-zA-Z]/,
                    h = /[a-zA-Z0-9\+\-\.]/,
                    m;
                s.prototype = {
                    toString: function() {
                        return this.href
                    },
                    get href() {
                        if (this._isInvalid) return this._url;
                        var e = '';
                        return ('' != this._username || null != this._password) && (e = this._username + (null == this._password ? '' : ':' + this._password) + '@'), this.protocol + (this._isRelative ? '//' + e + this.host : '') + this.pathname + this._query + this._fragment
                    },
                    set href(e) {
                        l.call(this), i.call(this, e)
                    },
                    get protocol() {
                        return this._scheme + ':'
                    },
                    set protocol(e) {
                        this._isInvalid || i.call(this, e + ':', 'scheme start')
                    },
                    get host() {
                        return this._isInvalid ? '' : this._port ? this._host + ':' + this._port : this._host
                    },
                    set host(e) {
                        this._isInvalid || !this._isRelative || i.call(this, e, 'host')
                    },
                    get hostname() {
                        return this._host
                    },
                    set hostname(e) {
                        this._isInvalid || !this._isRelative || i.call(this, e, 'hostname')
                    },
                    get port() {
                        return this._port
                    },
                    set port(e) {
                        this._isInvalid || !this._isRelative || i.call(this, e, 'port')
                    },
                    get pathname() {
                        return this._isInvalid ? '' : this._isRelative ? '/' + this._path.join('/') : this._schemeData
                    },
                    set pathname(e) {
                        this._isInvalid || !this._isRelative || (this._path = [], i.call(this, e, 'relative path start'))
                    },
                    get search() {
                        return this._isInvalid || !this._query || '?' == this._query ? '' : this._query
                    },
                    set search(e) {
                        this._isInvalid || !this._isRelative || (this._query = '?', '?' == e[0] && (e = e.slice(1)), i.call(this, e, 'query'))
                    },
                    get hash() {
                        return this._isInvalid || !this._fragment || '#' == this._fragment ? '' : this._fragment
                    },
                    set hash(e) {
                        this._isInvalid || (this._fragment = '#', '#' == e[0] && (e = e.slice(1)), i.call(this, e, 'fragment'))
                    },
                    get origin() {
                        var e;
                        if (this._isInvalid || !this._scheme) return '';
                        switch (this._scheme) {
                            case 'file':
                                return 'file://';
                            case 'data':
                            case 'javascript':
                            case 'mailto':
                                return 'null';
                        }
                        return e = this.host, e ? this._scheme + '://' + e : ''
                    }
                };
                var f = e.URL;
                return f && (s.createObjectURL = function() {
                    return f.createObjectURL.apply(f, arguments)
                }, s.revokeObjectURL = function(e) {
                    f.revokeObjectURL(e)
                }), s
            })
        }).call(t, n(51), n(402)(e))
    }, function(e) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], !e.children && (e.children = []), Object.defineProperty(e, 'loaded', {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, 'id', {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }])
});