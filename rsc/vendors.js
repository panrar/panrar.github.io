! function(e) {
    function t(n) {
        if (r[n]) return r[n].exports;
        var i = r[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var n = window.webpackJsonp;
    window.webpackJsonp = function(o, a) {
        for (var s, u, l = 0, c = []; l < o.length; l++) u = o[l], i[u] && c.push.apply(c, i[u]), i[u] = 0;
        for (s in a) e[s] = a[s];
        for (n && n(o, a); c.length;) c.shift().call(null, t);
        if (a[0]) return r[0] = 0, t(0)
    };
    var r = {},
        i = {
            1: 0
        };
    return t.e = function(e, n) {
        if (0 === i[e]) return n.call(null, t);
        if (void 0 !== i[e]) i[e].push(n);
        else {
            i[e] = [n];
            var r = document.getElementsByTagName("head")[0],
                o = document.createElement("script");
            o.type = "text/javascript", o.charset = "utf-8", o.async = !0, o.src = t.p + "" + e + "." + ({
                0: "index"
            }[e] || e) + ".js", r.appendChild(o)
        }
    }, t.m = e, t.c = r, t.p = "./dist/", t(0)
}([function(e, t, n) {
    e.exports = n(2)
}, , function(e, t, n) {
    var r, i;
    /*!
     * jQuery JavaScript Library v1.12.4
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2016-05-20T17:17Z
     */
    ! function(t, n) {
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function(n, o) {
        function a(e) {
            var t = !!e && "length" in e && e.length,
                n = ye.type(e);
            return "function" !== n && !ye.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function s(e, t, n) {
            if (ye.isFunction(t)) return ye.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
            if (t.nodeType) return ye.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (Se.test(t)) return ye.filter(t, e, n);
                t = ye.filter(t, e)
            }
            return ye.grep(e, function(e) {
                return ye.inArray(e, t) > -1 !== n
            })
        }

        function u(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function l(e) {
            var t = {};
            return ye.each(e.match(qe) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function c() {
            se.addEventListener ? (se.removeEventListener("DOMContentLoaded", f), n.removeEventListener("load", f)) : (se.detachEvent("onreadystatechange", f), n.detachEvent("onload", f))
        }

        function f() {
            (se.addEventListener || "load" === n.event.type || "complete" === se.readyState) && (c(), ye.ready())
        }

        function d(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var r = "data-" + t.replace(Re, "-$1").toLowerCase();
                if (n = e.getAttribute(r), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Oe.test(n) ? ye.parseJSON(n) : n)
                    } catch (e) {}
                    ye.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function p(e) {
            var t;
            for (t in e)
                if (("data" !== t || !ye.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function h(e, t, n, r) {
            if (Me(e)) {
                var i, o, a = ye.expando,
                    s = e.nodeType,
                    u = s ? ye.cache : e,
                    l = s ? e[a] : e[a] && a;
                if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = ae.pop() || ye.guid++ : a), u[l] || (u[l] = s ? {} : {
                    toJSON: ye.noop
                }), "object" != typeof t && "function" != typeof t || (r ? u[l] = ye.extend(u[l], t) : u[l].data = ye.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ye.camelCase(t)] = n), "string" == typeof t ? (i = o[t], null == i && (i = o[ye.camelCase(t)])) : i = o, i
            }
        }

        function g(e, t, n) {
            if (Me(e)) {
                var r, i, o = e.nodeType,
                    a = o ? ye.cache : e,
                    s = o ? e[ye.expando] : ye.expando;
                if (a[s]) {
                    if (t && (r = n ? a[s] : a[s].data)) {
                        ye.isArray(t) ? t = t.concat(ye.map(t, ye.camelCase)) : t in r ? t = [t] : (t = ye.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                        for (; i--;) delete r[t[i]];
                        if (n ? !p(r) : !ye.isEmptyObject(r)) return
                    }(n || (delete a[s].data, p(a[s]))) && (o ? ye.cleanData([e], !0) : ge.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
                }
            }
        }

        function m(e, t, n, r) {
            var i, o = 1,
                a = 20,
                s = r ? function() {
                    return r.cur()
                } : function() {
                    return ye.css(e, t, "")
                },
                u = s(),
                l = n && n[3] || (ye.cssNumber[t] ? "" : "px"),
                c = (ye.cssNumber[t] || "px" !== l && +u) && Be.exec(ye.css(e, t));
            if (c && c[3] !== l) {
                l = l || c[3], n = n || [], c = +u || 1;
                do o = o || ".5", c /= o, ye.style(e, t, c + l); while (o !== (o = s() / u) && 1 !== o && --a)
            }
            return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
        }

        function y(e) {
            var t = Je.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function v(e, t) {
            var n, r, i = 0,
                o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
            if (!o)
                for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || ye.nodeName(r, t) ? o.push(r) : ye.merge(o, v(r, t));
            return void 0 === t || t && ye.nodeName(e, t) ? ye.merge([e], o) : o
        }

        function x(e, t) {
            for (var n, r = 0; null != (n = e[r]); r++) ye._data(n, "globalEval", !t || ye._data(t[r], "globalEval"))
        }

        function b(e) {
            ze.test(e.type) && (e.defaultChecked = e.checked)
        }

        function w(e, t, n, r, i) {
            for (var o, a, s, u, l, c, f, d = e.length, p = y(t), h = [], g = 0; g < d; g++)
                if (a = e[g], a || 0 === a)
                    if ("object" === ye.type(a)) ye.merge(h, a.nodeType ? [a] : a);
                    else if (Ge.test(a)) {
                for (u = u || p.appendChild(t.createElement("div")), l = (Xe.exec(a) || ["", ""])[1].toLowerCase(), f = Ye[l] || Ye._default, u.innerHTML = f[1] + ye.htmlPrefilter(a) + f[2], o = f[0]; o--;) u = u.lastChild;
                if (!ge.leadingWhitespace && Ve.test(a) && h.push(t.createTextNode(Ve.exec(a)[0])), !ge.tbody)
                    for (a = "table" !== l || Qe.test(a) ? "<table>" !== f[1] || Qe.test(a) ? 0 : u : u.firstChild, o = a && a.childNodes.length; o--;) ye.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
                for (ye.merge(h, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
                u = p.lastChild
            } else h.push(t.createTextNode(a));
            for (u && p.removeChild(u), ge.appendChecked || ye.grep(v(h, "input"), b), g = 0; a = h[g++];)
                if (r && ye.inArray(a, r) > -1) i && i.push(a);
                else if (s = ye.contains(a.ownerDocument, a), u = v(p.appendChild(a), "script"), s && x(u), n)
                for (o = 0; a = u[o++];) Ue.test(a.type || "") && n.push(a);
            return u = null, p
        }

        function T() {
            return !0
        }

        function C() {
            return !1
        }

        function E() {
            try {
                return se.activeElement
            } catch (e) {}
        }

        function N(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
                "string" != typeof n && (r = r || n, n = void 0);
                for (s in t) N(e, s, n, r, t[s], o);
                return e
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = C;
            else if (!i) return e;
            return 1 === o && (a = i, i = function(e) {
                return ye().off(e), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = ye.guid++)), e.each(function() {
                ye.event.add(this, t, i, r, n)
            })
        }

        function k(e, t) {
            return ye.nodeName(e, "table") && ye.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function S(e) {
            return e.type = (null !== ye.find.attr(e, "type")) + "/" + e.type, e
        }

        function A(e) {
            var t = ut.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function D(e, t) {
            if (1 === t.nodeType && ye.hasData(e)) {
                var n, r, i, o = ye._data(e),
                    a = ye._data(t, o),
                    s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (r = 0, i = s[n].length; r < i; r++) ye.event.add(t, n, s[n][r])
                }
                a.data && (a.data = ye.extend({}, a.data))
            }
        }

        function j(e, t) {
            var n, r, i;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ge.noCloneEvent && t[ye.expando]) {
                    i = ye._data(t);
                    for (r in i.events) ye.removeEvent(t, r, i.handle);
                    t.removeAttribute(ye.expando)
                }
                "script" === n && t.text !== e.text ? (S(t).text = e.text, A(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ge.html5Clone && e.innerHTML && !ye.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && ze.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }

        function L(e, t, n, r) {
            t = le.apply([], t);
            var i, o, a, s, u, l, c = 0,
                f = e.length,
                d = f - 1,
                p = t[0],
                h = ye.isFunction(p);
            if (h || f > 1 && "string" == typeof p && !ge.checkClone && st.test(p)) return e.each(function(i) {
                var o = e.eq(i);
                h && (t[0] = p.call(this, i, o.html())), L(o, t, n, r)
            });
            if (f && (l = w(t, e[0].ownerDocument, !1, e, r), i = l.firstChild, 1 === l.childNodes.length && (l = i), i || r)) {
                for (s = ye.map(v(l, "script"), S), a = s.length; c < f; c++) o = l, c !== d && (o = ye.clone(o, !0, !0), a && ye.merge(s, v(o, "script"))), n.call(e[c], o, c);
                if (a)
                    for (u = s[s.length - 1].ownerDocument, ye.map(s, A), c = 0; c < a; c++) o = s[c], Ue.test(o.type || "") && !ye._data(o, "globalEval") && ye.contains(u, o) && (o.src ? ye._evalUrl && ye._evalUrl(o.src) : ye.globalEval((o.text || o.textContent || o.innerHTML || "").replace(lt, "")));
                l = i = null
            }
            return e
        }

        function H(e, t, n) {
            for (var r, i = t ? ye.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ye.cleanData(v(r)), r.parentNode && (n && ye.contains(r.ownerDocument, r) && x(v(r, "script")), r.parentNode.removeChild(r));
            return e
        }

        function q(e, t) {
            var n = ye(t.createElement(e)).appendTo(t.body),
                r = ye.css(n[0], "display");
            return n.detach(), r
        }

        function _(e) {
            var t = se,
                n = pt[e];
            return n || (n = q(e, t), "none" !== n && n || (dt = (dt || ye("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (dt[0].contentWindow || dt[0].contentDocument).document, t.write(), t.close(), n = q(e, t), dt.detach()), pt[e] = n), n
        }

        function F(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function M(e) {
            if (e in At) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = St.length; n--;)
                if (e = St[n] + t, e in At) return e
        }

        function O(e, t) {
            for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) r = e[a], r.style && (o[a] = ye._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ie(r) && (o[a] = ye._data(r, "olddisplay", _(r.nodeName)))) : (i = Ie(r), (n && "none" !== n || !i) && ye._data(r, "olddisplay", i ? n : ye.css(r, "display"))));
            for (a = 0; a < s; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function R(e, t, n) {
            var r = Et.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function P(e, t, n, r, i) {
            for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += ye.css(e, n + We[o], !0, i)), r ? ("content" === n && (a -= ye.css(e, "padding" + We[o], !0, i)), "margin" !== n && (a -= ye.css(e, "border" + We[o] + "Width", !0, i))) : (a += ye.css(e, "padding" + We[o], !0, i), "padding" !== n && (a += ye.css(e, "border" + We[o] + "Width", !0, i)));
            return a
        }

        function B(e, t, n) {
            var r = !0,
                i = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = vt(e),
                a = ge.boxSizing && "border-box" === ye.css(e, "boxSizing", !1, o);
            if (i <= 0 || null == i) {
                if (i = xt(e, t, o), (i < 0 || null == i) && (i = e.style[t]), gt.test(i)) return i;
                r = a && (ge.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + P(e, t, n || (a ? "border" : "content"), r, o) + "px"
        }

        function W(e, t, n, r, i) {
            return new W.prototype.init(e, t, n, r, i)
        }

        function I() {
            return n.setTimeout(function() {
                Dt = void 0
            }), Dt = ye.now()
        }

        function $(e, t) {
            var n, r = {
                    height: e
                },
                i = 0;
            for (t = t ? 1 : 0; i < 4; i += 2 - t) n = We[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function z(e, t, n) {
            for (var r, i = (V.tweeners[t] || []).concat(V.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                if (r = i[o].call(n, t, e)) return r
        }

        function X(e, t, n) {
            var r, i, o, a, s, u, l, c, f = this,
                d = {},
                p = e.style,
                h = e.nodeType && Ie(e),
                g = ye._data(e, "fxshow");
            n.queue || (s = ye._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
                s.unqueued || u()
            }), s.unqueued++, f.always(function() {
                f.always(function() {
                    s.unqueued--, ye.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = ye.css(e, "display"), c = "none" === l ? ye._data(e, "olddisplay") || _(e.nodeName) : l, "inline" === c && "none" === ye.css(e, "float") && (ge.inlineBlockNeedsLayout && "inline" !== _(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ge.shrinkWrapBlocks() || f.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (r in t)
                if (i = t[r], Lt.exec(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r]) continue;
                        h = !0
                    }
                    d[r] = g && g[r] || ye.style(e, r)
                } else l = void 0;
            if (ye.isEmptyObject(d)) "inline" === ("none" === l ? _(e.nodeName) : l) && (p.display = l);
            else {
                g ? "hidden" in g && (h = g.hidden) : g = ye._data(e, "fxshow", {}), o && (g.hidden = !h), h ? ye(e).show() : f.done(function() {
                    ye(e).hide()
                }), f.done(function() {
                    var t;
                    ye._removeData(e, "fxshow");
                    for (t in d) ye.style(e, t, d[t])
                });
                for (r in d) a = z(h ? g[r] : 0, r, f), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }

        function U(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (r = ye.camelCase(n), i = t[r], o = e[n], ye.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ye.cssHooks[r], a && "expand" in a) {
                    o = a.expand(o), delete e[r];
                    for (n in o) n in e || (e[n] = o[n], t[n] = i)
                } else t[r] = i
        }

        function V(e, t, n) {
            var r, i, o = 0,
                a = V.prefilters.length,
                s = ye.Deferred().always(function() {
                    delete u.elem
                }),
                u = function() {
                    if (i) return !1;
                    for (var t = Dt || I(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++) l.tweens[a].run(o);
                    return s.notifyWith(e, [l, o, n]), o < 1 && u ? n : (s.resolveWith(e, [l]), !1)
                },
                l = s.promise({
                    elem: e,
                    props: ye.extend({}, t),
                    opts: ye.extend(!0, {
                        specialEasing: {},
                        easing: ye.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Dt || I(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = ye.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? l.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; n < r; n++) l.tweens[n].run(1);
                        return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                    }
                }),
                c = l.props;
            for (U(c, l.opts.specialEasing); o < a; o++)
                if (r = V.prefilters[o].call(l, e, c, l.opts)) return ye.isFunction(r.stop) && (ye._queueHooks(l.elem, l.opts.queue).stop = ye.proxy(r.stop, r)), r;
            return ye.map(c, z, l), ye.isFunction(l.opts.start) && l.opts.start.call(e, l), ye.fx.timer(ye.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }

        function J(e) {
            return ye.attr(e, "class") || ""
        }

        function Y(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                    o = t.toLowerCase().match(qe) || [];
                if (ye.isFunction(n))
                    for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function G(e, t, n, r) {
            function i(s) {
                var u;
                return o[s] = !0, ye.each(e[s] || [], function(e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
                }), u
            }
            var o = {},
                a = e === nn;
            return i(t.dataTypes[0]) || !o["*"] && i("*")
        }

        function Q(e, t) {
            var n, r, i = ye.ajaxSettings.flatOptions || {};
            for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
            return n && ye.extend(!0, e, n), e
        }

        function K(e, t, n) {
            for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                "*" === u[0];) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (a in s)
                    if (s[a] && s[a].test(i)) {
                        u.unshift(a);
                        break
                    }
            if (u[0] in n) o = u[0];
            else {
                for (a in n) {
                    if (!u[0] || e.converters[a + " " + u[0]]) {
                        o = a;
                        break
                    }
                    r || (r = a)
                }
                o = o || r
            }
            if (o) return o !== u[0] && u.unshift(o), n[o]
        }

        function Z(e, t, n, r) {
            var i, o, a, s, u, l = {},
                c = e.dataTypes.slice();
            if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
            for (o = c.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                    if ("*" === o) o = u;
                    else if ("*" !== u && u !== o) {
                if (a = l[u + " " + o] || l["* " + o], !a)
                    for (i in l)
                        if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                            a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && e.throws) t = a(t);
                    else try {
                        t = a(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: a ? e : "No conversion from " + u + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function ee(e) {
            return e.style && e.style.display || ye.css(e, "display")
        }

        function te(e) {
            if (!ye.contains(e.ownerDocument || se, e)) return !0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === ee(e) || "hidden" === e.type) return !0;
                e = e.parentNode
            }
            return !1
        }

        function ne(e, t, n, r) {
            var i;
            if (ye.isArray(t)) ye.each(t, function(t, i) {
                n || un.test(e) ? r(e, i) : ne(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
            else if (n || "object" !== ye.type(t)) r(e, t);
            else
                for (i in t) ne(e + "[" + i + "]", t[i], n, r)
        }

        function re() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        }

        function ie() {
            try {
                return new n.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function oe(e) {
            return ye.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var ae = [],
            se = n.document,
            ue = ae.slice,
            le = ae.concat,
            ce = ae.push,
            fe = ae.indexOf,
            de = {},
            pe = de.toString,
            he = de.hasOwnProperty,
            ge = {},
            me = "1.12.4",
            ye = function(e, t) {
                return new ye.fn.init(e, t)
            },
            ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            xe = /^-ms-/,
            be = /-([\da-z])/gi,
            we = function(e, t) {
                return t.toUpperCase()
            };
        ye.fn = ye.prototype = {
            jquery: me,
            constructor: ye,
            selector: "",
            length: 0,
            toArray: function() {
                return ue.call(this)
            },
            get: function(e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : ue.call(this)
            },
            pushStack: function(e) {
                var t = ye.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e) {
                return ye.each(this, e)
            },
            map: function(e) {
                return this.pushStack(ye.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(ue.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ce,
            sort: ae.sort,
            splice: ae.splice
        }, ye.extend = ye.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || ye.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                if (null != (i = arguments[s]))
                    for (r in i) e = a[r], n = i[r], a !== n && (l && n && (ye.isPlainObject(n) || (t = ye.isArray(n))) ? (t ? (t = !1, o = e && ye.isArray(e) ? e : []) : o = e && ye.isPlainObject(e) ? e : {}, a[r] = ye.extend(l, o, n)) : void 0 !== n && (a[r] = n));
            return a
        }, ye.extend({
            expando: "jQuery" + (me + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === ye.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === ye.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                var t = e && e.toString();
                return !ye.isArray(e) && t - parseFloat(t) + 1 >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== ye.type(e) || e.nodeType || ye.isWindow(e)) return !1;
                try {
                    if (e.constructor && !he.call(e, "constructor") && !he.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                if (!ge.ownFirst)
                    for (t in e) return he.call(e, t);
                for (t in e);
                return void 0 === t || he.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? de[pe.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                e && ye.trim(e) && (n.execScript || function(e) {
                    n.eval.call(n, e)
                })(e)
            },
            camelCase: function(e) {
                return e.replace(xe, "ms-").replace(be, we)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, r = 0;
                if (a(e))
                    for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
                else
                    for (r in e)
                        if (t.call(e[r], r, e[r]) === !1) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ve, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (a(Object(e)) ? ye.merge(n, "string" == typeof e ? [e] : e) : ce.call(n, e)), n
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (fe) return fe.call(t, e, n);
                    for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n;) e[i++] = t[r++];
                if (n !== n)
                    for (; void 0 !== t[r];) e[i++] = t[r++];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
                return i
            },
            map: function(e, t, n) {
                var r, i, o = 0,
                    s = [];
                if (a(e))
                    for (r = e.length; o < r; o++) i = t(e[o], o, n), null != i && s.push(i);
                else
                    for (o in e) i = t(e[o], o, n), null != i && s.push(i);
                return le.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                if ("string" == typeof t && (i = e[t], t = e, e = i), ye.isFunction(e)) return n = ue.call(arguments, 2), r = function() {
                    return e.apply(t || this, n.concat(ue.call(arguments)))
                }, r.guid = e.guid = e.guid || ye.guid++, r
            },
            now: function() {
                return +new Date
            },
            support: ge
        }), "function" == typeof Symbol && (ye.fn[Symbol.iterator] = ae[Symbol.iterator]), ye.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            de["[object " + t + "]"] = t.toLowerCase()
        });
        var Te =
            /*!
             * Sizzle CSS Selector Engine v2.2.1
             * http://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2015-10-17
             */
            function(e) {
                function t(e, t, n, r) {
                    var i, o, a, s, u, l, f, p, h = t && t.ownerDocument,
                        g = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
                    if (!r && ((t ? t.ownerDocument || t : B) !== H && L(t), t = t || H, _)) {
                        if (11 !== g && (l = ye.exec(e)))
                            if (i = l[1]) {
                                if (9 === g) {
                                    if (!(a = t.getElementById(i))) return n;
                                    if (a.id === i) return n.push(a), n
                                } else if (h && (a = h.getElementById(i)) && R(t, a) && a.id === i) return n.push(a), n
                            } else {
                                if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                                if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(i)), n
                            }
                        if (w.qsa && !X[e + " "] && (!F || !F.test(e))) {
                            if (1 !== g) h = t, p = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((s = t.getAttribute("id")) ? s = s.replace(xe, "\\$&") : t.setAttribute("id", s = P), f = N(e), o = f.length, u = de.test(s) ? "#" + s : "[id='" + s + "']"; o--;) f[o] = u + " " + d(f[o]);
                                p = f.join(","), h = ve.test(e) && c(t.parentNode) || t
                            }
                            if (p) try {
                                return K.apply(n, h.querySelectorAll(p)), n
                            } catch (e) {} finally {
                                s === P && t.removeAttribute("id")
                            }
                        }
                    }
                    return S(e.replace(se, "$1"), t, n, r)
                }

                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }
                    var t = [];
                    return e
                }

                function r(e) {
                    return e[P] = !0, e
                }

                function i(e) {
                    var t = H.createElement("div");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function o(e, t) {
                    for (var n = e.split("|"), r = n.length; r--;) T.attrHandle[n[r]] = t
                }

                function a(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function u(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function l(e) {
                    return r(function(t) {
                        return t = +t, r(function(n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function c(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function f() {}

                function d(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function p(e, t, n) {
                    var r = t.dir,
                        i = n && "parentNode" === r,
                        o = I++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || i) return e(t, n, o)
                    } : function(t, n, a) {
                        var s, u, l, c = [W, o];
                        if (a) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || i) && e(t, n, a)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || i) {
                                    if (l = t[P] || (t[P] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = u[r]) && s[0] === W && s[1] === o) return c[2] = s[2];
                                    if (u[r] = c, c[2] = e(t, n, a)) return !0
                                }
                    }
                }

                function h(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function g(e, n, r) {
                    for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
                    return r
                }

                function m(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                    return a
                }

                function y(e, t, n, i, o, a) {
                    return i && !i[P] && (i = y(i)), o && !o[P] && (o = y(o, a)), r(function(r, a, s, u) {
                        var l, c, f, d = [],
                            p = [],
                            h = a.length,
                            y = r || g(t || "*", s.nodeType ? [s] : s, []),
                            v = !e || !r && t ? y : m(y, d, e, s, u),
                            x = n ? o || (r ? e : h || i) ? [] : a : v;
                        if (n && n(v, x, s, u), i)
                            for (l = m(x, p), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (x[p[c]] = !(v[p[c]] = f));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (l = [], c = x.length; c--;)(f = x[c]) && l.push(v[c] = f);
                                    o(null, x = [], l, u)
                                }
                                for (c = x.length; c--;)(f = x[c]) && (l = o ? ee(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
                            }
                        } else x = m(x === a ? x.splice(h, x.length) : x), o ? o(null, a, x, u) : K.apply(a, x)
                    })
                }

                function v(e) {
                    for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = p(function(e) {
                            return e === t
                        }, a, !0), l = p(function(e) {
                            return ee(t, e) > -1
                        }, a, !0), c = [function(e, n, r) {
                            var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                            return t = null, i
                        }]; s < i; s++)
                        if (n = T.relative[e[s].type]) c = [p(h(c), n)];
                        else {
                            if (n = T.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                                for (r = ++s; r < i && !T.relative[e[r].type]; r++);
                                return y(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(se, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && d(e))
                            }
                            c.push(n)
                        }
                    return h(c)
                }

                function x(e, n) {
                    var i = n.length > 0,
                        o = e.length > 0,
                        a = function(r, a, s, u, l) {
                            var c, f, d, p = 0,
                                h = "0",
                                g = r && [],
                                y = [],
                                v = A,
                                x = r || o && T.find.TAG("*", l),
                                b = W += null == v ? 1 : Math.random() || .1,
                                w = x.length;
                            for (l && (A = a === H || a || l); h !== w && null != (c = x[h]); h++) {
                                if (o && c) {
                                    for (f = 0, a || c.ownerDocument === H || (L(c), s = !_); d = e[f++];)
                                        if (d(c, a || H, s)) {
                                            u.push(c);
                                            break
                                        }
                                    l && (W = b)
                                }
                                i && ((c = !d && c) && p--, r && g.push(c))
                            }
                            if (p += h, i && h !== p) {
                                for (f = 0; d = n[f++];) d(g, y, a, s);
                                if (r) {
                                    if (p > 0)
                                        for (; h--;) g[h] || y[h] || (y[h] = G.call(u));
                                    y = m(y)
                                }
                                K.apply(u, y), l && !r && y.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                            }
                            return l && (W = b, A = v), g
                        };
                    return i ? r(a) : a
                }
                var b, w, T, C, E, N, k, S, A, D, j, L, H, q, _, F, M, O, R, P = "sizzle" + 1 * new Date,
                    B = e.document,
                    W = 0,
                    I = 0,
                    $ = n(),
                    z = n(),
                    X = n(),
                    U = function(e, t) {
                        return e === t && (j = !0), 0
                    },
                    V = 1 << 31,
                    J = {}.hasOwnProperty,
                    Y = [],
                    G = Y.pop,
                    Q = Y.push,
                    K = Y.push,
                    Z = Y.slice,
                    ee = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ne = "[\\x20\\t\\r\\n\\f]",
                    re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
                    oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
                    ae = new RegExp(ne + "+", "g"),
                    se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                    ue = new RegExp("^" + ne + "*," + ne + "*"),
                    le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                    ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                    fe = new RegExp(oe),
                    de = new RegExp("^" + re + "$"),
                    pe = {
                        ID: new RegExp("^#(" + re + ")"),
                        CLASS: new RegExp("^\\.(" + re + ")"),
                        TAG: new RegExp("^(" + re + "|[*])"),
                        ATTR: new RegExp("^" + ie),
                        PSEUDO: new RegExp("^" + oe),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    },
                    he = /^(?:input|select|textarea|button)$/i,
                    ge = /^h\d$/i,
                    me = /^[^{]+\{\s*\[native \w/,
                    ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ve = /[+~]/,
                    xe = /'|\\/g,
                    be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                    we = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    Te = function() {
                        L()
                    };
                try {
                    K.apply(Y = Z.call(B.childNodes), B.childNodes), Y[B.childNodes.length].nodeType
                } catch (e) {
                    K = {
                        apply: Y.length ? function(e, t) {
                            Q.apply(e, Z.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }
                w = t.support = {}, E = t.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, L = t.setDocument = function(e) {
                    var t, n, r = e ? e.ownerDocument || e : B;
                    return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, q = H.documentElement, _ = !E(H), (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), w.attributes = i(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), w.getElementsByTagName = i(function(e) {
                        return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length
                    }), w.getElementsByClassName = me.test(H.getElementsByClassName), w.getById = i(function(e) {
                        return q.appendChild(e).id = P, !H.getElementsByName || !H.getElementsByName(P).length
                    }), w.getById ? (T.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && _) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }, T.filter.ID = function(e) {
                        var t = e.replace(be, we);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete T.find.ID, T.filter.ID = function(e) {
                        var t = e.replace(be, we);
                        return function(e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), T.find.TAG = w.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, T.find.CLASS = w.getElementsByClassName && function(e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && _) return t.getElementsByClassName(e)
                    }, M = [], F = [], (w.qsa = me.test(H.querySelectorAll)) && (i(function(e) {
                        q.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + P + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + P + "+*").length || F.push(".#.+[+~]")
                    }), i(function(e) {
                        var t = H.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
                    })), (w.matchesSelector = me.test(O = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) {
                        w.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), M.push("!=", oe)
                    }), F = F.length && new RegExp(F.join("|")), M = M.length && new RegExp(M.join("|")), t = me.test(q.compareDocumentPosition), R = t || me.test(q.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, U = t ? function(e, t) {
                        if (e === t) return j = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === B && R(B, e) ? -1 : t === H || t.ownerDocument === B && R(B, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return j = !0, 0;
                        var n, r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            s = [e],
                            u = [t];
                        if (!i || !o) return e === H ? -1 : t === H ? 1 : i ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                        if (i === o) return a(e, t);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (n = t; n = n.parentNode;) u.unshift(n);
                        for (; s[r] === u[r];) r++;
                        return r ? a(s[r], u[r]) : s[r] === B ? -1 : u[r] === B ? 1 : 0
                    }, H) : H
                }, t.matches = function(e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function(e, n) {
                    if ((e.ownerDocument || e) !== H && L(e), n = n.replace(ce, "='$1']"), w.matchesSelector && _ && !X[n + " "] && (!M || !M.test(n)) && (!F || !F.test(n))) try {
                        var r = O.call(e, n);
                        if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (e) {}
                    return t(n, H, null, [e]).length > 0
                }, t.contains = function(e, t) {
                    return (e.ownerDocument || e) !== H && L(e), R(e, t)
                }, t.attr = function(e, t) {
                    (e.ownerDocument || e) !== H && L(e);
                    var n = T.attrHandle[t.toLowerCase()],
                        r = n && J.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
                    return void 0 !== r ? r : w.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, t.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function(e) {
                    var t, n = [],
                        r = 0,
                        i = 0;
                    if (j = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), j) {
                        for (; t = e[i++];) t === e[i] && (r = n.push(i));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return D = null, e
                }, C = t.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += C(t);
                    return n
                }, T = t.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: pe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = N(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(be, we).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = $[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && $(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, n, r) {
                            return function(i) {
                                var o = t.attr(i, e);
                                return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, u) {
                                var l, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    y = s && t.nodeName.toLowerCase(),
                                    v = !u && !s,
                                    x = !1;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (d = t; d = d[g];)
                                                if (s ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                        for (d = m, f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === W && l[1], x = p && l[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (x = p = 0) || h.pop();)
                                            if (1 === d.nodeType && ++x && d === t) {
                                                c[e] = [W, p, x];
                                                break
                                            }
                                    } else if (v && (d = t, f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === W && l[1], x = p), x === !1)
                                        for (;
                                            (d = ++p && d && d[g] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++x || (v && (f = d[P] || (d[P] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [W, x]), d !== t)););
                                    return x -= i, x === r || x % r === 0 && x / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, n) {
                            var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[P] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a])
                            }) : function(e) {
                                return o(e, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: r(function(e) {
                            var t = [],
                                n = [],
                                i = k(e.replace(se, "$1"));
                            return i[P] ? r(function(e, t, n, r) {
                                for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function(e, r, o) {
                                return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: r(function(e) {
                            return function(n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: r(function(e) {
                            return e = e.replace(be, we),
                                function(t) {
                                    return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                                }
                        }),
                        lang: r(function(e) {
                            return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === q
                        },
                        focus: function(e) {
                            return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !T.pseudos.empty(e)
                        },
                        header: function(e) {
                            return ge.test(e.nodeName)
                        },
                        input: function(e) {
                            return he.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: l(function() {
                            return [0]
                        }),
                        last: l(function(e, t) {
                            return [t - 1]
                        }),
                        eq: l(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: l(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: l(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: l(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: l(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }, T.pseudos.nth = T.pseudos.eq;
                for (b in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) T.pseudos[b] = s(b);
                for (b in {
                        submit: !0,
                        reset: !0
                    }) T.pseudos[b] = u(b);
                return f.prototype = T.filters = T.pseudos, T.setFilters = new f, N = t.tokenize = function(e, n) {
                    var r, i, o, a, s, u, l, c = z[e + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for (s = e, u = [], l = T.preFilter; s;) {
                        r && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), o.push({
                            value: r,
                            type: i[0].replace(se, " ")
                        }), s = s.slice(r.length));
                        for (a in T.filter) !(i = pe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                            value: r,
                            type: a,
                            matches: i
                        }), s = s.slice(r.length));
                        if (!r) break
                    }
                    return n ? s.length : s ? t.error(e) : z(e, u).slice(0)
                }, k = t.compile = function(e, t) {
                    var n, r = [],
                        i = [],
                        o = X[e + " "];
                    if (!o) {
                        for (t || (t = N(e)), n = t.length; n--;) o = v(t[n]), o[P] ? r.push(o) : i.push(o);
                        o = X(e, x(i, r)), o.selector = e
                    }
                    return o
                }, S = t.select = function(e, t, n, r) {
                    var i, o, a, s, u, l = "function" == typeof e && e,
                        f = !r && N(e = l.selector || e);
                    if (n = n || [], 1 === f.length) {
                        if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && _ && T.relative[o[1].type]) {
                            if (t = (T.find.ID(a.matches[0].replace(be, we), t) || [])[0], !t) return n;
                            l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                        }
                        for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);)
                            if ((u = T.find[s]) && (r = u(a.matches[0].replace(be, we), ve.test(o[0].type) && c(t.parentNode) || t))) {
                                if (o.splice(i, 1), e = r.length && d(o), !e) return K.apply(n, r), n;
                                break
                            }
                    }
                    return (l || k(e, f))(r, t, !_, n, !t || ve.test(e) && c(t.parentNode) || t), n
                }, w.sortStable = P.split("").sort(U).join("") === P, w.detectDuplicates = !!j, L(), w.sortDetached = i(function(e) {
                    return 1 & e.compareDocumentPosition(H.createElement("div"))
                }), i(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), w.attributes && i(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || o("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), i(function(e) {
                    return null == e.getAttribute("disabled")
                }) || o(te, function(e, t, n) {
                    var r;
                    if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), t
            }(n);
        ye.find = Te, ye.expr = Te.selectors, ye.expr[":"] = ye.expr.pseudos, ye.uniqueSort = ye.unique = Te.uniqueSort, ye.text = Te.getText, ye.isXMLDoc = Te.isXML, ye.contains = Te.contains;
        var Ce = function(e, t, n) {
                for (var r = [], i = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (i && ye(e).is(n)) break;
                        r.push(e)
                    }
                return r
            },
            Ee = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            Ne = ye.expr.match.needsContext,
            ke = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            Se = /^.[^:#\[\.,]*$/;
        ye.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ye.find.matchesSelector(r, e) ? [r] : [] : ye.find.matches(e, ye.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, ye.fn.extend({
            find: function(e) {
                var t, n = [],
                    r = this,
                    i = r.length;
                if ("string" != typeof e) return this.pushStack(ye(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (ye.contains(r[t], this)) return !0
                }));
                for (t = 0; t < i; t++) ye.find(e, r[t], n);
                return n = this.pushStack(i > 1 ? ye.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(s(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(s(this, e || [], !0))
            },
            is: function(e) {
                return !!s(this, "string" == typeof e && Ne.test(e) ? ye(e) : e || [], !1).length
            }
        });
        var Ae, De = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            je = ye.fn.init = function(e, t, n) {
                var r, i;
                if (!e) return this;
                if (n = n || Ae, "string" == typeof e) {
                    if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : De.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof ye ? t[0] : t, ye.merge(this, ye.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), ke.test(r[1]) && ye.isPlainObject(t))
                            for (r in t) ye.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    if (i = se.getElementById(r[2]), i && i.parentNode) {
                        if (i.id !== r[2]) return Ae.find(e);
                        this.length = 1, this[0] = i
                    }
                    return this.context = se, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ye.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(ye) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ye.makeArray(e, this))
            };
        je.prototype = ye.fn, Ae = ye(se);
        var Le = /^(?:parents|prev(?:Until|All))/,
            He = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ye.fn.extend({
            has: function(e) {
                var t, n = ye(e, this),
                    r = n.length;
                return this.filter(function() {
                    for (t = 0; t < r; t++)
                        if (ye.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, r = 0, i = this.length, o = [], a = Ne.test(e) || "string" != typeof e ? ye(e, t || this.context) : 0; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ye.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? ye.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ye.inArray(this[0], ye(e)) : ye.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(ye.uniqueSort(ye.merge(this.get(), ye(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ye.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return Ce(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return Ce(e, "parentNode", n)
            },
            next: function(e) {
                return u(e, "nextSibling")
            },
            prev: function(e) {
                return u(e, "previousSibling")
            },
            nextAll: function(e) {
                return Ce(e, "nextSibling")
            },
            prevAll: function(e) {
                return Ce(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return Ce(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return Ce(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Ee((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Ee(e.firstChild)
            },
            contents: function(e) {
                return ye.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ye.merge([], e.childNodes)
            }
        }, function(e, t) {
            ye.fn[e] = function(n, r) {
                var i = ye.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ye.filter(r, i)), this.length > 1 && (He[e] || (i = ye.uniqueSort(i)), Le.test(e) && (i = i.reverse())), this.pushStack(i)
            }
        });
        var qe = /\S+/g;
        ye.Callbacks = function(e) {
            e = "string" == typeof e ? l(e) : ye.extend({}, e);
            var t, n, r, i, o = [],
                a = [],
                s = -1,
                u = function() {
                    for (i = e.once, r = t = !0; a.length; s = -1)
                        for (n = a.shift(); ++s < o.length;) o[s].apply(n[0], n[1]) === !1 && e.stopOnFalse && (s = o.length, n = !1);
                    e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                },
                c = {
                    add: function() {
                        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                            ye.each(n, function(n, r) {
                                ye.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== ye.type(r) && t(r)
                            })
                        }(arguments), n && !t && u()), this
                    },
                    remove: function() {
                        return ye.each(arguments, function(e, t) {
                            for (var n;
                                (n = ye.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                        }), this
                    },
                    has: function(e) {
                        return e ? ye.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []), this
                    },
                    disable: function() {
                        return i = a = [], o = n = "", this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return i = !0, n || c.disable(), this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(e, n) {
                        return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return c
        }, ye.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", ye.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ye.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ye.Callbacks("memory")]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return ye.Deferred(function(n) {
                                ye.each(t, function(t, o) {
                                    var a = ye.isFunction(e[t]) && e[t];
                                    i[o[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && ye.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? ye.extend(e, r) : r
                        }
                    },
                    i = {};
                return r.pipe = r.then, ye.each(t, function(e, o) {
                    var a = o[2],
                        s = o[3];
                    r[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                        return i[o[0] + "With"](this === i ? r : this, arguments), this
                    }, i[o[0] + "With"] = a.fireWith
                }), r.promise(i), e && e.call(i, i), i
            },
            when: function(e) {
                var t, n, r, i = 0,
                    o = ue.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && ye.isFunction(e.promise) ? a : 0,
                    u = 1 === s ? e : ye.Deferred(),
                    l = function(e, n, r) {
                        return function(i) {
                            n[e] = this, r[e] = arguments.length > 1 ? ue.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) o[i] && ye.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --s;
                return s || u.resolveWith(r, o), u.promise()
            }
        });
        var _e;
        ye.fn.ready = function(e) {
            return ye.ready.promise().done(e), this
        }, ye.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? ye.readyWait++ : ye.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --ye.readyWait : ye.isReady) || (ye.isReady = !0, e !== !0 && --ye.readyWait > 0 || (_e.resolveWith(se, [ye]), ye.fn.triggerHandler && (ye(se).triggerHandler("ready"), ye(se).off("ready"))))
            }
        }), ye.ready.promise = function(e) {
            if (!_e)
                if (_e = ye.Deferred(), "complete" === se.readyState || "loading" !== se.readyState && !se.documentElement.doScroll) n.setTimeout(ye.ready);
                else if (se.addEventListener) se.addEventListener("DOMContentLoaded", f), n.addEventListener("load", f);
            else {
                se.attachEvent("onreadystatechange", f), n.attachEvent("onload", f);
                var t = !1;
                try {
                    t = null == n.frameElement && se.documentElement
                } catch (e) {}
                t && t.doScroll && ! function e() {
                    if (!ye.isReady) {
                        try {
                            t.doScroll("left")
                        } catch (t) {
                            return n.setTimeout(e, 50)
                        }
                        c(), ye.ready()
                    }
                }()
            }
            return _e.promise(e)
        }, ye.ready.promise();
        var Fe;
        for (Fe in ye(ge)) break;
        ge.ownFirst = "0" === Fe, ge.inlineBlockNeedsLayout = !1, ye(function() {
                var e, t, n, r;
                n = se.getElementsByTagName("body")[0], n && n.style && (t = se.createElement("div"), r = se.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ge.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
            }),
            function() {
                var e = se.createElement("div");
                ge.deleteExpando = !0;
                try {
                    delete e.test
                } catch (e) {
                    ge.deleteExpando = !1
                }
                e = null
            }();
        var Me = function(e) {
                var t = ye.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
            },
            Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Re = /([A-Z])/g;
        ye.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(e) {
                    return e = e.nodeType ? ye.cache[e[ye.expando]] : e[ye.expando], !!e && !p(e)
                },
                data: function(e, t, n) {
                    return h(e, t, n)
                },
                removeData: function(e, t) {
                    return g(e, t)
                },
                _data: function(e, t, n) {
                    return h(e, t, n, !0)
                },
                _removeData: function(e, t) {
                    return g(e, t, !0)
                }
            }), ye.fn.extend({
                data: function(e, t) {
                    var n, r, i, o = this[0],
                        a = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = ye.data(o), 1 === o.nodeType && !ye._data(o, "parsedAttrs"))) {
                            for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ye.camelCase(r.slice(5)), d(o, r, i[r])));
                            ye._data(o, "parsedAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof e ? this.each(function() {
                        ye.data(this, e)
                    }) : arguments.length > 1 ? this.each(function() {
                        ye.data(this, e, t)
                    }) : o ? d(o, e, ye.data(o, e)) : void 0
                },
                removeData: function(e) {
                    return this.each(function() {
                        ye.removeData(this, e)
                    })
                }
            }), ye.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = ye._data(e, t), n && (!r || ye.isArray(n) ? r = ye._data(e, t, ye.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = ye.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        o = ye._queueHooks(e, t),
                        a = function() {
                            ye.dequeue(e, t)
                        };
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return ye._data(e, n) || ye._data(e, n, {
                        empty: ye.Callbacks("once memory").add(function() {
                            ye._removeData(e, t + "queue"), ye._removeData(e, n)
                        })
                    })
                }
            }), ye.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ye.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = ye.queue(this, e, t);
                        ye._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ye.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        ye.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, r = 1,
                        i = ye.Deferred(),
                        o = this,
                        a = this.length,
                        s = function() {
                            --r || i.resolveWith(o, [o])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ye._data(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t)
                }
            }),
            function() {
                var e;
                ge.shrinkWrapBlocks = function() {
                    if (null != e) return e;
                    e = !1;
                    var t, n, r;
                    return n = se.getElementsByTagName("body")[0], n && n.style ? (t = se.createElement("div"), r = se.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(se.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
                }
            }();
        var Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Be = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$", "i"),
            We = ["Top", "Right", "Bottom", "Left"],
            Ie = function(e, t) {
                return e = t || e, "none" === ye.css(e, "display") || !ye.contains(e.ownerDocument, e)
            },
            $e = function(e, t, n, r, i, o, a) {
                var s = 0,
                    u = e.length,
                    l = null == n;
                if ("object" === ye.type(n)) {
                    i = !0;
                    for (s in n) $e(e, t, s, n[s], !0, o, a)
                } else if (void 0 !== r && (i = !0, ye.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                        return l.call(ye(e), n)
                    })), t))
                    for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
            },
            ze = /^(?:checkbox|radio)$/i,
            Xe = /<([\w:-]+)/,
            Ue = /^$|\/(?:java|ecma)script/i,
            Ve = /^\s+/,
            Je = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        ! function() {
            var e = se.createElement("div"),
                t = se.createDocumentFragment(),
                n = se.createElement("input");
            e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ge.leadingWhitespace = 3 === e.firstChild.nodeType, ge.tbody = !e.getElementsByTagName("tbody").length, ge.htmlSerialize = !!e.getElementsByTagName("link").length, ge.html5Clone = "<:nav></:nav>" !== se.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), ge.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", ge.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = se.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), ge.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ge.noCloneEvent = !!e.addEventListener, e[ye.expando] = 1, ge.attributes = !e.getAttribute(ye.expando)
        }();
        var Ye = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ge.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td;
        var Ge = /<|&#?\w+;/,
            Qe = /<tbody/i;
        ! function() {
            var e, t, r = se.createElement("div");
            for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) t = "on" + e, (ge[e] = t in n) || (r.setAttribute(t, "t"), ge[e] = r.attributes[t].expando === !1);
            r = null
        }();
        var Ke = /^(?:input|select|textarea)$/i,
            Ze = /^key/,
            et = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            tt = /^(?:focusinfocus|focusoutblur)$/,
            nt = /^([^.]*)(?:\.(.+)|)/;
        ye.event = {
            global: {},
            add: function(e, t, n, r, i) {
                var o, a, s, u, l, c, f, d, p, h, g, m = ye._data(e);
                if (m) {
                    for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = ye.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function(e) {
                            return "undefined" == typeof ye || e && ye.event.triggered === e.type ? void 0 : ye.event.dispatch.apply(c.elem, arguments)
                        }, c.elem = e), t = (t || "").match(qe) || [""], s = t.length; s--;) o = nt.exec(t[s]) || [], p = g = o[1], h = (o[2] || "").split(".").sort(), p && (l = ye.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = ye.event.special[p] || {}, f = ye.extend({
                        type: p,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && ye.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, u), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, l.setup && l.setup.call(e, r, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), ye.event.global[p] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, l, c, f, d, p, h, g, m = ye.hasData(e) && ye._data(e);
                if (m && (c = m.events)) {
                    for (t = (t || "").match(qe) || [""], l = t.length; l--;)
                        if (s = nt.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                            for (f = ye.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--;) a = d[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
                            u && !d.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ye.removeEvent(e, p, m.handle), delete c[p])
                        } else
                            for (p in c) ye.event.remove(e, p + t[l], n, r, !0);
                    ye.isEmptyObject(c) && (delete m.handle, ye._removeData(e, "events"))
                }
            },
            trigger: function(e, t, r, i) {
                var o, a, s, u, l, c, f, d = [r || se],
                    p = he.call(e, "type") ? e.type : e,
                    h = he.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = c = r = r || se, 3 !== r.nodeType && 8 !== r.nodeType && !tt.test(p + ye.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[ye.expando] ? e : new ye.Event(p, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : ye.makeArray(t, [e]), l = ye.event.special[p] || {}, i || !l.trigger || l.trigger.apply(r, t) !== !1)) {
                    if (!i && !l.noBubble && !ye.isWindow(r)) {
                        for (u = l.delegateType || p, tt.test(u + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), c = s;
                        c === (r.ownerDocument || se) && d.push(c.defaultView || c.parentWindow || n)
                    }
                    for (f = 0;
                        (s = d[f++]) && !e.isPropagationStopped();) e.type = f > 1 ? u : l.bindType || p, o = (ye._data(s, "events") || {})[e.type] && ye._data(s, "handle"), o && o.apply(s, t), o = a && s[a], o && o.apply && Me(s) && (e.result = o.apply(s, t), e.result === !1 && e.preventDefault());
                    if (e.type = p, !i && !e.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), t) === !1) && Me(r) && a && r[p] && !ye.isWindow(r)) {
                        c = r[a], c && (r[a] = null), ye.event.triggered = p;
                        try {
                            r[p]()
                        } catch (e) {}
                        ye.event.triggered = void 0, c && (r[a] = c)
                    }
                    return e.result
                }
            },
            dispatch: function(e) {
                e = ye.event.fix(e);
                var t, n, r, i, o, a = [],
                    s = ue.call(arguments),
                    u = (ye._data(this, "events") || {})[e.type] || [],
                    l = ye.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                    for (a = ye.event.handlers.call(this, e, u), t = 0;
                        (i = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = i.elem, n = 0;
                            (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((ye.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, a = [],
                    s = t.delegateCount,
                    u = e.target;
                if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; u != this; u = u.parentNode || this)
                        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                            for (r = [], n = 0; n < s; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? ye(i, this).index(u) > -1 : ye.find(i, this, null, [u]).length), r[i] && r.push(o);
                            r.length && a.push({
                                elem: u,
                                handlers: r
                            })
                        }
                return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            fix: function(e) {
                if (e[ye.expando]) return e;
                var t, n, r, i = e.type,
                    o = e,
                    a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = et.test(i) ? this.mouseHooks : Ze.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ye.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || se), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, r, i, o = t.button,
                        a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || se, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== E() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === E() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (ye.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    },
                    _default: function(e) {
                        return ye.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n) {
                var r = ye.extend(new ye.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                ye.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
            }
        }, ye.removeEvent = se.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        } : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
        }, ye.Event = function(e, t) {
            return this instanceof ye.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? T : C) : this.type = e, t && ye.extend(this, t), this.timeStamp = e && e.timeStamp || ye.now(), void(this[ye.expando] = !0)) : new ye.Event(e, t)
        }, ye.Event.prototype = {
            constructor: ye.Event,
            isDefaultPrevented: C,
            isPropagationStopped: C,
            isImmediatePropagationStopped: C,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = T, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = T, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = T, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ye.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            ye.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return i && (i === r || ye.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ge.submit || (ye.event.special.submit = {
            setup: function() {
                return !ye.nodeName(this, "form") && void ye.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = ye.nodeName(t, "input") || ye.nodeName(t, "button") ? ye.prop(t, "form") : void 0;
                    n && !ye._data(n, "submit") && (ye.event.add(n, "submit._submit", function(e) {
                        e._submitBubble = !0
                    }), ye._data(n, "submit", !0))
                })
            },
            postDispatch: function(e) {
                e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && ye.event.simulate("submit", this.parentNode, e))
            },
            teardown: function() {
                return !ye.nodeName(this, "form") && void ye.event.remove(this, "._submit")
            }
        }), ge.change || (ye.event.special.change = {
            setup: function() {
                return Ke.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ye.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                }), ye.event.add(this, "click._change", function(e) {
                    this._justChanged && !e.isTrigger && (this._justChanged = !1), ye.event.simulate("change", this, e)
                })), !1) : void ye.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Ke.test(t.nodeName) && !ye._data(t, "change") && (ye.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || ye.event.simulate("change", this.parentNode, e)
                    }), ye._data(t, "change", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return ye.event.remove(this, "._change"), !Ke.test(this.nodeName)
            }
        }), ge.focusin || ye.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                ye.event.simulate(t, e.target, ye.event.fix(e))
            };
            ye.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this,
                        i = ye._data(r, t);
                    i || r.addEventListener(e, n, !0), ye._data(r, t, (i || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this,
                        i = ye._data(r, t) - 1;
                    i ? ye._data(r, t, i) : (r.removeEventListener(e, n, !0), ye._removeData(r, t))
                }
            }
        }), ye.fn.extend({
            on: function(e, t, n, r) {
                return N(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return N(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ye(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = C), this.each(function() {
                    ye.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    ye.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return ye.event.trigger(e, t, n, !0)
            }
        });
        var rt = / jQuery\d+="(?:null|\d+)"/g,
            it = new RegExp("<(?:" + Je + ")[\\s/>]", "i"),
            ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            at = /<script|<style|<link/i,
            st = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ut = /^true\/(.*)/,
            lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            ct = y(se),
            ft = ct.appendChild(se.createElement("div"));
        ye.extend({
            htmlPrefilter: function(e) {
                return e.replace(ot, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, i, o, a, s, u = ye.contains(e.ownerDocument, e);
                if (ge.html5Clone || ye.isXMLDoc(e) || !it.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ft.innerHTML = e.outerHTML, ft.removeChild(o = ft.firstChild)), !(ge.noCloneEvent && ge.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ye.isXMLDoc(e)))
                    for (r = v(o), s = v(e), a = 0; null != (i = s[a]); ++a) r[a] && j(i, r[a]);
                if (t)
                    if (n)
                        for (s = s || v(e), r = r || v(o), a = 0; null != (i = s[a]); a++) D(i, r[a]);
                    else D(e, o);
                return r = v(o, "script"), r.length > 0 && x(r, !u && v(e, "script")), r = s = i = null, o
            },
            cleanData: function(e, t) {
                for (var n, r, i, o, a = 0, s = ye.expando, u = ye.cache, l = ge.attributes, c = ye.event.special; null != (n = e[a]); a++)
                    if ((t || Me(n)) && (i = n[s], o = i && u[i])) {
                        if (o.events)
                            for (r in o.events) c[r] ? ye.event.remove(n, r) : ye.removeEvent(n, r, o.handle);
                        u[i] && (delete u[i], l || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ae.push(i))
                    }
            }
        }), ye.fn.extend({
            domManip: L,
            detach: function(e) {
                return H(this, e, !0)
            },
            remove: function(e) {
                return H(this, e)
            },
            text: function(e) {
                return $e(this, function(e) {
                    return void 0 === e ? ye.text(this) : this.empty().append((this[0] && this[0].ownerDocument || se).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return L(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = k(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return L(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = k(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return L(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return L(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ye.cleanData(v(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && ye.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return ye.clone(this, e, t)
                })
            },
            html: function(e) {
                return $e(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(rt, "") : void 0;
                    if ("string" == typeof e && !at.test(e) && (ge.htmlSerialize || !it.test(e)) && (ge.leadingWhitespace || !Ve.test(e)) && !Ye[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = ye.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (ye.cleanData(v(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return L(this, arguments, function(t) {
                    var n = this.parentNode;
                    ye.inArray(this, e) < 0 && (ye.cleanData(v(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), ye.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            ye.fn[e] = function(e) {
                for (var n, r = 0, i = [], o = ye(e), a = o.length - 1; r <= a; r++) n = r === a ? this : this.clone(!0), ye(o[r])[t](n), ce.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var dt, pt = {
                HTML: "block",
                BODY: "block"
            },
            ht = /^margin/,
            gt = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$", "i"),
            mt = function(e, t, n, r) {
                var i, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = a[o];
                return i
            },
            yt = se.documentElement;
        ! function() {
            function e() {
                var e, c, f = se.documentElement;
                f.appendChild(u), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = i = s = !1, r = a = !0, n.getComputedStyle && (c = n.getComputedStyle(l), t = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, i = "4px" === (c || {
                    width: "4px"
                }).width, l.style.marginRight = "50%", r = "4px" === (c || {
                    marginRight: "4px"
                }).marginRight, e = l.appendChild(se.createElement("div")), e.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", l.style.width = "1px", a = !parseFloat((n.getComputedStyle(e) || {}).marginRight), l.removeChild(e)), l.style.display = "none", o = 0 === l.getClientRects().length, o && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", l.childNodes[0].style.borderCollapse = "separate", e = l.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === e[0].offsetHeight, o && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)), f.removeChild(u)
            }
            var t, r, i, o, a, s, u = se.createElement("div"),
                l = se.createElement("div");
            l.style && (l.style.cssText = "float:left;opacity:.5", ge.opacity = "0.5" === l.style.opacity, ge.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ge.clearCloneStyle = "content-box" === l.style.backgroundClip, u = se.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", u.appendChild(l), ge.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, ye.extend(ge, {
                reliableHiddenOffsets: function() {
                    return null == t && e(), o
                },
                boxSizingReliable: function() {
                    return null == t && e(), i
                },
                pixelMarginRight: function() {
                    return null == t && e(), r
                },
                pixelPosition: function() {
                    return null == t && e(), t
                },
                reliableMarginRight: function() {
                    return null == t && e(), a
                },
                reliableMarginLeft: function() {
                    return null == t && e(), s
                }
            }))
        }();
        var vt, xt, bt = /^(top|right|bottom|left)$/;
        n.getComputedStyle ? (vt = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n), t.getComputedStyle(e)
        }, xt = function(e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || vt(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || ye.contains(e.ownerDocument, e) || (a = ye.style(e, t)), n && !ge.pixelMarginRight() && gt.test(a) && ht.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 === a ? a : a + ""
        }) : yt.currentStyle && (vt = function(e) {
            return e.currentStyle
        }, xt = function(e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || vt(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), gt.test(a) && !bt.test(t) && (r = s.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
        });
        var wt = /alpha\([^)]*\)/i,
            Tt = /opacity\s*=\s*([^)]*)/i,
            Ct = /^(none|table(?!-c[ea]).+)/,
            Et = new RegExp("^(" + Pe + ")(.*)$", "i"),
            Nt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            kt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            St = ["Webkit", "O", "Moz", "ms"],
            At = se.createElement("div").style;
        ye.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = xt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: ge.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = ye.camelCase(t),
                        u = e.style;
                    if (t = ye.cssProps[s] || (ye.cssProps[s] = M(s) || s), a = ye.cssHooks[t] || ye.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                    if (o = typeof n, "string" === o && (i = Be.exec(n)) && i[1] && (n = m(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (ye.cssNumber[s] ? "" : "px")), ge.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                        u[t] = n
                    } catch (e) {}
                }
            },
            css: function(e, t, n, r) {
                var i, o, a, s = ye.camelCase(t);
                return t = ye.cssProps[s] || (ye.cssProps[s] = M(s) || s), a = ye.cssHooks[t] || ye.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = xt(e, t, r)), "normal" === o && t in kt && (o = kt[t]), "" === n || n ? (i = parseFloat(o), n === !0 || isFinite(i) ? i || 0 : o) : o
            }
        }), ye.each(["height", "width"], function(e, t) {
            ye.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return Ct.test(ye.css(e, "display")) && 0 === e.offsetWidth ? mt(e, Nt, function() {
                        return B(e, t, r)
                    }) : B(e, t, r)
                },
                set: function(e, n, r) {
                    var i = r && vt(e);
                    return R(e, n, r ? P(e, t, r, ge.boxSizing && "border-box" === ye.css(e, "boxSizing", !1, i), i) : 0)
                }
            }
        }), ge.opacity || (ye.cssHooks.opacity = {
            get: function(e, t) {
                return Tt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    r = e.currentStyle,
                    i = ye.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = r && r.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === ye.trim(o.replace(wt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = wt.test(o) ? o.replace(wt, i) : o + " " + i)
            }
        }), ye.cssHooks.marginRight = F(ge.reliableMarginRight, function(e, t) {
            if (t) return mt(e, {
                display: "inline-block"
            }, xt, [e, "marginRight"])
        }), ye.cssHooks.marginLeft = F(ge.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(xt(e, "marginLeft")) || (ye.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - mt(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            }) : 0)) + "px"
        }), ye.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            ye.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + We[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, ht.test(e) || (ye.cssHooks[e + t].set = R)
        }), ye.fn.extend({
            css: function(e, t) {
                return $e(this, function(e, t, n) {
                    var r, i, o = {},
                        a = 0;
                    if (ye.isArray(t)) {
                        for (r = vt(e), i = t.length; a < i; a++) o[t[a]] = ye.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? ye.style(e, t, n) : ye.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return O(this, !0)
            },
            hide: function() {
                return O(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Ie(this) ? ye(this).show() : ye(this).hide()
                })
            }
        }), ye.Tween = W, W.prototype = {
            constructor: W,
            init: function(e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || ye.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ye.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = W.propHooks[this.prop];
                return e && e.get ? e.get(this) : W.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = W.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ye.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : W.propHooks._default.set(this), this
            }
        }, W.prototype.init.prototype = W.prototype, W.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ye.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    ye.fx.step[e.prop] ? ye.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ye.cssProps[e.prop]] && !ye.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ye.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ye.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, ye.fx = W.prototype.init, ye.fx.step = {};
        var Dt, jt, Lt = /^(?:toggle|show|hide)$/,
            Ht = /queueHooks$/;
        ye.Animation = ye.extend(V, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return m(n.elem, e, Be.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    ye.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(qe);
                    for (var n, r = 0, i = e.length; r < i; r++) n = e[r], V.tweeners[n] = V.tweeners[n] || [], V.tweeners[n].unshift(t)
                },
                prefilters: [X],
                prefilter: function(e, t) {
                    t ? V.prefilters.unshift(e) : V.prefilters.push(e)
                }
            }), ye.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? ye.extend({}, e) : {
                    complete: n || !n && t || ye.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !ye.isFunction(t) && t
                };
                return r.duration = ye.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ye.fx.speeds ? ye.fx.speeds[r.duration] : ye.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                    ye.isFunction(r.old) && r.old.call(this), r.queue && ye.dequeue(this, r.queue)
                }, r
            }, ye.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(Ie).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = ye.isEmptyObject(e),
                        o = ye.speed(t, n, r),
                        a = function() {
                            var t = V(this, ye.extend({}, e), o);
                            (i || ye._data(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = ye.timers,
                            a = ye._data(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else
                            for (i in a) a[i] && a[i].stop && Ht.test(i) && r(a[i]);
                        for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                        !t && n || ye.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = ye._data(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = ye.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, ye.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), ye.each(["toggle", "show", "hide"], function(e, t) {
                var n = ye.fn[t];
                ye.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate($(t, !0), e, r, i)
                }
            }), ye.each({
                slideDown: $("show"),
                slideUp: $("hide"),
                slideToggle: $("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                ye.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), ye.timers = [], ye.fx.tick = function() {
                var e, t = ye.timers,
                    n = 0;
                for (Dt = ye.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                t.length || ye.fx.stop(), Dt = void 0
            }, ye.fx.timer = function(e) {
                ye.timers.push(e), e() ? ye.fx.start() : ye.timers.pop()
            }, ye.fx.interval = 13, ye.fx.start = function() {
                jt || (jt = n.setInterval(ye.fx.tick, ye.fx.interval))
            }, ye.fx.stop = function() {
                n.clearInterval(jt), jt = null
            }, ye.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ye.fn.delay = function(e, t) {
                return e = ye.fx ? ye.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, r) {
                    var i = n.setTimeout(t, e);
                    r.stop = function() {
                        n.clearTimeout(i)
                    }
                })
            },
            function() {
                var e, t = se.createElement("input"),
                    n = se.createElement("div"),
                    r = se.createElement("select"),
                    i = r.appendChild(se.createElement("option"));
                n = se.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", ge.getSetAttribute = "t" !== n.className, ge.style = /top/.test(e.getAttribute("style")), ge.hrefNormalized = "/a" === e.getAttribute("href"), ge.checkOn = !!t.value, ge.optSelected = i.selected, ge.enctype = !!se.createElement("form").enctype, r.disabled = !0, ge.optDisabled = !i.disabled, t = se.createElement("input"), t.setAttribute("value", ""), ge.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ge.radioValue = "t" === t.value
            }();
        var qt = /\r/g,
            _t = /[\x20\t\r\n\f]+/g;
        ye.fn.extend({
            val: function(e) {
                var t, n, r, i = this[0]; {
                    if (arguments.length) return r = ye.isFunction(e), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, ye(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ye.isArray(i) && (i = ye.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })), t = ye.valHooks[this.type] || ye.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                    if (i) return t = ye.valHooks[i.type] || ye.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(qt, "") : null == n ? "" : n)
                }
            }
        }), ye.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = ye.find.attr(e, "value");
                        return null != t ? t : ye.trim(ye.text(e)).replace(_t, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                            if (n = r[u], (n.selected || u === i) && (ge.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ye.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ye(n).val(), o) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = ye.makeArray(t), a = i.length; a--;)
                            if (r = i[a], ye.inArray(ye.valHooks.option.get(r), o) > -1) try {
                                r.selected = n = !0
                            } catch (e) {
                                r.scrollHeight
                            } else r.selected = !1;
                        return n || (e.selectedIndex = -1), i
                    }
                }
            }
        }), ye.each(["radio", "checkbox"], function() {
            ye.valHooks[this] = {
                set: function(e, t) {
                    if (ye.isArray(t)) return e.checked = ye.inArray(ye(e).val(), t) > -1
                }
            }, ge.checkOn || (ye.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Ft, Mt, Ot = ye.expr.attrHandle,
            Rt = /^(?:checked|selected)$/i,
            Pt = ge.getSetAttribute,
            Bt = ge.input;
        ye.fn.extend({
            attr: function(e, t) {
                return $e(this, ye.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ye.removeAttr(this, e)
                })
            }
        }), ye.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ye.prop(e, t, n) : (1 === o && ye.isXMLDoc(e) || (t = t.toLowerCase(), i = ye.attrHooks[t] || (ye.expr.match.bool.test(t) ? Mt : Ft)), void 0 !== n ? null === n ? void ye.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = ye.find.attr(e, t), null == r ? void 0 : r))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ge.radioValue && "radio" === t && ye.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r, i = 0,
                    o = t && t.match(qe);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++];) r = ye.propFix[n] || n, ye.expr.match.bool.test(n) ? Bt && Pt || !Rt.test(n) ? e[r] = !1 : e[ye.camelCase("default-" + n)] = e[r] = !1 : ye.attr(e, n, ""), e.removeAttribute(Pt ? n : r)
            }
        }), Mt = {
            set: function(e, t, n) {
                return t === !1 ? ye.removeAttr(e, n) : Bt && Pt || !Rt.test(n) ? e.setAttribute(!Pt && ye.propFix[n] || n, n) : e[ye.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, ye.each(ye.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = Ot[t] || ye.find.attr;
            Bt && Pt || !Rt.test(t) ? Ot[t] = function(e, t, r) {
                var i, o;
                return r || (o = Ot[t], Ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Ot[t] = o), i
            } : Ot[t] = function(e, t, n) {
                if (!n) return e[ye.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Bt && Pt || (ye.attrHooks.value = {
            set: function(e, t, n) {
                return ye.nodeName(e, "input") ? void(e.defaultValue = t) : Ft && Ft.set(e, t, n)
            }
        }), Pt || (Ft = {
            set: function(e, t, n) {
                var r = e.getAttributeNode(n);
                if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n)) return t
            }
        }, Ot.id = Ot.name = Ot.coords = function(e, t, n) {
            var r;
            if (!n) return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
        }, ye.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                if (n && n.specified) return n.value
            },
            set: Ft.set
        }, ye.attrHooks.contenteditable = {
            set: function(e, t, n) {
                Ft.set(e, "" !== t && t, n)
            }
        }, ye.each(["width", "height"], function(e, t) {
            ye.attrHooks[t] = {
                set: function(e, n) {
                    if ("" === n) return e.setAttribute(t, "auto"), n
                }
            }
        })), ge.style || (ye.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || void 0
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Wt = /^(?:input|select|textarea|button|object)$/i,
            It = /^(?:a|area)$/i;
        ye.fn.extend({
            prop: function(e, t) {
                return $e(this, ye.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = ye.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (e) {}
                })
            }
        }), ye.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ye.isXMLDoc(e) || (t = ye.propFix[t] || t, i = ye.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = ye.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Wt.test(e.nodeName) || It.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), ge.hrefNormalized || ye.each(["href", "src"], function(e, t) {
            ye.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ge.optSelected || (ye.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), ye.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ye.propFix[this.toLowerCase()] = this
        }), ge.enctype || (ye.propFix.enctype = "encoding");
        var $t = /[\t\r\n\f]/g;
        ye.fn.extend({
            addClass: function(e) {
                var t, n, r, i, o, a, s, u = 0;
                if (ye.isFunction(e)) return this.each(function(t) {
                    ye(this).addClass(e.call(this, t, J(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(qe) || []; n = this[u++];)
                        if (i = J(n), r = 1 === n.nodeType && (" " + i + " ").replace($t, " ")) {
                            for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            s = ye.trim(r), i !== s && ye.attr(n, "class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, a, s, u = 0;
                if (ye.isFunction(e)) return this.each(function(t) {
                    ye(this).removeClass(e.call(this, t, J(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(qe) || []; n = this[u++];)
                        if (i = J(n), r = 1 === n.nodeType && (" " + i + " ").replace($t, " ")) {
                            for (a = 0; o = t[a++];)
                                for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                            s = ye.trim(r), i !== s && ye.attr(n, "class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ye.isFunction(e) ? this.each(function(n) {
                    ye(this).toggleClass(e.call(this, n, J(this), t), t)
                }) : this.each(function() {
                    var t, r, i, o;
                    if ("string" === n)
                        for (r = 0, i = ye(this), o = e.match(qe) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = J(this), t && ye._data(this, "__className__", t), ye.attr(this, "class", t || e === !1 ? "" : ye._data(this, "__className__") || ""));
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];)
                    if (1 === n.nodeType && (" " + J(n) + " ").replace($t, " ").indexOf(t) > -1) return !0;
                return !1
            }
        }), ye.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            ye.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ye.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        var zt = n.location,
            Xt = ye.now(),
            Ut = /\?/,
            Vt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ye.parseJSON = function(e) {
            if (n.JSON && n.JSON.parse) return n.JSON.parse(e + "");
            var t, r = null,
                i = ye.trim(e + "");
            return i && !ye.trim(i.replace(Vt, function(e, n, i, o) {
                return t && n && (r = 0), 0 === r ? e : (t = i || n, r += !o - !i, "")
            })) ? Function("return " + i)() : ye.error("Invalid JSON: " + e)
        }, ye.parseXML = function(e) {
            var t, r;
            if (!e || "string" != typeof e) return null;
            try {
                n.DOMParser ? (r = new n.DOMParser, t = r.parseFromString(e, "text/xml")) : (t = new n.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
            } catch (e) {
                t = void 0
            }
            return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ye.error("Invalid XML: " + e), t
        };
        var Jt = /#.*$/,
            Yt = /([?&])_=[^&]*/,
            Gt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Kt = /^(?:GET|HEAD)$/,
            Zt = /^\/\//,
            en = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            tn = {},
            nn = {},
            rn = "*/".concat("*"),
            on = zt.href,
            an = en.exec(on.toLowerCase()) || [];
        ye.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: on,
                type: "GET",
                isLocal: Qt.test(an[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": rn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ye.parseJSON,
                    "text xml": ye.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Q(Q(e, ye.ajaxSettings), t) : Q(ye.ajaxSettings, e)
            },
            ajaxPrefilter: Y(tn),
            ajaxTransport: Y(nn),
            ajax: function(e, t) {
                function r(e, t, r, i) {
                    var o, f, v, x, w, C = t;
                    2 !== b && (b = 2, u && n.clearTimeout(u), c = void 0, s = i || "", T.readyState = e > 0 ? 4 : 0, o = e >= 200 && e < 300 || 304 === e, r && (x = K(d, T, r)), x = Z(d, x, T, o), o ? (d.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ye.lastModified[a] = w), w = T.getResponseHeader("etag"), w && (ye.etag[a] = w)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = x.state, f = x.data, v = x.error, o = !v)) : (v = C, !e && C || (C = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || C) + "", o ? g.resolveWith(p, [f, C, T]) : g.rejectWith(p, [T, C, v]), T.statusCode(y), y = void 0, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, d, o ? f : v]), m.fireWith(p, [T, C]), l && (h.trigger("ajaxComplete", [T, d]), --ye.active || ye.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, o, a, s, u, l, c, f, d = ye.ajaxSetup({}, t),
                    p = d.context || d,
                    h = d.context && (p.nodeType || p.jquery) ? ye(p) : ye.event,
                    g = ye.Deferred(),
                    m = ye.Callbacks("once memory"),
                    y = d.statusCode || {},
                    v = {},
                    x = {},
                    b = 0,
                    w = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!f)
                                    for (f = {}; t = Gt.exec(s);) f[t[1].toLowerCase()] = t[2];
                                t = f[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = x[n] = x[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (d.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (b < 2)
                                    for (t in e) y[t] = [y[t], e[t]];
                                else T.always(e[T.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return c && c.abort(t), r(0, t), this
                        }
                    };
                if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, d.url = ((e || d.url || on) + "").replace(Jt, "").replace(Zt, an[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ye.trim(d.dataType || "*").toLowerCase().match(qe) || [""], null == d.crossDomain && (i = en.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === an[1] && i[2] === an[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (an[3] || ("http:" === an[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ye.param(d.data, d.traditional)), G(tn, d, t, T), 2 === b) return T;
                l = ye.event && d.global, l && 0 === ye.active++ && ye.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Kt.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (Ut.test(a) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Yt.test(a) ? a.replace(Yt, "$1_=" + Xt++) : a + (Ut.test(a) ? "&" : "?") + "_=" + Xt++)), d.ifModified && (ye.lastModified[a] && T.setRequestHeader("If-Modified-Since", ye.lastModified[a]), ye.etag[a] && T.setRequestHeader("If-None-Match", ye.etag[a])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + rn + "; q=0.01" : "") : d.accepts["*"]);
                for (o in d.headers) T.setRequestHeader(o, d.headers[o]);
                if (d.beforeSend && (d.beforeSend.call(p, T, d) === !1 || 2 === b)) return T.abort();
                w = "abort";
                for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) T[o](d[o]);
                if (c = G(nn, d, t, T)) {
                    if (T.readyState = 1, l && h.trigger("ajaxSend", [T, d]), 2 === b) return T;
                    d.async && d.timeout > 0 && (u = n.setTimeout(function() {
                        T.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, c.send(v, r)
                    } catch (e) {
                        if (!(b < 2)) throw e;
                        r(-1, e)
                    }
                } else r(-1, "No Transport");
                return T
            },
            getJSON: function(e, t, n) {
                return ye.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return ye.get(e, void 0, t, "script")
            }
        }), ye.each(["get", "post"], function(e, t) {
            ye[t] = function(e, n, r, i) {
                return ye.isFunction(n) && (i = i || r, r = n, n = void 0), ye.ajax(ye.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                }, ye.isPlainObject(e) && e))
            }
        }), ye._evalUrl = function(e) {
            return ye.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, ye.fn.extend({
            wrapAll: function(e) {
                if (ye.isFunction(e)) return this.each(function(t) {
                    ye(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = ye(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return ye.isFunction(e) ? this.each(function(t) {
                    ye(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = ye(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = ye.isFunction(e);
                return this.each(function(n) {
                    ye(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ye.nodeName(this, "body") || ye(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ye.expr.filters.hidden = function(e) {
            return ge.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : te(e)
        }, ye.expr.filters.visible = function(e) {
            return !ye.expr.filters.hidden(e)
        };
        var sn = /%20/g,
            un = /\[\]$/,
            ln = /\r?\n/g,
            cn = /^(?:submit|button|image|reset|file)$/i,
            fn = /^(?:input|select|textarea|keygen)/i;
        ye.param = function(e, t) {
            var n, r = [],
                i = function(e, t) {
                    t = ye.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = ye.ajaxSettings && ye.ajaxSettings.traditional), ye.isArray(e) || e.jquery && !ye.isPlainObject(e)) ye.each(e, function() {
                i(this.name, this.value)
            });
            else
                for (n in e) ne(n, e[n], t, i);
            return r.join("&").replace(sn, "+")
        }, ye.fn.extend({
            serialize: function() {
                return ye.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ye.prop(this, "elements");
                    return e ? ye.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ye(this).is(":disabled") && fn.test(this.nodeName) && !cn.test(e) && (this.checked || !ze.test(e))
                }).map(function(e, t) {
                    var n = ye(this).val();
                    return null == n ? null : ye.isArray(n) ? ye.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(ln, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(ln, "\r\n")
                    }
                }).get()
            }
        }), ye.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function() {
            return this.isLocal ? ie() : se.documentMode > 8 ? re() : /^(get|post|head|put|delete|options)$/i.test(this.type) && re() || ie()
        } : re;
        var dn = 0,
            pn = {},
            hn = ye.ajaxSettings.xhr();
        n.attachEvent && n.attachEvent("onunload", function() {
            for (var e in pn) pn[e](void 0, !0)
        }), ge.cors = !!hn && "withCredentials" in hn, hn = ge.ajax = !!hn, hn && ye.ajaxTransport(function(e) {
            if (!e.crossDomain || ge.cors) {
                var t;
                return {
                    send: function(r, i) {
                        var o, a = e.xhr(),
                            s = ++dn;
                        if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (o in e.xhrFields) a[o] = e.xhrFields[o];
                        e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        for (o in r) void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
                        a.send(e.hasContent && e.data || null), t = function(n, r) {
                            var o, u, l;
                            if (t && (r || 4 === a.readyState))
                                if (delete pn[s], t = void 0, a.onreadystatechange = ye.noop, r) 4 !== a.readyState && a.abort();
                                else {
                                    l = {}, o = a.status, "string" == typeof a.responseText && (l.text = a.responseText);
                                    try {
                                        u = a.statusText
                                    } catch (e) {
                                        u = ""
                                    }
                                    o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                                }
                            l && i(o, u, l, a.getAllResponseHeaders())
                        }, e.async ? 4 === a.readyState ? n.setTimeout(t) : a.onreadystatechange = pn[s] = t : t()
                    },
                    abort: function() {
                        t && t(void 0, !0)
                    }
                }
            }
        }), ye.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return ye.globalEval(e), e
                }
            }
        }), ye.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), ye.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = se.head || ye("head")[0] || se.documentElement;
                return {
                    send: function(r, i) {
                        t = se.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var gn = [],
            mn = /(=)\?(?=&|$)|\?\?/;
        ye.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = gn.pop() || ye.expando + "_" + Xt++;
                return this[e] = !0, e
            }
        }), ye.ajaxPrefilter("json jsonp", function(e, t, r) {
            var i, o, a, s = e.jsonp !== !1 && (mn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && mn.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = ye.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(mn, "$1" + i) : e.jsonp !== !1 && (e.url += (Ut.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return a || ye.error(i + " was not called"), a[0]
            }, e.dataTypes[0] = "json", o = n[i], n[i] = function() {
                a = arguments
            }, r.always(function() {
                void 0 === o ? ye(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, gn.push(i)), a && ye.isFunction(o) && o(a[0]), a = o = void 0
            }), "script"
        }), ye.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || se;
            var r = ke.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = w([e], t, i), i && i.length && ye(i).remove(), ye.merge([], r.childNodes))
        };
        var yn = ye.fn.load;
        ye.fn.load = function(e, t, n) {
            if ("string" != typeof e && yn) return yn.apply(this, arguments);
            var r, i, o, a = this,
                s = e.indexOf(" ");
            return s > -1 && (r = ye.trim(e.slice(s, e.length)), e = e.slice(0, s)), ye.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && ye.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, a.html(r ? ye("<div>").append(ye.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }), this
        }, ye.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            ye.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), ye.expr.filters.animated = function(e) {
            return ye.grep(ye.timers, function(t) {
                return e === t.elem
            }).length
        }, ye.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, s, u, l, c = ye.css(e, "position"),
                    f = ye(e),
                    d = {};
                "static" === c && (e.style.position = "relative"), s = f.offset(), o = ye.css(e, "top"), u = ye.css(e, "left"), l = ("absolute" === c || "fixed" === c) && ye.inArray("auto", [o, u]) > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ye.isFunction(t) && (t = t.call(e, n, ye.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
            }
        }, ye.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    ye.offset.setOffset(this, e, t)
                });
                var t, n, r = {
                        top: 0,
                        left: 0
                    },
                    i = this[0],
                    o = i && i.ownerDocument;
                if (o) return t = o.documentElement, ye.contains(t, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = oe(o), {
                    top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : r
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        r = this[0];
                    return "fixed" === ye.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ye.nodeName(e[0], "html") || (n = e.offset()), n.top += ye.css(e[0], "borderTopWidth", !0), n.left += ye.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - ye.css(r, "marginTop", !0),
                        left: t.left - n.left - ye.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && !ye.nodeName(e, "html") && "static" === ye.css(e, "position");) e = e.offsetParent;
                    return e || yt
                })
            }
        }), ye.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            ye.fn[e] = function(r) {
                return $e(this, function(e, r, i) {
                    var o = oe(e);
                    return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? ye(o).scrollLeft() : i, n ? i : ye(o).scrollTop()) : e[r] = i)
                }, e, r, arguments.length, null)
            }
        }), ye.each(["top", "left"], function(e, t) {
            ye.cssHooks[t] = F(ge.pixelPosition, function(e, n) {
                if (n) return n = xt(e, t), gt.test(n) ? ye(e).position()[t] + "px" : n
            })
        }), ye.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            ye.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                ye.fn[r] = function(r, i) {
                    var o = arguments.length && (n || "boolean" != typeof r),
                        a = n || (r === !0 || i === !0 ? "margin" : "border");
                    return $e(this, function(t, n, r) {
                        var i;
                        return ye.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ye.css(t, n, a) : ye.style(t, n, r, a)
                    }, t, o ? r : void 0, o, null)
                }
            })
        }), ye.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), ye.fn.size = function() {
            return this.length
        }, ye.fn.andSelf = ye.fn.addBack, r = [], i = function() {
            return ye
        }.apply(t, r), !(void 0 !== i && (e.exports = i));
        var vn = n.jQuery,
            xn = n.$;
        return ye.noConflict = function(e) {
            return n.$ === ye && (n.$ = xn), e && n.jQuery === ye && (n.jQuery = vn), ye
        }, o || (n.jQuery = n.$ = ye), ye
    })
}]);